/* ═══════════════════════════════════════════════════════════════════════════
   RICH-BODY.JS — Composants React partagés
   Dépend de : te-charte.js (T, TE_WHITE, parseRich)
   Dépend de : React (window.React)

   Exporte sur window (via variables globales) :
     parseRich, RichBody, FileDrop, DownloadIcon, NavMark
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Parseur rich text ─────────────────────────────────────────────────── */
function parseRich(t){
  /* Ne pas traverser les sauts de ligne dans les marqueurs */
  var out=[],re=/(\*\*[^\n]+?\*\*|__[^\n]+?__)/g,last=0,m;
  while((m=re.exec(t))!==null){
    if(m.index>last) out.push({t:"n",v:t.slice(last,m.index)});
    out.push(m[0].slice(0,2)==="**"?{t:"h",v:m[0].slice(2,-2)}:{t:"u",v:m[0].slice(2,-2)});
    last=re.lastIndex;
  }
  if(last<t.length) out.push({t:"n",v:t.slice(last)});
  return out;
}

/* ── RichBody ──────────────────────────────────────────────────────────────
   Rendu de texte enrichi avec surlignage et soulignage.
   Les rectangles de fond sont mesurés via getClientRects() et dessinés
   en position absolue — résultat identique en preview et export Puppeteer.

   Props : text, fs, lh, grad, color, align, live, textMode,
           inverted, gradFrom, gradTo
   ─────────────────────────────────────────────────────────────────────── */
function RichBody(props){
  var e=React.createElement,useState=React.useState,useRef=React.useRef,
      useEffect=React.useEffect,useLayoutEffect=React.useLayoutEffect;
  var fs=props.fs, lh=props.lh, grad=props.grad;
  var hostRef=useRef(null);
  var s0=useState({h:[],u:[],n:[]}); var M=s0[0],setM=s0[1];
  var s1=useState(0); var setTick=s1[1];

  useEffect(function(){
    if(document.fonts&&document.fonts.ready){
      document.fonts.ready.then(function(){ setTick(function(t){return t+1;}); });
    }
  },[]);

  useLayoutEffect(function(){
    var host=hostRef.current; if(!host) return;
    var base=host.getBoundingClientRect();
    var SC=host.offsetWidth?(base.width/host.offsetWidth):1;
    if(!SC||!isFinite(SC)||SC<=0) SC=1;
    function N(v){ return v/SC; }

    var res={h:[],u:[],n:[]};
    var segs=host.querySelectorAll("[data-seg]");
    for(var i=0;i<segs.length;i++){
      var kind=segs[i].getAttribute("data-seg");
      var rs=segs[i].getClientRects();
      var valid=[];
      for(var j=0;j<rs.length;j++){ if(rs[j].width>=0.5) valid.push(rs[j]); }
      for(var j=0;j<valid.length;j++){
        var r=valid[j];
        var o={x:N(r.left-base.left),y:N(r.top-base.top),
               w:N(r.width),h:N(r.height),b:N(r.bottom-base.top),
               isFirst:j===0,isLast:j===valid.length-1};
        if(kind==="h") res.h.push(o);
        else if(kind==="u") res.u.push(o);
        else res.n.push(o);
      }
    }
    if(JSON.stringify(res)!==JSON.stringify(M)) setM(res);
  });

  function renderParts(text,useGrad,color,inv){
    var lines=text.split("\n"), out=[];
    lines.forEach(function(line,li){
      if(li>0) out.push(e("br",{key:"br"+li}));
      var parts=parseRich(line);
      parts.forEach(function(p,pi){
        var key=li+"-"+pi;
        if(p.t==="h"){
          if(pi>0) out.push(e("span",{key:key+"a",
            style:{fontFamily:"'Nunito',sans-serif",fontWeight:T.FW_TEXT}},"\u00a0"));
          out.push(inv
            ? e("span",{key:key,"data-seg":"h",
                style:{fontWeight:T.FW_HIGHLIGHT,fontFamily:"'Nunito',sans-serif",
                       background:TE_WHITE,WebkitBackgroundClip:"text",backgroundClip:"text",
                       color:"transparent",WebkitTextFillColor:"transparent",
                       backgroundImage:"linear-gradient(90deg,"+(props.gradFrom||"#0098E3")+" 0%,"+(props.gradTo||"#4632FF")+" 100%)"}},p.v)
            : e("span",{key:key,"data-seg":"h",
                style:{color:TE_WHITE,fontWeight:T.FW_HIGHLIGHT,fontFamily:"'Nunito',sans-serif",
                       WebkitTextFillColor:TE_WHITE}},p.v));
          out.push(e("span",{key:key+"b",style:{fontFamily:"'Nunito',sans-serif",fontWeight:T.FW_TEXT}},"\u00a0"));
        } else if(p.t==="u"){
          out.push(e("span",{key:key,"data-seg":"u",
            style:{fontFamily:"'Nunito',sans-serif",fontWeight:T.FW_UNDERLINE,
                   color:useGrad?"transparent":(inv?TE_WHITE:color),
                   WebkitTextFillColor:useGrad?"transparent":undefined}},p.v));
        } else {
          out.push(useGrad
            ? e("span",{key:key,"data-seg":"n",
                style:{fontFamily:"'Nunito',sans-serif",fontWeight:T.FW_TEXT,
                       color:"transparent",WebkitTextFillColor:"transparent"}},p.v)
            : e("span",{key:key,
                style:{fontFamily:"'Nunito',sans-serif",fontWeight:T.FW_TEXT,
                       color:color,WebkitTextFillColor:color}},p.v));
        }
      });
    });
    return out;
  }

  var useGrad=(props.textMode==="grad");
  var inv=props.inverted||false;
  var H_PAD_X=fs*T.HIGHLIGHT_PAD_X;
  var H_H=fs*T.HIGHLIGHT_H;
  var U_TH=Math.max(3,fs*T.UNDERLINE_TH);
  var U_OFF=fs*T.UNDERLINE_OFF;

  return e("div",{style:{position:"relative"}},
    M.h.map(function(r,i){
      var cy=r.y+r.h/2;
      var padL=r.isFirst?H_PAD_X:0, padR=r.isLast?H_PAD_X:0;
      return e("div",{key:"h"+i,"data-hl":"1",style:{position:"absolute",
        left:r.x-padL,top:cy-H_H/2,width:r.w+padL+padR,height:H_H,
        backgroundImage:inv?"none":grad,
        backgroundColor:inv?TE_WHITE:"transparent",
        borderRadius:2,zIndex:0}});
    }),
    M.u.map(function(r,i){
      return e("div",{key:"u"+i,"data-ul":"1",style:{position:"absolute",
        left:r.x,top:r.b-U_OFF,width:r.w,height:U_TH,
        backgroundImage:inv?"none":grad,
        backgroundColor:inv?TE_WHITE:"transparent",
        borderRadius:U_TH/2,zIndex:0}});
    }),
    e("div",{ref:hostRef,"data-richhost":"1",style:{position:"relative",zIndex:2,
        fontFamily:"'Nunito',sans-serif",fontWeight:T.FW_TEXT,
        backgroundImage:useGrad?grad:undefined,
        WebkitBackgroundClip:useGrad?"text":undefined,
        backgroundClip:useGrad?"text":undefined,
        color:useGrad?"transparent":props.color,
        WebkitTextFillColor:useGrad?"transparent":undefined,
        fontSize:fs,lineHeight:lh,textAlign:props.align}},
      props.live?e("span",{style:{display:"inline-block",
        width:fs*0.9,height:fs*0.9,borderRadius:"50%",
        background:"#E70000",marginRight:fs*0.28,
        verticalAlign:"middle",marginBottom:fs*0.08,flexShrink:0}}):null,
      renderParts(props.text,useGrad,props.color,inv))
  );
}

/* ── FileDrop ──────────────────────────────────────────────────────────── */
function FileDrop(p){
  var e=React.createElement,useRef=React.useRef;
  var r=useRef(null);
  function take(f){
    if(!f||!f.type||f.type.indexOf("image/")!==0) return;
    var rd=new FileReader();
    rd.onload=function(ev){p.onChange(ev.target.result);};
    rd.readAsDataURL(f);
  }
  return e("div",{className:"file-drop"+(p.small?" small":""),
    onClick:function(){if(r.current)r.current.click();},
    onDragOver:function(ev){ev.preventDefault();},
    onDrop:function(ev){ev.preventDefault();take(ev.dataTransfer.files[0]);}},
    p.value
      ?e(React.Fragment,null,
          e("img",{src:p.value,alt:""}),
          e("button",{className:"remove-btn",onClick:function(ev){ev.stopPropagation();p.onChange(null);}},
            e("svg",{viewBox:"0 0 16 16",width:14,height:14,fill:"none",stroke:"#666",strokeWidth:2},
              e("line",{x1:4,y1:4,x2:12,y2:12}),e("line",{x1:12,y1:4,x2:4,y2:12}))))
      :e("div",{className:"file-drop-empty"},
          e("svg",{viewBox:"0 0 24 24",width:20,height:20,fill:"none",stroke:"#a3a3a3",strokeWidth:1.5},
            e("rect",{x:3,y:3,width:18,height:18,rx:3}),
            e("circle",{cx:8.5,cy:8.5,r:1.5}),
            e("path",{d:"M21 15l-5-5L5 21"})),
          e("span",null,p.placeholder||"Cliquer ou déposer")),
    e("input",{ref:r,type:"file",accept:"image/*",style:{display:"none"},
      onChange:function(ev){take(ev.target.files[0]);}}));
}

/* ── DownloadIcon ──────────────────────────────────────────────────────── */
function DownloadIcon(){
  var e=React.createElement;
  return e("svg",{viewBox:"0 0 24 24",width:18,height:18,fill:"none",stroke:"currentColor",strokeWidth:2},
    e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),
    e("polyline",{points:"7 10 12 15 17 10"}),
    e("line",{x1:12,y1:15,x2:12,y2:3}));
}

/* ── NavMark (bouton carrousel) ────────────────────────────────────────── */
function NavMark(p){
  var e=React.createElement;
  var bw=p.w, bh=p.h, br=p.radius;
  var boxStyle=p.onGrad
    ? {width:bw,height:bh,borderRadius:br,
       background:"transparent",border:"2px solid "+TE_WHITE,boxSizing:"border-box",
       display:"flex",alignItems:"center",justifyContent:"center"}
    : {width:bw,height:bh,borderRadius:br,
       backgroundImage:p.grad,display:"flex",alignItems:"center",justifyContent:"center"};
  if(p.kind==="dot"){
    var ds=bh*0.32;
    return e("div",{style:boxStyle},
      e("div",{style:{width:ds,height:ds,borderRadius:"50%",background:TE_WHITE}}));
  }
  return e("div",{style:boxStyle},
    e("img",{src:(window.PICTO_BASE||"../../assets/")+"pictos/arrow-next.png",alt:"",
      style:{width:"59%",height:"auto",display:"block",objectFit:"contain"}}));
}
