/* Généré depuis assets/hc/admin.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var yl="160";var Ph=0,Yl=1,Ih=2;var Iu=1,Nh=2,Zn=3,Nn=0,ln=1,An=2;var gi=0,vs=1,jl=2,Jl=3,Zl=4,Dh=5,Oi=100,Uh=101,Oh=102,Kl=103,Ql=104,Fh=200,kh=201,Bh=202,zh=203,zo=204,Ho=205,Hh=206,Vh=207,Gh=208,Wh=209,qh=210,Xh=211,$h=212,Yh=213,jh=214,Jh=0,Zh=1,Kh=2,oa=3,Qh=4,ed=5,td=6,nd=7,Ba=0,id=1,sd=2,_i=0,rd=1,ad=2,od=3,ld=4,cd=5,ud=6,ec="attached",hd="detached",Nu=300,bs=301,Ms=302,Vo=303,Go=304,za=306,yi=1e3,Qt=1001,Wo=1002,Yt=1003,tc=1004;var ro=1005;var rn=1006,dd=1007;var xi=1008;var vi=1009,fd=1010,pd=1011,xl=1012,Du=1013,mi=1014,Qn=1015,lr=1016,Uu=1017,Ou=1018,ki=1020,md=1021,xn=1023,gd=1024,_d=1025,Bi=1026,Ss=1027,vd=1028,Fu=1029,yd=1030,ku=1031,Bu=1033,ao=33776,oo=33777,lo=33778,co=33779,nc=35840,ic=35841,sc=35842,rc=35843,zu=36196,ac=37492,oc=37496,lc=37808,cc=37809,uc=37810,hc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,yc=37819,xc=37820,bc=37821,uo=36492,Mc=36494,Sc=36495,xd=36283,wc=36284,Ec=36285,Tc=36286;var la=2300,ca=2301,ho=2302,Ac=2400,Cc=2401,Rc=2402,bd=2500;var Hu=3e3,zi=3001,Md=3200,Sd=3201,bl=0,wd=1,bn="",Ut="srgb",ti="srgb-linear",Ml="display-p3",Ha="display-p3-linear",ua="linear",Lt="srgb",ha="rec709",da="p3";var Ki=7680;var Lc=519,Ed=512,Td=513,Ad=514,Vu=515,Cd=516,Rd=517,Ld=518,Pd=519,Pc=35044;var Ic="300 es",qo=1035,ei=2e3,fa=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=1234567,sr=Math.PI/180,ws=180/Math.PI;function Ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function Sl(n,e){return(n%e+e)%e}function Id(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nd(n,e,t){return n!==e?(t-n)/(e-n):0}function rr(n,e,t){return(1-t)*n+t*e}function Dd(n,e,t,i){return rr(n,e,1-Math.exp(-t*i))}function Ud(n,e=1){return e-Math.abs(Sl(n,e*2)-e)}function Od(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bd(n,e){return n+Math.random()*(e-n)}function zd(n){return n*(.5-Math.random())}function Hd(n){n!==void 0&&(Nc=n);let e=Nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vd(n){return n*sr}function Gd(n){return n*ws}function Xo(n){return(n&n-1)===0&&n!==0}function Wd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qd(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Is={DEG2RAD:sr,RAD2DEG:ws,generateUUID:Ei,clamp:an,euclideanModulo:Sl,mapLinear:Id,inverseLerp:Nd,lerp:rr,damp:Dd,pingpong:Ud,smoothstep:Od,smootherstep:Fd,randInt:kd,randFloat:Bd,randFloatSpread:zd,seededRandom:Hd,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Xo,ceilPowerOfTwo:Wd,floorPowerOfTwo:pa,setQuaternionFromProperEuler:qd,normalize:nn,denormalize:ps},ht=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],_=i[8],v=s[0],f=s[3],p=s[6],C=s[1],b=s[4],I=s[7],U=s[2],A=s[5],D=s[8];return r[0]=o*v+a*C+l*U,r[3]=o*f+a*b+l*A,r[6]=o*p+a*I+l*D,r[1]=c*v+u*C+h*U,r[4]=c*f+u*b+h*A,r[7]=c*p+u*I+h*D,r[2]=d*v+m*C+_*U,r[5]=d*f+m*b+_*A,r[8]=d*p+m*I+_*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,_=t*h+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fo=new lt;function Gu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xd(){let n=cr("canvas");return n.style.display="block",n}var Dc={};function ar(n){n in Dc||(Dc[n]=!0,console.warn(n))}var Uc=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oc=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[ti]:{transfer:ua,primaries:ha,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:Lt,primaries:ha,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:ua,primaries:da,toReference:n=>n.applyMatrix3(Oc),fromReference:n=>n.applyMatrix3(Uc)},[Ml]:{transfer:Lt,primaries:da,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Oc),fromReference:n=>n.applyMatrix3(Uc).convertLinearToSRGB()}},$d=new Set([ti,Ha]),St={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$d.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Or[e].toReference,s=Or[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Or[n].primaries},getTransfer:function(n){return n===bn?ua:Or[n].transfer}};function ys(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qi,ma=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=cr("canvas")),Qi.width=e.width,Qi.height=e.height;let i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ys(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ys(t[i]/255)*255):t[i]=ys(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yd=0,ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ma.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jd=0,pn=class n extends bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qt,s=Qt,r=rn,o=xi,a=xn,l=vi,c=n.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ei(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===zi?Ut:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?zi:Hu}set encoding(e){ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zi?Ut:bn}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Nu;pn.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,I=(m+1)/2,U=(p+1)/2,A=(u+d)/4,D=(h+v)/4,q=(_+f)/4;return b>I&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=D/i):I>U?I<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),i=A/s,r=q/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=D/r,s=q/r),this.set(i,s,r,t),this}let C=Math.sqrt((f-_)*(f-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(f-_)/C,this.y=(h-v)/C,this.z=(d-u)/C,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zi?Ut:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends $o{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yo=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==d||c!==m||u!==_){let f=1-a,p=l*d+c*m+u*_+h*v,C=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let U=Math.sqrt(b),A=Math.atan2(U,p*C);f=Math.sin(f*A)/U,a=Math.sin(a*A)/U}let I=a*C;if(l=l*f+d*I,c=c*f+m*I,u=u*f+_*I,h=h*f+v*I,f===1-a){let U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-a*m,e[t+2]=c*_+u*m+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new z,Fc=new Dn,mn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),kr.subVectors(this.max,Qs),es.subVectors(e.a,Qs),ts.subVectors(e.b,Qs),ns.subVectors(e.c,Qs),ui.subVectors(ts,es),hi.subVectors(ns,ts),Pi.subVectors(es,ns);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Pi.z,Pi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Pi.z,0,-Pi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Pi.y,Pi.x,0];return!_o(t,es,ts,ns,kr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,es,ts,ns,kr))?!1:(Br.crossVectors(ui,hi),t=[Br.x,Br.y,Br.z],_o(t,es,ts,ns,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new z,new z,new z,new z,new z,new z,new z,new z],wn=new z,Fr=new mn,es=new z,ts=new z,ns=new z,ui=new z,hi=new z,Pi=new z,Qs=new z,kr=new z,Br=new z,Ii=new z;function _o(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Jd=new mn,er=new z,vo=new z,Mi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(vo)),this.expandByPoint(er.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new z,yo=new z,zr=new z,di=new z,xo=new z,Hr=new z,bo=new z,ur=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yo.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(yo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=di.dot(this.direction),l=-di.dot(zr),c=di.lengthSq(),u=Math.abs(1-o*o),h,d,m,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){let v=1/u;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yo).addScaledVector(zr,d),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,s,r){xo.subVectors(t,e),Hr.subVectors(i,e),bo.crossVectors(xo,Hr);let o=this.direction.dot(bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);let l=a*this.direction.dot(Hr.crossVectors(di,Hr));if(l<0)return null;let c=a*this.direction.dot(xo.cross(di));if(c<0||l+c>o)return null;let u=-a*di.dot(bo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,d,m,_,v,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,v,f)}set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,v,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,_=c*u,v=c*h;t[0]=d+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,_=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zd,e,Kd)}lookAt(e,t,i){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),fi.crossVectors(i,un),fi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),fi.crossVectors(i,un)),fi.normalize(),Vr.crossVectors(un,fi),s[0]=fi.x,s[4]=Vr.x,s[8]=un.x,s[1]=fi.y,s[5]=Vr.y,s[9]=un.y,s[2]=fi.z,s[6]=Vr.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],_=i[2],v=i[6],f=i[10],p=i[14],C=i[3],b=i[7],I=i[11],U=i[15],A=s[0],D=s[4],q=s[8],S=s[12],N=s[1],ee=s[5],le=s[9],H=s[13],O=s[2],F=s[6],k=s[10],W=s[14],$=s[3],X=s[7],re=s[11],ne=s[15];return r[0]=o*A+a*N+l*O+c*$,r[4]=o*D+a*ee+l*F+c*X,r[8]=o*q+a*le+l*k+c*re,r[12]=o*S+a*H+l*W+c*ne,r[1]=u*A+h*N+d*O+m*$,r[5]=u*D+h*ee+d*F+m*X,r[9]=u*q+h*le+d*k+m*re,r[13]=u*S+h*H+d*W+m*ne,r[2]=_*A+v*N+f*O+p*$,r[6]=_*D+v*ee+f*F+p*X,r[10]=_*q+v*le+f*k+p*re,r[14]=_*S+v*H+f*W+p*ne,r[3]=C*A+b*N+I*O+U*$,r[7]=C*D+b*ee+I*F+U*X,r[11]=C*q+b*le+I*k+U*re,r[15]=C*S+b*H+I*W+U*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],v=e[7],f=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+v*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+f*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],v=e[13],f=e[14],p=e[15],C=h*f*c-v*d*c+v*l*m-a*f*m-h*l*p+a*d*p,b=_*d*c-u*f*c-_*l*m+o*f*m+u*l*p-o*d*p,I=u*v*c-_*h*c+_*a*m-o*v*m-u*a*p+o*h*p,U=_*h*l-u*v*l-_*a*d+o*v*d+u*a*f-o*h*f,A=t*C+i*b+s*I+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=C*D,e[1]=(v*d*r-h*f*r-v*s*m+i*f*m+h*s*p-i*d*p)*D,e[2]=(a*f*r-v*l*r+v*s*c-i*f*c-a*s*p+i*l*p)*D,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*D,e[4]=b*D,e[5]=(u*f*r-_*d*r+_*s*m-t*f*m-u*s*p+t*d*p)*D,e[6]=(_*l*r-o*f*r-_*s*c+t*f*c+o*s*p-t*l*p)*D,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*D,e[8]=I*D,e[9]=(_*h*r-u*v*r-_*i*m+t*v*m+u*i*p-t*h*p)*D,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*p+t*a*p)*D,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*D,e[12]=U*D,e[13]=(u*v*s-_*h*s+_*i*d-t*v*d-u*i*f+t*h*f)*D,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*f-t*a*f)*D,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,_=r*h,v=o*u,f=o*h,p=a*h,C=l*c,b=l*u,I=l*h,U=i.x,A=i.y,D=i.z;return s[0]=(1-(v+p))*U,s[1]=(m+I)*U,s[2]=(_-b)*U,s[3]=0,s[4]=(m-I)*A,s[5]=(1-(d+p))*A,s[6]=(f+C)*A,s[7]=0,s[8]=(_+b)*D,s[9]=(f-C)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let c=1/r,u=1/o,h=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ei){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),m,_;if(a===ei)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===fa)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,m=(i+s)*u,_,v;if(a===ei)_=(o+r)*h,v=-2*h;else if(a===fa)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},is=new z,En=new ot,Zd=new z(0,0,0),Kd=new z(1,1,1),fi=new z,Vr=new z,un=new z,kc=new ot,Bc=new Dn,va=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qd=0,zc=new z,ss=new Dn,$n=new ot,Gr=new z,tr=new z,ef=new z,tf=new Dn,Hc=new z(1,0,0),Vc=new z(0,1,0),Gc=new z(0,0,1),nf={type:"added"},sf={type:"removed"},zt=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new va,i=new Dn,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new lt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(tr,Gr,this.up):$n.lookAt(Gr,tr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ss.setFromRotationMatrix($n),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new z,Yn=new z,Mo=new z,jn=new z,rs=new z,as=new z,Wc=new z,So=new z,wo=new z,Eo=new z,Wr=!1,ms=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Tn.subVectors(s,t),Yn.subVectors(i,t),Mo.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot(Yn),l=Tn.dot(Mo),c=Yn.dot(Yn),u=Yn.dot(Mo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,i,s,r,o,a,l){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static isFrontFacing(e,t,i,s){return Tn.subVectors(i,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,i),as.subVectors(r,i),So.subVectors(e,i);let l=rs.dot(So),c=as.dot(So);if(l<=0&&c<=0)return t.copy(i);wo.subVectors(e,s);let u=rs.dot(wo),h=as.dot(wo);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(rs,o);Eo.subVectors(e,r);let m=rs.dot(Eo),_=as.dot(Eo);if(_>=0&&m<=_)return t.copy(r);let v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(as,a);let f=u*_-m*h;if(f<=0&&h-u>=0&&m-_>=0)return Wc.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(Wc,a);let p=1/(f+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(rs,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function To(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=Sl(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=To(o,r,e+1/3),this.g=To(o,r,e),this.b=To(o,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=Wu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return St.fromWorkingColorSpace(Kt.copy(this),e),Math.round(an(Kt.r*255,0,255))*65536+Math.round(an(Kt.g*255,0,255))*256+Math.round(an(Kt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Ut){St.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,s=Kt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(qr);let i=rr(pi.h,qr.h,t),s=rr(pi.s,qr.s,t),r=rr(pi.l,qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new it;it.NAMES=Wu;var rf=0,ii=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=vs,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Ho,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Ho&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new z,Xr=new ht,Mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pc&&(e.usage=this.usage),e}};var xa=class extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ba=class extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Bt=class extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var af=0,yn=new ot,Ao=new zt,os=new z,hn=new mn,nr=new mn,qt=new z,On=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?ba:xa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(hn.min,nr.min),hn.expandByPoint(qt),qt.addVectors(hn.max,nr.max),hn.expandByPoint(qt)):(hn.expandByPoint(nr.min),hn.expandByPoint(nr.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),qt.add(os)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new z,u[N]=new z;let h=new z,d=new z,m=new z,_=new ht,v=new ht,f=new ht,p=new z,C=new z;function b(N,ee,le){h.fromArray(s,N*3),d.fromArray(s,ee*3),m.fromArray(s,le*3),_.fromArray(o,N*2),v.fromArray(o,ee*2),f.fromArray(o,le*2),d.sub(h),m.sub(h),v.sub(_),f.sub(_);let H=1/(v.x*f.y-f.x*v.y);isFinite(H)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(H),C.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(H),c[N].add(p),c[ee].add(p),c[le].add(p),u[N].add(C),u[ee].add(C),u[le].add(C))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let N=0,ee=I.length;N<ee;++N){let le=I[N],H=le.start,O=le.count;for(let F=H,k=H+O;F<k;F+=3)b(i[F+0],i[F+1],i[F+2])}let U=new z,A=new z,D=new z,q=new z;function S(N){D.fromArray(r,N*3),q.copy(D);let ee=c[N];U.copy(ee),U.sub(D.multiplyScalar(D.dot(ee))).normalize(),A.crossVectors(q,ee);let H=A.dot(u[N])<0?-1:1;l[N*4]=U.x,l[N*4+1]=U.y,l[N*4+2]=U.z,l[N*4+3]=H}for(let N=0,ee=I.length;N<ee;++N){let le=I[N],H=le.start,O=le.count;for(let F=H,k=H+O;F<k;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){let _=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,_=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let p=0;p<u;p++)d[_++]=c[m++]}return new Mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new ot,Ni=new ur,$r=new Mi,Xc=new z,ls=new z,cs=new z,us=new z,Co=new z,Yr=new z,jr=new ht,Jr=new ht,Zr=new ht,$c=new z,Yc=new z,jc=new z,Kr=new z,Qr=new z,dn=class extends zt{constructor(e=new On,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Co.fromBufferAttribute(h,e),o?Yr.addScaledVector(Co,u):Yr.addScaledVector(Co.sub(t),u))}t.add(Yr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!($r.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere($r,Xc)===null||Ni.origin.distanceToSquared(Xc)>(e.far-e.near)**2))&&(qc.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(qc),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let f=d[_],p=o[f.materialIndex],C=Math.max(f.start,m.start),b=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let I=C,U=b;I<U;I+=3){let A=a.getX(I),D=a.getX(I+1),q=a.getX(I+2);s=ea(this,p,e,i,c,u,h,A,D,q),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){let C=a.getX(f),b=a.getX(f+1),I=a.getX(f+2);s=ea(this,o,e,i,c,u,h,C,b,I),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let f=d[_],p=o[f.materialIndex],C=Math.max(f.start,m.start),b=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let I=C,U=b;I<U;I+=3){let A=I,D=I+1,q=I+2;s=ea(this,p,e,i,c,u,h,A,D,q),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,p=v;f<p;f+=3){let C=f,b=f+1,I=f+2;s=ea(this,o,e,i,c,u,h,C,b,I),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function of(n,e,t,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Nn,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:n}}function ea(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ls),n.getVertexPosition(l,cs),n.getVertexPosition(c,us);let u=of(n,e,t,i,ls,cs,us,Kr);if(u){s&&(jr.fromBufferAttribute(s,a),Jr.fromBufferAttribute(s,l),Zr.fromBufferAttribute(s,c),u.uv=ms.getInterpolation(Kr,ls,cs,us,jr,Jr,Zr,new ht)),r&&(jr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,l),Zr.fromBufferAttribute(r,c),u.uv1=ms.getInterpolation(Kr,ls,cs,us,jr,Jr,Zr,new ht),u.uv2=u.uv1),o&&($c.fromBufferAttribute(o,a),Yc.fromBufferAttribute(o,l),jc.fromBufferAttribute(o,c),u.normal=ms.getInterpolation(Kr,ls,cs,us,$c,Yc,jc,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};ms.getNormal(ls,cs,us,h.normal),u.face=h}return u}var hr=class n extends On{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function _(v,f,p,C,b,I,U,A,D,q,S){let N=I/D,ee=U/q,le=I/2,H=U/2,O=A/2,F=D+1,k=q+1,W=0,$=0,X=new z;for(let re=0;re<k;re++){let ne=re*ee-H;for(let ce=0;ce<F;ce++){let V=ce*N-le;X[v]=V*C,X[f]=ne*b,X[p]=O,c.push(X.x,X.y,X.z),X[v]=0,X[f]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(ce/D),h.push(1-re/q),W+=1}}for(let re=0;re<q;re++)for(let ne=0;ne<D;ne++){let ce=d+ne+F*re,V=d+ne+F*(re+1),J=d+(ne+1)+F*(re+1),se=d+(ne+1)+F*re;l.push(ce,V,se),l.push(V,J,se),$+=6}a.addGroup(m,$,S),m+=$,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=Es(n[t]);for(let s in i)e[s]=i[s]}return e}function lf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qu(n){return n.getRenderTarget()===null?n.outputColorSpace:St.workingColorSpace}var cf={clone:Es,merge:sn},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ma=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends Ma{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hs=-90,ds=1,jo=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(hs,ds,e,t);s.layers=this.layers,this.add(s);let r=new kt(hs,ds,e,t);r.layers=this.layers,this.add(r);let o=new kt(hs,ds,e,t);o.layers=this.layers,this.add(o);let a=new kt(hs,ds,e,t);a.layers=this.layers,this.add(a);let l=new kt(hs,ds,e,t);l.layers=this.layers,this.add(l);let c=new kt(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Sa=class extends pn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jo=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zi?Ut:bn),this.texture=new Sa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hr(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:gi});r.uniforms.tEquirect.value=t;let o=new dn(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=rn),new jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ro=new z,df=new z,ff=new lt,Kn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ro.subVectors(i,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ro),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ff.getNormalMatrix(e),s=this.coplanarPoint(Ro).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new Mi,ta=new z,dr=class{constructor(e=new Kn,t=new Kn,i=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],v=s[10],f=s[11],p=s[12],C=s[13],b=s[14],I=s[15];if(i[0].setComponents(l-r,d-c,f-m,I-p).normalize(),i[1].setComponents(l+r,d+c,f+m,I+p).normalize(),i[2].setComponents(l+o,d+u,f+_,I+C).normalize(),i[3].setComponents(l-o,d-u,f-_,I-C).normalize(),i[4].setComponents(l-a,d-h,f-v,I-b).normalize(),t===ei)i[5].setComponents(l+a,d+h,f+v,I+b).normalize();else if(t===fa)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pf(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let h=c.array,d=c.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){let d=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&_.length===0&&n.bufferSubData(h,0,d),_.length!==0){for(let v=0,f=_.length;v<f;v++){let p=_[v];t?n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var Zo=class n extends On{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,m=[],_=[],v=[],f=[];for(let p=0;p<u;p++){let C=p*d-o;for(let b=0;b<c;b++){let I=b*h-r;_.push(I,-C,0),v.push(0,0,1),f.push(b/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let b=C+c*p,I=C+c*(p+1),U=C+1+c*(p+1),A=C+1+c*p;m.push(b,I,A),m.push(I,U,A)}this.setIndex(m),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`
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
}`,$f=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:vf,alphatest_fragment:yf,alphatest_pars_fragment:xf,aomap_fragment:bf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:wf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Cf,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Nf,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Of,color_vertex:Ff,common:kf,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Wf,colorspace_fragment:qf,colorspace_pars_fragment:Xf,envmap_fragment:$f,envmap_common_pars_fragment:Yf,envmap_pars_fragment:jf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:lp,envmap_vertex:Zf,fog_vertex:Kf,fog_pars_vertex:Qf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:up,lights_phong_fragment:hp,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:bp,map_fragment:Mp,map_pars_fragment:Sp,map_particle_fragment:wp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ap,morphcolor_vertex:Cp,morphnormal_vertex:Rp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Pp,normal_fragment_begin:Ip,normal_fragment_maps:Np,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Op,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Hp,opaque_fragment:Vp,packing:Gp,premultiplied_alpha_fragment:Wp,project_vertex:qp,dithering_fragment:Xp,dithering_pars_fragment:$p,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Zp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Qp,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:um,uv_pars_vertex:hm,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:vm,cube_frag:ym,depth_vert:xm,depth_frag:bm,distanceRGBA_vert:Mm,distanceRGBA_frag:Sm,equirect_vert:wm,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Cm,meshbasic_frag:Rm,meshlambert_vert:Lm,meshlambert_frag:Pm,meshmatcap_vert:Im,meshmatcap_frag:Nm,meshnormal_vert:Dm,meshnormal_frag:Um,meshphong_vert:Om,meshphong_frag:Fm,meshphysical_vert:km,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:Hm,points_vert:Vm,points_frag:Gm,shadow_vert:Wm,shadow_frag:qm,sprite_vert:Xm,sprite_frag:$m},_e={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},In={basic:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:sn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:sn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:sn([_e.points,_e.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:sn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:sn([_e.common,_e.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:sn([_e.sprite,_e.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:sn([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:sn([_e.lights,_e.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};In.physical={uniforms:sn([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var na={r:0,b:0,g:0};function Ym(n,e,t,i,s,r,o){let a=new it(0),l=r===!0?0:1,c,u,h=null,d=0,m=null;function _(f,p){let C=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,l):b&&b.isColor&&(v(b,1),C=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===za)?(u===void 0&&(u=new dn(new hr(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Es(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=St.getTransfer(b.colorSpace)!==Lt,(h!==b||d!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,m=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new dn(new Zo(2,2),new si({name:"BackgroundMaterial",uniforms:Es(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=St.getTransfer(b.colorSpace)!==Lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(na,qu(n)),i.buffers.color.setClear(na.r,na.g,na.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:_}}function jm(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null),c=l,u=!1;function h(O,F,k,W,$){let X=!1;if(o){let re=v(W,k,F);c!==re&&(c=re,m(c.object)),X=p(O,W,k,$),X&&C(O,W,k,$)}else{let re=F.wireframe===!0;(c.geometry!==W.id||c.program!==k.id||c.wireframe!==re)&&(c.geometry=W.id,c.program=k.id,c.wireframe=re,X=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,q(O,F,k,W),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function v(O,F,k){let W=k.wireframe===!0,$=a[O.id];$===void 0&&($={},a[O.id]=$);let X=$[F.id];X===void 0&&(X={},$[F.id]=X);let re=X[W];return re===void 0&&(re=f(d()),X[W]=re),re}function f(O){let F=[],k=[],W=[];for(let $=0;$<s;$++)F[$]=0,k[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:W,object:O,attributes:{},index:null}}function p(O,F,k,W){let $=c.attributes,X=F.attributes,re=0,ne=k.getAttributes();for(let ce in ne)if(ne[ce].location>=0){let J=$[ce],se=X[ce];if(se===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;re++}return c.attributesNum!==re||c.index!==W}function C(O,F,k,W){let $={},X=F.attributes,re=0,ne=k.getAttributes();for(let ce in ne)if(ne[ce].location>=0){let J=X[ce];J===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));let se={};se.attribute=J,J&&J.data&&(se.data=J.data),$[ce]=se,re++}c.attributes=$,c.attributesNum=re,c.index=W}function b(){let O=c.newAttributes;for(let F=0,k=O.length;F<k;F++)O[F]=0}function I(O){U(O,0)}function U(O,F){let k=c.newAttributes,W=c.enabledAttributes,$=c.attributeDivisors;k[O]=1,W[O]===0&&(n.enableVertexAttribArray(O),W[O]=1),$[O]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),$[O]=F)}function A(){let O=c.newAttributes,F=c.enabledAttributes;for(let k=0,W=F.length;k<W;k++)F[k]!==O[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function D(O,F,k,W,$,X,re){re===!0?n.vertexAttribIPointer(O,F,k,$,X):n.vertexAttribPointer(O,F,k,W,$,X)}function q(O,F,k,W){if(i.isWebGL2===!1&&(O.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let $=W.attributes,X=k.getAttributes(),re=F.defaultAttributeValues;for(let ne in X){let ce=X[ne];if(ce.location>=0){let V=$[ne];if(V===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let J=V.normalized,se=V.itemSize,ae=t.get(V);if(ae===void 0)continue;let oe=ae.buffer,we=ae.type,Oe=ae.bytesPerElement,Fe=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||V.gpuType===Du);if(V.isInterleavedBufferAttribute){let ut=V.data,Y=ut.stride,Xt=V.offset;if(ut.isInstancedInterleavedBuffer){for(let He=0;He<ce.locationSize;He++)U(ce.location+He,ut.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let He=0;He<ce.locationSize;He++)I(ce.location+He);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let He=0;He<ce.locationSize;He++)D(ce.location+He,se/ce.locationSize,we,J,Y*Oe,(Xt+se/ce.locationSize*He)*Oe,Fe)}else{if(V.isInstancedBufferAttribute){for(let ut=0;ut<ce.locationSize;ut++)U(ce.location+ut,V.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ut=0;ut<ce.locationSize;ut++)I(ce.location+ut);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ut=0;ut<ce.locationSize;ut++)D(ce.location+ut,se/ce.locationSize,we,J,se*Oe,se/ce.locationSize*ut*Oe,Fe)}}else if(re!==void 0){let J=re[ne];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(ce.location,J);break;case 3:n.vertexAttrib3fv(ce.location,J);break;case 4:n.vertexAttrib4fv(ce.location,J);break;default:n.vertexAttrib1fv(ce.location,J)}}}}A()}function S(){le();for(let O in a){let F=a[O];for(let k in F){let W=F[k];for(let $ in W)_(W[$].object),delete W[$];delete F[k]}delete a[O]}}function N(O){if(a[O.id]===void 0)return;let F=a[O.id];for(let k in F){let W=F[k];for(let $ in W)_(W[$].object),delete W[$];delete F[k]}delete a[O.id]}function ee(O){for(let F in a){let k=a[F];if(k[O.id]===void 0)continue;let W=k[O.id];for(let $ in W)_(W[$].object),delete W[$];delete k[O.id]}}function le(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:le,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:N,releaseStatesOfProgram:ee,initAttributes:b,enableAttribute:I,disableUnusedAttributes:A}}function Jm(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Zm(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,I=o||e.has("OES_texture_float"),U=b&&I,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:C,vertexTextures:b,floatFragmentTextures:I,floatVertexTextures:U,maxSamples:A}}function Km(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Kn,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let _=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{let C=r?0:i,b=C*4,I=p.clippingState||null;l.value=I,I=u(_,d,b,m);for(let U=0;U!==b;++U)I[U]=t[U];p.clippingState=I,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,_){let v=h!==null?h.length:0,f=null;if(v!==0){if(f=l.value,_!==!0||f===null){let p=m+v*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(f===null||f.length<p)&&(f=new Float32Array(p));for(let b=0,I=m;b!==v;++b,I+=4)o.copy(h[b]).applyMatrix4(C,a),o.normal.toArray(f,I),f[I+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Qm(n){let e=new WeakMap;function t(o,a){return a===Vo?o.mapping=bs:a===Go&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vo||a===Go)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Jo(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ts=class extends Ma{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gs=4,Jc=[.125,.215,.35,.446,.526,.582],Fi=20,Lo=new Ts,Zc=new it,Po=null,Io=0,No=0,Ui=(1+Math.sqrt(5))/2,fs=1/Ui,Kc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ui,fs),new z(0,Ui,-fs),new z(fs,0,Ui),new z(-fs,0,Ui),new z(Ui,fs,0),new z(-Ui,fs,0)],wa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Io,No),e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:lr,format:xn,colorSpace:ti,depthBuffer:!1},s=Qc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=tg(r,e,t)}return s}_compileMaterial(e){let t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,s){let a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zc),u.toneMapping=_i,u.autoClear=!1;let m=new Un({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new dn(new hr,m),v=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(Zc),v=!0);for(let p=0;p<6;p++){let C=p%3;C===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):C===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;ia(s,C*b,p>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===bs||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kc[(s-1)%Kc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new dn(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),v=r/_,f=isFinite(r)?1+Math.floor(u*v):Fi;f>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Fi}`);let p=[],C=0;for(let D=0;D<Fi;++D){let q=D/v,S=Math.exp(-q*q/2);p.push(S),D===0?C+=S:D<f&&(C+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/C;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;let I=this._sizeLods[s],U=3*I*(s>b-gs?s-b+gs:0),A=4*(this._cubeSize-I);ia(t,U,A,3*I,2*I),l.setRenderTarget(t),l.render(h,Lo)}};function eg(n){let e=[],t=[],i=[],s=n,r=n-gs+1+Jc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-gs?l=Jc[o-n+gs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,f=2,p=1,C=new Float32Array(v*_*m),b=new Float32Array(f*_*m),I=new Float32Array(p*_*m);for(let A=0;A<m;A++){let D=A%3*2/3-1,q=A>2?0:-1,S=[D,q,0,D+2/3,q,0,D+2/3,q+1,0,D,q,0,D+2/3,q+1,0,D,q+1,0];C.set(S,v*_*A),b.set(d,f*_*A);let N=[A,A,A,A,A,A];I.set(N,p*_*A)}let U=new On;U.setAttribute("position",new Mn(C,v)),U.setAttribute("uv",new Mn(b,f)),U.setAttribute("faceIndex",new Mn(I,p)),e.push(U),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qc(n,e,t){let i=new ni(n,e,t);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tg(n,e,t){let i=new Float32Array(Fi),s=new z(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function eu(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function tu(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function ng(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Vo||l===Go,u=l===bs||l===Ms;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new wa(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new wa(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ig(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sg(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let v=d.morphAttributes[_];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let _ in d)e.update(d[_],n.ARRAY_BUFFER);let m=h.morphAttributes;for(let _ in m){let v=m[_];for(let f=0,p=v.length;f<p;f++)e.update(v[f],n.ARRAY_BUFFER)}}function c(h){let d=[],m=h.index,_=h.attributes.position,v=0;if(m!==null){let C=m.array;v=m.version;for(let b=0,I=C.length;b<I;b+=3){let U=C[b+0],A=C[b+1],D=C[b+2];d.push(U,A,A,D,D,U)}}else if(_!==void 0){let C=_.array;v=_.version;for(let b=0,I=C.length/3-1;b<I;b+=3){let U=b+0,A=b+1,D=b+2;d.push(U,A,A,D,D,U)}}else return;let f=new(Gu(d)?ba:xa)(d,1);f.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,f)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rg(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function h(m,_,v){if(v===0)return;let f,p;if(s)f=n,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,_,a,m*l,v),t.update(_,r,v)}function d(m,_,v){if(v===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,_[p]);else{f.multiDrawElementsWEBGL(r,_,0,a,m,0,v);let p=0;for(let C=0;C<v;C++)p+=_[C];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function ag(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function og(n,e){return n[0]-e[0]}function lg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function cg(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0,v=r.get(u);if(v===void 0||v.count!==_){let O=function(){le.dispose(),r.delete(u),u.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();let C=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],D=u.morphAttributes.color||[],q=0;C===!0&&(q=1),b===!0&&(q=2),I===!0&&(q=3);let S=u.attributes.position.count*q,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let ee=new Float32Array(S*N*4*_),le=new _a(ee,S,N,_);le.type=Qn,le.needsUpdate=!0;let H=q*4;for(let F=0;F<_;F++){let k=U[F],W=A[F],$=D[F],X=S*N*4*F;for(let re=0;re<k.count;re++){let ne=re*H;C===!0&&(o.fromBufferAttribute(k,re),ee[X+ne+0]=o.x,ee[X+ne+1]=o.y,ee[X+ne+2]=o.z,ee[X+ne+3]=0),b===!0&&(o.fromBufferAttribute(W,re),ee[X+ne+4]=o.x,ee[X+ne+5]=o.y,ee[X+ne+6]=o.z,ee[X+ne+7]=0),I===!0&&(o.fromBufferAttribute($,re),ee[X+ne+8]=o.x,ee[X+ne+9]=o.y,ee[X+ne+10]=o.z,ee[X+ne+11]=$.itemSize===4?o.w:1)}}v={count:_,texture:le,size:new ht(S,N)},r.set(u,v),u.addEventListener("dispose",O)}let f=0;for(let C=0;C<d.length;C++)f+=d[C];let p=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let m=d===void 0?0:d.length,_=i[u.id];if(_===void 0||_.length!==m){_=[];for(let b=0;b<m;b++)_[b]=[b,0];i[u.id]=_}for(let b=0;b<m;b++){let I=_[b];I[0]=b,I[1]=d[b]}_.sort(lg);for(let b=0;b<8;b++)b<m&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(og);let v=u.morphAttributes.position,f=u.morphAttributes.normal,p=0;for(let b=0;b<8;b++){let I=a[b],U=I[0],A=I[1];U!==Number.MAX_SAFE_INTEGER&&A?(v&&u.getAttribute("morphTarget"+b)!==v[U]&&u.setAttribute("morphTarget"+b,v[U]),f&&u.getAttribute("morphNormal"+b)!==f[U]&&u.setAttribute("morphNormal"+b,f[U]),s[b]=A,p+=A):(v&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),f&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}let C=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",C),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function ug(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ea=class extends pn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Bi,u!==Bi&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Bi&&(i=mi),i===void 0&&u===Ss&&(i=ki),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$u=new pn,Yu=new Ea(1,1);Yu.compareFunction=Vu;var ju=new _a,Ju=new Yo,Zu=new Sa,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),au=new Float32Array(4);function Ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=nu[s];if(r===void 0&&(r=new Float32Array(s),nu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Va(n,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function pg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function mg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),Vt(t,i)}}function gg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ru.set(i),n.uniformMatrix3fv(this.addr,!1,ru),Vt(t,i)}}function _g(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;su.set(i),n.uniformMatrix4fv(this.addr,!1,su),Vt(t,i)}}function vg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function bg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Mg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Eg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Tg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Yu:$u;t.setTexture2D(e||r,s)}function Ag(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ju,s)}function Cg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zu,s)}function Rg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ju,s)}function Lg(n){switch(n){case 5126:return hg;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return xg;case 35669:case 35673:return bg;case 5125:return Mg;case 36294:return Sg;case 36295:return wg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(n,e){n.uniform1fv(this.addr,e)}function Ig(n,e){let t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function Ng(n,e){let t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){let t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function Ug(n,e){let t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Og(n,e){let t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fg(n,e){let t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kg(n,e){n.uniform1iv(this.addr,e)}function Bg(n,e){n.uniform2iv(this.addr,e)}function zg(n,e){n.uniform3iv(this.addr,e)}function Hg(n,e){n.uniform4iv(this.addr,e)}function Vg(n,e){n.uniform1uiv(this.addr,e)}function Gg(n,e){n.uniform2uiv(this.addr,e)}function Wg(n,e){n.uniform3uiv(this.addr,e)}function qg(n,e){n.uniform4uiv(this.addr,e)}function Xg(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$u,r[o])}function $g(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ju,r[o])}function Yg(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zu,r[o])}function jg(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ju,r[o])}function Jg(n){switch(n){case 5126:return Pg;case 35664:return Ig;case 35665:return Ng;case 35666:return Dg;case 35674:return Ug;case 35675:return Og;case 35676:return Fg;case 5124:case 35670:return kg;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return jg}}var Ko=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lg(t.type)}},Qo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}},el=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Do=/(\w+)(\])?(\[|\.)?/g;function ou(n,e){n.seq.push(e),n.map[e.id]=e}function Zg(n,e,t){let i=n.name,s=i.length;for(Do.lastIndex=0;;){let r=Do.exec(i),o=Do.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ou(t,c===void 0?new Ko(a,n,e):new Qo(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new el(a),ou(t,h)),t=h}}}var xs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Zg(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function lu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Kg=37297,Qg=0;function e0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function t0(n){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(n),i;switch(e===t?i="":e===da&&t===ha?i="LinearDisplayP3ToLinearSRGB":e===ha&&t===da&&(i="LinearSRGBToLinearDisplayP3"),n){case ti:case Ha:return[i,"LinearTransferOETF"];case Ut:case Ml:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+e0(n.getShaderSource(e),o)}else return s}function n0(n,e){let t=t0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function i0(n,e){let t;switch(e){case rd:t="Linear";break;case ad:t="Reinhard";break;case od:t="OptimizedCineon";break;case ld:t="ACESFilmic";break;case ud:t="AgX";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function r0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_s).join(`
`)}function a0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _s(n){return n!==""}function uu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(n){return n.replace(l0,u0)}var c0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function u0(n,e){let t=rt[e];if(t===void 0){let i=c0.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}var h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(n){return n.replace(h0,d0)}function d0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function p0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case Ms:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function g0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ba:e="ENVMAP_BLENDING_MULTIPLY";break;case id:e="ENVMAP_BLENDING_MIX";break;case sd:e="ENVMAP_BLENDING_ADD";break}return e}function _0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function v0(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=f0(t),c=p0(t),u=m0(t),h=g0(t),d=_0(t),m=t.isWebGL2?"":s0(t),_=r0(t),v=a0(r),f=s.createProgram(),p,C,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_s).join(`
`),p.length>0&&(p+=`
`),C=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_s).join(`
`),C.length>0&&(C+=`
`)):(p=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),C=[m,fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?rt.tonemapping_pars_fragment:"",t.toneMapping!==_i?i0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,n0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),o=tl(o),o=uu(o,t),o=hu(o,t),a=tl(a),a=uu(a,t),a=hu(a,t),o=du(o),a=du(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let I=b+p+o,U=b+C+a,A=lu(s,s.VERTEX_SHADER,I),D=lu(s,s.FRAGMENT_SHADER,U);s.attachShader(f,A),s.attachShader(f,D),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function q(le){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(f).trim(),O=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(D).trim(),k=!0,W=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,A,D);else{let $=cu(s,A,"vertex"),X=cu(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+$+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||F==="")&&(W=!1);W&&(le.diagnostics={runnable:k,programLog:H,vertexShader:{log:O,prefix:p},fragmentShader:{log:F,prefix:C}})}s.deleteShader(A),s.deleteShader(D),S=new xs(s,f),N=o0(s,f)}let S;this.getUniforms=function(){return S===void 0&&q(this),S};let N;this.getAttributes=function(){return N===void 0&&q(this),N};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=s.getProgramParameter(f,Kg)),ee},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=D,this}var y0=0,nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new il(e),t.set(e,i)),i}},il=class{constructor(e){this.id=y0++,this.code=e,this.usedTimes=0}};function x0(n,e,t,i,s,r,o){let a=new ya,l=new nl,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function f(S,N,ee,le,H){let O=le.fog,F=H.geometry,k=S.isMeshStandardMaterial?le.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),$=W&&W.mapping===za?W.image.height:null,X=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=re!==void 0?re.length:0,ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let V,J,se,ae;if(X){let Gt=In[X];V=Gt.vertexShader,J=Gt.fragmentShader}else V=S.vertexShader,J=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);let oe=n.getRenderTarget(),we=H.isInstancedMesh===!0,Oe=H.isBatchedMesh===!0,Fe=!!S.map,ut=!!S.matcap,Y=!!W,Xt=!!S.aoMap,He=!!S.lightMap,Je=!!S.bumpMap,Le=!!S.normalMap,Tt=!!S.displacementMap,tt=!!S.emissiveMap,P=!!S.metalnessMap,E=!!S.roughnessMap,Z=S.anisotropy>0,fe=S.clearcoat>0,he=S.iridescence>0,pe=S.sheen>0,Ne=S.transmission>0,xe=Z&&!!S.anisotropyMap,Te=fe&&!!S.clearcoatMap,Ge=fe&&!!S.clearcoatNormalMap,nt=fe&&!!S.clearcoatRoughnessMap,de=he&&!!S.iridescenceMap,gt=he&&!!S.iridescenceThicknessMap,at=pe&&!!S.sheenColorMap,Ye=pe&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Ae=!!S.specularColorMap,Qe=!!S.specularIntensityMap,pt=Ne&&!!S.transmissionMap,Ct=Ne&&!!S.thicknessMap,st=!!S.gradientMap,me=!!S.alphaMap,B=S.alphaTest>0,ve=!!S.alphaHash,ye=!!S.extensions,Xe=!!F.attributes.uv1,Ve=!!F.attributes.uv2,yt=!!F.attributes.uv3,bt=_i;return S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(bt=n.toneMapping),{isWebGL2:u,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:J,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Oe,instancing:we,instancingColor:we&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ti,map:Fe,matcap:ut,envMap:Y,envMapMode:Y&&W.mapping,envMapCubeUVHeight:$,aoMap:Xt,lightMap:He,bumpMap:Je,normalMap:Le,displacementMap:d&&Tt,emissiveMap:tt,normalMapObjectSpace:Le&&S.normalMapType===wd,normalMapTangentSpace:Le&&S.normalMapType===bl,metalnessMap:P,roughnessMap:E,anisotropy:Z,anisotropyMap:xe,clearcoat:fe,clearcoatMap:Te,clearcoatNormalMap:Ge,clearcoatRoughnessMap:nt,iridescence:he,iridescenceMap:de,iridescenceThicknessMap:gt,sheen:pe,sheenColorMap:at,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:Ae,specularIntensityMap:Qe,transmission:Ne,transmissionMap:pt,thicknessMap:Ct,gradientMap:st,opaque:S.transparent===!1&&S.blending===vs,alphaMap:me,alphaTest:B,alphaHash:ve,combine:S.combine,mapUv:Fe&&v(S.map.channel),aoMapUv:Xt&&v(S.aoMap.channel),lightMapUv:He&&v(S.lightMap.channel),bumpMapUv:Je&&v(S.bumpMap.channel),normalMapUv:Le&&v(S.normalMap.channel),displacementMapUv:Tt&&v(S.displacementMap.channel),emissiveMapUv:tt&&v(S.emissiveMap.channel),metalnessMapUv:P&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:xe&&v(S.anisotropyMap.channel),clearcoatMapUv:Te&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:at&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&v(S.sheenRoughnessMap.channel),specularMapUv:ke&&v(S.specularMap.channel),specularColorMapUv:Ae&&v(S.specularColorMap.channel),specularIntensityMapUv:Qe&&v(S.specularIntensityMap.channel),transmissionMapUv:pt&&v(S.transmissionMap.channel),thicknessMapUv:Ct&&v(S.thicknessMap.channel),alphaMapUv:me&&v(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Le||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Xe,vertexUv2s:Ve,vertexUv3s:yt,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(Fe||me),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ce,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&St.getTransfer(S.map.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ye&&S.extensions.derivatives===!0,extensionFragDepth:ye&&S.extensions.fragDepth===!0,extensionDrawBuffers:ye&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(let ee in S.defines)N.push(ee),N.push(S.defines[ee]);return S.isRawShaderMaterial===!1&&(C(N,S),b(N,S),N.push(n.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function C(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function b(S,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),N.anisotropy&&a.enable(17),N.alphaHash&&a.enable(18),N.batching&&a.enable(19),S.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function I(S){let N=_[S.type],ee;if(N){let le=In[N];ee=cf.clone(le.uniforms)}else ee=S.uniforms;return ee}function U(S,N){let ee;for(let le=0,H=c.length;le<H;le++){let O=c[le];if(O.cacheKey===N){ee=O,++ee.usedTimes;break}}return ee===void 0&&(ee=new v0(n,N,S,r),c.push(ee)),ee}function A(S){if(--S.usedTimes===0){let N=c.indexOf(S);c[N]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function q(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:I,acquireProgram:U,releaseProgram:A,releaseShaderCache:D,programs:c,dispose:q}}function b0(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function M0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,m,_,v,f){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:f},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=f),e++,p}function a(h,d,m,_,v,f){let p=o(h,d,m,_,v,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(h,d,m,_,v,f){let p=o(h,d,m,_,v,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||M0),i.length>1&&i.sort(d||pu),s.length>1&&s.sort(d||pu)}function u(){for(let h=e,d=n.length;h<d;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function S0(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new mu,n.set(i,[o])):s>=r.length?(o=new mu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function w0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new it};break;case"SpotLight":t={position:new z,direction:new z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function E0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var T0=0;function A0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function C0(n,e){let t=new w0,i=E0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new z);let r=new z,o=new ot,a=new ot;function l(u,h){let d=0,m=0,_=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let v=0,f=0,p=0,C=0,b=0,I=0,U=0,A=0,D=0,q=0,S=0;u.sort(A0);let N=h===!0?Math.PI:1;for(let le=0,H=u.length;le<H;le++){let O=u[le],F=O.color,k=O.intensity,W=O.distance,$=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=F.r*k*N,m+=F.g*k*N,_+=F.b*k*N;else if(O.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(O.sh.coefficients[X],k);S++}else if(O.isDirectionalLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*N),O.castShadow){let re=O.shadow,ne=i.get(O);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,s.directionalShadow[v]=ne,s.directionalShadowMap[v]=$,s.directionalShadowMatrix[v]=O.shadow.matrix,I++}s.directional[v]=X,v++}else if(O.isSpotLight){let X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(F).multiplyScalar(k*N),X.distance=W,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,s.spot[p]=X;let re=O.shadow;if(O.map&&(s.spotLightMap[D]=O.map,D++,re.updateMatrices(O),O.castShadow&&q++),s.spotLightMatrix[p]=re.matrix,O.castShadow){let ne=i.get(O);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,s.spotShadow[p]=ne,s.spotShadowMap[p]=$,A++}p++}else if(O.isRectAreaLight){let X=t.get(O);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),s.rectArea[C]=X,C++}else if(O.isPointLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*N),X.distance=O.distance,X.decay=O.decay,O.castShadow){let re=O.shadow,ne=i.get(O);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,ne.shadowCameraNear=re.camera.near,ne.shadowCameraFar=re.camera.far,s.pointShadow[f]=ne,s.pointShadowMap[f]=$,s.pointShadowMatrix[f]=O.shadow.matrix,U++}s.point[f]=X,f++}else if(O.isHemisphereLight){let X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(k*N),X.groundColor.copy(O.groundColor).multiplyScalar(k*N),s.hemi[b]=X,b++}}C>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;let ee=s.hash;(ee.directionalLength!==v||ee.pointLength!==f||ee.spotLength!==p||ee.rectAreaLength!==C||ee.hemiLength!==b||ee.numDirectionalShadows!==I||ee.numPointShadows!==U||ee.numSpotShadows!==A||ee.numSpotMaps!==D||ee.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=C,s.point.length=f,s.hemi.length=b,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=A+D-q,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=S,ee.directionalLength=v,ee.pointLength=f,ee.spotLength=p,ee.rectAreaLength=C,ee.hemiLength=b,ee.numDirectionalShadows=I,ee.numPointShadows=U,ee.numSpotShadows=A,ee.numSpotMaps=D,ee.numLightProbes=S,s.version=T0++)}function c(u,h){let d=0,m=0,_=0,v=0,f=0,p=h.matrixWorldInverse;for(let C=0,b=u.length;C<b;C++){let I=u[C];if(I.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),d++}else if(I.isSpotLight){let U=s.spot[_];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),_++}else if(I.isRectAreaLight){let U=s.rectArea[v];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(p),a.identity(),o.copy(I.matrixWorld),o.premultiply(p),a.extractRotation(o),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),v++}else if(I.isPointLight){let U=s.point[m];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(p),m++}else if(I.isHemisphereLight){let U=s.hemi[f];U.direction.setFromMatrixPosition(I.matrixWorld),U.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:s}}function gu(n,e){let t=new C0(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function R0(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new gu(n,e),t.set(r,[l])):o>=a.length?(l=new gu(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var sl=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function I0(n,e,t){let i=new dr,s=new ht,r=new ht,o=new Et,a=new sl({depthPacking:Sd}),l=new rl,c={},u=t.maxTextureSize,h={[Nn]:ln,[ln]:Nn,[An]:An},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:L0,fragmentShader:P0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new On;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dn(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let p=this.type;this.render=function(A,D,q){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),N=n.getActiveCubeFace(),ee=n.getActiveMipmapLevel(),le=n.state;le.setBlending(gi),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let H=p!==Zn&&this.type===Zn,O=p===Zn&&this.type!==Zn;for(let F=0,k=A.length;F<k;F++){let W=A[F],$=W.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let X=$.getFrameExtents();if(s.multiply(X),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,$.mapSize.y=r.y)),$.map===null||H===!0||O===!0){let ne=this.type!==Zn?{minFilter:Yt,magFilter:Yt}:{};$.map!==null&&$.map.dispose(),$.map=new ni(s.x,s.y,ne),$.map.texture.name=W.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let re=$.getViewportCount();for(let ne=0;ne<re;ne++){let ce=$.getViewport(ne);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),le.viewport(o),$.updateMatrices(W,ne),i=$.getFrustum(),I(D,q,$.camera,W,this.type)}$.isPointLightShadow!==!0&&this.type===Zn&&C($,q),$.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(S,N,ee)};function C(A,D){let q=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,q,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,q,m,v,null)}function b(A,D,q,S){let N=null,ee=q.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(ee!==void 0)N=ee;else if(N=q.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let le=N.uuid,H=D.uuid,O=c[le];O===void 0&&(O={},c[le]=O);let F=O[H];F===void 0&&(F=N.clone(),O[H]=F,D.addEventListener("dispose",U)),N=F}if(N.visible=D.visible,N.wireframe=D.wireframe,S===Zn?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:h[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let le=n.properties.get(N);le.light=q}return N}function I(A,D,q,S,N){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Zn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld);let H=e.update(A),O=A.material;if(Array.isArray(O)){let F=H.groups;for(let k=0,W=F.length;k<W;k++){let $=F[k],X=O[$.materialIndex];if(X&&X.visible){let re=b(A,X,S,N);A.onBeforeShadow(n,A,D,q,H,re,$),n.renderBufferDirect(q,null,H,re,A,$),A.onAfterShadow(n,A,D,q,H,re,$)}}}else if(O.visible){let F=b(A,O,S,N);A.onBeforeShadow(n,A,D,q,H,F,null),n.renderBufferDirect(q,null,H,F,A,null),A.onAfterShadow(n,A,D,q,H,F,null)}}let le=A.children;for(let H=0,O=le.length;H<O;H++)I(le[H],D,q,S,N)}function U(A){A.target.removeEventListener("dispose",U);for(let q in c){let S=c[q],N=A.target.uuid;N in S&&(S[N].dispose(),delete S[N])}}}function N0(n,e,t){let i=t.isWebGL2;function s(){let B=!1,ve=new Et,ye=null,Xe=new Et(0,0,0,0);return{setMask:function(Ve){ye!==Ve&&!B&&(n.colorMask(Ve,Ve,Ve,Ve),ye=Ve)},setLocked:function(Ve){B=Ve},setClear:function(Ve,yt,bt,_t,Gt){Gt===!0&&(Ve*=_t,yt*=_t,bt*=_t),ve.set(Ve,yt,bt,_t),Xe.equals(ve)===!1&&(n.clearColor(Ve,yt,bt,_t),Xe.copy(ve))},reset:function(){B=!1,ye=null,Xe.set(-1,0,0,0)}}}function r(){let B=!1,ve=null,ye=null,Xe=null;return{setTest:function(Ve){Ve?Oe(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Ve){ve!==Ve&&!B&&(n.depthMask(Ve),ve=Ve)},setFunc:function(Ve){if(ye!==Ve){switch(Ve){case Jh:n.depthFunc(n.NEVER);break;case Zh:n.depthFunc(n.ALWAYS);break;case Kh:n.depthFunc(n.LESS);break;case oa:n.depthFunc(n.LEQUAL);break;case Qh:n.depthFunc(n.EQUAL);break;case ed:n.depthFunc(n.GEQUAL);break;case td:n.depthFunc(n.GREATER);break;case nd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Ve}},setLocked:function(Ve){B=Ve},setClear:function(Ve){Xe!==Ve&&(n.clearDepth(Ve),Xe=Ve)},reset:function(){B=!1,ve=null,ye=null,Xe=null}}}function o(){let B=!1,ve=null,ye=null,Xe=null,Ve=null,yt=null,bt=null,_t=null,Gt=null;return{setTest:function(Mt){B||(Mt?Oe(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(Mt){ve!==Mt&&!B&&(n.stencilMask(Mt),ve=Mt)},setFunc:function(Mt,$t,_n){(ye!==Mt||Xe!==$t||Ve!==_n)&&(n.stencilFunc(Mt,$t,_n),ye=Mt,Xe=$t,Ve=_n)},setOp:function(Mt,$t,_n){(yt!==Mt||bt!==$t||_t!==_n)&&(n.stencilOp(Mt,$t,_n),yt=Mt,bt=$t,_t=_n)},setLocked:function(Mt){B=Mt},setClear:function(Mt){Gt!==Mt&&(n.clearStencil(Mt),Gt=Mt)},reset:function(){B=!1,ve=null,ye=null,Xe=null,Ve=null,yt=null,bt=null,_t=null,Gt=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap,d={},m={},_=new WeakMap,v=[],f=null,p=!1,C=null,b=null,I=null,U=null,A=null,D=null,q=null,S=new it(0,0,0),N=0,ee=!1,le=null,H=null,O=null,F=null,k=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,X=0,re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=X>=1):re.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=X>=2);let ne=null,ce={},V=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),se=new Et().fromArray(V),ae=new Et().fromArray(J);function oe(B,ve,ye,Xe){let Ve=new Uint8Array(4),yt=n.createTexture();n.bindTexture(B,yt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<ye;bt++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Xe,0,n.RGBA,n.UNSIGNED_BYTE,Ve):n.texImage2D(ve+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ve);return yt}let we={};we[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(n.DEPTH_TEST),l.setFunc(oa),tt(!1),P(Yl),Oe(n.CULL_FACE),Le(gi);function Oe(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function Fe(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function ut(B,ve){return m[B]!==ve?(n.bindFramebuffer(B,ve),m[B]=ve,i&&(B===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),B===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function Y(B,ve){let ye=v,Xe=!1;if(B)if(ye=_.get(ve),ye===void 0&&(ye=[],_.set(ve,ye)),B.isWebGLMultipleRenderTargets){let Ve=B.texture;if(ye.length!==Ve.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,bt=Ve.length;yt<bt;yt++)ye[yt]=n.COLOR_ATTACHMENT0+yt;ye.length=Ve.length,Xe=!0}}else ye[0]!==n.COLOR_ATTACHMENT0&&(ye[0]=n.COLOR_ATTACHMENT0,Xe=!0);else ye[0]!==n.BACK&&(ye[0]=n.BACK,Xe=!0);Xe&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Xt(B){return f!==B?(n.useProgram(B),f=B,!0):!1}let He={[Oi]:n.FUNC_ADD,[Uh]:n.FUNC_SUBTRACT,[Oh]:n.FUNC_REVERSE_SUBTRACT};if(i)He[Kl]=n.MIN,He[Ql]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(He[Kl]=B.MIN_EXT,He[Ql]=B.MAX_EXT)}let Je={[Fh]:n.ZERO,[kh]:n.ONE,[Bh]:n.SRC_COLOR,[zo]:n.SRC_ALPHA,[qh]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[Hh]:n.DST_ALPHA,[zh]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[Wh]:n.ONE_MINUS_DST_COLOR,[Vh]:n.ONE_MINUS_DST_ALPHA,[Xh]:n.CONSTANT_COLOR,[$h]:n.ONE_MINUS_CONSTANT_COLOR,[Yh]:n.CONSTANT_ALPHA,[jh]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(B,ve,ye,Xe,Ve,yt,bt,_t,Gt,Mt){if(B===gi){p===!0&&(Fe(n.BLEND),p=!1);return}if(p===!1&&(Oe(n.BLEND),p=!0),B!==Dh){if(B!==C||Mt!==ee){if((b!==Oi||A!==Oi)&&(n.blendEquation(n.FUNC_ADD),b=Oi,A=Oi),Mt)switch(B){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.ONE,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}I=null,U=null,D=null,q=null,S.set(0,0,0),N=0,C=B,ee=Mt}return}Ve=Ve||ve,yt=yt||ye,bt=bt||Xe,(ve!==b||Ve!==A)&&(n.blendEquationSeparate(He[ve],He[Ve]),b=ve,A=Ve),(ye!==I||Xe!==U||yt!==D||bt!==q)&&(n.blendFuncSeparate(Je[ye],Je[Xe],Je[yt],Je[bt]),I=ye,U=Xe,D=yt,q=bt),(_t.equals(S)===!1||Gt!==N)&&(n.blendColor(_t.r,_t.g,_t.b,Gt),S.copy(_t),N=Gt),C=B,ee=!1}function Tt(B,ve){B.side===An?Fe(n.CULL_FACE):Oe(n.CULL_FACE);let ye=B.side===ln;ve&&(ye=!ye),tt(ye),B.blending===vs&&B.transparent===!1?Le(gi):Le(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);let Xe=B.stencilWrite;c.setTest(Xe),Xe&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(B){le!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),le=B)}function P(B){B!==Ph?(Oe(n.CULL_FACE),B!==H&&(B===Yl?n.cullFace(n.BACK):B===Ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),H=B}function E(B){B!==O&&($&&n.lineWidth(B),O=B)}function Z(B,ve,ye){B?(Oe(n.POLYGON_OFFSET_FILL),(F!==ve||k!==ye)&&(n.polygonOffset(ve,ye),F=ve,k=ye)):Fe(n.POLYGON_OFFSET_FILL)}function fe(B){B?Oe(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function he(B){B===void 0&&(B=n.TEXTURE0+W-1),ne!==B&&(n.activeTexture(B),ne=B)}function pe(B,ve,ye){ye===void 0&&(ne===null?ye=n.TEXTURE0+W-1:ye=ne);let Xe=ce[ye];Xe===void 0&&(Xe={type:void 0,texture:void 0},ce[ye]=Xe),(Xe.type!==B||Xe.texture!==ve)&&(ne!==ye&&(n.activeTexture(ye),ne=ye),n.bindTexture(B,ve||we[B]),Xe.type=B,Xe.texture=ve)}function Ne(){let B=ce[ne];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(B){se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),se.copy(B))}function pt(B){ae.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ae.copy(B))}function Ct(B,ve){let ye=h.get(ve);ye===void 0&&(ye=new WeakMap,h.set(ve,ye));let Xe=ye.get(B);Xe===void 0&&(Xe=n.getUniformBlockIndex(ve,B.name),ye.set(B,Xe))}function st(B,ve){let Xe=h.get(ve).get(B);u.get(ve)!==Xe&&(n.uniformBlockBinding(ve,Xe,B.__bindingPointIndex),u.set(ve,Xe))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ne=null,ce={},m={},_=new WeakMap,v=[],f=null,p=!1,C=null,b=null,I=null,U=null,A=null,D=null,q=null,S=new it(0,0,0),N=0,ee=!1,le=null,H=null,O=null,F=null,k=null,se.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Fe,bindFramebuffer:ut,drawBuffers:Y,useProgram:Xt,setBlending:Le,setMaterial:Tt,setFlipSided:tt,setCullFace:P,setLineWidth:E,setPolygonOffset:Z,setScissorTest:fe,activeTexture:he,bindTexture:pe,unbindTexture:Ne,compressedTexImage2D:xe,compressedTexImage3D:Te,texImage2D:ke,texImage3D:Ae,updateUBOMapping:Ct,uniformBlockBinding:st,texStorage2D:at,texStorage3D:Ye,texSubImage2D:Ge,texSubImage3D:nt,compressedTexSubImage2D:de,compressedTexSubImage3D:gt,scissor:Qe,viewport:pt,reset:me}}function D0(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return m?new OffscreenCanvas(P,E):cr("canvas")}function v(P,E,Z,fe){let he=1;if((P.width>fe||P.height>fe)&&(he=fe/Math.max(P.width,P.height)),he<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let pe=E?pa:Math.floor,Ne=pe(he*P.width),xe=pe(he*P.height);h===void 0&&(h=_(Ne,xe));let Te=Z?_(Ne,xe):h;return Te.width=Ne,Te.height=xe,Te.getContext("2d").drawImage(P,0,0,Ne,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ne+"x"+xe+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function f(P){return Xo(P.width)&&Xo(P.height)}function p(P){return a?!1:P.wrapS!==Qt||P.wrapT!==Qt||P.minFilter!==Yt&&P.minFilter!==rn}function C(P,E){return P.generateMipmaps&&E&&P.minFilter!==Yt&&P.minFilter!==rn}function b(P){n.generateMipmap(P)}function I(P,E,Z,fe,he=!1){if(a===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=E;if(E===n.RED&&(Z===n.FLOAT&&(pe=n.R32F),Z===n.HALF_FLOAT&&(pe=n.R16F),Z===n.UNSIGNED_BYTE&&(pe=n.R8)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.R8UI),Z===n.UNSIGNED_SHORT&&(pe=n.R16UI),Z===n.UNSIGNED_INT&&(pe=n.R32UI),Z===n.BYTE&&(pe=n.R8I),Z===n.SHORT&&(pe=n.R16I),Z===n.INT&&(pe=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(pe=n.RG32F),Z===n.HALF_FLOAT&&(pe=n.RG16F),Z===n.UNSIGNED_BYTE&&(pe=n.RG8)),E===n.RGBA){let Ne=he?ua:St.getTransfer(fe);Z===n.FLOAT&&(pe=n.RGBA32F),Z===n.HALF_FLOAT&&(pe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(pe=Ne===Lt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function U(P,E,Z){return C(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){return P===Yt||P===tc||P===ro?n.NEAREST:n.LINEAR}function D(P){let E=P.target;E.removeEventListener("dispose",D),S(E),E.isVideoTexture&&u.delete(E)}function q(P){let E=P.target;E.removeEventListener("dispose",q),ee(E)}function S(P){let E=i.get(P);if(E.__webglInit===void 0)return;let Z=P.source,fe=d.get(Z);if(fe){let he=fe[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&N(P),Object.keys(fe).length===0&&d.delete(Z)}i.remove(P)}function N(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let Z=P.source,fe=d.get(Z);delete fe[E.__cacheKey],o.memory.textures--}function ee(P){let E=P.texture,Z=i.get(P),fe=i.get(E);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(Z.__webglFramebuffer[he]))for(let pe=0;pe<Z.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer(Z.__webglFramebuffer[he][pe]);else n.deleteFramebuffer(Z.__webglFramebuffer[he]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[he])}else{if(Array.isArray(Z.__webglFramebuffer))for(let he=0;he<Z.__webglFramebuffer.length;he++)n.deleteFramebuffer(Z.__webglFramebuffer[he]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let he=0;he<Z.__webglColorRenderbuffer.length;he++)Z.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[he]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let he=0,pe=E.length;he<pe;he++){let Ne=i.get(E[he]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),o.memory.textures--),i.remove(E[he])}i.remove(E),i.remove(P)}let le=0;function H(){le=0}function O(){let P=le;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),le+=1,P}function F(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function k(P,E){let Z=i.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){let fe=P.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,P,E);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function W(P,E){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){se(Z,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function $(P,E){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){se(Z,P,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function X(P,E){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){ae(Z,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}let re={[yi]:n.REPEAT,[Qt]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},ne={[Yt]:n.NEAREST,[tc]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[dd]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},ce={[Ed]:n.NEVER,[Pd]:n.ALWAYS,[Td]:n.LESS,[Vu]:n.LEQUAL,[Ad]:n.EQUAL,[Ld]:n.GEQUAL,[Cd]:n.GREATER,[Rd]:n.NOTEQUAL};function V(P,E,Z){if(Z?(n.texParameteri(P,n.TEXTURE_WRAP_S,re[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,re[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,re[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ne[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ne[E.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Qt||E.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,A(E.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Yt&&E.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Yt||E.minFilter!==ro&&E.minFilter!==xi||E.type===Qn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===lr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(P,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function J(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",D));let fe=E.source,he=d.get(fe);he===void 0&&(he={},d.set(fe,he));let pe=F(E);if(pe!==P.__cacheKey){he[pe]===void 0&&(he[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),he[pe].usedTimes++;let Ne=he[P.__cacheKey];Ne!==void 0&&(he[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&N(E)),P.__cacheKey=pe,P.__webglTexture=he[pe].texture}return Z}function se(P,E,Z){let fe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=n.TEXTURE_3D);let he=J(P,E),pe=E.source;t.bindTexture(fe,P.__webglTexture,n.TEXTURE0+Z);let Ne=i.get(pe);if(pe.version!==Ne.__version||he===!0){t.activeTexture(n.TEXTURE0+Z);let xe=St.getPrimaries(St.workingColorSpace),Te=E.colorSpace===bn?null:St.getPrimaries(E.colorSpace),Ge=E.colorSpace===bn||xe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let nt=p(E)&&f(E.image)===!1,de=v(E.image,nt,!1,s.maxTextureSize);de=tt(E,de);let gt=f(de)||a,at=r.convert(E.format,E.colorSpace),Ye=r.convert(E.type),ke=I(E.internalFormat,at,Ye,E.colorSpace,E.isVideoTexture);V(fe,E,gt);let Ae,Qe=E.mipmaps,pt=a&&E.isVideoTexture!==!0&&ke!==zu,Ct=Ne.__version===void 0||he===!0,st=U(E,de,gt);if(E.isDepthTexture)ke=n.DEPTH_COMPONENT,a?E.type===Qn?ke=n.DEPTH_COMPONENT32F:E.type===mi?ke=n.DEPTH_COMPONENT24:E.type===ki?ke=n.DEPTH24_STENCIL8:ke=n.DEPTH_COMPONENT16:E.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Bi&&ke===n.DEPTH_COMPONENT&&E.type!==xl&&E.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=mi,Ye=r.convert(E.type)),E.format===Ss&&ke===n.DEPTH_COMPONENT&&(ke=n.DEPTH_STENCIL,E.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ki,Ye=r.convert(E.type))),Ct&&(pt?t.texStorage2D(n.TEXTURE_2D,1,ke,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,ke,de.width,de.height,0,at,Ye,null));else if(E.isDataTexture)if(Qe.length>0&&gt){pt&&Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,Qe[0].width,Qe[0].height);for(let me=0,B=Qe.length;me<B;me++)Ae=Qe[me],pt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,at,Ye,Ae.data):t.texImage2D(n.TEXTURE_2D,me,ke,Ae.width,Ae.height,0,at,Ye,Ae.data);E.generateMipmaps=!1}else pt?(Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,at,Ye,de.data)):t.texImage2D(n.TEXTURE_2D,0,ke,de.width,de.height,0,at,Ye,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pt&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ke,Qe[0].width,Qe[0].height,de.depth);for(let me=0,B=Qe.length;me<B;me++)Ae=Qe[me],E.format!==xn?at!==null?pt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,de.depth,at,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,ke,Ae.width,Ae.height,de.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,de.depth,at,Ye,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,ke,Ae.width,Ae.height,de.depth,0,at,Ye,Ae.data)}else{pt&&Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,Qe[0].width,Qe[0].height);for(let me=0,B=Qe.length;me<B;me++)Ae=Qe[me],E.format!==xn?at!==null?pt?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,at,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,me,ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,at,Ye,Ae.data):t.texImage2D(n.TEXTURE_2D,me,ke,Ae.width,Ae.height,0,at,Ye,Ae.data)}else if(E.isDataArrayTexture)pt?(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,ke,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,at,Ye,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,de.width,de.height,de.depth,0,at,Ye,de.data);else if(E.isData3DTexture)pt?(Ct&&t.texStorage3D(n.TEXTURE_3D,st,ke,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,at,Ye,de.data)):t.texImage3D(n.TEXTURE_3D,0,ke,de.width,de.height,de.depth,0,at,Ye,de.data);else if(E.isFramebufferTexture){if(Ct)if(pt)t.texStorage2D(n.TEXTURE_2D,st,ke,de.width,de.height);else{let me=de.width,B=de.height;for(let ve=0;ve<st;ve++)t.texImage2D(n.TEXTURE_2D,ve,ke,me,B,0,at,Ye,null),me>>=1,B>>=1}}else if(Qe.length>0&&gt){pt&&Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,Qe[0].width,Qe[0].height);for(let me=0,B=Qe.length;me<B;me++)Ae=Qe[me],pt?t.texSubImage2D(n.TEXTURE_2D,me,0,0,at,Ye,Ae):t.texImage2D(n.TEXTURE_2D,me,ke,at,Ye,Ae);E.generateMipmaps=!1}else pt?(Ct&&t.texStorage2D(n.TEXTURE_2D,st,ke,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,at,Ye,de)):t.texImage2D(n.TEXTURE_2D,0,ke,at,Ye,de);C(E,gt)&&b(fe),Ne.__version=pe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ae(P,E,Z){if(E.image.length!==6)return;let fe=J(P,E),he=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Z);let pe=i.get(he);if(he.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+Z);let Ne=St.getPrimaries(St.workingColorSpace),xe=E.colorSpace===bn?null:St.getPrimaries(E.colorSpace),Te=E.colorSpace===bn||Ne===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,de=[];for(let me=0;me<6;me++)!Ge&&!nt?de[me]=v(E.image[me],!1,!0,s.maxCubemapSize):de[me]=nt?E.image[me].image:E.image[me],de[me]=tt(E,de[me]);let gt=de[0],at=f(gt)||a,Ye=r.convert(E.format,E.colorSpace),ke=r.convert(E.type),Ae=I(E.internalFormat,Ye,ke,E.colorSpace),Qe=a&&E.isVideoTexture!==!0,pt=pe.__version===void 0||fe===!0,Ct=U(E,gt,at);V(n.TEXTURE_CUBE_MAP,E,at);let st;if(Ge){Qe&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Ae,gt.width,gt.height);for(let me=0;me<6;me++){st=de[me].mipmaps;for(let B=0;B<st.length;B++){let ve=st[B];E.format!==xn?Ye!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,0,0,ve.width,ve.height,Ye,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,0,0,ve.width,ve.height,Ye,ke,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,Ae,ve.width,ve.height,0,Ye,ke,ve.data)}}}else{st=E.mipmaps,Qe&&pt&&(st.length>0&&Ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Ae,de[0].width,de[0].height));for(let me=0;me<6;me++)if(nt){Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de[me].width,de[me].height,Ye,ke,de[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ae,de[me].width,de[me].height,0,Ye,ke,de[me].data);for(let B=0;B<st.length;B++){let ye=st[B].image[me].image;Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,0,0,ye.width,ye.height,Ye,ke,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,Ae,ye.width,ye.height,0,Ye,ke,ye.data)}}else{Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ye,ke,de[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ae,Ye,ke,de[me]);for(let B=0;B<st.length;B++){let ve=st[B];Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,0,0,Ye,ke,ve.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,Ae,Ye,ke,ve.image[me])}}}C(E,at)&&b(n.TEXTURE_CUBE_MAP),pe.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function oe(P,E,Z,fe,he,pe){let Ne=r.convert(Z.format,Z.colorSpace),xe=r.convert(Z.type),Te=I(Z.internalFormat,Ne,xe,Z.colorSpace);if(!i.get(E).__hasExternalTextures){let nt=Math.max(1,E.width>>pe),de=Math.max(1,E.height>>pe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,Te,nt,de,E.depth,0,Ne,xe,null):t.texImage2D(he,pe,Te,nt,de,0,Ne,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,he,i.get(Z).__webglTexture,0,Je(E)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,he,i.get(Z).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(P,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let fe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Le(E)){let he=E.depthTexture;he&&he.isDepthTexture&&(he.type===Qn?fe=n.DEPTH_COMPONENT32F:he.type===mi&&(fe=n.DEPTH_COMPONENT24));let pe=Je(E);Le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){let fe=Je(E);Z&&Le(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):Le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{let fe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let he=0;he<fe.length;he++){let pe=fe[he],Ne=r.convert(pe.format,pe.colorSpace),xe=r.convert(pe.type),Te=I(pe.internalFormat,Ne,xe,pe.colorSpace),Ge=Je(E);Z&&Le(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Te,E.width,E.height):Le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Te,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Te,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);let fe=i.get(E.depthTexture).__webglTexture,he=Je(E);if(E.depthTexture.format===Bi)Le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Ss)Le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Fe(P){let E=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]=n.createRenderbuffer(),we(E.__webglDepthbuffer[fe],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),we(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(P,E,Z){let fe=i.get(P);E!==void 0&&oe(fe.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Fe(P)}function Y(P){let E=P.texture,Z=i.get(P),fe=i.get(E);P.addEventListener("dispose",q),P.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=E.version,o.memory.textures++);let he=P.isWebGLCubeRenderTarget===!0,pe=P.isWebGLMultipleRenderTargets===!0,Ne=f(P)||a;if(he){Z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[xe]=[];for(let Te=0;Te<E.mipmaps.length;Te++)Z.__webglFramebuffer[xe][Te]=n.createFramebuffer()}else Z.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)Z.__webglFramebuffer[xe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let xe=P.texture;for(let Te=0,Ge=xe.length;Te<Ge;Te++){let nt=i.get(xe[Te]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Le(P)===!1){let xe=pe?E:[E];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Te=0;Te<xe.length;Te++){let Ge=xe[Te];Z.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Te]);let nt=r.convert(Ge.format,Ge.colorSpace),de=r.convert(Ge.type),gt=I(Ge.internalFormat,nt,de,Ge.colorSpace,P.isXRRenderTarget===!0),at=Je(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,gt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),we(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),V(n.TEXTURE_CUBE_MAP,E,Ne);for(let xe=0;xe<6;xe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)oe(Z.__webglFramebuffer[xe][Te],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Te);else oe(Z.__webglFramebuffer[xe],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);C(E,Ne)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let xe=P.texture;for(let Te=0,Ge=xe.length;Te<Ge;Te++){let nt=xe[Te],de=i.get(nt);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),V(n.TEXTURE_2D,nt,Ne),oe(Z.__webglFramebuffer,P,nt,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,0),C(nt,Ne)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?xe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,fe.__webglTexture),V(xe,E,Ne),a&&E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)oe(Z.__webglFramebuffer[Te],P,E,n.COLOR_ATTACHMENT0,xe,Te);else oe(Z.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,xe,0);C(E,Ne)&&b(xe),t.unbindTexture()}P.depthBuffer&&Fe(P)}function Xt(P){let E=f(P)||a,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let fe=0,he=Z.length;fe<he;fe++){let pe=Z[fe];if(C(pe,E)){let Ne=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(pe).__webglTexture;t.bindTexture(Ne,xe),b(Ne),t.unbindTexture()}}}function He(P){if(a&&P.samples>0&&Le(P)===!1){let E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,fe=P.height,he=n.COLOR_BUFFER_BIT,pe=[],Ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(P),Te=P.isWebGLMultipleRenderTargets===!0;if(Te)for(let Ge=0;Ge<E.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){pe.push(n.COLOR_ATTACHMENT0+Ge),P.depthBuffer&&pe.push(Ne);let nt=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(nt===!1&&(P.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Te&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ge]),nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),Te){let de=i.get(E[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Ge=0;Ge<E.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ge]);let nt=i.get(E[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Je(P){return Math.min(s.maxSamples,P.samples)}function Le(P){let E=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(P){let E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function tt(P,E){let Z=P.colorSpace,fe=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===qo||Z!==ti&&Z!==bn&&(St.getTransfer(Z)===Lt?a===!1?e.has("EXT_sRGB")===!0&&fe===xn?(P.format=qo,P.minFilter=rn,P.generateMipmaps=!1):E=ma.sRGBToLinear(E):(fe!==xn||he!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=ut,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Le}function U0(n,e,t){let i=t.isWebGL2;function s(r,o=bn){let a,l=St.getTransfer(o);if(r===vi)return n.UNSIGNED_BYTE;if(r===Uu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ou)return n.UNSIGNED_SHORT_5_5_5_1;if(r===fd)return n.BYTE;if(r===pd)return n.SHORT;if(r===xl)return n.UNSIGNED_SHORT;if(r===Du)return n.INT;if(r===mi)return n.UNSIGNED_INT;if(r===Qn)return n.FLOAT;if(r===lr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===md)return n.ALPHA;if(r===xn)return n.RGBA;if(r===gd)return n.LUMINANCE;if(r===_d)return n.LUMINANCE_ALPHA;if(r===Bi)return n.DEPTH_COMPONENT;if(r===Ss)return n.DEPTH_STENCIL;if(r===qo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vd)return n.RED;if(r===Fu)return n.RED_INTEGER;if(r===yd)return n.RG;if(r===ku)return n.RG_INTEGER;if(r===Bu)return n.RGBA_INTEGER;if(r===ao||r===oo||r===lo||r===co)if(l===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ao)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ao)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nc||r===ic||r===sc||r===rc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===nc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ic)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ac||r===oc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ac)return l===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===oc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lc||r===cc||r===uc||r===hc||r===dc||r===fc||r===pc||r===mc||r===gc||r===_c||r===vc||r===yc||r===xc||r===bc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===lc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_c)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bc)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uo||r===Mc||r===Sc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===uo)return l===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xd||r===wc||r===Ec||r===Tc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===uo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ec)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ki?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var al=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fn=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},O0={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,i),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ol=class extends bi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null,v=t.getContextAttributes(),f=null,p=null,C=[],b=[],I=new ht,U=null,A=new kt;A.layers.enable(1),A.viewport=new Et;let D=new kt;D.layers.enable(2),D.viewport=new Et;let q=[A,D],S=new al;S.layers.enable(1),S.layers.enable(2);let N=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=C[V];return J===void 0&&(J=new or,C[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=C[V];return J===void 0&&(J=new or,C[V]=J),J.getGripSpace()},this.getHand=function(V){let J=C[V];return J===void 0&&(J=new or,C[V]=J),J.getHandSpace()};function le(V){let J=b.indexOf(V.inputSource);if(J===-1)return;let se=C[J];se!==void 0&&(se.update(V.inputSource,V.frame,c||o),se.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",O);for(let V=0;V<C.length;V++){let J=b[V];J!==null&&(b[V]=null,C[V].disconnect(J))}N=null,ee=null,e.setRenderTarget(f),m=null,d=null,h=null,s=null,p=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",H),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new ni(m.framebufferWidth,m.framebufferHeight,{format:xn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,se=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?Ss:Bi,se=v.stencil?ki:mi);let oe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new ni(d.textureWidth,d.textureHeight,{format:xn,type:vi,depthTexture:new Ea(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let we=e.properties.get(p);we.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(V){for(let J=0;J<V.removed.length;J++){let se=V.removed[J],ae=b.indexOf(se);ae>=0&&(b[ae]=null,C[ae].disconnect(se))}for(let J=0;J<V.added.length;J++){let se=V.added[J],ae=b.indexOf(se);if(ae===-1){for(let we=0;we<C.length;we++)if(we>=b.length){b.push(se),ae=we;break}else if(b[we]===null){b[we]=se,ae=we;break}if(ae===-1)break}let oe=C[ae];oe&&oe.connect(se)}}let F=new z,k=new z;function W(V,J,se){F.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(se.matrixWorld);let ae=F.distanceTo(k),oe=J.projectionMatrix.elements,we=se.projectionMatrix.elements,Oe=oe[14]/(oe[10]-1),Fe=oe[14]/(oe[10]+1),ut=(oe[9]+1)/oe[5],Y=(oe[9]-1)/oe[5],Xt=(oe[8]-1)/oe[0],He=(we[8]+1)/we[0],Je=Oe*Xt,Le=Oe*He,Tt=ae/(-Xt+He),tt=Tt*-Xt;J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(tt),V.translateZ(Tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let P=Oe+Tt,E=Fe+Tt,Z=Je-tt,fe=Le+(ae-tt),he=ut*Fe/E*P,pe=Y*Fe/E*P;V.projectionMatrix.makePerspective(Z,fe,he,pe,P,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function $(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=D.near=A.near=V.near,S.far=D.far=A.far=V.far,(N!==S.near||ee!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,ee=S.far);let J=V.parent,se=S.cameras;$(S,J);for(let ae=0;ae<se.length;ae++)$(se[ae],J);se.length===2?W(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),X(V,S,J)};function X(V,J,se){se===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ws*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let re=null;function ne(V,J){if(u=J.getViewerPose(c||o),_=J,u!==null){let se=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ae=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let oe=0;oe<se.length;oe++){let we=se[oe],Oe=null;if(m!==null)Oe=m.getViewport(we);else{let ut=h.getViewSubImage(d,we);Oe=ut.viewport,oe===0&&(e.setRenderTargetTextures(p,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(p))}let Fe=q[oe];Fe===void 0&&(Fe=new kt,Fe.layers.enable(oe),Fe.viewport=new Et,q[oe]=Fe),Fe.matrix.fromArray(we.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(we.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),oe===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Fe)}}for(let se=0;se<C.length;se++){let ae=b[se],oe=C[se];ae!==null&&oe!==void 0&&oe.update(ae,J,c||o)}re&&re(V,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}let ce=new Xu;ce.setAnimationLoop(ne),this.setAnimationLoop=function(V){re=V},this.dispose=function(){}}};function F0(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,qu(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,C,b,I){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,I)):p.isMeshMatcapMaterial?(r(f,p),_(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,C,b):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===ln&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===ln&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let C=e.get(p).envMap;if(C&&(f.envMap.value=C,f.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,C,b){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*C,f.scale.value=b*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,C){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){let C=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k0(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,b){let I=b.program;i.uniformBlockBinding(C,I)}function c(C,b){let I=s[C.id];I===void 0&&(_(C),I=u(C),s[C.id]=I,C.addEventListener("dispose",f));let U=b.program;i.updateUBOMapping(C,U);let A=e.render.frame;r[C.id]!==A&&(d(C),r[C.id]=A)}function u(C){let b=h();C.__bindingPointIndex=b;let I=n.createBuffer(),U=C.__size,A=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,I),I}function h(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let b=s[C.id],I=C.uniforms,U=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,D=I.length;A<D;A++){let q=Array.isArray(I[A])?I[A]:[I[A]];for(let S=0,N=q.length;S<N;S++){let ee=q[S];if(m(ee,A,S,U)===!0){let le=ee.__offset,H=Array.isArray(ee.value)?ee.value:[ee.value],O=0;for(let F=0;F<H.length;F++){let k=H[F],W=v(k);typeof k=="number"||typeof k=="boolean"?(ee.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,le+O,ee.__data)):k.isMatrix3?(ee.__data[0]=k.elements[0],ee.__data[1]=k.elements[1],ee.__data[2]=k.elements[2],ee.__data[3]=0,ee.__data[4]=k.elements[3],ee.__data[5]=k.elements[4],ee.__data[6]=k.elements[5],ee.__data[7]=0,ee.__data[8]=k.elements[6],ee.__data[9]=k.elements[7],ee.__data[10]=k.elements[8],ee.__data[11]=0):(k.toArray(ee.__data,O),O+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,ee.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,b,I,U){let A=C.value,D=b+"_"+I;if(U[D]===void 0)return typeof A=="number"||typeof A=="boolean"?U[D]=A:U[D]=A.clone(),!0;{let q=U[D];if(typeof A=="number"||typeof A=="boolean"){if(q!==A)return U[D]=A,!0}else if(q.equals(A)===!1)return q.copy(A),!0}return!1}function _(C){let b=C.uniforms,I=0,U=16;for(let D=0,q=b.length;D<q;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let N=0,ee=S.length;N<ee;N++){let le=S[N],H=Array.isArray(le.value)?le.value:[le.value];for(let O=0,F=H.length;O<F;O++){let k=H[O],W=v(k),$=I%U;$!==0&&U-$<W.boundary&&(I+=U-$),le.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=I,I+=W.storage}}}let A=I%U;return A>0&&(I+=U-A),C.__size=I,C.__cache={},this}function v(C){let b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function f(C){let b=C.target;b.removeEventListener("dispose",f);let I=o.indexOf(b.__bindingPointIndex);o.splice(I,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let C in s)n.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fr=class{constructor(e={}){let{canvas:t=Xd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),_=new Int32Array(4),v=null,f=null,p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;let b=this,I=!1,U=0,A=0,D=null,q=-1,S=null,N=new Et,ee=new Et,le=null,H=new it(0),O=0,F=t.width,k=t.height,W=1,$=null,X=null,re=new Et(0,0,F,k),ne=new Et(0,0,F,k),ce=!1,V=new dr,J=!1,se=!1,ae=null,oe=new ot,we=new ht,Oe=new z,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return D===null?W:1}let Y=i;function Xt(R,G){for(let K=0;K<R.length;K++){let te=R[K],j=t.getContext(te,G);if(j!==null)return j}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ve,!1),Y===null){let G=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&G.shift(),Y=Xt(G,R),Y===null)throw Xt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let He,Je,Le,Tt,tt,P,E,Z,fe,he,pe,Ne,xe,Te,Ge,nt,de,gt,at,Ye,ke,Ae,Qe,pt;function Ct(){He=new ig(Y),Je=new Zm(Y,He,e),He.init(Je),Ae=new U0(Y,He,Je),Le=new N0(Y,He,Je),Tt=new ag(Y),tt=new b0,P=new D0(Y,He,Le,tt,Je,Ae,Tt),E=new Qm(b),Z=new ng(b),fe=new pf(Y,Je),Qe=new jm(Y,He,fe,Je),he=new sg(Y,fe,Tt,Qe),pe=new ug(Y,he,fe,Tt),at=new cg(Y,Je,P),nt=new Km(tt),Ne=new x0(b,E,Z,He,Je,Qe,nt),xe=new F0(b,tt),Te=new S0,Ge=new R0(He,Je),gt=new Ym(b,E,Z,Le,pe,d,l),de=new I0(b,pe,Je),pt=new k0(Y,Tt,Je,Le),Ye=new Jm(Y,He,Tt,Je),ke=new rg(Y,He,Tt,Je),Tt.programs=Ne.programs,b.capabilities=Je,b.extensions=He,b.properties=tt,b.renderLists=Te,b.shadowMap=de,b.state=Le,b.info=Tt}Ct();let st=new ol(b,Y);this.xr=st,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(F,k,!1))},this.getSize=function(R){return R.set(F,k)},this.setSize=function(R,G,K=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,k=G,t.width=Math.floor(R*W),t.height=Math.floor(G*W),K===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(F*W,k*W).floor()},this.setDrawingBufferSize=function(R,G,K){F=R,k=G,W=K,t.width=Math.floor(R*K),t.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,G,K,te){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,G,K,te),Le.viewport(N.copy(re).multiplyScalar(W).floor())},this.getScissor=function(R){return R.copy(ne)},this.setScissor=function(R,G,K,te){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,G,K,te),Le.scissor(ee.copy(ne).multiplyScalar(W).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){Le.setScissorTest(ce=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(R=!0,G=!0,K=!0){let te=0;if(R){let j=!1;if(D!==null){let Me=D.texture.format;j=Me===Bu||Me===ku||Me===Fu}if(j){let Me=D.texture.type,Se=Me===vi||Me===mi||Me===xl||Me===ki||Me===Uu||Me===Ou,De=gt.getClearColor(),We=gt.getClearAlpha(),et=De.r,Ze=De.g,Ke=De.b;Se?(m[0]=et,m[1]=Ze,m[2]=Ke,m[3]=We,Y.clearBufferuiv(Y.COLOR,0,m)):(_[0]=et,_[1]=Ze,_[2]=Ke,_[3]=We,Y.clearBufferiv(Y.COLOR,0,_))}else te|=Y.COLOR_BUFFER_BIT}G&&(te|=Y.DEPTH_BUFFER_BIT),K&&(te|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Te.dispose(),Ge.dispose(),tt.dispose(),E.dispose(),Z.dispose(),pe.dispose(),Qe.dispose(),pt.dispose(),Ne.dispose(),st.dispose(),st.removeEventListener("sessionstart",Gt),st.removeEventListener("sessionend",Mt),ae&&(ae.dispose(),ae=null),$t.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let R=Tt.autoReset,G=de.enabled,K=de.autoUpdate,te=de.needsUpdate,j=de.type;Ct(),Tt.autoReset=R,de.enabled=G,de.autoUpdate=K,de.needsUpdate=te,de.type=j}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){let G=R.target;G.removeEventListener("dispose",ye),Xe(G)}function Xe(R){Ve(R),tt.remove(R)}function Ve(R){let G=tt.get(R).programs;G!==void 0&&(G.forEach(function(K){Ne.releaseProgram(K)}),R.isShaderMaterial&&Ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,te,j,Me){G===null&&(G=Fe);let Se=j.isMesh&&j.matrixWorld.determinant()<0,De=to(R,G,K,te,j);Le.setMaterial(te,Se);let We=K.index,et=1;if(te.wireframe===!0){if(We=he.getWireframeAttribute(K),We===void 0)return;et=2}let Ze=K.drawRange,Ke=K.attributes.position,It=Ze.start*et,tn=(Ze.start+Ze.count)*et;Me!==null&&(It=Math.max(It,Me.start*et),tn=Math.min(tn,(Me.start+Me.count)*et)),We!==null?(It=Math.max(It,0),tn=Math.min(tn,We.count)):Ke!=null&&(It=Math.max(It,0),tn=Math.min(tn,Ke.count));let Ot=tn-It;if(Ot<0||Ot===1/0)return;Qe.setup(j,te,De,K,We);let vn,At=Ye;if(We!==null&&(vn=fe.get(We),At=ke,At.setIndex(vn)),j.isMesh)te.wireframe===!0?(Le.setLineWidth(te.wireframeLinewidth*ut()),At.setMode(Y.LINES)):At.setMode(Y.TRIANGLES);else if(j.isLine){let je=te.linewidth;je===void 0&&(je=1),Le.setLineWidth(je*ut()),j.isLineSegments?At.setMode(Y.LINES):j.isLineLoop?At.setMode(Y.LINE_LOOP):At.setMode(Y.LINE_STRIP)}else j.isPoints?At.setMode(Y.POINTS):j.isSprite&&At.setMode(Y.TRIANGLES);if(j.isBatchedMesh)At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)At.renderInstances(It,Ot,j.count);else if(K.isInstancedBufferGeometry){let je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ys=Math.min(K.instanceCount,je);At.renderInstances(It,Ot,Ys)}else At.render(It,Ot)};function yt(R,G,K){R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,Ji(R,G,K),R.side=Nn,R.needsUpdate=!0,Ji(R,G,K),R.side=An):Ji(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),f=Ge.get(K),f.init(),C.push(f),K.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),R!==K&&R.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),f.setupLights(b._useLegacyLights);let te=new Set;return R.traverse(function(j){let Me=j.material;if(Me)if(Array.isArray(Me))for(let Se=0;Se<Me.length;Se++){let De=Me[Se];yt(De,K,j),te.add(De)}else yt(Me,K,j),te.add(Me)}),C.pop(),f=null,te},this.compileAsync=function(R,G,K=null){let te=this.compile(R,G,K);return new Promise(j=>{function Me(){if(te.forEach(function(Se){tt.get(Se).currentProgram.isReady()&&te.delete(Se)}),te.size===0){j(R);return}setTimeout(Me,10)}He.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let bt=null;function _t(R){bt&&bt(R)}function Gt(){$t.stop()}function Mt(){$t.start()}let $t=new Xu;$t.setAnimationLoop(_t),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(R){bt=R,st.setAnimationLoop(R),R===null?$t.stop():$t.start()},st.addEventListener("sessionstart",Gt),st.addEventListener("sessionend",Mt),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(G),G=st.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,G,D),f=Ge.get(R,C.length),f.init(),C.push(f),oe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),V.setFromProjectionMatrix(oe),se=this.localClippingEnabled,J=nt.init(this.clippingPlanes,se),v=Te.get(R,p.length),v.init(),p.push(v),_n(R,G,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort($,X),this.info.render.frame++,J===!0&&nt.beginShadows();let K=f.state.shadowsArray;if(de.render(K,R,G),J===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),gt.render(v,R),f.setupLights(b._useLegacyLights),G.isArrayCamera){let te=G.cameras;for(let j=0,Me=te.length;j<Me;j++){let Se=te[j];Lr(v,R,Se,Se.viewport)}}else Lr(v,R,G);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(b,R,G),Qe.resetDefaultState(),q=-1,S=null,C.pop(),C.length>0?f=C[C.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function _n(R,G,K,te){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||V.intersectsSprite(R)){te&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);let Se=pe.update(R),De=R.material;De.visible&&v.push(R,Se,De,K,Oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||V.intersectsObject(R))){let Se=pe.update(R),De=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(De)){let We=Se.groups;for(let et=0,Ze=We.length;et<Ze;et++){let Ke=We[et],It=De[Ke.materialIndex];It&&It.visible&&v.push(R,Se,It,K,Oe.z,Ke)}}else De.visible&&v.push(R,Se,De,K,Oe.z,null)}}let Me=R.children;for(let Se=0,De=Me.length;Se<De;Se++)_n(Me[Se],G,K,te)}function Lr(R,G,K,te){let j=R.opaque,Me=R.transmissive,Se=R.transparent;f.setupLightsView(K),J===!0&&nt.setGlobalState(b.clippingPlanes,K),Me.length>0&&eo(j,Me,G,K),te&&Le.viewport(N.copy(te)),j.length>0&&ji(j,G,K),Me.length>0&&ji(Me,G,K),Se.length>0&&ji(Se,G,K),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function eo(R,G,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Me=Je.isWebGL2;ae===null&&(ae=new ni(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?lr:vi,minFilter:xi,samples:Me?4:0})),b.getDrawingBufferSize(we),Me?ae.setSize(we.x,we.y):ae.setSize(pa(we.x),pa(we.y));let Se=b.getRenderTarget();b.setRenderTarget(ae),b.getClearColor(H),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear();let De=b.toneMapping;b.toneMapping=_i,ji(R,K,te),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae);let We=!1;for(let et=0,Ze=G.length;et<Ze;et++){let Ke=G[et],It=Ke.object,tn=Ke.geometry,Ot=Ke.material,vn=Ke.group;if(Ot.side===An&&It.layers.test(te.layers)){let At=Ot.side;Ot.side=ln,Ot.needsUpdate=!0,Xs(It,K,te,tn,Ot,vn),Ot.side=At,Ot.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae)),b.setRenderTarget(Se),b.setClearColor(H,O),b.toneMapping=De}function ji(R,G,K){let te=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Me=R.length;j<Me;j++){let Se=R[j],De=Se.object,We=Se.geometry,et=te===null?Se.material:te,Ze=Se.group;De.layers.test(K.layers)&&Xs(De,G,K,We,et,Ze)}}function Xs(R,G,K,te,j,Me){R.onBeforeRender(b,G,K,te,j,Me),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(b,G,K,te,R,Me),j.transparent===!0&&j.side===An&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,b.renderBufferDirect(K,G,te,j,R,Me),j.side=Nn,j.needsUpdate=!0,b.renderBufferDirect(K,G,te,j,R,Me),j.side=An):b.renderBufferDirect(K,G,te,j,R,Me),R.onAfterRender(b,G,K,te,j,Me)}function Ji(R,G,K){G.isScene!==!0&&(G=Fe);let te=tt.get(R),j=f.state.lights,Me=f.state.shadowsArray,Se=j.state.version,De=Ne.getParameters(R,j.state,Me,G,K),We=Ne.getProgramCacheKey(De),et=te.programs;te.environment=R.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||te.environment),et===void 0&&(R.addEventListener("dispose",ye),et=new Map,te.programs=et);let Ze=et.get(We);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===Se)return Pr(R,De),Ze}else De.uniforms=Ne.getUniforms(R),R.onBuild(K,De,b),R.onBeforeCompile(De,b),Ze=Ne.acquireProgram(De,We),et.set(We,Ze),te.uniforms=De.uniforms;let Ke=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=nt.uniform),Pr(R,De),te.needsLights=io(R),te.lightsStateVersion=Se,te.needsLights&&(Ke.ambientLightColor.value=j.state.ambient,Ke.lightProbe.value=j.state.probe,Ke.directionalLights.value=j.state.directional,Ke.directionalLightShadows.value=j.state.directionalShadow,Ke.spotLights.value=j.state.spot,Ke.spotLightShadows.value=j.state.spotShadow,Ke.rectAreaLights.value=j.state.rectArea,Ke.ltc_1.value=j.state.rectAreaLTC1,Ke.ltc_2.value=j.state.rectAreaLTC2,Ke.pointLights.value=j.state.point,Ke.pointLightShadows.value=j.state.pointShadow,Ke.hemisphereLights.value=j.state.hemi,Ke.directionalShadowMap.value=j.state.directionalShadowMap,Ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ke.spotShadowMap.value=j.state.spotShadowMap,Ke.spotLightMatrix.value=j.state.spotLightMatrix,Ke.spotLightMap.value=j.state.spotLightMap,Ke.pointShadowMap.value=j.state.pointShadowMap,Ke.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=Ze,te.uniformsList=null,Ze}function $s(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=xs.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Pr(R,G){let K=tt.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function to(R,G,K,te,j){G.isScene!==!0&&(G=Fe),P.resetTextureUnits();let Me=G.fog,Se=te.isMeshStandardMaterial?G.environment:null,De=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ti,We=(te.isMeshStandardMaterial?Z:E).get(te.envMap||Se),et=te.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!K.morphAttributes.position,It=!!K.morphAttributes.normal,tn=!!K.morphAttributes.color,Ot=_i;te.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ot=b.toneMapping);let vn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=vn!==void 0?vn.length:0,je=tt.get(te),Ys=f.state.lights;if(J===!0&&(se===!0||R!==S)){let Jt=R===S&&te.id===q;nt.setState(te,R,Jt)}let Rt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ys.state.version||je.outputColorSpace!==De||j.isBatchedMesh&&je.batching===!1||!j.isBatchedMesh&&je.batching===!0||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||je.envMap!==We||te.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==nt.numPlanes||je.numIntersection!==nt.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Ze||je.morphTargets!==Ke||je.morphNormals!==It||je.morphColors!==tn||je.toneMapping!==Ot||Je.isWebGL2===!0&&je.morphTargetsCount!==At)&&(Rt=!0):(Rt=!0,je.__version=te.version);let Gn=je.currentProgram;Rt===!0&&(Gn=Ji(te,G,j));let js=!1,Li=!1,Js=!1,Wt=Gn.getUniforms(),Pn=je.uniforms;if(Le.useProgram(Gn.program)&&(js=!0,Li=!0,Js=!0),te.id!==q&&(q=te.id,Li=!0),js||S!==R){Wt.setValue(Y,"projectionMatrix",R.projectionMatrix),Wt.setValue(Y,"viewMatrix",R.matrixWorldInverse);let Jt=Wt.map.cameraPosition;Jt!==void 0&&Jt.setValue(Y,Oe.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&Wt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Wt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Li=!0,Js=!0)}if(j.isSkinnedMesh){Wt.setOptional(Y,j,"bindMatrix"),Wt.setOptional(Y,j,"bindMatrixInverse");let Jt=j.skeleton;Jt&&(Je.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Wt.setValue(Y,"boneTexture",Jt.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Wt.setOptional(Y,j,"batchingTexture"),Wt.setValue(Y,"batchingTexture",j._matricesTexture,P));let Nt=K.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0&&Je.isWebGL2===!0)&&at.update(j,K,Gn),(Li||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Wt.setValue(Y,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Pn.envMap.value=We,Pn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Li&&(Wt.setValue(Y,"toneMappingExposure",b.toneMappingExposure),je.needsLights&&no(Pn,Js),Me&&te.fog===!0&&xe.refreshFogUniforms(Pn,Me),xe.refreshMaterialUniforms(Pn,te,W,k,ae),xs.upload(Y,$s(je),Pn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(xs.upload(Y,$s(je),Pn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Wt.setValue(Y,"center",j.center),Wt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),Wt.setValue(Y,"normalMatrix",j.normalMatrix),Wt.setValue(Y,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Jt=te.uniformsGroups;for(let Zs=0,Ir=Jt.length;Zs<Ir;Zs++)if(Je.isWebGL2){let Ks=Jt[Zs];pt.update(Ks,Gn),pt.bind(Ks,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function no(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function io(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,G,K){tt.get(R.texture).__webglTexture=G,tt.get(R.depthTexture).__webglTexture=K;let te=tt.get(R);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=K===void 0,te.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){let K=tt.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){D=R,U=G,A=K;let te=!0,j=null,Me=!1,Se=!1;if(R){let We=tt.get(R);We.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(Y.FRAMEBUFFER,null),te=!1):We.__webglFramebuffer===void 0?P.setupRenderTarget(R):We.__hasExternalTextures&&P.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);let et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Se=!0);let Ze=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?j=Ze[G][K]:j=Ze[G],Me=!0):Je.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?j=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[K]:j=Ze,N.copy(R.viewport),ee.copy(R.scissor),le=R.scissorTest}else N.copy(re).multiplyScalar(W).floor(),ee.copy(ne).multiplyScalar(W).floor(),le=ce;if(Le.bindFramebuffer(Y.FRAMEBUFFER,j)&&Je.drawBuffers&&te&&Le.drawBuffers(R,j),Le.viewport(N),Le.scissor(ee),Le.setScissorTest(le),Me){let We=tt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+G,We.__webglTexture,K)}else if(Se){let We=tt.get(R.texture),et=G||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,We.__webglTexture,K||0,et)}q=-1},this.readRenderTargetPixels=function(R,G,K,te,j,Me,Se){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(De=De[Se]),De){Le.bindFramebuffer(Y.FRAMEBUFFER,De);try{let We=R.texture,et=We.format,Ze=We.type;if(et!==xn&&Ae.convert(et)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=Ze===lr&&(He.has("EXT_color_buffer_half_float")||Je.isWebGL2&&He.has("EXT_color_buffer_float"));if(Ze!==vi&&Ae.convert(Ze)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Qn&&(Je.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-te&&K>=0&&K<=R.height-j&&Y.readPixels(G,K,te,j,Ae.convert(et),Ae.convert(Ze),Me)}finally{let We=D!==null?tt.get(D).__webglFramebuffer:null;Le.bindFramebuffer(Y.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(R,G,K=0){let te=Math.pow(2,-K),j=Math.floor(G.image.width*te),Me=Math.floor(G.image.height*te);P.setTexture2D(G,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,K,0,0,R.x,R.y,j,Me),Le.unbindTexture()},this.copyTextureToTexture=function(R,G,K,te=0){let j=G.image.width,Me=G.image.height,Se=Ae.convert(K.format),De=Ae.convert(K.type);P.setTexture2D(K,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,te,R.x,R.y,j,Me,Se,De,G.image.data):G.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,te,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Se,G.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,te,R.x,R.y,Se,De,G.image),te===0&&K.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K,te,j=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=R.max.x-R.min.x+1,Se=R.max.y-R.min.y+1,De=R.max.z-R.min.z+1,We=Ae.convert(te.format),et=Ae.convert(te.type),Ze;if(te.isData3DTexture)P.setTexture3D(te,0),Ze=Y.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)P.setTexture2DArray(te,0),Ze=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,te.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,te.unpackAlignment);let Ke=Y.getParameter(Y.UNPACK_ROW_LENGTH),It=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),tn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ot=Y.getParameter(Y.UNPACK_SKIP_ROWS),vn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),At=K.isCompressedTexture?K.mipmaps[j]:K.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,At.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,At.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,R.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,R.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?Y.texSubImage3D(Ze,j,G.x,G.y,G.z,Me,Se,De,We,et,At.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ze,j,G.x,G.y,G.z,Me,Se,De,We,At.data)):Y.texSubImage3D(Ze,j,G.x,G.y,G.z,Me,Se,De,We,et,At),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ke),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,It),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,tn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ot),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,vn),j===0&&te.generateMipmaps&&Y.generateMipmap(Ze),Le.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){U=0,A=0,D=null,Le.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ml?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?zi:Hu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zi?Ut:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ll=class extends fr{};ll.prototype.isWebGL1Renderer=!0;var As=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var _u=new z,vu=new Et,yu=new Et,B0=new z,xu=new ot,sa=new z,Uo=new Mi,bu=new ot,Oo=new ur,Ta=class extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ec,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(s),e.ray.intersectsSphere(Uo)!==!1&&(bu.copy(s).invert(),Oo.copy(e.ray).applyMatrix4(bu),!(this.boundingBox!==null&&Oo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;vu.fromBufferAttribute(s.attributes.skinIndex,e),yu.fromBufferAttribute(s.attributes.skinWeight,e),_u.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=yu.getComponent(r);if(o!==0){let a=vu.getComponent(r);xu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(B0.copy(_u).applyMatrix4(xu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},pr=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Aa=class extends pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Yt,u=Yt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mu=new ot,z0=new ot,Ca=class n{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:z0;Mu.multiplyMatrices(a,t[r]),Mu.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Aa(t,e,e,xn,Qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new pr),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Cs=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Su=new z,wu=new z,Eu=new ot,Fo=new ur,ra=new Mi,mr=class extends zt{constructor(e=new On,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Su.fromBufferAttribute(t,s-1),wu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Su.distanceTo(wu);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Eu.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,h=new z,d=new z,m=this.isLineSegments?2:1,_=i.index,f=i.attributes.position;if(_!==null){let p=Math.max(0,o.start),C=Math.min(_.count,o.start+o.count);for(let b=p,I=C-1;b<I;b+=m){let U=_.getX(b),A=_.getX(b+1);if(c.fromBufferAttribute(f,U),u.fromBufferAttribute(f,A),Fo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(d);q<e.near||q>e.far||t.push({distance:q,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),C=Math.min(f.count,o.start+o.count);for(let b=p,I=C-1;b<I;b+=m){if(c.fromBufferAttribute(f,b),u.fromBufferAttribute(f,b+1),Fo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Tu=new z,Au=new z,Ra=class extends mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Tu.fromBufferAttribute(t,s),Au.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Tu.distanceTo(Au);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gr=class extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Hi=class extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function aa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function H0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function V0(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Cu(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Ku(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Rs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Rs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:r=e,a=2*t-i;break;case Rc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:o=e,l=2*i-t;break;case Rc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-t)/(s-t),v=_*_,f=v*_,p=-d*f+2*d*v-d*_,C=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*_+1,b=(-1-m)*f+(1.5+m)*v+.5*_,I=m*f-m*v;for(let U=0;U!==a;++U)r[U]=p*o[u+U]+C*o[c+U]+b*o[l+U]+I*o[h+U];return r}},ul=class extends Rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},hl=class extends Rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&H0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ho,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,m=h+i;for(let _=0;_!==i;++_){let v=t[h+_];if(v!==t[d+_]||v!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ca;var Si=class extends Sn{};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=la;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Sn{};La.prototype.ValueTypeName="color";var Ls=class extends Sn{};Ls.prototype.ValueTypeName="number";var dl=class extends Rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ri=class extends Sn{InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=ca;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends Sn{};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=la;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends Sn{};ai.prototype.ValueTypeName="vector";var _r=class{constructor(e,t=-1,i,s=bd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(W0(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Sn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=V0(l);l=Cu(l,1,u),c=Cu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ls(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,d,m,_,v){if(m.length!==0){let f=[],p=[];Ku(m,f,p,_),f.length!==0&&v.push(new h(d,f,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let v=0;v<d[_].morphTargets.length;v++)m[d[_].morphTargets[v]]=-1;for(let v in m){let f=[],p=[];for(let C=0;C!==d[_].morphTargets.length;++C){let b=d[_];f.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new Ls(".morphTargetInfluence["+v+"]",f,p))}l=m.length*o}else{let m=".bones["+t[h].name+"]";i(ai,m+".position",d,"pos",s),i(ri,m+".quaternion",d,"rot",s),i(ai,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function G0(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return ai;case"color":return La;case"quaternion":return ri;case"bool":case"boolean":return Si;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function W0(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=G0(n.type);if(n.times===void 0){let t=[],i=[];Ku(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Pa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},vr=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}},q0=new vr,Fn=class{constructor(e){this.manager=e!==void 0?e:q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jn={},fl=class extends Error{constructor(e,t){super(e),this.response=t}},yr=class extends Fn{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:i,onError:s});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Jn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0,v=0,f=new ReadableStream({start(p){C();function C(){h.read().then(({done:b,value:I})=>{if(b)p.close();else{v+=I.byteLength;let U=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let A=0,D=u.length;A<D;A++){let q=u[A];q.onProgress&&q.onProgress(U)}p.enqueue(I),C()}})}}});return new Response(f)}else throw new fl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Pa.add(e,c);let u=Jn[e];delete Jn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=Jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var pl=class extends Fn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pa.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=cr("img");function l(){u(),Pa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ia=class extends Fn{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new Aa,a=new yr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Qt,o.wrapT=c.wrapT!==void 0?c.wrapT:Qt,o.magFilter=c.magFilter!==void 0?c.magFilter:rn,o.minFilter=c.minFilter!==void 0?c.minFilter:rn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=xi),c.mipmapCount===1&&(o.minFilter=rn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},Na=class extends Fn{constructor(e){super(e)}load(e,t,i,s){let r=new pn,o=new pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Vi=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Da=class extends Vi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ko=new ot,Ru=new z,Lu=new z,xr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ml=class extends xr{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ua=class extends Vi{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ml}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pu=new ot,ir=new z,Bo=new z,gl=class extends xr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),i.position.copy(ir),Bo.copy(i.position),Bo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bo),i.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Pu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}},Oa=class extends Vi{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_l=class extends xr{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Vi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fa=class extends Vi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ka=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var El="\\[\\]\\.:\\/",X0=new RegExp("["+El+"]","g"),Tl="[^"+El+"]",$0="[^"+El.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",Tl),j0=/(WCOD+)?/.source.replace("WCOD",$0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),Z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),K0=new RegExp("^"+Y0+j0+J0+Z0+"$"),Q0=["material","materials","bones","map"],vl=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(e){let t=K0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Q0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=vl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);var br=class extends Ia{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case d:case v:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case _:case f:case p:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function i(k,W,$,X,re){let ne,ce,V=$.pixel_size>>3,J=$.width*$.height*V;if(W&&(ce=re.subarray(X,X+=$.colormap_length*($.colormap_size>>3))),k){ne=new Uint8Array(J);let se,ae,oe,we=0,Oe=new Uint8Array(V);for(;we<J;)if(se=re[X++],ae=(se&127)+1,se&128){for(oe=0;oe<V;++oe)Oe[oe]=re[X++];for(oe=0;oe<ae;++oe)ne.set(Oe,we+oe*V);we+=V*ae}else{for(ae*=V,oe=0;oe<ae;++oe)ne[we+oe]=re[X++];we+=ae}}else ne=re.subarray(X,X+=W?$.width*$.height:J);return{pixel_data:ne,palettes:ce}}function s(k,W,$,X,re,ne,ce,V,J){let se=J,ae,oe=0,we,Oe,Fe=N.width;for(Oe=W;Oe!==X;Oe+=$)for(we=re;we!==ce;we+=ne,oe++)ae=V[oe],k[(we+Fe*Oe)*4+3]=255,k[(we+Fe*Oe)*4+2]=se[ae*3+0],k[(we+Fe*Oe)*4+1]=se[ae*3+1],k[(we+Fe*Oe)*4+0]=se[ae*3+2];return k}function r(k,W,$,X,re,ne,ce,V){let J,se=0,ae,oe,we=N.width;for(oe=W;oe!==X;oe+=$)for(ae=re;ae!==ce;ae+=ne,se+=2)J=V[se+0]+(V[se+1]<<8),k[(ae+we*oe)*4+0]=(J&31744)>>7,k[(ae+we*oe)*4+1]=(J&992)>>2,k[(ae+we*oe)*4+2]=(J&31)<<3,k[(ae+we*oe)*4+3]=J&32768?0:255;return k}function o(k,W,$,X,re,ne,ce,V){let J=0,se,ae,oe=N.width;for(ae=W;ae!==X;ae+=$)for(se=re;se!==ce;se+=ne,J+=3)k[(se+oe*ae)*4+3]=255,k[(se+oe*ae)*4+2]=V[J+0],k[(se+oe*ae)*4+1]=V[J+1],k[(se+oe*ae)*4+0]=V[J+2];return k}function a(k,W,$,X,re,ne,ce,V){let J=0,se,ae,oe=N.width;for(ae=W;ae!==X;ae+=$)for(se=re;se!==ce;se+=ne,J+=4)k[(se+oe*ae)*4+2]=V[J+0],k[(se+oe*ae)*4+1]=V[J+1],k[(se+oe*ae)*4+0]=V[J+2],k[(se+oe*ae)*4+3]=V[J+3];return k}function l(k,W,$,X,re,ne,ce,V){let J,se=0,ae,oe,we=N.width;for(oe=W;oe!==X;oe+=$)for(ae=re;ae!==ce;ae+=ne,se++)J=V[se],k[(ae+we*oe)*4+0]=J,k[(ae+we*oe)*4+1]=J,k[(ae+we*oe)*4+2]=J,k[(ae+we*oe)*4+3]=255;return k}function c(k,W,$,X,re,ne,ce,V){let J=0,se,ae,oe=N.width;for(ae=W;ae!==X;ae+=$)for(se=re;se!==ce;se+=ne,J+=2)k[(se+oe*ae)*4+0]=V[J+0],k[(se+oe*ae)*4+1]=V[J+0],k[(se+oe*ae)*4+2]=V[J+0],k[(se+oe*ae)*4+3]=V[J+1];return k}function u(k,W,$,X,re){let ne,ce,V,J,se,ae;switch((N.flags&C)>>b){default:case A:ne=0,V=1,se=W,ce=0,J=1,ae=$;break;case I:ne=0,V=1,se=W,ce=$-1,J=-1,ae=-1;break;case D:ne=W-1,V=-1,se=-1,ce=0,J=1,ae=$;break;case U:ne=W-1,V=-1,se=-1,ce=$-1,J=-1,ae=-1;break}if(H)switch(N.pixel_size){case 8:l(k,ce,J,ae,ne,V,se,X);break;case 16:c(k,ce,J,ae,ne,V,se,X);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(N.pixel_size){case 8:s(k,ce,J,ae,ne,V,se,X,re);break;case 16:r(k,ce,J,ae,ne,V,se,X);break;case 24:o(k,ce,J,ae,ne,V,se,X);break;case 32:a(k,ce,J,ae,ne,V,se,X);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}let h=0,d=1,m=2,_=3,v=9,f=10,p=11,C=48,b=4,I=0,U=1,A=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let q=0,S=new Uint8Array(e),N={id_length:S[q++],colormap_type:S[q++],image_type:S[q++],colormap_index:S[q++]|S[q++]<<8,colormap_length:S[q++]|S[q++]<<8,colormap_size:S[q++],origin:[S[q++]|S[q++]<<8,S[q++]|S[q++]<<8],width:S[q++]|S[q++]<<8,height:S[q++]|S[q++]<<8,pixel_size:S[q++],flags:S[q++]};if(t(N),N.id_length+q>e.length)throw new Error("THREE.TGALoader: No data.");q+=N.id_length;let ee=!1,le=!1,H=!1;switch(N.image_type){case v:ee=!0,le=!0;break;case d:le=!0;break;case f:ee=!0;break;case m:break;case p:ee=!0,H=!0;break;case _:H=!0;break}let O=new Uint8Array(N.width*N.height*4),F=i(ee,le,N,q,S);return u(O,N.width,N.height,F.pixel_data,F.palettes),{data:O,width:N.width,height:N.height,flipY:!0,generateMipmaps:!0,minFilter:xi}}};var Ga=class extends Fn{load(e,t,i,s){let r=this,o=r.path===""?ka.extractUrlBase(e):r.path,a=new yr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(x,y){let w=[],M=x.childNodes;for(let T=0,Q=M.length;T<Q;T++){let ie=M[T];ie.nodeName===y&&w.push(ie)}return w}function s(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),w=new Array(y.length);for(let M=0,T=y.length;M<T;M++)w[M]=y[M];return w}function r(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),w=new Array(y.length);for(let M=0,T=y.length;M<T;M++)w[M]=parseFloat(y[M]);return w}function o(x){if(x.length===0)return[];let y=x.trim().split(/\s+/),w=new Array(y.length);for(let M=0,T=y.length;M<T;M++)w[M]=parseInt(y[M]);return w}function a(x){return x.substring(1)}function l(){return"three_default_"+Rh++}function c(x){return Object.keys(x).length===0}function u(x){return{unit:h(i(x,"unit")[0]),upAxis:d(i(x,"up_axis")[0])}}function h(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function d(x){return x!==void 0?x.textContent:"Y_UP"}function m(x,y,w,M){let T=i(x,y)[0];if(T!==void 0){let Q=i(T,w);for(let ie=0;ie<Q.length;ie++)M(Q[ie])}}function _(x,y){for(let w in x){let M=x[w];M.build=y(x[w])}}function v(x,y){return x.build!==void 0||(x.build=y(x)),x.build}function f(x){let y={sources:{},samplers:{},channels:{}},w=!1;for(let M=0,T=x.childNodes.length;M<T;M++){let Q=x.childNodes[M];if(Q.nodeType!==1)continue;let ie;switch(Q.nodeName){case"source":ie=Q.getAttribute("id"),y.sources[ie]=B(Q);break;case"sampler":ie=Q.getAttribute("id"),y.samplers[ie]=p(Q);break;case"channel":ie=Q.getAttribute("target"),y.channels[ie]=C(Q);break;case"animation":f(Q),w=!0;break;default:console.log(Q)}}w===!1&&(qe.animations[x.getAttribute("id")||Is.generateUUID()]=y)}function p(x){let y={inputs:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let Q=a(T.getAttribute("source")),ie=T.getAttribute("semantic");y.inputs[ie]=Q;break}}return y}function C(x){let y={},M=x.getAttribute("target").split("/"),T=M.shift(),Q=M.shift(),ie=Q.indexOf("(")!==-1,Ee=Q.indexOf(".")!==-1;if(Ee)M=Q.split("."),Q=M.shift(),y.member=M.shift();else if(ie){let ge=Q.split("(");Q=ge.shift();for(let be=0;be<ge.length;be++)ge[be]=parseInt(ge[be].replace(/\)/,""));y.indices=ge}return y.id=T,y.sid=Q,y.arraySyntax=ie,y.memberSyntax=Ee,y.sampler=a(x.getAttribute("source")),y}function b(x){let y=[],w=x.channels,M=x.samplers,T=x.sources;for(let Q in w)if(w.hasOwnProperty(Q)){let ie=w[Q],Ee=M[ie.sampler],ge=Ee.inputs.INPUT,be=Ee.inputs.OUTPUT,Ie=T[ge],ue=T[be],Pe=U(ie,Ie,ue);N(Pe,y)}return y}function I(x){return v(qe.animations[x],b)}function U(x,y,w){let M=qe.nodes[x.id],T=je(M.id),Q=M.transforms[x.sid],ie=M.matrix.clone().transpose(),Ee,ge,be,Ie,ue,Pe,Ce={};switch(Q){case"matrix":for(be=0,Ie=y.array.length;be<Ie;be++)if(Ee=y.array[be],ge=be*w.stride,Ce[Ee]===void 0&&(Ce[Ee]={}),x.arraySyntax===!0){let Dt=w.array[ge],xt=x.indices[0]+4*x.indices[1];Ce[Ee][xt]=Dt}else for(ue=0,Pe=w.stride;ue<Pe;ue++)Ce[Ee][ue]=w.array[ge+ue];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}let Be=A(Ce,ie);return{name:T.uuid,keyframes:Be}}function A(x,y){let w=[];for(let T in x)w.push({time:parseFloat(T),value:x[T]});w.sort(M);for(let T=0;T<16;T++)ee(w,T,y.elements[T]);return w;function M(T,Q){return T.time-Q.time}}let D=new z,q=new z,S=new Dn;function N(x,y){let w=x.keyframes,M=x.name,T=[],Q=[],ie=[],Ee=[];for(let ge=0,be=w.length;ge<be;ge++){let Ie=w[ge],ue=Ie.time,Pe=Ie.value;Se.fromArray(Pe).transpose(),Se.decompose(D,S,q),T.push(ue),Q.push(D.x,D.y,D.z),ie.push(S.x,S.y,S.z,S.w),Ee.push(q.x,q.y,q.z)}return Q.length>0&&y.push(new ai(M+".position",T,Q)),ie.length>0&&y.push(new ri(M+".quaternion",T,ie)),Ee.length>0&&y.push(new ai(M+".scale",T,Ee)),y}function ee(x,y,w){let M,T=!0,Q,ie;for(Q=0,ie=x.length;Q<ie;Q++)M=x[Q],M.value[y]===void 0?M.value[y]=null:T=!1;if(T===!0)for(Q=0,ie=x.length;Q<ie;Q++)M=x[Q],M.value[y]=w;else le(x,y)}function le(x,y){let w,M;for(let T=0,Q=x.length;T<Q;T++){let ie=x[T];if(ie.value[y]===null){if(w=H(x,T,y),M=O(x,T,y),w===null){ie.value[y]=M.value[y];continue}if(M===null){ie.value[y]=w.value[y];continue}F(ie,w,M,y)}}}function H(x,y,w){for(;y>=0;){let M=x[y];if(M.value[w]!==null)return M;y--}return null}function O(x,y,w){for(;y<x.length;){let M=x[y];if(M.value[w]!==null)return M;y++}return null}function F(x,y,w,M){if(w.time-y.time===0){x.value[M]=y.value[M];return}x.value[M]=(x.time-y.time)*(w.value[M]-y.value[M])/(w.time-y.time)+y.value[M]}function k(x){let y={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"instance_animation":y.animations.push(a(T.getAttribute("url")));break}}qe.clips[x.getAttribute("id")]=y}function W(x){let y=[],w=x.name,M=x.end-x.start||-1,T=x.animations;for(let Q=0,ie=T.length;Q<ie;Q++){let Ee=I(T[Q]);for(let ge=0,be=Ee.length;ge<be;ge++)y.push(Ee[ge])}return new _r(w,M,y)}function $(x){return v(qe.clips[x],W)}function X(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"skin":y.id=a(T.getAttribute("source")),y.skin=re(T);break;case"morph":y.id=a(T.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}qe.controllers[x.getAttribute("id")]=y}function re(x){let y={sources:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(T.textContent);break;case"source":let Q=T.getAttribute("id");y.sources[Q]=B(T);break;case"joints":y.joints=ne(T);break;case"vertex_weights":y.vertexWeights=ce(T);break}}return y}function ne(x){let y={inputs:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let Q=T.getAttribute("semantic"),ie=a(T.getAttribute("source"));y.inputs[Q]=ie;break}}return y}function ce(x){let y={inputs:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let Q=T.getAttribute("semantic"),ie=a(T.getAttribute("source")),Ee=parseInt(T.getAttribute("offset"));y.inputs[Q]={id:ie,offset:Ee};break;case"vcount":y.vcount=o(T.textContent);break;case"v":y.v=o(T.textContent);break}}return y}function V(x){let y={id:x.id},w=qe.geometries[y.id];return x.skin!==void 0&&(y.skin=J(x.skin),w.sources.skinIndices=y.skin.indices,w.sources.skinWeights=y.skin.weights),y}function J(x){let w={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=x.sources,T=x.vertexWeights,Q=T.vcount,ie=T.v,Ee=T.inputs.JOINT.offset,ge=T.inputs.WEIGHT.offset,be=x.sources[x.joints.inputs.JOINT],Ie=x.sources[x.joints.inputs.INV_BIND_MATRIX],ue=M[T.inputs.WEIGHT.id].array,Pe=0,Ce,Be,Ue;for(Ce=0,Ue=Q.length;Ce<Ue;Ce++){let xt=Q[Ce],dt=[];for(Be=0;Be<xt;Be++){let ft=ie[Pe+Ee],Wn=ie[Pe+ge],on=ue[Wn];dt.push({index:ft,weight:on}),Pe+=2}for(dt.sort(Dt),Be=0;Be<4;Be++){let ft=dt[Be];ft!==void 0?(w.indices.array.push(ft.index),w.weights.array.push(ft.weight)):(w.indices.array.push(0),w.weights.array.push(0))}}for(x.bindShapeMatrix?w.bindMatrix=new ot().fromArray(x.bindShapeMatrix).transpose():w.bindMatrix=new ot().identity(),Ce=0,Ue=be.array.length;Ce<Ue;Ce++){let xt=be.array[Ce],dt=new ot().fromArray(Ie.array,Ce*Ie.stride).transpose();w.joints.push({name:xt,boneInverse:dt})}return w;function Dt(xt,dt){return dt.weight-xt.weight}}function se(x){return v(qe.controllers[x],V)}function ae(x){let y={init_from:i(x,"init_from")[0].textContent};qe.images[x.getAttribute("id")]=y}function oe(x){return x.build!==void 0?x.build:x.init_from}function we(x){let y=qe.images[x];return y!==void 0?v(y,oe):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function Oe(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"profile_COMMON":y.profile=Fe(T);break}}qe.effects[x.getAttribute("id")]=y}function Fe(x){let y={surfaces:{},samplers:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"newparam":ut(T,y);break;case"technique":y.technique=He(T);break;case"extra":y.extra=E(T);break}}return y}function ut(x,y){let w=x.getAttribute("sid");for(let M=0,T=x.childNodes.length;M<T;M++){let Q=x.childNodes[M];if(Q.nodeType===1)switch(Q.nodeName){case"surface":y.surfaces[w]=Y(Q);break;case"sampler2D":y.samplers[w]=Xt(Q);break}}}function Y(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"init_from":y.init_from=T.textContent;break}}return y}function Xt(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"source":y.source=T.textContent;break}}return y}function He(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=T.nodeName,y.parameters=Je(T);break;case"extra":y.extra=E(T);break}}return y}function Je(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[T.nodeName]=Le(T);break;case"transparent":y[T.nodeName]={opaque:T.hasAttribute("opaque")?T.getAttribute("opaque"):"A_ONE",data:Le(T)};break}}return y}function Le(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"color":y[T.nodeName]=r(T.textContent);break;case"float":y[T.nodeName]=parseFloat(T.textContent);break;case"texture":y[T.nodeName]={id:T.getAttribute("texture"),extra:Tt(T)};break}}return y}function Tt(x){let y={technique:{}};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"extra":tt(T,y);break}}return y}function tt(x,y){for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique":P(T,y);break}}}function P(x,y){for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[T.nodeName]=parseFloat(T.textContent);break;case"wrapU":case"wrapV":T.textContent.toUpperCase()==="TRUE"?y.technique[T.nodeName]=1:T.textContent.toUpperCase()==="FALSE"?y.technique[T.nodeName]=0:y.technique[T.nodeName]=parseInt(T.textContent);break;case"bump":y[T.nodeName]=fe(T);break}}}function E(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique":y.technique=Z(T);break}}return y}function Z(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"double_sided":y[T.nodeName]=parseInt(T.textContent);break;case"bump":y[T.nodeName]=fe(T);break}}return y}function fe(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"texture":y[T.nodeName]={id:T.getAttribute("texture"),texcoord:T.getAttribute("texcoord"),extra:Tt(T)};break}}return y}function he(x){return x}function pe(x){return v(qe.effects[x],he)}function Ne(x){let y={name:x.getAttribute("name")};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"instance_effect":y.url=a(T.getAttribute("url"));break}}qe.materials[x.getAttribute("id")]=y}function xe(x){let y,w=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":y=so;break;default:y=Ks}return y}function Te(x){let y=pe(x.url),w=y.profile.technique,M;switch(w.type){case"phong":case"blinn":M=new gr;break;case"lambert":M=new Hi;break;default:M=new Un;break}M.name=x.name||"";function T(ge,be=null){let Ie=y.profile.samplers[ge.id],ue=null;if(Ie!==void 0){let Pe=y.profile.surfaces[Ie.source];ue=we(Pe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ue=we(ge.id);if(ue!==null){let Pe=xe(ue);if(Pe!==void 0){let Ce=Pe.load(ue),Be=ge.extra;if(Be!==void 0&&Be.technique!==void 0&&c(Be.technique)===!1){let Ue=Be.technique;Ce.wrapS=Ue.wrapU?yi:Qt,Ce.wrapT=Ue.wrapV?yi:Qt,Ce.offset.set(Ue.offsetU||0,Ue.offsetV||0),Ce.repeat.set(Ue.repeatU||1,Ue.repeatV||1)}else Ce.wrapS=yi,Ce.wrapT=yi;return be!==null&&(Ce.colorSpace=be),Ce}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ue),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ge.id),null}let Q=w.parameters;for(let ge in Q){let be=Q[ge];switch(ge){case"diffuse":be.color&&M.color.fromArray(be.color),be.texture&&(M.map=T(be.texture,Ut));break;case"specular":be.color&&M.specular&&M.specular.fromArray(be.color),be.texture&&(M.specularMap=T(be.texture));break;case"bump":be.texture&&(M.normalMap=T(be.texture));break;case"ambient":be.texture&&(M.lightMap=T(be.texture,Ut));break;case"shininess":be.float&&M.shininess&&(M.shininess=be.float);break;case"emission":be.color&&M.emissive&&M.emissive.fromArray(be.color),be.texture&&(M.emissiveMap=T(be.texture,Ut));break}}M.color.convertSRGBToLinear(),M.specular&&M.specular.convertSRGBToLinear(),M.emissive&&M.emissive.convertSRGBToLinear();let ie=Q.transparent,Ee=Q.transparency;if(Ee===void 0&&ie&&(Ee={float:1}),ie===void 0&&Ee&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&Ee)if(ie.data.texture)M.transparent=!0;else{let ge=ie.data.color;switch(ie.opaque){case"A_ONE":M.opacity=ge[3]*Ee.float;break;case"RGB_ZERO":M.opacity=1-ge[0]*Ee.float;break;case"A_ZERO":M.opacity=1-ge[3]*Ee.float;break;case"RGB_ONE":M.opacity=ge[0]*Ee.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}M.opacity<1&&(M.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){let ge=w.extra.technique;for(let be in ge){let Ie=ge[be];switch(be){case"double_sided":M.side=Ie===1?An:Nn;break;case"bump":M.normalMap=T(Ie.texture),M.normalScale=new ht(1,1);break}}}return M}function Ge(x){return v(qe.materials[x],Te)}function nt(x){let y={name:x.getAttribute("name")};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"optics":y.optics=de(T);break}}qe.cameras[x.getAttribute("id")]=y}function de(x){for(let y=0;y<x.childNodes.length;y++){let w=x.childNodes[y];switch(w.nodeName){case"technique_common":return gt(w)}}return{}}function gt(x){let y={};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];switch(M.nodeName){case"perspective":case"orthographic":y.technique=M.nodeName,y.parameters=at(M);break}}return y}function at(x){let y={};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[M.nodeName]=parseFloat(M.textContent);break}}return y}function Ye(x){let y;switch(x.optics.technique){case"perspective":y=new kt(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let w=x.optics.parameters.ymag,M=x.optics.parameters.xmag,T=x.optics.parameters.aspect_ratio;M=M===void 0?w*T:M,w=w===void 0?M/T:w,M*=.5,w*=.5,y=new Ts(-M,M,w,-w,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:y=new kt;break}return y.name=x.name||"",y}function ke(x){let y=qe.cameras[x];return y!==void 0?v(y,Ye):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function Ae(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique_common":y=Qe(T);break}}qe.lights[x.getAttribute("id")]=y}function Qe(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=T.nodeName,y.parameters=pt(T)}}return y}function pt(x){let y={};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"color":let Q=r(T.textContent);y.color=new it().fromArray(Q).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(T.textContent);break;case"quadratic_attenuation":let ie=parseFloat(T.textContent);y.distance=ie?Math.sqrt(1/ie):0;break}}return y}function Ct(x){let y;switch(x.technique){case"directional":y=new Ps;break;case"point":y=new Oa;break;case"spot":y=new Ua;break;case"ambient":y=new Fa;break}return x.parameters.color&&y.color.copy(x.parameters.color),x.parameters.distance&&(y.distance=x.parameters.distance),y}function st(x){let y=qe.lights[x];return y!==void 0?v(y,Ct):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function me(x){let y={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=i(x,"mesh")[0];if(w!==void 0){for(let M=0;M<w.childNodes.length;M++){let T=w.childNodes[M];if(T.nodeType!==1)continue;let Q=T.getAttribute("id");switch(T.nodeName){case"source":y.sources[Q]=B(T);break;case"vertices":y.vertices=ve(T);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",T.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(ye(T));break;default:console.log(T)}}qe.geometries[x.getAttribute("id")]=y}}function B(x){let y={array:[],stride:3};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"float_array":y.array=r(M.textContent);break;case"Name_array":y.array=s(M.textContent);break;case"technique_common":let T=i(M,"accessor")[0];T!==void 0&&(y.stride=parseInt(T.getAttribute("stride")));break}}return y}function ve(x){let y={};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];M.nodeType===1&&(y[M.getAttribute("semantic")]=a(M.getAttribute("source")))}return y}function ye(x){let y={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,M=x.childNodes.length;w<M;w++){let T=x.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let Q=a(T.getAttribute("source")),ie=T.getAttribute("semantic"),Ee=parseInt(T.getAttribute("offset")),ge=parseInt(T.getAttribute("set")),be=ge>0?ie+ge:ie;y.inputs[be]={id:Q,offset:Ee},y.stride=Math.max(y.stride,Ee+1),ie==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=o(T.textContent);break;case"p":y.p=o(T.textContent);break}}return y}function Xe(x){let y={};for(let w=0;w<x.length;w++){let M=x[w];y[M.type]===void 0&&(y[M.type]=[]),y[M.type].push(M)}return y}function Ve(x){let y=0;for(let w=0,M=x.length;w<M;w++)x[w].hasUV===!0&&y++;y>0&&y<x.length&&(x.uvsNeedsFix=!0)}function yt(x){let y={},w=x.sources,M=x.vertices,T=x.primitives;if(T.length===0)return{};let Q=Xe(T);for(let ie in Q){let Ee=Q[ie];Ve(Ee),y[ie]=bt(Ee,w,M)}return y}function bt(x,y,w){let M={},T={array:[],stride:0},Q={array:[],stride:0},ie={array:[],stride:0},Ee={array:[],stride:0},ge={array:[],stride:0},be={array:[],stride:4},Ie={array:[],stride:4},ue=new On,Pe=[],Ce=0;for(let Be=0;Be<x.length;Be++){let Ue=x[Be],Dt=Ue.inputs,xt=0;switch(Ue.type){case"lines":case"linestrips":xt=Ue.count*2;break;case"triangles":xt=Ue.count*3;break;case"polylist":for(let dt=0;dt<Ue.count;dt++){let ft=Ue.vcount[dt];switch(ft){case 3:xt+=3;break;case 4:xt+=6;break;default:xt+=(ft-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ue.type)}ue.addGroup(Ce,xt,Be),Ce+=xt,Ue.material&&Pe.push(Ue.material);for(let dt in Dt){let ft=Dt[dt];switch(dt){case"VERTEX":for(let Wn in w){let on=w[Wn];switch(Wn){case"POSITION":let Zi=T.array.length;if(_t(Ue,y[on],ft.offset,T.array),T.stride=y[on].stride,y.skinWeights&&y.skinIndices&&(_t(Ue,y.skinIndices,ft.offset,be.array),_t(Ue,y.skinWeights,ft.offset,Ie.array)),Ue.hasUV===!1&&x.uvsNeedsFix===!0){let Lh=(T.array.length-Zi)/T.stride;for(let $l=0;$l<Lh;$l++)ie.array.push(0,0)}break;case"NORMAL":_t(Ue,y[on],ft.offset,Q.array),Q.stride=y[on].stride;break;case"COLOR":_t(Ue,y[on],ft.offset,ge.array),ge.stride=y[on].stride;break;case"TEXCOORD":_t(Ue,y[on],ft.offset,ie.array),ie.stride=y[on].stride;break;case"TEXCOORD1":_t(Ue,y[on],ft.offset,Ee.array),ie.stride=y[on].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Wn)}}break;case"NORMAL":_t(Ue,y[ft.id],ft.offset,Q.array),Q.stride=y[ft.id].stride;break;case"COLOR":_t(Ue,y[ft.id],ft.offset,ge.array,!0),ge.stride=y[ft.id].stride;break;case"TEXCOORD":_t(Ue,y[ft.id],ft.offset,ie.array),ie.stride=y[ft.id].stride;break;case"TEXCOORD1":_t(Ue,y[ft.id],ft.offset,Ee.array),Ee.stride=y[ft.id].stride;break}}}return T.array.length>0&&ue.setAttribute("position",new Bt(T.array,T.stride)),Q.array.length>0&&ue.setAttribute("normal",new Bt(Q.array,Q.stride)),ge.array.length>0&&ue.setAttribute("color",new Bt(ge.array,ge.stride)),ie.array.length>0&&ue.setAttribute("uv",new Bt(ie.array,ie.stride)),Ee.array.length>0&&ue.setAttribute("uv1",new Bt(Ee.array,Ee.stride)),be.array.length>0&&ue.setAttribute("skinIndex",new Bt(be.array,be.stride)),Ie.array.length>0&&ue.setAttribute("skinWeight",new Bt(Ie.array,Ie.stride)),M.data=ue,M.type=x[0].type,M.materialKeys=Pe,M}function _t(x,y,w,M,T=!1){let Q=x.p,ie=x.stride,Ee=x.vcount;function ge(ue){let Pe=Q[ue+w]*Ie,Ce=Pe+Ie;for(;Pe<Ce;Pe++)M.push(be[Pe]);if(T){let Be=M.length-Ie-1;Nr.setRGB(M[Be+0],M[Be+1],M[Be+2]).convertSRGBToLinear(),M[Be+0]=Nr.r,M[Be+1]=Nr.g,M[Be+2]=Nr.b}}let be=y.array,Ie=y.stride;if(x.vcount!==void 0){let ue=0;for(let Pe=0,Ce=Ee.length;Pe<Ce;Pe++){let Be=Ee[Pe];if(Be===4){let Ue=ue+ie*0,Dt=ue+ie*1,xt=ue+ie*2,dt=ue+ie*3;ge(Ue),ge(Dt),ge(dt),ge(Dt),ge(xt),ge(dt)}else if(Be===3){let Ue=ue+ie*0,Dt=ue+ie*1,xt=ue+ie*2;ge(Ue),ge(Dt),ge(xt)}else if(Be>4)for(let Ue=1,Dt=Be-2;Ue<=Dt;Ue++){let xt=ue+ie*0,dt=ue+ie*Ue,ft=ue+ie*(Ue+1);ge(xt),ge(dt),ge(ft)}ue+=ie*Be}}else for(let ue=0,Pe=Q.length;ue<Pe;ue+=ie)ge(ue)}function Gt(x){return v(qe.geometries[x],yt)}function Mt(x){let y={name:x.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":Lr(M,y);break}}qe.kinematicsModels[x.getAttribute("id")]=y}function $t(x){return x.build!==void 0?x.build:x}function _n(x){return v(qe.kinematicsModels[x],$t)}function Lr(x,y){for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"joint":y.joints[M.getAttribute("sid")]=eo(M);break;case"link":y.links.push(Xs(M));break}}}function eo(x){let y;for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":y=ji(M);break}}return y}function ji(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new z,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let T=r(M.textContent);y.axis.fromArray(T);break;case"limits":let Q=M.getElementsByTagName("max")[0],ie=M.getElementsByTagName("min")[0];y.limits.max=parseFloat(Q.textContent),y.limits.min=parseFloat(ie.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function Xs(x){let y={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":y.attachments.push(Ji(M));break;case"matrix":case"translate":case"rotate":y.transforms.push($s(M));break}}return y}function Ji(x){let y={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"link":y.links.push(Xs(M));break;case"matrix":case"translate":case"rotate":y.transforms.push($s(M));break}}return y}function $s(x){let y={type:x.nodeName},w=r(x.textContent);switch(y.type){case"matrix":y.obj=new ot,y.obj.fromArray(w).transpose();break;case"translate":y.obj=new z,y.obj.fromArray(w);break;case"rotate":y.obj=new z,y.obj.fromArray(w),y.angle=Is.degToRad(w[3]);break}return y}function Pr(x){let y={name:x.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":y.rigidBodies[M.getAttribute("name")]={},to(M,y.rigidBodies[M.getAttribute("name")]);break}}qe.physicsModels[x.getAttribute("id")]=y}function to(x,y){for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":no(M,y);break}}}function no(x,y){for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"inertia":y.inertia=r(M.textContent);break;case"mass":y.mass=r(M.textContent)[0];break}}}function io(x){let y={bindJointAxis:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":y.bindJointAxis.push(R(M));break}}qe.kinematicsScenes[a(x.getAttribute("url"))]=y}function R(x){let y={target:x.getAttribute("target").split("/").pop()};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let T=M.getElementsByTagName("param")[0];y.axis=T.textContent;let Q=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=Q.substring(0,Q.length-1);break}}return y}function G(x){return x.build!==void 0?x.build:x}function K(x){return v(qe.kinematicsScenes[x],G)}function te(){let x=Object.keys(qe.kinematicsModels)[0],y=Object.keys(qe.kinematicsScenes)[0],w=Object.keys(qe.visualScenes)[0];if(x===void 0||y===void 0)return;let M=_n(x),T=K(y),Q=js(w),ie=T.bindJointAxis,Ee={};for(let Ie=0,ue=ie.length;Ie<ue;Ie++){let Pe=ie[Ie],Ce=Nt.querySelector('[sid="'+Pe.target+'"]');if(Ce){let Be=Ce.parentElement;ge(Pe.jointIndex,Be)}}function ge(Ie,ue){let Pe=ue.getAttribute("name"),Ce=M.joints[Ie];Q.traverse(function(Be){Be.name===Pe&&(Ee[Ie]={object:Be,transforms:j(ue),joint:Ce,position:Ce.zeroPosition})})}let be=new ot;Xl={joints:M&&M.joints,getJointValue:function(Ie){let ue=Ee[Ie];if(ue)return ue.position;console.warn("THREE.ColladaLoader: Joint "+Ie+" doesn't exist.")},setJointValue:function(Ie,ue){let Pe=Ee[Ie];if(Pe){let Ce=Pe.joint;if(ue>Ce.limits.max||ue<Ce.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ie+" value "+ue+" outside of limits (min: "+Ce.limits.min+", max: "+Ce.limits.max+").");else if(Ce.static)console.warn("THREE.ColladaLoader: Joint "+Ie+" is static.");else{let Be=Pe.object,Ue=Ce.axis,Dt=Pe.transforms;Se.identity();for(let xt=0;xt<Dt.length;xt++){let dt=Dt[xt];if(dt.sid&&dt.sid.indexOf(Ie)!==-1)switch(Ce.type){case"revolute":Se.multiply(be.makeRotationAxis(Ue,Is.degToRad(ue)));break;case"prismatic":Se.multiply(be.makeTranslation(Ue.x*ue,Ue.y*ue,Ue.z*ue));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ce.type);break}else switch(dt.type){case"matrix":Se.multiply(dt.obj);break;case"translate":Se.multiply(be.makeTranslation(dt.obj.x,dt.obj.y,dt.obj.z));break;case"scale":Se.scale(dt.obj);break;case"rotate":Se.multiply(be.makeRotationAxis(dt.obj,dt.angle));break}}Be.matrix.copy(Se),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Ee[Ie].position=ue}}else console.log("THREE.ColladaLoader: "+Ie+" does not exist.")}}}function j(x){let y=[],w=Nt.querySelector('[id="'+x.id+'"]');for(let M=0;M<w.childNodes.length;M++){let T=w.childNodes[M];if(T.nodeType!==1)continue;let Q,ie;switch(T.nodeName){case"matrix":Q=r(T.textContent);let Ee=new ot().fromArray(Q).transpose();y.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:Ee});break;case"translate":case"scale":Q=r(T.textContent),ie=new z().fromArray(Q),y.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:ie});break;case"rotate":Q=r(T.textContent),ie=new z().fromArray(Q);let ge=Is.degToRad(Q[3]);y.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:ie,angle:ge});break}}return y}function Me(x){let y=x.getElementsByTagName("node");for(let w=0;w<y.length;w++){let M=y[w];M.hasAttribute("id")===!1&&M.setAttribute("id",l())}}let Se=new ot,De=new z;function We(x){let y={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new ot,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];if(M.nodeType!==1)continue;let T;switch(M.nodeName){case"node":y.nodes.push(M.getAttribute("id")),We(M);break;case"instance_camera":y.instanceCameras.push(a(M.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(et(M));break;case"instance_light":y.instanceLights.push(a(M.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(et(M));break;case"instance_node":y.instanceNodes.push(a(M.getAttribute("url")));break;case"matrix":T=r(M.textContent),y.matrix.multiply(Se.fromArray(T).transpose()),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":T=r(M.textContent),De.fromArray(T),y.matrix.multiply(Se.makeTranslation(De.x,De.y,De.z)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":T=r(M.textContent);let Q=Is.degToRad(T[3]);y.matrix.multiply(Se.makeRotationAxis(De.fromArray(T),Q)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":T=r(M.textContent),y.matrix.scale(De.fromArray(T)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return At(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):qe.nodes[y.id]=y,y}function et(x){let y={id:a(x.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<x.childNodes.length;w++){let M=x.childNodes[w];switch(M.nodeName){case"bind_material":let T=M.getElementsByTagName("instance_material");for(let Q=0;Q<T.length;Q++){let ie=T[Q],Ee=ie.getAttribute("symbol"),ge=ie.getAttribute("target");y.materials[Ee]=a(ge)}break;case"skeleton":y.skeletons.push(a(M.textContent));break;default:break}}return y}function Ze(x,y){let w=[],M=[],T,Q,ie;for(T=0;T<x.length;T++){let be=x[T],Ie;if(At(be))Ie=je(be),Ke(Ie,y,w);else if(Gn(be)){let Pe=qe.visualScenes[be].children;for(let Ce=0;Ce<Pe.length;Ce++){let Be=Pe[Ce];if(Be.type==="JOINT"){let Ue=je(Be.id);Ke(Ue,y,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",be)}for(T=0;T<y.length;T++)for(Q=0;Q<w.length;Q++)if(ie=w[Q],ie.bone.name===y[T].name){M[T]=ie,ie.processed=!0;break}for(T=0;T<w.length;T++)ie=w[T],ie.processed===!1&&(M.push(ie),ie.processed=!0);let Ee=[],ge=[];for(T=0;T<M.length;T++)ie=M[T],Ee.push(ie.bone),ge.push(ie.boneInverse);return new Ca(Ee,ge)}function Ke(x,y,w){x.traverse(function(M){if(M.isBone===!0){let T;for(let Q=0;Q<y.length;Q++){let ie=y[Q];if(ie.name===M.name){T=ie.boneInverse;break}}T===void 0&&(T=new ot),w.push({bone:M,boneInverse:T,processed:!1})}})}function It(x){let y=[],w=x.matrix,M=x.nodes,T=x.type,Q=x.instanceCameras,ie=x.instanceControllers,Ee=x.instanceLights,ge=x.instanceGeometries,be=x.instanceNodes;for(let ue=0,Pe=M.length;ue<Pe;ue++)y.push(je(M[ue]));for(let ue=0,Pe=Q.length;ue<Pe;ue++){let Ce=ke(Q[ue]);Ce!==null&&y.push(Ce.clone())}for(let ue=0,Pe=ie.length;ue<Pe;ue++){let Ce=ie[ue],Be=se(Ce.id),Ue=Gt(Be.id),Dt=vn(Ue,Ce.materials),xt=Ce.skeletons,dt=Be.skin.joints,ft=Ze(xt,dt);for(let Wn=0,on=Dt.length;Wn<on;Wn++){let Zi=Dt[Wn];Zi.isSkinnedMesh&&(Zi.bind(ft,Be.skin.bindMatrix),Zi.normalizeSkinWeights()),y.push(Zi)}}for(let ue=0,Pe=Ee.length;ue<Pe;ue++){let Ce=st(Ee[ue]);Ce!==null&&y.push(Ce.clone())}for(let ue=0,Pe=ge.length;ue<Pe;ue++){let Ce=ge[ue],Be=Gt(Ce.id),Ue=vn(Be,Ce.materials);for(let Dt=0,xt=Ue.length;Dt<xt;Dt++)y.push(Ue[Dt])}for(let ue=0,Pe=be.length;ue<Pe;ue++)y.push(je(be[ue]).clone());let Ie;if(M.length===0&&y.length===1)Ie=y[0];else{Ie=T==="JOINT"?new pr:new fn;for(let ue=0;ue<y.length;ue++)Ie.add(y[ue])}return Ie.name=T==="JOINT"?x.sid:x.name,Ie.matrix.copy(w),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie}let tn=new Un({name:Fn.DEFAULT_MATERIAL_NAME,color:16711935});function Ot(x,y){let w=[];for(let M=0,T=x.length;M<T;M++){let Q=y[x[M]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[M]),w.push(tn)):w.push(Ge(Q))}return w}function vn(x,y){let w=[];for(let M in x){let T=x[M],Q=Ot(T.materialKeys,y);if(Q.length===0&&(M==="lines"||M==="linestrips"?Q.push(new Cs):Q.push(new gr)),M==="lines"||M==="linestrips")for(let be=0,Ie=Q.length;be<Ie;be++){let ue=Q[be];if(ue.isMeshPhongMaterial===!0||ue.isMeshLambertMaterial===!0){let Pe=new Cs;Pe.color.copy(ue.color),Pe.opacity=ue.opacity,Pe.transparent=ue.transparent,Q[be]=Pe}}let ie=T.data.attributes.skinIndex!==void 0,Ee=Q.length===1?Q[0]:Q,ge;switch(M){case"lines":ge=new Ra(T.data,Ee);break;case"linestrips":ge=new mr(T.data,Ee);break;case"triangles":case"polylist":ie?ge=new Ta(T.data,Ee):ge=new dn(T.data,Ee);break}w.push(ge)}return w}function At(x){return qe.nodes[x]!==void 0}function je(x){return v(qe.nodes[x],It)}function Ys(x){let y={name:x.getAttribute("name"),children:[]};Me(x);let w=i(x,"node");for(let M=0;M<w.length;M++)y.children.push(We(w[M]));qe.visualScenes[x.getAttribute("id")]=y}function Rt(x){let y=new fn;y.name=x.name;let w=x.children;for(let M=0;M<w.length;M++){let T=w[M];y.add(je(T.id))}return y}function Gn(x){return qe.visualScenes[x]!==void 0}function js(x){return v(qe.visualScenes[x],Rt)}function Li(x){let y=i(x,"instance_visual_scene")[0];return js(a(y.getAttribute("url")))}function Js(){let x=qe.clips;if(c(x)===!0){if(c(qe.animations)===!1){let y=[];for(let w in qe.animations){let M=I(w);for(let T=0,Q=M.length;T<Q;T++)y.push(M[T])}Dr.push(new _r("default",-1,y))}}else for(let y in x)Dr.push($(y))}function Wt(x){let y="",w=[x];for(;w.length;){let M=w.shift();M.nodeType===Node.TEXT_NODE?y+=M.textContent:(y+=`
`,w.push.apply(w,M.childNodes))}return y.trim()}if(e.length===0)return{scene:new As};let Pn=new DOMParser().parseFromString(e,"application/xml"),Nt=i(Pn,"COLLADA")[0],Jt=Pn.getElementsByTagName("parsererror")[0];if(Jt!==void 0){let x=i(Jt,"div")[0],y;return x?y=x.textContent:y=Wt(Jt),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let Zs=Nt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Zs);let Ir=u(i(Nt,"asset")[0]),Ks=new Na(this.manager);Ks.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let so;br&&(so=new br(this.manager),so.setPath(this.resourcePath||t));let Nr=new it,Dr=[],Xl={},Rh=0,qe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Nt,"library_animations","animation",f),m(Nt,"library_animation_clips","animation_clip",k),m(Nt,"library_controllers","controller",X),m(Nt,"library_images","image",ae),m(Nt,"library_effects","effect",Oe),m(Nt,"library_materials","material",Ne),m(Nt,"library_cameras","camera",nt),m(Nt,"library_lights","light",Ae),m(Nt,"library_geometries","geometry",me),m(Nt,"library_nodes","node",We),m(Nt,"library_visual_scenes","visual_scene",Ys),m(Nt,"library_kinematics_models","kinematics_model",Mt),m(Nt,"library_physics_models","physics_model",Pr),m(Nt,"scene","instance_kinematics_scene",io),_(qe.animations,b),_(qe.clips,W),_(qe.controllers,V),_(qe.images,oe),_(qe.effects,he),_(qe.materials,Te),_(qe.cameras,Ye),_(qe.lights,Ct),_(qe.geometries,yt),_(qe.visualScenes,Rt),Js(),te();let Ur=Li(i(Nt,"scene")[0]);return Ur.animations=Dr,Ir.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Ur.rotation.set(-Math.PI/2,0,0)),Ur.scale.multiplyScalar(Ir.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Dr},kinematics:Xl,library:qe,scene:Ur}}};var cn=["en","fr","ca","es"],Wi={en:"English",fr:"Fran\xE7ais",ca:"Catal\xE0",es:"Espa\xF1ol"},t_={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Bn(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of t_[e]||cn)if(n[t])return n[t];return""}var Xa={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Sr={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function kn(){return Object.fromEntries(cn.map(n=>[n,""]))}function gn(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:cn.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||kn(),e.sub=e.sub||kn(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||kn(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=Xa[t.layout]?t.layout:"carousel",t.card=Sr[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(cn.map(s=>[s,t[i]||""]))),cn.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit="")}),t.spots=Array.isArray(t.spots)?t.spots.filter(i_):[],t.published===void 0&&(t.published=!0)}),n}function qi(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function oi(n){return String(n||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||"item"}function zn(n,e){let t=oi(n),i=2,s=new Set(e);for(;s.has(t);)t=oi(n)+"-"+i++;return t}var n_=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Al(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!n_.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Cl(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var i_=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="",Qu={Barcelone:"Barcelona",Venise:"Venice",Bruxelles:"Brussels",P\u00E9kin:"Beijing",Pekin:"Beijing",Londres:"London",Lisbonne:"Lisbon",S\u00E9oul:"Seoul",Mexico:"Mexico City",Montr\u00E9al:"Montreal",Beyrouth:"Beirut",Bogot\u00E1:"Bogota",Duba\u00EF:"Dubai",Murano:"Murano",Charjah:"Sharjah",Lausana:"Lausanne"};function eh(n){let e=[],t=" "+String(n||"")+" ",i=[...Object.keys(Hn),...Object.keys(Qu)].sort((r,o)=>o.length-r.length),s=t;for(let r of i){let o=new RegExp("[^\\p{L}]"+r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}])","iu"),a=s.search(o);if(a>=0){let l=Qu[r]||r;e.some(c=>c.c===l)||e.push({c:l,at:a}),s=s.replace(o,c=>c[0]+" ".repeat(c.length-1))}}return e.sort((r,o)=>r.at-o.at).map(r=>r.c)}var Hn={Barcelona:[41.39,2.17],Paris:[48.86,2.35],London:[51.51,-.13],Reims:[49.26,4.03],Lausanne:[46.52,6.63],Berlin:[52.52,13.4],Madrid:[40.42,-3.7],Brussels:[50.85,4.35],Amsterdam:[52.37,4.9],Helsinki:[60.17,24.94],Venice:[45.44,12.33],Dakar:[14.72,-17.47],Sharjah:[25.35,55.42],Beijing:[39.9,116.4],Puebla:[19.04,-98.2],"Mexico City":[19.43,-99.13],"New York":[40.71,-74],Montreal:[45.5,-73.57],Beirut:[33.89,35.5],Lisbon:[38.72,-9.14],Aveiro:[40.64,-8.65],"La Rochelle":[46.16,-1.15],Durham:[54.78,-1.58],Lyon:[45.76,4.84],Hebei:[40.77,114.88],Chengdu:[30.57,104.07],Bogota:[4.71,-74.07],Tokyo:[35.68,139.69],Seoul:[37.57,126.98],Dubai:[25.2,55.27],Murano:[45.46,12.35]};function s_(n){return new Promise((e,t)=>{let i=URL.createObjectURL(n),s=new Image;s.onload=()=>e(s),s.onerror=t,s.src=i})}async function th(n,e,t,i=.86){if(/svg|gif/i.test(n.type))return n;let s=await s_(n),r=Math.min(1,e/s.naturalWidth,t/s.naturalHeight);if(r>=1&&/jpe?g|webp/i.test(n.type)&&n.size<9e5)return n;let o=document.createElement("canvas");o.width=Math.round(s.naturalWidth*r),o.height=Math.round(s.naturalHeight*r),o.getContext("2d").drawImage(s,0,0,o.width,o.height);let a=/png/i.test(n.type)&&r_(o);return new Promise(l=>o.toBlob(c=>l(c),a?"image/png":"image/jpeg",i))}function r_(n){let e=n.getContext("2d").getImageData(0,0,Math.min(n.width,64),Math.min(n.height,64)).data;for(let t=3;t<e.length;t+=4)if(e[t]<250)return!0;return!1}function Xi(n){let e=/\.([a-z0-9]+)$/i.exec(n||"");return e?e[1].toLowerCase():""}function Rl(n){return new Promise((e,t)=>{let i=new FileReader;i.onload=()=>e(String(i.result).split(",")[1]||""),i.onerror=t,i.readAsDataURL(n)})}function $a(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Ti(n){try{let e=await $a();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Ds(n,e){let t=await $a();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function nh(){try{let n=await $a();return await new Promise(e=>{let t=n.transaction("kv").objectStore("kv").getAllKeys();t.onsuccess=()=>e(t.result||[]),t.onerror=()=>e([])})}catch{return[]}}async function li(n){try{let e=await $a();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Wa=class{constructor(e){this.kind="github",this.cfg=Object.assign({branch:"main",root:""},e),this.api="https://api.github.com"}get repoPath(){return`/repos/${this.cfg.owner}/${this.cfg.repo}`}full(e){let t=(this.cfg.root||"").replace(/^\/+|\/+$/g,"");return t?t+"/"+e:e}async req(e,t={}){let i=await fetch(this.api+e,{...t,headers:{Accept:"application/vnd.github+json",Authorization:"Bearer "+this.cfg.token,"X-GitHub-Api-Version":"2022-11-28",...t.body?{"Content-Type":"application/json"}:{},...t.headers||{}}});if(!i.ok){let s=i.status+"";try{let o=await i.json();s+=" "+(o.message||"")}catch{}let r=new Error(s);throw r.status=i.status,r}return i.status===204?null:t.raw?i.text():i.json()}async check(){let e=await this.req(this.repoPath);if(!e.permissions||!e.permissions.push)throw Object.assign(new Error("Ce jeton peut lire le d\xE9p\xF4t mais pas y \xE9crire. Donne-lui l'acc\xE8s \xAB Contents : Read and write \xBB."),{status:403});return this.cfg.branch||(this.cfg.branch=e.default_branch),e}async load(){let e=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${encodeURIComponent(this.cfg.branch)}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return gn(JSON.parse(e))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){let r=(await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`)).object.sha,o=await this.req(`${this.repoPath}/git/commits/${r}`),a=[],l=[...t,{path:"content/content.json",text:JSON.stringify(e,null,1)+`
`}];for(let h of l){if(h.delete){a.push({path:this.full(h.path),mode:"100644",type:"blob",sha:null});continue}let d=h.text!=null?{content:h.text,encoding:"utf-8"}:{content:await Rl(h.blob),encoding:"base64"},m=await this.req(`${this.repoPath}/git/blobs`,{method:"POST",body:JSON.stringify(d)});a.push({path:this.full(h.path),mode:"100644",type:"blob",sha:m.sha})}let c=await this.req(`${this.repoPath}/git/trees`,{method:"POST",body:JSON.stringify({base_tree:o.tree.sha,tree:a})}),u=await this.req(`${this.repoPath}/git/commits`,{method:"POST",body:JSON.stringify({message:i,tree:c.sha,parents:[r]})});return await this.req(`${this.repoPath}/git/refs/heads/${encodeURIComponent(this.cfg.branch)}`,{method:"PATCH",body:JSON.stringify({sha:u.sha})}),u.sha}async listFiles(e=["media/","models/"]){let t=await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`),i=await this.req(`${this.repoPath}/git/trees/${t.object.sha}?recursive=1`),s=this.full("");return i.tree.filter(r=>r.type==="blob").map(r=>({path:s&&r.path.startsWith(s)?r.path.slice(s.length):r.path,size:r.size})).filter(r=>e.some(o=>r.path.startsWith(o)))}async lastCommits(e=8){let t=this.full("content/content.json");return this.req(`${this.repoPath}/commits?sha=${encodeURIComponent(this.cfg.branch)}&path=${encodeURIComponent(t)}&per_page=${e}`)}async loadAt(e){let t=await this.req(`${this.repoPath}/contents/${this.full("content/content.json")}?ref=${e}`,{raw:!0,headers:{Accept:"application/vnd.github.raw+json"}});return gn(JSON.parse(t))}},qa=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Ti("demo:content:v6");if(e)return gn(e);if(window.HC_CONTENT)return gn(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return gn(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await li("demo:file:"+i.path);continue}await Ds("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Ds("demo:content:v6",e),"demo"}async reset(){await li("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Ti("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Mr=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Us=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],a_=["font","size","lh","weight","italic","ls","upper"],ih=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function o_(n){let e=Mr.find(i=>i.id===n);if(e)return e.css;let t=ih(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Mr[0].css}function Os(n,e){let t=Us.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...a_,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=o_(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function sh(n){let e=new Map;for(let t of Us){let i=Os(n,t.id),s=ih(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function rh(n){let e=new Set;for(let t of Us){let i=Os(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Ll(n,e){let t=Os(e,"logo"),i=document.createElement("canvas");i.width=i.height=240;let s=i.getContext("2d");s.fillStyle=n,s.beginPath(),s.arc(120,120,112,0,Math.PI*2),s.fill(),s.fillStyle="#111",s.beginPath(),s.arc(120,120,88,0,Math.PI*2),s.fill();let r=String(t.text??"hc").slice(0,4);s.fillStyle="#fff",s.textAlign="center",s.textBaseline="alphabetic",s.font=`${t.italic?"italic ":""}${t.weight||400} ${Math.max(8,+t.size||38)*2}px ${t.css}`;let o=s.measureText(r),a=(o.actualBoundingBoxAscent||t.size*1.4)-(o.actualBoundingBoxDescent||0);return s.fillText(r,120,120+a/2),i.toDataURL("image/png")}var Gi=class{constructor(e){this.kind="folder",this.dir=e,this.name=e.name,this.urls=new Map}static supported(){return typeof window<"u"&&typeof window.showDirectoryPicker=="function"}async parent(e,t){let i=e.split("/").filter(Boolean),s=i.pop(),r=this.dir;for(let o of i)r=await r.getDirectoryHandle(o,{create:t});return[r,s]}async fileHandle(e,t=!1){let[i,s]=await this.parent(e,t);return i.getFileHandle(s,{create:t})}async readBlob(e){return(await this.fileHandle(e)).getFile()}async readText(e){return(await this.readBlob(e)).text()}async exists(e){try{return await this.fileHandle(e),!0}catch{return!1}}async writeFile(e,t){let s=await(await this.fileHandle(e,!0)).createWritable();await s.write(t),await s.close()}async remove(e){try{let[t,i]=await this.parent(e,!1);await t.removeEntry(i)}catch{}}async permission(e){let t={mode:"readwrite"};return await this.dir.queryPermission(t)==="granted"?!0:e?await this.dir.requestPermission(t)==="granted":!1}async check(){if(!await this.exists("content/content.json"))throw new Error(`le dossier \xAB ${this.name} \xBB ne contient pas content/content.json. Choisis le dossier du site, celui o\xF9 se trouvent index.html et le dossier content.`)}async load(){return gn(JSON.parse(await this.readText("content/content.json")))}async publish(e,t=[],i="Mise \xE0 jour du contenu"){for(let l of t){if(l.delete){await this.remove(l.path),this.urls.delete(l.path);continue}await this.writeFile(l.path,l.blob||l.text)}let s=JSON.stringify(e,null,1)+`
`;await this.writeFile("content/content.json",s);let r=new Date,o=r.toISOString().replace(/[:.]/g,"-"),a=[];try{a=JSON.parse(await this.readText("content/versions/index.json"))}catch{}await this.writeFile(`content/versions/${o}.json`,s),a.unshift({file:o+".json",date:r.toISOString(),message:i});for(let l of a.splice(40))await this.remove("content/versions/"+l.file);return await this.writeFile("content/versions/index.json",JSON.stringify(a,null,1)+`
`),o}async listFiles(e=["media/","models/"]){let t=[],i=async(s,r)=>{for await(let[o,a]of s.entries()){let l=r+o;a.kind==="directory"?await i(a,l+"/"):t.push({path:l,size:(await a.getFile()).size})}};for(let s of e)try{let[r,o]=await this.parent(s+"x",!1);await i(r,s)}catch{}return t}async lastCommits(e=20){let t=[];try{t=JSON.parse(await this.readText("content/versions/index.json"))}catch{}return t.slice(0,e).map(i=>({sha:i.file,html_url:"",commit:{message:i.message||"Mise \xE0 jour du contenu",author:{name:"dossier \xAB "+this.name+" \xBB",date:i.date}}}))}async loadAt(e){return gn(JSON.parse(await this.readText("content/versions/"+e)))}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src))}),e.models.forEach(i=>{i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t)if(!(this.urls.has(i)||/^(https?:|data:|blob:)/.test(i)))try{this.urls.set(i,URL.createObjectURL(await this.readBlob(i)))}catch{}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):e)}};var Cr=window.HC_SITE??"../",Ai=window.HC_ASSETS||null,dh=window.HC_MODE==="demo",Ja=document.getElementById("app"),L={backend:null,cfg:null,content:null,base:"",head:null,staged:new Map,recent:new Map,deletes:new Set,view:"sections",sel:{section:null,post:null,model:null},filter:{section:null,tag:"",q:"",status:""},refreshList:null,draftKey:"draft:demo:v6",busy:!1},l_=new Set(["value","checked","disabled","hidden","multiple","selected","indeterminate","open"]);function g(n,e,...t){let i=document.createElement(n);for(let[s,r]of Object.entries(e||{}))r==null||r===!1||(s==="class"?i.className=r:s==="style"&&typeof r=="object"?Object.assign(i.style,r):s==="html"?i.innerHTML=r:s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):l_.has(s)?i[s]=r:i.setAttribute(s,r===!0?"":r));return t.flat(1/0).forEach(s=>{s==null||s===!1||i.append(s instanceof Node?s:document.createTextNode(String(s)))}),i}function $e(n,...e){return n.replaceChildren(...e.flat(1/0).filter(t=>t!=null&&t!==!1)),n}var fh=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},ph=n=>fh(n)?"youtube":/vimeo\.com\/(?:video\/)?\d+/.test(n||"")?"vimeo":/\.(mp4|webm|mov)(\?|#|$)/i.test(n||"")?"video":"image",$i=()=>Ll(L.content&&L.content.settings.accent||"#ffcc00",L.content&&L.content.settings),vt=n=>Bn(n,"fr")||Bn(n,"en"),ah=()=>Math.random().toString(36).slice(2,6),Bs=(n,e,t)=>{let[i]=n.splice(e,1);n.splice(t,0,i)},Dl=n=>n==null?"":n<1024?n+" o":n<1048576?Math.round(n/1024)+" Ko":(n/1048576).toFixed(1)+" Mo",mh=n=>String(n||"").split(/[\s&/]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")||"\xB7";function ze(n,e,t="",i={}){return g("button",{type:"button",class:"btn "+t,onclick:e,...i},n)}var gh=g("div",{class:"toasts",role:"status","aria-live":"polite"});document.body.appendChild(gh);function mt(n,e="ok",t=4200){let i=g("div",{class:"toast "+e},n);gh.appendChild(i),setTimeout(()=>i.remove(),t)}function Rr(n,e,t){return new Promise(i=>{let s=document.activeElement,r=h=>{c.remove(),document.removeEventListener("keydown",o),s&&s.focus&&s.focus(),i(h)},o=h=>{h.key==="Escape"&&r(null)},a=g("div",{class:"mf"},t.map(h=>ze(h.label,()=>r(typeof h.value=="function"?h.value():h.value),h.cls||""))),l=g("div",{class:"modal",role:"dialog","aria-modal":"true","aria-label":n},g("h2",null,n),g("div",{class:"mb"},e),a),c=g("div",{class:"modal-bg",onmousedown:h=>{h.target===c&&r(null)}},l);document.body.appendChild(c),document.addEventListener("keydown",o);let u=l.querySelector("input, textarea, select")||a.lastChild;u&&u.focus()})}var Rn=(n,e,t="Confirmer",i="dark")=>Rr(n,g("p",null,e),[{label:"Annuler",value:!1,cls:"ghost"},{label:t,value:!0,cls:i}]);async function Ul(n,e,t="",i="OK"){let s=g("input",{type:"text",value:t});return s.addEventListener("keydown",r=>{r.key==="Enter"&&r.target.closest(".modal").querySelector(".mf .btn:last-child").click()}),Rr(n,g("label",{class:"f"},g("span",null,e),s),[{label:"Annuler",value:null,cls:"ghost"},{label:i,value:()=>s.value,cls:"dark"}])}function Vn(n){if(!n)return"";if(/^(https?:|data:|blob:)/.test(n))return n;if(Ai&&Ai[n]&&Ai[n].startsWith("data:"))return Ai[n];let e=L.staged.get(n)||L.recent.get(n);return e?e.url:L.backend&&(L.backend.kind==="demo"||L.backend.kind==="folder")?L.backend.url(n):Cr+n}function Ci(n,e){let t=L.staged.get(n);t&&URL.revokeObjectURL(t.url),L.staged.set(n,{blob:e,url:URL.createObjectURL(e)}),L.deletes.delete(n)}function zs(n=L.content){let e=new Set;return n.posts.forEach(t=>{[t.thumb,t.thumbBack].forEach(i=>i&&e.add(i)),t.media.forEach(i=>i&&i.src&&e.add(i.src))}),n.models.forEach(t=>{t.file&&(e.add(t.file),(t.textures||[]).forEach(i=>e.add(t.file.replace(/[^/]+$/,"")+i)))}),n.settings.logo&&e.add(n.settings.logo),n.settings.homeVideo&&n.settings.homeVideo.src&&e.add(n.settings.homeVideo.src),new Set([...e].filter(t=>!/^(https?:|data:|blob:)/.test(t)))}var c_={"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif","image/svg+xml":"svg"};async function Tr(n,e,t){if(/^video\/(mp4|webm)$/.test(n.type)||/\.(mp4|webm)$/i.test(n.name)){if(t!=="media")throw new Error("Ici, seules les images sont accept\xE9es.");if(n.size>95e6)throw new Error(`${n.name} p\xE8se ${Dl(n.size)} : GitHub refuse les fichiers de plus de 100 Mo. R\xE9duis la vid\xE9o (720p, H.264) avant de l'envoyer.`);return n.size>4e7&&mt(`${n.name} p\xE8se ${Dl(n.size)}. Elle passera, mais la page sera lente \xE0 charger : vise moins de 20 Mo.`,"ok",7e3),{path:`${e}/${oi(n.name.replace(/\.[^.]+$/,""))}-${ah()}.${Xi(n.name)||"mp4"}`,blob:n}}if(!/^image\//.test(n.type))throw new Error(`${n.name} : format non reconnu (images JPG, PNG, WebP, GIF, SVG ou vid\xE9os MP4, WebM).`);let s=t==="media"?[3200,1e3]:t==="logo"?[600,600]:[1400,1400],r=await th(n,s[0],s[1]),o=c_[r.type]||Xi(n.name)||"jpg";return{path:`${e}/${oi(n.name.replace(/\.[^.]+$/,""))}-${ah()}.${o}`,blob:r}}function Hs(n,e,t){let i=g("input",{type:"file",accept:n,multiple:e});i.addEventListener("change",()=>t([...i.files])),i.click()}function Ol(n,e){n.addEventListener("dragover",t=>{[...t.dataTransfer.types].includes("Files")&&(t.preventDefault(),n.classList.add("over"))}),n.addEventListener("dragleave",()=>n.classList.remove("over")),n.addEventListener("drop",t=>{t.dataTransfer.files.length&&(t.preventDefault(),n.classList.remove("over"),e([...t.dataTransfer.files]))})}var oh=null,lh=null;function Re(n={}){n.after&&n.after(),L.onChange&&L.onChange(),clearTimeout(oh),oh=setTimeout(zl,600),clearTimeout(lh),lh=setTimeout(Fs,200),n.list&&L.refreshList&&L.refreshList(),n.nav&&Qa()}function _h(){let n=zs();return[...L.staged.keys()].filter(e=>n.has(e))}function Ws(){return JSON.stringify(L.content)!==L.base||L.deletes.size>0||_h().length>0}async function zl(){try{if(!Ws()){await li(L.draftKey);return}let n=zs();await Ds(L.draftKey,{content:L.content,base:L.base,head:L.head,at:Date.now(),deletes:[...L.deletes],staged:[...L.staged].filter(([e])=>n.has(e)).map(([e,t])=>({path:e,blob:t.blob}))})}catch(n){console.warn("brouillon non sauvegard\xE9",n)}}async function ks(n){try{n&&n.content&&await Ds("draft-backup:"+L.draftKey,{content:n.content,at:n.at||Date.now()})}catch{}}async function u_(){let n=await Ti(L.draftKey);if(!(!n||!n.content)){if(n.base!==L.base&&!await Rr("Un brouillon attend",g("div",null,g("p",null,`Tu as un brouillon non publi\xE9 du ${new Date(n.at).toLocaleString("fr-FR")}.`),g("p",null,"Le site a \xE9t\xE9 publi\xE9 depuis (peut-\xEAtre depuis un autre ordinateur). Si tu reprends ce brouillon, sa publication remplacera ces changements.")),[{label:"Partir de la version en ligne",value:!1,cls:"ghost"},{label:"Reprendre mon brouillon",value:!0,cls:"dark"}])){await ks(n),await li(L.draftKey);return}L.content=gn(n.content),(n.staged||[]).forEach(e=>Ci(e.path,e.blob)),(n.deletes||[]).forEach(e=>L.deletes.add(e)),mt("Brouillon non publi\xE9 retrouv\xE9 : rien n\u2019est perdu.")}}function vh(){let n=JSON.parse(L.base),e=L.content,t=[],i=(o,a,l,c,u)=>{let h=u?"\xE9e":"\xE9",d=new Map(o.map(b=>[b[l],JSON.stringify(b)])),m=new Map(a.map(b=>[b[l],JSON.stringify(b)])),_=[...m.keys()].filter(b=>!d.has(b)).length,v=[...d.keys()].filter(b=>!m.has(b)).length,f=[...m.keys()].filter(b=>d.has(b)&&d.get(b)!==m.get(b)).length,p=b=>b>1?c+"s":c,C=b=>b>1?h+"s":h;_&&t.push(`${_} ${p(_)} ajout${C(_)}`),f&&t.push(`${f} ${p(f)} modifi${C(f)}`),v&&t.push(`${v} ${p(v)} supprim${C(v)}`)};i(n.sections,e.sections,"id","section",!0),i(n.posts,e.posts,"id","contenu"),i(n.models,e.models,"id","mod\xE8le"),JSON.stringify(n.settings)!==JSON.stringify(e.settings)&&t.push("r\xE9glages modifi\xE9s");let s=o=>o.sections.map(a=>a.id);JSON.stringify(s(n))!==JSON.stringify(s(e))&&JSON.stringify(s(n).slice().sort())===JSON.stringify(s(e).slice().sort())&&t.push("ordre des sections");let r=_h().length;return r&&t.push(`${r} fichier${r>1?"s":""} \xE0 envoyer`),L.deletes.size&&t.push(`${L.deletes.size} fichier${L.deletes.size>1?"s":""} \xE0 supprimer`),t}function h_(){let n=zs(JSON.parse(L.base)),e=zs(),t=new Set(JSON.parse(L.base).models.filter(i=>i.builtin).flatMap(i=>[i.file,...(i.textures||[]).map(s=>i.file.replace(/[^/]+$/,"")+s)]));return[...n].filter(i=>!e.has(i)&&!t.has(i)&&/^(media|models)\//.test(i)&&!L.staged.has(i))}async function Hl(){if(L.busy)return;if(!Ws()){mt("Rien de nouveau \xE0 publier.");return}let n=vh(),e=h_(),t=g("input",{type:"text",value:n.length?n.slice(0,3).join(", ").replace(/^./,o=>o.toUpperCase()):"Mise \xE0 jour du contenu"}),i=g("input",{type:"checkbox",checked:!0}),s=g("div",null,g("ul",null,n.map(o=>g("li",null,o))),g("label",{class:"f"},g("span",null,"Note pour l\u2019historique"),t),e.length?g("label",{class:"switch"},i,`Supprimer aussi ${e.length} ancien${e.length>1?"s":""} fichier${e.length>1?"s":""} qui ne sert plus`):null,g("p",{class:"hint"},L.backend.kind==="github"?"Le site se met \xE0 jour 1 \xE0 2 minutes apr\xE8s la publication.":L.backend.kind==="folder"?`Les fichiers sont \xE9crits dans le dossier \xAB ${L.backend.name} \xBB de ton ordinateur.`:"Mode d\xE9mo : la publication reste dans ce navigateur, rien n\u2019est \xE9crit dans les fichiers du site."));if(await Rr("Publier sur le site",s,[{label:"Annuler",value:!1,cls:"ghost"},{label:"Publier",value:!0,cls:"primary"}])){L.busy=!0,Fs("Publication en cours\u2026");try{if(L.backend.kind==="github"){let u=await f_();if(L.head&&u!==L.head){let h=await L.backend.loadAt(u);if(JSON.stringify(h)!==L.base&&!await Rn("Le site a chang\xE9 entre-temps","Quelqu\u2019un (ou toi, depuis un autre onglet) a publi\xE9 depuis que tu as ouvert le back-office. Publier maintenant remplacera ces changements par les tiens.","Publier quand m\xEAme","danger")){L.busy=!1,Fs();return}}}let o=zs(),a=[...L.staged].filter(([u])=>o.has(u)).map(([u,h])=>({path:u,blob:h.blob}));(L.backend.kind==="github"||L.backend.kind==="folder")&&(a.push({path:"content/content.js",text:"window.HC_CONTENT = "+JSON.stringify(L.content)+`;
`}),JSON.stringify(JSON.parse(L.base).models)!==JSON.stringify(L.content.models)&&(Fs("Pr\xE9paration des mod\xE8les 3D\u2026"),a.push({path:"models/models.js",text:await d_()})));let l=new Set([...L.deletes].filter(u=>!o.has(u)));e.length&&i.checked&&e.forEach(u=>l.add(u));let c=await L.backend.publish(L.content,[...a,...[...l].map(u=>({path:u,delete:!0}))],t.value.trim()||"Mise \xE0 jour du contenu");L.base=JSON.stringify(L.content),L.backend.kind==="github"&&(L.head=c),a.forEach(u=>{L.recent.set(u.path,L.staged.get(u.path)),L.staged.delete(u.path)}),L.staged.forEach(u=>URL.revokeObjectURL(u.url)),L.staged.clear(),L.deletes.clear(),L.files=null,await li(L.draftKey),mt(L.backend.kind==="github"?"Publi\xE9. Le site sera \xE0 jour dans une minute ou deux.":L.backend.kind==="folder"?`Enregistr\xE9 dans le dossier \xAB ${L.backend.name} \xBB.`:"Publi\xE9 dans la d\xE9mo (dans ce navigateur seulement)."),L.backend.kind==="folder"&&await L.backend.prepare(L.content)}catch(o){console.error(o),mt("La publication a \xE9chou\xE9 : "+Vs(o),"bad",9e3)}finally{L.busy=!1,Fs(),Qa(),(L.view==="history"||L.view==="media")&&jt()}}}async function d_(){let n={},e={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",tga:"image/x-tga",webp:"image/webp"};for(let t of L.content.models){let i=t.file.replace(/[^/]+$/,"");for(let s of[t.file,...(t.textures||[]).map(r=>i+r)]){let r=L.staged.has(s)?L.staged.get(s).blob:null;if(!r&&L.backend.readBlob&&(r=await L.backend.readBlob(s).catch(()=>null)),!r){let o=await fetch(Vn(s));if(!o.ok)throw new Error(s+" : "+o.status);r=await o.blob()}n[s]=/\.dae$/i.test(s)?await r.text():`data:${e[Xi(s)]||"application/octet-stream"};base64,${await Rl(r)}`}}return"window.HC_ASSETS = "+JSON.stringify(n)+`;
`}async function f_(){return(await L.backend.req(`${L.backend.repoPath}/git/ref/heads/${encodeURIComponent(L.backend.cfg.branch)}`)).object.sha}async function p_(){Ws()&&await Rn("Annuler les modifications","Tout ce qui n\u2019a pas \xE9t\xE9 publi\xE9 sera perdu : textes, images ajout\xE9es, suppressions.","Tout annuler","danger")&&(await ks({content:L.content,at:Date.now()}),L.content=gn(JSON.parse(L.base)),L.staged.forEach(n=>URL.revokeObjectURL(n.url)),L.staged.clear(),L.deletes.clear(),await li(L.draftKey),Er(),mt("Retour \xE0 la version publi\xE9e. Une copie du brouillon reste dans Historique \u203A Sauvegardes."))}function Vs(n){let e=n&&n.status;return e===401?"jeton refus\xE9 (expir\xE9, r\xE9voqu\xE9 ou mal copi\xE9).":e===403?n.message.includes("\xE9crire")?n.message:"acc\xE8s refus\xE9. V\xE9rifie que le jeton a \xAB Contents : Read and write \xBB sur ce d\xE9p\xF4t.":e===404?"d\xE9p\xF4t ou branche introuvable, ou le jeton n\u2019a pas acc\xE8s \xE0 ce d\xE9p\xF4t.":e===409?"conflit sur la branche, recharge la page et r\xE9essaie.":e===422?"GitHub a refus\xE9 un fichier (trop lourd ?). "+(n.message||""):n instanceof TypeError?"pas de connexion \xE0 GitHub (r\xE9seau ?).":n&&n.message?n.message:String(n)}var Ya=new Map;async function ch(n){if(Ai&&Ai[n]&&!Ai[n].startsWith("data:"))return Ai[n];if(!Ya.has(n)||L.staged.has(n)){let e=fetch(Vn(n)).then(t=>{if(!t.ok)throw new Error(n+" : "+t.status);return t.text()});if(L.staged.has(n))return e;Ya.set(n,e),e.catch(()=>Ya.delete(n))}return Ya.get(n)}var yh=new vr;yh.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Vn(n.replace(/^\.\//,"").replace(/\/\.\//g,"/")));function Fl(n,e){let i=new Ga(yh).parse(n,e.file.slice(0,e.file.lastIndexOf("/")+1)).scene,s=new fn;s.add(i);let r=0;if(i.traverse(a=>{if(!a.isMesh)return;r++;let l=c=>{let u=c.map||c.emissiveMap||null;return u?new Un({map:u}):e.untextured==="white"?new Hi({color:15921906}):e.untextured==="black"?new Hi({color:2236962}):new Un({color:15841280,wireframe:!0})};a.material=Array.isArray(a.material)?a.material.map(l):l(a.material)}),!r)throw new Error("aucune forme 3D dans ce fichier");if(e.scaleMode==="fit"){s.updateMatrixWorld(!0);let a=new mn().setFromObject(s),l=a.getSize(new z);s.scale.setScalar((e.height||420)/Math.max(l.y,1e-6)),s.updateMatrixWorld(!0);let c=new mn().setFromObject(s),u=c.getCenter(new z);s.position.set(-u.x,-c.min.y,-u.z)}else{i.scale.setScalar(100),s.updateMatrixWorld(!0);let a=new mn().setFromObject(s);a.max.y-a.min.y>800&&s.scale.setScalar(800/(a.max.y-a.min.y))}let o=new fn;return o.rotation.y=(e.rotationY||0)*Math.PI/180,o.add(s),o}var kl=(()=>{let n=null,e=new As;e.add(new Da(16777215,14211288,2.2));let t=new Ps(16777215,1.2);t.position.set(300,800,500),e.add(t);let i=new kt(30,4/3,1,2e4),s=new fn;e.add(s);let r=null,o=null,a=!1,l=0,c=.004,u=new Map,h=Promise.resolve();function d(){if(n)return n;n=new fr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(16777215,0);let f=n.domElement;return f.addEventListener("pointerdown",p=>{a=!0,l=p.clientX,f.setPointerCapture(p.pointerId)}),f.addEventListener("pointermove",p=>{a&&(c=(p.clientX-l)*.01,s.rotation.y+=c,l=p.clientX)}),f.addEventListener("pointerup",()=>{a=!1}),requestAnimationFrame(v),n}function m(f){let p=new mn().setFromObject(f),C=p.getSize(new z),b=p.getCenter(new z),I=Math.max(C.y*.8,Math.min(C.x,C.z)*.55,Math.max(C.x,C.z)*.38)||100,U=I/Math.tan(15*Math.PI/180);i.position.set(0,b.y+I*.55,U),i.near=U/50,i.far=U*10,i.lookAt(0,b.y,0),i.updateProjectionMatrix()}function _(f){s.clear(),s.rotation.y=.6,f&&(s.add(f),m(s)),r=f}function v(){if(requestAnimationFrame(v),!o||!o.isConnected||!r)return;let f=o.clientWidth,p=o.clientHeight;if(!f||!p)return;let C=n.domElement;C.parentNode!==o&&o.prepend(C),(C.width!==Math.round(f*n.getPixelRatio())||C.height!==Math.round(p*n.getPixelRatio()))&&(n.setSize(f,p,!1),i.aspect=f/p,i.updateProjectionMatrix()),a||(s.rotation.y+=c,c+=(.004-c)*.03),n.render(e,i)}return{async show(f,p,C){d(),o=f,_(null),C&&(C.textContent="Chargement du mod\xE8le\u2026");try{let b=Fl(await ch(p.file),p);if(o!==f)return;_(b),C&&(C.textContent="Glisse pour tourner autour.")}catch(b){C&&(C.textContent="Impossible d\u2019afficher ce mod\xE8le : "+b.message)}},async snapshot(f){let p=f.file+JSON.stringify([f.scaleMode,f.height,f.rotationY,f.untextured])+(L.staged.has(f.file)?"s":"");if(u.has(p))return u.get(p);let C=h.then(async()=>{d();let b=Fl(await ch(f.file),f),I=r,U=s.rotation.y;_(b),s.rotation.y=.6,n.setSize(320,200,!1),i.aspect=1.6,i.updateProjectionMatrix(),await new Promise(D=>setTimeout(D,400)),n.render(e,i);let A=n.domElement.toDataURL("image/png");return _(I),s.rotation.y=U,n.setSize(1,1,!1),A});return h=C.catch(()=>{}),u.set(p,C),C.catch(()=>u.delete(p)),C}}})();function m_(n){let e=g("div",{class:"pic"},g("span",{style:{color:"#aaa",fontSize:"12px"}},"\u2026"));return kl.snapshot(n).then(t=>$e(e,g("img",{src:t,alt:""}))).catch(()=>$e(e,g("span",{style:{color:"#c0362c",fontSize:"12px",padding:"8px"}},"aper\xE7u indisponible"))),e}function xh(n){let e='<path d="M80 62 l9 6 l-3 11 h-12 l-3 -11z" fill="#d8d8d8" stroke="#bdbdbd" stroke-width=".6"/>',t=(o,a,l,c,u=1,h="#151515")=>`<rect x="${(o-l/2).toFixed(1)}" y="${(a-c/2).toFixed(1)}" width="${l.toFixed(1)}" height="${c.toFixed(1)}" fill="${h}" opacity="${u.toFixed(2)}"/>`,i=(o,a,l,c)=>`<line x1="${o.toFixed(1)}" y1="${a.toFixed(1)}" x2="${l.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#cfcfcf" stroke-width=".7"/>`,s="",r=(o,a,l,c,u,h,d=0)=>{let m=[];for(let _=0;_<o;_++){let v=_/o*Math.PI*2,f=(Math.cos(v)+1)/2;m.push({x:80+a*Math.sin(v),y:c+l*Math.cos(v)-_*d,d:f})}m.sort((_,v)=>_.d-v.d).forEach(_=>{h&&(s+=i(_.x,_.y,80,70)),s+=t(_.x,_.y,u[0]*(.6+.4*_.d),u[1]*(.6+.4*_.d),.3+.7*_.d)})};switch(n){case"carousel":s+=e,r(8,60,13,40,[22,14],!0);break;case"arc":for(let o=0;o<7;o++){let a=Math.PI*(o+1)/8;s+=t(80-62*Math.cos(a),74-58*Math.sin(a),16,11,1)}s+=e;break;case"fan":s+=e;for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-48*Math.cos(a),60-40*Math.sin(a),80,66)+t(80-48*Math.cos(a),60-40*Math.sin(a),24,7,.35)}for(let o=0;o<4;o++){let a=Math.PI*(o+1)/5;s+=i(80-64*Math.cos(a),66-50*Math.sin(a),80,66)+t(80-64*Math.cos(a),66-50*Math.sin(a),30,8,1,"#333")}break;case"map":s+='<ellipse cx="80" cy="78" rx="70" ry="13" fill="#ececec"/><path d="M28 77 q8 -6 18 -2 t20 0 q6 -4 12 1 M92 75 q10 -5 22 -1 t18 3" stroke="#cfcfcf" stroke-width="3" fill="none" stroke-linecap="round"/>',[[48,76,46,30],[100,75,104,22],[124,79,132,42]].forEach(([o,a,l,c])=>{s+=i(o,a,l,c)+`<circle cx="${o}" cy="${a}" r="2" fill="#f1b800"/>`+t(l,c,15,14,1,"#fff").replace("/>",' stroke="#151515" stroke-width=".8"/>')+t(l-20,c,18,14,1)});break;case"spiral":s+=e;{let o=[];for(let a=0;a<9;a++){let l=a*.95,c=(Math.cos(l)+1)/2;o.push({x:80+48*Math.sin(l),y:66-a*6.6,d:c})}o.sort((a,l)=>a.d-l.d).forEach(a=>{s+=i(a.x,a.y,80,a.y)+t(a.x,a.y,18*(.6+.4*a.d),12*(.6+.4*a.d),.3+.7*a.d)})}break;case"wall":for(let o=0;o<3;o++)for(let a=0;a<5;a++)s+=t(32+a*24,16+o*17,20,13,.9);s+=e;break;default:s+=e}return`<svg viewBox="0 0 160 100" aria-hidden="true">${s}</svg>`}function g_(n){let e="var(--accent)";switch(n){case"image":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="32" y="18" width="96" height="63" fill="#111"/><rect x="40" y="26" width="8" height="1.5" fill="${e}"/><rect x="40" y="32" width="54" height="5" fill="#fff"/><rect x="40" y="41" width="36" height="3" fill="#777"/><rect x="40" y="72" width="34" height="2.5" fill="${e}"/></svg>`;case"portrait":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="55" y="25" width="50" height="50" fill="#1b1b1b"/><text x="80" y="57" text-anchor="middle" font-family="Georgia" font-size="20" fill="#fff">MM</text><rect x="75" y="64" width="10" height="1.4" fill="${e}"/></svg>`;case"text":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="20" y="36" width="120" height="30" fill="#333"/><rect x="27" y="41" width="7" height="1.4" fill="${e}"/><rect x="27" y="46" width="80" height="5" fill="#fff"/><rect x="27" y="54" width="54" height="5" fill="#fff"/></svg>`;case"place":return`<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="52" y="24" width="56" height="52" fill="#fff" stroke="#ccc"/><circle cx="80" cy="46" r="13" fill="#111"/><circle cx="80" cy="46" r="3.5" fill="${e}"/><rect x="66" y="66" width="28" height="3" fill="#444"/></svg>`}return""}function Pl(n,e,t,i){let s=g("div",{class:"tiles",role:"radiogroup","aria-label":i}),r=o=>{$e(s,...n.map(a=>g("button",{type:"button",class:"tile",role:"radio","aria-checked":String(a.value===o),onclick:()=>{t(a.value),r(a.value)}},a.pic||g("div",{class:"pic"}),g("div",{class:"cap"},g("b",null,a.label),a.hint?g("span",null,a.hint):null))))};return r(e),s}function ct(n,e,t){return g("label",{class:"f"},g("span",null,n),e,t?g("p",{class:"hint"},t):null)}function wt(n,e,t={}){let i=g("input",{type:t.type||"text",value:n()??"",placeholder:t.placeholder,min:t.min,max:t.max,step:t.step,spellcheck:t.spell===!1?"false":null});return i.addEventListener("input",()=>{e(t.type==="number"?i.value===""?"":+i.value:i.value),Re(t)}),t.onBlur&&i.addEventListener("blur",()=>t.onBlur(i)),i}var Cn=()=>{let n=L.content&&L.content.settings.langs||cn;return cn.filter(e=>n.includes(e))};function Yi(n,e,t,i={}){(!e[t]||typeof e[t]!="object")&&(e[t]=Object.fromEntries(cn.map(r=>[r,e[t]||""])));let s=r=>g("div",{class:"lang","data-l":r.toUpperCase()},wt(()=>e[t][r]??"",o=>{e[t][r]=o},{...i,placeholder:i.placeholder?i.placeholder[r]:Wi[r]}));return g("div",{class:"f"},g("span",{class:"lbl"},n),g("div",{class:"pair"},Cn().map(s)),i.hint?g("p",{class:"hint"},i.hint):null)}function ci(n,e,t,i={}){let s=g("input",{type:"checkbox",checked:!!e(),role:"switch"});return s.addEventListener("change",()=>{t(s.checked),Re(i)}),g("label",{class:"switch"},s,n)}function Ln(n,e,t,i={}){let s=g("select",null,n.map(r=>g("option",{value:r.value,selected:r.value===e()},r.label)));return s.addEventListener("change",()=>{t(s.value),Re(i)}),s}function __(n,e){let t=Cn().includes("fr")?"fr":Cn()[0],i=g("div",{class:"rte",contenteditable:"true","data-ph":e,role:"textbox","aria-multiline":"true"}),s=g("div",{class:"rte-foot"}),r=g("div",{class:"lang-tabs",role:"tablist"}),o=()=>{let d=m=>Cl(n[m]).join(" ").split(/\s+/).filter(Boolean).length;$e(s,g("span",null,`${d(t)} mots`),g("span",null,Cn().map(m=>`${m.toUpperCase()} ${d(m)?"\u2713":"\xB7 \xE0 \xE9crire"}`).join("   ")))},a=()=>{i.innerHTML=Al(n[t]),r.querySelectorAll("button").forEach(d=>d.setAttribute("aria-selected",String(d.dataset.l===t))),o()};Cn().forEach(d=>r.appendChild(g("button",{type:"button",role:"tab","data-l":d,onclick:()=>{t=d,a()}},d.toUpperCase()))),i.addEventListener("input",()=>{n[t]=Al(i.innerHTML),o(),Re()}),i.addEventListener("paste",d=>{d.preventDefault();let m=d.clipboardData.getData("text/plain");document.execCommand("insertText",!1,m)}),i.addEventListener("focus",()=>{try{document.execCommand("defaultParagraphSeparator",!1,"p")}catch{}}),i.addEventListener("keydown",d=>{(d.metaKey||d.ctrlKey)&&d.key.toLowerCase()==="k"&&(d.preventDefault(),c())});let l=(d,m)=>{i.focus(),document.execCommand(d,!1,m),i.dispatchEvent(new Event("input"))};async function c(){let d=window.getSelection(),m=d.rangeCount?d.getRangeAt(0).cloneRange():null,_=await Ul("Ajouter un lien","Adresse (https://\u2026 ou mailto:\u2026)","https://","Ajouter");if(!(!_||_==="https://")){if(i.focus(),m&&(d.removeAllRanges(),d.addRange(m)),m&&m.collapsed&&document.execCommand("insertText",!1,_.replace(/^https?:\/\/|^mailto:/,"")),m&&m.collapsed){let v=d.getRangeAt(0);v.setStart(v.startContainer,Math.max(0,v.startOffset-_.replace(/^https?:\/\/|^mailto:/,"").length))}l("createLink",/^(https?:|mailto:)/.test(_)?_:"https://"+_)}}let u=(d,m,_)=>g("button",{type:"button",title:m,"aria-label":m,onmousedown:v=>v.preventDefault(),onclick:_},d),h=g("div",{class:"rte-bar"},u(g("b",null,"G"),"Gras",()=>l("bold")),u(g("i",null,"I"),"Italique",()=>l("italic")),g("span",{class:"sep"}),u("Lien","Lien (Ctrl+K)",c),u("\u2022 Liste","Liste \xE0 puces",()=>l("insertUnorderedList")),u("Intertitre","Intertitre",()=>l("formatBlock","h3")),u("\xB6","Paragraphe normal",()=>l("formatBlock","p")),g("span",{class:"sep"}),u("Effacer","Retirer la mise en forme",()=>{l("removeFormat"),l("unlink")}),r);return a(),g("div",{class:"rte-wrap"},h,i,s)}var bh=[["sections","Sections"],["posts","Contenus"],["models","Mod\xE8les 3D"],["media","M\xE9dias"],["settings","R\xE9glages"],["history","Historique"]],Il,Za,Ar,wr;function Er(){$e(Ja),Il=g("header",{class:"top"}),Za=g("nav",{class:"nav","aria-label":"Back-office"}),Ar=g("main",{class:"main",id:"main"}),Ja.appendChild(g("div",{class:"shell"},Il,Za,Ar));let n=L.content.settings.logo?Vn(L.content.settings.logo):$i();wr=g("div",{class:"status","aria-live":"polite"}),Il.append(g("div",{class:"brand"},g("img",{src:n,alt:""}),g("span",null,L.content.settings.name||"Hand Coded"),g("small",null,L.backend.kind==="demo"?"Back-office \xB7 d\xE9mo":L.backend.kind==="folder"?"Back-office \xB7 dossier \xAB "+L.backend.name+" \xBB":"Back-office")),...L.backend.kind!=="demo"?[]:[g("button",{type:"button",class:"demo-tag",title:"Ouvrir les sauvegardes",onclick:()=>Gs("history")},"D\xE9mo : ton travail reste dans ce navigateur, pas dans les fichiers du site. Exporte-le ou travaille dans le dossier.")],wr,g("div",{class:"acts"},ze("Aper\xE7u",()=>qs(),"ghost",{title:"Voir le site avec les modifications non publi\xE9es"}),ze("Publier",Hl,"primary",{title:"Ctrl+S"}))),Qa(),Fs(),jt()}function Qa(){if(!Za)return;let n=L.content,e={sections:n.sections.length,posts:n.posts.length,models:n.models.length};$e(Za,g("ul",null,bh.map(([t,i])=>g("li",null,g("button",{type:"button","aria-current":String(L.view===t),onclick:()=>Gs(t)},i,e[t]!=null?g("small",null,e[t]):null)))),g("div",{class:"foot"},L.backend.kind==="github"?g("a",{href:`https://github.com/${L.cfg.owner}/${L.cfg.repo}`,target:"_blank",rel:"noopener"},`${L.cfg.owner}/${L.cfg.repo}`):null,window.HC_SITE_HTML?g("a",{href:"#",onclick:t=>{t.preventDefault(),qs()}},"Voir le site"):g("a",{href:Cr+"index.html",target:"_blank",rel:"noopener"},"Voir le site en ligne \u2197"),Ws()?g("a",{href:"#",onclick:t=>{t.preventDefault(),p_()}},"Annuler les modifications"):null,L.backend.kind==="github"?g("a",{href:"#",onclick:t=>{t.preventDefault(),G_()}},"Se d\xE9connecter"):null,L.backend.kind!=="github"?g("a",{href:"#",onclick:t=>{t.preventDefault(),V_()}},L.backend.kind==="folder"?"Changer de dossier":"Quitter la d\xE9mo"):null))}function Fs(n){if(!wr)return;let e=Ws();wr.className="status"+(e?" dirty":"");let t=e?vh():[];$e(wr,g("i",{class:"dot"}),g("span",null,n||(e?"Non publi\xE9 : "+(t.join(", ")||"modifications"):"Tout est publi\xE9")))}function Gs(n){L.view=n;try{history.replaceState(null,"","#/"+n)}catch{}Qa(),jt(),Ar.scrollTop=0}function jt(){L.refreshList=null,L.onChange=null;let n={sections:uh,posts:w_,models:C_,media:N_,settings:F_,history:k_}[L.view]||uh;$e(Ar,n())}function Ri(n,e,t,...i){return g("div",{class:"page"},g("header",null,g("h1",null,n),t&&t.length?g("div",{class:"acts"},t):null,e?g("p",null,e):null),i)}function Vl(n){window.innerWidth<980&&setTimeout(()=>n.scrollIntoView({behavior:"smooth",block:"start"}),30)}function Mh(n,e){let t=null,i=()=>n.querySelectorAll(".drop-before, .drop-after").forEach(s=>s.classList.remove("drop-before","drop-after"));n.querySelectorAll("[data-i]").forEach(s=>{s.draggable=!0,s.addEventListener("dragstart",r=>{t=+s.dataset.i,s.classList.add("dragging"),r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",String(t))}),s.addEventListener("dragend",()=>{s.classList.remove("dragging"),i(),t=null}),s.addEventListener("dragover",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect();i(),s.classList.add(r.clientY>o.top+o.height/2?"drop-after":"drop-before")}),s.addEventListener("drop",r=>{if(t===null)return;r.preventDefault();let o=s.getBoundingClientRect(),a=+s.dataset.i+(r.clientY>o.top+o.height/2?1:0);a>t&&a--;let l=t;t=null,i(),a!==l&&e(l,a)})})}var Gl=n=>L.content.posts.filter(e=>e.section===n).length;function uh(){let n=L.content;n.sections.find(r=>r.id===L.sel.section)||(L.sel.section=n.sections[0]&&n.sections[0].id);let e=g("div",{class:"card sticky"}),t=g("div"),i=()=>{let r=g("ul",{class:"list"},n.sections.map((o,a)=>g("li",{class:"row","data-i":a,tabindex:0,"aria-current":String(o.id===L.sel.section),onclick:()=>{L.sel.section=o.id,i(),s(),Vl(t)},onkeydown:l=>{l.key==="Enter"&&l.currentTarget.click()}},g("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),g("div",{class:"th",style:{background:"#fafafa",border:"1px solid var(--line)"},html:xh(o.layout)}),g("div",null,g("div",{class:"t"},vt(o.name)||o.id),g("div",{class:"m"},`${Bn(Xa[o.layout].label,"fr")} \xB7 ${Bn(Sr[o.card].label,"fr")} \xB7 ${Gl(o.id)} contenus`)),g("div",{class:"b"},o.visible?null:g("span",{class:"badge off"},"masqu\xE9e"),n.settings.startSection===o.id?g("span",{class:"badge"},"arriv\xE9e"):null))));Mh(r,(o,a)=>{Bs(n.sections,o,a),Re({nav:!0}),i()}),$e(e,g("header",{class:"toolbar",style:{justifyContent:"space-between"}},g("span",{class:"lbl",style:{margin:0}},"Ordre du menu"),ze("+ Nouvelle section",v_,"sm dark")),r,g("p",{class:"hint",style:{padding:"10px 12px",margin:0}},"Glisse les sections pour changer l\u2019ordre du menu du site."))},s=()=>{$e(t,y_(n.sections.find(r=>r.id===L.sel.section),()=>{i()},s))};return L.refreshList=i,i(),s(),Ri("Sections","Chaque section du site est un objet 3D entour\xE9 de cartes. Choisis l\u2019objet, la fa\xE7on dont les cartes se disposent, leur type, et les tags qui servent \xE0 trier.",[],g("div",{class:"cols"},e,t))}function v_(){let n=L.content,e=zn("section",n.sections.map(t=>t.id));n.sections.push({id:e,name:{en:"New section",fr:"Nouvelle section",ca:"Nova secci\xF3",es:"Nueva secci\xF3n"},model:n.models[0]?n.models[0].id:"",layout:"carousel",card:"image",open:"strip",perPage:8,defaultTag:"",visible:!0,tags:[]}),L.sel.section=e,Re({nav:!0}),jt()}function y_(n,e,t){let i=L.content;if(!n)return g("div",{class:"card"},g("div",{class:"empty"},"Aucune section. Cr\xE9e la premi\xE8re avec \xAB + Nouvelle section \xBB."));let s=Gl(n.id),r=g("h2",null,vt(n.name)||n.id),o=g("p",{class:"hint"},`Adresse directe : \u2026/#${n.id}`),a=wt(()=>n.id,()=>{},{spell:!1,onBlur:f=>{let p=oi(f.value);if(p===n.id){f.value=n.id;return}let C=zn(p,i.sections.filter(b=>b!==n).map(b=>b.id));i.posts.forEach(b=>{b.section===n.id&&(b.section=C)}),i.settings.startSection===n.id&&(i.settings.startSection=C),n.id=C,L.sel.section=C,f.value=C,o.textContent=`Adresse directe : \u2026/#${C}`,Re({list:!0})}}),l=async()=>{await Rn("Supprimer la section",s?`\xAB ${vt(n.name)} \xBB contient ${s} contenu${s>1?"s":""}. Ils seront supprim\xE9s avec elle.`:`Supprimer \xAB ${vt(n.name)} \xBB ?`,"Supprimer","danger")&&(i.posts=i.posts.filter(p=>p.section!==n.id),i.sections.splice(i.sections.indexOf(n),1),i.settings.startSection===n.id&&(i.settings.startSection=i.sections[0]?i.sections[0].id:""),L.sel.section=null,Re({nav:!0}),jt())},c=i.models.map(f=>({value:f.id,label:f.name,pic:m_(f)})),u=Object.entries(Xa).map(([f,p])=>({value:f,label:Bn(p.label,"fr"),hint:Bn(p.hint,"fr"),pic:g("div",{class:"pic",html:xh(f)})})),h=Object.entries(Sr).map(([f,p])=>({value:f,label:Bn(p.label,"fr"),hint:{image:"Vignette paysage, titre, lieu",portrait:"Carr\xE9 : visage ou initiales",text:"Bandeau de texte, image facultative",place:"Logo ou photo et fiche du lieu"}[f],pic:g("div",{class:"pic",html:g_(f)})})),d=g("div",{class:"f",style:{marginTop:"16px"}}),m=()=>{d.hidden=n.layout!=="map";let f=new Map;i.posts.forEach(p=>{p.published&&p.spots.forEach(C=>{let b=C.city||`${C.lat}, ${C.lon}`;f.set(b,(f.get(b)||0)+1)})}),$e(d,g("span",{class:"lbl"},"R\xE9seau"),ci("Relier tous les lieux d\u2019intervention par des arcs depuis le bureau",()=>n.network,p=>{n.network=p},{after:m}),g("p",{class:"hint"},f.size?`${f.size} lieux renseign\xE9s dans les contenus : ${[...f.keys()].join(", ")}. On les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB.`:"Aucun lieu pour l\u2019instant : on les ajoute dans chaque contenu, bloc \xAB Lieux d\u2019intervention \xBB."),n.network&&!qi(i,n.id).some(p=>p.location)?g("p",{class:"hint",style:{color:"var(--warn)"}},"Donne une position \xE0 un contenu de cette section (ton bureau) : les arcs partent de l\xE0."):null)};m();let _=g("div",{class:"chips",role:"radiogroup","aria-label":"Ouverture"}),v=()=>$e(_,...[["strip","Fiche 2D : images et texte en bandeau"],["focus3d","La carte vient vers la cam\xE9ra (fiche 3D)"]].map(([f,p])=>g("button",{type:"button",class:"chip",role:"radio","aria-pressed":String(n.open===f),"aria-checked":String(n.open===f),onclick:()=>{n.open=f,Re(),v()}},p)));return v(),g("div",{class:"card"},g("header",null,r,g("div",{class:"acts"},ze("Aper\xE7u",()=>qs(n.id),"sm"),ze("Contenus \u2192",()=>{L.filter.section=n.id,Gs("posts")},"sm"),ze("Supprimer",l,"sm danger"))),g("div",{class:"block"},g("h3",null,"Nom et adresse"),Yi("Nom dans le menu",n,"name",{list:!0,after:()=>{r.textContent=vt(n.name)||n.id}}),g("div",{class:"grid2"},g("label",{class:"f"},g("span",null,"Identifiant"),a,o),g("div",{style:{display:"grid",gap:"10px",alignContent:"start",paddingTop:"20px"}},ci("Visible sur le site",()=>n.visible,f=>{n.visible=f},{list:!0}),ci("Section d\u2019arriv\xE9e (apr\xE8s ENTER)",()=>i.settings.startSection===n.id,f=>{i.settings.startSection=f?n.id:(i.sections.find(p=>p!==n)||{}).id||""},{list:!0})))),g("div",{class:"block"},g("h3",null,"Objet 3D",g("small",null,"le mod\xE8le au centre de la section")),Pl(c,n.model,f=>{n.model=f,Re()},"Objet 3D"),g("p",{class:"hint"},"Pour ajouter ton propre fichier Collada (.dae), passe par ",g("a",{href:"#",onclick:f=>{f.preventDefault(),Gs("models")}},"Mod\xE8les 3D"),".")),g("div",{class:"block"},g("h3",null,"Disposition des cartes",g("small",null,"le style de la section")),Pl(u,n.layout,f=>{n.layout=f,m(),Re({list:!0})},"Disposition"),d),g("div",{class:"block"},g("h3",null,"Type de carte"),Pl(h,n.card,f=>{n.card=f,n.open=Sr[f].open,v(),Re({list:!0})},"Type de carte"),g("div",{style:{marginTop:"14px"}},g("span",{class:"lbl"},"Au clic sur une carte"),_)),g("div",{class:"block"},g("h3",null,"Tags",g("small",null,"pour trier les contenus, comme le menu \xAB cat\xE9gories \xBB du site")),M_(n,t),g("div",{class:"grid2",style:{marginTop:"16px"}},ct("Tag affich\xE9 \xE0 l\u2019ouverture",Ln([{value:"",label:"Tout"},...n.tags.map(f=>({value:f.id,label:vt(f.label)||f.id}))],()=>n.defaultTag||"",f=>{n.defaultTag=f})),ct("Cartes par page",wt(()=>n.perPage,f=>{n.perPage=Math.max(1,Math.min(40,f||1))},{type:"number",min:1,max:40}),"Au-del\xE0, les fl\xE8ches du site passent \xE0 la page suivante.")),g("div",{class:"grid2",style:{marginTop:"16px"}},ct("Taille des cartes (%)",wt(()=>n.cardScale||"",f=>{f===""||f===100?delete n.cardScale:n.cardScale=Math.max(40,Math.min(250,f))},{type:"number",min:40,max:250,step:5,placeholder:"100"}),"Agrandit ou r\xE9duit les cartes 3D de cette section. 100 = taille d\u2019origine."),ct("Distance de la cam\xE9ra (%)",wt(()=>n.camera||"",f=>{f===""||f===(n.layout==="map"?58:100)?delete n.camera:n.camera=Math.max(30,Math.min(250,f))},{type:"number",min:30,max:250,step:5,placeholder:n.layout==="map"?"58":"100"}),"Plus petit : la cam\xE9ra s\u2019approche de l\u2019objet. Vide : "+(n.layout==="map"?"58 pour la carte du monde.":"100."))),n.tags.length?b_(n):null))}function x_(){return/^https?:$/.test(location.protocol)&&/\/admin\/?/.test(location.pathname)?location.origin+location.pathname.replace(/admin\/?(index\.html)?$/,""):"https://hand-coded.net/"}function b_(n){let e=x_();return g("div",{class:"f",style:{marginTop:"16px"}},g("span",{class:"lbl"},"Liens \xE0 envoyer"),g("div",{class:"chips"},n.tags.map(t=>g("button",{type:"button",class:"chip",title:e+"?tag="+t.id,onclick:async()=>{let i=e+"?tag="+t.id;try{await navigator.clipboard.writeText(i),mt("Lien copi\xE9 : "+i)}catch{mt(i,"ok",9e3)}}},(vt(t.label)||t.id)+" \u29C9"))),g("p",{class:"hint"},`Un clic copie le lien. Le site s\u2019ouvre sur l\u2019accueil, puis cette section arrive avec ce tag d\xE9j\xE0 choisi, par exemple ${e}?tag=${n.tags[0].id}. Le nom du tag marche aussi, dans n\u2019importe quelle langue (?tag=son). Pour sauter l\u2019accueil : ${e}#${n.id}/${n.tags[0].id}.`))}function M_(n,e){let t=L.content,i=a=>t.posts.filter(l=>l.section===n.id&&l.tags.includes(a)).length,s=g("div",{class:"tags-ed"}),r={gridTemplateColumns:`20px repeat(${Cn().length}, minmax(0, 1fr)) 96px 46px auto`},o=()=>{$e(s,n.tags.length?g("div",{class:"tag-row head",style:r},g("span"),Cn().map(a=>g("span",null,Wi[a])),g("span",null,"Identifiant"),g("span",null,"Contenus"),g("span")):g("p",{class:"hint",style:{margin:0}},"Pas encore de tag : tous les contenus s\u2019affichent ensemble."),...n.tags.map((a,l)=>{let c=i(a.id),u=wt(()=>a.label.en,h=>{a.label.en=h},{placeholder:"English",onBlur:()=>{if(!i(a.id)&&/^tag(-\d+)?$/.test(a.id)&&a.label.en.trim()){let h=a.id;a.id=zn(a.label.en,n.tags.filter(d=>d!==a).map(d=>d.id)),n.defaultTag===h&&(n.defaultTag=a.id),Re(),o()}}});return g("div",{class:"tag-row",style:r},g("span",{class:"n",style:{textAlign:"left"}},l+1),Cn().map(h=>h==="en"?u:wt(()=>a.label[h]??"",d=>{a.label[h]=d},{placeholder:Wi[h]})),g("span",{class:"id",title:a.id},a.id),g("span",{class:"n"},c),g("span",{style:{display:"flex",gap:"2px"}},ze("\u2191",()=>{l&&(Bs(n.tags,l,l-1),Re(),o())},"sm icon ghost",{"aria-label":"Monter",disabled:!l}),ze("\u2193",()=>{l<n.tags.length-1&&(Bs(n.tags,l,l+1),Re(),o())},"sm icon ghost",{"aria-label":"Descendre",disabled:l===n.tags.length-1}),ze("\xD7",async()=>{c&&!await Rn("Supprimer le tag",`\xAB ${vt(a.label)} \xBB est utilis\xE9 par ${c} contenu${c>1?"s":""}. Il leur sera retir\xE9.`,"Supprimer","danger")||(t.posts.forEach(h=>{h.section===n.id&&(h.tags=h.tags.filter(d=>d!==a.id))}),n.tags.splice(l,1),n.defaultTag===a.id&&(n.defaultTag=""),Re(),e())},"sm icon ghost danger",{"aria-label":"Supprimer le tag"})))}),g("div",null,ze("+ Ajouter un tag",()=>{n.tags.push({id:zn("tag",n.tags.map(a=>a.id)),label:kn()}),Re(),e(),setTimeout(()=>{let a=s.querySelectorAll(".tag-row input");a.length&&a[a.length-2].focus()},0)},"sm")))};return o(),s}var S_={image:{title:"Titre",subtitle:"Sous-titre (artiste, client\u2026)",place:"Lieu",body:"Description",thumb:"Vignette de la carte"},portrait:{title:"Nom",subtitle:"R\xF4le",place:"Ville",body:"Bio courte",thumb:"Portrait"},text:{title:"Titre",subtitle:"Sous-titre",place:"Lieu",body:"Texte",thumb:"Petite image (facultative)"},place:{title:"Nom du lieu ou du bureau",subtitle:"Activit\xE9",place:"Ville affich\xE9e",body:"Adresse et coordonn\xE9es",thumb:"Logo ou photo"}};function Bl(n){let e=L.content.sections.find(r=>r.id===n.section),t=[],i=Cn(),s=r=>Cl(n.body[r]).length>0;return i.some(r=>!n.title[r])&&t.push("titre \xE0 traduire"),i.some(s)?i.every(s)||t.push("texte \xE0 traduire ("+i.filter(r=>!s(r)).map(r=>r.toUpperCase()).join(", ")+")"):t.push("pas de texte"),e&&["image","portrait"].includes(e.card)&&!n.thumb&&t.push("pas d\u2019image"),e&&e.layout==="map"&&!n.location&&t.push("pas de position"),t}function w_(){let n=L.content;if(n.sections.find(a=>a.id===L.filter.section)||(L.filter.section=n.sections[0]&&n.sections[0].id),!n.sections.length)return Ri("Contenus",null,[],g("div",{class:"card"},g("div",{class:"empty"},"Cr\xE9e d\u2019abord une section.")));let e=g("div",{class:"card sticky"}),t=g("div"),i=()=>n.sections.find(a=>a.id===L.filter.section),s=()=>{let a=L.filter.q.trim().toLowerCase();return qi(n,L.filter.section,{all:!0}).filter(l=>(!L.filter.tag||l.tags.includes(L.filter.tag))&&(!a||[l.title.en,l.title.fr,l.subtitle.en,l.subtitle.fr,l.place.en,l.place.fr,l.id].join(" ").toLowerCase().includes(a))&&(!L.filter.status||L.filter.status==="on"&&l.published||L.filter.status==="off"&&!l.published||L.filter.status==="todo"&&Bl(l).length))},r=()=>{let a=i(),l=s(),c=L.filter.tag||L.filter.q||L.filter.status;L.filter.tag&&!a.tags.find(v=>v.id===L.filter.tag)&&(L.filter.tag="");let u=g("div",{class:"tabs",role:"tablist"},n.sections.map(v=>g("button",{type:"button",role:"tab","aria-selected":String(v.id===a.id),onclick:()=>{L.filter.section=v.id,L.filter.tag="",L.sel.post=null,r(),o()}},vt(v.name)||v.id,g("small",null,Gl(v.id))))),h=g("input",{type:"search",placeholder:"Chercher\u2026",value:L.filter.q,"aria-label":"Chercher"});h.addEventListener("input",()=>{L.filter.q=h.value,_()});let d=g("div",{class:"toolbar"},Ln([{value:"",label:"Tous les tags"},...a.tags.map(v=>({value:v.id,label:vt(v.label)||v.id}))],()=>L.filter.tag,v=>{L.filter.tag=v,_()}),Ln([{value:"",label:"Tous"},{value:"on",label:"Visibles"},{value:"off",label:"Masqu\xE9s"},{value:"todo",label:"\xC0 compl\xE9ter"}],()=>L.filter.status,v=>{L.filter.status=v,_()}),h),m=g("div");function _(){let v=s(),f=L.filter.tag||L.filter.q||L.filter.status,p=g("ul",{class:"list"},v.map((C,b)=>{let I=Bl(C),U=g("div",{class:"th"+(a.card==="portrait"?" portrait":"")},C.thumb?null:mh(vt(C.title)));return C.thumb&&(U.style.backgroundImage=`url("${Vn(C.thumb)}")`),g("li",{class:"row","data-i":b,tabindex:0,"aria-current":String(C.id===L.sel.post),onclick:()=>{L.sel.post=C.id,_(),o(),Vl(t)},onkeydown:A=>{A.key==="Enter"&&A.currentTarget.click()}},f?null:g("span",{class:"grip","aria-hidden":"true"},"\u22EE\u22EE"),U,g("div",null,g("div",{class:"t"},vt(C.title)||g("i",{style:{color:"var(--ink-4)"}},"Sans titre")),g("div",{class:"m"},[C.tags.map(A=>{let D=a.tags.find(q=>q.id===A);return D?vt(D.label):null}).filter(Boolean).join(", "),C.date].filter(Boolean).join(" \xB7 ")||" ")),g("div",{class:"b"},C.published?null:g("span",{class:"badge off"},"masqu\xE9"),I.length?g("span",{class:"badge warn",title:I.join(", ")},"\xE0 compl\xE9ter"):null))}));f||Mh(p,(C,b)=>{let I=qi(n,a.id,{all:!0});Bs(I,C,b),I.forEach((U,A)=>{U.order=A}),Re(),_()}),$e(m,v.length?p:g("div",{class:"empty"},c?"Aucun contenu ne correspond.":"Aucun contenu dans cette section."),g("p",{class:"hint",style:{padding:"10px 12px",margin:0}},f?"Retire les filtres pour changer l\u2019ordre.":"Glisse pour changer l\u2019ordre des cartes sur le site."))}_(),$e(e,u,g("div",{class:"toolbar",style:{justifyContent:"space-between"}},g("span",{class:"lbl",style:{margin:0}},`${l.length} contenu${l.length>1?"s":""}`),ze("+ Nouveau contenu",()=>T_(a),"sm dark")),d,m),L.refreshList=_},o=()=>{let a=n.posts.find(l=>l.id===L.sel.post&&l.section===L.filter.section);$e(t,a?A_(a,r,o):g("div",{class:"card"},g("div",{class:"empty"},"Choisis un contenu dans la liste, ou cr\xE9e-en un nouveau.")))};return r(),o(),Ri("Contenus","Projets, savoir-faire, portraits, lieux : chaque contenu devient une carte dans sa section. Les textes s\u2019\xE9crivent en anglais et en fran\xE7ais.",[],g("div",{class:"cols"},e,t))}function E_(n){let e=L.content;return{id:zn("nouveau-contenu",e.posts.map(t=>t.id)),section:n.id,order:Math.max(-1,...qi(e,n.id,{all:!0}).map(t=>t.order??0))+1,published:!1,title:kn(),subtitle:kn(),place:kn(),date:"",tags:L.filter.tag?[L.filter.tag]:[],thumb:"",thumbBack:"",body:kn(),media:[],link:"",team:[],credits:"",location:null}}function T_(n){let e=E_(n);L.content.posts.push(e),L.sel.post=e.id,L.filter.q="",L.filter.status="",Re({nav:!0}),jt(),setTimeout(()=>{let t=Ar.querySelector(".card .lang input");t&&t.focus()},30)}function A_(n,e,t){let i=L.content,s=i.sections.find(H=>H.id===n.section),r=S_[s.card],o=g("h2",null,vt(n.title)||"Sans titre"),a=()=>{o.textContent=vt(n.title)||"Sans titre"},l={list:!0},c=`media/${n.id}`,u=async()=>{await Rn("Supprimer ce contenu",`\xAB ${vt(n.title)||"Sans titre"} \xBB sera retir\xE9 du site \xE0 la prochaine publication.`,"Supprimer","danger")&&(i.posts.splice(i.posts.indexOf(n),1),i.posts.forEach(H=>{H.team=H.team.filter(O=>O!==n.id)}),L.sel.post=null,Re({nav:!0}),jt())},h=()=>{let H=structuredClone(n);H.id=zn(n.id+"-copie",i.posts.map(O=>O.id)),H.order=(n.order??0)+.5,H.published=!1,cn.forEach(O=>{H.title[O]&&(H.title[O]+={fr:" (copie)",ca:" (c\xF2pia)",es:" (copia)"}[O]||" (copy)")}),i.posts.push(H),qi(i,s.id,{all:!0}).forEach((O,F)=>{O.order=F}),L.sel.post=H.id,Re({nav:!0}),jt()},d=(H,O,F)=>{let k=g("div",{class:"prev "+s.card}),W=g("div",{class:"acts"}),$=g("div",{class:"drop"},k,W),X=()=>{k.style.backgroundImage=n[H]?`url("${Vn(n[H])}")`:"",k.textContent=n[H]?"":H==="thumb"?mh(vt(n.title)):"",$e(W,ze(n[H]?"Remplacer\u2026":"Choisir une image\u2026",()=>Hs("image/*",!1,re),"sm"),n[H]?ze("Retirer",()=>{n[H]="",Re(l),X()},"sm ghost danger"):null,g("p",null,F))},re=async ne=>{if(ne[0])try{let ce=await Tr(ne[0],c,"thumb");Ci(ce.path,ce.blob),n[H]=ce.path,Re(l),X()}catch(ce){mt(ce.message,"bad",7e3)}};return Ol($,re),X(),g("div",{class:"f"},g("span",{class:"lbl"},O),$)},m=g("div",{class:"media-list"}),_=()=>{let H=g("div",{class:"media-add",role:"button",tabindex:0,onclick:()=>Hs("image/*,video/mp4,video/webm",!0,v),onkeydown:F=>{F.key==="Enter"&&F.currentTarget.click()}},g("span",null,"+ Ajouter des images ou des vid\xE9os",g("br"),g("small",null,"ou glisse-les ici")));Ol(H,v);let O=g("div",{class:"media-add",role:"button",tabindex:0,onkeydown:F=>{F.key==="Enter"&&F.currentTarget.click()},onclick:async()=>{let F=await Ul("Ajouter une vid\xE9o","Lien YouTube ou Vimeo (youtube.com/watch?v=\u2026, youtu.be/\u2026, vimeo.com/\u2026), ou adresse d\u2019une image en ligne","https://","Ajouter");!F||!/^https?:\/\/\S+$/.test(F.trim())||(n.media.push({src:F.trim()}),Re(),_())}},g("span",null,"+ Vid\xE9o YouTube / Vimeo",g("br"),g("small",null,"colle son lien (ou celui d\u2019une image en ligne)")));$e(m,...n.media.map((F,k)=>{let W=ph(F.src),X=W==="youtube"?g("img",{src:`https://i.ytimg.com/vi/${fh(F.src)}/hqdefault.jpg`,alt:"",loading:"lazy"}):W==="vimeo"?g("span",{style:{color:"#888",font:"italic 18px Georgia, serif"}},"Vimeo"):W==="video"?g("video",{src:Vn(F.src),muted:!0,preload:"metadata",playsinline:!0}):g("img",{src:Vn(F.src),alt:"",loading:"lazy"});return g("div",{class:"media-item"},g("div",{class:"pv"},X),g("div",{class:"ft"},g("span",{title:F.src},(W==="image"?"":"\u25B6 ")+(W==="youtube"?"YouTube":W==="vimeo"?"Vimeo "+F.src.split("/").pop():decodeURIComponent(F.src.split("?")[0].split("/").pop()))),ze("\u2190",()=>{k&&(Bs(n.media,k,k-1),Re(),_())},"sm icon ghost",{"aria-label":"Avant",disabled:!k}),ze("\u2192",()=>{k<n.media.length-1&&(Bs(n.media,k,k+1),Re(),_())},"sm icon ghost",{"aria-label":"Apr\xE8s",disabled:k===n.media.length-1}),ze("\xD7",()=>{n.media.splice(k,1),Re(),_()},"sm icon ghost danger",{"aria-label":"Retirer"})),g("div",{class:"cr"},wt(()=>F.credit||"",re=>{F.credit=re},{placeholder:"Cr\xE9dit photo"})))}),H,O)},v=async H=>{for(let O of H)try{let F=await Tr(O,c,"media");Ci(F.path,F.blob),n.media.push({src:F.path}),Re(),_()}catch(F){mt(F.message,"bad",7e3)}};_();let f=g("div",{class:"chips"}),p=()=>{$e(f,...s.tags.map(H=>g("button",{type:"button",class:"chip","aria-pressed":String(n.tags.includes(H.id)),onclick:()=>{n.tags=n.tags.includes(H.id)?n.tags.filter(O=>O!==H.id):s.tags.map(O=>O.id).filter(O=>O===H.id||n.tags.includes(O)),Re(l),p()}},vt(H.label)||H.id)),ze("+ Nouveau tag",async()=>{let H=await Ul("Nouveau tag",`Nom du tag (section \xAB ${vt(s.name)} \xBB)`,"","Cr\xE9er");if(!H)return;let O={id:zn(H,s.tags.map(F=>F.id)),label:Object.fromEntries(cn.map(F=>[F,H]))};s.tags.push(O),n.tags.push(O.id),Re(l),p(),mt("Tag cr\xE9\xE9. Tu peux traduire son nom dans Sections.")},"sm ghost"))};p();let C=i.posts.filter(H=>H.id!==n.id&&(i.sections.find(O=>O.id===H.section)||{}).card==="portrait"),b=g("div",{class:"chips"}),I=()=>$e(b,...C.length?C.map(H=>g("button",{type:"button",class:"chip","aria-pressed":String(n.team.includes(H.id)),onclick:()=>{n.team=n.team.includes(H.id)?n.team.filter(O=>O!==H.id):[...n.team,H.id],Re(),I()}},vt(H.title))):[g("p",{class:"hint",style:{margin:0}},"Ajoute des portraits dans une section de type \xAB Portrait \xBB pour les relier ici.")]);I();let U=g("div"),A=i.sections.find(H=>H.layout==="map"&&H.network),D=()=>{let H=W=>n.spots.some($=>$.city===W),O=W=>{n.spots.push({city:W,lat:Hn[W][0],lon:Hn[W][1]}),Re(),D()},F=eh([Bn(n.place,"en"),Bn(n.place,"fr")].join(" , ")).filter(W=>Hn[W]&&!H(W)),k=g("select",{"aria-label":"Ajouter une ville"},g("option",{value:""},"+ Ajouter une ville\u2026"),Object.keys(Hn).sort().filter(W=>!H(W)).map(W=>g("option",{value:W},W)),g("option",{value:"__other"},"Autre lieu (coordonn\xE9es)\u2026"));k.addEventListener("change",async()=>{let W=k.value;if(!W)return;if(W!=="__other"){O(W);return}let $=await R_();$&&(n.spots.push($),Re()),D()}),$e(U,g("div",{class:"chips"},n.spots.length?n.spots.map((W,$)=>g("span",{class:"chip on"},W.city||`${W.lat}, ${W.lon}`,g("button",{type:"button",class:"x","aria-label":"Retirer "+(W.city||"ce lieu"),onclick:()=>{n.spots.splice($,1),Re(),D()}},"\xD7"))):g("span",{class:"hint",style:{margin:0}},"Aucun lieu pour ce contenu.")),F.length?g("p",{class:"hint"},"Rep\xE9r\xE9 dans le champ \xAB Lieu \xBB :",F.map(W=>g("button",{type:"button",class:"chip sugg",onclick:()=>O(W)},"+ "+W))):null,g("div",{style:{marginTop:"10px",maxWidth:"320px"}},k))};D();let q=g("div"),S=()=>{let H=n.location,O=Ln([{value:"",label:"Pas de position"},...Object.keys(Hn).sort().map(F=>({value:F,label:F})),{value:"__other",label:"Autre (latitude / longitude)\u2026"}],()=>H?Hn[H.city]?H.city:"__other":"",F=>{F?F==="__other"?n.location={city:H?H.city:"",lat:H?H.lat:0,lon:H?H.lon:0}:n.location={city:F,lat:Hn[F][0],lon:Hn[F][1]}:n.location=null,S()},l);$e(q,g("div",{class:"grid3"},ct("Ville",O),H?ct("Latitude",wt(()=>H.lat,F=>{H.lat=+F||0},{type:"number",step:.01})):null,H?ct("Longitude",wt(()=>H.lon,F=>{H.lon=+F||0},{type:"number",step:.01})):null))};S();let N=wt(()=>n.id,()=>{},{spell:!1,onBlur:H=>{let O=oi(H.value);if(O===n.id){H.value=n.id;return}let F=zn(O,i.posts.filter(k=>k!==n).map(k=>k.id));i.posts.forEach(k=>{k.team=k.team.map(W=>W===n.id?F:W)}),n.id=F,L.sel.post=F,H.value=F,Re(l)}}),ee=g("span",{class:"badge"}),le=()=>{let H=Bl(n);ee.className="badge"+(H.length?" warn":""),ee.textContent=H.length?"\xC0 compl\xE9ter : "+H.join(", "):"Complet"};return le(),L.onChange=le,g("div",{class:"card"},g("header",null,o,g("div",{class:"acts"},ze("Aper\xE7u",()=>qs(s.id),"sm"),ze("Dupliquer",h,"sm"),ze("Supprimer",u,"sm danger"))),g("div",{class:"block",style:{display:"flex",gap:"18px",alignItems:"center",flexWrap:"wrap"}},ci("Visible sur le site",()=>n.published,H=>{n.published=H},l),ct("Section",Ln(i.sections.map(H=>({value:H.id,label:vt(H.name)||H.id})),()=>n.section,H=>{let O=i.sections.find(F=>F.id===H);n.section=H,n.tags=n.tags.filter(F=>O.tags.some(k=>k.id===F)),n.order=Math.max(-1,...qi(i,H,{all:!0}).filter(F=>F!==n).map(F=>F.order??0))+1,L.filter.section=H,mt(`D\xE9plac\xE9 dans \xAB ${vt(O.name)} \xBB.`),jt()})),ee),g("div",{class:"block"},g("h3",null,"Textes de la carte"),Yi(r.title,n,"title",{list:!0,after:a}),Yi(r.subtitle,n,"subtitle",l),Yi(r.place,n,"place",{...l,after:()=>D()}),g("div",{class:"grid2"},ct("Auteur de l\u2019\u0153uvre",wt(()=>n.author||"",H=>{n.author=H},{placeholder:"Ex. Romain Tardy"}),`Sign\xE9 sur la vignette 3D : \xAB ${vt(n.title)||"Titre"} \xB7 ${n.author||L.content.settings.name} \xBB. Vide : sign\xE9 ${L.content.settings.name}.`),g("div"),ct("Date",wt(()=>n.date,H=>{n.date=H},{...l,placeholder:"2019, ou 2017 \u2013 2019"})),ct("Lien",wt(()=>n.link,H=>{n.link=H.trim()},{type:"url",placeholder:"https://\u2026"}),s.card==="place"?"Affich\xE9 sur la fiche du lieu.":"Affich\xE9 sous la fiche : \xAB Voir le site \xBB."))),g("div",{class:"block"},g("h3",null,r.body),__(n.body,"\xC9cris ici. Les paragraphes se r\xE9partissent tout seuls sur les panneaux du site.")),g("div",{class:"block"},g("h3",null,"Images"),d("thumb",r.thumb,s.card==="image"?"Format paysage. Sans image, la carte affiche le titre sur fond noir.":s.card==="portrait"?"Carr\xE9, cadr\xE9 sur le visage. Sans image : les initiales.":"Facultatif."),["image","portrait"].includes(s.card)?g("details",null,g("summary",{class:"lbl",style:{cursor:"pointer",margin:"6px 0 10px"}},"Dos de la carte (facultatif)"),d("thumbBack","Image au dos","Vue quand la carte est de dos. Par d\xE9faut : la vignette, p\xE2lie.")):null,s.open==="strip"?g("div",{class:"f",style:{marginTop:"6px"}},g("span",{class:"lbl"},"Images et vid\xE9os de la fiche"),m,g("p",{class:"hint"},"La premi\xE8re s\u2019affiche avant le texte, les autres apr\xE8s. Vid\xE9os MP4 ou WebM, id\xE9alement moins de 20 Mo.")):null),g("div",{class:"block"},g("h3",null,"Tags"),f),["image","text"].includes(s.card)?g("div",{class:"block"},g("h3",null,"Qui a travaill\xE9 dessus ?",g("small",null,"les portraits s\u2019affichent sur la fiche")),b,g("div",{style:{marginTop:"12px"}},ct("Autres cr\xE9dits",wt(()=>n.credits,H=>{n.credits=H},{placeholder:"Ex. Tigre Lab, Studio X"})))):null,s.layout!=="map"?g("div",{class:"block"},g("h3",null,"Lieux d\u2019intervention",g("small",null,A?`les points du r\xE9seau sur la carte de \xAB ${vt(A.name)} \xBB`:"pour le r\xE9seau d\u2019une section en style \xAB Carte \xBB")),U):null,g("details",{class:"block",open:s.layout==="map"},g("summary",{class:"lbl",style:{cursor:"pointer",margin:0}},"Position sur la carte du monde",s.layout==="map"?"":" (pour le style \xAB Carte \xBB)"),g("div",{style:{marginTop:"12px"}},q)),g("details",{class:"block"},g("summary",{class:"lbl",style:{cursor:"pointer",margin:0}},"Avanc\xE9"),g("div",{class:"grid2",style:{marginTop:"12px"}},ct("Identifiant",N,"Sert aux liens \xAB \xE9quipe \xBB et au dossier des images."),ct("Dossier des fichiers",g("input",{type:"text",value:c+"/",disabled:!0})))))}function C_(){let n=L.content;n.models.find(r=>r.id===L.sel.model)||(L.sel.model=n.models[0]&&n.models[0].id);let e=g("div",{class:"card sticky"}),t=g("div"),i=()=>{$e(e,g("header",{class:"toolbar",style:{justifyContent:"space-between"}},g("span",{class:"lbl",style:{margin:0}},`${n.models.length} mod\xE8le${n.models.length>1?"s":""}`),ze("+ Importer un .dae",hh,"sm dark")),g("ul",{class:"list"},n.models.map(r=>{let o=n.sections.filter(a=>a.model===r.id);return g("li",{class:"row",tabindex:0,"aria-current":String(r.id===L.sel.model),onclick:()=>{L.sel.model=r.id,i(),s(),Vl(t)},onkeydown:a=>{a.key==="Enter"&&a.currentTarget.click()}},g("div",{class:"th",style:{background:"#f4f4f2"}},"\u25B2"),g("div",null,g("div",{class:"t"},r.name),g("div",{class:"m"},o.length?"Utilis\xE9 par "+o.map(a=>vt(a.name)).join(", "):"Pas utilis\xE9")),g("div",{class:"b"},r.builtin?g("span",{class:"badge"},"origine"):null,L.staged.has(r.file)?g("span",{class:"badge new"},"nouveau"):null))})),g("div",{class:"block"},g("h3",null,"Importer un mod\xE8le"),g("p",{class:"hint",style:{marginTop:0}},"S\xE9lectionne ensemble le fichier .dae et ses textures (JPG, PNG). Export Collada depuis Maya, Blender, Cinema 4D\u2026 Les noms de fichiers des textures doivent correspondre \xE0 ceux cit\xE9s dans le .dae."),(()=>{let r=g("div",{class:"media-add",role:"button",tabindex:0,style:{minHeight:"80px"},onclick:hh},"Glisse ici le .dae et ses textures");return Ol(r,o=>Wl(o)),r})())),e.querySelectorAll(".row .th").forEach((r,o)=>{let a=n.models[o];kl.snapshot(a).then(l=>{r.style.background=`#f4f4f2 url("${l}") center / cover`,r.textContent=""}).catch(()=>{})})},s=()=>{let r=n.models.find(v=>v.id===L.sel.model);if(!r){$e(t,g("div",{class:"card"},g("div",{class:"empty"},"Aucun mod\xE8le.")));return}let o=g("div",{class:"model-view"}),a=g("p",{class:"msg"});o.appendChild(a);let l=()=>{kl.show(o,r,a)},c=n.sections.filter(v=>v.model===r.id),u=async()=>{if(c.length){mt(`Ce mod\xE8le sert \xE0 ${c.map(v=>vt(v.name)).join(", ")}. Choisis un autre objet pour ces sections d\u2019abord.`,"bad",7e3);return}if(await Rn("Supprimer le mod\xE8le",`\xAB ${r.name} \xBB sera retir\xE9 de la liste${r.builtin?"":" et ses fichiers supprim\xE9s du d\xE9p\xF4t \xE0 la prochaine publication"}.`,"Supprimer","danger")){if(!r.builtin){let v=r.file.replace(/[^/]+$/,"");[r.file,...(r.textures||[]).map(f=>v+f)].forEach(f=>{L.staged.has(f)&&(URL.revokeObjectURL(L.staged.get(f).url),L.staged.delete(f))})}n.models.splice(n.models.indexOf(r),1),L.sel.model=null,Re({nav:!0}),jt()}},h=g("input",{type:"range",min:-180,max:180,step:5,value:r.rotationY||0}),d=g("b",null,(r.rotationY||0)+"\xB0");h.addEventListener("input",()=>{r.rotationY=+h.value,d.textContent=h.value+"\xB0",Re()}),h.addEventListener("change",l);let m=wt(()=>r.height||420,v=>{r.height=Math.max(50,Math.min(1200,v||420))},{type:"number",min:50,max:1200,step:10});m.addEventListener("change",l);let _=ct("Hauteur dans la sc\xE8ne",m,"En unit\xE9s de la sc\xE8ne : les cartes sont pos\xE9es \xE0 environ 500 du centre. 420 donne la taille des objets d\u2019origine.");_.hidden=r.scaleMode!=="fit",$e(t,g("div",{class:"card"},g("header",null,g("h2",null,r.name),g("div",{class:"acts"},c[0]?ze("Aper\xE7u",()=>qs(c[0].id),"sm"):null,ze("Supprimer",u,"sm danger"))),o,g("div",{class:"block"},ct("Nom",wt(()=>r.name,v=>{r.name=v},{list:!0})),g("div",{class:"grid2"},ct("Taille",Ln([{value:"pv",label:"Comme le fichier (\xD7100, r\xE8gle de 2008)"},{value:"fit",label:"Ajuster \xE0 une hauteur"}],()=>r.scaleMode,v=>{r.scaleMode=v,_.hidden=v!=="fit",v==="fit"&&!r.height&&(r.height=420),l()})),_),g("div",{class:"f"},g("span",{class:"lbl"},"Rotation ",d),h),ct("Faces sans texture",Ln([{value:"wire",label:"Fil de fer jaune (comme 2008)"},{value:"white",label:"Blanc mat"},{value:"black",label:"Noir mat"}],()=>r.untextured,v=>{r.untextured=v,l()})),g("p",{class:"hint"},"Fichier : ",g("code",null,r.file),(r.textures||[]).length?` \xB7 ${r.textures.length} texture${r.textures.length>1?"s":""}`:"",c.length?" \xB7 utilis\xE9 par "+c.map(v=>vt(v.name)).join(", "):"")))),l()};return L.refreshList=i,i(),s(),Ri("Mod\xE8les 3D","Les objets Collada (.dae) pos\xE9s au centre des sections. Ceux d\u2019origine viennent du site de 2008 ; tu peux importer les tiens.",[],g("div",{class:"cols"},e,t))}function hh(){Hs(".dae,.DAE,image/*,.tga",!0,Wl)}function R_(){let n=g("input",{type:"text",placeholder:"Ex. Puebla"}),e=g("input",{type:"number",step:"any",placeholder:"19.04"}),t=g("input",{type:"number",step:"any",placeholder:"-98.20"});return Rr("Ajouter un lieu",g("div",null,ct("Nom affich\xE9",n),g("div",{class:"grid2"},ct("Latitude",e),ct("Longitude",t)),g("p",{class:"hint"},"Dans Google Maps, un clic droit sur un endroit affiche ses coordonn\xE9es : la latitude d\u2019abord, puis la longitude.")),[{label:"Annuler",value:null,cls:"ghost"},{label:"Ajouter",cls:"dark",value:()=>n.value.trim()&&e.value!==""&&t.value!==""&&Math.abs(+e.value)<=90&&Math.abs(+t.value)<=180?{city:n.value.trim(),lat:+e.value,lon:+t.value}:null}])}function L_(){let n=document.createElement("canvas");n.width=n.height=4;let e=n.getContext("2d");return e.fillStyle="#fff",e.fillRect(0,0,4,4),new Promise(t=>n.toBlob(t,"image/png"))}async function Wl(n){let e=L.content,t=n.find(h=>/\.dae$/i.test(h.name));if(!t){mt("Il faut un fichier .dae (Collada) dans la s\xE9lection.","bad");return}if(t.size>3e7){mt("Ce .dae p\xE8se plus de 30 Mo : all\xE8ge le maillage avant de l\u2019importer.","bad",7e3);return}let i=new DOMParser().parseFromString(await t.text(),"application/xml");if(i.querySelector("parsererror")||i.documentElement.nodeName!=="COLLADA"){mt("Ce fichier n\u2019est pas un Collada lisible.","bad");return}let s=zn(t.name.replace(/\.dae$/i,""),e.models.map(h=>h.id)),r=`models/${s}/`,o=[],a=[],l=new Map;for(let h of i.querySelectorAll("library_images image init_from")){let d=(h.querySelector("ref")||h).textContent.trim();if(!d)continue;let m=decodeURIComponent(d.replace(/^file:\/*/,"").split(/[\\/]/).pop()),_=l.get(m.toLowerCase());if(_===void 0){let v=n.find(p=>p.name.toLowerCase()===m.toLowerCase());_=oi(m.replace(/\.[^.]+$/,""))+"."+(v?Xi(m)||"jpg":"png");let f=2;for(;o.includes(_);)_=oi(m.replace(/\.[^.]+$/,""))+"-"+f+++"."+(Xi(m)||"jpg");v||a.push(m),Ci(r+_,v||await L_()),o.push(_),l.set(m.toLowerCase(),_)}(h.querySelector("ref")||h).textContent=_}let c=new XMLSerializer().serializeToString(i),u={id:s,name:t.name.replace(/\.dae$/i,""),file:r+s+".dae",textures:o,scaleMode:"fit",height:420,rotationY:0,untextured:o.length?"wire":"white",builtin:!1};Ci(u.file,new Blob([c],{type:"model/vnd.collada+xml"}));try{Fl(c,u)}catch(h){[u.file,...o.map(d=>r+d)].forEach(d=>L.staged.delete(d)),mt("Three.js ne parvient pas \xE0 lire ce mod\xE8le : "+h.message,"bad",8e3);return}e.models.push(u),L.sel.model=s,Re({nav:!0}),L.view!=="models"?Gs("models"):jt(),mt(a.length?`Mod\xE8le import\xE9. ${a.length} texture${a.length>1?"s":""} manque${a.length>1?"nt":""} (${a.join(", ")}) : remplac\xE9e${a.length>1?"s":""} par du blanc. R\xE9importe le mod\xE8le avec ces fichiers pour les voir.`:"Mod\xE8le import\xE9. Choisis-le dans une section pour l\u2019utiliser.",a.length?"bad":"ok",9e3)}function P_(){let n=[];return L.content.posts.forEach(e=>{["thumb","thumbBack"].forEach(t=>{/^https?:/.test(e[t]||"")&&n.push({p:e,get:()=>e[t],set:i=>{e[t]=i}})}),e.media.forEach(t=>{/^https?:/.test(t.src)&&ph(t.src)==="image"&&n.push({p:e,get:()=>t.src,set:i=>{t.src=i}})})}),n}function I_(){let n=P_();if(!n.length)return null;let e=new Set(n.map(s=>s.get())),t=g("div",{class:"progress",hidden:!0},g("i")),i=ze("Rapatrier dans le d\xE9p\xF4t",async()=>{i.disabled=!0,t.hidden=!1;let s=new Map,r=0,o=0,a=0;for(let l of e){let c=n.find(u=>u.get()===l).p;try{let u=await fetch(l,{mode:"cors"});if(!u.ok)throw new Error(u.status);let h=await u.blob(),d=decodeURIComponent(l.split("?")[0].split("/").pop()).replace(/\+/g," ")||"image.jpg",m=await Tr(new File([h],d,{type:h.type||"image/jpeg"}),`media/${c.id}`,"media");Ci(m.path,m.blob),s.set(l,m.path),r++}catch{o++}t.firstChild.style.width=Math.round(++a/e.size*100)+"%"}n.forEach(l=>{s.has(l.get())&&l.set(s.get(l.get()))}),Re({nav:!0}),mt(o?`${r} image${r>1?"s":""} rapatri\xE9e${r>1?"s":""}. ${o} n\u2019ont pas pu \xEAtre lues depuis ce navigateur (le serveur d\u2019origine les prot\xE8ge) : t\xE9l\xE9charge-les et renvoie-les depuis la fiche du contenu.`:`${r} images rapatri\xE9es. Publie pour les envoyer dans le d\xE9p\xF4t.`,o?"bad":"ok",1e4),jt()},"sm dark");return g("div",{class:"card",style:{marginBottom:"18px"}},g("header",null,g("h2",null,`${e.size} image${e.size>1?"s":""} encore en ligne ailleurs`),g("div",{class:"acts"},i)),g("div",{class:"body"},g("p",{class:"hint",style:{marginTop:0}},"Ces images viennent de l\u2019ancien site (Squarespace) et sont affich\xE9es depuis son serveur. Pour que ton site n\u2019en d\xE9pende plus, rapatrie-les : elles seront r\xE9duites puis envoy\xE9es dans media/ \xE0 la prochaine publication."),t))}function N_(){let n=L.content,e=zs(),t=g("div",{class:"card"},g("div",{class:"empty"},"Lecture des fichiers du d\xE9p\xF4t\u2026")),i=s=>{let r=[];return n.posts.forEach(o=>{(o.thumb===s||o.thumbBack===s||o.media.some(a=>a.src===s))&&r.push(vt(o.title)||o.id)}),n.models.forEach(o=>{(o.file===s||(o.textures||[]).some(a=>o.file.replace(/[^/]+$/,"")+a===s))&&r.push("Mod\xE8le "+o.name)}),n.settings.logo===s&&r.push("Logo"),r};return(async()=>{let s=[];try{s=L.files||(L.files=await L.backend.listFiles(["media/","models/"]))}catch(m){$e(t,g("div",{class:"empty"},"Impossible de lister les fichiers : "+Vs(m)));return}let r=new Map(s.filter(m=>!/(^|\/)\./.test(m.path)).map(m=>[m.path,{...m,state:"online"}]));L.staged.forEach((m,_)=>r.set(_,{path:_,size:m.blob.size,state:"new"}));let o=[...r.values()].sort((m,_)=>m.path.localeCompare(_.path)),a=m=>/^models\/[^/]+$/.test(m),l=o.filter(m=>m.state==="online"&&!e.has(m.path)&&!L.deletes.has(m.path)&&!a(m.path)),c=new Set,u=ze("Supprimer la s\xE9lection",()=>{c.forEach(m=>L.deletes.add(m)),Re({nav:!0}),mt(`${c.size} fichier${c.size>1?"s":""} sera supprim\xE9 \xE0 la prochaine publication.`),jt()},"sm danger",{disabled:!0}),h=()=>{u.disabled=!c.size,u.textContent=c.size?`Supprimer la s\xE9lection (${c.size})`:"Supprimer la s\xE9lection"},d=g("table",{class:"files"},g("thead",null,g("tr",null,g("th",{style:{width:"30px"}}),g("th",{style:{width:"60px"}}),g("th",null,"Fichier"),g("th",null,"Utilis\xE9 par"),g("th",null,"Taille"),g("th",null,"\xC9tat"))),g("tbody",null,o.map(m=>{let _=i(m.path),v=/\.(jpe?g|png|webp|gif|svg)$/i.test(m.path),f=L.deletes.has(m.path),C=l.includes(m)?g("input",{type:"checkbox","aria-label":"S\xE9lectionner "+m.path}):null;return C&&C.addEventListener("change",()=>{C.checked?c.add(m.path):c.delete(m.path),h()}),g("tr",{style:f?{opacity:.5}:null},g("td",null,C),g("td",null,v?g("img",{class:"mini",src:Vn(m.path),alt:"",loading:"lazy"}):g("span",{class:"badge"},Xi(m.path))),g("td",{class:"p"},m.path),g("td",null,_.length?_.join(", "):g("span",{style:{color:"var(--ink-4)"}},"\u2014")),g("td",null,Dl(m.size)),g("td",null,f?g("span",null,g("span",{class:"badge warn"},"\xE0 supprimer")," ",ze("Garder",()=>{L.deletes.delete(m.path),Re({nav:!0}),jt()},"sm ghost")):m.state==="new"?g("span",{class:"badge new"},e.has(m.path)?"\xE0 envoyer":"ajout\xE9, plus utilis\xE9"):_.length?g("span",{class:"badge"},"en ligne"):a(m.path)?g("span",{class:"badge off"},"origine"):g("span",{class:"badge off"},"inutilis\xE9")))})));$e(t,g("header",null,g("h2",null,`${o.length} fichier${o.length>1?"s":""}`),g("div",{class:"acts"},l.length?ze(`Tout s\xE9lectionner : ${l.length} inutilis\xE9${l.length>1?"s":""}`,()=>{d.querySelectorAll("tbody input[type=checkbox]").forEach(m=>{m.checked=!0,c.add(m.closest("tr").querySelector(".p").textContent)}),h()},"sm"):null,u,L.backend.kind!=="demo"?ze(L.backend.kind==="folder"?"Relire le dossier":"Relire le d\xE9p\xF4t",()=>{L.files=null,jt()},"sm ghost"):null)),o.length?g("div",{style:{overflowX:"auto"}},d):g("div",{class:"empty"},L.backend.kind==="demo"?"En d\xE9mo, seuls les fichiers ajout\xE9s depuis ce navigateur apparaissent ici.":"Aucun fichier dans media/ ni models/."))})(),Ri("M\xE9dias","Tous les fichiers du dossier media/ et des mod\xE8les 3D. Les fichiers qui ne servent plus peuvent \xEAtre supprim\xE9s pour garder le d\xE9p\xF4t l\xE9ger.",[],I_(),t)}function D_(n){n.homeVideo=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",controls:!0,random:!0},n.homeVideo||{});let e=n.homeVideo,t=g("span",{class:"hint",style:{margin:0}}),i=()=>{t.textContent=e.src?e.src.split("/").pop():"Aucune : les photos des projets d\xE9filent en travelling lent."},s=()=>Hs("video/mp4,video/webm,.mp4,.webm",!1,async r=>{if(r[0])try{let o=await Tr(r[0],"media/accueil","media");Ci(o.path,o.blob),e.src=o.path,Re(),i(),mt("Vid\xE9o ajout\xE9e : elle part sur le site \xE0 la prochaine publication.")}catch(o){mt(o.message,"bad",8e3)}});return i(),g("div",{class:"f"},g("span",{class:"lbl"},"Vid\xE9o de l\u2019accueil, en carr\xE9s"),g("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},ze(e.src?"Remplacer la vid\xE9o\u2026":"Choisir une vid\xE9o\u2026",s,"sm"),e.src?ze("Retirer",()=>{e.src="",Re(),i()},"sm ghost"):null,t),g("p",{class:"hint"},"MP4 sans son ou avec, en boucle : un extrait de 20 \xE0 30 secondes en 720p suffit (moins de 15 Mo). Elle d\xE9marre \xE0 un endroit au hasard. Une vid\xE9o YouTube ne marche pas ici : il faut le fichier."),g("div",{style:{marginTop:"10px"}},ci("R\xE9glage au hasard \xE0 chaque visite (grille, contraste, couleur, sens)",()=>e.random!==!1,r=>{e.random=r,jt()})),e.random!==!1?g("p",{class:"hint"},"Chaque visiteur arrive sur une combinaison diff\xE9rente, puis la change avec le clavier. Coupe cet interrupteur pour fixer le r\xE9glage ci-dessous."):g("div",{class:"grid2",style:{marginTop:"10px"}},ct("Taille de grille (px)",wt(()=>e.cell,r=>{e.cell=Math.max(6,Math.min(40,+r||14))},{type:"number",min:6,max:40})),ct("Contraste",wt(()=>e.contrast,r=>{e.contrast=Math.max(.4,Math.min(3,+r||1))},{type:"number",min:.4,max:3,step:.1})),ct("Carr\xE9 maximal (%)",wt(()=>e.size,r=>{e.size=Math.max(40,Math.min(100,+r||92))},{type:"number",min:40,max:100})),ct("Couleur des carr\xE9s",Ln([{value:"white",label:"Blanc"},{value:"grey",label:"Gris"},{value:"accent",label:"Couleur d\u2019accent"},{value:"source",label:"Couleurs de la vid\xE9o"}],()=>e.color,r=>{e.color=r})),ct("Les carr\xE9s grossissent",Ln([{value:"light",label:"\xE0 la lumi\xE8re"},{value:"dark",label:"dans l\u2019ombre"}],()=>e.mode,r=>{e.mode=r}))),g("div",{style:{marginTop:"10px"}},ci("Les visiteurs ont un petit clavier pour r\xE9gler la vid\xE9o, activer le son et leur cam\xE9ra",()=>e.controls!==!1,r=>{e.controls=r})))}function Sh(n){sh(n).forEach(t=>{document.querySelector(`link[data-hc-font][href="${CSS.escape(t)}"]`)||document.head.appendChild(g("link",{rel:"stylesheet",href:t,"data-hc-font":""}))})}var U_=[[100,"Thin 100"],[200,"Extra light 200"],[300,"Light 300"],[400,"Regular 400"],[500,"Medium 500"],[600,"Semibold 600"],[700,"Bold 700"],[800,"Extra bold 800"],[900,"Black 900"]];function O_(n){let e=g("div"),t=[...new Set(Us.map(r=>r.group))],i=()=>$e(e,t.map(r=>g("div",{class:"typo-group"},g("h4",null,r),Us.filter(o=>o.group===r).map(s)))),s=r=>{let o=g("div",{class:"typo-row"}),a=r.only||["font","size","lh","weight","italic","ls","upper"],l=b=>Os(n,r.id)[b],c=(b,I)=>{n.typo=n.typo||{};let U=n.typo[r.id]=n.typo[r.id]||{};if(I===""||I===null||I===void 0||I===r[b]||b==="italic"&&!I&&!r.italic||b==="upper"&&!I&&!r.upper||b==="ls"&&+I===(r.ls||0)?delete U[b]:U[b]=I,Object.keys(U).length||delete n.typo[r.id],Sh(n),Re(),p(),r.id==="logo"){let A=document.querySelector(".top .brand img");A&&!n.logo&&(A.src=$i());let D=document.querySelector(".logo-prev");D&&!n.logo&&(D.style.backgroundImage=`url("${$i()}")`)}},u=(b,I,U={})=>{let A=g("input",{type:"number",step:U.step||1,min:U.min,max:U.max,value:l(b)??"",placeholder:U.ph});return A.addEventListener("input",()=>c(b,A.value===""?"":+A.value)),g("label",null,I,A)},h=(b,I)=>{let U=g("input",{type:"checkbox",checked:!!l(b)});return U.addEventListener("change",()=>c(b,U.checked)),g("label",{class:"ck"},U,I)},d=()=>{let b=l("font"),I=/^g:/.test(b||""),U=g("select",null,[...new Set(Mr.map(D=>D.group))].map(D=>g("optgroup",{label:D},Mr.filter(q=>q.group===D).map(q=>g("option",{value:q.id,selected:q.id===b},q.label+(q.id===r.font?" \xB7 d\xE9faut":""))))),g("optgroup",{label:"Google Fonts"},g("option",{value:"__g",selected:I},"Autre police Google Fonts\u2026"))),A=g("input",{type:"text",placeholder:"Nom exact, ex. Inter, Playfair Display",value:I?b.slice(2):"",spellcheck:"false"});return A.hidden=!I,U.addEventListener("change",()=>{U.value==="__g"?(A.hidden=!1,A.focus(),A.value.trim()&&c("font","g:"+A.value.trim())):(A.hidden=!0,c("font",U.value))}),A.addEventListener("change",()=>{let D=A.value.trim();D&&c("font","g:"+D)}),g("label",{class:"fam"},"Police",U,A)},m=()=>{let b=g("select",null,U_.map(([I,U])=>g("option",{value:I,selected:+l("weight")===I},U)));return b.addEventListener("change",()=>c("weight",+b.value)),g("label",null,"Graisse",b)},_=()=>{let b=g("input",{type:"text",value:l("text")??"",maxlength:4,style:{width:"70px"}});return b.addEventListener("input",()=>c("text",b.value)),g("label",null,"Lettres",b)},v=g("div",{class:"typo-sample"+(/^(bs|bseg|offh|offp|menu|ui|sig1|sig2)$/.test(r.id)?" light":"")}),f=ze("R\xE9tablir",()=>{if(n.typo&&delete n.typo[r.id],Re(),i(),r.id==="logo"){let b=document.querySelector(".top .brand img");b&&!n.logo&&(b.src=$i())}},"sm ghost rst"),p=()=>{let b=Os(n,r.id);if(o.classList.toggle("changed",!!b.changed),f.hidden=!b.changed,r.id==="logo"){$e(v,g("img",{src:Ll(n.accent||"#ffcc00",n),alt:"",style:{width:"64px",height:"64px",display:"block"}})),v.style.background="#fff";return}let I=r.scale?22*(b.scale||100)/100:b.size||14;Object.assign(v.style,{fontFamily:b.css,fontSize:Math.min(I,56)+"px",lineHeight:b.lh?Math.min(b.lh,64)+"px":"1.2",fontWeight:b.weight||400,fontStyle:b.italic?"italic":"normal",letterSpacing:(b.ls||0)+"em",textTransform:b.upper?"uppercase":"none"}),v.textContent=r.sample||"Hand Coded",document.fonts&&document.fonts.load(`${b.italic?"italic ":""}${b.weight||400} ${I}px ${b.css}`).catch(()=>{})},C=g("div",{class:"typo-ctl"},a.includes("font")?d():null,a.includes("size")?u("size",r.id==="logo"?"Taille":"Taille (px)",{min:6,max:160}):null,a.includes("lh")?u("lh","Interligne (px)",{min:6,max:200,step:.5}):null,a.includes("weight")?m():null,a.includes("ls")?u("ls","Espacement (em)",{step:.01,min:-.2,max:1,ph:"0"}):null,a.includes("scale")?u("scale","Taille (%)",{min:50,max:200,step:5}):null,a.includes("text")?_():null,a.includes("italic")?h("italic","Italique"):null,a.includes("upper")?h("upper","Majuscules"):null);return $e(o,g("div",{class:"nm"},g("b",null,r.label),r.hint?g("small",null,r.hint):null,f),C,v),p(),o};return i(),g("div",{class:"block"},g("h3",null,"Typographie",g("small",null,"police, taille, interligne, graisse de chaque texte du site")),g("p",{class:"hint"},"Par d\xE9faut, le site garde la typographie d\u2019origine. Un point jaune signale un r\xE9glage modifi\xE9 ; \xAB R\xE9tablir \xBB revient \xE0 l\u2019origine. Les polices h\xE9berg\xE9es avec le site marchent partout, m\xEAme hors ligne. Une police Google Fonts se charge depuis Google quand le site est en ligne : tape son nom exact, tel qu\u2019il appara\xEEt sur fonts.google.com."),e,g("div",{style:{marginTop:"12px"}},ze("Tout r\xE9tablir",()=>{delete n.typo,Re(),i();let r=document.querySelector(".top .brand img");r&&!n.logo&&(r.src=$i())},"sm ghost")))}function F_(){let n=L.content,e=n.settings,i=((A,D,q)=>{let S=g("textarea",{rows:3,placeholder:q});return S.value=(A[D]||[]).join(`
`),S.addEventListener("input",()=>{A[D]=S.value.split(`
`).map(N=>N.trim()).filter(Boolean),Re()}),S})(e.home,"ticker","Un slogan par ligne"),s=g("div",{class:"f"}),r=(A,D=[])=>{let q=new Set((e.home.ticker||[]).map(S=>S.toUpperCase()));$e(s,g("span",{class:"lbl"},"Slogans re\xE7us",D.length?g("small",null," "+D.length):null),g("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}},ze(A==="loading"?"Chargement\u2026":D.length?"Actualiser":"Afficher les slogans re\xE7us",o,"sm",{disabled:A==="loading"}),A&&A!=="loading"&&A!=="ok"?g("span",{class:"hint",style:{margin:0}},A):null),D.length?g("div",{class:"inbox"},D.map(S=>{let N=String(S.slogan).toUpperCase(),ee=q.has(N);return g("div",{class:"inbox-row"},g("span",{class:"d"},S.date?new Date(S.date).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit"}):""),g("span",{class:"s"},S.slogan),g("span",{class:"m"},[S.lang,S.tag].filter(Boolean).join(" \xB7 ")),ze(ee?"Au bandeau":"+ Bandeau",()=>{e.home.ticker=[...e.home.ticker||[],N],i.value=e.home.ticker.join(`
`),Re(),r("ok",D)},"sm ghost",{disabled:ee}))})):null)},o=async()=>{if(!/^https:\/\//.test(e.sloganInbox||"")){r("Renseigne d\u2019abord l\u2019adresse de collecte ci-dessus.");return}r("loading");try{let D=await(await fetch(e.sloganInbox+(e.sloganInbox.includes("?")?"&":"?")+"limit=500")).json();r(D.slogans&&D.slogans.length?"ok":"Aucun slogan pour l\u2019instant.",D.slogans||[])}catch{r("Lecture impossible : v\xE9rifie l\u2019adresse et que le script est d\xE9ploy\xE9 pour \xAB Tout le monde \xBB.")}};r("");let a=g("div",{class:"logo-prev"}),l=g("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"}}),c=()=>{a.style.backgroundImage=`url("${e.logo?Vn(e.logo):$i()}")`,$e(l,ze(e.logo?"Remplacer\u2026":"Choisir un logo\u2026",()=>Hs("image/*",!1,u),"sm"),e.logo?ze("Logo par d\xE9faut",()=>{e.logo="",Re(),c()},"sm ghost"):null,g("span",{class:"hint",style:{margin:0}},"SVG ou PNG carr\xE9, fond transparent. Affich\xE9 en haut \xE0 droite et sur l\u2019accueil."))},u=async A=>{if(A[0])try{let D=await Tr(A[0],"media/site","logo");Ci(D.path,D.blob),e.logo=D.path,Re(),c()}catch(D){mt(D.message,"bad")}};c();let h=g("input",{type:"color",value:e.accent||"#ffcc00","aria-label":"Couleur d\u2019accent"}),d=g("div",{class:"swatches"}),m=A=>{e.accent=A,h.value=A,document.documentElement.style.setProperty("--accent",A),c();let D=document.querySelector(".top .brand img");D&&!e.logo&&(D.src=$i()),Re(),_()},_=()=>$e(d,h,...["#ffcc00","#f1b800","#ff5a1f","#e8175d","#00b3a4","#2f6bff","#111111"].map(A=>g("button",{type:"button",style:{background:A},"aria-label":A,"aria-pressed":String((e.accent||"").toLowerCase()===A),onclick:()=>m(A)})));h.addEventListener("input",()=>m(h.value)),_();let v=g("div"),f=()=>$e(v,...e.offices.map((A,D)=>{typeof A.name!="object"&&(A.name=Object.fromEntries(cn.map(S=>[S,A.name||""])));let q=g("textarea",{rows:2,placeholder:"Adresse, une ligne par ligne"});return q.value=(A.lines||[]).join(`
`),q.addEventListener("input",()=>{A.lines=q.value.split(`
`).map(S=>S.trim()).filter(Boolean),Re()}),g("div",{class:"office-row"},Cn().map(S=>g("div",{class:"lang","data-l":S.toUpperCase()},wt(()=>A.name[S]??"",N=>{A.name[S]=N},{placeholder:"Nom ("+Wi[S]+")"}))),g("div",{class:"full"},q),g("div",{class:"full"},wt(()=>A.mail,S=>{A.mail=S.trim()},{type:"email",placeholder:"contact@\u2026"})),ze("Retirer ce bureau",()=>{e.offices.splice(D,1),Re(),f()},"sm ghost danger del"))}),ze("+ Ajouter un bureau",()=>{e.offices.push({name:kn(),lines:[],mail:""}),Re(),f()},"sm",{style:{marginTop:"10px"}}));f();let p=g("div"),C=()=>$e(p,...e.social.map((A,D)=>g("div",{class:"social-row"},wt(()=>A.label,q=>{A.label=q},{placeholder:"Instagram"}),wt(()=>A.url,q=>{A.url=q.trim()},{type:"url",placeholder:"https://\u2026"}),ze("\xD7",()=>{e.social.splice(D,1),Re(),C()},"sm icon ghost danger",{"aria-label":"Retirer"}))),ze("+ Ajouter un lien",()=>{e.social.push({label:"",url:""}),Re(),C()},"sm",{style:{marginTop:"10px"}}));C();let b=g("div",{class:"chips"});$e(b,...cn.map(A=>g("button",{type:"button",class:"chip","aria-pressed":String(e.langs.includes(A)),onclick:()=>{if(e.langs.includes(A)){if(e.langs.length===1)return;e.langs=e.langs.filter(D=>D!==A)}else e.langs=cn.filter(D=>D===A||e.langs.includes(D));e.langs.includes(e.defaultLang)||(e.defaultLang=e.langs[0]),Re(),jt()}},Wi[A])),e.langs.length>1?g("span",{class:"hint",style:{margin:"0 0 0 6px"}},"Si la langue du visiteur n\u2019est pas propos\xE9e : ",Ln(e.langs.map(A=>({value:A,label:Wi[A]})),()=>e.defaultLang,A=>{e.defaultLang=A})):null);let U=A=>{let D=g("textarea",{rows:3});return D.value=(e.taglines[A]||[]).join(`
`),D.addEventListener("input",()=>{e.taglines[A]=D.value.split(`
`).map(q=>q.trim()).filter(Boolean),Re()}),g("div",{class:"lang","data-l":A.toUpperCase()},D)};return Ri("R\xE9glages","Identit\xE9, accueil et coordonn\xE9es, dans chaque langue du site.",[],g("div",{class:"card"},g("div",{class:"block"},g("h3",null,"Identit\xE9"),g("div",{class:"grid2"},ct("Nom du studio",wt(()=>e.name,A=>{e.name=A})),ct("Depuis",wt(()=>e.since,A=>{e.since=A},{placeholder:"2012"}))),g("div",{class:"f"},g("span",{class:"lbl"},"Logo"),g("div",{style:{display:"flex",gap:"14px",alignItems:"center"}},a,l)),g("div",{class:"f"},g("span",{class:"lbl"},"Couleur d\u2019accent"),d,g("p",{class:"hint"},"Bandeau LED, tirets des cartes, lieux, bouton ENTER."))),g("div",{class:"block"},g("h3",null,"Apparence"),ci("Site en n\xE9gatif \xE0 l\u2019arriv\xE9e",()=>e.negative,A=>{e.negative=A}),g("p",{class:"hint"},"Toute la page s\u2019inverse : fond noir, sc\xE8ne 3D et textes en n\xE9gatif. Les images et vid\xE9os des contenus gardent leurs vraies couleurs, et la couleur d\u2019accent reste la m\xEAme."),g("div",{style:{marginTop:"12px"}},ci("Signer les vignettes 3D (\u0153uvre \xB7 auteur \xB7 cr\xE9dit photo)",()=>e.signImages!==!1,A=>{e.signImages=A})),g("p",{class:"hint"},"Une mention discr\xE8te en bas de chaque vignette des cartes 3D, pour que l\u2019\u0153uvre d\u2019un artiste ne passe pas pour une cr\xE9ation du studio. L\u2019auteur et le cr\xE9dit photo (celui de la premi\xE8re image) se r\xE8glent dans chaque contenu."),g("div",{style:{marginTop:"12px"}},ci("Les visiteurs basculent n\xE9gatif / positif en cliquant sur le logo",()=>e.negativeToggle!==!1,A=>{e.negativeToggle=A})),g("p",{class:"hint"},"Le logo par d\xE9faut a un anneau \xE0 la couleur d\u2019accent sur fond blanc, et blanc sur fond noir. Le choix du visiteur est gard\xE9 pour sa prochaine visite.")),O_(e),g("div",{class:"block"},g("h3",null,"Showreel"),ct("Lien de la vid\xE9o",wt(()=>e.showreel,A=>{e.showreel=A.trim()},{placeholder:"https://youtu.be/\u2026",spell:!1}),"YouTube, Vimeo ou adresse d\u2019un fichier MP4. Un bouton \xAB Showreel \xBB sous le logo l\u2019ouvre \xE0 tout moment : l\u2019\xE9cran glisse au premier plan, la vid\xE9o part son coup\xE9, le visiteur active le son d\u2019un clic. Laisse vide pour retirer le bouton.")),g("div",{class:"block"},g("h3",null,"Langues du site"),b,g("p",{class:"hint"},"Le site s\u2019ouvre dans la langue du navigateur du visiteur quand elle est propos\xE9e. Il peut ensuite en changer en bas \xE0 gauche. Le back-office affiche un champ par langue activ\xE9e.")),g("div",{class:"block"},g("h3",null,"Signature",g("small",null,"en haut \xE0 gauche du site, une ligne par ligne")),g("div",{class:"pair"},Cn().map(U))),g("div",{class:"block"},g("h3",null,"Accueil"),Yi("Invitation dans le champ",e.home,"placeholder",{hint:"Le texte gris du grand champ o\xF9 les visiteurs tapent leur bullshit slogan."}),Yi("Exemple sous le champ",e.home,"example"),ct("Slogans du bandeau LED",i,"Ils d\xE9filent en points LED tout en haut. Les slogans tap\xE9s par un visiteur s\u2019ajoutent devant, sur son \xE9cran."),ct("Collecte des slogans",wt(()=>e.sloganInbox,A=>{e.sloganInbox=A.trim()},{placeholder:"https://script.google.com/macros/s/\u2026/exec",spell:!1}),"Adresse d\u2019un script Google reli\xE9 \xE0 une feuille de calcul : chaque slogan valid\xE9 par un visiteur y est enregistr\xE9, avec la date, la langue et le tag du lien client. La mise en place prend cinq minutes, voir le fichier tools/slogans-google-sheet.gs. Vide : les slogans restent sur l\u2019\xE9cran du visiteur."),s,Yi("Bouton d\u2019entr\xE9e",e.home,"enter"),D_(e),ct("Section d\u2019arriv\xE9e",Ln(n.sections.map(A=>({value:A.id,label:vt(A.name)||A.id})),()=>e.startSection,A=>{e.startSection=A}))),g("div",{class:"block"},g("h3",null,"Bureaux"),v),g("div",{class:"block"},g("h3",null,"R\xE9seaux et liens"),p)))}function k_(){let n=g("div",{class:"card"},g("div",{class:"empty"},"Lecture de l\u2019historique\u2026")),e=g("div",{class:"card"});return B_(e),L.backend.kind==="demo"?($e(n,g("div",{class:"block"},g("h3",null,"D\xE9mo"),g("p",null,"En d\xE9mo, chaque publication remplace la pr\xE9c\xE9dente, dans ce navigateur seulement : rien n\u2019est \xE9crit dans les fichiers du site. Pour garder ton travail, exporte-le ci-dessous, ou travaille dans le dossier du site (Chrome, Edge) ou sur GitHub."),ze("Revenir au contenu d\u2019origine",async()=>{await Rn("R\xE9initialiser la d\xE9mo","Le contenu de d\xE9monstration d\u2019origine sera recharg\xE9. Une copie de ton travail reste dans les sauvegardes.","R\xE9initialiser","danger")&&(await ks({content:L.content,at:Date.now()}),await L.backend.reset(),await li(L.draftKey),location.reload())},"danger"))),Ri("Historique",null,[],e,n)):((async()=>{try{let t=await L.backend.lastCommits(20);$e(n,...t.map((i,s)=>g("div",{class:"commit"},g("div",null,g("b",null,i.commit.message.split(`
`)[0]),g("small",null,`${new Date(i.commit.author.date).toLocaleString("fr-FR")} \xB7 ${i.commit.author.name}`,s===0?L.backend.kind==="folder"?" \xB7 version enregistr\xE9e":" \xB7 version en ligne":"")),g("div",{style:{display:"flex",gap:"6px"}},i.html_url?g("a",{class:"btn sm ghost",href:i.html_url,target:"_blank",rel:"noopener"},"Sur GitHub"):null,s===0?null:ze("Restaurer",async()=>{if(await Rn("Restaurer cette version","Le contenu de cette version remplace ton brouillon. Rien ne change tant que tu ne publies pas. Les images supprim\xE9es depuis peuvent manquer.","Restaurer dans le brouillon"))try{L.content=await L.backend.loadAt(i.sha),Re({nav:!0}),mt("Version charg\xE9e dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(r){mt("Lecture impossible : "+Vs(r),"bad")}},"sm"))))),t.length||$e(n,g("div",{class:"empty"},"Pas encore de version publi\xE9e."))}catch(t){$e(n,g("div",{class:"empty"},"Impossible de lire l\u2019historique : "+Vs(t)))}})(),Ri("Historique",L.backend.kind==="folder"?"Chaque publication garde une version dans content/versions/ (les 40 derni\xE8res). Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.":"Chaque publication est une version du site. Tu peux en recharger une dans le brouillon, la v\xE9rifier, puis la republier.",[],e,n))}function B_(n){let e=()=>new Date().toISOString().slice(0,16).replace(/[:T]/g,"-"),t=ze("Exporter le contenu (.json)",()=>{let r=g("a",{href:URL.createObjectURL(new Blob([JSON.stringify(L.content,null,1)+`
`],{type:"application/json"})),download:`hand-coded-content-${e()}.json`});document.body.appendChild(r),r.click(),r.remove(),mt("Fichier t\xE9l\xE9charg\xE9 : il contient tous les textes et r\xE9glages, avec ou sans publication.")},"sm"),i=ze("Importer un contenu\u2026",()=>Hs("application/json,.json",!1,async r=>{try{let o=JSON.parse(await r[0].text()),a=o&&o.content&&o.settings===void 0?o.content:o;if(!a||!a.settings||!Array.isArray(a.posts))throw new Error("ce fichier n\u2019est pas un contenu du site");if(!await Rn("Importer ce contenu",`\xAB ${r[0].name} \xBB remplace ton brouillon. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.`,"Importer"))return;await ks({content:L.content,at:Date.now()});let l=L.content,c=gn(a);l.models.forEach(u=>{c.models.some(h=>h.id===u.id)||c.models.push(u)}),L.content=c,Re({nav:!0}),Er(),mt("Contenu import\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie.")}catch(o){mt("Import impossible : "+(o.message||o),"bad",8e3)}}),"sm ghost"),s=g("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"10px"}});$e(n,g("div",{class:"block"},g("h3",null,"Sauvegardes"),g("p",{class:"hint",style:{marginTop:0}},"Le fichier export\xE9 contient tous les textes, r\xE9glages et liens vers les images. Il se r\xE9importe ici, ou se pose tel quel dans le dossier du site sous le nom content/content.json."),g("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},t,i),s)),(async()=>{let r=[],o=await Ti("draft-backup:"+L.draftKey);o&&o.content&&r.push(ze(`R\xE9cup\xE9rer le brouillon mis de c\xF4t\xE9 le ${new Date(o.at).toLocaleString("fr-FR")}`,async()=>{if(!await Rn("R\xE9cup\xE9rer le brouillon","Ce brouillon remplace ton brouillon actuel (qui est mis de c\xF4t\xE9 \xE0 son tour).","R\xE9cup\xE9rer"))return;let u={content:L.content,at:Date.now()};L.content=gn(o.content),await ks(u),Re({nav:!0}),Er(),mt("Brouillon r\xE9cup\xE9r\xE9.")},"sm ghost"));let a=(await nh()).filter(u=>typeof u=="string"&&/^(draft:|demo:content:|draft-backup:)/.test(u)&&u!==L.draftKey&&u!=="draft-backup:"+L.draftKey&&!(L.backend.kind==="demo"&&u==="demo:content:v6")),l=u=>u.startsWith("demo:content:")?"publication de la d\xE9mo":u.startsWith("draft-backup:")?"brouillon mis de c\xF4t\xE9 ("+u.replace(/^draft-backup:draft:/,"").replace(/^demo:v\d+$/,"d\xE9mo").replace(/^folder:/,"dossier ")+")":u.startsWith("draft:demo:")?"brouillon de la d\xE9mo":u.startsWith("draft:folder:")?"brouillon du dossier \xAB "+u.slice(13)+" \xBB":"brouillon GitHub "+u.slice(6),c=[];for(let u of a){let h=await Ti(u),d=h&&(h.settings?h:h.content);d&&d.settings&&Array.isArray(d.posts)&&c.push({k:u,c:d,at:h&&h.at||0})}c.sort((u,h)=>h.at-u.at);for(let u of c)r.push(ze(`Reprendre : ${l(u.k)}${u.at?" du "+new Date(u.at).toLocaleString("fr-FR"):""}`,async()=>{await Rn("Reprendre ce travail","Ce contenu remplace ton brouillon (qui est mis de c\xF4t\xE9). Les images ajout\xE9es ailleurs ne suivent pas : renvoie-les si besoin. Rien n\u2019est publi\xE9 tant que tu ne cliques pas sur Publier.","Reprendre")&&(await ks({content:L.content,at:Date.now()}),L.content=gn(structuredClone(u.c)),Re({nav:!0}),Er(),mt("Charg\xE9 dans le brouillon. V\xE9rifie avec l\u2019aper\xE7u, puis publie."))},"sm ghost"));$e(s,r)})()}function qs(n){let e={};L.recent.forEach((I,U)=>{e[U]=I.url}),L.staged.forEach((I,U)=>{e[U]=I.url}),(L.backend.kind==="demo"||L.backend.kind==="folder")&&L.backend.urls&&L.backend.urls.forEach((I,U)=>{e[U]||(e[U]=I)});let t=L.content.sections.filter(I=>I.visible),i=n||(L.view==="posts"?L.filter.section:L.view==="sections"?L.sel.section:L.view==="settings"?"__home":"")||L.content.settings.startSection;i&&i!=="__home"&&!t.find(I=>I.id===i)&&(i=t[0]&&t[0].id);let s=g("div",{class:"frame"}),r="desk",o=async()=>{let I={};for(let[U,A]of[...L.recent,...L.staged])A&&A.blob&&(I[U]=A.blob);if(L.backend.kind==="folder"&&L.backend.urls){for(let U of L.backend.urls.keys())if(!I[U])try{I[U]=await L.backend.readBlob(U)}catch{}}if(L.backend.kind==="demo"&&L.backend.urls){for(let U of L.backend.urls.keys())if(!I[U]){let A=await Ti("demo:file:"+U).catch(()=>null);A&&(I[U]=A)}}return I},a=null,l=0,c=20261102,u=g("div",{class:"preview-warn"}),h=()=>{let I=l;try{I=I||a&&a.contentWindow&&a.contentWindow.HC_SITE_VERSION||0}catch{}if(I>=c){u.classList.remove("on");return}u.textContent="Le moteur du site dans "+(L.backend.kind==="github"?"le d\xE9p\xF4t":"ce dossier")+" est plus ancien que le back-office : l\u2019aper\xE7u ne montre pas tous tes r\xE9glages (typographie, showreel\u2026). Remplace assets/hc/site.bundle.js et site.js par la derni\xE8re version"+(L.backend.kind==="github"?", envoie-les sur GitHub, puis attends une minute.":"."),u.classList.add("on")},d=async I=>{!a||I.source!==a.contentWindow||!I.data||I.data.type!=="hc-preview-ready"||(l=I.data.version||0,h(),a.contentWindow.postMessage({type:"hc-preview",data:window.__hcPreview,blobs:await o()},"*"))};window.addEventListener("message",d);let m=()=>{window.__hcPreview={content:structuredClone(L.content),files:e,start:i==="__home"?"":i},a=g("iframe",{title:"Aper\xE7u du site",allow:"fullscreen"}),l=0,u.classList.remove("on"),window.HC_SITE_HTML||a.addEventListener("load",()=>setTimeout(h,3e3)),window.HC_SITE_HTML?a.srcdoc=window.HC_SITE_HTML:a.src=Cr+"index.html?preview="+Date.now();let I={desk:["100%","100%"],tab:["820px","1080px"],mob:["390px","780px"]}[r];a.style.width=I[0],a.style.height=I[1],a.style.maxHeight="100%",$e(s,a)},_=g("div",{class:"sizes",role:"group","aria-label":"Taille d\u2019\xE9cran"}),v=()=>$e(_,...[["desk","Bureau"],["tab","Tablette"],["mob","Mobile"]].map(([I,U])=>g("button",{type:"button","aria-pressed":String(r===I),onclick:()=>{r=I,v(),m()}},U)));v();let f=g("select",{"aria-label":"Section"},g("option",{value:"__home",selected:i==="__home"},"Accueil"),t.map(I=>g("option",{value:I.id,selected:I.id===i},vt(I.name))));f.addEventListener("change",()=>{i=f.value,m()});let p=()=>{b.remove(),document.removeEventListener("keydown",C),window.removeEventListener("message",d)},C=I=>{I.key==="Escape"&&document.activeElement&&!document.activeElement.closest("iframe")&&p()},b=g("div",{class:"preview",role:"dialog","aria-label":"Aper\xE7u"},g("div",{class:"bar"},g("b",null,"Aper\xE7u"),g("span",null,Ws()?"avec les modifications non publi\xE9es":"identique au site en ligne"),g("span",{class:"sp"}),f,_,ze("Recharger",m,"sm"),ze("Fermer",p,"sm primary")),u,s);document.body.appendChild(b),document.addEventListener("keydown",C),m()}var en="hc-admin";function wh(){let n={};try{n=JSON.parse(localStorage.getItem(en)||"{}")}catch{}try{let e=sessionStorage.getItem(en+":token");e&&!n.token&&(n.token=e)}catch{}return n}function z_(){let n=/^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);if(!n)return{};let e=location.pathname.split("/").filter(Boolean);return{owner:n[1],repo:e.length>1&&e[0]!=="admin"?e[0]:`${n[1]}.github.io`}}async function ja(n){let e={};try{let _=await fetch("config.json",{cache:"no-store"});_.ok&&(e=await _.json())}catch{}let t=wh(),i=z_(),s=_=>t[_]||e[_]||i[_]||"",r=g("input",{type:"text",value:s("owner"),required:!0,autocomplete:"username",spellcheck:"false"}),o=g("input",{type:"text",value:s("repo"),required:!0,spellcheck:"false"}),a=g("input",{type:"text",value:s("branch")||"main",spellcheck:"false"}),l=g("input",{type:"text",value:s("root"),placeholder:"(racine du d\xE9p\xF4t)",spellcheck:"false"}),c=g("input",{type:"password",value:t.token||"",required:!0,autocomplete:"current-password",placeholder:"github_pat_\u2026",spellcheck:"false"});[r,o].forEach(_=>_.addEventListener("change",()=>{let v=Th({owner:r.value,repo:o.value});v.owner&&(r.value=v.owner),v.repo&&(o.value=v.repo)}));let u=g("input",{type:"checkbox",checked:!!t.remember}),h=g("p",{class:"err",role:"alert",hidden:!n},n||""),d=g("button",{type:"submit",class:"btn primary"},"Se connecter"),m=g("form",{onsubmit:async _=>{_.preventDefault(),h.hidden=!0,d.disabled=!0,d.textContent="Connexion\u2026";let v={owner:r.value.trim(),repo:o.value.trim(),branch:a.value.trim()||"main",root:l.value.trim(),token:c.value.trim(),remember:u.checked};try{await Ah(v)}catch(f){h.textContent="Connexion impossible : "+Vs(f),h.hidden=!1,d.disabled=!1,d.textContent="Se connecter"}}},g("h2",null,"Connexion"),g("p",{class:"lead"},"Le back-office publie directement dans ton d\xE9p\xF4t GitHub. Il lui faut un jeton d\u2019acc\xE8s limit\xE9 \xE0 ce d\xE9p\xF4t."),g("details",null,g("summary",null,"Cr\xE9er le jeton (2 minutes)"),g("ol",null,g("li",null,"Ouvre ",g("a",{href:"https://github.com/settings/personal-access-tokens/new",target:"_blank",rel:"noopener"},"GitHub \u203A Fine-grained tokens \u203A Generate new token"),"."),g("li",null,"Repository access : \xAB Only select repositories \xBB, choisis le d\xE9p\xF4t du site."),g("li",null,"Permissions \u203A Repository \u203A ",g("b",null,"Contents : Read and write"),". Rien d\u2019autre."),g("li",null,"Choisis une date d\u2019expiration, g\xE9n\xE8re, et colle le jeton ci-dessous."))),h,g("div",{class:"grid2"},ct("Propri\xE9taire (compte GitHub)",r),ct("D\xE9p\xF4t",o)),ct("Jeton d\u2019acc\xE8s",c,"Il reste dans ce navigateur et ne part que vers api.github.com."),g("details",{style:{background:"#fff"}},g("summary",null,"Options avanc\xE9es"),g("div",{class:"grid2",style:{marginTop:"12px"}},ct("Branche",a),ct("Dossier du site dans le d\xE9p\xF4t",l,"Vide si le site est \xE0 la racine."))),g("label",{class:"switch",style:{margin:"4px 0 16px"}},u,"Rester connect\xE9e sur cet ordinateur"),g("div",{class:"actions"},d,ze("Essayer sans GitHub (d\xE9mo)",()=>Ch(),"ghost")),await H_());$e(Ja,g("div",{class:"login"},g("aside",{class:"side"},g("div",null,g("img",{src:Cr+"assets/hc/ui/logo-default.svg",alt:""}),g("h1",null,"Hand Coded."),g("p",null,"Back-office du site : sections, objets 3D, contenus, tags.")),g("small",null,"Moteur 3D d\u2019apr\xE8s le site Fat-Man Collective de 2008.")),m)),(r.value&&o.value?c:r).focus()}async function Eh(){try{if(localStorage.getItem(en+":h-reading"))return localStorage.removeItem(en+":h-reading"),await li("folder:handle"),null;localStorage.setItem(en+":h-reading","1")}catch{}let n=await Ti("folder:handle").catch(()=>null);try{localStorage.removeItem(en+":h-reading")}catch{}return n||null}async function H_(){let n=g("div",{class:"folder-card"});if(!Gi.supported())return $e(n,g("h3",null,"Travailler dans le dossier du site"),g("p",null,"Ce navigateur ne sait pas \xE9crire dans un dossier de l\u2019ordinateur. Ouvre ce back-office dans Chrome ou Edge pour que \xAB Publier \xBB enregistre directement dans les fichiers du site. Sinon, utilise GitHub, ou exporte ton travail depuis Historique \u203A Sauvegardes.")),n;let e=await Eh(),t=g("p",{class:"err",role:"alert",hidden:!0}),i=async()=>{t.hidden=!0;try{let s=await window.showDirectoryPicker({id:"hand-coded-site",mode:"readwrite"});await Ka(s)}catch(s){if(s&&s.name==="AbortError")return;t.textContent="Ouverture impossible : "+(s.message||s),t.hidden=!1}};return $e(n,g("h3",null,"Travailler dans le dossier du site"),g("p",null,"Sans GitHub : choisis le dossier du site sur ton ordinateur (celui qui contient index.html et content). \xAB Publier \xBB y \xE9crit directement les textes, images et mod\xE8les. Tu peux ensuite d\xE9placer, copier ou envoyer ce dossier : tout est dedans."),t,g("div",{class:"actions"},e?ze(`Rouvrir le dossier \xAB ${e.name} \xBB`,async()=>{t.hidden=!0;try{await Ka(e,!0)}catch(s){t.textContent="Ce dossier n\u2019est plus accessible (d\xE9plac\xE9 ou renomm\xE9 ?) : choisis-le \xE0 nouveau. "+(s.message||""),t.hidden=!1}},"primary"):null,ze(e?"Choisir un autre dossier\u2026":"Choisir le dossier du site\u2026",i,e?"ghost":"primary"))),n}async function Ka(n,e){let t=new Gi(n);if(!await t.permission(!0))throw new Error("acc\xE8s refus\xE9");await t.check();let i=await t.load();await t.prepare(i);try{await Ds("folder:handle",n),localStorage.setItem(en+":mode","folder")}catch{}L.backend=t,L.draftKey="draft:folder:"+n.name,await ql(i)}function V_(){try{localStorage.removeItem(en+":mode")}catch{}if(dh){location.reload();return}zl().then(()=>{L.content=null,ja()})}function Th(n){let e={...n},t=/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.repo||"")||/github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(e.owner||"");return t&&(e.owner=t[1],e.repo=t[2]),e.owner=String(e.owner||"").trim().replace(/^@/,"").replace(/\/+$/,""),e.repo=String(e.repo||"").trim().replace(/\.git$/i,"").replace(/^.*\//,""),e.branch=String(e.branch||"").trim()||"main",e.root=String(e.root||"").trim().replace(/^\/+|\/+$/g,""),e.token=String(e.token||"").trim(),e}var Nl=n=>Object.assign(new Error(n),{status:0});async function Ah(n,e){n=Th(n);let t=new Wa(n);try{await t.check()}catch(s){if(s.status===404){let r=null;try{r=await t.req("/user")}catch{}throw Nl(`GitHub ne trouve pas le d\xE9p\xF4t \xAB ${n.owner}/${n.repo} \xBB`+(r?` (le jeton appartient au compte \xAB ${r.login} \xBB)`:"")+". V\xE9rifie le propri\xE9taire et le nom du d\xE9p\xF4t, tels qu\u2019ils apparaissent dans l\u2019adresse github.com/propri\xE9taire/d\xE9p\xF4t.")}throw s}try{await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`)}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/branches?per_page=30`)).map(o=>o.name)}catch{}throw Nl(`la branche \xAB ${t.cfg.branch} \xBB n\u2019existe pas dans ${n.owner}/${n.repo}.`+(r.length?` Branches du d\xE9p\xF4t : ${r.join(", ")}.`:""))}let i;try{i=await t.load()}catch(s){if(s.status!==404)throw s;let r=[];try{r=(await t.req(`${t.repoPath}/git/trees/${encodeURIComponent(t.cfg.branch)}?recursive=1`)).tree.filter(a=>a.type==="blob"&&/(^|\/)content\/content\.json$/.test(a.path)).map(a=>a.path.replace(/\/?content\/content\.json$/,""))}catch{}if(r.length===1)n.root=r[0],t.cfg.root=r[0],i=await t.load(),e||setTimeout(()=>mt(`Site trouv\xE9 dans le dossier \xAB ${r[0]||"(racine)"} \xBB du d\xE9p\xF4t : r\xE9glage corrig\xE9.`),400);else throw Nl(`pas de content/content.json dans ${n.root?"le dossier \xAB "+n.root+" \xBB":"la racine"} du d\xE9p\xF4t.`+(r.length?` Il y en a dans : ${r.map(o=>o||"(racine)").join(", ")}. Indique le bon dans Options avanc\xE9es \u203A Dossier du site.`:" Envoie d\u2019abord les fichiers du site dans le d\xE9p\xF4t."))}L.head=await t.req(`${t.repoPath}/git/ref/heads/${encodeURIComponent(t.cfg.branch)}`).then(s=>s.object.sha);try{localStorage.setItem(en,JSON.stringify({owner:n.owner,repo:n.repo,branch:n.branch,root:n.root,remember:!!n.remember,token:n.remember?n.token:void 0})),n.remember?sessionStorage.removeItem(en+":token"):sessionStorage.setItem(en+":token",n.token)}catch{}L.backend=t,L.cfg=n,L.draftKey=`draft:${n.owner}/${n.repo}@${t.cfg.branch}`,await ql(i)}function G_(){try{let n=JSON.parse(localStorage.getItem(en)||"{}");delete n.token,localStorage.setItem(en,JSON.stringify(n)),sessionStorage.removeItem(en+":token")}catch{}location.reload()}async function Ch(){try{localStorage.removeItem(en+":mode")}catch{}L.backend=new qa(Cr),L.draftKey="draft:demo:v6";let n=await L.backend.load();await L.backend.prepare(n),await ql(n)}async function ql(n){L.content=n,L.base=JSON.stringify(n);try{Sh(n.settings),document.fonts&&await Promise.race([Promise.all(rh(n.settings).map(t=>document.fonts.load(t).catch(()=>{}))),new Promise(t=>setTimeout(t,2500))])}catch{}await u_(),document.documentElement.style.setProperty("--accent",L.content.settings.accent||"#ffcc00");let e=(location.hash.match(/^#\/(\w+)/)||[])[1];bh.some(([t])=>t===e)&&(L.view=e),Er()}document.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="s"&&L.content&&(n.preventDefault(),Hl())});window.addEventListener("beforeunload",()=>{L.content&&zl()});(async function(){try{if(dh){await Ch();return}let e=wh(),t="";try{t=localStorage.getItem(en+":mode")||""}catch{}if(t==="folder"&&Gi.supported()){let i=await Eh();if(i)try{if(await new Gi(i).permission(!1)){await Ka(i,!0);return}}catch{}return ja()}if(e.token&&e.owner&&e.repo)try{await Ah(e,!0);return}catch(i){return ja("Reconnexion impossible : "+Vs(i))}await ja()}catch(e){console.error(e),$e(Ja,g("p",{class:"boot"},"Le back-office n\u2019a pas pu d\xE9marrer : "+(e.message||e)))}})();window.__admin={S:L,publish:Hl,go:Gs,openPreview:qs,importModelFiles:Wl,startFolder:Ka};})();
