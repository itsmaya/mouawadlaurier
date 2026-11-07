/* Généré depuis assets/hc/admin.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Ll="160";var Qh=0,oc=1,ed=2;var qu=1,td=2,si=3,Vn=0,pn=1,_n=2;var wi=0,Ls=1,lc=2,cc=3,uc=4,nd=5,qi=100,id=101,sd=102,hc=103,dc=104,rd=200,ad=201,od=202,ld=203,Ko=204,Qo=205,cd=206,ud=207,hd=208,dd=209,fd=210,pd=211,md=212,gd=213,vd=214,_d=0,yd=1,xd=2,pa=3,bd=4,Md=5,Sd=6,wd=7,Xa=0,Ed=1,Td=2,Ei=0,Ad=1,Cd=2,Rd=3,Ld=4,Pd=5,Id=6,fc="attached",Nd="detached",Xu=300,Ns=301,Ds=302,el=303,tl=304,$a=306,Ai=1e3,sn=1001,nl=1002,Zt=1003,pc=1004;var _o=1005;var cn=1006,Dd=1007;var Ci=1008;var Ti=1009,Ud=1010,Od=1011,Pl=1012,$u=1013,Si=1014,ai=1015,mr=1016,ju=1017,Yu=1018,$i=1020,kd=1021,wn=1023,Fd=1024,Bd=1025,ji=1026,Us=1027,zd=1028,Ju=1029,Hd=1030,Zu=1031,Ku=1033,yo=33776,xo=33777,bo=33778,Mo=33779,mc=35840,gc=35841,vc=35842,_c=35843,Qu=36196,yc=37492,xc=37496,bc=37808,Mc=37809,Sc=37810,wc=37811,Ec=37812,Tc=37813,Ac=37814,Cc=37815,Rc=37816,Lc=37817,Pc=37818,Ic=37819,Nc=37820,Dc=37821,So=36492,Uc=36494,Oc=36495,Vd=36283,kc=36284,Fc=36285,Bc=36286;var ma=2300,ga=2301,wo=2302,zc=2400,Hc=2401,Vc=2402,Gd=2500;var eh=3e3,Yi=3001,Wd=3200,qd=3201,Il=0,Xd=1,En="",kt="srgb",li="srgb-linear",Nl="display-p3",ja="display-p3-linear",va="linear",Pt="srgb",_a="rec709",ya="p3";var us=7680;var Gc=519,$d=512,jd=513,Yd=514,th=515,Jd=516,Zd=517,Kd=518,Qd=519,Wc=35044;var qc="300 es",il=1035,oi=2e3,xa=2001,Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,hr=Math.PI/180,Os=180/Math.PI;function Di(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function ef(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tf(n,e,t){return n!==e?(t-n)/(e-n):0}function dr(n,e,t){return(1-t)*n+t*e}function nf(n,e,t,i){return dr(n,e,1-Math.exp(-t*i))}function sf(n,e=1){return e-Math.abs(Dl(n,e*2)-e)}function rf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function af(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function of(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lf(n,e){return n+Math.random()*(e-n)}function cf(n){return n*(.5-Math.random())}function uf(n){n!==void 0&&(Xc=n);let e=Xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hf(n){return n*hr}function df(n){return n*Os}function sl(n){return(n&n-1)===0&&n!==0}function ff(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ba(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pf(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Gs={DEG2RAD:hr,RAD2DEG:Os,generateUUID:Di,clamp:un,euclideanModulo:Dl,mapLinear:ef,inverseLerp:tf,lerp:dr,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:af,randInt:of,randFloat:lf,randFloatSpread:cf,seededRandom:uf,degToRad:hf,radToDeg:df,isPowerOfTwo:sl,ceilPowerOfTwo:ff,floorPowerOfTwo:ba,setQuaternionFromProperEuler:pf,normalize:on,denormalize:Ts},ft=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],_=i[8],b=s[0],g=s[3],p=s[6],R=s[1],v=s[4],E=s[7],U=s[2],D=s[5],O=s[8];return r[0]=o*b+a*R+l*U,r[3]=o*g+a*v+l*D,r[6]=o*p+a*E+l*O,r[1]=c*b+u*R+h*U,r[4]=c*g+u*v+h*D,r[7]=c*p+u*E+h*O,r[2]=d*b+m*R+_*U,r[5]=d*g+m*v+_*D,r[8]=d*p+m*E+_*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,_=t*h+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=h*b,e[1]=(s*c-u*i)*b,e[2]=(a*i-s*o)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=m*b,e[7]=(i*l-c*t)*b,e[8]=(o*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new ut;function nh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){let n=gr("canvas");return n.style.display="block",n}var $c={};function fr(n){n in $c||($c[n]=!0,console.warn(n))}var jc=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yc=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[li]:{transfer:va,primaries:_a,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:Pt,primaries:_a,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ja]:{transfer:va,primaries:ya,toReference:n=>n.applyMatrix3(Yc),fromReference:n=>n.applyMatrix3(jc)},[Nl]:{transfer:Pt,primaries:ya,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yc),fromReference:n=>n.applyMatrix3(jc).convertLinearToSRGB()}},gf=new Set([li,ja]),St={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!gf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Gr[e].toReference,s=Gr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Gr[n].primaries},getTransfer:function(n){return n===En?va:Gr[n].transfer}};function Ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function To(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hs,Ma=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=gr("canvas")),hs.width=e.width,hs.height=e.height;let i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ps(t[i]/255)*255):t[i]=Ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vf=0,Sa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ao(s[o].image)):r.push(Ao(s[o]))}else r=Ao(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ma.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,yn=class n extends Ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=sn,s=sn,r=cn,o=Ci,a=wn,l=Ti,c=n.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Di(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yi?kt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Yi:eh}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yi?kt:En}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Xu;yn.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,E=(m+1)/2,U=(p+1)/2,D=(u+d)/4,O=(h+b)/4,$=(_+g)/4;return v>E&&v>U?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=D/i,r=O/i):E>U?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=$/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=O/r,s=$/r),this.set(i,s,r,t),this}let R=Math.sqrt((g-_)*(g-_)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(g-_)/R,this.y=(h-b)/R,this.z=(d-u)/R,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends Ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yi?kt:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Sa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends rl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wa=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var al=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],m=r[o+1],_=r[o+2],b=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=b;return}if(h!==b||l!==d||c!==m||u!==_){let g=1-a,p=l*d+c*m+u*_+h*b,R=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let U=Math.sqrt(v),D=Math.atan2(U,p*R);g=Math.sin(g*D)/U,a=Math.sin(a*D)/U}let E=a*R;if(l=l*g+d*E,c=c*g+m*E,u=u*g+_*E,h=h*g+b*E,g===1-a){let U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-a*m,e[t+2]=c*_+u*m+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new G,Jc=new Gn,mn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),qr.subVectors(this.max,ar),ds.subVectors(e.a,ar),fs.subVectors(e.b,ar),ps.subVectors(e.c,ar),_i.subVectors(fs,ds),yi.subVectors(ps,fs),zi.subVectors(ds,ps);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-zi.y,zi.x,0];return!Ro(t,ds,fs,ps,qr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,ds,fs,ps,qr))?!1:(Xr.crossVectors(_i,yi),t=[Xr.x,Xr.y,Xr.z],Ro(t,ds,fs,ps,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new G,new G,new G,new G,new G,new G,new G,new G],In=new G,Wr=new mn,ds=new G,fs=new G,ps=new G,_i=new G,yi=new G,zi=new G,ar=new G,qr=new G,Xr=new G,Hi=new G;function Ro(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var yf=new mn,or=new G,Lo=new G,Li=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):yf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Lo)),this.expandByPoint(or.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new G,Po=new G,$r=new G,xi=new G,Io=new G,jr=new G,No=new G,vr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Po.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Po);let r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=xi.dot(this.direction),l=-xi.dot($r),c=xi.lengthSq(),u=Math.abs(1-o*o),h,d,m,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){let b=1/u;h*=b,d*=b,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Po).addScaledVector($r,d),m}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){Io.subVectors(t,e),jr.subVectors(i,e),No.crossVectors(Io,jr);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);let l=a*this.direction.dot(jr.crossVectors(xi,jr));if(l<0)return null;let c=a*this.direction.dot(Io.cross(xi));if(c<0||l+c>o)return null;let u=-a*xi.dot(No);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,d,m,_,b,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,b,g)}set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,m=o*h,_=a*u,b=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-b*c,t[9]=-a*l,t[2]=b-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,_=c*u,b=c*h;t[0]=d+b*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=b+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,_=c*u,b=c*h;t[0]=d-b*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=b-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*h,_=a*u,b=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,_=a*l,b=a*c;t[0]=l*u,t[4]=b-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-b*h}else if(e.order==="XZY"){let d=o*l,m=o*c,_=a*l,b=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,bf)}lookAt(e,t,i){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),bi.crossVectors(i,gn),bi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),bi.crossVectors(i,gn)),bi.normalize(),Yr.crossVectors(gn,bi),s[0]=bi.x,s[4]=Yr.x,s[8]=gn.x,s[1]=bi.y,s[5]=Yr.y,s[9]=gn.y,s[2]=bi.z,s[6]=Yr.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],_=i[2],b=i[6],g=i[10],p=i[14],R=i[3],v=i[7],E=i[11],U=i[15],D=s[0],O=s[4],$=s[8],C=s[12],N=s[1],Q=s[5],le=s[9],oe=s[13],B=s[2],Z=s[6],V=s[10],k=s[14],q=s[3],W=s[7],se=s[11],re=s[15];return r[0]=o*D+a*N+l*B+c*q,r[4]=o*O+a*Q+l*Z+c*W,r[8]=o*$+a*le+l*V+c*se,r[12]=o*C+a*oe+l*k+c*re,r[1]=u*D+h*N+d*B+m*q,r[5]=u*O+h*Q+d*Z+m*W,r[9]=u*$+h*le+d*V+m*se,r[13]=u*C+h*oe+d*k+m*re,r[2]=_*D+b*N+g*B+p*q,r[6]=_*O+b*Q+g*Z+p*W,r[10]=_*$+b*le+g*V+p*se,r[14]=_*C+b*oe+g*k+p*re,r[3]=R*D+v*N+E*B+U*q,r[7]=R*O+v*Q+E*Z+U*W,r[11]=R*$+v*le+E*V+U*se,r[15]=R*C+v*oe+E*k+U*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],b=e[7],g=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+b*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+g*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],b=e[13],g=e[14],p=e[15],R=h*g*c-b*d*c+b*l*m-a*g*m-h*l*p+a*d*p,v=_*d*c-u*g*c-_*l*m+o*g*m+u*l*p-o*d*p,E=u*b*c-_*h*c+_*a*m-o*b*m-u*a*p+o*h*p,U=_*h*l-u*b*l-_*a*d+o*b*d+u*a*g-o*h*g,D=t*R+i*v+s*E+r*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=R*O,e[1]=(b*d*r-h*g*r-b*s*m+i*g*m+h*s*p-i*d*p)*O,e[2]=(a*g*r-b*l*r+b*s*c-i*g*c-a*s*p+i*l*p)*O,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*O,e[4]=v*O,e[5]=(u*g*r-_*d*r+_*s*m-t*g*m-u*s*p+t*d*p)*O,e[6]=(_*l*r-o*g*r-_*s*c+t*g*c+o*s*p-t*l*p)*O,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*O,e[8]=E*O,e[9]=(_*h*r-u*b*r-_*i*m+t*b*m+u*i*p-t*h*p)*O,e[10]=(o*b*r-_*a*r+_*i*c-t*b*c-o*i*p+t*a*p)*O,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*O,e[12]=U*O,e[13]=(u*b*s-_*h*s+_*i*d-t*b*d-u*i*g+t*h*g)*O,e[14]=(_*a*s-o*b*s-_*i*l+t*b*l+o*i*g-t*a*g)*O,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,_=r*h,b=o*u,g=o*h,p=a*h,R=l*c,v=l*u,E=l*h,U=i.x,D=i.y,O=i.z;return s[0]=(1-(b+p))*U,s[1]=(m+E)*U,s[2]=(_-v)*U,s[3]=0,s[4]=(m-E)*D,s[5]=(1-(d+p))*D,s[6]=(g+R)*D,s[7]=0,s[8]=(_+v)*O,s[9]=(g-R)*O,s[10]=(1-(d+b))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),m,_;if(a===oi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===xa)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,m=(i+s)*u,_,b;if(a===oi)_=(o+r)*h,b=-2*h;else if(a===xa)_=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=b,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ms=new G,Nn=new lt,xf=new G(0,0,0),bf=new G(1,1,1),bi=new G,Yr=new G,gn=new G,Zc=new lt,Kc=new Gn,Ea=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ea.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mf=0,Qc=new G,gs=new Gn,ei=new lt,Jr=new G,lr=new G,Sf=new G,wf=new Gn,eu=new G(1,0,0),tu=new G(0,1,0),nu=new G(0,0,1),Ef={type:"added"},Tf={type:"removed"},Vt=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new G,t=new Ea,i=new Gn,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ut}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(lr,Jr,this.up):ei.lookAt(Jr,lr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ei),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new G(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new G,ti=new G,Do=new G,ni=new G,vs=new G,_s=new G,iu=new G,Uo=new G,Oo=new G,ko=new G,Zr=!1,As=class n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),ti.subVectors(i,t),Do.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(ti),l=Dn.dot(Do),c=ti.dot(ti),u=ti.dot(Do),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,i,s,r,o,a,l){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),ti.subVectors(e,t),Dn.cross(ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,i),_s.subVectors(r,i),Uo.subVectors(e,i);let l=vs.dot(Uo),c=_s.dot(Uo);if(l<=0&&c<=0)return t.copy(i);Oo.subVectors(e,s);let u=vs.dot(Oo),h=_s.dot(Oo);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(vs,o);ko.subVectors(e,r);let m=vs.dot(ko),_=_s.dot(ko);if(_>=0&&m<=_)return t.copy(r);let b=m*c-l*_;if(b<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(_s,a);let g=u*_-m*h;if(g<=0&&h-u>=0&&m-_>=0)return iu.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(iu,a);let p=1/(g+b+d);return o=b*p,a=d*p,t.copy(i).addScaledVector(vs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var st=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=Dl(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Fo(o,r,e+1/3),this.g=Fo(o,r,e),this.b=Fo(o,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let i=ih[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return St.fromWorkingColorSpace(nn.copy(this),e),Math.round(un(nn.r*255,0,255))*65536+Math.round(un(nn.g*255,0,255))*256+Math.round(un(nn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(nn.copy(this),t);let i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=kt){St.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,i=nn.g,s=nn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Kr);let i=dr(Mi.h,Kr.h,t),s=dr(Mi.s,Kr.s,t),r=dr(Mi.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new st;st.NAMES=ih;var Af=0,ui=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Ls,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Qo,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Qo&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new G,Qr=new ft,Tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}};var Aa=class extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ca=class extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ht=class extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Cf=0,Sn=new lt,Bo=new Vt,ys=new G,vn=new mn,cr=new mn,jt=new G,An=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?Ca:Aa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(vn.min,cr.min),vn.expandByPoint(jt),jt.addVectors(vn.max,cr.max),vn.expandByPoint(jt)):(vn.expandByPoint(cr.min),vn.expandByPoint(cr.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),jt.add(ys)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new G,u[N]=new G;let h=new G,d=new G,m=new G,_=new ft,b=new ft,g=new ft,p=new G,R=new G;function v(N,Q,le){h.fromArray(s,N*3),d.fromArray(s,Q*3),m.fromArray(s,le*3),_.fromArray(o,N*2),b.fromArray(o,Q*2),g.fromArray(o,le*2),d.sub(h),m.sub(h),b.sub(_),g.sub(_);let oe=1/(b.x*g.y-g.x*b.y);isFinite(oe)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(m,-b.y).multiplyScalar(oe),R.copy(m).multiplyScalar(b.x).addScaledVector(d,-g.x).multiplyScalar(oe),c[N].add(p),c[Q].add(p),c[le].add(p),u[N].add(R),u[Q].add(R),u[le].add(R))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let N=0,Q=E.length;N<Q;++N){let le=E[N],oe=le.start,B=le.count;for(let Z=oe,V=oe+B;Z<V;Z+=3)v(i[Z+0],i[Z+1],i[Z+2])}let U=new G,D=new G,O=new G,$=new G;function C(N){O.fromArray(r,N*3),$.copy(O);let Q=c[N];U.copy(Q),U.sub(O.multiplyScalar(O.dot(Q))).normalize(),D.crossVectors($,Q);let oe=D.dot(u[N])<0?-1:1;l[N*4]=U.x,l[N*4+1]=U.y,l[N*4+2]=U.z,l[N*4+3]=oe}for(let N=0,Q=E.length;N<Q;++N){let le=E[N],oe=le.start,B=le.count;for(let Z=oe,V=oe+B;Z<V;Z+=3)C(i[Z+0]),C(i[Z+1]),C(i[Z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){let _=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,_=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*u;for(let p=0;p<u;p++)d[_++]=c[m++]}return new Tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=new lt,Vi=new vr,ea=new Li,ru=new G,xs=new G,bs=new G,Ms=new G,zo=new G,ta=new G,na=new ft,ia=new ft,sa=new ft,au=new G,ou=new G,lu=new G,ra=new G,aa=new G,hn=class extends Vt{constructor(e=new An,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(zo.fromBufferAttribute(h,e),o?ta.addScaledVector(zo,u):ta.addScaledVector(zo.sub(t),u))}t.add(ta)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(ea.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(ea,ru)===null||Vi.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(su),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=d.length;_<b;_++){let g=d[_],p=o[g.materialIndex],R=Math.max(g.start,m.start),v=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let E=R,U=v;E<U;E+=3){let D=a.getX(E),O=a.getX(E+1),$=a.getX(E+2);s=oa(this,p,e,i,c,u,h,D,O,$),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let g=_,p=b;g<p;g+=3){let R=a.getX(g),v=a.getX(g+1),E=a.getX(g+2);s=oa(this,o,e,i,c,u,h,R,v,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=d.length;_<b;_++){let g=d[_],p=o[g.materialIndex],R=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=R,U=v;E<U;E+=3){let D=E,O=E+1,$=E+2;s=oa(this,p,e,i,c,u,h,D,O,$),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=_,p=b;g<p;g+=3){let R=g,v=g+1,E=g+2;s=oa(this,o,e,i,c,u,h,R,v,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Rf(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vn,a),l===null)return null;aa.copy(a),aa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:n}}function oa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xs),n.getVertexPosition(l,bs),n.getVertexPosition(c,Ms);let u=Rf(n,e,t,i,xs,bs,Ms,ra);if(u){s&&(na.fromBufferAttribute(s,a),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),u.uv=As.getInterpolation(ra,xs,bs,Ms,na,ia,sa,new ft)),r&&(na.fromBufferAttribute(r,a),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),u.uv1=As.getInterpolation(ra,xs,bs,Ms,na,ia,sa,new ft),u.uv2=u.uv1),o&&(au.fromBufferAttribute(o,a),ou.fromBufferAttribute(o,l),lu.fromBufferAttribute(o,c),u.normal=As.getInterpolation(ra,xs,bs,Ms,au,ou,lu,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new G,materialIndex:0};As.getNormal(xs,bs,Ms,h.normal),u.face=h}return u}var _r=class n extends An{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function _(b,g,p,R,v,E,U,D,O,$,C){let N=E/O,Q=U/$,le=E/2,oe=U/2,B=D/2,Z=O+1,V=$+1,k=0,q=0,W=new G;for(let se=0;se<V;se++){let re=se*Q-oe;for(let he=0;he<Z;he++){let P=he*N-le;W[b]=P*R,W[g]=re*v,W[p]=B,c.push(W.x,W.y,W.z),W[b]=0,W[g]=0,W[p]=D>0?1:-1,u.push(W.x,W.y,W.z),h.push(he/O),h.push(1-se/$),k+=1}}for(let se=0;se<$;se++)for(let re=0;re<O;re++){let he=d+re+Z*se,P=d+re+Z*(se+1),F=d+(re+1)+Z*(se+1),H=d+(re+1)+Z*se;l.push(he,P,H),l.push(P,F,H),q+=6}a.addGroup(m,q,C),m+=q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){let e={};for(let t=0;t<n.length;t++){let i=ks(n[t]);for(let s in i)e[s]=i[s]}return e}function Lf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sh(n){return n.getRenderTarget()===null?n.outputColorSpace:St.workingColorSpace}var Pf={clone:ks,merge:ln},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ra=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zt=class extends Ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ss=-90,ws=1,ol=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Ss,ws,e,t);s.layers=this.layers,this.add(s);let r=new zt(Ss,ws,e,t);r.layers=this.layers,this.add(r);let o=new zt(Ss,ws,e,t);o.layers=this.layers,this.add(o);let a=new zt(Ss,ws,e,t);a.layers=this.layers,this.add(a);let l=new zt(Ss,ws,e,t);l.layers=this.layers,this.add(l);let c=new zt(Ss,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},La=class extends yn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ll=class extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yi?kt:En),this.texture=new La(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _r(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:wi});r.uniforms.tEquirect.value=t;let o=new hn(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=cn),new ol(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ho=new G,Df=new G,Uf=new ut,ri=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ho.subVectors(i,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ho),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Uf.getNormalMatrix(e),s=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Li,la=new G,yr=class{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],b=s[10],g=s[11],p=s[12],R=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,g-m,E-p).normalize(),i[1].setComponents(l+r,d+c,g+m,E+p).normalize(),i[2].setComponents(l+o,d+u,g+_,E+R).normalize(),i[3].setComponents(l-o,d-u,g-_,E-R).normalize(),i[4].setComponents(l-a,d-h,g-b,E-v).normalize(),t===oi)i[5].setComponents(l+a,d+h,g+b,E+v).normalize();else if(t===xa)i[5].setComponents(a,h,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Of(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let h=c.array,d=c.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,d),c.onUploadCallback();let b;if(h instanceof Float32Array)b=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=n.SHORT;else if(h instanceof Uint32Array)b=n.UNSIGNED_INT;else if(h instanceof Int32Array)b=n.INT;else if(h instanceof Int8Array)b=n.BYTE;else if(h instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){let d=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&_.length===0&&n.bufferSubData(h,0,d),_.length!==0){for(let b=0,g=_.length;b<g;b++){let p=_[b];t?n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var xr=class n extends An{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,m=[],_=[],b=[],g=[];for(let p=0;p<u;p++){let R=p*d-o;for(let v=0;v<c;v++){let E=v*h-r;_.push(E,-R,0),b.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){let v=R+c*p,E=R+c*(p+1),U=R+1+c*(p+1),D=R+1+c*p;m.push(v,E,D),m.push(E,U,D)}this.setIndex(m),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(b,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
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
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ap=`#define PI 3.141592653589793
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
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`
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
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Op=`struct PhysicalMaterial {
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
}`,kp=`
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
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
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,Qm=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,ag=`#define STANDARD
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
}`,og=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,cg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,mg=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:kf,alphahash_pars_fragment:Ff,alphamap_fragment:Bf,alphamap_pars_fragment:zf,alphatest_fragment:Hf,alphatest_pars_fragment:Vf,aomap_fragment:Gf,aomap_pars_fragment:Wf,batching_pars_vertex:qf,batching_vertex:Xf,begin_vertex:$f,beginnormal_vertex:jf,bsdfs:Yf,iridescence_fragment:Jf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:ep,clipping_planes_vertex:tp,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:ap,cube_uv_reflection_fragment:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:up,emissivemap_fragment:hp,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:vp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Lp,envmap_vertex:yp,fog_vertex:xp,fog_pars_vertex:bp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:wp,lightmap_fragment:Ep,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Cp,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Np,lights_phong_pars_fragment:Dp,lights_physical_fragment:Up,lights_physical_pars_fragment:Op,lights_fragment_begin:kp,lights_fragment_maps:Fp,lights_fragment_end:Bp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Gp,map_fragment:Wp,map_pars_fragment:qp,map_particle_fragment:Xp,map_particle_pars_fragment:$p,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Yp,morphcolor_vertex:Jp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Kp,morphtarget_vertex:Qp,normal_fragment_begin:em,normal_fragment_maps:tm,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:um,packing:hm,premultiplied_alpha_fragment:dm,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:ym,shadowmap_vertex:xm,shadowmask_pars_fragment:bm,skinbase_vertex:Mm,skinning_pars_vertex:Sm,skinning_vertex:wm,skinnormal_vertex:Em,specularmap_fragment:Tm,specularmap_pars_fragment:Am,tonemapping_fragment:Cm,tonemapping_pars_fragment:Rm,transmission_fragment:Lm,transmission_pars_fragment:Pm,uv_pars_fragment:Im,uv_pars_vertex:Nm,uv_vertex:Dm,worldpos_vertex:Um,background_vert:Om,background_frag:km,backgroundCube_vert:Fm,backgroundCube_frag:Bm,cube_vert:zm,cube_frag:Hm,depth_vert:Vm,depth_frag:Gm,distanceRGBA_vert:Wm,distanceRGBA_frag:qm,equirect_vert:Xm,equirect_frag:$m,linedashed_vert:jm,linedashed_frag:Ym,meshbasic_vert:Jm,meshbasic_frag:Zm,meshlambert_vert:Km,meshlambert_frag:Qm,meshmatcap_vert:eg,meshmatcap_frag:tg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:sg,meshphong_frag:rg,meshphysical_vert:ag,meshphysical_frag:og,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:ug,points_frag:hg,shadow_vert:dg,shadow_frag:fg,sprite_vert:pg,sprite_frag:mg},xe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Hn={basic:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new st(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:ln([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:ln([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new st(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:ln([xe.points,xe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:ln([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:ln([xe.common,xe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:ln([xe.sprite,xe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:ln([xe.common,xe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:ln([xe.lights,xe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Hn.physical={uniforms:ln([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var ca={r:0,b:0,g:0};function gg(n,e,t,i,s,r,o){let a=new st(0),l=r===!0?0:1,c,u,h=null,d=0,m=null;function _(g,p){let R=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?b(a,l):v&&v.isColor&&(b(v,1),R=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||R)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$a)?(u===void 0&&(u=new hn(new _r(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ks(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=St.getTransfer(v.colorSpace)!==Pt,(h!==v||d!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new hn(new xr(2,2),new hi({name:"BackgroundMaterial",uniforms:ks(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=St.getTransfer(v.colorSpace)!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function b(g,p){g.getRGB(ca,sh(n)),i.buffers.color.setClear(ca.r,ca.g,ca.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,b(a,l)},render:_}}function vg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=g(null),c=l,u=!1;function h(B,Z,V,k,q){let W=!1;if(o){let se=b(k,V,Z);c!==se&&(c=se,m(c.object)),W=p(B,k,V,q),W&&R(B,k,V,q)}else{let se=Z.wireframe===!0;(c.geometry!==k.id||c.program!==V.id||c.wireframe!==se)&&(c.geometry=k.id,c.program=V.id,c.wireframe=se,W=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,$(B,Z,V,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(B){return i.isWebGL2?n.bindVertexArray(B):r.bindVertexArrayOES(B)}function _(B){return i.isWebGL2?n.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function b(B,Z,V){let k=V.wireframe===!0,q=a[B.id];q===void 0&&(q={},a[B.id]=q);let W=q[Z.id];W===void 0&&(W={},q[Z.id]=W);let se=W[k];return se===void 0&&(se=g(d()),W[k]=se),se}function g(B){let Z=[],V=[],k=[];for(let q=0;q<s;q++)Z[q]=0,V[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:V,attributeDivisors:k,object:B,attributes:{},index:null}}function p(B,Z,V,k){let q=c.attributes,W=Z.attributes,se=0,re=V.getAttributes();for(let he in re)if(re[he].location>=0){let F=q[he],H=W[he];if(H===void 0&&(he==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),he==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),F===void 0||F.attribute!==H||H&&F.data!==H.data)return!0;se++}return c.attributesNum!==se||c.index!==k}function R(B,Z,V,k){let q={},W=Z.attributes,se=0,re=V.getAttributes();for(let he in re)if(re[he].location>=0){let F=W[he];F===void 0&&(he==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),he==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));let H={};H.attribute=F,F&&F.data&&(H.data=F.data),q[he]=H,se++}c.attributes=q,c.attributesNum=se,c.index=k}function v(){let B=c.newAttributes;for(let Z=0,V=B.length;Z<V;Z++)B[Z]=0}function E(B){U(B,0)}function U(B,Z){let V=c.newAttributes,k=c.enabledAttributes,q=c.attributeDivisors;V[B]=1,k[B]===0&&(n.enableVertexAttribArray(B),k[B]=1),q[B]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Z),q[B]=Z)}function D(){let B=c.newAttributes,Z=c.enabledAttributes;for(let V=0,k=Z.length;V<k;V++)Z[V]!==B[V]&&(n.disableVertexAttribArray(V),Z[V]=0)}function O(B,Z,V,k,q,W,se){se===!0?n.vertexAttribIPointer(B,Z,V,q,W):n.vertexAttribPointer(B,Z,V,k,q,W)}function $(B,Z,V,k){if(i.isWebGL2===!1&&(B.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=k.attributes,W=V.getAttributes(),se=Z.defaultAttributeValues;for(let re in W){let he=W[re];if(he.location>=0){let P=q[re];if(P===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(P=B.instanceColor)),P!==void 0){let F=P.normalized,H=P.itemSize,J=t.get(P);if(J===void 0)continue;let j=J.buffer,ge=J.type,ce=J.bytesPerElement,_e=i.isWebGL2===!0&&(ge===n.INT||ge===n.UNSIGNED_INT||P.gpuType===$u);if(P.isInterleavedBufferAttribute){let Ie=P.data,Y=Ie.stride,Ct=P.offset;if(Ie.isInstancedInterleavedBuffer){for(let ze=0;ze<he.locationSize;ze++)U(he.location+ze,Ie.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let ze=0;ze<he.locationSize;ze++)E(he.location+ze);n.bindBuffer(n.ARRAY_BUFFER,j);for(let ze=0;ze<he.locationSize;ze++)O(he.location+ze,H/he.locationSize,ge,F,Y*ce,(Ct+H/he.locationSize*ze)*ce,_e)}else{if(P.isInstancedBufferAttribute){for(let Ie=0;Ie<he.locationSize;Ie++)U(he.location+Ie,P.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Ie=0;Ie<he.locationSize;Ie++)E(he.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Ie=0;Ie<he.locationSize;Ie++)O(he.location+Ie,H/he.locationSize,ge,F,H*ce,H/he.locationSize*Ie*ce,_e)}}else if(se!==void 0){let F=se[re];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(he.location,F);break;case 3:n.vertexAttrib3fv(he.location,F);break;case 4:n.vertexAttrib4fv(he.location,F);break;default:n.vertexAttrib1fv(he.location,F)}}}}D()}function C(){le();for(let B in a){let Z=a[B];for(let V in Z){let k=Z[V];for(let q in k)_(k[q].object),delete k[q];delete Z[V]}delete a[B]}}function N(B){if(a[B.id]===void 0)return;let Z=a[B.id];for(let V in Z){let k=Z[V];for(let q in k)_(k[q].object),delete k[q];delete Z[V]}delete a[B.id]}function Q(B){for(let Z in a){let V=a[Z];if(V[B.id]===void 0)continue;let k=V[B.id];for(let q in k)_(k[q].object),delete k[q];delete V[B.id]}}function le(){oe(),u=!0,c!==l&&(c=l,m(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:le,resetDefaultState:oe,dispose:C,releaseStatesOfGeometry:N,releaseStatesOfProgram:Q,initAttributes:v,enableAttribute:E,disableUnusedAttributes:D}}function _g(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let _=0;for(let b=0;b<d;b++)_+=h[b];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function yg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=o||e.has("OES_texture_float"),U=v&&E,D=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:b,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:R,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:U,maxSamples:D}}function xg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ri,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let _=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{let R=r?0:i,v=R*4,E=p.clippingState||null;l.value=E,E=u(_,d,v,m);for(let U=0;U!==v;++U)E[U]=t[U];p.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,_){let b=h!==null?h.length:0,g=null;if(b!==0){if(g=l.value,_!==!0||g===null){let p=m+b*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,E=m;v!==b;++v,E+=4)o.copy(h[v]).applyMatrix4(R,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function bg(n){let e=new WeakMap;function t(o,a){return a===el?o.mapping=Ns:a===tl&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===el||a===tl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ll(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Fs=class extends Ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cs=4,cu=[.125,.215,.35,.446,.526,.582],Xi=20,Vo=new Fs,uu=new st,Go=null,Wo=0,qo=0,Wi=(1+Math.sqrt(5))/2,Es=1/Wi,hu=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Wi,Es),new G(0,Wi,-Es),new G(Es,0,Wi),new G(-Es,0,Wi),new G(Wi,Es,0),new G(-Wi,Es,0)],Pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go,Wo,qo),e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:mr,format:wn,colorSpace:li,depthBuffer:!1},s=du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=Sg(r,e,t)}return s}_compileMaterial(e){let t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,i,s){let a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(uu),u.toneMapping=Ei,u.autoClear=!1;let m=new Un({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new hn(new _r,m),b=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,b=!0):(m.color.copy(uu),b=!0);for(let p=0;p<6;p++){let R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;ua(s,R*v,p>2?v:0,v,v),u.setRenderTarget(s),b&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ns||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hu[(s-1)%hu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new hn(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),b=r/_,g=isFinite(r)?1+Math.floor(u*b):Xi;g>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);let p=[],R=0;for(let O=0;O<Xi;++O){let $=O/b,C=Math.exp(-$*$/2);p.push(C),O===0?R+=C:O<g&&(R+=2*C)}for(let O=0;O<p.length;O++)p[O]=p[O]/R;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;let E=this._sizeLods[s],U=3*E*(s>v-Cs?s-v+Cs:0),D=4*(this._cubeSize-E);ua(t,U,D,3*E,2*E),l.setRenderTarget(t),l.render(h,Vo)}};function Mg(n){let e=[],t=[],i=[],s=n,r=n-Cs+1+cu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Cs?l=cu[o-n+Cs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,b=3,g=2,p=1,R=new Float32Array(b*_*m),v=new Float32Array(g*_*m),E=new Float32Array(p*_*m);for(let D=0;D<m;D++){let O=D%3*2/3-1,$=D>2?0:-1,C=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];R.set(C,b*_*D),v.set(d,g*_*D);let N=[D,D,D,D,D,D];E.set(N,p*_*D)}let U=new An;U.setAttribute("position",new Tn(R,b)),U.setAttribute("uv",new Tn(v,g)),U.setAttribute("faceIndex",new Tn(E,p)),e.push(U),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function du(n,e,t){let i=new ci(n,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sg(n,e,t){let i=new Float32Array(Xi),s=new G(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function fu(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function pu(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function wg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===el||l===tl,u=l===Ns||l===Ds;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Pa(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Pa(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Eg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tg(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let b=d.morphAttributes[_];for(let g=0,p=b.length;g<p;g++)e.remove(b[g])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let _ in d)e.update(d[_],n.ARRAY_BUFFER);let m=h.morphAttributes;for(let _ in m){let b=m[_];for(let g=0,p=b.length;g<p;g++)e.update(b[g],n.ARRAY_BUFFER)}}function c(h){let d=[],m=h.index,_=h.attributes.position,b=0;if(m!==null){let R=m.array;b=m.version;for(let v=0,E=R.length;v<E;v+=3){let U=R[v+0],D=R[v+1],O=R[v+2];d.push(U,D,D,O,O,U)}}else if(_!==void 0){let R=_.array;b=_.version;for(let v=0,E=R.length/3-1;v<E;v+=3){let U=v+0,D=v+1,O=v+2;d.push(U,D,D,O,O,U)}}else return;let g=new(nh(d)?Ca:Aa)(d,1);g.version=b;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ag(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function h(m,_,b){if(b===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,_,a,m*l,b),t.update(_,r,b)}function d(m,_,b){if(b===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<b;p++)this.render(m[p]/l,_[p]);else{g.multiDrawElementsWEBGL(r,_,0,a,m,0,b);let p=0;for(let R=0;R<b;R++)p+=_[R];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Cg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Rg(n,e){return n[0]-e[0]}function Lg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Pg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0,b=r.get(u);if(b===void 0||b.count!==_){let B=function(){le.dispose(),r.delete(u),u.removeEventListener("dispose",B)};b!==void 0&&b.texture.dispose();let R=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],O=u.morphAttributes.color||[],$=0;R===!0&&($=1),v===!0&&($=2),E===!0&&($=3);let C=u.attributes.position.count*$,N=1;C>e.maxTextureSize&&(N=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let Q=new Float32Array(C*N*4*_),le=new wa(Q,C,N,_);le.type=ai,le.needsUpdate=!0;let oe=$*4;for(let Z=0;Z<_;Z++){let V=U[Z],k=D[Z],q=O[Z],W=C*N*4*Z;for(let se=0;se<V.count;se++){let re=se*oe;R===!0&&(o.fromBufferAttribute(V,se),Q[W+re+0]=o.x,Q[W+re+1]=o.y,Q[W+re+2]=o.z,Q[W+re+3]=0),v===!0&&(o.fromBufferAttribute(k,se),Q[W+re+4]=o.x,Q[W+re+5]=o.y,Q[W+re+6]=o.z,Q[W+re+7]=0),E===!0&&(o.fromBufferAttribute(q,se),Q[W+re+8]=o.x,Q[W+re+9]=o.y,Q[W+re+10]=o.z,Q[W+re+11]=q.itemSize===4?o.w:1)}}b={count:_,texture:le,size:new ft(C,N)},r.set(u,b),u.addEventListener("dispose",B)}let g=0;for(let R=0;R<d.length;R++)g+=d[R];let p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",b.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",b.size)}else{let m=d===void 0?0:d.length,_=i[u.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<m;v++){let E=_[v];E[0]=v,E[1]=d[v]}_.sort(Lg);for(let v=0;v<8;v++)v<m&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Rg);let b=u.morphAttributes.position,g=u.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let E=a[v],U=E[0],D=E[1];U!==Number.MAX_SAFE_INTEGER&&D?(b&&u.getAttribute("morphTarget"+v)!==b[U]&&u.setAttribute("morphTarget"+v,b[U]),g&&u.getAttribute("morphNormal"+v)!==g[U]&&u.setAttribute("morphNormal"+v,g[U]),s[v]=D,p+=D):(b&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let R=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",R),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Ig(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ia=class extends yn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:ji,u!==ji&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ji&&(i=Si),i===void 0&&u===Us&&(i=$i),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ah=new yn,oh=new Ia(1,1);oh.compareFunction=th;var lh=new wa,ch=new al,uh=new La,mu=[],gu=[],vu=new Float32Array(16),_u=new Float32Array(9),yu=new Float32Array(4);function Ws(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ng(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function Ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),Wt(t,i)}}function Fg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;_u.set(i),n.uniformMatrix3fv(this.addr,!1,_u),Wt(t,i)}}function Bg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),Wt(t,i)}}function zg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function Vg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function Gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function Wg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function jg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?oh:ah;t.setTexture2D(e||r,s)}function Yg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ch,s)}function Jg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uh,s)}function Zg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lh,s)}function Kg(n){switch(n){case 5126:return Ng;case 35664:return Dg;case 35665:return Ug;case 35666:return Og;case 35674:return kg;case 35675:return Fg;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return qg;case 36295:return Xg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Qg(n,e){n.uniform1fv(this.addr,e)}function e0(n,e){let t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function t0(n,e){let t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function n0(n,e){let t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function i0(n,e){let t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s0(n,e){let t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r0(n,e){let t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function a0(n,e){n.uniform1iv(this.addr,e)}function o0(n,e){n.uniform2iv(this.addr,e)}function l0(n,e){n.uniform3iv(this.addr,e)}function c0(n,e){n.uniform4iv(this.addr,e)}function u0(n,e){n.uniform1uiv(this.addr,e)}function h0(n,e){n.uniform2uiv(this.addr,e)}function d0(n,e){n.uniform3uiv(this.addr,e)}function f0(n,e){n.uniform4uiv(this.addr,e)}function p0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ah,r[o])}function m0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ch,r[o])}function g0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||uh,r[o])}function v0(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lh,r[o])}function _0(n){switch(n){case 5126:return Qg;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return h0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}var cl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}},ul=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_0(t.type)}},hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Xo=/(\w+)(\])?(\[|\.)?/g;function xu(n,e){n.seq.push(e),n.map[e.id]=e}function y0(n,e,t){let i=n.name,s=i.length;for(Xo.lastIndex=0;;){let r=Xo.exec(i),o=Xo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xu(t,c===void 0?new cl(a,n,e):new ul(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new hl(a),xu(t,h)),t=h}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);y0(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function bu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var x0=37297,b0=0;function M0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function S0(n){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(n),i;switch(e===t?i="":e===ya&&t===_a?i="LinearDisplayP3ToLinearSRGB":e===_a&&t===ya&&(i="LinearSRGBToLinearDisplayP3"),n){case li:case ja:return[i,"LinearTransferOETF"];case kt:case Nl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Mu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+M0(n.getShaderSource(e),o)}else return s}function w0(n,e){let t=S0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function E0(n,e){let t;switch(e){case Ad:t="Linear";break;case Cd:t="Reinhard";break;case Rd:t="OptimizedCineon";break;case Ld:t="ACESFilmic";break;case Id:t="AgX";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function T0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function A0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rs).join(`
`)}function C0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function R0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rs(n){return n!==""}function Su(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(n){return n.replace(L0,I0)}var P0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function I0(n,e){let t=at[e];if(t===void 0){let i=P0.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dl(t)}var N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(n){return n.replace(N0,D0)}function D0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===td?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function O0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Ds:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function F0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xa:e="ENVMAP_BLENDING_MULTIPLY";break;case Ed:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function B0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function z0(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=U0(t),c=O0(t),u=k0(t),h=F0(t),d=B0(t),m=t.isWebGL2?"":T0(t),_=A0(t),b=C0(r),g=s.createProgram(),p,R,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Rs).join(`
`),p.length>0&&(p+=`
`),R=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Rs).join(`
`),R.length>0&&(R+=`
`)):(p=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),R=[m,Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?at.tonemapping_pars_fragment:"",t.toneMapping!==Ei?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,w0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=dl(o),o=Su(o,t),o=wu(o,t),a=dl(a),a=Su(a,t),a=wu(a,t),o=Eu(o),a=Eu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);let E=v+p+o,U=v+R+a,D=bu(s,s.VERTEX_SHADER,E),O=bu(s,s.FRAGMENT_SHADER,U);s.attachShader(g,D),s.attachShader(g,O),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function $(le){if(n.debug.checkShaderErrors){let oe=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(D).trim(),Z=s.getShaderInfoLog(O).trim(),V=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,D,O);else{let q=Mu(s,D,"vertex"),W=Mu(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+q+`
`+W)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(B===""||Z==="")&&(k=!1);k&&(le.diagnostics={runnable:V,programLog:oe,vertexShader:{log:B,prefix:p},fragmentShader:{log:Z,prefix:R}})}s.deleteShader(D),s.deleteShader(O),C=new Is(s,g),N=R0(s,g)}let C;this.getUniforms=function(){return C===void 0&&$(this),C};let N;this.getAttributes=function(){return N===void 0&&$(this),N};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=s.getProgramParameter(g,x0)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=O,this}var H0=0,fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pl(e),t.set(e,i)),i}},pl=class{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}};function V0(n,e,t,i,s,r,o){let a=new Ta,l=new fl,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return C===0?"uv":`uv${C}`}function g(C,N,Q,le,oe){let B=le.fog,Z=oe.geometry,V=C.isMeshStandardMaterial?le.environment:null,k=(C.isMeshStandardMaterial?t:e).get(C.envMap||V),q=k&&k.mapping===$a?k.image.height:null,W=_[C.type];C.precision!==null&&(m=s.getMaxPrecision(C.precision),m!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",m,"instead."));let se=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=se!==void 0?se.length:0,he=0;Z.morphAttributes.position!==void 0&&(he=1),Z.morphAttributes.normal!==void 0&&(he=2),Z.morphAttributes.color!==void 0&&(he=3);let P,F,H,J;if(W){let Xt=Hn[W];P=Xt.vertexShader,F=Xt.fragmentShader}else P=C.vertexShader,F=C.fragmentShader,l.update(C),H=l.getVertexShaderID(C),J=l.getFragmentShaderID(C);let j=n.getRenderTarget(),ge=oe.isInstancedMesh===!0,ce=oe.isBatchedMesh===!0,_e=!!C.map,Ie=!!C.matcap,Y=!!k,Ct=!!C.aoMap,ze=!!C.lightMap,Ze=!!C.bumpMap,Ne=!!C.normalMap,Tt=!!C.displacementMap,nt=!!C.emissiveMap,I=!!C.metalnessMap,w=!!C.roughnessMap,ee=C.anisotropy>0,pe=C.clearcoat>0,de=C.iridescence>0,me=C.sheen>0,ke=C.transmission>0,we=ee&&!!C.anisotropyMap,Re=pe&&!!C.clearcoatMap,qe=pe&&!!C.clearcoatNormalMap,it=pe&&!!C.clearcoatRoughnessMap,fe=de&&!!C.iridescenceMap,vt=de&&!!C.iridescenceThicknessMap,ot=me&&!!C.sheenColorMap,Ye=me&&!!C.sheenRoughnessMap,He=!!C.specularMap,Le=!!C.specularColorMap,et=!!C.specularIntensityMap,gt=ke&&!!C.transmissionMap,Rt=ke&&!!C.thicknessMap,rt=!!C.gradientMap,ve=!!C.alphaMap,z=C.alphaTest>0,Me=!!C.alphaHash,Se=!!C.extensions,je=!!Z.attributes.uv1,We=!!Z.attributes.uv2,yt=!!Z.attributes.uv3,bt=Ei;return C.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(bt=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:C.type,shaderName:C.name,vertexShader:P,fragmentShader:F,defines:C.defines,customVertexShaderID:H,customFragmentShaderID:J,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:m,batching:ce,instancing:ge,instancingColor:ge&&oe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:li,map:_e,matcap:Ie,envMap:Y,envMapMode:Y&&k.mapping,envMapCubeUVHeight:q,aoMap:Ct,lightMap:ze,bumpMap:Ze,normalMap:Ne,displacementMap:d&&Tt,emissiveMap:nt,normalMapObjectSpace:Ne&&C.normalMapType===Xd,normalMapTangentSpace:Ne&&C.normalMapType===Il,metalnessMap:I,roughnessMap:w,anisotropy:ee,anisotropyMap:we,clearcoat:pe,clearcoatMap:Re,clearcoatNormalMap:qe,clearcoatRoughnessMap:it,iridescence:de,iridescenceMap:fe,iridescenceThicknessMap:vt,sheen:me,sheenColorMap:ot,sheenRoughnessMap:Ye,specularMap:He,specularColorMap:Le,specularIntensityMap:et,transmission:ke,transmissionMap:gt,thicknessMap:Rt,gradientMap:rt,opaque:C.transparent===!1&&C.blending===Ls,alphaMap:ve,alphaTest:z,alphaHash:Me,combine:C.combine,mapUv:_e&&b(C.map.channel),aoMapUv:Ct&&b(C.aoMap.channel),lightMapUv:ze&&b(C.lightMap.channel),bumpMapUv:Ze&&b(C.bumpMap.channel),normalMapUv:Ne&&b(C.normalMap.channel),displacementMapUv:Tt&&b(C.displacementMap.channel),emissiveMapUv:nt&&b(C.emissiveMap.channel),metalnessMapUv:I&&b(C.metalnessMap.channel),roughnessMapUv:w&&b(C.roughnessMap.channel),anisotropyMapUv:we&&b(C.anisotropyMap.channel),clearcoatMapUv:Re&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:qe&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&b(C.sheenRoughnessMap.channel),specularMapUv:He&&b(C.specularMap.channel),specularColorMapUv:Le&&b(C.specularColorMap.channel),specularIntensityMapUv:et&&b(C.specularIntensityMap.channel),transmissionMapUv:gt&&b(C.transmissionMap.channel),thicknessMapUv:Rt&&b(C.thicknessMap.channel),alphaMapUv:ve&&b(C.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ne||ee),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:We,vertexUv3s:yt,pointsUvs:oe.isPoints===!0&&!!Z.attributes.uv&&(_e||ve),fog:!!B,useFog:C.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:oe.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:he,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:_e&&C.map.isVideoTexture===!0&&St.getTransfer(C.map.colorSpace)===Pt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===_n,flipSided:C.side===pn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Se&&C.extensions.derivatives===!0,extensionFragDepth:Se&&C.extensions.fragDepth===!0,extensionDrawBuffers:Se&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&C.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function p(C){let N=[];if(C.shaderID?N.push(C.shaderID):(N.push(C.customVertexShaderID),N.push(C.customFragmentShaderID)),C.defines!==void 0)for(let Q in C.defines)N.push(Q),N.push(C.defines[Q]);return C.isRawShaderMaterial===!1&&(R(N,C),v(N,C),N.push(n.outputColorSpace)),N.push(C.customProgramCacheKey),N.join()}function R(C,N){C.push(N.precision),C.push(N.outputColorSpace),C.push(N.envMapMode),C.push(N.envMapCubeUVHeight),C.push(N.mapUv),C.push(N.alphaMapUv),C.push(N.lightMapUv),C.push(N.aoMapUv),C.push(N.bumpMapUv),C.push(N.normalMapUv),C.push(N.displacementMapUv),C.push(N.emissiveMapUv),C.push(N.metalnessMapUv),C.push(N.roughnessMapUv),C.push(N.anisotropyMapUv),C.push(N.clearcoatMapUv),C.push(N.clearcoatNormalMapUv),C.push(N.clearcoatRoughnessMapUv),C.push(N.iridescenceMapUv),C.push(N.iridescenceThicknessMapUv),C.push(N.sheenColorMapUv),C.push(N.sheenRoughnessMapUv),C.push(N.specularMapUv),C.push(N.specularColorMapUv),C.push(N.specularIntensityMapUv),C.push(N.transmissionMapUv),C.push(N.thicknessMapUv),C.push(N.combine),C.push(N.fogExp2),C.push(N.sizeAttenuation),C.push(N.morphTargetsCount),C.push(N.morphAttributeCount),C.push(N.numDirLights),C.push(N.numPointLights),C.push(N.numSpotLights),C.push(N.numSpotLightMaps),C.push(N.numHemiLights),C.push(N.numRectAreaLights),C.push(N.numDirLightShadows),C.push(N.numPointLightShadows),C.push(N.numSpotLightShadows),C.push(N.numSpotLightShadowsWithMaps),C.push(N.numLightProbes),C.push(N.shadowMapType),C.push(N.toneMapping),C.push(N.numClippingPlanes),C.push(N.numClipIntersection),C.push(N.depthPacking)}function v(C,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),N.anisotropy&&a.enable(17),N.alphaHash&&a.enable(18),N.batching&&a.enable(19),C.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),C.push(a.mask)}function E(C){let N=_[C.type],Q;if(N){let le=Hn[N];Q=Pf.clone(le.uniforms)}else Q=C.uniforms;return Q}function U(C,N){let Q;for(let le=0,oe=c.length;le<oe;le++){let B=c[le];if(B.cacheKey===N){Q=B,++Q.usedTimes;break}}return Q===void 0&&(Q=new z0(n,N,C,r),c.push(Q)),Q}function D(C){if(--C.usedTimes===0){let N=c.indexOf(C);c[N]=c[c.length-1],c.pop(),C.destroy()}}function O(C){l.remove(C)}function $(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:U,releaseProgram:D,releaseShaderCache:O,programs:c,dispose:$}}function G0(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function W0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Au(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,m,_,b,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:b,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=b,p.group=g),e++,p}function a(h,d,m,_,b,g){let p=o(h,d,m,_,b,g);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(h,d,m,_,b,g){let p=o(h,d,m,_,b,g);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||W0),i.length>1&&i.sort(d||Au),s.length>1&&s.sort(d||Au)}function u(){for(let h=e,d=n.length;h<d;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function q0(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Cu,n.set(i,[o])):s>=r.length?(o=new Cu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function X0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new st};break;case"SpotLight":t={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function $0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var j0=0;function Y0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J0(n,e){let t=new X0,i=$0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new G);let r=new G,o=new lt,a=new lt;function l(u,h){let d=0,m=0,_=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let b=0,g=0,p=0,R=0,v=0,E=0,U=0,D=0,O=0,$=0,C=0;u.sort(Y0);let N=h===!0?Math.PI:1;for(let le=0,oe=u.length;le<oe;le++){let B=u[le],Z=B.color,V=B.intensity,k=B.distance,q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=Z.r*V*N,m+=Z.g*V*N,_+=Z.b*V*N;else if(B.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(B.sh.coefficients[W],V);C++}else if(B.isDirectionalLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*N),B.castShadow){let se=B.shadow,re=i.get(B);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,s.directionalShadow[b]=re,s.directionalShadowMap[b]=q,s.directionalShadowMatrix[b]=B.shadow.matrix,E++}s.directional[b]=W,b++}else if(B.isSpotLight){let W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(Z).multiplyScalar(V*N),W.distance=k,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,s.spot[p]=W;let se=B.shadow;if(B.map&&(s.spotLightMap[O]=B.map,O++,se.updateMatrices(B),B.castShadow&&$++),s.spotLightMatrix[p]=se.matrix,B.castShadow){let re=i.get(B);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,s.spotShadow[p]=re,s.spotShadowMap[p]=q,D++}p++}else if(B.isRectAreaLight){let W=t.get(B);W.color.copy(Z).multiplyScalar(V),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),s.rectArea[R]=W,R++}else if(B.isPointLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*N),W.distance=B.distance,W.decay=B.decay,B.castShadow){let se=B.shadow,re=i.get(B);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,s.pointShadow[g]=re,s.pointShadowMap[g]=q,s.pointShadowMatrix[g]=B.shadow.matrix,U++}s.point[g]=W,g++}else if(B.isHemisphereLight){let W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(V*N),W.groundColor.copy(B.groundColor).multiplyScalar(V*N),s.hemi[v]=W,v++}}R>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;let Q=s.hash;(Q.directionalLength!==b||Q.pointLength!==g||Q.spotLength!==p||Q.rectAreaLength!==R||Q.hemiLength!==v||Q.numDirectionalShadows!==E||Q.numPointShadows!==U||Q.numSpotShadows!==D||Q.numSpotMaps!==O||Q.numLightProbes!==C)&&(s.directional.length=b,s.spot.length=p,s.rectArea.length=R,s.point.length=g,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+O-$,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=C,Q.directionalLength=b,Q.pointLength=g,Q.spotLength=p,Q.rectAreaLength=R,Q.hemiLength=v,Q.numDirectionalShadows=E,Q.numPointShadows=U,Q.numSpotShadows=D,Q.numSpotMaps=O,Q.numLightProbes=C,s.version=j0++)}function c(u,h){let d=0,m=0,_=0,b=0,g=0,p=h.matrixWorldInverse;for(let R=0,v=u.length;R<v;R++){let E=u[R];if(E.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),d++}else if(E.isSpotLight){let U=s.spot[_];U.position.setFromMatrixPosition(E.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),_++}else if(E.isRectAreaLight){let U=s.rectArea[b];U.position.setFromMatrixPosition(E.matrixWorld),U.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),b++}else if(E.isPointLight){let U=s.point[m];U.position.setFromMatrixPosition(E.matrixWorld),U.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){let U=s.hemi[g];U.direction.setFromMatrixPosition(E.matrixWorld),U.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function Ru(n,e){let t=new J0(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Z0(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Ru(n,e),t.set(r,[l])):o>=a.length?(l=new Ru(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var ml=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`;function ev(n,e,t){let i=new yr,s=new ft,r=new ft,o=new Et,a=new ml({depthPacking:qd}),l=new gl,c={},u=t.maxTextureSize,h={[Vn]:pn,[pn]:Vn,[_n]:_n},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:K0,fragmentShader:Q0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new An;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new hn(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let p=this.type;this.render=function(D,O,$){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;let C=n.getRenderTarget(),N=n.getActiveCubeFace(),Q=n.getActiveMipmapLevel(),le=n.state;le.setBlending(wi),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let oe=p!==si&&this.type===si,B=p===si&&this.type!==si;for(let Z=0,V=D.length;Z<V;Z++){let k=D[Z],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let W=q.getFrameExtents();if(s.multiply(W),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||oe===!0||B===!0){let re=this.type!==si?{minFilter:Zt,magFilter:Zt}:{};q.map!==null&&q.map.dispose(),q.map=new ci(s.x,s.y,re),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let se=q.getViewportCount();for(let re=0;re<se;re++){let he=q.getViewport(re);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),le.viewport(o),q.updateMatrices(k,re),i=q.getFrustum(),E(O,$,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===si&&R(q,$),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(C,N,Q)};function R(D,O){let $=e.update(b);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(O,null,$,d,b,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(O,null,$,m,b,null)}function v(D,O,$,C){let N=null,Q=$.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Q!==void 0)N=Q;else if(N=$.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let le=N.uuid,oe=O.uuid,B=c[le];B===void 0&&(B={},c[le]=B);let Z=B[oe];Z===void 0&&(Z=N.clone(),B[oe]=Z,O.addEventListener("dispose",U)),N=Z}if(N.visible=O.visible,N.wireframe=O.wireframe,C===si?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:h[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,$.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let le=n.properties.get(N);le.light=$}return N}function E(D,O,$,C,N){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===si)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,D.matrixWorld);let oe=e.update(D),B=D.material;if(Array.isArray(B)){let Z=oe.groups;for(let V=0,k=Z.length;V<k;V++){let q=Z[V],W=B[q.materialIndex];if(W&&W.visible){let se=v(D,W,C,N);D.onBeforeShadow(n,D,O,$,oe,se,q),n.renderBufferDirect($,null,oe,se,D,q),D.onAfterShadow(n,D,O,$,oe,se,q)}}}else if(B.visible){let Z=v(D,B,C,N);D.onBeforeShadow(n,D,O,$,oe,Z,null),n.renderBufferDirect($,null,oe,Z,D,null),D.onAfterShadow(n,D,O,$,oe,Z,null)}}let le=D.children;for(let oe=0,B=le.length;oe<B;oe++)E(le[oe],O,$,C,N)}function U(D){D.target.removeEventListener("dispose",U);for(let $ in c){let C=c[$],N=D.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function tv(n,e,t){let i=t.isWebGL2;function s(){let z=!1,Me=new Et,Se=null,je=new Et(0,0,0,0);return{setMask:function(We){Se!==We&&!z&&(n.colorMask(We,We,We,We),Se=We)},setLocked:function(We){z=We},setClear:function(We,yt,bt,_t,Xt){Xt===!0&&(We*=_t,yt*=_t,bt*=_t),Me.set(We,yt,bt,_t),je.equals(Me)===!1&&(n.clearColor(We,yt,bt,_t),je.copy(Me))},reset:function(){z=!1,Se=null,je.set(-1,0,0,0)}}}function r(){let z=!1,Me=null,Se=null,je=null;return{setTest:function(We){We?ce(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(We){Me!==We&&!z&&(n.depthMask(We),Me=We)},setFunc:function(We){if(Se!==We){switch(We){case _d:n.depthFunc(n.NEVER);break;case yd:n.depthFunc(n.ALWAYS);break;case xd:n.depthFunc(n.LESS);break;case pa:n.depthFunc(n.LEQUAL);break;case bd:n.depthFunc(n.EQUAL);break;case Md:n.depthFunc(n.GEQUAL);break;case Sd:n.depthFunc(n.GREATER);break;case wd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=We}},setLocked:function(We){z=We},setClear:function(We){je!==We&&(n.clearDepth(We),je=We)},reset:function(){z=!1,Me=null,Se=null,je=null}}}function o(){let z=!1,Me=null,Se=null,je=null,We=null,yt=null,bt=null,_t=null,Xt=null;return{setTest:function(Mt){z||(Mt?ce(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Mt){Me!==Mt&&!z&&(n.stencilMask(Mt),Me=Mt)},setFunc:function(Mt,Jt,bn){(Se!==Mt||je!==Jt||We!==bn)&&(n.stencilFunc(Mt,Jt,bn),Se=Mt,je=Jt,We=bn)},setOp:function(Mt,Jt,bn){(yt!==Mt||bt!==Jt||_t!==bn)&&(n.stencilOp(Mt,Jt,bn),yt=Mt,bt=Jt,_t=bn)},setLocked:function(Mt){z=Mt},setClear:function(Mt){Xt!==Mt&&(n.clearStencil(Mt),Xt=Mt)},reset:function(){z=!1,Me=null,Se=null,je=null,We=null,yt=null,bt=null,_t=null,Xt=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap,d={},m={},_=new WeakMap,b=[],g=null,p=!1,R=null,v=null,E=null,U=null,D=null,O=null,$=null,C=new st(0,0,0),N=0,Q=!1,le=null,oe=null,B=null,Z=null,V=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(se)[1]),q=W>=1):se.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),q=W>=2);let re=null,he={},P=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),H=new Et().fromArray(P),J=new Et().fromArray(F);function j(z,Me,Se,je){let We=new Uint8Array(4),yt=n.createTexture();n.bindTexture(z,yt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<Se;bt++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,je,0,n.RGBA,n.UNSIGNED_BYTE,We):n.texImage2D(Me+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,We);return yt}let ge={};ge[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(n.DEPTH_TEST),l.setFunc(pa),nt(!1),I(oc),ce(n.CULL_FACE),Ne(wi);function ce(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function _e(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function Ie(z,Me){return m[z]!==Me?(n.bindFramebuffer(z,Me),m[z]=Me,i&&(z===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),z===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function Y(z,Me){let Se=b,je=!1;if(z)if(Se=_.get(Me),Se===void 0&&(Se=[],_.set(Me,Se)),z.isWebGLMultipleRenderTargets){let We=z.texture;if(Se.length!==We.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,bt=We.length;yt<bt;yt++)Se[yt]=n.COLOR_ATTACHMENT0+yt;Se.length=We.length,je=!0}}else Se[0]!==n.COLOR_ATTACHMENT0&&(Se[0]=n.COLOR_ATTACHMENT0,je=!0);else Se[0]!==n.BACK&&(Se[0]=n.BACK,je=!0);je&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Ct(z){return g!==z?(n.useProgram(z),g=z,!0):!1}let ze={[qi]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[sd]:n.FUNC_REVERSE_SUBTRACT};if(i)ze[hc]=n.MIN,ze[dc]=n.MAX;else{let z=e.get("EXT_blend_minmax");z!==null&&(ze[hc]=z.MIN_EXT,ze[dc]=z.MAX_EXT)}let Ze={[rd]:n.ZERO,[ad]:n.ONE,[od]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[fd]:n.SRC_ALPHA_SATURATE,[hd]:n.DST_COLOR,[cd]:n.DST_ALPHA,[ld]:n.ONE_MINUS_SRC_COLOR,[Qo]:n.ONE_MINUS_SRC_ALPHA,[dd]:n.ONE_MINUS_DST_COLOR,[ud]:n.ONE_MINUS_DST_ALPHA,[pd]:n.CONSTANT_COLOR,[md]:n.ONE_MINUS_CONSTANT_COLOR,[gd]:n.CONSTANT_ALPHA,[vd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(z,Me,Se,je,We,yt,bt,_t,Xt,Mt){if(z===wi){p===!0&&(_e(n.BLEND),p=!1);return}if(p===!1&&(ce(n.BLEND),p=!0),z!==nd){if(z!==R||Mt!==Q){if((v!==qi||D!==qi)&&(n.blendEquation(n.FUNC_ADD),v=qi,D=qi),Mt)switch(z){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.ONE,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}E=null,U=null,O=null,$=null,C.set(0,0,0),N=0,R=z,Q=Mt}return}We=We||Me,yt=yt||Se,bt=bt||je,(Me!==v||We!==D)&&(n.blendEquationSeparate(ze[Me],ze[We]),v=Me,D=We),(Se!==E||je!==U||yt!==O||bt!==$)&&(n.blendFuncSeparate(Ze[Se],Ze[je],Ze[yt],Ze[bt]),E=Se,U=je,O=yt,$=bt),(_t.equals(C)===!1||Xt!==N)&&(n.blendColor(_t.r,_t.g,_t.b,Xt),C.copy(_t),N=Xt),R=z,Q=!1}function Tt(z,Me){z.side===_n?_e(n.CULL_FACE):ce(n.CULL_FACE);let Se=z.side===pn;Me&&(Se=!Se),nt(Se),z.blending===Ls&&z.transparent===!1?Ne(wi):Ne(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);let je=z.stencilWrite;c.setTest(je),je&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ee(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(z){le!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),le=z)}function I(z){z!==Qh?(ce(n.CULL_FACE),z!==oe&&(z===oc?n.cullFace(n.BACK):z===ed?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),oe=z}function w(z){z!==B&&(q&&n.lineWidth(z),B=z)}function ee(z,Me,Se){z?(ce(n.POLYGON_OFFSET_FILL),(Z!==Me||V!==Se)&&(n.polygonOffset(Me,Se),Z=Me,V=Se)):_e(n.POLYGON_OFFSET_FILL)}function pe(z){z?ce(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function de(z){z===void 0&&(z=n.TEXTURE0+k-1),re!==z&&(n.activeTexture(z),re=z)}function me(z,Me,Se){Se===void 0&&(re===null?Se=n.TEXTURE0+k-1:Se=re);let je=he[Se];je===void 0&&(je={type:void 0,texture:void 0},he[Se]=je),(je.type!==z||je.texture!==Me)&&(re!==Se&&(n.activeTexture(Se),re=Se),n.bindTexture(z,Me||ge[z]),je.type=z,je.texture=Me)}function ke(){let z=he[re];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function we(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(z){H.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),H.copy(z))}function gt(z){J.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),J.copy(z))}function Rt(z,Me){let Se=h.get(Me);Se===void 0&&(Se=new WeakMap,h.set(Me,Se));let je=Se.get(z);je===void 0&&(je=n.getUniformBlockIndex(Me,z.name),Se.set(z,je))}function rt(z,Me){let je=h.get(Me).get(z);u.get(Me)!==je&&(n.uniformBlockBinding(Me,je,z.__bindingPointIndex),u.set(Me,je))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},re=null,he={},m={},_=new WeakMap,b=[],g=null,p=!1,R=null,v=null,E=null,U=null,D=null,O=null,$=null,C=new st(0,0,0),N=0,Q=!1,le=null,oe=null,B=null,Z=null,V=null,H.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:_e,bindFramebuffer:Ie,drawBuffers:Y,useProgram:Ct,setBlending:Ne,setMaterial:Tt,setFlipSided:nt,setCullFace:I,setLineWidth:w,setPolygonOffset:ee,setScissorTest:pe,activeTexture:de,bindTexture:me,unbindTexture:ke,compressedTexImage2D:we,compressedTexImage3D:Re,texImage2D:He,texImage3D:Le,updateUBOMapping:Rt,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:Ye,texSubImage2D:qe,texSubImage3D:it,compressedTexSubImage2D:fe,compressedTexSubImage3D:vt,scissor:et,viewport:gt,reset:ve}}function nv(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,w){return m?new OffscreenCanvas(I,w):gr("canvas")}function b(I,w,ee,pe){let de=1;if((I.width>pe||I.height>pe)&&(de=pe/Math.max(I.width,I.height)),de<1||w===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let me=w?ba:Math.floor,ke=me(de*I.width),we=me(de*I.height);h===void 0&&(h=_(ke,we));let Re=ee?_(ke,we):h;return Re.width=ke,Re.height=we,Re.getContext("2d").drawImage(I,0,0,ke,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ke+"x"+we+")."),Re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function g(I){return sl(I.width)&&sl(I.height)}function p(I){return a?!1:I.wrapS!==sn||I.wrapT!==sn||I.minFilter!==Zt&&I.minFilter!==cn}function R(I,w){return I.generateMipmaps&&w&&I.minFilter!==Zt&&I.minFilter!==cn}function v(I){n.generateMipmap(I)}function E(I,w,ee,pe,de=!1){if(a===!1)return w;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me=w;if(w===n.RED&&(ee===n.FLOAT&&(me=n.R32F),ee===n.HALF_FLOAT&&(me=n.R16F),ee===n.UNSIGNED_BYTE&&(me=n.R8)),w===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(me=n.R8UI),ee===n.UNSIGNED_SHORT&&(me=n.R16UI),ee===n.UNSIGNED_INT&&(me=n.R32UI),ee===n.BYTE&&(me=n.R8I),ee===n.SHORT&&(me=n.R16I),ee===n.INT&&(me=n.R32I)),w===n.RG&&(ee===n.FLOAT&&(me=n.RG32F),ee===n.HALF_FLOAT&&(me=n.RG16F),ee===n.UNSIGNED_BYTE&&(me=n.RG8)),w===n.RGBA){let ke=de?va:St.getTransfer(pe);ee===n.FLOAT&&(me=n.RGBA32F),ee===n.HALF_FLOAT&&(me=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(me=ke===Pt?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function U(I,w,ee){return R(I,ee)===!0||I.isFramebufferTexture&&I.minFilter!==Zt&&I.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function D(I){return I===Zt||I===pc||I===_o?n.NEAREST:n.LINEAR}function O(I){let w=I.target;w.removeEventListener("dispose",O),C(w),w.isVideoTexture&&u.delete(w)}function $(I){let w=I.target;w.removeEventListener("dispose",$),Q(w)}function C(I){let w=i.get(I);if(w.__webglInit===void 0)return;let ee=I.source,pe=d.get(ee);if(pe){let de=pe[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&N(I),Object.keys(pe).length===0&&d.delete(ee)}i.remove(I)}function N(I){let w=i.get(I);n.deleteTexture(w.__webglTexture);let ee=I.source,pe=d.get(ee);delete pe[w.__cacheKey],o.memory.textures--}function Q(I){let w=I.texture,ee=i.get(I),pe=i.get(w);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(ee.__webglFramebuffer[de]))for(let me=0;me<ee.__webglFramebuffer[de].length;me++)n.deleteFramebuffer(ee.__webglFramebuffer[de][me]);else n.deleteFramebuffer(ee.__webglFramebuffer[de]);ee.__webglDepthbuffer&&n.deleteRenderbuffer(ee.__webglDepthbuffer[de])}else{if(Array.isArray(ee.__webglFramebuffer))for(let de=0;de<ee.__webglFramebuffer.length;de++)n.deleteFramebuffer(ee.__webglFramebuffer[de]);else n.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&n.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let de=0;de<ee.__webglColorRenderbuffer.length;de++)ee.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(ee.__webglColorRenderbuffer[de]);ee.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let de=0,me=w.length;de<me;de++){let ke=i.get(w[de]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),o.memory.textures--),i.remove(w[de])}i.remove(w),i.remove(I)}let le=0;function oe(){le=0}function B(){let I=le;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),le+=1,I}function Z(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function V(I,w){let ee=i.get(I);if(I.isVideoTexture&&Tt(I),I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){let pe=I.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(ee,I,w);return}}t.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+w)}function k(I,w){let ee=i.get(I);if(I.version>0&&ee.__version!==I.version){H(ee,I,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+w)}function q(I,w){let ee=i.get(I);if(I.version>0&&ee.__version!==I.version){H(ee,I,w);return}t.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+w)}function W(I,w){let ee=i.get(I);if(I.version>0&&ee.__version!==I.version){J(ee,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+w)}let se={[Ai]:n.REPEAT,[sn]:n.CLAMP_TO_EDGE,[nl]:n.MIRRORED_REPEAT},re={[Zt]:n.NEAREST,[pc]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Dd]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},he={[$d]:n.NEVER,[Qd]:n.ALWAYS,[jd]:n.LESS,[th]:n.LEQUAL,[Yd]:n.EQUAL,[Kd]:n.GEQUAL,[Jd]:n.GREATER,[Zd]:n.NOTEQUAL};function P(I,w,ee){if(ee?(n.texParameteri(I,n.TEXTURE_WRAP_S,se[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,se[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,se[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,re[w.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==sn||w.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,D(w.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,D(w.minFilter)),w.minFilter!==Zt&&w.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Zt||w.minFilter!==_o&&w.minFilter!==Ci||w.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===mr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(I,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function F(I,w){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",O));let pe=w.source,de=d.get(pe);de===void 0&&(de={},d.set(pe,de));let me=Z(w);if(me!==I.__cacheKey){de[me]===void 0&&(de[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),de[me].usedTimes++;let ke=de[I.__cacheKey];ke!==void 0&&(de[I.__cacheKey].usedTimes--,ke.usedTimes===0&&N(w)),I.__cacheKey=me,I.__webglTexture=de[me].texture}return ee}function H(I,w,ee){let pe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=n.TEXTURE_3D);let de=F(I,w),me=w.source;t.bindTexture(pe,I.__webglTexture,n.TEXTURE0+ee);let ke=i.get(me);if(me.version!==ke.__version||de===!0){t.activeTexture(n.TEXTURE0+ee);let we=St.getPrimaries(St.workingColorSpace),Re=w.colorSpace===En?null:St.getPrimaries(w.colorSpace),qe=w.colorSpace===En||we===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let it=p(w)&&g(w.image)===!1,fe=b(w.image,it,!1,s.maxTextureSize);fe=nt(w,fe);let vt=g(fe)||a,ot=r.convert(w.format,w.colorSpace),Ye=r.convert(w.type),He=E(w.internalFormat,ot,Ye,w.colorSpace,w.isVideoTexture);P(pe,w,vt);let Le,et=w.mipmaps,gt=a&&w.isVideoTexture!==!0&&He!==Qu,Rt=ke.__version===void 0||de===!0,rt=U(w,fe,vt);if(w.isDepthTexture)He=n.DEPTH_COMPONENT,a?w.type===ai?He=n.DEPTH_COMPONENT32F:w.type===Si?He=n.DEPTH_COMPONENT24:w.type===$i?He=n.DEPTH24_STENCIL8:He=n.DEPTH_COMPONENT16:w.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ji&&He===n.DEPTH_COMPONENT&&w.type!==Pl&&w.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Si,Ye=r.convert(w.type)),w.format===Us&&He===n.DEPTH_COMPONENT&&(He=n.DEPTH_STENCIL,w.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=$i,Ye=r.convert(w.type))),Rt&&(gt?t.texStorage2D(n.TEXTURE_2D,1,He,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,He,fe.width,fe.height,0,ot,Ye,null));else if(w.isDataTexture)if(et.length>0&&vt){gt&&Rt&&t.texStorage2D(n.TEXTURE_2D,rt,He,et[0].width,et[0].height);for(let ve=0,z=et.length;ve<z;ve++)Le=et[ve],gt?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Le.width,Le.height,ot,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,ve,He,Le.width,Le.height,0,ot,Ye,Le.data);w.generateMipmaps=!1}else gt?(Rt&&t.texStorage2D(n.TEXTURE_2D,rt,He,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,ot,Ye,fe.data)):t.texImage2D(n.TEXTURE_2D,0,He,fe.width,fe.height,0,ot,Ye,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){gt&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,He,et[0].width,et[0].height,fe.depth);for(let ve=0,z=et.length;ve<z;ve++)Le=et[ve],w.format!==wn?ot!==null?gt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,fe.depth,ot,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,He,Le.width,Le.height,fe.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,fe.depth,ot,Ye,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,He,Le.width,Le.height,fe.depth,0,ot,Ye,Le.data)}else{gt&&Rt&&t.texStorage2D(n.TEXTURE_2D,rt,He,et[0].width,et[0].height);for(let ve=0,z=et.length;ve<z;ve++)Le=et[ve],w.format!==wn?ot!==null?gt?t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Le.width,Le.height,ot,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,He,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Le.width,Le.height,ot,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,ve,He,Le.width,Le.height,0,ot,Ye,Le.data)}else if(w.isDataArrayTexture)gt?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,He,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ot,Ye,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,fe.width,fe.height,fe.depth,0,ot,Ye,fe.data);else if(w.isData3DTexture)gt?(Rt&&t.texStorage3D(n.TEXTURE_3D,rt,He,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ot,Ye,fe.data)):t.texImage3D(n.TEXTURE_3D,0,He,fe.width,fe.height,fe.depth,0,ot,Ye,fe.data);else if(w.isFramebufferTexture){if(Rt)if(gt)t.texStorage2D(n.TEXTURE_2D,rt,He,fe.width,fe.height);else{let ve=fe.width,z=fe.height;for(let Me=0;Me<rt;Me++)t.texImage2D(n.TEXTURE_2D,Me,He,ve,z,0,ot,Ye,null),ve>>=1,z>>=1}}else if(et.length>0&&vt){gt&&Rt&&t.texStorage2D(n.TEXTURE_2D,rt,He,et[0].width,et[0].height);for(let ve=0,z=et.length;ve<z;ve++)Le=et[ve],gt?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ot,Ye,Le):t.texImage2D(n.TEXTURE_2D,ve,He,ot,Ye,Le);w.generateMipmaps=!1}else gt?(Rt&&t.texStorage2D(n.TEXTURE_2D,rt,He,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Ye,fe)):t.texImage2D(n.TEXTURE_2D,0,He,ot,Ye,fe);R(w,vt)&&v(pe),ke.__version=me.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function J(I,w,ee){if(w.image.length!==6)return;let pe=F(I,w),de=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+ee);let me=i.get(de);if(de.version!==me.__version||pe===!0){t.activeTexture(n.TEXTURE0+ee);let ke=St.getPrimaries(St.workingColorSpace),we=w.colorSpace===En?null:St.getPrimaries(w.colorSpace),Re=w.colorSpace===En||ke===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let qe=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let ve=0;ve<6;ve++)!qe&&!it?fe[ve]=b(w.image[ve],!1,!0,s.maxCubemapSize):fe[ve]=it?w.image[ve].image:w.image[ve],fe[ve]=nt(w,fe[ve]);let vt=fe[0],ot=g(vt)||a,Ye=r.convert(w.format,w.colorSpace),He=r.convert(w.type),Le=E(w.internalFormat,Ye,He,w.colorSpace),et=a&&w.isVideoTexture!==!0,gt=me.__version===void 0||pe===!0,Rt=U(w,vt,ot);P(n.TEXTURE_CUBE_MAP,w,ot);let rt;if(qe){et&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Le,vt.width,vt.height);for(let ve=0;ve<6;ve++){rt=fe[ve].mipmaps;for(let z=0;z<rt.length;z++){let Me=rt[z];w.format!==wn?Ye!==null?et?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z,0,0,Me.width,Me.height,Ye,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z,0,0,Me.width,Me.height,Ye,He,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z,Le,Me.width,Me.height,0,Ye,He,Me.data)}}}else{rt=w.mipmaps,et&&gt&&(rt.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Le,fe[0].width,fe[0].height));for(let ve=0;ve<6;ve++)if(it){et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe[ve].width,fe[ve].height,Ye,He,fe[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Le,fe[ve].width,fe[ve].height,0,Ye,He,fe[ve].data);for(let z=0;z<rt.length;z++){let Se=rt[z].image[ve].image;et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z+1,0,0,Se.width,Se.height,Ye,He,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z+1,Le,Se.width,Se.height,0,Ye,He,Se.data)}}else{et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ye,He,fe[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Le,Ye,He,fe[ve]);for(let z=0;z<rt.length;z++){let Me=rt[z];et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z+1,0,0,Ye,He,Me.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,z+1,Le,Ye,He,Me.image[ve])}}}R(w,ot)&&v(n.TEXTURE_CUBE_MAP),me.__version=de.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function j(I,w,ee,pe,de,me){let ke=r.convert(ee.format,ee.colorSpace),we=r.convert(ee.type),Re=E(ee.internalFormat,ke,we,ee.colorSpace);if(!i.get(w).__hasExternalTextures){let it=Math.max(1,w.width>>me),fe=Math.max(1,w.height>>me);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,me,Re,it,fe,w.depth,0,ke,we,null):t.texImage2D(de,me,Re,it,fe,0,ke,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ne(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,de,i.get(ee).__webglTexture,0,Ze(w)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,de,i.get(ee).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(I,w,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer&&!w.stencilBuffer){let pe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(ee||Ne(w)){let de=w.depthTexture;de&&de.isDepthTexture&&(de.type===ai?pe=n.DEPTH_COMPONENT32F:de.type===Si&&(pe=n.DEPTH_COMPONENT24));let me=Ze(w);Ne(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,pe,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,me,pe,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(w.depthBuffer&&w.stencilBuffer){let pe=Ze(w);ee&&Ne(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,w.width,w.height):Ne(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let pe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let de=0;de<pe.length;de++){let me=pe[de],ke=r.convert(me.format,me.colorSpace),we=r.convert(me.type),Re=E(me.internalFormat,ke,we,me.colorSpace),qe=Ze(w);ee&&Ne(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Re,w.width,w.height):Ne(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,Re,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Re,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let pe=i.get(w.depthTexture).__webglTexture,de=Ze(w);if(w.depthTexture.format===ji)Ne(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Us)Ne(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function _e(I){let w=i.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ce(w.__webglFramebuffer,I)}else if(ee){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]=n.createRenderbuffer(),ge(w.__webglDepthbuffer[pe],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ge(w.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(I,w,ee){let pe=i.get(I);w!==void 0&&j(pe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&_e(I)}function Y(I){let w=I.texture,ee=i.get(I),pe=i.get(w);I.addEventListener("dispose",$),I.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=w.version,o.memory.textures++);let de=I.isWebGLCubeRenderTarget===!0,me=I.isWebGLMultipleRenderTargets===!0,ke=g(I)||a;if(de){ee.__webglFramebuffer=[];for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[we]=[];for(let Re=0;Re<w.mipmaps.length;Re++)ee.__webglFramebuffer[we][Re]=n.createFramebuffer()}else ee.__webglFramebuffer[we]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)ee.__webglFramebuffer[we]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(me)if(s.drawBuffers){let we=I.texture;for(let Re=0,qe=we.length;Re<qe;Re++){let it=i.get(we[Re]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Ne(I)===!1){let we=me?w:[w];ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<we.length;Re++){let qe=we[Re];ee.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);let it=r.convert(qe.format,qe.colorSpace),fe=r.convert(qe.type),vt=E(qe.internalFormat,it,fe,qe.colorSpace,I.isXRRenderTarget===!0),ot=Ze(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,vt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(ee.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),P(n.TEXTURE_CUBE_MAP,w,ke);for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Re=0;Re<w.mipmaps.length;Re++)j(ee.__webglFramebuffer[we][Re],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Re);else j(ee.__webglFramebuffer[we],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);R(w,ke)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){let we=I.texture;for(let Re=0,qe=we.length;Re<qe;Re++){let it=we[Re],fe=i.get(it);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),P(n.TEXTURE_2D,it,ke),j(ee.__webglFramebuffer,I,it,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),R(it,ke)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?we=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,pe.__webglTexture),P(we,w,ke),a&&w.mipmaps&&w.mipmaps.length>0)for(let Re=0;Re<w.mipmaps.length;Re++)j(ee.__webglFramebuffer[Re],I,w,n.COLOR_ATTACHMENT0,we,Re);else j(ee.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,we,0);R(w,ke)&&v(we),t.unbindTexture()}I.depthBuffer&&_e(I)}function Ct(I){let w=g(I)||a,ee=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let pe=0,de=ee.length;pe<de;pe++){let me=ee[pe];if(R(me,w)){let ke=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(me).__webglTexture;t.bindTexture(ke,we),v(ke),t.unbindTexture()}}}function ze(I){if(a&&I.samples>0&&Ne(I)===!1){let w=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ee=I.width,pe=I.height,de=n.COLOR_BUFFER_BIT,me=[],ke=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(I),Re=I.isWebGLMultipleRenderTargets===!0;if(Re)for(let qe=0;qe<w.length;qe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){me.push(n.COLOR_ATTACHMENT0+qe),I.depthBuffer&&me.push(ke);let it=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(it===!1&&(I.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[qe]),it===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),Re){let fe=i.get(w[qe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,de,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let qe=0;qe<w.length;qe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,we.__webglColorRenderbuffer[qe]);let it=i.get(w[qe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Ze(I){return Math.min(s.maxSamples,I.samples)}function Ne(I){let w=i.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(I){let w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function nt(I,w){let ee=I.colorSpace,pe=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===il||ee!==li&&ee!==En&&(St.getTransfer(ee)===Pt?a===!1?e.has("EXT_sRGB")===!0&&pe===wn?(I.format=il,I.minFilter=cn,I.generateMipmaps=!1):w=Ma.sRGBToLinear(w):(pe!==wn||de!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}this.allocateTextureUnit=B,this.resetTextureUnits=oe,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Ie,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ne}function iv(n,e,t){let i=t.isWebGL2;function s(r,o=En){let a,l=St.getTransfer(o);if(r===Ti)return n.UNSIGNED_BYTE;if(r===ju)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ud)return n.BYTE;if(r===Od)return n.SHORT;if(r===Pl)return n.UNSIGNED_SHORT;if(r===$u)return n.INT;if(r===Si)return n.UNSIGNED_INT;if(r===ai)return n.FLOAT;if(r===mr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===kd)return n.ALPHA;if(r===wn)return n.RGBA;if(r===Fd)return n.LUMINANCE;if(r===Bd)return n.LUMINANCE_ALPHA;if(r===ji)return n.DEPTH_COMPONENT;if(r===Us)return n.DEPTH_STENCIL;if(r===il)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===zd)return n.RED;if(r===Ju)return n.RED_INTEGER;if(r===Hd)return n.RG;if(r===Zu)return n.RG_INTEGER;if(r===Ku)return n.RGBA_INTEGER;if(r===yo||r===xo||r===bo||r===Mo)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mc||r===gc||r===vc||r===_c)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===mc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_c)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yc||r===xc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yc)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bc||r===Mc||r===Sc||r===wc||r===Ec||r===Tc||r===Ac||r===Cc||r===Rc||r===Lc||r===Pc||r===Ic||r===Nc||r===Dc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===bc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ec)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ac)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ic)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dc)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===So||r===Uc||r===Oc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===So)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Oc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vd||r===kc||r===Fc||r===Bc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===So)return a.COMPRESSED_RED_RGTC1_EXT;if(r===kc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var vl=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fn=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sv={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_l=class extends Ri{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null,b=t.getContextAttributes(),g=null,p=null,R=[],v=[],E=new ft,U=null,D=new zt;D.layers.enable(1),D.viewport=new Et;let O=new zt;O.layers.enable(2),O.viewport=new Et;let $=[D,O],C=new vl;C.layers.enable(1),C.layers.enable(2);let N=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let F=R[P];return F===void 0&&(F=new pr,R[P]=F),F.getTargetRaySpace()},this.getControllerGrip=function(P){let F=R[P];return F===void 0&&(F=new pr,R[P]=F),F.getGripSpace()},this.getHand=function(P){let F=R[P];return F===void 0&&(F=new pr,R[P]=F),F.getHandSpace()};function le(P){let F=v.indexOf(P.inputSource);if(F===-1)return;let H=R[F];H!==void 0&&(H.update(P.inputSource,P.frame,c||o),H.dispatchEvent({type:P.type,data:P.inputSource}))}function oe(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",B);for(let P=0;P<R.length;P++){let F=v[P];F!==null&&(v[P]=null,R[P].disconnect(F))}N=null,Q=null,e.setRenderTarget(g),m=null,d=null,h=null,s=null,p=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let F={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,F),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new ci(m.framebufferWidth,m.framebufferHeight,{format:wn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let F=null,H=null,J=null;b.depth&&(J=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=b.stencil?Us:ji,H=b.stencil?$i:Si);let j={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(j),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new ci(d.textureWidth,d.textureHeight,{format:wn,type:Ti,depthTexture:new Ia(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let ge=e.properties.get(p);ge.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(P){for(let F=0;F<P.removed.length;F++){let H=P.removed[F],J=v.indexOf(H);J>=0&&(v[J]=null,R[J].disconnect(H))}for(let F=0;F<P.added.length;F++){let H=P.added[F],J=v.indexOf(H);if(J===-1){for(let ge=0;ge<R.length;ge++)if(ge>=v.length){v.push(H),J=ge;break}else if(v[ge]===null){v[ge]=H,J=ge;break}if(J===-1)break}let j=R[J];j&&j.connect(H)}}let Z=new G,V=new G;function k(P,F,H){Z.setFromMatrixPosition(F.matrixWorld),V.setFromMatrixPosition(H.matrixWorld);let J=Z.distanceTo(V),j=F.projectionMatrix.elements,ge=H.projectionMatrix.elements,ce=j[14]/(j[10]-1),_e=j[14]/(j[10]+1),Ie=(j[9]+1)/j[5],Y=(j[9]-1)/j[5],Ct=(j[8]-1)/j[0],ze=(ge[8]+1)/ge[0],Ze=ce*Ct,Ne=ce*ze,Tt=J/(-Ct+ze),nt=Tt*-Ct;F.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(nt),P.translateZ(Tt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();let I=ce+Tt,w=_e+Tt,ee=Ze-nt,pe=Ne+(J-nt),de=Ie*_e/w*I,me=Y*_e/w*I;P.projectionMatrix.makePerspective(ee,pe,de,me,I,w),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function q(P,F){F===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(F.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;C.near=O.near=D.near=P.near,C.far=O.far=D.far=P.far,(N!==C.near||Q!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,Q=C.far);let F=P.parent,H=C.cameras;q(C,F);for(let J=0;J<H.length;J++)q(H[J],F);H.length===2?k(C,D,O):C.projectionMatrix.copy(D.projectionMatrix),W(P,C,F)};function W(P,F,H){H===null?P.matrix.copy(F.matrixWorld):(P.matrix.copy(H.matrixWorld),P.matrix.invert(),P.matrix.multiply(F.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(F.projectionMatrix),P.projectionMatrixInverse.copy(F.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Os*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)};let se=null;function re(P,F){if(u=F.getViewerPose(c||o),_=F,u!==null){let H=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let J=!1;H.length!==C.cameras.length&&(C.cameras.length=0,J=!0);for(let j=0;j<H.length;j++){let ge=H[j],ce=null;if(m!==null)ce=m.getViewport(ge);else{let Ie=h.getViewSubImage(d,ge);ce=Ie.viewport,j===0&&(e.setRenderTargetTextures(p,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(p))}let _e=$[j];_e===void 0&&(_e=new zt,_e.layers.enable(j),_e.viewport=new Et,$[j]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(ce.x,ce.y,ce.width,ce.height),j===0&&(C.matrix.copy(_e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),J===!0&&C.cameras.push(_e)}}for(let H=0;H<R.length;H++){let J=v[H],j=R[H];J!==null&&j!==void 0&&j.update(J,F,c||o)}se&&se(P,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}let he=new rh;he.setAnimationLoop(re),this.setAnimationLoop=function(P){se=P},this.dispose=function(){}}};function rv(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,sh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,R,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,R,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let R=e.get(p).envMap;if(R&&(g.envMap.value=R,g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,R,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let R=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function av(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(R,v){let E=v.program;i.uniformBlockBinding(R,E)}function c(R,v){let E=s[R.id];E===void 0&&(_(R),E=u(R),s[R.id]=E,R.addEventListener("dispose",g));let U=v.program;i.updateUBOMapping(R,U);let D=e.render.frame;r[R.id]!==D&&(d(R),r[R.id]=D)}function u(R){let v=h();R.__bindingPointIndex=v;let E=n.createBuffer(),U=R.__size,D=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){let v=s[R.id],E=R.uniforms,U=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let D=0,O=E.length;D<O;D++){let $=Array.isArray(E[D])?E[D]:[E[D]];for(let C=0,N=$.length;C<N;C++){let Q=$[C];if(m(Q,D,C,U)===!0){let le=Q.__offset,oe=Array.isArray(Q.value)?Q.value:[Q.value],B=0;for(let Z=0;Z<oe.length;Z++){let V=oe[Z],k=b(V);typeof V=="number"||typeof V=="boolean"?(Q.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,le+B,Q.__data)):V.isMatrix3?(Q.__data[0]=V.elements[0],Q.__data[1]=V.elements[1],Q.__data[2]=V.elements[2],Q.__data[3]=0,Q.__data[4]=V.elements[3],Q.__data[5]=V.elements[4],Q.__data[6]=V.elements[5],Q.__data[7]=0,Q.__data[8]=V.elements[6],Q.__data[9]=V.elements[7],Q.__data[10]=V.elements[8],Q.__data[11]=0):(V.toArray(Q.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,Q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,v,E,U){let D=R.value,O=v+"_"+E;if(U[O]===void 0)return typeof D=="number"||typeof D=="boolean"?U[O]=D:U[O]=D.clone(),!0;{let $=U[O];if(typeof D=="number"||typeof D=="boolean"){if($!==D)return U[O]=D,!0}else if($.equals(D)===!1)return $.copy(D),!0}return!1}function _(R){let v=R.uniforms,E=0,U=16;for(let O=0,$=v.length;O<$;O++){let C=Array.isArray(v[O])?v[O]:[v[O]];for(let N=0,Q=C.length;N<Q;N++){let le=C[N],oe=Array.isArray(le.value)?le.value:[le.value];for(let B=0,Z=oe.length;B<Z;B++){let V=oe[B],k=b(V),q=E%U;q!==0&&U-q<k.boundary&&(E+=U-q),le.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=E,E+=k.storage}}}let D=E%U;return D>0&&(E+=U-D),R.__size=E,R.__cache={},this}function b(R){let v={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(v.boundary=4,v.storage=4):R.isVector2?(v.boundary=8,v.storage=8):R.isVector3||R.isColor?(v.boundary=16,v.storage=12):R.isVector4?(v.boundary=16,v.storage=16):R.isMatrix3?(v.boundary=48,v.storage=48):R.isMatrix4?(v.boundary=64,v.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),v}function g(R){let v=R.target;v.removeEventListener("dispose",g);let E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var br=class{constructor(e={}){let{canvas:t=mf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),_=new Int32Array(4),b=null,g=null,p=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;let v=this,E=!1,U=0,D=0,O=null,$=-1,C=null,N=new Et,Q=new Et,le=null,oe=new st(0),B=0,Z=t.width,V=t.height,k=1,q=null,W=null,se=new Et(0,0,Z,V),re=new Et(0,0,Z,V),he=!1,P=new yr,F=!1,H=!1,J=null,j=new lt,ge=new ft,ce=new G,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return O===null?k:1}let Y=i;function Ct(L,X){for(let te=0;te<L.length;te++){let ie=L[te],K=t.getContext(ie,X);if(K!==null)return K}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Me,!1),Y===null){let X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),Y=Ct(X,L),Y===null)throw Ct(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ze,Ze,Ne,Tt,nt,I,w,ee,pe,de,me,ke,we,Re,qe,it,fe,vt,ot,Ye,He,Le,et,gt;function Rt(){ze=new Eg(Y),Ze=new yg(Y,ze,e),ze.init(Ze),Le=new iv(Y,ze,Ze),Ne=new tv(Y,ze,Ze),Tt=new Cg(Y),nt=new G0,I=new nv(Y,ze,Ne,nt,Ze,Le,Tt),w=new bg(v),ee=new wg(v),pe=new Of(Y,Ze),et=new vg(Y,ze,pe,Ze),de=new Tg(Y,pe,Tt,et),me=new Ig(Y,de,pe,Tt),ot=new Pg(Y,Ze,I),it=new xg(nt),ke=new V0(v,w,ee,ze,Ze,et,it),we=new rv(v,nt),Re=new q0,qe=new Z0(ze,Ze),vt=new gg(v,w,ee,Ne,me,d,l),fe=new ev(v,me,Ze),gt=new av(Y,Tt,Ze,Ne),Ye=new _g(Y,ze,Tt,Ze),He=new Ag(Y,ze,Tt,Ze),Tt.programs=ke.programs,v.capabilities=Ze,v.extensions=ze,v.properties=nt,v.renderLists=Re,v.shadowMap=fe,v.state=Ne,v.info=Tt}Rt();let rt=new _l(v,Y);this.xr=rt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let L=ze.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=ze.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(L){L!==void 0&&(k=L,this.setSize(Z,V,!1))},this.getSize=function(L){return L.set(Z,V)},this.setSize=function(L,X,te=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=L,V=X,t.width=Math.floor(L*k),t.height=Math.floor(X*k),te===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(Z*k,V*k).floor()},this.setDrawingBufferSize=function(L,X,te){Z=L,V=X,k=te,t.width=Math.floor(L*te),t.height=Math.floor(X*te),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy(se)},this.setViewport=function(L,X,te,ie){L.isVector4?se.set(L.x,L.y,L.z,L.w):se.set(L,X,te,ie),Ne.viewport(N.copy(se).multiplyScalar(k).floor())},this.getScissor=function(L){return L.copy(re)},this.setScissor=function(L,X,te,ie){L.isVector4?re.set(L.x,L.y,L.z,L.w):re.set(L,X,te,ie),Ne.scissor(Q.copy(re).multiplyScalar(k).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(L){Ne.setScissorTest(he=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){W=L},this.getClearColor=function(L){return L.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(L=!0,X=!0,te=!0){let ie=0;if(L){let K=!1;if(O!==null){let Te=O.texture.format;K=Te===Ku||Te===Zu||Te===Ju}if(K){let Te=O.texture.type,Ae=Te===Ti||Te===Si||Te===Pl||Te===$i||Te===ju||Te===Yu,Fe=vt.getClearColor(),Xe=vt.getClearAlpha(),tt=Fe.r,Ke=Fe.g,Qe=Fe.b;Ae?(m[0]=tt,m[1]=Ke,m[2]=Qe,m[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,m)):(_[0]=tt,_[1]=Ke,_[2]=Qe,_[3]=Xe,Y.clearBufferiv(Y.COLOR,0,_))}else ie|=Y.COLOR_BUFFER_BIT}X&&(ie|=Y.DEPTH_BUFFER_BIT),te&&(ie|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),qe.dispose(),nt.dispose(),w.dispose(),ee.dispose(),me.dispose(),et.dispose(),gt.dispose(),ke.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Xt),rt.removeEventListener("sessionend",Mt),J&&(J.dispose(),J=null),Jt.stop()};function ve(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let L=Tt.autoReset,X=fe.enabled,te=fe.autoUpdate,ie=fe.needsUpdate,K=fe.type;Rt(),Tt.autoReset=L,fe.enabled=X,fe.autoUpdate=te,fe.needsUpdate=ie,fe.type=K}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Se(L){let X=L.target;X.removeEventListener("dispose",Se),je(X)}function je(L){We(L),nt.remove(L)}function We(L){let X=nt.get(L).programs;X!==void 0&&(X.forEach(function(te){ke.releaseProgram(te)}),L.isShaderMaterial&&ke.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,te,ie,K,Te){X===null&&(X=_e);let Ae=K.isMesh&&K.matrixWorld.determinant()<0,Fe=po(L,X,te,ie,K);Ne.setMaterial(ie,Ae);let Xe=te.index,tt=1;if(ie.wireframe===!0){if(Xe=de.getWireframeAttribute(te),Xe===void 0)return;tt=2}let Ke=te.drawRange,Qe=te.attributes.position,Dt=Ke.start*tt,an=(Ke.start+Ke.count)*tt;Te!==null&&(Dt=Math.max(Dt,Te.start*tt),an=Math.min(an,(Te.start+Te.count)*tt)),Xe!==null?(Dt=Math.max(Dt,0),an=Math.min(an,Xe.count)):Qe!=null&&(Dt=Math.max(Dt,0),an=Math.min(an,Qe.count));let Ft=an-Dt;if(Ft<0||Ft===1/0)return;et.setup(K,ie,Fe,te,Xe);let Mn,At=Ye;if(Xe!==null&&(Mn=pe.get(Xe),At=He,At.setIndex(Mn)),K.isMesh)ie.wireframe===!0?(Ne.setLineWidth(ie.wireframeLinewidth*Ie()),At.setMode(Y.LINES)):At.setMode(Y.TRIANGLES);else if(K.isLine){let Je=ie.linewidth;Je===void 0&&(Je=1),Ne.setLineWidth(Je*Ie()),K.isLineSegments?At.setMode(Y.LINES):K.isLineLoop?At.setMode(Y.LINE_LOOP):At.setMode(Y.LINE_STRIP)}else K.isPoints?At.setMode(Y.POINTS):K.isSprite&&At.setMode(Y.TRIANGLES);if(K.isBatchedMesh)At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)At.renderInstances(Dt,Ft,K.count);else if(te.isInstancedBufferGeometry){let Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,tr=Math.min(te.instanceCount,Je);At.renderInstances(Dt,Ft,tr)}else At.render(Dt,Ft)};function yt(L,X,te){L.transparent===!0&&L.side===_n&&L.forceSinglePass===!1?(L.side=pn,L.needsUpdate=!0,ls(L,X,te),L.side=Vn,L.needsUpdate=!0,ls(L,X,te),L.side=_n):ls(L,X,te)}this.compile=function(L,X,te=null){te===null&&(te=L),g=qe.get(te),g.init(),R.push(g),te.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),L!==te&&L.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(v._useLegacyLights);let ie=new Set;return L.traverse(function(K){let Te=K.material;if(Te)if(Array.isArray(Te))for(let Ae=0;Ae<Te.length;Ae++){let Fe=Te[Ae];yt(Fe,te,K),ie.add(Fe)}else yt(Te,te,K),ie.add(Te)}),R.pop(),g=null,ie},this.compileAsync=function(L,X,te=null){let ie=this.compile(L,X,te);return new Promise(K=>{function Te(){if(ie.forEach(function(Ae){nt.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){K(L);return}setTimeout(Te,10)}ze.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let bt=null;function _t(L){bt&&bt(L)}function Xt(){Jt.stop()}function Mt(){Jt.start()}let Jt=new rh;Jt.setAnimationLoop(_t),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(L){bt=L,rt.setAnimationLoop(L),L===null?Jt.stop():Jt.start()},rt.addEventListener("sessionstart",Xt),rt.addEventListener("sessionend",Mt),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(X),X=rt.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,X,O),g=qe.get(L,R.length),g.init(),R.push(g),j.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),P.setFromProjectionMatrix(j),H=this.localClippingEnabled,F=it.init(this.clippingPlanes,H),b=Re.get(L,p.length),b.init(),p.push(b),bn(L,X,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(q,W),this.info.render.frame++,F===!0&&it.beginShadows();let te=g.state.shadowsArray;if(fe.render(te,L,X),F===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),vt.render(b,L),g.setupLights(v._useLegacyLights),X.isArrayCamera){let ie=X.cameras;for(let K=0,Te=ie.length;K<Te;K++){let Ae=ie[K];kr(b,L,Ae,Ae.viewport)}}else kr(b,L,X);O!==null&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(v,L,X),et.resetDefaultState(),$=-1,C=null,R.pop(),R.length>0?g=R[R.length-1]:g=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function bn(L,X,te,ie){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||P.intersectsSprite(L)){ie&&ce.setFromMatrixPosition(L.matrixWorld).applyMatrix4(j);let Ae=me.update(L),Fe=L.material;Fe.visible&&b.push(L,Ae,Fe,te,ce.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||P.intersectsObject(L))){let Ae=me.update(L),Fe=L.material;if(ie&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ce.copy(L.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ce.copy(Ae.boundingSphere.center)),ce.applyMatrix4(L.matrixWorld).applyMatrix4(j)),Array.isArray(Fe)){let Xe=Ae.groups;for(let tt=0,Ke=Xe.length;tt<Ke;tt++){let Qe=Xe[tt],Dt=Fe[Qe.materialIndex];Dt&&Dt.visible&&b.push(L,Ae,Dt,te,ce.z,Qe)}}else Fe.visible&&b.push(L,Ae,Fe,te,ce.z,null)}}let Te=L.children;for(let Ae=0,Fe=Te.length;Ae<Fe;Ae++)bn(Te[Ae],X,te,ie)}function kr(L,X,te,ie){let K=L.opaque,Te=L.transmissive,Ae=L.transparent;g.setupLightsView(te),F===!0&&it.setGlobalState(v.clippingPlanes,te),Te.length>0&&fo(K,Te,X,te),ie&&Ne.viewport(N.copy(ie)),K.length>0&&os(K,X,te),Te.length>0&&os(Te,X,te),Ae.length>0&&os(Ae,X,te),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function fo(L,X,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let Te=Ze.isWebGL2;J===null&&(J=new ci(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?mr:Ti,minFilter:Ci,samples:Te?4:0})),v.getDrawingBufferSize(ge),Te?J.setSize(ge.x,ge.y):J.setSize(ba(ge.x),ba(ge.y));let Ae=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(oe),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let Fe=v.toneMapping;v.toneMapping=Ei,os(L,te,ie),I.updateMultisampleRenderTarget(J),I.updateRenderTargetMipmap(J);let Xe=!1;for(let tt=0,Ke=X.length;tt<Ke;tt++){let Qe=X[tt],Dt=Qe.object,an=Qe.geometry,Ft=Qe.material,Mn=Qe.group;if(Ft.side===_n&&Dt.layers.test(ie.layers)){let At=Ft.side;Ft.side=pn,Ft.needsUpdate=!0,Qs(Dt,te,ie,an,Ft,Mn),Ft.side=At,Ft.needsUpdate=!0,Xe=!0}}Xe===!0&&(I.updateMultisampleRenderTarget(J),I.updateRenderTargetMipmap(J)),v.setRenderTarget(Ae),v.setClearColor(oe,B),v.toneMapping=Fe}function os(L,X,te){let ie=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Te=L.length;K<Te;K++){let Ae=L[K],Fe=Ae.object,Xe=Ae.geometry,tt=ie===null?Ae.material:ie,Ke=Ae.group;Fe.layers.test(te.layers)&&Qs(Fe,X,te,Xe,tt,Ke)}}function Qs(L,X,te,ie,K,Te){L.onBeforeRender(v,X,te,ie,K,Te),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(v,X,te,ie,L,Te),K.transparent===!0&&K.side===_n&&K.forceSinglePass===!1?(K.side=pn,K.needsUpdate=!0,v.renderBufferDirect(te,X,ie,K,L,Te),K.side=Vn,K.needsUpdate=!0,v.renderBufferDirect(te,X,ie,K,L,Te),K.side=_n):v.renderBufferDirect(te,X,ie,K,L,Te),L.onAfterRender(v,X,te,ie,K,Te)}function ls(L,X,te){X.isScene!==!0&&(X=_e);let ie=nt.get(L),K=g.state.lights,Te=g.state.shadowsArray,Ae=K.state.version,Fe=ke.getParameters(L,K.state,Te,X,te),Xe=ke.getProgramCacheKey(Fe),tt=ie.programs;ie.environment=L.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(L.isMeshStandardMaterial?ee:w).get(L.envMap||ie.environment),tt===void 0&&(L.addEventListener("dispose",Se),tt=new Map,ie.programs=tt);let Ke=tt.get(Xe);if(Ke!==void 0){if(ie.currentProgram===Ke&&ie.lightsStateVersion===Ae)return Fr(L,Fe),Ke}else Fe.uniforms=ke.getUniforms(L),L.onBuild(te,Fe,v),L.onBeforeCompile(Fe,v),Ke=ke.acquireProgram(Fe,Xe),tt.set(Xe,Ke),ie.uniforms=Fe.uniforms;let Qe=ie.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=it.uniform),Fr(L,Fe),ie.needsLights=go(L),ie.lightsStateVersion=Ae,ie.needsLights&&(Qe.ambientLightColor.value=K.state.ambient,Qe.lightProbe.value=K.state.probe,Qe.directionalLights.value=K.state.directional,Qe.directionalLightShadows.value=K.state.directionalShadow,Qe.spotLights.value=K.state.spot,Qe.spotLightShadows.value=K.state.spotShadow,Qe.rectAreaLights.value=K.state.rectArea,Qe.ltc_1.value=K.state.rectAreaLTC1,Qe.ltc_2.value=K.state.rectAreaLTC2,Qe.pointLights.value=K.state.point,Qe.pointLightShadows.value=K.state.pointShadow,Qe.hemisphereLights.value=K.state.hemi,Qe.directionalShadowMap.value=K.state.directionalShadowMap,Qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qe.spotShadowMap.value=K.state.spotShadowMap,Qe.spotLightMatrix.value=K.state.spotLightMatrix,Qe.spotLightMap.value=K.state.spotLightMap,Qe.pointShadowMap.value=K.state.pointShadowMap,Qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=Ke,ie.uniformsList=null,Ke}function er(L){if(L.uniformsList===null){let X=L.currentProgram.getUniforms();L.uniformsList=Is.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Fr(L,X){let te=nt.get(L);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function po(L,X,te,ie,K){X.isScene!==!0&&(X=_e),I.resetTextureUnits();let Te=X.fog,Ae=ie.isMeshStandardMaterial?X.environment:null,Fe=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:li,Xe=(ie.isMeshStandardMaterial?ee:w).get(ie.envMap||Ae),tt=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ke=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!te.morphAttributes.position,Dt=!!te.morphAttributes.normal,an=!!te.morphAttributes.color,Ft=Ei;ie.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ft=v.toneMapping);let Mn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,At=Mn!==void 0?Mn.length:0,Je=nt.get(ie),tr=g.state.lights;if(F===!0&&(H===!0||L!==C)){let en=L===C&&ie.id===$;it.setState(ie,L,en)}let Lt=!1;ie.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==tr.state.version||Je.outputColorSpace!==Fe||K.isBatchedMesh&&Je.batching===!1||!K.isBatchedMesh&&Je.batching===!0||K.isInstancedMesh&&Je.instancing===!1||!K.isInstancedMesh&&Je.instancing===!0||K.isSkinnedMesh&&Je.skinning===!1||!K.isSkinnedMesh&&Je.skinning===!0||K.isInstancedMesh&&Je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Je.instancingColor===!1&&K.instanceColor!==null||Je.envMap!==Xe||ie.fog===!0&&Je.fog!==Te||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==it.numPlanes||Je.numIntersection!==it.numIntersection)||Je.vertexAlphas!==tt||Je.vertexTangents!==Ke||Je.morphTargets!==Qe||Je.morphNormals!==Dt||Je.morphColors!==an||Je.toneMapping!==Ft||Ze.isWebGL2===!0&&Je.morphTargetsCount!==At)&&(Lt=!0):(Lt=!0,Je.__version=ie.version);let Jn=Je.currentProgram;Lt===!0&&(Jn=ls(ie,X,K));let nr=!1,Bi=!1,ir=!1,$t=Jn.getUniforms(),zn=Je.uniforms;if(Ne.useProgram(Jn.program)&&(nr=!0,Bi=!0,ir=!0),ie.id!==$&&($=ie.id,Bi=!0),nr||C!==L){$t.setValue(Y,"projectionMatrix",L.projectionMatrix),$t.setValue(Y,"viewMatrix",L.matrixWorldInverse);let en=$t.map.cameraPosition;en!==void 0&&en.setValue(Y,ce.setFromMatrixPosition(L.matrixWorld)),Ze.logarithmicDepthBuffer&&$t.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&$t.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,Bi=!0,ir=!0)}if(K.isSkinnedMesh){$t.setOptional(Y,K,"bindMatrix"),$t.setOptional(Y,K,"bindMatrixInverse");let en=K.skeleton;en&&(Ze.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),$t.setValue(Y,"boneTexture",en.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&($t.setOptional(Y,K,"batchingTexture"),$t.setValue(Y,"batchingTexture",K._matricesTexture,I));let Ut=te.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0&&Ze.isWebGL2===!0)&&ot.update(K,te,Jn),(Bi||Je.receiveShadow!==K.receiveShadow)&&(Je.receiveShadow=K.receiveShadow,$t.setValue(Y,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(zn.envMap.value=Xe,zn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Bi&&($t.setValue(Y,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&mo(zn,ir),Te&&ie.fog===!0&&we.refreshFogUniforms(zn,Te),we.refreshMaterialUniforms(zn,ie,k,V,J),Is.upload(Y,er(Je),zn,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Is.upload(Y,er(Je),zn,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&$t.setValue(Y,"center",K.center),$t.setValue(Y,"modelViewMatrix",K.modelViewMatrix),$t.setValue(Y,"normalMatrix",K.normalMatrix),$t.setValue(Y,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let en=ie.uniformsGroups;for(let sr=0,Br=en.length;sr<Br;sr++)if(Ze.isWebGL2){let rr=en[sr];gt.update(rr,Jn),gt.bind(rr,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function mo(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function go(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,X,te){nt.get(L.texture).__webglTexture=X,nt.get(L.depthTexture).__webglTexture=te;let ie=nt.get(L);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,X){let te=nt.get(L);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,te=0){O=L,U=X,D=te;let ie=!0,K=null,Te=!1,Ae=!1;if(L){let Xe=nt.get(L);Xe.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(Y.FRAMEBUFFER,null),ie=!1):Xe.__webglFramebuffer===void 0?I.setupRenderTarget(L):Xe.__hasExternalTextures&&I.rebindTextures(L,nt.get(L.texture).__webglTexture,nt.get(L.depthTexture).__webglTexture);let tt=L.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ae=!0);let Ke=nt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?K=Ke[X][te]:K=Ke[X],Te=!0):Ze.isWebGL2&&L.samples>0&&I.useMultisampledRTT(L)===!1?K=nt.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?K=Ke[te]:K=Ke,N.copy(L.viewport),Q.copy(L.scissor),le=L.scissorTest}else N.copy(se).multiplyScalar(k).floor(),Q.copy(re).multiplyScalar(k).floor(),le=he;if(Ne.bindFramebuffer(Y.FRAMEBUFFER,K)&&Ze.drawBuffers&&ie&&Ne.drawBuffers(L,K),Ne.viewport(N),Ne.scissor(Q),Ne.setScissorTest(le),Te){let Xe=nt.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Xe.__webglTexture,te)}else if(Ae){let Xe=nt.get(L.texture),tt=X||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Xe.__webglTexture,te||0,tt)}$=-1},this.readRenderTargetPixels=function(L,X,te,ie,K,Te,Ae){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){Ne.bindFramebuffer(Y.FRAMEBUFFER,Fe);try{let Xe=L.texture,tt=Xe.format,Ke=Xe.type;if(tt!==wn&&Le.convert(tt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qe=Ke===mr&&(ze.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&ze.has("EXT_color_buffer_float"));if(Ke!==Ti&&Le.convert(Ke)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===ai&&(Ze.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-ie&&te>=0&&te<=L.height-K&&Y.readPixels(X,te,ie,K,Le.convert(tt),Le.convert(Ke),Te)}finally{let Xe=O!==null?nt.get(O).__webglFramebuffer:null;Ne.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(L,X,te=0){let ie=Math.pow(2,-te),K=Math.floor(X.image.width*ie),Te=Math.floor(X.image.height*ie);I.setTexture2D(X,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,te,0,0,L.x,L.y,K,Te),Ne.unbindTexture()},this.copyTextureToTexture=function(L,X,te,ie=0){let K=X.image.width,Te=X.image.height,Ae=Le.convert(te.format),Fe=Le.convert(te.type);I.setTexture2D(te,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,te.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,te.unpackAlignment),X.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ie,L.x,L.y,K,Te,Ae,Fe,X.image.data):X.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ie,L.x,L.y,X.mipmaps[0].width,X.mipmaps[0].height,Ae,X.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,ie,L.x,L.y,Ae,Fe,X.image),ie===0&&te.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(L,X,te,ie,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=L.max.x-L.min.x+1,Ae=L.max.y-L.min.y+1,Fe=L.max.z-L.min.z+1,Xe=Le.convert(ie.format),tt=Le.convert(ie.type),Ke;if(ie.isData3DTexture)I.setTexture3D(ie,0),Ke=Y.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)I.setTexture2DArray(ie,0),Ke=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ie.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ie.unpackAlignment);let Qe=Y.getParameter(Y.UNPACK_ROW_LENGTH),Dt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),an=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ft=Y.getParameter(Y.UNPACK_SKIP_ROWS),Mn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),At=te.isCompressedTexture?te.mipmaps[K]:te.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,At.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,At.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,L.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,L.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,L.min.z),te.isDataTexture||te.isData3DTexture?Y.texSubImage3D(Ke,K,X.x,X.y,X.z,Te,Ae,Fe,Xe,tt,At.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ke,K,X.x,X.y,X.z,Te,Ae,Fe,Xe,At.data)):Y.texSubImage3D(Ke,K,X.x,X.y,X.z,Te,Ae,Fe,Xe,tt,At),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Qe),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Dt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,an),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ft),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Mn),K===0&&ie.generateMipmaps&&Y.generateMipmap(Ke),Ne.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),Ne.unbindTexture()},this.resetState=function(){U=0,D=0,O=null,Ne.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Nl?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===ja?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Yi:eh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yi?kt:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},yl=class extends br{};yl.prototype.isWebGL1Renderer=!0;var Bs=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Lu=new G,Pu=new Et,Iu=new Et,ov=new G,Nu=new lt,ha=new G,$o=new Li,Du=new lt,jo=new vr,Na=class extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fc,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ha),this.boundingBox.expandByPoint(ha)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ha),this.boundingSphere.expandByPoint(ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(s),e.ray.intersectsSphere($o)!==!1&&(Du.copy(s).invert(),jo.copy(e.ray).applyMatrix4(Du),!(this.boundingBox!==null&&jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Pu.fromBufferAttribute(s.attributes.skinIndex,e),Iu.fromBufferAttribute(s.attributes.skinWeight,e),Lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Iu.getComponent(r);if(o!==0){let a=Pu.getComponent(r);Nu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ov.copy(Lu).applyMatrix4(Nu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Mr=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Da=class extends yn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Zt,u=Zt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uu=new lt,lv=new lt,Ua=class n{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lv;Uu.multiplyMatrices(a,t[r]),Uu.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Da(t,e,e,wn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mr),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Pi=class extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ou=new G,ku=new G,Fu=new lt,Yo=new vr,da=new Li,Ji=class extends Vt{constructor(e=new An,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ou.fromBufferAttribute(t,s-1),ku.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ou.distanceTo(ku);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Fu.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(Fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new G,u=new G,h=new G,d=new G,m=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){let p=Math.max(0,o.start),R=Math.min(_.count,o.start+o.count);for(let v=p,E=R-1;v<E;v+=m){let U=_.getX(v),D=_.getX(v+1);if(c.fromBufferAttribute(g,U),u.fromBufferAttribute(g,D),Yo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let $=e.ray.origin.distanceTo(d);$<e.near||$>e.far||t.push({distance:$,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),R=Math.min(g.count,o.start+o.count);for(let v=p,E=R-1;v<E;v+=m){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),Yo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Bu=new G,zu=new G,Oa=class extends Ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Bu.fromBufferAttribute(t,s),zu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bu.distanceTo(zu);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sr=class extends ui{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new st(16777215),this.specular=new st(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zi=class extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function fa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Hu(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function hh(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var zs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xl=class extends zs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hc:r=e,a=2*t-i;break;case Vc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hc:o=e,l=2*i-t;break;case Vc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-t)/(s-t),b=_*_,g=b*_,p=-d*g+2*d*b-d*_,R=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*_+1,v=(-1-m)*g+(1.5+m)*b+.5*_,E=m*g-m*b;for(let U=0;U!==a;++U)r[U]=p*o[u+U]+R*o[c+U]+v*o[l+U]+E*o[h+U];return r}},bl=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Ml=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&cv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,m=h+i;for(let _=0;_!==i;++_){let b=t[h+_];if(b!==t[d+_]||b!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ga;var Ii=class extends Cn{};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ma;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Cn{};ka.prototype.ValueTypeName="color";var Hs=class extends Cn{};Hs.prototype.ValueTypeName="number";var Sl=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},di=class extends Cn{InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};di.prototype.ValueTypeName="quaternion";di.prototype.DefaultInterpolation=ga;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Cn{};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ma;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends Cn{};fi.prototype.ValueTypeName="vector";var wr=class{constructor(e,t=-1,i,s=Gd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Di(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(dv(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Cn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=uv(l);l=Hu(l,1,u),c=Hu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Hs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,d,m,_,b){if(m.length!==0){let g=[],p=[];hh(m,g,p,_),g.length!==0&&b.push(new h(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let b=0;b<d[_].morphTargets.length;b++)m[d[_].morphTargets[b]]=-1;for(let b in m){let g=[],p=[];for(let R=0;R!==d[_].morphTargets.length;++R){let v=d[_];g.push(v.time),p.push(v.morphTarget===b?1:0)}s.push(new Hs(".morphTargetInfluence["+b+"]",g,p))}l=m.length*o}else{let m=".bones["+t[h].name+"]";i(fi,m+".position",d,"pos",s),i(di,m+".quaternion",d,"rot",s),i(fi,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hs;case"vector":case"vector2":case"vector3":case"vector4":return fi;case"color":return ka;case"quaternion":return di;case"bool":case"boolean":return Ii;case"string":return Ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function dv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hv(n.type);if(n.times===void 0){let t=[],i=[];hh(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Fa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Er=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}},fv=new Er,Wn=class{constructor(e){this.manager=e!==void 0?e:fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ii={},wl=class extends Error{constructor(e,t){super(e),this.response=t}},Tr=class extends Wn{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Fa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:i,onError:s});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ii[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0,b=0,g=new ReadableStream({start(p){R();function R(){h.read().then(({done:v,value:E})=>{if(v)p.close();else{b+=E.byteLength;let U=new ProgressEvent("progress",{lengthComputable:_,loaded:b,total:m});for(let D=0,O=u.length;D<O;D++){let $=u[D];$.onProgress&&$.onProgress(U)}p.enqueue(E),R()}})}}});return new Response(g)}else throw new wl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Fa.add(e,c);let u=ii[e];delete ii[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete ii[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var El=class extends Wn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fa.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=gr("img");function l(){u(),Fa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ba=class extends Wn{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new Da,a=new Tr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:sn,o.wrapT=c.wrapT!==void 0?c.wrapT:sn,o.magFilter=c.magFilter!==void 0?c.magFilter:cn,o.minFilter=c.minFilter!==void 0?c.minFilter:cn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ci),c.mipmapCount===1&&(o.minFilter=cn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},za=class extends Wn{constructor(e){super(e)}load(e,t,i,s){let r=new yn,o=new El(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ki=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ha=class extends Ki{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jo=new lt,Vu=new G,Gu=new G,Ar=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),Gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gu),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Tl=class extends Ar{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Va=class extends Ki{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Tl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wu=new lt,ur=new G,Zo=new G,Al=class extends Ar{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(ur),Zo.copy(i.position),Zo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zo),i.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Wu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}},Ga=class extends Ki{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Al}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Cl=class extends Ar{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Ki{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Cl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wa=class extends Ki{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var qa=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ol="\\[\\]\\.:\\/",pv=new RegExp("["+Ol+"]","g"),kl="[^"+Ol+"]",mv="[^"+Ol.replace("\\.","")+"]",gv=/((?:WC+[\/:])*)/.source.replace("WC",kl),vv=/(WCOD+)?/.source.replace("WCOD",mv),_v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),xv=new RegExp("^"+gv+vv+_v+yv+"$"),bv=["material","materials","bones","map"],Rl=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pv,"")}static parseTrackName(e){let t=xv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);bv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Rl;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);var Sv=["en","fr","ca","es"],It=(n,e)=>(n&&typeof n=="object"?n[e]||n.en||n.fr||Object.values(n).find(Boolean)||"":String(n||"")).trim(),qt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),wv={amp:"&",lt:"<",gt:">",quot:'"',"#39":"'",nbsp:" ",rsquo:"\u2019",lsquo:"\u2018",laquo:"\xAB",raquo:"\xBB"},Ev=n=>String(n||"").replace(/<\/(p|li|h3)>|<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&(#?\w+);/g,(e,t)=>wv[t]??e).split(`
`).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean),Ja=n=>Ev(String(n||"").split(/<h3/i)[0]).join(" "),Fl=(n,e)=>n.length<=e?n:n.slice(0,e).replace(/\s+\S*$/,"")+"\u2026",Bl=(n,e)=>e?/^https?:\/\//.test(e)?e:n+e.replace(/^\.?\//,""):"",Za={en:"Hand Coded is a Barcelona studio that designs and builds interactive art installations, immersive spaces and real-time software: light, sound, AI and our own tools.",fr:"Hand Coded est un studio de Barcelone qui con\xE7oit et construit des installations artistiques interactives, des espaces immersifs et des logiciels temps r\xE9el : lumi\xE8re, son, IA et nos propres outils.",ca:"Hand Coded \xE9s un estudi de Barcelona que dissenya i construeix instal\xB7lacions art\xEDstiques interactives, espais immersius i programari en temps real: llum, so, IA i les nostres pr\xF2pies eines.",es:"Hand Coded es un estudio de Barcelona que dise\xF1a y construye instalaciones art\xEDsticas interactivas, espacios inmersivos y software en tiempo real: luz, sonido, IA y nuestras propias herramientas."};function dh(n,e={}){let t=n.settings||{},i=t.seo||{},s=(i.url||e.base||"").replace(/\/?$/,"/"),r=t.defaultLang||"en",o=t.langs&&t.langs.length?t.langs:Sv,a=t.name||"Hand Coded",l=It(i.description,r)||Za[r]||Za.en,c=(n.sections||[]).filter(k=>k.visible!==!1),u=(n.posts||[]).filter(k=>k.published!==!1&&c.some(q=>q.id===k.section)),h=k=>k.thumb||((k.media||[]).find(q=>q&&q.src&&/\.(jpe?g|png|webp)(\?|$)/i.test(q.src))||{}).src||"",d=Bl(s,i.image||h(u.find(k=>h(k)&&!/^https?:/.test(h(k)))||{})||"assets/hc/ui/logo-default.svg"),m=u.filter(k=>(k.tags||[]).includes("core")),_=(t.offices||[])[0],b=_?(It(_.name,r)||"").split(",").pop().trim():"",g=_?[It(_.name,r),...(_.lines||[]).map(k=>String(k).replace(/,\s*$/,"")),_.mail].filter(Boolean).join(", "):"",p=(t.social||[]).map(k=>k&&(k.url||k.href||k.link)).filter(k=>/^https?:\/\//.test(k||"")),R=u.filter(k=>k.section===(c[0]||{}).id),v=`${a} \xB7 ${It({en:"interactive art and technology studio",fr:"studio d\u2019art et de technologies interactives",ca:"estudi d\u2019art i tecnologies interactives",es:"estudio de arte y tecnolog\xEDas interactivas"},r)}`,E={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":s+"#studio",name:a,url:s,logo:Bl(s,"assets/hc/ui/logo-default.svg"),description:l,...t.since||t.founded?{foundingDate:String(t.founded||t.since)}:{},...b?{address:{"@type":"PostalAddress",addressLocality:b}}:{},...m.length?{founder:m.map(k=>({"@type":"Person",name:It(k.title,r),jobTitle:It(k.subtitle,r)}))}:{},...p.length?{sameAs:p}:{}},{"@type":"ItemList",name:It((c[0]||{}).name,r)||"Work",itemListElement:R.map((k,q)=>({"@type":"ListItem",position:q+1,item:{"@type":"CreativeWork",name:It(k.title,r),url:s+"?p="+encodeURIComponent(k.id),...k.date?{dateCreated:String(k.date).match(/\d{4}/)?String(k.date).match(/\d{4}/)[0]:String(k.date)}:{},...Ja(It(k.body,r))?{description:Fl(Ja(It(k.body,r)),280)}:{},...h(k)?{image:Bl(s,h(k))}:{},...It(k.place,r)?{locationCreated:{"@type":"Place",name:It(k.place,r)}}:{},...k.author?{creator:{"@type":"Person",name:k.author}}:{},producer:{"@id":s+"#studio"}}}))}]},U=[`<title>${qt(v)}</title>`,`<meta name="description" content="${qt(l)}">`,`<link rel="canonical" href="${qt(s)}">`,...o.map(k=>`<link rel="alternate" hreflang="${k}" href="${qt(s+"?lang="+k)}">`),`<link rel="alternate" hreflang="x-default" href="${qt(s)}">`,'<meta property="og:type" content="website">',`<meta property="og:site_name" content="${qt(a)}">`,`<meta property="og:title" content="${qt(v)}">`,`<meta property="og:description" content="${qt(l)}">`,`<meta property="og:url" content="${qt(s)}">`,`<meta property="og:image" content="${qt(d)}">`,'<meta name="twitter:card" content="summary_large_image">',`<script type="application/ld+json">${JSON.stringify(E).replace(/</g,"\\u003c")}<\/script>`].join(`
`),D=k=>[It(k.subtitle,r),k.date,It(k.place,r)].filter(Boolean).join(" \xB7 "),O=[`<div id="seo-text" lang="${r}">`,`<h1>${qt(a)}</h1>`,`<p>${qt(l)}</p>`,...c.map(k=>{let q=u.filter(W=>W.section===k.id);return q.length?`<section><h2>${qt(It(k.name,r))}</h2>`+q.map(W=>{let se=Fl(Ja(It(W.body,r)),420);return`<article><h3><a href="?p=${qt(encodeURIComponent(W.id))}">${qt(It(W.title,r))}</a></h3>`+(D(W)?`<p>${qt(D(W))}</p>`:"")+(se?`<p>${qt(se)}</p>`:"")+"</article>"}).join("")+"</section>":""}),g?`<address>${qt(g)}</address>`:"",`<p>${o.map(k=>`<a href="?lang=${k}" hreflang="${k}">${k.toUpperCase()}</a>`).join(" ")}</p>`,"</div>"].filter(Boolean).join(`
`),$=[`# ${a}`,"",`> ${l}`,"",...m.length?["## "+It({en:"Founders",fr:"Fondateurs",ca:"Fundadors",es:"Fundadores"},r),...m.map(k=>`- ${It(k.title,r)}: ${It(k.subtitle,r)}`),""]:[],...c.flatMap(k=>{let q=u.filter(W=>W.section===k.id&&k.layout!=="map");return q.length?[`## ${It(k.name,r)}`,...q.map(W=>{let se=Fl(Ja(It(W.body,r)),300);return`- [${It(W.title,r)}](${s}?p=${encodeURIComponent(W.id)})${D(W)?`: ${D(W)}`:""}${se?`. ${se}`:""}`}),""]:[]}),...g?["## Contact",`- ${g}`,...p.map(k=>`- ${k}`),""]:[],...o.length>1?[`${It({en:"Other languages",fr:"Autres langues",ca:"Altres lleng\xFCes",es:"Otros idiomas"},r)}: ${o.map(k=>`${s}?lang=${k}`).join(" ")}`,""]:[]].join(`
`),C=(e.date||new Date).toISOString().slice(0,10),Q=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`+[s,...o.map(k=>s+"?lang="+k),...u.filter(k=>!(k.tags||[]).includes("partners")).map(k=>s+"?p="+encodeURIComponent(k.id))].map((k,q)=>`  <url><loc>${qt(k)}</loc><lastmod>${C}</lastmod><priority>${q===0?"1.0":q<=o.length?"0.8":"0.6"}</priority></url>`).join(`
`)+`
</urlset>
`,le=k=>{let q=[],W="";return String(k).split(/(?<=,)\s+/).forEach(se=>{W&&(W+" "+se).length>62?(q.push(W),W=se):W=W?W+" "+se:se}),W&&q.push(W),q},oe={};o.forEach(k=>{let q=It((t.home||{}).sub,k),W=/\n/.test(q)?q.split(/\n+/).map(se=>se.trim()).filter(Boolean):le(q);W.length&&(oe[k]=W)});let B=(()=>{let k=(t.typo||{}).sig2||{},q=String(k.font||"");if(!/^g:/.test(q))return null;let W=q.slice(2),se=k.italic?1:0,re=+(k.weight||400);return{fam:W,it:se,w:re,css:`https://fonts.googleapis.com/css2?family=${encodeURIComponent(W).replace(/%20/g,"+")}:ital,wght@${se},${re}&display=swap`}})(),Z={langs:o,def:r,lines:oe,f:B},V=Object.keys(oe).length?`<div id="hc-intro" class="hold" aria-hidden="true"><div class="ln"></div></div>
<script>(function(){var D=${JSON.stringify(Z).replace(/</g,"\\u003c")},el=document.getElementById('hc-intro');try{var q=new URLSearchParams(location.search);if(q.get('p')||!/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||'')||(matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)||!el.animate){el.remove();return;}var sv=null;try{sv=localStorage.getItem('hc-lang')}catch(e){}var nl=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(function(x){return String(x).toLowerCase().slice(0,2)});var ql=(q.get('lang')||'').toLowerCase(),has=function(l){return D.langs.indexOf(l)>=0},L=has(ql)?ql:has(sv)?sv:(nl.filter(has)[0]||D.def);var T=D.lines[L]||D.lines[D.def]||D.lines[Object.keys(D.lines)[0]],box=el.querySelector('.ln');if(D.f){box.style.fontFamily='"'+D.f.fam+'", var(--ui)';box.style.fontStyle=D.f.it?'italic':'normal';box.style.fontWeight=D.f.w;}T.forEach(function(t){var x=document.createElement('span');x.className='l';x.textContent=t;box.appendChild(x);});var go=function(){if(go.d)return;go.d=1;var at=0;for(var i=0;i<T.length;i++){box.children[i].animate([{opacity:0,transform:'translateX(-36px)',filter:'blur(6px)'},{opacity:1,transform:'none',filter:'blur(0)'}],{duration:1000,delay:at,easing:'cubic-bezier(.22,.61,.36,1)',fill:'both'});if(i===T.length-1)var va=at;at+=Math.max(650,Math.min(1700,120+16*T[i].length));}window.HC_INTRO={t0:performance.now(),video:va,depart:at+150};};if(D.f&&document.fonts){var k=document.createElement('link');k.rel='stylesheet';k.href=D.f.css;document.head.appendChild(k);document.fonts.load((D.f.it?'italic ':'')+D.f.w+' 30px "'+D.f.fam+'"').then(go,go);setTimeout(go,800);}else go();}catch(e){el.remove();}})();<\/script>`:"";return{head:U,body:O,llms:$,sitemap:Q,base:s,intro:V}}function fh(n,e){let t=(s,r,o)=>{let a=`<!--${r}-->`,l=`<!--/${r}-->`,c=s.indexOf(a),u=s.indexOf(l);return c>=0&&u>c?s.slice(0,c+a.length)+`
`+o+`
`+s.slice(u):s},i=t(t(n,"seo-head",e.head),"seo-body",e.body);return e.intro!=null&&(i.indexOf("<!--hc-intro-->")<0&&(i=i.replace("<body>",`<body>
<!--hc-intro-->
<!--/hc-intro-->`)),i=t(i,"hc-intro",e.intro)),i}var Cr=class extends Ba{constructor(e){super(e)}parse(e){function t(V){switch(V.image_type){case d:case b:if(V.colormap_length>256||V.colormap_size!==24||V.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case _:case g:case p:if(V.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+V.image_type)}if(V.width<=0||V.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(V.pixel_size!==8&&V.pixel_size!==16&&V.pixel_size!==24&&V.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+V.pixel_size)}function i(V,k,q,W,se){let re,he,P=q.pixel_size>>3,F=q.width*q.height*P;if(k&&(he=se.subarray(W,W+=q.colormap_length*(q.colormap_size>>3))),V){re=new Uint8Array(F);let H,J,j,ge=0,ce=new Uint8Array(P);for(;ge<F;)if(H=se[W++],J=(H&127)+1,H&128){for(j=0;j<P;++j)ce[j]=se[W++];for(j=0;j<J;++j)re.set(ce,ge+j*P);ge+=P*J}else{for(J*=P,j=0;j<J;++j)re[ge+j]=se[W++];ge+=J}}else re=se.subarray(W,W+=k?q.width*q.height:F);return{pixel_data:re,palettes:he}}function s(V,k,q,W,se,re,he,P,F){let H=F,J,j=0,ge,ce,_e=N.width;for(ce=k;ce!==W;ce+=q)for(ge=se;ge!==he;ge+=re,j++)J=P[j],V[(ge+_e*ce)*4+3]=255,V[(ge+_e*ce)*4+2]=H[J*3+0],V[(ge+_e*ce)*4+1]=H[J*3+1],V[(ge+_e*ce)*4+0]=H[J*3+2];return V}function r(V,k,q,W,se,re,he,P){let F,H=0,J,j,ge=N.width;for(j=k;j!==W;j+=q)for(J=se;J!==he;J+=re,H+=2)F=P[H+0]+(P[H+1]<<8),V[(J+ge*j)*4+0]=(F&31744)>>7,V[(J+ge*j)*4+1]=(F&992)>>2,V[(J+ge*j)*4+2]=(F&31)<<3,V[(J+ge*j)*4+3]=F&32768?0:255;return V}function o(V,k,q,W,se,re,he,P){let F=0,H,J,j=N.width;for(J=k;J!==W;J+=q)for(H=se;H!==he;H+=re,F+=3)V[(H+j*J)*4+3]=255,V[(H+j*J)*4+2]=P[F+0],V[(H+j*J)*4+1]=P[F+1],V[(H+j*J)*4+0]=P[F+2];return V}function a(V,k,q,W,se,re,he,P){let F=0,H,J,j=N.width;for(J=k;J!==W;J+=q)for(H=se;H!==he;H+=re,F+=4)V[(H+j*J)*4+2]=P[F+0],V[(H+j*J)*4+1]=P[F+1],V[(H+j*J)*4+0]=P[F+2],V[(H+j*J)*4+3]=P[F+3];return V}function l(V,k,q,W,se,re,he,P){let F,H=0,J,j,ge=N.width;for(j=k;j!==W;j+=q)for(J=se;J!==he;J+=re,H++)F=P[H],V[(J+ge*j)*4+0]=F,V[(J+ge*j)*4+1]=F,V[(J+ge*j)*4+2]=F,V[(J+ge*j)*4+3]=255;return V}function c(V,k,q,W,se,re,he,P){let F=0,H,J,j=N.width;for(J=k;J!==W;J+=q)for(H=se;H!==he;H+=re,F+=2)V[(H+j*J)*4+0]=P[F+0],V[(H+j*J)*4+1]=P[F+0],V[(H+j*J)*4+2]=P[F+0],V[(H+j*J)*4+3]=P[F+1];return V}function u(V,k,q,W,se){let re,he,P,F,H,J;switch((N.flags&R)>>v){default:case D:re=0,P=1,H=k,he=0,F=1,J=q;break;case E:re=0,P=1,H=k,he=q-1,F=-1,J=-1;break;case O:re=k-1,P=-1,H=-1,he=0,F=1,J=q;break;case U:re=k-1,P=-1,H=-1,he=q-1,F=-1,J=-1;break}if(oe)switch(N.pixel_size){case 8:l(V,he,F,J,re,P,H,W);break;case 16:c(V,he,F,J,re,P,H,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(N.pixel_size){case 8:s(V,he,F,J,re,P,H,W,se);break;case 16:r(V,he,F,J,re,P,H,W);break;case 24:o(V,he,F,J,re,P,H,W);break;case 32:a(V,he,F,J,re,P,H,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return V}let h=0,d=1,m=2,_=3,b=9,g=10,p=11,R=48,v=4,E=0,U=1,D=2,O=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let $=0,C=new Uint8Array(e),N={id_length:C[$++],colormap_type:C[$++],image_type:C[$++],colormap_index:C[$++]|C[$++]<<8,colormap_length:C[$++]|C[$++]<<8,colormap_size:C[$++],origin:[C[$++]|C[$++]<<8,C[$++]|C[$++]<<8],width:C[$++]|C[$++]<<8,height:C[$++]|C[$++]<<8,pixel_size:C[$++],flags:C[$++]};if(t(N),N.id_length+$>e.length)throw new Error("THREE.TGALoader: No data.");$+=N.id_length;let Q=!1,le=!1,oe=!1;switch(N.image_type){case b:Q=!0,le=!0;break;case d:le=!0;break;case g:Q=!0;break;case m:break;case p:Q=!0,oe=!0;break;case _:oe=!0;break}let B=new Uint8Array(N.width*N.height*4),Z=i(Q,le,N,$,C);return u(B,N.width,N.height,Z.pixel_data,Z.palettes),{data:B,width:N.width,height:N.height,flipY:!0,generateMipmaps:!0,minFilter:Ci}}};var Ka=class extends Wn{load(e,t,i,s){let r=this,o=r.path===""?qa.extractUrlBase(e):r.path,a=new Tr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(x,y){let S=[],M=x.childNodes;for(let A=0,ne=M.length;A<ne;A++){let ae=M[A];ae.nodeName===y&&S.push(ae)}return S}function s(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),S=new Array(y.length);for(let M=0,A=y.length;M<A;M++)S[M]=y[M];return S}function r(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),S=new Array(y.length);for(let M=0,A=y.length;M<A;M++)S[M]=parseFloat(y[M]);return S}function o(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),S=new Array(y.length);for(let M=0,A=y.length;M<A;M++)S[M]=parseInt(y[M]);return S}function a(x){return x.substring(1)}function l(){return"three_default_"+Zh++}function c(x){return Object.keys(x).length===0}function u(x){return{unit:h(i(x,"unit")[0]),upAxis:d(i(x,"up_axis")[0])}}function h(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function d(x){return x!==void 0?x.textContent:"Y_UP"}function m(x,y,S,M){let A=i(x,y)[0];if(A!==void 0){let ne=i(A,S);for(let ae=0;ae<ne.length;ae++)M(ne[ae])}}function _(x,y){for(let S in x){let M=x[S];M.build=y(x[S])}}function b(x,y){return x.build!==void 0||(x.build=y(x)),x.build}function g(x){let y={sources:{},samplers:{},channels:{}},S=!1;for(let M=0,A=x.childNodes.length;M<A;M++){let ne=x.childNodes[M];if(ne.nodeType!==1)continue;let ae;switch(ne.nodeName){case"source":ae=ne.getAttribute("id"),y.sources[ae]=z(ne);break;case"sampler":ae=ne.getAttribute("id"),y.samplers[ae]=p(ne);break;case"channel":ae=ne.getAttribute("target"),y.channels[ae]=R(ne);break;case"animation":g(ne),S=!0;break;default:console.log(ne)}}S===!1&&($e.animations[x.getAttribute("id")||Gs.generateUUID()]=y)}function p(x){let y={inputs:{}};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"input":let ne=a(A.getAttribute("source")),ae=A.getAttribute("semantic");y.inputs[ae]=ne;break}}return y}function R(x){let y={},M=x.getAttribute("target").split("/"),A=M.shift(),ne=M.shift(),ae=ne.indexOf("(")!==-1,Ce=ne.indexOf(".")!==-1;if(Ce)M=ne.split("."),ne=M.shift(),y.member=M.shift();else if(ae){let ye=ne.split("(");ne=ye.shift();for(let Ee=0;Ee<ye.length;Ee++)ye[Ee]=parseInt(ye[Ee].replace(/\)/,""));y.indices=ye}return y.id=A,y.sid=ne,y.arraySyntax=ae,y.memberSyntax=Ce,y.sampler=a(x.getAttribute("source")),y}function v(x){let y=[],S=x.channels,M=x.samplers,A=x.sources;for(let ne in S)if(S.hasOwnProperty(ne)){let ae=S[ne],Ce=M[ae.sampler],ye=Ce.inputs.INPUT,Ee=Ce.inputs.OUTPUT,Oe=A[ye],ue=A[Ee],De=U(ae,Oe,ue);N(De,y)}return y}function E(x){return b($e.animations[x],v)}function U(x,y,S){let M=$e.nodes[x.id],A=Je(M.id),ne=M.transforms[x.sid],ae=M.matrix.clone().transpose(),Ce,ye,Ee,Oe,ue,De,Pe={};switch(ne){case"matrix":for(Ee=0,Oe=y.array.length;Ee<Oe;Ee++)if(Ce=y.array[Ee],ye=Ee*S.stride,Pe[Ce]===void 0&&(Pe[Ce]={}),x.arraySyntax===!0){let Ot=S.array[ye],xt=x.indices[0]+4*x.indices[1];Pe[Ce][xt]=Ot}else for(ue=0,De=S.stride;ue<De;ue++)Pe[Ce][ue]=S.array[ye+ue];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ne);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ne);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ne);break}let Ge=D(Pe,ae);return{name:A.uuid,keyframes:Ge}}function D(x,y){let S=[];for(let A in x)S.push({time:parseFloat(A),value:x[A]});S.sort(M);for(let A=0;A<16;A++)Q(S,A,y.elements[A]);return S;function M(A,ne){return A.time-ne.time}}let O=new G,$=new G,C=new Gn;function N(x,y){let S=x.keyframes,M=x.name,A=[],ne=[],ae=[],Ce=[];for(let ye=0,Ee=S.length;ye<Ee;ye++){let Oe=S[ye],ue=Oe.time,De=Oe.value;Ae.fromArray(De).transpose(),Ae.decompose(O,C,$),A.push(ue),ne.push(O.x,O.y,O.z),ae.push(C.x,C.y,C.z,C.w),Ce.push($.x,$.y,$.z)}return ne.length>0&&y.push(new fi(M+".position",A,ne)),ae.length>0&&y.push(new di(M+".quaternion",A,ae)),Ce.length>0&&y.push(new fi(M+".scale",A,Ce)),y}function Q(x,y,S){let M,A=!0,ne,ae;for(ne=0,ae=x.length;ne<ae;ne++)M=x[ne],M.value[y]===void 0?M.value[y]=null:A=!1;if(A===!0)for(ne=0,ae=x.length;ne<ae;ne++)M=x[ne],M.value[y]=S;else le(x,y)}function le(x,y){let S,M;for(let A=0,ne=x.length;A<ne;A++){let ae=x[A];if(ae.value[y]===null){if(S=oe(x,A,y),M=B(x,A,y),S===null){ae.value[y]=M.value[y];continue}if(M===null){ae.value[y]=S.value[y];continue}Z(ae,S,M,y)}}}function oe(x,y,S){for(;y>=0;){let M=x[y];if(M.value[S]!==null)return M;y--}return null}function B(x,y,S){for(;y<x.length;){let M=x[y];if(M.value[S]!==null)return M;y++}return null}function Z(x,y,S,M){if(S.time-y.time===0){x.value[M]=y.value[M];return}x.value[M]=(x.time-y.time)*(S.value[M]-y.value[M])/(S.time-y.time)+y.value[M]}function V(x){let y={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":y.animations.push(a(A.getAttribute("url")));break}}$e.clips[x.getAttribute("id")]=y}function k(x){let y=[],S=x.name,M=x.end-x.start||-1,A=x.animations;for(let ne=0,ae=A.length;ne<ae;ne++){let Ce=E(A[ne]);for(let ye=0,Ee=Ce.length;ye<Ee;ye++)y.push(Ce[ye])}return new wr(S,M,y)}function q(x){return b($e.clips[x],k)}function W(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"skin":y.id=a(A.getAttribute("source")),y.skin=se(A);break;case"morph":y.id=a(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$e.controllers[x.getAttribute("id")]=y}function se(x){let y={sources:{}};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(A.textContent);break;case"source":let ne=A.getAttribute("id");y.sources[ne]=z(A);break;case"joints":y.joints=re(A);break;case"vertex_weights":y.vertexWeights=he(A);break}}return y}function re(x){let y={inputs:{}};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"input":let ne=A.getAttribute("semantic"),ae=a(A.getAttribute("source"));y.inputs[ne]=ae;break}}return y}function he(x){let y={inputs:{}};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"input":let ne=A.getAttribute("semantic"),ae=a(A.getAttribute("source")),Ce=parseInt(A.getAttribute("offset"));y.inputs[ne]={id:ae,offset:Ce};break;case"vcount":y.vcount=o(A.textContent);break;case"v":y.v=o(A.textContent);break}}return y}function P(x){let y={id:x.id},S=$e.geometries[y.id];return x.skin!==void 0&&(y.skin=F(x.skin),S.sources.skinIndices=y.skin.indices,S.sources.skinWeights=y.skin.weights),y}function F(x){let S={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=x.sources,A=x.vertexWeights,ne=A.vcount,ae=A.v,Ce=A.inputs.JOINT.offset,ye=A.inputs.WEIGHT.offset,Ee=x.sources[x.joints.inputs.JOINT],Oe=x.sources[x.joints.inputs.INV_BIND_MATRIX],ue=M[A.inputs.WEIGHT.id].array,De=0,Pe,Ge,Be;for(Pe=0,Be=ne.length;Pe<Be;Pe++){let xt=ne[Pe],pt=[];for(Ge=0;Ge<xt;Ge++){let mt=ae[De+Ce],Zn=ae[De+ye],dn=ue[Zn];pt.push({index:mt,weight:dn}),De+=2}for(pt.sort(Ot),Ge=0;Ge<4;Ge++){let mt=pt[Ge];mt!==void 0?(S.indices.array.push(mt.index),S.weights.array.push(mt.weight)):(S.indices.array.push(0),S.weights.array.push(0))}}for(x.bindShapeMatrix?S.bindMatrix=new lt().fromArray(x.bindShapeMatrix).transpose():S.bindMatrix=new lt().identity(),Pe=0,Be=Ee.array.length;Pe<Be;Pe++){let xt=Ee.array[Pe],pt=new lt().fromArray(Oe.array,Pe*Oe.stride).transpose();S.joints.push({name:xt,boneInverse:pt})}return S;function Ot(xt,pt){return pt.weight-xt.weight}}function H(x){return b($e.controllers[x],P)}function J(x){let y={init_from:i(x,"init_from")[0].textContent};$e.images[x.getAttribute("id")]=y}function j(x){return x.build!==void 0?x.build:x.init_from}function ge(x){let y=$e.images[x];return y!==void 0?b(y,j):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function ce(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":y.profile=_e(A);break}}$e.effects[x.getAttribute("id")]=y}function _e(x){let y={surfaces:{},samplers:{}};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"newparam":Ie(A,y);break;case"technique":y.technique=ze(A);break;case"extra":y.extra=w(A);break}}return y}function Ie(x,y){let S=x.getAttribute("sid");for(let M=0,A=x.childNodes.length;M<A;M++){let ne=x.childNodes[M];if(ne.nodeType===1)switch(ne.nodeName){case"surface":y.surfaces[S]=Y(ne);break;case"sampler2D":y.samplers[S]=Ct(ne);break}}}function Y(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"init_from":y.init_from=A.textContent;break}}return y}function Ct(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"source":y.source=A.textContent;break}}return y}function ze(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=A.nodeName,y.parameters=Ze(A);break;case"extra":y.extra=w(A);break}}return y}function Ze(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[A.nodeName]=Ne(A);break;case"transparent":y[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:Ne(A)};break}}return y}function Ne(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"color":y[A.nodeName]=r(A.textContent);break;case"float":y[A.nodeName]=parseFloat(A.textContent);break;case"texture":y[A.nodeName]={id:A.getAttribute("texture"),extra:Tt(A)};break}}return y}function Tt(x){let y={technique:{}};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"extra":nt(A,y);break}}return y}function nt(x,y){for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"technique":I(A,y);break}}}function I(x,y){for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?y.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?y.technique[A.nodeName]=0:y.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=pe(A);break}}}function w(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"technique":y.technique=ee(A);break}}return y}function ee(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"double_sided":y[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=pe(A);break}}return y}function pe(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"texture":y[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Tt(A)};break}}return y}function de(x){return x}function me(x){return b($e.effects[x],de)}function ke(x){let y={name:x.getAttribute("name")};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":y.url=a(A.getAttribute("url"));break}}$e.materials[x.getAttribute("id")]=y}function we(x){let y,S=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(S=S.toLowerCase(),S){case"tga":y=vo;break;default:y=rr}return y}function Re(x){let y=me(x.url),S=y.profile.technique,M;switch(S.type){case"phong":case"blinn":M=new Sr;break;case"lambert":M=new Zi;break;default:M=new Un;break}M.name=x.name||"";function A(ye,Ee=null){let Oe=y.profile.samplers[ye.id],ue=null;if(Oe!==void 0){let De=y.profile.surfaces[Oe.source];ue=ge(De.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ue=ge(ye.id);if(ue!==null){let De=we(ue);if(De!==void 0){let Pe=De.load(ue),Ge=ye.extra;if(Ge!==void 0&&Ge.technique!==void 0&&c(Ge.technique)===!1){let Be=Ge.technique;Pe.wrapS=Be.wrapU?Ai:sn,Pe.wrapT=Be.wrapV?Ai:sn,Pe.offset.set(Be.offsetU||0,Be.offsetV||0),Pe.repeat.set(Be.repeatU||1,Be.repeatV||1)}else Pe.wrapS=Ai,Pe.wrapT=Ai;return Ee!==null&&(Pe.colorSpace=Ee),Pe}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ue),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ye.id),null}let ne=S.parameters;for(let ye in ne){let Ee=ne[ye];switch(ye){case"diffuse":Ee.color&&M.color.fromArray(Ee.color),Ee.texture&&(M.map=A(Ee.texture,kt));break;case"specular":Ee.color&&M.specular&&M.specular.fromArray(Ee.color),Ee.texture&&(M.specularMap=A(Ee.texture));break;case"bump":Ee.texture&&(M.normalMap=A(Ee.texture));break;case"ambient":Ee.texture&&(M.lightMap=A(Ee.texture,kt));break;case"shininess":Ee.float&&M.shininess&&(M.shininess=Ee.float);break;case"emission":Ee.color&&M.emissive&&M.emissive.fromArray(Ee.color),Ee.texture&&(M.emissiveMap=A(Ee.texture,kt));break}}M.color.convertSRGBToLinear(),M.specular&&M.specular.convertSRGBToLinear(),M.emissive&&M.emissive.convertSRGBToLinear();let ae=ne.transparent,Ce=ne.transparency;if(Ce===void 0&&ae&&(Ce={float:1}),ae===void 0&&Ce&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Ce)if(ae.data.texture)M.transparent=!0;else{let ye=ae.data.color;switch(ae.opaque){case"A_ONE":M.opacity=ye[3]*Ce.float;break;case"RGB_ZERO":M.opacity=1-ye[0]*Ce.float;break;case"A_ZERO":M.opacity=1-ye[3]*Ce.float;break;case"RGB_ONE":M.opacity=ye[0]*Ce.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}M.opacity<1&&(M.transparent=!0)}if(S.extra!==void 0&&S.extra.technique!==void 0){let ye=S.extra.technique;for(let Ee in ye){let Oe=ye[Ee];switch(Ee){case"double_sided":M.side=Oe===1?_n:Vn;break;case"bump":M.normalMap=A(Oe.texture),M.normalScale=new ft(1,1);break}}}return M}function qe(x){return b($e.materials[x],Re)}function it(x){let y={name:x.getAttribute("name")};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"optics":y.optics=fe(A);break}}$e.cameras[x.getAttribute("id")]=y}function fe(x){for(let y=0;y<x.childNodes.length;y++){let S=x.childNodes[y];switch(S.nodeName){case"technique_common":return vt(S)}}return{}}function vt(x){let y={};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];switch(M.nodeName){case"perspective":case"orthographic":y.technique=M.nodeName,y.parameters=ot(M);break}}return y}function ot(x){let y={};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[M.nodeName]=parseFloat(M.textContent);break}}return y}function Ye(x){let y;switch(x.optics.technique){case"perspective":y=new zt(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let S=x.optics.parameters.ymag,M=x.optics.parameters.xmag,A=x.optics.parameters.aspect_ratio;M=M===void 0?S*A:M,S=S===void 0?M/A:S,M*=.5,S*=.5,y=new Fs(-M,M,S,-S,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:y=new zt;break}return y.name=x.name||"",y}function He(x){let y=$e.cameras[x];return y!==void 0?b(y,Ye):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function Le(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"technique_common":y=et(A);break}}$e.lights[x.getAttribute("id")]=y}function et(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=A.nodeName,y.parameters=gt(A)}}return y}function gt(x){let y={};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"color":let ne=r(A.textContent);y.color=new st().fromArray(ne).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let ae=parseFloat(A.textContent);y.distance=ae?Math.sqrt(1/ae):0;break}}return y}function Rt(x){let y;switch(x.technique){case"directional":y=new Vs;break;case"point":y=new Ga;break;case"spot":y=new Va;break;case"ambient":y=new Wa;break}return x.parameters.color&&y.color.copy(x.parameters.color),x.parameters.distance&&(y.distance=x.parameters.distance),y}function rt(x){let y=$e.lights[x];return y!==void 0?b(y,Rt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function ve(x){let y={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},S=i(x,"mesh")[0];if(S!==void 0){for(let M=0;M<S.childNodes.length;M++){let A=S.childNodes[M];if(A.nodeType!==1)continue;let ne=A.getAttribute("id");switch(A.nodeName){case"source":y.sources[ne]=z(A);break;case"vertices":y.vertices=Me(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(Se(A));break;default:console.log(A)}}$e.geometries[x.getAttribute("id")]=y}}function z(x){let y={array:[],stride:3};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"float_array":y.array=r(M.textContent);break;case"Name_array":y.array=s(M.textContent);break;case"technique_common":let A=i(M,"accessor")[0];A!==void 0&&(y.stride=parseInt(A.getAttribute("stride")));break}}return y}function Me(x){let y={};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];M.nodeType===1&&(y[M.getAttribute("semantic")]=a(M.getAttribute("source")))}return y}function Se(x){let y={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let S=0,M=x.childNodes.length;S<M;S++){let A=x.childNodes[S];if(A.nodeType===1)switch(A.nodeName){case"input":let ne=a(A.getAttribute("source")),ae=A.getAttribute("semantic"),Ce=parseInt(A.getAttribute("offset")),ye=parseInt(A.getAttribute("set")),Ee=ye>0?ae+ye:ae;y.inputs[Ee]={id:ne,offset:Ce},y.stride=Math.max(y.stride,Ce+1),ae==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=o(A.textContent);break;case"p":y.p=o(A.textContent);break}}return y}function je(x){let y={};for(let S=0;S<x.length;S++){let M=x[S];y[M.type]===void 0&&(y[M.type]=[]),y[M.type].push(M)}return y}function We(x){let y=0;for(let S=0,M=x.length;S<M;S++)x[S].hasUV===!0&&y++;y>0&&y<x.length&&(x.uvsNeedsFix=!0)}function yt(x){let y={},S=x.sources,M=x.vertices,A=x.primitives;if(A.length===0)return{};let ne=je(A);for(let ae in ne){let Ce=ne[ae];We(Ce),y[ae]=bt(Ce,S,M)}return y}function bt(x,y,S){let M={},A={array:[],stride:0},ne={array:[],stride:0},ae={array:[],stride:0},Ce={array:[],stride:0},ye={array:[],stride:0},Ee={array:[],stride:4},Oe={array:[],stride:4},ue=new An,De=[],Pe=0;for(let Ge=0;Ge<x.length;Ge++){let Be=x[Ge],Ot=Be.inputs,xt=0;switch(Be.type){case"lines":case"linestrips":xt=Be.count*2;break;case"triangles":xt=Be.count*3;break;case"polylist":for(let pt=0;pt<Be.count;pt++){let mt=Be.vcount[pt];switch(mt){case 3:xt+=3;break;case 4:xt+=6;break;default:xt+=(mt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Be.type)}ue.addGroup(Pe,xt,Ge),Pe+=xt,Be.material&&De.push(Be.material);for(let pt in Ot){let mt=Ot[pt];switch(pt){case"VERTEX":for(let Zn in S){let dn=S[Zn];switch(Zn){case"POSITION":let cs=A.array.length;if(_t(Be,y[dn],mt.offset,A.array),A.stride=y[dn].stride,y.skinWeights&&y.skinIndices&&(_t(Be,y.skinIndices,mt.offset,Ee.array),_t(Be,y.skinWeights,mt.offset,Oe.array)),Be.hasUV===!1&&x.uvsNeedsFix===!0){let Kh=(A.array.length-cs)/A.stride;for(let ac=0;ac<Kh;ac++)ae.array.push(0,0)}break;case"NORMAL":_t(Be,y[dn],mt.offset,ne.array),ne.stride=y[dn].stride;break;case"COLOR":_t(Be,y[dn],mt.offset,ye.array),ye.stride=y[dn].stride;break;case"TEXCOORD":_t(Be,y[dn],mt.offset,ae.array),ae.stride=y[dn].stride;break;case"TEXCOORD1":_t(Be,y[dn],mt.offset,Ce.array),ae.stride=y[dn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Zn)}}break;case"NORMAL":_t(Be,y[mt.id],mt.offset,ne.array),ne.stride=y[mt.id].stride;break;case"COLOR":_t(Be,y[mt.id],mt.offset,ye.array,!0),ye.stride=y[mt.id].stride;break;case"TEXCOORD":_t(Be,y[mt.id],mt.offset,ae.array),ae.stride=y[mt.id].stride;break;case"TEXCOORD1":_t(Be,y[mt.id],mt.offset,Ce.array),Ce.stride=y[mt.id].stride;break}}}return A.array.length>0&&ue.setAttribute("position",new Ht(A.array,A.stride)),ne.array.length>0&&ue.setAttribute("normal",new Ht(ne.array,ne.stride)),ye.array.length>0&&ue.setAttribute("color",new Ht(ye.array,ye.stride)),ae.array.length>0&&ue.setAttribute("uv",new Ht(ae.array,ae.stride)),Ce.array.length>0&&ue.setAttribute("uv1",new Ht(Ce.array,Ce.stride)),Ee.array.length>0&&ue.setAttribute("skinIndex",new Ht(Ee.array,Ee.stride)),Oe.array.length>0&&ue.setAttribute("skinWeight",new Ht(Oe.array,Oe.stride)),M.data=ue,M.type=x[0].type,M.materialKeys=De,M}function _t(x,y,S,M,A=!1){let ne=x.p,ae=x.stride,Ce=x.vcount;function ye(ue){let De=ne[ue+S]*Oe,Pe=De+Oe;for(;De<Pe;De++)M.push(Ee[De]);if(A){let Ge=M.length-Oe-1;zr.setRGB(M[Ge+0],M[Ge+1],M[Ge+2]).convertSRGBToLinear(),M[Ge+0]=zr.r,M[Ge+1]=zr.g,M[Ge+2]=zr.b}}let Ee=y.array,Oe=y.stride;if(x.vcount!==void 0){let ue=0;for(let De=0,Pe=Ce.length;De<Pe;De++){let Ge=Ce[De];if(Ge===4){let Be=ue+ae*0,Ot=ue+ae*1,xt=ue+ae*2,pt=ue+ae*3;ye(Be),ye(Ot),ye(pt),ye(Ot),ye(xt),ye(pt)}else if(Ge===3){let Be=ue+ae*0,Ot=ue+ae*1,xt=ue+ae*2;ye(Be),ye(Ot),ye(xt)}else if(Ge>4)for(let Be=1,Ot=Ge-2;Be<=Ot;Be++){let xt=ue+ae*0,pt=ue+ae*Be,mt=ue+ae*(Be+1);ye(xt),ye(pt),ye(mt)}ue+=ae*Ge}}else for(let ue=0,De=ne.length;ue<De;ue+=ae)ye(ue)}function Xt(x){return b($e.geometries[x],yt)}function Mt(x){let y={name:x.getAttribute("name")||"",joints:{},links:[]};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"technique_common":kr(M,y);break}}$e.kinematicsModels[x.getAttribute("id")]=y}function Jt(x){return x.build!==void 0?x.build:x}function bn(x){return b($e.kinematicsModels[x],Jt)}function kr(x,y){for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"joint":y.joints[M.getAttribute("sid")]=fo(M);break;case"link":y.links.push(Qs(M));break}}}function fo(x){let y;for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":y=os(M);break}}return y}function os(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new G,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=r(M.textContent);y.axis.fromArray(A);break;case"limits":let ne=M.getElementsByTagName("max")[0],ae=M.getElementsByTagName("min")[0];y.limits.max=parseFloat(ne.textContent),y.limits.min=parseFloat(ae.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function Qs(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":y.attachments.push(ls(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(er(M));break}}return y}function ls(x){let y={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"link":y.links.push(Qs(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(er(M));break}}return y}function er(x){let y={type:x.nodeName},S=r(x.textContent);switch(y.type){case"matrix":y.obj=new lt,y.obj.fromArray(S).transpose();break;case"translate":y.obj=new G,y.obj.fromArray(S);break;case"rotate":y.obj=new G,y.obj.fromArray(S),y.angle=Gs.degToRad(S[3]);break}return y}function Fr(x){let y={name:x.getAttribute("name")||"",rigidBodies:{}};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":y.rigidBodies[M.getAttribute("name")]={},po(M,y.rigidBodies[M.getAttribute("name")]);break}}$e.physicsModels[x.getAttribute("id")]=y}function po(x,y){for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"technique_common":mo(M,y);break}}}function mo(x,y){for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"inertia":y.inertia=r(M.textContent);break;case"mass":y.mass=r(M.textContent)[0];break}}}function go(x){let y={bindJointAxis:[]};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":y.bindJointAxis.push(L(M));break}}$e.kinematicsScenes[a(x.getAttribute("url"))]=y}function L(x){let y={target:x.getAttribute("target").split("/").pop()};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=M.getElementsByTagName("param")[0];y.axis=A.textContent;let ne=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=ne.substring(0,ne.length-1);break}}return y}function X(x){return x.build!==void 0?x.build:x}function te(x){return b($e.kinematicsScenes[x],X)}function ie(){let x=Object.keys($e.kinematicsModels)[0],y=Object.keys($e.kinematicsScenes)[0],S=Object.keys($e.visualScenes)[0];if(x===void 0||y===void 0)return;let M=bn(x),A=te(y),ne=nr(S),ae=A.bindJointAxis,Ce={};for(let Oe=0,ue=ae.length;Oe<ue;Oe++){let De=ae[Oe],Pe=Ut.querySelector('[sid="'+De.target+'"]');if(Pe){let Ge=Pe.parentElement;ye(De.jointIndex,Ge)}}function ye(Oe,ue){let De=ue.getAttribute("name"),Pe=M.joints[Oe];ne.traverse(function(Ge){Ge.name===De&&(Ce[Oe]={object:Ge,transforms:K(ue),joint:Pe,position:Pe.zeroPosition})})}let Ee=new lt;rc={joints:M&&M.joints,getJointValue:function(Oe){let ue=Ce[Oe];if(ue)return ue.position;console.warn("THREE.ColladaLoader: Joint "+Oe+" doesn't exist.")},setJointValue:function(Oe,ue){let De=Ce[Oe];if(De){let Pe=De.joint;if(ue>Pe.limits.max||ue<Pe.limits.min)console.warn("THREE.ColladaLoader: Joint "+Oe+" value "+ue+" outside of limits (min: "+Pe.limits.min+", max: "+Pe.limits.max+").");else if(Pe.static)console.warn("THREE.ColladaLoader: Joint "+Oe+" is static.");else{let Ge=De.object,Be=Pe.axis,Ot=De.transforms;Ae.identity();for(let xt=0;xt<Ot.length;xt++){let pt=Ot[xt];if(pt.sid&&pt.sid.indexOf(Oe)!==-1)switch(Pe.type){case"revolute":Ae.multiply(Ee.makeRotationAxis(Be,Gs.degToRad(ue)));break;case"prismatic":Ae.multiply(Ee.makeTranslation(Be.x*ue,Be.y*ue,Be.z*ue));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Pe.type);break}else switch(pt.type){case"matrix":Ae.multiply(pt.obj);break;case"translate":Ae.multiply(Ee.makeTranslation(pt.obj.x,pt.obj.y,pt.obj.z));break;case"scale":Ae.scale(pt.obj);break;case"rotate":Ae.multiply(Ee.makeRotationAxis(pt.obj,pt.angle));break}}Ge.matrix.copy(Ae),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ce[Oe].position=ue}}else console.log("THREE.ColladaLoader: "+Oe+" does not exist.")}}}function K(x){let y=[],S=Ut.querySelector('[id="'+x.id+'"]');for(let M=0;M<S.childNodes.length;M++){let A=S.childNodes[M];if(A.nodeType!==1)continue;let ne,ae;switch(A.nodeName){case"matrix":ne=r(A.textContent);let Ce=new lt().fromArray(ne).transpose();y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Ce});break;case"translate":case"scale":ne=r(A.textContent),ae=new G().fromArray(ne),y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ae});break;case"rotate":ne=r(A.textContent),ae=new G().fromArray(ne);let ye=Gs.degToRad(ne[3]);y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ae,angle:ye});break}}return y}function Te(x){let y=x.getElementsByTagName("node");for(let S=0;S<y.length;S++){let M=y[S];M.hasAttribute("id")===!1&&M.setAttribute("id",l())}}let Ae=new lt,Fe=new G;function Xe(x){let y={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];if(M.nodeType!==1)continue;let A;switch(M.nodeName){case"node":y.nodes.push(M.getAttribute("id")),Xe(M);break;case"instance_camera":y.instanceCameras.push(a(M.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(tt(M));break;case"instance_light":y.instanceLights.push(a(M.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(tt(M));break;case"instance_node":y.instanceNodes.push(a(M.getAttribute("url")));break;case"matrix":A=r(M.textContent),y.matrix.multiply(Ae.fromArray(A).transpose()),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":A=r(M.textContent),Fe.fromArray(A),y.matrix.multiply(Ae.makeTranslation(Fe.x,Fe.y,Fe.z)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":A=r(M.textContent);let ne=Gs.degToRad(A[3]);y.matrix.multiply(Ae.makeRotationAxis(Fe.fromArray(A),ne)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":A=r(M.textContent),y.matrix.scale(Fe.fromArray(A)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return At(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):$e.nodes[y.id]=y,y}function tt(x){let y={id:a(x.getAttribute("url")),materials:{},skeletons:[]};for(let S=0;S<x.childNodes.length;S++){let M=x.childNodes[S];switch(M.nodeName){case"bind_material":let A=M.getElementsByTagName("instance_material");for(let ne=0;ne<A.length;ne++){let ae=A[ne],Ce=ae.getAttribute("symbol"),ye=ae.getAttribute("target");y.materials[Ce]=a(ye)}break;case"skeleton":y.skeletons.push(a(M.textContent));break;default:break}}return y}function Ke(x,y){let S=[],M=[],A,ne,ae;for(A=0;A<x.length;A++){let Ee=x[A],Oe;if(At(Ee))Oe=Je(Ee),Qe(Oe,y,S);else if(Jn(Ee)){let De=$e.visualScenes[Ee].children;for(let Pe=0;Pe<De.length;Pe++){let Ge=De[Pe];if(Ge.type==="JOINT"){let Be=Je(Ge.id);Qe(Be,y,S)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ee)}for(A=0;A<y.length;A++)for(ne=0;ne<S.length;ne++)if(ae=S[ne],ae.bone.name===y[A].name){M[A]=ae,ae.processed=!0;break}for(A=0;A<S.length;A++)ae=S[A],ae.processed===!1&&(M.push(ae),ae.processed=!0);let Ce=[],ye=[];for(A=0;A<M.length;A++)ae=M[A],Ce.push(ae.bone),ye.push(ae.boneInverse);return new Ua(Ce,ye)}function Qe(x,y,S){x.traverse(function(M){if(M.isBone===!0){let A;for(let ne=0;ne<y.length;ne++){let ae=y[ne];if(ae.name===M.name){A=ae.boneInverse;break}}A===void 0&&(A=new lt),S.push({bone:M,boneInverse:A,processed:!1})}})}function Dt(x){let y=[],S=x.matrix,M=x.nodes,A=x.type,ne=x.instanceCameras,ae=x.instanceControllers,Ce=x.instanceLights,ye=x.instanceGeometries,Ee=x.instanceNodes;for(let ue=0,De=M.length;ue<De;ue++)y.push(Je(M[ue]));for(let ue=0,De=ne.length;ue<De;ue++){let Pe=He(ne[ue]);Pe!==null&&y.push(Pe.clone())}for(let ue=0,De=ae.length;ue<De;ue++){let Pe=ae[ue],Ge=H(Pe.id),Be=Xt(Ge.id),Ot=Mn(Be,Pe.materials),xt=Pe.skeletons,pt=Ge.skin.joints,mt=Ke(xt,pt);for(let Zn=0,dn=Ot.length;Zn<dn;Zn++){let cs=Ot[Zn];cs.isSkinnedMesh&&(cs.bind(mt,Ge.skin.bindMatrix),cs.normalizeSkinWeights()),y.push(cs)}}for(let ue=0,De=Ce.length;ue<De;ue++){let Pe=rt(Ce[ue]);Pe!==null&&y.push(Pe.clone())}for(let ue=0,De=ye.length;ue<De;ue++){let Pe=ye[ue],Ge=Xt(Pe.id),Be=Mn(Ge,Pe.materials);for(let Ot=0,xt=Be.length;Ot<xt;Ot++)y.push(Be[Ot])}for(let ue=0,De=Ee.length;ue<De;ue++)y.push(Je(Ee[ue]).clone());let Oe;if(M.length===0&&y.length===1)Oe=y[0];else{Oe=A==="JOINT"?new Mr:new fn;for(let ue=0;ue<y.length;ue++)Oe.add(y[ue])}return Oe.name=A==="JOINT"?x.sid:x.name,Oe.matrix.copy(S),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe}let an=new Un({name:Wn.DEFAULT_MATERIAL_NAME,color:16711935});function Ft(x,y){let S=[];for(let M=0,A=x.length;M<A;M++){let ne=y[x[M]];ne===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[M]),S.push(an)):S.push(qe(ne))}return S}function Mn(x,y){let S=[];for(let M in x){let A=x[M],ne=Ft(A.materialKeys,y);if(ne.length===0&&(M==="lines"||M==="linestrips"?ne.push(new Pi):ne.push(new Sr)),M==="lines"||M==="linestrips")for(let Ee=0,Oe=ne.length;Ee<Oe;Ee++){let ue=ne[Ee];if(ue.isMeshPhongMaterial===!0||ue.isMeshLambertMaterial===!0){let De=new Pi;De.color.copy(ue.color),De.opacity=ue.opacity,De.transparent=ue.transparent,ne[Ee]=De}}let ae=A.data.attributes.skinIndex!==void 0,Ce=ne.length===1?ne[0]:ne,ye;switch(M){case"lines":ye=new Oa(A.data,Ce);break;case"linestrips":ye=new Ji(A.data,Ce);break;case"triangles":case"polylist":ae?ye=new Na(A.data,Ce):ye=new hn(A.data,Ce);break}S.push(ye)}return S}function At(x){return $e.nodes[x]!==void 0}function Je(x){return b($e.nodes[x],Dt)}function tr(x){let y={name:x.getAttribute("name"),children:[]};Te(x);let S=i(x,"node");for(let M=0;M<S.length;M++)y.children.push(Xe(S[M]));$e.visualScenes[x.getAttribute("id")]=y}function Lt(x){let y=new fn;y.name=x.name;let S=x.children;for(let M=0;M<S.length;M++){let A=S[M];y.add(Je(A.id))}return y}function Jn(x){return $e.visualScenes[x]!==void 0}function nr(x){return b($e.visualScenes[x],Lt)}function Bi(x){let y=i(x,"instance_visual_scene")[0];return nr(a(y.getAttribute("url")))}function ir(){let x=$e.clips;if(c(x)===!0){if(c($e.animations)===!1){let y=[];for(let S in $e.animations){let M=E(S);for(let A=0,ne=M.length;A<ne;A++)y.push(M[A])}Hr.push(new wr("default",-1,y))}}else for(let y in x)Hr.push(q(y))}function $t(x){let y="",S=[x];for(;S.length;){let M=S.shift();M.nodeType===Node.TEXT_NODE?y+=M.textContent:(y+=`
`,S.push.apply(S,M.childNodes))}return y.trim()}if(e.length===0)return{scene:new Bs};let zn=new DOMParser().parseFromString(e,"application/xml"),Ut=i(zn,"COLLADA")[0],en=zn.getElementsByTagName("parsererror")[0];if(en!==void 0){let x=i(en,"div")[0],y;return x?y=x.textContent:y=$t(en),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let sr=Ut.getAttribute("version");console.debug("THREE.ColladaLoader: File version",sr);let Br=u(i(Ut,"asset")[0]),rr=new za(this.manager);rr.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let vo;Cr&&(vo=new Cr(this.manager),vo.setPath(this.resourcePath||t));let zr=new st,Hr=[],rc={},Zh=0,$e={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ut,"library_animations","animation",g),m(Ut,"library_animation_clips","animation_clip",V),m(Ut,"library_controllers","controller",W),m(Ut,"library_images","image",J),m(Ut,"library_effects","effect",ce),m(Ut,"library_materials","material",ke),m(Ut,"library_cameras","camera",it),m(Ut,"library_lights","light",Le),m(Ut,"library_geometries","geometry",ve),m(Ut,"library_nodes","node",Xe),m(Ut,"library_visual_scenes","visual_scene",tr),m(Ut,"library_kinematics_models","kinematics_model",Mt),m(Ut,"library_physics_models","physics_model",Fr),m(Ut,"scene","instance_kinematics_scene",go),_($e.animations,v),_($e.clips,k),_($e.controllers,P),_($e.images,j),_($e.effects,de),_($e.materials,Re),_($e.cameras,Ye),_($e.lights,Rt),_($e.geometries,yt),_($e.visualScenes,Lt),ir(),ie();let Vr=Bi(i(Ut,"scene")[0]);return Vr.animations=Hr,Br.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Vr.rotation.set(-Math.PI/2,0,0)),Vr.scale.multiplyScalar(Br.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Hr},kinematics:rc,library:$e,scene:Vr}}};var Kt=["en","fr","ca","es"],es={en:"English",fr:"Fran\xE7ais",ca:"Catal\xE0",es:"Espa\xF1ol"},Tv={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Xn(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of Tv[e]||Kt)if(n[t])return n[t];return""}var to={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Lr={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function qn(){return Object.fromEntries(Kt.map(n=>[n,""]))}function rn(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:Kt.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||qn(),e.sub=e.sub||qn(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.intro&&typeof e.intro=="object"&&Object.entries(e.intro).forEach(([s,r])=>{String(r||"").trim()&&(e.sub[s]=r)}),delete e.intro,e.quotes=e.quotes&&typeof e.quotes=="object"?e.quotes:qn();let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(Kt.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(Kt.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=to[s.layout]?s.layout:"carousel",s.card=Lr[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(Kt.map(o=>[o,s[r]||""]))),Kt.forEach(o=>{s[r][o]==null&&(s[r][o]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(Kt.map(o=>[o,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(Cv):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function ts(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function pi(n){return String(n||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||"item"}function $n(n,e){let t=pi(n),i=2,s=new Set(e);for(;s.has(t);)t=pi(n)+"-"+i++;return t}var Av=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Hl(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!Av.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Vl(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var Cv=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="",ph={Barcelone:"Barcelona",Venise:"Venice",Bruxelles:"Brussels",P\u00E9kin:"Beijing",Pekin:"Beijing",Londres:"London",Lisbonne:"Lisbon",S\u00E9oul:"Seoul",Mexico:"Mexico City",Montr\u00E9al:"Montreal",Beyrouth:"Beirut",Bogot\u00E1:"Bogota",Duba\u00EF:"Dubai",Murano:"Murano",Charjah:"Sharjah",Lausana:"Lausanne"};function mh(n){let e=[],t=" "+String(n||"")+" ",i=[...Object.keys(jn),...Object.keys(ph)].sort((r,o)=>o.length-r.length),s=t;for(let r of i){let o=new RegExp("[^\\p{L}]"+r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}])","iu"),a=s.search(o);if(a>=0){let l=ph[r]||r;e.some(c=>c.c===l)||e.push({c:l,at:a}),s=s.replace(o,c=>c[0]+" ".repeat(c.length-1))}}return e.sort((r,o)=>r.at-o.at).map(r=>r.c)}var jn={Barcelona:[41.39,2.17],Paris:[48.86,2.35],London:[51.51,-.13],Reims:[49.26,4.03],Lausanne:[46.52,6.63],Berlin:[52.52,13.4],Madrid:[40.42,-3.7],Brussels:[50.85,4.35],Amsterdam:[52.37,4.9],Helsinki:[60.17,24.94],Venice:[45.44,12.33],Dakar:[14.72,-17.47],Sharjah:[25.35,55.42],Beijing:[39.9,116.4],Puebla:[19.04,-98.2],"Mexico City":[19.43,-99.13],"New York":[40.71,-74],Montreal:[45.5,-73.57],Beirut:[33.89,35.5],Lisbon:[38.72,-9.14],Aveiro:[40.64,-8.65],"La Rochelle":[46.16,-1.15],Durham:[54.78,-1.58],Lyon:[45.76,4.84],Hebei:[40.77,114.88],Chengdu:[30.57,104.07],Bogota:[4.71,-74.07],Tokyo:[35.68,139.69],Seoul:[37.57,126.98],Dubai:[25.2,55.27],Murano:[45.46,12.35]};function Rv(n){return new Promise((e,t)=>{let i=URL.createObjectURL(n),s=new Image;s.onload=()=>e(s),s.onerror=t,s.src=i})}async function gh(n,e,t,i=.86){if(/svg|gif/i.test(n.type))return n;let s=await Rv(n),r=Math.min(1,e/s.naturalWidth,t/s.naturalHeight);if(r>=1&&/jpe?g|webp/i.test(n.type)&&n.size<9e5)return n;let o=document.createElement("canvas");o.width=Math.round(s.naturalWidth*r),o.height=Math.round(s.naturalHeight*r),o.getContext("2d").drawImage(s,0,0,o.width,o.height);let a=/png/i.test(n.type)&&Lv(o);return new Promise(l=>o.toBlob(c=>l(c),a?"image/png":"image/jpeg",i))}function Lv(n){let e=n.getContext("2d").getImageData(0,0,Math.min(n.width,64),Math.min(n.height,64)).data;for(let t=3;t<e.length;t+=4)if(e[t]<250)return!0;return!1}function ns(n){let e=/\.([a-z0-9]+)$/i.exec(n||"");return e?e[1].toLowerCase():""}function Gl(n){return new Promise((e,t)=>{let i=new FileReader;i.onload=()=>e(String(i.result).split(",")[1]||""),i.onerror=t,i.readAsDataURL(n)})}function no(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Ui(n){try{let e=await no();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function qs(n,e){let t=await no();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function vh(){try{let n=await no();return await new Promise(e=>{let t=n.transaction("kv").objectStore("kv").getAllKeys();t.onsuccess=()=>e(t.result||[]),t.onerror=()=>e([])})}catch{return[]}}async function mi(n){try{let e=await no();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Pv=n=>new Promise(e=>setTimeout(e,n)),Iv=n=>n&&(n.name==="AbortError"||n.name==="NetworkError"||n.name==="InvalidStateError"||n instanceof TypeError||n.status>=500&&n.status<600||n.status===429);async function _h(n,e=3){for(let t=0;;t++)try{return await n()}catch(i){if(t>=e-1||!Iv(i))throw i;await Pv(600*(t+1))}}function zl(n,e){if(e&&typeof e=="object")try{e.file=n}catch{}return e}var Qa=class{constructor(e){this.kind="github",this.cfg=Object.assign({branch:"main",root:""},e),this.api="https://api.github.com"}get repoPath(){return`/repos/${this.cfg.owner}/${this.cfg.repo}`}full(e){let t=(this.cfg.root||"").replace(/^\/+|\/+$/g,"");return t?t+"/"+e:e}async req(e,t={}){return _h(()=>this.req1(e,t))}async req1(e,t={}){let i=await fetch(this.api+e,{...t,headers:{Accept:"application/vnd.github+json",Authorization:"Bearer "+this.cfg.token,"X-GitHub-Api-Version":"2022-11-28",...t.body?{"Content-Type":"application/json"}:{},...t.headers||{}}});if(!i.ok){let s=i.status+"";try{let o=await i.json();s+=" "+(o.message||"")}catch{}let r=new Error(s);throw r.status=i.status,r}return i.status===204?null:t.raw?i.text():i.json()}async readText(e){return this.req(`${this.repoPath}/contents/${this.full(e)}?ref=${encodeURIComponent(this.cfg.branch)}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}})}async check(){let e=await this.req(this.repoPath);if(!e.permissions||!e.permissions.push)throw Object.assign(new Error("Ce jeton peut lire le d\xE9p\xF4t mais pas y \xE9crire. Donne-lui l'acc\xE8s \xAB Contents : Read and write \xBB."),{status:403});return this.cfg.branch||(this.cfg.branch=e.default_branch),e}async load(){let e=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${encodeURIComponent(this.cfg.branch)}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return rn(JSON.parse(e))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){let r=(await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`)).object.sha,o=await this.req(`${this.repoPath}/git/commits/${r}`),a=null;try{let d=await this.req(`${this.repoPath}/git/trees/${o.tree.sha}?recursive=1`);d.truncated||(a=new Set(d.tree.filter(m=>m.type==="blob").map(m=>m.path)))}catch{}this.lastPaths=a;let l=[],c=[...t,{path:"content/content.json",text:JSON.stringify(e,null,1)+`
`}];for(let d of c){if(d.delete){(!a||a.has(this.full(d.path)))&&l.push({path:this.full(d.path),mode:"100644",type:"blob",sha:null});continue}if(d.blob&&d.blob.size>90*1024*1024)throw zl(d.path,Object.assign(new Error(`fichier trop lourd pour GitHub (${Math.round(d.blob.size/1048576)} Mo, 90 Mo au plus). R\xE9duis-le ou publie une vid\xE9o YouTube / Vimeo.`),{status:413}));try{let m=d.text!=null?{content:d.text,encoding:"utf-8"}:{content:await Gl(d.blob),encoding:"base64"},_=await this.req(`${this.repoPath}/git/blobs`,{method:"POST",body:JSON.stringify(m)});l.push({path:this.full(d.path),mode:"100644",type:"blob",sha:_.sha})}catch(m){throw zl(d.path,m)}}let u=await this.req(`${this.repoPath}/git/trees`,{method:"POST",body:JSON.stringify({base_tree:o.tree.sha,tree:l})}),h=await this.req(`${this.repoPath}/git/commits`,{method:"POST",body:JSON.stringify({message:i,tree:u.sha,parents:[r]})});return await this.req(`${this.repoPath}/git/refs/heads/${encodeURIComponent(this.cfg.branch)}`,{method:"PATCH",body:JSON.stringify({sha:h.sha})}),h.sha}async listFiles(e=["media/","models/"]){let t=await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`),i=await this.req(`${this.repoPath}/git/trees/${t.object.sha}?recursive=1`),s=this.full("");return i.tree.filter(r=>r.type==="blob").map(r=>({path:s&&r.path.startsWith(s)?r.path.slice(s.length):r.path,size:r.size})).filter(r=>e.some(o=>r.path.startsWith(o)))}async lastCommits(e=8){let t=this.full("content/content.json");return this.req(`${this.repoPath}/commits?sha=${encodeURIComponent(this.cfg.branch)}&path=${encodeURIComponent(t)}&per_page=${e}`)}async loadAt(e){let t=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${e}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return rn(JSON.parse(t))}},eo=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Ui("demo:content:v6");if(e)return rn(e);if(window.HC_CONTENT)return rn(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return rn(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await mi("demo:file:"+i.path);continue}await qs("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await qs("demo:content:v6",e),"demo"}async reset(){await mi("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Ui("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Rr=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Xs=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],Nv=["font","size","lh","weight","italic","ls","upper"],yh=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function Dv(n){let e=Rr.find(i=>i.id===n);if(e)return e.css;let t=yh(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Rr[0].css}function Oi(n,e){let t=Xs.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...Nv,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=Dv(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function xh(n){let e=new Map;for(let t of Xs){let i=Oi(n,t.id),s=yh(i.font);if(!s)continue;new Set([+(i.weight||400),400,700,...t.id==="body"?[800]:[]]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function bh(n){let e=new Set;for(let t of Xs){let i=Oi(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function io(n,e,t=!1){let i=Oi(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let a=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=a(l);let c=r.measureText(o).width;c>172&&(l=Math.floor(l*172/c),r.font=a(l));let u=r.measureText(o),h=(u.actualBoundingBoxAscent||l*.7)-(u.actualBoundingBoxDescent||0);if(r.fillText(o,120+((u.actualBoundingBoxLeft??u.width/2)-(u.actualBoundingBoxRight??u.width/2))/2,120+h/2-4),t){let d=r.getImageData(0,0,240,240),m=d.data;for(let _=0;_<m.length;_+=4)m[_]=255-m[_],m[_+1]=255-m[_+1],m[_+2]=255-m[_+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var Qi=class{constructor(e){this.kind="folder",this.dir=e,this.name=e.name,this.urls=new Map}static supported(){return typeof window<"u"&&typeof window.showDirectoryPicker=="function"}async parent(e,t){let i=e.split("/").filter(Boolean),s=i.pop(),r=this.dir;for(let o of i)r=await r.getDirectoryHandle(o,{create:t});return[r,s]}async fileHandle(e,t=!1){let[i,s]=await this.parent(e,t);return i.getFileHandle(s,{create:t})}async readBlob(e){return(await this.fileHandle(e)).getFile()}async readText(e){return(await this.readBlob(e)).text()}async exists(e){try{return await this.fileHandle(e),!0}catch{return!1}}async writeFile(e,t){try{await _h(async()=>{let s=await(await this.fileHandle(e,!0)).createWritable();try{await s.write(t),await s.close()}catch(r){try{await s.abort()}catch{}throw r}})}catch(i){throw zl(e,i)}}async remove(e){try{let[t,i]=await this.parent(e,!1);await t.removeEntry(i)}catch{}}async permission(e){let t={mode:"readwrite"};return await this.dir.queryPermission(t)==="granted"?!0:e?await this.dir.requestPermission(t)==="granted":!1}async check(){if(!await this.exists("content/content.json"))throw new Error(`le dossier \xAB ${this.name} \xBB ne contient pas content/content.json. Choisis le dossier du site, celui o\xF9 se trouvent index.html et le dossier content.`)}async load(){return rn(JSON.parse(await this.readText("content/content.json")))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){for(let l of t){if(l.delete){await this.remove(l.path),this.urls.delete(l.path);continue}await this.writeFile(l.path,l.blob||l.text)}let s=JSON.stringify(e,null,1)+`
`;await this.writeFile("content/content.json",s);let r=new Date,o=r.toISOString().replace(/[:.]/g,"-"),a=[];try{a=JSON.parse(await this.readText("content/versions/index.json"))}catch{}await this.writeFile(`content/versions/${o}.json`,s),a.unshift({file:o+".json",date:r.toISOString(),message:i});for(let l of a.splice(40))await this.remove("content/versions/"+l.file);return await this.writeFile("content/versions/index.json",JSON.stringify(a,null,1)+`
`),o}async listFiles(e=["media/","models/"]){let t=[],i=async(s,r)=>{for await(let[o,a]of s.entries()){let l=r+o;a.kind==="directory"?await i(a,l+"/"):t.push({path:l,size:(await a.getFile()).size})}};for(let s of e)try{let[r]=await this.parent(s+"x",!1);await i(r,s)}catch{}return t}async lastCommits(e=20){let t=[];try{t=JSON.parse(await this.readText("content/versions/index.json"))}catch{}return t.slice(0,e).map(i=>({sha:i.file,html_url:"",commit:{message:i.message||"Mise \xE0 jour du contenu",author:{name:"dossier \xAB "+this.name+" \xBB",date:i.date}}}))}async loadAt(e){return rn(JSON.parse(await this.readText("content/versions/"+e)))}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t)if(!(this.urls.has(i)||/^(https?:|data:|blob:)/.test(i)))try{this.urls.set(i,URL.createObjectURL(await this.readBlob(i)))}catch{}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):e)}};var rs=window.HC_SITE??"../",ki=window.HC_ASSETS||null,Rh=window.HC_MODE==="demo",lo=document.getElementById("app"),T={backend:null,cfg:null,content:null,base:"",head:null,staged:new Map,recent:new Map,deletes:new Set,view:"sections",sel:{section:null,post:null,model:null},filter:{section:null,tag:"",q:"",status:""},refreshList:null,draftKey:"draft:demo:v6",busy:!1},Uv=new Set(["value","checked","disabled","hidden","multiple","selected","indeterminate","open"]);function f(n,e,...t){let i=document.createElement(n);for(let[s,r]of Object.entries(e||{}))r==null||r===!1||(s==="class"?i.className=r:s==="style"&&typeof r=="object"?Object.assign(i.style,r):s==="html"?i.innerHTML=r:s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):Uv.has(s)?i[s]=r:i.setAttribute(s,r===!0?"":r));return t.flat(1/0).forEach(s=>{s==null||s===!1||i.append(s instanceof Node?s:document.createTextNode(String(s)))}),i}function Ve(n,...e){return n.replaceChildren(...e.flat(1/0).filter(t=>t!=null&&t!==!1)),n}var Lh=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Ph=n=>Lh(n)?"youtube":/vimeo\.com\/(?:video\/)?\d+/.test(n||"")?"vimeo":/\.(mp4|webm|mov)(\?|#|$)/i.test(n||"")?"video":"image",Ih=()=>io(T.content&&T.content.settings.accent||"#ffcc00",T.content&&T.content.settings),dt=n=>Xn(n,"fr")||Xn(n,"en");function Nh(n){let e=Oi(n,"sig1");return{fontFamily:e.css,fontWeight:String(e.weight||400),fontStyle:e.italic?"italic":"normal",letterSpacing:e.ls?e.ls+"em":"normal",textTransform:e.upper?"uppercase":"none"}}var Ov="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#000"/></svg>');function Dh(){let n=Ov,e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}function Uh(n,e){if(!document.fonts||n&&n.logo)return;let t=Oi(n,"logo"),i=`${t.italic?"italic ":""}${t.weight||400} 76px ${t.css}`;document.fonts.check(i)||document.fonts.load(i).then(e).catch(()=>{})}function js(){let n=T.content&&T.content.settings;if(!n)return;let e=n.logo?Ln(n.logo):Ih(),t=document.querySelector(".top .brand");if(t){t.querySelector("img").src=e;let s=t.querySelector(".name");s.textContent=n.name||"Hand Coded",Object.assign(s.style,Nh(n))}let i=document.querySelector(".logo-prev");i&&(i.style.backgroundImage=`url("${e}")`),Dh(e),Uh(n,js)}var Mh=()=>Math.random().toString(36).slice(2,6),Fi=(n,e,t)=>{let[i]=n.splice(e,1);n.splice(t,0,i)};function Oh(n,e,t,i){n.addEventListener("pointerdown",s=>{if(s.button!==0)return;let r=s.target.closest(t);if(!r||!n.contains(r))return;let o=r.closest(e);if(!o)return;let a=()=>[...n.querySelectorAll(":scope > "+e)],l=a().indexOf(o),c=s.clientX,u=s.clientY,h=s.pointerType!=="mouse",d=!1,m=null,_=0,b=0,g=c,p=u,R=0,v=0,E=(()=>{for(let oe=n.parentElement;oe;oe=oe.parentElement){let B=getComputedStyle(oe).overflowY;if(/(auto|scroll)/.test(B)&&oe.scrollHeight>oe.clientHeight)return oe}return document.scrollingElement})(),U=()=>{d=!0;let oe=o.getBoundingClientRect();_=c-oe.left,b=u-oe.top,m=o.cloneNode(!0),m.classList.add("sort-ghost"),Object.assign(m.style,{width:oe.width+"px",height:oe.height+"px",left:"0",top:"0"}),document.body.appendChild(m),o.classList.add("sort-hole"),n.classList.add("sorting");try{r.setPointerCapture(s.pointerId)}catch{}navigator.vibrate&&h&&navigator.vibrate(12),D(),v=requestAnimationFrame(O)},D=()=>{m&&(m.style.transform=`translate(${g-_}px, ${p-b}px) rotate(1.5deg)`)},O=()=>{let oe=E===document.scrollingElement?{top:0,bottom:innerHeight}:E.getBoundingClientRect(),B=p<oe.top+70?-1:p>oe.bottom-70?1:0;B&&(E.scrollTop+=B*12,$()),v=requestAnimationFrame(O)},$=()=>{let oe=document.elementFromPoint(g,p),B=oe&&oe.closest(e);if(!B||B===o||B.parentElement!==n)return;let Z=a(),V=Z.indexOf(o),k=Z.indexOf(B);n.insertBefore(o,V<k?B.nextSibling:B)},C=oe=>{if(g=oe.clientX,p=oe.clientY,!d){let B=Math.hypot(g-c,p-u)>(h?10:5);if(h){B&&le();return}if(B)U();else return}oe.preventDefault(),D(),$()},N=oe=>{d&&oe.preventDefault()},Q=oe=>{let B=d;if(le(),B&&oe.type==="pointerup"){let Z=a().indexOf(o);Z!==l&&Z>-1&&i(l,Z)}},le=()=>{if(clearTimeout(R),cancelAnimationFrame(v),removeEventListener("pointermove",C),removeEventListener("pointerup",Q),removeEventListener("pointercancel",Q),r.removeEventListener("touchmove",N),m&&m.remove(),o.classList.remove("sort-hole"),n.classList.remove("sorting"),d){let oe=B=>{B.stopPropagation(),B.preventDefault()};addEventListener("click",oe,{capture:!0,once:!0}),setTimeout(()=>removeEventListener("click",oe,!0),0)}d=!1};addEventListener("pointermove",C,{passive:!1}),addEventListener("pointerup",Q),addEventListener("pointercancel",Q),r.addEventListener("touchmove",N,{passive:!1}),h?R=setTimeout(U,280):s.preventDefault()})}var $l=n=>n==null?"":n<1024?n+" o":n<1048576?Math.round(n/1024)+" Ko":(n/1048576).toFixed(1)+" Mo",kh=n=>String(n||"").split(/[\s&/]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")||"\xB7";function Ue(n,e,t="",i={}){return f("button",{type:"button",class:"btn "+t,onclick:e,...i},n)}var Fh=f("div",{class:"toasts",role:"status","aria-live":"polite"});document.body.appendChild(Fh);function ct(n,e="ok",t=4200){let i=f("div",{class:"toast "+e},n);Fh.appendChild(i),setTimeout(()=>i.remove(),t)}function Or(n,e,t){return new Promise(i=>{let s=document.activeElement,r=h=>{c.remove(),document.removeEventListener("keydown",o),s&&s.focus&&s.focus(),i(h)},o=h=>{h.key==="Escape"&&r(null)},a=f("div",{class:"mf"},t.map(h=>Ue(h.label,()=>r(typeof h.value=="function"?h.value():h.value),h.cls||""))),l=f("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":n},f("h2",null,n),f("div",{class:"mb"},e),a),c=f("div",{class:"modal-bg",onmousedown:h=>{h.target===c&&r(null)}},l);document.body.appendChild(c),document.addEventListener("keydown",o);let u=l.querySelector("input, textarea, select")||a.lastChild;u&&u.focus()})}var Bn=(n,e,t="Confirmer",i="dark")=>Or(n,f("p",null,e),[{label:"Annuler",value:!1,cls:"ghost"},{label:t,value:!0,cls:i}]);async function jl(n,e,t="",i="OK"){let s=f("input",{type:"text",value:t});return s.addEventListener("keydown",r=>{r.key==="Enter"&&r.target.closest(".modal").querySelector(".mf .btn:last-child").click()}),Or(n,f("label",{class:"f"},f("span",null,e),s),[{label:"Annuler",value:null,cls:"ghost"},{label:i,value:()=>s.value,cls:"dark"}])}function Ln(n){if(!n)return"";if(/^(https?:|data:|blob:)/.test(n))return n;if(ki&&ki[n]&&ki[n].startsWith("data:"))return ki[n];let e=T.staged.get(n)||T.recent.get(n);return e?e.url:T.backend&&(T.backend.kind==="demo"||T.backend.kind==="folder")?T.backend.url(n):rs+n}function xn(n,e){let t=T.staged.get(n);t&&URL.revokeObjectURL(t.url),T.staged.set(n,{blob:e,url:URL.createObjectURL(e)}),T.deletes.delete(n)}function as(n=T.content){let e=new Set;return n.posts.forEach(t=>{[t.thumb,t.thumbBack].forEach(i=>i&&e.add(i)),t.media.forEach(i=>i&&i.src&&e.add(i.src)),(t.logos||[]).forEach(i=>e.add(i))}),n.models.forEach(t=>{t.file&&(e.add(t.file),(t.textures||[]).forEach(i=>e.add(t.file.replace(/[^/]+$/,"")+i)))}),n.settings.logo&&e.add(n.settings.logo),n.settings.homeVideo&&n.settings.homeVideo.src&&e.add(n.settings.homeVideo.src),n.settings.showreel&&e.add(n.settings.showreel),new Set([...e].filter(t=>!/^(https?:|data:|blob:)/.test(t)))}var kv={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif","image/svg+xml":"svg"};async function gi(n,e,t){if(/^video\/(mp4|webm)$/.test(n.type)||/\.(mp4|webm)$/i.test(n.name)){if(t!=="media")throw new Error("Ici, seules les images sont accept\xE9es.");if(n.size>95e6)throw new Error(`${n.name} p\xE8se ${$l(n.size)} : GitHub refuse les fichiers de plus de 100 Mo. R\xE9duis la vid\xE9o (720p, H.264) avant de l'envoyer.`);return n.size>4e7&&ct(`${n.name} p\xE8se ${$l(n.size)}. Elle passera, mais la page sera lente \xE0 charger : vise moins de 20 Mo.`,"ok",7e3),{path:`${e}/${pi(n.name.replace(/\.[^.]+$/,""))}-${Mh()}.${ns(n.name)||"mp4"}`,blob:n}}if(!/^image\//.test(n.type))throw new Error(`${n.name} : format non reconnu (images JPG, PNG, WebP, GIF, SVG ou vid\xE9os MP4, WebM).`);let s=t==="media"?[3200,1e3]:t==="logo"?[600,600]:[1400,1400],r=await gh(n,s[0],s[1]),o=kv[r.type]||ns(n.name)||"jpg";return{path:`${e}/${pi(n.name.replace(/\.[^.]+$/,""))}-${Mh()}.${o}`,blob:r}}function Yn(n,e,t){let i=f("input",{type:"file",accept:n,multiple:e});i.addEventListener("change",()=>t([...i.files])),i.click()}function ro(n,e){n.addEventListener("dragover",t=>{[...t.dataTransfer.types].includes("Files")&&(t.preventDefault(),n.classList.add("over"))}),n.addEventListener("dragleave",()=>n.classList.remove("over")),n.addEventListener("drop",t=>{t.dataTransfer.files.length&&(t.preventDefault(),n.classList.remove("over"),e([...t.dataTransfer.files]))})}var Sh=null,wh=null;function be(n={}){n.after&&n.after(),T.onChange&&T.onChange(),clearTimeout(Sh),Sh=setTimeout(Kl,600),clearTimeout(wh),wh=setTimeout(is,200),n.list&&T.refreshList&&T.refreshList(),n.nav&&ho()}function Bh(){let n=as();return[...T.staged.keys()].filter(e=>n.has(e))}function Zs(){return JSON.stringify(T.content)!==T.base||T.deletes.size>0||Bh().length>0}async function Kl(){try{if(!Zs()){await mi(T.draftKey);return}let n=as();await qs(T.draftKey,{content:T.content,base:T.base,head:T.head,at:Date.now(),deletes:[...T.deletes],staged:[...T.staged].filter(([e])=>n.has(e)).map(([e,t])=>({path:e,blob:t.blob}))})}catch(n){console.warn("brouillon non sauvegard\xE9",n)}}var Rn=n=>JSON.stringify(n),ao=n=>!!n&&typeof n=="object"&&!Array.isArray(n),Eh=n=>Array.isArray(n)&&n.length>0&&n.every(e=>ao(e)&&typeof e.id=="string");function Ir(n,e,t){if(Rn(e)===Rn(n))return t;if(Rn(t)===Rn(n)||Rn(t)===Rn(e))return e;if(ao(n)&&ao(e)&&ao(t)){let i={};for(let s of new Set([...Object.keys(n),...Object.keys(e),...Object.keys(t)])){let r=Ir(n[s],e[s],t[s]);r!==void 0&&(i[s]=r)}return i}if(Array.isArray(e)&&Array.isArray(t)&&(Eh(e)||Eh(t))){let i=Array.isArray(n)?n:[],s=new Map(i.map(u=>[u.id,u])),r=new Map(e.map(u=>[u.id,u])),o=new Map(t.map(u=>[u.id,u])),a=Rn(e.map(u=>u.id))!==Rn(i.map(u=>u.id))?e.map(u=>u.id):t.map(u=>u.id),l=[];for(let u of[...a,...t.map(h=>h.id),...e.map(h=>h.id)])l.includes(u)||l.push(u);let c=[];for(let u of l){let h=s.get(u),d=r.get(u),m=o.get(u);if(h&&!d){m&&Rn(m)!==Rn(h)&&c.push(m);continue}if(h&&!m){d&&Rn(d)!==Rn(h)&&c.push(d);continue}c.push(h?Ir(h,d,m):d&&m?Ir({},d,m):d||m)}return c}return e}async function ss(n){try{n&&n.content&&await qs("draft-backup:"+T.draftKey,{content:n.content,at:n.at||Date.now()})}catch{}}async function Fv(){let n=await Ui(T.draftKey);if(!(!n||!n.content)){if(n.base!==T.base){if(!await Or("Un brouillon attend",f("div",null,f("p",null,`Tu as un brouillon non publi\xE9 du ${new Date(n.at).toLocaleString("fr-FR")}.`),f("p",null,"Le site a \xE9t\xE9 publi\xE9 depuis (peut-\xEAtre depuis un autre ordinateur). Si tu reprends ce brouillon, seuls tes changements seront ajout\xE9s \xE0 la version en ligne : ce qui a \xE9t\xE9 publi\xE9 entre-temps est gard\xE9.")),[{label:"Partir de la version en ligne",value:!1,cls:"ghost"},{label:"Reprendre mes changements",value:!0,cls:"dark"}])){await ss(n),await mi(T.draftKey);return}await ss(n);let t=null;try{t=JSON.parse(n.base)}catch{}T.content=rn(t?Ir(t,n.content,JSON.parse(T.base)):n.content),(n.staged||[]).forEach(i=>xn(i.path,i.blob)),(n.deletes||[]).forEach(i=>T.deletes.add(i)),ct("Tes changements sont repris sur la version en ligne. Une copie du brouillon reste dans Historique \u203A Sauvegardes.");return}T.content=rn(n.content),(n.staged||[]).forEach(e=>xn(e.path,e.blob)),(n.deletes||[]).forEach(e=>T.deletes.add(e)),ct("Brouillon non publi\xE9 retrouv\xE9 : rien n\u2019est perdu.")}}function zh(){let n=JSON.parse(T.base),e=T.content,t=[],i=(o,a,l,c,u)=>{let h=u?"\xE9e":"\xE9",d=new Map(o.map(v=>[v[l],JSON.stringify(v)])),m=new Map(a.map(v=>[v[l],JSON.stringify(v)])),_=[...m.keys()].filter(v=>!d.has(v)).length,b=[...d.keys()].filter(v=>!m.has(v)).length,g=[...m.keys()].filter(v=>d.has(v)&&d.get(v)!==m.get(v)).length,p=v=>v>1?c+"s":c,R=v=>v>1?h+"s":h;_&&t.push(`${_} ${p(_)} ajout${R(_)}`),g&&t.push(`${g} ${p(g)} modifi${R(g)}`),b&&t.push(`${b} ${p(b)} supprim${R(b)}`)};i(n.sections,e.sections,"id","section",!0),i(n.posts,e.posts,"id","contenu"),i(n.models,e.models,"id","mod\xE8le"),JSON.stringify(n.settings)!==JSON.stringify(e.settings)&&t.push("r\xE9glages modifi\xE9s");let s=o=>o.sections.map(a=>a.id);JSON.stringify(s(n))!==JSON.stringify(s(e))&&JSON.stringify(s(n).slice().sort())===JSON.stringify(s(e).slice().sort())&&t.push("ordre des sections");let r=Bh().length;return r&&t.push(`${r} fichier${r>1?"s":""} \xE0 envoyer`),T.deletes.size&&t.push(`${T.deletes.size} fichier${T.deletes.size>1?"s":""} \xE0 supprimer`),t}function Bv(){let n=as(JSON.parse(T.base)),e=as(),t=new Set(JSON.parse(T.base).models.filter(i=>i.builtin).flatMap(i=>[i.file,...(i.textures||[]).map(s=>i.file.replace(/[^/]+$/,"")+s)]));return[...n].filter(i=>!e.has(i)&&!t.has(i)&&/^(media|models)\//.test(i)&&!/^media\/logos\//.test(i)&&!T.staged.has(i))}async function Ql(){if(T.busy)return;if(!Zs()){ct("Rien de nouveau \xE0 publier.");return}let n=zh(),e=Bv(),t=f("input",{type:"text",value:n.length?n.slice(0,3).join(", ").replace(/^./,o=>o.toUpperCase()):"Mise \xE0 jour du contenu"}),i=f("input",{type:"checkbox",checked:!0}),s=f("div",null,f("ul",null,n.map(o=>f("li",null,o))),f("label",{class:"f"},f("span",null,"Note pour l\u2019historique"),t),e.length?f("label",{class:"switch"},i,`Supprimer aussi ${e.length} ancien${e.length>1?"s":""} fichier${e.length>1?"s":""} qui ne sert plus`):null,f("p",{class:"hint"},T.backend.kind==="github"?"Le site se met \xE0 jour 1 \xE0 2 minutes apr\xE8s la publication.":T.backend.kind==="folder"?`Les fichiers sont \xE9crits dans le dossier \xAB ${T.backend.name} \xBB de ton ordinateur.`:"Mode d\xE9mo : la publication reste dans ce navigateur, rien n\u2019est \xE9crit dans les fichiers du site."));if(await Or("Publier sur le site",s,[{label:"Annuler",value:!1,cls:"ghost"},{label:"Publier",value:!0,cls:"primary"}])){T.busy=!0,is("Publication en cours\u2026");try{if(T.backend.kind==="folder"&&!await T.backend.permission(!0))throw Object.assign(new Error("acc\xE8s au dossier refus\xE9"),{name:"NotAllowedError"});if(T.backend.kind==="github"){let h=await Hv();if(T.head&&h!==T.head){let d=await T.backend.loadAt(h);if(JSON.stringify(d)!==T.base){if(!await Bn("Le site a chang\xE9 entre-temps","Quelqu\u2019un (ou toi, depuis un autre onglet) a publi\xE9 depuis que tu as ouvert le back-office. Tes changements vont \xEAtre ajout\xE9s \xE0 la version en ligne : ce qui a \xE9t\xE9 publi\xE9 entre-temps est gard\xE9.","Fusionner et publier")){T.busy=!1,is();return}T.content=rn(Ir(JSON.parse(T.base),T.content,d))}}}let o=as(),a=[...T.staged].filter(([h])=>o.has(h)).map(([h,d])=>({path:h,blob:d.blob}));if((T.backend.kind==="github"||T.backend.kind==="folder")&&(a.push({path:"content/content.js",text:"window.HC_CONTENT = "+JSON.stringify(T.content)+`;
`}),JSON.stringify(JSON.parse(T.base).models)!==JSON.stringify(T.content.models)&&(is("Pr\xE9paration des mod\xE8les 3D\u2026"),a.push({path:"models/models.js",text:await zv()}))),T.backend.kind==="github"||T.backend.kind==="folder")try{is("R\xE9f\xE9rencement\u2026");let h=dh(T.content,{base:$s()}),d=await T.backend.readText("index.html"),m=fh(d,h);m!==d&&a.push({path:"index.html",text:m}),a.push({path:"llms.txt",text:h.llms},{path:"sitemap.xml",text:h.sitemap})}catch(h){console.warn("r\xE9f\xE9rencement non mis \xE0 jour",h)}let l=new Set([...T.deletes].filter(h=>!o.has(h)));e.length&&i.checked&&e.forEach(h=>l.add(h));let c=await T.backend.publish(T.content,[...a,...[...l].map(h=>({path:h,delete:!0}))],t.value.trim()||"Mise \xE0 jour du contenu");T.base=JSON.stringify(T.content),T.backend.kind==="github"&&(T.head=c),a.forEach(h=>{let d=T.staged.get(h.path);d&&T.recent.set(h.path,d),T.staged.delete(h.path)}),T.staged.forEach(h=>URL.revokeObjectURL(h.url)),T.staged.clear(),T.deletes.clear(),T.files=null,await mi(T.draftKey);let u=T.backend.kind==="github"&&T.backend.lastPaths?[...as()].filter(h=>!T.backend.lastPaths.has(T.backend.full(h))&&!a.some(d=>d.path===h)):[];u.length?ct(`Publi\xE9, mais ${u.length>1?u.length+" images utilis\xE9es sont introuvables":"une image utilis\xE9e est introuvable"} dans le d\xE9p\xF4t : ${u.map(h=>h.split("/").slice(-2).join("/")).join(", ")}. Remets-${u.length>1?"les":"la"} depuis la fiche concern\xE9e.`,"bad",15e3):ct(T.backend.kind==="github"?"Publi\xE9. Le site sera \xE0 jour dans une minute ou deux.":T.backend.kind==="folder"?`Enregistr\xE9 dans le dossier \xAB ${T.backend.name} \xBB.`:"Publi\xE9 dans la d\xE9mo (dans ce navigateur seulement)."),T.backend.kind==="folder"&&await T.backend.prepare(T.content)}catch(o){console.error(o),ct("La publication a \xE9chou\xE9 : "+Ys(o),"bad",9e3)}finally{T.busy=!1,is(),ho(),(T.view==="history"||T.view==="media")&&Yt()}}}async function zv(){let n={},e={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",tga:"image/x-tga",webp:"image/webp"};for(let t of T.content.models){let i=t.file.replace(/[^/]+$/,"");for(let s of[t.file,...(t.textures||[]).map(r=>i+r)]){let r=T.staged.has(s)?T.staged.get(s).blob:null;if(!r&&T.backend.readBlob&&(r=await T.backend.readBlob(s).catch(()=>null)),!r){let o=await fetch(Ln(s));if(!o.ok)throw new Error(s+" : "+o.status);r=await o.blob()}n[s]=/\.dae$/i.test(s)?await r.text():`data:${e[ns(s)]||"application/octet-stream"};base64,${await Gl(r)}`}}return"window.HC_ASSETS = "+JSON.stringify(n)+`;
`}async function Hv(){return(await T.backend.req(`${T.backend.repoPath}/git/ref/heads/${encodeURIComponent(T.backend.cfg.branch)}`)).object.sha}async function Vv(){Zs()&&await Bn("Annuler les modifications","Tout ce qui n\u2019a pas \xE9t\xE9 publi\xE9 sera perdu : textes, images ajout\xE9es, suppressions.","Tout annuler","danger")&&(await ss({content:T.content,at:Date.now()}),T.content=rn(JSON.parse(T.base)),T.staged.forEach(n=>URL.revokeObjectURL(n.url)),T.staged.clear(),T.deletes.clear(),await mi(T.draftKey),Dr(),ct("Retour \xE0 la version publi\xE9e. Une copie du brouillon reste dans Historique \u203A Sauvegardes."))}function Ys(n){let e=n&&n.file?` (fichier ${n.file})`:"";if(n&&n.name==="AbortError")return T.backend&&T.backend.kind==="folder"?"le navigateur a interrompu l\u2019\xE9criture dans le dossier"+e+". Ferme les autres onglets du back-office ou du site ouverts sur ce dossier, et si le dossier est synchronis\xE9 (iCloud, Dropbox, Drive), attends la fin de la synchronisation, puis republie : rien n\u2019est perdu.":"l\u2019envoi a \xE9t\xE9 interrompu"+e+" (connexion coup\xE9e, ou ordinateur en veille). Republie : rien n\u2019est perdu.";if(n&&n.name==="NotAllowedError")return"le navigateur n\u2019a plus le droit d\u2019\xE9crire dans le dossier"+e+". Republie et accepte la demande d\u2019acc\xE8s.";if(n&&n.status===413)return n.file+" : "+n.message;let t=n&&n.status;return t===401?"jeton refus\xE9 (expir\xE9, r\xE9voqu\xE9 ou mal copi\xE9).":t===403?n.message.includes("\xE9crire")?n.message:"acc\xE8s refus\xE9. V\xE9rifie que le jeton a \xAB Contents : Read and write \xBB sur ce d\xE9p\xF4t.":t===404?"d\xE9p\xF4t ou branche introuvable, ou le jeton n\u2019a pas acc\xE8s \xE0 ce d\xE9p\xF4t.":t===409?"conflit sur la branche, recharge la page et r\xE9essaie.":t===422?"GitHub a refus\xE9 un fichier (trop lourd ?). "+(n.message||""):n instanceof TypeError?"pas de connexion \xE0 GitHub (r\xE9seau ?).":(n&&n.message?n.message:String(n))+e}var so=new Map;async function Th(n){if(ki&&ki[n]&&!ki[n].startsWith("data:"))return ki[n];if(!so.has(n)||T.staged.has(n)){let e=fetch(Ln(n)).then(t=>{if(!t.ok)throw new Error(n+" : "+t.status);return t.text()});if(T.staged.has(n))return e;so.set(n,e),e.catch(()=>so.delete(n))}return so.get(n)}var Hh=new Er;Hh.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Ln(n.replace(/^\.\//,"").replace(/\/\.\//g,"/")));function Yl(n,e){let i=new Ka(Hh).parse(n,e.file.slice(0,e.file.lastIndexOf("/")+1)).scene,s=new fn;s.add(i);let r=0;if(i.traverse(l=>{if(!l.isMesh)return;r++;let c=u=>{let h=u.map||u.emissiveMap||null;return h?new Un({map:h}):e.untextured==="white"?new Zi({color:15921906}):e.untextured==="black"?new Zi({color:2236962}):new Un({color:15841280,wireframe:!0})};l.material=Array.isArray(l.material)?l.material.map(c):c(l.material)}),!r)throw new Error("aucune forme 3D dans ce fichier");let o=Gv(e);if(e.scaleMode==="fit"){s.updateMatrixWorld(!0);let l=new mn().setFromObject(s),c=l.getSize(new G);s.scale.setScalar((e.height||420)/Math.max(c.y,1e-6)*o),s.updateMatrixWorld(!0);let u=new mn().setFromObject(s),h=u.getCenter(new G);s.position.set(-h.x,-u.min.y,-h.z)}else{i.scale.setScalar(100),s.updateMatrixWorld(!0);let l=new mn().setFromObject(s);l.max.y-l.min.y>800&&s.scale.setScalar(800/(l.max.y-l.min.y)),s.scale.multiplyScalar(o)}let a=new fn;return a.rotation.y=(e.rotationY||0)*Math.PI/180,a.add(s),a}var Gv=n=>Math.max(.05,Math.min(5,(+n.scale||100)/100)),Jl=(()=>{let n=null,e=new Bs;e.add(new Ha(16777215,14211288,2.2));let t=new Vs(16777215,1.2);t.position.set(300,800,500),e.add(t);let i=new zt(30,4/3,1,2e4),s=new fn;e.add(s);let r=new fn;r.visible=!1,s.add(r);{let v=new xr(256,169),E=new Un({color:1710618,transparent:!0,opacity:.16,side:_n,depthWrite:!1});for(let D=0;D<8;D++){let O=D/8*Math.PI*2,$=new hn(v,E);$.position.set(500*Math.sin(O),500+(D%2?60:-60),500*Math.cos(O)),$.rotation.y=O,r.add($)}let U=[];for(let D=0;D<=64;D++){let O=D/64*Math.PI*2;U.push(new G(500*Math.sin(O),0,500*Math.cos(O)))}r.add(new Ji(new An().setFromPoints(U),new Pi({color:13421772})))}let o=!1,a=null,l=null,c=!1,u=0,h=.004,d=new Map,m=Promise.resolve();function _(){if(n)return n;n=new br({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(16777215,0);let v=n.domElement;return v.addEventListener("pointerdown",E=>{c=!0,u=E.clientX,v.setPointerCapture(E.pointerId)}),v.addEventListener("pointermove",E=>{c&&(h=(E.clientX-u)*.01,s.rotation.y+=h,u=E.clientX)}),v.addEventListener("pointerup",()=>{c=!1}),requestAnimationFrame(R),n}function b(v){let E=new mn().setFromObject(v),U=E.getSize(new G),D=E.getCenter(new G),O=Math.max(U.y*.8,Math.min(U.x,U.z)*.55,Math.max(U.x,U.z)*.38)||100,$=O/Math.tan(15*Math.PI/180);i.position.set(0,D.y+O*.55,$),i.near=$/50,i.far=$*10,i.lookAt(0,D.y,0),i.updateProjectionMatrix()}function g(){i.position.set(0,300+1900*.28,1900),i.near=10,i.far=2e4,i.lookAt(0,330,0),i.updateProjectionMatrix()}function p(v){[...s.children].forEach(E=>{E!==r&&s.remove(E)}),s.rotation.y=.6,r.visible=!!(v&&o),v&&(s.add(v),o?g():(r.visible=!1,b(v))),a=v}function R(){if(requestAnimationFrame(R),!l||!l.isConnected||!a)return;let v=l.clientWidth,E=l.clientHeight;if(!v||!E)return;let U=n.domElement;U.parentNode!==l&&l.prepend(U),(U.width!==Math.round(v*n.getPixelRatio())||U.height!==Math.round(E*n.getPixelRatio()))&&(n.setSize(v,E,!1),i.aspect=v/E,i.updateProjectionMatrix()),c||(s.rotation.y+=h,h+=(.004-h)*.03),n.render(e,i)}return{async show(v,E,U,D=!1){_(),l=v,o=D,p(null),U&&(U.textContent="Chargement du mod\xE8le\u2026");try{let O=Yl(await Th(E.file),E);if(l!==v)return;p(O);let $=new mn().setFromObject(O).getSize(new G);U&&(U.textContent=(D?`Dans la sc\xE8ne : ${Math.round($.x)} \xD7 ${Math.round($.y)} \xD7 ${Math.round($.z)} (les cartes grises sont celles du carrousel). `:"")+"Glisse pour tourner autour.")}catch(O){U&&(U.textContent="Impossible d\u2019afficher ce mod\xE8le : "+O.message)}},async snapshot(v){let E=v.file+JSON.stringify([v.scaleMode,v.height,v.rotationY,v.untextured,v.scale])+(T.staged.has(v.file)?"s":"");if(d.has(E))return d.get(E);let U=m.then(async()=>{_();let D=Yl(await Th(v.file),v),O=a,$=s.rotation.y,C=o;o=!1,p(D),s.rotation.y=.6,n.setSize(320,200,!1),i.aspect=1.6,i.updateProjectionMatrix(),await new Promise(Q=>setTimeout(Q,400)),n.render(e,i);let N=n.domElement.toDataURL("image/png");return o=C,p(O),s.rotation.y=$,n.setSize(1,1,!1),N});return m=U.catch(()=>{}),d.set(E,U),U.catch(()=>d.delete(E)),U}}})();function Wv(n){let e=f("div",{class:"pic"},f("span",{style:{color:"#aaa",fontSize:"12px"}},"\u2026"));return Jl.snapshot(n).then(t=>Ve(e,f("img",{src:t,alt:""}))).catch(()=>Ve(e,f("span",{style:{color:"#c0362c",fontSize:"12px",padding:"8px"}},"aper\xE7u indisponible"))),e}function Vh(n){let e='<path d="M80 62 l9 6 l-3 11 h-12 l-3 -11z" fill="#d8d8d8" stroke="#bdbdbd" stroke-width=".6"/>',t=(o,a,l,c,u=1,h="#151515")=>`<rect x="${(o-l/2).toFixed(1)}" y="${(a-c/2).toFixed(1)}" width="${l.toFixed(1)}" height="${c.toFixed(1)}" fill="${h}" opacity="${u.toFixed(2)}"/>`,i=(o,a,l,c)=>`<line x1="${o.toFixed(1)}" y1="${a.toFixed(1)}" x2="${l.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#cfcfcf" stroke-width=".7"/>`,s="",r=(o,a,l,c,u,h,d=0)=>{let m=[];for(let _=0;_<o;_++){let b=_/o*Math.PI*2,g=(Math.cos(b)+1)/2;m.push({x:80+a*Math.sin(b),y:c+l*Math.cos(b)-_*d,d:g})}m.sort((_,b)=>_.d-b.d).forEach(_=>{h&&(s+=i(_.x,_.y,80,70)),s+=t(_.x,_.y,u[0]*(.6+.4*_.d),u[1]*(.6+.4*_.d),.3+.7*_.d)})};switch(n){case"carousel":s+=e,r(8,60,13,40,[22,14],!0);break;case"arc":for(let o=0;o<7;o++){let a=Math.PI*(o+1)/8;s+=t(80-62*Math.cos(a),74-58*Math.sin(a),16,11,1)}s+=e;break;case"fan":s+=e;for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-48*Math.cos(a),60-40*Math.sin(a),80,66)+t(80-48*Math.cos(a),60-40*Math.sin(a),24,7,.35)}for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-64*Math.cos(a),66-50*Math.sin(a),80,66)+t(80-64*Math.cos(a),66-50*Math.sin(a),30,8,1,"#333")}break;case"map":s+='<ellipse cx="80" cy="78" rx="70" ry="13" fill="#ececec"/><path d="M28 77 q8 -6 18 -2 t20 0 q6 -4 12 1 M92 75 q10 -5 22 -1 t18 3" stroke="#cfcfcf" stroke-width="3" fill="none" stroke-linecap="round"/>',[[48,76,46,30],[100,75,104,22],[124,79,132,42]].forEach(([o,a,l,c])=>{s+=i(o,a,l,c)+`<circle cx="${o}" cy="${a}" r="2" fill="#f1b800"/>`+t(l,c,15,14,1,"#fff").replace("/>",' stroke="#151515" stroke-width=".8"/>')+t(l-20,c,18,14,1)});break;case"spiral":s+=e;{let o=[];for(let a=0;a<9;a++){let l=a*.95,c=(Math.cos(l)+1)/2;o.push({x:80+48*Math.sin(l),y:66-a*6.6,d:c})}o.sort((a,l)=>a.d-l.d).forEach(a=>{s+=i(a.x,a.y,80,a.y)+t(a.x,a.y,18*(.6+.4*a.d),12*(.6+.4*a.d),.3+.7*a.d)})}break;case"wall":for(let o=0;o<3;o++)for(let a=0;a<5;a++)s+=t(32+a*24,16+o*17,20,13,.9);s+=e;break;default:s+=e}return`<svg viewBox="0 0 160 100" aria-hidden="true">${s}</svg>`}function qv(n){let e="var(--accent)";switch(n){case"image":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="32" y="18" width="96" height="63" fill="#111"/><rect x="40" y="26" width="8" height="1.5" fill="${e}"/><rect x="40" y="32" width="54" height="5" fill="#fff"/><rect x="40" y="41" width="36" height="3" fill="#777"/><rect x="40" y="72" width="34" height="2.5" fill="${e}"/></svg>`;case"portrait":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="55" y="25" width="50" height="50" fill="#1b1b1b"/><text x="80" y="57" text-anchor="middle" font-family="Georgia" font-size="20" fill="#fff">MM</text><rect x="75" y="64" width="10" height="1.4" fill="${e}"/></svg>`;case"text":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="20" y="36" width="120" height="30" fill="#333"/><rect x="27" y="41" width="7" height="1.4" fill="${e}"/><rect x="27" y="46" width="80" height="5" fill="#fff"/><rect x="27" y="54" width="54" height="5" fill="#fff"/></svg>`;case"place":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="52" y="24" width="56" height="52" fill="#fff" stroke="#ccc"/><circle cx="80" cy="46" r="13" fill="#111"/><circle cx="80" cy="46" r="3.5" fill="${e}"/><rect x="66" y="66" width="28" height="3" fill="#444"/></svg>`}return""}function Wl(n,e,t,i){let s=f("div",{class:"tiles",role:"radiogroup","aria-label":i}),r=o=>{Ve(s,...n.map(a=>f("button",{type:"button",class:"tile",role:"radio","aria-checked":String(a.value===o),onclick:()=>{t(a.value),r(a.value)}},a.pic||f("div",{class:"pic"}),f("div",{class:"cap"},f("b",null,a.label),a.hint?f("span",null,a.hint):null))))};return r(e),s}function ht(n,e,t){return f("label",{class:"f"},f("span",null,n),e,t?f("p",{class:"hint"},t):null)}function wt(n,e,t={}){let i=t.rows?f("textarea",{rows:t.rows,placeholder:t.placeholder}):f("input",{type:t.type||"text",value:n()??"",placeholder:t.placeholder,min:t.min,max:t.max,step:t.step,spellcheck:t.spell===!1?"false":null});return t.rows&&(i.value=n()??""),i.addEventListener("input",()=>{e(t.type==="number"?i.value===""?"":+i.value:i.value),be(t)}),t.onBlur&&i.addEventListener("blur",()=>t.onBlur(i)),i}var kn=()=>{let n=T.content&&T.content.settings.langs||Kt;return Kt.filter(e=>n.includes(e))};function Fn(n,e,t,i={}){(!e[t]||typeof e[t]!="object")&&(e[t]=Object.fromEntries(Kt.map(r=>[r,e[t]||""])));let s=r=>f("div",{class:"lang","data-l":r.toUpperCase()},wt(()=>e[t][r]??"",o=>{e[t][r]=o},{...i,placeholder:i.placeholder?i.placeholder[r]:es[r]}));return f("div",{class:"f"},f("span",{class:"lbl"},n),f("div",{class:"pair"},kn().map(s)),i.hint?f("p",{class:"hint"},i.hint):null)}var Xv=[["col","Largeur des colonnes",362,200,520,"Plus \xE9troit : des lignes plus courtes, plus de colonnes, comme dans un journal."],["gutter","Entre deux colonnes",160,10,240,"L\u2019espace blanc entre une colonne et la suivante, quand le texte continue."],["side","C\xF4t\xE9s",79,8,140,"Avant la premi\xE8re colonne (apr\xE8s la photo) et apr\xE8s la derni\xE8re."],["top","Haut",34,8,100,"Au-dessus du titre. Les colonnes suivantes commencent \xE0 cette m\xEAme hauteur."],["bottom","Bas",20,6,80,"Sous le texte et sous la date."]];function $v(n){let e=Xv.map(([t,i,s,r,o,a])=>{let l=()=>n.fiche&&n.fiche[t]!=null&&n.fiche[t]!==""?+n.fiche[t]:s,c=f("input",{type:"range",min:r,max:o,step:1,value:l()}),u=f("b",null,String(l())),h=f("span",{class:"fdot",title:"Modifi\xE9",hidden:l()===s}),d=m=>{n.fiche=n.fiche||{},m===s?delete n.fiche[t]:n.fiche[t]=m,Object.keys(n.fiche).length||delete n.fiche,c.value=m,u.textContent=m,h.hidden=m===s};return c.addEventListener("input",()=>{d(+c.value),be()}),f("div",{class:"f fiche-row"},f("span",{class:"lbl"},i,h),f("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},c,u,Ue("\u21BA "+s,()=>{d(s),be()},"sm ghost",{title:"Revenir \xE0 la valeur d\u2019origine"})),f("p",{class:"hint"},a))});return f("div",{class:"block"},f("h3",null,"Fiches"),f("p",{class:"hint",style:{marginTop:0,marginBottom:"10px"}},"La mise en page du texte des fiches R\xE9alisations, en colonnes comme un article : le texte passe d\u2019une colonne \xE0 la suivante. Les marges haut et bas valent aussi pour Savoir-faire. Valeurs en unit\xE9s de la fiche (elle fait 355 de haut, agrandie d\u2019environ 1,4 fois sur un ordinateur). Le bouton \xE0 droite de chaque r\xE9glage remet la valeur d\u2019origine. Regarde le r\xE9sultat dans l\u2019Aper\xE7u."),...e)}function On(n,e,t,i={}){let s=f("input",{type:"checkbox",checked:!!e(),role:"switch"});return s.addEventListener("change",()=>{t(s.checked),be(i)}),f("label",{class:"switch"},s,n)}function Pn(n,e,t,i={}){let s=f("select",null,n.map(r=>f("option",{value:r.value,selected:r.value===e()},r.label)));return s.addEventListener("change",()=>{t(s.value),be(i)}),s}function Gh(n,e){let t=kn().includes("fr")?"fr":kn()[0],i=f("div",{class:"rte",contenteditable:"true","data-ph":e,role:"textbox","aria-multiline":"true"}),s=f("div",{class:"rte-foot"}),r=f("div",{class:"lang-tabs",role:"tablist"}),o=()=>{let d=m=>Vl(n[m]).join(" ").split(/\s+/).filter(Boolean).length;Ve(s,f("span",null,`${d(t)} mots`),f("span",null,kn().map(m=>`${m.toUpperCase()} ${d(m)?"\u2713":"\xB7 \xE0 \xE9crire"}`).join("   ")))},a=()=>{i.innerHTML=Hl(n[t]),r.querySelectorAll("button").forEach(d=>d.setAttribute("aria-selected",String(d.dataset.l===t))),o()};kn().forEach(d=>r.appendChild(f("button",{type:"button",role:"tab","data-l":d,onclick:()=>{t=d,a()}},d.toUpperCase()))),i.addEventListener("input",()=>{n[t]=Hl(i.innerHTML),o(),be()}),i.addEventListener("paste",d=>{d.preventDefault();let m=d.clipboardData.getData("text/plain");document.execCommand("insertText",!1,m)}),i.addEventListener("focus",()=>{try{document.execCommand("defaultParagraphSeparator",!1,"p")}catch{}}),i.addEventListener("keydown",d=>{(d.metaKey||d.ctrlKey)&&d.key.toLowerCase()==="k"&&(d.preventDefault(),c())});let l=(d,m)=>{i.focus(),document.execCommand(d,!1,m),i.dispatchEvent(new Event("input"))};async function c(){let d=window.getSelection(),m=d.rangeCount?d.getRangeAt(0).cloneRange():null,_=await jl("Ajouter un lien","Adresse (https://\u2026 ou mailto:\u2026)","https://","Ajouter");if(!(!_||_==="https://")){if(i.focus(),m&&(d.removeAllRanges(),d.addRange(m)),m&&m.collapsed&&document.execCommand("insertText",!1,_.replace(/^https?:\/\/|^mailto:/,"")),m&&m.collapsed){let b=d.getRangeAt(0);b.setStart(b.startContainer,Math.max(0,b.startOffset-_.replace(/^https?:\/\/|^mailto:/,"").length))}l("createLink",/^(https?:|mailto:)/.test(_)?_:"https://"+_)}}let u=(d,m,_)=>f("button",{type:"button",title:m,"aria-label":m,onmousedown:b=>b.preventDefault(),onclick:_},d),h=f("div",{class:"rte-bar"},u(f("b",null,"G"),"Gras",()=>l("bold")),u(f("i",null,"I"),"Italique",()=>l("italic")),f("span",{class:"sep"}),u("Lien","Lien (Ctrl+K)",c),u("\u2022 Liste","Liste \xE0 puces",()=>l("insertUnorderedList")),u("Intertitre","Intertitre",()=>l("formatBlock","h3")),u("\xB6","Paragraphe normal",()=>l("formatBlock","p")),f("span",{class:"sep"}),u("Effacer","Retirer la mise en forme",()=>{l("removeFormat"),l("unlink")}),r);return a(),f("div",{class:"rte-wrap"},h,i,s)}var Wh=[["sections","Sections"],["posts","Contenus"],["models","Mod\xE8les 3D"],["media","M\xE9dias"],["settings","R\xE9glages"],["audience","Audience"],["history","Historique"]],ql,co,Ur,Nr;function Dr(){Ve(lo),ql=f("header",{class:"top"}),co=f("nav",{class:"nav","aria-label":"Back-office"}),Ur=f("main",{class:"main",id:"main"}),lo.appendChild(f("div",{class:"shell"},ql,co,Ur)),Nr=f("div",{class:"status","aria-live":"polite"}),ql.append(f("div",{class:"brand"},f("img",{alt:""}),f("span",{class:"name"}),f("small",null,T.backend.kind==="demo"?"Back-office \xB7 d\xE9mo":T.backend.kind==="folder"?"Back-office \xB7 dossier \xAB "+T.backend.name+" \xBB":"Back-office")),...T.backend.kind!=="demo"?[]:[f("button",{type:"button",class:"demo-tag",title:"Ouvrir les sauvegardes",onclick:()=>Js("history")},"D\xE9mo : ton travail reste dans ce navigateur, pas dans les fichiers du site. Exporte-le ou travaille dans le dossier.")],Nr,f("div",{class:"acts"},Ue("Aper\xE7u",()=>Ks(),"ghost",{title:"Voir le site avec les modifications non publi\xE9es"}),Ue("Publier",Ql,"primary",{title:"Ctrl+S"}))),js(),ho(),is(),Yt()}function ho(){if(!co)return;let n=T.content,e={sections:n.sections.length,posts:n.posts.length,models:n.models.length};Ve(co,f("ul",null,Wh.map(([t,i])=>f("li",null,f("button",{type:"button","aria-current":String(T.view===t),onclick:()=>Js(t)},i,e[t]!=null?f("small",null,e[t]):null)))),f("div",{class:"foot"},T.backend.kind==="github"?f("a",{href:`https://github.com/${T.cfg.owner}/${T.cfg.repo}`,target:"_blank",rel:"noopener"},`${T.cfg.owner}/${T.cfg.repo}`):null,window.HC_SITE_HTML?f("a",{href:"#",onclick:t=>{t.preventDefault(),Ks()}},"Voir le site"):f("a",{href:rs+"index.html",target:"_blank",rel:"noopener"},"Voir le site en ligne \u2197"),Zs()?f("a",{href:"#",onclick:t=>{t.preventDefault(),Vv()}},"Annuler les modifications"):null,T.backend.kind==="github"?f("a",{href:"#",onclick:t=>{t.preventDefault(),M_()}},"Se d\xE9connecter"):null,T.backend.kind!=="github"?f("a",{href:"#",onclick:t=>{t.preventDefault(),b_()}},T.backend.kind==="folder"?"Changer de dossier":"Quitter la d\xE9mo"):null))}function is(n){if(!Nr)return;let e=Zs();Nr.className="status"+(e?" dirty":"");let t=e?zh():[];Ve(Nr,f("i",{class:"dot"}),f("span",null,n||(e?"Non publi\xE9 : "+(t.join(", ")||"modifications"):"Tout est publi\xE9")))}function Js(n){T.view=n;try{history.replaceState(null,"","#/"+n)}catch{}ho(),Yt(),Ur.scrollTop=0}function Yt(){T.refreshList=null,T.onChange=null;let n={sections:Ah,posts:e_,models:s_,media:c_,settings:p_,audience:m_,history:g_}[T.view]||Ah;Ve(Ur,n())}function vi(n,e,t,...i){return f("div",{class:"page"},f("header",null,f("h1",null,n),t&&t.length?f("div",{class:"acts"},t):null,e?f("p",null,e):null),i)}function jv(n,e){let t=n.closest(".main");if(!t||window.innerWidth<980){e();return}let i=t.getBoundingClientRect().top,s=d=>{let m=d.querySelector(":scope > h3");return m?(m.firstChild&&m.firstChild.textContent||m.textContent).trim():""},r=[...n.querySelectorAll(".block")],o=t.getBoundingClientRect().bottom,a=r.find(d=>{let m=d.getBoundingClientRect();return m.top>=i-4&&m.top<o-60})||r.find(d=>d.getBoundingClientRect().bottom>i+80),l=a?s(a):"",c=a?a.getBoundingClientRect().top-i:0,u=t.scrollTop;e();let h=l&&[...n.querySelectorAll(".block")].find(d=>s(d)===l);h?t.scrollTop+=h.getBoundingClientRect().top-i-c:t.scrollTop=u}function ec(n){window.innerWidth<980&&setTimeout(()=>n.scrollIntoView({behavior:"smooth",block:"start"}),30)}function qh(n,e){let t=null,i=()=>n.querySelectorAll(".drop-before, .drop-after").forEach(s=>s.classList.remove("drop-before","drop-after"));n.querySelectorAll("[data-i]").forEach(s=>{s.draggable=!0,s.addEventListener("dragstart",r=>{t=+s.dataset.i,s.classList.add("dragging"),r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",String(t))}),s.addEventListener("dragend",()=>{s.classList.remove("dragging"),i(),t=null}),s.addEventListener("dragover",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect();i(),s.classList.add(r.clientY>o.top+o.height/2?"drop-after":"drop-before")}),s.addEventListener("drop",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect(),a=+s.dataset.i+(r.clientY>o.top+o.height/2?1:0);a>t&&a--;let l=t;t=null,i(),a!==l&&e(l,a)})})}var tc=n=>T.content.posts.filter(e=>e.section===n).length;function Ah(){let n=T.content;n.sections.find(r=>r.id===T.sel.section)||(T.sel.section=n.sections[0]&&n.sections[0].id);let e=f("div",{class:"card sticky"}),t=f("div"),i=()=>{let r=f("ul",{class:"list"},n.sections.map((o,a)=>f("li",{class:"row","data-i":a,tabindex:0,"aria-current":String(o.id===T.sel.section),onclick:()=>{T.sel.section=o.id,i(),s(),ec(t)},onkeydown:l=>{l.key==="Enter"&&l.currentTarget.click()}},f("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),f("div",{class:"th",style:{background:"#fafafa",border:"1px solid var(--line)"},html:Vh(o.layout)}),f("div",null,f("div",{class:"t"},dt(o.name)||o.id),f("div",{class:"m"},`${Xn(to[o.layout].label,"fr")} \xB7 ${Xn(Lr[o.card].label,"fr")} \xB7 ${tc(o.id)} contenus`)),f("div",{class:"b"},o.visible?null:f("span",{class:"badge off"},"masqu\xE9e"),n.settings.startSection===o.id?f("span",{class:"badge"},"arriv\xE9e"):null))));qh(r,(o,a)=>{Fi(n.sections,o,a),be({nav:!0}),i()}),Ve(e,f("header",{class:"toolbar",style:{justifyContent:"space-between"}},f("span",{class:"lbl",style:{margin:0}},"Ordre du menu"),Ue("+ Nouvelle section",Yv,"sm dark")),r,f("p",{class:"hint",style:{padding:"10px 12px",margin:0}},"Glisse les sections pour changer l\u2019ordre du menu du site."))},s=()=>{Ve(t,Jv(n.sections.find(r=>r.id===T.sel.section),()=>{i()},s))};return T.refreshList=i,i(),s(),vi("Sections","Chaque section du site est un objet 3D entour\xE9 de cartes. Choisis l\u2019objet, la fa\xE7on dont les cartes se disposent, leur type, et les tags qui servent \xE0 trier.",[],f("div",{class:"cols"},e,t))}function Yv(){let n=T.content,e=$n("section",n.sections.map(t=>t.id));n.sections.push({id:e,name:{en:"New section",fr:"Nouvelle section",ca:"Nova secci\xF3",es:"Nueva secci\xF3n"},model:n.models[0]?n.models[0].id:"",layout:"carousel",card:"image",open:"strip",perPage:8,defaultTag:"",visible:!0,tags:[]}),T.sel.section=e,be({nav:!0}),Yt()}function Jv(n,e,t){let i=T.content;if(!n)return f("div",{class:"card"},f("div",{class:"empty"},"Aucune section. Cr\xE9e la premi\xE8re avec \xAB + Nouvelle section \xBB."));let s=tc(n.id),r=f("h2",null,dt(n.name)||n.id),o=f("p",{class:"hint"},`Adresse directe : \u2026/#${n.id}`),a=wt(()=>n.id,()=>{},{spell:!1,onBlur:g=>{let p=pi(g.value);if(p===n.id){g.value=n.id;return}let R=$n(p,i.sections.filter(v=>v!==n).map(v=>v.id));i.posts.forEach(v=>{v.section===n.id&&(v.section=R)}),i.settings.startSection===n.id&&(i.settings.startSection=R),n.id=R,T.sel.section=R,g.value=R,o.textContent=`Adresse directe : \u2026/#${R}`,be({list:!0})}}),l=async()=>{await Bn("Supprimer la section",s?`\xAB ${dt(n.name)} \xBB contient ${s} contenu${s>1?"s":""}. Ils seront supprim\xE9s avec elle.`:`Supprimer \xAB ${dt(n.name)} \xBB ?`,"Supprimer","danger")&&(i.posts=i.posts.filter(p=>p.section!==n.id),i.sections.splice(i.sections.indexOf(n),1),i.settings.startSection===n.id&&(i.settings.startSection=i.sections[0]?i.sections[0].id:""),T.sel.section=null,be({nav:!0}),Yt())},c=i.models.map(g=>({value:g.id,label:g.name,pic:Wv(g)})),u=Object.entries(to).map(([g,p])=>({value:g,label:Xn(p.label,"fr"),hint:Xn(p.hint,"fr"),pic:f("div",{class:"pic",html:Vh(g)})})),h=Object.entries(Lr).map(([g,p])=>({value:g,label:Xn(p.label,"fr"),hint:{image:"Vignette paysage, titre, lieu",portrait:"Carr\xE9 : visage ou initiales",text:"Bandeau de texte, image facultative",place:"Logo ou photo et fiche du lieu"}[g],pic:f("div",{class:"pic",html:qv(g)})})),d=f("div",{class:"f",style:{marginTop:"16px"}}),m=()=>{d.hidden=n.layout!=="map";let g=new Map;i.posts.forEach(p=>{p.published&&p.spots.forEach(R=>{let v=R.city||`${R.lat}, ${R.lon}`;g.set(v,(g.get(v)||0)+1)})}),Ve(d,f("span",{class:"lbl"},"R\xE9seau"),On("Relier tous les lieux d\u2019intervention par des arcs depuis le bureau",()=>n.network,p=>{n.network=p},{after:m}),f("p",{class:"hint"},g.size?`${g.size} lieux renseign\xE9s dans les contenus : ${[...g.keys()].join(", ")}. On les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB.`:"Aucun lieu pour l\u2019instant : on les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB."),n.network&&!ts(i,n.id).some(p=>p.location)?f("p",{class:"hint",style:{color:"var(--warn)"}},"Donne une position \xE0 un contenu de cette section (ton bureau) : les arcs partent de l\xE0."):null)};m();let _=f("div",{class:"chips",role:"radiogroup","aria-label":"Ouverture"}),b=()=>Ve(_,...[["strip","Fiche 2D : images et texte en bandeau"],["focus3d","La carte vient vers la cam\xE9ra (fiche 3D)"]].map(([g,p])=>f("button",{type:"button",class:"chip",role:"radio","aria-pressed":String(n.open===g),"aria-checked":String(n.open===g),onclick:()=>{n.open=g,be(),b()}},p)));return b(),f("div",{class:"card"},f("header",null,r,f("div",{class:"acts"},Ue("Aper\xE7u",()=>Ks(n.id),"sm"),Ue("Contenus \u2192",()=>{T.filter.section=n.id,Js("posts")},"sm"),Ue("Supprimer",l,"sm danger"))),f("div",{class:"block"},f("h3",null,"Nom et adresse"),Fn("Nom dans le menu",n,"name",{list:!0,after:()=>{r.textContent=dt(n.name)||n.id}}),f("div",{class:"grid2"},f("label",{class:"f"},f("span",null,"Identifiant"),a,o),f("div",{style:{display:"grid",gap:"10px",alignContent:"start",paddingTop:"20px"}},On("Visible sur le site",()=>n.visible,g=>{n.visible=g},{list:!0}),On("Ses contenus sont des savoir-faire, reli\xE9s aux projets",()=>n.skills,g=>{n.skills=g},{list:!0}),On("Section d\u2019arriv\xE9e (apr\xE8s ENTER)",()=>i.settings.startSection===n.id,g=>{i.settings.startSection=g?n.id:(i.sections.find(p=>p!==n)||{}).id||""},{list:!0})))),f("div",{class:"block"},f("h3",null,"Objet 3D",f("small",null,"le mod\xE8le au centre de la section")),Wl(c,n.model,g=>{n.model=g,be()},"Objet 3D"),f("p",{class:"hint"},"Pour ajouter ton propre fichier Collada (.dae), passe par ",f("a",{href:"#",onclick:g=>{g.preventDefault(),Js("models")}},"Mod\xE8les 3D"),".")),f("div",{class:"block"},f("h3",null,"Disposition des cartes",f("small",null,"le style de la section")),Wl(u,n.layout,g=>{n.layout=g,m(),be({list:!0})},"Disposition"),d),f("div",{class:"block"},f("h3",null,"Type de carte"),Wl(h,n.card,g=>{n.card=g,n.open=Lr[g].open,b(),be({list:!0})},"Type de carte"),f("div",{style:{marginTop:"14px"}},f("span",{class:"lbl"},"Au clic sur une carte"),_)),f("div",{class:"block"},f("h3",null,"Tags",f("small",null,"pour trier les contenus, comme le menu \xAB cat\xE9gories \xBB du site")),Kv(n,t),f("div",{class:"grid2",style:{marginTop:"16px"}},f("div",null,ht("Tag affich\xE9 \xE0 l\u2019ouverture",Pn([{value:"",label:"Tout"},...n.tags.map(g=>({value:g.id,label:dt(g.label)||g.id}))],()=>n.defaultTag||"",g=>{n.defaultTag=g})),On("Sans \xAB Tout \xBB : un seul groupe \xE0 la fois",()=>!!n.noAll,g=>{g?n.noAll=!0:delete n.noAll})),ht("Cartes par page",wt(()=>n.perPage,g=>{n.perPage=Math.max(1,Math.min(40,g||1))},{type:"number",min:1,max:40}),"Au-del\xE0, les fl\xE8ches du site passent \xE0 la page suivante.")),f("div",{class:"grid2",style:{marginTop:"16px"}},ht("Taille des cartes (%)",wt(()=>n.cardScale||"",g=>{g===""||g===100?delete n.cardScale:n.cardScale=Math.max(40,Math.min(250,g))},{type:"number",min:40,max:250,step:5,placeholder:"100"}),"Agrandit ou r\xE9duit les cartes 3D de cette section. 100 = taille d\u2019origine."),ht("Distance de la cam\xE9ra (%)",wt(()=>n.camera||"",g=>{g===""||g===(n.layout==="map"?58:100)?delete n.camera:n.camera=Math.max(30,Math.min(250,g))},{type:"number",min:30,max:250,step:5,placeholder:n.layout==="map"?"58":"100"}),"Plus petit : la cam\xE9ra s\u2019approche de l\u2019objet. Vide : "+(n.layout==="map"?"58 pour la carte du monde.":"100."))),n.tags.length?Zv(n):null))}function $s(){let n=(T.content&&T.content.settings.seo&&T.content.settings.seo.url||"").trim();return n?n.replace(/\/?$/,"/"):/^https?:$/.test(location.protocol)&&/\/admin\/?/.test(location.pathname)?location.origin+location.pathname.replace(/admin\/?(index\.html)?$/,""):"https://mouawadlaurier.com/handcoded/"}function Zv(n){let e=$s();return f("div",{class:"f",style:{marginTop:"16px"}},f("span",{class:"lbl"},"Liens \xE0 envoyer"),f("div",{class:"chips"},n.tags.map(t=>f("button",{type:"button",class:"chip",title:e+"?tag="+t.id,onclick:async()=>{let i=e+"?tag="+t.id;try{await navigator.clipboard.writeText(i),ct("Lien copi\xE9 : "+i)}catch{ct(i,"ok",9e3)}}},(dt(t.label)||t.id)+" \u29C9"))),f("p",{class:"hint"},`Un clic copie le lien. Le site s\u2019ouvre sur l\u2019accueil, puis cette section arrive avec ce tag d\xE9j\xE0 choisi, par exemple ${e}?tag=${n.tags[0].id}. Le nom du tag marche aussi, dans n\u2019importe quelle langue (?tag=son). Pour sauter l\u2019accueil : ${e}#${n.id}/${n.tags[0].id}.`))}function Kv(n,e){let t=T.content,i=a=>t.posts.filter(l=>l.section===n.id&&l.tags.includes(a)).length,s=f("div",{class:"tags-ed"}),r={gridTemplateColumns:`20px repeat(${kn().length}, minmax(0, 1fr)) 96px 46px auto`},o=()=>{Ve(s,n.tags.length?f("div",{class:"tag-row head",style:r},f("span"),kn().map(a=>f("span",null,es[a])),f("span",null,"Identifiant"),f("span",null,"Contenus"),f("span")):f("p",{class:"hint",style:{margin:0}},"Pas encore de tag : tous les contenus s\u2019affichent ensemble."),...n.tags.map((a,l)=>{let c=i(a.id),u=wt(()=>a.label.en,h=>{a.label.en=h},{placeholder:"English",onBlur:()=>{if(!i(a.id)&&/^tag(-\d+)?$/.test(a.id)&&a.label.en.trim()){let h=a.id;a.id=$n(a.label.en,n.tags.filter(d=>d!==a).map(d=>d.id)),n.defaultTag===h&&(n.defaultTag=a.id),be(),o()}}});return f("div",{class:"tag-row",style:r},f("span",{class:"n",style:{textAlign:"left"}},l+1),kn().map(h=>h==="en"?u:wt(()=>a.label[h]??"",d=>{a.label[h]=d},{placeholder:es[h]})),f("span",{class:"id",title:a.id},a.id),f("span",{class:"n"},c),f("span",{style:{display:"flex",gap:"2px"}},n.open!=="strip"?Ue(a.page?"\u25A4":"\u25A2",()=>{a.page?delete a.page:a.page=!0,be(),o()},"sm icon ghost",{"aria-label":"Fiches en pleine page 2D","aria-pressed":String(!!a.page),title:a.page?"Fiches en pleine page 2D, \xE0 lire au premier plan":"Fiches en 3D, comme le reste de la section"}):null,Ue(a.menu===!1?"\u25CC":"\u25CF",()=>{a.menu===!1?delete a.menu:a.menu=!1,be(),o()},"sm icon ghost",{"aria-label":"Afficher dans le menu du site",title:a.menu===!1?"Cach\xE9 du menu du site (le tag sert au tri)":"Dans le menu du site"}),Ue("\u2191",()=>{l&&(Fi(n.tags,l,l-1),be(),o())},"sm icon ghost",{"aria-label":"Monter",disabled:!l}),Ue("\u2193",()=>{l<n.tags.length-1&&(Fi(n.tags,l,l+1),be(),o())},"sm icon ghost",{"aria-label":"Descendre",disabled:l===n.tags.length-1}),Ue("\xD7",async()=>{c&&!await Bn("Supprimer le tag",`\xAB ${dt(a.label)} \xBB est utilis\xE9 par ${c} contenu${c>1?"s":""}. Il leur sera retir\xE9.`,"Supprimer","danger")||(t.posts.forEach(h=>{h.section===n.id&&(h.tags=h.tags.filter(d=>d!==a.id))}),n.tags.splice(l,1),n.defaultTag===a.id&&(n.defaultTag=""),be(),e())},"sm icon ghost danger",{"aria-label":"Supprimer le tag"})))}),f("div",null,Ue("+ Ajouter un tag",()=>{n.tags.push({id:$n("tag",n.tags.map(a=>a.id)),label:qn()}),be(),e(),setTimeout(()=>{let a=s.querySelectorAll(".tag-row input");a.length&&a[a.length-2].focus()},0)},"sm")))};return o(),s}var Qv={image:{title:"Titre",subtitle:"Sous-titre (artiste, client\u2026)",place:"Lieu",body:"Description",thumb:"Vignette de la carte"},portrait:{title:"Nom",subtitle:"R\xF4le",place:"Ville",body:"Bio courte",thumb:"Portrait"},text:{title:"Titre",subtitle:"Sous-titre",place:"Lieu",body:"Texte",thumb:"Petite image (facultative)"},place:{title:"Nom du lieu ou du bureau",subtitle:"Activit\xE9",place:"Ville affich\xE9e",body:"Adresse et coordonn\xE9es",thumb:"Logo ou photo"}};function Zl(n){let e=T.content.sections.find(r=>r.id===n.section),t=[],i=kn(),s=r=>Vl(n.body[r]).length>0;return i.some(r=>!n.title[r])&&t.push("titre \xE0 traduire"),i.some(s)?i.every(s)||t.push("texte \xE0 traduire ("+i.filter(r=>!s(r)).map(r=>r.toUpperCase()).join(", ")+")"):t.push("pas de texte"),e&&["image","portrait"].includes(e.card)&&!n.thumb&&!e.skills&&t.push("pas d\u2019image"),e&&e.skills&&!T.content.posts.some(r=>(r.skills||[]).includes(n.id))&&t.push("aucun projet reli\xE9"),e&&e.layout==="map"&&!n.location&&t.push("pas de position"),t}function e_(){let n=T.content;if(n.sections.find(a=>a.id===T.filter.section)||(T.filter.section=n.sections[0]&&n.sections[0].id),!n.sections.length)return vi("Contenus",null,[],f("div",{class:"card"},f("div",{class:"empty"},"Cr\xE9e d\u2019abord une section.")));let e=f("div",{class:"card sticky"}),t=f("div"),i=()=>n.sections.find(a=>a.id===T.filter.section),s=()=>{let a=T.filter.q.trim().toLowerCase();return ts(n,T.filter.section,{all:!0}).filter(l=>(!T.filter.tag||l.tags.includes(T.filter.tag))&&(!a||[l.title.en,l.title.fr,l.subtitle.en,l.subtitle.fr,l.place.en,l.place.fr,l.id].join(" ").toLowerCase().includes(a))&&(!T.filter.status||T.filter.status==="on"&&l.published||T.filter.status==="off"&&!l.published||T.filter.status==="todo"&&Zl(l).length))},r=()=>{let a=i(),l=s(),c=T.filter.tag||T.filter.q||T.filter.status;T.filter.tag&&!a.tags.find(b=>b.id===T.filter.tag)&&(T.filter.tag="");let u=f("div",{class:"tabs",role:"tablist"},n.sections.map(b=>f("button",{type:"button",role:"tab","aria-selected":String(b.id===a.id),onclick:()=>{T.filter.section=b.id,T.filter.tag="",T.sel.post=null,r(),o()}},dt(b.name)||b.id,f("small",null,tc(b.id))))),h=f("input",{type:"search",placeholder:"Chercher\u2026",value:T.filter.q,"aria-label":"Chercher"});h.addEventListener("input",()=>{T.filter.q=h.value,_()});let d=f("div",{class:"toolbar"},Pn([{value:"",label:"Tous les tags"},...a.tags.map(b=>({value:b.id,label:dt(b.label)||b.id}))],()=>T.filter.tag,b=>{T.filter.tag=b,_()}),Pn([{value:"",label:"Tous"},{value:"on",label:"Visibles"},{value:"off",label:"Masqu\xE9s"},{value:"todo",label:"\xC0 compl\xE9ter"}],()=>T.filter.status,b=>{T.filter.status=b,_()}),h),m=f("div",{class:"list-scroll"});function _(){let b=s(),g=T.filter.tag||T.filter.q||T.filter.status,p=m.scrollTop,R=f("ul",{class:"list"},b.map((v,E)=>{let U=Zl(v),D=f("div",{class:"th"+(a.card==="portrait"?" portrait":"")},v.thumb?null:kh(dt(v.title)));return v.thumb&&(D.style.backgroundImage=`url("${Ln(v.thumb)}")`),f("li",{class:"row","data-i":E,tabindex:0,"aria-current":String(v.id===T.sel.post),onclick:()=>{T.sel.post=v.id,_(),jv(t,o),ec(t)},onkeydown:O=>{O.key==="Enter"&&O.currentTarget.click()}},g?null:f("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),D,f("div",null,f("div",{class:"t"},dt(v.title)||f("i",{style:{color:"var(--ink-4)"}},"Sans titre")),f("div",{class:"m"},[v.tags.map(O=>{let $=a.tags.find(C=>C.id===O);return $?dt($.label):null}).filter(Boolean).join(", "),v.date].filter(Boolean).join(" \xB7 ")||" ")),f("div",{class:"b"},v.published?null:f("span",{class:"badge off"},"masqu\xE9"),U.length?f("span",{class:"badge warn",title:U.join(", ")},"\xE0 compl\xE9ter"):null))}));g||qh(R,(v,E)=>{let U=ts(n,a.id,{all:!0});Fi(U,v,E),U.forEach((D,O)=>{D.order=O}),be(),_()}),Ve(m,b.length?R:f("div",{class:"empty"},c?"Aucun contenu ne correspond.":"Aucun contenu dans cette section."),f("p",{class:"hint",style:{padding:"10px 12px",margin:0}},g?"Retire les filtres pour changer l\u2019ordre.":"Glisse pour changer l\u2019ordre des cartes sur le site.")),m.scrollTop=p}_(),Ve(e,u,f("div",{class:"toolbar",style:{justifyContent:"space-between"}},f("span",{class:"lbl",style:{margin:0}},`${l.length} contenu${l.length>1?"s":""}`),Ue("+ Nouveau contenu",()=>n_(a),"sm dark")),d,m),T.refreshList=_},o=()=>{let a=n.posts.find(l=>l.id===T.sel.post&&l.section===T.filter.section);Ve(t,a?i_(a,r,o):f("div",{class:"card"},f("div",{class:"empty"},"Choisis un contenu dans la liste, ou cr\xE9e-en un nouveau.")))};return r(),o(),vi("Contenus","Projets, savoir-faire, portraits, lieux : chaque contenu devient une carte dans sa section. Les textes s\u2019\xE9crivent en anglais et en fran\xE7ais.",[],f("div",{class:"cols"},e,t))}function t_(n){let e=T.content;return{id:$n("nouveau-contenu",e.posts.map(t=>t.id)),section:n.id,order:Math.max(-1,...ts(e,n.id,{all:!0}).map(t=>t.order??0))+1,published:!1,title:qn(),subtitle:qn(),place:qn(),date:"",tags:T.filter.tag?[T.filter.tag]:[],thumb:"",thumbBack:"",body:qn(),media:[],link:"",team:[],credits:"",location:null,spots:[],skills:[],author:"",logos:[]}}function n_(n){let e=t_(n);T.content.posts.push(e),T.sel.post=e.id,T.filter.q="",T.filter.status="",be({nav:!0}),Yt(),setTimeout(()=>{let t=Ur.querySelector(".card .lang input");t&&t.focus()},30)}function i_(n,e,t){["tags","media","team","spots","skills","logos"].forEach(P=>{Array.isArray(n[P])||(n[P]=[])}),typeof n.author!="string"&&(n.author="");let i=T.content,s=i.sections.find(P=>P.id===n.section),r=!!s.skills,o=r?{title:"Nom du savoir-faire",subtitle:"Phrase courte, \xE9crite sur la carte",place:"",body:"Texte de la fiche",thumb:"Image d\u2019illustration (facultative)"}:Qv[s.card],a=f("h2",null,dt(n.title)||"Sans titre"),l=()=>{a.textContent=dt(n.title)||"Sans titre"},c={list:!0},u=`media/${n.id}`,h=async()=>{await Bn("Supprimer ce contenu",`\xAB ${dt(n.title)||"Sans titre"} \xBB sera retir\xE9 du site \xE0 la prochaine publication.`,"Supprimer","danger")&&(i.posts.splice(i.posts.indexOf(n),1),i.posts.forEach(P=>{P.team=P.team.filter(F=>F!==n.id),P.skills=(P.skills||[]).filter(F=>F!==n.id)}),T.sel.post=null,be({nav:!0}),Yt())},d=()=>{let P=structuredClone(n);P.id=$n(n.id+"-copie",i.posts.map(F=>F.id)),P.order=(n.order??0)+.5,P.published=!1,Kt.forEach(F=>{P.title[F]&&(P.title[F]+={fr:" (copie)",ca:" (c\xF2pia)",es:" (copia)"}[F]||" (copy)")}),i.posts.push(P),ts(i,s.id,{all:!0}).forEach((F,H)=>{F.order=H}),T.sel.post=P.id,be({nav:!0}),Yt()},m=(P,F,H)=>{let J=f("div",{class:"prev "+s.card}),j=f("div",{class:"acts"}),ge=f("div",{class:"drop"},J,j),ce=()=>{J.style.backgroundImage=n[P]?`url("${Ln(n[P])}")`:"",J.textContent=n[P]?"":P==="thumb"?kh(dt(n.title)):"",Ve(j,Ue(n[P]?"Remplacer\u2026":"Choisir une image\u2026",()=>Yn("image/*",!1,_e),"sm"),n[P]?Ue("Retirer",()=>{n[P]="",be(c),ce()},"sm ghost danger"):null,f("p",null,H))},_e=async Ie=>{if(Ie[0])try{let Y=await gi(Ie[0],u,"thumb");xn(Y.path,Y.blob),n[P]=Y.path,be(c),ce()}catch(Y){ct(Y.message,"bad",7e3)}};return ro(ge,_e),ce(),f("div",{class:"f"},f("span",{class:"lbl"},F),ge)},_=f("div",{class:"media-list"});Oh(_,".media-item",".pv",(P,F)=>{Fi(n.media,P,F),be(),b()});let b=()=>{let P=f("div",{class:"media-add",role:"button",tabindex:0,onclick:()=>Yn("image/*,video/mp4,video/webm",!0,g),onkeydown:H=>{H.key==="Enter"&&H.currentTarget.click()}},f("span",null,"+ Ajouter des images ou des vid\xE9os",f("br"),f("small",null,"ou glisse-les ici")));ro(P,g);let F=f("div",{class:"media-add",role:"button",tabindex:0,onkeydown:H=>{H.key==="Enter"&&H.currentTarget.click()},onclick:async()=>{let H=await jl("Ajouter une vid\xE9o","Lien YouTube ou Vimeo (youtube.com/watch?v=\u2026, youtu.be/\u2026, vimeo.com/\u2026), ou adresse d\u2019une image en ligne","https://","Ajouter");!H||!/^https?:\/\/\S+$/.test(H.trim())||(n.media.push({src:H.trim()}),be(),b())}},f("span",null,"+ Vid\xE9o YouTube / Vimeo",f("br"),f("small",null,"colle son lien (ou celui d\u2019une image en ligne)")));Ve(_,...n.media.map((H,J)=>{let j=Ph(H.src),ce=j==="youtube"?f("img",{src:`https://i.ytimg.com/vi/${Lh(H.src)}/hqdefault.jpg`,alt:"",loading:"lazy"}):j==="vimeo"?f("span",{style:{color:"#888",font:"italic 18px Georgia, serif"}},"Vimeo"):j==="video"?f("video",{src:Ln(H.src),muted:!0,preload:"metadata",playsinline:!0}):f("img",{src:Ln(H.src),alt:"",loading:"lazy"});return f("div",{class:"media-item"},f("div",{class:"pv",title:"Glisse pour changer l\u2019ordre"},ce,f("b",{class:"rank"},String(J+1))),f("div",{class:"ft"},f("span",{title:H.src},(j==="image"?"":"\u25B6 ")+(j==="youtube"?"YouTube":j==="vimeo"?"Vimeo "+H.src.split("/").pop():decodeURIComponent(H.src.split("?")[0].split("/").pop()))),Ue("\u2190",()=>{J&&(Fi(n.media,J,J-1),be(),b())},"sm icon ghost",{"aria-label":"Avant",disabled:!J}),Ue("\u2192",()=>{J<n.media.length-1&&(Fi(n.media,J,J+1),be(),b())},"sm icon ghost",{"aria-label":"Apr\xE8s",disabled:J===n.media.length-1}),Ue("\xD7",()=>{n.media.splice(J,1),be(),b()},"sm icon ghost danger",{"aria-label":"Retirer"})),f("div",{class:"cr"},wt(()=>H.credit||"",_e=>{H.credit=_e},{placeholder:"Cr\xE9dit photo"})),(()=>{let _e=f("div"),Ie=f("details",{class:"mcap-ed"},f("summary",null,H.caption&&Object.values(H.caption).some(Boolean)?"L\xE9gende \u2713":"L\xE9gende"),_e);return Ie.addEventListener("toggle",()=>{Ie.open&&!_e.firstChild&&_e.appendChild(Fn("",H,"caption"))}),Ie})())}),P,F)},g=async P=>{for(let F of P)try{let H=await gi(F,u,"media");xn(H.path,H.blob),n.media.push({src:H.path}),be(),b()}catch(H){ct(H.message,"bad",7e3)}};b();let p=f("div",{class:"chips"}),R=()=>{Ve(p,...s.tags.map(P=>f("button",{type:"button",class:"chip","aria-pressed":String(n.tags.includes(P.id)),onclick:()=>{n.tags=n.tags.includes(P.id)?n.tags.filter(F=>F!==P.id):s.tags.map(F=>F.id).filter(F=>F===P.id||n.tags.includes(F)),be(c),R()}},dt(P.label)||P.id)),Ue("+ Nouveau tag",async()=>{let P=await jl("Nouveau tag",`Nom du tag (section \xAB ${dt(s.name)} \xBB)`,"","Cr\xE9er");if(!P)return;let F={id:$n(P,s.tags.map(H=>H.id)),label:Object.fromEntries(Kt.map(H=>[H,P]))};s.tags.push(F),n.tags.push(F.id),be(c),R(),ct("Tag cr\xE9\xE9. Tu peux traduire son nom dans Sections.")},"sm ghost"))};R();let v=i.posts.filter(P=>P.id!==n.id&&(i.sections.find(F=>F.id===P.section)||{}).card==="portrait"),E=f("div",{class:"chips"}),U=()=>Ve(E,...v.length?v.map(P=>f("button",{type:"button",class:"chip","aria-pressed":String(n.team.includes(P.id)),onclick:()=>{n.team=n.team.includes(P.id)?n.team.filter(F=>F!==P.id):[...n.team,P.id],be(),U()}},dt(P.title))):[f("p",{class:"hint",style:{margin:0}},"Ajoute des portraits dans une section de type \xAB Portrait \xBB pour les relier ici.")]);U();let D=f("div"),O=()=>{let P=[...new Set(i.posts.flatMap(ce=>ce.logos||[]).concat(n.logos,T.logoFiles||[],[...T.staged.keys()].filter(ce=>ce.startsWith("media/logos/"))))].sort((ce,_e)=>(n.logos.indexOf(_e)>=0)-(n.logos.indexOf(ce)>=0)||ce.localeCompare(_e));!T.logoFiles&&T.backend.listFiles&&(T.logoFiles=[],T.backend.listFiles(["media/logos/"]).then(ce=>{T.logoFiles=ce.map(_e=>_e.path).filter(_e=>/\.(png|jpe?g|svg|webp|gif)$/i.test(_e)),D.isConnected&&O()}).catch(()=>{}));let F=ce=>{let _e=i.posts.find(Ie=>Ie.thumb===ce&&dt(Ie.title));return _e?dt(_e.title):H(ce)},H=ce=>decodeURIComponent(ce.split("/").pop().replace(/-[a-z0-9]{4}\.[a-z]+$/i,"").replace(/\.[a-z]+$/i,"")).replace(/[-_]+/g," "),J=async(ce,_e)=>{if(_e)try{let Ie=await gi(_e,"media/logos","logo");xn(Ie.path,Ie.blob);let Y=0;i.posts.forEach(Ct=>{(Ct.logos||[]).includes(ce)&&(Ct.logos=Ct.logos.map(ze=>ze===ce?Ie.path:ze),Y++),Ct.thumb===ce&&(Ct.thumb=Ie.path,Y++)}),T.logoFiles=(T.logoFiles||[]).filter(Ct=>Ct!==ce),be(),O(),ct(`Logo remplac\xE9 (${Y} endroit${Y>1?"s":""}). Il part sur le site \xE0 la prochaine publication.`)}catch(Ie){ct(Ie.message,"bad",7e3)}},j=async ce=>{for(let _e of ce)try{let Ie=await gi(_e,"media/logos","logo");xn(Ie.path,Ie.blob),n.logos.push(Ie.path),be()}catch(Ie){ct(Ie.message,"bad",7e3)}O()},ge=f("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"64px"},onclick:()=>Yn("image/*",!0,j),onkeydown:ce=>{ce.key==="Enter"&&ce.currentTarget.click()}},f("span",null,"+ Ajouter des logos",f("br"),f("small",null,"PNG ou SVG, fond blanc ou transparent")));ro(ge,j),Ve(D,f("div",{class:"logo-lib"},P.map(ce=>{let _e=n.logos.includes(ce);return f("div",{class:"logo-cell"},f("button",{type:"button",class:"logo-chip","aria-pressed":String(_e),title:F(ce),onclick:()=>{n.logos=_e?n.logos.filter(Ie=>Ie!==ce):[...n.logos,ce],be(),O()}},f("img",{src:Ln(ce),alt:F(ce),loading:"lazy"}),f("span",null,F(ce))),f("button",{type:"button",class:"logo-swap",title:"Remplacer ce logo par un nouveau fichier, partout o\xF9 il est utilis\xE9","aria-label":"Remplacer le logo "+F(ce),onclick:()=>Yn("image/*",!1,Ie=>J(ce,Ie[0]))},"\u21BB"))}),ge),f("p",{class:"hint"},n.logos.length?`${n.logos.length} logo${n.logos.length>1?"s":""} en bas de la fiche, dans l\u2019ordre o\xF9 tu les as coch\xE9s. Les logos des autres projets sont propos\xE9s ici : un clic pour l\u2019ajouter ou le retirer.`:"Les logos s\u2019affichent en bas de la fiche, dans un panneau \xAB Partenaires \xBB. Ceux d\xE9j\xE0 utilis\xE9s sur d\u2019autres projets sont propos\xE9s ici : un clic suffit."))};O();let $=P=>i.sections.find(F=>F.id===P.section)||{},C=i.posts.filter(P=>$(P).skills&&(dt(P.title)||(n.skills||[]).includes(P.id))),N=i.posts.filter(P=>!$(P).skills&&["image","text"].includes($(P).card)),Q=s.skills||["image","text"].includes(s.card),le=f("div"),oe=(P,F,H)=>{let J=i.sections.map(j=>[j,P.filter(ge=>ge.section===j.id)]).filter(([,j])=>j.length);return J.map(([j,ge])=>f("div",{style:{marginBottom:"10px"}},J.length>1?f("span",{class:"lbl"},dt(j.name)||j.id):null,f("div",{class:"chips"},ge.map(ce=>f("button",{type:"button",class:"chip","aria-pressed":String(F(ce)),title:ce.published?"":"Masqu\xE9 sur le site",style:ce.published?null:{opacity:".55"},onclick:()=>{H(ce),be(),B()}},dt(ce.title)||ce.id)))))},B=()=>{if(s.skills){let P=N.filter(H=>H.skills.includes(n.id)),F=P.length;Ve(le,F?f("div",{class:"chips"},P.map(H=>f("span",{class:"chip","aria-pressed":"true",title:H.published?"":"Masqu\xE9 sur le site",style:{cursor:"default",opacity:H.published?null:".55"}},dt(H.title)||H.id))):f("p",{class:"hint",style:{margin:0}},"Aucun projet ne l\u2019utilise pour l\u2019instant."),f("p",{class:"hint"},(F?`${F} projet${F>1?"s":""}. Sur le site, la fiche les fait d\xE9filer avec leur vignette, et la carte 3D illustre son texte avec la photo de l\u2019un d\u2019eux. `:"")+"Pour relier un projet, ouvre-le et coche ce savoir-faire dans son bloc \xAB Savoir-faire \xBB, juste sous les tags."))}else Ve(le,C.length?oe(C,P=>n.skills.includes(P.id),P=>{n.skills=n.skills.includes(P.id)?n.skills.filter(F=>F!==P.id):[...n.skills,P.id]}):f("p",{class:"hint",style:{margin:0}},"Aucune section de savoir-faire : coche \xAB Ses contenus sont des savoir-faire \xBB dans les r\xE9glages d\u2019une section."),C.length?f("p",{class:"hint"},"Affich\xE9s sur la fiche du projet. Un clic ouvre la fiche du savoir-faire, qui liste \xE0 son tour ses projets."):null)};Q&&B();let Z=f("div"),V=i.sections.find(P=>P.layout==="map"&&P.network),k=()=>{let P=j=>n.spots.some(ge=>ge.city===j),F=j=>{n.spots.push({city:j,lat:jn[j][0],lon:jn[j][1]}),be(),k()},H=mh([Xn(n.place,"en"),Xn(n.place,"fr")].join(" , ")).filter(j=>jn[j]&&!P(j)),J=f("select",{"aria-label":"Ajouter une ville"},f("option",{value:""},"+ Ajouter une ville\u2026"),Object.keys(jn).sort().filter(j=>!P(j)).map(j=>f("option",{value:j},j)),f("option",{value:"__other"},"Autre lieu (coordonn\xE9es)\u2026"));J.addEventListener("change",async()=>{let j=J.value;if(!j)return;if(j!=="__other"){F(j);return}let ge=await r_();ge&&(n.spots.push(ge),be()),k()}),Ve(Z,f("div",{class:"chips"},n.spots.length?n.spots.map((j,ge)=>f("span",{class:"chip on"},j.city||`${j.lat}, ${j.lon}`,f("button",{type:"button",class:"x","aria-label":"Retirer "+(j.city||"ce lieu"),onclick:()=>{n.spots.splice(ge,1),be(),k()}},"\xD7"))):f("span",{class:"hint",style:{margin:0}},"Aucune ville pour l\u2019instant.")),H.length?f("p",{class:"hint"},"Rep\xE9r\xE9 dans le champ \xAB Lieu \xBB :",H.map(j=>f("button",{type:"button",class:"chip sugg",onclick:()=>F(j)},"+ "+j))):null,f("div",{style:{marginTop:"10px",maxWidth:"320px"}},J))};k();let q=f("div"),W=()=>{let P=n.location,F=Pn([{value:"",label:"Pas de position"},...Object.keys(jn).sort().map(H=>({value:H,label:H})),{value:"__other",label:"Autre (latitude / longitude)\u2026"}],()=>P?jn[P.city]?P.city:"__other":"",H=>{H?H==="__other"?n.location={city:P?P.city:"",lat:P?P.lat:0,lon:P?P.lon:0}:n.location={city:H,lat:jn[H][0],lon:jn[H][1]}:n.location=null,W()},c);Ve(q,f("div",{class:"grid3"},ht("Ville",F),P?ht("Latitude",wt(()=>P.lat,H=>{P.lat=+H||0},{type:"number",step:.01})):null,P?ht("Longitude",wt(()=>P.lon,H=>{P.lon=+H||0},{type:"number",step:.01})):null))};W();let se=wt(()=>n.id,()=>{},{spell:!1,onBlur:P=>{let F=pi(P.value);if(F===n.id){P.value=n.id;return}let H=$n(F,i.posts.filter(J=>J!==n).map(J=>J.id));i.posts.forEach(J=>{J.team=J.team.map(j=>j===n.id?H:j),J.skills=(J.skills||[]).map(j=>j===n.id?H:j)}),n.id=H,T.sel.post=H,P.value=H,be(c)}}),re=f("span",{class:"badge"}),he=()=>{let P=Zl(n);re.className="badge"+(P.length?" warn":""),re.textContent=P.length?"\xC0 compl\xE9ter : "+P.join(", "):"Complet"};return he(),T.onChange=he,f("div",{class:"card"},f("header",null,a,f("div",{class:"acts"},Ue("Aper\xE7u",()=>Ks(s.id),"sm"),Ue("Dupliquer",d,"sm"),Ue("Supprimer",h,"sm danger"))),f("div",{class:"block",style:{display:"flex",gap:"18px",alignItems:"center",flexWrap:"wrap"}},On("Visible sur le site",()=>n.published,P=>{n.published=P},c),ht("Section",Pn(i.sections.map(P=>({value:P.id,label:dt(P.name)||P.id})),()=>n.section,P=>{let F=i.sections.find(H=>H.id===P);n.section=P,n.tags=n.tags.filter(H=>F.tags.some(J=>J.id===H)),n.order=Math.max(-1,...ts(i,P,{all:!0}).filter(H=>H!==n).map(H=>H.order??0))+1,T.filter.section=P,ct(`D\xE9plac\xE9 dans \xAB ${dt(F.name)} \xBB.`),Yt()})),re),f("div",{class:"block"},f("h3",null,"Textes de la carte"),Fn(o.title,n,"title",{list:!0,after:l}),Fn(o.subtitle,n,"subtitle",c),r?f("p",{class:"hint",style:{marginTop:"4px"}},"Sur le site, la carte montre le nom et cette phrase, avec une image \xE0 c\xF4t\xE9 : la tienne, sinon la photo d\u2019un projet reli\xE9. Sans phrase, le d\xE9but du texte."):null,r?null:Fn(o.place,n,"place",{...c,after:()=>k()}),r?null:f("div",{class:"grid2"},ht("Auteur de l\u2019\u0153uvre",wt(()=>n.author||"",P=>{n.author=P},{placeholder:"Ex. Romain Tardy"}),`Sign\xE9 sur la vignette 3D : \xAB ${dt(n.title)||"Titre"} \xB7 ${n.author||T.content.settings.name} \xBB. Vide : sign\xE9 ${T.content.settings.name}.`),f("div"),ht("Date",wt(()=>n.date,P=>{n.date=P},{...c,placeholder:"2019, ou 2017 \u2013 2019"})),ht("Lien",wt(()=>n.link,P=>{n.link=P.trim()},{type:"url",placeholder:"https://\u2026"}),s.card==="place"?"Affich\xE9 sur la fiche du lieu.":"Affich\xE9 sous la fiche : \xAB Voir le site \xBB."))),r?f("div",{class:"block"},f("h3",null,"Projets",f("small",null,"ceux qui l\u2019ont coch\xE9 dans leur fiche")),le):null,f("div",{class:"block"},f("h3",null,o.body),Gh(n.body,"\xC9cris ici. Les paragraphes se r\xE9partissent tout seuls sur les panneaux du site.")),f("div",{class:"block"},f("h3",null,"Images"),m("thumb",o.thumb,r?"Une image qui fait comprendre le savoir-faire d\u2019un coup d\u2019\u0153il. Sans image : la photo d\u2019un projet reli\xE9, tir\xE9e au hasard.":s.card==="image"?"Format paysage. Sans image, la carte affiche le titre sur fond noir.":s.card==="portrait"?"Carr\xE9, cadr\xE9 sur le visage. Sans image : les initiales.":"Facultatif."),["image","portrait"].includes(s.card)&&!r?f("details",null,f("summary",{class:"lbl",style:{cursor:"pointer",margin:"6px 0 10px"}},"Dos de la carte (facultatif)"),m("thumbBack","Image au dos","Vue quand la carte est de dos. Par d\xE9faut : la vignette, p\xE2lie.")):null,s.open==="strip"?f("div",{class:"f",style:{marginTop:"6px"}},f("span",{class:"lbl"},"Images et vid\xE9os de la fiche"),_,f("p",{class:"hint"},"La premi\xE8re s\u2019affiche avant le texte, les autres apr\xE8s. Vid\xE9os MP4 ou WebM, id\xE9alement moins de 20 Mo.")):null),f("div",{class:"block"},f("h3",null,"Tags"),p),Q&&!r?f("div",{class:"block"},f("h3",null,"Savoir-faire",f("small",null,"coche ceux utilis\xE9s sur ce projet, comme des tags")),le):null,s.open==="strip"?f("div",{class:"block"},f("h3",null,"Logos des partenaires",f("small",null,"producteurs, soutiens, lieux, clients")),D):null,["image","text"].includes(s.card)&&!r?f("div",{class:"block"},f("h3",null,"Qui a travaill\xE9 dessus ?",f("small",null,"les portraits s\u2019affichent sur la fiche")),E,f("div",{style:{marginTop:"12px"}},ht("Autres cr\xE9dits",wt(()=>n.credits,P=>{n.credits=P},{placeholder:"Ex. Tigre Lab, Studio X"})))):null,s.layout!=="map"&&!r?f("div",{class:"block"},f("h3",null,"Villes",f("small",null,V?`toutes les villes du projet, autant que tu veux : les points du r\xE9seau sur la carte de \xAB ${dt(V.name)} \xBB`:"toutes les villes du projet, autant que tu veux")),Z):null,s.layout==="map"?f("div",{class:"block"},f("h3",null,"Position sur la carte du monde"),q):null,f("details",{class:"block"},f("summary",{class:"lbl",style:{cursor:"pointer",margin:0}},"Avanc\xE9"),f("div",{class:"grid2",style:{marginTop:"12px"}},ht("Identifiant",se,"Sert aux liens \xAB \xE9quipe \xBB et au dossier des images."),ht("Dossier des fichiers",f("input",{type:"text",value:u+"/",disabled:!0})))))}function s_(){let n=T.content;n.models.find(r=>r.id===T.sel.model)||(T.sel.model=n.models[0]&&n.models[0].id);let e=f("div",{class:"card sticky"}),t=f("div"),i=()=>{Ve(e,f("header",{class:"toolbar",style:{justifyContent:"space-between"}},f("span",{class:"lbl",style:{margin:0}},`${n.models.length} mod\xE8le${n.models.length>1?"s":""}`),Ue("+ Importer un .dae",Ch,"sm dark")),f("ul",{class:"list"},n.models.map(r=>{let o=n.sections.filter(a=>a.model===r.id);return f("li",{class:"row",tabindex:0,"aria-current":String(r.id===T.sel.model),onclick:()=>{T.sel.model=r.id,i(),s(),ec(t)},onkeydown:a=>{a.key==="Enter"&&a.currentTarget.click()}},f("div",{class:"th",style:{background:"#f4f4f2"}},"\u25B2"),f("div",null,f("div",{class:"t"},r.name),f("div",{class:"m"},o.length?"Utilis\xE9 par "+o.map(a=>dt(a.name)).join(", "):"Pas utilis\xE9")),f("div",{class:"b"},r.builtin?f("span",{class:"badge"},"origine"):null,T.staged.has(r.file)?f("span",{class:"badge new"},"nouveau"):null))})),f("div",{class:"block"},f("h3",null,"Importer un mod\xE8le"),f("p",{class:"hint",style:{marginTop:0}},"S\xE9lectionne ensemble le fichier .dae et ses textures (JPG, PNG). Export Collada depuis Maya, Blender, Cinema 4D\u2026 Les noms de fichiers des textures doivent correspondre \xE0 ceux cit\xE9s dans le .dae."),(()=>{let r=f("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"80px"},onclick:Ch},"Glisse ici le .dae et ses textures");return ro(r,o=>nc(o)),r})())),e.querySelectorAll(".row .th").forEach((r,o)=>{let a=n.models[o];Jl.snapshot(a).then(l=>{r.style.background=`#f4f4f2 url("${l}") center / cover`,r.textContent=""}).catch(()=>{})})},s=()=>{let r=n.models.find(v=>v.id===T.sel.model);if(!r){Ve(t,f("div",{class:"card"},f("div",{class:"empty"},"Aucun mod\xE8le.")));return}let o=f("div",{class:"model-view"}),a=f("p",{class:"msg"});o.appendChild(a);let l=()=>{Jl.show(o,r,a,!0)},c=n.sections.filter(v=>v.model===r.id),u=async()=>{if(c.length){ct(`Ce mod\xE8le sert \xE0 ${c.map(v=>dt(v.name)).join(", ")}. Choisis un autre objet pour ces sections d\u2019abord.`,"bad",7e3);return}if(await Bn("Supprimer le mod\xE8le",`\xAB ${r.name} \xBB sera retir\xE9 de la liste${r.builtin?"":" et ses fichiers supprim\xE9s du d\xE9p\xF4t \xE0 la prochaine publication"}.`,"Supprimer","danger")){if(!r.builtin){let v=r.file.replace(/[^/]+$/,"");[r.file,...(r.textures||[]).map(E=>v+E)].forEach(E=>{T.staged.has(E)&&(URL.revokeObjectURL(T.staged.get(E).url),T.staged.delete(E))})}n.models.splice(n.models.indexOf(r),1),T.sel.model=null,be({nav:!0}),Yt()}},h=f("input",{type:"range",min:-180,max:180,step:5,value:r.rotationY||0}),d=f("b",null,(r.rotationY||0)+"\xB0");h.addEventListener("input",()=>{r.rotationY=+h.value,d.textContent=h.value+"\xB0",be()}),h.addEventListener("change",l);let m=wt(()=>r.height||420,v=>{r.height=Math.max(50,Math.min(1200,v||420))},{type:"number",min:50,max:1200,step:10});m.addEventListener("change",l);let _=f("input",{type:"range",min:10,max:400,step:5,value:r.scale||100}),b=f("b",null,(r.scale||100)+" %"),g=0;_.addEventListener("input",()=>{let v=+_.value;v===100?delete r.scale:r.scale=v,b.textContent=v+" %",be(),clearTimeout(g),g=setTimeout(l,120)});let p=Ue("100 %",()=>{delete r.scale,_.value=100,b.textContent="100 %",be(),l()},"sm ghost"),R=ht("Hauteur dans la sc\xE8ne",m,"En unit\xE9s de la sc\xE8ne : les cartes sont pos\xE9es \xE0 environ 500 du centre. 420 donne la taille des objets d\u2019origine.");R.hidden=r.scaleMode!=="fit",Ve(t,f("div",{class:"card"},f("header",null,f("h2",null,r.name),f("div",{class:"acts"},c[0]?Ue("Aper\xE7u",()=>Ks(c[0].id),"sm"):null,Ue("Supprimer",u,"sm danger"))),o,f("div",{class:"block"},ht("Nom",wt(()=>r.name,v=>{r.name=v},{list:!0})),f("div",{class:"grid2"},ht("Taille",Pn([{value:"pv",label:"Comme le fichier (\xD7100, r\xE8gle de 2008)"},{value:"fit",label:"Ajuster \xE0 une hauteur"}],()=>r.scaleMode,v=>{r.scaleMode=v,R.hidden=v!=="fit",v==="fit"&&!r.height&&(r.height=420),l()})),R),f("div",{class:"f"},f("span",{class:"lbl"},"Taille de l\u2019objet ",b),f("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},_,p),f("p",{class:"hint",style:{margin:"4px 0 0"}},"Agrandit ou r\xE9duit l\u2019objet dans toutes les sections qui l\u2019utilisent, sans toucher au fichier.")),f("div",{class:"f"},f("span",{class:"lbl"},"Rotation ",d),h),ht("Faces sans texture",Pn([{value:"wire",label:"Fil de fer jaune (comme 2008)"},{value:"white",label:"Blanc mat"},{value:"black",label:"Noir mat"}],()=>r.untextured,v=>{r.untextured=v,l()})),f("p",{class:"hint"},"Fichier : ",f("code",null,r.file),(r.textures||[]).length?` \xB7 ${r.textures.length} texture${r.textures.length>1?"s":""}`:"",c.length?" \xB7 utilis\xE9 par "+c.map(v=>dt(v.name)).join(", "):"")))),l()};return T.refreshList=i,i(),s(),vi("Mod\xE8les 3D","Les objets Collada (.dae) pos\xE9s au centre des sections. Ceux d\u2019origine viennent du site de 2008 ; tu peux importer les tiens.",[],f("div",{class:"cols"},e,t))}function Ch(){Yn(".dae,.DAE,image/*,.tga",!0,nc)}function r_(){let n=f("input",{type:"text",placeholder:"Ex. Puebla"}),e=f("input",{type:"number",step:"any",placeholder:"19.04"}),t=f("input",{type:"number",step:"any",placeholder:"-98.20"});return Or("Ajouter un lieu",f("div",null,ht("Nom affich\xE9",n),f("div",{class:"grid2"},ht("Latitude",e),ht("Longitude",t)),f("p",{class:"hint"},"Dans Google Maps, un clic droit sur un endroit affiche ses coordonn\xE9es : la latitude d\u2019abord, puis la longitude.")),[{label:"Annuler",value:null,cls:"ghost"},{label:"Ajouter",cls:"dark",value:()=>n.value.trim()&&e.value!==""&&t.value!==""&&Math.abs(+e.value)<=90&&Math.abs(+t.value)<=180?{city:n.value.trim(),lat:+e.value,lon:+t.value}:null}])}function a_(){let n=document.createElement("canvas");n.width=n.height=4;let e=n.getContext("2d");return e.fillStyle="#fff",e.fillRect(0,0,4,4),new Promise(t=>n.toBlob(t,"image/png"))}async function nc(n){let e=T.content,t=n.find(h=>/\.dae$/i.test(h.name));if(!t){ct("Il faut un fichier .dae (Collada) dans la s\xE9lection.","bad");return}if(t.size>3e7){ct("Ce .dae p\xE8se plus de 30 Mo : all\xE8ge le maillage avant de l\u2019importer.","bad",7e3);return}let i=new DOMParser().parseFromString(await t.text(),"application/xml");if(i.querySelector("parsererror")||i.documentElement.nodeName!=="COLLADA"){ct("Ce fichier n\u2019est pas un Collada lisible.","bad");return}let s=$n(t.name.replace(/\.dae$/i,""),e.models.map(h=>h.id)),r=`models/${s}/`,o=[],a=[],l=new Map;for(let h of i.querySelectorAll("library_images image init_from")){let d=(h.querySelector("ref")||h).textContent.trim();if(!d)continue;let m=decodeURIComponent(d.replace(/^file:\/*/,"").split(/[\\/]/).pop()),_=l.get(m.toLowerCase());if(_===void 0){let b=n.find(p=>p.name.toLowerCase()===m.toLowerCase());_=pi(m.replace(/\.[^.]+$/,""))+"."+(b?ns(m)||"jpg":"png");let g=2;for(;o.includes(_);)_=pi(m.replace(/\.[^.]+$/,""))+"-"+g+++"."+(ns(m)||"jpg");b||a.push(m),xn(r+_,b||await a_()),o.push(_),l.set(m.toLowerCase(),_)}(h.querySelector("ref")||h).textContent=_}let c=new XMLSerializer().serializeToString(i),u={id:s,name:t.name.replace(/\.dae$/i,""),file:r+s+".dae",textures:o,scaleMode:"fit",height:420,rotationY:0,untextured:o.length?"wire":"white",builtin:!1};xn(u.file,new Blob([c],{type:"model/vnd.collada+xml"}));try{Yl(c,u)}catch(h){[u.file,...o.map(d=>r+d)].forEach(d=>T.staged.delete(d)),ct("Three.js ne parvient pas \xE0 lire ce mod\xE8le : "+h.message,"bad",8e3);return}e.models.push(u),T.sel.model=s,be({nav:!0}),T.view!=="models"?Js("models"):Yt(),ct(a.length?`Mod\xE8le import\xE9. ${a.length} texture${a.length>1?"s":""} manque${a.length>1?"nt":""} (${a.join(", ")}) : remplac\xE9e${a.length>1?"s":""} par du blanc. R\xE9importe le mod\xE8le avec ces fichiers pour les voir.`:"Mod\xE8le import\xE9. Choisis-le dans une section pour l\u2019utiliser.",a.length?"bad":"ok",9e3)}function o_(){let n=[];return T.content.posts.forEach(e=>{["thumb","thumbBack"].forEach(t=>{/^https?:/.test(e[t]||"")&&n.push({p:e,get:()=>e[t],set:i=>{e[t]=i}})}),e.media.forEach(t=>{/^https?:/.test(t.src)&&Ph(t.src)==="image"&&n.push({p:e,get:()=>t.src,set:i=>{t.src=i}})})}),n}function l_(){let n=o_();if(!n.length)return null;let e=new Set(n.map(s=>s.get())),t=f("div",{class:"progress",hidden:!0},f("i")),i=Ue("Rapatrier dans le d\xE9p\xF4t",async()=>{i.disabled=!0,t.hidden=!1;let s=new Map,r=0,o=0,a=0;for(let l of e){let c=n.find(u=>u.get()===l).p;try{let u=await fetch(l,{mode:"cors"});if(!u.ok)throw new Error(u.status);let h=await u.blob(),d=decodeURIComponent(l.split("?")[0].split("/").pop()).replace(/\+/g," ")||"image.jpg",m=await gi(new File([h],d,{type:h.type||"image/jpeg"}),`media/${c.id}`,"media");xn(m.path,m.blob),s.set(l,m.path),r++}catch{o++}t.firstChild.style.width=Math.round(++a/e.size*100)+"%"}n.forEach(l=>{s.has(l.get())&&l.set(s.get(l.get()))}),be({nav:!0}),ct(o?`${r} image${r>1?"s":""} rapatri\xE9e${r>1?"s":""}. ${o} n\u2019ont pas pu \xEAtre lues depuis ce navigateur (le serveur d\u2019origine les prot\xE8ge) : t\xE9l\xE9charge-les et renvoie-les depuis la fiche du contenu.`:`${r} images rapatri\xE9es. Publie pour les envoyer dans le d\xE9p\xF4t.`,o?"bad":"ok",1e4),Yt()},"sm dark");return f("div",{class:"card",style:{marginBottom:"18px"}},f("header",null,f("h2",null,`${e.size} image${e.size>1?"s":""} encore en ligne ailleurs`),f("div",{class:"acts"},i)),f("div",{class:"body"},f("p",{class:"hint",style:{marginTop:0}},"Ces images viennent de l\u2019ancien site (Squarespace) et sont affich\xE9es depuis son serveur. Pour que ton site n\u2019en d\xE9pende plus, rapatrie-les : elles seront r\xE9duites puis envoy\xE9es dans media/ \xE0 la prochaine publication."),t))}function c_(){let n=T.content,e=as(),t=f("div",{class:"card"},f("div",{class:"empty"},"Lecture des fichiers du d\xE9p\xF4t\u2026")),i=s=>{let r=[];return n.posts.forEach(o=>{(o.thumb===s||o.thumbBack===s||o.media.some(a=>a.src===s))&&r.push(dt(o.title)||o.id)}),n.models.forEach(o=>{(o.file===s||(o.textures||[]).some(a=>o.file.replace(/[^/]+$/,"")+a===s))&&r.push("Mod\xE8le "+o.name)}),n.settings.logo===s&&r.push("Logo"),r};return(async()=>{let s=[];try{s=T.files||(T.files=await T.backend.listFiles(["media/","models/"]))}catch(m){Ve(t,f("div",{class:"empty"},"Impossible de lister les fichiers : "+Ys(m)));return}let r=new Map(s.filter(m=>!/(^|\/)\./.test(m.path)).map(m=>[m.path,{...m,state:"online"}]));T.staged.forEach((m,_)=>r.set(_,{path:_,size:m.blob.size,state:"new"}));let o=[...r.values()].sort((m,_)=>m.path.localeCompare(_.path)),a=m=>/^models\/[^/]+$/.test(m),l=o.filter(m=>m.state==="online"&&!e.has(m.path)&&!T.deletes.has(m.path)&&!a(m.path)),c=new Set,u=Ue("Supprimer la s\xE9lection",()=>{c.forEach(m=>T.deletes.add(m)),be({nav:!0}),ct(`${c.size} fichier${c.size>1?"s":""} sera supprim\xE9 \xE0 la prochaine publication.`),Yt()},"sm danger",{disabled:!0}),h=()=>{u.disabled=!c.size,u.textContent=c.size?`Supprimer la s\xE9lection (${c.size})`:"Supprimer la s\xE9lection"},d=f("table",{class:"files"},f("thead",null,f("tr",null,f("th",{style:{width:"30px"}}),f("th",{style:{width:"60px"}}),f("th",null,"Fichier"),f("th",null,"Utilis\xE9 par"),f("th",null,"Taille"),f("th",null,"\xC9tat"))),f("tbody",null,o.map(m=>{let _=i(m.path),b=/\.(jpe?g|png|webp|gif|svg)$/i.test(m.path),g=T.deletes.has(m.path),R=l.includes(m)?f("input",{type:"checkbox","aria-label":"S\xE9lectionner "+m.path}):null;return R&&R.addEventListener("change",()=>{R.checked?c.add(m.path):c.delete(m.path),h()}),f("tr",{style:g?{opacity:.5}:null},f("td",null,R),f("td",null,b?f("img",{class:"mini",src:Ln(m.path),alt:"",loading:"lazy"}):f("span",{class:"badge"},ns(m.path))),f("td",{class:"p"},m.path),f("td",null,_.length?_.join(", "):f("span",{style:{color:"var(--ink-4)"}},"\u2014")),f("td",null,$l(m.size)),f("td",null,g?f("span",null,f("span",{class:"badge warn"},"\xE0 supprimer")," ",Ue("Garder",()=>{T.deletes.delete(m.path),be({nav:!0}),Yt()},"sm ghost")):m.state==="new"?f("span",{class:"badge new"},e.has(m.path)?"\xE0 envoyer":"ajout\xE9, plus utilis\xE9"):_.length?f("span",{class:"badge"},"en ligne"):a(m.path)?f("span",{class:"badge off"},"origine"):f("span",{class:"badge off"},"inutilis\xE9")))})));Ve(t,f("header",null,f("h2",null,`${o.length} fichier${o.length>1?"s":""}`),f("div",{class:"acts"},l.length?Ue(`Tout s\xE9lectionner : ${l.length} inutilis\xE9${l.length>1?"s":""}`,()=>{d.querySelectorAll("tbody input[type=checkbox]").forEach(m=>{m.checked=!0,c.add(m.closest("tr").querySelector(".p").textContent)}),h()},"sm"):null,u,T.backend.kind!=="demo"?Ue(T.backend.kind==="folder"?"Relire le dossier":"Relire le d\xE9p\xF4t",()=>{T.files=null,Yt()},"sm ghost"):null)),o.length?f("div",{style:{overflowX:"auto"}},d):f("div",{class:"empty"},T.backend.kind==="demo"?"En d\xE9mo, seuls les fichiers ajout\xE9s depuis ce navigateur apparaissent ici.":"Aucun fichier dans media/ ni models/."))})(),vi("M\xE9dias","Tous les fichiers du dossier media/ et des mod\xE8les 3D. Les fichiers qui ne servent plus peuvent \xEAtre supprim\xE9s pour garder le d\xE9p\xF4t l\xE9ger.",[],l_(),t)}function u_(n){n.homeVideo=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},n.homeVideo||{});let e=n.homeVideo,t=f("span",{class:"hint",style:{margin:0}}),i=()=>{t.textContent=e.src?e.src.split("/").pop():"Aucune : les photos des projets d\xE9filent en travelling lent."},s=()=>Yn("video/mp4,video/webm,.mp4,.webm",!1,async r=>{if(r[0])try{let o=await gi(r[0],"media/accueil","media");xn(o.path,o.blob),e.src=o.path,be(),i(),ct("Vid\xE9o ajout\xE9e : elle part sur le site \xE0 la prochaine publication.")}catch(o){ct(o.message,"bad",8e3)}});return i(),f("div",{class:"f"},f("span",{class:"lbl"},"Vid\xE9o de l\u2019accueil, en carr\xE9s, plein \xE9cran"),f("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},Ue(e.src?"Remplacer la vid\xE9o\u2026":"Choisir une vid\xE9o\u2026",s,"sm"),e.src?Ue("Retirer",()=>{e.src="",be(),i()},"sm ghost"):null,t),f("p",{class:"hint"},"MP4 sans son ou avec, en boucle : un extrait de 20 \xE0 30 secondes en 720p suffit (moins de 15 Mo). Elle d\xE9marre \xE0 un endroit au hasard. Une vid\xE9o YouTube ne marche pas ici : il faut le fichier."),f("div",{style:{marginTop:"10px"}},On("R\xE9glage au hasard \xE0 chaque visite (grille, contraste, delay, couleur, sens)",()=>e.random!==!1,r=>{e.random=r,Yt()})),e.random!==!1?f("p",{class:"hint"},"Chaque visiteur arrive sur une combinaison diff\xE9rente, puis la change avec le panneau de r\xE9glages. Coupe cet interrupteur pour fixer le r\xE9glage ci-dessous."):f("div",{style:{marginTop:"10px"}},Pr(e,"cell","Carr\xE9s (px)",14,3,40,1,"La taille de la grille. Petit : plus de carr\xE9s, image plus fine."),Pr(e,"size","Taille maximale des carr\xE9s (%)",92,40,100,2,"La place que prend un carr\xE9 dans sa case quand le pixel est au plus clair."),Pr(e,"contrast","Contraste",1,.4,3,.1,"Au-dessus de 1, les zones sombres disparaissent plus vite."),Pr(e,"delay","Delay (lissage)",4,1,8,1,"Comme sur Fat-Man : valeur = valeur \u2212 (valeur \u2212 cible) / delay. 1 = imm\xE9diat. Coup\xE9 d\u2019office sur un ordinateur trop lent."),f("div",{class:"grid2"},ht("Couleur des carr\xE9s",Pn([{value:"white",label:"Blanc"},{value:"grey",label:"Gris"},{value:"accent",label:"Couleur d\u2019accent"},{value:"source",label:"Couleurs de la vid\xE9o"}],()=>e.color,r=>{e.color=r})),ht("Les carr\xE9s grossissent",Pn([{value:"light",label:"\xE0 la lumi\xE8re"},{value:"dark",label:"dans l\u2019ombre"}],()=>e.mode,r=>{e.mode=r})))),f("div",{style:{marginTop:"10px"}},On("Les visiteurs ont un panneau de r\xE9glages (faders) pour la vid\xE9o, le son et leur cam\xE9ra",()=>e.controls!==!1,r=>{e.controls=r})))}function Pr(n,e,t,i,s,r,o,a){let l=o<1?1:0,c=_=>(+_).toFixed(l),u=()=>n[e]!=null&&n[e]!==""?+n[e]:i,h=f("input",{type:"range",min:s,max:r,step:o,value:u()}),d=f("b",null,c(u())),m=_=>{_=+(+_).toFixed(l),n[e]=_,h.value=_,d.textContent=c(_)};return h.addEventListener("input",()=>{m(h.value),be()}),f("div",{class:"f fiche-row"},f("span",{class:"lbl"},t),f("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},h,d,Ue("\u21BA "+c(i),()=>{m(i),be()},"sm ghost",{title:"Revenir \xE0 la valeur d\u2019origine"})),f("p",{class:"hint"},a))}function ic(n){xh(n).forEach(t=>{document.querySelector(`link[data-hc-font][href="${CSS.escape(t)}"]`)||document.head.appendChild(f("link",{rel:"stylesheet",href:t,"data-hc-font":""}))})}var h_=[[100,"Thin 100"],[200,"Extra light 200"],[300,"Light 300"],[400,"Regular 400"],[500,"Medium 500"],[600,"Semibold 600"],[700,"Bold 700"],[800,"Extra bold 800"],[900,"Black 900"]];function d_(n){let e=f("div"),t=[...new Set(Xs.map(r=>r.group))],i=()=>Ve(e,t.map(r=>f("div",{class:"typo-group"},f("h4",null,r),Xs.filter(o=>o.group===r).map(s)))),s=r=>{let o=f("div",{class:"typo-row"}),a=r.only||["font","size","lh","weight","italic","ls","upper"],l=v=>Oi(n,r.id)[v],c=(v,E)=>{n.typo=n.typo||{};let U=n.typo[r.id]=n.typo[r.id]||{};E===""||E===null||E===void 0||E===r[v]||v==="italic"&&!E&&!r.italic||v==="upper"&&!E&&!r.upper||v==="ls"&&+E===(r.ls||0)?delete U[v]:U[v]=E,Object.keys(U).length||delete n.typo[r.id],ic(n),be(),p(),(r.id==="logo"||r.id==="sig1")&&js()},u=(v,E,U={})=>{let D=f("input",{type:"number",step:U.step||1,min:U.min,max:U.max,value:l(v)??"",placeholder:U.ph});return D.addEventListener("input",()=>c(v,D.value===""?"":+D.value)),f("label",null,E,D)},h=(v,E)=>{let U=f("input",{type:"checkbox",checked:!!l(v)});return U.addEventListener("change",()=>c(v,U.checked)),f("label",{class:"ck"},U,E)},d=()=>{let v=l("font"),E=/^g:/.test(v||""),U=f("select",null,[...new Set(Rr.map(O=>O.group))].map(O=>f("optgroup",{label:O},Rr.filter($=>$.group===O).map($=>f("option",{value:$.id,selected:$.id===v},$.label+($.id===r.font?" \xB7 d\xE9faut":""))))),f("optgroup",{label:"Google Fonts"},f("option",{value:"__g",selected:E},"Autre police Google Fonts\u2026"))),D=f("input",{type:"text",placeholder:"Nom exact, ex. Inter, Playfair Display",value:E?v.slice(2):"",spellcheck:"false"});return D.hidden=!E,U.addEventListener("change",()=>{U.value==="__g"?(D.hidden=!1,D.focus(),D.value.trim()&&c("font","g:"+D.value.trim())):(D.hidden=!0,c("font",U.value))}),D.addEventListener("change",()=>{let O=D.value.trim();O&&c("font","g:"+O)}),f("label",{class:"fam"},"Police",U,D)},m=()=>{let v=f("select",null,h_.map(([E,U])=>f("option",{value:E,selected:+l("weight")===E},U)));return v.addEventListener("change",()=>c("weight",+v.value)),f("label",null,"Graisse",v)},_=()=>{let v=f("input",{type:"text",value:l("text")??"",maxlength:4,style:{width:"70px"}});return v.addEventListener("input",()=>c("text",v.value)),f("label",null,"Lettres",v)},b=f("div",{class:"typo-sample"+(/^(bs|bseg|offh|offp|menu|ui|sig1|sig2)$/.test(r.id)?" light":"")}),g=Ue("R\xE9tablir",()=>{n.typo&&delete n.typo[r.id],be(),i(),(r.id==="logo"||r.id==="sig1")&&js()},"sm ghost rst"),p=()=>{let v=Oi(n,r.id);if(o.classList.toggle("changed",!!v.changed),g.hidden=!v.changed,r.id==="logo"){Ve(b,f("img",{src:io(n.accent||"#ffcc00",n),alt:"",style:{width:"64px",height:"64px",display:"block"}})),b.style.background="#fff";return}let E=r.scale?22*(v.scale||100)/100:v.size||14;Object.assign(b.style,{fontFamily:v.css,fontSize:Math.min(E,56)+"px",lineHeight:v.lh?Math.min(v.lh,64)+"px":"1.2",fontWeight:v.weight||400,fontStyle:v.italic?"italic":"normal",letterSpacing:(v.ls||0)+"em",textTransform:v.upper?"uppercase":"none"}),b.textContent=r.sample||"Hand Coded",document.fonts&&document.fonts.load(`${v.italic?"italic ":""}${v.weight||400} ${E}px ${v.css}`).catch(()=>{})},R=f("div",{class:"typo-ctl"},a.includes("font")?d():null,a.includes("size")?u("size",r.id==="logo"?"Taille":"Taille (px)",{min:6,max:160}):null,a.includes("lh")?u("lh","Interligne (px)",{min:6,max:200,step:.5}):null,a.includes("weight")?m():null,a.includes("ls")?u("ls","Espacement (em)",{step:.01,min:-.2,max:1,ph:"0"}):null,a.includes("scale")?u("scale","Taille (%)",{min:50,max:200,step:5}):null,a.includes("text")?_():null,a.includes("italic")?h("italic","Italique"):null,a.includes("upper")?h("upper","Majuscules"):null);return Ve(o,f("div",{class:"nm"},f("b",null,r.label),r.hint?f("small",null,r.hint):null,g),R,b),p(),o};return i(),f("div",{class:"block"},f("h3",null,"Typographie",f("small",null,"police, taille, interligne, graisse de chaque texte du site")),f("p",{class:"hint"},"Par d\xE9faut, le site garde la typographie d\u2019origine. Un point jaune signale un r\xE9glage modifi\xE9 ; \xAB R\xE9tablir \xBB revient \xE0 l\u2019origine. Les polices h\xE9berg\xE9es avec le site marchent partout, m\xEAme hors ligne. Une police Google Fonts se charge depuis Google quand le site est en ligne : tape son nom exact, tel qu\u2019il appara\xEEt sur fonts.google.com."),e,f("div",{style:{marginTop:"12px"}},Ue("Tout r\xE9tablir",()=>{delete n.typo,be(),i(),js()},"sm ghost")))}function f_(n){let e=n.home.story,t=f("div",{class:"story-shots"});Oh(t,".story-shot","img",(s,r)=>{Fi(e.images,s,r),be(),i()});let i=()=>Ve(t,...e.images.map((s,r)=>f("div",{class:"story-shot"},f("img",{src:Ln(s),alt:""}),f("div",{class:"acts"},r?Ue("\u2190",()=>{e.images.splice(r-1,0,e.images.splice(r,1)[0]),be(),i()},"sm icon ghost",{"aria-label":"Avancer"}):null,Ue("\xD7",()=>{e.images.splice(r,1),be(),i()},"sm icon ghost danger",{"aria-label":"Retirer"})))),Ue("+ Images\u2026",()=>Yn("image/*",!0,async s=>{for(let r of s)try{let o=await gi(r,"media/site/story","media");xn(o.path,o.blob),e.images.push(o.path)}catch(o){ct(o.message,"bad")}be(),i()}),"sm"));return i(),f("div",{class:"f"},f("span",{class:"lbl"},"Histoire du site",f("small",null," le \xAB ? \xBB en bas \xE0 droite de l\u2019accueil")),Fn("Titre",e,"title"),f("div",{class:"f"},f("span",{class:"lbl"},"Texte"),Gh(e.body,"L\u2019histoire de ce site\u2026")),f("div",{class:"f"},f("span",{class:"lbl"},"Captures"),t,f("p",{class:"hint"},"Elles s\u2019affichent \xE0 c\xF4t\xE9 du texte ; un clic les ouvre en grand.")),f("div",{class:"grid2"},ht("Lien",wt(()=>e.link,s=>{e.link=s.trim()},{placeholder:"https://\u2026",spell:!1})),Fn("Texte du lien",e,"linkLabel")),f("p",{class:"hint"},"Laisse le titre et le texte vides pour retirer le \xAB ? \xBB."))}function p_(){let n=T.content,e=n.settings,t=f("div",{class:"logo-prev"}),i=f("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"}}),s=()=>{t.style.backgroundImage=`url("${e.logo?Ln(e.logo):Ih()}")`,js(),Ve(i,Ue(e.logo?"Remplacer\u2026":"Choisir un logo\u2026",()=>Yn("image/*",!1,r),"sm"),e.logo?Ue("Logo par d\xE9faut",()=>{e.logo="",be(),s()},"sm ghost"):null,f("span",{class:"hint",style:{margin:0}},"SVG ou PNG carr\xE9, fond transparent. Affich\xE9 en haut \xE0 droite et sur l\u2019accueil."))},r=async p=>{if(p[0])try{let R=await gi(p[0],"media/site","logo");xn(R.path,R.blob),e.logo=R.path,be(),s()}catch(R){ct(R.message,"bad")}};s();let o=f("input",{type:"color",value:e.accent||"#ffcc00","aria-label":"Couleur d\u2019accent"}),a=f("div",{class:"swatches"}),l=p=>{e.accent=p,o.value=p,document.documentElement.style.setProperty("--accent",p),s(),be(),c()},c=()=>Ve(a,o,...["#ffcc00","#f1b800","#ff5a1f","#e8175d","#00b3a4","#2f6bff","#111111"].map(p=>f("button",{type:"button",style:{background:p},"aria-label":p,"aria-pressed":String((e.accent||"").toLowerCase()===p),onclick:()=>l(p)})));o.addEventListener("input",()=>l(o.value)),c();let u=f("div"),h=()=>Ve(u,...e.offices.map((p,R)=>{typeof p.name!="object"&&(p.name=Object.fromEntries(Kt.map(E=>[E,p.name||""])));let v=f("textarea",{rows:2,placeholder:"Adresse, une ligne par ligne"});return v.value=(p.lines||[]).join(`
`),v.addEventListener("input",()=>{p.lines=v.value.split(`
`).map(E=>E.trim()).filter(Boolean),be()}),f("div",{class:"office-row"},kn().map(E=>f("div",{class:"lang","data-l":E.toUpperCase()},wt(()=>p.name[E]??"",U=>{p.name[E]=U},{placeholder:"Nom ("+es[E]+")"}))),f("div",{class:"full"},v),f("div",{class:"full"},wt(()=>p.mail,E=>{p.mail=E.trim()},{type:"email",placeholder:"contact@\u2026"})),Ue("Retirer ce bureau",()=>{e.offices.splice(R,1),be(),h()},"sm ghost danger del"))}),Ue("+ Ajouter un bureau",()=>{e.offices.push({name:qn(),lines:[],mail:""}),be(),h()},"sm",{style:{marginTop:"10px"}}));h();let d=f("div"),m=()=>Ve(d,...e.social.map((p,R)=>f("div",{class:"social-row"},wt(()=>p.label,v=>{p.label=v},{placeholder:"Instagram"}),wt(()=>p.url,v=>{p.url=v.trim()},{type:"url",placeholder:"https://\u2026"}),Ue("\xD7",()=>{e.social.splice(R,1),be(),m()},"sm icon ghost danger",{"aria-label":"Retirer"}))),Ue("+ Ajouter un lien",()=>{e.social.push({label:"",url:""}),be(),m()},"sm",{style:{marginTop:"10px"}}));m();let _=f("div",{class:"chips"});Ve(_,...Kt.map(p=>f("button",{type:"button",class:"chip","aria-pressed":String(e.langs.includes(p)),onclick:()=>{if(e.langs.includes(p)){if(e.langs.length===1)return;e.langs=e.langs.filter(R=>R!==p)}else e.langs=Kt.filter(R=>R===p||e.langs.includes(R));e.langs.includes(e.defaultLang)||(e.defaultLang=e.langs[0]),be(),Yt()}},es[p])),e.langs.length>1?f("span",{class:"hint",style:{margin:"0 0 0 6px"}},"Si la langue du visiteur n\u2019est pas propos\xE9e : ",Pn(e.langs.map(p=>({value:p,label:es[p]})),()=>e.defaultLang,p=>{e.defaultLang=p})):null);let g=p=>{let R=f("textarea",{rows:3});return R.value=(e.taglines[p]||[]).join(`
`),R.addEventListener("input",()=>{e.taglines[p]=R.value.split(`
`).map(v=>v.trim()).filter(Boolean),be()}),f("div",{class:"lang","data-l":p.toUpperCase()},R)};return vi("R\xE9glages","Identit\xE9, accueil et coordonn\xE9es, dans chaque langue du site.",[],f("div",{class:"card"},f("div",{class:"block"},f("h3",null,"Identit\xE9"),f("div",{class:"grid2"},ht("Nom du studio",wt(()=>e.name,p=>{e.name=p})),ht("Depuis",wt(()=>e.since,p=>{e.since=p},{placeholder:"2012"}))),f("div",{class:"f"},f("span",{class:"lbl"},"Logo"),f("div",{style:{display:"flex",gap:"14px",alignItems:"center"}},t,i)),f("div",{class:"f"},f("span",{class:"lbl"},"Couleur d\u2019accent"),a,f("p",{class:"hint"},"Bandeau LED, tirets des cartes, lieux, fl\xE8che d\u2019entr\xE9e, faders."))),f("div",{class:"block"},f("h3",null,"Apparence"),ht("Le site s\u2019ouvre en",Pn([{value:"auto",label:"Blanc le jour, noir la nuit, selon l\u2019heure chez le visiteur"},{value:"pos",label:"Blanc"},{value:"neg",label:"Noir (n\xE9gatif)"}],()=>e.negative==="auto"?"auto":e.negative?"neg":"pos",p=>{e.negative=p==="auto"?"auto":p==="neg"}),"Jour et nuit : le site regarde si le soleil est lev\xE9 l\xE0 o\xF9 se trouve le visiteur, d\u2019apr\xE8s le fuseau horaire de son navigateur (sans lui demander sa position), et bascule de lui-m\xEAme au lever et au coucher du soleil si la page reste ouverte. En noir, toute la page s\u2019inverse : fond noir, sc\xE8ne 3D et textes en n\xE9gatif. Les images et vid\xE9os des contenus gardent leurs vraies couleurs, et la couleur d\u2019accent reste la m\xEAme."),f("div",{style:{marginTop:"12px"}},On("Signer les vignettes 3D (\u0153uvre \xB7 auteur \xB7 cr\xE9dit photo)",()=>e.signImages!==!1,p=>{e.signImages=p})),f("p",{class:"hint"},"Une mention discr\xE8te en bas de chaque vignette des cartes 3D, pour que l\u2019\u0153uvre d\u2019un artiste ne passe pas pour une cr\xE9ation du studio. L\u2019auteur et le cr\xE9dit photo (celui de la premi\xE8re image) se r\xE8glent dans chaque contenu."),f("div",{style:{marginTop:"12px"}},On("Les visiteurs basculent n\xE9gatif / positif en cliquant sur le logo",()=>e.negativeToggle!==!1,p=>{e.negativeToggle=p})),f("p",{class:"hint"},"Le logo par d\xE9faut a un anneau \xE0 la couleur d\u2019accent sur fond blanc, et blanc sur fond noir. Le choix du visiteur est gard\xE9 pour sa prochaine visite (en mode jour et nuit, jusqu\u2019au prochain lever ou coucher du soleil).")),$v(e),d_(e),f("div",{class:"block"},f("h3",null,"Showreel"),ht("Lien de la vid\xE9o",wt(()=>e.showreel,p=>{e.showreel=p.trim()},{placeholder:"https://youtu.be/\u2026 ou media/showreel/showreel.mp4",spell:!1}),"YouTube, Vimeo ou fichier MP4 du site. Le bouton Showreel joue la vid\xE9o sur tout le fond de l\u2019accueil, sous une grille fine, avec une barre de lecture ; depuis la 3D, il ram\xE8ne \xE0 l\u2019accueil et la lance. Le son est coup\xE9 au d\xE9part. Un fichier MP4 n\u2019affiche aucun logo ; YouTube montre parfois son titre au d\xE9marrage. Laisse vide pour retirer le bouton."),f("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",marginTop:"-6px"}},Ue("Choisir le fichier MP4\u2026",()=>Yn("video/mp4,video/webm,.mp4,.webm",!1,async p=>{if(p[0])try{let R=await gi(p[0],"media/showreel","media");xn(R.path,R.blob),e.showreel=R.path,be(),Yt(),ct("Showreel ajout\xE9 : il part sur le site \xE0 la prochaine publication.")}catch(R){ct(R.message,"bad",8e3)}}),"sm"),f("span",{class:"hint",style:{margin:0}},"H.264, 720p ou 1080p, moins de 40 Mo de pr\xE9f\xE9rence (GitHub refuse au-del\xE0 de 100 Mo)."))),f("div",{class:"block"},f("h3",null,"Langues du site"),_,f("p",{class:"hint"},"Le site s\u2019ouvre dans la langue du navigateur du visiteur quand elle est propos\xE9e. Il peut ensuite en changer en bas \xE0 gauche. Le back-office affiche un champ par langue activ\xE9e.")),f("div",{class:"block"},f("h3",null,"Signature",f("small",null,"en haut \xE0 gauche du site, une ligne par ligne")),f("div",{class:"pair"},kn().map(g))),f("div",{class:"block"},f("h3",null,"Accueil"),f("p",{class:"hint",style:{marginTop:0}},"L\u2019accueil montre la vid\xE9o en carr\xE9s sur tout l\u2019\xE9cran, la phrase du studio sur le bandeau LED et une fl\xE8che vers le bas. On entre en cliquant la fl\xE8che ou en faisant d\xE9filer vers le bas (glisser vers le haut sur t\xE9l\xE9phone)."),Fn("Phrase du studio",e.home,"sub",{rows:5,hint:"Ce que fait le studio, en une phrase, dans la langue du visiteur. Elle s\u2019\xE9crit au centre \xE0 l\u2019ouverture du site et quand on touche \xAB i \xBB, une ligne apr\xE8s l\u2019autre : va \xE0 la ligne (Entr\xE9e) l\xE0 o\xF9 tu veux couper. Sur le bandeau LED, elle d\xE9file d\u2019un seul tenant."}),Fn("Citations du bandeau LED",e.home,"quotes",{rows:5,hint:"Sur le bandeau LED, apr\xE8s la phrase du studio, ces citations d\xE9filent l\u2019une apr\xE8s l\u2019autre : une par ligne, avec sa source. Les accents passent ; les guillemets s\u2019affichent droits."}),f("div",{style:{margin:"-4px 0 14px"}},On("Masquer le bandeau LED du haut",()=>!!e.home.tickerOff,p=>{p?e.home.tickerOff=!0:delete e.home.tickerOff})),Pr(e.home,"tickerSpeed","Vitesse du bandeau LED",26,4,80,1,"En colonnes de points par seconde. Plus petit : le texte d\xE9file lentement ; plus grand : il file. 26 au d\xE9part."),Fn("Mot au-dessus de la fl\xE8che",e.home,"enter",{hint:"En petites capitales, au-dessus de la fl\xE8che d\u2019entr\xE9e."}),f_(e),u_(e),ht("Section d\u2019arriv\xE9e",Pn(n.sections.map(p=>({value:p.id,label:dt(p.name)||p.id})),()=>e.startSection,p=>{e.startSection=p}))),f("div",{class:"block"},f("h3",null,"Bureaux"),f("p",{class:"hint",style:{marginTop:0}},"Ils ne s\u2019affichent plus sur l\u2019accueil : ils servent au r\xE9f\xE9rencement (Google, assistants IA) et au r\xE9sum\xE9 texte du site. Les coordonn\xE9es visibles sont dans la section Contact."),u),f("div",{class:"block"},f("h3",null,"R\xE9seaux et liens"),d)))}function m_(){let n=T.content.settings,e=n.analytics,t=n.seo,i=()=>String(e.goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,""),s=Qt+":gc-token",r="";try{r=localStorage.getItem(s)||""}catch{}let o=f("div",{class:"gc-board"}),a=()=>{let c=i();if(!c){Ve(o,f("p",{class:"hint"},"Renseigne le code GoatCounter ci-dessus pour voir les visites ici."));return}let u=`https://${c}.goatcounter.com/?hideui=1${r?"&access-token="+encodeURIComponent(r):""}`;Ve(o,f("div",{style:{display:"flex",gap:"8px",alignItems:"center",margin:"0 0 10px"}},f("a",{class:"btn sm",href:`https://${c}.goatcounter.com`,target:"_blank",rel:"noopener"},"Ouvrir le tableau de bord complet \u2197"),f("span",{class:"hint",style:{margin:0}},"Si le cadre reste vide : v\xE9rifie le jeton et l\u2019autorisation d\u2019int\xE9gration (\xE9tapes ci-dessous).")),f("iframe",{src:u,title:"Statistiques de visite",loading:"lazy",referrerpolicy:"no-referrer"}))};a();let l=f("input",{type:"password",value:r,placeholder:"jeton de lecture du tableau de bord",spellcheck:"false",autocomplete:"off"});return l.addEventListener("change",()=>{r=l.value.trim();try{localStorage.setItem(s,r)}catch{}a()}),vi("Audience","Qui visite le site, ce qu\u2019on y regarde, et comment les moteurs de recherche et les assistants IA le lisent.",[],f("div",{class:"card"},f("div",{class:"block"},f("h3",null,"Visites",f("small",null," GoatCounter : sans cookie, pas de bandeau de consentement")),f("div",{class:"grid2"},ht("Code GoatCounter",wt(()=>e.goatcounter,c=>{e.goatcounter=c.trim()},{placeholder:"handcoded",spell:!1,onBlur:a}),"Le nom choisi \xE0 l\u2019inscription : handcoded pour handcoded.goatcounter.com. Le site compte les visites d\xE8s la prochaine publication."),ht("Jeton de lecture",l,"Reste dans ce navigateur, jamais publi\xE9.")),o,f("details",{class:"howto"},f("summary",null,"Mise en place, une seule fois (cinq minutes)"),f("ol",null,f("li",null,"Cr\xE9e un compte gratuit sur goatcounter.com et choisis un code (par exemple handcoded)."),f("li",null,"Dans GoatCounter \u203A Settings : \xAB Sites that can embed GoatCounter \xBB : ajoute ",f("code",null,new URL($s()).host),"."),f("li",null,"Toujours dans Settings : \xAB Dashboard viewable by \xBB : \xAB logged in users or with secret token \xBB. Copie le jeton et colle-le ci-dessus."),f("li",null,"\xC9cris le code ci-dessus, puis Publier.")),f("p",{class:"hint"},"Sont compt\xE9s : l\u2019accueil, chaque section, chaque fiche ouverte (avec son adresse ?p=\u2026), et deux \xE9v\xE9nements : slogan tap\xE9, photo souvenir. Aucune donn\xE9e personnelle, pas d\u2019adresse IP conserv\xE9e."))),f("div",{class:"block"},f("h3",null,"R\xE9f\xE9rencement",f("small",null," moteurs de recherche et assistants IA")),ht("Adresse du site",wt(()=>t.url,c=>{t.url=c.trim()},{placeholder:$s(),spell:!1}),"L\u2019adresse publique de la page d\u2019accueil. Vide : elle est d\xE9duite de l\u2019adresse de ce back-office."),Fn("Description",t,"description",{placeholder:Za,hint:"Une ou deux phrases : ce qui s\u2019affiche sous le titre dans Google et dans les aper\xE7us de partage. Vide : la phrase propos\xE9e en gris."}),ht("Image de partage",wt(()=>t.image,c=>{t.image=c.trim()},{placeholder:"media/peupler/01.jpg",spell:!1}),"Chemin d\u2019une image du site, montr\xE9e quand on partage le lien (WhatsApp, LinkedIn\u2026). Vide : la photo du premier projet."),f("p",{class:"hint"},"\xC0 chaque publication, le back-office r\xE9\xE9crit : le titre, la description et les donn\xE9es structur\xE9es de la page (studio, projets), un r\xE9sum\xE9 texte de tout le site lisible sans JavaScript, ",f("code",null,"llms.txt")," pour les assistants IA, et ",f("code",null,"sitemap.xml"),". Chaque fiche a sa propre adresse : ",f("code",null,$s()+"?p=identifiant"),", et chaque langue la sienne : ",f("code",null,"?lang=fr"),"."),f("p",{class:"hint"},"Pour suivre les recherches Google : ajoute le site dans ",f("a",{href:"https://search.google.com/search-console",target:"_blank",rel:"noopener"},"Google Search Console")," et donne-lui l\u2019adresse du plan : ",f("code",null,$s()+"sitemap.xml"),"."))))}function g_(){let n=f("div",{class:"card"},f("div",{class:"empty"},"Lecture de l\u2019historique\u2026")),e=f("div",{class:"card"});return v_(e),T.backend.kind==="demo"?(Ve(n,f("div",{class:"block"},f("h3",null,"D\xE9mo"),f("p",null,"En d\xE9mo, chaque publication remplace la pr\xE9c\xE9dente, dans ce navigateur seulement : rien n\u2019est \xE9crit dans les fichiers du site. Pour garder ton travail, exporte-le ci-dessous, ou travaille dans le dossier du site (Chrome, Edge) ou sur GitHub."),Ue("Revenir au contenu d\u2019origine",async()=>{await Bn("R\xE9initialiser la d\xE9mo","Le contenu de d\xE9monstration d\u2019origine sera recharg\xE9. Une copie de ton travail reste dans les sauvegardes.","R\xE9initialiser","danger")&&(await ss({content:T.content,at:Date.now()}),await T.backend.reset(),await mi(T.draftKey),location.reload())},"danger"))),vi("Historique",null,[],e,n)):((async()=>{try{let t=await T.backend.lastCommits(20);Ve(n,...t.map((i,s)=>f("div",{class:"commit"},f("div",null,f("b",null,i.commit.message.split(`
`)[0]),f("small",null,`${new Date(i.commit.author.date).toLocaleString("fr-FR")} \xB7 ${i.commit.author.name}`,s===0?T.backend.kind==="folder"?" \xB7 version enregistr\xE9e":" \xB7 version en ligne":"")),f("div",{style:{display:"flex",gap:"6px"}},i.html_url?f("a",{class:"btn sm ghost",href:i.html_url,target:"_blank",rel:"noopener"},"Sur GitHub"):null,s===0?null:Ue("Restaurer",async()=>{if(await Bn("Restaurer cette version","Le contenu de cette version remplace ton brouillon. Rien ne change tant que tu ne publies pas. Les images supprim\xE9es depuis peuvent manquer.","Restaurer dans le brouillon"))try{T.content=await T.backend.loadAt(i.sha),be({nav:!0}),ct("Version charg\xE9e dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(r){ct("Lecture impossible : "+Ys(r),"bad")}},"sm"))))),t.length||Ve(n,f("div",{class:"empty"},"Pas encore de version publi\xE9e."))}catch(t){Ve(n,f("div",{class:"empty"},"Impossible de lire l\u2019historique : "+Ys(t)))}})(),vi("Historique",T.backend.kind==="folder"?"Chaque publication garde une version dans content/versions/ (les 40 derni\xE8res). Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.":"Chaque publication est une version du site. Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.",[],e,n))}function v_(n){let e=()=>new Date().toISOString().slice(0,16).replace(/[:T]/g,"-"),t=Ue("Exporter le contenu (.json)",()=>{let r=f("a",{href:URL.createObjectURL(new Blob([JSON.stringify(T.content,null,1)+`
`],{type:"application/json"})),download:`hand-coded-content-${e()}.json`});document.body.appendChild(r),r.click(),r.remove(),ct("Fichier t\xE9l\xE9charg\xE9 : il contient tous les textes et r\xE9glages, avec ou sans publication.")},"sm"),i=Ue("Importer un contenu\u2026",()=>Yn("application/json,.json",!1,async r=>{try{let o=JSON.parse(await r[0].text()),a=o&&o.content&&o.settings===void 0?o.content:o;if(!a||!a.settings||!Array.isArray(a.posts))throw new Error("ce fichier n\u2019est pas un contenu du site");if(!await Bn("Importer ce contenu",`\xAB ${r[0].name} \xBB remplace ton brouillon. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.`,"Importer"))return;await ss({content:T.content,at:Date.now()});let l=T.content,c=rn(a);l.models.forEach(u=>{c.models.some(h=>h.id===u.id)||c.models.push(u)}),T.content=c,be({nav:!0}),Dr(),ct("Contenu import\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(o){ct("Import impossible : "+(o.message||o),"bad",8e3)}}),"sm ghost"),s=f("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"10px"}});Ve(n,f("div",{class:"block"},f("h3",null,"Sauvegardes"),f("p",{class:"hint",style:{marginTop:0}},"Le fichier export\xE9 contient tous les textes, r\xE9glages et liens vers les images. Il se r\xE9importe ici, ou se pose tel quel dans le dossier du site sous le nom content/content.json."),f("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},t,i),s)),(async()=>{let r=[],o=await Ui("draft-backup:"+T.draftKey);o&&o.content&&r.push(Ue(`R\xE9cup\xE9rer le brouillon mis de c\xF4t\xE9 le ${new Date(o.at).toLocaleString("fr-FR")}`,async()=>{if(!await Bn("R\xE9cup\xE9rer le brouillon","Ce brouillon remplace ton brouillon actuel (qui est mis de c\xF4t\xE9 \xE0 son tour).","R\xE9cup\xE9rer"))return;let u={content:T.content,at:Date.now()};T.content=rn(o.content),await ss(u),be({nav:!0}),Dr(),ct("Brouillon r\xE9cup\xE9r\xE9.")},"sm ghost"));let a=(await vh()).filter(u=>typeof u=="string"&&/^(draft:|demo:content:|draft-backup:)/.test(u)&&u!==T.draftKey&&u!=="draft-backup:"+T.draftKey&&!(T.backend.kind==="demo"&&u==="demo:content:v6")),l=u=>u.startsWith("demo:content:")?"publication de la d\xE9mo":u.startsWith("draft-backup:")?"brouillon mis de c\xF4t\xE9 ("+u.replace(/^draft-backup:draft:/,"").replace(/^demo:v\d+$/,"d\xE9mo").replace(/^folder:/,"dossier ")+")":u.startsWith("draft:demo:")?"brouillon de la d\xE9mo":u.startsWith("draft:folder:")?"brouillon du dossier \xAB "+u.slice(13)+" \xBB":"brouillon GitHub "+u.slice(6),c=[];for(let u of a){let h=await Ui(u),d=h&&(h.settings?h:h.content);d&&d.settings&&Array.isArray(d.posts)&&c.push({k:u,c:d,at:h&&h.at||0})}c.sort((u,h)=>h.at-u.at);for(let u of c)r.push(Ue(`Reprendre : ${l(u.k)}${u.at?" du "+new Date(u.at).toLocaleString("fr-FR"):""}`,async()=>{await Bn("Reprendre ce travail","Ce contenu remplace ton brouillon (qui est mis de c\xF4t\xE9). Les images ajout\xE9es ailleurs ne suivent pas : renvoie-les si besoin. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.","Reprendre")&&(await ss({content:T.content,at:Date.now()}),T.content=rn(structuredClone(u.c)),be({nav:!0}),Dr(),ct("Charg\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie."))},"sm ghost"));Ve(s,r)})()}function Ks(n){let e={};T.recent.forEach((E,U)=>{E&&E.url&&(e[U]=E.url)}),T.staged.forEach((E,U)=>{E&&E.url&&(e[U]=E.url)}),(T.backend.kind==="demo"||T.backend.kind==="folder")&&T.backend.urls&&T.backend.urls.forEach((E,U)=>{e[U]||(e[U]=E)});let t=T.content.sections.filter(E=>E.visible),i=n||(T.view==="posts"?T.filter.section:T.view==="sections"?T.sel.section:T.view==="settings"?"__home":"")||T.content.settings.startSection;i&&i!=="__home"&&!t.find(E=>E.id===i)&&(i=t[0]&&t[0].id);let s=f("div",{class:"frame"}),r="desk",o=async()=>{let E={};for(let[U,D]of[...T.recent,...T.staged])D&&D.blob&&(E[U]=D.blob);if(T.backend.kind==="folder"&&T.backend.urls){for(let U of T.backend.urls.keys())if(!E[U])try{E[U]=await T.backend.readBlob(U)}catch{}}if(T.backend.kind==="demo"&&T.backend.urls){for(let U of T.backend.urls.keys())if(!E[U]){let D=await Ui("demo:file:"+U).catch(()=>null);D&&(E[U]=D)}}return E},a=null,l=0,c=20261102,u=f("div",{class:"preview-warn"}),h=()=>{let E=l;try{E=E||a&&a.contentWindow&&a.contentWindow.HC_SITE_VERSION||0}catch{}if(E>=c){u.classList.remove("on");return}u.textContent="Le moteur du site dans "+(T.backend.kind==="github"?"le d\xE9p\xF4t":"ce dossier")+" est plus ancien que le back-office : l\u2019aper\xE7u ne montre pas tous tes r\xE9glages (typographie, showreel\u2026). Remplace assets/hc/site.bundle.js et site.js par la derni\xE8re version"+(T.backend.kind==="github"?", envoie-les sur GitHub, puis attends une minute.":"."),u.classList.add("on")},d=async E=>{!a||E.source!==a.contentWindow||!E.data||E.data.type!=="hc-preview-ready"||(l=E.data.version||0,h(),a.contentWindow.postMessage({type:"hc-preview",data:window.__hcPreview,blobs:await o()},"*"))};window.addEventListener("message",d);let m=()=>{window.__hcPreview={content:structuredClone(T.content),files:e,start:i==="__home"?"":i},a=f("iframe",{title:"Aper\xE7u du site",allow:"fullscreen"}),l=0,u.classList.remove("on"),window.HC_SITE_HTML||a.addEventListener("load",()=>setTimeout(h,3e3)),window.HC_SITE_HTML?a.srcdoc=window.HC_SITE_HTML:a.src=rs+"index.html?preview="+Date.now();let E={desk:["100%","100%"],tab:["820px","1080px"],mob:["390px","780px"]}[r];a.style.width=E[0],a.style.height=E[1],a.style.maxHeight="100%",Ve(s,a)},_=f("div",{class:"sizes",role:"group","aria-label":"Taille d\u2019\xE9cran"}),b=()=>Ve(_,...[["desk","Bureau"],["tab","Tablette"],["mob","Mobile"]].map(([E,U])=>f("button",{type:"button","aria-pressed":String(r===E),onclick:()=>{r=E,b(),m()}},U)));b();let g=f("select",{"aria-label":"Section"},f("option",{value:"__home",selected:i==="__home"},"Accueil"),t.map(E=>f("option",{value:E.id,selected:E.id===i},dt(E.name))));g.addEventListener("change",()=>{i=g.value,m()});let p=()=>{v.remove(),document.removeEventListener("keydown",R),window.removeEventListener("message",d)},R=E=>{E.key==="Escape"&&document.activeElement&&!document.activeElement.closest("iframe")&&p()},v=f("div",{class:"preview",role:"dialog","aria-label":"Aper\xE7u"},f("div",{class:"bar"},f("b",null,"Aper\xE7u"),f("span",null,Zs()?"avec les modifications non publi\xE9es":"identique au site en ligne"),f("span",{class:"sp"}),g,_,Ue("Recharger",m,"sm"),Ue("Fermer",p,"sm primary")),u,s);document.body.appendChild(v),document.addEventListener("keydown",R),m()}var Qt="hc-admin";function Xh(){let n={};try{n=JSON.parse(localStorage.getItem(Qt)||"{}")}catch{}try{let e=sessionStorage.getItem(Qt+":token");e&&!n.token&&(n.token=e)}catch{}return n}function __(){let n=/^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);if(!n)return{};let e=location.pathname.split("/").filter(Boolean);return{owner:n[1],repo:e.length>1&&e[0]!=="admin"?e[0]:`${n[1]}.github.io`}}async function oo(n){let e=f("img",{src:rs+"assets/hc/ui/logo-default.svg",alt:""}),t=f("h1",null,"Hand Coded.");y_(e,t);let i={};try{let g=await fetch("config.json",{cache:"no-store"});g.ok&&(i=await g.json())}catch{}let s=Xh(),r=__(),o=g=>s[g]||i[g]||r[g]||"",a=f("input",{type:"text",value:o("owner"),required:!0,autocomplete:"username",spellcheck:"false"}),l=f("input",{type:"text",value:o("repo"),required:!0,spellcheck:"false"}),c=f("input",{type:"text",value:o("branch")||"main",spellcheck:"false"}),u=f("input",{type:"text",value:o("root"),placeholder:"(racine du d\xE9p\xF4t)",spellcheck:"false"}),h=f("input",{type:"password",value:s.token||"",required:!0,autocomplete:"current-password",placeholder:"github_pat_\u2026",spellcheck:"false"});[a,l].forEach(g=>g.addEventListener("change",()=>{let p=jh({owner:a.value,repo:l.value});p.owner&&(a.value=p.owner),p.repo&&(l.value=p.repo)}));let d=f("input",{type:"checkbox",checked:!!s.remember}),m=f("p",{class:"err",role:"alert",hidden:!n},n||""),_=f("button",{type:"submit",class:"btn primary"},"Se connecter"),b=f("form",{onsubmit:async g=>{g.preventDefault(),m.hidden=!0,_.disabled=!0,_.textContent="Connexion\u2026";let p={owner:a.value.trim(),repo:l.value.trim(),branch:c.value.trim()||"main",root:u.value.trim(),token:h.value.trim(),remember:d.checked};try{await Yh(p)}catch(R){m.textContent="Connexion impossible : "+Ys(R),m.hidden=!1,_.disabled=!1,_.textContent="Se connecter"}}},f("h2",null,"Connexion"),f("p",{class:"lead"},"Le back-office publie directement dans ton d\xE9p\xF4t GitHub. Il lui faut un jeton d\u2019acc\xE8s limit\xE9 \xE0 ce d\xE9p\xF4t."),f("details",null,f("summary",null,"Cr\xE9er le jeton (2 minutes)"),f("ol",null,f("li",null,"Ouvre ",f("a",{href:"https://github.com/settings/personal-access-tokens/new",target:"_blank",rel:"noopener"},"GitHub \u203A Fine-grained tokens \u203A Generate new token"),"."),f("li",null,"Repository access : \xAB Only select repositories \xBB, choisis le d\xE9p\xF4t du site."),f("li",null,"Permissions \u203A Repository \u203A ",f("b",null,"Contents : Read and write"),". Rien d\u2019autre."),f("li",null,"Choisis une date d\u2019expiration, g\xE9n\xE8re, et colle le jeton ci-dessous."))),m,f("div",{class:"grid2"},ht("Propri\xE9taire (compte GitHub)",a),ht("D\xE9p\xF4t",l)),ht("Jeton d\u2019acc\xE8s",h,"Il reste dans ce navigateur et ne part que vers api.github.com."),f("details",{style:{background:"#fff"}},f("summary",null,"Options avanc\xE9es"),f("div",{class:"grid2",style:{marginTop:"12px"}},ht("Branche",c),ht("Dossier du site dans le d\xE9p\xF4t",u,"Vide si le site est \xE0 la racine."))),f("label",{class:"switch",style:{margin:"4px 0 16px"}},d,"Rester connect\xE9e sur cet ordinateur"),f("div",{class:"actions"},_,Ue("Essayer sans GitHub (d\xE9mo)",()=>Jh(),"ghost")),await x_());Ve(lo,f("div",{class:"login"},f("aside",{class:"side"},f("div",null,e,t,f("p",null,"Back-office du site : sections, objets 3D, contenus, tags.")),f("small",null,"Moteur 3D d\u2019apr\xE8s le site Fat-Man Collective de 2008.")),b)),(a.value&&l.value?h:a).focus()}async function y_(n,e){try{let t=window.HC_CONTENT;if(!t){let o=await fetch(rs+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!o.ok)return;t=await o.json()}let i=rn(structuredClone(t)).settings;ic(i);let s=i.taglines&&(i.taglines.fr||i.taglines.en)||[];e.textContent=s[0]||i.name||"Hand Coded.",Object.assign(e.style,Nh(i));let r=()=>{let o=i.logo?rs+i.logo:io(i.accent||"#ffcc00",i);n.src=o,Dh(o)};r(),Uh(i,r)}catch{}}async function $h(){try{if(localStorage.getItem(Qt+":h-reading"))return localStorage.removeItem(Qt+":h-reading"),await mi("folder:handle"),null;localStorage.setItem(Qt+":h-reading","1")}catch{}let n=await Ui("folder:handle").catch(()=>null);try{localStorage.removeItem(Qt+":h-reading")}catch{}return n||null}async function x_(){let n=f("div",{class:"folder-card"});if(!Qi.supported())return Ve(n,f("h3",null,"Travailler dans le dossier du site"),f("p",null,"Ce navigateur ne sait pas \xE9crire dans un dossier de l\u2019ordinateur. Ouvre ce back-office dans Chrome ou Edge pour que \xAB Publier \xBB enregistre directement dans les fichiers du site. Sinon, utilise GitHub, ou exporte ton travail depuis Historique \u203A Sauvegardes.")),n;let e=await $h(),t=f("p",{class:"err",role:"alert",hidden:!0}),i=async()=>{t.hidden=!0;try{let s=await window.showDirectoryPicker({id:"hand-coded-site",mode:"readwrite"});await uo(s)}catch(s){if(s&&s.name==="AbortError")return;t.textContent="Ouverture impossible : "+(s.message||s),t.hidden=!1}};return Ve(n,f("h3",null,"Travailler dans le dossier du site"),f("p",null,"Sans GitHub : choisis le dossier du site sur ton ordinateur (celui qui contient index.html et content). \xAB Publier \xBB y \xE9crit directement les textes, images et mod\xE8les. Tu peux ensuite d\xE9placer, copier ou envoyer ce dossier : tout est dedans."),t,f("div",{class:"actions"},e?Ue(`Rouvrir le dossier \xAB ${e.name} \xBB`,async()=>{t.hidden=!0;try{await uo(e,!0)}catch(s){t.textContent="Ce dossier n\u2019est plus accessible (d\xE9plac\xE9 ou renomm\xE9 ?) : choisis-le \xE0 nouveau. "+(s.message||""),t.hidden=!1}},"primary"):null,Ue(e?"Choisir un autre dossier\u2026":"Choisir le dossier du site\u2026",i,e?"ghost":"primary"))),n}async function uo(n,e){let t=new Qi(n);if(!await t.permission(!0))throw new Error("acc\xE8s refus\xE9");await t.check();let i=await t.load();await t.prepare(i);try{await qs("folder:handle",n),localStorage.setItem(Qt+":mode","folder")}catch{}T.backend=t,T.draftKey="draft:folder:"+n.name,await sc(i)}function b_(){try{localStorage.removeItem(Qt+":mode")}catch{}if(Rh){location.reload();return}Kl().then(()=>{T.content=null,oo()})}function jh(n){let e={...n},t=/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.repo||"")||/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.owner||"");return t&&(e.owner=t[1],e.repo=t[2]),e.owner=String(e.owner||"").trim().replace(/^@/,"").replace(/\/+$/,""),e.repo=String(e.repo||"").trim().replace(/\.git$/i,"").replace(/^.*\//,""),e.branch=String(e.branch||"").trim()||"main",e.root=String(e.root||"").trim().replace(/^\/+|\/+$/g,""),e.token=String(e.token||"").trim(),e}var Xl=n=>Object.assign(new Error(n),{status:0});async function Yh(n,e){n=jh(n);let t=new Qa(n);try{await t.check()}catch(s){if(s.status===404){let r=null;try{r=await t.req("/user")}catch{}throw Xl(`GitHub ne trouve pas le d\xE9p\xF4t \xAB ${n.owner}/${n.repo} \xBB`+(r?` (le jeton appartient au compte \xAB ${r.login} \xBB)`:"")+". V\xE9rifie le propri\xE9taire et le nom du d\xE9p\xF4t, tels qu\u2019ils apparaissent dans l\u2019adresse github.com/propri\xE9taire/d\xE9p\xF4t.")}throw s}try{await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`)}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/branches?per_page=30`)).map(o=>o.name)}catch{}throw Xl(`la branche \xAB ${t.cfg.branch} \xBB n\u2019existe pas dans ${n.owner}/${n.repo}.`+(r.length?` Branches du d\xE9p\xF4t : ${r.join(", ")}.`:""))}let i;try{i=await t.load()}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/git/trees/${encodeURIComponent(t.cfg.branch)}?recursive=1`)).tree.filter(a=>a.type==="blob"&&/(^|\/)content\/content\.json$/.test(a.path)).map(a=>a.path.replace(/\/?content\/content\.json$/,""))}catch{}if(r.length===1)n.root=r[0],t.cfg.root=r[0],i=await t.load(),e||setTimeout(()=>ct(`Site trouv\xE9 dans le dossier \xAB ${r[0]||"(racine)"} \xBB du d\xE9p\xF4t : r\xE9glage corrig\xE9.`),400);else throw Xl(`pas de content/content.json dans ${n.root?"le dossier \xAB "+n.root+" \xBB":"la racine"} du d\xE9p\xF4t.`+(r.length?` Il y en a dans : ${r.map(o=>o||"(racine)").join(", ")}. Indique le bon dans Options avanc\xE9es \u203A Dossier du site.`:" Envoie d\u2019abord les fichiers du site dans le d\xE9p\xF4t."))}T.head=await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`).then(s=>s.object.sha);try{localStorage.setItem(Qt,JSON.stringify({owner:n.owner,repo:n.repo,branch:n.branch,root:n.root,remember:!!n.remember,token:n.remember?n.token:void 0})),n.remember?sessionStorage.removeItem(Qt+":token"):sessionStorage.setItem(Qt+":token",n.token)}catch{}T.backend=t,T.cfg=n,T.draftKey=`draft:${n.owner}/${n.repo}@${t.cfg.branch}`,await sc(i)}function M_(){try{let n=JSON.parse(localStorage.getItem(Qt)||"{}");delete n.token,localStorage.setItem(Qt,JSON.stringify(n)),sessionStorage.removeItem(Qt+":token")}catch{}location.reload()}async function Jh(){try{localStorage.removeItem(Qt+":mode")}catch{}T.backend=new eo(rs),T.draftKey="draft:demo:v6";let n=await T.backend.load();await T.backend.prepare(n),await sc(n)}async function sc(n){T.content=n,T.base=JSON.stringify(n);try{ic(n.settings),document.fonts&&await Promise.race([Promise.all(bh(n.settings).map(t=>document.fonts.load(t).catch(()=>{}))),new Promise(t=>setTimeout(t,2500))])}catch{}await Fv(),document.documentElement.style.setProperty("--accent",T.content.settings.accent||"#ffcc00");let e=(location.hash.match(/^#\/(\w+)/)||[])[1];Wh.some(([t])=>t===e)&&(T.view=e),Dr()}document.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="s"&&T.content&&(n.preventDefault(),Ql())});window.addEventListener("beforeunload",()=>{T.content&&Kl()});(async function(){try{if(Rh){await Jh();return}let e=Xh(),t="";try{t=localStorage.getItem(Qt+":mode")||""}catch{}if(t==="folder"&&Qi.supported()){let i=await $h();if(i)try{if(await new Qi(i).permission(!1)){await uo(i,!0);return}}catch{}return oo()}if(e.token&&e.owner&&e.repo)try{await Yh(e,!0);return}catch(i){return oo("Reconnexion impossible : "+Ys(i))}await oo()}catch(e){console.error(e),Ve(lo,f("p",{class:"boot"},"Le back-office n\u2019a pas pu d\xE9marrer : "+(e.message||e)))}})();window.__admin={S:T,publish:Ql,go:Js,openPreview:Ks,importModelFiles:nc,startFolder:uo};})();
