/* Généré depuis assets/hc/admin.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Ol="160";var dd=0,fc=1,fd=2;var Zu=1,pd=2,oi=3,Wn=0,pn=1,xn=2;var Ci=0,Ds=1,pc=2,mc=3,gc=4,md=5,Ji=100,gd=101,vd=102,vc=103,yc=104,yd=200,_d=201,xd=202,bd=203,sl=204,rl=205,Md=206,wd=207,Sd=208,Ed=209,Td=210,Ad=211,Cd=212,Rd=213,Ld=214,Pd=0,Id=1,Nd=2,xa=3,Dd=4,Ud=5,Od=6,kd=7,Ka=0,Fd=1,Bd=2,Ri=0,zd=1,Hd=2,Vd=3,Gd=4,Wd=5,$d=6,_c="attached",qd="detached",Ku=300,ks=301,Fs=302,al=303,ol=304,Qa=306,Pi=1e3,sn=1001,ll=1002,Zt=1003,xc=1004;var So=1005;var cn=1006,Xd=1007;var Ii=1008;var Li=1009,jd=1010,Yd=1011,kl=1012,Qu=1013,Ai=1014,ci=1015,yr=1016,eh=1017,th=1018,Ki=1020,Jd=1021,En=1023,Zd=1024,Kd=1025,Qi=1026,Bs=1027,Qd=1028,nh=1029,ef=1030,ih=1031,sh=1033,Eo=33776,To=33777,Ao=33778,Co=33779,bc=35840,Mc=35841,wc=35842,Sc=35843,rh=36196,Ec=37492,Tc=37496,Ac=37808,Cc=37809,Rc=37810,Lc=37811,Pc=37812,Ic=37813,Nc=37814,Dc=37815,Uc=37816,Oc=37817,kc=37818,Fc=37819,Bc=37820,zc=37821,Ro=36492,Hc=36494,Vc=36495,tf=36283,Gc=36284,Wc=36285,$c=36286;var ba=2300,Ma=2301,Lo=2302,qc=2400,Xc=2401,jc=2402,nf=2500;var ah=3e3,es=3001,sf=3200,rf=3201,Fl=0,af=1,Tn="",Ft="srgb",hi="srgb-linear",Bl="display-p3",eo="display-p3-linear",wa="linear",It="srgb",Sa="rec709",Ea="p3";var ps=7680;var Yc=519,of=512,lf=513,cf=514,oh=515,uf=516,hf=517,df=518,ff=519,Jc=35044;var Zc="300 es",cl=1035,ui=2e3,Ta=2001,Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=1234567,pr=Math.PI/180,zs=180/Math.PI;function Fi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function zl(n,e){return(n%e+e)%e}function pf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function mf(n,e,t){return n!==e?(t-n)/(e-n):0}function mr(n,e,t){return(1-t)*n+t*e}function gf(n,e,t,i){return mr(n,e,1-Math.exp(-t*i))}function vf(n,e=1){return e-Math.abs(zl(n,e*2)-e)}function yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _f(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bf(n,e){return n+Math.random()*(e-n)}function Mf(n){return n*(.5-Math.random())}function wf(n){n!==void 0&&(Kc=n);let e=Kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sf(n){return n*pr}function Ef(n){return n*zs}function ul(n){return(n&n-1)===0&&n!==0}function Tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Aa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Af(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),y=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*y,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*y,a*c);break;case"ZYZ":n.set(l*y,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Xs={DEG2RAD:pr,RAD2DEG:zs,generateUUID:Fi,clamp:un,euclideanModulo:zl,mapLinear:pf,inverseLerp:mf,lerp:mr,damp:gf,pingpong:vf,smoothstep:yf,smootherstep:_f,randInt:xf,randFloat:bf,randFloatSpread:Mf,seededRandom:wf,degToRad:Sf,radToDeg:Ef,isPowerOfTwo:ul,ceilPowerOfTwo:Tf,floorPowerOfTwo:Aa,setQuaternionFromProperEuler:Af,normalize:on,denormalize:Ls},gt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],y=i[8],_=s[0],g=s[3],d=s[6],T=s[1],v=s[4],M=s[7],D=s[2],U=s[5],O=s[8];return r[0]=o*_+a*T+l*D,r[3]=o*g+a*v+l*U,r[6]=o*d+a*M+l*O,r[1]=c*_+u*T+h*D,r[4]=c*g+u*v+h*U,r[7]=c*d+u*M+h*O,r[2]=f*_+m*T+y*D,r[5]=f*g+m*v+y*U,r[8]=f*d+m*M+y*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,y=t*h+i*f+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Po=new pt;function lh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cf(){let n=_r("canvas");return n.style.display="block",n}var Qc={};function gr(n){n in Qc||(Qc[n]=!0,console.warn(n))}var eu=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tu=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[hi]:{transfer:wa,primaries:Sa,toReference:n=>n,fromReference:n=>n},[Ft]:{transfer:It,primaries:Sa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[eo]:{transfer:wa,primaries:Ea,toReference:n=>n.applyMatrix3(tu),fromReference:n=>n.applyMatrix3(eu)},[Bl]:{transfer:It,primaries:Ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tu),fromReference:n=>n.applyMatrix3(eu).convertLinearToSRGB()}},Rf=new Set([hi,eo]),At={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Rf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Yr[e].toReference,s=Yr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Yr[n].primaries},getTransfer:function(n){return n===Tn?wa:Yr[n].transfer}};function Us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ms,Ca=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=_r("canvas")),ms.width=e.width,ms.height=e.height;let i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_r("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Us(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Us(t[i]/255)*255):t[i]=Us(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lf=0,Ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(No(s[o].image)):r.push(No(s[o]))}else r=No(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function No(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ca.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pf=0,bn=class n extends Ni{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=sn,s=sn,r=cn,o=Ii,a=En,l=Li,c=n.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Fi(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===es?Ft:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?es:ah}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===es?Ft:Tn}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Ku;bn.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],y=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(m+1)/2,D=(d+1)/2,U=(u+f)/4,O=(h+_)/4,k=(y+g)/4;return v>M&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=U/i,r=O/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=U/s,r=k/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=O/r,s=k/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-y)*(g-y)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-y)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hl=class extends Ni{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===es?Ft:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends hl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},La=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dl=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],m=r[o+1],y=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=y,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==y){let g=1-a,d=l*f+c*m+u*y+h*_,T=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let D=Math.sqrt(v),U=Math.atan2(D,d*T);g=Math.sin(g*U)/D,a=Math.sin(a*U)/D}let M=a*T;if(l=l*g+f*M,c=c*g+m*M,u=u*g+y*M,h=h*g+_*M,g===1-a){let D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],y=r[o+3];return e[t]=a*y+u*h+l*m-c*f,e[t+1]=l*y+u*f+c*h-a*m,e[t+2]=c*y+u*m+a*f-l*h,e[t+3]=u*y-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*y,this._y=c*m*h-f*u*y,this._z=c*u*y+f*m*h,this._w=c*u*h-f*m*y;break;case"YXZ":this._x=f*u*h+c*m*y,this._y=c*m*h-f*u*y,this._z=c*u*y-f*m*h,this._w=c*u*h+f*m*y;break;case"ZXY":this._x=f*u*h-c*m*y,this._y=c*m*h+f*u*y,this._z=c*u*y+f*m*h,this._w=c*u*h-f*m*y;break;case"ZYX":this._x=f*u*h-c*m*y,this._y=c*m*h+f*u*y,this._z=c*u*y-f*m*h,this._w=c*u*h+f*m*y;break;case"YZX":this._x=f*u*h+c*m*y,this._y=c*m*h+f*u*y,this._z=c*u*y-f*m*h,this._w=c*u*h-f*m*y;break;case"XZY":this._x=f*u*h-c*m*y,this._y=c*m*h-f*u*y,this._z=c*u*y+f*m*h,this._w=c*u*h+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new V,nu=new $n,mn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Zr.subVectors(this.max,cr),gs.subVectors(e.a,cr),vs.subVectors(e.b,cr),ys.subVectors(e.c,cr),Mi.subVectors(vs,gs),wi.subVectors(ys,vs),$i.subVectors(gs,ys);let t=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-$i.z,$i.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,$i.z,0,-$i.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-$i.y,$i.x,0];return!Uo(t,gs,vs,ys,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Uo(t,gs,vs,ys,Zr))?!1:(Kr.crossVectors(Mi,wi),t=[Kr.x,Kr.y,Kr.z],Uo(t,gs,vs,ys,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ti=[new V,new V,new V,new V,new V,new V,new V,new V],In=new V,Jr=new mn,gs=new V,vs=new V,ys=new V,Mi=new V,wi=new V,$i=new V,cr=new V,Zr=new V,Kr=new V,qi=new V;function Uo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qi.fromArray(n,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var If=new mn,ur=new V,Oo=new V,Di=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):If.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Oo)),this.expandByPoint(ur.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new V,ko=new V,Qr=new V,Si=new V,Fo=new V,ea=new V,Bo=new V,xr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ko.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(ko);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qr),a=Si.dot(this.direction),l=-Si.dot(Qr),c=Si.lengthSq(),u=Math.abs(1-o*o),h,f,m,y;if(u>0)if(h=o*l-a,f=o*a-l,y=r*u,h>=0)if(f>=-y)if(f<=y){let _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-y?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=y?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ko).addScaledVector(Qr,f),m}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){Fo.subVectors(t,e),ea.subVectors(i,e),Bo.crossVectors(Fo,ea);let o=this.direction.dot(Bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);let l=a*this.direction.dot(ea.crossVectors(Si,ea));if(l<0)return null;let c=a*this.direction.dot(Fo.cross(Si));if(c<0||l+c>o)return null;let u=-a*Si.dot(Bo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,m,y,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,m,y,_,g)}set(e,t,i,s,r,o,a,l,c,u,h,f,m,y,_,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=y,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,m=o*h,y=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+y*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=y+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,m=l*h,y=c*u,_=c*h;t[0]=f+_*a,t[4]=y*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-y,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,m=l*h,y=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,m=o*h,y=a*u,_=a*h;t[0]=l*u,t[4]=y*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,y=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=y*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+y,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,m=o*c,y=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-y,t[2]=y*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Df)}lookAt(e,t,i){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ei.crossVectors(i,yn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ei.crossVectors(i,yn)),Ei.normalize(),ta.crossVectors(yn,Ei),s[0]=Ei.x,s[4]=ta.x,s[8]=yn.x,s[1]=Ei.y,s[5]=ta.y,s[9]=yn.y,s[2]=Ei.z,s[6]=ta.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],y=i[2],_=i[6],g=i[10],d=i[14],T=i[3],v=i[7],M=i[11],D=i[15],U=s[0],O=s[4],k=s[8],E=s[12],R=s[1],W=s[5],ne=s[9],te=s[13],B=s[2],Y=s[6],G=s[10],re=s[14],se=s[3],Z=s[7],le=s[11],ae=s[15];return r[0]=o*U+a*R+l*B+c*se,r[4]=o*O+a*W+l*Y+c*Z,r[8]=o*k+a*ne+l*G+c*le,r[12]=o*E+a*te+l*re+c*ae,r[1]=u*U+h*R+f*B+m*se,r[5]=u*O+h*W+f*Y+m*Z,r[9]=u*k+h*ne+f*G+m*le,r[13]=u*E+h*te+f*re+m*ae,r[2]=y*U+_*R+g*B+d*se,r[6]=y*O+_*W+g*Y+d*Z,r[10]=y*k+_*ne+g*G+d*le,r[14]=y*E+_*te+g*re+d*ae,r[3]=T*U+v*R+M*B+D*se,r[7]=T*O+v*W+M*Y+D*Z,r[11]=T*k+v*ne+M*G+D*le,r[15]=T*E+v*te+M*re+D*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],y=e[3],_=e[7],g=e[11],d=e[15];return y*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+g*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],y=e[12],_=e[13],g=e[14],d=e[15],T=h*g*c-_*f*c+_*l*m-a*g*m-h*l*d+a*f*d,v=y*f*c-u*g*c-y*l*m+o*g*m+u*l*d-o*f*d,M=u*_*c-y*h*c+y*a*m-o*_*m-u*a*d+o*h*d,D=y*h*l-u*_*l-y*a*f+o*_*f+u*a*g-o*h*g,U=t*T+i*v+s*M+r*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/U;return e[0]=T*O,e[1]=(_*f*r-h*g*r-_*s*m+i*g*m+h*s*d-i*f*d)*O,e[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*d+i*l*d)*O,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*O,e[4]=v*O,e[5]=(u*g*r-y*f*r+y*s*m-t*g*m-u*s*d+t*f*d)*O,e[6]=(y*l*r-o*g*r-y*s*c+t*g*c+o*s*d-t*l*d)*O,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*O,e[8]=M*O,e[9]=(y*h*r-u*_*r-y*i*m+t*_*m+u*i*d-t*h*d)*O,e[10]=(o*_*r-y*a*r+y*i*c-t*_*c-o*i*d+t*a*d)*O,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*O,e[12]=D*O,e[13]=(u*_*s-y*h*s+y*i*f-t*_*f-u*i*g+t*h*g)*O,e[14]=(y*a*s-o*_*s-y*i*l+t*_*l+o*i*g-t*a*g)*O,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,y=r*h,_=o*u,g=o*h,d=a*h,T=l*c,v=l*u,M=l*h,D=i.x,U=i.y,O=i.z;return s[0]=(1-(_+d))*D,s[1]=(m+M)*D,s[2]=(y-v)*D,s[3]=0,s[4]=(m-M)*U,s[5]=(1-(f+d))*U,s[6]=(g+T)*U,s[7]=0,s[8]=(y+v)*O,s[9]=(g-T)*O,s[10]=(1-(f+_))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ui){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),m,y;if(a===ui)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ta)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ui){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,m=(i+s)*u,y,_;if(a===ui)y=(o+r)*h,_=-2*h;else if(a===Ta)y=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},_s=new V,Nn=new ft,Nf=new V(0,0,0),Df=new V(1,1,1),Ei=new V,ta=new V,yn=new V,iu=new ft,su=new $n,Pa=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pa.DEFAULT_ORDER="XYZ";var Ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uf=0,ru=new V,xs=new $n,ii=new ft,na=new V,hr=new V,Of=new V,kf=new $n,au=new V(1,0,0),ou=new V(0,1,0),lu=new V(0,0,1),Ff={type:"added"},Bf={type:"removed"},Wt=class n extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new V,t=new Pa,i=new $n,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new pt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(hr,na,this.up):ii.lookAt(na,hr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ii),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new V(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new V,si=new V,zo=new V,ri=new V,bs=new V,Ms=new V,cu=new V,Ho=new V,Vo=new V,Go=new V,ia=!1,Ps=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),si.subVectors(i,t),zo.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(si),l=Dn.dot(zo),c=si.dot(si),u=si.dot(zo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,m=(c*l-a*u)*f,y=(o*u-a*l)*f;return r.set(1-m-y,y,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,t,i,s,r,o,a,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),si.subVectors(e,t),Dn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;bs.subVectors(s,i),Ms.subVectors(r,i),Ho.subVectors(e,i);let l=bs.dot(Ho),c=Ms.dot(Ho);if(l<=0&&c<=0)return t.copy(i);Vo.subVectors(e,s);let u=bs.dot(Vo),h=Ms.dot(Vo);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(bs,o);Go.subVectors(e,r);let m=bs.dot(Go),y=Ms.dot(Go);if(y>=0&&m<=y)return t.copy(r);let _=m*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector(Ms,a);let g=u*y-m*h;if(g<=0&&h-u>=0&&m-y>=0)return cu.subVectors(r,s),a=(h-u)/(h-u+(m-y)),t.copy(s).addScaledVector(cu,a);let d=1/(g+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(bs,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var lt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=zl(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Wo(o,r,e+1/3),this.g=Wo(o,r,e),this.b=Wo(o,r,e-1/3)}return At.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return At.fromWorkingColorSpace(nn.copy(this),e),Math.round(un(nn.r*255,0,255))*65536+Math.round(un(nn.g*255,0,255))*256+Math.round(un(nn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(nn.copy(this),t);let i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ft){At.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,s=nn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(sa);let i=mr(Ti.h,sa.h,t),s=mr(Ti.s,sa.s,t),r=mr(Ti.l,sa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new lt;lt.NAMES=ch;var zf=0,fi=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ds,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new V,ra=new gt,An=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var Na=class extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Da=class extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Gt=class extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Hf=0,Sn=new ft,$o=new Wt,ws=new V,_n=new mn,dr=new mn,Yt=new V,Cn=class n extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?Da:Na)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(_n.min,dr.min),_n.expandByPoint(Yt),Yt.addVectors(_n.max,dr.max),_n.expandByPoint(Yt)):(_n.expandByPoint(dr.min),_n.expandByPoint(dr.max))}_n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Yt.add(ws)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new V,u[R]=new V;let h=new V,f=new V,m=new V,y=new gt,_=new gt,g=new gt,d=new V,T=new V;function v(R,W,ne){h.fromArray(s,R*3),f.fromArray(s,W*3),m.fromArray(s,ne*3),y.fromArray(o,R*2),_.fromArray(o,W*2),g.fromArray(o,ne*2),f.sub(h),m.sub(h),_.sub(y),g.sub(y);let te=1/(_.x*g.y-g.x*_.y);isFinite(te)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(m,-_.y).multiplyScalar(te),T.copy(m).multiplyScalar(_.x).addScaledVector(f,-g.x).multiplyScalar(te),c[R].add(d),c[W].add(d),c[ne].add(d),u[R].add(T),u[W].add(T),u[ne].add(T))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let R=0,W=M.length;R<W;++R){let ne=M[R],te=ne.start,B=ne.count;for(let Y=te,G=te+B;Y<G;Y+=3)v(i[Y+0],i[Y+1],i[Y+2])}let D=new V,U=new V,O=new V,k=new V;function E(R){O.fromArray(r,R*3),k.copy(O);let W=c[R];D.copy(W),D.sub(O.multiplyScalar(O.dot(W))).normalize(),U.crossVectors(k,W);let te=U.dot(u[R])<0?-1:1;l[R*4]=D.x,l[R*4+1]=D.y,l[R*4+2]=D.z,l[R*4+3]=te}for(let R=0,W=M.length;R<W;++R){let ne=M[R],te=ne.start,B=ne.count;for(let Y=te,G=te+B;Y<G;Y+=3)E(i[Y+0]),E(i[Y+1]),E(i[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){let y=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),m=0,y=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[y++]=c[m++]}return new An(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uu=new ft,Xi=new xr,aa=new Di,hu=new V,Ss=new V,Es=new V,Ts=new V,qo=new V,oa=new V,la=new gt,ca=new gt,ua=new gt,du=new V,fu=new V,pu=new V,ha=new V,da=new V,hn=class extends Wt{constructor(e=new Cn,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(qo.fromBufferAttribute(h,e),o?oa.addScaledVector(qo,u):oa.addScaledVector(qo.sub(t),u))}t.add(oa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(aa.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(aa,hu)===null||Xi.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(uu.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(uu),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let g=f[y],d=o[g.materialIndex],T=Math.max(g.start,m.start),v=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=T,D=v;M<D;M+=3){let U=a.getX(M),O=a.getX(M+1),k=a.getX(M+2);s=fa(this,d,e,i,c,u,h,U,O,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=y,d=_;g<d;g+=3){let T=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);s=fa(this,o,e,i,c,u,h,T,v,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let g=f[y],d=o[g.materialIndex],T=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=T,D=v;M<D;M+=3){let U=M,O=M+1,k=M+2;s=fa(this,d,e,i,c,u,h,U,O,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=y,d=_;g<d;g+=3){let T=g,v=g+1,M=g+2;s=fa(this,o,e,i,c,u,h,T,v,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Vf(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Wn,a),l===null)return null;da.copy(a),da.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:n}}function fa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ss),n.getVertexPosition(l,Es),n.getVertexPosition(c,Ts);let u=Vf(n,e,t,i,Ss,Es,Ts,ha);if(u){s&&(la.fromBufferAttribute(s,a),ca.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),u.uv=Ps.getInterpolation(ha,Ss,Es,Ts,la,ca,ua,new gt)),r&&(la.fromBufferAttribute(r,a),ca.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,c),u.uv1=Ps.getInterpolation(ha,Ss,Es,Ts,la,ca,ua,new gt),u.uv2=u.uv1),o&&(du.fromBufferAttribute(o,a),fu.fromBufferAttribute(o,l),pu.fromBufferAttribute(o,c),u.normal=Ps.getInterpolation(ha,Ss,Es,Ts,du,fu,pu,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new V,materialIndex:0};Ps.getNormal(Ss,Es,Ts,h.normal),u.face=h}return u}var br=class n extends Cn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,m=0;y("z","y","x",-1,-1,i,t,e,o,r,0),y("z","y","x",1,-1,i,t,-e,o,r,1),y("x","z","y",1,1,e,i,t,s,o,2),y("x","z","y",1,-1,e,i,-t,s,o,3),y("x","y","z",1,-1,e,t,i,s,r,4),y("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function y(_,g,d,T,v,M,D,U,O,k,E){let R=M/O,W=D/k,ne=M/2,te=D/2,B=U/2,Y=O+1,G=k+1,re=0,se=0,Z=new V;for(let le=0;le<G;le++){let ae=le*W-te;for(let he=0;he<Y;he++){let P=he*R-ne;Z[_]=P*T,Z[g]=ae*v,Z[d]=B,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[d]=U>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(he/O),h.push(1-le/k),re+=1}}for(let le=0;le<k;le++)for(let ae=0;ae<O;ae++){let he=f+ae+Y*le,P=f+ae+Y*(le+1),F=f+(ae+1)+Y*(le+1),H=f+(ae+1)+Y*le;l.push(he,P,H),l.push(P,F,H),se+=6}a.addGroup(m,se,E),m+=se,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){let e={};for(let t=0;t<n.length;t++){let i=Hs(n[t]);for(let s in i)e[s]=i[s]}return e}function Gf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uh(n){return n.getRenderTarget()===null?n.outputColorSpace:At.workingColorSpace}var Wf={clone:Hs,merge:ln},$f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ua=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends Ua{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=-90,Cs=1,fl=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(As,Cs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(As,Cs,e,t);r.layers=this.layers,this.add(r);let o=new Vt(As,Cs,e,t);o.layers=this.layers,this.add(o);let a=new Vt(As,Cs,e,t);a.layers=this.layers,this.add(a);let l=new Vt(As,Cs,e,t);l.layers=this.layers,this.add(l);let c=new Vt(As,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Oa=class extends bn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pl=class extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===es?Ft:Tn),this.texture=new Oa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new br(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ci});r.uniforms.tEquirect.value=t;let o=new hn(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=cn),new fl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Xo=new V,Xf=new V,jf=new pt,li=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Xo.subVectors(i,t).cross(Xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||jf.getNormalMatrix(e),s=this.coplanarPoint(Xo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new Di,pa=new V,Mr=class{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],y=s[9],_=s[10],g=s[11],d=s[12],T=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,g-m,M-d).normalize(),i[1].setComponents(l+r,f+c,g+m,M+d).normalize(),i[2].setComponents(l+o,f+u,g+y,M+T).normalize(),i[3].setComponents(l-o,f-u,g-y,M-T).normalize(),i[4].setComponents(l-a,f-h,g-_,M-v).normalize(),t===ui)i[5].setComponents(l+a,f+h,g+_,M+v).normalize();else if(t===Ta)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Yf(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let h=c.array,f=c.usage,m=h.byteLength,y=n.createBuffer();n.bindBuffer(u,y),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){let f=u.array,m=u._updateRange,y=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&y.length===0&&n.bufferSubData(h,0,f),y.length!==0){for(let _=0,g=y.length;_<g;_++){let d=y[_];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var wr=class n extends Cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],y=[],_=[],g=[];for(let d=0;d<u;d++){let T=d*f-o;for(let v=0;v<c;v++){let M=v*h-r;y.push(M,-T,0),_.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){let v=T+c*d,M=T+c*(d+1),D=T+1+c*(d+1),U=T+1+c*d;m.push(v,M,U),m.push(M,D,U)}this.setIndex(m),this.setAttribute("position",new Gt(y,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`
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
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,Jp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,vg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Jf,alphahash_pars_fragment:Zf,alphamap_fragment:Kf,alphamap_pars_fragment:Qf,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:up,clipping_planes_fragment:hp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:vp,color_vertex:yp,common:_p,cube_uv_reflection_fragment:xp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Mp,displacementmap_vertex:wp,emissivemap_fragment:Sp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Cp,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Lp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Ip,fog_vertex:Np,fog_pars_vertex:Dp,fog_fragment:Up,fog_pars_fragment:Op,gradientmap_pars_fragment:kp,lightmap_fragment:Fp,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:$p,lights_phong_fragment:qp,lights_phong_pars_fragment:Xp,lights_physical_fragment:jp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Jp,lights_fragment_maps:Zp,lights_fragment_end:Kp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:am,metalnessmap_fragment:om,metalnessmap_pars_fragment:lm,morphcolor_vertex:cm,morphnormal_vertex:um,morphtarget_pars_vertex:hm,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:vm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Mm,opaque_fragment:wm,packing:Sm,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Cm,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Im,shadowmap_vertex:Nm,shadowmask_pars_fragment:Dm,skinbase_vertex:Um,skinning_pars_vertex:Om,skinning_vertex:km,skinnormal_vertex:Fm,specularmap_fragment:Bm,specularmap_pars_fragment:zm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:$m,uv_pars_vertex:qm,uv_vertex:Xm,worldpos_vertex:jm,background_vert:Ym,background_frag:Jm,backgroundCube_vert:Zm,backgroundCube_frag:Km,cube_vert:Qm,cube_frag:eg,depth_vert:tg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:ug,meshlambert_vert:hg,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:vg,meshphong_frag:yg,meshphysical_vert:_g,meshphysical_frag:xg,meshtoon_vert:bg,meshtoon_frag:Mg,points_vert:wg,points_frag:Sg,shadow_vert:Eg,shadow_frag:Tg,sprite_vert:Ag,sprite_frag:Cg},be={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Gn={basic:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ln([be.points,be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ln([be.common,be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ln([be.sprite,be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:ln([be.common,be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:ln([be.lights,be.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gn.physical={uniforms:ln([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var ma={r:0,b:0,g:0};function Rg(n,e,t,i,s,r,o){let a=new lt(0),l=r===!0?0:1,c,u,h=null,f=0,m=null;function y(g,d){let T=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),T=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Qa)?(u===void 0&&(u=new hn(new br(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Hs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=At.getTransfer(v.colorSpace)!==It,(h!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new hn(new wr(2,2),new pi({name:"BackgroundMaterial",uniforms:Hs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=At.getTransfer(v.colorSpace)!==It,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,d){g.getRGB(ma,uh(n)),i.buffers.color.setClear(ma.r,ma.g,ma.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:y}}function Lg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=g(null),c=l,u=!1;function h(B,Y,G,re,se){let Z=!1;if(o){let le=_(re,G,Y);c!==le&&(c=le,m(c.object)),Z=d(B,re,G,se),Z&&T(B,re,G,se)}else{let le=Y.wireframe===!0;(c.geometry!==re.id||c.program!==G.id||c.wireframe!==le)&&(c.geometry=re.id,c.program=G.id,c.wireframe=le,Z=!0)}se!==null&&t.update(se,n.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,k(B,Y,G,re),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(B){return i.isWebGL2?n.bindVertexArray(B):r.bindVertexArrayOES(B)}function y(B){return i.isWebGL2?n.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function _(B,Y,G){let re=G.wireframe===!0,se=a[B.id];se===void 0&&(se={},a[B.id]=se);let Z=se[Y.id];Z===void 0&&(Z={},se[Y.id]=Z);let le=Z[re];return le===void 0&&(le=g(f()),Z[re]=le),le}function g(B){let Y=[],G=[],re=[];for(let se=0;se<s;se++)Y[se]=0,G[se]=0,re[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:G,attributeDivisors:re,object:B,attributes:{},index:null}}function d(B,Y,G,re){let se=c.attributes,Z=Y.attributes,le=0,ae=G.getAttributes();for(let he in ae)if(ae[he].location>=0){let F=se[he],H=Z[he];if(H===void 0&&(he==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),he==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),F===void 0||F.attribute!==H||H&&F.data!==H.data)return!0;le++}return c.attributesNum!==le||c.index!==re}function T(B,Y,G,re){let se={},Z=Y.attributes,le=0,ae=G.getAttributes();for(let he in ae)if(ae[he].location>=0){let F=Z[he];F===void 0&&(he==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),he==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));let H={};H.attribute=F,F&&F.data&&(H.data=F.data),se[he]=H,le++}c.attributes=se,c.attributesNum=le,c.index=re}function v(){let B=c.newAttributes;for(let Y=0,G=B.length;Y<G;Y++)B[Y]=0}function M(B){D(B,0)}function D(B,Y){let G=c.newAttributes,re=c.enabledAttributes,se=c.attributeDivisors;G[B]=1,re[B]===0&&(n.enableVertexAttribArray(B),re[B]=1),se[B]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Y),se[B]=Y)}function U(){let B=c.newAttributes,Y=c.enabledAttributes;for(let G=0,re=Y.length;G<re;G++)Y[G]!==B[G]&&(n.disableVertexAttribArray(G),Y[G]=0)}function O(B,Y,G,re,se,Z,le){le===!0?n.vertexAttribIPointer(B,Y,G,se,Z):n.vertexAttribPointer(B,Y,G,re,se,Z)}function k(B,Y,G,re){if(i.isWebGL2===!1&&(B.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let se=re.attributes,Z=G.getAttributes(),le=Y.defaultAttributeValues;for(let ae in Z){let he=Z[ae];if(he.location>=0){let P=se[ae];if(P===void 0&&(ae==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),ae==="instanceColor"&&B.instanceColor&&(P=B.instanceColor)),P!==void 0){let F=P.normalized,H=P.itemSize,X=t.get(P);if(X===void 0)continue;let q=X.buffer,ve=X.type,Ce=X.bytesPerElement,Pe=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||P.gpuType===Qu);if(P.isInterleavedBufferAttribute){let tt=P.data,j=tt.stride,Nt=P.offset;if(tt.isInstancedInterleavedBuffer){for(let Oe=0;Oe<he.locationSize;Oe++)D(he.location+Oe,tt.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Oe=0;Oe<he.locationSize;Oe++)M(he.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Oe=0;Oe<he.locationSize;Oe++)O(he.location+Oe,H/he.locationSize,ve,F,j*Ce,(Nt+H/he.locationSize*Oe)*Ce,Pe)}else{if(P.isInstancedBufferAttribute){for(let tt=0;tt<he.locationSize;tt++)D(he.location+tt,P.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let tt=0;tt<he.locationSize;tt++)M(he.location+tt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let tt=0;tt<he.locationSize;tt++)O(he.location+tt,H/he.locationSize,ve,F,H*Ce,H/he.locationSize*tt*Ce,Pe)}}else if(le!==void 0){let F=le[ae];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(he.location,F);break;case 3:n.vertexAttrib3fv(he.location,F);break;case 4:n.vertexAttrib4fv(he.location,F);break;default:n.vertexAttrib1fv(he.location,F)}}}}U()}function E(){ne();for(let B in a){let Y=a[B];for(let G in Y){let re=Y[G];for(let se in re)y(re[se].object),delete re[se];delete Y[G]}delete a[B]}}function R(B){if(a[B.id]===void 0)return;let Y=a[B.id];for(let G in Y){let re=Y[G];for(let se in re)y(re[se].object),delete re[se];delete Y[G]}delete a[B.id]}function W(B){for(let Y in a){let G=a[Y];if(G[B.id]===void 0)continue;let re=G[B.id];for(let se in re)y(re[se].object),delete re[se];delete G[B.id]}}function ne(){te(),u=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:M,disableUnusedAttributes:U}}function Pg(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let m,y;if(s)m=n,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<f;y++)this.render(u[y],h[y]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let y=0;for(let _=0;_<f;_++)y+=h[_];t.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ig(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||e.has("OES_texture_float"),D=v&&M,U=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:D,maxSamples:U}}function Ng(n){let e=this,t=null,i=0,s=!1,r=!1,o=new li,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){let y=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,d=n.get(h);if(!s||y===null||y.length===0||r&&!g)r?u(null):c();else{let T=r?0:i,v=T*4,M=d.clippingState||null;l.value=M,M=u(y,f,v,m);for(let D=0;D!==v;++D)M[D]=t[D];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,y){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,y!==!0||g===null){let d=m+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,M=m;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(T,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Dg(n){let e=new WeakMap;function t(o,a){return a===al?o.mapping=ks:a===ol&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===al||a===ol)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pl(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Vs=class extends Ua{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Is=4,mu=[.125,.215,.35,.446,.526,.582],Zi=20,jo=new Vs,gu=new lt,Yo=null,Jo=0,Zo=0,Yi=(1+Math.sqrt(5))/2,Rs=1/Yi,vu=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Yi,Rs),new V(0,Yi,-Rs),new V(Rs,0,Yi),new V(-Rs,0,Yi),new V(Yi,Rs,0),new V(-Yi,Rs,0)],ka=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Yo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,Jo,Zo),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:yr,format:En,colorSpace:hi,depthBuffer:!1},s=yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Og(r,e,t)}return s}_compileMaterial(e){let t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,s){let a=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(gu),u.toneMapping=Ri,u.autoClear=!1;let m=new Un({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),y=new hn(new br,m),_=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(gu),_=!0);for(let d=0;d<6;d++){let T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let v=this._cubeSize;ga(s,T*v,d>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ks||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ga(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vu[(s-1)%vu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new hn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zi-1),_=r/y,g=isFinite(r)?1+Math.floor(u*_):Zi;g>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);let d=[],T=0;for(let O=0;O<Zi;++O){let k=O/_,E=Math.exp(-k*k/2);d.push(E),O===0?T+=E:O<g&&(T+=2*E)}for(let O=0;O<d.length;O++)d[O]=d[O]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=y,f.mipInt.value=v-i;let M=this._sizeLods[s],D=3*M*(s>v-Is?s-v+Is:0),U=4*(this._cubeSize-M);ga(t,D,U,3*M,2*M),l.setRenderTarget(t),l.render(h,jo)}};function Ug(n){let e=[],t=[],i=[],s=n,r=n-Is+1+mu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Is?l=mu[o-n+Is-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,y=6,_=3,g=2,d=1,T=new Float32Array(_*y*m),v=new Float32Array(g*y*m),M=new Float32Array(d*y*m);for(let U=0;U<m;U++){let O=U%3*2/3-1,k=U>2?0:-1,E=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];T.set(E,_*y*U),v.set(f,g*y*U);let R=[U,U,U,U,U,U];M.set(R,d*y*U)}let D=new Cn;D.setAttribute("position",new An(T,_)),D.setAttribute("uv",new An(v,g)),D.setAttribute("faceIndex",new An(M,d)),e.push(D),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yu(n,e,t){let i=new di(n,e,t);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Og(n,e,t){let i=new Float32Array(Zi),s=new V(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function _u(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function kg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===al||l===ol,u=l===ks||l===Fs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ka(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new ka(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Fg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bg(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);for(let y in f.morphAttributes){let _=f.morphAttributes[y];for(let g=0,d=_.length;g<d;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let y in f)e.update(f[y],n.ARRAY_BUFFER);let m=h.morphAttributes;for(let y in m){let _=m[y];for(let g=0,d=_.length;g<d;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(h){let f=[],m=h.index,y=h.attributes.position,_=0;if(m!==null){let T=m.array;_=m.version;for(let v=0,M=T.length;v<M;v+=3){let D=T[v+0],U=T[v+1],O=T[v+2];f.push(D,U,U,O,O,D)}}else if(y!==void 0){let T=y.array;_=y.version;for(let v=0,M=T.length/3-1;v<M;v+=3){let D=v+0,U=v+1,O=v+2;f.push(D,U,U,O,O,D)}}else return;let g=new(lh(f)?Da:Na)(f,1);g.version=_;let d=r.get(h);d&&e.remove(d),r.set(h,g)}function u(h){let f=r.get(h);if(f){let m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zg(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,y){n.drawElements(r,y,a,m*l),t.update(y,r,1)}function h(m,y,_){if(_===0)return;let g,d;if(s)g=n,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](r,y,a,m*l,_),t.update(y,r,_)}function f(m,y,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<_;d++)this.render(m[d]/l,y[d]);else{g.multiDrawElementsWEBGL(r,y,0,a,m,0,_);let d=0;for(let T=0;T<_;T++)d+=y[T];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Hg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vg(n,e){return n[0]-e[0]}function Gg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=m!==void 0?m.length:0,_=r.get(u);if(_===void 0||_.count!==y){let B=function(){ne.dispose(),r.delete(u),u.removeEventListener("dispose",B)};_!==void 0&&_.texture.dispose();let T=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],O=u.morphAttributes.color||[],k=0;T===!0&&(k=1),v===!0&&(k=2),M===!0&&(k=3);let E=u.attributes.position.count*k,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let W=new Float32Array(E*R*4*y),ne=new La(W,E,R,y);ne.type=ci,ne.needsUpdate=!0;let te=k*4;for(let Y=0;Y<y;Y++){let G=D[Y],re=U[Y],se=O[Y],Z=E*R*4*Y;for(let le=0;le<G.count;le++){let ae=le*te;T===!0&&(o.fromBufferAttribute(G,le),W[Z+ae+0]=o.x,W[Z+ae+1]=o.y,W[Z+ae+2]=o.z,W[Z+ae+3]=0),v===!0&&(o.fromBufferAttribute(re,le),W[Z+ae+4]=o.x,W[Z+ae+5]=o.y,W[Z+ae+6]=o.z,W[Z+ae+7]=0),M===!0&&(o.fromBufferAttribute(se,le),W[Z+ae+8]=o.x,W[Z+ae+9]=o.y,W[Z+ae+10]=o.z,W[Z+ae+11]=se.itemSize===4?o.w:1)}}_={count:y,texture:ne,size:new gt(E,R)},r.set(u,_),u.addEventListener("dispose",B)}let g=0;for(let T=0;T<f.length;T++)g+=f[T];let d=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,y=i[u.id];if(y===void 0||y.length!==m){y=[];for(let v=0;v<m;v++)y[v]=[v,0];i[u.id]=y}for(let v=0;v<m;v++){let M=y[v];M[0]=v,M[1]=f[v]}y.sort(Gg);for(let v=0;v<8;v++)v<m&&y[v][1]?(a[v][0]=y[v][0],a[v][1]=y[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Vg);let _=u.morphAttributes.position,g=u.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let M=a[v],D=M[0],U=M[1];D!==Number.MAX_SAFE_INTEGER&&U?(_&&u.getAttribute("morphTarget"+v)!==_[D]&&u.setAttribute("morphTarget"+v,_[D]),g&&u.getAttribute("morphNormal"+v)!==g[D]&&u.setAttribute("morphNormal"+v,g[D]),s[v]=U,d+=U):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let T=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function $g(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Fa=class extends bn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Qi,u!==Qi&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qi&&(i=Ai),i===void 0&&u===Bs&&(i=Ki),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dh=new bn,fh=new Fa(1,1);fh.compareFunction=oh;var ph=new La,mh=new dl,gh=new Oa,bu=[],Mu=[],wu=new Float32Array(16),Su=new Float32Array(9),Eu=new Float32Array(4);function js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function to(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Jg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),qt(t,i)}}function Zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;Su.set(i),n.uniformMatrix3fv(this.addr,!1,Su),qt(t,i)}}function Kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if($t(t,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),qt(t,i)}}function Qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function n0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function i0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function r0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function a0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function o0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?fh:dh;t.setTexture2D(e||r,s)}function l0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||mh,s)}function c0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||gh,s)}function u0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ph,s)}function h0(n){switch(n){case 5126:return qg;case 35664:return Xg;case 35665:return jg;case 35666:return Yg;case 35674:return Jg;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Qg;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(n,e){n.uniform1fv(this.addr,e)}function f0(n,e){let t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){let t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){let t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){let t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v0(n,e){let t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y0(n,e){let t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _0(n,e){n.uniform1iv(this.addr,e)}function x0(n,e){n.uniform2iv(this.addr,e)}function b0(n,e){n.uniform3iv(this.addr,e)}function M0(n,e){n.uniform4iv(this.addr,e)}function w0(n,e){n.uniform1uiv(this.addr,e)}function S0(n,e){n.uniform2uiv(this.addr,e)}function E0(n,e){n.uniform3uiv(this.addr,e)}function T0(n,e){n.uniform4uiv(this.addr,e)}function A0(n,e,t){let i=this.cache,s=e.length,r=to(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||dh,r[o])}function C0(n,e,t){let i=this.cache,s=e.length,r=to(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mh,r[o])}function R0(n,e,t){let i=this.cache,s=e.length,r=to(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gh,r[o])}function L0(n,e,t){let i=this.cache,s=e.length,r=to(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ph,r[o])}function P0(n){switch(n){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return v0;case 35676:return y0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return b0;case 35669:case 35673:return M0;case 5125:return w0;case 36294:return S0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return L0}}var ml=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=h0(t.type)}},gl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}},vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ko=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function I0(n,e,t){let i=n.name,s=i.length;for(Ko.lastIndex=0;;){let r=Ko.exec(i),o=Ko.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tu(t,c===void 0?new ml(a,n,e):new gl(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new vl(a),Tu(t,h)),t=h}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);I0(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Au(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var N0=37297,D0=0;function U0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function O0(n){let e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(n),i;switch(e===t?i="":e===Ea&&t===Sa?i="LinearDisplayP3ToLinearSRGB":e===Sa&&t===Ea&&(i="LinearSRGBToLinearDisplayP3"),n){case hi:case eo:return[i,"LinearTransferOETF"];case Ft:case Bl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+U0(n.getShaderSource(e),o)}else return s}function k0(n,e){let t=O0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function F0(n,e){let t;switch(e){case zd:t="Linear";break;case Hd:t="Reinhard";break;case Vd:t="OptimizedCineon";break;case Gd:t="ACESFilmic";break;case $d:t="AgX";break;case Wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function B0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function z0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function H0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ns(n){return n!==""}function Ru(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(G0,$0)}var W0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $0(n,e){let t=ht[e];if(t===void 0){let i=W0.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}var q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(n){return n.replace(q0,X0)}function X0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Y0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Fs:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function Z0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ka:e="ENVMAP_BLENDING_MULTIPLY";break;case Fd:e="ENVMAP_BLENDING_MIX";break;case Bd:e="ENVMAP_BLENDING_ADD";break}return e}function K0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Q0(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=j0(t),c=Y0(t),u=J0(t),h=Z0(t),f=K0(t),m=t.isWebGL2?"":B0(t),y=z0(t),_=H0(r),g=s.createProgram(),d,T,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),d.length>0&&(d+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),T.length>0&&(T+=`
`)):(d=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),T=[m,Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ri?F0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=yl(o),o=Ru(o,t),o=Lu(o,t),a=yl(a),a=Ru(a,t),a=Lu(a,t),o=Pu(o),a=Pu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let M=v+d+o,D=v+T+a,U=Au(s,s.VERTEX_SHADER,M),O=Au(s,s.FRAGMENT_SHADER,D);s.attachShader(g,U),s.attachShader(g,O),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function k(ne){if(n.debug.checkShaderErrors){let te=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(U).trim(),Y=s.getShaderInfoLog(O).trim(),G=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,U,O);else{let se=Cu(s,U,"vertex"),Z=Cu(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+se+`
`+Z)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(B===""||Y==="")&&(re=!1);re&&(ne.diagnostics={runnable:G,programLog:te,vertexShader:{log:B,prefix:d},fragmentShader:{log:Y,prefix:T}})}s.deleteShader(U),s.deleteShader(O),E=new Os(s,g),R=V0(s,g)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let R;this.getAttributes=function(){return R===void 0&&k(this),R};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(g,N0)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=O,this}var ev=0,_l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xl(e),t.set(e,i)),i}},xl=class{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}};function tv(n,e,t,i,s,r,o){let a=new Ia,l=new _l,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function g(E,R,W,ne,te){let B=ne.fog,Y=te.geometry,G=E.isMeshStandardMaterial?ne.environment:null,re=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),se=re&&re.mapping===Qa?re.image.height:null,Z=y[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=le!==void 0?le.length:0,he=0;Y.morphAttributes.position!==void 0&&(he=1),Y.morphAttributes.normal!==void 0&&(he=2),Y.morphAttributes.color!==void 0&&(he=3);let P,F,H,X;if(Z){let Xt=Gn[Z];P=Xt.vertexShader,F=Xt.fragmentShader}else P=E.vertexShader,F=E.fragmentShader,l.update(E),H=l.getVertexShaderID(E),X=l.getFragmentShaderID(E);let q=n.getRenderTarget(),ve=te.isInstancedMesh===!0,Ce=te.isBatchedMesh===!0,Pe=!!E.map,tt=!!E.matcap,j=!!re,Nt=!!E.aoMap,Oe=!!E.lightMap,ce=!!E.bumpMap,ge=!!E.normalMap,Ze=!!E.displacementMap,Ke=!!E.emissiveMap,N=!!E.metalnessMap,A=!!E.roughnessMap,K=E.anisotropy>0,pe=E.clearcoat>0,de=E.iridescence>0,me=E.sheen>0,Be=E.transmission>0,Se=K&&!!E.anisotropyMap,Ie=pe&&!!E.clearcoatMap,Xe=pe&&!!E.clearcoatNormalMap,ot=pe&&!!E.clearcoatRoughnessMap,fe=de&&!!E.iridescenceMap,xt=de&&!!E.iridescenceThicknessMap,dt=me&&!!E.sheenColorMap,Qe=me&&!!E.sheenRoughnessMap,Ge=!!E.specularMap,Ne=!!E.specularColorMap,rt=!!E.specularIntensityMap,_t=Be&&!!E.transmissionMap,Lt=Be&&!!E.thicknessMap,ut=!!E.gradientMap,ye=!!E.alphaMap,z=E.alphaTest>0,Me=!!E.alphaHash,we=!!E.extensions,Je=!!Y.attributes.uv1,qe=!!Y.attributes.uv2,Mt=!!Y.attributes.uv3,Et=Ri;return E.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Et=n.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:P,fragmentShader:F,defines:E.defines,customVertexShaderID:H,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ce,instancing:ve,instancingColor:ve&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:hi,map:Pe,matcap:tt,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:se,aoMap:Nt,lightMap:Oe,bumpMap:ce,normalMap:ge,displacementMap:f&&Ze,emissiveMap:Ke,normalMapObjectSpace:ge&&E.normalMapType===af,normalMapTangentSpace:ge&&E.normalMapType===Fl,metalnessMap:N,roughnessMap:A,anisotropy:K,anisotropyMap:Se,clearcoat:pe,clearcoatMap:Ie,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ot,iridescence:de,iridescenceMap:fe,iridescenceThicknessMap:xt,sheen:me,sheenColorMap:dt,sheenRoughnessMap:Qe,specularMap:Ge,specularColorMap:Ne,specularIntensityMap:rt,transmission:Be,transmissionMap:_t,thicknessMap:Lt,gradientMap:ut,opaque:E.transparent===!1&&E.blending===Ds,alphaMap:ye,alphaTest:z,alphaHash:Me,combine:E.combine,mapUv:Pe&&_(E.map.channel),aoMapUv:Nt&&_(E.aoMap.channel),lightMapUv:Oe&&_(E.lightMap.channel),bumpMapUv:ce&&_(E.bumpMap.channel),normalMapUv:ge&&_(E.normalMap.channel),displacementMapUv:Ze&&_(E.displacementMap.channel),emissiveMapUv:Ke&&_(E.emissiveMap.channel),metalnessMapUv:N&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:Se&&_(E.anisotropyMap.channel),clearcoatMapUv:Ie&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&_(E.sheenRoughnessMap.channel),specularMapUv:Ge&&_(E.specularMap.channel),specularColorMapUv:Ne&&_(E.specularColorMap.channel),specularIntensityMapUv:rt&&_(E.specularIntensityMap.channel),transmissionMapUv:_t&&_(E.transmissionMap.channel),thicknessMapUv:Lt&&_(E.thicknessMap.channel),alphaMapUv:ye&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Je,vertexUv2s:qe,vertexUv3s:Mt,pointsUvs:te.isPoints===!0&&!!Y.attributes.uv&&(Pe||ye),fog:!!B,useFog:E.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:he,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&At.getTransfer(E.map.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xn,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:we&&E.extensions.derivatives===!0,extensionFragDepth:we&&E.extensions.fragDepth===!0,extensionDrawBuffers:we&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let W in E.defines)R.push(W),R.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(T(R,E),v(R,E),R.push(n.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function T(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function v(E,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),E.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function M(E){let R=y[E.type],W;if(R){let ne=Gn[R];W=Wf.clone(ne.uniforms)}else W=E.uniforms;return W}function D(E,R){let W;for(let ne=0,te=c.length;ne<te;ne++){let B=c[ne];if(B.cacheKey===R){W=B,++W.usedTimes;break}}return W===void 0&&(W=new Q0(n,R,E,r),c.push(W)),W}function U(E){if(--E.usedTimes===0){let R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function O(E){l.remove(E)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:D,releaseProgram:U,releaseShaderCache:O,programs:c,dispose:k}}function nv(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Du(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,m,y,_,g){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:y,renderOrder:h.renderOrder,z:_,group:g},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=_,d.group=g),e++,d}function a(h,f,m,y,_,g){let d=o(h,f,m,y,_,g);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(h,f,m,y,_,g){let d=o(h,f,m,y,_,g);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||iv),i.length>1&&i.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function u(){for(let h=e,f=n.length;h<f;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function sv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Du,n.set(i,[o])):s>=r.length?(o=new Du,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new lt};break;case"SpotLight":t={position:new V,direction:new V,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function av(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ov=0;function lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cv(n,e){let t=new rv,i=av(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new V);let r=new V,o=new ft,a=new ft;function l(u,h){let f=0,m=0,y=0;for(let ne=0;ne<9;ne++)s.probe[ne].set(0,0,0);let _=0,g=0,d=0,T=0,v=0,M=0,D=0,U=0,O=0,k=0,E=0;u.sort(lv);let R=h===!0?Math.PI:1;for(let ne=0,te=u.length;ne<te;ne++){let B=u[ne],Y=B.color,G=B.intensity,re=B.distance,se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=Y.r*G*R,m+=Y.g*G*R,y+=Y.b*G*R;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(B.sh.coefficients[Z],G);E++}else if(B.isDirectionalLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){let le=B.shadow,ae=i.get(B);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,s.directionalShadow[_]=ae,s.directionalShadowMap[_]=se,s.directionalShadowMatrix[_]=B.shadow.matrix,M++}s.directional[_]=Z,_++}else if(B.isSpotLight){let Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(Y).multiplyScalar(G*R),Z.distance=re,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,s.spot[d]=Z;let le=B.shadow;if(B.map&&(s.spotLightMap[O]=B.map,O++,le.updateMatrices(B),B.castShadow&&k++),s.spotLightMatrix[d]=le.matrix,B.castShadow){let ae=i.get(B);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,s.spotShadow[d]=ae,s.spotShadowMap[d]=se,U++}d++}else if(B.isRectAreaLight){let Z=t.get(B);Z.color.copy(Y).multiplyScalar(G),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),s.rectArea[T]=Z,T++}else if(B.isPointLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*R),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){let le=B.shadow,ae=i.get(B);ae.shadowBias=le.bias,ae.shadowNormalBias=le.normalBias,ae.shadowRadius=le.radius,ae.shadowMapSize=le.mapSize,ae.shadowCameraNear=le.camera.near,ae.shadowCameraFar=le.camera.far,s.pointShadow[g]=ae,s.pointShadowMap[g]=se,s.pointShadowMatrix[g]=B.shadow.matrix,D++}s.point[g]=Z,g++}else if(B.isHemisphereLight){let Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(G*R),Z.groundColor.copy(B.groundColor).multiplyScalar(G*R),s.hemi[v]=Z,v++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=y;let W=s.hash;(W.directionalLength!==_||W.pointLength!==g||W.spotLength!==d||W.rectAreaLength!==T||W.hemiLength!==v||W.numDirectionalShadows!==M||W.numPointShadows!==D||W.numSpotShadows!==U||W.numSpotMaps!==O||W.numLightProbes!==E)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=T,s.point.length=g,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+O-k,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=E,W.directionalLength=_,W.pointLength=g,W.spotLength=d,W.rectAreaLength=T,W.hemiLength=v,W.numDirectionalShadows=M,W.numPointShadows=D,W.numSpotShadows=U,W.numSpotMaps=O,W.numLightProbes=E,s.version=ov++)}function c(u,h){let f=0,m=0,y=0,_=0,g=0,d=h.matrixWorldInverse;for(let T=0,v=u.length;T<v;T++){let M=u[T];if(M.isDirectionalLight){let D=s.directional[f];D.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),f++}else if(M.isSpotLight){let D=s.spot[y];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(d),D.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),y++}else if(M.isRectAreaLight){let D=s.rectArea[_];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),D.halfWidth.set(M.width*.5,0,0),D.halfHeight.set(0,M.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let D=s.point[m];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let D=s.hemi[g];D.direction.setFromMatrixPosition(M.matrixWorld),D.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:s}}function Uu(n,e){let t=new cv(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uv(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Uu(n,e),t.set(r,[l])):o>=a.length?(l=new Uu(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var bl=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ml=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`;function fv(n,e,t){let i=new Mr,s=new gt,r=new gt,o=new Ct,a=new bl({depthPacking:rf}),l=new Ml,c={},u=t.maxTextureSize,h={[Wn]:pn,[pn]:Wn,[xn]:xn},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:hv,fragmentShader:dv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let y=new Cn;y.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new hn(y,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let d=this.type;this.render=function(U,O,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;let E=n.getRenderTarget(),R=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(Ci),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);let te=d!==oi&&this.type===oi,B=d===oi&&this.type!==oi;for(let Y=0,G=U.length;Y<G;Y++){let re=U[Y],se=re.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);let Z=se.getFrameExtents();if(s.multiply(Z),r.copy(se.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,se.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,se.mapSize.y=r.y)),se.map===null||te===!0||B===!0){let ae=this.type!==oi?{minFilter:Zt,magFilter:Zt}:{};se.map!==null&&se.map.dispose(),se.map=new di(s.x,s.y,ae),se.map.texture.name=re.name+".shadowMap",se.camera.updateProjectionMatrix()}n.setRenderTarget(se.map),n.clear();let le=se.getViewportCount();for(let ae=0;ae<le;ae++){let he=se.getViewport(ae);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),ne.viewport(o),se.updateMatrices(re,ae),i=se.getFrustum(),M(O,k,se.camera,re,this.type)}se.isPointLightShadow!==!0&&this.type===oi&&T(se,k),se.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(E,R,W)};function T(U,O){let k=e.update(_);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new di(s.x,s.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(O,null,k,f,_,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(O,null,k,m,_,null)}function v(U,O,k,E){let R=null,W=k.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(W!==void 0)R=W;else if(R=k.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let ne=R.uuid,te=O.uuid,B=c[ne];B===void 0&&(B={},c[ne]=B);let Y=B[te];Y===void 0&&(Y=R.clone(),B[te]=Y,O.addEventListener("dispose",D)),R=Y}if(R.visible=O.visible,R.wireframe=O.wireframe,E===oi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:h[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ne=n.properties.get(R);ne.light=k}return R}function M(U,O,k,E,R){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===oi)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,U.matrixWorld);let te=e.update(U),B=U.material;if(Array.isArray(B)){let Y=te.groups;for(let G=0,re=Y.length;G<re;G++){let se=Y[G],Z=B[se.materialIndex];if(Z&&Z.visible){let le=v(U,Z,E,R);U.onBeforeShadow(n,U,O,k,te,le,se),n.renderBufferDirect(k,null,te,le,U,se),U.onAfterShadow(n,U,O,k,te,le,se)}}}else if(B.visible){let Y=v(U,B,E,R);U.onBeforeShadow(n,U,O,k,te,Y,null),n.renderBufferDirect(k,null,te,Y,U,null),U.onAfterShadow(n,U,O,k,te,Y,null)}}let ne=U.children;for(let te=0,B=ne.length;te<B;te++)M(ne[te],O,k,E,R)}function D(U){U.target.removeEventListener("dispose",D);for(let k in c){let E=c[k],R=U.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function pv(n,e,t){let i=t.isWebGL2;function s(){let z=!1,Me=new Ct,we=null,Je=new Ct(0,0,0,0);return{setMask:function(qe){we!==qe&&!z&&(n.colorMask(qe,qe,qe,qe),we=qe)},setLocked:function(qe){z=qe},setClear:function(qe,Mt,Et,bt,Xt){Xt===!0&&(qe*=bt,Mt*=bt,Et*=bt),Me.set(qe,Mt,Et,bt),Je.equals(Me)===!1&&(n.clearColor(qe,Mt,Et,bt),Je.copy(Me))},reset:function(){z=!1,we=null,Je.set(-1,0,0,0)}}}function r(){let z=!1,Me=null,we=null,Je=null;return{setTest:function(qe){qe?Ce(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(qe){Me!==qe&&!z&&(n.depthMask(qe),Me=qe)},setFunc:function(qe){if(we!==qe){switch(qe){case Pd:n.depthFunc(n.NEVER);break;case Id:n.depthFunc(n.ALWAYS);break;case Nd:n.depthFunc(n.LESS);break;case xa:n.depthFunc(n.LEQUAL);break;case Dd:n.depthFunc(n.EQUAL);break;case Ud:n.depthFunc(n.GEQUAL);break;case Od:n.depthFunc(n.GREATER);break;case kd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=qe}},setLocked:function(qe){z=qe},setClear:function(qe){Je!==qe&&(n.clearDepth(qe),Je=qe)},reset:function(){z=!1,Me=null,we=null,Je=null}}}function o(){let z=!1,Me=null,we=null,Je=null,qe=null,Mt=null,Et=null,bt=null,Xt=null;return{setTest:function(Tt){z||(Tt?Ce(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Tt){Me!==Tt&&!z&&(n.stencilMask(Tt),Me=Tt)},setFunc:function(Tt,Jt,Mn){(we!==Tt||Je!==Jt||qe!==Mn)&&(n.stencilFunc(Tt,Jt,Mn),we=Tt,Je=Jt,qe=Mn)},setOp:function(Tt,Jt,Mn){(Mt!==Tt||Et!==Jt||bt!==Mn)&&(n.stencilOp(Tt,Jt,Mn),Mt=Tt,Et=Jt,bt=Mn)},setLocked:function(Tt){z=Tt},setClear:function(Tt){Xt!==Tt&&(n.clearStencil(Tt),Xt=Tt)},reset:function(){z=!1,Me=null,we=null,Je=null,qe=null,Mt=null,Et=null,bt=null,Xt=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap,f={},m={},y=new WeakMap,_=[],g=null,d=!1,T=null,v=null,M=null,D=null,U=null,O=null,k=null,E=new lt(0,0,0),R=0,W=!1,ne=null,te=null,B=null,Y=null,G=null,re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,Z=0,le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(le)[1]),se=Z>=1):le.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),se=Z>=2);let ae=null,he={},P=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),H=new Ct().fromArray(P),X=new Ct().fromArray(F);function q(z,Me,we,Je){let qe=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(z,Mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<we;Et++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Je,0,n.RGBA,n.UNSIGNED_BYTE,qe):n.texImage2D(Me+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qe);return Mt}let ve={};ve[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(xa),Ke(!1),N(fc),Ce(n.CULL_FACE),ge(Ci);function Ce(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function Pe(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function tt(z,Me){return m[z]!==Me?(n.bindFramebuffer(z,Me),m[z]=Me,i&&(z===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),z===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function j(z,Me){let we=_,Je=!1;if(z)if(we=y.get(Me),we===void 0&&(we=[],y.set(Me,we)),z.isWebGLMultipleRenderTargets){let qe=z.texture;if(we.length!==qe.length||we[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Et=qe.length;Mt<Et;Mt++)we[Mt]=n.COLOR_ATTACHMENT0+Mt;we.length=qe.length,Je=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Je=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Je=!0);Je&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function Nt(z){return g!==z?(n.useProgram(z),g=z,!0):!1}let Oe={[Ji]:n.FUNC_ADD,[gd]:n.FUNC_SUBTRACT,[vd]:n.FUNC_REVERSE_SUBTRACT};if(i)Oe[vc]=n.MIN,Oe[yc]=n.MAX;else{let z=e.get("EXT_blend_minmax");z!==null&&(Oe[vc]=z.MIN_EXT,Oe[yc]=z.MAX_EXT)}let ce={[yd]:n.ZERO,[_d]:n.ONE,[xd]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[Td]:n.SRC_ALPHA_SATURATE,[Sd]:n.DST_COLOR,[Md]:n.DST_ALPHA,[bd]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[Ed]:n.ONE_MINUS_DST_COLOR,[wd]:n.ONE_MINUS_DST_ALPHA,[Ad]:n.CONSTANT_COLOR,[Cd]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Ld]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(z,Me,we,Je,qe,Mt,Et,bt,Xt,Tt){if(z===Ci){d===!0&&(Pe(n.BLEND),d=!1);return}if(d===!1&&(Ce(n.BLEND),d=!0),z!==md){if(z!==T||Tt!==W){if((v!==Ji||U!==Ji)&&(n.blendEquation(n.FUNC_ADD),v=Ji,U=Ji),Tt)switch(z){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pc:n.blendFunc(n.ONE,n.ONE);break;case mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,D=null,O=null,k=null,E.set(0,0,0),R=0,T=z,W=Tt}return}qe=qe||Me,Mt=Mt||we,Et=Et||Je,(Me!==v||qe!==U)&&(n.blendEquationSeparate(Oe[Me],Oe[qe]),v=Me,U=qe),(we!==M||Je!==D||Mt!==O||Et!==k)&&(n.blendFuncSeparate(ce[we],ce[Je],ce[Mt],ce[Et]),M=we,D=Je,O=Mt,k=Et),(bt.equals(E)===!1||Xt!==R)&&(n.blendColor(bt.r,bt.g,bt.b,Xt),E.copy(bt),R=Xt),T=z,W=!1}function Ze(z,Me){z.side===xn?Pe(n.CULL_FACE):Ce(n.CULL_FACE);let we=z.side===pn;Me&&(we=!we),Ke(we),z.blending===Ds&&z.transparent===!1?ge(Ci):ge(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);let Je=z.stencilWrite;c.setTest(Je),Je&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),K(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(z){ne!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),ne=z)}function N(z){z!==dd?(Ce(n.CULL_FACE),z!==te&&(z===fc?n.cullFace(n.BACK):z===fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),te=z}function A(z){z!==B&&(se&&n.lineWidth(z),B=z)}function K(z,Me,we){z?(Ce(n.POLYGON_OFFSET_FILL),(Y!==Me||G!==we)&&(n.polygonOffset(Me,we),Y=Me,G=we)):Pe(n.POLYGON_OFFSET_FILL)}function pe(z){z?Ce(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function de(z){z===void 0&&(z=n.TEXTURE0+re-1),ae!==z&&(n.activeTexture(z),ae=z)}function me(z,Me,we){we===void 0&&(ae===null?we=n.TEXTURE0+re-1:we=ae);let Je=he[we];Je===void 0&&(Je={type:void 0,texture:void 0},he[we]=Je),(Je.type!==z||Je.texture!==Me)&&(ae!==we&&(n.activeTexture(we),ae=we),n.bindTexture(z,Me||ve[z]),Je.type=z,Je.texture=Me)}function Be(){let z=he[ae];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xe(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(z){H.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),H.copy(z))}function _t(z){X.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function Lt(z,Me){let we=h.get(Me);we===void 0&&(we=new WeakMap,h.set(Me,we));let Je=we.get(z);Je===void 0&&(Je=n.getUniformBlockIndex(Me,z.name),we.set(z,Je))}function ut(z,Me){let Je=h.get(Me).get(z);u.get(Me)!==Je&&(n.uniformBlockBinding(Me,Je,z.__bindingPointIndex),u.set(Me,Je))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ae=null,he={},m={},y=new WeakMap,_=[],g=null,d=!1,T=null,v=null,M=null,D=null,U=null,O=null,k=null,E=new lt(0,0,0),R=0,W=!1,ne=null,te=null,B=null,Y=null,G=null,H.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:Pe,bindFramebuffer:tt,drawBuffers:j,useProgram:Nt,setBlending:ge,setMaterial:Ze,setFlipSided:Ke,setCullFace:N,setLineWidth:A,setPolygonOffset:K,setScissorTest:pe,activeTexture:de,bindTexture:me,unbindTexture:Be,compressedTexImage2D:Se,compressedTexImage3D:Ie,texImage2D:Ge,texImage3D:Ne,updateUBOMapping:Lt,uniformBlockBinding:ut,texStorage2D:dt,texStorage3D:Qe,texSubImage2D:Xe,texSubImage3D:ot,compressedTexSubImage2D:fe,compressedTexSubImage3D:xt,scissor:rt,viewport:_t,reset:ye}}function mv(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,A){return m?new OffscreenCanvas(N,A):_r("canvas")}function _(N,A,K,pe){let de=1;if((N.width>pe||N.height>pe)&&(de=pe/Math.max(N.width,N.height)),de<1||A===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let me=A?Aa:Math.floor,Be=me(de*N.width),Se=me(de*N.height);h===void 0&&(h=y(Be,Se));let Ie=K?y(Be,Se):h;return Ie.width=Be,Ie.height=Se,Ie.getContext("2d").drawImage(N,0,0,Be,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Be+"x"+Se+")."),Ie}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function g(N){return ul(N.width)&&ul(N.height)}function d(N){return a?!1:N.wrapS!==sn||N.wrapT!==sn||N.minFilter!==Zt&&N.minFilter!==cn}function T(N,A){return N.generateMipmaps&&A&&N.minFilter!==Zt&&N.minFilter!==cn}function v(N){n.generateMipmap(N)}function M(N,A,K,pe,de=!1){if(a===!1)return A;if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=A;if(A===n.RED&&(K===n.FLOAT&&(me=n.R32F),K===n.HALF_FLOAT&&(me=n.R16F),K===n.UNSIGNED_BYTE&&(me=n.R8)),A===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(me=n.R8UI),K===n.UNSIGNED_SHORT&&(me=n.R16UI),K===n.UNSIGNED_INT&&(me=n.R32UI),K===n.BYTE&&(me=n.R8I),K===n.SHORT&&(me=n.R16I),K===n.INT&&(me=n.R32I)),A===n.RG&&(K===n.FLOAT&&(me=n.RG32F),K===n.HALF_FLOAT&&(me=n.RG16F),K===n.UNSIGNED_BYTE&&(me=n.RG8)),A===n.RGBA){let Be=de?wa:At.getTransfer(pe);K===n.FLOAT&&(me=n.RGBA32F),K===n.HALF_FLOAT&&(me=n.RGBA16F),K===n.UNSIGNED_BYTE&&(me=Be===It?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function D(N,A,K){return T(N,K)===!0||N.isFramebufferTexture&&N.minFilter!==Zt&&N.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function U(N){return N===Zt||N===xc||N===So?n.NEAREST:n.LINEAR}function O(N){let A=N.target;A.removeEventListener("dispose",O),E(A),A.isVideoTexture&&u.delete(A)}function k(N){let A=N.target;A.removeEventListener("dispose",k),W(A)}function E(N){let A=i.get(N);if(A.__webglInit===void 0)return;let K=N.source,pe=f.get(K);if(pe){let de=pe[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&R(N),Object.keys(pe).length===0&&f.delete(K)}i.remove(N)}function R(N){let A=i.get(N);n.deleteTexture(A.__webglTexture);let K=N.source,pe=f.get(K);delete pe[A.__cacheKey],o.memory.textures--}function W(N){let A=N.texture,K=i.get(N),pe=i.get(A);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(K.__webglFramebuffer[de]))for(let me=0;me<K.__webglFramebuffer[de].length;me++)n.deleteFramebuffer(K.__webglFramebuffer[de][me]);else n.deleteFramebuffer(K.__webglFramebuffer[de]);K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer[de])}else{if(Array.isArray(K.__webglFramebuffer))for(let de=0;de<K.__webglFramebuffer.length;de++)n.deleteFramebuffer(K.__webglFramebuffer[de]);else n.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&n.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let de=0;de<K.__webglColorRenderbuffer.length;de++)K.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(K.__webglColorRenderbuffer[de]);K.__webglDepthRenderbuffer&&n.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let de=0,me=A.length;de<me;de++){let Be=i.get(A[de]);Be.__webglTexture&&(n.deleteTexture(Be.__webglTexture),o.memory.textures--),i.remove(A[de])}i.remove(A),i.remove(N)}let ne=0;function te(){ne=0}function B(){let N=ne;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),ne+=1,N}function Y(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function G(N,A){let K=i.get(N);if(N.isVideoTexture&&Ze(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){let pe=N.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(K,N,A);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+A)}function re(N,A){let K=i.get(N);if(N.version>0&&K.__version!==N.version){H(K,N,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+A)}function se(N,A){let K=i.get(N);if(N.version>0&&K.__version!==N.version){H(K,N,A);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+A)}function Z(N,A){let K=i.get(N);if(N.version>0&&K.__version!==N.version){X(K,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+A)}let le={[Pi]:n.REPEAT,[sn]:n.CLAMP_TO_EDGE,[ll]:n.MIRRORED_REPEAT},ae={[Zt]:n.NEAREST,[xc]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Xd]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},he={[of]:n.NEVER,[ff]:n.ALWAYS,[lf]:n.LESS,[oh]:n.LEQUAL,[cf]:n.EQUAL,[df]:n.GEQUAL,[uf]:n.GREATER,[hf]:n.NOTEQUAL};function P(N,A,K){if(K?(n.texParameteri(N,n.TEXTURE_WRAP_S,le[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,le[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,le[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ae[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ae[A.minFilter])):(n.texParameteri(N,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(N,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==sn||A.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(N,n.TEXTURE_MAG_FILTER,U(A.magFilter)),n.texParameteri(N,n.TEXTURE_MIN_FILTER,U(A.minFilter)),A.minFilter!==Zt&&A.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,he[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Zt||A.minFilter!==So&&A.minFilter!==Ii||A.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(N,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function F(N,A){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",O));let pe=A.source,de=f.get(pe);de===void 0&&(de={},f.set(pe,de));let me=Y(A);if(me!==N.__cacheKey){de[me]===void 0&&(de[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),de[me].usedTimes++;let Be=de[N.__cacheKey];Be!==void 0&&(de[N.__cacheKey].usedTimes--,Be.usedTimes===0&&R(A)),N.__cacheKey=me,N.__webglTexture=de[me].texture}return K}function H(N,A,K){let pe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=n.TEXTURE_3D);let de=F(N,A),me=A.source;t.bindTexture(pe,N.__webglTexture,n.TEXTURE0+K);let Be=i.get(me);if(me.version!==Be.__version||de===!0){t.activeTexture(n.TEXTURE0+K);let Se=At.getPrimaries(At.workingColorSpace),Ie=A.colorSpace===Tn?null:At.getPrimaries(A.colorSpace),Xe=A.colorSpace===Tn||Se===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ot=d(A)&&g(A.image)===!1,fe=_(A.image,ot,!1,s.maxTextureSize);fe=Ke(A,fe);let xt=g(fe)||a,dt=r.convert(A.format,A.colorSpace),Qe=r.convert(A.type),Ge=M(A.internalFormat,dt,Qe,A.colorSpace,A.isVideoTexture);P(pe,A,xt);let Ne,rt=A.mipmaps,_t=a&&A.isVideoTexture!==!0&&Ge!==rh,Lt=Be.__version===void 0||de===!0,ut=D(A,fe,xt);if(A.isDepthTexture)Ge=n.DEPTH_COMPONENT,a?A.type===ci?Ge=n.DEPTH_COMPONENT32F:A.type===Ai?Ge=n.DEPTH_COMPONENT24:A.type===Ki?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:A.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Qi&&Ge===n.DEPTH_COMPONENT&&A.type!==kl&&A.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ai,Qe=r.convert(A.type)),A.format===Bs&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,A.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ki,Qe=r.convert(A.type))),Lt&&(_t?t.texStorage2D(n.TEXTURE_2D,1,Ge,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ge,fe.width,fe.height,0,dt,Qe,null));else if(A.isDataTexture)if(rt.length>0&&xt){_t&&Lt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let ye=0,z=rt.length;ye<z;ye++)Ne=rt[ye],_t?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,dt,Qe,Ne.data):t.texImage2D(n.TEXTURE_2D,ye,Ge,Ne.width,Ne.height,0,dt,Qe,Ne.data);A.generateMipmaps=!1}else _t?(Lt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,dt,Qe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,fe.width,fe.height,0,dt,Qe,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){_t&&Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,rt[0].width,rt[0].height,fe.depth);for(let ye=0,z=rt.length;ye<z;ye++)Ne=rt[ye],A.format!==En?dt!==null?_t?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,fe.depth,dt,Ne.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Ge,Ne.width,Ne.height,fe.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,fe.depth,dt,Qe,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Ge,Ne.width,Ne.height,fe.depth,0,dt,Qe,Ne.data)}else{_t&&Lt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let ye=0,z=rt.length;ye<z;ye++)Ne=rt[ye],A.format!==En?dt!==null?_t?t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,dt,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Ge,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,dt,Qe,Ne.data):t.texImage2D(n.TEXTURE_2D,ye,Ge,Ne.width,Ne.height,0,dt,Qe,Ne.data)}else if(A.isDataArrayTexture)_t?(Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,dt,Qe,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,fe.width,fe.height,fe.depth,0,dt,Qe,fe.data);else if(A.isData3DTexture)_t?(Lt&&t.texStorage3D(n.TEXTURE_3D,ut,Ge,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,dt,Qe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,fe.width,fe.height,fe.depth,0,dt,Qe,fe.data);else if(A.isFramebufferTexture){if(Lt)if(_t)t.texStorage2D(n.TEXTURE_2D,ut,Ge,fe.width,fe.height);else{let ye=fe.width,z=fe.height;for(let Me=0;Me<ut;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ge,ye,z,0,dt,Qe,null),ye>>=1,z>>=1}}else if(rt.length>0&&xt){_t&&Lt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let ye=0,z=rt.length;ye<z;ye++)Ne=rt[ye],_t?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,dt,Qe,Ne):t.texImage2D(n.TEXTURE_2D,ye,Ge,dt,Qe,Ne);A.generateMipmaps=!1}else _t?(Lt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Qe,fe)):t.texImage2D(n.TEXTURE_2D,0,Ge,dt,Qe,fe);T(A,xt)&&v(pe),Be.__version=me.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function X(N,A,K){if(A.image.length!==6)return;let pe=F(N,A),de=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+K);let me=i.get(de);if(de.version!==me.__version||pe===!0){t.activeTexture(n.TEXTURE0+K);let Be=At.getPrimaries(At.workingColorSpace),Se=A.colorSpace===Tn?null:At.getPrimaries(A.colorSpace),Ie=A.colorSpace===Tn||Be===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Xe=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,fe=[];for(let ye=0;ye<6;ye++)!Xe&&!ot?fe[ye]=_(A.image[ye],!1,!0,s.maxCubemapSize):fe[ye]=ot?A.image[ye].image:A.image[ye],fe[ye]=Ke(A,fe[ye]);let xt=fe[0],dt=g(xt)||a,Qe=r.convert(A.format,A.colorSpace),Ge=r.convert(A.type),Ne=M(A.internalFormat,Qe,Ge,A.colorSpace),rt=a&&A.isVideoTexture!==!0,_t=me.__version===void 0||pe===!0,Lt=D(A,xt,dt);P(n.TEXTURE_CUBE_MAP,A,dt);let ut;if(Xe){rt&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,Ne,xt.width,xt.height);for(let ye=0;ye<6;ye++){ut=fe[ye].mipmaps;for(let z=0;z<ut.length;z++){let Me=ut[z];A.format!==En?Qe!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,0,0,Me.width,Me.height,Qe,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,0,0,Me.width,Me.height,Qe,Ge,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,Ne,Me.width,Me.height,0,Qe,Ge,Me.data)}}}else{ut=A.mipmaps,rt&&_t&&(ut.length>0&&Lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,Ne,fe[0].width,fe[0].height));for(let ye=0;ye<6;ye++)if(ot){rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,fe[ye].width,fe[ye].height,Qe,Ge,fe[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ne,fe[ye].width,fe[ye].height,0,Qe,Ge,fe[ye].data);for(let z=0;z<ut.length;z++){let we=ut[z].image[ye].image;rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,0,0,we.width,we.height,Qe,Ge,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,Ne,we.width,we.height,0,Qe,Ge,we.data)}}else{rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Qe,Ge,fe[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ne,Qe,Ge,fe[ye]);for(let z=0;z<ut.length;z++){let Me=ut[z];rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,0,0,Qe,Ge,Me.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,Ne,Qe,Ge,Me.image[ye])}}}T(A,dt)&&v(n.TEXTURE_CUBE_MAP),me.__version=de.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function q(N,A,K,pe,de,me){let Be=r.convert(K.format,K.colorSpace),Se=r.convert(K.type),Ie=M(K.internalFormat,Be,Se,K.colorSpace);if(!i.get(A).__hasExternalTextures){let ot=Math.max(1,A.width>>me),fe=Math.max(1,A.height>>me);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,me,Ie,ot,fe,A.depth,0,Be,Se,null):t.texImage2D(de,me,Ie,ot,fe,0,Be,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),ge(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,de,i.get(K).__webglTexture,0,ce(A)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,de,i.get(K).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(N,A,K){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let pe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(K||ge(A)){let de=A.depthTexture;de&&de.isDepthTexture&&(de.type===ci?pe=n.DEPTH_COMPONENT32F:de.type===Ai&&(pe=n.DEPTH_COMPONENT24));let me=ce(A);ge(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,pe,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,me,pe,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){let pe=ce(A);K&&ge(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,A.width,A.height):ge(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,N)}else{let pe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let de=0;de<pe.length;de++){let me=pe[de],Be=r.convert(me.format,me.colorSpace),Se=r.convert(me.type),Ie=M(me.internalFormat,Be,Se,me.colorSpace),Xe=ce(A);K&&ge(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ie,A.width,A.height):ge(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ie,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);let pe=i.get(A.depthTexture).__webglTexture,de=ce(A);if(A.depthTexture.format===Qi)ge(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(A.depthTexture.format===Bs)ge(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Pe(N){let A=i.get(N),K=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ce(A.__webglFramebuffer,N)}else if(K){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]=n.createRenderbuffer(),ve(A.__webglDepthbuffer[pe],N,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),ve(A.__webglDepthbuffer,N,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(N,A,K){let pe=i.get(N);A!==void 0&&q(pe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Pe(N)}function j(N){let A=N.texture,K=i.get(N),pe=i.get(A);N.addEventListener("dispose",k),N.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=A.version,o.memory.textures++);let de=N.isWebGLCubeRenderTarget===!0,me=N.isWebGLMultipleRenderTargets===!0,Be=g(N)||a;if(de){K.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[Se]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)K.__webglFramebuffer[Se][Ie]=n.createFramebuffer()}else K.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)K.__webglFramebuffer[Se]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(me)if(s.drawBuffers){let Se=N.texture;for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){let ot=i.get(Se[Ie]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&ge(N)===!1){let Se=me?A:[A];K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Se.length;Ie++){let Xe=Se[Ie];K.__webglColorRenderbuffer[Ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[Ie]);let ot=r.convert(Xe.format,Xe.colorSpace),fe=r.convert(Xe.type),xt=M(Xe.internalFormat,ot,fe,Xe.colorSpace,N.isXRRenderTarget===!0),dt=ce(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,xt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,K.__webglColorRenderbuffer[Ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),P(n.TEXTURE_CUBE_MAP,A,Be);for(let Se=0;Se<6;Se++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)q(K.__webglFramebuffer[Se][Ie],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie);else q(K.__webglFramebuffer[Se],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);T(A,Be)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){let Se=N.texture;for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){let ot=Se[Ie],fe=i.get(ot);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),P(n.TEXTURE_2D,ot,Be),q(K.__webglFramebuffer,N,ot,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,0),T(ot,Be)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Se=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,pe.__webglTexture),P(Se,A,Be),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)q(K.__webglFramebuffer[Ie],N,A,n.COLOR_ATTACHMENT0,Se,Ie);else q(K.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,Se,0);T(A,Be)&&v(Se),t.unbindTexture()}N.depthBuffer&&Pe(N)}function Nt(N){let A=g(N)||a,K=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let pe=0,de=K.length;pe<de;pe++){let me=K[pe];if(T(me,A)){let Be=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(me).__webglTexture;t.bindTexture(Be,Se),v(Be),t.unbindTexture()}}}function Oe(N){if(a&&N.samples>0&&ge(N)===!1){let A=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],K=N.width,pe=N.height,de=n.COLOR_BUFFER_BIT,me=[],Be=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(N),Ie=N.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Xe=0;Xe<A.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Xe=0;Xe<A.length;Xe++){me.push(n.COLOR_ATTACHMENT0+Xe),N.depthBuffer&&me.push(Be);let ot=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(ot===!1&&(N.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Ie&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Xe]),ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Be])),Ie){let fe=i.get(A[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,K,pe,0,0,K,pe,de,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ie)for(let Xe=0;Xe<A.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Xe]);let ot=i.get(A[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function ce(N){return Math.min(s.maxSamples,N.samples)}function ge(N){let A=i.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ze(N){let A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Ke(N,A){let K=N.colorSpace,pe=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===cl||K!==hi&&K!==Tn&&(At.getTransfer(K)===It?a===!1?e.has("EXT_sRGB")===!0&&pe===En?(N.format=cl,N.minFilter=cn,N.generateMipmaps=!1):A=Ca.sRGBToLinear(A):(pe!==En||de!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}this.allocateTextureUnit=B,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=se,this.setTextureCube=Z,this.rebindTextures=tt,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ge}function gv(n,e,t){let i=t.isWebGL2;function s(r,o=Tn){let a,l=At.getTransfer(o);if(r===Li)return n.UNSIGNED_BYTE;if(r===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===th)return n.UNSIGNED_SHORT_5_5_5_1;if(r===jd)return n.BYTE;if(r===Yd)return n.SHORT;if(r===kl)return n.UNSIGNED_SHORT;if(r===Qu)return n.INT;if(r===Ai)return n.UNSIGNED_INT;if(r===ci)return n.FLOAT;if(r===yr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jd)return n.ALPHA;if(r===En)return n.RGBA;if(r===Zd)return n.LUMINANCE;if(r===Kd)return n.LUMINANCE_ALPHA;if(r===Qi)return n.DEPTH_COMPONENT;if(r===Bs)return n.DEPTH_STENCIL;if(r===cl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Qd)return n.RED;if(r===nh)return n.RED_INTEGER;if(r===ef)return n.RG;if(r===ih)return n.RG_INTEGER;if(r===sh)return n.RGBA_INTEGER;if(r===Eo||r===To||r===Ao||r===Co)if(l===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Eo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Eo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===To)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ao)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bc||r===Mc||r===wc||r===Sc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ec||r===Tc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ec)return l===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Tc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ac||r===Cc||r===Rc||r===Lc||r===Pc||r===Ic||r===Nc||r===Dc||r===Uc||r===Oc||r===kc||r===Fc||r===Bc||r===zc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ac)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ic)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zc)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ro||r===Hc||r===Vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ro)return l===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tf||r===Gc||r===Wc||r===$c)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ro)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$c)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ki?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var wl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fn=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vv={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,y=.005;c.inputState.pinching&&f>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sl=class extends Ni{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,y=null,_=t.getContextAttributes(),g=null,d=null,T=[],v=[],M=new gt,D=null,U=new Vt;U.layers.enable(1),U.viewport=new Ct;let O=new Vt;O.layers.enable(2),O.viewport=new Ct;let k=[U,O],E=new wl;E.layers.enable(1),E.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let F=T[P];return F===void 0&&(F=new vr,T[P]=F),F.getTargetRaySpace()},this.getControllerGrip=function(P){let F=T[P];return F===void 0&&(F=new vr,T[P]=F),F.getGripSpace()},this.getHand=function(P){let F=T[P];return F===void 0&&(F=new vr,T[P]=F),F.getHandSpace()};function ne(P){let F=v.indexOf(P.inputSource);if(F===-1)return;let H=T[F];H!==void 0&&(H.update(P.inputSource,P.frame,c||o),H.dispatchEvent({type:P.type,data:P.inputSource}))}function te(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",B);for(let P=0;P<T.length;P++){let F=v[P];F!==null&&(v[P]=null,T[P].disconnect(F))}R=null,W=null,e.setRenderTarget(g),m=null,f=null,h=null,s=null,d=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",te),s.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let F={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,F),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new di(m.framebufferWidth,m.framebufferHeight,{format:En,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let F=null,H=null,X=null;_.depth&&(X=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=_.stencil?Bs:Qi,H=_.stencil?Ki:Ai);let q={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new di(f.textureWidth,f.textureHeight,{format:En,type:Li,depthTexture:new Fa(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let ve=e.properties.get(d);ve.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(P){for(let F=0;F<P.removed.length;F++){let H=P.removed[F],X=v.indexOf(H);X>=0&&(v[X]=null,T[X].disconnect(H))}for(let F=0;F<P.added.length;F++){let H=P.added[F],X=v.indexOf(H);if(X===-1){for(let ve=0;ve<T.length;ve++)if(ve>=v.length){v.push(H),X=ve;break}else if(v[ve]===null){v[ve]=H,X=ve;break}if(X===-1)break}let q=T[X];q&&q.connect(H)}}let Y=new V,G=new V;function re(P,F,H){Y.setFromMatrixPosition(F.matrixWorld),G.setFromMatrixPosition(H.matrixWorld);let X=Y.distanceTo(G),q=F.projectionMatrix.elements,ve=H.projectionMatrix.elements,Ce=q[14]/(q[10]-1),Pe=q[14]/(q[10]+1),tt=(q[9]+1)/q[5],j=(q[9]-1)/q[5],Nt=(q[8]-1)/q[0],Oe=(ve[8]+1)/ve[0],ce=Ce*Nt,ge=Ce*Oe,Ze=X/(-Nt+Oe),Ke=Ze*-Nt;F.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ke),P.translateZ(Ze),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();let N=Ce+Ze,A=Pe+Ze,K=ce-Ke,pe=ge+(X-Ke),de=tt*Pe/A*N,me=j*Pe/A*N;P.projectionMatrix.makePerspective(K,pe,de,me,N,A),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function se(P,F){F===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(F.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;E.near=O.near=U.near=P.near,E.far=O.far=U.far=P.far,(R!==E.near||W!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,W=E.far);let F=P.parent,H=E.cameras;se(E,F);for(let X=0;X<H.length;X++)se(H[X],F);H.length===2?re(E,U,O):E.projectionMatrix.copy(U.projectionMatrix),Z(P,E,F)};function Z(P,F,H){H===null?P.matrix.copy(F.matrixWorld):(P.matrix.copy(H.matrixWorld),P.matrix.invert(),P.matrix.multiply(F.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(F.projectionMatrix),P.projectionMatrixInverse.copy(F.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=zs*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)};let le=null;function ae(P,F){if(u=F.getViewerPose(c||o),y=F,u!==null){let H=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let X=!1;H.length!==E.cameras.length&&(E.cameras.length=0,X=!0);for(let q=0;q<H.length;q++){let ve=H[q],Ce=null;if(m!==null)Ce=m.getViewport(ve);else{let tt=h.getViewSubImage(f,ve);Ce=tt.viewport,q===0&&(e.setRenderTargetTextures(d,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(d))}let Pe=k[q];Pe===void 0&&(Pe=new Vt,Pe.layers.enable(q),Pe.viewport=new Ct,k[q]=Pe),Pe.matrix.fromArray(ve.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ve.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),q===0&&(E.matrix.copy(Pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),X===!0&&E.cameras.push(Pe)}}for(let H=0;H<T.length;H++){let X=v[H],q=T[H];X!==null&&q!==void 0&&q.update(X,F,c||o)}le&&le(P,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),y=null}let he=new hh;he.setAnimationLoop(ae),this.setAnimationLoop=function(P){le=P},this.dispose=function(){}}};function yv(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,uh(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,T,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,M)):d.isMeshMatcapMaterial?(r(g,d),y(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),_(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,T,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===pn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===pn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let T=e.get(d).envMap;if(T&&(g.envMap.value=T,g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,T,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*T,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,T){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){let T=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _v(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){let M=v.program;i.uniformBlockBinding(T,M)}function c(T,v){let M=s[T.id];M===void 0&&(y(T),M=u(T),s[T.id]=M,T.addEventListener("dispose",g));let D=v.program;i.updateUBOMapping(T,D);let U=e.render.frame;r[T.id]!==U&&(f(T),r[T.id]=U)}function u(T){let v=h();T.__bindingPointIndex=v;let M=n.createBuffer(),D=T.__size,U=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let v=s[T.id],M=T.uniforms,D=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let U=0,O=M.length;U<O;U++){let k=Array.isArray(M[U])?M[U]:[M[U]];for(let E=0,R=k.length;E<R;E++){let W=k[E];if(m(W,U,E,D)===!0){let ne=W.__offset,te=Array.isArray(W.value)?W.value:[W.value],B=0;for(let Y=0;Y<te.length;Y++){let G=te[Y],re=_(G);typeof G=="number"||typeof G=="boolean"?(W.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,ne+B,W.__data)):G.isMatrix3?(W.__data[0]=G.elements[0],W.__data[1]=G.elements[1],W.__data[2]=G.elements[2],W.__data[3]=0,W.__data[4]=G.elements[3],W.__data[5]=G.elements[4],W.__data[6]=G.elements[5],W.__data[7]=0,W.__data[8]=G.elements[6],W.__data[9]=G.elements[7],W.__data[10]=G.elements[8],W.__data[11]=0):(G.toArray(W.__data,B),B+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ne,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,v,M,D){let U=T.value,O=v+"_"+M;if(D[O]===void 0)return typeof U=="number"||typeof U=="boolean"?D[O]=U:D[O]=U.clone(),!0;{let k=D[O];if(typeof U=="number"||typeof U=="boolean"){if(k!==U)return D[O]=U,!0}else if(k.equals(U)===!1)return k.copy(U),!0}return!1}function y(T){let v=T.uniforms,M=0,D=16;for(let O=0,k=v.length;O<k;O++){let E=Array.isArray(v[O])?v[O]:[v[O]];for(let R=0,W=E.length;R<W;R++){let ne=E[R],te=Array.isArray(ne.value)?ne.value:[ne.value];for(let B=0,Y=te.length;B<Y;B++){let G=te[B],re=_(G),se=M%D;se!==0&&D-se<re.boundary&&(M+=D-se),ne.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=M,M+=re.storage}}}let U=M%D;return U>0&&(M+=D-U),T.__size=M,T.__cache={},this}function _(T){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function g(T){let v=T.target;v.removeEventListener("dispose",g);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Sr=class{constructor(e={}){let{canvas:t=Cf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),y=new Int32Array(4),_=null,g=null,d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let v=this,M=!1,D=0,U=0,O=null,k=-1,E=null,R=new Ct,W=new Ct,ne=null,te=new lt(0),B=0,Y=t.width,G=t.height,re=1,se=null,Z=null,le=new Ct(0,0,Y,G),ae=new Ct(0,0,Y,G),he=!1,P=new Mr,F=!1,H=!1,X=null,q=new ft,ve=new gt,Ce=new V,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return O===null?re:1}let j=i;function Nt(I,$){for(let Q=0;Q<I.length;Q++){let ie=I[Q],J=t.getContext(ie,$);if(J!==null)return J}return null}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Me,!1),j===null){let $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),j=Nt($,I),j===null)throw Nt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Oe,ce,ge,Ze,Ke,N,A,K,pe,de,me,Be,Se,Ie,Xe,ot,fe,xt,dt,Qe,Ge,Ne,rt,_t;function Lt(){Oe=new Fg(j),ce=new Ig(j,Oe,e),Oe.init(ce),Ne=new gv(j,Oe,ce),ge=new pv(j,Oe,ce),Ze=new Hg(j),Ke=new nv,N=new mv(j,Oe,ge,Ke,ce,Ne,Ze),A=new Dg(v),K=new kg(v),pe=new Yf(j,ce),rt=new Lg(j,Oe,pe,ce),de=new Bg(j,pe,Ze,rt),me=new $g(j,de,pe,Ze),dt=new Wg(j,ce,N),ot=new Ng(Ke),Be=new tv(v,A,K,Oe,ce,rt,ot),Se=new yv(v,Ke),Ie=new sv,Xe=new uv(Oe,ce),xt=new Rg(v,A,K,ge,me,f,l),fe=new fv(v,me,ce),_t=new _v(j,Ze,ce,ge),Qe=new Pg(j,Oe,Ze,ce),Ge=new zg(j,Oe,Ze,ce),Ze.programs=Be.programs,v.capabilities=ce,v.extensions=Oe,v.properties=Ke,v.renderLists=Ie,v.shadowMap=fe,v.state=ge,v.info=Ze}Lt();let ut=new Sl(v,j);this.xr=ut,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let I=Oe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Oe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(I){I!==void 0&&(re=I,this.setSize(Y,G,!1))},this.getSize=function(I){return I.set(Y,G)},this.setSize=function(I,$,Q=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=I,G=$,t.width=Math.floor(I*re),t.height=Math.floor($*re),Q===!0&&(t.style.width=I+"px",t.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(Y*re,G*re).floor()},this.setDrawingBufferSize=function(I,$,Q){Y=I,G=$,re=Q,t.width=Math.floor(I*Q),t.height=Math.floor($*Q),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(le)},this.setViewport=function(I,$,Q,ie){I.isVector4?le.set(I.x,I.y,I.z,I.w):le.set(I,$,Q,ie),ge.viewport(R.copy(le).multiplyScalar(re).floor())},this.getScissor=function(I){return I.copy(ae)},this.setScissor=function(I,$,Q,ie){I.isVector4?ae.set(I.x,I.y,I.z,I.w):ae.set(I,$,Q,ie),ge.scissor(W.copy(ae).multiplyScalar(re).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(I){ge.setScissorTest(he=I)},this.setOpaqueSort=function(I){se=I},this.setTransparentSort=function(I){Z=I},this.getClearColor=function(I){return I.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(I=!0,$=!0,Q=!0){let ie=0;if(I){let J=!1;if(O!==null){let Te=O.texture.format;J=Te===sh||Te===ih||Te===nh}if(J){let Te=O.texture.type,Ae=Te===Li||Te===Ai||Te===kl||Te===Ki||Te===eh||Te===th,He=xt.getClearColor(),je=xt.getClearAlpha(),at=He.r,nt=He.g,it=He.b;Ae?(m[0]=at,m[1]=nt,m[2]=it,m[3]=je,j.clearBufferuiv(j.COLOR,0,m)):(y[0]=at,y[1]=nt,y[2]=it,y[3]=je,j.clearBufferiv(j.COLOR,0,y))}else ie|=j.COLOR_BUFFER_BIT}$&&(ie|=j.DEPTH_BUFFER_BIT),Q&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ie.dispose(),Xe.dispose(),Ke.dispose(),A.dispose(),K.dispose(),me.dispose(),rt.dispose(),_t.dispose(),Be.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Xt),ut.removeEventListener("sessionend",Tt),X&&(X.dispose(),X=null),Jt.stop()};function ye(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=Ze.autoReset,$=fe.enabled,Q=fe.autoUpdate,ie=fe.needsUpdate,J=fe.type;Lt(),Ze.autoReset=I,fe.enabled=$,fe.autoUpdate=Q,fe.needsUpdate=ie,fe.type=J}function Me(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function we(I){let $=I.target;$.removeEventListener("dispose",we),Je($)}function Je(I){qe(I),Ke.remove(I)}function qe(I){let $=Ke.get(I).programs;$!==void 0&&($.forEach(function(Q){Be.releaseProgram(Q)}),I.isShaderMaterial&&Be.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,Q,ie,J,Te){$===null&&($=Pe);let Ae=J.isMesh&&J.matrixWorld.determinant()<0,He=xo(I,$,Q,ie,J);ge.setMaterial(ie,Ae);let je=Q.index,at=1;if(ie.wireframe===!0){if(je=de.getWireframeAttribute(Q),je===void 0)return;at=2}let nt=Q.drawRange,it=Q.attributes.position,Ut=nt.start*at,an=(nt.start+nt.count)*at;Te!==null&&(Ut=Math.max(Ut,Te.start*at),an=Math.min(an,(Te.start+Te.count)*at)),je!==null?(Ut=Math.max(Ut,0),an=Math.min(an,je.count)):it!=null&&(Ut=Math.max(Ut,0),an=Math.min(an,it.count));let zt=an-Ut;if(zt<0||zt===1/0)return;rt.setup(J,ie,He,Q,je);let wn,Rt=Qe;if(je!==null&&(wn=pe.get(je),Rt=Ge,Rt.setIndex(wn)),J.isMesh)ie.wireframe===!0?(ge.setLineWidth(ie.wireframeLinewidth*tt()),Rt.setMode(j.LINES)):Rt.setMode(j.TRIANGLES);else if(J.isLine){let et=ie.linewidth;et===void 0&&(et=1),ge.setLineWidth(et*tt()),J.isLineSegments?Rt.setMode(j.LINES):J.isLineLoop?Rt.setMode(j.LINE_LOOP):Rt.setMode(j.LINE_STRIP)}else J.isPoints?Rt.setMode(j.POINTS):J.isSprite&&Rt.setMode(j.TRIANGLES);if(J.isBatchedMesh)Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Rt.renderInstances(Ut,zt,J.count);else if(Q.isInstancedBufferGeometry){let et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,sr=Math.min(Q.instanceCount,et);Rt.renderInstances(Ut,zt,sr)}else Rt.render(Ut,zt)};function Mt(I,$,Q){I.transparent===!0&&I.side===xn&&I.forceSinglePass===!1?(I.side=pn,I.needsUpdate=!0,ds(I,$,Q),I.side=Wn,I.needsUpdate=!0,ds(I,$,Q),I.side=xn):ds(I,$,Q)}this.compile=function(I,$,Q=null){Q===null&&(Q=I),g=Xe.get(Q),g.init(),T.push(g),Q.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),I!==Q&&I.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights(v._useLegacyLights);let ie=new Set;return I.traverse(function(J){let Te=J.material;if(Te)if(Array.isArray(Te))for(let Ae=0;Ae<Te.length;Ae++){let He=Te[Ae];Mt(He,Q,J),ie.add(He)}else Mt(Te,Q,J),ie.add(Te)}),T.pop(),g=null,ie},this.compileAsync=function(I,$,Q=null){let ie=this.compile(I,$,Q);return new Promise(J=>{function Te(){if(ie.forEach(function(Ae){Ke.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){J(I);return}setTimeout(Te,10)}Oe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Et=null;function bt(I){Et&&Et(I)}function Xt(){Jt.stop()}function Tt(){Jt.start()}let Jt=new hh;Jt.setAnimationLoop(bt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(I){Et=I,ut.setAnimationLoop(I),I===null?Jt.stop():Jt.start()},ut.addEventListener("sessionstart",Xt),ut.addEventListener("sessionend",Tt),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera($),$=ut.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,$,O),g=Xe.get(I,T.length),g.init(),T.push(g),q.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),P.setFromProjectionMatrix(q),H=this.localClippingEnabled,F=ot.init(this.clippingPlanes,H),_=Ie.get(I,d.length),_.init(),d.push(_),Mn(I,$,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(se,Z),this.info.render.frame++,F===!0&&ot.beginShadows();let Q=g.state.shadowsArray;if(fe.render(Q,I,$),F===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(_,I),g.setupLights(v._useLegacyLights),$.isArrayCamera){let ie=$.cameras;for(let J=0,Te=ie.length;J<Te;J++){let Ae=ie[J];Gr(_,I,Ae,Ae.viewport)}}else Gr(_,I,$);O!==null&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),I.isScene===!0&&I.onAfterRender(v,I,$),rt.resetDefaultState(),k=-1,E=null,T.pop(),T.length>0?g=T[T.length-1]:g=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Mn(I,$,Q,ie){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||P.intersectsSprite(I)){ie&&Ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(q);let Ae=me.update(I),He=I.material;He.visible&&_.push(I,Ae,He,Q,Ce.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||P.intersectsObject(I))){let Ae=me.update(I),He=I.material;if(ie&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ce.copy(I.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ce.copy(Ae.boundingSphere.center)),Ce.applyMatrix4(I.matrixWorld).applyMatrix4(q)),Array.isArray(He)){let je=Ae.groups;for(let at=0,nt=je.length;at<nt;at++){let it=je[at],Ut=He[it.materialIndex];Ut&&Ut.visible&&_.push(I,Ae,Ut,Q,Ce.z,it)}}else He.visible&&_.push(I,Ae,He,Q,Ce.z,null)}}let Te=I.children;for(let Ae=0,He=Te.length;Ae<He;Ae++)Mn(Te[Ae],$,Q,ie)}function Gr(I,$,Q,ie){let J=I.opaque,Te=I.transmissive,Ae=I.transparent;g.setupLightsView(Q),F===!0&&ot.setGlobalState(v.clippingPlanes,Q),Te.length>0&&_o(J,Te,$,Q),ie&&ge.viewport(R.copy(ie)),J.length>0&&hs(J,$,Q),Te.length>0&&hs(Te,$,Q),Ae.length>0&&hs(Ae,$,Q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function _o(I,$,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Te=ce.isWebGL2;X===null&&(X=new di(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")?yr:Li,minFilter:Ii,samples:Te?4:0})),v.getDrawingBufferSize(ve),Te?X.setSize(ve.x,ve.y):X.setSize(Aa(ve.x),Aa(ve.y));let Ae=v.getRenderTarget();v.setRenderTarget(X),v.getClearColor(te),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let He=v.toneMapping;v.toneMapping=Ri,hs(I,Q,ie),N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X);let je=!1;for(let at=0,nt=$.length;at<nt;at++){let it=$[at],Ut=it.object,an=it.geometry,zt=it.material,wn=it.group;if(zt.side===xn&&Ut.layers.test(ie.layers)){let Rt=zt.side;zt.side=pn,zt.needsUpdate=!0,nr(Ut,Q,ie,an,zt,wn),zt.side=Rt,zt.needsUpdate=!0,je=!0}}je===!0&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X)),v.setRenderTarget(Ae),v.setClearColor(te,B),v.toneMapping=He}function hs(I,$,Q){let ie=$.isScene===!0?$.overrideMaterial:null;for(let J=0,Te=I.length;J<Te;J++){let Ae=I[J],He=Ae.object,je=Ae.geometry,at=ie===null?Ae.material:ie,nt=Ae.group;He.layers.test(Q.layers)&&nr(He,$,Q,je,at,nt)}}function nr(I,$,Q,ie,J,Te){I.onBeforeRender(v,$,Q,ie,J,Te),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(v,$,Q,ie,I,Te),J.transparent===!0&&J.side===xn&&J.forceSinglePass===!1?(J.side=pn,J.needsUpdate=!0,v.renderBufferDirect(Q,$,ie,J,I,Te),J.side=Wn,J.needsUpdate=!0,v.renderBufferDirect(Q,$,ie,J,I,Te),J.side=xn):v.renderBufferDirect(Q,$,ie,J,I,Te),I.onAfterRender(v,$,Q,ie,J,Te)}function ds(I,$,Q){$.isScene!==!0&&($=Pe);let ie=Ke.get(I),J=g.state.lights,Te=g.state.shadowsArray,Ae=J.state.version,He=Be.getParameters(I,J.state,Te,$,Q),je=Be.getProgramCacheKey(He),at=ie.programs;ie.environment=I.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(I.isMeshStandardMaterial?K:A).get(I.envMap||ie.environment),at===void 0&&(I.addEventListener("dispose",we),at=new Map,ie.programs=at);let nt=at.get(je);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Ae)return Wr(I,He),nt}else He.uniforms=Be.getUniforms(I),I.onBuild(Q,He,v),I.onBeforeCompile(He,v),nt=Be.acquireProgram(He,je),at.set(je,nt),ie.uniforms=He.uniforms;let it=ie.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(it.clippingPlanes=ot.uniform),Wr(I,He),ie.needsLights=Mo(I),ie.lightsStateVersion=Ae,ie.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function ir(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=Os.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function Wr(I,$){let Q=Ke.get(I);Q.outputColorSpace=$.outputColorSpace,Q.batching=$.batching,Q.instancing=$.instancing,Q.instancingColor=$.instancingColor,Q.skinning=$.skinning,Q.morphTargets=$.morphTargets,Q.morphNormals=$.morphNormals,Q.morphColors=$.morphColors,Q.morphTargetsCount=$.morphTargetsCount,Q.numClippingPlanes=$.numClippingPlanes,Q.numIntersection=$.numClipIntersection,Q.vertexAlphas=$.vertexAlphas,Q.vertexTangents=$.vertexTangents,Q.toneMapping=$.toneMapping}function xo(I,$,Q,ie,J){$.isScene!==!0&&($=Pe),N.resetTextureUnits();let Te=$.fog,Ae=ie.isMeshStandardMaterial?$.environment:null,He=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:hi,je=(ie.isMeshStandardMaterial?K:A).get(ie.envMap||Ae),at=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),it=!!Q.morphAttributes.position,Ut=!!Q.morphAttributes.normal,an=!!Q.morphAttributes.color,zt=Ri;ie.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(zt=v.toneMapping);let wn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rt=wn!==void 0?wn.length:0,et=Ke.get(ie),sr=g.state.lights;if(F===!0&&(H===!0||I!==E)){let en=I===E&&ie.id===k;ot.setState(ie,I,en)}let Pt=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==sr.state.version||et.outputColorSpace!==He||J.isBatchedMesh&&et.batching===!1||!J.isBatchedMesh&&et.batching===!0||J.isInstancedMesh&&et.instancing===!1||!J.isInstancedMesh&&et.instancing===!0||J.isSkinnedMesh&&et.skinning===!1||!J.isSkinnedMesh&&et.skinning===!0||J.isInstancedMesh&&et.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&et.instancingColor===!1&&J.instanceColor!==null||et.envMap!==je||ie.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ot.numPlanes||et.numIntersection!==ot.numIntersection)||et.vertexAlphas!==at||et.vertexTangents!==nt||et.morphTargets!==it||et.morphNormals!==Ut||et.morphColors!==an||et.toneMapping!==zt||ce.isWebGL2===!0&&et.morphTargetsCount!==Rt)&&(Pt=!0):(Pt=!0,et.__version=ie.version);let Qn=et.currentProgram;Pt===!0&&(Qn=ds(ie,$,J));let rr=!1,Wi=!1,ar=!1,jt=Qn.getUniforms(),Vn=et.uniforms;if(ge.useProgram(Qn.program)&&(rr=!0,Wi=!0,ar=!0),ie.id!==k&&(k=ie.id,Wi=!0),rr||E!==I){jt.setValue(j,"projectionMatrix",I.projectionMatrix),jt.setValue(j,"viewMatrix",I.matrixWorldInverse);let en=jt.map.cameraPosition;en!==void 0&&en.setValue(j,Ce.setFromMatrixPosition(I.matrixWorld)),ce.logarithmicDepthBuffer&&jt.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&jt.setValue(j,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,Wi=!0,ar=!0)}if(J.isSkinnedMesh){jt.setOptional(j,J,"bindMatrix"),jt.setOptional(j,J,"bindMatrixInverse");let en=J.skeleton;en&&(ce.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),jt.setValue(j,"boneTexture",en.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(jt.setOptional(j,J,"batchingTexture"),jt.setValue(j,"batchingTexture",J._matricesTexture,N));let Ot=Q.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0&&ce.isWebGL2===!0)&&dt.update(J,Q,Qn),(Wi||et.receiveShadow!==J.receiveShadow)&&(et.receiveShadow=J.receiveShadow,jt.setValue(j,"receiveShadow",J.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Vn.envMap.value=je,Vn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Wi&&(jt.setValue(j,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&bo(Vn,ar),Te&&ie.fog===!0&&Se.refreshFogUniforms(Vn,Te),Se.refreshMaterialUniforms(Vn,ie,re,G,X),Os.upload(j,ir(et),Vn,N)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Os.upload(j,ir(et),Vn,N),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&jt.setValue(j,"center",J.center),jt.setValue(j,"modelViewMatrix",J.modelViewMatrix),jt.setValue(j,"normalMatrix",J.normalMatrix),jt.setValue(j,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let en=ie.uniformsGroups;for(let or=0,$r=en.length;or<$r;or++)if(ce.isWebGL2){let lr=en[or];_t.update(lr,Qn),_t.bind(lr,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function bo(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Mo(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(I,$,Q){Ke.get(I.texture).__webglTexture=$,Ke.get(I.depthTexture).__webglTexture=Q;let ie=Ke.get(I);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,$){let Q=Ke.get(I);Q.__webglFramebuffer=$,Q.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,Q=0){O=I,D=$,U=Q;let ie=!0,J=null,Te=!1,Ae=!1;if(I){let je=Ke.get(I);je.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(j.FRAMEBUFFER,null),ie=!1):je.__webglFramebuffer===void 0?N.setupRenderTarget(I):je.__hasExternalTextures&&N.rebindTextures(I,Ke.get(I.texture).__webglTexture,Ke.get(I.depthTexture).__webglTexture);let at=I.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ae=!0);let nt=Ke.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(nt[$])?J=nt[$][Q]:J=nt[$],Te=!0):ce.isWebGL2&&I.samples>0&&N.useMultisampledRTT(I)===!1?J=Ke.get(I).__webglMultisampledFramebuffer:Array.isArray(nt)?J=nt[Q]:J=nt,R.copy(I.viewport),W.copy(I.scissor),ne=I.scissorTest}else R.copy(le).multiplyScalar(re).floor(),W.copy(ae).multiplyScalar(re).floor(),ne=he;if(ge.bindFramebuffer(j.FRAMEBUFFER,J)&&ce.drawBuffers&&ie&&ge.drawBuffers(I,J),ge.viewport(R),ge.scissor(W),ge.setScissorTest(ne),Te){let je=Ke.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,Q)}else if(Ae){let je=Ke.get(I.texture),at=$||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.__webglTexture,Q||0,at)}k=-1},this.readRenderTargetPixels=function(I,$,Q,ie,J,Te,Ae){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(He=He[Ae]),He){ge.bindFramebuffer(j.FRAMEBUFFER,He);try{let je=I.texture,at=je.format,nt=je.type;if(at!==En&&Ne.convert(at)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let it=nt===yr&&(Oe.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Oe.has("EXT_color_buffer_float"));if(nt!==Li&&Ne.convert(nt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===ci&&(ce.isWebGL2||Oe.has("OES_texture_float")||Oe.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-ie&&Q>=0&&Q<=I.height-J&&j.readPixels($,Q,ie,J,Ne.convert(at),Ne.convert(nt),Te)}finally{let je=O!==null?Ke.get(O).__webglFramebuffer:null;ge.bindFramebuffer(j.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(I,$,Q=0){let ie=Math.pow(2,-Q),J=Math.floor($.image.width*ie),Te=Math.floor($.image.height*ie);N.setTexture2D($,0),j.copyTexSubImage2D(j.TEXTURE_2D,Q,0,0,I.x,I.y,J,Te),ge.unbindTexture()},this.copyTextureToTexture=function(I,$,Q,ie=0){let J=$.image.width,Te=$.image.height,Ae=Ne.convert(Q.format),He=Ne.convert(Q.type);N.setTexture2D(Q,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment),$.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ie,I.x,I.y,J,Te,Ae,He,$.image.data):$.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ie,I.x,I.y,$.mipmaps[0].width,$.mipmaps[0].height,Ae,$.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,ie,I.x,I.y,Ae,He,$.image),ie===0&&Q.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(I,$,Q,ie,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=I.max.x-I.min.x+1,Ae=I.max.y-I.min.y+1,He=I.max.z-I.min.z+1,je=Ne.convert(ie.format),at=Ne.convert(ie.type),nt;if(ie.isData3DTexture)N.setTexture3D(ie,0),nt=j.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)N.setTexture2DArray(ie,0),nt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ie.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ie.unpackAlignment);let it=j.getParameter(j.UNPACK_ROW_LENGTH),Ut=j.getParameter(j.UNPACK_IMAGE_HEIGHT),an=j.getParameter(j.UNPACK_SKIP_PIXELS),zt=j.getParameter(j.UNPACK_SKIP_ROWS),wn=j.getParameter(j.UNPACK_SKIP_IMAGES),Rt=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Rt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Rt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,I.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,I.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,I.min.z),Q.isDataTexture||Q.isData3DTexture?j.texSubImage3D(nt,J,$.x,$.y,$.z,Te,Ae,He,je,at,Rt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(nt,J,$.x,$.y,$.z,Te,Ae,He,je,Rt.data)):j.texSubImage3D(nt,J,$.x,$.y,$.z,Te,Ae,He,je,at,Rt),j.pixelStorei(j.UNPACK_ROW_LENGTH,it),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ut),j.pixelStorei(j.UNPACK_SKIP_PIXELS,an),j.pixelStorei(j.UNPACK_SKIP_ROWS,zt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,wn),J===0&&ie.generateMipmaps&&j.generateMipmap(nt),ge.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),ge.unbindTexture()},this.resetState=function(){D=0,U=0,O=null,ge.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bl?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?es:ah}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===es?Ft:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},El=class extends Sr{};El.prototype.isWebGL1Renderer=!0;var Gs=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ou=new V,ku=new Ct,Fu=new Ct,xv=new V,Bu=new ft,va=new V,Qo=new Di,zu=new ft,el=new xr,Ba=class extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_c,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,va),this.boundingBox.expandByPoint(va)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Di),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,va),this.boundingSphere.expandByPoint(va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(s),e.ray.intersectsSphere(Qo)!==!1&&(zu.copy(s).invert(),el.copy(e.ray).applyMatrix4(zu),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;ku.fromBufferAttribute(s.attributes.skinIndex,e),Fu.fromBufferAttribute(s.attributes.skinWeight,e),Ou.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Fu.getComponent(r);if(o!==0){let a=ku.getComponent(r);Bu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(xv.copy(Ou).applyMatrix4(Bu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Er=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},za=class extends bn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Zt,u=Zt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hu=new ft,bv=new ft,Ha=class n{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ft;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:bv;Hu.multiplyMatrices(a,t[r]),Hu.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new za(t,e,e,En,ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Er),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Ui=class extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vu=new V,Gu=new V,Wu=new ft,tl=new xr,ya=new Di,ts=class extends Wt{constructor(e=new Cn,t=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vu.fromBufferAttribute(t,s-1),Gu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vu.distanceTo(Gu);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Wu.copy(s).invert(),tl.copy(e.ray).applyMatrix4(Wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new V,u=new V,h=new V,f=new V,m=this.isLineSegments?2:1,y=i.index,g=i.attributes.position;if(y!==null){let d=Math.max(0,o.start),T=Math.min(y.count,o.start+o.count);for(let v=d,M=T-1;v<M;v+=m){let D=y.getX(v),U=y.getX(v+1);if(c.fromBufferAttribute(g,D),u.fromBufferAttribute(g,U),tl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),T=Math.min(g.count,o.start+o.count);for(let v=d,M=T-1;v<M;v+=m){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),tl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},$u=new V,qu=new V,Va=class extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)$u.fromBufferAttribute(t,s),qu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$u.distanceTo(qu);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tr=class extends fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ns=class extends fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _a(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Mv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Xu(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function vh(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tl=class extends Ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xc:r=e,a=2*t-i;break;case jc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:o=e,l=2*i-t;break;case jc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,y=(i-t)/(s-t),_=y*y,g=_*y,d=-f*g+2*f*_-f*y,T=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*y+1,v=(-1-m)*g+(1.5+m)*_+.5*y,M=m*g-m*_;for(let D=0;D!==a;++D)r[D]=d*o[u+D]+T*o[c+D]+v*o[l+D]+M*o[h+D];return r}},Al=class extends Ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Cl=class extends Ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Mv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,m=h+i;for(let y=0;y!==i;++y){let _=t[h+y];if(_!==t[f+y]||_!==t[m+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ma;var Oi=class extends Rn{};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ba;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Rn{};Ga.prototype.ValueTypeName="color";var $s=class extends Rn{};$s.prototype.ValueTypeName="number";var Rl=class extends Ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)$n.slerpFlat(r,0,o,c-a,o,c,l);return r}},mi=class extends Rn{InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};mi.prototype.ValueTypeName="quaternion";mi.prototype.DefaultInterpolation=Ma;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Rn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ba;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends Rn{};gi.prototype.ValueTypeName="vector";var Ar=class{constructor(e,t=-1,i,s=nf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Ev(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Rn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=wv(l);l=Xu(l,1,u),c=Xu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $s(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,m,y,_){if(m.length!==0){let g=[],d=[];vh(m,g,d,y),g.length!==0&&_.push(new h(f,g,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},y;for(y=0;y<f.length;y++)if(f[y].morphTargets)for(let _=0;_<f[y].morphTargets.length;_++)m[f[y].morphTargets[_]]=-1;for(let _ in m){let g=[],d=[];for(let T=0;T!==f[y].morphTargets.length;++T){let v=f[y];g.push(v.time),d.push(v.morphTarget===_?1:0)}s.push(new $s(".morphTargetInfluence["+_+"]",g,d))}l=m.length*o}else{let m=".bones["+t[h].name+"]";i(gi,m+".position",f,"pos",s),i(mi,m+".quaternion",f,"rot",s),i(gi,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Sv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return gi;case"color":return Ga;case"quaternion":return mi;case"bool":case"boolean":return Oi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Ev(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Sv(n.type);if(n.times===void 0){let t=[],i=[];vh(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Wa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Cr=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let m=c[h],y=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}},Tv=new Cr,qn=class{constructor(e){this.manager=e!==void 0?e:Tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},Ll=class extends Error{constructor(e,t){super(e),this.response=t}},Rr=class extends qn{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:i,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ai[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,y=m!==0,_=0,g=new ReadableStream({start(d){T();function T(){h.read().then(({done:v,value:M})=>{if(v)d.close();else{_+=M.byteLength;let D=new ProgressEvent("progress",{lengthComputable:y,loaded:_,total:m});for(let U=0,O=u.length;U<O;U++){let k=u[U];k.onProgress&&k.onProgress(D)}d.enqueue(M),T()}})}}});return new Response(g)}else throw new Ll(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(y=>m.decode(y))}}}).then(c=>{Wa.add(e,c);let u=ai[e];delete ai[e];for(let h=0,f=u.length;h<f;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let h=0,f=u.length;h<f;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Pl=class extends qn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wa.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=_r("img");function l(){u(),Wa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var $a=class extends qn{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new za,a=new Rr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:sn,o.wrapT=c.wrapT!==void 0?c.wrapT:sn,o.magFilter=c.magFilter!==void 0?c.magFilter:cn,o.minFilter=c.minFilter!==void 0?c.minFilter:cn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ii),c.mipmapCount===1&&(o.minFilter=cn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},qa=class extends qn{constructor(e){super(e)}load(e,t,i,s){let r=new bn,o=new Pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},is=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Xa=class extends is{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nl=new ft,ju=new V,Yu=new V,Lr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Il=class extends Lr{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ja=class extends is{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Il}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ju=new ft,fr=new V,il=new V,Nl=class extends Lr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(fr),il.copy(i.position),il.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(il),i.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Ju.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},Ya=class extends is{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Dl=class extends Lr{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ja=class extends is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Za=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Vl="\\[\\]\\.:\\/",Av=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",Cv="[^"+Vl.replace("\\.","")+"]",Rv=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Lv=/(WCOD+)?/.source.replace("WCOD",Cv),Pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Nv=new RegExp("^"+Rv+Lv+Pv+Iv+"$"),Dv=["material","materials","bones","map"],Ul=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Av,"")}static parseTrackName(e){let t=Nv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Dv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Ul;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);var Ov=["en","fr","ca","es"],ze=(n,e)=>(n&&typeof n=="object"?n[e]||n.en||n.fr||Object.values(n).find(Boolean)||"":String(n||"")).trim(),Re=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),kv={amp:"&",lt:"<",gt:">",quot:'"',"#39":"'",nbsp:" ",rsquo:"\u2019",lsquo:"\u2018",laquo:"\xAB",raquo:"\xBB"},Pr=n=>String(n||"").replace(/<\/(p|li|h3)>|<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&(#?\w+);/g,(e,t)=>kv[t]??e).split(`
`).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean),Fv=n=>Pr(String(n||"").split(/<h3/i)[0]).join(" "),Ir=(n,e)=>n.length<=e?n:n.slice(0,e).replace(/\s+\S*$/,"")+"\u2026",Bi=(n,e)=>e?/^https?:\/\//.test(e)?e:n+e.replace(/^\.?\//,""):"",no={en:"Hand Coded is a Barcelona studio that designs and builds interactive art installations, immersive spaces and real-time software: light, sound, AI and our own tools.",fr:"Hand Coded est un studio de Barcelone qui con\xE7oit et construit des installations artistiques interactives, des espaces immersifs et des logiciels temps r\xE9el : lumi\xE8re, son, IA et nos propres outils.",ca:"Hand Coded \xE9s un estudi de Barcelona que dissenya i construeix instal\xB7lacions art\xEDstiques interactives, espais immersius i programari en temps real: llum, so, IA i les nostres pr\xF2pies eines.",es:"Hand Coded es un estudio de Barcelona que dise\xF1a y construye instalaciones art\xEDsticas interactivas, espacios inmersivos y software en tiempo real: luz, sonido, IA y nuestras propias herramientas."},$l=["core","artists","specialists","team","people"];function Bv(n,e){let t=(n.sections||[]).find(s=>s.id===e.section&&s.visible!==!1);if(!t||e.published===!1)return!1;let i=(e.tags||[]).some(s=>$l.includes(s));return t.card==="portrait"?i&&(Pr(ze(e.body,"en")).join(" ")+Pr(ze(e.body,"fr")).join(" ")).length>40:!0}var zv={home:{en:"Home",fr:"Accueil",ca:"Inici",es:"Inicio"},updated:{en:"Updated",fr:"Mis \xE0 jour le",ca:"Actualitzat el",es:"Actualizado el"},team:{en:"Team",fr:"\xC9quipe",ca:"Equip",es:"Equipo"},videos:{en:"Videos",fr:"Vid\xE9os",ca:"V\xEDdeos",es:"V\xEDdeos"},photos:{en:"Photos",fr:"Photos",ca:"Fotos",es:"Fotos"},more:{en:"More",fr:"Voir aussi",ca:"Vegeu tamb\xE9",es:"Ver tambi\xE9n"},langs:{en:"Languages",fr:"Langues",ca:"Lleng\xFCes",es:"Idiomas"},tagline:{en:"interactive art and technology studio",fr:"studio d\u2019art et de technologies interactives",ca:"estudi d\u2019art i tecnologies interactives",es:"estudio de arte y tecnolog\xEDas interactivas"},not:{en:"Interactive art and technology studio based in Barcelona, founded in %Y. Not to be confused with \u201Chand-coded\u201D, the generic term for code written by hand.",fr:"Studio d\u2019art et de technologies interactives bas\xE9 \xE0 Barcelone, fond\xE9 en %Y. \xC0 ne pas confondre avec \xAB hand-coded \xBB, l\u2019expression g\xE9n\xE9rique pour du code \xE9crit \xE0 la main.",ca:"Estudi d\u2019art i tecnologies interactives amb seu a Barcelona, fundat el %Y. No s\u2019ha de confondre amb \xABhand-coded\xBB, l\u2019expressi\xF3 gen\xE8rica per a codi escrit a m\xE0.",es:"Estudio de arte y tecnolog\xEDas interactivas con sede en Barcelona, fundado en %Y. No confundir con \xABhand-coded\xBB, la expresi\xF3n gen\xE9rica para c\xF3digo escrito a mano."}},Xn=(n,e)=>ze(zv[n],e),yh=n=>(String(n||"").match(/\d{4}/)||[""])[0],Hv=n=>String(n||"").replace(/<(script|style|iframe|object|embed)\b[\s\S]*?<\/\1>/gi,"").replace(/\son\w+="[^"]*"/gi,"").replace(/&nbsp;/g," "),_h=n=>/youtu\.?be|vimeo\.com/i.test(n||""),io=n=>/\.(jpe?g|png|webp|gif|avif)(\?|$)/i.test(n||""),Vv=n=>(String(n).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)||[])[1],Gv=(n,e)=>{try{return new Intl.DateTimeFormat(e,{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(n+"T12:00:00Z"))}catch{return n}},Nr=n=>{let e=String(n||"").split(/<h3/i)[0];return Pr(e.replace(/^\s*<p>\s*<(strong|b)>[^<]*<\/\1>[^<]*<\/p>/i,"")).join(" ")||Fv(n)};function xh(n,e){let t=n.settings||{},i=t.seo||{},s=(i.url||e.base||"").replace(/\/?$/,"/"),r=t.defaultLang||"en",o=t.langs&&t.langs.length?t.langs:Ov,a=t.name||"Hand Coded",l=(n.sections||[]).filter(k=>k.visible!==!1),c=(n.posts||[]).filter(k=>k.published!==!1&&l.some(E=>E.id===k.section)).sort((k,E)=>l.findIndex(R=>R.id===k.section)-l.findIndex(R=>R.id===E.section)||(k.order??0)-(E.order??0)),u=c.filter(k=>Bv(n,k)),h=k=>k.thumb&&!/^https?:/.test(k.thumb)?k.thumb:((k.media||[]).find(E=>E&&io(E.src)&&!/^https?:/.test(E.src))||{}).src||"",f=Bi(s,i.image||h(c.find(k=>h(k))||{})||"assets/hc/ui/logo-default.svg"),m=(t.offices||[])[0],y=(t.social||[]).map(k=>k&&(k.url||k.href||k.link)).filter(k=>/^https?:\/\//.test(k||"")),_=k=>ze(i.description,k)||no[k]||no.en,g=String(t.founded||t.since||""),d=(k,E)=>E?`${k}/${encodeURIComponent(E.id)}/`:`${k}/`,T=(k,E)=>s+d(k,E),v=k=>u.includes(k),M=k=>k&&k.updated||"",D=[...c.map(M)].filter(Boolean).sort().pop()||"",U=(()=>{if(!m)return null;let k=(m.lines||[]).map(te=>String(te).replace(/,\s*$/,"").trim()),E=k.map(te=>te.match(/^(\d{4,5})\s+(.+)$/)).find(Boolean),R=k.find(te=>!/^\+?[\d\s().-]{7,}$/.test(te)&&!/^\d{4,5}\s/.test(te)),W=k.find(te=>/^\+?[\d\s().-]{7,}$/.test(te)),ne=E?E[2]:(ze(m.name,r)||"").split(",").pop().trim();return{street:R,postalCode:E&&E[1],city:ne,phone:W,mail:m.mail}})();return{s:t,seo:i,base:s,def:r,langs:o,name:a,sections:l,posts:c,pages:u,photo:h,image:f,office:m,social:y,desc:_,href:d,url:T,has:v,updated:M,lastmod:D,address:U,org:k=>({"@type":"Organization","@id":s+"#studio",name:a,alternateName:[a+" Studio",a.replace(/\s+/g,"-")],url:s,logo:Bi(s,"assets/hc/ui/logo-default.svg"),image:f,description:_(k),disambiguatingDescription:Xn("not",k).replace("%Y",g||"2008"),...g?{foundingDate:g}:{},...U?{address:{"@type":"PostalAddress",...U.street?{streetAddress:U.street}:{},...U.postalCode?{postalCode:U.postalCode}:{},addressLocality:U.city,addressCountry:"ES"},...U.mail?{email:U.mail}:{},...U.phone?{telephone:U.phone.replace(/\s+/g," ")}:{}}:{},areaServed:"Worldwide",founder:c.filter(E=>(E.tags||[]).includes("core")).map(E=>({"@id":T(k,E)+"#person"})),knowsAbout:c.filter(E=>(l.find(R=>R.id===E.section)||{}).skills).map(E=>ze(E.title,k)).filter(Boolean),...y.length?{sameAs:y}:{}})}}function bh(n,e={}){let t=xh(n,e),{base:i,def:s,langs:r,name:o,sections:a,posts:l}=t,c=t.desc(s),u=`${o} \xB7 ${Xn("tagline",s)}`,h={"@context":"https://schema.org","@graph":[t.org(s),{"@type":"WebSite","@id":i+"#website",url:i,name:o,inLanguage:r,publisher:{"@id":i+"#studio"}}]},f=['<script>window.HC_ROUTE={"pages":1}<\/script>',`<title>${Re(u)}</title>`,`<meta name="description" content="${Re(c)}">`,`<link rel="canonical" href="${Re(i)}">`,...r.map(R=>`<link rel="alternate" hreflang="${R}" href="${Re(t.url(R))}">`),`<link rel="alternate" hreflang="x-default" href="${Re(i)}">`,'<meta name="robots" content="max-image-preview:large">','<meta property="og:type" content="website">',`<meta property="og:site_name" content="${Re(o)}">`,`<meta property="og:title" content="${Re(u)}">`,`<meta property="og:description" content="${Re(c)}">`,`<meta property="og:url" content="${Re(i)}">`,`<meta property="og:image" content="${Re(t.image)}">`,'<meta name="twitter:card" content="summary_large_image">',`<script type="application/ld+json">${JSON.stringify(h).replace(/</g,"\\u003c")}<\/script>`].join(`
`),m=Sh(t,s),y=R=>[ze(R.subtitle,s),R.date,ze(R.place,s)].filter(Boolean).join(" \xB7 "),_=l.filter(R=>(R.tags||[]).includes("core")),g=[`# ${o}`,"",`> ${c}`,"",t.org(s).disambiguatingDescription,"",..._.length?["## "+ze({en:"Founders",fr:"Fondateurs",ca:"Fundadors",es:"Fundadores"},s),..._.map(R=>`- [${ze(R.title,s)}](${t.url(s,R)}): ${ze(R.subtitle,s)}`),""]:[],...a.flatMap(R=>{let W=t.pages.filter(ne=>ne.section===R.id);return W.length?[`## ${ze(R.name,s)}`,...W.map(ne=>{let te=Ir(Nr(ze(ne.body,s)),300);return`- [${ze(ne.title,s)}](${t.url(s,ne)})${y(ne)?`: ${y(ne)}`:""}${te?`. ${te}`:""}`}),""]:[]}),...t.address?["## Contact",`- ${[ze(t.office.name,s),t.address.street,[t.address.postalCode,t.address.city].filter(Boolean).join(" "),t.address.mail].filter(Boolean).join(", ")}`,...t.social.map(R=>`- ${R}`),""]:[],`${ze({en:"Other languages",fr:"Autres langues",ca:"Altres lleng\xFCes",es:"Otros idiomas"},s)}: ${r.map(R=>t.url(R)).join(" ")}`,""].join(`
`),d=R=>r.map(W=>`    <xhtml:link rel="alternate" hreflang="${W}" href="${Re(t.url(W,R))}"/>`).concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${Re(R?t.url(s,R):i)}"/>`).join(`
`),T=R=>[t.photo(R),...(R.media||[]).filter(W=>W&&io(W.src)).map(W=>W.src)].filter((W,ne,te)=>W&&te.indexOf(W)===ne).slice(0,8).map(W=>`    <image:image><image:loc>${Re(Bi(i,W))}</image:loc></image:image>`).join(`
`),v=(R,W,ne,te)=>`  <url>
    <loc>${Re(R)}</loc>${W?`
    <lastmod>${W}</lastmod>`:""}
    <priority>${ne}</priority>${te?`
`+te:""}
  </url>`,M=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`+[v(i,t.lastmod,"1.0",d(null)),...r.map(R=>v(t.url(R),t.lastmod,"0.9",d(null))),...t.pages.flatMap(R=>r.map(W=>v(t.url(W,R),t.updated(R),a[0]&&R.section===a[0].id?"0.8":"0.6",d(R)+(T(R)?`
`+T(R):""))))].join(`
`)+`
</urlset>
`,D=R=>{let W=[],ne="";return String(R).split(/(?<=,)\s+/).forEach(te=>{ne&&(ne+" "+te).length>62?(W.push(ne),ne=te):ne=ne?ne+" "+te:te}),ne&&W.push(ne),W},U={};r.forEach(R=>{let W=ze((t.s.home||{}).sub,R),ne=/\n/.test(W)?W.split(/\n+/).map(te=>te.trim()).filter(Boolean):D(W);ne.length&&(U[R]=ne)});let O=(()=>{let R=(t.s.typo||{}).sig2||{},W=String(R.font||"");if(!/^g:/.test(W))return null;let ne=W.slice(2),te=R.italic?1:0,B=+(R.weight||400);return{fam:ne,it:te,w:B,css:`https://fonts.googleapis.com/css2?family=${encodeURIComponent(ne).replace(/%20/g,"+")}:ital,wght@${te},${B}&display=swap`}})(),k={langs:r,def:s,lines:U,f:O},E=Object.keys(U).length?`<div id="hc-intro" class="hold" aria-hidden="true"><i class="beat"></i><div class="ln"></div></div>
<script>(function(){var D=${JSON.stringify(k).replace(/</g,"\\u003c")},el=document.getElementById('hc-intro');try{var q=new URLSearchParams(location.search);var RT=window.HC_ROUTE||{};if(q.get('p')||RT.p||!/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||'')||(matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)||!el.animate){el.remove();return;}var sv=null;try{sv=localStorage.getItem('hc-lang')}catch(e){}var nl=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(function(x){return String(x).toLowerCase().slice(0,2)});var ql=(q.get('lang')||RT.lang||'').toLowerCase(),has=function(l){return D.langs.indexOf(l)>=0},L=has(ql)?ql:has(sv)?sv:(nl.filter(has)[0]||D.def);var T=D.lines[L]||D.lines[D.def]||D.lines[Object.keys(D.lines)[0]],box=el.querySelector('.ln');if(D.f){box.style.fontFamily='"'+D.f.fam+'", var(--ui)';box.style.fontStyle=D.f.it?'italic':'normal';box.style.fontWeight=D.f.w;}T.forEach(function(t){var x=document.createElement('span');x.className='l';x.textContent=t;box.appendChild(x);});var go=function(){if(go.d)return;go.d=1;var at=0;for(var i=0;i<T.length;i++){box.children[i].animate([{opacity:0,transform:'translateX(-36px)',filter:'blur(6px)'},{opacity:1,transform:'none',filter:'blur(0)'}],{duration:1000,delay:at,easing:'cubic-bezier(.22,.61,.36,1)',fill:'both'});if(i===T.length-1)var va=at;at+=Math.max(650,Math.min(1700,120+16*T[i].length));}window.HC_INTRO={t0:performance.now(),video:va,depart:at+150};};var R=document.documentElement;R.classList.add('hc-stage','hc-late');var fl=null;if(D.f&&document.fonts){var k=document.createElement('link');k.rel='stylesheet';k.href=D.f.css;document.head.appendChild(k);fl=document.fonts.load((D.f.it?'italic ':'')+D.f.w+' 30px "'+D.f.fam+'"');}window.HC_GO=function(){if(fl){fl.then(go,go);setTimeout(go,800);}else go();};setTimeout(function(){if(!go.d&&!window.HC_NOINTRO){R.classList.remove('hc-stage','hc-late');go();}},14000);}catch(e){document.documentElement.classList.remove('hc-stage','hc-late');el.remove();}})();<\/script>`:"";return{head:f,body:m,llms:g,sitemap:M,base:i,intro:E}}function Mh(n,e){let t=(s,r,o)=>{let a=`<!--${r}-->`,l=`<!--/${r}-->`,c=s.indexOf(a),u=s.indexOf(l);return c>=0&&u>c?s.slice(0,c+a.length)+`
`+o+`
`+s.slice(u):s},i=t(t(n,"seo-head",e.head),"seo-body",e.body);return e.intro!=null&&(i.indexOf("<!--hc-intro-->")<0&&(i=i.replace("<body>",`<body>
<!--hc-intro-->
<!--/hc-intro-->`)),i=t(i,"hc-intro",e.intro)),i}function wh(n,e,t){let i=n.address;return`<footer><p><strong>${Re(n.name)}</strong>. ${Re(n.desc(e))}</p>`+(i?`<address>${Re([ze(n.office.name,e),i.street,[i.postalCode,i.city].filter(Boolean).join(" ")].filter(Boolean).join(", "))}${i.mail?` \xB7 <a href="mailto:${Re(i.mail)}">${Re(i.mail)}</a>`:""}</address>`:"")+(n.social.length?`<p>${n.social.map(s=>`<a href="${Re(s)}" rel="me">${Re(s.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""))}</a>`).join(" \xB7 ")}</p>`:"")+`<p>${Re(Xn("langs",e))} : ${n.langs.map(s=>`<a href="${n.href(s,t)}" hreflang="${s}" lang="${s}">${s.toUpperCase()}</a>`).join(" ")}</p></footer>`}function Sh(n,e){let t=ze((n.s.home||{}).sub,e).replace(/\s*\n\s*/g," ");return`<main id="seo-page" lang="${e}"><header><h1>${Re(n.name)}</h1><p>${Re(Xn("tagline",e))}</p>${t?`<p>${Re(t)}</p>`:""}</header>`+n.sections.map(i=>{let s=n.posts.filter(r=>r.section===i.id);return s.length?`<section><h2>${Re(ze(i.name,e))}</h2><ul>`+s.map(r=>{let o=Re(ze(r.title,e)),a=[ze(r.subtitle,e),r.date,ze(r.place,e)].filter(Boolean).join(" \xB7 "),l=Ir(Nr(ze(r.body,e)),220);return`<li>${n.has(r)?`<a href="${n.href(e,r)}">${o}</a>`:`<strong>${o}</strong>`}${a?` \xB7 ${Re(a)}`:""}${l&&n.has(r)?`<br>${Re(l)}`:""}</li>`}).join("")+"</ul></section>":""}).join("")+wh(n,e,null)+"</main>"}function Wv(n,e,t,i){let s=n.sections.find(_=>_.id===i.section),r=ze(i.title,t),o=[n.photo(i),...(i.media||[]).filter(_=>_&&io(_.src)).map(_=>_.src)].filter((_,g,d)=>_&&d.indexOf(_)===g),a=_=>{let g=(i.media||[]).find(d=>d&&d.src===_)||{};return{alt:g.caption&&ze(g.caption,t)||`${r}${ze(i.subtitle,t)?", "+ze(i.subtitle,t):""}`,credit:g.credit||""}},l=(i.media||[]).filter(_=>_&&_h(_.src)).map(_=>_.src),c=(i.team||[]).map(_=>e.posts.find(g=>g.id===_&&g.published!==!1)).filter(Boolean),u=(i.skills||[]).map(_=>n.posts.find(g=>g.id===_)).filter(Boolean),h=n.posts.filter(_=>_!==i&&((_.skills||[]).includes(i.id)||(_.team||[]).includes(i.id))&&n.has(_)),f=n.pages.filter(_=>_.section===i.section&&_!==i).slice(0,12),m=_=>n.has(_)?`<a href="${n.href(t,_)}">${Re(ze(_.title,t))}</a>`:Re(ze(_.title,t)),y=[ze(i.subtitle,t),i.date,ze(i.place,t)].filter(Boolean).join(" \xB7 ");return`<main id="seo-page" lang="${t}"><nav aria-label="breadcrumb"><a href="${n.href(t)}">${Re(n.name)}</a> \u203A <a href="${n.href(t)}#${Re(i.section)}">${Re(ze(s.name,t))}</a> \u203A ${Re(r)}</nav><article><h1>${Re(r)}</h1>${y?`<p>${Re(y)}</p>`:""}`+Hv(ze(i.body,t))+(o.length?`<section><h2>${Re(Xn("photos",t))}</h2>`+o.slice(0,12).map((_,g)=>{let d=a(_);return`<figure><img src="${Re(_)}" alt="${Re(d.alt)}" loading="${g?"lazy":"eager"}" decoding="async">${d.credit?`<figcaption>\xA9 ${Re(d.credit)}</figcaption>`:""}</figure>`}).join("")+"</section>":"")+(l.length?`<section><h2>${Re(Xn("videos",t))}</h2><ul>${l.map(_=>`<li><a href="${Re(_)}">${Re(_.replace(/^https?:\/\/(www\.)?/,""))}</a></li>`).join("")}</ul></section>`:"")+(c.length?`<section><h2>${Re(Xn("team",t))}</h2><ul>${c.map(_=>`<li>${m(_)}${ze(_.subtitle,t)?` \xB7 ${Re(ze(_.subtitle,t))}`:""}</li>`).join("")}</ul></section>`:"")+(u.length?`<section><h2>${Re(ze((n.sections.find(_=>_.skills)||{}).name,t))}</h2><ul>${u.map(_=>`<li>${m(_)}</li>`).join("")}</ul></section>`:"")+(h.length?`<section><h2>${Re(ze(n.sections[0].name,t))}</h2><ul>${h.map(_=>`<li>${m(_)}${ze(_.subtitle,t)?` \xB7 ${Re(ze(_.subtitle,t))}`:""}</li>`).join("")}</ul></section>`:"")+(n.updated(i)?`<p><time datetime="${n.updated(i)}">${Re(Xn("updated",t))} ${Re(Gv(n.updated(i),t))}</time></p>`:"")+"</article>"+(f.length?`<aside><h2>${Re(Xn("more",t))} : ${Re(ze(s.name,t))}</h2><ul>${f.map(_=>`<li>${m(_)}</li>`).join("")}</ul></aside>`:"")+wh(n,t,i)+"</main>"}function $v(n,e,t,i){let s=n.sections.find(v=>v.id===i.section),r=n.url(t,i),o=ze(i.title,t),a=[n.photo(i),...(i.media||[]).filter(v=>v&&io(v.src)).map(v=>v.src)].filter((v,M,D)=>v&&D.indexOf(v)===M).slice(0,8),l=a.map(v=>{let M=(i.media||[]).find(D=>D&&D.src===v)||{};return{"@type":"ImageObject",contentUrl:Bi(n.base,v),...M.caption&&ze(M.caption,t)?{caption:ze(M.caption,t)}:{},...M.credit?{creditText:M.credit,creator:{"@type":"Person",name:M.credit}}:{}}}),c=v=>(v.tags||[]).some(M=>$l.includes(M))||!(v.tags||[]).length&&(n.sections.find(M=>M.id===v.section)||{}).card==="portrait",u=(i.team||[]).map(v=>e.posts.find(M=>M.id===v&&M.published!==!1)).filter(Boolean).map(v=>n.has(v)?{"@id":n.url(t,v)+"#person"}:{"@type":c(v)?"Person":"Organization",name:ze(v.title,t)}),h=String(i.author||"").split(/\s*&\s*/).filter(Boolean).map(v=>/mouawad\s*\+?\s*laurier/i.test(v)?{"@type":"Organization",name:"Mouawad + Laurier"}:{"@type":/\+|studio|collective/i.test(v)?"Organization":"Person",name:v}),f=(i.media||[]).filter(v=>v&&_h(v.src)).map(v=>{let M=Vv(v.src);return{"@type":"VideoObject",name:o,description:Ir(Nr(ze(i.body,t)),200)||o,embedUrl:M?`https://www.youtube.com/embed/${M}`:v.src.replace(/vimeo\.com\/(\d+)/,"player.vimeo.com/video/$1"),thumbnailUrl:M?`https://i.ytimg.com/vi/${M}/hqdefault.jpg`:a[0]?Bi(n.base,a[0]):n.image}}),m=(()=>{let v=ze(i.body,t),M=v.search(/<h3>\s*(Press|Presse|Premsa|Prensa)\s*<\/h3>/i);if(M<0)return[];let D=[];return v.slice(M).replace(/<a href="(https?:[^"]+)"[^>]*>([\s\S]*?)<\/a>/g,(U,O,k)=>(D.push({"@type":"CreativeWork",url:O,name:Pr(k).join(" ")}),U)),D})(),y={"@type":"BreadcrumbList",itemListElement:[{name:n.name,item:n.url(t)},{name:ze(s.name,t),item:n.url(t)+"#"+i.section},{name:o,item:r}].map((v,M)=>({"@type":"ListItem",position:M+1,...v}))},_=Ir(Nr(ze(i.body,t)),300),g=(i.tags||[]).some(v=>$l.includes(v)),d=s.skills?{"@type":"Service",name:o,description:_,provider:{"@id":n.base+"#studio"},areaServed:"Worldwide",url:r}:g?{"@type":"Person","@id":r+"#person",name:o,jobTitle:ze(i.subtitle,t),description:_,url:r,...a[0]?{image:Bi(n.base,a[0])}:{},...(i.tags||[]).includes("core")?{worksFor:{"@id":n.base+"#studio"}}:{},.../^https?:/.test(i.link||"")?{sameAs:[i.link]}:{}}:s.card==="place"?{"@type":"ContactPage",name:o,url:r,about:{"@id":n.base+"#studio"}}:{"@type":"CreativeWork","@id":r+"#work",name:o,url:r,inLanguage:t,description:_,...ze(i.subtitle,t)?{alternativeHeadline:ze(i.subtitle,t)}:{},...yh(i.date)?{dateCreated:yh(i.date)}:{},...ze(i.place,t)?{locationCreated:{"@type":"Place",name:ze(i.place,t)}}:{},...h.length?{creator:h.length>1?h:h[0]}:{},producer:{"@id":n.base+"#studio"},...u.length?{contributor:u}:{},...l.length?{image:l}:{},...f.length?{video:f}:{},...m.length?{subjectOf:m}:{}};return{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":r,url:r,name:o,inLanguage:t,isPartOf:{"@id":n.base+"#website"},breadcrumb:y,...n.updated(i)?{dateModified:n.updated(i)}:{},...a[0]?{primaryImageOfPage:{"@type":"ImageObject",contentUrl:Bi(n.base,a[0])}}:{},mainEntity:d["@id"]?{"@id":d["@id"]}:d},...d["@id"]?[d]:[],n.org(t),{"@type":"WebSite","@id":n.base+"#website",url:n.base,name:n.name,publisher:{"@id":n.base+"#studio"}}]}}var Wl=(n,e,t)=>{let i=`<!--${e}-->`,s=`<!--/${e}-->`,r=n.indexOf(i),o=n.indexOf(s);return r>=0&&o>r?n.slice(0,r+i.length)+`
`+t+`
`+n.slice(o):n};function Eh(n,e,t={}){let i=xh(e,t),s=[],r=(a,l,c,u)=>{let h=n.replace(/<html lang="[^"]*"/,`<html lang="${a}"`);return h=Wl(h,"seo-head",c),h=Wl(h,"seo-body",u),l&&(h=Wl(h,"hc-intro","")),h},o=(a,l,c,u,h,f)=>[`<meta property="og:type" content="${f}">`,`<meta property="og:site_name" content="${Re(i.name)}">`,`<meta property="og:title" content="${Re(a)}">`,`<meta property="og:description" content="${Re(l)}">`,`<meta property="og:url" content="${Re(c)}">`,`<meta property="og:image" content="${Re(u)}">`,`<meta property="og:locale" content="${{en:"en_GB",fr:"fr_FR",ca:"ca_ES",es:"es_ES"}[h]||h}">`,'<meta name="twitter:card" content="summary_large_image">'];for(let a of i.langs){let l=`${i.name} \xB7 ${Xn("tagline",a)}`,c=i.desc(a),u=i.url(a),h={"@context":"https://schema.org","@graph":[i.org(a),{"@type":"WebSite","@id":i.base+"#website",url:i.base,name:i.name,inLanguage:i.langs,publisher:{"@id":i.base+"#studio"}},{"@type":"WebPage","@id":u,url:u,name:l,inLanguage:a,isPartOf:{"@id":i.base+"#website"},about:{"@id":i.base+"#studio"},...i.lastmod?{dateModified:i.lastmod}:{}}]};s.push({path:`${a}/index.html`,text:r(a,null,['<base href="../">',`<script>window.HC_ROUTE=${JSON.stringify({pages:1,lang:a})}<\/script>`,`<title>${Re(l)}</title>`,`<meta name="description" content="${Re(c)}">`,`<link rel="canonical" href="${Re(u)}">`,...i.langs.map(f=>`<link rel="alternate" hreflang="${f}" href="${Re(i.url(f))}">`),`<link rel="alternate" hreflang="x-default" href="${Re(i.base)}">`,'<meta name="robots" content="max-image-preview:large">',...o(l,c,u,i.image,a,"website"),`<script type="application/ld+json">${JSON.stringify(h).replace(/</g,"\\u003c")}<\/script>`].join(`
`),Sh(i,a))});for(let f of i.pages){let m=ze(f.title,a),y=ze(f.subtitle,a),_=(m+(y&&(m+y).length<58?" \xB7 "+y:"")+" \xB7 "+i.name).replace(/\s+/g," "),g=Ir(Nr(ze(f.body,a)),158)||y||i.desc(a),d=i.url(a,f),T=Bi(i.base,i.photo(f))||i.image;s.push({path:`${a}/${f.id}/index.html`,text:r(a,f,['<base href="../../">',`<script>window.HC_ROUTE=${JSON.stringify({pages:1,lang:a,p:f.id})}<\/script>`,`<title>${Re(_)}</title>`,`<meta name="description" content="${Re(g)}">`,`<link rel="canonical" href="${Re(d)}">`,...i.langs.map(v=>`<link rel="alternate" hreflang="${v}" href="${Re(i.url(v,f))}">`),`<link rel="alternate" hreflang="x-default" href="${Re(i.url(i.def,f))}">`,'<meta name="robots" content="max-image-preview:large">',...o(`${m} \xB7 ${i.name}`,g,d,T,a,"article"),...i.updated(f)?[`<meta property="article:modified_time" content="${i.updated(f)}">`]:[],`<script type="application/ld+json">${JSON.stringify($v(i,e,a,f)).replace(/</g,"\\u003c")}<\/script>`].join(`
`),Wv(i,e,a,f))})}}return s}var Dr=class extends $a{constructor(e){super(e)}parse(e){function t(G){switch(G.image_type){case f:case _:if(G.colormap_length>256||G.colormap_size!==24||G.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case y:case g:case d:if(G.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+G.image_type)}if(G.width<=0||G.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(G.pixel_size!==8&&G.pixel_size!==16&&G.pixel_size!==24&&G.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+G.pixel_size)}function i(G,re,se,Z,le){let ae,he,P=se.pixel_size>>3,F=se.width*se.height*P;if(re&&(he=le.subarray(Z,Z+=se.colormap_length*(se.colormap_size>>3))),G){ae=new Uint8Array(F);let H,X,q,ve=0,Ce=new Uint8Array(P);for(;ve<F;)if(H=le[Z++],X=(H&127)+1,H&128){for(q=0;q<P;++q)Ce[q]=le[Z++];for(q=0;q<X;++q)ae.set(Ce,ve+q*P);ve+=P*X}else{for(X*=P,q=0;q<X;++q)ae[ve+q]=le[Z++];ve+=X}}else ae=le.subarray(Z,Z+=re?se.width*se.height:F);return{pixel_data:ae,palettes:he}}function s(G,re,se,Z,le,ae,he,P,F){let H=F,X,q=0,ve,Ce,Pe=R.width;for(Ce=re;Ce!==Z;Ce+=se)for(ve=le;ve!==he;ve+=ae,q++)X=P[q],G[(ve+Pe*Ce)*4+3]=255,G[(ve+Pe*Ce)*4+2]=H[X*3+0],G[(ve+Pe*Ce)*4+1]=H[X*3+1],G[(ve+Pe*Ce)*4+0]=H[X*3+2];return G}function r(G,re,se,Z,le,ae,he,P){let F,H=0,X,q,ve=R.width;for(q=re;q!==Z;q+=se)for(X=le;X!==he;X+=ae,H+=2)F=P[H+0]+(P[H+1]<<8),G[(X+ve*q)*4+0]=(F&31744)>>7,G[(X+ve*q)*4+1]=(F&992)>>2,G[(X+ve*q)*4+2]=(F&31)<<3,G[(X+ve*q)*4+3]=F&32768?0:255;return G}function o(G,re,se,Z,le,ae,he,P){let F=0,H,X,q=R.width;for(X=re;X!==Z;X+=se)for(H=le;H!==he;H+=ae,F+=3)G[(H+q*X)*4+3]=255,G[(H+q*X)*4+2]=P[F+0],G[(H+q*X)*4+1]=P[F+1],G[(H+q*X)*4+0]=P[F+2];return G}function a(G,re,se,Z,le,ae,he,P){let F=0,H,X,q=R.width;for(X=re;X!==Z;X+=se)for(H=le;H!==he;H+=ae,F+=4)G[(H+q*X)*4+2]=P[F+0],G[(H+q*X)*4+1]=P[F+1],G[(H+q*X)*4+0]=P[F+2],G[(H+q*X)*4+3]=P[F+3];return G}function l(G,re,se,Z,le,ae,he,P){let F,H=0,X,q,ve=R.width;for(q=re;q!==Z;q+=se)for(X=le;X!==he;X+=ae,H++)F=P[H],G[(X+ve*q)*4+0]=F,G[(X+ve*q)*4+1]=F,G[(X+ve*q)*4+2]=F,G[(X+ve*q)*4+3]=255;return G}function c(G,re,se,Z,le,ae,he,P){let F=0,H,X,q=R.width;for(X=re;X!==Z;X+=se)for(H=le;H!==he;H+=ae,F+=2)G[(H+q*X)*4+0]=P[F+0],G[(H+q*X)*4+1]=P[F+0],G[(H+q*X)*4+2]=P[F+0],G[(H+q*X)*4+3]=P[F+1];return G}function u(G,re,se,Z,le){let ae,he,P,F,H,X;switch((R.flags&T)>>v){default:case U:ae=0,P=1,H=re,he=0,F=1,X=se;break;case M:ae=0,P=1,H=re,he=se-1,F=-1,X=-1;break;case O:ae=re-1,P=-1,H=-1,he=0,F=1,X=se;break;case D:ae=re-1,P=-1,H=-1,he=se-1,F=-1,X=-1;break}if(te)switch(R.pixel_size){case 8:l(G,he,F,X,ae,P,H,Z);break;case 16:c(G,he,F,X,ae,P,H,Z);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(R.pixel_size){case 8:s(G,he,F,X,ae,P,H,Z,le);break;case 16:r(G,he,F,X,ae,P,H,Z);break;case 24:o(G,he,F,X,ae,P,H,Z);break;case 32:a(G,he,F,X,ae,P,H,Z);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return G}let h=0,f=1,m=2,y=3,_=9,g=10,d=11,T=48,v=4,M=0,D=1,U=2,O=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let k=0,E=new Uint8Array(e),R={id_length:E[k++],colormap_type:E[k++],image_type:E[k++],colormap_index:E[k++]|E[k++]<<8,colormap_length:E[k++]|E[k++]<<8,colormap_size:E[k++],origin:[E[k++]|E[k++]<<8,E[k++]|E[k++]<<8],width:E[k++]|E[k++]<<8,height:E[k++]|E[k++]<<8,pixel_size:E[k++],flags:E[k++]};if(t(R),R.id_length+k>e.length)throw new Error("THREE.TGALoader: No data.");k+=R.id_length;let W=!1,ne=!1,te=!1;switch(R.image_type){case _:W=!0,ne=!0;break;case f:ne=!0;break;case g:W=!0;break;case m:break;case d:W=!0,te=!0;break;case y:te=!0;break}let B=new Uint8Array(R.width*R.height*4),Y=i(W,ne,R,k,E);return u(B,R.width,R.height,Y.pixel_data,Y.palettes),{data:B,width:R.width,height:R.height,flipY:!0,generateMipmaps:!0,minFilter:Ii}}};var so=class extends qn{load(e,t,i,s){let r=this,o=r.path===""?Za.extractUrlBase(e):r.path,a=new Rr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(b,x){let C=[],w=b.childNodes;for(let L=0,ee=w.length;L<ee;L++){let oe=w[L];oe.nodeName===x&&C.push(oe)}return C}function s(b){if(b.length===0)return[];let x=b.trim().split(/\s+/),C=new Array(x.length);for(let w=0,L=x.length;w<L;w++)C[w]=x[w];return C}function r(b){if(b.length===0)return[];let x=b.trim().split(/\s+/),C=new Array(x.length);for(let w=0,L=x.length;w<L;w++)C[w]=parseFloat(x[w]);return C}function o(b){if(b.length===0)return[];let x=b.trim().split(/\s+/),C=new Array(x.length);for(let w=0,L=x.length;w<L;w++)C[w]=parseInt(x[w]);return C}function a(b){return b.substring(1)}function l(){return"three_default_"+ud++}function c(b){return Object.keys(b).length===0}function u(b){return{unit:h(i(b,"unit")[0]),upAxis:f(i(b,"up_axis")[0])}}function h(b){return b!==void 0&&b.hasAttribute("meter")===!0?parseFloat(b.getAttribute("meter")):1}function f(b){return b!==void 0?b.textContent:"Y_UP"}function m(b,x,C,w){let L=i(b,x)[0];if(L!==void 0){let ee=i(L,C);for(let oe=0;oe<ee.length;oe++)w(ee[oe])}}function y(b,x){for(let C in b){let w=b[C];w.build=x(b[C])}}function _(b,x){return b.build!==void 0||(b.build=x(b)),b.build}function g(b){let x={sources:{},samplers:{},channels:{}},C=!1;for(let w=0,L=b.childNodes.length;w<L;w++){let ee=b.childNodes[w];if(ee.nodeType!==1)continue;let oe;switch(ee.nodeName){case"source":oe=ee.getAttribute("id"),x.sources[oe]=z(ee);break;case"sampler":oe=ee.getAttribute("id"),x.samplers[oe]=d(ee);break;case"channel":oe=ee.getAttribute("target"),x.channels[oe]=T(ee);break;case"animation":g(ee),C=!0;break;default:console.log(ee)}}C===!1&&(Ye.animations[b.getAttribute("id")||Xs.generateUUID()]=x)}function d(b){let x={inputs:{}};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":let ee=a(L.getAttribute("source")),oe=L.getAttribute("semantic");x.inputs[oe]=ee;break}}return x}function T(b){let x={},w=b.getAttribute("target").split("/"),L=w.shift(),ee=w.shift(),oe=ee.indexOf("(")!==-1,Le=ee.indexOf(".")!==-1;if(Le)w=ee.split("."),ee=w.shift(),x.member=w.shift();else if(oe){let xe=ee.split("(");ee=xe.shift();for(let Ee=0;Ee<xe.length;Ee++)xe[Ee]=parseInt(xe[Ee].replace(/\)/,""));x.indices=xe}return x.id=L,x.sid=ee,x.arraySyntax=oe,x.memberSyntax=Le,x.sampler=a(b.getAttribute("source")),x}function v(b){let x=[],C=b.channels,w=b.samplers,L=b.sources;for(let ee in C)if(C.hasOwnProperty(ee)){let oe=C[ee],Le=w[oe.sampler],xe=Le.inputs.INPUT,Ee=Le.inputs.OUTPUT,Fe=L[xe],ue=L[Ee],ke=D(oe,Fe,ue);R(ke,x)}return x}function M(b){return _(Ye.animations[b],v)}function D(b,x,C){let w=Ye.nodes[b.id],L=et(w.id),ee=w.transforms[b.sid],oe=w.matrix.clone().transpose(),Le,xe,Ee,Fe,ue,ke,De={};switch(ee){case"matrix":for(Ee=0,Fe=x.array.length;Ee<Fe;Ee++)if(Le=x.array[Ee],xe=Ee*C.stride,De[Le]===void 0&&(De[Le]={}),b.arraySyntax===!0){let kt=C.array[xe],wt=b.indices[0]+4*b.indices[1];De[Le][wt]=kt}else for(ue=0,ke=C.stride;ue<ke;ue++)De[Le][ue]=C.array[xe+ue];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ee);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ee);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ee);break}let $e=U(De,oe);return{name:L.uuid,keyframes:$e}}function U(b,x){let C=[];for(let L in b)C.push({time:parseFloat(L),value:b[L]});C.sort(w);for(let L=0;L<16;L++)W(C,L,x.elements[L]);return C;function w(L,ee){return L.time-ee.time}}let O=new V,k=new V,E=new $n;function R(b,x){let C=b.keyframes,w=b.name,L=[],ee=[],oe=[],Le=[];for(let xe=0,Ee=C.length;xe<Ee;xe++){let Fe=C[xe],ue=Fe.time,ke=Fe.value;Ae.fromArray(ke).transpose(),Ae.decompose(O,E,k),L.push(ue),ee.push(O.x,O.y,O.z),oe.push(E.x,E.y,E.z,E.w),Le.push(k.x,k.y,k.z)}return ee.length>0&&x.push(new gi(w+".position",L,ee)),oe.length>0&&x.push(new mi(w+".quaternion",L,oe)),Le.length>0&&x.push(new gi(w+".scale",L,Le)),x}function W(b,x,C){let w,L=!0,ee,oe;for(ee=0,oe=b.length;ee<oe;ee++)w=b[ee],w.value[x]===void 0?w.value[x]=null:L=!1;if(L===!0)for(ee=0,oe=b.length;ee<oe;ee++)w=b[ee],w.value[x]=C;else ne(b,x)}function ne(b,x){let C,w;for(let L=0,ee=b.length;L<ee;L++){let oe=b[L];if(oe.value[x]===null){if(C=te(b,L,x),w=B(b,L,x),C===null){oe.value[x]=w.value[x];continue}if(w===null){oe.value[x]=C.value[x];continue}Y(oe,C,w,x)}}}function te(b,x,C){for(;x>=0;){let w=b[x];if(w.value[C]!==null)return w;x--}return null}function B(b,x,C){for(;x<b.length;){let w=b[x];if(w.value[C]!==null)return w;x++}return null}function Y(b,x,C,w){if(C.time-x.time===0){b.value[w]=x.value[w];return}b.value[w]=(b.time-x.time)*(C.value[w]-x.value[w])/(C.time-x.time)+x.value[w]}function G(b){let x={name:b.getAttribute("id")||"default",start:parseFloat(b.getAttribute("start")||0),end:parseFloat(b.getAttribute("end")||0),animations:[]};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"instance_animation":x.animations.push(a(L.getAttribute("url")));break}}Ye.clips[b.getAttribute("id")]=x}function re(b){let x=[],C=b.name,w=b.end-b.start||-1,L=b.animations;for(let ee=0,oe=L.length;ee<oe;ee++){let Le=M(L[ee]);for(let xe=0,Ee=Le.length;xe<Ee;xe++)x.push(Le[xe])}return new Ar(C,w,x)}function se(b){return _(Ye.clips[b],re)}function Z(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"skin":x.id=a(L.getAttribute("source")),x.skin=le(L);break;case"morph":x.id=a(L.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Ye.controllers[b.getAttribute("id")]=x}function le(b){let x={sources:{}};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(L.textContent);break;case"source":let ee=L.getAttribute("id");x.sources[ee]=z(L);break;case"joints":x.joints=ae(L);break;case"vertex_weights":x.vertexWeights=he(L);break}}return x}function ae(b){let x={inputs:{}};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":let ee=L.getAttribute("semantic"),oe=a(L.getAttribute("source"));x.inputs[ee]=oe;break}}return x}function he(b){let x={inputs:{}};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":let ee=L.getAttribute("semantic"),oe=a(L.getAttribute("source")),Le=parseInt(L.getAttribute("offset"));x.inputs[ee]={id:oe,offset:Le};break;case"vcount":x.vcount=o(L.textContent);break;case"v":x.v=o(L.textContent);break}}return x}function P(b){let x={id:b.id},C=Ye.geometries[x.id];return b.skin!==void 0&&(x.skin=F(b.skin),C.sources.skinIndices=x.skin.indices,C.sources.skinWeights=x.skin.weights),x}function F(b){let C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},w=b.sources,L=b.vertexWeights,ee=L.vcount,oe=L.v,Le=L.inputs.JOINT.offset,xe=L.inputs.WEIGHT.offset,Ee=b.sources[b.joints.inputs.JOINT],Fe=b.sources[b.joints.inputs.INV_BIND_MATRIX],ue=w[L.inputs.WEIGHT.id].array,ke=0,De,$e,Ve;for(De=0,Ve=ee.length;De<Ve;De++){let wt=ee[De],vt=[];for($e=0;$e<wt;$e++){let yt=oe[ke+Le],ei=oe[ke+xe],dn=ue[ei];vt.push({index:yt,weight:dn}),ke+=2}for(vt.sort(kt),$e=0;$e<4;$e++){let yt=vt[$e];yt!==void 0?(C.indices.array.push(yt.index),C.weights.array.push(yt.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(b.bindShapeMatrix?C.bindMatrix=new ft().fromArray(b.bindShapeMatrix).transpose():C.bindMatrix=new ft().identity(),De=0,Ve=Ee.array.length;De<Ve;De++){let wt=Ee.array[De],vt=new ft().fromArray(Fe.array,De*Fe.stride).transpose();C.joints.push({name:wt,boneInverse:vt})}return C;function kt(wt,vt){return vt.weight-wt.weight}}function H(b){return _(Ye.controllers[b],P)}function X(b){let x={init_from:i(b,"init_from")[0].textContent};Ye.images[b.getAttribute("id")]=x}function q(b){return b.build!==void 0?b.build:b.init_from}function ve(b){let x=Ye.images[b];return x!==void 0?_(x,q):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",b),null)}function Ce(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"profile_COMMON":x.profile=Pe(L);break}}Ye.effects[b.getAttribute("id")]=x}function Pe(b){let x={surfaces:{},samplers:{}};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"newparam":tt(L,x);break;case"technique":x.technique=Oe(L);break;case"extra":x.extra=A(L);break}}return x}function tt(b,x){let C=b.getAttribute("sid");for(let w=0,L=b.childNodes.length;w<L;w++){let ee=b.childNodes[w];if(ee.nodeType===1)switch(ee.nodeName){case"surface":x.surfaces[C]=j(ee);break;case"sampler2D":x.samplers[C]=Nt(ee);break}}}function j(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"init_from":x.init_from=L.textContent;break}}return x}function Nt(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"source":x.source=L.textContent;break}}return x}function Oe(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=L.nodeName,x.parameters=ce(L);break;case"extra":x.extra=A(L);break}}return x}function ce(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[L.nodeName]=ge(L);break;case"transparent":x[L.nodeName]={opaque:L.hasAttribute("opaque")?L.getAttribute("opaque"):"A_ONE",data:ge(L)};break}}return x}function ge(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"color":x[L.nodeName]=r(L.textContent);break;case"float":x[L.nodeName]=parseFloat(L.textContent);break;case"texture":x[L.nodeName]={id:L.getAttribute("texture"),extra:Ze(L)};break}}return x}function Ze(b){let x={technique:{}};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"extra":Ke(L,x);break}}return x}function Ke(b,x){for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"technique":N(L,x);break}}}function N(b,x){for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[L.nodeName]=parseFloat(L.textContent);break;case"wrapU":case"wrapV":L.textContent.toUpperCase()==="TRUE"?x.technique[L.nodeName]=1:L.textContent.toUpperCase()==="FALSE"?x.technique[L.nodeName]=0:x.technique[L.nodeName]=parseInt(L.textContent);break;case"bump":x[L.nodeName]=pe(L);break}}}function A(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"technique":x.technique=K(L);break}}return x}function K(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"double_sided":x[L.nodeName]=parseInt(L.textContent);break;case"bump":x[L.nodeName]=pe(L);break}}return x}function pe(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"texture":x[L.nodeName]={id:L.getAttribute("texture"),texcoord:L.getAttribute("texcoord"),extra:Ze(L)};break}}return x}function de(b){return b}function me(b){return _(Ye.effects[b],de)}function Be(b){let x={name:b.getAttribute("name")};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"instance_effect":x.url=a(L.getAttribute("url"));break}}Ye.materials[b.getAttribute("id")]=x}function Se(b){let x,C=b.slice((b.lastIndexOf(".")-1>>>0)+2);switch(C=C.toLowerCase(),C){case"tga":x=wo;break;default:x=lr}return x}function Ie(b){let x=me(b.url),C=x.profile.technique,w;switch(C.type){case"phong":case"blinn":w=new Tr;break;case"lambert":w=new ns;break;default:w=new Un;break}w.name=b.name||"";function L(xe,Ee=null){let Fe=x.profile.samplers[xe.id],ue=null;if(Fe!==void 0){let ke=x.profile.surfaces[Fe.source];ue=ve(ke.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ue=ve(xe.id);if(ue!==null){let ke=Se(ue);if(ke!==void 0){let De=ke.load(ue),$e=xe.extra;if($e!==void 0&&$e.technique!==void 0&&c($e.technique)===!1){let Ve=$e.technique;De.wrapS=Ve.wrapU?Pi:sn,De.wrapT=Ve.wrapV?Pi:sn,De.offset.set(Ve.offsetU||0,Ve.offsetV||0),De.repeat.set(Ve.repeatU||1,Ve.repeatV||1)}else De.wrapS=Pi,De.wrapT=Pi;return Ee!==null&&(De.colorSpace=Ee),De}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ue),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let ee=C.parameters;for(let xe in ee){let Ee=ee[xe];switch(xe){case"diffuse":Ee.color&&w.color.fromArray(Ee.color),Ee.texture&&(w.map=L(Ee.texture,Ft));break;case"specular":Ee.color&&w.specular&&w.specular.fromArray(Ee.color),Ee.texture&&(w.specularMap=L(Ee.texture));break;case"bump":Ee.texture&&(w.normalMap=L(Ee.texture));break;case"ambient":Ee.texture&&(w.lightMap=L(Ee.texture,Ft));break;case"shininess":Ee.float&&w.shininess&&(w.shininess=Ee.float);break;case"emission":Ee.color&&w.emissive&&w.emissive.fromArray(Ee.color),Ee.texture&&(w.emissiveMap=L(Ee.texture,Ft));break}}w.color.convertSRGBToLinear(),w.specular&&w.specular.convertSRGBToLinear(),w.emissive&&w.emissive.convertSRGBToLinear();let oe=ee.transparent,Le=ee.transparency;if(Le===void 0&&oe&&(Le={float:1}),oe===void 0&&Le&&(oe={opaque:"A_ONE",data:{color:[1,1,1,1]}}),oe&&Le)if(oe.data.texture)w.transparent=!0;else{let xe=oe.data.color;switch(oe.opaque){case"A_ONE":w.opacity=xe[3]*Le.float;break;case"RGB_ZERO":w.opacity=1-xe[0]*Le.float;break;case"A_ZERO":w.opacity=1-xe[3]*Le.float;break;case"RGB_ONE":w.opacity=xe[0]*Le.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',oe.opaque)}w.opacity<1&&(w.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){let xe=C.extra.technique;for(let Ee in xe){let Fe=xe[Ee];switch(Ee){case"double_sided":w.side=Fe===1?xn:Wn;break;case"bump":w.normalMap=L(Fe.texture),w.normalScale=new gt(1,1);break}}}return w}function Xe(b){return _(Ye.materials[b],Ie)}function ot(b){let x={name:b.getAttribute("name")};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"optics":x.optics=fe(L);break}}Ye.cameras[b.getAttribute("id")]=x}function fe(b){for(let x=0;x<b.childNodes.length;x++){let C=b.childNodes[x];switch(C.nodeName){case"technique_common":return xt(C)}}return{}}function xt(b){let x={};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];switch(w.nodeName){case"perspective":case"orthographic":x.technique=w.nodeName,x.parameters=dt(w);break}}return x}function dt(b){let x={};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];switch(w.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[w.nodeName]=parseFloat(w.textContent);break}}return x}function Qe(b){let x;switch(b.optics.technique){case"perspective":x=new Vt(b.optics.parameters.yfov,b.optics.parameters.aspect_ratio,b.optics.parameters.znear,b.optics.parameters.zfar);break;case"orthographic":let C=b.optics.parameters.ymag,w=b.optics.parameters.xmag,L=b.optics.parameters.aspect_ratio;w=w===void 0?C*L:w,C=C===void 0?w/L:C,w*=.5,C*=.5,x=new Vs(-w,w,C,-C,b.optics.parameters.znear,b.optics.parameters.zfar);break;default:x=new Vt;break}return x.name=b.name||"",x}function Ge(b){let x=Ye.cameras[b];return x!==void 0?_(x,Qe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",b),null)}function Ne(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"technique_common":x=rt(L);break}}Ye.lights[b.getAttribute("id")]=x}function rt(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=L.nodeName,x.parameters=_t(L)}}return x}function _t(b){let x={};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"color":let ee=r(L.textContent);x.color=new lt().fromArray(ee).convertSRGBToLinear();break;case"falloff_angle":x.falloffAngle=parseFloat(L.textContent);break;case"quadratic_attenuation":let oe=parseFloat(L.textContent);x.distance=oe?Math.sqrt(1/oe):0;break}}return x}function Lt(b){let x;switch(b.technique){case"directional":x=new qs;break;case"point":x=new Ya;break;case"spot":x=new ja;break;case"ambient":x=new Ja;break}return b.parameters.color&&x.color.copy(b.parameters.color),b.parameters.distance&&(x.distance=b.parameters.distance),x}function ut(b){let x=Ye.lights[b];return x!==void 0?_(x,Lt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",b),null)}function ye(b){let x={name:b.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=i(b,"mesh")[0];if(C!==void 0){for(let w=0;w<C.childNodes.length;w++){let L=C.childNodes[w];if(L.nodeType!==1)continue;let ee=L.getAttribute("id");switch(L.nodeName){case"source":x.sources[ee]=z(L);break;case"vertices":x.vertices=Me(L);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",L.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(we(L));break;default:console.log(L)}}Ye.geometries[b.getAttribute("id")]=x}}function z(b){let x={array:[],stride:3};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"float_array":x.array=r(w.textContent);break;case"Name_array":x.array=s(w.textContent);break;case"technique_common":let L=i(w,"accessor")[0];L!==void 0&&(x.stride=parseInt(L.getAttribute("stride")));break}}return x}function Me(b){let x={};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];w.nodeType===1&&(x[w.getAttribute("semantic")]=a(w.getAttribute("source")))}return x}function we(b){let x={type:b.nodeName,material:b.getAttribute("material"),count:parseInt(b.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,w=b.childNodes.length;C<w;C++){let L=b.childNodes[C];if(L.nodeType===1)switch(L.nodeName){case"input":let ee=a(L.getAttribute("source")),oe=L.getAttribute("semantic"),Le=parseInt(L.getAttribute("offset")),xe=parseInt(L.getAttribute("set")),Ee=xe>0?oe+xe:oe;x.inputs[Ee]={id:ee,offset:Le},x.stride=Math.max(x.stride,Le+1),oe==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(L.textContent);break;case"p":x.p=o(L.textContent);break}}return x}function Je(b){let x={};for(let C=0;C<b.length;C++){let w=b[C];x[w.type]===void 0&&(x[w.type]=[]),x[w.type].push(w)}return x}function qe(b){let x=0;for(let C=0,w=b.length;C<w;C++)b[C].hasUV===!0&&x++;x>0&&x<b.length&&(b.uvsNeedsFix=!0)}function Mt(b){let x={},C=b.sources,w=b.vertices,L=b.primitives;if(L.length===0)return{};let ee=Je(L);for(let oe in ee){let Le=ee[oe];qe(Le),x[oe]=Et(Le,C,w)}return x}function Et(b,x,C){let w={},L={array:[],stride:0},ee={array:[],stride:0},oe={array:[],stride:0},Le={array:[],stride:0},xe={array:[],stride:0},Ee={array:[],stride:4},Fe={array:[],stride:4},ue=new Cn,ke=[],De=0;for(let $e=0;$e<b.length;$e++){let Ve=b[$e],kt=Ve.inputs,wt=0;switch(Ve.type){case"lines":case"linestrips":wt=Ve.count*2;break;case"triangles":wt=Ve.count*3;break;case"polylist":for(let vt=0;vt<Ve.count;vt++){let yt=Ve.vcount[vt];switch(yt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(yt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ve.type)}ue.addGroup(De,wt,$e),De+=wt,Ve.material&&ke.push(Ve.material);for(let vt in kt){let yt=kt[vt];switch(vt){case"VERTEX":for(let ei in C){let dn=C[ei];switch(ei){case"POSITION":let fs=L.array.length;if(bt(Ve,x[dn],yt.offset,L.array),L.stride=x[dn].stride,x.skinWeights&&x.skinIndices&&(bt(Ve,x.skinIndices,yt.offset,Ee.array),bt(Ve,x.skinWeights,yt.offset,Fe.array)),Ve.hasUV===!1&&b.uvsNeedsFix===!0){let hd=(L.array.length-fs)/L.stride;for(let dc=0;dc<hd;dc++)oe.array.push(0,0)}break;case"NORMAL":bt(Ve,x[dn],yt.offset,ee.array),ee.stride=x[dn].stride;break;case"COLOR":bt(Ve,x[dn],yt.offset,xe.array),xe.stride=x[dn].stride;break;case"TEXCOORD":bt(Ve,x[dn],yt.offset,oe.array),oe.stride=x[dn].stride;break;case"TEXCOORD1":bt(Ve,x[dn],yt.offset,Le.array),oe.stride=x[dn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ei)}}break;case"NORMAL":bt(Ve,x[yt.id],yt.offset,ee.array),ee.stride=x[yt.id].stride;break;case"COLOR":bt(Ve,x[yt.id],yt.offset,xe.array,!0),xe.stride=x[yt.id].stride;break;case"TEXCOORD":bt(Ve,x[yt.id],yt.offset,oe.array),oe.stride=x[yt.id].stride;break;case"TEXCOORD1":bt(Ve,x[yt.id],yt.offset,Le.array),Le.stride=x[yt.id].stride;break}}}return L.array.length>0&&ue.setAttribute("position",new Gt(L.array,L.stride)),ee.array.length>0&&ue.setAttribute("normal",new Gt(ee.array,ee.stride)),xe.array.length>0&&ue.setAttribute("color",new Gt(xe.array,xe.stride)),oe.array.length>0&&ue.setAttribute("uv",new Gt(oe.array,oe.stride)),Le.array.length>0&&ue.setAttribute("uv1",new Gt(Le.array,Le.stride)),Ee.array.length>0&&ue.setAttribute("skinIndex",new Gt(Ee.array,Ee.stride)),Fe.array.length>0&&ue.setAttribute("skinWeight",new Gt(Fe.array,Fe.stride)),w.data=ue,w.type=b[0].type,w.materialKeys=ke,w}function bt(b,x,C,w,L=!1){let ee=b.p,oe=b.stride,Le=b.vcount;function xe(ue){let ke=ee[ue+C]*Fe,De=ke+Fe;for(;ke<De;ke++)w.push(Ee[ke]);if(L){let $e=w.length-Fe-1;qr.setRGB(w[$e+0],w[$e+1],w[$e+2]).convertSRGBToLinear(),w[$e+0]=qr.r,w[$e+1]=qr.g,w[$e+2]=qr.b}}let Ee=x.array,Fe=x.stride;if(b.vcount!==void 0){let ue=0;for(let ke=0,De=Le.length;ke<De;ke++){let $e=Le[ke];if($e===4){let Ve=ue+oe*0,kt=ue+oe*1,wt=ue+oe*2,vt=ue+oe*3;xe(Ve),xe(kt),xe(vt),xe(kt),xe(wt),xe(vt)}else if($e===3){let Ve=ue+oe*0,kt=ue+oe*1,wt=ue+oe*2;xe(Ve),xe(kt),xe(wt)}else if($e>4)for(let Ve=1,kt=$e-2;Ve<=kt;Ve++){let wt=ue+oe*0,vt=ue+oe*Ve,yt=ue+oe*(Ve+1);xe(wt),xe(vt),xe(yt)}ue+=oe*$e}}else for(let ue=0,ke=ee.length;ue<ke;ue+=oe)xe(ue)}function Xt(b){return _(Ye.geometries[b],Mt)}function Tt(b){let x={name:b.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"technique_common":Gr(w,x);break}}Ye.kinematicsModels[b.getAttribute("id")]=x}function Jt(b){return b.build!==void 0?b.build:b}function Mn(b){return _(Ye.kinematicsModels[b],Jt)}function Gr(b,x){for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"joint":x.joints[w.getAttribute("sid")]=_o(w);break;case"link":x.links.push(nr(w));break}}}function _o(b){let x;for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"prismatic":case"revolute":x=hs(w);break}}return x}function hs(b){let x={sid:b.getAttribute("sid"),name:b.getAttribute("name")||"",axis:new V,limits:{min:0,max:0},type:b.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"axis":let L=r(w.textContent);x.axis.fromArray(L);break;case"limits":let ee=w.getElementsByTagName("max")[0],oe=w.getElementsByTagName("min")[0];x.limits.max=parseFloat(ee.textContent),x.limits.min=parseFloat(oe.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function nr(b){let x={sid:b.getAttribute("sid"),name:b.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"attachment_full":x.attachments.push(ds(w));break;case"matrix":case"translate":case"rotate":x.transforms.push(ir(w));break}}return x}function ds(b){let x={joint:b.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"link":x.links.push(nr(w));break;case"matrix":case"translate":case"rotate":x.transforms.push(ir(w));break}}return x}function ir(b){let x={type:b.nodeName},C=r(b.textContent);switch(x.type){case"matrix":x.obj=new ft,x.obj.fromArray(C).transpose();break;case"translate":x.obj=new V,x.obj.fromArray(C);break;case"rotate":x.obj=new V,x.obj.fromArray(C),x.angle=Xs.degToRad(C[3]);break}return x}function Wr(b){let x={name:b.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"rigid_body":x.rigidBodies[w.getAttribute("name")]={},xo(w,x.rigidBodies[w.getAttribute("name")]);break}}Ye.physicsModels[b.getAttribute("id")]=x}function xo(b,x){for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"technique_common":bo(w,x);break}}}function bo(b,x){for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"inertia":x.inertia=r(w.textContent);break;case"mass":x.mass=r(w.textContent)[0];break}}}function Mo(b){let x={bindJointAxis:[]};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"bind_joint_axis":x.bindJointAxis.push(I(w));break}}Ye.kinematicsScenes[a(b.getAttribute("url"))]=x}function I(b){let x={target:b.getAttribute("target").split("/").pop()};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType===1)switch(w.nodeName){case"axis":let L=w.getElementsByTagName("param")[0];x.axis=L.textContent;let ee=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=ee.substring(0,ee.length-1);break}}return x}function $(b){return b.build!==void 0?b.build:b}function Q(b){return _(Ye.kinematicsScenes[b],$)}function ie(){let b=Object.keys(Ye.kinematicsModels)[0],x=Object.keys(Ye.kinematicsScenes)[0],C=Object.keys(Ye.visualScenes)[0];if(b===void 0||x===void 0)return;let w=Mn(b),L=Q(x),ee=rr(C),oe=L.bindJointAxis,Le={};for(let Fe=0,ue=oe.length;Fe<ue;Fe++){let ke=oe[Fe],De=Ot.querySelector('[sid="'+ke.target+'"]');if(De){let $e=De.parentElement;xe(ke.jointIndex,$e)}}function xe(Fe,ue){let ke=ue.getAttribute("name"),De=w.joints[Fe];ee.traverse(function($e){$e.name===ke&&(Le[Fe]={object:$e,transforms:J(ue),joint:De,position:De.zeroPosition})})}let Ee=new ft;hc={joints:w&&w.joints,getJointValue:function(Fe){let ue=Le[Fe];if(ue)return ue.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,ue){let ke=Le[Fe];if(ke){let De=ke.joint;if(ue>De.limits.max||ue<De.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+ue+" outside of limits (min: "+De.limits.min+", max: "+De.limits.max+").");else if(De.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{let $e=ke.object,Ve=De.axis,kt=ke.transforms;Ae.identity();for(let wt=0;wt<kt.length;wt++){let vt=kt[wt];if(vt.sid&&vt.sid.indexOf(Fe)!==-1)switch(De.type){case"revolute":Ae.multiply(Ee.makeRotationAxis(Ve,Xs.degToRad(ue)));break;case"prismatic":Ae.multiply(Ee.makeTranslation(Ve.x*ue,Ve.y*ue,Ve.z*ue));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+De.type);break}else switch(vt.type){case"matrix":Ae.multiply(vt.obj);break;case"translate":Ae.multiply(Ee.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":Ae.scale(vt.obj);break;case"rotate":Ae.multiply(Ee.makeRotationAxis(vt.obj,vt.angle));break}}$e.matrix.copy(Ae),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Le[Fe].position=ue}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function J(b){let x=[],C=Ot.querySelector('[id="'+b.id+'"]');for(let w=0;w<C.childNodes.length;w++){let L=C.childNodes[w];if(L.nodeType!==1)continue;let ee,oe;switch(L.nodeName){case"matrix":ee=r(L.textContent);let Le=new ft().fromArray(ee).transpose();x.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:Le});break;case"translate":case"scale":ee=r(L.textContent),oe=new V().fromArray(ee),x.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:oe});break;case"rotate":ee=r(L.textContent),oe=new V().fromArray(ee);let xe=Xs.degToRad(ee[3]);x.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:oe,angle:xe});break}}return x}function Te(b){let x=b.getElementsByTagName("node");for(let C=0;C<x.length;C++){let w=x[C];w.hasAttribute("id")===!1&&w.setAttribute("id",l())}}let Ae=new ft,He=new V;function je(b){let x={name:b.getAttribute("name")||"",type:b.getAttribute("type"),id:b.getAttribute("id"),sid:b.getAttribute("sid"),matrix:new ft,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];if(w.nodeType!==1)continue;let L;switch(w.nodeName){case"node":x.nodes.push(w.getAttribute("id")),je(w);break;case"instance_camera":x.instanceCameras.push(a(w.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(at(w));break;case"instance_light":x.instanceLights.push(a(w.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(at(w));break;case"instance_node":x.instanceNodes.push(a(w.getAttribute("url")));break;case"matrix":L=r(w.textContent),x.matrix.multiply(Ae.fromArray(L).transpose()),x.transforms[w.getAttribute("sid")]=w.nodeName;break;case"translate":L=r(w.textContent),He.fromArray(L),x.matrix.multiply(Ae.makeTranslation(He.x,He.y,He.z)),x.transforms[w.getAttribute("sid")]=w.nodeName;break;case"rotate":L=r(w.textContent);let ee=Xs.degToRad(L[3]);x.matrix.multiply(Ae.makeRotationAxis(He.fromArray(L),ee)),x.transforms[w.getAttribute("sid")]=w.nodeName;break;case"scale":L=r(w.textContent),x.matrix.scale(He.fromArray(L)),x.transforms[w.getAttribute("sid")]=w.nodeName;break;case"extra":break;default:console.log(w)}}return Rt(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):Ye.nodes[x.id]=x,x}function at(b){let x={id:a(b.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<b.childNodes.length;C++){let w=b.childNodes[C];switch(w.nodeName){case"bind_material":let L=w.getElementsByTagName("instance_material");for(let ee=0;ee<L.length;ee++){let oe=L[ee],Le=oe.getAttribute("symbol"),xe=oe.getAttribute("target");x.materials[Le]=a(xe)}break;case"skeleton":x.skeletons.push(a(w.textContent));break;default:break}}return x}function nt(b,x){let C=[],w=[],L,ee,oe;for(L=0;L<b.length;L++){let Ee=b[L],Fe;if(Rt(Ee))Fe=et(Ee),it(Fe,x,C);else if(Qn(Ee)){let ke=Ye.visualScenes[Ee].children;for(let De=0;De<ke.length;De++){let $e=ke[De];if($e.type==="JOINT"){let Ve=et($e.id);it(Ve,x,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ee)}for(L=0;L<x.length;L++)for(ee=0;ee<C.length;ee++)if(oe=C[ee],oe.bone.name===x[L].name){w[L]=oe,oe.processed=!0;break}for(L=0;L<C.length;L++)oe=C[L],oe.processed===!1&&(w.push(oe),oe.processed=!0);let Le=[],xe=[];for(L=0;L<w.length;L++)oe=w[L],Le.push(oe.bone),xe.push(oe.boneInverse);return new Ha(Le,xe)}function it(b,x,C){b.traverse(function(w){if(w.isBone===!0){let L;for(let ee=0;ee<x.length;ee++){let oe=x[ee];if(oe.name===w.name){L=oe.boneInverse;break}}L===void 0&&(L=new ft),C.push({bone:w,boneInverse:L,processed:!1})}})}function Ut(b){let x=[],C=b.matrix,w=b.nodes,L=b.type,ee=b.instanceCameras,oe=b.instanceControllers,Le=b.instanceLights,xe=b.instanceGeometries,Ee=b.instanceNodes;for(let ue=0,ke=w.length;ue<ke;ue++)x.push(et(w[ue]));for(let ue=0,ke=ee.length;ue<ke;ue++){let De=Ge(ee[ue]);De!==null&&x.push(De.clone())}for(let ue=0,ke=oe.length;ue<ke;ue++){let De=oe[ue],$e=H(De.id),Ve=Xt($e.id),kt=wn(Ve,De.materials),wt=De.skeletons,vt=$e.skin.joints,yt=nt(wt,vt);for(let ei=0,dn=kt.length;ei<dn;ei++){let fs=kt[ei];fs.isSkinnedMesh&&(fs.bind(yt,$e.skin.bindMatrix),fs.normalizeSkinWeights()),x.push(fs)}}for(let ue=0,ke=Le.length;ue<ke;ue++){let De=ut(Le[ue]);De!==null&&x.push(De.clone())}for(let ue=0,ke=xe.length;ue<ke;ue++){let De=xe[ue],$e=Xt(De.id),Ve=wn($e,De.materials);for(let kt=0,wt=Ve.length;kt<wt;kt++)x.push(Ve[kt])}for(let ue=0,ke=Ee.length;ue<ke;ue++)x.push(et(Ee[ue]).clone());let Fe;if(w.length===0&&x.length===1)Fe=x[0];else{Fe=L==="JOINT"?new Er:new fn;for(let ue=0;ue<x.length;ue++)Fe.add(x[ue])}return Fe.name=L==="JOINT"?b.sid:b.name,Fe.matrix.copy(C),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}let an=new Un({name:qn.DEFAULT_MATERIAL_NAME,color:16711935});function zt(b,x){let C=[];for(let w=0,L=b.length;w<L;w++){let ee=x[b[w]];ee===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",b[w]),C.push(an)):C.push(Xe(ee))}return C}function wn(b,x){let C=[];for(let w in b){let L=b[w],ee=zt(L.materialKeys,x);if(ee.length===0&&(w==="lines"||w==="linestrips"?ee.push(new Ui):ee.push(new Tr)),w==="lines"||w==="linestrips")for(let Ee=0,Fe=ee.length;Ee<Fe;Ee++){let ue=ee[Ee];if(ue.isMeshPhongMaterial===!0||ue.isMeshLambertMaterial===!0){let ke=new Ui;ke.color.copy(ue.color),ke.opacity=ue.opacity,ke.transparent=ue.transparent,ee[Ee]=ke}}let oe=L.data.attributes.skinIndex!==void 0,Le=ee.length===1?ee[0]:ee,xe;switch(w){case"lines":xe=new Va(L.data,Le);break;case"linestrips":xe=new ts(L.data,Le);break;case"triangles":case"polylist":oe?xe=new Ba(L.data,Le):xe=new hn(L.data,Le);break}C.push(xe)}return C}function Rt(b){return Ye.nodes[b]!==void 0}function et(b){return _(Ye.nodes[b],Ut)}function sr(b){let x={name:b.getAttribute("name"),children:[]};Te(b);let C=i(b,"node");for(let w=0;w<C.length;w++)x.children.push(je(C[w]));Ye.visualScenes[b.getAttribute("id")]=x}function Pt(b){let x=new fn;x.name=b.name;let C=b.children;for(let w=0;w<C.length;w++){let L=C[w];x.add(et(L.id))}return x}function Qn(b){return Ye.visualScenes[b]!==void 0}function rr(b){return _(Ye.visualScenes[b],Pt)}function Wi(b){let x=i(b,"instance_visual_scene")[0];return rr(a(x.getAttribute("url")))}function ar(){let b=Ye.clips;if(c(b)===!0){if(c(Ye.animations)===!1){let x=[];for(let C in Ye.animations){let w=M(C);for(let L=0,ee=w.length;L<ee;L++)x.push(w[L])}Xr.push(new Ar("default",-1,x))}}else for(let x in b)Xr.push(se(x))}function jt(b){let x="",C=[b];for(;C.length;){let w=C.shift();w.nodeType===Node.TEXT_NODE?x+=w.textContent:(x+=`
`,C.push.apply(C,w.childNodes))}return x.trim()}if(e.length===0)return{scene:new Gs};let Vn=new DOMParser().parseFromString(e,"application/xml"),Ot=i(Vn,"COLLADA")[0],en=Vn.getElementsByTagName("parsererror")[0];if(en!==void 0){let b=i(en,"div")[0],x;return b?x=b.textContent:x=jt(en),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}let or=Ot.getAttribute("version");console.debug("THREE.ColladaLoader: File version",or);let $r=u(i(Ot,"asset")[0]),lr=new qa(this.manager);lr.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let wo;Dr&&(wo=new Dr(this.manager),wo.setPath(this.resourcePath||t));let qr=new lt,Xr=[],hc={},ud=0,Ye={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ot,"library_animations","animation",g),m(Ot,"library_animation_clips","animation_clip",G),m(Ot,"library_controllers","controller",Z),m(Ot,"library_images","image",X),m(Ot,"library_effects","effect",Ce),m(Ot,"library_materials","material",Be),m(Ot,"library_cameras","camera",ot),m(Ot,"library_lights","light",Ne),m(Ot,"library_geometries","geometry",ye),m(Ot,"library_nodes","node",je),m(Ot,"library_visual_scenes","visual_scene",sr),m(Ot,"library_kinematics_models","kinematics_model",Tt),m(Ot,"library_physics_models","physics_model",Wr),m(Ot,"scene","instance_kinematics_scene",Mo),y(Ye.animations,v),y(Ye.clips,re),y(Ye.controllers,P),y(Ye.images,q),y(Ye.effects,de),y(Ye.materials,Ie),y(Ye.cameras,Qe),y(Ye.lights,Lt),y(Ye.geometries,Mt),y(Ye.visualScenes,Pt),ar(),ie();let jr=Wi(i(Ot,"scene")[0]);return jr.animations=Xr,$r.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),jr.rotation.set(-Math.PI/2,0,0)),jr.scale.multiplyScalar($r.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Xr},kinematics:hc,library:Ye,scene:jr}}};var Kt=["en","fr","ca","es"],rs={en:"English",fr:"Fran\xE7ais",ca:"Catal\xE0",es:"Espa\xF1ol"},qv={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Jn(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of qv[e]||Kt)if(n[t])return n[t];return""}var oo={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Or={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function jn(){return Object.fromEntries(Kt.map(n=>[n,""]))}function rn(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:Kt.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||jn(),e.sub=e.sub||jn(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.intro&&typeof e.intro=="object"&&Object.entries(e.intro).forEach(([s,r])=>{String(r||"").trim()&&(e.sub[s]=r)}),delete e.intro,e.quotes=e.quotes&&typeof e.quotes=="object"?e.quotes:jn();let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(Kt.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(Kt.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=oo[s.layout]?s.layout:"carousel",s.card=Or[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(Kt.map(o=>[o,s[r]||""]))),Kt.forEach(o=>{s[r][o]==null&&(s[r][o]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(Kt.map(o=>[o,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(jv):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function as(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function Yn(n){return String(n||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||"item"}function On(n,e){let t=Yn(n),i=2,s=new Set(e);for(;s.has(t);)t=Yn(n)+"-"+i++;return t}var Xv=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Xl(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!Xv.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function jl(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var jv=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="",Th={Barcelone:"Barcelona",Venise:"Venice",Bruxelles:"Brussels",P\u00E9kin:"Beijing",Pekin:"Beijing",Londres:"London",Lisbonne:"Lisbon",S\u00E9oul:"Seoul",Mexico:"Mexico City",Montr\u00E9al:"Montreal",Beyrouth:"Beirut",Bogot\u00E1:"Bogota",Duba\u00EF:"Dubai",Murano:"Murano",Charjah:"Sharjah",Lausana:"Lausanne"};function Ah(n){let e=[],t=" "+String(n||"")+" ",i=[...Object.keys(Zn),...Object.keys(Th)].sort((r,o)=>o.length-r.length),s=t;for(let r of i){let o=new RegExp("[^\\p{L}]"+r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}])","iu"),a=s.search(o);if(a>=0){let l=Th[r]||r;e.some(c=>c.c===l)||e.push({c:l,at:a}),s=s.replace(o,c=>c[0]+" ".repeat(c.length-1))}}return e.sort((r,o)=>r.at-o.at).map(r=>r.c)}var Zn={Barcelona:[41.39,2.17],Paris:[48.86,2.35],London:[51.51,-.13],Reims:[49.26,4.03],Lausanne:[46.52,6.63],Berlin:[52.52,13.4],Madrid:[40.42,-3.7],Brussels:[50.85,4.35],Amsterdam:[52.37,4.9],Helsinki:[60.17,24.94],Venice:[45.44,12.33],Dakar:[14.72,-17.47],Sharjah:[25.35,55.42],Beijing:[39.9,116.4],Puebla:[19.04,-98.2],"Mexico City":[19.43,-99.13],"New York":[40.71,-74],Montreal:[45.5,-73.57],Beirut:[33.89,35.5],Lisbon:[38.72,-9.14],Aveiro:[40.64,-8.65],"La Rochelle":[46.16,-1.15],Durham:[54.78,-1.58],Lyon:[45.76,4.84],Hebei:[40.77,114.88],Chengdu:[30.57,104.07],Bogota:[4.71,-74.07],Tokyo:[35.68,139.69],Seoul:[37.57,126.98],Dubai:[25.2,55.27],Murano:[45.46,12.35]};function Yv(n){return new Promise((e,t)=>{let i=URL.createObjectURL(n),s=new Image;s.onload=()=>e(s),s.onerror=t,s.src=i})}async function Ch(n,e,t,i=.82){if(/svg|gif/i.test(n.type))return n;let s=await Yv(n),r=Math.min(1,e/s.naturalWidth,t/s.naturalHeight);if(r>=1&&/jpe?g|webp/i.test(n.type)&&n.size<35e4)return n;let o=document.createElement("canvas");o.width=Math.round(s.naturalWidth*r),o.height=Math.round(s.naturalHeight*r),o.getContext("2d").drawImage(s,0,0,o.width,o.height);let a=/png/i.test(n.type)&&Jv(o);return new Promise(l=>o.toBlob(c=>l(c),a?"image/png":"image/jpeg",i))}function Jv(n){let e=n.getContext("2d").getImageData(0,0,Math.min(n.width,64),Math.min(n.height,64)).data;for(let t=3;t<e.length;t+=4)if(e[t]<250)return!0;return!1}function os(n){let e=/\.([a-z0-9]+)$/i.exec(n||"");return e?e[1].toLowerCase():""}function Yl(n){return new Promise((e,t)=>{let i=new FileReader;i.onload=()=>e(String(i.result).split(",")[1]||""),i.onerror=t,i.readAsDataURL(n)})}function lo(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function zi(n){try{let e=await lo();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Ys(n,e){let t=await lo();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function Rh(){try{let n=await lo();return await new Promise(e=>{let t=n.transaction("kv").objectStore("kv").getAllKeys();t.onsuccess=()=>e(t.result||[]),t.onerror=()=>e([])})}catch{return[]}}async function vi(n){try{let e=await lo();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Zv=n=>new Promise(e=>setTimeout(e,n)),Kv=n=>n&&(n.name==="AbortError"||n.name==="NetworkError"||n.name==="InvalidStateError"||n instanceof TypeError||n.status>=500&&n.status<600||n.status===429);async function Lh(n,e=3){for(let t=0;;t++)try{return await n()}catch(i){if(t>=e-1||!Kv(i))throw i;await Zv(600*(t+1))}}function ql(n,e){if(e&&typeof e=="object")try{e.file=n}catch{}return e}var ro=class{constructor(e){this.kind="github",this.cfg=Object.assign({branch:"main",root:""},e),this.api="https://api.github.com"}get repoPath(){return`/repos/${this.cfg.owner}/${this.cfg.repo}`}full(e){let t=(this.cfg.root||"").replace(/^\/+|\/+$/g,"");return t?t+"/"+e:e}async req(e,t={}){return Lh(()=>this.req1(e,t))}async req1(e,t={}){let i=await fetch(this.api+e,{...t,headers:{Accept:"application/vnd.github+json",Authorization:"Bearer "+this.cfg.token,"X-GitHub-Api-Version":"2022-11-28",...t.body?{"Content-Type":"application/json"}:{},...t.headers||{}}});if(!i.ok){let s=i.status+"";try{let o=await i.json();s+=" "+(o.message||"")}catch{}let r=new Error(s);throw r.status=i.status,r}return i.status===204?null:t.raw?i.text():i.json()}async readText(e){return this.req(`${this.repoPath}/contents/${this.full(e)}?ref=${encodeURIComponent(this.cfg.branch)}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}})}async check(){let e=await this.req(this.repoPath);if(!e.permissions||!e.permissions.push)throw Object.assign(new Error("Ce jeton peut lire le d\xE9p\xF4t mais pas y \xE9crire. Donne-lui l'acc\xE8s \xAB Contents : Read and write \xBB."),{status:403});return this.cfg.branch||(this.cfg.branch=e.default_branch),e}async load(){let e=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${encodeURIComponent(this.cfg.branch)}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return rn(JSON.parse(e))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){let r=(await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`)).object.sha,o=await this.req(`${this.repoPath}/git/commits/${r}`),a=null,l=new Map;try{let d=await this.req(`${this.repoPath}/git/trees/${o.tree.sha}?recursive=1`);if(!d.truncated){let T=d.tree.filter(v=>v.type==="blob");a=new Set(T.map(v=>v.path)),l=new Map(T.map(v=>[v.path,v.sha]))}}catch{}this.lastPaths=a;let c=[];this.written=[];let u=[...t,{path:"content/content.json",text:JSON.stringify(e,null,1)+`
`}],h=async d=>{let T=new TextEncoder().encode(d),v=new TextEncoder().encode(`blob ${T.length}\0`),M=new Uint8Array(v.length+T.length);return M.set(v),M.set(T,v.length),[...new Uint8Array(await crypto.subtle.digest("SHA-1",M))].map(D=>D.toString(16).padStart(2,"0")).join("")},f=[];for(let d of u){if(d.delete){(!a||a.has(this.full(d.path)))&&c.push({path:this.full(d.path),mode:"100644",type:"blob",sha:null});continue}d.text!=null&&l.size&&l.get(this.full(d.path))===await h(d.text)||f.push(d)}if(!f.length&&!c.length)return r;let m=0,y=async d=>{if(d.blob&&d.blob.size>90*1024*1024)throw ql(d.path,Object.assign(new Error(`fichier trop lourd pour GitHub (${Math.round(d.blob.size/1048576)} Mo, 90 Mo au plus). R\xE9duis-le ou publie une vid\xE9o YouTube / Vimeo.`),{status:413}));try{let T=d.text!=null?{content:d.text,encoding:"utf-8"}:{content:await Yl(d.blob),encoding:"base64"},v=await this.req(`${this.repoPath}/git/blobs`,{method:"POST",body:JSON.stringify(T)});c.push({path:this.full(d.path),mode:"100644",type:"blob",sha:v.sha}),this.written.push(d.path)}catch(T){throw ql(d.path,T)}};await Promise.all(Array.from({length:Math.min(6,f.length)},async()=>{for(;m<f.length;)await y(f[m++])}));let _=await this.req(`${this.repoPath}/git/trees`,{method:"POST",body:JSON.stringify({base_tree:o.tree.sha,tree:c})}),g=await this.req(`${this.repoPath}/git/commits`,{method:"POST",body:JSON.stringify({message:i,tree:_.sha,parents:[r]})});return await this.req(`${this.repoPath}/git/refs/heads/${encodeURIComponent(this.cfg.branch)}`,{method:"PATCH",body:JSON.stringify({sha:g.sha})}),g.sha}async listFiles(e=["media/","models/"]){let t=await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`),i=await this.req(`${this.repoPath}/git/trees/${t.object.sha}?recursive=1`),s=this.full("");return i.tree.filter(r=>r.type==="blob").map(r=>({path:s&&r.path.startsWith(s)?r.path.slice(s.length):r.path,size:r.size})).filter(r=>e.some(o=>r.path.startsWith(o)))}async lastCommits(e=8){let t=this.full("content/content.json");return this.req(`${this.repoPath}/commits?sha=${encodeURIComponent(this.cfg.branch)}&path=${encodeURIComponent(t)}&per_page=${e}`)}async loadAt(e){let t=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${e}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return rn(JSON.parse(t))}},ao=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await zi("demo:content:v6");if(e)return rn(e);if(window.HC_CONTENT)return rn(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return rn(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await vi("demo:file:"+i.path);continue}await Ys("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Ys("demo:content:v6",e),"demo"}async reset(){await vi("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await zi("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Ur=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Js=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],Qv=["font","size","lh","weight","italic","ls","upper"],Ph=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function ey(n){let e=Ur.find(i=>i.id===n);if(e)return e.css;let t=Ph(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Ur[0].css}function Hi(n,e){let t=Js.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...Qv,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=ey(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function Ih(n){let e=new Map;for(let t of Js){let i=Hi(n,t.id),s=Ph(i.font);if(!s)continue;new Set([+(i.weight||400),400,700,...t.id==="body"?[800]:[]]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function Nh(n){let e=new Set;for(let t of Js){let i=Hi(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function co(n,e,t=!1){let i=Hi(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let a=f=>`${i.italic?"italic ":""}${i.weight||400} ${f}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=a(l);let c=r.measureText(o).width;c>172&&(l=Math.floor(l*172/c),r.font=a(l));let u=r.measureText(o),h=(u.actualBoundingBoxAscent||l*.7)-(u.actualBoundingBoxDescent||0);if(r.fillText(o,120+((u.actualBoundingBoxLeft??u.width/2)-(u.actualBoundingBoxRight??u.width/2))/2,120+h/2-4),t){let f=r.getImageData(0,0,240,240),m=f.data;for(let y=0;y<m.length;y+=4)m[y]=255-m[y],m[y+1]=255-m[y+1],m[y+2]=255-m[y+2];r.putImageData(f,0,0)}return s.toDataURL("image/png")}var ss=class{constructor(e){this.kind="folder",this.dir=e,this.name=e.name,this.urls=new Map}static supported(){return typeof window<"u"&&typeof window.showDirectoryPicker=="function"}async parent(e,t){let i=e.split("/").filter(Boolean),s=i.pop(),r=this.dir;for(let o of i)r=await r.getDirectoryHandle(o,{create:t});return[r,s]}async fileHandle(e,t=!1){let[i,s]=await this.parent(e,t);return i.getFileHandle(s,{create:t})}async readBlob(e){return(await this.fileHandle(e)).getFile()}async readText(e){return(await this.readBlob(e)).text()}async exists(e){try{return await this.fileHandle(e),!0}catch{return!1}}async writeFile(e,t){try{await Lh(async()=>{let s=await(await this.fileHandle(e,!0)).createWritable();try{await s.write(t),await s.close()}catch(r){try{await s.abort()}catch{}throw r}})}catch(i){throw ql(e,i)}}async remove(e){try{let[t,i]=await this.parent(e,!1);await t.removeEntry(i)}catch{}}async permission(e){let t={mode:"readwrite"};return await this.dir.queryPermission(t)==="granted"?!0:e?await this.dir.requestPermission(t)==="granted":!1}async check(){if(!await this.exists("content/content.json"))throw new Error(`le dossier \xAB ${this.name} \xBB ne contient pas content/content.json. Choisis le dossier du site, celui o\xF9 se trouvent index.html et le dossier content.`)}async load(){return rn(JSON.parse(await this.readText("content/content.json")))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){for(let l of t){if(l.delete){await this.remove(l.path),this.urls.delete(l.path);continue}await this.writeFile(l.path,l.blob||l.text)}let s=JSON.stringify(e,null,1)+`
`;await this.writeFile("content/content.json",s);let r=new Date,o=r.toISOString().replace(/[:.]/g,"-"),a=[];try{a=JSON.parse(await this.readText("content/versions/index.json"))}catch{}await this.writeFile(`content/versions/${o}.json`,s),a.unshift({file:o+".json",date:r.toISOString(),message:i});for(let l of a.splice(40))await this.remove("content/versions/"+l.file);return await this.writeFile("content/versions/index.json",JSON.stringify(a,null,1)+`
`),o}async listFiles(e=["media/","models/"]){let t=[],i=async(s,r)=>{for await(let[o,a]of s.entries()){let l=r+o;a.kind==="directory"?await i(a,l+"/"):t.push({path:l,size:(await a.getFile()).size})}};for(let s of e)try{let[r]=await this.parent(s+"x",!1);await i(r,s)}catch{}return t}async lastCommits(e=20){let t=[];try{t=JSON.parse(await this.readText("content/versions/index.json"))}catch{}return t.slice(0,e).map(i=>({sha:i.file,html_url:"",commit:{message:i.message||"Mise \xE0 jour du contenu",author:{name:"dossier \xAB "+this.name+" \xBB",date:i.date}}}))}async loadAt(e){return rn(JSON.parse(await this.readText("content/versions/"+e)))}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t)if(!(this.urls.has(i)||/^(https?:|data:|blob:)/.test(i)))try{this.urls.set(i,URL.createObjectURL(await this.readBlob(i)))}catch{}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):e)}};var xi=window.HC_SITE??"../",Vi=window.HC_ASSETS||null,Hh=window.HC_MODE==="demo",mo=document.getElementById("app"),S={backend:null,cfg:null,content:null,base:"",head:null,staged:new Map,recent:new Map,deletes:new Set,view:"sections",sel:{section:null,post:null,model:null},filter:{section:null,tag:"",q:"",status:""},refreshList:null,draftKey:"draft:demo:v6",busy:!1},ty=new Set(["value","checked","disabled","hidden","multiple","selected","indeterminate","open"]);function p(n,e,...t){let i=document.createElement(n);for(let[s,r]of Object.entries(e||{}))r==null||r===!1||(s==="class"?i.className=r:s==="style"&&typeof r=="object"?Object.assign(i.style,r):s==="html"?i.innerHTML=r:s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):ty.has(s)?i[s]=r:i.setAttribute(s,r===!0?"":r));return t.flat(1/0).forEach(s=>{s==null||s===!1||i.append(s instanceof Node?s:document.createTextNode(String(s)))}),i}function We(n,...e){return n.replaceChildren(...e.flat(1/0).filter(t=>t!=null&&t!==!1)),n}var Vh=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Gh=n=>Vh(n)?"youtube":/vimeo\.com\/(?:video\/)?\d+/.test(n||"")?"vimeo":/\.(mp4|webm|mov)(\?|#|$)/i.test(n||"")?"video":"image",Wh=()=>co(S.content&&S.content.settings.accent||"#ffcc00",S.content&&S.content.settings),mt=n=>Jn(n,"fr")||Jn(n,"en");function $h(n){let e=Hi(n,"sig1");return{fontFamily:e.css,fontWeight:String(e.weight||400),fontStyle:e.italic?"italic":"normal",letterSpacing:e.ls?e.ls+"em":"normal",textTransform:e.upper?"uppercase":"none"}}var ny="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#000"/></svg>');function qh(){let n=ny,e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}function Xh(n,e){if(!document.fonts||n&&n.logo)return;let t=Hi(n,"logo"),i=`${t.italic?"italic ":""}${t.weight||400} 76px ${t.css}`;document.fonts.check(i)||document.fonts.load(i).then(e).catch(()=>{})}function Zs(){let n=S.content&&S.content.settings;if(!n)return;let e=n.logo?Pn(n.logo):Wh(),t=document.querySelector(".top .brand");if(t){t.querySelector("img").src=e;let s=t.querySelector(".name");s.textContent=n.name||"Hand Coded",Object.assign(s.style,$h(n))}let i=document.querySelector(".logo-prev");i&&(i.style.backgroundImage=`url("${e}")`),qh(e),Xh(n,Zs)}var Dh=()=>Math.random().toString(36).slice(2,6),Gi=(n,e,t)=>{let[i]=n.splice(e,1);n.splice(t,0,i)};function jh(n,e,t,i){n.addEventListener("pointerdown",s=>{if(s.button!==0)return;let r=s.target.closest(t);if(!r||!n.contains(r))return;let o=r.closest(e);if(!o)return;let a=()=>[...n.querySelectorAll(":scope > "+e)],l=a().indexOf(o),c=s.clientX,u=s.clientY,h=s.pointerType!=="mouse",f=!1,m=null,y=0,_=0,g=c,d=u,T=0,v=0,M=(()=>{for(let te=n.parentElement;te;te=te.parentElement){let B=getComputedStyle(te).overflowY;if(/(auto|scroll)/.test(B)&&te.scrollHeight>te.clientHeight)return te}return document.scrollingElement})(),D=()=>{f=!0;let te=o.getBoundingClientRect();y=c-te.left,_=u-te.top,m=o.cloneNode(!0),m.classList.add("sort-ghost"),Object.assign(m.style,{width:te.width+"px",height:te.height+"px",left:"0",top:"0"}),document.body.appendChild(m),o.classList.add("sort-hole"),n.classList.add("sorting");try{r.setPointerCapture(s.pointerId)}catch{}navigator.vibrate&&h&&navigator.vibrate(12),U(),v=requestAnimationFrame(O)},U=()=>{m&&(m.style.transform=`translate(${g-y}px, ${d-_}px) rotate(1.5deg)`)},O=()=>{let te=M===document.scrollingElement?{top:0,bottom:innerHeight}:M.getBoundingClientRect(),B=d<te.top+70?-1:d>te.bottom-70?1:0;B&&(M.scrollTop+=B*12,k()),v=requestAnimationFrame(O)},k=()=>{let te=document.elementFromPoint(g,d),B=te&&te.closest(e);if(!B||B===o||B.parentElement!==n)return;let Y=a(),G=Y.indexOf(o),re=Y.indexOf(B);n.insertBefore(o,G<re?B.nextSibling:B)},E=te=>{if(g=te.clientX,d=te.clientY,!f){let B=Math.hypot(g-c,d-u)>(h?10:5);if(h){B&&ne();return}if(B)D();else return}te.preventDefault(),U(),k()},R=te=>{f&&te.preventDefault()},W=te=>{let B=f;if(ne(),B&&te.type==="pointerup"){let Y=a().indexOf(o);Y!==l&&Y>-1&&i(l,Y)}},ne=()=>{if(clearTimeout(T),cancelAnimationFrame(v),removeEventListener("pointermove",E),removeEventListener("pointerup",W),removeEventListener("pointercancel",W),r.removeEventListener("touchmove",R),m&&m.remove(),o.classList.remove("sort-hole"),n.classList.remove("sorting"),f){let te=B=>{B.stopPropagation(),B.preventDefault()};addEventListener("click",te,{capture:!0,once:!0}),setTimeout(()=>removeEventListener("click",te,!0),0)}f=!1};addEventListener("pointermove",E,{passive:!1}),addEventListener("pointerup",W),addEventListener("pointercancel",W),r.addEventListener("touchmove",R,{passive:!1}),h?T=setTimeout(D,280):s.preventDefault()})}var Ql=n=>n==null?"":n<1024?n+" o":n<1048576?Math.round(n/1024)+" Ko":(n/1048576).toFixed(1)+" Mo",Yh=n=>String(n||"").split(/[\s&/]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")||"\xB7";function Ue(n,e,t="",i={}){return p("button",{type:"button",class:"btn "+t,onclick:e,...i},n)}var Jh=p("div",{class:"toasts",role:"status","aria-live":"polite"});document.body.appendChild(Jh);function st(n,e="ok",t=4200){let i=p("div",{class:"toast "+e},n);Jh.appendChild(i),setTimeout(()=>i.remove(),t)}function Vr(n,e,t){return new Promise(i=>{let s=document.activeElement,r=h=>{c.remove(),document.removeEventListener("keydown",o),s&&s.focus&&s.focus(),i(h)},o=h=>{h.key==="Escape"&&r(null)},a=p("div",{class:"mf"},t.map(h=>Ue(h.label,()=>r(typeof h.value=="function"?h.value():h.value),h.cls||""))),l=p("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":n},p("h2",null,n),p("div",{class:"mb"},e),a),c=p("div",{class:"modal-bg",onmousedown:h=>{h.target===c&&r(null)}},l);document.body.appendChild(c),document.addEventListener("keydown",o);let u=l.querySelector("input, textarea, select")||a.lastChild;u&&u.focus()})}var Hn=(n,e,t="Confirmer",i="dark")=>Vr(n,p("p",null,e),[{label:"Annuler",value:!1,cls:"ghost"},{label:t,value:!0,cls:i}]);async function ec(n,e,t="",i="OK"){let s=p("input",{type:"text",value:t});return s.addEventListener("keydown",r=>{r.key==="Enter"&&r.target.closest(".modal").querySelector(".mf .btn:last-child").click()}),Vr(n,p("label",{class:"f"},p("span",null,e),s),[{label:"Annuler",value:null,cls:"ghost"},{label:i,value:()=>s.value,cls:"dark"}])}function Pn(n){if(!n)return"";if(/^(https?:|data:|blob:)/.test(n))return n;if(Vi&&Vi[n]&&Vi[n].startsWith("data:"))return Vi[n];let e=S.staged.get(n)||S.recent.get(n);return e?e.url:S.backend&&(S.backend.kind==="demo"||S.backend.kind==="folder")?S.backend.url(n):xi+n}function gn(n,e){let t=S.staged.get(n);t&&URL.revokeObjectURL(t.url),S.staged.set(n,{blob:e,url:URL.createObjectURL(e)}),S.deletes.delete(n),iy(n)&&sy(e).then(i=>{if(!i||S.staged.get(n)?.blob!==e)return;let s=S.staged.get(n+_i);s&&URL.revokeObjectURL(s.url),S.staged.set(n+_i,{blob:i,url:URL.createObjectURL(i)})}).catch(()=>{})}var _i=".t.webp",iy=n=>/^media\/.+\.(jpe?g|png|webp)$/i.test(n)&&!n.endsWith(_i),Zh=(n,e)=>e.has(n)||n.endsWith(_i)&&e.has(n.slice(0,-_i.length));async function sy(n){if(!window.createImageBitmap)return null;let e=await createImageBitmap(n),t=Math.min(1,560/Math.min(e.width,e.height),1100/Math.max(e.width,e.height)),i=document.createElement("canvas");i.width=Math.max(1,Math.round(e.width*t)),i.height=Math.max(1,Math.round(e.height*t)),i.getContext("2d").drawImage(e,0,0,i.width,i.height),e.close&&e.close();let s=await new Promise(r=>i.toBlob(r,"image/webp",.76));return s&&s.type==="image/webp"?s:null}function us(n=S.content){let e=new Set;n.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&e.add(s)),i.media.forEach(s=>s&&s.src&&e.add(s.src)),(i.logos||[]).forEach(s=>e.add(s))}),n.models.forEach(i=>{i.file&&(e.add(i.file),(i.textures||[]).forEach(s=>e.add(i.file.replace(/[^/]+$/,"")+s)))}),n.settings.logo&&e.add(n.settings.logo),n.settings.homeVideo&&n.settings.homeVideo.src&&e.add(n.settings.homeVideo.src),n.settings.showreel&&e.add(n.settings.showreel),n.settings.showreelMobile&&e.add(n.settings.showreelMobile);let t=n.settings.home&&n.settings.home.story;return t&&Array.isArray(t.images)&&t.images.forEach(i=>i&&e.add(i)),n.settings.seo&&n.settings.seo.image&&e.add(n.settings.seo.image),new Set([...e].filter(i=>!/^(https?:|data:|blob:)/.test(i)))}var ry={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif","image/svg+xml":"svg"};async function Kn(n,e,t){if(/^video\/(mp4|webm)$/.test(n.type)||/\.(mp4|webm)$/i.test(n.name)){if(t!=="media")throw new Error("Ici, seules les images sont accept\xE9es.");if(n.size>95e6)throw new Error(`${n.name} p\xE8se ${Ql(n.size)} : GitHub refuse les fichiers de plus de 100 Mo. R\xE9duis la vid\xE9o (720p, H.264) avant de l'envoyer.`);return n.size>4e7&&st(`${n.name} p\xE8se ${Ql(n.size)}. Elle passera, mais la page sera lente \xE0 charger : vise moins de 20 Mo.`,"ok",7e3),{path:`${e}/${Yn(n.name.replace(/\.[^.]+$/,""))}-${Dh()}.${os(n.name)||"mp4"}`,blob:n}}if(!/^image\//.test(n.type))throw new Error(`${n.name} : format non reconnu (images JPG, PNG, WebP, GIF, SVG ou vid\xE9os MP4, WebM).`);let s=t==="media"?[3200,1e3]:t==="logo"?[600,600]:[1400,1400],r=await Ch(n,s[0],s[1]),o=ry[r.type]||os(n.name)||"jpg";return{path:`${e}/${Yn(n.name.replace(/\.[^.]+$/,""))}-${Dh()}.${o}`,blob:r}}function Fn(n,e,t){let i=p("input",{type:"file",accept:n,multiple:e});i.addEventListener("change",()=>t([...i.files])),i.click()}function ho(n,e){n.addEventListener("dragover",t=>{[...t.dataTransfer.types].includes("Files")&&(t.preventDefault(),n.classList.add("over"))}),n.addEventListener("dragleave",()=>n.classList.remove("over")),n.addEventListener("drop",t=>{t.dataTransfer.files.length&&(t.preventDefault(),n.classList.remove("over"),e([...t.dataTransfer.files]))})}var Uh=null,Oh=null;function _e(n={}){n.after&&n.after(),S.onChange&&S.onChange(),clearTimeout(Uh),Uh=setTimeout(sc,600),clearTimeout(Oh),Oh=setTimeout(ls,200),n.list&&S.refreshList&&S.refreshList(),n.nav&&yo()}function Kh(){let n=us();return[...S.staged.keys()].filter(e=>n.has(e))}function er(){return JSON.stringify(S.content)!==S.base||S.deletes.size>0||Kh().length>0}async function sc(){try{if(!er()){await vi(S.draftKey);return}let n=us();await Ys(S.draftKey,{content:S.content,base:S.base,head:S.head,at:Date.now(),deletes:[...S.deletes],staged:[...S.staged].filter(([e])=>Zh(e,n)).map(([e,t])=>({path:e,blob:t.blob}))})}catch(n){console.warn("brouillon non sauvegard\xE9",n)}}var Ln=n=>JSON.stringify(n),fo=n=>!!n&&typeof n=="object"&&!Array.isArray(n),kh=n=>Array.isArray(n)&&n.length>0&&n.every(e=>fo(e)&&typeof e.id=="string");function Fr(n,e,t){if(Ln(e)===Ln(n))return t;if(Ln(t)===Ln(n)||Ln(t)===Ln(e))return e;if(fo(n)&&fo(e)&&fo(t)){let i={};for(let s of new Set([...Object.keys(n),...Object.keys(e),...Object.keys(t)])){let r=Fr(n[s],e[s],t[s]);r!==void 0&&(i[s]=r)}return i}if(Array.isArray(e)&&Array.isArray(t)&&(kh(e)||kh(t))){let i=Array.isArray(n)?n:[],s=new Map(i.map(u=>[u.id,u])),r=new Map(e.map(u=>[u.id,u])),o=new Map(t.map(u=>[u.id,u])),a=Ln(e.map(u=>u.id))!==Ln(i.map(u=>u.id))?e.map(u=>u.id):t.map(u=>u.id),l=[];for(let u of[...a,...t.map(h=>h.id),...e.map(h=>h.id)])l.includes(u)||l.push(u);let c=[];for(let u of l){let h=s.get(u),f=r.get(u),m=o.get(u);if(h&&!f){m&&Ln(m)!==Ln(h)&&c.push(m);continue}if(h&&!m){f&&Ln(f)!==Ln(h)&&c.push(f);continue}c.push(h?Fr(h,f,m):f&&m?Fr({},f,m):f||m)}return c}return e}async function cs(n){try{n&&n.content&&await Ys("draft-backup:"+S.draftKey,{content:n.content,at:n.at||Date.now()})}catch{}}async function ay(){let n=await zi(S.draftKey);if(!(!n||!n.content)){if(n.base!==S.base){if(!await Vr("Un brouillon attend",p("div",null,p("p",null,`Tu as un brouillon non publi\xE9 du ${new Date(n.at).toLocaleString("fr-FR")}.`),p("p",null,"Le site a \xE9t\xE9 publi\xE9 depuis (peut-\xEAtre depuis un autre ordinateur). Si tu reprends ce brouillon, seuls tes changements seront ajout\xE9s \xE0 la version en ligne : ce qui a \xE9t\xE9 publi\xE9 entre-temps est gard\xE9.")),[{label:"Partir de la version en ligne",value:!1,cls:"ghost"},{label:"Reprendre mes changements",value:!0,cls:"dark"}])){await cs(n),await vi(S.draftKey);return}await cs(n);let t=null;try{t=JSON.parse(n.base)}catch{}S.content=rn(t?Fr(t,n.content,JSON.parse(S.base)):n.content),(n.staged||[]).forEach(i=>gn(i.path,i.blob)),(n.deletes||[]).forEach(i=>S.deletes.add(i)),st("Tes changements sont repris sur la version en ligne. Une copie du brouillon reste dans Historique \u203A Sauvegardes.");return}S.content=rn(n.content),(n.staged||[]).forEach(e=>gn(e.path,e.blob)),(n.deletes||[]).forEach(e=>S.deletes.add(e)),st("Brouillon non publi\xE9 retrouv\xE9 : rien n\u2019est perdu.")}}function Qh(){let n=JSON.parse(S.base),e=S.content,t=[],i=(o,a,l,c,u)=>{let h=u?"\xE9e":"\xE9",f=new Map(o.map(v=>[v[l],JSON.stringify(v)])),m=new Map(a.map(v=>[v[l],JSON.stringify(v)])),y=[...m.keys()].filter(v=>!f.has(v)).length,_=[...f.keys()].filter(v=>!m.has(v)).length,g=[...m.keys()].filter(v=>f.has(v)&&f.get(v)!==m.get(v)).length,d=v=>v>1?c+"s":c,T=v=>v>1?h+"s":h;y&&t.push(`${y} ${d(y)} ajout${T(y)}`),g&&t.push(`${g} ${d(g)} modifi${T(g)}`),_&&t.push(`${_} ${d(_)} supprim${T(_)}`)};i(n.sections,e.sections,"id","section",!0),i(n.posts,e.posts,"id","contenu"),i(n.models,e.models,"id","mod\xE8le"),JSON.stringify(n.settings)!==JSON.stringify(e.settings)&&t.push("r\xE9glages modifi\xE9s");let s=o=>o.sections.map(a=>a.id);JSON.stringify(s(n))!==JSON.stringify(s(e))&&JSON.stringify(s(n).slice().sort())===JSON.stringify(s(e).slice().sort())&&t.push("ordre des sections");let r=Kh().length;return r&&t.push(`${r} fichier${r>1?"s":""} \xE0 envoyer`),S.deletes.size&&t.push(`${S.deletes.size} fichier${S.deletes.size>1?"s":""} \xE0 supprimer`),t}function oy(){let n=us(JSON.parse(S.base)),e=us(),t=new Set(JSON.parse(S.base).models.filter(i=>i.builtin).flatMap(i=>[i.file,...(i.textures||[]).map(s=>i.file.replace(/[^/]+$/,"")+s)]));return[...n].filter(i=>!e.has(i)&&!t.has(i)&&/^(media|models)\//.test(i)&&!/^media\/logos\//.test(i)&&!S.staged.has(i))}async function rc(){if(S.busy)return;if(!er()){st("Rien de nouveau \xE0 publier.");return}let n=Qh(),e=oy(),t=p("input",{type:"text",value:n.length?n.slice(0,3).join(", ").replace(/^./,o=>o.toUpperCase()):"Mise \xE0 jour du contenu"}),i=p("input",{type:"checkbox",checked:!0}),s=p("div",null,p("ul",null,n.map(o=>p("li",null,o))),p("label",{class:"f"},p("span",null,"Note pour l\u2019historique"),t),e.length?p("label",{class:"switch"},i,`Supprimer aussi ${e.length} ancien${e.length>1?"s":""} fichier${e.length>1?"s":""} qui ne sert plus`):null,p("p",{class:"hint"},S.backend.kind==="github"?"Le site se met \xE0 jour 1 \xE0 2 minutes apr\xE8s la publication.":S.backend.kind==="folder"?`Les fichiers sont \xE9crits dans le dossier \xAB ${S.backend.name} \xBB de ton ordinateur.`:"Mode d\xE9mo : la publication reste dans ce navigateur, rien n\u2019est \xE9crit dans les fichiers du site."));if(await Vr("Publier sur le site",s,[{label:"Annuler",value:!1,cls:"ghost"},{label:"Publier",value:!0,cls:"primary"}])){S.busy=!0,ls("Publication en cours\u2026");try{if(S.backend.kind==="folder"&&!await S.backend.permission(!0))throw Object.assign(new Error("acc\xE8s au dossier refus\xE9"),{name:"NotAllowedError"});if(S.backend.kind==="github"){let h=await cy();if(S.head&&h!==S.head){let f=await S.backend.loadAt(h);if(JSON.stringify(f)!==S.base){if(!await Hn("Le site a chang\xE9 entre-temps","Quelqu\u2019un (ou toi, depuis un autre onglet) a publi\xE9 depuis que tu as ouvert le back-office. Tes changements vont \xEAtre ajout\xE9s \xE0 la version en ligne : ce qui a \xE9t\xE9 publi\xE9 entre-temps est gard\xE9.","Fusionner et publier")){S.busy=!1,ls();return}S.content=rn(Fr(JSON.parse(S.base),S.content,f))}}}S.content.posts.forEach(h=>{if(!/^nouveau-contenu(-\d+)?$/.test(h.id)||h.published===!1)return;let f=String(h.title&&(h.title.fr||h.title.en||Object.values(h.title).find(Boolean))||"").trim();if(!f)return;let m=On(Yn(f),S.content.posts.filter(y=>y!==h).map(y=>y.id));!m||m===h.id||(S.content.posts.forEach(y=>{y.team=(y.team||[]).map(_=>_===h.id?m:_),y.skills=(y.skills||[]).map(_=>_===h.id?m:_)}),S.sel&&S.sel.post===h.id&&(S.sel.post=m),h.id=m)});let o=us(),a=[...S.staged].filter(([h])=>Zh(h,o)).map(([h,f])=>({path:h,blob:f.blob}));if((S.backend.kind==="github"||S.backend.kind==="folder")&&(a.push({path:"content/content.js",text:"window.HC_CONTENT = "+JSON.stringify(S.content)+`;
`}),JSON.stringify(JSON.parse(S.base).models)!==JSON.stringify(S.content.models)&&(ls("Pr\xE9paration des mod\xE8les 3D\u2026"),a.push({path:"models/models.js",text:await ly()}))),S.backend.kind==="github"||S.backend.kind==="folder")try{ls("R\xE9f\xE9rencement\u2026");let h=new Map((JSON.parse(S.base).posts||[]).map(v=>[v.id,JSON.stringify({...v,updated:void 0})])),f=new Date().toISOString().slice(0,10);S.content.posts.forEach(v=>{h.get(v.id)!==JSON.stringify({...v,updated:void 0})&&(v.updated=f)});let m=S.content.settings.seo=S.content.settings.seo||{};m.indexnow||(m.indexnow=[...crypto.getRandomValues(new Uint8Array(16))].map(v=>v.toString(16).padStart(2,"0")).join(""));let y=bh(S.content,{base:yi()}),_=await S.backend.readText("index.html"),g=Mh(_,y);g!==_&&a.push({path:"index.html",text:g}),a.push({path:"llms.txt",text:y.llms},{path:"sitemap.xml",text:y.sitemap},{path:m.indexnow+".txt",text:m.indexnow});let d=Eh(g,S.content,{base:yi()}),T=new Set(d.map(v=>v.path));if(d.forEach(v=>a.push({...v,page:!0})),S.backend.listFiles){let v=S.content.settings.langs&&S.content.settings.langs.length?S.content.settings.langs:["en","fr","ca","es"];(await S.backend.listFiles(v.map(D=>D+"/")).catch(()=>[])).filter(D=>/(^|\/)index\.html$/.test(D.path)&&!T.has(D.path)).forEach(D=>S.deletes.add(D.path))}}catch(h){console.warn("r\xE9f\xE9rencement non mis \xE0 jour",h)}let l=new Set([...S.deletes].filter(h=>!o.has(h)));e.length&&i.checked&&e.forEach(h=>l.add(h));let c=await S.backend.publish(S.content,[...a,...[...l].map(h=>({path:h,delete:!0}))],t.value.trim()||"Mise \xE0 jour du contenu");by(S.backend.written||[]),S.base=JSON.stringify(S.content),S.backend.kind==="github"&&(S.head=c),a.forEach(h=>{let f=S.staged.get(h.path);f&&S.recent.set(h.path,f),S.staged.delete(h.path)}),S.staged.forEach(h=>URL.revokeObjectURL(h.url)),S.staged.clear(),S.deletes.clear(),S.files=null,await vi(S.draftKey);let u=S.backend.kind==="github"&&S.backend.lastPaths?[...us()].filter(h=>!S.backend.lastPaths.has(S.backend.full(h))&&!a.some(f=>f.path===h)):[];u.length?st(`Publi\xE9, mais ${u.length>1?u.length+" images utilis\xE9es sont introuvables":"une image utilis\xE9e est introuvable"} dans le d\xE9p\xF4t : ${u.map(h=>h.split("/").slice(-2).join("/")).join(", ")}. Remets-${u.length>1?"les":"la"} depuis la fiche concern\xE9e.`,"bad",15e3):st(S.backend.kind==="github"?"Publi\xE9. Le site sera \xE0 jour dans une minute ou deux.":S.backend.kind==="folder"?`Enregistr\xE9 dans le dossier \xAB ${S.backend.name} \xBB.`:"Publi\xE9 dans la d\xE9mo (dans ce navigateur seulement)."),S.backend.kind==="folder"&&await S.backend.prepare(S.content)}catch(o){console.error(o),st("La publication a \xE9chou\xE9 : "+Ks(o),"bad",9e3)}finally{S.busy=!1,ls(),yo(),(S.view==="history"||S.view==="media")&&Bt()}}}async function ly(){let n={},e={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",tga:"image/x-tga",webp:"image/webp"};for(let t of S.content.models){let i=t.file.replace(/[^/]+$/,"");for(let s of[t.file,...(t.textures||[]).map(r=>i+r)]){let r=S.staged.has(s)?S.staged.get(s).blob:null;if(!r&&S.backend.readBlob&&(r=await S.backend.readBlob(s).catch(()=>null)),!r){let o=await fetch(Pn(s));if(!o.ok)throw new Error(s+" : "+o.status);r=await o.blob()}n[s]=/\.dae$/i.test(s)?await r.text():`data:${e[os(s)]||"application/octet-stream"};base64,${await Yl(r)}`}}return"window.HC_ASSETS = "+JSON.stringify(n)+`;
`}async function cy(){return(await S.backend.req(`${S.backend.repoPath}/git/ref/heads/${encodeURIComponent(S.backend.cfg.branch)}`)).object.sha}async function uy(){er()&&await Hn("Annuler les modifications","Tout ce qui n\u2019a pas \xE9t\xE9 publi\xE9 sera perdu : textes, images ajout\xE9es, suppressions.","Tout annuler","danger")&&(await cs({content:S.content,at:Date.now()}),S.content=rn(JSON.parse(S.base)),S.staged.forEach(n=>URL.revokeObjectURL(n.url)),S.staged.clear(),S.deletes.clear(),await vi(S.draftKey),zr(),st("Retour \xE0 la version publi\xE9e. Une copie du brouillon reste dans Historique \u203A Sauvegardes."))}function Ks(n){let e=n&&n.file?` (fichier ${n.file})`:"";if(n&&n.name==="AbortError")return S.backend&&S.backend.kind==="folder"?"le navigateur a interrompu l\u2019\xE9criture dans le dossier"+e+". Ferme les autres onglets du back-office ou du site ouverts sur ce dossier, et si le dossier est synchronis\xE9 (iCloud, Dropbox, Drive), attends la fin de la synchronisation, puis republie : rien n\u2019est perdu.":"l\u2019envoi a \xE9t\xE9 interrompu"+e+" (connexion coup\xE9e, ou ordinateur en veille). Republie : rien n\u2019est perdu.";if(n&&n.name==="NotAllowedError")return"le navigateur n\u2019a plus le droit d\u2019\xE9crire dans le dossier"+e+". Republie et accepte la demande d\u2019acc\xE8s.";if(n&&n.status===413)return n.file+" : "+n.message;let t=n&&n.status;return t===401?"jeton refus\xE9 (expir\xE9, r\xE9voqu\xE9 ou mal copi\xE9).":t===403?n.message.includes("\xE9crire")?n.message:"acc\xE8s refus\xE9. V\xE9rifie que le jeton a \xAB Contents : Read and write \xBB sur ce d\xE9p\xF4t.":t===404?"d\xE9p\xF4t ou branche introuvable, ou le jeton n\u2019a pas acc\xE8s \xE0 ce d\xE9p\xF4t.":t===409?"conflit sur la branche, recharge la page et r\xE9essaie.":t===422?"GitHub a refus\xE9 un fichier (trop lourd ?). "+(n.message||""):n instanceof TypeError?"pas de connexion \xE0 GitHub (r\xE9seau ?).":(n&&n.message?n.message:String(n))+e}var uo=new Map;async function Fh(n){if(Vi&&Vi[n]&&!Vi[n].startsWith("data:"))return Vi[n];if(!uo.has(n)||S.staged.has(n)){let e=fetch(Pn(n)).then(t=>{if(!t.ok)throw new Error(n+" : "+t.status);return t.text()});if(S.staged.has(n))return e;uo.set(n,e),e.catch(()=>uo.delete(n))}return uo.get(n)}var ed=new Cr;ed.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Pn(n.replace(/^\.\//,"").replace(/\/\.\//g,"/")));function tc(n,e){let i=new so(ed).parse(n,e.file.slice(0,e.file.lastIndexOf("/")+1)).scene,s=new fn;s.add(i);let r=0;if(i.traverse(l=>{if(!l.isMesh)return;r++;let c=u=>{let h=u.map||u.emissiveMap||null;return h?new Un({map:h}):e.untextured==="white"?new ns({color:15921906}):e.untextured==="black"?new ns({color:2236962}):new Un({color:15841280,wireframe:!0})};l.material=Array.isArray(l.material)?l.material.map(c):c(l.material)}),!r)throw new Error("aucune forme 3D dans ce fichier");let o=hy(e);if(e.scaleMode==="fit"){s.updateMatrixWorld(!0);let l=new mn().setFromObject(s),c=l.getSize(new V);s.scale.setScalar((e.height||420)/Math.max(c.y,1e-6)*o),s.updateMatrixWorld(!0);let u=new mn().setFromObject(s),h=u.getCenter(new V);s.position.set(-h.x,-u.min.y,-h.z)}else{i.scale.setScalar(100),s.updateMatrixWorld(!0);let l=new mn().setFromObject(s);l.max.y-l.min.y>800&&s.scale.setScalar(800/(l.max.y-l.min.y)),s.scale.multiplyScalar(o)}let a=new fn;return a.rotation.y=(e.rotationY||0)*Math.PI/180,a.add(s),a}var hy=n=>Math.max(.05,Math.min(5,(+n.scale||100)/100)),nc=(()=>{let n=null,e=new Gs;e.add(new Xa(16777215,14211288,2.2));let t=new qs(16777215,1.2);t.position.set(300,800,500),e.add(t);let i=new Vt(30,4/3,1,2e4),s=new fn;e.add(s);let r=new fn;r.visible=!1,s.add(r);{let v=new wr(256,169),M=new Un({color:1710618,transparent:!0,opacity:.16,side:xn,depthWrite:!1});for(let U=0;U<8;U++){let O=U/8*Math.PI*2,k=new hn(v,M);k.position.set(500*Math.sin(O),500+(U%2?60:-60),500*Math.cos(O)),k.rotation.y=O,r.add(k)}let D=[];for(let U=0;U<=64;U++){let O=U/64*Math.PI*2;D.push(new V(500*Math.sin(O),0,500*Math.cos(O)))}r.add(new ts(new Cn().setFromPoints(D),new Ui({color:13421772})))}let o=!1,a=null,l=null,c=!1,u=0,h=.004,f=new Map,m=Promise.resolve();function y(){if(n)return n;n=new Sr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(16777215,0);let v=n.domElement;return v.addEventListener("pointerdown",M=>{c=!0,u=M.clientX,v.setPointerCapture(M.pointerId)}),v.addEventListener("pointermove",M=>{c&&(h=(M.clientX-u)*.01,s.rotation.y+=h,u=M.clientX)}),v.addEventListener("pointerup",()=>{c=!1}),requestAnimationFrame(T),n}function _(v){let M=new mn().setFromObject(v),D=M.getSize(new V),U=M.getCenter(new V),O=Math.max(D.y*.8,Math.min(D.x,D.z)*.55,Math.max(D.x,D.z)*.38)||100,k=O/Math.tan(15*Math.PI/180);i.position.set(0,U.y+O*.55,k),i.near=k/50,i.far=k*10,i.lookAt(0,U.y,0),i.updateProjectionMatrix()}function g(){i.position.set(0,300+1900*.28,1900),i.near=10,i.far=2e4,i.lookAt(0,330,0),i.updateProjectionMatrix()}function d(v){[...s.children].forEach(M=>{M!==r&&s.remove(M)}),s.rotation.y=.6,r.visible=!!(v&&o),v&&(s.add(v),o?g():(r.visible=!1,_(v))),a=v}function T(){if(requestAnimationFrame(T),!l||!l.isConnected||!a)return;let v=l.clientWidth,M=l.clientHeight;if(!v||!M)return;let D=n.domElement;D.parentNode!==l&&l.prepend(D),(D.width!==Math.round(v*n.getPixelRatio())||D.height!==Math.round(M*n.getPixelRatio()))&&(n.setSize(v,M,!1),i.aspect=v/M,i.updateProjectionMatrix()),c||(s.rotation.y+=h,h+=(.004-h)*.03),n.render(e,i)}return{async show(v,M,D,U=!1){y(),l=v,o=U,d(null),D&&(D.textContent="Chargement du mod\xE8le\u2026");try{let O=tc(await Fh(M.file),M);if(l!==v)return;d(O);let k=new mn().setFromObject(O).getSize(new V);D&&(D.textContent=(U?`Dans la sc\xE8ne : ${Math.round(k.x)} \xD7 ${Math.round(k.y)} \xD7 ${Math.round(k.z)} (les cartes grises sont celles du carrousel). `:"")+"Glisse pour tourner autour.")}catch(O){D&&(D.textContent="Impossible d\u2019afficher ce mod\xE8le : "+O.message)}},async snapshot(v){let M=v.file+JSON.stringify([v.scaleMode,v.height,v.rotationY,v.untextured,v.scale])+(S.staged.has(v.file)?"s":"");if(f.has(M))return f.get(M);let D=m.then(async()=>{y();let U=tc(await Fh(v.file),v),O=a,k=s.rotation.y,E=o;o=!1,d(U),s.rotation.y=.6,n.setSize(320,200,!1),i.aspect=1.6,i.updateProjectionMatrix(),await new Promise(W=>setTimeout(W,400)),n.render(e,i);let R=n.domElement.toDataURL("image/png");return o=E,d(O),s.rotation.y=k,n.setSize(1,1,!1),R});return m=D.catch(()=>{}),f.set(M,D),D.catch(()=>f.delete(M)),D}}})();function dy(n){let e=p("div",{class:"pic"},p("span",{style:{color:"#aaa",fontSize:"12px"}},"\u2026"));return nc.snapshot(n).then(t=>We(e,p("img",{src:t,alt:""}))).catch(()=>We(e,p("span",{style:{color:"#c0362c",fontSize:"12px",padding:"8px"}},"aper\xE7u indisponible"))),e}function td(n){let e='<path d="M80 62 l9 6 l-3 11 h-12 l-3 -11z" fill="#d8d8d8" stroke="#bdbdbd" stroke-width=".6"/>',t=(o,a,l,c,u=1,h="#151515")=>`<rect x="${(o-l/2).toFixed(1)}" y="${(a-c/2).toFixed(1)}" width="${l.toFixed(1)}" height="${c.toFixed(1)}" fill="${h}" opacity="${u.toFixed(2)}"/>`,i=(o,a,l,c)=>`<line x1="${o.toFixed(1)}" y1="${a.toFixed(1)}" x2="${l.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#cfcfcf" stroke-width=".7"/>`,s="",r=(o,a,l,c,u,h,f=0)=>{let m=[];for(let y=0;y<o;y++){let _=y/o*Math.PI*2,g=(Math.cos(_)+1)/2;m.push({x:80+a*Math.sin(_),y:c+l*Math.cos(_)-y*f,d:g})}m.sort((y,_)=>y.d-_.d).forEach(y=>{h&&(s+=i(y.x,y.y,80,70)),s+=t(y.x,y.y,u[0]*(.6+.4*y.d),u[1]*(.6+.4*y.d),.3+.7*y.d)})};switch(n){case"carousel":s+=e,r(8,60,13,40,[22,14],!0);break;case"arc":for(let o=0;o<7;o++){let a=Math.PI*(o+1)/8;s+=t(80-62*Math.cos(a),74-58*Math.sin(a),16,11,1)}s+=e;break;case"fan":s+=e;for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-48*Math.cos(a),60-40*Math.sin(a),80,66)+t(80-48*Math.cos(a),60-40*Math.sin(a),24,7,.35)}for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-64*Math.cos(a),66-50*Math.sin(a),80,66)+t(80-64*Math.cos(a),66-50*Math.sin(a),30,8,1,"#333")}break;case"map":s+='<ellipse cx="80" cy="78" rx="70" ry="13" fill="#ececec"/><path d="M28 77 q8 -6 18 -2 t20 0 q6 -4 12 1 M92 75 q10 -5 22 -1 t18 3" stroke="#cfcfcf" stroke-width="3" fill="none" stroke-linecap="round"/>',[[48,76,46,30],[100,75,104,22],[124,79,132,42]].forEach(([o,a,l,c])=>{s+=i(o,a,l,c)+`<circle cx="${o}" cy="${a}" r="2" fill="#f1b800"/>`+t(l,c,15,14,1,"#fff").replace("/>",' stroke="#151515" stroke-width=".8"/>')+t(l-20,c,18,14,1)});break;case"spiral":s+=e;{let o=[];for(let a=0;a<9;a++){let l=a*.95,c=(Math.cos(l)+1)/2;o.push({x:80+48*Math.sin(l),y:66-a*6.6,d:c})}o.sort((a,l)=>a.d-l.d).forEach(a=>{s+=i(a.x,a.y,80,a.y)+t(a.x,a.y,18*(.6+.4*a.d),12*(.6+.4*a.d),.3+.7*a.d)})}break;case"wall":for(let o=0;o<3;o++)for(let a=0;a<5;a++)s+=t(32+a*24,16+o*17,20,13,.9);s+=e;break;default:s+=e}return`<svg viewBox="0 0 160 100" aria-hidden="true">${s}</svg>`}function fy(n){let e="var(--accent)";switch(n){case"image":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="32" y="18" width="96" height="63" fill="#111"/><rect x="40" y="26" width="8" height="1.5" fill="${e}"/><rect x="40" y="32" width="54" height="5" fill="#fff"/><rect x="40" y="41" width="36" height="3" fill="#777"/><rect x="40" y="72" width="34" height="2.5" fill="${e}"/></svg>`;case"portrait":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="55" y="25" width="50" height="50" fill="#1b1b1b"/><text x="80" y="57" text-anchor="middle" font-family="Georgia" font-size="20" fill="#fff">MM</text><rect x="75" y="64" width="10" height="1.4" fill="${e}"/></svg>`;case"text":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="20" y="36" width="120" height="30" fill="#333"/><rect x="27" y="41" width="7" height="1.4" fill="${e}"/><rect x="27" y="46" width="80" height="5" fill="#fff"/><rect x="27" y="54" width="54" height="5" fill="#fff"/></svg>`;case"place":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="52" y="24" width="56" height="52" fill="#fff" stroke="#ccc"/><circle cx="80" cy="46" r="13" fill="#111"/><circle cx="80" cy="46" r="3.5" fill="${e}"/><rect x="66" y="66" width="28" height="3" fill="#444"/></svg>`}return""}function Jl(n,e,t,i){let s=p("div",{class:"tiles",role:"radiogroup","aria-label":i}),r=o=>{We(s,...n.map(a=>p("button",{type:"button",class:"tile",role:"radio","aria-checked":String(a.value===o),onclick:()=>{t(a.value),r(a.value)}},a.pic||p("div",{class:"pic"}),p("div",{class:"cap"},p("b",null,a.label),a.hint?p("span",null,a.hint):null))))};return r(e),s}async function py(n){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode("hc-affiches:"+n));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}function my(n){let e=p("input",{type:"password",placeholder:n.postersPass?"Nouveau mot de passe":"Choisis un mot de passe",autocomplete:"new-password"}),t=Ue("Enregistrer",async()=>{let s=e.value.trim();if(s.length<4){st("Au moins 4 caract\xE8res.","bad");return}n.postersPass=await py(s),_e(),Bt(),st("Mot de passe enregistr\xE9 : il s\u2019applique apr\xE8s la publication.")},"sm"),i=n.postersPass?Ue("Retirer le mot de passe",()=>{delete n.postersPass,_e(),Bt()},"sm ghost"):null;return p("div",{class:"block"},p("h3",null,"Affiches",p("small",null,"l\u2019outil pour les r\xE9seaux sociaux")),p("p",{class:"hint",style:{marginTop:0}},n.postersPass?"L\u2019outil demande un mot de passe. Chaque navigateur s\u2019en souvient apr\xE8s la premi\xE8re fois.":"L\u2019outil est ouvert \xE0 toute personne qui conna\xEEt son adresse."),p("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},e,t,i,p("a",{href:xi+"affiches/",target:"_blank",rel:"noopener"},"Ouvrir l\u2019outil \u2197")),p("p",{class:"hint"},"Une protection simple, pour garder l\u2019outil pour toi et ton \xE9quipe : elle ne prot\xE8ge rien de secret, les photos du site restant publiques."))}function ct(n,e,t){return p("label",{class:"f"},p("span",null,n),e,t?p("p",{class:"hint"},t):null)}function St(n,e,t={}){let i=t.rows?p("textarea",{rows:t.rows,placeholder:t.placeholder}):p("input",{type:t.type||"text",value:n()??"",placeholder:t.placeholder,min:t.min,max:t.max,step:t.step,spellcheck:t.spell===!1?"false":null});return t.rows&&(i.value=n()??""),i.addEventListener("input",()=>{e(t.type==="number"?i.value===""?"":+i.value:i.value),_e(t)}),t.onBlur&&i.addEventListener("blur",()=>t.onBlur(i)),i}var Bn=()=>{let n=S.content&&S.content.settings.langs||Kt;return Kt.filter(e=>n.includes(e))};function zn(n,e,t,i={}){(!e[t]||typeof e[t]!="object")&&(e[t]=Object.fromEntries(Kt.map(r=>[r,e[t]||""])));let s=r=>p("div",{class:"lang","data-l":r.toUpperCase()},St(()=>e[t][r]??"",o=>{e[t][r]=o},{...i,placeholder:i.placeholder?i.placeholder[r]:rs[r]}));return p("div",{class:"f"},p("span",{class:"lbl"},n),p("div",{class:"pair"},Bn().map(s)),i.hint?p("p",{class:"hint"},i.hint):null)}var gy=[["col","Largeur des colonnes",362,200,520,"Plus \xE9troit : des lignes plus courtes, plus de colonnes, comme dans un journal."],["gutter","Entre deux colonnes",160,10,240,"L\u2019espace blanc entre une colonne et la suivante, quand le texte continue."],["side","C\xF4t\xE9s",79,8,140,"Avant la premi\xE8re colonne (apr\xE8s la photo) et apr\xE8s la derni\xE8re."],["top","Haut",34,8,100,"Au-dessus du titre. Les colonnes suivantes commencent \xE0 cette m\xEAme hauteur."],["bottom","Bas",20,6,80,"Sous le texte et sous la date."]];function vy(n){let e=gy.map(([t,i,s,r,o,a])=>{let l=()=>n.fiche&&n.fiche[t]!=null&&n.fiche[t]!==""?+n.fiche[t]:s,c=p("input",{type:"range",min:r,max:o,step:1,value:l()}),u=p("b",null,String(l())),h=p("span",{class:"fdot",title:"Modifi\xE9",hidden:l()===s}),f=m=>{n.fiche=n.fiche||{},m===s?delete n.fiche[t]:n.fiche[t]=m,Object.keys(n.fiche).length||delete n.fiche,c.value=m,u.textContent=m,h.hidden=m===s};return c.addEventListener("input",()=>{f(+c.value),_e()}),p("div",{class:"f fiche-row"},p("span",{class:"lbl"},i,h),p("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},c,u,Ue("\u21BA "+s,()=>{f(s),_e()},"sm ghost",{title:"Revenir \xE0 la valeur d\u2019origine"})),p("p",{class:"hint"},a))});return p("div",{class:"block"},p("h3",null,"Fiches"),p("p",{class:"hint",style:{marginTop:0,marginBottom:"10px"}},"La mise en page du texte des fiches R\xE9alisations, en colonnes comme un article : le texte passe d\u2019une colonne \xE0 la suivante. Les marges haut et bas valent aussi pour Savoir-faire. Valeurs en unit\xE9s de la fiche (elle fait 355 de haut, agrandie d\u2019environ 1,4 fois sur un ordinateur). Le bouton \xE0 droite de chaque r\xE9glage remet la valeur d\u2019origine. Regarde le r\xE9sultat dans l\u2019Aper\xE7u."),...e)}function kn(n,e,t,i={}){let s=p("input",{type:"checkbox",checked:!!e(),role:"switch"});return s.addEventListener("change",()=>{t(s.checked),_e(i)}),p("label",{class:"switch"},s,n)}function vn(n,e,t,i={}){let s=p("select",null,n.map(r=>p("option",{value:r.value,selected:r.value===e()},r.label)));return s.addEventListener("change",()=>{t(s.value),_e(i)}),s}function nd(n,e){let t=Bn().includes("fr")?"fr":Bn()[0],i=p("div",{class:"rte",contenteditable:"true","data-ph":e,role:"textbox","aria-multiline":"true"}),s=p("div",{class:"rte-foot"}),r=p("div",{class:"lang-tabs",role:"tablist"}),o=()=>{let f=m=>jl(n[m]).join(" ").split(/\s+/).filter(Boolean).length;We(s,p("span",null,`${f(t)} mots`),p("span",null,Bn().map(m=>`${m.toUpperCase()} ${f(m)?"\u2713":"\xB7 \xE0 \xE9crire"}`).join("   ")))},a=()=>{i.innerHTML=Xl(n[t]),r.querySelectorAll("button").forEach(f=>f.setAttribute("aria-selected",String(f.dataset.l===t))),o()};Bn().forEach(f=>r.appendChild(p("button",{type:"button",role:"tab","data-l":f,onclick:()=>{t=f,a()}},f.toUpperCase()))),i.addEventListener("input",()=>{n[t]=Xl(i.innerHTML),o(),_e()}),i.addEventListener("paste",f=>{f.preventDefault();let m=f.clipboardData.getData("text/plain");document.execCommand("insertText",!1,m)}),i.addEventListener("focus",()=>{try{document.execCommand("defaultParagraphSeparator",!1,"p")}catch{}}),i.addEventListener("keydown",f=>{(f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="k"&&(f.preventDefault(),c())});let l=(f,m)=>{i.focus(),document.execCommand(f,!1,m),i.dispatchEvent(new Event("input"))};async function c(){let f=window.getSelection(),m=f.rangeCount?f.getRangeAt(0).cloneRange():null,y=await ec("Ajouter un lien","Adresse (https://\u2026 ou mailto:\u2026)","https://","Ajouter");if(!(!y||y==="https://")){if(i.focus(),m&&(f.removeAllRanges(),f.addRange(m)),m&&m.collapsed&&document.execCommand("insertText",!1,y.replace(/^https?:\/\/|^mailto:/,"")),m&&m.collapsed){let _=f.getRangeAt(0);_.setStart(_.startContainer,Math.max(0,_.startOffset-y.replace(/^https?:\/\/|^mailto:/,"").length))}l("createLink",/^(https?:|mailto:)/.test(y)?y:"https://"+y)}}let u=(f,m,y)=>p("button",{type:"button",title:m,"aria-label":m,onmousedown:_=>_.preventDefault(),onclick:y},f),h=p("div",{class:"rte-bar"},u(p("b",null,"G"),"Gras",()=>l("bold")),u(p("i",null,"I"),"Italique",()=>l("italic")),p("span",{class:"sep"}),u("Lien","Lien (Ctrl+K)",c),u("\u2022 Liste","Liste \xE0 puces",()=>l("insertUnorderedList")),u("Intertitre","Intertitre",()=>l("formatBlock","h3")),u("\xB6","Paragraphe normal",()=>l("formatBlock","p")),p("span",{class:"sep"}),u("Effacer","Retirer la mise en forme",()=>{l("removeFormat"),l("unlink")}),r);return a(),p("div",{class:"rte-wrap"},h,i,s)}var id=[["sections","Sections"],["posts","Contenus"],["models","Mod\xE8les 3D"],["media","M\xE9dias"],["settings","R\xE9glages"],["audience","Audience"],["history","Historique"]],Zl,go,Hr,Br;function zr(){We(mo),Zl=p("header",{class:"top"}),go=p("nav",{class:"nav","aria-label":"Back-office"}),Hr=p("main",{class:"main",id:"main"}),mo.appendChild(p("div",{class:"shell"},Zl,go,Hr)),Br=p("div",{class:"status","aria-live":"polite"}),Zl.append(p("div",{class:"brand"},p("img",{alt:""}),p("span",{class:"name"}),p("small",null,S.backend.kind==="demo"?"Back-office \xB7 d\xE9mo":S.backend.kind==="folder"?"Back-office \xB7 dossier \xAB "+S.backend.name+" \xBB":"Back-office")),...S.backend.kind!=="demo"?[]:[p("button",{type:"button",class:"demo-tag",title:"Ouvrir les sauvegardes",onclick:()=>Qs("history")},"D\xE9mo : ton travail reste dans ce navigateur, pas dans les fichiers du site. Exporte-le ou travaille dans le dossier.")],Br,p("div",{class:"acts"},Ue("Aper\xE7u",()=>tr(),"ghost",{title:"Voir le site avec les modifications non publi\xE9es"}),Ue("Publier",rc,"primary",{title:"Ctrl+S"}))),Zs(),yo(),ls(),Bt()}function yo(){if(!go)return;let n=S.content,e={sections:n.sections.length,posts:n.posts.length,models:n.models.length};We(go,p("ul",null,id.map(([t,i])=>p("li",null,p("button",{type:"button","aria-current":String(S.view===t),onclick:()=>Qs(t)},i,e[t]!=null?p("small",null,e[t]):null)))),p("div",{class:"foot"},S.backend.kind==="github"?p("a",{href:`https://github.com/${S.cfg.owner}/${S.cfg.repo}`,target:"_blank",rel:"noopener"},`${S.cfg.owner}/${S.cfg.repo}`):null,window.HC_SITE_HTML?p("a",{href:"#",onclick:t=>{t.preventDefault(),tr()}},"Voir le site"):p("a",{href:xi+"index.html",target:"_blank",rel:"noopener"},"Voir le site en ligne \u2197"),p("a",{href:xi+"affiches/",target:"_blank",rel:"noopener",title:"Des images pour les r\xE9seaux sociaux et les annonces"},"Affiches \u2197"),er()?p("a",{href:"#",onclick:t=>{t.preventDefault(),uy()}},"Annuler les modifications"):null,S.backend.kind==="github"?p("a",{href:"#",onclick:t=>{t.preventDefault(),Xy()}},"Se d\xE9connecter"):null,S.backend.kind!=="github"?p("a",{href:"#",onclick:t=>{t.preventDefault(),qy()}},S.backend.kind==="folder"?"Changer de dossier":"Quitter la d\xE9mo"):null))}function ls(n){if(!Br)return;let e=er();Br.className="status"+(e?" dirty":"");let t=e?Qh():[];We(Br,p("i",{class:"dot"}),p("span",null,n||(e?"Non publi\xE9 : "+(t.join(", ")||"modifications"):"Tout est publi\xE9")))}function Qs(n){S.view=n;try{history.replaceState(null,"","#/"+n)}catch{}yo(),Bt(),Hr.scrollTop=0}function Bt(){S.refreshList=null,S.onChange=null;let n={sections:Bh,posts:Ey,models:Ry,media:Dy,settings:By,audience:zy,history:Hy}[S.view]||Bh;We(Hr,n())}function bi(n,e,t,...i){return p("div",{class:"page"},p("header",null,p("h1",null,n),t&&t.length?p("div",{class:"acts"},t):null,e?p("p",null,e):null),i)}function yy(n,e){let t=n.closest(".main");if(!t||window.innerWidth<980){e();return}let i=t.getBoundingClientRect().top,s=f=>{let m=f.querySelector(":scope > h3");return m?(m.firstChild&&m.firstChild.textContent||m.textContent).trim():""},r=[...n.querySelectorAll(".block")],o=t.getBoundingClientRect().bottom,a=r.find(f=>{let m=f.getBoundingClientRect();return m.top>=i-4&&m.top<o-60})||r.find(f=>f.getBoundingClientRect().bottom>i+80),l=a?s(a):"",c=a?a.getBoundingClientRect().top-i:0,u=t.scrollTop;e();let h=l&&[...n.querySelectorAll(".block")].find(f=>s(f)===l);h?t.scrollTop+=h.getBoundingClientRect().top-i-c:t.scrollTop=u}function ac(n){window.innerWidth<980&&setTimeout(()=>n.scrollIntoView({behavior:"smooth",block:"start"}),30)}function sd(n,e){let t=null,i=()=>n.querySelectorAll(".drop-before, .drop-after").forEach(s=>s.classList.remove("drop-before","drop-after"));n.querySelectorAll("[data-i]").forEach(s=>{s.draggable=!0,s.addEventListener("dragstart",r=>{t=+s.dataset.i,s.classList.add("dragging"),r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",String(t))}),s.addEventListener("dragend",()=>{s.classList.remove("dragging"),i(),t=null}),s.addEventListener("dragover",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect();i(),s.classList.add(r.clientY>o.top+o.height/2?"drop-after":"drop-before")}),s.addEventListener("drop",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect(),a=+s.dataset.i+(r.clientY>o.top+o.height/2?1:0);a>t&&a--;let l=t;t=null,i(),a!==l&&e(l,a)})})}var oc=n=>S.content.posts.filter(e=>e.section===n).length;function Bh(){let n=S.content;n.sections.find(r=>r.id===S.sel.section)||(S.sel.section=n.sections[0]&&n.sections[0].id);let e=p("div",{class:"card sticky"}),t=p("div"),i=()=>{let r=p("ul",{class:"list"},n.sections.map((o,a)=>p("li",{class:"row","data-i":a,tabindex:0,"aria-current":String(o.id===S.sel.section),onclick:()=>{S.sel.section=o.id,i(),s(),ac(t)},onkeydown:l=>{l.key==="Enter"&&l.currentTarget.click()}},p("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),p("div",{class:"th",style:{background:"#fafafa",border:"1px solid var(--line)"},html:td(o.layout)}),p("div",null,p("div",{class:"t"},mt(o.name)||o.id),p("div",{class:"m"},`${Jn(oo[o.layout].label,"fr")} \xB7 ${Jn(Or[o.card].label,"fr")} \xB7 ${oc(o.id)} contenus`)),p("div",{class:"b"},o.visible?null:p("span",{class:"badge off"},"masqu\xE9e"),n.settings.startSection===o.id?p("span",{class:"badge"},"arriv\xE9e"):null))));sd(r,(o,a)=>{Gi(n.sections,o,a),_e({nav:!0}),i()}),We(e,p("header",{class:"toolbar",style:{justifyContent:"space-between"}},p("span",{class:"lbl",style:{margin:0}},"Ordre du menu"),Ue("+ Nouvelle section",_y,"sm dark")),r,p("p",{class:"hint",style:{padding:"10px 12px",margin:0}},"Glisse les sections pour changer l\u2019ordre du menu du site."))},s=()=>{We(t,xy(n.sections.find(r=>r.id===S.sel.section),()=>{i()},s))};return S.refreshList=i,i(),s(),bi("Sections","Chaque section du site est un objet 3D entour\xE9 de cartes. Choisis l\u2019objet, la fa\xE7on dont les cartes se disposent, leur type, et les tags qui servent \xE0 trier.",[],p("div",{class:"cols"},e,t))}function _y(){let n=S.content,e=On("section",n.sections.map(t=>t.id));n.sections.push({id:e,name:{en:"New section",fr:"Nouvelle section",ca:"Nova secci\xF3",es:"Nueva secci\xF3n"},model:n.models[0]?n.models[0].id:"",layout:"carousel",card:"image",open:"strip",perPage:8,defaultTag:"",visible:!0,tags:[]}),S.sel.section=e,_e({nav:!0}),Bt()}function xy(n,e,t){let i=S.content;if(!n)return p("div",{class:"card"},p("div",{class:"empty"},"Aucune section. Cr\xE9e la premi\xE8re avec \xAB + Nouvelle section \xBB."));let s=oc(n.id),r=p("h2",null,mt(n.name)||n.id),o=p("p",{class:"hint"},`Adresse directe : \u2026/#${n.id}`),a=St(()=>n.id,()=>{},{spell:!1,onBlur:g=>{let d=Yn(g.value);if(d===n.id){g.value=n.id;return}let T=On(d,i.sections.filter(v=>v!==n).map(v=>v.id));i.posts.forEach(v=>{v.section===n.id&&(v.section=T)}),i.settings.startSection===n.id&&(i.settings.startSection=T),n.id=T,S.sel.section=T,g.value=T,o.textContent=`Adresse directe : \u2026/#${T}`,_e({list:!0})}}),l=async()=>{await Hn("Supprimer la section",s?`\xAB ${mt(n.name)} \xBB contient ${s} contenu${s>1?"s":""}. Ils seront supprim\xE9s avec elle.`:`Supprimer \xAB ${mt(n.name)} \xBB ?`,"Supprimer","danger")&&(i.posts=i.posts.filter(d=>d.section!==n.id),i.sections.splice(i.sections.indexOf(n),1),i.settings.startSection===n.id&&(i.settings.startSection=i.sections[0]?i.sections[0].id:""),S.sel.section=null,_e({nav:!0}),Bt())},c=i.models.map(g=>({value:g.id,label:g.name,pic:dy(g)})),u=Object.entries(oo).map(([g,d])=>({value:g,label:Jn(d.label,"fr"),hint:Jn(d.hint,"fr"),pic:p("div",{class:"pic",html:td(g)})})),h=Object.entries(Or).map(([g,d])=>({value:g,label:Jn(d.label,"fr"),hint:{image:"Vignette paysage, titre, lieu",portrait:"Carr\xE9 : visage ou initiales",text:"Bandeau de texte, image facultative",place:"Logo ou photo et fiche du lieu"}[g],pic:p("div",{class:"pic",html:fy(g)})})),f=p("div",{class:"f",style:{marginTop:"16px"}}),m=()=>{f.hidden=n.layout!=="map";let g=new Map;i.posts.forEach(d=>{d.published&&d.spots.forEach(T=>{let v=T.city||`${T.lat}, ${T.lon}`;g.set(v,(g.get(v)||0)+1)})}),We(f,p("span",{class:"lbl"},"R\xE9seau"),kn("Relier tous les lieux d\u2019intervention par des arcs depuis le bureau",()=>n.network,d=>{n.network=d},{after:m}),p("p",{class:"hint"},g.size?`${g.size} lieux renseign\xE9s dans les contenus : ${[...g.keys()].join(", ")}. On les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB.`:"Aucun lieu pour l\u2019instant : on les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB."),n.network&&!as(i,n.id).some(d=>d.location)?p("p",{class:"hint",style:{color:"var(--warn)"}},"Donne une position \xE0 un contenu de cette section (ton bureau) : les arcs partent de l\xE0."):null)};m();let y=p("div",{class:"chips",role:"radiogroup","aria-label":"Ouverture"}),_=()=>We(y,...[["strip","Fiche 2D : images et texte en bandeau"],["focus3d","La carte vient vers la cam\xE9ra (fiche 3D)"]].map(([g,d])=>p("button",{type:"button",class:"chip",role:"radio","aria-pressed":String(n.open===g),"aria-checked":String(n.open===g),onclick:()=>{n.open=g,_e(),_()}},d)));return _(),p("div",{class:"card"},p("header",null,r,p("div",{class:"acts"},Ue("Aper\xE7u",()=>tr(n.id),"sm"),Ue("Contenus \u2192",()=>{S.filter.section=n.id,Qs("posts")},"sm"),Ue("Supprimer",l,"sm danger"))),p("div",{class:"block"},p("h3",null,"Nom et adresse"),zn("Nom dans le menu",n,"name",{list:!0,after:()=>{r.textContent=mt(n.name)||n.id}}),p("div",{class:"grid2"},p("label",{class:"f"},p("span",null,"Identifiant"),a,o),p("div",{style:{display:"grid",gap:"10px",alignContent:"start",paddingTop:"20px"}},kn("Visible sur le site",()=>n.visible,g=>{n.visible=g},{list:!0}),kn("Ses contenus sont des savoir-faire, reli\xE9s aux projets",()=>n.skills,g=>{n.skills=g},{list:!0}),kn("Section d\u2019arriv\xE9e (apr\xE8s ENTER)",()=>i.settings.startSection===n.id,g=>{i.settings.startSection=g?n.id:(i.sections.find(d=>d!==n)||{}).id||""},{list:!0})))),p("div",{class:"block"},p("h3",null,"Objet 3D",p("small",null,"le mod\xE8le au centre de la section")),Jl(c,n.model,g=>{n.model=g,_e()},"Objet 3D"),p("p",{class:"hint"},"Pour ajouter ton propre fichier Collada (.dae), passe par ",p("a",{href:"#",onclick:g=>{g.preventDefault(),Qs("models")}},"Mod\xE8les 3D"),".")),p("div",{class:"block"},p("h3",null,"Disposition des cartes",p("small",null,"le style de la section")),Jl(u,n.layout,g=>{n.layout=g,m(),_e({list:!0})},"Disposition"),f),p("div",{class:"block"},p("h3",null,"Type de carte"),Jl(h,n.card,g=>{n.card=g,n.open=Or[g].open,_(),_e({list:!0})},"Type de carte"),p("div",{style:{marginTop:"14px"}},p("span",{class:"lbl"},"Au clic sur une carte"),y)),p("div",{class:"block"},p("h3",null,"Tags",p("small",null,"pour trier les contenus, comme le menu \xAB cat\xE9gories \xBB du site")),wy(n,t),p("div",{class:"grid2",style:{marginTop:"16px"}},p("div",null,ct("Tag affich\xE9 \xE0 l\u2019ouverture",vn([{value:"",label:"Tout"},...n.tags.map(g=>({value:g.id,label:mt(g.label)||g.id}))],()=>n.defaultTag||"",g=>{n.defaultTag=g})),kn("Sans \xAB Tout \xBB : un seul groupe \xE0 la fois",()=>!!n.noAll,g=>{g?n.noAll=!0:delete n.noAll})),ct("Cartes par page",St(()=>n.perPage,g=>{n.perPage=Math.max(1,Math.min(40,g||1))},{type:"number",min:1,max:40}),"Au-del\xE0, les fl\xE8ches du site passent \xE0 la page suivante.")),p("div",{class:"grid2",style:{marginTop:"16px"}},ct("Taille des cartes (%)",St(()=>n.cardScale||"",g=>{g===""||g===100?delete n.cardScale:n.cardScale=Math.max(40,Math.min(250,g))},{type:"number",min:40,max:250,step:5,placeholder:"100"}),"Agrandit ou r\xE9duit les cartes 3D de cette section. 100 = taille d\u2019origine."),ct("Distance de la cam\xE9ra (%)",St(()=>n.camera||"",g=>{g===""||g===(n.layout==="map"?58:100)?delete n.camera:n.camera=Math.max(30,Math.min(250,g))},{type:"number",min:30,max:250,step:5,placeholder:n.layout==="map"?"58":"100"}),"Plus petit : la cam\xE9ra s\u2019approche de l\u2019objet. Vide : "+(n.layout==="map"?"58 pour la carte du monde.":"100."))),n.tags.length?My(n):null))}function by(n){let e=(S.content.settings.seo||{}).indexnow||"",t=yi();if(!e||S.backend.kind!=="github"||!/^https:\/\//.test(t))return;let i=[...new Set(n.filter(s=>/(^|\/)index\.html$/.test(s)).map(s=>t+s.replace(/index\.html$/,"")))].slice(0,60);i.length&&setTimeout(()=>i.forEach((s,r)=>setTimeout(()=>fetch(`https://api.indexnow.org/indexnow?url=${encodeURIComponent(s)}&key=${e}&keyLocation=${encodeURIComponent(t+e+".txt")}`,{mode:"no-cors"}).catch(()=>{}),r*400)),12e4)}function yi(){let n=(S.content&&S.content.settings.seo&&S.content.settings.seo.url||"").trim();return n?n.replace(/\/?$/,"/"):/^https?:$/.test(location.protocol)&&/\/admin\/?/.test(location.pathname)?location.origin+location.pathname.replace(/admin\/?(index\.html)?$/,""):"https://mouawadlaurier.com/handcoded/"}function My(n){let e=yi();return p("div",{class:"f",style:{marginTop:"16px"}},p("span",{class:"lbl"},"Liens \xE0 envoyer"),p("div",{class:"chips"},n.tags.map(t=>p("button",{type:"button",class:"chip",title:e+"?tag="+t.id,onclick:async()=>{let i=e+"?tag="+t.id;try{await navigator.clipboard.writeText(i),st("Lien copi\xE9 : "+i)}catch{st(i,"ok",9e3)}}},(mt(t.label)||t.id)+" \u29C9"))),p("p",{class:"hint"},`Un clic copie le lien. Le site s\u2019ouvre sur l\u2019accueil, puis cette section arrive avec ce tag d\xE9j\xE0 choisi, par exemple ${e}?tag=${n.tags[0].id}. Le nom du tag marche aussi, dans n\u2019importe quelle langue (?tag=son). Pour sauter l\u2019accueil : ${e}#${n.id}/${n.tags[0].id}.`))}function wy(n,e){let t=S.content,i=a=>t.posts.filter(l=>l.section===n.id&&l.tags.includes(a)).length,s=p("div",{class:"tags-ed"}),r={gridTemplateColumns:`20px repeat(${Bn().length}, minmax(0, 1fr)) 96px 46px auto`},o=()=>{We(s,n.tags.length?p("div",{class:"tag-row head",style:r},p("span"),Bn().map(a=>p("span",null,rs[a])),p("span",null,"Identifiant"),p("span",null,"Contenus"),p("span")):p("p",{class:"hint",style:{margin:0}},"Pas encore de tag : tous les contenus s\u2019affichent ensemble."),...n.tags.map((a,l)=>{let c=i(a.id),u=St(()=>a.label.en,h=>{a.label.en=h},{placeholder:"English",onBlur:()=>{if(!i(a.id)&&/^tag(-\d+)?$/.test(a.id)&&a.label.en.trim()){let h=a.id;a.id=On(a.label.en,n.tags.filter(f=>f!==a).map(f=>f.id)),n.defaultTag===h&&(n.defaultTag=a.id),_e(),o()}}});return p("div",{class:"tag-row",style:r},p("span",{class:"n",style:{textAlign:"left"}},l+1),Bn().map(h=>h==="en"?u:St(()=>a.label[h]??"",f=>{a.label[h]=f},{placeholder:rs[h]})),p("span",{class:"id",title:a.id},a.id),p("span",{class:"n"},c),p("span",{style:{display:"flex",gap:"2px"}},n.open!=="strip"?Ue(a.page?"\u25A4":"\u25A2",()=>{a.page?delete a.page:a.page=!0,_e(),o()},"sm icon ghost",{"aria-label":"Fiches en pleine page 2D","aria-pressed":String(!!a.page),title:a.page?"Fiches en pleine page 2D, \xE0 lire au premier plan":"Fiches en 3D, comme le reste de la section"}):null,Ue(a.menu===!1?"\u25CC":"\u25CF",()=>{a.menu===!1?delete a.menu:a.menu=!1,_e(),o()},"sm icon ghost",{"aria-label":"Afficher dans le menu du site",title:a.menu===!1?"Cach\xE9 du menu du site (le tag sert au tri)":"Dans le menu du site"}),Ue("\u2191",()=>{l&&(Gi(n.tags,l,l-1),_e(),o())},"sm icon ghost",{"aria-label":"Monter",disabled:!l}),Ue("\u2193",()=>{l<n.tags.length-1&&(Gi(n.tags,l,l+1),_e(),o())},"sm icon ghost",{"aria-label":"Descendre",disabled:l===n.tags.length-1}),Ue("\xD7",async()=>{c&&!await Hn("Supprimer le tag",`\xAB ${mt(a.label)} \xBB est utilis\xE9 par ${c} contenu${c>1?"s":""}. Il leur sera retir\xE9.`,"Supprimer","danger")||(t.posts.forEach(h=>{h.section===n.id&&(h.tags=h.tags.filter(f=>f!==a.id))}),n.tags.splice(l,1),n.defaultTag===a.id&&(n.defaultTag=""),_e(),e())},"sm icon ghost danger",{"aria-label":"Supprimer le tag"})))}),p("div",null,Ue("+ Ajouter un tag",()=>{n.tags.push({id:On("tag",n.tags.map(a=>a.id)),label:jn()}),_e(),e(),setTimeout(()=>{let a=s.querySelectorAll(".tag-row input");a.length&&a[a.length-2].focus()},0)},"sm")))};return o(),s}var Sy={image:{title:"Titre",subtitle:"Sous-titre (artiste, client\u2026)",place:"Lieu",body:"Description",thumb:"Vignette de la carte"},portrait:{title:"Nom",subtitle:"R\xF4le",place:"Ville",body:"Bio courte",thumb:"Portrait"},text:{title:"Titre",subtitle:"Sous-titre",place:"Lieu",body:"Texte",thumb:"Petite image (facultative)"},place:{title:"Nom du lieu ou du bureau",subtitle:"Activit\xE9",place:"Ville affich\xE9e",body:"Adresse et coordonn\xE9es",thumb:"Logo ou photo"}};function ic(n){let e=S.content.sections.find(r=>r.id===n.section),t=[],i=Bn(),s=r=>jl(n.body[r]).length>0;return i.some(r=>!n.title[r])&&t.push("titre \xE0 traduire"),i.some(s)?i.every(s)||t.push("texte \xE0 traduire ("+i.filter(r=>!s(r)).map(r=>r.toUpperCase()).join(", ")+")"):t.push("pas de texte"),e&&["image","portrait"].includes(e.card)&&!n.thumb&&!e.skills&&t.push("pas d\u2019image"),e&&e.skills&&!S.content.posts.some(r=>(r.skills||[]).includes(n.id))&&t.push("aucun projet reli\xE9"),e&&e.layout==="map"&&!n.location&&t.push("pas de position"),t}function Ey(){let n=S.content;if(n.sections.find(a=>a.id===S.filter.section)||(S.filter.section=n.sections[0]&&n.sections[0].id),!n.sections.length)return bi("Contenus",null,[],p("div",{class:"card"},p("div",{class:"empty"},"Cr\xE9e d\u2019abord une section.")));let e=p("div",{class:"card sticky"}),t=p("div"),i=()=>n.sections.find(a=>a.id===S.filter.section),s=()=>{let a=S.filter.q.trim().toLowerCase();return as(n,S.filter.section,{all:!0}).filter(l=>(!S.filter.tag||l.tags.includes(S.filter.tag))&&(!a||[l.title.en,l.title.fr,l.subtitle.en,l.subtitle.fr,l.place.en,l.place.fr,l.id].join(" ").toLowerCase().includes(a))&&(!S.filter.status||S.filter.status==="on"&&l.published||S.filter.status==="off"&&!l.published||S.filter.status==="todo"&&ic(l).length))},r=()=>{let a=i(),l=s(),c=S.filter.tag||S.filter.q||S.filter.status;S.filter.tag&&!a.tags.find(_=>_.id===S.filter.tag)&&(S.filter.tag="");let u=p("div",{class:"tabs",role:"tablist"},n.sections.map(_=>p("button",{type:"button",role:"tab","aria-selected":String(_.id===a.id),onclick:()=>{S.filter.section=_.id,S.filter.tag="",S.sel.post=null,r(),o()}},mt(_.name)||_.id,p("small",null,oc(_.id))))),h=p("input",{type:"search",placeholder:"Chercher\u2026",value:S.filter.q,"aria-label":"Chercher"});h.addEventListener("input",()=>{S.filter.q=h.value,y()});let f=p("div",{class:"toolbar"},vn([{value:"",label:"Tous les tags"},...a.tags.map(_=>({value:_.id,label:mt(_.label)||_.id}))],()=>S.filter.tag,_=>{S.filter.tag=_,y()}),vn([{value:"",label:"Tous"},{value:"on",label:"Visibles"},{value:"off",label:"Masqu\xE9s"},{value:"todo",label:"\xC0 compl\xE9ter"}],()=>S.filter.status,_=>{S.filter.status=_,y()}),h),m=p("div",{class:"list-scroll"});function y(){let _=s(),g=S.filter.tag||S.filter.q||S.filter.status,d=m.scrollTop,T=p("ul",{class:"list"},_.map((v,M)=>{let D=ic(v),U=p("div",{class:"th"+(a.card==="portrait"?" portrait":"")},v.thumb?null:Yh(mt(v.title)));return v.thumb&&(U.style.backgroundImage=`url("${Pn(v.thumb)}")`),p("li",{class:"row","data-i":M,tabindex:0,"aria-current":String(v.id===S.sel.post),onclick:()=>{S.sel.post=v.id,y(),yy(t,o),ac(t)},onkeydown:O=>{O.key==="Enter"&&O.currentTarget.click()}},g?null:p("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),U,p("div",null,p("div",{class:"t"},mt(v.title)||p("i",{style:{color:"var(--ink-4)"}},"Sans titre")),p("div",{class:"m"},[v.tags.map(O=>{let k=a.tags.find(E=>E.id===O);return k?mt(k.label):null}).filter(Boolean).join(", "),v.date].filter(Boolean).join(" \xB7 ")||" ")),p("div",{class:"b"},v.published?null:p("span",{class:"badge off"},"masqu\xE9"),D.length?p("span",{class:"badge warn",title:D.join(", ")},"\xE0 compl\xE9ter"):null))}));g||sd(T,(v,M)=>{let D=as(n,a.id,{all:!0});Gi(D,v,M),D.forEach((U,O)=>{U.order=O}),_e(),y()}),We(m,_.length?T:p("div",{class:"empty"},c?"Aucun contenu ne correspond.":"Aucun contenu dans cette section."),p("p",{class:"hint",style:{padding:"10px 12px",margin:0}},g?"Retire les filtres pour changer l\u2019ordre.":"Glisse pour changer l\u2019ordre des cartes sur le site.")),m.scrollTop=d}y(),We(e,u,p("div",{class:"toolbar",style:{justifyContent:"space-between"}},p("span",{class:"lbl",style:{margin:0}},`${l.length} contenu${l.length>1?"s":""}`),Ue("+ Nouveau contenu",()=>Ay(a),"sm dark")),f,m),S.refreshList=y},o=()=>{let a=n.posts.find(l=>l.id===S.sel.post&&l.section===S.filter.section);We(t,a?Cy(a,r,o):p("div",{class:"card"},p("div",{class:"empty"},"Choisis un contenu dans la liste, ou cr\xE9e-en un nouveau.")))};return r(),o(),bi("Contenus","Projets, savoir-faire, portraits, lieux : chaque contenu devient une carte dans sa section. Les textes s\u2019\xE9crivent en anglais et en fran\xE7ais.",[],p("div",{class:"cols"},e,t))}function Ty(n){let e=S.content;return{id:On("nouveau-contenu",e.posts.map(t=>t.id)),section:n.id,order:Math.max(-1,...as(e,n.id,{all:!0}).map(t=>t.order??0))+1,published:!1,title:jn(),subtitle:jn(),place:jn(),date:"",tags:S.filter.tag?[S.filter.tag]:[],thumb:"",thumbBack:"",body:jn(),media:[],link:"",team:[],credits:"",location:null,spots:[],skills:[],author:"",logos:[]}}function Ay(n){let e=Ty(n);S.content.posts.push(e),S.sel.post=e.id,S.filter.q="",S.filter.status="",_e({nav:!0}),Bt(),setTimeout(()=>{let t=Hr.querySelector(".card .lang input");t&&t.focus()},30)}function Cy(n,e,t){["tags","media","team","spots","skills","logos"].forEach(P=>{Array.isArray(n[P])||(n[P]=[])}),typeof n.author!="string"&&(n.author="");let i=S.content,s=i.sections.find(P=>P.id===n.section),r=!!s.skills,o=r?{title:"Nom du savoir-faire",subtitle:"Phrase courte, \xE9crite sur la carte",place:"",body:"Texte de la fiche",thumb:"Image d\u2019illustration (facultative)"}:Sy[s.card],a=p("h2",null,mt(n.title)||"Sans titre"),l=()=>{a.textContent=mt(n.title)||"Sans titre"},c={list:!0},u=`media/${n.id}`,h=async()=>{await Hn("Supprimer ce contenu",`\xAB ${mt(n.title)||"Sans titre"} \xBB sera retir\xE9 du site \xE0 la prochaine publication.`,"Supprimer","danger")&&(i.posts.splice(i.posts.indexOf(n),1),i.posts.forEach(P=>{P.team=P.team.filter(F=>F!==n.id),P.skills=(P.skills||[]).filter(F=>F!==n.id)}),S.sel.post=null,_e({nav:!0}),Bt())},f=()=>{let P=structuredClone(n);P.id=On(n.id+"-copie",i.posts.map(F=>F.id)),P.order=(n.order??0)+.5,P.published=!1,Kt.forEach(F=>{P.title[F]&&(P.title[F]+={fr:" (copie)",ca:" (c\xF2pia)",es:" (copia)"}[F]||" (copy)")}),i.posts.push(P),as(i,s.id,{all:!0}).forEach((F,H)=>{F.order=H}),S.sel.post=P.id,_e({nav:!0}),Bt()},m=(P,F,H)=>{let X=p("div",{class:"prev "+s.card}),q=p("div",{class:"acts"}),ve=p("div",{class:"drop"},X,q),Ce=()=>{X.style.backgroundImage=n[P]?`url("${Pn(n[P])}")`:"",X.textContent=n[P]?"":P==="thumb"?Yh(mt(n.title)):"",We(q,Ue(n[P]?"Remplacer\u2026":"Choisir une image\u2026",()=>Fn("image/*",!1,Pe),"sm"),n[P]?Ue("Retirer",()=>{n[P]="",_e(c),Ce()},"sm ghost danger"):null,p("p",null,H))},Pe=async tt=>{if(tt[0])try{let j=await Kn(tt[0],u,"thumb");gn(j.path,j.blob);let Nt=n[P];n[P]=j.path;let Oe=0;P==="thumb"&&Nt&&i.posts.forEach(ce=>{ce!==n&&(ce.logos||[]).includes(Nt)&&(ce.logos=ce.logos.map(ge=>ge===Nt?j.path:ge),Oe++)}),_e(c),Ce(),Oe&&st(`Nouveau logo repris aussi dans ${Oe} projet${Oe>1?"s":""}.`)}catch(j){st(j.message,"bad",7e3)}};return ho(ve,Pe),Ce(),p("div",{class:"f"},p("span",{class:"lbl"},F),ve)},y=p("div",{class:"media-list"});jh(y,".media-item",".pv",(P,F)=>{Gi(n.media,P,F),_e(),_()});let _=()=>{let P=p("div",{class:"media-add",role:"button",tabindex:0,onclick:()=>Fn("image/*,video/mp4,video/webm",!0,g),onkeydown:H=>{H.key==="Enter"&&H.currentTarget.click()}},p("span",null,"+ Ajouter des images ou des vid\xE9os",p("br"),p("small",null,"ou glisse-les ici")));ho(P,g);let F=p("div",{class:"media-add",role:"button",tabindex:0,onkeydown:H=>{H.key==="Enter"&&H.currentTarget.click()},onclick:async()=>{let H=await ec("Ajouter une vid\xE9o","Lien YouTube ou Vimeo (youtube.com/watch?v=\u2026, youtu.be/\u2026, vimeo.com/\u2026), ou adresse d\u2019une image en ligne","https://","Ajouter");!H||!/^https?:\/\/\S+$/.test(H.trim())||(n.media.push({src:H.trim()}),_e(),_())}},p("span",null,"+ Vid\xE9o YouTube / Vimeo",p("br"),p("small",null,"colle son lien (ou celui d\u2019une image en ligne)")));We(y,...n.media.map((H,X)=>{let q=Gh(H.src),Ce=q==="youtube"?p("img",{src:`https://i.ytimg.com/vi/${Vh(H.src)}/hqdefault.jpg`,alt:"",loading:"lazy"}):q==="vimeo"?p("span",{style:{color:"#888",font:"italic 18px Georgia, serif"}},"Vimeo"):q==="video"?p("video",{src:Pn(H.src),muted:!0,preload:"metadata",playsinline:!0}):p("img",{src:Pn(H.src),alt:"",loading:"lazy"});return p("div",{class:"media-item"},p("div",{class:"pv",title:"Glisse pour changer l\u2019ordre"},Ce,p("b",{class:"rank"},String(X+1))),p("div",{class:"ft"},p("span",{title:H.src},(q==="image"?"":"\u25B6 ")+(q==="youtube"?"YouTube":q==="vimeo"?"Vimeo "+H.src.split("/").pop():decodeURIComponent(H.src.split("?")[0].split("/").pop()))),Ue("\u2190",()=>{X&&(Gi(n.media,X,X-1),_e(),_())},"sm icon ghost",{"aria-label":"Avant",disabled:!X}),Ue("\u2192",()=>{X<n.media.length-1&&(Gi(n.media,X,X+1),_e(),_())},"sm icon ghost",{"aria-label":"Apr\xE8s",disabled:X===n.media.length-1}),Ue("\xD7",()=>{n.media.splice(X,1),_e(),_()},"sm icon ghost danger",{"aria-label":"Retirer"})),p("div",{class:"cr"},St(()=>H.credit||"",Pe=>{H.credit=Pe},{placeholder:"Cr\xE9dit photo"})),(()=>{let Pe=p("div"),tt=p("details",{class:"mcap-ed"},p("summary",null,H.caption&&Object.values(H.caption).some(Boolean)?"L\xE9gende \u2713":"L\xE9gende"),Pe);return tt.addEventListener("toggle",()=>{tt.open&&!Pe.firstChild&&Pe.appendChild(zn("",H,"caption"))}),tt})())}),P,F)},g=async P=>{for(let F of P)try{let H=await Kn(F,u,"media");gn(H.path,H.blob),n.media.push({src:H.path}),_e(),_()}catch(H){st(H.message,"bad",7e3)}};_();let d=p("div",{class:"chips"}),T=()=>{We(d,...s.tags.map(P=>p("button",{type:"button",class:"chip","aria-pressed":String(n.tags.includes(P.id)),onclick:()=>{n.tags=n.tags.includes(P.id)?n.tags.filter(F=>F!==P.id):s.tags.map(F=>F.id).filter(F=>F===P.id||n.tags.includes(F)),_e(c),T()}},mt(P.label)||P.id)),Ue("+ Nouveau tag",async()=>{let P=await ec("Nouveau tag",`Nom du tag (section \xAB ${mt(s.name)} \xBB)`,"","Cr\xE9er");if(!P)return;let F={id:On(P,s.tags.map(H=>H.id)),label:Object.fromEntries(Kt.map(H=>[H,P]))};s.tags.push(F),n.tags.push(F.id),_e(c),T(),st("Tag cr\xE9\xE9. Tu peux traduire son nom dans Sections.")},"sm ghost"),s.noAll&&s.tags.some(P=>P.menu!==!1)&&!n.tags.some(P=>s.tags.some(F=>F.id===P&&F.menu!==!1))?p("p",{class:"hint",style:{color:"var(--bad, #c33)",flexBasis:"100%"}},n.tags.length?"Ses tags sont cach\xE9s du menu du site : cette carte n\u2019appara\xEEt dans aucune cat\xE9gorie de la 3D. Ajoute un tag visible (\u25CF), ou affiche le tag dans Sections.":"Sans tag, cette carte n\u2019appara\xEEt dans aucune cat\xE9gorie de la 3D."):null)};T();let v=i.posts.filter(P=>P.id!==n.id&&(i.sections.find(F=>F.id===P.section)||{}).card==="portrait"),M=p("div",{class:"chips"}),D=()=>We(M,...v.length?v.map(P=>p("button",{type:"button",class:"chip","aria-pressed":String(n.team.includes(P.id)),onclick:()=>{n.team=n.team.includes(P.id)?n.team.filter(F=>F!==P.id):[...n.team,P.id],_e(),D()}},mt(P.title))):[p("p",{class:"hint",style:{margin:0}},"Ajoute des portraits dans une section de type \xAB Portrait \xBB pour les relier ici.")]);D();let U=p("div"),O=()=>{let P=ce=>{let ge=i.posts.find(Ze=>Ze.thumb===ce&&mt(Ze.title));return ge?mt(ge.title):F(ce)},F=ce=>decodeURIComponent(ce.split("/").pop().replace(/-[a-z0-9]{4}\.[a-z]+$/i,"").replace(/\.[a-z]+$/i,"")).replace(/[-_]+/g," "),H=["core","artists","specialists","team","people"],X=i.posts.filter(ce=>ce!==n&&ce.thumb&&ce.section!==n.section&&ce.tags.length&&!ce.tags.some(ge=>H.includes(ge))&&i.sections.some(ge=>ge.id===ce.section&&!ge.skills)),q=ce=>String(ce||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,""),ve=new Set(X.flatMap(ce=>[q(ce.id),q(mt(ce.title))])),Ce=new Set(i.posts.flatMap(ce=>(ce.logos||[]).concat(ce.thumb||[]))),Pe=ce=>X.some(ge=>ge.thumb===ce),tt=[...new Set(X.map(ce=>ce.thumb).concat(i.posts.flatMap(ce=>ce.logos||[]),n.logos,S.logoFiles||[],[...S.staged.keys()].filter(ce=>ce.startsWith("media/logos/"))))].filter(ce=>n.logos.includes(ce)||Pe(ce)||Ce.has(ce)||!ve.has(q(F(ce)))).sort((ce,ge)=>(n.logos.indexOf(ge)>=0)-(n.logos.indexOf(ce)>=0)||Pe(ge)-Pe(ce)||P(ce).localeCompare(P(ge),"fr"));!S.logoFiles&&S.backend.listFiles&&(S.logoFiles=[],S.backend.listFiles(["media/logos/"]).then(ce=>{S.logoFiles=ce.map(ge=>ge.path).filter(ge=>/\.(png|jpe?g|svg|webp|gif)$/i.test(ge)),U.isConnected&&O()}).catch(()=>{}));let j=async(ce,ge)=>{if(ge)try{let Ze=await Kn(ge,"media/logos","logo");gn(Ze.path,Ze.blob);let Ke=0;i.posts.forEach(N=>{(N.logos||[]).includes(ce)&&(N.logos=N.logos.map(A=>A===ce?Ze.path:A),Ke++),N.thumb===ce&&(N.thumb=Ze.path,Ke++)}),S.logoFiles=(S.logoFiles||[]).filter(N=>N!==ce),_e(),O(),st(`Logo remplac\xE9 (${Ke} endroit${Ke>1?"s":""}). Il part sur le site \xE0 la prochaine publication.`)}catch(Ze){st(Ze.message,"bad",7e3)}},Nt=async ce=>{for(let ge of ce)try{let Ze=await Kn(ge,"media/logos","logo");gn(Ze.path,Ze.blob),n.logos.push(Ze.path),_e()}catch(Ze){st(Ze.message,"bad",7e3)}O()},Oe=p("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"64px"},onclick:()=>Fn("image/*",!0,Nt),onkeydown:ce=>{ce.key==="Enter"&&ce.currentTarget.click()}},p("span",null,"+ Ajouter des logos",p("br"),p("small",null,"PNG ou SVG, fond blanc ou transparent")));ho(Oe,Nt),We(U,p("div",{class:"logo-lib"},tt.map(ce=>{let ge=n.logos.includes(ce);return p("div",{class:"logo-cell"},p("button",{type:"button",class:"logo-chip","aria-pressed":String(ge),title:P(ce),onclick:()=>{n.logos=ge?n.logos.filter(Ze=>Ze!==ce):[...n.logos,ce],_e(),O()}},p("img",{src:Pn(ce),alt:P(ce),loading:"lazy"}),p("span",null,P(ce))),p("button",{type:"button",class:"logo-swap",title:"Remplacer ce logo par un nouveau fichier, partout o\xF9 il est utilis\xE9","aria-label":"Remplacer le logo "+P(ce),onclick:()=>Fn("image/*",!1,Ze=>j(ce,Ze[0]))},"\u21BB"))}),Oe),p("p",{class:"hint"},n.logos.length?`${n.logos.length} logo${n.logos.length>1?"s":""} en bas de la fiche, dans l\u2019ordre o\xF9 tu les as coch\xE9s. Les logos des autres projets sont propos\xE9s ici : un clic pour l\u2019ajouter ou le retirer.`:"Les logos s\u2019affichent en bas de la fiche, dans un panneau \xAB Partenaires \xBB. Ceux d\xE9j\xE0 utilis\xE9s sur d\u2019autres projets sont propos\xE9s ici : un clic suffit."))};O();let k=P=>i.sections.find(F=>F.id===P.section)||{},E=i.posts.filter(P=>k(P).skills&&(mt(P.title)||(n.skills||[]).includes(P.id))),R=i.posts.filter(P=>!k(P).skills&&["image","text"].includes(k(P).card)),W=s.skills||["image","text"].includes(s.card),ne=p("div"),te=(P,F,H)=>{let X=i.sections.map(q=>[q,P.filter(ve=>ve.section===q.id)]).filter(([,q])=>q.length);return X.map(([q,ve])=>p("div",{style:{marginBottom:"10px"}},X.length>1?p("span",{class:"lbl"},mt(q.name)||q.id):null,p("div",{class:"chips"},ve.map(Ce=>p("button",{type:"button",class:"chip","aria-pressed":String(F(Ce)),title:Ce.published?"":"Masqu\xE9 sur le site",style:Ce.published?null:{opacity:".55"},onclick:()=>{H(Ce),_e(),B()}},mt(Ce.title)||Ce.id)))))},B=()=>{if(s.skills){let P=R.filter(H=>H.skills.includes(n.id)),F=P.length;We(ne,F?p("div",{class:"chips"},P.map(H=>p("span",{class:"chip","aria-pressed":"true",title:H.published?"":"Masqu\xE9 sur le site",style:{cursor:"default",opacity:H.published?null:".55"}},mt(H.title)||H.id))):p("p",{class:"hint",style:{margin:0}},"Aucun projet ne l\u2019utilise pour l\u2019instant."),p("p",{class:"hint"},(F?`${F} projet${F>1?"s":""}. Sur le site, la fiche les fait d\xE9filer avec leur vignette, et la carte 3D illustre son texte avec la photo de l\u2019un d\u2019eux. `:"")+"Pour relier un projet, ouvre-le et coche ce savoir-faire dans son bloc \xAB Savoir-faire \xBB, juste sous les tags."))}else We(ne,E.length?te(E,P=>n.skills.includes(P.id),P=>{n.skills=n.skills.includes(P.id)?n.skills.filter(F=>F!==P.id):[...n.skills,P.id]}):p("p",{class:"hint",style:{margin:0}},"Aucune section de savoir-faire : coche \xAB Ses contenus sont des savoir-faire \xBB dans les r\xE9glages d\u2019une section."),E.length?p("p",{class:"hint"},"Affich\xE9s sur la fiche du projet. Un clic ouvre la fiche du savoir-faire, qui liste \xE0 son tour ses projets."):null)};W&&B();let Y=p("div"),G=i.sections.find(P=>P.layout==="map"&&P.network),re=()=>{let P=q=>n.spots.some(ve=>ve.city===q),F=q=>{n.spots.push({city:q,lat:Zn[q][0],lon:Zn[q][1]}),_e(),re()},H=Ah([Jn(n.place,"en"),Jn(n.place,"fr")].join(" , ")).filter(q=>Zn[q]&&!P(q)),X=p("select",{"aria-label":"Ajouter une ville"},p("option",{value:""},"+ Ajouter une ville\u2026"),Object.keys(Zn).sort().filter(q=>!P(q)).map(q=>p("option",{value:q},q)),p("option",{value:"__other"},"Autre lieu (coordonn\xE9es)\u2026"));X.addEventListener("change",async()=>{let q=X.value;if(!q)return;if(q!=="__other"){F(q);return}let ve=await Ly();ve&&(n.spots.push(ve),_e()),re()}),We(Y,p("div",{class:"chips"},n.spots.length?n.spots.map((q,ve)=>p("span",{class:"chip on"},q.city||`${q.lat}, ${q.lon}`,p("button",{type:"button",class:"x","aria-label":"Retirer "+(q.city||"ce lieu"),onclick:()=>{n.spots.splice(ve,1),_e(),re()}},"\xD7"))):p("span",{class:"hint",style:{margin:0}},"Aucune ville pour l\u2019instant.")),H.length?p("p",{class:"hint"},"Rep\xE9r\xE9 dans le champ \xAB Lieu \xBB :",H.map(q=>p("button",{type:"button",class:"chip sugg",onclick:()=>F(q)},"+ "+q))):null,p("div",{style:{marginTop:"10px",maxWidth:"320px"}},X))};re();let se=p("div"),Z=()=>{let P=n.location,F=vn([{value:"",label:"Pas de position"},...Object.keys(Zn).sort().map(H=>({value:H,label:H})),{value:"__other",label:"Autre (latitude / longitude)\u2026"}],()=>P?Zn[P.city]?P.city:"__other":"",H=>{H?H==="__other"?n.location={city:P?P.city:"",lat:P?P.lat:0,lon:P?P.lon:0}:n.location={city:H,lat:Zn[H][0],lon:Zn[H][1]}:n.location=null,Z()},c);We(se,p("div",{class:"grid3"},ct("Ville",F),P?ct("Latitude",St(()=>P.lat,H=>{P.lat=+H||0},{type:"number",step:.01})):null,P?ct("Longitude",St(()=>P.lon,H=>{P.lon=+H||0},{type:"number",step:.01})):null))};Z();let le=St(()=>n.id,()=>{},{spell:!1,onBlur:P=>{let F=Yn(P.value);if(F===n.id){P.value=n.id;return}let H=On(F,i.posts.filter(X=>X!==n).map(X=>X.id));i.posts.forEach(X=>{X.team=X.team.map(q=>q===n.id?H:q),X.skills=(X.skills||[]).map(q=>q===n.id?H:q)}),n.id=H,S.sel.post=H,P.value=H,_e(c)}}),ae=p("span",{class:"badge"}),he=()=>{let P=ic(n);ae.className="badge"+(P.length?" warn":""),ae.textContent=P.length?"\xC0 compl\xE9ter : "+P.join(", "):"Complet"};return he(),S.onChange=he,p("div",{class:"card"},p("header",null,a,p("div",{class:"acts"},Ue("Aper\xE7u",()=>tr(s.id),"sm"),Ue("Dupliquer",f,"sm"),Ue("Supprimer",h,"sm danger"))),p("div",{class:"block",style:{display:"flex",gap:"18px",alignItems:"center",flexWrap:"wrap"}},kn("Visible sur le site",()=>n.published,P=>{n.published=P},c),ct("Section",vn(i.sections.map(P=>({value:P.id,label:mt(P.name)||P.id})),()=>n.section,P=>{let F=i.sections.find(H=>H.id===P);n.section=P,n.tags=n.tags.filter(H=>F.tags.some(X=>X.id===H)),n.order=Math.max(-1,...as(i,P,{all:!0}).filter(H=>H!==n).map(H=>H.order??0))+1,S.filter.section=P,st(`D\xE9plac\xE9 dans \xAB ${mt(F.name)} \xBB.`),Bt()})),ae),p("div",{class:"block"},p("h3",null,"Textes de la carte"),zn(o.title,n,"title",{list:!0,after:l}),zn(o.subtitle,n,"subtitle",c),r?p("p",{class:"hint",style:{marginTop:"4px"}},"Sur le site, la carte montre le nom et cette phrase, avec une image \xE0 c\xF4t\xE9 : la tienne, sinon la photo d\u2019un projet reli\xE9. Sans phrase, le d\xE9but du texte."):null,r?null:zn(o.place,n,"place",{...c,after:()=>re()}),r?null:p("div",{class:"grid2"},ct("Auteur de l\u2019\u0153uvre",St(()=>n.author||"",P=>{n.author=P},{placeholder:"Ex. Romain Tardy"}),`Sign\xE9 sur la vignette 3D : \xAB ${mt(n.title)||"Titre"} \xB7 ${n.author||S.content.settings.name} \xBB. Vide : sign\xE9 ${S.content.settings.name}.`),s.card==="image"&&!s.skills?ct("Taille dans la vue d\u2019ensemble",vn([{value:"",label:"Automatique"},{value:"xl",label:"Tr\xE8s grande"},{value:"l",label:"Grande"},{value:"w",label:"Large"},{value:"s",label:"Petite"}],()=>n.ovSize||"",P=>{P?n.ovSize=P:delete n.ovSize}),"Automatique : le premier projet de la S\xE9lection en tr\xE8s grand, les autres projets de la S\xE9lection en grand, les marques en large, le reste en petit."):p("div"),ct("Date",St(()=>n.date,P=>{n.date=P},{...c,placeholder:"2019, ou 2017 \u2013 2019"})),ct("Lien",St(()=>n.link,P=>{n.link=P.trim()},{type:"url",placeholder:"https://\u2026"}),s.card==="place"?"Affich\xE9 sur la fiche du lieu.":"Affich\xE9 sous la fiche : \xAB Voir le site \xBB."))),r?p("div",{class:"block"},p("h3",null,"Projets",p("small",null,"ceux qui l\u2019ont coch\xE9 dans leur fiche")),ne):null,p("div",{class:"block"},p("h3",null,o.body),nd(n.body,"\xC9cris ici. Les paragraphes se r\xE9partissent tout seuls sur les panneaux du site.")),p("div",{class:"block"},p("h3",null,"Images"),m("thumb",o.thumb,r?"Une image qui fait comprendre le savoir-faire d\u2019un coup d\u2019\u0153il. Sans image : la photo d\u2019un projet reli\xE9, tir\xE9e au hasard.":s.card==="image"?"Format paysage. Sans image, la carte affiche le titre sur fond noir.":s.card==="portrait"?"Carr\xE9, cadr\xE9 sur le visage. Sans image : les initiales.":"Facultatif."),["image","portrait"].includes(s.card)&&!r?p("details",null,p("summary",{class:"lbl",style:{cursor:"pointer",margin:"6px 0 10px"}},"Dos de la carte (facultatif)"),m("thumbBack","Image au dos","Vue quand la carte est de dos. Par d\xE9faut : la vignette, p\xE2lie.")):null,s.open==="strip"?p("div",{class:"f",style:{marginTop:"6px"}},p("span",{class:"lbl"},"Images et vid\xE9os de la fiche"),y,p("p",{class:"hint"},"La premi\xE8re s\u2019affiche avant le texte, les autres apr\xE8s. Vid\xE9os MP4 ou WebM, id\xE9alement moins de 20 Mo.")):null),p("div",{class:"block"},p("h3",null,"Tags"),d),W&&!r?p("div",{class:"block"},p("h3",null,"Savoir-faire",p("small",null,"coche ceux utilis\xE9s sur ce projet, comme des tags")),ne):null,s.open==="strip"?p("div",{class:"block"},p("h3",null,"Logos des partenaires",p("small",null,"producteurs, soutiens, lieux, clients")),U):null,["image","text"].includes(s.card)&&!r?p("div",{class:"block"},p("h3",null,"Qui a travaill\xE9 dessus ?",p("small",null,"les portraits s\u2019affichent sur la fiche")),M,p("div",{style:{marginTop:"12px"}},ct("Autres cr\xE9dits",St(()=>n.credits,P=>{n.credits=P},{placeholder:"Ex. Tigre Lab, Studio X"})))):null,s.layout!=="map"&&!r?p("div",{class:"block"},p("h3",null,"Villes",p("small",null,G?`toutes les villes du projet, autant que tu veux : les points du r\xE9seau sur la carte de \xAB ${mt(G.name)} \xBB`:"toutes les villes du projet, autant que tu veux")),Y):null,s.layout==="map"?p("div",{class:"block"},p("h3",null,"Position sur la carte du monde"),se):null,p("details",{class:"block"},p("summary",{class:"lbl",style:{cursor:"pointer",margin:0}},"Avanc\xE9"),p("div",{class:"grid2",style:{marginTop:"12px"}},ct("Identifiant",le,"Sert aux liens \xAB \xE9quipe \xBB et au dossier des images."),ct("Dossier des fichiers",p("input",{type:"text",value:u+"/",disabled:!0})))))}function Ry(){let n=S.content;n.models.find(r=>r.id===S.sel.model)||(S.sel.model=n.models[0]&&n.models[0].id);let e=p("div",{class:"card sticky"}),t=p("div"),i=()=>{We(e,p("header",{class:"toolbar",style:{justifyContent:"space-between"}},p("span",{class:"lbl",style:{margin:0}},`${n.models.length} mod\xE8le${n.models.length>1?"s":""}`),Ue("+ Importer un .dae",zh,"sm dark")),p("ul",{class:"list"},n.models.map(r=>{let o=n.sections.filter(a=>a.model===r.id);return p("li",{class:"row",tabindex:0,"aria-current":String(r.id===S.sel.model),onclick:()=>{S.sel.model=r.id,i(),s(),ac(t)},onkeydown:a=>{a.key==="Enter"&&a.currentTarget.click()}},p("div",{class:"th",style:{background:"#f4f4f2"}},"\u25B2"),p("div",null,p("div",{class:"t"},r.name),p("div",{class:"m"},o.length?"Utilis\xE9 par "+o.map(a=>mt(a.name)).join(", "):"Pas utilis\xE9")),p("div",{class:"b"},r.builtin?p("span",{class:"badge"},"origine"):null,S.staged.has(r.file)?p("span",{class:"badge new"},"nouveau"):null))})),p("div",{class:"block"},p("h3",null,"Importer un mod\xE8le"),p("p",{class:"hint",style:{marginTop:0}},"S\xE9lectionne ensemble le fichier .dae et ses textures (JPG, PNG). Export Collada depuis Maya, Blender, Cinema 4D\u2026 Les noms de fichiers des textures doivent correspondre \xE0 ceux cit\xE9s dans le .dae."),(()=>{let r=p("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"80px"},onclick:zh},"Glisse ici le .dae et ses textures");return ho(r,o=>lc(o)),r})())),e.querySelectorAll(".row .th").forEach((r,o)=>{let a=n.models[o];nc.snapshot(a).then(l=>{r.style.background=`#f4f4f2 url("${l}") center / cover`,r.textContent=""}).catch(()=>{})})},s=()=>{let r=n.models.find(v=>v.id===S.sel.model);if(!r){We(t,p("div",{class:"card"},p("div",{class:"empty"},"Aucun mod\xE8le.")));return}let o=p("div",{class:"model-view"}),a=p("p",{class:"msg"});o.appendChild(a);let l=()=>{nc.show(o,r,a,!0)},c=n.sections.filter(v=>v.model===r.id),u=async()=>{if(c.length){st(`Ce mod\xE8le sert \xE0 ${c.map(v=>mt(v.name)).join(", ")}. Choisis un autre objet pour ces sections d\u2019abord.`,"bad",7e3);return}if(await Hn("Supprimer le mod\xE8le",`\xAB ${r.name} \xBB sera retir\xE9 de la liste${r.builtin?"":" et ses fichiers supprim\xE9s du d\xE9p\xF4t \xE0 la prochaine publication"}.`,"Supprimer","danger")){if(!r.builtin){let v=r.file.replace(/[^/]+$/,"");[r.file,...(r.textures||[]).map(M=>v+M)].forEach(M=>{S.staged.has(M)&&(URL.revokeObjectURL(S.staged.get(M).url),S.staged.delete(M))})}n.models.splice(n.models.indexOf(r),1),S.sel.model=null,_e({nav:!0}),Bt()}},h=p("input",{type:"range",min:-180,max:180,step:5,value:r.rotationY||0}),f=p("b",null,(r.rotationY||0)+"\xB0");h.addEventListener("input",()=>{r.rotationY=+h.value,f.textContent=h.value+"\xB0",_e()}),h.addEventListener("change",l);let m=St(()=>r.height||420,v=>{r.height=Math.max(50,Math.min(1200,v||420))},{type:"number",min:50,max:1200,step:10});m.addEventListener("change",l);let y=p("input",{type:"range",min:10,max:400,step:5,value:r.scale||100}),_=p("b",null,(r.scale||100)+" %"),g=0;y.addEventListener("input",()=>{let v=+y.value;v===100?delete r.scale:r.scale=v,_.textContent=v+" %",_e(),clearTimeout(g),g=setTimeout(l,120)});let d=Ue("100 %",()=>{delete r.scale,y.value=100,_.textContent="100 %",_e(),l()},"sm ghost"),T=ct("Hauteur dans la sc\xE8ne",m,"En unit\xE9s de la sc\xE8ne : les cartes sont pos\xE9es \xE0 environ 500 du centre. 420 donne la taille des objets d\u2019origine.");T.hidden=r.scaleMode!=="fit",We(t,p("div",{class:"card"},p("header",null,p("h2",null,r.name),p("div",{class:"acts"},c[0]?Ue("Aper\xE7u",()=>tr(c[0].id),"sm"):null,Ue("Supprimer",u,"sm danger"))),o,p("div",{class:"block"},ct("Nom",St(()=>r.name,v=>{r.name=v},{list:!0})),p("div",{class:"grid2"},ct("Taille",vn([{value:"pv",label:"Comme le fichier (\xD7100, r\xE8gle de 2008)"},{value:"fit",label:"Ajuster \xE0 une hauteur"}],()=>r.scaleMode,v=>{r.scaleMode=v,T.hidden=v!=="fit",v==="fit"&&!r.height&&(r.height=420),l()})),T),p("div",{class:"f"},p("span",{class:"lbl"},"Taille de l\u2019objet ",_),p("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},y,d),p("p",{class:"hint",style:{margin:"4px 0 0"}},"Agrandit ou r\xE9duit l\u2019objet dans toutes les sections qui l\u2019utilisent, sans toucher au fichier.")),p("div",{class:"f"},p("span",{class:"lbl"},"Rotation ",f),h),ct("Faces sans texture",vn([{value:"wire",label:"Fil de fer jaune (comme 2008)"},{value:"white",label:"Blanc mat"},{value:"black",label:"Noir mat"}],()=>r.untextured,v=>{r.untextured=v,l()})),p("p",{class:"hint"},"Fichier : ",p("code",null,r.file),(r.textures||[]).length?` \xB7 ${r.textures.length} texture${r.textures.length>1?"s":""}`:"",c.length?" \xB7 utilis\xE9 par "+c.map(v=>mt(v.name)).join(", "):"")))),l()};return S.refreshList=i,i(),s(),bi("Mod\xE8les 3D","Les objets Collada (.dae) pos\xE9s au centre des sections. Ceux d\u2019origine viennent du site de 2008 ; tu peux importer les tiens.",[],p("div",{class:"cols"},e,t))}function zh(){Fn(".dae,.DAE,image/*,.tga",!0,lc)}function Ly(){let n=p("input",{type:"text",placeholder:"Ex. Puebla"}),e=p("input",{type:"number",step:"any",placeholder:"19.04"}),t=p("input",{type:"number",step:"any",placeholder:"-98.20"});return Vr("Ajouter un lieu",p("div",null,ct("Nom affich\xE9",n),p("div",{class:"grid2"},ct("Latitude",e),ct("Longitude",t)),p("p",{class:"hint"},"Dans Google Maps, un clic droit sur un endroit affiche ses coordonn\xE9es : la latitude d\u2019abord, puis la longitude.")),[{label:"Annuler",value:null,cls:"ghost"},{label:"Ajouter",cls:"dark",value:()=>n.value.trim()&&e.value!==""&&t.value!==""&&Math.abs(+e.value)<=90&&Math.abs(+t.value)<=180?{city:n.value.trim(),lat:+e.value,lon:+t.value}:null}])}function Py(){let n=document.createElement("canvas");n.width=n.height=4;let e=n.getContext("2d");return e.fillStyle="#fff",e.fillRect(0,0,4,4),new Promise(t=>n.toBlob(t,"image/png"))}async function lc(n){let e=S.content,t=n.find(h=>/\.dae$/i.test(h.name));if(!t){st("Il faut un fichier .dae (Collada) dans la s\xE9lection.","bad");return}if(t.size>3e7){st("Ce .dae p\xE8se plus de 30 Mo : all\xE8ge le maillage avant de l\u2019importer.","bad",7e3);return}let i=new DOMParser().parseFromString(await t.text(),"application/xml");if(i.querySelector("parsererror")||i.documentElement.nodeName!=="COLLADA"){st("Ce fichier n\u2019est pas un Collada lisible.","bad");return}let s=On(t.name.replace(/\.dae$/i,""),e.models.map(h=>h.id)),r=`models/${s}/`,o=[],a=[],l=new Map;for(let h of i.querySelectorAll("library_images image init_from")){let f=(h.querySelector("ref")||h).textContent.trim();if(!f)continue;let m=decodeURIComponent(f.replace(/^file:\/*/,"").split(/[\\/]/).pop()),y=l.get(m.toLowerCase());if(y===void 0){let _=n.find(d=>d.name.toLowerCase()===m.toLowerCase());y=Yn(m.replace(/\.[^.]+$/,""))+"."+(_?os(m)||"jpg":"png");let g=2;for(;o.includes(y);)y=Yn(m.replace(/\.[^.]+$/,""))+"-"+g+++"."+(os(m)||"jpg");_||a.push(m),gn(r+y,_||await Py()),o.push(y),l.set(m.toLowerCase(),y)}(h.querySelector("ref")||h).textContent=y}let c=new XMLSerializer().serializeToString(i),u={id:s,name:t.name.replace(/\.dae$/i,""),file:r+s+".dae",textures:o,scaleMode:"fit",height:420,rotationY:0,untextured:o.length?"wire":"white",builtin:!1};gn(u.file,new Blob([c],{type:"model/vnd.collada+xml"}));try{tc(c,u)}catch(h){[u.file,...o.map(f=>r+f)].forEach(f=>S.staged.delete(f)),st("Three.js ne parvient pas \xE0 lire ce mod\xE8le : "+h.message,"bad",8e3);return}e.models.push(u),S.sel.model=s,_e({nav:!0}),S.view!=="models"?Qs("models"):Bt(),st(a.length?`Mod\xE8le import\xE9. ${a.length} texture${a.length>1?"s":""} manque${a.length>1?"nt":""} (${a.join(", ")}) : remplac\xE9e${a.length>1?"s":""} par du blanc. R\xE9importe le mod\xE8le avec ces fichiers pour les voir.`:"Mod\xE8le import\xE9. Choisis-le dans une section pour l\u2019utiliser.",a.length?"bad":"ok",9e3)}function Iy(){let n=[];return S.content.posts.forEach(e=>{["thumb","thumbBack"].forEach(t=>{/^https?:/.test(e[t]||"")&&n.push({p:e,get:()=>e[t],set:i=>{e[t]=i}})}),e.media.forEach(t=>{/^https?:/.test(t.src)&&Gh(t.src)==="image"&&n.push({p:e,get:()=>t.src,set:i=>{t.src=i}})})}),n}function Ny(){let n=Iy();if(!n.length)return null;let e=new Set(n.map(s=>s.get())),t=p("div",{class:"progress",hidden:!0},p("i")),i=Ue("Rapatrier dans le d\xE9p\xF4t",async()=>{i.disabled=!0,t.hidden=!1;let s=new Map,r=0,o=0,a=0;for(let l of e){let c=n.find(u=>u.get()===l).p;try{let u=await fetch(l,{mode:"cors"});if(!u.ok)throw new Error(u.status);let h=await u.blob(),f=decodeURIComponent(l.split("?")[0].split("/").pop()).replace(/\+/g," ")||"image.jpg",m=await Kn(new File([h],f,{type:h.type||"image/jpeg"}),`media/${c.id}`,"media");gn(m.path,m.blob),s.set(l,m.path),r++}catch{o++}t.firstChild.style.width=Math.round(++a/e.size*100)+"%"}n.forEach(l=>{s.has(l.get())&&l.set(s.get(l.get()))}),_e({nav:!0}),st(o?`${r} image${r>1?"s":""} rapatri\xE9e${r>1?"s":""}. ${o} n\u2019ont pas pu \xEAtre lues depuis ce navigateur (le serveur d\u2019origine les prot\xE8ge) : t\xE9l\xE9charge-les et renvoie-les depuis la fiche du contenu.`:`${r} images rapatri\xE9es. Publie pour les envoyer dans le d\xE9p\xF4t.`,o?"bad":"ok",1e4),Bt()},"sm dark");return p("div",{class:"card",style:{marginBottom:"18px"}},p("header",null,p("h2",null,`${e.size} image${e.size>1?"s":""} encore en ligne ailleurs`),p("div",{class:"acts"},i)),p("div",{class:"body"},p("p",{class:"hint",style:{marginTop:0}},"Ces images viennent de l\u2019ancien site (Squarespace) et sont affich\xE9es depuis son serveur. Pour que ton site n\u2019en d\xE9pende plus, rapatrie-les : elles seront r\xE9duites puis envoy\xE9es dans media/ \xE0 la prochaine publication."),t))}function Dy(){let n=S.content,e=us(),t=p("div",{class:"card"},p("div",{class:"empty"},"Lecture des fichiers du d\xE9p\xF4t\u2026")),i=s=>{let r=[];return n.posts.forEach(o=>{(o.thumb===s||o.thumbBack===s||o.media.some(a=>a.src===s))&&r.push(mt(o.title)||o.id)}),n.models.forEach(o=>{(o.file===s||(o.textures||[]).some(a=>o.file.replace(/[^/]+$/,"")+a===s))&&r.push("Mod\xE8le "+o.name)}),n.settings.logo===s&&r.push("Logo"),(n.settings.home&&n.settings.home.story&&n.settings.home.story.images||[]).includes(s)&&r.push("L\u2019histoire de ce site"),r};return(async()=>{let s=[];try{s=S.files||(S.files=await S.backend.listFiles(["media/","models/"]))}catch(m){We(t,p("div",{class:"empty"},"Impossible de lister les fichiers : "+Ks(m)));return}let r=new Map(s.filter(m=>!/(^|\/)\./.test(m.path)&&!m.path.endsWith(_i)).map(m=>[m.path,{...m,state:"online"}]));S.staged.forEach((m,y)=>{y.endsWith(_i)||r.set(y,{path:y,size:m.blob.size,state:"new"})});let o=[...r.values()].sort((m,y)=>m.path.localeCompare(y.path)),a=m=>/^models\/[^/]+$/.test(m),l=o.filter(m=>m.state==="online"&&!e.has(m.path)&&!S.deletes.has(m.path)&&!a(m.path)),c=new Set,u=Ue("Supprimer la s\xE9lection",()=>{c.forEach(m=>{S.deletes.add(m),s.some(y=>y.path===m+_i)&&S.deletes.add(m+_i)}),_e({nav:!0}),st(`${c.size} fichier${c.size>1?"s":""} sera supprim\xE9 \xE0 la prochaine publication.`),Bt()},"sm danger",{disabled:!0}),h=()=>{u.disabled=!c.size,u.textContent=c.size?`Supprimer la s\xE9lection (${c.size})`:"Supprimer la s\xE9lection"},f=p("table",{class:"files"},p("thead",null,p("tr",null,p("th",{style:{width:"30px"}}),p("th",{style:{width:"60px"}}),p("th",null,"Fichier"),p("th",null,"Utilis\xE9 par"),p("th",null,"Taille"),p("th",null,"\xC9tat"))),p("tbody",null,o.map(m=>{let y=i(m.path),_=/\.(jpe?g|png|webp|gif|svg)$/i.test(m.path),g=S.deletes.has(m.path),T=l.includes(m)?p("input",{type:"checkbox","aria-label":"S\xE9lectionner "+m.path}):null;return T&&T.addEventListener("change",()=>{T.checked?c.add(m.path):c.delete(m.path),h()}),p("tr",{style:g?{opacity:.5}:null},p("td",null,T),p("td",null,_?p("img",{class:"mini",src:Pn(m.path),alt:"",loading:"lazy"}):p("span",{class:"badge"},os(m.path))),p("td",{class:"p"},m.path),p("td",null,y.length?y.join(", "):p("span",{style:{color:"var(--ink-4)"}},"\u2014")),p("td",null,Ql(m.size)),p("td",null,g?p("span",null,p("span",{class:"badge warn"},"\xE0 supprimer")," ",Ue("Garder",()=>{S.deletes.delete(m.path),_e({nav:!0}),Bt()},"sm ghost")):m.state==="new"?p("span",{class:"badge new"},e.has(m.path)?"\xE0 envoyer":"ajout\xE9, plus utilis\xE9"):y.length?p("span",{class:"badge"},"en ligne"):a(m.path)?p("span",{class:"badge off"},"origine"):p("span",{class:"badge off"},"inutilis\xE9")))})));We(t,p("header",null,p("h2",null,`${o.length} fichier${o.length>1?"s":""}`),p("div",{class:"acts"},l.length?Ue(`Tout s\xE9lectionner : ${l.length} inutilis\xE9${l.length>1?"s":""}`,()=>{f.querySelectorAll("tbody input[type=checkbox]").forEach(m=>{m.checked=!0,c.add(m.closest("tr").querySelector(".p").textContent)}),h()},"sm"):null,u,S.backend.kind!=="demo"?Ue(S.backend.kind==="folder"?"Relire le dossier":"Relire le d\xE9p\xF4t",()=>{S.files=null,Bt()},"sm ghost"):null)),o.length?p("div",{style:{overflowX:"auto"}},f):p("div",{class:"empty"},S.backend.kind==="demo"?"En d\xE9mo, seuls les fichiers ajout\xE9s depuis ce navigateur apparaissent ici.":"Aucun fichier dans media/ ni models/."))})(),bi("M\xE9dias","Tous les fichiers du dossier media/ et des mod\xE8les 3D. Les fichiers qui ne servent plus peuvent \xEAtre supprim\xE9s pour garder le d\xE9p\xF4t l\xE9ger.",[],Ny(),t)}function Uy(n){n.homeVideo=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},n.homeVideo||{});let e=n.homeVideo,t=p("span",{class:"hint",style:{margin:0}}),i=()=>{t.textContent=e.src?e.src.split("/").pop():"Aucune : les photos des projets d\xE9filent en travelling lent."},s=()=>Fn("video/mp4,video/webm,.mp4,.webm",!1,async r=>{if(r[0])try{let o=await Kn(r[0],"media/accueil","media");gn(o.path,o.blob),e.src=o.path,_e(),i(),st("Vid\xE9o ajout\xE9e : elle part sur le site \xE0 la prochaine publication.")}catch(o){st(o.message,"bad",8e3)}});return i(),p("div",{class:"f"},p("span",{class:"lbl"},"Vid\xE9o de l\u2019accueil, en ronds ou en carr\xE9s, plein \xE9cran"),p("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},Ue(e.src?"Remplacer la vid\xE9o\u2026":"Choisir une vid\xE9o\u2026",s,"sm"),e.src?Ue("Retirer",()=>{e.src="",_e(),i()},"sm ghost"):null,t),p("p",{class:"hint"},"MP4 sans son ou avec, en boucle : un extrait de 20 \xE0 30 secondes en 720p suffit (moins de 15 Mo). Elle d\xE9marre \xE0 un endroit au hasard. Une vid\xE9o YouTube ne marche pas ici : il faut le fichier."),p("div",{class:"grid2",style:{marginTop:"10px"}},ct("Forme",vn([{value:"round",label:"Des ronds"},{value:"square",label:"Des carr\xE9s"}],()=>e.shape==="square"?"square":"round",r=>{r==="square"?e.shape="square":delete e.shape}))),p("div",{style:{marginTop:"10px"}},kn("R\xE9glage au hasard \xE0 chaque visite (grille, contraste, delay, couleur, sens)",()=>e.random!==!1,r=>{e.random=r,Bt()})),e.random!==!1?p("p",{class:"hint"},"Chaque visiteur arrive sur une combinaison diff\xE9rente, puis la change avec le panneau de r\xE9glages. Coupe cet interrupteur pour fixer le r\xE9glage ci-dessous."):p("div",{style:{marginTop:"10px"}},kr(e,"cell","Carr\xE9s (px)",14,3,40,1,"La taille de la grille. Petit : plus de carr\xE9s, image plus fine."),kr(e,"size","Taille maximale des carr\xE9s (%)",92,40,100,2,"La place que prend un carr\xE9 dans sa case quand le pixel est au plus clair."),kr(e,"contrast","Contraste",1,.4,3,.1,"Au-dessus de 1, les zones sombres disparaissent plus vite."),kr(e,"delay","Delay (lissage)",4,1,8,1,"Comme sur Fat-Man : valeur = valeur \u2212 (valeur \u2212 cible) / delay. 1 = imm\xE9diat. Coup\xE9 d\u2019office sur un ordinateur trop lent."),p("div",{class:"grid2"},ct("Couleur des carr\xE9s",vn([{value:"white",label:"Blanc"},{value:"grey",label:"Gris"},{value:"accent",label:"Couleur d\u2019accent"},{value:"source",label:"Couleurs de la vid\xE9o"}],()=>e.color,r=>{e.color=r})),ct("Les carr\xE9s grossissent",vn([{value:"light",label:"\xE0 la lumi\xE8re"},{value:"dark",label:"dans l\u2019ombre"}],()=>e.mode,r=>{e.mode=r})))),p("div",{style:{marginTop:"10px"}},kn("Les visiteurs ont un panneau de r\xE9glages (faders) pour la vid\xE9o, le son et leur cam\xE9ra",()=>e.controls!==!1,r=>{e.controls=r})))}function kr(n,e,t,i,s,r,o,a){let l=o<1?1:0,c=y=>(+y).toFixed(l),u=()=>n[e]!=null&&n[e]!==""?+n[e]:i,h=p("input",{type:"range",min:s,max:r,step:o,value:u()}),f=p("b",null,c(u())),m=y=>{y=+(+y).toFixed(l),n[e]=y,h.value=y,f.textContent=c(y)};return h.addEventListener("input",()=>{m(h.value),_e()}),p("div",{class:"f fiche-row"},p("span",{class:"lbl"},t),p("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},h,f,Ue("\u21BA "+c(i),()=>{m(i),_e()},"sm ghost",{title:"Revenir \xE0 la valeur d\u2019origine"})),p("p",{class:"hint"},a))}function cc(n){Ih(n).forEach(t=>{document.querySelector(`link[data-hc-font][href="${CSS.escape(t)}"]`)||document.head.appendChild(p("link",{rel:"stylesheet",href:t,"data-hc-font":""}))})}var Oy=[[100,"Thin 100"],[200,"Extra light 200"],[300,"Light 300"],[400,"Regular 400"],[500,"Medium 500"],[600,"Semibold 600"],[700,"Bold 700"],[800,"Extra bold 800"],[900,"Black 900"]];function ky(n){let e=p("div"),t=[...new Set(Js.map(r=>r.group))],i=()=>We(e,t.map(r=>p("div",{class:"typo-group"},p("h4",null,r),Js.filter(o=>o.group===r).map(s)))),s=r=>{let o=p("div",{class:"typo-row"}),a=r.only||["font","size","lh","weight","italic","ls","upper"],l=v=>Hi(n,r.id)[v],c=(v,M)=>{n.typo=n.typo||{};let D=n.typo[r.id]=n.typo[r.id]||{};M===""||M===null||M===void 0||M===r[v]||v==="italic"&&!M&&!r.italic||v==="upper"&&!M&&!r.upper||v==="ls"&&+M===(r.ls||0)?delete D[v]:D[v]=M,Object.keys(D).length||delete n.typo[r.id],cc(n),_e(),d(),(r.id==="logo"||r.id==="sig1")&&Zs()},u=(v,M,D={})=>{let U=p("input",{type:"number",step:D.step||1,min:D.min,max:D.max,value:l(v)??"",placeholder:D.ph});return U.addEventListener("input",()=>c(v,U.value===""?"":+U.value)),p("label",null,M,U)},h=(v,M)=>{let D=p("input",{type:"checkbox",checked:!!l(v)});return D.addEventListener("change",()=>c(v,D.checked)),p("label",{class:"ck"},D,M)},f=()=>{let v=l("font"),M=/^g:/.test(v||""),D=p("select",null,[...new Set(Ur.map(O=>O.group))].map(O=>p("optgroup",{label:O},Ur.filter(k=>k.group===O).map(k=>p("option",{value:k.id,selected:k.id===v},k.label+(k.id===r.font?" \xB7 d\xE9faut":""))))),p("optgroup",{label:"Google Fonts"},p("option",{value:"__g",selected:M},"Autre police Google Fonts\u2026"))),U=p("input",{type:"text",placeholder:"Nom exact, ex. Inter, Playfair Display",value:M?v.slice(2):"",spellcheck:"false"});return U.hidden=!M,D.addEventListener("change",()=>{D.value==="__g"?(U.hidden=!1,U.focus(),U.value.trim()&&c("font","g:"+U.value.trim())):(U.hidden=!0,c("font",D.value))}),U.addEventListener("change",()=>{let O=U.value.trim();O&&c("font","g:"+O)}),p("label",{class:"fam"},"Police",D,U)},m=()=>{let v=p("select",null,Oy.map(([M,D])=>p("option",{value:M,selected:+l("weight")===M},D)));return v.addEventListener("change",()=>c("weight",+v.value)),p("label",null,"Graisse",v)},y=()=>{let v=p("input",{type:"text",value:l("text")??"",maxlength:4,style:{width:"70px"}});return v.addEventListener("input",()=>c("text",v.value)),p("label",null,"Lettres",v)},_=p("div",{class:"typo-sample"+(/^(bs|bseg|offh|offp|menu|ui|sig1|sig2)$/.test(r.id)?" light":"")}),g=Ue("R\xE9tablir",()=>{n.typo&&delete n.typo[r.id],_e(),i(),(r.id==="logo"||r.id==="sig1")&&Zs()},"sm ghost rst"),d=()=>{let v=Hi(n,r.id);if(o.classList.toggle("changed",!!v.changed),g.hidden=!v.changed,r.id==="logo"){We(_,p("img",{src:co(n.accent||"#ffcc00",n),alt:"",style:{width:"64px",height:"64px",display:"block"}})),_.style.background="#fff";return}let M=r.scale?22*(v.scale||100)/100:v.size||14;Object.assign(_.style,{fontFamily:v.css,fontSize:Math.min(M,56)+"px",lineHeight:v.lh?Math.min(v.lh,64)+"px":"1.2",fontWeight:v.weight||400,fontStyle:v.italic?"italic":"normal",letterSpacing:(v.ls||0)+"em",textTransform:v.upper?"uppercase":"none"}),_.textContent=r.sample||"Hand Coded",document.fonts&&document.fonts.load(`${v.italic?"italic ":""}${v.weight||400} ${M}px ${v.css}`).catch(()=>{})},T=p("div",{class:"typo-ctl"},a.includes("font")?f():null,a.includes("size")?u("size",r.id==="logo"?"Taille":"Taille (px)",{min:6,max:160}):null,a.includes("lh")?u("lh","Interligne (px)",{min:6,max:200,step:.5}):null,a.includes("weight")?m():null,a.includes("ls")?u("ls","Espacement (em)",{step:.01,min:-.2,max:1,ph:"0"}):null,a.includes("scale")?u("scale","Taille (%)",{min:50,max:200,step:5}):null,a.includes("text")?y():null,a.includes("italic")?h("italic","Italique"):null,a.includes("upper")?h("upper","Majuscules"):null);return We(o,p("div",{class:"nm"},p("b",null,r.label),r.hint?p("small",null,r.hint):null,g),T,_),d(),o};return i(),p("div",{class:"block"},p("h3",null,"Typographie",p("small",null,"police, taille, interligne, graisse de chaque texte du site")),p("p",{class:"hint"},"Par d\xE9faut, le site garde la typographie d\u2019origine. Un point jaune signale un r\xE9glage modifi\xE9 ; \xAB R\xE9tablir \xBB revient \xE0 l\u2019origine. Les polices h\xE9berg\xE9es avec le site marchent partout, m\xEAme hors ligne. Une police Google Fonts se charge depuis Google quand le site est en ligne : tape son nom exact, tel qu\u2019il appara\xEEt sur fonts.google.com."),e,p("div",{style:{marginTop:"12px"}},Ue("Tout r\xE9tablir",()=>{delete n.typo,_e(),i(),Zs()},"sm ghost")))}function Fy(n){let e=n.home.story,t=p("div",{class:"story-shots"});jh(t,".story-shot","img",(s,r)=>{Gi(e.images,s,r),_e(),i()});let i=()=>We(t,...e.images.map((s,r)=>p("div",{class:"story-shot"},p("img",{src:Pn(s),alt:""}),p("div",{class:"acts"},r?Ue("\u2190",()=>{e.images.splice(r-1,0,e.images.splice(r,1)[0]),_e(),i()},"sm icon ghost",{"aria-label":"Avancer"}):null,Ue("\xD7",()=>{e.images.splice(r,1),_e(),i()},"sm icon ghost danger",{"aria-label":"Retirer"})))),Ue("+ Images\u2026",()=>Fn("image/*",!0,async s=>{for(let r of s)try{let o=await Kn(r,"media/site/story","media");gn(o.path,o.blob),e.images.push(o.path)}catch(o){st(o.message,"bad")}_e(),i()}),"sm"));return i(),p("div",{class:"f"},p("span",{class:"lbl"},"Histoire du site",p("small",null," le \xAB ? \xBB en bas \xE0 droite de l\u2019accueil")),zn("Titre",e,"title"),p("div",{class:"f"},p("span",{class:"lbl"},"Texte"),nd(e.body,"L\u2019histoire de ce site\u2026")),p("div",{class:"f"},p("span",{class:"lbl"},"Captures"),t,p("p",{class:"hint"},"Elles s\u2019affichent \xE0 c\xF4t\xE9 du texte ; un clic les ouvre en grand.")),p("div",{class:"grid2"},ct("Lien",St(()=>e.link,s=>{e.link=s.trim()},{placeholder:"https://\u2026",spell:!1})),zn("Texte du lien",e,"linkLabel")),p("p",{class:"hint"},"Laisse le titre et le texte vides pour retirer le \xAB ? \xBB."))}function By(){let n=S.content,e=n.settings,t=p("div",{class:"logo-prev"}),i=p("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"}}),s=()=>{t.style.backgroundImage=`url("${e.logo?Pn(e.logo):Wh()}")`,Zs(),We(i,Ue(e.logo?"Remplacer\u2026":"Choisir un logo\u2026",()=>Fn("image/*",!1,r),"sm"),e.logo?Ue("Logo par d\xE9faut",()=>{e.logo="",_e(),s()},"sm ghost"):null,p("span",{class:"hint",style:{margin:0}},"SVG ou PNG carr\xE9, fond transparent. Affich\xE9 en haut \xE0 droite et sur l\u2019accueil."))},r=async d=>{if(d[0])try{let T=await Kn(d[0],"media/site","logo");gn(T.path,T.blob),e.logo=T.path,_e(),s()}catch(T){st(T.message,"bad")}};s();let o=p("input",{type:"color",value:e.accent||"#ffcc00","aria-label":"Couleur d\u2019accent"}),a=p("div",{class:"swatches"}),l=d=>{e.accent=d,o.value=d,document.documentElement.style.setProperty("--accent",d),s(),_e(),c()},c=()=>We(a,o,...["#ffcc00","#f1b800","#ff5a1f","#e8175d","#00b3a4","#2f6bff","#111111"].map(d=>p("button",{type:"button",style:{background:d},"aria-label":d,"aria-pressed":String((e.accent||"").toLowerCase()===d),onclick:()=>l(d)})));o.addEventListener("input",()=>l(o.value)),c();let u=p("div"),h=()=>We(u,...e.offices.map((d,T)=>{typeof d.name!="object"&&(d.name=Object.fromEntries(Kt.map(M=>[M,d.name||""])));let v=p("textarea",{rows:2,placeholder:"Adresse, une ligne par ligne"});return v.value=(d.lines||[]).join(`
`),v.addEventListener("input",()=>{d.lines=v.value.split(`
`).map(M=>M.trim()).filter(Boolean),_e()}),p("div",{class:"office-row"},Bn().map(M=>p("div",{class:"lang","data-l":M.toUpperCase()},St(()=>d.name[M]??"",D=>{d.name[M]=D},{placeholder:"Nom ("+rs[M]+")"}))),p("div",{class:"full"},v),p("div",{class:"full"},St(()=>d.mail,M=>{d.mail=M.trim()},{type:"email",placeholder:"contact@\u2026"})),Ue("Retirer ce bureau",()=>{e.offices.splice(T,1),_e(),h()},"sm ghost danger del"))}),Ue("+ Ajouter un bureau",()=>{e.offices.push({name:jn(),lines:[],mail:""}),_e(),h()},"sm",{style:{marginTop:"10px"}}));h();let f=p("div"),m=()=>We(f,...e.social.map((d,T)=>p("div",{class:"social-row"},St(()=>d.label,v=>{d.label=v},{placeholder:"Instagram"}),St(()=>d.url,v=>{d.url=v.trim()},{type:"url",placeholder:"https://\u2026"}),Ue("\xD7",()=>{e.social.splice(T,1),_e(),m()},"sm icon ghost danger",{"aria-label":"Retirer"}))),Ue("+ Ajouter un lien",()=>{e.social.push({label:"",url:""}),_e(),m()},"sm",{style:{marginTop:"10px"}}));m();let y=p("div",{class:"chips"});We(y,...Kt.map(d=>p("button",{type:"button",class:"chip","aria-pressed":String(e.langs.includes(d)),onclick:()=>{if(e.langs.includes(d)){if(e.langs.length===1)return;e.langs=e.langs.filter(T=>T!==d)}else e.langs=Kt.filter(T=>T===d||e.langs.includes(T));e.langs.includes(e.defaultLang)||(e.defaultLang=e.langs[0]),_e(),Bt()}},rs[d])),e.langs.length>1?p("span",{class:"hint",style:{margin:"0 0 0 6px"}},"Si la langue du visiteur n\u2019est pas propos\xE9e : ",vn(e.langs.map(d=>({value:d,label:rs[d]})),()=>e.defaultLang,d=>{e.defaultLang=d})):null);let g=d=>{let T=p("textarea",{rows:3});return T.value=(e.taglines[d]||[]).join(`
`),T.addEventListener("input",()=>{e.taglines[d]=T.value.split(`
`).map(v=>v.trim()).filter(Boolean),_e()}),p("div",{class:"lang","data-l":d.toUpperCase()},T)};return bi("R\xE9glages","Identit\xE9, accueil et coordonn\xE9es, dans chaque langue du site.",[],p("div",{class:"card"},p("div",{class:"block"},p("h3",null,"Identit\xE9"),p("div",{class:"grid2"},ct("Nom du studio",St(()=>e.name,d=>{e.name=d})),ct("Depuis",St(()=>e.since,d=>{e.since=d},{placeholder:"2012"}))),p("div",{class:"f"},p("span",{class:"lbl"},"Logo"),p("div",{style:{display:"flex",gap:"14px",alignItems:"center"}},t,i)),p("div",{class:"f"},p("span",{class:"lbl"},"Couleur d\u2019accent"),a,p("p",{class:"hint"},"Bandeau LED, tirets des cartes, lieux, fl\xE8che d\u2019entr\xE9e, faders."))),p("div",{class:"block"},p("h3",null,"Apparence"),ct("Le site s\u2019ouvre en",vn([{value:"auto",label:"Blanc le jour, noir la nuit, selon l\u2019heure chez le visiteur"},{value:"pos",label:"Blanc"},{value:"neg",label:"Noir (n\xE9gatif)"}],()=>e.negative==="auto"?"auto":e.negative?"neg":"pos",d=>{e.negative=d==="auto"?"auto":d==="neg"}),"Jour et nuit : le site regarde si le soleil est lev\xE9 l\xE0 o\xF9 se trouve le visiteur, d\u2019apr\xE8s le fuseau horaire de son navigateur (sans lui demander sa position), et bascule de lui-m\xEAme au lever et au coucher du soleil si la page reste ouverte. En noir, toute la page s\u2019inverse : fond noir, sc\xE8ne 3D et textes en n\xE9gatif. Les images et vid\xE9os des contenus gardent leurs vraies couleurs, et la couleur d\u2019accent reste la m\xEAme."),p("div",{style:{marginTop:"12px"}},kn("Signer les vignettes 3D (\u0153uvre \xB7 auteur \xB7 cr\xE9dit photo)",()=>e.signImages!==!1,d=>{e.signImages=d})),p("p",{class:"hint"},"Une mention discr\xE8te en bas de chaque vignette des cartes 3D, pour que l\u2019\u0153uvre d\u2019un artiste ne passe pas pour une cr\xE9ation du studio. L\u2019auteur et le cr\xE9dit photo (celui de la premi\xE8re image) se r\xE8glent dans chaque contenu."),p("div",{style:{marginTop:"12px"}},kn("Les visiteurs basculent n\xE9gatif / positif en cliquant sur le logo",()=>e.negativeToggle!==!1,d=>{e.negativeToggle=d})),p("p",{class:"hint"},"Le logo par d\xE9faut a un anneau \xE0 la couleur d\u2019accent sur fond blanc, et blanc sur fond noir. Le choix du visiteur est gard\xE9 pour sa prochaine visite (en mode jour et nuit, jusqu\u2019au prochain lever ou coucher du soleil).")),vy(e),ky(e),my(e),p("div",{class:"block"},p("h3",null,"Showreel"),ct("Lien de la vid\xE9o",St(()=>e.showreel,d=>{e.showreel=d.trim()},{placeholder:"https://youtu.be/\u2026 ou media/showreel/showreel.mp4",spell:!1}),"YouTube, Vimeo ou fichier MP4 du site. Le bouton Showreel joue la vid\xE9o sur tout le fond de l\u2019accueil, sous une grille fine, avec une barre de lecture ; depuis la 3D, il ram\xE8ne \xE0 l\u2019accueil et la lance. Le son est coup\xE9 au d\xE9part. Un fichier MP4 n\u2019affiche aucun logo ; YouTube montre parfois son titre au d\xE9marrage. Laisse vide pour retirer le bouton."),p("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",marginTop:"-6px"}},Ue("Choisir le fichier MP4\u2026",()=>Fn("video/mp4,video/webm,.mp4,.webm",!1,async d=>{if(d[0])try{let T=await Kn(d[0],"media/showreel","media");gn(T.path,T.blob),e.showreel=T.path,_e(),Bt(),st("Showreel ajout\xE9 : il part sur le site \xE0 la prochaine publication.")}catch(T){st(T.message,"bad",8e3)}}),"sm"),p("span",{class:"hint",style:{margin:0}},"H.264, 720p ou 1080p, moins de 40 Mo de pr\xE9f\xE9rence (GitHub refuse au-del\xE0 de 100 Mo).")),ct("Version verticale, pour t\xE9l\xE9phone debout (facultatif)",St(()=>e.showreelMobile||"",d=>{d=d.trim(),d?e.showreelMobile=d:delete e.showreelMobile},{placeholder:"https://youtube.com/shorts/\u2026 ou media/showreel/showreel-vertical.mp4",spell:!1}),"Une vid\xE9o en hauteur (9:16), jou\xE9e quand le t\xE9l\xE9phone est tenu debout. Sans elle, le showreel remplit l\u2019\xE9cran en \xE9tant recadr\xE9, avec une petite note qui propose de tourner le t\xE9l\xE9phone."),p("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",marginTop:"-6px"}},Ue("Choisir le fichier MP4 vertical\u2026",()=>Fn("video/mp4,video/webm,.mp4,.webm",!1,async d=>{if(d[0])try{let T=await Kn(d[0],"media/showreel","media");gn(T.path,T.blob),e.showreelMobile=T.path,_e(),Bt(),st("Version verticale ajout\xE9e : elle part sur le site \xE0 la prochaine publication.")}catch(T){st(T.message,"bad",8e3)}}),"sm"))),p("div",{class:"block"},p("h3",null,"Langues du site"),y,p("p",{class:"hint"},"Le site s\u2019ouvre dans la langue du navigateur du visiteur quand elle est propos\xE9e. Il peut ensuite en changer en bas \xE0 gauche. Le back-office affiche un champ par langue activ\xE9e.")),p("div",{class:"block"},p("h3",null,"Signature",p("small",null,"en haut \xE0 gauche du site, une ligne par ligne")),p("div",{class:"pair"},Bn().map(g))),p("div",{class:"block"},p("h3",null,"Accueil"),p("p",{class:"hint",style:{marginTop:0}},"L\u2019accueil montre la vid\xE9o en carr\xE9s sur tout l\u2019\xE9cran, la phrase du studio sur le bandeau LED et une fl\xE8che vers le bas. On entre en cliquant la fl\xE8che ou en faisant d\xE9filer vers le bas (glisser vers le haut sur t\xE9l\xE9phone)."),zn("Phrase du studio",e.home,"sub",{rows:5,hint:"Ce que fait le studio, en une phrase, dans la langue du visiteur. Elle s\u2019\xE9crit au centre \xE0 l\u2019ouverture du site et quand on touche \xAB i \xBB, une ligne apr\xE8s l\u2019autre : va \xE0 la ligne (Entr\xE9e) l\xE0 o\xF9 tu veux couper. Sur le bandeau LED, elle d\xE9file d\u2019un seul tenant."}),zn("Citations du bandeau LED",e.home,"quotes",{rows:5,hint:"Sur le bandeau LED, apr\xE8s la phrase du studio, ces citations d\xE9filent l\u2019une apr\xE8s l\u2019autre : une par ligne, avec sa source. Les accents passent ; les guillemets s\u2019affichent droits."}),p("div",{style:{margin:"-4px 0 14px"}},kn("Masquer le bandeau LED du haut",()=>!!e.home.tickerOff,d=>{d?e.home.tickerOff=!0:delete e.home.tickerOff})),kr(e.home,"tickerSpeed","Vitesse du bandeau LED",26,4,80,1,"En colonnes de points par seconde. Plus petit : le texte d\xE9file lentement ; plus grand : il file. 26 au d\xE9part."),zn("Mot au-dessus de la fl\xE8che",e.home,"enter",{hint:"En petites capitales, au-dessus de la fl\xE8che d\u2019entr\xE9e."}),Fy(e),Uy(e),ct("Section d\u2019arriv\xE9e",vn(n.sections.map(d=>({value:d.id,label:mt(d.name)||d.id})),()=>e.startSection,d=>{e.startSection=d}))),p("div",{class:"block"},p("h3",null,"Bureaux"),p("p",{class:"hint",style:{marginTop:0}},"Ils ne s\u2019affichent plus sur l\u2019accueil : ils servent au r\xE9f\xE9rencement (Google, assistants IA) et au r\xE9sum\xE9 texte du site. Les coordonn\xE9es visibles sont dans la section Contact."),u),p("div",{class:"block"},p("h3",null,"R\xE9seaux et liens"),f)))}function zy(){let n=S.content.settings,e=n.analytics,t=n.seo,i=()=>String(e.goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,""),s=Qt+":gc-token",r="";try{r=localStorage.getItem(s)||""}catch{}let o=p("div",{class:"gc-board"}),a=()=>{let c=i();if(!c){We(o,p("p",{class:"hint"},"Renseigne le code GoatCounter ci-dessus pour voir les visites ici."));return}let u=`https://${c}.goatcounter.com/?hideui=1${r?"&access-token="+encodeURIComponent(r):""}`;We(o,p("div",{style:{display:"flex",gap:"8px",alignItems:"center",margin:"0 0 10px"}},p("a",{class:"btn sm",href:`https://${c}.goatcounter.com`,target:"_blank",rel:"noopener"},"Ouvrir le tableau de bord complet \u2197"),p("span",{class:"hint",style:{margin:0}},"Si le cadre reste vide : v\xE9rifie le jeton et l\u2019autorisation d\u2019int\xE9gration (\xE9tapes ci-dessous).")),p("iframe",{src:u,title:"Statistiques de visite",loading:"lazy",referrerpolicy:"no-referrer"}))};a();let l=p("input",{type:"password",value:r,placeholder:"jeton de lecture du tableau de bord",spellcheck:"false",autocomplete:"off"});return l.addEventListener("change",()=>{r=l.value.trim();try{localStorage.setItem(s,r)}catch{}a()}),bi("Audience","Qui visite le site, ce qu\u2019on y regarde, et comment les moteurs de recherche et les assistants IA le lisent.",[],p("div",{class:"card"},p("div",{class:"block"},p("h3",null,"Visites",p("small",null," GoatCounter : sans cookie, pas de bandeau de consentement")),p("div",{class:"grid2"},ct("Code GoatCounter",St(()=>e.goatcounter,c=>{e.goatcounter=c.trim()},{placeholder:"handcoded",spell:!1,onBlur:a}),"Le nom choisi \xE0 l\u2019inscription : handcoded pour handcoded.goatcounter.com. Le site compte les visites d\xE8s la prochaine publication."),ct("Jeton de lecture",l,"Reste dans ce navigateur, jamais publi\xE9.")),o,p("details",{class:"howto"},p("summary",null,"Mise en place, une seule fois (cinq minutes)"),p("ol",null,p("li",null,"Cr\xE9e un compte gratuit sur goatcounter.com et choisis un code (par exemple handcoded)."),p("li",null,"Dans GoatCounter \u203A Settings : \xAB Sites that can embed GoatCounter \xBB : ajoute ",p("code",null,new URL(yi()).host),"."),p("li",null,"Toujours dans Settings : \xAB Dashboard viewable by \xBB : \xAB logged in users or with secret token \xBB. Copie le jeton et colle-le ci-dessus."),p("li",null,"\xC9cris le code ci-dessus, puis Publier.")),p("p",{class:"hint"},"Sont compt\xE9s : l\u2019accueil, chaque section, chaque fiche ouverte (avec son adresse ?p=\u2026), et deux \xE9v\xE9nements : slogan tap\xE9, photo souvenir. Aucune donn\xE9e personnelle, pas d\u2019adresse IP conserv\xE9e."))),p("div",{class:"block"},p("h3",null,"R\xE9f\xE9rencement",p("small",null," moteurs de recherche et assistants IA")),ct("Adresse du site",St(()=>t.url,c=>{t.url=c.trim()},{placeholder:yi(),spell:!1}),"L\u2019adresse publique de la page d\u2019accueil. Vide : elle est d\xE9duite de l\u2019adresse de ce back-office."),zn("Description",t,"description",{placeholder:no,hint:"Une ou deux phrases : ce qui s\u2019affiche sous le titre dans Google et dans les aper\xE7us de partage. Vide : la phrase propos\xE9e en gris."}),ct("Image de partage",St(()=>t.image,c=>{t.image=c.trim()},{placeholder:"media/peupler/01.jpg",spell:!1}),"Chemin d\u2019une image du site, montr\xE9e quand on partage le lien (WhatsApp, LinkedIn\u2026). Vide : la photo du premier projet."),p("p",{class:"hint"},"\xC0 chaque publication, le back-office r\xE9\xE9crit : le titre, la description et les donn\xE9es structur\xE9es de la page, ",p("code",null,"llms.txt"),", ",p("code",null,"sitemap.xml"),", et une vraie page par fiche et par langue, lisible m\xEAme par les IA qui ne lancent pas le JavaScript : ",p("code",null,yi()+"fr/identifiant/"),". Chaque langue a son accueil : ",p("code",null,yi()+"fr/"),". Seules les pages qui ont chang\xE9 partent sur GitHub, et Bing est pr\xE9venu (IndexNow) deux minutes apr\xE8s."),p("p",{class:"hint"},"Pour suivre les recherches Google : ajoute le site dans ",p("a",{href:"https://search.google.com/search-console",target:"_blank",rel:"noopener"},"Google Search Console")," et donne-lui l\u2019adresse du plan : ",p("code",null,yi()+"sitemap.xml"),"."))))}function Hy(){let n=p("div",{class:"card"},p("div",{class:"empty"},"Lecture de l\u2019historique\u2026")),e=p("div",{class:"card"});return Vy(e),S.backend.kind==="demo"?(We(n,p("div",{class:"block"},p("h3",null,"D\xE9mo"),p("p",null,"En d\xE9mo, chaque publication remplace la pr\xE9c\xE9dente, dans ce navigateur seulement : rien n\u2019est \xE9crit dans les fichiers du site. Pour garder ton travail, exporte-le ci-dessous, ou travaille dans le dossier du site (Chrome, Edge) ou sur GitHub."),Ue("Revenir au contenu d\u2019origine",async()=>{await Hn("R\xE9initialiser la d\xE9mo","Le contenu de d\xE9monstration d\u2019origine sera recharg\xE9. Une copie de ton travail reste dans les sauvegardes.","R\xE9initialiser","danger")&&(await cs({content:S.content,at:Date.now()}),await S.backend.reset(),await vi(S.draftKey),location.reload())},"danger"))),bi("Historique",null,[],e,n)):((async()=>{try{let t=await S.backend.lastCommits(20);We(n,...t.map((i,s)=>p("div",{class:"commit"},p("div",null,p("b",null,i.commit.message.split(`
`)[0]),p("small",null,`${new Date(i.commit.author.date).toLocaleString("fr-FR")} \xB7 ${i.commit.author.name}`,s===0?S.backend.kind==="folder"?" \xB7 version enregistr\xE9e":" \xB7 version en ligne":"")),p("div",{style:{display:"flex",gap:"6px"}},i.html_url?p("a",{class:"btn sm ghost",href:i.html_url,target:"_blank",rel:"noopener"},"Sur GitHub"):null,s===0?null:Ue("Restaurer",async()=>{if(await Hn("Restaurer cette version","Le contenu de cette version remplace ton brouillon. Rien ne change tant que tu ne publies pas. Les images supprim\xE9es depuis peuvent manquer.","Restaurer dans le brouillon"))try{S.content=await S.backend.loadAt(i.sha),_e({nav:!0}),st("Version charg\xE9e dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(r){st("Lecture impossible : "+Ks(r),"bad")}},"sm"))))),t.length||We(n,p("div",{class:"empty"},"Pas encore de version publi\xE9e."))}catch(t){We(n,p("div",{class:"empty"},"Impossible de lire l\u2019historique : "+Ks(t)))}})(),bi("Historique",S.backend.kind==="folder"?"Chaque publication garde une version dans content/versions/ (les 40 derni\xE8res). Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.":"Chaque publication est une version du site. Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.",[],e,n))}function Vy(n){let e=()=>new Date().toISOString().slice(0,16).replace(/[:T]/g,"-"),t=Ue("Exporter le contenu (.json)",()=>{let r=p("a",{href:URL.createObjectURL(new Blob([JSON.stringify(S.content,null,1)+`
`],{type:"application/json"})),download:`hand-coded-content-${e()}.json`});document.body.appendChild(r),r.click(),r.remove(),st("Fichier t\xE9l\xE9charg\xE9 : il contient tous les textes et r\xE9glages, avec ou sans publication.")},"sm"),i=Ue("Importer un contenu\u2026",()=>Fn("application/json,.json",!1,async r=>{try{let o=JSON.parse(await r[0].text()),a=o&&o.content&&o.settings===void 0?o.content:o;if(!a||!a.settings||!Array.isArray(a.posts))throw new Error("ce fichier n\u2019est pas un contenu du site");if(!await Hn("Importer ce contenu",`\xAB ${r[0].name} \xBB remplace ton brouillon. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.`,"Importer"))return;await cs({content:S.content,at:Date.now()});let l=S.content,c=rn(a);l.models.forEach(u=>{c.models.some(h=>h.id===u.id)||c.models.push(u)}),S.content=c,_e({nav:!0}),zr(),st("Contenu import\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(o){st("Import impossible : "+(o.message||o),"bad",8e3)}}),"sm ghost"),s=p("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"10px"}});We(n,p("div",{class:"block"},p("h3",null,"Sauvegardes"),p("p",{class:"hint",style:{marginTop:0}},"Le fichier export\xE9 contient tous les textes, r\xE9glages et liens vers les images. Il se r\xE9importe ici, ou se pose tel quel dans le dossier du site sous le nom content/content.json."),p("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},t,i),s)),(async()=>{let r=[],o=await zi("draft-backup:"+S.draftKey);o&&o.content&&r.push(Ue(`R\xE9cup\xE9rer le brouillon mis de c\xF4t\xE9 le ${new Date(o.at).toLocaleString("fr-FR")}`,async()=>{if(!await Hn("R\xE9cup\xE9rer le brouillon","Ce brouillon remplace ton brouillon actuel (qui est mis de c\xF4t\xE9 \xE0 son tour).","R\xE9cup\xE9rer"))return;let u={content:S.content,at:Date.now()};S.content=rn(o.content),await cs(u),_e({nav:!0}),zr(),st("Brouillon r\xE9cup\xE9r\xE9.")},"sm ghost"));let a=(await Rh()).filter(u=>typeof u=="string"&&/^(draft:|demo:content:|draft-backup:)/.test(u)&&u!==S.draftKey&&u!=="draft-backup:"+S.draftKey&&!(S.backend.kind==="demo"&&u==="demo:content:v6")),l=u=>u.startsWith("demo:content:")?"publication de la d\xE9mo":u.startsWith("draft-backup:")?"brouillon mis de c\xF4t\xE9 ("+u.replace(/^draft-backup:draft:/,"").replace(/^demo:v\d+$/,"d\xE9mo").replace(/^folder:/,"dossier ")+")":u.startsWith("draft:demo:")?"brouillon de la d\xE9mo":u.startsWith("draft:folder:")?"brouillon du dossier \xAB "+u.slice(13)+" \xBB":"brouillon GitHub "+u.slice(6),c=[];for(let u of a){let h=await zi(u),f=h&&(h.settings?h:h.content);f&&f.settings&&Array.isArray(f.posts)&&c.push({k:u,c:f,at:h&&h.at||0})}c.sort((u,h)=>h.at-u.at);for(let u of c)r.push(Ue(`Reprendre : ${l(u.k)}${u.at?" du "+new Date(u.at).toLocaleString("fr-FR"):""}`,async()=>{await Hn("Reprendre ce travail","Ce contenu remplace ton brouillon (qui est mis de c\xF4t\xE9). Les images ajout\xE9es ailleurs ne suivent pas : renvoie-les si besoin. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.","Reprendre")&&(await cs({content:S.content,at:Date.now()}),S.content=rn(structuredClone(u.c)),_e({nav:!0}),zr(),st("Charg\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie."))},"sm ghost"));We(s,r)})()}function tr(n){let e={};S.recent.forEach((M,D)=>{M&&M.url&&(e[D]=M.url)}),S.staged.forEach((M,D)=>{M&&M.url&&(e[D]=M.url)}),(S.backend.kind==="demo"||S.backend.kind==="folder")&&S.backend.urls&&S.backend.urls.forEach((M,D)=>{e[D]||(e[D]=M)});let t=S.content.sections.filter(M=>M.visible),i=n||(S.view==="posts"?S.filter.section:S.view==="sections"?S.sel.section:S.view==="settings"?"__home":"")||S.content.settings.startSection;i&&i!=="__home"&&!t.find(M=>M.id===i)&&(i=t[0]&&t[0].id);let s=p("div",{class:"frame"}),r="desk",o=async()=>{let M={};for(let[D,U]of[...S.recent,...S.staged])U&&U.blob&&(M[D]=U.blob);if(S.backend.kind==="folder"&&S.backend.urls){for(let D of S.backend.urls.keys())if(!M[D])try{M[D]=await S.backend.readBlob(D)}catch{}}if(S.backend.kind==="demo"&&S.backend.urls){for(let D of S.backend.urls.keys())if(!M[D]){let U=await zi("demo:file:"+D).catch(()=>null);U&&(M[D]=U)}}return M},a=null,l=0,c=20261102,u=p("div",{class:"preview-warn"}),h=()=>{let M=l;try{M=M||a&&a.contentWindow&&a.contentWindow.HC_SITE_VERSION||0}catch{}if(M>=c){u.classList.remove("on");return}u.textContent="Le moteur du site dans "+(S.backend.kind==="github"?"le d\xE9p\xF4t":"ce dossier")+" est plus ancien que le back-office : l\u2019aper\xE7u ne montre pas tous tes r\xE9glages (typographie, showreel\u2026). Remplace assets/hc/site.bundle.js et site.js par la derni\xE8re version"+(S.backend.kind==="github"?", envoie-les sur GitHub, puis attends une minute.":"."),u.classList.add("on")},f=async M=>{!a||M.source!==a.contentWindow||!M.data||M.data.type!=="hc-preview-ready"||(l=M.data.version||0,h(),a.contentWindow.postMessage({type:"hc-preview",data:window.__hcPreview,blobs:await o()},"*"))};window.addEventListener("message",f);let m=()=>{window.__hcPreview={content:structuredClone(S.content),files:e,start:i==="__home"?"":i},a=p("iframe",{title:"Aper\xE7u du site",allow:"fullscreen"}),l=0,u.classList.remove("on"),window.HC_SITE_HTML||a.addEventListener("load",()=>setTimeout(h,3e3)),window.HC_SITE_HTML?a.srcdoc=window.HC_SITE_HTML:a.src=xi+"index.html?preview="+Date.now();let M={desk:["100%","100%"],tab:["820px","1080px"],mob:["390px","780px"]}[r];a.style.width=M[0],a.style.height=M[1],a.style.maxHeight="100%",We(s,a)},y=p("div",{class:"sizes",role:"group","aria-label":"Taille d\u2019\xE9cran"}),_=()=>We(y,...[["desk","Bureau"],["tab","Tablette"],["mob","Mobile"]].map(([M,D])=>p("button",{type:"button","aria-pressed":String(r===M),onclick:()=>{r=M,_(),m()}},D)));_();let g=p("select",{"aria-label":"Section"},p("option",{value:"__home",selected:i==="__home"},"Accueil"),t.map(M=>p("option",{value:M.id,selected:M.id===i},mt(M.name))));g.addEventListener("change",()=>{i=g.value,m()});let d=()=>{v.remove(),document.removeEventListener("keydown",T),window.removeEventListener("message",f)},T=M=>{M.key==="Escape"&&document.activeElement&&!document.activeElement.closest("iframe")&&d()},v=p("div",{class:"preview",role:"dialog","aria-label":"Aper\xE7u"},p("div",{class:"bar"},p("b",null,"Aper\xE7u"),p("span",null,er()?"avec les modifications non publi\xE9es":"identique au site en ligne"),p("span",{class:"sp"}),g,y,Ue("Recharger",m,"sm"),Ue("Fermer",d,"sm primary")),u,s);document.body.appendChild(v),document.addEventListener("keydown",T),m()}var Qt="hc-admin";function rd(){let n={};try{n=JSON.parse(localStorage.getItem(Qt)||"{}")}catch{}try{let e=sessionStorage.getItem(Qt+":token");e&&!n.token&&(n.token=e)}catch{}return n}function Gy(){let n=/^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);if(!n)return{};let e=location.pathname.split("/").filter(Boolean);return{owner:n[1],repo:e.length>1&&e[0]!=="admin"?e[0]:`${n[1]}.github.io`}}async function po(n){let e=p("img",{src:xi+"assets/hc/ui/logo-default.svg",alt:""}),t=p("h1",null,"Hand Coded.");Wy(e,t);let i={};try{let g=await fetch("config.json",{cache:"no-store"});g.ok&&(i=await g.json())}catch{}let s=rd(),r=Gy(),o=g=>s[g]||i[g]||r[g]||"",a=p("input",{type:"text",value:o("owner"),required:!0,autocomplete:"username",spellcheck:"false"}),l=p("input",{type:"text",value:o("repo"),required:!0,spellcheck:"false"}),c=p("input",{type:"text",value:o("branch")||"main",spellcheck:"false"}),u=p("input",{type:"text",value:o("root"),placeholder:"(racine du d\xE9p\xF4t)",spellcheck:"false"}),h=p("input",{type:"password",value:s.token||"",required:!0,autocomplete:"current-password",placeholder:"github_pat_\u2026",spellcheck:"false"});[a,l].forEach(g=>g.addEventListener("change",()=>{let d=od({owner:a.value,repo:l.value});d.owner&&(a.value=d.owner),d.repo&&(l.value=d.repo)}));let f=p("input",{type:"checkbox",checked:!!s.remember}),m=p("p",{class:"err",role:"alert",hidden:!n},n||""),y=p("button",{type:"submit",class:"btn primary"},"Se connecter"),_=p("form",{onsubmit:async g=>{g.preventDefault(),m.hidden=!0,y.disabled=!0,y.textContent="Connexion\u2026";let d={owner:a.value.trim(),repo:l.value.trim(),branch:c.value.trim()||"main",root:u.value.trim(),token:h.value.trim(),remember:f.checked};try{await ld(d)}catch(T){m.textContent="Connexion impossible : "+Ks(T),m.hidden=!1,y.disabled=!1,y.textContent="Se connecter"}}},p("h2",null,"Connexion"),p("p",{class:"lead"},"Le back-office publie directement dans ton d\xE9p\xF4t GitHub. Il lui faut un jeton d\u2019acc\xE8s limit\xE9 \xE0 ce d\xE9p\xF4t."),p("details",null,p("summary",null,"Cr\xE9er le jeton (2 minutes)"),p("ol",null,p("li",null,"Ouvre ",p("a",{href:"https://github.com/settings/personal-access-tokens/new",target:"_blank",rel:"noopener"},"GitHub \u203A Fine-grained tokens \u203A Generate new token"),"."),p("li",null,"Repository access : \xAB Only select repositories \xBB, choisis le d\xE9p\xF4t du site."),p("li",null,"Permissions \u203A Repository \u203A ",p("b",null,"Contents : Read and write"),". Rien d\u2019autre."),p("li",null,"Choisis une date d\u2019expiration, g\xE9n\xE8re, et colle le jeton ci-dessous."))),m,p("div",{class:"grid2"},ct("Propri\xE9taire (compte GitHub)",a),ct("D\xE9p\xF4t",l)),ct("Jeton d\u2019acc\xE8s",h,"Il reste dans ce navigateur et ne part que vers api.github.com."),p("details",{style:{background:"#fff"}},p("summary",null,"Options avanc\xE9es"),p("div",{class:"grid2",style:{marginTop:"12px"}},ct("Branche",c),ct("Dossier du site dans le d\xE9p\xF4t",u,"Vide si le site est \xE0 la racine."))),p("label",{class:"switch",style:{margin:"4px 0 16px"}},f,"Rester connect\xE9e sur cet ordinateur"),p("div",{class:"actions"},y,Ue("Essayer sans GitHub (d\xE9mo)",()=>cd(),"ghost")),await $y());We(mo,p("div",{class:"login"},p("aside",{class:"side"},p("div",null,e,t,p("p",null,"Back-office du site : sections, objets 3D, contenus, tags.")),p("small",null,"Moteur 3D d\u2019apr\xE8s le site Fat-Man Collective de 2008.")),_)),(a.value&&l.value?h:a).focus()}async function Wy(n,e){try{let t=window.HC_CONTENT;if(!t){let o=await fetch(xi+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!o.ok)return;t=await o.json()}let i=rn(structuredClone(t)).settings;cc(i);let s=i.taglines&&(i.taglines.fr||i.taglines.en)||[];e.textContent=s[0]||i.name||"Hand Coded.",Object.assign(e.style,$h(i));let r=()=>{let o=i.logo?xi+i.logo:co(i.accent||"#ffcc00",i);n.src=o,qh(o)};r(),Xh(i,r)}catch{}}async function ad(){try{if(localStorage.getItem(Qt+":h-reading"))return localStorage.removeItem(Qt+":h-reading"),await vi("folder:handle"),null;localStorage.setItem(Qt+":h-reading","1")}catch{}let n=await zi("folder:handle").catch(()=>null);try{localStorage.removeItem(Qt+":h-reading")}catch{}return n||null}async function $y(){let n=p("div",{class:"folder-card"});if(!ss.supported())return We(n,p("h3",null,"Travailler dans le dossier du site"),p("p",null,"Ce navigateur ne sait pas \xE9crire dans un dossier de l\u2019ordinateur. Ouvre ce back-office dans Chrome ou Edge pour que \xAB Publier \xBB enregistre directement dans les fichiers du site. Sinon, utilise GitHub, ou exporte ton travail depuis Historique \u203A Sauvegardes.")),n;let e=await ad(),t=p("p",{class:"err",role:"alert",hidden:!0}),i=async()=>{t.hidden=!0;try{let s=await window.showDirectoryPicker({id:"hand-coded-site",mode:"readwrite"});await vo(s)}catch(s){if(s&&s.name==="AbortError")return;t.textContent="Ouverture impossible : "+(s.message||s),t.hidden=!1}};return We(n,p("h3",null,"Travailler dans le dossier du site"),p("p",null,"Sans GitHub : choisis le dossier du site sur ton ordinateur (celui qui contient index.html et content). \xAB Publier \xBB y \xE9crit directement les textes, images et mod\xE8les. Tu peux ensuite d\xE9placer, copier ou envoyer ce dossier : tout est dedans."),t,p("div",{class:"actions"},e?Ue(`Rouvrir le dossier \xAB ${e.name} \xBB`,async()=>{t.hidden=!0;try{await vo(e,!0)}catch(s){t.textContent="Ce dossier n\u2019est plus accessible (d\xE9plac\xE9 ou renomm\xE9 ?) : choisis-le \xE0 nouveau. "+(s.message||""),t.hidden=!1}},"primary"):null,Ue(e?"Choisir un autre dossier\u2026":"Choisir le dossier du site\u2026",i,e?"ghost":"primary"))),n}async function vo(n,e){let t=new ss(n);if(!await t.permission(!0))throw new Error("acc\xE8s refus\xE9");await t.check();let i=await t.load();await t.prepare(i);try{await Ys("folder:handle",n),localStorage.setItem(Qt+":mode","folder")}catch{}S.backend=t,S.draftKey="draft:folder:"+n.name,await uc(i)}function qy(){try{localStorage.removeItem(Qt+":mode")}catch{}if(Hh){location.reload();return}sc().then(()=>{S.content=null,po()})}function od(n){let e={...n},t=/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.repo||"")||/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.owner||"");return t&&(e.owner=t[1],e.repo=t[2]),e.owner=String(e.owner||"").trim().replace(/^@/,"").replace(/\/+$/,""),e.repo=String(e.repo||"").trim().replace(/\.git$/i,"").replace(/^.*\//,""),e.branch=String(e.branch||"").trim()||"main",e.root=String(e.root||"").trim().replace(/^\/+|\/+$/g,""),e.token=String(e.token||"").trim(),e}var Kl=n=>Object.assign(new Error(n),{status:0});async function ld(n,e){n=od(n);let t=new ro(n);try{await t.check()}catch(s){if(s.status===404){let r=null;try{r=await t.req("/user")}catch{}throw Kl(`GitHub ne trouve pas le d\xE9p\xF4t \xAB ${n.owner}/${n.repo} \xBB`+(r?` (le jeton appartient au compte \xAB ${r.login} \xBB)`:"")+". V\xE9rifie le propri\xE9taire et le nom du d\xE9p\xF4t, tels qu\u2019ils apparaissent dans l\u2019adresse github.com/propri\xE9taire/d\xE9p\xF4t.")}throw s}try{await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`)}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/branches?per_page=30`)).map(o=>o.name)}catch{}throw Kl(`la branche \xAB ${t.cfg.branch} \xBB n\u2019existe pas dans ${n.owner}/${n.repo}.`+(r.length?` Branches du d\xE9p\xF4t : ${r.join(", ")}.`:""))}let i;try{i=await t.load()}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/git/trees/${encodeURIComponent(t.cfg.branch)}?recursive=1`)).tree.filter(a=>a.type==="blob"&&/(^|\/)content\/content\.json$/.test(a.path)).map(a=>a.path.replace(/\/?content\/content\.json$/,""))}catch{}if(r.length===1)n.root=r[0],t.cfg.root=r[0],i=await t.load(),e||setTimeout(()=>st(`Site trouv\xE9 dans le dossier \xAB ${r[0]||"(racine)"} \xBB du d\xE9p\xF4t : r\xE9glage corrig\xE9.`),400);else throw Kl(`pas de content/content.json dans ${n.root?"le dossier \xAB "+n.root+" \xBB":"la racine"} du d\xE9p\xF4t.`+(r.length?` Il y en a dans : ${r.map(o=>o||"(racine)").join(", ")}. Indique le bon dans Options avanc\xE9es \u203A Dossier du site.`:" Envoie d\u2019abord les fichiers du site dans le d\xE9p\xF4t."))}S.head=await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`).then(s=>s.object.sha);try{localStorage.setItem(Qt,JSON.stringify({owner:n.owner,repo:n.repo,branch:n.branch,root:n.root,remember:!!n.remember,token:n.remember?n.token:void 0})),n.remember?sessionStorage.removeItem(Qt+":token"):sessionStorage.setItem(Qt+":token",n.token)}catch{}S.backend=t,S.cfg=n,S.draftKey=`draft:${n.owner}/${n.repo}@${t.cfg.branch}`,await uc(i)}function Xy(){try{let n=JSON.parse(localStorage.getItem(Qt)||"{}");delete n.token,localStorage.setItem(Qt,JSON.stringify(n)),sessionStorage.removeItem(Qt+":token")}catch{}location.reload()}async function cd(){try{localStorage.removeItem(Qt+":mode")}catch{}S.backend=new ao(xi),S.draftKey="draft:demo:v6";let n=await S.backend.load();await S.backend.prepare(n),await uc(n)}async function uc(n){S.content=n,S.base=JSON.stringify(n);try{cc(n.settings),document.fonts&&await Promise.race([Promise.all(Nh(n.settings).map(t=>document.fonts.load(t).catch(()=>{}))),new Promise(t=>setTimeout(t,2500))])}catch{}await ay(),document.documentElement.style.setProperty("--accent",S.content.settings.accent||"#ffcc00");let e=(location.hash.match(/^#\/(\w+)/)||[])[1];id.some(([t])=>t===e)&&(S.view=e),zr()}document.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="s"&&S.content&&(n.preventDefault(),rc())});window.addEventListener("beforeunload",()=>{S.content&&sc()});(async function(){try{if(Hh){await cd();return}let e=rd(),t="";try{t=localStorage.getItem(Qt+":mode")||""}catch{}if(t==="folder"&&ss.supported()){let i=await ad();if(i)try{if(await new ss(i).permission(!1)){await vo(i,!0);return}}catch{}return po()}if(e.token&&e.owner&&e.repo)try{await ld(e,!0);return}catch(i){return po("Reconnexion impossible : "+Ks(i))}await po()}catch(e){console.error(e),We(mo,p("p",{class:"boot"},"Le back-office n\u2019a pas pu d\xE9marrer : "+(e.message||e)))}})();window.__admin={S,publish:rc,go:Qs,openPreview:tr,importModelFiles:lc,startFolder:vo};})();
