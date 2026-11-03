/* Généré depuis assets/hc/admin.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var bl="160";var Fh=0,Jl=1,kh=2;var Du=1,Bh=2,Kn=3,Fn=0,hn=1,gn=2;var _i=0,Ms=1,Zl=2,Kl=3,Ql=4,zh=5,Bi=100,Hh=101,Vh=102,ec=103,tc=104,Gh=200,Wh=201,qh=202,Xh=203,Go=204,Wo=205,$h=206,Yh=207,jh=208,Jh=209,Zh=210,Kh=211,Qh=212,ed=213,td=214,nd=0,id=1,sd=2,la=3,rd=4,ad=5,od=6,ld=7,za=0,cd=1,ud=2,yi=0,hd=1,dd=2,fd=3,pd=4,md=5,gd=6,nc="attached",vd="detached",Uu=300,Es=301,Ts=302,qo=303,Xo=304,Ha=306,bi=1e3,Qt=1001,$o=1002,Yt=1003,ic=1004;var lo=1005;var an=1006,_d=1007;var Mi=1008;var xi=1009,yd=1010,xd=1011,Ml=1012,Ou=1013,vi=1014,ei=1015,hr=1016,Fu=1017,ku=1018,Hi=1020,bd=1021,bn=1023,Md=1024,Sd=1025,Vi=1026,As=1027,wd=1028,Bu=1029,Ed=1030,zu=1031,Hu=1033,co=33776,uo=33777,ho=33778,fo=33779,sc=35840,rc=35841,ac=35842,oc=35843,Vu=36196,lc=37492,cc=37496,uc=37808,hc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,vc=37815,_c=37816,yc=37817,xc=37818,bc=37819,Mc=37820,Sc=37821,po=36492,wc=36494,Ec=36495,Td=36283,Tc=36284,Ac=36285,Cc=36286;var ca=2300,ua=2301,mo=2302,Rc=2400,Lc=2401,Pc=2402,Ad=2500;var Gu=3e3,Gi=3001,Cd=3200,Rd=3201,Sl=0,Ld=1,Mn="",Ut="srgb",ni="srgb-linear",wl="display-p3",Va="display-p3-linear",ha="linear",Lt="srgb",da="rec709",fa="p3";var ns=7680;var Ic=519,Pd=512,Id=513,Nd=514,Wu=515,Dd=516,Ud=517,Od=518,Fd=519,Nc=35044;var Dc="300 es",Yo=1035,ti=2e3,pa=2001,Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=1234567,or=Math.PI/180,Cs=180/Math.PI;function Ci(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function on(n,e,t){return Math.max(e,Math.min(t,n))}function El(n,e){return(n%e+e)%e}function kd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Bd(n,e,t){return n!==e?(t-n)/(e-n):0}function lr(n,e,t){return(1-t)*n+t*e}function zd(n,e,t,i){return lr(n,e,1-Math.exp(-t*i))}function Hd(n,e=1){return e-Math.abs(El(n,e*2)-e)}function Vd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Gd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qd(n,e){return n+Math.random()*(e-n)}function Xd(n){return n*(.5-Math.random())}function $d(n){n!==void 0&&(Uc=n);let e=Uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yd(n){return n*or}function jd(n){return n*Cs}function jo(n){return(n&n-1)===0&&n!==0}function Jd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ma(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zd(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),g=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*g,a*c);break;case"YXY":n.set(l*g,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*g,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Us={DEG2RAD:or,RAD2DEG:Cs,generateUUID:Ci,clamp:on,euclideanModulo:El,mapLinear:kd,inverseLerp:Bd,lerp:lr,damp:zd,pingpong:Hd,smoothstep:Vd,smootherstep:Gd,randInt:Wd,randFloat:qd,randFloatSpread:Xd,seededRandom:$d,degToRad:Yd,radToDeg:jd,isPowerOfTwo:jo,ceilPowerOfTwo:Jd,floorPowerOfTwo:ma,setQuaternionFromProperEuler:Zd,normalize:sn,denormalize:_s},dt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],g=i[5],_=i[8],b=s[0],m=s[3],p=s[6],L=s[1],v=s[4],C=s[7],O=s[2],w=s[5],U=s[8];return r[0]=o*b+a*L+l*O,r[3]=o*m+a*v+l*w,r[6]=o*p+a*C+l*U,r[1]=c*b+u*L+h*O,r[4]=c*m+u*v+h*w,r[7]=c*p+u*C+h*U,r[2]=f*b+g*L+_*O,r[5]=f*m+g*v+_*w,r[8]=f*p+g*C+_*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,g=c*r-o*l,_=t*h+i*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=h*b,e[1]=(s*c-u*i)*b,e[2]=(a*i-s*o)*b,e[3]=f*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=g*b,e[7]=(i*l-c*t)*b,e[8]=(o*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},go=new ut;function qu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kd(){let n=dr("canvas");return n.style.display="block",n}var Oc={};function cr(n){n in Oc||(Oc[n]=!0,console.warn(n))}var Fc=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kc=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[ni]:{transfer:ha,primaries:da,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:Lt,primaries:da,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:ha,primaries:fa,toReference:n=>n.applyMatrix3(kc),fromReference:n=>n.applyMatrix3(Fc)},[wl]:{transfer:Lt,primaries:fa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(kc),fromReference:n=>n.applyMatrix3(Fc).convertLinearToSRGB()}},Qd=new Set([ni,Va]),wt={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Fr[e].toReference,s=Fr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fr[n].primaries},getTransfer:function(n){return n===Mn?ha:Fr[n].transfer}};function Ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var is,ga=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=dr("canvas")),is.width=e.width,is.height=e.height;let i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ss(t[i]/255)*255):t[i]=Ss(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ef=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_o(s[o].image)):r.push(_o(s[o]))}else r=_o(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ga.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tf=0,vn=class n extends Si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qt,s=Qt,r=an,o=Mi,a=bn,l=xi,c=n.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ci(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gi?Ut:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bi:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bi:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Gi:Gu}set encoding(e){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gi?Ut:Mn}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Uu;vn.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],g=l[5],_=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,C=(g+1)/2,O=(p+1)/2,w=(u+f)/4,U=(h+b)/4,G=(_+m)/4;return v>C&&v>O?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=U/i):C>O?C<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),i=w/s,r=G/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=U/r,s=G/r),this.set(i,s,r,t),this}let L=Math.sqrt((m-_)*(m-_)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(L)<.001&&(L=1),this.x=(m-_)/L,this.y=(h-b)/L,this.z=(f-u)/L,this.w=Math.acos((c+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends Si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gi?Ut:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zo=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],g=r[o+1],_=r[o+2],b=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=b;return}if(h!==b||l!==f||c!==g||u!==_){let m=1-a,p=l*f+c*g+u*_+h*b,L=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let O=Math.sqrt(v),w=Math.atan2(O,p*L);m=Math.sin(m*w)/O,a=Math.sin(a*w)/O}let C=a*L;if(l=l*m+f*C,c=c*m+g*C,u=u*m+_*C,h=h*m+b*C,m===1-a){let O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*g-c*f,e[t+1]=l*_+u*f+c*h-a*g,e[t+2]=c*_+u*g+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*g*_,this._y=c*g*h-f*u*_,this._z=c*u*_+f*g*h,this._w=c*u*h-f*g*_;break;case"YXZ":this._x=f*u*h+c*g*_,this._y=c*g*h-f*u*_,this._z=c*u*_-f*g*h,this._w=c*u*h+f*g*_;break;case"ZXY":this._x=f*u*h-c*g*_,this._y=c*g*h+f*u*_,this._z=c*u*_+f*g*h,this._w=c*u*h-f*g*_;break;case"ZYX":this._x=f*u*h-c*g*_,this._y=c*g*h+f*u*_,this._z=c*u*_-f*g*h,this._w=c*u*h+f*g*_;break;case"YZX":this._x=f*u*h+c*g*_,this._y=c*g*h+f*u*_,this._z=c*u*_-f*g*h,this._w=c*u*h-f*g*_;break;case"XZY":this._x=f*u*h-c*g*_,this._y=c*g*h-f*u*_,this._z=c*u*_+f*g*h,this._w=c*u*h+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>h){let g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>h){let g=2*Math.sqrt(1+a-i-h);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+h-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yo=new z,Bc=new kn,dn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Br.subVectors(this.max,nr),ss.subVectors(e.a,nr),rs.subVectors(e.b,nr),as.subVectors(e.c,nr),di.subVectors(rs,ss),fi.subVectors(as,rs),Di.subVectors(ss,as);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Di.z,Di.y,di.z,0,-di.x,fi.z,0,-fi.x,Di.z,0,-Di.x,-di.y,di.x,0,-fi.y,fi.x,0,-Di.y,Di.x,0];return!xo(t,ss,rs,as,Br)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,ss,rs,as,Br))?!1:(zr.crossVectors(di,fi),t=[zr.x,zr.y,zr.z],xo(t,ss,rs,as,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xn=[new z,new z,new z,new z,new z,new z,new z,new z],Tn=new z,kr=new dn,ss=new z,rs=new z,as=new z,di=new z,fi=new z,Di=new z,nr=new z,Br=new z,zr=new z,Ui=new z;function xo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ui.fromArray(n,r);let a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var nf=new dn,ir=new z,bo=new z,wi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):nf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(bo)),this.expandByPoint(ir.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new z,Mo=new z,Hr=new z,pi=new z,So=new z,Vr=new z,wo=new z,fr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mo.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Mo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=pi.dot(this.direction),l=-pi.dot(Hr),c=pi.lengthSq(),u=Math.abs(1-o*o),h,f,g,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let b=1/u;h*=b,f*=b,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mo).addScaledVector(Hr,f),g}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,s,r){So.subVectors(t,e),Vr.subVectors(i,e),wo.crossVectors(So,Vr);let o=this.direction.dot(wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);let l=a*this.direction.dot(Vr.crossVectors(pi,Vr));if(l<0)return null;let c=a*this.direction.dot(So.cross(pi));if(c<0||l+c>o)return null;let u=-a*pi.dot(wo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,g,_,b,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,g,_,b,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,g,_,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=g,p[7]=_,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,g=o*h,_=a*u,b=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+_*c,t[5]=f-b*c,t[9]=-a*l,t[2]=b-f*c,t[6]=_+g*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,g=l*h,_=c*u,b=c*h;t[0]=f+b*a,t[4]=_*a-g,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=g*a-_,t[6]=b+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,g=l*h,_=c*u,b=c*h;t[0]=f-b*a,t[4]=-o*h,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*u,t[9]=b-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,g=o*h,_=a*u,b=a*h;t[0]=l*u,t[4]=_*c-g,t[8]=f*c+b,t[1]=l*h,t[5]=b*c+f,t[9]=g*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,g=o*c,_=a*l,b=a*c;t[0]=l*u,t[4]=b-f*h,t[8]=_*h+g,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*h+_,t[10]=f-b*h}else if(e.order==="XZY"){let f=o*l,g=o*c,_=a*l,b=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+b,t[5]=o*u,t[9]=g*h-_,t[2]=_*h-g,t[6]=a*u,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,rf)}lookAt(e,t,i){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),mi.crossVectors(i,pn),mi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),mi.crossVectors(i,pn)),mi.normalize(),Gr.crossVectors(pn,mi),s[0]=mi.x,s[4]=Gr.x,s[8]=pn.x,s[1]=mi.y,s[5]=Gr.y,s[9]=pn.y,s[2]=mi.z,s[6]=Gr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],g=i[13],_=i[2],b=i[6],m=i[10],p=i[14],L=i[3],v=i[7],C=i[11],O=i[15],w=s[0],U=s[4],G=s[8],S=s[12],D=s[1],ee=s[5],le=s[9],me=s[13],H=s[2],Y=s[6],V=s[10],ie=s[14],ne=s[3],J=s[7],ae=s[11],se=s[15];return r[0]=o*w+a*D+l*H+c*ne,r[4]=o*U+a*ee+l*Y+c*J,r[8]=o*G+a*le+l*V+c*ae,r[12]=o*S+a*me+l*ie+c*se,r[1]=u*w+h*D+f*H+g*ne,r[5]=u*U+h*ee+f*Y+g*J,r[9]=u*G+h*le+f*V+g*ae,r[13]=u*S+h*me+f*ie+g*se,r[2]=_*w+b*D+m*H+p*ne,r[6]=_*U+b*ee+m*Y+p*J,r[10]=_*G+b*le+m*V+p*ae,r[14]=_*S+b*me+m*ie+p*se,r[3]=L*w+v*D+C*H+O*ne,r[7]=L*U+v*ee+C*Y+O*J,r[11]=L*G+v*le+C*V+O*ae,r[15]=L*S+v*me+C*ie+O*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],g=e[14],_=e[3],b=e[7],m=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*g-i*l*g)+b*(+t*l*g-t*c*f+r*o*f-s*o*g+s*c*u-r*l*u)+m*(+t*c*h-t*a*g-r*o*h+i*o*g+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],g=e[11],_=e[12],b=e[13],m=e[14],p=e[15],L=h*m*c-b*f*c+b*l*g-a*m*g-h*l*p+a*f*p,v=_*f*c-u*m*c-_*l*g+o*m*g+u*l*p-o*f*p,C=u*b*c-_*h*c+_*a*g-o*b*g-u*a*p+o*h*p,O=_*h*l-u*b*l-_*a*f+o*b*f+u*a*m-o*h*m,w=t*L+i*v+s*C+r*O;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/w;return e[0]=L*U,e[1]=(b*f*r-h*m*r-b*s*g+i*m*g+h*s*p-i*f*p)*U,e[2]=(a*m*r-b*l*r+b*s*c-i*m*c-a*s*p+i*l*p)*U,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*g-i*l*g)*U,e[4]=v*U,e[5]=(u*m*r-_*f*r+_*s*g-t*m*g-u*s*p+t*f*p)*U,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*p-t*l*p)*U,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*g+t*l*g)*U,e[8]=C*U,e[9]=(_*h*r-u*b*r-_*i*g+t*b*g+u*i*p-t*h*p)*U,e[10]=(o*b*r-_*a*r+_*i*c-t*b*c-o*i*p+t*a*p)*U,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*g-t*a*g)*U,e[12]=O*U,e[13]=(u*b*s-_*h*s+_*i*f-t*b*f-u*i*m+t*h*m)*U,e[14]=(_*a*s-o*b*s-_*i*l+t*b*l+o*i*m-t*a*m)*U,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*U,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,g=r*u,_=r*h,b=o*u,m=o*h,p=a*h,L=l*c,v=l*u,C=l*h,O=i.x,w=i.y,U=i.z;return s[0]=(1-(b+p))*O,s[1]=(g+C)*O,s[2]=(_-v)*O,s[3]=0,s[4]=(g-C)*w,s[5]=(1-(f+p))*w,s[6]=(m+L)*w,s[7]=0,s[8]=(_+v)*U,s[9]=(m-L)*U,s[10]=(1-(f+b))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,u=1/o,h=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ti){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(a===ti)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===pa)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,g=(i+s)*u,_,b;if(a===ti)_=(o+r)*h,b=-2*h;else if(a===pa)_=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=b,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},os=new z,An=new lt,sf=new z(0,0,0),rf=new z(1,1,1),mi=new z,Gr=new z,pn=new z,zc=new lt,Hc=new kn,ya=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ya.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},af=0,Vc=new z,ls=new kn,Yn=new lt,Wr=new z,sr=new z,of=new z,lf=new kn,Gc=new z(1,0,0),Wc=new z(0,1,0),qc=new z(0,0,1),cf={type:"added"},uf={type:"removed"},zt=class n extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new ya,i=new kn,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ut}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(sr,Wr,this.up):Yn.lookAt(Wr,sr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Yn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new z,jn=new z,Eo=new z,Jn=new z,cs=new z,us=new z,Xc=new z,To=new z,Ao=new z,Co=new z,qr=!1,ys=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),jn.subVectors(i,t),Eo.subVectors(e,t);let o=Cn.dot(Cn),a=Cn.dot(jn),l=Cn.dot(Eo),c=jn.dot(jn),u=jn.dot(Eo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,g=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-g-_,_,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,s,r,o,a,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),jn.subVectors(e,t),Cn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Cn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,i),us.subVectors(r,i),To.subVectors(e,i);let l=cs.dot(To),c=us.dot(To);if(l<=0&&c<=0)return t.copy(i);Ao.subVectors(e,s);let u=cs.dot(Ao),h=us.dot(Ao);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(cs,o);Co.subVectors(e,r);let g=cs.dot(Co),_=us.dot(Co);if(_>=0&&g<=_)return t.copy(r);let b=g*c-l*_;if(b<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(us,a);let m=u*_-g*h;if(m<=0&&h-u>=0&&g-_>=0)return Xc.subVectors(r,s),a=(h-u)/(h-u+(g-_)),t.copy(s).addScaledVector(Xc,a);let p=1/(m+b+f);return o=b*p,a=f*p,t.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Ro(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var st=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=El(e,1),t=on(t,0,1),i=on(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ro(o,r,e+1/3),this.g=Ro(o,r,e),this.b=Ro(o,r,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=Xu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return wt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(on(Kt.r*255,0,255))*65536+Math.round(on(Kt.g*255,0,255))*256+Math.round(on(Kt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Ut){wt.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,s=Kt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Xr);let i=lr(gi.h,Xr.h,t),s=lr(gi.s,Xr.s,t),r=lr(gi.l,Xr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new st;st.NAMES=Xu;var hf=0,si=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Ms,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Go&&(i.blendSrc=this.blendSrc),this.blendDst!==Wo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new z,$r=new dt,Sn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}};var ba=class extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ma=class extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Bt=class extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var df=0,xn=new lt,Lo=new zt,hs=new z,mn=new dn,rr=new dn,qt=new z,wn=class n extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?Ma:ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(mn.min,rr.min),mn.expandByPoint(qt),qt.addVectors(mn.max,rr.max),mn.expandByPoint(qt)):(mn.expandByPoint(rr.min),mn.expandByPoint(rr.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),qt.add(hs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new z,u[D]=new z;let h=new z,f=new z,g=new z,_=new dt,b=new dt,m=new dt,p=new z,L=new z;function v(D,ee,le){h.fromArray(s,D*3),f.fromArray(s,ee*3),g.fromArray(s,le*3),_.fromArray(o,D*2),b.fromArray(o,ee*2),m.fromArray(o,le*2),f.sub(h),g.sub(h),b.sub(_),m.sub(_);let me=1/(b.x*m.y-m.x*b.y);isFinite(me)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(g,-b.y).multiplyScalar(me),L.copy(g).multiplyScalar(b.x).addScaledVector(f,-m.x).multiplyScalar(me),c[D].add(p),c[ee].add(p),c[le].add(p),u[D].add(L),u[ee].add(L),u[le].add(L))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let D=0,ee=C.length;D<ee;++D){let le=C[D],me=le.start,H=le.count;for(let Y=me,V=me+H;Y<V;Y+=3)v(i[Y+0],i[Y+1],i[Y+2])}let O=new z,w=new z,U=new z,G=new z;function S(D){U.fromArray(r,D*3),G.copy(U);let ee=c[D];O.copy(ee),O.sub(U.multiplyScalar(U.dot(ee))).normalize(),w.crossVectors(G,ee);let me=w.dot(u[D])<0?-1:1;l[D*4]=O.x,l[D*4+1]=O.y,l[D*4+2]=O.z,l[D*4+3]=me}for(let D=0,ee=C.length;D<ee;++D){let le=C[D],me=le.start,H=le.count;for(let Y=me,V=me+H;Y<V;Y+=3)S(i[Y+0]),S(i[Y+1]),S(i[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,g=e.count;f<g;f+=3){let _=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),g=0,_=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*u;for(let p=0;p<u;p++)f[_++]=c[g++]}return new Sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],g=e(f,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new lt,Oi=new fr,Yr=new wi,Yc=new z,ds=new z,fs=new z,ps=new z,Po=new z,jr=new z,Jr=new dt,Zr=new dt,Kr=new dt,jc=new z,Jc=new z,Zc=new z,Qr=new z,ea=new z,ln=class extends zt{constructor(e=new wn,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Po.fromBufferAttribute(h,e),o?jr.addScaledVector(Po,u):jr.addScaledVector(Po.sub(t),u))}t.add(jr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Yr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Yr,Yc)===null||Oi.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&($c.copy(r).invert(),Oi.copy(e.ray).applyMatrix4($c),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){let m=f[_],p=o[m.materialIndex],L=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let C=L,O=v;C<O;C+=3){let w=a.getX(C),U=a.getX(C+1),G=a.getX(C+2);s=ta(this,p,e,i,c,u,h,w,U,G),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let m=_,p=b;m<p;m+=3){let L=a.getX(m),v=a.getX(m+1),C=a.getX(m+2);s=ta(this,o,e,i,c,u,h,L,v,C),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){let m=f[_],p=o[m.materialIndex],L=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let C=L,O=v;C<O;C+=3){let w=C,U=C+1,G=C+2;s=ta(this,p,e,i,c,u,h,w,U,G),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let m=_,p=b;m<p;m+=3){let L=m,v=m+1,C=m+2;s=ta(this,o,e,i,c,u,h,L,v,C),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ff(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fn,a),l===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:n}}function ta(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ds),n.getVertexPosition(l,fs),n.getVertexPosition(c,ps);let u=ff(n,e,t,i,ds,fs,ps,Qr);if(u){s&&(Jr.fromBufferAttribute(s,a),Zr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),u.uv=ys.getInterpolation(Qr,ds,fs,ps,Jr,Zr,Kr,new dt)),r&&(Jr.fromBufferAttribute(r,a),Zr.fromBufferAttribute(r,l),Kr.fromBufferAttribute(r,c),u.uv1=ys.getInterpolation(Qr,ds,fs,ps,Jr,Zr,Kr,new dt),u.uv2=u.uv1),o&&(jc.fromBufferAttribute(o,a),Jc.fromBufferAttribute(o,l),Zc.fromBufferAttribute(o,c),u.normal=ys.getInterpolation(Qr,ds,fs,ps,jc,Jc,Zc,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};ys.getNormal(ds,fs,ps,h.normal),u.face=h}return u}var pr=class n extends wn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,g=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function _(b,m,p,L,v,C,O,w,U,G,S){let D=C/U,ee=O/G,le=C/2,me=O/2,H=w/2,Y=U+1,V=G+1,ie=0,ne=0,J=new z;for(let ae=0;ae<V;ae++){let se=ae*ee-me;for(let ue=0;ue<Y;ue++){let I=ue*D-le;J[b]=I*L,J[m]=se*v,J[p]=H,c.push(J.x,J.y,J.z),J[b]=0,J[m]=0,J[p]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(ue/U),h.push(1-ae/G),ie+=1}}for(let ae=0;ae<G;ae++)for(let se=0;se<U;se++){let ue=f+se+Y*ae,I=f+se+Y*(ae+1),k=f+(se+1)+Y*(ae+1),B=f+(se+1)+Y*ae;l.push(ue,I,B),l.push(I,k,B),ne+=6}a.addGroup(g,ne,S),g+=ne,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function rn(n){let e={};for(let t=0;t<n.length;t++){let i=Rs(n[t]);for(let s in i)e[s]=i[s]}return e}function pf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $u(n){return n.getRenderTarget()===null?n.outputColorSpace:wt.workingColorSpace}var mf={clone:Rs,merge:rn},gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Sa=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends Sa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(or*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=-90,gs=1,Ko=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(ms,gs,e,t);s.layers=this.layers,this.add(s);let r=new kt(ms,gs,e,t);r.layers=this.layers,this.add(r);let o=new kt(ms,gs,e,t);o.layers=this.layers,this.add(o);let a=new kt(ms,gs,e,t);a.layers=this.layers,this.add(a);let l=new kt(ms,gs,e,t);l.layers=this.layers,this.add(l);let c=new kt(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},wa=class extends vn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qo=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gi?Ut:Mn),this.texture=new wa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pr(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:_i});r.uniforms.tEquirect.value=t;let o=new ln(s,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=an),new Ko(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Io=new z,_f=new z,yf=new ut,Qn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Io.subVectors(i,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||yf.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new wi,na=new z,mr=class{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],g=s[8],_=s[9],b=s[10],m=s[11],p=s[12],L=s[13],v=s[14],C=s[15];if(i[0].setComponents(l-r,f-c,m-g,C-p).normalize(),i[1].setComponents(l+r,f+c,m+g,C+p).normalize(),i[2].setComponents(l+o,f+u,m+_,C+L).normalize(),i[3].setComponents(l-o,f-u,m-_,C-L).normalize(),i[4].setComponents(l-a,f-h,m-b,C-v).normalize(),t===ti)i[5].setComponents(l+a,f+h,m+b,C+v).normalize();else if(t===pa)i[5].setComponents(a,h,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xf(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let h=c.array,f=c.usage,g=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,f),c.onUploadCallback();let b;if(h instanceof Float32Array)b=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=n.SHORT;else if(h instanceof Uint32Array)b=n.UNSIGNED_INT;else if(h instanceof Int32Array)b=n.INT;else if(h instanceof Int8Array)b=n.BYTE;else if(h instanceof Uint8Array)b=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,u,h){let f=u.array,g=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),g.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let b=0,m=_.length;b<m;b++){let p=_[b];t?n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var gr=class n extends wn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,g=[],_=[],b=[],m=[];for(let p=0;p<u;p++){let L=p*f-o;for(let v=0;v<c;v++){let C=v*h-r;_.push(C,-L,0),b.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let L=0;L<a;L++){let v=L+c*p,C=L+c*(p+1),O=L+1+c*(p+1),w=L+1+c*p;g.push(v,C,w),g.push(C,O,w)}this.setIndex(g),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
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
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`
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
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,bp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Cm=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,qm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,$m=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:bf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:wf,alphatest_fragment:Ef,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:Cf,batching_pars_vertex:Rf,batching_vertex:Lf,begin_vertex:Pf,beginnormal_vertex:If,bsdfs:Nf,iridescence_fragment:Df,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:Hf,color_pars_vertex:Vf,color_vertex:Gf,common:Wf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:$f,displacementmap_vertex:Yf,emissivemap_fragment:jf,emissivemap_pars_fragment:Jf,colorspace_fragment:Zf,colorspace_pars_fragment:Kf,envmap_fragment:Qf,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:pp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_fragment:cp,lightmap_pars_fragment:up,lights_lambert_fragment:hp,lights_lambert_pars_fragment:dp,lights_pars_begin:fp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:vp,lights_phong_pars_fragment:_p,lights_physical_fragment:yp,lights_physical_pars_fragment:xp,lights_fragment_begin:bp,lights_fragment_maps:Mp,lights_fragment_end:Sp,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Cp,map_pars_fragment:Rp,map_particle_fragment:Lp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Np,morphcolor_vertex:Dp,morphnormal_vertex:Up,morphtarget_pars_vertex:Op,morphtarget_vertex:Fp,normal_fragment_begin:kp,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:Hp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:$p,opaque_fragment:Yp,packing:jp,premultiplied_alpha_fragment:Jp,project_vertex:Zp,dithering_fragment:Kp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:rm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:um,specularmap_pars_fragment:hm,tonemapping_fragment:dm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:vm,uv_vertex:_m,worldpos_vertex:ym,background_vert:xm,background_frag:bm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:wm,cube_frag:Em,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:Cm,distanceRGBA_frag:Rm,equirect_vert:Lm,equirect_frag:Pm,linedashed_vert:Im,linedashed_frag:Nm,meshbasic_vert:Dm,meshbasic_frag:Um,meshlambert_vert:Om,meshlambert_frag:Fm,meshmatcap_vert:km,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:Hm,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:qm,meshtoon_vert:Xm,meshtoon_frag:$m,points_vert:Ym,points_frag:jm,shadow_vert:Jm,shadow_frag:Zm,sprite_vert:Km,sprite_frag:Qm},ye={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},On={basic:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:rn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:rn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:rn([ye.points,ye.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:rn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:rn([ye.common,ye.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:rn([ye.sprite,ye.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:rn([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:rn([ye.lights,ye.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};On.physical={uniforms:rn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var ia={r:0,b:0,g:0};function eg(n,e,t,i,s,r,o){let a=new st(0),l=r===!0?0:1,c,u,h=null,f=0,g=null;function _(m,p){let L=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?b(a,l):v&&v.isColor&&(b(v,1),L=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||L)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ha)?(u===void 0&&(u=new ln(new pr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Rs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=wt.getTransfer(v.colorSpace)!==Lt,(h!==v||f!==v.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ln(new gr(2,2),new ri({name:"BackgroundMaterial",uniforms:Rs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=wt.getTransfer(v.colorSpace)!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function b(m,p){m.getRGB(ia,$u(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,b(a,l)},render:_}}function tg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,u=!1;function h(H,Y,V,ie,ne){let J=!1;if(o){let ae=b(ie,V,Y);c!==ae&&(c=ae,g(c.object)),J=p(H,ie,V,ne),J&&L(H,ie,V,ne)}else{let ae=Y.wireframe===!0;(c.geometry!==ie.id||c.program!==V.id||c.wireframe!==ae)&&(c.geometry=ie.id,c.program=V.id,c.wireframe=ae,J=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,G(H,Y,V,ie),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function g(H){return i.isWebGL2?n.bindVertexArray(H):r.bindVertexArrayOES(H)}function _(H){return i.isWebGL2?n.deleteVertexArray(H):r.deleteVertexArrayOES(H)}function b(H,Y,V){let ie=V.wireframe===!0,ne=a[H.id];ne===void 0&&(ne={},a[H.id]=ne);let J=ne[Y.id];J===void 0&&(J={},ne[Y.id]=J);let ae=J[ie];return ae===void 0&&(ae=m(f()),J[ie]=ae),ae}function m(H){let Y=[],V=[],ie=[];for(let ne=0;ne<s;ne++)Y[ne]=0,V[ne]=0,ie[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:V,attributeDivisors:ie,object:H,attributes:{},index:null}}function p(H,Y,V,ie){let ne=c.attributes,J=Y.attributes,ae=0,se=V.getAttributes();for(let ue in se)if(se[ue].location>=0){let k=ne[ue],B=J[ue];if(B===void 0&&(ue==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),ue==="instanceColor"&&H.instanceColor&&(B=H.instanceColor)),k===void 0||k.attribute!==B||B&&k.data!==B.data)return!0;ae++}return c.attributesNum!==ae||c.index!==ie}function L(H,Y,V,ie){let ne={},J=Y.attributes,ae=0,se=V.getAttributes();for(let ue in se)if(se[ue].location>=0){let k=J[ue];k===void 0&&(ue==="instanceMatrix"&&H.instanceMatrix&&(k=H.instanceMatrix),ue==="instanceColor"&&H.instanceColor&&(k=H.instanceColor));let B={};B.attribute=k,k&&k.data&&(B.data=k.data),ne[ue]=B,ae++}c.attributes=ne,c.attributesNum=ae,c.index=ie}function v(){let H=c.newAttributes;for(let Y=0,V=H.length;Y<V;Y++)H[Y]=0}function C(H){O(H,0)}function O(H,Y){let V=c.newAttributes,ie=c.enabledAttributes,ne=c.attributeDivisors;V[H]=1,ie[H]===0&&(n.enableVertexAttribArray(H),ie[H]=1),ne[H]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Y),ne[H]=Y)}function w(){let H=c.newAttributes,Y=c.enabledAttributes;for(let V=0,ie=Y.length;V<ie;V++)Y[V]!==H[V]&&(n.disableVertexAttribArray(V),Y[V]=0)}function U(H,Y,V,ie,ne,J,ae){ae===!0?n.vertexAttribIPointer(H,Y,V,ne,J):n.vertexAttribPointer(H,Y,V,ie,ne,J)}function G(H,Y,V,ie){if(i.isWebGL2===!1&&(H.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let ne=ie.attributes,J=V.getAttributes(),ae=Y.defaultAttributeValues;for(let se in J){let ue=J[se];if(ue.location>=0){let I=ne[se];if(I===void 0&&(se==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),se==="instanceColor"&&H.instanceColor&&(I=H.instanceColor)),I!==void 0){let k=I.normalized,B=I.itemSize,X=t.get(I);if(X===void 0)continue;let q=X.buffer,oe=X.type,ge=X.bytesPerElement,Me=i.isWebGL2===!0&&(oe===n.INT||oe===n.UNSIGNED_INT||I.gpuType===Ou);if(I.isInterleavedBufferAttribute){let Qe=I.data,$=Qe.stride,Xt=I.offset;if(Qe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ue.locationSize;Ve++)O(ue.location+Ve,Qe.meshPerAttribute);H.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Ve=0;Ve<ue.locationSize;Ve++)C(ue.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Ve=0;Ve<ue.locationSize;Ve++)U(ue.location+Ve,B/ue.locationSize,oe,k,$*ge,(Xt+B/ue.locationSize*Ve)*ge,Me)}else{if(I.isInstancedBufferAttribute){for(let Qe=0;Qe<ue.locationSize;Qe++)O(ue.location+Qe,I.meshPerAttribute);H.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Qe=0;Qe<ue.locationSize;Qe++)C(ue.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Qe=0;Qe<ue.locationSize;Qe++)U(ue.location+Qe,B/ue.locationSize,oe,k,B*ge,B/ue.locationSize*Qe*ge,Me)}}else if(ae!==void 0){let k=ae[se];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(ue.location,k);break;case 3:n.vertexAttrib3fv(ue.location,k);break;case 4:n.vertexAttrib4fv(ue.location,k);break;default:n.vertexAttrib1fv(ue.location,k)}}}}w()}function S(){le();for(let H in a){let Y=a[H];for(let V in Y){let ie=Y[V];for(let ne in ie)_(ie[ne].object),delete ie[ne];delete Y[V]}delete a[H]}}function D(H){if(a[H.id]===void 0)return;let Y=a[H.id];for(let V in Y){let ie=Y[V];for(let ne in ie)_(ie[ne].object),delete ie[ne];delete Y[V]}delete a[H.id]}function ee(H){for(let Y in a){let V=a[Y];if(V[H.id]===void 0)continue;let ie=V[H.id];for(let ne in ie)_(ie[ne].object),delete ie[ne];delete V[H.id]}}function le(){me(),u=!0,c!==l&&(c=l,g(c.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:le,resetDefaultState:me,dispose:S,releaseStatesOfGeometry:D,releaseStatesOfProgram:ee,initAttributes:v,enableAttribute:C,disableUnusedAttributes:w}}function ng(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let g,_;if(s)g=n,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{g.multiDrawArraysWEBGL(r,u,0,h,0,f);let _=0;for(let b=0;b<f;b++)_+=h[b];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ig(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,C=o||e.has("OES_texture_float"),O=v&&C,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:L,vertexTextures:v,floatFragmentTextures:C,floatVertexTextures:O,maxSamples:w}}function sg(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Qn,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let g=h.length!==0||f||i!==0||s;return s=f,i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,g){let _=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let L=r?0:i,v=L*4,C=p.clippingState||null;l.value=C,C=u(_,f,v,g);for(let O=0;O!==v;++O)C[O]=t[O];p.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,g,_){let b=h!==null?h.length:0,m=null;if(b!==0){if(m=l.value,_!==!0||m===null){let p=g+b*4,L=f.matrixWorldInverse;a.getNormalMatrix(L),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,C=g;v!==b;++v,C+=4)o.copy(h[v]).applyMatrix4(L,a),o.normal.toArray(m,C),m[C+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function rg(n){let e=new WeakMap;function t(o,a){return a===qo?o.mapping=Es:a===Xo&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===qo||a===Xo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qo(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ls=class extends Sa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xs=4,Kc=[.125,.215,.35,.446,.526,.582],zi=20,No=new Ls,Qc=new st,Do=null,Uo=0,Oo=0,ki=(1+Math.sqrt(5))/2,vs=1/ki,eu=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ki,vs),new z(0,ki,-vs),new z(vs,0,ki),new z(-vs,0,ki),new z(ki,vs,0),new z(-ki,vs,0)],Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Uo,Oo),e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:hr,format:bn,colorSpace:ni,depthBuffer:!1},s=tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(r)),this._blurMaterial=og(r,e,t)}return s}_compileMaterial(e){let t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,s){let a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Qc),u.toneMapping=yi,u.autoClear=!1;let g=new Rn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new ln(new pr,g),b=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,b=!0):(g.color.copy(Qc),b=!0);for(let p=0;p<6;p++){let L=p%3;L===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):L===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;sa(s,L*v,p>2?v:0,v,v),u.setRenderTarget(s),b&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Es||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,No)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=eu[(s-1)%eu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ln(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*zi-1),b=r/_,m=isFinite(r)?1+Math.floor(u*b):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let p=[],L=0;for(let U=0;U<zi;++U){let G=U/b,S=Math.exp(-G*G/2);p.push(S),U===0?L+=S:U<m&&(L+=2*S)}for(let U=0;U<p.length;U++)p[U]=p[U]/L;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;let C=this._sizeLods[s],O=3*C*(s>v-xs?s-v+xs:0),w=4*(this._cubeSize-C);sa(t,O,w,3*C,2*C),l.setRenderTarget(t),l.render(h,No)}};function ag(n){let e=[],t=[],i=[],s=n,r=n-xs+1+Kc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xs?l=Kc[o-n+xs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,_=6,b=3,m=2,p=1,L=new Float32Array(b*_*g),v=new Float32Array(m*_*g),C=new Float32Array(p*_*g);for(let w=0;w<g;w++){let U=w%3*2/3-1,G=w>2?0:-1,S=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];L.set(S,b*_*w),v.set(f,m*_*w);let D=[w,w,w,w,w,w];C.set(D,p*_*w)}let O=new wn;O.setAttribute("position",new Sn(L,b)),O.setAttribute("uv",new Sn(v,m)),O.setAttribute("faceIndex",new Sn(C,p)),e.push(O),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tu(n,e,t){let i=new ii(n,e,t);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function og(n,e,t){let i=new Float32Array(zi),s=new z(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function nu(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function iu(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function lg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===qo||l===Xo,u=l===Es||l===Ts;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ea(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Ea(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ug(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let b=f.morphAttributes[_];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let _ in f)e.update(f[_],n.ARRAY_BUFFER);let g=h.morphAttributes;for(let _ in g){let b=g[_];for(let m=0,p=b.length;m<p;m++)e.update(b[m],n.ARRAY_BUFFER)}}function c(h){let f=[],g=h.index,_=h.attributes.position,b=0;if(g!==null){let L=g.array;b=g.version;for(let v=0,C=L.length;v<C;v+=3){let O=L[v+0],w=L[v+1],U=L[v+2];f.push(O,w,w,U,U,O)}}else if(_!==void 0){let L=_.array;b=_.version;for(let v=0,C=L.length/3-1;v<C;v+=3){let O=v+0,w=v+1,U=v+2;f.push(O,w,w,U,U,O)}}else return;let m=new(qu(f)?Ma:ba)(f,1);m.version=b;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hg(n,e,t,i){let s=i.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function u(g,_){n.drawElements(r,_,a,g*l),t.update(_,r,1)}function h(g,_,b){if(b===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,a,g*l,b),t.update(_,r,b)}function f(g,_,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(g[p]/l,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,a,g,0,b);let p=0;for(let L=0;L<b;L++)p+=_[L];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function dg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fg(n,e){return n[0]-e[0]}function pg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function mg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0,b=r.get(u);if(b===void 0||b.count!==_){let H=function(){le.dispose(),r.delete(u),u.removeEventListener("dispose",H)};b!==void 0&&b.texture.dispose();let L=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],U=u.morphAttributes.color||[],G=0;L===!0&&(G=1),v===!0&&(G=2),C===!0&&(G=3);let S=u.attributes.position.count*G,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let ee=new Float32Array(S*D*4*_),le=new _a(ee,S,D,_);le.type=ei,le.needsUpdate=!0;let me=G*4;for(let Y=0;Y<_;Y++){let V=O[Y],ie=w[Y],ne=U[Y],J=S*D*4*Y;for(let ae=0;ae<V.count;ae++){let se=ae*me;L===!0&&(o.fromBufferAttribute(V,ae),ee[J+se+0]=o.x,ee[J+se+1]=o.y,ee[J+se+2]=o.z,ee[J+se+3]=0),v===!0&&(o.fromBufferAttribute(ie,ae),ee[J+se+4]=o.x,ee[J+se+5]=o.y,ee[J+se+6]=o.z,ee[J+se+7]=0),C===!0&&(o.fromBufferAttribute(ne,ae),ee[J+se+8]=o.x,ee[J+se+9]=o.y,ee[J+se+10]=o.z,ee[J+se+11]=ne.itemSize===4?o.w:1)}}b={count:_,texture:le,size:new dt(S,D)},r.set(u,b),u.addEventListener("dispose",H)}let m=0;for(let L=0;L<f.length;L++)m+=f[L];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",b.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",b.size)}else{let g=f===void 0?0:f.length,_=i[u.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<g;v++){let C=_[v];C[0]=v,C[1]=f[v]}_.sort(pg);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(fg);let b=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let C=a[v],O=C[0],w=C[1];O!==Number.MAX_SAFE_INTEGER&&w?(b&&u.getAttribute("morphTarget"+v)!==b[O]&&u.setAttribute("morphTarget"+v,b[O]),m&&u.getAttribute("morphNormal"+v)!==m[O]&&u.setAttribute("morphNormal"+v,m[O]),s[v]=w,p+=w):(b&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let L=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",L),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function gg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ta=class extends vn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vi&&(i=vi),i===void 0&&u===As&&(i=Hi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ju=new vn,Ju=new Ta(1,1);Ju.compareFunction=Wu;var Zu=new _a,Ku=new Zo,Qu=new wa,su=[],ru=[],au=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);function Os(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function bg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),Vt(t,i)}}function Mg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ou.set(i),n.uniformMatrix3fv(this.addr,!1,ou),Vt(t,i)}}function Sg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;au.set(i),n.uniformMatrix4fv(this.addr,!1,au),Vt(t,i)}}function wg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Eg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function Tg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function Ag(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Cg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Pg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Ig(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ju:ju;t.setTexture2D(e||r,s)}function Ng(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ku,s)}function Dg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qu,s)}function Ug(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zu,s)}function Og(n){switch(n){case 5126:return vg;case 35664:return _g;case 35665:return yg;case 35666:return xg;case 35674:return bg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return wg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Cg;case 36294:return Rg;case 36295:return Lg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}function Fg(n,e){n.uniform1fv(this.addr,e)}function kg(n,e){let t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function Bg(n,e){let t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function zg(n,e){let t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function Hg(n,e){let t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vg(n,e){let t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gg(n,e){let t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wg(n,e){n.uniform1iv(this.addr,e)}function qg(n,e){n.uniform2iv(this.addr,e)}function Xg(n,e){n.uniform3iv(this.addr,e)}function $g(n,e){n.uniform4iv(this.addr,e)}function Yg(n,e){n.uniform1uiv(this.addr,e)}function jg(n,e){n.uniform2uiv(this.addr,e)}function Jg(n,e){n.uniform3uiv(this.addr,e)}function Zg(n,e){n.uniform4uiv(this.addr,e)}function Kg(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ju,r[o])}function Qg(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ku,r[o])}function e0(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qu,r[o])}function t0(n,e,t){let i=this.cache,s=e.length,r=Ga(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zu,r[o])}function n0(n){switch(n){case 5126:return Fg;case 35664:return kg;case 35665:return Bg;case 35666:return zg;case 35674:return Hg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return qg;case 35668:case 35672:return Xg;case 35669:case 35673:return $g;case 5125:return Yg;case 36294:return jg;case 36295:return Jg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}var el=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}},tl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n0(t.type)}},nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Fo=/(\w+)(\])?(\[|\.)?/g;function cu(n,e){n.seq.push(e),n.map[e.id]=e}function i0(n,e,t){let i=n.name,s=i.length;for(Fo.lastIndex=0;;){let r=Fo.exec(i),o=Fo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cu(t,c===void 0?new el(a,n,e):new tl(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new nl(a),cu(t,h)),t=h}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);i0(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function uu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var s0=37297,r0=0;function a0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function o0(n){let e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(n),i;switch(e===t?i="":e===fa&&t===da?i="LinearDisplayP3ToLinearSRGB":e===da&&t===fa&&(i="LinearSRGBToLinearDisplayP3"),n){case ni:case Va:return[i,"LinearTransferOETF"];case Ut:case wl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+a0(n.getShaderSource(e),o)}else return s}function l0(n,e){let t=o0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function c0(n,e){let t;switch(e){case hd:t="Linear";break;case dd:t="Reinhard";break;case fd:t="OptimizedCineon";break;case pd:t="ACESFilmic";break;case gd:t="AgX";break;case md:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function u0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function h0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function d0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bs(n){return n!==""}function du(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(n){return n.replace(p0,g0)}var m0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g0(n,e){let t=at[e];if(t===void 0){let i=m0.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}var v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(n){return n.replace(v0,_0)}function _0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function M0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case za:e="ENVMAP_BLENDING_MULTIPLY";break;case cd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function S0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function w0(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=y0(t),c=x0(t),u=b0(t),h=M0(t),f=S0(t),g=t.isWebGL2?"":u0(t),_=h0(t),b=d0(r),m=s.createProgram(),p,L,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(bs).join(`
`),p.length>0&&(p+=`
`),L=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(bs).join(`
`),L.length>0&&(L+=`
`)):(p=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),L=[g,mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?at.tonemapping_pars_fragment:"",t.toneMapping!==yi?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=il(o),o=du(o,t),o=fu(o,t),a=il(a),a=du(a,t),a=fu(a,t),o=pu(o),a=pu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);let C=v+p+o,O=v+L+a,w=uu(s,s.VERTEX_SHADER,C),U=uu(s,s.FRAGMENT_SHADER,O);s.attachShader(m,w),s.attachShader(m,U),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function G(le){if(n.debug.checkShaderErrors){let me=s.getProgramInfoLog(m).trim(),H=s.getShaderInfoLog(w).trim(),Y=s.getShaderInfoLog(U).trim(),V=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,w,U);else{let ne=hu(s,w,"vertex"),J=hu(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+ne+`
`+J)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(H===""||Y==="")&&(ie=!1);ie&&(le.diagnostics={runnable:V,programLog:me,vertexShader:{log:H,prefix:p},fragmentShader:{log:Y,prefix:L}})}s.deleteShader(w),s.deleteShader(U),S=new ws(s,m),D=f0(s,m)}let S;this.getUniforms=function(){return S===void 0&&G(this),S};let D;this.getAttributes=function(){return D===void 0&&G(this),D};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=s.getProgramParameter(m,s0)),ee},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=U,this}var E0=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new rl(e),t.set(e,i)),i}},rl=class{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}};function T0(n,e,t,i,s,r,o){let a=new xa,l=new sl,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return S===0?"uv":`uv${S}`}function m(S,D,ee,le,me){let H=le.fog,Y=me.geometry,V=S.isMeshStandardMaterial?le.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),ne=ie&&ie.mapping===Ha?ie.image.height:null,J=_[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=ae!==void 0?ae.length:0,ue=0;Y.morphAttributes.position!==void 0&&(ue=1),Y.morphAttributes.normal!==void 0&&(ue=2),Y.morphAttributes.color!==void 0&&(ue=3);let I,k,B,X;if(J){let Gt=On[J];I=Gt.vertexShader,k=Gt.fragmentShader}else I=S.vertexShader,k=S.fragmentShader,l.update(S),B=l.getVertexShaderID(S),X=l.getFragmentShaderID(S);let q=n.getRenderTarget(),oe=me.isInstancedMesh===!0,ge=me.isBatchedMesh===!0,Me=!!S.map,Qe=!!S.matcap,$=!!ie,Xt=!!S.aoMap,Ve=!!S.lightMap,Je=!!S.bumpMap,Ie=!!S.normalMap,Tt=!!S.displacementMap,nt=!!S.emissiveMap,N=!!S.metalnessMap,T=!!S.roughnessMap,Z=S.anisotropy>0,fe=S.clearcoat>0,he=S.iridescence>0,pe=S.sheen>0,Ue=S.transmission>0,Se=Z&&!!S.anisotropyMap,Re=fe&&!!S.clearcoatMap,We=fe&&!!S.clearcoatNormalMap,it=fe&&!!S.clearcoatRoughnessMap,de=he&&!!S.iridescenceMap,vt=he&&!!S.iridescenceThicknessMap,ot=pe&&!!S.sheenColorMap,Ye=pe&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Le=!!S.specularColorMap,et=!!S.specularIntensityMap,gt=Ue&&!!S.transmissionMap,Ct=Ue&&!!S.thicknessMap,rt=!!S.gradientMap,ve=!!S.alphaMap,F=S.alphaTest>0,xe=!!S.alphaHash,be=!!S.extensions,$e=!!Y.attributes.uv1,Ge=!!Y.attributes.uv2,xt=!!Y.attributes.uv3,Mt=yi;return S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Mt=n.toneMapping),{isWebGL2:u,shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:I,fragmentShader:k,defines:S.defines,customVertexShaderID:B,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:ge,instancing:oe,instancingColor:oe&&me.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ni,map:Me,matcap:Qe,envMap:$,envMapMode:$&&ie.mapping,envMapCubeUVHeight:ne,aoMap:Xt,lightMap:Ve,bumpMap:Je,normalMap:Ie,displacementMap:f&&Tt,emissiveMap:nt,normalMapObjectSpace:Ie&&S.normalMapType===Ld,normalMapTangentSpace:Ie&&S.normalMapType===Sl,metalnessMap:N,roughnessMap:T,anisotropy:Z,anisotropyMap:Se,clearcoat:fe,clearcoatMap:Re,clearcoatNormalMap:We,clearcoatRoughnessMap:it,iridescence:he,iridescenceMap:de,iridescenceThicknessMap:vt,sheen:pe,sheenColorMap:ot,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:Le,specularIntensityMap:et,transmission:Ue,transmissionMap:gt,thicknessMap:Ct,gradientMap:rt,opaque:S.transparent===!1&&S.blending===Ms,alphaMap:ve,alphaTest:F,alphaHash:xe,combine:S.combine,mapUv:Me&&b(S.map.channel),aoMapUv:Xt&&b(S.aoMap.channel),lightMapUv:Ve&&b(S.lightMap.channel),bumpMapUv:Je&&b(S.bumpMap.channel),normalMapUv:Ie&&b(S.normalMap.channel),displacementMapUv:Tt&&b(S.displacementMap.channel),emissiveMapUv:nt&&b(S.emissiveMap.channel),metalnessMapUv:N&&b(S.metalnessMap.channel),roughnessMapUv:T&&b(S.roughnessMap.channel),anisotropyMapUv:Se&&b(S.anisotropyMap.channel),clearcoatMapUv:Re&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:We&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&b(S.sheenRoughnessMap.channel),specularMapUv:Be&&b(S.specularMap.channel),specularColorMapUv:Le&&b(S.specularColorMap.channel),specularIntensityMapUv:et&&b(S.specularIntensityMap.channel),transmissionMapUv:gt&&b(S.transmissionMap.channel),thicknessMapUv:Ct&&b(S.thicknessMap.channel),alphaMapUv:ve&&b(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ie||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ge,vertexUv3s:xt,pointsUvs:me.isPoints===!0&&!!Y.attributes.uv&&(Me||ve),fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:me.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ue,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&wt.getTransfer(S.map.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:be&&S.extensions.derivatives===!0,extensionFragDepth:be&&S.extensions.fragDepth===!0,extensionDrawBuffers:be&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let D=[];if(S.shaderID?D.push(S.shaderID):(D.push(S.customVertexShaderID),D.push(S.customFragmentShaderID)),S.defines!==void 0)for(let ee in S.defines)D.push(ee),D.push(S.defines[ee]);return S.isRawShaderMaterial===!1&&(L(D,S),v(D,S),D.push(n.outputColorSpace)),D.push(S.customProgramCacheKey),D.join()}function L(S,D){S.push(D.precision),S.push(D.outputColorSpace),S.push(D.envMapMode),S.push(D.envMapCubeUVHeight),S.push(D.mapUv),S.push(D.alphaMapUv),S.push(D.lightMapUv),S.push(D.aoMapUv),S.push(D.bumpMapUv),S.push(D.normalMapUv),S.push(D.displacementMapUv),S.push(D.emissiveMapUv),S.push(D.metalnessMapUv),S.push(D.roughnessMapUv),S.push(D.anisotropyMapUv),S.push(D.clearcoatMapUv),S.push(D.clearcoatNormalMapUv),S.push(D.clearcoatRoughnessMapUv),S.push(D.iridescenceMapUv),S.push(D.iridescenceThicknessMapUv),S.push(D.sheenColorMapUv),S.push(D.sheenRoughnessMapUv),S.push(D.specularMapUv),S.push(D.specularColorMapUv),S.push(D.specularIntensityMapUv),S.push(D.transmissionMapUv),S.push(D.thicknessMapUv),S.push(D.combine),S.push(D.fogExp2),S.push(D.sizeAttenuation),S.push(D.morphTargetsCount),S.push(D.morphAttributeCount),S.push(D.numDirLights),S.push(D.numPointLights),S.push(D.numSpotLights),S.push(D.numSpotLightMaps),S.push(D.numHemiLights),S.push(D.numRectAreaLights),S.push(D.numDirLightShadows),S.push(D.numPointLightShadows),S.push(D.numSpotLightShadows),S.push(D.numSpotLightShadowsWithMaps),S.push(D.numLightProbes),S.push(D.shadowMapType),S.push(D.toneMapping),S.push(D.numClippingPlanes),S.push(D.numClipIntersection),S.push(D.depthPacking)}function v(S,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUv1s&&a.enable(13),D.vertexUv2s&&a.enable(14),D.vertexUv3s&&a.enable(15),D.vertexTangents&&a.enable(16),D.anisotropy&&a.enable(17),D.alphaHash&&a.enable(18),D.batching&&a.enable(19),S.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function C(S){let D=_[S.type],ee;if(D){let le=On[D];ee=mf.clone(le.uniforms)}else ee=S.uniforms;return ee}function O(S,D){let ee;for(let le=0,me=c.length;le<me;le++){let H=c[le];if(H.cacheKey===D){ee=H,++ee.usedTimes;break}}return ee===void 0&&(ee=new w0(n,D,S,r),c.push(ee)),ee}function w(S){if(--S.usedTimes===0){let D=c.indexOf(S);c[D]=c[c.length-1],c.pop(),S.destroy()}}function U(S){l.remove(S)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:C,acquireProgram:O,releaseProgram:w,releaseShaderCache:U,programs:c,dispose:G}}function A0(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function C0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,g,_,b,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:g,groupOrder:_,renderOrder:h.renderOrder,z:b,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=g,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function a(h,f,g,_,b,m){let p=o(h,f,g,_,b,m);g.transmission>0?i.push(p):g.transparent===!0?s.push(p):t.push(p)}function l(h,f,g,_,b,m){let p=o(h,f,g,_,b,m);g.transmission>0?i.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||C0),i.length>1&&i.sort(f||gu),s.length>1&&s.sort(f||gu)}function u(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function R0(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new vu,n.set(i,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function L0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new st};break;case"SpotLight":t={position:new z,direction:new z,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function P0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var I0=0;function N0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function D0(n,e){let t=new L0,i=P0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new z);let r=new z,o=new lt,a=new lt;function l(u,h){let f=0,g=0,_=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let b=0,m=0,p=0,L=0,v=0,C=0,O=0,w=0,U=0,G=0,S=0;u.sort(N0);let D=h===!0?Math.PI:1;for(let le=0,me=u.length;le<me;le++){let H=u[le],Y=H.color,V=H.intensity,ie=H.distance,ne=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=Y.r*V*D,g+=Y.g*V*D,_+=Y.b*V*D;else if(H.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(H.sh.coefficients[J],V);S++}else if(H.isDirectionalLight){let J=t.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity*D),H.castShadow){let ae=H.shadow,se=i.get(H);se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,s.directionalShadow[b]=se,s.directionalShadowMap[b]=ne,s.directionalShadowMatrix[b]=H.shadow.matrix,C++}s.directional[b]=J,b++}else if(H.isSpotLight){let J=t.get(H);J.position.setFromMatrixPosition(H.matrixWorld),J.color.copy(Y).multiplyScalar(V*D),J.distance=ie,J.coneCos=Math.cos(H.angle),J.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),J.decay=H.decay,s.spot[p]=J;let ae=H.shadow;if(H.map&&(s.spotLightMap[U]=H.map,U++,ae.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[p]=ae.matrix,H.castShadow){let se=i.get(H);se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,s.spotShadow[p]=se,s.spotShadowMap[p]=ne,w++}p++}else if(H.isRectAreaLight){let J=t.get(H);J.color.copy(Y).multiplyScalar(V),J.halfWidth.set(H.width*.5,0,0),J.halfHeight.set(0,H.height*.5,0),s.rectArea[L]=J,L++}else if(H.isPointLight){let J=t.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity*D),J.distance=H.distance,J.decay=H.decay,H.castShadow){let ae=H.shadow,se=i.get(H);se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,se.shadowCameraNear=ae.camera.near,se.shadowCameraFar=ae.camera.far,s.pointShadow[m]=se,s.pointShadowMap[m]=ne,s.pointShadowMatrix[m]=H.shadow.matrix,O++}s.point[m]=J,m++}else if(H.isHemisphereLight){let J=t.get(H);J.skyColor.copy(H.color).multiplyScalar(V*D),J.groundColor.copy(H.groundColor).multiplyScalar(V*D),s.hemi[v]=J,v++}}L>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=_;let ee=s.hash;(ee.directionalLength!==b||ee.pointLength!==m||ee.spotLength!==p||ee.rectAreaLength!==L||ee.hemiLength!==v||ee.numDirectionalShadows!==C||ee.numPointShadows!==O||ee.numSpotShadows!==w||ee.numSpotMaps!==U||ee.numLightProbes!==S)&&(s.directional.length=b,s.spot.length=p,s.rectArea.length=L,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=w+U-G,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=S,ee.directionalLength=b,ee.pointLength=m,ee.spotLength=p,ee.rectAreaLength=L,ee.hemiLength=v,ee.numDirectionalShadows=C,ee.numPointShadows=O,ee.numSpotShadows=w,ee.numSpotMaps=U,ee.numLightProbes=S,s.version=I0++)}function c(u,h){let f=0,g=0,_=0,b=0,m=0,p=h.matrixWorldInverse;for(let L=0,v=u.length;L<v;L++){let C=u[L];if(C.isDirectionalLight){let O=s.directional[f];O.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),f++}else if(C.isSpotLight){let O=s.spot[_];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(p),O.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),_++}else if(C.isRectAreaLight){let O=s.rectArea[b];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(p),a.identity(),o.copy(C.matrixWorld),o.premultiply(p),a.extractRotation(o),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),O.halfWidth.applyMatrix4(a),O.halfHeight.applyMatrix4(a),b++}else if(C.isPointLight){let O=s.point[g];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(p),g++}else if(C.isHemisphereLight){let O=s.hemi[m];O.direction.setFromMatrixPosition(C.matrixWorld),O.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function _u(n,e){let t=new D0(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function U0(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new _u(n,e),t.set(r,[l])):o>=a.length?(l=new _u(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var al=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function k0(n,e,t){let i=new mr,s=new dt,r=new dt,o=new Et,a=new al({depthPacking:Rd}),l=new ol,c={},u=t.maxTextureSize,h={[Fn]:hn,[hn]:Fn,[gn]:gn},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:O0,fragmentShader:F0}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let _=new wn;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ln(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let p=this.type;this.render=function(w,U,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=n.getRenderTarget(),D=n.getActiveCubeFace(),ee=n.getActiveMipmapLevel(),le=n.state;le.setBlending(_i),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let me=p!==Kn&&this.type===Kn,H=p===Kn&&this.type!==Kn;for(let Y=0,V=w.length;Y<V;Y++){let ie=w[Y],ne=ie.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let J=ne.getFrameExtents();if(s.multiply(J),r.copy(ne.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,ne.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,ne.mapSize.y=r.y)),ne.map===null||me===!0||H===!0){let se=this.type!==Kn?{minFilter:Yt,magFilter:Yt}:{};ne.map!==null&&ne.map.dispose(),ne.map=new ii(s.x,s.y,se),ne.map.texture.name=ie.name+".shadowMap",ne.camera.updateProjectionMatrix()}n.setRenderTarget(ne.map),n.clear();let ae=ne.getViewportCount();for(let se=0;se<ae;se++){let ue=ne.getViewport(se);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),le.viewport(o),ne.updateMatrices(ie,se),i=ne.getFrustum(),C(U,G,ne.camera,ie,this.type)}ne.isPointLightShadow!==!0&&this.type===Kn&&L(ne,G),ne.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,D,ee)};function L(w,U){let G=e.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ii(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(U,null,G,f,b,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(U,null,G,g,b,null)}function v(w,U,G,S){let D=null,ee=G.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(ee!==void 0)D=ee;else if(D=G.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let le=D.uuid,me=U.uuid,H=c[le];H===void 0&&(H={},c[le]=H);let Y=H[me];Y===void 0&&(Y=D.clone(),H[me]=Y,U.addEventListener("dispose",O)),D=Y}if(D.visible=U.visible,D.wireframe=U.wireframe,S===Kn?D.side=U.shadowSide!==null?U.shadowSide:U.side:D.side=U.shadowSide!==null?U.shadowSide:h[U.side],D.alphaMap=U.alphaMap,D.alphaTest=U.alphaTest,D.map=U.map,D.clipShadows=U.clipShadows,D.clippingPlanes=U.clippingPlanes,D.clipIntersection=U.clipIntersection,D.displacementMap=U.displacementMap,D.displacementScale=U.displacementScale,D.displacementBias=U.displacementBias,D.wireframeLinewidth=U.wireframeLinewidth,D.linewidth=U.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let le=n.properties.get(D);le.light=G}return D}function C(w,U,G,S,D){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Kn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld);let me=e.update(w),H=w.material;if(Array.isArray(H)){let Y=me.groups;for(let V=0,ie=Y.length;V<ie;V++){let ne=Y[V],J=H[ne.materialIndex];if(J&&J.visible){let ae=v(w,J,S,D);w.onBeforeShadow(n,w,U,G,me,ae,ne),n.renderBufferDirect(G,null,me,ae,w,ne),w.onAfterShadow(n,w,U,G,me,ae,ne)}}}else if(H.visible){let Y=v(w,H,S,D);w.onBeforeShadow(n,w,U,G,me,Y,null),n.renderBufferDirect(G,null,me,Y,w,null),w.onAfterShadow(n,w,U,G,me,Y,null)}}let le=w.children;for(let me=0,H=le.length;me<H;me++)C(le[me],U,G,S,D)}function O(w){w.target.removeEventListener("dispose",O);for(let G in c){let S=c[G],D=w.target.uuid;D in S&&(S[D].dispose(),delete S[D])}}}function B0(n,e,t){let i=t.isWebGL2;function s(){let F=!1,xe=new Et,be=null,$e=new Et(0,0,0,0);return{setMask:function(Ge){be!==Ge&&!F&&(n.colorMask(Ge,Ge,Ge,Ge),be=Ge)},setLocked:function(Ge){F=Ge},setClear:function(Ge,xt,Mt,_t,Gt){Gt===!0&&(Ge*=_t,xt*=_t,Mt*=_t),xe.set(Ge,xt,Mt,_t),$e.equals(xe)===!1&&(n.clearColor(Ge,xt,Mt,_t),$e.copy(xe))},reset:function(){F=!1,be=null,$e.set(-1,0,0,0)}}}function r(){let F=!1,xe=null,be=null,$e=null;return{setTest:function(Ge){Ge?ge(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Ge){xe!==Ge&&!F&&(n.depthMask(Ge),xe=Ge)},setFunc:function(Ge){if(be!==Ge){switch(Ge){case nd:n.depthFunc(n.NEVER);break;case id:n.depthFunc(n.ALWAYS);break;case sd:n.depthFunc(n.LESS);break;case la:n.depthFunc(n.LEQUAL);break;case rd:n.depthFunc(n.EQUAL);break;case ad:n.depthFunc(n.GEQUAL);break;case od:n.depthFunc(n.GREATER);break;case ld:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Ge}},setLocked:function(Ge){F=Ge},setClear:function(Ge){$e!==Ge&&(n.clearDepth(Ge),$e=Ge)},reset:function(){F=!1,xe=null,be=null,$e=null}}}function o(){let F=!1,xe=null,be=null,$e=null,Ge=null,xt=null,Mt=null,_t=null,Gt=null;return{setTest:function(St){F||(St?ge(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(St){xe!==St&&!F&&(n.stencilMask(St),xe=St)},setFunc:function(St,$t,_n){(be!==St||$e!==$t||Ge!==_n)&&(n.stencilFunc(St,$t,_n),be=St,$e=$t,Ge=_n)},setOp:function(St,$t,_n){(xt!==St||Mt!==$t||_t!==_n)&&(n.stencilOp(St,$t,_n),xt=St,Mt=$t,_t=_n)},setLocked:function(St){F=St},setClear:function(St){Gt!==St&&(n.clearStencil(St),Gt=St)},reset:function(){F=!1,xe=null,be=null,$e=null,Ge=null,xt=null,Mt=null,_t=null,Gt=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap,f={},g={},_=new WeakMap,b=[],m=null,p=!1,L=null,v=null,C=null,O=null,w=null,U=null,G=null,S=new st(0,0,0),D=0,ee=!1,le=null,me=null,H=null,Y=null,V=null,ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,J=0,ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ne=J>=1):ae.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ne=J>=2);let se=null,ue={},I=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),B=new Et().fromArray(I),X=new Et().fromArray(k);function q(F,xe,be,$e){let Ge=new Uint8Array(4),xt=n.createTexture();n.bindTexture(F,xt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<be;Mt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,$e,0,n.RGBA,n.UNSIGNED_BYTE,Ge):n.texImage2D(xe+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ge);return xt}let oe={};oe[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(n.DEPTH_TEST),l.setFunc(la),nt(!1),N(Jl),ge(n.CULL_FACE),Ie(_i);function ge(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function Me(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function Qe(F,xe){return g[F]!==xe?(n.bindFramebuffer(F,xe),g[F]=xe,i&&(F===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function $(F,xe){let be=b,$e=!1;if(F)if(be=_.get(xe),be===void 0&&(be=[],_.set(xe,be)),F.isWebGLMultipleRenderTargets){let Ge=F.texture;if(be.length!==Ge.length||be[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Mt=Ge.length;xt<Mt;xt++)be[xt]=n.COLOR_ATTACHMENT0+xt;be.length=Ge.length,$e=!0}}else be[0]!==n.COLOR_ATTACHMENT0&&(be[0]=n.COLOR_ATTACHMENT0,$e=!0);else be[0]!==n.BACK&&(be[0]=n.BACK,$e=!0);$e&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function Xt(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let Ve={[Bi]:n.FUNC_ADD,[Hh]:n.FUNC_SUBTRACT,[Vh]:n.FUNC_REVERSE_SUBTRACT};if(i)Ve[ec]=n.MIN,Ve[tc]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(Ve[ec]=F.MIN_EXT,Ve[tc]=F.MAX_EXT)}let Je={[Gh]:n.ZERO,[Wh]:n.ONE,[qh]:n.SRC_COLOR,[Go]:n.SRC_ALPHA,[Zh]:n.SRC_ALPHA_SATURATE,[jh]:n.DST_COLOR,[$h]:n.DST_ALPHA,[Xh]:n.ONE_MINUS_SRC_COLOR,[Wo]:n.ONE_MINUS_SRC_ALPHA,[Jh]:n.ONE_MINUS_DST_COLOR,[Yh]:n.ONE_MINUS_DST_ALPHA,[Kh]:n.CONSTANT_COLOR,[Qh]:n.ONE_MINUS_CONSTANT_COLOR,[ed]:n.CONSTANT_ALPHA,[td]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(F,xe,be,$e,Ge,xt,Mt,_t,Gt,St){if(F===_i){p===!0&&(Me(n.BLEND),p=!1);return}if(p===!1&&(ge(n.BLEND),p=!0),F!==zh){if(F!==L||St!==ee){if((v!==Bi||w!==Bi)&&(n.blendEquation(n.FUNC_ADD),v=Bi,w=Bi),St)switch(F){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.ONE,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}C=null,O=null,U=null,G=null,S.set(0,0,0),D=0,L=F,ee=St}return}Ge=Ge||xe,xt=xt||be,Mt=Mt||$e,(xe!==v||Ge!==w)&&(n.blendEquationSeparate(Ve[xe],Ve[Ge]),v=xe,w=Ge),(be!==C||$e!==O||xt!==U||Mt!==G)&&(n.blendFuncSeparate(Je[be],Je[$e],Je[xt],Je[Mt]),C=be,O=$e,U=xt,G=Mt),(_t.equals(S)===!1||Gt!==D)&&(n.blendColor(_t.r,_t.g,_t.b,Gt),S.copy(_t),D=Gt),L=F,ee=!1}function Tt(F,xe){F.side===gn?Me(n.CULL_FACE):ge(n.CULL_FACE);let be=F.side===hn;xe&&(be=!be),nt(be),F.blending===Ms&&F.transparent===!1?Ie(_i):Ie(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let $e=F.stencilWrite;c.setTest($e),$e&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Z(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(F){le!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),le=F)}function N(F){F!==Fh?(ge(n.CULL_FACE),F!==me&&(F===Jl?n.cullFace(n.BACK):F===kh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),me=F}function T(F){F!==H&&(ne&&n.lineWidth(F),H=F)}function Z(F,xe,be){F?(ge(n.POLYGON_OFFSET_FILL),(Y!==xe||V!==be)&&(n.polygonOffset(xe,be),Y=xe,V=be)):Me(n.POLYGON_OFFSET_FILL)}function fe(F){F?ge(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function he(F){F===void 0&&(F=n.TEXTURE0+ie-1),se!==F&&(n.activeTexture(F),se=F)}function pe(F,xe,be){be===void 0&&(se===null?be=n.TEXTURE0+ie-1:be=se);let $e=ue[be];$e===void 0&&($e={type:void 0,texture:void 0},ue[be]=$e),($e.type!==F||$e.texture!==xe)&&(se!==be&&(n.activeTexture(be),se=be),n.bindTexture(F,xe||oe[F]),$e.type=F,$e.texture=xe)}function Ue(){let F=ue[se];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(F){B.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),B.copy(F))}function gt(F){X.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function Ct(F,xe){let be=h.get(xe);be===void 0&&(be=new WeakMap,h.set(xe,be));let $e=be.get(F);$e===void 0&&($e=n.getUniformBlockIndex(xe,F.name),be.set(F,$e))}function rt(F,xe){let $e=h.get(xe).get(F);u.get(xe)!==$e&&(n.uniformBlockBinding(xe,$e,F.__bindingPointIndex),u.set(xe,$e))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},se=null,ue={},g={},_=new WeakMap,b=[],m=null,p=!1,L=null,v=null,C=null,O=null,w=null,U=null,G=null,S=new st(0,0,0),D=0,ee=!1,le=null,me=null,H=null,Y=null,V=null,B.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:Me,bindFramebuffer:Qe,drawBuffers:$,useProgram:Xt,setBlending:Ie,setMaterial:Tt,setFlipSided:nt,setCullFace:N,setLineWidth:T,setPolygonOffset:Z,setScissorTest:fe,activeTexture:he,bindTexture:pe,unbindTexture:Ue,compressedTexImage2D:Se,compressedTexImage3D:Re,texImage2D:Be,texImage3D:Le,updateUBOMapping:Ct,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:Ye,texSubImage2D:We,texSubImage3D:it,compressedTexSubImage2D:de,compressedTexSubImage3D:vt,scissor:et,viewport:gt,reset:ve}}function z0(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,T){return g?new OffscreenCanvas(N,T):dr("canvas")}function b(N,T,Z,fe){let he=1;if((N.width>fe||N.height>fe)&&(he=fe/Math.max(N.width,N.height)),he<1||T===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let pe=T?ma:Math.floor,Ue=pe(he*N.width),Se=pe(he*N.height);h===void 0&&(h=_(Ue,Se));let Re=Z?_(Ue,Se):h;return Re.width=Ue,Re.height=Se,Re.getContext("2d").drawImage(N,0,0,Ue,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ue+"x"+Se+")."),Re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function m(N){return jo(N.width)&&jo(N.height)}function p(N){return a?!1:N.wrapS!==Qt||N.wrapT!==Qt||N.minFilter!==Yt&&N.minFilter!==an}function L(N,T){return N.generateMipmaps&&T&&N.minFilter!==Yt&&N.minFilter!==an}function v(N){n.generateMipmap(N)}function C(N,T,Z,fe,he=!1){if(a===!1)return T;if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe=T;if(T===n.RED&&(Z===n.FLOAT&&(pe=n.R32F),Z===n.HALF_FLOAT&&(pe=n.R16F),Z===n.UNSIGNED_BYTE&&(pe=n.R8)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.R8UI),Z===n.UNSIGNED_SHORT&&(pe=n.R16UI),Z===n.UNSIGNED_INT&&(pe=n.R32UI),Z===n.BYTE&&(pe=n.R8I),Z===n.SHORT&&(pe=n.R16I),Z===n.INT&&(pe=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(pe=n.RG32F),Z===n.HALF_FLOAT&&(pe=n.RG16F),Z===n.UNSIGNED_BYTE&&(pe=n.RG8)),T===n.RGBA){let Ue=he?ha:wt.getTransfer(fe);Z===n.FLOAT&&(pe=n.RGBA32F),Z===n.HALF_FLOAT&&(pe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(pe=Ue===Lt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(N,T,Z){return L(N,Z)===!0||N.isFramebufferTexture&&N.minFilter!==Yt&&N.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function w(N){return N===Yt||N===ic||N===lo?n.NEAREST:n.LINEAR}function U(N){let T=N.target;T.removeEventListener("dispose",U),S(T),T.isVideoTexture&&u.delete(T)}function G(N){let T=N.target;T.removeEventListener("dispose",G),ee(T)}function S(N){let T=i.get(N);if(T.__webglInit===void 0)return;let Z=N.source,fe=f.get(Z);if(fe){let he=fe[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&D(N),Object.keys(fe).length===0&&f.delete(Z)}i.remove(N)}function D(N){let T=i.get(N);n.deleteTexture(T.__webglTexture);let Z=N.source,fe=f.get(Z);delete fe[T.__cacheKey],o.memory.textures--}function ee(N){let T=N.texture,Z=i.get(N),fe=i.get(T);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(Z.__webglFramebuffer[he]))for(let pe=0;pe<Z.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer(Z.__webglFramebuffer[he][pe]);else n.deleteFramebuffer(Z.__webglFramebuffer[he]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[he])}else{if(Array.isArray(Z.__webglFramebuffer))for(let he=0;he<Z.__webglFramebuffer.length;he++)n.deleteFramebuffer(Z.__webglFramebuffer[he]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let he=0;he<Z.__webglColorRenderbuffer.length;he++)Z.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[he]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let he=0,pe=T.length;he<pe;he++){let Ue=i.get(T[he]);Ue.__webglTexture&&(n.deleteTexture(Ue.__webglTexture),o.memory.textures--),i.remove(T[he])}i.remove(T),i.remove(N)}let le=0;function me(){le=0}function H(){let N=le;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),le+=1,N}function Y(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function V(N,T){let Z=i.get(N);if(N.isVideoTexture&&Tt(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){let fe=N.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(Z,N,T);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function ie(N,T){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){B(Z,N,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function ne(N,T){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){B(Z,N,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function J(N,T){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){X(Z,N,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}let ae={[bi]:n.REPEAT,[Qt]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},se={[Yt]:n.NEAREST,[ic]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[_d]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},ue={[Pd]:n.NEVER,[Fd]:n.ALWAYS,[Id]:n.LESS,[Wu]:n.LEQUAL,[Nd]:n.EQUAL,[Od]:n.GEQUAL,[Dd]:n.GREATER,[Ud]:n.NOTEQUAL};function I(N,T,Z){if(Z?(n.texParameteri(N,n.TEXTURE_WRAP_S,ae[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ae[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ae[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,se[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,se[T.minFilter])):(n.texParameteri(N,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(N,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==Qt||T.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(N,n.TEXTURE_MAG_FILTER,w(T.magFilter)),n.texParameteri(N,n.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==Yt&&T.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Yt||T.minFilter!==lo&&T.minFilter!==Mi||T.type===ei&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===hr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(N,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function k(N,T){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",U));let fe=T.source,he=f.get(fe);he===void 0&&(he={},f.set(fe,he));let pe=Y(T);if(pe!==N.__cacheKey){he[pe]===void 0&&(he[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),he[pe].usedTimes++;let Ue=he[N.__cacheKey];Ue!==void 0&&(he[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&D(T)),N.__cacheKey=pe,N.__webglTexture=he[pe].texture}return Z}function B(N,T,Z){let fe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=n.TEXTURE_3D);let he=k(N,T),pe=T.source;t.bindTexture(fe,N.__webglTexture,n.TEXTURE0+Z);let Ue=i.get(pe);if(pe.version!==Ue.__version||he===!0){t.activeTexture(n.TEXTURE0+Z);let Se=wt.getPrimaries(wt.workingColorSpace),Re=T.colorSpace===Mn?null:wt.getPrimaries(T.colorSpace),We=T.colorSpace===Mn||Se===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let it=p(T)&&m(T.image)===!1,de=b(T.image,it,!1,s.maxTextureSize);de=nt(T,de);let vt=m(de)||a,ot=r.convert(T.format,T.colorSpace),Ye=r.convert(T.type),Be=C(T.internalFormat,ot,Ye,T.colorSpace,T.isVideoTexture);I(fe,T,vt);let Le,et=T.mipmaps,gt=a&&T.isVideoTexture!==!0&&Be!==Vu,Ct=Ue.__version===void 0||he===!0,rt=O(T,de,vt);if(T.isDepthTexture)Be=n.DEPTH_COMPONENT,a?T.type===ei?Be=n.DEPTH_COMPONENT32F:T.type===vi?Be=n.DEPTH_COMPONENT24:T.type===Hi?Be=n.DEPTH24_STENCIL8:Be=n.DEPTH_COMPONENT16:T.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vi&&Be===n.DEPTH_COMPONENT&&T.type!==Ml&&T.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=vi,Ye=r.convert(T.type)),T.format===As&&Be===n.DEPTH_COMPONENT&&(Be=n.DEPTH_STENCIL,T.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Hi,Ye=r.convert(T.type))),Ct&&(gt?t.texStorage2D(n.TEXTURE_2D,1,Be,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Be,de.width,de.height,0,ot,Ye,null));else if(T.isDataTexture)if(et.length>0&&vt){gt&&Ct&&t.texStorage2D(n.TEXTURE_2D,rt,Be,et[0].width,et[0].height);for(let ve=0,F=et.length;ve<F;ve++)Le=et[ve],gt?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Le.width,Le.height,ot,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,ve,Be,Le.width,Le.height,0,ot,Ye,Le.data);T.generateMipmaps=!1}else gt?(Ct&&t.texStorage2D(n.TEXTURE_2D,rt,Be,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,ot,Ye,de.data)):t.texImage2D(n.TEXTURE_2D,0,Be,de.width,de.height,0,ot,Ye,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){gt&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Be,et[0].width,et[0].height,de.depth);for(let ve=0,F=et.length;ve<F;ve++)Le=et[ve],T.format!==bn?ot!==null?gt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,de.depth,ot,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Be,Le.width,Le.height,de.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,de.depth,ot,Ye,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Be,Le.width,Le.height,de.depth,0,ot,Ye,Le.data)}else{gt&&Ct&&t.texStorage2D(n.TEXTURE_2D,rt,Be,et[0].width,et[0].height);for(let ve=0,F=et.length;ve<F;ve++)Le=et[ve],T.format!==bn?ot!==null?gt?t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Le.width,Le.height,ot,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Le.width,Le.height,ot,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,ve,Be,Le.width,Le.height,0,ot,Ye,Le.data)}else if(T.isDataArrayTexture)gt?(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Be,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ot,Ye,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,de.width,de.height,de.depth,0,ot,Ye,de.data);else if(T.isData3DTexture)gt?(Ct&&t.texStorage3D(n.TEXTURE_3D,rt,Be,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ot,Ye,de.data)):t.texImage3D(n.TEXTURE_3D,0,Be,de.width,de.height,de.depth,0,ot,Ye,de.data);else if(T.isFramebufferTexture){if(Ct)if(gt)t.texStorage2D(n.TEXTURE_2D,rt,Be,de.width,de.height);else{let ve=de.width,F=de.height;for(let xe=0;xe<rt;xe++)t.texImage2D(n.TEXTURE_2D,xe,Be,ve,F,0,ot,Ye,null),ve>>=1,F>>=1}}else if(et.length>0&&vt){gt&&Ct&&t.texStorage2D(n.TEXTURE_2D,rt,Be,et[0].width,et[0].height);for(let ve=0,F=et.length;ve<F;ve++)Le=et[ve],gt?t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ot,Ye,Le):t.texImage2D(n.TEXTURE_2D,ve,Be,ot,Ye,Le);T.generateMipmaps=!1}else gt?(Ct&&t.texStorage2D(n.TEXTURE_2D,rt,Be,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Ye,de)):t.texImage2D(n.TEXTURE_2D,0,Be,ot,Ye,de);L(T,vt)&&v(fe),Ue.__version=pe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function X(N,T,Z){if(T.image.length!==6)return;let fe=k(N,T),he=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);let pe=i.get(he);if(he.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+Z);let Ue=wt.getPrimaries(wt.workingColorSpace),Se=T.colorSpace===Mn?null:wt.getPrimaries(T.colorSpace),Re=T.colorSpace===Mn||Ue===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let We=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,de=[];for(let ve=0;ve<6;ve++)!We&&!it?de[ve]=b(T.image[ve],!1,!0,s.maxCubemapSize):de[ve]=it?T.image[ve].image:T.image[ve],de[ve]=nt(T,de[ve]);let vt=de[0],ot=m(vt)||a,Ye=r.convert(T.format,T.colorSpace),Be=r.convert(T.type),Le=C(T.internalFormat,Ye,Be,T.colorSpace),et=a&&T.isVideoTexture!==!0,gt=pe.__version===void 0||fe===!0,Ct=O(T,vt,ot);I(n.TEXTURE_CUBE_MAP,T,ot);let rt;if(We){et&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Le,vt.width,vt.height);for(let ve=0;ve<6;ve++){rt=de[ve].mipmaps;for(let F=0;F<rt.length;F++){let xe=rt[F];T.format!==bn?Ye!==null?et?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,xe.width,xe.height,Ye,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,xe.width,xe.height,Ye,Be,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Le,xe.width,xe.height,0,Ye,Be,xe.data)}}}else{rt=T.mipmaps,et&&gt&&(rt.length>0&&Ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Le,de[0].width,de[0].height));for(let ve=0;ve<6;ve++)if(it){et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de[ve].width,de[ve].height,Ye,Be,de[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Le,de[ve].width,de[ve].height,0,Ye,Be,de[ve].data);for(let F=0;F<rt.length;F++){let be=rt[F].image[ve].image;et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,be.width,be.height,Ye,Be,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Le,be.width,be.height,0,Ye,Be,be.data)}}else{et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ye,Be,de[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Le,Ye,Be,de[ve]);for(let F=0;F<rt.length;F++){let xe=rt[F];et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,Ye,Be,xe.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Le,Ye,Be,xe.image[ve])}}}L(T,ot)&&v(n.TEXTURE_CUBE_MAP),pe.__version=he.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function q(N,T,Z,fe,he,pe){let Ue=r.convert(Z.format,Z.colorSpace),Se=r.convert(Z.type),Re=C(Z.internalFormat,Ue,Se,Z.colorSpace);if(!i.get(T).__hasExternalTextures){let it=Math.max(1,T.width>>pe),de=Math.max(1,T.height>>pe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,Re,it,de,T.depth,0,Ue,Se,null):t.texImage2D(he,pe,Re,it,de,0,Ue,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Ie(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,he,i.get(Z).__webglTexture,0,Je(T)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,he,i.get(Z).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(N,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer&&!T.stencilBuffer){let fe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Ie(T)){let he=T.depthTexture;he&&he.isDepthTexture&&(he.type===ei?fe=n.DEPTH_COMPONENT32F:he.type===vi&&(fe=n.DEPTH_COMPONENT24));let pe=Je(T);Ie(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,N)}else if(T.depthBuffer&&T.stencilBuffer){let fe=Je(T);Z&&Ie(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,T.width,T.height):Ie(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,N)}else{let fe=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let he=0;he<fe.length;he++){let pe=fe[he],Ue=r.convert(pe.format,pe.colorSpace),Se=r.convert(pe.type),Re=C(pe.internalFormat,Ue,Se,pe.colorSpace),We=Je(T);Z&&Ie(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Re,T.width,T.height):Ie(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,Re,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Re,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);let fe=i.get(T.depthTexture).__webglTexture,he=Je(T);if(T.depthTexture.format===Vi)Ie(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(T.depthTexture.format===As)Ie(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Me(N){let T=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ge(T.__webglFramebuffer,N)}else if(Z){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]=n.createRenderbuffer(),oe(T.__webglDepthbuffer[fe],N,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),oe(T.__webglDepthbuffer,N,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(N,T,Z){let fe=i.get(N);T!==void 0&&q(fe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Me(N)}function $(N){let T=N.texture,Z=i.get(N),fe=i.get(T);N.addEventListener("dispose",G),N.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=T.version,o.memory.textures++);let he=N.isWebGLCubeRenderTarget===!0,pe=N.isWebGLMultipleRenderTargets===!0,Ue=m(N)||a;if(he){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let Re=0;Re<T.mipmaps.length;Re++)Z.__webglFramebuffer[Se][Re]=n.createFramebuffer()}else Z.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let Se=N.texture;for(let Re=0,We=Se.length;Re<We;Re++){let it=i.get(Se[Re]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&Ie(N)===!1){let Se=pe?T:[T];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<Se.length;Re++){let We=Se[Re];Z.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);let it=r.convert(We.format,We.colorSpace),de=r.convert(We.type),vt=C(We.internalFormat,it,de,We.colorSpace,N.isXRRenderTarget===!0),ot=Je(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,vt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),I(n.TEXTURE_CUBE_MAP,T,Ue);for(let Se=0;Se<6;Se++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)q(Z.__webglFramebuffer[Se][Re],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re);else q(Z.__webglFramebuffer[Se],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);L(T,Ue)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let Se=N.texture;for(let Re=0,We=Se.length;Re<We;Re++){let it=Se[Re],de=i.get(it);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),I(n.TEXTURE_2D,it,Ue),q(Z.__webglFramebuffer,N,it,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),L(it,Ue)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Se=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,fe.__webglTexture),I(Se,T,Ue),a&&T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)q(Z.__webglFramebuffer[Re],N,T,n.COLOR_ATTACHMENT0,Se,Re);else q(Z.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,Se,0);L(T,Ue)&&v(Se),t.unbindTexture()}N.depthBuffer&&Me(N)}function Xt(N){let T=m(N)||a,Z=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let fe=0,he=Z.length;fe<he;fe++){let pe=Z[fe];if(L(pe,T)){let Ue=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(pe).__webglTexture;t.bindTexture(Ue,Se),v(Ue),t.unbindTexture()}}}function Ve(N){if(a&&N.samples>0&&Ie(N)===!1){let T=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],Z=N.width,fe=N.height,he=n.COLOR_BUFFER_BIT,pe=[],Ue=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(N),Re=N.isWebGLMultipleRenderTargets===!0;if(Re)for(let We=0;We<T.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let We=0;We<T.length;We++){pe.push(n.COLOR_ATTACHMENT0+We),N.depthBuffer&&pe.push(Ue);let it=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(it===!1&&(N.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[We]),it===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ue]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ue])),Re){let de=i.get(T[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let We=0;We<T.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Se.__webglColorRenderbuffer[We]);let it=i.get(T[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function Je(N){return Math.min(s.maxSamples,N.samples)}function Ie(N){let T=i.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Tt(N){let T=o.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function nt(N,T){let Z=N.colorSpace,fe=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Yo||Z!==ni&&Z!==Mn&&(wt.getTransfer(Z)===Lt?a===!1?e.has("EXT_sRGB")===!0&&fe===bn?(N.format=Yo,N.minFilter=an,N.generateMipmaps=!1):T=ga.sRGBToLinear(T):(fe!==bn||he!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}this.allocateTextureUnit=H,this.resetTextureUnits=me,this.setTexture2D=V,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ie}function H0(n,e,t){let i=t.isWebGL2;function s(r,o=Mn){let a,l=wt.getTransfer(o);if(r===xi)return n.UNSIGNED_BYTE;if(r===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ku)return n.UNSIGNED_SHORT_5_5_5_1;if(r===yd)return n.BYTE;if(r===xd)return n.SHORT;if(r===Ml)return n.UNSIGNED_SHORT;if(r===Ou)return n.INT;if(r===vi)return n.UNSIGNED_INT;if(r===ei)return n.FLOAT;if(r===hr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bd)return n.ALPHA;if(r===bn)return n.RGBA;if(r===Md)return n.LUMINANCE;if(r===Sd)return n.LUMINANCE_ALPHA;if(r===Vi)return n.DEPTH_COMPONENT;if(r===As)return n.DEPTH_STENCIL;if(r===Yo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wd)return n.RED;if(r===Bu)return n.RED_INTEGER;if(r===Ed)return n.RG;if(r===zu)return n.RG_INTEGER;if(r===Hu)return n.RGBA_INTEGER;if(r===co||r===uo||r===ho||r===fo)if(l===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===co)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===co)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sc||r===rc||r===ac||r===oc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ac)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lc||r===cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===lc)return l===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===cc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uc||r===hc||r===dc||r===fc||r===pc||r===mc||r===gc||r===vc||r===_c||r===yc||r===xc||r===bc||r===Mc||r===Sc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===uc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_c)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===po||r===wc||r===Ec)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===po)return l===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ec)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Td||r===Tc||r===Ac||r===Cc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===po)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Tc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ac)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ll=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},un=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},V0={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cl=class extends Si{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,g=null,_=null,b=t.getContextAttributes(),m=null,p=null,L=[],v=[],C=new dt,O=null,w=new kt;w.layers.enable(1),w.viewport=new Et;let U=new kt;U.layers.enable(2),U.viewport=new Et;let G=[w,U],S=new ll;S.layers.enable(1),S.layers.enable(2);let D=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=L[I];return k===void 0&&(k=new ur,L[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=L[I];return k===void 0&&(k=new ur,L[I]=k),k.getGripSpace()},this.getHand=function(I){let k=L[I];return k===void 0&&(k=new ur,L[I]=k),k.getHandSpace()};function le(I){let k=v.indexOf(I.inputSource);if(k===-1)return;let B=L[k];B!==void 0&&(B.update(I.inputSource,I.frame,c||o),B.dispatchEvent({type:I.type,data:I.inputSource}))}function me(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",me),s.removeEventListener("inputsourceschange",H);for(let I=0;I<L.length;I++){let k=v[I];k!==null&&(v[I]=null,L[I].disconnect(k))}D=null,ee=null,e.setRenderTarget(m),g=null,f=null,h=null,s=null,p=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",me),s.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let k={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),p=new ii(g.framebufferWidth,g.framebufferHeight,{format:bn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let k=null,B=null,X=null;b.depth&&(X=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=b.stencil?As:Vi,B=b.stencil?Hi:vi);let q={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new ii(f.textureWidth,f.textureHeight,{format:bn,type:xi,depthTexture:new Ta(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let oe=e.properties.get(p);oe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(I){for(let k=0;k<I.removed.length;k++){let B=I.removed[k],X=v.indexOf(B);X>=0&&(v[X]=null,L[X].disconnect(B))}for(let k=0;k<I.added.length;k++){let B=I.added[k],X=v.indexOf(B);if(X===-1){for(let oe=0;oe<L.length;oe++)if(oe>=v.length){v.push(B),X=oe;break}else if(v[oe]===null){v[oe]=B,X=oe;break}if(X===-1)break}let q=L[X];q&&q.connect(B)}}let Y=new z,V=new z;function ie(I,k,B){Y.setFromMatrixPosition(k.matrixWorld),V.setFromMatrixPosition(B.matrixWorld);let X=Y.distanceTo(V),q=k.projectionMatrix.elements,oe=B.projectionMatrix.elements,ge=q[14]/(q[10]-1),Me=q[14]/(q[10]+1),Qe=(q[9]+1)/q[5],$=(q[9]-1)/q[5],Xt=(q[8]-1)/q[0],Ve=(oe[8]+1)/oe[0],Je=ge*Xt,Ie=ge*Ve,Tt=X/(-Xt+Ve),nt=Tt*-Xt;k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(nt),I.translateZ(Tt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();let N=ge+Tt,T=Me+Tt,Z=Je-nt,fe=Ie+(X-nt),he=Qe*Me/T*N,pe=$*Me/T*N;I.projectionMatrix.makePerspective(Z,fe,he,pe,N,T),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function ne(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;S.near=U.near=w.near=I.near,S.far=U.far=w.far=I.far,(D!==S.near||ee!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,ee=S.far);let k=I.parent,B=S.cameras;ne(S,k);for(let X=0;X<B.length;X++)ne(B[X],k);B.length===2?ie(S,w,U):S.projectionMatrix.copy(w.projectionMatrix),J(I,S,k)};function J(I,k,B){B===null?I.matrix.copy(k.matrixWorld):(I.matrix.copy(B.matrixWorld),I.matrix.invert(),I.matrix.multiply(k.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Cs*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=I)};let ae=null;function se(I,k){if(u=k.getViewerPose(c||o),_=k,u!==null){let B=u.views;g!==null&&(e.setRenderTargetFramebuffer(p,g.framebuffer),e.setRenderTarget(p));let X=!1;B.length!==S.cameras.length&&(S.cameras.length=0,X=!0);for(let q=0;q<B.length;q++){let oe=B[q],ge=null;if(g!==null)ge=g.getViewport(oe);else{let Qe=h.getViewSubImage(f,oe);ge=Qe.viewport,q===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,f.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let Me=G[q];Me===void 0&&(Me=new kt,Me.layers.enable(q),Me.viewport=new Et,G[q]=Me),Me.matrix.fromArray(oe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(oe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(ge.x,ge.y,ge.width,ge.height),q===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),X===!0&&S.cameras.push(Me)}}for(let B=0;B<L.length;B++){let X=v[B],q=L[B];X!==null&&q!==void 0&&q.update(X,k,c||o)}ae&&ae(I,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}let ue=new Yu;ue.setAnimationLoop(se),this.setAnimationLoop=function(I){ae=I},this.dispose=function(){}}};function G0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,$u(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,L,v,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&g(m,p,C)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,L,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let L=e.get(p).envMap;if(L&&(m.envMap.value=L,m.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,L,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*L,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,L){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let L=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(L.matrixWorld),m.nearDistance.value=L.shadow.camera.near,m.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function W0(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(L,v){let C=v.program;i.uniformBlockBinding(L,C)}function c(L,v){let C=s[L.id];C===void 0&&(_(L),C=u(L),s[L.id]=C,L.addEventListener("dispose",m));let O=v.program;i.updateUBOMapping(L,O);let w=e.render.frame;r[L.id]!==w&&(f(L),r[L.id]=w)}function u(L){let v=h();L.__bindingPointIndex=v;let C=n.createBuffer(),O=L.__size,w=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,O,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,C),C}function h(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(L){let v=s[L.id],C=L.uniforms,O=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,U=C.length;w<U;w++){let G=Array.isArray(C[w])?C[w]:[C[w]];for(let S=0,D=G.length;S<D;S++){let ee=G[S];if(g(ee,w,S,O)===!0){let le=ee.__offset,me=Array.isArray(ee.value)?ee.value:[ee.value],H=0;for(let Y=0;Y<me.length;Y++){let V=me[Y],ie=b(V);typeof V=="number"||typeof V=="boolean"?(ee.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,le+H,ee.__data)):V.isMatrix3?(ee.__data[0]=V.elements[0],ee.__data[1]=V.elements[1],ee.__data[2]=V.elements[2],ee.__data[3]=0,ee.__data[4]=V.elements[3],ee.__data[5]=V.elements[4],ee.__data[6]=V.elements[5],ee.__data[7]=0,ee.__data[8]=V.elements[6],ee.__data[9]=V.elements[7],ee.__data[10]=V.elements[8],ee.__data[11]=0):(V.toArray(ee.__data,H),H+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,ee.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(L,v,C,O){let w=L.value,U=v+"_"+C;if(O[U]===void 0)return typeof w=="number"||typeof w=="boolean"?O[U]=w:O[U]=w.clone(),!0;{let G=O[U];if(typeof w=="number"||typeof w=="boolean"){if(G!==w)return O[U]=w,!0}else if(G.equals(w)===!1)return G.copy(w),!0}return!1}function _(L){let v=L.uniforms,C=0,O=16;for(let U=0,G=v.length;U<G;U++){let S=Array.isArray(v[U])?v[U]:[v[U]];for(let D=0,ee=S.length;D<ee;D++){let le=S[D],me=Array.isArray(le.value)?le.value:[le.value];for(let H=0,Y=me.length;H<Y;H++){let V=me[H],ie=b(V),ne=C%O;ne!==0&&O-ne<ie.boundary&&(C+=O-ne),le.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=ie.storage}}}let w=C%O;return w>0&&(C+=O-w),L.__size=C,L.__cache={},this}function b(L){let v={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(v.boundary=4,v.storage=4):L.isVector2?(v.boundary=8,v.storage=8):L.isVector3||L.isColor?(v.boundary=16,v.storage=12):L.isVector4?(v.boundary=16,v.storage=16):L.isMatrix3?(v.boundary=48,v.storage=48):L.isMatrix4?(v.boundary=64,v.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),v}function m(L){let v=L.target;v.removeEventListener("dispose",m);let C=o.indexOf(v.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let L in s)n.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var vr=class{constructor(e={}){let{canvas:t=Kd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let g=new Uint32Array(4),_=new Int32Array(4),b=null,m=null,p=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let v=this,C=!1,O=0,w=0,U=null,G=-1,S=null,D=new Et,ee=new Et,le=null,me=new st(0),H=0,Y=t.width,V=t.height,ie=1,ne=null,J=null,ae=new Et(0,0,Y,V),se=new Et(0,0,Y,V),ue=!1,I=new mr,k=!1,B=!1,X=null,q=new lt,oe=new dt,ge=new z,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return U===null?ie:1}let $=i;function Xt(P,W){for(let K=0;K<P.length;K++){let te=P[K],j=t.getContext(te,W);if(j!==null)return j}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",xe,!1),$===null){let W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),$=Xt(W,P),$===null)throw Xt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ve,Je,Ie,Tt,nt,N,T,Z,fe,he,pe,Ue,Se,Re,We,it,de,vt,ot,Ye,Be,Le,et,gt;function Ct(){Ve=new cg($),Je=new ig($,Ve,e),Ve.init(Je),Le=new H0($,Ve,Je),Ie=new B0($,Ve,Je),Tt=new dg($),nt=new A0,N=new z0($,Ve,Ie,nt,Je,Le,Tt),T=new rg(v),Z=new lg(v),fe=new xf($,Je),et=new tg($,Ve,fe,Je),he=new ug($,fe,Tt,et),pe=new gg($,he,fe,Tt),ot=new mg($,Je,N),it=new sg(nt),Ue=new T0(v,T,Z,Ve,Je,et,it),Se=new G0(v,nt),Re=new R0,We=new U0(Ve,Je),vt=new eg(v,T,Z,Ie,pe,f,l),de=new k0(v,pe,Je),gt=new W0($,Tt,Je,Ie),Ye=new ng($,Ve,Tt,Je),Be=new hg($,Ve,Tt,Je),Tt.programs=Ue.programs,v.capabilities=Je,v.extensions=Ve,v.properties=nt,v.renderLists=Re,v.shadowMap=de,v.state=Ie,v.info=Tt}Ct();let rt=new cl(v,$);this.xr=rt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let P=Ve.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ve.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(Y,V,!1))},this.getSize=function(P){return P.set(Y,V)},this.setSize=function(P,W,K=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,V=W,t.width=Math.floor(P*ie),t.height=Math.floor(W*ie),K===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(Y*ie,V*ie).floor()},this.setDrawingBufferSize=function(P,W,K){Y=P,V=W,ie=K,t.width=Math.floor(P*K),t.height=Math.floor(W*K),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,W,K,te){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,W,K,te),Ie.viewport(D.copy(ae).multiplyScalar(ie).floor())},this.getScissor=function(P){return P.copy(se)},this.setScissor=function(P,W,K,te){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,W,K,te),Ie.scissor(ee.copy(se).multiplyScalar(ie).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(P){Ie.setScissorTest(ue=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){J=P},this.getClearColor=function(P){return P.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(P=!0,W=!0,K=!0){let te=0;if(P){let j=!1;if(U!==null){let Ee=U.texture.format;j=Ee===Hu||Ee===zu||Ee===Bu}if(j){let Ee=U.texture.type,Te=Ee===xi||Ee===vi||Ee===Ml||Ee===Hi||Ee===Fu||Ee===ku,Oe=vt.getClearColor(),qe=vt.getClearAlpha(),tt=Oe.r,Ze=Oe.g,Ke=Oe.b;Te?(g[0]=tt,g[1]=Ze,g[2]=Ke,g[3]=qe,$.clearBufferuiv($.COLOR,0,g)):(_[0]=tt,_[1]=Ze,_[2]=Ke,_[3]=qe,$.clearBufferiv($.COLOR,0,_))}else te|=$.COLOR_BUFFER_BIT}W&&(te|=$.DEPTH_BUFFER_BIT),K&&(te|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Re.dispose(),We.dispose(),nt.dispose(),T.dispose(),Z.dispose(),pe.dispose(),et.dispose(),gt.dispose(),Ue.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Gt),rt.removeEventListener("sessionend",St),X&&(X.dispose(),X=null),$t.stop()};function ve(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=Tt.autoReset,W=de.enabled,K=de.autoUpdate,te=de.needsUpdate,j=de.type;Ct(),Tt.autoReset=P,de.enabled=W,de.autoUpdate=K,de.needsUpdate=te,de.type=j}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function be(P){let W=P.target;W.removeEventListener("dispose",be),$e(W)}function $e(P){Ge(P),nt.remove(P)}function Ge(P){let W=nt.get(P).programs;W!==void 0&&(W.forEach(function(K){Ue.releaseProgram(K)}),P.isShaderMaterial&&Ue.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,K,te,j,Ee){W===null&&(W=Me);let Te=j.isMesh&&j.matrixWorld.determinant()<0,Oe=so(P,W,K,te,j);Ie.setMaterial(te,Te);let qe=K.index,tt=1;if(te.wireframe===!0){if(qe=he.getWireframeAttribute(K),qe===void 0)return;tt=2}let Ze=K.drawRange,Ke=K.attributes.position,It=Ze.start*tt,nn=(Ze.start+Ze.count)*tt;Ee!==null&&(It=Math.max(It,Ee.start*tt),nn=Math.min(nn,(Ee.start+Ee.count)*tt)),qe!==null?(It=Math.max(It,0),nn=Math.min(nn,qe.count)):Ke!=null&&(It=Math.max(It,0),nn=Math.min(nn,Ke.count));let Ot=nn-It;if(Ot<0||Ot===1/0)return;et.setup(j,te,Oe,K,qe);let yn,At=Ye;if(qe!==null&&(yn=fe.get(qe),At=Be,At.setIndex(yn)),j.isMesh)te.wireframe===!0?(Ie.setLineWidth(te.wireframeLinewidth*Qe()),At.setMode($.LINES)):At.setMode($.TRIANGLES);else if(j.isLine){let je=te.linewidth;je===void 0&&(je=1),Ie.setLineWidth(je*Qe()),j.isLineSegments?At.setMode($.LINES):j.isLineLoop?At.setMode($.LINE_LOOP):At.setMode($.LINE_STRIP)}else j.isPoints?At.setMode($.POINTS):j.isSprite&&At.setMode($.TRIANGLES);if(j.isBatchedMesh)At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)At.renderInstances(It,Ot,j.count);else if(K.isInstancedBufferGeometry){let je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Zs=Math.min(K.instanceCount,je);At.renderInstances(It,Ot,Zs)}else At.render(It,Ot)};function xt(P,W,K){P.transparent===!0&&P.side===gn&&P.forceSinglePass===!1?(P.side=hn,P.needsUpdate=!0,es(P,W,K),P.side=Fn,P.needsUpdate=!0,es(P,W,K),P.side=gn):es(P,W,K)}this.compile=function(P,W,K=null){K===null&&(K=P),m=We.get(K),m.init(),L.push(m),K.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),P!==K&&P.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(v._useLegacyLights);let te=new Set;return P.traverse(function(j){let Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Te=0;Te<Ee.length;Te++){let Oe=Ee[Te];xt(Oe,K,j),te.add(Oe)}else xt(Ee,K,j),te.add(Ee)}),L.pop(),m=null,te},this.compileAsync=function(P,W,K=null){let te=this.compile(P,W,K);return new Promise(j=>{function Ee(){if(te.forEach(function(Te){nt.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){j(P);return}setTimeout(Ee,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Mt=null;function _t(P){Mt&&Mt(P)}function Gt(){$t.stop()}function St(){$t.start()}let $t=new Yu;$t.setAnimationLoop(_t),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(P){Mt=P,rt.setAnimationLoop(P),P===null?$t.stop():$t.start()},rt.addEventListener("sessionstart",Gt),rt.addEventListener("sessionend",St),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(W),W=rt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,W,U),m=We.get(P,L.length),m.init(),L.push(m),q.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),I.setFromProjectionMatrix(q),B=this.localClippingEnabled,k=it.init(this.clippingPlanes,B),b=Re.get(P,p.length),b.init(),p.push(b),_n(P,W,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(ne,J),this.info.render.frame++,k===!0&&it.beginShadows();let K=m.state.shadowsArray;if(de.render(K,P,W),k===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),vt.render(b,P),m.setupLights(v._useLegacyLights),W.isArrayCamera){let te=W.cameras;for(let j=0,Ee=te.length;j<Ee;j++){let Te=te[j];Pr(b,P,Te,Te.viewport)}}else Pr(b,P,W);U!==null&&(N.updateMultisampleRenderTarget(U),N.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(v,P,W),et.resetDefaultState(),G=-1,S=null,L.pop(),L.length>0?m=L[L.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function _n(P,W,K,te){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||I.intersectsSprite(P)){te&&ge.setFromMatrixPosition(P.matrixWorld).applyMatrix4(q);let Te=pe.update(P),Oe=P.material;Oe.visible&&b.push(P,Te,Oe,K,ge.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||I.intersectsObject(P))){let Te=pe.update(P),Oe=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ge.copy(P.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ge.copy(Te.boundingSphere.center)),ge.applyMatrix4(P.matrixWorld).applyMatrix4(q)),Array.isArray(Oe)){let qe=Te.groups;for(let tt=0,Ze=qe.length;tt<Ze;tt++){let Ke=qe[tt],It=Oe[Ke.materialIndex];It&&It.visible&&b.push(P,Te,It,K,ge.z,Ke)}}else Oe.visible&&b.push(P,Te,Oe,K,ge.z,null)}}let Ee=P.children;for(let Te=0,Oe=Ee.length;Te<Oe;Te++)_n(Ee[Te],W,K,te)}function Pr(P,W,K,te){let j=P.opaque,Ee=P.transmissive,Te=P.transparent;m.setupLightsView(K),k===!0&&it.setGlobalState(v.clippingPlanes,K),Ee.length>0&&io(j,Ee,W,K),te&&Ie.viewport(D.copy(te)),j.length>0&&Qi(j,W,K),Ee.length>0&&Qi(Ee,W,K),Te.length>0&&Qi(Te,W,K),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function io(P,W,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Ee=Je.isWebGL2;X===null&&(X=new ii(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?hr:xi,minFilter:Mi,samples:Ee?4:0})),v.getDrawingBufferSize(oe),Ee?X.setSize(oe.x,oe.y):X.setSize(ma(oe.x),ma(oe.y));let Te=v.getRenderTarget();v.setRenderTarget(X),v.getClearColor(me),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear();let Oe=v.toneMapping;v.toneMapping=yi,Qi(P,K,te),N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X);let qe=!1;for(let tt=0,Ze=W.length;tt<Ze;tt++){let Ke=W[tt],It=Ke.object,nn=Ke.geometry,Ot=Ke.material,yn=Ke.group;if(Ot.side===gn&&It.layers.test(te.layers)){let At=Ot.side;Ot.side=hn,Ot.needsUpdate=!0,js(It,K,te,nn,Ot,yn),Ot.side=At,Ot.needsUpdate=!0,qe=!0}}qe===!0&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X)),v.setRenderTarget(Te),v.setClearColor(me,H),v.toneMapping=Oe}function Qi(P,W,K){let te=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ee=P.length;j<Ee;j++){let Te=P[j],Oe=Te.object,qe=Te.geometry,tt=te===null?Te.material:te,Ze=Te.group;Oe.layers.test(K.layers)&&js(Oe,W,K,qe,tt,Ze)}}function js(P,W,K,te,j,Ee){P.onBeforeRender(v,W,K,te,j,Ee),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(v,W,K,te,P,Ee),j.transparent===!0&&j.side===gn&&j.forceSinglePass===!1?(j.side=hn,j.needsUpdate=!0,v.renderBufferDirect(K,W,te,j,P,Ee),j.side=Fn,j.needsUpdate=!0,v.renderBufferDirect(K,W,te,j,P,Ee),j.side=gn):v.renderBufferDirect(K,W,te,j,P,Ee),P.onAfterRender(v,W,K,te,j,Ee)}function es(P,W,K){W.isScene!==!0&&(W=Me);let te=nt.get(P),j=m.state.lights,Ee=m.state.shadowsArray,Te=j.state.version,Oe=Ue.getParameters(P,j.state,Ee,W,K),qe=Ue.getProgramCacheKey(Oe),tt=te.programs;te.environment=P.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(P.isMeshStandardMaterial?Z:T).get(P.envMap||te.environment),tt===void 0&&(P.addEventListener("dispose",be),tt=new Map,te.programs=tt);let Ze=tt.get(qe);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===Te)return Ir(P,Oe),Ze}else Oe.uniforms=Ue.getUniforms(P),P.onBuild(K,Oe,v),P.onBeforeCompile(Oe,v),Ze=Ue.acquireProgram(Oe,qe),tt.set(qe,Ze),te.uniforms=Oe.uniforms;let Ke=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=it.uniform),Ir(P,Oe),te.needsLights=ao(P),te.lightsStateVersion=Te,te.needsLights&&(Ke.ambientLightColor.value=j.state.ambient,Ke.lightProbe.value=j.state.probe,Ke.directionalLights.value=j.state.directional,Ke.directionalLightShadows.value=j.state.directionalShadow,Ke.spotLights.value=j.state.spot,Ke.spotLightShadows.value=j.state.spotShadow,Ke.rectAreaLights.value=j.state.rectArea,Ke.ltc_1.value=j.state.rectAreaLTC1,Ke.ltc_2.value=j.state.rectAreaLTC2,Ke.pointLights.value=j.state.point,Ke.pointLightShadows.value=j.state.pointShadow,Ke.hemisphereLights.value=j.state.hemi,Ke.directionalShadowMap.value=j.state.directionalShadowMap,Ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ke.spotShadowMap.value=j.state.spotShadowMap,Ke.spotLightMatrix.value=j.state.spotLightMatrix,Ke.spotLightMap.value=j.state.spotLightMap,Ke.pointShadowMap.value=j.state.pointShadowMap,Ke.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=Ze,te.uniformsList=null,Ze}function Js(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=ws.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Ir(P,W){let K=nt.get(P);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function so(P,W,K,te,j){W.isScene!==!0&&(W=Me),N.resetTextureUnits();let Ee=W.fog,Te=te.isMeshStandardMaterial?W.environment:null,Oe=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ni,qe=(te.isMeshStandardMaterial?Z:T).get(te.envMap||Te),tt=te.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!K.morphAttributes.position,It=!!K.morphAttributes.normal,nn=!!K.morphAttributes.color,Ot=yi;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ot=v.toneMapping);let yn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=yn!==void 0?yn.length:0,je=nt.get(te),Zs=m.state.lights;if(k===!0&&(B===!0||P!==S)){let Jt=P===S&&te.id===G;it.setState(te,P,Jt)}let Rt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Zs.state.version||je.outputColorSpace!==Oe||j.isBatchedMesh&&je.batching===!1||!j.isBatchedMesh&&je.batching===!0||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||je.envMap!==qe||te.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==it.numPlanes||je.numIntersection!==it.numIntersection)||je.vertexAlphas!==tt||je.vertexTangents!==Ze||je.morphTargets!==Ke||je.morphNormals!==It||je.morphColors!==nn||je.toneMapping!==Ot||Je.isWebGL2===!0&&je.morphTargetsCount!==At)&&(Rt=!0):(Rt=!0,je.__version=te.version);let Wn=je.currentProgram;Rt===!0&&(Wn=es(te,W,j));let Ks=!1,Ni=!1,Qs=!1,Wt=Wn.getUniforms(),Un=je.uniforms;if(Ie.useProgram(Wn.program)&&(Ks=!0,Ni=!0,Qs=!0),te.id!==G&&(G=te.id,Ni=!0),Ks||S!==P){Wt.setValue($,"projectionMatrix",P.projectionMatrix),Wt.setValue($,"viewMatrix",P.matrixWorldInverse);let Jt=Wt.map.cameraPosition;Jt!==void 0&&Jt.setValue($,ge.setFromMatrixPosition(P.matrixWorld)),Je.logarithmicDepthBuffer&&Wt.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Wt.setValue($,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Ni=!0,Qs=!0)}if(j.isSkinnedMesh){Wt.setOptional($,j,"bindMatrix"),Wt.setOptional($,j,"bindMatrixInverse");let Jt=j.skeleton;Jt&&(Je.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Wt.setValue($,"boneTexture",Jt.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Wt.setOptional($,j,"batchingTexture"),Wt.setValue($,"batchingTexture",j._matricesTexture,N));let Nt=K.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0&&Je.isWebGL2===!0)&&ot.update(j,K,Wn),(Ni||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Wt.setValue($,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Un.envMap.value=qe,Un.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Ni&&(Wt.setValue($,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&ro(Un,Qs),Ee&&te.fog===!0&&Se.refreshFogUniforms(Un,Ee),Se.refreshMaterialUniforms(Un,te,ie,V,X),ws.upload($,Js(je),Un,N)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ws.upload($,Js(je),Un,N),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Wt.setValue($,"center",j.center),Wt.setValue($,"modelViewMatrix",j.modelViewMatrix),Wt.setValue($,"normalMatrix",j.normalMatrix),Wt.setValue($,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Jt=te.uniformsGroups;for(let er=0,Nr=Jt.length;er<Nr;er++)if(Je.isWebGL2){let tr=Jt[er];gt.update(tr,Wn),gt.bind(tr,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function ro(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function ao(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,W,K){nt.get(P.texture).__webglTexture=W,nt.get(P.depthTexture).__webglTexture=K;let te=nt.get(P);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=K===void 0,te.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let K=nt.get(P);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,K=0){U=P,O=W,w=K;let te=!0,j=null,Ee=!1,Te=!1;if(P){let qe=nt.get(P);qe.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer($.FRAMEBUFFER,null),te=!1):qe.__webglFramebuffer===void 0?N.setupRenderTarget(P):qe.__hasExternalTextures&&N.rebindTextures(P,nt.get(P.texture).__webglTexture,nt.get(P.depthTexture).__webglTexture);let tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Te=!0);let Ze=nt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?j=Ze[W][K]:j=Ze[W],Ee=!0):Je.isWebGL2&&P.samples>0&&N.useMultisampledRTT(P)===!1?j=nt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[K]:j=Ze,D.copy(P.viewport),ee.copy(P.scissor),le=P.scissorTest}else D.copy(ae).multiplyScalar(ie).floor(),ee.copy(se).multiplyScalar(ie).floor(),le=ue;if(Ie.bindFramebuffer($.FRAMEBUFFER,j)&&Je.drawBuffers&&te&&Ie.drawBuffers(P,j),Ie.viewport(D),Ie.scissor(ee),Ie.setScissorTest(le),Ee){let qe=nt.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+W,qe.__webglTexture,K)}else if(Te){let qe=nt.get(P.texture),tt=W||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,qe.__webglTexture,K||0,tt)}G=-1},this.readRenderTargetPixels=function(P,W,K,te,j,Ee,Te){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=nt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Oe=Oe[Te]),Oe){Ie.bindFramebuffer($.FRAMEBUFFER,Oe);try{let qe=P.texture,tt=qe.format,Ze=qe.type;if(tt!==bn&&Le.convert(tt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=Ze===hr&&(Ve.has("EXT_color_buffer_half_float")||Je.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(Ze!==xi&&Le.convert(Ze)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===ei&&(Je.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-te&&K>=0&&K<=P.height-j&&$.readPixels(W,K,te,j,Le.convert(tt),Le.convert(Ze),Ee)}finally{let qe=U!==null?nt.get(U).__webglFramebuffer:null;Ie.bindFramebuffer($.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(P,W,K=0){let te=Math.pow(2,-K),j=Math.floor(W.image.width*te),Ee=Math.floor(W.image.height*te);N.setTexture2D(W,0),$.copyTexSubImage2D($.TEXTURE_2D,K,0,0,P.x,P.y,j,Ee),Ie.unbindTexture()},this.copyTextureToTexture=function(P,W,K,te=0){let j=W.image.width,Ee=W.image.height,Te=Le.convert(K.format),Oe=Le.convert(K.type);N.setTexture2D(K,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,K.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,K.unpackAlignment),W.isDataTexture?$.texSubImage2D($.TEXTURE_2D,te,P.x,P.y,j,Ee,Te,Oe,W.image.data):W.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,te,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Te,W.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,te,P.x,P.y,Te,Oe,W.image),te===0&&K.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(P,W,K,te,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ee=P.max.x-P.min.x+1,Te=P.max.y-P.min.y+1,Oe=P.max.z-P.min.z+1,qe=Le.convert(te.format),tt=Le.convert(te.type),Ze;if(te.isData3DTexture)N.setTexture3D(te,0),Ze=$.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)N.setTexture2DArray(te,0),Ze=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,te.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,te.unpackAlignment);let Ke=$.getParameter($.UNPACK_ROW_LENGTH),It=$.getParameter($.UNPACK_IMAGE_HEIGHT),nn=$.getParameter($.UNPACK_SKIP_PIXELS),Ot=$.getParameter($.UNPACK_SKIP_ROWS),yn=$.getParameter($.UNPACK_SKIP_IMAGES),At=K.isCompressedTexture?K.mipmaps[j]:K.image;$.pixelStorei($.UNPACK_ROW_LENGTH,At.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,At.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,P.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,P.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,P.min.z),K.isDataTexture||K.isData3DTexture?$.texSubImage3D(Ze,j,W.x,W.y,W.z,Ee,Te,Oe,qe,tt,At.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ze,j,W.x,W.y,W.z,Ee,Te,Oe,qe,At.data)):$.texSubImage3D(Ze,j,W.x,W.y,W.z,Ee,Te,Oe,qe,tt,At),$.pixelStorei($.UNPACK_ROW_LENGTH,Ke),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,It),$.pixelStorei($.UNPACK_SKIP_PIXELS,nn),$.pixelStorei($.UNPACK_SKIP_ROWS,Ot),$.pixelStorei($.UNPACK_SKIP_IMAGES,yn),j===0&&te.generateMipmaps&&$.generateMipmap(Ze),Ie.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){O=0,w=0,U=null,Ie.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wl?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===Va?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Gi:Gu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gi?Ut:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ul=class extends vr{};ul.prototype.isWebGL1Renderer=!0;var Ps=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var yu=new z,xu=new Et,bu=new Et,q0=new z,Mu=new lt,ra=new z,ko=new wi,Su=new lt,Bo=new fr,Aa=class extends ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nc,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingSphere.expandByPoint(ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(s),e.ray.intersectsSphere(ko)!==!1&&(Su.copy(s).invert(),Bo.copy(e.ray).applyMatrix4(Su),!(this.boundingBox!==null&&Bo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;xu.fromBufferAttribute(s.attributes.skinIndex,e),bu.fromBufferAttribute(s.attributes.skinWeight,e),yu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=bu.getComponent(r);if(o!==0){let a=xu.getComponent(r);Mu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(q0.copy(yu).applyMatrix4(Mu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},_r=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ca=class extends vn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Yt,u=Yt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wu=new lt,X0=new lt,Ra=class n{constructor(e=[],t=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:X0;wu.multiplyMatrices(a,t[r]),wu.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ca(t,e,e,bn,ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new _r),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Ei=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eu=new z,Tu=new z,Au=new lt,zo=new fr,aa=new wi,Wi=class extends zt{constructor(e=new wn,t=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Eu.fromBufferAttribute(t,s-1),Tu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Eu.distanceTo(Tu);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Au.copy(s).invert(),zo.copy(e.ray).applyMatrix4(Au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,h=new z,f=new z,g=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){let p=Math.max(0,o.start),L=Math.min(_.count,o.start+o.count);for(let v=p,C=L-1;v<C;v+=g){let O=_.getX(v),w=_.getX(v+1);if(c.fromBufferAttribute(m,O),u.fromBufferAttribute(m,w),zo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),L=Math.min(m.count,o.start+o.count);for(let v=p,C=L-1;v<C;v+=g){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),zo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Cu=new z,Ru=new z,La=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cu.fromBufferAttribute(t,s),Ru.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cu.distanceTo(Ru);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var yr=class extends si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new st(16777215),this.specular=new st(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qi=class extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Y0(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Lu(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function eh(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Is=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hl=class extends Is{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:r=e,a=2*t-i;break;case Pc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:o=e,l=2*i-t;break;case Pc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(i-t)/(s-t),b=_*_,m=b*_,p=-f*m+2*f*b-f*_,L=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*_+1,v=(-1-g)*m+(1.5+g)*b+.5*_,C=g*m-g*b;for(let O=0;O!==a;++O)r[O]=p*o[u+O]+L*o[c+O]+v*o[l+O]+C*o[h+O];return r}},dl=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},fl=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===mo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,g=h+i;for(let _=0;_!==i;++_){let b=t[h+_];if(b!==t[f+_]||b!==t[g+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let g=0;g!==i;++g)t[f+g]=t[h+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ua;var Ti=class extends En{};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=ca;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends En{};Pa.prototype.ValueTypeName="color";var Ns=class extends En{};Ns.prototype.ValueTypeName="number";var pl=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)kn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ai=class extends En{InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.DefaultInterpolation=ua;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends En{};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=ca;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends En{};oi.prototype.ValueTypeName="vector";var xr=class{constructor(e,t=-1,i,s=Ad){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(J0(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(En.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Y0(l);l=Lu(l,1,u),c=Lu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ns(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,g,_,b){if(g.length!==0){let m=[],p=[];eh(g,m,p,_),m.length!==0&&b.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let g={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let b=0;b<f[_].morphTargets.length;b++)g[f[_].morphTargets[b]]=-1;for(let b in g){let m=[],p=[];for(let L=0;L!==f[_].morphTargets.length;++L){let v=f[_];m.push(v.time),p.push(v.morphTarget===b?1:0)}s.push(new Ns(".morphTargetInfluence["+b+"]",m,p))}l=g.length*o}else{let g=".bones["+t[h].name+"]";i(oi,g+".position",f,"pos",s),i(ai,g+".quaternion",f,"rot",s),i(oi,g+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function j0(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ns;case"vector":case"vector2":case"vector3":case"vector4":return oi;case"color":return Pa;case"quaternion":return ai;case"bool":case"boolean":return Ti;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function J0(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=j0(n.type);if(n.times===void 0){let t=[],i=[];eh(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ia={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},br=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let g=c[h],_=c[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return _}return null}}},Z0=new br,Bn=class{constructor(e){this.manager=e!==void 0?e:Z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zn={},ml=class extends Error{constructor(e,t){super(e),this.response=t}},Mr=class extends Bn{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ia.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:i,onError:s});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Zn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=f?parseInt(f):0,_=g!==0,b=0,m=new ReadableStream({start(p){L();function L(){h.read().then(({done:v,value:C})=>{if(v)p.close();else{b+=C.byteLength;let O=new ProgressEvent("progress",{lengthComputable:_,loaded:b,total:g});for(let w=0,U=u.length;w<U;w++){let G=u[w];G.onProgress&&G.onProgress(O)}p.enqueue(C),L()}})}}});return new Response(m)}else throw new ml(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(_=>g.decode(_))}}}).then(c=>{Ia.add(e,c);let u=Zn[e];delete Zn[e];for(let h=0,f=u.length;h<f;h++){let g=u[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{let u=Zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let h=0,f=u.length;h<f;h++){let g=u[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var gl=class extends Bn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ia.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=dr("img");function l(){u(),Ia.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Na=class extends Bn{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new Ca,a=new Mr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Qt,o.wrapT=c.wrapT!==void 0?c.wrapT:Qt,o.magFilter=c.magFilter!==void 0?c.magFilter:an,o.minFilter=c.minFilter!==void 0?c.minFilter:an,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Mi),c.mipmapCount===1&&(o.minFilter=an),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},Da=class extends Bn{constructor(e){super(e)}load(e,t,i,s){let r=new vn,o=new gl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Xi=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ua=class extends Xi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ho=new lt,Pu=new z,Iu=new z,Sr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vl=class extends Sr{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oa=class extends Xi{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Nu=new lt,ar=new z,Vo=new z,_l=class extends Sr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ar.setFromMatrixPosition(e.matrixWorld),i.position.copy(ar),Vo.copy(i.position),Vo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vo),i.updateMatrixWorld(),s.makeTranslation(-ar.x,-ar.y,-ar.z),Nu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}},Fa=class extends Xi{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yl=class extends Sr{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Xi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new yl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ka=class extends Xi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ba=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Al="\\[\\]\\.:\\/",K0=new RegExp("["+Al+"]","g"),Cl="[^"+Al+"]",Q0="[^"+Al.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",Cl),tv=/(WCOD+)?/.source.replace("WCOD",Q0),nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl),iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl),sv=new RegExp("^"+ev+tv+nv+iv+"$"),rv=["material","materials","bones","map"],xl=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(e){let t=sv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);rv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=xl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);var wr=class extends Na{constructor(e){super(e)}parse(e){function t(V){switch(V.image_type){case f:case b:if(V.colormap_length>256||V.colormap_size!==24||V.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case g:case _:case m:case p:if(V.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+V.image_type)}if(V.width<=0||V.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(V.pixel_size!==8&&V.pixel_size!==16&&V.pixel_size!==24&&V.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+V.pixel_size)}function i(V,ie,ne,J,ae){let se,ue,I=ne.pixel_size>>3,k=ne.width*ne.height*I;if(ie&&(ue=ae.subarray(J,J+=ne.colormap_length*(ne.colormap_size>>3))),V){se=new Uint8Array(k);let B,X,q,oe=0,ge=new Uint8Array(I);for(;oe<k;)if(B=ae[J++],X=(B&127)+1,B&128){for(q=0;q<I;++q)ge[q]=ae[J++];for(q=0;q<X;++q)se.set(ge,oe+q*I);oe+=I*X}else{for(X*=I,q=0;q<X;++q)se[oe+q]=ae[J++];oe+=X}}else se=ae.subarray(J,J+=ie?ne.width*ne.height:k);return{pixel_data:se,palettes:ue}}function s(V,ie,ne,J,ae,se,ue,I,k){let B=k,X,q=0,oe,ge,Me=D.width;for(ge=ie;ge!==J;ge+=ne)for(oe=ae;oe!==ue;oe+=se,q++)X=I[q],V[(oe+Me*ge)*4+3]=255,V[(oe+Me*ge)*4+2]=B[X*3+0],V[(oe+Me*ge)*4+1]=B[X*3+1],V[(oe+Me*ge)*4+0]=B[X*3+2];return V}function r(V,ie,ne,J,ae,se,ue,I){let k,B=0,X,q,oe=D.width;for(q=ie;q!==J;q+=ne)for(X=ae;X!==ue;X+=se,B+=2)k=I[B+0]+(I[B+1]<<8),V[(X+oe*q)*4+0]=(k&31744)>>7,V[(X+oe*q)*4+1]=(k&992)>>2,V[(X+oe*q)*4+2]=(k&31)<<3,V[(X+oe*q)*4+3]=k&32768?0:255;return V}function o(V,ie,ne,J,ae,se,ue,I){let k=0,B,X,q=D.width;for(X=ie;X!==J;X+=ne)for(B=ae;B!==ue;B+=se,k+=3)V[(B+q*X)*4+3]=255,V[(B+q*X)*4+2]=I[k+0],V[(B+q*X)*4+1]=I[k+1],V[(B+q*X)*4+0]=I[k+2];return V}function a(V,ie,ne,J,ae,se,ue,I){let k=0,B,X,q=D.width;for(X=ie;X!==J;X+=ne)for(B=ae;B!==ue;B+=se,k+=4)V[(B+q*X)*4+2]=I[k+0],V[(B+q*X)*4+1]=I[k+1],V[(B+q*X)*4+0]=I[k+2],V[(B+q*X)*4+3]=I[k+3];return V}function l(V,ie,ne,J,ae,se,ue,I){let k,B=0,X,q,oe=D.width;for(q=ie;q!==J;q+=ne)for(X=ae;X!==ue;X+=se,B++)k=I[B],V[(X+oe*q)*4+0]=k,V[(X+oe*q)*4+1]=k,V[(X+oe*q)*4+2]=k,V[(X+oe*q)*4+3]=255;return V}function c(V,ie,ne,J,ae,se,ue,I){let k=0,B,X,q=D.width;for(X=ie;X!==J;X+=ne)for(B=ae;B!==ue;B+=se,k+=2)V[(B+q*X)*4+0]=I[k+0],V[(B+q*X)*4+1]=I[k+0],V[(B+q*X)*4+2]=I[k+0],V[(B+q*X)*4+3]=I[k+1];return V}function u(V,ie,ne,J,ae){let se,ue,I,k,B,X;switch((D.flags&L)>>v){default:case w:se=0,I=1,B=ie,ue=0,k=1,X=ne;break;case C:se=0,I=1,B=ie,ue=ne-1,k=-1,X=-1;break;case U:se=ie-1,I=-1,B=-1,ue=0,k=1,X=ne;break;case O:se=ie-1,I=-1,B=-1,ue=ne-1,k=-1,X=-1;break}if(me)switch(D.pixel_size){case 8:l(V,ue,k,X,se,I,B,J);break;case 16:c(V,ue,k,X,se,I,B,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(D.pixel_size){case 8:s(V,ue,k,X,se,I,B,J,ae);break;case 16:r(V,ue,k,X,se,I,B,J);break;case 24:o(V,ue,k,X,se,I,B,J);break;case 32:a(V,ue,k,X,se,I,B,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return V}let h=0,f=1,g=2,_=3,b=9,m=10,p=11,L=48,v=4,C=0,O=1,w=2,U=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let G=0,S=new Uint8Array(e),D={id_length:S[G++],colormap_type:S[G++],image_type:S[G++],colormap_index:S[G++]|S[G++]<<8,colormap_length:S[G++]|S[G++]<<8,colormap_size:S[G++],origin:[S[G++]|S[G++]<<8,S[G++]|S[G++]<<8],width:S[G++]|S[G++]<<8,height:S[G++]|S[G++]<<8,pixel_size:S[G++],flags:S[G++]};if(t(D),D.id_length+G>e.length)throw new Error("THREE.TGALoader: No data.");G+=D.id_length;let ee=!1,le=!1,me=!1;switch(D.image_type){case b:ee=!0,le=!0;break;case f:le=!0;break;case m:ee=!0;break;case g:break;case p:ee=!0,me=!0;break;case _:me=!0;break}let H=new Uint8Array(D.width*D.height*4),Y=i(ee,le,D,G,S);return u(H,D.width,D.height,Y.pixel_data,Y.palettes),{data:H,width:D.width,height:D.height,flipY:!0,generateMipmaps:!0,minFilter:Mi}}};var Wa=class extends Bn{load(e,t,i,s){let r=this,o=r.path===""?Ba.extractUrlBase(e):r.path,a=new Mr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(x,y){let E=[],M=x.childNodes;for(let A=0,Q=M.length;A<Q;A++){let re=M[A];re.nodeName===y&&E.push(re)}return E}function s(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),E=new Array(y.length);for(let M=0,A=y.length;M<A;M++)E[M]=y[M];return E}function r(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),E=new Array(y.length);for(let M=0,A=y.length;M<A;M++)E[M]=parseFloat(y[M]);return E}function o(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),E=new Array(y.length);for(let M=0,A=y.length;M<A;M++)E[M]=parseInt(y[M]);return E}function a(x){return x.substring(1)}function l(){return"three_default_"+Uh++}function c(x){return Object.keys(x).length===0}function u(x){return{unit:h(i(x,"unit")[0]),upAxis:f(i(x,"up_axis")[0])}}function h(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function f(x){return x!==void 0?x.textContent:"Y_UP"}function g(x,y,E,M){let A=i(x,y)[0];if(A!==void 0){let Q=i(A,E);for(let re=0;re<Q.length;re++)M(Q[re])}}function _(x,y){for(let E in x){let M=x[E];M.build=y(x[E])}}function b(x,y){return x.build!==void 0||(x.build=y(x)),x.build}function m(x){let y={sources:{},samplers:{},channels:{}},E=!1;for(let M=0,A=x.childNodes.length;M<A;M++){let Q=x.childNodes[M];if(Q.nodeType!==1)continue;let re;switch(Q.nodeName){case"source":re=Q.getAttribute("id"),y.sources[re]=F(Q);break;case"sampler":re=Q.getAttribute("id"),y.samplers[re]=p(Q);break;case"channel":re=Q.getAttribute("target"),y.channels[re]=L(Q);break;case"animation":m(Q),E=!0;break;default:console.log(Q)}}E===!1&&(Xe.animations[x.getAttribute("id")||Us.generateUUID()]=y)}function p(x){let y={inputs:{}};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=a(A.getAttribute("source")),re=A.getAttribute("semantic");y.inputs[re]=Q;break}}return y}function L(x){let y={},M=x.getAttribute("target").split("/"),A=M.shift(),Q=M.shift(),re=Q.indexOf("(")!==-1,Ce=Q.indexOf(".")!==-1;if(Ce)M=Q.split("."),Q=M.shift(),y.member=M.shift();else if(re){let _e=Q.split("(");Q=_e.shift();for(let we=0;we<_e.length;we++)_e[we]=parseInt(_e[we].replace(/\)/,""));y.indices=_e}return y.id=A,y.sid=Q,y.arraySyntax=re,y.memberSyntax=Ce,y.sampler=a(x.getAttribute("source")),y}function v(x){let y=[],E=x.channels,M=x.samplers,A=x.sources;for(let Q in E)if(E.hasOwnProperty(Q)){let re=E[Q],Ce=M[re.sampler],_e=Ce.inputs.INPUT,we=Ce.inputs.OUTPUT,De=A[_e],ce=A[we],Ne=O(re,De,ce);D(Ne,y)}return y}function C(x){return b(Xe.animations[x],v)}function O(x,y,E){let M=Xe.nodes[x.id],A=je(M.id),Q=M.transforms[x.sid],re=M.matrix.clone().transpose(),Ce,_e,we,De,ce,Ne,Pe={};switch(Q){case"matrix":for(we=0,De=y.array.length;we<De;we++)if(Ce=y.array[we],_e=we*E.stride,Pe[Ce]===void 0&&(Pe[Ce]={}),x.arraySyntax===!0){let Dt=E.array[_e],bt=x.indices[0]+4*x.indices[1];Pe[Ce][bt]=Dt}else for(ce=0,Ne=E.stride;ce<Ne;ce++)Pe[Ce][ce]=E.array[_e+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}let ze=w(Pe,re);return{name:A.uuid,keyframes:ze}}function w(x,y){let E=[];for(let A in x)E.push({time:parseFloat(A),value:x[A]});E.sort(M);for(let A=0;A<16;A++)ee(E,A,y.elements[A]);return E;function M(A,Q){return A.time-Q.time}}let U=new z,G=new z,S=new kn;function D(x,y){let E=x.keyframes,M=x.name,A=[],Q=[],re=[],Ce=[];for(let _e=0,we=E.length;_e<we;_e++){let De=E[_e],ce=De.time,Ne=De.value;Te.fromArray(Ne).transpose(),Te.decompose(U,S,G),A.push(ce),Q.push(U.x,U.y,U.z),re.push(S.x,S.y,S.z,S.w),Ce.push(G.x,G.y,G.z)}return Q.length>0&&y.push(new oi(M+".position",A,Q)),re.length>0&&y.push(new ai(M+".quaternion",A,re)),Ce.length>0&&y.push(new oi(M+".scale",A,Ce)),y}function ee(x,y,E){let M,A=!0,Q,re;for(Q=0,re=x.length;Q<re;Q++)M=x[Q],M.value[y]===void 0?M.value[y]=null:A=!1;if(A===!0)for(Q=0,re=x.length;Q<re;Q++)M=x[Q],M.value[y]=E;else le(x,y)}function le(x,y){let E,M;for(let A=0,Q=x.length;A<Q;A++){let re=x[A];if(re.value[y]===null){if(E=me(x,A,y),M=H(x,A,y),E===null){re.value[y]=M.value[y];continue}if(M===null){re.value[y]=E.value[y];continue}Y(re,E,M,y)}}}function me(x,y,E){for(;y>=0;){let M=x[y];if(M.value[E]!==null)return M;y--}return null}function H(x,y,E){for(;y<x.length;){let M=x[y];if(M.value[E]!==null)return M;y++}return null}function Y(x,y,E,M){if(E.time-y.time===0){x.value[M]=y.value[M];return}x.value[M]=(x.time-y.time)*(E.value[M]-y.value[M])/(E.time-y.time)+y.value[M]}function V(x){let y={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":y.animations.push(a(A.getAttribute("url")));break}}Xe.clips[x.getAttribute("id")]=y}function ie(x){let y=[],E=x.name,M=x.end-x.start||-1,A=x.animations;for(let Q=0,re=A.length;Q<re;Q++){let Ce=C(A[Q]);for(let _e=0,we=Ce.length;_e<we;_e++)y.push(Ce[_e])}return new xr(E,M,y)}function ne(x){return b(Xe.clips[x],ie)}function J(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"skin":y.id=a(A.getAttribute("source")),y.skin=ae(A);break;case"morph":y.id=a(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Xe.controllers[x.getAttribute("id")]=y}function ae(x){let y={sources:{}};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(A.textContent);break;case"source":let Q=A.getAttribute("id");y.sources[Q]=F(A);break;case"joints":y.joints=se(A);break;case"vertex_weights":y.vertexWeights=ue(A);break}}return y}function se(x){let y={inputs:{}};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=A.getAttribute("semantic"),re=a(A.getAttribute("source"));y.inputs[Q]=re;break}}return y}function ue(x){let y={inputs:{}};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=A.getAttribute("semantic"),re=a(A.getAttribute("source")),Ce=parseInt(A.getAttribute("offset"));y.inputs[Q]={id:re,offset:Ce};break;case"vcount":y.vcount=o(A.textContent);break;case"v":y.v=o(A.textContent);break}}return y}function I(x){let y={id:x.id},E=Xe.geometries[y.id];return x.skin!==void 0&&(y.skin=k(x.skin),E.sources.skinIndices=y.skin.indices,E.sources.skinWeights=y.skin.weights),y}function k(x){let E={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=x.sources,A=x.vertexWeights,Q=A.vcount,re=A.v,Ce=A.inputs.JOINT.offset,_e=A.inputs.WEIGHT.offset,we=x.sources[x.joints.inputs.JOINT],De=x.sources[x.joints.inputs.INV_BIND_MATRIX],ce=M[A.inputs.WEIGHT.id].array,Ne=0,Pe,ze,Fe;for(Pe=0,Fe=Q.length;Pe<Fe;Pe++){let bt=Q[Pe],ft=[];for(ze=0;ze<bt;ze++){let pt=re[Ne+Ce],qn=re[Ne+_e],cn=ce[qn];ft.push({index:pt,weight:cn}),Ne+=2}for(ft.sort(Dt),ze=0;ze<4;ze++){let pt=ft[ze];pt!==void 0?(E.indices.array.push(pt.index),E.weights.array.push(pt.weight)):(E.indices.array.push(0),E.weights.array.push(0))}}for(x.bindShapeMatrix?E.bindMatrix=new lt().fromArray(x.bindShapeMatrix).transpose():E.bindMatrix=new lt().identity(),Pe=0,Fe=we.array.length;Pe<Fe;Pe++){let bt=we.array[Pe],ft=new lt().fromArray(De.array,Pe*De.stride).transpose();E.joints.push({name:bt,boneInverse:ft})}return E;function Dt(bt,ft){return ft.weight-bt.weight}}function B(x){return b(Xe.controllers[x],I)}function X(x){let y={init_from:i(x,"init_from")[0].textContent};Xe.images[x.getAttribute("id")]=y}function q(x){return x.build!==void 0?x.build:x.init_from}function oe(x){let y=Xe.images[x];return y!==void 0?b(y,q):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function ge(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":y.profile=Me(A);break}}Xe.effects[x.getAttribute("id")]=y}function Me(x){let y={surfaces:{},samplers:{}};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"newparam":Qe(A,y);break;case"technique":y.technique=Ve(A);break;case"extra":y.extra=T(A);break}}return y}function Qe(x,y){let E=x.getAttribute("sid");for(let M=0,A=x.childNodes.length;M<A;M++){let Q=x.childNodes[M];if(Q.nodeType===1)switch(Q.nodeName){case"surface":y.surfaces[E]=$(Q);break;case"sampler2D":y.samplers[E]=Xt(Q);break}}}function $(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"init_from":y.init_from=A.textContent;break}}return y}function Xt(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"source":y.source=A.textContent;break}}return y}function Ve(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=A.nodeName,y.parameters=Je(A);break;case"extra":y.extra=T(A);break}}return y}function Je(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[A.nodeName]=Ie(A);break;case"transparent":y[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:Ie(A)};break}}return y}function Ie(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"color":y[A.nodeName]=r(A.textContent);break;case"float":y[A.nodeName]=parseFloat(A.textContent);break;case"texture":y[A.nodeName]={id:A.getAttribute("texture"),extra:Tt(A)};break}}return y}function Tt(x){let y={technique:{}};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"extra":nt(A,y);break}}return y}function nt(x,y){for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"technique":N(A,y);break}}}function N(x,y){for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?y.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?y.technique[A.nodeName]=0:y.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=fe(A);break}}}function T(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"technique":y.technique=Z(A);break}}return y}function Z(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"double_sided":y[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=fe(A);break}}return y}function fe(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"texture":y[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Tt(A)};break}}return y}function he(x){return x}function pe(x){return b(Xe.effects[x],he)}function Ue(x){let y={name:x.getAttribute("name")};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":y.url=a(A.getAttribute("url"));break}}Xe.materials[x.getAttribute("id")]=y}function Se(x){let y,E=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(E=E.toLowerCase(),E){case"tga":y=oo;break;default:y=tr}return y}function Re(x){let y=pe(x.url),E=y.profile.technique,M;switch(E.type){case"phong":case"blinn":M=new yr;break;case"lambert":M=new qi;break;default:M=new Rn;break}M.name=x.name||"";function A(_e,we=null){let De=y.profile.samplers[_e.id],ce=null;if(De!==void 0){let Ne=y.profile.surfaces[De.source];ce=oe(Ne.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=oe(_e.id);if(ce!==null){let Ne=Se(ce);if(Ne!==void 0){let Pe=Ne.load(ce),ze=_e.extra;if(ze!==void 0&&ze.technique!==void 0&&c(ze.technique)===!1){let Fe=ze.technique;Pe.wrapS=Fe.wrapU?bi:Qt,Pe.wrapT=Fe.wrapV?bi:Qt,Pe.offset.set(Fe.offsetU||0,Fe.offsetV||0),Pe.repeat.set(Fe.repeatU||1,Fe.repeatV||1)}else Pe.wrapS=bi,Pe.wrapT=bi;return we!==null&&(Pe.colorSpace=we),Pe}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",_e.id),null}let Q=E.parameters;for(let _e in Q){let we=Q[_e];switch(_e){case"diffuse":we.color&&M.color.fromArray(we.color),we.texture&&(M.map=A(we.texture,Ut));break;case"specular":we.color&&M.specular&&M.specular.fromArray(we.color),we.texture&&(M.specularMap=A(we.texture));break;case"bump":we.texture&&(M.normalMap=A(we.texture));break;case"ambient":we.texture&&(M.lightMap=A(we.texture,Ut));break;case"shininess":we.float&&M.shininess&&(M.shininess=we.float);break;case"emission":we.color&&M.emissive&&M.emissive.fromArray(we.color),we.texture&&(M.emissiveMap=A(we.texture,Ut));break}}M.color.convertSRGBToLinear(),M.specular&&M.specular.convertSRGBToLinear(),M.emissive&&M.emissive.convertSRGBToLinear();let re=Q.transparent,Ce=Q.transparency;if(Ce===void 0&&re&&(Ce={float:1}),re===void 0&&Ce&&(re={opaque:"A_ONE",data:{color:[1,1,1,1]}}),re&&Ce)if(re.data.texture)M.transparent=!0;else{let _e=re.data.color;switch(re.opaque){case"A_ONE":M.opacity=_e[3]*Ce.float;break;case"RGB_ZERO":M.opacity=1-_e[0]*Ce.float;break;case"A_ZERO":M.opacity=1-_e[3]*Ce.float;break;case"RGB_ONE":M.opacity=_e[0]*Ce.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',re.opaque)}M.opacity<1&&(M.transparent=!0)}if(E.extra!==void 0&&E.extra.technique!==void 0){let _e=E.extra.technique;for(let we in _e){let De=_e[we];switch(we){case"double_sided":M.side=De===1?gn:Fn;break;case"bump":M.normalMap=A(De.texture),M.normalScale=new dt(1,1);break}}}return M}function We(x){return b(Xe.materials[x],Re)}function it(x){let y={name:x.getAttribute("name")};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"optics":y.optics=de(A);break}}Xe.cameras[x.getAttribute("id")]=y}function de(x){for(let y=0;y<x.childNodes.length;y++){let E=x.childNodes[y];switch(E.nodeName){case"technique_common":return vt(E)}}return{}}function vt(x){let y={};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];switch(M.nodeName){case"perspective":case"orthographic":y.technique=M.nodeName,y.parameters=ot(M);break}}return y}function ot(x){let y={};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[M.nodeName]=parseFloat(M.textContent);break}}return y}function Ye(x){let y;switch(x.optics.technique){case"perspective":y=new kt(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let E=x.optics.parameters.ymag,M=x.optics.parameters.xmag,A=x.optics.parameters.aspect_ratio;M=M===void 0?E*A:M,E=E===void 0?M/A:E,M*=.5,E*=.5,y=new Ls(-M,M,E,-E,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:y=new kt;break}return y.name=x.name||"",y}function Be(x){let y=Xe.cameras[x];return y!==void 0?b(y,Ye):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function Le(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"technique_common":y=et(A);break}}Xe.lights[x.getAttribute("id")]=y}function et(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=A.nodeName,y.parameters=gt(A)}}return y}function gt(x){let y={};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"color":let Q=r(A.textContent);y.color=new st().fromArray(Q).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let re=parseFloat(A.textContent);y.distance=re?Math.sqrt(1/re):0;break}}return y}function Ct(x){let y;switch(x.technique){case"directional":y=new Ds;break;case"point":y=new Fa;break;case"spot":y=new Oa;break;case"ambient":y=new ka;break}return x.parameters.color&&y.color.copy(x.parameters.color),x.parameters.distance&&(y.distance=x.parameters.distance),y}function rt(x){let y=Xe.lights[x];return y!==void 0?b(y,Ct):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function ve(x){let y={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},E=i(x,"mesh")[0];if(E!==void 0){for(let M=0;M<E.childNodes.length;M++){let A=E.childNodes[M];if(A.nodeType!==1)continue;let Q=A.getAttribute("id");switch(A.nodeName){case"source":y.sources[Q]=F(A);break;case"vertices":y.vertices=xe(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(be(A));break;default:console.log(A)}}Xe.geometries[x.getAttribute("id")]=y}}function F(x){let y={array:[],stride:3};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"float_array":y.array=r(M.textContent);break;case"Name_array":y.array=s(M.textContent);break;case"technique_common":let A=i(M,"accessor")[0];A!==void 0&&(y.stride=parseInt(A.getAttribute("stride")));break}}return y}function xe(x){let y={};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];M.nodeType===1&&(y[M.getAttribute("semantic")]=a(M.getAttribute("source")))}return y}function be(x){let y={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let E=0,M=x.childNodes.length;E<M;E++){let A=x.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"input":let Q=a(A.getAttribute("source")),re=A.getAttribute("semantic"),Ce=parseInt(A.getAttribute("offset")),_e=parseInt(A.getAttribute("set")),we=_e>0?re+_e:re;y.inputs[we]={id:Q,offset:Ce},y.stride=Math.max(y.stride,Ce+1),re==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=o(A.textContent);break;case"p":y.p=o(A.textContent);break}}return y}function $e(x){let y={};for(let E=0;E<x.length;E++){let M=x[E];y[M.type]===void 0&&(y[M.type]=[]),y[M.type].push(M)}return y}function Ge(x){let y=0;for(let E=0,M=x.length;E<M;E++)x[E].hasUV===!0&&y++;y>0&&y<x.length&&(x.uvsNeedsFix=!0)}function xt(x){let y={},E=x.sources,M=x.vertices,A=x.primitives;if(A.length===0)return{};let Q=$e(A);for(let re in Q){let Ce=Q[re];Ge(Ce),y[re]=Mt(Ce,E,M)}return y}function Mt(x,y,E){let M={},A={array:[],stride:0},Q={array:[],stride:0},re={array:[],stride:0},Ce={array:[],stride:0},_e={array:[],stride:0},we={array:[],stride:4},De={array:[],stride:4},ce=new wn,Ne=[],Pe=0;for(let ze=0;ze<x.length;ze++){let Fe=x[ze],Dt=Fe.inputs,bt=0;switch(Fe.type){case"lines":case"linestrips":bt=Fe.count*2;break;case"triangles":bt=Fe.count*3;break;case"polylist":for(let ft=0;ft<Fe.count;ft++){let pt=Fe.vcount[ft];switch(pt){case 3:bt+=3;break;case 4:bt+=6;break;default:bt+=(pt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Fe.type)}ce.addGroup(Pe,bt,ze),Pe+=bt,Fe.material&&Ne.push(Fe.material);for(let ft in Dt){let pt=Dt[ft];switch(ft){case"VERTEX":for(let qn in E){let cn=E[qn];switch(qn){case"POSITION":let ts=A.array.length;if(_t(Fe,y[cn],pt.offset,A.array),A.stride=y[cn].stride,y.skinWeights&&y.skinIndices&&(_t(Fe,y.skinIndices,pt.offset,we.array),_t(Fe,y.skinWeights,pt.offset,De.array)),Fe.hasUV===!1&&x.uvsNeedsFix===!0){let Oh=(A.array.length-ts)/A.stride;for(let jl=0;jl<Oh;jl++)re.array.push(0,0)}break;case"NORMAL":_t(Fe,y[cn],pt.offset,Q.array),Q.stride=y[cn].stride;break;case"COLOR":_t(Fe,y[cn],pt.offset,_e.array),_e.stride=y[cn].stride;break;case"TEXCOORD":_t(Fe,y[cn],pt.offset,re.array),re.stride=y[cn].stride;break;case"TEXCOORD1":_t(Fe,y[cn],pt.offset,Ce.array),re.stride=y[cn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',qn)}}break;case"NORMAL":_t(Fe,y[pt.id],pt.offset,Q.array),Q.stride=y[pt.id].stride;break;case"COLOR":_t(Fe,y[pt.id],pt.offset,_e.array,!0),_e.stride=y[pt.id].stride;break;case"TEXCOORD":_t(Fe,y[pt.id],pt.offset,re.array),re.stride=y[pt.id].stride;break;case"TEXCOORD1":_t(Fe,y[pt.id],pt.offset,Ce.array),Ce.stride=y[pt.id].stride;break}}}return A.array.length>0&&ce.setAttribute("position",new Bt(A.array,A.stride)),Q.array.length>0&&ce.setAttribute("normal",new Bt(Q.array,Q.stride)),_e.array.length>0&&ce.setAttribute("color",new Bt(_e.array,_e.stride)),re.array.length>0&&ce.setAttribute("uv",new Bt(re.array,re.stride)),Ce.array.length>0&&ce.setAttribute("uv1",new Bt(Ce.array,Ce.stride)),we.array.length>0&&ce.setAttribute("skinIndex",new Bt(we.array,we.stride)),De.array.length>0&&ce.setAttribute("skinWeight",new Bt(De.array,De.stride)),M.data=ce,M.type=x[0].type,M.materialKeys=Ne,M}function _t(x,y,E,M,A=!1){let Q=x.p,re=x.stride,Ce=x.vcount;function _e(ce){let Ne=Q[ce+E]*De,Pe=Ne+De;for(;Ne<Pe;Ne++)M.push(we[Ne]);if(A){let ze=M.length-De-1;Dr.setRGB(M[ze+0],M[ze+1],M[ze+2]).convertSRGBToLinear(),M[ze+0]=Dr.r,M[ze+1]=Dr.g,M[ze+2]=Dr.b}}let we=y.array,De=y.stride;if(x.vcount!==void 0){let ce=0;for(let Ne=0,Pe=Ce.length;Ne<Pe;Ne++){let ze=Ce[Ne];if(ze===4){let Fe=ce+re*0,Dt=ce+re*1,bt=ce+re*2,ft=ce+re*3;_e(Fe),_e(Dt),_e(ft),_e(Dt),_e(bt),_e(ft)}else if(ze===3){let Fe=ce+re*0,Dt=ce+re*1,bt=ce+re*2;_e(Fe),_e(Dt),_e(bt)}else if(ze>4)for(let Fe=1,Dt=ze-2;Fe<=Dt;Fe++){let bt=ce+re*0,ft=ce+re*Fe,pt=ce+re*(Fe+1);_e(bt),_e(ft),_e(pt)}ce+=re*ze}}else for(let ce=0,Ne=Q.length;ce<Ne;ce+=re)_e(ce)}function Gt(x){return b(Xe.geometries[x],xt)}function St(x){let y={name:x.getAttribute("name")||"",joints:{},links:[]};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"technique_common":Pr(M,y);break}}Xe.kinematicsModels[x.getAttribute("id")]=y}function $t(x){return x.build!==void 0?x.build:x}function _n(x){return b(Xe.kinematicsModels[x],$t)}function Pr(x,y){for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"joint":y.joints[M.getAttribute("sid")]=io(M);break;case"link":y.links.push(js(M));break}}}function io(x){let y;for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":y=Qi(M);break}}return y}function Qi(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new z,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=r(M.textContent);y.axis.fromArray(A);break;case"limits":let Q=M.getElementsByTagName("max")[0],re=M.getElementsByTagName("min")[0];y.limits.max=parseFloat(Q.textContent),y.limits.min=parseFloat(re.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function js(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":y.attachments.push(es(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(Js(M));break}}return y}function es(x){let y={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"link":y.links.push(js(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(Js(M));break}}return y}function Js(x){let y={type:x.nodeName},E=r(x.textContent);switch(y.type){case"matrix":y.obj=new lt,y.obj.fromArray(E).transpose();break;case"translate":y.obj=new z,y.obj.fromArray(E);break;case"rotate":y.obj=new z,y.obj.fromArray(E),y.angle=Us.degToRad(E[3]);break}return y}function Ir(x){let y={name:x.getAttribute("name")||"",rigidBodies:{}};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":y.rigidBodies[M.getAttribute("name")]={},so(M,y.rigidBodies[M.getAttribute("name")]);break}}Xe.physicsModels[x.getAttribute("id")]=y}function so(x,y){for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"technique_common":ro(M,y);break}}}function ro(x,y){for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"inertia":y.inertia=r(M.textContent);break;case"mass":y.mass=r(M.textContent)[0];break}}}function ao(x){let y={bindJointAxis:[]};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":y.bindJointAxis.push(P(M));break}}Xe.kinematicsScenes[a(x.getAttribute("url"))]=y}function P(x){let y={target:x.getAttribute("target").split("/").pop()};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=M.getElementsByTagName("param")[0];y.axis=A.textContent;let Q=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=Q.substring(0,Q.length-1);break}}return y}function W(x){return x.build!==void 0?x.build:x}function K(x){return b(Xe.kinematicsScenes[x],W)}function te(){let x=Object.keys(Xe.kinematicsModels)[0],y=Object.keys(Xe.kinematicsScenes)[0],E=Object.keys(Xe.visualScenes)[0];if(x===void 0||y===void 0)return;let M=_n(x),A=K(y),Q=Ks(E),re=A.bindJointAxis,Ce={};for(let De=0,ce=re.length;De<ce;De++){let Ne=re[De],Pe=Nt.querySelector('[sid="'+Ne.target+'"]');if(Pe){let ze=Pe.parentElement;_e(Ne.jointIndex,ze)}}function _e(De,ce){let Ne=ce.getAttribute("name"),Pe=M.joints[De];Q.traverse(function(ze){ze.name===Ne&&(Ce[De]={object:ze,transforms:j(ce),joint:Pe,position:Pe.zeroPosition})})}let we=new lt;Yl={joints:M&&M.joints,getJointValue:function(De){let ce=Ce[De];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+De+" doesn't exist.")},setJointValue:function(De,ce){let Ne=Ce[De];if(Ne){let Pe=Ne.joint;if(ce>Pe.limits.max||ce<Pe.limits.min)console.warn("THREE.ColladaLoader: Joint "+De+" value "+ce+" outside of limits (min: "+Pe.limits.min+", max: "+Pe.limits.max+").");else if(Pe.static)console.warn("THREE.ColladaLoader: Joint "+De+" is static.");else{let ze=Ne.object,Fe=Pe.axis,Dt=Ne.transforms;Te.identity();for(let bt=0;bt<Dt.length;bt++){let ft=Dt[bt];if(ft.sid&&ft.sid.indexOf(De)!==-1)switch(Pe.type){case"revolute":Te.multiply(we.makeRotationAxis(Fe,Us.degToRad(ce)));break;case"prismatic":Te.multiply(we.makeTranslation(Fe.x*ce,Fe.y*ce,Fe.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Pe.type);break}else switch(ft.type){case"matrix":Te.multiply(ft.obj);break;case"translate":Te.multiply(we.makeTranslation(ft.obj.x,ft.obj.y,ft.obj.z));break;case"scale":Te.scale(ft.obj);break;case"rotate":Te.multiply(we.makeRotationAxis(ft.obj,ft.angle));break}}ze.matrix.copy(Te),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),Ce[De].position=ce}}else console.log("THREE.ColladaLoader: "+De+" does not exist.")}}}function j(x){let y=[],E=Nt.querySelector('[id="'+x.id+'"]');for(let M=0;M<E.childNodes.length;M++){let A=E.childNodes[M];if(A.nodeType!==1)continue;let Q,re;switch(A.nodeName){case"matrix":Q=r(A.textContent);let Ce=new lt().fromArray(Q).transpose();y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Ce});break;case"translate":case"scale":Q=r(A.textContent),re=new z().fromArray(Q),y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:re});break;case"rotate":Q=r(A.textContent),re=new z().fromArray(Q);let _e=Us.degToRad(Q[3]);y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:re,angle:_e});break}}return y}function Ee(x){let y=x.getElementsByTagName("node");for(let E=0;E<y.length;E++){let M=y[E];M.hasAttribute("id")===!1&&M.setAttribute("id",l())}}let Te=new lt,Oe=new z;function qe(x){let y={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];if(M.nodeType!==1)continue;let A;switch(M.nodeName){case"node":y.nodes.push(M.getAttribute("id")),qe(M);break;case"instance_camera":y.instanceCameras.push(a(M.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(tt(M));break;case"instance_light":y.instanceLights.push(a(M.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(tt(M));break;case"instance_node":y.instanceNodes.push(a(M.getAttribute("url")));break;case"matrix":A=r(M.textContent),y.matrix.multiply(Te.fromArray(A).transpose()),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":A=r(M.textContent),Oe.fromArray(A),y.matrix.multiply(Te.makeTranslation(Oe.x,Oe.y,Oe.z)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":A=r(M.textContent);let Q=Us.degToRad(A[3]);y.matrix.multiply(Te.makeRotationAxis(Oe.fromArray(A),Q)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":A=r(M.textContent),y.matrix.scale(Oe.fromArray(A)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return At(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):Xe.nodes[y.id]=y,y}function tt(x){let y={id:a(x.getAttribute("url")),materials:{},skeletons:[]};for(let E=0;E<x.childNodes.length;E++){let M=x.childNodes[E];switch(M.nodeName){case"bind_material":let A=M.getElementsByTagName("instance_material");for(let Q=0;Q<A.length;Q++){let re=A[Q],Ce=re.getAttribute("symbol"),_e=re.getAttribute("target");y.materials[Ce]=a(_e)}break;case"skeleton":y.skeletons.push(a(M.textContent));break;default:break}}return y}function Ze(x,y){let E=[],M=[],A,Q,re;for(A=0;A<x.length;A++){let we=x[A],De;if(At(we))De=je(we),Ke(De,y,E);else if(Wn(we)){let Ne=Xe.visualScenes[we].children;for(let Pe=0;Pe<Ne.length;Pe++){let ze=Ne[Pe];if(ze.type==="JOINT"){let Fe=je(ze.id);Ke(Fe,y,E)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",we)}for(A=0;A<y.length;A++)for(Q=0;Q<E.length;Q++)if(re=E[Q],re.bone.name===y[A].name){M[A]=re,re.processed=!0;break}for(A=0;A<E.length;A++)re=E[A],re.processed===!1&&(M.push(re),re.processed=!0);let Ce=[],_e=[];for(A=0;A<M.length;A++)re=M[A],Ce.push(re.bone),_e.push(re.boneInverse);return new Ra(Ce,_e)}function Ke(x,y,E){x.traverse(function(M){if(M.isBone===!0){let A;for(let Q=0;Q<y.length;Q++){let re=y[Q];if(re.name===M.name){A=re.boneInverse;break}}A===void 0&&(A=new lt),E.push({bone:M,boneInverse:A,processed:!1})}})}function It(x){let y=[],E=x.matrix,M=x.nodes,A=x.type,Q=x.instanceCameras,re=x.instanceControllers,Ce=x.instanceLights,_e=x.instanceGeometries,we=x.instanceNodes;for(let ce=0,Ne=M.length;ce<Ne;ce++)y.push(je(M[ce]));for(let ce=0,Ne=Q.length;ce<Ne;ce++){let Pe=Be(Q[ce]);Pe!==null&&y.push(Pe.clone())}for(let ce=0,Ne=re.length;ce<Ne;ce++){let Pe=re[ce],ze=B(Pe.id),Fe=Gt(ze.id),Dt=yn(Fe,Pe.materials),bt=Pe.skeletons,ft=ze.skin.joints,pt=Ze(bt,ft);for(let qn=0,cn=Dt.length;qn<cn;qn++){let ts=Dt[qn];ts.isSkinnedMesh&&(ts.bind(pt,ze.skin.bindMatrix),ts.normalizeSkinWeights()),y.push(ts)}}for(let ce=0,Ne=Ce.length;ce<Ne;ce++){let Pe=rt(Ce[ce]);Pe!==null&&y.push(Pe.clone())}for(let ce=0,Ne=_e.length;ce<Ne;ce++){let Pe=_e[ce],ze=Gt(Pe.id),Fe=yn(ze,Pe.materials);for(let Dt=0,bt=Fe.length;Dt<bt;Dt++)y.push(Fe[Dt])}for(let ce=0,Ne=we.length;ce<Ne;ce++)y.push(je(we[ce]).clone());let De;if(M.length===0&&y.length===1)De=y[0];else{De=A==="JOINT"?new _r:new un;for(let ce=0;ce<y.length;ce++)De.add(y[ce])}return De.name=A==="JOINT"?x.sid:x.name,De.matrix.copy(E),De.matrix.decompose(De.position,De.quaternion,De.scale),De}let nn=new Rn({name:Bn.DEFAULT_MATERIAL_NAME,color:16711935});function Ot(x,y){let E=[];for(let M=0,A=x.length;M<A;M++){let Q=y[x[M]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[M]),E.push(nn)):E.push(We(Q))}return E}function yn(x,y){let E=[];for(let M in x){let A=x[M],Q=Ot(A.materialKeys,y);if(Q.length===0&&(M==="lines"||M==="linestrips"?Q.push(new Ei):Q.push(new yr)),M==="lines"||M==="linestrips")for(let we=0,De=Q.length;we<De;we++){let ce=Q[we];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Ne=new Ei;Ne.color.copy(ce.color),Ne.opacity=ce.opacity,Ne.transparent=ce.transparent,Q[we]=Ne}}let re=A.data.attributes.skinIndex!==void 0,Ce=Q.length===1?Q[0]:Q,_e;switch(M){case"lines":_e=new La(A.data,Ce);break;case"linestrips":_e=new Wi(A.data,Ce);break;case"triangles":case"polylist":re?_e=new Aa(A.data,Ce):_e=new ln(A.data,Ce);break}E.push(_e)}return E}function At(x){return Xe.nodes[x]!==void 0}function je(x){return b(Xe.nodes[x],It)}function Zs(x){let y={name:x.getAttribute("name"),children:[]};Ee(x);let E=i(x,"node");for(let M=0;M<E.length;M++)y.children.push(qe(E[M]));Xe.visualScenes[x.getAttribute("id")]=y}function Rt(x){let y=new un;y.name=x.name;let E=x.children;for(let M=0;M<E.length;M++){let A=E[M];y.add(je(A.id))}return y}function Wn(x){return Xe.visualScenes[x]!==void 0}function Ks(x){return b(Xe.visualScenes[x],Rt)}function Ni(x){let y=i(x,"instance_visual_scene")[0];return Ks(a(y.getAttribute("url")))}function Qs(){let x=Xe.clips;if(c(x)===!0){if(c(Xe.animations)===!1){let y=[];for(let E in Xe.animations){let M=C(E);for(let A=0,Q=M.length;A<Q;A++)y.push(M[A])}Ur.push(new xr("default",-1,y))}}else for(let y in x)Ur.push(ne(y))}function Wt(x){let y="",E=[x];for(;E.length;){let M=E.shift();M.nodeType===Node.TEXT_NODE?y+=M.textContent:(y+=`
`,E.push.apply(E,M.childNodes))}return y.trim()}if(e.length===0)return{scene:new Ps};let Un=new DOMParser().parseFromString(e,"application/xml"),Nt=i(Un,"COLLADA")[0],Jt=Un.getElementsByTagName("parsererror")[0];if(Jt!==void 0){let x=i(Jt,"div")[0],y;return x?y=x.textContent:y=Wt(Jt),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let er=Nt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",er);let Nr=u(i(Nt,"asset")[0]),tr=new Da(this.manager);tr.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let oo;wr&&(oo=new wr(this.manager),oo.setPath(this.resourcePath||t));let Dr=new st,Ur=[],Yl={},Uh=0,Xe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};g(Nt,"library_animations","animation",m),g(Nt,"library_animation_clips","animation_clip",V),g(Nt,"library_controllers","controller",J),g(Nt,"library_images","image",X),g(Nt,"library_effects","effect",ge),g(Nt,"library_materials","material",Ue),g(Nt,"library_cameras","camera",it),g(Nt,"library_lights","light",Le),g(Nt,"library_geometries","geometry",ve),g(Nt,"library_nodes","node",qe),g(Nt,"library_visual_scenes","visual_scene",Zs),g(Nt,"library_kinematics_models","kinematics_model",St),g(Nt,"library_physics_models","physics_model",Ir),g(Nt,"scene","instance_kinematics_scene",ao),_(Xe.animations,v),_(Xe.clips,ie),_(Xe.controllers,I),_(Xe.images,q),_(Xe.effects,he),_(Xe.materials,Re),_(Xe.cameras,Ye),_(Xe.lights,Ct),_(Xe.geometries,xt),_(Xe.visualScenes,Rt),Qs(),te();let Or=Ni(i(Nt,"scene")[0]);return Or.animations=Ur,Nr.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Or.rotation.set(-Math.PI/2,0,0)),Or.scale.multiplyScalar(Nr.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ur},kinematics:Yl,library:Xe,scene:Or}}};var en=["en","fr","ca","es"],Yi={en:"English",fr:"Fran\xE7ais",ca:"Catal\xE0",es:"Espa\xF1ol"},ov={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Hn(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of ov[e]||en)if(n[t])return n[t];return""}var $a={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Tr={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function zn(){return Object.fromEntries(en.map(n=>[n,""]))}function fn(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:en.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||zn(),e.sub=e.sub||zn(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||zn(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=$a[t.layout]?t.layout:"carousel",t.card=Tr[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network,t.skills=t.skills===void 0?t.id==="expertise":!!t.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(en.map(s=>[s,t[i]||""]))),en.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit=""),i&&typeof i.caption=="string"&&(i.caption=Object.fromEntries(en.map(s=>[s,i.caption])))}),t.spots=Array.isArray(t.spots)?t.spots.filter(cv):[],t.skills=Array.isArray(t.skills)?t.skills.filter(i=>typeof i=="string"):[],t.logos=Array.isArray(t.logos)?t.logos.filter(i=>typeof i=="string"&&i):[],t.published===void 0&&(t.published=!0)}),n}function ji(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function li(n){return String(n||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||"item"}function Vn(n,e){let t=li(n),i=2,s=new Set(e);for(;s.has(t);)t=li(n)+"-"+i++;return t}var lv=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Ll(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!lv.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Pl(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var cv=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="",th={Barcelone:"Barcelona",Venise:"Venice",Bruxelles:"Brussels",P\u00E9kin:"Beijing",Pekin:"Beijing",Londres:"London",Lisbonne:"Lisbon",S\u00E9oul:"Seoul",Mexico:"Mexico City",Montr\u00E9al:"Montreal",Beyrouth:"Beirut",Bogot\u00E1:"Bogota",Duba\u00EF:"Dubai",Murano:"Murano",Charjah:"Sharjah",Lausana:"Lausanne"};function nh(n){let e=[],t=" "+String(n||"")+" ",i=[...Object.keys(Gn),...Object.keys(th)].sort((r,o)=>o.length-r.length),s=t;for(let r of i){let o=new RegExp("[^\\p{L}]"+r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}])","iu"),a=s.search(o);if(a>=0){let l=th[r]||r;e.some(c=>c.c===l)||e.push({c:l,at:a}),s=s.replace(o,c=>c[0]+" ".repeat(c.length-1))}}return e.sort((r,o)=>r.at-o.at).map(r=>r.c)}var Gn={Barcelona:[41.39,2.17],Paris:[48.86,2.35],London:[51.51,-.13],Reims:[49.26,4.03],Lausanne:[46.52,6.63],Berlin:[52.52,13.4],Madrid:[40.42,-3.7],Brussels:[50.85,4.35],Amsterdam:[52.37,4.9],Helsinki:[60.17,24.94],Venice:[45.44,12.33],Dakar:[14.72,-17.47],Sharjah:[25.35,55.42],Beijing:[39.9,116.4],Puebla:[19.04,-98.2],"Mexico City":[19.43,-99.13],"New York":[40.71,-74],Montreal:[45.5,-73.57],Beirut:[33.89,35.5],Lisbon:[38.72,-9.14],Aveiro:[40.64,-8.65],"La Rochelle":[46.16,-1.15],Durham:[54.78,-1.58],Lyon:[45.76,4.84],Hebei:[40.77,114.88],Chengdu:[30.57,104.07],Bogota:[4.71,-74.07],Tokyo:[35.68,139.69],Seoul:[37.57,126.98],Dubai:[25.2,55.27],Murano:[45.46,12.35]};function uv(n){return new Promise((e,t)=>{let i=URL.createObjectURL(n),s=new Image;s.onload=()=>e(s),s.onerror=t,s.src=i})}async function ih(n,e,t,i=.86){if(/svg|gif/i.test(n.type))return n;let s=await uv(n),r=Math.min(1,e/s.naturalWidth,t/s.naturalHeight);if(r>=1&&/jpe?g|webp/i.test(n.type)&&n.size<9e5)return n;let o=document.createElement("canvas");o.width=Math.round(s.naturalWidth*r),o.height=Math.round(s.naturalHeight*r),o.getContext("2d").drawImage(s,0,0,o.width,o.height);let a=/png/i.test(n.type)&&hv(o);return new Promise(l=>o.toBlob(c=>l(c),a?"image/png":"image/jpeg",i))}function hv(n){let e=n.getContext("2d").getImageData(0,0,Math.min(n.width,64),Math.min(n.height,64)).data;for(let t=3;t<e.length;t+=4)if(e[t]<250)return!0;return!1}function Ji(n){let e=/\.([a-z0-9]+)$/i.exec(n||"");return e?e[1].toLowerCase():""}function Il(n){return new Promise((e,t)=>{let i=new FileReader;i.onload=()=>e(String(i.result).split(",")[1]||""),i.onerror=t,i.readAsDataURL(n)})}function Ya(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Ri(n){try{let e=await Ya();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Fs(n,e){let t=await Ya();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function sh(){try{let n=await Ya();return await new Promise(e=>{let t=n.transaction("kv").objectStore("kv").getAllKeys();t.onsuccess=()=>e(t.result||[]),t.onerror=()=>e([])})}catch{return[]}}async function ci(n){try{let e=await Ya();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var dv=n=>new Promise(e=>setTimeout(e,n)),fv=n=>n&&(n.name==="AbortError"||n.name==="NetworkError"||n.name==="InvalidStateError"||n instanceof TypeError||n.status>=500&&n.status<600||n.status===429);async function rh(n,e=3){for(let t=0;;t++)try{return await n()}catch(i){if(t>=e-1||!fv(i))throw i;await dv(600*(t+1))}}function Rl(n,e){if(e&&typeof e=="object")try{e.file=n}catch{}return e}var qa=class{constructor(e){this.kind="github",this.cfg=Object.assign({branch:"main",root:""},e),this.api="https://api.github.com"}get repoPath(){return`/repos/${this.cfg.owner}/${this.cfg.repo}`}full(e){let t=(this.cfg.root||"").replace(/^\/+|\/+$/g,"");return t?t+"/"+e:e}async req(e,t={}){return rh(()=>this.req1(e,t))}async req1(e,t={}){let i=await fetch(this.api+e,{...t,headers:{Accept:"application/vnd.github+json",Authorization:"Bearer "+this.cfg.token,"X-GitHub-Api-Version":"2022-11-28",...t.body?{"Content-Type":"application/json"}:{},...t.headers||{}}});if(!i.ok){let s=i.status+"";try{let o=await i.json();s+=" "+(o.message||"")}catch{}let r=new Error(s);throw r.status=i.status,r}return i.status===204?null:t.raw?i.text():i.json()}async check(){let e=await this.req(this.repoPath);if(!e.permissions||!e.permissions.push)throw Object.assign(new Error("Ce jeton peut lire le d\xE9p\xF4t mais pas y \xE9crire. Donne-lui l'acc\xE8s \xAB Contents : Read and write \xBB."),{status:403});return this.cfg.branch||(this.cfg.branch=e.default_branch),e}async load(){let e=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${encodeURIComponent(this.cfg.branch)}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return fn(JSON.parse(e))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){let r=(await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`)).object.sha,o=await this.req(`${this.repoPath}/git/commits/${r}`),a=[],l=[...t,{path:"content/content.json",text:JSON.stringify(e,null,1)+`
`}];for(let h of l){if(h.delete){a.push({path:this.full(h.path),mode:"100644",type:"blob",sha:null});continue}if(h.blob&&h.blob.size>90*1024*1024)throw Rl(h.path,Object.assign(new Error(`fichier trop lourd pour GitHub (${Math.round(h.blob.size/1048576)} Mo, 90 Mo au plus). R\xE9duis-le ou publie une vid\xE9o YouTube / Vimeo.`),{status:413}));try{let f=h.text!=null?{content:h.text,encoding:"utf-8"}:{content:await Il(h.blob),encoding:"base64"},g=await this.req(`${this.repoPath}/git/blobs`,{method:"POST",body:JSON.stringify(f)});a.push({path:this.full(h.path),mode:"100644",type:"blob",sha:g.sha})}catch(f){throw Rl(h.path,f)}}let c=await this.req(`${this.repoPath}/git/trees`,{method:"POST",body:JSON.stringify({base_tree:o.tree.sha,tree:a})}),u=await this.req(`${this.repoPath}/git/commits`,{method:"POST",body:JSON.stringify({message:i,tree:c.sha,parents:[r]})});return await this.req(`${this.repoPath}/git/refs/heads/${encodeURIComponent(this.cfg.branch)}`,{method:"PATCH",body:JSON.stringify({sha:u.sha})}),u.sha}async listFiles(e=["media/","models/"]){let t=await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`),i=await this.req(`${this.repoPath}/git/trees/${t.object.sha}?recursive=1`),s=this.full("");return i.tree.filter(r=>r.type==="blob").map(r=>({path:s&&r.path.startsWith(s)?r.path.slice(s.length):r.path,size:r.size})).filter(r=>e.some(o=>r.path.startsWith(o)))}async lastCommits(e=8){let t=this.full("content/content.json");return this.req(`${this.repoPath}/commits?sha=${encodeURIComponent(this.cfg.branch)}&path=${encodeURIComponent(t)}&per_page=${e}`)}async loadAt(e){let t=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${e}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return fn(JSON.parse(t))}},Xa=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Ri("demo:content:v6");if(e)return fn(e);if(window.HC_CONTENT)return fn(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return fn(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await ci("demo:file:"+i.path);continue}await Fs("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Fs("demo:content:v6",e),"demo"}async reset(){await ci("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Ri("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Er=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],ks=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],pv=["font","size","lh","weight","italic","ls","upper"],ah=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function mv(n){let e=Er.find(i=>i.id===n);if(e)return e.css;let t=ah(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Er[0].css}function Li(n,e){let t=ks.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...pv,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=mv(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function oh(n){let e=new Map;for(let t of ks){let i=Li(n,t.id),s=ah(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function lh(n){let e=new Set;for(let t of ks){let i=Li(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function ja(n,e,t=!1){let i=Li(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let a=r.measureText(o),l=(a.actualBoundingBoxAscent||i.size*1.4)-(a.actualBoundingBoxDescent||0);if(r.fillText(o,120,120+l/2),t){let c=r.getImageData(0,0,240,240),u=c.data;for(let h=0;h<u.length;h+=4)u[h]=255-u[h],u[h+1]=255-u[h+1],u[h+2]=255-u[h+2];r.putImageData(c,0,0)}return s.toDataURL("image/png")}var $i=class{constructor(e){this.kind="folder",this.dir=e,this.name=e.name,this.urls=new Map}static supported(){return typeof window<"u"&&typeof window.showDirectoryPicker=="function"}async parent(e,t){let i=e.split("/").filter(Boolean),s=i.pop(),r=this.dir;for(let o of i)r=await r.getDirectoryHandle(o,{create:t});return[r,s]}async fileHandle(e,t=!1){let[i,s]=await this.parent(e,t);return i.getFileHandle(s,{create:t})}async readBlob(e){return(await this.fileHandle(e)).getFile()}async readText(e){return(await this.readBlob(e)).text()}async exists(e){try{return await this.fileHandle(e),!0}catch{return!1}}async writeFile(e,t){try{await rh(async()=>{let s=await(await this.fileHandle(e,!0)).createWritable();try{await s.write(t),await s.close()}catch(r){try{await s.abort()}catch{}throw r}})}catch(i){throw Rl(e,i)}}async remove(e){try{let[t,i]=await this.parent(e,!1);await t.removeEntry(i)}catch{}}async permission(e){let t={mode:"readwrite"};return await this.dir.queryPermission(t)==="granted"?!0:e?await this.dir.requestPermission(t)==="granted":!1}async check(){if(!await this.exists("content/content.json"))throw new Error(`le dossier \xAB ${this.name} \xBB ne contient pas content/content.json. Choisis le dossier du site, celui o\xF9 se trouvent index.html et le dossier content.`)}async load(){return fn(JSON.parse(await this.readText("content/content.json")))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){for(let l of t){if(l.delete){await this.remove(l.path),this.urls.delete(l.path);continue}await this.writeFile(l.path,l.blob||l.text)}let s=JSON.stringify(e,null,1)+`
`;await this.writeFile("content/content.json",s);let r=new Date,o=r.toISOString().replace(/[:.]/g,"-"),a=[];try{a=JSON.parse(await this.readText("content/versions/index.json"))}catch{}await this.writeFile(`content/versions/${o}.json`,s),a.unshift({file:o+".json",date:r.toISOString(),message:i});for(let l of a.splice(40))await this.remove("content/versions/"+l.file);return await this.writeFile("content/versions/index.json",JSON.stringify(a,null,1)+`
`),o}async listFiles(e=["media/","models/"]){let t=[],i=async(s,r)=>{for await(let[o,a]of s.entries()){let l=r+o;a.kind==="directory"?await i(a,l+"/"):t.push({path:l,size:(await a.getFile()).size})}};for(let s of e)try{let[r,o]=await this.parent(s+"x",!1);await i(r,s)}catch{}return t}async lastCommits(e=20){let t=[];try{t=JSON.parse(await this.readText("content/versions/index.json"))}catch{}return t.slice(0,e).map(i=>({sha:i.file,html_url:"",commit:{message:i.message||"Mise \xE0 jour du contenu",author:{name:"dossier \xAB "+this.name+" \xBB",date:i.date}}}))}async loadAt(e){return fn(JSON.parse(await this.readText("content/versions/"+e)))}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t)if(!(this.urls.has(i)||/^(https?:|data:|blob:)/.test(i)))try{this.urls.set(i,URL.createObjectURL(await this.readBlob(i)))}catch{}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):e)}};var Ki=window.HC_SITE??"../",Pi=window.HC_ASSETS||null,mh=window.HC_MODE==="demo",Qa=document.getElementById("app"),R={backend:null,cfg:null,content:null,base:"",head:null,staged:new Map,recent:new Map,deletes:new Set,view:"sections",sel:{section:null,post:null,model:null},filter:{section:null,tag:"",q:"",status:""},refreshList:null,draftKey:"draft:demo:v6",busy:!1},gv=new Set(["value","checked","disabled","hidden","multiple","selected","indeterminate","open"]);function d(n,e,...t){let i=document.createElement(n);for(let[s,r]of Object.entries(e||{}))r==null||r===!1||(s==="class"?i.className=r:s==="style"&&typeof r=="object"?Object.assign(i.style,r):s==="html"?i.innerHTML=r:s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):gv.has(s)?i[s]=r:i.setAttribute(s,r===!0?"":r));return t.flat(1/0).forEach(s=>{s==null||s===!1||i.append(s instanceof Node?s:document.createTextNode(String(s)))}),i}function He(n,...e){return n.replaceChildren(...e.flat(1/0).filter(t=>t!=null&&t!==!1)),n}var gh=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},vh=n=>gh(n)?"youtube":/vimeo\.com\/(?:video\/)?\d+/.test(n||"")?"vimeo":/\.(mp4|webm|mov)(\?|#|$)/i.test(n||"")?"video":"image",_h=()=>ja(R.content&&R.content.settings.accent||"#ffcc00",R.content&&R.content.settings),ht=n=>Hn(n,"fr")||Hn(n,"en");function yh(n){let e=Li(n,"sig1");return{fontFamily:e.css,fontWeight:String(e.weight||400),fontStyle:e.italic?"italic":"normal",letterSpacing:e.ls?e.ls+"em":"normal",textTransform:e.upper?"uppercase":"none"}}function xh(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}function bh(n,e){if(!document.fonts||n&&n.logo)return;let t=Li(n,"logo"),i=`${t.italic?"italic ":""}${t.weight||400} 76px ${t.css}`;document.fonts.check(i)||document.fonts.load(i).then(e).catch(()=>{})}function zs(){let n=R.content&&R.content.settings;if(!n)return;let e=n.logo?Ln(n.logo):_h(),t=document.querySelector(".top .brand");if(t){t.querySelector("img").src=e;let s=t.querySelector(".name");s.textContent=n.name||"Hand Coded",Object.assign(s.style,yh(n))}let i=document.querySelector(".logo-prev");i&&(i.style.backgroundImage=`url("${e}")`),xh(e),bh(n,zs)}var ch=()=>Math.random().toString(36).slice(2,6),Gs=(n,e,t)=>{let[i]=n.splice(e,1);n.splice(t,0,i)},Ol=n=>n==null?"":n<1024?n+" o":n<1048576?Math.round(n/1024)+" Ko":(n/1048576).toFixed(1)+" Mo",Mh=n=>String(n||"").split(/[\s&/]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")||"\xB7";function ke(n,e,t="",i={}){return d("button",{type:"button",class:"btn "+t,onclick:e,...i},n)}var Sh=d("div",{class:"toasts",role:"status","aria-live":"polite"});document.body.appendChild(Sh);function mt(n,e="ok",t=4200){let i=d("div",{class:"toast "+e},n);Sh.appendChild(i),setTimeout(()=>i.remove(),t)}function Lr(n,e,t){return new Promise(i=>{let s=document.activeElement,r=h=>{c.remove(),document.removeEventListener("keydown",o),s&&s.focus&&s.focus(),i(h)},o=h=>{h.key==="Escape"&&r(null)},a=d("div",{class:"mf"},t.map(h=>ke(h.label,()=>r(typeof h.value=="function"?h.value():h.value),h.cls||""))),l=d("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":n},d("h2",null,n),d("div",{class:"mb"},e),a),c=d("div",{class:"modal-bg",onmousedown:h=>{h.target===c&&r(null)}},l);document.body.appendChild(c),document.addEventListener("keydown",o);let u=l.querySelector("input, textarea, select")||a.lastChild;u&&u.focus()})}var Nn=(n,e,t="Confirmer",i="dark")=>Lr(n,d("p",null,e),[{label:"Annuler",value:!1,cls:"ghost"},{label:t,value:!0,cls:i}]);async function Fl(n,e,t="",i="OK"){let s=d("input",{type:"text",value:t});return s.addEventListener("keydown",r=>{r.key==="Enter"&&r.target.closest(".modal").querySelector(".mf .btn:last-child").click()}),Lr(n,d("label",{class:"f"},d("span",null,e),s),[{label:"Annuler",value:null,cls:"ghost"},{label:i,value:()=>s.value,cls:"dark"}])}function Ln(n){if(!n)return"";if(/^(https?:|data:|blob:)/.test(n))return n;if(Pi&&Pi[n]&&Pi[n].startsWith("data:"))return Pi[n];let e=R.staged.get(n)||R.recent.get(n);return e?e.url:R.backend&&(R.backend.kind==="demo"||R.backend.kind==="folder")?R.backend.url(n):Ki+n}function hi(n,e){let t=R.staged.get(n);t&&URL.revokeObjectURL(t.url),R.staged.set(n,{blob:e,url:URL.createObjectURL(e)}),R.deletes.delete(n)}function Ws(n=R.content){let e=new Set;return n.posts.forEach(t=>{[t.thumb,t.thumbBack].forEach(i=>i&&e.add(i)),t.media.forEach(i=>i&&i.src&&e.add(i.src)),(t.logos||[]).forEach(i=>e.add(i))}),n.models.forEach(t=>{t.file&&(e.add(t.file),(t.textures||[]).forEach(i=>e.add(t.file.replace(/[^/]+$/,"")+i)))}),n.settings.logo&&e.add(n.settings.logo),n.settings.homeVideo&&n.settings.homeVideo.src&&e.add(n.settings.homeVideo.src),new Set([...e].filter(t=>!/^(https?:|data:|blob:)/.test(t)))}var vv={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif","image/svg+xml":"svg"};async function Hs(n,e,t){if(/^video\/(mp4|webm)$/.test(n.type)||/\.(mp4|webm)$/i.test(n.name)){if(t!=="media")throw new Error("Ici, seules les images sont accept\xE9es.");if(n.size>95e6)throw new Error(`${n.name} p\xE8se ${Ol(n.size)} : GitHub refuse les fichiers de plus de 100 Mo. R\xE9duis la vid\xE9o (720p, H.264) avant de l'envoyer.`);return n.size>4e7&&mt(`${n.name} p\xE8se ${Ol(n.size)}. Elle passera, mais la page sera lente \xE0 charger : vise moins de 20 Mo.`,"ok",7e3),{path:`${e}/${li(n.name.replace(/\.[^.]+$/,""))}-${ch()}.${Ji(n.name)||"mp4"}`,blob:n}}if(!/^image\//.test(n.type))throw new Error(`${n.name} : format non reconnu (images JPG, PNG, WebP, GIF, SVG ou vid\xE9os MP4, WebM).`);let s=t==="media"?[3200,1e3]:t==="logo"?[600,600]:[1400,1400],r=await ih(n,s[0],s[1]),o=vv[r.type]||Ji(n.name)||"jpg";return{path:`${e}/${li(n.name.replace(/\.[^.]+$/,""))}-${ch()}.${o}`,blob:r}}function Zi(n,e,t){let i=d("input",{type:"file",accept:n,multiple:e});i.addEventListener("change",()=>t([...i.files])),i.click()}function Za(n,e){n.addEventListener("dragover",t=>{[...t.dataTransfer.types].includes("Files")&&(t.preventDefault(),n.classList.add("over"))}),n.addEventListener("dragleave",()=>n.classList.remove("over")),n.addEventListener("drop",t=>{t.dataTransfer.files.length&&(t.preventDefault(),n.classList.remove("over"),e([...t.dataTransfer.files]))})}var uh=null,hh=null;function Ae(n={}){n.after&&n.after(),R.onChange&&R.onChange(),clearTimeout(uh),uh=setTimeout(Hl,600),clearTimeout(hh),hh=setTimeout(Bs,200),n.list&&R.refreshList&&R.refreshList(),n.nav&&no()}function wh(){let n=Ws();return[...R.staged.keys()].filter(e=>n.has(e))}function $s(){return JSON.stringify(R.content)!==R.base||R.deletes.size>0||wh().length>0}async function Hl(){try{if(!$s()){await ci(R.draftKey);return}let n=Ws();await Fs(R.draftKey,{content:R.content,base:R.base,head:R.head,at:Date.now(),deletes:[...R.deletes],staged:[...R.staged].filter(([e])=>n.has(e)).map(([e,t])=>({path:e,blob:t.blob}))})}catch(n){console.warn("brouillon non sauvegard\xE9",n)}}async function Vs(n){try{n&&n.content&&await Fs("draft-backup:"+R.draftKey,{content:n.content,at:n.at||Date.now()})}catch{}}async function _v(){let n=await Ri(R.draftKey);if(!(!n||!n.content)){if(n.base!==R.base&&!await Lr("Un brouillon attend",d("div",null,d("p",null,`Tu as un brouillon non publi\xE9 du ${new Date(n.at).toLocaleString("fr-FR")}.`),d("p",null,"Le site a \xE9t\xE9 publi\xE9 depuis (peut-\xEAtre depuis un autre ordinateur). Si tu reprends ce brouillon, sa publication remplacera ces changements.")),[{label:"Partir de la version en ligne",value:!1,cls:"ghost"},{label:"Reprendre mon brouillon",value:!0,cls:"dark"}])){await Vs(n),await ci(R.draftKey);return}R.content=fn(n.content),(n.staged||[]).forEach(e=>hi(e.path,e.blob)),(n.deletes||[]).forEach(e=>R.deletes.add(e)),mt("Brouillon non publi\xE9 retrouv\xE9 : rien n\u2019est perdu.")}}function Eh(){let n=JSON.parse(R.base),e=R.content,t=[],i=(o,a,l,c,u)=>{let h=u?"\xE9e":"\xE9",f=new Map(o.map(v=>[v[l],JSON.stringify(v)])),g=new Map(a.map(v=>[v[l],JSON.stringify(v)])),_=[...g.keys()].filter(v=>!f.has(v)).length,b=[...f.keys()].filter(v=>!g.has(v)).length,m=[...g.keys()].filter(v=>f.has(v)&&f.get(v)!==g.get(v)).length,p=v=>v>1?c+"s":c,L=v=>v>1?h+"s":h;_&&t.push(`${_} ${p(_)} ajout${L(_)}`),m&&t.push(`${m} ${p(m)} modifi${L(m)}`),b&&t.push(`${b} ${p(b)} supprim${L(b)}`)};i(n.sections,e.sections,"id","section",!0),i(n.posts,e.posts,"id","contenu"),i(n.models,e.models,"id","mod\xE8le"),JSON.stringify(n.settings)!==JSON.stringify(e.settings)&&t.push("r\xE9glages modifi\xE9s");let s=o=>o.sections.map(a=>a.id);JSON.stringify(s(n))!==JSON.stringify(s(e))&&JSON.stringify(s(n).slice().sort())===JSON.stringify(s(e).slice().sort())&&t.push("ordre des sections");let r=wh().length;return r&&t.push(`${r} fichier${r>1?"s":""} \xE0 envoyer`),R.deletes.size&&t.push(`${R.deletes.size} fichier${R.deletes.size>1?"s":""} \xE0 supprimer`),t}function yv(){let n=Ws(JSON.parse(R.base)),e=Ws(),t=new Set(JSON.parse(R.base).models.filter(i=>i.builtin).flatMap(i=>[i.file,...(i.textures||[]).map(s=>i.file.replace(/[^/]+$/,"")+s)]));return[...n].filter(i=>!e.has(i)&&!t.has(i)&&/^(media|models)\//.test(i)&&!/^media\/logos\//.test(i)&&!R.staged.has(i))}async function Vl(){if(R.busy)return;if(!$s()){mt("Rien de nouveau \xE0 publier.");return}let n=Eh(),e=yv(),t=d("input",{type:"text",value:n.length?n.slice(0,3).join(", ").replace(/^./,o=>o.toUpperCase()):"Mise \xE0 jour du contenu"}),i=d("input",{type:"checkbox",checked:!0}),s=d("div",null,d("ul",null,n.map(o=>d("li",null,o))),d("label",{class:"f"},d("span",null,"Note pour l\u2019historique"),t),e.length?d("label",{class:"switch"},i,`Supprimer aussi ${e.length} ancien${e.length>1?"s":""} fichier${e.length>1?"s":""} qui ne sert plus`):null,d("p",{class:"hint"},R.backend.kind==="github"?"Le site se met \xE0 jour 1 \xE0 2 minutes apr\xE8s la publication.":R.backend.kind==="folder"?`Les fichiers sont \xE9crits dans le dossier \xAB ${R.backend.name} \xBB de ton ordinateur.`:"Mode d\xE9mo : la publication reste dans ce navigateur, rien n\u2019est \xE9crit dans les fichiers du site."));if(await Lr("Publier sur le site",s,[{label:"Annuler",value:!1,cls:"ghost"},{label:"Publier",value:!0,cls:"primary"}])){R.busy=!0,Bs("Publication en cours\u2026");try{if(R.backend.kind==="folder"&&!await R.backend.permission(!0))throw Object.assign(new Error("acc\xE8s au dossier refus\xE9"),{name:"NotAllowedError"});if(R.backend.kind==="github"){let u=await bv();if(R.head&&u!==R.head){let h=await R.backend.loadAt(u);if(JSON.stringify(h)!==R.base&&!await Nn("Le site a chang\xE9 entre-temps","Quelqu\u2019un (ou toi, depuis un autre onglet) a publi\xE9 depuis que tu as ouvert le back-office. Publier maintenant remplacera ces changements par les tiens.","Publier quand m\xEAme","danger")){R.busy=!1,Bs();return}}}let o=Ws(),a=[...R.staged].filter(([u])=>o.has(u)).map(([u,h])=>({path:u,blob:h.blob}));(R.backend.kind==="github"||R.backend.kind==="folder")&&(a.push({path:"content/content.js",text:"window.HC_CONTENT = "+JSON.stringify(R.content)+`;
`}),JSON.stringify(JSON.parse(R.base).models)!==JSON.stringify(R.content.models)&&(Bs("Pr\xE9paration des mod\xE8les 3D\u2026"),a.push({path:"models/models.js",text:await xv()})));let l=new Set([...R.deletes].filter(u=>!o.has(u)));e.length&&i.checked&&e.forEach(u=>l.add(u));let c=await R.backend.publish(R.content,[...a,...[...l].map(u=>({path:u,delete:!0}))],t.value.trim()||"Mise \xE0 jour du contenu");R.base=JSON.stringify(R.content),R.backend.kind==="github"&&(R.head=c),a.forEach(u=>{R.recent.set(u.path,R.staged.get(u.path)),R.staged.delete(u.path)}),R.staged.forEach(u=>URL.revokeObjectURL(u.url)),R.staged.clear(),R.deletes.clear(),R.files=null,await ci(R.draftKey),mt(R.backend.kind==="github"?"Publi\xE9. Le site sera \xE0 jour dans une minute ou deux.":R.backend.kind==="folder"?`Enregistr\xE9 dans le dossier \xAB ${R.backend.name} \xBB.`:"Publi\xE9 dans la d\xE9mo (dans ce navigateur seulement)."),R.backend.kind==="folder"&&await R.backend.prepare(R.content)}catch(o){console.error(o),mt("La publication a \xE9chou\xE9 : "+qs(o),"bad",9e3)}finally{R.busy=!1,Bs(),no(),(R.view==="history"||R.view==="media")&&jt()}}}async function xv(){let n={},e={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",tga:"image/x-tga",webp:"image/webp"};for(let t of R.content.models){let i=t.file.replace(/[^/]+$/,"");for(let s of[t.file,...(t.textures||[]).map(r=>i+r)]){let r=R.staged.has(s)?R.staged.get(s).blob:null;if(!r&&R.backend.readBlob&&(r=await R.backend.readBlob(s).catch(()=>null)),!r){let o=await fetch(Ln(s));if(!o.ok)throw new Error(s+" : "+o.status);r=await o.blob()}n[s]=/\.dae$/i.test(s)?await r.text():`data:${e[Ji(s)]||"application/octet-stream"};base64,${await Il(r)}`}}return"window.HC_ASSETS = "+JSON.stringify(n)+`;
`}async function bv(){return(await R.backend.req(`${R.backend.repoPath}/git/ref/heads/${encodeURIComponent(R.backend.cfg.branch)}`)).object.sha}async function Mv(){$s()&&await Nn("Annuler les modifications","Tout ce qui n\u2019a pas \xE9t\xE9 publi\xE9 sera perdu : textes, images ajout\xE9es, suppressions.","Tout annuler","danger")&&(await Vs({content:R.content,at:Date.now()}),R.content=fn(JSON.parse(R.base)),R.staged.forEach(n=>URL.revokeObjectURL(n.url)),R.staged.clear(),R.deletes.clear(),await ci(R.draftKey),Cr(),mt("Retour \xE0 la version publi\xE9e. Une copie du brouillon reste dans Historique \u203A Sauvegardes."))}function qs(n){let e=n&&n.file?` (fichier ${n.file})`:"";if(n&&n.name==="AbortError")return R.backend&&R.backend.kind==="folder"?"le navigateur a interrompu l\u2019\xE9criture dans le dossier"+e+". Ferme les autres onglets du back-office ou du site ouverts sur ce dossier, et si le dossier est synchronis\xE9 (iCloud, Dropbox, Drive), attends la fin de la synchronisation, puis republie : rien n\u2019est perdu.":"l\u2019envoi a \xE9t\xE9 interrompu"+e+" (connexion coup\xE9e, ou ordinateur en veille). Republie : rien n\u2019est perdu.";if(n&&n.name==="NotAllowedError")return"le navigateur n\u2019a plus le droit d\u2019\xE9crire dans le dossier"+e+". Republie et accepte la demande d\u2019acc\xE8s.";if(n&&n.status===413)return n.file+" : "+n.message;let t=n&&n.status;return t===401?"jeton refus\xE9 (expir\xE9, r\xE9voqu\xE9 ou mal copi\xE9).":t===403?n.message.includes("\xE9crire")?n.message:"acc\xE8s refus\xE9. V\xE9rifie que le jeton a \xAB Contents : Read and write \xBB sur ce d\xE9p\xF4t.":t===404?"d\xE9p\xF4t ou branche introuvable, ou le jeton n\u2019a pas acc\xE8s \xE0 ce d\xE9p\xF4t.":t===409?"conflit sur la branche, recharge la page et r\xE9essaie.":t===422?"GitHub a refus\xE9 un fichier (trop lourd ?). "+(n.message||""):n instanceof TypeError?"pas de connexion \xE0 GitHub (r\xE9seau ?).":(n&&n.message?n.message:String(n))+e}var Ja=new Map;async function dh(n){if(Pi&&Pi[n]&&!Pi[n].startsWith("data:"))return Pi[n];if(!Ja.has(n)||R.staged.has(n)){let e=fetch(Ln(n)).then(t=>{if(!t.ok)throw new Error(n+" : "+t.status);return t.text()});if(R.staged.has(n))return e;Ja.set(n,e),e.catch(()=>Ja.delete(n))}return Ja.get(n)}var Th=new br;Th.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Ln(n.replace(/^\.\//,"").replace(/\/\.\//g,"/")));function kl(n,e){let i=new Wa(Th).parse(n,e.file.slice(0,e.file.lastIndexOf("/")+1)).scene,s=new un;s.add(i);let r=0;if(i.traverse(l=>{if(!l.isMesh)return;r++;let c=u=>{let h=u.map||u.emissiveMap||null;return h?new Rn({map:h}):e.untextured==="white"?new qi({color:15921906}):e.untextured==="black"?new qi({color:2236962}):new Rn({color:15841280,wireframe:!0})};l.material=Array.isArray(l.material)?l.material.map(c):c(l.material)}),!r)throw new Error("aucune forme 3D dans ce fichier");let o=Sv(e);if(e.scaleMode==="fit"){s.updateMatrixWorld(!0);let l=new dn().setFromObject(s),c=l.getSize(new z);s.scale.setScalar((e.height||420)/Math.max(c.y,1e-6)*o),s.updateMatrixWorld(!0);let u=new dn().setFromObject(s),h=u.getCenter(new z);s.position.set(-h.x,-u.min.y,-h.z)}else{i.scale.setScalar(100),s.updateMatrixWorld(!0);let l=new dn().setFromObject(s);l.max.y-l.min.y>800&&s.scale.setScalar(800/(l.max.y-l.min.y)),s.scale.multiplyScalar(o)}let a=new un;return a.rotation.y=(e.rotationY||0)*Math.PI/180,a.add(s),a}var Sv=n=>Math.max(.05,Math.min(5,(+n.scale||100)/100)),Bl=(()=>{let n=null,e=new Ps;e.add(new Ua(16777215,14211288,2.2));let t=new Ds(16777215,1.2);t.position.set(300,800,500),e.add(t);let i=new kt(30,4/3,1,2e4),s=new un;e.add(s);let r=new un;r.visible=!1,s.add(r);{let v=new gr(256,169),C=new Rn({color:1710618,transparent:!0,opacity:.16,side:gn,depthWrite:!1});for(let w=0;w<8;w++){let U=w/8*Math.PI*2,G=new ln(v,C);G.position.set(500*Math.sin(U),500+(w%2?60:-60),500*Math.cos(U)),G.rotation.y=U,r.add(G)}let O=[];for(let w=0;w<=64;w++){let U=w/64*Math.PI*2;O.push(new z(500*Math.sin(U),0,500*Math.cos(U)))}r.add(new Wi(new wn().setFromPoints(O),new Ei({color:13421772})))}let o=!1,a=null,l=null,c=!1,u=0,h=.004,f=new Map,g=Promise.resolve();function _(){if(n)return n;n=new vr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(16777215,0);let v=n.domElement;return v.addEventListener("pointerdown",C=>{c=!0,u=C.clientX,v.setPointerCapture(C.pointerId)}),v.addEventListener("pointermove",C=>{c&&(h=(C.clientX-u)*.01,s.rotation.y+=h,u=C.clientX)}),v.addEventListener("pointerup",()=>{c=!1}),requestAnimationFrame(L),n}function b(v){let C=new dn().setFromObject(v),O=C.getSize(new z),w=C.getCenter(new z),U=Math.max(O.y*.8,Math.min(O.x,O.z)*.55,Math.max(O.x,O.z)*.38)||100,G=U/Math.tan(15*Math.PI/180);i.position.set(0,w.y+U*.55,G),i.near=G/50,i.far=G*10,i.lookAt(0,w.y,0),i.updateProjectionMatrix()}function m(){i.position.set(0,300+1900*.28,1900),i.near=10,i.far=2e4,i.lookAt(0,330,0),i.updateProjectionMatrix()}function p(v){[...s.children].forEach(C=>{C!==r&&s.remove(C)}),s.rotation.y=.6,r.visible=!!(v&&o),v&&(s.add(v),o?m():(r.visible=!1,b(v))),a=v}function L(){if(requestAnimationFrame(L),!l||!l.isConnected||!a)return;let v=l.clientWidth,C=l.clientHeight;if(!v||!C)return;let O=n.domElement;O.parentNode!==l&&l.prepend(O),(O.width!==Math.round(v*n.getPixelRatio())||O.height!==Math.round(C*n.getPixelRatio()))&&(n.setSize(v,C,!1),i.aspect=v/C,i.updateProjectionMatrix()),c||(s.rotation.y+=h,h+=(.004-h)*.03),n.render(e,i)}return{async show(v,C,O,w=!1){_(),l=v,o=w,p(null),O&&(O.textContent="Chargement du mod\xE8le\u2026");try{let U=kl(await dh(C.file),C);if(l!==v)return;p(U);let G=new dn().setFromObject(U).getSize(new z);O&&(O.textContent=(w?`Dans la sc\xE8ne : ${Math.round(G.x)} \xD7 ${Math.round(G.y)} \xD7 ${Math.round(G.z)} (les cartes grises sont celles du carrousel). `:"")+"Glisse pour tourner autour.")}catch(U){O&&(O.textContent="Impossible d\u2019afficher ce mod\xE8le : "+U.message)}},async snapshot(v){let C=v.file+JSON.stringify([v.scaleMode,v.height,v.rotationY,v.untextured,v.scale])+(R.staged.has(v.file)?"s":"");if(f.has(C))return f.get(C);let O=g.then(async()=>{_();let w=kl(await dh(v.file),v),U=a,G=s.rotation.y,S=o;o=!1,p(w),s.rotation.y=.6,n.setSize(320,200,!1),i.aspect=1.6,i.updateProjectionMatrix(),await new Promise(ee=>setTimeout(ee,400)),n.render(e,i);let D=n.domElement.toDataURL("image/png");return o=S,p(U),s.rotation.y=G,n.setSize(1,1,!1),D});return g=O.catch(()=>{}),f.set(C,O),O.catch(()=>f.delete(C)),O}}})();function wv(n){let e=d("div",{class:"pic"},d("span",{style:{color:"#aaa",fontSize:"12px"}},"\u2026"));return Bl.snapshot(n).then(t=>He(e,d("img",{src:t,alt:""}))).catch(()=>He(e,d("span",{style:{color:"#c0362c",fontSize:"12px",padding:"8px"}},"aper\xE7u indisponible"))),e}function Ah(n){let e='<path d="M80 62 l9 6 l-3 11 h-12 l-3 -11z" fill="#d8d8d8" stroke="#bdbdbd" stroke-width=".6"/>',t=(o,a,l,c,u=1,h="#151515")=>`<rect x="${(o-l/2).toFixed(1)}" y="${(a-c/2).toFixed(1)}" width="${l.toFixed(1)}" height="${c.toFixed(1)}" fill="${h}" opacity="${u.toFixed(2)}"/>`,i=(o,a,l,c)=>`<line x1="${o.toFixed(1)}" y1="${a.toFixed(1)}" x2="${l.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#cfcfcf" stroke-width=".7"/>`,s="",r=(o,a,l,c,u,h,f=0)=>{let g=[];for(let _=0;_<o;_++){let b=_/o*Math.PI*2,m=(Math.cos(b)+1)/2;g.push({x:80+a*Math.sin(b),y:c+l*Math.cos(b)-_*f,d:m})}g.sort((_,b)=>_.d-b.d).forEach(_=>{h&&(s+=i(_.x,_.y,80,70)),s+=t(_.x,_.y,u[0]*(.6+.4*_.d),u[1]*(.6+.4*_.d),.3+.7*_.d)})};switch(n){case"carousel":s+=e,r(8,60,13,40,[22,14],!0);break;case"arc":for(let o=0;o<7;o++){let a=Math.PI*(o+1)/8;s+=t(80-62*Math.cos(a),74-58*Math.sin(a),16,11,1)}s+=e;break;case"fan":s+=e;for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-48*Math.cos(a),60-40*Math.sin(a),80,66)+t(80-48*Math.cos(a),60-40*Math.sin(a),24,7,.35)}for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-64*Math.cos(a),66-50*Math.sin(a),80,66)+t(80-64*Math.cos(a),66-50*Math.sin(a),30,8,1,"#333")}break;case"map":s+='<ellipse cx="80" cy="78" rx="70" ry="13" fill="#ececec"/><path d="M28 77 q8 -6 18 -2 t20 0 q6 -4 12 1 M92 75 q10 -5 22 -1 t18 3" stroke="#cfcfcf" stroke-width="3" fill="none" stroke-linecap="round"/>',[[48,76,46,30],[100,75,104,22],[124,79,132,42]].forEach(([o,a,l,c])=>{s+=i(o,a,l,c)+`<circle cx="${o}" cy="${a}" r="2" fill="#f1b800"/>`+t(l,c,15,14,1,"#fff").replace("/>",' stroke="#151515" stroke-width=".8"/>')+t(l-20,c,18,14,1)});break;case"spiral":s+=e;{let o=[];for(let a=0;a<9;a++){let l=a*.95,c=(Math.cos(l)+1)/2;o.push({x:80+48*Math.sin(l),y:66-a*6.6,d:c})}o.sort((a,l)=>a.d-l.d).forEach(a=>{s+=i(a.x,a.y,80,a.y)+t(a.x,a.y,18*(.6+.4*a.d),12*(.6+.4*a.d),.3+.7*a.d)})}break;case"wall":for(let o=0;o<3;o++)for(let a=0;a<5;a++)s+=t(32+a*24,16+o*17,20,13,.9);s+=e;break;default:s+=e}return`<svg viewBox="0 0 160 100" aria-hidden="true">${s}</svg>`}function Ev(n){let e="var(--accent)";switch(n){case"image":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="32" y="18" width="96" height="63" fill="#111"/><rect x="40" y="26" width="8" height="1.5" fill="${e}"/><rect x="40" y="32" width="54" height="5" fill="#fff"/><rect x="40" y="41" width="36" height="3" fill="#777"/><rect x="40" y="72" width="34" height="2.5" fill="${e}"/></svg>`;case"portrait":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="55" y="25" width="50" height="50" fill="#1b1b1b"/><text x="80" y="57" text-anchor="middle" font-family="Georgia" font-size="20" fill="#fff">MM</text><rect x="75" y="64" width="10" height="1.4" fill="${e}"/></svg>`;case"text":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="20" y="36" width="120" height="30" fill="#333"/><rect x="27" y="41" width="7" height="1.4" fill="${e}"/><rect x="27" y="46" width="80" height="5" fill="#fff"/><rect x="27" y="54" width="54" height="5" fill="#fff"/></svg>`;case"place":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="52" y="24" width="56" height="52" fill="#fff" stroke="#ccc"/><circle cx="80" cy="46" r="13" fill="#111"/><circle cx="80" cy="46" r="3.5" fill="${e}"/><rect x="66" y="66" width="28" height="3" fill="#444"/></svg>`}return""}function Nl(n,e,t,i){let s=d("div",{class:"tiles",role:"radiogroup","aria-label":i}),r=o=>{He(s,...n.map(a=>d("button",{type:"button",class:"tile",role:"radio","aria-checked":String(a.value===o),onclick:()=>{t(a.value),r(a.value)}},a.pic||d("div",{class:"pic"}),d("div",{class:"cap"},d("b",null,a.label),a.hint?d("span",null,a.hint):null))))};return r(e),s}function ct(n,e,t){return d("label",{class:"f"},d("span",null,n),e,t?d("p",{class:"hint"},t):null)}function yt(n,e,t={}){let i=d("input",{type:t.type||"text",value:n()??"",placeholder:t.placeholder,min:t.min,max:t.max,step:t.step,spellcheck:t.spell===!1?"false":null});return i.addEventListener("input",()=>{e(t.type==="number"?i.value===""?"":+i.value:i.value),Ae(t)}),t.onBlur&&i.addEventListener("blur",()=>t.onBlur(i)),i}var Pn=()=>{let n=R.content&&R.content.settings.langs||en;return en.filter(e=>n.includes(e))};function ui(n,e,t,i={}){(!e[t]||typeof e[t]!="object")&&(e[t]=Object.fromEntries(en.map(r=>[r,e[t]||""])));let s=r=>d("div",{class:"lang","data-l":r.toUpperCase()},yt(()=>e[t][r]??"",o=>{e[t][r]=o},{...i,placeholder:i.placeholder?i.placeholder[r]:Yi[r]}));return d("div",{class:"f"},d("span",{class:"lbl"},n),d("div",{class:"pair"},Pn().map(s)),i.hint?d("p",{class:"hint"},i.hint):null)}function In(n,e,t,i={}){let s=d("input",{type:"checkbox",checked:!!e(),role:"switch"});return s.addEventListener("change",()=>{t(s.checked),Ae(i)}),d("label",{class:"switch"},s,n)}function Dn(n,e,t,i={}){let s=d("select",null,n.map(r=>d("option",{value:r.value,selected:r.value===e()},r.label)));return s.addEventListener("change",()=>{t(s.value),Ae(i)}),s}function Tv(n,e){let t=Pn().includes("fr")?"fr":Pn()[0],i=d("div",{class:"rte",contenteditable:"true","data-ph":e,role:"textbox","aria-multiline":"true"}),s=d("div",{class:"rte-foot"}),r=d("div",{class:"lang-tabs",role:"tablist"}),o=()=>{let f=g=>Pl(n[g]).join(" ").split(/\s+/).filter(Boolean).length;He(s,d("span",null,`${f(t)} mots`),d("span",null,Pn().map(g=>`${g.toUpperCase()} ${f(g)?"\u2713":"\xB7 \xE0 \xE9crire"}`).join("   ")))},a=()=>{i.innerHTML=Ll(n[t]),r.querySelectorAll("button").forEach(f=>f.setAttribute("aria-selected",String(f.dataset.l===t))),o()};Pn().forEach(f=>r.appendChild(d("button",{type:"button",role:"tab","data-l":f,onclick:()=>{t=f,a()}},f.toUpperCase()))),i.addEventListener("input",()=>{n[t]=Ll(i.innerHTML),o(),Ae()}),i.addEventListener("paste",f=>{f.preventDefault();let g=f.clipboardData.getData("text/plain");document.execCommand("insertText",!1,g)}),i.addEventListener("focus",()=>{try{document.execCommand("defaultParagraphSeparator",!1,"p")}catch{}}),i.addEventListener("keydown",f=>{(f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="k"&&(f.preventDefault(),c())});let l=(f,g)=>{i.focus(),document.execCommand(f,!1,g),i.dispatchEvent(new Event("input"))};async function c(){let f=window.getSelection(),g=f.rangeCount?f.getRangeAt(0).cloneRange():null,_=await Fl("Ajouter un lien","Adresse (https://\u2026 ou mailto:\u2026)","https://","Ajouter");if(!(!_||_==="https://")){if(i.focus(),g&&(f.removeAllRanges(),f.addRange(g)),g&&g.collapsed&&document.execCommand("insertText",!1,_.replace(/^https?:\/\/|^mailto:/,"")),g&&g.collapsed){let b=f.getRangeAt(0);b.setStart(b.startContainer,Math.max(0,b.startOffset-_.replace(/^https?:\/\/|^mailto:/,"").length))}l("createLink",/^(https?:|mailto:)/.test(_)?_:"https://"+_)}}let u=(f,g,_)=>d("button",{type:"button",title:g,"aria-label":g,onmousedown:b=>b.preventDefault(),onclick:_},f),h=d("div",{class:"rte-bar"},u(d("b",null,"G"),"Gras",()=>l("bold")),u(d("i",null,"I"),"Italique",()=>l("italic")),d("span",{class:"sep"}),u("Lien","Lien (Ctrl+K)",c),u("\u2022 Liste","Liste \xE0 puces",()=>l("insertUnorderedList")),u("Intertitre","Intertitre",()=>l("formatBlock","h3")),u("\xB6","Paragraphe normal",()=>l("formatBlock","p")),d("span",{class:"sep"}),u("Effacer","Retirer la mise en forme",()=>{l("removeFormat"),l("unlink")}),r);return a(),d("div",{class:"rte-wrap"},h,i,s)}var Ch=[["sections","Sections"],["posts","Contenus"],["models","Mod\xE8les 3D"],["media","M\xE9dias"],["settings","R\xE9glages"],["history","Historique"]],Dl,eo,Rr,Ar;function Cr(){He(Qa),Dl=d("header",{class:"top"}),eo=d("nav",{class:"nav","aria-label":"Back-office"}),Rr=d("main",{class:"main",id:"main"}),Qa.appendChild(d("div",{class:"shell"},Dl,eo,Rr)),Ar=d("div",{class:"status","aria-live":"polite"}),Dl.append(d("div",{class:"brand"},d("img",{alt:""}),d("span",{class:"name"}),d("small",null,R.backend.kind==="demo"?"Back-office \xB7 d\xE9mo":R.backend.kind==="folder"?"Back-office \xB7 dossier \xAB "+R.backend.name+" \xBB":"Back-office")),...R.backend.kind!=="demo"?[]:[d("button",{type:"button",class:"demo-tag",title:"Ouvrir les sauvegardes",onclick:()=>Xs("history")},"D\xE9mo : ton travail reste dans ce navigateur, pas dans les fichiers du site. Exporte-le ou travaille dans le dossier.")],Ar,d("div",{class:"acts"},ke("Aper\xE7u",()=>Ys(),"ghost",{title:"Voir le site avec les modifications non publi\xE9es"}),ke("Publier",Vl,"primary",{title:"Ctrl+S"}))),zs(),no(),Bs(),jt()}function no(){if(!eo)return;let n=R.content,e={sections:n.sections.length,posts:n.posts.length,models:n.models.length};He(eo,d("ul",null,Ch.map(([t,i])=>d("li",null,d("button",{type:"button","aria-current":String(R.view===t),onclick:()=>Xs(t)},i,e[t]!=null?d("small",null,e[t]):null)))),d("div",{class:"foot"},R.backend.kind==="github"?d("a",{href:`https://github.com/${R.cfg.owner}/${R.cfg.repo}`,target:"_blank",rel:"noopener"},`${R.cfg.owner}/${R.cfg.repo}`):null,window.HC_SITE_HTML?d("a",{href:"#",onclick:t=>{t.preventDefault(),Ys()}},"Voir le site"):d("a",{href:Ki+"index.html",target:"_blank",rel:"noopener"},"Voir le site en ligne \u2197"),$s()?d("a",{href:"#",onclick:t=>{t.preventDefault(),Mv()}},"Annuler les modifications"):null,R.backend.kind==="github"?d("a",{href:"#",onclick:t=>{t.preventDefault(),e_()}},"Se d\xE9connecter"):null,R.backend.kind!=="github"?d("a",{href:"#",onclick:t=>{t.preventDefault(),Qv()}},R.backend.kind==="folder"?"Changer de dossier":"Quitter la d\xE9mo"):null))}function Bs(n){if(!Ar)return;let e=$s();Ar.className="status"+(e?" dirty":"");let t=e?Eh():[];He(Ar,d("i",{class:"dot"}),d("span",null,n||(e?"Non publi\xE9 : "+(t.join(", ")||"modifications"):"Tout est publi\xE9")))}function Xs(n){R.view=n;try{history.replaceState(null,"","#/"+n)}catch{}no(),jt(),Rr.scrollTop=0}function jt(){R.refreshList=null,R.onChange=null;let n={sections:fh,posts:Nv,models:Fv,media:Vv,settings:$v,history:Yv}[R.view]||fh;He(Rr,n())}function Ii(n,e,t,...i){return d("div",{class:"page"},d("header",null,d("h1",null,n),t&&t.length?d("div",{class:"acts"},t):null,e?d("p",null,e):null),i)}function Gl(n){window.innerWidth<980&&setTimeout(()=>n.scrollIntoView({behavior:"smooth",block:"start"}),30)}function Rh(n,e){let t=null,i=()=>n.querySelectorAll(".drop-before, .drop-after").forEach(s=>s.classList.remove("drop-before","drop-after"));n.querySelectorAll("[data-i]").forEach(s=>{s.draggable=!0,s.addEventListener("dragstart",r=>{t=+s.dataset.i,s.classList.add("dragging"),r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",String(t))}),s.addEventListener("dragend",()=>{s.classList.remove("dragging"),i(),t=null}),s.addEventListener("dragover",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect();i(),s.classList.add(r.clientY>o.top+o.height/2?"drop-after":"drop-before")}),s.addEventListener("drop",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect(),a=+s.dataset.i+(r.clientY>o.top+o.height/2?1:0);a>t&&a--;let l=t;t=null,i(),a!==l&&e(l,a)})})}var Wl=n=>R.content.posts.filter(e=>e.section===n).length;function fh(){let n=R.content;n.sections.find(r=>r.id===R.sel.section)||(R.sel.section=n.sections[0]&&n.sections[0].id);let e=d("div",{class:"card sticky"}),t=d("div"),i=()=>{let r=d("ul",{class:"list"},n.sections.map((o,a)=>d("li",{class:"row","data-i":a,tabindex:0,"aria-current":String(o.id===R.sel.section),onclick:()=>{R.sel.section=o.id,i(),s(),Gl(t)},onkeydown:l=>{l.key==="Enter"&&l.currentTarget.click()}},d("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),d("div",{class:"th",style:{background:"#fafafa",border:"1px solid var(--line)"},html:Ah(o.layout)}),d("div",null,d("div",{class:"t"},ht(o.name)||o.id),d("div",{class:"m"},`${Hn($a[o.layout].label,"fr")} \xB7 ${Hn(Tr[o.card].label,"fr")} \xB7 ${Wl(o.id)} contenus`)),d("div",{class:"b"},o.visible?null:d("span",{class:"badge off"},"masqu\xE9e"),n.settings.startSection===o.id?d("span",{class:"badge"},"arriv\xE9e"):null))));Rh(r,(o,a)=>{Gs(n.sections,o,a),Ae({nav:!0}),i()}),He(e,d("header",{class:"toolbar",style:{justifyContent:"space-between"}},d("span",{class:"lbl",style:{margin:0}},"Ordre du menu"),ke("+ Nouvelle section",Av,"sm dark")),r,d("p",{class:"hint",style:{padding:"10px 12px",margin:0}},"Glisse les sections pour changer l\u2019ordre du menu du site."))},s=()=>{He(t,Cv(n.sections.find(r=>r.id===R.sel.section),()=>{i()},s))};return R.refreshList=i,i(),s(),Ii("Sections","Chaque section du site est un objet 3D entour\xE9 de cartes. Choisis l\u2019objet, la fa\xE7on dont les cartes se disposent, leur type, et les tags qui servent \xE0 trier.",[],d("div",{class:"cols"},e,t))}function Av(){let n=R.content,e=Vn("section",n.sections.map(t=>t.id));n.sections.push({id:e,name:{en:"New section",fr:"Nouvelle section",ca:"Nova secci\xF3",es:"Nueva secci\xF3n"},model:n.models[0]?n.models[0].id:"",layout:"carousel",card:"image",open:"strip",perPage:8,defaultTag:"",visible:!0,tags:[]}),R.sel.section=e,Ae({nav:!0}),jt()}function Cv(n,e,t){let i=R.content;if(!n)return d("div",{class:"card"},d("div",{class:"empty"},"Aucune section. Cr\xE9e la premi\xE8re avec \xAB + Nouvelle section \xBB."));let s=Wl(n.id),r=d("h2",null,ht(n.name)||n.id),o=d("p",{class:"hint"},`Adresse directe : \u2026/#${n.id}`),a=yt(()=>n.id,()=>{},{spell:!1,onBlur:m=>{let p=li(m.value);if(p===n.id){m.value=n.id;return}let L=Vn(p,i.sections.filter(v=>v!==n).map(v=>v.id));i.posts.forEach(v=>{v.section===n.id&&(v.section=L)}),i.settings.startSection===n.id&&(i.settings.startSection=L),n.id=L,R.sel.section=L,m.value=L,o.textContent=`Adresse directe : \u2026/#${L}`,Ae({list:!0})}}),l=async()=>{await Nn("Supprimer la section",s?`\xAB ${ht(n.name)} \xBB contient ${s} contenu${s>1?"s":""}. Ils seront supprim\xE9s avec elle.`:`Supprimer \xAB ${ht(n.name)} \xBB ?`,"Supprimer","danger")&&(i.posts=i.posts.filter(p=>p.section!==n.id),i.sections.splice(i.sections.indexOf(n),1),i.settings.startSection===n.id&&(i.settings.startSection=i.sections[0]?i.sections[0].id:""),R.sel.section=null,Ae({nav:!0}),jt())},c=i.models.map(m=>({value:m.id,label:m.name,pic:wv(m)})),u=Object.entries($a).map(([m,p])=>({value:m,label:Hn(p.label,"fr"),hint:Hn(p.hint,"fr"),pic:d("div",{class:"pic",html:Ah(m)})})),h=Object.entries(Tr).map(([m,p])=>({value:m,label:Hn(p.label,"fr"),hint:{image:"Vignette paysage, titre, lieu",portrait:"Carr\xE9 : visage ou initiales",text:"Bandeau de texte, image facultative",place:"Logo ou photo et fiche du lieu"}[m],pic:d("div",{class:"pic",html:Ev(m)})})),f=d("div",{class:"f",style:{marginTop:"16px"}}),g=()=>{f.hidden=n.layout!=="map";let m=new Map;i.posts.forEach(p=>{p.published&&p.spots.forEach(L=>{let v=L.city||`${L.lat}, ${L.lon}`;m.set(v,(m.get(v)||0)+1)})}),He(f,d("span",{class:"lbl"},"R\xE9seau"),In("Relier tous les lieux d\u2019intervention par des arcs depuis le bureau",()=>n.network,p=>{n.network=p},{after:g}),d("p",{class:"hint"},m.size?`${m.size} lieux renseign\xE9s dans les contenus : ${[...m.keys()].join(", ")}. On les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB.`:"Aucun lieu pour l\u2019instant : on les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB."),n.network&&!ji(i,n.id).some(p=>p.location)?d("p",{class:"hint",style:{color:"var(--warn)"}},"Donne une position \xE0 un contenu de cette section (ton bureau) : les arcs partent de l\xE0."):null)};g();let _=d("div",{class:"chips",role:"radiogroup","aria-label":"Ouverture"}),b=()=>He(_,...[["strip","Fiche 2D : images et texte en bandeau"],["focus3d","La carte vient vers la cam\xE9ra (fiche 3D)"]].map(([m,p])=>d("button",{type:"button",class:"chip",role:"radio","aria-pressed":String(n.open===m),"aria-checked":String(n.open===m),onclick:()=>{n.open=m,Ae(),b()}},p)));return b(),d("div",{class:"card"},d("header",null,r,d("div",{class:"acts"},ke("Aper\xE7u",()=>Ys(n.id),"sm"),ke("Contenus \u2192",()=>{R.filter.section=n.id,Xs("posts")},"sm"),ke("Supprimer",l,"sm danger"))),d("div",{class:"block"},d("h3",null,"Nom et adresse"),ui("Nom dans le menu",n,"name",{list:!0,after:()=>{r.textContent=ht(n.name)||n.id}}),d("div",{class:"grid2"},d("label",{class:"f"},d("span",null,"Identifiant"),a,o),d("div",{style:{display:"grid",gap:"10px",alignContent:"start",paddingTop:"20px"}},In("Visible sur le site",()=>n.visible,m=>{n.visible=m},{list:!0}),In("Ses contenus sont des savoir-faire, reli\xE9s aux projets",()=>n.skills,m=>{n.skills=m},{list:!0}),In("Section d\u2019arriv\xE9e (apr\xE8s ENTER)",()=>i.settings.startSection===n.id,m=>{i.settings.startSection=m?n.id:(i.sections.find(p=>p!==n)||{}).id||""},{list:!0})))),d("div",{class:"block"},d("h3",null,"Objet 3D",d("small",null,"le mod\xE8le au centre de la section")),Nl(c,n.model,m=>{n.model=m,Ae()},"Objet 3D"),d("p",{class:"hint"},"Pour ajouter ton propre fichier Collada (.dae), passe par ",d("a",{href:"#",onclick:m=>{m.preventDefault(),Xs("models")}},"Mod\xE8les 3D"),".")),d("div",{class:"block"},d("h3",null,"Disposition des cartes",d("small",null,"le style de la section")),Nl(u,n.layout,m=>{n.layout=m,g(),Ae({list:!0})},"Disposition"),f),d("div",{class:"block"},d("h3",null,"Type de carte"),Nl(h,n.card,m=>{n.card=m,n.open=Tr[m].open,b(),Ae({list:!0})},"Type de carte"),d("div",{style:{marginTop:"14px"}},d("span",{class:"lbl"},"Au clic sur une carte"),_)),d("div",{class:"block"},d("h3",null,"Tags",d("small",null,"pour trier les contenus, comme le menu \xAB cat\xE9gories \xBB du site")),Pv(n,t),d("div",{class:"grid2",style:{marginTop:"16px"}},ct("Tag affich\xE9 \xE0 l\u2019ouverture",Dn([{value:"",label:"Tout"},...n.tags.map(m=>({value:m.id,label:ht(m.label)||m.id}))],()=>n.defaultTag||"",m=>{n.defaultTag=m})),ct("Cartes par page",yt(()=>n.perPage,m=>{n.perPage=Math.max(1,Math.min(40,m||1))},{type:"number",min:1,max:40}),"Au-del\xE0, les fl\xE8ches du site passent \xE0 la page suivante.")),d("div",{class:"grid2",style:{marginTop:"16px"}},ct("Taille des cartes (%)",yt(()=>n.cardScale||"",m=>{m===""||m===100?delete n.cardScale:n.cardScale=Math.max(40,Math.min(250,m))},{type:"number",min:40,max:250,step:5,placeholder:"100"}),"Agrandit ou r\xE9duit les cartes 3D de cette section. 100 = taille d\u2019origine."),ct("Distance de la cam\xE9ra (%)",yt(()=>n.camera||"",m=>{m===""||m===(n.layout==="map"?58:100)?delete n.camera:n.camera=Math.max(30,Math.min(250,m))},{type:"number",min:30,max:250,step:5,placeholder:n.layout==="map"?"58":"100"}),"Plus petit : la cam\xE9ra s\u2019approche de l\u2019objet. Vide : "+(n.layout==="map"?"58 pour la carte du monde.":"100."))),n.tags.length?Lv(n):null))}function Rv(){return/^https?:$/.test(location.protocol)&&/\/admin\/?/.test(location.pathname)?location.origin+location.pathname.replace(/admin\/?(index\.html)?$/,""):"https://hand-coded.net/"}function Lv(n){let e=Rv();return d("div",{class:"f",style:{marginTop:"16px"}},d("span",{class:"lbl"},"Liens \xE0 envoyer"),d("div",{class:"chips"},n.tags.map(t=>d("button",{type:"button",class:"chip",title:e+"?tag="+t.id,onclick:async()=>{let i=e+"?tag="+t.id;try{await navigator.clipboard.writeText(i),mt("Lien copi\xE9 : "+i)}catch{mt(i,"ok",9e3)}}},(ht(t.label)||t.id)+" \u29C9"))),d("p",{class:"hint"},`Un clic copie le lien. Le site s\u2019ouvre sur l\u2019accueil, puis cette section arrive avec ce tag d\xE9j\xE0 choisi, par exemple ${e}?tag=${n.tags[0].id}. Le nom du tag marche aussi, dans n\u2019importe quelle langue (?tag=son). Pour sauter l\u2019accueil : ${e}#${n.id}/${n.tags[0].id}.`))}function Pv(n,e){let t=R.content,i=a=>t.posts.filter(l=>l.section===n.id&&l.tags.includes(a)).length,s=d("div",{class:"tags-ed"}),r={gridTemplateColumns:`20px repeat(${Pn().length}, minmax(0, 1fr)) 96px 46px auto`},o=()=>{He(s,n.tags.length?d("div",{class:"tag-row head",style:r},d("span"),Pn().map(a=>d("span",null,Yi[a])),d("span",null,"Identifiant"),d("span",null,"Contenus"),d("span")):d("p",{class:"hint",style:{margin:0}},"Pas encore de tag : tous les contenus s\u2019affichent ensemble."),...n.tags.map((a,l)=>{let c=i(a.id),u=yt(()=>a.label.en,h=>{a.label.en=h},{placeholder:"English",onBlur:()=>{if(!i(a.id)&&/^tag(-\d+)?$/.test(a.id)&&a.label.en.trim()){let h=a.id;a.id=Vn(a.label.en,n.tags.filter(f=>f!==a).map(f=>f.id)),n.defaultTag===h&&(n.defaultTag=a.id),Ae(),o()}}});return d("div",{class:"tag-row",style:r},d("span",{class:"n",style:{textAlign:"left"}},l+1),Pn().map(h=>h==="en"?u:yt(()=>a.label[h]??"",f=>{a.label[h]=f},{placeholder:Yi[h]})),d("span",{class:"id",title:a.id},a.id),d("span",{class:"n"},c),d("span",{style:{display:"flex",gap:"2px"}},ke("\u2191",()=>{l&&(Gs(n.tags,l,l-1),Ae(),o())},"sm icon ghost",{"aria-label":"Monter",disabled:!l}),ke("\u2193",()=>{l<n.tags.length-1&&(Gs(n.tags,l,l+1),Ae(),o())},"sm icon ghost",{"aria-label":"Descendre",disabled:l===n.tags.length-1}),ke("\xD7",async()=>{c&&!await Nn("Supprimer le tag",`\xAB ${ht(a.label)} \xBB est utilis\xE9 par ${c} contenu${c>1?"s":""}. Il leur sera retir\xE9.`,"Supprimer","danger")||(t.posts.forEach(h=>{h.section===n.id&&(h.tags=h.tags.filter(f=>f!==a.id))}),n.tags.splice(l,1),n.defaultTag===a.id&&(n.defaultTag=""),Ae(),e())},"sm icon ghost danger",{"aria-label":"Supprimer le tag"})))}),d("div",null,ke("+ Ajouter un tag",()=>{n.tags.push({id:Vn("tag",n.tags.map(a=>a.id)),label:zn()}),Ae(),e(),setTimeout(()=>{let a=s.querySelectorAll(".tag-row input");a.length&&a[a.length-2].focus()},0)},"sm")))};return o(),s}var Iv={image:{title:"Titre",subtitle:"Sous-titre (artiste, client\u2026)",place:"Lieu",body:"Description",thumb:"Vignette de la carte"},portrait:{title:"Nom",subtitle:"R\xF4le",place:"Ville",body:"Bio courte",thumb:"Portrait"},text:{title:"Titre",subtitle:"Sous-titre",place:"Lieu",body:"Texte",thumb:"Petite image (facultative)"},place:{title:"Nom du lieu ou du bureau",subtitle:"Activit\xE9",place:"Ville affich\xE9e",body:"Adresse et coordonn\xE9es",thumb:"Logo ou photo"}};function zl(n){let e=R.content.sections.find(r=>r.id===n.section),t=[],i=Pn(),s=r=>Pl(n.body[r]).length>0;return i.some(r=>!n.title[r])&&t.push("titre \xE0 traduire"),i.some(s)?i.every(s)||t.push("texte \xE0 traduire ("+i.filter(r=>!s(r)).map(r=>r.toUpperCase()).join(", ")+")"):t.push("pas de texte"),e&&["image","portrait"].includes(e.card)&&!n.thumb&&!e.skills&&t.push("pas d\u2019image"),e&&e.skills&&!R.content.posts.some(r=>(r.skills||[]).includes(n.id))&&t.push("aucun projet reli\xE9"),e&&e.layout==="map"&&!n.location&&t.push("pas de position"),t}function Nv(){let n=R.content;if(n.sections.find(a=>a.id===R.filter.section)||(R.filter.section=n.sections[0]&&n.sections[0].id),!n.sections.length)return Ii("Contenus",null,[],d("div",{class:"card"},d("div",{class:"empty"},"Cr\xE9e d\u2019abord une section.")));let e=d("div",{class:"card sticky"}),t=d("div"),i=()=>n.sections.find(a=>a.id===R.filter.section),s=()=>{let a=R.filter.q.trim().toLowerCase();return ji(n,R.filter.section,{all:!0}).filter(l=>(!R.filter.tag||l.tags.includes(R.filter.tag))&&(!a||[l.title.en,l.title.fr,l.subtitle.en,l.subtitle.fr,l.place.en,l.place.fr,l.id].join(" ").toLowerCase().includes(a))&&(!R.filter.status||R.filter.status==="on"&&l.published||R.filter.status==="off"&&!l.published||R.filter.status==="todo"&&zl(l).length))},r=()=>{let a=i(),l=s(),c=R.filter.tag||R.filter.q||R.filter.status;R.filter.tag&&!a.tags.find(b=>b.id===R.filter.tag)&&(R.filter.tag="");let u=d("div",{class:"tabs",role:"tablist"},n.sections.map(b=>d("button",{type:"button",role:"tab","aria-selected":String(b.id===a.id),onclick:()=>{R.filter.section=b.id,R.filter.tag="",R.sel.post=null,r(),o()}},ht(b.name)||b.id,d("small",null,Wl(b.id))))),h=d("input",{type:"search",placeholder:"Chercher\u2026",value:R.filter.q,"aria-label":"Chercher"});h.addEventListener("input",()=>{R.filter.q=h.value,_()});let f=d("div",{class:"toolbar"},Dn([{value:"",label:"Tous les tags"},...a.tags.map(b=>({value:b.id,label:ht(b.label)||b.id}))],()=>R.filter.tag,b=>{R.filter.tag=b,_()}),Dn([{value:"",label:"Tous"},{value:"on",label:"Visibles"},{value:"off",label:"Masqu\xE9s"},{value:"todo",label:"\xC0 compl\xE9ter"}],()=>R.filter.status,b=>{R.filter.status=b,_()}),h),g=d("div");function _(){let b=s(),m=R.filter.tag||R.filter.q||R.filter.status,p=d("ul",{class:"list"},b.map((L,v)=>{let C=zl(L),O=d("div",{class:"th"+(a.card==="portrait"?" portrait":"")},L.thumb?null:Mh(ht(L.title)));return L.thumb&&(O.style.backgroundImage=`url("${Ln(L.thumb)}")`),d("li",{class:"row","data-i":v,tabindex:0,"aria-current":String(L.id===R.sel.post),onclick:()=>{R.sel.post=L.id,_(),o(),Gl(t)},onkeydown:w=>{w.key==="Enter"&&w.currentTarget.click()}},m?null:d("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),O,d("div",null,d("div",{class:"t"},ht(L.title)||d("i",{style:{color:"var(--ink-4)"}},"Sans titre")),d("div",{class:"m"},[L.tags.map(w=>{let U=a.tags.find(G=>G.id===w);return U?ht(U.label):null}).filter(Boolean).join(", "),L.date].filter(Boolean).join(" \xB7 ")||" ")),d("div",{class:"b"},L.published?null:d("span",{class:"badge off"},"masqu\xE9"),C.length?d("span",{class:"badge warn",title:C.join(", ")},"\xE0 compl\xE9ter"):null))}));m||Rh(p,(L,v)=>{let C=ji(n,a.id,{all:!0});Gs(C,L,v),C.forEach((O,w)=>{O.order=w}),Ae(),_()}),He(g,b.length?p:d("div",{class:"empty"},c?"Aucun contenu ne correspond.":"Aucun contenu dans cette section."),d("p",{class:"hint",style:{padding:"10px 12px",margin:0}},m?"Retire les filtres pour changer l\u2019ordre.":"Glisse pour changer l\u2019ordre des cartes sur le site."))}_(),He(e,u,d("div",{class:"toolbar",style:{justifyContent:"space-between"}},d("span",{class:"lbl",style:{margin:0}},`${l.length} contenu${l.length>1?"s":""}`),ke("+ Nouveau contenu",()=>Uv(a),"sm dark")),f,g),R.refreshList=_},o=()=>{let a=n.posts.find(l=>l.id===R.sel.post&&l.section===R.filter.section);He(t,a?Ov(a,r,o):d("div",{class:"card"},d("div",{class:"empty"},"Choisis un contenu dans la liste, ou cr\xE9e-en un nouveau.")))};return r(),o(),Ii("Contenus","Projets, savoir-faire, portraits, lieux : chaque contenu devient une carte dans sa section. Les textes s\u2019\xE9crivent en anglais et en fran\xE7ais.",[],d("div",{class:"cols"},e,t))}function Dv(n){let e=R.content;return{id:Vn("nouveau-contenu",e.posts.map(t=>t.id)),section:n.id,order:Math.max(-1,...ji(e,n.id,{all:!0}).map(t=>t.order??0))+1,published:!1,title:zn(),subtitle:zn(),place:zn(),date:"",tags:R.filter.tag?[R.filter.tag]:[],thumb:"",thumbBack:"",body:zn(),media:[],link:"",team:[],credits:"",location:null,spots:[],skills:[],author:"",logos:[]}}function Uv(n){let e=Dv(n);R.content.posts.push(e),R.sel.post=e.id,R.filter.q="",R.filter.status="",Ae({nav:!0}),jt(),setTimeout(()=>{let t=Rr.querySelector(".card .lang input");t&&t.focus()},30)}function Ov(n,e,t){["tags","media","team","spots","skills","logos"].forEach(I=>{Array.isArray(n[I])||(n[I]=[])}),typeof n.author!="string"&&(n.author="");let i=R.content,s=i.sections.find(I=>I.id===n.section),r=!!s.skills,o=r?{title:"Nom du savoir-faire",subtitle:"Phrase courte, \xE9crite sur la carte",place:"",body:"Texte de la fiche",thumb:"Image d\u2019illustration (facultative)"}:Iv[s.card],a=d("h2",null,ht(n.title)||"Sans titre"),l=()=>{a.textContent=ht(n.title)||"Sans titre"},c={list:!0},u=`media/${n.id}`,h=async()=>{await Nn("Supprimer ce contenu",`\xAB ${ht(n.title)||"Sans titre"} \xBB sera retir\xE9 du site \xE0 la prochaine publication.`,"Supprimer","danger")&&(i.posts.splice(i.posts.indexOf(n),1),i.posts.forEach(I=>{I.team=I.team.filter(k=>k!==n.id),I.skills=(I.skills||[]).filter(k=>k!==n.id)}),R.sel.post=null,Ae({nav:!0}),jt())},f=()=>{let I=structuredClone(n);I.id=Vn(n.id+"-copie",i.posts.map(k=>k.id)),I.order=(n.order??0)+.5,I.published=!1,en.forEach(k=>{I.title[k]&&(I.title[k]+={fr:" (copie)",ca:" (c\xF2pia)",es:" (copia)"}[k]||" (copy)")}),i.posts.push(I),ji(i,s.id,{all:!0}).forEach((k,B)=>{k.order=B}),R.sel.post=I.id,Ae({nav:!0}),jt()},g=(I,k,B)=>{let X=d("div",{class:"prev "+s.card}),q=d("div",{class:"acts"}),oe=d("div",{class:"drop"},X,q),ge=()=>{X.style.backgroundImage=n[I]?`url("${Ln(n[I])}")`:"",X.textContent=n[I]?"":I==="thumb"?Mh(ht(n.title)):"",He(q,ke(n[I]?"Remplacer\u2026":"Choisir une image\u2026",()=>Zi("image/*",!1,Me),"sm"),n[I]?ke("Retirer",()=>{n[I]="",Ae(c),ge()},"sm ghost danger"):null,d("p",null,B))},Me=async Qe=>{if(Qe[0])try{let $=await Hs(Qe[0],u,"thumb");hi($.path,$.blob),n[I]=$.path,Ae(c),ge()}catch($){mt($.message,"bad",7e3)}};return Za(oe,Me),ge(),d("div",{class:"f"},d("span",{class:"lbl"},k),oe)},_=d("div",{class:"media-list"}),b=()=>{let I=d("div",{class:"media-add",role:"button",tabindex:0,onclick:()=>Zi("image/*,video/mp4,video/webm",!0,m),onkeydown:B=>{B.key==="Enter"&&B.currentTarget.click()}},d("span",null,"+ Ajouter des images ou des vid\xE9os",d("br"),d("small",null,"ou glisse-les ici")));Za(I,m);let k=d("div",{class:"media-add",role:"button",tabindex:0,onkeydown:B=>{B.key==="Enter"&&B.currentTarget.click()},onclick:async()=>{let B=await Fl("Ajouter une vid\xE9o","Lien YouTube ou Vimeo (youtube.com/watch?v=\u2026, youtu.be/\u2026, vimeo.com/\u2026), ou adresse d\u2019une image en ligne","https://","Ajouter");!B||!/^https?:\/\/\S+$/.test(B.trim())||(n.media.push({src:B.trim()}),Ae(),b())}},d("span",null,"+ Vid\xE9o YouTube / Vimeo",d("br"),d("small",null,"colle son lien (ou celui d\u2019une image en ligne)")));He(_,...n.media.map((B,X)=>{let q=vh(B.src),ge=q==="youtube"?d("img",{src:`https://i.ytimg.com/vi/${gh(B.src)}/hqdefault.jpg`,alt:"",loading:"lazy"}):q==="vimeo"?d("span",{style:{color:"#888",font:"italic 18px Georgia, serif"}},"Vimeo"):q==="video"?d("video",{src:Ln(B.src),muted:!0,preload:"metadata",playsinline:!0}):d("img",{src:Ln(B.src),alt:"",loading:"lazy"});return d("div",{class:"media-item"},d("div",{class:"pv"},ge),d("div",{class:"ft"},d("span",{title:B.src},(q==="image"?"":"\u25B6 ")+(q==="youtube"?"YouTube":q==="vimeo"?"Vimeo "+B.src.split("/").pop():decodeURIComponent(B.src.split("?")[0].split("/").pop()))),ke("\u2190",()=>{X&&(Gs(n.media,X,X-1),Ae(),b())},"sm icon ghost",{"aria-label":"Avant",disabled:!X}),ke("\u2192",()=>{X<n.media.length-1&&(Gs(n.media,X,X+1),Ae(),b())},"sm icon ghost",{"aria-label":"Apr\xE8s",disabled:X===n.media.length-1}),ke("\xD7",()=>{n.media.splice(X,1),Ae(),b()},"sm icon ghost danger",{"aria-label":"Retirer"})),d("div",{class:"cr"},yt(()=>B.credit||"",Me=>{B.credit=Me},{placeholder:"Cr\xE9dit photo"})),(()=>{let Me=d("div"),Qe=d("details",{class:"mcap-ed"},d("summary",null,B.caption&&Object.values(B.caption).some(Boolean)?"L\xE9gende \u2713":"L\xE9gende"),Me);return Qe.addEventListener("toggle",()=>{Qe.open&&!Me.firstChild&&Me.appendChild(ui("",B,"caption"))}),Qe})())}),I,k)},m=async I=>{for(let k of I)try{let B=await Hs(k,u,"media");hi(B.path,B.blob),n.media.push({src:B.path}),Ae(),b()}catch(B){mt(B.message,"bad",7e3)}};b();let p=d("div",{class:"chips"}),L=()=>{He(p,...s.tags.map(I=>d("button",{type:"button",class:"chip","aria-pressed":String(n.tags.includes(I.id)),onclick:()=>{n.tags=n.tags.includes(I.id)?n.tags.filter(k=>k!==I.id):s.tags.map(k=>k.id).filter(k=>k===I.id||n.tags.includes(k)),Ae(c),L()}},ht(I.label)||I.id)),ke("+ Nouveau tag",async()=>{let I=await Fl("Nouveau tag",`Nom du tag (section \xAB ${ht(s.name)} \xBB)`,"","Cr\xE9er");if(!I)return;let k={id:Vn(I,s.tags.map(B=>B.id)),label:Object.fromEntries(en.map(B=>[B,I]))};s.tags.push(k),n.tags.push(k.id),Ae(c),L(),mt("Tag cr\xE9\xE9. Tu peux traduire son nom dans Sections.")},"sm ghost"))};L();let v=i.posts.filter(I=>I.id!==n.id&&(i.sections.find(k=>k.id===I.section)||{}).card==="portrait"),C=d("div",{class:"chips"}),O=()=>He(C,...v.length?v.map(I=>d("button",{type:"button",class:"chip","aria-pressed":String(n.team.includes(I.id)),onclick:()=>{n.team=n.team.includes(I.id)?n.team.filter(k=>k!==I.id):[...n.team,I.id],Ae(),O()}},ht(I.title))):[d("p",{class:"hint",style:{margin:0}},"Ajoute des portraits dans une section de type \xAB Portrait \xBB pour les relier ici.")]);O();let w=d("div"),U=()=>{let I=[...new Set(i.posts.flatMap(oe=>oe.logos||[]).concat(n.logos,R.logoFiles||[],[...R.staged.keys()].filter(oe=>oe.startsWith("media/logos/"))))].sort((oe,ge)=>(n.logos.indexOf(ge)>=0)-(n.logos.indexOf(oe)>=0)||oe.localeCompare(ge));!R.logoFiles&&R.backend.listFiles&&(R.logoFiles=[],R.backend.listFiles(["media/logos/"]).then(oe=>{R.logoFiles=oe.map(ge=>ge.path).filter(ge=>/\.(png|jpe?g|svg|webp|gif)$/i.test(ge)),w.isConnected&&U()}).catch(()=>{}));let k=oe=>{let ge=i.posts.find(Me=>Me.thumb===oe&&ht(Me.title));return ge?ht(ge.title):B(oe)},B=oe=>decodeURIComponent(oe.split("/").pop().replace(/-[a-z0-9]{4}\.[a-z]+$/i,"").replace(/\.[a-z]+$/i,"")).replace(/[-_]+/g," "),X=async oe=>{for(let ge of oe)try{let Me=await Hs(ge,"media/logos","logo");hi(Me.path,Me.blob),n.logos.push(Me.path),Ae()}catch(Me){mt(Me.message,"bad",7e3)}U()},q=d("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"64px"},onclick:()=>Zi("image/*",!0,X),onkeydown:oe=>{oe.key==="Enter"&&oe.currentTarget.click()}},d("span",null,"+ Ajouter des logos",d("br"),d("small",null,"PNG ou SVG, fond blanc ou transparent")));Za(q,X),He(w,d("div",{class:"logo-lib"},I.map(oe=>{let ge=n.logos.includes(oe);return d("button",{type:"button",class:"logo-chip","aria-pressed":String(ge),title:k(oe),onclick:()=>{n.logos=ge?n.logos.filter(Me=>Me!==oe):[...n.logos,oe],Ae(),U()}},d("img",{src:Ln(oe),alt:k(oe),loading:"lazy"}),d("span",null,k(oe)))}),q),d("p",{class:"hint"},n.logos.length?`${n.logos.length} logo${n.logos.length>1?"s":""} en bas de la fiche, dans l\u2019ordre o\xF9 tu les as coch\xE9s. Les logos des autres projets sont propos\xE9s ici : un clic pour l\u2019ajouter ou le retirer.`:"Les logos s\u2019affichent en bas de la fiche, dans un panneau \xAB Partenaires \xBB. Ceux d\xE9j\xE0 utilis\xE9s sur d\u2019autres projets sont propos\xE9s ici : un clic suffit."))};U();let G=I=>i.sections.find(k=>k.id===I.section)||{},S=i.posts.filter(I=>G(I).skills&&(ht(I.title)||(n.skills||[]).includes(I.id))),D=i.posts.filter(I=>!G(I).skills&&["image","text"].includes(G(I).card)),ee=s.skills||["image","text"].includes(s.card),le=d("div"),me=(I,k,B)=>{let X=i.sections.map(q=>[q,I.filter(oe=>oe.section===q.id)]).filter(([,q])=>q.length);return X.map(([q,oe])=>d("div",{style:{marginBottom:"10px"}},X.length>1?d("span",{class:"lbl"},ht(q.name)||q.id):null,d("div",{class:"chips"},oe.map(ge=>d("button",{type:"button",class:"chip","aria-pressed":String(k(ge)),title:ge.published?"":"Masqu\xE9 sur le site",style:ge.published?null:{opacity:".55"},onclick:()=>{B(ge),Ae(),H()}},ht(ge.title)||ge.id)))))},H=()=>{if(s.skills){let I=D.filter(B=>B.skills.includes(n.id)),k=I.length;He(le,k?d("div",{class:"chips"},I.map(B=>d("span",{class:"chip","aria-pressed":"true",title:B.published?"":"Masqu\xE9 sur le site",style:{cursor:"default",opacity:B.published?null:".55"}},ht(B.title)||B.id))):d("p",{class:"hint",style:{margin:0}},"Aucun projet ne l\u2019utilise pour l\u2019instant."),d("p",{class:"hint"},(k?`${k} projet${k>1?"s":""}. Sur le site, la fiche les fait d\xE9filer avec leur vignette, et la carte 3D illustre son texte avec la photo de l\u2019un d\u2019eux. `:"")+"Pour relier un projet, ouvre-le et coche ce savoir-faire dans son bloc \xAB Savoir-faire \xBB, juste sous les tags."))}else He(le,S.length?me(S,I=>n.skills.includes(I.id),I=>{n.skills=n.skills.includes(I.id)?n.skills.filter(k=>k!==I.id):[...n.skills,I.id]}):d("p",{class:"hint",style:{margin:0}},"Aucune section de savoir-faire : coche \xAB Ses contenus sont des savoir-faire \xBB dans les r\xE9glages d\u2019une section."),S.length?d("p",{class:"hint"},"Affich\xE9s sur la fiche du projet. Un clic ouvre la fiche du savoir-faire, qui liste \xE0 son tour ses projets."):null)};ee&&H();let Y=d("div"),V=i.sections.find(I=>I.layout==="map"&&I.network),ie=()=>{let I=q=>n.spots.some(oe=>oe.city===q),k=q=>{n.spots.push({city:q,lat:Gn[q][0],lon:Gn[q][1]}),Ae(),ie()},B=nh([Hn(n.place,"en"),Hn(n.place,"fr")].join(" , ")).filter(q=>Gn[q]&&!I(q)),X=d("select",{"aria-label":"Ajouter une ville"},d("option",{value:""},"+ Ajouter une ville\u2026"),Object.keys(Gn).sort().filter(q=>!I(q)).map(q=>d("option",{value:q},q)),d("option",{value:"__other"},"Autre lieu (coordonn\xE9es)\u2026"));X.addEventListener("change",async()=>{let q=X.value;if(!q)return;if(q!=="__other"){k(q);return}let oe=await kv();oe&&(n.spots.push(oe),Ae()),ie()}),He(Y,d("div",{class:"chips"},n.spots.length?n.spots.map((q,oe)=>d("span",{class:"chip on"},q.city||`${q.lat}, ${q.lon}`,d("button",{type:"button",class:"x","aria-label":"Retirer "+(q.city||"ce lieu"),onclick:()=>{n.spots.splice(oe,1),Ae(),ie()}},"\xD7"))):d("span",{class:"hint",style:{margin:0}},"Aucune ville pour l\u2019instant.")),B.length?d("p",{class:"hint"},"Rep\xE9r\xE9 dans le champ \xAB Lieu \xBB :",B.map(q=>d("button",{type:"button",class:"chip sugg",onclick:()=>k(q)},"+ "+q))):null,d("div",{style:{marginTop:"10px",maxWidth:"320px"}},X))};ie();let ne=d("div"),J=()=>{let I=n.location,k=Dn([{value:"",label:"Pas de position"},...Object.keys(Gn).sort().map(B=>({value:B,label:B})),{value:"__other",label:"Autre (latitude / longitude)\u2026"}],()=>I?Gn[I.city]?I.city:"__other":"",B=>{B?B==="__other"?n.location={city:I?I.city:"",lat:I?I.lat:0,lon:I?I.lon:0}:n.location={city:B,lat:Gn[B][0],lon:Gn[B][1]}:n.location=null,J()},c);He(ne,d("div",{class:"grid3"},ct("Ville",k),I?ct("Latitude",yt(()=>I.lat,B=>{I.lat=+B||0},{type:"number",step:.01})):null,I?ct("Longitude",yt(()=>I.lon,B=>{I.lon=+B||0},{type:"number",step:.01})):null))};J();let ae=yt(()=>n.id,()=>{},{spell:!1,onBlur:I=>{let k=li(I.value);if(k===n.id){I.value=n.id;return}let B=Vn(k,i.posts.filter(X=>X!==n).map(X=>X.id));i.posts.forEach(X=>{X.team=X.team.map(q=>q===n.id?B:q),X.skills=(X.skills||[]).map(q=>q===n.id?B:q)}),n.id=B,R.sel.post=B,I.value=B,Ae(c)}}),se=d("span",{class:"badge"}),ue=()=>{let I=zl(n);se.className="badge"+(I.length?" warn":""),se.textContent=I.length?"\xC0 compl\xE9ter : "+I.join(", "):"Complet"};return ue(),R.onChange=ue,d("div",{class:"card"},d("header",null,a,d("div",{class:"acts"},ke("Aper\xE7u",()=>Ys(s.id),"sm"),ke("Dupliquer",f,"sm"),ke("Supprimer",h,"sm danger"))),d("div",{class:"block",style:{display:"flex",gap:"18px",alignItems:"center",flexWrap:"wrap"}},In("Visible sur le site",()=>n.published,I=>{n.published=I},c),ct("Section",Dn(i.sections.map(I=>({value:I.id,label:ht(I.name)||I.id})),()=>n.section,I=>{let k=i.sections.find(B=>B.id===I);n.section=I,n.tags=n.tags.filter(B=>k.tags.some(X=>X.id===B)),n.order=Math.max(-1,...ji(i,I,{all:!0}).filter(B=>B!==n).map(B=>B.order??0))+1,R.filter.section=I,mt(`D\xE9plac\xE9 dans \xAB ${ht(k.name)} \xBB.`),jt()})),se),d("div",{class:"block"},d("h3",null,"Textes de la carte"),ui(o.title,n,"title",{list:!0,after:l}),ui(o.subtitle,n,"subtitle",c),r?d("p",{class:"hint",style:{marginTop:"4px"}},"Sur le site, la carte montre le nom et cette phrase, avec une image \xE0 c\xF4t\xE9 : la tienne, sinon la photo d\u2019un projet reli\xE9. Sans phrase, le d\xE9but du texte."):null,r?null:ui(o.place,n,"place",{...c,after:()=>ie()}),r?null:d("div",{class:"grid2"},ct("Auteur de l\u2019\u0153uvre",yt(()=>n.author||"",I=>{n.author=I},{placeholder:"Ex. Romain Tardy"}),`Sign\xE9 sur la vignette 3D : \xAB ${ht(n.title)||"Titre"} \xB7 ${n.author||R.content.settings.name} \xBB. Vide : sign\xE9 ${R.content.settings.name}.`),d("div"),ct("Date",yt(()=>n.date,I=>{n.date=I},{...c,placeholder:"2019, ou 2017 \u2013 2019"})),ct("Lien",yt(()=>n.link,I=>{n.link=I.trim()},{type:"url",placeholder:"https://\u2026"}),s.card==="place"?"Affich\xE9 sur la fiche du lieu.":"Affich\xE9 sous la fiche : \xAB Voir le site \xBB."))),r?d("div",{class:"block"},d("h3",null,"Projets",d("small",null,"ceux qui l\u2019ont coch\xE9 dans leur fiche")),le):null,d("div",{class:"block"},d("h3",null,o.body),Tv(n.body,"\xC9cris ici. Les paragraphes se r\xE9partissent tout seuls sur les panneaux du site.")),d("div",{class:"block"},d("h3",null,"Images"),g("thumb",o.thumb,r?"Une image qui fait comprendre le savoir-faire d\u2019un coup d\u2019\u0153il. Sans image : la photo d\u2019un projet reli\xE9, tir\xE9e au hasard.":s.card==="image"?"Format paysage. Sans image, la carte affiche le titre sur fond noir.":s.card==="portrait"?"Carr\xE9, cadr\xE9 sur le visage. Sans image : les initiales.":"Facultatif."),["image","portrait"].includes(s.card)&&!r?d("details",null,d("summary",{class:"lbl",style:{cursor:"pointer",margin:"6px 0 10px"}},"Dos de la carte (facultatif)"),g("thumbBack","Image au dos","Vue quand la carte est de dos. Par d\xE9faut : la vignette, p\xE2lie.")):null,s.open==="strip"?d("div",{class:"f",style:{marginTop:"6px"}},d("span",{class:"lbl"},"Images et vid\xE9os de la fiche"),_,d("p",{class:"hint"},"La premi\xE8re s\u2019affiche avant le texte, les autres apr\xE8s. Vid\xE9os MP4 ou WebM, id\xE9alement moins de 20 Mo.")):null),d("div",{class:"block"},d("h3",null,"Tags"),p),ee&&!r?d("div",{class:"block"},d("h3",null,"Savoir-faire",d("small",null,"coche ceux utilis\xE9s sur ce projet, comme des tags")),le):null,s.open==="strip"?d("div",{class:"block"},d("h3",null,"Logos des partenaires",d("small",null,"producteurs, soutiens, lieux, clients")),w):null,["image","text"].includes(s.card)&&!r?d("div",{class:"block"},d("h3",null,"Qui a travaill\xE9 dessus ?",d("small",null,"les portraits s\u2019affichent sur la fiche")),C,d("div",{style:{marginTop:"12px"}},ct("Autres cr\xE9dits",yt(()=>n.credits,I=>{n.credits=I},{placeholder:"Ex. Tigre Lab, Studio X"})))):null,s.layout!=="map"&&!r?d("div",{class:"block"},d("h3",null,"Villes",d("small",null,V?`toutes les villes du projet, autant que tu veux : les points du r\xE9seau sur la carte de \xAB ${ht(V.name)} \xBB`:"toutes les villes du projet, autant que tu veux")),Y):null,s.layout==="map"?d("div",{class:"block"},d("h3",null,"Position sur la carte du monde"),ne):null,d("details",{class:"block"},d("summary",{class:"lbl",style:{cursor:"pointer",margin:0}},"Avanc\xE9"),d("div",{class:"grid2",style:{marginTop:"12px"}},ct("Identifiant",ae,"Sert aux liens \xAB \xE9quipe \xBB et au dossier des images."),ct("Dossier des fichiers",d("input",{type:"text",value:u+"/",disabled:!0})))))}function Fv(){let n=R.content;n.models.find(r=>r.id===R.sel.model)||(R.sel.model=n.models[0]&&n.models[0].id);let e=d("div",{class:"card sticky"}),t=d("div"),i=()=>{He(e,d("header",{class:"toolbar",style:{justifyContent:"space-between"}},d("span",{class:"lbl",style:{margin:0}},`${n.models.length} mod\xE8le${n.models.length>1?"s":""}`),ke("+ Importer un .dae",ph,"sm dark")),d("ul",{class:"list"},n.models.map(r=>{let o=n.sections.filter(a=>a.model===r.id);return d("li",{class:"row",tabindex:0,"aria-current":String(r.id===R.sel.model),onclick:()=>{R.sel.model=r.id,i(),s(),Gl(t)},onkeydown:a=>{a.key==="Enter"&&a.currentTarget.click()}},d("div",{class:"th",style:{background:"#f4f4f2"}},"\u25B2"),d("div",null,d("div",{class:"t"},r.name),d("div",{class:"m"},o.length?"Utilis\xE9 par "+o.map(a=>ht(a.name)).join(", "):"Pas utilis\xE9")),d("div",{class:"b"},r.builtin?d("span",{class:"badge"},"origine"):null,R.staged.has(r.file)?d("span",{class:"badge new"},"nouveau"):null))})),d("div",{class:"block"},d("h3",null,"Importer un mod\xE8le"),d("p",{class:"hint",style:{marginTop:0}},"S\xE9lectionne ensemble le fichier .dae et ses textures (JPG, PNG). Export Collada depuis Maya, Blender, Cinema 4D\u2026 Les noms de fichiers des textures doivent correspondre \xE0 ceux cit\xE9s dans le .dae."),(()=>{let r=d("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"80px"},onclick:ph},"Glisse ici le .dae et ses textures");return Za(r,o=>ql(o)),r})())),e.querySelectorAll(".row .th").forEach((r,o)=>{let a=n.models[o];Bl.snapshot(a).then(l=>{r.style.background=`#f4f4f2 url("${l}") center / cover`,r.textContent=""}).catch(()=>{})})},s=()=>{let r=n.models.find(v=>v.id===R.sel.model);if(!r){He(t,d("div",{class:"card"},d("div",{class:"empty"},"Aucun mod\xE8le.")));return}let o=d("div",{class:"model-view"}),a=d("p",{class:"msg"});o.appendChild(a);let l=()=>{Bl.show(o,r,a,!0)},c=n.sections.filter(v=>v.model===r.id),u=async()=>{if(c.length){mt(`Ce mod\xE8le sert \xE0 ${c.map(v=>ht(v.name)).join(", ")}. Choisis un autre objet pour ces sections d\u2019abord.`,"bad",7e3);return}if(await Nn("Supprimer le mod\xE8le",`\xAB ${r.name} \xBB sera retir\xE9 de la liste${r.builtin?"":" et ses fichiers supprim\xE9s du d\xE9p\xF4t \xE0 la prochaine publication"}.`,"Supprimer","danger")){if(!r.builtin){let v=r.file.replace(/[^/]+$/,"");[r.file,...(r.textures||[]).map(C=>v+C)].forEach(C=>{R.staged.has(C)&&(URL.revokeObjectURL(R.staged.get(C).url),R.staged.delete(C))})}n.models.splice(n.models.indexOf(r),1),R.sel.model=null,Ae({nav:!0}),jt()}},h=d("input",{type:"range",min:-180,max:180,step:5,value:r.rotationY||0}),f=d("b",null,(r.rotationY||0)+"\xB0");h.addEventListener("input",()=>{r.rotationY=+h.value,f.textContent=h.value+"\xB0",Ae()}),h.addEventListener("change",l);let g=yt(()=>r.height||420,v=>{r.height=Math.max(50,Math.min(1200,v||420))},{type:"number",min:50,max:1200,step:10});g.addEventListener("change",l);let _=d("input",{type:"range",min:10,max:400,step:5,value:r.scale||100}),b=d("b",null,(r.scale||100)+" %"),m=0;_.addEventListener("input",()=>{let v=+_.value;v===100?delete r.scale:r.scale=v,b.textContent=v+" %",Ae(),clearTimeout(m),m=setTimeout(l,120)});let p=ke("100 %",()=>{delete r.scale,_.value=100,b.textContent="100 %",Ae(),l()},"sm ghost"),L=ct("Hauteur dans la sc\xE8ne",g,"En unit\xE9s de la sc\xE8ne : les cartes sont pos\xE9es \xE0 environ 500 du centre. 420 donne la taille des objets d\u2019origine.");L.hidden=r.scaleMode!=="fit",He(t,d("div",{class:"card"},d("header",null,d("h2",null,r.name),d("div",{class:"acts"},c[0]?ke("Aper\xE7u",()=>Ys(c[0].id),"sm"):null,ke("Supprimer",u,"sm danger"))),o,d("div",{class:"block"},ct("Nom",yt(()=>r.name,v=>{r.name=v},{list:!0})),d("div",{class:"grid2"},ct("Taille",Dn([{value:"pv",label:"Comme le fichier (\xD7100, r\xE8gle de 2008)"},{value:"fit",label:"Ajuster \xE0 une hauteur"}],()=>r.scaleMode,v=>{r.scaleMode=v,L.hidden=v!=="fit",v==="fit"&&!r.height&&(r.height=420),l()})),L),d("div",{class:"f"},d("span",{class:"lbl"},"Taille de l\u2019objet ",b),d("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},_,p),d("p",{class:"hint",style:{margin:"4px 0 0"}},"Agrandit ou r\xE9duit l\u2019objet dans toutes les sections qui l\u2019utilisent, sans toucher au fichier.")),d("div",{class:"f"},d("span",{class:"lbl"},"Rotation ",f),h),ct("Faces sans texture",Dn([{value:"wire",label:"Fil de fer jaune (comme 2008)"},{value:"white",label:"Blanc mat"},{value:"black",label:"Noir mat"}],()=>r.untextured,v=>{r.untextured=v,l()})),d("p",{class:"hint"},"Fichier : ",d("code",null,r.file),(r.textures||[]).length?` \xB7 ${r.textures.length} texture${r.textures.length>1?"s":""}`:"",c.length?" \xB7 utilis\xE9 par "+c.map(v=>ht(v.name)).join(", "):"")))),l()};return R.refreshList=i,i(),s(),Ii("Mod\xE8les 3D","Les objets Collada (.dae) pos\xE9s au centre des sections. Ceux d\u2019origine viennent du site de 2008 ; tu peux importer les tiens.",[],d("div",{class:"cols"},e,t))}function ph(){Zi(".dae,.DAE,image/*,.tga",!0,ql)}function kv(){let n=d("input",{type:"text",placeholder:"Ex. Puebla"}),e=d("input",{type:"number",step:"any",placeholder:"19.04"}),t=d("input",{type:"number",step:"any",placeholder:"-98.20"});return Lr("Ajouter un lieu",d("div",null,ct("Nom affich\xE9",n),d("div",{class:"grid2"},ct("Latitude",e),ct("Longitude",t)),d("p",{class:"hint"},"Dans Google Maps, un clic droit sur un endroit affiche ses coordonn\xE9es : la latitude d\u2019abord, puis la longitude.")),[{label:"Annuler",value:null,cls:"ghost"},{label:"Ajouter",cls:"dark",value:()=>n.value.trim()&&e.value!==""&&t.value!==""&&Math.abs(+e.value)<=90&&Math.abs(+t.value)<=180?{city:n.value.trim(),lat:+e.value,lon:+t.value}:null}])}function Bv(){let n=document.createElement("canvas");n.width=n.height=4;let e=n.getContext("2d");return e.fillStyle="#fff",e.fillRect(0,0,4,4),new Promise(t=>n.toBlob(t,"image/png"))}async function ql(n){let e=R.content,t=n.find(h=>/\.dae$/i.test(h.name));if(!t){mt("Il faut un fichier .dae (Collada) dans la s\xE9lection.","bad");return}if(t.size>3e7){mt("Ce .dae p\xE8se plus de 30 Mo : all\xE8ge le maillage avant de l\u2019importer.","bad",7e3);return}let i=new DOMParser().parseFromString(await t.text(),"application/xml");if(i.querySelector("parsererror")||i.documentElement.nodeName!=="COLLADA"){mt("Ce fichier n\u2019est pas un Collada lisible.","bad");return}let s=Vn(t.name.replace(/\.dae$/i,""),e.models.map(h=>h.id)),r=`models/${s}/`,o=[],a=[],l=new Map;for(let h of i.querySelectorAll("library_images image init_from")){let f=(h.querySelector("ref")||h).textContent.trim();if(!f)continue;let g=decodeURIComponent(f.replace(/^file:\/*/,"").split(/[\\/]/).pop()),_=l.get(g.toLowerCase());if(_===void 0){let b=n.find(p=>p.name.toLowerCase()===g.toLowerCase());_=li(g.replace(/\.[^.]+$/,""))+"."+(b?Ji(g)||"jpg":"png");let m=2;for(;o.includes(_);)_=li(g.replace(/\.[^.]+$/,""))+"-"+m+++"."+(Ji(g)||"jpg");b||a.push(g),hi(r+_,b||await Bv()),o.push(_),l.set(g.toLowerCase(),_)}(h.querySelector("ref")||h).textContent=_}let c=new XMLSerializer().serializeToString(i),u={id:s,name:t.name.replace(/\.dae$/i,""),file:r+s+".dae",textures:o,scaleMode:"fit",height:420,rotationY:0,untextured:o.length?"wire":"white",builtin:!1};hi(u.file,new Blob([c],{type:"model/vnd.collada+xml"}));try{kl(c,u)}catch(h){[u.file,...o.map(f=>r+f)].forEach(f=>R.staged.delete(f)),mt("Three.js ne parvient pas \xE0 lire ce mod\xE8le : "+h.message,"bad",8e3);return}e.models.push(u),R.sel.model=s,Ae({nav:!0}),R.view!=="models"?Xs("models"):jt(),mt(a.length?`Mod\xE8le import\xE9. ${a.length} texture${a.length>1?"s":""} manque${a.length>1?"nt":""} (${a.join(", ")}) : remplac\xE9e${a.length>1?"s":""} par du blanc. R\xE9importe le mod\xE8le avec ces fichiers pour les voir.`:"Mod\xE8le import\xE9. Choisis-le dans une section pour l\u2019utiliser.",a.length?"bad":"ok",9e3)}function zv(){let n=[];return R.content.posts.forEach(e=>{["thumb","thumbBack"].forEach(t=>{/^https?:/.test(e[t]||"")&&n.push({p:e,get:()=>e[t],set:i=>{e[t]=i}})}),e.media.forEach(t=>{/^https?:/.test(t.src)&&vh(t.src)==="image"&&n.push({p:e,get:()=>t.src,set:i=>{t.src=i}})})}),n}function Hv(){let n=zv();if(!n.length)return null;let e=new Set(n.map(s=>s.get())),t=d("div",{class:"progress",hidden:!0},d("i")),i=ke("Rapatrier dans le d\xE9p\xF4t",async()=>{i.disabled=!0,t.hidden=!1;let s=new Map,r=0,o=0,a=0;for(let l of e){let c=n.find(u=>u.get()===l).p;try{let u=await fetch(l,{mode:"cors"});if(!u.ok)throw new Error(u.status);let h=await u.blob(),f=decodeURIComponent(l.split("?")[0].split("/").pop()).replace(/\+/g," ")||"image.jpg",g=await Hs(new File([h],f,{type:h.type||"image/jpeg"}),`media/${c.id}`,"media");hi(g.path,g.blob),s.set(l,g.path),r++}catch{o++}t.firstChild.style.width=Math.round(++a/e.size*100)+"%"}n.forEach(l=>{s.has(l.get())&&l.set(s.get(l.get()))}),Ae({nav:!0}),mt(o?`${r} image${r>1?"s":""} rapatri\xE9e${r>1?"s":""}. ${o} n\u2019ont pas pu \xEAtre lues depuis ce navigateur (le serveur d\u2019origine les prot\xE8ge) : t\xE9l\xE9charge-les et renvoie-les depuis la fiche du contenu.`:`${r} images rapatri\xE9es. Publie pour les envoyer dans le d\xE9p\xF4t.`,o?"bad":"ok",1e4),jt()},"sm dark");return d("div",{class:"card",style:{marginBottom:"18px"}},d("header",null,d("h2",null,`${e.size} image${e.size>1?"s":""} encore en ligne ailleurs`),d("div",{class:"acts"},i)),d("div",{class:"body"},d("p",{class:"hint",style:{marginTop:0}},"Ces images viennent de l\u2019ancien site (Squarespace) et sont affich\xE9es depuis son serveur. Pour que ton site n\u2019en d\xE9pende plus, rapatrie-les : elles seront r\xE9duites puis envoy\xE9es dans media/ \xE0 la prochaine publication."),t))}function Vv(){let n=R.content,e=Ws(),t=d("div",{class:"card"},d("div",{class:"empty"},"Lecture des fichiers du d\xE9p\xF4t\u2026")),i=s=>{let r=[];return n.posts.forEach(o=>{(o.thumb===s||o.thumbBack===s||o.media.some(a=>a.src===s))&&r.push(ht(o.title)||o.id)}),n.models.forEach(o=>{(o.file===s||(o.textures||[]).some(a=>o.file.replace(/[^/]+$/,"")+a===s))&&r.push("Mod\xE8le "+o.name)}),n.settings.logo===s&&r.push("Logo"),r};return(async()=>{let s=[];try{s=R.files||(R.files=await R.backend.listFiles(["media/","models/"]))}catch(g){He(t,d("div",{class:"empty"},"Impossible de lister les fichiers : "+qs(g)));return}let r=new Map(s.filter(g=>!/(^|\/)\./.test(g.path)).map(g=>[g.path,{...g,state:"online"}]));R.staged.forEach((g,_)=>r.set(_,{path:_,size:g.blob.size,state:"new"}));let o=[...r.values()].sort((g,_)=>g.path.localeCompare(_.path)),a=g=>/^models\/[^/]+$/.test(g),l=o.filter(g=>g.state==="online"&&!e.has(g.path)&&!R.deletes.has(g.path)&&!a(g.path)),c=new Set,u=ke("Supprimer la s\xE9lection",()=>{c.forEach(g=>R.deletes.add(g)),Ae({nav:!0}),mt(`${c.size} fichier${c.size>1?"s":""} sera supprim\xE9 \xE0 la prochaine publication.`),jt()},"sm danger",{disabled:!0}),h=()=>{u.disabled=!c.size,u.textContent=c.size?`Supprimer la s\xE9lection (${c.size})`:"Supprimer la s\xE9lection"},f=d("table",{class:"files"},d("thead",null,d("tr",null,d("th",{style:{width:"30px"}}),d("th",{style:{width:"60px"}}),d("th",null,"Fichier"),d("th",null,"Utilis\xE9 par"),d("th",null,"Taille"),d("th",null,"\xC9tat"))),d("tbody",null,o.map(g=>{let _=i(g.path),b=/\.(jpe?g|png|webp|gif|svg)$/i.test(g.path),m=R.deletes.has(g.path),L=l.includes(g)?d("input",{type:"checkbox","aria-label":"S\xE9lectionner "+g.path}):null;return L&&L.addEventListener("change",()=>{L.checked?c.add(g.path):c.delete(g.path),h()}),d("tr",{style:m?{opacity:.5}:null},d("td",null,L),d("td",null,b?d("img",{class:"mini",src:Ln(g.path),alt:"",loading:"lazy"}):d("span",{class:"badge"},Ji(g.path))),d("td",{class:"p"},g.path),d("td",null,_.length?_.join(", "):d("span",{style:{color:"var(--ink-4)"}},"\u2014")),d("td",null,Ol(g.size)),d("td",null,m?d("span",null,d("span",{class:"badge warn"},"\xE0 supprimer")," ",ke("Garder",()=>{R.deletes.delete(g.path),Ae({nav:!0}),jt()},"sm ghost")):g.state==="new"?d("span",{class:"badge new"},e.has(g.path)?"\xE0 envoyer":"ajout\xE9, plus utilis\xE9"):_.length?d("span",{class:"badge"},"en ligne"):a(g.path)?d("span",{class:"badge off"},"origine"):d("span",{class:"badge off"},"inutilis\xE9")))})));He(t,d("header",null,d("h2",null,`${o.length} fichier${o.length>1?"s":""}`),d("div",{class:"acts"},l.length?ke(`Tout s\xE9lectionner : ${l.length} inutilis\xE9${l.length>1?"s":""}`,()=>{f.querySelectorAll("tbody input[type=checkbox]").forEach(g=>{g.checked=!0,c.add(g.closest("tr").querySelector(".p").textContent)}),h()},"sm"):null,u,R.backend.kind!=="demo"?ke(R.backend.kind==="folder"?"Relire le dossier":"Relire le d\xE9p\xF4t",()=>{R.files=null,jt()},"sm ghost"):null)),o.length?d("div",{style:{overflowX:"auto"}},f):d("div",{class:"empty"},R.backend.kind==="demo"?"En d\xE9mo, seuls les fichiers ajout\xE9s depuis ce navigateur apparaissent ici.":"Aucun fichier dans media/ ni models/."))})(),Ii("M\xE9dias","Tous les fichiers du dossier media/ et des mod\xE8les 3D. Les fichiers qui ne servent plus peuvent \xEAtre supprim\xE9s pour garder le d\xE9p\xF4t l\xE9ger.",[],Hv(),t)}function Gv(n){n.homeVideo=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},n.homeVideo||{});let e=n.homeVideo,t=d("span",{class:"hint",style:{margin:0}}),i=()=>{t.textContent=e.src?e.src.split("/").pop():"Aucune : les photos des projets d\xE9filent en travelling lent."},s=()=>Zi("video/mp4,video/webm,.mp4,.webm",!1,async r=>{if(r[0])try{let o=await Hs(r[0],"media/accueil","media");hi(o.path,o.blob),e.src=o.path,Ae(),i(),mt("Vid\xE9o ajout\xE9e : elle part sur le site \xE0 la prochaine publication.")}catch(o){mt(o.message,"bad",8e3)}});return i(),d("div",{class:"f"},d("span",{class:"lbl"},"Vid\xE9o de l\u2019accueil, en carr\xE9s"),d("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},ke(e.src?"Remplacer la vid\xE9o\u2026":"Choisir une vid\xE9o\u2026",s,"sm"),e.src?ke("Retirer",()=>{e.src="",Ae(),i()},"sm ghost"):null,t),d("p",{class:"hint"},"MP4 sans son ou avec, en boucle : un extrait de 20 \xE0 30 secondes en 720p suffit (moins de 15 Mo). Elle d\xE9marre \xE0 un endroit au hasard. Une vid\xE9o YouTube ne marche pas ici : il faut le fichier."),d("div",{style:{marginTop:"10px"}},In("R\xE9glage au hasard \xE0 chaque visite (grille, contraste, delay, couleur, sens)",()=>e.random!==!1,r=>{e.random=r,jt()})),e.random!==!1?d("p",{class:"hint"},"Chaque visiteur arrive sur une combinaison diff\xE9rente, puis la change avec le clavier. Coupe cet interrupteur pour fixer le r\xE9glage ci-dessous."):d("div",{class:"grid2",style:{marginTop:"10px"}},ct("Taille de grille (px)",yt(()=>e.cell,r=>{e.cell=Math.max(6,Math.min(40,+r||14))},{type:"number",min:6,max:40})),ct("Contraste",yt(()=>e.contrast,r=>{e.contrast=Math.max(.4,Math.min(3,+r||1))},{type:"number",min:.4,max:3,step:.1})),ct("Carr\xE9 maximal (%)",yt(()=>e.size,r=>{e.size=Math.max(40,Math.min(100,+r||92))},{type:"number",min:40,max:100})),ct("Delay (lissage)",yt(()=>e.delay,r=>{e.delay=Math.max(1,Math.min(8,+r||1))},{type:"number",min:1,max:8}),"Comme sur Fat-Man : valeur = valeur \u2212 (valeur \u2212 cible) / delay. 1 = imm\xE9diat, 8 au maximum. Coup\xE9 d\u2019office sur un ordinateur trop lent."),ct("Couleur des carr\xE9s",Dn([{value:"white",label:"Blanc"},{value:"grey",label:"Gris"},{value:"accent",label:"Couleur d\u2019accent"},{value:"source",label:"Couleurs de la vid\xE9o"}],()=>e.color,r=>{e.color=r})),ct("Les carr\xE9s grossissent",Dn([{value:"light",label:"\xE0 la lumi\xE8re"},{value:"dark",label:"dans l\u2019ombre"}],()=>e.mode,r=>{e.mode=r}))),d("div",{style:{marginTop:"10px"}},In("Les visiteurs ont un petit clavier pour r\xE9gler la vid\xE9o, activer le son et leur cam\xE9ra",()=>e.controls!==!1,r=>{e.controls=r})))}function Xl(n){oh(n).forEach(t=>{document.querySelector(`link[data-hc-font][href="${CSS.escape(t)}"]`)||document.head.appendChild(d("link",{rel:"stylesheet",href:t,"data-hc-font":""}))})}var Wv=[[100,"Thin 100"],[200,"Extra light 200"],[300,"Light 300"],[400,"Regular 400"],[500,"Medium 500"],[600,"Semibold 600"],[700,"Bold 700"],[800,"Extra bold 800"],[900,"Black 900"]];function qv(n){let e=d("div"),t=[...new Set(ks.map(r=>r.group))],i=()=>He(e,t.map(r=>d("div",{class:"typo-group"},d("h4",null,r),ks.filter(o=>o.group===r).map(s)))),s=r=>{let o=d("div",{class:"typo-row"}),a=r.only||["font","size","lh","weight","italic","ls","upper"],l=v=>Li(n,r.id)[v],c=(v,C)=>{n.typo=n.typo||{};let O=n.typo[r.id]=n.typo[r.id]||{};C===""||C===null||C===void 0||C===r[v]||v==="italic"&&!C&&!r.italic||v==="upper"&&!C&&!r.upper||v==="ls"&&+C===(r.ls||0)?delete O[v]:O[v]=C,Object.keys(O).length||delete n.typo[r.id],Xl(n),Ae(),p(),(r.id==="logo"||r.id==="sig1")&&zs()},u=(v,C,O={})=>{let w=d("input",{type:"number",step:O.step||1,min:O.min,max:O.max,value:l(v)??"",placeholder:O.ph});return w.addEventListener("input",()=>c(v,w.value===""?"":+w.value)),d("label",null,C,w)},h=(v,C)=>{let O=d("input",{type:"checkbox",checked:!!l(v)});return O.addEventListener("change",()=>c(v,O.checked)),d("label",{class:"ck"},O,C)},f=()=>{let v=l("font"),C=/^g:/.test(v||""),O=d("select",null,[...new Set(Er.map(U=>U.group))].map(U=>d("optgroup",{label:U},Er.filter(G=>G.group===U).map(G=>d("option",{value:G.id,selected:G.id===v},G.label+(G.id===r.font?" \xB7 d\xE9faut":""))))),d("optgroup",{label:"Google Fonts"},d("option",{value:"__g",selected:C},"Autre police Google Fonts\u2026"))),w=d("input",{type:"text",placeholder:"Nom exact, ex. Inter, Playfair Display",value:C?v.slice(2):"",spellcheck:"false"});return w.hidden=!C,O.addEventListener("change",()=>{O.value==="__g"?(w.hidden=!1,w.focus(),w.value.trim()&&c("font","g:"+w.value.trim())):(w.hidden=!0,c("font",O.value))}),w.addEventListener("change",()=>{let U=w.value.trim();U&&c("font","g:"+U)}),d("label",{class:"fam"},"Police",O,w)},g=()=>{let v=d("select",null,Wv.map(([C,O])=>d("option",{value:C,selected:+l("weight")===C},O)));return v.addEventListener("change",()=>c("weight",+v.value)),d("label",null,"Graisse",v)},_=()=>{let v=d("input",{type:"text",value:l("text")??"",maxlength:4,style:{width:"70px"}});return v.addEventListener("input",()=>c("text",v.value)),d("label",null,"Lettres",v)},b=d("div",{class:"typo-sample"+(/^(bs|bseg|offh|offp|menu|ui|sig1|sig2)$/.test(r.id)?" light":"")}),m=ke("R\xE9tablir",()=>{n.typo&&delete n.typo[r.id],Ae(),i(),(r.id==="logo"||r.id==="sig1")&&zs()},"sm ghost rst"),p=()=>{let v=Li(n,r.id);if(o.classList.toggle("changed",!!v.changed),m.hidden=!v.changed,r.id==="logo"){He(b,d("img",{src:ja(n.accent||"#ffcc00",n),alt:"",style:{width:"64px",height:"64px",display:"block"}})),b.style.background="#fff";return}let C=r.scale?22*(v.scale||100)/100:v.size||14;Object.assign(b.style,{fontFamily:v.css,fontSize:Math.min(C,56)+"px",lineHeight:v.lh?Math.min(v.lh,64)+"px":"1.2",fontWeight:v.weight||400,fontStyle:v.italic?"italic":"normal",letterSpacing:(v.ls||0)+"em",textTransform:v.upper?"uppercase":"none"}),b.textContent=r.sample||"Hand Coded",document.fonts&&document.fonts.load(`${v.italic?"italic ":""}${v.weight||400} ${C}px ${v.css}`).catch(()=>{})},L=d("div",{class:"typo-ctl"},a.includes("font")?f():null,a.includes("size")?u("size",r.id==="logo"?"Taille":"Taille (px)",{min:6,max:160}):null,a.includes("lh")?u("lh","Interligne (px)",{min:6,max:200,step:.5}):null,a.includes("weight")?g():null,a.includes("ls")?u("ls","Espacement (em)",{step:.01,min:-.2,max:1,ph:"0"}):null,a.includes("scale")?u("scale","Taille (%)",{min:50,max:200,step:5}):null,a.includes("text")?_():null,a.includes("italic")?h("italic","Italique"):null,a.includes("upper")?h("upper","Majuscules"):null);return He(o,d("div",{class:"nm"},d("b",null,r.label),r.hint?d("small",null,r.hint):null,m),L,b),p(),o};return i(),d("div",{class:"block"},d("h3",null,"Typographie",d("small",null,"police, taille, interligne, graisse de chaque texte du site")),d("p",{class:"hint"},"Par d\xE9faut, le site garde la typographie d\u2019origine. Un point jaune signale un r\xE9glage modifi\xE9 ; \xAB R\xE9tablir \xBB revient \xE0 l\u2019origine. Les polices h\xE9berg\xE9es avec le site marchent partout, m\xEAme hors ligne. Une police Google Fonts se charge depuis Google quand le site est en ligne : tape son nom exact, tel qu\u2019il appara\xEEt sur fonts.google.com."),e,d("div",{style:{marginTop:"12px"}},ke("Tout r\xE9tablir",()=>{delete n.typo,Ae(),i(),zs()},"sm ghost")))}function Xv(n){let e=d("div"),t=()=>{let i=n.home.figures=n.home.figures||[];He(e,...i.map((s,r)=>d("div",{class:"fig-row",style:{display:"grid",gridTemplateColumns:"120px 1fr auto",gap:"10px",alignItems:"end",marginBottom:"8px"}},ct("Chiffre",yt(()=>s.value,o=>{s.value=o.trim()},{placeholder:"42 ou auto:projects",spell:!1})),ui("Libell\xE9",s,"label"),ke("\xD7",()=>{i.splice(r,1),Ae(),t()},"sm icon ghost danger",{"aria-label":"Retirer"}))),ke("+ Chiffre",()=>{i.push({value:"",label:Object.fromEntries(en.map(s=>[s,""]))}),Ae(),t()},"sm"),d("p",{class:"hint"},"Calcul\xE9s tout seuls : auto:years (ann\xE9es depuis 2012), auto:projects (projets publi\xE9s), auto:partners, auto:people, auto:cities. Sinon, \xE9cris la valeur (21, 40+\u2026)."))};return t(),d("div",{class:"f"},d("span",{class:"lbl"},"Chiffres",d("small",null," ils d\xE9filent sur le bandeau LED du haut, apr\xE8s les slogans tap\xE9s")),e)}function $v(){let n=R.content,e=n.settings,i=((w,U,G)=>{let S=d("textarea",{rows:3,placeholder:G});return S.value=(w[U]||[]).join(`
`),S.addEventListener("input",()=>{w[U]=S.value.split(`
`).map(D=>D.trim()).filter(Boolean),Ae()}),S})(e.home,"ticker","Un slogan par ligne"),s=d("div",{class:"f"}),r=(w,U=[])=>{let G=new Set((e.home.ticker||[]).map(S=>S.toUpperCase()));He(s,d("span",{class:"lbl"},"Slogans re\xE7us",U.length?d("small",null," "+U.length):null),d("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},ke(w==="loading"?"Chargement\u2026":U.length?"Actualiser":"Afficher les slogans re\xE7us",o,"sm",{disabled:w==="loading"}),w&&w!=="loading"&&w!=="ok"?d("span",{class:"hint",style:{margin:0}},w):null),U.length?d("div",{class:"inbox"},U.map(S=>{let D=String(S.slogan).toUpperCase(),ee=G.has(D);return d("div",{class:"inbox-row"},d("span",{class:"d"},S.date?new Date(S.date).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit"}):""),d("span",{class:"s"},S.slogan),d("span",{class:"m"},[S.lang,S.tag].filter(Boolean).join(" \xB7 ")),ke(ee?"Au bandeau":"+ Bandeau",()=>{e.home.ticker=[...e.home.ticker||[],D],i.value=e.home.ticker.join(`
`),Ae(),r("ok",U)},"sm ghost",{disabled:ee}))})):null)},o=async()=>{if(!/^https:\/\//.test(e.sloganInbox||"")){r("Renseigne d\u2019abord l\u2019adresse de collecte ci-dessus.");return}r("loading");try{let U=await(await fetch(e.sloganInbox+(e.sloganInbox.includes("?")?"&":"?")+"limit=500")).json();r(U.slogans&&U.slogans.length?"ok":"Aucun slogan pour l\u2019instant.",U.slogans||[])}catch{r("Lecture impossible : v\xE9rifie l\u2019adresse et que le script est d\xE9ploy\xE9 pour \xAB Tout le monde \xBB.")}};r("");let a=d("div",{class:"logo-prev"}),l=d("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"}}),c=()=>{a.style.backgroundImage=`url("${e.logo?Ln(e.logo):_h()}")`,zs(),He(l,ke(e.logo?"Remplacer\u2026":"Choisir un logo\u2026",()=>Zi("image/*",!1,u),"sm"),e.logo?ke("Logo par d\xE9faut",()=>{e.logo="",Ae(),c()},"sm ghost"):null,d("span",{class:"hint",style:{margin:0}},"SVG ou PNG carr\xE9, fond transparent. Affich\xE9 en haut \xE0 droite et sur l\u2019accueil."))},u=async w=>{if(w[0])try{let U=await Hs(w[0],"media/site","logo");hi(U.path,U.blob),e.logo=U.path,Ae(),c()}catch(U){mt(U.message,"bad")}};c();let h=d("input",{type:"color",value:e.accent||"#ffcc00","aria-label":"Couleur d\u2019accent"}),f=d("div",{class:"swatches"}),g=w=>{e.accent=w,h.value=w,document.documentElement.style.setProperty("--accent",w),c(),Ae(),_()},_=()=>He(f,h,...["#ffcc00","#f1b800","#ff5a1f","#e8175d","#00b3a4","#2f6bff","#111111"].map(w=>d("button",{type:"button",style:{background:w},"aria-label":w,"aria-pressed":String((e.accent||"").toLowerCase()===w),onclick:()=>g(w)})));h.addEventListener("input",()=>g(h.value)),_();let b=d("div"),m=()=>He(b,...e.offices.map((w,U)=>{typeof w.name!="object"&&(w.name=Object.fromEntries(en.map(S=>[S,w.name||""])));let G=d("textarea",{rows:2,placeholder:"Adresse, une ligne par ligne"});return G.value=(w.lines||[]).join(`
`),G.addEventListener("input",()=>{w.lines=G.value.split(`
`).map(S=>S.trim()).filter(Boolean),Ae()}),d("div",{class:"office-row"},Pn().map(S=>d("div",{class:"lang","data-l":S.toUpperCase()},yt(()=>w.name[S]??"",D=>{w.name[S]=D},{placeholder:"Nom ("+Yi[S]+")"}))),d("div",{class:"full"},G),d("div",{class:"full"},yt(()=>w.mail,S=>{w.mail=S.trim()},{type:"email",placeholder:"contact@\u2026"})),ke("Retirer ce bureau",()=>{e.offices.splice(U,1),Ae(),m()},"sm ghost danger del"))}),ke("+ Ajouter un bureau",()=>{e.offices.push({name:zn(),lines:[],mail:""}),Ae(),m()},"sm",{style:{marginTop:"10px"}}));m();let p=d("div"),L=()=>He(p,...e.social.map((w,U)=>d("div",{class:"social-row"},yt(()=>w.label,G=>{w.label=G},{placeholder:"Instagram"}),yt(()=>w.url,G=>{w.url=G.trim()},{type:"url",placeholder:"https://\u2026"}),ke("\xD7",()=>{e.social.splice(U,1),Ae(),L()},"sm icon ghost danger",{"aria-label":"Retirer"}))),ke("+ Ajouter un lien",()=>{e.social.push({label:"",url:""}),Ae(),L()},"sm",{style:{marginTop:"10px"}}));L();let v=d("div",{class:"chips"});He(v,...en.map(w=>d("button",{type:"button",class:"chip","aria-pressed":String(e.langs.includes(w)),onclick:()=>{if(e.langs.includes(w)){if(e.langs.length===1)return;e.langs=e.langs.filter(U=>U!==w)}else e.langs=en.filter(U=>U===w||e.langs.includes(U));e.langs.includes(e.defaultLang)||(e.defaultLang=e.langs[0]),Ae(),jt()}},Yi[w])),e.langs.length>1?d("span",{class:"hint",style:{margin:"0 0 0 6px"}},"Si la langue du visiteur n\u2019est pas propos\xE9e : ",Dn(e.langs.map(w=>({value:w,label:Yi[w]})),()=>e.defaultLang,w=>{e.defaultLang=w})):null);let O=w=>{let U=d("textarea",{rows:3});return U.value=(e.taglines[w]||[]).join(`
`),U.addEventListener("input",()=>{e.taglines[w]=U.value.split(`
`).map(G=>G.trim()).filter(Boolean),Ae()}),d("div",{class:"lang","data-l":w.toUpperCase()},U)};return Ii("R\xE9glages","Identit\xE9, accueil et coordonn\xE9es, dans chaque langue du site.",[],d("div",{class:"card"},d("div",{class:"block"},d("h3",null,"Identit\xE9"),d("div",{class:"grid2"},ct("Nom du studio",yt(()=>e.name,w=>{e.name=w})),ct("Depuis",yt(()=>e.since,w=>{e.since=w},{placeholder:"2012"}))),d("div",{class:"f"},d("span",{class:"lbl"},"Logo"),d("div",{style:{display:"flex",gap:"14px",alignItems:"center"}},a,l)),d("div",{class:"f"},d("span",{class:"lbl"},"Couleur d\u2019accent"),f,d("p",{class:"hint"},"Bandeau LED, tirets des cartes, lieux, bouton ENTER."))),d("div",{class:"block"},d("h3",null,"Apparence"),In("Site en n\xE9gatif \xE0 l\u2019arriv\xE9e",()=>e.negative,w=>{e.negative=w}),d("p",{class:"hint"},"Toute la page s\u2019inverse : fond noir, sc\xE8ne 3D et textes en n\xE9gatif. Les images et vid\xE9os des contenus gardent leurs vraies couleurs, et la couleur d\u2019accent reste la m\xEAme."),d("div",{style:{marginTop:"12px"}},In("Signer les vignettes 3D (\u0153uvre \xB7 auteur \xB7 cr\xE9dit photo)",()=>e.signImages!==!1,w=>{e.signImages=w})),d("p",{class:"hint"},"Une mention discr\xE8te en bas de chaque vignette des cartes 3D, pour que l\u2019\u0153uvre d\u2019un artiste ne passe pas pour une cr\xE9ation du studio. L\u2019auteur et le cr\xE9dit photo (celui de la premi\xE8re image) se r\xE8glent dans chaque contenu."),d("div",{style:{marginTop:"12px"}},In("Les visiteurs basculent n\xE9gatif / positif en cliquant sur le logo",()=>e.negativeToggle!==!1,w=>{e.negativeToggle=w})),d("p",{class:"hint"},"Le logo par d\xE9faut a un anneau \xE0 la couleur d\u2019accent sur fond blanc, et blanc sur fond noir. Le choix du visiteur est gard\xE9 pour sa prochaine visite.")),qv(e),d("div",{class:"block"},d("h3",null,"Showreel"),ct("Lien de la vid\xE9o",yt(()=>e.showreel,w=>{e.showreel=w.trim()},{placeholder:"https://youtu.be/\u2026",spell:!1}),"YouTube, Vimeo ou adresse d\u2019un fichier MP4. Un bouton \xAB Showreel \xBB sous le logo l\u2019ouvre \xE0 tout moment : l\u2019\xE9cran glisse au premier plan, la vid\xE9o part son coup\xE9, le visiteur active le son d\u2019un clic. Laisse vide pour retirer le bouton.")),d("div",{class:"block"},d("h3",null,"Langues du site"),v,d("p",{class:"hint"},"Le site s\u2019ouvre dans la langue du navigateur du visiteur quand elle est propos\xE9e. Il peut ensuite en changer en bas \xE0 gauche. Le back-office affiche un champ par langue activ\xE9e.")),d("div",{class:"block"},d("h3",null,"Signature",d("small",null,"en haut \xE0 gauche du site, une ligne par ligne")),d("div",{class:"pair"},Pn().map(O))),d("div",{class:"block"},d("h3",null,"Accueil"),ui("Invitation dans le champ",e.home,"placeholder",{hint:"Le texte gris du grand champ o\xF9 les visiteurs tapent leur bullshit slogan."}),ui("Exemple sous le champ",e.home,"example"),ct("Slogans du bandeau LED",i,"Ils d\xE9filent en points LED tout en haut. Les slogans tap\xE9s par un visiteur s\u2019ajoutent devant, sur son \xE9cran."),d("div",{style:{margin:"-4px 0 14px"}},In("Masquer le bandeau LED du haut",()=>!!e.home.tickerOff,w=>{w?e.home.tickerOff=!0:delete e.home.tickerOff})),ct("Collecte des slogans",yt(()=>e.sloganInbox,w=>{e.sloganInbox=w.trim()},{placeholder:"https://script.google.com/macros/s/\u2026/exec",spell:!1}),"Adresse d\u2019un script Google reli\xE9 \xE0 une feuille de calcul : chaque slogan valid\xE9 par un visiteur y est enregistr\xE9, avec la date, la langue et le tag du lien client. La mise en place prend cinq minutes, voir le fichier tools/slogans-google-sheet.gs. Vide : les slogans restent sur l\u2019\xE9cran du visiteur."),s,ui("Bouton d\u2019entr\xE9e",e.home,"enter"),Xv(e),Gv(e),ct("Section d\u2019arriv\xE9e",Dn(n.sections.map(w=>({value:w.id,label:ht(w.name)||w.id})),()=>e.startSection,w=>{e.startSection=w}))),d("div",{class:"block"},d("h3",null,"Bureaux"),b),d("div",{class:"block"},d("h3",null,"R\xE9seaux et liens"),p)))}function Yv(){let n=d("div",{class:"card"},d("div",{class:"empty"},"Lecture de l\u2019historique\u2026")),e=d("div",{class:"card"});return jv(e),R.backend.kind==="demo"?(He(n,d("div",{class:"block"},d("h3",null,"D\xE9mo"),d("p",null,"En d\xE9mo, chaque publication remplace la pr\xE9c\xE9dente, dans ce navigateur seulement : rien n\u2019est \xE9crit dans les fichiers du site. Pour garder ton travail, exporte-le ci-dessous, ou travaille dans le dossier du site (Chrome, Edge) ou sur GitHub."),ke("Revenir au contenu d\u2019origine",async()=>{await Nn("R\xE9initialiser la d\xE9mo","Le contenu de d\xE9monstration d\u2019origine sera recharg\xE9. Une copie de ton travail reste dans les sauvegardes.","R\xE9initialiser","danger")&&(await Vs({content:R.content,at:Date.now()}),await R.backend.reset(),await ci(R.draftKey),location.reload())},"danger"))),Ii("Historique",null,[],e,n)):((async()=>{try{let t=await R.backend.lastCommits(20);He(n,...t.map((i,s)=>d("div",{class:"commit"},d("div",null,d("b",null,i.commit.message.split(`
`)[0]),d("small",null,`${new Date(i.commit.author.date).toLocaleString("fr-FR")} \xB7 ${i.commit.author.name}`,s===0?R.backend.kind==="folder"?" \xB7 version enregistr\xE9e":" \xB7 version en ligne":"")),d("div",{style:{display:"flex",gap:"6px"}},i.html_url?d("a",{class:"btn sm ghost",href:i.html_url,target:"_blank",rel:"noopener"},"Sur GitHub"):null,s===0?null:ke("Restaurer",async()=>{if(await Nn("Restaurer cette version","Le contenu de cette version remplace ton brouillon. Rien ne change tant que tu ne publies pas. Les images supprim\xE9es depuis peuvent manquer.","Restaurer dans le brouillon"))try{R.content=await R.backend.loadAt(i.sha),Ae({nav:!0}),mt("Version charg\xE9e dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(r){mt("Lecture impossible : "+qs(r),"bad")}},"sm"))))),t.length||He(n,d("div",{class:"empty"},"Pas encore de version publi\xE9e."))}catch(t){He(n,d("div",{class:"empty"},"Impossible de lire l\u2019historique : "+qs(t)))}})(),Ii("Historique",R.backend.kind==="folder"?"Chaque publication garde une version dans content/versions/ (les 40 derni\xE8res). Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.":"Chaque publication est une version du site. Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.",[],e,n))}function jv(n){let e=()=>new Date().toISOString().slice(0,16).replace(/[:T]/g,"-"),t=ke("Exporter le contenu (.json)",()=>{let r=d("a",{href:URL.createObjectURL(new Blob([JSON.stringify(R.content,null,1)+`
`],{type:"application/json"})),download:`hand-coded-content-${e()}.json`});document.body.appendChild(r),r.click(),r.remove(),mt("Fichier t\xE9l\xE9charg\xE9 : il contient tous les textes et r\xE9glages, avec ou sans publication.")},"sm"),i=ke("Importer un contenu\u2026",()=>Zi("application/json,.json",!1,async r=>{try{let o=JSON.parse(await r[0].text()),a=o&&o.content&&o.settings===void 0?o.content:o;if(!a||!a.settings||!Array.isArray(a.posts))throw new Error("ce fichier n\u2019est pas un contenu du site");if(!await Nn("Importer ce contenu",`\xAB ${r[0].name} \xBB remplace ton brouillon. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.`,"Importer"))return;await Vs({content:R.content,at:Date.now()});let l=R.content,c=fn(a);l.models.forEach(u=>{c.models.some(h=>h.id===u.id)||c.models.push(u)}),R.content=c,Ae({nav:!0}),Cr(),mt("Contenu import\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(o){mt("Import impossible : "+(o.message||o),"bad",8e3)}}),"sm ghost"),s=d("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"10px"}});He(n,d("div",{class:"block"},d("h3",null,"Sauvegardes"),d("p",{class:"hint",style:{marginTop:0}},"Le fichier export\xE9 contient tous les textes, r\xE9glages et liens vers les images. Il se r\xE9importe ici, ou se pose tel quel dans le dossier du site sous le nom content/content.json."),d("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},t,i),s)),(async()=>{let r=[],o=await Ri("draft-backup:"+R.draftKey);o&&o.content&&r.push(ke(`R\xE9cup\xE9rer le brouillon mis de c\xF4t\xE9 le ${new Date(o.at).toLocaleString("fr-FR")}`,async()=>{if(!await Nn("R\xE9cup\xE9rer le brouillon","Ce brouillon remplace ton brouillon actuel (qui est mis de c\xF4t\xE9 \xE0 son tour).","R\xE9cup\xE9rer"))return;let u={content:R.content,at:Date.now()};R.content=fn(o.content),await Vs(u),Ae({nav:!0}),Cr(),mt("Brouillon r\xE9cup\xE9r\xE9.")},"sm ghost"));let a=(await sh()).filter(u=>typeof u=="string"&&/^(draft:|demo:content:|draft-backup:)/.test(u)&&u!==R.draftKey&&u!=="draft-backup:"+R.draftKey&&!(R.backend.kind==="demo"&&u==="demo:content:v6")),l=u=>u.startsWith("demo:content:")?"publication de la d\xE9mo":u.startsWith("draft-backup:")?"brouillon mis de c\xF4t\xE9 ("+u.replace(/^draft-backup:draft:/,"").replace(/^demo:v\d+$/,"d\xE9mo").replace(/^folder:/,"dossier ")+")":u.startsWith("draft:demo:")?"brouillon de la d\xE9mo":u.startsWith("draft:folder:")?"brouillon du dossier \xAB "+u.slice(13)+" \xBB":"brouillon GitHub "+u.slice(6),c=[];for(let u of a){let h=await Ri(u),f=h&&(h.settings?h:h.content);f&&f.settings&&Array.isArray(f.posts)&&c.push({k:u,c:f,at:h&&h.at||0})}c.sort((u,h)=>h.at-u.at);for(let u of c)r.push(ke(`Reprendre : ${l(u.k)}${u.at?" du "+new Date(u.at).toLocaleString("fr-FR"):""}`,async()=>{await Nn("Reprendre ce travail","Ce contenu remplace ton brouillon (qui est mis de c\xF4t\xE9). Les images ajout\xE9es ailleurs ne suivent pas : renvoie-les si besoin. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.","Reprendre")&&(await Vs({content:R.content,at:Date.now()}),R.content=fn(structuredClone(u.c)),Ae({nav:!0}),Cr(),mt("Charg\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie."))},"sm ghost"));He(s,r)})()}function Ys(n){let e={};R.recent.forEach((C,O)=>{e[O]=C.url}),R.staged.forEach((C,O)=>{e[O]=C.url}),(R.backend.kind==="demo"||R.backend.kind==="folder")&&R.backend.urls&&R.backend.urls.forEach((C,O)=>{e[O]||(e[O]=C)});let t=R.content.sections.filter(C=>C.visible),i=n||(R.view==="posts"?R.filter.section:R.view==="sections"?R.sel.section:R.view==="settings"?"__home":"")||R.content.settings.startSection;i&&i!=="__home"&&!t.find(C=>C.id===i)&&(i=t[0]&&t[0].id);let s=d("div",{class:"frame"}),r="desk",o=async()=>{let C={};for(let[O,w]of[...R.recent,...R.staged])w&&w.blob&&(C[O]=w.blob);if(R.backend.kind==="folder"&&R.backend.urls){for(let O of R.backend.urls.keys())if(!C[O])try{C[O]=await R.backend.readBlob(O)}catch{}}if(R.backend.kind==="demo"&&R.backend.urls){for(let O of R.backend.urls.keys())if(!C[O]){let w=await Ri("demo:file:"+O).catch(()=>null);w&&(C[O]=w)}}return C},a=null,l=0,c=20261102,u=d("div",{class:"preview-warn"}),h=()=>{let C=l;try{C=C||a&&a.contentWindow&&a.contentWindow.HC_SITE_VERSION||0}catch{}if(C>=c){u.classList.remove("on");return}u.textContent="Le moteur du site dans "+(R.backend.kind==="github"?"le d\xE9p\xF4t":"ce dossier")+" est plus ancien que le back-office : l\u2019aper\xE7u ne montre pas tous tes r\xE9glages (typographie, showreel\u2026). Remplace assets/hc/site.bundle.js et site.js par la derni\xE8re version"+(R.backend.kind==="github"?", envoie-les sur GitHub, puis attends une minute.":"."),u.classList.add("on")},f=async C=>{!a||C.source!==a.contentWindow||!C.data||C.data.type!=="hc-preview-ready"||(l=C.data.version||0,h(),a.contentWindow.postMessage({type:"hc-preview",data:window.__hcPreview,blobs:await o()},"*"))};window.addEventListener("message",f);let g=()=>{window.__hcPreview={content:structuredClone(R.content),files:e,start:i==="__home"?"":i},a=d("iframe",{title:"Aper\xE7u du site",allow:"fullscreen"}),l=0,u.classList.remove("on"),window.HC_SITE_HTML||a.addEventListener("load",()=>setTimeout(h,3e3)),window.HC_SITE_HTML?a.srcdoc=window.HC_SITE_HTML:a.src=Ki+"index.html?preview="+Date.now();let C={desk:["100%","100%"],tab:["820px","1080px"],mob:["390px","780px"]}[r];a.style.width=C[0],a.style.height=C[1],a.style.maxHeight="100%",He(s,a)},_=d("div",{class:"sizes",role:"group","aria-label":"Taille d\u2019\xE9cran"}),b=()=>He(_,...[["desk","Bureau"],["tab","Tablette"],["mob","Mobile"]].map(([C,O])=>d("button",{type:"button","aria-pressed":String(r===C),onclick:()=>{r=C,b(),g()}},O)));b();let m=d("select",{"aria-label":"Section"},d("option",{value:"__home",selected:i==="__home"},"Accueil"),t.map(C=>d("option",{value:C.id,selected:C.id===i},ht(C.name))));m.addEventListener("change",()=>{i=m.value,g()});let p=()=>{v.remove(),document.removeEventListener("keydown",L),window.removeEventListener("message",f)},L=C=>{C.key==="Escape"&&document.activeElement&&!document.activeElement.closest("iframe")&&p()},v=d("div",{class:"preview",role:"dialog","aria-label":"Aper\xE7u"},d("div",{class:"bar"},d("b",null,"Aper\xE7u"),d("span",null,$s()?"avec les modifications non publi\xE9es":"identique au site en ligne"),d("span",{class:"sp"}),m,_,ke("Recharger",g,"sm"),ke("Fermer",p,"sm primary")),u,s);document.body.appendChild(v),document.addEventListener("keydown",L),g()}var tn="hc-admin";function Lh(){let n={};try{n=JSON.parse(localStorage.getItem(tn)||"{}")}catch{}try{let e=sessionStorage.getItem(tn+":token");e&&!n.token&&(n.token=e)}catch{}return n}function Jv(){let n=/^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);if(!n)return{};let e=location.pathname.split("/").filter(Boolean);return{owner:n[1],repo:e.length>1&&e[0]!=="admin"?e[0]:`${n[1]}.github.io`}}async function Ka(n){let e=d("img",{src:Ki+"assets/hc/ui/logo-default.svg",alt:""}),t=d("h1",null,"Hand Coded.");Zv(e,t);let i={};try{let m=await fetch("config.json",{cache:"no-store"});m.ok&&(i=await m.json())}catch{}let s=Lh(),r=Jv(),o=m=>s[m]||i[m]||r[m]||"",a=d("input",{type:"text",value:o("owner"),required:!0,autocomplete:"username",spellcheck:"false"}),l=d("input",{type:"text",value:o("repo"),required:!0,spellcheck:"false"}),c=d("input",{type:"text",value:o("branch")||"main",spellcheck:"false"}),u=d("input",{type:"text",value:o("root"),placeholder:"(racine du d\xE9p\xF4t)",spellcheck:"false"}),h=d("input",{type:"password",value:s.token||"",required:!0,autocomplete:"current-password",placeholder:"github_pat_\u2026",spellcheck:"false"});[a,l].forEach(m=>m.addEventListener("change",()=>{let p=Ih({owner:a.value,repo:l.value});p.owner&&(a.value=p.owner),p.repo&&(l.value=p.repo)}));let f=d("input",{type:"checkbox",checked:!!s.remember}),g=d("p",{class:"err",role:"alert",hidden:!n},n||""),_=d("button",{type:"submit",class:"btn primary"},"Se connecter"),b=d("form",{onsubmit:async m=>{m.preventDefault(),g.hidden=!0,_.disabled=!0,_.textContent="Connexion\u2026";let p={owner:a.value.trim(),repo:l.value.trim(),branch:c.value.trim()||"main",root:u.value.trim(),token:h.value.trim(),remember:f.checked};try{await Nh(p)}catch(L){g.textContent="Connexion impossible : "+qs(L),g.hidden=!1,_.disabled=!1,_.textContent="Se connecter"}}},d("h2",null,"Connexion"),d("p",{class:"lead"},"Le back-office publie directement dans ton d\xE9p\xF4t GitHub. Il lui faut un jeton d\u2019acc\xE8s limit\xE9 \xE0 ce d\xE9p\xF4t."),d("details",null,d("summary",null,"Cr\xE9er le jeton (2 minutes)"),d("ol",null,d("li",null,"Ouvre ",d("a",{href:"https://github.com/settings/personal-access-tokens/new",target:"_blank",rel:"noopener"},"GitHub \u203A Fine-grained tokens \u203A Generate new token"),"."),d("li",null,"Repository access : \xAB Only select repositories \xBB, choisis le d\xE9p\xF4t du site."),d("li",null,"Permissions \u203A Repository \u203A ",d("b",null,"Contents : Read and write"),". Rien d\u2019autre."),d("li",null,"Choisis une date d\u2019expiration, g\xE9n\xE8re, et colle le jeton ci-dessous."))),g,d("div",{class:"grid2"},ct("Propri\xE9taire (compte GitHub)",a),ct("D\xE9p\xF4t",l)),ct("Jeton d\u2019acc\xE8s",h,"Il reste dans ce navigateur et ne part que vers api.github.com."),d("details",{style:{background:"#fff"}},d("summary",null,"Options avanc\xE9es"),d("div",{class:"grid2",style:{marginTop:"12px"}},ct("Branche",c),ct("Dossier du site dans le d\xE9p\xF4t",u,"Vide si le site est \xE0 la racine."))),d("label",{class:"switch",style:{margin:"4px 0 16px"}},f,"Rester connect\xE9e sur cet ordinateur"),d("div",{class:"actions"},_,ke("Essayer sans GitHub (d\xE9mo)",()=>Dh(),"ghost")),await Kv());He(Qa,d("div",{class:"login"},d("aside",{class:"side"},d("div",null,e,t,d("p",null,"Back-office du site : sections, objets 3D, contenus, tags.")),d("small",null,"Moteur 3D d\u2019apr\xE8s le site Fat-Man Collective de 2008.")),b)),(a.value&&l.value?h:a).focus()}async function Zv(n,e){try{let t=window.HC_CONTENT;if(!t){let o=await fetch(Ki+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!o.ok)return;t=await o.json()}let i=fn(structuredClone(t)).settings;Xl(i);let s=i.taglines&&(i.taglines.fr||i.taglines.en)||[];e.textContent=s[0]||i.name||"Hand Coded.",Object.assign(e.style,yh(i));let r=()=>{let o=i.logo?Ki+i.logo:ja(i.accent||"#ffcc00",i);n.src=o,xh(o)};r(),bh(i,r)}catch{}}async function Ph(){try{if(localStorage.getItem(tn+":h-reading"))return localStorage.removeItem(tn+":h-reading"),await ci("folder:handle"),null;localStorage.setItem(tn+":h-reading","1")}catch{}let n=await Ri("folder:handle").catch(()=>null);try{localStorage.removeItem(tn+":h-reading")}catch{}return n||null}async function Kv(){let n=d("div",{class:"folder-card"});if(!$i.supported())return He(n,d("h3",null,"Travailler dans le dossier du site"),d("p",null,"Ce navigateur ne sait pas \xE9crire dans un dossier de l\u2019ordinateur. Ouvre ce back-office dans Chrome ou Edge pour que \xAB Publier \xBB enregistre directement dans les fichiers du site. Sinon, utilise GitHub, ou exporte ton travail depuis Historique \u203A Sauvegardes.")),n;let e=await Ph(),t=d("p",{class:"err",role:"alert",hidden:!0}),i=async()=>{t.hidden=!0;try{let s=await window.showDirectoryPicker({id:"hand-coded-site",mode:"readwrite"});await to(s)}catch(s){if(s&&s.name==="AbortError")return;t.textContent="Ouverture impossible : "+(s.message||s),t.hidden=!1}};return He(n,d("h3",null,"Travailler dans le dossier du site"),d("p",null,"Sans GitHub : choisis le dossier du site sur ton ordinateur (celui qui contient index.html et content). \xAB Publier \xBB y \xE9crit directement les textes, images et mod\xE8les. Tu peux ensuite d\xE9placer, copier ou envoyer ce dossier : tout est dedans."),t,d("div",{class:"actions"},e?ke(`Rouvrir le dossier \xAB ${e.name} \xBB`,async()=>{t.hidden=!0;try{await to(e,!0)}catch(s){t.textContent="Ce dossier n\u2019est plus accessible (d\xE9plac\xE9 ou renomm\xE9 ?) : choisis-le \xE0 nouveau. "+(s.message||""),t.hidden=!1}},"primary"):null,ke(e?"Choisir un autre dossier\u2026":"Choisir le dossier du site\u2026",i,e?"ghost":"primary"))),n}async function to(n,e){let t=new $i(n);if(!await t.permission(!0))throw new Error("acc\xE8s refus\xE9");await t.check();let i=await t.load();await t.prepare(i);try{await Fs("folder:handle",n),localStorage.setItem(tn+":mode","folder")}catch{}R.backend=t,R.draftKey="draft:folder:"+n.name,await $l(i)}function Qv(){try{localStorage.removeItem(tn+":mode")}catch{}if(mh){location.reload();return}Hl().then(()=>{R.content=null,Ka()})}function Ih(n){let e={...n},t=/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.repo||"")||/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.owner||"");return t&&(e.owner=t[1],e.repo=t[2]),e.owner=String(e.owner||"").trim().replace(/^@/,"").replace(/\/+$/,""),e.repo=String(e.repo||"").trim().replace(/\.git$/i,"").replace(/^.*\//,""),e.branch=String(e.branch||"").trim()||"main",e.root=String(e.root||"").trim().replace(/^\/+|\/+$/g,""),e.token=String(e.token||"").trim(),e}var Ul=n=>Object.assign(new Error(n),{status:0});async function Nh(n,e){n=Ih(n);let t=new qa(n);try{await t.check()}catch(s){if(s.status===404){let r=null;try{r=await t.req("/user")}catch{}throw Ul(`GitHub ne trouve pas le d\xE9p\xF4t \xAB ${n.owner}/${n.repo} \xBB`+(r?` (le jeton appartient au compte \xAB ${r.login} \xBB)`:"")+". V\xE9rifie le propri\xE9taire et le nom du d\xE9p\xF4t, tels qu\u2019ils apparaissent dans l\u2019adresse github.com/propri\xE9taire/d\xE9p\xF4t.")}throw s}try{await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`)}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/branches?per_page=30`)).map(o=>o.name)}catch{}throw Ul(`la branche \xAB ${t.cfg.branch} \xBB n\u2019existe pas dans ${n.owner}/${n.repo}.`+(r.length?` Branches du d\xE9p\xF4t : ${r.join(", ")}.`:""))}let i;try{i=await t.load()}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/git/trees/${encodeURIComponent(t.cfg.branch)}?recursive=1`)).tree.filter(a=>a.type==="blob"&&/(^|\/)content\/content\.json$/.test(a.path)).map(a=>a.path.replace(/\/?content\/content\.json$/,""))}catch{}if(r.length===1)n.root=r[0],t.cfg.root=r[0],i=await t.load(),e||setTimeout(()=>mt(`Site trouv\xE9 dans le dossier \xAB ${r[0]||"(racine)"} \xBB du d\xE9p\xF4t : r\xE9glage corrig\xE9.`),400);else throw Ul(`pas de content/content.json dans ${n.root?"le dossier \xAB "+n.root+" \xBB":"la racine"} du d\xE9p\xF4t.`+(r.length?` Il y en a dans : ${r.map(o=>o||"(racine)").join(", ")}. Indique le bon dans Options avanc\xE9es \u203A Dossier du site.`:" Envoie d\u2019abord les fichiers du site dans le d\xE9p\xF4t."))}R.head=await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`).then(s=>s.object.sha);try{localStorage.setItem(tn,JSON.stringify({owner:n.owner,repo:n.repo,branch:n.branch,root:n.root,remember:!!n.remember,token:n.remember?n.token:void 0})),n.remember?sessionStorage.removeItem(tn+":token"):sessionStorage.setItem(tn+":token",n.token)}catch{}R.backend=t,R.cfg=n,R.draftKey=`draft:${n.owner}/${n.repo}@${t.cfg.branch}`,await $l(i)}function e_(){try{let n=JSON.parse(localStorage.getItem(tn)||"{}");delete n.token,localStorage.setItem(tn,JSON.stringify(n)),sessionStorage.removeItem(tn+":token")}catch{}location.reload()}async function Dh(){try{localStorage.removeItem(tn+":mode")}catch{}R.backend=new Xa(Ki),R.draftKey="draft:demo:v6";let n=await R.backend.load();await R.backend.prepare(n),await $l(n)}async function $l(n){R.content=n,R.base=JSON.stringify(n);try{Xl(n.settings),document.fonts&&await Promise.race([Promise.all(lh(n.settings).map(t=>document.fonts.load(t).catch(()=>{}))),new Promise(t=>setTimeout(t,2500))])}catch{}await _v(),document.documentElement.style.setProperty("--accent",R.content.settings.accent||"#ffcc00");let e=(location.hash.match(/^#\/(\w+)/)||[])[1];Ch.some(([t])=>t===e)&&(R.view=e),Cr()}document.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="s"&&R.content&&(n.preventDefault(),Vl())});window.addEventListener("beforeunload",()=>{R.content&&Hl()});(async function(){try{if(mh){await Dh();return}let e=Lh(),t="";try{t=localStorage.getItem(tn+":mode")||""}catch{}if(t==="folder"&&$i.supported()){let i=await Ph();if(i)try{if(await new $i(i).permission(!1)){await to(i,!0);return}}catch{}return Ka()}if(e.token&&e.owner&&e.repo)try{await Nh(e,!0);return}catch(i){return Ka("Reconnexion impossible : "+qs(i))}await Ka()}catch(e){console.error(e),He(Qa,d("p",{class:"boot"},"Le back-office n\u2019a pas pu d\xE9marrer : "+(e.message||e)))}})();window.__admin={S:R,publish:Vl,go:Xs,openPreview:Ys,importModelFiles:ql,startFolder:to};})();
