/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Kl="160";var Gp=0,tu=1,Wp=2;var Gd=1,Xp=2,Ei=3,Bn=0,fn=1,Mn=2;var $i=0,ar=1,nu=2,iu=3,su=4,qp=5,gs=100,Yp=101,$p=102,ru=103,au=104,jp=200,Zp=201,Jp=202,Kp=203,yl=204,xl=205,Qp=206,em=207,tm=208,nm=209,im=210,sm=211,rm=212,am=213,om=214,cm=0,lm=1,hm=2,oo=3,um=4,dm=5,fm=6,pm=7,qo=0,mm=1,gm=2,ji=0,_m=1,ym=2,xm=3,vm=4,bm=5,Mm=6,ou="attached",Sm="detached",Wd=300,lr=301,hr=302,vl=303,bl=304,Yo=306,Ji=1e3,un=1001,Ml=1002,en=1003,cu=1004;var Fc=1005;var yn=1006,wm=1007;var Ki=1008;var Zi=1009,Em=1010,Tm=1011,Ql=1012,Xd=1013,Yi=1014,Ai=1015,jr=1016,qd=1017,Yd=1018,xs=1020,Am=1021,On=1023,Cm=1024,Rm=1025,vs=1026,ur=1027,Pm=1028,$d=1029,Lm=1030,jd=1031,Zd=1033,Bc=33776,zc=33777,kc=33778,Hc=33779,lu=35840,hu=35841,uu=35842,du=35843,Jd=36196,fu=37492,pu=37496,mu=37808,gu=37809,_u=37810,yu=37811,xu=37812,vu=37813,bu=37814,Mu=37815,Su=37816,wu=37817,Eu=37818,Tu=37819,Au=37820,Cu=37821,Vc=36492,Ru=36494,Pu=36495,Im=36283,Lu=36284,Iu=36285,Nu=36286;var co=2300,lo=2301,Gc=2302,Du=2400,Uu=2401,Ou=2402,Nm=2500;var Kd=3e3,bs=3001,Dm=3200,Um=3201,eh=0,Om=1,Fn="",zt="srgb",Ri="srgb-linear",th="display-p3",$o="display-p3-linear",ho="linear",Dt="srgb",uo="rec709",fo="p3";var Bs=7680;var Fu=519,Fm=512,Bm=513,zm=514,Qd=515,km=516,Hm=517,Vm=518,Gm=519,Sl=35044;var Bu="300 es",wl=1035,Ci=2e3,po=2001,Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=1234567,Xr=Math.PI/180,dr=180/Math.PI;function $n(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function hn(n,e,t){return Math.max(e,Math.min(t,n))}function nh(n,e){return(n%e+e)%e}function Wm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Xm(n,e,t){return n!==e?(t-n)/(e-n):0}function qr(n,e,t){return(1-t)*n+t*e}function qm(n,e,t,i){return qr(n,e,1-Math.exp(-t*i))}function Ym(n,e=1){return e-Math.abs(nh(n,e*2)-e)}function $m(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Zm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jm(n,e){return n+Math.random()*(e-n)}function Km(n){return n*(.5-Math.random())}function Qm(n){n!==void 0&&(zu=n);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eg(n){return n*Xr}function tg(n){return n*dr}function El(n){return(n&n-1)===0&&n!==0}function ng(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ig(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),m=r((i-e)/2),y=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*y,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*y,o*l);break;case"ZYZ":n.set(c*y,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ns={DEG2RAD:Xr,RAD2DEG:dr,generateUUID:$n,clamp:hn,euclideanModulo:nh,mapLinear:Wm,inverseLerp:Xm,lerp:qr,damp:qm,pingpong:Ym,smoothstep:$m,smootherstep:jm,randInt:Zm,randFloat:Jm,randFloatSpread:Km,seededRandom:Qm,degToRad:eg,radToDeg:tg,isPowerOfTwo:El,ceilPowerOfTwo:ng,floorPowerOfTwo:mo,setQuaternionFromProperEuler:ig,normalize:At,denormalize:ni},$e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],y=i[8],x=s[0],p=s[3],f=s[6],C=s[1],v=s[4],P=s[7],U=s[2],L=s[5],N=s[8];return r[0]=a*x+o*C+c*U,r[3]=a*p+o*v+c*L,r[6]=a*f+o*P+c*N,r[1]=l*x+h*C+u*U,r[4]=l*p+h*v+u*L,r[7]=l*f+h*P+u*N,r[2]=d*x+m*C+y*U,r[5]=d*p+m*v+y*L,r[8]=d*f+m*P+y*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,y=t*u+i*d+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/y;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new ut;function ef(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sg(){let n=Zr("canvas");return n.style.display="block",n}var ku={};function Yr(n){n in ku||(ku[n]=!0,console.warn(n))}var Hu=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vu=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[Ri]:{transfer:ho,primaries:uo,toReference:n=>n,fromReference:n=>n},[zt]:{transfer:Dt,primaries:uo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$o]:{transfer:ho,primaries:fo,toReference:n=>n.applyMatrix3(Vu),fromReference:n=>n.applyMatrix3(Hu)},[th]:{transfer:Dt,primaries:fo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vu),fromReference:n=>n.applyMatrix3(Hu).convertLinearToSRGB()}},rg=new Set([Ri,$o]),Ct={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ia[e].toReference,s=Ia[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ia[n].primaries},getTransfer:function(n){return n===Fn?ho:Ia[n].transfer}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zs,go=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=Zr("canvas")),zs.width=e.width,zs.height=e.height;let i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=or(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ag=0,_o=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=$n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qc(s[a].image)):r.push(qc(s[a]))}else r=qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?go.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var og=0,Sn=class n extends Qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=un,s=un,r=yn,a=Ki,o=On,c=Zi,l=n.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=$n(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bs?zt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?bs:Kd}set encoding(e){Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bs?zt:Fn}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Wd;Sn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],y=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(y+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,P=(m+1)/2,U=(f+1)/2,L=(h+d)/4,N=(u+x)/4,K=(y+p)/4;return v>P&&v>U?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=L/i,r=N/i):P>U?P<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),i=L/s,r=K/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=N/r,s=K/r),this.set(i,s,r,t),this}let C=Math.sqrt((p-y)*(p-y)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(p-y)/C,this.y=(u-x)/C,this.z=(d-h)/C,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tl=class extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===bs?zt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _o(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends Tl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},yo=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Al=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],m=r[a+1],y=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=y,e[t+3]=x;return}if(u!==x||c!==d||l!==m||h!==y){let p=1-o,f=c*d+l*m+h*y+u*x,C=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let U=Math.sqrt(v),L=Math.atan2(U,f*C);p=Math.sin(p*L)/U,o=Math.sin(o*L)/U}let P=o*C;if(c=c*p+d*P,l=l*p+m*P,h=h*p+y*P,u=u*p+x*P,p===1-o){let U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],m=r[a+2],y=r[a+3];return e[t]=o*y+h*u+c*m-l*d,e[t+1]=c*y+h*d+l*u-o*m,e[t+2]=l*y+h*m+o*d-c*u,e[t+3]=h*y-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),m=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*y,this._y=l*m*u-d*h*y,this._z=l*h*y+d*m*u,this._w=l*h*u-d*m*y;break;case"YXZ":this._x=d*h*u+l*m*y,this._y=l*m*u-d*h*y,this._z=l*h*y-d*m*u,this._w=l*h*u+d*m*y;break;case"ZXY":this._x=d*h*u-l*m*y,this._y=l*m*u+d*h*y,this._z=l*h*y+d*m*u,this._w=l*h*u-d*m*y;break;case"ZYX":this._x=d*h*u-l*m*y,this._y=l*m*u+d*h*y,this._z=l*h*y-d*m*u,this._w=l*h*u+d*m*y;break;case"YZX":this._x=d*h*u+l*m*y,this._y=l*m*u+d*h*y,this._z=l*h*y-d*m*u,this._w=l*h*u-d*m*y;break;case"XZY":this._x=d*h*u-l*m*y,this._y=l*m*u-d*h*y,this._z=l*h*y+d*m*u,this._w=l*h*u+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new I,Gu=new ii,tn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Da.subVectors(this.max,Fr),ks.subVectors(e.a,Fr),Hs.subVectors(e.b,Fr),Vs.subVectors(e.c,Fr),Vi.subVectors(Hs,ks),Gi.subVectors(Vs,Hs),us.subVectors(ks,Vs);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-us.z,us.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,us.z,0,-us.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-us.y,us.x,0];return!$c(t,ks,Hs,Vs,Da)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,ks,Hs,Vs,Da))?!1:(Ua.crossVectors(Vi,Gi),t=[Ua.x,Ua.y,Ua.z],$c(t,ks,Hs,Vs,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,Na=new tn,ks=new I,Hs=new I,Vs=new I,Vi=new I,Gi=new I,us=new I,Fr=new I,Da=new I,Ua=new I,ds=new I;function $c(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ds.fromArray(n,r);let o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),c=e.dot(ds),l=t.dot(ds),h=i.dot(ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var cg=new tn,Br=new I,jc=new I,zn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(jc)),this.expandByPoint(Br.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new I,Zc=new I,Oa=new I,Wi=new I,Jc=new I,Fa=new I,Kc=new I,fr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zc.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Zc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Wi.dot(this.direction),c=-Wi.dot(Oa),l=Wi.lengthSq(),h=Math.abs(1-a*a),u,d,m,y;if(h>0)if(u=a*c-o,d=a*o-c,y=r*h,u>=0)if(d>=-y)if(d<=y){let x=1/h;u*=x,d*=x,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-y?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=y?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zc).addScaledVector(Oa,d),m}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){Jc.subVectors(t,e),Fa.subVectors(i,e),Kc.crossVectors(Jc,Fa);let a=this.direction.dot(Kc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);let c=o*this.direction.dot(Fa.crossVectors(Wi,Fa));if(c<0)return null;let l=o*this.direction.dot(Jc.cross(Wi));if(l<0||c+l>a)return null;let h=-o*Wi.dot(Kc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,m,y,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,m,y,x,p)}set(e,t,i,s,r,a,o,c,l,h,u,d,m,y,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=y,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),a=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,y=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+y*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=y+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,y=l*h,x=l*u;t[0]=d+x*o,t[4]=y*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-y,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,y=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=y+m*o,t[1]=m+y*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,y=o*h,x=o*u;t[0]=c*h,t[4]=y*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-y,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,y=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=y*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+y,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,m=a*l,y=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=m*u-y,t[2]=y*u-m,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,hg)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Xi.crossVectors(i,Cn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Xi.crossVectors(i,Cn)),Xi.normalize(),Ba.crossVectors(Cn,Xi),s[0]=Xi.x,s[4]=Ba.x,s[8]=Cn.x,s[1]=Xi.y,s[5]=Ba.y,s[9]=Cn.y,s[2]=Xi.z,s[6]=Ba.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],y=i[2],x=i[6],p=i[10],f=i[14],C=i[3],v=i[7],P=i[11],U=i[15],L=s[0],N=s[4],K=s[8],E=s[12],R=s[1],Z=s[5],oe=s[9],le=s[13],O=s[2],Y=s[6],F=s[10],Q=s[14],J=s[3],$=s[7],re=s[11],ne=s[15];return r[0]=a*L+o*R+c*O+l*J,r[4]=a*N+o*Z+c*Y+l*$,r[8]=a*K+o*oe+c*F+l*re,r[12]=a*E+o*le+c*Q+l*ne,r[1]=h*L+u*R+d*O+m*J,r[5]=h*N+u*Z+d*Y+m*$,r[9]=h*K+u*oe+d*F+m*re,r[13]=h*E+u*le+d*Q+m*ne,r[2]=y*L+x*R+p*O+f*J,r[6]=y*N+x*Z+p*Y+f*$,r[10]=y*K+x*oe+p*F+f*re,r[14]=y*E+x*le+p*Q+f*ne,r[3]=C*L+v*R+P*O+U*J,r[7]=C*N+v*Z+P*Y+U*$,r[11]=C*K+v*oe+P*F+U*re,r[15]=C*E+v*le+P*Q+U*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],y=e[3],x=e[7],p=e[11],f=e[15];return y*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*m-i*c*m)+x*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+i*a*m+r*o*h-i*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],y=e[12],x=e[13],p=e[14],f=e[15],C=u*p*l-x*d*l+x*c*m-o*p*m-u*c*f+o*d*f,v=y*d*l-h*p*l-y*c*m+a*p*m+h*c*f-a*d*f,P=h*x*l-y*u*l+y*o*m-a*x*m-h*o*f+a*u*f,U=y*u*c-h*x*c-y*o*d+a*x*d+h*o*p-a*u*p,L=t*C+i*v+s*P+r*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/L;return e[0]=C*N,e[1]=(x*d*r-u*p*r-x*s*m+i*p*m+u*s*f-i*d*f)*N,e[2]=(o*p*r-x*c*r+x*s*l-i*p*l-o*s*f+i*c*f)*N,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*m-i*c*m)*N,e[4]=v*N,e[5]=(h*p*r-y*d*r+y*s*m-t*p*m-h*s*f+t*d*f)*N,e[6]=(y*c*r-a*p*r-y*s*l+t*p*l+a*s*f-t*c*f)*N,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*N,e[8]=P*N,e[9]=(y*u*r-h*x*r-y*i*m+t*x*m+h*i*f-t*u*f)*N,e[10]=(a*x*r-y*o*r+y*i*l-t*x*l-a*i*f+t*o*f)*N,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*m-t*o*m)*N,e[12]=U*N,e[13]=(h*x*s-y*u*s+y*i*d-t*x*d-h*i*p+t*u*p)*N,e[14]=(y*o*s-a*x*s-y*i*c+t*x*c+a*i*p-t*o*p)*N,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,y=r*u,x=a*h,p=a*u,f=o*u,C=c*l,v=c*h,P=c*u,U=i.x,L=i.y,N=i.z;return s[0]=(1-(x+f))*U,s[1]=(m+P)*U,s[2]=(y-v)*U,s[3]=0,s[4]=(m-P)*L,s[5]=(1-(d+f))*L,s[6]=(p+C)*L,s[7]=0,s[8]=(y+v)*N,s[9]=(p-C)*N,s[10]=(1-(d+x))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Gs.set(s[0],s[1],s[2]).length(),a=Gs.set(s[4],s[5],s[6]).length(),o=Gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let l=1/r,h=1/a,u=1/o;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ci){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,y;if(o===Ci)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===po)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ci){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*l,m=(i+s)*h,y,x;if(o===Ci)y=(a+r)*u,x=-2*u;else if(o===po)y=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Gs=new I,qn=new nt,lg=new I(0,0,0),hg=new I(1,1,1),Xi=new I,Ba=new I,Cn=new I,Wu=new nt,Xu=new ii,xo=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xo.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ug=0,qu=new I,Ws=new ii,bi=new nt,za=new I,zr=new I,dg=new I,fg=new ii,Yu=new I(1,0,0),$u=new I(0,1,0),ju=new I(0,0,1),pg={type:"added"},mg={type:"removed"},Wt=class n extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new xo,i=new ii,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ut}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?za.copy(e):za.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(zr,za,this.up):bi.lookAt(za,zr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(bi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new I,Mi=new I,Qc=new I,Si=new I,Xs=new I,qs=new I,Zu=new I,el=new I,tl=new I,nl=new I,ka=!1,ys=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Yn.subVectors(s,t),Mi.subVectors(i,t),Qc.subVectors(e,t);let a=Yn.dot(Yn),o=Yn.dot(Mi),c=Yn.dot(Qc),l=Mi.dot(Mi),h=Mi.dot(Qc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,y=(a*h-o*c)*d;return r.set(1-m-y,y,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,s,r,a,o,c){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(e,t,i,s,r,a,o,c)}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(a,Si.y),c.addScaledVector(o,Si.z),c)}static isFrontFacing(e,t,i,s){return Yn.subVectors(i,t),Mi.subVectors(e,t),Yn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Xs.subVectors(s,i),qs.subVectors(r,i),el.subVectors(e,i);let c=Xs.dot(el),l=qs.dot(el);if(c<=0&&l<=0)return t.copy(i);tl.subVectors(e,s);let h=Xs.dot(tl),u=qs.dot(tl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Xs,a);nl.subVectors(e,r);let m=Xs.dot(nl),y=qs.dot(nl);if(y>=0&&m<=y)return t.copy(r);let x=m*l-c*y;if(x<=0&&l>=0&&y<=0)return o=l/(l-y),t.copy(i).addScaledVector(qs,o);let p=h*y-m*u;if(p<=0&&u-h>=0&&m-y>=0)return Zu.subVectors(r,s),o=(u-h)/(u-h+(m-y)),t.copy(s).addScaledVector(Zu,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=nh(e,1),t=hn(t,0,1),i=hn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=tf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Xc(e.r),this.g=Xc(e.g),this.b=Xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ct.fromWorkingColorSpace(ln.copy(this),e),Math.round(hn(ln.r*255,0,255))*65536+Math.round(hn(ln.g*255,0,255))*256+Math.round(hn(ln.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=zt){Ct.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Ha);let i=qr(qi.h,Ha.h,t),s=qr(qi.s,Ha.s,t),r=qr(qi.l,Ha.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new tt;tt.NAMES=tf;var gg=0,si=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=ar,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=xl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new I,Va=new $e,Pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}};var vo=class extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var bo=class extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Lt=class extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var _g=0,Un=new nt,sl=new Wt,Ys=new I,Rn=new tn,kr=new tn,jt=new I,wn=class n extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ef(e)?bo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Rn.min,kr.min),Rn.expandByPoint(jt),jt.addVectors(Rn.max,kr.max),Rn.expandByPoint(jt)):(Rn.expandByPoint(kr.min),Rn.expandByPoint(kr.max))}Rn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(Ys.fromBufferAttribute(e,l),jt.add(Ys)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<o;R++)l[R]=new I,h[R]=new I;let u=new I,d=new I,m=new I,y=new $e,x=new $e,p=new $e,f=new I,C=new I;function v(R,Z,oe){u.fromArray(s,R*3),d.fromArray(s,Z*3),m.fromArray(s,oe*3),y.fromArray(a,R*2),x.fromArray(a,Z*2),p.fromArray(a,oe*2),d.sub(u),m.sub(u),x.sub(y),p.sub(y);let le=1/(x.x*p.y-p.x*x.y);isFinite(le)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(le),C.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(le),l[R].add(f),l[Z].add(f),l[oe].add(f),h[R].add(C),h[Z].add(C),h[oe].add(C))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let R=0,Z=P.length;R<Z;++R){let oe=P[R],le=oe.start,O=oe.count;for(let Y=le,F=le+O;Y<F;Y+=3)v(i[Y+0],i[Y+1],i[Y+2])}let U=new I,L=new I,N=new I,K=new I;function E(R){N.fromArray(r,R*3),K.copy(N);let Z=l[R];U.copy(Z),U.sub(N.multiplyScalar(N.dot(Z))).normalize(),L.crossVectors(K,Z);let le=L.dot(h[R])<0?-1:1;c[R*4]=U.x,c[R*4+1]=U.y,c[R*4+2]=U.z,c[R*4+3]=le}for(let R=0,Z=P.length;R<Z;++R){let oe=P[R],le=oe.start,O=oe.count;for(let Y=le,F=le+O;Y<F;Y+=3)E(i[Y+0]),E(i[Y+1]),E(i[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){let y=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,y=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let f=0;f<h;f++)d[y++]=l[m++]}return new Pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new nt,fs=new fr,Ga=new zn,Ku=new I,$s=new I,js=new I,Zs=new I,rl=new I,Wa=new I,Xa=new $e,qa=new $e,Ya=new $e,Qu=new I,ed=new I,td=new I,$a=new I,ja=new I,kt=class extends Wt{constructor(e=new wn,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(rl.fromBufferAttribute(u,e),a?Wa.addScaledVector(rl,h):Wa.addScaledVector(rl.sub(t),h))}t.add(Wa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Ga.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ga,Ku)===null||fs.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&(Ju.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,x=d.length;y<x;y++){let p=d[y],f=a[p.materialIndex],C=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let P=C,U=v;P<U;P+=3){let L=o.getX(P),N=o.getX(P+1),K=o.getX(P+2);s=Za(this,f,e,i,l,h,u,L,N,K),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=y,f=x;p<f;p+=3){let C=o.getX(p),v=o.getX(p+1),P=o.getX(p+2);s=Za(this,a,e,i,l,h,u,C,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,x=d.length;y<x;y++){let p=d[y],f=a[p.materialIndex],C=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let P=C,U=v;P<U;P+=3){let L=P,N=P+1,K=P+2;s=Za(this,f,e,i,l,h,u,L,N,K),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=y,f=x;p<f;p+=3){let C=p,v=p+1,P=p+2;s=Za(this,a,e,i,l,h,u,C,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function yg(n,e,t,i,s,r,a,o){let c;if(e.side===fn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Bn,o),c===null)return null;ja.copy(o),ja.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ja);return l<t.near||l>t.far?null:{distance:l,point:ja.clone(),object:n}}function Za(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,$s),n.getVertexPosition(c,js),n.getVertexPosition(l,Zs);let h=yg(n,e,t,i,$s,js,Zs,$a);if(h){s&&(Xa.fromBufferAttribute(s,o),qa.fromBufferAttribute(s,c),Ya.fromBufferAttribute(s,l),h.uv=ys.getInterpolation($a,$s,js,Zs,Xa,qa,Ya,new $e)),r&&(Xa.fromBufferAttribute(r,o),qa.fromBufferAttribute(r,c),Ya.fromBufferAttribute(r,l),h.uv1=ys.getInterpolation($a,$s,js,Zs,Xa,qa,Ya,new $e),h.uv2=h.uv1),a&&(Qu.fromBufferAttribute(a,o),ed.fromBufferAttribute(a,c),td.fromBufferAttribute(a,l),h.normal=ys.getInterpolation($a,$s,js,Zs,Qu,ed,td,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};ys.getNormal($s,js,Zs,u.normal),h.face=u}return h}var Kr=class n extends wn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;y("z","y","x",-1,-1,i,t,e,a,r,0),y("z","y","x",1,-1,i,t,-e,a,r,1),y("x","z","y",1,1,e,i,t,s,a,2),y("x","z","y",1,-1,e,i,-t,s,a,3),y("x","y","z",1,-1,e,t,i,s,r,4),y("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function y(x,p,f,C,v,P,U,L,N,K,E){let R=P/N,Z=U/K,oe=P/2,le=U/2,O=L/2,Y=N+1,F=K+1,Q=0,J=0,$=new I;for(let re=0;re<F;re++){let ne=re*Z-le;for(let de=0;de<Y;de++){let B=de*R-oe;$[x]=B*C,$[p]=ne*v,$[f]=O,l.push($.x,$.y,$.z),$[x]=0,$[p]=0,$[f]=L>0?1:-1,h.push($.x,$.y,$.z),u.push(de/N),u.push(1-re/K),Q+=1}}for(let re=0;re<K;re++)for(let ne=0;ne<N;ne++){let de=d+ne+Y*re,B=d+ne+Y*(re+1),G=d+(ne+1)+Y*(re+1),te=d+(ne+1)+Y*re;c.push(de,B,te),c.push(B,G,te),J+=6}o.addGroup(m,J,E),m+=J,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){let e={};for(let t=0;t<n.length;t++){let i=pr(n[t]);for(let s in i)e[s]=i[s]}return e}function xg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nf(n){return n.getRenderTarget()===null?n.outputColorSpace:Ct.workingColorSpace}var jo={clone:pr,merge:_n},vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Mo=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends Mo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,Ks=1,Cl=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Js,Ks,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Js,Ks,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Js,Ks,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Js,Ks,e,t);o.layers=this.layers,this.add(o);let c=new Gt(Js,Ks,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Js,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},So=class extends Sn{constructor(e,t,i,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rl=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bs?zt:Fn),this.texture=new So(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kr(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:$i});r.uniforms.tEquirect.value=t;let a=new kt(s,r),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=yn),new Cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},al=new I,Mg=new I,Sg=new ut,Ti=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=al.subVectors(i,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sg.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new zn,Ja=new I,Qr=class{constructor(e=new Ti,t=new Ti,i=new Ti,s=new Ti,r=new Ti,a=new Ti){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],y=s[9],x=s[10],p=s[11],f=s[12],C=s[13],v=s[14],P=s[15];if(i[0].setComponents(c-r,d-l,p-m,P-f).normalize(),i[1].setComponents(c+r,d+l,p+m,P+f).normalize(),i[2].setComponents(c+a,d+h,p+y,P+C).normalize(),i[3].setComponents(c-a,d-h,p-y,P-C).normalize(),i[4].setComponents(c-o,d-u,p-x,P-v).normalize(),t===Ci)i[5].setComponents(c+o,d+u,p+x,P+v).normalize();else if(t===po)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ja.x=s.normal.x>0?e.max.x:e.min.x,Ja.y=s.normal.y>0?e.max.y:e.min.y,Ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,y=n.createBuffer();n.bindBuffer(h,y),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,y=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&y.length===0&&n.bufferSubData(u,0,d),y.length!==0){for(let x=0,p=y.length;x<p;x++){let f=y[x];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Ms=class n extends wn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],y=[],x=[],p=[];for(let f=0;f<h;f++){let C=f*d-a;for(let v=0;v<l;v++){let P=v*u-r;y.push(P,-C,0),x.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let C=0;C<o;C++){let v=C+l*f,P=C+l*(f+1),U=C+1+l*(f+1),L=C+1+l*f;m.push(v,P,L),m.push(P,U,L)}this.setIndex(m),this.setAttribute("position",new Lt(y,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tg=`#ifdef USE_ALPHAHASH
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
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
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
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,zg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`
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
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,f0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,w0=`struct PhysicalMaterial {
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
}`,E0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,h_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
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
#endif`,d_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,p_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,__=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E_=`uniform sampler2D t2D;
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,N_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
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
}`,F_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,z_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,H_=`#define LAMBERT
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
}`,V_=`#define MATCAP
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
}`,G_=`#define MATCAP
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
}`,W_=`#define NORMAL
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
}`,X_=`#define NORMAL
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
}`,q_=`#define PHONG
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
}`,Y_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,J_=`#define TOON
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
}`,K_=`uniform float size;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ny=`uniform float rotation;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Eg,alphahash_pars_fragment:Tg,alphamap_fragment:Ag,alphamap_pars_fragment:Cg,alphatest_fragment:Rg,alphatest_pars_fragment:Pg,aomap_fragment:Lg,aomap_pars_fragment:Ig,batching_pars_vertex:Ng,batching_vertex:Dg,begin_vertex:Ug,beginnormal_vertex:Og,bsdfs:Fg,iridescence_fragment:Bg,bumpmap_pars_fragment:zg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Gg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Yg,common:$g,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Kg,emissivemap_fragment:Qg,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:y0,envmap_vertex:o0,fog_vertex:c0,fog_pars_vertex:l0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:d0,lightmap_fragment:f0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:v0,lights_phong_fragment:b0,lights_phong_pars_fragment:M0,lights_physical_fragment:S0,lights_physical_pars_fragment:w0,lights_fragment_begin:E0,lights_fragment_maps:T0,lights_fragment_end:A0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:I0,map_pars_fragment:N0,map_particle_fragment:D0,map_particle_pars_fragment:U0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:F0,morphcolor_vertex:B0,morphnormal_vertex:z0,morphtarget_pars_vertex:k0,morphtarget_vertex:H0,normal_fragment_begin:V0,normal_fragment_maps:G0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:J0,opaque_fragment:K0,packing:Q0,premultiplied_alpha_fragment:e_,project_vertex:t_,dithering_fragment:n_,dithering_pars_fragment:i_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:o_,shadowmap_vertex:c_,shadowmask_pars_fragment:l_,skinbase_vertex:h_,skinning_pars_vertex:u_,skinning_vertex:d_,skinnormal_vertex:f_,specularmap_fragment:p_,specularmap_pars_fragment:m_,tonemapping_fragment:g_,tonemapping_pars_fragment:__,transmission_fragment:y_,transmission_pars_fragment:x_,uv_pars_fragment:v_,uv_pars_vertex:b_,uv_vertex:M_,worldpos_vertex:S_,background_vert:w_,background_frag:E_,backgroundCube_vert:T_,backgroundCube_frag:A_,cube_vert:C_,cube_frag:R_,depth_vert:P_,depth_frag:L_,distanceRGBA_vert:I_,distanceRGBA_frag:N_,equirect_vert:D_,equirect_frag:U_,linedashed_vert:O_,linedashed_frag:F_,meshbasic_vert:B_,meshbasic_frag:z_,meshlambert_vert:k_,meshlambert_frag:H_,meshmatcap_vert:V_,meshmatcap_frag:G_,meshnormal_vert:W_,meshnormal_frag:X_,meshphong_vert:q_,meshphong_frag:Y_,meshphysical_vert:$_,meshphysical_frag:j_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:K_,points_frag:Q_,shadow_vert:ey,shadow_frag:ty,sprite_vert:ny,sprite_frag:iy},ge={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},xn={basic:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:_n([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:_n([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:_n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:_n([ge.points,ge.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:_n([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:_n([ge.common,ge.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:_n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:_n([ge.sprite,ge.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:_n([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:_n([ge.lights,ge.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};xn.physical={uniforms:_n([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Ka={r:0,b:0,g:0};function sy(n,e,t,i,s,r,a){let o=new tt(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function y(p,f){let C=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),C=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Yo)?(h===void 0&&(h=new kt(new Kr(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:pr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(v.colorSpace)!==Dt,(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new kt(new Ms(2,2),new jn({name:"BackgroundMaterial",uniforms:pr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ct.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,f){p.getRGB(Ka,nf(n)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:y}}function ry(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(O,Y,F,Q,J){let $=!1;if(a){let re=x(Q,F,Y);l!==re&&(l=re,m(l.object)),$=f(O,Q,F,J),$&&C(O,Q,F,J)}else{let re=Y.wireframe===!0;(l.geometry!==Q.id||l.program!==F.id||l.wireframe!==re)&&(l.geometry=Q.id,l.program=F.id,l.wireframe=re,$=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,K(O,Y,F,Q),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function y(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function x(O,Y,F){let Q=F.wireframe===!0,J=o[O.id];J===void 0&&(J={},o[O.id]=J);let $=J[Y.id];$===void 0&&($={},J[Y.id]=$);let re=$[Q];return re===void 0&&(re=p(d()),$[Q]=re),re}function p(O){let Y=[],F=[],Q=[];for(let J=0;J<s;J++)Y[J]=0,F[J]=0,Q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:F,attributeDivisors:Q,object:O,attributes:{},index:null}}function f(O,Y,F,Q){let J=l.attributes,$=Y.attributes,re=0,ne=F.getAttributes();for(let de in ne)if(ne[de].location>=0){let G=J[de],te=$[de];if(te===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),G===void 0||G.attribute!==te||te&&G.data!==te.data)return!0;re++}return l.attributesNum!==re||l.index!==Q}function C(O,Y,F,Q){let J={},$=Y.attributes,re=0,ne=F.getAttributes();for(let de in ne)if(ne[de].location>=0){let G=$[de];G===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(G=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(G=O.instanceColor));let te={};te.attribute=G,G&&G.data&&(te.data=G.data),J[de]=te,re++}l.attributes=J,l.attributesNum=re,l.index=Q}function v(){let O=l.newAttributes;for(let Y=0,F=O.length;Y<F;Y++)O[Y]=0}function P(O){U(O,0)}function U(O,Y){let F=l.newAttributes,Q=l.enabledAttributes,J=l.attributeDivisors;F[O]=1,Q[O]===0&&(n.enableVertexAttribArray(O),Q[O]=1),J[O]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Y),J[O]=Y)}function L(){let O=l.newAttributes,Y=l.enabledAttributes;for(let F=0,Q=Y.length;F<Q;F++)Y[F]!==O[F]&&(n.disableVertexAttribArray(F),Y[F]=0)}function N(O,Y,F,Q,J,$,re){re===!0?n.vertexAttribIPointer(O,Y,F,J,$):n.vertexAttribPointer(O,Y,F,Q,J,$)}function K(O,Y,F,Q){if(i.isWebGL2===!1&&(O.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let J=Q.attributes,$=F.getAttributes(),re=Y.defaultAttributeValues;for(let ne in $){let de=$[ne];if(de.location>=0){let B=J[ne];if(B===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(B=O.instanceColor)),B!==void 0){let G=B.normalized,te=B.itemSize,ie=t.get(B);if(ie===void 0)continue;let ae=ie.buffer,Te=ie.type,Fe=ie.bytesPerElement,Be=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||B.gpuType===Xd);if(B.isInterleavedBufferAttribute){let pt=B.data,H=pt.stride,Kt=B.offset;if(pt.isInstancedInterleavedBuffer){for(let He=0;He<de.locationSize;He++)U(de.location+He,pt.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let He=0;He<de.locationSize;He++)P(de.location+He);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let He=0;He<de.locationSize;He++)N(de.location+He,te/de.locationSize,Te,G,H*Fe,(Kt+te/de.locationSize*He)*Fe,Be)}else{if(B.isInstancedBufferAttribute){for(let pt=0;pt<de.locationSize;pt++)U(de.location+pt,B.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let pt=0;pt<de.locationSize;pt++)P(de.location+pt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let pt=0;pt<de.locationSize;pt++)N(de.location+pt,te/de.locationSize,Te,G,te*Fe,te/de.locationSize*pt*Fe,Be)}}else if(re!==void 0){let G=re[ne];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(de.location,G);break;case 3:n.vertexAttrib3fv(de.location,G);break;case 4:n.vertexAttrib4fv(de.location,G);break;default:n.vertexAttrib1fv(de.location,G)}}}}L()}function E(){oe();for(let O in o){let Y=o[O];for(let F in Y){let Q=Y[F];for(let J in Q)y(Q[J].object),delete Q[J];delete Y[F]}delete o[O]}}function R(O){if(o[O.id]===void 0)return;let Y=o[O.id];for(let F in Y){let Q=Y[F];for(let J in Q)y(Q[J].object),delete Q[J];delete Y[F]}delete o[O.id]}function Z(O){for(let Y in o){let F=o[Y];if(F[O.id]===void 0)continue;let Q=F[O.id];for(let J in Q)y(Q[J].object),delete Q[J];delete F[O.id]}}function oe(){le(),h=!0,l!==c&&(l=c,m(l.object))}function le(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:oe,resetDefaultState:le,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:P,disableUnusedAttributes:L}}function ay(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,y;if(s)m=n,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<d;y++)this.render(h[y],u[y]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let y=0;for(let x=0;x<d;x++)y+=u[x];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function oy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,P=a||e.has("OES_texture_float"),U=v&&P,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:v,floatFragmentTextures:P,floatVertexTextures:U,maxSamples:L}}function cy(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Ti,o=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let y=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||y===null||y.length===0||r&&!p)r?h(null):l();else{let C=r?0:i,v=C*4,P=f.clippingState||null;c.value=P,P=h(y,d,v,m);for(let U=0;U!==v;++U)P[U]=t[U];f.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,y){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,y!==!0||p===null){let f=m+x*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,P=m;v!==x;++v,P+=4)a.copy(u[v]).applyMatrix4(C,o),a.normal.toArray(p,P),p[P+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function ly(n){let e=new WeakMap;function t(a,o){return o===vl?a.mapping=lr:o===bl&&(a.mapping=hr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===vl||o===bl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Rl(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var mr=class extends Mo{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sr=4,nd=[.125,.215,.35,.446,.526,.582],_s=20,ol=new mr,id=new tt,cl=null,ll=0,hl=0,ms=(1+Math.sqrt(5))/2,Qs=1/ms,sd=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ms,Qs),new I(0,ms,-Qs),new I(Qs,0,ms),new I(-Qs,0,ms),new I(ms,Qs,0),new I(-ms,Qs,0)],wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){cl=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,ll,hl),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:jr,format:On,colorSpace:Ri,depthBuffer:!1},s=rd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hy(r)),this._blurMaterial=uy(r,e,t)}return s}_compileMaterial(e){let t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,s){let o=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(id),h.toneMapping=ji,h.autoClear=!1;let m=new pn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),y=new kt(new Kr,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(id),x=!0);for(let f=0;f<6;f++){let C=f%3;C===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):C===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let v=this._cubeSize;Qa(s,C*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===lr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Qa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ol)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sd[(s-1)%sd.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_s-1),x=r/y,p=isFinite(r)?1+Math.floor(h*x):_s;p>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_s}`);let f=[],C=0;for(let N=0;N<_s;++N){let K=N/x,E=Math.exp(-K*K/2);f.push(E),N===0?C+=E:N<p&&(C+=2*E)}for(let N=0;N<f.length;N++)f[N]=f[N]/C;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=y,d.mipInt.value=v-i;let P=this._sizeLods[s],U=3*P*(s>v-sr?s-v+sr:0),L=4*(this._cubeSize-P);Qa(t,U,L,3*P,2*P),c.setRenderTarget(t),c.render(u,ol)}};function hy(n){let e=[],t=[],i=[],s=n,r=n-sr+1+nd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-sr?c=nd[a-n+sr-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,y=6,x=3,p=2,f=1,C=new Float32Array(x*y*m),v=new Float32Array(p*y*m),P=new Float32Array(f*y*m);for(let L=0;L<m;L++){let N=L%3*2/3-1,K=L>2?0:-1,E=[N,K,0,N+2/3,K,0,N+2/3,K+1,0,N,K,0,N+2/3,K+1,0,N,K+1,0];C.set(E,x*y*L),v.set(d,p*y*L);let R=[L,L,L,L,L,L];P.set(R,f*y*L)}let U=new wn;U.setAttribute("position",new Pn(C,x)),U.setAttribute("uv",new Pn(v,p)),U.setAttribute("faceIndex",new Pn(P,f)),e.push(U),s>sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rd(n,e,t){let i=new Pi(n,e,t);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function uy(n,e,t){let i=new Float32Array(_s),s=new I(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ih(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ad(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function od(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function dy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===vl||c===bl,h=c===lr||c===hr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new wo(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new wo(n));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function fy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function py(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let x=d.morphAttributes[y];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let y in d)e.update(d[y],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let y in m){let x=m[y];for(let p=0,f=x.length;p<f;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,y=u.attributes.position,x=0;if(m!==null){let C=m.array;x=m.version;for(let v=0,P=C.length;v<P;v+=3){let U=C[v+0],L=C[v+1],N=C[v+2];d.push(U,L,L,N,N,U)}}else if(y!==void 0){let C=y.array;x=y.version;for(let v=0,P=C.length/3-1;v<P;v+=3){let U=v+0,L=v+1,N=v+2;d.push(U,L,L,N,N,U)}}else return;let p=new(ef(d)?bo:vo)(d,1);p.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function my(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,y){n.drawElements(r,y,o,m*c),t.update(y,r,1)}function u(m,y,x){if(x===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,y,o,m*c,x),t.update(y,r,x)}function d(m,y,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/c,y[f]);else{p.multiDrawElementsWEBGL(r,y,0,o,m,0,x);let f=0;for(let C=0;C<x;C++)f+=y[C];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function gy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _y(n,e){return n[0]-e[0]}function yy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function xy(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new _t,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==y){let O=function(){oe.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();let C=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],K=0;C===!0&&(K=1),v===!0&&(K=2),P===!0&&(K=3);let E=h.attributes.position.count*K,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let Z=new Float32Array(E*R*4*y),oe=new yo(Z,E,R,y);oe.type=Ai,oe.needsUpdate=!0;let le=K*4;for(let Y=0;Y<y;Y++){let F=U[Y],Q=L[Y],J=N[Y],$=E*R*4*Y;for(let re=0;re<F.count;re++){let ne=re*le;C===!0&&(a.fromBufferAttribute(F,re),Z[$+ne+0]=a.x,Z[$+ne+1]=a.y,Z[$+ne+2]=a.z,Z[$+ne+3]=0),v===!0&&(a.fromBufferAttribute(Q,re),Z[$+ne+4]=a.x,Z[$+ne+5]=a.y,Z[$+ne+6]=a.z,Z[$+ne+7]=0),P===!0&&(a.fromBufferAttribute(J,re),Z[$+ne+8]=a.x,Z[$+ne+9]=a.y,Z[$+ne+10]=a.z,Z[$+ne+11]=J.itemSize===4?a.w:1)}}x={count:y,texture:oe,size:new $e(E,R)},r.set(h,x),h.addEventListener("dispose",O)}let p=0;for(let C=0;C<d.length;C++)p+=d[C];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,y=i[h.id];if(y===void 0||y.length!==m){y=[];for(let v=0;v<m;v++)y[v]=[v,0];i[h.id]=y}for(let v=0;v<m;v++){let P=y[v];P[0]=v,P[1]=d[v]}y.sort(yy);for(let v=0;v<8;v++)v<m&&y[v][1]?(o[v][0]=y[v][0],o[v][1]=y[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(_y);let x=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let P=o[v],U=P[0],L=P[1];U!==Number.MAX_SAFE_INTEGER&&L?(x&&h.getAttribute("morphTarget"+v)!==x[U]&&h.setAttribute("morphTarget"+v,x[U]),p&&h.getAttribute("morphNormal"+v)!==p[U]&&h.setAttribute("morphNormal"+v,p[U]),s[v]=L,f+=L):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let C=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",C),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function vy(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Eo=class extends Sn{constructor(e,t,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:vs,h!==vs&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===vs&&(i=Yi),i===void 0&&h===ur&&(i=xs),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rf=new Sn,af=new Eo(1,1);af.compareFunction=Qd;var of=new yo,cf=new Al,lf=new So,cd=[],ld=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function br(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zo(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function by(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Ey(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),qt(t,i)}}function Ty(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),qt(t,i)}}function Ay(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;hd.set(i),n.uniformMatrix4fv(this.addr,!1,hd),qt(t,i)}}function Cy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Iy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Oy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?af:rf;t.setTexture2D(e||r,s)}function Fy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cf,s)}function By(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lf,s)}function zy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||of,s)}function ky(n){switch(n){case 5126:return by;case 35664:return My;case 35665:return Sy;case 35666:return wy;case 35674:return Ey;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Cy;case 35667:case 35671:return Ry;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Iy;case 36294:return Ny;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return zy}}function Hy(n,e){n.uniform1fv(this.addr,e)}function Vy(n,e){let t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function Gy(n,e){let t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function Wy(n,e){let t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function Xy(n,e){let t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qy(n,e){let t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yy(n,e){let t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $y(n,e){n.uniform1iv(this.addr,e)}function jy(n,e){n.uniform2iv(this.addr,e)}function Zy(n,e){n.uniform3iv(this.addr,e)}function Jy(n,e){n.uniform4iv(this.addr,e)}function Ky(n,e){n.uniform1uiv(this.addr,e)}function Qy(n,e){n.uniform2uiv(this.addr,e)}function ex(n,e){n.uniform3uiv(this.addr,e)}function tx(n,e){n.uniform4uiv(this.addr,e)}function nx(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||rf,r[a])}function ix(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cf,r[a])}function sx(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||lf,r[a])}function rx(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||of,r[a])}function ax(n){switch(n){case 5126:return Hy;case 35664:return Vy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return $y;case 35667:case 35671:return jy;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Ky;case 36294:return Qy;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}var Pl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}},Ll=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ax(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ul=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function ox(n,e,t){let i=n.name,s=i.length;for(ul.lastIndex=0;;){let r=ul.exec(i),a=ul.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){fd(t,l===void 0?new Pl(o,n,e):new Ll(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Il(o),fd(t,u)),t=u}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ox(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function pd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var cx=37297,lx=0;function hx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ux(n){let e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(n),i;switch(e===t?i="":e===fo&&t===uo?i="LinearDisplayP3ToLinearSRGB":e===uo&&t===fo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case $o:return[i,"LinearTransferOETF"];case zt:case th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function md(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hx(n.getShaderSource(e),a)}else return s}function dx(n,e){let t=ux(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fx(n,e){let t;switch(e){case _m:t="Linear";break;case ym:t="Reinhard";break;case xm:t="OptimizedCineon";break;case vm:t="ACESFilmic";break;case Mm:t="AgX";break;case bm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function px(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function mx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rr).join(`
`)}function gx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _x(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function rr(n){return n!==""}function gd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace(yx,vx)}var xx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vx(n,e){let t=ct[e];if(t===void 0){let i=xx.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}var bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(n){return n.replace(bx,Mx)}function Mx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function wx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case hr:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ex(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qo:e="ENVMAP_BLENDING_MULTIPLY";break;case mm:e="ENVMAP_BLENDING_MIX";break;case gm:e="ENVMAP_BLENDING_ADD";break}return e}function Ax(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Sx(t),l=wx(t),h=Ex(t),u=Tx(t),d=Ax(t),m=t.isWebGL2?"":px(t),y=mx(t),x=gx(r),p=s.createProgram(),f,C,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(rr).join(`
`),f.length>0&&(f+=`
`),C=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(rr).join(`
`),C.length>0&&(C+=`
`)):(f=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),C=[m,xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?ct.tonemapping_pars_fragment:"",t.toneMapping!==ji?fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,dx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Nl(a),a=gd(a,t),a=_d(a,t),o=Nl(o),o=gd(o,t),o=_d(o,t),a=yd(a),o=yd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let P=v+f+a,U=v+C+o,L=pd(s,s.VERTEX_SHADER,P),N=pd(s,s.FRAGMENT_SHADER,U);s.attachShader(p,L),s.attachShader(p,N),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function K(oe){if(n.debug.checkShaderErrors){let le=s.getProgramInfoLog(p).trim(),O=s.getShaderInfoLog(L).trim(),Y=s.getShaderInfoLog(N).trim(),F=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,L,N);else{let J=md(s,L,"vertex"),$=md(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+J+`
`+$)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(O===""||Y==="")&&(Q=!1);Q&&(oe.diagnostics={runnable:F,programLog:le,vertexShader:{log:O,prefix:f},fragmentShader:{log:Y,prefix:C}})}s.deleteShader(L),s.deleteShader(N),E=new cr(s,p),R=_x(s,p)}let E;this.getUniforms=function(){return E===void 0&&K(this),E};let R;this.getAttributes=function(){return R===void 0&&K(this),R};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(p,cx)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=N,this}var Rx=0,Dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ul(e),t.set(e,i)),i}},Ul=class{constructor(e){this.id=Rx++,this.code=e,this.usedTimes=0}};function Px(n,e,t,i,s,r,a){let o=new Jr,c=new Dl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,R,Z,oe,le){let O=oe.fog,Y=le.geometry,F=E.isMeshStandardMaterial?oe.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),J=Q&&Q.mapping===Yo?Q.image.height:null,$=y[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ne=re!==void 0?re.length:0,de=0;Y.morphAttributes.position!==void 0&&(de=1),Y.morphAttributes.normal!==void 0&&(de=2),Y.morphAttributes.color!==void 0&&(de=3);let B,G,te,ie;if($){let Yt=xn[$];B=Yt.vertexShader,G=Yt.fragmentShader}else B=E.vertexShader,G=E.fragmentShader,c.update(E),te=c.getVertexShaderID(E),ie=c.getFragmentShaderID(E);let ae=n.getRenderTarget(),Te=le.isInstancedMesh===!0,Fe=le.isBatchedMesh===!0,Be=!!E.map,pt=!!E.matcap,H=!!Q,Kt=!!E.aoMap,He=!!E.lightMap,Ze=!!E.bumpMap,Le=!!E.normalMap,Rt=!!E.displacementMap,st=!!E.emissiveMap,A=!!E.metalnessMap,S=!!E.roughnessMap,W=E.anisotropy>0,fe=E.clearcoat>0,he=E.iridescence>0,pe=E.sheen>0,De=E.transmission>0,Me=W&&!!E.anisotropyMap,Ce=fe&&!!E.clearcoatMap,Ge=fe&&!!E.clearcoatNormalMap,rt=fe&&!!E.clearcoatRoughnessMap,ue=he&&!!E.iridescenceMap,vt=he&&!!E.iridescenceThicknessMap,ht=pe&&!!E.sheenColorMap,Ye=pe&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Re=!!E.specularColorMap,Qe=!!E.specularIntensityMap,yt=De&&!!E.transmissionMap,It=De&&!!E.thicknessMap,ot=!!E.gradientMap,ye=!!E.alphaMap,D=E.alphaTest>0,ve=!!E.alphaHash,be=!!E.extensions,qe=!!Y.attributes.uv1,Ve=!!Y.attributes.uv2,St=!!Y.attributes.uv3,Et=ji;return E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Et=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:G,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,instancing:Te,instancingColor:Te&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ri,map:Be,matcap:pt,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:J,aoMap:Kt,lightMap:He,bumpMap:Ze,normalMap:Le,displacementMap:d&&Rt,emissiveMap:st,normalMapObjectSpace:Le&&E.normalMapType===Om,normalMapTangentSpace:Le&&E.normalMapType===eh,metalnessMap:A,roughnessMap:S,anisotropy:W,anisotropyMap:Me,clearcoat:fe,clearcoatMap:Ce,clearcoatNormalMap:Ge,clearcoatRoughnessMap:rt,iridescence:he,iridescenceMap:ue,iridescenceThicknessMap:vt,sheen:pe,sheenColorMap:ht,sheenRoughnessMap:Ye,specularMap:ze,specularColorMap:Re,specularIntensityMap:Qe,transmission:De,transmissionMap:yt,thicknessMap:It,gradientMap:ot,opaque:E.transparent===!1&&E.blending===ar,alphaMap:ye,alphaTest:D,alphaHash:ve,combine:E.combine,mapUv:Be&&x(E.map.channel),aoMapUv:Kt&&x(E.aoMap.channel),lightMapUv:He&&x(E.lightMap.channel),bumpMapUv:Ze&&x(E.bumpMap.channel),normalMapUv:Le&&x(E.normalMap.channel),displacementMapUv:Rt&&x(E.displacementMap.channel),emissiveMapUv:st&&x(E.emissiveMap.channel),metalnessMapUv:A&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:Me&&x(E.anisotropyMap.channel),clearcoatMapUv:Ce&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(E.sheenRoughnessMap.channel),specularMapUv:ze&&x(E.specularMap.channel),specularColorMapUv:Re&&x(E.specularColorMap.channel),specularIntensityMapUv:Qe&&x(E.specularIntensityMap.channel),transmissionMapUv:yt&&x(E.transmissionMap.channel),thicknessMapUv:It&&x(E.thicknessMap.channel),alphaMapUv:ye&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Le||W),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:qe,vertexUv2s:Ve,vertexUv3s:St,pointsUvs:le.isPoints===!0&&!!Y.attributes.uv&&(Be||ye),fog:!!O,useFog:E.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:le.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:de,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:be&&E.extensions.derivatives===!0,extensionFragDepth:be&&E.extensions.fragDepth===!0,extensionDrawBuffers:be&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let Z in E.defines)R.push(Z),R.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(C(R,E),v(R,E),R.push(n.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function C(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function v(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function P(E){let R=y[E.type],Z;if(R){let oe=xn[R];Z=jo.clone(oe.uniforms)}else Z=E.uniforms;return Z}function U(E,R){let Z;for(let oe=0,le=l.length;oe<le;oe++){let O=l[oe];if(O.cacheKey===R){Z=O,++Z.usedTimes;break}}return Z===void 0&&(Z=new Cx(n,R,E,r),l.push(Z)),Z}function L(E){if(--E.usedTimes===0){let R=l.indexOf(E);l[R]=l[l.length-1],l.pop(),E.destroy()}}function N(E){c.remove(E)}function K(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:P,acquireProgram:U,releaseProgram:L,releaseShaderCache:N,programs:l,dispose:K}}function Lx(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,m,y,x,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:y,renderOrder:u.renderOrder,z:x,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=y,f.renderOrder=u.renderOrder,f.z=x,f.group=p),e++,f}function o(u,d,m,y,x,p){let f=a(u,d,m,y,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,y,x,p){let f=a(u,d,m,y,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Ix),i.length>1&&i.sort(d||vd),s.length>1&&s.sort(d||vd)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Nx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new bd,n.set(i,[a])):s>=r.length?(a=new bd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Dx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new tt};break;case"SpotLight":t={position:new I,direction:new I,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Ux(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Ox=0;function Fx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bx(n,e){let t=new Dx,i=Ux(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,a=new nt,o=new nt;function c(h,u){let d=0,m=0,y=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let x=0,p=0,f=0,C=0,v=0,P=0,U=0,L=0,N=0,K=0,E=0;h.sort(Fx);let R=u===!0?Math.PI:1;for(let oe=0,le=h.length;oe<le;oe++){let O=h[oe],Y=O.color,F=O.intensity,Q=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=Y.r*F*R,m+=Y.g*F*R,y+=Y.b*F*R;else if(O.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(O.sh.coefficients[$],F);E++}else if(O.isDirectionalLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*R),O.castShadow){let re=O.shadow,ne=i.get(O);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,s.directionalShadow[x]=ne,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=O.shadow.matrix,P++}s.directional[x]=$,x++}else if(O.isSpotLight){let $=t.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(Y).multiplyScalar(F*R),$.distance=Q,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,s.spot[f]=$;let re=O.shadow;if(O.map&&(s.spotLightMap[N]=O.map,N++,re.updateMatrices(O),O.castShadow&&K++),s.spotLightMatrix[f]=re.matrix,O.castShadow){let ne=i.get(O);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,s.spotShadow[f]=ne,s.spotShadowMap[f]=J,L++}f++}else if(O.isRectAreaLight){let $=t.get(O);$.color.copy(Y).multiplyScalar(F),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),s.rectArea[C]=$,C++}else if(O.isPointLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*R),$.distance=O.distance,$.decay=O.decay,O.castShadow){let re=O.shadow,ne=i.get(O);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,ne.shadowCameraNear=re.camera.near,ne.shadowCameraFar=re.camera.far,s.pointShadow[p]=ne,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=O.shadow.matrix,U++}s.point[p]=$,p++}else if(O.isHemisphereLight){let $=t.get(O);$.skyColor.copy(O.color).multiplyScalar(F*R),$.groundColor.copy(O.groundColor).multiplyScalar(F*R),s.hemi[v]=$,v++}}C>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=y;let Z=s.hash;(Z.directionalLength!==x||Z.pointLength!==p||Z.spotLength!==f||Z.rectAreaLength!==C||Z.hemiLength!==v||Z.numDirectionalShadows!==P||Z.numPointShadows!==U||Z.numSpotShadows!==L||Z.numSpotMaps!==N||Z.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=C,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+N-K,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=K,s.numLightProbes=E,Z.directionalLength=x,Z.pointLength=p,Z.spotLength=f,Z.rectAreaLength=C,Z.hemiLength=v,Z.numDirectionalShadows=P,Z.numPointShadows=U,Z.numSpotShadows=L,Z.numSpotMaps=N,Z.numLightProbes=E,s.version=Ox++)}function l(h,u){let d=0,m=0,y=0,x=0,p=0,f=u.matrixWorldInverse;for(let C=0,v=h.length;C<v;C++){let P=h[C];if(P.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),d++}else if(P.isSpotLight){let U=s.spot[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(f),U.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),y++}else if(P.isRectAreaLight){let U=s.rectArea[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(f),o.identity(),a.copy(P.matrixWorld),a.premultiply(f),o.extractRotation(a),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),x++}else if(P.isPointLight){let U=s.point[m];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(f),m++}else if(P.isHemisphereLight){let U=s.hemi[p];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function Md(n,e){let t=new Bx(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function zx(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Md(n,e),t.set(r,[c])):a>=o.length?(c=new Md(n,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ol=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`;function Vx(n,e,t){let i=new Qr,s=new $e,r=new $e,a=new _t,o=new Ol({depthPacking:Um}),c=new Fl,l={},h=t.maxTextureSize,u={[Bn]:fn,[fn]:Bn,[Mn]:Mn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new wn;y.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let f=this.type;this.render=function(L,N,K){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;let E=n.getRenderTarget(),R=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending($i),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);let le=f!==Ei&&this.type===Ei,O=f===Ei&&this.type!==Ei;for(let Y=0,F=L.length;Y<F;Y++){let Q=L[Y],J=Q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let $=J.getFrameExtents();if(s.multiply($),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,J.mapSize.y=r.y)),J.map===null||le===!0||O===!0){let ne=this.type!==Ei?{minFilter:en,magFilter:en}:{};J.map!==null&&J.map.dispose(),J.map=new Pi(s.x,s.y,ne),J.map.texture.name=Q.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let re=J.getViewportCount();for(let ne=0;ne<re;ne++){let de=J.getViewport(ne);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),oe.viewport(a),J.updateMatrices(Q,ne),i=J.getFrustum(),P(N,K,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===Ei&&C(J,K),J.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(E,R,Z)};function C(L,N){let K=e.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(N,null,K,d,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(N,null,K,m,x,null)}function v(L,N,K,E){let R=null,Z=K.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Z!==void 0)R=Z;else if(R=K.isPointLight===!0?c:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let oe=R.uuid,le=N.uuid,O=l[oe];O===void 0&&(O={},l[oe]=O);let Y=O[le];Y===void 0&&(Y=R.clone(),O[le]=Y,N.addEventListener("dispose",U)),R=Y}if(R.visible=N.visible,R.wireframe=N.wireframe,E===Ei?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:u[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let oe=n.properties.get(R);oe.light=K}return R}function P(L,N,K,E,R){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Ei)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld);let le=e.update(L),O=L.material;if(Array.isArray(O)){let Y=le.groups;for(let F=0,Q=Y.length;F<Q;F++){let J=Y[F],$=O[J.materialIndex];if($&&$.visible){let re=v(L,$,E,R);L.onBeforeShadow(n,L,N,K,le,re,J),n.renderBufferDirect(K,null,le,re,L,J),L.onAfterShadow(n,L,N,K,le,re,J)}}}else if(O.visible){let Y=v(L,O,E,R);L.onBeforeShadow(n,L,N,K,le,Y,null),n.renderBufferDirect(K,null,le,Y,L,null),L.onAfterShadow(n,L,N,K,le,Y,null)}}let oe=L.children;for(let le=0,O=oe.length;le<O;le++)P(oe[le],N,K,E,R)}function U(L){L.target.removeEventListener("dispose",U);for(let K in l){let E=l[K],R=L.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Gx(n,e,t){let i=t.isWebGL2;function s(){let D=!1,ve=new _t,be=null,qe=new _t(0,0,0,0);return{setMask:function(Ve){be!==Ve&&!D&&(n.colorMask(Ve,Ve,Ve,Ve),be=Ve)},setLocked:function(Ve){D=Ve},setClear:function(Ve,St,Et,bt,Yt){Yt===!0&&(Ve*=bt,St*=bt,Et*=bt),ve.set(Ve,St,Et,bt),qe.equals(ve)===!1&&(n.clearColor(Ve,St,Et,bt),qe.copy(ve))},reset:function(){D=!1,be=null,qe.set(-1,0,0,0)}}}function r(){let D=!1,ve=null,be=null,qe=null;return{setTest:function(Ve){Ve?Fe(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Ve){ve!==Ve&&!D&&(n.depthMask(Ve),ve=Ve)},setFunc:function(Ve){if(be!==Ve){switch(Ve){case cm:n.depthFunc(n.NEVER);break;case lm:n.depthFunc(n.ALWAYS);break;case hm:n.depthFunc(n.LESS);break;case oo:n.depthFunc(n.LEQUAL);break;case um:n.depthFunc(n.EQUAL);break;case dm:n.depthFunc(n.GEQUAL);break;case fm:n.depthFunc(n.GREATER);break;case pm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Ve}},setLocked:function(Ve){D=Ve},setClear:function(Ve){qe!==Ve&&(n.clearDepth(Ve),qe=Ve)},reset:function(){D=!1,ve=null,be=null,qe=null}}}function a(){let D=!1,ve=null,be=null,qe=null,Ve=null,St=null,Et=null,bt=null,Yt=null;return{setTest:function(Tt){D||(Tt?Fe(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Tt){ve!==Tt&&!D&&(n.stencilMask(Tt),ve=Tt)},setFunc:function(Tt,Qt,Nn){(be!==Tt||qe!==Qt||Ve!==Nn)&&(n.stencilFunc(Tt,Qt,Nn),be=Tt,qe=Qt,Ve=Nn)},setOp:function(Tt,Qt,Nn){(St!==Tt||Et!==Qt||bt!==Nn)&&(n.stencilOp(Tt,Qt,Nn),St=Tt,Et=Qt,bt=Nn)},setLocked:function(Tt){D=Tt},setClear:function(Tt){Yt!==Tt&&(n.clearStencil(Tt),Yt=Tt)},reset:function(){D=!1,ve=null,be=null,qe=null,Ve=null,St=null,Et=null,bt=null,Yt=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},y=new WeakMap,x=[],p=null,f=!1,C=null,v=null,P=null,U=null,L=null,N=null,K=null,E=new tt(0,0,0),R=0,Z=!1,oe=null,le=null,O=null,Y=null,F=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,$=0,re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(re)[1]),J=$>=1):re.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),J=$>=2);let ne=null,de={},B=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),te=new _t().fromArray(B),ie=new _t().fromArray(G);function ae(D,ve,be,qe){let Ve=new Uint8Array(4),St=n.createTexture();n.bindTexture(D,St),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<be;Et++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,qe,0,n.RGBA,n.UNSIGNED_BYTE,Ve):n.texImage2D(ve+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ve);return St}let Te={};Te[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Fe(n.DEPTH_TEST),c.setFunc(oo),st(!1),A(tu),Fe(n.CULL_FACE),Le($i);function Fe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Be(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function pt(D,ve){return m[D]!==ve?(n.bindFramebuffer(D,ve),m[D]=ve,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function H(D,ve){let be=x,qe=!1;if(D)if(be=y.get(ve),be===void 0&&(be=[],y.set(ve,be)),D.isWebGLMultipleRenderTargets){let Ve=D.texture;if(be.length!==Ve.length||be[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Et=Ve.length;St<Et;St++)be[St]=n.COLOR_ATTACHMENT0+St;be.length=Ve.length,qe=!0}}else be[0]!==n.COLOR_ATTACHMENT0&&(be[0]=n.COLOR_ATTACHMENT0,qe=!0);else be[0]!==n.BACK&&(be[0]=n.BACK,qe=!0);qe&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function Kt(D){return p!==D?(n.useProgram(D),p=D,!0):!1}let He={[gs]:n.FUNC_ADD,[Yp]:n.FUNC_SUBTRACT,[$p]:n.FUNC_REVERSE_SUBTRACT};if(i)He[ru]=n.MIN,He[au]=n.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(He[ru]=D.MIN_EXT,He[au]=D.MAX_EXT)}let Ze={[jp]:n.ZERO,[Zp]:n.ONE,[Jp]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[im]:n.SRC_ALPHA_SATURATE,[tm]:n.DST_COLOR,[Qp]:n.DST_ALPHA,[Kp]:n.ONE_MINUS_SRC_COLOR,[xl]:n.ONE_MINUS_SRC_ALPHA,[nm]:n.ONE_MINUS_DST_COLOR,[em]:n.ONE_MINUS_DST_ALPHA,[sm]:n.CONSTANT_COLOR,[rm]:n.ONE_MINUS_CONSTANT_COLOR,[am]:n.CONSTANT_ALPHA,[om]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(D,ve,be,qe,Ve,St,Et,bt,Yt,Tt){if(D===$i){f===!0&&(Be(n.BLEND),f=!1);return}if(f===!1&&(Fe(n.BLEND),f=!0),D!==qp){if(D!==C||Tt!==Z){if((v!==gs||L!==gs)&&(n.blendEquation(n.FUNC_ADD),v=gs,L=gs),Tt)switch(D){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}P=null,U=null,N=null,K=null,E.set(0,0,0),R=0,C=D,Z=Tt}return}Ve=Ve||ve,St=St||be,Et=Et||qe,(ve!==v||Ve!==L)&&(n.blendEquationSeparate(He[ve],He[Ve]),v=ve,L=Ve),(be!==P||qe!==U||St!==N||Et!==K)&&(n.blendFuncSeparate(Ze[be],Ze[qe],Ze[St],Ze[Et]),P=be,U=qe,N=St,K=Et),(bt.equals(E)===!1||Yt!==R)&&(n.blendColor(bt.r,bt.g,bt.b,Yt),E.copy(bt),R=Yt),C=D,Z=!1}function Rt(D,ve){D.side===Mn?Be(n.CULL_FACE):Fe(n.CULL_FACE);let be=D.side===fn;ve&&(be=!be),st(be),D.blending===ar&&D.transparent===!1?Le($i):Le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let qe=D.stencilWrite;l.setTest(qe),qe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(D){oe!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),oe=D)}function A(D){D!==Gp?(Fe(n.CULL_FACE),D!==le&&(D===tu?n.cullFace(n.BACK):D===Wp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),le=D}function S(D){D!==O&&(J&&n.lineWidth(D),O=D)}function W(D,ve,be){D?(Fe(n.POLYGON_OFFSET_FILL),(Y!==ve||F!==be)&&(n.polygonOffset(ve,be),Y=ve,F=be)):Be(n.POLYGON_OFFSET_FILL)}function fe(D){D?Fe(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function he(D){D===void 0&&(D=n.TEXTURE0+Q-1),ne!==D&&(n.activeTexture(D),ne=D)}function pe(D,ve,be){be===void 0&&(ne===null?be=n.TEXTURE0+Q-1:be=ne);let qe=de[be];qe===void 0&&(qe={type:void 0,texture:void 0},de[be]=qe),(qe.type!==D||qe.texture!==ve)&&(ne!==be&&(n.activeTexture(be),ne=be),n.bindTexture(D,ve||Te[D]),qe.type=D,qe.texture=ve)}function De(){let D=de[ne];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(D){te.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function yt(D){ie.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function It(D,ve){let be=u.get(ve);be===void 0&&(be=new WeakMap,u.set(ve,be));let qe=be.get(D);qe===void 0&&(qe=n.getUniformBlockIndex(ve,D.name),be.set(D,qe))}function ot(D,ve){let qe=u.get(ve).get(D);h.get(ve)!==qe&&(n.uniformBlockBinding(ve,qe,D.__bindingPointIndex),h.set(ve,qe))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ne=null,de={},m={},y=new WeakMap,x=[],p=null,f=!1,C=null,v=null,P=null,U=null,L=null,N=null,K=null,E=new tt(0,0,0),R=0,Z=!1,oe=null,le=null,O=null,Y=null,F=null,te.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Fe,disable:Be,bindFramebuffer:pt,drawBuffers:H,useProgram:Kt,setBlending:Le,setMaterial:Rt,setFlipSided:st,setCullFace:A,setLineWidth:S,setPolygonOffset:W,setScissorTest:fe,activeTexture:he,bindTexture:pe,unbindTexture:De,compressedTexImage2D:Me,compressedTexImage3D:Ce,texImage2D:ze,texImage3D:Re,updateUBOMapping:It,uniformBlockBinding:ot,texStorage2D:ht,texStorage3D:Ye,texSubImage2D:Ge,texSubImage3D:rt,compressedTexSubImage2D:ue,compressedTexSubImage3D:vt,scissor:Qe,viewport:yt,reset:ye}}function Wx(n,e,t,i,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return m?new OffscreenCanvas(A,S):Zr("canvas")}function x(A,S,W,fe){let he=1;if((A.width>fe||A.height>fe)&&(he=fe/Math.max(A.width,A.height)),he<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let pe=S?mo:Math.floor,De=pe(he*A.width),Me=pe(he*A.height);u===void 0&&(u=y(De,Me));let Ce=W?y(De,Me):u;return Ce.width=De,Ce.height=Me,Ce.getContext("2d").drawImage(A,0,0,De,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+De+"x"+Me+")."),Ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return El(A.width)&&El(A.height)}function f(A){return o?!1:A.wrapS!==un||A.wrapT!==un||A.minFilter!==en&&A.minFilter!==yn}function C(A,S){return A.generateMipmaps&&S&&A.minFilter!==en&&A.minFilter!==yn}function v(A){n.generateMipmap(A)}function P(A,S,W,fe,he=!1){if(o===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe=S;if(S===n.RED&&(W===n.FLOAT&&(pe=n.R32F),W===n.HALF_FLOAT&&(pe=n.R16F),W===n.UNSIGNED_BYTE&&(pe=n.R8)),S===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(pe=n.R8UI),W===n.UNSIGNED_SHORT&&(pe=n.R16UI),W===n.UNSIGNED_INT&&(pe=n.R32UI),W===n.BYTE&&(pe=n.R8I),W===n.SHORT&&(pe=n.R16I),W===n.INT&&(pe=n.R32I)),S===n.RG&&(W===n.FLOAT&&(pe=n.RG32F),W===n.HALF_FLOAT&&(pe=n.RG16F),W===n.UNSIGNED_BYTE&&(pe=n.RG8)),S===n.RGBA){let De=he?ho:Ct.getTransfer(fe);W===n.FLOAT&&(pe=n.RGBA32F),W===n.HALF_FLOAT&&(pe=n.RGBA16F),W===n.UNSIGNED_BYTE&&(pe=De===Dt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function U(A,S,W){return C(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){return A===en||A===cu||A===Fc?n.NEAREST:n.LINEAR}function N(A){let S=A.target;S.removeEventListener("dispose",N),E(S),S.isVideoTexture&&h.delete(S)}function K(A){let S=A.target;S.removeEventListener("dispose",K),Z(S)}function E(A){let S=i.get(A);if(S.__webglInit===void 0)return;let W=A.source,fe=d.get(W);if(fe){let he=fe[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&R(A),Object.keys(fe).length===0&&d.delete(W)}i.remove(A)}function R(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let W=A.source,fe=d.get(W);delete fe[S.__cacheKey],a.memory.textures--}function Z(A){let S=A.texture,W=i.get(A),fe=i.get(S);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(W.__webglFramebuffer[he]))for(let pe=0;pe<W.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer(W.__webglFramebuffer[he][pe]);else n.deleteFramebuffer(W.__webglFramebuffer[he]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[he])}else{if(Array.isArray(W.__webglFramebuffer))for(let he=0;he<W.__webglFramebuffer.length;he++)n.deleteFramebuffer(W.__webglFramebuffer[he]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let he=0;he<W.__webglColorRenderbuffer.length;he++)W.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[he]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let he=0,pe=S.length;he<pe;he++){let De=i.get(S[he]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),a.memory.textures--),i.remove(S[he])}i.remove(S),i.remove(A)}let oe=0;function le(){oe=0}function O(){let A=oe;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),oe+=1,A}function Y(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function F(A,S){let W=i.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let fe=A.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,A,S);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+S)}function Q(A,S){let W=i.get(A);if(A.version>0&&W.__version!==A.version){te(W,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+S)}function J(A,S){let W=i.get(A);if(A.version>0&&W.__version!==A.version){te(W,A,S);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+S)}function $(A,S){let W=i.get(A);if(A.version>0&&W.__version!==A.version){ie(W,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+S)}let re={[Ji]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},ne={[en]:n.NEAREST,[cu]:n.NEAREST_MIPMAP_NEAREST,[Fc]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[wm]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},de={[Fm]:n.NEVER,[Gm]:n.ALWAYS,[Bm]:n.LESS,[Qd]:n.LEQUAL,[zm]:n.EQUAL,[Vm]:n.GEQUAL,[km]:n.GREATER,[Hm]:n.NOTEQUAL};function B(A,S,W){if(W?(n.texParameteri(A,n.TEXTURE_WRAP_S,re[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,re[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,re[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ne[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ne[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==un||S.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,L(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,L(S.minFilter)),S.minFilter!==en&&S.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===en||S.minFilter!==Fc&&S.minFilter!==Ki||S.type===Ai&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===jr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function G(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N));let fe=S.source,he=d.get(fe);he===void 0&&(he={},d.set(fe,he));let pe=Y(S);if(pe!==A.__cacheKey){he[pe]===void 0&&(he[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),he[pe].usedTimes++;let De=he[A.__cacheKey];De!==void 0&&(he[A.__cacheKey].usedTimes--,De.usedTimes===0&&R(S)),A.__cacheKey=pe,A.__webglTexture=he[pe].texture}return W}function te(A,S,W){let fe=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=n.TEXTURE_3D);let he=G(A,S),pe=S.source;t.bindTexture(fe,A.__webglTexture,n.TEXTURE0+W);let De=i.get(pe);if(pe.version!==De.__version||he===!0){t.activeTexture(n.TEXTURE0+W);let Me=Ct.getPrimaries(Ct.workingColorSpace),Ce=S.colorSpace===Fn?null:Ct.getPrimaries(S.colorSpace),Ge=S.colorSpace===Fn||Me===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let rt=f(S)&&p(S.image)===!1,ue=x(S.image,rt,!1,s.maxTextureSize);ue=st(S,ue);let vt=p(ue)||o,ht=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type),ze=P(S.internalFormat,ht,Ye,S.colorSpace,S.isVideoTexture);B(fe,S,vt);let Re,Qe=S.mipmaps,yt=o&&S.isVideoTexture!==!0&&ze!==Jd,It=De.__version===void 0||he===!0,ot=U(S,ue,vt);if(S.isDepthTexture)ze=n.DEPTH_COMPONENT,o?S.type===Ai?ze=n.DEPTH_COMPONENT32F:S.type===Yi?ze=n.DEPTH_COMPONENT24:S.type===xs?ze=n.DEPTH24_STENCIL8:ze=n.DEPTH_COMPONENT16:S.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vs&&ze===n.DEPTH_COMPONENT&&S.type!==Ql&&S.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Yi,Ye=r.convert(S.type)),S.format===ur&&ze===n.DEPTH_COMPONENT&&(ze=n.DEPTH_STENCIL,S.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=xs,Ye=r.convert(S.type))),It&&(yt?t.texStorage2D(n.TEXTURE_2D,1,ze,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ze,ue.width,ue.height,0,ht,Ye,null));else if(S.isDataTexture)if(Qe.length>0&&vt){yt&&It&&t.texStorage2D(n.TEXTURE_2D,ot,ze,Qe[0].width,Qe[0].height);for(let ye=0,D=Qe.length;ye<D;ye++)Re=Qe[ye],yt?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,ht,Ye,Re.data):t.texImage2D(n.TEXTURE_2D,ye,ze,Re.width,Re.height,0,ht,Ye,Re.data);S.generateMipmaps=!1}else yt?(It&&t.texStorage2D(n.TEXTURE_2D,ot,ze,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ht,Ye,ue.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ue.width,ue.height,0,ht,Ye,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){yt&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ze,Qe[0].width,Qe[0].height,ue.depth);for(let ye=0,D=Qe.length;ye<D;ye++)Re=Qe[ye],S.format!==On?ht!==null?yt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,ue.depth,ht,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,ze,Re.width,Re.height,ue.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,ue.depth,ht,Ye,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,ze,Re.width,Re.height,ue.depth,0,ht,Ye,Re.data)}else{yt&&It&&t.texStorage2D(n.TEXTURE_2D,ot,ze,Qe[0].width,Qe[0].height);for(let ye=0,D=Qe.length;ye<D;ye++)Re=Qe[ye],S.format!==On?ht!==null?yt?t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,ht,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,ht,Ye,Re.data):t.texImage2D(n.TEXTURE_2D,ye,ze,Re.width,Re.height,0,ht,Ye,Re.data)}else if(S.isDataArrayTexture)yt?(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ze,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ht,Ye,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ue.width,ue.height,ue.depth,0,ht,Ye,ue.data);else if(S.isData3DTexture)yt?(It&&t.texStorage3D(n.TEXTURE_3D,ot,ze,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ht,Ye,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ue.width,ue.height,ue.depth,0,ht,Ye,ue.data);else if(S.isFramebufferTexture){if(It)if(yt)t.texStorage2D(n.TEXTURE_2D,ot,ze,ue.width,ue.height);else{let ye=ue.width,D=ue.height;for(let ve=0;ve<ot;ve++)t.texImage2D(n.TEXTURE_2D,ve,ze,ye,D,0,ht,Ye,null),ye>>=1,D>>=1}}else if(Qe.length>0&&vt){yt&&It&&t.texStorage2D(n.TEXTURE_2D,ot,ze,Qe[0].width,Qe[0].height);for(let ye=0,D=Qe.length;ye<D;ye++)Re=Qe[ye],yt?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ht,Ye,Re):t.texImage2D(n.TEXTURE_2D,ye,ze,ht,Ye,Re);S.generateMipmaps=!1}else yt?(It&&t.texStorage2D(n.TEXTURE_2D,ot,ze,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Ye,ue)):t.texImage2D(n.TEXTURE_2D,0,ze,ht,Ye,ue);C(S,vt)&&v(fe),De.__version=pe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ie(A,S,W){if(S.image.length!==6)return;let fe=G(A,S),he=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+W);let pe=i.get(he);if(he.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+W);let De=Ct.getPrimaries(Ct.workingColorSpace),Me=S.colorSpace===Fn?null:Ct.getPrimaries(S.colorSpace),Ce=S.colorSpace===Fn||De===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let ye=0;ye<6;ye++)!Ge&&!rt?ue[ye]=x(S.image[ye],!1,!0,s.maxCubemapSize):ue[ye]=rt?S.image[ye].image:S.image[ye],ue[ye]=st(S,ue[ye]);let vt=ue[0],ht=p(vt)||o,Ye=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),Re=P(S.internalFormat,Ye,ze,S.colorSpace),Qe=o&&S.isVideoTexture!==!0,yt=pe.__version===void 0||fe===!0,It=U(S,vt,ht);B(n.TEXTURE_CUBE_MAP,S,ht);let ot;if(Ge){Qe&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Re,vt.width,vt.height);for(let ye=0;ye<6;ye++){ot=ue[ye].mipmaps;for(let D=0;D<ot.length;D++){let ve=ot[D];S.format!==On?Ye!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D,0,0,ve.width,ve.height,Ye,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D,0,0,ve.width,ve.height,Ye,ze,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D,Re,ve.width,ve.height,0,Ye,ze,ve.data)}}}else{ot=S.mipmaps,Qe&&yt&&(ot.length>0&&It++,t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Re,ue[0].width,ue[0].height));for(let ye=0;ye<6;ye++)if(rt){Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ue[ye].width,ue[ye].height,Ye,ze,ue[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Re,ue[ye].width,ue[ye].height,0,Ye,ze,ue[ye].data);for(let D=0;D<ot.length;D++){let be=ot[D].image[ye].image;Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D+1,0,0,be.width,be.height,Ye,ze,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D+1,Re,be.width,be.height,0,Ye,ze,be.data)}}else{Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ye,ze,ue[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Re,Ye,ze,ue[ye]);for(let D=0;D<ot.length;D++){let ve=ot[D];Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D+1,0,0,Ye,ze,ve.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,D+1,Re,Ye,ze,ve.image[ye])}}}C(S,ht)&&v(n.TEXTURE_CUBE_MAP),pe.__version=he.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ae(A,S,W,fe,he,pe){let De=r.convert(W.format,W.colorSpace),Me=r.convert(W.type),Ce=P(W.internalFormat,De,Me,W.colorSpace);if(!i.get(S).__hasExternalTextures){let rt=Math.max(1,S.width>>pe),ue=Math.max(1,S.height>>pe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,Ce,rt,ue,S.depth,0,De,Me,null):t.texImage2D(he,pe,Ce,rt,ue,0,De,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Le(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,he,i.get(W).__webglTexture,0,Ze(S)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,he,i.get(W).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(A,S,W){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let fe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||Le(S)){let he=S.depthTexture;he&&he.isDepthTexture&&(he.type===Ai?fe=n.DEPTH_COMPONENT32F:he.type===Yi&&(fe=n.DEPTH_COMPONENT24));let pe=Ze(S);Le(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let fe=Ze(S);W&&Le(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,S.width,S.height):Le(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let fe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let he=0;he<fe.length;he++){let pe=fe[he],De=r.convert(pe.format,pe.colorSpace),Me=r.convert(pe.type),Ce=P(pe.internalFormat,De,Me,pe.colorSpace),Ge=Ze(S);W&&Le(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ce,S.width,S.height):Le(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);let fe=i.get(S.depthTexture).__webglTexture,he=Ze(S);if(S.depthTexture.format===vs)Le(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(S.depthTexture.format===ur)Le(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Be(A){let S=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Fe(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]=n.createRenderbuffer(),Te(S.__webglDepthbuffer[fe],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Te(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(A,S,W){let fe=i.get(A);S!==void 0&&ae(fe.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Be(A)}function H(A){let S=A.texture,W=i.get(A),fe=i.get(S);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=S.version,a.memory.textures++);let he=A.isWebGLCubeRenderTarget===!0,pe=A.isWebGLMultipleRenderTargets===!0,De=p(A)||o;if(he){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)W.__webglFramebuffer[Me][Ce]=n.createFramebuffer()}else W.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)W.__webglFramebuffer[Me]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let Me=A.texture;for(let Ce=0,Ge=Me.length;Ce<Ge;Ce++){let rt=i.get(Me[Ce]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Le(A)===!1){let Me=pe?S:[S];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Me.length;Ce++){let Ge=Me[Ce];W.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);let rt=r.convert(Ge.format,Ge.colorSpace),ue=r.convert(Ge.type),vt=P(Ge.internalFormat,rt,ue,Ge.colorSpace,A.isXRRenderTarget===!0),ht=Ze(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,vt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),B(n.TEXTURE_CUBE_MAP,S,De);for(let Me=0;Me<6;Me++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ae(W.__webglFramebuffer[Me][Ce],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ce);else ae(W.__webglFramebuffer[Me],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);C(S,De)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let Me=A.texture;for(let Ce=0,Ge=Me.length;Ce<Ge;Ce++){let rt=Me[Ce],ue=i.get(rt);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),B(n.TEXTURE_2D,rt,De),ae(W.__webglFramebuffer,A,rt,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),C(rt,De)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,fe.__webglTexture),B(Me,S,De),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ae(W.__webglFramebuffer[Ce],A,S,n.COLOR_ATTACHMENT0,Me,Ce);else ae(W.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,Me,0);C(S,De)&&v(Me),t.unbindTexture()}A.depthBuffer&&Be(A)}function Kt(A){let S=p(A)||o,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let fe=0,he=W.length;fe<he;fe++){let pe=W[fe];if(C(pe,S)){let De=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(pe).__webglTexture;t.bindTexture(De,Me),v(De),t.unbindTexture()}}}function He(A){if(o&&A.samples>0&&Le(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,fe=A.height,he=n.COLOR_BUFFER_BIT,pe=[],De=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),Ce=A.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Ge=0;Ge<S.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ge=0;Ge<S.length;Ge++){pe.push(n.COLOR_ATTACHMENT0+Ge),A.depthBuffer&&pe.push(De);let rt=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(rt===!1&&(A.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ge]),rt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),Ce){let ue=i.get(S[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,W,fe,0,0,W,fe,he,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Ge=0;Ge<S.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ge]);let rt=i.get(S[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,rt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Ze(A){return Math.min(s.maxSamples,A.samples)}function Le(A){let S=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function st(A,S){let W=A.colorSpace,fe=A.format,he=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===wl||W!==Ri&&W!==Fn&&(Ct.getTransfer(W)===Dt?o===!1?e.has("EXT_sRGB")===!0&&fe===On?(A.format=wl,A.minFilter=yn,A.generateMipmaps=!1):S=go.sRGBToLinear(S):(fe!==On||he!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}this.allocateTextureUnit=O,this.resetTextureUnits=le,this.setTexture2D=F,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=pt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Le}function Xx(n,e,t){let i=t.isWebGL2;function s(r,a=Fn){let o,c=Ct.getTransfer(a);if(r===Zi)return n.UNSIGNED_BYTE;if(r===qd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Yd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Em)return n.BYTE;if(r===Tm)return n.SHORT;if(r===Ql)return n.UNSIGNED_SHORT;if(r===Xd)return n.INT;if(r===Yi)return n.UNSIGNED_INT;if(r===Ai)return n.FLOAT;if(r===jr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Am)return n.ALPHA;if(r===On)return n.RGBA;if(r===Cm)return n.LUMINANCE;if(r===Rm)return n.LUMINANCE_ALPHA;if(r===vs)return n.DEPTH_COMPONENT;if(r===ur)return n.DEPTH_STENCIL;if(r===wl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Pm)return n.RED;if(r===$d)return n.RED_INTEGER;if(r===Lm)return n.RG;if(r===jd)return n.RG_INTEGER;if(r===Zd)return n.RGBA_INTEGER;if(r===Bc||r===zc||r===kc||r===Hc)if(c===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lu||r===hu||r===uu||r===du)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===du)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fu||r===pu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===fu)return c===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===pu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mu||r===gu||r===_u||r===yu||r===xu||r===vu||r===bu||r===Mu||r===Su||r===wu||r===Eu||r===Tu||r===Au||r===Cu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===mu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_u)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Su)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Au)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vc||r===Ru||r===Pu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Vc)return c===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Im||r===Lu||r===Iu||r===Nu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Vc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Bl=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dn=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qx={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,y=.005;l.inputState.pinching&&d>m+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zl=class extends Qi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,y=null,x=t.getContextAttributes(),p=null,f=null,C=[],v=[],P=new $e,U=null,L=new Gt;L.layers.enable(1),L.viewport=new _t;let N=new Gt;N.layers.enable(2),N.viewport=new _t;let K=[L,N],E=new Bl;E.layers.enable(1),E.layers.enable(2);let R=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=C[B];return G===void 0&&(G=new $r,C[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=C[B];return G===void 0&&(G=new $r,C[B]=G),G.getGripSpace()},this.getHand=function(B){let G=C[B];return G===void 0&&(G=new $r,C[B]=G),G.getHandSpace()};function oe(B){let G=v.indexOf(B.inputSource);if(G===-1)return;let te=C[G];te!==void 0&&(te.update(B.inputSource,B.frame,l||a),te.dispatchEvent({type:B.type,data:B.inputSource}))}function le(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",O);for(let B=0;B<C.length;B++){let G=v[B];G!==null&&(v[B]=null,C[B].disconnect(G))}R=null,Z=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",le),s.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let G={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Pi(m.framebufferWidth,m.framebufferHeight,{format:On,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let G=null,te=null,ie=null;x.depth&&(ie=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=x.stencil?ur:vs,te=x.stencil?xs:Yi);let ae={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Pi(d.textureWidth,d.textureHeight,{format:On,type:Zi,depthTexture:new Eo(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Te=e.properties.get(f);Te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(B){for(let G=0;G<B.removed.length;G++){let te=B.removed[G],ie=v.indexOf(te);ie>=0&&(v[ie]=null,C[ie].disconnect(te))}for(let G=0;G<B.added.length;G++){let te=B.added[G],ie=v.indexOf(te);if(ie===-1){for(let Te=0;Te<C.length;Te++)if(Te>=v.length){v.push(te),ie=Te;break}else if(v[Te]===null){v[Te]=te,ie=Te;break}if(ie===-1)break}let ae=C[ie];ae&&ae.connect(te)}}let Y=new I,F=new I;function Q(B,G,te){Y.setFromMatrixPosition(G.matrixWorld),F.setFromMatrixPosition(te.matrixWorld);let ie=Y.distanceTo(F),ae=G.projectionMatrix.elements,Te=te.projectionMatrix.elements,Fe=ae[14]/(ae[10]-1),Be=ae[14]/(ae[10]+1),pt=(ae[9]+1)/ae[5],H=(ae[9]-1)/ae[5],Kt=(ae[8]-1)/ae[0],He=(Te[8]+1)/Te[0],Ze=Fe*Kt,Le=Fe*He,Rt=ie/(-Kt+He),st=Rt*-Kt;G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(st),B.translateZ(Rt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let A=Fe+Rt,S=Be+Rt,W=Ze-st,fe=Le+(ie-st),he=pt*Be/S*A,pe=H*Be/S*A;B.projectionMatrix.makePerspective(W,fe,he,pe,A,S),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function J(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;E.near=N.near=L.near=B.near,E.far=N.far=L.far=B.far,(R!==E.near||Z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,Z=E.far);let G=B.parent,te=E.cameras;J(E,G);for(let ie=0;ie<te.length;ie++)J(te[ie],G);te.length===2?Q(E,L,N):E.projectionMatrix.copy(L.projectionMatrix),$(B,E,G)};function $(B,G,te){te===null?B.matrix.copy(G.matrixWorld):(B.matrix.copy(te.matrixWorld),B.matrix.invert(),B.matrix.multiply(G.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=dr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let re=null;function ne(B,G){if(h=G.getViewerPose(l||a),y=G,h!==null){let te=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ie=!1;te.length!==E.cameras.length&&(E.cameras.length=0,ie=!0);for(let ae=0;ae<te.length;ae++){let Te=te[ae],Fe=null;if(m!==null)Fe=m.getViewport(Te);else{let pt=u.getViewSubImage(d,Te);Fe=pt.viewport,ae===0&&(e.setRenderTargetTextures(f,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(f))}let Be=K[ae];Be===void 0&&(Be=new Gt,Be.layers.enable(ae),Be.viewport=new _t,K[ae]=Be),Be.matrix.fromArray(Te.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Te.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ae===0&&(E.matrix.copy(Be.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ie===!0&&E.cameras.push(Be)}}for(let te=0;te<C.length;te++){let ie=v[te],ae=C[te];ie!==null&&ae!==void 0&&ae.update(ie,G,l||a)}re&&re(B,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),y=null}let de=new sf;de.setAnimationLoop(ne),this.setAnimationLoop=function(B){re=B},this.dispose=function(){}}};function Yx(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,nf(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,C,v,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,P)):f.isMeshMatcapMaterial?(r(p,f),y(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,C,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===fn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===fn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let C=e.get(f).envMap;if(C&&(p.envMap.value=C,p.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,C,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*C,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,C){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let C=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $x(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,v){let P=v.program;i.uniformBlockBinding(C,P)}function l(C,v){let P=s[C.id];P===void 0&&(y(C),P=h(C),s[C.id]=P,C.addEventListener("dispose",p));let U=v.program;i.updateUBOMapping(C,U);let L=e.render.frame;r[C.id]!==L&&(d(C),r[C.id]=L)}function h(C){let v=u();C.__bindingPointIndex=v;let P=n.createBuffer(),U=C.__size,L=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,U,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,P),P}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let v=s[C.id],P=C.uniforms,U=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let L=0,N=P.length;L<N;L++){let K=Array.isArray(P[L])?P[L]:[P[L]];for(let E=0,R=K.length;E<R;E++){let Z=K[E];if(m(Z,L,E,U)===!0){let oe=Z.__offset,le=Array.isArray(Z.value)?Z.value:[Z.value],O=0;for(let Y=0;Y<le.length;Y++){let F=le[Y],Q=x(F);typeof F=="number"||typeof F=="boolean"?(Z.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,oe+O,Z.__data)):F.isMatrix3?(Z.__data[0]=F.elements[0],Z.__data[1]=F.elements[1],Z.__data[2]=F.elements[2],Z.__data[3]=0,Z.__data[4]=F.elements[3],Z.__data[5]=F.elements[4],Z.__data[6]=F.elements[5],Z.__data[7]=0,Z.__data[8]=F.elements[6],Z.__data[9]=F.elements[7],Z.__data[10]=F.elements[8],Z.__data[11]=0):(F.toArray(Z.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,oe,Z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,v,P,U){let L=C.value,N=v+"_"+P;if(U[N]===void 0)return typeof L=="number"||typeof L=="boolean"?U[N]=L:U[N]=L.clone(),!0;{let K=U[N];if(typeof L=="number"||typeof L=="boolean"){if(K!==L)return U[N]=L,!0}else if(K.equals(L)===!1)return K.copy(L),!0}return!1}function y(C){let v=C.uniforms,P=0,U=16;for(let N=0,K=v.length;N<K;N++){let E=Array.isArray(v[N])?v[N]:[v[N]];for(let R=0,Z=E.length;R<Z;R++){let oe=E[R],le=Array.isArray(oe.value)?oe.value:[oe.value];for(let O=0,Y=le.length;O<Y;O++){let F=le[O],Q=x(F),J=P%U;J!==0&&U-J<Q.boundary&&(P+=U-J),oe.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=Q.storage}}}let L=P%U;return L>0&&(P+=U-L),C.__size=P,C.__cache={},this}function x(C){let v={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function p(C){let v=C.target;v.removeEventListener("dispose",p);let P=a.indexOf(v.__bindingPointIndex);a.splice(P,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let C in s)n.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ea=class{constructor(e={}){let{canvas:t=sg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),y=new Int32Array(4),x=null,p=null,f=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;let v=this,P=!1,U=0,L=0,N=null,K=-1,E=null,R=new _t,Z=new _t,oe=null,le=new tt(0),O=0,Y=t.width,F=t.height,Q=1,J=null,$=null,re=new _t(0,0,Y,F),ne=new _t(0,0,Y,F),de=!1,B=new Qr,G=!1,te=!1,ie=null,ae=new nt,Te=new $e,Fe=new I,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return N===null?Q:1}let H=i;function Kt(T,z){for(let X=0;X<T.length;X++){let j=T[X],V=t.getContext(j,z);if(V!==null)return V}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ve,!1),H===null){let z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),H=Kt(z,T),H===null)throw Kt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Ze,Le,Rt,st,A,S,W,fe,he,pe,De,Me,Ce,Ge,rt,ue,vt,ht,Ye,ze,Re,Qe,yt;function It(){He=new fy(H),Ze=new oy(H,He,e),He.init(Ze),Re=new Xx(H,He,Ze),Le=new Gx(H,He,Ze),Rt=new gy(H),st=new Lx,A=new Wx(H,He,Le,st,Ze,Re,Rt),S=new ly(v),W=new dy(v),fe=new wg(H,Ze),Qe=new ry(H,He,fe,Ze),he=new py(H,fe,Rt,Qe),pe=new vy(H,he,fe,Rt),ht=new xy(H,Ze,A),rt=new cy(st),De=new Px(v,S,W,He,Ze,Qe,rt),Me=new Yx(v,st),Ce=new Nx,Ge=new zx(He,Ze),vt=new sy(v,S,W,Le,pe,d,c),ue=new Vx(v,pe,Ze),yt=new $x(H,Rt,Ze,Le),Ye=new ay(H,He,Rt,Ze),ze=new my(H,He,Rt,Ze),Rt.programs=De.programs,v.capabilities=Ze,v.extensions=He,v.properties=st,v.renderLists=Ce,v.shadowMap=ue,v.state=Le,v.info=Rt}It();let ot=new zl(v,H);this.xr=ot,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(Y,F,!1))},this.getSize=function(T){return T.set(Y,F)},this.setSize=function(T,z,X=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,F=z,t.width=Math.floor(T*Q),t.height=Math.floor(z*Q),X===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Y*Q,F*Q).floor()},this.setDrawingBufferSize=function(T,z,X){Y=T,F=z,Q=X,t.width=Math.floor(T*X),t.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,z,X,j){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,z,X,j),Le.viewport(R.copy(re).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,z,X,j){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,z,X,j),Le.scissor(Z.copy(ne).multiplyScalar(Q).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){Le.setScissorTest(de=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(T=!0,z=!0,X=!0){let j=0;if(T){let V=!1;if(N!==null){let we=N.texture.format;V=we===Zd||we===jd||we===$d}if(V){let we=N.texture.type,Ee=we===Zi||we===Yi||we===Ql||we===xs||we===qd||we===Yd,Ue=vt.getClearColor(),We=vt.getClearAlpha(),et=Ue.r,Je=Ue.g,Ke=Ue.b;Ee?(m[0]=et,m[1]=Je,m[2]=Ke,m[3]=We,H.clearBufferuiv(H.COLOR,0,m)):(y[0]=et,y[1]=Je,y[2]=Ke,y[3]=We,H.clearBufferiv(H.COLOR,0,y))}else j|=H.COLOR_BUFFER_BIT}z&&(j|=H.DEPTH_BUFFER_BIT),X&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ce.dispose(),Ge.dispose(),st.dispose(),S.dispose(),W.dispose(),pe.dispose(),Qe.dispose(),yt.dispose(),De.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Yt),ot.removeEventListener("sessionend",Tt),ie&&(ie.dispose(),ie=null),Qt.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let T=Rt.autoReset,z=ue.enabled,X=ue.autoUpdate,j=ue.needsUpdate,V=ue.type;It(),Rt.autoReset=T,ue.enabled=z,ue.autoUpdate=X,ue.needsUpdate=j,ue.type=V}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){let z=T.target;z.removeEventListener("dispose",be),qe(z)}function qe(T){Ve(T),st.remove(T)}function Ve(T){let z=st.get(T).programs;z!==void 0&&(z.forEach(function(X){De.releaseProgram(X)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,j,V,we){z===null&&(z=Be);let Ee=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Nc(T,z,X,j,V);Le.setMaterial(j,Ee);let We=X.index,et=1;if(j.wireframe===!0){if(We=he.getWireframeAttribute(X),We===void 0)return;et=2}let Je=X.drawRange,Ke=X.attributes.position,Ot=Je.start*et,mn=(Je.start+Je.count)*et;we!==null&&(Ot=Math.max(Ot,we.start*et),mn=Math.min(mn,(we.start+we.count)*et)),We!==null?(Ot=Math.max(Ot,0),mn=Math.min(mn,We.count)):Ke!=null&&(Ot=Math.max(Ot,0),mn=Math.min(mn,Ke.count));let Ht=mn-Ot;if(Ht<0||Ht===1/0)return;Qe.setup(V,j,Ue,X,We);let Dn,Pt=Ye;if(We!==null&&(Dn=fe.get(We),Pt=ze,Pt.setIndex(Dn)),V.isMesh)j.wireframe===!0?(Le.setLineWidth(j.wireframeLinewidth*pt()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(V.isLine){let je=j.linewidth;je===void 0&&(je=1),Le.setLineWidth(je*pt()),V.isLineSegments?Pt.setMode(H.LINES):V.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else V.isPoints?Pt.setMode(H.POINTS):V.isSprite&&Pt.setMode(H.TRIANGLES);if(V.isBatchedMesh)Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Pt.renderInstances(Ot,Ht,V.count);else if(X.isInstancedBufferGeometry){let je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ir=Math.min(X.instanceCount,je);Pt.renderInstances(Ot,Ht,Ir)}else Pt.render(Ot,Ht)};function St(T,z,X){T.transparent===!0&&T.side===Mn&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Os(T,z,X),T.side=Bn,T.needsUpdate=!0,Os(T,z,X),T.side=Mn):Os(T,z,X)}this.compile=function(T,z,X=null){X===null&&(X=T),p=Ge.get(X),p.init(),C.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(v._useLegacyLights);let j=new Set;return T.traverse(function(V){let we=V.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){let Ue=we[Ee];St(Ue,X,V),j.add(Ue)}else St(we,X,V),j.add(we)}),C.pop(),p=null,j},this.compileAsync=function(T,z,X=null){let j=this.compile(T,z,X);return new Promise(V=>{function we(){if(j.forEach(function(Ee){st.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){V(T);return}setTimeout(we,10)}He.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Et=null;function bt(T){Et&&Et(T)}function Yt(){Qt.stop()}function Tt(){Qt.start()}let Qt=new sf;Qt.setAnimationLoop(bt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(T){Et=T,ot.setAnimationLoop(T),T===null?Qt.stop():Qt.start()},ot.addEventListener("sessionstart",Yt),ot.addEventListener("sessionend",Tt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,N),p=Ge.get(T,C.length),p.init(),C.push(p),ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B.setFromProjectionMatrix(ae),te=this.localClippingEnabled,G=rt.init(this.clippingPlanes,te),x=Ce.get(T,f.length),x.init(),f.push(x),Nn(T,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(J,$),this.info.render.frame++,G===!0&&rt.beginShadows();let X=p.state.shadowsArray;if(ue.render(X,T,z),G===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),vt.render(x,T),p.setupLights(v._useLegacyLights),z.isArrayCamera){let j=z.cameras;for(let V=0,we=j.length;V<we;V++){let Ee=j[V];Ta(x,T,Ee,Ee.viewport)}}else Ta(x,T,z);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(v,T,z),Qe.resetDefaultState(),K=-1,E=null,C.pop(),C.length>0?p=C[C.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Nn(T,z,X,j){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){j&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);let Ee=pe.update(T),Ue=T.material;Ue.visible&&x.push(T,Ee,Ue,X,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){let Ee=pe.update(T),Ue=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Fe.copy(Ee.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(ae)),Array.isArray(Ue)){let We=Ee.groups;for(let et=0,Je=We.length;et<Je;et++){let Ke=We[et],Ot=Ue[Ke.materialIndex];Ot&&Ot.visible&&x.push(T,Ee,Ot,X,Fe.z,Ke)}}else Ue.visible&&x.push(T,Ee,Ue,X,Fe.z,null)}}let we=T.children;for(let Ee=0,Ue=we.length;Ee<Ue;Ee++)Nn(we[Ee],z,X,j)}function Ta(T,z,X,j){let V=T.opaque,we=T.transmissive,Ee=T.transparent;p.setupLightsView(X),G===!0&&rt.setGlobalState(v.clippingPlanes,X),we.length>0&&Ic(V,we,z,X),j&&Le.viewport(R.copy(j)),V.length>0&&Us(V,z,X),we.length>0&&Us(we,z,X),Ee.length>0&&Us(Ee,z,X),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ic(T,z,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let we=Ze.isWebGL2;ie===null&&(ie=new Pi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?jr:Zi,minFilter:Ki,samples:we?4:0})),v.getDrawingBufferSize(Te),we?ie.setSize(Te.x,Te.y):ie.setSize(mo(Te.x),mo(Te.y));let Ee=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(le),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();let Ue=v.toneMapping;v.toneMapping=ji,Us(T,X,j),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie);let We=!1;for(let et=0,Je=z.length;et<Je;et++){let Ke=z[et],Ot=Ke.object,mn=Ke.geometry,Ht=Ke.material,Dn=Ke.group;if(Ht.side===Mn&&Ot.layers.test(j.layers)){let Pt=Ht.side;Ht.side=fn,Ht.needsUpdate=!0,Pr(Ot,X,j,mn,Ht,Dn),Ht.side=Pt,Ht.needsUpdate=!0,We=!0}}We===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie)),v.setRenderTarget(Ee),v.setClearColor(le,O),v.toneMapping=Ue}function Us(T,z,X){let j=z.isScene===!0?z.overrideMaterial:null;for(let V=0,we=T.length;V<we;V++){let Ee=T[V],Ue=Ee.object,We=Ee.geometry,et=j===null?Ee.material:j,Je=Ee.group;Ue.layers.test(X.layers)&&Pr(Ue,z,X,We,et,Je)}}function Pr(T,z,X,j,V,we){T.onBeforeRender(v,z,X,j,V,we),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(v,z,X,j,T,we),V.transparent===!0&&V.side===Mn&&V.forceSinglePass===!1?(V.side=fn,V.needsUpdate=!0,v.renderBufferDirect(X,z,j,V,T,we),V.side=Bn,V.needsUpdate=!0,v.renderBufferDirect(X,z,j,V,T,we),V.side=Mn):v.renderBufferDirect(X,z,j,V,T,we),T.onAfterRender(v,z,X,j,V,we)}function Os(T,z,X){z.isScene!==!0&&(z=Be);let j=st.get(T),V=p.state.lights,we=p.state.shadowsArray,Ee=V.state.version,Ue=De.getParameters(T,V.state,we,z,X),We=De.getProgramCacheKey(Ue),et=j.programs;j.environment=T.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(T.isMeshStandardMaterial?W:S).get(T.envMap||j.environment),et===void 0&&(T.addEventListener("dispose",be),et=new Map,j.programs=et);let Je=et.get(We);if(Je!==void 0){if(j.currentProgram===Je&&j.lightsStateVersion===Ee)return Aa(T,Ue),Je}else Ue.uniforms=De.getUniforms(T),T.onBuild(X,Ue,v),T.onBeforeCompile(Ue,v),Je=De.acquireProgram(Ue,We),et.set(We,Je),j.uniforms=Ue.uniforms;let Ke=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=rt.uniform),Aa(T,Ue),j.needsLights=Uc(T),j.lightsStateVersion=Ee,j.needsLights&&(Ke.ambientLightColor.value=V.state.ambient,Ke.lightProbe.value=V.state.probe,Ke.directionalLights.value=V.state.directional,Ke.directionalLightShadows.value=V.state.directionalShadow,Ke.spotLights.value=V.state.spot,Ke.spotLightShadows.value=V.state.spotShadow,Ke.rectAreaLights.value=V.state.rectArea,Ke.ltc_1.value=V.state.rectAreaLTC1,Ke.ltc_2.value=V.state.rectAreaLTC2,Ke.pointLights.value=V.state.point,Ke.pointLightShadows.value=V.state.pointShadow,Ke.hemisphereLights.value=V.state.hemi,Ke.directionalShadowMap.value=V.state.directionalShadowMap,Ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ke.spotShadowMap.value=V.state.spotShadowMap,Ke.spotLightMatrix.value=V.state.spotLightMatrix,Ke.spotLightMap.value=V.state.spotLightMap,Ke.pointShadowMap.value=V.state.pointShadowMap,Ke.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Je,j.uniformsList=null,Je}function Lr(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=cr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Aa(T,z){let X=st.get(T);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Nc(T,z,X,j,V){z.isScene!==!0&&(z=Be),A.resetTextureUnits();let we=z.fog,Ee=j.isMeshStandardMaterial?z.environment:null,Ue=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ri,We=(j.isMeshStandardMaterial?W:S).get(j.envMap||Ee),et=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Je=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ke=!!X.morphAttributes.position,Ot=!!X.morphAttributes.normal,mn=!!X.morphAttributes.color,Ht=ji;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ht=v.toneMapping);let Dn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Pt=Dn!==void 0?Dn.length:0,je=st.get(j),Ir=p.state.lights;if(G===!0&&(te===!0||T!==E)){let on=T===E&&j.id===K;rt.setState(j,T,on)}let Nt=!1;j.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ir.state.version||je.outputColorSpace!==Ue||V.isBatchedMesh&&je.batching===!1||!V.isBatchedMesh&&je.batching===!0||V.isInstancedMesh&&je.instancing===!1||!V.isInstancedMesh&&je.instancing===!0||V.isSkinnedMesh&&je.skinning===!1||!V.isSkinnedMesh&&je.skinning===!0||V.isInstancedMesh&&je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&je.instancingColor===!1&&V.instanceColor!==null||je.envMap!==We||j.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==rt.numPlanes||je.numIntersection!==rt.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Je||je.morphTargets!==Ke||je.morphNormals!==Ot||je.morphColors!==mn||je.toneMapping!==Ht||Ze.isWebGL2===!0&&je.morphTargetsCount!==Pt)&&(Nt=!0):(Nt=!0,je.__version=j.version);let _i=je.currentProgram;Nt===!0&&(_i=Os(j,z,V));let Nr=!1,hs=!1,Dr=!1,$t=_i.getUniforms(),ti=je.uniforms;if(Le.useProgram(_i.program)&&(Nr=!0,hs=!0,Dr=!0),j.id!==K&&(K=j.id,hs=!0),Nr||E!==T){$t.setValue(H,"projectionMatrix",T.projectionMatrix),$t.setValue(H,"viewMatrix",T.matrixWorldInverse);let on=$t.map.cameraPosition;on!==void 0&&on.setValue(H,Fe.setFromMatrixPosition(T.matrixWorld)),Ze.logarithmicDepthBuffer&&$t.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$t.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,hs=!0,Dr=!0)}if(V.isSkinnedMesh){$t.setOptional(H,V,"bindMatrix"),$t.setOptional(H,V,"bindMatrixInverse");let on=V.skeleton;on&&(Ze.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),$t.setValue(H,"boneTexture",on.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&($t.setOptional(H,V,"batchingTexture"),$t.setValue(H,"batchingTexture",V._matricesTexture,A));let Ft=X.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0&&Ze.isWebGL2===!0)&&ht.update(V,X,_i),(hs||je.receiveShadow!==V.receiveShadow)&&(je.receiveShadow=V.receiveShadow,$t.setValue(H,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ti.envMap.value=We,ti.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),hs&&($t.setValue(H,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&Dc(ti,Dr),we&&j.fog===!0&&Me.refreshFogUniforms(ti,we),Me.refreshMaterialUniforms(ti,j,Q,F,ie),cr.upload(H,Lr(je),ti,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(cr.upload(H,Lr(je),ti,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$t.setValue(H,"center",V.center),$t.setValue(H,"modelViewMatrix",V.modelViewMatrix),$t.setValue(H,"normalMatrix",V.normalMatrix),$t.setValue(H,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let on=j.uniformsGroups;for(let Ur=0,Ca=on.length;Ur<Ca;Ur++)if(Ze.isWebGL2){let Or=on[Ur];yt.update(Or,_i),yt.bind(Or,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Dc(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Uc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,z,X){st.get(T.texture).__webglTexture=z,st.get(T.depthTexture).__webglTexture=X;let j=st.get(T);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){let X=st.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){N=T,U=z,L=X;let j=!0,V=null,we=!1,Ee=!1;if(T){let We=st.get(T);We.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):We.__webglFramebuffer===void 0?A.setupRenderTarget(T):We.__hasExternalTextures&&A.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);let et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ee=!0);let Je=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[z])?V=Je[z][X]:V=Je[z],we=!0):Ze.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?V=st.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[X]:V=Je,R.copy(T.viewport),Z.copy(T.scissor),oe=T.scissorTest}else R.copy(re).multiplyScalar(Q).floor(),Z.copy(ne).multiplyScalar(Q).floor(),oe=de;if(Le.bindFramebuffer(H.FRAMEBUFFER,V)&&Ze.drawBuffers&&j&&Le.drawBuffers(T,V),Le.viewport(R),Le.scissor(Z),Le.setScissorTest(oe),we){let We=st.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,X)}else if(Ee){let We=st.get(T.texture),et=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.__webglTexture,X||0,et)}K=-1},this.readRenderTargetPixels=function(T,z,X,j,V,we,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ue=Ue[Ee]),Ue){Le.bindFramebuffer(H.FRAMEBUFFER,Ue);try{let We=T.texture,et=We.format,Je=We.type;if(et!==On&&Re.convert(et)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=Je===jr&&(He.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&He.has("EXT_color_buffer_float"));if(Je!==Zi&&Re.convert(Je)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===Ai&&(Ze.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-j&&X>=0&&X<=T.height-V&&H.readPixels(z,X,j,V,Re.convert(et),Re.convert(Je),we)}finally{let We=N!==null?st.get(N).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(T,z,X=0){let j=Math.pow(2,-X),V=Math.floor(z.image.width*j),we=Math.floor(z.image.height*j);A.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,T.x,T.y,V,we),Le.unbindTexture()},this.copyTextureToTexture=function(T,z,X,j=0){let V=z.image.width,we=z.image.height,Ee=Re.convert(X.format),Ue=Re.convert(X.type);A.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,T.x,T.y,V,we,Ee,Ue,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,T.x,T.y,Ee,Ue,z.image),j===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X,j,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,We=Re.convert(j.format),et=Re.convert(j.type),Je;if(j.isData3DTexture)A.setTexture3D(j,0),Je=H.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)A.setTexture2DArray(j,0),Je=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);let Ke=H.getParameter(H.UNPACK_ROW_LENGTH),Ot=H.getParameter(H.UNPACK_IMAGE_HEIGHT),mn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ht=H.getParameter(H.UNPACK_SKIP_ROWS),Dn=H.getParameter(H.UNPACK_SKIP_IMAGES),Pt=X.isCompressedTexture?X.mipmaps[V]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Pt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(Je,V,z.x,z.y,z.z,we,Ee,Ue,We,et,Pt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Je,V,z.x,z.y,z.z,we,Ee,Ue,We,Pt.data)):H.texSubImage3D(Je,V,z.x,z.y,z.z,we,Ee,Ue,We,et,Pt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot),H.pixelStorei(H.UNPACK_SKIP_PIXELS,mn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ht),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Dn),V===0&&j.generateMipmaps&&H.generateMipmap(Je),Le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Le.unbindTexture()},this.resetState=function(){U=0,L=0,N=null,Le.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===th?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===$o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?bs:Kd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bs?zt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},kl=class extends ea{};kl.prototype.isWebGL1Renderer=!0;var gr=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},To=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new I,kn=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ta=class extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,Hr=new I,tr=new I,nr=new I,ir=new $e,Vr=new $e,hf=new nt,eo=new I,Gr=new I,to=new I,Sd=new $e,dl=new $e,wd=new $e,Ao=class extends Wt{constructor(e=new ta){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new wn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new To(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new kn(i,3,0,!1)),er.setAttribute("uv",new kn(i,2,3,!1))}this.geometry=er,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),hf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;no(eo.set(-.5,-.5,0),nr,a,tr,s,r),no(Gr.set(.5,-.5,0),nr,a,tr,s,r),no(to.set(.5,.5,0),nr,a,tr,s,r),Sd.set(0,0),dl.set(1,0),wd.set(1,1);let o=e.ray.intersectTriangle(eo,Gr,to,!1,Hr);if(o===null&&(no(Gr.set(-.5,.5,0),nr,a,tr,s,r),dl.set(0,1),o=e.ray.intersectTriangle(eo,to,Gr,!1,Hr),o===null))return;let c=e.ray.origin.distanceTo(Hr);c<e.near||c>e.far||t.push({distance:c,point:Hr.clone(),uv:ys.getInterpolation(Hr,eo,Gr,to,Sd,dl,wd,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function no(n,e,t,i,s,r){ir.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*ir.x-s*ir.y,Vr.y=s*ir.x+r*ir.y):Vr.copy(ir),n.copy(e),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4(hf)}var Ed=new I,Td=new _t,Ad=new _t,jx=new I,Cd=new nt,io=new I,fl=new zn,Rd=new nt,pl=new fr,Co=class extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ou,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(s),e.ray.intersectsSphere(fl)!==!1&&(Rd.copy(s).invert(),pl.copy(e.ray).applyMatrix4(Rd),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Td.fromBufferAttribute(s.attributes.skinIndex,e),Ad.fromBufferAttribute(s.attributes.skinWeight,e),Ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Ad.getComponent(r);if(a!==0){let o=Td.getComponent(r);Cd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(jx.copy(Ed).applyMatrix4(Cd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},na=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ro=class extends Sn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=en,h=en,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pd=new nt,Zx=new nt,Po=class n{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new nt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Zx;Pd.multiplyMatrices(o,t[r]),Pd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ro(t,e,e,On,Ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new na),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var _r=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ld=new I,Id=new I,Nd=new nt,ml=new fr,so=new zn,ia=class extends Wt{constructor(e=new wn,t=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ld.fromBufferAttribute(t,s-1),Id.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ld.distanceTo(Id);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;Nd.copy(s).invert(),ml.copy(e.ray).applyMatrix4(Nd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,h=new I,u=new I,d=new I,m=this.isLineSegments?2:1,y=i.index,p=i.attributes.position;if(y!==null){let f=Math.max(0,a.start),C=Math.min(y.count,a.start+a.count);for(let v=f,P=C-1;v<P;v+=m){let U=y.getX(v),L=y.getX(v+1);if(l.fromBufferAttribute(p,U),h.fromBufferAttribute(p,L),ml.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let K=e.ray.origin.distanceTo(d);K<e.near||K>e.far||t.push({distance:K,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),C=Math.min(p.count,a.start+a.count);for(let v=f,P=C-1;v<P;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),ml.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Dd=new I,Ud=new I,Lo=class extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Dd.fromBufferAttribute(t,s),Ud.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dd.distanceTo(Ud);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sa=class extends Sn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Io=class n extends wn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,m=[],y=[],x=[],p=[];for(let f=0;f<=i;f++){let C=[],v=f/i,P=0;f===0&&a===0?P=.5/t:f===i&&c===Math.PI&&(P=-.5/t);for(let U=0;U<=t;U++){let L=U/t;u.x=-e*Math.cos(s+L*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+L*r)*Math.sin(a+v*o),y.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(L+P,1-v),C.push(l++)}h.push(C)}for(let f=0;f<i;f++)for(let C=0;C<t;C++){let v=h[f][C+1],P=h[f][C],U=h[f+1][C],L=h[f+1][C+1];(f!==0||a>0)&&m.push(v,P,L),(f!==i-1||c<Math.PI)&&m.push(P,U,L)}this.setIndex(m),this.setAttribute("position",new Lt(y,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var No=class extends wn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new I,r=new I;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,m=u.count;for(let y=d,x=d+m;y<x;y+=3)for(let p=0;p<3;p++){let f=o.getX(y+p),C=o.getX(y+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,C),Od(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Od(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Od(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var ra=class extends si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ss=class extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ro(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Jx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kx(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Fd(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function uf(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var yr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hl=class extends yr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uu:r=e,o=2*t-i;break;case Ou:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Uu:a=e,c=2*i-t;break;case Ou:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(i-t)/(s-t),x=y*y,p=x*y,f=-d*p+2*d*x-d*y,C=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*y+1,v=(-1-m)*p+(1.5+m)*x+.5*y,P=m*p-m*x;for(let U=0;U!==o;++U)r[U]=f*a[h+U]+C*a[l+U]+v*a[c+U]+P*a[u+U];return r}},Vl=class extends yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Gl=class extends yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Jx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,m=u+i;for(let y=0;y!==i;++y){let x=t[u+y];if(x!==t[d+y]||x!==t[m+y]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=lo;var es=class extends Hn{};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=co;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends Hn{};Do.prototype.ValueTypeName="color";var xr=class extends Hn{};xr.prototype.ValueTypeName="number";var Wl=class extends yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)ii.slerpFlat(r,0,a,l-o,a,l,c);return r}},Li=class extends Hn{InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}};Li.prototype.ValueTypeName="quaternion";Li.prototype.DefaultInterpolation=lo;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Hn{};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=co;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Hn{};Ii.prototype.ValueTypeName="vector";var aa=class{constructor(e,t=-1,i,s=Nm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(ev(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(Hn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Kx(c);c=Fd(c,1,h),l=Fd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new xr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,m,y,x){if(m.length!==0){let p=[],f=[];uf(m,p,f,y),p.length!==0&&x.push(new u(d,p,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},y;for(y=0;y<d.length;y++)if(d[y].morphTargets)for(let x=0;x<d[y].morphTargets.length;x++)m[d[y].morphTargets[x]]=-1;for(let x in m){let p=[],f=[];for(let C=0;C!==d[y].morphTargets.length;++C){let v=d[y];p.push(v.time),f.push(v.morphTarget===x?1:0)}s.push(new xr(".morphTargetInfluence["+x+"]",p,f))}c=m.length*a}else{let m=".bones["+t[u].name+"]";i(Ii,m+".position",d,"pos",s),i(Li,m+".quaternion",d,"rot",s),i(Ii,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Qx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return Do;case"quaternion":return Li;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ev(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Qx(n.type);if(n.times===void 0){let t=[],i=[];uf(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Uo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},oa=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],y=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null}}},tv=new oa,ri=class{constructor(e){this.manager=e!==void 0?e:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Xl=class extends Error{constructor(e,t){super(e),this.response=t}},ca=class extends ri{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Uo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:i,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=wi[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,y=m!==0,x=0,p=new ReadableStream({start(f){C();function C(){u.read().then(({done:v,value:P})=>{if(v)f.close();else{x+=P.byteLength;let U=new ProgressEvent("progress",{lengthComputable:y,loaded:x,total:m});for(let L=0,N=h.length;L<N;L++){let K=h[L];K.onProgress&&K.onProgress(U)}f.enqueue(P),C()}})}}});return new Response(p)}else throw new Xl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(y=>m.decode(y))}}}).then(l=>{Uo.add(e,l);let h=wi[e];delete wi[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ql=class extends ri{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Uo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Zr("img");function c(){h(),Uo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Oo=class extends ri{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Ro,o=new ca(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:un,a.wrapT=l.wrapT!==void 0?l.wrapT:un,a.magFilter=l.magFilter!==void 0?l.magFilter:yn,a.minFilter=l.minFilter!==void 0?l.minFilter:yn,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?a.colorSpace=l.colorSpace:l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Ki),l.mipmapCount===1&&(a.minFilter=yn),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},i,s),a}},Fo=class extends ri{constructor(e){super(e)}load(e,t,i,s){let r=new Sn,a=new ql(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ws=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Bo=class extends ws{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gl=new nt,Bd=new I,zd=new I,la=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yl=class extends la{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=dr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},zo=class extends ws{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kd=new nt,Wr=new I,_l=new I,$l=class extends la{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),_l.copy(i.position),_l.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_l),i.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd)}},ko=class extends ws{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jl=class extends la{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vr=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ho=class extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vo=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Go=class extends wn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var sh="\\[\\]\\.:\\/",nv=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",iv="[^"+sh.replace("\\.","")+"]",sv=/((?:WC+[\/:])*)/.source.replace("WC",rh),rv=/(WCOD+)?/.source.replace("WCOD",iv),av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),cv=new RegExp("^"+sv+rv+av+ov+"$"),lv=["material","materials","bones","map"],Zl=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nv,"")}static parseTrackName(e){let t=cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);lv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Zl;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pb=new Float32Array(1);var Es=class extends To{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Wo=class{constructor(e,t,i=0,s=1/0){this.ray=new fr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Jl(e,this,i,t),i.sort(Hd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Jl(e[s],this,i,t);return i.sort(Hd),i}};function Hd(n,e){return n.distance-e.distance}function Jl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Jl(s[r],e,t,!0)}}var Vd=new I,ao=new I,Xo=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vd.subVectors(e,this.start),ao.subVectors(this.end,this.start);let i=ao.dot(ao),r=ao.dot(Vd)/i;return t&&(r=hn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);var ha=class extends Oo{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case d:case x:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case y:case p:case f:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function i(F,Q,J,$,re){let ne,de,B=J.pixel_size>>3,G=J.width*J.height*B;if(Q&&(de=re.subarray($,$+=J.colormap_length*(J.colormap_size>>3))),F){ne=new Uint8Array(G);let te,ie,ae,Te=0,Fe=new Uint8Array(B);for(;Te<G;)if(te=re[$++],ie=(te&127)+1,te&128){for(ae=0;ae<B;++ae)Fe[ae]=re[$++];for(ae=0;ae<ie;++ae)ne.set(Fe,Te+ae*B);Te+=B*ie}else{for(ie*=B,ae=0;ae<ie;++ae)ne[Te+ae]=re[$++];Te+=ie}}else ne=re.subarray($,$+=Q?J.width*J.height:G);return{pixel_data:ne,palettes:de}}function s(F,Q,J,$,re,ne,de,B,G){let te=G,ie,ae=0,Te,Fe,Be=R.width;for(Fe=Q;Fe!==$;Fe+=J)for(Te=re;Te!==de;Te+=ne,ae++)ie=B[ae],F[(Te+Be*Fe)*4+3]=255,F[(Te+Be*Fe)*4+2]=te[ie*3+0],F[(Te+Be*Fe)*4+1]=te[ie*3+1],F[(Te+Be*Fe)*4+0]=te[ie*3+2];return F}function r(F,Q,J,$,re,ne,de,B){let G,te=0,ie,ae,Te=R.width;for(ae=Q;ae!==$;ae+=J)for(ie=re;ie!==de;ie+=ne,te+=2)G=B[te+0]+(B[te+1]<<8),F[(ie+Te*ae)*4+0]=(G&31744)>>7,F[(ie+Te*ae)*4+1]=(G&992)>>2,F[(ie+Te*ae)*4+2]=(G&31)<<3,F[(ie+Te*ae)*4+3]=G&32768?0:255;return F}function a(F,Q,J,$,re,ne,de,B){let G=0,te,ie,ae=R.width;for(ie=Q;ie!==$;ie+=J)for(te=re;te!==de;te+=ne,G+=3)F[(te+ae*ie)*4+3]=255,F[(te+ae*ie)*4+2]=B[G+0],F[(te+ae*ie)*4+1]=B[G+1],F[(te+ae*ie)*4+0]=B[G+2];return F}function o(F,Q,J,$,re,ne,de,B){let G=0,te,ie,ae=R.width;for(ie=Q;ie!==$;ie+=J)for(te=re;te!==de;te+=ne,G+=4)F[(te+ae*ie)*4+2]=B[G+0],F[(te+ae*ie)*4+1]=B[G+1],F[(te+ae*ie)*4+0]=B[G+2],F[(te+ae*ie)*4+3]=B[G+3];return F}function c(F,Q,J,$,re,ne,de,B){let G,te=0,ie,ae,Te=R.width;for(ae=Q;ae!==$;ae+=J)for(ie=re;ie!==de;ie+=ne,te++)G=B[te],F[(ie+Te*ae)*4+0]=G,F[(ie+Te*ae)*4+1]=G,F[(ie+Te*ae)*4+2]=G,F[(ie+Te*ae)*4+3]=255;return F}function l(F,Q,J,$,re,ne,de,B){let G=0,te,ie,ae=R.width;for(ie=Q;ie!==$;ie+=J)for(te=re;te!==de;te+=ne,G+=2)F[(te+ae*ie)*4+0]=B[G+0],F[(te+ae*ie)*4+1]=B[G+0],F[(te+ae*ie)*4+2]=B[G+0],F[(te+ae*ie)*4+3]=B[G+1];return F}function h(F,Q,J,$,re){let ne,de,B,G,te,ie;switch((R.flags&C)>>v){default:case L:ne=0,B=1,te=Q,de=0,G=1,ie=J;break;case P:ne=0,B=1,te=Q,de=J-1,G=-1,ie=-1;break;case N:ne=Q-1,B=-1,te=-1,de=0,G=1,ie=J;break;case U:ne=Q-1,B=-1,te=-1,de=J-1,G=-1,ie=-1;break}if(le)switch(R.pixel_size){case 8:c(F,de,G,ie,ne,B,te,$);break;case 16:l(F,de,G,ie,ne,B,te,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(R.pixel_size){case 8:s(F,de,G,ie,ne,B,te,$,re);break;case 16:r(F,de,G,ie,ne,B,te,$);break;case 24:a(F,de,G,ie,ne,B,te,$);break;case 32:o(F,de,G,ie,ne,B,te,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}let u=0,d=1,m=2,y=3,x=9,p=10,f=11,C=48,v=4,P=0,U=1,L=2,N=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let K=0,E=new Uint8Array(e),R={id_length:E[K++],colormap_type:E[K++],image_type:E[K++],colormap_index:E[K++]|E[K++]<<8,colormap_length:E[K++]|E[K++]<<8,colormap_size:E[K++],origin:[E[K++]|E[K++]<<8,E[K++]|E[K++]<<8],width:E[K++]|E[K++]<<8,height:E[K++]|E[K++]<<8,pixel_size:E[K++],flags:E[K++]};if(t(R),R.id_length+K>e.length)throw new Error("THREE.TGALoader: No data.");K+=R.id_length;let Z=!1,oe=!1,le=!1;switch(R.image_type){case x:Z=!0,oe=!0;break;case d:oe=!0;break;case p:Z=!0;break;case m:break;case f:Z=!0,le=!0;break;case y:le=!0;break}let O=new Uint8Array(R.width*R.height*4),Y=i(Z,oe,R,K,E);return h(O,R.width,R.height,Y.pixel_data,Y.palettes),{data:O,width:R.width,height:R.height,flipY:!0,generateMipmaps:!0,minFilter:Ki}}};var Jo=class extends ri{load(e,t,i,s){let r=this,a=r.path===""?Vo.extractUrlBase(e):r.path,o=new ca(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(c){try{t(r.parse(c,a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,g){let M=[],b=_.childNodes;for(let w=0,q=b.length;w<q;w++){let ee=b[w];ee.nodeName===g&&M.push(ee)}return M}function s(_){if(_.length===0)return[];let g=_.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=g[b];return M}function r(_){if(_.length===0)return[];let g=_.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=parseFloat(g[b]);return M}function a(_){if(_.length===0)return[];let g=_.trim().split(/\s+/),M=new Array(g.length);for(let b=0,w=g.length;b<w;b++)M[b]=parseInt(g[b]);return M}function o(_){return _.substring(1)}function c(){return"three_default_"+Hp++}function l(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function m(_,g,M,b){let w=i(_,g)[0];if(w!==void 0){let q=i(w,M);for(let ee=0;ee<q.length;ee++)b(q[ee])}}function y(_,g){for(let M in _){let b=_[M];b.build=g(_[M])}}function x(_,g){return _.build!==void 0||(_.build=g(_)),_.build}function p(_){let g={sources:{},samplers:{},channels:{}},M=!1;for(let b=0,w=_.childNodes.length;b<w;b++){let q=_.childNodes[b];if(q.nodeType!==1)continue;let ee;switch(q.nodeName){case"source":ee=q.getAttribute("id"),g.sources[ee]=D(q);break;case"sampler":ee=q.getAttribute("id"),g.samplers[ee]=f(q);break;case"channel":ee=q.getAttribute("target"),g.channels[ee]=C(q);break;case"animation":p(q),M=!0;break;default:console.log(q)}}M===!1&&(Xe.animations[_.getAttribute("id")||ns.generateUUID()]=g)}function f(_){let g={inputs:{}};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=o(w.getAttribute("source")),ee=w.getAttribute("semantic");g.inputs[ee]=q;break}}return g}function C(_){let g={},b=_.getAttribute("target").split("/"),w=b.shift(),q=b.shift(),ee=q.indexOf("(")!==-1,Ae=q.indexOf(".")!==-1;if(Ae)b=q.split("."),q=b.shift(),g.member=b.shift();else if(ee){let xe=q.split("(");q=xe.shift();for(let Se=0;Se<xe.length;Se++)xe[Se]=parseInt(xe[Se].replace(/\)/,""));g.indices=xe}return g.id=w,g.sid=q,g.arraySyntax=ee,g.memberSyntax=Ae,g.sampler=o(_.getAttribute("source")),g}function v(_){let g=[],M=_.channels,b=_.samplers,w=_.sources;for(let q in M)if(M.hasOwnProperty(q)){let ee=M[q],Ae=b[ee.sampler],xe=Ae.inputs.INPUT,Se=Ae.inputs.OUTPUT,Ne=w[xe],ce=w[Se],Ie=U(ee,Ne,ce);R(Ie,g)}return g}function P(_){return x(Xe.animations[_],v)}function U(_,g,M){let b=Xe.nodes[_.id],w=je(b.id),q=b.transforms[_.sid],ee=b.matrix.clone().transpose(),Ae,xe,Se,Ne,ce,Ie,Pe={};switch(q){case"matrix":for(Se=0,Ne=g.array.length;Se<Ne;Se++)if(Ae=g.array[Se],xe=Se*M.stride,Pe[Ae]===void 0&&(Pe[Ae]={}),_.arraySyntax===!0){let Bt=M.array[xe],wt=_.indices[0]+4*_.indices[1];Pe[Ae][wt]=Bt}else for(ce=0,Ie=M.stride;ce<Ie;ce++)Pe[Ae][ce]=M.array[xe+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',q);break}let ke=L(Pe,ee);return{name:w.uuid,keyframes:ke}}function L(_,g){let M=[];for(let w in _)M.push({time:parseFloat(w),value:_[w]});M.sort(b);for(let w=0;w<16;w++)Z(M,w,g.elements[w]);return M;function b(w,q){return w.time-q.time}}let N=new I,K=new I,E=new ii;function R(_,g){let M=_.keyframes,b=_.name,w=[],q=[],ee=[],Ae=[];for(let xe=0,Se=M.length;xe<Se;xe++){let Ne=M[xe],ce=Ne.time,Ie=Ne.value;Ee.fromArray(Ie).transpose(),Ee.decompose(N,E,K),w.push(ce),q.push(N.x,N.y,N.z),ee.push(E.x,E.y,E.z,E.w),Ae.push(K.x,K.y,K.z)}return q.length>0&&g.push(new Ii(b+".position",w,q)),ee.length>0&&g.push(new Li(b+".quaternion",w,ee)),Ae.length>0&&g.push(new Ii(b+".scale",w,Ae)),g}function Z(_,g,M){let b,w=!0,q,ee;for(q=0,ee=_.length;q<ee;q++)b=_[q],b.value[g]===void 0?b.value[g]=null:w=!1;if(w===!0)for(q=0,ee=_.length;q<ee;q++)b=_[q],b.value[g]=M;else oe(_,g)}function oe(_,g){let M,b;for(let w=0,q=_.length;w<q;w++){let ee=_[w];if(ee.value[g]===null){if(M=le(_,w,g),b=O(_,w,g),M===null){ee.value[g]=b.value[g];continue}if(b===null){ee.value[g]=M.value[g];continue}Y(ee,M,b,g)}}}function le(_,g,M){for(;g>=0;){let b=_[g];if(b.value[M]!==null)return b;g--}return null}function O(_,g,M){for(;g<_.length;){let b=_[g];if(b.value[M]!==null)return b;g++}return null}function Y(_,g,M,b){if(M.time-g.time===0){_.value[b]=g.value[b];return}_.value[b]=(_.time-g.time)*(M.value[b]-g.value[b])/(M.time-g.time)+g.value[b]}function F(_){let g={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_animation":g.animations.push(o(w.getAttribute("url")));break}}Xe.clips[_.getAttribute("id")]=g}function Q(_){let g=[],M=_.name,b=_.end-_.start||-1,w=_.animations;for(let q=0,ee=w.length;q<ee;q++){let Ae=P(w[q]);for(let xe=0,Se=Ae.length;xe<Se;xe++)g.push(Ae[xe])}return new aa(M,b,g)}function J(_){return x(Xe.clips[_],Q)}function $(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"skin":g.id=o(w.getAttribute("source")),g.skin=re(w);break;case"morph":g.id=o(w.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Xe.controllers[_.getAttribute("id")]=g}function re(_){let g={sources:{}};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"bind_shape_matrix":g.bindShapeMatrix=r(w.textContent);break;case"source":let q=w.getAttribute("id");g.sources[q]=D(w);break;case"joints":g.joints=ne(w);break;case"vertex_weights":g.vertexWeights=de(w);break}}return g}function ne(_){let g={inputs:{}};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=w.getAttribute("semantic"),ee=o(w.getAttribute("source"));g.inputs[q]=ee;break}}return g}function de(_){let g={inputs:{}};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=w.getAttribute("semantic"),ee=o(w.getAttribute("source")),Ae=parseInt(w.getAttribute("offset"));g.inputs[q]={id:ee,offset:Ae};break;case"vcount":g.vcount=a(w.textContent);break;case"v":g.v=a(w.textContent);break}}return g}function B(_){let g={id:_.id},M=Xe.geometries[g.id];return _.skin!==void 0&&(g.skin=G(_.skin),M.sources.skinIndices=g.skin.indices,M.sources.skinWeights=g.skin.weights),g}function G(_){let M={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=_.sources,w=_.vertexWeights,q=w.vcount,ee=w.v,Ae=w.inputs.JOINT.offset,xe=w.inputs.WEIGHT.offset,Se=_.sources[_.joints.inputs.JOINT],Ne=_.sources[_.joints.inputs.INV_BIND_MATRIX],ce=b[w.inputs.WEIGHT.id].array,Ie=0,Pe,ke,Oe;for(Pe=0,Oe=q.length;Pe<Oe;Pe++){let wt=q[Pe],mt=[];for(ke=0;ke<wt;ke++){let gt=ee[Ie+Ae],yi=ee[Ie+xe],bn=ce[yi];mt.push({index:gt,weight:bn}),Ie+=2}for(mt.sort(Bt),ke=0;ke<4;ke++){let gt=mt[ke];gt!==void 0?(M.indices.array.push(gt.index),M.weights.array.push(gt.weight)):(M.indices.array.push(0),M.weights.array.push(0))}}for(_.bindShapeMatrix?M.bindMatrix=new nt().fromArray(_.bindShapeMatrix).transpose():M.bindMatrix=new nt().identity(),Pe=0,Oe=Se.array.length;Pe<Oe;Pe++){let wt=Se.array[Pe],mt=new nt().fromArray(Ne.array,Pe*Ne.stride).transpose();M.joints.push({name:wt,boneInverse:mt})}return M;function Bt(wt,mt){return mt.weight-wt.weight}}function te(_){return x(Xe.controllers[_],B)}function ie(_){let g={init_from:i(_,"init_from")[0].textContent};Xe.images[_.getAttribute("id")]=g}function ae(_){return _.build!==void 0?_.build:_.init_from}function Te(_){let g=Xe.images[_];return g!==void 0?x(g,ae):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function Fe(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"profile_COMMON":g.profile=Be(w);break}}Xe.effects[_.getAttribute("id")]=g}function Be(_){let g={surfaces:{},samplers:{}};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"newparam":pt(w,g);break;case"technique":g.technique=He(w);break;case"extra":g.extra=S(w);break}}return g}function pt(_,g){let M=_.getAttribute("sid");for(let b=0,w=_.childNodes.length;b<w;b++){let q=_.childNodes[b];if(q.nodeType===1)switch(q.nodeName){case"surface":g.surfaces[M]=H(q);break;case"sampler2D":g.samplers[M]=Kt(q);break}}}function H(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"init_from":g.init_from=w.textContent;break}}return g}function Kt(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"source":g.source=w.textContent;break}}return g}function He(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"constant":case"lambert":case"blinn":case"phong":g.type=w.nodeName,g.parameters=Ze(w);break;case"extra":g.extra=S(w);break}}return g}function Ze(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":g[w.nodeName]=Le(w);break;case"transparent":g[w.nodeName]={opaque:w.hasAttribute("opaque")?w.getAttribute("opaque"):"A_ONE",data:Le(w)};break}}return g}function Le(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":g[w.nodeName]=r(w.textContent);break;case"float":g[w.nodeName]=parseFloat(w.textContent);break;case"texture":g[w.nodeName]={id:w.getAttribute("texture"),extra:Rt(w)};break}}return g}function Rt(_){let g={technique:{}};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"extra":st(w,g);break}}return g}function st(_,g){for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":A(w,g);break}}}function A(_,g){for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":g.technique[w.nodeName]=parseFloat(w.textContent);break;case"wrapU":case"wrapV":w.textContent.toUpperCase()==="TRUE"?g.technique[w.nodeName]=1:w.textContent.toUpperCase()==="FALSE"?g.technique[w.nodeName]=0:g.technique[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=fe(w);break}}}function S(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique":g.technique=W(w);break}}return g}function W(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"double_sided":g[w.nodeName]=parseInt(w.textContent);break;case"bump":g[w.nodeName]=fe(w);break}}return g}function fe(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"texture":g[w.nodeName]={id:w.getAttribute("texture"),texcoord:w.getAttribute("texcoord"),extra:Rt(w)};break}}return g}function he(_){return _}function pe(_){return x(Xe.effects[_],he)}function De(_){let g={name:_.getAttribute("name")};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"instance_effect":g.url=o(w.getAttribute("url"));break}}Xe.materials[_.getAttribute("id")]=g}function Me(_){let g,M=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(M=M.toLowerCase(),M){case"tga":g=Oc;break;default:g=Or}return g}function Ce(_){let g=pe(_.url),M=g.profile.technique,b;switch(M.type){case"phong":case"blinn":b=new ra;break;case"lambert":b=new Ss;break;default:b=new pn;break}b.name=_.name||"";function w(xe,Se=null){let Ne=g.profile.samplers[xe.id],ce=null;if(Ne!==void 0){let Ie=g.profile.surfaces[Ne.source];ce=Te(Ie.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=Te(xe.id);if(ce!==null){let Ie=Me(ce);if(Ie!==void 0){let Pe=Ie.load(ce),ke=xe.extra;if(ke!==void 0&&ke.technique!==void 0&&l(ke.technique)===!1){let Oe=ke.technique;Pe.wrapS=Oe.wrapU?Ji:un,Pe.wrapT=Oe.wrapV?Ji:un,Pe.offset.set(Oe.offsetU||0,Oe.offsetV||0),Pe.repeat.set(Oe.repeatU||1,Oe.repeatV||1)}else Pe.wrapS=Ji,Pe.wrapT=Ji;return Se!==null&&(Pe.colorSpace=Se),Pe}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let q=M.parameters;for(let xe in q){let Se=q[xe];switch(xe){case"diffuse":Se.color&&b.color.fromArray(Se.color),Se.texture&&(b.map=w(Se.texture,zt));break;case"specular":Se.color&&b.specular&&b.specular.fromArray(Se.color),Se.texture&&(b.specularMap=w(Se.texture));break;case"bump":Se.texture&&(b.normalMap=w(Se.texture));break;case"ambient":Se.texture&&(b.lightMap=w(Se.texture,zt));break;case"shininess":Se.float&&b.shininess&&(b.shininess=Se.float);break;case"emission":Se.color&&b.emissive&&b.emissive.fromArray(Se.color),Se.texture&&(b.emissiveMap=w(Se.texture,zt));break}}b.color.convertSRGBToLinear(),b.specular&&b.specular.convertSRGBToLinear(),b.emissive&&b.emissive.convertSRGBToLinear();let ee=q.transparent,Ae=q.transparency;if(Ae===void 0&&ee&&(Ae={float:1}),ee===void 0&&Ae&&(ee={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ee&&Ae)if(ee.data.texture)b.transparent=!0;else{let xe=ee.data.color;switch(ee.opaque){case"A_ONE":b.opacity=xe[3]*Ae.float;break;case"RGB_ZERO":b.opacity=1-xe[0]*Ae.float;break;case"A_ZERO":b.opacity=1-xe[3]*Ae.float;break;case"RGB_ONE":b.opacity=xe[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ee.opaque)}b.opacity<1&&(b.transparent=!0)}if(M.extra!==void 0&&M.extra.technique!==void 0){let xe=M.extra.technique;for(let Se in xe){let Ne=xe[Se];switch(Se){case"double_sided":b.side=Ne===1?Mn:Bn;break;case"bump":b.normalMap=w(Ne.texture),b.normalScale=new $e(1,1);break}}}return b}function Ge(_){return x(Xe.materials[_],Ce)}function rt(_){let g={name:_.getAttribute("name")};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"optics":g.optics=ue(w);break}}Xe.cameras[_.getAttribute("id")]=g}function ue(_){for(let g=0;g<_.childNodes.length;g++){let M=_.childNodes[g];switch(M.nodeName){case"technique_common":return vt(M)}}return{}}function vt(_){let g={};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];switch(b.nodeName){case"perspective":case"orthographic":g.technique=b.nodeName,g.parameters=ht(b);break}}return g}function ht(_){let g={};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":g[b.nodeName]=parseFloat(b.textContent);break}}return g}function Ye(_){let g;switch(_.optics.technique){case"perspective":g=new Gt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let M=_.optics.parameters.ymag,b=_.optics.parameters.xmag,w=_.optics.parameters.aspect_ratio;b=b===void 0?M*w:b,M=M===void 0?b/w:M,b*=.5,M*=.5,g=new mr(-b,b,M,-M,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:g=new Gt;break}return g.name=_.name||"",g}function ze(_){let g=Xe.cameras[_];return g!==void 0?x(g,Ye):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Re(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"technique_common":g=Qe(w);break}}Xe.lights[_.getAttribute("id")]=g}function Qe(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"directional":case"point":case"spot":case"ambient":g.technique=w.nodeName,g.parameters=yt(w)}}return g}function yt(_){let g={};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"color":let q=r(w.textContent);g.color=new tt().fromArray(q).convertSRGBToLinear();break;case"falloff_angle":g.falloffAngle=parseFloat(w.textContent);break;case"quadratic_attenuation":let ee=parseFloat(w.textContent);g.distance=ee?Math.sqrt(1/ee):0;break}}return g}function It(_){let g;switch(_.technique){case"directional":g=new vr;break;case"point":g=new ko;break;case"spot":g=new zo;break;case"ambient":g=new Ho;break}return _.parameters.color&&g.color.copy(_.parameters.color),_.parameters.distance&&(g.distance=_.parameters.distance),g}function ot(_){let g=Xe.lights[_];return g!==void 0?x(g,It):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function ye(_){let g={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},M=i(_,"mesh")[0];if(M!==void 0){for(let b=0;b<M.childNodes.length;b++){let w=M.childNodes[b];if(w.nodeType!==1)continue;let q=w.getAttribute("id");switch(w.nodeName){case"source":g.sources[q]=D(w);break;case"vertices":g.vertices=ve(w);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",w.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":g.primitives.push(be(w));break;default:console.log(w)}}Xe.geometries[_.getAttribute("id")]=g}}function D(_){let g={array:[],stride:3};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"float_array":g.array=r(b.textContent);break;case"Name_array":g.array=s(b.textContent);break;case"technique_common":let w=i(b,"accessor")[0];w!==void 0&&(g.stride=parseInt(w.getAttribute("stride")));break}}return g}function ve(_){let g={};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];b.nodeType===1&&(g[b.getAttribute("semantic")]=o(b.getAttribute("source")))}return g}function be(_){let g={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let M=0,b=_.childNodes.length;M<b;M++){let w=_.childNodes[M];if(w.nodeType===1)switch(w.nodeName){case"input":let q=o(w.getAttribute("source")),ee=w.getAttribute("semantic"),Ae=parseInt(w.getAttribute("offset")),xe=parseInt(w.getAttribute("set")),Se=xe>0?ee+xe:ee;g.inputs[Se]={id:q,offset:Ae},g.stride=Math.max(g.stride,Ae+1),ee==="TEXCOORD"&&(g.hasUV=!0);break;case"vcount":g.vcount=a(w.textContent);break;case"p":g.p=a(w.textContent);break}}return g}function qe(_){let g={};for(let M=0;M<_.length;M++){let b=_[M];g[b.type]===void 0&&(g[b.type]=[]),g[b.type].push(b)}return g}function Ve(_){let g=0;for(let M=0,b=_.length;M<b;M++)_[M].hasUV===!0&&g++;g>0&&g<_.length&&(_.uvsNeedsFix=!0)}function St(_){let g={},M=_.sources,b=_.vertices,w=_.primitives;if(w.length===0)return{};let q=qe(w);for(let ee in q){let Ae=q[ee];Ve(Ae),g[ee]=Et(Ae,M,b)}return g}function Et(_,g,M){let b={},w={array:[],stride:0},q={array:[],stride:0},ee={array:[],stride:0},Ae={array:[],stride:0},xe={array:[],stride:0},Se={array:[],stride:4},Ne={array:[],stride:4},ce=new wn,Ie=[],Pe=0;for(let ke=0;ke<_.length;ke++){let Oe=_[ke],Bt=Oe.inputs,wt=0;switch(Oe.type){case"lines":case"linestrips":wt=Oe.count*2;break;case"triangles":wt=Oe.count*3;break;case"polylist":for(let mt=0;mt<Oe.count;mt++){let gt=Oe.vcount[mt];switch(gt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(gt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Oe.type)}ce.addGroup(Pe,wt,ke),Pe+=wt,Oe.material&&Ie.push(Oe.material);for(let mt in Bt){let gt=Bt[mt];switch(mt){case"VERTEX":for(let yi in M){let bn=M[yi];switch(yi){case"POSITION":let Fs=w.array.length;if(bt(Oe,g[bn],gt.offset,w.array),w.stride=g[bn].stride,g.skinWeights&&g.skinIndices&&(bt(Oe,g.skinIndices,gt.offset,Se.array),bt(Oe,g.skinWeights,gt.offset,Ne.array)),Oe.hasUV===!1&&_.uvsNeedsFix===!0){let Vp=(w.array.length-Fs)/w.stride;for(let eu=0;eu<Vp;eu++)ee.array.push(0,0)}break;case"NORMAL":bt(Oe,g[bn],gt.offset,q.array),q.stride=g[bn].stride;break;case"COLOR":bt(Oe,g[bn],gt.offset,xe.array),xe.stride=g[bn].stride;break;case"TEXCOORD":bt(Oe,g[bn],gt.offset,ee.array),ee.stride=g[bn].stride;break;case"TEXCOORD1":bt(Oe,g[bn],gt.offset,Ae.array),ee.stride=g[bn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',yi)}}break;case"NORMAL":bt(Oe,g[gt.id],gt.offset,q.array),q.stride=g[gt.id].stride;break;case"COLOR":bt(Oe,g[gt.id],gt.offset,xe.array,!0),xe.stride=g[gt.id].stride;break;case"TEXCOORD":bt(Oe,g[gt.id],gt.offset,ee.array),ee.stride=g[gt.id].stride;break;case"TEXCOORD1":bt(Oe,g[gt.id],gt.offset,Ae.array),Ae.stride=g[gt.id].stride;break}}}return w.array.length>0&&ce.setAttribute("position",new Lt(w.array,w.stride)),q.array.length>0&&ce.setAttribute("normal",new Lt(q.array,q.stride)),xe.array.length>0&&ce.setAttribute("color",new Lt(xe.array,xe.stride)),ee.array.length>0&&ce.setAttribute("uv",new Lt(ee.array,ee.stride)),Ae.array.length>0&&ce.setAttribute("uv1",new Lt(Ae.array,Ae.stride)),Se.array.length>0&&ce.setAttribute("skinIndex",new Lt(Se.array,Se.stride)),Ne.array.length>0&&ce.setAttribute("skinWeight",new Lt(Ne.array,Ne.stride)),b.data=ce,b.type=_[0].type,b.materialKeys=Ie,b}function bt(_,g,M,b,w=!1){let q=_.p,ee=_.stride,Ae=_.vcount;function xe(ce){let Ie=q[ce+M]*Ne,Pe=Ie+Ne;for(;Ie<Pe;Ie++)b.push(Se[Ie]);if(w){let ke=b.length-Ne-1;Ra.setRGB(b[ke+0],b[ke+1],b[ke+2]).convertSRGBToLinear(),b[ke+0]=Ra.r,b[ke+1]=Ra.g,b[ke+2]=Ra.b}}let Se=g.array,Ne=g.stride;if(_.vcount!==void 0){let ce=0;for(let Ie=0,Pe=Ae.length;Ie<Pe;Ie++){let ke=Ae[Ie];if(ke===4){let Oe=ce+ee*0,Bt=ce+ee*1,wt=ce+ee*2,mt=ce+ee*3;xe(Oe),xe(Bt),xe(mt),xe(Bt),xe(wt),xe(mt)}else if(ke===3){let Oe=ce+ee*0,Bt=ce+ee*1,wt=ce+ee*2;xe(Oe),xe(Bt),xe(wt)}else if(ke>4)for(let Oe=1,Bt=ke-2;Oe<=Bt;Oe++){let wt=ce+ee*0,mt=ce+ee*Oe,gt=ce+ee*(Oe+1);xe(wt),xe(mt),xe(gt)}ce+=ee*ke}}else for(let ce=0,Ie=q.length;ce<Ie;ce+=ee)xe(ce)}function Yt(_){return x(Xe.geometries[_],St)}function Tt(_){let g={name:_.getAttribute("name")||"",joints:{},links:[]};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Ta(b,g);break}}Xe.kinematicsModels[_.getAttribute("id")]=g}function Qt(_){return _.build!==void 0?_.build:_}function Nn(_){return x(Xe.kinematicsModels[_],Qt)}function Ta(_,g){for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"joint":g.joints[b.getAttribute("sid")]=Ic(b);break;case"link":g.links.push(Pr(b));break}}}function Ic(_){let g;for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":g=Us(b);break}}return g}function Us(_){let g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new I,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"axis":let w=r(b.textContent);g.axis.fromArray(w);break;case"limits":let q=b.getElementsByTagName("max")[0],ee=b.getElementsByTagName("min")[0];g.limits.max=parseFloat(q.textContent),g.limits.min=parseFloat(ee.textContent);break}}return g.limits.min>=g.limits.max&&(g.static=!0),g.middlePosition=(g.limits.min+g.limits.max)/2,g}function Pr(_){let g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":g.attachments.push(Os(b));break;case"matrix":case"translate":case"rotate":g.transforms.push(Lr(b));break}}return g}function Os(_){let g={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"link":g.links.push(Pr(b));break;case"matrix":case"translate":case"rotate":g.transforms.push(Lr(b));break}}return g}function Lr(_){let g={type:_.nodeName},M=r(_.textContent);switch(g.type){case"matrix":g.obj=new nt,g.obj.fromArray(M).transpose();break;case"translate":g.obj=new I,g.obj.fromArray(M);break;case"rotate":g.obj=new I,g.obj.fromArray(M),g.angle=ns.degToRad(M[3]);break}return g}function Aa(_){let g={name:_.getAttribute("name")||"",rigidBodies:{}};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"rigid_body":g.rigidBodies[b.getAttribute("name")]={},Nc(b,g.rigidBodies[b.getAttribute("name")]);break}}Xe.physicsModels[_.getAttribute("id")]=g}function Nc(_,g){for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Dc(b,g);break}}}function Dc(_,g){for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"inertia":g.inertia=r(b.textContent);break;case"mass":g.mass=r(b.textContent)[0];break}}}function Uc(_){let g={bindJointAxis:[]};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"bind_joint_axis":g.bindJointAxis.push(T(b));break}}Xe.kinematicsScenes[o(_.getAttribute("url"))]=g}function T(_){let g={target:_.getAttribute("target").split("/").pop()};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType===1)switch(b.nodeName){case"axis":let w=b.getElementsByTagName("param")[0];g.axis=w.textContent;let q=g.axis.split("inst_").pop().split("axis")[0];g.jointIndex=q.substring(0,q.length-1);break}}return g}function z(_){return _.build!==void 0?_.build:_}function X(_){return x(Xe.kinematicsScenes[_],z)}function j(){let _=Object.keys(Xe.kinematicsModels)[0],g=Object.keys(Xe.kinematicsScenes)[0],M=Object.keys(Xe.visualScenes)[0];if(_===void 0||g===void 0)return;let b=Nn(_),w=X(g),q=Nr(M),ee=w.bindJointAxis,Ae={};for(let Ne=0,ce=ee.length;Ne<ce;Ne++){let Ie=ee[Ne],Pe=Ft.querySelector('[sid="'+Ie.target+'"]');if(Pe){let ke=Pe.parentElement;xe(Ie.jointIndex,ke)}}function xe(Ne,ce){let Ie=ce.getAttribute("name"),Pe=b.joints[Ne];q.traverse(function(ke){ke.name===Ie&&(Ae[Ne]={object:ke,transforms:V(ce),joint:Pe,position:Pe.zeroPosition})})}let Se=new nt;Qh={joints:b&&b.joints,getJointValue:function(Ne){let ce=Ae[Ne];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Ne+" doesn't exist.")},setJointValue:function(Ne,ce){let Ie=Ae[Ne];if(Ie){let Pe=Ie.joint;if(ce>Pe.limits.max||ce<Pe.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ne+" value "+ce+" outside of limits (min: "+Pe.limits.min+", max: "+Pe.limits.max+").");else if(Pe.static)console.warn("THREE.ColladaLoader: Joint "+Ne+" is static.");else{let ke=Ie.object,Oe=Pe.axis,Bt=Ie.transforms;Ee.identity();for(let wt=0;wt<Bt.length;wt++){let mt=Bt[wt];if(mt.sid&&mt.sid.indexOf(Ne)!==-1)switch(Pe.type){case"revolute":Ee.multiply(Se.makeRotationAxis(Oe,ns.degToRad(ce)));break;case"prismatic":Ee.multiply(Se.makeTranslation(Oe.x*ce,Oe.y*ce,Oe.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Pe.type);break}else switch(mt.type){case"matrix":Ee.multiply(mt.obj);break;case"translate":Ee.multiply(Se.makeTranslation(mt.obj.x,mt.obj.y,mt.obj.z));break;case"scale":Ee.scale(mt.obj);break;case"rotate":Ee.multiply(Se.makeRotationAxis(mt.obj,mt.angle));break}}ke.matrix.copy(Ee),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),Ae[Ne].position=ce}}else console.log("THREE.ColladaLoader: "+Ne+" does not exist.")}}}function V(_){let g=[],M=Ft.querySelector('[id="'+_.id+'"]');for(let b=0;b<M.childNodes.length;b++){let w=M.childNodes[b];if(w.nodeType!==1)continue;let q,ee;switch(w.nodeName){case"matrix":q=r(w.textContent);let Ae=new nt().fromArray(q).transpose();g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:Ae});break;case"translate":case"scale":q=r(w.textContent),ee=new I().fromArray(q),g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:ee});break;case"rotate":q=r(w.textContent),ee=new I().fromArray(q);let xe=ns.degToRad(q[3]);g.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:ee,angle:xe});break}}return g}function we(_){let g=_.getElementsByTagName("node");for(let M=0;M<g.length;M++){let b=g[M];b.hasAttribute("id")===!1&&b.setAttribute("id",c())}}let Ee=new nt,Ue=new I;function We(_){let g={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new nt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];if(b.nodeType!==1)continue;let w;switch(b.nodeName){case"node":g.nodes.push(b.getAttribute("id")),We(b);break;case"instance_camera":g.instanceCameras.push(o(b.getAttribute("url")));break;case"instance_controller":g.instanceControllers.push(et(b));break;case"instance_light":g.instanceLights.push(o(b.getAttribute("url")));break;case"instance_geometry":g.instanceGeometries.push(et(b));break;case"instance_node":g.instanceNodes.push(o(b.getAttribute("url")));break;case"matrix":w=r(b.textContent),g.matrix.multiply(Ee.fromArray(w).transpose()),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":w=r(b.textContent),Ue.fromArray(w),g.matrix.multiply(Ee.makeTranslation(Ue.x,Ue.y,Ue.z)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":w=r(b.textContent);let q=ns.degToRad(w[3]);g.matrix.multiply(Ee.makeRotationAxis(Ue.fromArray(w),q)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":w=r(b.textContent),g.matrix.scale(Ue.fromArray(w)),g.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return Pt(g.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",g.id):Xe.nodes[g.id]=g,g}function et(_){let g={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let M=0;M<_.childNodes.length;M++){let b=_.childNodes[M];switch(b.nodeName){case"bind_material":let w=b.getElementsByTagName("instance_material");for(let q=0;q<w.length;q++){let ee=w[q],Ae=ee.getAttribute("symbol"),xe=ee.getAttribute("target");g.materials[Ae]=o(xe)}break;case"skeleton":g.skeletons.push(o(b.textContent));break;default:break}}return g}function Je(_,g){let M=[],b=[],w,q,ee;for(w=0;w<_.length;w++){let Se=_[w],Ne;if(Pt(Se))Ne=je(Se),Ke(Ne,g,M);else if(_i(Se)){let Ie=Xe.visualScenes[Se].children;for(let Pe=0;Pe<Ie.length;Pe++){let ke=Ie[Pe];if(ke.type==="JOINT"){let Oe=je(ke.id);Ke(Oe,g,M)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Se)}for(w=0;w<g.length;w++)for(q=0;q<M.length;q++)if(ee=M[q],ee.bone.name===g[w].name){b[w]=ee,ee.processed=!0;break}for(w=0;w<M.length;w++)ee=M[w],ee.processed===!1&&(b.push(ee),ee.processed=!0);let Ae=[],xe=[];for(w=0;w<b.length;w++)ee=b[w],Ae.push(ee.bone),xe.push(ee.boneInverse);return new Po(Ae,xe)}function Ke(_,g,M){_.traverse(function(b){if(b.isBone===!0){let w;for(let q=0;q<g.length;q++){let ee=g[q];if(ee.name===b.name){w=ee.boneInverse;break}}w===void 0&&(w=new nt),M.push({bone:b,boneInverse:w,processed:!1})}})}function Ot(_){let g=[],M=_.matrix,b=_.nodes,w=_.type,q=_.instanceCameras,ee=_.instanceControllers,Ae=_.instanceLights,xe=_.instanceGeometries,Se=_.instanceNodes;for(let ce=0,Ie=b.length;ce<Ie;ce++)g.push(je(b[ce]));for(let ce=0,Ie=q.length;ce<Ie;ce++){let Pe=ze(q[ce]);Pe!==null&&g.push(Pe.clone())}for(let ce=0,Ie=ee.length;ce<Ie;ce++){let Pe=ee[ce],ke=te(Pe.id),Oe=Yt(ke.id),Bt=Dn(Oe,Pe.materials),wt=Pe.skeletons,mt=ke.skin.joints,gt=Je(wt,mt);for(let yi=0,bn=Bt.length;yi<bn;yi++){let Fs=Bt[yi];Fs.isSkinnedMesh&&(Fs.bind(gt,ke.skin.bindMatrix),Fs.normalizeSkinWeights()),g.push(Fs)}}for(let ce=0,Ie=Ae.length;ce<Ie;ce++){let Pe=ot(Ae[ce]);Pe!==null&&g.push(Pe.clone())}for(let ce=0,Ie=xe.length;ce<Ie;ce++){let Pe=xe[ce],ke=Yt(Pe.id),Oe=Dn(ke,Pe.materials);for(let Bt=0,wt=Oe.length;Bt<wt;Bt++)g.push(Oe[Bt])}for(let ce=0,Ie=Se.length;ce<Ie;ce++)g.push(je(Se[ce]).clone());let Ne;if(b.length===0&&g.length===1)Ne=g[0];else{Ne=w==="JOINT"?new na:new dn;for(let ce=0;ce<g.length;ce++)Ne.add(g[ce])}return Ne.name=w==="JOINT"?_.sid:_.name,Ne.matrix.copy(M),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne}let mn=new pn({name:ri.DEFAULT_MATERIAL_NAME,color:16711935});function Ht(_,g){let M=[];for(let b=0,w=_.length;b<w;b++){let q=g[_[b]];q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[b]),M.push(mn)):M.push(Ge(q))}return M}function Dn(_,g){let M=[];for(let b in _){let w=_[b],q=Ht(w.materialKeys,g);if(q.length===0&&(b==="lines"||b==="linestrips"?q.push(new _r):q.push(new ra)),b==="lines"||b==="linestrips")for(let Se=0,Ne=q.length;Se<Ne;Se++){let ce=q[Se];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Ie=new _r;Ie.color.copy(ce.color),Ie.opacity=ce.opacity,Ie.transparent=ce.transparent,q[Se]=Ie}}let ee=w.data.attributes.skinIndex!==void 0,Ae=q.length===1?q[0]:q,xe;switch(b){case"lines":xe=new Lo(w.data,Ae);break;case"linestrips":xe=new ia(w.data,Ae);break;case"triangles":case"polylist":ee?xe=new Co(w.data,Ae):xe=new kt(w.data,Ae);break}M.push(xe)}return M}function Pt(_){return Xe.nodes[_]!==void 0}function je(_){return x(Xe.nodes[_],Ot)}function Ir(_){let g={name:_.getAttribute("name"),children:[]};we(_);let M=i(_,"node");for(let b=0;b<M.length;b++)g.children.push(We(M[b]));Xe.visualScenes[_.getAttribute("id")]=g}function Nt(_){let g=new dn;g.name=_.name;let M=_.children;for(let b=0;b<M.length;b++){let w=M[b];g.add(je(w.id))}return g}function _i(_){return Xe.visualScenes[_]!==void 0}function Nr(_){return x(Xe.visualScenes[_],Nt)}function hs(_){let g=i(_,"instance_visual_scene")[0];return Nr(o(g.getAttribute("url")))}function Dr(){let _=Xe.clips;if(l(_)===!0){if(l(Xe.animations)===!1){let g=[];for(let M in Xe.animations){let b=P(M);for(let w=0,q=b.length;w<q;w++)g.push(b[w])}Pa.push(new aa("default",-1,g))}}else for(let g in _)Pa.push(J(g))}function $t(_){let g="",M=[_];for(;M.length;){let b=M.shift();b.nodeType===Node.TEXT_NODE?g+=b.textContent:(g+=`
`,M.push.apply(M,b.childNodes))}return g.trim()}if(e.length===0)return{scene:new gr};let ti=new DOMParser().parseFromString(e,"application/xml"),Ft=i(ti,"COLLADA")[0],on=ti.getElementsByTagName("parsererror")[0];if(on!==void 0){let _=i(on,"div")[0],g;return _?g=_.textContent:g=$t(on),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,g),null}let Ur=Ft.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Ur);let Ca=h(i(Ft,"asset")[0]),Or=new Fo(this.manager);Or.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Oc;ha&&(Oc=new ha(this.manager),Oc.setPath(this.resourcePath||t));let Ra=new tt,Pa=[],Qh={},Hp=0,Xe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ft,"library_animations","animation",p),m(Ft,"library_animation_clips","animation_clip",F),m(Ft,"library_controllers","controller",$),m(Ft,"library_images","image",ie),m(Ft,"library_effects","effect",Fe),m(Ft,"library_materials","material",De),m(Ft,"library_cameras","camera",rt),m(Ft,"library_lights","light",Re),m(Ft,"library_geometries","geometry",ye),m(Ft,"library_nodes","node",We),m(Ft,"library_visual_scenes","visual_scene",Ir),m(Ft,"library_kinematics_models","kinematics_model",Tt),m(Ft,"library_physics_models","physics_model",Aa),m(Ft,"scene","instance_kinematics_scene",Uc),y(Xe.animations,v),y(Xe.clips,Q),y(Xe.controllers,B),y(Xe.images,ae),y(Xe.effects,he),y(Xe.materials,Ce),y(Xe.cameras,Ye),y(Xe.lights,It),y(Xe.geometries,St),y(Xe.visualScenes,Nt),Dr(),j();let La=hs(i(Ft,"scene")[0]);return La.animations=Pa,Ca.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),La.rotation.set(-Math.PI/2,0,0)),La.scale.multiplyScalar(Ca.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Pa},kinematics:Qh,library:Xe,scene:La}}};var df=new tn,Ko=new I,Ts=class extends Go{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Lt(e,3)),this.setAttribute("uv",new Lt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Es(t,6,1);return this.setAttribute("instanceStart",new kn(i,3,0)),this.setAttribute("instanceEnd",new kn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Es(t,6,1);return this.setAttribute("instanceColorStart",new kn(i,3,0)),this.setAttribute("instanceColorEnd",new kn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new No(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),df.setFromBufferAttribute(t),this.boundingBox.union(df))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ko.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ko)),Ko.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ko));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $e(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};xn.line={uniforms:jo.merge([ge.common,ge.fog,ge.line]),vertexShader:`
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
		`};var Ni=class extends jn{constructor(e){super({type:"LineMaterial",uniforms:jo.clone(xn.line.uniforms),vertexShader:xn.line.vertexShader,fragmentShader:xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var ff=new I,pf=new I,nn=new _t,sn=new _t,ai=new _t,ah=new I,oh=new nt,rn=new Xo,mf=new I,Qo=new tn,ec=new zn,oi=new _t,ci,As;function gf(n,e,t){return oi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),oi.multiplyScalar(1/oi.w),oi.x=As/t.width,oi.y=As/t.height,oi.applyMatrix4(n.projectionMatrixInverse),oi.multiplyScalar(1/oi.w),Math.abs(Math.max(oi.x,oi.y))}function uv(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,c=a;o<c;o++){rn.start.fromBufferAttribute(s,o),rn.end.fromBufferAttribute(r,o),rn.applyMatrix4(t);let l=new I,h=new I;ci.distanceSqToSegment(rn.start,rn.end,h,l),h.distanceTo(l)<As*.5&&e.push({point:h,pointOnLine:l,distance:ci.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function dv(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),u=-e.near;ci.at(1,ai),ai.w=1,ai.applyMatrix4(e.matrixWorldInverse),ai.applyMatrix4(i),ai.multiplyScalar(1/ai.w),ai.x*=r.x/2,ai.y*=r.y/2,ai.z=0,ah.copy(ai),oh.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(nn.fromBufferAttribute(c,d),sn.fromBufferAttribute(l,d),nn.w=1,sn.w=1,nn.applyMatrix4(oh),sn.applyMatrix4(oh),nn.z>u&&sn.z>u)continue;if(nn.z>u){let v=nn.z-sn.z,P=(nn.z-u)/v;nn.lerp(sn,P)}else if(sn.z>u){let v=sn.z-nn.z,P=(sn.z-u)/v;sn.lerp(nn,P)}nn.applyMatrix4(i),sn.applyMatrix4(i),nn.multiplyScalar(1/nn.w),sn.multiplyScalar(1/sn.w),nn.x*=r.x/2,nn.y*=r.y/2,sn.x*=r.x/2,sn.y*=r.y/2,rn.start.copy(nn),rn.start.z=0,rn.end.copy(sn),rn.end.z=0;let x=rn.closestPointToPointParameter(ah,!0);rn.at(x,mf);let p=ns.lerp(nn.z,sn.z,x),f=p>=-1&&p<=1,C=ah.distanceTo(mf)<As*.5;if(f&&C){rn.start.fromBufferAttribute(c,d),rn.end.fromBufferAttribute(l,d),rn.start.applyMatrix4(a),rn.end.applyMatrix4(a);let v=new I,P=new I;ci.distanceSqToSegment(rn.start,rn.end,P,v),t.push({point:P,pointOnLine:v,distance:ci.origin.distanceTo(P),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var ua=class extends kt{constructor(e=new Ts,t=new Ni({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)ff.fromBufferAttribute(t,a),pf.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ff.distanceTo(pf);let r=new Es(s,2,1);return e.setAttribute("instanceDistanceStart",new kn(r,1,0)),e.setAttribute("instanceDistanceEnd",new kn(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ci=e.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;As=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ec.copy(o.boundingSphere).applyMatrix4(a);let l;if(i)l=As*.5;else{let u=Math.max(s.near,ec.distanceToPoint(ci.origin));l=gf(s,u,c.resolution)}if(ec.radius+=l,ci.intersectsSphere(ec)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Qo.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=As*.5;else{let u=Math.max(s.near,Qo.distanceToPoint(ci.origin));h=gf(s,u,c.resolution)}Qo.expandByScalar(h),ci.intersectsBox(Qo)!==!1&&(i?uv(this,t):dv(this,s,t))}};var is=["en","fr","ca","es"];var fv={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function bf(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of fv[e]||is)if(n[t])return n[t];return""}var da={en:{all:"All",postedIn:"Filed under",visit:"Visit the site:",who:"Who worked on this project?",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",close:"Close",soundOn:"Sound on",soundOff:"Mute",hv_tab:"Video",hv_grid:"Grid",hv_contrast:"Contrast",hv_color:"Colour",hv_invert:"Invert",hv_sound:"Sound",hv_cam:"Camera",hv_camNote:"Your image stays on your screen.",hv_camDenied:"Camera unavailable.",sent:"Your slogan is now scrolling at the top.",bsLabel:"Type your bullshit slogan, then press Enter"},fr:{all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",who:"Qui a travaill\xE9 sur ce projet ?",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",hv_tab:"Vid\xE9o",hv_grid:"Grille",hv_contrast:"Contraste",hv_color:"Couleur",hv_invert:"Inverser",hv_sound:"Son",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran.",hv_camDenied:"Cam\xE9ra indisponible.",sent:"Ton slogan d\xE9file en haut de la page.",bsLabel:"Tape ton bullshit slogan, puis Entr\xE9e"},ca:{all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",who:"Qui hi ha treballat?",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",hv_tab:"V\xEDdeo",hv_grid:"Graella",hv_contrast:"Contrast",hv_color:"Color",hv_invert:"Inverteix",hv_sound:"So",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla.",hv_camDenied:"C\xE0mera no disponible.",sent:"El teu esl\xF2gan ja passa a dalt de la p\xE0gina.",bsLabel:"Escriu el teu bullshit slogan i prem Retorn"},es:{all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",who:"\xBFQui\xE9n ha trabajado en este proyecto?",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_tab:"V\xEDdeo",hv_grid:"Cuadr\xEDcula",hv_contrast:"Contraste",hv_color:"Color",hv_invert:"Invertir",hv_sound:"Sonido",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla.",hv_camDenied:"C\xE1mara no disponible.",sent:"Tu eslogan ya pasa arriba de la p\xE1gina.",bsLabel:"Escribe tu bullshit slogan y pulsa Intro"}},pv={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},lh={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function ch(){return Object.fromEntries(is.map(n=>[n,""]))}function Cs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:is.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||ch(),e.sub=e.sub||ch(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||ch(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=pv[t.layout]?t.layout:"carousel",t.card=lh[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(is.map(s=>[s,t[i]||""]))),is.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit="")}),t.spots=Array.isArray(t.spots)?t.spots.filter(dh):[],t.published===void 0&&(t.published=!0)}),n}function hh(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function dt(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var mv=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function uh(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!mv.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function ic(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var dh=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function ss(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function fh(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function _f(n){try{let e=await fh();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function yf(n,e){let t=await fh();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function xf(n){try{let e=await fh();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var tc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Cs(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Cs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var nc=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await _f("demo:content:v6");if(e)return Cs(e);if(window.HC_CONTENT)return Cs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Cs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await xf("demo:file:"+i.path);continue}await yf("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await yf("demo:content:v6",e),"demo"}async reset(){await xf("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await _f("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},vf=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],sc=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],gv=["font","size","lh","weight","italic","ls","upper"],Mf=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function _v(n){let e=vf.find(i=>i.id===n);if(e)return e.css;let t=Mf(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:vf[0].css}function Di(n,e){let t=sc.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...gv,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=_v(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function Sf(n){let e=[],t=[],i=[];for(let s of sc){let r=n&&n.typo&&n.typo[s.id]||{},a=Di(n,s.id),o=l=>r[l]!==void 0&&r[l]!==""&&r[l]!==null&&r[l]!==s[l];if(s.vars){o("font")&&e.push(`:root { ${s.vars.map(l=>`${l}: ${a.css};`).join(" ")} }`);continue}if(!s.sel)continue;let c=[];if(o("font")&&c.push(`font-family: ${a.css}`),o("size")&&c.push(s.clamp?`font-size: clamp(${Math.round(a.size*s.clamp[0])}px, ${(a.size/s.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(o("lh")||o("size")&&!s.clamp&&!o("lh")&&s.lh)&&c.push(`line-height: ${o("lh")?a.lh:+(s.lh*a.size/s.size).toFixed(1)}px`),o("weight")&&c.push(`font-weight: ${a.weight}`),o("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),o("ls")&&c.push(`letter-spacing: ${a.ls}em`),o("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${s.sel.join(", ")} { ${c.join("; ")} }`),s.mob&&(o("size")||o("lh"))){let l=o("lh")?a.lh:s.lh*a.size/s.size;t.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob)}px; line-height: ${Math.round(l*s.mob)}px }`),i.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob*.9)}px; line-height: ${Math.round(l*s.mob*.9)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) and (min-width: 701px) { ${i.join(" ")} }`),e.join(`
`)}function wf(n){let e=new Map;for(let t of sc){let i=Di(n,t.id),s=Mf(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function ph(n){let e=new Set;for(let t of sc){let i=Di(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Ef(n,e){let t=Di(e,"logo"),i=document.createElement("canvas");i.width=i.height=240;let s=i.getContext("2d");s.fillStyle=n,s.beginPath(),s.arc(120,120,112,0,Math.PI*2),s.fill(),s.fillStyle="#111",s.beginPath(),s.arc(120,120,88,0,Math.PI*2),s.fill();let r=String(t.text??"hc").slice(0,4);s.fillStyle="#fff",s.textAlign="center",s.textBaseline="alphabetic",s.font=`${t.italic?"italic ":""}${t.weight||400} ${Math.max(8,+t.size||38)*2}px ${t.css}`;let a=s.measureText(r),o=(a.actualBoundingBoxAscent||t.size*1.4)-(a.actualBoundingBoxDescent||0);return s.fillText(r,120,120+o/2),i.toDataURL("image/png")}var Tf=window.HC_BASE||"",hc=window.HC_MODE==="demo"?new nc(Tf):new tc(Tf),rs=window.HC_ASSETS||null,yv=location.protocol==="file:",Yf=20261102;window.HC_SITE_VERSION=Yf;var Jt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,Tn=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Jt&&Jt.files&&Jt.files[e]?Jt.files[e]:rs&&rs[e]&&rs[e].startsWith("data:")?rs[e]:hc.url(e)};async function xv(n){if(rs&&rs[n]&&!rs[n].startsWith("data:"))return rs[n];let e=await fetch(Tn(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var it=null,Bi="en",at=n=>bf(n,Bi),Mt=n=>(da[Bi]||da.en)[n],vv=42,me={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},mc={zoom:2,focus:300},bv=.08,Af={};function $f(n){if(me.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{me[t]=Af[t]}):(e.forEach(t=>{Af[t]=me[t]}),Object.assign(me,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),me.animationMode=n}var Eh=class{constructor(e){this.section=e,this.all=hh(it,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:{en:da.en.all,fr:da.fr.all}},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.section.perPage),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?at(e.label):""}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.section.perPage),this.posts=this.list.slice(this.first,this.last),!0):!1}},se={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:me.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Zt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Eh(this.section.def)}},Zt=[],xt={x:0,y:0,z:0,zoom:mc.zoom},Kn={x:0,y:0,z:0},Oi=0,pi=[],Mv={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function vn(n,e,t,i={}){for(let r of pi)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:Oi+(i.delay||0),ease:Mv[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return pi.push(s),s}var gc=(n,e)=>vn({},n,{},{onComplete:e,ease:"linear"});function di(n){for(let e=pi.length-1;e>=0;e--)pi[e].obj===n&&pi.splice(e,1)}function _c(n){return pi.some(e=>e.obj===n&&Oi>=e.start)}function jf(n,e){if(!e&&Oi<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(Oi-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function Sv(){for(let n of pi.slice())if(jf(n,!1)){let e=pi.indexOf(n);e>=0&&pi.splice(e,1),n.onComplete&&n.onComplete()}}function wv(){pi.splice(0).forEach(n=>jf(n,!0))}function Ev(n,e,t,i,s,r,a){di(xt),vn(xt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-xt.x)/2,y:e+500,z:(t-xt.z)/2}}),Zf(i,s,r,a)}function Zf(n,e,t,i){di(Kn),vn(Kn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function Tv(n,e,t,i){di(xt),vn(xt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var yc=1,En=n=>n<=1?1:1-Math.pow(1-1/n,yc),mi=Math.PI/180,Th=(n,e,t)=>new I(n,e,-t),Rs=(n,e,t)=>[-n,e,t],In=document.getElementById("stage"),wa=new ea({canvas:In,antialias:!0});wa.setPixelRatio(Math.min(window.devicePixelRatio||1,2));wa.setClearColor(16777215,1);var Ns=new gr;Ns.add(new Bo(16777215,14211288,2.2));var Jf=new vr(16777215,1.2);Jf.position.set(300,800,500);Ns.add(Jf);var Zn=new Gt(60,1,1,6e4),Kf=new Ni({color:me.lineColor,linewidth:me.lineThickness}),Ah=new Ni({color:me.planeFrameColor,linewidth:me.planeFrameThickness}),Qf=new Ni({color:me.planeFrameSelectColor,linewidth:me.planeFrameThickness}),uc=new Ni({color:me.locatorColor,linewidth:1.3}),ep=[Kf,Ah,Qf,uc],tp=new oa;tp.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Tn(n));var mh=new Map;function Er(n){return n?yv&&!/^(data:|blob:|https?:)/.test(Tn(n))?Promise.reject(new Error("local")):(mh.has(n)||mh.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(Tn(n))&&(i.crossOrigin="anonymous"),i.onload=()=>e(i),i.onerror=t,i.src=Tn(n)})),mh.get(n)):Promise.reject(new Error("no image"))}function np(n){return n.colorSpace=zt,n.anisotropy=Math.min(8,wa.capabilities.getMaxAnisotropy()),n}var Wn=0,Ln=0,Vn=!1,xc=()=>Vn,ip=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},An=()=>{let n=it.settings.accent||"#ffcc00";return xc()?ip(n):n},Jn='Georgia, Gelasio, "Times New Roman", serif',fi='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',kh=1,Fi=n=>Math.round(n*kh);function Rr(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...it?ph(it.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Cf=0;function Av(){clearTimeout(Cf),Cf=setTimeout(async()=>{try{await Promise.all(ph(it.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}it.settings.logo||["logo","home-logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.src=Ih(Vn?"#ffffff":it.settings.accent||"#ffcc00"))}),lt&&lt.retexture()},150)}function sp(){let n=it.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=Sf(n);e.textContent!==t&&(e.textContent=t);let i=wf(n);document.querySelectorAll("link[data-hc-font]").forEach(s=>{i.includes(s.href)||s.remove()}),i.forEach(s=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(s)}"]`)){let r=document.createElement("link");r.rel="stylesheet",r.href=s,r.dataset.hcFont="",r.onload=Av,document.head.appendChild(r)}}),Jn=Di(n,"card").css,fi=Di(n,"cardsm").css,kh=Math.max(.5,Math.min(2,(+Di(n,"card").scale||100)/100))}function as(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function Qn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),np(new sa(s))}function Tr(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,c=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-c)/2,o,c,t,i,s,r),xc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var rp=n=>String(n).split(/[\s&]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("");function ap(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function Cv(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}async function Rv(n,e,t){let i=n.thumb?await Er(n.thumb).catch(()=>null):null,s=n.thumbBack?await Er(n.thumbBack).catch(()=>null):null;await Rr();let r=c=>{if(i){Tr(c,i,0,0,e,t);let u=Of(n,n.media[0]&&n.media[0].credit);if(u){c.font=`9px ${fi}`;let d=u;for(;c.measureText(d).width>e-14&&d.length>4;)d=d.slice(0,-2)+"\u2026";let m=c.createLinearGradient(0,t-26,0,t);m.addColorStop(0,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,.75)"),c.save(),xc()&&(c.filter="invert(1)"),c.fillStyle=m,c.fillRect(0,t-26,e,26),c.restore(),c.fillStyle=xc()?"#000":"#fff",c.textBaseline="bottom",c.fillText(d,7,t-6)}return}c.fillStyle="#111",c.fillRect(0,0,e,t),c.textBaseline="top",c.fillStyle=An(),c.fillRect(16,18,18,2),c.fillStyle="#fff",c.font=`${Fi(24)}px ${Jn}`;let l=as(c,at(n.title),e-32).slice(0,3);l.forEach((u,d)=>c.fillText(u,16,30+d*28)),c.fillStyle="#8c8c8c",c.font=`${Fi(13)}px ${Jn}`,as(c,at(n.subtitle),e-32).slice(0,2).forEach((u,d)=>c.fillText(u,16,38+l.length*28+d*16));let h=Of(n,n.media[0]&&n.media[0].credit);if(c.fillStyle=An(),c.font=`10px ${fi}`,c.fillText([n.date,at(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),16,t-(h?36:22)),h){c.font=`9px ${fi}`;let u=h;for(;c.measureText(u).width>e-32&&u.length>4;)u=u.slice(0,-2)+"\u2026";c.fillStyle="#2a2a2a",c.fillRect(0,t-20,e,20),c.fillStyle="#9a9a9a",c.textBaseline="middle",c.fillText(u,16,t-10)}},a=Qn(e,t,r,2),o=s?Qn(e,t,c=>Tr(c,s,0,0,e,t),2):Qn(e,t,ap(r),1.5);return[a,o]}async function Pv(n,e,t){let i=n.thumb?await Er(n.thumb).catch(()=>null):null,s=n.thumbBack?await Er(n.thumbBack).catch(()=>null):null;await Rr();let r=a=>{if(i){Tr(a,i,0,0,e,t);return}a.fillStyle="#1b1b1b",a.fillRect(0,0,e,t),a.fillStyle="#fff",a.font=`${Math.round(t*.42*kh)}px ${Jn}`,a.textAlign="center",a.textBaseline="middle",a.fillText(rp(at(n.title)),e/2,t*.45),a.fillStyle=An(),a.fillRect(e/2-8,t*.78,16,1.5)};return[Qn(e,t,r,3),s?Qn(e,t,a=>Tr(a,s,0,0,e,t),3):Qn(e,t,ap(r),2)]}async function Lv(n,e,t){let i=n.thumb?await Er(n.thumb).catch(()=>null):null;await Rr();let s=at(n.title).trim(),r=i?72:18,a=e-r-14,o=Qn(e,t,l=>{l.fillStyle="#333",l.fillRect(0,0,e,t),i?Tr(l,i,13,12.75,53,53):(l.fillStyle=An(),l.fillRect(18,14,14,2)),l.fillStyle="#fff",l.font=`${Fi(21)}px ${Jn}`,l.textBaseline="top",as(l,s,a).slice(0,3).forEach((h,u)=>l.fillText(h,r,(i?12:20)+u*22))}),c=Qn(e,t,Cv(e,l=>{l.fillStyle="rgba(255,255,255,.7)",l.fillRect(0,0,e,t),l.fillStyle="#c4c4c4",l.font=`${Fi(21)}px ${Jn}`,l.textBaseline="top",as(l,s,a).slice(0,3).forEach((h,u)=>l.fillText(h,r,(i?9:17)+u*22))}));return[o,c]}async function Iv(n,e,t){let i=n.thumb?await Er(n.thumb).catch(()=>null):null;await Rr();let r=Qn(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),Tr(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=An(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${Fi(12)}px ${Jn}`,a.textAlign="center",a.textBaseline="top",a.fillText(at(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var Rf={image:Rv,portrait:Pv,text:Lv,place:Iv};function rc(n,e){return Rr().then(()=>e==="place"?Qn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=`${Fi(44)}px ${Jn}`,t.fillText(at(n.title)+".",32,18),t.fillStyle="#979797",t.font=`${Fi(18)}px ${Jn}`,as(t,at(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.fillStyle=An(),t.font=`14px ${fi}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",ic(at(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.fillStyle=An(),t.font=`15px ${fi}`,t.fillText(at(n.place),32,260)},1.5):Qn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${Fi(20)}px ${Jn}`;let i=as(t,at(n.title)+".",166).slice(0,2);i.forEach((r,a)=>t.fillText(r,18,14+a*22));let s=20+i.length*22;t.fillStyle="#8c8c8c",t.font=`${Fi(15)}px ${Jn}`,at(n.subtitle).split(/(?<=\.)\s+/).forEach(r=>as(t,r,166).forEach(a=>{s<150&&(t.fillText(a,19,s),s+=18)})),t.fillStyle="#bbb",t.font=`11px ${fi}`,ic(at(n.body)).join(" ").split(/\s+/).length>1&&as(t,ic(at(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor((176-s)/14))).forEach(r=>{t.fillText(r,19,s+4),s+=14}),at(n.place)&&(t.fillStyle=An(),t.font=`11px ${fi}`,t.fillText(at(n.place).toUpperCase(),19,180))}))}function Nv(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${fi}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${fi}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let c=new Ao(new ta({map:np(new sa(s)),transparent:!0}));c.center.set(.5,0);let l=20;return c.scale.set(l*a/o,l,1),c.renderOrder=2,c}var li=document.createElement("div");li.id="net-tip";li.className="ui";li.hidden=!0;document.body.appendChild(li);function op(n,e,t){li.innerHTML=`<b>${dt(n.city||"")}</b>${n.titles.map(s=>`<span>${dt(s)}</span>`).join("")}`,li.hidden=!1;let i=li.getBoundingClientRect();li.style.left=Math.min(e+14,Wn-i.width-10)+"px",li.style.top=Math.max(10,t-i.height-12)+"px"}function Hh(){li.hidden=!0}var Ch=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new dn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=it.models.find(l=>l.id===this.def.model)||it.models[0];if(!t)return;let i=await xv(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new dn;if(o.add(a),a.traverse(l=>{if(!l.isMesh)return;let h=u=>{let d=u.map||u.emissiveMap||null;return d?new pn({map:d}):t.untextured==="white"?new Ss({color:15921906}):t.untextured==="black"?new Ss({color:2236962}):new pn({color:me.locatorColor,wireframe:!0})};l.material=Array.isArray(l.material)?l.material.map(h):h(l.material),this.blockers.push(l)}),t.scaleMode==="fit"){o.updateMatrixWorld(!0);let l=new tn().setFromObject(o),h=l.getSize(new I),u=(t.height||420)/Math.max(h.y,1e-6);o.scale.setScalar(u),o.updateMatrixWorld(!0);let d=new tn().setFromObject(o),m=d.getCenter(new I);o.position.set(-m.x,-d.min.y,-m.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let l=new tn().setFromObject(o);l.max.y-l.min.y>me.object3DMaxHeight&&o.scale.setScalar(me.object3DMaxHeight/(l.max.y-l.min.y))}let c=new dn;c.rotation.y=(t.rotationY||0)*mi,c.add(o),this.container.add(c)}place(e){this.p.x=e*5*me.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*me.object3DDistance,this.container.position.copy(Th(this.p.x,0,this.p.z))}};function cp(n,e){let t=new Ts;t.setPositions(n);let i=new ua(t,e);return i.computeLineDistances(),i}var Rh=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new dn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t){let i=new Ms(this.width,this.height),s=new kt(i,new pn({map:e,side:Bn})),r=new kt(i,new pn({map:t,side:fn}));s.userData={post:this,face:"front"},r.userData={post:this,face:"back"},this.width+=me.planeFrameDistance,this.height+=me.planeFrameDistance;let a=this.width/2,o=this.height/2;this.frame=cp([-a,-o,0,a,-o,0,-a,-o,0,-a,o,0,a,-o,0,a,o,0,-a,o,0,a,o,0],Ah),this.group.add(s,r,this.frame),this.meshes.push(s,r),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...Rs(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*mi,t.rotation.x=-e.rotX*mi,t.rotation.z=e.rotZ*mi,t.scale.setScalar(Math.max(1e-4,e.scale))}selectIt(){this.frame&&(this.frame.material=Qf,gc(.8,()=>{this.frame&&(this.frame.material=Ah)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),vn(this.thumb,me.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){di(this.thumb);let i=ki(),s={x:-i*Math.sin(se.degreeCamera),z:-i*Math.cos(se.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,c=Math.hypot(a,o)||1;return vn(this.thumb,t,{x:s.x+a*e/c,y:r.y,z:s.z+o*e/c,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/c,z:o/c}}}moveBack(e=0){di(this.thumb);let t=this.p2;vn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){vn(this.thumb,me.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>vn(this.thumb,me.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}dispose(){di(this.thumb),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!ep.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function gh(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*mi;i===0&&(i=2*Math.PI);let s=(i-se.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),se.selected=e,se.cameraY=t.p2.y,se.degreeCamera+=s,t.selectIt(),!0}function _h(n,e,t){se.degreeCamera%=2*Math.PI,se.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(se.selected=e,se.degreeCamera=Math.PI,i.ready&&(se.cameraY=i.p2.y,i.selectIt(),t(i)))}var yh=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||_c(r.thumb))return;let o=r.thumb,c=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+c)*En(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*En(2*i))}),Pf={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:me.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*me.planeDisOrder+me.planeDistance,z:me.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/mi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>gh(n,e),move:(n,e,t,i)=>yh(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=me;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>_h(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>yh(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=me,a=y=>{let x=n.angle*(y+1);return x-Math.cos(x)*n.angle/2},o=t,c;t+1>s?(o=2*Math.round(i/2)-t-1,c=Math.pow(-1,o)):c=Math.pow(-1,t+1);let l=r.planeDistance*.7+e.width+c*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,d=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:l*Math.cos(a(o)),y:u*Math.sin(a(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{gh(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*En(2*me.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*En(2*me.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return ss(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Ac(n.def);return{x:i[0]+s[0],y:(me.planeDistance+e.height+Math.pow(-1,t+1)*me.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>_h(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||_c(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*En(2*me.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=me.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*me.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/mi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>gh(n,e),move:(n,e,t,i)=>yh(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*me.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>_h(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||_c(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*En(2*me.cameraEaseSpeed)})}}},Lf=new I,If=new I,Ph=class{constructor(e){this.section=e,this.def=e.def,this.L=Pf[this.def.layout]||Pf.carousel,this.card=this.def.card,this.posts=se.data.posts.slice(),this.n=this.posts.length,[this.w,this.h]=lh[this.card].size,this.k=Fv(this.def),this.container=new dn,this.container.position.copy(e.container.position),Ns.add(this.container),this.postViews=this.posts.map((t,i)=>new Rh(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Zt.map(u=>u.def.id)),t=new Map,i=(u,d,m)=>{if(!dh(u))return;let y=(+u.lat).toFixed(1)+","+(+u.lon).toFixed(1),x=t.get(y);x||t.set(y,x={loc:u,city:u.city||"",titles:[],base:!1}),d&&!x.titles.includes(d)&&x.titles.push(d),m&&(x.base=!0)};if(hh(it,this.def.id).forEach(u=>i(u.location,at(u.title),!0)),it.posts.forEach(u=>{u.published&&e.has(u.section)&&u.section!==this.def.id&&u.spots.forEach(d=>i(d,at(u.title)))}),!t.size)return;uc.color.set(An());let s=50,r=new dn,a=[...t.values()],o=a.filter(u=>u.base),c=new Io(1,14,10),l={on:new pn({color:An()}),base:new pn({color:1118481})};this.net={group:r,mats:l,items:[],hits:[],start:Oi+(me.planeSpeed>0?.5:-60),dispose:[c,l.on,l.base]},a.forEach(u=>{u.xz=ss(u.loc)}),a.forEach(u=>{u.from=u.base?null:o.length?o.map(d=>[d,Math.hypot(ss(d.loc)[0]-u.xz[0],ss(d.loc)[1]-u.xz[1])]).sort((d,m)=>d[1]-m[1])[0][0]:null,u.d=u.from?Math.hypot(ss(u.from.loc)[0]-u.xz[0],ss(u.from.loc)[1]-u.xz[1]):0}),a.sort((u,d)=>d.base-u.base||u.d-d.d);let h=[];a.forEach((u,d)=>{let[m,y]=u.xz,x=u.base?0:.15+d*.07,p=new kt(c,u.base?l.base:l.on);p.scale.setScalar(u.base?7:4+Math.min(3,u.titles.length)),p.position.set(...Rs(m,s,y)),r.add(p),p.userData={netNode:u},this.net.hits.push(p);let f=null,C=0;if(u.from){let[P,U]=ss(u.from.loc),L=s+18+u.d*.32,N=2*L-s,K=(P+m)/2,E=(U+y)/2;C=Math.max(12,Math.min(48,Math.round(u.d/6)));let R=le=>{let O=1-le;return Rs(O*O*P+2*O*le*K+le*le*m,O*O*s+2*O*le*N+le*le*s,O*O*U+2*O*le*E+le*le*y)},Z=[];for(let le=0;le<C;le++)Z.push(...R(le/C),...R((le+1)/C));let oe=new Ts;oe.setPositions(Z),f=new ua(oe,uc),f.computeLineDistances(),oe.instanceCount=0,r.add(f)}let v=null;u.city&&!h.some(P=>Math.abs(P[0]-m)<80&&Math.abs(P[1]-y)<22)&&(v=Nv(u.city.toUpperCase()+(u.titles.length>1&&!u.base?" \xB7 "+u.titles.length:""),u.base),v.position.set(...Rs(m,s+9,y)),r.add(v),h.push([m,y])),this.net.items.push({dot:p,arc:f,segs:C,label:v,delay:x,base:u.base})}),this.container.add(r)}async openPosts(){for(let e=0;e<this.n;e++){let t;try{t=await Rf[this.card](this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1]),this.animeOpenPost(this.postViews[e],e),me.planeSpeed>0){let i=Oi+bv;for(;Oi<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}}animeOpenPost(e,t){let i=this.L;if(!i.keep){let c=i.position.call(i,this,e,t);e.setPosition(c.x,c.y,c.z,c.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*me.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,vn(e.thumb,r,{y:s.y,rotX:0},{delay:me.planeSpeed/3,ease:"expoOut",onComplete:o}),vn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,vn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...Rs(...i),...Rs(...s)],a=this.lines[t];a?a.geometry.setPositions(r):(a=this.lines[t]=cp(r,Kf),this.container.add(a))}async openInfo(e,t,i){let s=await rc(this.posts[t],"place");if(!this.alive)return;let r=new kt(new Ms(165,130),new pn({map:s,side:Mn}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),vn(a.p,me.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),gc(i,()=>{r.visible=!0})}async openPost3D(){let e=se.selected,t=this.postViews[e];if(!t||!t.ready)return;let{cl:i,dir:s}=t.moveToCamera(60,me.tween);this.focusInfo||(this.focusInfo={mesh:new kt(new Ms(90,90),new pn({side:Mn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let r=this.focusInfo;r.mesh.visible=!1;let a=await rc(this.posts[e],"person");if(!this.alive)return;r.mesh.material.map&&r.mesh.material.map.dispose(),r.mesh.material.map=a,r.mesh.material.needsUpdate=!0;let o=this.h*this.k/90;r.mesh.scale.setScalar(o),gc(me.tween,()=>{!se.postOpen||se.selected!==e||(r.target=t,r.k=0,r.mesh.visible=!0,di(r),vn(r,me.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[se.selected];e&&e.moveBack(me.tween/2),this.focusInfo&&(di(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;di(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(se.degreeCamera/mi)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=se.selected,s=this.postViews[se.selected]&&this.postViews[se.selected].ready?t(this.postViews[se.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),se.selected=i}goNext(){return se.selected+1>=this.n?0:se.selected+1}goPrev(){return se.selected-1<=-1?this.n-1:se.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net)for(let e of this.net.items){let t=Math.max(0,Math.min(1,(Oi-this.net.start-e.delay)/.9)),i=1-(1-t)*(1-t);e.arc&&(e.arc.geometry.instanceCount=Math.round(i*e.segs));let s=e.base||t>=1;e.dot.visible=s,e.label&&(e.label.visible=s)}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...Rs(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*mi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Lf.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),If.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Lf).add(If)}}async retexture(){this.net&&(uc.color.set(An()),this.net.mats.on.color.set(An()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await Rf[this.card](this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){new Set(s).forEach(a=>a.dispose());return}new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose());let r=this.infos[t];if(r){let a=await rc(this.posts[t],"place");if(!this.alive){a.dispose();return}let o=e(r.mesh,a);o&&o.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&se.postOpen){let t=await rc(this.posts[se.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(di(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Hh(),Ns.remove(this.container)}},Ps=[],lt=null,Mr=me.cameraEaseSpeed,Ar=!1,ei=!1,os=0,cs=0,dc=0,fc=0,Ea=!1,gi=!1,Hi=()=>Ps[se.currentSection];function Dv(){let n=me.cameraHeight;se.cameraY=se.cameraY+n/7<=3*n?se.cameraY+n/7:n*3}function Uv(){let n=me.cameraHeight;se.cameraY=se.cameraY-n/7>=n/7?se.cameraY-n/7:n/7}var Ov={map:58},Ac=(n=(Hi()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||Ov[n.layout]||100)/100)),ki=()=>me.cameraDistance*Ac(),Vh=()=>me.cameraTargetHeight*(((Hi()||{}).def||{}).layout==="map"?Ac()*.62:1),lp=()=>me.cameraHeight*(((Hi()||{}).def||{}).layout==="map"?Ac()*1.6:1),Fv=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100));function Nf(){let n=Hi();xt.x=n.p.x+ki()*Math.sin(se.actualDeg),xt.z=n.p.z+ki()*Math.cos(se.actualDeg)}function Gh(){Ps.forEach((n,e)=>{e===se.currentSection?n.container.parent||Ns.add(n.container):n.container.parent&&Ns.remove(n.container)}),Ar=!1,ei=!1,In.classList.remove("dragging"),lt&&lt.destroy(),lt=new Ph(Hi()),vc(se.selected),se.actualDeg=se.degreeCamera,Bv()}function Bv(){let n=Hi();se.cameraY=lp(),Ev(ki()*Math.sin(se.degreeCamera)+n.p.x,se.cameraY,ki()*Math.cos(se.degreeCamera)+n.p.z,n.p.x,Vh(),n.p.z,me.cameraSpeed)}function vc(n){se.selected=n,lt&&lt.focus(n)}function xh(n){!lt||!lt.n||(ei=!0,lt.checkPostSelected(),Mr=me.cameraKeyboardSpeed,vc(n==="NEXT"?lt.goNext():lt.goPrev()))}function Wh(){let t=me.cameraDistanceProportion/280;me.cameraDistance=Math.round((Ln<680?1e3-Ln:320)*t)}function Xh(){if(ei=!1,Wh(),!Ea)return;let n=Hi();se.postOpen&&se.section.def.open==="focus3d"&&lt&&lt.postViews[se.selected]&&lt.postViews[se.selected].moveToCamera(100,0),Tv(n.p.x+ki()*Math.sin(se.actualDeg),xt.y,n.p.z+ki()*Math.cos(se.actualDeg),me.cameraSpeed/2)}function zv(){if(!gi){Math.abs(xt.y-se.cameraY)>.007&&!_c(xt)&&(xt.y-=(xt.y-se.cameraY)*En(me.cameraEaseSpeed));return}if(Ar){Mr=me.cameraEaseSpeed;let n=se.degreeCamera;se.degreeCamera+=(os-dc)/150,se.actualDeg-=(se.actualDeg-n)*En(Mr),Nf(),se.cameraY+=(cs-fc)*2;let e=me.cameraHeight;se.cameraY<e/3?se.cameraY=e/3:se.cameraY>e*4&&(se.cameraY=4*e),xt.y-=(xt.y-se.cameraY)*En(Mr),me.animationMode&&lt&&lt.movePosts((dc-os)/Math.max(yc,.25),(fc-cs)/Math.max(yc,.25),Mr),dc=os,fc=cs}else ei?(Math.abs(se.actualDeg-se.degreeCamera)<=.007&&(ei=!1),se.actualDeg-=(se.actualDeg-se.degreeCamera)*En(me.cameraEaseSpeed),Nf(),xt.y-=(xt.y-se.cameraY)*En(Mr),me.animationMode&&lt&&lt.movePosts(0,0,me.cameraEaseSpeed)):Math.abs(xt.y-se.cameraY)>.007&&(xt.y-=(xt.y-se.cameraY)*En(me.cameraEaseSpeed))}function kv(){xt.zoom=6;let e=lt&&lt.postViews[0]&&lt.postViews[0].p2.y||me.planeDistance;xt.y=e+100,Kn.y=e+100,Zf(Kn.x,Vh(),Kn.z,1),gi=!1,vn(xt,1,{zoom:mc.zoom},{ease:"expoOut"}),setTimeout(()=>{gi=!0},1*1e3+50)}var vh=new I,bh=new I,fa=new I;function Hv(){vh.copy(Th(xt.x,xt.y,xt.z)),bh.copy(Th(Kn.x,Kn.y,Kn.z)),fa.subVectors(bh,vh),fa.lengthSq()<1e-6&&fa.set(0,0,-1),fa.normalize(),Zn.position.copy(vh).addScaledVector(fa,-mc.focus),Zn.lookAt(bh);let n=Math.min(1,Wn/900),e=2*Math.atan(Ln/2/(xt.zoom*mc.focus*n))/mi;Math.abs(Zn.fov-e)>1e-4&&(Zn.fov=e,Zn.updateProjectionMatrix())}function hp(){Wn=window.innerWidth,Ln=window.innerHeight,wa.setSize(Wn,Ln,!1),Zn.aspect=Wn/Ln,Zn.updateProjectionMatrix(),ep.forEach(n=>n.resolution.set(Wn,Ln))}var Gn=document.getElementById("menu"),Cr=document.getElementById("slogan"),up=document.getElementById("langs"),Cc=[];function Vv(){Gn.innerHTML="",Cc=Zt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=at(n.def.name),i.addEventListener("click",()=>{e!==se.currentSection&&gi&&Lc(e)}),t.appendChild(i),Gn.appendChild(t),i}),Gn.style.setProperty("--n",Zt.length),dp()}function dp(){Cc.forEach((n,e)=>n.setAttribute("aria-current",String(e===se.currentSection)))}function Gv(){Cc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),Gn.hidden=!1,up.hidden=!1,setTimeout(()=>Gn.classList.add("ready"),(Zt.length+1)*200)}var Wv=1.44;function Lh(n){let e=n==="project"?{width:522,x:79,colW:362}:{width:389,x:17,colW:353},t=(Wn-2*me.margin)/(ft.scale||1);if(t>=e.width)return e;let i=Math.max(240,Math.floor(t)),s=n==="project"?26:17;return{width:i,x:s,colW:i-2*s}}function fp(){let n=Cr.offsetTop+Cr.offsetHeight+2*me.margin,e=ft.height+12,t=(Gn.offsetHeight||90)+70,i=Math.max(.5,Math.min(Wv,(Ln-n-t)/e));ft.scale=i,an.style.top=n+"px",an.style.transform=i!==1?`scale(${i.toFixed(3)})`:"",an.style.width=i!==1?Math.ceil((Wn-me.margin)/i)+"px":"",an.style.height=Math.ceil(e)+"px",document.body.classList.toggle("post-cramped",Ln-(n+e*i)<Gn.offsetHeight+60)}function bc(){if(se.postOpen||document.body.classList.remove("post-cramped"),se.postOpen&&ft.open&&ft.height>100){let n=Cr.offsetTop+Cr.offsetHeight+ft.height*(ft.scale||1)+2*me.margin+30;n=Math.min(n,Ln-Gn.offsetHeight-40),Gn.style.left=me.margin+"px",Gn.style.top=n+"px"}else Gn.style.left=3*me.margin+"px",Gn.style.top=Math.round(Ln/1.4)+"px"}var Ih=n=>Ef(n,it.settings);function qh(){let n=it.settings;sp(),document.documentElement.lang=Bi,document.documentElement.classList.toggle("neg",Vn),document.title=n.name||"Hand Coded";let e=n.taglines&&(n.taglines[Bi]||n.taglines.en)||[],t=e.length?`<b class="wm">${dt(e[0])}</b>${e.slice(1).map(h=>`<span>${dt(h)}</span>`).join("")}`:dt(n.name);Cr.innerHTML=t,document.getElementById("home-slogan").innerHTML=t;let i=Vn?"#ffffff":n.accent||"#ffcc00",s=n.logo?Tn(n.logo):Ih(i);if(!n.logo&&document.fonts){let h=Di(n,"logo"),u=`${h.italic?"italic ":""}${h.weight||400} 76px ${h.css}`;document.fonts.check(u)||document.fonts.load(u).then(()=>{it.settings.logo||["logo","home-logo"].forEach(d=>{document.getElementById(d).src=Ih(Vn?"#ffffff":it.settings.accent||"#ffcc00")})}).catch(()=>{})}["logo","home-logo"].forEach(h=>{let u=document.getElementById(h);u.src=s,u.classList.toggle("raw",!n.logo)});let r=document.getElementById("logo"),a=n.negativeToggle!==!1;r.classList.toggle("toggle",a),a?(r.setAttribute("role","button"),r.tabIndex=0,r.setAttribute("aria-pressed",String(Vn)),r.alt=r.title=Mt(Vn?"toPos":"toNeg")):(r.removeAttribute("role"),r.removeAttribute("tabindex"),r.removeAttribute("aria-pressed"),r.alt="",r.removeAttribute("title"));let o=document.getElementById("bs");o.placeholder=at(n.home.placeholder),o.setAttribute("aria-label",Mt("bsLabel")),pp(),document.getElementById("bs-eg").textContent=at(n.home.example),document.getElementById("bs-sent").textContent&&(document.getElementById("bs-sent").textContent=Mt("sent"));let c=document.getElementById("offices");c.innerHTML="",(n.offices||[]).forEach(h=>{let u=document.createElement("section");u.innerHTML=`<h3>${dt(at(h.name))}</h3>${(h.lines||[]).map(d=>`<p>${dt(d)}</p>`).join("")}${h.mail?`<p><a href="mailto:${dt(h.mail)}">${dt(h.mail)}</a></p>`:""}`,c.appendChild(u)}),(n.social||[]).forEach(h=>{if(!h.url)return;let u=document.createElement("section");u.innerHTML=`<h3>${dt(h.label)}</h3><p><a href="${dt(h.url)}" target="_blank" rel="noopener">${dt(h.url.replace(/^https?:\/\/(www\.)?/,""))}</a></p>`,c.appendChild(u)}),wr.textContent=at(n.home.enter)||Mt("enter"),Zv(),Ma(),document.querySelectorAll("[data-i18n]").forEach(h=>{h.textContent=Mt(h.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Mt("keys")),Mc.setAttribute("aria-label",Mt("prev")),Sc.setAttribute("aria-label",Mt("next"));let l=n.langs&&n.langs.length?n.langs:is;[up,document.getElementById("home-langs")].forEach(h=>{h.innerHTML="",!(l.length<2)&&l.forEach(u=>{let d=document.createElement("button");d.type="button",d.textContent=u.toUpperCase(),d.setAttribute("aria-pressed",String(u===Bi)),d.setAttribute("aria-label",Mt("lang")+" "+u.toUpperCase()),d.addEventListener("click",()=>mp(u)),h.appendChild(d)})}),document.documentElement.style.setProperty("--accent",An()),document.documentElement.style.setProperty("--accent-raw",it.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",ip(it.settings.accent||"#ffcc00")),Dp()}function pp(){let n=document.getElementById("bs");if(!n||!n.offsetWidth)return;n.style.fontSize="";let e=getComputedStyle(n),t=parseFloat(e.fontSize),i=n.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)-6,s=document.createElement("canvas").getContext("2d");s.font=`${e.fontWeight} ${t}px ${e.fontFamily}`;let r=parseFloat(e.letterSpacing)||0,a=s.measureText(n.placeholder).width+r*n.placeholder.length;a>i&&(n.style.fontSize=Math.max(16,Math.floor(t*i/a))+"px")}window.addEventListener("resize",()=>{Ds||pp()});function mp(n){if(n!==Bi){Bi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(qh(),Ea){Cc.forEach((i,s)=>{i.textContent=at(Zt[s].def.name)}),jh();let e=se.postOpen,t=se.selected;zi(),se.selected=t,Gh(),e&&gc(.6,()=>Kh(t))}}}var Yh=document.getElementById("cats"),$h=document.getElementById("cat-box"),Df=document.getElementById("cat-list"),gp=document.getElementById("cat-name"),Nh=document.getElementById("cat-open"),Mc=document.getElementById("pg-prev"),Sc=document.getElementById("pg-next");function jh(){let n=se.data,e=n.categoryList;$h.hidden=e.length<=1,Df.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=at(t.label),s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Uf(),qv(t.id)}),i.appendChild(s),Df.appendChild(i)}),gp.textContent=n.currentCatName,_p(),Uf()}function _p(){let n=se.data;Mc.disabled=!n.hasNewer(),Sc.disabled=!n.hasOlder(),Mc.hidden=Sc.hidden=!n.hasNewer()&&!n.hasOlder()}function Uf(){$h.classList.remove("open"),Nh.setAttribute("aria-expanded","false")}Nh.addEventListener("click",()=>{let n=$h.classList.toggle("open");Nh.setAttribute("aria-expanded",String(n))});Mc.addEventListener("click",()=>{gi&&Sp("newer")});Sc.addEventListener("click",()=>{gi&&Sp("older")});var ls=document.getElementById("kb"),Zh=document.getElementById("kb-toggle"),yp=null;function Dh(){ls.classList.add("open"),Zh.setAttribute("aria-expanded","true")}function Uh(){ls.classList.remove("open"),Zh.setAttribute("aria-expanded","false")}Zh.addEventListener("click",()=>{clearTimeout(yp),ls.classList.contains("open")?Uh():Dh()});ls.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>Tp({code:n.dataset.k,preventDefault(){}})));function Ui(n){let e=ls.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function xp(){ls.querySelector(".key.anim").classList.toggle("off",!me.animationMode)}var Jh=document.getElementById("whiteboard"),an=document.getElementById("post2d"),pa=document.getElementById("strip");function Of(n,e){if(!n||it.settings.signImages===!1)return"";let t=[at(n.title).trim(),(n.author||it.settings.name||"").trim()].filter(Boolean);return e&&t.push(Mt("photo")+" "+e.trim()),t.join(" \xB7 ")}var Xv=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Rc=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Pc=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},vp=n=>Rc(n)?"youtube":Pc(n)?"vimeo":Xv(n)?"video":"image",ft={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,an.classList.remove("closing"),an.hidden=!1,fp(),this.geomKey=JSON.stringify(Lh("project")),this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit));else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:""),this.addText(n,"project"),t.slice(1).forEach(s=>this.addMedia(s.src,355,s.credit)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,pa.style.transform="translateX(0px)"},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Mt("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${dt(t)}</span><a href="${dt(e)}" target="_blank" rel="noopener"><span class="host">${dt(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,pa.appendChild(i),this.panels.push(i);let s=me.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addMedia(n,e=355,t="",i=!0){let s=vp(n);if(s==="youtube"||s==="vimeo"){this.addEmbed(n,s,e,t);return}let r=s==="video",a=this.addPanel("media",e,""),o=document.createElement(r?"video":"img");if(o.draggable=!1,o.style.height=e+"px",r){Object.assign(o,{src:Tn(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let l=document.createElement("button");l.type="button",l.className="play",l.setAttribute("aria-label",Mt("play")),l.addEventListener("click",()=>{o.controls=!0,o.play().catch(()=>{}),l.remove()}),a.querySelector(".in").appendChild(l)}else o.src=Tn(n),o.alt="";let c=()=>{let l=Math.round(r?o.videoWidth*e/o.videoHeight:o.naturalWidth*e/o.naturalHeight);l&&(a.style.width=l+"px",this.layout())};o.addEventListener(r?"loadedmetadata":"load",c),o.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(l=>l!==a),this.layout())}),a.querySelector(".in").prepend(o)},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?Rc(n):Pc(n),c=document.createElement("div");c.className="cover";let l=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:this.post&&this.post.thumb?Tn(this.post.thumb):"";if(l){let u=document.createElement("img");u.src=l,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),c.appendChild(u)}c.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",Mt("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${o}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",c.replaceWith(u)}),c.appendChild(h),a.appendChild(c)},addText(n,e){let{width:t,x:i,colW:s}=Lh(e),r=at(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let a=at(n.subtitle),o=se.section.def,c=n.tags.map(x=>o.tags.find(p=>p.id===x)).filter(Boolean).map(x=>at(x.label)),l=c.length?`${dt(Mt("postedIn"))} <span>${c.map(dt).join(", ")}</span>`:"",h=dt([n.date,at(n.place)].filter(Boolean).join(" | ")),u=uh(at(n.body)),d=document.createElement("div");d.className="txt",d.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(d),d.innerHTML=`<h2 class="ttl" style="position:static">${dt(r)}</h2>${a?`<p class="stl" style="position:static">${dt(a)}</p>`:""}`;let m=d.firstChild.offsetHeight,y=a?d.lastChild.offsetHeight+6:0;if(e==="project"){let x=34+m+6,p=34+m+y+20,f=Ff(u,s,[272-p,242],d);f.forEach((C,v)=>{let P=v===f.length-1;this.addPanel("txt",t,(v===0?`<h2 class="ttl" style="left:${i}px;top:34px;width:${s}px">${dt(r)}</h2>${a?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${dt(a)}</p>`:""}`:"")+`<div class="body" style="left:${i}px;top:${v===0?p:93}px;width:${s}px">${C}</div>`+(P?`<div class="fecha" style="left:${i}px;top:282px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:308px;width:${s}px">${l}</div>`:""))})}else{let x=13+m+4,p=13+m+y+10,f=p+20,C=f+18+20;Ff(u,s,[355-C-14,327],d).forEach((P,U)=>{this.addPanel("txt",t,(U===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${dt(r)}</h2>${a?`<p class="stl" style="left:${i}px;top:${x}px;width:${s}px">${dt(a)}</p>`:""}<div class="fecha" style="left:${i}px;top:${p}px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:${f}px;width:${s}px">${l}</div>`:"")+`<div class="body" style="left:${i}px;top:${U===0?C:14}px;width:${s}px">${P}</div>`)})}d.remove()},addTeam(n){let e=n.team.map(r=>it.posts.find(a=>a.id===r)).filter(Boolean),t=e.map(r=>at(r.title)).concat(n.credits?[n.credits]:[]).join(", "),i=this.addPanel("team",576,`<h2 class="ttl">${dt(Mt("who"))}</h2><div class="names">${dt(Mt("leftToRight"))} <span>${dt(t)}.</span></div>`),s=i.querySelector(".in");e.forEach((r,a)=>{let o=document.createElement("button");o.type="button",o.className="face",o.style.left=69+a%6*59+"px",o.style.top=160+Math.floor(a/6)*55+"px",o.innerHTML=(r.thumb?`<img src="${dt(Tn(r.thumb))}" alt="" draggable="false">`:`<span class="mono">${dt(rp(at(r.title)))}</span>`)+`<span class="tab">${dt(at(r.title))}.<small>${dt(at(r.subtitle))}</small></span>`,o.setAttribute("aria-label",at(r.title)),["pointerenter","focus"].forEach(c=>o.addEventListener(c,()=>o.classList.add("big"))),["pointerleave","blur"].forEach(c=>o.addEventListener(c,()=>o.classList.remove("big"))),s.appendChild(o)}),i.style.overflow="visible"},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Wn-2*me.margin)/(this.scale||1)))),`<div class="cn">${dt(at(n.title))}.</div><div class="ac">${dt(at(n.subtitle))}</div><div class="site">${n.link?`<a href="${dt(n.link)}" target="_blank" rel="noopener">${dt(e)}</a>`:""}</div><div class="ad">${uh(at(n.body))}</div><div class="ct">${dt(at(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0,this.placeBanda()},placeBanda(){this.banda&&(this.banda.style.left=(Wn-2*me.margin)/(this.scale||1)-this.banda.offsetWidth+"px")},close(){if(!this.open)return 0;this.open=!1;let n=me.animationMode?.8:0;return an.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){pa.querySelectorAll("video").forEach(n=>n.pause()),pa.innerHTML="",this.panels=[],this.banda&&(this.banda.remove(),this.banda=null),an.hidden=!0,an.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){this.open&&(this.dragging?(this.finalpos+=(wc-this.xprev)*1.5,this.x-=(this.x-this.finalpos)*En(me.easing),this.xprev=wc):Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*En(me.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end),pa.style.transform=`translateX(${Math.round(this.x)}px)`)}};function Ff(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){o=null,d.textContent.trim()&&a.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){o=null;return}d.nodeType===3&&!d.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(d.cloneNode(!0)))});let c=[],l=0,h=()=>t[Math.min(l,t.length-1)],u=()=>{c.push(s.innerHTML),s.innerHTML="",l++};for(let d of a){let m=d.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),d.nodeName==="UL"||d.nodeName==="OL"||d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}let y=[];(function f(C,v){C.childNodes.forEach(P=>{P.nodeType===3?P.textContent.split(/(\s+)/).forEach(U=>U&&y.push({w:U,path:v})):f(P,[...v,P])})})(d,[]);let x=document.createElement("p");s.appendChild(x);let p=({w:f,path:C})=>{let v=x;for(let P of C){let U=v.lastChild;(!U||U.nodeType!==1||U.dataset.src!==P.outerHTML)&&(U=P.cloneNode(!1),U.dataset.src=P.outerHTML,v.appendChild(U)),v=U}v.appendChild(document.createTextNode(f))};for(let f of y)if(p(f),s.offsetHeight>h()){let C=function v(P){return P.lastChild&&P.lastChild.nodeType===1?v(P.lastChild):P}(x);C.removeChild(C.lastChild),u(),x=document.createElement("p"),s.appendChild(x),f.w.trim()&&p(f)}}return(s.textContent.trim()||!c.length)&&c.push(s.innerHTML),c.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var wc=0,Ls=null;an.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(Ls={id:n.pointerId,x:n.clientX,y:n.clientY},wc=n.clientX)});an.addEventListener("pointermove",n=>{if(wc=n.clientX,!Ls||n.pointerId!==Ls.id||ft.dragging)return;let e=n.clientX-Ls.x,t=n.clientY-Ls.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){ft.dragging=!0,ft.xprev=Ls.x,ft.finalpos=ft.x;try{an.setPointerCapture(n.pointerId)}catch{}an.classList.add("grabbing")}});an.addEventListener("click",n=>{ft.justDragged&&(n.preventDefault(),n.stopPropagation(),ft.justDragged=!1)},!0);var bp=()=>{ft.dragging&&(ft.justDragged=!0,setTimeout(()=>{ft.justDragged=!1},0)),Ls=null,ft.dragging=!1,an.classList.remove("grabbing")};an.addEventListener("pointerup",bp);an.addEventListener("pointercancel",bp);Jh.addEventListener("pointerdown",()=>va());function Lc(n=-1,e=0){wv(),n===-1&&(n=se.currentSection||0),zi(),se.currentSection=n,se.resetData(),se.selected=e,Gh(),dp(),jh();try{history.replaceState(null,"","#"+se.section.def.id)}catch{}}function Mp(){zi(),se.selected=0,Gh(),_p()}function Sp(n){(n==="newer"?se.data.newer():se.data.older())&&Mp()}function qv(n){se.data.changeCategory(n),gp.textContent=se.data.currentCatName,Mp(),jh()}function Kh(n){zi(),se.selected=n,ma()}function ma(){!lt||!se.data.posts[se.selected]||(zi(),se.postOpen=!0,se.section.def.open==="strip"?(Jh.hidden=!1,ft.build(se.data.posts[se.selected],se.section.def.card),Yh.classList.add("hidden"),Ar=!1,In.classList.remove("dragging"),ei=!0,vc(se.selected)):(ei=!0,vc(se.selected),lt.openPost3D()),bc())}function va(){se.postOpen&&(se.postOpen=!1,ft.open?(ft.close(),Jh.hidden=!0,Yh.classList.remove("hidden")):lt&&lt.closePost3D(),bc())}function zi(){se.postOpen&&va()}function Yv(){$f(!me.animationMode),xp(),lt&&lt.resetPostPosition(),ei=!0}function wp(){me.cameraDistanceProportion<me.cameraZoomMax&&(me.cameraDistanceProportion=Math.trunc(me.cameraDistanceProportion*1.5),Xh())}function Ep(){me.cameraDistanceProportion>me.cameraZoomMin&&(me.cameraDistanceProportion=Math.trunc(me.cameraDistanceProportion/1.5),Xh())}var Bf=!1;function Tp(n){if(!gi)return;Bf||(Bf=!0,Dh(),yp=setTimeout(Uh,6e3));let e=se.postOpen&&ft.open,t=se.postOpen&&!ft.open;switch(n.code){case"ArrowLeft":Ui("ArrowLeft"),e?ft.action("LEFT"):(zi(),xh("PREVIOUS"),t&&ma());break;case"ArrowRight":Ui("ArrowRight"),e?ft.action("RIGHT"):(zi(),xh("NEXT"),t&&ma());break;case"ArrowUp":Ui("ArrowUp"),e||Dv();break;case"ArrowDown":Ui("ArrowDown"),e||Uv();break;case"Tab":Ui("Tab"),e?(va(),xh("NEXT"),ma()):Lc((se.currentSection+1)%Zt.length);break;case"KeyK":ls.classList.contains("open")?Uh():Dh();break;case"KeyA":Ui("KeyA"),Yv();break;case"Equal":case"NumpadAdd":Ui("Equal"),e||Ep();break;case"Minus":case"NumpadSubtract":Ui("Minus"),e||wp();break;case"Space":Ui("Space"),lt&&lt.checkPostSelected(),se.postOpen?va():ma();break;case"Escape":zi();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Ds||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||Tp(n)});var zf=new Wo,kf=new $e;function Ec(n,e){if(!Ea||!lt)return null;kf.set(n/Wn*2-1,-(e/Ln)*2+1),zf.setFromCamera(kf,Zn);let t=zf.intersectObjects([...Hi().blockers,...lt.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:$v(n,e)||(t?t.object.userData:null)}var ac=new I;function $v(n,e){if(!lt||!lt.net)return null;let t=null,i=14;for(let s of lt.net.hits){if(!s.visible)continue;s.getWorldPosition(ac).project(Zn);let r=(ac.x+1)/2*Wn-n,a=(1-ac.y)/2*Ln-e,o=Math.hypot(r,a);o<i&&ac.z<1&&(i=o,t=s.userData)}return t}var Is=null,hi=null,Oh=0,Fh=0;In.addEventListener("pointerdown",n=>{if(!gi||Is!==null||n.pointerType==="mouse"&&n.button!==0)return;os=Oh=n.clientX,cs=Fh=n.clientY;let e=Ec(n.clientX,n.clientY);zi(),hi=e&&e.post?e:null,hi&&hi.face==="back"&&(hi.post.view.focus(hi.post.id_),ei=!0),Is=n.pointerId,In.setPointerCapture(n.pointerId),In.classList.add("dragging"),dc=os,fc=cs,ei=!1,Ar=!0});function Ap(n){if(n.pointerId===Is){if(Is=null,In.classList.remove("dragging"),Ar&&(ei=!0,Ar=!1),hi&&hi.face==="front"&&Math.hypot(n.clientX-Oh,n.clientY-Fh)<6){let e=Ec(n.clientX,n.clientY);e&&e.post===hi.post&&Kh(e.post.id_)}else if(!hi&&Math.hypot(n.clientX-Oh,n.clientY-Fh)<6){let e=Ec(n.clientX,n.clientY);e&&e.netNode?op(e.netNode,n.clientX,n.clientY):Hh()}hi=null}}In.addEventListener("pointerup",Ap);In.addEventListener("pointercancel",Ap);var Mh=!1;In.addEventListener("pointermove",n=>{Is!==null&&n.pointerId!==Is||(os=n.clientX,cs=n.clientY,Is===null&&n.pointerType==="mouse"&&!Mh&&(Mh=!0,requestAnimationFrame(()=>{Mh=!1;let e=Ec(os,cs);In.classList.toggle("hover",!!(e&&e.post)),e&&e.netNode&&!se.postOpen?op(e.netNode,os,cs):Hh()})))});var Hf=0;In.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!gi||e-Hf<220||!n.deltaY||(Hf=e,n.deltaY<0?Ep():wp())},{passive:!1});window.addEventListener("resize",()=>{hp(),Xh(),bc(),ft.placeBanda(),Up(),ft.open&&(fp(),ft.placeBanda(),clearTimeout(ft.relayout),ft.relayout=setTimeout(()=>{ft.open&&ft.post&&JSON.stringify(Lh("project"))!==ft.geomKey&&(ft.build(ft.post,se.section.def.card),bc())},250))});function Cp(){if(it.settings.negativeToggle!==!1){if(Vn=!Vn,!Jt)try{localStorage.setItem("hc-neg",Vn?"1":"0")}catch{}qh(),lt&&lt.retexture()}}var Rp=document.getElementById("logo");Rp.addEventListener("click",Cp);Rp.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&(n.preventDefault(),Cp())});var _e=null,jv=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function Zv(){let n=(it.settings.showreel||"").trim();if(!_e){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),_e={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>Jv()),_e.x.addEventListener("click",oc),i.querySelector(".scrim").addEventListener("click",oc),_e.snd.addEventListener("click",()=>Pp(!_e.muted)),window.addEventListener("keydown",s=>{if(_e.open){if(s.code==="Escape")s.preventDefault(),oc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!_e.player||s.source!==_e.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==_e.muted&&(_e.muted=r.info.muted,ba())})}_e.btn.hidden=!n,_e.btn.setAttribute("aria-label","Showreel"),_e.x.setAttribute("aria-label",Mt("close")),n!==_e.src&&(_e.open&&oc(!0),_e.src=n,_e.kind=n?vp(n):"",_e.vid.innerHTML="",_e.player=null);let e=_e.kind==="youtube"?`https://www.youtube.com/watch?v=${Rc(n)}`:_e.kind==="vimeo"?`https://vimeo.com/${Pc(n)}`:"";_e.ext.hidden=!e,e&&(_e.ext.href=e,_e.ext.textContent=(_e.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),ba()}function ba(){_e&&(_e.snd.innerHTML=jv(!_e.muted)+`<span>${Mt(_e.muted?"soundOn":"soundOff")}</span>`,_e.snd.setAttribute("aria-pressed",String(!_e.muted)))}function Tc(n,e=[]){let t=_e.player;if(!(!t||!t.contentWindow)){if(_e.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(_e.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function Pp(n){_e.muted=n,ba(),_e.kind==="video"?_e.player&&(_e.player.muted=n,n||(_e.player.volume=1)):(Tc(n?"mute":"unMute"),n||Tc("setVolume",[100]))}function Jv(){if(!(!_e||!_e.src||_e.open)){if(_e.open=!0,_e.last=document.activeElement,_e.player)_e.kind==="video"?_e.player.play().catch(()=>{}):Tc("playVideo");else{let n=_e.src,e=_e.kind;if(e==="video"){let t=document.createElement("video");t.src=Tn(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==_e.muted&&(_e.muted=t.muted,ba())}),_e.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Rc(n):Pc(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),_e.muted||Pp(!1)}),_e.player=t}else{let t=document.createElement("img");t.src=Tn(n),t.alt="",_e.player=t}_e.muted=!0,ba(),_e.vid.appendChild(_e.player)}_e.snd.hidden=!/^(youtube|vimeo|video)$/.test(_e.kind),_e.box.hidden=!1,_e.btn.setAttribute("aria-expanded","true"),_e.box.offsetWidth,_e.box.classList.add("on"),setTimeout(()=>{_e.open&&_e.x.focus({preventScroll:!0})},60)}}function oc(n){!_e||!_e.open||(_e.open=!1,_e.btn.setAttribute("aria-expanded","false"),_e.kind==="video"?_e.player&&_e.player.pause():Tc("pauseVideo"),_e.box.classList.remove("on"),clearTimeout(_e.t),_e.t=setTimeout(()=>{_e.open||(_e.box.hidden=!0)},n===!0?0:650),_e.last&&_e.last.focus&&n!==!0&&_e.last.focus({preventScroll:!0}))}var k=null,ga=["white","grey","accent","source"];function Kv(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",controls:!0,random:!0},it.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((a,o)=>a+o,0);for(let a=0;a<i.length;a++)if((r-=s[a])<0)return i[a];return i[0]};Object.assign(n,{cell:2*Math.round(e(4,12)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(ga,[4,2,2,1]),mode:Math.random()<.75?"light":"dark"})}return n}function Qv(){if(k)return;let n=document.getElementById("home-band");if(!n)return;let e=Kv(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),k={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:ga.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,keys:{}},k.octx=k.off.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:Tn(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),k.video=a}else{let a=new Set;it.posts.filter(o=>o.published!==!1).forEach(o=>[o.thumb,...(o.media||[]).map(c=>c&&c.src)].forEach(c=>{c&&!/^(https?:|data:)/.test(c)&&/\.(jpe?g|png|webp)$/i.test(c)&&!a.has(c)&&a.size<10&&a.add(c)})),k.pics=[...a].sort(()=>Math.random()-.5).map(o=>{let c=new Image;return c.src=Tn(o),c})}e.controls!==!1&&eb(document.getElementById("home"));let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),Vf(),window.addEventListener("resize",Vf)}function Vf(){if(!k)return;let n=k.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);k.W=Math.max(1,Math.round(n.width)),k.H=Math.max(1,Math.round(n.height)),k.cv.width=k.W*e,k.cv.height=k.H*e,k.ctx.setTransform(e,0,0,e,0,0)}function eb(n){let e=document.createElement("div");e.id="hv",e.innerHTML=`<div id="hv-panel">
      <div class="lbl" data-k="grid"></div><div class="row"><button type="button" class="key" data-a="grid-" data-code="ArrowLeft">\u25C2</button><button type="button" class="key" data-a="grid+" data-code="ArrowRight">\u25B8</button></div>
      <div class="lbl" data-k="contrast"></div><div class="row"><button type="button" class="key" data-a="con-" data-code="ArrowDown">\u25BE</button><button type="button" class="key" data-a="con+" data-code="ArrowUp">\u25B4</button></div>
      <div class="lbl" data-k="color"></div><div class="row"><button type="button" class="key sw" data-a="color" data-code="KeyC"><i></i> C</button></div>
      <div class="lbl" data-k="invert"></div><button type="button" class="key" data-a="invert" data-code="KeyI" aria-pressed="false">I</button>
      <div class="lbl" data-k="sound"></div><button type="button" class="key" data-a="sound" data-code="KeyS" aria-pressed="false">S</button>
      <div class="lbl" data-k="cam"></div><button type="button" class="key" data-a="cam" data-code="KeyV" aria-pressed="false">V</button>
      <span class="hv-note" hidden></span>
    </div><button id="hv-toggle" type="button" aria-expanded="false"></button>`,n.appendChild(e),k.box=e,k.note=e.querySelector(".hv-note");let t=i=>{e.classList.toggle("open",i),e.querySelector("#hv-toggle").setAttribute("aria-expanded",String(i))};k.setOpen=t,e.querySelector("#hv-toggle").addEventListener("click",()=>t(!e.classList.contains("open"))),window.addEventListener("keydown",i=>{if(Ds||i.ctrlKey||i.metaKey||i.altKey||_e&&_e.open)return;let s=i.target&&i.target.id==="bs",r=s&&i.target.value.length>0;if(i.code==="Escape"&&s){i.target.blur();return}if(i.code==="KeyK"&&!s){i.preventDefault(),t(!e.classList.contains("open"));return}let a=e.querySelector(`[data-code="${i.code}"]`);a&&(/^Key/.test(i.code)&&s||/^Arrow/.test(i.code)&&r||(i.preventDefault(),k.touched||(k.touched=!0,t(!0)),a.click()))}),e.querySelector("#hv-panel").addEventListener("click",i=>{let s=i.target.closest("button[data-a]");if(!s)return;let r=s.dataset.a;s.classList.add("down"),setTimeout(()=>s.classList.remove("down"),200),r==="grid-"?k.cell=Math.max(6,k.cell-2):r==="grid+"?k.cell=Math.min(40,k.cell+2):r==="con-"?k.gamma=Math.max(.4,+(k.gamma-.2).toFixed(2)):r==="con+"?k.gamma=Math.min(3,+(k.gamma+.2).toFixed(2)):r==="color"?k.color=ga[(ga.indexOf(k.color)+1)%ga.length]:r==="invert"?k.mode=k.mode==="light"?"dark":"light":r==="sound"?(k.sound=!k.sound,k.video&&(k.video.muted=!k.sound,k.video.volume=1,k.video.play().catch(()=>{}))):r==="cam"&&(k.cam?Lp():tb()),Ma()}),Ma()}function Ma(){if(!k||!k.box)return;k.box.querySelectorAll(".lbl[data-k]").forEach(t=>{t.textContent=Mt("hv_"+t.dataset.k)}),k.box.querySelector("#hv-toggle").setAttribute("aria-label",Mt("hv_tab"));let n=k.box.querySelector(".sw i");n.className="c-"+k.color;let e=(t,i,s)=>{let r=k.box.querySelector(`[data-a="${t}"]`);r.setAttribute("aria-pressed",String(i)),r.classList.toggle("on",i),s&&r.setAttribute("aria-label",s)};e("invert",k.mode==="dark",Mt("hv_invert")),e("sound",k.sound,Mt("hv_sound")),e("cam",!!k.cam,Mt("hv_cam")),k.box.querySelector('[data-a="sound"]').disabled=!k.video||!!k.cam,k.box.querySelector('[data-a="color"]').setAttribute("aria-label",Mt("hv_color")),["grid-","grid+","con-","con+"].forEach(t=>k.box.querySelector(`[data-a="${t}"]`).setAttribute("aria-label",Mt(t.startsWith("grid")?"hv_grid":"hv_contrast")+(t.endsWith("+")?" +":" \u2212")))}async function tb(){k.note.hidden=!0;try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),k.cam={stream:n,video:e},k.lo=0,k.hi=1,k.video&&k.video.pause(),k.note.textContent=Mt("hv_camNote"),k.note.hidden=!1}catch{k.note.textContent=Mt("hv_camDenied"),k.note.hidden=!1}Ma()}function Lp(){k&&k.cam&&(k.cam.stream.getTracks().forEach(n=>n.stop()),k.cam=null,k.video&&k.video.play().catch(()=>{}),k.note.hidden=!0),k&&Ma()}function nb(){k&&(Lp(),k.video&&k.video.pause())}function Sh(n,e,t,i=1,s=0,r=0,a=!1){let o=k.octx,c=k.off.width,l=k.off.height,h=Math.max(c/e,l/t)*i,u=e*h,d=t*h;a&&(o.save(),o.translate(c,0),o.scale(-1,1)),o.drawImage(n,(c-u)/2+s*c,(l-d)/2+r*l,u,d),a&&o.restore()}function ib(n){let e=k.octx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,k.off.width,k.off.height),k.cam&&k.cam.video.readyState>=2)return Sh(k.cam.video,k.cam.video.videoWidth,k.cam.video.videoHeight,1,0,0,!0),!0;if(k.video)return k.video.readyState<2?!1:(Sh(k.video,k.video.videoWidth,k.video.videoHeight),!0);let t=k.pics.filter(l=>l.complete&&l.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,a=(Math.floor(s)%r+r)%r,o=s-Math.floor(s),c=(l,h,u)=>{e.globalAlpha=u,Sh(l,l.naturalWidth,l.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return c(t[a],o,1),o>.78&&r>1&&c(t[(a+1)%r],o-1,(o-.78)/.22),e.globalAlpha=1,!0}var sb=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function rb(n){if(k.pyr&&k.pyr.cell===n&&k.pyr.fill===k.fill)return k.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.max(Math.abs(a+.5-s),Math.abs(r+.5-s))/s,c=Math.max(0,Math.min(1,1-o/k.fill))*255,l=(r*n+a)*4;i.data[l]=i.data[l+1]=i.data[l+2]=c,i.data[l+3]=255}return t.putImageData(i,0,0),k.pyr={cell:n,fill:k.fill,pat:k.ctx.createPattern(e,"repeat")},k.pyr.pat}function ab(n,e){let t=k.ctx,i=k.W,s=k.H,r=k.cell,a=Math.round((i-n*r)/2),o=Math.round((s-e*r)/2);if(t.imageSmoothingEnabled=!1,!sb){t.globalAlpha=.45,t.drawImage(k.off,a,o,n*r,e*r),t.globalAlpha=1;return}k.tmp||(k.tmp=document.createElement("canvas"),k.tctx=k.tmp.getContext("2d"));let c=k.tmp,l=k.tctx;(c.width!==i||c.height!==s)&&(c.width=i,c.height=s),l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.filter="none",l.fillStyle="#000",l.fillRect(0,0,i,s),l.imageSmoothingEnabled=!1,l.filter=`grayscale(1)${k.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+k.gamma*.45).toFixed(2)})`,l.globalAlpha=.5,l.drawImage(k.off,a,o,n*r,e*r),l.filter="none",l.globalCompositeOperation="lighter",l.save(),l.translate(a,o),l.fillStyle=rb(r),l.fillRect(-a,-o,i,s),l.restore(),l.globalCompositeOperation="source-over",l.globalAlpha=1,t.save(),t.filter="contrast(4000%)",t.drawImage(c,0,0,i,s),t.restore(),k.color!=="white"&&(t.save(),t.globalCompositeOperation="multiply",k.color==="source"?t.drawImage(k.off,a,o,n*r,e*r):(t.fillStyle=k.color==="grey"?"#8d8d8d":it.settings.accent||"#ffcc00",t.fillRect(0,0,i,s)),t.restore())}function ob(n){if(!k||n-k.last<1e3/30||!k.W)return;k.last=n;let t=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches?0:(n-k.t0)/1e3,i=k.ctx,s=k.W,r=k.H,a=k.cell,o=Math.ceil(s/a),c=Math.ceil(r/a);if(i.fillStyle="#0b0b0b",i.fillRect(0,0,s,r),(k.off.width!==o||k.off.height!==c)&&(k.off.width=o,k.off.height=c),!ib(t))return;let l;if(!k.tainted)try{l=k.octx.getImageData(0,0,o,c).data}catch{k.tainted=!0}if(k.tainted){ab(o,c);return}let h=1,u=0;for(let x=0;x<l.length;x+=16){let p=(.2126*l[x]+.7152*l[x+1]+.0722*l[x+2])/255;p<h&&(h=p),p>u&&(u=p)}k.lo+=(h-k.lo)*.15,k.hi+=(Math.max(u,k.lo+.15)-k.hi)*.15;let d=(s-o*a)/2,m=(r-c*a)/2,y=k.color==="source";y||(i.fillStyle=k.color==="grey"?"#8d8d8d":k.color==="accent"?it.settings.accent||"#ffcc00":"#f2f2f2");for(let x=0;x<c;x++)for(let p=0;p<o;p++){let f=(x*o+p)*4,C=l[f],v=l[f+1],P=l[f+2],U=Math.min(1,Math.max(0,((.2126*C+.7152*v+.0722*P)/255-k.lo)/(k.hi-k.lo)));k.mode==="dark"&&(U=1-U);let L=Math.pow(U,k.gamma)*a*k.fill;L<.6||(y&&(i.fillStyle=`rgb(${C},${v},${P})`),i.fillRect(d+p*a+(a-L)/2,m+x*a+(a-L)/2,L,L))}}var Bh=document.getElementById("home"),wr=document.getElementById("enter"),Sa=document.getElementById("ticker"),cc=Sa.getContext("2d"),_a=null,pc=0,ya=1,Ip="hc-bullshit-slogans",xa=[];try{let n=JSON.parse(localStorage.getItem(Ip)||"[]");Array.isArray(n)&&(xa=n.filter(e=>typeof e=="string").slice(0,8))}catch{}function Np(){let n=document.getElementById("bs"),e=n.value.replace(/\s+/g," ").trim().slice(0,70);if(!e)return!1;xa=[e.toUpperCase(),...xa.filter(t=>t!==e.toUpperCase())].slice(0,8);try{localStorage.setItem(Ip,JSON.stringify(xa))}catch{}return Dp(),pc=0,n.value="",document.getElementById("bs-sent").textContent=Mt("sent"),cb(e),!0}function cb(n){let e=(it.settings.sloganInbox||"").trim();if(!e||Jt||!/^https:\/\//.test(e))return;let t=JSON.stringify({slogan:n,lang:Bi,tag:zp("")||"",site:location.host||"local"});try{fetch(e,{method:"POST",mode:"no-cors",keepalive:!0,headers:{"Content-Type":"text/plain;charset=utf-8"},body:t}).catch(()=>{})}catch{}}document.getElementById("bs-form").addEventListener("submit",n=>{n.preventDefault(),Np(),document.getElementById("bs").blur(),wr.click()});var Gf={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},lb=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=Gf[e]||Gf["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function Dp(){let n=[...xa,...it.settings.home.ticker||[]].filter(Boolean),e=(n.length?n:[it.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ",t=[];for(let i of e){let s=lb(i),r=i===" "?3:5;for(let a=0;a<r;a++){let o=0;for(let c=0;c<7;c++)s[c]&1<<4-a&&(o|=1<<c);t.push(o)}t.push(0)}_a={w:t.length,cols:t}}var ui={pitch:3.2,rows:7,h:30},Sr=null,Wf="";function Xf(n,e){let t=ya,i=Math.ceil(ui.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,ui.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-ui.pitch*.1*t,a-ui.pitch*.1*t,ui.pitch*.12*t,0,Math.PI*2),r.fill()),s}function Up(){ya=Math.min(window.devicePixelRatio||1,2),Sa.width=Math.round(window.innerWidth*ya),Sa.height=Math.round(ui.h*ya),Sr=null}var lc=0;function hb(n){let e=An();(!Sr||Wf!==e)&&(Wf=e,Sr={on:Xf(e,!0),off:Xf(e,!1)}),lc+=n*26,lc>=1&&(pc=(pc+Math.floor(lc))%_a.w,lc%=1);let t=ya,i=ui.pitch,s=Math.ceil(window.innerWidth/i)+1,r=(ui.h-ui.rows*i)/2;cc.setTransform(1,0,0,1,0,0),cc.fillStyle="#000",cc.fillRect(0,0,Sa.width,Sa.height);let a=Sr.on.width/2;for(let o=0;o<s;o++){let c=_a.cols[(pc+o)%_a.w],l=(o*i+i/2)*t-a;for(let h=0;h<ui.rows;h++)cc.drawImage(c>>h&1?Sr.on:Sr.off,l,(r+h*i+i/2)*t-a)}}var Ds=!1,Op=!1,Fp=!1;function Bp(){Ds||(Ds=!0,Bh.classList.add("out"),setTimeout(()=>{Bh.hidden=!0,nb()},1100),db(),kv(),Cr.classList.add("on"),setTimeout(Gv,1500),ls.hidden=!1,Yh.classList.remove("hidden"),In.focus({preventScroll:!0}))}wr.addEventListener("click",()=>{Np(),Fp=!0,Op?Bp():(wr.textContent=Mt("loading"),wr.classList.add("wait"))});var zh=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function zp(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Jt&&Jt.tag&&(e=Jt.tag),zh(e||n)}function ub(n,e){let t=n.tags||[],i=t.find(s=>zh(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>zh(r)===e));return i?i.id:""}function db(){Wh();let n=Jt&&Jt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Zt.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Zt.findIndex(a=>a.def.id===it.settings.startSection)));let s=zp(t||(e&&i<0?e:""));if(s){let a=Zt.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Zt.keys()];for(let o of a){let c=ub(Zt[o].def,s);if(c){i=o,Zt[o].def.defaultTag=c;break}}}se.currentSection=i,se.resetData();let r=Hi();se.cameraY=lp(),xt.x=ki()*Math.sin(se.degreeCamera)+r.p.x,xt.y=se.cameraY,xt.z=ki()*Math.cos(se.degreeCamera)+r.p.z,Kn.x=r.p.x,Kn.y=Vh(),Kn.z=r.p.z,Ea=!0,Lc(i,0)}var qf=performance.now();function kp(n){let e=Math.min(.25,Math.max(0,(n-qf)/1e3));qf=n,Oi+=e,yc=e*vv,!Ds&&_a&&hb(e),k&&!Bh.hidden&&ob(n),Ea&&(Sv(),zv(),lt&&lt.update(),ft.step(),Hv(),wa.render(Ns,Zn)),requestAnimationFrame(kp)}function wh(n){console.error(n);let e=document.getElementById("load-error");e.textContent=Mt("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function fb(){Jt||!/[?&]preview\b/.test(location.search)||window.parent===window||(Jt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,a])=>{try{s.files[r]=URL.createObjectURL(a)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:Yf},"*")}catch{}}))}(async function(){try{await fb(),Jt?it=Cs(structuredClone(Jt.content)):(it=await hc.load(),hc.prepare&&await hc.prepare(it))}catch(r){wh(r);return}if(Vn=!!it.settings.negative,sp(),!Jt&&it.settings.negativeToggle!==!1)try{let r=localStorage.getItem("hc-neg");(r==="1"||r==="0")&&(Vn=r==="1")}catch{}let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=it.settings.langs&&it.settings.langs.length?it.settings.langs:is,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(r=>String(r).toLowerCase().slice(0,2)).find(r=>t.includes(r));if(Bi=t.includes(e)?e:i||it.settings.defaultLang||t[0],Zt=it.sections.filter(r=>r.visible).map(r=>({def:r})),!Zt.length){wh(new Error("aucune section visible"));return}window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&$f(!1),xp(),qh(),Vv(),Qv(),hp(),Wh(),Up(),requestAnimationFrame(kp),Ps=Zt.map((r,a)=>new Ch(r.def,a)),Zt.forEach((r,a)=>{r.object=Ps[a]}),Zt.forEach(r=>{r.container=r.object.container,r.p=r.object.p});let s=new Jo(tp);try{(await Promise.allSettled(Ps.map(a=>a.load(s)))).forEach((a,o)=>{a.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+Ps[o].def.id+" \xBB :",a.reason)}),Ps.forEach((a,o)=>a.place(o)),await Promise.race([Rr(),new Promise(a=>setTimeout(a,3e3))]),Op=!0,(Fp||location.hash.length>1||Jt&&Jt.start)&&Bp()}catch(r){wh(r)}})();window.__hc={P:se,STYLE:me,cam:xt,camera:Zn,get input(){return gi},get homeGone(){return Ds},get content(){return it},get postsView(){return lt},getToSectionView:Lc,openThatPost:Kh,closePost:va,setLang:mp,enter:()=>wr.click()};})();
