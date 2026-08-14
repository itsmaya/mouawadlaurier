/* ═══════════════════════════════════════════════════════════════════════════
   DRAG-IMAGE.JS — Composant React d'image repositionnable par drag
   Dépend de : React (window.React)

   Props : src, x, y, zoom, blur, flipH, flipV,
           w, h, scale, natW, natH,
           brightness, saturation, contrast,
           onChange(x, y)
   ═══════════════════════════════════════════════════════════════════════════ */
function DragImage(props){
  var e=React.createElement,useRef=React.useRef,useState=React.useState,
      useEffect=React.useEffect;
  var dragRef=useRef(null);
  var dragging=useRef(false);
  var last=useRef({x:0,y:0});
  var nat=useRef({w:0,h:0});
  var rnState=useState(0); var setRn=rnState[1];

  function clamp(v,mn,mx){ return Math.max(mn,Math.min(mx,v)); }

  function getContainerSize(){
    if(!dragRef.current) return {w:props.w||300,h:props.h||300};
    return {w:dragRef.current.offsetWidth,h:dragRef.current.offsetHeight};
  }

  function computeCover(cw,ch,nw,nh,zf,px,py){
    var iw,ih;
    if(nw>0&&nh>0){
      var ir=nw/nh, cr=cw/ch;
      if(ir>cr){ih=ch;iw=ih*ir;}else{iw=cw;ih=iw/ir;}
    } else {iw=cw;ih=ch;}
    iw*=zf; ih*=zf;
    if(iw<cw){iw=cw; ih=iw/(nw/nh||1);}
    if(ih<ch){ih=ch; iw=ih*(nw/nh||1);}
    var rx=Math.max(0,iw-cw);
    var ry=Math.max(0,ih-ch);
    return {iw:iw,ih:ih,left:-(rx*(px/100)),top:-(ry*(py/100)),rx:rx,ry:ry};
  }

  function onDown(ev){
    if(!props.src) return;
    ev.preventDefault();
    dragging.current=true;
    var pt=ev.touches?ev.touches[0]:ev;
    last.current={x:pt.clientX,y:pt.clientY};
  }
  function onMove(ev){
    if(!dragging.current) return;
    ev.preventDefault();
    var pt=ev.touches?ev.touches[0]:ev;
    var dx=pt.clientX-last.current.x;
    var dy=pt.clientY-last.current.y;
    last.current={x:pt.clientX,y:pt.clientY};
    var n=nat.current;
    var nw=props.natW||n.w||0, nh=props.natH||n.h||0;
    var zf=(props.zoom||100)/100;
    var sz=getContainerSize();
    var c=computeCover(sz.w,sz.h,nw,nh,zf,props.x,props.y);
    var pctX=clamp(props.x-(c.rx>0?dx/c.rx*100:0),0,100);
    var pctY=clamp(props.y-(c.ry>0?dy/c.ry*100:0),0,100);
    props.onChange(pctX,pctY);
  }
  function onUp(){ dragging.current=false; }

  useEffect(function(){
    if(!props.src){nat.current={w:0,h:0};return;}
    var im=new Image();
    im.onload=function(){
      nat.current={w:im.naturalWidth,h:im.naturalHeight};
      setRn(function(n){return n+1;});
    };
    im.src=props.src;
  },[props.src]);

  useEffect(function(){
    window.addEventListener("mousemove",onMove);
    window.addEventListener("mouseup",onUp);
    window.addEventListener("touchmove",onMove,{passive:false});
    window.addEventListener("touchend",onUp);
    return function(){
      window.removeEventListener("mousemove",onMove);
      window.removeEventListener("mouseup",onUp);
      window.removeEventListener("touchmove",onMove);
      window.removeEventListener("touchend",onUp);
    };
  });

  var nw=props.natW||nat.current.w||0, nh=props.natH||nat.current.h||0;
  var zf=(props.zoom||100)/100;
  var sz=getContainerSize();
  var c=computeCover(sz.w,sz.h,nw,nh,zf,props.x,props.y);
  var flipX=props.flipH?-1:1, flipY=props.flipV?-1:1;
  var transform=(flipX!=1||flipY!=1)?"scale("+flipX+","+flipY+")":"none";

  return e("div",{ref:dragRef,
    style:{position:"absolute",inset:0,overflow:"hidden",
      cursor:props.src?"grab":"default"},
    onMouseDown:onDown,
    onTouchStart:onDown},
    props.src?e("img",{src:props.src,alt:"",
      style:{
        position:"absolute",
        width:Math.round(c.iw)+"px",
        height:Math.round(c.ih)+"px",
        left:Math.round(c.left)+"px",
        top:Math.round(c.top)+"px",
        transform:transform,
        filter:(function(){
          var f="";
          if(props.blur>0) f+="blur("+Math.round(props.blur)+"px) ";
          if((props.brightness||100)!==100) f+="brightness("+(props.brightness||100)+"%) ";
          if((props.saturation||100)!==100) f+="saturate("+(props.saturation||100)+"%) ";
          if((props.contrast||100)!==100) f+="contrast("+(props.contrast||100)+"%) ";
          return f||"none";
        })(),
        userSelect:"none",pointerEvents:"none"}}):null
  );
}
