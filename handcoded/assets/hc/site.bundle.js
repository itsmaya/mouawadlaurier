/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var ih="160";var lm=0,du=1,cm=2;var ef=1,hm=2,Ci=3,Dn=0,nn=1,bn=2;var ji=0,dr=1,fu=2,pu=3,mu=4,um=5,xs=100,dm=101,fm=102,gu=103,yu=104,pm=200,mm=201,gm=202,ym=203,Sc=204,wc=205,_m=206,xm=207,vm=208,bm=209,Mm=210,Sm=211,wm=212,Em=213,Tm=214,Am=0,Cm=1,Rm=2,uo=3,Pm=4,Lm=5,Im=6,Nm=7,jo=0,Dm=1,Um=2,Zi=0,Om=1,Fm=2,Bm=3,km=4,zm=5,Hm=6,_u="attached",Vm="detached",tf=300,mr=301,gr=302,Ec=303,Tc=304,Zo=306,Ki=1e3,pn=1001,Ac=1002,tn=1003,xu=1004;var Vl=1005;var xn=1006,Gm=1007;var Qi=1008;var Ji=1009,Wm=1010,Xm=1011,sh=1012,nf=1013,$i=1014,Pi=1015,ea=1016,sf=1017,rf=1018,Ms=1020,qm=1021,zn=1023,Ym=1024,$m=1025,Ss=1026,yr=1027,jm=1028,af=1029,Zm=1030,of=1031,lf=1033,Gl=33776,Wl=33777,Xl=33778,ql=33779,vu=35840,bu=35841,Mu=35842,Su=35843,cf=36196,wu=37492,Eu=37496,Tu=37808,Au=37809,Cu=37810,Ru=37811,Pu=37812,Lu=37813,Iu=37814,Nu=37815,Du=37816,Uu=37817,Ou=37818,Fu=37819,Bu=37820,ku=37821,Yl=36492,zu=36494,Hu=36495,Jm=36283,Vu=36284,Gu=36285,Wu=36286;var fo=2300,po=2301,$l=2302,Xu=2400,qu=2401,Yu=2402,Km=2500;var hf=3e3,ws=3001,Qm=3200,eg=3201,rh=0,tg=1,Hn="",kt="srgb",Ii="srgb-linear",ah="display-p3",Jo="display-p3-linear",mo="linear",Dt="srgb",go="rec709",yo="p3";var Ws=7680;var $u=519,ng=512,ig=513,sg=514,uf=515,rg=516,ag=517,og=518,lg=519,Cc=35044;var ju="300 es",Rc=1035,Li=2e3,_o=2001,es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=1234567,Zr=Math.PI/180,_r=180/Math.PI;function Jn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function fn(n,e,t){return Math.max(e,Math.min(t,n))}function oh(n,e){return(n%e+e)%e}function cg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hg(n,e,t){return n!==e?(t-n)/(e-n):0}function Jr(n,e,t){return(1-t)*n+t*e}function ug(n,e,t,i){return Jr(n,e,1-Math.exp(-t*i))}function dg(n,e=1){return e-Math.abs(oh(n,e*2)-e)}function fg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gg(n,e){return n+Math.random()*(e-n)}function yg(n){return n*(.5-Math.random())}function _g(n){n!==void 0&&(Zu=n);let e=Zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xg(n){return n*Zr}function vg(n){return n*_r}function Pc(n){return(n&n-1)===0&&n!==0}function bg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mg(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),m=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ss={DEG2RAD:Zr,RAD2DEG:_r,generateUUID:Jn,clamp:fn,euclideanModulo:oh,mapLinear:cg,inverseLerp:hg,lerp:Jr,damp:ug,pingpong:dg,smoothstep:fg,smootherstep:pg,randInt:mg,randFloat:gg,randFloatSpread:yg,seededRandom:_g,degToRad:xg,radToDeg:vg,isPowerOfTwo:Pc,ceilPowerOfTwo:bg,floorPowerOfTwo:xo,setQuaternionFromProperEuler:Mg,normalize:At,denormalize:ii},Ze=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],_=i[8],x=s[0],p=s[3],f=s[6],A=s[1],v=s[4],P=s[7],O=s[2],L=s[5],D=s[8];return r[0]=a*x+o*A+c*O,r[3]=a*p+o*v+c*L,r[6]=a*f+o*P+c*D,r[1]=l*x+h*A+u*O,r[4]=l*p+h*v+u*L,r[7]=l*f+h*P+u*D,r[2]=d*x+m*A+_*O,r[5]=d*p+m*v+_*L,r[8]=d*f+m*P+_*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,_=t*u+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jl=new dt;function df(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sg(){let n=ta("canvas");return n.style.display="block",n}var Ju={};function Kr(n){n in Ju||(Ju[n]=!0,console.warn(n))}var Ku=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qu=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[Ii]:{transfer:mo,primaries:go,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:Dt,primaries:go,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jo]:{transfer:mo,primaries:yo,toReference:n=>n.applyMatrix3(Qu),fromReference:n=>n.applyMatrix3(Ku)},[ah]:{transfer:Dt,primaries:yo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Qu),fromReference:n=>n.applyMatrix3(Ku).convertLinearToSRGB()}},wg=new Set([Ii,Jo]),Ct={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Oa[e].toReference,s=Oa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Oa[n].primaries},getTransfer:function(n){return n===Hn?mo:Oa[n].transfer}};function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,vo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=ta("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eg=0,bo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jl(s[a].image)):r.push(Jl(s[a]))}else r=Jl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tg=0,An=class n extends es{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=pn,s=pn,r=xn,a=Qi,o=zn,c=Ji,l=n.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Jn(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ws?kt:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?ws:hf}set encoding(e){Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ws?kt:Hn}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=tf;An.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],_=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,P=(m+1)/2,O=(f+1)/2,L=(h+d)/4,D=(u+x)/4,Z=(_+p)/4;return v>P&&v>O?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=L/i,r=D/i):P>O?P<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),i=L/s,r=Z/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=D/r,s=Z/r),this.set(i,s,r,t),this}let A=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(u-x)/A,this.z=(d-h)/A,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lc=class extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ws?kt:Hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends Lc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Mo=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ic=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(u!==x||c!==d||l!==m||h!==_){let p=1-o,f=c*d+l*m+h*_+u*x,A=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let O=Math.sqrt(v),L=Math.atan2(O,f*A);p=Math.sin(p*L)/O,o=Math.sin(o*L)/O}let P=o*A;if(c=c*p+d*P,l=l*p+m*P,h=h*p+_*P,u=u*p+x*P,p===1-o){let O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*u+c*m-l*d,e[t+1]=c*_+h*d+l*u-o*m,e[t+2]=l*_+h*m+o*d-c*u,e[t+3]=h*_-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"YZX":this._x=d*h*u+l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u-d*m*_;break;case"XZY":this._x=d*h*u-l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kl=new N,ed=new si,sn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Ba.subVectors(this.max,Vr),qs.subVectors(e.a,Vr),Ys.subVectors(e.b,Vr),$s.subVectors(e.c,Vr),Gi.subVectors(Ys,qs),Wi.subVectors($s,Ys),ps.subVectors(qs,$s);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ps.z,ps.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ps.z,0,-ps.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ps.y,ps.x,0];return!Ql(t,qs,Ys,$s,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,qs,Ys,$s,Ba))?!1:(ka.crossVectors(Gi,Wi),t=[ka.x,ka.y,ka.z],Ql(t,qs,Ys,$s,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,Fa=new sn,qs=new N,Ys=new N,$s=new N,Gi=new N,Wi=new N,ps=new N,Vr=new N,Ba=new N,ka=new N,ms=new N;function Ql(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ms.fromArray(n,r);let o=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),c=e.dot(ms),l=t.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ag=new sn,Gr=new N,ec=new N,Vn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ag.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(ec)),this.expandByPoint(Gr.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new N,tc=new N,za=new N,Xi=new N,nc=new N,Ha=new N,ic=new N,xr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(tc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=Xi.dot(this.direction),c=-Xi.dot(za),l=Xi.lengthSq(),h=Math.abs(1-a*a),u,d,m,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let x=1/h;u*=x,d*=x,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tc).addScaledVector(za,d),m}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){nc.subVectors(t,e),Ha.subVectors(i,e),ic.crossVectors(nc,Ha);let a=this.direction.dot(ic),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);let c=o*this.direction.dot(Ha.crossVectors(Xi,Ha));if(c<0)return null;let l=o*this.direction.dot(nc.cross(Xi));if(l<0||c+l>a)return null;let h=-o*Xi.dot(ic);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,m,_,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,m,_,x,p)}set(e,t,i,s,r,a,o,c,l,h,u,d,m,_,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),a=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,_=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+_*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,_=l*h,x=l*u;t[0]=d+x*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,_=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,_=o*h,x=o*u;t[0]=c*h,t[4]=_*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=_*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+_,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Rg)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),qi.crossVectors(i,Ln),qi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),qi.crossVectors(i,Ln)),qi.normalize(),Va.crossVectors(Ln,qi),s[0]=qi.x,s[4]=Va.x,s[8]=Ln.x,s[1]=qi.y,s[5]=Va.y,s[9]=Ln.y,s[2]=qi.z,s[6]=Va.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],A=i[3],v=i[7],P=i[11],O=i[15],L=s[0],D=s[4],Z=s[8],E=s[12],R=s[1],J=s[5],oe=s[9],he=s[13],F=s[2],Y=s[6],B=s[10],ee=s[14],K=s[3],$=s[7],re=s[11],ie=s[15];return r[0]=a*L+o*R+c*F+l*K,r[4]=a*D+o*J+c*Y+l*$,r[8]=a*Z+o*oe+c*B+l*re,r[12]=a*E+o*he+c*ee+l*ie,r[1]=h*L+u*R+d*F+m*K,r[5]=h*D+u*J+d*Y+m*$,r[9]=h*Z+u*oe+d*B+m*re,r[13]=h*E+u*he+d*ee+m*ie,r[2]=_*L+x*R+p*F+f*K,r[6]=_*D+x*J+p*Y+f*$,r[10]=_*Z+x*oe+p*B+f*re,r[14]=_*E+x*he+p*ee+f*ie,r[3]=A*L+v*R+P*F+O*K,r[7]=A*D+v*J+P*Y+O*$,r[11]=A*Z+v*oe+P*B+O*re,r[15]=A*E+v*he+P*ee+O*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*m-i*c*m)+x*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+i*a*m+r*o*h-i*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],A=u*p*l-x*d*l+x*c*m-o*p*m-u*c*f+o*d*f,v=_*d*l-h*p*l-_*c*m+a*p*m+h*c*f-a*d*f,P=h*x*l-_*u*l+_*o*m-a*x*m-h*o*f+a*u*f,O=_*u*c-h*x*c-_*o*d+a*x*d+h*o*p-a*u*p,L=t*A+i*v+s*P+r*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return e[0]=A*D,e[1]=(x*d*r-u*p*r-x*s*m+i*p*m+u*s*f-i*d*f)*D,e[2]=(o*p*r-x*c*r+x*s*l-i*p*l-o*s*f+i*c*f)*D,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*m-i*c*m)*D,e[4]=v*D,e[5]=(h*p*r-_*d*r+_*s*m-t*p*m-h*s*f+t*d*f)*D,e[6]=(_*c*r-a*p*r-_*s*l+t*p*l+a*s*f-t*c*f)*D,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*D,e[8]=P*D,e[9]=(_*u*r-h*x*r-_*i*m+t*x*m+h*i*f-t*u*f)*D,e[10]=(a*x*r-_*o*r+_*i*l-t*x*l-a*i*f+t*o*f)*D,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*m-t*o*m)*D,e[12]=O*D,e[13]=(h*x*s-_*u*s+_*i*d-t*x*d-h*i*p+t*u*p)*D,e[14]=(_*o*s-a*x*s-_*i*c+t*x*c+a*i*p-t*o*p)*D,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,_=r*u,x=a*h,p=a*u,f=o*u,A=c*l,v=c*h,P=c*u,O=i.x,L=i.y,D=i.z;return s[0]=(1-(x+f))*O,s[1]=(m+P)*O,s[2]=(_-v)*O,s[3]=0,s[4]=(m-P)*L,s[5]=(1-(d+f))*L,s[6]=(p+A)*L,s[7]=0,s[8]=(_+v)*D,s[9]=(p-A)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=js.set(s[0],s[1],s[2]).length(),a=js.set(s[4],s[5],s[6]).length(),o=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);let l=1/r,h=1/a,u=1/o;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Li){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,_;if(o===Li)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_o)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Li){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*l,m=(i+s)*h,_,x;if(o===Li)_=(a+r)*u,x=-2*u;else if(o===_o)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},js=new N,jn=new rt,Cg=new N(0,0,0),Rg=new N(1,1,1),qi=new N,Va=new N,Ln=new N,td=new rt,nd=new si,So=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};So.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pg=0,id=new N,Zs=new si,wi=new rt,Ga=new N,Wr=new N,Lg=new N,Ig=new si,sd=new N(1,0,0),rd=new N(0,1,0),ad=new N(0,0,1),Ng={type:"added"},Dg={type:"removed"},Xt=class n extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new So,i=new si,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new dt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(rd,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(rd,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ga.copy(e):Ga.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Wr,Ga,this.up):wi.lookAt(Ga,Wr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(wi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ng)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new N(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new N,Ei=new N,sc=new N,Ti=new N,Js=new N,Ks=new N,od=new N,rc=new N,ac=new N,oc=new N,Wa=!1,bs=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zn.subVectors(s,t),Ei.subVectors(i,t),sc.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Ei),c=Zn.dot(sc),l=Ei.dot(Ei),h=Ei.dot(sc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,s,r,a,o,c){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,i,s,r,a,o,c)}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static isFrontFacing(e,t,i,s){return Zn.subVectors(i,t),Ei.subVectors(e,t),Zn.cross(Ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Zn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Js.subVectors(s,i),Ks.subVectors(r,i),rc.subVectors(e,i);let c=Js.dot(rc),l=Ks.dot(rc);if(c<=0&&l<=0)return t.copy(i);ac.subVectors(e,s);let h=Js.dot(ac),u=Ks.dot(ac);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Js,a);oc.subVectors(e,r);let m=Js.dot(oc),_=Ks.dot(oc);if(_>=0&&m<=_)return t.copy(r);let x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(Ks,o);let p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return od.subVectors(r,s),o=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(od,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(Js,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function lc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var st=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=oh(e,1),t=fn(t,0,1),i=fn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=lc(a,r,e+1/3),this.g=lc(a,r,e),this.b=lc(a,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let i=ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Zl(e.r),this.g=Zl(e.g),this.b=Zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ct.fromWorkingColorSpace(dn.copy(this),e),Math.round(fn(dn.r*255,0,255))*65536+Math.round(fn(dn.g*255,0,255))*256+Math.round(fn(dn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(dn.copy(this),t);let i=dn.r,s=dn.g,r=dn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=kt){Ct.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,i=dn.g,s=dn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Xa);let i=Jr(Yi.h,Xa.h,t),s=Jr(Yi.s,Xa.s,t),r=Jr(Yi.l,Xa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new st;st.NAMES=ff;var Ug=0,ri=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=dr,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=wc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$u&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new N,qa=new Ze,Nn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}};var wo=class extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Eo=class extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Lt=class extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Og=0,kn=new rt,cc=new Xt,Qs=new N,In=new sn,Xr=new sn,Zt=new N,Cn=class n extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(df(e)?Eo:wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(In.min,Xr.min),In.expandByPoint(Zt),Zt.addVectors(In.max,Xr.max),In.expandByPoint(Zt)):(In.expandByPoint(Xr.min),In.expandByPoint(Xr.max))}In.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zt.fromBufferAttribute(o,l),c&&(Qs.fromBufferAttribute(e,l),Zt.add(Qs)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<o;R++)l[R]=new N,h[R]=new N;let u=new N,d=new N,m=new N,_=new Ze,x=new Ze,p=new Ze,f=new N,A=new N;function v(R,J,oe){u.fromArray(s,R*3),d.fromArray(s,J*3),m.fromArray(s,oe*3),_.fromArray(a,R*2),x.fromArray(a,J*2),p.fromArray(a,oe*2),d.sub(u),m.sub(u),x.sub(_),p.sub(_);let he=1/(x.x*p.y-p.x*x.y);isFinite(he)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(he),A.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(he),l[R].add(f),l[J].add(f),l[oe].add(f),h[R].add(A),h[J].add(A),h[oe].add(A))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let R=0,J=P.length;R<J;++R){let oe=P[R],he=oe.start,F=oe.count;for(let Y=he,B=he+F;Y<B;Y+=3)v(i[Y+0],i[Y+1],i[Y+2])}let O=new N,L=new N,D=new N,Z=new N;function E(R){D.fromArray(r,R*3),Z.copy(D);let J=l[R];O.copy(J),O.sub(D.multiplyScalar(D.dot(J))).normalize(),L.crossVectors(Z,J);let he=L.dot(h[R])<0?-1:1;c[R*4]=O.x,c[R*4+1]=O.y,c[R*4+2]=O.z,c[R*4+3]=he}for(let R=0,J=P.length;R<J;++R){let oe=P[R],he=oe.start,F=oe.count;for(let Y=he,B=he+F;Y<B;Y+=3)E(i[Y+0]),E(i[Y+1]),E(i[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){let _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let f=0;f<h;f++)d[_++]=l[m++]}return new Nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ld=new rt,gs=new xr,Ya=new Vn,cd=new N,er=new N,tr=new N,nr=new N,hc=new N,$a=new N,ja=new Ze,Za=new Ze,Ja=new Ze,hd=new N,ud=new N,dd=new N,Ka=new N,Qa=new N,zt=class extends Xt{constructor(e=new Cn,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(hc.fromBufferAttribute(u,e),a?$a.addScaledVector(hc,h):$a.addScaledVector(hc.sub(t),h))}t.add($a)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(Ya.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ya,cd)===null||gs.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(r).invert(),gs.copy(e.ray).applyMatrix4(ld),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let p=d[_],f=a[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let P=A,O=v;P<O;P+=3){let L=o.getX(P),D=o.getX(P+1),Z=o.getX(P+2);s=eo(this,f,e,i,l,h,u,L,D,Z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){let A=o.getX(p),v=o.getX(p+1),P=o.getX(p+2);s=eo(this,a,e,i,l,h,u,A,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let p=d[_],f=a[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let P=A,O=v;P<O;P+=3){let L=P,D=P+1,Z=P+2;s=eo(this,f,e,i,l,h,u,L,D,Z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){let A=p,v=p+1,P=p+2;s=eo(this,a,e,i,l,h,u,A,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Fg(n,e,t,i,s,r,a,o){let c;if(e.side===nn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Dn,o),c===null)return null;Qa.copy(o),Qa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Qa);return l<t.near||l>t.far?null:{distance:l,point:Qa.clone(),object:n}}function eo(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,er),n.getVertexPosition(c,tr),n.getVertexPosition(l,nr);let h=Fg(n,e,t,i,er,tr,nr,Ka);if(h){s&&(ja.fromBufferAttribute(s,o),Za.fromBufferAttribute(s,c),Ja.fromBufferAttribute(s,l),h.uv=bs.getInterpolation(Ka,er,tr,nr,ja,Za,Ja,new Ze)),r&&(ja.fromBufferAttribute(r,o),Za.fromBufferAttribute(r,c),Ja.fromBufferAttribute(r,l),h.uv1=bs.getInterpolation(Ka,er,tr,nr,ja,Za,Ja,new Ze),h.uv2=h.uv1),a&&(hd.fromBufferAttribute(a,o),ud.fromBufferAttribute(a,c),dd.fromBufferAttribute(a,l),h.normal=bs.getInterpolation(Ka,er,tr,nr,hd,ud,dd,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new N,materialIndex:0};bs.getNormal(er,tr,nr,u.normal),h.face=u}return h}var ia=class n extends Cn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function _(x,p,f,A,v,P,O,L,D,Z,E){let R=P/D,J=O/Z,oe=P/2,he=O/2,F=L/2,Y=D+1,B=Z+1,ee=0,K=0,$=new N;for(let re=0;re<B;re++){let ie=re*J-he;for(let fe=0;fe<Y;fe++){let k=fe*R-oe;$[x]=k*A,$[p]=ie*v,$[f]=F,l.push($.x,$.y,$.z),$[x]=0,$[p]=0,$[f]=L>0?1:-1,h.push($.x,$.y,$.z),u.push(fe/D),u.push(1-re/Z),ee+=1}}for(let re=0;re<Z;re++)for(let ie=0;ie<D;ie++){let fe=d+ie+Y*re,k=d+ie+Y*(re+1),G=d+(ie+1)+Y*(re+1),ne=d+(ie+1)+Y*re;c.push(fe,k,ne),c.push(k,G,ne),K+=6}o.addGroup(m,K,E),m+=K,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){let e={};for(let t=0;t<n.length;t++){let i=vr(n[t]);for(let s in i)e[s]=i[s]}return e}function Bg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pf(n){return n.getRenderTarget()===null?n.outputColorSpace:Ct.workingColorSpace}var Ko={clone:vr,merge:_n},kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},To=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wt=class extends To{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,Nc=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new Wt(ir,sr,e,t);r.layers=this.layers,this.add(r);let a=new Wt(ir,sr,e,t);a.layers=this.layers,this.add(a);let o=new Wt(ir,sr,e,t);o.layers=this.layers,this.add(o);let c=new Wt(ir,sr,e,t);c.layers=this.layers,this.add(c);let l=new Wt(ir,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ao=class extends An{constructor(e,t,i,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dc=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ws?kt:Hn),this.texture=new Ao(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ia(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ji});r.uniforms.tEquirect.value=t;let a=new zt(s,r),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=xn),new Nc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},uc=new N,Hg=new N,Vg=new dt,Ri=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=uc.subVectors(i,t).cross(Hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vg.getNormalMatrix(e),s=this.coplanarPoint(uc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Vn,to=new N,sa=class{constructor(e=new Ri,t=new Ri,i=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],_=s[9],x=s[10],p=s[11],f=s[12],A=s[13],v=s[14],P=s[15];if(i[0].setComponents(c-r,d-l,p-m,P-f).normalize(),i[1].setComponents(c+r,d+l,p+m,P+f).normalize(),i[2].setComponents(c+a,d+h,p+_,P+A).normalize(),i[3].setComponents(c-a,d-h,p-_,P-A).normalize(),i[4].setComponents(c-o,d-u,p-x,P-v).normalize(),t===Li)i[5].setComponents(c+o,d+u,p+x,P+v).normalize();else if(t===_o)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(to.x=s.normal.x>0?e.max.x:e.min.x,to.y=s.normal.y>0?e.max.y:e.min.y,to.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,_=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&_.length===0&&n.bufferSubData(u,0,d),_.length!==0){for(let x=0,p=_.length;x<p;x++){let f=_[x];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var ts=class n extends Cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],_=[],x=[],p=[];for(let f=0;f<h;f++){let A=f*d-a;for(let v=0;v<l;v++){let P=v*u-r;_.push(P,-A,0),x.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<o;A++){let v=A+l*f,P=A+l*(f+1),O=A+1+l*(f+1),L=A+1+l*f;m.push(v,P,L),m.push(P,O,L)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,f0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ry=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ky=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:qg,alphamap_pars_fragment:Yg,alphatest_fragment:$g,alphatest_pars_fragment:jg,aomap_fragment:Zg,aomap_pars_fragment:Jg,batching_pars_vertex:Kg,batching_vertex:Qg,begin_vertex:e0,beginnormal_vertex:t0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:l0,color_fragment:c0,color_pars_fragment:h0,color_pars_vertex:u0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:y0,emissivemap_fragment:_0,emissivemap_pars_fragment:x0,colorspace_fragment:v0,colorspace_pars_fragment:b0,envmap_fragment:M0,envmap_common_pars_fragment:S0,envmap_pars_fragment:w0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:F0,envmap_vertex:T0,fog_vertex:A0,fog_pars_vertex:C0,fog_fragment:R0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_fragment:I0,lightmap_pars_fragment:N0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:U0,lights_pars_begin:O0,lights_toon_fragment:B0,lights_toon_pars_fragment:k0,lights_phong_fragment:z0,lights_phong_pars_fragment:H0,lights_physical_fragment:V0,lights_physical_pars_fragment:G0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:q0,logdepthbuf_fragment:Y0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Z0,map_fragment:J0,map_pars_fragment:K0,map_particle_fragment:Q0,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphcolor_vertex:iy,morphnormal_vertex:sy,morphtarget_pars_vertex:ry,morphtarget_vertex:ay,normal_fragment_begin:oy,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:hy,normal_vertex:uy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:yy,packing:_y,premultiplied_alpha_fragment:xy,project_vertex:vy,dithering_fragment:by,dithering_pars_fragment:My,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:wy,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Ty,shadowmap_vertex:Ay,shadowmask_pars_fragment:Cy,skinbase_vertex:Ry,skinning_pars_vertex:Py,skinning_vertex:Ly,skinnormal_vertex:Iy,specularmap_fragment:Ny,specularmap_pars_fragment:Dy,tonemapping_fragment:Uy,tonemapping_pars_fragment:Oy,transmission_fragment:Fy,transmission_pars_fragment:By,uv_pars_fragment:ky,uv_pars_vertex:zy,uv_vertex:Hy,worldpos_vertex:Vy,background_vert:Gy,background_frag:Wy,backgroundCube_vert:Xy,backgroundCube_frag:qy,cube_vert:Yy,cube_frag:$y,depth_vert:jy,depth_frag:Zy,distanceRGBA_vert:Jy,distanceRGBA_frag:Ky,equirect_vert:Qy,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:y_,points_frag:__,shadow_vert:x_,shadow_frag:v_,sprite_vert:b_,sprite_frag:M_},ge={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},vn={basic:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new st(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:_n([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:_n([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new st(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:_n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:_n([ge.points,ge.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:_n([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:_n([ge.common,ge.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:_n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:_n([ge.sprite,ge.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:_n([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:_n([ge.lights,ge.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};vn.physical={uniforms:_n([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var no={r:0,b:0,g:0};function S_(n,e,t,i,s,r,a){let o=new st(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function _(p,f){let A=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),A=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zo)?(h===void 0&&(h=new zt(new ia(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:vr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(v.colorSpace)!==Dt,(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new zt(new ts(2,2),new Kn({name:"BackgroundMaterial",uniforms:vr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ct.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,f){p.getRGB(no,pf(n)),i.buffers.color.setClear(no.r,no.g,no.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:_}}function w_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(F,Y,B,ee,K){let $=!1;if(a){let re=x(ee,B,Y);l!==re&&(l=re,m(l.object)),$=f(F,ee,B,K),$&&A(F,ee,B,K)}else{let re=Y.wireframe===!0;(l.geometry!==ee.id||l.program!==B.id||l.wireframe!==re)&&(l.geometry=ee.id,l.program=B.id,l.wireframe=re,$=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,Z(F,Y,B,ee),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function x(F,Y,B){let ee=B.wireframe===!0,K=o[F.id];K===void 0&&(K={},o[F.id]=K);let $=K[Y.id];$===void 0&&($={},K[Y.id]=$);let re=$[ee];return re===void 0&&(re=p(d()),$[ee]=re),re}function p(F){let Y=[],B=[],ee=[];for(let K=0;K<s;K++)Y[K]=0,B[K]=0,ee[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:B,attributeDivisors:ee,object:F,attributes:{},index:null}}function f(F,Y,B,ee){let K=l.attributes,$=Y.attributes,re=0,ie=B.getAttributes();for(let fe in ie)if(ie[fe].location>=0){let G=K[fe],ne=$[fe];if(ne===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),G===void 0||G.attribute!==ne||ne&&G.data!==ne.data)return!0;re++}return l.attributesNum!==re||l.index!==ee}function A(F,Y,B,ee){let K={},$=Y.attributes,re=0,ie=B.getAttributes();for(let fe in ie)if(ie[fe].location>=0){let G=$[fe];G===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(G=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(G=F.instanceColor));let ne={};ne.attribute=G,G&&G.data&&(ne.data=G.data),K[fe]=ne,re++}l.attributes=K,l.attributesNum=re,l.index=ee}function v(){let F=l.newAttributes;for(let Y=0,B=F.length;Y<B;Y++)F[Y]=0}function P(F){O(F,0)}function O(F,Y){let B=l.newAttributes,ee=l.enabledAttributes,K=l.attributeDivisors;B[F]=1,ee[F]===0&&(n.enableVertexAttribArray(F),ee[F]=1),K[F]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),K[F]=Y)}function L(){let F=l.newAttributes,Y=l.enabledAttributes;for(let B=0,ee=Y.length;B<ee;B++)Y[B]!==F[B]&&(n.disableVertexAttribArray(B),Y[B]=0)}function D(F,Y,B,ee,K,$,re){re===!0?n.vertexAttribIPointer(F,Y,B,K,$):n.vertexAttribPointer(F,Y,B,ee,K,$)}function Z(F,Y,B,ee){if(i.isWebGL2===!1&&(F.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=ee.attributes,$=B.getAttributes(),re=Y.defaultAttributeValues;for(let ie in $){let fe=$[ie];if(fe.location>=0){let k=K[ie];if(k===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(k=F.instanceColor)),k!==void 0){let G=k.normalized,ne=k.itemSize,se=t.get(k);if(se===void 0)continue;let ae=se.buffer,Te=se.type,Fe=se.bytesPerElement,Be=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||k.gpuType===nf);if(k.isInterleavedBufferAttribute){let ft=k.data,H=ft.stride,Qt=k.offset;if(ft.isInstancedInterleavedBuffer){for(let He=0;He<fe.locationSize;He++)O(fe.location+He,ft.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let He=0;He<fe.locationSize;He++)P(fe.location+He);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let He=0;He<fe.locationSize;He++)D(fe.location+He,ne/fe.locationSize,Te,G,H*Fe,(Qt+ne/fe.locationSize*He)*Fe,Be)}else{if(k.isInstancedBufferAttribute){for(let ft=0;ft<fe.locationSize;ft++)O(fe.location+ft,k.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ft=0;ft<fe.locationSize;ft++)P(fe.location+ft);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ft=0;ft<fe.locationSize;ft++)D(fe.location+ft,ne/fe.locationSize,Te,G,ne*Fe,ne/fe.locationSize*ft*Fe,Be)}}else if(re!==void 0){let G=re[ie];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(fe.location,G);break;case 3:n.vertexAttrib3fv(fe.location,G);break;case 4:n.vertexAttrib4fv(fe.location,G);break;default:n.vertexAttrib1fv(fe.location,G)}}}}L()}function E(){oe();for(let F in o){let Y=o[F];for(let B in Y){let ee=Y[B];for(let K in ee)_(ee[K].object),delete ee[K];delete Y[B]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;let Y=o[F.id];for(let B in Y){let ee=Y[B];for(let K in ee)_(ee[K].object),delete ee[K];delete Y[B]}delete o[F.id]}function J(F){for(let Y in o){let B=o[Y];if(B[F.id]===void 0)continue;let ee=B[F.id];for(let K in ee)_(ee[K].object),delete ee[K];delete B[F.id]}}function oe(){he(),h=!0,l!==c&&(l=c,m(l.object))}function he(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:oe,resetDefaultState:he,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:J,initAttributes:v,enableAttribute:P,disableUnusedAttributes:L}}function E_(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function T_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,P=a||e.has("OES_texture_float"),O=v&&P,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:P,floatVertexTextures:O,maxSamples:L}}function A_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Ri,o=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{let A=r?0:i,v=A*4,P=f.clippingState||null;c.value=P,P=h(_,d,v,m);for(let O=0;O!==v;++O)P[O]=t[O];f.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,_){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,_!==!0||p===null){let f=m+x*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,P=m;v!==x;++v,P+=4)a.copy(u[v]).applyMatrix4(A,o),a.normal.toArray(p,P),p[P+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function C_(n){let e=new WeakMap;function t(a,o){return o===Ec?a.mapping=mr:o===Tc&&(a.mapping=gr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ec||o===Tc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Dc(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var br=class extends To{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hr=4,fd=[.125,.215,.35,.446,.526,.582],vs=20,dc=new br,pd=new st,fc=null,pc=0,mc=0,_s=(1+Math.sqrt(5))/2,rr=1/_s,md=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,_s,rr),new N(0,_s,-rr),new N(rr,0,_s),new N(-rr,0,_s),new N(_s,rr,0),new N(-_s,rr,0)],Co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,pc,mc),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ea,format:zn,colorSpace:Ii,depthBuffer:!1},s=gd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R_(r)),this._blurMaterial=P_(r,e,t)}return s}_compileMaterial(e){let t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,i,s){let o=new Wt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pd),h.toneMapping=Zi,h.autoClear=!1;let m=new Jt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new zt(new ia,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(pd),x=!0);for(let f=0;f<6;f++){let A=f%3;A===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):A===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let v=this._cubeSize;io(s,A*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===mr||e.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;io(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,dc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=md[(s-1)%md.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vs-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):vs;p>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vs}`);let f=[],A=0;for(let D=0;D<vs;++D){let Z=D/x,E=Math.exp(-Z*Z/2);f.push(E),D===0?A+=E:D<p&&(A+=2*E)}for(let D=0;D<f.length;D++)f[D]=f[D]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;let P=this._sizeLods[s],O=3*P*(s>v-hr?s-v+hr:0),L=4*(this._cubeSize-P);io(t,O,L,3*P,2*P),c.setRenderTarget(t),c.render(u,dc)}};function R_(n){let e=[],t=[],i=[],s=n,r=n-hr+1+fd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-hr?c=fd[a-n+hr-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,p=2,f=1,A=new Float32Array(x*_*m),v=new Float32Array(p*_*m),P=new Float32Array(f*_*m);for(let L=0;L<m;L++){let D=L%3*2/3-1,Z=L>2?0:-1,E=[D,Z,0,D+2/3,Z,0,D+2/3,Z+1,0,D,Z,0,D+2/3,Z+1,0,D,Z+1,0];A.set(E,x*_*L),v.set(d,p*_*L);let R=[L,L,L,L,L,L];P.set(R,f*_*L)}let O=new Cn;O.setAttribute("position",new Nn(A,x)),O.setAttribute("uv",new Nn(v,p)),O.setAttribute("faceIndex",new Nn(P,f)),e.push(O),s>hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gd(n,e,t){let i=new Ni(n,e,t);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function P_(n,e,t){let i=new Float32Array(vs),s=new N(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function yd(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function _d(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ec||c===Tc,h=c===mr||c===gr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Co(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Co(n));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function I_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function N_(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let x=d.morphAttributes[_];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)e.update(d[_],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let _ in m){let x=m[_];for(let p=0,f=x.length;p<f;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,_=u.attributes.position,x=0;if(m!==null){let A=m.array;x=m.version;for(let v=0,P=A.length;v<P;v+=3){let O=A[v+0],L=A[v+1],D=A[v+2];d.push(O,L,L,D,D,O)}}else if(_!==void 0){let A=_.array;x=_.version;for(let v=0,P=A.length/3-1;v<P;v+=3){let O=v+0,L=v+1,D=v+2;d.push(O,L,L,D,D,O)}}else return;let p=new(df(d)?Eo:wo)(d,1);p.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function D_(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,_){n.drawElements(r,_,o,m*c),t.update(_,r,1)}function u(m,_,x){if(x===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,_,o,m*c,x),t.update(_,r,x)}function d(m,_,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/c,_[f]);else{p.multiDrawElementsWEBGL(r,_,0,o,m,0,x);let f=0;for(let A=0;A<x;A++)f+=_[A];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function U_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function O_(n,e){return n[0]-e[0]}function F_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function B_(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new _t,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==_){let F=function(){oe.dispose(),r.delete(h),h.removeEventListener("dispose",F)};x!==void 0&&x.texture.dispose();let A=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],Z=0;A===!0&&(Z=1),v===!0&&(Z=2),P===!0&&(Z=3);let E=h.attributes.position.count*Z,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let J=new Float32Array(E*R*4*_),oe=new Mo(J,E,R,_);oe.type=Pi,oe.needsUpdate=!0;let he=Z*4;for(let Y=0;Y<_;Y++){let B=O[Y],ee=L[Y],K=D[Y],$=E*R*4*Y;for(let re=0;re<B.count;re++){let ie=re*he;A===!0&&(a.fromBufferAttribute(B,re),J[$+ie+0]=a.x,J[$+ie+1]=a.y,J[$+ie+2]=a.z,J[$+ie+3]=0),v===!0&&(a.fromBufferAttribute(ee,re),J[$+ie+4]=a.x,J[$+ie+5]=a.y,J[$+ie+6]=a.z,J[$+ie+7]=0),P===!0&&(a.fromBufferAttribute(K,re),J[$+ie+8]=a.x,J[$+ie+9]=a.y,J[$+ie+10]=a.z,J[$+ie+11]=K.itemSize===4?a.w:1)}}x={count:_,texture:oe,size:new Ze(E,R)},r.set(h,x),h.addEventListener("dispose",F)}let p=0;for(let A=0;A<d.length;A++)p+=d[A];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,_=i[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];i[h.id]=_}for(let v=0;v<m;v++){let P=_[v];P[0]=v,P[1]=d[v]}_.sort(F_);for(let v=0;v<8;v++)v<m&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(O_);let x=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let P=o[v],O=P[0],L=P[1];O!==Number.MAX_SAFE_INTEGER&&L?(x&&h.getAttribute("morphTarget"+v)!==x[O]&&h.setAttribute("morphTarget"+v,x[O]),p&&h.getAttribute("morphNormal"+v)!==p[O]&&h.setAttribute("morphNormal"+v,p[O]),s[v]=L,f+=L):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let A=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",A),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function k_(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Ro=class extends An{constructor(e,t,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:Ss,h!==Ss&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ss&&(i=$i),i===void 0&&h===yr&&(i=Ms),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gf=new An,yf=new Ro(1,1);yf.compareFunction=uf;var _f=new Mo,xf=new Ic,vf=new Ao,xd=[],vd=[],bd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function Cr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function W_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),Yt(t,i)}}function X_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Md.set(i),n.uniformMatrix3fv(this.addr,!1,Md),Yt(t,i)}}function q_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;bd.set(i),n.uniformMatrix4fv(this.addr,!1,bd),Yt(t,i)}}function Y_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function J_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function Q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function tx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?yf:gf;t.setTexture2D(e||r,s)}function nx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xf,s)}function ix(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vf,s)}function sx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_f,s)}function rx(n){switch(n){case 5126:return z_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return j_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return K_;case 36295:return Q_;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(n,e){n.uniform1fv(this.addr,e)}function ox(n,e){let t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function lx(n,e){let t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function cx(n,e){let t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function hx(n,e){let t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ux(n,e){let t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dx(n,e){let t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fx(n,e){n.uniform1iv(this.addr,e)}function px(n,e){n.uniform2iv(this.addr,e)}function mx(n,e){n.uniform3iv(this.addr,e)}function gx(n,e){n.uniform4iv(this.addr,e)}function yx(n,e){n.uniform1uiv(this.addr,e)}function _x(n,e){n.uniform2uiv(this.addr,e)}function xx(n,e){n.uniform3uiv(this.addr,e)}function vx(n,e){n.uniform4uiv(this.addr,e)}function bx(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||gf,r[a])}function Mx(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xf,r[a])}function Sx(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vf,r[a])}function wx(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_f,r[a])}function Ex(n){switch(n){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return yx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return wx}}var Uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rx(t.type)}},Oc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}},Fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},gc=/(\w+)(\])?(\[|\.)?/g;function wd(n,e){n.seq.push(e),n.map[e.id]=e}function Tx(n,e,t){let i=n.name,s=i.length;for(gc.lastIndex=0;;){let r=gc.exec(i),a=gc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wd(t,l===void 0?new Uc(o,n,e):new Oc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Fc(o),wd(t,u)),t=u}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Tx(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ed(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ax=37297,Cx=0;function Rx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Px(n){let e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(n),i;switch(e===t?i="":e===yo&&t===go?i="LinearDisplayP3ToLinearSRGB":e===go&&t===yo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ii:case Jo:return[i,"LinearTransferOETF"];case kt:case ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Td(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Rx(n.getShaderSource(e),a)}else return s}function Lx(n,e){let t=Px(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ix(n,e){let t;switch(e){case Om:t="Linear";break;case Fm:t="Reinhard";break;case Bm:t="OptimizedCineon";break;case km:t="ACESFilmic";break;case Hm:t="AgX";break;case zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ur).join(`
`)}function Dx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ur).join(`
`)}function Ux(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ox(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ur(n){return n!==""}function Ad(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(Fx,kx)}var Bx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kx(n,e){let t=ht[e];if(t===void 0){let i=Bx.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(n){return n.replace(zx,Hx)}function Hx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Gx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Dm:e="ENVMAP_BLENDING_MIX";break;case Um:e="ENVMAP_BLENDING_ADD";break}return e}function qx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Yx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Vx(t),l=Gx(t),h=Wx(t),u=Xx(t),d=qx(t),m=t.isWebGL2?"":Nx(t),_=Dx(t),x=Ux(r),p=s.createProgram(),f,A,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),f.length>0&&(f+=`
`),A=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),A.length>0&&(A+=`
`)):(f=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),A=[m,Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Zi?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=Bc(a),a=Ad(a,t),a=Cd(a,t),o=Bc(o),o=Ad(o,t),o=Cd(o,t),a=Rd(a),o=Rd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);let P=v+f+a,O=v+A+o,L=Ed(s,s.VERTEX_SHADER,P),D=Ed(s,s.FRAGMENT_SHADER,O);s.attachShader(p,L),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function Z(oe){if(n.debug.checkShaderErrors){let he=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(L).trim(),Y=s.getShaderInfoLog(D).trim(),B=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,L,D);else{let K=Td(s,L,"vertex"),$=Td(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+K+`
`+$)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(F===""||Y==="")&&(ee=!1);ee&&(oe.diagnostics={runnable:B,programLog:he,vertexShader:{log:F,prefix:f},fragmentShader:{log:Y,prefix:A}})}s.deleteShader(L),s.deleteShader(D),E=new pr(s,p),R=Ox(s,p)}let E;this.getUniforms=function(){return E===void 0&&Z(this),E};let R;this.getAttributes=function(){return R===void 0&&Z(this),R};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(p,Ax)),J},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=D,this}var $x=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zc(e),t.set(e,i)),i}},zc=class{constructor(e){this.id=$x++,this.code=e,this.usedTimes=0}};function jx(n,e,t,i,s,r,a){let o=new na,c=new kc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,R,J,oe,he){let F=oe.fog,Y=he.geometry,B=E.isMeshStandardMaterial?oe.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||B),K=ee&&ee.mapping===Zo?ee.image.height:null,$=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ie=re!==void 0?re.length:0,fe=0;Y.morphAttributes.position!==void 0&&(fe=1),Y.morphAttributes.normal!==void 0&&(fe=2),Y.morphAttributes.color!==void 0&&(fe=3);let k,G,ne,se;if($){let $t=vn[$];k=$t.vertexShader,G=$t.fragmentShader}else k=E.vertexShader,G=E.fragmentShader,c.update(E),ne=c.getVertexShaderID(E),se=c.getFragmentShaderID(E);let ae=n.getRenderTarget(),Te=he.isInstancedMesh===!0,Fe=he.isBatchedMesh===!0,Be=!!E.map,ft=!!E.matcap,H=!!ee,Qt=!!E.aoMap,He=!!E.lightMap,Ke=!!E.bumpMap,Le=!!E.normalMap,Rt=!!E.displacementMap,ot=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,W=E.anisotropy>0,pe=E.clearcoat>0,ue=E.iridescence>0,me=E.sheen>0,De=E.transmission>0,Me=W&&!!E.anisotropyMap,Ce=pe&&!!E.clearcoatMap,Ge=pe&&!!E.clearcoatNormalMap,lt=pe&&!!E.clearcoatRoughnessMap,de=ue&&!!E.iridescenceMap,bt=ue&&!!E.iridescenceThicknessMap,ut=me&&!!E.sheenColorMap,je=me&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Re=!!E.specularColorMap,nt=!!E.specularIntensityMap,xt=De&&!!E.transmissionMap,It=De&&!!E.thicknessMap,ct=!!E.gradientMap,_e=!!E.alphaMap,U=E.alphaTest>0,ve=!!E.alphaHash,be=!!E.extensions,qe=!!Y.attributes.uv1,Ve=!!Y.attributes.uv2,St=!!Y.attributes.uv3,Et=Zi;return E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Et=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:k,fragmentShader:G,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,instancing:Te,instancingColor:Te&&he.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ii,map:Be,matcap:ft,envMap:H,envMapMode:H&&ee.mapping,envMapCubeUVHeight:K,aoMap:Qt,lightMap:He,bumpMap:Ke,normalMap:Le,displacementMap:d&&Rt,emissiveMap:ot,normalMapObjectSpace:Le&&E.normalMapType===tg,normalMapTangentSpace:Le&&E.normalMapType===rh,metalnessMap:C,roughnessMap:S,anisotropy:W,anisotropyMap:Me,clearcoat:pe,clearcoatMap:Ce,clearcoatNormalMap:Ge,clearcoatRoughnessMap:lt,iridescence:ue,iridescenceMap:de,iridescenceThicknessMap:bt,sheen:me,sheenColorMap:ut,sheenRoughnessMap:je,specularMap:ke,specularColorMap:Re,specularIntensityMap:nt,transmission:De,transmissionMap:xt,thicknessMap:It,gradientMap:ct,opaque:E.transparent===!1&&E.blending===dr,alphaMap:_e,alphaTest:U,alphaHash:ve,combine:E.combine,mapUv:Be&&x(E.map.channel),aoMapUv:Qt&&x(E.aoMap.channel),lightMapUv:He&&x(E.lightMap.channel),bumpMapUv:Ke&&x(E.bumpMap.channel),normalMapUv:Le&&x(E.normalMap.channel),displacementMapUv:Rt&&x(E.displacementMap.channel),emissiveMapUv:ot&&x(E.emissiveMap.channel),metalnessMapUv:C&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:Me&&x(E.anisotropyMap.channel),clearcoatMapUv:Ce&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(E.sheenRoughnessMap.channel),specularMapUv:ke&&x(E.specularMap.channel),specularColorMapUv:Re&&x(E.specularColorMap.channel),specularIntensityMapUv:nt&&x(E.specularIntensityMap.channel),transmissionMapUv:xt&&x(E.transmissionMap.channel),thicknessMapUv:It&&x(E.thicknessMap.channel),alphaMapUv:_e&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Le||W),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:qe,vertexUv2s:Ve,vertexUv3s:St,pointsUvs:he.isPoints===!0&&!!Y.attributes.uv&&(Be||_e),fog:!!F,useFog:E.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:he.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:be&&E.extensions.derivatives===!0,extensionFragDepth:be&&E.extensions.fragDepth===!0,extensionDrawBuffers:be&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let J in E.defines)R.push(J),R.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(A(R,E),v(R,E),R.push(n.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function A(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function v(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function P(E){let R=_[E.type],J;if(R){let oe=vn[R];J=Ko.clone(oe.uniforms)}else J=E.uniforms;return J}function O(E,R){let J;for(let oe=0,he=l.length;oe<he;oe++){let F=l[oe];if(F.cacheKey===R){J=F,++J.usedTimes;break}}return J===void 0&&(J=new Yx(n,R,E,r),l.push(J)),J}function L(E){if(--E.usedTimes===0){let R=l.indexOf(E);l[R]=l[l.length-1],l.pop(),E.destroy()}}function D(E){c.remove(E)}function Z(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:P,acquireProgram:O,releaseProgram:L,releaseShaderCache:D,programs:l,dispose:Z}}function Zx(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Jx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Id(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,m,_,x,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=x,f.group=p),e++,f}function o(u,d,m,_,x,p){let f=a(u,d,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,_,x,p){let f=a(u,d,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Jx),i.length>1&&i.sort(d||Ld),s.length>1&&s.sort(d||Ld)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Kx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Id,n.set(i,[a])):s>=r.length?(a=new Id,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new st};break;case"SpotLight":t={position:new N,direction:new N,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function ev(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tv=0;function nv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iv(n,e){let t=new Qx,i=ev(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,a=new rt,o=new rt;function c(h,u){let d=0,m=0,_=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let x=0,p=0,f=0,A=0,v=0,P=0,O=0,L=0,D=0,Z=0,E=0;h.sort(nv);let R=u===!0?Math.PI:1;for(let oe=0,he=h.length;oe<he;oe++){let F=h[oe],Y=F.color,B=F.intensity,ee=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=Y.r*B*R,m+=Y.g*B*R,_+=Y.b*B*R;else if(F.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(F.sh.coefficients[$],B);E++}else if(F.isDirectionalLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){let re=F.shadow,ie=i.get(F);ie.shadowBias=re.bias,ie.shadowNormalBias=re.normalBias,ie.shadowRadius=re.radius,ie.shadowMapSize=re.mapSize,s.directionalShadow[x]=ie,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=F.shadow.matrix,P++}s.directional[x]=$,x++}else if(F.isSpotLight){let $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(Y).multiplyScalar(B*R),$.distance=ee,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,s.spot[f]=$;let re=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,re.updateMatrices(F),F.castShadow&&Z++),s.spotLightMatrix[f]=re.matrix,F.castShadow){let ie=i.get(F);ie.shadowBias=re.bias,ie.shadowNormalBias=re.normalBias,ie.shadowRadius=re.radius,ie.shadowMapSize=re.mapSize,s.spotShadow[f]=ie,s.spotShadowMap[f]=K,L++}f++}else if(F.isRectAreaLight){let $=t.get(F);$.color.copy(Y).multiplyScalar(B),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),s.rectArea[A]=$,A++}else if(F.isPointLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*R),$.distance=F.distance,$.decay=F.decay,F.castShadow){let re=F.shadow,ie=i.get(F);ie.shadowBias=re.bias,ie.shadowNormalBias=re.normalBias,ie.shadowRadius=re.radius,ie.shadowMapSize=re.mapSize,ie.shadowCameraNear=re.camera.near,ie.shadowCameraFar=re.camera.far,s.pointShadow[p]=ie,s.pointShadowMap[p]=K,s.pointShadowMatrix[p]=F.shadow.matrix,O++}s.point[p]=$,p++}else if(F.isHemisphereLight){let $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(B*R),$.groundColor.copy(F.groundColor).multiplyScalar(B*R),s.hemi[v]=$,v++}}A>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;let J=s.hash;(J.directionalLength!==x||J.pointLength!==p||J.spotLength!==f||J.rectAreaLength!==A||J.hemiLength!==v||J.numDirectionalShadows!==P||J.numPointShadows!==O||J.numSpotShadows!==L||J.numSpotMaps!==D||J.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=A,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=L+D-Z,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=E,J.directionalLength=x,J.pointLength=p,J.spotLength=f,J.rectAreaLength=A,J.hemiLength=v,J.numDirectionalShadows=P,J.numPointShadows=O,J.numSpotShadows=L,J.numSpotMaps=D,J.numLightProbes=E,s.version=tv++)}function l(h,u){let d=0,m=0,_=0,x=0,p=0,f=u.matrixWorldInverse;for(let A=0,v=h.length;A<v;A++){let P=h[A];if(P.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),d++}else if(P.isSpotLight){let O=s.spot[_];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),_++}else if(P.isRectAreaLight){let O=s.rectArea[x];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(f),o.identity(),a.copy(P.matrixWorld),a.premultiply(f),o.extractRotation(a),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),x++}else if(P.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(f),m++}else if(P.isHemisphereLight){let O=s.hemi[p];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function Nd(n,e){let t=new iv(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function sv(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Nd(n,e),t.set(r,[c])):a>=o.length?(c=new Nd(n,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Hc=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ov(n,e,t){let i=new sa,s=new Ze,r=new Ze,a=new _t,o=new Hc({depthPacking:eg}),c=new Vc,l={},h=t.maxTextureSize,u={[Dn]:nn,[nn]:Dn,[bn]:bn},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:rv,fragmentShader:av}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new Cn;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new zt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let f=this.type;this.render=function(L,D,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;let E=n.getRenderTarget(),R=n.getActiveCubeFace(),J=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(ji),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);let he=f!==Ci&&this.type===Ci,F=f===Ci&&this.type!==Ci;for(let Y=0,B=L.length;Y<B;Y++){let ee=L[Y],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let $=K.getFrameExtents();if(s.multiply($),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,K.mapSize.y=r.y)),K.map===null||he===!0||F===!0){let ie=this.type!==Ci?{minFilter:tn,magFilter:tn}:{};K.map!==null&&K.map.dispose(),K.map=new Ni(s.x,s.y,ie),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();let re=K.getViewportCount();for(let ie=0;ie<re;ie++){let fe=K.getViewport(ie);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),oe.viewport(a),K.updateMatrices(ee,ie),i=K.getFrustum(),P(D,Z,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===Ci&&A(K,Z),K.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(E,R,J)};function A(L,D){let Z=e.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,Z,d,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,Z,m,x,null)}function v(L,D,Z,E){let R=null,J=Z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(J!==void 0)R=J;else if(R=Z.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let oe=R.uuid,he=D.uuid,F=l[oe];F===void 0&&(F={},l[oe]=F);let Y=F[he];Y===void 0&&(Y=R.clone(),F[he]=Y,D.addEventListener("dispose",O)),R=Y}if(R.visible=D.visible,R.wireframe=D.wireframe,E===Ci?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:u[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let oe=n.properties.get(R);oe.light=Z}return R}function P(L,D,Z,E,R){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Ci)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld);let he=e.update(L),F=L.material;if(Array.isArray(F)){let Y=he.groups;for(let B=0,ee=Y.length;B<ee;B++){let K=Y[B],$=F[K.materialIndex];if($&&$.visible){let re=v(L,$,E,R);L.onBeforeShadow(n,L,D,Z,he,re,K),n.renderBufferDirect(Z,null,he,re,L,K),L.onAfterShadow(n,L,D,Z,he,re,K)}}}else if(F.visible){let Y=v(L,F,E,R);L.onBeforeShadow(n,L,D,Z,he,Y,null),n.renderBufferDirect(Z,null,he,Y,L,null),L.onAfterShadow(n,L,D,Z,he,Y,null)}}let oe=L.children;for(let he=0,F=oe.length;he<F;he++)P(oe[he],D,Z,E,R)}function O(L){L.target.removeEventListener("dispose",O);for(let Z in l){let E=l[Z],R=L.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function lv(n,e,t){let i=t.isWebGL2;function s(){let U=!1,ve=new _t,be=null,qe=new _t(0,0,0,0);return{setMask:function(Ve){be!==Ve&&!U&&(n.colorMask(Ve,Ve,Ve,Ve),be=Ve)},setLocked:function(Ve){U=Ve},setClear:function(Ve,St,Et,Mt,$t){$t===!0&&(Ve*=Mt,St*=Mt,Et*=Mt),ve.set(Ve,St,Et,Mt),qe.equals(ve)===!1&&(n.clearColor(Ve,St,Et,Mt),qe.copy(ve))},reset:function(){U=!1,be=null,qe.set(-1,0,0,0)}}}function r(){let U=!1,ve=null,be=null,qe=null;return{setTest:function(Ve){Ve?Fe(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Ve){ve!==Ve&&!U&&(n.depthMask(Ve),ve=Ve)},setFunc:function(Ve){if(be!==Ve){switch(Ve){case Am:n.depthFunc(n.NEVER);break;case Cm:n.depthFunc(n.ALWAYS);break;case Rm:n.depthFunc(n.LESS);break;case uo:n.depthFunc(n.LEQUAL);break;case Pm:n.depthFunc(n.EQUAL);break;case Lm:n.depthFunc(n.GEQUAL);break;case Im:n.depthFunc(n.GREATER);break;case Nm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Ve}},setLocked:function(Ve){U=Ve},setClear:function(Ve){qe!==Ve&&(n.clearDepth(Ve),qe=Ve)},reset:function(){U=!1,ve=null,be=null,qe=null}}}function a(){let U=!1,ve=null,be=null,qe=null,Ve=null,St=null,Et=null,Mt=null,$t=null;return{setTest:function(Tt){U||(Tt?Fe(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Tt){ve!==Tt&&!U&&(n.stencilMask(Tt),ve=Tt)},setFunc:function(Tt,en,Fn){(be!==Tt||qe!==en||Ve!==Fn)&&(n.stencilFunc(Tt,en,Fn),be=Tt,qe=en,Ve=Fn)},setOp:function(Tt,en,Fn){(St!==Tt||Et!==en||Mt!==Fn)&&(n.stencilOp(Tt,en,Fn),St=Tt,Et=en,Mt=Fn)},setLocked:function(Tt){U=Tt},setClear:function(Tt){$t!==Tt&&(n.clearStencil(Tt),$t=Tt)},reset:function(){U=!1,ve=null,be=null,qe=null,Ve=null,St=null,Et=null,Mt=null,$t=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},_=new WeakMap,x=[],p=null,f=!1,A=null,v=null,P=null,O=null,L=null,D=null,Z=null,E=new st(0,0,0),R=0,J=!1,oe=null,he=null,F=null,Y=null,B=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,$=0,re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(re)[1]),K=$>=1):re.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),K=$>=2);let ie=null,fe={},k=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),ne=new _t().fromArray(k),se=new _t().fromArray(G);function ae(U,ve,be,qe){let Ve=new Uint8Array(4),St=n.createTexture();n.bindTexture(U,St),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<be;Et++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,qe,0,n.RGBA,n.UNSIGNED_BYTE,Ve):n.texImage2D(ve+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ve);return St}let Te={};Te[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Fe(n.DEPTH_TEST),c.setFunc(uo),ot(!1),C(du),Fe(n.CULL_FACE),Le(ji);function Fe(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Be(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ft(U,ve){return m[U]!==ve?(n.bindFramebuffer(U,ve),m[U]=ve,i&&(U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function H(U,ve){let be=x,qe=!1;if(U)if(be=_.get(ve),be===void 0&&(be=[],_.set(ve,be)),U.isWebGLMultipleRenderTargets){let Ve=U.texture;if(be.length!==Ve.length||be[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Et=Ve.length;St<Et;St++)be[St]=n.COLOR_ATTACHMENT0+St;be.length=Ve.length,qe=!0}}else be[0]!==n.COLOR_ATTACHMENT0&&(be[0]=n.COLOR_ATTACHMENT0,qe=!0);else be[0]!==n.BACK&&(be[0]=n.BACK,qe=!0);qe&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function Qt(U){return p!==U?(n.useProgram(U),p=U,!0):!1}let He={[xs]:n.FUNC_ADD,[dm]:n.FUNC_SUBTRACT,[fm]:n.FUNC_REVERSE_SUBTRACT};if(i)He[gu]=n.MIN,He[yu]=n.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(He[gu]=U.MIN_EXT,He[yu]=U.MAX_EXT)}let Ke={[pm]:n.ZERO,[mm]:n.ONE,[gm]:n.SRC_COLOR,[Sc]:n.SRC_ALPHA,[Mm]:n.SRC_ALPHA_SATURATE,[vm]:n.DST_COLOR,[_m]:n.DST_ALPHA,[ym]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[bm]:n.ONE_MINUS_DST_COLOR,[xm]:n.ONE_MINUS_DST_ALPHA,[Sm]:n.CONSTANT_COLOR,[wm]:n.ONE_MINUS_CONSTANT_COLOR,[Em]:n.CONSTANT_ALPHA,[Tm]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(U,ve,be,qe,Ve,St,Et,Mt,$t,Tt){if(U===ji){f===!0&&(Be(n.BLEND),f=!1);return}if(f===!1&&(Fe(n.BLEND),f=!0),U!==um){if(U!==A||Tt!==J){if((v!==xs||L!==xs)&&(n.blendEquation(n.FUNC_ADD),v=xs,L=xs),Tt)switch(U){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFunc(n.ONE,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}P=null,O=null,D=null,Z=null,E.set(0,0,0),R=0,A=U,J=Tt}return}Ve=Ve||ve,St=St||be,Et=Et||qe,(ve!==v||Ve!==L)&&(n.blendEquationSeparate(He[ve],He[Ve]),v=ve,L=Ve),(be!==P||qe!==O||St!==D||Et!==Z)&&(n.blendFuncSeparate(Ke[be],Ke[qe],Ke[St],Ke[Et]),P=be,O=qe,D=St,Z=Et),(Mt.equals(E)===!1||$t!==R)&&(n.blendColor(Mt.r,Mt.g,Mt.b,$t),E.copy(Mt),R=$t),A=U,J=!1}function Rt(U,ve){U.side===bn?Be(n.CULL_FACE):Fe(n.CULL_FACE);let be=U.side===nn;ve&&(be=!be),ot(be),U.blending===dr&&U.transparent===!1?Le(ji):Le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);let qe=U.stencilWrite;l.setTest(qe),qe&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),W(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(U){oe!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),oe=U)}function C(U){U!==lm?(Fe(n.CULL_FACE),U!==he&&(U===du?n.cullFace(n.BACK):U===cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),he=U}function S(U){U!==F&&(K&&n.lineWidth(U),F=U)}function W(U,ve,be){U?(Fe(n.POLYGON_OFFSET_FILL),(Y!==ve||B!==be)&&(n.polygonOffset(ve,be),Y=ve,B=be)):Be(n.POLYGON_OFFSET_FILL)}function pe(U){U?Fe(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function ue(U){U===void 0&&(U=n.TEXTURE0+ee-1),ie!==U&&(n.activeTexture(U),ie=U)}function me(U,ve,be){be===void 0&&(ie===null?be=n.TEXTURE0+ee-1:be=ie);let qe=fe[be];qe===void 0&&(qe={type:void 0,texture:void 0},fe[be]=qe),(qe.type!==U||qe.texture!==ve)&&(ie!==be&&(n.activeTexture(be),ie=be),n.bindTexture(U,ve||Te[U]),qe.type=U,qe.texture=ve)}function De(){let U=fe[ie];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(U){ne.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function xt(U){se.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function It(U,ve){let be=u.get(ve);be===void 0&&(be=new WeakMap,u.set(ve,be));let qe=be.get(U);qe===void 0&&(qe=n.getUniformBlockIndex(ve,U.name),be.set(U,qe))}function ct(U,ve){let qe=u.get(ve).get(U);h.get(ve)!==qe&&(n.uniformBlockBinding(ve,qe,U.__bindingPointIndex),h.set(ve,qe))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ie=null,fe={},m={},_=new WeakMap,x=[],p=null,f=!1,A=null,v=null,P=null,O=null,L=null,D=null,Z=null,E=new st(0,0,0),R=0,J=!1,oe=null,he=null,F=null,Y=null,B=null,ne.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Fe,disable:Be,bindFramebuffer:ft,drawBuffers:H,useProgram:Qt,setBlending:Le,setMaterial:Rt,setFlipSided:ot,setCullFace:C,setLineWidth:S,setPolygonOffset:W,setScissorTest:pe,activeTexture:ue,bindTexture:me,unbindTexture:De,compressedTexImage2D:Me,compressedTexImage3D:Ce,texImage2D:ke,texImage3D:Re,updateUBOMapping:It,uniformBlockBinding:ct,texStorage2D:ut,texStorage3D:je,texSubImage2D:Ge,texSubImage3D:lt,compressedTexSubImage2D:de,compressedTexSubImage3D:bt,scissor:nt,viewport:xt,reset:_e}}function cv(n,e,t,i,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return m?new OffscreenCanvas(C,S):ta("canvas")}function x(C,S,W,pe){let ue=1;if((C.width>pe||C.height>pe)&&(ue=pe/Math.max(C.width,C.height)),ue<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let me=S?xo:Math.floor,De=me(ue*C.width),Me=me(ue*C.height);u===void 0&&(u=_(De,Me));let Ce=W?_(De,Me):u;return Ce.width=De,Ce.height=Me,Ce.getContext("2d").drawImage(C,0,0,De,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+De+"x"+Me+")."),Ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Pc(C.width)&&Pc(C.height)}function f(C){return o?!1:C.wrapS!==pn||C.wrapT!==pn||C.minFilter!==tn&&C.minFilter!==xn}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==tn&&C.minFilter!==xn}function v(C){n.generateMipmap(C)}function P(C,S,W,pe,ue=!1){if(o===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me=S;if(S===n.RED&&(W===n.FLOAT&&(me=n.R32F),W===n.HALF_FLOAT&&(me=n.R16F),W===n.UNSIGNED_BYTE&&(me=n.R8)),S===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(me=n.R8UI),W===n.UNSIGNED_SHORT&&(me=n.R16UI),W===n.UNSIGNED_INT&&(me=n.R32UI),W===n.BYTE&&(me=n.R8I),W===n.SHORT&&(me=n.R16I),W===n.INT&&(me=n.R32I)),S===n.RG&&(W===n.FLOAT&&(me=n.RG32F),W===n.HALF_FLOAT&&(me=n.RG16F),W===n.UNSIGNED_BYTE&&(me=n.RG8)),S===n.RGBA){let De=ue?mo:Ct.getTransfer(pe);W===n.FLOAT&&(me=n.RGBA32F),W===n.HALF_FLOAT&&(me=n.RGBA16F),W===n.UNSIGNED_BYTE&&(me=De===Dt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function O(C,S,W){return A(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function L(C){return C===tn||C===xu||C===Vl?n.NEAREST:n.LINEAR}function D(C){let S=C.target;S.removeEventListener("dispose",D),E(S),S.isVideoTexture&&h.delete(S)}function Z(C){let S=C.target;S.removeEventListener("dispose",Z),J(S)}function E(C){let S=i.get(C);if(S.__webglInit===void 0)return;let W=C.source,pe=d.get(W);if(pe){let ue=pe[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&R(C),Object.keys(pe).length===0&&d.delete(W)}i.remove(C)}function R(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let W=C.source,pe=d.get(W);delete pe[S.__cacheKey],a.memory.textures--}function J(C){let S=C.texture,W=i.get(C),pe=i.get(S);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(W.__webglFramebuffer[ue]))for(let me=0;me<W.__webglFramebuffer[ue].length;me++)n.deleteFramebuffer(W.__webglFramebuffer[ue][me]);else n.deleteFramebuffer(W.__webglFramebuffer[ue]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ue])}else{if(Array.isArray(W.__webglFramebuffer))for(let ue=0;ue<W.__webglFramebuffer.length;ue++)n.deleteFramebuffer(W.__webglFramebuffer[ue]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ue=0;ue<W.__webglColorRenderbuffer.length;ue++)W.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[ue]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ue=0,me=S.length;ue<me;ue++){let De=i.get(S[ue]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),a.memory.textures--),i.remove(S[ue])}i.remove(S),i.remove(C)}let oe=0;function he(){oe=0}function F(){let C=oe;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),oe+=1,C}function Y(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function B(C,S){let W=i.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let pe=C.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,C,S);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+S)}function ee(C,S){let W=i.get(C);if(C.version>0&&W.__version!==C.version){ne(W,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+S)}function K(C,S){let W=i.get(C);if(C.version>0&&W.__version!==C.version){ne(W,C,S);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+S)}function $(C,S){let W=i.get(C);if(C.version>0&&W.__version!==C.version){se(W,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+S)}let re={[Ki]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},ie={[tn]:n.NEAREST,[xu]:n.NEAREST_MIPMAP_NEAREST,[Vl]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Gm]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},fe={[ng]:n.NEVER,[lg]:n.ALWAYS,[ig]:n.LESS,[uf]:n.LEQUAL,[sg]:n.EQUAL,[og]:n.GEQUAL,[rg]:n.GREATER,[ag]:n.NOTEQUAL};function k(C,S,W){if(W?(n.texParameteri(C,n.TEXTURE_WRAP_S,re[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,re[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,re[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ie[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ie[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==pn||S.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,L(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,L(S.minFilter)),S.minFilter!==tn&&S.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==Vl&&S.minFilter!==Qi||S.type===Pi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function G(C,S){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",D));let pe=S.source,ue=d.get(pe);ue===void 0&&(ue={},d.set(pe,ue));let me=Y(S);if(me!==C.__cacheKey){ue[me]===void 0&&(ue[me]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ue[me].usedTimes++;let De=ue[C.__cacheKey];De!==void 0&&(ue[C.__cacheKey].usedTimes--,De.usedTimes===0&&R(S)),C.__cacheKey=me,C.__webglTexture=ue[me].texture}return W}function ne(C,S,W){let pe=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(pe=n.TEXTURE_3D);let ue=G(C,S),me=S.source;t.bindTexture(pe,C.__webglTexture,n.TEXTURE0+W);let De=i.get(me);if(me.version!==De.__version||ue===!0){t.activeTexture(n.TEXTURE0+W);let Me=Ct.getPrimaries(Ct.workingColorSpace),Ce=S.colorSpace===Hn?null:Ct.getPrimaries(S.colorSpace),Ge=S.colorSpace===Hn||Me===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let lt=f(S)&&p(S.image)===!1,de=x(S.image,lt,!1,s.maxTextureSize);de=ot(S,de);let bt=p(de)||o,ut=r.convert(S.format,S.colorSpace),je=r.convert(S.type),ke=P(S.internalFormat,ut,je,S.colorSpace,S.isVideoTexture);k(pe,S,bt);let Re,nt=S.mipmaps,xt=o&&S.isVideoTexture!==!0&&ke!==cf,It=De.__version===void 0||ue===!0,ct=O(S,de,bt);if(S.isDepthTexture)ke=n.DEPTH_COMPONENT,o?S.type===Pi?ke=n.DEPTH_COMPONENT32F:S.type===$i?ke=n.DEPTH_COMPONENT24:S.type===Ms?ke=n.DEPTH24_STENCIL8:ke=n.DEPTH_COMPONENT16:S.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ss&&ke===n.DEPTH_COMPONENT&&S.type!==sh&&S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=$i,je=r.convert(S.type)),S.format===yr&&ke===n.DEPTH_COMPONENT&&(ke=n.DEPTH_STENCIL,S.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ms,je=r.convert(S.type))),It&&(xt?t.texStorage2D(n.TEXTURE_2D,1,ke,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,ke,de.width,de.height,0,ut,je,null));else if(S.isDataTexture)if(nt.length>0&&bt){xt&&It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,nt[0].width,nt[0].height);for(let _e=0,U=nt.length;_e<U;_e++)Re=nt[_e],xt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ut,je,Re.data):t.texImage2D(n.TEXTURE_2D,_e,ke,Re.width,Re.height,0,ut,je,Re.data);S.generateMipmaps=!1}else xt?(It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,ut,je,de.data)):t.texImage2D(n.TEXTURE_2D,0,ke,de.width,de.height,0,ut,je,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ke,nt[0].width,nt[0].height,de.depth);for(let _e=0,U=nt.length;_e<U;_e++)Re=nt[_e],S.format!==zn?ut!==null?xt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,de.depth,ut,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,ke,Re.width,Re.height,de.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,de.depth,ut,je,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,ke,Re.width,Re.height,de.depth,0,ut,je,Re.data)}else{xt&&It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,nt[0].width,nt[0].height);for(let _e=0,U=nt.length;_e<U;_e++)Re=nt[_e],S.format!==zn?ut!==null?xt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ut,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ut,je,Re.data):t.texImage2D(n.TEXTURE_2D,_e,ke,Re.width,Re.height,0,ut,je,Re.data)}else if(S.isDataArrayTexture)xt?(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ke,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ut,je,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,de.width,de.height,de.depth,0,ut,je,de.data);else if(S.isData3DTexture)xt?(It&&t.texStorage3D(n.TEXTURE_3D,ct,ke,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ut,je,de.data)):t.texImage3D(n.TEXTURE_3D,0,ke,de.width,de.height,de.depth,0,ut,je,de.data);else if(S.isFramebufferTexture){if(It)if(xt)t.texStorage2D(n.TEXTURE_2D,ct,ke,de.width,de.height);else{let _e=de.width,U=de.height;for(let ve=0;ve<ct;ve++)t.texImage2D(n.TEXTURE_2D,ve,ke,_e,U,0,ut,je,null),_e>>=1,U>>=1}}else if(nt.length>0&&bt){xt&&It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,nt[0].width,nt[0].height);for(let _e=0,U=nt.length;_e<U;_e++)Re=nt[_e],xt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ut,je,Re):t.texImage2D(n.TEXTURE_2D,_e,ke,ut,je,Re);S.generateMipmaps=!1}else xt?(It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,je,de)):t.texImage2D(n.TEXTURE_2D,0,ke,ut,je,de);A(S,bt)&&v(pe),De.__version=me.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function se(C,S,W){if(S.image.length!==6)return;let pe=G(C,S),ue=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);let me=i.get(ue);if(ue.version!==me.__version||pe===!0){t.activeTexture(n.TEXTURE0+W);let De=Ct.getPrimaries(Ct.workingColorSpace),Me=S.colorSpace===Hn?null:Ct.getPrimaries(S.colorSpace),Ce=S.colorSpace===Hn||De===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,de=[];for(let _e=0;_e<6;_e++)!Ge&&!lt?de[_e]=x(S.image[_e],!1,!0,s.maxCubemapSize):de[_e]=lt?S.image[_e].image:S.image[_e],de[_e]=ot(S,de[_e]);let bt=de[0],ut=p(bt)||o,je=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Re=P(S.internalFormat,je,ke,S.colorSpace),nt=o&&S.isVideoTexture!==!0,xt=me.__version===void 0||pe===!0,It=O(S,bt,ut);k(n.TEXTURE_CUBE_MAP,S,ut);let ct;if(Ge){nt&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Re,bt.width,bt.height);for(let _e=0;_e<6;_e++){ct=de[_e].mipmaps;for(let U=0;U<ct.length;U++){let ve=ct[U];S.format!==zn?je!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,0,0,ve.width,ve.height,je,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,0,0,ve.width,ve.height,je,ke,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U,Re,ve.width,ve.height,0,je,ke,ve.data)}}}else{ct=S.mipmaps,nt&&xt&&(ct.length>0&&It++,t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Re,de[0].width,de[0].height));for(let _e=0;_e<6;_e++)if(lt){nt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de[_e].width,de[_e].height,je,ke,de[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Re,de[_e].width,de[_e].height,0,je,ke,de[_e].data);for(let U=0;U<ct.length;U++){let be=ct[U].image[_e].image;nt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,0,0,be.width,be.height,je,ke,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,Re,be.width,be.height,0,je,ke,be.data)}}else{nt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je,ke,de[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Re,je,ke,de[_e]);for(let U=0;U<ct.length;U++){let ve=ct[U];nt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,0,0,je,ke,ve.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,U+1,Re,je,ke,ve.image[_e])}}}A(S,ut)&&v(n.TEXTURE_CUBE_MAP),me.__version=ue.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ae(C,S,W,pe,ue,me){let De=r.convert(W.format,W.colorSpace),Me=r.convert(W.type),Ce=P(W.internalFormat,De,Me,W.colorSpace);if(!i.get(S).__hasExternalTextures){let lt=Math.max(1,S.width>>me),de=Math.max(1,S.height>>me);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,me,Ce,lt,de,S.depth,0,De,Me,null):t.texImage2D(ue,me,Ce,lt,de,0,De,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Le(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ue,i.get(W).__webglTexture,0,Ke(S)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ue,i.get(W).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(C,S,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let pe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||Le(S)){let ue=S.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Pi?pe=n.DEPTH_COMPONENT32F:ue.type===$i&&(pe=n.DEPTH_COMPONENT24));let me=Ke(S);Le(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,pe,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,me,pe,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let pe=Ke(S);W&&Le(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,S.width,S.height):Le(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let pe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ue=0;ue<pe.length;ue++){let me=pe[ue],De=r.convert(me.format,me.colorSpace),Me=r.convert(me.type),Ce=P(me.internalFormat,De,Me,me.colorSpace),Ge=Ke(S);W&&Le(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ce,S.width,S.height):Le(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);let pe=i.get(S.depthTexture).__webglTexture,ue=Ke(S);if(S.depthTexture.format===Ss)Le(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(S.depthTexture.format===yr)Le(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Be(C){let S=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Fe(S.__webglFramebuffer,C)}else if(W){S.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[pe]),S.__webglDepthbuffer[pe]=n.createRenderbuffer(),Te(S.__webglDepthbuffer[pe],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Te(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(C,S,W){let pe=i.get(C);S!==void 0&&ae(pe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Be(C)}function H(C){let S=C.texture,W=i.get(C),pe=i.get(S);C.addEventListener("dispose",Z),C.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=S.version,a.memory.textures++);let ue=C.isWebGLCubeRenderTarget===!0,me=C.isWebGLMultipleRenderTargets===!0,De=p(C)||o;if(ue){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)W.__webglFramebuffer[Me][Ce]=n.createFramebuffer()}else W.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)W.__webglFramebuffer[Me]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(me)if(s.drawBuffers){let Me=C.texture;for(let Ce=0,Ge=Me.length;Ce<Ge;Ce++){let lt=i.get(Me[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Le(C)===!1){let Me=me?S:[S];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Me.length;Ce++){let Ge=Me[Ce];W.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);let lt=r.convert(Ge.format,Ge.colorSpace),de=r.convert(Ge.type),bt=P(Ge.internalFormat,lt,de,Ge.colorSpace,C.isXRRenderTarget===!0),ut=Ke(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,bt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),k(n.TEXTURE_CUBE_MAP,S,De);for(let Me=0;Me<6;Me++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ae(W.__webglFramebuffer[Me][Ce],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ce);else ae(W.__webglFramebuffer[Me],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);A(S,De)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){let Me=C.texture;for(let Ce=0,Ge=Me.length;Ce<Ge;Ce++){let lt=Me[Ce],de=i.get(lt);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),k(n.TEXTURE_2D,lt,De),ae(W.__webglFramebuffer,C,lt,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),A(lt,De)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,pe.__webglTexture),k(Me,S,De),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ae(W.__webglFramebuffer[Ce],C,S,n.COLOR_ATTACHMENT0,Me,Ce);else ae(W.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Me,0);A(S,De)&&v(Me),t.unbindTexture()}C.depthBuffer&&Be(C)}function Qt(C){let S=p(C)||o,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pe=0,ue=W.length;pe<ue;pe++){let me=W[pe];if(A(me,S)){let De=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(me).__webglTexture;t.bindTexture(De,Me),v(De),t.unbindTexture()}}}function He(C){if(o&&C.samples>0&&Le(C)===!1){let S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,pe=C.height,ue=n.COLOR_BUFFER_BIT,me=[],De=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(C),Ce=C.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Ge=0;Ge<S.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ge=0;Ge<S.length;Ge++){me.push(n.COLOR_ATTACHMENT0+Ge),C.depthBuffer&&me.push(De);let lt=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(lt===!1&&(C.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ge]),lt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),Ce){let de=i.get(S[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,W,pe,0,0,W,pe,ue,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Ge=0;Ge<S.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ge]);let lt=i.get(S[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Ke(C){return Math.min(s.maxSamples,C.samples)}function Le(C){let S=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ot(C,S){let W=C.colorSpace,pe=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Rc||W!==Ii&&W!==Hn&&(Ct.getTransfer(W)===Dt?o===!1?e.has("EXT_sRGB")===!0&&pe===zn?(C.format=Rc,C.minFilter=xn,C.generateMipmaps=!1):S=vo.sRGBToLinear(S):(pe!==zn||ue!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}this.allocateTextureUnit=F,this.resetTextureUnits=he,this.setTexture2D=B,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=ft,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Le}function hv(n,e,t){let i=t.isWebGL2;function s(r,a=Hn){let o,c=Ct.getTransfer(a);if(r===Ji)return n.UNSIGNED_BYTE;if(r===sf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===rf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Wm)return n.BYTE;if(r===Xm)return n.SHORT;if(r===sh)return n.UNSIGNED_SHORT;if(r===nf)return n.INT;if(r===$i)return n.UNSIGNED_INT;if(r===Pi)return n.FLOAT;if(r===ea)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qm)return n.ALPHA;if(r===zn)return n.RGBA;if(r===Ym)return n.LUMINANCE;if(r===$m)return n.LUMINANCE_ALPHA;if(r===Ss)return n.DEPTH_COMPONENT;if(r===yr)return n.DEPTH_STENCIL;if(r===Rc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jm)return n.RED;if(r===af)return n.RED_INTEGER;if(r===Zm)return n.RG;if(r===of)return n.RG_INTEGER;if(r===lf)return n.RGBA_INTEGER;if(r===Gl||r===Wl||r===Xl||r===ql)if(c===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Gl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ql)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Gl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ql)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vu||r===bu||r===Mu||r===Su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wu||r===Eu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===wu)return c===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Eu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tu||r===Au||r===Cu||r===Ru||r===Pu||r===Lu||r===Iu||r===Nu||r===Du||r===Uu||r===Ou||r===Fu||r===Bu||r===ku)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Tu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Au)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ru)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Iu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Du)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ou)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ku)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yl||r===zu||r===Hu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Yl)return c===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jm||r===Vu||r===Gu||r===Wu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Yl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Vu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ms?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Gc=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mn=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},uv={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Wc=class extends es{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,_=null,x=t.getContextAttributes(),p=null,f=null,A=[],v=[],P=new Ze,O=null,L=new Wt;L.layers.enable(1),L.viewport=new _t;let D=new Wt;D.layers.enable(2),D.viewport=new _t;let Z=[L,D],E=new Gc;E.layers.enable(1),E.layers.enable(2);let R=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let G=A[k];return G===void 0&&(G=new Qr,A[k]=G),G.getTargetRaySpace()},this.getControllerGrip=function(k){let G=A[k];return G===void 0&&(G=new Qr,A[k]=G),G.getGripSpace()},this.getHand=function(k){let G=A[k];return G===void 0&&(G=new Qr,A[k]=G),G.getHandSpace()};function oe(k){let G=v.indexOf(k.inputSource);if(G===-1)return;let ne=A[G];ne!==void 0&&(ne.update(k.inputSource,k.frame,l||a),ne.dispatchEvent({type:k.type,data:k.inputSource}))}function he(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",F);for(let k=0;k<A.length;k++){let G=v[k];G!==null&&(v[k]=null,A[k].disconnect(G))}R=null,J=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",he),s.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let G={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ni(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let G=null,ne=null,se=null;x.depth&&(se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=x.stencil?yr:Ss,ne=x.stencil?Ms:$i);let ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Ni(d.textureWidth,d.textureHeight,{format:zn,type:Ji,depthTexture:new Ro(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Te=e.properties.get(f);Te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(k){for(let G=0;G<k.removed.length;G++){let ne=k.removed[G],se=v.indexOf(ne);se>=0&&(v[se]=null,A[se].disconnect(ne))}for(let G=0;G<k.added.length;G++){let ne=k.added[G],se=v.indexOf(ne);if(se===-1){for(let Te=0;Te<A.length;Te++)if(Te>=v.length){v.push(ne),se=Te;break}else if(v[Te]===null){v[Te]=ne,se=Te;break}if(se===-1)break}let ae=A[se];ae&&ae.connect(ne)}}let Y=new N,B=new N;function ee(k,G,ne){Y.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(ne.matrixWorld);let se=Y.distanceTo(B),ae=G.projectionMatrix.elements,Te=ne.projectionMatrix.elements,Fe=ae[14]/(ae[10]-1),Be=ae[14]/(ae[10]+1),ft=(ae[9]+1)/ae[5],H=(ae[9]-1)/ae[5],Qt=(ae[8]-1)/ae[0],He=(Te[8]+1)/Te[0],Ke=Fe*Qt,Le=Fe*He,Rt=se/(-Qt+He),ot=Rt*-Qt;G.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ot),k.translateZ(Rt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let C=Fe+Rt,S=Be+Rt,W=Ke-ot,pe=Le+(se-ot),ue=ft*Be/S*C,me=H*Be/S*C;k.projectionMatrix.makePerspective(W,pe,ue,me,C,S),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function K(k,G){G===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(G.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;E.near=D.near=L.near=k.near,E.far=D.far=L.far=k.far,(R!==E.near||J!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,J=E.far);let G=k.parent,ne=E.cameras;K(E,G);for(let se=0;se<ne.length;se++)K(ne[se],G);ne.length===2?ee(E,L,D):E.projectionMatrix.copy(L.projectionMatrix),$(k,E,G)};function $(k,G,ne){ne===null?k.matrix.copy(G.matrixWorld):(k.matrix.copy(ne.matrixWorld),k.matrix.invert(),k.matrix.multiply(G.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(G.projectionMatrix),k.projectionMatrixInverse.copy(G.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=_r*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let re=null;function ie(k,G){if(h=G.getViewerPose(l||a),_=G,h!==null){let ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let se=!1;ne.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let ae=0;ae<ne.length;ae++){let Te=ne[ae],Fe=null;if(m!==null)Fe=m.getViewport(Te);else{let ft=u.getViewSubImage(d,Te);Fe=ft.viewport,ae===0&&(e.setRenderTargetTextures(f,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(f))}let Be=Z[ae];Be===void 0&&(Be=new Wt,Be.layers.enable(ae),Be.viewport=new _t,Z[ae]=Be),Be.matrix.fromArray(Te.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Te.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ae===0&&(E.matrix.copy(Be.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(Be)}}for(let ne=0;ne<A.length;ne++){let se=v[ne],ae=A[ne];se!==null&&ae!==void 0&&ae.update(se,G,l||a)}re&&re(k,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),_=null}let fe=new mf;fe.setAnimationLoop(ie),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}};function dv(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,pf(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,A,v,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,P)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,A,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let A=e.get(f).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,A,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let A=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fv(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,v){let P=v.program;i.uniformBlockBinding(A,P)}function l(A,v){let P=s[A.id];P===void 0&&(_(A),P=h(A),s[A.id]=P,A.addEventListener("dispose",p));let O=v.program;i.updateUBOMapping(A,O);let L=e.render.frame;r[A.id]!==L&&(d(A),r[A.id]=L)}function h(A){let v=u();A.__bindingPointIndex=v;let P=n.createBuffer(),O=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,O,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,P),P}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let v=s[A.id],P=A.uniforms,O=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let L=0,D=P.length;L<D;L++){let Z=Array.isArray(P[L])?P[L]:[P[L]];for(let E=0,R=Z.length;E<R;E++){let J=Z[E];if(m(J,L,E,O)===!0){let oe=J.__offset,he=Array.isArray(J.value)?J.value:[J.value],F=0;for(let Y=0;Y<he.length;Y++){let B=he[Y],ee=x(B);typeof B=="number"||typeof B=="boolean"?(J.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,oe+F,J.__data)):B.isMatrix3?(J.__data[0]=B.elements[0],J.__data[1]=B.elements[1],J.__data[2]=B.elements[2],J.__data[3]=0,J.__data[4]=B.elements[3],J.__data[5]=B.elements[4],J.__data[6]=B.elements[5],J.__data[7]=0,J.__data[8]=B.elements[6],J.__data[9]=B.elements[7],J.__data[10]=B.elements[8],J.__data[11]=0):(B.toArray(J.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,oe,J.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,v,P,O){let L=A.value,D=v+"_"+P;if(O[D]===void 0)return typeof L=="number"||typeof L=="boolean"?O[D]=L:O[D]=L.clone(),!0;{let Z=O[D];if(typeof L=="number"||typeof L=="boolean"){if(Z!==L)return O[D]=L,!0}else if(Z.equals(L)===!1)return Z.copy(L),!0}return!1}function _(A){let v=A.uniforms,P=0,O=16;for(let D=0,Z=v.length;D<Z;D++){let E=Array.isArray(v[D])?v[D]:[v[D]];for(let R=0,J=E.length;R<J;R++){let oe=E[R],he=Array.isArray(oe.value)?oe.value:[oe.value];for(let F=0,Y=he.length;F<Y;F++){let B=he[F],ee=x(B),K=P%O;K!==0&&O-K<ee.boundary&&(P+=O-K),oe.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=ee.storage}}}let L=P%O;return L>0&&(P+=O-L),A.__size=P,A.__cache={},this}function x(A){let v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function p(A){let v=A.target;v.removeEventListener("dispose",p);let P=a.indexOf(v.__bindingPointIndex);a.splice(P,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ra=class{constructor(e={}){let{canvas:t=Sg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),_=new Int32Array(4),x=null,p=null,f=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;let v=this,P=!1,O=0,L=0,D=null,Z=-1,E=null,R=new _t,J=new _t,oe=null,he=new st(0),F=0,Y=t.width,B=t.height,ee=1,K=null,$=null,re=new _t(0,0,Y,B),ie=new _t(0,0,Y,B),fe=!1,k=new sa,G=!1,ne=!1,se=null,ae=new rt,Te=new Ze,Fe=new N,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return D===null?ee:1}let H=i;function Qt(T,z){for(let X=0;X<T.length;X++){let j=T[X],V=t.getContext(j,z);if(V!==null)return V}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ve,!1),H===null){let z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),H=Qt(z,T),H===null)throw Qt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Ke,Le,Rt,ot,C,S,W,pe,ue,me,De,Me,Ce,Ge,lt,de,bt,ut,je,ke,Re,nt,xt;function It(){He=new I_(H),Ke=new T_(H,He,e),He.init(Ke),Re=new hv(H,He,Ke),Le=new lv(H,He,Ke),Rt=new U_(H),ot=new Zx,C=new cv(H,He,Le,ot,Ke,Re,Rt),S=new C_(v),W=new L_(v),pe=new Gg(H,Ke),nt=new w_(H,He,pe,Ke),ue=new N_(H,pe,Rt,nt),me=new k_(H,ue,pe,Rt),ut=new B_(H,Ke,C),lt=new A_(ot),De=new jx(v,S,W,He,Ke,nt,lt),Me=new dv(v,ot),Ce=new Kx,Ge=new sv(He,Ke),bt=new S_(v,S,W,Le,me,d,c),de=new ov(v,me,Ke),xt=new fv(H,Rt,Ke,Le),je=new E_(H,He,Rt,Ke),ke=new D_(H,He,Rt,Ke),Rt.programs=De.programs,v.capabilities=Ke,v.extensions=He,v.properties=ot,v.renderLists=Ce,v.shadowMap=de,v.state=Le,v.info=Rt}It();let ct=new Wc(v,H);this.xr=ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Y,B,!1))},this.getSize=function(T){return T.set(Y,B)},this.setSize=function(T,z,X=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,B=z,t.width=Math.floor(T*ee),t.height=Math.floor(z*ee),X===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Y*ee,B*ee).floor()},this.setDrawingBufferSize=function(T,z,X){Y=T,B=z,ee=X,t.width=Math.floor(T*X),t.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,z,X,j){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,z,X,j),Le.viewport(R.copy(re).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,z,X,j){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,z,X,j),Le.scissor(J.copy(ie).multiplyScalar(ee).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){Le.setScissorTest(fe=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(T=!0,z=!0,X=!0){let j=0;if(T){let V=!1;if(D!==null){let we=D.texture.format;V=we===lf||we===of||we===af}if(V){let we=D.texture.type,Ee=we===Ji||we===$i||we===sh||we===Ms||we===sf||we===rf,Ue=bt.getClearColor(),We=bt.getClearAlpha(),it=Ue.r,Qe=Ue.g,et=Ue.b;Ee?(m[0]=it,m[1]=Qe,m[2]=et,m[3]=We,H.clearBufferuiv(H.COLOR,0,m)):(_[0]=it,_[1]=Qe,_[2]=et,_[3]=We,H.clearBufferiv(H.COLOR,0,_))}else j|=H.COLOR_BUFFER_BIT}z&&(j|=H.DEPTH_BUFFER_BIT),X&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ce.dispose(),Ge.dispose(),ot.dispose(),S.dispose(),W.dispose(),me.dispose(),nt.dispose(),xt.dispose(),De.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",$t),ct.removeEventListener("sessionend",Tt),se&&(se.dispose(),se=null),en.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let T=Rt.autoReset,z=de.enabled,X=de.autoUpdate,j=de.needsUpdate,V=de.type;It(),Rt.autoReset=T,de.enabled=z,de.autoUpdate=X,de.needsUpdate=j,de.type=V}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){let z=T.target;z.removeEventListener("dispose",be),qe(z)}function qe(T){Ve(T),ot.remove(T)}function Ve(T){let z=ot.get(T).programs;z!==void 0&&(z.forEach(function(X){De.releaseProgram(X)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,j,V,we){z===null&&(z=Be);let Ee=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Bl(T,z,X,j,V);Le.setMaterial(j,Ee);let We=X.index,it=1;if(j.wireframe===!0){if(We=ue.getWireframeAttribute(X),We===void 0)return;it=2}let Qe=X.drawRange,et=X.attributes.position,Ot=Qe.start*it,gn=(Qe.start+Qe.count)*it;we!==null&&(Ot=Math.max(Ot,we.start*it),gn=Math.min(gn,(we.start+we.count)*it)),We!==null?(Ot=Math.max(Ot,0),gn=Math.min(gn,We.count)):et!=null&&(Ot=Math.max(Ot,0),gn=Math.min(gn,et.count));let Vt=gn-Ot;if(Vt<0||Vt===1/0)return;nt.setup(V,j,Ue,X,We);let Bn,Pt=je;if(We!==null&&(Bn=pe.get(We),Pt=ke,Pt.setIndex(Bn)),V.isMesh)j.wireframe===!0?(Le.setLineWidth(j.wireframeLinewidth*ft()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(V.isLine){let Je=j.linewidth;Je===void 0&&(Je=1),Le.setLineWidth(Je*ft()),V.isLineSegments?Pt.setMode(H.LINES):V.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else V.isPoints?Pt.setMode(H.POINTS):V.isSprite&&Pt.setMode(H.TRIANGLES);if(V.isBatchedMesh)Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Pt.renderInstances(Ot,Vt,V.count);else if(X.isInstancedBufferGeometry){let Je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Fr=Math.min(X.instanceCount,Je);Pt.renderInstances(Ot,Vt,Fr)}else Pt.render(Ot,Vt)};function St(T,z,X){T.transparent===!0&&T.side===bn&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Vs(T,z,X),T.side=Dn,T.needsUpdate=!0,Vs(T,z,X),T.side=bn):Vs(T,z,X)}this.compile=function(T,z,X=null){X===null&&(X=T),p=Ge.get(X),p.init(),A.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(v._useLegacyLights);let j=new Set;return T.traverse(function(V){let we=V.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){let Ue=we[Ee];St(Ue,X,V),j.add(Ue)}else St(we,X,V),j.add(we)}),A.pop(),p=null,j},this.compileAsync=function(T,z,X=null){let j=this.compile(T,z,X);return new Promise(V=>{function we(){if(j.forEach(function(Ee){ot.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){V(T);return}setTimeout(we,10)}He.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Et=null;function Mt(T){Et&&Et(T)}function $t(){en.stop()}function Tt(){en.start()}let en=new mf;en.setAnimationLoop(Mt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){Et=T,ct.setAnimationLoop(T),T===null?en.stop():en.start()},ct.addEventListener("sessionstart",$t),ct.addEventListener("sessionend",Tt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(z),z=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,D),p=Ge.get(T,A.length),p.init(),A.push(p),ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k.setFromProjectionMatrix(ae),ne=this.localClippingEnabled,G=lt.init(this.clippingPlanes,ne),x=Ce.get(T,f.length),x.init(),f.push(x),Fn(T,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,$),this.info.render.frame++,G===!0&&lt.beginShadows();let X=p.state.shadowsArray;if(de.render(X,T,z),G===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(x,T),p.setupLights(v._useLegacyLights),z.isArrayCamera){let j=z.cameras;for(let V=0,we=j.length;V<we;V++){let Ee=j[V];Pa(x,T,Ee,Ee.viewport)}}else Pa(x,T,z);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(v,T,z),nt.resetDefaultState(),Z=-1,E=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Fn(T,z,X,j){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||k.intersectsSprite(T)){j&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);let Ee=me.update(T),Ue=T.material;Ue.visible&&x.push(T,Ee,Ue,X,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||k.intersectsObject(T))){let Ee=me.update(T),Ue=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Fe.copy(Ee.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(ae)),Array.isArray(Ue)){let We=Ee.groups;for(let it=0,Qe=We.length;it<Qe;it++){let et=We[it],Ot=Ue[et.materialIndex];Ot&&Ot.visible&&x.push(T,Ee,Ot,X,Fe.z,et)}}else Ue.visible&&x.push(T,Ee,Ue,X,Fe.z,null)}}let we=T.children;for(let Ee=0,Ue=we.length;Ee<Ue;Ee++)Fn(we[Ee],z,X,j)}function Pa(T,z,X,j){let V=T.opaque,we=T.transmissive,Ee=T.transparent;p.setupLightsView(X),G===!0&&lt.setGlobalState(v.clippingPlanes,X),we.length>0&&Fl(V,we,z,X),j&&Le.viewport(R.copy(j)),V.length>0&&Hs(V,z,X),we.length>0&&Hs(we,z,X),Ee.length>0&&Hs(Ee,z,X),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Fl(T,z,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let we=Ke.isWebGL2;se===null&&(se=new Ni(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?ea:Ji,minFilter:Qi,samples:we?4:0})),v.getDrawingBufferSize(Te),we?se.setSize(Te.x,Te.y):se.setSize(xo(Te.x),xo(Te.y));let Ee=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(he),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let Ue=v.toneMapping;v.toneMapping=Zi,Hs(T,X,j),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se);let We=!1;for(let it=0,Qe=z.length;it<Qe;it++){let et=z[it],Ot=et.object,gn=et.geometry,Vt=et.material,Bn=et.group;if(Vt.side===bn&&Ot.layers.test(j.layers)){let Pt=Vt.side;Vt.side=nn,Vt.needsUpdate=!0,Ur(Ot,X,j,gn,Vt,Bn),Vt.side=Pt,Vt.needsUpdate=!0,We=!0}}We===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se)),v.setRenderTarget(Ee),v.setClearColor(he,F),v.toneMapping=Ue}function Hs(T,z,X){let j=z.isScene===!0?z.overrideMaterial:null;for(let V=0,we=T.length;V<we;V++){let Ee=T[V],Ue=Ee.object,We=Ee.geometry,it=j===null?Ee.material:j,Qe=Ee.group;Ue.layers.test(X.layers)&&Ur(Ue,z,X,We,it,Qe)}}function Ur(T,z,X,j,V,we){T.onBeforeRender(v,z,X,j,V,we),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(v,z,X,j,T,we),V.transparent===!0&&V.side===bn&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,v.renderBufferDirect(X,z,j,V,T,we),V.side=Dn,V.needsUpdate=!0,v.renderBufferDirect(X,z,j,V,T,we),V.side=bn):v.renderBufferDirect(X,z,j,V,T,we),T.onAfterRender(v,z,X,j,V,we)}function Vs(T,z,X){z.isScene!==!0&&(z=Be);let j=ot.get(T),V=p.state.lights,we=p.state.shadowsArray,Ee=V.state.version,Ue=De.getParameters(T,V.state,we,z,X),We=De.getProgramCacheKey(Ue),it=j.programs;j.environment=T.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(T.isMeshStandardMaterial?W:S).get(T.envMap||j.environment),it===void 0&&(T.addEventListener("dispose",be),it=new Map,j.programs=it);let Qe=it.get(We);if(Qe!==void 0){if(j.currentProgram===Qe&&j.lightsStateVersion===Ee)return La(T,Ue),Qe}else Ue.uniforms=De.getUniforms(T),T.onBuild(X,Ue,v),T.onBeforeCompile(Ue,v),Qe=De.acquireProgram(Ue,We),it.set(We,Qe),j.uniforms=Ue.uniforms;let et=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(et.clippingPlanes=lt.uniform),La(T,Ue),j.needsLights=zl(T),j.lightsStateVersion=Ee,j.needsLights&&(et.ambientLightColor.value=V.state.ambient,et.lightProbe.value=V.state.probe,et.directionalLights.value=V.state.directional,et.directionalLightShadows.value=V.state.directionalShadow,et.spotLights.value=V.state.spot,et.spotLightShadows.value=V.state.spotShadow,et.rectAreaLights.value=V.state.rectArea,et.ltc_1.value=V.state.rectAreaLTC1,et.ltc_2.value=V.state.rectAreaLTC2,et.pointLights.value=V.state.point,et.pointLightShadows.value=V.state.pointShadow,et.hemisphereLights.value=V.state.hemi,et.directionalShadowMap.value=V.state.directionalShadowMap,et.directionalShadowMatrix.value=V.state.directionalShadowMatrix,et.spotShadowMap.value=V.state.spotShadowMap,et.spotLightMatrix.value=V.state.spotLightMatrix,et.spotLightMap.value=V.state.spotLightMap,et.pointShadowMap.value=V.state.pointShadowMap,et.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Qe,j.uniformsList=null,Qe}function Or(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=pr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function La(T,z){let X=ot.get(T);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Bl(T,z,X,j,V){z.isScene!==!0&&(z=Be),C.resetTextureUnits();let we=z.fog,Ee=j.isMeshStandardMaterial?z.environment:null,Ue=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ii,We=(j.isMeshStandardMaterial?W:S).get(j.envMap||Ee),it=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),et=!!X.morphAttributes.position,Ot=!!X.morphAttributes.normal,gn=!!X.morphAttributes.color,Vt=Zi;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Vt=v.toneMapping);let Bn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Pt=Bn!==void 0?Bn.length:0,Je=ot.get(j),Fr=p.state.lights;if(G===!0&&(ne===!0||T!==E)){let hn=T===E&&j.id===Z;lt.setState(j,T,hn)}let Nt=!1;j.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Fr.state.version||Je.outputColorSpace!==Ue||V.isBatchedMesh&&Je.batching===!1||!V.isBatchedMesh&&Je.batching===!0||V.isInstancedMesh&&Je.instancing===!1||!V.isInstancedMesh&&Je.instancing===!0||V.isSkinnedMesh&&Je.skinning===!1||!V.isSkinnedMesh&&Je.skinning===!0||V.isInstancedMesh&&Je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Je.instancingColor===!1&&V.instanceColor!==null||Je.envMap!==We||j.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==lt.numPlanes||Je.numIntersection!==lt.numIntersection)||Je.vertexAlphas!==it||Je.vertexTangents!==Qe||Je.morphTargets!==et||Je.morphNormals!==Ot||Je.morphColors!==gn||Je.toneMapping!==Vt||Ke.isWebGL2===!0&&Je.morphTargetsCount!==Pt)&&(Nt=!0):(Nt=!0,Je.__version=j.version);let vi=Je.currentProgram;Nt===!0&&(vi=Vs(j,z,V));let Br=!1,fs=!1,kr=!1,jt=vi.getUniforms(),ni=Je.uniforms;if(Le.useProgram(vi.program)&&(Br=!0,fs=!0,kr=!0),j.id!==Z&&(Z=j.id,fs=!0),Br||E!==T){jt.setValue(H,"projectionMatrix",T.projectionMatrix),jt.setValue(H,"viewMatrix",T.matrixWorldInverse);let hn=jt.map.cameraPosition;hn!==void 0&&hn.setValue(H,Fe.setFromMatrixPosition(T.matrixWorld)),Ke.logarithmicDepthBuffer&&jt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&jt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,fs=!0,kr=!0)}if(V.isSkinnedMesh){jt.setOptional(H,V,"bindMatrix"),jt.setOptional(H,V,"bindMatrixInverse");let hn=V.skeleton;hn&&(Ke.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),jt.setValue(H,"boneTexture",hn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(jt.setOptional(H,V,"batchingTexture"),jt.setValue(H,"batchingTexture",V._matricesTexture,C));let Ft=X.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0&&Ke.isWebGL2===!0)&&ut.update(V,X,vi),(fs||Je.receiveShadow!==V.receiveShadow)&&(Je.receiveShadow=V.receiveShadow,jt.setValue(H,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ni.envMap.value=We,ni.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),fs&&(jt.setValue(H,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&kl(ni,kr),we&&j.fog===!0&&Me.refreshFogUniforms(ni,we),Me.refreshMaterialUniforms(ni,j,ee,B,se),pr.upload(H,Or(Je),ni,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pr.upload(H,Or(Je),ni,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&jt.setValue(H,"center",V.center),jt.setValue(H,"modelViewMatrix",V.modelViewMatrix),jt.setValue(H,"normalMatrix",V.normalMatrix),jt.setValue(H,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let hn=j.uniformsGroups;for(let zr=0,Ia=hn.length;zr<Ia;zr++)if(Ke.isWebGL2){let Hr=hn[zr];xt.update(Hr,vi),xt.bind(Hr,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function kl(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function zl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,z,X){ot.get(T.texture).__webglTexture=z,ot.get(T.depthTexture).__webglTexture=X;let j=ot.get(T);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){let X=ot.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){D=T,O=z,L=X;let j=!0,V=null,we=!1,Ee=!1;if(T){let We=ot.get(T);We.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):We.__webglFramebuffer===void 0?C.setupRenderTarget(T):We.__hasExternalTextures&&C.rebindTextures(T,ot.get(T.texture).__webglTexture,ot.get(T.depthTexture).__webglTexture);let it=T.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ee=!0);let Qe=ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[z])?V=Qe[z][X]:V=Qe[z],we=!0):Ke.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?V=ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?V=Qe[X]:V=Qe,R.copy(T.viewport),J.copy(T.scissor),oe=T.scissorTest}else R.copy(re).multiplyScalar(ee).floor(),J.copy(ie).multiplyScalar(ee).floor(),oe=fe;if(Le.bindFramebuffer(H.FRAMEBUFFER,V)&&Ke.drawBuffers&&j&&Le.drawBuffers(T,V),Le.viewport(R),Le.scissor(J),Le.setScissorTest(oe),we){let We=ot.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,X)}else if(Ee){let We=ot.get(T.texture),it=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.__webglTexture,X||0,it)}Z=-1},this.readRenderTargetPixels=function(T,z,X,j,V,we,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ue=Ue[Ee]),Ue){Le.bindFramebuffer(H.FRAMEBUFFER,Ue);try{let We=T.texture,it=We.format,Qe=We.type;if(it!==zn&&Re.convert(it)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let et=Qe===ea&&(He.has("EXT_color_buffer_half_float")||Ke.isWebGL2&&He.has("EXT_color_buffer_float"));if(Qe!==Ji&&Re.convert(Qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Pi&&(Ke.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-j&&X>=0&&X<=T.height-V&&H.readPixels(z,X,j,V,Re.convert(it),Re.convert(Qe),we)}finally{let We=D!==null?ot.get(D).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(T,z,X=0){let j=Math.pow(2,-X),V=Math.floor(z.image.width*j),we=Math.floor(z.image.height*j);C.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,T.x,T.y,V,we),Le.unbindTexture()},this.copyTextureToTexture=function(T,z,X,j=0){let V=z.image.width,we=z.image.height,Ee=Re.convert(X.format),Ue=Re.convert(X.type);C.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,T.x,T.y,V,we,Ee,Ue,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,T.x,T.y,Ee,Ue,z.image),j===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X,j,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,We=Re.convert(j.format),it=Re.convert(j.type),Qe;if(j.isData3DTexture)C.setTexture3D(j,0),Qe=H.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),Qe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);let et=H.getParameter(H.UNPACK_ROW_LENGTH),Ot=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gn=H.getParameter(H.UNPACK_SKIP_PIXELS),Vt=H.getParameter(H.UNPACK_SKIP_ROWS),Bn=H.getParameter(H.UNPACK_SKIP_IMAGES),Pt=X.isCompressedTexture?X.mipmaps[V]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Pt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(Qe,V,z.x,z.y,z.z,we,Ee,Ue,We,it,Pt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Qe,V,z.x,z.y,z.z,we,Ee,Ue,We,Pt.data)):H.texSubImage3D(Qe,V,z.x,z.y,z.z,we,Ee,Ue,We,it,Pt),H.pixelStorei(H.UNPACK_ROW_LENGTH,et),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Vt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Bn),V===0&&j.generateMipmaps&&H.generateMipmap(Qe),Le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Le.unbindTexture()},this.resetState=function(){O=0,L=0,D=null,Le.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ah?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Jo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?ws:hf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ws?kt:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Xc=class extends ra{};Xc.prototype.isWebGL1Renderer=!0;var Es=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Po=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new N,Gn=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mr=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,qr=new N,or=new N,lr=new N,cr=new Ze,Yr=new Ze,bf=new rt,so=new N,$r=new N,ro=new N,Dd=new Ze,yc=new Ze,Ud=new Ze,aa=class extends Xt{constructor(e=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Cn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Po(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Gn(i,3,0,!1)),ar.setAttribute("uv",new Gn(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new Ze(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ao(so.set(-.5,-.5,0),lr,a,or,s,r),ao($r.set(.5,-.5,0),lr,a,or,s,r),ao(ro.set(.5,.5,0),lr,a,or,s,r),Dd.set(0,0),yc.set(1,0),Ud.set(1,1);let o=e.ray.intersectTriangle(so,$r,ro,!1,qr);if(o===null&&(ao($r.set(-.5,.5,0),lr,a,or,s,r),yc.set(0,1),o=e.ray.intersectTriangle(so,ro,$r,!1,qr),o===null))return;let c=e.ray.origin.distanceTo(qr);c<e.near||c>e.far||t.push({distance:c,point:qr.clone(),uv:bs.getInterpolation(qr,so,$r,ro,Dd,yc,Ud,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ao(n,e,t,i,s,r){cr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Yr.x=r*cr.x-s*cr.y,Yr.y=s*cr.x+r*cr.y):Yr.copy(cr),n.copy(e),n.x+=Yr.x,n.y+=Yr.y,n.applyMatrix4(bf)}var Od=new N,Fd=new _t,Bd=new _t,pv=new N,kd=new rt,oo=new N,_c=new Vn,zd=new rt,xc=new xr,Lo=class extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_u,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,oo),this.boundingSphere.expandByPoint(oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_c.copy(this.boundingSphere),_c.applyMatrix4(s),e.ray.intersectsSphere(_c)!==!1&&(zd.copy(s).invert(),xc.copy(e.ray).applyMatrix4(zd),!(this.boundingBox!==null&&xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Fd.fromBufferAttribute(s.attributes.skinIndex,e),Bd.fromBufferAttribute(s.attributes.skinWeight,e),Od.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Bd.getComponent(r);if(a!==0){let o=Fd.getComponent(r);kd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(pv.copy(Od).applyMatrix4(kd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},oa=class extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Io=class extends An{constructor(e=null,t=1,i=1,s,r,a,o,c,l=tn,h=tn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hd=new rt,mv=new rt,No=class n{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new rt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:mv;Hd.multiplyMatrices(o,t[r]),Hd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Io(t,e,e,zn,Pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new oa),this.bones.push(a),this.boneInverses.push(new rt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var Sr=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vd=new N,Gd=new N,Wd=new rt,vc=new xr,lo=new Vn,la=class extends Xt{constructor(e=new Cn,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vd.fromBufferAttribute(t,s-1),Gd.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vd.distanceTo(Gd);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Wd.copy(s).invert(),vc.copy(e.ray).applyMatrix4(Wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new N,h=new N,u=new N,d=new N,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){let f=Math.max(0,a.start),A=Math.min(_.count,a.start+a.count);for(let v=f,P=A-1;v<P;v+=m){let O=_.getX(v),L=_.getX(v+1);if(l.fromBufferAttribute(p,O),h.fromBufferAttribute(p,L),vc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let Z=e.ray.origin.distanceTo(d);Z<e.near||Z>e.far||t.push({distance:Z,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),A=Math.min(p.count,a.start+a.count);for(let v=f,P=A-1;v<P;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),vc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Xd=new N,qd=new N,Do=class extends la{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Xd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xd.distanceTo(qd);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wr=class extends An{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Uo=class n extends Cn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new N,d=new N,m=[],_=[],x=[],p=[];for(let f=0;f<=i;f++){let A=[],v=f/i,P=0;f===0&&a===0?P=.5/t:f===i&&c===Math.PI&&(P=-.5/t);for(let O=0;O<=t;O++){let L=O/t;u.x=-e*Math.cos(s+L*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+L*r)*Math.sin(a+v*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(L+P,1-v),A.push(l++)}h.push(A)}for(let f=0;f<i;f++)for(let A=0;A<t;A++){let v=h[f][A+1],P=h[f][A],O=h[f+1][A],L=h[f+1][A+1];(f!==0||a>0)&&m.push(v,P,L),(f!==i-1||c<Math.PI)&&m.push(P,O,L)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oo=class extends Cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new N,r=new N;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,m=u.count;for(let _=d,x=d+m;_<x;_+=3)for(let p=0;p<3;p++){let f=o.getX(_+p),A=o.getX(_+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,A),Yd(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Yd(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Yd(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var ca=class extends ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new st(16777215),this.specular=new st(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ts=class extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function co(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function $d(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function Mf(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Er=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends Er{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qu:r=e,o=2*t-i;break;case Yu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case qu:a=e,c=2*i-t;break;case Yu:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-t)/(s-t),x=_*_,p=x*_,f=-d*p+2*d*x-d*_,A=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*_+1,v=(-1-m)*p+(1.5+m)*x+.5*_,P=m*p-m*x;for(let O=0;O!==o;++O)r[O]=f*a[h+O]+A*a[l+O]+v*a[c+O]+P*a[u+O];return r}},Yc=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},$c=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&gv(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$l,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,m=u+i;for(let _=0;_!==i;++_){let x=t[u+_];if(x!==t[d+_]||x!==t[m+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=po;var ns=class extends Wn{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=fo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Wn{};Fo.prototype.ValueTypeName="color";var Tr=class extends Wn{};Tr.prototype.ValueTypeName="number";var jc=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)si.slerpFlat(r,0,a,l-o,a,l,c);return r}},Di=class extends Wn{InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.DefaultInterpolation=po;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Wn{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=fo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Wn{};Ui.prototype.ValueTypeName="vector";var ha=class{constructor(e,t=-1,i,s=Km){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(xv(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(Wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=yv(c);c=$d(c,1,h),l=$d(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Tr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,m,_,x){if(m.length!==0){let p=[],f=[];Mf(m,p,f,_),p.length!==0&&x.push(new u(d,p,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)m[d[_].morphTargets[x]]=-1;for(let x in m){let p=[],f=[];for(let A=0;A!==d[_].morphTargets.length;++A){let v=d[_];p.push(v.time),f.push(v.morphTarget===x?1:0)}s.push(new Tr(".morphTargetInfluence["+x+"]",p,f))}c=m.length*a}else{let m=".bones["+t[u].name+"]";i(Ui,m+".position",d,"pos",s),i(Di,m+".quaternion",d,"rot",s),i(Ui,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _v(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return Fo;case"quaternion":return Di;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function xv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_v(n.type);if(n.times===void 0){let t=[],i=[];Mf(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Bo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ua=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],_=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},vv=new ua,ai=class{constructor(e){this.manager=e!==void 0?e:vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},Zc=class extends Error{constructor(e,t){super(e),this.response=t}},da=class extends ai{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ai[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0,x=0,p=new ReadableStream({start(f){A();function A(){u.read().then(({done:v,value:P})=>{if(v)f.close();else{x+=P.byteLength;let O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let L=0,D=h.length;L<D;L++){let Z=h[L];Z.onProgress&&Z.onProgress(O)}f.enqueue(P),A()}})}}});return new Response(p)}else throw new Zc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(_=>m.decode(_))}}}).then(l=>{Bo.add(e,l);let h=Ai[e];delete Ai[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=Ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Jc=class extends ai{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ta("img");function c(){h(),Bo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ko=class extends ai{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Io,o=new da(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:pn,a.wrapT=l.wrapT!==void 0?l.wrapT:pn,a.magFilter=l.magFilter!==void 0?l.magFilter:xn,a.minFilter=l.minFilter!==void 0?l.minFilter:xn,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?a.colorSpace=l.colorSpace:l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Qi),l.mipmapCount===1&&(a.minFilter=xn),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},i,s),a}},zo=class extends ai{constructor(e){super(e)}load(e,t,i,s){let r=new An,a=new Jc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},As=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ho=class extends As{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bc=new rt,jd=new N,Zd=new N,fa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(jd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kc=class extends fa{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=_r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Vo=class extends As{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Jd=new rt,jr=new N,Mc=new N,Qc=class extends fa{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(jr),Mc.copy(i.position),Mc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mc),i.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),Jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd)}},Go=class extends As{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},eh=class extends fa{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new eh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wo=class extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xo=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},qo=class extends Cn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ch="\\[\\]\\.:\\/",bv=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",Mv="[^"+ch.replace("\\.","")+"]",Sv=/((?:WC+[\/:])*)/.source.replace("WC",hh),wv=/(WCOD+)?/.source.replace("WCOD",Mv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),Av=new RegExp("^"+Sv+wv+Ev+Tv+"$"),Cv=["material","materials","bones","map"],th=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bv,"")}static parseTrackName(e){let t=Av.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Cv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=th;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zb=new Float32Array(1);var Cs=class extends Po{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Yo=class{constructor(e,t,i=0,s=1/0){this.ray=new xr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return nh(e,this,i,t),i.sort(Kd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)nh(e[s],this,i,t);return i.sort(Kd),i}};function Kd(n,e){return n.distance-e.distance}function nh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)nh(s[r],e,t,!0)}}var Qd=new N,ho=new N,$o=class{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qd.subVectors(e,this.start),ho.subVectors(this.end,this.start);let i=ho.dot(ho),r=ho.dot(Qd)/i;return t&&(r=fn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);var pa=class extends ko{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case d:case x:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case _:case p:case f:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function i(B,ee,K,$,re){let ie,fe,k=K.pixel_size>>3,G=K.width*K.height*k;if(ee&&(fe=re.subarray($,$+=K.colormap_length*(K.colormap_size>>3))),B){ie=new Uint8Array(G);let ne,se,ae,Te=0,Fe=new Uint8Array(k);for(;Te<G;)if(ne=re[$++],se=(ne&127)+1,ne&128){for(ae=0;ae<k;++ae)Fe[ae]=re[$++];for(ae=0;ae<se;++ae)ie.set(Fe,Te+ae*k);Te+=k*se}else{for(se*=k,ae=0;ae<se;++ae)ie[Te+ae]=re[$++];Te+=se}}else ie=re.subarray($,$+=ee?K.width*K.height:G);return{pixel_data:ie,palettes:fe}}function s(B,ee,K,$,re,ie,fe,k,G){let ne=G,se,ae=0,Te,Fe,Be=R.width;for(Fe=ee;Fe!==$;Fe+=K)for(Te=re;Te!==fe;Te+=ie,ae++)se=k[ae],B[(Te+Be*Fe)*4+3]=255,B[(Te+Be*Fe)*4+2]=ne[se*3+0],B[(Te+Be*Fe)*4+1]=ne[se*3+1],B[(Te+Be*Fe)*4+0]=ne[se*3+2];return B}function r(B,ee,K,$,re,ie,fe,k){let G,ne=0,se,ae,Te=R.width;for(ae=ee;ae!==$;ae+=K)for(se=re;se!==fe;se+=ie,ne+=2)G=k[ne+0]+(k[ne+1]<<8),B[(se+Te*ae)*4+0]=(G&31744)>>7,B[(se+Te*ae)*4+1]=(G&992)>>2,B[(se+Te*ae)*4+2]=(G&31)<<3,B[(se+Te*ae)*4+3]=G&32768?0:255;return B}function a(B,ee,K,$,re,ie,fe,k){let G=0,ne,se,ae=R.width;for(se=ee;se!==$;se+=K)for(ne=re;ne!==fe;ne+=ie,G+=3)B[(ne+ae*se)*4+3]=255,B[(ne+ae*se)*4+2]=k[G+0],B[(ne+ae*se)*4+1]=k[G+1],B[(ne+ae*se)*4+0]=k[G+2];return B}function o(B,ee,K,$,re,ie,fe,k){let G=0,ne,se,ae=R.width;for(se=ee;se!==$;se+=K)for(ne=re;ne!==fe;ne+=ie,G+=4)B[(ne+ae*se)*4+2]=k[G+0],B[(ne+ae*se)*4+1]=k[G+1],B[(ne+ae*se)*4+0]=k[G+2],B[(ne+ae*se)*4+3]=k[G+3];return B}function c(B,ee,K,$,re,ie,fe,k){let G,ne=0,se,ae,Te=R.width;for(ae=ee;ae!==$;ae+=K)for(se=re;se!==fe;se+=ie,ne++)G=k[ne],B[(se+Te*ae)*4+0]=G,B[(se+Te*ae)*4+1]=G,B[(se+Te*ae)*4+2]=G,B[(se+Te*ae)*4+3]=255;return B}function l(B,ee,K,$,re,ie,fe,k){let G=0,ne,se,ae=R.width;for(se=ee;se!==$;se+=K)for(ne=re;ne!==fe;ne+=ie,G+=2)B[(ne+ae*se)*4+0]=k[G+0],B[(ne+ae*se)*4+1]=k[G+0],B[(ne+ae*se)*4+2]=k[G+0],B[(ne+ae*se)*4+3]=k[G+1];return B}function h(B,ee,K,$,re){let ie,fe,k,G,ne,se;switch((R.flags&A)>>v){default:case L:ie=0,k=1,ne=ee,fe=0,G=1,se=K;break;case P:ie=0,k=1,ne=ee,fe=K-1,G=-1,se=-1;break;case D:ie=ee-1,k=-1,ne=-1,fe=0,G=1,se=K;break;case O:ie=ee-1,k=-1,ne=-1,fe=K-1,G=-1,se=-1;break}if(he)switch(R.pixel_size){case 8:c(B,fe,G,se,ie,k,ne,$);break;case 16:l(B,fe,G,se,ie,k,ne,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(R.pixel_size){case 8:s(B,fe,G,se,ie,k,ne,$,re);break;case 16:r(B,fe,G,se,ie,k,ne,$);break;case 24:a(B,fe,G,se,ie,k,ne,$);break;case 32:o(B,fe,G,se,ie,k,ne,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}let u=0,d=1,m=2,_=3,x=9,p=10,f=11,A=48,v=4,P=0,O=1,L=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let Z=0,E=new Uint8Array(e),R={id_length:E[Z++],colormap_type:E[Z++],image_type:E[Z++],colormap_index:E[Z++]|E[Z++]<<8,colormap_length:E[Z++]|E[Z++]<<8,colormap_size:E[Z++],origin:[E[Z++]|E[Z++]<<8,E[Z++]|E[Z++]<<8],width:E[Z++]|E[Z++]<<8,height:E[Z++]|E[Z++]<<8,pixel_size:E[Z++],flags:E[Z++]};if(t(R),R.id_length+Z>e.length)throw new Error("THREE.TGALoader: No data.");Z+=R.id_length;let J=!1,oe=!1,he=!1;switch(R.image_type){case x:J=!0,oe=!0;break;case d:oe=!0;break;case p:J=!0;break;case m:break;case f:J=!0,he=!0;break;case _:he=!0;break}let F=new Uint8Array(R.width*R.height*4),Y=i(J,oe,R,Z,E);return h(F,R.width,R.height,Y.pixel_data,Y.palettes),{data:F,width:R.width,height:R.height,flipY:!0,generateMipmaps:!0,minFilter:Qi}}};var el=class extends ai{load(e,t,i,s){let r=this,a=r.path===""?Xo.extractUrlBase(e):r.path,o=new da(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(c){try{t(r.parse(c,a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e,t){function i(y,g){let M=[],b=y.childNodes;for(let w=0,q=b.length;w<q;w++){let te=b[w];te.nodeName===g&&M.push(te)}return M}function s(y){if(y.length===0)return[];let g=y.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=g[b];return M}function r(y){if(y.length===0)return[];let g=y.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=parseFloat(g[b]);return M}function a(y){if(y.length===0)return[];let g=y.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=parseInt(g[b]);return M}function o(y){return y.substring(1)}function c(){return"three_default_"+am++}function l(y){return Object.keys(y).length===0}function h(y){return{unit:u(i(y,"unit")[0]),upAxis:d(i(y,"up_axis")[0])}}function u(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function d(y){return y!==void 0?y.textContent:"Y_UP"}function m(y,g,M,b){let w=i(y,g)[0];if(w!==void 0){let q=i(w,M);for(let te=0;te<q.length;te++)b(q[te])}}function _(y,g){for(let M in y){let b=y[M];b.build=g(y[M])}}function x(y,g){return y.build!==void 0||(y.build=g(y)),y.build}function p(y){let g={sources:{},samplers:{},channels:{}},M=!1;for(let b=0,w=y.childNodes.length;b<w;b++){let q=y.childNodes[b];if(q.nodeType!==1)continue;let te;switch(q.nodeName){case"source":te=q.getAttribute("id"),g.sources[te]=U(q);break;case"sampler":te=q.getAttribute("id"),g.samplers[te]=f(q);break;case"channel":te=q.getAttribute("target"),g.channels[te]=A(q);break;case"animation":p(q),M=!0;break;default:console.log(q)}}M===!1&&(Xe.animations[y.getAttribute("id")||ss.generateUUID()]=g)}function f(y){let g={inputs:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=o(w.getAttribute("source")),te=w.getAttribute("semantic");g.inputs[te]=q;break}}return g}function A(y){let g={},b=y.getAttribute("target").split("/"),w=b.shift(),q=b.shift(),te=q.indexOf("(")!==-1,Ae=q.indexOf(".")!==-1;if(Ae)b=q.split("."),q=b.shift(),g.member=b.shift();else if(te){let xe=q.split("(");q=xe.shift();for(let Se=0;Se<xe.length;Se++)xe[Se]=parseInt(xe[Se].replace(/\)/,""));g.indices=xe}return g.id=w,g.sid=q,g.arraySyntax=te,g.memberSyntax=Ae,g.sampler=o(y.getAttribute("source")),g}function v(y){let g=[],M=y.channels,b=y.samplers,w=y.sources;for(let q in M)if(M.hasOwnProperty(q)){let te=M[q],Ae=b[te.sampler],xe=Ae.inputs.INPUT,Se=Ae.inputs.OUTPUT,Ne=w[xe],le=w[Se],Ie=O(te,Ne,le);R(Ie,g)}return g}function P(y){return x(Xe.animations[y],v)}function O(y,g,M){let b=Xe.nodes[y.id],w=Je(b.id),q=b.transforms[y.sid],te=b.matrix.clone().transpose(),Ae,xe,Se,Ne,le,Ie,Pe={};switch(q){case"matrix":for(Se=0,Ne=g.array.length;Se<Ne;Se++)if(Ae=g.array[Se],xe=Se*M.stride,Pe[Ae]===void 0&&(Pe[Ae]={}),y.arraySyntax===!0){let Bt=M.array[xe],wt=y.indices[0]+4*y.indices[1];Pe[Ae][wt]=Bt}else for(le=0,Ie=M.stride;le<Ie;le++)Pe[Ae][le]=M.array[xe+le];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',q);break}let ze=L(Pe,te);return{name:w.uuid,keyframes:ze}}function L(y,g){let M=[];for(let w in y)M.push({time:parseFloat(w),value:y[w]});M.sort(b);for(let w=0;w<16;w++)J(M,w,g.elements[w]);return M;function b(w,q){return w.time-q.time}}let D=new N,Z=new N,E=new si;function R(y,g){let M=y.keyframes,b=y.name,w=[],q=[],te=[],Ae=[];for(let xe=0,Se=M.length;xe<Se;xe++){let Ne=M[xe],le=Ne.time,Ie=Ne.value;Ee.fromArray(Ie).transpose(),Ee.decompose(D,E,Z),w.push(le),q.push(D.x,D.y,D.z),te.push(E.x,E.y,E.z,E.w),Ae.push(Z.x,Z.y,Z.z)}return q.length>0&&g.push(new Ui(b+".position",w,q)),te.length>0&&g.push(new Di(b+".quaternion",w,te)),Ae.length>0&&g.push(new Ui(b+".scale",w,Ae)),g}function J(y,g,M){let b,w=!0,q,te;for(q=0,te=y.length;q<te;q++)b=y[q],b.value[g]===void 0?b.value[g]=null:w=!1;if(w===!0)for(q=0,te=y.length;q<te;q++)b=y[q],b.value[g]=M;else oe(y,g)}function oe(y,g){let M,b;for(let w=0,q=y.length;w<q;w++){let te=y[w];if(te.value[g]===null){if(M=he(y,w,g),b=F(y,w,g),M===null){te.value[g]=b.value[g];continue}if(b===null){te.value[g]=M.value[g];continue}Y(te,M,b,g)}}}function he(y,g,M){for(;g>=0;){let b=y[g];if(b.value[M]!==null)return b;g--}return null}function F(y,g,M){for(;g<y.length;){let b=y[g];if(b.value[M]!==null)return b;g++}return null}function Y(y,g,M,b){if(M.time-g.time===0){y.value[b]=g.value[b];return}y.value[b]=(y.time-g.time)*(M.value[b]-g.value[b])/(M.time-g.time)+g.value[b]}function B(y){let g={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_animation":g.animations.push(o(w.getAttribute("url")));break}}Xe.clips[y.getAttribute("id")]=g}function ee(y){let g=[],M=y.name,b=y.end-y.start||-1,w=y.animations;for(let q=0,te=w.length;q<te;q++){let Ae=P(w[q]);for(let xe=0,Se=Ae.length;xe<Se;xe++)g.push(Ae[xe])}return new ha(M,b,g)}function K(y){return x(Xe.clips[y],ee)}function $(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"skin":g.id=o(w.getAttribute("source")),g.skin=re(w);break;case"morph":g.id=o(w.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Xe.controllers[y.getAttribute("id")]=g}function re(y){let g={sources:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"bind_shape_matrix":g.bindShapeMatrix=r(w.textContent);break;case"source":let q=w.getAttribute("id");g.sources[q]=U(w);break;case"joints":g.joints=ie(w);break;case"vertex_weights":g.vertexWeights=fe(w);break}}return g}function ie(y){let g={inputs:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=w.getAttribute("semantic"),te=o(w.getAttribute("source"));g.inputs[q]=te;break}}return g}function fe(y){let g={inputs:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=w.getAttribute("semantic"),te=o(w.getAttribute("source")),Ae=parseInt(w.getAttribute("offset"));g.inputs[q]={id:te,offset:Ae};break;case"vcount":g.vcount=a(w.textContent);break;case"v":g.v=a(w.textContent);break}}return g}function k(y){let g={id:y.id},M=Xe.geometries[g.id];return y.skin!==void 0&&(g.skin=G(y.skin),M.sources.skinIndices=g.skin.indices,M.sources.skinWeights=g.skin.weights),g}function G(y){let M={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=y.sources,w=y.vertexWeights,q=w.vcount,te=w.v,Ae=w.inputs.JOINT.offset,xe=w.inputs.WEIGHT.offset,Se=y.sources[y.joints.inputs.JOINT],Ne=y.sources[y.joints.inputs.INV_BIND_MATRIX],le=b[w.inputs.WEIGHT.id].array,Ie=0,Pe,ze,Oe;for(Pe=0,Oe=q.length;Pe<Oe;Pe++){let wt=q[Pe],gt=[];for(ze=0;ze<wt;ze++){let yt=te[Ie+Ae],bi=te[Ie+xe],Tn=le[bi];gt.push({index:yt,weight:Tn}),Ie+=2}for(gt.sort(Bt),ze=0;ze<4;ze++){let yt=gt[ze];yt!==void 0?(M.indices.array.push(yt.index),M.weights.array.push(yt.weight)):(M.indices.array.push(0),M.weights.array.push(0))}}for(y.bindShapeMatrix?M.bindMatrix=new rt().fromArray(y.bindShapeMatrix).transpose():M.bindMatrix=new rt().identity(),Pe=0,Oe=Se.array.length;Pe<Oe;Pe++){let wt=Se.array[Pe],gt=new rt().fromArray(Ne.array,Pe*Ne.stride).transpose();M.joints.push({name:wt,boneInverse:gt})}return M;function Bt(wt,gt){return gt.weight-wt.weight}}function ne(y){return x(Xe.controllers[y],k)}function se(y){let g={init_from:i(y,"init_from")[0].textContent};Xe.images[y.getAttribute("id")]=g}function ae(y){return y.build!==void 0?y.build:y.init_from}function Te(y){let g=Xe.images[y];return g!==void 0?x(g,ae):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Fe(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"profile_COMMON":g.profile=Be(w);break}}Xe.effects[y.getAttribute("id")]=g}function Be(y){let g={surfaces:{},samplers:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"newparam":ft(w,g);break;case"technique":g.technique=He(w);break;case"extra":g.extra=S(w);break}}return g}function ft(y,g){let M=y.getAttribute("sid");for(let b=0,w=y.childNodes.length;b<w;b++){let q=y.childNodes[b];if(q.nodeType===1)switch(q.nodeName){case"surface":g.surfaces[M]=H(q);break;case"sampler2D":g.samplers[M]=Qt(q);break}}}function H(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"init_from":g.init_from=w.textContent;break}}return g}function Qt(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"source":g.source=w.textContent;break}}return g}function He(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"constant":case"lambert":case"blinn":case"phong":g.type=w.nodeName,g.parameters=Ke(w);break;case"extra":g.extra=S(w);break}}return g}function Ke(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":g[w.nodeName]=Le(w);break;case"transparent":g[w.nodeName]={opaque:w.hasAttribute("opaque")?w.getAttribute("opaque"):"A_ONE",data:Le(w)};break}}return g}function Le(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":g[w.nodeName]=r(w.textContent);break;case"float":g[w.nodeName]=parseFloat(w.textContent);break;case"texture":g[w.nodeName]={id:w.getAttribute("texture"),extra:Rt(w)};break}}return g}function Rt(y){let g={technique:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"extra":ot(w,g);break}}return g}function ot(y,g){for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":C(w,g);break}}}function C(y,g){for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":g.technique[w.nodeName]=parseFloat(w.textContent);break;case"wrapU":case"wrapV":w.textContent.toUpperCase()==="TRUE"?g.technique[w.nodeName]=1:w.textContent.toUpperCase()==="FALSE"?g.technique[w.nodeName]=0:g.technique[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=pe(w);break}}}function S(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":g.technique=W(w);break}}return g}function W(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"double_sided":g[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=pe(w);break}}return g}function pe(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"texture":g[w.nodeName]={id:w.getAttribute("texture"),texcoord:w.getAttribute("texcoord"),extra:Rt(w)};break}}return g}function ue(y){return y}function me(y){return x(Xe.effects[y],ue)}function De(y){let g={name:y.getAttribute("name")};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_effect":g.url=o(w.getAttribute("url"));break}}Xe.materials[y.getAttribute("id")]=g}function Me(y){let g,M=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(M=M.toLowerCase(),M){case"tga":g=Hl;break;default:g=Hr}return g}function Ce(y){let g=me(y.url),M=g.profile.technique,b;switch(M.type){case"phong":case"blinn":b=new ca;break;case"lambert":b=new Ts;break;default:b=new Jt;break}b.name=y.name||"";function w(xe,Se=null){let Ne=g.profile.samplers[xe.id],le=null;if(Ne!==void 0){let Ie=g.profile.surfaces[Ne.source];le=Te(Ie.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),le=Te(xe.id);if(le!==null){let Ie=Me(le);if(Ie!==void 0){let Pe=Ie.load(le),ze=xe.extra;if(ze!==void 0&&ze.technique!==void 0&&l(ze.technique)===!1){let Oe=ze.technique;Pe.wrapS=Oe.wrapU?Ki:pn,Pe.wrapT=Oe.wrapV?Ki:pn,Pe.offset.set(Oe.offsetU||0,Oe.offsetV||0),Pe.repeat.set(Oe.repeatU||1,Oe.repeatV||1)}else Pe.wrapS=Ki,Pe.wrapT=Ki;return Se!==null&&(Pe.colorSpace=Se),Pe}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",le),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let q=M.parameters;for(let xe in q){let Se=q[xe];switch(xe){case"diffuse":Se.color&&b.color.fromArray(Se.color),Se.texture&&(b.map=w(Se.texture,kt));break;case"specular":Se.color&&b.specular&&b.specular.fromArray(Se.color),Se.texture&&(b.specularMap=w(Se.texture));break;case"bump":Se.texture&&(b.normalMap=w(Se.texture));break;case"ambient":Se.texture&&(b.lightMap=w(Se.texture,kt));break;case"shininess":Se.float&&b.shininess&&(b.shininess=Se.float);break;case"emission":Se.color&&b.emissive&&b.emissive.fromArray(Se.color),Se.texture&&(b.emissiveMap=w(Se.texture,kt));break}}b.color.convertSRGBToLinear(),b.specular&&b.specular.convertSRGBToLinear(),b.emissive&&b.emissive.convertSRGBToLinear();let te=q.transparent,Ae=q.transparency;if(Ae===void 0&&te&&(Ae={float:1}),te===void 0&&Ae&&(te={opaque:"A_ONE",data:{color:[1,1,1,1]}}),te&&Ae)if(te.data.texture)b.transparent=!0;else{let xe=te.data.color;switch(te.opaque){case"A_ONE":b.opacity=xe[3]*Ae.float;break;case"RGB_ZERO":b.opacity=1-xe[0]*Ae.float;break;case"A_ZERO":b.opacity=1-xe[3]*Ae.float;break;case"RGB_ONE":b.opacity=xe[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',te.opaque)}b.opacity<1&&(b.transparent=!0)}if(M.extra!==void 0&&M.extra.technique!==void 0){let xe=M.extra.technique;for(let Se in xe){let Ne=xe[Se];switch(Se){case"double_sided":b.side=Ne===1?bn:Dn;break;case"bump":b.normalMap=w(Ne.texture),b.normalScale=new Ze(1,1);break}}}return b}function Ge(y){return x(Xe.materials[y],Ce)}function lt(y){let g={name:y.getAttribute("name")};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"optics":g.optics=de(w);break}}Xe.cameras[y.getAttribute("id")]=g}function de(y){for(let g=0;g<y.childNodes.length;g++){let M=y.childNodes[g];switch(M.nodeName){case"technique_common":return bt(M)}}return{}}function bt(y){let g={};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];switch(b.nodeName){case"perspective":case"orthographic":g.technique=b.nodeName,g.parameters=ut(b);break}}return g}function ut(y){let g={};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":g[b.nodeName]=parseFloat(b.textContent);break}}return g}function je(y){let g;switch(y.optics.technique){case"perspective":g=new Wt(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let M=y.optics.parameters.ymag,b=y.optics.parameters.xmag,w=y.optics.parameters.aspect_ratio;b=b===void 0?M*w:b,M=M===void 0?b/w:M,b*=.5,M*=.5,g=new br(-b,b,M,-M,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:g=new Wt;break}return g.name=y.name||"",g}function ke(y){let g=Xe.cameras[y];return g!==void 0?x(g,je):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Re(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique_common":g=nt(w);break}}Xe.lights[y.getAttribute("id")]=g}function nt(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"directional":case"point":case"spot":case"ambient":g.technique=w.nodeName,g.parameters=xt(w)}}return g}function xt(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":let q=r(w.textContent);g.color=new st().fromArray(q).convertSRGBToLinear();break;case"falloff_angle":g.falloffAngle=parseFloat(w.textContent);break;case"quadratic_attenuation":let te=parseFloat(w.textContent);g.distance=te?Math.sqrt(1/te):0;break}}return g}function It(y){let g;switch(y.technique){case"directional":g=new Ar;break;case"point":g=new Go;break;case"spot":g=new Vo;break;case"ambient":g=new Wo;break}return y.parameters.color&&g.color.copy(y.parameters.color),y.parameters.distance&&(g.distance=y.parameters.distance),g}function ct(y){let g=Xe.lights[y];return g!==void 0?x(g,It):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function _e(y){let g={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},M=i(y,"mesh")[0];if(M!==void 0){for(let b=0;b<M.childNodes.length;b++){let w=M.childNodes[b];if(w.nodeType!==1)continue;let q=w.getAttribute("id");switch(w.nodeName){case"source":g.sources[q]=U(w);break;case"vertices":g.vertices=ve(w);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",w.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":g.primitives.push(be(w));break;default:console.log(w)}}Xe.geometries[y.getAttribute("id")]=g}}function U(y){let g={array:[],stride:3};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"float_array":g.array=r(b.textContent);break;case"Name_array":g.array=s(b.textContent);break;case"technique_common":let w=i(b,"accessor")[0];w!==void 0&&(g.stride=parseInt(w.getAttribute("stride")));break}}return g}function ve(y){let g={};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];b.nodeType===1&&(g[b.getAttribute("semantic")]=o(b.getAttribute("source")))}return g}function be(y){let g={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=o(w.getAttribute("source")),te=w.getAttribute("semantic"),Ae=parseInt(w.getAttribute("offset")),xe=parseInt(w.getAttribute("set")),Se=xe>0?te+xe:te;g.inputs[Se]={id:q,offset:Ae},g.stride=Math.max(g.stride,Ae+1),te==="TEXCOORD"&&(g.hasUV=!0);break;case"vcount":g.vcount=a(w.textContent);break;case"p":g.p=a(w.textContent);break}}return g}function qe(y){let g={};for(let M=0;M<y.length;M++){let b=y[M];g[b.type]===void 0&&(g[b.type]=[]),g[b.type].push(b)}return g}function Ve(y){let g=0;for(let M=0,b=y.length;M<b;M++)y[M].hasUV===!0&&g++;g>0&&g<y.length&&(y.uvsNeedsFix=!0)}function St(y){let g={},M=y.sources,b=y.vertices,w=y.primitives;if(w.length===0)return{};let q=qe(w);for(let te in q){let Ae=q[te];Ve(Ae),g[te]=Et(Ae,M,b)}return g}function Et(y,g,M){let b={},w={array:[],stride:0},q={array:[],stride:0},te={array:[],stride:0},Ae={array:[],stride:0},xe={array:[],stride:0},Se={array:[],stride:4},Ne={array:[],stride:4},le=new Cn,Ie=[],Pe=0;for(let ze=0;ze<y.length;ze++){let Oe=y[ze],Bt=Oe.inputs,wt=0;switch(Oe.type){case"lines":case"linestrips":wt=Oe.count*2;break;case"triangles":wt=Oe.count*3;break;case"polylist":for(let gt=0;gt<Oe.count;gt++){let yt=Oe.vcount[gt];switch(yt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(yt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Oe.type)}le.addGroup(Pe,wt,ze),Pe+=wt,Oe.material&&Ie.push(Oe.material);for(let gt in Bt){let yt=Bt[gt];switch(gt){case"VERTEX":for(let bi in M){let Tn=M[bi];switch(bi){case"POSITION":let Gs=w.array.length;if(Mt(Oe,g[Tn],yt.offset,w.array),w.stride=g[Tn].stride,g.skinWeights&&g.skinIndices&&(Mt(Oe,g.skinIndices,yt.offset,Se.array),Mt(Oe,g.skinWeights,yt.offset,Ne.array)),Oe.hasUV===!1&&y.uvsNeedsFix===!0){let om=(w.array.length-Gs)/w.stride;for(let uu=0;uu<om;uu++)te.array.push(0,0)}break;case"NORMAL":Mt(Oe,g[Tn],yt.offset,q.array),q.stride=g[Tn].stride;break;case"COLOR":Mt(Oe,g[Tn],yt.offset,xe.array),xe.stride=g[Tn].stride;break;case"TEXCOORD":Mt(Oe,g[Tn],yt.offset,te.array),te.stride=g[Tn].stride;break;case"TEXCOORD1":Mt(Oe,g[Tn],yt.offset,Ae.array),te.stride=g[Tn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',bi)}}break;case"NORMAL":Mt(Oe,g[yt.id],yt.offset,q.array),q.stride=g[yt.id].stride;break;case"COLOR":Mt(Oe,g[yt.id],yt.offset,xe.array,!0),xe.stride=g[yt.id].stride;break;case"TEXCOORD":Mt(Oe,g[yt.id],yt.offset,te.array),te.stride=g[yt.id].stride;break;case"TEXCOORD1":Mt(Oe,g[yt.id],yt.offset,Ae.array),Ae.stride=g[yt.id].stride;break}}}return w.array.length>0&&le.setAttribute("position",new Lt(w.array,w.stride)),q.array.length>0&&le.setAttribute("normal",new Lt(q.array,q.stride)),xe.array.length>0&&le.setAttribute("color",new Lt(xe.array,xe.stride)),te.array.length>0&&le.setAttribute("uv",new Lt(te.array,te.stride)),Ae.array.length>0&&le.setAttribute("uv1",new Lt(Ae.array,Ae.stride)),Se.array.length>0&&le.setAttribute("skinIndex",new Lt(Se.array,Se.stride)),Ne.array.length>0&&le.setAttribute("skinWeight",new Lt(Ne.array,Ne.stride)),b.data=le,b.type=y[0].type,b.materialKeys=Ie,b}function Mt(y,g,M,b,w=!1){let q=y.p,te=y.stride,Ae=y.vcount;function xe(le){let Ie=q[le+M]*Ne,Pe=Ie+Ne;for(;Ie<Pe;Ie++)b.push(Se[Ie]);if(w){let ze=b.length-Ne-1;Na.setRGB(b[ze+0],b[ze+1],b[ze+2]).convertSRGBToLinear(),b[ze+0]=Na.r,b[ze+1]=Na.g,b[ze+2]=Na.b}}let Se=g.array,Ne=g.stride;if(y.vcount!==void 0){let le=0;for(let Ie=0,Pe=Ae.length;Ie<Pe;Ie++){let ze=Ae[Ie];if(ze===4){let Oe=le+te*0,Bt=le+te*1,wt=le+te*2,gt=le+te*3;xe(Oe),xe(Bt),xe(gt),xe(Bt),xe(wt),xe(gt)}else if(ze===3){let Oe=le+te*0,Bt=le+te*1,wt=le+te*2;xe(Oe),xe(Bt),xe(wt)}else if(ze>4)for(let Oe=1,Bt=ze-2;Oe<=Bt;Oe++){let wt=le+te*0,gt=le+te*Oe,yt=le+te*(Oe+1);xe(wt),xe(gt),xe(yt)}le+=te*ze}}else for(let le=0,Ie=q.length;le<Ie;le+=te)xe(le)}function $t(y){return x(Xe.geometries[y],St)}function Tt(y){let g={name:y.getAttribute("name")||"",joints:{},links:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Pa(b,g);break}}Xe.kinematicsModels[y.getAttribute("id")]=g}function en(y){return y.build!==void 0?y.build:y}function Fn(y){return x(Xe.kinematicsModels[y],en)}function Pa(y,g){for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"joint":g.joints[b.getAttribute("sid")]=Fl(b);break;case"link":g.links.push(Ur(b));break}}}function Fl(y){let g;for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":g=Hs(b);break}}return g}function Hs(y){let g={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new N,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"axis":let w=r(b.textContent);g.axis.fromArray(w);break;case"limits":let q=b.getElementsByTagName("max")[0],te=b.getElementsByTagName("min")[0];g.limits.max=parseFloat(q.textContent),g.limits.min=parseFloat(te.textContent);break}}return g.limits.min>=g.limits.max&&(g.static=!0),g.middlePosition=(g.limits.min+g.limits.max)/2,g}function Ur(y){let g={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":g.attachments.push(Vs(b));break;case"matrix":case"translate":case"rotate":g.transforms.push(Or(b));break}}return g}function Vs(y){let g={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"link":g.links.push(Ur(b));break;case"matrix":case"translate":case"rotate":g.transforms.push(Or(b));break}}return g}function Or(y){let g={type:y.nodeName},M=r(y.textContent);switch(g.type){case"matrix":g.obj=new rt,g.obj.fromArray(M).transpose();break;case"translate":g.obj=new N,g.obj.fromArray(M);break;case"rotate":g.obj=new N,g.obj.fromArray(M),g.angle=ss.degToRad(M[3]);break}return g}function La(y){let g={name:y.getAttribute("name")||"",rigidBodies:{}};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"rigid_body":g.rigidBodies[b.getAttribute("name")]={},Bl(b,g.rigidBodies[b.getAttribute("name")]);break}}Xe.physicsModels[y.getAttribute("id")]=g}function Bl(y,g){for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"technique_common":kl(b,g);break}}}function kl(y,g){for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"inertia":g.inertia=r(b.textContent);break;case"mass":g.mass=r(b.textContent)[0];break}}}function zl(y){let g={bindJointAxis:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"bind_joint_axis":g.bindJointAxis.push(T(b));break}}Xe.kinematicsScenes[o(y.getAttribute("url"))]=g}function T(y){let g={target:y.getAttribute("target").split("/").pop()};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"axis":let w=b.getElementsByTagName("param")[0];g.axis=w.textContent;let q=g.axis.split("inst_").pop().split("axis")[0];g.jointIndex=q.substring(0,q.length-1);break}}return g}function z(y){return y.build!==void 0?y.build:y}function X(y){return x(Xe.kinematicsScenes[y],z)}function j(){let y=Object.keys(Xe.kinematicsModels)[0],g=Object.keys(Xe.kinematicsScenes)[0],M=Object.keys(Xe.visualScenes)[0];if(y===void 0||g===void 0)return;let b=Fn(y),w=X(g),q=Br(M),te=w.bindJointAxis,Ae={};for(let Ne=0,le=te.length;Ne<le;Ne++){let Ie=te[Ne],Pe=Ft.querySelector('[sid="'+Ie.target+'"]');if(Pe){let ze=Pe.parentElement;xe(Ie.jointIndex,ze)}}function xe(Ne,le){let Ie=le.getAttribute("name"),Pe=b.joints[Ne];q.traverse(function(ze){ze.name===Ie&&(Ae[Ne]={object:ze,transforms:V(le),joint:Pe,position:Pe.zeroPosition})})}let Se=new rt;hu={joints:b&&b.joints,getJointValue:function(Ne){let le=Ae[Ne];if(le)return le.position;console.warn("THREE.ColladaLoader: Joint "+Ne+" doesn't exist.")},setJointValue:function(Ne,le){let Ie=Ae[Ne];if(Ie){let Pe=Ie.joint;if(le>Pe.limits.max||le<Pe.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ne+" value "+le+" outside of limits (min: "+Pe.limits.min+", max: "+Pe.limits.max+").");else if(Pe.static)console.warn("THREE.ColladaLoader: Joint "+Ne+" is static.");else{let ze=Ie.object,Oe=Pe.axis,Bt=Ie.transforms;Ee.identity();for(let wt=0;wt<Bt.length;wt++){let gt=Bt[wt];if(gt.sid&&gt.sid.indexOf(Ne)!==-1)switch(Pe.type){case"revolute":Ee.multiply(Se.makeRotationAxis(Oe,ss.degToRad(le)));break;case"prismatic":Ee.multiply(Se.makeTranslation(Oe.x*le,Oe.y*le,Oe.z*le));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Pe.type);break}else switch(gt.type){case"matrix":Ee.multiply(gt.obj);break;case"translate":Ee.multiply(Se.makeTranslation(gt.obj.x,gt.obj.y,gt.obj.z));break;case"scale":Ee.scale(gt.obj);break;case"rotate":Ee.multiply(Se.makeRotationAxis(gt.obj,gt.angle));break}}ze.matrix.copy(Ee),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),Ae[Ne].position=le}}else console.log("THREE.ColladaLoader: "+Ne+" does not exist.")}}}function V(y){let g=[],M=Ft.querySelector('[id="'+y.id+'"]');for(let b=0;b<M.childNodes.length;b++){let w=M.childNodes[b];if(w.nodeType!==1)continue;let q,te;switch(w.nodeName){case"matrix":q=r(w.textContent);let Ae=new rt().fromArray(q).transpose();g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:Ae});break;case"translate":case"scale":q=r(w.textContent),te=new N().fromArray(q),g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:te});break;case"rotate":q=r(w.textContent),te=new N().fromArray(q);let xe=ss.degToRad(q[3]);g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:te,angle:xe});break}}return g}function we(y){let g=y.getElementsByTagName("node");for(let M=0;M<g.length;M++){let b=g[M];b.hasAttribute("id")===!1&&b.setAttribute("id",c())}}let Ee=new rt,Ue=new N;function We(y){let g={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new rt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType!==1)continue;let w;switch(b.nodeName){case"node":g.nodes.push(b.getAttribute("id")),We(b);break;case"instance_camera":g.instanceCameras.push(o(b.getAttribute("url")));break;case"instance_controller":g.instanceControllers.push(it(b));break;case"instance_light":g.instanceLights.push(o(b.getAttribute("url")));break;case"instance_geometry":g.instanceGeometries.push(it(b));break;case"instance_node":g.instanceNodes.push(o(b.getAttribute("url")));break;case"matrix":w=r(b.textContent),g.matrix.multiply(Ee.fromArray(w).transpose()),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":w=r(b.textContent),Ue.fromArray(w),g.matrix.multiply(Ee.makeTranslation(Ue.x,Ue.y,Ue.z)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":w=r(b.textContent);let q=ss.degToRad(w[3]);g.matrix.multiply(Ee.makeRotationAxis(Ue.fromArray(w),q)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":w=r(b.textContent),g.matrix.scale(Ue.fromArray(w)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return Pt(g.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",g.id):Xe.nodes[g.id]=g,g}function it(y){let g={id:o(y.getAttribute("url")),materials:{},skeletons:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];switch(b.nodeName){case"bind_material":let w=b.getElementsByTagName("instance_material");for(let q=0;q<w.length;q++){let te=w[q],Ae=te.getAttribute("symbol"),xe=te.getAttribute("target");g.materials[Ae]=o(xe)}break;case"skeleton":g.skeletons.push(o(b.textContent));break;default:break}}return g}function Qe(y,g){let M=[],b=[],w,q,te;for(w=0;w<y.length;w++){let Se=y[w],Ne;if(Pt(Se))Ne=Je(Se),et(Ne,g,M);else if(vi(Se)){let Ie=Xe.visualScenes[Se].children;for(let Pe=0;Pe<Ie.length;Pe++){let ze=Ie[Pe];if(ze.type==="JOINT"){let Oe=Je(ze.id);et(Oe,g,M)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Se)}for(w=0;w<g.length;w++)for(q=0;q<M.length;q++)if(te=M[q],te.bone.name===g[w].name){b[w]=te,te.processed=!0;break}for(w=0;w<M.length;w++)te=M[w],te.processed===!1&&(b.push(te),te.processed=!0);let Ae=[],xe=[];for(w=0;w<b.length;w++)te=b[w],Ae.push(te.bone),xe.push(te.boneInverse);return new No(Ae,xe)}function et(y,g,M){y.traverse(function(b){if(b.isBone===!0){let w;for(let q=0;q<g.length;q++){let te=g[q];if(te.name===b.name){w=te.boneInverse;break}}w===void 0&&(w=new rt),M.push({bone:b,boneInverse:w,processed:!1})}})}function Ot(y){let g=[],M=y.matrix,b=y.nodes,w=y.type,q=y.instanceCameras,te=y.instanceControllers,Ae=y.instanceLights,xe=y.instanceGeometries,Se=y.instanceNodes;for(let le=0,Ie=b.length;le<Ie;le++)g.push(Je(b[le]));for(let le=0,Ie=q.length;le<Ie;le++){let Pe=ke(q[le]);Pe!==null&&g.push(Pe.clone())}for(let le=0,Ie=te.length;le<Ie;le++){let Pe=te[le],ze=ne(Pe.id),Oe=$t(ze.id),Bt=Bn(Oe,Pe.materials),wt=Pe.skeletons,gt=ze.skin.joints,yt=Qe(wt,gt);for(let bi=0,Tn=Bt.length;bi<Tn;bi++){let Gs=Bt[bi];Gs.isSkinnedMesh&&(Gs.bind(yt,ze.skin.bindMatrix),Gs.normalizeSkinWeights()),g.push(Gs)}}for(let le=0,Ie=Ae.length;le<Ie;le++){let Pe=ct(Ae[le]);Pe!==null&&g.push(Pe.clone())}for(let le=0,Ie=xe.length;le<Ie;le++){let Pe=xe[le],ze=$t(Pe.id),Oe=Bn(ze,Pe.materials);for(let Bt=0,wt=Oe.length;Bt<wt;Bt++)g.push(Oe[Bt])}for(let le=0,Ie=Se.length;le<Ie;le++)g.push(Je(Se[le]).clone());let Ne;if(b.length===0&&g.length===1)Ne=g[0];else{Ne=w==="JOINT"?new oa:new mn;for(let le=0;le<g.length;le++)Ne.add(g[le])}return Ne.name=w==="JOINT"?y.sid:y.name,Ne.matrix.copy(M),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne}let gn=new Jt({name:ai.DEFAULT_MATERIAL_NAME,color:16711935});function Vt(y,g){let M=[];for(let b=0,w=y.length;b<w;b++){let q=g[y[b]];q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[b]),M.push(gn)):M.push(Ge(q))}return M}function Bn(y,g){let M=[];for(let b in y){let w=y[b],q=Vt(w.materialKeys,g);if(q.length===0&&(b==="lines"||b==="linestrips"?q.push(new Sr):q.push(new ca)),b==="lines"||b==="linestrips")for(let Se=0,Ne=q.length;Se<Ne;Se++){let le=q[Se];if(le.isMeshPhongMaterial===!0||le.isMeshLambertMaterial===!0){let Ie=new Sr;Ie.color.copy(le.color),Ie.opacity=le.opacity,Ie.transparent=le.transparent,q[Se]=Ie}}let te=w.data.attributes.skinIndex!==void 0,Ae=q.length===1?q[0]:q,xe;switch(b){case"lines":xe=new Do(w.data,Ae);break;case"linestrips":xe=new la(w.data,Ae);break;case"triangles":case"polylist":te?xe=new Lo(w.data,Ae):xe=new zt(w.data,Ae);break}M.push(xe)}return M}function Pt(y){return Xe.nodes[y]!==void 0}function Je(y){return x(Xe.nodes[y],Ot)}function Fr(y){let g={name:y.getAttribute("name"),children:[]};we(y);let M=i(y,"node");for(let b=0;b<M.length;b++)g.children.push(We(M[b]));Xe.visualScenes[y.getAttribute("id")]=g}function Nt(y){let g=new mn;g.name=y.name;let M=y.children;for(let b=0;b<M.length;b++){let w=M[b];g.add(Je(w.id))}return g}function vi(y){return Xe.visualScenes[y]!==void 0}function Br(y){return x(Xe.visualScenes[y],Nt)}function fs(y){let g=i(y,"instance_visual_scene")[0];return Br(o(g.getAttribute("url")))}function kr(){let y=Xe.clips;if(l(y)===!0){if(l(Xe.animations)===!1){let g=[];for(let M in Xe.animations){let b=P(M);for(let w=0,q=b.length;w<q;w++)g.push(b[w])}Da.push(new ha("default",-1,g))}}else for(let g in y)Da.push(K(g))}function jt(y){let g="",M=[y];for(;M.length;){let b=M.shift();b.nodeType===Node.TEXT_NODE?g+=b.textContent:(g+=`
`,M.push.apply(M,b.childNodes))}return g.trim()}if(e.length===0)return{scene:new Es};let ni=new DOMParser().parseFromString(e,"application/xml"),Ft=i(ni,"COLLADA")[0],hn=ni.getElementsByTagName("parsererror")[0];if(hn!==void 0){let y=i(hn,"div")[0],g;return y?g=y.textContent:g=jt(hn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,g),null}let zr=Ft.getAttribute("version");console.debug("THREE.ColladaLoader: File version",zr);let Ia=h(i(Ft,"asset")[0]),Hr=new zo(this.manager);Hr.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Hl;pa&&(Hl=new pa(this.manager),Hl.setPath(this.resourcePath||t));let Na=new st,Da=[],hu={},am=0,Xe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ft,"library_animations","animation",p),m(Ft,"library_animation_clips","animation_clip",B),m(Ft,"library_controllers","controller",$),m(Ft,"library_images","image",se),m(Ft,"library_effects","effect",Fe),m(Ft,"library_materials","material",De),m(Ft,"library_cameras","camera",lt),m(Ft,"library_lights","light",Re),m(Ft,"library_geometries","geometry",_e),m(Ft,"library_nodes","node",We),m(Ft,"library_visual_scenes","visual_scene",Fr),m(Ft,"library_kinematics_models","kinematics_model",Tt),m(Ft,"library_physics_models","physics_model",La),m(Ft,"scene","instance_kinematics_scene",zl),_(Xe.animations,v),_(Xe.clips,ee),_(Xe.controllers,k),_(Xe.images,ae),_(Xe.effects,ue),_(Xe.materials,Ce),_(Xe.cameras,je),_(Xe.lights,It),_(Xe.geometries,St),_(Xe.visualScenes,Nt),kr(),j();let Ua=fs(i(Ft,"scene")[0]);return Ua.animations=Da,Ia.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Ua.rotation.set(-Math.PI/2,0,0)),Ua.scale.multiplyScalar(Ia.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Da},kinematics:hu,library:Xe,scene:Ua}}};var Sf=new sn,tl=new N,Rs=class extends qo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Lt(e,3)),this.setAttribute("uv",new Lt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Cs(t,6,1);return this.setAttribute("instanceStart",new Gn(i,3,0)),this.setAttribute("instanceEnd",new Gn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Cs(t,6,1);return this.setAttribute("instanceColorStart",new Gn(i,3,0)),this.setAttribute("instanceColorEnd",new Gn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Oo(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Sf.setFromBufferAttribute(t),this.boundingBox.union(Sf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)tl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tl)),tl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(tl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ze(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};vn.line={uniforms:Ko.merge([ge.common,ge.fog,ge.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Oi=class extends Kn{constructor(e){super({type:"LineMaterial",uniforms:Ko.clone(vn.line.uniforms),vertexShader:vn.line.vertexShader,fragmentShader:vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var wf=new N,Ef=new N,rn=new _t,an=new _t,oi=new _t,uh=new N,dh=new rt,on=new $o,Tf=new N,nl=new sn,il=new Vn,li=new _t,ci,Ps;function Af(n,e,t){return li.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),li.multiplyScalar(1/li.w),li.x=Ps/t.width,li.y=Ps/t.height,li.applyMatrix4(n.projectionMatrixInverse),li.multiplyScalar(1/li.w),Math.abs(Math.max(li.x,li.y))}function Pv(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,c=a;o<c;o++){on.start.fromBufferAttribute(s,o),on.end.fromBufferAttribute(r,o),on.applyMatrix4(t);let l=new N,h=new N;ci.distanceSqToSegment(on.start,on.end,h,l),h.distanceTo(l)<Ps*.5&&e.push({point:h,pointOnLine:l,distance:ci.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function Lv(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),u=-e.near;ci.at(1,oi),oi.w=1,oi.applyMatrix4(e.matrixWorldInverse),oi.applyMatrix4(i),oi.multiplyScalar(1/oi.w),oi.x*=r.x/2,oi.y*=r.y/2,oi.z=0,uh.copy(oi),dh.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(rn.fromBufferAttribute(c,d),an.fromBufferAttribute(l,d),rn.w=1,an.w=1,rn.applyMatrix4(dh),an.applyMatrix4(dh),rn.z>u&&an.z>u)continue;if(rn.z>u){let v=rn.z-an.z,P=(rn.z-u)/v;rn.lerp(an,P)}else if(an.z>u){let v=an.z-rn.z,P=(an.z-u)/v;an.lerp(rn,P)}rn.applyMatrix4(i),an.applyMatrix4(i),rn.multiplyScalar(1/rn.w),an.multiplyScalar(1/an.w),rn.x*=r.x/2,rn.y*=r.y/2,an.x*=r.x/2,an.y*=r.y/2,on.start.copy(rn),on.start.z=0,on.end.copy(an),on.end.z=0;let x=on.closestPointToPointParameter(uh,!0);on.at(x,Tf);let p=ss.lerp(rn.z,an.z,x),f=p>=-1&&p<=1,A=uh.distanceTo(Tf)<Ps*.5;if(f&&A){on.start.fromBufferAttribute(c,d),on.end.fromBufferAttribute(l,d),on.start.applyMatrix4(a),on.end.applyMatrix4(a);let v=new N,P=new N;ci.distanceSqToSegment(on.start,on.end,P,v),t.push({point:P,pointOnLine:v,distance:ci.origin.distanceTo(P),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var ma=class extends zt{constructor(e=new Rs,t=new Oi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)wf.fromBufferAttribute(t,a),Ef.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+wf.distanceTo(Ef);let r=new Cs(s,2,1);return e.setAttribute("instanceDistanceStart",new Gn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Gn(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ci=e.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;Ps=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),il.copy(o.boundingSphere).applyMatrix4(a);let l;if(i)l=Ps*.5;else{let u=Math.max(s.near,il.distanceToPoint(ci.origin));l=Af(s,u,c.resolution)}if(il.radius+=l,ci.intersectsSphere(il)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),nl.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=Ps*.5;else{let u=Math.max(s.near,nl.distanceToPoint(ci.origin));h=Af(s,u,c.resolution)}nl.expandByScalar(h),ci.intersectsBox(nl)!==!1&&(i?Pv(this,t):Lv(this,s,t))}};var rs=["en","fr","ca","es"];var Iv={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function If(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of Iv[e]||rs)if(n[t])return n[t];return""}var ga={en:{all:"All",postedIn:"Filed under",visit:"Visit the site:",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",close:"Close",soundOn:"Sound on",soundOff:"Mute",hv_tab:"Video",hv_grid:"Grid",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_sound:"Sound",hv_cam:"Camera",hv_camNote:"Your image stays on your screen.",hv_camDenied:"Camera unavailable.",sent:"Your slogan is now scrolling at the top.",bsLabel:"Type your bullshit slogan, then press Enter"},fr:{all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",hv_tab:"Vid\xE9o",hv_grid:"Grille",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_sound:"Son",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran.",hv_camDenied:"Cam\xE9ra indisponible.",sent:"Ton slogan d\xE9file en haut de la page.",bsLabel:"Tape ton bullshit slogan, puis Entr\xE9e"},ca:{all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",hv_tab:"V\xEDdeo",hv_grid:"Graella",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_sound:"So",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla.",hv_camDenied:"C\xE0mera no disponible.",sent:"El teu esl\xF2gan ja passa a dalt de la p\xE0gina.",bsLabel:"Escriu el teu bullshit slogan i prem Retorn"},es:{all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_tab:"V\xEDdeo",hv_grid:"Cuadr\xEDcula",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_sound:"Sonido",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla.",hv_camDenied:"C\xE1mara no disponible.",sent:"Tu eslogan ya pasa arriba de la p\xE1gina.",bsLabel:"Escribe tu bullshit slogan y pulsa Intro"}},Nv={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},ph={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function fh(){return Object.fromEntries(rs.map(n=>[n,""]))}function Ls(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:rs.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||fh(),e.sub=e.sub||fh(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||fh(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=Nv[t.layout]?t.layout:"carousel",t.card=ph[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network,t.skills=t.skills===void 0?t.id==="expertise":!!t.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(rs.map(s=>[s,t[i]||""]))),rs.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit="")}),t.spots=Array.isArray(t.spots)?t.spots.filter(yh):[],t.skills=Array.isArray(t.skills)?t.skills.filter(i=>typeof i=="string"):[],t.published===void 0&&(t.published=!0)}),n}function mh(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function Nf(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function Df(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function $e(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var Dv=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function gh(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!Dv.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function al(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var yh=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function as(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function _h(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Cf(n){try{let e=await _h();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Rf(n,e){let t=await _h();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function Pf(n){try{let e=await _h();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var sl=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Ls(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Ls(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var rl=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Cf("demo:content:v6");if(e)return Ls(e);if(window.HC_CONTENT)return Ls(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Ls(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await Pf("demo:file:"+i.path);continue}await Rf("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Rf("demo:content:v6",e),"demo"}async reset(){await Pf("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Cf("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Lf=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],ol=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl",".skl .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],Uv=["font","size","lh","weight","italic","ls","upper"],Uf=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function Ov(n){let e=Lf.find(i=>i.id===n);if(e)return e.css;let t=Uf(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Lf[0].css}function Fi(n,e){let t=ol.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...Uv,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=Ov(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function Of(n){let e=[],t=[],i=[];for(let s of ol){let r=n&&n.typo&&n.typo[s.id]||{},a=Fi(n,s.id),o=l=>r[l]!==void 0&&r[l]!==""&&r[l]!==null&&r[l]!==s[l];if(s.vars){o("font")&&e.push(`:root { ${s.vars.map(l=>`${l}: ${a.css};`).join(" ")} }`);continue}if(!s.sel)continue;let c=[];if(o("font")&&c.push(`font-family: ${a.css}`),o("size")&&c.push(s.clamp?`font-size: clamp(${Math.round(a.size*s.clamp[0])}px, ${(a.size/s.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(o("lh")||o("size")&&!s.clamp&&!o("lh")&&s.lh)&&c.push(`line-height: ${o("lh")?a.lh:+(s.lh*a.size/s.size).toFixed(1)}px`),o("weight")&&c.push(`font-weight: ${a.weight}`),o("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),o("ls")&&c.push(`letter-spacing: ${a.ls}em`),o("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${s.sel.join(", ")} { ${c.join("; ")} }`),s.mob&&(o("size")||o("lh"))){let l=o("lh")?a.lh:s.lh*a.size/s.size;t.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob)}px; line-height: ${Math.round(l*s.mob)}px }`),i.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob*.8)}px; line-height: ${Math.round(l*s.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function Ff(n){let e=new Map;for(let t of ol){let i=Fi(n,t.id),s=Uf(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function xh(n){let e=new Set;for(let t of ol){let i=Fi(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Bf(n,e,t=!1){let i=Fi(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let a=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let o=r.measureText(a),c=(o.actualBoundingBoxAscent||i.size*1.4)-(o.actualBoundingBoxDescent||0);if(r.fillText(a,120,120+c/2),t){let l=r.getImageData(0,0,240,240),h=l.data;for(let u=0;u<h.length;u+=4)h[u]=255-h[u],h[u+1]=255-h[u+1],h[u+2]=255-h[u+2];r.putImageData(l,0,0)}return s.toDataURL("image/png")}var kf=window.HC_BASE||"",fl=window.HC_MODE==="demo"?new rl(kf):new sl(kf),os=window.HC_ASSETS||null,Fv=location.protocol==="file:",cp=20261102;window.HC_SITE_VERSION=cp;var Kt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,Sn=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Kt&&Kt.files&&Kt.files[e]?Kt.files[e]:os&&os[e]&&os[e].startsWith("data:")?os[e]:fl.url(e)};async function Bv(n){if(os&&os[n]&&!os[n].startsWith("data:"))return os[n];let e=await fetch(Sn(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var tt=null,Hi="en",Ye=n=>If(n,Hi),mt=n=>(ga[Hi]||ga.en)[n],kv=42,ce={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},_l={zoom:2,focus:300},zv=.08,zf={};function hp(n){if(ce.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{ce[t]=zf[t]}):(e.forEach(t=>{zf[t]=ce[t]}),Object.assign(ce,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),ce.animationMode=n}var Lh=class{constructor(e){this.section=e,this.all=mh(tt,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:{en:ga.en.all,fr:ga.fr.all}},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.section.perPage),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?Ye(e.label):""}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}},Q={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:ce.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Ht[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Lh(this.section.def)}},Ht=[],vt={x:0,y:0,z:0,zoom:_l.zoom},Qn={x:0,y:0,z:0},ki=0,gi=[],Hv={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function wn(n,e,t,i={}){for(let r of gi)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ki+(i.delay||0),ease:Hv[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return gi.push(s),s}var Sa=(n,e)=>wn({},n,{},{onComplete:e,ease:"linear"});function fi(n){for(let e=gi.length-1;e>=0;e--)gi[e].obj===n&&gi.splice(e,1)}function xl(n){return gi.some(e=>e.obj===n&&ki>=e.start)}function up(n,e){if(!e&&ki<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ki-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function Vv(){for(let n of gi.slice())if(up(n,!1)){let e=gi.indexOf(n);e>=0&&gi.splice(e,1),n.onComplete&&n.onComplete()}}function dp(){gi.splice(0).forEach(n=>up(n,!0))}function Gv(n,e,t,i,s,r,a){fi(vt),wn(vt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-vt.x)/2,y:e+500,z:(t-vt.z)/2}}),fp(i,s,r,a)}function fp(n,e,t,i){fi(Qn),wn(Qn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function Wv(n,e,t,i){fi(vt),wn(vt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var vl=1,Rn=n=>n<=1?1:1-Math.pow(1-1/n,vl),yi=Math.PI/180,Ih=(n,e,t)=>new N(n,e,-t),Is=(n,e,t)=>[-n,e,t],On=document.getElementById("stage"),us=new ra({canvas:On,antialias:!0});us.debug.checkShaderErrors=!1;us.setPixelRatio(Math.min(window.devicePixelRatio||1,2));us.setClearColor(16777215,1);var hs=new Es;hs.add(new Ho(16777215,14211288,2.2));var pp=new Ar(16777215,1.2);pp.position.set(300,800,500);hs.add(pp);var Xn=new Wt(60,1,1,6e4),mp=new Oi({color:ce.lineColor,linewidth:ce.lineThickness}),Nh=new Oi({color:ce.planeFrameColor,linewidth:ce.planeFrameThickness}),gp=new Oi({color:ce.planeFrameSelectColor,linewidth:ce.planeFrameThickness}),pl=new Oi({color:ce.locatorColor,linewidth:1.3}),yp=[mp,Nh,gp,pl],_p=new ua;_p.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Sn(n));var vh=new Map;function Os(n){return n?Fv&&!/^(data:|blob:|https?:)/.test(Sn(n))?Promise.reject(new Error("local")):(vh.has(n)||vh.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(Sn(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=Sn(n)})),vh.get(n)):Promise.reject(new Error("no image"))}function jh(n){return n.colorSpace=kt,n.anisotropy=Math.min(8,us.capabilities.getMaxAnisotropy()),n}var Xv=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=jh(new wr(n)),t=new ts(1,1),i=new Es;return[Dn,nn,bn].forEach(s=>i.add(new zt(t,new Jt({map:e,side:s})))),i.add(new zt(t,new Jt({color:1118481}))),i.add(new aa(new Mr({map:e,transparent:!0}))),i})(),Un=0,cn=0,Yn=!1,bl=()=>Yn,xp=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},En=()=>{let n=tt.settings.accent||"#ffcc00";return bl()?xp(n):n},qn='Georgia, Gelasio, "Times New Roman", serif',pi='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',Zh=1,mi=n=>Math.round(n*Zh);function zs(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...tt?xh(tt.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Hf=0,vp=[];function qv(){clearTimeout(Hf),Hf=setTimeout(async()=>{try{await Promise.all(xh(tt.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}tt.settings.logo||zh(),at&&!at.loading&&at.retexture()},150)}function bp(){let n=tt.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=Of(n);e.textContent!==t&&(e.textContent=t);let i=Ff(n);document.querySelectorAll("link[data-hc-font]").forEach(s=>{i.includes(s.href)||s.remove()}),i.forEach(s=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(s)}"]`)){let r=document.createElement("link");r.rel="stylesheet",r.href=s,r.dataset.hcFont="",vp.push(new Promise(a=>{r.onload=()=>{a(),qv()},r.onerror=a})),document.head.appendChild(r)}}),qn=Fi(n,"card").css,pi=Fi(n,"cardsm").css,Zh=Math.max(.5,Math.min(2,(+Fi(n,"card").scale||100)/100))}function zi(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function Pn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),jh(new wr(s))}function Fs(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,c=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-c)/2,o,c,t,i,s,r),bl()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Dh=n=>String(n).split(/[\s&]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("");function Mp(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function Jh(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Sp=n=>Ht.some(e=>e.def.id===n.section),wp=n=>Df(tt,n).filter(Sp),Yv=n=>Nf(tt,n).filter(Sp),Uh=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&ou(e.src)==="image")||{}).src||"",Vf=new Map;async function Ep(n){let e=wp(n).filter(Uh);if(!e.length)return null;let t=e.find(s=>s.id===Vf.get(n.id)),i=t?[t]:e.map(s=>[Math.random(),s]).sort((s,r)=>s[0]-r[0]).map(s=>s[1]);for(let s of i){let r=await Os(Uh(s)).catch(()=>null);if(r)return Vf.set(n.id,s.id),{im:r,project:s}}return null}function Tp(n,e,t,i,s){Fs(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}async function $v(n,e,t){let i=n.thumb?await Os(n.thumb).catch(()=>null):null,s=n.thumbBack?await Os(n.thumbBack).catch(()=>null):null,r=i?null:await Ep(n);await zs();let a=(l,h=!1)=>{if(i){Fs(l,i,0,0,e,t);let m=Ah(n,n.media[0]&&n.media[0].credit);if(m){l.font=`9px ${pi}`;let _=m;for(;l.measureText(_).width>e-14&&_.length>4;)_=_.slice(0,-2)+"\u2026";let x=l.createLinearGradient(0,t-26,0,t);x.addColorStop(0,"rgba(0,0,0,0)"),x.addColorStop(1,"rgba(0,0,0,.75)"),l.save(),bl()&&(l.filter="invert(1)"),l.fillStyle=x,l.fillRect(0,t-26,e,26),l.restore(),l.fillStyle=bl()?"#000":"#fff",l.textBaseline="bottom",l.fillText(_,7,t-6)}return}r?Tp(l,r,e,t,h?.22:.64):(l.fillStyle="#111",l.fillRect(0,0,e,t)),l.textBaseline="top",h&&(l.globalAlpha=.3),l.fillStyle=En(),l.fillRect(16,18,18,2),l.fillStyle="#fff",l.font=`${mi(24)}px ${qn}`;let u=zi(l,Ye(n.title),e-32).slice(0,3);u.forEach((m,_)=>l.fillText(m,16,30+_*28)),l.fillStyle=r?"#c9c9c9":"#8c8c8c",l.font=`${mi(13)}px ${qn}`,zi(l,Ye(n.subtitle),e-32).slice(0,2).forEach((m,_)=>l.fillText(m,16,38+u.length*28+_*16));let d=r?Ah(r.project,r.project.media[0]&&r.project.media[0].credit):Ah(n,n.media[0]&&n.media[0].credit);if(l.fillStyle=En(),l.font=`10px ${pi}`,l.fillText([n.date,Ye(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),16,t-(d?36:22)),d){l.font=`9px ${pi}`;let m=d;for(;l.measureText(m).width>e-32&&m.length>4;)m=m.slice(0,-2)+"\u2026";l.fillStyle=r?"rgba(0,0,0,.55)":"#2a2a2a",l.fillRect(0,t-20,e,20),l.fillStyle=r?"#d0d0d0":"#9a9a9a",l.textBaseline="middle",l.fillText(m,16,t-10)}l.globalAlpha=1},o=Pn(e,t,a,2),c=s?Pn(e,t,l=>Fs(l,s,0,0,e,t),2):r?Pn(e,t,Jh(e,l=>a(l,!0)),2):Pn(e,t,Mp(a),1.5);return[o,c]}async function jv(n,e,t){let i=n.thumb?await Os(n.thumb).catch(()=>null):null,s=n.thumbBack?await Os(n.thumbBack).catch(()=>null):null;await zs();let r=a=>{if(i){Fs(a,i,0,0,e,t);return}a.fillStyle="#1b1b1b",a.fillRect(0,0,e,t),a.fillStyle="#fff",a.font=`${Math.round(t*.42*Zh)}px ${qn}`,a.textAlign="center",a.textBaseline="middle",a.fillText(Dh(Ye(n.title)),e/2,t*.45),a.fillStyle=En(),a.fillRect(e/2-8,t*.78,16,1.5)};return[Pn(e,t,r,3),s?Pn(e,t,a=>Fs(a,s,0,0,e,t),3):Pn(e,t,Mp(r),2)]}async function Zv(n,e,t){let i=await Ep(n);if(i)return Jv(n,e,t,i);let s=n.thumb?await Os(n.thumb).catch(()=>null):null;await zs();let r=Ye(n.title).trim(),a=s?72:18,o=e-a-14,c=Pn(e,t,h=>{h.fillStyle="#333",h.fillRect(0,0,e,t),s?Fs(h,s,13,12.75,53,53):(h.fillStyle=En(),h.fillRect(18,14,14,2)),h.fillStyle="#fff",h.font=`${mi(21)}px ${qn}`,h.textBaseline="top",zi(h,r,o).slice(0,3).forEach((u,d)=>h.fillText(u,a,(s?12:20)+d*22))}),l=Pn(e,t,Jh(e,h=>{h.fillStyle="rgba(255,255,255,.7)",h.fillRect(0,0,e,t),h.fillStyle="#c4c4c4",h.font=`${mi(21)}px ${qn}`,h.textBaseline="top",zi(h,r,o).slice(0,3).forEach((u,d)=>h.fillText(u,a,(s?9:17)+d*22))}));return[c,l]}async function Jv(n,e,t,i){await zs();let s=Ye(n.title).trim(),r=e-32,a=o=>c=>{Tp(c,i,e,t,o?.2:.62),o&&(c.globalAlpha=.32),c.fillStyle=En(),c.fillRect(18,14,14,2),c.fillStyle="#fff",c.font=`${mi(21)}px ${qn}`,c.textBaseline="top",zi(c,s,r).slice(0,3).forEach((l,h)=>c.fillText(l,18,20+h*22)),c.globalAlpha=1};return[Pn(e,t,a(!1),2),Pn(e,t,Jh(e,a(!0)),2)]}async function Kv(n,e,t){let i=n.thumb?await Os(n.thumb).catch(()=>null):null;await zs();let r=Pn(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),Fs(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=En(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${mi(12)}px ${qn}`,a.textAlign="center",a.textBaseline="top",a.fillText(Ye(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var Gf={image:$v,portrait:jv,text:Zv,place:Kv};function ll(n,e){return zs().then(()=>e==="place"?Pn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mi(44)}px ${qn}`,t.fillText(Ye(n.title)+".",32,18),t.fillStyle="#979797",t.font=`${mi(18)}px ${qn}`,zi(t,Ye(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.fillStyle=En(),t.font=`14px ${pi}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",al(Ye(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.fillStyle=En(),t.font=`15px ${pi}`,t.fillText(Ye(n.place),32,260)},1.5):Pn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mi(20)}px ${qn}`;let i=zi(t,Ye(n.title)+".",166).slice(0,2);i.forEach((r,a)=>t.fillText(r,18,14+a*22));let s=20+i.length*22;t.fillStyle="#8c8c8c",t.font=`${mi(15)}px ${qn}`,Ye(n.subtitle).split(/(?<=\.)\s+/).forEach(r=>zi(t,r,166).forEach(a=>{s<150&&(t.fillText(a,19,s),s+=18)})),t.fillStyle="#bbb",t.font=`11px ${pi}`,al(Ye(n.body)).join(" ").split(/\s+/).length>1&&zi(t,al(Ye(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor((176-s)/14))).forEach(r=>{t.fillText(r,19,s+4),s+=14}),Ye(n.place)&&(t.fillStyle=En(),t.font=`11px ${pi}`,t.fillText(Ye(n.place).toUpperCase(),19,180))}))}function Qv(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${pi}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${pi}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let c=new aa(new Mr({map:jh(new wr(s)),transparent:!0}));c.center.set(.5,0);let l=20;return c.scale.set(l*a/o,l,1),c.renderOrder=2,c}var hi=document.createElement("div");hi.id="net-tip";hi.className="ui";hi.hidden=!0;document.body.appendChild(hi);function Ap(n,e,t){hi.innerHTML=`<b>${$e(n.city||"")}</b>${n.titles.map(s=>`<span>${$e(s)}</span>`).join("")}`,hi.hidden=!1;let i=hi.getBoundingClientRect();hi.style.left=Math.min(e+14,Un-i.width-10)+"px",hi.style.top=Math.max(10,t-i.height-12)+"px"}function Kh(){hi.hidden=!0}var Oh=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new mn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=tt.models.find(l=>l.id===this.def.model)||tt.models[0];if(!t)return;let i=await Bv(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new mn;if(o.add(a),a.traverse(l=>{if(!l.isMesh)return;let h=u=>{let d=u.map||u.emissiveMap||null;return d?new Jt({map:d}):t.untextured==="white"?new Ts({color:15921906}):t.untextured==="black"?new Ts({color:2236962}):new Jt({color:ce.locatorColor,wireframe:!0})};l.material=Array.isArray(l.material)?l.material.map(h):h(l.material),this.blockers.push(l)}),t.scaleMode==="fit"){o.updateMatrixWorld(!0);let l=new sn().setFromObject(o),h=l.getSize(new N),u=(t.height||420)/Math.max(h.y,1e-6);o.scale.setScalar(u),o.updateMatrixWorld(!0);let d=new sn().setFromObject(o),m=d.getCenter(new N);o.position.set(-m.x,-d.min.y,-m.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let l=new sn().setFromObject(o);l.max.y-l.min.y>ce.object3DMaxHeight&&o.scale.setScalar(ce.object3DMaxHeight/(l.max.y-l.min.y))}let c=new mn;c.rotation.y=(t.rotationY||0)*yi,c.add(o),this.container.add(c)}place(e){this.p.x=e*5*ce.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*ce.object3DDistance,this.container.position.copy(Ih(this.p.x,0,this.p.z))}};function Cp(n,e){let t=new Rs;t.setPositions(n);let i=new ma(t,e);return i.computeLineDistances(),i}var Fh=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new mn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t){let i=new ts(this.width,this.height),s=new zt(i,new Jt({map:e,side:Dn})),r=new zt(i,new Jt({map:t,side:nn}));s.userData={post:this,face:"front"},r.userData={post:this,face:"back"},this.width+=ce.planeFrameDistance,this.height+=ce.planeFrameDistance;let a=this.width/2,o=this.height/2;this.frame=Cp([-a,-o,0,a,-o,0,-a,-o,0,-a,o,0,a,-o,0,a,o,0,-a,o,0,a,o,0],Nh),this.group.add(s,r,this.frame),this.meshes.push(s,r),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...Is(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*yi,t.rotation.x=-e.rotX*yi,t.rotation.z=e.rotZ*yi,t.scale.setScalar(Math.max(1e-4,e.scale))}selectIt(){this.frame&&(this.frame.material=gp,Sa(.8,()=>{this.frame&&(this.frame.material=Nh)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),wn(this.thumb,ce.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){fi(this.thumb);let i=Vi(),s={x:-i*Math.sin(Q.degreeCamera),z:-i*Math.cos(Q.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,c=Math.hypot(a,o)||1;return wn(this.thumb,t,{x:s.x+a*e/c,y:r.y,z:s.z+o*e/c,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/c,z:o/c}}}moveBack(e=0){fi(this.thumb);let t=this.p2;wn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){wn(this.thumb,ce.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>wn(this.thumb,ce.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}dispose(){fi(this.thumb),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!yp.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function bh(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*yi;i===0&&(i=2*Math.PI);let s=(i-Q.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),Q.selected=e,Q.cameraY=t.p2.y,Q.degreeCamera+=s,t.selectIt(),!0}function Mh(n,e,t){Q.degreeCamera%=2*Math.PI,Q.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(Q.selected=e,Q.degreeCamera=Math.PI,i.ready&&(Q.cameraY=i.p2.y,i.selectIt(),t(i)))}var Sh=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||xl(r.thumb))return;let o=r.thumb,c=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+c)*Rn(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*Rn(2*i))}),Wf={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:ce.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*ce.planeDisOrder+ce.planeDistance,z:ce.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/yi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>bh(n,e),move:(n,e,t,i)=>Sh(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=ce;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Mh(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>Sh(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=ce,a=_=>{let x=n.angle*(_+1);return x-Math.cos(x)*n.angle/2},o=t,c;t+1>s?(o=2*Math.round(i/2)-t-1,c=Math.pow(-1,o)):c=Math.pow(-1,t+1);let l=r.planeDistance*.7+e.width+c*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,d=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:l*Math.cos(a(o)),y:u*Math.sin(a(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{bh(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*Rn(2*ce.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*Rn(2*ce.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return as(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Rl(n.def);return{x:i[0]+s[0],y:(ce.planeDistance+e.height+Math.pow(-1,t+1)*ce.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Mh(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||xl(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*Rn(2*ce.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=ce.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*ce.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/yi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>bh(n,e),move:(n,e,t,i)=>Sh(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*ce.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Mh(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||xl(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*Rn(2*ce.cameraEaseSpeed)})}}},Xf=new N,qf=new N,Bh=class{constructor(e){this.section=e,this.def=e.def,this.L=Wf[this.def.layout]||Wf.carousel,this.card=this.def.card,this.posts=Q.data.posts.slice(),this.n=this.posts.length,[this.w,this.h]=ph[this.card].size,this.k=ib(this.def),this.container=new mn,this.container.position.copy(e.container.position),hs.add(this.container),this.postViews=this.posts.map((t,i)=>new Fh(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Ht.map(u=>u.def.id)),t=new Map,i=(u,d,m)=>{if(!yh(u))return;let _=(+u.lat).toFixed(1)+","+(+u.lon).toFixed(1),x=t.get(_);x||t.set(_,x={loc:u,city:u.city||"",titles:[],base:!1}),d&&!x.titles.includes(d)&&x.titles.push(d),m&&(x.base=!0)};if(mh(tt,this.def.id).forEach(u=>i(u.location,Ye(u.title),!0)),tt.posts.forEach(u=>{u.published&&e.has(u.section)&&u.section!==this.def.id&&u.spots.forEach(d=>i(d,Ye(u.title)))}),!t.size)return;pl.color.set(En());let s=50,r=new mn,a=[...t.values()],o=a.filter(u=>u.base),c=new Uo(1,14,10),l={on:new Jt({color:En()}),base:new Jt({color:1118481})};this.net={group:r,mats:l,items:[],hits:[],start:ki+(ce.planeSpeed>0?.5:-60),dispose:[c,l.on,l.base]},a.forEach(u=>{u.xz=as(u.loc)}),a.forEach(u=>{u.from=u.base?null:o.length?o.map(d=>[d,Math.hypot(as(d.loc)[0]-u.xz[0],as(d.loc)[1]-u.xz[1])]).sort((d,m)=>d[1]-m[1])[0][0]:null,u.d=u.from?Math.hypot(as(u.from.loc)[0]-u.xz[0],as(u.from.loc)[1]-u.xz[1]):0}),a.sort((u,d)=>d.base-u.base||u.d-d.d);let h=[];a.forEach((u,d)=>{let[m,_]=u.xz,x=u.base?0:.15+d*.07,p=new zt(c,u.base?l.base:l.on);p.scale.setScalar(u.base?7:4+Math.min(3,u.titles.length)),p.position.set(...Is(m,s,_)),r.add(p),p.userData={netNode:u},this.net.hits.push(p);let f=null,A=0;if(u.from){let[P,O]=as(u.from.loc),L=s+18+u.d*.32,D=2*L-s,Z=(P+m)/2,E=(O+_)/2;A=Math.max(12,Math.min(48,Math.round(u.d/6)));let R=he=>{let F=1-he;return Is(F*F*P+2*F*he*Z+he*he*m,F*F*s+2*F*he*D+he*he*s,F*F*O+2*F*he*E+he*he*_)},J=[];for(let he=0;he<A;he++)J.push(...R(he/A),...R((he+1)/A));let oe=new Rs;oe.setPositions(J),f=new ma(oe,pl),f.computeLineDistances(),oe.instanceCount=0,r.add(f)}let v=null;u.city&&!h.some(P=>Math.abs(P[0]-m)<80&&Math.abs(P[1]-_)<22)&&(v=Qv(u.city.toUpperCase()+(u.titles.length>1&&!u.base?" \xB7 "+u.titles.length:""),u.base),v.position.set(...Is(m,s+9,_)),r.add(v),h.push([m,_])),this.net.items.push({dot:p,arc:f,segs:A,label:v,delay:x,base:u.base})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await Gf[this.card](this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1]),this.animeOpenPost(this.postViews[e],e),ce.planeSpeed>0){let i=ki+zv;for(;ki<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let c=i.position.call(i,this,e,t);e.setPosition(c.x,c.y,c.z,c.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*ce.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,wn(e.thumb,r,{y:s.y,rotX:0},{delay:ce.planeSpeed/3,ease:"expoOut",onComplete:o}),wn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,wn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...Is(...i),...Is(...s)],a=this.lines[t];a?a.geometry.setPositions(r):(a=this.lines[t]=Cp(r,mp),this.container.add(a))}async openInfo(e,t,i){let s=await ll(this.posts[t],"place");if(!this.alive)return;let r=new zt(new ts(165,130),new Jt({map:s,side:bn}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),wn(a.p,ce.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Sa(i,()=>{r.visible=!0})}async openPost3D(){let e=Q.selected,t=this.postViews[e];if(!t||!t.ready)return;let{cl:i,dir:s}=t.moveToCamera(60,ce.tween);this.focusInfo||(this.focusInfo={mesh:new zt(new ts(90,90),new Jt({side:bn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let r=this.focusInfo;r.mesh.visible=!1;let a=await ll(this.posts[e],"person");if(!this.alive)return;r.mesh.material.map&&r.mesh.material.map.dispose(),r.mesh.material.map=a,r.mesh.material.needsUpdate=!0;let o=this.h*this.k/90;r.mesh.scale.setScalar(o),Sa(ce.tween,()=>{!Q.postOpen||Q.selected!==e||(r.target=t,r.k=0,r.mesh.visible=!0,fi(r),wn(r,ce.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[Q.selected];e&&e.moveBack(ce.tween/2),this.focusInfo&&(fi(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;fi(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(Q.degreeCamera/yi)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=Q.selected,s=this.postViews[Q.selected]&&this.postViews[Q.selected].ready?t(this.postViews[Q.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),Q.selected=i}goNext(){return Q.selected+1>=this.n?0:Q.selected+1}goPrev(){return Q.selected-1<=-1?this.n-1:Q.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net)for(let e of this.net.items){let t=Math.max(0,Math.min(1,(ki-this.net.start-e.delay)/.9)),i=1-(1-t)*(1-t);e.arc&&(e.arc.geometry.instanceCount=Math.round(i*e.segs));let s=e.base||t>=1;e.dot.visible=s,e.label&&(e.label.visible=s)}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...Is(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*yi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Xf.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),qf.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Xf).add(qf)}}async retexture(){this.net&&(pl.color.set(En()),this.net.mats.on.color.set(En()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await Gf[this.card](this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){new Set(s).forEach(a=>a.dispose());return}new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose());let r=this.infos[t];if(r){let a=await ll(this.posts[t],"place");if(!this.alive){a.dispose();return}let o=e(r.mesh,a);o&&o.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&Q.postOpen){let t=await ll(this.posts[Q.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(fi(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Kh(),hs.remove(this.container)}},Ns=[],at=null,Rr=ce.cameraEaseSpeed,Nr=!1,ei=!1,ls=0,cs=0,ml=0,gl=0,Ra=!1,ti=!1,xi=()=>Ns[Q.currentSection];function eb(){let n=ce.cameraHeight;Q.cameraY=Q.cameraY+n/7<=3*n?Q.cameraY+n/7:n*3}function tb(){let n=ce.cameraHeight;Q.cameraY=Q.cameraY-n/7>=n/7?Q.cameraY-n/7:n/7}var nb={map:58},Rl=(n=(xi()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||nb[n.layout]||100)/100)),Vi=()=>ce.cameraDistance*Rl(),Qh=()=>ce.cameraTargetHeight*(((xi()||{}).def||{}).layout==="map"?Rl()*.62:1),eu=()=>ce.cameraHeight*(((xi()||{}).def||{}).layout==="map"?Rl()*1.6*Math.max(.12,Math.min(1,ce.cameraDistanceProportion/Tl)):1),ib=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100));function Yf(){let n=xi();vt.x=n.p.x+Vi()*Math.sin(Q.actualDeg),vt.z=n.p.z+Vi()*Math.cos(Q.actualDeg)}function Pl(){Ns.forEach((n,e)=>{e===Q.currentSection?n.container.parent||hs.add(n.container):n.container.parent&&hs.remove(n.container)}),Nr=!1,ei=!1,On.classList.remove("dragging"),at&&at.destroy(),at=new Bh(xi()),Ml(Q.selected),Q.actualDeg=Q.degreeCamera,sb()}function sb(){let n=xi();Q.cameraY=eu(),Gv(Vi()*Math.sin(Q.degreeCamera)+n.p.x,Q.cameraY,Vi()*Math.cos(Q.degreeCamera)+n.p.z,n.p.x,Qh(),n.p.z,ce.cameraSpeed)}function Ml(n){Q.selected=n,at&&at.focus(n)}function wh(n){!at||!at.n||(ei=!0,at.checkPostSelected(),Rr=ce.cameraKeyboardSpeed,Ml(n==="NEXT"?at.goNext():at.goPrev()))}function Ll(){let t=ce.cameraDistanceProportion/280;ce.cameraDistance=Math.round((cn<680?1e3-cn:320)*t)}function Rp(){if(ei=!1,Ll(),!Ra)return;let n=xi();Q.postOpen&&Q.section.def.open==="focus3d"&&at&&at.postViews[Q.selected]&&at.postViews[Q.selected].moveToCamera(100,0),Wv(n.p.x+Vi()*Math.sin(Q.actualDeg),lu()?Q.cameraY:vt.y,n.p.z+Vi()*Math.cos(Q.actualDeg),ce.cameraSpeed/2)}function rb(){if(!ti){Math.abs(vt.y-Q.cameraY)>.007&&!xl(vt)&&(vt.y-=(vt.y-Q.cameraY)*Rn(ce.cameraEaseSpeed));return}if(Nr){Rr=ce.cameraEaseSpeed;let n=Q.degreeCamera;Q.degreeCamera+=(ls-ml)/150,Q.actualDeg-=(Q.actualDeg-n)*Rn(Rr),Yf(),Q.cameraY+=(cs-gl)*2;let e=ce.cameraHeight;Q.cameraY<e/3?Q.cameraY=e/3:Q.cameraY>e*4&&(Q.cameraY=4*e),vt.y-=(vt.y-Q.cameraY)*Rn(Rr),ce.animationMode&&at&&at.movePosts((ml-ls)/Math.max(vl,.25),(gl-cs)/Math.max(vl,.25),Rr),ml=ls,gl=cs}else ei?(Math.abs(Q.actualDeg-Q.degreeCamera)<=.007&&(ei=!1),Q.actualDeg-=(Q.actualDeg-Q.degreeCamera)*Rn(ce.cameraEaseSpeed),Yf(),vt.y-=(vt.y-Q.cameraY)*Rn(Rr),ce.animationMode&&at&&at.movePosts(0,0,ce.cameraEaseSpeed)):Math.abs(vt.y-Q.cameraY)>.007&&(vt.y-=(vt.y-Q.cameraY)*Rn(ce.cameraEaseSpeed))}function ab(){vt.zoom=6;let e=at&&at.postViews[0]&&at.postViews[0].p2.y||ce.planeDistance;vt.y=e+100,Qn.y=e+100,fp(Qn.x,Qh(),Qn.z,1),ti=!1,wn(vt,1,{zoom:_l.zoom},{ease:"expoOut"}),setTimeout(()=>{ti=!0},1*1e3+50)}var Eh=new N,Th=new N,ya=new N;function ob(){Eh.copy(Ih(vt.x,vt.y,vt.z)),Th.copy(Ih(Qn.x,Qn.y,Qn.z)),ya.subVectors(Th,Eh),ya.lengthSq()<1e-6&&ya.set(0,0,-1),ya.normalize(),Xn.position.copy(Eh).addScaledVector(ya,-_l.focus),Xn.lookAt(Th);let n=Math.min(1,Un/900),e=2*Math.atan(cn/2/(vt.zoom*_l.focus*n))/yi;Math.abs(Xn.fov-e)>1e-4&&(Xn.fov=e,Xn.updateProjectionMatrix())}function Pp(){Un=window.innerWidth,cn=window.innerHeight,us.setSize(Un,cn,!1),Xn.aspect=Un/cn,Xn.updateProjectionMatrix(),yp.forEach(n=>n.resolution.set(Un,cn))}var Mn=document.getElementById("menu"),Dr=document.getElementById("slogan"),Lp=document.getElementById("langs"),Il=[];function lb(){Mn.innerHTML="",Il=Ht.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=Ye(n.def.name),i.addEventListener("click",()=>{e!==Q.currentSection&&ti&&Ol(e)}),t.appendChild(i),Mn.appendChild(t),i}),Mn.style.setProperty("--n",Ht.length),tu()}function tu(){Il.forEach((n,e)=>n.setAttribute("aria-current",String(e===Q.currentSection)))}function cb(){Il.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),Mn.hidden=!1,Lp.hidden=!1,setTimeout(()=>Mn.classList.add("ready"),(Ht.length+1)*200)}var hb=1.44;function kh(n){let e=n==="project"?{width:522,x:79,colW:362}:{width:389,x:17,colW:353},t=(Un-2*ce.margin)/(pt.scale||1);if(t>=e.width)return e;let i=Math.max(240,Math.floor(t)),s=n==="project"?26:17;return{width:i,x:s,colW:i-2*s}}function Ip(){let n=cn<=420;document.body.classList.toggle("post-short",n&&Q.postOpen);let e=Dr.offsetTop+Dr.offsetHeight+(n?1:2)*ce.margin,t=pt.height+12,i=n?24:(Mn.offsetHeight||90)+70,s=Math.max(n?.4:.5,Math.min(hb,(cn-e-i)/t));pt.scale=s,ln.style.top=e+"px",ln.style.transform=s!==1?`scale(${s.toFixed(3)})`:"",ln.style.width=s!==1?Math.ceil((Un-ce.margin)/s)+"px":"",ln.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",cn-(e+t*s)<Mn.offsetHeight+60)}function wa(){if(Q.postOpen||document.body.classList.remove("post-cramped","post-short"),Q.postOpen&&pt.open&&pt.height>100){let n=Dr.offsetTop+Dr.offsetHeight+pt.height*(pt.scale||1)+2*ce.margin+30;n=Math.min(n,cn-Mn.offsetHeight-52),Mn.style.left=ce.margin+"px",Mn.style.top=n+"px"}else Un<=700||cn<=520?(Mn.style.left=ce.margin+"px",Mn.style.top=Math.round(cn-(Mn.offsetHeight||86)-56)+"px"):(Mn.style.left=3*ce.margin+"px",Mn.style.top=Math.round(cn/1.4)+"px")}var $f=(n,e=!1)=>Bf(n,tt.settings,e);function zh(){let n=tt.settings,e=n.accent||"#ffcc00",t=n.logo?Sn(n.logo):$f(Yn?"#ffffff":e,Yn);["logo","home-logo"].forEach(i=>{let s=document.getElementById(i);s&&(s.src=t,s.classList.toggle("raw",!n.logo))}),ub(n.logo?t:Yn?$f(e):t)}function ub(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}function nu(){let n=tt.settings;bp(),document.documentElement.lang=Hi,document.documentElement.classList.toggle("neg",Yn),document.title=n.name||"Hand Coded";let e=n.taglines&&(n.taglines[Hi]||n.taglines.en)||[],t=e.length?`<b class="wm">${$e(e[0])}</b>${e.slice(1).map(o=>`<span>${$e(o)}</span>`).join("")}`:$e(n.name);if(Dr.innerHTML=t,document.getElementById("home-slogan").innerHTML=t,zh(),!n.logo&&document.fonts){let o=Fi(n,"logo"),c=`${o.italic?"italic ":""}${o.weight||400} 76px ${o.css}`;document.fonts.check(c)||document.fonts.load(c).then(()=>{tt.settings.logo||zh()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo","home-logo"].forEach(o=>{let c=document.getElementById(o);c&&(c.classList.toggle("toggle",i),i?(c.setAttribute("role","button"),c.tabIndex=0,c.setAttribute("aria-pressed",String(Yn)),c.alt=c.title=mt(Yn?"toPos":"toNeg")):(c.removeAttribute("role"),c.removeAttribute("tabindex"),c.removeAttribute("aria-pressed"),c.alt="",c.removeAttribute("title")))});let s=document.getElementById("bs");s.placeholder=Ye(n.home.placeholder),s.setAttribute("aria-label",mt("bsLabel")),Np(),document.getElementById("bs-eg").textContent=Ye(n.home.example),document.getElementById("bs-sent").textContent&&(document.getElementById("bs-sent").textContent=mt("sent"));let r=document.getElementById("offices");r.innerHTML="",(n.offices||[]).forEach(o=>{let c=document.createElement("section");c.innerHTML=`<h3>${$e(Ye(o.name))}</h3>${(o.lines||[]).map(l=>`<p>${$e(l)}</p>`).join("")}${o.mail?`<p><a href="mailto:${$e(o.mail)}">${$e(o.mail)}</a></p>`:""}`,r.appendChild(c)}),(n.social||[]).forEach(o=>{if(!o.url)return;let c=document.createElement("section");c.innerHTML=`<h3>${$e(o.label)}</h3><p><a href="${$e(o.url)}" target="_blank" rel="noopener">${$e(o.url.replace(/^https?:\/\/(www\.)?/,""))}</a></p>`,r.appendChild(c)}),Ir.textContent=Ye(n.home.enter)||mt("enter"),xb(),Bs(),document.querySelectorAll("[data-i18n]").forEach(o=>{o.textContent=mt(o.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",mt("keys")),Sl.setAttribute("aria-label",mt("prev")),wl.setAttribute("aria-label",mt("next"));let a=n.langs&&n.langs.length?n.langs:rs;[Lp,document.getElementById("home-langs")].forEach(o=>{o.innerHTML="",!(a.length<2)&&a.forEach(c=>{let l=document.createElement("button");l.type="button",l.textContent=c.toUpperCase(),l.setAttribute("aria-pressed",String(c===Hi)),l.setAttribute("aria-label",mt("lang")+" "+c.toUpperCase()),l.addEventListener("click",()=>Dp(c)),o.appendChild(l)})}),document.documentElement.style.setProperty("--accent",En()),document.documentElement.style.setProperty("--accent-raw",tt.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",xp(tt.settings.accent||"#ffcc00")),Qp()}function Np(){let n=document.getElementById("bs");if(!n||!n.offsetWidth)return;n.style.fontSize="";let e=getComputedStyle(n),t=parseFloat(e.fontSize),i=n.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)-6,s=document.createElement("canvas").getContext("2d");s.font=`${e.fontWeight} ${t}px ${e.fontFamily}`;let r=parseFloat(e.letterSpacing)||0,a=s.measureText(n.placeholder).width+r*n.placeholder.length;a>i&&(n.style.fontSize=Math.max(16,Math.floor(t*i/a))+"px")}window.addEventListener("resize",()=>{ks||Np()});function Dp(n){if(n!==Hi){Hi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(nu(),Ra){Il.forEach((i,s)=>{i.textContent=Ye(Ht[s].def.name)}),Nl();let e=Q.postOpen,t=Q.selected;_i(),Q.selected=t,Pl(),e&&Sa(.6,()=>Ea(t))}}}var iu=document.getElementById("cats"),su=document.getElementById("cat-box"),jf=document.getElementById("cat-list"),Up=document.getElementById("cat-name"),Hh=document.getElementById("cat-open"),Sl=document.getElementById("pg-prev"),wl=document.getElementById("pg-next");function Nl(){let n=Q.data,e=n.categoryList;su.hidden=e.length<=1,jf.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=Ye(t.label),s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Zf(),fb(t.id)}),i.appendChild(s),jf.appendChild(i)}),Up.textContent=n.currentCatName,Op(),Zf()}function Op(){let n=Q.data;Sl.disabled=!n.hasNewer(),wl.disabled=!n.hasOlder(),Sl.hidden=wl.hidden=!n.hasNewer()&&!n.hasOlder()}function Zf(){su.classList.remove("open"),Hh.setAttribute("aria-expanded","false")}Hh.addEventListener("click",()=>{let n=su.classList.toggle("open");Hh.setAttribute("aria-expanded",String(n))});Sl.addEventListener("click",()=>{ti&&Hp("newer")});wl.addEventListener("click",()=>{ti&&Hp("older")});var ds=document.getElementById("kb"),ru=document.getElementById("kb-toggle"),Fp=null;function Vh(){ds.classList.add("open"),ru.setAttribute("aria-expanded","true")}function Gh(){ds.classList.remove("open"),ru.setAttribute("aria-expanded","false")}ru.addEventListener("click",()=>{clearTimeout(Fp),ds.classList.contains("open")?Gh():Vh()});ds.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>qp({code:n.dataset.k,preventDefault(){}})));function Bi(n){let e=ds.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function Bp(){ds.querySelector(".key.anim").classList.toggle("off",!ce.animationMode)}var au=document.getElementById("whiteboard"),ln=document.getElementById("post2d"),Pr=document.getElementById("strip");function Ah(n,e){if(!n||tt.settings.signImages===!1)return"";let t=[Ye(n.title).trim(),(n.author||tt.settings.name||"").trim()].filter(Boolean);return e&&t.push(mt("photo")+" "+e.trim()),t.join(" \xB7 ")}var db=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Dl=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Ul=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},ou=n=>Dl(n)?"youtube":Ul(n)?"vimeo":db(n)?"video":"image",pt={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,ln.classList.remove("closing"),ln.hidden=!1,Ip(),this.geomKey=JSON.stringify(kh("project")),this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit)),this.addRelations(n);else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:""),this.addText(n,"project");let s=Yv(n);s.length&&this.addSkills(s),t.slice(1).forEach(r=>this.addMedia(r.src,355,r.credit)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Pr.style.transform="translateX(0px)"},addRelations(n){let e=wp(n);e.length&&(this.addPanel("relh",236,`<h2 class="ttl">${$e(mt("skillProjects"))}.</h2><span class="n">${e.length}</span>`),e.forEach(t=>{let i=Uh(t),s=[t.date,Ye(t.place)].filter(Boolean).join(" | "),r=this.addPanel("proj",248,`<button type="button" class="go" data-go="${$e(t.id)}" aria-label="${$e(Ye(t.title))}">`+(i?`<img src="${$e(Sn(i))}" alt="" draggable="false">`:"")+`<span class="mono"${i?" hidden":""}>${$e(Dh(Ye(t.title)))}</span><span class="cap"><span class="t">${$e(Ye(t.title).trim())}</span>${s?`<span class="m">${$e(s)}</span>`:""}</span></button>`),a=r.querySelector("img");a&&a.addEventListener("error",()=>{a.remove(),r.querySelector(".mono").hidden=!1})}))},addSkills(n){let e=(Ht.find(s=>s.def.id===n[0].section)||{}).def,t=Math.ceil(n.length/9),i=(e?Ye(e.name):mt("skills")).trim();this.addPanel("skl",92+t*236,`<h2 class="ttl">${$e(i)}${/[.!?]$/.test(i)?"":"."}</h2><ul style="column-count:${t}">`+n.map(s=>`<li><button type="button" class="go" data-go="${$e(s.id)}">${$e(Ye(s.title).trim())}<span class="arr" aria-hidden="true">\u2192</span></button></li>`).join("")+"</ul>")},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(mt("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${$e(t)}</span><a href="${$e(e)}" target="_blank" rel="noopener"><span class="host">${$e(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Pr.appendChild(i),this.panels.push(i);let s=ce.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addMedia(n,e=355,t="",i=!0){let s=ou(n);if(s==="youtube"||s==="vimeo"){this.addEmbed(n,s,e,t);return}let r=s==="video",a=this.addPanel("media",e,""),o=document.createElement(r?"video":"img");if(o.draggable=!1,o.style.height=e+"px",r){Object.assign(o,{src:Sn(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let l=document.createElement("button");l.type="button",l.className="play",l.setAttribute("aria-label",mt("play")),l.addEventListener("click",()=>{o.controls=!0,o.play().catch(()=>{}),l.remove()}),a.querySelector(".in").appendChild(l)}else o.src=Sn(n),o.alt="";let c=()=>{let l=Math.round(r?o.videoWidth*e/o.videoHeight:o.naturalWidth*e/o.naturalHeight);l&&(a.style.width=l+"px",this.layout())};o.addEventListener(r?"loadedmetadata":"load",c),o.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(l=>l!==a),this.layout())}),a.querySelector(".in").prepend(o)},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?Dl(n):Ul(n),c=document.createElement("div");c.className="cover";let l=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:this.post&&this.post.thumb?Sn(this.post.thumb):"";if(l){let u=document.createElement("img");u.src=l,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),c.appendChild(u)}c.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",mt("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${o}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",c.replaceWith(u)}),c.appendChild(h),a.appendChild(c)},addText(n,e){let{width:t,x:i,colW:s}=kh(e),r=Ye(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let a=Ye(n.subtitle),o=Q.section.def,c=n.tags.map(x=>o.tags.find(p=>p.id===x)).filter(Boolean).map(x=>Ye(x.label)),l=c.length?`${$e(mt("postedIn"))} <span>${c.map($e).join(", ")}</span>`:"",h=$e([n.date,Ye(n.place)].filter(Boolean).join(" | ")),u=gh(Ye(n.body)),d=document.createElement("div");d.className="txt",d.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(d),d.innerHTML=`<h2 class="ttl" style="position:static">${$e(r)}</h2>${a?`<p class="stl" style="position:static">${$e(a)}</p>`:""}`;let m=d.firstChild.offsetHeight,_=a?d.lastChild.offsetHeight+6:0;if(e==="project"){let x=34+m+6,p=34+m+_+20,f=Jf(u,s,[272-p,242],d);f.forEach((A,v)=>{let P=v===f.length-1;this.addPanel("txt",t,(v===0?`<h2 class="ttl" style="left:${i}px;top:34px;width:${s}px">${$e(r)}</h2>${a?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${$e(a)}</p>`:""}`:"")+`<div class="body" style="left:${i}px;top:${v===0?p:93}px;width:${s}px">${A}</div>`+(P?`<div class="fecha" style="left:${i}px;top:282px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:308px;width:${s}px">${l}</div>`:""))})}else{let x=13+m+4,p=13+m+_+10,f=p+20,A=f+18+20;Jf(u,s,[355-A-14,327],d).forEach((P,O)=>{this.addPanel("txt",t,(O===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${$e(r)}</h2>${a?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${$e(a)}</p>`:""}<div class="fecha" style="left:${i}px;top:${p}px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:${f}px;width:${s}px">${l}</div>`:"")+`<div class="body" style="left:${i}px;top:${O===0?A:14}px;width:${s}px">${P}</div>`)})}d.remove()},addTeam(n){let e=n.team.map(r=>tt.posts.find(a=>a.id===r)).filter(Boolean),t=e.map(r=>Ye(r.title)).concat(n.credits?[n.credits]:[]).join(", "),i=this.addPanel("team",576,`<h2 class="ttl">${$e(mt("who"))}</h2><div class="names">${$e(mt("leftToRight"))} <span>${$e(t)}.</span></div>`),s=i.querySelector(".in");e.forEach((r,a)=>{let o=document.createElement("button");o.type="button",o.className="face",o.style.left=69+a%6*59+"px",o.style.top=160+Math.floor(a/6)*55+"px",o.innerHTML=(r.thumb?`<img src="${$e(Sn(r.thumb))}" alt="" draggable="false">`:`<span class="mono">${$e(Dh(Ye(r.title)))}</span>`)+`<span class="tab">${$e(Ye(r.title))}.<small>${$e(Ye(r.subtitle))}</small></span>`,o.setAttribute("aria-label",Ye(r.title)),["pointerenter","focus"].forEach(c=>o.addEventListener(c,()=>o.classList.add("big"))),["pointerleave","blur"].forEach(c=>o.addEventListener(c,()=>o.classList.remove("big"))),s.appendChild(o)}),i.style.overflow="visible"},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Un-2*ce.margin)/(this.scale||1)))),`<div class="cn">${$e(Ye(n.title))}.</div><div class="ac">${$e(Ye(n.subtitle))}</div><div class="site">${n.link?`<a href="${$e(n.link)}" target="_blank" rel="noopener">${$e(e)}</a>`:""}</div><div class="ad">${gh(Ye(n.body))}</div><div class="ct">${$e(Ye(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=ce.animationMode?.8:0;return ln.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Pr.querySelectorAll("video").forEach(n=>n.pause()),Pr.innerHTML="",this.panels=[],ln.hidden=!0,ln.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){this.open&&(this.dragging?(this.finalpos+=(El-this.xprev)*1.5,this.x-=(this.x-this.finalpos)*Rn(ce.easing),this.xprev=El):Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*Rn(ce.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end),Pr.style.transform=`translateX(${Math.round(this.x)}px)`)}};function Jf(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){o=null,d.textContent.trim()&&a.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){o=null;return}d.nodeType===3&&!d.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(d.cloneNode(!0)))});let c=[],l=0,h=()=>t[Math.min(l,t.length-1)],u=()=>{c.push(s.innerHTML),s.innerHTML="",l++};for(let d of a){let m=d.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),d.nodeName==="UL"||d.nodeName==="OL"||d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}let _=[];(function f(A,v){A.childNodes.forEach(P=>{P.nodeType===3?P.textContent.split(/(\s+)/).forEach(O=>O&&_.push({w:O,path:v})):f(P,[...v,P])})})(d,[]);let x=document.createElement("p");s.appendChild(x);let p=({w:f,path:A})=>{let v=x;for(let P of A){let O=v.lastChild;(!O||O.nodeType!==1||O.dataset.src!==P.outerHTML)&&(O=P.cloneNode(!1),O.dataset.src=P.outerHTML,v.appendChild(O)),v=O}v.appendChild(document.createTextNode(f))};for(let f of _)if(p(f),s.offsetHeight>h()){let A=function v(P){return P.lastChild&&P.lastChild.nodeType===1?v(P.lastChild):P}(x);A.removeChild(A.lastChild),u(),x=document.createElement("p"),s.appendChild(x),f.w.trim()&&p(f)}}return(s.textContent.trim()||!c.length)&&c.push(s.innerHTML),c.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var El=0,Ds=null;ln.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(Ds={id:n.pointerId,x:n.clientX,y:n.clientY},El=n.clientX)});ln.addEventListener("pointermove",n=>{if(El=n.clientX,!Ds||n.pointerId!==Ds.id||pt.dragging)return;let e=n.clientX-Ds.x,t=n.clientY-Ds.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){pt.dragging=!0,pt.xprev=Ds.x,pt.finalpos=pt.x;try{ln.setPointerCapture(n.pointerId)}catch{}ln.classList.add("grabbing")}});ln.addEventListener("click",n=>{pt.justDragged&&(n.preventDefault(),n.stopPropagation(),pt.justDragged=!1)},!0);var kp=()=>{pt.dragging&&(pt.justDragged=!0,setTimeout(()=>{pt.justDragged=!1},0)),Ds=null,pt.dragging=!1,ln.classList.remove("grabbing")};ln.addEventListener("pointerup",kp);ln.addEventListener("pointercancel",kp);au.addEventListener("pointerdown",()=>Ta());function Ol(n=-1,e=0){dp(),n===-1&&(n=Q.currentSection||0),_i(),n!==Q.currentSection&&Xp(),Q.currentSection=n,Q.resetData(),Q.selected=e,Pl(),tu(),Nl();try{history.replaceState(null,"","#"+Q.section.def.id)}catch{}}function zp(){_i(),Q.selected=0,Pl(),Op()}function Hp(n){(n==="newer"?Q.data.newer():Q.data.older())&&zp()}function fb(n){Q.data.changeCategory(n),Up.textContent=Q.data.currentCatName,zp(),Nl()}function Ea(n){_i(),Q.selected=n,_a()}var Kf=0;function pb(n){let e=tt.posts.find(h=>h.id===n),t=e?Ht.findIndex(h=>h.def.id===e.section):-1;if(t<0||!ti)return;dp(),_i();let i=t!==Q.currentSection;i&&Xp(),Q.currentSection=t,i&&Q.resetData();let s=Q.data,r=!s.list.includes(e);r&&s.changeCategory("");let a=s.list.indexOf(e);if(a<0)return;let o=a<s.first||a>=s.last;if(o){let h=s.section.perPage;s.first=Math.floor(a/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let c=s.posts.indexOf(e);if(!i&&!r&&!o&&at){Ea(c);return}Q.selected=c,Pl(),tu(),Nl();try{history.replaceState(null,"","#"+Q.section.def.id)}catch{}let l=++Kf;Sa(.5,()=>{l===Kf&&Q.data===s&&s.posts[c]===e&&Ea(c)})}Pr.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),pb(e.dataset.go))});function _a(){!at||!Q.data.posts[Q.selected]||(_i(),Q.postOpen=!0,Q.section.def.open==="strip"?(au.hidden=!1,pt.build(Q.data.posts[Q.selected],Q.section.def.card),iu.classList.add("hidden"),Nr=!1,On.classList.remove("dragging"),ei=!0,Ml(Q.selected)):(ei=!0,Ml(Q.selected),at.openPost3D()),wa())}function Ta(){Q.postOpen&&(Q.postOpen=!1,pt.open?(pt.close(),au.hidden=!0,iu.classList.remove("hidden")):at&&at.closePost3D(),wa())}function _i(){Q.postOpen&&Ta()}function mb(){hp(!ce.animationMode),Bp(),at&&at.resetPostPosition(),ei=!0}var Tl=ce.cameraDistanceProportion,lu=()=>((xi()||{}).def||{}).layout==="map",gb=()=>lu()?60:ce.cameraZoomMin;function Vp(){ce.cameraDistanceProportion<ce.cameraZoomMax&&(ce.cameraDistanceProportion=Math.min(ce.cameraZoomMax,Math.trunc(ce.cameraDistanceProportion*1.5)),Wp())}function Gp(){ce.cameraDistanceProportion>gb()&&(ce.cameraDistanceProportion=Math.trunc(ce.cameraDistanceProportion/1.5),Wp())}function Wp(){lu()&&(Q.cameraY=eu()),Rp()}function Xp(){ce.cameraDistanceProportion!==Tl&&(ce.cameraDistanceProportion=Tl,Ll())}var Qf=!1;function qp(n){if(!ti)return;Qf||(Qf=!0,Vh(),Fp=setTimeout(Gh,6e3));let e=Q.postOpen&&pt.open,t=Q.postOpen&&!pt.open;switch(n.code){case"ArrowLeft":Bi("ArrowLeft"),e?pt.action("LEFT"):(_i(),wh("PREVIOUS"),t&&_a());break;case"ArrowRight":Bi("ArrowRight"),e?pt.action("RIGHT"):(_i(),wh("NEXT"),t&&_a());break;case"ArrowUp":Bi("ArrowUp"),e||eb();break;case"ArrowDown":Bi("ArrowDown"),e||tb();break;case"Tab":Bi("Tab"),e?(Ta(),wh("NEXT"),_a()):Ol((Q.currentSection+1)%Ht.length);break;case"KeyK":ds.classList.contains("open")?Gh():Vh();break;case"KeyA":Bi("KeyA"),mb();break;case"Equal":case"NumpadAdd":Bi("Equal"),e||Gp();break;case"Minus":case"NumpadSubtract":Bi("Minus"),e||Vp();break;case"Space":Bi("Space"),at&&at.checkPostSelected(),Q.postOpen?Ta():_a();break;case"Escape":_i();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!ks||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||qp(n)});var ep=new Yo,tp=new Ze;function Al(n,e){if(!Ra||!at)return null;tp.set(n/Un*2-1,-(e/cn)*2+1),ep.setFromCamera(tp,Xn);let t=ep.intersectObjects([...xi().blockers,...at.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:yb(n,e)||(t?t.object.userData:null)}var cl=new N;function yb(n,e){if(!at||!at.net)return null;let t=null,i=14;for(let s of at.net.hits){if(!s.visible)continue;s.getWorldPosition(cl).project(Xn);let r=(cl.x+1)/2*Un-n,a=(1-cl.y)/2*cn-e,o=Math.hypot(r,a);o<i&&cl.z<1&&(i=o,t=s.userData)}return t}var Us=null,ui=null,Wh=0,Xh=0;On.addEventListener("pointerdown",n=>{if(!ti||Us!==null||n.pointerType==="mouse"&&n.button!==0)return;ls=Wh=n.clientX,cs=Xh=n.clientY;let e=Al(n.clientX,n.clientY);_i(),ui=e&&e.post?e:null,ui&&ui.face==="back"&&(ui.post.view.focus(ui.post.id_),ei=!0),Us=n.pointerId,On.setPointerCapture(n.pointerId),On.classList.add("dragging"),ml=ls,gl=cs,ei=!1,Nr=!0});function Yp(n){if(n.pointerId===Us){if(Us=null,On.classList.remove("dragging"),Nr&&(ei=!0,Nr=!1),ui&&ui.face==="front"&&Math.hypot(n.clientX-Wh,n.clientY-Xh)<6){let e=Al(n.clientX,n.clientY);e&&e.post===ui.post&&Ea(e.post.id_)}else if(!ui&&Math.hypot(n.clientX-Wh,n.clientY-Xh)<6){let e=Al(n.clientX,n.clientY);e&&e.netNode?Ap(e.netNode,n.clientX,n.clientY):Kh()}ui=null}}On.addEventListener("pointerup",Yp);On.addEventListener("pointercancel",Yp);var Ch=!1;On.addEventListener("pointermove",n=>{Us!==null&&n.pointerId!==Us||(ls=n.clientX,cs=n.clientY,Us===null&&n.pointerType==="mouse"&&!Ch&&(Ch=!0,requestAnimationFrame(()=>{Ch=!1;let e=Al(ls,cs);On.classList.toggle("hover",!!(e&&e.post)),e&&e.netNode&&!Q.postOpen?Ap(e.netNode,ls,cs):Kh()})))});var np=0;On.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!ti||e-np<220||!n.deltaY||(np=e,n.deltaY<0?Gp():Vp())},{passive:!1});window.addEventListener("resize",()=>{Pp(),Rp(),wa(),em(),jp(),pt.open&&(Ip(),clearTimeout(pt.relayout),pt.relayout=setTimeout(()=>{pt.open&&pt.post&&JSON.stringify(kh("project"))!==pt.geomKey&&(pt.build(pt.post,Q.section.def.card),wa())},250))});function ip(){if(tt.settings.negativeToggle!==!1){if(Yn=!Yn,!Kt)try{localStorage.setItem("hc-neg",Yn?"1":"0")}catch{}nu(),at&&at.retexture()}}["logo","home-logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",ip),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),ip())}))});var ye=null,_b=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function xb(){let n=(tt.settings.showreel||"").trim();if(!ye){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),ye={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>vb()),ye.x.addEventListener("click",hl),i.querySelector(".scrim").addEventListener("click",hl),ye.snd.addEventListener("click",()=>$p(!ye.muted)),window.addEventListener("keydown",s=>{if(ye.open){if(s.code==="Escape")s.preventDefault(),hl();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!ye.player||s.source!==ye.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==ye.muted&&(ye.muted=r.info.muted,Aa())})}ye.btn.hidden=!n,ye.btn.setAttribute("aria-label","Showreel"),ye.x.setAttribute("aria-label",mt("close")),n!==ye.src&&(ye.open&&hl(!0),ye.src=n,ye.kind=n?ou(n):"",ye.vid.innerHTML="",ye.player=null);let e=ye.kind==="youtube"?`https://www.youtube.com/watch?v=${Dl(n)}`:ye.kind==="vimeo"?`https://vimeo.com/${Ul(n)}`:"";ye.ext.hidden=!e,e&&(ye.ext.href=e,ye.ext.textContent=(ye.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Aa()}function Aa(){ye&&(ye.snd.innerHTML=_b(!ye.muted)+`<span>${mt(ye.muted?"soundOn":"soundOff")}</span>`,ye.snd.setAttribute("aria-pressed",String(!ye.muted)))}function Cl(n,e=[]){let t=ye.player;if(!(!t||!t.contentWindow)){if(ye.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(ye.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function $p(n){ye.muted=n,Aa(),ye.kind==="video"?ye.player&&(ye.player.muted=n,n||(ye.player.volume=1)):(Cl(n?"mute":"unMute"),n||Cl("setVolume",[100]))}function vb(){if(!(!ye||!ye.src||ye.open)){if(ye.open=!0,ye.last=document.activeElement,ye.player)ye.kind==="video"?ye.player.play().catch(()=>{}):Cl("playVideo");else{let n=ye.src,e=ye.kind;if(e==="video"){let t=document.createElement("video");t.src=Sn(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==ye.muted&&(ye.muted=t.muted,Aa())}),ye.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Dl(n):Ul(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),ye.muted||$p(!1)}),ye.player=t}else{let t=document.createElement("img");t.src=Sn(n),t.alt="",ye.player=t}ye.muted=!0,Aa(),ye.vid.appendChild(ye.player)}ye.snd.hidden=!/^(youtube|vimeo|video)$/.test(ye.kind),ye.box.hidden=!1,ye.btn.setAttribute("aria-expanded","true"),ye.box.offsetWidth,ye.box.classList.add("on"),setTimeout(()=>{ye.open&&ye.x.focus({preventScroll:!0})},60)}}function hl(n){!ye||!ye.open||(ye.open=!1,ye.btn.setAttribute("aria-expanded","false"),ye.kind==="video"?ye.player&&ye.player.pause():Cl("pauseVideo"),ye.box.classList.remove("on"),clearTimeout(ye.t),ye.t=setTimeout(()=>{ye.open||(ye.box.hidden=!0)},n===!0?0:650),ye.last&&ye.last.focus&&n!==!0&&ye.last.focus({preventScroll:!0}))}var I=null,xa=["white","grey","accent","source"],cu=8;function bb(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},tt.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((a,o)=>a+o,0);for(let a=0;a<i.length;a++)if((r-=s[a])<0)return i[a];return i[0]};Object.assign(n,{cell:2*Math.round(e(4,12)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(xa,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function Mb(){if(I)return;let n=document.getElementById("home-band");if(!n)return;let e=bb(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),I={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:xa.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(cu,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},I.octx=I.off.getContext("2d",{willReadFrequently:!0}),I.raw=document.createElement("canvas"),I.rctx=I.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:Sn(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),I.video=a}else{let a=new Set;tt.posts.filter(o=>o.published!==!1).forEach(o=>[o.thumb,...(o.media||[]).map(c=>c&&c.src)].forEach(c=>{c&&!/^(https?:|data:)/.test(c)&&/\.(jpe?g|png|webp)$/i.test(c)&&!a.has(c)&&a.size<10&&a.add(c)})),I.pics=[...a].sort(()=>Math.random()-.5).map(o=>{let c=new Image;return c.src=Sn(o),c})}e.controls!==!1&&Sb(document.getElementById("home"));let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),jp()}function jp(){if(!I)return;let n=I.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);I.W=Math.max(1,Math.round(n.width)),I.H=Math.max(1,Math.round(n.height)),I.cv.width=I.W*e,I.cv.height=I.H*e,I.ctx.setTransform(e,0,0,e,0,0)}function Sb(n){let e=document.createElement("div");e.id="hv",e.innerHTML=`<div id="hv-panel">
      <div class="lbl" data-k="grid"></div><div class="row"><button type="button" class="key" data-a="grid-" data-code="ArrowLeft">\u25C2</button><button type="button" class="key" data-a="grid+" data-code="ArrowRight">\u25B8</button></div>
      <div class="lbl" data-k="contrast"></div><div class="row"><button type="button" class="key" data-a="con-" data-code="ArrowDown">\u25BE</button><button type="button" class="key" data-a="con+" data-code="ArrowUp">\u25B4</button></div>
      <div class="lbl" data-k="delay"></div><div class="row"><button type="button" class="key" data-a="del-" data-code="Minus">\u2212</button><button type="button" class="key" data-a="del+" data-code="Equal">+</button></div>
      <div class="lbl" data-k="color"></div><div class="row"><button type="button" class="key sw" data-a="color" data-code="KeyC"><i></i> C</button></div>
      <div class="lbl" data-k="invert"></div><button type="button" class="key" data-a="invert" data-code="KeyI" aria-pressed="false">I</button>
      <div class="lbl" data-k="sound"></div><button type="button" class="key" data-a="sound" data-code="KeyS" aria-pressed="false">S</button>
      <div class="lbl" data-k="cam"></div><button type="button" class="key" data-a="cam" data-code="KeyV" aria-pressed="false">V</button>
      <span class="hv-note" hidden></span>
    </div><button id="hv-toggle" type="button" aria-expanded="false"></button>`,n.appendChild(e),I.box=e,I.note=e.querySelector(".hv-note");let t=i=>{e.classList.toggle("open",i),e.querySelector("#hv-toggle").setAttribute("aria-expanded",String(i))};I.setOpen=t,e.querySelector("#hv-toggle").addEventListener("click",()=>t(!e.classList.contains("open"))),window.addEventListener("keydown",i=>{if(ks||i.ctrlKey||i.metaKey||i.altKey||ye&&ye.open)return;let s=i.target&&i.target.id==="bs",r=s&&i.target.value.length>0;if(i.code==="Escape"&&s){i.target.blur();return}if(i.code==="KeyK"&&!s){i.preventDefault(),t(!e.classList.contains("open"));return}let a=e.querySelector(`[data-code="${i.code}"]`);a&&(s&&!/^Arrow/.test(i.code)||/^Arrow/.test(i.code)&&r||(i.preventDefault(),I.touched||(I.touched=!0,t(!0)),a.click()))}),e.querySelector("#hv-panel").addEventListener("click",i=>{let s=i.target.closest("button[data-a]");if(!s)return;let r=s.dataset.a;s.classList.add("down"),setTimeout(()=>s.classList.remove("down"),200),r==="grid+"?I.cell=Math.max(6,I.cell-2):r==="grid-"?I.cell=Math.min(40,I.cell+2):r==="con-"?I.gamma=Math.max(.4,+(I.gamma-.2).toFixed(2)):r==="con+"?I.gamma=Math.min(3,+(I.gamma+.2).toFixed(2)):r==="del-"?I.delay=Math.max(1,I.delay-1):r==="del+"?I.delay=Math.min(cu,I.delay+1):r==="color"?I.color=xa[(xa.indexOf(I.color)+1)%xa.length]:r==="invert"?I.mode=I.mode==="light"?"dark":"light":r==="sound"?(I.sound=!I.sound,I.video&&(I.video.muted=!I.sound,I.video.volume=1,I.video.play().catch(()=>{}))):r==="cam"&&(I.cam?Zp():wb()),Bs()}),Bs()}function Bs(){if(!I||!I.box)return;I.box.querySelectorAll(".lbl[data-k]").forEach(s=>{s.textContent=mt("hv_"+s.dataset.k)}),I.box.querySelector("#hv-toggle").setAttribute("aria-label",mt("hv_tab"));let n=I.box.querySelector(".sw i");n.className="c-"+I.color;let e=(s,r,a)=>{let o=I.box.querySelector(`[data-a="${s}"]`);o.setAttribute("aria-pressed",String(r)),o.classList.toggle("on",r),a&&o.setAttribute("aria-label",a)};e("invert",I.mode==="dark",mt("hv_invert")),e("sound",I.sound,mt("hv_sound")),e("cam",!!I.cam,mt("hv_cam")),I.box.querySelector('[data-a="sound"]').disabled=!I.video||!!I.cam,I.box.querySelector('[data-a="color"]').setAttribute("aria-label",mt("hv_color")),["grid-","grid+","con-","con+","del-","del+"].forEach(s=>I.box.querySelector(`[data-a="${s}"]`).setAttribute("aria-label",mt(s.startsWith("grid")?"hv_grid":s.startsWith("con")?"hv_contrast":"hv_delay")+(s.endsWith("+")?" +":" \u2212")));let t=I.box.querySelector('.lbl[data-k="delay"]');t&&(t.textContent=mt("hv_delay")+" "+qh()+(qh()<I.delay?"*":""));let i=I.box.querySelector('[data-a="del+"]');i&&(i.disabled=I.delay>=cu)}async function wb(){I.note.hidden=!0;try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),I.cam={stream:n,video:e},I.lo=0,I.hi=1,I.video&&I.video.pause(),I.note.textContent=mt("hv_camNote"),I.note.hidden=!1}catch{I.note.textContent=mt("hv_camDenied"),I.note.hidden=!1}Bs()}function Zp(){I&&I.cam&&(I.cam.stream.getTracks().forEach(n=>n.stop()),I.cam=null,I.video&&I.video.play().catch(()=>{}),I.note.hidden=!0),I&&Bs()}function Eb(){I&&(Zp(),I.video&&I.video.pause())}function Rh(n,e,t,i=1,s=0,r=0,a=!1){let o=I.rctx,c=I.raw.width,l=I.raw.height,h=Math.max(c/e,l/t)*i,u=e*h,d=t*h;a&&(o.save(),o.translate(c,0),o.scale(-1,1)),o.drawImage(n,(c-u)/2+s*c,(l-d)/2+r*l,u,d),a&&o.restore()}function Tb(n){let e=I.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,I.raw.width,I.raw.height),I.cam&&I.cam.video.readyState>=2)return Rh(I.cam.video,I.cam.video.videoWidth,I.cam.video.videoHeight,1,0,0,!0),!0;if(I.video)return I.video.readyState<2?!1:(Rh(I.video,I.video.videoWidth,I.video.videoHeight),!0);let t=I.pics.filter(l=>l.complete&&l.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,a=(Math.floor(s)%r+r)%r,o=s-Math.floor(s),c=(l,h,u)=>{e.globalAlpha=u,Rh(l,l.naturalWidth,l.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return c(t[a],o,1),o>.78&&r>1&&c(t[(a+1)%r],o-1,(o-.78)/.22),e.globalAlpha=1,!0}var Ab=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function Cb(n){if(I.pyr&&I.pyr.cell===n&&I.pyr.fill===I.fill)return I.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.max(Math.abs(a+.5-s),Math.abs(r+.5-s))/s,c=Math.max(0,Math.min(1,1-o/I.fill))*255,l=(r*n+a)*4;i.data[l]=i.data[l+1]=i.data[l+2]=c,i.data[l+3]=255}return t.putImageData(i,0,0),I.pyr={cell:n,fill:I.fill,pat:I.ctx.createPattern(e,"repeat")},I.pyr.pat}function Rb(n,e,t){let i=I.ctx,s=I.W,r=I.H,a=Math.round((s-n*t)/2),o=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!Ab){i.globalAlpha=.45,i.drawImage(I.off,a,o,n*t,e*t),i.globalAlpha=1;return}I.tmp||(I.tmp=document.createElement("canvas"),I.tctx=I.tmp.getContext("2d"));let c=I.tmp,l=I.tctx;(c.width!==s||c.height!==r)&&(c.width=s,c.height=r),l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.filter="none",l.fillStyle="#000",l.fillRect(0,0,s,r),l.imageSmoothingEnabled=!1,l.filter=`grayscale(1)${I.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+I.gamma*.45).toFixed(2)})`,l.globalAlpha=.5,l.drawImage(I.off,a,o,n*t,e*t),l.filter="none",l.globalCompositeOperation="lighter",l.save(),l.translate(a,o),l.fillStyle=Cb(t),l.fillRect(-a,-o,s,r),l.restore(),l.globalCompositeOperation="source-over",l.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(c,0,0,s,r),i.restore(),I.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",I.color==="source"?i.drawImage(I.off,a,o,n*t,e*t):(i.fillStyle=I.color==="grey"?"#8d8d8d":tt.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Pb=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},sp=new Map,Lb=(n,e,t)=>{let i=n>>3<<10|e>>3<<5|t>>3,s=sp.get(i);return s||(s=`rgb(${n&248},${e&248},${t&248})`,sp.set(i,s)),s},qh=()=>I.floor||I.interval>1e3/29?1:I.delay;function Ib(n){if(!I||!I.W||n-I.last<I.interval)return;I.last=n;let e=performance.now(),t=Pb.matches?0:(n-I.t0)/1e3,i=I.ctx,s=I.W,r=I.H,a=Math.max(I.cell,I.floor),o=Math.ceil(s/a),c=Math.ceil(r/a);if(i.fillStyle="#0b0b0b",i.fillRect(0,0,s,r),(I.off.width!==o||I.off.height!==c)&&(I.off.width=I.raw.width=o,I.off.height=I.raw.height=c,I.fresh=!0),!Tb(t))return;let l=qh();I.octx.globalAlpha=I.fresh||l<=1?1:1/l,I.octx.drawImage(I.raw,0,0),I.octx.globalAlpha=1,I.fresh=!1;let h=null;if(!I.tainted)try{h=I.octx.getImageData(0,0,o,c).data}catch{I.tainted=!0}I.tainted?Rb(o,c,a):Nb(h,o,c,a);let u=performance.now()-e;I.cost=I.cost*.9+u*.1,I.cost>14&&++I.slow>15?(I.box&&setTimeout(Bs,0),I.slow=0,I.interval<1e3/21?I.interval=I.interval<1e3/25?1e3/24:1e3/20:I.floor=Math.min(40,Math.max(I.floor,a)+2)):I.cost<5&&++I.fast>60&&(I.box&&setTimeout(Bs,0),I.fast=0,I.floor?I.floor=Math.max(0,I.floor-2):I.interval>1e3/30&&(I.interval=I.interval>1e3/22?1e3/24:1e3/30))}function Nb(n,e,t,i){let s=I.ctx,r=e*t,a=I.lum&&I.lum.length===r?I.lum:I.lum=new Float32Array(r),o=1,c=0;for(let f=0,A=0;f<r;f++,A+=4){let v=(.2126*n[A]+.7152*n[A+1]+.0722*n[A+2])/255;a[f]=v,v<o&&(o=v),v>c&&(c=v)}I.lo+=(o-I.lo)*.15,I.hi+=(Math.max(c,I.lo+.15)-I.hi)*.15;let l=I.lo,h=1/(I.hi-l),u=I.mode==="dark",d=I.gamma,m=i*I.fill,_=(I.W-e*i)/2,x=(I.H-t*i)/2,p=I.color==="source";p||(s.fillStyle=I.color==="grey"?"#8d8d8d":I.color==="accent"?tt.settings.accent||"#ffcc00":"#f2f2f2",s.beginPath());for(let f=0,A=0;f<t;f++){let v=x+f*i+i/2;for(let P=0;P<e;P++,A++){let O=(a[A]-l)*h;O=O<0?0:O>1?1:O,u&&(O=1-O);let L=(d===1?O:Math.pow(O,d))*m;if(L<.6)continue;let D=_+P*i+(i-L)/2,Z=v-L/2;if(p){let E=A*4;s.fillStyle=Lb(n[E],n[E+1],n[E+2]),s.fillRect(D,Z,L,L)}else s.rect(D,Z,L,L)}}p||s.fill()}var Yh=document.getElementById("home"),Ir=document.getElementById("enter"),Ca=document.getElementById("ticker"),ul=Ca.getContext("2d"),va=null,yl=0,ba=1,Jp="hc-bullshit-slogans",Ma=[];try{let n=JSON.parse(localStorage.getItem(Jp)||"[]");Array.isArray(n)&&(Ma=n.filter(e=>typeof e=="string").slice(0,8))}catch{}function Kp(){let n=document.getElementById("bs"),e=n.value.replace(/\s+/g," ").trim().slice(0,70);if(!e)return!1;Ma=[e.toUpperCase(),...Ma.filter(t=>t!==e.toUpperCase())].slice(0,8);try{localStorage.setItem(Jp,JSON.stringify(Ma))}catch{}return Qp(),yl=0,n.value="",document.getElementById("bs-sent").textContent=mt("sent"),Db(e),!0}function Db(n){let e=(tt.settings.sloganInbox||"").trim();if(!e||Kt||!/^https:\/\//.test(e))return;let t=JSON.stringify({slogan:n,lang:Hi,tag:sm("")||"",site:location.host||"local"});try{fetch(e,{method:"POST",mode:"no-cors",keepalive:!0,headers:{"Content-Type":"text/plain;charset=utf-8"},body:t}).catch(()=>{})}catch{}}document.getElementById("bs-form").addEventListener("submit",n=>{n.preventDefault(),Kp(),document.getElementById("bs").blur(),Ir.click()});var rp={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},Ub=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=rp[e]||rp["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function Qp(){let n=[...Ma,...tt.settings.home.ticker||[]].filter(Boolean),e=(n.length?n:[tt.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ",t=[];for(let i of e){let s=Ub(i),r=i===" "?3:5;for(let a=0;a<r;a++){let o=0;for(let c=0;c<7;c++)s[c]&1<<4-a&&(o|=1<<c);t.push(o)}t.push(0)}va={w:t.length,cols:t}}var di={pitch:3.2,rows:7,h:30},Lr=null,ap="";function op(n,e){let t=ba,i=Math.ceil(di.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,di.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-di.pitch*.1*t,a-di.pitch*.1*t,di.pitch*.12*t,0,Math.PI*2),r.fill()),s}function em(){ba=Math.min(window.devicePixelRatio||1,2),Ca.width=Math.round(window.innerWidth*ba),Ca.height=Math.round(di.h*ba),Lr=null}var dl=0;function Ob(n){let e=En();(!Lr||ap!==e)&&(ap=e,Lr={on:op(e,!0),off:op(e,!1)}),dl+=n*26,dl>=1&&(yl=(yl+Math.floor(dl))%va.w,dl%=1);let t=ba,i=di.pitch,s=Math.ceil(window.innerWidth/i)+1,r=(di.h-di.rows*i)/2;ul.setTransform(1,0,0,1,0,0),ul.fillStyle="#000",ul.fillRect(0,0,Ca.width,Ca.height);let a=Lr.on.width/2;for(let o=0;o<s;o++){let c=va.cols[(yl+o)%va.w],l=(o*i+i/2)*t-a;for(let h=0;h<di.rows;h++)ul.drawImage(c>>h&1?Lr.on:Lr.off,l,(r+h*i+i/2)*t-a)}}var ks=!1,tm=!1,nm=!1;function im(){ks||(ks=!0,Yh.classList.add("out"),setTimeout(()=>{Yh.hidden=!0,Eb()},1100),Bb(),ab(),Dr.classList.add("on"),setTimeout(cb,1500),ds.hidden=!1,iu.classList.remove("hidden"),On.focus({preventScroll:!0}))}Ir.addEventListener("click",()=>{Kp(),nm=!0,tm?im():(Ir.textContent=mt("loading"),Ir.classList.add("wait"))});var $h=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function sm(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Kt&&Kt.tag&&(e=Kt.tag),$h(e||n)}function Fb(n,e){let t=n.tags||[],i=t.find(s=>$h(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>$h(r)===e));return i?i.id:""}function Bb(){try{us.compile(Xv,Xn,hs)}catch{}Ll();let n=Kt&&Kt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Ht.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Ht.findIndex(a=>a.def.id===tt.settings.startSection)));let s=sm(t||(e&&i<0?e:""));if(s){let a=Ht.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Ht.keys()];for(let o of a){let c=Fb(Ht[o].def,s);if(c){i=o,Ht[o].def.defaultTag=c;break}}}Tl=ce.cameraDistanceProportion,Q.currentSection=i,Q.resetData();let r=xi();Q.cameraY=eu(),vt.x=Vi()*Math.sin(Q.degreeCamera)+r.p.x,vt.y=Q.cameraY,vt.z=Vi()*Math.cos(Q.degreeCamera)+r.p.z,Qn.x=r.p.x,Qn.y=Qh(),Qn.z=r.p.z,Ra=!0,Ol(i,0),(Un<=700||cn<=520)&&wa()}var lp=performance.now();function rm(n){let e=Math.min(.25,Math.max(0,(n-lp)/1e3));lp=n,ki+=e,vl=e*kv,!ks&&va&&Ob(e),I&&!Yh.hidden&&Ib(n),Ra&&(Vv(),rb(),at&&at.update(),pt.step(),ob(),us.render(hs,Xn)),requestAnimationFrame(rm)}function Ph(n){console.error(n);let e=document.getElementById("load-error");e.textContent=mt("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function kb(){Kt||!/[?&]preview\b/.test(location.search)||window.parent===window||(Kt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,a])=>{try{s.files[r]=URL.createObjectURL(a)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:cp},"*")}catch{}}))}(async function(){try{await kb(),Kt?tt=Ls(structuredClone(Kt.content)):(tt=await fl.load(),fl.prepare&&await fl.prepare(tt))}catch(r){Ph(r);return}if(Yn=!!tt.settings.negative,bp(),!Kt&&tt.settings.negativeToggle!==!1)try{let r=localStorage.getItem("hc-neg");(r==="1"||r==="0")&&(Yn=r==="1")}catch{}let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=tt.settings.langs&&tt.settings.langs.length?tt.settings.langs:rs,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(r=>String(r).toLowerCase().slice(0,2)).find(r=>t.includes(r));if(Hi=t.includes(e)?e:i||tt.settings.defaultLang||t[0],Ht=tt.sections.filter(r=>r.visible).map(r=>({def:r})),!Ht.length){Ph(new Error("aucune section visible"));return}window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&hp(!1),Bp(),nu(),lb(),Mb(),Pp(),Ll(),em(),requestAnimationFrame(rm),Ns=Ht.map((r,a)=>new Oh(r.def,a)),Ht.forEach((r,a)=>{r.object=Ns[a]}),Ht.forEach(r=>{r.container=r.object.container,r.p=r.object.p});let s=new el(_p);try{(await Promise.allSettled(Ns.map(a=>a.load(s)))).forEach((a,o)=>{a.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+Ns[o].def.id+" \xBB :",a.reason)}),Ns.forEach((a,o)=>a.place(o)),await Promise.race([Promise.all(vp).then(zs),new Promise(a=>setTimeout(a,3e3))]),tm=!0,(nm||location.hash.length>1||Kt&&Kt.start)&&im()}catch(r){Ph(r)}})();window.__hc={P:Q,STYLE:ce,cam:vt,camera:Xn,renderer:us,get hv(){return I&&{cell:I.cell,floor:I.floor,fps:Math.round(1e3/I.interval),cost:+I.cost.toFixed(1),tainted:I.tainted}},get input(){return ti},get homeGone(){return ks},get content(){return tt},get postsView(){return at},getToSectionView:Ol,openThatPost:Ea,closePost:Ta,setLang:Dp,enter:()=>Ir.click()};})();
