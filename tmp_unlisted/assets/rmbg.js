/* ═══════════════════════════════════════════════════════════════════════════
   RMBG.JS — Détourage IA partagé (Transformers.js, modèle briaai/RMBG-1.4)

   Extrait de generators/fiche-metier/index.html, où il vivait en dur. Energy
   Talks en a besoin aussi, et dupliquer un modèle de 50 Mo et sa gestion de
   cache dans deux pages était la garantie de les voir diverger.

   La page hôte doit avoir chargé le module :
     <script type="module">
     import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js";
     env.allowLocalModels = false;
     window.__transformers = { pipeline, env };
     window.__transformersReady = true;
     </script>

   API :
     SPGRmbg.disponible()        → true si le module est chargé
     SPGRmbg.detourer(dataUrl)   → Promise<dataUrl PNG à fond transparent>

   Le pipeline est mis en cache au niveau du module, pas du composant React :
   sans ça le modèle était réinstancié à chaque rendu.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

  var pipeCache = null;

  function disponible(){ return !!global.__transformers; }

  function chargerPipeline(){
    if(pipeCache) return Promise.resolve(pipeCache);
    var tf = global.__transformers;
    if(!tf) return Promise.reject(new Error("Transformers.js non disponible"));
    return tf.pipeline("image-segmentation","briaai/RMBG-1.4",{device:"wasm"})
      .then(function(p){ pipeCache=p; return p; });
  }

  /* Le résultat de Transformers.js v3 prend deux formes selon la version :
     soit item.output, un PNG déjà détouré, soit item.mask, un masque de
     niveaux de gris à appliquer nous-mêmes. Les deux sont gérées. */
  function detourer(dataUrl){
    if(!dataUrl) return Promise.reject(new Error("Aucune image"));
    return new Promise(function(resolve,reject){
      var orig = new Image();
      orig.onerror = function(){ reject(new Error("Impossible de charger l'image")); };
      orig.onload = function(){
        var W=orig.naturalWidth, H=orig.naturalHeight;
        chargerPipeline()
          .then(function(pipe){ return pipe(dataUrl); })
          .then(function(result){
            var item = (result && result[0]) || result;

            if(item.output && (item.output instanceof HTMLImageElement || item.output.tagName==="IMG")){
              var o=item.output;
              var cv=document.createElement("canvas");
              cv.width=o.naturalWidth||W; cv.height=o.naturalHeight||H;
              var ctx=cv.getContext("2d");
              ctx.clearRect(0,0,cv.width,cv.height);
              ctx.drawImage(o,0,0);
              return resolve(cv.toDataURL("image/png"));
            }

            var mask=item.mask;
            if(!mask) throw new Error("Résultat inattendu : "+Object.keys(item||{}).join(", "));

            var cv2=document.createElement("canvas");
            cv2.width=W; cv2.height=H;
            var c2=cv2.getContext("2d");
            c2.drawImage(orig,0,0);

            var mCv=document.createElement("canvas");
            mCv.width=mask.width; mCv.height=mask.height;
            var mCtx=mCv.getContext("2d");
            var raw = mask.data instanceof Uint8Array ? mask.data : new Uint8Array(mask.data);
            var rgba = new Uint8ClampedArray(raw.length*4);
            for(var i=0;i<raw.length;i++){
              rgba[i*4]=255; rgba[i*4+1]=255; rgba[i*4+2]=255; rgba[i*4+3]=raw[i];
            }
            mCtx.putImageData(new ImageData(rgba,mask.width,mask.height),0,0);

            c2.globalCompositeOperation="destination-in";
            c2.drawImage(mCv,0,0,W,H);
            resolve(cv2.toDataURL("image/png"));
          })
          .catch(reject);
      };
      orig.src=dataUrl;
    });
  }

  global.SPGRmbg = { disponible:disponible, detourer:detourer };

})(window);

/* ═══════════════════════════════════════════════════════════════════════════
   CONTOUR BLANC — repris tel quel de Fiche Métier.
   Dessiné en pixels réels sur un canvas plutôt qu'en filtre CSS : le rendu
   est identique d'un moteur d'export à l'autre, ce qu'un drop-shadow ne
   garantit pas. Le principe : silhouette blanche redessinée 24 fois sur un
   cercle de rayon « outline », puis la photo par dessus.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){
  function contourBlanc(dataUrl, ratio){
    ratio = (ratio===undefined) ? 0.012 : ratio;
    return new Promise(function(resolve,reject){
      var img=new Image();
      img.onerror=function(){ reject(new Error("Impossible de charger l'image")); };
      img.onload=function(){
        var w=img.naturalWidth, h=img.naturalHeight;
        var outline=Math.max(2, Math.round(w*ratio));

        var sil=document.createElement("canvas");
        sil.width=w; sil.height=h;
        var sctx=sil.getContext("2d");
        sctx.drawImage(img,0,0);
        sctx.globalCompositeOperation="source-in";
        sctx.fillStyle="#ffffff";
        sctx.fillRect(0,0,w,h);

        var cv=document.createElement("canvas");
        cv.width=w+outline*2; cv.height=h+outline*2;
        var ctx=cv.getContext("2d");
        var pas=24;
        for(var i=0;i<pas;i++){
          var a=(i/pas)*Math.PI*2;
          ctx.drawImage(sil, outline+Math.cos(a)*outline, outline+Math.sin(a)*outline);
        }
        ctx.drawImage(img, outline, outline);
        resolve(cv.toDataURL("image/png"));
      };
      img.src=dataUrl;
    });
  }
  global.SPGRmbg.contourBlanc = contourBlanc;
})(window);
