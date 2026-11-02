/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Yl="160";var Lp=0,Xh=1,Ip=2;var Nd=1,Np=2,wi=3,On=0,un=1,bn=2;var Xi=0,nr=1,qh=2,Yh=3,$h=4,Dp=5,fs=100,Up=101,Op=102,Zh=103,Jh=104,Fp=200,Bp=201,zp=202,kp=203,fl=204,pl=205,Hp=206,Vp=207,Gp=208,Wp=209,Xp=210,qp=211,Yp=212,$p=213,Zp=214,Jp=0,jp=1,Kp=2,io=3,Qp=4,em=5,tm=6,nm=7,Vo=0,im=1,sm=2,qi=0,rm=1,am=2,om=3,cm=4,lm=5,hm=6,jh="attached",um="detached",Dd=300,rr=301,ar=302,ml=303,gl=304,Go=306,$i=1e3,ln=1001,_l=1002,Qt=1003,Kh=1004;var Ic=1005;var _n=1006,dm=1007;var Zi=1008;var Yi=1009,fm=1010,pm=1011,$l=1012,Ud=1013,Wi=1014,Ti=1015,Yr=1016,Od=1017,Fd=1018,gs=1020,mm=1021,Dn=1023,gm=1024,_m=1025,_s=1026,or=1027,ym=1028,Bd=1029,xm=1030,zd=1031,kd=1033,Nc=33776,Dc=33777,Uc=33778,Oc=33779,Qh=35840,eu=35841,tu=35842,nu=35843,Hd=36196,iu=37492,su=37496,ru=37808,au=37809,ou=37810,cu=37811,lu=37812,hu=37813,uu=37814,du=37815,fu=37816,pu=37817,mu=37818,gu=37819,_u=37820,yu=37821,Fc=36492,xu=36494,vu=36495,vm=36283,bu=36284,Mu=36285,Su=36286;var so=2300,ro=2301,Bc=2302,wu=2400,Eu=2401,Tu=2402,bm=2500;var Vd=3e3,ys=3001,Mm=3200,Sm=3201,Zl=0,wm=1,Un="",Ft="srgb",Ci="srgb-linear",Jl="display-p3",Wo="display-p3-linear",ao="linear",It="srgb",oo="rec709",co="p3";var Ds=7680;var Au=519,Em=512,Tm=513,Am=514,Gd=515,Cm=516,Rm=517,Pm=518,Lm=519,yl=35044;var Cu="300 es",xl=1035,Ai=2e3,lo=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=1234567,Gr=Math.PI/180,cr=180/Math.PI;function qn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function jl(n,e){return(n%e+e)%e}function Im(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nm(n,e,t){return n!==e?(t-n)/(e-n):0}function Wr(n,e,t){return(1-t)*n+t*e}function Dm(n,e,t,i){return Wr(n,e,1-Math.exp(-t*i))}function Um(n,e=1){return e-Math.abs(jl(n,e*2)-e)}function Om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Bm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zm(n,e){return n+Math.random()*(e-n)}function km(n){return n*(.5-Math.random())}function Hm(n){n!==void 0&&(Ru=n);let e=Ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vm(n){return n*Gr}function Gm(n){return n*cr}function vl(n){return(n&n-1)===0&&n!==0}function Wm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ho(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xm(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),m=r((i-e)/2),y=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*y,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*y,o*l);break;case"ZYZ":n.set(c*y,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Qi={DEG2RAD:Gr,RAD2DEG:cr,generateUUID:qn,clamp:cn,euclideanModulo:jl,mapLinear:Im,inverseLerp:Nm,lerp:Wr,damp:Dm,pingpong:Um,smoothstep:Om,smootherstep:Fm,randInt:Bm,randFloat:zm,randFloatSpread:km,seededRandom:Hm,degToRad:Vm,radToDeg:Gm,isPowerOfTwo:vl,ceilPowerOfTwo:Wm,floorPowerOfTwo:ho,setQuaternionFromProperEuler:Xm,normalize:Et,denormalize:ti},Ye=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],y=i[8],x=s[0],p=s[3],f=s[6],C=s[1],b=s[4],P=s[7],U=s[2],I=s[5],N=s[8];return r[0]=a*x+o*C+c*U,r[3]=a*p+o*b+c*I,r[6]=a*f+o*P+c*N,r[1]=l*x+h*C+u*U,r[4]=l*p+h*b+u*I,r[7]=l*f+h*P+u*N,r[2]=d*x+m*C+y*U,r[5]=d*p+m*b+y*I,r[8]=d*f+m*P+y*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,y=t*u+i*d+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/y;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zc=new ct;function Wd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qm(){let n=$r("canvas");return n.style.display="block",n}var Pu={};function Xr(n){n in Pu||(Pu[n]=!0,console.warn(n))}var Lu=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Iu=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[Ci]:{transfer:ao,primaries:oo,toReference:n=>n,fromReference:n=>n},[Ft]:{transfer:It,primaries:oo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wo]:{transfer:ao,primaries:co,toReference:n=>n.applyMatrix3(Iu),fromReference:n=>n.applyMatrix3(Lu)},[Jl]:{transfer:It,primaries:co,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Iu),fromReference:n=>n.applyMatrix3(Lu).convertLinearToSRGB()}},Ym=new Set([Ci,Wo]),Tt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ym.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ca[e].toReference,s=Ca[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ca[n].primaries},getTransfer:function(n){return n===Un?ao:Ca[n].transfer}};function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Us,uo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=$r("canvas")),Us.width=e.width,Us.height=e.height;let i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ir(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$m=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hc(s[a].image)):r.push(Hc(s[a]))}else r=Hc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zm=0,Mn=class n extends Ji{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ln,s=ln,r=_n,a=Zi,o=Dn,c=Yi,l=n.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=qn(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ys?Ft:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?ys:Vd}set encoding(e){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ys?Ft:Un}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Dd;Mn.DEFAULT_ANISOTROPY=1;var gt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],y=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(y+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,P=(m+1)/2,U=(f+1)/2,I=(h+d)/4,N=(u+x)/4,j=(y+p)/4;return b>P&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=I/i,r=N/i):P>U?P<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),i=I/s,r=j/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=N/r,s=j/r),this.set(i,s,r,t),this}let C=Math.sqrt((p-y)*(p-y)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(p-y)/C,this.y=(u-x)/C,this.z=(d-h)/C,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends Ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ys?Ft:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends bl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},po=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ml=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ni=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],m=r[a+1],y=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=y,e[t+3]=x;return}if(u!==x||c!==d||l!==m||h!==y){let p=1-o,f=c*d+l*m+h*y+u*x,C=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let U=Math.sqrt(b),I=Math.atan2(U,f*C);p=Math.sin(p*I)/U,o=Math.sin(o*I)/U}let P=o*C;if(c=c*p+d*P,l=l*p+m*P,h=h*p+y*P,u=u*p+x*P,p===1-o){let U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],m=r[a+2],y=r[a+3];return e[t]=o*y+h*u+c*m-l*d,e[t+1]=c*y+h*d+l*u-o*m,e[t+2]=l*y+h*m+o*d-c*u,e[t+3]=h*y-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),m=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*y,this._y=l*m*u-d*h*y,this._z=l*h*y+d*m*u,this._w=l*h*u-d*m*y;break;case"YXZ":this._x=d*h*u+l*m*y,this._y=l*m*u-d*h*y,this._z=l*h*y-d*m*u,this._w=l*h*u+d*m*y;break;case"ZXY":this._x=d*h*u-l*m*y,this._y=l*m*u+d*h*y,this._z=l*h*y+d*m*u,this._w=l*h*u-d*m*y;break;case"ZYX":this._x=d*h*u-l*m*y,this._y=l*m*u+d*h*y,this._z=l*h*y-d*m*u,this._w=l*h*u+d*m*y;break;case"YZX":this._x=d*h*u+l*m*y,this._y=l*m*u+d*h*y,this._z=l*h*y-d*m*u,this._w=l*h*u-d*m*y;break;case"XZY":this._x=d*h*u-l*m*y,this._y=l*m*u-d*h*y,this._z=l*h*y+d*m*u,this._w=l*h*u+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vc=new L,Nu=new ni,en=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Pa.subVectors(this.max,Ur),Os.subVectors(e.a,Ur),Fs.subVectors(e.b,Ur),Bs.subVectors(e.c,Ur),zi.subVectors(Fs,Os),ki.subVectors(Bs,Fs),cs.subVectors(Os,Bs);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-cs.z,cs.y,zi.z,0,-zi.x,ki.z,0,-ki.x,cs.z,0,-cs.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-cs.y,cs.x,0];return!Gc(t,Os,Fs,Bs,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,Os,Fs,Bs,Pa))?!1:(La.crossVectors(zi,ki),t=[La.x,La.y,La.z],Gc(t,Os,Fs,Bs,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yi=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,Ra=new en,Os=new L,Fs=new L,Bs=new L,zi=new L,ki=new L,cs=new L,Ur=new L,Pa=new L,La=new L,ls=new L;function Gc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ls.fromArray(n,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Jm=new en,Or=new L,Wc=new L,Fn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Wc)),this.expandByPoint(Or.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new L,Xc=new L,Ia=new L,Hi=new L,qc=new L,Na=new L,Yc=new L,lr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=Hi.dot(this.direction),c=-Hi.dot(Ia),l=Hi.lengthSq(),h=Math.abs(1-a*a),u,d,m,y;if(h>0)if(u=a*c-o,d=a*o-c,y=r*h,u>=0)if(d>=-y)if(d<=y){let x=1/h;u*=x,d*=x,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-y?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=y?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xc).addScaledVector(Ia,d),m}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){qc.subVectors(t,e),Na.subVectors(i,e),Yc.crossVectors(qc,Na);let a=this.direction.dot(Yc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let c=o*this.direction.dot(Na.crossVectors(Hi,Na));if(c<0)return null;let l=o*this.direction.dot(qc.cross(Hi));if(l<0||c+l>a)return null;let h=-o*Hi.dot(Yc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,m,y,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,m,y,x,p)}set(e,t,i,s,r,a,o,c,l,h,u,d,m,y,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=y,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,y=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+y*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=y+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,y=l*h,x=l*u;t[0]=d+x*o,t[4]=y*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-y,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,y=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=y+m*o,t[1]=m+y*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,y=o*h,x=o*u;t[0]=c*h,t[4]=y*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-y,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,y=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=y*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+y,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,m=a*l,y=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=m*u-y,t[2]=y*u-m,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jm,e,Km)}lookAt(e,t,i){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Vi.crossVectors(i,Tn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Vi.crossVectors(i,Tn)),Vi.normalize(),Da.crossVectors(Tn,Vi),s[0]=Vi.x,s[4]=Da.x,s[8]=Tn.x,s[1]=Vi.y,s[5]=Da.y,s[9]=Tn.y,s[2]=Vi.z,s[6]=Da.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],y=i[2],x=i[6],p=i[10],f=i[14],C=i[3],b=i[7],P=i[11],U=i[15],I=s[0],N=s[4],j=s[8],E=s[12],R=s[1],Z=s[5],ae=s[9],le=s[13],O=s[2],q=s[6],F=s[10],K=s[14],J=s[3],Y=s[7],se=s[11],te=s[15];return r[0]=a*I+o*R+c*O+l*J,r[4]=a*N+o*Z+c*q+l*Y,r[8]=a*j+o*ae+c*F+l*se,r[12]=a*E+o*le+c*K+l*te,r[1]=h*I+u*R+d*O+m*J,r[5]=h*N+u*Z+d*q+m*Y,r[9]=h*j+u*ae+d*F+m*se,r[13]=h*E+u*le+d*K+m*te,r[2]=y*I+x*R+p*O+f*J,r[6]=y*N+x*Z+p*q+f*Y,r[10]=y*j+x*ae+p*F+f*se,r[14]=y*E+x*le+p*K+f*te,r[3]=C*I+b*R+P*O+U*J,r[7]=C*N+b*Z+P*q+U*Y,r[11]=C*j+b*ae+P*F+U*se,r[15]=C*E+b*le+P*K+U*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],y=e[3],x=e[7],p=e[11],f=e[15];return y*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*m-i*c*m)+x*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+i*a*m+r*o*h-i*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],y=e[12],x=e[13],p=e[14],f=e[15],C=u*p*l-x*d*l+x*c*m-o*p*m-u*c*f+o*d*f,b=y*d*l-h*p*l-y*c*m+a*p*m+h*c*f-a*d*f,P=h*x*l-y*u*l+y*o*m-a*x*m-h*o*f+a*u*f,U=y*u*c-h*x*c-y*o*d+a*x*d+h*o*p-a*u*p,I=t*C+i*b+s*P+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/I;return e[0]=C*N,e[1]=(x*d*r-u*p*r-x*s*m+i*p*m+u*s*f-i*d*f)*N,e[2]=(o*p*r-x*c*r+x*s*l-i*p*l-o*s*f+i*c*f)*N,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*m-i*c*m)*N,e[4]=b*N,e[5]=(h*p*r-y*d*r+y*s*m-t*p*m-h*s*f+t*d*f)*N,e[6]=(y*c*r-a*p*r-y*s*l+t*p*l+a*s*f-t*c*f)*N,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*N,e[8]=P*N,e[9]=(y*u*r-h*x*r-y*i*m+t*x*m+h*i*f-t*u*f)*N,e[10]=(a*x*r-y*o*r+y*i*l-t*x*l-a*i*f+t*o*f)*N,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*m-t*o*m)*N,e[12]=U*N,e[13]=(h*x*s-y*u*s+y*i*d-t*x*d-h*i*p+t*u*p)*N,e[14]=(y*o*s-a*x*s-y*i*c+t*x*c+a*i*p-t*o*p)*N,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,y=r*u,x=a*h,p=a*u,f=o*u,C=c*l,b=c*h,P=c*u,U=i.x,I=i.y,N=i.z;return s[0]=(1-(x+f))*U,s[1]=(m+P)*U,s[2]=(y-b)*U,s[3]=0,s[4]=(m-P)*I,s[5]=(1-(d+f))*I,s[6]=(p+C)*I,s[7]=0,s[8]=(y+b)*N,s[9]=(p-C)*N,s[10]=(1-(d+x))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),a=zs.set(s[4],s[5],s[6]).length(),o=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let l=1/r,h=1/a,u=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ai){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,y;if(o===Ai)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===lo)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ai){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*l,m=(i+s)*h,y,x;if(o===Ai)y=(a+r)*u,x=-2*u;else if(o===lo)y=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},zs=new L,Wn=new tt,jm=new L(0,0,0),Km=new L(1,1,1),Vi=new L,Da=new L,Tn=new L,Du=new tt,Uu=new ni,mo=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mo.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qm=0,Ou=new L,ks=new ni,vi=new tt,Ua=new L,Fr=new L,eg=new L,tg=new ni,Fu=new L(1,0,0),Bu=new L(0,1,0),zu=new L(0,0,1),ng={type:"added"},ig={type:"removed"},Gt=class n extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new mo,i=new ni,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new ct}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ua.copy(e):Ua.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Fr,Ua,this.up):vi.lookAt(Ua,Fr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(vi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ng)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ig)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new L(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new L,bi=new L,$c=new L,Mi=new L,Hs=new L,Vs=new L,ku=new L,Zc=new L,Jc=new L,jc=new L,Oa=!1,ms=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),bi.subVectors(i,t),$c.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(bi),c=Xn.dot($c),l=bi.dot(bi),h=bi.dot($c),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,y=(a*h-o*c)*d;return r.set(1-m-y,y,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,i,s,r,a,o,c){return Oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oa=!0),this.getInterpolation(e,t,i,s,r,a,o,c)}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),bi.subVectors(e,t),Xn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Xn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,i),Vs.subVectors(r,i),Zc.subVectors(e,i);let c=Hs.dot(Zc),l=Vs.dot(Zc);if(c<=0&&l<=0)return t.copy(i);Jc.subVectors(e,s);let h=Hs.dot(Jc),u=Vs.dot(Jc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Hs,a);jc.subVectors(e,r);let m=Hs.dot(jc),y=Vs.dot(jc);if(y>=0&&m<=y)return t.copy(r);let x=m*l-c*y;if(x<=0&&l>=0&&y<=0)return o=l/(l-y),t.copy(i).addScaledVector(Vs,o);let p=h*y-m*u;if(p<=0&&u-h>=0&&m-y>=0)return ku.subVectors(r,s),o=(u-h)/(u-h+(m-y)),t.copy(s).addScaledVector(ku,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(Hs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Kc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=jl(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Kc(a,r,e+1/3),this.g=Kc(a,r,e),this.b=Kc(a,r,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=Xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=kc(e.r),this.g=kc(e.g),this.b=kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Tt.fromWorkingColorSpace(on.copy(this),e),Math.round(cn(on.r*255,0,255))*65536+Math.round(cn(on.g*255,0,255))*256+Math.round(cn(on.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(on.copy(this),t);let i=on.r,s=on.g,r=on.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Ft){Tt.fromWorkingColorSpace(on.copy(this),e);let t=on.r,i=on.g,s=on.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Fa);let i=Wr(Gi.h,Fa.h,t),s=Wr(Gi.s,Fa.s,t),r=Wr(Gi.l,Fa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new et;et.NAMES=Xd;var sg=0,ii=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=nr,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dn=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new L,Ba=new Ye,Cn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),e}};var go=class extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _o=class extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Rt=class extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var rg=0,Nn=new tt,Qc=new Gt,Gs=new L,An=new en,Br=new en,$t=new L,Sn=class n extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?_o:go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(An.min,Br.min),An.expandByPoint($t),$t.addVectors(An.max,Br.max),An.expandByPoint($t)):(An.expandByPoint(Br.min),An.expandByPoint(Br.max))}An.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(Gs.fromBufferAttribute(e,l),$t.add(Gs)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<o;R++)l[R]=new L,h[R]=new L;let u=new L,d=new L,m=new L,y=new Ye,x=new Ye,p=new Ye,f=new L,C=new L;function b(R,Z,ae){u.fromArray(s,R*3),d.fromArray(s,Z*3),m.fromArray(s,ae*3),y.fromArray(a,R*2),x.fromArray(a,Z*2),p.fromArray(a,ae*2),d.sub(u),m.sub(u),x.sub(y),p.sub(y);let le=1/(x.x*p.y-p.x*x.y);isFinite(le)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(le),C.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(le),l[R].add(f),l[Z].add(f),l[ae].add(f),h[R].add(C),h[Z].add(C),h[ae].add(C))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let R=0,Z=P.length;R<Z;++R){let ae=P[R],le=ae.start,O=ae.count;for(let q=le,F=le+O;q<F;q+=3)b(i[q+0],i[q+1],i[q+2])}let U=new L,I=new L,N=new L,j=new L;function E(R){N.fromArray(r,R*3),j.copy(N);let Z=l[R];U.copy(Z),U.sub(N.multiplyScalar(N.dot(Z))).normalize(),I.crossVectors(j,Z);let le=I.dot(h[R])<0?-1:1;c[R*4]=U.x,c[R*4+1]=U.y,c[R*4+2]=U.z,c[R*4+3]=le}for(let R=0,Z=P.length;R<Z;++R){let ae=P[R],le=ae.start,O=ae.count;for(let q=le,F=le+O;q<F;q+=3)E(i[q+0]),E(i[q+1]),E(i[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let y=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,y=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let f=0;f<h;f++)d[y++]=l[m++]}return new Cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hu=new tt,hs=new lr,za=new Fn,Vu=new L,Ws=new L,Xs=new L,qs=new L,el=new L,ka=new L,Ha=new Ye,Va=new Ye,Ga=new Ye,Gu=new L,Wu=new L,Xu=new L,Wa=new L,Xa=new L,Bt=class extends Gt{constructor(e=new Sn,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(el.fromBufferAttribute(u,e),a?ka.addScaledVector(el,h):ka.addScaledVector(el.sub(t),h))}t.add(ka)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(za.containsPoint(hs.origin)===!1&&(hs.intersectSphere(za,Vu)===null||hs.origin.distanceToSquared(Vu)>(e.far-e.near)**2))&&(Hu.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,x=d.length;y<x;y++){let p=d[y],f=a[p.materialIndex],C=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let P=C,U=b;P<U;P+=3){let I=o.getX(P),N=o.getX(P+1),j=o.getX(P+2);s=qa(this,f,e,i,l,h,u,I,N,j),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=y,f=x;p<f;p+=3){let C=o.getX(p),b=o.getX(p+1),P=o.getX(p+2);s=qa(this,a,e,i,l,h,u,C,b,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,x=d.length;y<x;y++){let p=d[y],f=a[p.materialIndex],C=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let P=C,U=b;P<U;P+=3){let I=P,N=P+1,j=P+2;s=qa(this,f,e,i,l,h,u,I,N,j),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=y,f=x;p<f;p+=3){let C=p,b=p+1,P=p+2;s=qa(this,a,e,i,l,h,u,C,b,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ag(n,e,t,i,s,r,a,o){let c;if(e.side===un?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===On,o),c===null)return null;Xa.copy(o),Xa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Xa);return l<t.near||l>t.far?null:{distance:l,point:Xa.clone(),object:n}}function qa(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Ws),n.getVertexPosition(c,Xs),n.getVertexPosition(l,qs);let h=ag(n,e,t,i,Ws,Xs,qs,Wa);if(h){s&&(Ha.fromBufferAttribute(s,o),Va.fromBufferAttribute(s,c),Ga.fromBufferAttribute(s,l),h.uv=ms.getInterpolation(Wa,Ws,Xs,qs,Ha,Va,Ga,new Ye)),r&&(Ha.fromBufferAttribute(r,o),Va.fromBufferAttribute(r,c),Ga.fromBufferAttribute(r,l),h.uv1=ms.getInterpolation(Wa,Ws,Xs,qs,Ha,Va,Ga,new Ye),h.uv2=h.uv1),a&&(Gu.fromBufferAttribute(a,o),Wu.fromBufferAttribute(a,c),Xu.fromBufferAttribute(a,l),h.normal=ms.getInterpolation(Wa,Ws,Xs,qs,Gu,Wu,Xu,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};ms.getNormal(Ws,Xs,qs,u.normal),h.face=u}return h}var Jr=class n extends Sn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;y("z","y","x",-1,-1,i,t,e,a,r,0),y("z","y","x",1,-1,i,t,-e,a,r,1),y("x","z","y",1,1,e,i,t,s,a,2),y("x","z","y",1,-1,e,i,-t,s,a,3),y("x","y","z",1,-1,e,t,i,s,r,4),y("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function y(x,p,f,C,b,P,U,I,N,j,E){let R=P/N,Z=U/j,ae=P/2,le=U/2,O=I/2,q=N+1,F=j+1,K=0,J=0,Y=new L;for(let se=0;se<F;se++){let te=se*Z-le;for(let de=0;de<q;de++){let B=de*R-ae;Y[x]=B*C,Y[p]=te*b,Y[f]=O,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[f]=I>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(de/N),u.push(1-se/j),K+=1}}for(let se=0;se<j;se++)for(let te=0;te<N;te++){let de=d+te+q*se,B=d+te+q*(se+1),V=d+(te+1)+q*(se+1),ee=d+(te+1)+q*se;c.push(de,B,ee),c.push(B,V,ee),J+=6}o.addGroup(m,J,E),m+=J,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=hr(n[t]);for(let s in i)e[s]=i[s]}return e}function og(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qd(n){return n.getRenderTarget()===null?n.outputColorSpace:Tt.workingColorSpace}var Xo={clone:hr,merge:gn},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},yo=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends yo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,$s=1,Sl=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Ys,$s,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Ys,$s,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Ys,$s,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Ys,$s,e,t);o.layers=this.layers,this.add(o);let c=new Vt(Ys,$s,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Ys,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},xo=class extends Mn{constructor(e,t,i,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wl=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ys?Ft:Un),this.texture=new xo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Xi});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=_n),new Sl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},tl=new L,hg=new L,ug=new ct,Ei=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=tl.subVectors(i,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ug.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new Fn,Ya=new L,jr=class{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],y=s[9],x=s[10],p=s[11],f=s[12],C=s[13],b=s[14],P=s[15];if(i[0].setComponents(c-r,d-l,p-m,P-f).normalize(),i[1].setComponents(c+r,d+l,p+m,P+f).normalize(),i[2].setComponents(c+a,d+h,p+y,P+C).normalize(),i[3].setComponents(c-a,d-h,p-y,P-C).normalize(),i[4].setComponents(c-o,d-u,p-x,P-b).normalize(),t===Ai)i[5].setComponents(c+o,d+u,p+x,P+b).normalize();else if(t===lo)i[5].setComponents(o,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,y=n.createBuffer();n.bindBuffer(h,y),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,y=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&y.length===0&&n.bufferSubData(u,0,d),y.length!==0){for(let x=0,p=y.length;x<p;x++){let f=y[x];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var xs=class n extends Sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],y=[],x=[],p=[];for(let f=0;f<h;f++){let C=f*d-a;for(let b=0;b<l;b++){let P=b*u-r;y.push(P,-C,0),x.push(0,0,1),p.push(b/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let C=0;C<o;C++){let b=C+l*f,P=C+l*(f+1),U=C+1+l*(f+1),I=C+1+l*f;m.push(b,P,I),m.push(P,U,I)}this.setIndex(m),this.setAttribute("position",new Rt(y,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
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
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
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
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ag=`#ifdef USE_BUMPMAP
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bg=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`
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
}`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,t0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,d0=`struct PhysicalMaterial {
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
}`,f0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
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
#endif`,C0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
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
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`#include <common>
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
}`,x_=`#if DEPTH_PACKING == 3200
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
}`,v_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
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
}`,E_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,L_=`#define MATCAP
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
}`,I_=`#define NORMAL
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
}`,N_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,U_=`#define PHONG
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
}`,O_=`#define STANDARD
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
}`,F_=`#define STANDARD
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
}`,B_=`#define TOON
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
}`,z_=`#define TOON
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
}`,k_=`uniform float size;
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
}`,H_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,G_=`uniform vec3 color;
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
}`,W_=`uniform float rotation;
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
}`,X_=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:_g,alphatest_pars_fragment:yg,aomap_fragment:xg,aomap_pars_fragment:vg,batching_pars_vertex:bg,batching_vertex:Mg,begin_vertex:Sg,beginnormal_vertex:wg,bsdfs:Eg,iridescence_fragment:Tg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Lg,color_fragment:Ig,color_pars_fragment:Ng,color_pars_vertex:Dg,color_vertex:Ug,common:Og,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:Bg,displacementmap_pars_vertex:zg,displacementmap_vertex:kg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Vg,colorspace_fragment:Gg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:a0,envmap_vertex:Zg,fog_vertex:Jg,fog_pars_vertex:jg,fog_fragment:Kg,fog_pars_fragment:Qg,gradientmap_pars_fragment:e0,lightmap_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:c0,lights_phong_fragment:l0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:x0,map_fragment:v0,map_pars_fragment:b0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:E0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:C0,morphtarget_vertex:R0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:I0,normal_pars_vertex:N0,normal_vertex:D0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:z0,opaque_fragment:k0,packing:H0,premultiplied_alpha_fragment:V0,project_vertex:G0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:j0,skinbase_vertex:K0,skinning_pars_vertex:Q0,skinning_vertex:e_,skinnormal_vertex:t_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:a_,transmission_pars_fragment:o_,uv_pars_fragment:c_,uv_pars_vertex:l_,uv_vertex:h_,worldpos_vertex:u_,background_vert:d_,background_frag:f_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:__,depth_vert:y_,depth_frag:x_,distanceRGBA_vert:v_,distanceRGBA_frag:b_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:w_,linedashed_frag:E_,meshbasic_vert:T_,meshbasic_frag:A_,meshlambert_vert:C_,meshlambert_frag:R_,meshmatcap_vert:P_,meshmatcap_frag:L_,meshnormal_vert:I_,meshnormal_frag:N_,meshphong_vert:D_,meshphong_frag:U_,meshphysical_vert:O_,meshphysical_frag:F_,meshtoon_vert:B_,meshtoon_frag:z_,points_vert:k_,points_frag:H_,shadow_vert:V_,shadow_frag:G_,sprite_vert:W_,sprite_frag:X_},me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},yn={basic:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:gn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:gn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:gn([me.points,me.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:gn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:gn([me.common,me.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:gn([me.sprite,me.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:gn([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:gn([me.lights,me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};yn.physical={uniforms:gn([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var $a={r:0,b:0,g:0};function q_(n,e,t,i,s,r,a){let o=new et(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function y(p,f){let C=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?x(o,c):b&&b.isColor&&(x(b,1),C=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Go)?(h===void 0&&(h=new Bt(new Jr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:hr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(b.colorSpace)!==It,(u!==b||d!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Bt(new xs(2,2),new Yn({name:"BackgroundMaterial",uniforms:hr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Tt.getTransfer(b.colorSpace)!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,f){p.getRGB($a,qd(n)),i.buffers.color.setClear($a.r,$a.g,$a.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:y}}function Y_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(O,q,F,K,J){let Y=!1;if(a){let se=x(K,F,q);l!==se&&(l=se,m(l.object)),Y=f(O,K,F,J),Y&&C(O,K,F,J)}else{let se=q.wireframe===!0;(l.geometry!==K.id||l.program!==F.id||l.wireframe!==se)&&(l.geometry=K.id,l.program=F.id,l.wireframe=se,Y=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,j(O,q,F,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function y(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function x(O,q,F){let K=F.wireframe===!0,J=o[O.id];J===void 0&&(J={},o[O.id]=J);let Y=J[q.id];Y===void 0&&(Y={},J[q.id]=Y);let se=Y[K];return se===void 0&&(se=p(d()),Y[K]=se),se}function p(O){let q=[],F=[],K=[];for(let J=0;J<s;J++)q[J]=0,F[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:F,attributeDivisors:K,object:O,attributes:{},index:null}}function f(O,q,F,K){let J=l.attributes,Y=q.attributes,se=0,te=F.getAttributes();for(let de in te)if(te[de].location>=0){let V=J[de],ee=Y[de];if(ee===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),V===void 0||V.attribute!==ee||ee&&V.data!==ee.data)return!0;se++}return l.attributesNum!==se||l.index!==K}function C(O,q,F,K){let J={},Y=q.attributes,se=0,te=F.getAttributes();for(let de in te)if(te[de].location>=0){let V=Y[de];V===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(V=O.instanceColor));let ee={};ee.attribute=V,V&&V.data&&(ee.data=V.data),J[de]=ee,se++}l.attributes=J,l.attributesNum=se,l.index=K}function b(){let O=l.newAttributes;for(let q=0,F=O.length;q<F;q++)O[q]=0}function P(O){U(O,0)}function U(O,q){let F=l.newAttributes,K=l.enabledAttributes,J=l.attributeDivisors;F[O]=1,K[O]===0&&(n.enableVertexAttribArray(O),K[O]=1),J[O]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),J[O]=q)}function I(){let O=l.newAttributes,q=l.enabledAttributes;for(let F=0,K=q.length;F<K;F++)q[F]!==O[F]&&(n.disableVertexAttribArray(F),q[F]=0)}function N(O,q,F,K,J,Y,se){se===!0?n.vertexAttribIPointer(O,q,F,J,Y):n.vertexAttribPointer(O,q,F,K,J,Y)}function j(O,q,F,K){if(i.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let J=K.attributes,Y=F.getAttributes(),se=q.defaultAttributeValues;for(let te in Y){let de=Y[te];if(de.location>=0){let B=J[te];if(B===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(B=O.instanceColor)),B!==void 0){let V=B.normalized,ee=B.itemSize,ne=t.get(B);if(ne===void 0)continue;let re=ne.buffer,Ee=ne.type,Oe=ne.bytesPerElement,Fe=i.isWebGL2===!0&&(Ee===n.INT||Ee===n.UNSIGNED_INT||B.gpuType===Ud);if(B.isInterleavedBufferAttribute){let dt=B.data,k=dt.stride,jt=B.offset;if(dt.isInstancedInterleavedBuffer){for(let ke=0;ke<de.locationSize;ke++)U(de.location+ke,dt.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ke=0;ke<de.locationSize;ke++)P(de.location+ke);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ke=0;ke<de.locationSize;ke++)N(de.location+ke,ee/de.locationSize,Ee,V,k*Oe,(jt+ee/de.locationSize*ke)*Oe,Fe)}else{if(B.isInstancedBufferAttribute){for(let dt=0;dt<de.locationSize;dt++)U(de.location+dt,B.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let dt=0;dt<de.locationSize;dt++)P(de.location+dt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let dt=0;dt<de.locationSize;dt++)N(de.location+dt,ee/de.locationSize,Ee,V,ee*Oe,ee/de.locationSize*dt*Oe,Fe)}}else if(se!==void 0){let V=se[te];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(de.location,V);break;case 3:n.vertexAttrib3fv(de.location,V);break;case 4:n.vertexAttrib4fv(de.location,V);break;default:n.vertexAttrib1fv(de.location,V)}}}}I()}function E(){ae();for(let O in o){let q=o[O];for(let F in q){let K=q[F];for(let J in K)y(K[J].object),delete K[J];delete q[F]}delete o[O]}}function R(O){if(o[O.id]===void 0)return;let q=o[O.id];for(let F in q){let K=q[F];for(let J in K)y(K[J].object),delete K[J];delete q[F]}delete o[O.id]}function Z(O){for(let q in o){let F=o[q];if(F[O.id]===void 0)continue;let K=F[O.id];for(let J in K)y(K[J].object),delete K[J];delete F[O.id]}}function ae(){le(),h=!0,l!==c&&(l=c,m(l.object))}function le(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:ae,resetDefaultState:le,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:b,enableAttribute:P,disableUnusedAttributes:I}}function $_(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,y;if(s)m=n,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<d;y++)this.render(h[y],u[y]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let y=0;for(let x=0;x<d;x++)y+=u[x];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Z_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,P=a||e.has("OES_texture_float"),U=b&&P,I=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:b,floatFragmentTextures:P,floatVertexTextures:U,maxSamples:I}}function J_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Ei,o=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let y=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||y===null||y.length===0||r&&!p)r?h(null):l();else{let C=r?0:i,b=C*4,P=f.clippingState||null;c.value=P,P=h(y,d,b,m);for(let U=0;U!==b;++U)P[U]=t[U];f.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,y){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,y!==!0||p===null){let f=m+x*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,P=m;b!==x;++b,P+=4)a.copy(u[b]).applyMatrix4(C,o),a.normal.toArray(p,P),p[P+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function j_(n){let e=new WeakMap;function t(a,o){return o===ml?a.mapping=rr:o===gl&&(a.mapping=ar),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ml||o===gl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new wl(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ur=class extends yo{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,qu=[.125,.215,.35,.446,.526,.582],ps=20,nl=new ur,Yu=new et,il=null,sl=0,rl=0,ds=(1+Math.sqrt(5))/2,Zs=1/ds,$u=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ds,Zs),new L(0,ds,-Zs),new L(Zs,0,ds),new L(-Zs,0,ds),new L(ds,Zs,0),new L(-ds,Zs,0)],vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,sl,rl),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Yr,format:Dn,colorSpace:Ci,depthBuffer:!1},s=Zu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K_(r)),this._blurMaterial=Q_(r,e,t)}return s}_compileMaterial(e){let t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,s){let o=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yu),h.toneMapping=qi,h.autoClear=!1;let m=new dn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),y=new Bt(new Jr,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Yu),x=!0);for(let f=0;f<6;f++){let C=f%3;C===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):C===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let b=this._cubeSize;Za(s,C*b,f>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===rr||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Za(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,nl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$u[(s-1)%$u.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ps-1),x=r/y,p=isFinite(r)?1+Math.floor(h*x):ps;p>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ps}`);let f=[],C=0;for(let N=0;N<ps;++N){let j=N/x,E=Math.exp(-j*j/2);f.push(E),N===0?C+=E:N<p&&(C+=2*E)}for(let N=0;N<f.length;N++)f[N]=f[N]/C;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=y,d.mipInt.value=b-i;let P=this._sizeLods[s],U=3*P*(s>b-er?s-b+er:0),I=4*(this._cubeSize-P);Za(t,U,I,3*P,2*P),c.setRenderTarget(t),c.render(u,nl)}};function K_(n){let e=[],t=[],i=[],s=n,r=n-er+1+qu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-er?c=qu[a-n+er-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,y=6,x=3,p=2,f=1,C=new Float32Array(x*y*m),b=new Float32Array(p*y*m),P=new Float32Array(f*y*m);for(let I=0;I<m;I++){let N=I%3*2/3-1,j=I>2?0:-1,E=[N,j,0,N+2/3,j,0,N+2/3,j+1,0,N,j,0,N+2/3,j+1,0,N,j+1,0];C.set(E,x*y*I),b.set(d,p*y*I);let R=[I,I,I,I,I,I];P.set(R,f*y*I)}let U=new Sn;U.setAttribute("position",new Cn(C,x)),U.setAttribute("uv",new Cn(b,p)),U.setAttribute("faceIndex",new Cn(P,f)),e.push(U),s>er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zu(n,e,t){let i=new Ri(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Q_(n,e,t){let i=new Float32Array(ps),s=new L(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ju(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ju(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function ey(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===ml||c===gl,h=c===rr||c===ar;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new vo(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new vo(n));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ty(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ny(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let x=d.morphAttributes[y];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let y in d)e.update(d[y],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let y in m){let x=m[y];for(let p=0,f=x.length;p<f;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,y=u.attributes.position,x=0;if(m!==null){let C=m.array;x=m.version;for(let b=0,P=C.length;b<P;b+=3){let U=C[b+0],I=C[b+1],N=C[b+2];d.push(U,I,I,N,N,U)}}else if(y!==void 0){let C=y.array;x=y.version;for(let b=0,P=C.length/3-1;b<P;b+=3){let U=b+0,I=b+1,N=b+2;d.push(U,I,I,N,N,U)}}else return;let p=new(Wd(d)?_o:go)(d,1);p.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function iy(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,y){n.drawElements(r,y,o,m*c),t.update(y,r,1)}function u(m,y,x){if(x===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,y,o,m*c,x),t.update(y,r,x)}function d(m,y,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/c,y[f]);else{p.multiDrawElementsWEBGL(r,y,0,o,m,0,x);let f=0;for(let C=0;C<x;C++)f+=y[C];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function sy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ry(n,e){return n[0]-e[0]}function ay(n,e){return Math.abs(e[1])-Math.abs(n[1])}function oy(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new gt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==y){let O=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();let C=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],j=0;C===!0&&(j=1),b===!0&&(j=2),P===!0&&(j=3);let E=h.attributes.position.count*j,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let Z=new Float32Array(E*R*4*y),ae=new po(Z,E,R,y);ae.type=Ti,ae.needsUpdate=!0;let le=j*4;for(let q=0;q<y;q++){let F=U[q],K=I[q],J=N[q],Y=E*R*4*q;for(let se=0;se<F.count;se++){let te=se*le;C===!0&&(a.fromBufferAttribute(F,se),Z[Y+te+0]=a.x,Z[Y+te+1]=a.y,Z[Y+te+2]=a.z,Z[Y+te+3]=0),b===!0&&(a.fromBufferAttribute(K,se),Z[Y+te+4]=a.x,Z[Y+te+5]=a.y,Z[Y+te+6]=a.z,Z[Y+te+7]=0),P===!0&&(a.fromBufferAttribute(J,se),Z[Y+te+8]=a.x,Z[Y+te+9]=a.y,Z[Y+te+10]=a.z,Z[Y+te+11]=J.itemSize===4?a.w:1)}}x={count:y,texture:ae,size:new Ye(E,R)},r.set(h,x),h.addEventListener("dispose",O)}let p=0;for(let C=0;C<d.length;C++)p+=d[C];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,y=i[h.id];if(y===void 0||y.length!==m){y=[];for(let b=0;b<m;b++)y[b]=[b,0];i[h.id]=y}for(let b=0;b<m;b++){let P=y[b];P[0]=b,P[1]=d[b]}y.sort(ay);for(let b=0;b<8;b++)b<m&&y[b][1]?(o[b][0]=y[b][0],o[b][1]=y[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(ry);let x=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let P=o[b],U=P[0],I=P[1];U!==Number.MAX_SAFE_INTEGER&&I?(x&&h.getAttribute("morphTarget"+b)!==x[U]&&h.setAttribute("morphTarget"+b,x[U]),p&&h.getAttribute("morphNormal"+b)!==p[U]&&h.setAttribute("morphNormal"+b,p[U]),s[b]=I,f+=I):(x&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),p&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let C=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",C),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function cy(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var bo=class extends Mn{constructor(e,t,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:_s,h!==_s&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=Wi),i===void 0&&h===or&&(i=gs),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$d=new Mn,Zd=new bo(1,1);Zd.compareFunction=Gd;var Jd=new po,jd=new Ml,Kd=new xo,Ku=[],Qu=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function _r(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=Qu[e];t===void 0&&(t=new Int32Array(e),Qu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ly(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function fy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),Xt(t,i)}}function py(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;td.set(i),n.uniformMatrix3fv(this.addr,!1,td),Xt(t,i)}}function my(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;ed.set(i),n.uniformMatrix4fv(this.addr,!1,ed),Xt(t,i)}}function gy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function vy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function by(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function wy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Zd:$d;t.setTexture2D(e||r,s)}function Ey(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jd,s)}function Ty(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Kd,s)}function Ay(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jd,s)}function Cy(n){switch(n){case 5126:return ly;case 35664:return hy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return yy;case 35669:case 35673:return xy;case 5125:return vy;case 36294:return by;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}function Ry(n,e){n.uniform1fv(this.addr,e)}function Py(n,e){let t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function Ly(n,e){let t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function Iy(n,e){let t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function Ny(n,e){let t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dy(n,e){let t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uy(n,e){let t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Oy(n,e){n.uniform1iv(this.addr,e)}function Fy(n,e){n.uniform2iv(this.addr,e)}function By(n,e){n.uniform3iv(this.addr,e)}function zy(n,e){n.uniform4iv(this.addr,e)}function ky(n,e){n.uniform1uiv(this.addr,e)}function Hy(n,e){n.uniform2uiv(this.addr,e)}function Vy(n,e){n.uniform3uiv(this.addr,e)}function Gy(n,e){n.uniform4uiv(this.addr,e)}function Wy(n,e,t){let i=this.cache,s=e.length,r=qo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||$d,r[a])}function Xy(n,e,t){let i=this.cache,s=e.length,r=qo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jd,r[a])}function qy(n,e,t){let i=this.cache,s=e.length,r=qo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kd,r[a])}function Yy(n,e,t){let i=this.cache,s=e.length,r=qo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jd,r[a])}function $y(n){switch(n){case 5126:return Ry;case 35664:return Py;case 35665:return Ly;case 35666:return Iy;case 35674:return Ny;case 35675:return Dy;case 35676:return Uy;case 5124:case 35670:return Oy;case 35667:case 35671:return Fy;case 35668:case 35672:return By;case 35669:case 35673:return zy;case 5125:return ky;case 36294:return Hy;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}var El=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cy(t.type)}},Tl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$y(t.type)}},Al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},al=/(\w+)(\])?(\[|\.)?/g;function id(n,e){n.seq.push(e),n.map[e.id]=e}function Zy(n,e,t){let i=n.name,s=i.length;for(al.lastIndex=0;;){let r=al.exec(i),a=al.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){id(t,l===void 0?new El(o,n,e):new Tl(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Al(o),id(t,u)),t=u}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Zy(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function sd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Jy=37297,jy=0;function Ky(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Qy(n){let e=Tt.getPrimaries(Tt.workingColorSpace),t=Tt.getPrimaries(n),i;switch(e===t?i="":e===co&&t===oo?i="LinearDisplayP3ToLinearSRGB":e===oo&&t===co&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case Wo:return[i,"LinearTransferOETF"];case Ft:case Jl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ky(n.getShaderSource(e),a)}else return s}function ex(n,e){let t=Qy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tx(n,e){let t;switch(e){case rm:t="Linear";break;case am:t="Reinhard";break;case om:t="OptimizedCineon";break;case cm:t="ACESFilmic";break;case hm:t="AgX";break;case lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function ix(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(tr).join(`
`)}function sx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function tr(n){return n!==""}function ad(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(n){return n.replace(ax,cx)}var ox=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cx(n,e){let t=at[e];if(t===void 0){let i=ox.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}var lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(n){return n.replace(lx,hx)}function hx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ux(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Np?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case ar:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function px(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vo:e="ENVMAP_BLENDING_MULTIPLY";break;case im:e="ENVMAP_BLENDING_MIX";break;case sm:e="ENVMAP_BLENDING_ADD";break}return e}function mx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=ux(t),l=dx(t),h=fx(t),u=px(t),d=mx(t),m=t.isWebGL2?"":nx(t),y=ix(t),x=sx(r),p=s.createProgram(),f,C,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),f.length>0&&(f+=`
`),C=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),C.length>0&&(C+=`
`)):(f=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),C=[m,ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?at.tonemapping_pars_fragment:"",t.toneMapping!==qi?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=Cl(a),a=ad(a,t),a=od(a,t),o=Cl(o),o=ad(o,t),o=od(o,t),a=cd(a),o=cd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let P=b+f+a,U=b+C+o,I=sd(s,s.VERTEX_SHADER,P),N=sd(s,s.FRAGMENT_SHADER,U);s.attachShader(p,I),s.attachShader(p,N),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function j(ae){if(n.debug.checkShaderErrors){let le=s.getProgramInfoLog(p).trim(),O=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(N).trim(),F=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,I,N);else{let J=rd(s,I,"vertex"),Y=rd(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+J+`
`+Y)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(O===""||q==="")&&(K=!1);K&&(ae.diagnostics={runnable:F,programLog:le,vertexShader:{log:O,prefix:f},fragmentShader:{log:q,prefix:C}})}s.deleteShader(I),s.deleteShader(N),E=new sr(s,p),R=rx(s,p)}let E;this.getUniforms=function(){return E===void 0&&j(this),E};let R;this.getAttributes=function(){return R===void 0&&j(this),R};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(p,Jy)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=I,this.fragmentShader=N,this}var _x=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pl(e),t.set(e,i)),i}},Pl=class{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}};function yx(n,e,t,i,s,r,a){let o=new Zr,c=new Rl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,R,Z,ae,le){let O=ae.fog,q=le.geometry,F=E.isMeshStandardMaterial?ae.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),J=K&&K.mapping===Go?K.image.height:null,Y=y[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=se!==void 0?se.length:0,de=0;q.morphAttributes.position!==void 0&&(de=1),q.morphAttributes.normal!==void 0&&(de=2),q.morphAttributes.color!==void 0&&(de=3);let B,V,ee,ne;if(Y){let qt=yn[Y];B=qt.vertexShader,V=qt.fragmentShader}else B=E.vertexShader,V=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),ne=c.getFragmentShaderID(E);let re=n.getRenderTarget(),Ee=le.isInstancedMesh===!0,Oe=le.isBatchedMesh===!0,Fe=!!E.map,dt=!!E.matcap,k=!!K,jt=!!E.aoMap,ke=!!E.lightMap,Ze=!!E.bumpMap,Pe=!!E.normalMap,At=!!E.displacementMap,nt=!!E.emissiveMap,A=!!E.metalnessMap,S=!!E.roughnessMap,G=E.anisotropy>0,fe=E.clearcoat>0,he=E.iridescence>0,pe=E.sheen>0,Ne=E.transmission>0,be=G&&!!E.anisotropyMap,Ae=fe&&!!E.clearcoatMap,Ve=fe&&!!E.clearcoatNormalMap,it=fe&&!!E.clearcoatRoughnessMap,ue=he&&!!E.iridescenceMap,xt=he&&!!E.iridescenceThicknessMap,ot=pe&&!!E.sheenColorMap,qe=pe&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ce=!!E.specularColorMap,Ke=!!E.specularIntensityMap,_t=Ne&&!!E.transmissionMap,Pt=Ne&&!!E.thicknessMap,rt=!!E.gradientMap,ge=!!E.alphaMap,D=E.alphaTest>0,xe=!!E.alphaHash,ve=!!E.extensions,Xe=!!q.attributes.uv1,He=!!q.attributes.uv2,bt=!!q.attributes.uv3,St=qi;return E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(St=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:V,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ne,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Oe,instancing:Ee,instancingColor:Ee&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ci,map:Fe,matcap:dt,envMap:k,envMapMode:k&&K.mapping,envMapCubeUVHeight:J,aoMap:jt,lightMap:ke,bumpMap:Ze,normalMap:Pe,displacementMap:d&&At,emissiveMap:nt,normalMapObjectSpace:Pe&&E.normalMapType===wm,normalMapTangentSpace:Pe&&E.normalMapType===Zl,metalnessMap:A,roughnessMap:S,anisotropy:G,anisotropyMap:be,clearcoat:fe,clearcoatMap:Ae,clearcoatNormalMap:Ve,clearcoatRoughnessMap:it,iridescence:he,iridescenceMap:ue,iridescenceThicknessMap:xt,sheen:pe,sheenColorMap:ot,sheenRoughnessMap:qe,specularMap:Be,specularColorMap:Ce,specularIntensityMap:Ke,transmission:Ne,transmissionMap:_t,thicknessMap:Pt,gradientMap:rt,opaque:E.transparent===!1&&E.blending===nr,alphaMap:ge,alphaTest:D,alphaHash:xe,combine:E.combine,mapUv:Fe&&x(E.map.channel),aoMapUv:jt&&x(E.aoMap.channel),lightMapUv:ke&&x(E.lightMap.channel),bumpMapUv:Ze&&x(E.bumpMap.channel),normalMapUv:Pe&&x(E.normalMap.channel),displacementMapUv:At&&x(E.displacementMap.channel),emissiveMapUv:nt&&x(E.emissiveMap.channel),metalnessMapUv:A&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:be&&x(E.anisotropyMap.channel),clearcoatMapUv:Ae&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&x(E.sheenRoughnessMap.channel),specularMapUv:Be&&x(E.specularMap.channel),specularColorMapUv:Ce&&x(E.specularColorMap.channel),specularIntensityMapUv:Ke&&x(E.specularIntensityMap.channel),transmissionMapUv:_t&&x(E.transmissionMap.channel),thicknessMapUv:Pt&&x(E.thicknessMap.channel),alphaMapUv:ge&&x(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Pe||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Xe,vertexUv2s:He,vertexUv3s:bt,pointsUvs:le.isPoints===!0&&!!q.attributes.uv&&(Fe||ge),fog:!!O,useFog:E.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:le.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ve&&E.extensions.derivatives===!0,extensionFragDepth:ve&&E.extensions.fragDepth===!0,extensionDrawBuffers:ve&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let Z in E.defines)R.push(Z),R.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(C(R,E),b(R,E),R.push(n.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function C(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function b(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function P(E){let R=y[E.type],Z;if(R){let ae=yn[R];Z=Xo.clone(ae.uniforms)}else Z=E.uniforms;return Z}function U(E,R){let Z;for(let ae=0,le=l.length;ae<le;ae++){let O=l[ae];if(O.cacheKey===R){Z=O,++Z.usedTimes;break}}return Z===void 0&&(Z=new gx(n,R,E,r),l.push(Z)),Z}function I(E){if(--E.usedTimes===0){let R=l.indexOf(E);l[R]=l[l.length-1],l.pop(),E.destroy()}}function N(E){c.remove(E)}function j(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:P,acquireProgram:U,releaseProgram:I,releaseShaderCache:N,programs:l,dispose:j}}function xx(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ud(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,m,y,x,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:y,renderOrder:u.renderOrder,z:x,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=y,f.renderOrder=u.renderOrder,f.z=x,f.group=p),e++,f}function o(u,d,m,y,x,p){let f=a(u,d,m,y,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,y,x,p){let f=a(u,d,m,y,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||vx),i.length>1&&i.sort(d||hd),s.length>1&&s.sort(d||hd)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function bx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ud,n.set(i,[a])):s>=r.length?(a=new ud,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Mx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new et};break;case"SpotLight":t={position:new L,direction:new L,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Sx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var wx=0;function Ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tx(n,e){let t=new Mx,i=Sx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new tt,o=new tt;function c(h,u){let d=0,m=0,y=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let x=0,p=0,f=0,C=0,b=0,P=0,U=0,I=0,N=0,j=0,E=0;h.sort(Ex);let R=u===!0?Math.PI:1;for(let ae=0,le=h.length;ae<le;ae++){let O=h[ae],q=O.color,F=O.intensity,K=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=q.r*F*R,m+=q.g*F*R,y+=q.b*F*R;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(O.sh.coefficients[Y],F);E++}else if(O.isDirectionalLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*R),O.castShadow){let se=O.shadow,te=i.get(O);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,s.directionalShadow[x]=te,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=O.shadow.matrix,P++}s.directional[x]=Y,x++}else if(O.isSpotLight){let Y=t.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(q).multiplyScalar(F*R),Y.distance=K,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,s.spot[f]=Y;let se=O.shadow;if(O.map&&(s.spotLightMap[N]=O.map,N++,se.updateMatrices(O),O.castShadow&&j++),s.spotLightMatrix[f]=se.matrix,O.castShadow){let te=i.get(O);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,s.spotShadow[f]=te,s.spotShadowMap[f]=J,I++}f++}else if(O.isRectAreaLight){let Y=t.get(O);Y.color.copy(q).multiplyScalar(F),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),s.rectArea[C]=Y,C++}else if(O.isPointLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*R),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){let se=O.shadow,te=i.get(O);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,te.shadowCameraNear=se.camera.near,te.shadowCameraFar=se.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=O.shadow.matrix,U++}s.point[p]=Y,p++}else if(O.isHemisphereLight){let Y=t.get(O);Y.skyColor.copy(O.color).multiplyScalar(F*R),Y.groundColor.copy(O.groundColor).multiplyScalar(F*R),s.hemi[b]=Y,b++}}C>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=y;let Z=s.hash;(Z.directionalLength!==x||Z.pointLength!==p||Z.spotLength!==f||Z.rectAreaLength!==C||Z.hemiLength!==b||Z.numDirectionalShadows!==P||Z.numPointShadows!==U||Z.numSpotShadows!==I||Z.numSpotMaps!==N||Z.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=C,s.point.length=p,s.hemi.length=b,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+N-j,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=E,Z.directionalLength=x,Z.pointLength=p,Z.spotLength=f,Z.rectAreaLength=C,Z.hemiLength=b,Z.numDirectionalShadows=P,Z.numPointShadows=U,Z.numSpotShadows=I,Z.numSpotMaps=N,Z.numLightProbes=E,s.version=wx++)}function l(h,u){let d=0,m=0,y=0,x=0,p=0,f=u.matrixWorldInverse;for(let C=0,b=h.length;C<b;C++){let P=h[C];if(P.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),d++}else if(P.isSpotLight){let U=s.spot[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(f),U.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),y++}else if(P.isRectAreaLight){let U=s.rectArea[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(f),o.identity(),a.copy(P.matrixWorld),a.premultiply(f),o.extractRotation(a),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),x++}else if(P.isPointLight){let U=s.point[m];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(f),m++}else if(P.isHemisphereLight){let U=s.hemi[p];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function dd(n,e){let t=new Tx(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ax(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;return o===void 0?(c=new dd(n,e),t.set(r,[c])):a>=o.length?(c=new dd(n,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ll=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Il=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`;function Px(n,e,t){let i=new jr,s=new Ye,r=new Ye,a=new gt,o=new Ll({depthPacking:Sm}),c=new Il,l={},h=t.maxTextureSize,u={[On]:un,[un]:On,[bn]:bn},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Cx,fragmentShader:Rx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new Sn;y.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bt(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let f=this.type;this.render=function(I,N,j){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let E=n.getRenderTarget(),R=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Xi),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let le=f!==wi&&this.type===wi,O=f===wi&&this.type!==wi;for(let q=0,F=I.length;q<F;q++){let K=I[q],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Y=J.getFrameExtents();if(s.multiply(Y),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,J.mapSize.y=r.y)),J.map===null||le===!0||O===!0){let te=this.type!==wi?{minFilter:Qt,magFilter:Qt}:{};J.map!==null&&J.map.dispose(),J.map=new Ri(s.x,s.y,te),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let se=J.getViewportCount();for(let te=0;te<se;te++){let de=J.getViewport(te);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),ae.viewport(a),J.updateMatrices(K,te),i=J.getFrustum(),P(N,j,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===wi&&C(J,j),J.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(E,R,Z)};function C(I,N){let j=e.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(N,null,j,d,x,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(N,null,j,m,x,null)}function b(I,N,j,E){let R=null,Z=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Z!==void 0)R=Z;else if(R=j.isPointLight===!0?c:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ae=R.uuid,le=N.uuid,O=l[ae];O===void 0&&(O={},l[ae]=O);let q=O[le];q===void 0&&(q=R.clone(),O[le]=q,N.addEventListener("dispose",U)),R=q}if(R.visible=N.visible,R.wireframe=N.wireframe,E===wi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:u[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ae=n.properties.get(R);ae.light=j}return R}function P(I,N,j,E,R){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===wi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);let le=e.update(I),O=I.material;if(Array.isArray(O)){let q=le.groups;for(let F=0,K=q.length;F<K;F++){let J=q[F],Y=O[J.materialIndex];if(Y&&Y.visible){let se=b(I,Y,E,R);I.onBeforeShadow(n,I,N,j,le,se,J),n.renderBufferDirect(j,null,le,se,I,J),I.onAfterShadow(n,I,N,j,le,se,J)}}}else if(O.visible){let q=b(I,O,E,R);I.onBeforeShadow(n,I,N,j,le,q,null),n.renderBufferDirect(j,null,le,q,I,null),I.onAfterShadow(n,I,N,j,le,q,null)}}let ae=I.children;for(let le=0,O=ae.length;le<O;le++)P(ae[le],N,j,E,R)}function U(I){I.target.removeEventListener("dispose",U);for(let j in l){let E=l[j],R=I.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Lx(n,e,t){let i=t.isWebGL2;function s(){let D=!1,xe=new gt,ve=null,Xe=new gt(0,0,0,0);return{setMask:function(He){ve!==He&&!D&&(n.colorMask(He,He,He,He),ve=He)},setLocked:function(He){D=He},setClear:function(He,bt,St,vt,qt){qt===!0&&(He*=vt,bt*=vt,St*=vt),xe.set(He,bt,St,vt),Xe.equals(xe)===!1&&(n.clearColor(He,bt,St,vt),Xe.copy(xe))},reset:function(){D=!1,ve=null,Xe.set(-1,0,0,0)}}}function r(){let D=!1,xe=null,ve=null,Xe=null;return{setTest:function(He){He?Oe(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(He){xe!==He&&!D&&(n.depthMask(He),xe=He)},setFunc:function(He){if(ve!==He){switch(He){case Jp:n.depthFunc(n.NEVER);break;case jp:n.depthFunc(n.ALWAYS);break;case Kp:n.depthFunc(n.LESS);break;case io:n.depthFunc(n.LEQUAL);break;case Qp:n.depthFunc(n.EQUAL);break;case em:n.depthFunc(n.GEQUAL);break;case tm:n.depthFunc(n.GREATER);break;case nm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=He}},setLocked:function(He){D=He},setClear:function(He){Xe!==He&&(n.clearDepth(He),Xe=He)},reset:function(){D=!1,xe=null,ve=null,Xe=null}}}function a(){let D=!1,xe=null,ve=null,Xe=null,He=null,bt=null,St=null,vt=null,qt=null;return{setTest:function(wt){D||(wt?Oe(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(wt){xe!==wt&&!D&&(n.stencilMask(wt),xe=wt)},setFunc:function(wt,Kt,Ln){(ve!==wt||Xe!==Kt||He!==Ln)&&(n.stencilFunc(wt,Kt,Ln),ve=wt,Xe=Kt,He=Ln)},setOp:function(wt,Kt,Ln){(bt!==wt||St!==Kt||vt!==Ln)&&(n.stencilOp(wt,Kt,Ln),bt=wt,St=Kt,vt=Ln)},setLocked:function(wt){D=wt},setClear:function(wt){qt!==wt&&(n.clearStencil(wt),qt=wt)},reset:function(){D=!1,xe=null,ve=null,Xe=null,He=null,bt=null,St=null,vt=null,qt=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},y=new WeakMap,x=[],p=null,f=!1,C=null,b=null,P=null,U=null,I=null,N=null,j=null,E=new et(0,0,0),R=0,Z=!1,ae=null,le=null,O=null,q=null,F=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(se)[1]),J=Y>=1):se.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),J=Y>=2);let te=null,de={},B=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),ee=new gt().fromArray(B),ne=new gt().fromArray(V);function re(D,xe,ve,Xe){let He=new Uint8Array(4),bt=n.createTexture();n.bindTexture(D,bt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let St=0;St<ve;St++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,Xe,0,n.RGBA,n.UNSIGNED_BYTE,He):n.texImage2D(xe+St,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,He);return bt}let Ee={};Ee[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Oe(n.DEPTH_TEST),c.setFunc(io),nt(!1),A(Xh),Oe(n.CULL_FACE),Pe(Xi);function Oe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Fe(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function dt(D,xe){return m[D]!==xe?(n.bindFramebuffer(D,xe),m[D]=xe,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=xe),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function k(D,xe){let ve=x,Xe=!1;if(D)if(ve=y.get(xe),ve===void 0&&(ve=[],y.set(xe,ve)),D.isWebGLMultipleRenderTargets){let He=D.texture;if(ve.length!==He.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,St=He.length;bt<St;bt++)ve[bt]=n.COLOR_ATTACHMENT0+bt;ve.length=He.length,Xe=!0}}else ve[0]!==n.COLOR_ATTACHMENT0&&(ve[0]=n.COLOR_ATTACHMENT0,Xe=!0);else ve[0]!==n.BACK&&(ve[0]=n.BACK,Xe=!0);Xe&&(t.isWebGL2?n.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function jt(D){return p!==D?(n.useProgram(D),p=D,!0):!1}let ke={[fs]:n.FUNC_ADD,[Up]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};if(i)ke[Zh]=n.MIN,ke[Jh]=n.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(ke[Zh]=D.MIN_EXT,ke[Jh]=D.MAX_EXT)}let Ze={[Fp]:n.ZERO,[Bp]:n.ONE,[zp]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[Xp]:n.SRC_ALPHA_SATURATE,[Gp]:n.DST_COLOR,[Hp]:n.DST_ALPHA,[kp]:n.ONE_MINUS_SRC_COLOR,[pl]:n.ONE_MINUS_SRC_ALPHA,[Wp]:n.ONE_MINUS_DST_COLOR,[Vp]:n.ONE_MINUS_DST_ALPHA,[qp]:n.CONSTANT_COLOR,[Yp]:n.ONE_MINUS_CONSTANT_COLOR,[$p]:n.CONSTANT_ALPHA,[Zp]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(D,xe,ve,Xe,He,bt,St,vt,qt,wt){if(D===Xi){f===!0&&(Fe(n.BLEND),f=!1);return}if(f===!1&&(Oe(n.BLEND),f=!0),D!==Dp){if(D!==C||wt!==Z){if((b!==fs||I!==fs)&&(n.blendEquation(n.FUNC_ADD),b=fs,I=fs),wt)switch(D){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qh:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $h:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $h:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}P=null,U=null,N=null,j=null,E.set(0,0,0),R=0,C=D,Z=wt}return}He=He||xe,bt=bt||ve,St=St||Xe,(xe!==b||He!==I)&&(n.blendEquationSeparate(ke[xe],ke[He]),b=xe,I=He),(ve!==P||Xe!==U||bt!==N||St!==j)&&(n.blendFuncSeparate(Ze[ve],Ze[Xe],Ze[bt],Ze[St]),P=ve,U=Xe,N=bt,j=St),(vt.equals(E)===!1||qt!==R)&&(n.blendColor(vt.r,vt.g,vt.b,qt),E.copy(vt),R=qt),C=D,Z=!1}function At(D,xe){D.side===bn?Fe(n.CULL_FACE):Oe(n.CULL_FACE);let ve=D.side===un;xe&&(ve=!ve),nt(ve),D.blending===nr&&D.transparent===!1?Pe(Xi):Pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let Xe=D.stencilWrite;l.setTest(Xe),Xe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(D){ae!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),ae=D)}function A(D){D!==Lp?(Oe(n.CULL_FACE),D!==le&&(D===Xh?n.cullFace(n.BACK):D===Ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),le=D}function S(D){D!==O&&(J&&n.lineWidth(D),O=D)}function G(D,xe,ve){D?(Oe(n.POLYGON_OFFSET_FILL),(q!==xe||F!==ve)&&(n.polygonOffset(xe,ve),q=xe,F=ve)):Fe(n.POLYGON_OFFSET_FILL)}function fe(D){D?Oe(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function he(D){D===void 0&&(D=n.TEXTURE0+K-1),te!==D&&(n.activeTexture(D),te=D)}function pe(D,xe,ve){ve===void 0&&(te===null?ve=n.TEXTURE0+K-1:ve=te);let Xe=de[ve];Xe===void 0&&(Xe={type:void 0,texture:void 0},de[ve]=Xe),(Xe.type!==D||Xe.texture!==xe)&&(te!==ve&&(n.activeTexture(ve),te=ve),n.bindTexture(D,xe||Ee[D]),Xe.type=D,Xe.texture=xe)}function Ne(){let D=de[te];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function be(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(D){ee.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function _t(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Pt(D,xe){let ve=u.get(xe);ve===void 0&&(ve=new WeakMap,u.set(xe,ve));let Xe=ve.get(D);Xe===void 0&&(Xe=n.getUniformBlockIndex(xe,D.name),ve.set(D,Xe))}function rt(D,xe){let Xe=u.get(xe).get(D);h.get(xe)!==Xe&&(n.uniformBlockBinding(xe,Xe,D.__bindingPointIndex),h.set(xe,Xe))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,de={},m={},y=new WeakMap,x=[],p=null,f=!1,C=null,b=null,P=null,U=null,I=null,N=null,j=null,E=new et(0,0,0),R=0,Z=!1,ae=null,le=null,O=null,q=null,F=null,ee.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Oe,disable:Fe,bindFramebuffer:dt,drawBuffers:k,useProgram:jt,setBlending:Pe,setMaterial:At,setFlipSided:nt,setCullFace:A,setLineWidth:S,setPolygonOffset:G,setScissorTest:fe,activeTexture:he,bindTexture:pe,unbindTexture:Ne,compressedTexImage2D:be,compressedTexImage3D:Ae,texImage2D:Be,texImage3D:Ce,updateUBOMapping:Pt,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:qe,texSubImage2D:Ve,texSubImage3D:it,compressedTexSubImage2D:ue,compressedTexSubImage3D:xt,scissor:Ke,viewport:_t,reset:ge}}function Ix(n,e,t,i,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return m?new OffscreenCanvas(A,S):$r("canvas")}function x(A,S,G,fe){let he=1;if((A.width>fe||A.height>fe)&&(he=fe/Math.max(A.width,A.height)),he<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let pe=S?ho:Math.floor,Ne=pe(he*A.width),be=pe(he*A.height);u===void 0&&(u=y(Ne,be));let Ae=G?y(Ne,be):u;return Ae.width=Ne,Ae.height=be,Ae.getContext("2d").drawImage(A,0,0,Ne,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ne+"x"+be+")."),Ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return vl(A.width)&&vl(A.height)}function f(A){return o?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==Qt&&A.minFilter!==_n}function C(A,S){return A.generateMipmaps&&S&&A.minFilter!==Qt&&A.minFilter!==_n}function b(A){n.generateMipmap(A)}function P(A,S,G,fe,he=!1){if(o===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe=S;if(S===n.RED&&(G===n.FLOAT&&(pe=n.R32F),G===n.HALF_FLOAT&&(pe=n.R16F),G===n.UNSIGNED_BYTE&&(pe=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.R8UI),G===n.UNSIGNED_SHORT&&(pe=n.R16UI),G===n.UNSIGNED_INT&&(pe=n.R32UI),G===n.BYTE&&(pe=n.R8I),G===n.SHORT&&(pe=n.R16I),G===n.INT&&(pe=n.R32I)),S===n.RG&&(G===n.FLOAT&&(pe=n.RG32F),G===n.HALF_FLOAT&&(pe=n.RG16F),G===n.UNSIGNED_BYTE&&(pe=n.RG8)),S===n.RGBA){let Ne=he?ao:Tt.getTransfer(fe);G===n.FLOAT&&(pe=n.RGBA32F),G===n.HALF_FLOAT&&(pe=n.RGBA16F),G===n.UNSIGNED_BYTE&&(pe=Ne===It?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function U(A,S,G){return C(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){return A===Qt||A===Kh||A===Ic?n.NEAREST:n.LINEAR}function N(A){let S=A.target;S.removeEventListener("dispose",N),E(S),S.isVideoTexture&&h.delete(S)}function j(A){let S=A.target;S.removeEventListener("dispose",j),Z(S)}function E(A){let S=i.get(A);if(S.__webglInit===void 0)return;let G=A.source,fe=d.get(G);if(fe){let he=fe[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&R(A),Object.keys(fe).length===0&&d.delete(G)}i.remove(A)}function R(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let G=A.source,fe=d.get(G);delete fe[S.__cacheKey],a.memory.textures--}function Z(A){let S=A.texture,G=i.get(A),fe=i.get(S);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(G.__webglFramebuffer[he]))for(let pe=0;pe<G.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer(G.__webglFramebuffer[he][pe]);else n.deleteFramebuffer(G.__webglFramebuffer[he]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[he])}else{if(Array.isArray(G.__webglFramebuffer))for(let he=0;he<G.__webglFramebuffer.length;he++)n.deleteFramebuffer(G.__webglFramebuffer[he]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let he=0;he<G.__webglColorRenderbuffer.length;he++)G.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[he]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let he=0,pe=S.length;he<pe;he++){let Ne=i.get(S[he]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),a.memory.textures--),i.remove(S[he])}i.remove(S),i.remove(A)}let ae=0;function le(){ae=0}function O(){let A=ae;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),ae+=1,A}function q(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function F(A,S){let G=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let fe=A.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,A,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function K(A,S){let G=i.get(A);if(A.version>0&&G.__version!==A.version){ee(G,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function J(A,S){let G=i.get(A);if(A.version>0&&G.__version!==A.version){ee(G,A,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function Y(A,S){let G=i.get(A);if(A.version>0&&G.__version!==A.version){ne(G,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let se={[$i]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},te={[Qt]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[Ic]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[dm]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},de={[Em]:n.NEVER,[Lm]:n.ALWAYS,[Tm]:n.LESS,[Gd]:n.LEQUAL,[Am]:n.EQUAL,[Pm]:n.GEQUAL,[Cm]:n.GREATER,[Rm]:n.NOTEQUAL};function B(A,S,G){if(G?(n.texParameteri(A,n.TEXTURE_WRAP_S,se[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,se[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,se[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,te[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,te[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==ln||S.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,I(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Qt&&S.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Qt||S.minFilter!==Ic&&S.minFilter!==Zi||S.type===Ti&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Yr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function V(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N));let fe=S.source,he=d.get(fe);he===void 0&&(he={},d.set(fe,he));let pe=q(S);if(pe!==A.__cacheKey){he[pe]===void 0&&(he[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),he[pe].usedTimes++;let Ne=he[A.__cacheKey];Ne!==void 0&&(he[A.__cacheKey].usedTimes--,Ne.usedTimes===0&&R(S)),A.__cacheKey=pe,A.__webglTexture=he[pe].texture}return G}function ee(A,S,G){let fe=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=n.TEXTURE_3D);let he=V(A,S),pe=S.source;t.bindTexture(fe,A.__webglTexture,n.TEXTURE0+G);let Ne=i.get(pe);if(pe.version!==Ne.__version||he===!0){t.activeTexture(n.TEXTURE0+G);let be=Tt.getPrimaries(Tt.workingColorSpace),Ae=S.colorSpace===Un?null:Tt.getPrimaries(S.colorSpace),Ve=S.colorSpace===Un||be===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let it=f(S)&&p(S.image)===!1,ue=x(S.image,it,!1,s.maxTextureSize);ue=nt(S,ue);let xt=p(ue)||o,ot=r.convert(S.format,S.colorSpace),qe=r.convert(S.type),Be=P(S.internalFormat,ot,qe,S.colorSpace,S.isVideoTexture);B(fe,S,xt);let Ce,Ke=S.mipmaps,_t=o&&S.isVideoTexture!==!0&&Be!==Hd,Pt=Ne.__version===void 0||he===!0,rt=U(S,ue,xt);if(S.isDepthTexture)Be=n.DEPTH_COMPONENT,o?S.type===Ti?Be=n.DEPTH_COMPONENT32F:S.type===Wi?Be=n.DEPTH_COMPONENT24:S.type===gs?Be=n.DEPTH24_STENCIL8:Be=n.DEPTH_COMPONENT16:S.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===_s&&Be===n.DEPTH_COMPONENT&&S.type!==$l&&S.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Wi,qe=r.convert(S.type)),S.format===or&&Be===n.DEPTH_COMPONENT&&(Be=n.DEPTH_STENCIL,S.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=gs,qe=r.convert(S.type))),Pt&&(_t?t.texStorage2D(n.TEXTURE_2D,1,Be,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Be,ue.width,ue.height,0,ot,qe,null));else if(S.isDataTexture)if(Ke.length>0&&xt){_t&&Pt&&t.texStorage2D(n.TEXTURE_2D,rt,Be,Ke[0].width,Ke[0].height);for(let ge=0,D=Ke.length;ge<D;ge++)Ce=Ke[ge],_t?t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ot,qe,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Be,Ce.width,Ce.height,0,ot,qe,Ce.data);S.generateMipmaps=!1}else _t?(Pt&&t.texStorage2D(n.TEXTURE_2D,rt,Be,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ot,qe,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Be,ue.width,ue.height,0,ot,qe,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){_t&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Be,Ke[0].width,Ke[0].height,ue.depth);for(let ge=0,D=Ke.length;ge<D;ge++)Ce=Ke[ge],S.format!==Dn?ot!==null?_t?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ue.depth,ot,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Be,Ce.width,Ce.height,ue.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ue.depth,ot,qe,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Be,Ce.width,Ce.height,ue.depth,0,ot,qe,Ce.data)}else{_t&&Pt&&t.texStorage2D(n.TEXTURE_2D,rt,Be,Ke[0].width,Ke[0].height);for(let ge=0,D=Ke.length;ge<D;ge++)Ce=Ke[ge],S.format!==Dn?ot!==null?_t?t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ot,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ot,qe,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Be,Ce.width,Ce.height,0,ot,qe,Ce.data)}else if(S.isDataArrayTexture)_t?(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Be,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ot,qe,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ue.width,ue.height,ue.depth,0,ot,qe,ue.data);else if(S.isData3DTexture)_t?(Pt&&t.texStorage3D(n.TEXTURE_3D,rt,Be,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ot,qe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ue.width,ue.height,ue.depth,0,ot,qe,ue.data);else if(S.isFramebufferTexture){if(Pt)if(_t)t.texStorage2D(n.TEXTURE_2D,rt,Be,ue.width,ue.height);else{let ge=ue.width,D=ue.height;for(let xe=0;xe<rt;xe++)t.texImage2D(n.TEXTURE_2D,xe,Be,ge,D,0,ot,qe,null),ge>>=1,D>>=1}}else if(Ke.length>0&&xt){_t&&Pt&&t.texStorage2D(n.TEXTURE_2D,rt,Be,Ke[0].width,Ke[0].height);for(let ge=0,D=Ke.length;ge<D;ge++)Ce=Ke[ge],_t?t.texSubImage2D(n.TEXTURE_2D,ge,0,0,ot,qe,Ce):t.texImage2D(n.TEXTURE_2D,ge,Be,ot,qe,Ce);S.generateMipmaps=!1}else _t?(Pt&&t.texStorage2D(n.TEXTURE_2D,rt,Be,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,qe,ue)):t.texImage2D(n.TEXTURE_2D,0,Be,ot,qe,ue);C(S,xt)&&b(fe),Ne.__version=pe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ne(A,S,G){if(S.image.length!==6)return;let fe=V(A,S),he=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);let pe=i.get(he);if(he.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+G);let Ne=Tt.getPrimaries(Tt.workingColorSpace),be=S.colorSpace===Un?null:Tt.getPrimaries(S.colorSpace),Ae=S.colorSpace===Un||Ne===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let ge=0;ge<6;ge++)!Ve&&!it?ue[ge]=x(S.image[ge],!1,!0,s.maxCubemapSize):ue[ge]=it?S.image[ge].image:S.image[ge],ue[ge]=nt(S,ue[ge]);let xt=ue[0],ot=p(xt)||o,qe=r.convert(S.format,S.colorSpace),Be=r.convert(S.type),Ce=P(S.internalFormat,qe,Be,S.colorSpace),Ke=o&&S.isVideoTexture!==!0,_t=pe.__version===void 0||fe===!0,Pt=U(S,xt,ot);B(n.TEXTURE_CUBE_MAP,S,ot);let rt;if(Ve){Ke&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Ce,xt.width,xt.height);for(let ge=0;ge<6;ge++){rt=ue[ge].mipmaps;for(let D=0;D<rt.length;D++){let xe=rt[D];S.format!==Dn?qe!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,0,0,xe.width,xe.height,qe,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,0,0,xe.width,xe.height,qe,Be,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,Ce,xe.width,xe.height,0,qe,Be,xe.data)}}}else{rt=S.mipmaps,Ke&&_t&&(rt.length>0&&Pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Ce,ue[0].width,ue[0].height));for(let ge=0;ge<6;ge++)if(it){Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue[ge].width,ue[ge].height,qe,Be,ue[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,ue[ge].width,ue[ge].height,0,qe,Be,ue[ge].data);for(let D=0;D<rt.length;D++){let ve=rt[D].image[ge].image;Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,0,0,ve.width,ve.height,qe,Be,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,Ce,ve.width,ve.height,0,qe,Be,ve.data)}}else{Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,qe,Be,ue[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,qe,Be,ue[ge]);for(let D=0;D<rt.length;D++){let xe=rt[D];Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,0,0,qe,Be,xe.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,Ce,qe,Be,xe.image[ge])}}}C(S,ot)&&b(n.TEXTURE_CUBE_MAP),pe.__version=he.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function re(A,S,G,fe,he,pe){let Ne=r.convert(G.format,G.colorSpace),be=r.convert(G.type),Ae=P(G.internalFormat,Ne,be,G.colorSpace);if(!i.get(S).__hasExternalTextures){let it=Math.max(1,S.width>>pe),ue=Math.max(1,S.height>>pe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,Ae,it,ue,S.depth,0,Ne,be,null):t.texImage2D(he,pe,Ae,it,ue,0,Ne,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Pe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,he,i.get(G).__webglTexture,0,Ze(S)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,he,i.get(G).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(A,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let fe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||Pe(S)){let he=S.depthTexture;he&&he.isDepthTexture&&(he.type===Ti?fe=n.DEPTH_COMPONENT32F:he.type===Wi&&(fe=n.DEPTH_COMPONENT24));let pe=Ze(S);Pe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let fe=Ze(S);G&&Pe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,S.width,S.height):Pe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let fe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let he=0;he<fe.length;he++){let pe=fe[he],Ne=r.convert(pe.format,pe.colorSpace),be=r.convert(pe.type),Ae=P(pe.internalFormat,Ne,be,pe.colorSpace),Ve=Ze(S);G&&Pe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ae,S.width,S.height):Pe(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);let fe=i.get(S.depthTexture).__webglTexture,he=Ze(S);if(S.depthTexture.format===_s)Pe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(S.depthTexture.format===or)Pe(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Fe(A){let S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Oe(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]=n.createRenderbuffer(),Ee(S.__webglDepthbuffer[fe],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ee(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(A,S,G){let fe=i.get(A);S!==void 0&&re(fe.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Fe(A)}function k(A){let S=A.texture,G=i.get(A),fe=i.get(S);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=S.version,a.memory.textures++);let he=A.isWebGLCubeRenderTarget===!0,pe=A.isWebGLMultipleRenderTargets===!0,Ne=p(A)||o;if(he){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)G.__webglFramebuffer[be][Ae]=n.createFramebuffer()}else G.__webglFramebuffer[be]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)G.__webglFramebuffer[be]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let be=A.texture;for(let Ae=0,Ve=be.length;Ae<Ve;Ae++){let it=i.get(be[Ae]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Pe(A)===!1){let be=pe?S:[S];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<be.length;Ae++){let Ve=be[Ae];G.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);let it=r.convert(Ve.format,Ve.colorSpace),ue=r.convert(Ve.type),xt=P(Ve.internalFormat,it,ue,Ve.colorSpace,A.isXRRenderTarget===!0),ot=Ze(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,xt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),B(n.TEXTURE_CUBE_MAP,S,Ne);for(let be=0;be<6;be++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)re(G.__webglFramebuffer[be][Ae],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ae);else re(G.__webglFramebuffer[be],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);C(S,Ne)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let be=A.texture;for(let Ae=0,Ve=be.length;Ae<Ve;Ae++){let it=be[Ae],ue=i.get(it);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),B(n.TEXTURE_2D,it,Ne),re(G.__webglFramebuffer,A,it,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),C(it,Ne)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?be=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,fe.__webglTexture),B(be,S,Ne),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)re(G.__webglFramebuffer[Ae],A,S,n.COLOR_ATTACHMENT0,be,Ae);else re(G.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,be,0);C(S,Ne)&&b(be),t.unbindTexture()}A.depthBuffer&&Fe(A)}function jt(A){let S=p(A)||o,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let fe=0,he=G.length;fe<he;fe++){let pe=G[fe];if(C(pe,S)){let Ne=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(pe).__webglTexture;t.bindTexture(Ne,be),b(Ne),t.unbindTexture()}}}function ke(A){if(o&&A.samples>0&&Pe(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,fe=A.height,he=n.COLOR_BUFFER_BIT,pe=[],Ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(A),Ae=A.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Ve=0;Ve<S.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ve=0;Ve<S.length;Ve++){pe.push(n.COLOR_ATTACHMENT0+Ve),A.depthBuffer&&pe.push(Ne);let it=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(it===!1&&(A.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ve]),it===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),Ae){let ue=i.get(S[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,G,fe,0,0,G,fe,he,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ve=0;Ve<S.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ve]);let it=i.get(S[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Ze(A){return Math.min(s.maxSamples,A.samples)}function Pe(A){let S=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function nt(A,S){let G=A.colorSpace,fe=A.format,he=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xl||G!==Ci&&G!==Un&&(Tt.getTransfer(G)===It?o===!1?e.has("EXT_sRGB")===!0&&fe===Dn?(A.format=xl,A.minFilter=_n,A.generateMipmaps=!1):S=uo.sRGBToLinear(S):(fe!==Dn||he!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=O,this.resetTextureUnits=le,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=dt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Pe}function Nx(n,e,t){let i=t.isWebGL2;function s(r,a=Un){let o,c=Tt.getTransfer(a);if(r===Yi)return n.UNSIGNED_BYTE;if(r===Od)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Fd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===fm)return n.BYTE;if(r===pm)return n.SHORT;if(r===$l)return n.UNSIGNED_SHORT;if(r===Ud)return n.INT;if(r===Wi)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===Yr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===mm)return n.ALPHA;if(r===Dn)return n.RGBA;if(r===gm)return n.LUMINANCE;if(r===_m)return n.LUMINANCE_ALPHA;if(r===_s)return n.DEPTH_COMPONENT;if(r===or)return n.DEPTH_STENCIL;if(r===xl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ym)return n.RED;if(r===Bd)return n.RED_INTEGER;if(r===xm)return n.RG;if(r===zd)return n.RG_INTEGER;if(r===kd)return n.RGBA_INTEGER;if(r===Nc||r===Dc||r===Uc||r===Oc)if(c===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Nc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Nc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qh||r===eu||r===tu||r===nu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Qh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===iu||r===su)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===iu)return c===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===su)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ru||r===au||r===ou||r===cu||r===lu||r===hu||r===uu||r===du||r===fu||r===pu||r===mu||r===gu||r===_u||r===yu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ru)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ou)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===du)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_u)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yu)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fc||r===xu||r===vu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Fc)return c===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vm||r===bu||r===Mu||r===Su)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Fc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Su)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Nl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hn=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dx={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,y=.005;l.inputState.pinching&&d>m+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dl=class extends Ji{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,y=null,x=t.getContextAttributes(),p=null,f=null,C=[],b=[],P=new Ye,U=null,I=new Vt;I.layers.enable(1),I.viewport=new gt;let N=new Vt;N.layers.enable(2),N.viewport=new gt;let j=[I,N],E=new Nl;E.layers.enable(1),E.layers.enable(2);let R=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=C[B];return V===void 0&&(V=new qr,C[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=C[B];return V===void 0&&(V=new qr,C[B]=V),V.getGripSpace()},this.getHand=function(B){let V=C[B];return V===void 0&&(V=new qr,C[B]=V),V.getHandSpace()};function ae(B){let V=b.indexOf(B.inputSource);if(V===-1)return;let ee=C[V];ee!==void 0&&(ee.update(B.inputSource,B.frame,l||a),ee.dispatchEvent({type:B.type,data:B.inputSource}))}function le(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",O);for(let B=0;B<C.length;B++){let V=b[B];V!==null&&(b[B]=null,C[B].disconnect(V))}R=null,Z=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",le),s.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ri(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,ee=null,ne=null;x.depth&&(ne=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=x.stencil?or:_s,ee=x.stencil?gs:Wi);let re={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Ri(d.textureWidth,d.textureHeight,{format:Dn,type:Yi,depthTexture:new bo(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ee=e.properties.get(f);Ee.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(B){for(let V=0;V<B.removed.length;V++){let ee=B.removed[V],ne=b.indexOf(ee);ne>=0&&(b[ne]=null,C[ne].disconnect(ee))}for(let V=0;V<B.added.length;V++){let ee=B.added[V],ne=b.indexOf(ee);if(ne===-1){for(let Ee=0;Ee<C.length;Ee++)if(Ee>=b.length){b.push(ee),ne=Ee;break}else if(b[Ee]===null){b[Ee]=ee,ne=Ee;break}if(ne===-1)break}let re=C[ne];re&&re.connect(ee)}}let q=new L,F=new L;function K(B,V,ee){q.setFromMatrixPosition(V.matrixWorld),F.setFromMatrixPosition(ee.matrixWorld);let ne=q.distanceTo(F),re=V.projectionMatrix.elements,Ee=ee.projectionMatrix.elements,Oe=re[14]/(re[10]-1),Fe=re[14]/(re[10]+1),dt=(re[9]+1)/re[5],k=(re[9]-1)/re[5],jt=(re[8]-1)/re[0],ke=(Ee[8]+1)/Ee[0],Ze=Oe*jt,Pe=Oe*ke,At=ne/(-jt+ke),nt=At*-jt;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(nt),B.translateZ(At),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let A=Oe+At,S=Fe+At,G=Ze-nt,fe=Pe+(ne-nt),he=dt*Fe/S*A,pe=k*Fe/S*A;B.projectionMatrix.makePerspective(G,fe,he,pe,A,S),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function J(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;E.near=N.near=I.near=B.near,E.far=N.far=I.far=B.far,(R!==E.near||Z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,Z=E.far);let V=B.parent,ee=E.cameras;J(E,V);for(let ne=0;ne<ee.length;ne++)J(ee[ne],V);ee.length===2?K(E,I,N):E.projectionMatrix.copy(I.projectionMatrix),Y(B,E,V)};function Y(B,V,ee){ee===null?B.matrix.copy(V.matrixWorld):(B.matrix.copy(ee.matrixWorld),B.matrix.invert(),B.matrix.multiply(V.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(V.projectionMatrix),B.projectionMatrixInverse.copy(V.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=cr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let se=null;function te(B,V){if(h=V.getViewerPose(l||a),y=V,h!==null){let ee=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ne=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,ne=!0);for(let re=0;re<ee.length;re++){let Ee=ee[re],Oe=null;if(m!==null)Oe=m.getViewport(Ee);else{let dt=u.getViewSubImage(d,Ee);Oe=dt.viewport,re===0&&(e.setRenderTargetTextures(f,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(f))}let Fe=j[re];Fe===void 0&&(Fe=new Vt,Fe.layers.enable(re),Fe.viewport=new gt,j[re]=Fe),Fe.matrix.fromArray(Ee.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ee.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),re===0&&(E.matrix.copy(Fe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ne===!0&&E.cameras.push(Fe)}}for(let ee=0;ee<C.length;ee++){let ne=b[ee],re=C[ee];ne!==null&&re!==void 0&&re.update(ne,V,l||a)}se&&se(B,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),y=null}let de=new Yd;de.setAnimationLoop(te),this.setAnimationLoop=function(B){se=B},this.dispose=function(){}}};function Ux(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,qd(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,C,b,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,P)):f.isMeshMatcapMaterial?(r(p,f),y(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,C,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===un&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===un&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let C=e.get(f).envMap;if(C&&(p.envMap.value=C,p.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,C,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*C,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,C){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let C=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ox(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,b){let P=b.program;i.uniformBlockBinding(C,P)}function l(C,b){let P=s[C.id];P===void 0&&(y(C),P=h(C),s[C.id]=P,C.addEventListener("dispose",p));let U=b.program;i.updateUBOMapping(C,U);let I=e.render.frame;r[C.id]!==I&&(d(C),r[C.id]=I)}function h(C){let b=u();C.__bindingPointIndex=b;let P=n.createBuffer(),U=C.__size,I=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,U,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,P),P}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let b=s[C.id],P=C.uniforms,U=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,N=P.length;I<N;I++){let j=Array.isArray(P[I])?P[I]:[P[I]];for(let E=0,R=j.length;E<R;E++){let Z=j[E];if(m(Z,I,E,U)===!0){let ae=Z.__offset,le=Array.isArray(Z.value)?Z.value:[Z.value],O=0;for(let q=0;q<le.length;q++){let F=le[q],K=x(F);typeof F=="number"||typeof F=="boolean"?(Z.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,ae+O,Z.__data)):F.isMatrix3?(Z.__data[0]=F.elements[0],Z.__data[1]=F.elements[1],Z.__data[2]=F.elements[2],Z.__data[3]=0,Z.__data[4]=F.elements[3],Z.__data[5]=F.elements[4],Z.__data[6]=F.elements[5],Z.__data[7]=0,Z.__data[8]=F.elements[6],Z.__data[9]=F.elements[7],Z.__data[10]=F.elements[8],Z.__data[11]=0):(F.toArray(Z.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,Z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,b,P,U){let I=C.value,N=b+"_"+P;if(U[N]===void 0)return typeof I=="number"||typeof I=="boolean"?U[N]=I:U[N]=I.clone(),!0;{let j=U[N];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return U[N]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function y(C){let b=C.uniforms,P=0,U=16;for(let N=0,j=b.length;N<j;N++){let E=Array.isArray(b[N])?b[N]:[b[N]];for(let R=0,Z=E.length;R<Z;R++){let ae=E[R],le=Array.isArray(ae.value)?ae.value:[ae.value];for(let O=0,q=le.length;O<q;O++){let F=le[O],K=x(F),J=P%U;J!==0&&U-J<K.boundary&&(P+=U-J),ae.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=P,P+=K.storage}}}let I=P%U;return I>0&&(P+=U-I),C.__size=P,C.__cache={},this}function x(C){let b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function p(C){let b=C.target;b.removeEventListener("dispose",p);let P=a.indexOf(b.__bindingPointIndex);a.splice(P,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let C in s)n.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Kr=class{constructor(e={}){let{canvas:t=qm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),y=new Int32Array(4),x=null,p=null,f=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;let b=this,P=!1,U=0,I=0,N=null,j=-1,E=null,R=new gt,Z=new gt,ae=null,le=new et(0),O=0,q=t.width,F=t.height,K=1,J=null,Y=null,se=new gt(0,0,q,F),te=new gt(0,0,q,F),de=!1,B=new jr,V=!1,ee=!1,ne=null,re=new tt,Ee=new Ye,Oe=new L,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return N===null?K:1}let k=i;function jt(T,z){for(let W=0;W<T.length;W++){let $=T[W],H=t.getContext($,z);if(H!==null)return H}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",xe,!1),k===null){let z=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&z.shift(),k=jt(z,T),k===null)throw jt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ke,Ze,Pe,At,nt,A,S,G,fe,he,pe,Ne,be,Ae,Ve,it,ue,xt,ot,qe,Be,Ce,Ke,_t;function Pt(){ke=new ty(k),Ze=new Z_(k,ke,e),ke.init(Ze),Ce=new Nx(k,ke,Ze),Pe=new Lx(k,ke,Ze),At=new sy(k),nt=new xx,A=new Ix(k,ke,Pe,nt,Ze,Ce,At),S=new j_(b),G=new ey(b),fe=new dg(k,Ze),Ke=new Y_(k,ke,fe,Ze),he=new ny(k,fe,At,Ke),pe=new cy(k,he,fe,At),ot=new oy(k,Ze,A),it=new J_(nt),Ne=new yx(b,S,G,ke,Ze,Ke,it),be=new Ux(b,nt),Ae=new bx,Ve=new Ax(ke,Ze),xt=new q_(b,S,G,Pe,pe,d,c),ue=new Px(b,pe,Ze),_t=new Ox(k,At,Ze,Pe),qe=new $_(k,ke,At,Ze),Be=new iy(k,ke,At,Ze),At.programs=Ne.programs,b.capabilities=Ze,b.extensions=ke,b.properties=nt,b.renderLists=Ae,b.shadowMap=ue,b.state=Pe,b.info=At}Pt();let rt=new Dl(b,k);this.xr=rt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(q,F,!1))},this.getSize=function(T){return T.set(q,F)},this.setSize=function(T,z,W=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,F=z,t.width=Math.floor(T*K),t.height=Math.floor(z*K),W===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(q*K,F*K).floor()},this.setDrawingBufferSize=function(T,z,W){q=T,F=z,K=W,t.width=Math.floor(T*W),t.height=Math.floor(z*W),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,z,W,$){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,z,W,$),Pe.viewport(R.copy(se).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,z,W,$){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,z,W,$),Pe.scissor(Z.copy(te).multiplyScalar(K).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){Pe.setScissorTest(de=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(T=!0,z=!0,W=!0){let $=0;if(T){let H=!1;if(N!==null){let Se=N.texture.format;H=Se===kd||Se===zd||Se===Bd}if(H){let Se=N.texture.type,we=Se===Yi||Se===Wi||Se===$l||Se===gs||Se===Od||Se===Fd,De=xt.getClearColor(),Ge=xt.getClearAlpha(),Qe=De.r,Je=De.g,je=De.b;we?(m[0]=Qe,m[1]=Je,m[2]=je,m[3]=Ge,k.clearBufferuiv(k.COLOR,0,m)):(y[0]=Qe,y[1]=Je,y[2]=je,y[3]=Ge,k.clearBufferiv(k.COLOR,0,y))}else $|=k.COLOR_BUFFER_BIT}z&&($|=k.DEPTH_BUFFER_BIT),W&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ae.dispose(),Ve.dispose(),nt.dispose(),S.dispose(),G.dispose(),pe.dispose(),Ke.dispose(),_t.dispose(),Ne.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",qt),rt.removeEventListener("sessionend",wt),ne&&(ne.dispose(),ne=null),Kt.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let T=At.autoReset,z=ue.enabled,W=ue.autoUpdate,$=ue.needsUpdate,H=ue.type;Pt(),At.autoReset=T,ue.enabled=z,ue.autoUpdate=W,ue.needsUpdate=$,ue.type=H}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){let z=T.target;z.removeEventListener("dispose",ve),Xe(z)}function Xe(T){He(T),nt.remove(T)}function He(T){let z=nt.get(T).programs;z!==void 0&&(z.forEach(function(W){Ne.releaseProgram(W)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,W,$,H,Se){z===null&&(z=Fe);let we=H.isMesh&&H.matrixWorld.determinant()<0,De=Cc(T,z,W,$,H);Pe.setMaterial($,we);let Ge=W.index,Qe=1;if($.wireframe===!0){if(Ge=he.getWireframeAttribute(W),Ge===void 0)return;Qe=2}let Je=W.drawRange,je=W.attributes.position,Dt=Je.start*Qe,pn=(Je.start+Je.count)*Qe;Se!==null&&(Dt=Math.max(Dt,Se.start*Qe),pn=Math.min(pn,(Se.start+Se.count)*Qe)),Ge!==null?(Dt=Math.max(Dt,0),pn=Math.min(pn,Ge.count)):je!=null&&(Dt=Math.max(Dt,0),pn=Math.min(pn,je.count));let kt=pn-Dt;if(kt<0||kt===1/0)return;Ke.setup(H,$,De,W,Ge);let In,Ct=qe;if(Ge!==null&&(In=fe.get(Ge),Ct=Be,Ct.setIndex(In)),H.isMesh)$.wireframe===!0?(Pe.setLineWidth($.wireframeLinewidth*dt()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(H.isLine){let $e=$.linewidth;$e===void 0&&($e=1),Pe.setLineWidth($e*dt()),H.isLineSegments?Ct.setMode(k.LINES):H.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else H.isPoints?Ct.setMode(k.POINTS):H.isSprite&&Ct.setMode(k.TRIANGLES);if(H.isBatchedMesh)Ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Ct.renderInstances(Dt,kt,H.count);else if(W.isInstancedBufferGeometry){let $e=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pr=Math.min(W.instanceCount,$e);Ct.renderInstances(Dt,kt,Pr)}else Ct.render(Dt,kt)};function bt(T,z,W){T.transparent===!0&&T.side===bn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Is(T,z,W),T.side=On,T.needsUpdate=!0,Is(T,z,W),T.side=bn):Is(T,z,W)}this.compile=function(T,z,W=null){W===null&&(W=T),p=Ve.get(W),p.init(),C.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(b._useLegacyLights);let $=new Set;return T.traverse(function(H){let Se=H.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){let De=Se[we];bt(De,W,H),$.add(De)}else bt(Se,W,H),$.add(Se)}),C.pop(),p=null,$},this.compileAsync=function(T,z,W=null){let $=this.compile(T,z,W);return new Promise(H=>{function Se(){if($.forEach(function(we){nt.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){H(T);return}setTimeout(Se,10)}ke.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let St=null;function vt(T){St&&St(T)}function qt(){Kt.stop()}function wt(){Kt.start()}let Kt=new Yd;Kt.setAnimationLoop(vt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(T){St=T,rt.setAnimationLoop(T),T===null?Kt.stop():Kt.start()},rt.addEventListener("sessionstart",qt),rt.addEventListener("sessionend",wt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(z),z=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,z,N),p=Ve.get(T,C.length),p.init(),C.push(p),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B.setFromProjectionMatrix(re),ee=this.localClippingEnabled,V=it.init(this.clippingPlanes,ee),x=Ae.get(T,f.length),x.init(),f.push(x),Ln(T,z,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(J,Y),this.info.render.frame++,V===!0&&it.beginShadows();let W=p.state.shadowsArray;if(ue.render(W,T,z),V===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(x,T),p.setupLights(b._useLegacyLights),z.isArrayCamera){let $=z.cameras;for(let H=0,Se=$.length;H<Se;H++){let we=$[H];Ma(x,T,we,we.viewport)}}else Ma(x,T,z);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(b,T,z),Ke.resetDefaultState(),j=-1,E=null,C.pop(),C.length>0?p=C[C.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Ln(T,z,W,$){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){$&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);let we=pe.update(T),De=T.material;De.visible&&x.push(T,we,De,W,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){let we=pe.update(T),De=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Oe.copy(we.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(De)){let Ge=we.groups;for(let Qe=0,Je=Ge.length;Qe<Je;Qe++){let je=Ge[Qe],Dt=De[je.materialIndex];Dt&&Dt.visible&&x.push(T,we,Dt,W,Oe.z,je)}}else De.visible&&x.push(T,we,De,W,Oe.z,null)}}let Se=T.children;for(let we=0,De=Se.length;we<De;we++)Ln(Se[we],z,W,$)}function Ma(T,z,W,$){let H=T.opaque,Se=T.transmissive,we=T.transparent;p.setupLightsView(W),V===!0&&it.setGlobalState(b.clippingPlanes,W),Se.length>0&&Ac(H,Se,z,W),$&&Pe.viewport(R.copy($)),H.length>0&&Ls(H,z,W),Se.length>0&&Ls(Se,z,W),we.length>0&&Ls(we,z,W),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ac(T,z,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let Se=Ze.isWebGL2;ne===null&&(ne=new Ri(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?Yr:Yi,minFilter:Zi,samples:Se?4:0})),b.getDrawingBufferSize(Ee),Se?ne.setSize(Ee.x,Ee.y):ne.setSize(ho(Ee.x),ho(Ee.y));let we=b.getRenderTarget();b.setRenderTarget(ne),b.getClearColor(le),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear();let De=b.toneMapping;b.toneMapping=qi,Ls(T,W,$),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne);let Ge=!1;for(let Qe=0,Je=z.length;Qe<Je;Qe++){let je=z[Qe],Dt=je.object,pn=je.geometry,kt=je.material,In=je.group;if(kt.side===bn&&Dt.layers.test($.layers)){let Ct=kt.side;kt.side=un,kt.needsUpdate=!0,Cr(Dt,W,$,pn,kt,In),kt.side=Ct,kt.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne)),b.setRenderTarget(we),b.setClearColor(le,O),b.toneMapping=De}function Ls(T,z,W){let $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Se=T.length;H<Se;H++){let we=T[H],De=we.object,Ge=we.geometry,Qe=$===null?we.material:$,Je=we.group;De.layers.test(W.layers)&&Cr(De,z,W,Ge,Qe,Je)}}function Cr(T,z,W,$,H,Se){T.onBeforeRender(b,z,W,$,H,Se),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(b,z,W,$,T,Se),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,b.renderBufferDirect(W,z,$,H,T,Se),H.side=On,H.needsUpdate=!0,b.renderBufferDirect(W,z,$,H,T,Se),H.side=bn):b.renderBufferDirect(W,z,$,H,T,Se),T.onAfterRender(b,z,W,$,H,Se)}function Is(T,z,W){z.isScene!==!0&&(z=Fe);let $=nt.get(T),H=p.state.lights,Se=p.state.shadowsArray,we=H.state.version,De=Ne.getParameters(T,H.state,Se,z,W),Ge=Ne.getProgramCacheKey(De),Qe=$.programs;$.environment=T.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||$.environment),Qe===void 0&&(T.addEventListener("dispose",ve),Qe=new Map,$.programs=Qe);let Je=Qe.get(Ge);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===we)return Sa(T,De),Je}else De.uniforms=Ne.getUniforms(T),T.onBuild(W,De,b),T.onBeforeCompile(De,b),Je=Ne.acquireProgram(De,Ge),Qe.set(Ge,Je),$.uniforms=De.uniforms;let je=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=it.uniform),Sa(T,De),$.needsLights=Pc(T),$.lightsStateVersion=we,$.needsLights&&(je.ambientLightColor.value=H.state.ambient,je.lightProbe.value=H.state.probe,je.directionalLights.value=H.state.directional,je.directionalLightShadows.value=H.state.directionalShadow,je.spotLights.value=H.state.spot,je.spotLightShadows.value=H.state.spotShadow,je.rectAreaLights.value=H.state.rectArea,je.ltc_1.value=H.state.rectAreaLTC1,je.ltc_2.value=H.state.rectAreaLTC2,je.pointLights.value=H.state.point,je.pointLightShadows.value=H.state.pointShadow,je.hemisphereLights.value=H.state.hemi,je.directionalShadowMap.value=H.state.directionalShadowMap,je.directionalShadowMatrix.value=H.state.directionalShadowMatrix,je.spotShadowMap.value=H.state.spotShadowMap,je.spotLightMatrix.value=H.state.spotLightMatrix,je.spotLightMap.value=H.state.spotLightMap,je.pointShadowMap.value=H.state.pointShadowMap,je.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Rr(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=sr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Sa(T,z){let W=nt.get(T);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Cc(T,z,W,$,H){z.isScene!==!0&&(z=Fe),A.resetTextureUnits();let Se=z.fog,we=$.isMeshStandardMaterial?z.environment:null,De=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ci,Ge=($.isMeshStandardMaterial?G:S).get($.envMap||we),Qe=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Je=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),je=!!W.morphAttributes.position,Dt=!!W.morphAttributes.normal,pn=!!W.morphAttributes.color,kt=qi;$.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(kt=b.toneMapping);let In=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ct=In!==void 0?In.length:0,$e=nt.get($),Pr=p.state.lights;if(V===!0&&(ee===!0||T!==E)){let rn=T===E&&$.id===j;it.setState($,T,rn)}let Lt=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Pr.state.version||$e.outputColorSpace!==De||H.isBatchedMesh&&$e.batching===!1||!H.isBatchedMesh&&$e.batching===!0||H.isInstancedMesh&&$e.instancing===!1||!H.isInstancedMesh&&$e.instancing===!0||H.isSkinnedMesh&&$e.skinning===!1||!H.isSkinnedMesh&&$e.skinning===!0||H.isInstancedMesh&&$e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$e.instancingColor===!1&&H.instanceColor!==null||$e.envMap!==Ge||$.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==it.numPlanes||$e.numIntersection!==it.numIntersection)||$e.vertexAlphas!==Qe||$e.vertexTangents!==Je||$e.morphTargets!==je||$e.morphNormals!==Dt||$e.morphColors!==pn||$e.toneMapping!==kt||Ze.isWebGL2===!0&&$e.morphTargetsCount!==Ct)&&(Lt=!0):(Lt=!0,$e.__version=$.version);let gi=$e.currentProgram;Lt===!0&&(gi=Is($,z,H));let Lr=!1,os=!1,Ir=!1,Yt=gi.getUniforms(),ei=$e.uniforms;if(Pe.useProgram(gi.program)&&(Lr=!0,os=!0,Ir=!0),$.id!==j&&(j=$.id,os=!0),Lr||E!==T){Yt.setValue(k,"projectionMatrix",T.projectionMatrix),Yt.setValue(k,"viewMatrix",T.matrixWorldInverse);let rn=Yt.map.cameraPosition;rn!==void 0&&rn.setValue(k,Oe.setFromMatrixPosition(T.matrixWorld)),Ze.logarithmicDepthBuffer&&Yt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Yt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,os=!0,Ir=!0)}if(H.isSkinnedMesh){Yt.setOptional(k,H,"bindMatrix"),Yt.setOptional(k,H,"bindMatrixInverse");let rn=H.skeleton;rn&&(Ze.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Yt.setValue(k,"boneTexture",rn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Yt.setOptional(k,H,"batchingTexture"),Yt.setValue(k,"batchingTexture",H._matricesTexture,A));let Ut=W.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0&&Ze.isWebGL2===!0)&&ot.update(H,W,gi),(os||$e.receiveShadow!==H.receiveShadow)&&($e.receiveShadow=H.receiveShadow,Yt.setValue(k,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ei.envMap.value=Ge,ei.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),os&&(Yt.setValue(k,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&Rc(ei,Ir),Se&&$.fog===!0&&be.refreshFogUniforms(ei,Se),be.refreshMaterialUniforms(ei,$,K,F,ne),sr.upload(k,Rr($e),ei,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(sr.upload(k,Rr($e),ei,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Yt.setValue(k,"center",H.center),Yt.setValue(k,"modelViewMatrix",H.modelViewMatrix),Yt.setValue(k,"normalMatrix",H.normalMatrix),Yt.setValue(k,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let rn=$.uniformsGroups;for(let Nr=0,wa=rn.length;Nr<wa;Nr++)if(Ze.isWebGL2){let Dr=rn[Nr];_t.update(Dr,gi),_t.bind(Dr,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Rc(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Pc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,z,W){nt.get(T.texture).__webglTexture=z,nt.get(T.depthTexture).__webglTexture=W;let $=nt.get(T);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){let W=nt.get(T);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,W=0){N=T,U=z,I=W;let $=!0,H=null,Se=!1,we=!1;if(T){let Ge=nt.get(T);Ge.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(k.FRAMEBUFFER,null),$=!1):Ge.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ge.__hasExternalTextures&&A.rebindTextures(T,nt.get(T.texture).__webglTexture,nt.get(T.depthTexture).__webglTexture);let Qe=T.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(we=!0);let Je=nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[z])?H=Je[z][W]:H=Je[z],Se=!0):Ze.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?H=nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?H=Je[W]:H=Je,R.copy(T.viewport),Z.copy(T.scissor),ae=T.scissorTest}else R.copy(se).multiplyScalar(K).floor(),Z.copy(te).multiplyScalar(K).floor(),ae=de;if(Pe.bindFramebuffer(k.FRAMEBUFFER,H)&&Ze.drawBuffers&&$&&Pe.drawBuffers(T,H),Pe.viewport(R),Pe.scissor(Z),Pe.setScissorTest(ae),Se){let Ge=nt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ge.__webglTexture,W)}else if(we){let Ge=nt.get(T.texture),Qe=z||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.__webglTexture,W||0,Qe)}j=-1},this.readRenderTargetPixels=function(T,z,W,$,H,Se,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){Pe.bindFramebuffer(k.FRAMEBUFFER,De);try{let Ge=T.texture,Qe=Ge.format,Je=Ge.type;if(Qe!==Dn&&Ce.convert(Qe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let je=Je===Yr&&(ke.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&ke.has("EXT_color_buffer_float"));if(Je!==Yi&&Ce.convert(Je)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===Ti&&(Ze.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-$&&W>=0&&W<=T.height-H&&k.readPixels(z,W,$,H,Ce.convert(Qe),Ce.convert(Je),Se)}finally{let Ge=N!==null?nt.get(N).__webglFramebuffer:null;Pe.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(T,z,W=0){let $=Math.pow(2,-W),H=Math.floor(z.image.width*$),Se=Math.floor(z.image.height*$);A.setTexture2D(z,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,T.x,T.y,H,Se),Pe.unbindTexture()},this.copyTextureToTexture=function(T,z,W,$=0){let H=z.image.width,Se=z.image.height,we=Ce.convert(W.format),De=Ce.convert(W.type);A.setTexture2D(W,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,$,T.x,T.y,H,Se,we,De,z.image.data):z.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,$,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,$,T.x,T.y,we,De,z.image),$===0&&W.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,W,$,H=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,De=T.max.z-T.min.z+1,Ge=Ce.convert($.format),Qe=Ce.convert($.type),Je;if($.isData3DTexture)A.setTexture3D($,0),Je=k.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)A.setTexture2DArray($,0),Je=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);let je=k.getParameter(k.UNPACK_ROW_LENGTH),Dt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),pn=k.getParameter(k.UNPACK_SKIP_PIXELS),kt=k.getParameter(k.UNPACK_SKIP_ROWS),In=k.getParameter(k.UNPACK_SKIP_IMAGES),Ct=W.isCompressedTexture?W.mipmaps[H]:W.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?k.texSubImage3D(Je,H,z.x,z.y,z.z,Se,we,De,Ge,Qe,Ct.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Je,H,z.x,z.y,z.z,Se,we,De,Ge,Ct.data)):k.texSubImage3D(Je,H,z.x,z.y,z.z,Se,we,De,Ge,Qe,Ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,kt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,In),H===0&&$.generateMipmaps&&k.generateMipmap(Je),Pe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){U=0,I=0,N=null,Pe.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Jl?"display-p3":"srgb",t.unpackColorSpace=Tt.workingColorSpace===Wo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?ys:Vd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ys?Ft:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ul=class extends Kr{};Ul.prototype.isWebGL1Renderer=!0;var dr=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Mo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new L,Bn=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qr=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Js,zr=new L,js=new L,Ks=new L,Qs=new Ye,kr=new Ye,Qd=new tt,Ja=new L,Hr=new L,ja=new L,fd=new Ye,ol=new Ye,pd=new Ye,So=class extends Gt{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Sn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mo(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Bn(i,3,0,!1)),Js.setAttribute("uv",new Bn(i,2,3,!1))}this.geometry=Js,this.material=e,this.center=new Ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Qd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ka(Ja.set(-.5,-.5,0),Ks,a,js,s,r),Ka(Hr.set(.5,-.5,0),Ks,a,js,s,r),Ka(ja.set(.5,.5,0),Ks,a,js,s,r),fd.set(0,0),ol.set(1,0),pd.set(1,1);let o=e.ray.intersectTriangle(Ja,Hr,ja,!1,zr);if(o===null&&(Ka(Hr.set(-.5,.5,0),Ks,a,js,s,r),ol.set(0,1),o=e.ray.intersectTriangle(Ja,ja,Hr,!1,zr),o===null))return;let c=e.ray.origin.distanceTo(zr);c<e.near||c>e.far||t.push({distance:c,point:zr.clone(),uv:ms.getInterpolation(zr,Ja,Hr,ja,fd,ol,pd,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(n,e,t,i,s,r){Qs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(kr.x=r*Qs.x-s*Qs.y,kr.y=s*Qs.x+r*Qs.y):kr.copy(Qs),n.copy(e),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(Qd)}var md=new L,gd=new gt,_d=new gt,Fx=new L,yd=new tt,Qa=new L,cl=new Fn,xd=new tt,ll=new lr,wo=class extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jh,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qa),this.boundingBox.expandByPoint(Qa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qa),this.boundingSphere.expandByPoint(Qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(s),e.ray.intersectsSphere(cl)!==!1&&(xd.copy(s).invert(),ll.copy(e.ray).applyMatrix4(xd),!(this.boundingBox!==null&&ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===um?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;gd.fromBufferAttribute(s.attributes.skinIndex,e),_d.fromBufferAttribute(s.attributes.skinWeight,e),md.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=_d.getComponent(r);if(a!==0){let o=gd.getComponent(r);yd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Fx.copy(md).applyMatrix4(yd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ea=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Eo=class extends Mn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Qt,h=Qt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vd=new tt,Bx=new tt,To=class n{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new tt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Bx;vd.multiplyMatrices(o,t[r]),vd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Eo(t,e,e,Dn,Ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ea),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var fr=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bd=new L,Md=new L,Sd=new tt,hl=new lr,eo=new Fn,ta=class extends Gt{constructor(e=new Sn,t=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)bd.fromBufferAttribute(t,s-1),Md.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=bd.distanceTo(Md);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Sd.copy(s).invert(),hl.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,y=i.index,p=i.attributes.position;if(y!==null){let f=Math.max(0,a.start),C=Math.min(y.count,a.start+a.count);for(let b=f,P=C-1;b<P;b+=m){let U=y.getX(b),I=y.getX(b+1);if(l.fromBufferAttribute(p,U),h.fromBufferAttribute(p,I),hl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let j=e.ray.origin.distanceTo(d);j<e.near||j>e.far||t.push({distance:j,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),C=Math.min(p.count,a.start+a.count);for(let b=f,P=C-1;b<P;b+=m){if(l.fromBufferAttribute(p,b),h.fromBufferAttribute(p,b+1),hl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},wd=new L,Ed=new L,Ao=class extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)wd.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wd.distanceTo(Ed);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var na=class extends Mn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Co=class n extends Sn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,m=[],y=[],x=[],p=[];for(let f=0;f<=i;f++){let C=[],b=f/i,P=0;f===0&&a===0?P=.5/t:f===i&&c===Math.PI&&(P=-.5/t);for(let U=0;U<=t;U++){let I=U/t;u.x=-e*Math.cos(s+I*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+I*r)*Math.sin(a+b*o),y.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(I+P,1-b),C.push(l++)}h.push(C)}for(let f=0;f<i;f++)for(let C=0;C<t;C++){let b=h[f][C+1],P=h[f][C],U=h[f+1][C],I=h[f+1][C+1];(f!==0||a>0)&&m.push(b,P,I),(f!==i-1||c<Math.PI)&&m.push(P,U,I)}this.setIndex(m),this.setAttribute("position",new Rt(y,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ro=class extends Sn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new L,r=new L;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,m=u.count;for(let y=d,x=d+m;y<x;y+=3)for(let p=0;p<3;p++){let f=o.getX(y+p),C=o.getX(y+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,C),Td(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Td(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Rt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Td(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var ia=class extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vs=class extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function to(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function kx(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ad(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function ef(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var pr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ol=class extends pr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eu:r=e,o=2*t-i;break;case Tu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Eu:a=e,c=2*i-t;break;case Tu:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(i-t)/(s-t),x=y*y,p=x*y,f=-d*p+2*d*x-d*y,C=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*y+1,b=(-1-m)*p+(1.5+m)*x+.5*y,P=m*p-m*x;for(let U=0;U!==o;++U)r[U]=f*a[h+U]+C*a[l+U]+b*a[c+U]+P*a[u+U];return r}},Fl=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Bl=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case so:t=this.InterpolantFactoryMethodDiscrete;break;case ro:t=this.InterpolantFactoryMethodLinear;break;case Bc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&zx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,m=u+i;for(let y=0;y!==i;++y){let x=t[u+y];if(x!==t[d+y]||x!==t[m+y]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ro;var ji=class extends zn{};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=so;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends zn{};Po.prototype.ValueTypeName="color";var mr=class extends zn{};mr.prototype.ValueTypeName="number";var zl=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)ni.slerpFlat(r,0,a,l-o,a,l,c);return r}},Pi=class extends zn{InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.DefaultInterpolation=ro;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends zn{};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=so;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends zn{};Li.prototype.ValueTypeName="vector";var sa=class{constructor(e,t=-1,i,s=bm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Vx(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(zn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=kx(c);c=Ad(c,1,h),l=Ad(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new mr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,m,y,x){if(m.length!==0){let p=[],f=[];ef(m,p,f,y),p.length!==0&&x.push(new u(d,p,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},y;for(y=0;y<d.length;y++)if(d[y].morphTargets)for(let x=0;x<d[y].morphTargets.length;x++)m[d[y].morphTargets[x]]=-1;for(let x in m){let p=[],f=[];for(let C=0;C!==d[y].morphTargets.length;++C){let b=d[y];p.push(b.time),f.push(b.morphTarget===x?1:0)}s.push(new mr(".morphTargetInfluence["+x+"]",p,f))}c=m.length*a}else{let m=".bones["+t[u].name+"]";i(Li,m+".position",d,"pos",s),i(Pi,m+".quaternion",d,"rot",s),i(Li,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Hx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mr;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return Po;case"quaternion":return Pi;case"bool":case"boolean":return ji;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Vx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Hx(n.type);if(n.times===void 0){let t=[],i=[];ef(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Lo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ra=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],y=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null}}},Gx=new ra,si=class{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var Si={},kl=class extends Error{constructor(e,t){super(e),this.response=t}},aa=class extends si{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Lo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:i,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Si[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,y=m!==0,x=0,p=new ReadableStream({start(f){C();function C(){u.read().then(({done:b,value:P})=>{if(b)f.close();else{x+=P.byteLength;let U=new ProgressEvent("progress",{lengthComputable:y,loaded:x,total:m});for(let I=0,N=h.length;I<N;I++){let j=h[I];j.onProgress&&j.onProgress(U)}f.enqueue(P),C()}})}}});return new Response(p)}else throw new kl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(y=>m.decode(y))}}}).then(l=>{Lo.add(e,l);let h=Si[e];delete Si[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=Si[e];if(h===void 0)throw this.manager.itemError(e),l;delete Si[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hl=class extends si{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Lo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=$r("img");function c(){h(),Lo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Io=class extends si{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Eo,o=new aa(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:ln,a.wrapT=l.wrapT!==void 0?l.wrapT:ln,a.magFilter=l.magFilter!==void 0?l.magFilter:_n,a.minFilter=l.minFilter!==void 0?l.minFilter:_n,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?a.colorSpace=l.colorSpace:l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Zi),l.mipmapCount===1&&(a.minFilter=_n),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},i,s),a}},No=class extends si{constructor(e){super(e)}load(e,t,i,s){let r=new Mn,a=new Hl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},bs=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Do=class extends bs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ul=new tt,Cd=new L,Rd=new L,oa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vl=class extends oa{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Uo=class extends bs{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pd=new tt,Vr=new L,dl=new L,Gl=class extends oa{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vr),dl.copy(i.position),dl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dl),i.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd)}},Oo=class extends bs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wl=class extends oa{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fo=class extends bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Bo=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},zo=class extends Sn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ql="\\[\\]\\.:\\/",Wx=new RegExp("["+Ql+"]","g"),eh="[^"+Ql+"]",Xx="[^"+Ql.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",eh),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),$x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),Jx=new RegExp("^"+qx+Yx+$x+Zx+"$"),jx=["material","materials","bones","map"],Xl=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(e){let t=Jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Xl;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vv=new Float32Array(1);var Ms=class extends Mo{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var ko=class{constructor(e,t,i=0,s=1/0){this.ray=new lr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ql(e,this,i,t),i.sort(Ld),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,i,t);return i.sort(Ld),i}};function Ld(n,e){return n.distance-e.distance}function ql(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)ql(s[r],e,t,!0)}}var Id=new L,no=new L,Ho=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Id.subVectors(e,this.start),no.subVectors(this.end,this.start);let i=no.dot(no),r=no.dot(Id)/i;return t&&(r=cn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);var ca=class extends Io{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case d:case x:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case y:case p:case f:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function i(F,K,J,Y,se){let te,de,B=J.pixel_size>>3,V=J.width*J.height*B;if(K&&(de=se.subarray(Y,Y+=J.colormap_length*(J.colormap_size>>3))),F){te=new Uint8Array(V);let ee,ne,re,Ee=0,Oe=new Uint8Array(B);for(;Ee<V;)if(ee=se[Y++],ne=(ee&127)+1,ee&128){for(re=0;re<B;++re)Oe[re]=se[Y++];for(re=0;re<ne;++re)te.set(Oe,Ee+re*B);Ee+=B*ne}else{for(ne*=B,re=0;re<ne;++re)te[Ee+re]=se[Y++];Ee+=ne}}else te=se.subarray(Y,Y+=K?J.width*J.height:V);return{pixel_data:te,palettes:de}}function s(F,K,J,Y,se,te,de,B,V){let ee=V,ne,re=0,Ee,Oe,Fe=R.width;for(Oe=K;Oe!==Y;Oe+=J)for(Ee=se;Ee!==de;Ee+=te,re++)ne=B[re],F[(Ee+Fe*Oe)*4+3]=255,F[(Ee+Fe*Oe)*4+2]=ee[ne*3+0],F[(Ee+Fe*Oe)*4+1]=ee[ne*3+1],F[(Ee+Fe*Oe)*4+0]=ee[ne*3+2];return F}function r(F,K,J,Y,se,te,de,B){let V,ee=0,ne,re,Ee=R.width;for(re=K;re!==Y;re+=J)for(ne=se;ne!==de;ne+=te,ee+=2)V=B[ee+0]+(B[ee+1]<<8),F[(ne+Ee*re)*4+0]=(V&31744)>>7,F[(ne+Ee*re)*4+1]=(V&992)>>2,F[(ne+Ee*re)*4+2]=(V&31)<<3,F[(ne+Ee*re)*4+3]=V&32768?0:255;return F}function a(F,K,J,Y,se,te,de,B){let V=0,ee,ne,re=R.width;for(ne=K;ne!==Y;ne+=J)for(ee=se;ee!==de;ee+=te,V+=3)F[(ee+re*ne)*4+3]=255,F[(ee+re*ne)*4+2]=B[V+0],F[(ee+re*ne)*4+1]=B[V+1],F[(ee+re*ne)*4+0]=B[V+2];return F}function o(F,K,J,Y,se,te,de,B){let V=0,ee,ne,re=R.width;for(ne=K;ne!==Y;ne+=J)for(ee=se;ee!==de;ee+=te,V+=4)F[(ee+re*ne)*4+2]=B[V+0],F[(ee+re*ne)*4+1]=B[V+1],F[(ee+re*ne)*4+0]=B[V+2],F[(ee+re*ne)*4+3]=B[V+3];return F}function c(F,K,J,Y,se,te,de,B){let V,ee=0,ne,re,Ee=R.width;for(re=K;re!==Y;re+=J)for(ne=se;ne!==de;ne+=te,ee++)V=B[ee],F[(ne+Ee*re)*4+0]=V,F[(ne+Ee*re)*4+1]=V,F[(ne+Ee*re)*4+2]=V,F[(ne+Ee*re)*4+3]=255;return F}function l(F,K,J,Y,se,te,de,B){let V=0,ee,ne,re=R.width;for(ne=K;ne!==Y;ne+=J)for(ee=se;ee!==de;ee+=te,V+=2)F[(ee+re*ne)*4+0]=B[V+0],F[(ee+re*ne)*4+1]=B[V+0],F[(ee+re*ne)*4+2]=B[V+0],F[(ee+re*ne)*4+3]=B[V+1];return F}function h(F,K,J,Y,se){let te,de,B,V,ee,ne;switch((R.flags&C)>>b){default:case I:te=0,B=1,ee=K,de=0,V=1,ne=J;break;case P:te=0,B=1,ee=K,de=J-1,V=-1,ne=-1;break;case N:te=K-1,B=-1,ee=-1,de=0,V=1,ne=J;break;case U:te=K-1,B=-1,ee=-1,de=J-1,V=-1,ne=-1;break}if(le)switch(R.pixel_size){case 8:c(F,de,V,ne,te,B,ee,Y);break;case 16:l(F,de,V,ne,te,B,ee,Y);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(R.pixel_size){case 8:s(F,de,V,ne,te,B,ee,Y,se);break;case 16:r(F,de,V,ne,te,B,ee,Y);break;case 24:a(F,de,V,ne,te,B,ee,Y);break;case 32:o(F,de,V,ne,te,B,ee,Y);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}let u=0,d=1,m=2,y=3,x=9,p=10,f=11,C=48,b=4,P=0,U=1,I=2,N=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let j=0,E=new Uint8Array(e),R={id_length:E[j++],colormap_type:E[j++],image_type:E[j++],colormap_index:E[j++]|E[j++]<<8,colormap_length:E[j++]|E[j++]<<8,colormap_size:E[j++],origin:[E[j++]|E[j++]<<8,E[j++]|E[j++]<<8],width:E[j++]|E[j++]<<8,height:E[j++]|E[j++]<<8,pixel_size:E[j++],flags:E[j++]};if(t(R),R.id_length+j>e.length)throw new Error("THREE.TGALoader: No data.");j+=R.id_length;let Z=!1,ae=!1,le=!1;switch(R.image_type){case x:Z=!0,ae=!0;break;case d:ae=!0;break;case p:Z=!0;break;case m:break;case f:Z=!0,le=!0;break;case y:le=!0;break}let O=new Uint8Array(R.width*R.height*4),q=i(Z,ae,R,j,E);return h(O,R.width,R.height,q.pixel_data,q.palettes),{data:O,width:R.width,height:R.height,flipY:!0,generateMipmaps:!0,minFilter:Zi}}};var Yo=class extends si{load(e,t,i,s){let r=this,a=r.path===""?Bo.extractUrlBase(e):r.path,o=new aa(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(c){try{t(r.parse(c,a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,g){let M=[],v=_.childNodes;for(let w=0,X=v.length;w<X;w++){let Q=v[w];Q.nodeName===g&&M.push(Q)}return M}function s(_){if(_.length===0)return[];let g=_.trim().split(/\s+/),M=new Array(g.length);for(let v=0,w=g.length;v<w;v++)M[v]=g[v];return M}function r(_){if(_.length===0)return[];let g=_.trim().split(/\s+/),M=new Array(g.length);for(let v=0,w=g.length;v<w;v++)M[v]=parseFloat(g[v]);return M}function a(_){if(_.length===0)return[];let g=_.trim().split(/\s+/),M=new Array(g.length);for(let v=0,w=g.length;v<w;v++)M[v]=parseInt(g[v]);return M}function o(_){return _.substring(1)}function c(){return"three_default_"+Rp++}function l(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function m(_,g,M,v){let w=i(_,g)[0];if(w!==void 0){let X=i(w,M);for(let Q=0;Q<X.length;Q++)v(X[Q])}}function y(_,g){for(let M in _){let v=_[M];v.build=g(_[M])}}function x(_,g){return _.build!==void 0||(_.build=g(_)),_.build}function p(_){let g={sources:{},samplers:{},channels:{}},M=!1;for(let v=0,w=_.childNodes.length;v<w;v++){let X=_.childNodes[v];if(X.nodeType!==1)continue;let Q;switch(X.nodeName){case"source":Q=X.getAttribute("id"),g.sources[Q]=D(X);break;case"sampler":Q=X.getAttribute("id"),g.samplers[Q]=f(X);break;case"channel":Q=X.getAttribute("target"),g.channels[Q]=C(X);break;case"animation":p(X),M=!0;break;default:console.log(X)}}M===!1&&(We.animations[_.getAttribute("id")||Qi.generateUUID()]=g)}function f(_){let g={inputs:{}};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let X=o(w.getAttribute("source")),Q=w.getAttribute("semantic");g.inputs[Q]=X;break}}return g}function C(_){let g={},v=_.getAttribute("target").split("/"),w=v.shift(),X=v.shift(),Q=X.indexOf("(")!==-1,Te=X.indexOf(".")!==-1;if(Te)v=X.split("."),X=v.shift(),g.member=v.shift();else if(Q){let ye=X.split("(");X=ye.shift();for(let Me=0;Me<ye.length;Me++)ye[Me]=parseInt(ye[Me].replace(/\)/,""));g.indices=ye}return g.id=w,g.sid=X,g.arraySyntax=Q,g.memberSyntax=Te,g.sampler=o(_.getAttribute("source")),g}function b(_){let g=[],M=_.channels,v=_.samplers,w=_.sources;for(let X in M)if(M.hasOwnProperty(X)){let Q=M[X],Te=v[Q.sampler],ye=Te.inputs.INPUT,Me=Te.inputs.OUTPUT,Ie=w[ye],ce=w[Me],Le=U(Q,Ie,ce);R(Le,g)}return g}function P(_){return x(We.animations[_],b)}function U(_,g,M){let v=We.nodes[_.id],w=$e(v.id),X=v.transforms[_.sid],Q=v.matrix.clone().transpose(),Te,ye,Me,Ie,ce,Le,Re={};switch(X){case"matrix":for(Me=0,Ie=g.array.length;Me<Ie;Me++)if(Te=g.array[Me],ye=Me*M.stride,Re[Te]===void 0&&(Re[Te]={}),_.arraySyntax===!0){let Ot=M.array[ye],Mt=_.indices[0]+4*_.indices[1];Re[Te][Mt]=Ot}else for(ce=0,Le=M.stride;ce<Le;ce++)Re[Te][ce]=M.array[ye+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',X);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',X);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',X);break}let ze=I(Re,Q);return{name:w.uuid,keyframes:ze}}function I(_,g){let M=[];for(let w in _)M.push({time:parseFloat(w),value:_[w]});M.sort(v);for(let w=0;w<16;w++)Z(M,w,g.elements[w]);return M;function v(w,X){return w.time-X.time}}let N=new L,j=new L,E=new ni;function R(_,g){let M=_.keyframes,v=_.name,w=[],X=[],Q=[],Te=[];for(let ye=0,Me=M.length;ye<Me;ye++){let Ie=M[ye],ce=Ie.time,Le=Ie.value;we.fromArray(Le).transpose(),we.decompose(N,E,j),w.push(ce),X.push(N.x,N.y,N.z),Q.push(E.x,E.y,E.z,E.w),Te.push(j.x,j.y,j.z)}return X.length>0&&g.push(new Li(v+".position",w,X)),Q.length>0&&g.push(new Pi(v+".quaternion",w,Q)),Te.length>0&&g.push(new Li(v+".scale",w,Te)),g}function Z(_,g,M){let v,w=!0,X,Q;for(X=0,Q=_.length;X<Q;X++)v=_[X],v.value[g]===void 0?v.value[g]=null:w=!1;if(w===!0)for(X=0,Q=_.length;X<Q;X++)v=_[X],v.value[g]=M;else ae(_,g)}function ae(_,g){let M,v;for(let w=0,X=_.length;w<X;w++){let Q=_[w];if(Q.value[g]===null){if(M=le(_,w,g),v=O(_,w,g),M===null){Q.value[g]=v.value[g];continue}if(v===null){Q.value[g]=M.value[g];continue}q(Q,M,v,g)}}}function le(_,g,M){for(;g>=0;){let v=_[g];if(v.value[M]!==null)return v;g--}return null}function O(_,g,M){for(;g<_.length;){let v=_[g];if(v.value[M]!==null)return v;g++}return null}function q(_,g,M,v){if(M.time-g.time===0){_.value[v]=g.value[v];return}_.value[v]=(_.time-g.time)*(M.value[v]-g.value[v])/(M.time-g.time)+g.value[v]}function F(_){let g={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_animation":g.animations.push(o(w.getAttribute("url")));break}}We.clips[_.getAttribute("id")]=g}function K(_){let g=[],M=_.name,v=_.end-_.start||-1,w=_.animations;for(let X=0,Q=w.length;X<Q;X++){let Te=P(w[X]);for(let ye=0,Me=Te.length;ye<Me;ye++)g.push(Te[ye])}return new sa(M,v,g)}function J(_){return x(We.clips[_],K)}function Y(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"skin":g.id=o(w.getAttribute("source")),g.skin=se(w);break;case"morph":g.id=o(w.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}We.controllers[_.getAttribute("id")]=g}function se(_){let g={sources:{}};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"bind_shape_matrix":g.bindShapeMatrix=r(w.textContent);break;case"source":let X=w.getAttribute("id");g.sources[X]=D(w);break;case"joints":g.joints=te(w);break;case"vertex_weights":g.vertexWeights=de(w);break}}return g}function te(_){let g={inputs:{}};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let X=w.getAttribute("semantic"),Q=o(w.getAttribute("source"));g.inputs[X]=Q;break}}return g}function de(_){let g={inputs:{}};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let X=w.getAttribute("semantic"),Q=o(w.getAttribute("source")),Te=parseInt(w.getAttribute("offset"));g.inputs[X]={id:Q,offset:Te};break;case"vcount":g.vcount=a(w.textContent);break;case"v":g.v=a(w.textContent);break}}return g}function B(_){let g={id:_.id},M=We.geometries[g.id];return _.skin!==void 0&&(g.skin=V(_.skin),M.sources.skinIndices=g.skin.indices,M.sources.skinWeights=g.skin.weights),g}function V(_){let M={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},v=_.sources,w=_.vertexWeights,X=w.vcount,Q=w.v,Te=w.inputs.JOINT.offset,ye=w.inputs.WEIGHT.offset,Me=_.sources[_.joints.inputs.JOINT],Ie=_.sources[_.joints.inputs.INV_BIND_MATRIX],ce=v[w.inputs.WEIGHT.id].array,Le=0,Re,ze,Ue;for(Re=0,Ue=X.length;Re<Ue;Re++){let Mt=X[Re],pt=[];for(ze=0;ze<Mt;ze++){let mt=Q[Le+Te],_i=Q[Le+ye],vn=ce[_i];pt.push({index:mt,weight:vn}),Le+=2}for(pt.sort(Ot),ze=0;ze<4;ze++){let mt=pt[ze];mt!==void 0?(M.indices.array.push(mt.index),M.weights.array.push(mt.weight)):(M.indices.array.push(0),M.weights.array.push(0))}}for(_.bindShapeMatrix?M.bindMatrix=new tt().fromArray(_.bindShapeMatrix).transpose():M.bindMatrix=new tt().identity(),Re=0,Ue=Me.array.length;Re<Ue;Re++){let Mt=Me.array[Re],pt=new tt().fromArray(Ie.array,Re*Ie.stride).transpose();M.joints.push({name:Mt,boneInverse:pt})}return M;function Ot(Mt,pt){return pt.weight-Mt.weight}}function ee(_){return x(We.controllers[_],B)}function ne(_){let g={init_from:i(_,"init_from")[0].textContent};We.images[_.getAttribute("id")]=g}function re(_){return _.build!==void 0?_.build:_.init_from}function Ee(_){let g=We.images[_];return g!==void 0?x(g,re):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function Oe(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"profile_COMMON":g.profile=Fe(w);break}}We.effects[_.getAttribute("id")]=g}function Fe(_){let g={surfaces:{},samplers:{}};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"newparam":dt(w,g);break;case"technique":g.technique=ke(w);break;case"extra":g.extra=S(w);break}}return g}function dt(_,g){let M=_.getAttribute("sid");for(let v=0,w=_.childNodes.length;v<w;v++){let X=_.childNodes[v];if(X.nodeType===1)switch(X.nodeName){case"surface":g.surfaces[M]=k(X);break;case"sampler2D":g.samplers[M]=jt(X);break}}}function k(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"init_from":g.init_from=w.textContent;break}}return g}function jt(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"source":g.source=w.textContent;break}}return g}function ke(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"constant":case"lambert":case"blinn":case"phong":g.type=w.nodeName,g.parameters=Ze(w);break;case"extra":g.extra=S(w);break}}return g}function Ze(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":g[w.nodeName]=Pe(w);break;case"transparent":g[w.nodeName]={opaque:w.hasAttribute("opaque")?w.getAttribute("opaque"):"A_ONE",data:Pe(w)};break}}return g}function Pe(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":g[w.nodeName]=r(w.textContent);break;case"float":g[w.nodeName]=parseFloat(w.textContent);break;case"texture":g[w.nodeName]={id:w.getAttribute("texture"),extra:At(w)};break}}return g}function At(_){let g={technique:{}};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"extra":nt(w,g);break}}return g}function nt(_,g){for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":A(w,g);break}}}function A(_,g){for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":g.technique[w.nodeName]=parseFloat(w.textContent);break;case"wrapU":case"wrapV":w.textContent.toUpperCase()==="TRUE"?g.technique[w.nodeName]=1:w.textContent.toUpperCase()==="FALSE"?g.technique[w.nodeName]=0:g.technique[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=fe(w);break}}}function S(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":g.technique=G(w);break}}return g}function G(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"double_sided":g[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=fe(w);break}}return g}function fe(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"texture":g[w.nodeName]={id:w.getAttribute("texture"),texcoord:w.getAttribute("texcoord"),extra:At(w)};break}}return g}function he(_){return _}function pe(_){return x(We.effects[_],he)}function Ne(_){let g={name:_.getAttribute("name")};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_effect":g.url=o(w.getAttribute("url"));break}}We.materials[_.getAttribute("id")]=g}function be(_){let g,M=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(M=M.toLowerCase(),M){case"tga":g=Lc;break;default:g=Dr}return g}function Ae(_){let g=pe(_.url),M=g.profile.technique,v;switch(M.type){case"phong":case"blinn":v=new ia;break;case"lambert":v=new vs;break;default:v=new dn;break}v.name=_.name||"";function w(ye,Me=null){let Ie=g.profile.samplers[ye.id],ce=null;if(Ie!==void 0){let Le=g.profile.surfaces[Ie.source];ce=Ee(Le.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=Ee(ye.id);if(ce!==null){let Le=be(ce);if(Le!==void 0){let Re=Le.load(ce),ze=ye.extra;if(ze!==void 0&&ze.technique!==void 0&&l(ze.technique)===!1){let Ue=ze.technique;Re.wrapS=Ue.wrapU?$i:ln,Re.wrapT=Ue.wrapV?$i:ln,Re.offset.set(Ue.offsetU||0,Ue.offsetV||0),Re.repeat.set(Ue.repeatU||1,Ue.repeatV||1)}else Re.wrapS=$i,Re.wrapT=$i;return Me!==null&&(Re.colorSpace=Me),Re}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ye.id),null}let X=M.parameters;for(let ye in X){let Me=X[ye];switch(ye){case"diffuse":Me.color&&v.color.fromArray(Me.color),Me.texture&&(v.map=w(Me.texture,Ft));break;case"specular":Me.color&&v.specular&&v.specular.fromArray(Me.color),Me.texture&&(v.specularMap=w(Me.texture));break;case"bump":Me.texture&&(v.normalMap=w(Me.texture));break;case"ambient":Me.texture&&(v.lightMap=w(Me.texture,Ft));break;case"shininess":Me.float&&v.shininess&&(v.shininess=Me.float);break;case"emission":Me.color&&v.emissive&&v.emissive.fromArray(Me.color),Me.texture&&(v.emissiveMap=w(Me.texture,Ft));break}}v.color.convertSRGBToLinear(),v.specular&&v.specular.convertSRGBToLinear(),v.emissive&&v.emissive.convertSRGBToLinear();let Q=X.transparent,Te=X.transparency;if(Te===void 0&&Q&&(Te={float:1}),Q===void 0&&Te&&(Q={opaque:"A_ONE",data:{color:[1,1,1,1]}}),Q&&Te)if(Q.data.texture)v.transparent=!0;else{let ye=Q.data.color;switch(Q.opaque){case"A_ONE":v.opacity=ye[3]*Te.float;break;case"RGB_ZERO":v.opacity=1-ye[0]*Te.float;break;case"A_ZERO":v.opacity=1-ye[3]*Te.float;break;case"RGB_ONE":v.opacity=ye[0]*Te.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',Q.opaque)}v.opacity<1&&(v.transparent=!0)}if(M.extra!==void 0&&M.extra.technique!==void 0){let ye=M.extra.technique;for(let Me in ye){let Ie=ye[Me];switch(Me){case"double_sided":v.side=Ie===1?bn:On;break;case"bump":v.normalMap=w(Ie.texture),v.normalScale=new Ye(1,1);break}}}return v}function Ve(_){return x(We.materials[_],Ae)}function it(_){let g={name:_.getAttribute("name")};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"optics":g.optics=ue(w);break}}We.cameras[_.getAttribute("id")]=g}function ue(_){for(let g=0;g<_.childNodes.length;g++){let M=_.childNodes[g];switch(M.nodeName){case"technique_common":return xt(M)}}return{}}function xt(_){let g={};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];switch(v.nodeName){case"perspective":case"orthographic":g.technique=v.nodeName,g.parameters=ot(v);break}}return g}function ot(_){let g={};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];switch(v.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":g[v.nodeName]=parseFloat(v.textContent);break}}return g}function qe(_){let g;switch(_.optics.technique){case"perspective":g=new Vt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let M=_.optics.parameters.ymag,v=_.optics.parameters.xmag,w=_.optics.parameters.aspect_ratio;v=v===void 0?M*w:v,M=M===void 0?v/w:M,v*=.5,M*=.5,g=new ur(-v,v,M,-M,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:g=new Vt;break}return g.name=_.name||"",g}function Be(_){let g=We.cameras[_];return g!==void 0?x(g,qe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Ce(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique_common":g=Ke(w);break}}We.lights[_.getAttribute("id")]=g}function Ke(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"directional":case"point":case"spot":case"ambient":g.technique=w.nodeName,g.parameters=_t(w)}}return g}function _t(_){let g={};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":let X=r(w.textContent);g.color=new et().fromArray(X).convertSRGBToLinear();break;case"falloff_angle":g.falloffAngle=parseFloat(w.textContent);break;case"quadratic_attenuation":let Q=parseFloat(w.textContent);g.distance=Q?Math.sqrt(1/Q):0;break}}return g}function Pt(_){let g;switch(_.technique){case"directional":g=new gr;break;case"point":g=new Oo;break;case"spot":g=new Uo;break;case"ambient":g=new Fo;break}return _.parameters.color&&g.color.copy(_.parameters.color),_.parameters.distance&&(g.distance=_.parameters.distance),g}function rt(_){let g=We.lights[_];return g!==void 0?x(g,Pt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function ge(_){let g={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},M=i(_,"mesh")[0];if(M!==void 0){for(let v=0;v<M.childNodes.length;v++){let w=M.childNodes[v];if(w.nodeType!==1)continue;let X=w.getAttribute("id");switch(w.nodeName){case"source":g.sources[X]=D(w);break;case"vertices":g.vertices=xe(w);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",w.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":g.primitives.push(ve(w));break;default:console.log(w)}}We.geometries[_.getAttribute("id")]=g}}function D(_){let g={array:[],stride:3};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"float_array":g.array=r(v.textContent);break;case"Name_array":g.array=s(v.textContent);break;case"technique_common":let w=i(v,"accessor")[0];w!==void 0&&(g.stride=parseInt(w.getAttribute("stride")));break}}return g}function xe(_){let g={};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];v.nodeType===1&&(g[v.getAttribute("semantic")]=o(v.getAttribute("source")))}return g}function ve(_){let g={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let M=0,v=_.childNodes.length;M<v;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let X=o(w.getAttribute("source")),Q=w.getAttribute("semantic"),Te=parseInt(w.getAttribute("offset")),ye=parseInt(w.getAttribute("set")),Me=ye>0?Q+ye:Q;g.inputs[Me]={id:X,offset:Te},g.stride=Math.max(g.stride,Te+1),Q==="TEXCOORD"&&(g.hasUV=!0);break;case"vcount":g.vcount=a(w.textContent);break;case"p":g.p=a(w.textContent);break}}return g}function Xe(_){let g={};for(let M=0;M<_.length;M++){let v=_[M];g[v.type]===void 0&&(g[v.type]=[]),g[v.type].push(v)}return g}function He(_){let g=0;for(let M=0,v=_.length;M<v;M++)_[M].hasUV===!0&&g++;g>0&&g<_.length&&(_.uvsNeedsFix=!0)}function bt(_){let g={},M=_.sources,v=_.vertices,w=_.primitives;if(w.length===0)return{};let X=Xe(w);for(let Q in X){let Te=X[Q];He(Te),g[Q]=St(Te,M,v)}return g}function St(_,g,M){let v={},w={array:[],stride:0},X={array:[],stride:0},Q={array:[],stride:0},Te={array:[],stride:0},ye={array:[],stride:0},Me={array:[],stride:4},Ie={array:[],stride:4},ce=new Sn,Le=[],Re=0;for(let ze=0;ze<_.length;ze++){let Ue=_[ze],Ot=Ue.inputs,Mt=0;switch(Ue.type){case"lines":case"linestrips":Mt=Ue.count*2;break;case"triangles":Mt=Ue.count*3;break;case"polylist":for(let pt=0;pt<Ue.count;pt++){let mt=Ue.vcount[pt];switch(mt){case 3:Mt+=3;break;case 4:Mt+=6;break;default:Mt+=(mt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ue.type)}ce.addGroup(Re,Mt,ze),Re+=Mt,Ue.material&&Le.push(Ue.material);for(let pt in Ot){let mt=Ot[pt];switch(pt){case"VERTEX":for(let _i in M){let vn=M[_i];switch(_i){case"POSITION":let Ns=w.array.length;if(vt(Ue,g[vn],mt.offset,w.array),w.stride=g[vn].stride,g.skinWeights&&g.skinIndices&&(vt(Ue,g.skinIndices,mt.offset,Me.array),vt(Ue,g.skinWeights,mt.offset,Ie.array)),Ue.hasUV===!1&&_.uvsNeedsFix===!0){let Pp=(w.array.length-Ns)/w.stride;for(let Wh=0;Wh<Pp;Wh++)Q.array.push(0,0)}break;case"NORMAL":vt(Ue,g[vn],mt.offset,X.array),X.stride=g[vn].stride;break;case"COLOR":vt(Ue,g[vn],mt.offset,ye.array),ye.stride=g[vn].stride;break;case"TEXCOORD":vt(Ue,g[vn],mt.offset,Q.array),Q.stride=g[vn].stride;break;case"TEXCOORD1":vt(Ue,g[vn],mt.offset,Te.array),Q.stride=g[vn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',_i)}}break;case"NORMAL":vt(Ue,g[mt.id],mt.offset,X.array),X.stride=g[mt.id].stride;break;case"COLOR":vt(Ue,g[mt.id],mt.offset,ye.array,!0),ye.stride=g[mt.id].stride;break;case"TEXCOORD":vt(Ue,g[mt.id],mt.offset,Q.array),Q.stride=g[mt.id].stride;break;case"TEXCOORD1":vt(Ue,g[mt.id],mt.offset,Te.array),Te.stride=g[mt.id].stride;break}}}return w.array.length>0&&ce.setAttribute("position",new Rt(w.array,w.stride)),X.array.length>0&&ce.setAttribute("normal",new Rt(X.array,X.stride)),ye.array.length>0&&ce.setAttribute("color",new Rt(ye.array,ye.stride)),Q.array.length>0&&ce.setAttribute("uv",new Rt(Q.array,Q.stride)),Te.array.length>0&&ce.setAttribute("uv1",new Rt(Te.array,Te.stride)),Me.array.length>0&&ce.setAttribute("skinIndex",new Rt(Me.array,Me.stride)),Ie.array.length>0&&ce.setAttribute("skinWeight",new Rt(Ie.array,Ie.stride)),v.data=ce,v.type=_[0].type,v.materialKeys=Le,v}function vt(_,g,M,v,w=!1){let X=_.p,Q=_.stride,Te=_.vcount;function ye(ce){let Le=X[ce+M]*Ie,Re=Le+Ie;for(;Le<Re;Le++)v.push(Me[Le]);if(w){let ze=v.length-Ie-1;Ea.setRGB(v[ze+0],v[ze+1],v[ze+2]).convertSRGBToLinear(),v[ze+0]=Ea.r,v[ze+1]=Ea.g,v[ze+2]=Ea.b}}let Me=g.array,Ie=g.stride;if(_.vcount!==void 0){let ce=0;for(let Le=0,Re=Te.length;Le<Re;Le++){let ze=Te[Le];if(ze===4){let Ue=ce+Q*0,Ot=ce+Q*1,Mt=ce+Q*2,pt=ce+Q*3;ye(Ue),ye(Ot),ye(pt),ye(Ot),ye(Mt),ye(pt)}else if(ze===3){let Ue=ce+Q*0,Ot=ce+Q*1,Mt=ce+Q*2;ye(Ue),ye(Ot),ye(Mt)}else if(ze>4)for(let Ue=1,Ot=ze-2;Ue<=Ot;Ue++){let Mt=ce+Q*0,pt=ce+Q*Ue,mt=ce+Q*(Ue+1);ye(Mt),ye(pt),ye(mt)}ce+=Q*ze}}else for(let ce=0,Le=X.length;ce<Le;ce+=Q)ye(ce)}function qt(_){return x(We.geometries[_],bt)}function wt(_){let g={name:_.getAttribute("name")||"",joints:{},links:[]};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"technique_common":Ma(v,g);break}}We.kinematicsModels[_.getAttribute("id")]=g}function Kt(_){return _.build!==void 0?_.build:_}function Ln(_){return x(We.kinematicsModels[_],Kt)}function Ma(_,g){for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"joint":g.joints[v.getAttribute("sid")]=Ac(v);break;case"link":g.links.push(Cr(v));break}}}function Ac(_){let g;for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"prismatic":case"revolute":g=Ls(v);break}}return g}function Ls(_){let g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new L,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"axis":let w=r(v.textContent);g.axis.fromArray(w);break;case"limits":let X=v.getElementsByTagName("max")[0],Q=v.getElementsByTagName("min")[0];g.limits.max=parseFloat(X.textContent),g.limits.min=parseFloat(Q.textContent);break}}return g.limits.min>=g.limits.max&&(g.static=!0),g.middlePosition=(g.limits.min+g.limits.max)/2,g}function Cr(_){let g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"attachment_full":g.attachments.push(Is(v));break;case"matrix":case"translate":case"rotate":g.transforms.push(Rr(v));break}}return g}function Is(_){let g={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"link":g.links.push(Cr(v));break;case"matrix":case"translate":case"rotate":g.transforms.push(Rr(v));break}}return g}function Rr(_){let g={type:_.nodeName},M=r(_.textContent);switch(g.type){case"matrix":g.obj=new tt,g.obj.fromArray(M).transpose();break;case"translate":g.obj=new L,g.obj.fromArray(M);break;case"rotate":g.obj=new L,g.obj.fromArray(M),g.angle=Qi.degToRad(M[3]);break}return g}function Sa(_){let g={name:_.getAttribute("name")||"",rigidBodies:{}};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"rigid_body":g.rigidBodies[v.getAttribute("name")]={},Cc(v,g.rigidBodies[v.getAttribute("name")]);break}}We.physicsModels[_.getAttribute("id")]=g}function Cc(_,g){for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"technique_common":Rc(v,g);break}}}function Rc(_,g){for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"inertia":g.inertia=r(v.textContent);break;case"mass":g.mass=r(v.textContent)[0];break}}}function Pc(_){let g={bindJointAxis:[]};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"bind_joint_axis":g.bindJointAxis.push(T(v));break}}We.kinematicsScenes[o(_.getAttribute("url"))]=g}function T(_){let g={target:_.getAttribute("target").split("/").pop()};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType===1)switch(v.nodeName){case"axis":let w=v.getElementsByTagName("param")[0];g.axis=w.textContent;let X=g.axis.split("inst_").pop().split("axis")[0];g.jointIndex=X.substring(0,X.length-1);break}}return g}function z(_){return _.build!==void 0?_.build:_}function W(_){return x(We.kinematicsScenes[_],z)}function $(){let _=Object.keys(We.kinematicsModels)[0],g=Object.keys(We.kinematicsScenes)[0],M=Object.keys(We.visualScenes)[0];if(_===void 0||g===void 0)return;let v=Ln(_),w=W(g),X=Lr(M),Q=w.bindJointAxis,Te={};for(let Ie=0,ce=Q.length;Ie<ce;Ie++){let Le=Q[Ie],Re=Ut.querySelector('[sid="'+Le.target+'"]');if(Re){let ze=Re.parentElement;ye(Le.jointIndex,ze)}}function ye(Ie,ce){let Le=ce.getAttribute("name"),Re=v.joints[Ie];X.traverse(function(ze){ze.name===Le&&(Te[Ie]={object:ze,transforms:H(ce),joint:Re,position:Re.zeroPosition})})}let Me=new tt;Gh={joints:v&&v.joints,getJointValue:function(Ie){let ce=Te[Ie];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Ie+" doesn't exist.")},setJointValue:function(Ie,ce){let Le=Te[Ie];if(Le){let Re=Le.joint;if(ce>Re.limits.max||ce<Re.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ie+" value "+ce+" outside of limits (min: "+Re.limits.min+", max: "+Re.limits.max+").");else if(Re.static)console.warn("THREE.ColladaLoader: Joint "+Ie+" is static.");else{let ze=Le.object,Ue=Re.axis,Ot=Le.transforms;we.identity();for(let Mt=0;Mt<Ot.length;Mt++){let pt=Ot[Mt];if(pt.sid&&pt.sid.indexOf(Ie)!==-1)switch(Re.type){case"revolute":we.multiply(Me.makeRotationAxis(Ue,Qi.degToRad(ce)));break;case"prismatic":we.multiply(Me.makeTranslation(Ue.x*ce,Ue.y*ce,Ue.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Re.type);break}else switch(pt.type){case"matrix":we.multiply(pt.obj);break;case"translate":we.multiply(Me.makeTranslation(pt.obj.x,pt.obj.y,pt.obj.z));break;case"scale":we.scale(pt.obj);break;case"rotate":we.multiply(Me.makeRotationAxis(pt.obj,pt.angle));break}}ze.matrix.copy(we),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),Te[Ie].position=ce}}else console.log("THREE.ColladaLoader: "+Ie+" does not exist.")}}}function H(_){let g=[],M=Ut.querySelector('[id="'+_.id+'"]');for(let v=0;v<M.childNodes.length;v++){let w=M.childNodes[v];if(w.nodeType!==1)continue;let X,Q;switch(w.nodeName){case"matrix":X=r(w.textContent);let Te=new tt().fromArray(X).transpose();g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:Te});break;case"translate":case"scale":X=r(w.textContent),Q=new L().fromArray(X),g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:Q});break;case"rotate":X=r(w.textContent),Q=new L().fromArray(X);let ye=Qi.degToRad(X[3]);g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:Q,angle:ye});break}}return g}function Se(_){let g=_.getElementsByTagName("node");for(let M=0;M<g.length;M++){let v=g[M];v.hasAttribute("id")===!1&&v.setAttribute("id",c())}}let we=new tt,De=new L;function Ge(_){let g={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new tt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];if(v.nodeType!==1)continue;let w;switch(v.nodeName){case"node":g.nodes.push(v.getAttribute("id")),Ge(v);break;case"instance_camera":g.instanceCameras.push(o(v.getAttribute("url")));break;case"instance_controller":g.instanceControllers.push(Qe(v));break;case"instance_light":g.instanceLights.push(o(v.getAttribute("url")));break;case"instance_geometry":g.instanceGeometries.push(Qe(v));break;case"instance_node":g.instanceNodes.push(o(v.getAttribute("url")));break;case"matrix":w=r(v.textContent),g.matrix.multiply(we.fromArray(w).transpose()),g.transforms[v.getAttribute("sid")]=v.nodeName;break;case"translate":w=r(v.textContent),De.fromArray(w),g.matrix.multiply(we.makeTranslation(De.x,De.y,De.z)),g.transforms[v.getAttribute("sid")]=v.nodeName;break;case"rotate":w=r(v.textContent);let X=Qi.degToRad(w[3]);g.matrix.multiply(we.makeRotationAxis(De.fromArray(w),X)),g.transforms[v.getAttribute("sid")]=v.nodeName;break;case"scale":w=r(v.textContent),g.matrix.scale(De.fromArray(w)),g.transforms[v.getAttribute("sid")]=v.nodeName;break;case"extra":break;default:console.log(v)}}return Ct(g.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",g.id):We.nodes[g.id]=g,g}function Qe(_){let g={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let M=0;M<_.childNodes.length;M++){let v=_.childNodes[M];switch(v.nodeName){case"bind_material":let w=v.getElementsByTagName("instance_material");for(let X=0;X<w.length;X++){let Q=w[X],Te=Q.getAttribute("symbol"),ye=Q.getAttribute("target");g.materials[Te]=o(ye)}break;case"skeleton":g.skeletons.push(o(v.textContent));break;default:break}}return g}function Je(_,g){let M=[],v=[],w,X,Q;for(w=0;w<_.length;w++){let Me=_[w],Ie;if(Ct(Me))Ie=$e(Me),je(Ie,g,M);else if(gi(Me)){let Le=We.visualScenes[Me].children;for(let Re=0;Re<Le.length;Re++){let ze=Le[Re];if(ze.type==="JOINT"){let Ue=$e(ze.id);je(Ue,g,M)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Me)}for(w=0;w<g.length;w++)for(X=0;X<M.length;X++)if(Q=M[X],Q.bone.name===g[w].name){v[w]=Q,Q.processed=!0;break}for(w=0;w<M.length;w++)Q=M[w],Q.processed===!1&&(v.push(Q),Q.processed=!0);let Te=[],ye=[];for(w=0;w<v.length;w++)Q=v[w],Te.push(Q.bone),ye.push(Q.boneInverse);return new To(Te,ye)}function je(_,g,M){_.traverse(function(v){if(v.isBone===!0){let w;for(let X=0;X<g.length;X++){let Q=g[X];if(Q.name===v.name){w=Q.boneInverse;break}}w===void 0&&(w=new tt),M.push({bone:v,boneInverse:w,processed:!1})}})}function Dt(_){let g=[],M=_.matrix,v=_.nodes,w=_.type,X=_.instanceCameras,Q=_.instanceControllers,Te=_.instanceLights,ye=_.instanceGeometries,Me=_.instanceNodes;for(let ce=0,Le=v.length;ce<Le;ce++)g.push($e(v[ce]));for(let ce=0,Le=X.length;ce<Le;ce++){let Re=Be(X[ce]);Re!==null&&g.push(Re.clone())}for(let ce=0,Le=Q.length;ce<Le;ce++){let Re=Q[ce],ze=ee(Re.id),Ue=qt(ze.id),Ot=In(Ue,Re.materials),Mt=Re.skeletons,pt=ze.skin.joints,mt=Je(Mt,pt);for(let _i=0,vn=Ot.length;_i<vn;_i++){let Ns=Ot[_i];Ns.isSkinnedMesh&&(Ns.bind(mt,ze.skin.bindMatrix),Ns.normalizeSkinWeights()),g.push(Ns)}}for(let ce=0,Le=Te.length;ce<Le;ce++){let Re=rt(Te[ce]);Re!==null&&g.push(Re.clone())}for(let ce=0,Le=ye.length;ce<Le;ce++){let Re=ye[ce],ze=qt(Re.id),Ue=In(ze,Re.materials);for(let Ot=0,Mt=Ue.length;Ot<Mt;Ot++)g.push(Ue[Ot])}for(let ce=0,Le=Me.length;ce<Le;ce++)g.push($e(Me[ce]).clone());let Ie;if(v.length===0&&g.length===1)Ie=g[0];else{Ie=w==="JOINT"?new ea:new hn;for(let ce=0;ce<g.length;ce++)Ie.add(g[ce])}return Ie.name=w==="JOINT"?_.sid:_.name,Ie.matrix.copy(M),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie}let pn=new dn({name:si.DEFAULT_MATERIAL_NAME,color:16711935});function kt(_,g){let M=[];for(let v=0,w=_.length;v<w;v++){let X=g[_[v]];X===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[v]),M.push(pn)):M.push(Ve(X))}return M}function In(_,g){let M=[];for(let v in _){let w=_[v],X=kt(w.materialKeys,g);if(X.length===0&&(v==="lines"||v==="linestrips"?X.push(new fr):X.push(new ia)),v==="lines"||v==="linestrips")for(let Me=0,Ie=X.length;Me<Ie;Me++){let ce=X[Me];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Le=new fr;Le.color.copy(ce.color),Le.opacity=ce.opacity,Le.transparent=ce.transparent,X[Me]=Le}}let Q=w.data.attributes.skinIndex!==void 0,Te=X.length===1?X[0]:X,ye;switch(v){case"lines":ye=new Ao(w.data,Te);break;case"linestrips":ye=new ta(w.data,Te);break;case"triangles":case"polylist":Q?ye=new wo(w.data,Te):ye=new Bt(w.data,Te);break}M.push(ye)}return M}function Ct(_){return We.nodes[_]!==void 0}function $e(_){return x(We.nodes[_],Dt)}function Pr(_){let g={name:_.getAttribute("name"),children:[]};Se(_);let M=i(_,"node");for(let v=0;v<M.length;v++)g.children.push(Ge(M[v]));We.visualScenes[_.getAttribute("id")]=g}function Lt(_){let g=new hn;g.name=_.name;let M=_.children;for(let v=0;v<M.length;v++){let w=M[v];g.add($e(w.id))}return g}function gi(_){return We.visualScenes[_]!==void 0}function Lr(_){return x(We.visualScenes[_],Lt)}function os(_){let g=i(_,"instance_visual_scene")[0];return Lr(o(g.getAttribute("url")))}function Ir(){let _=We.clips;if(l(_)===!0){if(l(We.animations)===!1){let g=[];for(let M in We.animations){let v=P(M);for(let w=0,X=v.length;w<X;w++)g.push(v[w])}Ta.push(new sa("default",-1,g))}}else for(let g in _)Ta.push(J(g))}function Yt(_){let g="",M=[_];for(;M.length;){let v=M.shift();v.nodeType===Node.TEXT_NODE?g+=v.textContent:(g+=`
`,M.push.apply(M,v.childNodes))}return g.trim()}if(e.length===0)return{scene:new dr};let ei=new DOMParser().parseFromString(e,"application/xml"),Ut=i(ei,"COLLADA")[0],rn=ei.getElementsByTagName("parsererror")[0];if(rn!==void 0){let _=i(rn,"div")[0],g;return _?g=_.textContent:g=Yt(rn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,g),null}let Nr=Ut.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Nr);let wa=h(i(Ut,"asset")[0]),Dr=new No(this.manager);Dr.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Lc;ca&&(Lc=new ca(this.manager),Lc.setPath(this.resourcePath||t));let Ea=new et,Ta=[],Gh={},Rp=0,We={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ut,"library_animations","animation",p),m(Ut,"library_animation_clips","animation_clip",F),m(Ut,"library_controllers","controller",Y),m(Ut,"library_images","image",ne),m(Ut,"library_effects","effect",Oe),m(Ut,"library_materials","material",Ne),m(Ut,"library_cameras","camera",it),m(Ut,"library_lights","light",Ce),m(Ut,"library_geometries","geometry",ge),m(Ut,"library_nodes","node",Ge),m(Ut,"library_visual_scenes","visual_scene",Pr),m(Ut,"library_kinematics_models","kinematics_model",wt),m(Ut,"library_physics_models","physics_model",Sa),m(Ut,"scene","instance_kinematics_scene",Pc),y(We.animations,b),y(We.clips,K),y(We.controllers,B),y(We.images,re),y(We.effects,he),y(We.materials,Ae),y(We.cameras,qe),y(We.lights,Pt),y(We.geometries,bt),y(We.visualScenes,Lt),Ir(),$();let Aa=os(i(Ut,"scene")[0]);return Aa.animations=Ta,wa.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Aa.rotation.set(-Math.PI/2,0,0)),Aa.scale.multiplyScalar(wa.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ta},kinematics:Gh,library:We,scene:Aa}}};var tf=new en,$o=new L,Ss=class extends zo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Rt(e,3)),this.setAttribute("uv",new Rt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Ms(t,6,1);return this.setAttribute("instanceStart",new Bn(i,3,0)),this.setAttribute("instanceEnd",new Bn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Ms(t,6,1);return this.setAttribute("instanceColorStart",new Bn(i,3,0)),this.setAttribute("instanceColorEnd",new Bn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ro(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),tf.setFromBufferAttribute(t),this.boundingBox.union(tf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)$o.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($o)),$o.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($o));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ye(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};yn.line={uniforms:Xo.merge([me.common,me.fog,me.line]),vertexShader:`
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
		`};var Ii=class extends Yn{constructor(e){super({type:"LineMaterial",uniforms:Xo.clone(yn.line.uniforms),vertexShader:yn.line.vertexShader,fragmentShader:yn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var nf=new L,sf=new L,tn=new gt,nn=new gt,ri=new gt,th=new L,nh=new tt,sn=new Ho,rf=new L,Zo=new en,Jo=new Fn,ai=new gt,oi,ws;function af(n,e,t){return ai.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ai.multiplyScalar(1/ai.w),ai.x=ws/t.width,ai.y=ws/t.height,ai.applyMatrix4(n.projectionMatrixInverse),ai.multiplyScalar(1/ai.w),Math.abs(Math.max(ai.x,ai.y))}function Qx(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,c=a;o<c;o++){sn.start.fromBufferAttribute(s,o),sn.end.fromBufferAttribute(r,o),sn.applyMatrix4(t);let l=new L,h=new L;oi.distanceSqToSegment(sn.start,sn.end,h,l),h.distanceTo(l)<ws*.5&&e.push({point:h,pointOnLine:l,distance:oi.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function ev(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),u=-e.near;oi.at(1,ri),ri.w=1,ri.applyMatrix4(e.matrixWorldInverse),ri.applyMatrix4(i),ri.multiplyScalar(1/ri.w),ri.x*=r.x/2,ri.y*=r.y/2,ri.z=0,th.copy(ri),nh.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(tn.fromBufferAttribute(c,d),nn.fromBufferAttribute(l,d),tn.w=1,nn.w=1,tn.applyMatrix4(nh),nn.applyMatrix4(nh),tn.z>u&&nn.z>u)continue;if(tn.z>u){let b=tn.z-nn.z,P=(tn.z-u)/b;tn.lerp(nn,P)}else if(nn.z>u){let b=nn.z-tn.z,P=(nn.z-u)/b;nn.lerp(tn,P)}tn.applyMatrix4(i),nn.applyMatrix4(i),tn.multiplyScalar(1/tn.w),nn.multiplyScalar(1/nn.w),tn.x*=r.x/2,tn.y*=r.y/2,nn.x*=r.x/2,nn.y*=r.y/2,sn.start.copy(tn),sn.start.z=0,sn.end.copy(nn),sn.end.z=0;let x=sn.closestPointToPointParameter(th,!0);sn.at(x,rf);let p=Qi.lerp(tn.z,nn.z,x),f=p>=-1&&p<=1,C=th.distanceTo(rf)<ws*.5;if(f&&C){sn.start.fromBufferAttribute(c,d),sn.end.fromBufferAttribute(l,d),sn.start.applyMatrix4(a),sn.end.applyMatrix4(a);let b=new L,P=new L;oi.distanceSqToSegment(sn.start,sn.end,P,b),t.push({point:P,pointOnLine:b,distance:oi.origin.distanceTo(P),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var la=class extends Bt{constructor(e=new Ss,t=new Ii({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)nf.fromBufferAttribute(t,a),sf.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+nf.distanceTo(sf);let r=new Ms(s,2,1);return e.setAttribute("instanceDistanceStart",new Bn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Bn(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;oi=e.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;ws=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Jo.copy(o.boundingSphere).applyMatrix4(a);let l;if(i)l=ws*.5;else{let u=Math.max(s.near,Jo.distanceToPoint(oi.origin));l=af(s,u,c.resolution)}if(Jo.radius+=l,oi.intersectsSphere(Jo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Zo.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=ws*.5;else{let u=Math.max(s.near,Zo.distanceToPoint(oi.origin));h=af(s,u,c.resolution)}Zo.expandByScalar(h),oi.intersectsBox(Zo)!==!1&&(i?Qx(this,t):ev(this,s,t))}};var es=["en","fr","ca","es"];var tv={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function uf(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of tv[e]||es)if(n[t])return n[t];return""}var ha={en:{all:"All",postedIn:"Filed under",visit:"Visit the site:",who:"Who worked on this project?",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",close:"Close",soundOn:"Sound on",soundOff:"Mute",sent:"Your slogan is now scrolling at the top.",bsLabel:"Type your bullshit slogan, then press Enter"},fr:{all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",who:"Qui a travaill\xE9 sur ce projet ?",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",sent:"Ton slogan d\xE9file en haut de la page.",bsLabel:"Tape ton bullshit slogan, puis Entr\xE9e"},ca:{all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",who:"Qui hi ha treballat?",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",sent:"El teu esl\xF2gan ja passa a dalt de la p\xE0gina.",bsLabel:"Escriu el teu bullshit slogan i prem Retorn"},es:{all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",who:"\xBFQui\xE9n ha trabajado en este proyecto?",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",sent:"Tu eslogan ya pasa arriba de la p\xE1gina.",bsLabel:"Escribe tu bullshit slogan y pulsa Intro"}},nv={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},sh={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function ih(){return Object.fromEntries(es.map(n=>[n,""]))}function Es(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:es.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||ih(),e.sub=e.sub||ih(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||ih(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=nv[t.layout]?t.layout:"carousel",t.card=sh[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(es.map(s=>[s,t[i]||""]))),es.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit="")}),t.spots=Array.isArray(t.spots)?t.spots.filter(oh):[],t.published===void 0&&(t.published=!0)}),n}function rh(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function ht(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var iv=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function ah(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!iv.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Qo(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var oh=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function ts(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function ch(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function of(n){try{let e=await ch();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function cf(n,e){let t=await ch();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function lf(n){try{let e=await ch();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var jo=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Es(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Es(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Ko=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await of("demo:content:v6");if(e)return Es(e);if(window.HC_CONTENT)return Es(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Es(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await lf("demo:file:"+i.path);continue}await cf("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await cf("demo:content:v6",e),"demo"}async reset(){await lf("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await of("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},hf=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],ec=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],sv=["font","size","lh","weight","italic","ls","upper"],df=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function rv(n){let e=hf.find(i=>i.id===n);if(e)return e.css;let t=df(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:hf[0].css}function Ni(n,e){let t=ec.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...sv,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=rv(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function ff(n){let e=[],t=[],i=[];for(let s of ec){let r=n&&n.typo&&n.typo[s.id]||{},a=Ni(n,s.id),o=l=>r[l]!==void 0&&r[l]!==""&&r[l]!==null&&r[l]!==s[l];if(s.vars){o("font")&&e.push(`:root { ${s.vars.map(l=>`${l}: ${a.css};`).join(" ")} }`);continue}if(!s.sel)continue;let c=[];if(o("font")&&c.push(`font-family: ${a.css}`),o("size")&&c.push(s.clamp?`font-size: clamp(${Math.round(a.size*s.clamp[0])}px, ${(a.size/s.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(o("lh")||o("size")&&!s.clamp&&!o("lh")&&s.lh)&&c.push(`line-height: ${o("lh")?a.lh:+(s.lh*a.size/s.size).toFixed(1)}px`),o("weight")&&c.push(`font-weight: ${a.weight}`),o("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),o("ls")&&c.push(`letter-spacing: ${a.ls}em`),o("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${s.sel.join(", ")} { ${c.join("; ")} }`),s.mob&&(o("size")||o("lh"))){let l=o("lh")?a.lh:s.lh*a.size/s.size;t.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob)}px; line-height: ${Math.round(l*s.mob)}px }`),i.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob*.9)}px; line-height: ${Math.round(l*s.mob*.9)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) and (min-width: 701px) { ${i.join(" ")} }`),e.join(`
`)}function pf(n){let e=new Map;for(let t of ec){let i=Ni(n,t.id),s=df(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function mf(n){let e=new Set;for(let t of ec){let i=Ni(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function gf(n,e){let t=Ni(e,"logo"),i=document.createElement("canvas");i.width=i.height=240;let s=i.getContext("2d");s.fillStyle=n,s.beginPath(),s.arc(120,120,112,0,Math.PI*2),s.fill(),s.fillStyle="#111",s.beginPath(),s.arc(120,120,88,0,Math.PI*2),s.fill();let r=String(t.text??"hc").slice(0,4);s.fillStyle="#fff",s.textAlign="center",s.textBaseline="alphabetic",s.font=`${t.italic?"italic ":""}${t.weight||400} ${Math.max(8,+t.size||38)*2}px ${t.css}`;let a=s.measureText(r),o=(a.actualBoundingBoxAscent||t.size*1.4)-(a.actualBoundingBoxDescent||0);return s.fillText(r,120,120+o/2),i.toDataURL("image/png")}var _f=window.HC_BASE||"",ac=window.HC_MODE==="demo"?new Ko(_f):new jo(_f),ns=window.HC_ASSETS||null,av=location.protocol==="file:",fn=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,Hn=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return fn&&fn.files&&fn.files[e]?fn.files[e]:ns&&ns[e]&&ns[e].startsWith("data:")?ns[e]:ac.url(e)};async function ov(n){if(ns&&ns[n]&&!ns[n].startsWith("data:"))return ns[n];let e=await fetch(Hn(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var ft=null,Fi="en",st=n=>uf(n,Fi),zt=n=>(ha[Fi]||ha.en)[n],cv=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},uc={zoom:2,focus:300},lv=.08,yf={};function Bf(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=yf[t]}):(e.forEach(t=>{yf[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var yh=class{constructor(e){this.section=e,this.all=rh(ft,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:{en:ha.en.all,fr:ha.fr.all}},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.section.perPage),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?st(e.label):""}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}},ie={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Zt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new yh(this.section.def)}},Zt=[],yt={x:0,y:0,z:0,zoom:uc.zoom},jn={x:0,y:0,z:0},Ui=0,fi=[],hv={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function xn(n,e,t,i={}){for(let r of fi)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:Ui+(i.delay||0),ease:hv[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return fi.push(s),s}var dc=(n,e)=>xn({},n,{},{onComplete:e,ease:"linear"});function ui(n){for(let e=fi.length-1;e>=0;e--)fi[e].obj===n&&fi.splice(e,1)}function fc(n){return fi.some(e=>e.obj===n&&Ui>=e.start)}function zf(n,e){if(!e&&Ui<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(Ui-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function uv(){for(let n of fi.slice())if(zf(n,!1)){let e=fi.indexOf(n);e>=0&&fi.splice(e,1),n.onComplete&&n.onComplete()}}function dv(){fi.splice(0).forEach(n=>zf(n,!0))}function fv(n,e,t,i,s,r,a){ui(yt),xn(yt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),kf(i,s,r,a)}function kf(n,e,t,i){ui(jn),xn(jn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function pv(n,e,t,i){ui(yt),xn(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var pc=1,wn=n=>n<=1?1:1-Math.pow(1-1/n,pc),pi=Math.PI/180,xh=(n,e,t)=>new L(n,e,-t),Ts=(n,e,t)=>[-n,e,t],Pn=document.getElementById("stage"),va=new Kr({canvas:Pn,antialias:!0});va.setPixelRatio(Math.min(window.devicePixelRatio||1,2));va.setClearColor(16777215,1);var Ps=new dr;Ps.add(new Do(16777215,14211288,2.2));var Hf=new gr(16777215,1.2);Hf.position.set(300,800,500);Ps.add(Hf);var $n=new Vt(60,1,1,6e4),Vf=new Ii({color:oe.lineColor,linewidth:oe.lineThickness}),vh=new Ii({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),Gf=new Ii({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),oc=new Ii({color:oe.locatorColor,linewidth:1.3}),Wf=[Vf,vh,Gf,oc],Xf=new ra;Xf.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Hn(n));var lh=new Map;function br(n){return n?av&&!/^(data:|blob:|https?:)/.test(Hn(n))?Promise.reject(new Error("local")):(lh.has(n)||lh.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(Hn(n))&&(i.crossOrigin="anonymous"),i.onload=()=>e(i),i.onerror=t,i.src=Hn(n)})),lh.get(n)):Promise.reject(new Error("no image"))}function qf(n){return n.colorSpace=Ft,n.anisotropy=Math.min(8,va.capabilities.getMaxAnisotropy()),n}var Vn=0,Rn=0,Zn=!1,mc=()=>Zn,Yf=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},En=()=>{let n=ft.settings.accent||"#ffcc00";return mc()?Yf(n):n},Jn='Georgia, Gelasio, "Times New Roman", serif',di='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',Lh=1,Oi=n=>Math.round(n*Lh);function Tr(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...ft?mf(ft.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}function $f(){let n=ft.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=ff(n);e.textContent!==t&&(e.textContent=t);let i=pf(n);document.querySelectorAll("link[data-hc-font]").forEach(s=>{i.includes(s.href)||s.remove()}),i.forEach(s=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(s)}"]`)){let r=document.createElement("link");r.rel="stylesheet",r.href=s,r.dataset.hcFont="",document.head.appendChild(r)}}),Jn=Ni(n,"card").css,di=Ni(n,"cardsm").css,Lh=Math.max(.5,Math.min(2,(+Ni(n,"card").scale||100)/100))}function is(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function Kn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),qf(new na(s))}function Mr(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,c=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-c)/2,o,c,t,i,s,r),mc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Zf=n=>String(n).split(/[\s&]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("");function Jf(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function mv(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}async function gv(n,e,t){let i=n.thumb?await br(n.thumb).catch(()=>null):null,s=n.thumbBack?await br(n.thumbBack).catch(()=>null):null;await Tr();let r=c=>{if(i){Mr(c,i,0,0,e,t);let u=Af(n,n.media[0]&&n.media[0].credit);if(u){c.font=`9px ${di}`;let d=u;for(;c.measureText(d).width>e-14&&d.length>4;)d=d.slice(0,-2)+"\u2026";let m=c.createLinearGradient(0,t-26,0,t);m.addColorStop(0,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,.75)"),c.save(),mc()&&(c.filter="invert(1)"),c.fillStyle=m,c.fillRect(0,t-26,e,26),c.restore(),c.fillStyle=mc()?"#000":"#fff",c.textBaseline="bottom",c.fillText(d,7,t-6)}return}c.fillStyle="#111",c.fillRect(0,0,e,t),c.textBaseline="top",c.fillStyle=En(),c.fillRect(16,18,18,2),c.fillStyle="#fff",c.font=`${Oi(24)}px ${Jn}`;let l=is(c,st(n.title),e-32).slice(0,3);l.forEach((u,d)=>c.fillText(u,16,30+d*28)),c.fillStyle="#8c8c8c",c.font=`${Oi(13)}px ${Jn}`,is(c,st(n.subtitle),e-32).slice(0,2).forEach((u,d)=>c.fillText(u,16,38+l.length*28+d*16));let h=Af(n,n.media[0]&&n.media[0].credit);if(c.fillStyle=En(),c.font=`10px ${di}`,c.fillText([n.date,st(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),16,t-(h?36:22)),h){c.font=`9px ${di}`;let u=h;for(;c.measureText(u).width>e-32&&u.length>4;)u=u.slice(0,-2)+"\u2026";c.fillStyle="#2a2a2a",c.fillRect(0,t-20,e,20),c.fillStyle="#9a9a9a",c.textBaseline="middle",c.fillText(u,16,t-10)}},a=Kn(e,t,r,2),o=s?Kn(e,t,c=>Mr(c,s,0,0,e,t),2):Kn(e,t,Jf(r),1.5);return[a,o]}async function _v(n,e,t){let i=n.thumb?await br(n.thumb).catch(()=>null):null,s=n.thumbBack?await br(n.thumbBack).catch(()=>null):null;await Tr();let r=a=>{if(i){Mr(a,i,0,0,e,t);return}a.fillStyle="#1b1b1b",a.fillRect(0,0,e,t),a.fillStyle="#fff",a.font=`${Math.round(t*.42*Lh)}px ${Jn}`,a.textAlign="center",a.textBaseline="middle",a.fillText(Zf(st(n.title)),e/2,t*.45),a.fillStyle=En(),a.fillRect(e/2-8,t*.78,16,1.5)};return[Kn(e,t,r,3),s?Kn(e,t,a=>Mr(a,s,0,0,e,t),3):Kn(e,t,Jf(r),2)]}async function yv(n,e,t){let i=n.thumb?await br(n.thumb).catch(()=>null):null;await Tr();let s=st(n.title).trim(),r=i?72:18,a=e-r-14,o=Kn(e,t,l=>{l.fillStyle="#333",l.fillRect(0,0,e,t),i?Mr(l,i,13,12.75,53,53):(l.fillStyle=En(),l.fillRect(18,14,14,2)),l.fillStyle="#fff",l.font=`${Oi(21)}px ${Jn}`,l.textBaseline="top",is(l,s,a).slice(0,3).forEach((h,u)=>l.fillText(h,r,(i?12:20)+u*22))}),c=Kn(e,t,mv(e,l=>{l.fillStyle="rgba(255,255,255,.7)",l.fillRect(0,0,e,t),l.fillStyle="#c4c4c4",l.font=`${Oi(21)}px ${Jn}`,l.textBaseline="top",is(l,s,a).slice(0,3).forEach((h,u)=>l.fillText(h,r,(i?9:17)+u*22))}));return[o,c]}async function xv(n,e,t){let i=n.thumb?await br(n.thumb).catch(()=>null):null;await Tr();let r=Kn(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),Mr(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=En(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${Oi(12)}px ${Jn}`,a.textAlign="center",a.textBaseline="top",a.fillText(st(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var xf={image:gv,portrait:_v,text:yv,place:xv};function tc(n,e){return Tr().then(()=>e==="place"?Kn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=`${Oi(44)}px ${Jn}`,t.fillText(st(n.title)+".",32,18),t.fillStyle="#979797",t.font=`${Oi(18)}px ${Jn}`,is(t,st(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.fillStyle=En(),t.font=`14px ${di}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",Qo(st(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.fillStyle=En(),t.font=`15px ${di}`,t.fillText(st(n.place),32,260)},1.5):Kn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${Oi(20)}px ${Jn}`;let i=is(t,st(n.title)+".",166).slice(0,2);i.forEach((r,a)=>t.fillText(r,18,14+a*22));let s=20+i.length*22;t.fillStyle="#8c8c8c",t.font=`${Oi(15)}px ${Jn}`,st(n.subtitle).split(/(?<=\.)\s+/).forEach(r=>is(t,r,166).forEach(a=>{s<150&&(t.fillText(a,19,s),s+=18)})),t.fillStyle="#bbb",t.font=`11px ${di}`,Qo(st(n.body)).join(" ").split(/\s+/).length>1&&is(t,Qo(st(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor((176-s)/14))).forEach(r=>{t.fillText(r,19,s+4),s+=14}),st(n.place)&&(t.fillStyle=En(),t.font=`11px ${di}`,t.fillText(st(n.place).toUpperCase(),19,180))}))}function vv(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${di}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${di}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let c=new So(new Qr({map:qf(new na(s)),transparent:!0}));c.center.set(.5,0);let l=20;return c.scale.set(l*a/o,l,1),c.renderOrder=2,c}var ci=document.createElement("div");ci.id="net-tip";ci.className="ui";ci.hidden=!0;document.body.appendChild(ci);function jf(n,e,t){ci.innerHTML=`<b>${ht(n.city||"")}</b>${n.titles.map(s=>`<span>${ht(s)}</span>`).join("")}`,ci.hidden=!1;let i=ci.getBoundingClientRect();ci.style.left=Math.min(e+14,Vn-i.width-10)+"px",ci.style.top=Math.max(10,t-i.height-12)+"px"}function Ih(){ci.hidden=!0}var bh=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new hn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=ft.models.find(l=>l.id===this.def.model)||ft.models[0];if(!t)return;let i=await ov(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new hn;if(o.add(a),a.traverse(l=>{if(!l.isMesh)return;let h=u=>{let d=u.map||u.emissiveMap||null;return d?new dn({map:d}):t.untextured==="white"?new vs({color:15921906}):t.untextured==="black"?new vs({color:2236962}):new dn({color:oe.locatorColor,wireframe:!0})};l.material=Array.isArray(l.material)?l.material.map(h):h(l.material),this.blockers.push(l)}),t.scaleMode==="fit"){o.updateMatrixWorld(!0);let l=new en().setFromObject(o),h=l.getSize(new L),u=(t.height||420)/Math.max(h.y,1e-6);o.scale.setScalar(u),o.updateMatrixWorld(!0);let d=new en().setFromObject(o),m=d.getCenter(new L);o.position.set(-m.x,-d.min.y,-m.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let l=new en().setFromObject(o);l.max.y-l.min.y>oe.object3DMaxHeight&&o.scale.setScalar(oe.object3DMaxHeight/(l.max.y-l.min.y))}let c=new hn;c.rotation.y=(t.rotationY||0)*pi,c.add(o),this.container.add(c)}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(xh(this.p.x,0,this.p.z))}};function Kf(n,e){let t=new Ss;t.setPositions(n);let i=new la(t,e);return i.computeLineDistances(),i}var Mh=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new hn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t){let i=new xs(this.width,this.height),s=new Bt(i,new dn({map:e,side:On})),r=new Bt(i,new dn({map:t,side:un}));s.userData={post:this,face:"front"},r.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let a=this.width/2,o=this.height/2;this.frame=Kf([-a,-o,0,a,-o,0,-a,-o,0,-a,o,0,a,-o,0,a,o,0,-a,o,0,a,o,0],vh),this.group.add(s,r,this.frame),this.meshes.push(s,r),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...Ts(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*pi,t.rotation.x=-e.rotX*pi,t.rotation.z=e.rotZ*pi,t.scale.setScalar(Math.max(1e-4,e.scale))}selectIt(){this.frame&&(this.frame.material=Gf,dc(.8,()=>{this.frame&&(this.frame.material=vh)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),xn(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){ui(this.thumb);let i=oe.cameraDistance,s={x:-i*Math.sin(ie.degreeCamera),z:-i*Math.cos(ie.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,c=Math.hypot(a,o)||1;return xn(this.thumb,t,{x:s.x+a*e/c,y:r.y,z:s.z+o*e/c,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/c,z:o/c}}}moveBack(e=0){ui(this.thumb);let t=this.p2;xn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){xn(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>xn(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}dispose(){ui(this.thumb),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!Wf.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function hh(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*pi;i===0&&(i=2*Math.PI);let s=(i-ie.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),ie.selected=e,ie.cameraY=t.p2.y,ie.degreeCamera+=s,t.selectIt(),!0}function uh(n,e,t){ie.degreeCamera%=2*Math.PI,ie.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(ie.selected=e,ie.degreeCamera=Math.PI,i.ready&&(ie.cameraY=i.p2.y,i.selectIt(),t(i)))}var dh=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||fc(r.thumb))return;let o=r.thumb,c=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+c)*wn(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*wn(2*i))}),vf={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/pi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>hh(n,e),move:(n,e,t,i)=>dh(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>uh(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>dh(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,a=y=>{let x=n.angle*(y+1);return x-Math.cos(x)*n.angle/2},o=t,c;t+1>s?(o=2*Math.round(i/2)-t-1,c=Math.pow(-1,o)):c=Math.pow(-1,t+1);let l=r.planeDistance*.7+e.width+c*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,d=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:l*Math.cos(a(o)),y:u*Math.sin(a(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{hh(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*wn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*wn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return ts(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t);return{x:i[0]+s[0],y:(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1)),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>uh(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||fc(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*wn(2*oe.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/pi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>hh(n,e),move:(n,e,t,i)=>dh(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>uh(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||fc(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*wn(2*oe.cameraEaseSpeed)})}}},bf=new L,Mf=new L,Sh=class{constructor(e){this.section=e,this.def=e.def,this.L=vf[this.def.layout]||vf.carousel,this.card=this.def.card,this.posts=ie.data.posts.slice(),this.n=this.posts.length,[this.w,this.h]=sh[this.card].size,this.container=new hn,this.container.position.copy(e.container.position),Ps.add(this.container),this.postViews=this.posts.map((t,i)=>new Mh(this,this.w,this.h,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Zt.map(u=>u.def.id)),t=new Map,i=(u,d,m)=>{if(!oh(u))return;let y=(+u.lat).toFixed(1)+","+(+u.lon).toFixed(1),x=t.get(y);x||t.set(y,x={loc:u,city:u.city||"",titles:[],base:!1}),d&&!x.titles.includes(d)&&x.titles.push(d),m&&(x.base=!0)};if(rh(ft,this.def.id).forEach(u=>i(u.location,st(u.title),!0)),ft.posts.forEach(u=>{u.published&&e.has(u.section)&&u.section!==this.def.id&&u.spots.forEach(d=>i(d,st(u.title)))}),!t.size)return;oc.color.set(En());let s=50,r=new hn,a=[...t.values()],o=a.filter(u=>u.base),c=new Co(1,14,10),l={on:new dn({color:En()}),base:new dn({color:1118481})};this.net={group:r,mats:l,items:[],hits:[],start:Ui+(oe.planeSpeed>0?.5:-60),dispose:[c,l.on,l.base]},a.forEach(u=>{u.xz=ts(u.loc)}),a.forEach(u=>{u.from=u.base?null:o.length?o.map(d=>[d,Math.hypot(ts(d.loc)[0]-u.xz[0],ts(d.loc)[1]-u.xz[1])]).sort((d,m)=>d[1]-m[1])[0][0]:null,u.d=u.from?Math.hypot(ts(u.from.loc)[0]-u.xz[0],ts(u.from.loc)[1]-u.xz[1]):0}),a.sort((u,d)=>d.base-u.base||u.d-d.d);let h=[];a.forEach((u,d)=>{let[m,y]=u.xz,x=u.base?0:.15+d*.07,p=new Bt(c,u.base?l.base:l.on);p.scale.setScalar(u.base?7:4+Math.min(3,u.titles.length)),p.position.set(...Ts(m,s,y)),r.add(p),p.userData={netNode:u},this.net.hits.push(p);let f=null,C=0;if(u.from){let[P,U]=ts(u.from.loc),I=s+18+u.d*.32,N=2*I-s,j=(P+m)/2,E=(U+y)/2;C=Math.max(12,Math.min(48,Math.round(u.d/6)));let R=le=>{let O=1-le;return Ts(O*O*P+2*O*le*j+le*le*m,O*O*s+2*O*le*N+le*le*s,O*O*U+2*O*le*E+le*le*y)},Z=[];for(let le=0;le<C;le++)Z.push(...R(le/C),...R((le+1)/C));let ae=new Ss;ae.setPositions(Z),f=new la(ae,oc),f.computeLineDistances(),ae.instanceCount=0,r.add(f)}let b=null;u.city&&!h.some(P=>Math.abs(P[0]-m)<80&&Math.abs(P[1]-y)<22)&&(b=vv(u.city.toUpperCase()+(u.titles.length>1&&!u.base?" \xB7 "+u.titles.length:""),u.base),b.position.set(...Ts(m,s+9,y)),r.add(b),h.push([m,y])),this.net.items.push({dot:p,arc:f,segs:C,label:b,delay:x,base:u.base})}),this.container.add(r)}async openPosts(){for(let e=0;e<this.n;e++){let t;try{t=await xf[this.card](this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=Ui+lv;for(;Ui<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}}animeOpenPost(e,t){let i=this.L;if(!i.keep){let c=i.position.call(i,this,e,t);e.setPosition(c.x,c.y,c.z,c.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,xn(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:o}),xn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,xn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...Ts(...i),...Ts(...s)],a=this.lines[t];a?a.geometry.setPositions(r):(a=this.lines[t]=Kf(r,Vf),this.container.add(a))}async openInfo(e,t,i){let s=await tc(this.posts[t],"place");if(!this.alive)return;let r=new Bt(new xs(165,130),new dn({map:s,side:bn}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),xn(a.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),dc(i,()=>{r.visible=!0})}async openPost3D(){let e=ie.selected,t=this.postViews[e];if(!t||!t.ready)return;let{cl:i,dir:s}=t.moveToCamera(60,oe.tween);this.focusInfo||(this.focusInfo={mesh:new Bt(new xs(90,90),new dn({side:bn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let r=this.focusInfo;r.mesh.visible=!1;let a=await tc(this.posts[e],"person");if(!this.alive)return;r.mesh.material.map&&r.mesh.material.map.dispose(),r.mesh.material.map=a,r.mesh.material.needsUpdate=!0;let o=this.h/90;r.mesh.scale.setScalar(o),dc(oe.tween,()=>{!ie.postOpen||ie.selected!==e||(r.target=t,r.k=0,r.mesh.visible=!0,ui(r),xn(r,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[ie.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(ui(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;ui(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(ie.degreeCamera/pi)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=ie.selected,s=this.postViews[ie.selected]&&this.postViews[ie.selected].ready?t(this.postViews[ie.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),ie.selected=i}goNext(){return ie.selected+1>=this.n?0:ie.selected+1}goPrev(){return ie.selected-1<=-1?this.n-1:ie.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net)for(let e of this.net.items){let t=Math.max(0,Math.min(1,(Ui-this.net.start-e.delay)/.9)),i=1-(1-t)*(1-t);e.arc&&(e.arc.geometry.instanceCount=Math.round(i*e.segs));let s=e.base||t>=1;e.dot.visible=s,e.label&&(e.label.visible=s)}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...Ts(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*pi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),bf.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Mf.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(bf).add(Mf)}}async retexture(){this.net&&(oc.color.set(En()),this.net.mats.on.color.set(En()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await xf[this.card](this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){new Set(s).forEach(a=>a.dispose());return}new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose());let r=this.infos[t];if(r){let a=await tc(this.posts[t],"place");if(!this.alive){a.dispose();return}let o=e(r.mesh,a);o&&o.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&ie.postOpen){let t=await tc(this.posts[ie.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(ui(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Ih(),Ps.remove(this.container)}},As=[],lt=null,yr=oe.cameraEaseSpeed,Sr=!1,Qn=!1,ss=0,rs=0,cc=0,lc=0,ba=!1,mi=!1,Ar=()=>As[ie.currentSection];function bv(){let n=oe.cameraHeight;ie.cameraY=ie.cameraY+n/7<=3*n?ie.cameraY+n/7:n*3}function Mv(){let n=oe.cameraHeight;ie.cameraY=ie.cameraY-n/7>=n/7?ie.cameraY-n/7:n/7}function Sf(){let n=Ar();yt.x=n.p.x+oe.cameraDistance*Math.sin(ie.actualDeg),yt.z=n.p.z+oe.cameraDistance*Math.cos(ie.actualDeg)}function Nh(){As.forEach((n,e)=>{e===ie.currentSection?n.container.parent||Ps.add(n.container):n.container.parent&&Ps.remove(n.container)}),Sr=!1,Qn=!1,Pn.classList.remove("dragging"),lt&&lt.destroy(),lt=new Sh(Ar()),gc(ie.selected),ie.actualDeg=ie.degreeCamera,Sv()}function Sv(){let n=Ar();ie.cameraY=oe.cameraHeight,fv(oe.cameraDistance*Math.sin(ie.degreeCamera)+n.p.x,ie.cameraY,oe.cameraDistance*Math.cos(ie.degreeCamera)+n.p.z,n.p.x,oe.cameraTargetHeight,n.p.z,oe.cameraSpeed)}function gc(n){ie.selected=n,lt&&lt.focus(n)}function fh(n){!lt||!lt.n||(Qn=!0,lt.checkPostSelected(),yr=oe.cameraKeyboardSpeed,gc(n==="NEXT"?lt.goNext():lt.goPrev()))}function Dh(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Rn<680?1e3-Rn:320)*t)}function Uh(){if(Qn=!1,Dh(),!ba)return;let n=Ar();ie.postOpen&&ie.section.def.open==="focus3d"&&lt&&lt.postViews[ie.selected]&&lt.postViews[ie.selected].moveToCamera(100,0),pv(n.p.x+oe.cameraDistance*Math.sin(ie.actualDeg),yt.y,n.p.z+oe.cameraDistance*Math.cos(ie.actualDeg),oe.cameraSpeed/2)}function wv(){if(!mi){Math.abs(yt.y-ie.cameraY)>.007&&!fc(yt)&&(yt.y-=(yt.y-ie.cameraY)*wn(oe.cameraEaseSpeed));return}if(Sr){yr=oe.cameraEaseSpeed;let n=ie.degreeCamera;ie.degreeCamera+=(ss-cc)/150,ie.actualDeg-=(ie.actualDeg-n)*wn(yr),Sf(),ie.cameraY+=(rs-lc)*2;let e=oe.cameraHeight;ie.cameraY<e/3?ie.cameraY=e/3:ie.cameraY>e*4&&(ie.cameraY=4*e),yt.y-=(yt.y-ie.cameraY)*wn(yr),oe.animationMode&&lt&&lt.movePosts((cc-ss)/Math.max(pc,.25),(lc-rs)/Math.max(pc,.25),yr),cc=ss,lc=rs}else Qn?(Math.abs(ie.actualDeg-ie.degreeCamera)<=.007&&(Qn=!1),ie.actualDeg-=(ie.actualDeg-ie.degreeCamera)*wn(oe.cameraEaseSpeed),Sf(),yt.y-=(yt.y-ie.cameraY)*wn(yr),oe.animationMode&&lt&&lt.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-ie.cameraY)>.007&&(yt.y-=(yt.y-ie.cameraY)*wn(oe.cameraEaseSpeed))}function Ev(){yt.zoom=6;let e=lt&&lt.postViews[0]&&lt.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,jn.y=e+100,kf(jn.x,oe.cameraTargetHeight,jn.z,1),mi=!1,xn(yt,1,{zoom:uc.zoom},{ease:"expoOut"}),setTimeout(()=>{mi=!0},1*1e3+50)}var ph=new L,mh=new L,ua=new L;function Tv(){ph.copy(xh(yt.x,yt.y,yt.z)),mh.copy(xh(jn.x,jn.y,jn.z)),ua.subVectors(mh,ph),ua.lengthSq()<1e-6&&ua.set(0,0,-1),ua.normalize(),$n.position.copy(ph).addScaledVector(ua,-uc.focus),$n.lookAt(mh);let n=Math.min(1,Vn/900),e=2*Math.atan(Rn/2/(yt.zoom*uc.focus*n))/pi;Math.abs($n.fov-e)>1e-4&&($n.fov=e,$n.updateProjectionMatrix())}function Qf(){Vn=window.innerWidth,Rn=window.innerHeight,va.setSize(Vn,Rn,!1),$n.aspect=Vn/Rn,$n.updateProjectionMatrix(),Wf.forEach(n=>n.resolution.set(Vn,Rn))}var kn=document.getElementById("menu"),wr=document.getElementById("slogan"),ep=document.getElementById("langs"),Sc=[];function Av(){kn.innerHTML="",Sc=Zt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=st(n.def.name),i.addEventListener("click",()=>{e!==ie.currentSection&&mi&&Tc(e)}),t.appendChild(i),kn.appendChild(t),i}),kn.style.setProperty("--n",Zt.length),tp()}function tp(){Sc.forEach((n,e)=>n.setAttribute("aria-current",String(e===ie.currentSection)))}function Cv(){Sc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),kn.hidden=!1,ep.hidden=!1,setTimeout(()=>kn.classList.add("ready"),(Zt.length+1)*200)}var Rv=1.44;function wh(n){let e=n==="project"?{width:522,x:79,colW:362}:{width:389,x:17,colW:353},t=(Vn-2*oe.margin)/(ut.scale||1);if(t>=e.width)return e;let i=Math.max(240,Math.floor(t)),s=n==="project"?26:17;return{width:i,x:s,colW:i-2*s}}function np(){let n=wr.offsetTop+wr.offsetHeight+2*oe.margin,e=ut.height+40,t=(kn.offsetHeight||90)+70,i=Math.max(.5,Math.min(Rv,(Rn-n-t)/e));ut.scale=i,Jt.style.top=n+"px",Jt.style.transform=i!==1?`scale(${i.toFixed(3)})`:"",Jt.style.width=i!==1?Math.ceil((Vn-oe.margin)/i)+"px":"",Jt.style.height=Math.ceil(e)+"px",document.body.classList.toggle("post-cramped",Rn-(n+e*i)<kn.offsetHeight+60)}function _c(){if(ie.postOpen||document.body.classList.remove("post-cramped"),ie.postOpen&&ut.open&&ut.height>100){let n=wr.offsetTop+wr.offsetHeight+ut.height*(ut.scale||1)+2*oe.margin+30;n=Math.min(n,Rn-kn.offsetHeight-40),kn.style.left=oe.margin+"px",kn.style.top=n+"px"}else kn.style.left=3*oe.margin+"px",kn.style.top=Math.round(Rn/1.4)+"px"}var wf=n=>gf(n,ft.settings);function Oh(){let n=ft.settings;$f(),document.documentElement.lang=Fi,document.documentElement.classList.toggle("neg",Zn),document.title=n.name||"Hand Coded";let e=n.taglines&&(n.taglines[Fi]||n.taglines.en)||[],t=e.length?`<b class="wm">${ht(e[0])}</b>${e.slice(1).map(h=>`<span>${ht(h)}</span>`).join("")}`:ht(n.name);wr.innerHTML=t,document.getElementById("home-slogan").innerHTML=t;let i=Zn?"#ffffff":n.accent||"#ffcc00",s=n.logo?Hn(n.logo):wf(i);if(!n.logo&&document.fonts){let h=Ni(n,"logo"),u=`${h.italic?"italic ":""}${h.weight||400} 76px ${h.css}`;document.fonts.check(u)||document.fonts.load(u).then(()=>{ft.settings.logo||["logo","home-logo"].forEach(d=>{document.getElementById(d).src=wf(Zn?"#ffffff":ft.settings.accent||"#ffcc00")})}).catch(()=>{})}["logo","home-logo"].forEach(h=>{let u=document.getElementById(h);u.src=s,u.classList.toggle("raw",!n.logo)});let r=document.getElementById("logo"),a=n.negativeToggle!==!1;r.classList.toggle("toggle",a),a?(r.setAttribute("role","button"),r.tabIndex=0,r.setAttribute("aria-pressed",String(Zn)),r.alt=r.title=zt(Zn?"toPos":"toNeg")):(r.removeAttribute("role"),r.removeAttribute("tabindex"),r.removeAttribute("aria-pressed"),r.alt="",r.removeAttribute("title"));let o=document.getElementById("bs");o.placeholder=st(n.home.placeholder),o.setAttribute("aria-label",zt("bsLabel")),ip(),document.getElementById("bs-eg").textContent=st(n.home.example),document.getElementById("bs-sent").textContent&&(document.getElementById("bs-sent").textContent=zt("sent"));let c=document.getElementById("offices");c.innerHTML="",(n.offices||[]).forEach(h=>{let u=document.createElement("section");u.innerHTML=`<h3>${ht(st(h.name))}</h3>${(h.lines||[]).map(d=>`<p>${ht(d)}</p>`).join("")}${h.mail?`<p><a href="mailto:${ht(h.mail)}">${ht(h.mail)}</a></p>`:""}`,c.appendChild(u)}),(n.social||[]).forEach(h=>{if(!h.url)return;let u=document.createElement("section");u.innerHTML=`<h3>${ht(h.label)}</h3><p><a href="${ht(h.url)}" target="_blank" rel="noopener">${ht(h.url.replace(/^https?:\/\/(www\.)?/,""))}</a></p>`,c.appendChild(u)}),vr.textContent=st(n.home.enter)||zt("enter"),Uv(),document.querySelectorAll("[data-i18n]").forEach(h=>{h.textContent=zt(h.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",zt("keys")),yc.setAttribute("aria-label",zt("prev")),xc.setAttribute("aria-label",zt("next"));let l=n.langs&&n.langs.length?n.langs:es;[ep,document.getElementById("home-langs")].forEach(h=>{h.innerHTML="",!(l.length<2)&&l.forEach(u=>{let d=document.createElement("button");d.type="button",d.textContent=u.toUpperCase(),d.setAttribute("aria-pressed",String(u===Fi)),d.setAttribute("aria-label",zt("lang")+" "+u.toUpperCase()),d.addEventListener("click",()=>sp(u)),h.appendChild(d)})}),document.documentElement.style.setProperty("--accent",En()),document.documentElement.style.setProperty("--accent-raw",ft.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",Yf(ft.settings.accent||"#ffcc00")),Mp()}function ip(){let n=document.getElementById("bs");if(!n||!n.offsetWidth)return;n.style.fontSize="";let e=getComputedStyle(n),t=parseFloat(e.fontSize),i=n.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)-6,s=document.createElement("canvas").getContext("2d");s.font=`${e.fontWeight} ${t}px ${e.fontFamily}`;let r=parseFloat(e.letterSpacing)||0,a=s.measureText(n.placeholder).width+r*n.placeholder.length;a>i&&(n.style.fontSize=Math.max(16,Math.floor(t*i/a))+"px")}window.addEventListener("resize",()=>{Er||ip()});function sp(n){if(n!==Fi){Fi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(Oh(),ba){Sc.forEach((i,s)=>{i.textContent=st(Zt[s].def.name)}),zh();let e=ie.postOpen,t=ie.selected;Bi(),ie.selected=t,Nh(),e&&dc(.6,()=>Vh(t))}}}var Fh=document.getElementById("cats"),Bh=document.getElementById("cat-box"),Ef=document.getElementById("cat-list"),rp=document.getElementById("cat-name"),Eh=document.getElementById("cat-open"),yc=document.getElementById("pg-prev"),xc=document.getElementById("pg-next");function zh(){let n=ie.data,e=n.categoryList;Bh.hidden=e.length<=1,Ef.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=st(t.label),s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Tf(),Lv(t.id)}),i.appendChild(s),Ef.appendChild(i)}),rp.textContent=n.currentCatName,ap(),Tf()}function ap(){let n=ie.data;yc.disabled=!n.hasNewer(),xc.disabled=!n.hasOlder(),yc.hidden=xc.hidden=!n.hasNewer()&&!n.hasOlder()}function Tf(){Bh.classList.remove("open"),Eh.setAttribute("aria-expanded","false")}Eh.addEventListener("click",()=>{let n=Bh.classList.toggle("open");Eh.setAttribute("aria-expanded",String(n))});yc.addEventListener("click",()=>{mi&&dp("newer")});xc.addEventListener("click",()=>{mi&&dp("older")});var as=document.getElementById("kb"),kh=document.getElementById("kb-toggle"),op=null;function Th(){as.classList.add("open"),kh.setAttribute("aria-expanded","true")}function Ah(){as.classList.remove("open"),kh.setAttribute("aria-expanded","false")}kh.addEventListener("click",()=>{clearTimeout(op),as.classList.contains("open")?Ah():Th()});as.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>mp({code:n.dataset.k,preventDefault(){}})));function Di(n){let e=as.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function cp(){as.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var Hh=document.getElementById("whiteboard"),Jt=document.getElementById("post2d"),da=document.getElementById("strip");function Af(n,e){if(!n||ft.settings.signImages===!1)return"";let t=[st(n.title).trim(),(n.author||ft.settings.name||"").trim()].filter(Boolean);return e&&t.push(zt("photo")+" "+e.trim()),t.join(" \xB7 ")}var Pv=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),wc=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Ec=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},lp=n=>wc(n)?"youtube":Ec(n)?"vimeo":Pv(n)?"video":"image",ut={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,Jt.classList.remove("closing"),Jt.hidden=!1,np(),this.geomKey=JSON.stringify(wh("project")),this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit));else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:""),this.addText(n,"project"),t.slice(1).forEach(s=>this.addMedia(s.src,355,s.credit)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}if(n.link&&e!=="place"){let i=document.createElement("div");i.className="banda",i.innerHTML=`${ht(zt("visit"))} <a href="${ht(n.link)}" target="_blank" rel="noopener">${ht(n.link.replace(/^https?:\/\//,""))}</a>`,Jt.appendChild(i),this.banda=i,this.placeBanda()}this.layout(),this.x=0,this.finalpos=0,da.style.transform="translateX(0px)"},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,da.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addMedia(n,e=355,t="",i=!0){let s=lp(n);if(s==="youtube"||s==="vimeo"){this.addEmbed(n,s,e,t);return}let r=s==="video",a=this.addPanel("media",e,""),o=document.createElement(r?"video":"img");if(o.draggable=!1,o.style.height=e+"px",r){Object.assign(o,{src:Hn(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let l=document.createElement("button");l.type="button",l.className="play",l.setAttribute("aria-label",zt("play")),l.addEventListener("click",()=>{o.controls=!0,o.play().catch(()=>{}),l.remove()}),a.querySelector(".in").appendChild(l)}else o.src=Hn(n),o.alt="";let c=()=>{let l=Math.round(r?o.videoWidth*e/o.videoHeight:o.naturalWidth*e/o.naturalHeight);l&&(a.style.width=l+"px",this.layout())};o.addEventListener(r?"loadedmetadata":"load",c),o.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(l=>l!==a),this.layout())}),a.querySelector(".in").prepend(o)},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?wc(n):Ec(n),c=document.createElement("div");c.className="cover";let l=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:this.post&&this.post.thumb?Hn(this.post.thumb):"";if(l){let u=document.createElement("img");u.src=l,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),c.appendChild(u)}c.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",zt("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${o}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",c.replaceWith(u)}),c.appendChild(h),a.appendChild(c)},addText(n,e){let{width:t,x:i,colW:s}=wh(e),r=st(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let a=st(n.subtitle),o=ie.section.def,c=n.tags.map(x=>o.tags.find(p=>p.id===x)).filter(Boolean).map(x=>st(x.label)),l=c.length?`${ht(zt("postedIn"))} <span>${c.map(ht).join(", ")}</span>`:"",h=ht([n.date,st(n.place)].filter(Boolean).join(" | ")),u=ah(st(n.body)),d=document.createElement("div");d.className="txt",d.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(d),d.innerHTML=`<h2 class="ttl" style="position:static">${ht(r)}</h2>${a?`<p class="stl" style="position:static">${ht(a)}</p>`:""}`;let m=d.firstChild.offsetHeight,y=a?d.lastChild.offsetHeight+6:0;if(e==="project"){let x=34+m+6,p=34+m+y+20,f=Cf(u,s,[272-p,242],d);f.forEach((C,b)=>{let P=b===f.length-1;this.addPanel("txt",t,(b===0?`<h2 class="ttl" style="left:${i}px;top:34px;width:${s}px">${ht(r)}</h2>${a?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${ht(a)}</p>`:""}`:"")+`<div class="body" style="left:${i}px;top:${b===0?p:93}px;width:${s}px">${C}</div>`+(P?`<div class="fecha" style="left:${i}px;top:282px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:308px;width:${s}px">${l}</div>`:""))})}else{let x=13+m+4,p=13+m+y+10,f=p+20,C=f+18+20;Cf(u,s,[355-C-14,327],d).forEach((P,U)=>{this.addPanel("txt",t,(U===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${ht(r)}</h2>${a?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${ht(a)}</p>`:""}<div class="fecha" style="left:${i}px;top:${p}px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:${f}px;width:${s}px">${l}</div>`:"")+`<div class="body" style="left:${i}px;top:${U===0?C:14}px;width:${s}px">${P}</div>`)})}d.remove()},addTeam(n){let e=n.team.map(r=>ft.posts.find(a=>a.id===r)).filter(Boolean),t=e.map(r=>st(r.title)).concat(n.credits?[n.credits]:[]).join(", "),i=this.addPanel("team",576,`<h2 class="ttl">${ht(zt("who"))}</h2><div class="names">${ht(zt("leftToRight"))} <span>${ht(t)}.</span></div>`),s=i.querySelector(".in");e.forEach((r,a)=>{let o=document.createElement("button");o.type="button",o.className="face",o.style.left=69+a%6*59+"px",o.style.top=160+Math.floor(a/6)*55+"px",o.innerHTML=(r.thumb?`<img src="${ht(Hn(r.thumb))}" alt="" draggable="false">`:`<span class="mono">${ht(Zf(st(r.title)))}</span>`)+`<span class="tab">${ht(st(r.title))}.<small>${ht(st(r.subtitle))}</small></span>`,o.setAttribute("aria-label",st(r.title)),["pointerenter","focus"].forEach(c=>o.addEventListener(c,()=>o.classList.add("big"))),["pointerleave","blur"].forEach(c=>o.addEventListener(c,()=>o.classList.remove("big"))),s.appendChild(o)}),i.style.overflow="visible"},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Vn-2*oe.margin)/(this.scale||1)))),`<div class="cn">${ht(st(n.title))}.</div><div class="ac">${ht(st(n.subtitle))}</div><div class="site">${n.link?`<a href="${ht(n.link)}" target="_blank" rel="noopener">${ht(e)}</a>`:""}</div><div class="ad">${ah(st(n.body))}</div><div class="ct">${ht(st(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0,this.placeBanda()},placeBanda(){this.banda&&(this.banda.style.left=(Vn-2*oe.margin)/(this.scale||1)-this.banda.offsetWidth+"px")},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return Jt.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){da.querySelectorAll("video").forEach(n=>n.pause()),da.innerHTML="",this.panels=[],this.banda&&(this.banda.remove(),this.banda=null),Jt.hidden=!0,Jt.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){this.open&&(this.dragging?(this.finalpos+=(vc-this.xprev)*1.5,this.x-=(this.x-this.finalpos)*wn(oe.easing),this.xprev=vc):Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*wn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end),da.style.transform=`translateX(${Math.round(this.x)}px)`)}};function Cf(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){o=null,d.textContent.trim()&&a.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){o=null;return}d.nodeType===3&&!d.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(d.cloneNode(!0)))});let c=[],l=0,h=()=>t[Math.min(l,t.length-1)],u=()=>{c.push(s.innerHTML),s.innerHTML="",l++};for(let d of a){let m=d.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),d.nodeName==="UL"||d.nodeName==="OL"||d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}let y=[];(function f(C,b){C.childNodes.forEach(P=>{P.nodeType===3?P.textContent.split(/(\s+)/).forEach(U=>U&&y.push({w:U,path:b})):f(P,[...b,P])})})(d,[]);let x=document.createElement("p");s.appendChild(x);let p=({w:f,path:C})=>{let b=x;for(let P of C){let U=b.lastChild;(!U||U.nodeType!==1||U.dataset.src!==P.outerHTML)&&(U=P.cloneNode(!1),U.dataset.src=P.outerHTML,b.appendChild(U)),b=U}b.appendChild(document.createTextNode(f))};for(let f of y)if(p(f),s.offsetHeight>h()){let C=function b(P){return P.lastChild&&P.lastChild.nodeType===1?b(P.lastChild):P}(x);C.removeChild(C.lastChild),u(),x=document.createElement("p"),s.appendChild(x),f.w.trim()&&p(f)}}return(s.textContent.trim()||!c.length)&&c.push(s.innerHTML),c.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var vc=0,Cs=null;Jt.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(Cs={id:n.pointerId,x:n.clientX,y:n.clientY},vc=n.clientX)});Jt.addEventListener("pointermove",n=>{if(vc=n.clientX,!Cs||n.pointerId!==Cs.id||ut.dragging)return;let e=n.clientX-Cs.x,t=n.clientY-Cs.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){ut.dragging=!0,ut.xprev=Cs.x,ut.finalpos=ut.x;try{Jt.setPointerCapture(n.pointerId)}catch{}Jt.classList.add("grabbing")}});Jt.addEventListener("click",n=>{ut.justDragged&&(n.preventDefault(),n.stopPropagation(),ut.justDragged=!1)},!0);var hp=()=>{ut.dragging&&(ut.justDragged=!0,setTimeout(()=>{ut.justDragged=!1},0)),Cs=null,ut.dragging=!1,Jt.classList.remove("grabbing")};Jt.addEventListener("pointerup",hp);Jt.addEventListener("pointercancel",hp);Hh.addEventListener("pointerdown",()=>_a());function Tc(n=-1,e=0){dv(),n===-1&&(n=ie.currentSection||0),Bi(),ie.currentSection=n,ie.resetData(),ie.selected=e,Nh(),tp(),zh();try{history.replaceState(null,"","#"+ie.section.def.id)}catch{}}function up(){Bi(),ie.selected=0,Nh(),ap()}function dp(n){(n==="newer"?ie.data.newer():ie.data.older())&&up()}function Lv(n){ie.data.changeCategory(n),rp.textContent=ie.data.currentCatName,up(),zh()}function Vh(n){Bi(),ie.selected=n,fa()}function fa(){!lt||!ie.data.posts[ie.selected]||(Bi(),ie.postOpen=!0,ie.section.def.open==="strip"?(Hh.hidden=!1,ut.build(ie.data.posts[ie.selected],ie.section.def.card),Fh.classList.add("hidden"),Sr=!1,Pn.classList.remove("dragging"),Qn=!0,gc(ie.selected)):(Qn=!0,gc(ie.selected),lt.openPost3D()),_c())}function _a(){ie.postOpen&&(ie.postOpen=!1,ut.open?(ut.close(),Hh.hidden=!0,Fh.classList.remove("hidden")):lt&&lt.closePost3D(),_c())}function Bi(){ie.postOpen&&_a()}function Iv(){Bf(!oe.animationMode),cp(),lt&&lt.resetPostPosition(),Qn=!0}function fp(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion*1.5),Uh())}function pp(){oe.cameraDistanceProportion>oe.cameraZoomMin&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),Uh())}var Rf=!1;function mp(n){if(!mi)return;Rf||(Rf=!0,Th(),op=setTimeout(Ah,6e3));let e=ie.postOpen&&ut.open,t=ie.postOpen&&!ut.open;switch(n.code){case"ArrowLeft":Di("ArrowLeft"),e?ut.action("LEFT"):(Bi(),fh("PREVIOUS"),t&&fa());break;case"ArrowRight":Di("ArrowRight"),e?ut.action("RIGHT"):(Bi(),fh("NEXT"),t&&fa());break;case"ArrowUp":Di("ArrowUp"),e||bv();break;case"ArrowDown":Di("ArrowDown"),e||Mv();break;case"Tab":Di("Tab"),e?(_a(),fh("NEXT"),fa()):Tc((ie.currentSection+1)%Zt.length);break;case"KeyK":as.classList.contains("open")?Ah():Th();break;case"KeyA":Di("KeyA"),Iv();break;case"Equal":case"NumpadAdd":Di("Equal"),e||pp();break;case"Minus":case"NumpadSubtract":Di("Minus"),e||fp();break;case"Space":Di("Space"),lt&&lt.checkPostSelected(),ie.postOpen?_a():fa();break;case"Escape":Bi();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Er||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||mp(n)});var Pf=new ko,Lf=new Ye;function bc(n,e){if(!ba||!lt)return null;Lf.set(n/Vn*2-1,-(e/Rn)*2+1),Pf.setFromCamera(Lf,$n);let t=Pf.intersectObjects([...Ar().blockers,...lt.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:Nv(n,e)||(t?t.object.userData:null)}var nc=new L;function Nv(n,e){if(!lt||!lt.net)return null;let t=null,i=14;for(let s of lt.net.hits){if(!s.visible)continue;s.getWorldPosition(nc).project($n);let r=(nc.x+1)/2*Vn-n,a=(1-nc.y)/2*Rn-e,o=Math.hypot(r,a);o<i&&nc.z<1&&(i=o,t=s.userData)}return t}var Rs=null,li=null,Ch=0,Rh=0;Pn.addEventListener("pointerdown",n=>{if(!mi||Rs!==null||n.pointerType==="mouse"&&n.button!==0)return;ss=Ch=n.clientX,rs=Rh=n.clientY;let e=bc(n.clientX,n.clientY);Bi(),li=e&&e.post?e:null,li&&li.face==="back"&&(li.post.view.focus(li.post.id_),Qn=!0),Rs=n.pointerId,Pn.setPointerCapture(n.pointerId),Pn.classList.add("dragging"),cc=ss,lc=rs,Qn=!1,Sr=!0});function gp(n){if(n.pointerId===Rs){if(Rs=null,Pn.classList.remove("dragging"),Sr&&(Qn=!0,Sr=!1),li&&li.face==="front"&&Math.hypot(n.clientX-Ch,n.clientY-Rh)<6){let e=bc(n.clientX,n.clientY);e&&e.post===li.post&&Vh(e.post.id_)}else if(!li&&Math.hypot(n.clientX-Ch,n.clientY-Rh)<6){let e=bc(n.clientX,n.clientY);e&&e.netNode?jf(e.netNode,n.clientX,n.clientY):Ih()}li=null}}Pn.addEventListener("pointerup",gp);Pn.addEventListener("pointercancel",gp);var gh=!1;Pn.addEventListener("pointermove",n=>{Rs!==null&&n.pointerId!==Rs||(ss=n.clientX,rs=n.clientY,Rs===null&&n.pointerType==="mouse"&&!gh&&(gh=!0,requestAnimationFrame(()=>{gh=!1;let e=bc(ss,rs);Pn.classList.toggle("hover",!!(e&&e.post)),e&&e.netNode&&!ie.postOpen?jf(e.netNode,ss,rs):Ih()})))});var If=0;Pn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!mi||e-If<220||!n.deltaY||(If=e,n.deltaY<0?pp():fp())},{passive:!1});window.addEventListener("resize",()=>{Qf(),Uh(),_c(),ut.placeBanda(),Sp(),ut.open&&(np(),ut.placeBanda(),clearTimeout(ut.relayout),ut.relayout=setTimeout(()=>{ut.open&&ut.post&&JSON.stringify(wh("project"))!==ut.geomKey&&(ut.build(ut.post,ie.section.def.card),_c())},250))});function _p(){if(ft.settings.negativeToggle!==!1){if(Zn=!Zn,!fn)try{localStorage.setItem("hc-neg",Zn?"1":"0")}catch{}Oh(),lt&&lt.retexture()}}var yp=document.getElementById("logo");yp.addEventListener("click",_p);yp.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&(n.preventDefault(),_p())});var _e=null,Dv=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function Uv(){let n=(ft.settings.showreel||"").trim();if(!_e){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),_e={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>Ov()),_e.x.addEventListener("click",ic),i.querySelector(".scrim").addEventListener("click",ic),_e.snd.addEventListener("click",()=>xp(!_e.muted)),window.addEventListener("keydown",s=>{if(_e.open){if(s.code==="Escape")s.preventDefault(),ic();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!_e.player||s.source!==_e.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==_e.muted&&(_e.muted=r.info.muted,ya())})}_e.btn.hidden=!n,_e.btn.setAttribute("aria-label","Showreel"),_e.x.setAttribute("aria-label",zt("close")),n!==_e.src&&(_e.open&&ic(!0),_e.src=n,_e.kind=n?lp(n):"",_e.vid.innerHTML="",_e.player=null);let e=_e.kind==="youtube"?`https://www.youtube.com/watch?v=${wc(n)}`:_e.kind==="vimeo"?`https://vimeo.com/${Ec(n)}`:"";_e.ext.hidden=!e,e&&(_e.ext.href=e,_e.ext.textContent=(_e.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),ya()}function ya(){_e&&(_e.snd.innerHTML=Dv(!_e.muted)+`<span>${zt(_e.muted?"soundOn":"soundOff")}</span>`,_e.snd.setAttribute("aria-pressed",String(!_e.muted)))}function Mc(n,e=[]){let t=_e.player;if(!(!t||!t.contentWindow)){if(_e.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(_e.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function xp(n){_e.muted=n,ya(),_e.kind==="video"?_e.player&&(_e.player.muted=n,n||(_e.player.volume=1)):(Mc(n?"mute":"unMute"),n||Mc("setVolume",[100]))}function Ov(){if(!(!_e||!_e.src||_e.open)){if(_e.open=!0,_e.last=document.activeElement,_e.player)_e.kind==="video"?_e.player.play().catch(()=>{}):Mc("playVideo");else{let n=_e.src,e=_e.kind;if(e==="video"){let t=document.createElement("video");t.src=Hn(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==_e.muted&&(_e.muted=t.muted,ya())}),_e.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?wc(n):Ec(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),_e.muted||xp(!1)}),_e.player=t}else{let t=document.createElement("img");t.src=Hn(n),t.alt="",_e.player=t}_e.muted=!0,ya(),_e.vid.appendChild(_e.player)}_e.snd.hidden=!/^(youtube|vimeo|video)$/.test(_e.kind),_e.box.hidden=!1,_e.btn.setAttribute("aria-expanded","true"),_e.box.offsetWidth,_e.box.classList.add("on"),setTimeout(()=>{_e.open&&_e.x.focus({preventScroll:!0})},60)}}function ic(n){!_e||!_e.open||(_e.open=!1,_e.btn.setAttribute("aria-expanded","false"),_e.kind==="video"?_e.player&&_e.player.pause():Mc("pauseVideo"),_e.box.classList.remove("on"),clearTimeout(_e.t),_e.t=setTimeout(()=>{_e.open||(_e.box.hidden=!0)},n===!0?0:650),_e.last&&_e.last.focus&&n!==!0&&_e.last.focus({preventScroll:!0}))}var Nf=document.getElementById("home"),vr=document.getElementById("enter"),xa=document.getElementById("ticker"),sc=xa.getContext("2d"),pa=null,hc=0,ma=1,vp="hc-bullshit-slogans",ga=[];try{let n=JSON.parse(localStorage.getItem(vp)||"[]");Array.isArray(n)&&(ga=n.filter(e=>typeof e=="string").slice(0,8))}catch{}function bp(){let n=document.getElementById("bs"),e=n.value.replace(/\s+/g," ").trim().slice(0,70);if(!e)return!1;ga=[e.toUpperCase(),...ga.filter(t=>t!==e.toUpperCase())].slice(0,8);try{localStorage.setItem(vp,JSON.stringify(ga))}catch{}return Mp(),hc=0,n.value="",document.getElementById("bs-sent").textContent=zt("sent"),Fv(e),!0}function Fv(n){let e=(ft.settings.sloganInbox||"").trim();if(!e||fn||!/^https:\/\//.test(e))return;let t=JSON.stringify({slogan:n,lang:Fi,tag:Ap("")||"",site:location.host||"local"});try{fetch(e,{method:"POST",mode:"no-cors",keepalive:!0,headers:{"Content-Type":"text/plain;charset=utf-8"},body:t}).catch(()=>{})}catch{}}document.getElementById("bs-form").addEventListener("submit",n=>{n.preventDefault(),bp(),document.getElementById("bs").blur(),vr.click()});var Df={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},Bv=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=Df[e]||Df["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function Mp(){let n=[...ga,...ft.settings.home.ticker||[]].filter(Boolean),e=(n.length?n:[ft.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ",t=[];for(let i of e){let s=Bv(i),r=i===" "?3:5;for(let a=0;a<r;a++){let o=0;for(let c=0;c<7;c++)s[c]&1<<4-a&&(o|=1<<c);t.push(o)}t.push(0)}pa={w:t.length,cols:t}}var hi={pitch:3.2,rows:7,h:30},xr=null,Uf="";function Of(n,e){let t=ma,i=Math.ceil(hi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,hi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-hi.pitch*.1*t,a-hi.pitch*.1*t,hi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function Sp(){ma=Math.min(window.devicePixelRatio||1,2),xa.width=Math.round(window.innerWidth*ma),xa.height=Math.round(hi.h*ma),xr=null}var rc=0;function zv(n){let e=En();(!xr||Uf!==e)&&(Uf=e,xr={on:Of(e,!0),off:Of(e,!1)}),rc+=n*26,rc>=1&&(hc=(hc+Math.floor(rc))%pa.w,rc%=1);let t=ma,i=hi.pitch,s=Math.ceil(window.innerWidth/i)+1,r=(hi.h-hi.rows*i)/2;sc.setTransform(1,0,0,1,0,0),sc.fillStyle="#000",sc.fillRect(0,0,xa.width,xa.height);let a=xr.on.width/2;for(let o=0;o<s;o++){let c=pa.cols[(hc+o)%pa.w],l=(o*i+i/2)*t-a;for(let h=0;h<hi.rows;h++)sc.drawImage(c>>h&1?xr.on:xr.off,l,(r+h*i+i/2)*t-a)}}var Er=!1,wp=!1,Ep=!1;function Tp(){Er||(Er=!0,Nf.classList.add("out"),setTimeout(()=>{Nf.hidden=!0},1100),Hv(),Ev(),wr.classList.add("on"),setTimeout(Cv,1500),as.hidden=!1,Fh.classList.remove("hidden"),Pn.focus({preventScroll:!0}))}vr.addEventListener("click",()=>{bp(),Ep=!0,wp?Tp():(vr.textContent=zt("loading"),vr.classList.add("wait"))});var Ph=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function Ap(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return fn&&fn.tag&&(e=fn.tag),Ph(e||n)}function kv(n,e){let t=n.tags||[],i=t.find(s=>Ph(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>Ph(r)===e));return i?i.id:""}function Hv(){Dh();let n=fn&&fn.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Zt.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Zt.findIndex(a=>a.def.id===ft.settings.startSection)));let s=Ap(t||(e&&i<0?e:""));if(s){let a=Zt.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Zt.keys()];for(let o of a){let c=kv(Zt[o].def,s);if(c){i=o,Zt[o].def.defaultTag=c;break}}}ie.currentSection=i,ie.resetData();let r=Ar();ie.cameraY=oe.cameraHeight,yt.x=oe.cameraDistance*Math.sin(ie.degreeCamera)+r.p.x,yt.y=ie.cameraY,yt.z=oe.cameraDistance*Math.cos(ie.degreeCamera)+r.p.z,jn.x=r.p.x,jn.y=oe.cameraTargetHeight,jn.z=r.p.z,ba=!0,Tc(i,0)}var Ff=performance.now();function Cp(n){let e=Math.min(.25,Math.max(0,(n-Ff)/1e3));Ff=n,Ui+=e,pc=e*cv,!Er&&pa&&zv(e),ba&&(uv(),wv(),lt&&lt.update(),ut.step(),Tv(),va.render(Ps,$n)),requestAnimationFrame(Cp)}function _h(n){console.error(n);let e=document.getElementById("load-error");e.textContent=zt("loadError")+(n&&n.message?n.message:n),e.hidden=!1}(async function(){try{fn?ft=Es(structuredClone(fn.content)):(ft=await ac.load(),ac.prepare&&await ac.prepare(ft))}catch(r){_h(r);return}if(Zn=!!ft.settings.negative,$f(),!fn&&ft.settings.negativeToggle!==!1)try{let r=localStorage.getItem("hc-neg");(r==="1"||r==="0")&&(Zn=r==="1")}catch{}let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=ft.settings.langs&&ft.settings.langs.length?ft.settings.langs:es,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(r=>String(r).toLowerCase().slice(0,2)).find(r=>t.includes(r));if(Fi=t.includes(e)?e:i||ft.settings.defaultLang||t[0],Zt=ft.sections.filter(r=>r.visible).map(r=>({def:r})),!Zt.length){_h(new Error("aucune section visible"));return}window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&Bf(!1),cp(),Oh(),Av(),Qf(),Dh(),Sp(),requestAnimationFrame(Cp),As=Zt.map((r,a)=>new bh(r.def,a)),Zt.forEach((r,a)=>{r.object=As[a]}),Zt.forEach(r=>{r.container=r.object.container,r.p=r.object.p});let s=new Yo(Xf);try{(await Promise.allSettled(As.map(a=>a.load(s)))).forEach((a,o)=>{a.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+As[o].def.id+" \xBB :",a.reason)}),As.forEach((a,o)=>a.place(o)),await Promise.race([Tr(),new Promise(a=>setTimeout(a,3e3))]),wp=!0,(Ep||location.hash.length>1||fn&&fn.start)&&Tp()}catch(r){_h(r)}})();window.__hc={P:ie,STYLE:oe,cam:yt,camera:$n,get input(){return mi},get homeGone(){return Er},get content(){return ft},get postsView(){return lt},getToSectionView:Tc,openThatPost:Vh,closePost:_a,setLang:sp,enter:()=>vr.click()};})();
