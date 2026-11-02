/* Généré depuis assets/hc/admin.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var xl="160";var Uh=0,jl=1,Oh=2;var Nu=1,Fh=2,Kn=3,Un=0,un=1,gn=2;var gi=0,bs=1,Jl=2,Zl=3,Kl=4,kh=5,ki=100,Bh=101,zh=102,Ql=103,ec=104,Hh=200,Vh=201,Gh=202,Wh=203,Vo=204,Go=205,qh=206,Xh=207,$h=208,Yh=209,jh=210,Jh=211,Zh=212,Kh=213,Qh=214,ed=0,td=1,nd=2,la=3,id=4,sd=5,rd=6,ad=7,za=0,od=1,ld=2,_i=0,cd=1,ud=2,hd=3,dd=4,fd=5,pd=6,tc="attached",md="detached",Du=300,ws=301,Es=302,Wo=303,qo=304,Ha=306,yi=1e3,Qt=1001,Xo=1002,Yt=1003,nc=1004;var oo=1005;var rn=1006,gd=1007;var xi=1008;var vi=1009,_d=1010,vd=1011,bl=1012,Uu=1013,mi=1014,ei=1015,ur=1016,Ou=1017,Fu=1018,zi=1020,yd=1021,bn=1023,xd=1024,bd=1025,Hi=1026,Ts=1027,Md=1028,ku=1029,Sd=1030,Bu=1031,zu=1033,lo=33776,co=33777,uo=33778,ho=33779,ic=35840,sc=35841,rc=35842,ac=35843,Hu=36196,oc=37492,lc=37496,cc=37808,uc=37809,hc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,yc=37818,xc=37819,bc=37820,Mc=37821,fo=36492,Sc=36494,wc=36495,wd=36283,Ec=36284,Tc=36285,Ac=36286;var ca=2300,ua=2301,po=2302,Cc=2400,Rc=2401,Lc=2402,Ed=2500;var Vu=3e3,Vi=3001,Td=3200,Ad=3201,Ml=0,Cd=1,Mn="",Ut="srgb",ni="srgb-linear",Sl="display-p3",Va="display-p3-linear",ha="linear",Lt="srgb",da="rec709",fa="p3";var ts=7680;var Pc=519,Rd=512,Ld=513,Pd=514,Gu=515,Id=516,Nd=517,Dd=518,Ud=519,Ic=35044;var Nc="300 es",$o=1035,ti=2e3,pa=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=1234567,ar=Math.PI/180,As=180/Math.PI;function Ti(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function wl(n,e){return(n%e+e)%e}function Od(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Fd(n,e,t){return n!==e?(t-n)/(e-n):0}function or(n,e,t){return(1-t)*n+t*e}function kd(n,e,t,i){return or(n,e,1-Math.exp(-t*i))}function Bd(n,e=1){return e-Math.abs(wl(n,e*2)-e)}function zd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gd(n,e){return n+Math.random()*(e-n)}function Wd(n){return n*(.5-Math.random())}function qd(n){n!==void 0&&(Dc=n);let e=Dc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xd(n){return n*ar}function $d(n){return n*As}function Yo(n){return(n&n-1)===0&&n!==0}function Yd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ma(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jd(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),g=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*g,a*c);break;case"YXY":n.set(l*g,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*g,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ds={DEG2RAD:ar,RAD2DEG:As,generateUUID:Ti,clamp:an,euclideanModulo:wl,mapLinear:Od,inverseLerp:Fd,lerp:or,damp:kd,pingpong:Bd,smoothstep:zd,smootherstep:Hd,randInt:Vd,randFloat:Gd,randFloatSpread:Wd,seededRandom:qd,degToRad:Xd,radToDeg:$d,isPowerOfTwo:Yo,ceilPowerOfTwo:Yd,floorPowerOfTwo:ma,setQuaternionFromProperEuler:jd,normalize:nn,denormalize:_s},ht=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],g=i[5],v=i[8],b=s[0],p=s[3],f=s[6],L=s[1],_=s[4],C=s[7],U=s[2],E=s[5],D=s[8];return r[0]=o*b+a*L+l*U,r[3]=o*p+a*_+l*E,r[6]=o*f+a*C+l*D,r[1]=c*b+u*L+h*U,r[4]=c*p+u*_+h*E,r[7]=c*f+u*C+h*D,r[2]=d*b+g*L+v*U,r[5]=d*p+g*_+v*E,r[8]=d*f+g*C+v*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,g=c*r-o*l,v=t*h+i*d+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return e[0]=h*b,e[1]=(s*c-u*i)*b,e[2]=(a*i-s*o)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=g*b,e[7]=(i*l-c*t)*b,e[8]=(o*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mo=new lt;function Wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){let n=hr("canvas");return n.style.display="block",n}var Uc={};function lr(n){n in Uc||(Uc[n]=!0,console.warn(n))}var Oc=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fc=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[ni]:{transfer:ha,primaries:da,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:Lt,primaries:da,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:ha,primaries:fa,toReference:n=>n.applyMatrix3(Fc),fromReference:n=>n.applyMatrix3(Oc)},[Sl]:{transfer:Lt,primaries:fa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fc),fromReference:n=>n.applyMatrix3(Oc).convertLinearToSRGB()}},Zd=new Set([ni,Va]),wt={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Zd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Fr[e].toReference,s=Fr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fr[n].primaries},getTransfer:function(n){return n===Mn?ha:Fr[n].transfer}};function Ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ns,ga=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=hr("canvas")),ns.width=e.width,ns.height=e.height;let i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ms(t[i]/255)*255):t[i]=Ms(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kd=0,_a=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_o(s[o].image)):r.push(_o(s[o]))}else r=_o(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ga.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qd=0,_n=class n extends bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qt,s=Qt,r=rn,o=xi,a=bn,l=vi,c=n.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ti(),this.name="",this.source=new _a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Vi?Ut:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Vi:Vu}set encoding(e){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vi?Ut:Mn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Du;_n.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],v=l[9],b=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(v+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,C=(g+1)/2,U=(f+1)/2,E=(u+d)/4,D=(h+b)/4,W=(v+p)/4;return _>C&&_>U?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=D/i):C>U?C<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),i=E/s,r=W/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=D/r,s=W/r),this.set(i,s,r,t),this}let L=Math.sqrt((p-v)*(p-v)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(L)<.001&&(L=1),this.x=(p-v)/L,this.y=(h-b)/L,this.z=(d-u)/L,this.w=Math.acos((c+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vi?Ut:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},va=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],g=r[o+1],v=r[o+2],b=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=b;return}if(h!==b||l!==d||c!==g||u!==v){let p=1-a,f=l*d+c*g+u*v+h*b,L=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let U=Math.sqrt(_),E=Math.atan2(U,f*L);p=Math.sin(p*E)/U,a=Math.sin(a*E)/U}let C=a*L;if(l=l*p+d*C,c=c*p+g*C,u=u*p+v*C,h=h*p+b*C,p===1-a){let U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],g=r[o+2],v=r[o+3];return e[t]=a*v+u*h+l*g-c*d,e[t+1]=l*v+u*d+c*h-a*g,e[t+2]=c*v+u*g+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),g=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"YXZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"ZXY":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"ZYX":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"YZX":this._x=d*u*h+c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h-d*g*v;break;case"XZY":this._x=d*u*h-c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>h){let g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>h){let g=2*Math.sqrt(1+a-i-h);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+h-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vo=new H,kc=new On,hn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Br.subVectors(this.max,tr),is.subVectors(e.a,tr),ss.subVectors(e.b,tr),rs.subVectors(e.c,tr),ui.subVectors(ss,is),hi.subVectors(rs,ss),Ni.subVectors(is,rs);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Ni.z,Ni.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Ni.z,0,-Ni.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Ni.y,Ni.x,0];return!yo(t,is,ss,rs,Br)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,is,ss,rs,Br))?!1:(zr.crossVectors(ui,hi),t=[zr.x,zr.y,zr.z],yo(t,is,ss,rs,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xn=[new H,new H,new H,new H,new H,new H,new H,new H],Tn=new H,kr=new hn,is=new H,ss=new H,rs=new H,ui=new H,hi=new H,Ni=new H,tr=new H,Br=new H,zr=new H,Di=new H;function yo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ef=new hn,nr=new H,xo=new H,Mi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ef.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(xo)),this.expandByPoint(nr.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new H,bo=new H,Hr=new H,di=new H,Mo=new H,Vr=new H,So=new H,dr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bo.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(bo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=di.dot(this.direction),l=-di.dot(Hr),c=di.lengthSq(),u=Math.abs(1-o*o),h,d,g,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){let b=1/u;h*=b,d*=b,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bo).addScaledVector(Hr,d),g}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,s,r){Mo.subVectors(t,e),Vr.subVectors(i,e),So.crossVectors(Mo,Vr);let o=this.direction.dot(So),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);let l=a*this.direction.dot(Vr.crossVectors(di,Vr));if(l<0)return null;let c=a*this.direction.dot(Mo.cross(di));if(c<0||l+c>o)return null;let u=-a*di.dot(So);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,d,g,v,b,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,g,v,b,p)}set(e,t,i,s,r,o,a,l,c,u,h,d,g,v,b,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=v,f[11]=b,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,g=o*h,v=a*u,b=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+v*c,t[5]=d-b*c,t[9]=-a*l,t[2]=b-d*c,t[6]=v+g*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,g=l*h,v=c*u,b=c*h;t[0]=d+b*a,t[4]=v*a-g,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=g*a-v,t[6]=b+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,g=l*h,v=c*u,b=c*h;t[0]=d-b*a,t[4]=-o*h,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*u,t[9]=b-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,g=o*h,v=a*u,b=a*h;t[0]=l*u,t[4]=v*c-g,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=g*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,g=o*c,v=a*l,b=a*c;t[0]=l*u,t[4]=b-d*h,t[8]=v*h+g,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*h+v,t[10]=d-b*h}else if(e.order==="XZY"){let d=o*l,g=o*c,v=a*l,b=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=o*u,t[9]=g*h-v,t[2]=v*h-g,t[6]=a*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,i){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),fi.crossVectors(i,pn),fi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),fi.crossVectors(i,pn)),fi.normalize(),Gr.crossVectors(pn,fi),s[0]=fi.x,s[4]=Gr.x,s[8]=pn.x,s[1]=fi.y,s[5]=Gr.y,s[9]=pn.y,s[2]=fi.z,s[6]=Gr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],g=i[13],v=i[2],b=i[6],p=i[10],f=i[14],L=i[3],_=i[7],C=i[11],U=i[15],E=s[0],D=s[4],W=s[8],S=s[12],N=s[1],ee=s[5],le=s[9],pe=s[13],z=s[2],$=s[6],V=s[10],re=s[14],te=s[3],J=s[7],O=s[11],G=s[15];return r[0]=o*E+a*N+l*z+c*te,r[4]=o*D+a*ee+l*$+c*J,r[8]=o*W+a*le+l*V+c*O,r[12]=o*S+a*pe+l*re+c*G,r[1]=u*E+h*N+d*z+g*te,r[5]=u*D+h*ee+d*$+g*J,r[9]=u*W+h*le+d*V+g*O,r[13]=u*S+h*pe+d*re+g*G,r[2]=v*E+b*N+p*z+f*te,r[6]=v*D+b*ee+p*$+f*J,r[10]=v*W+b*le+p*V+f*O,r[14]=v*S+b*pe+p*re+f*G,r[3]=L*E+_*N+C*z+U*te,r[7]=L*D+_*ee+C*$+U*J,r[11]=L*W+_*le+C*V+U*O,r[15]=L*S+_*pe+C*re+U*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],g=e[14],v=e[3],b=e[7],p=e[11],f=e[15];return v*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*g-i*l*g)+b*(+t*l*g-t*c*d+r*o*d-s*o*g+s*c*u-r*l*u)+p*(+t*c*h-t*a*g-r*o*h+i*o*g+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],g=e[11],v=e[12],b=e[13],p=e[14],f=e[15],L=h*p*c-b*d*c+b*l*g-a*p*g-h*l*f+a*d*f,_=v*d*c-u*p*c-v*l*g+o*p*g+u*l*f-o*d*f,C=u*b*c-v*h*c+v*a*g-o*b*g-u*a*f+o*h*f,U=v*h*l-u*b*l-v*a*d+o*b*d+u*a*p-o*h*p,E=t*L+i*_+s*C+r*U;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return e[0]=L*D,e[1]=(b*d*r-h*p*r-b*s*g+i*p*g+h*s*f-i*d*f)*D,e[2]=(a*p*r-b*l*r+b*s*c-i*p*c-a*s*f+i*l*f)*D,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*g-i*l*g)*D,e[4]=_*D,e[5]=(u*p*r-v*d*r+v*s*g-t*p*g-u*s*f+t*d*f)*D,e[6]=(v*l*r-o*p*r-v*s*c+t*p*c+o*s*f-t*l*f)*D,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*g+t*l*g)*D,e[8]=C*D,e[9]=(v*h*r-u*b*r-v*i*g+t*b*g+u*i*f-t*h*f)*D,e[10]=(o*b*r-v*a*r+v*i*c-t*b*c-o*i*f+t*a*f)*D,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*g-t*a*g)*D,e[12]=U*D,e[13]=(u*b*s-v*h*s+v*i*d-t*b*d-u*i*p+t*h*p)*D,e[14]=(v*a*s-o*b*s-v*i*l+t*b*l+o*i*p-t*a*p)*D,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,g=r*u,v=r*h,b=o*u,p=o*h,f=a*h,L=l*c,_=l*u,C=l*h,U=i.x,E=i.y,D=i.z;return s[0]=(1-(b+f))*U,s[1]=(g+C)*U,s[2]=(v-_)*U,s[3]=0,s[4]=(g-C)*E,s[5]=(1-(d+f))*E,s[6]=(p+L)*E,s[7]=0,s[8]=(v+_)*D,s[9]=(p-L)*D,s[10]=(1-(d+b))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,u=1/o,h=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ti){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),g,v;if(a===ti)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===pa)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,g=(i+s)*u,v,b;if(a===ti)v=(o+r)*h,b=-2*h;else if(a===pa)v=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=b,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},as=new H,An=new ot,tf=new H(0,0,0),nf=new H(1,1,1),fi=new H,Gr=new H,pn=new H,Bc=new ot,zc=new On,ya=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ya.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sf=0,Hc=new H,os=new On,Yn=new ot,Wr=new H,ir=new H,rf=new H,af=new On,Vc=new H(1,0,0),Gc=new H(0,1,0),Wc=new H(0,0,1),of={type:"added"},lf={type:"removed"},zt=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new ya,i=new On,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new lt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ir,Wr,this.up):Yn.lookAt(Wr,ir,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Yn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(of)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new H(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new H,jn=new H,wo=new H,Jn=new H,ls=new H,cs=new H,qc=new H,Eo=new H,To=new H,Ao=new H,qr=!1,vs=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),jn.subVectors(i,t),wo.subVectors(e,t);let o=Cn.dot(Cn),a=Cn.dot(jn),l=Cn.dot(wo),c=jn.dot(jn),u=jn.dot(wo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,g=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-g-v,v,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,s,r,o,a,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),jn.subVectors(e,t),Cn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Cn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,i),cs.subVectors(r,i),Eo.subVectors(e,i);let l=ls.dot(Eo),c=cs.dot(Eo);if(l<=0&&c<=0)return t.copy(i);To.subVectors(e,s);let u=ls.dot(To),h=cs.dot(To);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);Ao.subVectors(e,r);let g=ls.dot(Ao),v=cs.dot(Ao);if(v>=0&&g<=v)return t.copy(r);let b=g*c-l*v;if(b<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(cs,a);let p=u*v-g*h;if(p<=0&&h-u>=0&&g-v>=0)return qc.subVectors(r,s),a=(h-u)/(h-u+(g-v)),t.copy(s).addScaledVector(qc,a);let f=1/(p+b+d);return o=b*f,a=d*f,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=wl(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Co(o,r,e+1/3),this.g=Co(o,r,e),this.b=Co(o,r,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return wt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(an(Kt.r*255,0,255))*65536+Math.round(an(Kt.g*255,0,255))*256+Math.round(an(Kt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Ut){wt.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,s=Kt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Xr);let i=or(pi.h,Xr.h,t),s=or(pi.s,Xr.s,t),r=or(pi.l,Xr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new it;it.NAMES=qu;var cf=0,si=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=bs,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vo&&(i.blendSrc=this.blendSrc),this.blendDst!==Go&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new H,$r=new ht,Sn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ic,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}};var ba=class extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ma=class extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Bt=class extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var uf=0,xn=new ot,Ro=new zt,us=new H,mn=new hn,sr=new hn,qt=new H,wn=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Ma:ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(mn.min,sr.min),mn.expandByPoint(qt),qt.addVectors(mn.max,sr.max),mn.expandByPoint(qt)):(mn.expandByPoint(sr.min),mn.expandByPoint(sr.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),qt.add(us)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new H,u[N]=new H;let h=new H,d=new H,g=new H,v=new ht,b=new ht,p=new ht,f=new H,L=new H;function _(N,ee,le){h.fromArray(s,N*3),d.fromArray(s,ee*3),g.fromArray(s,le*3),v.fromArray(o,N*2),b.fromArray(o,ee*2),p.fromArray(o,le*2),d.sub(h),g.sub(h),b.sub(v),p.sub(v);let pe=1/(b.x*p.y-p.x*b.y);isFinite(pe)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(g,-b.y).multiplyScalar(pe),L.copy(g).multiplyScalar(b.x).addScaledVector(d,-p.x).multiplyScalar(pe),c[N].add(f),c[ee].add(f),c[le].add(f),u[N].add(L),u[ee].add(L),u[le].add(L))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let N=0,ee=C.length;N<ee;++N){let le=C[N],pe=le.start,z=le.count;for(let $=pe,V=pe+z;$<V;$+=3)_(i[$+0],i[$+1],i[$+2])}let U=new H,E=new H,D=new H,W=new H;function S(N){D.fromArray(r,N*3),W.copy(D);let ee=c[N];U.copy(ee),U.sub(D.multiplyScalar(D.dot(ee))).normalize(),E.crossVectors(W,ee);let pe=E.dot(u[N])<0?-1:1;l[N*4]=U.x,l[N*4+1]=U.y,l[N*4+2]=U.z,l[N*4+3]=pe}for(let N=0,ee=C.length;N<ee;++N){let le=C[N],pe=le.start,z=le.count;for(let $=pe,V=pe+z;$<V;$+=3)S(i[$+0]),S(i[$+1]),S(i[$+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let d=0,g=e.count;d<g;d+=3){let v=e.getX(d+0),b=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),g=0,v=0;for(let b=0,p=l.length;b<p;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*u;for(let f=0;f<u;f++)d[v++]=c[g++]}return new Sn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xc=new ot,Ui=new dr,Yr=new Mi,$c=new H,hs=new H,ds=new H,fs=new H,Lo=new H,jr=new H,Jr=new ht,Zr=new ht,Kr=new ht,Yc=new H,jc=new H,Jc=new H,Qr=new H,ea=new H,on=class extends zt{constructor(e=new wn,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Lo.fromBufferAttribute(h,e),o?jr.addScaledVector(Lo,u):jr.addScaledVector(Lo.sub(t),u))}t.add(jr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Yr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Yr,$c)===null||Ui.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Xc.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Xc),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,b=d.length;v<b;v++){let p=d[v],f=o[p.materialIndex],L=Math.max(p.start,g.start),_=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let C=L,U=_;C<U;C+=3){let E=a.getX(C),D=a.getX(C+1),W=a.getX(C+2);s=ta(this,f,e,i,c,u,h,E,D,W),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let v=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let p=v,f=b;p<f;p+=3){let L=a.getX(p),_=a.getX(p+1),C=a.getX(p+2);s=ta(this,o,e,i,c,u,h,L,_,C),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,b=d.length;v<b;v++){let p=d[v],f=o[p.materialIndex],L=Math.max(p.start,g.start),_=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let C=L,U=_;C<U;C+=3){let E=C,D=C+1,W=C+2;s=ta(this,f,e,i,c,u,h,E,D,W),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let v=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let p=v,f=b;p<f;p+=3){let L=p,_=p+1,C=p+2;s=ta(this,o,e,i,c,u,h,L,_,C),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function hf(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Un,a),l===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:n}}function ta(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,hs),n.getVertexPosition(l,ds),n.getVertexPosition(c,fs);let u=hf(n,e,t,i,hs,ds,fs,Qr);if(u){s&&(Jr.fromBufferAttribute(s,a),Zr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),u.uv=vs.getInterpolation(Qr,hs,ds,fs,Jr,Zr,Kr,new ht)),r&&(Jr.fromBufferAttribute(r,a),Zr.fromBufferAttribute(r,l),Kr.fromBufferAttribute(r,c),u.uv1=vs.getInterpolation(Qr,hs,ds,fs,Jr,Zr,Kr,new ht),u.uv2=u.uv1),o&&(Yc.fromBufferAttribute(o,a),jc.fromBufferAttribute(o,l),Jc.fromBufferAttribute(o,c),u.normal=vs.getInterpolation(Qr,hs,ds,fs,Yc,jc,Jc,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};vs.getNormal(hs,ds,fs,h.normal),u.face=h}return u}var fr=class n extends wn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,g=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function v(b,p,f,L,_,C,U,E,D,W,S){let N=C/D,ee=U/W,le=C/2,pe=U/2,z=E/2,$=D+1,V=W+1,re=0,te=0,J=new H;for(let O=0;O<V;O++){let G=O*ee-pe;for(let X=0;X<$;X++){let k=X*N-le;J[b]=k*L,J[p]=G*_,J[f]=z,c.push(J.x,J.y,J.z),J[b]=0,J[p]=0,J[f]=E>0?1:-1,u.push(J.x,J.y,J.z),h.push(X/D),h.push(1-O/W),re+=1}}for(let O=0;O<W;O++)for(let G=0;G<D;G++){let X=d+G+$*O,k=d+G+$*(O+1),B=d+(G+1)+$*(O+1),ie=d+(G+1)+$*O;l.push(X,k,ie),l.push(k,B,ie),te+=6}a.addGroup(g,te,S),g+=te,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=Cs(n[t]);for(let s in i)e[s]=i[s]}return e}function df(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xu(n){return n.getRenderTarget()===null?n.outputColorSpace:wt.workingColorSpace}var ff={clone:Cs,merge:sn},pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Sa=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends Sa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ps=-90,ms=1,Zo=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(ps,ms,e,t);s.layers=this.layers,this.add(s);let r=new kt(ps,ms,e,t);r.layers=this.layers,this.add(r);let o=new kt(ps,ms,e,t);o.layers=this.layers,this.add(o);let a=new kt(ps,ms,e,t);a.layers=this.layers,this.add(a);let l=new kt(ps,ms,e,t);l.layers=this.layers,this.add(l);let c=new kt(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},wa=class extends _n{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ko=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vi?Ut:Mn),this.texture=new wa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fr(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:gi});r.uniforms.tEquirect.value=t;let o=new on(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=rn),new Zo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Po=new H,gf=new H,_f=new lt,Qn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Po.subVectors(i,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Po),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_f.getNormalMatrix(e),s=this.coplanarPoint(Po).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Mi,na=new H,pr=class{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],g=s[8],v=s[9],b=s[10],p=s[11],f=s[12],L=s[13],_=s[14],C=s[15];if(i[0].setComponents(l-r,d-c,p-g,C-f).normalize(),i[1].setComponents(l+r,d+c,p+g,C+f).normalize(),i[2].setComponents(l+o,d+u,p+v,C+L).normalize(),i[3].setComponents(l-o,d-u,p-v,C-L).normalize(),i[4].setComponents(l-a,d-h,p-b,C-_).normalize(),t===ti)i[5].setComponents(l+a,d+h,p+b,C+_).normalize();else if(t===pa)i[5].setComponents(a,h,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $u(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vf(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let h=c.array,d=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,d),c.onUploadCallback();let b;if(h instanceof Float32Array)b=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=n.SHORT;else if(h instanceof Uint32Array)b=n.UNSIGNED_INT;else if(h instanceof Int32Array)b=n.INT;else if(h instanceof Int8Array)b=n.BYTE;else if(h instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,u,h){let d=u.array,g=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,c),g.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let b=0,p=v.length;b<p;b++){let f=v[b];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var mr=class n extends wn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,g=[],v=[],b=[],p=[];for(let f=0;f<u;f++){let L=f*d-o;for(let _=0;_<c;_++){let C=_*h-r;v.push(C,-L,0),b.push(0,0,1),p.push(_/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let L=0;L<a;L++){let _=L+c*f,C=L+c*(f+1),U=L+1+c*(f+1),E=L+1+c*f;g.push(_,C,E),g.push(C,U,E)}this.setIndex(g),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Nf=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vf=`#define PI 3.141592653589793
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`
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
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,vp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:yf,alphahash_pars_fragment:xf,alphamap_fragment:bf,alphamap_pars_fragment:Mf,alphatest_fragment:Sf,alphatest_pars_fragment:wf,aomap_fragment:Ef,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:Cf,begin_vertex:Rf,beginnormal_vertex:Lf,bsdfs:Pf,iridescence_fragment:If,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Ff,color_fragment:kf,color_pars_fragment:Bf,color_pars_vertex:zf,color_vertex:Hf,common:Vf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:qf,displacementmap_vertex:Xf,emissivemap_fragment:$f,emissivemap_pars_fragment:Yf,colorspace_fragment:jf,colorspace_pars_fragment:Jf,envmap_fragment:Zf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Qf,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:up,lights_pars_begin:hp,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:yp,lights_fragment_maps:xp,lights_fragment_end:bp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Cp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Pp,morphcolor_vertex:Ip,morphnormal_vertex:Np,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:Op,normal_fragment_maps:Fp,normal_pars_fragment:kp,normal_pars_vertex:Bp,normal_vertex:zp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:qp,opaque_fragment:Xp,packing:$p,premultiplied_alpha_fragment:Yp,project_vertex:jp,dithering_fragment:Jp,dithering_pars_fragment:Zp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:um,tonemapping_pars_fragment:hm,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:ym,backgroundCube_vert:xm,backgroundCube_frag:bm,cube_vert:Mm,cube_frag:Sm,depth_vert:wm,depth_frag:Em,distanceRGBA_vert:Tm,distanceRGBA_frag:Am,equirect_vert:Cm,equirect_frag:Rm,linedashed_vert:Lm,linedashed_frag:Pm,meshbasic_vert:Im,meshbasic_frag:Nm,meshlambert_vert:Dm,meshlambert_frag:Um,meshmatcap_vert:Om,meshmatcap_frag:Fm,meshnormal_vert:km,meshnormal_frag:Bm,meshphong_vert:zm,meshphong_frag:Hm,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:Wm,meshtoon_frag:qm,points_vert:Xm,points_frag:$m,shadow_vert:Ym,shadow_frag:jm,sprite_vert:Jm,sprite_frag:Zm},_e={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Dn={basic:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:sn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:sn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:sn([_e.points,_e.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:sn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:sn([_e.common,_e.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:sn([_e.sprite,_e.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:sn([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:sn([_e.lights,_e.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Dn.physical={uniforms:sn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var ia={r:0,b:0,g:0};function Km(n,e,t,i,s,r,o){let a=new it(0),l=r===!0?0:1,c,u,h=null,d=0,g=null;function v(p,f){let L=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?b(a,l):_&&_.isColor&&(b(_,1),L=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||L)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ha)?(u===void 0&&(u=new on(new fr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Cs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=wt.getTransfer(_.colorSpace)!==Lt,(h!==_||d!==_.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,g=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new on(new mr(2,2),new ri({name:"BackgroundMaterial",uniforms:Cs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=wt.getTransfer(_.colorSpace)!==Lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,g=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function b(p,f){p.getRGB(ia,Xu(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,b(a,l)},render:v}}function Qm(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,u=!1;function h(z,$,V,re,te){let J=!1;if(o){let O=b(re,V,$);c!==O&&(c=O,g(c.object)),J=f(z,re,V,te),J&&L(z,re,V,te)}else{let O=$.wireframe===!0;(c.geometry!==re.id||c.program!==V.id||c.wireframe!==O)&&(c.geometry=re.id,c.program=V.id,c.wireframe=O,J=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,W(z,$,V,re),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function g(z){return i.isWebGL2?n.bindVertexArray(z):r.bindVertexArrayOES(z)}function v(z){return i.isWebGL2?n.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function b(z,$,V){let re=V.wireframe===!0,te=a[z.id];te===void 0&&(te={},a[z.id]=te);let J=te[$.id];J===void 0&&(J={},te[$.id]=J);let O=J[re];return O===void 0&&(O=p(d()),J[re]=O),O}function p(z){let $=[],V=[],re=[];for(let te=0;te<s;te++)$[te]=0,V[te]=0,re[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:V,attributeDivisors:re,object:z,attributes:{},index:null}}function f(z,$,V,re){let te=c.attributes,J=$.attributes,O=0,G=V.getAttributes();for(let X in G)if(G[X].location>=0){let B=te[X],ie=J[X];if(ie===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(ie=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(ie=z.instanceColor)),B===void 0||B.attribute!==ie||ie&&B.data!==ie.data)return!0;O++}return c.attributesNum!==O||c.index!==re}function L(z,$,V,re){let te={},J=$.attributes,O=0,G=V.getAttributes();for(let X in G)if(G[X].location>=0){let B=J[X];B===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));let ie={};ie.attribute=B,B&&B.data&&(ie.data=B.data),te[X]=ie,O++}c.attributes=te,c.attributesNum=O,c.index=re}function _(){let z=c.newAttributes;for(let $=0,V=z.length;$<V;$++)z[$]=0}function C(z){U(z,0)}function U(z,$){let V=c.newAttributes,re=c.enabledAttributes,te=c.attributeDivisors;V[z]=1,re[z]===0&&(n.enableVertexAttribArray(z),re[z]=1),te[z]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),te[z]=$)}function E(){let z=c.newAttributes,$=c.enabledAttributes;for(let V=0,re=$.length;V<re;V++)$[V]!==z[V]&&(n.disableVertexAttribArray(V),$[V]=0)}function D(z,$,V,re,te,J,O){O===!0?n.vertexAttribIPointer(z,$,V,te,J):n.vertexAttribPointer(z,$,V,re,te,J)}function W(z,$,V,re){if(i.isWebGL2===!1&&(z.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let te=re.attributes,J=V.getAttributes(),O=$.defaultAttributeValues;for(let G in J){let X=J[G];if(X.location>=0){let k=te[G];if(k===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(k=z.instanceColor)),k!==void 0){let B=k.normalized,ie=k.itemSize,se=t.get(k);if(se===void 0)continue;let oe=se.buffer,Me=se.type,Le=se.bytesPerElement,Fe=i.isWebGL2===!0&&(Me===n.INT||Me===n.UNSIGNED_INT||k.gpuType===Uu);if(k.isInterleavedBufferAttribute){let ut=k.data,Y=ut.stride,Xt=k.offset;if(ut.isInstancedInterleavedBuffer){for(let He=0;He<X.locationSize;He++)U(X.location+He,ut.meshPerAttribute);z.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let He=0;He<X.locationSize;He++)C(X.location+He);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let He=0;He<X.locationSize;He++)D(X.location+He,ie/X.locationSize,Me,B,Y*Le,(Xt+ie/X.locationSize*He)*Le,Fe)}else{if(k.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)U(X.location+ut,k.meshPerAttribute);z.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ut=0;ut<X.locationSize;ut++)C(X.location+ut);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ut=0;ut<X.locationSize;ut++)D(X.location+ut,ie/X.locationSize,Me,B,ie*Le,ie/X.locationSize*ut*Le,Fe)}}else if(O!==void 0){let B=O[G];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(X.location,B);break;case 3:n.vertexAttrib3fv(X.location,B);break;case 4:n.vertexAttrib4fv(X.location,B);break;default:n.vertexAttrib1fv(X.location,B)}}}}E()}function S(){le();for(let z in a){let $=a[z];for(let V in $){let re=$[V];for(let te in re)v(re[te].object),delete re[te];delete $[V]}delete a[z]}}function N(z){if(a[z.id]===void 0)return;let $=a[z.id];for(let V in $){let re=$[V];for(let te in re)v(re[te].object),delete re[te];delete $[V]}delete a[z.id]}function ee(z){for(let $ in a){let V=a[$];if(V[z.id]===void 0)continue;let re=V[z.id];for(let te in re)v(re[te].object),delete re[te];delete V[z.id]}}function le(){pe(),u=!0,c!==l&&(c=l,g(c.object))}function pe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:le,resetDefaultState:pe,dispose:S,releaseStatesOfGeometry:N,releaseStatesOfProgram:ee,initAttributes:_,enableAttribute:C,disableUnusedAttributes:E}}function eg(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let g,v;if(s)g=n,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{g.multiDrawArraysWEBGL(r,u,0,h,0,d);let v=0;for(let b=0;b<d;b++)v+=h[b];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,C=o||e.has("OES_texture_float"),U=_&&C,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:b,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:L,vertexTextures:_,floatFragmentTextures:C,floatVertexTextures:U,maxSamples:E}}function ng(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Qn,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let g=h.length!==0||d||i!==0||s;return s=d,i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){let v=h.clippingPlanes,b=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{let L=r?0:i,_=L*4,C=f.clippingState||null;l.value=C,C=u(v,d,_,g);for(let U=0;U!==_;++U)C[U]=t[U];f.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,g,v){let b=h!==null?h.length:0,p=null;if(b!==0){if(p=l.value,v!==!0||p===null){let f=g+b*4,L=d.matrixWorldInverse;a.getNormalMatrix(L),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,C=g;_!==b;++_,C+=4)o.copy(h[_]).applyMatrix4(L,a),o.normal.toArray(p,C),p[C+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function ig(n){let e=new WeakMap;function t(o,a){return a===Wo?o.mapping=ws:a===qo&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wo||a===qo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ko(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Rs=class extends Sa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ys=4,Zc=[.125,.215,.35,.446,.526,.582],Bi=20,Io=new Rs,Kc=new it,No=null,Do=0,Uo=0,Fi=(1+Math.sqrt(5))/2,gs=1/Fi,Qc=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Fi,gs),new H(0,Fi,-gs),new H(gs,0,Fi),new H(-gs,0,Fi),new H(Fi,gs,0),new H(-Fi,gs,0)],Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){No=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Do,Uo),e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ur,format:bn,colorSpace:ni,depthBuffer:!1},s=eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,e,t)}return s}_compileMaterial(e){let t=new on(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,i,s){let a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Kc),u.toneMapping=_i,u.autoClear=!1;let g=new Rn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new on(new fr,g),b=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,b=!0):(g.color.copy(Kc),b=!0);for(let f=0;f<6;f++){let L=f%3;L===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):L===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;sa(s,L*_,f>2?_:0,_,_),u.setRenderTarget(s),b&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ws||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Io)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qc[(s-1)%Qc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new on(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Bi-1),b=r/v,p=isFinite(r)?1+Math.floor(u*b):Bi;p>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bi}`);let f=[],L=0;for(let D=0;D<Bi;++D){let W=D/b,S=Math.exp(-W*W/2);f.push(S),D===0?L+=S:D<p&&(L+=2*S)}for(let D=0;D<f.length;D++)f[D]=f[D]/L;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;let C=this._sizeLods[s],U=3*C*(s>_-ys?s-_+ys:0),E=4*(this._cubeSize-C);sa(t,U,E,3*C,2*C),l.setRenderTarget(t),l.render(h,Io)}};function sg(n){let e=[],t=[],i=[],s=n,r=n-ys+1+Zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ys?l=Zc[o-n+ys-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,b=3,p=2,f=1,L=new Float32Array(b*v*g),_=new Float32Array(p*v*g),C=new Float32Array(f*v*g);for(let E=0;E<g;E++){let D=E%3*2/3-1,W=E>2?0:-1,S=[D,W,0,D+2/3,W,0,D+2/3,W+1,0,D,W,0,D+2/3,W+1,0,D,W+1,0];L.set(S,b*v*E),_.set(d,p*v*E);let N=[E,E,E,E,E,E];C.set(N,f*v*E)}let U=new wn;U.setAttribute("position",new Sn(L,b)),U.setAttribute("uv",new Sn(_,p)),U.setAttribute("faceIndex",new Sn(C,f)),e.push(U),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eu(n,e,t){let i=new ii(n,e,t);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function rg(n,e,t){let i=new Float32Array(Bi),s=new H(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function tu(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function nu(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function ag(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wo||l===qo,u=l===ws||l===Es;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ea(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Ea(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function og(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lg(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let b=d.morphAttributes[v];for(let p=0,f=b.length;p<f;p++)e.remove(b[p])}d.removeEventListener("dispose",o),delete s[d.id];let g=r.get(d);g&&(e.remove(g),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let v in d)e.update(d[v],n.ARRAY_BUFFER);let g=h.morphAttributes;for(let v in g){let b=g[v];for(let p=0,f=b.length;p<f;p++)e.update(b[p],n.ARRAY_BUFFER)}}function c(h){let d=[],g=h.index,v=h.attributes.position,b=0;if(g!==null){let L=g.array;b=g.version;for(let _=0,C=L.length;_<C;_+=3){let U=L[_+0],E=L[_+1],D=L[_+2];d.push(U,E,E,D,D,U)}}else if(v!==void 0){let L=v.array;b=v.version;for(let _=0,C=L.length/3-1;_<C;_+=3){let U=_+0,E=_+1,D=_+2;d.push(U,E,E,D,D,U)}}else return;let p=new(Wu(d)?Ma:ba)(d,1);p.version=b;let f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){let d=r.get(h);if(d){let g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function cg(n,e,t,i){let s=i.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function u(g,v){n.drawElements(r,v,a,g*l),t.update(v,r,1)}function h(g,v,b){if(b===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,v,a,g*l,b),t.update(v,r,b)}function d(g,v,b){if(b===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<b;f++)this.render(g[f]/l,v[f]);else{p.multiDrawElementsWEBGL(r,v,0,a,g,0,b);let f=0;for(let L=0;L<b;L++)f+=v[L];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function ug(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hg(n,e){return n[0]-e[0]}function dg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0,b=r.get(u);if(b===void 0||b.count!==v){let z=function(){le.dispose(),r.delete(u),u.removeEventListener("dispose",z)};b!==void 0&&b.texture.dispose();let L=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],D=u.morphAttributes.color||[],W=0;L===!0&&(W=1),_===!0&&(W=2),C===!0&&(W=3);let S=u.attributes.position.count*W,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let ee=new Float32Array(S*N*4*v),le=new va(ee,S,N,v);le.type=ei,le.needsUpdate=!0;let pe=W*4;for(let $=0;$<v;$++){let V=U[$],re=E[$],te=D[$],J=S*N*4*$;for(let O=0;O<V.count;O++){let G=O*pe;L===!0&&(o.fromBufferAttribute(V,O),ee[J+G+0]=o.x,ee[J+G+1]=o.y,ee[J+G+2]=o.z,ee[J+G+3]=0),_===!0&&(o.fromBufferAttribute(re,O),ee[J+G+4]=o.x,ee[J+G+5]=o.y,ee[J+G+6]=o.z,ee[J+G+7]=0),C===!0&&(o.fromBufferAttribute(te,O),ee[J+G+8]=o.x,ee[J+G+9]=o.y,ee[J+G+10]=o.z,ee[J+G+11]=te.itemSize===4?o.w:1)}}b={count:v,texture:le,size:new ht(S,N)},r.set(u,b),u.addEventListener("dispose",z)}let p=0;for(let L=0;L<d.length;L++)p+=d[L];let f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",b.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",b.size)}else{let g=d===void 0?0:d.length,v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let _=0;_<g;_++)v[_]=[_,0];i[u.id]=v}for(let _=0;_<g;_++){let C=v[_];C[0]=_,C[1]=d[_]}v.sort(dg);for(let _=0;_<8;_++)_<g&&v[_][1]?(a[_][0]=v[_][0],a[_][1]=v[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(hg);let b=u.morphAttributes.position,p=u.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let C=a[_],U=C[0],E=C[1];U!==Number.MAX_SAFE_INTEGER&&E?(b&&u.getAttribute("morphTarget"+_)!==b[U]&&u.setAttribute("morphTarget"+_,b[U]),p&&u.getAttribute("morphNormal"+_)!==p[U]&&u.setAttribute("morphNormal"+_,p[U]),s[_]=E,f+=E):(b&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}let L=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",L),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function pg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ta=class extends _n{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Hi,u!==Hi&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hi&&(i=mi),i===void 0&&u===Ts&&(i=zi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yu=new _n,ju=new Ta(1,1);ju.compareFunction=Gu;var Ju=new va,Zu=new Jo,Ku=new wa,iu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function Us(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function _g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function vg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function yg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ou.set(i),n.uniformMatrix2fv(this.addr,!1,ou),Vt(t,i)}}function xg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;au.set(i),n.uniformMatrix3fv(this.addr,!1,au),Vt(t,i)}}function bg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),Vt(t,i)}}function Mg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Eg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Tg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ag(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Cg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Lg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?ju:Yu;t.setTexture2D(e||r,s)}function Pg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zu,s)}function Ig(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ku,s)}function Ng(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ju,s)}function Dg(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return yg;case 35675:return xg;case 35676:return bg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return wg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}function Ug(n,e){n.uniform1fv(this.addr,e)}function Og(n,e){let t=Us(e,this.size,2);n.uniform2fv(this.addr,t)}function Fg(n,e){let t=Us(e,this.size,3);n.uniform3fv(this.addr,t)}function kg(n,e){let t=Us(e,this.size,4);n.uniform4fv(this.addr,t)}function Bg(n,e){let t=Us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zg(n,e){let t=Us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hg(n,e){let t=Us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vg(n,e){n.uniform1iv(this.addr,e)}function Gg(n,e){n.uniform2iv(this.addr,e)}function Wg(n,e){n.uniform3iv(this.addr,e)}function qg(n,e){n.uniform4iv(this.addr,e)}function Xg(n,e){n.uniform1uiv(this.addr,e)}function $g(n,e){n.uniform2uiv(this.addr,e)}function Yg(n,e){n.uniform3uiv(this.addr,e)}function jg(n,e){n.uniform4uiv(this.addr,e)}function Jg(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yu,r[o])}function Zg(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zu,r[o])}function Kg(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ku,r[o])}function Qg(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ju,r[o])}function e0(n){switch(n){case 5126:return Ug;case 35664:return Og;case 35665:return Fg;case 35666:return kg;case 35674:return Bg;case 35675:return zg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return qg;case 5125:return Xg;case 36294:return $g;case 36295:return Yg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Qg}}var Qo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}},el=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}},tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Oo=/(\w+)(\])?(\[|\.)?/g;function lu(n,e){n.seq.push(e),n.map[e.id]=e}function t0(n,e,t){let i=n.name,s=i.length;for(Oo.lastIndex=0;;){let r=Oo.exec(i),o=Oo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lu(t,c===void 0?new Qo(a,n,e):new el(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new tl(a),lu(t,h)),t=h}}}var Ss=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);t0(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function cu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var n0=37297,i0=0;function s0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function r0(n){let e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(n),i;switch(e===t?i="":e===fa&&t===da?i="LinearDisplayP3ToLinearSRGB":e===da&&t===fa&&(i="LinearSRGBToLinearDisplayP3"),n){case ni:case Va:return[i,"LinearTransferOETF"];case Ut:case Sl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+s0(n.getShaderSource(e),o)}else return s}function a0(n,e){let t=r0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function o0(n,e){let t;switch(e){case cd:t="Linear";break;case ud:t="Reinhard";break;case hd:t="OptimizedCineon";break;case dd:t="ACESFilmic";break;case pd:t="AgX";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function c0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function u0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xs(n){return n!==""}function hu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(n){return n.replace(d0,p0)}var f0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function p0(n,e){let t=rt[e];if(t===void 0){let i=f0.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}var m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(n){return n.replace(m0,g0)}function g0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function v0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Es:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function x0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case za:e="ENVMAP_BLENDING_MULTIPLY";break;case od:e="ENVMAP_BLENDING_MIX";break;case ld:e="ENVMAP_BLENDING_ADD";break}return e}function b0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function M0(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_0(t),c=v0(t),u=y0(t),h=x0(t),d=b0(t),g=t.isWebGL2?"":l0(t),v=c0(t),b=u0(r),p=s.createProgram(),f,L,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(xs).join(`
`),f.length>0&&(f+=`
`),L=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(xs).join(`
`),L.length>0&&(L+=`
`)):(f=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),L=[g,pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?rt.tonemapping_pars_fragment:"",t.toneMapping!==_i?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),o=nl(o),o=hu(o,t),o=du(o,t),a=nl(a),a=hu(a,t),a=du(a,t),o=fu(o),a=fu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);let C=_+f+o,U=_+L+a,E=cu(s,s.VERTEX_SHADER,C),D=cu(s,s.FRAGMENT_SHADER,U);s.attachShader(p,E),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function W(le){if(n.debug.checkShaderErrors){let pe=s.getProgramInfoLog(p).trim(),z=s.getShaderInfoLog(E).trim(),$=s.getShaderInfoLog(D).trim(),V=!0,re=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,D);else{let te=uu(s,E,"vertex"),J=uu(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+pe+`
`+te+`
`+J)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(z===""||$==="")&&(re=!1);re&&(le.diagnostics={runnable:V,programLog:pe,vertexShader:{log:z,prefix:f},fragmentShader:{log:$,prefix:L}})}s.deleteShader(E),s.deleteShader(D),S=new Ss(s,p),N=h0(s,p)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let N;this.getAttributes=function(){return N===void 0&&W(this),N};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=s.getProgramParameter(p,n0)),ee},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=D,this}var S0=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sl(e),t.set(e,i)),i}},sl=class{constructor(e){this.id=S0++,this.code=e,this.usedTimes=0}};function w0(n,e,t,i,s,r,o){let a=new xa,l=new il,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return S===0?"uv":`uv${S}`}function p(S,N,ee,le,pe){let z=le.fog,$=pe.geometry,V=S.isMeshStandardMaterial?le.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),te=re&&re.mapping===Ha?re.image.height:null,J=v[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let O=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,G=O!==void 0?O.length:0,X=0;$.morphAttributes.position!==void 0&&(X=1),$.morphAttributes.normal!==void 0&&(X=2),$.morphAttributes.color!==void 0&&(X=3);let k,B,ie,se;if(J){let Gt=Dn[J];k=Gt.vertexShader,B=Gt.fragmentShader}else k=S.vertexShader,B=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);let oe=n.getRenderTarget(),Me=pe.isInstancedMesh===!0,Le=pe.isBatchedMesh===!0,Fe=!!S.map,ut=!!S.matcap,Y=!!re,Xt=!!S.aoMap,He=!!S.lightMap,Je=!!S.bumpMap,Pe=!!S.normalMap,Tt=!!S.displacementMap,tt=!!S.emissiveMap,I=!!S.metalnessMap,T=!!S.roughnessMap,Z=S.anisotropy>0,de=S.clearcoat>0,ue=S.iridescence>0,fe=S.sheen>0,De=S.transmission>0,xe=Z&&!!S.anisotropyMap,Ae=de&&!!S.clearcoatMap,We=de&&!!S.clearcoatNormalMap,nt=de&&!!S.clearcoatRoughnessMap,he=ue&&!!S.iridescenceMap,_t=ue&&!!S.iridescenceThicknessMap,at=fe&&!!S.sheenColorMap,Ye=fe&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Ce=!!S.specularColorMap,Qe=!!S.specularIntensityMap,mt=De&&!!S.transmissionMap,Ct=De&&!!S.thicknessMap,st=!!S.gradientMap,me=!!S.alphaMap,F=S.alphaTest>0,ve=!!S.alphaHash,ye=!!S.extensions,$e=!!$.attributes.uv1,Ve=!!$.attributes.uv2,yt=!!$.attributes.uv3,Mt=_i;return S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Mt=n.toneMapping),{isWebGL2:u,shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:B,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Le,instancing:Me,instancingColor:Me&&pe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ni,map:Fe,matcap:ut,envMap:Y,envMapMode:Y&&re.mapping,envMapCubeUVHeight:te,aoMap:Xt,lightMap:He,bumpMap:Je,normalMap:Pe,displacementMap:d&&Tt,emissiveMap:tt,normalMapObjectSpace:Pe&&S.normalMapType===Cd,normalMapTangentSpace:Pe&&S.normalMapType===Ml,metalnessMap:I,roughnessMap:T,anisotropy:Z,anisotropyMap:xe,clearcoat:de,clearcoatMap:Ae,clearcoatNormalMap:We,clearcoatRoughnessMap:nt,iridescence:ue,iridescenceMap:he,iridescenceThicknessMap:_t,sheen:fe,sheenColorMap:at,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:Ce,specularIntensityMap:Qe,transmission:De,transmissionMap:mt,thicknessMap:Ct,gradientMap:st,opaque:S.transparent===!1&&S.blending===bs,alphaMap:me,alphaTest:F,alphaHash:ve,combine:S.combine,mapUv:Fe&&b(S.map.channel),aoMapUv:Xt&&b(S.aoMap.channel),lightMapUv:He&&b(S.lightMap.channel),bumpMapUv:Je&&b(S.bumpMap.channel),normalMapUv:Pe&&b(S.normalMap.channel),displacementMapUv:Tt&&b(S.displacementMap.channel),emissiveMapUv:tt&&b(S.emissiveMap.channel),metalnessMapUv:I&&b(S.metalnessMap.channel),roughnessMapUv:T&&b(S.roughnessMap.channel),anisotropyMapUv:xe&&b(S.anisotropyMap.channel),clearcoatMapUv:Ae&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:We&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:at&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&b(S.sheenRoughnessMap.channel),specularMapUv:ke&&b(S.specularMap.channel),specularColorMapUv:Ce&&b(S.specularColorMap.channel),specularIntensityMapUv:Qe&&b(S.specularIntensityMap.channel),transmissionMapUv:mt&&b(S.transmissionMap.channel),thicknessMapUv:Ct&&b(S.thicknessMap.channel),alphaMapUv:me&&b(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Pe||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ve,vertexUv3s:yt,pointsUvs:pe.isPoints===!0&&!!$.attributes.uv&&(Fe||me),fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:pe.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&wt.getTransfer(S.map.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ye&&S.extensions.derivatives===!0,extensionFragDepth:ye&&S.extensions.fragDepth===!0,extensionDrawBuffers:ye&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(let ee in S.defines)N.push(ee),N.push(S.defines[ee]);return S.isRawShaderMaterial===!1&&(L(N,S),_(N,S),N.push(n.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function L(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function _(S,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),N.anisotropy&&a.enable(17),N.alphaHash&&a.enable(18),N.batching&&a.enable(19),S.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function C(S){let N=v[S.type],ee;if(N){let le=Dn[N];ee=ff.clone(le.uniforms)}else ee=S.uniforms;return ee}function U(S,N){let ee;for(let le=0,pe=c.length;le<pe;le++){let z=c[le];if(z.cacheKey===N){ee=z,++ee.usedTimes;break}}return ee===void 0&&(ee=new M0(n,N,S,r),c.push(ee)),ee}function E(S){if(--S.usedTimes===0){let N=c.indexOf(S);c[N]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:C,acquireProgram:U,releaseProgram:E,releaseShaderCache:D,programs:c,dispose:W}}function E0(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function T0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,g,v,b,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:v,renderOrder:h.renderOrder,z:b,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=b,f.group=p),e++,f}function a(h,d,g,v,b,p){let f=o(h,d,g,v,b,p);g.transmission>0?i.push(f):g.transparent===!0?s.push(f):t.push(f)}function l(h,d,g,v,b,p){let f=o(h,d,g,v,b,p);g.transmission>0?i.unshift(f):g.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||T0),i.length>1&&i.sort(d||mu),s.length>1&&s.sort(d||mu)}function u(){for(let h=e,d=n.length;h<d;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function A0(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new gu,n.set(i,[o])):s>=r.length?(o=new gu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function C0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new it};break;case"SpotLight":t={position:new H,direction:new H,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function R0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var L0=0;function P0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function I0(n,e){let t=new C0,i=R0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new H);let r=new H,o=new ot,a=new ot;function l(u,h){let d=0,g=0,v=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let b=0,p=0,f=0,L=0,_=0,C=0,U=0,E=0,D=0,W=0,S=0;u.sort(P0);let N=h===!0?Math.PI:1;for(let le=0,pe=u.length;le<pe;le++){let z=u[le],$=z.color,V=z.intensity,re=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=$.r*V*N,g+=$.g*V*N,v+=$.b*V*N;else if(z.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(z.sh.coefficients[J],V);S++}else if(z.isDirectionalLight){let J=t.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity*N),z.castShadow){let O=z.shadow,G=i.get(z);G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,s.directionalShadow[b]=G,s.directionalShadowMap[b]=te,s.directionalShadowMatrix[b]=z.shadow.matrix,C++}s.directional[b]=J,b++}else if(z.isSpotLight){let J=t.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy($).multiplyScalar(V*N),J.distance=re,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,s.spot[f]=J;let O=z.shadow;if(z.map&&(s.spotLightMap[D]=z.map,D++,O.updateMatrices(z),z.castShadow&&W++),s.spotLightMatrix[f]=O.matrix,z.castShadow){let G=i.get(z);G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,s.spotShadow[f]=G,s.spotShadowMap[f]=te,E++}f++}else if(z.isRectAreaLight){let J=t.get(z);J.color.copy($).multiplyScalar(V),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),s.rectArea[L]=J,L++}else if(z.isPointLight){let J=t.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity*N),J.distance=z.distance,J.decay=z.decay,z.castShadow){let O=z.shadow,G=i.get(z);G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,s.pointShadow[p]=G,s.pointShadowMap[p]=te,s.pointShadowMatrix[p]=z.shadow.matrix,U++}s.point[p]=J,p++}else if(z.isHemisphereLight){let J=t.get(z);J.skyColor.copy(z.color).multiplyScalar(V*N),J.groundColor.copy(z.groundColor).multiplyScalar(V*N),s.hemi[_]=J,_++}}L>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=v;let ee=s.hash;(ee.directionalLength!==b||ee.pointLength!==p||ee.spotLength!==f||ee.rectAreaLength!==L||ee.hemiLength!==_||ee.numDirectionalShadows!==C||ee.numPointShadows!==U||ee.numSpotShadows!==E||ee.numSpotMaps!==D||ee.numLightProbes!==S)&&(s.directional.length=b,s.spot.length=f,s.rectArea.length=L,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=E+D-W,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=S,ee.directionalLength=b,ee.pointLength=p,ee.spotLength=f,ee.rectAreaLength=L,ee.hemiLength=_,ee.numDirectionalShadows=C,ee.numPointShadows=U,ee.numSpotShadows=E,ee.numSpotMaps=D,ee.numLightProbes=S,s.version=L0++)}function c(u,h){let d=0,g=0,v=0,b=0,p=0,f=h.matrixWorldInverse;for(let L=0,_=u.length;L<_;L++){let C=u[L];if(C.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),d++}else if(C.isSpotLight){let U=s.spot[v];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(f),U.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),v++}else if(C.isRectAreaLight){let U=s.rectArea[b];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(f),a.identity(),o.copy(C.matrixWorld),o.premultiply(f),a.extractRotation(o),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),b++}else if(C.isPointLight){let U=s.point[g];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(f),g++}else if(C.isHemisphereLight){let U=s.hemi[p];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function _u(n,e){let t=new I0(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function N0(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new _u(n,e),t.set(r,[l])):o>=a.length?(l=new _u(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var rl=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},al=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
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
}`;function O0(n,e,t){let i=new pr,s=new ht,r=new ht,o=new Et,a=new rl({depthPacking:Ad}),l=new al,c={},u=t.maxTextureSize,h={[Un]:un,[un]:Un,[gn]:gn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:D0,fragmentShader:U0}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let v=new wn;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new on(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let f=this.type;this.render=function(E,D,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let S=n.getRenderTarget(),N=n.getActiveCubeFace(),ee=n.getActiveMipmapLevel(),le=n.state;le.setBlending(gi),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let pe=f!==Kn&&this.type===Kn,z=f===Kn&&this.type!==Kn;for(let $=0,V=E.length;$<V;$++){let re=E[$],te=re.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);let J=te.getFrameExtents();if(s.multiply(J),r.copy(te.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,te.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,te.mapSize.y=r.y)),te.map===null||pe===!0||z===!0){let G=this.type!==Kn?{minFilter:Yt,magFilter:Yt}:{};te.map!==null&&te.map.dispose(),te.map=new ii(s.x,s.y,G),te.map.texture.name=re.name+".shadowMap",te.camera.updateProjectionMatrix()}n.setRenderTarget(te.map),n.clear();let O=te.getViewportCount();for(let G=0;G<O;G++){let X=te.getViewport(G);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),le.viewport(o),te.updateMatrices(re,G),i=te.getFrustum(),C(D,W,te.camera,re,this.type)}te.isPointLightShadow!==!0&&this.type===Kn&&L(te,W),te.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(S,N,ee)};function L(E,D){let W=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,W,d,b,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,W,g,b,null)}function _(E,D,W,S){let N=null,ee=W.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(ee!==void 0)N=ee;else if(N=W.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let le=N.uuid,pe=D.uuid,z=c[le];z===void 0&&(z={},c[le]=z);let $=z[pe];$===void 0&&($=N.clone(),z[pe]=$,D.addEventListener("dispose",U)),N=$}if(N.visible=D.visible,N.wireframe=D.wireframe,S===Kn?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:h[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,W.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let le=n.properties.get(N);le.light=W}return N}function C(E,D,W,S,N){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Kn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld);let pe=e.update(E),z=E.material;if(Array.isArray(z)){let $=pe.groups;for(let V=0,re=$.length;V<re;V++){let te=$[V],J=z[te.materialIndex];if(J&&J.visible){let O=_(E,J,S,N);E.onBeforeShadow(n,E,D,W,pe,O,te),n.renderBufferDirect(W,null,pe,O,E,te),E.onAfterShadow(n,E,D,W,pe,O,te)}}}else if(z.visible){let $=_(E,z,S,N);E.onBeforeShadow(n,E,D,W,pe,$,null),n.renderBufferDirect(W,null,pe,$,E,null),E.onAfterShadow(n,E,D,W,pe,$,null)}}let le=E.children;for(let pe=0,z=le.length;pe<z;pe++)C(le[pe],D,W,S,N)}function U(E){E.target.removeEventListener("dispose",U);for(let W in c){let S=c[W],N=E.target.uuid;N in S&&(S[N].dispose(),delete S[N])}}}function F0(n,e,t){let i=t.isWebGL2;function s(){let F=!1,ve=new Et,ye=null,$e=new Et(0,0,0,0);return{setMask:function(Ve){ye!==Ve&&!F&&(n.colorMask(Ve,Ve,Ve,Ve),ye=Ve)},setLocked:function(Ve){F=Ve},setClear:function(Ve,yt,Mt,vt,Gt){Gt===!0&&(Ve*=vt,yt*=vt,Mt*=vt),ve.set(Ve,yt,Mt,vt),$e.equals(ve)===!1&&(n.clearColor(Ve,yt,Mt,vt),$e.copy(ve))},reset:function(){F=!1,ye=null,$e.set(-1,0,0,0)}}}function r(){let F=!1,ve=null,ye=null,$e=null;return{setTest:function(Ve){Ve?Le(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Ve){ve!==Ve&&!F&&(n.depthMask(Ve),ve=Ve)},setFunc:function(Ve){if(ye!==Ve){switch(Ve){case ed:n.depthFunc(n.NEVER);break;case td:n.depthFunc(n.ALWAYS);break;case nd:n.depthFunc(n.LESS);break;case la:n.depthFunc(n.LEQUAL);break;case id:n.depthFunc(n.EQUAL);break;case sd:n.depthFunc(n.GEQUAL);break;case rd:n.depthFunc(n.GREATER);break;case ad:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Ve}},setLocked:function(Ve){F=Ve},setClear:function(Ve){$e!==Ve&&(n.clearDepth(Ve),$e=Ve)},reset:function(){F=!1,ve=null,ye=null,$e=null}}}function o(){let F=!1,ve=null,ye=null,$e=null,Ve=null,yt=null,Mt=null,vt=null,Gt=null;return{setTest:function(St){F||(St?Le(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(St){ve!==St&&!F&&(n.stencilMask(St),ve=St)},setFunc:function(St,$t,vn){(ye!==St||$e!==$t||Ve!==vn)&&(n.stencilFunc(St,$t,vn),ye=St,$e=$t,Ve=vn)},setOp:function(St,$t,vn){(yt!==St||Mt!==$t||vt!==vn)&&(n.stencilOp(St,$t,vn),yt=St,Mt=$t,vt=vn)},setLocked:function(St){F=St},setClear:function(St){Gt!==St&&(n.clearStencil(St),Gt=St)},reset:function(){F=!1,ve=null,ye=null,$e=null,Ve=null,yt=null,Mt=null,vt=null,Gt=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap,d={},g={},v=new WeakMap,b=[],p=null,f=!1,L=null,_=null,C=null,U=null,E=null,D=null,W=null,S=new it(0,0,0),N=0,ee=!1,le=null,pe=null,z=null,$=null,V=null,re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,J=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),te=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),te=J>=2);let G=null,X={},k=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),ie=new Et().fromArray(k),se=new Et().fromArray(B);function oe(F,ve,ye,$e){let Ve=new Uint8Array(4),yt=n.createTexture();n.bindTexture(F,yt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<ye;Mt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,$e,0,n.RGBA,n.UNSIGNED_BYTE,Ve):n.texImage2D(ve+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ve);return yt}let Me={};Me[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(n.DEPTH_TEST),l.setFunc(la),tt(!1),I(jl),Le(n.CULL_FACE),Pe(gi);function Le(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function Fe(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function ut(F,ve){return g[F]!==ve?(n.bindFramebuffer(F,ve),g[F]=ve,i&&(F===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function Y(F,ve){let ye=b,$e=!1;if(F)if(ye=v.get(ve),ye===void 0&&(ye=[],v.set(ve,ye)),F.isWebGLMultipleRenderTargets){let Ve=F.texture;if(ye.length!==Ve.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Mt=Ve.length;yt<Mt;yt++)ye[yt]=n.COLOR_ATTACHMENT0+yt;ye.length=Ve.length,$e=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,$e=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,$e=!0);$e&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Xt(F){return p!==F?(n.useProgram(F),p=F,!0):!1}let He={[ki]:n.FUNC_ADD,[Bh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};if(i)He[Ql]=n.MIN,He[ec]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(He[Ql]=F.MIN_EXT,He[ec]=F.MAX_EXT)}let Je={[Hh]:n.ZERO,[Vh]:n.ONE,[Gh]:n.SRC_COLOR,[Vo]:n.SRC_ALPHA,[jh]:n.SRC_ALPHA_SATURATE,[$h]:n.DST_COLOR,[qh]:n.DST_ALPHA,[Wh]:n.ONE_MINUS_SRC_COLOR,[Go]:n.ONE_MINUS_SRC_ALPHA,[Yh]:n.ONE_MINUS_DST_COLOR,[Xh]:n.ONE_MINUS_DST_ALPHA,[Jh]:n.CONSTANT_COLOR,[Zh]:n.ONE_MINUS_CONSTANT_COLOR,[Kh]:n.CONSTANT_ALPHA,[Qh]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(F,ve,ye,$e,Ve,yt,Mt,vt,Gt,St){if(F===gi){f===!0&&(Fe(n.BLEND),f=!1);return}if(f===!1&&(Le(n.BLEND),f=!0),F!==kh){if(F!==L||St!==ee){if((_!==ki||E!==ki)&&(n.blendEquation(n.FUNC_ADD),_=ki,E=ki),St)switch(F){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jl:n.blendFunc(n.ONE,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}C=null,U=null,D=null,W=null,S.set(0,0,0),N=0,L=F,ee=St}return}Ve=Ve||ve,yt=yt||ye,Mt=Mt||$e,(ve!==_||Ve!==E)&&(n.blendEquationSeparate(He[ve],He[Ve]),_=ve,E=Ve),(ye!==C||$e!==U||yt!==D||Mt!==W)&&(n.blendFuncSeparate(Je[ye],Je[$e],Je[yt],Je[Mt]),C=ye,U=$e,D=yt,W=Mt),(vt.equals(S)===!1||Gt!==N)&&(n.blendColor(vt.r,vt.g,vt.b,Gt),S.copy(vt),N=Gt),L=F,ee=!1}function Tt(F,ve){F.side===gn?Fe(n.CULL_FACE):Le(n.CULL_FACE);let ye=F.side===un;ve&&(ye=!ye),tt(ye),F.blending===bs&&F.transparent===!1?Pe(gi):Pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let $e=F.stencilWrite;c.setTest($e),$e&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Z(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Le(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){le!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),le=F)}function I(F){F!==Uh?(Le(n.CULL_FACE),F!==pe&&(F===jl?n.cullFace(n.BACK):F===Oh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),pe=F}function T(F){F!==z&&(te&&n.lineWidth(F),z=F)}function Z(F,ve,ye){F?(Le(n.POLYGON_OFFSET_FILL),($!==ve||V!==ye)&&(n.polygonOffset(ve,ye),$=ve,V=ye)):Fe(n.POLYGON_OFFSET_FILL)}function de(F){F?Le(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function ue(F){F===void 0&&(F=n.TEXTURE0+re-1),G!==F&&(n.activeTexture(F),G=F)}function fe(F,ve,ye){ye===void 0&&(G===null?ye=n.TEXTURE0+re-1:ye=G);let $e=X[ye];$e===void 0&&($e={type:void 0,texture:void 0},X[ye]=$e),($e.type!==F||$e.texture!==ve)&&(G!==ye&&(n.activeTexture(ye),G=ye),n.bindTexture(F,ve||Me[F]),$e.type=F,$e.texture=ve)}function De(){let F=X[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(F){ie.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ie.copy(F))}function mt(F){se.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),se.copy(F))}function Ct(F,ve){let ye=h.get(ve);ye===void 0&&(ye=new WeakMap,h.set(ve,ye));let $e=ye.get(F);$e===void 0&&($e=n.getUniformBlockIndex(ve,F.name),ye.set(F,$e))}function st(F,ve){let $e=h.get(ve).get(F);u.get(ve)!==$e&&(n.uniformBlockBinding(ve,$e,F.__bindingPointIndex),u.set(ve,$e))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},G=null,X={},g={},v=new WeakMap,b=[],p=null,f=!1,L=null,_=null,C=null,U=null,E=null,D=null,W=null,S=new it(0,0,0),N=0,ee=!1,le=null,pe=null,z=null,$=null,V=null,ie.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Fe,bindFramebuffer:ut,drawBuffers:Y,useProgram:Xt,setBlending:Pe,setMaterial:Tt,setFlipSided:tt,setCullFace:I,setLineWidth:T,setPolygonOffset:Z,setScissorTest:de,activeTexture:ue,bindTexture:fe,unbindTexture:De,compressedTexImage2D:xe,compressedTexImage3D:Ae,texImage2D:ke,texImage3D:Ce,updateUBOMapping:Ct,uniformBlockBinding:st,texStorage2D:at,texStorage3D:Ye,texSubImage2D:We,texSubImage3D:nt,compressedTexSubImage2D:he,compressedTexSubImage3D:_t,scissor:Qe,viewport:mt,reset:me}}function k0(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return g?new OffscreenCanvas(I,T):hr("canvas")}function b(I,T,Z,de){let ue=1;if((I.width>de||I.height>de)&&(ue=de/Math.max(I.width,I.height)),ue<1||T===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let fe=T?ma:Math.floor,De=fe(ue*I.width),xe=fe(ue*I.height);h===void 0&&(h=v(De,xe));let Ae=Z?v(De,xe):h;return Ae.width=De,Ae.height=xe,Ae.getContext("2d").drawImage(I,0,0,De,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+De+"x"+xe+")."),Ae}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function p(I){return Yo(I.width)&&Yo(I.height)}function f(I){return a?!1:I.wrapS!==Qt||I.wrapT!==Qt||I.minFilter!==Yt&&I.minFilter!==rn}function L(I,T){return I.generateMipmaps&&T&&I.minFilter!==Yt&&I.minFilter!==rn}function _(I){n.generateMipmap(I)}function C(I,T,Z,de,ue=!1){if(a===!1)return T;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=T;if(T===n.RED&&(Z===n.FLOAT&&(fe=n.R32F),Z===n.HALF_FLOAT&&(fe=n.R16F),Z===n.UNSIGNED_BYTE&&(fe=n.R8)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.R8UI),Z===n.UNSIGNED_SHORT&&(fe=n.R16UI),Z===n.UNSIGNED_INT&&(fe=n.R32UI),Z===n.BYTE&&(fe=n.R8I),Z===n.SHORT&&(fe=n.R16I),Z===n.INT&&(fe=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(fe=n.RG32F),Z===n.HALF_FLOAT&&(fe=n.RG16F),Z===n.UNSIGNED_BYTE&&(fe=n.RG8)),T===n.RGBA){let De=ue?ha:wt.getTransfer(de);Z===n.FLOAT&&(fe=n.RGBA32F),Z===n.HALF_FLOAT&&(fe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(fe=De===Lt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(I,T,Z){return L(I,Z)===!0||I.isFramebufferTexture&&I.minFilter!==Yt&&I.minFilter!==rn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){return I===Yt||I===nc||I===oo?n.NEAREST:n.LINEAR}function D(I){let T=I.target;T.removeEventListener("dispose",D),S(T),T.isVideoTexture&&u.delete(T)}function W(I){let T=I.target;T.removeEventListener("dispose",W),ee(T)}function S(I){let T=i.get(I);if(T.__webglInit===void 0)return;let Z=I.source,de=d.get(Z);if(de){let ue=de[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&N(I),Object.keys(de).length===0&&d.delete(Z)}i.remove(I)}function N(I){let T=i.get(I);n.deleteTexture(T.__webglTexture);let Z=I.source,de=d.get(Z);delete de[T.__cacheKey],o.memory.textures--}function ee(I){let T=I.texture,Z=i.get(I),de=i.get(T);if(de.__webglTexture!==void 0&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Z.__webglFramebuffer[ue]))for(let fe=0;fe<Z.__webglFramebuffer[ue].length;fe++)n.deleteFramebuffer(Z.__webglFramebuffer[ue][fe]);else n.deleteFramebuffer(Z.__webglFramebuffer[ue]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[ue])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ue=0;ue<Z.__webglFramebuffer.length;ue++)n.deleteFramebuffer(Z.__webglFramebuffer[ue]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ue=0;ue<Z.__webglColorRenderbuffer.length;ue++)Z.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[ue]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ue=0,fe=T.length;ue<fe;ue++){let De=i.get(T[ue]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(T[ue])}i.remove(T),i.remove(I)}let le=0;function pe(){le=0}function z(){let I=le;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),le+=1,I}function $(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function V(I,T){let Z=i.get(I);if(I.isVideoTexture&&Tt(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){let de=I.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Z,I,T);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function re(I,T){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){ie(Z,I,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function te(I,T){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){ie(Z,I,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function J(I,T){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){se(Z,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}let O={[yi]:n.REPEAT,[Qt]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},G={[Yt]:n.NEAREST,[nc]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[gd]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},X={[Rd]:n.NEVER,[Ud]:n.ALWAYS,[Ld]:n.LESS,[Gu]:n.LEQUAL,[Pd]:n.EQUAL,[Dd]:n.GEQUAL,[Id]:n.GREATER,[Nd]:n.NOTEQUAL};function k(I,T,Z){if(Z?(n.texParameteri(I,n.TEXTURE_WRAP_S,O[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,O[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,O[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,G[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,G[T.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==Qt||T.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,E(T.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Yt&&T.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,X[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Yt||T.minFilter!==oo&&T.minFilter!==xi||T.type===ei&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ur&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(I,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function B(I,T){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",D));let de=T.source,ue=d.get(de);ue===void 0&&(ue={},d.set(de,ue));let fe=$(T);if(fe!==I.__cacheKey){ue[fe]===void 0&&(ue[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ue[fe].usedTimes++;let De=ue[I.__cacheKey];De!==void 0&&(ue[I.__cacheKey].usedTimes--,De.usedTimes===0&&N(T)),I.__cacheKey=fe,I.__webglTexture=ue[fe].texture}return Z}function ie(I,T,Z){let de=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=n.TEXTURE_3D);let ue=B(I,T),fe=T.source;t.bindTexture(de,I.__webglTexture,n.TEXTURE0+Z);let De=i.get(fe);if(fe.version!==De.__version||ue===!0){t.activeTexture(n.TEXTURE0+Z);let xe=wt.getPrimaries(wt.workingColorSpace),Ae=T.colorSpace===Mn?null:wt.getPrimaries(T.colorSpace),We=T.colorSpace===Mn||xe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let nt=f(T)&&p(T.image)===!1,he=b(T.image,nt,!1,s.maxTextureSize);he=tt(T,he);let _t=p(he)||a,at=r.convert(T.format,T.colorSpace),Ye=r.convert(T.type),ke=C(T.internalFormat,at,Ye,T.colorSpace,T.isVideoTexture);k(de,T,_t);let Ce,Qe=T.mipmaps,mt=a&&T.isVideoTexture!==!0&&ke!==Hu,Ct=De.__version===void 0||ue===!0,st=U(T,he,_t);if(T.isDepthTexture)ke=n.DEPTH_COMPONENT,a?T.type===ei?ke=n.DEPTH_COMPONENT32F:T.type===mi?ke=n.DEPTH_COMPONENT24:T.type===zi?ke=n.DEPTH24_STENCIL8:ke=n.DEPTH_COMPONENT16:T.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Hi&&ke===n.DEPTH_COMPONENT&&T.type!==bl&&T.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=mi,Ye=r.convert(T.type)),T.format===Ts&&ke===n.DEPTH_COMPONENT&&(ke=n.DEPTH_STENCIL,T.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=zi,Ye=r.convert(T.type))),Ct&&(mt?t.texStorage2D(n.TEXTURE_2D,1,ke,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ke,he.width,he.height,0,at,Ye,null));else if(T.isDataTexture)if(Qe.length>0&&_t){mt&&Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,Qe[0].width,Qe[0].height);for(let me=0,F=Qe.length;me<F;me++)Ce=Qe[me],mt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,at,Ye,Ce.data):t.texImage2D(n.TEXTURE_2D,me,ke,Ce.width,Ce.height,0,at,Ye,Ce.data);T.generateMipmaps=!1}else mt?(Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,he.width,he.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,at,Ye,he.data)):t.texImage2D(n.TEXTURE_2D,0,ke,he.width,he.height,0,at,Ye,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){mt&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ke,Qe[0].width,Qe[0].height,he.depth);for(let me=0,F=Qe.length;me<F;me++)Ce=Qe[me],T.format!==bn?at!==null?mt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,he.depth,at,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,ke,Ce.width,Ce.height,he.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,he.depth,at,Ye,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,ke,Ce.width,Ce.height,he.depth,0,at,Ye,Ce.data)}else{mt&&Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,Qe[0].width,Qe[0].height);for(let me=0,F=Qe.length;me<F;me++)Ce=Qe[me],T.format!==bn?at!==null?mt?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,at,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,me,ke,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,at,Ye,Ce.data):t.texImage2D(n.TEXTURE_2D,me,ke,Ce.width,Ce.height,0,at,Ye,Ce.data)}else if(T.isDataArrayTexture)mt?(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ke,he.width,he.height,he.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,at,Ye,he.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,he.width,he.height,he.depth,0,at,Ye,he.data);else if(T.isData3DTexture)mt?(Ct&&t.texStorage3D(n.TEXTURE_3D,st,ke,he.width,he.height,he.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,at,Ye,he.data)):t.texImage3D(n.TEXTURE_3D,0,ke,he.width,he.height,he.depth,0,at,Ye,he.data);else if(T.isFramebufferTexture){if(Ct)if(mt)t.texStorage2D(n.TEXTURE_2D,st,ke,he.width,he.height);else{let me=he.width,F=he.height;for(let ve=0;ve<st;ve++)t.texImage2D(n.TEXTURE_2D,ve,ke,me,F,0,at,Ye,null),me>>=1,F>>=1}}else if(Qe.length>0&&_t){mt&&Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,Qe[0].width,Qe[0].height);for(let me=0,F=Qe.length;me<F;me++)Ce=Qe[me],mt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,at,Ye,Ce):t.texImage2D(n.TEXTURE_2D,me,ke,at,Ye,Ce);T.generateMipmaps=!1}else mt?(Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,he.width,he.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,at,Ye,he)):t.texImage2D(n.TEXTURE_2D,0,ke,at,Ye,he);L(T,_t)&&_(de),De.__version=fe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function se(I,T,Z){if(T.image.length!==6)return;let de=B(I,T),ue=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);let fe=i.get(ue);if(ue.version!==fe.__version||de===!0){t.activeTexture(n.TEXTURE0+Z);let De=wt.getPrimaries(wt.workingColorSpace),xe=T.colorSpace===Mn?null:wt.getPrimaries(T.colorSpace),Ae=T.colorSpace===Mn||De===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let We=T.isCompressedTexture||T.image[0].isCompressedTexture,nt=T.image[0]&&T.image[0].isDataTexture,he=[];for(let me=0;me<6;me++)!We&&!nt?he[me]=b(T.image[me],!1,!0,s.maxCubemapSize):he[me]=nt?T.image[me].image:T.image[me],he[me]=tt(T,he[me]);let _t=he[0],at=p(_t)||a,Ye=r.convert(T.format,T.colorSpace),ke=r.convert(T.type),Ce=C(T.internalFormat,Ye,ke,T.colorSpace),Qe=a&&T.isVideoTexture!==!0,mt=fe.__version===void 0||de===!0,Ct=U(T,_t,at);k(n.TEXTURE_CUBE_MAP,T,at);let st;if(We){Qe&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Ce,_t.width,_t.height);for(let me=0;me<6;me++){st=he[me].mipmaps;for(let F=0;F<st.length;F++){let ve=st[F];T.format!==bn?Ye!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,0,0,ve.width,ve.height,Ye,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,0,0,ve.width,ve.height,Ye,ke,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F,Ce,ve.width,ve.height,0,Ye,ke,ve.data)}}}else{st=T.mipmaps,Qe&&mt&&(st.length>0&&Ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Ce,he[0].width,he[0].height));for(let me=0;me<6;me++)if(nt){Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,he[me].width,he[me].height,Ye,ke,he[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ce,he[me].width,he[me].height,0,Ye,ke,he[me].data);for(let F=0;F<st.length;F++){let ye=st[F].image[me].image;Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,0,0,ye.width,ye.height,Ye,ke,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,Ce,ye.width,ye.height,0,Ye,ke,ye.data)}}else{Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ye,ke,he[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ce,Ye,ke,he[me]);for(let F=0;F<st.length;F++){let ve=st[F];Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,0,0,Ye,ke,ve.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,F+1,Ce,Ye,ke,ve.image[me])}}}L(T,at)&&_(n.TEXTURE_CUBE_MAP),fe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function oe(I,T,Z,de,ue,fe){let De=r.convert(Z.format,Z.colorSpace),xe=r.convert(Z.type),Ae=C(Z.internalFormat,De,xe,Z.colorSpace);if(!i.get(T).__hasExternalTextures){let nt=Math.max(1,T.width>>fe),he=Math.max(1,T.height>>fe);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,fe,Ae,nt,he,T.depth,0,De,xe,null):t.texImage2D(ue,fe,Ae,nt,he,0,De,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Pe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ue,i.get(Z).__webglTexture,0,Je(T)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,ue,i.get(Z).__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(I,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer&&!T.stencilBuffer){let de=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Pe(T)){let ue=T.depthTexture;ue&&ue.isDepthTexture&&(ue.type===ei?de=n.DEPTH_COMPONENT32F:ue.type===mi&&(de=n.DEPTH_COMPONENT24));let fe=Je(T);Pe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,de,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,de,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,de,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(T.depthBuffer&&T.stencilBuffer){let de=Je(T);Z&&Pe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,T.width,T.height):Pe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let de=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ue=0;ue<de.length;ue++){let fe=de[ue],De=r.convert(fe.format,fe.colorSpace),xe=r.convert(fe.type),Ae=C(fe.internalFormat,De,xe,fe.colorSpace),We=Je(T);Z&&Pe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Ae,T.width,T.height):Pe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,Ae,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);let de=i.get(T.depthTexture).__webglTexture,ue=Je(T);if(T.depthTexture.format===Hi)Pe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(T.depthTexture.format===Ts)Pe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Fe(I){let T=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Le(T.__webglFramebuffer,I)}else if(Z){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]=n.createRenderbuffer(),Me(T.__webglDepthbuffer[de],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Me(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(I,T,Z){let de=i.get(I);T!==void 0&&oe(de.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Fe(I)}function Y(I){let T=I.texture,Z=i.get(I),de=i.get(T);I.addEventListener("dispose",W),I.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=T.version,o.memory.textures++);let ue=I.isWebGLCubeRenderTarget===!0,fe=I.isWebGLMultipleRenderTargets===!0,De=p(I)||a;if(ue){Z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Z.__webglFramebuffer[xe][Ae]=n.createFramebuffer()}else Z.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)Z.__webglFramebuffer[xe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(fe)if(s.drawBuffers){let xe=I.texture;for(let Ae=0,We=xe.length;Ae<We;Ae++){let nt=i.get(xe[Ae]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Pe(I)===!1){let xe=fe?T:[T];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){let We=xe[Ae];Z.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);let nt=r.convert(We.format,We.colorSpace),he=r.convert(We.type),_t=C(We.internalFormat,nt,he,We.colorSpace,I.isXRRenderTarget===!0),at=Je(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,_t,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),k(n.TEXTURE_CUBE_MAP,T,De);for(let xe=0;xe<6;xe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)oe(Z.__webglFramebuffer[xe][Ae],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else oe(Z.__webglFramebuffer[xe],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);L(T,De)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){let xe=I.texture;for(let Ae=0,We=xe.length;Ae<We;Ae++){let nt=xe[Ae],he=i.get(nt);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),k(n.TEXTURE_2D,nt,De),oe(Z.__webglFramebuffer,I,nt,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),L(nt,De)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?xe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,de.__webglTexture),k(xe,T,De),a&&T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)oe(Z.__webglFramebuffer[Ae],I,T,n.COLOR_ATTACHMENT0,xe,Ae);else oe(Z.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,xe,0);L(T,De)&&_(xe),t.unbindTexture()}I.depthBuffer&&Fe(I)}function Xt(I){let T=p(I)||a,Z=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let de=0,ue=Z.length;de<ue;de++){let fe=Z[de];if(L(fe,T)){let De=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(fe).__webglTexture;t.bindTexture(De,xe),_(De),t.unbindTexture()}}}function He(I){if(a&&I.samples>0&&Pe(I)===!1){let T=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Z=I.width,de=I.height,ue=n.COLOR_BUFFER_BIT,fe=[],De=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(I),Ae=I.isWebGLMultipleRenderTargets===!0;if(Ae)for(let We=0;We<T.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let We=0;We<T.length;We++){fe.push(n.COLOR_ATTACHMENT0+We),I.depthBuffer&&fe.push(De);let nt=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(nt===!1&&(I.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[We]),nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),Ae){let he=i.get(T[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,Z,de,0,0,Z,de,ue,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let We=0;We<T.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,xe.__webglColorRenderbuffer[We]);let nt=i.get(T[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Je(I){return Math.min(s.maxSamples,I.samples)}function Pe(I){let T=i.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Tt(I){let T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function tt(I,T){let Z=I.colorSpace,de=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===$o||Z!==ni&&Z!==Mn&&(wt.getTransfer(Z)===Lt?a===!1?e.has("EXT_sRGB")===!0&&de===bn?(I.format=$o,I.minFilter=rn,I.generateMipmaps=!1):T=ga.sRGBToLinear(T):(de!==bn||ue!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}this.allocateTextureUnit=z,this.resetTextureUnits=pe,this.setTexture2D=V,this.setTexture2DArray=re,this.setTexture3D=te,this.setTextureCube=J,this.rebindTextures=ut,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Pe}function B0(n,e,t){let i=t.isWebGL2;function s(r,o=Mn){let a,l=wt.getTransfer(o);if(r===vi)return n.UNSIGNED_BYTE;if(r===Ou)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Fu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===_d)return n.BYTE;if(r===vd)return n.SHORT;if(r===bl)return n.UNSIGNED_SHORT;if(r===Uu)return n.INT;if(r===mi)return n.UNSIGNED_INT;if(r===ei)return n.FLOAT;if(r===ur)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yd)return n.ALPHA;if(r===bn)return n.RGBA;if(r===xd)return n.LUMINANCE;if(r===bd)return n.LUMINANCE_ALPHA;if(r===Hi)return n.DEPTH_COMPONENT;if(r===Ts)return n.DEPTH_STENCIL;if(r===$o)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Md)return n.RED;if(r===ku)return n.RED_INTEGER;if(r===Sd)return n.RG;if(r===Bu)return n.RG_INTEGER;if(r===zu)return n.RGBA_INTEGER;if(r===lo||r===co||r===uo||r===ho)if(l===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ic||r===sc||r===rc||r===ac)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ic)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===oc||r===lc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===oc)return l===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===lc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cc||r===uc||r===hc||r===dc||r===fc||r===pc||r===mc||r===gc||r===_c||r===vc||r===yc||r===xc||r===bc||r===Mc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===cc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_c)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fo||r===Sc||r===wc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fo)return l===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wd||r===Ec||r===Tc||r===Ac)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ec)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ac)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ol=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},cn=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,i),f=this._getHandJoint(c,b);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ll=class extends bi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,v=null,b=t.getContextAttributes(),p=null,f=null,L=[],_=[],C=new ht,U=null,E=new kt;E.layers.enable(1),E.viewport=new Et;let D=new kt;D.layers.enable(2),D.viewport=new Et;let W=[E,D],S=new ol;S.layers.enable(1),S.layers.enable(2);let N=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=L[k];return B===void 0&&(B=new cr,L[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=L[k];return B===void 0&&(B=new cr,L[k]=B),B.getGripSpace()},this.getHand=function(k){let B=L[k];return B===void 0&&(B=new cr,L[k]=B),B.getHandSpace()};function le(k){let B=_.indexOf(k.inputSource);if(B===-1)return;let ie=L[B];ie!==void 0&&(ie.update(k.inputSource,k.frame,c||o),ie.dispatchEvent({type:k.type,data:k.inputSource}))}function pe(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",pe),s.removeEventListener("inputsourceschange",z);for(let k=0;k<L.length;k++){let B=_[k];B!==null&&(_[k]=null,L[k].disconnect(B))}N=null,ee=null,e.setRenderTarget(p),g=null,d=null,h=null,s=null,f=null,X.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",pe),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let B={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,B),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new ii(g.framebufferWidth,g.framebufferHeight,{format:bn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let B=null,ie=null,se=null;b.depth&&(se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=b.stencil?Ts:Hi,ie=b.stencil?zi:mi);let oe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new ii(d.textureWidth,d.textureHeight,{format:bn,type:vi,depthTexture:new Ta(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let Me=e.properties.get(f);Me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),X.setContext(s),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(k){for(let B=0;B<k.removed.length;B++){let ie=k.removed[B],se=_.indexOf(ie);se>=0&&(_[se]=null,L[se].disconnect(ie))}for(let B=0;B<k.added.length;B++){let ie=k.added[B],se=_.indexOf(ie);if(se===-1){for(let Me=0;Me<L.length;Me++)if(Me>=_.length){_.push(ie),se=Me;break}else if(_[Me]===null){_[Me]=ie,se=Me;break}if(se===-1)break}let oe=L[se];oe&&oe.connect(ie)}}let $=new H,V=new H;function re(k,B,ie){$.setFromMatrixPosition(B.matrixWorld),V.setFromMatrixPosition(ie.matrixWorld);let se=$.distanceTo(V),oe=B.projectionMatrix.elements,Me=ie.projectionMatrix.elements,Le=oe[14]/(oe[10]-1),Fe=oe[14]/(oe[10]+1),ut=(oe[9]+1)/oe[5],Y=(oe[9]-1)/oe[5],Xt=(oe[8]-1)/oe[0],He=(Me[8]+1)/Me[0],Je=Le*Xt,Pe=Le*He,Tt=se/(-Xt+He),tt=Tt*-Xt;B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(tt),k.translateZ(Tt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let I=Le+Tt,T=Fe+Tt,Z=Je-tt,de=Pe+(se-tt),ue=ut*Fe/T*I,fe=Y*Fe/T*I;k.projectionMatrix.makePerspective(Z,de,ue,fe,I,T),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function te(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;S.near=D.near=E.near=k.near,S.far=D.far=E.far=k.far,(N!==S.near||ee!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,ee=S.far);let B=k.parent,ie=S.cameras;te(S,B);for(let se=0;se<ie.length;se++)te(ie[se],B);ie.length===2?re(S,E,D):S.projectionMatrix.copy(E.projectionMatrix),J(k,S,B)};function J(k,B,ie){ie===null?k.matrix.copy(B.matrixWorld):(k.matrix.copy(ie.matrixWorld),k.matrix.invert(),k.matrix.multiply(B.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=As*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=k)};let O=null;function G(k,B){if(u=B.getViewerPose(c||o),v=B,u!==null){let ie=u.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let se=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let oe=0;oe<ie.length;oe++){let Me=ie[oe],Le=null;if(g!==null)Le=g.getViewport(Me);else{let ut=h.getViewSubImage(d,Me);Le=ut.viewport,oe===0&&(e.setRenderTargetTextures(f,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(f))}let Fe=W[oe];Fe===void 0&&(Fe=new kt,Fe.layers.enable(oe),Fe.viewport=new Et,W[oe]=Fe),Fe.matrix.fromArray(Me.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Me.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Le.x,Le.y,Le.width,Le.height),oe===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Fe)}}for(let ie=0;ie<L.length;ie++){let se=_[ie],oe=L[ie];se!==null&&oe!==void 0&&oe.update(se,B,c||o)}O&&O(k,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),v=null}let X=new $u;X.setAnimationLoop(G),this.setAnimationLoop=function(k){O=k},this.dispose=function(){}}};function H0(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Xu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,L,_,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,C)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),b(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,L,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===un&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===un&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let L=e.get(f).envMap;if(L&&(p.envMap.value=L,p.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,L,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*L,p.scale.value=_*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,L){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=L.texture,p.transmissionSamplerSize.value.set(L.width,L.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function b(p,f){let L=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(L.matrixWorld),p.nearDistance.value=L.shadow.camera.near,p.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function V0(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(L,_){let C=_.program;i.uniformBlockBinding(L,C)}function c(L,_){let C=s[L.id];C===void 0&&(v(L),C=u(L),s[L.id]=C,L.addEventListener("dispose",p));let U=_.program;i.updateUBOMapping(L,U);let E=e.render.frame;r[L.id]!==E&&(d(L),r[L.id]=E)}function u(L){let _=h();L.__bindingPointIndex=_;let C=n.createBuffer(),U=L.__size,E=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,U,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,C),C}function h(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(L){let _=s[L.id],C=L.uniforms,U=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,D=C.length;E<D;E++){let W=Array.isArray(C[E])?C[E]:[C[E]];for(let S=0,N=W.length;S<N;S++){let ee=W[S];if(g(ee,E,S,U)===!0){let le=ee.__offset,pe=Array.isArray(ee.value)?ee.value:[ee.value],z=0;for(let $=0;$<pe.length;$++){let V=pe[$],re=b(V);typeof V=="number"||typeof V=="boolean"?(ee.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,le+z,ee.__data)):V.isMatrix3?(ee.__data[0]=V.elements[0],ee.__data[1]=V.elements[1],ee.__data[2]=V.elements[2],ee.__data[3]=0,ee.__data[4]=V.elements[3],ee.__data[5]=V.elements[4],ee.__data[6]=V.elements[5],ee.__data[7]=0,ee.__data[8]=V.elements[6],ee.__data[9]=V.elements[7],ee.__data[10]=V.elements[8],ee.__data[11]=0):(V.toArray(ee.__data,z),z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,ee.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(L,_,C,U){let E=L.value,D=_+"_"+C;if(U[D]===void 0)return typeof E=="number"||typeof E=="boolean"?U[D]=E:U[D]=E.clone(),!0;{let W=U[D];if(typeof E=="number"||typeof E=="boolean"){if(W!==E)return U[D]=E,!0}else if(W.equals(E)===!1)return W.copy(E),!0}return!1}function v(L){let _=L.uniforms,C=0,U=16;for(let D=0,W=_.length;D<W;D++){let S=Array.isArray(_[D])?_[D]:[_[D]];for(let N=0,ee=S.length;N<ee;N++){let le=S[N],pe=Array.isArray(le.value)?le.value:[le.value];for(let z=0,$=pe.length;z<$;z++){let V=pe[z],re=b(V),te=C%U;te!==0&&U-te<re.boundary&&(C+=U-te),le.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=re.storage}}}let E=C%U;return E>0&&(C+=U-E),L.__size=C,L.__cache={},this}function b(L){let _={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(_.boundary=4,_.storage=4):L.isVector2?(_.boundary=8,_.storage=8):L.isVector3||L.isColor?(_.boundary=16,_.storage=12):L.isVector4?(_.boundary=16,_.storage=16):L.isMatrix3?(_.boundary=48,_.storage=48):L.isMatrix4?(_.boundary=64,_.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),_}function p(L){let _=L.target;_.removeEventListener("dispose",p);let C=o.indexOf(_.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let L in s)n.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var gr=class{constructor(e={}){let{canvas:t=Jd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let g=new Uint32Array(4),v=new Int32Array(4),b=null,p=null,f=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;let _=this,C=!1,U=0,E=0,D=null,W=-1,S=null,N=new Et,ee=new Et,le=null,pe=new it(0),z=0,$=t.width,V=t.height,re=1,te=null,J=null,O=new Et(0,0,$,V),G=new Et(0,0,$,V),X=!1,k=new pr,B=!1,ie=!1,se=null,oe=new ot,Me=new ht,Le=new H,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return D===null?re:1}let Y=i;function Xt(R,q){for(let K=0;K<R.length;K++){let ne=R[K],j=t.getContext(ne,q);if(j!==null)return j}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ve,!1),Y===null){let q=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&q.shift(),Y=Xt(q,R),Y===null)throw Xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let He,Je,Pe,Tt,tt,I,T,Z,de,ue,fe,De,xe,Ae,We,nt,he,_t,at,Ye,ke,Ce,Qe,mt;function Ct(){He=new og(Y),Je=new tg(Y,He,e),He.init(Je),Ce=new B0(Y,He,Je),Pe=new F0(Y,He,Je),Tt=new ug(Y),tt=new E0,I=new k0(Y,He,Pe,tt,Je,Ce,Tt),T=new ig(_),Z=new ag(_),de=new vf(Y,Je),Qe=new Qm(Y,He,de,Je),ue=new lg(Y,de,Tt,Qe),fe=new pg(Y,ue,de,Tt),at=new fg(Y,Je,I),nt=new ng(tt),De=new w0(_,T,Z,He,Je,Qe,nt),xe=new H0(_,tt),Ae=new A0,We=new N0(He,Je),_t=new Km(_,T,Z,Pe,fe,d,l),he=new O0(_,fe,Je),mt=new V0(Y,Tt,Je,Pe),Ye=new eg(Y,He,Tt,Je),ke=new cg(Y,He,Tt,Je),Tt.programs=De.programs,_.capabilities=Je,_.extensions=He,_.properties=tt,_.renderLists=Ae,_.shadowMap=he,_.state=Pe,_.info=Tt}Ct();let st=new ll(_,Y);this.xr=st,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize($,V,!1))},this.getSize=function(R){return R.set($,V)},this.setSize=function(R,q,K=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,V=q,t.width=Math.floor(R*re),t.height=Math.floor(q*re),K===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set($*re,V*re).floor()},this.setDrawingBufferSize=function(R,q,K){$=R,V=q,re=K,t.width=Math.floor(R*K),t.height=Math.floor(q*K),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,q,K,ne){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,q,K,ne),Pe.viewport(N.copy(O).multiplyScalar(re).floor())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,q,K,ne){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,q,K,ne),Pe.scissor(ee.copy(G).multiplyScalar(re).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(R){Pe.setScissorTest(X=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(R=!0,q=!0,K=!0){let ne=0;if(R){let j=!1;if(D!==null){let Se=D.texture.format;j=Se===zu||Se===Bu||Se===ku}if(j){let Se=D.texture.type,we=Se===vi||Se===mi||Se===bl||Se===zi||Se===Ou||Se===Fu,Ue=_t.getClearColor(),qe=_t.getClearAlpha(),et=Ue.r,Ze=Ue.g,Ke=Ue.b;we?(g[0]=et,g[1]=Ze,g[2]=Ke,g[3]=qe,Y.clearBufferuiv(Y.COLOR,0,g)):(v[0]=et,v[1]=Ze,v[2]=Ke,v[3]=qe,Y.clearBufferiv(Y.COLOR,0,v))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT),K&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ae.dispose(),We.dispose(),tt.dispose(),T.dispose(),Z.dispose(),fe.dispose(),Qe.dispose(),mt.dispose(),De.dispose(),st.dispose(),st.removeEventListener("sessionstart",Gt),st.removeEventListener("sessionend",St),se&&(se.dispose(),se=null),$t.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=Tt.autoReset,q=he.enabled,K=he.autoUpdate,ne=he.needsUpdate,j=he.type;Ct(),Tt.autoReset=R,he.enabled=q,he.autoUpdate=K,he.needsUpdate=ne,he.type=j}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){let q=R.target;q.removeEventListener("dispose",ye),$e(q)}function $e(R){Ve(R),tt.remove(R)}function Ve(R){let q=tt.get(R).programs;q!==void 0&&(q.forEach(function(K){De.releaseProgram(K)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,K,ne,j,Se){q===null&&(q=Fe);let we=j.isMesh&&j.matrixWorld.determinant()<0,Ue=io(R,q,K,ne,j);Pe.setMaterial(ne,we);let qe=K.index,et=1;if(ne.wireframe===!0){if(qe=ue.getWireframeAttribute(K),qe===void 0)return;et=2}let Ze=K.drawRange,Ke=K.attributes.position,It=Ze.start*et,tn=(Ze.start+Ze.count)*et;Se!==null&&(It=Math.max(It,Se.start*et),tn=Math.min(tn,(Se.start+Se.count)*et)),qe!==null?(It=Math.max(It,0),tn=Math.min(tn,qe.count)):Ke!=null&&(It=Math.max(It,0),tn=Math.min(tn,Ke.count));let Ot=tn-It;if(Ot<0||Ot===1/0)return;Qe.setup(j,ne,Ue,K,qe);let yn,At=Ye;if(qe!==null&&(yn=de.get(qe),At=ke,At.setIndex(yn)),j.isMesh)ne.wireframe===!0?(Pe.setLineWidth(ne.wireframeLinewidth*ut()),At.setMode(Y.LINES)):At.setMode(Y.TRIANGLES);else if(j.isLine){let je=ne.linewidth;je===void 0&&(je=1),Pe.setLineWidth(je*ut()),j.isLineSegments?At.setMode(Y.LINES):j.isLineLoop?At.setMode(Y.LINE_LOOP):At.setMode(Y.LINE_STRIP)}else j.isPoints?At.setMode(Y.POINTS):j.isSprite&&At.setMode(Y.TRIANGLES);if(j.isBatchedMesh)At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)At.renderInstances(It,Ot,j.count);else if(K.isInstancedBufferGeometry){let je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Js=Math.min(K.instanceCount,je);At.renderInstances(It,Ot,Js)}else At.render(It,Ot)};function yt(R,q,K){R.transparent===!0&&R.side===gn&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,Qi(R,q,K),R.side=Un,R.needsUpdate=!0,Qi(R,q,K),R.side=gn):Qi(R,q,K)}this.compile=function(R,q,K=null){K===null&&(K=R),p=We.get(K),p.init(),L.push(p),K.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),R!==K&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(_._useLegacyLights);let ne=new Set;return R.traverse(function(j){let Se=j.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){let Ue=Se[we];yt(Ue,K,j),ne.add(Ue)}else yt(Se,K,j),ne.add(Se)}),L.pop(),p=null,ne},this.compileAsync=function(R,q,K=null){let ne=this.compile(R,q,K);return new Promise(j=>{function Se(){if(ne.forEach(function(we){tt.get(we).currentProgram.isReady()&&ne.delete(we)}),ne.size===0){j(R);return}setTimeout(Se,10)}He.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Mt=null;function vt(R){Mt&&Mt(R)}function Gt(){$t.stop()}function St(){$t.start()}let $t=new $u;$t.setAnimationLoop(vt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(R){Mt=R,st.setAnimationLoop(R),R===null?$t.stop():$t.start()},st.addEventListener("sessionstart",Gt),st.addEventListener("sessionend",St),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(q),q=st.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,q,D),p=We.get(R,L.length),p.init(),L.push(p),oe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k.setFromProjectionMatrix(oe),ie=this.localClippingEnabled,B=nt.init(this.clippingPlanes,ie),b=Ae.get(R,f.length),b.init(),f.push(b),vn(R,q,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(te,J),this.info.render.frame++,B===!0&&nt.beginShadows();let K=p.state.shadowsArray;if(he.render(K,R,q),B===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),_t.render(b,R),p.setupLights(_._useLegacyLights),q.isArrayCamera){let ne=q.cameras;for(let j=0,Se=ne.length;j<Se;j++){let we=ne[j];Pr(b,R,we,we.viewport)}}else Pr(b,R,q);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(_,R,q),Qe.resetDefaultState(),W=-1,S=null,L.pop(),L.length>0?p=L[L.length-1]:p=null,f.pop(),f.length>0?b=f[f.length-1]:b=null};function vn(R,q,K,ne){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||k.intersectsSprite(R)){ne&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);let we=fe.update(R),Ue=R.material;Ue.visible&&b.push(R,we,Ue,K,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||k.intersectsObject(R))){let we=fe.update(R),Ue=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Le.copy(we.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(Ue)){let qe=we.groups;for(let et=0,Ze=qe.length;et<Ze;et++){let Ke=qe[et],It=Ue[Ke.materialIndex];It&&It.visible&&b.push(R,we,It,K,Le.z,Ke)}}else Ue.visible&&b.push(R,we,Ue,K,Le.z,null)}}let Se=R.children;for(let we=0,Ue=Se.length;we<Ue;we++)vn(Se[we],q,K,ne)}function Pr(R,q,K,ne){let j=R.opaque,Se=R.transmissive,we=R.transparent;p.setupLightsView(K),B===!0&&nt.setGlobalState(_.clippingPlanes,K),Se.length>0&&no(j,Se,q,K),ne&&Pe.viewport(N.copy(ne)),j.length>0&&Ki(j,q,K),Se.length>0&&Ki(Se,q,K),we.length>0&&Ki(we,q,K),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function no(R,q,K,ne){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Se=Je.isWebGL2;se===null&&(se=new ii(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?ur:vi,minFilter:xi,samples:Se?4:0})),_.getDrawingBufferSize(Me),Se?se.setSize(Me.x,Me.y):se.setSize(ma(Me.x),ma(Me.y));let we=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(pe),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear();let Ue=_.toneMapping;_.toneMapping=_i,Ki(R,K,ne),I.updateMultisampleRenderTarget(se),I.updateRenderTargetMipmap(se);let qe=!1;for(let et=0,Ze=q.length;et<Ze;et++){let Ke=q[et],It=Ke.object,tn=Ke.geometry,Ot=Ke.material,yn=Ke.group;if(Ot.side===gn&&It.layers.test(ne.layers)){let At=Ot.side;Ot.side=un,Ot.needsUpdate=!0,Ys(It,K,ne,tn,Ot,yn),Ot.side=At,Ot.needsUpdate=!0,qe=!0}}qe===!0&&(I.updateMultisampleRenderTarget(se),I.updateRenderTargetMipmap(se)),_.setRenderTarget(we),_.setClearColor(pe,z),_.toneMapping=Ue}function Ki(R,q,K){let ne=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Se=R.length;j<Se;j++){let we=R[j],Ue=we.object,qe=we.geometry,et=ne===null?we.material:ne,Ze=we.group;Ue.layers.test(K.layers)&&Ys(Ue,q,K,qe,et,Ze)}}function Ys(R,q,K,ne,j,Se){R.onBeforeRender(_,q,K,ne,j,Se),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(_,q,K,ne,R,Se),j.transparent===!0&&j.side===gn&&j.forceSinglePass===!1?(j.side=un,j.needsUpdate=!0,_.renderBufferDirect(K,q,ne,j,R,Se),j.side=Un,j.needsUpdate=!0,_.renderBufferDirect(K,q,ne,j,R,Se),j.side=gn):_.renderBufferDirect(K,q,ne,j,R,Se),R.onAfterRender(_,q,K,ne,j,Se)}function Qi(R,q,K){q.isScene!==!0&&(q=Fe);let ne=tt.get(R),j=p.state.lights,Se=p.state.shadowsArray,we=j.state.version,Ue=De.getParameters(R,j.state,Se,q,K),qe=De.getProgramCacheKey(Ue),et=ne.programs;ne.environment=R.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(R.isMeshStandardMaterial?Z:T).get(R.envMap||ne.environment),et===void 0&&(R.addEventListener("dispose",ye),et=new Map,ne.programs=et);let Ze=et.get(qe);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===we)return Ir(R,Ue),Ze}else Ue.uniforms=De.getUniforms(R),R.onBuild(K,Ue,_),R.onBeforeCompile(Ue,_),Ze=De.acquireProgram(Ue,qe),et.set(qe,Ze),ne.uniforms=Ue.uniforms;let Ke=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=nt.uniform),Ir(R,Ue),ne.needsLights=ro(R),ne.lightsStateVersion=we,ne.needsLights&&(Ke.ambientLightColor.value=j.state.ambient,Ke.lightProbe.value=j.state.probe,Ke.directionalLights.value=j.state.directional,Ke.directionalLightShadows.value=j.state.directionalShadow,Ke.spotLights.value=j.state.spot,Ke.spotLightShadows.value=j.state.spotShadow,Ke.rectAreaLights.value=j.state.rectArea,Ke.ltc_1.value=j.state.rectAreaLTC1,Ke.ltc_2.value=j.state.rectAreaLTC2,Ke.pointLights.value=j.state.point,Ke.pointLightShadows.value=j.state.pointShadow,Ke.hemisphereLights.value=j.state.hemi,Ke.directionalShadowMap.value=j.state.directionalShadowMap,Ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ke.spotShadowMap.value=j.state.spotShadowMap,Ke.spotLightMatrix.value=j.state.spotLightMatrix,Ke.spotLightMap.value=j.state.spotLightMap,Ke.pointShadowMap.value=j.state.pointShadowMap,Ke.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=Ze,ne.uniformsList=null,Ze}function js(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=Ss.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ir(R,q){let K=tt.get(R);K.outputColorSpace=q.outputColorSpace,K.batching=q.batching,K.instancing=q.instancing,K.instancingColor=q.instancingColor,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function io(R,q,K,ne,j){q.isScene!==!0&&(q=Fe),I.resetTextureUnits();let Se=q.fog,we=ne.isMeshStandardMaterial?q.environment:null,Ue=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ni,qe=(ne.isMeshStandardMaterial?Z:T).get(ne.envMap||we),et=ne.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!K.morphAttributes.position,It=!!K.morphAttributes.normal,tn=!!K.morphAttributes.color,Ot=_i;ne.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ot=_.toneMapping);let yn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=yn!==void 0?yn.length:0,je=tt.get(ne),Js=p.state.lights;if(B===!0&&(ie===!0||R!==S)){let Jt=R===S&&ne.id===W;nt.setState(ne,R,Jt)}let Rt=!1;ne.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Js.state.version||je.outputColorSpace!==Ue||j.isBatchedMesh&&je.batching===!1||!j.isBatchedMesh&&je.batching===!0||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||je.envMap!==qe||ne.fog===!0&&je.fog!==Se||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==nt.numPlanes||je.numIntersection!==nt.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Ze||je.morphTargets!==Ke||je.morphNormals!==It||je.morphColors!==tn||je.toneMapping!==Ot||Je.isWebGL2===!0&&je.morphTargetsCount!==At)&&(Rt=!0):(Rt=!0,je.__version=ne.version);let Wn=je.currentProgram;Rt===!0&&(Wn=Qi(ne,q,j));let Zs=!1,Ii=!1,Ks=!1,Wt=Wn.getUniforms(),Nn=je.uniforms;if(Pe.useProgram(Wn.program)&&(Zs=!0,Ii=!0,Ks=!0),ne.id!==W&&(W=ne.id,Ii=!0),Zs||S!==R){Wt.setValue(Y,"projectionMatrix",R.projectionMatrix),Wt.setValue(Y,"viewMatrix",R.matrixWorldInverse);let Jt=Wt.map.cameraPosition;Jt!==void 0&&Jt.setValue(Y,Le.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&Wt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Wt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ii=!0,Ks=!0)}if(j.isSkinnedMesh){Wt.setOptional(Y,j,"bindMatrix"),Wt.setOptional(Y,j,"bindMatrixInverse");let Jt=j.skeleton;Jt&&(Je.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Wt.setValue(Y,"boneTexture",Jt.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Wt.setOptional(Y,j,"batchingTexture"),Wt.setValue(Y,"batchingTexture",j._matricesTexture,I));let Nt=K.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0&&Je.isWebGL2===!0)&&at.update(j,K,Wn),(Ii||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Wt.setValue(Y,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Nn.envMap.value=qe,Nn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Ii&&(Wt.setValue(Y,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&so(Nn,Ks),Se&&ne.fog===!0&&xe.refreshFogUniforms(Nn,Se),xe.refreshMaterialUniforms(Nn,ne,re,V,se),Ss.upload(Y,js(je),Nn,I)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ss.upload(Y,js(je),Nn,I),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Wt.setValue(Y,"center",j.center),Wt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),Wt.setValue(Y,"normalMatrix",j.normalMatrix),Wt.setValue(Y,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Jt=ne.uniformsGroups;for(let Qs=0,Nr=Jt.length;Qs<Nr;Qs++)if(Je.isWebGL2){let er=Jt[Qs];mt.update(er,Wn),mt.bind(er,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function so(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ro(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,q,K){tt.get(R.texture).__webglTexture=q,tt.get(R.depthTexture).__webglTexture=K;let ne=tt.get(R);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=K===void 0,ne.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){let K=tt.get(R);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,K=0){D=R,U=q,E=K;let ne=!0,j=null,Se=!1,we=!1;if(R){let qe=tt.get(R);qe.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(Y.FRAMEBUFFER,null),ne=!1):qe.__webglFramebuffer===void 0?I.setupRenderTarget(R):qe.__hasExternalTextures&&I.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);let et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(we=!0);let Ze=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?j=Ze[q][K]:j=Ze[q],Se=!0):Je.isWebGL2&&R.samples>0&&I.useMultisampledRTT(R)===!1?j=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[K]:j=Ze,N.copy(R.viewport),ee.copy(R.scissor),le=R.scissorTest}else N.copy(O).multiplyScalar(re).floor(),ee.copy(G).multiplyScalar(re).floor(),le=X;if(Pe.bindFramebuffer(Y.FRAMEBUFFER,j)&&Je.drawBuffers&&ne&&Pe.drawBuffers(R,j),Pe.viewport(N),Pe.scissor(ee),Pe.setScissorTest(le),Se){let qe=tt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,qe.__webglTexture,K)}else if(we){let qe=tt.get(R.texture),et=q||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,qe.__webglTexture,K||0,et)}W=-1},this.readRenderTargetPixels=function(R,q,K,ne,j,Se,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){Pe.bindFramebuffer(Y.FRAMEBUFFER,Ue);try{let qe=R.texture,et=qe.format,Ze=qe.type;if(et!==bn&&Ce.convert(et)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=Ze===ur&&(He.has("EXT_color_buffer_half_float")||Je.isWebGL2&&He.has("EXT_color_buffer_float"));if(Ze!==vi&&Ce.convert(Ze)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===ei&&(Je.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ne&&K>=0&&K<=R.height-j&&Y.readPixels(q,K,ne,j,Ce.convert(et),Ce.convert(Ze),Se)}finally{let qe=D!==null?tt.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(Y.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(R,q,K=0){let ne=Math.pow(2,-K),j=Math.floor(q.image.width*ne),Se=Math.floor(q.image.height*ne);I.setTexture2D(q,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,K,0,0,R.x,R.y,j,Se),Pe.unbindTexture()},this.copyTextureToTexture=function(R,q,K,ne=0){let j=q.image.width,Se=q.image.height,we=Ce.convert(K.format),Ue=Ce.convert(K.type);I.setTexture2D(K,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment),q.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ne,R.x,R.y,j,Se,we,Ue,q.image.data):q.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ne,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,we,q.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,ne,R.x,R.y,we,Ue,q.image),ne===0&&K.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(R,q,K,ne,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,Ue=R.max.z-R.min.z+1,qe=Ce.convert(ne.format),et=Ce.convert(ne.type),Ze;if(ne.isData3DTexture)I.setTexture3D(ne,0),Ze=Y.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)I.setTexture2DArray(ne,0),Ze=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ne.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ne.unpackAlignment);let Ke=Y.getParameter(Y.UNPACK_ROW_LENGTH),It=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),tn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ot=Y.getParameter(Y.UNPACK_SKIP_ROWS),yn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),At=K.isCompressedTexture?K.mipmaps[j]:K.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,At.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,At.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,R.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,R.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?Y.texSubImage3D(Ze,j,q.x,q.y,q.z,Se,we,Ue,qe,et,At.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ze,j,q.x,q.y,q.z,Se,we,Ue,qe,At.data)):Y.texSubImage3D(Ze,j,q.x,q.y,q.z,Se,we,Ue,qe,et,At),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ke),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,It),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,tn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ot),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,yn),j===0&&ne.generateMipmaps&&Y.generateMipmap(Ze),Pe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){U=0,E=0,D=null,Pe.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Sl?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===Va?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Vi:Vu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vi?Ut:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},cl=class extends gr{};cl.prototype.isWebGL1Renderer=!0;var Ls=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var vu=new H,yu=new Et,xu=new Et,G0=new H,bu=new ot,ra=new H,Fo=new Mi,Mu=new ot,ko=new dr,Aa=class extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingSphere.expandByPoint(ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(s),e.ray.intersectsSphere(Fo)!==!1&&(Mu.copy(s).invert(),ko.copy(e.ray).applyMatrix4(Mu),!(this.boundingBox!==null&&ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===md?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;yu.fromBufferAttribute(s.attributes.skinIndex,e),xu.fromBufferAttribute(s.attributes.skinWeight,e),vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=xu.getComponent(r);if(o!==0){let a=yu.getComponent(r);bu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(G0.copy(vu).applyMatrix4(bu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},_r=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ca=class extends _n{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Yt,u=Yt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Su=new ot,W0=new ot,Ra=class n{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:W0;Su.multiplyMatrices(a,t[r]),Su.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ca(t,e,e,bn,ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new _r),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Si=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wu=new H,Eu=new H,Tu=new ot,Bo=new dr,aa=new Mi,Gi=class extends zt{constructor(e=new wn,t=new Si){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wu.fromBufferAttribute(t,s-1),Eu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wu.distanceTo(Eu);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Tu.copy(s).invert(),Bo.copy(e.ray).applyMatrix4(Tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,h=new H,d=new H,g=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){let f=Math.max(0,o.start),L=Math.min(v.count,o.start+o.count);for(let _=f,C=L-1;_<C;_+=g){let U=v.getX(_),E=v.getX(_+1);if(c.fromBufferAttribute(p,U),u.fromBufferAttribute(p,E),Bo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let W=e.ray.origin.distanceTo(d);W<e.near||W>e.far||t.push({distance:W,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),L=Math.min(p.count,o.start+o.count);for(let _=f,C=L-1;_<C;_+=g){if(c.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),Bo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Au=new H,Cu=new H,La=class extends Gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Au.fromBufferAttribute(t,s),Cu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Au.distanceTo(Cu);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vr=class extends si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wi=class extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function q0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function X0(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ru(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Qu(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Ps=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends Ps{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rc:r=e,a=2*t-i;break;case Lc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:o=e,l=2*i-t;break;case Lc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,g=this._weightNext,v=(i-t)/(s-t),b=v*v,p=b*v,f=-d*p+2*d*b-d*v,L=(1+d)*p+(-1.5-2*d)*b+(-.5+d)*v+1,_=(-1-g)*p+(1.5+g)*b+.5*v,C=g*p-g*b;for(let U=0;U!==a;++U)r[U]=f*o[u+U]+L*o[c+U]+_*o[l+U]+C*o[h+U];return r}},hl=class extends Ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},dl=class extends Ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&q0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===po,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,g=h+i;for(let v=0;v!==i;++v){let b=t[h+v];if(b!==t[d+v]||b!==t[g+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let g=0;g!==i;++g)t[d+g]=t[h+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ua;var wi=class extends En{};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=ca;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends En{};Pa.prototype.ValueTypeName="color";var Is=class extends En{};Is.prototype.ValueTypeName="number";var fl=class extends Ps{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)On.slerpFlat(r,0,o,c-a,o,c,l);return r}},ai=class extends En{InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.DefaultInterpolation=ua;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends En{};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=ca;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends En{};oi.prototype.ValueTypeName="vector";var yr=class{constructor(e,t=-1,i,s=Ed){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ti(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Y0(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(En.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=X0(l);l=Ru(l,1,u),c=Ru(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Is(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,d,g,v,b){if(g.length!==0){let p=[],f=[];Qu(g,p,f,v),p.length!==0&&b.push(new h(d,p,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let g={},v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let b=0;b<d[v].morphTargets.length;b++)g[d[v].morphTargets[b]]=-1;for(let b in g){let p=[],f=[];for(let L=0;L!==d[v].morphTargets.length;++L){let _=d[v];p.push(_.time),f.push(_.morphTarget===b?1:0)}s.push(new Is(".morphTargetInfluence["+b+"]",p,f))}l=g.length*o}else{let g=".bones["+t[h].name+"]";i(oi,g+".position",d,"pos",s),i(ai,g+".quaternion",d,"rot",s),i(oi,g+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function $0(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return oi;case"color":return Pa;case"quaternion":return ai;case"bool":case"boolean":return wi;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Y0(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$0(n.type);if(n.times===void 0){let t=[],i=[];Qu(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ia={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},xr=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let g=c[h],v=c[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null}}},j0=new xr,Fn=class{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zn={},pl=class extends Error{constructor(e,t){super(e),this.response=t}},br=class extends Fn{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ia.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:i,onError:s});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Zn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=d?parseInt(d):0,v=g!==0,b=0,p=new ReadableStream({start(f){L();function L(){h.read().then(({done:_,value:C})=>{if(_)f.close();else{b+=C.byteLength;let U=new ProgressEvent("progress",{lengthComputable:v,loaded:b,total:g});for(let E=0,D=u.length;E<D;E++){let W=u[E];W.onProgress&&W.onProgress(U)}f.enqueue(C),L()}})}}});return new Response(p)}else throw new pl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(d);return c.arrayBuffer().then(v=>g.decode(v))}}}).then(c=>{Ia.add(e,c);let u=Zn[e];delete Zn[e];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{let u=Zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ml=class extends Fn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ia.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=hr("img");function l(){u(),Ia.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Na=class extends Fn{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new Ca,a=new br(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Qt,o.wrapT=c.wrapT!==void 0?c.wrapT:Qt,o.magFilter=c.magFilter!==void 0?c.magFilter:rn,o.minFilter=c.minFilter!==void 0?c.minFilter:rn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=xi),c.mipmapCount===1&&(o.minFilter=rn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},Da=class extends Fn{constructor(e){super(e)}load(e,t,i,s){let r=new _n,o=new ml(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},qi=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ua=class extends qi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zo=new ot,Lu=new H,Pu=new H,Mr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gl=class extends Mr{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oa=class extends qi{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Iu=new ot,rr=new H,Ho=new H,_l=class extends Mr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),i.position.copy(rr),Ho.copy(i.position),Ho.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ho),i.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Iu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu)}},Fa=class extends qi{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vl=class extends Mr{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ka=class extends qi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ba=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Tl="\\[\\]\\.:\\/",J0=new RegExp("["+Tl+"]","g"),Al="[^"+Tl+"]",Z0="[^"+Tl.replace("\\.","")+"]",K0=/((?:WC+[\/:])*)/.source.replace("WC",Al),Q0=/(WCOD+)?/.source.replace("WCOD",Z0),e_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),t_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),n_=new RegExp("^"+K0+Q0+e_+t_+"$"),i_=["material","materials","bones","map"],yl=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){let t=n_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);i_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=yl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);var Sr=class extends Na{constructor(e){super(e)}parse(e){function t(V){switch(V.image_type){case d:case b:if(V.colormap_length>256||V.colormap_size!==24||V.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case g:case v:case p:case f:if(V.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+V.image_type)}if(V.width<=0||V.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(V.pixel_size!==8&&V.pixel_size!==16&&V.pixel_size!==24&&V.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+V.pixel_size)}function i(V,re,te,J,O){let G,X,k=te.pixel_size>>3,B=te.width*te.height*k;if(re&&(X=O.subarray(J,J+=te.colormap_length*(te.colormap_size>>3))),V){G=new Uint8Array(B);let ie,se,oe,Me=0,Le=new Uint8Array(k);for(;Me<B;)if(ie=O[J++],se=(ie&127)+1,ie&128){for(oe=0;oe<k;++oe)Le[oe]=O[J++];for(oe=0;oe<se;++oe)G.set(Le,Me+oe*k);Me+=k*se}else{for(se*=k,oe=0;oe<se;++oe)G[Me+oe]=O[J++];Me+=se}}else G=O.subarray(J,J+=re?te.width*te.height:B);return{pixel_data:G,palettes:X}}function s(V,re,te,J,O,G,X,k,B){let ie=B,se,oe=0,Me,Le,Fe=N.width;for(Le=re;Le!==J;Le+=te)for(Me=O;Me!==X;Me+=G,oe++)se=k[oe],V[(Me+Fe*Le)*4+3]=255,V[(Me+Fe*Le)*4+2]=ie[se*3+0],V[(Me+Fe*Le)*4+1]=ie[se*3+1],V[(Me+Fe*Le)*4+0]=ie[se*3+2];return V}function r(V,re,te,J,O,G,X,k){let B,ie=0,se,oe,Me=N.width;for(oe=re;oe!==J;oe+=te)for(se=O;se!==X;se+=G,ie+=2)B=k[ie+0]+(k[ie+1]<<8),V[(se+Me*oe)*4+0]=(B&31744)>>7,V[(se+Me*oe)*4+1]=(B&992)>>2,V[(se+Me*oe)*4+2]=(B&31)<<3,V[(se+Me*oe)*4+3]=B&32768?0:255;return V}function o(V,re,te,J,O,G,X,k){let B=0,ie,se,oe=N.width;for(se=re;se!==J;se+=te)for(ie=O;ie!==X;ie+=G,B+=3)V[(ie+oe*se)*4+3]=255,V[(ie+oe*se)*4+2]=k[B+0],V[(ie+oe*se)*4+1]=k[B+1],V[(ie+oe*se)*4+0]=k[B+2];return V}function a(V,re,te,J,O,G,X,k){let B=0,ie,se,oe=N.width;for(se=re;se!==J;se+=te)for(ie=O;ie!==X;ie+=G,B+=4)V[(ie+oe*se)*4+2]=k[B+0],V[(ie+oe*se)*4+1]=k[B+1],V[(ie+oe*se)*4+0]=k[B+2],V[(ie+oe*se)*4+3]=k[B+3];return V}function l(V,re,te,J,O,G,X,k){let B,ie=0,se,oe,Me=N.width;for(oe=re;oe!==J;oe+=te)for(se=O;se!==X;se+=G,ie++)B=k[ie],V[(se+Me*oe)*4+0]=B,V[(se+Me*oe)*4+1]=B,V[(se+Me*oe)*4+2]=B,V[(se+Me*oe)*4+3]=255;return V}function c(V,re,te,J,O,G,X,k){let B=0,ie,se,oe=N.width;for(se=re;se!==J;se+=te)for(ie=O;ie!==X;ie+=G,B+=2)V[(ie+oe*se)*4+0]=k[B+0],V[(ie+oe*se)*4+1]=k[B+0],V[(ie+oe*se)*4+2]=k[B+0],V[(ie+oe*se)*4+3]=k[B+1];return V}function u(V,re,te,J,O){let G,X,k,B,ie,se;switch((N.flags&L)>>_){default:case E:G=0,k=1,ie=re,X=0,B=1,se=te;break;case C:G=0,k=1,ie=re,X=te-1,B=-1,se=-1;break;case D:G=re-1,k=-1,ie=-1,X=0,B=1,se=te;break;case U:G=re-1,k=-1,ie=-1,X=te-1,B=-1,se=-1;break}if(pe)switch(N.pixel_size){case 8:l(V,X,B,se,G,k,ie,J);break;case 16:c(V,X,B,se,G,k,ie,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(N.pixel_size){case 8:s(V,X,B,se,G,k,ie,J,O);break;case 16:r(V,X,B,se,G,k,ie,J);break;case 24:o(V,X,B,se,G,k,ie,J);break;case 32:a(V,X,B,se,G,k,ie,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return V}let h=0,d=1,g=2,v=3,b=9,p=10,f=11,L=48,_=4,C=0,U=1,E=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let W=0,S=new Uint8Array(e),N={id_length:S[W++],colormap_type:S[W++],image_type:S[W++],colormap_index:S[W++]|S[W++]<<8,colormap_length:S[W++]|S[W++]<<8,colormap_size:S[W++],origin:[S[W++]|S[W++]<<8,S[W++]|S[W++]<<8],width:S[W++]|S[W++]<<8,height:S[W++]|S[W++]<<8,pixel_size:S[W++],flags:S[W++]};if(t(N),N.id_length+W>e.length)throw new Error("THREE.TGALoader: No data.");W+=N.id_length;let ee=!1,le=!1,pe=!1;switch(N.image_type){case b:ee=!0,le=!0;break;case d:le=!0;break;case p:ee=!0;break;case g:break;case f:ee=!0,pe=!0;break;case v:pe=!0;break}let z=new Uint8Array(N.width*N.height*4),$=i(ee,le,N,W,S);return u(z,N.width,N.height,$.pixel_data,$.palettes),{data:z,width:N.width,height:N.height,flipY:!0,generateMipmaps:!0,minFilter:xi}}};var Wa=class extends Fn{load(e,t,i,s){let r=this,o=r.path===""?Ba.extractUrlBase(e):r.path,a=new br(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(x,y){let w=[],M=x.childNodes;for(let A=0,Q=M.length;A<Q;A++){let ae=M[A];ae.nodeName===y&&w.push(ae)}return w}function s(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),w=new Array(y.length);for(let M=0,A=y.length;M<A;M++)w[M]=y[M];return w}function r(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),w=new Array(y.length);for(let M=0,A=y.length;M<A;M++)w[M]=parseFloat(y[M]);return w}function o(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),w=new Array(y.length);for(let M=0,A=y.length;M<A;M++)w[M]=parseInt(y[M]);return w}function a(x){return x.substring(1)}function l(){return"three_default_"+Nh++}function c(x){return Object.keys(x).length===0}function u(x){return{unit:h(i(x,"unit")[0]),upAxis:d(i(x,"up_axis")[0])}}function h(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function d(x){return x!==void 0?x.textContent:"Y_UP"}function g(x,y,w,M){let A=i(x,y)[0];if(A!==void 0){let Q=i(A,w);for(let ae=0;ae<Q.length;ae++)M(Q[ae])}}function v(x,y){for(let w in x){let M=x[w];M.build=y(x[w])}}function b(x,y){return x.build!==void 0||(x.build=y(x)),x.build}function p(x){let y={sources:{},samplers:{},channels:{}},w=!1;for(let M=0,A=x.childNodes.length;M<A;M++){let Q=x.childNodes[M];if(Q.nodeType!==1)continue;let ae;switch(Q.nodeName){case"source":ae=Q.getAttribute("id"),y.sources[ae]=F(Q);break;case"sampler":ae=Q.getAttribute("id"),y.samplers[ae]=f(Q);break;case"channel":ae=Q.getAttribute("target"),y.channels[ae]=L(Q);break;case"animation":p(Q),w=!0;break;default:console.log(Q)}}w===!1&&(Xe.animations[x.getAttribute("id")||Ds.generateUUID()]=y)}function f(x){let y={inputs:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=a(A.getAttribute("source")),ae=A.getAttribute("semantic");y.inputs[ae]=Q;break}}return y}function L(x){let y={},M=x.getAttribute("target").split("/"),A=M.shift(),Q=M.shift(),ae=Q.indexOf("(")!==-1,Ee=Q.indexOf(".")!==-1;if(Ee)M=Q.split("."),Q=M.shift(),y.member=M.shift();else if(ae){let ge=Q.split("(");Q=ge.shift();for(let be=0;be<ge.length;be++)ge[be]=parseInt(ge[be].replace(/\)/,""));y.indices=ge}return y.id=A,y.sid=Q,y.arraySyntax=ae,y.memberSyntax=Ee,y.sampler=a(x.getAttribute("source")),y}function _(x){let y=[],w=x.channels,M=x.samplers,A=x.sources;for(let Q in w)if(w.hasOwnProperty(Q)){let ae=w[Q],Ee=M[ae.sampler],ge=Ee.inputs.INPUT,be=Ee.inputs.OUTPUT,Ne=A[ge],ce=A[be],Ie=U(ae,Ne,ce);N(Ie,y)}return y}function C(x){return b(Xe.animations[x],_)}function U(x,y,w){let M=Xe.nodes[x.id],A=je(M.id),Q=M.transforms[x.sid],ae=M.matrix.clone().transpose(),Ee,ge,be,Ne,ce,Ie,Re={};switch(Q){case"matrix":for(be=0,Ne=y.array.length;be<Ne;be++)if(Ee=y.array[be],ge=be*w.stride,Re[Ee]===void 0&&(Re[Ee]={}),x.arraySyntax===!0){let Dt=w.array[ge],xt=x.indices[0]+4*x.indices[1];Re[Ee][xt]=Dt}else for(ce=0,Ie=w.stride;ce<Ie;ce++)Re[Ee][ce]=w.array[ge+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}let ze=E(Re,ae);return{name:A.uuid,keyframes:ze}}function E(x,y){let w=[];for(let A in x)w.push({time:parseFloat(A),value:x[A]});w.sort(M);for(let A=0;A<16;A++)ee(w,A,y.elements[A]);return w;function M(A,Q){return A.time-Q.time}}let D=new H,W=new H,S=new On;function N(x,y){let w=x.keyframes,M=x.name,A=[],Q=[],ae=[],Ee=[];for(let ge=0,be=w.length;ge<be;ge++){let Ne=w[ge],ce=Ne.time,Ie=Ne.value;we.fromArray(Ie).transpose(),we.decompose(D,S,W),A.push(ce),Q.push(D.x,D.y,D.z),ae.push(S.x,S.y,S.z,S.w),Ee.push(W.x,W.y,W.z)}return Q.length>0&&y.push(new oi(M+".position",A,Q)),ae.length>0&&y.push(new ai(M+".quaternion",A,ae)),Ee.length>0&&y.push(new oi(M+".scale",A,Ee)),y}function ee(x,y,w){let M,A=!0,Q,ae;for(Q=0,ae=x.length;Q<ae;Q++)M=x[Q],M.value[y]===void 0?M.value[y]=null:A=!1;if(A===!0)for(Q=0,ae=x.length;Q<ae;Q++)M=x[Q],M.value[y]=w;else le(x,y)}function le(x,y){let w,M;for(let A=0,Q=x.length;A<Q;A++){let ae=x[A];if(ae.value[y]===null){if(w=pe(x,A,y),M=z(x,A,y),w===null){ae.value[y]=M.value[y];continue}if(M===null){ae.value[y]=w.value[y];continue}$(ae,w,M,y)}}}function pe(x,y,w){for(;y>=0;){let M=x[y];if(M.value[w]!==null)return M;y--}return null}function z(x,y,w){for(;y<x.length;){let M=x[y];if(M.value[w]!==null)return M;y++}return null}function $(x,y,w,M){if(w.time-y.time===0){x.value[M]=y.value[M];return}x.value[M]=(x.time-y.time)*(w.value[M]-y.value[M])/(w.time-y.time)+y.value[M]}function V(x){let y={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":y.animations.push(a(A.getAttribute("url")));break}}Xe.clips[x.getAttribute("id")]=y}function re(x){let y=[],w=x.name,M=x.end-x.start||-1,A=x.animations;for(let Q=0,ae=A.length;Q<ae;Q++){let Ee=C(A[Q]);for(let ge=0,be=Ee.length;ge<be;ge++)y.push(Ee[ge])}return new yr(w,M,y)}function te(x){return b(Xe.clips[x],re)}function J(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"skin":y.id=a(A.getAttribute("source")),y.skin=O(A);break;case"morph":y.id=a(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Xe.controllers[x.getAttribute("id")]=y}function O(x){let y={sources:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(A.textContent);break;case"source":let Q=A.getAttribute("id");y.sources[Q]=F(A);break;case"joints":y.joints=G(A);break;case"vertex_weights":y.vertexWeights=X(A);break}}return y}function G(x){let y={inputs:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=A.getAttribute("semantic"),ae=a(A.getAttribute("source"));y.inputs[Q]=ae;break}}return y}function X(x){let y={inputs:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=A.getAttribute("semantic"),ae=a(A.getAttribute("source")),Ee=parseInt(A.getAttribute("offset"));y.inputs[Q]={id:ae,offset:Ee};break;case"vcount":y.vcount=o(A.textContent);break;case"v":y.v=o(A.textContent);break}}return y}function k(x){let y={id:x.id},w=Xe.geometries[y.id];return x.skin!==void 0&&(y.skin=B(x.skin),w.sources.skinIndices=y.skin.indices,w.sources.skinWeights=y.skin.weights),y}function B(x){let w={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=x.sources,A=x.vertexWeights,Q=A.vcount,ae=A.v,Ee=A.inputs.JOINT.offset,ge=A.inputs.WEIGHT.offset,be=x.sources[x.joints.inputs.JOINT],Ne=x.sources[x.joints.inputs.INV_BIND_MATRIX],ce=M[A.inputs.WEIGHT.id].array,Ie=0,Re,ze,Oe;for(Re=0,Oe=Q.length;Re<Oe;Re++){let xt=Q[Re],dt=[];for(ze=0;ze<xt;ze++){let ft=ae[Ie+Ee],qn=ae[Ie+ge],ln=ce[qn];dt.push({index:ft,weight:ln}),Ie+=2}for(dt.sort(Dt),ze=0;ze<4;ze++){let ft=dt[ze];ft!==void 0?(w.indices.array.push(ft.index),w.weights.array.push(ft.weight)):(w.indices.array.push(0),w.weights.array.push(0))}}for(x.bindShapeMatrix?w.bindMatrix=new ot().fromArray(x.bindShapeMatrix).transpose():w.bindMatrix=new ot().identity(),Re=0,Oe=be.array.length;Re<Oe;Re++){let xt=be.array[Re],dt=new ot().fromArray(Ne.array,Re*Ne.stride).transpose();w.joints.push({name:xt,boneInverse:dt})}return w;function Dt(xt,dt){return dt.weight-xt.weight}}function ie(x){return b(Xe.controllers[x],k)}function se(x){let y={init_from:i(x,"init_from")[0].textContent};Xe.images[x.getAttribute("id")]=y}function oe(x){return x.build!==void 0?x.build:x.init_from}function Me(x){let y=Xe.images[x];return y!==void 0?b(y,oe):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function Le(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":y.profile=Fe(A);break}}Xe.effects[x.getAttribute("id")]=y}function Fe(x){let y={surfaces:{},samplers:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"newparam":ut(A,y);break;case"technique":y.technique=He(A);break;case"extra":y.extra=T(A);break}}return y}function ut(x,y){let w=x.getAttribute("sid");for(let M=0,A=x.childNodes.length;M<A;M++){let Q=x.childNodes[M];if(Q.nodeType===1)switch(Q.nodeName){case"surface":y.surfaces[w]=Y(Q);break;case"sampler2D":y.samplers[w]=Xt(Q);break}}}function Y(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"init_from":y.init_from=A.textContent;break}}return y}function Xt(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"source":y.source=A.textContent;break}}return y}function He(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=A.nodeName,y.parameters=Je(A);break;case"extra":y.extra=T(A);break}}return y}function Je(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[A.nodeName]=Pe(A);break;case"transparent":y[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:Pe(A)};break}}return y}function Pe(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":y[A.nodeName]=r(A.textContent);break;case"float":y[A.nodeName]=parseFloat(A.textContent);break;case"texture":y[A.nodeName]={id:A.getAttribute("texture"),extra:Tt(A)};break}}return y}function Tt(x){let y={technique:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"extra":tt(A,y);break}}return y}function tt(x,y){for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":I(A,y);break}}}function I(x,y){for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?y.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?y.technique[A.nodeName]=0:y.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=de(A);break}}}function T(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":y.technique=Z(A);break}}return y}function Z(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"double_sided":y[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=de(A);break}}return y}function de(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"texture":y[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Tt(A)};break}}return y}function ue(x){return x}function fe(x){return b(Xe.effects[x],ue)}function De(x){let y={name:x.getAttribute("name")};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":y.url=a(A.getAttribute("url"));break}}Xe.materials[x.getAttribute("id")]=y}function xe(x){let y,w=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":y=ao;break;default:y=er}return y}function Ae(x){let y=fe(x.url),w=y.profile.technique,M;switch(w.type){case"phong":case"blinn":M=new vr;break;case"lambert":M=new Wi;break;default:M=new Rn;break}M.name=x.name||"";function A(ge,be=null){let Ne=y.profile.samplers[ge.id],ce=null;if(Ne!==void 0){let Ie=y.profile.surfaces[Ne.source];ce=Me(Ie.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=Me(ge.id);if(ce!==null){let Ie=xe(ce);if(Ie!==void 0){let Re=Ie.load(ce),ze=ge.extra;if(ze!==void 0&&ze.technique!==void 0&&c(ze.technique)===!1){let Oe=ze.technique;Re.wrapS=Oe.wrapU?yi:Qt,Re.wrapT=Oe.wrapV?yi:Qt,Re.offset.set(Oe.offsetU||0,Oe.offsetV||0),Re.repeat.set(Oe.repeatU||1,Oe.repeatV||1)}else Re.wrapS=yi,Re.wrapT=yi;return be!==null&&(Re.colorSpace=be),Re}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ge.id),null}let Q=w.parameters;for(let ge in Q){let be=Q[ge];switch(ge){case"diffuse":be.color&&M.color.fromArray(be.color),be.texture&&(M.map=A(be.texture,Ut));break;case"specular":be.color&&M.specular&&M.specular.fromArray(be.color),be.texture&&(M.specularMap=A(be.texture));break;case"bump":be.texture&&(M.normalMap=A(be.texture));break;case"ambient":be.texture&&(M.lightMap=A(be.texture,Ut));break;case"shininess":be.float&&M.shininess&&(M.shininess=be.float);break;case"emission":be.color&&M.emissive&&M.emissive.fromArray(be.color),be.texture&&(M.emissiveMap=A(be.texture,Ut));break}}M.color.convertSRGBToLinear(),M.specular&&M.specular.convertSRGBToLinear(),M.emissive&&M.emissive.convertSRGBToLinear();let ae=Q.transparent,Ee=Q.transparency;if(Ee===void 0&&ae&&(Ee={float:1}),ae===void 0&&Ee&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Ee)if(ae.data.texture)M.transparent=!0;else{let ge=ae.data.color;switch(ae.opaque){case"A_ONE":M.opacity=ge[3]*Ee.float;break;case"RGB_ZERO":M.opacity=1-ge[0]*Ee.float;break;case"A_ZERO":M.opacity=1-ge[3]*Ee.float;break;case"RGB_ONE":M.opacity=ge[0]*Ee.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}M.opacity<1&&(M.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){let ge=w.extra.technique;for(let be in ge){let Ne=ge[be];switch(be){case"double_sided":M.side=Ne===1?gn:Un;break;case"bump":M.normalMap=A(Ne.texture),M.normalScale=new ht(1,1);break}}}return M}function We(x){return b(Xe.materials[x],Ae)}function nt(x){let y={name:x.getAttribute("name")};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"optics":y.optics=he(A);break}}Xe.cameras[x.getAttribute("id")]=y}function he(x){for(let y=0;y<x.childNodes.length;y++){let w=x.childNodes[y];switch(w.nodeName){case"technique_common":return _t(w)}}return{}}function _t(x){let y={};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];switch(M.nodeName){case"perspective":case"orthographic":y.technique=M.nodeName,y.parameters=at(M);break}}return y}function at(x){let y={};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[M.nodeName]=parseFloat(M.textContent);break}}return y}function Ye(x){let y;switch(x.optics.technique){case"perspective":y=new kt(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let w=x.optics.parameters.ymag,M=x.optics.parameters.xmag,A=x.optics.parameters.aspect_ratio;M=M===void 0?w*A:M,w=w===void 0?M/A:w,M*=.5,w*=.5,y=new Rs(-M,M,w,-w,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:y=new kt;break}return y.name=x.name||"",y}function ke(x){let y=Xe.cameras[x];return y!==void 0?b(y,Ye):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function Ce(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique_common":y=Qe(A);break}}Xe.lights[x.getAttribute("id")]=y}function Qe(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=A.nodeName,y.parameters=mt(A)}}return y}function mt(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":let Q=r(A.textContent);y.color=new it().fromArray(Q).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let ae=parseFloat(A.textContent);y.distance=ae?Math.sqrt(1/ae):0;break}}return y}function Ct(x){let y;switch(x.technique){case"directional":y=new Ns;break;case"point":y=new Fa;break;case"spot":y=new Oa;break;case"ambient":y=new ka;break}return x.parameters.color&&y.color.copy(x.parameters.color),x.parameters.distance&&(y.distance=x.parameters.distance),y}function st(x){let y=Xe.lights[x];return y!==void 0?b(y,Ct):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function me(x){let y={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=i(x,"mesh")[0];if(w!==void 0){for(let M=0;M<w.childNodes.length;M++){let A=w.childNodes[M];if(A.nodeType!==1)continue;let Q=A.getAttribute("id");switch(A.nodeName){case"source":y.sources[Q]=F(A);break;case"vertices":y.vertices=ve(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(ye(A));break;default:console.log(A)}}Xe.geometries[x.getAttribute("id")]=y}}function F(x){let y={array:[],stride:3};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"float_array":y.array=r(M.textContent);break;case"Name_array":y.array=s(M.textContent);break;case"technique_common":let A=i(M,"accessor")[0];A!==void 0&&(y.stride=parseInt(A.getAttribute("stride")));break}}return y}function ve(x){let y={};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];M.nodeType===1&&(y[M.getAttribute("semantic")]=a(M.getAttribute("source")))}return y}function ye(x){let y={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,M=x.childNodes.length;w<M;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=a(A.getAttribute("source")),ae=A.getAttribute("semantic"),Ee=parseInt(A.getAttribute("offset")),ge=parseInt(A.getAttribute("set")),be=ge>0?ae+ge:ae;y.inputs[be]={id:Q,offset:Ee},y.stride=Math.max(y.stride,Ee+1),ae==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=o(A.textContent);break;case"p":y.p=o(A.textContent);break}}return y}function $e(x){let y={};for(let w=0;w<x.length;w++){let M=x[w];y[M.type]===void 0&&(y[M.type]=[]),y[M.type].push(M)}return y}function Ve(x){let y=0;for(let w=0,M=x.length;w<M;w++)x[w].hasUV===!0&&y++;y>0&&y<x.length&&(x.uvsNeedsFix=!0)}function yt(x){let y={},w=x.sources,M=x.vertices,A=x.primitives;if(A.length===0)return{};let Q=$e(A);for(let ae in Q){let Ee=Q[ae];Ve(Ee),y[ae]=Mt(Ee,w,M)}return y}function Mt(x,y,w){let M={},A={array:[],stride:0},Q={array:[],stride:0},ae={array:[],stride:0},Ee={array:[],stride:0},ge={array:[],stride:0},be={array:[],stride:4},Ne={array:[],stride:4},ce=new wn,Ie=[],Re=0;for(let ze=0;ze<x.length;ze++){let Oe=x[ze],Dt=Oe.inputs,xt=0;switch(Oe.type){case"lines":case"linestrips":xt=Oe.count*2;break;case"triangles":xt=Oe.count*3;break;case"polylist":for(let dt=0;dt<Oe.count;dt++){let ft=Oe.vcount[dt];switch(ft){case 3:xt+=3;break;case 4:xt+=6;break;default:xt+=(ft-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Oe.type)}ce.addGroup(Re,xt,ze),Re+=xt,Oe.material&&Ie.push(Oe.material);for(let dt in Dt){let ft=Dt[dt];switch(dt){case"VERTEX":for(let qn in w){let ln=w[qn];switch(qn){case"POSITION":let es=A.array.length;if(vt(Oe,y[ln],ft.offset,A.array),A.stride=y[ln].stride,y.skinWeights&&y.skinIndices&&(vt(Oe,y.skinIndices,ft.offset,be.array),vt(Oe,y.skinWeights,ft.offset,Ne.array)),Oe.hasUV===!1&&x.uvsNeedsFix===!0){let Dh=(A.array.length-es)/A.stride;for(let Yl=0;Yl<Dh;Yl++)ae.array.push(0,0)}break;case"NORMAL":vt(Oe,y[ln],ft.offset,Q.array),Q.stride=y[ln].stride;break;case"COLOR":vt(Oe,y[ln],ft.offset,ge.array),ge.stride=y[ln].stride;break;case"TEXCOORD":vt(Oe,y[ln],ft.offset,ae.array),ae.stride=y[ln].stride;break;case"TEXCOORD1":vt(Oe,y[ln],ft.offset,Ee.array),ae.stride=y[ln].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',qn)}}break;case"NORMAL":vt(Oe,y[ft.id],ft.offset,Q.array),Q.stride=y[ft.id].stride;break;case"COLOR":vt(Oe,y[ft.id],ft.offset,ge.array,!0),ge.stride=y[ft.id].stride;break;case"TEXCOORD":vt(Oe,y[ft.id],ft.offset,ae.array),ae.stride=y[ft.id].stride;break;case"TEXCOORD1":vt(Oe,y[ft.id],ft.offset,Ee.array),Ee.stride=y[ft.id].stride;break}}}return A.array.length>0&&ce.setAttribute("position",new Bt(A.array,A.stride)),Q.array.length>0&&ce.setAttribute("normal",new Bt(Q.array,Q.stride)),ge.array.length>0&&ce.setAttribute("color",new Bt(ge.array,ge.stride)),ae.array.length>0&&ce.setAttribute("uv",new Bt(ae.array,ae.stride)),Ee.array.length>0&&ce.setAttribute("uv1",new Bt(Ee.array,Ee.stride)),be.array.length>0&&ce.setAttribute("skinIndex",new Bt(be.array,be.stride)),Ne.array.length>0&&ce.setAttribute("skinWeight",new Bt(Ne.array,Ne.stride)),M.data=ce,M.type=x[0].type,M.materialKeys=Ie,M}function vt(x,y,w,M,A=!1){let Q=x.p,ae=x.stride,Ee=x.vcount;function ge(ce){let Ie=Q[ce+w]*Ne,Re=Ie+Ne;for(;Ie<Re;Ie++)M.push(be[Ie]);if(A){let ze=M.length-Ne-1;Dr.setRGB(M[ze+0],M[ze+1],M[ze+2]).convertSRGBToLinear(),M[ze+0]=Dr.r,M[ze+1]=Dr.g,M[ze+2]=Dr.b}}let be=y.array,Ne=y.stride;if(x.vcount!==void 0){let ce=0;for(let Ie=0,Re=Ee.length;Ie<Re;Ie++){let ze=Ee[Ie];if(ze===4){let Oe=ce+ae*0,Dt=ce+ae*1,xt=ce+ae*2,dt=ce+ae*3;ge(Oe),ge(Dt),ge(dt),ge(Dt),ge(xt),ge(dt)}else if(ze===3){let Oe=ce+ae*0,Dt=ce+ae*1,xt=ce+ae*2;ge(Oe),ge(Dt),ge(xt)}else if(ze>4)for(let Oe=1,Dt=ze-2;Oe<=Dt;Oe++){let xt=ce+ae*0,dt=ce+ae*Oe,ft=ce+ae*(Oe+1);ge(xt),ge(dt),ge(ft)}ce+=ae*ze}}else for(let ce=0,Ie=Q.length;ce<Ie;ce+=ae)ge(ce)}function Gt(x){return b(Xe.geometries[x],yt)}function St(x){let y={name:x.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":Pr(M,y);break}}Xe.kinematicsModels[x.getAttribute("id")]=y}function $t(x){return x.build!==void 0?x.build:x}function vn(x){return b(Xe.kinematicsModels[x],$t)}function Pr(x,y){for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"joint":y.joints[M.getAttribute("sid")]=no(M);break;case"link":y.links.push(Ys(M));break}}}function no(x){let y;for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":y=Ki(M);break}}return y}function Ki(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new H,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=r(M.textContent);y.axis.fromArray(A);break;case"limits":let Q=M.getElementsByTagName("max")[0],ae=M.getElementsByTagName("min")[0];y.limits.max=parseFloat(Q.textContent),y.limits.min=parseFloat(ae.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function Ys(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":y.attachments.push(Qi(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(js(M));break}}return y}function Qi(x){let y={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"link":y.links.push(Ys(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(js(M));break}}return y}function js(x){let y={type:x.nodeName},w=r(x.textContent);switch(y.type){case"matrix":y.obj=new ot,y.obj.fromArray(w).transpose();break;case"translate":y.obj=new H,y.obj.fromArray(w);break;case"rotate":y.obj=new H,y.obj.fromArray(w),y.angle=Ds.degToRad(w[3]);break}return y}function Ir(x){let y={name:x.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":y.rigidBodies[M.getAttribute("name")]={},io(M,y.rigidBodies[M.getAttribute("name")]);break}}Xe.physicsModels[x.getAttribute("id")]=y}function io(x,y){for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":so(M,y);break}}}function so(x,y){for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"inertia":y.inertia=r(M.textContent);break;case"mass":y.mass=r(M.textContent)[0];break}}}function ro(x){let y={bindJointAxis:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":y.bindJointAxis.push(R(M));break}}Xe.kinematicsScenes[a(x.getAttribute("url"))]=y}function R(x){let y={target:x.getAttribute("target").split("/").pop()};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=M.getElementsByTagName("param")[0];y.axis=A.textContent;let Q=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=Q.substring(0,Q.length-1);break}}return y}function q(x){return x.build!==void 0?x.build:x}function K(x){return b(Xe.kinematicsScenes[x],q)}function ne(){let x=Object.keys(Xe.kinematicsModels)[0],y=Object.keys(Xe.kinematicsScenes)[0],w=Object.keys(Xe.visualScenes)[0];if(x===void 0||y===void 0)return;let M=vn(x),A=K(y),Q=Zs(w),ae=A.bindJointAxis,Ee={};for(let Ne=0,ce=ae.length;Ne<ce;Ne++){let Ie=ae[Ne],Re=Nt.querySelector('[sid="'+Ie.target+'"]');if(Re){let ze=Re.parentElement;ge(Ie.jointIndex,ze)}}function ge(Ne,ce){let Ie=ce.getAttribute("name"),Re=M.joints[Ne];Q.traverse(function(ze){ze.name===Ie&&(Ee[Ne]={object:ze,transforms:j(ce),joint:Re,position:Re.zeroPosition})})}let be=new ot;$l={joints:M&&M.joints,getJointValue:function(Ne){let ce=Ee[Ne];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Ne+" doesn't exist.")},setJointValue:function(Ne,ce){let Ie=Ee[Ne];if(Ie){let Re=Ie.joint;if(ce>Re.limits.max||ce<Re.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ne+" value "+ce+" outside of limits (min: "+Re.limits.min+", max: "+Re.limits.max+").");else if(Re.static)console.warn("THREE.ColladaLoader: Joint "+Ne+" is static.");else{let ze=Ie.object,Oe=Re.axis,Dt=Ie.transforms;we.identity();for(let xt=0;xt<Dt.length;xt++){let dt=Dt[xt];if(dt.sid&&dt.sid.indexOf(Ne)!==-1)switch(Re.type){case"revolute":we.multiply(be.makeRotationAxis(Oe,Ds.degToRad(ce)));break;case"prismatic":we.multiply(be.makeTranslation(Oe.x*ce,Oe.y*ce,Oe.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Re.type);break}else switch(dt.type){case"matrix":we.multiply(dt.obj);break;case"translate":we.multiply(be.makeTranslation(dt.obj.x,dt.obj.y,dt.obj.z));break;case"scale":we.scale(dt.obj);break;case"rotate":we.multiply(be.makeRotationAxis(dt.obj,dt.angle));break}}ze.matrix.copy(we),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),Ee[Ne].position=ce}}else console.log("THREE.ColladaLoader: "+Ne+" does not exist.")}}}function j(x){let y=[],w=Nt.querySelector('[id="'+x.id+'"]');for(let M=0;M<w.childNodes.length;M++){let A=w.childNodes[M];if(A.nodeType!==1)continue;let Q,ae;switch(A.nodeName){case"matrix":Q=r(A.textContent);let Ee=new ot().fromArray(Q).transpose();y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Ee});break;case"translate":case"scale":Q=r(A.textContent),ae=new H().fromArray(Q),y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ae});break;case"rotate":Q=r(A.textContent),ae=new H().fromArray(Q);let ge=Ds.degToRad(Q[3]);y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ae,angle:ge});break}}return y}function Se(x){let y=x.getElementsByTagName("node");for(let w=0;w<y.length;w++){let M=y[w];M.hasAttribute("id")===!1&&M.setAttribute("id",l())}}let we=new ot,Ue=new H;function qe(x){let y={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new ot,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType!==1)continue;let A;switch(M.nodeName){case"node":y.nodes.push(M.getAttribute("id")),qe(M);break;case"instance_camera":y.instanceCameras.push(a(M.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(et(M));break;case"instance_light":y.instanceLights.push(a(M.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(et(M));break;case"instance_node":y.instanceNodes.push(a(M.getAttribute("url")));break;case"matrix":A=r(M.textContent),y.matrix.multiply(we.fromArray(A).transpose()),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":A=r(M.textContent),Ue.fromArray(A),y.matrix.multiply(we.makeTranslation(Ue.x,Ue.y,Ue.z)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":A=r(M.textContent);let Q=Ds.degToRad(A[3]);y.matrix.multiply(we.makeRotationAxis(Ue.fromArray(A),Q)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":A=r(M.textContent),y.matrix.scale(Ue.fromArray(A)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return At(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):Xe.nodes[y.id]=y,y}function et(x){let y={id:a(x.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];switch(M.nodeName){case"bind_material":let A=M.getElementsByTagName("instance_material");for(let Q=0;Q<A.length;Q++){let ae=A[Q],Ee=ae.getAttribute("symbol"),ge=ae.getAttribute("target");y.materials[Ee]=a(ge)}break;case"skeleton":y.skeletons.push(a(M.textContent));break;default:break}}return y}function Ze(x,y){let w=[],M=[],A,Q,ae;for(A=0;A<x.length;A++){let be=x[A],Ne;if(At(be))Ne=je(be),Ke(Ne,y,w);else if(Wn(be)){let Ie=Xe.visualScenes[be].children;for(let Re=0;Re<Ie.length;Re++){let ze=Ie[Re];if(ze.type==="JOINT"){let Oe=je(ze.id);Ke(Oe,y,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",be)}for(A=0;A<y.length;A++)for(Q=0;Q<w.length;Q++)if(ae=w[Q],ae.bone.name===y[A].name){M[A]=ae,ae.processed=!0;break}for(A=0;A<w.length;A++)ae=w[A],ae.processed===!1&&(M.push(ae),ae.processed=!0);let Ee=[],ge=[];for(A=0;A<M.length;A++)ae=M[A],Ee.push(ae.bone),ge.push(ae.boneInverse);return new Ra(Ee,ge)}function Ke(x,y,w){x.traverse(function(M){if(M.isBone===!0){let A;for(let Q=0;Q<y.length;Q++){let ae=y[Q];if(ae.name===M.name){A=ae.boneInverse;break}}A===void 0&&(A=new ot),w.push({bone:M,boneInverse:A,processed:!1})}})}function It(x){let y=[],w=x.matrix,M=x.nodes,A=x.type,Q=x.instanceCameras,ae=x.instanceControllers,Ee=x.instanceLights,ge=x.instanceGeometries,be=x.instanceNodes;for(let ce=0,Ie=M.length;ce<Ie;ce++)y.push(je(M[ce]));for(let ce=0,Ie=Q.length;ce<Ie;ce++){let Re=ke(Q[ce]);Re!==null&&y.push(Re.clone())}for(let ce=0,Ie=ae.length;ce<Ie;ce++){let Re=ae[ce],ze=ie(Re.id),Oe=Gt(ze.id),Dt=yn(Oe,Re.materials),xt=Re.skeletons,dt=ze.skin.joints,ft=Ze(xt,dt);for(let qn=0,ln=Dt.length;qn<ln;qn++){let es=Dt[qn];es.isSkinnedMesh&&(es.bind(ft,ze.skin.bindMatrix),es.normalizeSkinWeights()),y.push(es)}}for(let ce=0,Ie=Ee.length;ce<Ie;ce++){let Re=st(Ee[ce]);Re!==null&&y.push(Re.clone())}for(let ce=0,Ie=ge.length;ce<Ie;ce++){let Re=ge[ce],ze=Gt(Re.id),Oe=yn(ze,Re.materials);for(let Dt=0,xt=Oe.length;Dt<xt;Dt++)y.push(Oe[Dt])}for(let ce=0,Ie=be.length;ce<Ie;ce++)y.push(je(be[ce]).clone());let Ne;if(M.length===0&&y.length===1)Ne=y[0];else{Ne=A==="JOINT"?new _r:new cn;for(let ce=0;ce<y.length;ce++)Ne.add(y[ce])}return Ne.name=A==="JOINT"?x.sid:x.name,Ne.matrix.copy(w),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne}let tn=new Rn({name:Fn.DEFAULT_MATERIAL_NAME,color:16711935});function Ot(x,y){let w=[];for(let M=0,A=x.length;M<A;M++){let Q=y[x[M]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[M]),w.push(tn)):w.push(We(Q))}return w}function yn(x,y){let w=[];for(let M in x){let A=x[M],Q=Ot(A.materialKeys,y);if(Q.length===0&&(M==="lines"||M==="linestrips"?Q.push(new Si):Q.push(new vr)),M==="lines"||M==="linestrips")for(let be=0,Ne=Q.length;be<Ne;be++){let ce=Q[be];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Ie=new Si;Ie.color.copy(ce.color),Ie.opacity=ce.opacity,Ie.transparent=ce.transparent,Q[be]=Ie}}let ae=A.data.attributes.skinIndex!==void 0,Ee=Q.length===1?Q[0]:Q,ge;switch(M){case"lines":ge=new La(A.data,Ee);break;case"linestrips":ge=new Gi(A.data,Ee);break;case"triangles":case"polylist":ae?ge=new Aa(A.data,Ee):ge=new on(A.data,Ee);break}w.push(ge)}return w}function At(x){return Xe.nodes[x]!==void 0}function je(x){return b(Xe.nodes[x],It)}function Js(x){let y={name:x.getAttribute("name"),children:[]};Se(x);let w=i(x,"node");for(let M=0;M<w.length;M++)y.children.push(qe(w[M]));Xe.visualScenes[x.getAttribute("id")]=y}function Rt(x){let y=new cn;y.name=x.name;let w=x.children;for(let M=0;M<w.length;M++){let A=w[M];y.add(je(A.id))}return y}function Wn(x){return Xe.visualScenes[x]!==void 0}function Zs(x){return b(Xe.visualScenes[x],Rt)}function Ii(x){let y=i(x,"instance_visual_scene")[0];return Zs(a(y.getAttribute("url")))}function Ks(){let x=Xe.clips;if(c(x)===!0){if(c(Xe.animations)===!1){let y=[];for(let w in Xe.animations){let M=C(w);for(let A=0,Q=M.length;A<Q;A++)y.push(M[A])}Ur.push(new yr("default",-1,y))}}else for(let y in x)Ur.push(te(y))}function Wt(x){let y="",w=[x];for(;w.length;){let M=w.shift();M.nodeType===Node.TEXT_NODE?y+=M.textContent:(y+=`
`,w.push.apply(w,M.childNodes))}return y.trim()}if(e.length===0)return{scene:new Ls};let Nn=new DOMParser().parseFromString(e,"application/xml"),Nt=i(Nn,"COLLADA")[0],Jt=Nn.getElementsByTagName("parsererror")[0];if(Jt!==void 0){let x=i(Jt,"div")[0],y;return x?y=x.textContent:y=Wt(Jt),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let Qs=Nt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Qs);let Nr=u(i(Nt,"asset")[0]),er=new Da(this.manager);er.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let ao;Sr&&(ao=new Sr(this.manager),ao.setPath(this.resourcePath||t));let Dr=new it,Ur=[],$l={},Nh=0,Xe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};g(Nt,"library_animations","animation",p),g(Nt,"library_animation_clips","animation_clip",V),g(Nt,"library_controllers","controller",J),g(Nt,"library_images","image",se),g(Nt,"library_effects","effect",Le),g(Nt,"library_materials","material",De),g(Nt,"library_cameras","camera",nt),g(Nt,"library_lights","light",Ce),g(Nt,"library_geometries","geometry",me),g(Nt,"library_nodes","node",qe),g(Nt,"library_visual_scenes","visual_scene",Js),g(Nt,"library_kinematics_models","kinematics_model",St),g(Nt,"library_physics_models","physics_model",Ir),g(Nt,"scene","instance_kinematics_scene",ro),v(Xe.animations,_),v(Xe.clips,re),v(Xe.controllers,k),v(Xe.images,oe),v(Xe.effects,ue),v(Xe.materials,Ae),v(Xe.cameras,Ye),v(Xe.lights,Ct),v(Xe.geometries,yt),v(Xe.visualScenes,Rt),Ks(),ne();let Or=Ii(i(Nt,"scene")[0]);return Or.animations=Ur,Nr.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Or.rotation.set(-Math.PI/2,0,0)),Or.scale.multiplyScalar(Nr.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ur},kinematics:$l,library:Xe,scene:Or}}};var dn=["en","fr","ca","es"],$i={en:"English",fr:"Fran\xE7ais",ca:"Catal\xE0",es:"Espa\xF1ol"},r_={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Bn(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of r_[e]||dn)if(n[t])return n[t];return""}var $a={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Er={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function kn(){return Object.fromEntries(dn.map(n=>[n,""]))}function fn(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:dn.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||kn(),e.sub=e.sub||kn(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||kn(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=$a[t.layout]?t.layout:"carousel",t.card=Er[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network,t.skills=t.skills===void 0?t.id==="expertise":!!t.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(dn.map(s=>[s,t[i]||""]))),dn.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit="")}),t.spots=Array.isArray(t.spots)?t.spots.filter(o_):[],t.skills=Array.isArray(t.skills)?t.skills.filter(i=>typeof i=="string"):[],t.published===void 0&&(t.published=!0)}),n}function Yi(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function li(n){return String(n||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||"item"}function zn(n,e){let t=li(n),i=2,s=new Set(e);for(;s.has(t);)t=li(n)+"-"+i++;return t}var a_=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Cl(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!a_.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Rl(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var o_=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="",eh={Barcelone:"Barcelona",Venise:"Venice",Bruxelles:"Brussels",P\u00E9kin:"Beijing",Pekin:"Beijing",Londres:"London",Lisbonne:"Lisbon",S\u00E9oul:"Seoul",Mexico:"Mexico City",Montr\u00E9al:"Montreal",Beyrouth:"Beirut",Bogot\u00E1:"Bogota",Duba\u00EF:"Dubai",Murano:"Murano",Charjah:"Sharjah",Lausana:"Lausanne"};function th(n){let e=[],t=" "+String(n||"")+" ",i=[...Object.keys(Hn),...Object.keys(eh)].sort((r,o)=>o.length-r.length),s=t;for(let r of i){let o=new RegExp("[^\\p{L}]"+r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}])","iu"),a=s.search(o);if(a>=0){let l=eh[r]||r;e.some(c=>c.c===l)||e.push({c:l,at:a}),s=s.replace(o,c=>c[0]+" ".repeat(c.length-1))}}return e.sort((r,o)=>r.at-o.at).map(r=>r.c)}var Hn={Barcelona:[41.39,2.17],Paris:[48.86,2.35],London:[51.51,-.13],Reims:[49.26,4.03],Lausanne:[46.52,6.63],Berlin:[52.52,13.4],Madrid:[40.42,-3.7],Brussels:[50.85,4.35],Amsterdam:[52.37,4.9],Helsinki:[60.17,24.94],Venice:[45.44,12.33],Dakar:[14.72,-17.47],Sharjah:[25.35,55.42],Beijing:[39.9,116.4],Puebla:[19.04,-98.2],"Mexico City":[19.43,-99.13],"New York":[40.71,-74],Montreal:[45.5,-73.57],Beirut:[33.89,35.5],Lisbon:[38.72,-9.14],Aveiro:[40.64,-8.65],"La Rochelle":[46.16,-1.15],Durham:[54.78,-1.58],Lyon:[45.76,4.84],Hebei:[40.77,114.88],Chengdu:[30.57,104.07],Bogota:[4.71,-74.07],Tokyo:[35.68,139.69],Seoul:[37.57,126.98],Dubai:[25.2,55.27],Murano:[45.46,12.35]};function l_(n){return new Promise((e,t)=>{let i=URL.createObjectURL(n),s=new Image;s.onload=()=>e(s),s.onerror=t,s.src=i})}async function nh(n,e,t,i=.86){if(/svg|gif/i.test(n.type))return n;let s=await l_(n),r=Math.min(1,e/s.naturalWidth,t/s.naturalHeight);if(r>=1&&/jpe?g|webp/i.test(n.type)&&n.size<9e5)return n;let o=document.createElement("canvas");o.width=Math.round(s.naturalWidth*r),o.height=Math.round(s.naturalHeight*r),o.getContext("2d").drawImage(s,0,0,o.width,o.height);let a=/png/i.test(n.type)&&c_(o);return new Promise(l=>o.toBlob(c=>l(c),a?"image/png":"image/jpeg",i))}function c_(n){let e=n.getContext("2d").getImageData(0,0,Math.min(n.width,64),Math.min(n.height,64)).data;for(let t=3;t<e.length;t+=4)if(e[t]<250)return!0;return!1}function ji(n){let e=/\.([a-z0-9]+)$/i.exec(n||"");return e?e[1].toLowerCase():""}function Ll(n){return new Promise((e,t)=>{let i=new FileReader;i.onload=()=>e(String(i.result).split(",")[1]||""),i.onerror=t,i.readAsDataURL(n)})}function Ya(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Ai(n){try{let e=await Ya();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Os(n,e){let t=await Ya();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function ih(){try{let n=await Ya();return await new Promise(e=>{let t=n.transaction("kv").objectStore("kv").getAllKeys();t.onsuccess=()=>e(t.result||[]),t.onerror=()=>e([])})}catch{return[]}}async function ci(n){try{let e=await Ya();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var qa=class{constructor(e){this.kind="github",this.cfg=Object.assign({branch:"main",root:""},e),this.api="https://api.github.com"}get repoPath(){return`/repos/${this.cfg.owner}/${this.cfg.repo}`}full(e){let t=(this.cfg.root||"").replace(/^\/+|\/+$/g,"");return t?t+"/"+e:e}async req(e,t={}){let i=await fetch(this.api+e,{...t,headers:{Accept:"application/vnd.github+json",Authorization:"Bearer "+this.cfg.token,"X-GitHub-Api-Version":"2022-11-28",...t.body?{"Content-Type":"application/json"}:{},...t.headers||{}}});if(!i.ok){let s=i.status+"";try{let o=await i.json();s+=" "+(o.message||"")}catch{}let r=new Error(s);throw r.status=i.status,r}return i.status===204?null:t.raw?i.text():i.json()}async check(){let e=await this.req(this.repoPath);if(!e.permissions||!e.permissions.push)throw Object.assign(new Error("Ce jeton peut lire le d\xE9p\xF4t mais pas y \xE9crire. Donne-lui l'acc\xE8s \xAB Contents : Read and write \xBB."),{status:403});return this.cfg.branch||(this.cfg.branch=e.default_branch),e}async load(){let e=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${encodeURIComponent(this.cfg.branch)}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return fn(JSON.parse(e))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){let r=(await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`)).object.sha,o=await this.req(`${this.repoPath}/git/commits/${r}`),a=[],l=[...t,{path:"content/content.json",text:JSON.stringify(e,null,1)+`
`}];for(let h of l){if(h.delete){a.push({path:this.full(h.path),mode:"100644",type:"blob",sha:null});continue}let d=h.text!=null?{content:h.text,encoding:"utf-8"}:{content:await Ll(h.blob),encoding:"base64"},g=await this.req(`${this.repoPath}/git/blobs`,{method:"POST",body:JSON.stringify(d)});a.push({path:this.full(h.path),mode:"100644",type:"blob",sha:g.sha})}let c=await this.req(`${this.repoPath}/git/trees`,{method:"POST",body:JSON.stringify({base_tree:o.tree.sha,tree:a})}),u=await this.req(`${this.repoPath}/git/commits`,{method:"POST",body:JSON.stringify({message:i,tree:c.sha,parents:[r]})});return await this.req(`${this.repoPath}/git/refs/heads/${encodeURIComponent(this.cfg.branch)}`,{method:"PATCH",body:JSON.stringify({sha:u.sha})}),u.sha}async listFiles(e=["media/","models/"]){let t=await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`),i=await this.req(`${this.repoPath}/git/trees/${t.object.sha}?recursive=1`),s=this.full("");return i.tree.filter(r=>r.type==="blob").map(r=>({path:s&&r.path.startsWith(s)?r.path.slice(s.length):r.path,size:r.size})).filter(r=>e.some(o=>r.path.startsWith(o)))}async lastCommits(e=8){let t=this.full("content/content.json");return this.req(`${this.repoPath}/commits?sha=${encodeURIComponent(this.cfg.branch)}&path=${encodeURIComponent(t)}&per_page=${e}`)}async loadAt(e){let t=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${e}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return fn(JSON.parse(t))}},Xa=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Ai("demo:content:v6");if(e)return fn(e);if(window.HC_CONTENT)return fn(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return fn(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await ci("demo:file:"+i.path);continue}await Os("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Os("demo:content:v6",e),"demo"}async reset(){await ci("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Ai("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},wr=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Fs=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl",".skl .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],u_=["font","size","lh","weight","italic","ls","upper"],sh=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function h_(n){let e=wr.find(i=>i.id===n);if(e)return e.css;let t=sh(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:wr[0].css}function Ci(n,e){let t=Fs.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...u_,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=h_(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function rh(n){let e=new Map;for(let t of Fs){let i=Ci(n,t.id),s=sh(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function ah(n){let e=new Set;for(let t of Fs){let i=Ci(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function ja(n,e,t=!1){let i=Ci(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let a=r.measureText(o),l=(a.actualBoundingBoxAscent||i.size*1.4)-(a.actualBoundingBoxDescent||0);if(r.fillText(o,120,120+l/2),t){let c=r.getImageData(0,0,240,240),u=c.data;for(let h=0;h<u.length;h+=4)u[h]=255-u[h],u[h+1]=255-u[h+1],u[h+2]=255-u[h+2];r.putImageData(c,0,0)}return s.toDataURL("image/png")}var Xi=class{constructor(e){this.kind="folder",this.dir=e,this.name=e.name,this.urls=new Map}static supported(){return typeof window<"u"&&typeof window.showDirectoryPicker=="function"}async parent(e,t){let i=e.split("/").filter(Boolean),s=i.pop(),r=this.dir;for(let o of i)r=await r.getDirectoryHandle(o,{create:t});return[r,s]}async fileHandle(e,t=!1){let[i,s]=await this.parent(e,t);return i.getFileHandle(s,{create:t})}async readBlob(e){return(await this.fileHandle(e)).getFile()}async readText(e){return(await this.readBlob(e)).text()}async exists(e){try{return await this.fileHandle(e),!0}catch{return!1}}async writeFile(e,t){let s=await(await this.fileHandle(e,!0)).createWritable();await s.write(t),await s.close()}async remove(e){try{let[t,i]=await this.parent(e,!1);await t.removeEntry(i)}catch{}}async permission(e){let t={mode:"readwrite"};return await this.dir.queryPermission(t)==="granted"?!0:e?await this.dir.requestPermission(t)==="granted":!1}async check(){if(!await this.exists("content/content.json"))throw new Error(`le dossier \xAB ${this.name} \xBB ne contient pas content/content.json. Choisis le dossier du site, celui o\xF9 se trouvent index.html et le dossier content.`)}async load(){return fn(JSON.parse(await this.readText("content/content.json")))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){for(let l of t){if(l.delete){await this.remove(l.path),this.urls.delete(l.path);continue}await this.writeFile(l.path,l.blob||l.text)}let s=JSON.stringify(e,null,1)+`
`;await this.writeFile("content/content.json",s);let r=new Date,o=r.toISOString().replace(/[:.]/g,"-"),a=[];try{a=JSON.parse(await this.readText("content/versions/index.json"))}catch{}await this.writeFile(`content/versions/${o}.json`,s),a.unshift({file:o+".json",date:r.toISOString(),message:i});for(let l of a.splice(40))await this.remove("content/versions/"+l.file);return await this.writeFile("content/versions/index.json",JSON.stringify(a,null,1)+`
`),o}async listFiles(e=["media/","models/"]){let t=[],i=async(s,r)=>{for await(let[o,a]of s.entries()){let l=r+o;a.kind==="directory"?await i(a,l+"/"):t.push({path:l,size:(await a.getFile()).size})}};for(let s of e)try{let[r,o]=await this.parent(s+"x",!1);await i(r,s)}catch{}return t}async lastCommits(e=20){let t=[];try{t=JSON.parse(await this.readText("content/versions/index.json"))}catch{}return t.slice(0,e).map(i=>({sha:i.file,html_url:"",commit:{message:i.message||"Mise \xE0 jour du contenu",author:{name:"dossier \xAB "+this.name+" \xBB",date:i.date}}}))}async loadAt(e){return fn(JSON.parse(await this.readText("content/versions/"+e)))}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t)if(!(this.urls.has(i)||/^(https?:|data:|blob:)/.test(i)))try{this.urls.set(i,URL.createObjectURL(await this.readBlob(i)))}catch{}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):e)}};var Zi=window.HC_SITE??"../",Ri=window.HC_ASSETS||null,fh=window.HC_MODE==="demo",Ka=document.getElementById("app"),P={backend:null,cfg:null,content:null,base:"",head:null,staged:new Map,recent:new Map,deletes:new Set,view:"sections",sel:{section:null,post:null,model:null},filter:{section:null,tag:"",q:"",status:""},refreshList:null,draftKey:"draft:demo:v6",busy:!1},d_=new Set(["value","checked","disabled","hidden","multiple","selected","indeterminate","open"]);function m(n,e,...t){let i=document.createElement(n);for(let[s,r]of Object.entries(e||{}))r==null||r===!1||(s==="class"?i.className=r:s==="style"&&typeof r=="object"?Object.assign(i.style,r):s==="html"?i.innerHTML=r:s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):d_.has(s)?i[s]=r:i.setAttribute(s,r===!0?"":r));return t.flat(1/0).forEach(s=>{s==null||s===!1||i.append(s instanceof Node?s:document.createTextNode(String(s)))}),i}function Ge(n,...e){return n.replaceChildren(...e.flat(1/0).filter(t=>t!=null&&t!==!1)),n}var ph=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},mh=n=>ph(n)?"youtube":/vimeo\.com\/(?:video\/)?\d+/.test(n||"")?"vimeo":/\.(mp4|webm|mov)(\?|#|$)/i.test(n||"")?"video":"image",gh=()=>ja(P.content&&P.content.settings.accent||"#ffcc00",P.content&&P.content.settings),pt=n=>Bn(n,"fr")||Bn(n,"en");function _h(n){let e=Ci(n,"sig1");return{fontFamily:e.css,fontWeight:String(e.weight||400),fontStyle:e.italic?"italic":"normal",letterSpacing:e.ls?e.ls+"em":"normal",textTransform:e.upper?"uppercase":"none"}}function vh(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}function yh(n,e){if(!document.fonts||n&&n.logo)return;let t=Ci(n,"logo"),i=`${t.italic?"italic ":""}${t.weight||400} 76px ${t.css}`;document.fonts.check(i)||document.fonts.load(i).then(e).catch(()=>{})}function Bs(){let n=P.content&&P.content.settings;if(!n)return;let e=n.logo?Gn(n.logo):gh(),t=document.querySelector(".top .brand");if(t){t.querySelector("img").src=e;let s=t.querySelector(".name");s.textContent=n.name||"Hand Coded",Object.assign(s.style,_h(n))}let i=document.querySelector(".logo-prev");i&&(i.style.backgroundImage=`url("${e}")`),vh(e),yh(n,Bs)}var oh=()=>Math.random().toString(36).slice(2,6),Hs=(n,e,t)=>{let[i]=n.splice(e,1);n.splice(t,0,i)},Dl=n=>n==null?"":n<1024?n+" o":n<1048576?Math.round(n/1024)+" Ko":(n/1048576).toFixed(1)+" Mo",xh=n=>String(n||"").split(/[\s&/]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")||"\xB7";function Be(n,e,t="",i={}){return m("button",{type:"button",class:"btn "+t,onclick:e,...i},n)}var bh=m("div",{class:"toasts",role:"status","aria-live":"polite"});document.body.appendChild(bh);function gt(n,e="ok",t=4200){let i=m("div",{class:"toast "+e},n);bh.appendChild(i),setTimeout(()=>i.remove(),t)}function Lr(n,e,t){return new Promise(i=>{let s=document.activeElement,r=h=>{c.remove(),document.removeEventListener("keydown",o),s&&s.focus&&s.focus(),i(h)},o=h=>{h.key==="Escape"&&r(null)},a=m("div",{class:"mf"},t.map(h=>Be(h.label,()=>r(typeof h.value=="function"?h.value():h.value),h.cls||""))),l=m("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":n},m("h2",null,n),m("div",{class:"mb"},e),a),c=m("div",{class:"modal-bg",onmousedown:h=>{h.target===c&&r(null)}},l);document.body.appendChild(c),document.addEventListener("keydown",o);let u=l.querySelector("input, textarea, select")||a.lastChild;u&&u.focus()})}var Pn=(n,e,t="Confirmer",i="dark")=>Lr(n,m("p",null,e),[{label:"Annuler",value:!1,cls:"ghost"},{label:t,value:!0,cls:i}]);async function Ul(n,e,t="",i="OK"){let s=m("input",{type:"text",value:t});return s.addEventListener("keydown",r=>{r.key==="Enter"&&r.target.closest(".modal").querySelector(".mf .btn:last-child").click()}),Lr(n,m("label",{class:"f"},m("span",null,e),s),[{label:"Annuler",value:null,cls:"ghost"},{label:i,value:()=>s.value,cls:"dark"}])}function Gn(n){if(!n)return"";if(/^(https?:|data:|blob:)/.test(n))return n;if(Ri&&Ri[n]&&Ri[n].startsWith("data:"))return Ri[n];let e=P.staged.get(n)||P.recent.get(n);return e?e.url:P.backend&&(P.backend.kind==="demo"||P.backend.kind==="folder")?P.backend.url(n):Zi+n}function Li(n,e){let t=P.staged.get(n);t&&URL.revokeObjectURL(t.url),P.staged.set(n,{blob:e,url:URL.createObjectURL(e)}),P.deletes.delete(n)}function Vs(n=P.content){let e=new Set;return n.posts.forEach(t=>{[t.thumb,t.thumbBack].forEach(i=>i&&e.add(i)),t.media.forEach(i=>i&&i.src&&e.add(i.src))}),n.models.forEach(t=>{t.file&&(e.add(t.file),(t.textures||[]).forEach(i=>e.add(t.file.replace(/[^/]+$/,"")+i)))}),n.settings.logo&&e.add(n.settings.logo),n.settings.homeVideo&&n.settings.homeVideo.src&&e.add(n.settings.homeVideo.src),new Set([...e].filter(t=>!/^(https?:|data:|blob:)/.test(t)))}var f_={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif","image/svg+xml":"svg"};async function Cr(n,e,t){if(/^video\/(mp4|webm)$/.test(n.type)||/\.(mp4|webm)$/i.test(n.name)){if(t!=="media")throw new Error("Ici, seules les images sont accept\xE9es.");if(n.size>95e6)throw new Error(`${n.name} p\xE8se ${Dl(n.size)} : GitHub refuse les fichiers de plus de 100 Mo. R\xE9duis la vid\xE9o (720p, H.264) avant de l'envoyer.`);return n.size>4e7&&gt(`${n.name} p\xE8se ${Dl(n.size)}. Elle passera, mais la page sera lente \xE0 charger : vise moins de 20 Mo.`,"ok",7e3),{path:`${e}/${li(n.name.replace(/\.[^.]+$/,""))}-${oh()}.${ji(n.name)||"mp4"}`,blob:n}}if(!/^image\//.test(n.type))throw new Error(`${n.name} : format non reconnu (images JPG, PNG, WebP, GIF, SVG ou vid\xE9os MP4, WebM).`);let s=t==="media"?[3200,1e3]:t==="logo"?[600,600]:[1400,1400],r=await nh(n,s[0],s[1]),o=f_[r.type]||ji(n.name)||"jpg";return{path:`${e}/${li(n.name.replace(/\.[^.]+$/,""))}-${oh()}.${o}`,blob:r}}function Gs(n,e,t){let i=m("input",{type:"file",accept:n,multiple:e});i.addEventListener("change",()=>t([...i.files])),i.click()}function Ol(n,e){n.addEventListener("dragover",t=>{[...t.dataTransfer.types].includes("Files")&&(t.preventDefault(),n.classList.add("over"))}),n.addEventListener("dragleave",()=>n.classList.remove("over")),n.addEventListener("drop",t=>{t.dataTransfer.files.length&&(t.preventDefault(),n.classList.remove("over"),e([...t.dataTransfer.files]))})}var lh=null,ch=null;function Te(n={}){n.after&&n.after(),P.onChange&&P.onChange(),clearTimeout(lh),lh=setTimeout(zl,600),clearTimeout(ch),ch=setTimeout(ks,200),n.list&&P.refreshList&&P.refreshList(),n.nav&&to()}function Mh(){let n=Vs();return[...P.staged.keys()].filter(e=>n.has(e))}function Xs(){return JSON.stringify(P.content)!==P.base||P.deletes.size>0||Mh().length>0}async function zl(){try{if(!Xs()){await ci(P.draftKey);return}let n=Vs();await Os(P.draftKey,{content:P.content,base:P.base,head:P.head,at:Date.now(),deletes:[...P.deletes],staged:[...P.staged].filter(([e])=>n.has(e)).map(([e,t])=>({path:e,blob:t.blob}))})}catch(n){console.warn("brouillon non sauvegard\xE9",n)}}async function zs(n){try{n&&n.content&&await Os("draft-backup:"+P.draftKey,{content:n.content,at:n.at||Date.now()})}catch{}}async function p_(){let n=await Ai(P.draftKey);if(!(!n||!n.content)){if(n.base!==P.base&&!await Lr("Un brouillon attend",m("div",null,m("p",null,`Tu as un brouillon non publi\xE9 du ${new Date(n.at).toLocaleString("fr-FR")}.`),m("p",null,"Le site a \xE9t\xE9 publi\xE9 depuis (peut-\xEAtre depuis un autre ordinateur). Si tu reprends ce brouillon, sa publication remplacera ces changements.")),[{label:"Partir de la version en ligne",value:!1,cls:"ghost"},{label:"Reprendre mon brouillon",value:!0,cls:"dark"}])){await zs(n),await ci(P.draftKey);return}P.content=fn(n.content),(n.staged||[]).forEach(e=>Li(e.path,e.blob)),(n.deletes||[]).forEach(e=>P.deletes.add(e)),gt("Brouillon non publi\xE9 retrouv\xE9 : rien n\u2019est perdu.")}}function Sh(){let n=JSON.parse(P.base),e=P.content,t=[],i=(o,a,l,c,u)=>{let h=u?"\xE9e":"\xE9",d=new Map(o.map(_=>[_[l],JSON.stringify(_)])),g=new Map(a.map(_=>[_[l],JSON.stringify(_)])),v=[...g.keys()].filter(_=>!d.has(_)).length,b=[...d.keys()].filter(_=>!g.has(_)).length,p=[...g.keys()].filter(_=>d.has(_)&&d.get(_)!==g.get(_)).length,f=_=>_>1?c+"s":c,L=_=>_>1?h+"s":h;v&&t.push(`${v} ${f(v)} ajout${L(v)}`),p&&t.push(`${p} ${f(p)} modifi${L(p)}`),b&&t.push(`${b} ${f(b)} supprim${L(b)}`)};i(n.sections,e.sections,"id","section",!0),i(n.posts,e.posts,"id","contenu"),i(n.models,e.models,"id","mod\xE8le"),JSON.stringify(n.settings)!==JSON.stringify(e.settings)&&t.push("r\xE9glages modifi\xE9s");let s=o=>o.sections.map(a=>a.id);JSON.stringify(s(n))!==JSON.stringify(s(e))&&JSON.stringify(s(n).slice().sort())===JSON.stringify(s(e).slice().sort())&&t.push("ordre des sections");let r=Mh().length;return r&&t.push(`${r} fichier${r>1?"s":""} \xE0 envoyer`),P.deletes.size&&t.push(`${P.deletes.size} fichier${P.deletes.size>1?"s":""} \xE0 supprimer`),t}function m_(){let n=Vs(JSON.parse(P.base)),e=Vs(),t=new Set(JSON.parse(P.base).models.filter(i=>i.builtin).flatMap(i=>[i.file,...(i.textures||[]).map(s=>i.file.replace(/[^/]+$/,"")+s)]));return[...n].filter(i=>!e.has(i)&&!t.has(i)&&/^(media|models)\//.test(i)&&!P.staged.has(i))}async function Hl(){if(P.busy)return;if(!Xs()){gt("Rien de nouveau \xE0 publier.");return}let n=Sh(),e=m_(),t=m("input",{type:"text",value:n.length?n.slice(0,3).join(", ").replace(/^./,o=>o.toUpperCase()):"Mise \xE0 jour du contenu"}),i=m("input",{type:"checkbox",checked:!0}),s=m("div",null,m("ul",null,n.map(o=>m("li",null,o))),m("label",{class:"f"},m("span",null,"Note pour l\u2019historique"),t),e.length?m("label",{class:"switch"},i,`Supprimer aussi ${e.length} ancien${e.length>1?"s":""} fichier${e.length>1?"s":""} qui ne sert plus`):null,m("p",{class:"hint"},P.backend.kind==="github"?"Le site se met \xE0 jour 1 \xE0 2 minutes apr\xE8s la publication.":P.backend.kind==="folder"?`Les fichiers sont \xE9crits dans le dossier \xAB ${P.backend.name} \xBB de ton ordinateur.`:"Mode d\xE9mo : la publication reste dans ce navigateur, rien n\u2019est \xE9crit dans les fichiers du site."));if(await Lr("Publier sur le site",s,[{label:"Annuler",value:!1,cls:"ghost"},{label:"Publier",value:!0,cls:"primary"}])){P.busy=!0,ks("Publication en cours\u2026");try{if(P.backend.kind==="github"){let u=await __();if(P.head&&u!==P.head){let h=await P.backend.loadAt(u);if(JSON.stringify(h)!==P.base&&!await Pn("Le site a chang\xE9 entre-temps","Quelqu\u2019un (ou toi, depuis un autre onglet) a publi\xE9 depuis que tu as ouvert le back-office. Publier maintenant remplacera ces changements par les tiens.","Publier quand m\xEAme","danger")){P.busy=!1,ks();return}}}let o=Vs(),a=[...P.staged].filter(([u])=>o.has(u)).map(([u,h])=>({path:u,blob:h.blob}));(P.backend.kind==="github"||P.backend.kind==="folder")&&(a.push({path:"content/content.js",text:"window.HC_CONTENT = "+JSON.stringify(P.content)+`;
`}),JSON.stringify(JSON.parse(P.base).models)!==JSON.stringify(P.content.models)&&(ks("Pr\xE9paration des mod\xE8les 3D\u2026"),a.push({path:"models/models.js",text:await g_()})));let l=new Set([...P.deletes].filter(u=>!o.has(u)));e.length&&i.checked&&e.forEach(u=>l.add(u));let c=await P.backend.publish(P.content,[...a,...[...l].map(u=>({path:u,delete:!0}))],t.value.trim()||"Mise \xE0 jour du contenu");P.base=JSON.stringify(P.content),P.backend.kind==="github"&&(P.head=c),a.forEach(u=>{P.recent.set(u.path,P.staged.get(u.path)),P.staged.delete(u.path)}),P.staged.forEach(u=>URL.revokeObjectURL(u.url)),P.staged.clear(),P.deletes.clear(),P.files=null,await ci(P.draftKey),gt(P.backend.kind==="github"?"Publi\xE9. Le site sera \xE0 jour dans une minute ou deux.":P.backend.kind==="folder"?`Enregistr\xE9 dans le dossier \xAB ${P.backend.name} \xBB.`:"Publi\xE9 dans la d\xE9mo (dans ce navigateur seulement)."),P.backend.kind==="folder"&&await P.backend.prepare(P.content)}catch(o){console.error(o),gt("La publication a \xE9chou\xE9 : "+Ws(o),"bad",9e3)}finally{P.busy=!1,ks(),to(),(P.view==="history"||P.view==="media")&&jt()}}}async function g_(){let n={},e={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",tga:"image/x-tga",webp:"image/webp"};for(let t of P.content.models){let i=t.file.replace(/[^/]+$/,"");for(let s of[t.file,...(t.textures||[]).map(r=>i+r)]){let r=P.staged.has(s)?P.staged.get(s).blob:null;if(!r&&P.backend.readBlob&&(r=await P.backend.readBlob(s).catch(()=>null)),!r){let o=await fetch(Gn(s));if(!o.ok)throw new Error(s+" : "+o.status);r=await o.blob()}n[s]=/\.dae$/i.test(s)?await r.text():`data:${e[ji(s)]||"application/octet-stream"};base64,${await Ll(r)}`}}return"window.HC_ASSETS = "+JSON.stringify(n)+`;
`}async function __(){return(await P.backend.req(`${P.backend.repoPath}/git/ref/heads/${encodeURIComponent(P.backend.cfg.branch)}`)).object.sha}async function v_(){Xs()&&await Pn("Annuler les modifications","Tout ce qui n\u2019a pas \xE9t\xE9 publi\xE9 sera perdu : textes, images ajout\xE9es, suppressions.","Tout annuler","danger")&&(await zs({content:P.content,at:Date.now()}),P.content=fn(JSON.parse(P.base)),P.staged.forEach(n=>URL.revokeObjectURL(n.url)),P.staged.clear(),P.deletes.clear(),await ci(P.draftKey),Ar(),gt("Retour \xE0 la version publi\xE9e. Une copie du brouillon reste dans Historique \u203A Sauvegardes."))}function Ws(n){let e=n&&n.status;return e===401?"jeton refus\xE9 (expir\xE9, r\xE9voqu\xE9 ou mal copi\xE9).":e===403?n.message.includes("\xE9crire")?n.message:"acc\xE8s refus\xE9. V\xE9rifie que le jeton a \xAB Contents : Read and write \xBB sur ce d\xE9p\xF4t.":e===404?"d\xE9p\xF4t ou branche introuvable, ou le jeton n\u2019a pas acc\xE8s \xE0 ce d\xE9p\xF4t.":e===409?"conflit sur la branche, recharge la page et r\xE9essaie.":e===422?"GitHub a refus\xE9 un fichier (trop lourd ?). "+(n.message||""):n instanceof TypeError?"pas de connexion \xE0 GitHub (r\xE9seau ?).":n&&n.message?n.message:String(n)}var Ja=new Map;async function uh(n){if(Ri&&Ri[n]&&!Ri[n].startsWith("data:"))return Ri[n];if(!Ja.has(n)||P.staged.has(n)){let e=fetch(Gn(n)).then(t=>{if(!t.ok)throw new Error(n+" : "+t.status);return t.text()});if(P.staged.has(n))return e;Ja.set(n,e),e.catch(()=>Ja.delete(n))}return Ja.get(n)}var wh=new xr;wh.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Gn(n.replace(/^\.\//,"").replace(/\/\.\//g,"/")));function Fl(n,e){let i=new Wa(wh).parse(n,e.file.slice(0,e.file.lastIndexOf("/")+1)).scene,s=new cn;s.add(i);let r=0;if(i.traverse(l=>{if(!l.isMesh)return;r++;let c=u=>{let h=u.map||u.emissiveMap||null;return h?new Rn({map:h}):e.untextured==="white"?new Wi({color:15921906}):e.untextured==="black"?new Wi({color:2236962}):new Rn({color:15841280,wireframe:!0})};l.material=Array.isArray(l.material)?l.material.map(c):c(l.material)}),!r)throw new Error("aucune forme 3D dans ce fichier");let o=y_(e);if(e.scaleMode==="fit"){s.updateMatrixWorld(!0);let l=new hn().setFromObject(s),c=l.getSize(new H);s.scale.setScalar((e.height||420)/Math.max(c.y,1e-6)*o),s.updateMatrixWorld(!0);let u=new hn().setFromObject(s),h=u.getCenter(new H);s.position.set(-h.x,-u.min.y,-h.z)}else{i.scale.setScalar(100),s.updateMatrixWorld(!0);let l=new hn().setFromObject(s);l.max.y-l.min.y>800&&s.scale.setScalar(800/(l.max.y-l.min.y)),s.scale.multiplyScalar(o)}let a=new cn;return a.rotation.y=(e.rotationY||0)*Math.PI/180,a.add(s),a}var y_=n=>Math.max(.05,Math.min(5,(+n.scale||100)/100)),kl=(()=>{let n=null,e=new Ls;e.add(new Ua(16777215,14211288,2.2));let t=new Ns(16777215,1.2);t.position.set(300,800,500),e.add(t);let i=new kt(30,4/3,1,2e4),s=new cn;e.add(s);let r=new cn;r.visible=!1,s.add(r);{let _=new mr(256,169),C=new Rn({color:1710618,transparent:!0,opacity:.16,side:gn,depthWrite:!1});for(let E=0;E<8;E++){let D=E/8*Math.PI*2,W=new on(_,C);W.position.set(500*Math.sin(D),500+(E%2?60:-60),500*Math.cos(D)),W.rotation.y=D,r.add(W)}let U=[];for(let E=0;E<=64;E++){let D=E/64*Math.PI*2;U.push(new H(500*Math.sin(D),0,500*Math.cos(D)))}r.add(new Gi(new wn().setFromPoints(U),new Si({color:13421772})))}let o=!1,a=null,l=null,c=!1,u=0,h=.004,d=new Map,g=Promise.resolve();function v(){if(n)return n;n=new gr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(16777215,0);let _=n.domElement;return _.addEventListener("pointerdown",C=>{c=!0,u=C.clientX,_.setPointerCapture(C.pointerId)}),_.addEventListener("pointermove",C=>{c&&(h=(C.clientX-u)*.01,s.rotation.y+=h,u=C.clientX)}),_.addEventListener("pointerup",()=>{c=!1}),requestAnimationFrame(L),n}function b(_){let C=new hn().setFromObject(_),U=C.getSize(new H),E=C.getCenter(new H),D=Math.max(U.y*.8,Math.min(U.x,U.z)*.55,Math.max(U.x,U.z)*.38)||100,W=D/Math.tan(15*Math.PI/180);i.position.set(0,E.y+D*.55,W),i.near=W/50,i.far=W*10,i.lookAt(0,E.y,0),i.updateProjectionMatrix()}function p(){i.position.set(0,300+1900*.28,1900),i.near=10,i.far=2e4,i.lookAt(0,330,0),i.updateProjectionMatrix()}function f(_){[...s.children].forEach(C=>{C!==r&&s.remove(C)}),s.rotation.y=.6,r.visible=!!(_&&o),_&&(s.add(_),o?p():(r.visible=!1,b(_))),a=_}function L(){if(requestAnimationFrame(L),!l||!l.isConnected||!a)return;let _=l.clientWidth,C=l.clientHeight;if(!_||!C)return;let U=n.domElement;U.parentNode!==l&&l.prepend(U),(U.width!==Math.round(_*n.getPixelRatio())||U.height!==Math.round(C*n.getPixelRatio()))&&(n.setSize(_,C,!1),i.aspect=_/C,i.updateProjectionMatrix()),c||(s.rotation.y+=h,h+=(.004-h)*.03),n.render(e,i)}return{async show(_,C,U,E=!1){v(),l=_,o=E,f(null),U&&(U.textContent="Chargement du mod\xE8le\u2026");try{let D=Fl(await uh(C.file),C);if(l!==_)return;f(D);let W=new hn().setFromObject(D).getSize(new H);U&&(U.textContent=(E?`Dans la sc\xE8ne : ${Math.round(W.x)} \xD7 ${Math.round(W.y)} \xD7 ${Math.round(W.z)} (les cartes grises sont celles du carrousel). `:"")+"Glisse pour tourner autour.")}catch(D){U&&(U.textContent="Impossible d\u2019afficher ce mod\xE8le : "+D.message)}},async snapshot(_){let C=_.file+JSON.stringify([_.scaleMode,_.height,_.rotationY,_.untextured,_.scale])+(P.staged.has(_.file)?"s":"");if(d.has(C))return d.get(C);let U=g.then(async()=>{v();let E=Fl(await uh(_.file),_),D=a,W=s.rotation.y,S=o;o=!1,f(E),s.rotation.y=.6,n.setSize(320,200,!1),i.aspect=1.6,i.updateProjectionMatrix(),await new Promise(ee=>setTimeout(ee,400)),n.render(e,i);let N=n.domElement.toDataURL("image/png");return o=S,f(D),s.rotation.y=W,n.setSize(1,1,!1),N});return g=U.catch(()=>{}),d.set(C,U),U.catch(()=>d.delete(C)),U}}})();function x_(n){let e=m("div",{class:"pic"},m("span",{style:{color:"#aaa",fontSize:"12px"}},"\u2026"));return kl.snapshot(n).then(t=>Ge(e,m("img",{src:t,alt:""}))).catch(()=>Ge(e,m("span",{style:{color:"#c0362c",fontSize:"12px",padding:"8px"}},"aper\xE7u indisponible"))),e}function Eh(n){let e='<path d="M80 62 l9 6 l-3 11 h-12 l-3 -11z" fill="#d8d8d8" stroke="#bdbdbd" stroke-width=".6"/>',t=(o,a,l,c,u=1,h="#151515")=>`<rect x="${(o-l/2).toFixed(1)}" y="${(a-c/2).toFixed(1)}" width="${l.toFixed(1)}" height="${c.toFixed(1)}" fill="${h}" opacity="${u.toFixed(2)}"/>`,i=(o,a,l,c)=>`<line x1="${o.toFixed(1)}" y1="${a.toFixed(1)}" x2="${l.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#cfcfcf" stroke-width=".7"/>`,s="",r=(o,a,l,c,u,h,d=0)=>{let g=[];for(let v=0;v<o;v++){let b=v/o*Math.PI*2,p=(Math.cos(b)+1)/2;g.push({x:80+a*Math.sin(b),y:c+l*Math.cos(b)-v*d,d:p})}g.sort((v,b)=>v.d-b.d).forEach(v=>{h&&(s+=i(v.x,v.y,80,70)),s+=t(v.x,v.y,u[0]*(.6+.4*v.d),u[1]*(.6+.4*v.d),.3+.7*v.d)})};switch(n){case"carousel":s+=e,r(8,60,13,40,[22,14],!0);break;case"arc":for(let o=0;o<7;o++){let a=Math.PI*(o+1)/8;s+=t(80-62*Math.cos(a),74-58*Math.sin(a),16,11,1)}s+=e;break;case"fan":s+=e;for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-48*Math.cos(a),60-40*Math.sin(a),80,66)+t(80-48*Math.cos(a),60-40*Math.sin(a),24,7,.35)}for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-64*Math.cos(a),66-50*Math.sin(a),80,66)+t(80-64*Math.cos(a),66-50*Math.sin(a),30,8,1,"#333")}break;case"map":s+='<ellipse cx="80" cy="78" rx="70" ry="13" fill="#ececec"/><path d="M28 77 q8 -6 18 -2 t20 0 q6 -4 12 1 M92 75 q10 -5 22 -1 t18 3" stroke="#cfcfcf" stroke-width="3" fill="none" stroke-linecap="round"/>',[[48,76,46,30],[100,75,104,22],[124,79,132,42]].forEach(([o,a,l,c])=>{s+=i(o,a,l,c)+`<circle cx="${o}" cy="${a}" r="2" fill="#f1b800"/>`+t(l,c,15,14,1,"#fff").replace("/>",' stroke="#151515" stroke-width=".8"/>')+t(l-20,c,18,14,1)});break;case"spiral":s+=e;{let o=[];for(let a=0;a<9;a++){let l=a*.95,c=(Math.cos(l)+1)/2;o.push({x:80+48*Math.sin(l),y:66-a*6.6,d:c})}o.sort((a,l)=>a.d-l.d).forEach(a=>{s+=i(a.x,a.y,80,a.y)+t(a.x,a.y,18*(.6+.4*a.d),12*(.6+.4*a.d),.3+.7*a.d)})}break;case"wall":for(let o=0;o<3;o++)for(let a=0;a<5;a++)s+=t(32+a*24,16+o*17,20,13,.9);s+=e;break;default:s+=e}return`<svg viewBox="0 0 160 100" aria-hidden="true">${s}</svg>`}function b_(n){let e="var(--accent)";switch(n){case"image":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="32" y="18" width="96" height="63" fill="#111"/><rect x="40" y="26" width="8" height="1.5" fill="${e}"/><rect x="40" y="32" width="54" height="5" fill="#fff"/><rect x="40" y="41" width="36" height="3" fill="#777"/><rect x="40" y="72" width="34" height="2.5" fill="${e}"/></svg>`;case"portrait":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="55" y="25" width="50" height="50" fill="#1b1b1b"/><text x="80" y="57" text-anchor="middle" font-family="Georgia" font-size="20" fill="#fff">MM</text><rect x="75" y="64" width="10" height="1.4" fill="${e}"/></svg>`;case"text":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="20" y="36" width="120" height="30" fill="#333"/><rect x="27" y="41" width="7" height="1.4" fill="${e}"/><rect x="27" y="46" width="80" height="5" fill="#fff"/><rect x="27" y="54" width="54" height="5" fill="#fff"/></svg>`;case"place":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="52" y="24" width="56" height="52" fill="#fff" stroke="#ccc"/><circle cx="80" cy="46" r="13" fill="#111"/><circle cx="80" cy="46" r="3.5" fill="${e}"/><rect x="66" y="66" width="28" height="3" fill="#444"/></svg>`}return""}function Pl(n,e,t,i){let s=m("div",{class:"tiles",role:"radiogroup","aria-label":i}),r=o=>{Ge(s,...n.map(a=>m("button",{type:"button",class:"tile",role:"radio","aria-checked":String(a.value===o),onclick:()=>{t(a.value),r(a.value)}},a.pic||m("div",{class:"pic"}),m("div",{class:"cap"},m("b",null,a.label),a.hint?m("span",null,a.hint):null))))};return r(e),s}function ct(n,e,t){return m("label",{class:"f"},m("span",null,n),e,t?m("p",{class:"hint"},t):null)}function bt(n,e,t={}){let i=m("input",{type:t.type||"text",value:n()??"",placeholder:t.placeholder,min:t.min,max:t.max,step:t.step,spellcheck:t.spell===!1?"false":null});return i.addEventListener("input",()=>{e(t.type==="number"?i.value===""?"":+i.value:i.value),Te(t)}),t.onBlur&&i.addEventListener("blur",()=>t.onBlur(i)),i}var Ln=()=>{let n=P.content&&P.content.settings.langs||dn;return dn.filter(e=>n.includes(e))};function Ji(n,e,t,i={}){(!e[t]||typeof e[t]!="object")&&(e[t]=Object.fromEntries(dn.map(r=>[r,e[t]||""])));let s=r=>m("div",{class:"lang","data-l":r.toUpperCase()},bt(()=>e[t][r]??"",o=>{e[t][r]=o},{...i,placeholder:i.placeholder?i.placeholder[r]:$i[r]}));return m("div",{class:"f"},m("span",{class:"lbl"},n),m("div",{class:"pair"},Ln().map(s)),i.hint?m("p",{class:"hint"},i.hint):null)}function Vn(n,e,t,i={}){let s=m("input",{type:"checkbox",checked:!!e(),role:"switch"});return s.addEventListener("change",()=>{t(s.checked),Te(i)}),m("label",{class:"switch"},s,n)}function In(n,e,t,i={}){let s=m("select",null,n.map(r=>m("option",{value:r.value,selected:r.value===e()},r.label)));return s.addEventListener("change",()=>{t(s.value),Te(i)}),s}function M_(n,e){let t=Ln().includes("fr")?"fr":Ln()[0],i=m("div",{class:"rte",contenteditable:"true","data-ph":e,role:"textbox","aria-multiline":"true"}),s=m("div",{class:"rte-foot"}),r=m("div",{class:"lang-tabs",role:"tablist"}),o=()=>{let d=g=>Rl(n[g]).join(" ").split(/\s+/).filter(Boolean).length;Ge(s,m("span",null,`${d(t)} mots`),m("span",null,Ln().map(g=>`${g.toUpperCase()} ${d(g)?"\u2713":"\xB7 \xE0 \xE9crire"}`).join("   ")))},a=()=>{i.innerHTML=Cl(n[t]),r.querySelectorAll("button").forEach(d=>d.setAttribute("aria-selected",String(d.dataset.l===t))),o()};Ln().forEach(d=>r.appendChild(m("button",{type:"button",role:"tab","data-l":d,onclick:()=>{t=d,a()}},d.toUpperCase()))),i.addEventListener("input",()=>{n[t]=Cl(i.innerHTML),o(),Te()}),i.addEventListener("paste",d=>{d.preventDefault();let g=d.clipboardData.getData("text/plain");document.execCommand("insertText",!1,g)}),i.addEventListener("focus",()=>{try{document.execCommand("defaultParagraphSeparator",!1,"p")}catch{}}),i.addEventListener("keydown",d=>{(d.metaKey||d.ctrlKey)&&d.key.toLowerCase()==="k"&&(d.preventDefault(),c())});let l=(d,g)=>{i.focus(),document.execCommand(d,!1,g),i.dispatchEvent(new Event("input"))};async function c(){let d=window.getSelection(),g=d.rangeCount?d.getRangeAt(0).cloneRange():null,v=await Ul("Ajouter un lien","Adresse (https://\u2026 ou mailto:\u2026)","https://","Ajouter");if(!(!v||v==="https://")){if(i.focus(),g&&(d.removeAllRanges(),d.addRange(g)),g&&g.collapsed&&document.execCommand("insertText",!1,v.replace(/^https?:\/\/|^mailto:/,"")),g&&g.collapsed){let b=d.getRangeAt(0);b.setStart(b.startContainer,Math.max(0,b.startOffset-v.replace(/^https?:\/\/|^mailto:/,"").length))}l("createLink",/^(https?:|mailto:)/.test(v)?v:"https://"+v)}}let u=(d,g,v)=>m("button",{type:"button",title:g,"aria-label":g,onmousedown:b=>b.preventDefault(),onclick:v},d),h=m("div",{class:"rte-bar"},u(m("b",null,"G"),"Gras",()=>l("bold")),u(m("i",null,"I"),"Italique",()=>l("italic")),m("span",{class:"sep"}),u("Lien","Lien (Ctrl+K)",c),u("\u2022 Liste","Liste \xE0 puces",()=>l("insertUnorderedList")),u("Intertitre","Intertitre",()=>l("formatBlock","h3")),u("\xB6","Paragraphe normal",()=>l("formatBlock","p")),m("span",{class:"sep"}),u("Effacer","Retirer la mise en forme",()=>{l("removeFormat"),l("unlink")}),r);return a(),m("div",{class:"rte-wrap"},h,i,s)}var Th=[["sections","Sections"],["posts","Contenus"],["models","Mod\xE8les 3D"],["media","M\xE9dias"],["settings","R\xE9glages"],["history","Historique"]],Il,Qa,Rr,Tr;function Ar(){Ge(Ka),Il=m("header",{class:"top"}),Qa=m("nav",{class:"nav","aria-label":"Back-office"}),Rr=m("main",{class:"main",id:"main"}),Ka.appendChild(m("div",{class:"shell"},Il,Qa,Rr)),Tr=m("div",{class:"status","aria-live":"polite"}),Il.append(m("div",{class:"brand"},m("img",{alt:""}),m("span",{class:"name"}),m("small",null,P.backend.kind==="demo"?"Back-office \xB7 d\xE9mo":P.backend.kind==="folder"?"Back-office \xB7 dossier \xAB "+P.backend.name+" \xBB":"Back-office")),...P.backend.kind!=="demo"?[]:[m("button",{type:"button",class:"demo-tag",title:"Ouvrir les sauvegardes",onclick:()=>qs("history")},"D\xE9mo : ton travail reste dans ce navigateur, pas dans les fichiers du site. Exporte-le ou travaille dans le dossier.")],Tr,m("div",{class:"acts"},Be("Aper\xE7u",()=>$s(),"ghost",{title:"Voir le site avec les modifications non publi\xE9es"}),Be("Publier",Hl,"primary",{title:"Ctrl+S"}))),Bs(),to(),ks(),jt()}function to(){if(!Qa)return;let n=P.content,e={sections:n.sections.length,posts:n.posts.length,models:n.models.length};Ge(Qa,m("ul",null,Th.map(([t,i])=>m("li",null,m("button",{type:"button","aria-current":String(P.view===t),onclick:()=>qs(t)},i,e[t]!=null?m("small",null,e[t]):null)))),m("div",{class:"foot"},P.backend.kind==="github"?m("a",{href:`https://github.com/${P.cfg.owner}/${P.cfg.repo}`,target:"_blank",rel:"noopener"},`${P.cfg.owner}/${P.cfg.repo}`):null,window.HC_SITE_HTML?m("a",{href:"#",onclick:t=>{t.preventDefault(),$s()}},"Voir le site"):m("a",{href:Zi+"index.html",target:"_blank",rel:"noopener"},"Voir le site en ligne \u2197"),Xs()?m("a",{href:"#",onclick:t=>{t.preventDefault(),v_()}},"Annuler les modifications"):null,P.backend.kind==="github"?m("a",{href:"#",onclick:t=>{t.preventDefault(),j_()}},"Se d\xE9connecter"):null,P.backend.kind!=="github"?m("a",{href:"#",onclick:t=>{t.preventDefault(),Y_()}},P.backend.kind==="folder"?"Changer de dossier":"Quitter la d\xE9mo"):null))}function ks(n){if(!Tr)return;let e=Xs();Tr.className="status"+(e?" dirty":"");let t=e?Sh():[];Ge(Tr,m("i",{class:"dot"}),m("span",null,n||(e?"Non publi\xE9 : "+(t.join(", ")||"modifications"):"Tout est publi\xE9")))}function qs(n){P.view=n;try{history.replaceState(null,"","#/"+n)}catch{}to(),jt(),Rr.scrollTop=0}function jt(){P.refreshList=null,P.onChange=null;let n={sections:hh,posts:R_,models:N_,media:k_,settings:V_,history:G_}[P.view]||hh;Ge(Rr,n())}function Pi(n,e,t,...i){return m("div",{class:"page"},m("header",null,m("h1",null,n),t&&t.length?m("div",{class:"acts"},t):null,e?m("p",null,e):null),i)}function Vl(n){window.innerWidth<980&&setTimeout(()=>n.scrollIntoView({behavior:"smooth",block:"start"}),30)}function Ah(n,e){let t=null,i=()=>n.querySelectorAll(".drop-before, .drop-after").forEach(s=>s.classList.remove("drop-before","drop-after"));n.querySelectorAll("[data-i]").forEach(s=>{s.draggable=!0,s.addEventListener("dragstart",r=>{t=+s.dataset.i,s.classList.add("dragging"),r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",String(t))}),s.addEventListener("dragend",()=>{s.classList.remove("dragging"),i(),t=null}),s.addEventListener("dragover",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect();i(),s.classList.add(r.clientY>o.top+o.height/2?"drop-after":"drop-before")}),s.addEventListener("drop",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect(),a=+s.dataset.i+(r.clientY>o.top+o.height/2?1:0);a>t&&a--;let l=t;t=null,i(),a!==l&&e(l,a)})})}var Gl=n=>P.content.posts.filter(e=>e.section===n).length;function hh(){let n=P.content;n.sections.find(r=>r.id===P.sel.section)||(P.sel.section=n.sections[0]&&n.sections[0].id);let e=m("div",{class:"card sticky"}),t=m("div"),i=()=>{let r=m("ul",{class:"list"},n.sections.map((o,a)=>m("li",{class:"row","data-i":a,tabindex:0,"aria-current":String(o.id===P.sel.section),onclick:()=>{P.sel.section=o.id,i(),s(),Vl(t)},onkeydown:l=>{l.key==="Enter"&&l.currentTarget.click()}},m("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),m("div",{class:"th",style:{background:"#fafafa",border:"1px solid var(--line)"},html:Eh(o.layout)}),m("div",null,m("div",{class:"t"},pt(o.name)||o.id),m("div",{class:"m"},`${Bn($a[o.layout].label,"fr")} \xB7 ${Bn(Er[o.card].label,"fr")} \xB7 ${Gl(o.id)} contenus`)),m("div",{class:"b"},o.visible?null:m("span",{class:"badge off"},"masqu\xE9e"),n.settings.startSection===o.id?m("span",{class:"badge"},"arriv\xE9e"):null))));Ah(r,(o,a)=>{Hs(n.sections,o,a),Te({nav:!0}),i()}),Ge(e,m("header",{class:"toolbar",style:{justifyContent:"space-between"}},m("span",{class:"lbl",style:{margin:0}},"Ordre du menu"),Be("+ Nouvelle section",S_,"sm dark")),r,m("p",{class:"hint",style:{padding:"10px 12px",margin:0}},"Glisse les sections pour changer l\u2019ordre du menu du site."))},s=()=>{Ge(t,w_(n.sections.find(r=>r.id===P.sel.section),()=>{i()},s))};return P.refreshList=i,i(),s(),Pi("Sections","Chaque section du site est un objet 3D entour\xE9 de cartes. Choisis l\u2019objet, la fa\xE7on dont les cartes se disposent, leur type, et les tags qui servent \xE0 trier.",[],m("div",{class:"cols"},e,t))}function S_(){let n=P.content,e=zn("section",n.sections.map(t=>t.id));n.sections.push({id:e,name:{en:"New section",fr:"Nouvelle section",ca:"Nova secci\xF3",es:"Nueva secci\xF3n"},model:n.models[0]?n.models[0].id:"",layout:"carousel",card:"image",open:"strip",perPage:8,defaultTag:"",visible:!0,tags:[]}),P.sel.section=e,Te({nav:!0}),jt()}function w_(n,e,t){let i=P.content;if(!n)return m("div",{class:"card"},m("div",{class:"empty"},"Aucune section. Cr\xE9e la premi\xE8re avec \xAB + Nouvelle section \xBB."));let s=Gl(n.id),r=m("h2",null,pt(n.name)||n.id),o=m("p",{class:"hint"},`Adresse directe : \u2026/#${n.id}`),a=bt(()=>n.id,()=>{},{spell:!1,onBlur:p=>{let f=li(p.value);if(f===n.id){p.value=n.id;return}let L=zn(f,i.sections.filter(_=>_!==n).map(_=>_.id));i.posts.forEach(_=>{_.section===n.id&&(_.section=L)}),i.settings.startSection===n.id&&(i.settings.startSection=L),n.id=L,P.sel.section=L,p.value=L,o.textContent=`Adresse directe : \u2026/#${L}`,Te({list:!0})}}),l=async()=>{await Pn("Supprimer la section",s?`\xAB ${pt(n.name)} \xBB contient ${s} contenu${s>1?"s":""}. Ils seront supprim\xE9s avec elle.`:`Supprimer \xAB ${pt(n.name)} \xBB ?`,"Supprimer","danger")&&(i.posts=i.posts.filter(f=>f.section!==n.id),i.sections.splice(i.sections.indexOf(n),1),i.settings.startSection===n.id&&(i.settings.startSection=i.sections[0]?i.sections[0].id:""),P.sel.section=null,Te({nav:!0}),jt())},c=i.models.map(p=>({value:p.id,label:p.name,pic:x_(p)})),u=Object.entries($a).map(([p,f])=>({value:p,label:Bn(f.label,"fr"),hint:Bn(f.hint,"fr"),pic:m("div",{class:"pic",html:Eh(p)})})),h=Object.entries(Er).map(([p,f])=>({value:p,label:Bn(f.label,"fr"),hint:{image:"Vignette paysage, titre, lieu",portrait:"Carr\xE9 : visage ou initiales",text:"Bandeau de texte, image facultative",place:"Logo ou photo et fiche du lieu"}[p],pic:m("div",{class:"pic",html:b_(p)})})),d=m("div",{class:"f",style:{marginTop:"16px"}}),g=()=>{d.hidden=n.layout!=="map";let p=new Map;i.posts.forEach(f=>{f.published&&f.spots.forEach(L=>{let _=L.city||`${L.lat}, ${L.lon}`;p.set(_,(p.get(_)||0)+1)})}),Ge(d,m("span",{class:"lbl"},"R\xE9seau"),Vn("Relier tous les lieux d\u2019intervention par des arcs depuis le bureau",()=>n.network,f=>{n.network=f},{after:g}),m("p",{class:"hint"},p.size?`${p.size} lieux renseign\xE9s dans les contenus : ${[...p.keys()].join(", ")}. On les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB.`:"Aucun lieu pour l\u2019instant : on les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB."),n.network&&!Yi(i,n.id).some(f=>f.location)?m("p",{class:"hint",style:{color:"var(--warn)"}},"Donne une position \xE0 un contenu de cette section (ton bureau) : les arcs partent de l\xE0."):null)};g();let v=m("div",{class:"chips",role:"radiogroup","aria-label":"Ouverture"}),b=()=>Ge(v,...[["strip","Fiche 2D : images et texte en bandeau"],["focus3d","La carte vient vers la cam\xE9ra (fiche 3D)"]].map(([p,f])=>m("button",{type:"button",class:"chip",role:"radio","aria-pressed":String(n.open===p),"aria-checked":String(n.open===p),onclick:()=>{n.open=p,Te(),b()}},f)));return b(),m("div",{class:"card"},m("header",null,r,m("div",{class:"acts"},Be("Aper\xE7u",()=>$s(n.id),"sm"),Be("Contenus \u2192",()=>{P.filter.section=n.id,qs("posts")},"sm"),Be("Supprimer",l,"sm danger"))),m("div",{class:"block"},m("h3",null,"Nom et adresse"),Ji("Nom dans le menu",n,"name",{list:!0,after:()=>{r.textContent=pt(n.name)||n.id}}),m("div",{class:"grid2"},m("label",{class:"f"},m("span",null,"Identifiant"),a,o),m("div",{style:{display:"grid",gap:"10px",alignContent:"start",paddingTop:"20px"}},Vn("Visible sur le site",()=>n.visible,p=>{n.visible=p},{list:!0}),Vn("Ses contenus sont des savoir-faire, reli\xE9s aux projets",()=>n.skills,p=>{n.skills=p},{list:!0}),Vn("Section d\u2019arriv\xE9e (apr\xE8s ENTER)",()=>i.settings.startSection===n.id,p=>{i.settings.startSection=p?n.id:(i.sections.find(f=>f!==n)||{}).id||""},{list:!0})))),m("div",{class:"block"},m("h3",null,"Objet 3D",m("small",null,"le mod\xE8le au centre de la section")),Pl(c,n.model,p=>{n.model=p,Te()},"Objet 3D"),m("p",{class:"hint"},"Pour ajouter ton propre fichier Collada (.dae), passe par ",m("a",{href:"#",onclick:p=>{p.preventDefault(),qs("models")}},"Mod\xE8les 3D"),".")),m("div",{class:"block"},m("h3",null,"Disposition des cartes",m("small",null,"le style de la section")),Pl(u,n.layout,p=>{n.layout=p,g(),Te({list:!0})},"Disposition"),d),m("div",{class:"block"},m("h3",null,"Type de carte"),Pl(h,n.card,p=>{n.card=p,n.open=Er[p].open,b(),Te({list:!0})},"Type de carte"),m("div",{style:{marginTop:"14px"}},m("span",{class:"lbl"},"Au clic sur une carte"),v)),m("div",{class:"block"},m("h3",null,"Tags",m("small",null,"pour trier les contenus, comme le menu \xAB cat\xE9gories \xBB du site")),A_(n,t),m("div",{class:"grid2",style:{marginTop:"16px"}},ct("Tag affich\xE9 \xE0 l\u2019ouverture",In([{value:"",label:"Tout"},...n.tags.map(p=>({value:p.id,label:pt(p.label)||p.id}))],()=>n.defaultTag||"",p=>{n.defaultTag=p})),ct("Cartes par page",bt(()=>n.perPage,p=>{n.perPage=Math.max(1,Math.min(40,p||1))},{type:"number",min:1,max:40}),"Au-del\xE0, les fl\xE8ches du site passent \xE0 la page suivante.")),m("div",{class:"grid2",style:{marginTop:"16px"}},ct("Taille des cartes (%)",bt(()=>n.cardScale||"",p=>{p===""||p===100?delete n.cardScale:n.cardScale=Math.max(40,Math.min(250,p))},{type:"number",min:40,max:250,step:5,placeholder:"100"}),"Agrandit ou r\xE9duit les cartes 3D de cette section. 100 = taille d\u2019origine."),ct("Distance de la cam\xE9ra (%)",bt(()=>n.camera||"",p=>{p===""||p===(n.layout==="map"?58:100)?delete n.camera:n.camera=Math.max(30,Math.min(250,p))},{type:"number",min:30,max:250,step:5,placeholder:n.layout==="map"?"58":"100"}),"Plus petit : la cam\xE9ra s\u2019approche de l\u2019objet. Vide : "+(n.layout==="map"?"58 pour la carte du monde.":"100."))),n.tags.length?T_(n):null))}function E_(){return/^https?:$/.test(location.protocol)&&/\/admin\/?/.test(location.pathname)?location.origin+location.pathname.replace(/admin\/?(index\.html)?$/,""):"https://hand-coded.net/"}function T_(n){let e=E_();return m("div",{class:"f",style:{marginTop:"16px"}},m("span",{class:"lbl"},"Liens \xE0 envoyer"),m("div",{class:"chips"},n.tags.map(t=>m("button",{type:"button",class:"chip",title:e+"?tag="+t.id,onclick:async()=>{let i=e+"?tag="+t.id;try{await navigator.clipboard.writeText(i),gt("Lien copi\xE9 : "+i)}catch{gt(i,"ok",9e3)}}},(pt(t.label)||t.id)+" \u29C9"))),m("p",{class:"hint"},`Un clic copie le lien. Le site s\u2019ouvre sur l\u2019accueil, puis cette section arrive avec ce tag d\xE9j\xE0 choisi, par exemple ${e}?tag=${n.tags[0].id}. Le nom du tag marche aussi, dans n\u2019importe quelle langue (?tag=son). Pour sauter l\u2019accueil : ${e}#${n.id}/${n.tags[0].id}.`))}function A_(n,e){let t=P.content,i=a=>t.posts.filter(l=>l.section===n.id&&l.tags.includes(a)).length,s=m("div",{class:"tags-ed"}),r={gridTemplateColumns:`20px repeat(${Ln().length}, minmax(0, 1fr)) 96px 46px auto`},o=()=>{Ge(s,n.tags.length?m("div",{class:"tag-row head",style:r},m("span"),Ln().map(a=>m("span",null,$i[a])),m("span",null,"Identifiant"),m("span",null,"Contenus"),m("span")):m("p",{class:"hint",style:{margin:0}},"Pas encore de tag : tous les contenus s\u2019affichent ensemble."),...n.tags.map((a,l)=>{let c=i(a.id),u=bt(()=>a.label.en,h=>{a.label.en=h},{placeholder:"English",onBlur:()=>{if(!i(a.id)&&/^tag(-\d+)?$/.test(a.id)&&a.label.en.trim()){let h=a.id;a.id=zn(a.label.en,n.tags.filter(d=>d!==a).map(d=>d.id)),n.defaultTag===h&&(n.defaultTag=a.id),Te(),o()}}});return m("div",{class:"tag-row",style:r},m("span",{class:"n",style:{textAlign:"left"}},l+1),Ln().map(h=>h==="en"?u:bt(()=>a.label[h]??"",d=>{a.label[h]=d},{placeholder:$i[h]})),m("span",{class:"id",title:a.id},a.id),m("span",{class:"n"},c),m("span",{style:{display:"flex",gap:"2px"}},Be("\u2191",()=>{l&&(Hs(n.tags,l,l-1),Te(),o())},"sm icon ghost",{"aria-label":"Monter",disabled:!l}),Be("\u2193",()=>{l<n.tags.length-1&&(Hs(n.tags,l,l+1),Te(),o())},"sm icon ghost",{"aria-label":"Descendre",disabled:l===n.tags.length-1}),Be("\xD7",async()=>{c&&!await Pn("Supprimer le tag",`\xAB ${pt(a.label)} \xBB est utilis\xE9 par ${c} contenu${c>1?"s":""}. Il leur sera retir\xE9.`,"Supprimer","danger")||(t.posts.forEach(h=>{h.section===n.id&&(h.tags=h.tags.filter(d=>d!==a.id))}),n.tags.splice(l,1),n.defaultTag===a.id&&(n.defaultTag=""),Te(),e())},"sm icon ghost danger",{"aria-label":"Supprimer le tag"})))}),m("div",null,Be("+ Ajouter un tag",()=>{n.tags.push({id:zn("tag",n.tags.map(a=>a.id)),label:kn()}),Te(),e(),setTimeout(()=>{let a=s.querySelectorAll(".tag-row input");a.length&&a[a.length-2].focus()},0)},"sm")))};return o(),s}var C_={image:{title:"Titre",subtitle:"Sous-titre (artiste, client\u2026)",place:"Lieu",body:"Description",thumb:"Vignette de la carte"},portrait:{title:"Nom",subtitle:"R\xF4le",place:"Ville",body:"Bio courte",thumb:"Portrait"},text:{title:"Titre",subtitle:"Sous-titre",place:"Lieu",body:"Texte",thumb:"Petite image (facultative)"},place:{title:"Nom du lieu ou du bureau",subtitle:"Activit\xE9",place:"Ville affich\xE9e",body:"Adresse et coordonn\xE9es",thumb:"Logo ou photo"}};function Bl(n){let e=P.content.sections.find(r=>r.id===n.section),t=[],i=Ln(),s=r=>Rl(n.body[r]).length>0;return i.some(r=>!n.title[r])&&t.push("titre \xE0 traduire"),i.some(s)?i.every(s)||t.push("texte \xE0 traduire ("+i.filter(r=>!s(r)).map(r=>r.toUpperCase()).join(", ")+")"):t.push("pas de texte"),e&&["image","portrait"].includes(e.card)&&!n.thumb&&t.push("pas d\u2019image"),e&&e.layout==="map"&&!n.location&&t.push("pas de position"),t}function R_(){let n=P.content;if(n.sections.find(a=>a.id===P.filter.section)||(P.filter.section=n.sections[0]&&n.sections[0].id),!n.sections.length)return Pi("Contenus",null,[],m("div",{class:"card"},m("div",{class:"empty"},"Cr\xE9e d\u2019abord une section.")));let e=m("div",{class:"card sticky"}),t=m("div"),i=()=>n.sections.find(a=>a.id===P.filter.section),s=()=>{let a=P.filter.q.trim().toLowerCase();return Yi(n,P.filter.section,{all:!0}).filter(l=>(!P.filter.tag||l.tags.includes(P.filter.tag))&&(!a||[l.title.en,l.title.fr,l.subtitle.en,l.subtitle.fr,l.place.en,l.place.fr,l.id].join(" ").toLowerCase().includes(a))&&(!P.filter.status||P.filter.status==="on"&&l.published||P.filter.status==="off"&&!l.published||P.filter.status==="todo"&&Bl(l).length))},r=()=>{let a=i(),l=s(),c=P.filter.tag||P.filter.q||P.filter.status;P.filter.tag&&!a.tags.find(b=>b.id===P.filter.tag)&&(P.filter.tag="");let u=m("div",{class:"tabs",role:"tablist"},n.sections.map(b=>m("button",{type:"button",role:"tab","aria-selected":String(b.id===a.id),onclick:()=>{P.filter.section=b.id,P.filter.tag="",P.sel.post=null,r(),o()}},pt(b.name)||b.id,m("small",null,Gl(b.id))))),h=m("input",{type:"search",placeholder:"Chercher\u2026",value:P.filter.q,"aria-label":"Chercher"});h.addEventListener("input",()=>{P.filter.q=h.value,v()});let d=m("div",{class:"toolbar"},In([{value:"",label:"Tous les tags"},...a.tags.map(b=>({value:b.id,label:pt(b.label)||b.id}))],()=>P.filter.tag,b=>{P.filter.tag=b,v()}),In([{value:"",label:"Tous"},{value:"on",label:"Visibles"},{value:"off",label:"Masqu\xE9s"},{value:"todo",label:"\xC0 compl\xE9ter"}],()=>P.filter.status,b=>{P.filter.status=b,v()}),h),g=m("div");function v(){let b=s(),p=P.filter.tag||P.filter.q||P.filter.status,f=m("ul",{class:"list"},b.map((L,_)=>{let C=Bl(L),U=m("div",{class:"th"+(a.card==="portrait"?" portrait":"")},L.thumb?null:xh(pt(L.title)));return L.thumb&&(U.style.backgroundImage=`url("${Gn(L.thumb)}")`),m("li",{class:"row","data-i":_,tabindex:0,"aria-current":String(L.id===P.sel.post),onclick:()=>{P.sel.post=L.id,v(),o(),Vl(t)},onkeydown:E=>{E.key==="Enter"&&E.currentTarget.click()}},p?null:m("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),U,m("div",null,m("div",{class:"t"},pt(L.title)||m("i",{style:{color:"var(--ink-4)"}},"Sans titre")),m("div",{class:"m"},[L.tags.map(E=>{let D=a.tags.find(W=>W.id===E);return D?pt(D.label):null}).filter(Boolean).join(", "),L.date].filter(Boolean).join(" \xB7 ")||" ")),m("div",{class:"b"},L.published?null:m("span",{class:"badge off"},"masqu\xE9"),C.length?m("span",{class:"badge warn",title:C.join(", ")},"\xE0 compl\xE9ter"):null))}));p||Ah(f,(L,_)=>{let C=Yi(n,a.id,{all:!0});Hs(C,L,_),C.forEach((U,E)=>{U.order=E}),Te(),v()}),Ge(g,b.length?f:m("div",{class:"empty"},c?"Aucun contenu ne correspond.":"Aucun contenu dans cette section."),m("p",{class:"hint",style:{padding:"10px 12px",margin:0}},p?"Retire les filtres pour changer l\u2019ordre.":"Glisse pour changer l\u2019ordre des cartes sur le site."))}v(),Ge(e,u,m("div",{class:"toolbar",style:{justifyContent:"space-between"}},m("span",{class:"lbl",style:{margin:0}},`${l.length} contenu${l.length>1?"s":""}`),Be("+ Nouveau contenu",()=>P_(a),"sm dark")),d,g),P.refreshList=v},o=()=>{let a=n.posts.find(l=>l.id===P.sel.post&&l.section===P.filter.section);Ge(t,a?I_(a,r,o):m("div",{class:"card"},m("div",{class:"empty"},"Choisis un contenu dans la liste, ou cr\xE9e-en un nouveau.")))};return r(),o(),Pi("Contenus","Projets, savoir-faire, portraits, lieux : chaque contenu devient une carte dans sa section. Les textes s\u2019\xE9crivent en anglais et en fran\xE7ais.",[],m("div",{class:"cols"},e,t))}function L_(n){let e=P.content;return{id:zn("nouveau-contenu",e.posts.map(t=>t.id)),section:n.id,order:Math.max(-1,...Yi(e,n.id,{all:!0}).map(t=>t.order??0))+1,published:!1,title:kn(),subtitle:kn(),place:kn(),date:"",tags:P.filter.tag?[P.filter.tag]:[],thumb:"",thumbBack:"",body:kn(),media:[],link:"",team:[],credits:"",location:null}}function P_(n){let e=L_(n);P.content.posts.push(e),P.sel.post=e.id,P.filter.q="",P.filter.status="",Te({nav:!0}),jt(),setTimeout(()=>{let t=Rr.querySelector(".card .lang input");t&&t.focus()},30)}function I_(n,e,t){let i=P.content,s=i.sections.find(O=>O.id===n.section),r=C_[s.card],o=m("h2",null,pt(n.title)||"Sans titre"),a=()=>{o.textContent=pt(n.title)||"Sans titre"},l={list:!0},c=`media/${n.id}`,u=async()=>{await Pn("Supprimer ce contenu",`\xAB ${pt(n.title)||"Sans titre"} \xBB sera retir\xE9 du site \xE0 la prochaine publication.`,"Supprimer","danger")&&(i.posts.splice(i.posts.indexOf(n),1),i.posts.forEach(O=>{O.team=O.team.filter(G=>G!==n.id),O.skills=(O.skills||[]).filter(G=>G!==n.id)}),P.sel.post=null,Te({nav:!0}),jt())},h=()=>{let O=structuredClone(n);O.id=zn(n.id+"-copie",i.posts.map(G=>G.id)),O.order=(n.order??0)+.5,O.published=!1,dn.forEach(G=>{O.title[G]&&(O.title[G]+={fr:" (copie)",ca:" (c\xF2pia)",es:" (copia)"}[G]||" (copy)")}),i.posts.push(O),Yi(i,s.id,{all:!0}).forEach((G,X)=>{G.order=X}),P.sel.post=O.id,Te({nav:!0}),jt()},d=(O,G,X)=>{let k=m("div",{class:"prev "+s.card}),B=m("div",{class:"acts"}),ie=m("div",{class:"drop"},k,B),se=()=>{k.style.backgroundImage=n[O]?`url("${Gn(n[O])}")`:"",k.textContent=n[O]?"":O==="thumb"?xh(pt(n.title)):"",Ge(B,Be(n[O]?"Remplacer\u2026":"Choisir une image\u2026",()=>Gs("image/*",!1,oe),"sm"),n[O]?Be("Retirer",()=>{n[O]="",Te(l),se()},"sm ghost danger"):null,m("p",null,X))},oe=async Me=>{if(Me[0])try{let Le=await Cr(Me[0],c,"thumb");Li(Le.path,Le.blob),n[O]=Le.path,Te(l),se()}catch(Le){gt(Le.message,"bad",7e3)}};return Ol(ie,oe),se(),m("div",{class:"f"},m("span",{class:"lbl"},G),ie)},g=m("div",{class:"media-list"}),v=()=>{let O=m("div",{class:"media-add",role:"button",tabindex:0,onclick:()=>Gs("image/*,video/mp4,video/webm",!0,b),onkeydown:X=>{X.key==="Enter"&&X.currentTarget.click()}},m("span",null,"+ Ajouter des images ou des vid\xE9os",m("br"),m("small",null,"ou glisse-les ici")));Ol(O,b);let G=m("div",{class:"media-add",role:"button",tabindex:0,onkeydown:X=>{X.key==="Enter"&&X.currentTarget.click()},onclick:async()=>{let X=await Ul("Ajouter une vid\xE9o","Lien YouTube ou Vimeo (youtube.com/watch?v=\u2026, youtu.be/\u2026, vimeo.com/\u2026), ou adresse d\u2019une image en ligne","https://","Ajouter");!X||!/^https?:\/\/\S+$/.test(X.trim())||(n.media.push({src:X.trim()}),Te(),v())}},m("span",null,"+ Vid\xE9o YouTube / Vimeo",m("br"),m("small",null,"colle son lien (ou celui d\u2019une image en ligne)")));Ge(g,...n.media.map((X,k)=>{let B=mh(X.src),se=B==="youtube"?m("img",{src:`https://i.ytimg.com/vi/${ph(X.src)}/hqdefault.jpg`,alt:"",loading:"lazy"}):B==="vimeo"?m("span",{style:{color:"#888",font:"italic 18px Georgia, serif"}},"Vimeo"):B==="video"?m("video",{src:Gn(X.src),muted:!0,preload:"metadata",playsinline:!0}):m("img",{src:Gn(X.src),alt:"",loading:"lazy"});return m("div",{class:"media-item"},m("div",{class:"pv"},se),m("div",{class:"ft"},m("span",{title:X.src},(B==="image"?"":"\u25B6 ")+(B==="youtube"?"YouTube":B==="vimeo"?"Vimeo "+X.src.split("/").pop():decodeURIComponent(X.src.split("?")[0].split("/").pop()))),Be("\u2190",()=>{k&&(Hs(n.media,k,k-1),Te(),v())},"sm icon ghost",{"aria-label":"Avant",disabled:!k}),Be("\u2192",()=>{k<n.media.length-1&&(Hs(n.media,k,k+1),Te(),v())},"sm icon ghost",{"aria-label":"Apr\xE8s",disabled:k===n.media.length-1}),Be("\xD7",()=>{n.media.splice(k,1),Te(),v()},"sm icon ghost danger",{"aria-label":"Retirer"})),m("div",{class:"cr"},bt(()=>X.credit||"",oe=>{X.credit=oe},{placeholder:"Cr\xE9dit photo"})))}),O,G)},b=async O=>{for(let G of O)try{let X=await Cr(G,c,"media");Li(X.path,X.blob),n.media.push({src:X.path}),Te(),v()}catch(X){gt(X.message,"bad",7e3)}};v();let p=m("div",{class:"chips"}),f=()=>{Ge(p,...s.tags.map(O=>m("button",{type:"button",class:"chip","aria-pressed":String(n.tags.includes(O.id)),onclick:()=>{n.tags=n.tags.includes(O.id)?n.tags.filter(G=>G!==O.id):s.tags.map(G=>G.id).filter(G=>G===O.id||n.tags.includes(G)),Te(l),f()}},pt(O.label)||O.id)),Be("+ Nouveau tag",async()=>{let O=await Ul("Nouveau tag",`Nom du tag (section \xAB ${pt(s.name)} \xBB)`,"","Cr\xE9er");if(!O)return;let G={id:zn(O,s.tags.map(X=>X.id)),label:Object.fromEntries(dn.map(X=>[X,O]))};s.tags.push(G),n.tags.push(G.id),Te(l),f(),gt("Tag cr\xE9\xE9. Tu peux traduire son nom dans Sections.")},"sm ghost"))};f();let L=i.posts.filter(O=>O.id!==n.id&&(i.sections.find(G=>G.id===O.section)||{}).card==="portrait"),_=m("div",{class:"chips"}),C=()=>Ge(_,...L.length?L.map(O=>m("button",{type:"button",class:"chip","aria-pressed":String(n.team.includes(O.id)),onclick:()=>{n.team=n.team.includes(O.id)?n.team.filter(G=>G!==O.id):[...n.team,O.id],Te(),C()}},pt(O.title))):[m("p",{class:"hint",style:{margin:0}},"Ajoute des portraits dans une section de type \xAB Portrait \xBB pour les relier ici.")]);C();let U=O=>i.sections.find(G=>G.id===O.section)||{},E=i.posts.filter(O=>U(O).skills),D=i.posts.filter(O=>!U(O).skills&&["image","text"].includes(U(O).card)),W=s.skills||["image","text"].includes(s.card),S=m("div"),N=(O,G,X)=>{let k=i.sections.map(B=>[B,O.filter(ie=>ie.section===B.id)]).filter(([,B])=>B.length);return k.map(([B,ie])=>m("div",{style:{marginBottom:"10px"}},k.length>1?m("span",{class:"lbl"},pt(B.name)||B.id):null,m("div",{class:"chips"},ie.map(se=>m("button",{type:"button",class:"chip","aria-pressed":String(G(se)),title:se.published?"":"Masqu\xE9 sur le site",style:se.published?null:{opacity:".55"},onclick:()=>{X(se),Te(),ee()}},pt(se.title)||se.id)))))},ee=()=>{if(s.skills){let O=D.filter(G=>G.skills.includes(n.id)).length;Ge(S,D.length?N(D,G=>G.skills.includes(n.id),G=>{G.skills=G.skills.includes(n.id)?G.skills.filter(X=>X!==n.id):[...G.skills,n.id]}):m("p",{class:"hint",style:{margin:0}},"Aucun projet pour l\u2019instant."),m("p",{class:"hint"},O?`${O} projet${O>1?"s":""} reli\xE9${O>1?"s":""}. Sur le site, la fiche les fait d\xE9filer avec leur vignette, et la carte 3D prend la photo de l\u2019un d\u2019eux en fond${n.thumb?" (ici ta propre image de carte passe devant : retire-la pour voir la photo d\u2019un projet)":""}.`:"Clique les projets qui ont eu recours \xE0 ce savoir-faire."))}else Ge(S,E.length?N(E,O=>n.skills.includes(O.id),O=>{n.skills=n.skills.includes(O.id)?n.skills.filter(G=>G!==O.id):[...n.skills,O.id]}):m("p",{class:"hint",style:{margin:0}},"Aucune section de savoir-faire : coche \xAB Ses contenus sont des savoir-faire \xBB dans les r\xE9glages d\u2019une section."),E.length?m("p",{class:"hint"},"Affich\xE9s sur la fiche du projet. Un clic ouvre la fiche du savoir-faire, qui liste \xE0 son tour ses projets."):null)};W&&ee();let le=m("div"),pe=i.sections.find(O=>O.layout==="map"&&O.network),z=()=>{let O=B=>n.spots.some(ie=>ie.city===B),G=B=>{n.spots.push({city:B,lat:Hn[B][0],lon:Hn[B][1]}),Te(),z()},X=th([Bn(n.place,"en"),Bn(n.place,"fr")].join(" , ")).filter(B=>Hn[B]&&!O(B)),k=m("select",{"aria-label":"Ajouter une ville"},m("option",{value:""},"+ Ajouter une ville\u2026"),Object.keys(Hn).sort().filter(B=>!O(B)).map(B=>m("option",{value:B},B)),m("option",{value:"__other"},"Autre lieu (coordonn\xE9es)\u2026"));k.addEventListener("change",async()=>{let B=k.value;if(!B)return;if(B!=="__other"){G(B);return}let ie=await D_();ie&&(n.spots.push(ie),Te()),z()}),Ge(le,m("div",{class:"chips"},n.spots.length?n.spots.map((B,ie)=>m("span",{class:"chip on"},B.city||`${B.lat}, ${B.lon}`,m("button",{type:"button",class:"x","aria-label":"Retirer "+(B.city||"ce lieu"),onclick:()=>{n.spots.splice(ie,1),Te(),z()}},"\xD7"))):m("span",{class:"hint",style:{margin:0}},"Aucun lieu pour ce contenu.")),X.length?m("p",{class:"hint"},"Rep\xE9r\xE9 dans le champ \xAB Lieu \xBB :",X.map(B=>m("button",{type:"button",class:"chip sugg",onclick:()=>G(B)},"+ "+B))):null,m("div",{style:{marginTop:"10px",maxWidth:"320px"}},k))};z();let $=m("div"),V=()=>{let O=n.location,G=In([{value:"",label:"Pas de position"},...Object.keys(Hn).sort().map(X=>({value:X,label:X})),{value:"__other",label:"Autre (latitude / longitude)\u2026"}],()=>O?Hn[O.city]?O.city:"__other":"",X=>{X?X==="__other"?n.location={city:O?O.city:"",lat:O?O.lat:0,lon:O?O.lon:0}:n.location={city:X,lat:Hn[X][0],lon:Hn[X][1]}:n.location=null,V()},l);Ge($,m("div",{class:"grid3"},ct("Ville",G),O?ct("Latitude",bt(()=>O.lat,X=>{O.lat=+X||0},{type:"number",step:.01})):null,O?ct("Longitude",bt(()=>O.lon,X=>{O.lon=+X||0},{type:"number",step:.01})):null))};V();let re=bt(()=>n.id,()=>{},{spell:!1,onBlur:O=>{let G=li(O.value);if(G===n.id){O.value=n.id;return}let X=zn(G,i.posts.filter(k=>k!==n).map(k=>k.id));i.posts.forEach(k=>{k.team=k.team.map(B=>B===n.id?X:B),k.skills=(k.skills||[]).map(B=>B===n.id?X:B)}),n.id=X,P.sel.post=X,O.value=X,Te(l)}}),te=m("span",{class:"badge"}),J=()=>{let O=Bl(n);te.className="badge"+(O.length?" warn":""),te.textContent=O.length?"\xC0 compl\xE9ter : "+O.join(", "):"Complet"};return J(),P.onChange=J,m("div",{class:"card"},m("header",null,o,m("div",{class:"acts"},Be("Aper\xE7u",()=>$s(s.id),"sm"),Be("Dupliquer",h,"sm"),Be("Supprimer",u,"sm danger"))),m("div",{class:"block",style:{display:"flex",gap:"18px",alignItems:"center",flexWrap:"wrap"}},Vn("Visible sur le site",()=>n.published,O=>{n.published=O},l),ct("Section",In(i.sections.map(O=>({value:O.id,label:pt(O.name)||O.id})),()=>n.section,O=>{let G=i.sections.find(X=>X.id===O);n.section=O,n.tags=n.tags.filter(X=>G.tags.some(k=>k.id===X)),n.order=Math.max(-1,...Yi(i,O,{all:!0}).filter(X=>X!==n).map(X=>X.order??0))+1,P.filter.section=O,gt(`D\xE9plac\xE9 dans \xAB ${pt(G.name)} \xBB.`),jt()})),te),m("div",{class:"block"},m("h3",null,"Textes de la carte"),Ji(r.title,n,"title",{list:!0,after:a}),Ji(r.subtitle,n,"subtitle",l),Ji(r.place,n,"place",{...l,after:()=>z()}),m("div",{class:"grid2"},ct("Auteur de l\u2019\u0153uvre",bt(()=>n.author||"",O=>{n.author=O},{placeholder:"Ex. Romain Tardy"}),`Sign\xE9 sur la vignette 3D : \xAB ${pt(n.title)||"Titre"} \xB7 ${n.author||P.content.settings.name} \xBB. Vide : sign\xE9 ${P.content.settings.name}.`),m("div"),ct("Date",bt(()=>n.date,O=>{n.date=O},{...l,placeholder:"2019, ou 2017 \u2013 2019"})),ct("Lien",bt(()=>n.link,O=>{n.link=O.trim()},{type:"url",placeholder:"https://\u2026"}),s.card==="place"?"Affich\xE9 sur la fiche du lieu.":"Affich\xE9 sous la fiche : \xAB Voir le site \xBB."))),m("div",{class:"block"},m("h3",null,r.body),M_(n.body,"\xC9cris ici. Les paragraphes se r\xE9partissent tout seuls sur les panneaux du site.")),m("div",{class:"block"},m("h3",null,"Images"),d("thumb",r.thumb,s.card==="image"?"Format paysage. Sans image, la carte affiche le titre sur fond noir.":s.card==="portrait"?"Carr\xE9, cadr\xE9 sur le visage. Sans image : les initiales.":"Facultatif."),["image","portrait"].includes(s.card)?m("details",null,m("summary",{class:"lbl",style:{cursor:"pointer",margin:"6px 0 10px"}},"Dos de la carte (facultatif)"),d("thumbBack","Image au dos","Vue quand la carte est de dos. Par d\xE9faut : la vignette, p\xE2lie.")):null,s.open==="strip"?m("div",{class:"f",style:{marginTop:"6px"}},m("span",{class:"lbl"},"Images et vid\xE9os de la fiche"),g,m("p",{class:"hint"},"La premi\xE8re s\u2019affiche avant le texte, les autres apr\xE8s. Vid\xE9os MP4 ou WebM, id\xE9alement moins de 20 Mo.")):null),m("div",{class:"block"},m("h3",null,"Tags"),p),W?m("div",{class:"block"},s.skills?m("h3",null,"Projets",m("small",null,"ceux qui ont eu recours \xE0 ce savoir-faire")):m("h3",null,"Savoir-faire",m("small",null,"ceux utilis\xE9s sur ce projet")),S):null,["image","text"].includes(s.card)?m("div",{class:"block"},m("h3",null,"Qui a travaill\xE9 dessus ?",m("small",null,"les portraits s\u2019affichent sur la fiche")),_,m("div",{style:{marginTop:"12px"}},ct("Autres cr\xE9dits",bt(()=>n.credits,O=>{n.credits=O},{placeholder:"Ex. Tigre Lab, Studio X"})))):null,s.layout!=="map"?m("div",{class:"block"},m("h3",null,"Lieux d\u2019intervention",m("small",null,pe?`les points du r\xE9seau sur la carte de \xAB ${pt(pe.name)} \xBB`:"pour le r\xE9seau d\u2019une section en style \xAB Carte \xBB")),le):null,m("details",{class:"block",open:s.layout==="map"},m("summary",{class:"lbl",style:{cursor:"pointer",margin:0}},"Position sur la carte du monde",s.layout==="map"?"":" (pour le style \xAB Carte \xBB)"),m("div",{style:{marginTop:"12px"}},$)),m("details",{class:"block"},m("summary",{class:"lbl",style:{cursor:"pointer",margin:0}},"Avanc\xE9"),m("div",{class:"grid2",style:{marginTop:"12px"}},ct("Identifiant",re,"Sert aux liens \xAB \xE9quipe \xBB et au dossier des images."),ct("Dossier des fichiers",m("input",{type:"text",value:c+"/",disabled:!0})))))}function N_(){let n=P.content;n.models.find(r=>r.id===P.sel.model)||(P.sel.model=n.models[0]&&n.models[0].id);let e=m("div",{class:"card sticky"}),t=m("div"),i=()=>{Ge(e,m("header",{class:"toolbar",style:{justifyContent:"space-between"}},m("span",{class:"lbl",style:{margin:0}},`${n.models.length} mod\xE8le${n.models.length>1?"s":""}`),Be("+ Importer un .dae",dh,"sm dark")),m("ul",{class:"list"},n.models.map(r=>{let o=n.sections.filter(a=>a.model===r.id);return m("li",{class:"row",tabindex:0,"aria-current":String(r.id===P.sel.model),onclick:()=>{P.sel.model=r.id,i(),s(),Vl(t)},onkeydown:a=>{a.key==="Enter"&&a.currentTarget.click()}},m("div",{class:"th",style:{background:"#f4f4f2"}},"\u25B2"),m("div",null,m("div",{class:"t"},r.name),m("div",{class:"m"},o.length?"Utilis\xE9 par "+o.map(a=>pt(a.name)).join(", "):"Pas utilis\xE9")),m("div",{class:"b"},r.builtin?m("span",{class:"badge"},"origine"):null,P.staged.has(r.file)?m("span",{class:"badge new"},"nouveau"):null))})),m("div",{class:"block"},m("h3",null,"Importer un mod\xE8le"),m("p",{class:"hint",style:{marginTop:0}},"S\xE9lectionne ensemble le fichier .dae et ses textures (JPG, PNG). Export Collada depuis Maya, Blender, Cinema 4D\u2026 Les noms de fichiers des textures doivent correspondre \xE0 ceux cit\xE9s dans le .dae."),(()=>{let r=m("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"80px"},onclick:dh},"Glisse ici le .dae et ses textures");return Ol(r,o=>Wl(o)),r})())),e.querySelectorAll(".row .th").forEach((r,o)=>{let a=n.models[o];kl.snapshot(a).then(l=>{r.style.background=`#f4f4f2 url("${l}") center / cover`,r.textContent=""}).catch(()=>{})})},s=()=>{let r=n.models.find(_=>_.id===P.sel.model);if(!r){Ge(t,m("div",{class:"card"},m("div",{class:"empty"},"Aucun mod\xE8le.")));return}let o=m("div",{class:"model-view"}),a=m("p",{class:"msg"});o.appendChild(a);let l=()=>{kl.show(o,r,a,!0)},c=n.sections.filter(_=>_.model===r.id),u=async()=>{if(c.length){gt(`Ce mod\xE8le sert \xE0 ${c.map(_=>pt(_.name)).join(", ")}. Choisis un autre objet pour ces sections d\u2019abord.`,"bad",7e3);return}if(await Pn("Supprimer le mod\xE8le",`\xAB ${r.name} \xBB sera retir\xE9 de la liste${r.builtin?"":" et ses fichiers supprim\xE9s du d\xE9p\xF4t \xE0 la prochaine publication"}.`,"Supprimer","danger")){if(!r.builtin){let _=r.file.replace(/[^/]+$/,"");[r.file,...(r.textures||[]).map(C=>_+C)].forEach(C=>{P.staged.has(C)&&(URL.revokeObjectURL(P.staged.get(C).url),P.staged.delete(C))})}n.models.splice(n.models.indexOf(r),1),P.sel.model=null,Te({nav:!0}),jt()}},h=m("input",{type:"range",min:-180,max:180,step:5,value:r.rotationY||0}),d=m("b",null,(r.rotationY||0)+"\xB0");h.addEventListener("input",()=>{r.rotationY=+h.value,d.textContent=h.value+"\xB0",Te()}),h.addEventListener("change",l);let g=bt(()=>r.height||420,_=>{r.height=Math.max(50,Math.min(1200,_||420))},{type:"number",min:50,max:1200,step:10});g.addEventListener("change",l);let v=m("input",{type:"range",min:10,max:400,step:5,value:r.scale||100}),b=m("b",null,(r.scale||100)+" %"),p=0;v.addEventListener("input",()=>{let _=+v.value;_===100?delete r.scale:r.scale=_,b.textContent=_+" %",Te(),clearTimeout(p),p=setTimeout(l,120)});let f=Be("100 %",()=>{delete r.scale,v.value=100,b.textContent="100 %",Te(),l()},"sm ghost"),L=ct("Hauteur dans la sc\xE8ne",g,"En unit\xE9s de la sc\xE8ne : les cartes sont pos\xE9es \xE0 environ 500 du centre. 420 donne la taille des objets d\u2019origine.");L.hidden=r.scaleMode!=="fit",Ge(t,m("div",{class:"card"},m("header",null,m("h2",null,r.name),m("div",{class:"acts"},c[0]?Be("Aper\xE7u",()=>$s(c[0].id),"sm"):null,Be("Supprimer",u,"sm danger"))),o,m("div",{class:"block"},ct("Nom",bt(()=>r.name,_=>{r.name=_},{list:!0})),m("div",{class:"grid2"},ct("Taille",In([{value:"pv",label:"Comme le fichier (\xD7100, r\xE8gle de 2008)"},{value:"fit",label:"Ajuster \xE0 une hauteur"}],()=>r.scaleMode,_=>{r.scaleMode=_,L.hidden=_!=="fit",_==="fit"&&!r.height&&(r.height=420),l()})),L),m("div",{class:"f"},m("span",{class:"lbl"},"Taille de l\u2019objet ",b),m("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},v,f),m("p",{class:"hint",style:{margin:"4px 0 0"}},"Agrandit ou r\xE9duit l\u2019objet dans toutes les sections qui l\u2019utilisent, sans toucher au fichier.")),m("div",{class:"f"},m("span",{class:"lbl"},"Rotation ",d),h),ct("Faces sans texture",In([{value:"wire",label:"Fil de fer jaune (comme 2008)"},{value:"white",label:"Blanc mat"},{value:"black",label:"Noir mat"}],()=>r.untextured,_=>{r.untextured=_,l()})),m("p",{class:"hint"},"Fichier : ",m("code",null,r.file),(r.textures||[]).length?` \xB7 ${r.textures.length} texture${r.textures.length>1?"s":""}`:"",c.length?" \xB7 utilis\xE9 par "+c.map(_=>pt(_.name)).join(", "):"")))),l()};return P.refreshList=i,i(),s(),Pi("Mod\xE8les 3D","Les objets Collada (.dae) pos\xE9s au centre des sections. Ceux d\u2019origine viennent du site de 2008 ; tu peux importer les tiens.",[],m("div",{class:"cols"},e,t))}function dh(){Gs(".dae,.DAE,image/*,.tga",!0,Wl)}function D_(){let n=m("input",{type:"text",placeholder:"Ex. Puebla"}),e=m("input",{type:"number",step:"any",placeholder:"19.04"}),t=m("input",{type:"number",step:"any",placeholder:"-98.20"});return Lr("Ajouter un lieu",m("div",null,ct("Nom affich\xE9",n),m("div",{class:"grid2"},ct("Latitude",e),ct("Longitude",t)),m("p",{class:"hint"},"Dans Google Maps, un clic droit sur un endroit affiche ses coordonn\xE9es : la latitude d\u2019abord, puis la longitude.")),[{label:"Annuler",value:null,cls:"ghost"},{label:"Ajouter",cls:"dark",value:()=>n.value.trim()&&e.value!==""&&t.value!==""&&Math.abs(+e.value)<=90&&Math.abs(+t.value)<=180?{city:n.value.trim(),lat:+e.value,lon:+t.value}:null}])}function U_(){let n=document.createElement("canvas");n.width=n.height=4;let e=n.getContext("2d");return e.fillStyle="#fff",e.fillRect(0,0,4,4),new Promise(t=>n.toBlob(t,"image/png"))}async function Wl(n){let e=P.content,t=n.find(h=>/\.dae$/i.test(h.name));if(!t){gt("Il faut un fichier .dae (Collada) dans la s\xE9lection.","bad");return}if(t.size>3e7){gt("Ce .dae p\xE8se plus de 30 Mo : all\xE8ge le maillage avant de l\u2019importer.","bad",7e3);return}let i=new DOMParser().parseFromString(await t.text(),"application/xml");if(i.querySelector("parsererror")||i.documentElement.nodeName!=="COLLADA"){gt("Ce fichier n\u2019est pas un Collada lisible.","bad");return}let s=zn(t.name.replace(/\.dae$/i,""),e.models.map(h=>h.id)),r=`models/${s}/`,o=[],a=[],l=new Map;for(let h of i.querySelectorAll("library_images image init_from")){let d=(h.querySelector("ref")||h).textContent.trim();if(!d)continue;let g=decodeURIComponent(d.replace(/^file:\/*/,"").split(/[\\/]/).pop()),v=l.get(g.toLowerCase());if(v===void 0){let b=n.find(f=>f.name.toLowerCase()===g.toLowerCase());v=li(g.replace(/\.[^.]+$/,""))+"."+(b?ji(g)||"jpg":"png");let p=2;for(;o.includes(v);)v=li(g.replace(/\.[^.]+$/,""))+"-"+p+++"."+(ji(g)||"jpg");b||a.push(g),Li(r+v,b||await U_()),o.push(v),l.set(g.toLowerCase(),v)}(h.querySelector("ref")||h).textContent=v}let c=new XMLSerializer().serializeToString(i),u={id:s,name:t.name.replace(/\.dae$/i,""),file:r+s+".dae",textures:o,scaleMode:"fit",height:420,rotationY:0,untextured:o.length?"wire":"white",builtin:!1};Li(u.file,new Blob([c],{type:"model/vnd.collada+xml"}));try{Fl(c,u)}catch(h){[u.file,...o.map(d=>r+d)].forEach(d=>P.staged.delete(d)),gt("Three.js ne parvient pas \xE0 lire ce mod\xE8le : "+h.message,"bad",8e3);return}e.models.push(u),P.sel.model=s,Te({nav:!0}),P.view!=="models"?qs("models"):jt(),gt(a.length?`Mod\xE8le import\xE9. ${a.length} texture${a.length>1?"s":""} manque${a.length>1?"nt":""} (${a.join(", ")}) : remplac\xE9e${a.length>1?"s":""} par du blanc. R\xE9importe le mod\xE8le avec ces fichiers pour les voir.`:"Mod\xE8le import\xE9. Choisis-le dans une section pour l\u2019utiliser.",a.length?"bad":"ok",9e3)}function O_(){let n=[];return P.content.posts.forEach(e=>{["thumb","thumbBack"].forEach(t=>{/^https?:/.test(e[t]||"")&&n.push({p:e,get:()=>e[t],set:i=>{e[t]=i}})}),e.media.forEach(t=>{/^https?:/.test(t.src)&&mh(t.src)==="image"&&n.push({p:e,get:()=>t.src,set:i=>{t.src=i}})})}),n}function F_(){let n=O_();if(!n.length)return null;let e=new Set(n.map(s=>s.get())),t=m("div",{class:"progress",hidden:!0},m("i")),i=Be("Rapatrier dans le d\xE9p\xF4t",async()=>{i.disabled=!0,t.hidden=!1;let s=new Map,r=0,o=0,a=0;for(let l of e){let c=n.find(u=>u.get()===l).p;try{let u=await fetch(l,{mode:"cors"});if(!u.ok)throw new Error(u.status);let h=await u.blob(),d=decodeURIComponent(l.split("?")[0].split("/").pop()).replace(/\+/g," ")||"image.jpg",g=await Cr(new File([h],d,{type:h.type||"image/jpeg"}),`media/${c.id}`,"media");Li(g.path,g.blob),s.set(l,g.path),r++}catch{o++}t.firstChild.style.width=Math.round(++a/e.size*100)+"%"}n.forEach(l=>{s.has(l.get())&&l.set(s.get(l.get()))}),Te({nav:!0}),gt(o?`${r} image${r>1?"s":""} rapatri\xE9e${r>1?"s":""}. ${o} n\u2019ont pas pu \xEAtre lues depuis ce navigateur (le serveur d\u2019origine les prot\xE8ge) : t\xE9l\xE9charge-les et renvoie-les depuis la fiche du contenu.`:`${r} images rapatri\xE9es. Publie pour les envoyer dans le d\xE9p\xF4t.`,o?"bad":"ok",1e4),jt()},"sm dark");return m("div",{class:"card",style:{marginBottom:"18px"}},m("header",null,m("h2",null,`${e.size} image${e.size>1?"s":""} encore en ligne ailleurs`),m("div",{class:"acts"},i)),m("div",{class:"body"},m("p",{class:"hint",style:{marginTop:0}},"Ces images viennent de l\u2019ancien site (Squarespace) et sont affich\xE9es depuis son serveur. Pour que ton site n\u2019en d\xE9pende plus, rapatrie-les : elles seront r\xE9duites puis envoy\xE9es dans media/ \xE0 la prochaine publication."),t))}function k_(){let n=P.content,e=Vs(),t=m("div",{class:"card"},m("div",{class:"empty"},"Lecture des fichiers du d\xE9p\xF4t\u2026")),i=s=>{let r=[];return n.posts.forEach(o=>{(o.thumb===s||o.thumbBack===s||o.media.some(a=>a.src===s))&&r.push(pt(o.title)||o.id)}),n.models.forEach(o=>{(o.file===s||(o.textures||[]).some(a=>o.file.replace(/[^/]+$/,"")+a===s))&&r.push("Mod\xE8le "+o.name)}),n.settings.logo===s&&r.push("Logo"),r};return(async()=>{let s=[];try{s=P.files||(P.files=await P.backend.listFiles(["media/","models/"]))}catch(g){Ge(t,m("div",{class:"empty"},"Impossible de lister les fichiers : "+Ws(g)));return}let r=new Map(s.filter(g=>!/(^|\/)\./.test(g.path)).map(g=>[g.path,{...g,state:"online"}]));P.staged.forEach((g,v)=>r.set(v,{path:v,size:g.blob.size,state:"new"}));let o=[...r.values()].sort((g,v)=>g.path.localeCompare(v.path)),a=g=>/^models\/[^/]+$/.test(g),l=o.filter(g=>g.state==="online"&&!e.has(g.path)&&!P.deletes.has(g.path)&&!a(g.path)),c=new Set,u=Be("Supprimer la s\xE9lection",()=>{c.forEach(g=>P.deletes.add(g)),Te({nav:!0}),gt(`${c.size} fichier${c.size>1?"s":""} sera supprim\xE9 \xE0 la prochaine publication.`),jt()},"sm danger",{disabled:!0}),h=()=>{u.disabled=!c.size,u.textContent=c.size?`Supprimer la s\xE9lection (${c.size})`:"Supprimer la s\xE9lection"},d=m("table",{class:"files"},m("thead",null,m("tr",null,m("th",{style:{width:"30px"}}),m("th",{style:{width:"60px"}}),m("th",null,"Fichier"),m("th",null,"Utilis\xE9 par"),m("th",null,"Taille"),m("th",null,"\xC9tat"))),m("tbody",null,o.map(g=>{let v=i(g.path),b=/\.(jpe?g|png|webp|gif|svg)$/i.test(g.path),p=P.deletes.has(g.path),L=l.includes(g)?m("input",{type:"checkbox","aria-label":"S\xE9lectionner "+g.path}):null;return L&&L.addEventListener("change",()=>{L.checked?c.add(g.path):c.delete(g.path),h()}),m("tr",{style:p?{opacity:.5}:null},m("td",null,L),m("td",null,b?m("img",{class:"mini",src:Gn(g.path),alt:"",loading:"lazy"}):m("span",{class:"badge"},ji(g.path))),m("td",{class:"p"},g.path),m("td",null,v.length?v.join(", "):m("span",{style:{color:"var(--ink-4)"}},"\u2014")),m("td",null,Dl(g.size)),m("td",null,p?m("span",null,m("span",{class:"badge warn"},"\xE0 supprimer")," ",Be("Garder",()=>{P.deletes.delete(g.path),Te({nav:!0}),jt()},"sm ghost")):g.state==="new"?m("span",{class:"badge new"},e.has(g.path)?"\xE0 envoyer":"ajout\xE9, plus utilis\xE9"):v.length?m("span",{class:"badge"},"en ligne"):a(g.path)?m("span",{class:"badge off"},"origine"):m("span",{class:"badge off"},"inutilis\xE9")))})));Ge(t,m("header",null,m("h2",null,`${o.length} fichier${o.length>1?"s":""}`),m("div",{class:"acts"},l.length?Be(`Tout s\xE9lectionner : ${l.length} inutilis\xE9${l.length>1?"s":""}`,()=>{d.querySelectorAll("tbody input[type=checkbox]").forEach(g=>{g.checked=!0,c.add(g.closest("tr").querySelector(".p").textContent)}),h()},"sm"):null,u,P.backend.kind!=="demo"?Be(P.backend.kind==="folder"?"Relire le dossier":"Relire le d\xE9p\xF4t",()=>{P.files=null,jt()},"sm ghost"):null)),o.length?m("div",{style:{overflowX:"auto"}},d):m("div",{class:"empty"},P.backend.kind==="demo"?"En d\xE9mo, seuls les fichiers ajout\xE9s depuis ce navigateur apparaissent ici.":"Aucun fichier dans media/ ni models/."))})(),Pi("M\xE9dias","Tous les fichiers du dossier media/ et des mod\xE8les 3D. Les fichiers qui ne servent plus peuvent \xEAtre supprim\xE9s pour garder le d\xE9p\xF4t l\xE9ger.",[],F_(),t)}function B_(n){n.homeVideo=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},n.homeVideo||{});let e=n.homeVideo,t=m("span",{class:"hint",style:{margin:0}}),i=()=>{t.textContent=e.src?e.src.split("/").pop():"Aucune : les photos des projets d\xE9filent en travelling lent."},s=()=>Gs("video/mp4,video/webm,.mp4,.webm",!1,async r=>{if(r[0])try{let o=await Cr(r[0],"media/accueil","media");Li(o.path,o.blob),e.src=o.path,Te(),i(),gt("Vid\xE9o ajout\xE9e : elle part sur le site \xE0 la prochaine publication.")}catch(o){gt(o.message,"bad",8e3)}});return i(),m("div",{class:"f"},m("span",{class:"lbl"},"Vid\xE9o de l\u2019accueil, en carr\xE9s"),m("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},Be(e.src?"Remplacer la vid\xE9o\u2026":"Choisir une vid\xE9o\u2026",s,"sm"),e.src?Be("Retirer",()=>{e.src="",Te(),i()},"sm ghost"):null,t),m("p",{class:"hint"},"MP4 sans son ou avec, en boucle : un extrait de 20 \xE0 30 secondes en 720p suffit (moins de 15 Mo). Elle d\xE9marre \xE0 un endroit au hasard. Une vid\xE9o YouTube ne marche pas ici : il faut le fichier."),m("div",{style:{marginTop:"10px"}},Vn("R\xE9glage au hasard \xE0 chaque visite (grille, contraste, delay, couleur, sens)",()=>e.random!==!1,r=>{e.random=r,jt()})),e.random!==!1?m("p",{class:"hint"},"Chaque visiteur arrive sur une combinaison diff\xE9rente, puis la change avec le clavier. Coupe cet interrupteur pour fixer le r\xE9glage ci-dessous."):m("div",{class:"grid2",style:{marginTop:"10px"}},ct("Taille de grille (px)",bt(()=>e.cell,r=>{e.cell=Math.max(6,Math.min(40,+r||14))},{type:"number",min:6,max:40})),ct("Contraste",bt(()=>e.contrast,r=>{e.contrast=Math.max(.4,Math.min(3,+r||1))},{type:"number",min:.4,max:3,step:.1})),ct("Carr\xE9 maximal (%)",bt(()=>e.size,r=>{e.size=Math.max(40,Math.min(100,+r||92))},{type:"number",min:40,max:100})),ct("Delay (lissage)",bt(()=>e.delay,r=>{e.delay=Math.max(1,Math.min(8,+r||1))},{type:"number",min:1,max:8}),"Comme sur Fat-Man : valeur = valeur \u2212 (valeur \u2212 cible) / delay. 1 = imm\xE9diat, 8 au maximum. Coup\xE9 d\u2019office sur un ordinateur trop lent."),ct("Couleur des carr\xE9s",In([{value:"white",label:"Blanc"},{value:"grey",label:"Gris"},{value:"accent",label:"Couleur d\u2019accent"},{value:"source",label:"Couleurs de la vid\xE9o"}],()=>e.color,r=>{e.color=r})),ct("Les carr\xE9s grossissent",In([{value:"light",label:"\xE0 la lumi\xE8re"},{value:"dark",label:"dans l\u2019ombre"}],()=>e.mode,r=>{e.mode=r}))),m("div",{style:{marginTop:"10px"}},Vn("Les visiteurs ont un petit clavier pour r\xE9gler la vid\xE9o, activer le son et leur cam\xE9ra",()=>e.controls!==!1,r=>{e.controls=r})))}function ql(n){rh(n).forEach(t=>{document.querySelector(`link[data-hc-font][href="${CSS.escape(t)}"]`)||document.head.appendChild(m("link",{rel:"stylesheet",href:t,"data-hc-font":""}))})}var z_=[[100,"Thin 100"],[200,"Extra light 200"],[300,"Light 300"],[400,"Regular 400"],[500,"Medium 500"],[600,"Semibold 600"],[700,"Bold 700"],[800,"Extra bold 800"],[900,"Black 900"]];function H_(n){let e=m("div"),t=[...new Set(Fs.map(r=>r.group))],i=()=>Ge(e,t.map(r=>m("div",{class:"typo-group"},m("h4",null,r),Fs.filter(o=>o.group===r).map(s)))),s=r=>{let o=m("div",{class:"typo-row"}),a=r.only||["font","size","lh","weight","italic","ls","upper"],l=_=>Ci(n,r.id)[_],c=(_,C)=>{n.typo=n.typo||{};let U=n.typo[r.id]=n.typo[r.id]||{};C===""||C===null||C===void 0||C===r[_]||_==="italic"&&!C&&!r.italic||_==="upper"&&!C&&!r.upper||_==="ls"&&+C===(r.ls||0)?delete U[_]:U[_]=C,Object.keys(U).length||delete n.typo[r.id],ql(n),Te(),f(),(r.id==="logo"||r.id==="sig1")&&Bs()},u=(_,C,U={})=>{let E=m("input",{type:"number",step:U.step||1,min:U.min,max:U.max,value:l(_)??"",placeholder:U.ph});return E.addEventListener("input",()=>c(_,E.value===""?"":+E.value)),m("label",null,C,E)},h=(_,C)=>{let U=m("input",{type:"checkbox",checked:!!l(_)});return U.addEventListener("change",()=>c(_,U.checked)),m("label",{class:"ck"},U,C)},d=()=>{let _=l("font"),C=/^g:/.test(_||""),U=m("select",null,[...new Set(wr.map(D=>D.group))].map(D=>m("optgroup",{label:D},wr.filter(W=>W.group===D).map(W=>m("option",{value:W.id,selected:W.id===_},W.label+(W.id===r.font?" \xB7 d\xE9faut":""))))),m("optgroup",{label:"Google Fonts"},m("option",{value:"__g",selected:C},"Autre police Google Fonts\u2026"))),E=m("input",{type:"text",placeholder:"Nom exact, ex. Inter, Playfair Display",value:C?_.slice(2):"",spellcheck:"false"});return E.hidden=!C,U.addEventListener("change",()=>{U.value==="__g"?(E.hidden=!1,E.focus(),E.value.trim()&&c("font","g:"+E.value.trim())):(E.hidden=!0,c("font",U.value))}),E.addEventListener("change",()=>{let D=E.value.trim();D&&c("font","g:"+D)}),m("label",{class:"fam"},"Police",U,E)},g=()=>{let _=m("select",null,z_.map(([C,U])=>m("option",{value:C,selected:+l("weight")===C},U)));return _.addEventListener("change",()=>c("weight",+_.value)),m("label",null,"Graisse",_)},v=()=>{let _=m("input",{type:"text",value:l("text")??"",maxlength:4,style:{width:"70px"}});return _.addEventListener("input",()=>c("text",_.value)),m("label",null,"Lettres",_)},b=m("div",{class:"typo-sample"+(/^(bs|bseg|offh|offp|menu|ui|sig1|sig2)$/.test(r.id)?" light":"")}),p=Be("R\xE9tablir",()=>{n.typo&&delete n.typo[r.id],Te(),i(),(r.id==="logo"||r.id==="sig1")&&Bs()},"sm ghost rst"),f=()=>{let _=Ci(n,r.id);if(o.classList.toggle("changed",!!_.changed),p.hidden=!_.changed,r.id==="logo"){Ge(b,m("img",{src:ja(n.accent||"#ffcc00",n),alt:"",style:{width:"64px",height:"64px",display:"block"}})),b.style.background="#fff";return}let C=r.scale?22*(_.scale||100)/100:_.size||14;Object.assign(b.style,{fontFamily:_.css,fontSize:Math.min(C,56)+"px",lineHeight:_.lh?Math.min(_.lh,64)+"px":"1.2",fontWeight:_.weight||400,fontStyle:_.italic?"italic":"normal",letterSpacing:(_.ls||0)+"em",textTransform:_.upper?"uppercase":"none"}),b.textContent=r.sample||"Hand Coded",document.fonts&&document.fonts.load(`${_.italic?"italic ":""}${_.weight||400} ${C}px ${_.css}`).catch(()=>{})},L=m("div",{class:"typo-ctl"},a.includes("font")?d():null,a.includes("size")?u("size",r.id==="logo"?"Taille":"Taille (px)",{min:6,max:160}):null,a.includes("lh")?u("lh","Interligne (px)",{min:6,max:200,step:.5}):null,a.includes("weight")?g():null,a.includes("ls")?u("ls","Espacement (em)",{step:.01,min:-.2,max:1,ph:"0"}):null,a.includes("scale")?u("scale","Taille (%)",{min:50,max:200,step:5}):null,a.includes("text")?v():null,a.includes("italic")?h("italic","Italique"):null,a.includes("upper")?h("upper","Majuscules"):null);return Ge(o,m("div",{class:"nm"},m("b",null,r.label),r.hint?m("small",null,r.hint):null,p),L,b),f(),o};return i(),m("div",{class:"block"},m("h3",null,"Typographie",m("small",null,"police, taille, interligne, graisse de chaque texte du site")),m("p",{class:"hint"},"Par d\xE9faut, le site garde la typographie d\u2019origine. Un point jaune signale un r\xE9glage modifi\xE9 ; \xAB R\xE9tablir \xBB revient \xE0 l\u2019origine. Les polices h\xE9berg\xE9es avec le site marchent partout, m\xEAme hors ligne. Une police Google Fonts se charge depuis Google quand le site est en ligne : tape son nom exact, tel qu\u2019il appara\xEEt sur fonts.google.com."),e,m("div",{style:{marginTop:"12px"}},Be("Tout r\xE9tablir",()=>{delete n.typo,Te(),i(),Bs()},"sm ghost")))}function V_(){let n=P.content,e=n.settings,i=((E,D,W)=>{let S=m("textarea",{rows:3,placeholder:W});return S.value=(E[D]||[]).join(`
`),S.addEventListener("input",()=>{E[D]=S.value.split(`
`).map(N=>N.trim()).filter(Boolean),Te()}),S})(e.home,"ticker","Un slogan par ligne"),s=m("div",{class:"f"}),r=(E,D=[])=>{let W=new Set((e.home.ticker||[]).map(S=>S.toUpperCase()));Ge(s,m("span",{class:"lbl"},"Slogans re\xE7us",D.length?m("small",null," "+D.length):null),m("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},Be(E==="loading"?"Chargement\u2026":D.length?"Actualiser":"Afficher les slogans re\xE7us",o,"sm",{disabled:E==="loading"}),E&&E!=="loading"&&E!=="ok"?m("span",{class:"hint",style:{margin:0}},E):null),D.length?m("div",{class:"inbox"},D.map(S=>{let N=String(S.slogan).toUpperCase(),ee=W.has(N);return m("div",{class:"inbox-row"},m("span",{class:"d"},S.date?new Date(S.date).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit"}):""),m("span",{class:"s"},S.slogan),m("span",{class:"m"},[S.lang,S.tag].filter(Boolean).join(" \xB7 ")),Be(ee?"Au bandeau":"+ Bandeau",()=>{e.home.ticker=[...e.home.ticker||[],N],i.value=e.home.ticker.join(`
`),Te(),r("ok",D)},"sm ghost",{disabled:ee}))})):null)},o=async()=>{if(!/^https:\/\//.test(e.sloganInbox||"")){r("Renseigne d\u2019abord l\u2019adresse de collecte ci-dessus.");return}r("loading");try{let D=await(await fetch(e.sloganInbox+(e.sloganInbox.includes("?")?"&":"?")+"limit=500")).json();r(D.slogans&&D.slogans.length?"ok":"Aucun slogan pour l\u2019instant.",D.slogans||[])}catch{r("Lecture impossible : v\xE9rifie l\u2019adresse et que le script est d\xE9ploy\xE9 pour \xAB Tout le monde \xBB.")}};r("");let a=m("div",{class:"logo-prev"}),l=m("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"}}),c=()=>{a.style.backgroundImage=`url("${e.logo?Gn(e.logo):gh()}")`,Bs(),Ge(l,Be(e.logo?"Remplacer\u2026":"Choisir un logo\u2026",()=>Gs("image/*",!1,u),"sm"),e.logo?Be("Logo par d\xE9faut",()=>{e.logo="",Te(),c()},"sm ghost"):null,m("span",{class:"hint",style:{margin:0}},"SVG ou PNG carr\xE9, fond transparent. Affich\xE9 en haut \xE0 droite et sur l\u2019accueil."))},u=async E=>{if(E[0])try{let D=await Cr(E[0],"media/site","logo");Li(D.path,D.blob),e.logo=D.path,Te(),c()}catch(D){gt(D.message,"bad")}};c();let h=m("input",{type:"color",value:e.accent||"#ffcc00","aria-label":"Couleur d\u2019accent"}),d=m("div",{class:"swatches"}),g=E=>{e.accent=E,h.value=E,document.documentElement.style.setProperty("--accent",E),c(),Te(),v()},v=()=>Ge(d,h,...["#ffcc00","#f1b800","#ff5a1f","#e8175d","#00b3a4","#2f6bff","#111111"].map(E=>m("button",{type:"button",style:{background:E},"aria-label":E,"aria-pressed":String((e.accent||"").toLowerCase()===E),onclick:()=>g(E)})));h.addEventListener("input",()=>g(h.value)),v();let b=m("div"),p=()=>Ge(b,...e.offices.map((E,D)=>{typeof E.name!="object"&&(E.name=Object.fromEntries(dn.map(S=>[S,E.name||""])));let W=m("textarea",{rows:2,placeholder:"Adresse, une ligne par ligne"});return W.value=(E.lines||[]).join(`
`),W.addEventListener("input",()=>{E.lines=W.value.split(`
`).map(S=>S.trim()).filter(Boolean),Te()}),m("div",{class:"office-row"},Ln().map(S=>m("div",{class:"lang","data-l":S.toUpperCase()},bt(()=>E.name[S]??"",N=>{E.name[S]=N},{placeholder:"Nom ("+$i[S]+")"}))),m("div",{class:"full"},W),m("div",{class:"full"},bt(()=>E.mail,S=>{E.mail=S.trim()},{type:"email",placeholder:"contact@\u2026"})),Be("Retirer ce bureau",()=>{e.offices.splice(D,1),Te(),p()},"sm ghost danger del"))}),Be("+ Ajouter un bureau",()=>{e.offices.push({name:kn(),lines:[],mail:""}),Te(),p()},"sm",{style:{marginTop:"10px"}}));p();let f=m("div"),L=()=>Ge(f,...e.social.map((E,D)=>m("div",{class:"social-row"},bt(()=>E.label,W=>{E.label=W},{placeholder:"Instagram"}),bt(()=>E.url,W=>{E.url=W.trim()},{type:"url",placeholder:"https://\u2026"}),Be("\xD7",()=>{e.social.splice(D,1),Te(),L()},"sm icon ghost danger",{"aria-label":"Retirer"}))),Be("+ Ajouter un lien",()=>{e.social.push({label:"",url:""}),Te(),L()},"sm",{style:{marginTop:"10px"}}));L();let _=m("div",{class:"chips"});Ge(_,...dn.map(E=>m("button",{type:"button",class:"chip","aria-pressed":String(e.langs.includes(E)),onclick:()=>{if(e.langs.includes(E)){if(e.langs.length===1)return;e.langs=e.langs.filter(D=>D!==E)}else e.langs=dn.filter(D=>D===E||e.langs.includes(D));e.langs.includes(e.defaultLang)||(e.defaultLang=e.langs[0]),Te(),jt()}},$i[E])),e.langs.length>1?m("span",{class:"hint",style:{margin:"0 0 0 6px"}},"Si la langue du visiteur n\u2019est pas propos\xE9e : ",In(e.langs.map(E=>({value:E,label:$i[E]})),()=>e.defaultLang,E=>{e.defaultLang=E})):null);let U=E=>{let D=m("textarea",{rows:3});return D.value=(e.taglines[E]||[]).join(`
`),D.addEventListener("input",()=>{e.taglines[E]=D.value.split(`
`).map(W=>W.trim()).filter(Boolean),Te()}),m("div",{class:"lang","data-l":E.toUpperCase()},D)};return Pi("R\xE9glages","Identit\xE9, accueil et coordonn\xE9es, dans chaque langue du site.",[],m("div",{class:"card"},m("div",{class:"block"},m("h3",null,"Identit\xE9"),m("div",{class:"grid2"},ct("Nom du studio",bt(()=>e.name,E=>{e.name=E})),ct("Depuis",bt(()=>e.since,E=>{e.since=E},{placeholder:"2012"}))),m("div",{class:"f"},m("span",{class:"lbl"},"Logo"),m("div",{style:{display:"flex",gap:"14px",alignItems:"center"}},a,l)),m("div",{class:"f"},m("span",{class:"lbl"},"Couleur d\u2019accent"),d,m("p",{class:"hint"},"Bandeau LED, tirets des cartes, lieux, bouton ENTER."))),m("div",{class:"block"},m("h3",null,"Apparence"),Vn("Site en n\xE9gatif \xE0 l\u2019arriv\xE9e",()=>e.negative,E=>{e.negative=E}),m("p",{class:"hint"},"Toute la page s\u2019inverse : fond noir, sc\xE8ne 3D et textes en n\xE9gatif. Les images et vid\xE9os des contenus gardent leurs vraies couleurs, et la couleur d\u2019accent reste la m\xEAme."),m("div",{style:{marginTop:"12px"}},Vn("Signer les vignettes 3D (\u0153uvre \xB7 auteur \xB7 cr\xE9dit photo)",()=>e.signImages!==!1,E=>{e.signImages=E})),m("p",{class:"hint"},"Une mention discr\xE8te en bas de chaque vignette des cartes 3D, pour que l\u2019\u0153uvre d\u2019un artiste ne passe pas pour une cr\xE9ation du studio. L\u2019auteur et le cr\xE9dit photo (celui de la premi\xE8re image) se r\xE8glent dans chaque contenu."),m("div",{style:{marginTop:"12px"}},Vn("Les visiteurs basculent n\xE9gatif / positif en cliquant sur le logo",()=>e.negativeToggle!==!1,E=>{e.negativeToggle=E})),m("p",{class:"hint"},"Le logo par d\xE9faut a un anneau \xE0 la couleur d\u2019accent sur fond blanc, et blanc sur fond noir. Le choix du visiteur est gard\xE9 pour sa prochaine visite.")),H_(e),m("div",{class:"block"},m("h3",null,"Showreel"),ct("Lien de la vid\xE9o",bt(()=>e.showreel,E=>{e.showreel=E.trim()},{placeholder:"https://youtu.be/\u2026",spell:!1}),"YouTube, Vimeo ou adresse d\u2019un fichier MP4. Un bouton \xAB Showreel \xBB sous le logo l\u2019ouvre \xE0 tout moment : l\u2019\xE9cran glisse au premier plan, la vid\xE9o part son coup\xE9, le visiteur active le son d\u2019un clic. Laisse vide pour retirer le bouton.")),m("div",{class:"block"},m("h3",null,"Langues du site"),_,m("p",{class:"hint"},"Le site s\u2019ouvre dans la langue du navigateur du visiteur quand elle est propos\xE9e. Il peut ensuite en changer en bas \xE0 gauche. Le back-office affiche un champ par langue activ\xE9e.")),m("div",{class:"block"},m("h3",null,"Signature",m("small",null,"en haut \xE0 gauche du site, une ligne par ligne")),m("div",{class:"pair"},Ln().map(U))),m("div",{class:"block"},m("h3",null,"Accueil"),Ji("Invitation dans le champ",e.home,"placeholder",{hint:"Le texte gris du grand champ o\xF9 les visiteurs tapent leur bullshit slogan."}),Ji("Exemple sous le champ",e.home,"example"),ct("Slogans du bandeau LED",i,"Ils d\xE9filent en points LED tout en haut. Les slogans tap\xE9s par un visiteur s\u2019ajoutent devant, sur son \xE9cran."),ct("Collecte des slogans",bt(()=>e.sloganInbox,E=>{e.sloganInbox=E.trim()},{placeholder:"https://script.google.com/macros/s/\u2026/exec",spell:!1}),"Adresse d\u2019un script Google reli\xE9 \xE0 une feuille de calcul : chaque slogan valid\xE9 par un visiteur y est enregistr\xE9, avec la date, la langue et le tag du lien client. La mise en place prend cinq minutes, voir le fichier tools/slogans-google-sheet.gs. Vide : les slogans restent sur l\u2019\xE9cran du visiteur."),s,Ji("Bouton d\u2019entr\xE9e",e.home,"enter"),B_(e),ct("Section d\u2019arriv\xE9e",In(n.sections.map(E=>({value:E.id,label:pt(E.name)||E.id})),()=>e.startSection,E=>{e.startSection=E}))),m("div",{class:"block"},m("h3",null,"Bureaux"),b),m("div",{class:"block"},m("h3",null,"R\xE9seaux et liens"),f)))}function G_(){let n=m("div",{class:"card"},m("div",{class:"empty"},"Lecture de l\u2019historique\u2026")),e=m("div",{class:"card"});return W_(e),P.backend.kind==="demo"?(Ge(n,m("div",{class:"block"},m("h3",null,"D\xE9mo"),m("p",null,"En d\xE9mo, chaque publication remplace la pr\xE9c\xE9dente, dans ce navigateur seulement : rien n\u2019est \xE9crit dans les fichiers du site. Pour garder ton travail, exporte-le ci-dessous, ou travaille dans le dossier du site (Chrome, Edge) ou sur GitHub."),Be("Revenir au contenu d\u2019origine",async()=>{await Pn("R\xE9initialiser la d\xE9mo","Le contenu de d\xE9monstration d\u2019origine sera recharg\xE9. Une copie de ton travail reste dans les sauvegardes.","R\xE9initialiser","danger")&&(await zs({content:P.content,at:Date.now()}),await P.backend.reset(),await ci(P.draftKey),location.reload())},"danger"))),Pi("Historique",null,[],e,n)):((async()=>{try{let t=await P.backend.lastCommits(20);Ge(n,...t.map((i,s)=>m("div",{class:"commit"},m("div",null,m("b",null,i.commit.message.split(`
`)[0]),m("small",null,`${new Date(i.commit.author.date).toLocaleString("fr-FR")} \xB7 ${i.commit.author.name}`,s===0?P.backend.kind==="folder"?" \xB7 version enregistr\xE9e":" \xB7 version en ligne":"")),m("div",{style:{display:"flex",gap:"6px"}},i.html_url?m("a",{class:"btn sm ghost",href:i.html_url,target:"_blank",rel:"noopener"},"Sur GitHub"):null,s===0?null:Be("Restaurer",async()=>{if(await Pn("Restaurer cette version","Le contenu de cette version remplace ton brouillon. Rien ne change tant que tu ne publies pas. Les images supprim\xE9es depuis peuvent manquer.","Restaurer dans le brouillon"))try{P.content=await P.backend.loadAt(i.sha),Te({nav:!0}),gt("Version charg\xE9e dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(r){gt("Lecture impossible : "+Ws(r),"bad")}},"sm"))))),t.length||Ge(n,m("div",{class:"empty"},"Pas encore de version publi\xE9e."))}catch(t){Ge(n,m("div",{class:"empty"},"Impossible de lire l\u2019historique : "+Ws(t)))}})(),Pi("Historique",P.backend.kind==="folder"?"Chaque publication garde une version dans content/versions/ (les 40 derni\xE8res). Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.":"Chaque publication est une version du site. Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.",[],e,n))}function W_(n){let e=()=>new Date().toISOString().slice(0,16).replace(/[:T]/g,"-"),t=Be("Exporter le contenu (.json)",()=>{let r=m("a",{href:URL.createObjectURL(new Blob([JSON.stringify(P.content,null,1)+`
`],{type:"application/json"})),download:`hand-coded-content-${e()}.json`});document.body.appendChild(r),r.click(),r.remove(),gt("Fichier t\xE9l\xE9charg\xE9 : il contient tous les textes et r\xE9glages, avec ou sans publication.")},"sm"),i=Be("Importer un contenu\u2026",()=>Gs("application/json,.json",!1,async r=>{try{let o=JSON.parse(await r[0].text()),a=o&&o.content&&o.settings===void 0?o.content:o;if(!a||!a.settings||!Array.isArray(a.posts))throw new Error("ce fichier n\u2019est pas un contenu du site");if(!await Pn("Importer ce contenu",`\xAB ${r[0].name} \xBB remplace ton brouillon. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.`,"Importer"))return;await zs({content:P.content,at:Date.now()});let l=P.content,c=fn(a);l.models.forEach(u=>{c.models.some(h=>h.id===u.id)||c.models.push(u)}),P.content=c,Te({nav:!0}),Ar(),gt("Contenu import\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(o){gt("Import impossible : "+(o.message||o),"bad",8e3)}}),"sm ghost"),s=m("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"10px"}});Ge(n,m("div",{class:"block"},m("h3",null,"Sauvegardes"),m("p",{class:"hint",style:{marginTop:0}},"Le fichier export\xE9 contient tous les textes, r\xE9glages et liens vers les images. Il se r\xE9importe ici, ou se pose tel quel dans le dossier du site sous le nom content/content.json."),m("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},t,i),s)),(async()=>{let r=[],o=await Ai("draft-backup:"+P.draftKey);o&&o.content&&r.push(Be(`R\xE9cup\xE9rer le brouillon mis de c\xF4t\xE9 le ${new Date(o.at).toLocaleString("fr-FR")}`,async()=>{if(!await Pn("R\xE9cup\xE9rer le brouillon","Ce brouillon remplace ton brouillon actuel (qui est mis de c\xF4t\xE9 \xE0 son tour).","R\xE9cup\xE9rer"))return;let u={content:P.content,at:Date.now()};P.content=fn(o.content),await zs(u),Te({nav:!0}),Ar(),gt("Brouillon r\xE9cup\xE9r\xE9.")},"sm ghost"));let a=(await ih()).filter(u=>typeof u=="string"&&/^(draft:|demo:content:|draft-backup:)/.test(u)&&u!==P.draftKey&&u!=="draft-backup:"+P.draftKey&&!(P.backend.kind==="demo"&&u==="demo:content:v6")),l=u=>u.startsWith("demo:content:")?"publication de la d\xE9mo":u.startsWith("draft-backup:")?"brouillon mis de c\xF4t\xE9 ("+u.replace(/^draft-backup:draft:/,"").replace(/^demo:v\d+$/,"d\xE9mo").replace(/^folder:/,"dossier ")+")":u.startsWith("draft:demo:")?"brouillon de la d\xE9mo":u.startsWith("draft:folder:")?"brouillon du dossier \xAB "+u.slice(13)+" \xBB":"brouillon GitHub "+u.slice(6),c=[];for(let u of a){let h=await Ai(u),d=h&&(h.settings?h:h.content);d&&d.settings&&Array.isArray(d.posts)&&c.push({k:u,c:d,at:h&&h.at||0})}c.sort((u,h)=>h.at-u.at);for(let u of c)r.push(Be(`Reprendre : ${l(u.k)}${u.at?" du "+new Date(u.at).toLocaleString("fr-FR"):""}`,async()=>{await Pn("Reprendre ce travail","Ce contenu remplace ton brouillon (qui est mis de c\xF4t\xE9). Les images ajout\xE9es ailleurs ne suivent pas : renvoie-les si besoin. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.","Reprendre")&&(await zs({content:P.content,at:Date.now()}),P.content=fn(structuredClone(u.c)),Te({nav:!0}),Ar(),gt("Charg\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie."))},"sm ghost"));Ge(s,r)})()}function $s(n){let e={};P.recent.forEach((C,U)=>{e[U]=C.url}),P.staged.forEach((C,U)=>{e[U]=C.url}),(P.backend.kind==="demo"||P.backend.kind==="folder")&&P.backend.urls&&P.backend.urls.forEach((C,U)=>{e[U]||(e[U]=C)});let t=P.content.sections.filter(C=>C.visible),i=n||(P.view==="posts"?P.filter.section:P.view==="sections"?P.sel.section:P.view==="settings"?"__home":"")||P.content.settings.startSection;i&&i!=="__home"&&!t.find(C=>C.id===i)&&(i=t[0]&&t[0].id);let s=m("div",{class:"frame"}),r="desk",o=async()=>{let C={};for(let[U,E]of[...P.recent,...P.staged])E&&E.blob&&(C[U]=E.blob);if(P.backend.kind==="folder"&&P.backend.urls){for(let U of P.backend.urls.keys())if(!C[U])try{C[U]=await P.backend.readBlob(U)}catch{}}if(P.backend.kind==="demo"&&P.backend.urls){for(let U of P.backend.urls.keys())if(!C[U]){let E=await Ai("demo:file:"+U).catch(()=>null);E&&(C[U]=E)}}return C},a=null,l=0,c=20261102,u=m("div",{class:"preview-warn"}),h=()=>{let C=l;try{C=C||a&&a.contentWindow&&a.contentWindow.HC_SITE_VERSION||0}catch{}if(C>=c){u.classList.remove("on");return}u.textContent="Le moteur du site dans "+(P.backend.kind==="github"?"le d\xE9p\xF4t":"ce dossier")+" est plus ancien que le back-office : l\u2019aper\xE7u ne montre pas tous tes r\xE9glages (typographie, showreel\u2026). Remplace assets/hc/site.bundle.js et site.js par la derni\xE8re version"+(P.backend.kind==="github"?", envoie-les sur GitHub, puis attends une minute.":"."),u.classList.add("on")},d=async C=>{!a||C.source!==a.contentWindow||!C.data||C.data.type!=="hc-preview-ready"||(l=C.data.version||0,h(),a.contentWindow.postMessage({type:"hc-preview",data:window.__hcPreview,blobs:await o()},"*"))};window.addEventListener("message",d);let g=()=>{window.__hcPreview={content:structuredClone(P.content),files:e,start:i==="__home"?"":i},a=m("iframe",{title:"Aper\xE7u du site",allow:"fullscreen"}),l=0,u.classList.remove("on"),window.HC_SITE_HTML||a.addEventListener("load",()=>setTimeout(h,3e3)),window.HC_SITE_HTML?a.srcdoc=window.HC_SITE_HTML:a.src=Zi+"index.html?preview="+Date.now();let C={desk:["100%","100%"],tab:["820px","1080px"],mob:["390px","780px"]}[r];a.style.width=C[0],a.style.height=C[1],a.style.maxHeight="100%",Ge(s,a)},v=m("div",{class:"sizes",role:"group","aria-label":"Taille d\u2019\xE9cran"}),b=()=>Ge(v,...[["desk","Bureau"],["tab","Tablette"],["mob","Mobile"]].map(([C,U])=>m("button",{type:"button","aria-pressed":String(r===C),onclick:()=>{r=C,b(),g()}},U)));b();let p=m("select",{"aria-label":"Section"},m("option",{value:"__home",selected:i==="__home"},"Accueil"),t.map(C=>m("option",{value:C.id,selected:C.id===i},pt(C.name))));p.addEventListener("change",()=>{i=p.value,g()});let f=()=>{_.remove(),document.removeEventListener("keydown",L),window.removeEventListener("message",d)},L=C=>{C.key==="Escape"&&document.activeElement&&!document.activeElement.closest("iframe")&&f()},_=m("div",{class:"preview",role:"dialog","aria-label":"Aper\xE7u"},m("div",{class:"bar"},m("b",null,"Aper\xE7u"),m("span",null,Xs()?"avec les modifications non publi\xE9es":"identique au site en ligne"),m("span",{class:"sp"}),p,v,Be("Recharger",g,"sm"),Be("Fermer",f,"sm primary")),u,s);document.body.appendChild(_),document.addEventListener("keydown",L),g()}var en="hc-admin";function Ch(){let n={};try{n=JSON.parse(localStorage.getItem(en)||"{}")}catch{}try{let e=sessionStorage.getItem(en+":token");e&&!n.token&&(n.token=e)}catch{}return n}function q_(){let n=/^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);if(!n)return{};let e=location.pathname.split("/").filter(Boolean);return{owner:n[1],repo:e.length>1&&e[0]!=="admin"?e[0]:`${n[1]}.github.io`}}async function Za(n){let e=m("img",{src:Zi+"assets/hc/ui/logo-default.svg",alt:""}),t=m("h1",null,"Hand Coded.");X_(e,t);let i={};try{let p=await fetch("config.json",{cache:"no-store"});p.ok&&(i=await p.json())}catch{}let s=Ch(),r=q_(),o=p=>s[p]||i[p]||r[p]||"",a=m("input",{type:"text",value:o("owner"),required:!0,autocomplete:"username",spellcheck:"false"}),l=m("input",{type:"text",value:o("repo"),required:!0,spellcheck:"false"}),c=m("input",{type:"text",value:o("branch")||"main",spellcheck:"false"}),u=m("input",{type:"text",value:o("root"),placeholder:"(racine du d\xE9p\xF4t)",spellcheck:"false"}),h=m("input",{type:"password",value:s.token||"",required:!0,autocomplete:"current-password",placeholder:"github_pat_\u2026",spellcheck:"false"});[a,l].forEach(p=>p.addEventListener("change",()=>{let f=Lh({owner:a.value,repo:l.value});f.owner&&(a.value=f.owner),f.repo&&(l.value=f.repo)}));let d=m("input",{type:"checkbox",checked:!!s.remember}),g=m("p",{class:"err",role:"alert",hidden:!n},n||""),v=m("button",{type:"submit",class:"btn primary"},"Se connecter"),b=m("form",{onsubmit:async p=>{p.preventDefault(),g.hidden=!0,v.disabled=!0,v.textContent="Connexion\u2026";let f={owner:a.value.trim(),repo:l.value.trim(),branch:c.value.trim()||"main",root:u.value.trim(),token:h.value.trim(),remember:d.checked};try{await Ph(f)}catch(L){g.textContent="Connexion impossible : "+Ws(L),g.hidden=!1,v.disabled=!1,v.textContent="Se connecter"}}},m("h2",null,"Connexion"),m("p",{class:"lead"},"Le back-office publie directement dans ton d\xE9p\xF4t GitHub. Il lui faut un jeton d\u2019acc\xE8s limit\xE9 \xE0 ce d\xE9p\xF4t."),m("details",null,m("summary",null,"Cr\xE9er le jeton (2 minutes)"),m("ol",null,m("li",null,"Ouvre ",m("a",{href:"https://github.com/settings/personal-access-tokens/new",target:"_blank",rel:"noopener"},"GitHub \u203A Fine-grained tokens \u203A Generate new token"),"."),m("li",null,"Repository access : \xAB Only select repositories \xBB, choisis le d\xE9p\xF4t du site."),m("li",null,"Permissions \u203A Repository \u203A ",m("b",null,"Contents : Read and write"),". Rien d\u2019autre."),m("li",null,"Choisis une date d\u2019expiration, g\xE9n\xE8re, et colle le jeton ci-dessous."))),g,m("div",{class:"grid2"},ct("Propri\xE9taire (compte GitHub)",a),ct("D\xE9p\xF4t",l)),ct("Jeton d\u2019acc\xE8s",h,"Il reste dans ce navigateur et ne part que vers api.github.com."),m("details",{style:{background:"#fff"}},m("summary",null,"Options avanc\xE9es"),m("div",{class:"grid2",style:{marginTop:"12px"}},ct("Branche",c),ct("Dossier du site dans le d\xE9p\xF4t",u,"Vide si le site est \xE0 la racine."))),m("label",{class:"switch",style:{margin:"4px 0 16px"}},d,"Rester connect\xE9e sur cet ordinateur"),m("div",{class:"actions"},v,Be("Essayer sans GitHub (d\xE9mo)",()=>Ih(),"ghost")),await $_());Ge(Ka,m("div",{class:"login"},m("aside",{class:"side"},m("div",null,e,t,m("p",null,"Back-office du site : sections, objets 3D, contenus, tags.")),m("small",null,"Moteur 3D d\u2019apr\xE8s le site Fat-Man Collective de 2008.")),b)),(a.value&&l.value?h:a).focus()}async function X_(n,e){try{let t=window.HC_CONTENT;if(!t){let o=await fetch(Zi+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!o.ok)return;t=await o.json()}let i=fn(structuredClone(t)).settings;ql(i);let s=i.taglines&&(i.taglines.fr||i.taglines.en)||[];e.textContent=s[0]||i.name||"Hand Coded.",Object.assign(e.style,_h(i));let r=()=>{let o=i.logo?Zi+i.logo:ja(i.accent||"#ffcc00",i);n.src=o,vh(o)};r(),yh(i,r)}catch{}}async function Rh(){try{if(localStorage.getItem(en+":h-reading"))return localStorage.removeItem(en+":h-reading"),await ci("folder:handle"),null;localStorage.setItem(en+":h-reading","1")}catch{}let n=await Ai("folder:handle").catch(()=>null);try{localStorage.removeItem(en+":h-reading")}catch{}return n||null}async function $_(){let n=m("div",{class:"folder-card"});if(!Xi.supported())return Ge(n,m("h3",null,"Travailler dans le dossier du site"),m("p",null,"Ce navigateur ne sait pas \xE9crire dans un dossier de l\u2019ordinateur. Ouvre ce back-office dans Chrome ou Edge pour que \xAB Publier \xBB enregistre directement dans les fichiers du site. Sinon, utilise GitHub, ou exporte ton travail depuis Historique \u203A Sauvegardes.")),n;let e=await Rh(),t=m("p",{class:"err",role:"alert",hidden:!0}),i=async()=>{t.hidden=!0;try{let s=await window.showDirectoryPicker({id:"hand-coded-site",mode:"readwrite"});await eo(s)}catch(s){if(s&&s.name==="AbortError")return;t.textContent="Ouverture impossible : "+(s.message||s),t.hidden=!1}};return Ge(n,m("h3",null,"Travailler dans le dossier du site"),m("p",null,"Sans GitHub : choisis le dossier du site sur ton ordinateur (celui qui contient index.html et content). \xAB Publier \xBB y \xE9crit directement les textes, images et mod\xE8les. Tu peux ensuite d\xE9placer, copier ou envoyer ce dossier : tout est dedans."),t,m("div",{class:"actions"},e?Be(`Rouvrir le dossier \xAB ${e.name} \xBB`,async()=>{t.hidden=!0;try{await eo(e,!0)}catch(s){t.textContent="Ce dossier n\u2019est plus accessible (d\xE9plac\xE9 ou renomm\xE9 ?) : choisis-le \xE0 nouveau. "+(s.message||""),t.hidden=!1}},"primary"):null,Be(e?"Choisir un autre dossier\u2026":"Choisir le dossier du site\u2026",i,e?"ghost":"primary"))),n}async function eo(n,e){let t=new Xi(n);if(!await t.permission(!0))throw new Error("acc\xE8s refus\xE9");await t.check();let i=await t.load();await t.prepare(i);try{await Os("folder:handle",n),localStorage.setItem(en+":mode","folder")}catch{}P.backend=t,P.draftKey="draft:folder:"+n.name,await Xl(i)}function Y_(){try{localStorage.removeItem(en+":mode")}catch{}if(fh){location.reload();return}zl().then(()=>{P.content=null,Za()})}function Lh(n){let e={...n},t=/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.repo||"")||/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.owner||"");return t&&(e.owner=t[1],e.repo=t[2]),e.owner=String(e.owner||"").trim().replace(/^@/,"").replace(/\/+$/,""),e.repo=String(e.repo||"").trim().replace(/\.git$/i,"").replace(/^.*\//,""),e.branch=String(e.branch||"").trim()||"main",e.root=String(e.root||"").trim().replace(/^\/+|\/+$/g,""),e.token=String(e.token||"").trim(),e}var Nl=n=>Object.assign(new Error(n),{status:0});async function Ph(n,e){n=Lh(n);let t=new qa(n);try{await t.check()}catch(s){if(s.status===404){let r=null;try{r=await t.req("/user")}catch{}throw Nl(`GitHub ne trouve pas le d\xE9p\xF4t \xAB ${n.owner}/${n.repo} \xBB`+(r?` (le jeton appartient au compte \xAB ${r.login} \xBB)`:"")+". V\xE9rifie le propri\xE9taire et le nom du d\xE9p\xF4t, tels qu\u2019ils apparaissent dans l\u2019adresse github.com/propri\xE9taire/d\xE9p\xF4t.")}throw s}try{await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`)}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/branches?per_page=30`)).map(o=>o.name)}catch{}throw Nl(`la branche \xAB ${t.cfg.branch} \xBB n\u2019existe pas dans ${n.owner}/${n.repo}.`+(r.length?` Branches du d\xE9p\xF4t : ${r.join(", ")}.`:""))}let i;try{i=await t.load()}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/git/trees/${encodeURIComponent(t.cfg.branch)}?recursive=1`)).tree.filter(a=>a.type==="blob"&&/(^|\/)content\/content\.json$/.test(a.path)).map(a=>a.path.replace(/\/?content\/content\.json$/,""))}catch{}if(r.length===1)n.root=r[0],t.cfg.root=r[0],i=await t.load(),e||setTimeout(()=>gt(`Site trouv\xE9 dans le dossier \xAB ${r[0]||"(racine)"} \xBB du d\xE9p\xF4t : r\xE9glage corrig\xE9.`),400);else throw Nl(`pas de content/content.json dans ${n.root?"le dossier \xAB "+n.root+" \xBB":"la racine"} du d\xE9p\xF4t.`+(r.length?` Il y en a dans : ${r.map(o=>o||"(racine)").join(", ")}. Indique le bon dans Options avanc\xE9es \u203A Dossier du site.`:" Envoie d\u2019abord les fichiers du site dans le d\xE9p\xF4t."))}P.head=await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`).then(s=>s.object.sha);try{localStorage.setItem(en,JSON.stringify({owner:n.owner,repo:n.repo,branch:n.branch,root:n.root,remember:!!n.remember,token:n.remember?n.token:void 0})),n.remember?sessionStorage.removeItem(en+":token"):sessionStorage.setItem(en+":token",n.token)}catch{}P.backend=t,P.cfg=n,P.draftKey=`draft:${n.owner}/${n.repo}@${t.cfg.branch}`,await Xl(i)}function j_(){try{let n=JSON.parse(localStorage.getItem(en)||"{}");delete n.token,localStorage.setItem(en,JSON.stringify(n)),sessionStorage.removeItem(en+":token")}catch{}location.reload()}async function Ih(){try{localStorage.removeItem(en+":mode")}catch{}P.backend=new Xa(Zi),P.draftKey="draft:demo:v6";let n=await P.backend.load();await P.backend.prepare(n),await Xl(n)}async function Xl(n){P.content=n,P.base=JSON.stringify(n);try{ql(n.settings),document.fonts&&await Promise.race([Promise.all(ah(n.settings).map(t=>document.fonts.load(t).catch(()=>{}))),new Promise(t=>setTimeout(t,2500))])}catch{}await p_(),document.documentElement.style.setProperty("--accent",P.content.settings.accent||"#ffcc00");let e=(location.hash.match(/^#\/(\w+)/)||[])[1];Th.some(([t])=>t===e)&&(P.view=e),Ar()}document.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="s"&&P.content&&(n.preventDefault(),Hl())});window.addEventListener("beforeunload",()=>{P.content&&zl()});(async function(){try{if(fh){await Ih();return}let e=Ch(),t="";try{t=localStorage.getItem(en+":mode")||""}catch{}if(t==="folder"&&Xi.supported()){let i=await Rh();if(i)try{if(await new Xi(i).permission(!1)){await eo(i,!0);return}}catch{}return Za()}if(e.token&&e.owner&&e.repo)try{await Ph(e,!0);return}catch(i){return Za("Reconnexion impossible : "+Ws(i))}await Za()}catch(e){console.error(e),Ge(Ka,m("p",{class:"boot"},"Le back-office n\u2019a pas pu d\xE9marrer : "+(e.message||e)))}})();window.__admin={S:P,publish:Hl,go:qs,openPreview:$s,importModelFiles:Wl,startFolder:eo};})();
