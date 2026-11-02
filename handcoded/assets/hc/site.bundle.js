/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var fh="160";var xm=0,Au=1,vm=2;var gf=1,bm=2,Ri=3,Fn=0,nn=1,wn=2;var Zi=0,gr=1,Cu=2,Ru=3,Pu=4,Mm=5,Ts=100,Sm=101,wm=102,Lu=103,Iu=104,Em=200,Tm=201,Am=202,Cm=203,Nc=204,Dc=205,Rm=206,Pm=207,Lm=208,Im=209,Nm=210,Dm=211,Um=212,Om=213,Fm=214,Bm=0,zm=1,km=2,_o=3,Hm=4,Vm=5,Gm=6,Wm=7,tl=0,Xm=1,qm=2,Ji=0,Ym=1,$m=2,jm=3,Zm=4,Jm=5,Km=6,Nu="attached",Qm="detached",yf=300,xr=301,vr=302,Uc=303,Oc=304,nl=306,Qi=1e3,pn=1001,Fc=1002,tn=1003,Du=1004;var Kl=1005;var Mn=1006,eg=1007;var es=1008;var Ki=1009,tg=1010,ng=1011,ph=1012,_f=1013,ji=1014,Li=1015,ia=1016,xf=1017,vf=1018,Rs=1020,ig=1021,Gn=1023,sg=1024,rg=1025,Ps=1026,br=1027,ag=1028,bf=1029,og=1030,Mf=1031,Sf=1033,Ql=33776,ec=33777,tc=33778,nc=33779,Uu=35840,Ou=35841,Fu=35842,Bu=35843,wf=36196,zu=37492,ku=37496,Hu=37808,Vu=37809,Gu=37810,Wu=37811,Xu=37812,qu=37813,Yu=37814,$u=37815,ju=37816,Zu=37817,Ju=37818,Ku=37819,Qu=37820,ed=37821,ic=36492,td=36494,nd=36495,lg=36283,id=36284,sd=36285,rd=36286;var xo=2300,vo=2301,sc=2302,ad=2400,od=2401,ld=2402,cg=2500;var Ef=3e3,Ls=3001,hg=3200,ug=3201,mh=0,dg=1,Wn="",zt="srgb",Ni="srgb-linear",gh="display-p3",il="display-p3-linear",bo="linear",Dt="srgb",Mo="rec709",So="p3";var $s=7680;var cd=519,fg=512,pg=513,mg=514,Tf=515,gg=516,yg=517,_g=518,xg=519,Bc=35044;var hd="300 es",zc=1035,Ii=2e3,wo=2001,ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=1234567,Qr=Math.PI/180,Mr=180/Math.PI;function Qn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function fn(n,e,t){return Math.max(e,Math.min(t,n))}function yh(n,e){return(n%e+e)%e}function vg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function bg(n,e,t){return n!==e?(t-n)/(e-n):0}function ea(n,e,t){return(1-t)*n+t*e}function Mg(n,e,t,i){return ea(n,e,1-Math.exp(-t*i))}function Sg(n,e=1){return e-Math.abs(yh(n,e*2)-e)}function wg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Eg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ag(n,e){return n+Math.random()*(e-n)}function Cg(n){return n*(.5-Math.random())}function Rg(n){n!==void 0&&(ud=n);let e=ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pg(n){return n*Qr}function Lg(n){return n*Mr}function kc(n){return(n&n-1)===0&&n!==0}function Ig(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Eo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ng(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var rs={DEG2RAD:Qr,RAD2DEG:Mr,generateUUID:Qn,clamp:fn,euclideanModulo:yh,mapLinear:vg,inverseLerp:bg,lerp:ea,damp:Mg,pingpong:Sg,smoothstep:wg,smootherstep:Eg,randInt:Tg,randFloat:Ag,randFloatSpread:Cg,seededRandom:Rg,degToRad:Pg,radToDeg:Lg,isPowerOfTwo:kc,ceilPowerOfTwo:Ig,floorPowerOfTwo:Eo,setQuaternionFromProperEuler:Ng,normalize:At,denormalize:oi},Je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],_=i[8],x=s[0],p=s[3],u=s[6],T=s[1],v=s[4],P=s[7],U=s[2],L=s[5],D=s[8];return r[0]=o*x+a*T+l*U,r[3]=o*p+a*v+l*L,r[6]=o*u+a*P+l*D,r[1]=c*x+h*T+d*U,r[4]=c*p+h*v+d*L,r[7]=c*u+h*P+d*D,r[2]=f*x+m*T+_*U,r[5]=f*p+m*v+_*L,r[8]=f*u+m*P+_*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=t*d+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rc=new dt;function Af(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dg(){let n=sa("canvas");return n.style.display="block",n}var dd={};function ta(n){n in dd||(dd[n]=!0,console.warn(n))}var fd=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pd=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Ni]:{transfer:bo,primaries:Mo,toReference:n=>n,fromReference:n=>n},[zt]:{transfer:Dt,primaries:Mo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[il]:{transfer:bo,primaries:So,toReference:n=>n.applyMatrix3(pd),fromReference:n=>n.applyMatrix3(fd)},[gh]:{transfer:Dt,primaries:So,toReference:n=>n.convertSRGBToLinear().applyMatrix3(pd),fromReference:n=>n.applyMatrix3(fd).convertLinearToSRGB()}},Ug=new Set([Ni,il]),Ct={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ug.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Va[e].toReference,s=Va[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Va[n].primaries},getTransfer:function(n){return n===Wn?bo:Va[n].transfer}};function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ac(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var js,To=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=sa("canvas")),js.width=e.width,js.height=e.height;let i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yr(t[i]/255)*255):t[i]=yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Og=0,Ao=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oc(s[o].image)):r.push(oc(s[o]))}else r=oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?To.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fg=0,Pn=class n extends ts{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=pn,s=pn,r=Mn,o=es,a=Gn,l=Ki,c=n.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Qn(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ls?zt:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Ls:Ef}set encoding(e){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ls?zt:Wn}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=yf;Pn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,P=(m+1)/2,U=(u+1)/2,L=(h+f)/4,D=(d+x)/4,j=(_+p)/4;return v>P&&v>U?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=L/i,r=D/i):P>U?P<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),i=L/s,r=j/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=D/r,s=j/r),this.set(i,s,r,t),this}let T=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-x)/T,this.z=(f-h)/T,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hc=class extends ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ls?zt:Wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends Hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Co=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vc=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==f||c!==m||h!==_){let p=1-a,u=l*f+c*m+h*_+d*x,T=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let U=Math.sqrt(v),L=Math.atan2(U,u*T);p=Math.sin(p*L)/U,a=Math.sin(a*L)/U}let P=a*T;if(l=l*p+f*P,c=c*p+m*P,h=h*p+_*P,d=d*p+x*P,p===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*m-c*f,e[t+1]=l*_+h*f+c*d-a*m,e[t+2]=c*_+h*m+a*f-l*d,e[t+3]=h*_-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new N,md=new li,sn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Wa.subVectors(this.max,Xr),Zs.subVectors(e.a,Xr),Js.subVectors(e.b,Xr),Ks.subVectors(e.c,Xr),Wi.subVectors(Js,Zs),Xi.subVectors(Ks,Js),bs.subVectors(Zs,Ks);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-bs.z,bs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,bs.z,0,-bs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-bs.y,bs.x,0];return!cc(t,Zs,Js,Ks,Wa)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,Zs,Js,Ks,Wa))?!1:(Xa.crossVectors(Wi,Xi),t=[Xa.x,Xa.y,Xa.z],cc(t,Zs,Js,Ks,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new N,new N,new N,new N,new N,new N,new N,new N],Zn=new N,Ga=new sn,Zs=new N,Js=new N,Ks=new N,Wi=new N,Xi=new N,bs=new N,Xr=new N,Wa=new N,Xa=new N,Ms=new N;function cc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Bg=new sn,qr=new N,hc=new N,Xn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(hc)),this.expandByPoint(qr.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new N,uc=new N,qa=new N,qi=new N,dc=new N,Ya=new N,fc=new N,Sr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){uc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(uc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=qi.dot(this.direction),l=-qi.dot(qa),c=qi.lengthSq(),h=Math.abs(1-o*o),d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let x=1/h;d*=x,f*=x,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(uc).addScaledVector(qa,f),m}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){dc.subVectors(t,e),Ya.subVectors(i,e),fc.crossVectors(dc,Ya);let o=this.direction.dot(fc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);let l=a*this.direction.dot(Ya.crossVectors(qi,Ya));if(l<0)return null;let c=a*this.direction.dot(dc.cross(qi));if(c<0||l+c>o)return null;let h=-a*qi.dot(fc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,f,m,_,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,m,_,x,p)}set(e,t,i,s,r,o,a,l,c,h,d,f,m,_,x,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*d,_=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*d,_=c*h,x=c*d;t[0]=f+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*d,_=c*h,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*d,_=a*h,x=a*d;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+_,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,kg)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Yi.crossVectors(i,Dn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Yi.crossVectors(i,Dn)),Yi.normalize(),$a.crossVectors(Dn,Yi),s[0]=Yi.x,s[4]=$a.x,s[8]=Dn.x,s[1]=Yi.y,s[5]=$a.y,s[9]=Dn.y,s[2]=Yi.z,s[6]=$a.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],T=i[3],v=i[7],P=i[11],U=i[15],L=s[0],D=s[4],j=s[8],E=s[12],R=s[1],Z=s[5],ae=s[9],ye=s[13],F=s[2],W=s[6],B=s[10],ne=s[14],K=s[3],H=s[7],Q=s[11],te=s[15];return r[0]=o*L+a*R+l*F+c*K,r[4]=o*D+a*Z+l*W+c*H,r[8]=o*j+a*ae+l*B+c*Q,r[12]=o*E+a*ye+l*ne+c*te,r[1]=h*L+d*R+f*F+m*K,r[5]=h*D+d*Z+f*W+m*H,r[9]=h*j+d*ae+f*B+m*Q,r[13]=h*E+d*ye+f*ne+m*te,r[2]=_*L+x*R+p*F+u*K,r[6]=_*D+x*Z+p*W+u*H,r[10]=_*j+x*ae+p*B+u*Q,r[14]=_*E+x*ye+p*ne+u*te,r[3]=T*L+v*R+P*F+U*K,r[7]=T*D+v*Z+P*W+U*H,r[11]=T*j+v*ae+P*B+U*Q,r[15]=T*E+v*ye+P*ne+U*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+x*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],T=d*p*c-x*f*c+x*l*m-a*p*m-d*l*u+a*f*u,v=_*f*c-h*p*c-_*l*m+o*p*m+h*l*u-o*f*u,P=h*x*c-_*d*c+_*a*m-o*x*m-h*a*u+o*d*u,U=_*d*l-h*x*l-_*a*f+o*x*f+h*a*p-o*d*p,L=t*T+i*v+s*P+r*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return e[0]=T*D,e[1]=(x*f*r-d*p*r-x*s*m+i*p*m+d*s*u-i*f*u)*D,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*u+i*l*u)*D,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*D,e[4]=v*D,e[5]=(h*p*r-_*f*r+_*s*m-t*p*m-h*s*u+t*f*u)*D,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*u-t*l*u)*D,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*D,e[8]=P*D,e[9]=(_*d*r-h*x*r-_*i*m+t*x*m+h*i*u-t*d*u)*D,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*u+t*a*u)*D,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*m-t*a*m)*D,e[12]=U*D,e[13]=(h*x*s-_*d*s+_*i*f-t*x*f-h*i*p+t*d*p)*D,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*p-t*a*p)*D,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,_=r*d,x=o*h,p=o*d,u=a*d,T=l*c,v=l*h,P=l*d,U=i.x,L=i.y,D=i.z;return s[0]=(1-(x+u))*U,s[1]=(m+P)*U,s[2]=(_-v)*U,s[3]=0,s[4]=(m-P)*L,s[5]=(1-(f+u))*L,s[6]=(p+T)*L,s[7]=0,s[8]=(_+v)*D,s[9]=(p-T)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);let c=1/r,h=1/o,d=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ii){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),m,_;if(a===Ii)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===wo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ii){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),f=(t+e)*c,m=(i+s)*h,_,x;if(a===Ii)_=(o+r)*d,x=-2*d;else if(a===wo)_=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Qs=new N,Jn=new at,zg=new N(0,0,0),kg=new N(1,1,1),Yi=new N,$a=new N,Dn=new N,gd=new at,yd=new li,Ro=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ro.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hg=0,_d=new N,er=new li,Ei=new at,ja=new N,Yr=new N,Vg=new N,Gg=new li,xd=new N(1,0,0),vd=new N(0,1,0),bd=new N(0,0,1),Wg={type:"added"},Xg={type:"removed"},Ht=class n extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new Ro,i=new li,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new dt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Yr,ja,this.up):Ei.lookAt(ja,Yr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Ei),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,Vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new N(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new N,Ti=new N,pc=new N,Ai=new N,tr=new N,nr=new N,Md=new N,mc=new N,gc=new N,yc=new N,Za=!1,Cs=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),Ti.subVectors(i,t),pc.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(Ti),l=Kn.dot(pc),c=Ti.dot(Ti),h=Ti.dot(pc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,i,s,r,o,a,l){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),Ti.subVectors(e,t),Kn.cross(Ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Kn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,i),nr.subVectors(r,i),mc.subVectors(e,i);let l=tr.dot(mc),c=nr.dot(mc);if(l<=0&&c<=0)return t.copy(i);gc.subVectors(e,s);let h=tr.dot(gc),d=nr.dot(gc);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(tr,o);yc.subVectors(e,r);let m=tr.dot(yc),_=nr.dot(yc);if(_>=0&&m<=_)return t.copy(r);let x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(nr,a);let p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Md.subVectors(r,s),a=(d-h)/(d-h+(m-_)),t.copy(s).addScaledVector(Md,a);let u=1/(p+x+f);return o=x*u,a=f*u,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function _c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=yh(e,1),t=fn(t,0,1),i=fn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_c(o,r,e+1/3),this.g=_c(o,r,e),this.b=_c(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=Cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=ac(e.r),this.g=ac(e.g),this.b=ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ct.fromWorkingColorSpace(dn.copy(this),e),Math.round(fn(dn.r*255,0,255))*65536+Math.round(fn(dn.g*255,0,255))*256+Math.round(fn(dn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(dn.copy(this),t);let i=dn.r,s=dn.g,r=dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=zt){Ct.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,i=dn.g,s=dn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Ja);let i=ea($i.h,Ja.h,t),s=ea($i.s,Ja.s,t),r=ea($i.l,Ja.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new rt;rt.NAMES=Cf;var qg=0,ci=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=gr,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Dc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Dc&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kt=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new N,Ka=new Je,On=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}};var Po=class extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Lo=class extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Lt=class extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Yg=0,Vn=new at,xc=new Ht,ir=new N,Un=new sn,$r=new sn,Jt=new N,Ln=class n extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Af(e)?Lo:Po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Un.min,$r.min),Un.expandByPoint(Jt),Jt.addVectors(Un.max,$r.max),Un.expandByPoint(Jt)):(Un.expandByPoint($r.min),Un.expandByPoint($r.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),Jt.add(ir)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<a;R++)c[R]=new N,h[R]=new N;let d=new N,f=new N,m=new N,_=new Je,x=new Je,p=new Je,u=new N,T=new N;function v(R,Z,ae){d.fromArray(s,R*3),f.fromArray(s,Z*3),m.fromArray(s,ae*3),_.fromArray(o,R*2),x.fromArray(o,Z*2),p.fromArray(o,ae*2),f.sub(d),m.sub(d),x.sub(_),p.sub(_);let ye=1/(x.x*p.y-p.x*x.y);isFinite(ye)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(ye),T.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(ye),c[R].add(u),c[Z].add(u),c[ae].add(u),h[R].add(T),h[Z].add(T),h[ae].add(T))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let R=0,Z=P.length;R<Z;++R){let ae=P[R],ye=ae.start,F=ae.count;for(let W=ye,B=ye+F;W<B;W+=3)v(i[W+0],i[W+1],i[W+2])}let U=new N,L=new N,D=new N,j=new N;function E(R){D.fromArray(r,R*3),j.copy(D);let Z=c[R];U.copy(Z),U.sub(D.multiplyScalar(D.dot(Z))).normalize(),L.crossVectors(j,Z);let ye=L.dot(h[R])<0?-1:1;l[R*4]=U.x,l[R*4+1]=U.y,l[R*4+2]=U.z,l[R*4+3]=ye}for(let R=0,Z=P.length;R<Z;++R){let ae=P[R],ye=ae.start,F=ae.count;for(let W=ye,B=ye+F;W<B;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){let _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new On(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sd=new at,Ss=new Sr,Qa=new Xn,wd=new N,sr=new N,rr=new N,ar=new N,vc=new N,eo=new N,to=new Je,no=new Je,io=new Je,Ed=new N,Td=new N,Ad=new N,so=new N,ro=new N,kt=class extends Ht{constructor(e=new Ln,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(vc.fromBufferAttribute(d,e),o?eo.addScaledVector(vc,h):eo.addScaledVector(vc.sub(t),h))}t.add(eo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Qa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Qa,wd)===null||Ss.origin.distanceToSquared(wd)>(e.far-e.near)**2))&&(Sd.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Sd),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let p=f[_],u=o[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let P=T,U=v;P<U;P+=3){let L=a.getX(P),D=a.getX(P+1),j=a.getX(P+2);s=ao(this,u,e,i,c,h,d,L,D,j),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let T=a.getX(p),v=a.getX(p+1),P=a.getX(p+2);s=ao(this,o,e,i,c,h,d,T,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let p=f[_],u=o[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let P=T,U=v;P<U;P+=3){let L=P,D=P+1,j=P+2;s=ao(this,u,e,i,c,h,d,L,D,j),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let T=p,v=p+1,P=p+2;s=ao(this,o,e,i,c,h,d,T,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function $g(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fn,a),l===null)return null;ro.copy(a),ro.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:n}}function ao(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,sr),n.getVertexPosition(l,rr),n.getVertexPosition(c,ar);let h=$g(n,e,t,i,sr,rr,ar,so);if(h){s&&(to.fromBufferAttribute(s,a),no.fromBufferAttribute(s,l),io.fromBufferAttribute(s,c),h.uv=Cs.getInterpolation(so,sr,rr,ar,to,no,io,new Je)),r&&(to.fromBufferAttribute(r,a),no.fromBufferAttribute(r,l),io.fromBufferAttribute(r,c),h.uv1=Cs.getInterpolation(so,sr,rr,ar,to,no,io,new Je),h.uv2=h.uv1),o&&(Ed.fromBufferAttribute(o,a),Td.fromBufferAttribute(o,l),Ad.fromBufferAttribute(o,c),h.normal=Cs.getInterpolation(so,sr,rr,ar,Ed,Td,Ad,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Cs.getNormal(sr,rr,ar,d.normal),h.face=d}return h}var aa=class n extends Ln{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function _(x,p,u,T,v,P,U,L,D,j,E){let R=P/D,Z=U/j,ae=P/2,ye=U/2,F=L/2,W=D+1,B=j+1,ne=0,K=0,H=new N;for(let Q=0;Q<B;Q++){let te=Q*Z-ye;for(let de=0;de<W;de++){let z=de*R-ae;H[x]=z*T,H[p]=te*v,H[u]=F,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[u]=L>0?1:-1,h.push(H.x,H.y,H.z),d.push(de/D),d.push(1-Q/j),ne+=1}}for(let Q=0;Q<j;Q++)for(let te=0;te<D;te++){let de=f+te+W*Q,z=f+te+W*(Q+1),X=f+(te+1)+W*(Q+1),se=f+(te+1)+W*Q;l.push(de,z,se),l.push(z,X,se),K+=6}a.addGroup(m,K,E),m+=K,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=wr(n[t]);for(let s in i)e[s]=i[s]}return e}function jg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rf(n){return n.getRenderTarget()===null?n.outputColorSpace:Ct.workingColorSpace}var sl={clone:wr,merge:bn},Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Io=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qt=class extends Io{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,lr=1,Gc=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(or,lr,e,t);s.layers=this.layers,this.add(s);let r=new qt(or,lr,e,t);r.layers=this.layers,this.add(r);let o=new qt(or,lr,e,t);o.layers=this.layers,this.add(o);let a=new qt(or,lr,e,t);a.layers=this.layers,this.add(a);let l=new qt(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new qt(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},No=class extends Pn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wc=class extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ls?zt:Wn),this.texture=new No(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new aa(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Zi});r.uniforms.tEquirect.value=t;let o=new kt(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=Mn),new Gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},bc=new N,Kg=new N,Qg=new dt,Pi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=bc.subVectors(i,t).cross(Kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(bc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Qg.getNormalMatrix(e),s=this.coplanarPoint(bc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new Xn,oo=new N,oa=class{constructor(e=new Pi,t=new Pi,i=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],x=s[10],p=s[11],u=s[12],T=s[13],v=s[14],P=s[15];if(i[0].setComponents(l-r,f-c,p-m,P-u).normalize(),i[1].setComponents(l+r,f+c,p+m,P+u).normalize(),i[2].setComponents(l+o,f+h,p+_,P+T).normalize(),i[3].setComponents(l-o,f-h,p-_,P-T).normalize(),i[4].setComponents(l-a,f-d,p-x,P-v).normalize(),t===Ii)i[5].setComponents(l+a,f+d,p+x,P+v).normalize();else if(t===wo)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function e0(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,_=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&_.length===0&&n.bufferSubData(d,0,f),_.length!==0){for(let x=0,p=_.length;x<p;x++){let u=_[x];t?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var ns=class n extends Ln{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,m=[],_=[],x=[],p=[];for(let u=0;u<h;u++){let T=u*f-o;for(let v=0;v<c;v++){let P=v*d-r;_.push(P,-T,0),x.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<a;T++){let v=T+c*u,P=T+c*(u+1),U=T+1+c*(u+1),L=T+1+c*u;m.push(v,P,L),m.push(P,U,L)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
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
#endif`,i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p0=`#ifdef USE_IRIDESCENCE
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
#endif`,m0=`#ifdef USE_BUMPMAP
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`
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
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
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
}`,G0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,ey=`struct PhysicalMaterial {
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
}`,ty=`
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
#endif`,ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uy=`#if defined( USE_POINTS_UV )
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
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,py=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
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
#endif`,yy=`#ifdef USE_MORPHTARGETS
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
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,l_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
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
}`,f_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,__=`#define MATCAP
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
}`,x_=`#define MATCAP
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
}`,v_=`#define NORMAL
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
}`,b_=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,S_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,E_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,A_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,L_=`uniform vec3 color;
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
}`,I_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:t0,alphahash_pars_fragment:n0,alphamap_fragment:i0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:a0,aomap_fragment:o0,aomap_pars_fragment:l0,batching_pars_vertex:c0,batching_vertex:h0,begin_vertex:u0,beginnormal_vertex:d0,bsdfs:f0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:x0,color_fragment:v0,color_pars_fragment:b0,color_pars_vertex:M0,color_vertex:S0,common:w0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:T0,displacementmap_pars_vertex:A0,displacementmap_vertex:C0,emissivemap_fragment:R0,emissivemap_pars_fragment:P0,colorspace_fragment:L0,colorspace_pars_fragment:I0,envmap_fragment:N0,envmap_common_pars_fragment:D0,envmap_pars_fragment:U0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:$0,envmap_vertex:F0,fog_vertex:B0,fog_pars_vertex:z0,fog_fragment:k0,fog_pars_fragment:H0,gradientmap_pars_fragment:V0,lightmap_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:j0,lights_toon_pars_fragment:Z0,lights_phong_fragment:J0,lights_phong_pars_fragment:K0,lights_physical_fragment:Q0,lights_physical_pars_fragment:ey,lights_fragment_begin:ty,lights_fragment_maps:ny,lights_fragment_end:iy,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:ay,logdepthbuf_vertex:oy,map_fragment:ly,map_pars_fragment:cy,map_particle_fragment:hy,map_particle_pars_fragment:uy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:fy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:yy,normal_fragment_begin:_y,normal_fragment_maps:xy,normal_pars_fragment:vy,normal_pars_vertex:by,normal_vertex:My,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:Ly,dithering_fragment:Iy,dithering_pars_fragment:Ny,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Fy,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:ky,skinning_pars_vertex:Hy,skinning_vertex:Vy,skinnormal_vertex:Gy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:qy,tonemapping_pars_fragment:Yy,transmission_fragment:$y,transmission_pars_fragment:jy,uv_pars_fragment:Zy,uv_pars_vertex:Jy,uv_vertex:Ky,worldpos_vertex:Qy,background_vert:e_,background_frag:t_,backgroundCube_vert:n_,backgroundCube_frag:i_,cube_vert:s_,cube_frag:r_,depth_vert:a_,depth_frag:o_,distanceRGBA_vert:l_,distanceRGBA_frag:c_,equirect_vert:h_,equirect_frag:u_,linedashed_vert:d_,linedashed_frag:f_,meshbasic_vert:p_,meshbasic_frag:m_,meshlambert_vert:g_,meshlambert_frag:y_,meshmatcap_vert:__,meshmatcap_frag:x_,meshnormal_vert:v_,meshnormal_frag:b_,meshphong_vert:M_,meshphong_frag:S_,meshphysical_vert:w_,meshphysical_frag:E_,meshtoon_vert:T_,meshtoon_frag:A_,points_vert:C_,points_frag:R_,shadow_vert:P_,shadow_frag:L_,sprite_vert:I_,sprite_frag:N_},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Sn={basic:{uniforms:bn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:bn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:bn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:bn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:bn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:bn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:bn([me.points,me.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:bn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:bn([me.common,me.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:bn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:bn([me.sprite,me.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:bn([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:bn([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Sn.physical={uniforms:bn([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var lo={r:0,b:0,g:0};function D_(n,e,t,i,s,r,o){let a=new rt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function _(p,u){let T=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),T=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===nl)?(h===void 0&&(h=new kt(new aa(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:wr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(v.colorSpace)!==Dt,(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new kt(new ns(2,2),new ei({name:"BackgroundMaterial",uniforms:wr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(lo,Rf(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function U_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(F,W,B,ne,K){let H=!1;if(o){let Q=x(ne,B,W);c!==Q&&(c=Q,m(c.object)),H=u(F,ne,B,K),H&&T(F,ne,B,K)}else{let Q=W.wireframe===!0;(c.geometry!==ne.id||c.program!==B.id||c.wireframe!==Q)&&(c.geometry=ne.id,c.program=B.id,c.wireframe=Q,H=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,j(F,W,B,ne),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function x(F,W,B){let ne=B.wireframe===!0,K=a[F.id];K===void 0&&(K={},a[F.id]=K);let H=K[W.id];H===void 0&&(H={},K[W.id]=H);let Q=H[ne];return Q===void 0&&(Q=p(f()),H[ne]=Q),Q}function p(F){let W=[],B=[],ne=[];for(let K=0;K<s;K++)W[K]=0,B[K]=0,ne[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:B,attributeDivisors:ne,object:F,attributes:{},index:null}}function u(F,W,B,ne){let K=c.attributes,H=W.attributes,Q=0,te=B.getAttributes();for(let de in te)if(te[de].location>=0){let X=K[de],se=H[de];if(se===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;Q++}return c.attributesNum!==Q||c.index!==ne}function T(F,W,B,ne){let K={},H=W.attributes,Q=0,te=B.getAttributes();for(let de in te)if(te[de].location>=0){let X=H[de];X===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(X=F.instanceColor));let se={};se.attribute=X,X&&X.data&&(se.data=X.data),K[de]=se,Q++}c.attributes=K,c.attributesNum=Q,c.index=ne}function v(){let F=c.newAttributes;for(let W=0,B=F.length;W<B;W++)F[W]=0}function P(F){U(F,0)}function U(F,W){let B=c.newAttributes,ne=c.enabledAttributes,K=c.attributeDivisors;B[F]=1,ne[F]===0&&(n.enableVertexAttribArray(F),ne[F]=1),K[F]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,W),K[F]=W)}function L(){let F=c.newAttributes,W=c.enabledAttributes;for(let B=0,ne=W.length;B<ne;B++)W[B]!==F[B]&&(n.disableVertexAttribArray(B),W[B]=0)}function D(F,W,B,ne,K,H,Q){Q===!0?n.vertexAttribIPointer(F,W,B,K,H):n.vertexAttribPointer(F,W,B,ne,K,H)}function j(F,W,B,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=ne.attributes,H=B.getAttributes(),Q=W.defaultAttributeValues;for(let te in H){let de=H[te];if(de.location>=0){let z=K[te];if(z===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){let X=z.normalized,se=z.itemSize,re=t.get(z);if(re===void 0)continue;let oe=re.buffer,Te=re.type,Be=re.bytesPerElement,ze=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||z.gpuType===_f);if(z.isInterleavedBufferAttribute){let ft=z.data,V=ft.stride,Qt=z.offset;if(ft.isInstancedInterleavedBuffer){for(let Ve=0;Ve<de.locationSize;Ve++)U(de.location+Ve,ft.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ve=0;Ve<de.locationSize;Ve++)P(de.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Ve=0;Ve<de.locationSize;Ve++)D(de.location+Ve,se/de.locationSize,Te,X,V*Be,(Qt+se/de.locationSize*Ve)*Be,ze)}else{if(z.isInstancedBufferAttribute){for(let ft=0;ft<de.locationSize;ft++)U(de.location+ft,z.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ft=0;ft<de.locationSize;ft++)P(de.location+ft);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ft=0;ft<de.locationSize;ft++)D(de.location+ft,se/de.locationSize,Te,X,se*Be,se/de.locationSize*ft*Be,ze)}}else if(Q!==void 0){let X=Q[te];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(de.location,X);break;case 3:n.vertexAttrib3fv(de.location,X);break;case 4:n.vertexAttrib4fv(de.location,X);break;default:n.vertexAttrib1fv(de.location,X)}}}}L()}function E(){ae();for(let F in a){let W=a[F];for(let B in W){let ne=W[B];for(let K in ne)_(ne[K].object),delete ne[K];delete W[B]}delete a[F]}}function R(F){if(a[F.id]===void 0)return;let W=a[F.id];for(let B in W){let ne=W[B];for(let K in ne)_(ne[K].object),delete ne[K];delete W[B]}delete a[F.id]}function Z(F){for(let W in a){let B=a[W];if(B[F.id]===void 0)continue;let ne=B[F.id];for(let K in ne)_(ne[K].object),delete ne[K];delete B[F.id]}}function ae(){ye(),h=!0,c!==l&&(c=l,m(c.object))}function ye(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ae,resetDefaultState:ye,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:P,disableUnusedAttributes:L}}function O_(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function F_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,P=o||e.has("OES_texture_float"),U=v&&P,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:P,floatVertexTextures:U,maxSamples:L}}function B_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Pi,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let T=r?0:i,v=T*4,P=u.clippingState||null;l.value=P,P=h(_,f,v,m);for(let U=0;U!==v;++U)P[U]=t[U];u.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,_){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,_!==!0||p===null){let u=m+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,P=m;v!==x;++v,P+=4)o.copy(d[v]).applyMatrix4(T,a),o.normal.toArray(p,P),p[P+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function z_(n){let e=new WeakMap;function t(o,a){return a===Uc?o.mapping=xr:a===Oc&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uc||a===Oc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Wc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Er=class extends Io{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pr=4,Cd=[.125,.215,.35,.446,.526,.582],As=20,Mc=new Er,Rd=new rt,Sc=null,wc=0,Ec=0,Es=(1+Math.sqrt(5))/2,cr=1/Es,Pd=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Es,cr),new N(0,Es,-cr),new N(cr,0,Es),new N(-cr,0,Es),new N(Es,cr,0),new N(-Es,cr,0)],Do=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,wc,Ec),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ia,format:Gn,colorSpace:Ni,depthBuffer:!1},s=Ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(r)),this._blurMaterial=H_(r,e,t)}return s}_compileMaterial(e){let t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,i,s){let a=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Rd),h.toneMapping=Ji,h.autoClear=!1;let m=new Kt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new kt(new aa,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Rd),x=!0);for(let u=0;u<6;u++){let T=u%3;T===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):T===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;co(s,T*v,u>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===xr||e.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pd[(s-1)%Pd.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new kt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*As-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):As;p>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${As}`);let u=[],T=0;for(let D=0;D<As;++D){let j=D/x,E=Math.exp(-j*j/2);u.push(E),D===0?T+=E:D<p&&(T+=2*E)}for(let D=0;D<u.length;D++)u[D]=u[D]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;let P=this._sizeLods[s],U=3*P*(s>v-pr?s-v+pr:0),L=4*(this._cubeSize-P);co(t,U,L,3*P,2*P),l.setRenderTarget(t),l.render(d,Mc)}};function k_(n){let e=[],t=[],i=[],s=n,r=n-pr+1+Cd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-pr?l=Cd[o-n+pr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,x=3,p=2,u=1,T=new Float32Array(x*_*m),v=new Float32Array(p*_*m),P=new Float32Array(u*_*m);for(let L=0;L<m;L++){let D=L%3*2/3-1,j=L>2?0:-1,E=[D,j,0,D+2/3,j,0,D+2/3,j+1,0,D,j,0,D+2/3,j+1,0,D,j+1,0];T.set(E,x*_*L),v.set(f,p*_*L);let R=[L,L,L,L,L,L];P.set(R,u*_*L)}let U=new Ln;U.setAttribute("position",new On(T,x)),U.setAttribute("uv",new On(v,p)),U.setAttribute("faceIndex",new On(P,u)),e.push(U),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ld(n,e,t){let i=new Di(n,e,t);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function H_(n,e,t){let i=new Float32Array(As),s=new N(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Id(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Nd(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function V_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Uc||l===Oc,h=l===xr||l===vr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Do(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Do(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function G_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function W_(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)e.update(f[_],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let _ in m){let x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,_=d.attributes.position,x=0;if(m!==null){let T=m.array;x=m.version;for(let v=0,P=T.length;v<P;v+=3){let U=T[v+0],L=T[v+1],D=T[v+2];f.push(U,L,L,D,D,U)}}else if(_!==void 0){let T=_.array;x=_.version;for(let v=0,P=T.length/3-1;v<P;v+=3){let U=v+0,L=v+1,D=v+2;f.push(U,L,L,D,D,U)}}else return;let p=new(Af(f)?Lo:Po)(f,1);p.version=x;let u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function X_(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function d(m,_,x){if(x===0)return;let p,u;if(s)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,m*l,x),t.update(_,r,x)}function f(m,_,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,x);let u=0;for(let T=0;T<x;T++)u+=_[T];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function q_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Y_(n,e){return n[0]-e[0]}function $_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function j_(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==_){let F=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",F)};x!==void 0&&x.texture.dispose();let T=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],j=0;T===!0&&(j=1),v===!0&&(j=2),P===!0&&(j=3);let E=h.attributes.position.count*j,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let Z=new Float32Array(E*R*4*_),ae=new Co(Z,E,R,_);ae.type=Li,ae.needsUpdate=!0;let ye=j*4;for(let W=0;W<_;W++){let B=U[W],ne=L[W],K=D[W],H=E*R*4*W;for(let Q=0;Q<B.count;Q++){let te=Q*ye;T===!0&&(o.fromBufferAttribute(B,Q),Z[H+te+0]=o.x,Z[H+te+1]=o.y,Z[H+te+2]=o.z,Z[H+te+3]=0),v===!0&&(o.fromBufferAttribute(ne,Q),Z[H+te+4]=o.x,Z[H+te+5]=o.y,Z[H+te+6]=o.z,Z[H+te+7]=0),P===!0&&(o.fromBufferAttribute(K,Q),Z[H+te+8]=o.x,Z[H+te+9]=o.y,Z[H+te+10]=o.z,Z[H+te+11]=K.itemSize===4?o.w:1)}}x={count:_,texture:ae,size:new Je(E,R)},r.set(h,x),h.addEventListener("dispose",F)}let p=0;for(let T=0;T<f.length;T++)p+=f[T];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,_=i[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];i[h.id]=_}for(let v=0;v<m;v++){let P=_[v];P[0]=v,P[1]=f[v]}_.sort($_);for(let v=0;v<8;v++)v<m&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Y_);let x=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let P=a[v],U=P[0],L=P[1];U!==Number.MAX_SAFE_INTEGER&&L?(x&&h.getAttribute("morphTarget"+v)!==x[U]&&h.setAttribute("morphTarget"+v,x[U]),p&&h.getAttribute("morphNormal"+v)!==p[U]&&h.setAttribute("morphNormal"+v,p[U]),s[v]=L,u+=L):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let T=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Z_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Uo=class extends Pn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ps,h!==Ps&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ps&&(i=ji),i===void 0&&h===br&&(i=Rs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lf=new Pn,If=new Uo(1,1);If.compareFunction=Tf;var Nf=new Co,Df=new Vc,Uf=new No,Dd=[],Ud=[],Od=new Float32Array(16),Fd=new Float32Array(9),Bd=new Float32Array(4);function Ir(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Dd[s];if(r===void 0&&(r=new Float32Array(s),Dd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rl(n,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function J_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function tx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),$t(t,i)}}function nx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Fd.set(i),n.uniformMatrix3fv(this.addr,!1,Fd),$t(t,i)}}function ix(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Od.set(i),n.uniformMatrix4fv(this.addr,!1,Od),$t(t,i)}}function sx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function lx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function dx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?If:Lf;t.setTexture2D(e||r,s)}function fx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Df,s)}function px(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uf,s)}function mx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nf,s)}function gx(n){switch(n){case 5126:return J_;case 35664:return K_;case 35665:return Q_;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function yx(n,e){n.uniform1fv(this.addr,e)}function _x(n,e){let t=Ir(e,this.size,2);n.uniform2fv(this.addr,t)}function xx(n,e){let t=Ir(e,this.size,3);n.uniform3fv(this.addr,t)}function vx(n,e){let t=Ir(e,this.size,4);n.uniform4fv(this.addr,t)}function bx(n,e){let t=Ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mx(n,e){let t=Ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sx(n,e){let t=Ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wx(n,e){n.uniform1iv(this.addr,e)}function Ex(n,e){n.uniform2iv(this.addr,e)}function Tx(n,e){n.uniform3iv(this.addr,e)}function Ax(n,e){n.uniform4iv(this.addr,e)}function Cx(n,e){n.uniform1uiv(this.addr,e)}function Rx(n,e){n.uniform2uiv(this.addr,e)}function Px(n,e){n.uniform3uiv(this.addr,e)}function Lx(n,e){n.uniform4uiv(this.addr,e)}function Ix(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Lf,r[o])}function Nx(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Df,r[o])}function Dx(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Uf,r[o])}function Ux(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nf,r[o])}function Ox(n){switch(n){case 5126:return yx;case 35664:return _x;case 35665:return xx;case 35666:return vx;case 35674:return bx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ux}}var Xc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gx(t.type)}},qc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ox(t.type)}},Yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function zd(n,e){n.seq.push(e),n.map[e.id]=e}function Fx(n,e,t){let i=n.name,s=i.length;for(Tc.lastIndex=0;;){let r=Tc.exec(i),o=Tc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zd(t,c===void 0?new Xc(a,n,e):new qc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Yc(a),zd(t,d)),t=d}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Fx(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function kd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Bx=37297,zx=0;function kx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Hx(n){let e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(n),i;switch(e===t?i="":e===So&&t===Mo?i="LinearDisplayP3ToLinearSRGB":e===Mo&&t===So&&(i="LinearSRGBToLinearDisplayP3"),n){case Ni:case il:return[i,"LinearTransferOETF"];case zt:case gh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+kx(n.getShaderSource(e),o)}else return s}function Vx(n,e){let t=Hx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gx(n,e){let t;switch(e){case Ym:t="Linear";break;case $m:t="Reinhard";break;case jm:t="OptimizedCineon";break;case Zm:t="ACESFilmic";break;case Km:t="AgX";break;case Jm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function Xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mr).join(`
`)}function qx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function Vd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(n){return n.replace($x,Zx)}var jx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zx(n,e){let t=ht[e];if(t===void 0){let i=jx.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $c(t)}var Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(n){return n.replace(Jx,Kx)}function Kx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case vr:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function nv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case Xm:e="ENVMAP_BLENDING_MIX";break;case qm:e="ENVMAP_BLENDING_ADD";break}return e}function iv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Qx(t),c=ev(t),h=tv(t),d=nv(t),f=iv(t),m=t.isWebGL2?"":Wx(t),_=Xx(t),x=qx(r),p=s.createProgram(),u,T,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),T.length>0&&(T+=`
`)):(u=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),T=[m,Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=$c(o),o=Vd(o,t),o=Gd(o,t),a=$c(a),a=Vd(a,t),a=Gd(a,t),o=Wd(o),a=Wd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let P=v+u+o,U=v+T+a,L=kd(s,s.VERTEX_SHADER,P),D=kd(s,s.FRAGMENT_SHADER,U);s.attachShader(p,L),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function j(ae){if(n.debug.checkShaderErrors){let ye=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(D).trim(),B=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,L,D);else{let K=Hd(s,L,"vertex"),H=Hd(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ye+`
`+K+`
`+H)}else ye!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ye):(F===""||W==="")&&(ne=!1);ne&&(ae.diagnostics={runnable:B,programLog:ye,vertexShader:{log:F,prefix:u},fragmentShader:{log:W,prefix:T}})}s.deleteShader(L),s.deleteShader(D),E=new _r(s,p),R=Yx(s,p)}let E;this.getUniforms=function(){return E===void 0&&j(this),E};let R;this.getAttributes=function(){return R===void 0&&j(this),R};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(p,Bx)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=D,this}var rv=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zc(e),t.set(e,i)),i}},Zc=class{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}};function av(n,e,t,i,s,r,o){let a=new ra,l=new jc,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,R,Z,ae,ye){let F=ae.fog,W=ye.geometry,B=E.isMeshStandardMaterial?ae.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||B),K=ne&&ne.mapping===nl?ne.image.height:null,H=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=Q!==void 0?Q.length:0,de=0;W.morphAttributes.position!==void 0&&(de=1),W.morphAttributes.normal!==void 0&&(de=2),W.morphAttributes.color!==void 0&&(de=3);let z,X,se,re;if(H){let jt=Sn[H];z=jt.vertexShader,X=jt.fragmentShader}else z=E.vertexShader,X=E.fragmentShader,l.update(E),se=l.getVertexShaderID(E),re=l.getFragmentShaderID(E);let oe=n.getRenderTarget(),Te=ye.isInstancedMesh===!0,Be=ye.isBatchedMesh===!0,ze=!!E.map,ft=!!E.matcap,V=!!ne,Qt=!!E.aoMap,Ve=!!E.lightMap,et=!!E.bumpMap,Le=!!E.normalMap,Rt=!!E.displacementMap,ot=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,q=E.anisotropy>0,fe=E.clearcoat>0,he=E.iridescence>0,pe=E.sheen>0,De=E.transmission>0,Me=q&&!!E.anisotropyMap,Ce=fe&&!!E.clearcoatMap,We=fe&&!!E.clearcoatNormalMap,lt=fe&&!!E.clearcoatRoughnessMap,ue=he&&!!E.iridescenceMap,bt=he&&!!E.iridescenceThicknessMap,ut=pe&&!!E.sheenColorMap,Ze=pe&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Re=!!E.specularColorMap,it=!!E.specularIntensityMap,xt=De&&!!E.transmissionMap,It=De&&!!E.thicknessMap,ct=!!E.gradientMap,_e=!!E.alphaMap,O=E.alphaTest>0,ve=!!E.alphaHash,be=!!E.extensions,Ye=!!W.attributes.uv1,Ge=!!W.attributes.uv2,St=!!W.attributes.uv3,Et=Ji;return E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Et=n.toneMapping),{isWebGL2:h,shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:X,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Be,instancing:Te,instancingColor:Te&&ye.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ni,map:ze,matcap:ft,envMap:V,envMapMode:V&&ne.mapping,envMapCubeUVHeight:K,aoMap:Qt,lightMap:Ve,bumpMap:et,normalMap:Le,displacementMap:f&&Rt,emissiveMap:ot,normalMapObjectSpace:Le&&E.normalMapType===dg,normalMapTangentSpace:Le&&E.normalMapType===mh,metalnessMap:C,roughnessMap:S,anisotropy:q,anisotropyMap:Me,clearcoat:fe,clearcoatMap:Ce,clearcoatNormalMap:We,clearcoatRoughnessMap:lt,iridescence:he,iridescenceMap:ue,iridescenceThicknessMap:bt,sheen:pe,sheenColorMap:ut,sheenRoughnessMap:Ze,specularMap:ke,specularColorMap:Re,specularIntensityMap:it,transmission:De,transmissionMap:xt,thicknessMap:It,gradientMap:ct,opaque:E.transparent===!1&&E.blending===gr,alphaMap:_e,alphaTest:O,alphaHash:ve,combine:E.combine,mapUv:ze&&x(E.map.channel),aoMapUv:Qt&&x(E.aoMap.channel),lightMapUv:Ve&&x(E.lightMap.channel),bumpMapUv:et&&x(E.bumpMap.channel),normalMapUv:Le&&x(E.normalMap.channel),displacementMapUv:Rt&&x(E.displacementMap.channel),emissiveMapUv:ot&&x(E.emissiveMap.channel),metalnessMapUv:C&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:Me&&x(E.anisotropyMap.channel),clearcoatMapUv:Ce&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&x(E.sheenRoughnessMap.channel),specularMapUv:ke&&x(E.specularMap.channel),specularColorMapUv:Re&&x(E.specularColorMap.channel),specularIntensityMapUv:it&&x(E.specularIntensityMap.channel),transmissionMapUv:xt&&x(E.transmissionMap.channel),thicknessMapUv:It&&x(E.thicknessMap.channel),alphaMapUv:_e&&x(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Le||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ye,vertexUv2s:Ge,vertexUv3s:St,pointsUvs:ye.isPoints===!0&&!!W.attributes.uv&&(ze||_e),fog:!!F,useFog:E.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ye.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:be&&E.extensions.derivatives===!0,extensionFragDepth:be&&E.extensions.fragDepth===!0,extensionDrawBuffers:be&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let Z in E.defines)R.push(Z),R.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(T(R,E),v(R,E),R.push(n.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function T(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function v(E,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),E.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function P(E){let R=_[E.type],Z;if(R){let ae=Sn[R];Z=sl.clone(ae.uniforms)}else Z=E.uniforms;return Z}function U(E,R){let Z;for(let ae=0,ye=c.length;ae<ye;ae++){let F=c[ae];if(F.cacheKey===R){Z=F,++Z.usedTimes;break}}return Z===void 0&&(Z=new sv(n,R,E,r),c.push(Z)),Z}function L(E){if(--E.usedTimes===0){let R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function D(E){l.remove(E)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:P,acquireProgram:U,releaseProgram:L,releaseShaderCache:D,programs:c,dispose:j}}function ov(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function lv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,m,_,x,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function a(d,f,m,_,x,p){let u=o(d,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,f,m,_,x,p){let u=o(d,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||lv),i.length>1&&i.sort(f||qd),s.length>1&&s.sort(f||qd)}function h(){for(let d=e,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Yd,n.set(i,[o])):s>=r.length?(o=new Yd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new rt};break;case"SpotLight":t={position:new N,direction:new N,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function uv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var dv=0;function fv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pv(n,e){let t=new hv,i=uv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,o=new at,a=new at;function l(h,d){let f=0,m=0,_=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let x=0,p=0,u=0,T=0,v=0,P=0,U=0,L=0,D=0,j=0,E=0;h.sort(fv);let R=d===!0?Math.PI:1;for(let ae=0,ye=h.length;ae<ye;ae++){let F=h[ae],W=F.color,B=F.intensity,ne=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=W.r*B*R,m+=W.g*B*R,_+=W.b*B*R;else if(F.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(F.sh.coefficients[H],B);E++}else if(F.isDirectionalLight){let H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){let Q=F.shadow,te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[x]=te,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=F.shadow.matrix,P++}s.directional[x]=H,x++}else if(F.isSpotLight){let H=t.get(F);H.position.setFromMatrixPosition(F.matrixWorld),H.color.copy(W).multiplyScalar(B*R),H.distance=ne,H.coneCos=Math.cos(F.angle),H.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),H.decay=F.decay,s.spot[u]=H;let Q=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,Q.updateMatrices(F),F.castShadow&&j++),s.spotLightMatrix[u]=Q.matrix,F.castShadow){let te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[u]=te,s.spotShadowMap[u]=K,L++}u++}else if(F.isRectAreaLight){let H=t.get(F);H.color.copy(W).multiplyScalar(B),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),s.rectArea[T]=H,T++}else if(F.isPointLight){let H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*R),H.distance=F.distance,H.decay=F.decay,F.castShadow){let Q=F.shadow,te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=K,s.pointShadowMatrix[p]=F.shadow.matrix,U++}s.point[p]=H,p++}else if(F.isHemisphereLight){let H=t.get(F);H.skyColor.copy(F.color).multiplyScalar(B*R),H.groundColor.copy(F.groundColor).multiplyScalar(B*R),s.hemi[v]=H,v++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;let Z=s.hash;(Z.directionalLength!==x||Z.pointLength!==p||Z.spotLength!==u||Z.rectAreaLength!==T||Z.hemiLength!==v||Z.numDirectionalShadows!==P||Z.numPointShadows!==U||Z.numSpotShadows!==L||Z.numSpotMaps!==D||Z.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=T,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+D-j,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=E,Z.directionalLength=x,Z.pointLength=p,Z.spotLength=u,Z.rectAreaLength=T,Z.hemiLength=v,Z.numDirectionalShadows=P,Z.numPointShadows=U,Z.numSpotShadows=L,Z.numSpotMaps=D,Z.numLightProbes=E,s.version=dv++)}function c(h,d){let f=0,m=0,_=0,x=0,p=0,u=d.matrixWorldInverse;for(let T=0,v=h.length;T<v;T++){let P=h[T];if(P.isDirectionalLight){let U=s.directional[f];U.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(u),f++}else if(P.isSpotLight){let U=s.spot[_];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(u),U.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(u),_++}else if(P.isRectAreaLight){let U=s.rectArea[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(u),a.identity(),o.copy(P.matrixWorld),o.premultiply(u),a.extractRotation(o),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),x++}else if(P.isPointLight){let U=s.point[m];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(u),m++}else if(P.isHemisphereLight){let U=s.hemi[p];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function $d(n,e){let t=new pv(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mv(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new $d(n,e),t.set(r,[l])):o>=a.length?(l=new $d(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Jc=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kc=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
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
}`;function _v(n,e,t){let i=new oa,s=new Je,r=new Je,o=new _t,a=new Jc({depthPacking:ug}),l=new Kc,c={},h=t.maxTextureSize,d={[Fn]:nn,[nn]:Fn,[wn]:wn},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:gv,fragmentShader:yv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ln;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let u=this.type;this.render=function(L,D,j){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;let E=n.getRenderTarget(),R=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Zi),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let ye=u!==Ri&&this.type===Ri,F=u===Ri&&this.type!==Ri;for(let W=0,B=L.length;W<B;W++){let ne=L[W],K=ne.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let H=K.getFrameExtents();if(s.multiply(H),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,K.mapSize.y=r.y)),K.map===null||ye===!0||F===!0){let te=this.type!==Ri?{minFilter:tn,magFilter:tn}:{};K.map!==null&&K.map.dispose(),K.map=new Di(s.x,s.y,te),K.map.texture.name=ne.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();let Q=K.getViewportCount();for(let te=0;te<Q;te++){let de=K.getViewport(te);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),ae.viewport(o),K.updateMatrices(ne,te),i=K.getFrustum(),P(D,j,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===Ri&&T(K,j),K.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(E,R,Z)};function T(L,D){let j=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Di(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,j,f,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,j,m,x,null)}function v(L,D,j,E){let R=null,Z=j.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Z!==void 0)R=Z;else if(R=j.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let ae=R.uuid,ye=D.uuid,F=c[ae];F===void 0&&(F={},c[ae]=F);let W=F[ye];W===void 0&&(W=R.clone(),F[ye]=W,D.addEventListener("dispose",U)),R=W}if(R.visible=D.visible,R.wireframe=D.wireframe,E===Ri?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:d[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ae=n.properties.get(R);ae.light=j}return R}function P(L,D,j,E,R){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Ri)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld);let ye=e.update(L),F=L.material;if(Array.isArray(F)){let W=ye.groups;for(let B=0,ne=W.length;B<ne;B++){let K=W[B],H=F[K.materialIndex];if(H&&H.visible){let Q=v(L,H,E,R);L.onBeforeShadow(n,L,D,j,ye,Q,K),n.renderBufferDirect(j,null,ye,Q,L,K),L.onAfterShadow(n,L,D,j,ye,Q,K)}}}else if(F.visible){let W=v(L,F,E,R);L.onBeforeShadow(n,L,D,j,ye,W,null),n.renderBufferDirect(j,null,ye,W,L,null),L.onAfterShadow(n,L,D,j,ye,W,null)}}let ae=L.children;for(let ye=0,F=ae.length;ye<F;ye++)P(ae[ye],D,j,E,R)}function U(L){L.target.removeEventListener("dispose",U);for(let j in c){let E=c[j],R=L.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function xv(n,e,t){let i=t.isWebGL2;function s(){let O=!1,ve=new _t,be=null,Ye=new _t(0,0,0,0);return{setMask:function(Ge){be!==Ge&&!O&&(n.colorMask(Ge,Ge,Ge,Ge),be=Ge)},setLocked:function(Ge){O=Ge},setClear:function(Ge,St,Et,Mt,jt){jt===!0&&(Ge*=Mt,St*=Mt,Et*=Mt),ve.set(Ge,St,Et,Mt),Ye.equals(ve)===!1&&(n.clearColor(Ge,St,Et,Mt),Ye.copy(ve))},reset:function(){O=!1,be=null,Ye.set(-1,0,0,0)}}}function r(){let O=!1,ve=null,be=null,Ye=null;return{setTest:function(Ge){Ge?Be(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(Ge){ve!==Ge&&!O&&(n.depthMask(Ge),ve=Ge)},setFunc:function(Ge){if(be!==Ge){switch(Ge){case Bm:n.depthFunc(n.NEVER);break;case zm:n.depthFunc(n.ALWAYS);break;case km:n.depthFunc(n.LESS);break;case _o:n.depthFunc(n.LEQUAL);break;case Hm:n.depthFunc(n.EQUAL);break;case Vm:n.depthFunc(n.GEQUAL);break;case Gm:n.depthFunc(n.GREATER);break;case Wm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Ge}},setLocked:function(Ge){O=Ge},setClear:function(Ge){Ye!==Ge&&(n.clearDepth(Ge),Ye=Ge)},reset:function(){O=!1,ve=null,be=null,Ye=null}}}function o(){let O=!1,ve=null,be=null,Ye=null,Ge=null,St=null,Et=null,Mt=null,jt=null;return{setTest:function(Tt){O||(Tt?Be(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(Tt){ve!==Tt&&!O&&(n.stencilMask(Tt),ve=Tt)},setFunc:function(Tt,en,kn){(be!==Tt||Ye!==en||Ge!==kn)&&(n.stencilFunc(Tt,en,kn),be=Tt,Ye=en,Ge=kn)},setOp:function(Tt,en,kn){(St!==Tt||Et!==en||Mt!==kn)&&(n.stencilOp(Tt,en,kn),St=Tt,Et=en,Mt=kn)},setLocked:function(Tt){O=Tt},setClear:function(Tt){jt!==Tt&&(n.clearStencil(Tt),jt=Tt)},reset:function(){O=!1,ve=null,be=null,Ye=null,Ge=null,St=null,Et=null,Mt=null,jt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},_=new WeakMap,x=[],p=null,u=!1,T=null,v=null,P=null,U=null,L=null,D=null,j=null,E=new rt(0,0,0),R=0,Z=!1,ae=null,ye=null,F=null,W=null,B=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,H=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=H>=2);let te=null,de={},z=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),se=new _t().fromArray(z),re=new _t().fromArray(X);function oe(O,ve,be,Ye){let Ge=new Uint8Array(4),St=n.createTexture();n.bindTexture(O,St),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<be;Et++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Ye,0,n.RGBA,n.UNSIGNED_BYTE,Ge):n.texImage2D(ve+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ge);return St}let Te={};Te[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(n.DEPTH_TEST),l.setFunc(_o),ot(!1),C(Au),Be(n.CULL_FACE),Le(Zi);function Be(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function ze(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function ft(O,ve){return m[O]!==ve?(n.bindFramebuffer(O,ve),m[O]=ve,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function V(O,ve){let be=x,Ye=!1;if(O)if(be=_.get(ve),be===void 0&&(be=[],_.set(ve,be)),O.isWebGLMultipleRenderTargets){let Ge=O.texture;if(be.length!==Ge.length||be[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Et=Ge.length;St<Et;St++)be[St]=n.COLOR_ATTACHMENT0+St;be.length=Ge.length,Ye=!0}}else be[0]!==n.COLOR_ATTACHMENT0&&(be[0]=n.COLOR_ATTACHMENT0,Ye=!0);else be[0]!==n.BACK&&(be[0]=n.BACK,Ye=!0);Ye&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function Qt(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let Ve={[Ts]:n.FUNC_ADD,[Sm]:n.FUNC_SUBTRACT,[wm]:n.FUNC_REVERSE_SUBTRACT};if(i)Ve[Lu]=n.MIN,Ve[Iu]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Ve[Lu]=O.MIN_EXT,Ve[Iu]=O.MAX_EXT)}let et={[Em]:n.ZERO,[Tm]:n.ONE,[Am]:n.SRC_COLOR,[Nc]:n.SRC_ALPHA,[Nm]:n.SRC_ALPHA_SATURATE,[Lm]:n.DST_COLOR,[Rm]:n.DST_ALPHA,[Cm]:n.ONE_MINUS_SRC_COLOR,[Dc]:n.ONE_MINUS_SRC_ALPHA,[Im]:n.ONE_MINUS_DST_COLOR,[Pm]:n.ONE_MINUS_DST_ALPHA,[Dm]:n.CONSTANT_COLOR,[Um]:n.ONE_MINUS_CONSTANT_COLOR,[Om]:n.CONSTANT_ALPHA,[Fm]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(O,ve,be,Ye,Ge,St,Et,Mt,jt,Tt){if(O===Zi){u===!0&&(ze(n.BLEND),u=!1);return}if(u===!1&&(Be(n.BLEND),u=!0),O!==Mm){if(O!==T||Tt!==Z){if((v!==Ts||L!==Ts)&&(n.blendEquation(n.FUNC_ADD),v=Ts,L=Ts),Tt)switch(O){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}P=null,U=null,D=null,j=null,E.set(0,0,0),R=0,T=O,Z=Tt}return}Ge=Ge||ve,St=St||be,Et=Et||Ye,(ve!==v||Ge!==L)&&(n.blendEquationSeparate(Ve[ve],Ve[Ge]),v=ve,L=Ge),(be!==P||Ye!==U||St!==D||Et!==j)&&(n.blendFuncSeparate(et[be],et[Ye],et[St],et[Et]),P=be,U=Ye,D=St,j=Et),(Mt.equals(E)===!1||jt!==R)&&(n.blendColor(Mt.r,Mt.g,Mt.b,jt),E.copy(Mt),R=jt),T=O,Z=!1}function Rt(O,ve){O.side===wn?ze(n.CULL_FACE):Be(n.CULL_FACE);let be=O.side===nn;ve&&(be=!be),ot(be),O.blending===gr&&O.transparent===!1?Le(Zi):Le(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Ye=O.stencilWrite;c.setTest(Ye),Ye&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(O){ae!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),ae=O)}function C(O){O!==xm?(Be(n.CULL_FACE),O!==ye&&(O===Au?n.cullFace(n.BACK):O===vm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),ye=O}function S(O){O!==F&&(K&&n.lineWidth(O),F=O)}function q(O,ve,be){O?(Be(n.POLYGON_OFFSET_FILL),(W!==ve||B!==be)&&(n.polygonOffset(ve,be),W=ve,B=be)):ze(n.POLYGON_OFFSET_FILL)}function fe(O){O?Be(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function he(O){O===void 0&&(O=n.TEXTURE0+ne-1),te!==O&&(n.activeTexture(O),te=O)}function pe(O,ve,be){be===void 0&&(te===null?be=n.TEXTURE0+ne-1:be=te);let Ye=de[be];Ye===void 0&&(Ye={type:void 0,texture:void 0},de[be]=Ye),(Ye.type!==O||Ye.texture!==ve)&&(te!==be&&(n.activeTexture(be),te=be),n.bindTexture(O,ve||Te[O]),Ye.type=O,Ye.texture=ve)}function De(){let O=de[te];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function xt(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function It(O,ve){let be=d.get(ve);be===void 0&&(be=new WeakMap,d.set(ve,be));let Ye=be.get(O);Ye===void 0&&(Ye=n.getUniformBlockIndex(ve,O.name),be.set(O,Ye))}function ct(O,ve){let Ye=d.get(ve).get(O);h.get(ve)!==Ye&&(n.uniformBlockBinding(ve,Ye,O.__bindingPointIndex),h.set(ve,Ye))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},te=null,de={},m={},_=new WeakMap,x=[],p=null,u=!1,T=null,v=null,P=null,U=null,L=null,D=null,j=null,E=new rt(0,0,0),R=0,Z=!1,ae=null,ye=null,F=null,W=null,B=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Be,disable:ze,bindFramebuffer:ft,drawBuffers:V,useProgram:Qt,setBlending:Le,setMaterial:Rt,setFlipSided:ot,setCullFace:C,setLineWidth:S,setPolygonOffset:q,setScissorTest:fe,activeTexture:he,bindTexture:pe,unbindTexture:De,compressedTexImage2D:Me,compressedTexImage3D:Ce,texImage2D:ke,texImage3D:Re,updateUBOMapping:It,uniformBlockBinding:ct,texStorage2D:ut,texStorage3D:Ze,texSubImage2D:We,texSubImage3D:lt,compressedTexSubImage2D:ue,compressedTexSubImage3D:bt,scissor:it,viewport:xt,reset:_e}}function vv(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return m?new OffscreenCanvas(C,S):sa("canvas")}function x(C,S,q,fe){let he=1;if((C.width>fe||C.height>fe)&&(he=fe/Math.max(C.width,C.height)),he<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let pe=S?Eo:Math.floor,De=pe(he*C.width),Me=pe(he*C.height);d===void 0&&(d=_(De,Me));let Ce=q?_(De,Me):d;return Ce.width=De,Ce.height=Me,Ce.getContext("2d").drawImage(C,0,0,De,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+De+"x"+Me+")."),Ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return kc(C.width)&&kc(C.height)}function u(C){return a?!1:C.wrapS!==pn||C.wrapT!==pn||C.minFilter!==tn&&C.minFilter!==Mn}function T(C,S){return C.generateMipmaps&&S&&C.minFilter!==tn&&C.minFilter!==Mn}function v(C){n.generateMipmap(C)}function P(C,S,q,fe,he=!1){if(a===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=S;if(S===n.RED&&(q===n.FLOAT&&(pe=n.R32F),q===n.HALF_FLOAT&&(pe=n.R16F),q===n.UNSIGNED_BYTE&&(pe=n.R8)),S===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(pe=n.R8UI),q===n.UNSIGNED_SHORT&&(pe=n.R16UI),q===n.UNSIGNED_INT&&(pe=n.R32UI),q===n.BYTE&&(pe=n.R8I),q===n.SHORT&&(pe=n.R16I),q===n.INT&&(pe=n.R32I)),S===n.RG&&(q===n.FLOAT&&(pe=n.RG32F),q===n.HALF_FLOAT&&(pe=n.RG16F),q===n.UNSIGNED_BYTE&&(pe=n.RG8)),S===n.RGBA){let De=he?bo:Ct.getTransfer(fe);q===n.FLOAT&&(pe=n.RGBA32F),q===n.HALF_FLOAT&&(pe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(pe=De===Dt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function U(C,S,q){return T(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function L(C){return C===tn||C===Du||C===Kl?n.NEAREST:n.LINEAR}function D(C){let S=C.target;S.removeEventListener("dispose",D),E(S),S.isVideoTexture&&h.delete(S)}function j(C){let S=C.target;S.removeEventListener("dispose",j),Z(S)}function E(C){let S=i.get(C);if(S.__webglInit===void 0)return;let q=C.source,fe=f.get(q);if(fe){let he=fe[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&R(C),Object.keys(fe).length===0&&f.delete(q)}i.remove(C)}function R(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let q=C.source,fe=f.get(q);delete fe[S.__cacheKey],o.memory.textures--}function Z(C){let S=C.texture,q=i.get(C),fe=i.get(S);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(q.__webglFramebuffer[he]))for(let pe=0;pe<q.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer(q.__webglFramebuffer[he][pe]);else n.deleteFramebuffer(q.__webglFramebuffer[he]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[he])}else{if(Array.isArray(q.__webglFramebuffer))for(let he=0;he<q.__webglFramebuffer.length;he++)n.deleteFramebuffer(q.__webglFramebuffer[he]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let he=0;he<q.__webglColorRenderbuffer.length;he++)q.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[he]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let he=0,pe=S.length;he<pe;he++){let De=i.get(S[he]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(S[he])}i.remove(S),i.remove(C)}let ae=0;function ye(){ae=0}function F(){let C=ae;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ae+=1,C}function W(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function B(C,S){let q=i.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let fe=C.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(q,C,S);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+S)}function ne(C,S){let q=i.get(C);if(C.version>0&&q.__version!==C.version){se(q,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+S)}function K(C,S){let q=i.get(C);if(C.version>0&&q.__version!==C.version){se(q,C,S);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+S)}function H(C,S){let q=i.get(C);if(C.version>0&&q.__version!==C.version){re(q,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+S)}let Q={[Qi]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},te={[tn]:n.NEAREST,[Du]:n.NEAREST_MIPMAP_NEAREST,[Kl]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[eg]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},de={[fg]:n.NEVER,[xg]:n.ALWAYS,[pg]:n.LESS,[Tf]:n.LEQUAL,[mg]:n.EQUAL,[_g]:n.GEQUAL,[gg]:n.GREATER,[yg]:n.NOTEQUAL};function z(C,S,q){if(q?(n.texParameteri(C,n.TEXTURE_WRAP_S,Q[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Q[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Q[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,te[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,te[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==pn||S.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,L(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,L(S.minFilter)),S.minFilter!==tn&&S.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==Kl&&S.minFilter!==es||S.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function X(C,S){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",D));let fe=S.source,he=f.get(fe);he===void 0&&(he={},f.set(fe,he));let pe=W(S);if(pe!==C.__cacheKey){he[pe]===void 0&&(he[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[pe].usedTimes++;let De=he[C.__cacheKey];De!==void 0&&(he[C.__cacheKey].usedTimes--,De.usedTimes===0&&R(S)),C.__cacheKey=pe,C.__webglTexture=he[pe].texture}return q}function se(C,S,q){let fe=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=n.TEXTURE_3D);let he=X(C,S),pe=S.source;t.bindTexture(fe,C.__webglTexture,n.TEXTURE0+q);let De=i.get(pe);if(pe.version!==De.__version||he===!0){t.activeTexture(n.TEXTURE0+q);let Me=Ct.getPrimaries(Ct.workingColorSpace),Ce=S.colorSpace===Wn?null:Ct.getPrimaries(S.colorSpace),We=S.colorSpace===Wn||Me===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let lt=u(S)&&p(S.image)===!1,ue=x(S.image,lt,!1,s.maxTextureSize);ue=ot(S,ue);let bt=p(ue)||a,ut=r.convert(S.format,S.colorSpace),Ze=r.convert(S.type),ke=P(S.internalFormat,ut,Ze,S.colorSpace,S.isVideoTexture);z(fe,S,bt);let Re,it=S.mipmaps,xt=a&&S.isVideoTexture!==!0&&ke!==wf,It=De.__version===void 0||he===!0,ct=U(S,ue,bt);if(S.isDepthTexture)ke=n.DEPTH_COMPONENT,a?S.type===Li?ke=n.DEPTH_COMPONENT32F:S.type===ji?ke=n.DEPTH_COMPONENT24:S.type===Rs?ke=n.DEPTH24_STENCIL8:ke=n.DEPTH_COMPONENT16:S.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ps&&ke===n.DEPTH_COMPONENT&&S.type!==ph&&S.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ji,Ze=r.convert(S.type)),S.format===br&&ke===n.DEPTH_COMPONENT&&(ke=n.DEPTH_STENCIL,S.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Rs,Ze=r.convert(S.type))),It&&(xt?t.texStorage2D(n.TEXTURE_2D,1,ke,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ke,ue.width,ue.height,0,ut,Ze,null));else if(S.isDataTexture)if(it.length>0&&bt){xt&&It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,it[0].width,it[0].height);for(let _e=0,O=it.length;_e<O;_e++)Re=it[_e],xt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ut,Ze,Re.data):t.texImage2D(n.TEXTURE_2D,_e,ke,Re.width,Re.height,0,ut,Ze,Re.data);S.generateMipmaps=!1}else xt?(It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ut,Ze,ue.data)):t.texImage2D(n.TEXTURE_2D,0,ke,ue.width,ue.height,0,ut,Ze,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ke,it[0].width,it[0].height,ue.depth);for(let _e=0,O=it.length;_e<O;_e++)Re=it[_e],S.format!==Gn?ut!==null?xt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,ue.depth,ut,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,ke,Re.width,Re.height,ue.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,ue.depth,ut,Ze,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,ke,Re.width,Re.height,ue.depth,0,ut,Ze,Re.data)}else{xt&&It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,it[0].width,it[0].height);for(let _e=0,O=it.length;_e<O;_e++)Re=it[_e],S.format!==Gn?ut!==null?xt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ut,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ut,Ze,Re.data):t.texImage2D(n.TEXTURE_2D,_e,ke,Re.width,Re.height,0,ut,Ze,Re.data)}else if(S.isDataArrayTexture)xt?(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ke,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ut,Ze,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,ut,Ze,ue.data);else if(S.isData3DTexture)xt?(It&&t.texStorage3D(n.TEXTURE_3D,ct,ke,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ut,Ze,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,ut,Ze,ue.data);else if(S.isFramebufferTexture){if(It)if(xt)t.texStorage2D(n.TEXTURE_2D,ct,ke,ue.width,ue.height);else{let _e=ue.width,O=ue.height;for(let ve=0;ve<ct;ve++)t.texImage2D(n.TEXTURE_2D,ve,ke,_e,O,0,ut,Ze,null),_e>>=1,O>>=1}}else if(it.length>0&&bt){xt&&It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,it[0].width,it[0].height);for(let _e=0,O=it.length;_e<O;_e++)Re=it[_e],xt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ut,Ze,Re):t.texImage2D(n.TEXTURE_2D,_e,ke,ut,Ze,Re);S.generateMipmaps=!1}else xt?(It&&t.texStorage2D(n.TEXTURE_2D,ct,ke,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Ze,ue)):t.texImage2D(n.TEXTURE_2D,0,ke,ut,Ze,ue);T(S,bt)&&v(fe),De.__version=pe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function re(C,S,q){if(S.image.length!==6)return;let fe=X(C,S),he=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let pe=i.get(he);if(he.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+q);let De=Ct.getPrimaries(Ct.workingColorSpace),Me=S.colorSpace===Wn?null:Ct.getPrimaries(S.colorSpace),Ce=S.colorSpace===Wn||De===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let We=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let _e=0;_e<6;_e++)!We&&!lt?ue[_e]=x(S.image[_e],!1,!0,s.maxCubemapSize):ue[_e]=lt?S.image[_e].image:S.image[_e],ue[_e]=ot(S,ue[_e]);let bt=ue[0],ut=p(bt)||a,Ze=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Re=P(S.internalFormat,Ze,ke,S.colorSpace),it=a&&S.isVideoTexture!==!0,xt=pe.__version===void 0||fe===!0,It=U(S,bt,ut);z(n.TEXTURE_CUBE_MAP,S,ut);let ct;if(We){it&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Re,bt.width,bt.height);for(let _e=0;_e<6;_e++){ct=ue[_e].mipmaps;for(let O=0;O<ct.length;O++){let ve=ct[O];S.format!==Gn?Ze!==null?it?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,ve.width,ve.height,Ze,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,ve.width,ve.height,Ze,ke,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Re,ve.width,ve.height,0,Ze,ke,ve.data)}}}else{ct=S.mipmaps,it&&xt&&(ct.length>0&&It++,t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Re,ue[0].width,ue[0].height));for(let _e=0;_e<6;_e++)if(lt){it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ue[_e].width,ue[_e].height,Ze,ke,ue[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Re,ue[_e].width,ue[_e].height,0,Ze,ke,ue[_e].data);for(let O=0;O<ct.length;O++){let be=ct[O].image[_e].image;it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,be.width,be.height,Ze,ke,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Re,be.width,be.height,0,Ze,ke,be.data)}}else{it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ze,ke,ue[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Re,Ze,ke,ue[_e]);for(let O=0;O<ct.length;O++){let ve=ct[O];it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,Ze,ke,ve.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Re,Ze,ke,ve.image[_e])}}}T(S,ut)&&v(n.TEXTURE_CUBE_MAP),pe.__version=he.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function oe(C,S,q,fe,he,pe){let De=r.convert(q.format,q.colorSpace),Me=r.convert(q.type),Ce=P(q.internalFormat,De,Me,q.colorSpace);if(!i.get(S).__hasExternalTextures){let lt=Math.max(1,S.width>>pe),ue=Math.max(1,S.height>>pe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,Ce,lt,ue,S.depth,0,De,Me,null):t.texImage2D(he,pe,Ce,lt,ue,0,De,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Le(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,he,i.get(q).__webglTexture,0,et(S)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,he,i.get(q).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(C,S,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let fe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||Le(S)){let he=S.depthTexture;he&&he.isDepthTexture&&(he.type===Li?fe=n.DEPTH_COMPONENT32F:he.type===ji&&(fe=n.DEPTH_COMPONENT24));let pe=et(S);Le(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let fe=et(S);q&&Le(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,S.width,S.height):Le(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let fe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let he=0;he<fe.length;he++){let pe=fe[he],De=r.convert(pe.format,pe.colorSpace),Me=r.convert(pe.type),Ce=P(pe.internalFormat,De,Me,pe.colorSpace),We=et(S);q&&Le(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Ce,S.width,S.height):Le(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,Ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);let fe=i.get(S.depthTexture).__webglTexture,he=et(S);if(S.depthTexture.format===Ps)Le(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(S.depthTexture.format===br)Le(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ze(C){let S=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Be(S.__webglFramebuffer,C)}else if(q){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]=n.createRenderbuffer(),Te(S.__webglDepthbuffer[fe],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Te(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(C,S,q){let fe=i.get(C);S!==void 0&&oe(fe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ze(C)}function V(C){let S=C.texture,q=i.get(C),fe=i.get(S);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=S.version,o.memory.textures++);let he=C.isWebGLCubeRenderTarget===!0,pe=C.isWebGLMultipleRenderTargets===!0,De=p(C)||a;if(he){q.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[Me]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)q.__webglFramebuffer[Me][Ce]=n.createFramebuffer()}else q.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)q.__webglFramebuffer[Me]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let Me=C.texture;for(let Ce=0,We=Me.length;Ce<We;Ce++){let lt=i.get(Me[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Le(C)===!1){let Me=pe?S:[S];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Me.length;Ce++){let We=Me[Ce];q.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);let lt=r.convert(We.format,We.colorSpace),ue=r.convert(We.type),bt=P(We.internalFormat,lt,ue,We.colorSpace,C.isXRRenderTarget===!0),ut=et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,bt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),z(n.TEXTURE_CUBE_MAP,S,De);for(let Me=0;Me<6;Me++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)oe(q.__webglFramebuffer[Me][Ce],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ce);else oe(q.__webglFramebuffer[Me],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);T(S,De)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let Me=C.texture;for(let Ce=0,We=Me.length;Ce<We;Ce++){let lt=Me[Ce],ue=i.get(lt);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),z(n.TEXTURE_2D,lt,De),oe(q.__webglFramebuffer,C,lt,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),T(lt,De)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,fe.__webglTexture),z(Me,S,De),a&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)oe(q.__webglFramebuffer[Ce],C,S,n.COLOR_ATTACHMENT0,Me,Ce);else oe(q.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Me,0);T(S,De)&&v(Me),t.unbindTexture()}C.depthBuffer&&ze(C)}function Qt(C){let S=p(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let fe=0,he=q.length;fe<he;fe++){let pe=q[fe];if(T(pe,S)){let De=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(pe).__webglTexture;t.bindTexture(De,Me),v(De),t.unbindTexture()}}}function Ve(C){if(a&&C.samples>0&&Le(C)===!1){let S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,fe=C.height,he=n.COLOR_BUFFER_BIT,pe=[],De=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(C),Ce=C.isWebGLMultipleRenderTargets===!0;if(Ce)for(let We=0;We<S.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let We=0;We<S.length;We++){pe.push(n.COLOR_ATTACHMENT0+We),C.depthBuffer&&pe.push(De);let lt=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(lt===!1&&(C.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[We]),lt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),Ce){let ue=i.get(S[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,q,fe,0,0,q,fe,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let We=0;We<S.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Me.__webglColorRenderbuffer[We]);let lt=i.get(S[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function et(C){return Math.min(s.maxSamples,C.samples)}function Le(C){let S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ot(C,S){let q=C.colorSpace,fe=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===zc||q!==Ni&&q!==Wn&&(Ct.getTransfer(q)===Dt?a===!1?e.has("EXT_sRGB")===!0&&fe===Gn?(C.format=zc,C.minFilter=Mn,C.generateMipmaps=!1):S=To.sRGBToLinear(S):(fe!==Gn||he!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}this.allocateTextureUnit=F,this.resetTextureUnits=ye,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=ft,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Le}function bv(n,e,t){let i=t.isWebGL2;function s(r,o=Wn){let a,l=Ct.getTransfer(o);if(r===Ki)return n.UNSIGNED_BYTE;if(r===xf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===vf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===tg)return n.BYTE;if(r===ng)return n.SHORT;if(r===ph)return n.UNSIGNED_SHORT;if(r===_f)return n.INT;if(r===ji)return n.UNSIGNED_INT;if(r===Li)return n.FLOAT;if(r===ia)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ig)return n.ALPHA;if(r===Gn)return n.RGBA;if(r===sg)return n.LUMINANCE;if(r===rg)return n.LUMINANCE_ALPHA;if(r===Ps)return n.DEPTH_COMPONENT;if(r===br)return n.DEPTH_STENCIL;if(r===zc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ag)return n.RED;if(r===bf)return n.RED_INTEGER;if(r===og)return n.RG;if(r===Mf)return n.RG_INTEGER;if(r===Sf)return n.RGBA_INTEGER;if(r===Ql||r===ec||r===tc||r===nc)if(l===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ql)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ql)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uu||r===Ou||r===Fu||r===Bu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ou)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zu||r===ku)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===zu)return l===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ku)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hu||r===Vu||r===Gu||r===Wu||r===Xu||r===qu||r===Yu||r===$u||r===ju||r===Zu||r===Ju||r===Ku||r===Qu||r===ed)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Hu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$u)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ju)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ju)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ku)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qu)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ed)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ic||r===td||r===nd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ic)return l===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===td)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lg||r===id||r===sd||r===rd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ic)return a.COMPRESSED_RED_RGTC1_EXT;if(r===id)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Qc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mn=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mv={type:"move"},na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},eh=class extends ts{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null,x=t.getContextAttributes(),p=null,u=null,T=[],v=[],P=new Je,U=null,L=new qt;L.layers.enable(1),L.viewport=new _t;let D=new qt;D.layers.enable(2),D.viewport=new _t;let j=[L,D],E=new Qc;E.layers.enable(1),E.layers.enable(2);let R=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=T[z];return X===void 0&&(X=new na,T[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=T[z];return X===void 0&&(X=new na,T[z]=X),X.getGripSpace()},this.getHand=function(z){let X=T[z];return X===void 0&&(X=new na,T[z]=X),X.getHandSpace()};function ae(z){let X=v.indexOf(z.inputSource);if(X===-1)return;let se=T[X];se!==void 0&&(se.update(z.inputSource,z.frame,c||o),se.dispatchEvent({type:z.type,data:z.inputSource}))}function ye(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",ye),s.removeEventListener("inputsourceschange",F);for(let z=0;z<T.length;z++){let X=v[z];X!==null&&(v[z]=null,T[z].disconnect(X))}R=null,Z=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",ye),s.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Di(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,se=null,re=null;x.depth&&(re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?br:Ps,se=x.stencil?Rs:ji);let oe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Di(f.textureWidth,f.textureHeight,{format:Gn,type:Ki,depthTexture:new Uo(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Te=e.properties.get(u);Te.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(z){for(let X=0;X<z.removed.length;X++){let se=z.removed[X],re=v.indexOf(se);re>=0&&(v[re]=null,T[re].disconnect(se))}for(let X=0;X<z.added.length;X++){let se=z.added[X],re=v.indexOf(se);if(re===-1){for(let Te=0;Te<T.length;Te++)if(Te>=v.length){v.push(se),re=Te;break}else if(v[Te]===null){v[Te]=se,re=Te;break}if(re===-1)break}let oe=T[re];oe&&oe.connect(se)}}let W=new N,B=new N;function ne(z,X,se){W.setFromMatrixPosition(X.matrixWorld),B.setFromMatrixPosition(se.matrixWorld);let re=W.distanceTo(B),oe=X.projectionMatrix.elements,Te=se.projectionMatrix.elements,Be=oe[14]/(oe[10]-1),ze=oe[14]/(oe[10]+1),ft=(oe[9]+1)/oe[5],V=(oe[9]-1)/oe[5],Qt=(oe[8]-1)/oe[0],Ve=(Te[8]+1)/Te[0],et=Be*Qt,Le=Be*Ve,Rt=re/(-Qt+Ve),ot=Rt*-Qt;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(Rt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let C=Be+Rt,S=ze+Rt,q=et-ot,fe=Le+(re-ot),he=ft*ze/S*C,pe=V*ze/S*C;z.projectionMatrix.makePerspective(q,fe,he,pe,C,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function K(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;E.near=D.near=L.near=z.near,E.far=D.far=L.far=z.far,(R!==E.near||Z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,Z=E.far);let X=z.parent,se=E.cameras;K(E,X);for(let re=0;re<se.length;re++)K(se[re],X);se.length===2?ne(E,L,D):E.projectionMatrix.copy(L.projectionMatrix),H(z,E,X)};function H(z,X,se){se===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Mr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let Q=null;function te(z,X){if(h=X.getViewerPose(c||o),_=X,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let re=!1;se.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let oe=0;oe<se.length;oe++){let Te=se[oe],Be=null;if(m!==null)Be=m.getViewport(Te);else{let ft=d.getViewSubImage(f,Te);Be=ft.viewport,oe===0&&(e.setRenderTargetTextures(u,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(u))}let ze=j[oe];ze===void 0&&(ze=new qt,ze.layers.enable(oe),ze.viewport=new _t,j[oe]=ze),ze.matrix.fromArray(Te.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Te.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Be.x,Be.y,Be.width,Be.height),oe===0&&(E.matrix.copy(ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(ze)}}for(let se=0;se<T.length;se++){let re=v[se],oe=T[se];re!==null&&oe!==void 0&&oe.update(re,X,c||o)}Q&&Q(z,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}let de=new Pf;de.setAnimationLoop(te),this.setAnimationLoop=function(z){Q=z},this.dispose=function(){}}};function Sv(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Rf(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,T,v,P){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,P)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,T,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===nn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===nn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let T=e.get(u).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,T,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wv(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){let P=v.program;i.uniformBlockBinding(T,P)}function c(T,v){let P=s[T.id];P===void 0&&(_(T),P=h(T),s[T.id]=P,T.addEventListener("dispose",p));let U=v.program;i.updateUBOMapping(T,U);let L=e.render.frame;r[T.id]!==L&&(f(T),r[T.id]=L)}function h(T){let v=d();T.__bindingPointIndex=v;let P=n.createBuffer(),U=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,U,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,P),P}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let v=s[T.id],P=T.uniforms,U=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let L=0,D=P.length;L<D;L++){let j=Array.isArray(P[L])?P[L]:[P[L]];for(let E=0,R=j.length;E<R;E++){let Z=j[E];if(m(Z,L,E,U)===!0){let ae=Z.__offset,ye=Array.isArray(Z.value)?Z.value:[Z.value],F=0;for(let W=0;W<ye.length;W++){let B=ye[W],ne=x(B);typeof B=="number"||typeof B=="boolean"?(Z.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,ae+F,Z.__data)):B.isMatrix3?(Z.__data[0]=B.elements[0],Z.__data[1]=B.elements[1],Z.__data[2]=B.elements[2],Z.__data[3]=0,Z.__data[4]=B.elements[3],Z.__data[5]=B.elements[4],Z.__data[6]=B.elements[5],Z.__data[7]=0,Z.__data[8]=B.elements[6],Z.__data[9]=B.elements[7],Z.__data[10]=B.elements[8],Z.__data[11]=0):(B.toArray(Z.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,Z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,v,P,U){let L=T.value,D=v+"_"+P;if(U[D]===void 0)return typeof L=="number"||typeof L=="boolean"?U[D]=L:U[D]=L.clone(),!0;{let j=U[D];if(typeof L=="number"||typeof L=="boolean"){if(j!==L)return U[D]=L,!0}else if(j.equals(L)===!1)return j.copy(L),!0}return!1}function _(T){let v=T.uniforms,P=0,U=16;for(let D=0,j=v.length;D<j;D++){let E=Array.isArray(v[D])?v[D]:[v[D]];for(let R=0,Z=E.length;R<Z;R++){let ae=E[R],ye=Array.isArray(ae.value)?ae.value:[ae.value];for(let F=0,W=ye.length;F<W;F++){let B=ye[F],ne=x(B),K=P%U;K!==0&&U-K<ne.boundary&&(P+=U-K),ae.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=P,P+=ne.storage}}}let L=P%U;return L>0&&(P+=U-L),T.__size=P,T.__cache={},this}function x(T){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function p(T){let v=T.target;v.removeEventListener("dispose",p);let P=o.indexOf(v.__bindingPointIndex);o.splice(P,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var la=class{constructor(e={}){let{canvas:t=Dg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),_=new Int32Array(4),x=null,p=null,u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let v=this,P=!1,U=0,L=0,D=null,j=-1,E=null,R=new _t,Z=new _t,ae=null,ye=new rt(0),F=0,W=t.width,B=t.height,ne=1,K=null,H=null,Q=new _t(0,0,W,B),te=new _t(0,0,W,B),de=!1,z=new oa,X=!1,se=!1,re=null,oe=new at,Te=new Je,Be=new N,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return D===null?ne:1}let V=i;function Qt(A,k){for(let Y=0;Y<A.length;Y++){let J=A[Y],G=t.getContext(J,k);if(G!==null)return G}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ve,!1),V===null){let k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),V=Qt(k,A),V===null)throw Qt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ve,et,Le,Rt,ot,C,S,q,fe,he,pe,De,Me,Ce,We,lt,ue,bt,ut,Ze,ke,Re,it,xt;function It(){Ve=new G_(V),et=new F_(V,Ve,e),Ve.init(et),Re=new bv(V,Ve,et),Le=new xv(V,Ve,et),Rt=new q_(V),ot=new ov,C=new vv(V,Ve,Le,ot,et,Re,Rt),S=new z_(v),q=new V_(v),fe=new e0(V,et),it=new U_(V,Ve,fe,et),he=new W_(V,fe,Rt,it),pe=new Z_(V,he,fe,Rt),ut=new j_(V,et,C),lt=new B_(ot),De=new av(v,S,q,Ve,et,it,lt),Me=new Sv(v,ot),Ce=new cv,We=new mv(Ve,et),bt=new D_(v,S,q,Le,pe,f,l),ue=new _v(v,pe,et),xt=new wv(V,Rt,et,Le),Ze=new O_(V,Ve,Rt,et),ke=new X_(V,Ve,Rt,et),Rt.programs=De.programs,v.capabilities=et,v.extensions=Ve,v.properties=ot,v.renderLists=Ce,v.shadowMap=ue,v.state=Le,v.info=Rt}It();let ct=new eh(v,V);this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=Ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(W,B,!1))},this.getSize=function(A){return A.set(W,B)},this.setSize=function(A,k,Y=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,B=k,t.width=Math.floor(A*ne),t.height=Math.floor(k*ne),Y===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(W*ne,B*ne).floor()},this.setDrawingBufferSize=function(A,k,Y){W=A,B=k,ne=Y,t.width=Math.floor(A*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,k,Y,J){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,k,Y,J),Le.viewport(R.copy(Q).multiplyScalar(ne).floor())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,k,Y,J){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,k,Y,J),Le.scissor(Z.copy(te).multiplyScalar(ne).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){Le.setScissorTest(de=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(A=!0,k=!0,Y=!0){let J=0;if(A){let G=!1;if(D!==null){let we=D.texture.format;G=we===Sf||we===Mf||we===bf}if(G){let we=D.texture.type,Ee=we===Ki||we===ji||we===ph||we===Rs||we===xf||we===vf,Ue=bt.getClearColor(),Xe=bt.getClearAlpha(),st=Ue.r,tt=Ue.g,nt=Ue.b;Ee?(m[0]=st,m[1]=tt,m[2]=nt,m[3]=Xe,V.clearBufferuiv(V.COLOR,0,m)):(_[0]=st,_[1]=tt,_[2]=nt,_[3]=Xe,V.clearBufferiv(V.COLOR,0,_))}else J|=V.COLOR_BUFFER_BIT}k&&(J|=V.DEPTH_BUFFER_BIT),Y&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ce.dispose(),We.dispose(),ot.dispose(),S.dispose(),q.dispose(),pe.dispose(),it.dispose(),xt.dispose(),De.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",jt),ct.removeEventListener("sessionend",Tt),re&&(re.dispose(),re=null),en.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=Rt.autoReset,k=ue.enabled,Y=ue.autoUpdate,J=ue.needsUpdate,G=ue.type;It(),Rt.autoReset=A,ue.enabled=k,ue.autoUpdate=Y,ue.needsUpdate=J,ue.type=G}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){let k=A.target;k.removeEventListener("dispose",be),Ye(k)}function Ye(A){Ge(A),ot.remove(A)}function Ge(A){let k=ot.get(A).programs;k!==void 0&&(k.forEach(function(Y){De.releaseProgram(Y)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Y,J,G,we){k===null&&(k=ze);let Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ue=$l(A,k,Y,J,G);Le.setMaterial(J,Ee);let Xe=Y.index,st=1;if(J.wireframe===!0){if(Xe=he.getWireframeAttribute(Y),Xe===void 0)return;st=2}let tt=Y.drawRange,nt=Y.attributes.position,Ot=tt.start*st,xn=(tt.start+tt.count)*st;we!==null&&(Ot=Math.max(Ot,we.start*st),xn=Math.min(xn,(we.start+we.count)*st)),Xe!==null?(Ot=Math.max(Ot,0),xn=Math.min(xn,Xe.count)):nt!=null&&(Ot=Math.max(Ot,0),xn=Math.min(xn,nt.count));let Wt=xn-Ot;if(Wt<0||Wt===1/0)return;it.setup(G,J,Ue,Y,Xe);let Hn,Pt=Ze;if(Xe!==null&&(Hn=fe.get(Xe),Pt=ke,Pt.setIndex(Hn)),G.isMesh)J.wireframe===!0?(Le.setLineWidth(J.wireframeLinewidth*ft()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(G.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),Le.setLineWidth(Ke*ft()),G.isLineSegments?Pt.setMode(V.LINES):G.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else G.isPoints?Pt.setMode(V.POINTS):G.isSprite&&Pt.setMode(V.TRIANGLES);if(G.isBatchedMesh)Pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Pt.renderInstances(Ot,Wt,G.count);else if(Y.isInstancedBufferGeometry){let Ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,kr=Math.min(Y.instanceCount,Ke);Pt.renderInstances(Ot,Wt,kr)}else Pt.render(Ot,Wt)};function St(A,k,Y){A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,qs(A,k,Y),A.side=Fn,A.needsUpdate=!0,qs(A,k,Y),A.side=wn):qs(A,k,Y)}this.compile=function(A,k,Y=null){Y===null&&(Y=A),p=We.get(Y),p.init(),T.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==Y&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);let J=new Set;return A.traverse(function(G){let we=G.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){let Ue=we[Ee];St(Ue,Y,G),J.add(Ue)}else St(we,Y,G),J.add(we)}),T.pop(),p=null,J},this.compileAsync=function(A,k,Y=null){let J=this.compile(A,k,Y);return new Promise(G=>{function we(){if(J.forEach(function(Ee){ot.get(Ee).currentProgram.isReady()&&J.delete(Ee)}),J.size===0){G(A);return}setTimeout(we,10)}Ve.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Et=null;function Mt(A){Et&&Et(A)}function jt(){en.stop()}function Tt(){en.start()}let en=new Pf;en.setAnimationLoop(Mt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(A){Et=A,ct.setAnimationLoop(A),A===null?en.stop():en.start()},ct.addEventListener("sessionstart",jt),ct.addEventListener("sessionend",Tt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,D),p=We.get(A,T.length),p.init(),T.push(p),oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z.setFromProjectionMatrix(oe),se=this.localClippingEnabled,X=lt.init(this.clippingPlanes,se),x=Ce.get(A,u.length),x.init(),u.push(x),kn(A,k,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,H),this.info.render.frame++,X===!0&&lt.beginShadows();let Y=p.state.shadowsArray;if(ue.render(Y,A,k),X===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(x,A),p.setupLights(v._useLegacyLights),k.isArrayCamera){let J=k.cameras;for(let G=0,we=J.length;G<we;G++){let Ee=J[G];Oa(x,A,Ee,Ee.viewport)}}else Oa(x,A,k);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(v,A,k),it.resetDefaultState(),j=-1,E=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function kn(A,k,Y,J){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){J&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);let Ee=pe.update(A),Ue=A.material;Ue.visible&&x.push(A,Ee,Ue,Y,Be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){let Ee=pe.update(A),Ue=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Be.copy(Ee.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Ue)){let Xe=Ee.groups;for(let st=0,tt=Xe.length;st<tt;st++){let nt=Xe[st],Ot=Ue[nt.materialIndex];Ot&&Ot.visible&&x.push(A,Ee,Ot,Y,Be.z,nt)}}else Ue.visible&&x.push(A,Ee,Ue,Y,Be.z,null)}}let we=A.children;for(let Ee=0,Ue=we.length;Ee<Ue;Ee++)kn(we[Ee],k,Y,J)}function Oa(A,k,Y,J){let G=A.opaque,we=A.transmissive,Ee=A.transparent;p.setupLightsView(Y),X===!0&&lt.setGlobalState(v.clippingPlanes,Y),we.length>0&&Yl(G,we,k,Y),J&&Le.viewport(R.copy(J)),G.length>0&&Xs(G,k,Y),we.length>0&&Xs(we,k,Y),Ee.length>0&&Xs(Ee,k,Y),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Yl(A,k,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let we=et.isWebGL2;re===null&&(re=new Di(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?ia:Ki,minFilter:es,samples:we?4:0})),v.getDrawingBufferSize(Te),we?re.setSize(Te.x,Te.y):re.setSize(Eo(Te.x),Eo(Te.y));let Ee=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(ye),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let Ue=v.toneMapping;v.toneMapping=Ji,Xs(A,Y,J),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re);let Xe=!1;for(let st=0,tt=k.length;st<tt;st++){let nt=k[st],Ot=nt.object,xn=nt.geometry,Wt=nt.material,Hn=nt.group;if(Wt.side===wn&&Ot.layers.test(J.layers)){let Pt=Wt.side;Wt.side=nn,Wt.needsUpdate=!0,Br(Ot,Y,J,xn,Wt,Hn),Wt.side=Pt,Wt.needsUpdate=!0,Xe=!0}}Xe===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re)),v.setRenderTarget(Ee),v.setClearColor(ye,F),v.toneMapping=Ue}function Xs(A,k,Y){let J=k.isScene===!0?k.overrideMaterial:null;for(let G=0,we=A.length;G<we;G++){let Ee=A[G],Ue=Ee.object,Xe=Ee.geometry,st=J===null?Ee.material:J,tt=Ee.group;Ue.layers.test(Y.layers)&&Br(Ue,k,Y,Xe,st,tt)}}function Br(A,k,Y,J,G,we){A.onBeforeRender(v,k,Y,J,G,we),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,k,Y,J,A,we),G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,v.renderBufferDirect(Y,k,J,G,A,we),G.side=Fn,G.needsUpdate=!0,v.renderBufferDirect(Y,k,J,G,A,we),G.side=wn):v.renderBufferDirect(Y,k,J,G,A,we),A.onAfterRender(v,k,Y,J,G,we)}function qs(A,k,Y){k.isScene!==!0&&(k=ze);let J=ot.get(A),G=p.state.lights,we=p.state.shadowsArray,Ee=G.state.version,Ue=De.getParameters(A,G.state,we,k,Y),Xe=De.getProgramCacheKey(Ue),st=J.programs;J.environment=A.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(A.isMeshStandardMaterial?q:S).get(A.envMap||J.environment),st===void 0&&(A.addEventListener("dispose",be),st=new Map,J.programs=st);let tt=st.get(Xe);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Ee)return Fa(A,Ue),tt}else Ue.uniforms=De.getUniforms(A),A.onBuild(Y,Ue,v),A.onBeforeCompile(Ue,v),tt=De.acquireProgram(Ue,Xe),st.set(Xe,tt),J.uniforms=Ue.uniforms;let nt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=lt.uniform),Fa(A,Ue),J.needsLights=Zl(A),J.lightsStateVersion=Ee,J.needsLights&&(nt.ambientLightColor.value=G.state.ambient,nt.lightProbe.value=G.state.probe,nt.directionalLights.value=G.state.directional,nt.directionalLightShadows.value=G.state.directionalShadow,nt.spotLights.value=G.state.spot,nt.spotLightShadows.value=G.state.spotShadow,nt.rectAreaLights.value=G.state.rectArea,nt.ltc_1.value=G.state.rectAreaLTC1,nt.ltc_2.value=G.state.rectAreaLTC2,nt.pointLights.value=G.state.point,nt.pointLightShadows.value=G.state.pointShadow,nt.hemisphereLights.value=G.state.hemi,nt.directionalShadowMap.value=G.state.directionalShadowMap,nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,nt.spotShadowMap.value=G.state.spotShadowMap,nt.spotLightMatrix.value=G.state.spotLightMatrix,nt.spotLightMap.value=G.state.spotLightMap,nt.pointShadowMap.value=G.state.pointShadowMap,nt.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function zr(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=_r.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Fa(A,k){let Y=ot.get(A);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function $l(A,k,Y,J,G){k.isScene!==!0&&(k=ze),C.resetTextureUnits();let we=k.fog,Ee=J.isMeshStandardMaterial?k.environment:null,Ue=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ni,Xe=(J.isMeshStandardMaterial?q:S).get(J.envMap||Ee),st=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,tt=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),nt=!!Y.morphAttributes.position,Ot=!!Y.morphAttributes.normal,xn=!!Y.morphAttributes.color,Wt=Ji;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Wt=v.toneMapping);let Hn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pt=Hn!==void 0?Hn.length:0,Ke=ot.get(J),kr=p.state.lights;if(X===!0&&(se===!0||A!==E)){let hn=A===E&&J.id===j;lt.setState(J,A,hn)}let Nt=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==kr.state.version||Ke.outputColorSpace!==Ue||G.isBatchedMesh&&Ke.batching===!1||!G.isBatchedMesh&&Ke.batching===!0||G.isInstancedMesh&&Ke.instancing===!1||!G.isInstancedMesh&&Ke.instancing===!0||G.isSkinnedMesh&&Ke.skinning===!1||!G.isSkinnedMesh&&Ke.skinning===!0||G.isInstancedMesh&&Ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ke.instancingColor===!1&&G.instanceColor!==null||Ke.envMap!==Xe||J.fog===!0&&Ke.fog!==we||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==lt.numPlanes||Ke.numIntersection!==lt.numIntersection)||Ke.vertexAlphas!==st||Ke.vertexTangents!==tt||Ke.morphTargets!==nt||Ke.morphNormals!==Ot||Ke.morphColors!==xn||Ke.toneMapping!==Wt||et.isWebGL2===!0&&Ke.morphTargetsCount!==Pt)&&(Nt=!0):(Nt=!0,Ke.__version=J.version);let bi=Ke.currentProgram;Nt===!0&&(bi=qs(J,k,G));let Hr=!1,vs=!1,Vr=!1,Zt=bi.getUniforms(),ai=Ke.uniforms;if(Le.useProgram(bi.program)&&(Hr=!0,vs=!0,Vr=!0),J.id!==j&&(j=J.id,vs=!0),Hr||E!==A){Zt.setValue(V,"projectionMatrix",A.projectionMatrix),Zt.setValue(V,"viewMatrix",A.matrixWorldInverse);let hn=Zt.map.cameraPosition;hn!==void 0&&hn.setValue(V,Be.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&Zt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Zt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,vs=!0,Vr=!0)}if(G.isSkinnedMesh){Zt.setOptional(V,G,"bindMatrix"),Zt.setOptional(V,G,"bindMatrixInverse");let hn=G.skeleton;hn&&(et.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Zt.setValue(V,"boneTexture",hn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Zt.setOptional(V,G,"batchingTexture"),Zt.setValue(V,"batchingTexture",G._matricesTexture,C));let Ft=Y.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0&&et.isWebGL2===!0)&&ut.update(G,Y,bi),(vs||Ke.receiveShadow!==G.receiveShadow)&&(Ke.receiveShadow=G.receiveShadow,Zt.setValue(V,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ai.envMap.value=Xe,ai.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),vs&&(Zt.setValue(V,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&jl(ai,Vr),we&&J.fog===!0&&Me.refreshFogUniforms(ai,we),Me.refreshMaterialUniforms(ai,J,ne,B,re),_r.upload(V,zr(Ke),ai,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(_r.upload(V,zr(Ke),ai,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Zt.setValue(V,"center",G.center),Zt.setValue(V,"modelViewMatrix",G.modelViewMatrix),Zt.setValue(V,"normalMatrix",G.normalMatrix),Zt.setValue(V,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let hn=J.uniformsGroups;for(let Gr=0,Ba=hn.length;Gr<Ba;Gr++)if(et.isWebGL2){let Wr=hn[Gr];xt.update(Wr,bi),xt.bind(Wr,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function jl(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,k,Y){ot.get(A.texture).__webglTexture=k,ot.get(A.depthTexture).__webglTexture=Y;let J=ot.get(A);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){let Y=ot.get(A);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Y=0){D=A,U=k,L=Y;let J=!0,G=null,we=!1,Ee=!1;if(A){let Xe=ot.get(A);Xe.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(V.FRAMEBUFFER,null),J=!1):Xe.__webglFramebuffer===void 0?C.setupRenderTarget(A):Xe.__hasExternalTextures&&C.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);let st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ee=!0);let tt=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[k])?G=tt[k][Y]:G=tt[k],we=!0):et.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?G=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?G=tt[Y]:G=tt,R.copy(A.viewport),Z.copy(A.scissor),ae=A.scissorTest}else R.copy(Q).multiplyScalar(ne).floor(),Z.copy(te).multiplyScalar(ne).floor(),ae=de;if(Le.bindFramebuffer(V.FRAMEBUFFER,G)&&et.drawBuffers&&J&&Le.drawBuffers(A,G),Le.viewport(R),Le.scissor(Z),Le.setScissorTest(ae),we){let Xe=ot.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Xe.__webglTexture,Y)}else if(Ee){let Xe=ot.get(A.texture),st=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.__webglTexture,Y||0,st)}j=-1},this.readRenderTargetPixels=function(A,k,Y,J,G,we,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ue=Ue[Ee]),Ue){Le.bindFramebuffer(V.FRAMEBUFFER,Ue);try{let Xe=A.texture,st=Xe.format,tt=Xe.type;if(st!==Gn&&Re.convert(st)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let nt=tt===ia&&(Ve.has("EXT_color_buffer_half_float")||et.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(tt!==Ki&&Re.convert(tt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Li&&(et.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-J&&Y>=0&&Y<=A.height-G&&V.readPixels(k,Y,J,G,Re.convert(st),Re.convert(tt),we)}finally{let Xe=D!==null?ot.get(D).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(A,k,Y=0){let J=Math.pow(2,-Y),G=Math.floor(k.image.width*J),we=Math.floor(k.image.height*J);C.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,Y,0,0,A.x,A.y,G,we),Le.unbindTexture()},this.copyTextureToTexture=function(A,k,Y,J=0){let G=k.image.width,we=k.image.height,Ee=Re.convert(Y.format),Ue=Re.convert(Y.type);C.setTexture2D(Y,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,A.x,A.y,G,we,Ee,Ue,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ee,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,J,A.x,A.y,Ee,Ue,k.image),J===0&&Y.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(A,k,Y,J,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Ue=A.max.z-A.min.z+1,Xe=Re.convert(J.format),st=Re.convert(J.type),tt;if(J.isData3DTexture)C.setTexture3D(J,0),tt=V.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),tt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);let nt=V.getParameter(V.UNPACK_ROW_LENGTH),Ot=V.getParameter(V.UNPACK_IMAGE_HEIGHT),xn=V.getParameter(V.UNPACK_SKIP_PIXELS),Wt=V.getParameter(V.UNPACK_SKIP_ROWS),Hn=V.getParameter(V.UNPACK_SKIP_IMAGES),Pt=Y.isCompressedTexture?Y.mipmaps[G]:Y.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Pt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,A.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?V.texSubImage3D(tt,G,k.x,k.y,k.z,we,Ee,Ue,Xe,st,Pt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(tt,G,k.x,k.y,k.z,we,Ee,Ue,Xe,Pt.data)):V.texSubImage3D(tt,G,k.x,k.y,k.z,we,Ee,Ue,Xe,st,Pt),V.pixelStorei(V.UNPACK_ROW_LENGTH,nt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ot),V.pixelStorei(V.UNPACK_SKIP_PIXELS,xn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Wt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Hn),G===0&&J.generateMipmaps&&V.generateMipmap(tt),Le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){U=0,L=0,D=null,Le.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gh?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Ls:Ef}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ls?zt:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},th=class extends la{};th.prototype.isWebGL1Renderer=!0;var Is=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Oo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new N,qn=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tr=class extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,jr=new N,ur=new N,dr=new N,fr=new Je,Zr=new Je,Of=new at,ho=new N,Jr=new N,uo=new N,jd=new Je,Ac=new Je,Zd=new Je,ca=class extends Ht{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Ln;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Oo(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new qn(i,3,0,!1)),hr.setAttribute("uv",new qn(i,2,3,!1))}this.geometry=hr,this.material=e,this.center=new Je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;fo(ho.set(-.5,-.5,0),dr,o,ur,s,r),fo(Jr.set(.5,-.5,0),dr,o,ur,s,r),fo(uo.set(.5,.5,0),dr,o,ur,s,r),jd.set(0,0),Ac.set(1,0),Zd.set(1,1);let a=e.ray.intersectTriangle(ho,Jr,uo,!1,jr);if(a===null&&(fo(Jr.set(-.5,.5,0),dr,o,ur,s,r),Ac.set(0,1),a=e.ray.intersectTriangle(ho,uo,Jr,!1,jr),a===null))return;let l=e.ray.origin.distanceTo(jr);l<e.near||l>e.far||t.push({distance:l,point:jr.clone(),uv:Cs.getInterpolation(jr,ho,Jr,uo,jd,Ac,Zd,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fo(n,e,t,i,s,r){fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Zr.x=r*fr.x-s*fr.y,Zr.y=s*fr.x+r*fr.y):Zr.copy(fr),n.copy(e),n.x+=Zr.x,n.y+=Zr.y,n.applyMatrix4(Of)}var Jd=new N,Kd=new _t,Qd=new _t,Ev=new N,ef=new at,po=new N,Cc=new Xn,tf=new at,Rc=new Sr,Fo=class extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nu,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,po),this.boundingBox.expandByPoint(po)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,po),this.boundingSphere.expandByPoint(po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)!==!1&&(tf.copy(s).invert(),Rc.copy(e.ray).applyMatrix4(tf),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Kd.fromBufferAttribute(s.attributes.skinIndex,e),Qd.fromBufferAttribute(s.attributes.skinWeight,e),Jd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Qd.getComponent(r);if(o!==0){let a=Kd.getComponent(r);ef.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ev.copy(Jd).applyMatrix4(ef),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ha=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bo=class extends Pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=tn,h=tn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nf=new at,Tv=new at,zo=class n{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Tv;nf.multiplyMatrices(a,t[r]),nf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Bo(t,e,e,Gn,Li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ha),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Ar=class extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sf=new N,rf=new N,af=new at,Pc=new Sr,mo=new Xn,ua=class extends Ht{constructor(e=new Ln,t=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)sf.fromBufferAttribute(t,s-1),rf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=sf.distanceTo(rf);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;af.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,h=new N,d=new N,f=new N,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){let u=Math.max(0,o.start),T=Math.min(_.count,o.start+o.count);for(let v=u,P=T-1;v<P;v+=m){let U=_.getX(v),L=_.getX(v+1);if(c.fromBufferAttribute(p,U),h.fromBufferAttribute(p,L),Pc.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let j=e.ray.origin.distanceTo(f);j<e.near||j>e.far||t.push({distance:j,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let u=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let v=u,P=T-1;v<P;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Pc.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},of=new N,lf=new N,ko=class extends ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)of.fromBufferAttribute(t,s),lf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+of.distanceTo(lf);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Cr=class extends Pn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ho=class n extends Ln{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,f=new N,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){let T=[],v=u/i,P=0;u===0&&o===0?P=.5/t:u===i&&l===Math.PI&&(P=-.5/t);for(let U=0;U<=t;U++){let L=U/t;d.x=-e*Math.cos(s+L*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+L*r)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(L+P,1-v),T.push(c++)}h.push(T)}for(let u=0;u<i;u++)for(let T=0;T<t;T++){let v=h[u][T+1],P=h[u][T],U=h[u+1][T],L=h[u+1][T+1];(u!==0||o>0)&&m.push(v,P,L),(u!==i-1||l<Math.PI)&&m.push(P,U,L)}this.setIndex(m),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vo=class extends Ln{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new N,r=new N;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],f=d.start,m=d.count;for(let _=f,x=f+m;_<x;_+=3)for(let p=0;p<3;p++){let u=a.getX(_+p),T=a.getX(_+(p+1)%3);s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,T),cf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),cf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function cf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var da=class extends ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ns=class extends ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function go(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Av(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Cv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function hf(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Ff(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Rr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nh=class extends Rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ad,endingEnd:ad}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case od:r=e,a=2*t-i;break;case ld:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case od:o=e,l=2*i-t;break;case ld:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-t)/(s-t),x=_*_,p=x*_,u=-f*p+2*f*x-f*_,T=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*_+1,v=(-1-m)*p+(1.5+m)*x+.5*_,P=m*p-m*x;for(let U=0;U!==a;++U)r[U]=u*o[h+U]+T*o[c+U]+v*o[l+U]+P*o[d+U];return r}},ih=class extends Rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},sh=class extends Rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xo:t=this.InterpolantFactoryMethodDiscrete;break;case vo:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Av(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,m=d+i;for(let _=0;_!==i;++_){let x=t[d+_];if(x!==t[f+_]||x!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=vo;var is=class extends Yn{};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=xo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Yn{};Go.prototype.ValueTypeName="color";var Pr=class extends Yn{};Pr.prototype.ValueTypeName="number";var rh=class extends Rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)li.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ui=class extends Yn{InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.DefaultInterpolation=vo;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Yn{};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=xo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Yn{};Oi.prototype.ValueTypeName="vector";var fa=class{constructor(e,t=-1,i,s=cg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Pv(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Yn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Cv(l);l=hf(l,1,h),c=hf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let d=h[1],f=s[d];f||(s[d]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,f,m,_,x){if(m.length!==0){let p=[],u=[];Ff(m,p,u,_),p.length!==0&&x.push(new d(f,p,u))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)m[f[_].morphTargets[x]]=-1;for(let x in m){let p=[],u=[];for(let T=0;T!==f[_].morphTargets.length;++T){let v=f[_];p.push(v.time),u.push(v.morphTarget===x?1:0)}s.push(new Pr(".morphTargetInfluence["+x+"]",p,u))}l=m.length*o}else{let m=".bones["+t[d].name+"]";i(Oi,m+".position",f,"pos",s),i(Ui,m+".quaternion",f,"rot",s),i(Oi,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Rv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Oi;case"color":return Go;case"quaternion":return Ui;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Pv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Rv(n.type);if(n.times===void 0){let t=[],i=[];Ff(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Wo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},pa=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},Lv=new pa,hi=class{constructor(e){this.manager=e!==void 0?e:Lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ci={},ah=class extends Error{constructor(e,t){super(e),this.response=t}},ma=class extends hi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:i,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ci[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0,x=0,p=new ReadableStream({start(u){T();function T(){d.read().then(({done:v,value:P})=>{if(v)u.close();else{x+=P.byteLength;let U=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let L=0,D=h.length;L<D;L++){let j=h[L];j.onProgress&&j.onProgress(U)}u.enqueue(P),T()}})}}});return new Response(p)}else throw new ah(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Wo.add(e,c);let h=Ci[e];delete Ci[e];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var oh=class extends hi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=sa("img");function l(){h(),Wo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Xo=class extends hi{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new Bo,a=new ma(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:pn,o.wrapT=c.wrapT!==void 0?c.wrapT:pn,o.magFilter=c.magFilter!==void 0?c.magFilter:Mn,o.minFilter=c.minFilter!==void 0?c.minFilter:Mn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=es),c.mipmapCount===1&&(o.minFilter=Mn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},qo=class extends hi{constructor(e){super(e)}load(e,t,i,s){let r=new Pn,o=new oh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ds=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Yo=class extends Ds{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lc=new at,uf=new N,df=new N,ga=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lh=class extends ga{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$o=class extends Ds{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ff=new at,Kr=new N,Ic=new N,ch=class extends ga{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kr),Ic.copy(i.position),Ic.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ic),i.updateMatrixWorld(),s.makeTranslation(-Kr.x,-Kr.y,-Kr.z),ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff)}},jo=class extends Ds{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hh=class extends ga{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zo=class extends Ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Jo=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ko=class extends Ln{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var xh="\\[\\]\\.:\\/",Iv=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",Nv="[^"+xh.replace("\\.","")+"]",Dv=/((?:WC+[\/:])*)/.source.replace("WC",vh),Uv=/(WCOD+)?/.source.replace("WCOD",Nv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),Bv=new RegExp("^"+Dv+Uv+Ov+Fv+"$"),zv=["material","materials","bones","map"],uh=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(e){let t=Bv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=uh;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qb=new Float32Array(1);var Us=class extends Oo{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Qo=class{constructor(e,t,i=0,s=1/0){this.ray=new Sr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return dh(e,this,i,t),i.sort(pf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)dh(e[s],this,i,t);return i.sort(pf),i}};function pf(n,e){return n.distance-e.distance}function dh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)dh(s[r],e,t,!0)}}var mf=new N,yo=new N,el=class{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){mf.subVectors(e,this.start),yo.subVectors(this.end,this.start);let i=yo.dot(yo),r=yo.dot(mf)/i;return t&&(r=fn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);var ya=class extends Xo{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case f:case x:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case _:case p:case u:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function i(B,ne,K,H,Q){let te,de,z=K.pixel_size>>3,X=K.width*K.height*z;if(ne&&(de=Q.subarray(H,H+=K.colormap_length*(K.colormap_size>>3))),B){te=new Uint8Array(X);let se,re,oe,Te=0,Be=new Uint8Array(z);for(;Te<X;)if(se=Q[H++],re=(se&127)+1,se&128){for(oe=0;oe<z;++oe)Be[oe]=Q[H++];for(oe=0;oe<re;++oe)te.set(Be,Te+oe*z);Te+=z*re}else{for(re*=z,oe=0;oe<re;++oe)te[Te+oe]=Q[H++];Te+=re}}else te=Q.subarray(H,H+=ne?K.width*K.height:X);return{pixel_data:te,palettes:de}}function s(B,ne,K,H,Q,te,de,z,X){let se=X,re,oe=0,Te,Be,ze=R.width;for(Be=ne;Be!==H;Be+=K)for(Te=Q;Te!==de;Te+=te,oe++)re=z[oe],B[(Te+ze*Be)*4+3]=255,B[(Te+ze*Be)*4+2]=se[re*3+0],B[(Te+ze*Be)*4+1]=se[re*3+1],B[(Te+ze*Be)*4+0]=se[re*3+2];return B}function r(B,ne,K,H,Q,te,de,z){let X,se=0,re,oe,Te=R.width;for(oe=ne;oe!==H;oe+=K)for(re=Q;re!==de;re+=te,se+=2)X=z[se+0]+(z[se+1]<<8),B[(re+Te*oe)*4+0]=(X&31744)>>7,B[(re+Te*oe)*4+1]=(X&992)>>2,B[(re+Te*oe)*4+2]=(X&31)<<3,B[(re+Te*oe)*4+3]=X&32768?0:255;return B}function o(B,ne,K,H,Q,te,de,z){let X=0,se,re,oe=R.width;for(re=ne;re!==H;re+=K)for(se=Q;se!==de;se+=te,X+=3)B[(se+oe*re)*4+3]=255,B[(se+oe*re)*4+2]=z[X+0],B[(se+oe*re)*4+1]=z[X+1],B[(se+oe*re)*4+0]=z[X+2];return B}function a(B,ne,K,H,Q,te,de,z){let X=0,se,re,oe=R.width;for(re=ne;re!==H;re+=K)for(se=Q;se!==de;se+=te,X+=4)B[(se+oe*re)*4+2]=z[X+0],B[(se+oe*re)*4+1]=z[X+1],B[(se+oe*re)*4+0]=z[X+2],B[(se+oe*re)*4+3]=z[X+3];return B}function l(B,ne,K,H,Q,te,de,z){let X,se=0,re,oe,Te=R.width;for(oe=ne;oe!==H;oe+=K)for(re=Q;re!==de;re+=te,se++)X=z[se],B[(re+Te*oe)*4+0]=X,B[(re+Te*oe)*4+1]=X,B[(re+Te*oe)*4+2]=X,B[(re+Te*oe)*4+3]=255;return B}function c(B,ne,K,H,Q,te,de,z){let X=0,se,re,oe=R.width;for(re=ne;re!==H;re+=K)for(se=Q;se!==de;se+=te,X+=2)B[(se+oe*re)*4+0]=z[X+0],B[(se+oe*re)*4+1]=z[X+0],B[(se+oe*re)*4+2]=z[X+0],B[(se+oe*re)*4+3]=z[X+1];return B}function h(B,ne,K,H,Q){let te,de,z,X,se,re;switch((R.flags&T)>>v){default:case L:te=0,z=1,se=ne,de=0,X=1,re=K;break;case P:te=0,z=1,se=ne,de=K-1,X=-1,re=-1;break;case D:te=ne-1,z=-1,se=-1,de=0,X=1,re=K;break;case U:te=ne-1,z=-1,se=-1,de=K-1,X=-1,re=-1;break}if(ye)switch(R.pixel_size){case 8:l(B,de,X,re,te,z,se,H);break;case 16:c(B,de,X,re,te,z,se,H);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(R.pixel_size){case 8:s(B,de,X,re,te,z,se,H,Q);break;case 16:r(B,de,X,re,te,z,se,H);break;case 24:o(B,de,X,re,te,z,se,H);break;case 32:a(B,de,X,re,te,z,se,H);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}let d=0,f=1,m=2,_=3,x=9,p=10,u=11,T=48,v=4,P=0,U=1,L=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let j=0,E=new Uint8Array(e),R={id_length:E[j++],colormap_type:E[j++],image_type:E[j++],colormap_index:E[j++]|E[j++]<<8,colormap_length:E[j++]|E[j++]<<8,colormap_size:E[j++],origin:[E[j++]|E[j++]<<8,E[j++]|E[j++]<<8],width:E[j++]|E[j++]<<8,height:E[j++]|E[j++]<<8,pixel_size:E[j++],flags:E[j++]};if(t(R),R.id_length+j>e.length)throw new Error("THREE.TGALoader: No data.");j+=R.id_length;let Z=!1,ae=!1,ye=!1;switch(R.image_type){case x:Z=!0,ae=!0;break;case f:ae=!0;break;case p:Z=!0;break;case m:break;case u:Z=!0,ye=!0;break;case _:ye=!0;break}let F=new Uint8Array(R.width*R.height*4),W=i(Z,ae,R,j,E);return h(F,R.width,R.height,W.pixel_data,W.palettes),{data:F,width:R.width,height:R.height,flipY:!0,generateMipmaps:!0,minFilter:es}}};var al=class extends hi{load(e,t,i,s){let r=this,o=r.path===""?Jo.extractUrlBase(e):r.path,a=new ma(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(y,g){let M=[],b=y.childNodes;for(let w=0,$=b.length;w<$;w++){let ie=b[w];ie.nodeName===g&&M.push(ie)}return M}function s(y){if(y.length===0)return[];let g=y.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=g[b];return M}function r(y){if(y.length===0)return[];let g=y.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=parseFloat(g[b]);return M}function o(y){if(y.length===0)return[];let g=y.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=parseInt(g[b]);return M}function a(y){return y.substring(1)}function l(){return"three_default_"+ym++}function c(y){return Object.keys(y).length===0}function h(y){return{unit:d(i(y,"unit")[0]),upAxis:f(i(y,"up_axis")[0])}}function d(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function f(y){return y!==void 0?y.textContent:"Y_UP"}function m(y,g,M,b){let w=i(y,g)[0];if(w!==void 0){let $=i(w,M);for(let ie=0;ie<$.length;ie++)b($[ie])}}function _(y,g){for(let M in y){let b=y[M];b.build=g(y[M])}}function x(y,g){return y.build!==void 0||(y.build=g(y)),y.build}function p(y){let g={sources:{},samplers:{},channels:{}},M=!1;for(let b=0,w=y.childNodes.length;b<w;b++){let $=y.childNodes[b];if($.nodeType!==1)continue;let ie;switch($.nodeName){case"source":ie=$.getAttribute("id"),g.sources[ie]=O($);break;case"sampler":ie=$.getAttribute("id"),g.samplers[ie]=u($);break;case"channel":ie=$.getAttribute("target"),g.channels[ie]=T($);break;case"animation":p($),M=!0;break;default:console.log($)}}M===!1&&(qe.animations[y.getAttribute("id")||rs.generateUUID()]=g)}function u(y){let g={inputs:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let $=a(w.getAttribute("source")),ie=w.getAttribute("semantic");g.inputs[ie]=$;break}}return g}function T(y){let g={},b=y.getAttribute("target").split("/"),w=b.shift(),$=b.shift(),ie=$.indexOf("(")!==-1,Ae=$.indexOf(".")!==-1;if(Ae)b=$.split("."),$=b.shift(),g.member=b.shift();else if(ie){let xe=$.split("(");$=xe.shift();for(let Se=0;Se<xe.length;Se++)xe[Se]=parseInt(xe[Se].replace(/\)/,""));g.indices=xe}return g.id=w,g.sid=$,g.arraySyntax=ie,g.memberSyntax=Ae,g.sampler=a(y.getAttribute("source")),g}function v(y){let g=[],M=y.channels,b=y.samplers,w=y.sources;for(let $ in M)if(M.hasOwnProperty($)){let ie=M[$],Ae=b[ie.sampler],xe=Ae.inputs.INPUT,Se=Ae.inputs.OUTPUT,Ne=w[xe],ce=w[Se],Ie=U(ie,Ne,ce);R(Ie,g)}return g}function P(y){return x(qe.animations[y],v)}function U(y,g,M){let b=qe.nodes[y.id],w=Ke(b.id),$=b.transforms[y.sid],ie=b.matrix.clone().transpose(),Ae,xe,Se,Ne,ce,Ie,Pe={};switch($){case"matrix":for(Se=0,Ne=g.array.length;Se<Ne;Se++)if(Ae=g.array[Se],xe=Se*M.stride,Pe[Ae]===void 0&&(Pe[Ae]={}),y.arraySyntax===!0){let Bt=M.array[xe],wt=y.indices[0]+4*y.indices[1];Pe[Ae][wt]=Bt}else for(ce=0,Ie=M.stride;ce<Ie;ce++)Pe[Ae][ce]=M.array[xe+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}let He=L(Pe,ie);return{name:w.uuid,keyframes:He}}function L(y,g){let M=[];for(let w in y)M.push({time:parseFloat(w),value:y[w]});M.sort(b);for(let w=0;w<16;w++)Z(M,w,g.elements[w]);return M;function b(w,$){return w.time-$.time}}let D=new N,j=new N,E=new li;function R(y,g){let M=y.keyframes,b=y.name,w=[],$=[],ie=[],Ae=[];for(let xe=0,Se=M.length;xe<Se;xe++){let Ne=M[xe],ce=Ne.time,Ie=Ne.value;Ee.fromArray(Ie).transpose(),Ee.decompose(D,E,j),w.push(ce),$.push(D.x,D.y,D.z),ie.push(E.x,E.y,E.z,E.w),Ae.push(j.x,j.y,j.z)}return $.length>0&&g.push(new Oi(b+".position",w,$)),ie.length>0&&g.push(new Ui(b+".quaternion",w,ie)),Ae.length>0&&g.push(new Oi(b+".scale",w,Ae)),g}function Z(y,g,M){let b,w=!0,$,ie;for($=0,ie=y.length;$<ie;$++)b=y[$],b.value[g]===void 0?b.value[g]=null:w=!1;if(w===!0)for($=0,ie=y.length;$<ie;$++)b=y[$],b.value[g]=M;else ae(y,g)}function ae(y,g){let M,b;for(let w=0,$=y.length;w<$;w++){let ie=y[w];if(ie.value[g]===null){if(M=ye(y,w,g),b=F(y,w,g),M===null){ie.value[g]=b.value[g];continue}if(b===null){ie.value[g]=M.value[g];continue}W(ie,M,b,g)}}}function ye(y,g,M){for(;g>=0;){let b=y[g];if(b.value[M]!==null)return b;g--}return null}function F(y,g,M){for(;g<y.length;){let b=y[g];if(b.value[M]!==null)return b;g++}return null}function W(y,g,M,b){if(M.time-g.time===0){y.value[b]=g.value[b];return}y.value[b]=(y.time-g.time)*(M.value[b]-g.value[b])/(M.time-g.time)+g.value[b]}function B(y){let g={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_animation":g.animations.push(a(w.getAttribute("url")));break}}qe.clips[y.getAttribute("id")]=g}function ne(y){let g=[],M=y.name,b=y.end-y.start||-1,w=y.animations;for(let $=0,ie=w.length;$<ie;$++){let Ae=P(w[$]);for(let xe=0,Se=Ae.length;xe<Se;xe++)g.push(Ae[xe])}return new fa(M,b,g)}function K(y){return x(qe.clips[y],ne)}function H(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"skin":g.id=a(w.getAttribute("source")),g.skin=Q(w);break;case"morph":g.id=a(w.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}qe.controllers[y.getAttribute("id")]=g}function Q(y){let g={sources:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"bind_shape_matrix":g.bindShapeMatrix=r(w.textContent);break;case"source":let $=w.getAttribute("id");g.sources[$]=O(w);break;case"joints":g.joints=te(w);break;case"vertex_weights":g.vertexWeights=de(w);break}}return g}function te(y){let g={inputs:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let $=w.getAttribute("semantic"),ie=a(w.getAttribute("source"));g.inputs[$]=ie;break}}return g}function de(y){let g={inputs:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let $=w.getAttribute("semantic"),ie=a(w.getAttribute("source")),Ae=parseInt(w.getAttribute("offset"));g.inputs[$]={id:ie,offset:Ae};break;case"vcount":g.vcount=o(w.textContent);break;case"v":g.v=o(w.textContent);break}}return g}function z(y){let g={id:y.id},M=qe.geometries[g.id];return y.skin!==void 0&&(g.skin=X(y.skin),M.sources.skinIndices=g.skin.indices,M.sources.skinWeights=g.skin.weights),g}function X(y){let M={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=y.sources,w=y.vertexWeights,$=w.vcount,ie=w.v,Ae=w.inputs.JOINT.offset,xe=w.inputs.WEIGHT.offset,Se=y.sources[y.joints.inputs.JOINT],Ne=y.sources[y.joints.inputs.INV_BIND_MATRIX],ce=b[w.inputs.WEIGHT.id].array,Ie=0,Pe,He,Oe;for(Pe=0,Oe=$.length;Pe<Oe;Pe++){let wt=$[Pe],gt=[];for(He=0;He<wt;He++){let yt=ie[Ie+Ae],Mi=ie[Ie+xe],Rn=ce[Mi];gt.push({index:yt,weight:Rn}),Ie+=2}for(gt.sort(Bt),He=0;He<4;He++){let yt=gt[He];yt!==void 0?(M.indices.array.push(yt.index),M.weights.array.push(yt.weight)):(M.indices.array.push(0),M.weights.array.push(0))}}for(y.bindShapeMatrix?M.bindMatrix=new at().fromArray(y.bindShapeMatrix).transpose():M.bindMatrix=new at().identity(),Pe=0,Oe=Se.array.length;Pe<Oe;Pe++){let wt=Se.array[Pe],gt=new at().fromArray(Ne.array,Pe*Ne.stride).transpose();M.joints.push({name:wt,boneInverse:gt})}return M;function Bt(wt,gt){return gt.weight-wt.weight}}function se(y){return x(qe.controllers[y],z)}function re(y){let g={init_from:i(y,"init_from")[0].textContent};qe.images[y.getAttribute("id")]=g}function oe(y){return y.build!==void 0?y.build:y.init_from}function Te(y){let g=qe.images[y];return g!==void 0?x(g,oe):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Be(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"profile_COMMON":g.profile=ze(w);break}}qe.effects[y.getAttribute("id")]=g}function ze(y){let g={surfaces:{},samplers:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"newparam":ft(w,g);break;case"technique":g.technique=Ve(w);break;case"extra":g.extra=S(w);break}}return g}function ft(y,g){let M=y.getAttribute("sid");for(let b=0,w=y.childNodes.length;b<w;b++){let $=y.childNodes[b];if($.nodeType===1)switch($.nodeName){case"surface":g.surfaces[M]=V($);break;case"sampler2D":g.samplers[M]=Qt($);break}}}function V(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"init_from":g.init_from=w.textContent;break}}return g}function Qt(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"source":g.source=w.textContent;break}}return g}function Ve(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"constant":case"lambert":case"blinn":case"phong":g.type=w.nodeName,g.parameters=et(w);break;case"extra":g.extra=S(w);break}}return g}function et(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":g[w.nodeName]=Le(w);break;case"transparent":g[w.nodeName]={opaque:w.hasAttribute("opaque")?w.getAttribute("opaque"):"A_ONE",data:Le(w)};break}}return g}function Le(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":g[w.nodeName]=r(w.textContent);break;case"float":g[w.nodeName]=parseFloat(w.textContent);break;case"texture":g[w.nodeName]={id:w.getAttribute("texture"),extra:Rt(w)};break}}return g}function Rt(y){let g={technique:{}};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"extra":ot(w,g);break}}return g}function ot(y,g){for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":C(w,g);break}}}function C(y,g){for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":g.technique[w.nodeName]=parseFloat(w.textContent);break;case"wrapU":case"wrapV":w.textContent.toUpperCase()==="TRUE"?g.technique[w.nodeName]=1:w.textContent.toUpperCase()==="FALSE"?g.technique[w.nodeName]=0:g.technique[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=fe(w);break}}}function S(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":g.technique=q(w);break}}return g}function q(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"double_sided":g[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=fe(w);break}}return g}function fe(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"texture":g[w.nodeName]={id:w.getAttribute("texture"),texcoord:w.getAttribute("texcoord"),extra:Rt(w)};break}}return g}function he(y){return y}function pe(y){return x(qe.effects[y],he)}function De(y){let g={name:y.getAttribute("name")};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_effect":g.url=a(w.getAttribute("url"));break}}qe.materials[y.getAttribute("id")]=g}function Me(y){let g,M=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(M=M.toLowerCase(),M){case"tga":g=Jl;break;default:g=Wr}return g}function Ce(y){let g=pe(y.url),M=g.profile.technique,b;switch(M.type){case"phong":case"blinn":b=new da;break;case"lambert":b=new Ns;break;default:b=new Kt;break}b.name=y.name||"";function w(xe,Se=null){let Ne=g.profile.samplers[xe.id],ce=null;if(Ne!==void 0){let Ie=g.profile.surfaces[Ne.source];ce=Te(Ie.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=Te(xe.id);if(ce!==null){let Ie=Me(ce);if(Ie!==void 0){let Pe=Ie.load(ce),He=xe.extra;if(He!==void 0&&He.technique!==void 0&&c(He.technique)===!1){let Oe=He.technique;Pe.wrapS=Oe.wrapU?Qi:pn,Pe.wrapT=Oe.wrapV?Qi:pn,Pe.offset.set(Oe.offsetU||0,Oe.offsetV||0),Pe.repeat.set(Oe.repeatU||1,Oe.repeatV||1)}else Pe.wrapS=Qi,Pe.wrapT=Qi;return Se!==null&&(Pe.colorSpace=Se),Pe}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let $=M.parameters;for(let xe in $){let Se=$[xe];switch(xe){case"diffuse":Se.color&&b.color.fromArray(Se.color),Se.texture&&(b.map=w(Se.texture,zt));break;case"specular":Se.color&&b.specular&&b.specular.fromArray(Se.color),Se.texture&&(b.specularMap=w(Se.texture));break;case"bump":Se.texture&&(b.normalMap=w(Se.texture));break;case"ambient":Se.texture&&(b.lightMap=w(Se.texture,zt));break;case"shininess":Se.float&&b.shininess&&(b.shininess=Se.float);break;case"emission":Se.color&&b.emissive&&b.emissive.fromArray(Se.color),Se.texture&&(b.emissiveMap=w(Se.texture,zt));break}}b.color.convertSRGBToLinear(),b.specular&&b.specular.convertSRGBToLinear(),b.emissive&&b.emissive.convertSRGBToLinear();let ie=$.transparent,Ae=$.transparency;if(Ae===void 0&&ie&&(Ae={float:1}),ie===void 0&&Ae&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&Ae)if(ie.data.texture)b.transparent=!0;else{let xe=ie.data.color;switch(ie.opaque){case"A_ONE":b.opacity=xe[3]*Ae.float;break;case"RGB_ZERO":b.opacity=1-xe[0]*Ae.float;break;case"A_ZERO":b.opacity=1-xe[3]*Ae.float;break;case"RGB_ONE":b.opacity=xe[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}b.opacity<1&&(b.transparent=!0)}if(M.extra!==void 0&&M.extra.technique!==void 0){let xe=M.extra.technique;for(let Se in xe){let Ne=xe[Se];switch(Se){case"double_sided":b.side=Ne===1?wn:Fn;break;case"bump":b.normalMap=w(Ne.texture),b.normalScale=new Je(1,1);break}}}return b}function We(y){return x(qe.materials[y],Ce)}function lt(y){let g={name:y.getAttribute("name")};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"optics":g.optics=ue(w);break}}qe.cameras[y.getAttribute("id")]=g}function ue(y){for(let g=0;g<y.childNodes.length;g++){let M=y.childNodes[g];switch(M.nodeName){case"technique_common":return bt(M)}}return{}}function bt(y){let g={};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];switch(b.nodeName){case"perspective":case"orthographic":g.technique=b.nodeName,g.parameters=ut(b);break}}return g}function ut(y){let g={};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":g[b.nodeName]=parseFloat(b.textContent);break}}return g}function Ze(y){let g;switch(y.optics.technique){case"perspective":g=new qt(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let M=y.optics.parameters.ymag,b=y.optics.parameters.xmag,w=y.optics.parameters.aspect_ratio;b=b===void 0?M*w:b,M=M===void 0?b/w:M,b*=.5,M*=.5,g=new Er(-b,b,M,-M,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:g=new qt;break}return g.name=y.name||"",g}function ke(y){let g=qe.cameras[y];return g!==void 0?x(g,Ze):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Re(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique_common":g=it(w);break}}qe.lights[y.getAttribute("id")]=g}function it(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"directional":case"point":case"spot":case"ambient":g.technique=w.nodeName,g.parameters=xt(w)}}return g}function xt(y){let g={};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":let $=r(w.textContent);g.color=new rt().fromArray($).convertSRGBToLinear();break;case"falloff_angle":g.falloffAngle=parseFloat(w.textContent);break;case"quadratic_attenuation":let ie=parseFloat(w.textContent);g.distance=ie?Math.sqrt(1/ie):0;break}}return g}function It(y){let g;switch(y.technique){case"directional":g=new Lr;break;case"point":g=new jo;break;case"spot":g=new $o;break;case"ambient":g=new Zo;break}return y.parameters.color&&g.color.copy(y.parameters.color),y.parameters.distance&&(g.distance=y.parameters.distance),g}function ct(y){let g=qe.lights[y];return g!==void 0?x(g,It):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function _e(y){let g={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},M=i(y,"mesh")[0];if(M!==void 0){for(let b=0;b<M.childNodes.length;b++){let w=M.childNodes[b];if(w.nodeType!==1)continue;let $=w.getAttribute("id");switch(w.nodeName){case"source":g.sources[$]=O(w);break;case"vertices":g.vertices=ve(w);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",w.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":g.primitives.push(be(w));break;default:console.log(w)}}qe.geometries[y.getAttribute("id")]=g}}function O(y){let g={array:[],stride:3};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"float_array":g.array=r(b.textContent);break;case"Name_array":g.array=s(b.textContent);break;case"technique_common":let w=i(b,"accessor")[0];w!==void 0&&(g.stride=parseInt(w.getAttribute("stride")));break}}return g}function ve(y){let g={};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];b.nodeType===1&&(g[b.getAttribute("semantic")]=a(b.getAttribute("source")))}return g}function be(y){let g={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let M=0,b=y.childNodes.length;M<b;M++){let w=y.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let $=a(w.getAttribute("source")),ie=w.getAttribute("semantic"),Ae=parseInt(w.getAttribute("offset")),xe=parseInt(w.getAttribute("set")),Se=xe>0?ie+xe:ie;g.inputs[Se]={id:$,offset:Ae},g.stride=Math.max(g.stride,Ae+1),ie==="TEXCOORD"&&(g.hasUV=!0);break;case"vcount":g.vcount=o(w.textContent);break;case"p":g.p=o(w.textContent);break}}return g}function Ye(y){let g={};for(let M=0;M<y.length;M++){let b=y[M];g[b.type]===void 0&&(g[b.type]=[]),g[b.type].push(b)}return g}function Ge(y){let g=0;for(let M=0,b=y.length;M<b;M++)y[M].hasUV===!0&&g++;g>0&&g<y.length&&(y.uvsNeedsFix=!0)}function St(y){let g={},M=y.sources,b=y.vertices,w=y.primitives;if(w.length===0)return{};let $=Ye(w);for(let ie in $){let Ae=$[ie];Ge(Ae),g[ie]=Et(Ae,M,b)}return g}function Et(y,g,M){let b={},w={array:[],stride:0},$={array:[],stride:0},ie={array:[],stride:0},Ae={array:[],stride:0},xe={array:[],stride:0},Se={array:[],stride:4},Ne={array:[],stride:4},ce=new Ln,Ie=[],Pe=0;for(let He=0;He<y.length;He++){let Oe=y[He],Bt=Oe.inputs,wt=0;switch(Oe.type){case"lines":case"linestrips":wt=Oe.count*2;break;case"triangles":wt=Oe.count*3;break;case"polylist":for(let gt=0;gt<Oe.count;gt++){let yt=Oe.vcount[gt];switch(yt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(yt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Oe.type)}ce.addGroup(Pe,wt,He),Pe+=wt,Oe.material&&Ie.push(Oe.material);for(let gt in Bt){let yt=Bt[gt];switch(gt){case"VERTEX":for(let Mi in M){let Rn=M[Mi];switch(Mi){case"POSITION":let Ys=w.array.length;if(Mt(Oe,g[Rn],yt.offset,w.array),w.stride=g[Rn].stride,g.skinWeights&&g.skinIndices&&(Mt(Oe,g.skinIndices,yt.offset,Se.array),Mt(Oe,g.skinWeights,yt.offset,Ne.array)),Oe.hasUV===!1&&y.uvsNeedsFix===!0){let _m=(w.array.length-Ys)/w.stride;for(let Tu=0;Tu<_m;Tu++)ie.array.push(0,0)}break;case"NORMAL":Mt(Oe,g[Rn],yt.offset,$.array),$.stride=g[Rn].stride;break;case"COLOR":Mt(Oe,g[Rn],yt.offset,xe.array),xe.stride=g[Rn].stride;break;case"TEXCOORD":Mt(Oe,g[Rn],yt.offset,ie.array),ie.stride=g[Rn].stride;break;case"TEXCOORD1":Mt(Oe,g[Rn],yt.offset,Ae.array),ie.stride=g[Rn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Mi)}}break;case"NORMAL":Mt(Oe,g[yt.id],yt.offset,$.array),$.stride=g[yt.id].stride;break;case"COLOR":Mt(Oe,g[yt.id],yt.offset,xe.array,!0),xe.stride=g[yt.id].stride;break;case"TEXCOORD":Mt(Oe,g[yt.id],yt.offset,ie.array),ie.stride=g[yt.id].stride;break;case"TEXCOORD1":Mt(Oe,g[yt.id],yt.offset,Ae.array),Ae.stride=g[yt.id].stride;break}}}return w.array.length>0&&ce.setAttribute("position",new Lt(w.array,w.stride)),$.array.length>0&&ce.setAttribute("normal",new Lt($.array,$.stride)),xe.array.length>0&&ce.setAttribute("color",new Lt(xe.array,xe.stride)),ie.array.length>0&&ce.setAttribute("uv",new Lt(ie.array,ie.stride)),Ae.array.length>0&&ce.setAttribute("uv1",new Lt(Ae.array,Ae.stride)),Se.array.length>0&&ce.setAttribute("skinIndex",new Lt(Se.array,Se.stride)),Ne.array.length>0&&ce.setAttribute("skinWeight",new Lt(Ne.array,Ne.stride)),b.data=ce,b.type=y[0].type,b.materialKeys=Ie,b}function Mt(y,g,M,b,w=!1){let $=y.p,ie=y.stride,Ae=y.vcount;function xe(ce){let Ie=$[ce+M]*Ne,Pe=Ie+Ne;for(;Ie<Pe;Ie++)b.push(Se[Ie]);if(w){let He=b.length-Ne-1;za.setRGB(b[He+0],b[He+1],b[He+2]).convertSRGBToLinear(),b[He+0]=za.r,b[He+1]=za.g,b[He+2]=za.b}}let Se=g.array,Ne=g.stride;if(y.vcount!==void 0){let ce=0;for(let Ie=0,Pe=Ae.length;Ie<Pe;Ie++){let He=Ae[Ie];if(He===4){let Oe=ce+ie*0,Bt=ce+ie*1,wt=ce+ie*2,gt=ce+ie*3;xe(Oe),xe(Bt),xe(gt),xe(Bt),xe(wt),xe(gt)}else if(He===3){let Oe=ce+ie*0,Bt=ce+ie*1,wt=ce+ie*2;xe(Oe),xe(Bt),xe(wt)}else if(He>4)for(let Oe=1,Bt=He-2;Oe<=Bt;Oe++){let wt=ce+ie*0,gt=ce+ie*Oe,yt=ce+ie*(Oe+1);xe(wt),xe(gt),xe(yt)}ce+=ie*He}}else for(let ce=0,Ie=$.length;ce<Ie;ce+=ie)xe(ce)}function jt(y){return x(qe.geometries[y],St)}function Tt(y){let g={name:y.getAttribute("name")||"",joints:{},links:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Oa(b,g);break}}qe.kinematicsModels[y.getAttribute("id")]=g}function en(y){return y.build!==void 0?y.build:y}function kn(y){return x(qe.kinematicsModels[y],en)}function Oa(y,g){for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"joint":g.joints[b.getAttribute("sid")]=Yl(b);break;case"link":g.links.push(Br(b));break}}}function Yl(y){let g;for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":g=Xs(b);break}}return g}function Xs(y){let g={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new N,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"axis":let w=r(b.textContent);g.axis.fromArray(w);break;case"limits":let $=b.getElementsByTagName("max")[0],ie=b.getElementsByTagName("min")[0];g.limits.max=parseFloat($.textContent),g.limits.min=parseFloat(ie.textContent);break}}return g.limits.min>=g.limits.max&&(g.static=!0),g.middlePosition=(g.limits.min+g.limits.max)/2,g}function Br(y){let g={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":g.attachments.push(qs(b));break;case"matrix":case"translate":case"rotate":g.transforms.push(zr(b));break}}return g}function qs(y){let g={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"link":g.links.push(Br(b));break;case"matrix":case"translate":case"rotate":g.transforms.push(zr(b));break}}return g}function zr(y){let g={type:y.nodeName},M=r(y.textContent);switch(g.type){case"matrix":g.obj=new at,g.obj.fromArray(M).transpose();break;case"translate":g.obj=new N,g.obj.fromArray(M);break;case"rotate":g.obj=new N,g.obj.fromArray(M),g.angle=rs.degToRad(M[3]);break}return g}function Fa(y){let g={name:y.getAttribute("name")||"",rigidBodies:{}};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"rigid_body":g.rigidBodies[b.getAttribute("name")]={},$l(b,g.rigidBodies[b.getAttribute("name")]);break}}qe.physicsModels[y.getAttribute("id")]=g}function $l(y,g){for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"technique_common":jl(b,g);break}}}function jl(y,g){for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"inertia":g.inertia=r(b.textContent);break;case"mass":g.mass=r(b.textContent)[0];break}}}function Zl(y){let g={bindJointAxis:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"bind_joint_axis":g.bindJointAxis.push(A(b));break}}qe.kinematicsScenes[a(y.getAttribute("url"))]=g}function A(y){let g={target:y.getAttribute("target").split("/").pop()};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"axis":let w=b.getElementsByTagName("param")[0];g.axis=w.textContent;let $=g.axis.split("inst_").pop().split("axis")[0];g.jointIndex=$.substring(0,$.length-1);break}}return g}function k(y){return y.build!==void 0?y.build:y}function Y(y){return x(qe.kinematicsScenes[y],k)}function J(){let y=Object.keys(qe.kinematicsModels)[0],g=Object.keys(qe.kinematicsScenes)[0],M=Object.keys(qe.visualScenes)[0];if(y===void 0||g===void 0)return;let b=kn(y),w=Y(g),$=Hr(M),ie=w.bindJointAxis,Ae={};for(let Ne=0,ce=ie.length;Ne<ce;Ne++){let Ie=ie[Ne],Pe=Ft.querySelector('[sid="'+Ie.target+'"]');if(Pe){let He=Pe.parentElement;xe(Ie.jointIndex,He)}}function xe(Ne,ce){let Ie=ce.getAttribute("name"),Pe=b.joints[Ne];$.traverse(function(He){He.name===Ie&&(Ae[Ne]={object:He,transforms:G(ce),joint:Pe,position:Pe.zeroPosition})})}let Se=new at;Eu={joints:b&&b.joints,getJointValue:function(Ne){let ce=Ae[Ne];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Ne+" doesn't exist.")},setJointValue:function(Ne,ce){let Ie=Ae[Ne];if(Ie){let Pe=Ie.joint;if(ce>Pe.limits.max||ce<Pe.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ne+" value "+ce+" outside of limits (min: "+Pe.limits.min+", max: "+Pe.limits.max+").");else if(Pe.static)console.warn("THREE.ColladaLoader: Joint "+Ne+" is static.");else{let He=Ie.object,Oe=Pe.axis,Bt=Ie.transforms;Ee.identity();for(let wt=0;wt<Bt.length;wt++){let gt=Bt[wt];if(gt.sid&&gt.sid.indexOf(Ne)!==-1)switch(Pe.type){case"revolute":Ee.multiply(Se.makeRotationAxis(Oe,rs.degToRad(ce)));break;case"prismatic":Ee.multiply(Se.makeTranslation(Oe.x*ce,Oe.y*ce,Oe.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Pe.type);break}else switch(gt.type){case"matrix":Ee.multiply(gt.obj);break;case"translate":Ee.multiply(Se.makeTranslation(gt.obj.x,gt.obj.y,gt.obj.z));break;case"scale":Ee.scale(gt.obj);break;case"rotate":Ee.multiply(Se.makeRotationAxis(gt.obj,gt.angle));break}}He.matrix.copy(Ee),He.matrix.decompose(He.position,He.quaternion,He.scale),Ae[Ne].position=ce}}else console.log("THREE.ColladaLoader: "+Ne+" does not exist.")}}}function G(y){let g=[],M=Ft.querySelector('[id="'+y.id+'"]');for(let b=0;b<M.childNodes.length;b++){let w=M.childNodes[b];if(w.nodeType!==1)continue;let $,ie;switch(w.nodeName){case"matrix":$=r(w.textContent);let Ae=new at().fromArray($).transpose();g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:Ae});break;case"translate":case"scale":$=r(w.textContent),ie=new N().fromArray($),g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:ie});break;case"rotate":$=r(w.textContent),ie=new N().fromArray($);let xe=rs.degToRad($[3]);g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:ie,angle:xe});break}}return g}function we(y){let g=y.getElementsByTagName("node");for(let M=0;M<g.length;M++){let b=g[M];b.hasAttribute("id")===!1&&b.setAttribute("id",l())}}let Ee=new at,Ue=new N;function Xe(y){let g={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new at,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];if(b.nodeType!==1)continue;let w;switch(b.nodeName){case"node":g.nodes.push(b.getAttribute("id")),Xe(b);break;case"instance_camera":g.instanceCameras.push(a(b.getAttribute("url")));break;case"instance_controller":g.instanceControllers.push(st(b));break;case"instance_light":g.instanceLights.push(a(b.getAttribute("url")));break;case"instance_geometry":g.instanceGeometries.push(st(b));break;case"instance_node":g.instanceNodes.push(a(b.getAttribute("url")));break;case"matrix":w=r(b.textContent),g.matrix.multiply(Ee.fromArray(w).transpose()),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":w=r(b.textContent),Ue.fromArray(w),g.matrix.multiply(Ee.makeTranslation(Ue.x,Ue.y,Ue.z)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":w=r(b.textContent);let $=rs.degToRad(w[3]);g.matrix.multiply(Ee.makeRotationAxis(Ue.fromArray(w),$)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":w=r(b.textContent),g.matrix.scale(Ue.fromArray(w)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return Pt(g.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",g.id):qe.nodes[g.id]=g,g}function st(y){let g={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let M=0;M<y.childNodes.length;M++){let b=y.childNodes[M];switch(b.nodeName){case"bind_material":let w=b.getElementsByTagName("instance_material");for(let $=0;$<w.length;$++){let ie=w[$],Ae=ie.getAttribute("symbol"),xe=ie.getAttribute("target");g.materials[Ae]=a(xe)}break;case"skeleton":g.skeletons.push(a(b.textContent));break;default:break}}return g}function tt(y,g){let M=[],b=[],w,$,ie;for(w=0;w<y.length;w++){let Se=y[w],Ne;if(Pt(Se))Ne=Ke(Se),nt(Ne,g,M);else if(bi(Se)){let Ie=qe.visualScenes[Se].children;for(let Pe=0;Pe<Ie.length;Pe++){let He=Ie[Pe];if(He.type==="JOINT"){let Oe=Ke(He.id);nt(Oe,g,M)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Se)}for(w=0;w<g.length;w++)for($=0;$<M.length;$++)if(ie=M[$],ie.bone.name===g[w].name){b[w]=ie,ie.processed=!0;break}for(w=0;w<M.length;w++)ie=M[w],ie.processed===!1&&(b.push(ie),ie.processed=!0);let Ae=[],xe=[];for(w=0;w<b.length;w++)ie=b[w],Ae.push(ie.bone),xe.push(ie.boneInverse);return new zo(Ae,xe)}function nt(y,g,M){y.traverse(function(b){if(b.isBone===!0){let w;for(let $=0;$<g.length;$++){let ie=g[$];if(ie.name===b.name){w=ie.boneInverse;break}}w===void 0&&(w=new at),M.push({bone:b,boneInverse:w,processed:!1})}})}function Ot(y){let g=[],M=y.matrix,b=y.nodes,w=y.type,$=y.instanceCameras,ie=y.instanceControllers,Ae=y.instanceLights,xe=y.instanceGeometries,Se=y.instanceNodes;for(let ce=0,Ie=b.length;ce<Ie;ce++)g.push(Ke(b[ce]));for(let ce=0,Ie=$.length;ce<Ie;ce++){let Pe=ke($[ce]);Pe!==null&&g.push(Pe.clone())}for(let ce=0,Ie=ie.length;ce<Ie;ce++){let Pe=ie[ce],He=se(Pe.id),Oe=jt(He.id),Bt=Hn(Oe,Pe.materials),wt=Pe.skeletons,gt=He.skin.joints,yt=tt(wt,gt);for(let Mi=0,Rn=Bt.length;Mi<Rn;Mi++){let Ys=Bt[Mi];Ys.isSkinnedMesh&&(Ys.bind(yt,He.skin.bindMatrix),Ys.normalizeSkinWeights()),g.push(Ys)}}for(let ce=0,Ie=Ae.length;ce<Ie;ce++){let Pe=ct(Ae[ce]);Pe!==null&&g.push(Pe.clone())}for(let ce=0,Ie=xe.length;ce<Ie;ce++){let Pe=xe[ce],He=jt(Pe.id),Oe=Hn(He,Pe.materials);for(let Bt=0,wt=Oe.length;Bt<wt;Bt++)g.push(Oe[Bt])}for(let ce=0,Ie=Se.length;ce<Ie;ce++)g.push(Ke(Se[ce]).clone());let Ne;if(b.length===0&&g.length===1)Ne=g[0];else{Ne=w==="JOINT"?new ha:new mn;for(let ce=0;ce<g.length;ce++)Ne.add(g[ce])}return Ne.name=w==="JOINT"?y.sid:y.name,Ne.matrix.copy(M),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne}let xn=new Kt({name:hi.DEFAULT_MATERIAL_NAME,color:16711935});function Wt(y,g){let M=[];for(let b=0,w=y.length;b<w;b++){let $=g[y[b]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[b]),M.push(xn)):M.push(We($))}return M}function Hn(y,g){let M=[];for(let b in y){let w=y[b],$=Wt(w.materialKeys,g);if($.length===0&&(b==="lines"||b==="linestrips"?$.push(new Ar):$.push(new da)),b==="lines"||b==="linestrips")for(let Se=0,Ne=$.length;Se<Ne;Se++){let ce=$[Se];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Ie=new Ar;Ie.color.copy(ce.color),Ie.opacity=ce.opacity,Ie.transparent=ce.transparent,$[Se]=Ie}}let ie=w.data.attributes.skinIndex!==void 0,Ae=$.length===1?$[0]:$,xe;switch(b){case"lines":xe=new ko(w.data,Ae);break;case"linestrips":xe=new ua(w.data,Ae);break;case"triangles":case"polylist":ie?xe=new Fo(w.data,Ae):xe=new kt(w.data,Ae);break}M.push(xe)}return M}function Pt(y){return qe.nodes[y]!==void 0}function Ke(y){return x(qe.nodes[y],Ot)}function kr(y){let g={name:y.getAttribute("name"),children:[]};we(y);let M=i(y,"node");for(let b=0;b<M.length;b++)g.children.push(Xe(M[b]));qe.visualScenes[y.getAttribute("id")]=g}function Nt(y){let g=new mn;g.name=y.name;let M=y.children;for(let b=0;b<M.length;b++){let w=M[b];g.add(Ke(w.id))}return g}function bi(y){return qe.visualScenes[y]!==void 0}function Hr(y){return x(qe.visualScenes[y],Nt)}function vs(y){let g=i(y,"instance_visual_scene")[0];return Hr(a(g.getAttribute("url")))}function Vr(){let y=qe.clips;if(c(y)===!0){if(c(qe.animations)===!1){let g=[];for(let M in qe.animations){let b=P(M);for(let w=0,$=b.length;w<$;w++)g.push(b[w])}ka.push(new fa("default",-1,g))}}else for(let g in y)ka.push(K(g))}function Zt(y){let g="",M=[y];for(;M.length;){let b=M.shift();b.nodeType===Node.TEXT_NODE?g+=b.textContent:(g+=`
`,M.push.apply(M,b.childNodes))}return g.trim()}if(e.length===0)return{scene:new Is};let ai=new DOMParser().parseFromString(e,"application/xml"),Ft=i(ai,"COLLADA")[0],hn=ai.getElementsByTagName("parsererror")[0];if(hn!==void 0){let y=i(hn,"div")[0],g;return y?g=y.textContent:g=Zt(hn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,g),null}let Gr=Ft.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Gr);let Ba=h(i(Ft,"asset")[0]),Wr=new qo(this.manager);Wr.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Jl;ya&&(Jl=new ya(this.manager),Jl.setPath(this.resourcePath||t));let za=new rt,ka=[],Eu={},ym=0,qe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ft,"library_animations","animation",p),m(Ft,"library_animation_clips","animation_clip",B),m(Ft,"library_controllers","controller",H),m(Ft,"library_images","image",re),m(Ft,"library_effects","effect",Be),m(Ft,"library_materials","material",De),m(Ft,"library_cameras","camera",lt),m(Ft,"library_lights","light",Re),m(Ft,"library_geometries","geometry",_e),m(Ft,"library_nodes","node",Xe),m(Ft,"library_visual_scenes","visual_scene",kr),m(Ft,"library_kinematics_models","kinematics_model",Tt),m(Ft,"library_physics_models","physics_model",Fa),m(Ft,"scene","instance_kinematics_scene",Zl),_(qe.animations,v),_(qe.clips,ne),_(qe.controllers,z),_(qe.images,oe),_(qe.effects,he),_(qe.materials,Ce),_(qe.cameras,Ze),_(qe.lights,It),_(qe.geometries,St),_(qe.visualScenes,Nt),Vr(),J();let Ha=vs(i(Ft,"scene")[0]);return Ha.animations=ka,Ba.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Ha.rotation.set(-Math.PI/2,0,0)),Ha.scale.multiplyScalar(Ba.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),ka},kinematics:Eu,library:qe,scene:Ha}}};var Bf=new sn,ol=new N,Os=class extends Ko{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Lt(e,3)),this.setAttribute("uv",new Lt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Us(t,6,1);return this.setAttribute("instanceStart",new qn(i,3,0)),this.setAttribute("instanceEnd",new qn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Us(t,6,1);return this.setAttribute("instanceColorStart",new qn(i,3,0)),this.setAttribute("instanceColorEnd",new qn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Vo(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Bf.setFromBufferAttribute(t),this.boundingBox.union(Bf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ol.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ol)),ol.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ol));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Sn.line={uniforms:sl.merge([me.common,me.fog,me.line]),vertexShader:`
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
		`};var Fi=class extends ei{constructor(e){super({type:"LineMaterial",uniforms:sl.clone(Sn.line.uniforms),vertexShader:Sn.line.vertexShader,fragmentShader:Sn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var zf=new N,kf=new N,rn=new _t,an=new _t,ui=new _t,bh=new N,Mh=new at,on=new el,Hf=new N,ll=new sn,cl=new Xn,di=new _t,fi,Fs;function Vf(n,e,t){return di.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),di.multiplyScalar(1/di.w),di.x=Fs/t.width,di.y=Fs/t.height,di.applyMatrix4(n.projectionMatrixInverse),di.multiplyScalar(1/di.w),Math.abs(Math.max(di.x,di.y))}function Hv(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){on.start.fromBufferAttribute(s,a),on.end.fromBufferAttribute(r,a),on.applyMatrix4(t);let c=new N,h=new N;fi.distanceSqToSegment(on.start,on.end,h,c),h.distanceTo(c)<Fs*.5&&e.push({point:h,pointOnLine:c,distance:fi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function Vv(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),d=-e.near;fi.at(1,ui),ui.w=1,ui.applyMatrix4(e.matrixWorldInverse),ui.applyMatrix4(i),ui.multiplyScalar(1/ui.w),ui.x*=r.x/2,ui.y*=r.y/2,ui.z=0,bh.copy(ui),Mh.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,m=h;f<m;f++){if(rn.fromBufferAttribute(l,f),an.fromBufferAttribute(c,f),rn.w=1,an.w=1,rn.applyMatrix4(Mh),an.applyMatrix4(Mh),rn.z>d&&an.z>d)continue;if(rn.z>d){let v=rn.z-an.z,P=(rn.z-d)/v;rn.lerp(an,P)}else if(an.z>d){let v=an.z-rn.z,P=(an.z-d)/v;an.lerp(rn,P)}rn.applyMatrix4(i),an.applyMatrix4(i),rn.multiplyScalar(1/rn.w),an.multiplyScalar(1/an.w),rn.x*=r.x/2,rn.y*=r.y/2,an.x*=r.x/2,an.y*=r.y/2,on.start.copy(rn),on.start.z=0,on.end.copy(an),on.end.z=0;let x=on.closestPointToPointParameter(bh,!0);on.at(x,Hf);let p=rs.lerp(rn.z,an.z,x),u=p>=-1&&p<=1,T=bh.distanceTo(Hf)<Fs*.5;if(u&&T){on.start.fromBufferAttribute(l,f),on.end.fromBufferAttribute(c,f),on.start.applyMatrix4(o),on.end.applyMatrix4(o);let v=new N,P=new N;fi.distanceSqToSegment(on.start,on.end,P,v),t.push({point:P,pointOnLine:v,distance:fi.origin.distanceTo(P),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var _a=class extends kt{constructor(e=new Os,t=new Fi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)zf.fromBufferAttribute(t,o),kf.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+zf.distanceTo(kf);let r=new Us(s,2,1);return e.setAttribute("instanceDistanceStart",new qn(r,1,0)),e.setAttribute("instanceDistanceEnd",new qn(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;fi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Fs=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),cl.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Fs*.5;else{let d=Math.max(s.near,cl.distanceToPoint(fi.origin));c=Vf(s,d,l.resolution)}if(cl.radius+=c,fi.intersectsSphere(cl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ll.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=Fs*.5;else{let d=Math.max(s.near,ll.distanceToPoint(fi.origin));h=Vf(s,d,l.resolution)}ll.expandByScalar(h),fi.intersectsBox(ll)!==!1&&(i?Hv(this,t):Vv(this,s,t))}};var as=["en","fr","ca","es"];var Gv={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Yf(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of Gv[e]||as)if(n[t])return n[t];return""}var xa={en:{all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",close:"Close",soundOn:"Sound on",soundOff:"Mute",hv_tab:"Video",hv_grid:"Grid",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_sound:"Sound",hv_cam:"Camera",hv_camNote:"Your image stays on your screen.",hv_camDenied:"Camera unavailable.",sent:"Your slogan is now scrolling at the top.",bsLabel:"Type your bullshit slogan, then press Enter"},fr:{all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",hv_tab:"Vid\xE9o",hv_grid:"Grille",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_sound:"Son",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran.",hv_camDenied:"Cam\xE9ra indisponible.",sent:"Ton slogan d\xE9file en haut de la page.",bsLabel:"Tape ton bullshit slogan, puis Entr\xE9e"},ca:{all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",hv_tab:"V\xEDdeo",hv_grid:"Graella",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_sound:"So",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla.",hv_camDenied:"C\xE0mera no disponible.",sent:"El teu esl\xF2gan ja passa a dalt de la p\xE0gina.",bsLabel:"Escriu el teu bullshit slogan i prem Retorn"},es:{all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_tab:"V\xEDdeo",hv_grid:"Cuadr\xEDcula",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_sound:"Sonido",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla.",hv_camDenied:"C\xE1mara no disponible.",sent:"Tu eslogan ya pasa arriba de la p\xE1gina.",bsLabel:"Escribe tu bullshit slogan y pulsa Intro"}},Wv={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},wh={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function Sh(){return Object.fromEntries(as.map(n=>[n,""]))}function Bs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:as.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||Sh(),e.sub=e.sub||Sh(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||Sh(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=Wv[t.layout]?t.layout:"carousel",t.card=wh[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network,t.skills=t.skills===void 0?t.id==="expertise":!!t.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(as.map(s=>[s,t[i]||""]))),as.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit="")}),t.spots=Array.isArray(t.spots)?t.spots.filter(Ah):[],t.skills=Array.isArray(t.skills)?t.skills.filter(i=>typeof i=="string"):[],t.published===void 0&&(t.published=!0)}),n}function Eh(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function $f(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function jf(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function $e(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var Xv=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Th(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!Xv.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function dl(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var Ah=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function os(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function Ch(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Gf(n){try{let e=await Ch();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Wf(n,e){let t=await Ch();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function Xf(n){try{let e=await Ch();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var hl=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Bs(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Bs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var ul=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Gf("demo:content:v6");if(e)return Bs(e);if(window.HC_CONTENT)return Bs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Bs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await Xf("demo:file:"+i.path);continue}await Wf("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Wf("demo:content:v6",e),"demo"}async reset(){await Xf("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Gf("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},qf=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],fl=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl",".skl .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],qv=["font","size","lh","weight","italic","ls","upper"],Zf=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function Yv(n){let e=qf.find(i=>i.id===n);if(e)return e.css;let t=Zf(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:qf[0].css}function Bi(n,e){let t=fl.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...qv,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=Yv(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function Jf(n){let e=[],t=[],i=[];for(let s of fl){let r=n&&n.typo&&n.typo[s.id]||{},o=Bi(n,s.id),a=c=>r[c]!==void 0&&r[c]!==""&&r[c]!==null&&r[c]!==s[c];if(s.vars){a("font")&&e.push(`:root { ${s.vars.map(c=>`${c}: ${o.css};`).join(" ")} }`);continue}if(!s.sel)continue;let l=[];if(a("font")&&l.push(`font-family: ${o.css}`),a("size")&&l.push(s.clamp?`font-size: clamp(${Math.round(o.size*s.clamp[0])}px, ${(o.size/s.clamp[1]*100).toFixed(2)}vw, ${o.size}px)`:`font-size: ${o.size}px`),(a("lh")||a("size")&&!s.clamp&&!a("lh")&&s.lh)&&l.push(`line-height: ${a("lh")?o.lh:+(s.lh*o.size/s.size).toFixed(1)}px`),a("weight")&&l.push(`font-weight: ${o.weight}`),a("italic")&&l.push(`font-style: ${o.italic?"italic":"normal"}`),a("ls")&&l.push(`letter-spacing: ${o.ls}em`),a("upper")&&l.push(`text-transform: ${o.upper?"uppercase":"none"}`),l.length&&e.push(`${s.sel.join(", ")} { ${l.join("; ")} }`),s.mob&&(a("size")||a("lh"))){let c=a("lh")?o.lh:s.lh*o.size/s.size;t.push(`${s.sel.join(", ")} { font-size: ${Math.round(o.size*s.mob)}px; line-height: ${Math.round(c*s.mob)}px }`),i.push(`${s.sel.join(", ")} { font-size: ${Math.round(o.size*s.mob*.8)}px; line-height: ${Math.round(c*s.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function Kf(n){let e=new Map;for(let t of fl){let i=Bi(n,t.id),s=Zf(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function Rh(n){let e=new Set;for(let t of fl){let i=Bi(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Qf(n,e,t=!1){let i=Bi(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let a=r.measureText(o),l=(a.actualBoundingBoxAscent||i.size*1.4)-(a.actualBoundingBoxDescent||0);if(r.fillText(o,120,120+l/2),t){let c=r.getImageData(0,0,240,240),h=c.data;for(let d=0;d<h.length;d+=4)h[d]=255-h[d],h[d+1]=255-h[d+1],h[d+2]=255-h[d+2];r.putImageData(c,0,0)}return s.toDataURL("image/png")}var ep=window.HC_BASE||"",vl=window.HC_MODE==="demo"?new ul(ep):new hl(ep),cs=window.HC_ASSETS||null,$v=location.protocol==="file:",wp=20261102;window.HC_SITE_VERSION=wp;var Gt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,Tn=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Gt&&Gt.files&&Gt.files[e]?Gt.files[e]:cs&&cs[e]&&cs[e].startsWith("data:")?cs[e]:vl.url(e)};async function jv(n){if(cs&&cs[n]&&!cs[n].startsWith("data:"))return cs[n];let e=await fetch(Tn(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var je=null,Hi="en",Fe=n=>Yf(n,Hi),pt=n=>(xa[Hi]||xa.en)[n],Zv=42,le={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},El={zoom:2,focus:300},Jv=.08,tp={};function Ep(n){if(le.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{le[t]=tp[t]}):(e.forEach(t=>{tp[t]=le[t]}),Object.assign(le,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),le.animationMode=n}var Hh=class{constructor(e){this.section=e,this.all=Eh(je,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:{en:xa.en.all,fr:xa.fr.all}},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.section.perPage),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?Fe(e.label):""}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}},ee={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:le.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Vt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Hh(this.section.def)}},Vt=[],vt={x:0,y:0,z:0,zoom:El.zoom},ni={x:0,y:0,z:0},ki=0,xi=[],Kv={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function An(n,e,t,i={}){for(let r of xi)if(r.obj===n)for(let o in t)delete r.props[o];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ki+(i.delay||0),ease:Kv[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return xi.push(s),s}var Ca=(n,e)=>An({},n,{},{onComplete:e,ease:"linear"});function yi(n){for(let e=xi.length-1;e>=0;e--)xi[e].obj===n&&xi.splice(e,1)}function Tl(n){return xi.some(e=>e.obj===n&&ki>=e.start)}function Tp(n,e){if(!e&&ki<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ki-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],o=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(o-r)):r+(o-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function Qv(){for(let n of xi.slice())if(Tp(n,!1)){let e=xi.indexOf(n);e>=0&&xi.splice(e,1),n.onComplete&&n.onComplete()}}function Ap(){xi.splice(0).forEach(n=>Tp(n,!0))}function eb(n,e,t,i,s,r,o){yi(vt),An(vt,o,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-vt.x)/2,y:e+500,z:(t-vt.z)/2}}),ru(i,s,r,o)}function ru(n,e,t,i){yi(ni),An(ni,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function tb(n,e,t,i){yi(vt),An(vt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var Al=1,gn=n=>n<=1?1:1-Math.pow(1-1/n,Al),vi=Math.PI/180,Vh=(n,e,t)=>new N(n,e,-t),ls=(n,e,t)=>[-n,e,t],Nn=document.getElementById("stage"),ys=new la({canvas:Nn,antialias:!0});ys.debug.checkShaderErrors=!1;ys.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ys.setClearColor(16777215,1);var fs=new Is;fs.add(new Yo(16777215,14211288,2.2));var Cp=new Lr(16777215,1.2);Cp.position.set(300,800,500);fs.add(Cp);var $n=new qt(60,1,1,6e4),Rp=new Fi({color:le.lineColor,linewidth:le.lineThickness}),Gh=new Fi({color:le.planeFrameColor,linewidth:le.planeFrameThickness}),Pp=new Fi({color:le.planeFrameSelectColor,linewidth:le.planeFrameThickness}),bl=new Fi({color:le.locatorColor,linewidth:1.3}),Lp=[Rp,Gh,Pp,bl],Ip=new pa;Ip.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Tn(n));var Ph=new Map;function Vs(n){return n?$v&&!/^(data:|blob:|https?:)/.test(Tn(n))?Promise.reject(new Error("local")):(Ph.has(n)||Ph.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(Tn(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=Tn(n)})),Ph.get(n)):Promise.reject(new Error("no image"))}function au(n){return n.colorSpace=zt,n.anisotropy=Math.min(8,ys.capabilities.getMaxAnisotropy()),n}var nb=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=au(new Cr(n)),t=new ns(1,1),i=new Is;return[Fn,nn,wn].forEach(s=>i.add(new kt(t,new Kt({map:e,side:s})))),i.add(new kt(t,new Kt({color:1118481}))),i.add(new ca(new Tr({map:e,transparent:!0}))),i})(),Bn=0,cn=0,jn=!1,Cl=()=>jn,Np=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},Cn=()=>{let n=je.settings.accent||"#ffcc00";return Cl()?Np(n):n},_n='Georgia, Gelasio, "Times New Roman", serif',_i='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',ou=1,In=n=>Math.round(n*ou);function Ws(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...je?Rh(je.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var np=0,Dp=[];function ib(){clearTimeout(np),np=setTimeout(async()=>{try{await Promise.all(Rh(je.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}je.settings.logo||Zh(),Qe&&!Qe.loading&&Qe.retexture()},150)}function Up(){let n=je.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=Jf(n);e.textContent!==t&&(e.textContent=t);let i=Kf(n);document.querySelectorAll("link[data-hc-font]").forEach(s=>{i.includes(s.href)||s.remove()}),i.forEach(s=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(s)}"]`)){let r=document.createElement("link");r.rel="stylesheet",r.href=s,r.dataset.hcFont="",Dp.push(new Promise(o=>{r.onload=()=>{o(),ib()},r.onerror=o})),document.head.appendChild(r)}}),_n=Bi(n,"card").css,_i=Bi(n,"cardsm").css,ou=Math.max(.5,Math.min(2,(+Bi(n,"card").scale||100)/100))}function ti(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function yn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),au(new Cr(s))}function Vi(n,e,t,i,s,r){let o=Math.max(s/e.naturalWidth,r/e.naturalHeight),a=s/o,l=r/o;n.drawImage(e,(e.naturalWidth-a)/2,(e.naturalHeight-l)/2,a,l,t,i,s,r),Cl()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Wh=n=>String(n).split(/[\s&]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("");function Op(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function lu(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Fp=n=>Vt.some(e=>e.def.id===n.section),Bp=n=>jf(je,n).filter(Fp),sb=n=>$f(je,n).filter(Fp),Xh=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&yu(e.src)==="image")||{}).src||"",ip=new Map;async function zp(n){let e=Bp(n).filter(Xh);if(!e.length)return null;let t=e.find(s=>s.id===ip.get(n.id)),i=t?[t]:e.map(s=>[Math.random(),s]).sort((s,r)=>s[0]-r[0]).map(s=>s[1]);for(let s of i){let r=await Vs(Xh(s)).catch(()=>null);if(r)return ip.set(n.id,s.id),{im:r,project:s}}return null}function kp(n,e,t,i,s){Vi(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function Hp(n,e,t){return i=>{let r=e-24;i.font=`${In(19)}px ${_n}`;let o=ti(i,Fe(n.title).trim(),r).slice(0,2);i.font=`${In(12)}px ${_n}`;let a=ti(i,Fe(n.subtitle).trim(),r).slice(0,2),l=12+o.length*22+(a.length?4+a.length*15:0)+12-2;i.fillStyle="rgba(0,0,0,.62)",i.fillRect(0,t-l,e,l),i.textBaseline="top";let c=t-l+12;i.fillStyle="#fff",i.font=`${In(19)}px ${_n}`,o.forEach(h=>{i.fillText(h,12,c),c+=22}),c+=4,i.fillStyle="#d6d6d6",i.font=`${In(12)}px ${_n}`,a.forEach(h=>{i.fillText(h,12,c),c+=15})}}async function rb(n,e,t){let i=n.thumb?await Vs(n.thumb).catch(()=>null):null,s=n.thumbBack?await Vs(n.thumbBack).catch(()=>null):null,r=i?null:await zp(n);await Ws();let o=(h,d=!1)=>{if(i){Vi(h,i,0,0,e,t);let _=Fh(n,n.media[0]&&n.media[0].credit);if(_){h.font=`9px ${_i}`;let x=_;for(;h.measureText(x).width>e-14&&x.length>4;)x=x.slice(0,-2)+"\u2026";let p=h.createLinearGradient(0,t-26,0,t);p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(1,"rgba(0,0,0,.75)"),h.save(),Cl()&&(h.filter="invert(1)"),h.fillStyle=p,h.fillRect(0,t-26,e,26),h.restore(),h.fillStyle=Cl()?"#000":"#fff",h.textBaseline="bottom",h.fillText(x,7,t-6)}return}r?kp(h,r,e,t,d?.22:.64):(h.fillStyle="#111",h.fillRect(0,0,e,t)),h.textBaseline="top",d&&(h.globalAlpha=.3),h.fillStyle=Cn(),h.fillRect(16,18,18,2),h.fillStyle="#fff",h.font=`${In(24)}px ${_n}`;let f=ti(h,Fe(n.title),e-32).slice(0,3);f.forEach((_,x)=>h.fillText(_,16,30+x*28)),h.fillStyle=r?"#c9c9c9":"#8c8c8c",h.font=`${In(13)}px ${_n}`,ti(h,Fe(n.subtitle),e-32).slice(0,2).forEach((_,x)=>h.fillText(_,16,38+f.length*28+x*16));let m=r?Fh(r.project,r.project.media[0]&&r.project.media[0].credit):Fh(n,n.media[0]&&n.media[0].credit);if(h.fillStyle=Cn(),h.font=`10px ${_i}`,h.fillText([n.date,Fe(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),16,t-(m?36:22)),m){h.font=`9px ${_i}`;let _=m;for(;h.measureText(_).width>e-32&&_.length>4;)_=_.slice(0,-2)+"\u2026";h.fillStyle=r?"rgba(0,0,0,.55)":"#2a2a2a",h.fillRect(0,t-20,e,20),h.fillStyle=r?"#d0d0d0":"#9a9a9a",h.textBaseline="middle",h.fillText(_,16,t-10)}h.globalAlpha=1},a=yn(e,t,o,2),l=s?yn(e,t,h=>Vi(h,s,0,0,e,t),2):r?yn(e,t,lu(e,h=>o(h,!0)),2):yn(e,t,Op(o),1.5),c=i&&(Fe(n.title).trim()||Fe(n.subtitle).trim())?yn(e,t,h=>{Vi(h,i,0,0,e,t),Hp(n,e,t)(h)},2):null;return[a,l,c]}async function ab(n,e,t){let i=n.thumb?await Vs(n.thumb).catch(()=>null):null,s=n.thumbBack?await Vs(n.thumbBack).catch(()=>null):null;await Ws();let r=a=>{if(i){Vi(a,i,0,0,e,t);return}a.fillStyle="#1b1b1b",a.fillRect(0,0,e,t),a.fillStyle="#fff",a.font=`${Math.round(t*.42*ou)}px ${_n}`,a.textAlign="center",a.textBaseline="middle",a.fillText(Wh(Fe(n.title)),e/2,t*.45),a.fillStyle=Cn(),a.fillRect(e/2-8,t*.78,16,1.5)},o=i&&Fe(n.title).trim()?yn(e,t,a=>{Vi(a,i,0,0,e,t),Hp(n,e,t)(a)},3):null;return[yn(e,t,r,3),s?yn(e,t,a=>Vi(a,s,0,0,e,t),3):yn(e,t,Op(r),2),o]}async function ob(n,e,t){let i=await zp(n);if(i)return lb(n,e,t,i);let s=n.thumb?await Vs(n.thumb).catch(()=>null):null;await Ws();let r=Fe(n.title).trim(),o=s?72:18,a=e-o-14,l=yn(e,t,h=>{h.fillStyle="#333",h.fillRect(0,0,e,t),s?Vi(h,s,13,12.75,53,53):(h.fillStyle=Cn(),h.fillRect(18,14,14,2)),h.fillStyle="#fff",h.font=`${In(21)}px ${_n}`,h.textBaseline="top",ti(h,r,a).slice(0,3).forEach((d,f)=>h.fillText(d,o,(s?12:20)+f*22))}),c=yn(e,t,lu(e,h=>{h.fillStyle="rgba(255,255,255,.7)",h.fillRect(0,0,e,t),h.fillStyle="#c4c4c4",h.font=`${In(21)}px ${_n}`,h.textBaseline="top",ti(h,r,a).slice(0,3).forEach((d,f)=>h.fillText(d,o,(s?9:17)+f*22))}));return[l,c]}async function lb(n,e,t,i){await Ws();let s=Fe(n.title).trim(),r=e-32,o=a=>l=>{kp(l,i,e,t,a?.2:.62),a&&(l.globalAlpha=.32),l.fillStyle=Cn(),l.fillRect(18,14,14,2),l.fillStyle="#fff",l.font=`${In(21)}px ${_n}`,l.textBaseline="top",ti(l,s,r).slice(0,3).forEach((c,h)=>l.fillText(c,18,20+h*22)),l.globalAlpha=1};return[yn(e,t,o(!1),2),yn(e,t,lu(e,o(!0)),2)]}async function cb(n,e,t){let i=n.thumb?await Vs(n.thumb).catch(()=>null):null;await Ws();let r=yn(e,t,o=>{if(i){o.fillStyle="#fff",o.fillRect(0,0,e,t),Vi(o,i,0,0,e,t);return}o.fillStyle="#fff",o.fillRect(0,0,e,t),o.fillStyle="#111",o.beginPath(),o.arc(e/2,t/2-8,34,0,Math.PI*2),o.fill(),o.fillStyle=Cn(),o.beginPath(),o.arc(e/2,t/2-8,9,0,Math.PI*2),o.fill(),o.fillStyle="#333",o.font=`${In(12)}px ${_n}`,o.textAlign="center",o.textBaseline="top",o.fillText(Fe(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var sp={image:rb,portrait:ab,text:ob,place:cb};function pl(n,e){return Ws().then(()=>e==="place"?yn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=`${In(44)}px ${_n}`,t.fillText(Fe(n.title)+".",32,18),t.fillStyle="#979797",t.font=`${In(18)}px ${_n}`,ti(t,Fe(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.fillStyle=Cn(),t.font=`14px ${_i}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",dl(Fe(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.fillStyle=Cn(),t.font=`15px ${_i}`,t.fillText(Fe(n.place),32,260)},1.5):yn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${In(20)}px ${_n}`;let i=ti(t,Fe(n.title)+".",166).slice(0,2);i.forEach((r,o)=>t.fillText(r,18,14+o*22));let s=20+i.length*22;t.fillStyle="#8c8c8c",t.font=`${In(15)}px ${_n}`,Fe(n.subtitle).split(/(?<=\.)\s+/).forEach(r=>ti(t,r,166).forEach(o=>{s<150&&(t.fillText(o,19,s),s+=18)})),t.fillStyle="#bbb",t.font=`11px ${_i}`,dl(Fe(n.body)).join(" ").split(/\s+/).length>1&&ti(t,dl(Fe(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor((176-s)/14))).forEach(r=>{t.fillText(r,19,s+4),s+=14}),Fe(n.place)&&(t.fillStyle=Cn(),t.font=`11px ${_i}`,t.fillText(Fe(n.place).toUpperCase(),19,180))}))}function hb(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${_i}`;let o=Math.ceil(r.measureText(n).width)+2*7,a=30;s.width=o*2,s.height=a*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,o,a),r.font=`${e?"bold ":""}20px ${_i}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,a/2+1);let l=new ca(new Tr({map:au(new Cr(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*o/a,c,1),l.renderOrder=2,l}var pi=document.createElement("div");pi.id="net-tip";pi.className="ui";pi.hidden=!0;document.body.appendChild(pi);function Vp(n,e,t){pi.innerHTML=`<b>${$e(n.city||"")}</b>${n.titles.map(s=>`<span>${$e(s)}</span>`).join("")}`,pi.hidden=!1;let i=pi.getBoundingClientRect();pi.style.left=Math.min(e+14,Bn-i.width-10)+"px",pi.style.top=Math.max(10,t-i.height-12)+"px"}function Ol(){pi.hidden=!0}var qh=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new mn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=je.models.find(c=>c.id===this.def.model)||je.models[0];if(!t)return;let i=await jv(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),o=e.parse(i,s).scene,a=new mn;if(a.add(o),o.traverse(c=>{if(!c.isMesh)return;let h=d=>{let f=d.map||d.emissiveMap||null;return f?new Kt({map:f}):t.untextured==="white"?new Ns({color:15921906}):t.untextured==="black"?new Ns({color:2236962}):new Kt({color:le.locatorColor,wireframe:!0})};c.material=Array.isArray(c.material)?c.material.map(h):h(c.material),this.blockers.push(c)}),t.scaleMode==="fit"){a.updateMatrixWorld(!0);let c=new sn().setFromObject(a),h=c.getSize(new N),d=(t.height||420)/Math.max(h.y,1e-6);a.scale.setScalar(d),a.updateMatrixWorld(!0);let f=new sn().setFromObject(a),m=f.getCenter(new N);a.position.set(-m.x,-f.min.y,-m.z)}else{o.scale.setScalar(100),a.updateMatrixWorld(!0);let c=new sn().setFromObject(a);c.max.y-c.min.y>le.object3DMaxHeight&&a.scale.setScalar(le.object3DMaxHeight/(c.max.y-c.min.y))}let l=new mn;l.rotation.y=(t.rotationY||0)*vi,l.add(a),this.container.add(l)}place(e){this.p.x=e*5*le.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*le.object3DDistance,this.container.position.copy(Vh(this.p.x,0,this.p.z))}};function Gp(n,e){let t=new Os;t.setPositions(n);let i=new _a(t,e);return i.computeLineDistances(),i}var Yh=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new mn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null){this.texFront=e,this.texHover=i;let s=new ns(this.width,this.height),r=new kt(s,new Kt({map:e,side:Fn})),o=new kt(s,new Kt({map:t,side:nn}));r.userData={post:this,face:"front"},o.userData={post:this,face:"back"},this.width+=le.planeFrameDistance,this.height+=le.planeFrameDistance;let a=this.width/2,l=this.height/2;this.frame=Gp([-a,-l,0,a,-l,0,-a,-l,0,-a,l,0,a,-l,0,a,l,0,-a,l,0,a,l,0],Gh),this.group.add(r,o,this.frame),this.meshes.push(r,o),this.ready=!0}setPosition(e,t,i,s,r=0,o=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:o})}apply(){let e=this.thumb,t=this.group;t.position.set(...ls(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*vi,t.rotation.x=-e.rotX*vi,t.rotation.z=e.rotZ*vi,t.scale.setScalar(Math.max(1e-4,e.scale))}selectIt(){this.frame&&(this.frame.material=Pp,Ca(.8,()=>{this.frame&&(this.frame.material=Gh)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),An(this.thumb,le.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){yi(this.thumb);let i=Gi(),s={x:-i*Math.sin(ee.degreeCamera),z:-i*Math.cos(ee.degreeCamera)},r=this.p2,o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;return An(this.thumb,t,{x:s.x+o*e/l,y:r.y,z:s.z+a*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:o/l,z:a/l}}}moveBack(e=0){yi(this.thumb);let t=this.p2;An(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){An(this.thumb,le.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>An(this.thumb,le.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}hover(e){let t=this.meshes[0];if(!t||!this.texHover)return;let i=e?this.texHover:this.texFront;t.material.map!==i&&(t.material.map=i,t.material.needsUpdate=!0)}dispose(){this.texHover&&(this.meshes[0]&&this.meshes[0].material.map===this.texHover&&(this.meshes[0].material.map=this.texFront),this.texHover.dispose()),yi(this.thumb),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!Lp.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function Lh(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*vi;i===0&&(i=2*Math.PI);let s=(i-ee.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),ee.selected=e,ee.cameraY=t.p2.y,ee.degreeCamera+=s,t.selectIt(),!0}function Ih(n,e,t){ee.degreeCamera%=2*Math.PI,ee.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(ee.selected=e,ee.degreeCamera=Math.PI,i.ready&&(ee.cameraY=i.p2.y,i.selectIt(),t(i)))}var Nh=(n,e,t,i,s="y")=>n.postViews.forEach((r,o)=>{if(!r.ready||Tl(r.thumb))return;let a=r.thumb,l=Math.pow(-1,o)*e*(Math.random()*2+1);a[s]-=(a[s]-r.p2[s]+l)*gn(2*i),s==="y"&&(a.rotX-=(a.rotX-r.p2.rotX-t)*gn(2*i))}),rp={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:le.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*le.planeDisOrder+le.planeDistance,z:le.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/vi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Lh(n,e),move:(n,e,t,i)=>Nh(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=le;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Ih(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>Nh(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=le,o=_=>{let x=n.angle*(_+1);return x-Math.cos(x)*n.angle/2},a=t,l;t+1>s?(a=2*Math.round(i/2)-t-1,l=Math.pow(-1,a)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(o(a)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,d=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(o(h)-Math.PI/2)*120,f=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(o(a)),y:d*Math.sin(o(h)),z:f*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{Lh(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*gn(2*le.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*gn(2*le.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return os(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Fl(n.def);return{x:i[0]+s[0],y:(le.planeDistance+e.height+Math.pow(-1,t+1)*le.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Ih(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Tl(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*gn(2*le.cameraEaseSpeed);let o=n.infos[i];o&&(o.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=le.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*le.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/vi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Lh(n,e),move:(n,e,t,i)=>Nh(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,o=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*o+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*le.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Ih(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Tl(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*gn(2*le.cameraEaseSpeed)})}}},ap=new N,op=new N,$h=class{constructor(e){this.section=e,this.def=e.def,this.L=rp[this.def.layout]||rp.carousel,this.card=this.def.card,this.posts=ee.data.posts.slice(),this.n=this.posts.length,[this.w,this.h]=wh[this.card].size,this.k=gb(this.def),this.container=new mn,this.container.position.copy(e.container.position),fs.add(this.container),this.postViews=this.posts.map((t,i)=>new Yh(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Vt.map(u=>u.def.id)),t=new Map,i=(u,T,v)=>{if(!Ah(u))return;let P=(+u.lat).toFixed(1)+","+(+u.lon).toFixed(1),U=t.get(P);U||t.set(P,U={loc:u,city:u.city||"",titles:[],base:!1}),T&&!U.titles.includes(T)&&U.titles.push(T),v&&(U.base=!0)};if(Eh(je,this.def.id).forEach(u=>i(u.location,Fe(u.title),!0)),je.posts.forEach(u=>{u.published&&e.has(u.section)&&u.section!==this.def.id&&u.spots.forEach(T=>i(T,Fe(u.title)))}),!t.size)return;bl.color.set(Cn());let s=50,r=new mn,o=[...t.values()],a=o.filter(u=>u.base),l=new Ho(1,14,10),c={on:new Kt({color:Cn()}),base:new Kt({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:ki+(le.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},o.forEach(u=>{u.xz=os(u.loc)}),o.forEach(u=>{u.from=u.base?null:a.length?a.map(T=>[T,Math.hypot(os(T.loc)[0]-u.xz[0],os(T.loc)[1]-u.xz[1])]).sort((T,v)=>T[1]-v[1])[0][0]:null,u.d=u.from?Math.hypot(os(u.from.loc)[0]-u.xz[0],os(u.from.loc)[1]-u.xz[1]):0}),o.sort((u,T)=>T.base-u.base||u.d-T.d);let h=70,d=null,f=-1;o.forEach(u=>{let T=o.filter(v=>Math.hypot(v.xz[0]-u.xz[0],v.xz[1]-u.xz[1])<h);T.length>f&&(f=T.length,d=T)});let m=d.reduce((u,T)=>u+T.xz[0],0)/d.length,_=d.reduce((u,T)=>u+T.xz[1],0)/d.length,x=new Ht;x.position.set(...ls(m,s,_)),r.add(x),this.net.focus=x;let p=[];o.forEach((u,T)=>{let[v,P]=u.xz,U=u.base?0:.15+T*.07,L=new kt(l,u.base?c.base:c.on);L.scale.setScalar(u.base?7:4+Math.min(3,u.titles.length)),L.position.set(...ls(v,s,P)),r.add(L),L.userData={netNode:u},this.net.hits.push(L);let D=null,j=0;if(u.from){let[Z,ae]=os(u.from.loc),ye=s+18+u.d*.32,F=2*ye-s,W=(Z+v)/2,B=(ae+P)/2;j=Math.max(12,Math.min(48,Math.round(u.d/6)));let ne=Q=>{let te=1-Q;return ls(te*te*Z+2*te*Q*W+Q*Q*v,te*te*s+2*te*Q*F+Q*Q*s,te*te*ae+2*te*Q*B+Q*Q*P)},K=[];for(let Q=0;Q<j;Q++)K.push(...ne(Q/j),...ne((Q+1)/j));let H=new Os;H.setPositions(K),D=new _a(H,bl),D.computeLineDistances(),H.instanceCount=0,r.add(D)}let E=null,R=1/0;if(u.city){for(let Z of p){let ae=Math.max(Math.abs(Z[0]-v)/80,Math.abs(Z[1]-P)/22);ae<Z[2]&&(R=Math.min(R,ae))}R>.06&&(E=hb(u.city.toUpperCase()+(u.titles.length>1&&!u.base?" \xB7 "+u.titles.length:""),u.base),E.position.set(...ls(v,s+9,P)),r.add(E),p.push([v,P,R]))}this.net.items.push({dot:L,arc:D,segs:j,label:E,thr:R,delay:U,base:u.base,ds:L.scale.x,ls:E?E.scale.clone():null,x:v,z:P})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await sp[this.card](this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2]),this.animeOpenPost(this.postViews[e],e),le.planeSpeed>0){let i=ki+Jv;for(;ki<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*le.planeSpeed,o,a=()=>{--o<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(o=2,An(e.thumb,r,{y:s.y,rotX:0},{delay:le.planeSpeed/3,ease:"expoOut",onComplete:a}),An(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:a})):(o=1,An(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:a})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...ls(...i),...ls(...s)],o=this.lines[t];o?o.geometry.setPositions(r):(o=this.lines[t]=Gp(r,Rp),this.container.add(o))}async openInfo(e,t,i){let s=await pl(this.posts[t],"place");if(!this.alive)return;let r=new kt(new ns(165,130),new Kt({map:s,side:wn}));r.userData={post:e,face:"front"},r.visible=!1;let o={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=o,e.meshes.push(r),this.container.add(r),An(o.p,le.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Ca(i,()=>{r.visible=!0})}async openPost3D(){let e=ee.selected,t=this.postViews[e];if(!t||!t.ready)return;let{cl:i,dir:s}=t.moveToCamera(60,le.tween);this.focusInfo||(this.focusInfo={mesh:new kt(new ns(90,90),new Kt({side:wn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let r=this.focusInfo;r.mesh.visible=!1;let o=await pl(this.posts[e],"person");if(!this.alive)return;r.mesh.material.map&&r.mesh.material.map.dispose(),r.mesh.material.map=o,r.mesh.material.needsUpdate=!0;let a=this.h*this.k/90;r.mesh.scale.setScalar(a),Ca(le.tween,()=>{!ee.postOpen||ee.selected!==e||(r.target=t,r.k=0,r.mesh.visible=!0,yi(r),An(r,le.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[ee.selected];e&&e.moveBack(le.tween/2),this.focusInfo&&(yi(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;yi(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(ee.degreeCamera/vi)%360+360)%360,t=r=>{let o=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(o-e),360-Math.abs(o-e))},i=ee.selected,s=this.postViews[ee.selected]&&this.postViews[ee.selected].ready?t(this.postViews[ee.selected]):1/0;this.postViews.forEach((r,o)=>{if(!r.ready)return;let a=t(r);a<s-.5&&(s=a,i=o)}),ee.selected=i}goNext(){return ee.selected+1>=this.n?0:ee.selected+1}goPrev(){return ee.selected-1<=-1?this.n-1:ee.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,le.cameraDistanceProportion/ms),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*gn(le.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(ki-this.net.start-s.delay)/.9)),o=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(o*s.segs));let a=s.base||r>=1;s.dot.visible=a,s.label&&(s.label.visible=a&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...ls(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*vi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),ap.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),op.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(ap).add(op)}}async retexture(){this.net&&(bl.color.set(Cn()),this.net.mats.on.color.set(Cn()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await sp[this.card](this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){new Set(s).forEach(a=>a&&a.dispose());return}let r=i.texHover&&i.meshes[0].material.map===i.texHover;r&&(i.meshes[0].material.map=i.texFront),i.texHover&&i.texHover.dispose(),i.texFront=s[0],i.texHover=s[2]||null,new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose()),r&&i.hover(!0);let o=this.infos[t];if(o){let a=await pl(this.posts[t],"place");if(!this.alive){a.dispose();return}let l=e(o.mesh,a);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&ee.postOpen){let t=await pl(this.posts[ee.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(yi(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Ol(),fs.remove(this.container)}},zs=[],Qe=null,Nr=le.cameraEaseSpeed,Fr=!1,si=!1,hs=0,us=0,Ml=0,Sl=0,Da=!1,ri=!1,_s=()=>zs[ee.currentSection];function ub(){let n=le.cameraHeight;ee.cameraY=ee.cameraY+n/7<=3*n?ee.cameraY+n/7:n*3}function db(){let n=le.cameraHeight;ee.cameraY=ee.cameraY-n/7>=n/7?ee.cameraY-n/7:n/7}var fb={map:58},Fl=(n=(_s()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||fb[n.layout]||100)/100)),Gi=()=>le.cameraDistance*Fl(),Bl=()=>le.cameraTargetHeight*(((_s()||{}).def||{}).layout==="map"?Fl()*.62:1),lp=()=>le.cameraHeight*(((_s()||{}).def||{}).layout==="map"?Fl()*1.6:1),ml=new N;function pb(){return!gs()||le.cameraDistanceProportion>=ms?0:Math.min(1,(1-le.cameraDistanceProportion/ms)*1.25)}function mb(){let n=Qe&&Qe.net&&Qe.net.focus;return n?(n.getWorldPosition(ml),{x:ml.x,y:ml.y,z:-ml.z}):null}function Ua(){let n=_s(),e=pb(),t=e?mb():null,i=Bl();return t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var cu=()=>{if(!gs())return lp();let n=Math.min(1,le.cameraDistanceProportion/ms);return Ua().ty+(lp()-Bl())*Math.pow(n,.55)},gb=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100));function cp(){let n=Ua();vt.x=n.x+Gi()*Math.sin(ee.actualDeg),vt.z=n.z+Gi()*Math.cos(ee.actualDeg)}function zl(){zs.forEach((n,e)=>{e===ee.currentSection?n.container.parent||fs.add(n.container):n.container.parent&&fs.remove(n.container)}),Fr=!1,si=!1,Nn.classList.remove("dragging"),Sa=null,Qe&&Qe.destroy(),Qe=new $h(_s()),Rl(ee.selected),ee.actualDeg=ee.degreeCamera,yb()}function yb(){let n=Ua();ee.cameraY=cu(),eb(Gi()*Math.sin(ee.degreeCamera)+n.x,ee.cameraY,Gi()*Math.cos(ee.degreeCamera)+n.z,n.x,n.ty,n.z,le.cameraSpeed)}function Rl(n){ee.selected=n,Qe&&Qe.focus(n)}function Dh(n){!Qe||!Qe.n||(si=!0,Qe.checkPostSelected(),Nr=le.cameraKeyboardSpeed,Rl(n==="NEXT"?Qe.goNext():Qe.goPrev()))}function kl(){let t=le.cameraDistanceProportion/280;le.cameraDistance=Math.round((cn<680?1e3-cn:320)*t)}function Wp(){if(si=!1,kl(),!Da)return;let n=Ua();ee.postOpen&&ee.section.def.open==="focus3d"&&Qe&&Qe.postViews[ee.selected]&&Qe.postViews[ee.selected].moveToCamera(100,0),tb(n.x+Gi()*Math.sin(ee.actualDeg),gs()?ee.cameraY:vt.y,n.z+Gi()*Math.cos(ee.actualDeg),le.cameraSpeed/2),gs()&&ru(n.x,n.ty,n.z,le.cameraSpeed/2)}function _b(){if(!ri){Math.abs(vt.y-ee.cameraY)>.007&&!Tl(vt)&&(vt.y-=(vt.y-ee.cameraY)*gn(le.cameraEaseSpeed));return}if(Fr){Nr=le.cameraEaseSpeed;let n=ee.degreeCamera;ee.degreeCamera+=(hs-Ml)/150,ee.actualDeg-=(ee.actualDeg-n)*gn(Nr),cp(),ee.cameraY+=(us-Sl)*2;let e=le.cameraHeight,t=gs()?Ua().ty+12:e/3;ee.cameraY<t?ee.cameraY=t:ee.cameraY>e*4&&(ee.cameraY=4*e),vt.y-=(vt.y-ee.cameraY)*gn(Nr),le.animationMode&&Qe&&Qe.movePosts((Ml-hs)/Math.max(Al,.25),(Sl-us)/Math.max(Al,.25),Nr),Ml=hs,Sl=us}else si?(Math.abs(ee.actualDeg-ee.degreeCamera)<=.007&&(si=!1),ee.actualDeg-=(ee.actualDeg-ee.degreeCamera)*gn(le.cameraEaseSpeed),cp(),vt.y-=(vt.y-ee.cameraY)*gn(Nr),le.animationMode&&Qe&&Qe.movePosts(0,0,le.cameraEaseSpeed)):Math.abs(vt.y-ee.cameraY)>.007&&(vt.y-=(vt.y-ee.cameraY)*gn(le.cameraEaseSpeed))}function xb(){vt.zoom=6;let e=Qe&&Qe.postViews[0]&&Qe.postViews[0].p2.y||le.planeDistance;vt.y=e+100,ni.y=e+100,ru(ni.x,Bl(),ni.z,1),ri=!1,An(vt,1,{zoom:El.zoom},{ease:"expoOut"}),setTimeout(()=>{ri=!0},1*1e3+50)}var Uh=new N,Oh=new N,va=new N,ba=1;function vb(){Uh.copy(Vh(vt.x,vt.y,vt.z)),Oh.copy(Vh(ni.x,ni.y,ni.z)),va.subVectors(Oh,Uh),va.lengthSq()<1e-6&&va.set(0,0,-1),va.normalize();let n=gs()?Math.min(1,le.cameraDistanceProportion/ms):1;ba+=Math.abs(n-ba)<.001?n-ba:(n-ba)*gn(le.cameraEaseSpeed),$n.position.copy(Uh).addScaledVector(va,-El.focus*ba),$n.lookAt(Oh);let e=Math.min(1,Bn/900),t=2*Math.atan(cn/2/(vt.zoom*El.focus*e))/vi;Math.abs($n.fov-t)>1e-4&&($n.fov=t,$n.updateProjectionMatrix())}function Xp(){Bn=window.innerWidth,cn=window.innerHeight,ys.setSize(Bn,cn,!1),$n.aspect=Bn/cn,$n.updateProjectionMatrix(),Lp.forEach(n=>n.resolution.set(Bn,cn))}var En=document.getElementById("menu"),ps=document.getElementById("slogan"),qp=document.getElementById("langs"),Hl=[];function bb(){En.innerHTML="",Hl=Vt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=Fe(n.def.name),i.addEventListener("click",()=>{e!==ee.currentSection&&ri&&Xl(e)}),t.appendChild(i),En.appendChild(t),i}),En.style.setProperty("--n",Vt.length),hu()}function hu(){Hl.forEach((n,e)=>n.setAttribute("aria-current",String(e===ee.currentSection)))}function Mb(){Hl.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),En.hidden=!1,qp.hidden=!1,setTimeout(()=>En.classList.add("ready"),(Vt.length+1)*200)}var Sb=1.44;function jh(n){let e=n==="project"?{width:522,x:79,colW:362}:{width:389,x:17,colW:353},t=(Bn-2*le.margin)/(mt.scale||1);if(t>=e.width)return e;let i=Math.max(240,Math.floor(t)),s=n==="project"?26:17;return{width:i,x:s,colW:i-2*s}}function Yp(){let n=cn<=420;document.body.classList.toggle("post-short",n&&ee.postOpen);let e=ps.offsetTop+ps.offsetHeight+(n?1:2)*le.margin,t=mt.height+12,i=n?24:(En.offsetHeight||90)+70,s=Math.max(n?.4:.5,Math.min(Sb,(cn-e-i)/t));mt.scale=s,ln.style.top=e+"px",ln.style.transform=s!==1?`scale(${s.toFixed(3)})`:"",ln.style.width=s!==1?Math.ceil((Bn-le.margin)/s)+"px":"",ln.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",cn-(e+t*s)<En.offsetHeight+60)}function Ra(){if(ee.postOpen||document.body.classList.remove("post-cramped","post-short"),ee.postOpen&&mt.open&&mt.height>100){let n=ps.offsetTop+ps.offsetHeight+mt.height*(mt.scale||1)+2*le.margin+30;n=Math.min(n,cn-En.offsetHeight-52),En.style.left=le.margin+"px",En.style.top=n+"px"}else Bn<=700||cn<=520?(En.style.left=le.margin+"px",En.style.top=Math.round(cn-(En.offsetHeight||86)-56)+"px"):(En.style.left=3*le.margin+"px",En.style.top=Math.round(cn/1.4)+"px")}var hp=(n,e=!1)=>Qf(n,je.settings,e);function Zh(){let n=je.settings,e=n.accent||"#ffcc00",t=n.logo?Tn(n.logo):hp(jn?"#ffffff":e,jn);["logo","home-logo"].forEach(i=>{let s=document.getElementById(i);s&&(s.src=t,s.classList.toggle("raw",!n.logo))}),wb(n.logo?t:jn?hp(e):t)}function wb(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}function uu(){let n=je.settings;Up(),document.documentElement.lang=Hi,document.documentElement.classList.toggle("neg",jn),document.title=n.name||"Hand Coded";let e=n.taglines&&(n.taglines[Hi]||n.taglines.en)||[],t=e.length?`<b class="wm">${$e(e[0])}</b>${e.slice(1).map(a=>`<span>${$e(a)}</span>`).join("")}`:$e(n.name);if(ps.innerHTML=e.length?t.replace('<b class="wm">',`<b class="wm" role="link" tabindex="0" title="${$e(pt("homeLink"))}">`):t,document.getElementById("home-slogan").innerHTML=t,Zh(),!n.logo&&document.fonts){let a=Bi(n,"logo"),l=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{je.settings.logo||Zh()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo","home-logo"].forEach(a=>{let l=document.getElementById(a);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(jn)),l.alt=l.title=pt(jn?"toPos":"toNeg")):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.alt="",l.removeAttribute("title")))});let s=document.getElementById("bs");s.placeholder=Fe(n.home.placeholder),s.setAttribute("aria-label",pt("bsLabel")),du(),document.getElementById("bs-eg").textContent=Fe(n.home.example),document.getElementById("bs-sent").textContent&&(document.getElementById("bs-sent").textContent=pt("sent"));let r=document.getElementById("offices");r.innerHTML="",(n.offices||[]).forEach(a=>{let l=document.createElement("section");l.innerHTML=`<h3>${$e(Fe(a.name))}</h3>${(a.lines||[]).map(c=>`<p>${$e(c)}</p>`).join("")}${a.mail?`<p><a href="mailto:${$e(a.mail)}">${$e(a.mail)}</a></p>`:""}`,r.appendChild(l)}),(n.social||[]).forEach(a=>{if(!a.url)return;let l=document.createElement("section");l.innerHTML=`<h3>${$e(a.label)}</h3><p><a href="${$e(a.url)}" target="_blank" rel="noopener">${$e(a.url.replace(/^https?:\/\/(www\.)?/,""))}</a></p>`,r.appendChild(l)}),ds.textContent=Fe(n.home.enter)||pt("enter"),Ib(),Gs(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=pt(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",pt("keys")),Pl.setAttribute("aria-label",pt("prev")),Ll.setAttribute("aria-label",pt("next"));let o=n.langs&&n.langs.length?n.langs:as;[qp,document.getElementById("home-langs")].forEach(a=>{a.innerHTML="",!(o.length<2)&&o.forEach(l=>{let c=document.createElement("button");c.type="button",c.textContent=l.toUpperCase(),c.setAttribute("aria-pressed",String(l===Hi)),c.setAttribute("aria-label",pt("lang")+" "+l.toUpperCase()),c.addEventListener("click",()=>$p(l)),a.appendChild(c)})}),document.documentElement.style.setProperty("--accent",Cn()),document.documentElement.style.setProperty("--accent-raw",je.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",Np(je.settings.accent||"#ffcc00")),dm()}function du(){let n=document.getElementById("bs");if(!n||!n.offsetWidth)return;n.style.fontSize="";let e=getComputedStyle(n),t=parseFloat(e.fontSize),i=n.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)-6,s=document.createElement("canvas").getContext("2d");s.font=`${e.fontWeight} ${t}px ${e.fontFamily}`;let r=parseFloat(e.letterSpacing)||0,o=s.measureText(n.placeholder).width+r*n.placeholder.length;o>i&&(n.style.fontSize=Math.max(16,Math.floor(t*i/o))+"px")}window.addEventListener("resize",()=>{zn||du()});function $p(n){if(n!==Hi){Hi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(uu(),Da){Hl.forEach((i,s)=>{i.textContent=Fe(Vt[s].def.name)}),Vl();let e=ee.postOpen,t=ee.selected;ii(),ee.selected=t,zl(),e&&Ca(.6,()=>Pa(t))}}}var fu=document.getElementById("cats"),pu=document.getElementById("cat-box"),up=document.getElementById("cat-list"),jp=document.getElementById("cat-name"),Jh=document.getElementById("cat-open"),Pl=document.getElementById("pg-prev"),Ll=document.getElementById("pg-next");function Vl(){let n=ee.data,e=n.categoryList;pu.hidden=e.length<=1,up.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=Fe(t.label),s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Kh(),Tb(t.id)}),i.appendChild(s),up.appendChild(i)}),jp.textContent=n.currentCatName,Zp(),Kh()}function Zp(){let n=ee.data;Pl.disabled=!n.hasNewer(),Ll.disabled=!n.hasOlder(),Pl.hidden=Ll.hidden=!n.hasNewer()&&!n.hasOlder()}function Kh(){pu.classList.remove("open"),Jh.setAttribute("aria-expanded","false")}Jh.addEventListener("click",()=>{let n=pu.classList.toggle("open");Jh.setAttribute("aria-expanded",String(n))});Pl.addEventListener("click",()=>{ri&&tm("newer")});Ll.addEventListener("click",()=>{ri&&tm("older")});var xs=document.getElementById("kb"),mu=document.getElementById("kb-toggle"),Jp=null;function Qh(){xs.classList.add("open"),mu.setAttribute("aria-expanded","true")}function Il(){xs.classList.remove("open"),mu.setAttribute("aria-expanded","false")}mu.addEventListener("click",()=>{clearTimeout(Jp),xs.classList.contains("open")?Il():Qh()});xs.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>rm({code:n.dataset.k,preventDefault(){}})));function zi(n){let e=xs.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function Kp(){xs.querySelector(".key.anim").classList.toggle("off",!le.animationMode)}var gu=document.getElementById("whiteboard"),ln=document.getElementById("post2d"),Dr=document.getElementById("strip");function Fh(n,e){if(!n||je.settings.signImages===!1)return"";let t=[Fe(n.title).trim(),(n.author||je.settings.name||"").trim()].filter(Boolean);return e&&t.push(pt("photo")+" "+e.trim()),t.join(" \xB7 ")}var Eb=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Gl=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Wl=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},yu=n=>Gl(n)?"youtube":Wl(n)?"vimeo":Eb(n)?"video":"image",mt={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,ln.classList.remove("closing"),ln.hidden=!1,Yp(),this.geomKey=JSON.stringify(jh("project")),this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit)),this.addRelations(n);else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:""),this.addText(n,"project");let s=sb(n);s.length&&this.addSkills(s),t.slice(1).forEach(r=>this.addMedia(r.src,355,r.credit)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Dr.style.transform="translateX(0px)"},addRelations(n){let e=Bp(n);e.length&&(this.addPanel("relh",236,`<h2 class="ttl">${$e(pt("skillProjects"))}.</h2><span class="n">${e.length}</span>`),e.forEach(t=>{let i=Xh(t),s=[t.date,Fe(t.place)].filter(Boolean).join(" | "),r=this.addPanel("proj",248,`<button type="button" class="go" data-go="${$e(t.id)}" aria-label="${$e(Fe(t.title))}">`+(i?`<img src="${$e(Tn(i))}" alt="" draggable="false">`:"")+`<span class="mono"${i?" hidden":""}>${$e(Wh(Fe(t.title)))}</span><span class="cap"><span class="t">${$e(Fe(t.title).trim())}</span>${s?`<span class="m">${$e(s)}</span>`:""}</span></button>`),o=r.querySelector("img");o&&o.addEventListener("error",()=>{o.remove(),r.querySelector(".mono").hidden=!1})}))},addSkills(n){let e=(Vt.find(s=>s.def.id===n[0].section)||{}).def,t=Math.ceil(n.length/9),i=(e?Fe(e.name):pt("skills")).trim();this.addPanel("skl",92+t*236,`<h2 class="ttl">${$e(i)}${/[.!?]$/.test(i)?"":"."}</h2><ul style="column-count:${t}">`+n.map(s=>`<li><button type="button" class="go" data-go="${$e(s.id)}">${$e(Fe(s.title).trim())}<span class="arr" aria-hidden="true">\u2192</span></button></li>`).join("")+"</ul>")},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(pt("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${$e(t)}</span><a href="${$e(e)}" target="_blank" rel="noopener"><span class="host">${$e(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Dr.appendChild(i),this.panels.push(i);let s=le.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addMedia(n,e=355,t="",i=!0){let s=yu(n);if(s==="youtube"||s==="vimeo"){this.addEmbed(n,s,e,t);return}let r=s==="video",o=this.addPanel("media",e,""),a=document.createElement(r?"video":"img");if(a.draggable=!1,a.style.height=e+"px",r){Object.assign(a,{src:Tn(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let c=document.createElement("button");c.type="button",c.className="play",c.setAttribute("aria-label",pt("play")),c.addEventListener("click",()=>{a.controls=!0,a.play().catch(()=>{}),c.remove()}),o.querySelector(".in").appendChild(c)}else a.src=Tn(n),a.alt="";let l=()=>{let c=Math.round(r?a.videoWidth*e/a.videoHeight:a.naturalWidth*e/a.naturalHeight);c&&(o.style.width=c+"px",this.layout())};a.addEventListener(r?"loadedmetadata":"load",l),a.addEventListener("error",()=>{!this.panels.includes(o)||this.panels.length<2||(o.remove(),this.panels=this.panels.filter(c=>c!==o),this.layout())}),o.querySelector(".in").prepend(a)},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),o=this.addPanel("media embed",s,"").querySelector(".in"),a=e==="youtube"?Gl(n):Wl(n),l=document.createElement("div");l.className="cover";let c=e==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:this.post&&this.post.thumb?Tn(this.post.thumb):"";if(c){let d=document.createElement("img");d.src=c,d.alt="",d.draggable=!1,d.onerror=()=>d.remove(),l.appendChild(d)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",pt("play")),h.addEventListener("click",()=>{let d=document.createElement("iframe");d.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${a}?autoplay=1&title=0&byline=0&portrait=0`,d.allow="autoplay; fullscreen; picture-in-picture",d.allowFullscreen=!0,d.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(d)}),l.appendChild(h),o.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s}=jh(e),r=Fe(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let o=Fe(n.subtitle),a=ee.section.def,l=n.tags.map(x=>a.tags.find(p=>p.id===x)).filter(Boolean).map(x=>Fe(x.label)),c=l.length?`${$e(pt("postedIn"))} <span>${l.map($e).join(", ")}</span>`:"",h=$e([n.date,Fe(n.place)].filter(Boolean).join(" | ")),d=Th(Fe(n.body)),f=document.createElement("div");f.className="txt",f.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(f),f.innerHTML=`<h2 class="ttl" style="position:static">${$e(r)}</h2>${o?`<p class="stl" style="position:static">${$e(o)}</p>`:""}`;let m=f.firstChild.offsetHeight,_=o?f.lastChild.offsetHeight+6:0;if(e==="project"){let x=34+m+6,p=34+m+_+20,u=dp(d,s,[272-p,242],f);u.forEach((T,v)=>{let P=v===u.length-1;this.addPanel("txt",t,(v===0?`<h2 class="ttl" style="left:${i}px;top:34px;width:${s}px">${$e(r)}</h2>${o?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${$e(o)}</p>`:""}`:"")+`<div class="body" style="left:${i}px;top:${v===0?p:93}px;width:${s}px">${T}</div>`+(P?`<div class="fecha" style="left:${i}px;top:282px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:308px;width:${s}px">${c}</div>`:""))})}else{let x=13+m+4,p=13+m+_+10,u=p+20,T=u+18+20;dp(d,s,[355-T-14,327],f).forEach((P,U)=>{this.addPanel("txt",t,(U===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${$e(r)}</h2>${o?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${$e(o)}</p>`:""}<div class="fecha" style="left:${i}px;top:${p}px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:${u}px;width:${s}px">${c}</div>`:"")+`<div class="body" style="left:${i}px;top:${U===0?T:14}px;width:${s}px">${P}</div>`)})}f.remove()},addTeam(n){let e=n.team.map(r=>je.posts.find(o=>o.id===r)).filter(Boolean),t=e.map(r=>Fe(r.title)).concat(n.credits?[n.credits]:[]).join(", "),i=this.addPanel("team",576,`<h2 class="ttl">${$e(pt("who"))}</h2><div class="names">${$e(pt("leftToRight"))} <span>${$e(t)}.</span></div>`),s=i.querySelector(".in");e.forEach((r,o)=>{let a=document.createElement("button");a.type="button",a.className="face",a.style.left=69+o%6*59+"px",a.style.top=160+Math.floor(o/6)*55+"px",a.innerHTML=(r.thumb?`<img src="${$e(Tn(r.thumb))}" alt="" draggable="false">`:`<span class="mono">${$e(Wh(Fe(r.title)))}</span>`)+`<span class="tab">${$e(Fe(r.title))}.<small>${$e(Fe(r.subtitle))}</small></span>`,a.setAttribute("aria-label",Fe(r.title)),["pointerenter","focus"].forEach(l=>a.addEventListener(l,()=>a.classList.add("big"))),["pointerleave","blur"].forEach(l=>a.addEventListener(l,()=>a.classList.remove("big"))),s.appendChild(a)}),i.style.overflow="visible"},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Bn-2*le.margin)/(this.scale||1)))),`<div class="cn">${$e(Fe(n.title))}.</div><div class="ac">${$e(Fe(n.subtitle))}</div><div class="site">${n.link?`<a href="${$e(n.link)}" target="_blank" rel="noopener">${$e(e)}</a>`:""}</div><div class="ad">${Th(Fe(n.body))}</div><div class="ct">${$e(Fe(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=le.animationMode?.8:0;return ln.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Dr.querySelectorAll("video").forEach(n=>n.pause()),Dr.innerHTML="",this.panels=[],ln.hidden=!0,ln.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){this.open&&(this.dragging?(this.finalpos+=(Nl-this.xprev)*1.5,this.x-=(this.x-this.finalpos)*gn(le.easing),this.xprev=Nl):Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*gn(le.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end),Dr.style.transform=`translateX(${Math.round(this.x)}px)`)}};function dp(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let o=[],a=null;r.childNodes.forEach(f=>{if(f.nodeType===1&&["P","UL","OL","H3"].includes(f.nodeName)){a=null,f.textContent.trim()&&o.push(f);return}if(f.nodeType===1&&f.nodeName==="BR"){a=null;return}f.nodeType===3&&!f.textContent.trim()&&!a||(a||(a=document.createElement("p"),o.push(a)),a.appendChild(f.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],d=()=>{l.push(s.innerHTML),s.innerHTML="",c++};for(let f of o){let m=f.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),f.nodeName==="UL"||f.nodeName==="OL"||f.nodeName==="H3"){s.childNodes.length&&d(),s.appendChild(f.cloneNode(!0));continue}let _=[];(function u(T,v){T.childNodes.forEach(P=>{P.nodeType===3?P.textContent.split(/(\s+)/).forEach(U=>U&&_.push({w:U,path:v})):u(P,[...v,P])})})(f,[]);let x=document.createElement("p");s.appendChild(x);let p=({w:u,path:T})=>{let v=x;for(let P of T){let U=v.lastChild;(!U||U.nodeType!==1||U.dataset.src!==P.outerHTML)&&(U=P.cloneNode(!1),U.dataset.src=P.outerHTML,v.appendChild(U)),v=U}v.appendChild(document.createTextNode(u))};for(let u of _)if(p(u),s.offsetHeight>h()){let T=function v(P){return P.lastChild&&P.lastChild.nodeType===1?v(P.lastChild):P}(x);T.removeChild(T.lastChild),d(),x=document.createElement("p"),s.appendChild(x),u.w.trim()&&p(u)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(f=>f.replace(/ data-src="[^"]*"/g,""))}var Nl=0,ks=null;ln.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(ks={id:n.pointerId,x:n.clientX,y:n.clientY},Nl=n.clientX)});ln.addEventListener("pointermove",n=>{if(Nl=n.clientX,!ks||n.pointerId!==ks.id||mt.dragging)return;let e=n.clientX-ks.x,t=n.clientY-ks.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){mt.dragging=!0,mt.xprev=ks.x,mt.finalpos=mt.x;try{ln.setPointerCapture(n.pointerId)}catch{}ln.classList.add("grabbing")}});ln.addEventListener("click",n=>{mt.justDragged&&(n.preventDefault(),n.stopPropagation(),mt.justDragged=!1)},!0);var Qp=()=>{mt.dragging&&(mt.justDragged=!0,setTimeout(()=>{mt.justDragged=!1},0)),ks=null,mt.dragging=!1,ln.classList.remove("grabbing")};ln.addEventListener("pointerup",Qp);ln.addEventListener("pointercancel",Qp);gu.addEventListener("pointerdown",()=>La());function Xl(n=-1,e=0){Ap(),n===-1&&(n=ee.currentSection||0),ii(),n!==ee.currentSection&&_u(),ee.currentSection=n,ee.resetData(),ee.selected=e,zl(),hu(),Vl();try{history.replaceState(null,"","#"+ee.section.def.id)}catch{}}function em(){ii(),ee.selected=0,zl(),Zp()}function tm(n){(n==="newer"?ee.data.newer():ee.data.older())&&em()}function Tb(n){ee.data.changeCategory(n),jp.textContent=ee.data.currentCatName,em(),Vl()}function Pa(n){ii(),ee.selected=n,Ma()}var fp=0;function Ab(n){let e=je.posts.find(h=>h.id===n),t=e?Vt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!ri)return;Ap(),ii();let i=t!==ee.currentSection;i&&_u(),ee.currentSection=t,i&&ee.resetData();let s=ee.data,r=!s.list.includes(e);r&&s.changeCategory("");let o=s.list.indexOf(e);if(o<0)return;let a=o<s.first||o>=s.last;if(a){let h=s.section.perPage;s.first=Math.floor(o/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!a&&Qe){Pa(l);return}ee.selected=l,zl(),hu(),Vl();try{history.replaceState(null,"","#"+ee.section.def.id)}catch{}let c=++fp;Ca(.5,()=>{c===fp&&ee.data===s&&s.posts[l]===e&&Pa(l)})}Dr.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Ab(e.dataset.go))});function Ma(){!Qe||!ee.data.posts[ee.selected]||(ql(null),ii(),ee.postOpen=!0,ee.section.def.open==="strip"?(gu.hidden=!1,mt.build(ee.data.posts[ee.selected],ee.section.def.card),fu.classList.add("hidden"),Fr=!1,Nn.classList.remove("dragging"),si=!0,Rl(ee.selected)):(si=!0,Rl(ee.selected),Qe.openPost3D()),Ra())}function La(){ee.postOpen&&(ee.postOpen=!1,mt.open?(mt.close(),gu.hidden=!0,fu.classList.remove("hidden")):Qe&&Qe.closePost3D(),Ra())}function ii(){ee.postOpen&&La()}function Cb(){Ep(!le.animationMode),Kp(),Qe&&Qe.resetPostPosition(),si=!0}var ms=le.cameraDistanceProportion,gs=()=>((_s()||{}).def||{}).layout==="map",Rb=()=>gs()?60:le.cameraZoomMin;function nm(){le.cameraDistanceProportion<le.cameraZoomMax&&(le.cameraDistanceProportion=Math.min(le.cameraZoomMax,Math.trunc(le.cameraDistanceProportion*1.5)),sm())}function im(){le.cameraDistanceProportion>Rb()&&(le.cameraDistanceProportion=Math.trunc(le.cameraDistanceProportion/1.5),sm())}function sm(){gs()&&(ee.cameraY=cu()),Wp()}function _u(){le.cameraDistanceProportion!==ms&&(le.cameraDistanceProportion=ms,kl())}var pp=!1;function rm(n){if(!ri)return;pp||(pp=!0,Qh(),Jp=setTimeout(Il,6e3));let e=ee.postOpen&&mt.open,t=ee.postOpen&&!mt.open;switch(n.code){case"ArrowLeft":zi("ArrowLeft"),e?mt.action("LEFT"):(ii(),Dh("PREVIOUS"),t&&Ma());break;case"ArrowRight":zi("ArrowRight"),e?mt.action("RIGHT"):(ii(),Dh("NEXT"),t&&Ma());break;case"ArrowUp":zi("ArrowUp"),e||ub();break;case"ArrowDown":zi("ArrowDown"),e||db();break;case"Tab":zi("Tab"),e?(La(),Dh("NEXT"),Ma()):Xl((ee.currentSection+1)%Vt.length);break;case"KeyK":xs.classList.contains("open")?Il():Qh();break;case"KeyA":zi("KeyA"),Cb();break;case"Equal":case"NumpadAdd":zi("Equal"),e||im();break;case"Minus":case"NumpadSubtract":zi("Minus"),e||nm();break;case"Space":zi("Space"),Qe&&Qe.checkPostSelected(),ee.postOpen?La():Ma();break;case"Escape":ii();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!zn||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||rm(n)});var mp=new Qo,gp=new Je;function Dl(n,e){if(!Da||!Qe)return null;gp.set(n/Bn*2-1,-(e/cn)*2+1),mp.setFromCamera(gp,$n);let t=mp.intersectObjects([..._s().blockers,...Qe.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:Pb(n,e)||(t?t.object.userData:null)}var gl=new N;function Pb(n,e){if(!Qe||!Qe.net)return null;let t=null,i=14;for(let s of Qe.net.hits){if(!s.visible)continue;s.getWorldPosition(gl).project($n);let r=(gl.x+1)/2*Bn-n,o=(1-gl.y)/2*cn-e,a=Math.hypot(r,o);a<i&&gl.z<1&&(i=a,t=s.userData)}return t}var Hs=null,mi=null,eu=0,tu=0;Nn.addEventListener("pointerdown",n=>{if(!ri||Hs!==null||n.pointerType==="mouse"&&n.button!==0)return;hs=eu=n.clientX,us=tu=n.clientY;let e=Dl(n.clientX,n.clientY);ii(),mi=e&&e.post?e:null,mi&&mi.face==="back"&&(mi.post.view.focus(mi.post.id_),si=!0),Hs=n.pointerId,Nn.setPointerCapture(n.pointerId),Nn.classList.add("dragging"),Ml=hs,Sl=us,si=!1,Fr=!0});function am(n){if(n.pointerId===Hs){if(Hs=null,Nn.classList.remove("dragging"),Fr&&(si=!0,Fr=!1),mi&&mi.face==="front"&&Math.hypot(n.clientX-eu,n.clientY-tu)<6){let e=Dl(n.clientX,n.clientY);e&&e.post===mi.post&&Pa(e.post.id_)}else if(!mi&&Math.hypot(n.clientX-eu,n.clientY-tu)<6){let e=Dl(n.clientX,n.clientY);e&&e.netNode?Vp(e.netNode,n.clientX,n.clientY):Ol()}mi=null}}Nn.addEventListener("pointerup",am);Nn.addEventListener("pointercancel",am);var Bh=!1,Sa=null;function ql(n){Sa!==n&&(Sa&&Sa.hover(!1),Sa=n,n&&n.hover(!0))}Nn.addEventListener("pointerleave",()=>ql(null));Nn.addEventListener("pointermove",n=>{Hs!==null&&n.pointerId!==Hs||(hs=n.clientX,us=n.clientY,Hs===null&&n.pointerType==="mouse"&&!Bh&&(Bh=!0,requestAnimationFrame(()=>{Bh=!1;let e=Dl(hs,us);Nn.classList.toggle("hover",!!(e&&e.post)),ql(e&&e.post&&e.face==="front"&&!ee.postOpen?e.post:null),e&&e.netNode&&!ee.postOpen?Vp(e.netNode,hs,us):Ol()})))});var yp=0;Nn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!ri||e-yp<220||!n.deltaY||(yp=e,n.deltaY<0?im():nm())},{passive:!1});window.addEventListener("resize",()=>{Xp(),Wp(),Ra(),fm(),lm(),mt.open&&(Yp(),clearTimeout(mt.relayout),mt.relayout=setTimeout(()=>{mt.open&&mt.post&&JSON.stringify(jh("project"))!==mt.geomKey&&(mt.build(mt.post,ee.section.def.card),Ra())},250))});function _p(){if(je.settings.negativeToggle!==!1){if(jn=!jn,!Gt)try{localStorage.setItem("hc-neg",jn?"1":"0")}catch{}uu(),Qe&&Qe.retexture()}}["logo","home-logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",_p),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),_p())}))});var ge=null,Lb=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function Ib(){let n=(je.settings.showreel||"").trim();if(!ge){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),ge={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>Nb()),ge.x.addEventListener("click",yl),i.querySelector(".scrim").addEventListener("click",yl),ge.snd.addEventListener("click",()=>om(!ge.muted)),window.addEventListener("keydown",s=>{if(ge.open){if(s.code==="Escape")s.preventDefault(),yl();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(o=>o.offsetParent);if(r.length){let o=r.indexOf(document.activeElement);s.shiftKey&&o<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&o===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!ge.player||s.source!==ge.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==ge.muted&&(ge.muted=r.info.muted,Ia())})}ge.btn.hidden=!n,ge.btn.setAttribute("aria-label","Showreel"),ge.x.setAttribute("aria-label",pt("close")),n!==ge.src&&(ge.open&&yl(!0),ge.src=n,ge.kind=n?yu(n):"",ge.vid.innerHTML="",ge.player=null);let e=ge.kind==="youtube"?`https://www.youtube.com/watch?v=${Gl(n)}`:ge.kind==="vimeo"?`https://vimeo.com/${Wl(n)}`:"";ge.ext.hidden=!e,e&&(ge.ext.href=e,ge.ext.textContent=(ge.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Ia()}function Ia(){ge&&(ge.snd.innerHTML=Lb(!ge.muted)+`<span>${pt(ge.muted?"soundOn":"soundOff")}</span>`,ge.snd.setAttribute("aria-pressed",String(!ge.muted)))}function Ul(n,e=[]){let t=ge.player;if(!(!t||!t.contentWindow)){if(ge.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(ge.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function om(n){ge.muted=n,Ia(),ge.kind==="video"?ge.player&&(ge.player.muted=n,n||(ge.player.volume=1)):(Ul(n?"mute":"unMute"),n||Ul("setVolume",[100]))}function Nb(){if(!(!ge||!ge.src||ge.open)){if(ge.open=!0,ge.last=document.activeElement,ge.player)ge.kind==="video"?ge.player.play().catch(()=>{}):Ul("playVideo");else{let n=ge.src,e=ge.kind;if(e==="video"){let t=document.createElement("video");t.src=Tn(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==ge.muted&&(ge.muted=t.muted,Ia())}),ge.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Gl(n):Wl(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),ge.muted||om(!1)}),ge.player=t}else{let t=document.createElement("img");t.src=Tn(n),t.alt="",ge.player=t}ge.muted=!0,Ia(),ge.vid.appendChild(ge.player)}ge.snd.hidden=!/^(youtube|vimeo|video)$/.test(ge.kind),ge.box.hidden=!1,ge.btn.setAttribute("aria-expanded","true"),ge.box.offsetWidth,ge.box.classList.add("on"),setTimeout(()=>{ge.open&&ge.x.focus({preventScroll:!0})},60)}}function yl(n){!ge||!ge.open||(ge.open=!1,ge.btn.setAttribute("aria-expanded","false"),ge.kind==="video"?ge.player&&ge.player.pause():Ul("pauseVideo"),ge.box.classList.remove("on"),clearTimeout(ge.t),ge.t=setTimeout(()=>{ge.open||(ge.box.hidden=!0)},n===!0?0:650),ge.last&&ge.last.focus&&n!==!0&&ge.last.focus({preventScroll:!0}))}var I=null,wa=["white","grey","accent","source"],xu=8;function Db(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},je.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((o,a)=>o+a,0);for(let o=0;o<i.length;o++)if((r-=s[o])<0)return i[o];return i[0]};Object.assign(n,{cell:2*Math.round(e(4,12)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(wa,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function Ub(){if(I)return;let n=document.getElementById("home-band");if(!n)return;let e=Db(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),I={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:wa.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(xu,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},I.octx=I.off.getContext("2d",{willReadFrequently:!0}),I.raw=document.createElement("canvas"),I.rctx=I.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let o=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(o.crossOrigin="anonymous"),Object.assign(o,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:Tn(s)}),o.setAttribute("playsinline",""),o.addEventListener("loadedmetadata",()=>{isFinite(o.duration)&&o.duration>2&&(o.currentTime=Math.random()*(o.duration-1)),o.play().catch(()=>{})},{once:!0}),I.video=o}else{let o=new Set;je.posts.filter(a=>a.published!==!1).forEach(a=>[a.thumb,...(a.media||[]).map(l=>l&&l.src)].forEach(l=>{l&&!/^(https?:|data:)/.test(l)&&/\.(jpe?g|png|webp)$/i.test(l)&&!o.has(l)&&o.size<10&&o.add(l)})),I.pics=[...o].sort(()=>Math.random()-.5).map(a=>{let l=new Image;return l.src=Tn(a),l})}e.controls!==!1&&Ob(document.getElementById("home"));let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),lm()}function lm(){if(!I)return;let n=I.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);I.W=Math.max(1,Math.round(n.width)),I.H=Math.max(1,Math.round(n.height)),I.cv.width=I.W*e,I.cv.height=I.H*e,I.ctx.setTransform(e,0,0,e,0,0)}function Ob(n){let e=document.createElement("div");e.id="hv",e.innerHTML=`<div id="hv-panel">
      <div class="lbl" data-k="grid"></div><div class="row"><button type="button" class="key" data-a="grid-" data-code="ArrowLeft">\u25C2</button><button type="button" class="key" data-a="grid+" data-code="ArrowRight">\u25B8</button></div>
      <div class="lbl" data-k="contrast"></div><div class="row"><button type="button" class="key" data-a="con-" data-code="ArrowDown">\u25BE</button><button type="button" class="key" data-a="con+" data-code="ArrowUp">\u25B4</button></div>
      <div class="lbl" data-k="delay"></div><div class="row"><button type="button" class="key" data-a="del-" data-code="Minus">\u2212</button><button type="button" class="key" data-a="del+" data-code="Equal">+</button></div>
      <div class="lbl" data-k="color"></div><div class="row"><button type="button" class="key sw" data-a="color" data-code="KeyC"><i></i> C</button></div>
      <div class="lbl" data-k="invert"></div><button type="button" class="key" data-a="invert" data-code="KeyI" aria-pressed="false">I</button>
      <div class="lbl" data-k="sound"></div><button type="button" class="key" data-a="sound" data-code="KeyS" aria-pressed="false">S</button>
      <div class="lbl" data-k="cam"></div><button type="button" class="key" data-a="cam" data-code="KeyV" aria-pressed="false">V</button>
      <span class="hv-note" hidden></span>
    </div><button id="hv-toggle" type="button" aria-expanded="false"></button>`,n.appendChild(e),I.box=e,I.note=e.querySelector(".hv-note");let t=i=>{e.classList.toggle("open",i),e.querySelector("#hv-toggle").setAttribute("aria-expanded",String(i))};I.setOpen=t,e.querySelector("#hv-toggle").addEventListener("click",()=>t(!e.classList.contains("open"))),window.addEventListener("keydown",i=>{if(zn||i.ctrlKey||i.metaKey||i.altKey||ge&&ge.open)return;let s=i.target&&i.target.id==="bs",r=s&&i.target.value.length>0;if(i.code==="Escape"&&s){i.target.blur();return}if(i.code==="KeyK"&&!s){i.preventDefault(),t(!e.classList.contains("open"));return}let o=e.querySelector(`[data-code="${i.code}"]`);o&&(s&&!/^Arrow/.test(i.code)||/^Arrow/.test(i.code)&&r||(i.preventDefault(),I.touched||(I.touched=!0,t(!0)),o.click()))}),e.querySelector("#hv-panel").addEventListener("click",i=>{let s=i.target.closest("button[data-a]");if(!s)return;let r=s.dataset.a;s.classList.add("down"),setTimeout(()=>s.classList.remove("down"),200),r==="grid+"?I.cell=Math.max(6,I.cell-2):r==="grid-"?I.cell=Math.min(40,I.cell+2):r==="con-"?I.gamma=Math.max(.4,+(I.gamma-.2).toFixed(2)):r==="con+"?I.gamma=Math.min(3,+(I.gamma+.2).toFixed(2)):r==="del-"?I.delay=Math.max(1,I.delay-1):r==="del+"?I.delay=Math.min(xu,I.delay+1):r==="color"?I.color=wa[(wa.indexOf(I.color)+1)%wa.length]:r==="invert"?I.mode=I.mode==="light"?"dark":"light":r==="sound"?(I.sound=!I.sound,I.video&&(I.video.muted=!I.sound,I.video.volume=1,I.video.play().catch(()=>{}))):r==="cam"&&(I.cam?cm():Fb()),Gs()}),Gs()}function Gs(){if(!I||!I.box)return;I.box.querySelectorAll(".lbl[data-k]").forEach(s=>{s.textContent=pt("hv_"+s.dataset.k)}),I.box.querySelector("#hv-toggle").setAttribute("aria-label",pt("hv_tab"));let n=I.box.querySelector(".sw i");n.className="c-"+I.color;let e=(s,r,o)=>{let a=I.box.querySelector(`[data-a="${s}"]`);a.setAttribute("aria-pressed",String(r)),a.classList.toggle("on",r),o&&a.setAttribute("aria-label",o)};e("invert",I.mode==="dark",pt("hv_invert")),e("sound",I.sound,pt("hv_sound")),e("cam",!!I.cam,pt("hv_cam")),I.box.querySelector('[data-a="sound"]').disabled=!I.video||!!I.cam,I.box.querySelector('[data-a="color"]').setAttribute("aria-label",pt("hv_color")),["grid-","grid+","con-","con+","del-","del+"].forEach(s=>I.box.querySelector(`[data-a="${s}"]`).setAttribute("aria-label",pt(s.startsWith("grid")?"hv_grid":s.startsWith("con")?"hv_contrast":"hv_delay")+(s.endsWith("+")?" +":" \u2212")));let t=I.box.querySelector('.lbl[data-k="delay"]');t&&(t.textContent=pt("hv_delay")+" "+nu()+(nu()<I.delay?"*":""));let i=I.box.querySelector('[data-a="del+"]');i&&(i.disabled=I.delay>=xu)}async function Fb(){I.note.hidden=!0;try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),I.cam={stream:n,video:e},I.lo=0,I.hi=1,I.video&&I.video.pause(),I.note.textContent=pt("hv_camNote"),I.note.hidden=!1}catch{I.note.textContent=pt("hv_camDenied"),I.note.hidden=!1}Gs()}function cm(){I&&I.cam&&(I.cam.stream.getTracks().forEach(n=>n.stop()),I.cam=null,I.video&&I.video.play().catch(()=>{}),I.note.hidden=!0),I&&Gs()}function Bb(){I&&(cm(),I.video&&I.video.pause())}function zh(n,e,t,i=1,s=0,r=0,o=!1){let a=I.rctx,l=I.raw.width,c=I.raw.height,h=Math.max(l/e,c/t)*i,d=e*h,f=t*h;o&&(a.save(),a.translate(l,0),a.scale(-1,1)),a.drawImage(n,(l-d)/2+s*l,(c-f)/2+r*c,d,f),o&&a.restore()}function zb(n){let e=I.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,I.raw.width,I.raw.height),I.cam&&I.cam.video.readyState>=2)return zh(I.cam.video,I.cam.video.videoWidth,I.cam.video.videoHeight,1,0,0,!0),!0;if(I.video)return I.video.readyState<2?!1:(zh(I.video,I.video.videoWidth,I.video.videoHeight),!0);let t=I.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,o=(Math.floor(s)%r+r)%r,a=s-Math.floor(s),l=(c,h,d)=>{e.globalAlpha=d,zh(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[o],a,1),a>.78&&r>1&&l(t[(o+1)%r],a-1,(a-.78)/.22),e.globalAlpha=1,!0}var kb=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function Hb(n){if(I.pyr&&I.pyr.cell===n&&I.pyr.fill===I.fill)return I.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=Math.max(Math.abs(o+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-a/I.fill))*255,c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),I.pyr={cell:n,fill:I.fill,pat:I.ctx.createPattern(e,"repeat")},I.pyr.pat}function Vb(n,e,t){let i=I.ctx,s=I.W,r=I.H,o=Math.round((s-n*t)/2),a=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!kb){i.globalAlpha=.45,i.drawImage(I.off,o,a,n*t,e*t),i.globalAlpha=1;return}I.tmp||(I.tmp=document.createElement("canvas"),I.tctx=I.tmp.getContext("2d"));let l=I.tmp,c=I.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${I.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+I.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(I.off,o,a,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(o,a),c.fillStyle=Hb(t),c.fillRect(-o,-a,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),I.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",I.color==="source"?i.drawImage(I.off,o,a,n*t,e*t):(i.fillStyle=I.color==="grey"?"#8d8d8d":je.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Gb=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},xp=new Map,Wb=(n,e,t)=>{let i=n>>3<<10|e>>3<<5|t>>3,s=xp.get(i);return s||(s=`rgb(${n&248},${e&248},${t&248})`,xp.set(i,s)),s},nu=()=>I.floor||I.interval>1e3/29?1:I.delay;function Xb(n){if(!I||!I.W||n-I.last<I.interval)return;I.last=n;let e=performance.now(),t=Gb.matches?0:(n-I.t0)/1e3,i=I.ctx,s=I.W,r=I.H,o=Math.max(I.cell,I.floor),a=Math.ceil(s/o),l=Math.ceil(r/o);if(i.fillStyle="#0b0b0b",i.fillRect(0,0,s,r),(I.off.width!==a||I.off.height!==l)&&(I.off.width=I.raw.width=a,I.off.height=I.raw.height=l,I.fresh=!0),!zb(t))return;let c=nu();I.octx.globalAlpha=I.fresh||c<=1?1:1/c,I.octx.drawImage(I.raw,0,0),I.octx.globalAlpha=1,I.fresh=!1;let h=null;if(!I.tainted)try{h=I.octx.getImageData(0,0,a,l).data}catch{I.tainted=!0}I.tainted?Vb(a,l,o):qb(h,a,l,o);let d=performance.now()-e;I.cost=I.cost*.9+d*.1,I.cost>14&&++I.slow>15?(I.box&&setTimeout(Gs,0),I.slow=0,I.interval<1e3/21?I.interval=I.interval<1e3/25?1e3/24:1e3/20:I.floor=Math.min(40,Math.max(I.floor,o)+2)):I.cost<5&&++I.fast>60&&(I.box&&setTimeout(Gs,0),I.fast=0,I.floor?I.floor=Math.max(0,I.floor-2):I.interval>1e3/30&&(I.interval=I.interval>1e3/22?1e3/24:1e3/30))}function qb(n,e,t,i){let s=I.ctx,r=e*t,o=I.lum&&I.lum.length===r?I.lum:I.lum=new Float32Array(r),a=1,l=0;for(let u=0,T=0;u<r;u++,T+=4){let v=(.2126*n[T]+.7152*n[T+1]+.0722*n[T+2])/255;o[u]=v,v<a&&(a=v),v>l&&(l=v)}I.lo+=(a-I.lo)*.15,I.hi+=(Math.max(l,I.lo+.15)-I.hi)*.15;let c=I.lo,h=1/(I.hi-c),d=I.mode==="dark",f=I.gamma,m=i*I.fill,_=(I.W-e*i)/2,x=(I.H-t*i)/2,p=I.color==="source";p||(s.fillStyle=I.color==="grey"?"#8d8d8d":I.color==="accent"?je.settings.accent||"#ffcc00":"#f2f2f2",s.beginPath());for(let u=0,T=0;u<t;u++){let v=x+u*i+i/2;for(let P=0;P<e;P++,T++){let U=(o[T]-c)*h;U=U<0?0:U>1?1:U,d&&(U=1-U);let L=(f===1?U:Math.pow(U,f))*m;if(L<.6)continue;let D=_+P*i+(i-L)/2,j=v-L/2;if(p){let E=T*4;s.fillStyle=Wb(n[E],n[E+1],n[E+2]),s.fillRect(D,j,L,L)}else s.rect(D,j,L,L)}}p||s.fill()}var Or=document.getElementById("home"),ds=document.getElementById("enter"),Na=document.getElementById("ticker"),_l=Na.getContext("2d"),Ea=null,wl=0,Ta=1,hm="hc-bullshit-slogans",Aa=[];try{let n=JSON.parse(localStorage.getItem(hm)||"[]");Array.isArray(n)&&(Aa=n.filter(e=>typeof e=="string").slice(0,8))}catch{}function um(){let n=document.getElementById("bs"),e=n.value.replace(/\s+/g," ").trim().slice(0,70);if(!e)return!1;Aa=[e.toUpperCase(),...Aa.filter(t=>t!==e.toUpperCase())].slice(0,8);try{localStorage.setItem(hm,JSON.stringify(Aa))}catch{}return dm(),wl=0,n.value="",document.getElementById("bs-sent").textContent=pt("sent"),Yb(e),!0}function Yb(n){let e=(je.settings.sloganInbox||"").trim();if(!e||Gt||!/^https:\/\//.test(e))return;let t=JSON.stringify({slogan:n,lang:Hi,tag:mm("")||"",site:location.host||"local"});try{fetch(e,{method:"POST",mode:"no-cors",keepalive:!0,headers:{"Content-Type":"text/plain;charset=utf-8"},body:t}).catch(()=>{})}catch{}}document.getElementById("bs-form").addEventListener("submit",n=>{n.preventDefault(),um(),document.getElementById("bs").blur(),ds.click()});var vp={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},$b=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=vp[e]||vp["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function dm(){let n=[...Aa,...je.settings.home.ticker||[]].filter(Boolean),e=(n.length?n:[je.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ",t=[];for(let i of e){let s=$b(i),r=i===" "?3:5;for(let o=0;o<r;o++){let a=0;for(let l=0;l<7;l++)s[l]&1<<4-o&&(a|=1<<l);t.push(a)}t.push(0)}Ea={w:t.length,cols:t}}var gi={pitch:3.2,rows:7,h:30},Ur=null,bp="";function Mp(n,e){let t=Ta,i=Math.ceil(gi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=i/2;if(e){let a=r.createRadialGradient(o,o,0,o,o,o);a.addColorStop(0,n),a.addColorStop(.35,n),a.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=a,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(o,o,gi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(o-gi.pitch*.1*t,o-gi.pitch*.1*t,gi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function fm(){Ta=Math.min(window.devicePixelRatio||1,2),Na.width=Math.round(window.innerWidth*Ta),Na.height=Math.round(gi.h*Ta),Ur=null}var xl=0;function jb(n){let e=Cn();(!Ur||bp!==e)&&(bp=e,Ur={on:Mp(e,!0),off:Mp(e,!1)}),xl+=n*26,xl>=1&&(wl=(wl+Math.floor(xl))%Ea.w,xl%=1);let t=Ta,i=gi.pitch,s=Math.ceil(window.innerWidth/i)+1,r=(gi.h-gi.rows*i)/2;_l.setTransform(1,0,0,1,0,0),_l.fillStyle="#000",_l.fillRect(0,0,Na.width,Na.height);let o=Ur.on.width/2;for(let a=0;a<s;a++){let l=Ea.cols[(wl+a)%Ea.w],c=(a*i+i/2)*t-o;for(let h=0;h<gi.rows;h++)_l.drawImage(l>>h&1?Ur.on:Ur.off,c,(r+h*i+i/2)*t-o)}}var zn=!1,vu=!1,bu=!1,Mu=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),iu=0,pm=0;function Su(){if(!zn){if(zn=!0,clearTimeout(iu),!Gt&&Mu())try{history.pushState(null,"",location.pathname+location.search+"#"+(je.sections.find(n=>n.id===je.settings.startSection&&n.visible)||Vt[0].def).id)}catch{}Or.classList.add("out"),iu=setTimeout(()=>{Or.hidden=!0,Bb()},1100),Jb(),xb(),ps.classList.add("on"),setTimeout(Mb,1500),xs.hidden=!1,fu.classList.remove("hidden"),Nn.focus({preventScroll:!0})}}function wu(n=!0){if(zn){if(ii(),Il(),Kh(),Ol(),ql(null),_u(),zn=!1,bu=!1,clearTimeout(iu),pm=performance.now()+1300,ds.textContent=Fe(je.settings.home.enter)||pt("enter"),ds.classList.remove("wait"),Or.hidden=!1,Or.offsetWidth,Or.classList.remove("out"),I&&I.video&&I.video.play().catch(()=>{}),n&&!Gt)try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}du()}}window.addEventListener("popstate",()=>{Gt||(Mu()?wu(!1):!zn&&vu&&Su())});ps.addEventListener("click",n=>{n.target.closest(".wm")&&zn&&wu()});ps.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&zn&&(n.preventDefault(),wu())});ds.addEventListener("click",()=>{um(),bu=!0,vu?Su():(ds.textContent=pt("loading"),ds.classList.add("wait"))});var su=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function mm(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Gt&&Gt.tag&&(e=Gt.tag),su(e||n)}function Zb(n,e){let t=n.tags||[],i=t.find(s=>su(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>su(r)===e));return i?i.id:""}function Jb(){try{ys.compile(nb,$n,fs)}catch{}kl();let n=Gt&&Gt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Vt.findIndex(o=>o.def.id===e);i<0&&(i=Math.max(0,Vt.findIndex(o=>o.def.id===je.settings.startSection)));let s=mm(t||(e&&i<0?e:""));if(s){let o=Vt.findIndex(a=>a.def.id===e)>=0?[i]:[i,...Vt.keys()];for(let a of o){let l=Zb(Vt[a].def,s);if(l){i=a,Vt[a].def.defaultTag=l;break}}}ms=le.cameraDistanceProportion,ee.currentSection=i,ee.resetData();let r=_s();ee.cameraY=cu(),vt.x=Gi()*Math.sin(ee.degreeCamera)+r.p.x,vt.y=ee.cameraY,vt.z=Gi()*Math.cos(ee.degreeCamera)+r.p.z,ni.x=r.p.x,ni.y=Bl(),ni.z=r.p.z,Da=!0,Xl(i,0),(Bn<=700||cn<=520)&&Ra()}var Sp=performance.now();function gm(n){let e=Math.min(.25,Math.max(0,(n-Sp)/1e3));Sp=n,ki+=e,Al=e*Zv,!zn&&Ea&&jb(e),I&&!Or.hidden&&Xb(n),Da&&(zn||n<pm)&&(Qv(),_b(),Qe&&Qe.update(),mt.step(),vb(),ys.render(fs,$n)),requestAnimationFrame(gm)}function kh(n){console.error(n);let e=document.getElementById("load-error");e.textContent=pt("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function Kb(){Gt||!/[?&]preview\b/.test(location.search)||window.parent===window||(Gt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,o])=>{try{s.files[r]=URL.createObjectURL(o)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:wp},"*")}catch{}}))}(async function(){try{await Kb(),Gt?je=Bs(structuredClone(Gt.content)):(je=await vl.load(),vl.prepare&&await vl.prepare(je))}catch(r){kh(r);return}if(jn=!!je.settings.negative,Up(),!Gt&&je.settings.negativeToggle!==!1)try{let r=localStorage.getItem("hc-neg");(r==="1"||r==="0")&&(jn=r==="1")}catch{}let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=je.settings.langs&&je.settings.langs.length?je.settings.langs:as,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(r=>String(r).toLowerCase().slice(0,2)).find(r=>t.includes(r));if(Hi=t.includes(e)?e:i||je.settings.defaultLang||t[0],Vt=je.sections.filter(r=>r.visible).map(r=>({def:r})),!Vt.length){kh(new Error("aucune section visible"));return}window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&Ep(!1),Kp(),uu(),bb(),Ub(),Xp(),kl(),fm(),requestAnimationFrame(gm),zs=Vt.map((r,o)=>new qh(r.def,o)),Vt.forEach((r,o)=>{r.object=zs[o]}),Vt.forEach(r=>{r.container=r.object.container,r.p=r.object.p});let s=new al(Ip);try{(await Promise.allSettled(zs.map(o=>o.load(s)))).forEach((o,a)=>{o.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+zs[a].def.id+" \xBB :",o.reason)}),zs.forEach((o,a)=>o.place(a)),await Promise.race([Promise.all(Dp).then(Ws),new Promise(o=>setTimeout(o,3e3))]),vu=!0,(bu||!Mu()||Gt&&Gt.start)&&Su()}catch(r){kh(r)}})();window.__hc={P:ee,STYLE:le,cam:vt,camera:$n,renderer:ys,get hv(){return I&&{cell:I.cell,floor:I.floor,fps:Math.round(1e3/I.interval),cost:+I.cost.toFixed(1),tainted:I.tainted}},get input(){return ri},get homeGone(){return zn},get content(){return je},get postsView(){return Qe},getToSectionView:Xl,openThatPost:Pa,closePost:La,setLang:$p,enter:()=>ds.click()};})();
