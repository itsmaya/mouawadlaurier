/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var nd="160";var Iy=0,jf=1,Ny=2;var km=1,Dy=2,ss=3,Zn=0,gn=1,Xn=2;var Is=0,ca=1,Zf=2,Jf=3,Kf=4,id=5,Ri=100,Uy=101,Oy=102,Qf=103,ep=104,Cc=200,sd=201,ky=202,By=203,Mu=204,wu=205,Fy=206,zy=207,Hy=208,rd=209,Vy=210,Gy=211,Wy=212,$y=213,qy=214,Xy=0,Yy=1,jy=2,$l=3,Zy=4,Jy=5,Ky=6,Qy=7,Rc=0,ev=1,tv=2,Ns=0,nv=1,iv=2,sv=3,rv=4,av=5,ov=6,tp="attached",lv="detached",Bm=300,da=301,fa=302,Su=303,Eu=304,Lc=306,Us=1e3,On=1001,Tu=1002,wn=1003,np=1004;var Hh=1005;var $n=1006,cv=1007;var Os=1008;var Ds=1009,hv=1010,uv=1011,ad=1012,Fm=1013,Ps=1014,as=1015,co=1016,zm=1017,Hm=1018,mr=1020,dv=1021,di=1023,fv=1024,pv=1025,gr=1026,pa=1027,mv=1028,Vm=1029,gv=1030,Gm=1031,Wm=1033,Vh=33776,Gh=33777,Wh=33778,$h=33779,ip=35840,sp=35841,rp=35842,ap=35843,$m=36196,op=37492,lp=37496,cp=37808,hp=37809,up=37810,dp=37811,fp=37812,pp=37813,mp=37814,gp=37815,yp=37816,vp=37817,xp=37818,_p=37819,bp=37820,Mp=37821,qh=36492,wp=36494,Sp=36495,yv=36283,Ep=36284,Tp=36285,Ap=36286;var ql=2300,Xl=2301,Xh=2302,Cp=2400,Rp=2401,Lp=2402,vv=2500;var qm=3e3,yr=3001,xv=3200,_v=3201,od=0,bv=1,fi="",jt="srgb",ls="srgb-linear",ld="display-p3",Pc="display-p3-linear",Yl="linear",Gt="srgb",jl="rec709",Zl="p3";var Hr=7680;var Pp=519,Mv=512,wv=513,Sv=514,Xm=515,Ev=516,Tv=517,Av=518,Cv=519,Au=35044;var Ip="300 es",Cu=1035,os=2e3,Jl=2001,ks=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=1234567,ro=Math.PI/180,ma=180/Math.PI;function wi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function Un(n,e,t){return Math.max(e,Math.min(t,n))}function cd(n,e){return(n%e+e)%e}function Rv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Lv(n,e,t){return n!==e?(t-n)/(e-n):0}function ao(n,e,t){return(1-t)*n+t*e}function Pv(n,e,t,i){return ao(n,e,1-Math.exp(-t*i))}function Iv(n,e=1){return e-Math.abs(cd(n,e*2)-e)}function Nv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Dv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Uv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ov(n,e){return n+Math.random()*(e-n)}function kv(n){return n*(.5-Math.random())}function Bv(n){n!==void 0&&(Np=n);let e=Np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fv(n){return n*ro}function zv(n){return n*ma}function Ru(n){return(n&n-1)===0&&n!==0}function Hv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vv(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Hs={DEG2RAD:ro,RAD2DEG:ma,generateUUID:wi,clamp:Un,euclideanModulo:cd,mapLinear:Rv,inverseLerp:Lv,lerp:ao,damp:Pv,pingpong:Iv,smoothstep:Nv,smootherstep:Dv,randInt:Uv,randFloat:Ov,randFloatSpread:kv,seededRandom:Bv,degToRad:Fv,radToDeg:zv,isPowerOfTwo:Ru,ceilPowerOfTwo:Hv,floorPowerOfTwo:Kl,setQuaternionFromProperEuler:Vv,normalize:It,denormalize:Li},tt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],S=s[1],b=s[4],I=s[7],L=s[2],C=s[5],N=s[8];return r[0]=a*v+o*S+l*L,r[3]=a*m+o*b+l*C,r[6]=a*f+o*I+l*N,r[1]=c*v+h*S+u*L,r[4]=c*m+h*b+u*C,r[7]=c*f+h*I+u*N,r[2]=d*v+p*S+g*L,r[5]=d*m+p*b+g*C,r[8]=d*f+p*I+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yh.makeScale(e,t)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yh=new gt;function Ym(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gv(){let n=ho("canvas");return n.style.display="block",n}var Dp={};function oo(n){n in Dp||(Dp[n]=!0,console.warn(n))}var Up=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Op=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gl={[ls]:{transfer:Yl,primaries:jl,toReference:n=>n,fromReference:n=>n},[jt]:{transfer:Gt,primaries:jl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pc]:{transfer:Yl,primaries:Zl,toReference:n=>n.applyMatrix3(Op),fromReference:n=>n.applyMatrix3(Up)},[ld]:{transfer:Gt,primaries:Zl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Op),fromReference:n=>n.applyMatrix3(Up).convertLinearToSRGB()}},Wv=new Set([ls,Pc]),Nt={enabled:!0,_workingColorSpace:ls,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=gl[e].toReference,s=gl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return gl[n].primaries},getTransfer:function(n){return n===fi?Yl:gl[n].transfer}};function ha(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vr,Ql=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=ho("canvas")),Vr.width=e.width,Vr.height=e.height;let i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ho("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ha(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ha(t[i]/255)*255):t[i]=ha(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$v=0,ec=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zh(s[a].image)):r.push(Zh(s[a]))}else r=Zh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qv=0,Jn=class n extends ks{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=On,s=On,r=$n,a=Os,o=di,l=Ds,c=n.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=wi(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yr?jt:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?yr:qm}set encoding(e){oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?jt:fi}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Bm;Jn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,I=(p+1)/2,L=(f+1)/2,C=(h+d)/4,N=(u+v)/4,H=(g+m)/4;return b>I&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=N/i):I>L?I<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),i=C/s,r=H/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=N/r,s=H/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lu=class extends ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?jt:fi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Jn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cs=class extends Lu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},tc=class extends Jn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pu=class extends Jn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*v,S=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let L=Math.sqrt(b),C=Math.atan2(L,f*S);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}let I=o*S;if(l=l*m+d*I,c=c*m+p*I,h=h*m+g*I,u=u*m+v*I,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jh=new U,kp=new Pi,yn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),vl.subVectors(this.max,Ja),Gr.subVectors(e.a,Ja),Wr.subVectors(e.b,Ja),$r.subVectors(e.c,Ja),Ts.subVectors(Wr,Gr),As.subVectors($r,Wr),lr.subVectors(Gr,$r);let t=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-lr.z,lr.y,Ts.z,0,-Ts.x,As.z,0,-As.x,lr.z,0,-lr.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-lr.y,lr.x,0];return!Kh(t,Gr,Wr,$r,vl)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,Gr,Wr,$r,vl))?!1:(xl.crossVectors(Ts,As),t=[xl.x,xl.y,xl.z],Kh(t,Gr,Wr,$r,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ki=[new U,new U,new U,new U,new U,new U,new U,new U],_i=new U,yl=new yn,Gr=new U,Wr=new U,$r=new U,Ts=new U,As=new U,lr=new U,Ja=new U,vl=new U,xl=new U,cr=new U;function Kh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){cr.fromArray(n,r);let o=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xv=new yn,Ka=new U,Qh=new U,pi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Xv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);let t=Ka.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ka,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(Qh)),this.expandByPoint(Ka.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new U,eu=new U,_l=new U,Cs=new U,tu=new U,bl=new U,nu=new U,ga=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){eu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(eu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_l),o=Cs.dot(this.direction),l=-Cs.dot(_l),c=Cs.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(eu).addScaledVector(_l,d),p}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);let i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,s,r){tu.subVectors(t,e),bl.subVectors(i,e),nu.crossVectors(tu,bl);let a=this.direction.dot(nu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cs.subVectors(this.origin,e);let l=o*this.direction.dot(bl.crossVectors(Cs,bl));if(l<0)return null;let c=o*this.direction.dot(tu.cross(Cs));if(c<0||l+c>a)return null;let h=-o*Cs.dot(nu);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),a=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,jv)}lookAt(e,t,i){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Rs.crossVectors(i,ii),Rs.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Rs.crossVectors(i,ii)),Rs.normalize(),Ml.crossVectors(ii,Rs),s[0]=Rs.x,s[4]=Ml.x,s[8]=ii.x,s[1]=Rs.y,s[5]=Ml.y,s[9]=ii.y,s[2]=Rs.z,s[6]=Ml.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],b=i[7],I=i[11],L=i[15],C=s[0],N=s[4],H=s[8],M=s[12],w=s[1],F=s[5],ie=s[9],ce=s[13],k=s[2],G=s[6],z=s[10],ne=s[14],X=s[3],$=s[7],ee=s[11],Q=s[15];return r[0]=a*C+o*w+l*k+c*X,r[4]=a*N+o*F+l*G+c*$,r[8]=a*H+o*ie+l*z+c*ee,r[12]=a*M+o*ce+l*ne+c*Q,r[1]=h*C+u*w+d*k+p*X,r[5]=h*N+u*F+d*G+p*$,r[9]=h*H+u*ie+d*z+p*ee,r[13]=h*M+u*ce+d*ne+p*Q,r[2]=g*C+v*w+m*k+f*X,r[6]=g*N+v*F+m*G+f*$,r[10]=g*H+v*ie+m*z+f*ee,r[14]=g*M+v*ce+m*ne+f*Q,r[3]=S*C+b*w+I*k+L*X,r[7]=S*N+b*F+I*G+L*$,r[11]=S*H+b*ie+I*z+L*ee,r[15]=S*M+b*ce+I*ne+L*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,b=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,I=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,L=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,C=t*S+i*b+s*I+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return e[0]=S*N,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*N,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*N,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*N,e[4]=b*N,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*N,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*N,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*N,e[8]=I*N,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*N,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*N,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*N,e[12]=L*N,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*N,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*N,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,S=l*c,b=l*h,I=l*u,L=i.x,C=i.y,N=i.z;return s[0]=(1-(v+f))*L,s[1]=(p+I)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(p-I)*C,s[5]=(1-(d+f))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+b)*N,s[9]=(m-S)*N,s[10]=(1-(d+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=qr.set(s[0],s[1],s[2]).length(),a=qr.set(s[4],s[5],s[6]).length(),o=qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);let c=1/r,h=1/a,u=1/o;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,t.setFromRotationMatrix(bi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=os){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(o===os)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Jl)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=os){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,p=(i+s)*h,g,v;if(o===os)g=(a+r)*u,v=-2*u;else if(o===Jl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},qr=new U,bi=new at,Yv=new U(0,0,0),jv=new U(1,1,1),Rs=new U,Ml=new U,ii=new U,Bp=new at,Fp=new Pi,nc=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nc.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zv=0,zp=new U,Xr=new Pi,es=new at,wl=new U,Qa=new U,Jv=new U,Kv=new Pi,Hp=new U(1,0,0),Vp=new U(0,1,0),Gp=new U(0,0,1),Qv={type:"added"},ex={type:"removed"},Kt=class n extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new nc,i=new Pi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new gt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,t){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wl.copy(e):wl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(Qa,wl,this.up):es.lookAt(wl,Qa,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(es),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new U(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new U,ts=new U,iu=new U,ns=new U,Yr=new U,jr=new U,Wp=new U,su=new U,ru=new U,au=new U,Sl=!1,pr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mi.subVectors(s,t),ts.subVectors(i,t),iu.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(ts),l=Mi.dot(iu),c=ts.dot(ts),h=ts.dot(iu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getUV(e,t,i,s,r,a,o,l){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(a,ns.y),l.addScaledVector(o,ns.z),l)}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),ts.subVectors(e,t),Mi.cross(ts).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),Mi.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Yr.subVectors(s,i),jr.subVectors(r,i),su.subVectors(e,i);let l=Yr.dot(su),c=jr.dot(su);if(l<=0&&c<=0)return t.copy(i);ru.subVectors(e,s);let h=Yr.dot(ru),u=jr.dot(ru);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Yr,a);au.subVectors(e,r);let p=Yr.dot(au),g=jr.dot(au);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(jr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Wp.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Wp,o);let f=1/(m+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(Yr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},El={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ct=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Nt.workingColorSpace){if(e=cd(e,1),t=Un(t,0,1),i=Un(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ou(a,r,e+1/3),this.g=ou(a,r,e),this.b=ou(a,r,e-1/3)}return Nt.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=jm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=jh(e.r),this.g=jh(e.g),this.b=jh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Nt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Un(Dn.r*255,0,255))*65536+Math.round(Un(Dn.g*255,0,255))*256+Math.round(Un(Dn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Dn.copy(this),t);let i=Dn.r,s=Dn.g,r=Dn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=jt){Nt.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,i=Dn.g,s=Dn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(El);let i=ao(Ls.h,El.h,t),s=ao(Ls.s,El.s,t),r=ao(Ls.l,El.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new ct;ct.NAMES=jm;var tx=0,Ii=class extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ca,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=wu,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mu&&(i.blendSrc=this.blendSrc),this.blendDst!==wu&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var an=new U,Tl=new tt,ri=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),e}};var ic=class extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sc=class extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ft=class extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}};var nx=0,ui=new at,lu=new Kt,Zr=new U,si=new yn,eo=new yn,mn=new U,Kn=class n extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?sc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new gt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];eo.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(si.min,eo.min),si.expandByPoint(mn),mn.addVectors(si.max,eo.max),si.expandByPoint(mn)):(si.expandByPoint(eo.min),si.expandByPoint(eo.max))}si.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(e,c),mn.add(Zr)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new U,h[w]=new U;let u=new U,d=new U,p=new U,g=new tt,v=new tt,m=new tt,f=new U,S=new U;function b(w,F,ie){u.fromArray(s,w*3),d.fromArray(s,F*3),p.fromArray(s,ie*3),g.fromArray(a,w*2),v.fromArray(a,F*2),m.fromArray(a,ie*2),d.sub(u),p.sub(u),v.sub(g),m.sub(g);let ce=1/(v.x*m.y-m.x*v.y);isFinite(ce)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ce),S.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(ce),c[w].add(f),c[F].add(f),c[ie].add(f),h[w].add(S),h[F].add(S),h[ie].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let w=0,F=I.length;w<F;++w){let ie=I[w],ce=ie.start,k=ie.count;for(let G=ce,z=ce+k;G<z;G+=3)b(i[G+0],i[G+1],i[G+2])}let L=new U,C=new U,N=new U,H=new U;function M(w){N.fromArray(r,w*3),H.copy(N);let F=c[w];L.copy(F),L.sub(N.multiplyScalar(N.dot(F))).normalize(),C.crossVectors(H,F);let ce=C.dot(h[w])<0?-1:1;l[w*4]=L.x,l[w*4+1]=L.y,l[w*4+2]=L.z,l[w*4+3]=ce}for(let w=0,F=I.length;w<F;++w){let ie=I[w],ce=ie.start,k=ie.count;for(let G=ce,z=ce+k;G<z;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ri(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$p=new at,hr=new ga,Al=new pi,qp=new U,Jr=new U,Kr=new U,Qr=new U,cu=new U,Cl=new U,Rl=new tt,Ll=new tt,Pl=new tt,Xp=new U,Yp=new U,jp=new U,Il=new U,Nl=new U,Bt=class extends Kt{constructor(e=new Kn,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(cu.fromBufferAttribute(u,e),a?Cl.addScaledVector(cu,h):Cl.addScaledVector(cu.sub(t),h))}t.add(Cl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Al.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Al,qp)===null||hr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&($p.copy(r).invert(),hr.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let I=S,L=b;I<L;I+=3){let C=o.getX(I),N=o.getX(I+1),H=o.getX(I+2);s=Dl(this,f,e,i,c,h,u,C,N,H),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let S=o.getX(m),b=o.getX(m+1),I=o.getX(m+2);s=Dl(this,a,e,i,c,h,u,S,b,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let I=S,L=b;I<L;I+=3){let C=I,N=I+1,H=I+2;s=Dl(this,f,e,i,c,h,u,C,N,H),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let S=m,b=m+1,I=m+2;s=Dl(this,a,e,i,c,h,u,S,b,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ix(n,e,t,i,s,r,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Zn,o),l===null)return null;Nl.copy(o),Nl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Nl);return c<t.near||c>t.far?null:{distance:c,point:Nl.clone(),object:n}}function Dl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Jr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,Qr);let h=ix(n,e,t,i,Jr,Kr,Qr,Il);if(h){s&&(Rl.fromBufferAttribute(s,o),Ll.fromBufferAttribute(s,l),Pl.fromBufferAttribute(s,c),h.uv=pr.getInterpolation(Il,Jr,Kr,Qr,Rl,Ll,Pl,new tt)),r&&(Rl.fromBufferAttribute(r,o),Ll.fromBufferAttribute(r,l),Pl.fromBufferAttribute(r,c),h.uv1=pr.getInterpolation(Il,Jr,Kr,Qr,Rl,Ll,Pl,new tt),h.uv2=h.uv1),a&&(Xp.fromBufferAttribute(a,o),Yp.fromBufferAttribute(a,l),jp.fromBufferAttribute(a,c),h.normal=pr.getInterpolation(Il,Jr,Kr,Qr,Xp,Yp,jp,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};pr.getNormal(Jr,Kr,Qr,u.normal),h.face=u}return h}var fo=class n extends Kn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function g(v,m,f,S,b,I,L,C,N,H,M){let w=I/N,F=L/H,ie=I/2,ce=L/2,k=C/2,G=N+1,z=H+1,ne=0,X=0,$=new U;for(let ee=0;ee<z;ee++){let Q=ee*F-ce;for(let ue=0;ue<G;ue++){let B=ue*w-ie;$[v]=B*S,$[m]=Q*b,$[f]=k,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=C>0?1:-1,h.push($.x,$.y,$.z),u.push(ue/N),u.push(1-ee/H),ne+=1}}for(let ee=0;ee<H;ee++)for(let Q=0;Q<N;Q++){let ue=d+Q+G*ee,B=d+Q+G*(ee+1),q=d+(Q+1)+G*(ee+1),se=d+(Q+1)+G*ee;l.push(ue,B,se),l.push(B,q,se),X+=6}o.addGroup(p,X,M),p+=X,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ya(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wn(n){let e={};for(let t=0;t<n.length;t++){let i=ya(n[t]);for(let s in i)e[s]=i[s]}return e}function sx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zm(n){return n.getRenderTarget()===null?n.outputColorSpace:Nt.workingColorSpace}var Ic={clone:ya,merge:Wn},rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},rc=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=os}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},on=class extends rc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ro*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ea=-90,ta=1,Iu=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ea,ta,e,t);s.layers=this.layers,this.add(s);let r=new on(ea,ta,e,t);r.layers=this.layers,this.add(r);let a=new on(ea,ta,e,t);a.layers=this.layers,this.add(a);let o=new on(ea,ta,e,t);o.layers=this.layers,this.add(o);let l=new on(ea,ta,e,t);l.layers=this.layers,this.add(l);let c=new on(ea,ta,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===os)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ac=class extends Jn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:da,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nu=class extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yr?jt:fi),this.texture=new ac(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fo(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Is});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===Os&&(t.minFilter=$n),new Iu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},hu=new U,ox=new U,lx=new gt,rs=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hu.subVectors(i,t).cross(ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||lx.getNormalMatrix(e),s=this.coplanarPoint(hu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ur=new pi,Ul=new U,po=class{constructor(e=new rs,t=new rs,i=new rs,s=new rs,r=new rs,a=new rs){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=os){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],S=s[13],b=s[14],I=s[15];if(i[0].setComponents(l-r,d-c,m-p,I-f).normalize(),i[1].setComponents(l+r,d+c,m+p,I+f).normalize(),i[2].setComponents(l+a,d+h,m+g,I+S).normalize(),i[3].setComponents(l-a,d-h,m-g,I-S).normalize(),i[4].setComponents(l-o,d-u,m-v,I-b).normalize(),t===os)i[5].setComponents(l+o,d+u,m+v,I+b).normalize();else if(t===Jl)i[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ul.x=s.normal.x>0?e.max.x:e.min.x,Ul.y=s.normal.y>0?e.max.y:e.min.y,Ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Ni=class n extends Kn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let S=f*d-a;for(let b=0;b<c;b++){let I=b*u-r;g.push(I,-S,0),v.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let b=S+c*f,I=S+c*(f+1),L=S+1+c*(f+1),C=S+1+c*f;p.push(b,I,C),p.push(I,L,C)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Sx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nx=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ux=`vec3 transformedNormal = objectNormal;
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
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`
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
}`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
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
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
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
#endif`,c_=`struct PhysicalMaterial {
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
}`,h_=`
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
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
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I_=`#ifdef USE_NORMALMAP
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
#endif`,N_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y_=`float getShadowMask() {
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
}`,j_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,J_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
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
}`,gb=`#if DEPTH_PACKING == 3200
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
}`,yb=`#define DISTANCE
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
}`,vb=`#define DISTANCE
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Eb=`#define LAMBERT
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
}`,Tb=`#define LAMBERT
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
}`,Ab=`#define MATCAP
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
}`,Cb=`#define MATCAP
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
}`,Rb=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Pb=`#define PHONG
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
}`,Ib=`#define PHONG
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
}`,Nb=`#define STANDARD
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
}`,Db=`#define STANDARD
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
}`,Ub=`#define TOON
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
}`,Ob=`#define TOON
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
}`,kb=`uniform float size;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Fb=`#include <common>
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
}`,zb=`uniform vec3 color;
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
}`,Hb=`uniform float rotation;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:hx,alphahash_pars_fragment:ux,alphamap_fragment:dx,alphamap_pars_fragment:fx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:yx,batching_pars_vertex:vx,batching_vertex:xx,begin_vertex:_x,beginnormal_vertex:bx,bsdfs:Mx,iridescence_fragment:wx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:Cx,color_fragment:Rx,color_pars_fragment:Lx,color_pars_vertex:Px,color_vertex:Ix,common:Nx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Ox,displacementmap_vertex:kx,emissivemap_fragment:Bx,emissivemap_pars_fragment:Fx,colorspace_fragment:zx,colorspace_pars_fragment:Hx,envmap_fragment:Vx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:i_,envmap_vertex:qx,fog_vertex:Xx,fog_pars_vertex:Yx,fog_fragment:jx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Jx,lightmap_fragment:Kx,lightmap_pars_fragment:Qx,lights_lambert_fragment:e_,lights_lambert_pars_fragment:t_,lights_pars_begin:n_,lights_toon_fragment:s_,lights_toon_pars_fragment:r_,lights_phong_fragment:a_,lights_phong_pars_fragment:o_,lights_physical_fragment:l_,lights_physical_pars_fragment:c_,lights_fragment_begin:h_,lights_fragment_maps:u_,lights_fragment_end:d_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:y_,map_pars_fragment:v_,map_particle_fragment:x_,map_particle_pars_fragment:__,metalnessmap_fragment:b_,metalnessmap_pars_fragment:M_,morphcolor_vertex:w_,morphnormal_vertex:S_,morphtarget_pars_vertex:E_,morphtarget_vertex:T_,normal_fragment_begin:A_,normal_fragment_maps:C_,normal_pars_fragment:R_,normal_pars_vertex:L_,normal_vertex:P_,normalmap_pars_fragment:I_,clearcoat_normal_fragment_begin:N_,clearcoat_normal_fragment_maps:D_,clearcoat_pars_fragment:U_,iridescence_pars_fragment:O_,opaque_fragment:k_,packing:B_,premultiplied_alpha_fragment:F_,project_vertex:z_,dithering_fragment:H_,dithering_pars_fragment:V_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:q_,shadowmap_vertex:X_,shadowmask_pars_fragment:Y_,skinbase_vertex:j_,skinning_pars_vertex:Z_,skinning_vertex:J_,skinnormal_vertex:K_,specularmap_fragment:Q_,specularmap_pars_fragment:eb,tonemapping_fragment:tb,tonemapping_pars_fragment:nb,transmission_fragment:ib,transmission_pars_fragment:sb,uv_pars_fragment:rb,uv_pars_vertex:ab,uv_vertex:ob,worldpos_vertex:lb,background_vert:cb,background_frag:hb,backgroundCube_vert:ub,backgroundCube_frag:db,cube_vert:fb,cube_frag:pb,depth_vert:mb,depth_frag:gb,distanceRGBA_vert:yb,distanceRGBA_frag:vb,equirect_vert:xb,equirect_frag:_b,linedashed_vert:bb,linedashed_frag:Mb,meshbasic_vert:wb,meshbasic_frag:Sb,meshlambert_vert:Eb,meshlambert_frag:Tb,meshmatcap_vert:Ab,meshmatcap_frag:Cb,meshnormal_vert:Rb,meshnormal_frag:Lb,meshphong_vert:Pb,meshphong_frag:Ib,meshphysical_vert:Nb,meshphysical_frag:Db,meshtoon_vert:Ub,meshtoon_frag:Ob,points_vert:kb,points_frag:Bb,shadow_vert:Fb,shadow_frag:zb,sprite_vert:Hb,sprite_frag:Vb},be={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},qn={basic:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ct(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Wn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Wn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ct(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Wn([be.points,be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Wn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Wn([be.common,be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Wn([be.sprite,be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Wn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Wn([be.lights,be.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};qn.physical={uniforms:Wn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Ol={r:0,b:0,g:0};function Gb(n,e,t,i,s,r,a){let o=new ct(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let S=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(o,l):b&&b.isColor&&(v(b,1),S=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Lc)?(h===void 0&&(h=new Bt(new fo(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ya(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Gt,(u!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Bt(new Ni(2,2),new Si({name:"BackgroundMaterial",uniforms:ya(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Ol,Zm(n)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Wb(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(k,G,z,ne,X){let $=!1;if(a){let ee=v(ne,z,G);c!==ee&&(c=ee,p(c.object)),$=f(k,ne,z,X),$&&S(k,ne,z,X)}else{let ee=G.wireframe===!0;(c.geometry!==ne.id||c.program!==z.id||c.wireframe!==ee)&&(c.geometry=ne.id,c.program=z.id,c.wireframe=ee,$=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,H(k,G,z,ne),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function v(k,G,z){let ne=z.wireframe===!0,X=o[k.id];X===void 0&&(X={},o[k.id]=X);let $=X[G.id];$===void 0&&($={},X[G.id]=$);let ee=$[ne];return ee===void 0&&(ee=m(d()),$[ne]=ee),ee}function m(k){let G=[],z=[],ne=[];for(let X=0;X<s;X++)G[X]=0,z[X]=0,ne[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:ne,object:k,attributes:{},index:null}}function f(k,G,z,ne){let X=c.attributes,$=G.attributes,ee=0,Q=z.getAttributes();for(let ue in Q)if(Q[ue].location>=0){let q=X[ue],se=$[ue];if(se===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;ee++}return c.attributesNum!==ee||c.index!==ne}function S(k,G,z,ne){let X={},$=G.attributes,ee=0,Q=z.getAttributes();for(let ue in Q)if(Q[ue].location>=0){let q=$[ue];q===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(q=k.instanceColor));let se={};se.attribute=q,q&&q.data&&(se.data=q.data),X[ue]=se,ee++}c.attributes=X,c.attributesNum=ee,c.index=ne}function b(){let k=c.newAttributes;for(let G=0,z=k.length;G<z;G++)k[G]=0}function I(k){L(k,0)}function L(k,G){let z=c.newAttributes,ne=c.enabledAttributes,X=c.attributeDivisors;z[k]=1,ne[k]===0&&(n.enableVertexAttribArray(k),ne[k]=1),X[k]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,G),X[k]=G)}function C(){let k=c.newAttributes,G=c.enabledAttributes;for(let z=0,ne=G.length;z<ne;z++)G[z]!==k[z]&&(n.disableVertexAttribArray(z),G[z]=0)}function N(k,G,z,ne,X,$,ee){ee===!0?n.vertexAttribIPointer(k,G,z,X,$):n.vertexAttribPointer(k,G,z,ne,X,$)}function H(k,G,z,ne){if(i.isWebGL2===!1&&(k.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let X=ne.attributes,$=z.getAttributes(),ee=G.defaultAttributeValues;for(let Q in $){let ue=$[Q];if(ue.location>=0){let B=X[Q];if(B===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(B=k.instanceColor)),B!==void 0){let q=B.normalized,se=B.itemSize,re=t.get(B);if(re===void 0)continue;let le=re.buffer,Ce=re.type,Fe=re.bytesPerElement,ze=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||B.gpuType===Fm);if(B.isInterleavedBufferAttribute){let mt=B.data,Y=mt.stride,sn=B.offset;if(mt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<ue.locationSize;Xe++)L(ue.location+Xe,mt.meshPerAttribute);k.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Xe=0;Xe<ue.locationSize;Xe++)I(ue.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Xe=0;Xe<ue.locationSize;Xe++)N(ue.location+Xe,se/ue.locationSize,Ce,q,Y*Fe,(sn+se/ue.locationSize*Xe)*Fe,ze)}else{if(B.isInstancedBufferAttribute){for(let mt=0;mt<ue.locationSize;mt++)L(ue.location+mt,B.meshPerAttribute);k.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let mt=0;mt<ue.locationSize;mt++)I(ue.location+mt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let mt=0;mt<ue.locationSize;mt++)N(ue.location+mt,se/ue.locationSize,Ce,q,se*Fe,se/ue.locationSize*mt*Fe,ze)}}else if(ee!==void 0){let q=ee[Q];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ue.location,q);break;case 3:n.vertexAttrib3fv(ue.location,q);break;case 4:n.vertexAttrib4fv(ue.location,q);break;default:n.vertexAttrib1fv(ue.location,q)}}}}C()}function M(){ie();for(let k in o){let G=o[k];for(let z in G){let ne=G[z];for(let X in ne)g(ne[X].object),delete ne[X];delete G[z]}delete o[k]}}function w(k){if(o[k.id]===void 0)return;let G=o[k.id];for(let z in G){let ne=G[z];for(let X in ne)g(ne[X].object),delete ne[X];delete G[z]}delete o[k.id]}function F(k){for(let G in o){let z=o[G];if(z[k.id]===void 0)continue;let ne=z[k.id];for(let X in ne)g(ne[X].object),delete ne[X];delete z[k.id]}}function ie(){ce(),h=!0,c!==l&&(c=l,p(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ie,resetDefaultState:ce,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:I,disableUnusedAttributes:C}}function $b(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function qb(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,I=a||e.has("OES_texture_float"),L=b&&I,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:b,floatFragmentTextures:I,floatVertexTextures:L,maxSamples:C}}function Xb(n){let e=this,t=null,i=0,s=!1,r=!1,a=new rs,o=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,b=S*4,I=f.clippingState||null;l.value=I,I=h(g,d,b,p);for(let L=0;L!==b;++L)I[L]=t[L];f.clippingState=I,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,I=p;b!==v;++b,I+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,I),m[I+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Yb(n){let e=new WeakMap;function t(a,o){return o===Su?a.mapping=da:o===Eu&&(a.mapping=fa),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Su||o===Eu)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Nu(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Bs=class extends rc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oa=4,Zp=[.125,.215,.35,.446,.526,.582],fr=20,uu=new Bs,Jp=new ct,du=null,fu=0,pu=0,dr=(1+Math.sqrt(5))/2,na=1/dr,Kp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,dr,na),new U(0,dr,-na),new U(na,0,dr),new U(-na,0,dr),new U(dr,na,0),new U(-dr,na,0)],oc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,pu),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:co,format:di,colorSpace:ls,depthBuffer:!1},s=Qp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jb(r)),this._blurMaterial=Zb(r,e,t)}return s}_compileMaterial(e){let t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,i,s){let o=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jp),h.toneMapping=Ns,h.autoClear=!1;let p=new tn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Bt(new fo,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jp),v=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let b=this._cubeSize;kl(s,S*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===da||e.mapping===fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;kl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,uu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kp[(s-1)%Kp.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fr-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fr;m>fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let f=[],S=0;for(let N=0;N<fr;++N){let H=N/v,M=Math.exp(-H*H/2);f.push(M),N===0?S+=M:N<m&&(S+=2*M)}for(let N=0;N<f.length;N++)f[N]=f[N]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let I=this._sizeLods[s],L=3*I*(s>b-oa?s-b+oa:0),C=4*(this._cubeSize-I);kl(t,L,C,3*I,2*I),l.setRenderTarget(t),l.render(u,uu)}};function jb(n){let e=[],t=[],i=[],s=n,r=n-oa+1+Zp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-oa?l=Zp[a-n+oa-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*p),b=new Float32Array(m*g*p),I=new Float32Array(f*g*p);for(let C=0;C<p;C++){let N=C%3*2/3-1,H=C>2?0:-1,M=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];S.set(M,v*g*C),b.set(d,m*g*C);let w=[C,C,C,C,C,C];I.set(w,f*g*C)}let L=new Kn;L.setAttribute("position",new ri(S,v)),L.setAttribute("uv",new ri(b,m)),L.setAttribute("faceIndex",new ri(I,f)),e.push(L),s>oa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qp(n,e,t){let i=new cs(n,e,t);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Zb(n,e,t){let i=new Float32Array(fr),s=new U(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function em(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function tm(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function hd(){return`

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
	`}function Jb(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Su||l===Eu,h=l===da||l===fa;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new oc(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new oc(n));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Kb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Qb(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let b=0,I=S.length;b<I;b+=3){let L=S[b+0],C=S[b+1],N=S[b+2];d.push(L,C,C,N,N,L)}}else if(g!==void 0){let S=g.array;v=g.version;for(let b=0,I=S.length/3-1;b<I;b+=3){let L=b+0,C=b+1,N=b+2;d.push(L,C,C,N,N,L)}}else return;let m=new(Ym(d)?sc:ic)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function e1(n,e,t,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,v);let f=0;for(let S=0;S<v;S++)f+=g[S];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function t1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function n1(n,e){return n[0]-e[0]}function i1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function s1(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==g){let k=function(){ie.dispose(),r.delete(h),h.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let S=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],H=0;S===!0&&(H=1),b===!0&&(H=2),I===!0&&(H=3);let M=h.attributes.position.count*H,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let F=new Float32Array(M*w*4*g),ie=new tc(F,M,w,g);ie.type=as,ie.needsUpdate=!0;let ce=H*4;for(let G=0;G<g;G++){let z=L[G],ne=C[G],X=N[G],$=M*w*4*G;for(let ee=0;ee<z.count;ee++){let Q=ee*ce;S===!0&&(a.fromBufferAttribute(z,ee),F[$+Q+0]=a.x,F[$+Q+1]=a.y,F[$+Q+2]=a.z,F[$+Q+3]=0),b===!0&&(a.fromBufferAttribute(ne,ee),F[$+Q+4]=a.x,F[$+Q+5]=a.y,F[$+Q+6]=a.z,F[$+Q+7]=0),I===!0&&(a.fromBufferAttribute(X,ee),F[$+Q+8]=a.x,F[$+Q+9]=a.y,F[$+Q+10]=a.z,F[$+Q+11]=X.itemSize===4?a.w:1)}}v={count:g,texture:ie,size:new tt(M,w)},r.set(h,v),h.addEventListener("dispose",k)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<p;b++){let I=g[b];I[0]=b,I[1]=d[b]}g.sort(i1);for(let b=0;b<8;b++)b<p&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(n1);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let I=o[b],L=I[0],C=I[1];L!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+b)!==v[L]&&h.setAttribute("morphTarget"+b,v[L]),m&&h.getAttribute("morphNormal"+b)!==m[L]&&h.setAttribute("morphNormal"+b,m[L]),s[b]=C,f+=C):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function r1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var lc=class extends Jn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:gr,h!==gr&&h!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gr&&(i=Ps),i===void 0&&h===pa&&(i=mr),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Km=new Jn,Qm=new lc(1,1);Qm.compareFunction=Xm;var eg=new tc,tg=new Pu,ng=new ac,nm=[],im=[],sm=new Float32Array(16),rm=new Float32Array(9),am=new Float32Array(4);function Sa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=nm[s];if(r===void 0&&(r=new Float32Array(s),nm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nc(n,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function h1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;am.set(i),n.uniformMatrix2fv(this.addr,!1,am),dn(t,i)}}function u1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;rm.set(i),n.uniformMatrix3fv(this.addr,!1,rm),dn(t,i)}}function d1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;sm.set(i),n.uniformMatrix4fv(this.addr,!1,sm),dn(t,i)}}function f1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function y1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function x1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function b1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Qm:Km;t.setTexture2D(e||r,s)}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tg,s)}function w1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ng,s)}function S1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||eg,s)}function E1(n){switch(n){case 5126:return a1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return h1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return y1;case 36294:return v1;case 36295:return x1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return S1}}function T1(n,e){n.uniform1fv(this.addr,e)}function A1(n,e){let t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function C1(n,e){let t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function R1(n,e){let t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function L1(n,e){let t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P1(n,e){let t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I1(n,e){let t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function N1(n,e){n.uniform1iv(this.addr,e)}function D1(n,e){n.uniform2iv(this.addr,e)}function U1(n,e){n.uniform3iv(this.addr,e)}function O1(n,e){n.uniform4iv(this.addr,e)}function k1(n,e){n.uniform1uiv(this.addr,e)}function B1(n,e){n.uniform2uiv(this.addr,e)}function F1(n,e){n.uniform3uiv(this.addr,e)}function z1(n,e){n.uniform4uiv(this.addr,e)}function H1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Km,r[a])}function V1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tg,r[a])}function G1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ng,r[a])}function W1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||eg,r[a])}function $1(n){switch(n){case 5126:return T1;case 35664:return A1;case 35665:return C1;case 35666:return R1;case 35674:return L1;case 35675:return P1;case 35676:return I1;case 5124:case 35670:return N1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return O1;case 5125:return k1;case 36294:return B1;case 36295:return F1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return W1}}var Du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E1(t.type)}},Uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$1(t.type)}},Ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},mu=/(\w+)(\])?(\[|\.)?/g;function om(n,e){n.seq.push(e),n.map[e.id]=e}function q1(n,e,t){let i=n.name,s=i.length;for(mu.lastIndex=0;;){let r=mu.exec(i),a=mu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){om(t,c===void 0?new Du(o,n,e):new Uu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ou(o),om(t,u)),t=u}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);q1(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function lm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var X1=37297,Y1=0;function j1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Z1(n){let e=Nt.getPrimaries(Nt.workingColorSpace),t=Nt.getPrimaries(n),i;switch(e===t?i="":e===Zl&&t===jl?i="LinearDisplayP3ToLinearSRGB":e===jl&&t===Zl&&(i="LinearSRGBToLinearDisplayP3"),n){case ls:case Pc:return[i,"LinearTransferOETF"];case jt:case ld:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+j1(n.getShaderSource(e),a)}else return s}function J1(n,e){let t=Z1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K1(n,e){let t;switch(e){case nv:t="Linear";break;case iv:t="Reinhard";break;case sv:t="OptimizedCineon";break;case rv:t="ACESFilmic";break;case ov:t="AgX";break;case av:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)}function eM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(la).join(`
`)}function tM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function la(n){return n!==""}function hm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(n){return n.replace(iM,rM)}var sM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rM(n,e){let t=ft[e];if(t===void 0){let i=sM.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ku(t)}var aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(n){return n.replace(aM,oM)}function oM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ss&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case da:case fa:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case ev:e="ENVMAP_BLENDING_MIX";break;case tv:e="ENVMAP_BLENDING_ADD";break}return e}function dM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=lM(t),c=cM(t),h=hM(t),u=uM(t),d=dM(t),p=t.isWebGL2?"":Q1(t),g=eM(t),v=tM(r),m=s.createProgram(),f,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),f.length>0&&(f+=`
`),S=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),S.length>0&&(S+=`
`)):(f=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),S=[p,fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ns?K1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,J1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),a=ku(a),a=hm(a,t),a=um(a,t),o=ku(o),o=hm(o,t),o=um(o,t),a=dm(a),o=dm(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let I=b+f+a,L=b+S+o,C=lm(s,s.VERTEX_SHADER,I),N=lm(s,s.FRAGMENT_SHADER,L);s.attachShader(m,C),s.attachShader(m,N),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function H(ie){if(n.debug.checkShaderErrors){let ce=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(N).trim(),z=!0,ne=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,C,N);else{let X=cm(s,C,"vertex"),$=cm(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ce+`
`+X+`
`+$)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(k===""||G==="")&&(ne=!1);ne&&(ie.diagnostics={runnable:z,programLog:ce,vertexShader:{log:k,prefix:f},fragmentShader:{log:G,prefix:S}})}s.deleteShader(C),s.deleteShader(N),M=new ua(s,m),w=nM(s,m)}let M;this.getUniforms=function(){return M===void 0&&H(this),M};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,X1)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=N,this}var pM=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fu(e),t.set(e,i)),i}},Fu=class{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}};function mM(n,e,t,i,s,r,a){let o=new uo,l=new Bu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,w,F,ie,ce){let k=ie.fog,G=ce.geometry,z=M.isMeshStandardMaterial?ie.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),X=ne&&ne.mapping===Lc?ne.image.height:null,$=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Q=ee!==void 0?ee.length:0,ue=0;G.morphAttributes.position!==void 0&&(ue=1),G.morphAttributes.normal!==void 0&&(ue=2),G.morphAttributes.color!==void 0&&(ue=3);let B,q,se,re;if($){let fn=qn[$];B=fn.vertexShader,q=fn.fragmentShader}else B=M.vertexShader,q=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);let le=n.getRenderTarget(),Ce=ce.isInstancedMesh===!0,Fe=ce.isBatchedMesh===!0,ze=!!M.map,mt=!!M.matcap,Y=!!ne,sn=!!M.aoMap,Xe=!!M.lightMap,it=!!M.bumpMap,Oe=!!M.normalMap,Ot=!!M.displacementMap,ht=!!M.emissiveMap,D=!!M.metalnessMap,A=!!M.roughnessMap,Z=M.anisotropy>0,ge=M.clearcoat>0,pe=M.iridescence>0,ye=M.sheen>0,He=M.transmission>0,Te=Z&&!!M.anisotropyMap,Ne=ge&&!!M.clearcoatMap,je=ge&&!!M.clearcoatNormalMap,ut=ge&&!!M.clearcoatRoughnessMap,me=pe&&!!M.iridescenceMap,Et=pe&&!!M.iridescenceThicknessMap,pt=ye&&!!M.sheenColorMap,et=ye&&!!M.sheenRoughnessMap,We=!!M.specularMap,De=!!M.specularColorMap,ot=!!M.specularIntensityMap,wt=He&&!!M.transmissionMap,Ht=He&&!!M.thicknessMap,dt=!!M.gradientMap,Me=!!M.alphaMap,O=M.alphaTest>0,Se=!!M.alphaHash,Ee=!!M.extensions,Ke=!!G.attributes.uv1,Ye=!!G.attributes.uv2,At=!!G.attributes.uv3,Lt=Ns;return M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Lt=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:q,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Fe,instancing:Ce,instancingColor:Ce&&ce.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ls,map:ze,matcap:mt,envMap:Y,envMapMode:Y&&ne.mapping,envMapCubeUVHeight:X,aoMap:sn,lightMap:Xe,bumpMap:it,normalMap:Oe,displacementMap:d&&Ot,emissiveMap:ht,normalMapObjectSpace:Oe&&M.normalMapType===bv,normalMapTangentSpace:Oe&&M.normalMapType===od,metalnessMap:D,roughnessMap:A,anisotropy:Z,anisotropyMap:Te,clearcoat:ge,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:ut,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:Et,sheen:ye,sheenColorMap:pt,sheenRoughnessMap:et,specularMap:We,specularColorMap:De,specularIntensityMap:ot,transmission:He,transmissionMap:wt,thicknessMap:Ht,gradientMap:dt,opaque:M.transparent===!1&&M.blending===ca,alphaMap:Me,alphaTest:O,alphaHash:Se,combine:M.combine,mapUv:ze&&v(M.map.channel),aoMapUv:sn&&v(M.aoMap.channel),lightMapUv:Xe&&v(M.lightMap.channel),bumpMapUv:it&&v(M.bumpMap.channel),normalMapUv:Oe&&v(M.normalMap.channel),displacementMapUv:Ot&&v(M.displacementMap.channel),emissiveMapUv:ht&&v(M.emissiveMap.channel),metalnessMapUv:D&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:Te&&v(M.anisotropyMap.channel),clearcoatMapUv:Ne&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:et&&v(M.sheenRoughnessMap.channel),specularMapUv:We&&v(M.specularMap.channel),specularColorMapUv:De&&v(M.specularColorMap.channel),specularIntensityMapUv:ot&&v(M.specularIntensityMap.channel),transmissionMapUv:wt&&v(M.transmissionMap.channel),thicknessMapUv:Ht&&v(M.thicknessMap.channel),alphaMapUv:Me&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Oe||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Ye,vertexUv3s:At,pointsUvs:ce.isPoints===!0&&!!G.attributes.uv&&(ze||Me),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ce.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&Nt.getTransfer(M.map.colorSpace)===Gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ee&&M.extensions.derivatives===!0,extensionFragDepth:Ee&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(S(w,M),b(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function b(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function I(M){let w=g[M.type],F;if(w){let ie=qn[w];F=Ic.clone(ie.uniforms)}else F=M.uniforms;return F}function L(M,w){let F;for(let ie=0,ce=c.length;ie<ce;ie++){let k=c[ie];if(k.cacheKey===w){F=k,++F.usedTimes;break}}return F===void 0&&(F=new fM(n,w,M,r),c.push(F)),F}function C(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function N(M){l.remove(M)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:I,acquireProgram:L,releaseProgram:C,releaseShaderCache:N,programs:c,dispose:H}}function gM(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function yM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||yM),i.length>1&&i.sort(d||pm),s.length>1&&s.sort(d||pm)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function vM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new mm,n.set(i,[a])):s>=r.length?(a=new mm,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ct};break;case"SpotLight":t={position:new U,direction:new U,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function _M(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var bM=0;function MM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wM(n,e){let t=new xM,i=_M(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new at,o=new at;function l(h,u){let d=0,p=0,g=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let v=0,m=0,f=0,S=0,b=0,I=0,L=0,C=0,N=0,H=0,M=0;h.sort(MM);let w=u===!0?Math.PI:1;for(let ie=0,ce=h.length;ie<ce;ie++){let k=h[ie],G=k.color,z=k.intensity,ne=k.distance,X=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=G.r*z*w,p+=G.g*z*w,g+=G.b*z*w;else if(k.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(k.sh.coefficients[$],z);M++}else if(k.isDirectionalLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){let ee=k.shadow,Q=i.get(k);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,s.directionalShadow[v]=Q,s.directionalShadowMap[v]=X,s.directionalShadowMatrix[v]=k.shadow.matrix,I++}s.directional[v]=$,v++}else if(k.isSpotLight){let $=t.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(G).multiplyScalar(z*w),$.distance=ne,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,s.spot[f]=$;let ee=k.shadow;if(k.map&&(s.spotLightMap[N]=k.map,N++,ee.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[f]=ee.matrix,k.castShadow){let Q=i.get(k);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,s.spotShadow[f]=Q,s.spotShadowMap[f]=X,C++}f++}else if(k.isRectAreaLight){let $=t.get(k);$.color.copy(G).multiplyScalar(z),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=$,S++}else if(k.isPointLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*w),$.distance=k.distance,$.decay=k.decay,k.castShadow){let ee=k.shadow,Q=i.get(k);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,Q.shadowCameraNear=ee.camera.near,Q.shadowCameraFar=ee.camera.far,s.pointShadow[m]=Q,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=k.shadow.matrix,L++}s.point[m]=$,m++}else if(k.isHemisphereLight){let $=t.get(k);$.skyColor.copy(k.color).multiplyScalar(z*w),$.groundColor.copy(k.groundColor).multiplyScalar(z*w),s.hemi[b]=$,b++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==v||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==S||F.hemiLength!==b||F.numDirectionalShadows!==I||F.numPointShadows!==L||F.numSpotShadows!==C||F.numSpotMaps!==N||F.numLightProbes!==M)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=S,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+N-H,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=M,F.directionalLength=v,F.pointLength=m,F.spotLength=f,F.rectAreaLength=S,F.hemiLength=b,F.numDirectionalShadows=I,F.numPointShadows=L,F.numSpotShadows=C,F.numSpotMaps=N,F.numLightProbes=M,s.version=bM++)}function c(h,u){let d=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let S=0,b=h.length;S<b;S++){let I=h[S];if(I.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),d++}else if(I.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),g++}else if(I.isRectAreaLight){let L=s.rectArea[v];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(f),o.identity(),a.copy(I.matrixWorld),a.premultiply(f),o.extractRotation(a),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(I.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(f),p++}else if(I.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function gm(n,e){let t=new wM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function SM(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new gm(n,e),t.set(r,[l])):a>=o.length?(l=new gm(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var zu=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hu=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},EM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
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
}`;function AM(n,e,t){let i=new po,s=new tt,r=new tt,a=new _t,o=new zu({depthPacking:_v}),l=new Hu,c={},h=t.maxTextureSize,u={[Zn]:gn,[gn]:Zn,[Xn]:Xn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:EM,fragmentShader:TM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Kn;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let f=this.type;this.render=function(C,N,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=n.getRenderTarget(),w=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(Is),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);let ce=f!==ss&&this.type===ss,k=f===ss&&this.type!==ss;for(let G=0,z=C.length;G<z;G++){let ne=C[G],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let $=X.getFrameExtents();if(s.multiply($),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,X.mapSize.y=r.y)),X.map===null||ce===!0||k===!0){let Q=this.type!==ss?{minFilter:wn,magFilter:wn}:{};X.map!==null&&X.map.dispose(),X.map=new cs(s.x,s.y,Q),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ee=X.getViewportCount();for(let Q=0;Q<ee;Q++){let ue=X.getViewport(Q);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),ie.viewport(a),X.updateMatrices(ne,Q),i=X.getFrustum(),I(N,H,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===ss&&S(X,H),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,w,F)};function S(C,N){let H=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new cs(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,H,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,H,p,v,null)}function b(C,N,H,M){let w=null,F=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)w=F;else if(w=H.isPointLight===!0?l:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ie=w.uuid,ce=N.uuid,k=c[ie];k===void 0&&(k={},c[ie]=k);let G=k[ce];G===void 0&&(G=w.clone(),k[ce]=G,N.addEventListener("dispose",L)),w=G}if(w.visible=N.visible,w.wireframe=N.wireframe,M===ss?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:u[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let ie=n.properties.get(w);ie.light=H}return w}function I(C,N,H,M,w){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===ss)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);let ce=e.update(C),k=C.material;if(Array.isArray(k)){let G=ce.groups;for(let z=0,ne=G.length;z<ne;z++){let X=G[z],$=k[X.materialIndex];if($&&$.visible){let ee=b(C,$,M,w);C.onBeforeShadow(n,C,N,H,ce,ee,X),n.renderBufferDirect(H,null,ce,ee,C,X),C.onAfterShadow(n,C,N,H,ce,ee,X)}}}else if(k.visible){let G=b(C,k,M,w);C.onBeforeShadow(n,C,N,H,ce,G,null),n.renderBufferDirect(H,null,ce,G,C,null),C.onAfterShadow(n,C,N,H,ce,G,null)}}let ie=C.children;for(let ce=0,k=ie.length;ce<k;ce++)I(ie[ce],N,H,M,w)}function L(C){C.target.removeEventListener("dispose",L);for(let H in c){let M=c[H],w=C.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function CM(n,e,t){let i=t.isWebGL2;function s(){let O=!1,Se=new _t,Ee=null,Ke=new _t(0,0,0,0);return{setMask:function(Ye){Ee!==Ye&&!O&&(n.colorMask(Ye,Ye,Ye,Ye),Ee=Ye)},setLocked:function(Ye){O=Ye},setClear:function(Ye,At,Lt,Tt,fn){fn===!0&&(Ye*=Tt,At*=Tt,Lt*=Tt),Se.set(Ye,At,Lt,Tt),Ke.equals(Se)===!1&&(n.clearColor(Ye,At,Lt,Tt),Ke.copy(Se))},reset:function(){O=!1,Ee=null,Ke.set(-1,0,0,0)}}}function r(){let O=!1,Se=null,Ee=null,Ke=null;return{setTest:function(Ye){Ye?Fe(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(Ye){Se!==Ye&&!O&&(n.depthMask(Ye),Se=Ye)},setFunc:function(Ye){if(Ee!==Ye){switch(Ye){case Xy:n.depthFunc(n.NEVER);break;case Yy:n.depthFunc(n.ALWAYS);break;case jy:n.depthFunc(n.LESS);break;case $l:n.depthFunc(n.LEQUAL);break;case Zy:n.depthFunc(n.EQUAL);break;case Jy:n.depthFunc(n.GEQUAL);break;case Ky:n.depthFunc(n.GREATER);break;case Qy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Ye}},setLocked:function(Ye){O=Ye},setClear:function(Ye){Ke!==Ye&&(n.clearDepth(Ye),Ke=Ye)},reset:function(){O=!1,Se=null,Ee=null,Ke=null}}}function a(){let O=!1,Se=null,Ee=null,Ke=null,Ye=null,At=null,Lt=null,Tt=null,fn=null;return{setTest:function(Pt){O||(Pt?Fe(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(Pt){Se!==Pt&&!O&&(n.stencilMask(Pt),Se=Pt)},setFunc:function(Pt,Mn,ci){(Ee!==Pt||Ke!==Mn||Ye!==ci)&&(n.stencilFunc(Pt,Mn,ci),Ee=Pt,Ke=Mn,Ye=ci)},setOp:function(Pt,Mn,ci){(At!==Pt||Lt!==Mn||Tt!==ci)&&(n.stencilOp(Pt,Mn,ci),At=Pt,Lt=Mn,Tt=ci)},setLocked:function(Pt){O=Pt},setClear:function(Pt){fn!==Pt&&(n.clearStencil(Pt),fn=Pt)},reset:function(){O=!1,Se=null,Ee=null,Ke=null,Ye=null,At=null,Lt=null,Tt=null,fn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,v=[],m=null,f=!1,S=null,b=null,I=null,L=null,C=null,N=null,H=null,M=new ct(0,0,0),w=0,F=!1,ie=null,ce=null,k=null,G=null,z=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,$=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),X=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),X=$>=2);let Q=null,ue={},B=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),se=new _t().fromArray(B),re=new _t().fromArray(q);function le(O,Se,Ee,Ke){let Ye=new Uint8Array(4),At=n.createTexture();n.bindTexture(O,At),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Ee;Lt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,Ke,0,n.RGBA,n.UNSIGNED_BYTE,Ye):n.texImage2D(Se+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ye);return At}let Ce={};Ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc($l),ht(!1),D(jf),Fe(n.CULL_FACE),Oe(Is);function Fe(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function ze(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function mt(O,Se){return p[O]!==Se?(n.bindFramebuffer(O,Se),p[O]=Se,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Se),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Y(O,Se){let Ee=v,Ke=!1;if(O)if(Ee=g.get(Se),Ee===void 0&&(Ee=[],g.set(Se,Ee)),O.isWebGLMultipleRenderTargets){let Ye=O.texture;if(Ee.length!==Ye.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let At=0,Lt=Ye.length;At<Lt;At++)Ee[At]=n.COLOR_ATTACHMENT0+At;Ee.length=Ye.length,Ke=!0}}else Ee[0]!==n.COLOR_ATTACHMENT0&&(Ee[0]=n.COLOR_ATTACHMENT0,Ke=!0);else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ke=!0);Ke&&(t.isWebGL2?n.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function sn(O){return m!==O?(n.useProgram(O),m=O,!0):!1}let Xe={[Ri]:n.FUNC_ADD,[Uy]:n.FUNC_SUBTRACT,[Oy]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[Qf]=n.MIN,Xe[ep]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Xe[Qf]=O.MIN_EXT,Xe[ep]=O.MAX_EXT)}let it={[Cc]:n.ZERO,[sd]:n.ONE,[ky]:n.SRC_COLOR,[Mu]:n.SRC_ALPHA,[Vy]:n.SRC_ALPHA_SATURATE,[Hy]:n.DST_COLOR,[Fy]:n.DST_ALPHA,[By]:n.ONE_MINUS_SRC_COLOR,[wu]:n.ONE_MINUS_SRC_ALPHA,[rd]:n.ONE_MINUS_DST_COLOR,[zy]:n.ONE_MINUS_DST_ALPHA,[Gy]:n.CONSTANT_COLOR,[Wy]:n.ONE_MINUS_CONSTANT_COLOR,[$y]:n.CONSTANT_ALPHA,[qy]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(O,Se,Ee,Ke,Ye,At,Lt,Tt,fn,Pt){if(O===Is){f===!0&&(ze(n.BLEND),f=!1);return}if(f===!1&&(Fe(n.BLEND),f=!0),O!==id){if(O!==S||Pt!==F){if((b!==Ri||C!==Ri)&&(n.blendEquation(n.FUNC_ADD),b=Ri,C=Ri),Pt)switch(O){case ca:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFunc(n.ONE,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}I=null,L=null,N=null,H=null,M.set(0,0,0),w=0,S=O,F=Pt}return}Ye=Ye||Se,At=At||Ee,Lt=Lt||Ke,(Se!==b||Ye!==C)&&(n.blendEquationSeparate(Xe[Se],Xe[Ye]),b=Se,C=Ye),(Ee!==I||Ke!==L||At!==N||Lt!==H)&&(n.blendFuncSeparate(it[Ee],it[Ke],it[At],it[Lt]),I=Ee,L=Ke,N=At,H=Lt),(Tt.equals(M)===!1||fn!==w)&&(n.blendColor(Tt.r,Tt.g,Tt.b,fn),M.copy(Tt),w=fn),S=O,F=!1}function Ot(O,Se){O.side===Xn?ze(n.CULL_FACE):Fe(n.CULL_FACE);let Ee=O.side===gn;Se&&(Ee=!Ee),ht(Ee),O.blending===ca&&O.transparent===!1?Oe(Is):Oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);let Ke=O.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){ie!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),ie=O)}function D(O){O!==Iy?(Fe(n.CULL_FACE),O!==ce&&(O===jf?n.cullFace(n.BACK):O===Ny?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),ce=O}function A(O){O!==k&&(X&&n.lineWidth(O),k=O)}function Z(O,Se,Ee){O?(Fe(n.POLYGON_OFFSET_FILL),(G!==Se||z!==Ee)&&(n.polygonOffset(Se,Ee),G=Se,z=Ee)):ze(n.POLYGON_OFFSET_FILL)}function ge(O){O?Fe(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function pe(O){O===void 0&&(O=n.TEXTURE0+ne-1),Q!==O&&(n.activeTexture(O),Q=O)}function ye(O,Se,Ee){Ee===void 0&&(Q===null?Ee=n.TEXTURE0+ne-1:Ee=Q);let Ke=ue[Ee];Ke===void 0&&(Ke={type:void 0,texture:void 0},ue[Ee]=Ke),(Ke.type!==O||Ke.texture!==Se)&&(Q!==Ee&&(n.activeTexture(Ee),Q=Ee),n.bindTexture(O,Se||Ce[O]),Ke.type=O,Ke.texture=Se)}function He(){let O=ue[Q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function wt(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Ht(O,Se){let Ee=u.get(Se);Ee===void 0&&(Ee=new WeakMap,u.set(Se,Ee));let Ke=Ee.get(O);Ke===void 0&&(Ke=n.getUniformBlockIndex(Se,O.name),Ee.set(O,Ke))}function dt(O,Se){let Ke=u.get(Se).get(O);h.get(Se)!==Ke&&(n.uniformBlockBinding(Se,Ke,O.__bindingPointIndex),h.set(Se,Ke))}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,ue={},p={},g=new WeakMap,v=[],m=null,f=!1,S=null,b=null,I=null,L=null,C=null,N=null,H=null,M=new ct(0,0,0),w=0,F=!1,ie=null,ce=null,k=null,G=null,z=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:ze,bindFramebuffer:mt,drawBuffers:Y,useProgram:sn,setBlending:Oe,setMaterial:Ot,setFlipSided:ht,setCullFace:D,setLineWidth:A,setPolygonOffset:Z,setScissorTest:ge,activeTexture:pe,bindTexture:ye,unbindTexture:He,compressedTexImage2D:Te,compressedTexImage3D:Ne,texImage2D:We,texImage3D:De,updateUBOMapping:Ht,uniformBlockBinding:dt,texStorage2D:pt,texStorage3D:et,texSubImage2D:je,texSubImage3D:ut,compressedTexSubImage2D:me,compressedTexSubImage3D:Et,scissor:ot,viewport:wt,reset:Me}}function RM(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return p?new OffscreenCanvas(D,A):ho("canvas")}function v(D,A,Z,ge){let pe=1;if((D.width>ge||D.height>ge)&&(pe=ge/Math.max(D.width,D.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let ye=A?Kl:Math.floor,He=ye(pe*D.width),Te=ye(pe*D.height);u===void 0&&(u=g(He,Te));let Ne=Z?g(He,Te):u;return Ne.width=He,Ne.height=Te,Ne.getContext("2d").drawImage(D,0,0,He,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+He+"x"+Te+")."),Ne}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return Ru(D.width)&&Ru(D.height)}function f(D){return o?!1:D.wrapS!==On||D.wrapT!==On||D.minFilter!==wn&&D.minFilter!==$n}function S(D,A){return D.generateMipmaps&&A&&D.minFilter!==wn&&D.minFilter!==$n}function b(D){n.generateMipmap(D)}function I(D,A,Z,ge,pe=!1){if(o===!1)return A;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ye=A;if(A===n.RED&&(Z===n.FLOAT&&(ye=n.R32F),Z===n.HALF_FLOAT&&(ye=n.R16F),Z===n.UNSIGNED_BYTE&&(ye=n.R8)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ye=n.R8UI),Z===n.UNSIGNED_SHORT&&(ye=n.R16UI),Z===n.UNSIGNED_INT&&(ye=n.R32UI),Z===n.BYTE&&(ye=n.R8I),Z===n.SHORT&&(ye=n.R16I),Z===n.INT&&(ye=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(ye=n.RG32F),Z===n.HALF_FLOAT&&(ye=n.RG16F),Z===n.UNSIGNED_BYTE&&(ye=n.RG8)),A===n.RGBA){let He=pe?Yl:Nt.getTransfer(ge);Z===n.FLOAT&&(ye=n.RGBA32F),Z===n.HALF_FLOAT&&(ye=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ye=He===Gt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function L(D,A,Z){return S(D,Z)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==$n?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function C(D){return D===wn||D===np||D===Hh?n.NEAREST:n.LINEAR}function N(D){let A=D.target;A.removeEventListener("dispose",N),M(A),A.isVideoTexture&&h.delete(A)}function H(D){let A=D.target;A.removeEventListener("dispose",H),F(A)}function M(D){let A=i.get(D);if(A.__webglInit===void 0)return;let Z=D.source,ge=d.get(Z);if(ge){let pe=ge[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&w(D),Object.keys(ge).length===0&&d.delete(Z)}i.remove(D)}function w(D){let A=i.get(D);n.deleteTexture(A.__webglTexture);let Z=D.source,ge=d.get(Z);delete ge[A.__cacheKey],a.memory.textures--}function F(D){let A=D.texture,Z=i.get(D),ge=i.get(A);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Z.__webglFramebuffer[pe]))for(let ye=0;ye<Z.__webglFramebuffer[pe].length;ye++)n.deleteFramebuffer(Z.__webglFramebuffer[pe][ye]);else n.deleteFramebuffer(Z.__webglFramebuffer[pe]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[pe])}else{if(Array.isArray(Z.__webglFramebuffer))for(let pe=0;pe<Z.__webglFramebuffer.length;pe++)n.deleteFramebuffer(Z.__webglFramebuffer[pe]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let pe=0;pe<Z.__webglColorRenderbuffer.length;pe++)Z.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[pe]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let pe=0,ye=A.length;pe<ye;pe++){let He=i.get(A[pe]);He.__webglTexture&&(n.deleteTexture(He.__webglTexture),a.memory.textures--),i.remove(A[pe])}i.remove(A),i.remove(D)}let ie=0;function ce(){ie=0}function k(){let D=ie;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),ie+=1,D}function G(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function z(D,A){let Z=i.get(D);if(D.isVideoTexture&&Ot(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){let ge=D.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,D,A);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function ne(D,A){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){se(Z,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function X(D,A){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){se(Z,D,A);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function $(D,A){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){re(Z,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}let ee={[Us]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[Tu]:n.MIRRORED_REPEAT},Q={[wn]:n.NEAREST,[np]:n.NEAREST_MIPMAP_NEAREST,[Hh]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[cv]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},ue={[Mv]:n.NEVER,[Cv]:n.ALWAYS,[wv]:n.LESS,[Xm]:n.LEQUAL,[Sv]:n.EQUAL,[Av]:n.GEQUAL,[Ev]:n.GREATER,[Tv]:n.NOTEQUAL};function B(D,A,Z){if(Z?(n.texParameteri(D,n.TEXTURE_WRAP_S,ee[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ee[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ee[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Q[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Q[A.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==On||A.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,C(A.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,C(A.minFilter)),A.minFilter!==wn&&A.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ue[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===wn||A.minFilter!==Hh&&A.minFilter!==Os||A.type===as&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(D,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function q(D,A){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",N));let ge=A.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let ye=G(A);if(ye!==D.__cacheKey){pe[ye]===void 0&&(pe[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),pe[ye].usedTimes++;let He=pe[D.__cacheKey];He!==void 0&&(pe[D.__cacheKey].usedTimes--,He.usedTimes===0&&w(A)),D.__cacheKey=ye,D.__webglTexture=pe[ye].texture}return Z}function se(D,A,Z){let ge=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=n.TEXTURE_3D);let pe=q(D,A),ye=A.source;t.bindTexture(ge,D.__webglTexture,n.TEXTURE0+Z);let He=i.get(ye);if(ye.version!==He.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);let Te=Nt.getPrimaries(Nt.workingColorSpace),Ne=A.colorSpace===fi?null:Nt.getPrimaries(A.colorSpace),je=A.colorSpace===fi||Te===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ut=f(A)&&m(A.image)===!1,me=v(A.image,ut,!1,s.maxTextureSize);me=ht(A,me);let Et=m(me)||o,pt=r.convert(A.format,A.colorSpace),et=r.convert(A.type),We=I(A.internalFormat,pt,et,A.colorSpace,A.isVideoTexture);B(ge,A,Et);let De,ot=A.mipmaps,wt=o&&A.isVideoTexture!==!0&&We!==$m,Ht=He.__version===void 0||pe===!0,dt=L(A,me,Et);if(A.isDepthTexture)We=n.DEPTH_COMPONENT,o?A.type===as?We=n.DEPTH_COMPONENT32F:A.type===Ps?We=n.DEPTH_COMPONENT24:A.type===mr?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:A.type===as&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===gr&&We===n.DEPTH_COMPONENT&&A.type!==ad&&A.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ps,et=r.convert(A.type)),A.format===pa&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,A.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=mr,et=r.convert(A.type))),Ht&&(wt?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,et,null));else if(A.isDataTexture)if(ot.length>0&&Et){wt&&Ht&&t.texStorage2D(n.TEXTURE_2D,dt,We,ot[0].width,ot[0].height);for(let Me=0,O=ot.length;Me<O;Me++)De=ot[Me],wt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,pt,et,De.data):t.texImage2D(n.TEXTURE_2D,Me,We,De.width,De.height,0,pt,et,De.data);A.generateMipmaps=!1}else wt?(Ht&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,pt,et,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,et,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){wt&&Ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,ot[0].width,ot[0].height,me.depth);for(let Me=0,O=ot.length;Me<O;Me++)De=ot[Me],A.format!==di?pt!==null?wt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,me.depth,pt,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,We,De.width,De.height,me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,me.depth,pt,et,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,We,De.width,De.height,me.depth,0,pt,et,De.data)}else{wt&&Ht&&t.texStorage2D(n.TEXTURE_2D,dt,We,ot[0].width,ot[0].height);for(let Me=0,O=ot.length;Me<O;Me++)De=ot[Me],A.format!==di?pt!==null?wt?t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,pt,De.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,We,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,pt,et,De.data):t.texImage2D(n.TEXTURE_2D,Me,We,De.width,De.height,0,pt,et,De.data)}else if(A.isDataArrayTexture)wt?(Ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,pt,et,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,pt,et,me.data);else if(A.isData3DTexture)wt?(Ht&&t.texStorage3D(n.TEXTURE_3D,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,pt,et,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,pt,et,me.data);else if(A.isFramebufferTexture){if(Ht)if(wt)t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height);else{let Me=me.width,O=me.height;for(let Se=0;Se<dt;Se++)t.texImage2D(n.TEXTURE_2D,Se,We,Me,O,0,pt,et,null),Me>>=1,O>>=1}}else if(ot.length>0&&Et){wt&&Ht&&t.texStorage2D(n.TEXTURE_2D,dt,We,ot[0].width,ot[0].height);for(let Me=0,O=ot.length;Me<O;Me++)De=ot[Me],wt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,pt,et,De):t.texImage2D(n.TEXTURE_2D,Me,We,pt,et,De);A.generateMipmaps=!1}else wt?(Ht&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,et,me)):t.texImage2D(n.TEXTURE_2D,0,We,pt,et,me);S(A,Et)&&b(ge),He.__version=ye.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function re(D,A,Z){if(A.image.length!==6)return;let ge=q(D,A),pe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Z);let ye=i.get(pe);if(pe.version!==ye.__version||ge===!0){t.activeTexture(n.TEXTURE0+Z);let He=Nt.getPrimaries(Nt.workingColorSpace),Te=A.colorSpace===fi?null:Nt.getPrimaries(A.colorSpace),Ne=A.colorSpace===fi||He===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let je=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,me=[];for(let Me=0;Me<6;Me++)!je&&!ut?me[Me]=v(A.image[Me],!1,!0,s.maxCubemapSize):me[Me]=ut?A.image[Me].image:A.image[Me],me[Me]=ht(A,me[Me]);let Et=me[0],pt=m(Et)||o,et=r.convert(A.format,A.colorSpace),We=r.convert(A.type),De=I(A.internalFormat,et,We,A.colorSpace),ot=o&&A.isVideoTexture!==!0,wt=ye.__version===void 0||ge===!0,Ht=L(A,Et,pt);B(n.TEXTURE_CUBE_MAP,A,pt);let dt;if(je){ot&&wt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,De,Et.width,Et.height);for(let Me=0;Me<6;Me++){dt=me[Me].mipmaps;for(let O=0;O<dt.length;O++){let Se=dt[O];A.format!==di?et!==null?ot?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,0,0,Se.width,Se.height,et,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,0,0,Se.width,Se.height,et,We,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,De,Se.width,Se.height,0,et,We,Se.data)}}}else{dt=A.mipmaps,ot&&wt&&(dt.length>0&&Ht++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,De,me[0].width,me[0].height));for(let Me=0;Me<6;Me++)if(ut){ot?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me[Me].width,me[Me].height,et,We,me[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,De,me[Me].width,me[Me].height,0,et,We,me[Me].data);for(let O=0;O<dt.length;O++){let Ee=dt[O].image[Me].image;ot?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,0,0,Ee.width,Ee.height,et,We,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,De,Ee.width,Ee.height,0,et,We,Ee.data)}}else{ot?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,et,We,me[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,De,et,We,me[Me]);for(let O=0;O<dt.length;O++){let Se=dt[O];ot?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,0,0,et,We,Se.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,De,et,We,Se.image[Me])}}}S(A,pt)&&b(n.TEXTURE_CUBE_MAP),ye.__version=pe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function le(D,A,Z,ge,pe,ye){let He=r.convert(Z.format,Z.colorSpace),Te=r.convert(Z.type),Ne=I(Z.internalFormat,He,Te,Z.colorSpace);if(!i.get(A).__hasExternalTextures){let ut=Math.max(1,A.width>>ye),me=Math.max(1,A.height>>ye);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ye,Ne,ut,me,A.depth,0,He,Te,null):t.texImage2D(pe,ye,Ne,ut,me,0,He,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,i.get(Z).__webglTexture,0,it(A)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,i.get(Z).__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(D,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let ge=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Oe(A)){let pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===as?ge=n.DEPTH_COMPONENT32F:pe.type===Ps&&(ge=n.DEPTH_COMPONENT24));let ye=it(A);Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){let ge=it(A);Z&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{let ge=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<ge.length;pe++){let ye=ge[pe],He=r.convert(ye.format,ye.colorSpace),Te=r.convert(ye.type),Ne=I(ye.internalFormat,He,Te,ye.colorSpace),je=it(A);Z&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ne,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);let ge=i.get(A.depthTexture).__webglTexture,pe=it(A);if(A.depthTexture.format===gr)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(A.depthTexture.format===pa)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function ze(D){let A=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Fe(A.__webglFramebuffer,D)}else if(Z){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]=n.createRenderbuffer(),Ce(A.__webglDepthbuffer[ge],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Ce(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(D,A,Z){let ge=i.get(D);A!==void 0&&le(ge.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ze(D)}function Y(D){let A=D.texture,Z=i.get(D),ge=i.get(A);D.addEventListener("dispose",H),D.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=A.version,a.memory.textures++);let pe=D.isWebGLCubeRenderTarget===!0,ye=D.isWebGLMultipleRenderTargets===!0,He=m(D)||o;if(pe){Z.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(o&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Te]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)Z.__webglFramebuffer[Te][Ne]=n.createFramebuffer()}else Z.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Te=0;Te<A.mipmaps.length;Te++)Z.__webglFramebuffer[Te]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ye)if(s.drawBuffers){let Te=D.texture;for(let Ne=0,je=Te.length;Ne<je;Ne++){let ut=i.get(Te[Ne]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&Oe(D)===!1){let Te=ye?A:[A];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Te.length;Ne++){let je=Te[Ne];Z.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne]);let ut=r.convert(je.format,je.colorSpace),me=r.convert(je.type),Et=I(je.internalFormat,ut,me,je.colorSpace,D.isXRRenderTarget===!0),pt=it(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Et,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),B(n.TEXTURE_CUBE_MAP,A,He);for(let Te=0;Te<6;Te++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)le(Z.__webglFramebuffer[Te][Ne],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ne);else le(Z.__webglFramebuffer[Te],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(A,He)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let Te=D.texture;for(let Ne=0,je=Te.length;Ne<je;Ne++){let ut=Te[Ne],me=i.get(ut);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),B(n.TEXTURE_2D,ut,He),le(Z.__webglFramebuffer,D,ut,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),S(ut,He)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?Te=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,ge.__webglTexture),B(Te,A,He),o&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)le(Z.__webglFramebuffer[Ne],D,A,n.COLOR_ATTACHMENT0,Te,Ne);else le(Z.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,Te,0);S(A,He)&&b(Te),t.unbindTexture()}D.depthBuffer&&ze(D)}function sn(D){let A=m(D)||o,Z=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ge=0,pe=Z.length;ge<pe;ge++){let ye=Z[ge];if(S(ye,A)){let He=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ye).__webglTexture;t.bindTexture(He,Te),b(He),t.unbindTexture()}}}function Xe(D){if(o&&D.samples>0&&Oe(D)===!1){let A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Z=D.width,ge=D.height,pe=n.COLOR_BUFFER_BIT,ye=[],He=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(D),Ne=D.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<A.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let je=0;je<A.length;je++){ye.push(n.COLOR_ATTACHMENT0+je),D.depthBuffer&&ye.push(He);let ut=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(ut===!1&&(D.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[je]),ut===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[He]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[He])),Ne){let me=i.get(A[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<A.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Te.__webglColorRenderbuffer[je]);let ut=i.get(A[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function it(D){return Math.min(s.maxSamples,D.samples)}function Oe(D){let A=i.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ot(D){let A=a.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function ht(D,A){let Z=D.colorSpace,ge=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Cu||Z!==ls&&Z!==fi&&(Nt.getTransfer(Z)===Gt?o===!1?e.has("EXT_sRGB")===!0&&ge===di?(D.format=Cu,D.minFilter=$n,D.generateMipmaps=!1):A=Ql.sRGBToLinear(A):(ge!==di||pe!==Ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}this.allocateTextureUnit=k,this.resetTextureUnits=ce,this.setTexture2D=z,this.setTexture2DArray=ne,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=mt,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Oe}function LM(n,e,t){let i=t.isWebGL2;function s(r,a=fi){let o,l=Nt.getTransfer(a);if(r===Ds)return n.UNSIGNED_BYTE;if(r===zm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Hm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===hv)return n.BYTE;if(r===uv)return n.SHORT;if(r===ad)return n.UNSIGNED_SHORT;if(r===Fm)return n.INT;if(r===Ps)return n.UNSIGNED_INT;if(r===as)return n.FLOAT;if(r===co)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===dv)return n.ALPHA;if(r===di)return n.RGBA;if(r===fv)return n.LUMINANCE;if(r===pv)return n.LUMINANCE_ALPHA;if(r===gr)return n.DEPTH_COMPONENT;if(r===pa)return n.DEPTH_STENCIL;if(r===Cu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===mv)return n.RED;if(r===Vm)return n.RED_INTEGER;if(r===gv)return n.RG;if(r===Gm)return n.RG_INTEGER;if(r===Wm)return n.RGBA_INTEGER;if(r===Vh||r===Gh||r===Wh||r===$h)if(l===Gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Vh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$h)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Vh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$h)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===sp||r===rp||r===ap)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ip)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ap)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$m)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===op||r===lp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===op)return l===Gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===lp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cp||r===hp||r===up||r===dp||r===fp||r===pp||r===mp||r===gp||r===yp||r===vp||r===xp||r===_p||r===bp||r===Mp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===cp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===up)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_p)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mp)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qh||r===wp||r===Sp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===qh)return l===Gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yv||r===Ep||r===Tp||r===Ap)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===qh)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ep)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ap)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Vu=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Sn=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},PM={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gu=class extends ks{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,v=t.getContextAttributes(),m=null,f=null,S=[],b=[],I=new tt,L=null,C=new on;C.layers.enable(1),C.viewport=new _t;let N=new on;N.layers.enable(2),N.viewport=new _t;let H=[C,N],M=new Vu;M.layers.enable(1),M.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=S[B];return q===void 0&&(q=new lo,S[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=S[B];return q===void 0&&(q=new lo,S[B]=q),q.getGripSpace()},this.getHand=function(B){let q=S[B];return q===void 0&&(q=new lo,S[B]=q),q.getHandSpace()};function ie(B){let q=b.indexOf(B.inputSource);if(q===-1)return;let se=S[q];se!==void 0&&(se.update(B.inputSource,B.frame,c||a),se.dispatchEvent({type:B.type,data:B.inputSource}))}function ce(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",k);for(let B=0;B<S.length;B++){let q=b[B];q!==null&&(b[B]=null,S[B].disconnect(q))}w=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new cs(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ds,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,se=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?pa:gr,se=v.stencil?mr:Ps);let le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new cs(d.textureWidth,d.textureHeight,{format:di,type:Ds,depthTexture:new lc(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ce=e.properties.get(f);Ce.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(B){for(let q=0;q<B.removed.length;q++){let se=B.removed[q],re=b.indexOf(se);re>=0&&(b[re]=null,S[re].disconnect(se))}for(let q=0;q<B.added.length;q++){let se=B.added[q],re=b.indexOf(se);if(re===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=b.length){b.push(se),re=Ce;break}else if(b[Ce]===null){b[Ce]=se,re=Ce;break}if(re===-1)break}let le=S[re];le&&le.connect(se)}}let G=new U,z=new U;function ne(B,q,se){G.setFromMatrixPosition(q.matrixWorld),z.setFromMatrixPosition(se.matrixWorld);let re=G.distanceTo(z),le=q.projectionMatrix.elements,Ce=se.projectionMatrix.elements,Fe=le[14]/(le[10]-1),ze=le[14]/(le[10]+1),mt=(le[9]+1)/le[5],Y=(le[9]-1)/le[5],sn=(le[8]-1)/le[0],Xe=(Ce[8]+1)/Ce[0],it=Fe*sn,Oe=Fe*Xe,Ot=re/(-sn+Xe),ht=Ot*-sn;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ht),B.translateZ(Ot),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let D=Fe+Ot,A=ze+Ot,Z=it-ht,ge=Oe+(re-ht),pe=mt*ze/A*D,ye=Y*ze/A*D;B.projectionMatrix.makePerspective(Z,ge,pe,ye,D,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function X(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;M.near=N.near=C.near=B.near,M.far=N.far=C.far=B.far,(w!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far);let q=B.parent,se=M.cameras;X(M,q);for(let re=0;re<se.length;re++)X(se[re],q);se.length===2?ne(M,C,N):M.projectionMatrix.copy(C.projectionMatrix),$(B,M,q)};function $(B,q,se){se===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(se.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ma*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let ee=null;function Q(B,q){if(h=q.getViewerPose(c||a),g=q,h!==null){let se=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;se.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let le=0;le<se.length;le++){let Ce=se[le],Fe=null;if(p!==null)Fe=p.getViewport(Ce);else{let mt=u.getViewSubImage(d,Ce);Fe=mt.viewport,le===0&&(e.setRenderTargetTextures(f,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(f))}let ze=H[le];ze===void 0&&(ze=new on,ze.layers.enable(le),ze.viewport=new _t,H[le]=ze),ze.matrix.fromArray(Ce.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ce.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),le===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(ze)}}for(let se=0;se<S.length;se++){let re=b[se],le=S[se];re!==null&&le!==void 0&&le.update(re,q,c||a)}ee&&ee(B,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}let ue=new Jm;ue.setAnimationLoop(Q),this.setAnimationLoop=function(B){ee=B},this.dispose=function(){}}};function IM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,b,I){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,I)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function NM(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,b){let I=b.program;i.uniformBlockBinding(S,I)}function c(S,b){let I=s[S.id];I===void 0&&(g(S),I=h(S),s[S.id]=I,S.addEventListener("dispose",m));let L=b.program;i.updateUBOMapping(S,L);let C=e.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function h(S){let b=u();S.__bindingPointIndex=b;let I=n.createBuffer(),L=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,I),I}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let b=s[S.id],I=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,N=I.length;C<N;C++){let H=Array.isArray(I[C])?I[C]:[I[C]];for(let M=0,w=H.length;M<w;M++){let F=H[M];if(p(F,C,M,L)===!0){let ie=F.__offset,ce=Array.isArray(F.value)?F.value:[F.value],k=0;for(let G=0;G<ce.length;G++){let z=ce[G],ne=v(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,ie+k,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,k),k+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,b,I,L){let C=S.value,N=b+"_"+I;if(L[N]===void 0)return typeof C=="number"||typeof C=="boolean"?L[N]=C:L[N]=C.clone(),!0;{let H=L[N];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return L[N]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function g(S){let b=S.uniforms,I=0,L=16;for(let N=0,H=b.length;N<H;N++){let M=Array.isArray(b[N])?b[N]:[b[N]];for(let w=0,F=M.length;w<F;w++){let ie=M[w],ce=Array.isArray(ie.value)?ie.value:[ie.value];for(let k=0,G=ce.length;k<G;k++){let z=ce[k],ne=v(z),X=I%L;X!==0&&L-X<ne.boundary&&(I+=L-X),ie.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=I,I+=ne.storage}}}let C=I%L;return C>0&&(I+=L-C),S.__size=I,S.__cache={},this}function v(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let I=a.indexOf(b.__bindingPointIndex);a.splice(I,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var mo=class{constructor(e={}){let{canvas:t=Gv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Ns,this.toneMappingExposure=1;let b=this,I=!1,L=0,C=0,N=null,H=-1,M=null,w=new _t,F=new _t,ie=null,ce=new ct(0),k=0,G=t.width,z=t.height,ne=1,X=null,$=null,ee=new _t(0,0,G,z),Q=new _t(0,0,G,z),ue=!1,B=new po,q=!1,se=!1,re=null,le=new at,Ce=new tt,Fe=new U,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return N===null?ne:1}let Y=i;function sn(P,W){for(let J=0;J<P.length;J++){let te=P[J],j=t.getContext(te,W);if(j!==null)return j}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nd}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Se,!1),Y===null){let W=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&W.shift(),Y=sn(W,P),Y===null)throw sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Xe,it,Oe,Ot,ht,D,A,Z,ge,pe,ye,He,Te,Ne,je,ut,me,Et,pt,et,We,De,ot,wt;function Ht(){Xe=new Kb(Y),it=new qb(Y,Xe,e),Xe.init(it),De=new LM(Y,Xe,it),Oe=new CM(Y,Xe,it),Ot=new t1(Y),ht=new gM,D=new RM(Y,Xe,Oe,ht,it,De,Ot),A=new Yb(b),Z=new Jb(b),ge=new cx(Y,it),ot=new Wb(Y,Xe,ge,it),pe=new Qb(Y,ge,Ot,ot),ye=new r1(Y,pe,ge,Ot),pt=new s1(Y,it,D),ut=new Xb(ht),He=new mM(b,A,Z,Xe,it,ot,ut),Te=new IM(b,ht),Ne=new vM,je=new SM(Xe,it),Et=new Gb(b,A,Z,Oe,ye,d,l),me=new AM(b,ye,it),wt=new NM(Y,Ot,it,Oe),et=new $b(Y,Xe,Ot,it),We=new e1(Y,Xe,Ot,it),Ot.programs=He.programs,b.capabilities=it,b.extensions=Xe,b.properties=ht,b.renderLists=Ne,b.shadowMap=me,b.state=Oe,b.info=Ot}Ht();let dt=new Gu(b,Y);this.xr=dt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let P=Xe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Xe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(P){P!==void 0&&(ne=P,this.setSize(G,z,!1))},this.getSize=function(P){return P.set(G,z)},this.setSize=function(P,W,J=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,z=W,t.width=Math.floor(P*ne),t.height=Math.floor(W*ne),J===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(G*ne,z*ne).floor()},this.setDrawingBufferSize=function(P,W,J){G=P,z=W,ne=J,t.width=Math.floor(P*J),t.height=Math.floor(W*J),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(ee)},this.setViewport=function(P,W,J,te){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,W,J,te),Oe.viewport(w.copy(ee).multiplyScalar(ne).floor())},this.getScissor=function(P){return P.copy(Q)},this.setScissor=function(P,W,J,te){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,W,J,te),Oe.scissor(F.copy(Q).multiplyScalar(ne).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(P){Oe.setScissorTest(ue=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(P=!0,W=!0,J=!0){let te=0;if(P){let j=!1;if(N!==null){let Re=N.texture.format;j=Re===Wm||Re===Gm||Re===Vm}if(j){let Re=N.texture.type,Le=Re===Ds||Re===Ps||Re===ad||Re===mr||Re===zm||Re===Hm,Ve=Et.getClearColor(),Ze=Et.getClearAlpha(),lt=Ve.r,st=Ve.g,rt=Ve.b;Le?(p[0]=lt,p[1]=st,p[2]=rt,p[3]=Ze,Y.clearBufferuiv(Y.COLOR,0,p)):(g[0]=lt,g[1]=st,g[2]=rt,g[3]=Ze,Y.clearBufferiv(Y.COLOR,0,g))}else te|=Y.COLOR_BUFFER_BIT}W&&(te|=Y.DEPTH_BUFFER_BIT),J&&(te|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ne.dispose(),je.dispose(),ht.dispose(),A.dispose(),Z.dispose(),ye.dispose(),ot.dispose(),wt.dispose(),He.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",fn),dt.removeEventListener("sessionend",Pt),re&&(re.dispose(),re=null),Mn.stop()};function Me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let P=Ot.autoReset,W=me.enabled,J=me.autoUpdate,te=me.needsUpdate,j=me.type;Ht(),Ot.autoReset=P,me.enabled=W,me.autoUpdate=J,me.needsUpdate=te,me.type=j}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ee(P){let W=P.target;W.removeEventListener("dispose",Ee),Ke(W)}function Ke(P){Ye(P),ht.remove(P)}function Ye(P){let W=ht.get(P).programs;W!==void 0&&(W.forEach(function(J){He.releaseProgram(J)}),P.isShaderMaterial&&He.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,J,te,j,Re){W===null&&(W=ze);let Le=j.isMesh&&j.matrixWorld.determinant()<0,Ve=kh(P,W,J,te,j);Oe.setMaterial(te,Le);let Ze=J.index,lt=1;if(te.wireframe===!0){if(Ze=pe.getWireframeAttribute(J),Ze===void 0)return;lt=2}let st=J.drawRange,rt=J.attributes.position,qt=st.start*lt,Vn=(st.start+st.count)*lt;Re!==null&&(qt=Math.max(qt,Re.start*lt),Vn=Math.min(Vn,(Re.start+Re.count)*lt)),Ze!==null?(qt=Math.max(qt,0),Vn=Math.min(Vn,Ze.count)):rt!=null&&(qt=Math.max(qt,0),Vn=Math.min(Vn,rt.count));let rn=Vn-qt;if(rn<0||rn===1/0)return;ot.setup(j,te,Ve,J,Ze);let hi,kt=et;if(Ze!==null&&(hi=ge.get(Ze),kt=We,kt.setIndex(hi)),j.isMesh)te.wireframe===!0?(Oe.setLineWidth(te.wireframeLinewidth*mt()),kt.setMode(Y.LINES)):kt.setMode(Y.TRIANGLES);else if(j.isLine){let nt=te.linewidth;nt===void 0&&(nt=1),Oe.setLineWidth(nt*mt()),j.isLineSegments?kt.setMode(Y.LINES):j.isLineLoop?kt.setMode(Y.LINE_LOOP):kt.setMode(Y.LINE_STRIP)}else j.isPoints?kt.setMode(Y.POINTS):j.isSprite&&kt.setMode(Y.TRIANGLES);if(j.isBatchedMesh)kt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)kt.renderInstances(qt,rn,j.count);else if(J.isInstancedBufferGeometry){let nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,qa=Math.min(J.instanceCount,nt);kt.renderInstances(qt,rn,qa)}else kt.render(qt,rn)};function At(P,W,J){P.transparent===!0&&P.side===Xn&&P.forceSinglePass===!1?(P.side=gn,P.needsUpdate=!0,Fr(P,W,J),P.side=Zn,P.needsUpdate=!0,Fr(P,W,J),P.side=Xn):Fr(P,W,J)}this.compile=function(P,W,J=null){J===null&&(J=P),m=je.get(J),m.init(),S.push(m),J.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),P!==J&&P.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(b._useLegacyLights);let te=new Set;return P.traverse(function(j){let Re=j.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ve=Re[Le];At(Ve,J,j),te.add(Ve)}else At(Re,J,j),te.add(Re)}),S.pop(),m=null,te},this.compileAsync=function(P,W,J=null){let te=this.compile(P,W,J);return new Promise(j=>{function Re(){if(te.forEach(function(Le){ht.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){j(P);return}setTimeout(Re,10)}Xe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Lt=null;function Tt(P){Lt&&Lt(P)}function fn(){Mn.stop()}function Pt(){Mn.start()}let Mn=new Jm;Mn.setAnimationLoop(Tt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(P){Lt=P,dt.setAnimationLoop(P),P===null?Mn.stop():Mn.start()},dt.addEventListener("sessionstart",fn),dt.addEventListener("sessionend",Pt),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(W),W=dt.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,W,N),m=je.get(P,S.length),m.init(),S.push(m),le.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),B.setFromProjectionMatrix(le),se=this.localClippingEnabled,q=ut.init(this.clippingPlanes,se),v=Ne.get(P,f.length),v.init(),f.push(v),ci(P,W,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(X,$),this.info.render.frame++,q===!0&&ut.beginShadows();let J=m.state.shadowsArray;if(me.render(J,P,W),q===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(v,P),m.setupLights(b._useLegacyLights),W.isArrayCamera){let te=W.cameras;for(let j=0,Re=te.length;j<Re;j++){let Le=te[j];hl(v,P,Le,Le.viewport)}}else hl(v,P,W);N!==null&&(D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N)),P.isScene===!0&&P.onAfterRender(b,P,W),ot.resetDefaultState(),H=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ci(P,W,J,te){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||B.intersectsSprite(P)){te&&Fe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(le);let Le=ye.update(P),Ve=P.material;Ve.visible&&v.push(P,Le,Ve,J,Fe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||B.intersectsObject(P))){let Le=ye.update(P),Ve=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Fe.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Fe.copy(Le.boundingSphere.center)),Fe.applyMatrix4(P.matrixWorld).applyMatrix4(le)),Array.isArray(Ve)){let Ze=Le.groups;for(let lt=0,st=Ze.length;lt<st;lt++){let rt=Ze[lt],qt=Ve[rt.materialIndex];qt&&qt.visible&&v.push(P,Le,qt,J,Fe.z,rt)}}else Ve.visible&&v.push(P,Le,Ve,J,Fe.z,null)}}let Re=P.children;for(let Le=0,Ve=Re.length;Le<Ve;Le++)ci(Re[Le],W,J,te)}function hl(P,W,J,te){let j=P.opaque,Re=P.transmissive,Le=P.transparent;m.setupLightsView(J),q===!0&&ut.setGlobalState(b.clippingPlanes,J),Re.length>0&&Oh(j,Re,W,J),te&&Oe.viewport(w.copy(te)),j.length>0&&Br(j,W,J),Re.length>0&&Br(Re,W,J),Le.length>0&&Br(Le,W,J),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Oh(P,W,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Re=it.isWebGL2;re===null&&(re=new cs(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?co:Ds,minFilter:Os,samples:Re?4:0})),b.getDrawingBufferSize(Ce),Re?re.setSize(Ce.x,Ce.y):re.setSize(Kl(Ce.x),Kl(Ce.y));let Le=b.getRenderTarget();b.setRenderTarget(re),b.getClearColor(ce),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear();let Ve=b.toneMapping;b.toneMapping=Ns,Br(P,J,te),D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re);let Ze=!1;for(let lt=0,st=W.length;lt<st;lt++){let rt=W[lt],qt=rt.object,Vn=rt.geometry,rn=rt.material,hi=rt.group;if(rn.side===Xn&&qt.layers.test(te.layers)){let kt=rn.side;rn.side=gn,rn.needsUpdate=!0,Wa(qt,J,te,Vn,rn,hi),rn.side=kt,rn.needsUpdate=!0,Ze=!0}}Ze===!0&&(D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re)),b.setRenderTarget(Le),b.setClearColor(ce,k),b.toneMapping=Ve}function Br(P,W,J){let te=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Re=P.length;j<Re;j++){let Le=P[j],Ve=Le.object,Ze=Le.geometry,lt=te===null?Le.material:te,st=Le.group;Ve.layers.test(J.layers)&&Wa(Ve,W,J,Ze,lt,st)}}function Wa(P,W,J,te,j,Re){P.onBeforeRender(b,W,J,te,j,Re),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(b,W,J,te,P,Re),j.transparent===!0&&j.side===Xn&&j.forceSinglePass===!1?(j.side=gn,j.needsUpdate=!0,b.renderBufferDirect(J,W,te,j,P,Re),j.side=Zn,j.needsUpdate=!0,b.renderBufferDirect(J,W,te,j,P,Re),j.side=Xn):b.renderBufferDirect(J,W,te,j,P,Re),P.onAfterRender(b,W,J,te,j,Re)}function Fr(P,W,J){W.isScene!==!0&&(W=ze);let te=ht.get(P),j=m.state.lights,Re=m.state.shadowsArray,Le=j.state.version,Ve=He.getParameters(P,j.state,Re,W,J),Ze=He.getProgramCacheKey(Ve),lt=te.programs;te.environment=P.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(P.isMeshStandardMaterial?Z:A).get(P.envMap||te.environment),lt===void 0&&(P.addEventListener("dispose",Ee),lt=new Map,te.programs=lt);let st=lt.get(Ze);if(st!==void 0){if(te.currentProgram===st&&te.lightsStateVersion===Le)return ul(P,Ve),st}else Ve.uniforms=He.getUniforms(P),P.onBuild(J,Ve,b),P.onBeforeCompile(Ve,b),st=He.acquireProgram(Ve,Ze),lt.set(Ze,st),te.uniforms=Ve.uniforms;let rt=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(rt.clippingPlanes=ut.uniform),ul(P,Ve),te.needsLights=Fh(P),te.lightsStateVersion=Le,te.needsLights&&(rt.ambientLightColor.value=j.state.ambient,rt.lightProbe.value=j.state.probe,rt.directionalLights.value=j.state.directional,rt.directionalLightShadows.value=j.state.directionalShadow,rt.spotLights.value=j.state.spot,rt.spotLightShadows.value=j.state.spotShadow,rt.rectAreaLights.value=j.state.rectArea,rt.ltc_1.value=j.state.rectAreaLTC1,rt.ltc_2.value=j.state.rectAreaLTC2,rt.pointLights.value=j.state.point,rt.pointLightShadows.value=j.state.pointShadow,rt.hemisphereLights.value=j.state.hemi,rt.directionalShadowMap.value=j.state.directionalShadowMap,rt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,rt.spotShadowMap.value=j.state.spotShadowMap,rt.spotLightMatrix.value=j.state.spotLightMatrix,rt.spotLightMap.value=j.state.spotLightMap,rt.pointShadowMap.value=j.state.pointShadowMap,rt.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=st,te.uniformsList=null,st}function $a(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=ua.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function ul(P,W){let J=ht.get(P);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function kh(P,W,J,te,j){W.isScene!==!0&&(W=ze),D.resetTextureUnits();let Re=W.fog,Le=te.isMeshStandardMaterial?W.environment:null,Ve=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ls,Ze=(te.isMeshStandardMaterial?Z:A).get(te.envMap||Le),lt=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,st=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),rt=!!J.morphAttributes.position,qt=!!J.morphAttributes.normal,Vn=!!J.morphAttributes.color,rn=Ns;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(rn=b.toneMapping);let hi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,kt=hi!==void 0?hi.length:0,nt=ht.get(te),qa=m.state.lights;if(q===!0&&(se===!0||P!==M)){let In=P===M&&te.id===H;ut.setState(te,P,In)}let Vt=!1;te.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==qa.state.version||nt.outputColorSpace!==Ve||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||nt.envMap!==Ze||te.fog===!0&&nt.fog!==Re||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ut.numPlanes||nt.numIntersection!==ut.numIntersection)||nt.vertexAlphas!==lt||nt.vertexTangents!==st||nt.morphTargets!==rt||nt.morphNormals!==qt||nt.morphColors!==Vn||nt.toneMapping!==rn||it.isWebGL2===!0&&nt.morphTargetsCount!==kt)&&(Vt=!0):(Vt=!0,nt.__version=te.version);let Zi=nt.currentProgram;Vt===!0&&(Zi=Fr(te,W,j));let Xa=!1,or=!1,Ya=!1,pn=Zi.getUniforms(),Ci=nt.uniforms;if(Oe.useProgram(Zi.program)&&(Xa=!0,or=!0,Ya=!0),te.id!==H&&(H=te.id,or=!0),Xa||M!==P){pn.setValue(Y,"projectionMatrix",P.projectionMatrix),pn.setValue(Y,"viewMatrix",P.matrixWorldInverse);let In=pn.map.cameraPosition;In!==void 0&&In.setValue(Y,Fe.setFromMatrixPosition(P.matrixWorld)),it.logarithmicDepthBuffer&&pn.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&pn.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,or=!0,Ya=!0)}if(j.isSkinnedMesh){pn.setOptional(Y,j,"bindMatrix"),pn.setOptional(Y,j,"bindMatrixInverse");let In=j.skeleton;In&&(it.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),pn.setValue(Y,"boneTexture",In.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(pn.setOptional(Y,j,"batchingTexture"),pn.setValue(Y,"batchingTexture",j._matricesTexture,D));let Xt=J.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0&&it.isWebGL2===!0)&&pt.update(j,J,Zi),(or||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,pn.setValue(Y,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ci.envMap.value=Ze,Ci.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),or&&(pn.setValue(Y,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&Bh(Ci,Ya),Re&&te.fog===!0&&Te.refreshFogUniforms(Ci,Re),Te.refreshMaterialUniforms(Ci,te,ne,z,re),ua.upload(Y,$a(nt),Ci,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ua.upload(Y,$a(nt),Ci,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&pn.setValue(Y,"center",j.center),pn.setValue(Y,"modelViewMatrix",j.modelViewMatrix),pn.setValue(Y,"normalMatrix",j.normalMatrix),pn.setValue(Y,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let In=te.uniformsGroups;for(let ja=0,dl=In.length;ja<dl;ja++)if(it.isWebGL2){let Za=In[ja];wt.update(Za,Zi),wt.bind(Za,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Bh(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Fh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(P,W,J){ht.get(P.texture).__webglTexture=W,ht.get(P.depthTexture).__webglTexture=J;let te=ht.get(P);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let J=ht.get(P);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,J=0){N=P,L=W,C=J;let te=!0,j=null,Re=!1,Le=!1;if(P){let Ze=ht.get(P);Ze.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(Y.FRAMEBUFFER,null),te=!1):Ze.__webglFramebuffer===void 0?D.setupRenderTarget(P):Ze.__hasExternalTextures&&D.rebindTextures(P,ht.get(P.texture).__webglTexture,ht.get(P.depthTexture).__webglTexture);let lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Le=!0);let st=ht.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(st[W])?j=st[W][J]:j=st[W],Re=!0):it.isWebGL2&&P.samples>0&&D.useMultisampledRTT(P)===!1?j=ht.get(P).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[J]:j=st,w.copy(P.viewport),F.copy(P.scissor),ie=P.scissorTest}else w.copy(ee).multiplyScalar(ne).floor(),F.copy(Q).multiplyScalar(ne).floor(),ie=ue;if(Oe.bindFramebuffer(Y.FRAMEBUFFER,j)&&it.drawBuffers&&te&&Oe.drawBuffers(P,j),Oe.viewport(w),Oe.scissor(F),Oe.setScissorTest(ie),Re){let Ze=ht.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ze.__webglTexture,J)}else if(Le){let Ze=ht.get(P.texture),lt=W||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ze.__webglTexture,J||0,lt)}H=-1},this.readRenderTargetPixels=function(P,W,J,te,j,Re,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ht.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve){Oe.bindFramebuffer(Y.FRAMEBUFFER,Ve);try{let Ze=P.texture,lt=Ze.format,st=Ze.type;if(lt!==di&&De.convert(lt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let rt=st===co&&(Xe.has("EXT_color_buffer_half_float")||it.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(st!==Ds&&De.convert(st)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===as&&(it.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-te&&J>=0&&J<=P.height-j&&Y.readPixels(W,J,te,j,De.convert(lt),De.convert(st),Re)}finally{let Ze=N!==null?ht.get(N).__webglFramebuffer:null;Oe.bindFramebuffer(Y.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(P,W,J=0){let te=Math.pow(2,-J),j=Math.floor(W.image.width*te),Re=Math.floor(W.image.height*te);D.setTexture2D(W,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,J,0,0,P.x,P.y,j,Re),Oe.unbindTexture()},this.copyTextureToTexture=function(P,W,J,te=0){let j=W.image.width,Re=W.image.height,Le=De.convert(J.format),Ve=De.convert(J.type);D.setTexture2D(J,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,J.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,J.unpackAlignment),W.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,te,P.x,P.y,j,Re,Le,Ve,W.image.data):W.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,te,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Le,W.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,te,P.x,P.y,Le,Ve,W.image),te===0&&J.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(P,W,J,te,j=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Re=P.max.x-P.min.x+1,Le=P.max.y-P.min.y+1,Ve=P.max.z-P.min.z+1,Ze=De.convert(te.format),lt=De.convert(te.type),st;if(te.isData3DTexture)D.setTexture3D(te,0),st=Y.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)D.setTexture2DArray(te,0),st=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,te.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,te.unpackAlignment);let rt=Y.getParameter(Y.UNPACK_ROW_LENGTH),qt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Vn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),rn=Y.getParameter(Y.UNPACK_SKIP_ROWS),hi=Y.getParameter(Y.UNPACK_SKIP_IMAGES),kt=J.isCompressedTexture?J.mipmaps[j]:J.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,kt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,kt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,P.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,P.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,P.min.z),J.isDataTexture||J.isData3DTexture?Y.texSubImage3D(st,j,W.x,W.y,W.z,Re,Le,Ve,Ze,lt,kt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(st,j,W.x,W.y,W.z,Re,Le,Ve,Ze,kt.data)):Y.texSubImage3D(st,j,W.x,W.y,W.z,Re,Le,Ve,Ze,lt,kt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,rt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,qt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Vn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,rn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,hi),j===0&&te.generateMipmaps&&Y.generateMipmap(st),Oe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),Oe.unbindTexture()},this.resetState=function(){L=0,C=0,N=null,Oe.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ld?"display-p3":"srgb",t.unpackColorSpace=Nt.workingColorSpace===Pc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?yr:qm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?jt:ls}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Wu=class extends mo{};Wu.prototype.isWebGL1Renderer=!0;var hs=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},cc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new U,mi=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ri(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},va=class extends Ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ia,to=new U,sa=new U,ra=new U,aa=new tt,no=new tt,ig=new at,Bl=new U,io=new U,Fl=new U,ym=new tt,gu=new tt,vm=new tt,go=class extends Kt{constructor(e=new va){if(super(),this.isSprite=!0,this.type="Sprite",ia===void 0){ia=new Kn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cc(t,5);ia.setIndex([0,1,2,0,2,3]),ia.setAttribute("position",new mi(i,3,0,!1)),ia.setAttribute("uv",new mi(i,2,3,!1))}this.geometry=ia,this.material=e,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sa.setFromMatrixScale(this.matrixWorld),ig.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ra.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sa.multiplyScalar(-ra.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;zl(Bl.set(-.5,-.5,0),ra,a,sa,s,r),zl(io.set(.5,-.5,0),ra,a,sa,s,r),zl(Fl.set(.5,.5,0),ra,a,sa,s,r),ym.set(0,0),gu.set(1,0),vm.set(1,1);let o=e.ray.intersectTriangle(Bl,io,Fl,!1,to);if(o===null&&(zl(io.set(-.5,.5,0),ra,a,sa,s,r),gu.set(0,1),o=e.ray.intersectTriangle(Bl,Fl,io,!1,to),o===null))return;let l=e.ray.origin.distanceTo(to);l<e.near||l>e.far||t.push({distance:l,point:to.clone(),uv:pr.getInterpolation(to,Bl,io,Fl,ym,gu,vm,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zl(n,e,t,i,s,r){aa.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(no.x=r*aa.x-s*aa.y,no.y=s*aa.x+r*aa.y):no.copy(aa),n.copy(e),n.x+=no.x,n.y+=no.y,n.applyMatrix4(ig)}var xm=new U,_m=new _t,bm=new _t,DM=new U,Mm=new at,Hl=new U,yu=new pi,wm=new at,vu=new ga,hc=class extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingBox.expandByPoint(Hl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingSphere.expandByPoint(Hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(s),e.ray.intersectsSphere(yu)!==!1&&(wm.copy(s).invert(),vu.copy(e.ray).applyMatrix4(wm),!(this.boundingBox!==null&&vu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;_m.fromBufferAttribute(s.attributes.skinIndex,e),bm.fromBufferAttribute(s.attributes.skinWeight,e),xm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=bm.getComponent(r);if(a!==0){let o=_m.getComponent(r);Mm.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(DM.copy(xm).applyMatrix4(Mm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},yo=class extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},uc=class extends Jn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=wn,h=wn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sm=new at,UM=new at,dc=class n{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:UM;Sm.multiplyMatrices(o,t[r]),Sm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new uc(t,e,e,di,as);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new yo),this.bones.push(a),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var xa=class extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Em=new U,Tm=new U,Am=new at,xu=new ga,Vl=new pi,vo=class extends Kt{constructor(e=new Kn,t=new xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Em.fromBufferAttribute(t,s-1),Tm.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Em.distanceTo(Tm);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(s),Vl.radius+=r,e.ray.intersectsSphere(Vl)===!1)return;Am.copy(s).invert(),xu.copy(e.ray).applyMatrix4(Am);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let b=f,I=S-1;b<I;b+=p){let L=g.getX(b),C=g.getX(b+1);if(c.fromBufferAttribute(m,L),h.fromBufferAttribute(m,C),xu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let H=e.ray.origin.distanceTo(d);H<e.near||H>e.far||t.push({distance:H,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let b=f,I=S-1;b<I;b+=p){if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),xu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Cm=new U,Rm=new U,fc=class extends vo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cm.fromBufferAttribute(t,s),Rm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cm.distanceTo(Rm);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _a=class extends Jn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pc=class n extends Kn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let S=[],b=f/i,I=0;f===0&&a===0?I=.5/t:f===i&&l===Math.PI&&(I=-.5/t);for(let L=0;L<=t;L++){let C=L/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+I,1-b),S.push(c++)}h.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let b=h[f][S+1],I=h[f][S],L=h[f+1][S],C=h[f+1][S+1];(f!==0||a>0)&&p.push(b,I,C),(f!==i-1||l<Math.PI)&&p.push(I,L,C)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mc=class extends Kn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){let f=o.getX(g+m),S=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,S),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ft(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var xo=class extends Ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vr=class extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Gl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function OM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function kM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Pm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function sg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var ba=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$u=class extends ba{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cp,endingEnd:Cp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rp:r=e,o=2*t-i;break;case Lp:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rp:a=e,l=2*i-t;break;case Lp:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,I=p*m-p*v;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+S*a[c+L]+b*a[l+L]+I*a[u+L];return r}},qu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Xu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gl(t,this.TimeBufferType),this.values=Gl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gl(e.times,Array),values:Gl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $u(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ql:t=this.InterpolantFactoryMethodDiscrete;break;case Xl:t=this.InterpolantFactoryMethodLinear;break;case Xh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ql;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&OM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xh,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Xl;var Fs=class extends gi{};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ql;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends gi{};gc.prototype.ValueTypeName="color";var Ma=class extends gi{};Ma.prototype.ValueTypeName="number";var Yu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Pi.slerpFlat(r,0,a,c-o,a,c,l);return r}},us=class extends gi{InterpolantFactoryMethodLinear(e){return new Yu(this.times,this.values,this.getValueSize(),e)}};us.prototype.ValueTypeName="quaternion";us.prototype.DefaultInterpolation=Xl;us.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends gi{};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=ql;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends gi{};ds.prototype.ValueTypeName="vector";var _o=class{constructor(e,t=-1,i,s=vv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(FM(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(gi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=kM(l);l=Pm(l,1,h),c=Pm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ma(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,g,v){if(p.length!==0){let m=[],f=[];sg(p,m,f,g),m.length!==0&&v.push(new u(d,m,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(let v in p){let m=[],f=[];for(let S=0;S!==d[g].morphTargets.length;++S){let b=d[g];m.push(b.time),f.push(b.morphTarget===v?1:0)}s.push(new Ma(".morphTargetInfluence["+v+"]",m,f))}l=p.length*a}else{let p=".bones["+t[u].name+"]";i(ds,p+".position",d,"pos",s),i(us,p+".quaternion",d,"rot",s),i(ds,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function BM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return gc;case"quaternion":return us;case"bool":case"boolean":return Fs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function FM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=BM(n.type);if(n.times===void 0){let t=[],i=[];sg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var yc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},bo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},zM=new bo,Di=class{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var is={},ju=class extends Error{constructor(e,t){super(e),this.response=t}},Mo=class extends Di{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(is[e]!==void 0){is[e].push({onLoad:t,onProgress:i,onError:s});return}is[e]=[],is[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=is[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){S();function S(){u.read().then(({done:b,value:I})=>{if(b)f.close();else{v+=I.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,N=h.length;C<N;C++){let H=h[C];H.onProgress&&H.onProgress(L)}f.enqueue(I),S()}})}}});return new Response(m)}else throw new ju(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{yc.add(e,c);let h=is[e];delete is[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=is[e];if(h===void 0)throw this.manager.itemError(e),c;delete is[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Zu=class extends Di{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ho("img");function l(){h(),yc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var vc=class extends Di{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new uc,o=new Mo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:On,a.wrapT=c.wrapT!==void 0?c.wrapT:On,a.magFilter=c.magFilter!==void 0?c.magFilter:$n,a.minFilter=c.minFilter!==void 0?c.minFilter:$n,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Os),c.mipmapCount===1&&(a.minFilter=$n),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}},xc=class extends Di{constructor(e){super(e)}load(e,t,i,s){let r=new Jn,a=new Zu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},xr=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},_c=class extends xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_u=new at,Im=new U,Nm=new U,wo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),t.position.copy(Im),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ju=class extends wo{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ma*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bc=class extends xr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ju}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dm=new at,so=new U,bu=new U,Ku=class extends wo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),i.position.copy(so),bu.copy(i.position),bu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bu),i.updateMatrixWorld(),s.makeTranslation(-so.x,-so.y,-so.z),Dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}},Mc=class extends xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qu=class extends wo{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wa=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Qu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wc=class extends xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sc=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ec=class extends Kn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ud="\\[\\]\\.:\\/",HM=new RegExp("["+ud+"]","g"),dd="[^"+ud+"]",VM="[^"+ud.replace("\\.","")+"]",GM=/((?:WC+[\/:])*)/.source.replace("WC",dd),WM=/(WCOD+)?/.source.replace("WCOD",VM),$M=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),qM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),XM=new RegExp("^"+GM+WM+$M+qM+"$"),YM=["material","materials","bones","map"],ed=class{constructor(e,t,i){let s=i||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(HM,"")}static parseTrackName(e){let t=XM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);YM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=ed;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fE=new Float32Array(1);var _r=class extends cc{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Tc=class{constructor(e,t,i=0,s=1/0){this.ray=new ga(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return td(e,this,i,t),i.sort(Um),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)td(e[s],this,i,t);return i.sort(Um),i}};function Um(n,e){return n.distance-e.distance}function td(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)td(s[r],e,t,!0)}}var Om=new U,Wl=new U,Ac=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Om.subVectors(e,this.start),Wl.subVectors(this.end,this.start);let i=Wl.dot(Wl),r=Wl.dot(Om)/i;return t&&(r=Un(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);var So=class extends vc{constructor(e){super(e)}parse(e){function t(z){switch(z.image_type){case d:case v:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(z.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function i(z,ne,X,$,ee){let Q,ue,B=X.pixel_size>>3,q=X.width*X.height*B;if(ne&&(ue=ee.subarray($,$+=X.colormap_length*(X.colormap_size>>3))),z){Q=new Uint8Array(q);let se,re,le,Ce=0,Fe=new Uint8Array(B);for(;Ce<q;)if(se=ee[$++],re=(se&127)+1,se&128){for(le=0;le<B;++le)Fe[le]=ee[$++];for(le=0;le<re;++le)Q.set(Fe,Ce+le*B);Ce+=B*re}else{for(re*=B,le=0;le<re;++le)Q[Ce+le]=ee[$++];Ce+=re}}else Q=ee.subarray($,$+=ne?X.width*X.height:q);return{pixel_data:Q,palettes:ue}}function s(z,ne,X,$,ee,Q,ue,B,q){let se=q,re,le=0,Ce,Fe,ze=w.width;for(Fe=ne;Fe!==$;Fe+=X)for(Ce=ee;Ce!==ue;Ce+=Q,le++)re=B[le],z[(Ce+ze*Fe)*4+3]=255,z[(Ce+ze*Fe)*4+2]=se[re*3+0],z[(Ce+ze*Fe)*4+1]=se[re*3+1],z[(Ce+ze*Fe)*4+0]=se[re*3+2];return z}function r(z,ne,X,$,ee,Q,ue,B){let q,se=0,re,le,Ce=w.width;for(le=ne;le!==$;le+=X)for(re=ee;re!==ue;re+=Q,se+=2)q=B[se+0]+(B[se+1]<<8),z[(re+Ce*le)*4+0]=(q&31744)>>7,z[(re+Ce*le)*4+1]=(q&992)>>2,z[(re+Ce*le)*4+2]=(q&31)<<3,z[(re+Ce*le)*4+3]=q&32768?0:255;return z}function a(z,ne,X,$,ee,Q,ue,B){let q=0,se,re,le=w.width;for(re=ne;re!==$;re+=X)for(se=ee;se!==ue;se+=Q,q+=3)z[(se+le*re)*4+3]=255,z[(se+le*re)*4+2]=B[q+0],z[(se+le*re)*4+1]=B[q+1],z[(se+le*re)*4+0]=B[q+2];return z}function o(z,ne,X,$,ee,Q,ue,B){let q=0,se,re,le=w.width;for(re=ne;re!==$;re+=X)for(se=ee;se!==ue;se+=Q,q+=4)z[(se+le*re)*4+2]=B[q+0],z[(se+le*re)*4+1]=B[q+1],z[(se+le*re)*4+0]=B[q+2],z[(se+le*re)*4+3]=B[q+3];return z}function l(z,ne,X,$,ee,Q,ue,B){let q,se=0,re,le,Ce=w.width;for(le=ne;le!==$;le+=X)for(re=ee;re!==ue;re+=Q,se++)q=B[se],z[(re+Ce*le)*4+0]=q,z[(re+Ce*le)*4+1]=q,z[(re+Ce*le)*4+2]=q,z[(re+Ce*le)*4+3]=255;return z}function c(z,ne,X,$,ee,Q,ue,B){let q=0,se,re,le=w.width;for(re=ne;re!==$;re+=X)for(se=ee;se!==ue;se+=Q,q+=2)z[(se+le*re)*4+0]=B[q+0],z[(se+le*re)*4+1]=B[q+0],z[(se+le*re)*4+2]=B[q+0],z[(se+le*re)*4+3]=B[q+1];return z}function h(z,ne,X,$,ee){let Q,ue,B,q,se,re;switch((w.flags&S)>>b){default:case C:Q=0,B=1,se=ne,ue=0,q=1,re=X;break;case I:Q=0,B=1,se=ne,ue=X-1,q=-1,re=-1;break;case N:Q=ne-1,B=-1,se=-1,ue=0,q=1,re=X;break;case L:Q=ne-1,B=-1,se=-1,ue=X-1,q=-1,re=-1;break}if(ce)switch(w.pixel_size){case 8:l(z,ue,q,re,Q,B,se,$);break;case 16:c(z,ue,q,re,Q,B,se,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:s(z,ue,q,re,Q,B,se,$,ee);break;case 16:r(z,ue,q,re,Q,B,se,$);break;case 24:a(z,ue,q,re,Q,B,se,$);break;case 32:o(z,ue,q,re,Q,B,se,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return z}let u=0,d=1,p=2,g=3,v=9,m=10,f=11,S=48,b=4,I=0,L=1,C=2,N=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let H=0,M=new Uint8Array(e),w={id_length:M[H++],colormap_type:M[H++],image_type:M[H++],colormap_index:M[H++]|M[H++]<<8,colormap_length:M[H++]|M[H++]<<8,colormap_size:M[H++],origin:[M[H++]|M[H++]<<8,M[H++]|M[H++]<<8],width:M[H++]|M[H++]<<8,height:M[H++]|M[H++]<<8,pixel_size:M[H++],flags:M[H++]};if(t(w),w.id_length+H>e.length)throw new Error("THREE.TGALoader: No data.");H+=w.id_length;let F=!1,ie=!1,ce=!1;switch(w.image_type){case v:F=!0,ie=!0;break;case d:ie=!0;break;case m:F=!0;break;case p:break;case f:F=!0,ce=!0;break;case g:ce=!0;break}let k=new Uint8Array(w.width*w.height*4),G=i(F,ie,w,H,M);return h(k,w.width,w.height,G.pixel_data,G.palettes),{data:k,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Os}}};var Dc=class extends Di{load(e,t,i,s){let r=this,a=r.path===""?Sc.extractUrlBase(e):r.path,o=new Mo(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,x){let T=[],E=_.childNodes;for(let R=0,K=E.length;R<K;R++){let ae=E[R];ae.nodeName===x&&T.push(ae)}return T}function s(_){if(_.length===0)return[];let x=_.trim().split(/\s+/),T=new Array(x.length);for(let E=0,R=x.length;E<R;E++)T[E]=x[E];return T}function r(_){if(_.length===0)return[];let x=_.trim().split(/\s+/),T=new Array(x.length);for(let E=0,R=x.length;E<R;E++)T[E]=parseFloat(x[E]);return T}function a(_){if(_.length===0)return[];let x=_.trim().split(/\s+/),T=new Array(x.length);for(let E=0,R=x.length;E<R;E++)T[E]=parseInt(x[E]);return T}function o(_){return _.substring(1)}function l(){return"three_default_"+Ly++}function c(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function p(_,x,T,E){let R=i(_,x)[0];if(R!==void 0){let K=i(R,T);for(let ae=0;ae<K.length;ae++)E(K[ae])}}function g(_,x){for(let T in _){let E=_[T];E.build=x(_[T])}}function v(_,x){return _.build!==void 0||(_.build=x(_)),_.build}function m(_){let x={sources:{},samplers:{},channels:{}},T=!1;for(let E=0,R=_.childNodes.length;E<R;E++){let K=_.childNodes[E];if(K.nodeType!==1)continue;let ae;switch(K.nodeName){case"source":ae=K.getAttribute("id"),x.sources[ae]=O(K);break;case"sampler":ae=K.getAttribute("id"),x.samplers[ae]=f(K);break;case"channel":ae=K.getAttribute("target"),x.channels[ae]=S(K);break;case"animation":m(K),T=!0;break;default:console.log(K)}}T===!1&&(Je.animations[_.getAttribute("id")||Hs.generateUUID()]=x)}function f(_){let x={inputs:{}};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let K=o(R.getAttribute("source")),ae=R.getAttribute("semantic");x.inputs[ae]=K;break}}return x}function S(_){let x={},E=_.getAttribute("target").split("/"),R=E.shift(),K=E.shift(),ae=K.indexOf("(")!==-1,Pe=K.indexOf(".")!==-1;if(Pe)E=K.split("."),K=E.shift(),x.member=E.shift();else if(ae){let we=K.split("(");K=we.shift();for(let Ae=0;Ae<we.length;Ae++)we[Ae]=parseInt(we[Ae].replace(/\)/,""));x.indices=we}return x.id=R,x.sid=K,x.arraySyntax=ae,x.memberSyntax=Pe,x.sampler=o(_.getAttribute("source")),x}function b(_){let x=[],T=_.channels,E=_.samplers,R=_.sources;for(let K in T)if(T.hasOwnProperty(K)){let ae=T[K],Pe=E[ae.sampler],we=Pe.inputs.INPUT,Ae=Pe.inputs.OUTPUT,Be=R[we],fe=R[Ae],ke=L(ae,Be,fe);w(ke,x)}return x}function I(_){return v(Je.animations[_],b)}function L(_,x,T){let E=Je.nodes[_.id],R=nt(E.id),K=E.transforms[_.sid],ae=E.matrix.clone().transpose(),Pe,we,Ae,Be,fe,ke,Ue={};switch(K){case"matrix":for(Ae=0,Be=x.array.length;Ae<Be;Ae++)if(Pe=x.array[Ae],we=Ae*T.stride,Ue[Pe]===void 0&&(Ue[Pe]={}),_.arraySyntax===!0){let Yt=T.array[we],Ct=_.indices[0]+4*_.indices[1];Ue[Pe][Ct]=Yt}else for(fe=0,ke=T.stride;fe<ke;fe++)Ue[Pe][fe]=T.array[we+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}let $e=C(Ue,ae);return{name:R.uuid,keyframes:$e}}function C(_,x){let T=[];for(let R in _)T.push({time:parseFloat(R),value:_[R]});T.sort(E);for(let R=0;R<16;R++)F(T,R,x.elements[R]);return T;function E(R,K){return R.time-K.time}}let N=new U,H=new U,M=new Pi;function w(_,x){let T=_.keyframes,E=_.name,R=[],K=[],ae=[],Pe=[];for(let we=0,Ae=T.length;we<Ae;we++){let Be=T[we],fe=Be.time,ke=Be.value;Le.fromArray(ke).transpose(),Le.decompose(N,M,H),R.push(fe),K.push(N.x,N.y,N.z),ae.push(M.x,M.y,M.z,M.w),Pe.push(H.x,H.y,H.z)}return K.length>0&&x.push(new ds(E+".position",R,K)),ae.length>0&&x.push(new us(E+".quaternion",R,ae)),Pe.length>0&&x.push(new ds(E+".scale",R,Pe)),x}function F(_,x,T){let E,R=!0,K,ae;for(K=0,ae=_.length;K<ae;K++)E=_[K],E.value[x]===void 0?E.value[x]=null:R=!1;if(R===!0)for(K=0,ae=_.length;K<ae;K++)E=_[K],E.value[x]=T;else ie(_,x)}function ie(_,x){let T,E;for(let R=0,K=_.length;R<K;R++){let ae=_[R];if(ae.value[x]===null){if(T=ce(_,R,x),E=k(_,R,x),T===null){ae.value[x]=E.value[x];continue}if(E===null){ae.value[x]=T.value[x];continue}G(ae,T,E,x)}}}function ce(_,x,T){for(;x>=0;){let E=_[x];if(E.value[T]!==null)return E;x--}return null}function k(_,x,T){for(;x<_.length;){let E=_[x];if(E.value[T]!==null)return E;x++}return null}function G(_,x,T,E){if(T.time-x.time===0){_.value[E]=x.value[E];return}_.value[E]=(_.time-x.time)*(T.value[E]-x.value[E])/(T.time-x.time)+x.value[E]}function z(_){let x={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"instance_animation":x.animations.push(o(R.getAttribute("url")));break}}Je.clips[_.getAttribute("id")]=x}function ne(_){let x=[],T=_.name,E=_.end-_.start||-1,R=_.animations;for(let K=0,ae=R.length;K<ae;K++){let Pe=I(R[K]);for(let we=0,Ae=Pe.length;we<Ae;we++)x.push(Pe[we])}return new _o(T,E,x)}function X(_){return v(Je.clips[_],ne)}function $(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"skin":x.id=o(R.getAttribute("source")),x.skin=ee(R);break;case"morph":x.id=o(R.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[_.getAttribute("id")]=x}function ee(_){let x={sources:{}};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(R.textContent);break;case"source":let K=R.getAttribute("id");x.sources[K]=O(R);break;case"joints":x.joints=Q(R);break;case"vertex_weights":x.vertexWeights=ue(R);break}}return x}function Q(_){let x={inputs:{}};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let K=R.getAttribute("semantic"),ae=o(R.getAttribute("source"));x.inputs[K]=ae;break}}return x}function ue(_){let x={inputs:{}};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let K=R.getAttribute("semantic"),ae=o(R.getAttribute("source")),Pe=parseInt(R.getAttribute("offset"));x.inputs[K]={id:ae,offset:Pe};break;case"vcount":x.vcount=a(R.textContent);break;case"v":x.v=a(R.textContent);break}}return x}function B(_){let x={id:_.id},T=Je.geometries[x.id];return _.skin!==void 0&&(x.skin=q(_.skin),T.sources.skinIndices=x.skin.indices,T.sources.skinWeights=x.skin.weights),x}function q(_){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=_.sources,R=_.vertexWeights,K=R.vcount,ae=R.v,Pe=R.inputs.JOINT.offset,we=R.inputs.WEIGHT.offset,Ae=_.sources[_.joints.inputs.JOINT],Be=_.sources[_.joints.inputs.INV_BIND_MATRIX],fe=E[R.inputs.WEIGHT.id].array,ke=0,Ue,$e,Ge;for(Ue=0,Ge=K.length;Ue<Ge;Ue++){let Ct=K[Ue],vt=[];for($e=0;$e<Ct;$e++){let xt=ae[ke+Pe],Ji=ae[ke+we],jn=fe[Ji];vt.push({index:xt,weight:jn}),ke+=2}for(vt.sort(Yt),$e=0;$e<4;$e++){let xt=vt[$e];xt!==void 0?(T.indices.array.push(xt.index),T.weights.array.push(xt.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(_.bindShapeMatrix?T.bindMatrix=new at().fromArray(_.bindShapeMatrix).transpose():T.bindMatrix=new at().identity(),Ue=0,Ge=Ae.array.length;Ue<Ge;Ue++){let Ct=Ae.array[Ue],vt=new at().fromArray(Be.array,Ue*Be.stride).transpose();T.joints.push({name:Ct,boneInverse:vt})}return T;function Yt(Ct,vt){return vt.weight-Ct.weight}}function se(_){return v(Je.controllers[_],B)}function re(_){let x={init_from:i(_,"init_from")[0].textContent};Je.images[_.getAttribute("id")]=x}function le(_){return _.build!==void 0?_.build:_.init_from}function Ce(_){let x=Je.images[_];return x!==void 0?v(x,le):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function Fe(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"profile_COMMON":x.profile=ze(R);break}}Je.effects[_.getAttribute("id")]=x}function ze(_){let x={surfaces:{},samplers:{}};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"newparam":mt(R,x);break;case"technique":x.technique=Xe(R);break;case"extra":x.extra=A(R);break}}return x}function mt(_,x){let T=_.getAttribute("sid");for(let E=0,R=_.childNodes.length;E<R;E++){let K=_.childNodes[E];if(K.nodeType===1)switch(K.nodeName){case"surface":x.surfaces[T]=Y(K);break;case"sampler2D":x.samplers[T]=sn(K);break}}}function Y(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"init_from":x.init_from=R.textContent;break}}return x}function sn(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"source":x.source=R.textContent;break}}return x}function Xe(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=R.nodeName,x.parameters=it(R);break;case"extra":x.extra=A(R);break}}return x}function it(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[R.nodeName]=Oe(R);break;case"transparent":x[R.nodeName]={opaque:R.hasAttribute("opaque")?R.getAttribute("opaque"):"A_ONE",data:Oe(R)};break}}return x}function Oe(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"color":x[R.nodeName]=r(R.textContent);break;case"float":x[R.nodeName]=parseFloat(R.textContent);break;case"texture":x[R.nodeName]={id:R.getAttribute("texture"),extra:Ot(R)};break}}return x}function Ot(_){let x={technique:{}};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"extra":ht(R,x);break}}return x}function ht(_,x){for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"technique":D(R,x);break}}}function D(_,x){for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[R.nodeName]=parseFloat(R.textContent);break;case"wrapU":case"wrapV":R.textContent.toUpperCase()==="TRUE"?x.technique[R.nodeName]=1:R.textContent.toUpperCase()==="FALSE"?x.technique[R.nodeName]=0:x.technique[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=ge(R);break}}}function A(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"technique":x.technique=Z(R);break}}return x}function Z(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"double_sided":x[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=ge(R);break}}return x}function ge(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"texture":x[R.nodeName]={id:R.getAttribute("texture"),texcoord:R.getAttribute("texcoord"),extra:Ot(R)};break}}return x}function pe(_){return _}function ye(_){return v(Je.effects[_],pe)}function He(_){let x={name:_.getAttribute("name")};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"instance_effect":x.url=o(R.getAttribute("url"));break}}Je.materials[_.getAttribute("id")]=x}function Te(_){let x,T=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":x=zh;break;default:x=Za}return x}function Ne(_){let x=ye(_.url),T=x.profile.technique,E;switch(T.type){case"phong":case"blinn":E=new xo;break;case"lambert":E=new vr;break;default:E=new tn;break}E.name=_.name||"";function R(we,Ae=null){let Be=x.profile.samplers[we.id],fe=null;if(Be!==void 0){let ke=x.profile.surfaces[Be.source];fe=Ce(ke.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=Ce(we.id);if(fe!==null){let ke=Te(fe);if(ke!==void 0){let Ue=ke.load(fe),$e=we.extra;if($e!==void 0&&$e.technique!==void 0&&c($e.technique)===!1){let Ge=$e.technique;Ue.wrapS=Ge.wrapU?Us:On,Ue.wrapT=Ge.wrapV?Us:On,Ue.offset.set(Ge.offsetU||0,Ge.offsetV||0),Ue.repeat.set(Ge.repeatU||1,Ge.repeatV||1)}else Ue.wrapS=Us,Ue.wrapT=Us;return Ae!==null&&(Ue.colorSpace=Ae),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",we.id),null}let K=T.parameters;for(let we in K){let Ae=K[we];switch(we){case"diffuse":Ae.color&&E.color.fromArray(Ae.color),Ae.texture&&(E.map=R(Ae.texture,jt));break;case"specular":Ae.color&&E.specular&&E.specular.fromArray(Ae.color),Ae.texture&&(E.specularMap=R(Ae.texture));break;case"bump":Ae.texture&&(E.normalMap=R(Ae.texture));break;case"ambient":Ae.texture&&(E.lightMap=R(Ae.texture,jt));break;case"shininess":Ae.float&&E.shininess&&(E.shininess=Ae.float);break;case"emission":Ae.color&&E.emissive&&E.emissive.fromArray(Ae.color),Ae.texture&&(E.emissiveMap=R(Ae.texture,jt));break}}E.color.convertSRGBToLinear(),E.specular&&E.specular.convertSRGBToLinear(),E.emissive&&E.emissive.convertSRGBToLinear();let ae=K.transparent,Pe=K.transparency;if(Pe===void 0&&ae&&(Pe={float:1}),ae===void 0&&Pe&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Pe)if(ae.data.texture)E.transparent=!0;else{let we=ae.data.color;switch(ae.opaque){case"A_ONE":E.opacity=we[3]*Pe.float;break;case"RGB_ZERO":E.opacity=1-we[0]*Pe.float;break;case"A_ZERO":E.opacity=1-we[3]*Pe.float;break;case"RGB_ONE":E.opacity=we[0]*Pe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}E.opacity<1&&(E.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let we=T.extra.technique;for(let Ae in we){let Be=we[Ae];switch(Ae){case"double_sided":E.side=Be===1?Xn:Zn;break;case"bump":E.normalMap=R(Be.texture),E.normalScale=new tt(1,1);break}}}return E}function je(_){return v(Je.materials[_],Ne)}function ut(_){let x={name:_.getAttribute("name")};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"optics":x.optics=me(R);break}}Je.cameras[_.getAttribute("id")]=x}function me(_){for(let x=0;x<_.childNodes.length;x++){let T=_.childNodes[x];switch(T.nodeName){case"technique_common":return Et(T)}}return{}}function Et(_){let x={};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];switch(E.nodeName){case"perspective":case"orthographic":x.technique=E.nodeName,x.parameters=pt(E);break}}return x}function pt(_){let x={};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[E.nodeName]=parseFloat(E.textContent);break}}return x}function et(_){let x;switch(_.optics.technique){case"perspective":x=new on(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let T=_.optics.parameters.ymag,E=_.optics.parameters.xmag,R=_.optics.parameters.aspect_ratio;E=E===void 0?T*R:E,T=T===void 0?E/R:T,E*=.5,T*=.5,x=new Bs(-E,E,T,-T,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:x=new on;break}return x.name=_.name||"",x}function We(_){let x=Je.cameras[_];return x!==void 0?v(x,et):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function De(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"technique_common":x=ot(R);break}}Je.lights[_.getAttribute("id")]=x}function ot(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=R.nodeName,x.parameters=wt(R)}}return x}function wt(_){let x={};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"color":let K=r(R.textContent);x.color=new ct().fromArray(K).convertSRGBToLinear();break;case"falloff_angle":x.falloffAngle=parseFloat(R.textContent);break;case"quadratic_attenuation":let ae=parseFloat(R.textContent);x.distance=ae?Math.sqrt(1/ae):0;break}}return x}function Ht(_){let x;switch(_.technique){case"directional":x=new wa;break;case"point":x=new Mc;break;case"spot":x=new bc;break;case"ambient":x=new wc;break}return _.parameters.color&&x.color.copy(_.parameters.color),_.parameters.distance&&(x.distance=_.parameters.distance),x}function dt(_){let x=Je.lights[_];return x!==void 0?v(x,Ht):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function Me(_){let x={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=i(_,"mesh")[0];if(T!==void 0){for(let E=0;E<T.childNodes.length;E++){let R=T.childNodes[E];if(R.nodeType!==1)continue;let K=R.getAttribute("id");switch(R.nodeName){case"source":x.sources[K]=O(R);break;case"vertices":x.vertices=Se(R);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",R.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(Ee(R));break;default:console.log(R)}}Je.geometries[_.getAttribute("id")]=x}}function O(_){let x={array:[],stride:3};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"float_array":x.array=r(E.textContent);break;case"Name_array":x.array=s(E.textContent);break;case"technique_common":let R=i(E,"accessor")[0];R!==void 0&&(x.stride=parseInt(R.getAttribute("stride")));break}}return x}function Se(_){let x={};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];E.nodeType===1&&(x[E.getAttribute("semantic")]=o(E.getAttribute("source")))}return x}function Ee(_){let x={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,E=_.childNodes.length;T<E;T++){let R=_.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let K=o(R.getAttribute("source")),ae=R.getAttribute("semantic"),Pe=parseInt(R.getAttribute("offset")),we=parseInt(R.getAttribute("set")),Ae=we>0?ae+we:ae;x.inputs[Ae]={id:K,offset:Pe},x.stride=Math.max(x.stride,Pe+1),ae==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=a(R.textContent);break;case"p":x.p=a(R.textContent);break}}return x}function Ke(_){let x={};for(let T=0;T<_.length;T++){let E=_[T];x[E.type]===void 0&&(x[E.type]=[]),x[E.type].push(E)}return x}function Ye(_){let x=0;for(let T=0,E=_.length;T<E;T++)_[T].hasUV===!0&&x++;x>0&&x<_.length&&(_.uvsNeedsFix=!0)}function At(_){let x={},T=_.sources,E=_.vertices,R=_.primitives;if(R.length===0)return{};let K=Ke(R);for(let ae in K){let Pe=K[ae];Ye(Pe),x[ae]=Lt(Pe,T,E)}return x}function Lt(_,x,T){let E={},R={array:[],stride:0},K={array:[],stride:0},ae={array:[],stride:0},Pe={array:[],stride:0},we={array:[],stride:0},Ae={array:[],stride:4},Be={array:[],stride:4},fe=new Kn,ke=[],Ue=0;for(let $e=0;$e<_.length;$e++){let Ge=_[$e],Yt=Ge.inputs,Ct=0;switch(Ge.type){case"lines":case"linestrips":Ct=Ge.count*2;break;case"triangles":Ct=Ge.count*3;break;case"polylist":for(let vt=0;vt<Ge.count;vt++){let xt=Ge.vcount[vt];switch(xt){case 3:Ct+=3;break;case 4:Ct+=6;break;default:Ct+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ge.type)}fe.addGroup(Ue,Ct,$e),Ue+=Ct,Ge.material&&ke.push(Ge.material);for(let vt in Yt){let xt=Yt[vt];switch(vt){case"VERTEX":for(let Ji in T){let jn=T[Ji];switch(Ji){case"POSITION":let zr=R.array.length;if(Tt(Ge,x[jn],xt.offset,R.array),R.stride=x[jn].stride,x.skinWeights&&x.skinIndices&&(Tt(Ge,x.skinIndices,xt.offset,Ae.array),Tt(Ge,x.skinWeights,xt.offset,Be.array)),Ge.hasUV===!1&&_.uvsNeedsFix===!0){let Py=(R.array.length-zr)/R.stride;for(let Yf=0;Yf<Py;Yf++)ae.array.push(0,0)}break;case"NORMAL":Tt(Ge,x[jn],xt.offset,K.array),K.stride=x[jn].stride;break;case"COLOR":Tt(Ge,x[jn],xt.offset,we.array),we.stride=x[jn].stride;break;case"TEXCOORD":Tt(Ge,x[jn],xt.offset,ae.array),ae.stride=x[jn].stride;break;case"TEXCOORD1":Tt(Ge,x[jn],xt.offset,Pe.array),ae.stride=x[jn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ji)}}break;case"NORMAL":Tt(Ge,x[xt.id],xt.offset,K.array),K.stride=x[xt.id].stride;break;case"COLOR":Tt(Ge,x[xt.id],xt.offset,we.array,!0),we.stride=x[xt.id].stride;break;case"TEXCOORD":Tt(Ge,x[xt.id],xt.offset,ae.array),ae.stride=x[xt.id].stride;break;case"TEXCOORD1":Tt(Ge,x[xt.id],xt.offset,Pe.array),Pe.stride=x[xt.id].stride;break}}}return R.array.length>0&&fe.setAttribute("position",new Ft(R.array,R.stride)),K.array.length>0&&fe.setAttribute("normal",new Ft(K.array,K.stride)),we.array.length>0&&fe.setAttribute("color",new Ft(we.array,we.stride)),ae.array.length>0&&fe.setAttribute("uv",new Ft(ae.array,ae.stride)),Pe.array.length>0&&fe.setAttribute("uv1",new Ft(Pe.array,Pe.stride)),Ae.array.length>0&&fe.setAttribute("skinIndex",new Ft(Ae.array,Ae.stride)),Be.array.length>0&&fe.setAttribute("skinWeight",new Ft(Be.array,Be.stride)),E.data=fe,E.type=_[0].type,E.materialKeys=ke,E}function Tt(_,x,T,E,R=!1){let K=_.p,ae=_.stride,Pe=_.vcount;function we(fe){let ke=K[fe+T]*Be,Ue=ke+Be;for(;ke<Ue;ke++)E.push(Ae[ke]);if(R){let $e=E.length-Be-1;fl.setRGB(E[$e+0],E[$e+1],E[$e+2]).convertSRGBToLinear(),E[$e+0]=fl.r,E[$e+1]=fl.g,E[$e+2]=fl.b}}let Ae=x.array,Be=x.stride;if(_.vcount!==void 0){let fe=0;for(let ke=0,Ue=Pe.length;ke<Ue;ke++){let $e=Pe[ke];if($e===4){let Ge=fe+ae*0,Yt=fe+ae*1,Ct=fe+ae*2,vt=fe+ae*3;we(Ge),we(Yt),we(vt),we(Yt),we(Ct),we(vt)}else if($e===3){let Ge=fe+ae*0,Yt=fe+ae*1,Ct=fe+ae*2;we(Ge),we(Yt),we(Ct)}else if($e>4)for(let Ge=1,Yt=$e-2;Ge<=Yt;Ge++){let Ct=fe+ae*0,vt=fe+ae*Ge,xt=fe+ae*(Ge+1);we(Ct),we(vt),we(xt)}fe+=ae*$e}}else for(let fe=0,ke=K.length;fe<ke;fe+=ae)we(fe)}function fn(_){return v(Je.geometries[_],At)}function Pt(_){let x={name:_.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"technique_common":hl(E,x);break}}Je.kinematicsModels[_.getAttribute("id")]=x}function Mn(_){return _.build!==void 0?_.build:_}function ci(_){return v(Je.kinematicsModels[_],Mn)}function hl(_,x){for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"joint":x.joints[E.getAttribute("sid")]=Oh(E);break;case"link":x.links.push(Wa(E));break}}}function Oh(_){let x;for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":x=Br(E);break}}return x}function Br(_){let x={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=r(E.textContent);x.axis.fromArray(R);break;case"limits":let K=E.getElementsByTagName("max")[0],ae=E.getElementsByTagName("min")[0];x.limits.max=parseFloat(K.textContent),x.limits.min=parseFloat(ae.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function Wa(_){let x={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":x.attachments.push(Fr(E));break;case"matrix":case"translate":case"rotate":x.transforms.push($a(E));break}}return x}function Fr(_){let x={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"link":x.links.push(Wa(E));break;case"matrix":case"translate":case"rotate":x.transforms.push($a(E));break}}return x}function $a(_){let x={type:_.nodeName},T=r(_.textContent);switch(x.type){case"matrix":x.obj=new at,x.obj.fromArray(T).transpose();break;case"translate":x.obj=new U,x.obj.fromArray(T);break;case"rotate":x.obj=new U,x.obj.fromArray(T),x.angle=Hs.degToRad(T[3]);break}return x}function ul(_){let x={name:_.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":x.rigidBodies[E.getAttribute("name")]={},kh(E,x.rigidBodies[E.getAttribute("name")]);break}}Je.physicsModels[_.getAttribute("id")]=x}function kh(_,x){for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"technique_common":Bh(E,x);break}}}function Bh(_,x){for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"inertia":x.inertia=r(E.textContent);break;case"mass":x.mass=r(E.textContent)[0];break}}}function Fh(_){let x={bindJointAxis:[]};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":x.bindJointAxis.push(P(E));break}}Je.kinematicsScenes[o(_.getAttribute("url"))]=x}function P(_){let x={target:_.getAttribute("target").split("/").pop()};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=E.getElementsByTagName("param")[0];x.axis=R.textContent;let K=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=K.substring(0,K.length-1);break}}return x}function W(_){return _.build!==void 0?_.build:_}function J(_){return v(Je.kinematicsScenes[_],W)}function te(){let _=Object.keys(Je.kinematicsModels)[0],x=Object.keys(Je.kinematicsScenes)[0],T=Object.keys(Je.visualScenes)[0];if(_===void 0||x===void 0)return;let E=ci(_),R=J(x),K=Xa(T),ae=R.bindJointAxis,Pe={};for(let Be=0,fe=ae.length;Be<fe;Be++){let ke=ae[Be],Ue=Xt.querySelector('[sid="'+ke.target+'"]');if(Ue){let $e=Ue.parentElement;we(ke.jointIndex,$e)}}function we(Be,fe){let ke=fe.getAttribute("name"),Ue=E.joints[Be];K.traverse(function($e){$e.name===ke&&(Pe[Be]={object:$e,transforms:j(fe),joint:Ue,position:Ue.zeroPosition})})}let Ae=new at;Xf={joints:E&&E.joints,getJointValue:function(Be){let fe=Pe[Be];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+Be+" doesn't exist.")},setJointValue:function(Be,fe){let ke=Pe[Be];if(ke){let Ue=ke.joint;if(fe>Ue.limits.max||fe<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Be+" value "+fe+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Be+" is static.");else{let $e=ke.object,Ge=Ue.axis,Yt=ke.transforms;Le.identity();for(let Ct=0;Ct<Yt.length;Ct++){let vt=Yt[Ct];if(vt.sid&&vt.sid.indexOf(Be)!==-1)switch(Ue.type){case"revolute":Le.multiply(Ae.makeRotationAxis(Ge,Hs.degToRad(fe)));break;case"prismatic":Le.multiply(Ae.makeTranslation(Ge.x*fe,Ge.y*fe,Ge.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(vt.type){case"matrix":Le.multiply(vt.obj);break;case"translate":Le.multiply(Ae.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":Le.scale(vt.obj);break;case"rotate":Le.multiply(Ae.makeRotationAxis(vt.obj,vt.angle));break}}$e.matrix.copy(Le),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Pe[Be].position=fe}}else console.log("THREE.ColladaLoader: "+Be+" does not exist.")}}}function j(_){let x=[],T=Xt.querySelector('[id="'+_.id+'"]');for(let E=0;E<T.childNodes.length;E++){let R=T.childNodes[E];if(R.nodeType!==1)continue;let K,ae;switch(R.nodeName){case"matrix":K=r(R.textContent);let Pe=new at().fromArray(K).transpose();x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:Pe});break;case"translate":case"scale":K=r(R.textContent),ae=new U().fromArray(K),x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae});break;case"rotate":K=r(R.textContent),ae=new U().fromArray(K);let we=Hs.degToRad(K[3]);x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae,angle:we});break}}return x}function Re(_){let x=_.getElementsByTagName("node");for(let T=0;T<x.length;T++){let E=x[T];E.hasAttribute("id")===!1&&E.setAttribute("id",l())}}let Le=new at,Ve=new U;function Ze(_){let x={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new at,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];if(E.nodeType!==1)continue;let R;switch(E.nodeName){case"node":x.nodes.push(E.getAttribute("id")),Ze(E);break;case"instance_camera":x.instanceCameras.push(o(E.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(lt(E));break;case"instance_light":x.instanceLights.push(o(E.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(lt(E));break;case"instance_node":x.instanceNodes.push(o(E.getAttribute("url")));break;case"matrix":R=r(E.textContent),x.matrix.multiply(Le.fromArray(R).transpose()),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":R=r(E.textContent),Ve.fromArray(R),x.matrix.multiply(Le.makeTranslation(Ve.x,Ve.y,Ve.z)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":R=r(E.textContent);let K=Hs.degToRad(R[3]);x.matrix.multiply(Le.makeRotationAxis(Ve.fromArray(R),K)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":R=r(E.textContent),x.matrix.scale(Ve.fromArray(R)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return kt(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):Je.nodes[x.id]=x,x}function lt(_){let x={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<_.childNodes.length;T++){let E=_.childNodes[T];switch(E.nodeName){case"bind_material":let R=E.getElementsByTagName("instance_material");for(let K=0;K<R.length;K++){let ae=R[K],Pe=ae.getAttribute("symbol"),we=ae.getAttribute("target");x.materials[Pe]=o(we)}break;case"skeleton":x.skeletons.push(o(E.textContent));break;default:break}}return x}function st(_,x){let T=[],E=[],R,K,ae;for(R=0;R<_.length;R++){let Ae=_[R],Be;if(kt(Ae))Be=nt(Ae),rt(Be,x,T);else if(Zi(Ae)){let ke=Je.visualScenes[Ae].children;for(let Ue=0;Ue<ke.length;Ue++){let $e=ke[Ue];if($e.type==="JOINT"){let Ge=nt($e.id);rt(Ge,x,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ae)}for(R=0;R<x.length;R++)for(K=0;K<T.length;K++)if(ae=T[K],ae.bone.name===x[R].name){E[R]=ae,ae.processed=!0;break}for(R=0;R<T.length;R++)ae=T[R],ae.processed===!1&&(E.push(ae),ae.processed=!0);let Pe=[],we=[];for(R=0;R<E.length;R++)ae=E[R],Pe.push(ae.bone),we.push(ae.boneInverse);return new dc(Pe,we)}function rt(_,x,T){_.traverse(function(E){if(E.isBone===!0){let R;for(let K=0;K<x.length;K++){let ae=x[K];if(ae.name===E.name){R=ae.boneInverse;break}}R===void 0&&(R=new at),T.push({bone:E,boneInverse:R,processed:!1})}})}function qt(_){let x=[],T=_.matrix,E=_.nodes,R=_.type,K=_.instanceCameras,ae=_.instanceControllers,Pe=_.instanceLights,we=_.instanceGeometries,Ae=_.instanceNodes;for(let fe=0,ke=E.length;fe<ke;fe++)x.push(nt(E[fe]));for(let fe=0,ke=K.length;fe<ke;fe++){let Ue=We(K[fe]);Ue!==null&&x.push(Ue.clone())}for(let fe=0,ke=ae.length;fe<ke;fe++){let Ue=ae[fe],$e=se(Ue.id),Ge=fn($e.id),Yt=hi(Ge,Ue.materials),Ct=Ue.skeletons,vt=$e.skin.joints,xt=st(Ct,vt);for(let Ji=0,jn=Yt.length;Ji<jn;Ji++){let zr=Yt[Ji];zr.isSkinnedMesh&&(zr.bind(xt,$e.skin.bindMatrix),zr.normalizeSkinWeights()),x.push(zr)}}for(let fe=0,ke=Pe.length;fe<ke;fe++){let Ue=dt(Pe[fe]);Ue!==null&&x.push(Ue.clone())}for(let fe=0,ke=we.length;fe<ke;fe++){let Ue=we[fe],$e=fn(Ue.id),Ge=hi($e,Ue.materials);for(let Yt=0,Ct=Ge.length;Yt<Ct;Yt++)x.push(Ge[Yt])}for(let fe=0,ke=Ae.length;fe<ke;fe++)x.push(nt(Ae[fe]).clone());let Be;if(E.length===0&&x.length===1)Be=x[0];else{Be=R==="JOINT"?new yo:new Sn;for(let fe=0;fe<x.length;fe++)Be.add(x[fe])}return Be.name=R==="JOINT"?_.sid:_.name,Be.matrix.copy(T),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be}let Vn=new tn({name:Di.DEFAULT_MATERIAL_NAME,color:16711935});function rn(_,x){let T=[];for(let E=0,R=_.length;E<R;E++){let K=x[_[E]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[E]),T.push(Vn)):T.push(je(K))}return T}function hi(_,x){let T=[];for(let E in _){let R=_[E],K=rn(R.materialKeys,x);if(K.length===0&&(E==="lines"||E==="linestrips"?K.push(new xa):K.push(new xo)),E==="lines"||E==="linestrips")for(let Ae=0,Be=K.length;Ae<Be;Ae++){let fe=K[Ae];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){let ke=new xa;ke.color.copy(fe.color),ke.opacity=fe.opacity,ke.transparent=fe.transparent,K[Ae]=ke}}let ae=R.data.attributes.skinIndex!==void 0,Pe=K.length===1?K[0]:K,we;switch(E){case"lines":we=new fc(R.data,Pe);break;case"linestrips":we=new vo(R.data,Pe);break;case"triangles":case"polylist":ae?we=new hc(R.data,Pe):we=new Bt(R.data,Pe);break}T.push(we)}return T}function kt(_){return Je.nodes[_]!==void 0}function nt(_){return v(Je.nodes[_],qt)}function qa(_){let x={name:_.getAttribute("name"),children:[]};Re(_);let T=i(_,"node");for(let E=0;E<T.length;E++)x.children.push(Ze(T[E]));Je.visualScenes[_.getAttribute("id")]=x}function Vt(_){let x=new Sn;x.name=_.name;let T=_.children;for(let E=0;E<T.length;E++){let R=T[E];x.add(nt(R.id))}return x}function Zi(_){return Je.visualScenes[_]!==void 0}function Xa(_){return v(Je.visualScenes[_],Vt)}function or(_){let x=i(_,"instance_visual_scene")[0];return Xa(o(x.getAttribute("url")))}function Ya(){let _=Je.clips;if(c(_)===!0){if(c(Je.animations)===!1){let x=[];for(let T in Je.animations){let E=I(T);for(let R=0,K=E.length;R<K;R++)x.push(E[R])}pl.push(new _o("default",-1,x))}}else for(let x in _)pl.push(X(x))}function pn(_){let x="",T=[_];for(;T.length;){let E=T.shift();E.nodeType===Node.TEXT_NODE?x+=E.textContent:(x+=`
`,T.push.apply(T,E.childNodes))}return x.trim()}if(e.length===0)return{scene:new hs};let Ci=new DOMParser().parseFromString(e,"application/xml"),Xt=i(Ci,"COLLADA")[0],In=Ci.getElementsByTagName("parsererror")[0];if(In!==void 0){let _=i(In,"div")[0],x;return _?x=_.textContent:x=pn(In),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}let ja=Xt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",ja);let dl=h(i(Xt,"asset")[0]),Za=new xc(this.manager);Za.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let zh;So&&(zh=new So(this.manager),zh.setPath(this.resourcePath||t));let fl=new ct,pl=[],Xf={},Ly=0,Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(Xt,"library_animations","animation",m),p(Xt,"library_animation_clips","animation_clip",z),p(Xt,"library_controllers","controller",$),p(Xt,"library_images","image",re),p(Xt,"library_effects","effect",Fe),p(Xt,"library_materials","material",He),p(Xt,"library_cameras","camera",ut),p(Xt,"library_lights","light",De),p(Xt,"library_geometries","geometry",Me),p(Xt,"library_nodes","node",Ze),p(Xt,"library_visual_scenes","visual_scene",qa),p(Xt,"library_kinematics_models","kinematics_model",Pt),p(Xt,"library_physics_models","physics_model",ul),p(Xt,"scene","instance_kinematics_scene",Fh),g(Je.animations,b),g(Je.clips,ne),g(Je.controllers,B),g(Je.images,le),g(Je.effects,pe),g(Je.materials,Ne),g(Je.cameras,et),g(Je.lights,Ht),g(Je.geometries,At),g(Je.visualScenes,Vt),Ya(),te();let ml=or(i(Xt,"scene")[0]);return ml.animations=pl,dl.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ml.rotation.set(-Math.PI/2,0,0)),ml.scale.multiplyScalar(dl.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),pl},kinematics:Xf,library:Je,scene:ml}}};var rg=new yn,Uc=new U,Vs=class extends Ec{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ft(e,3)),this.setAttribute("uv",new Ft(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new _r(t,6,1);return this.setAttribute("instanceStart",new mi(i,3,0)),this.setAttribute("instanceEnd",new mi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new _r(t,6,1);return this.setAttribute("instanceColorStart",new mi(i,3,0)),this.setAttribute("instanceColorEnd",new mi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new mc(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),rg.setFromBufferAttribute(t),this.boundingBox.union(rg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Uc.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Uc)),Uc.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Uc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new tt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qn.line={uniforms:Ic.merge([be.common,be.fog,be.line]),vertexShader:`
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
		`};var fs=class extends Si{constructor(e){super({type:"LineMaterial",uniforms:Ic.clone(qn.line.uniforms),vertexShader:qn.line.vertexShader,fragmentShader:qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var ag=new U,og=new U,En=new _t,Tn=new _t,Ui=new _t,fd=new U,pd=new at,An=new Ac,lg=new U,Oc=new yn,kc=new pi,Oi=new _t,ki,br;function cg(n,e,t){return Oi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Oi.multiplyScalar(1/Oi.w),Oi.x=br/t.width,Oi.y=br/t.height,Oi.applyMatrix4(n.projectionMatrixInverse),Oi.multiplyScalar(1/Oi.w),Math.abs(Math.max(Oi.x,Oi.y))}function ZM(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){An.start.fromBufferAttribute(s,o),An.end.fromBufferAttribute(r,o),An.applyMatrix4(t);let c=new U,h=new U;ki.distanceSqToSegment(An.start,An.end,h,c),h.distanceTo(c)<br*.5&&e.push({point:h,pointOnLine:c,distance:ki.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function JM(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;ki.at(1,Ui),Ui.w=1,Ui.applyMatrix4(e.matrixWorldInverse),Ui.applyMatrix4(i),Ui.multiplyScalar(1/Ui.w),Ui.x*=r.x/2,Ui.y*=r.y/2,Ui.z=0,fd.copy(Ui),pd.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if(En.fromBufferAttribute(l,d),Tn.fromBufferAttribute(c,d),En.w=1,Tn.w=1,En.applyMatrix4(pd),Tn.applyMatrix4(pd),En.z>u&&Tn.z>u)continue;if(En.z>u){let b=En.z-Tn.z,I=(En.z-u)/b;En.lerp(Tn,I)}else if(Tn.z>u){let b=Tn.z-En.z,I=(Tn.z-u)/b;Tn.lerp(En,I)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=r.x/2,En.y*=r.y/2,Tn.x*=r.x/2,Tn.y*=r.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let v=An.closestPointToPointParameter(fd,!0);An.at(v,lg);let m=Hs.lerp(En.z,Tn.z,v),f=m>=-1&&m<=1,S=fd.distanceTo(lg)<br*.5;if(f&&S){An.start.fromBufferAttribute(l,d),An.end.fromBufferAttribute(c,d),An.start.applyMatrix4(a),An.end.applyMatrix4(a);let b=new U,I=new U;ki.distanceSqToSegment(An.start,An.end,I,b),t.push({point:I,pointOnLine:b,distance:ki.origin.distanceTo(I),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var Ea=class extends Bt{constructor(e=new Vs,t=new fs({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)ag.fromBufferAttribute(t,a),og.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ag.distanceTo(og);let r=new _r(s,2,1);return e.setAttribute("instanceDistanceStart",new mi(r,1,0)),e.setAttribute("instanceDistanceEnd",new mi(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ki=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;br=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),kc.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=br*.5;else{let u=Math.max(s.near,kc.distanceToPoint(ki.origin));c=cg(s,u,l.resolution)}if(kc.radius+=c,ki.intersectsSphere(kc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Oc.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=br*.5;else{let u=Math.max(s.near,Oc.distanceToPoint(ki.origin));h=cg(s,u,l.resolution)}Oc.expandByScalar(h),ki.intersectsBox(Oc)!==!1&&(i?ZM(this,t):JM(this,s,t))}};var KM="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",Eo=null;function QM(){if(Eo)return Eo;Eo=new Map;for(let n of KM.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,a]=i.split(" ");Eo.set(t?t+"/"+s:s,[+r,+a])}}return Eo}var Mr=Math.PI/180;function ew(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*Mr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*Mr,a=(23.439-36e-8*i)*Mr,o=Math.atan2(Math.cos(a)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(a)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*Mr+t*Mr-o,u=e*Mr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/Mr}function tw(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=QM().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function hg(n=Date.now(),e=tw()){if(e.lat==null){let r=new Date(n),a=r.getHours()+r.getMinutes()/60,o=a>=7&&a<20,l=new Date(n);return l.setHours(o?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:o,next:+l}}let t=r=>ew(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let a=r-s,o=r;for(;o-a>3e4;){let l=(a+o)/2;t(l)===i?a=l:o=l}return{day:i,next:Math.ceil(o)}}return{day:i,next:n+24*36e5}}var ug=(n,e)=>(n&&typeof n=="object"?n[e]||n.en||n.fr||Object.values(n).find(Boolean)||"":String(n||"")).trim();var nw={amp:"&",lt:"<",gt:">",quot:'"',"#39":"'",nbsp:" ",rsquo:"\u2019",lsquo:"\u2018",laquo:"\xAB",raquo:"\xBB"},dg=n=>String(n||"").replace(/<\/(p|li|h3)>|<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&(#?\w+);/g,(e,t)=>nw[t]??e).split(`
`).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean);var iw=["core","artists","specialists","team","people"];function md(n,e){let t=(n.sections||[]).find(s=>s.id===e.section&&s.visible!==!1);if(!t||e.published===!1)return!1;let i=(e.tags||[]).some(s=>iw.includes(s));return t.card==="portrait"?i&&(dg(ug(e.body,"en")).join(" ")+dg(ug(e.body,"fr")).join(" ")).length>40:!0}var ai=["en","fr","ca","es"];var sw={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function yg(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of sw[e]||ai)if(n[t])return n[t];return""}var wr={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",hv_words:"Type something",hv_turn:"Turn your phone to see the whole video",overview:"Overview",ov_n:"projects",nProjects:"projects",nextProject:"Next project",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Settings",hv_slides:"Slideshow",hv_private:"Camera: nothing is recorded.",hv_consent:"This video is just for you. Nothing is recorded, nothing is sent.",hv_camYes:"Turn on the camera",cancel:"Cancel",stop:"Stop",params:"Settings",hv_source:"Source",hv_cell:"Grid",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site",c_write:"Write",c_call:"Call",c_addr:"Address",c_follow:"Follow"},fr:{category:"Cat\xE9gorie",together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",hv_words:"Type something",hv_turn:"Tourne ton t\xE9l\xE9phone pour voir la vid\xE9o en entier",overview:"Vue d\u2019ensemble",ov_n:"r\xE9alisations",nProjects:"projets",nextProject:"Projet suivant",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"Param\xE8tres",hv_slides:"Diaporama",hv_private:"Cam\xE9ra : rien n\u2019est enregistr\xE9.",hv_consent:"Cette vid\xE9o est juste pour toi. Rien n\u2019est enregistr\xE9, rien n\u2019est envoy\xE9.",hv_camYes:"Allumer la cam\xE9ra",cancel:"Annuler",stop:"Arr\xEAter",params:"Param\xE8tres",hv_source:"Source",hv_cell:"Grille",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site",c_write:"\xC9crire",c_call:"Appeler",c_addr:"Adresse",c_follow:"Suivre"},ca:{category:"Categoria",together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",hv_words:"Type something",hv_turn:"Gira el m\xF2bil per veure el v\xEDdeo sencer",overview:"Visi\xF3 de conjunt",ov_n:"projectes",nProjects:"projectes",nextProject:"Projecte seg\xFCent",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Par\xE0metres",hv_slides:"Diapositives",hv_private:"C\xE0mera: no es grava res.",hv_consent:"Aquest v\xEDdeo \xE9s nom\xE9s per a tu. No es grava res, no s\u2019envia res.",hv_camYes:"Enc\xE9n la c\xE0mera",cancel:"Cancel\xB7la",stop:"Atura",params:"Par\xE0metres",hv_source:"Font",hv_cell:"Graella",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web",c_write:"Escriu",c_call:"Truca",c_addr:"Adre\xE7a",c_follow:"Segueix"},es:{category:"Categor\xEDa",together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",hv_words:"Type something",hv_turn:"Gira el m\xF3vil para ver el v\xEDdeo entero",overview:"Vista general",ov_n:"proyectos",nProjects:"proyectos",nextProject:"Proyecto siguiente",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Par\xE1metros",hv_slides:"Diapositivas",hv_private:"C\xE1mara: no se graba nada.",hv_consent:"Este v\xEDdeo es solo para ti. No se graba nada, no se env\xEDa nada.",hv_camYes:"Encender la c\xE1mara",cancel:"Cancelar",stop:"Detener",params:"Par\xE1metros",hv_source:"Fuente",hv_cell:"Cuadr\xEDcula",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web",c_write:"Escribe",c_call:"Llama",c_addr:"Direcci\xF3n",c_follow:"Sigue"}},rw={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Ao={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function gd(){return Object.fromEntries(ai.map(n=>[n,""]))}function Gs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:ai.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||gd(),e.sub=e.sub||gd(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.intro&&typeof e.intro=="object"&&Object.entries(e.intro).forEach(([s,r])=>{String(r||"").trim()&&(e.sub[s]=r)}),delete e.intro,e.quotes=e.quotes&&typeof e.quotes=="object"?e.quotes:gd();let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(ai.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(ai.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=rw[s.layout]?s.layout:"carousel",s.card=Ao[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(ai.map(a=>[a,s[r]||""]))),ai.forEach(a=>{s[r][a]==null&&(s[r][a]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(ai.map(a=>[a,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(vd):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function yd(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function vg(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function Co(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function xe(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var aw=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Sr(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!aw.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Er(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var vd=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Ws(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function xd(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function fg(n){try{let e=await xd();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function pg(n,e){let t=await xd();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function mg(n){try{let e=await xd();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Bc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Gs(structuredClone(window.HC_CONTENT));if(window.HC_CONTENT_P&&!this.base){let t=await window.HC_CONTENT_P;if(window.HC_CONTENT_P=null,t)return Gs(t)}let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Gs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Fc=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await fg("demo:content:v6");if(e)return Gs(e);if(window.HC_CONTENT)return Gs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Gs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await mg("demo:file:"+i.path);continue}await pg("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await pg("demo:content:v6",e),"demo"}async reset(){await mg("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await fg("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},gg=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],To=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],ow=["font","size","lh","weight","italic","ls","upper"],xg=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function lw(n){let e=gg.find(i=>i.id===n);if(e)return e.css;let t=xg(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:gg[0].css}function Qn(n,e){let t=To.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...ow,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=lw(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function _g(n){let e=[],t=[],i=[],s=[];for(let r of To){if(r.vars||!r.sel)continue;let a=Qn(n,r.id),o=r.id;s.push(`--f-${o}: ${a.css}`,`--w-${o}: ${a.weight||400}`,`--st-${o}: ${a.italic?"italic":"normal"}`,`--tt-${o}: ${a.upper?"uppercase":"none"}`,`--ls-${o}: ${a.ls||0}em`),a.size&&s.push(`--s-${o}: ${a.size}px`,`--lh-${o}: ${a.lh?a.lh:+(a.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of To){let a=n&&n.typo&&n.typo[r.id]||{},o=Qn(n,r.id),l=h=>a[h]!==void 0&&a[h]!==""&&a[h]!==null&&a[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${o.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${o.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(o.size*r.clamp[0])}px, ${(o.size/r.clamp[1]*100).toFixed(2)}vw, ${o.size}px)`:`font-size: ${o.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?o.lh:+(r.lh*o.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${o.weight}`),l("italic")&&c.push(`font-style: ${o.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${o.ls}em`),l("upper")&&c.push(`text-transform: ${o.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?o.lh:r.lh*o.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function bg(n){let e=new Map;for(let t of To){let i=Qn(n,t.id),s=xg(i.font);if(!s)continue;new Set([+(i.weight||400),400,700,...t.id==="body"?[800]:[]]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function _d(n){let e=new Set;for(let t of To){let i=Qn(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Mg(n,e,t=!1){let i=Qn(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let a=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let o=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=o(l);let c=r.measureText(a).width;c>172&&(l=Math.floor(l*172/c),r.font=o(l));let h=r.measureText(a),u=(h.actualBoundingBoxAscent||l*.7)-(h.actualBoundingBoxDescent||0);if(r.fillText(a,120+((h.actualBoundingBoxLeft??h.width/2)-(h.actualBoundingBoxRight??h.width/2))/2,120+u/2-4),t){let d=r.getImageData(0,0,240,240),p=d.data;for(let g=0;g<p.length;g+=4)p[g]=255-p[g],p[g+1]=255-p[g+1],p[g+2]=255-p[g+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var wg=window.HC_BASE||"",Zc=window.HC_MODE==="demo"?new Fc(wg):new Bc(wg),Ys=window.HC_ASSETS||null,df=location.protocol==="file:",v0=(()=>{let n=document.querySelector("base"),e=n?document.baseURI:new URL("./",location.href).href;if(!df&&(window.HC_ROUTE||{}).pages)if(n)n.href=e;else{let t=document.createElement("base");t.href=e,document.head.prepend(t)}return new URL(e)})(),x0=20261102;window.HC_SITE_VERSION=x0;var St=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,bt=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return St&&St.files&&St.files[e]?St.files[e]:Ys&&Ys[e]&&Ys[e].startsWith("data:")?Ys[e]:Zc.url(e)};async function cw(n){if(Ys&&Ys[n]&&!Ys[n].startsWith("data:"))return Ys[n];let e=await fetch(bt(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var ve=null,xn="en",he=n=>yg(n,xn),_e=n=>(wr[xn]||wr.en)[n],_0=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},er={zoom:2,focus:300},hw=.08,Sg={};function b0(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=Sg[t]}):(e.forEach(t=>{Sg[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Hd=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=yd(ve,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(s=>s.tags)),t=this.section.tags.filter(s=>e.has(s.id)&&s.menu!==!1),i={id:"",label:Object.fromEntries(ai.map(s=>[s,(wr[s]||wr.en).all]))};return this.section.noAll&&t.length?t:[i,...t]}tagOf(e){let t=this.categoryList;return e.tags.find(i=>t.some(s=>s.id===i))||(t[0]?t[0].id:"")}changeCategory(e){let t=this.categoryList;t.some(i=>i.id===e)||(e=t.some(i=>i.id===this.defaultCategory)?this.defaultCategory:t[0]?t[0].id:""),this.category=e,this.list=e?this.all.filter(i=>i.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?he(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},V={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Dt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Hd(this.section.def)}},Dt=[],yt={x:0,y:0,z:0,zoom:er.zoom},zn={x:0,y:0,z:0},ys=0,Ti=[],uw={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function hn(n,e,t,i={}){for(let r of Ti)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ys+(i.delay||0),ease:uw[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return Ti.push(s),s}var Go=(n,e)=>hn({},n,{},{onComplete:e,ease:"linear"});function Cn(n){for(let e=Ti.length-1;e>=0;e--)Ti[e].obj===n&&Ti.splice(e,1)}function Ba(n){return Ti.some(e=>e.obj===n&&ys>=e.start)}function M0(n,e){if(!e&&ys<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ys-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function dw(){for(let n of Ti.slice())if(M0(n,!1)){let e=Ti.indexOf(n);e>=0&&Ti.splice(e,1),n.onComplete&&n.onComplete()}}function w0(){Ti.splice(0).forEach(n=>M0(n,!0))}function fw(n,e,t,i,s,r,a){Cn(yt),hn(yt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),ff(i,s,r,a)}function ff(n,e,t,i){Cn(zn),hn(zn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function pw(n,e,t,i){Cn(yt),hn(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var Wo=1,vn=n=>n<=1?1:1-Math.pow(1-1/n,Wo),Vi=Math.PI/180,Vd=(n,e,t)=>new U(n,e,-t),$s=(n,e,t)=>[-n,e,t],nn=document.getElementById("stage");nn&&nn.parentNode===document.body&&document.documentElement.insertBefore(nn,document.body);["home","hc-intro"].forEach(n=>{let e=document.getElementById(n);e&&e.parentNode===document.body&&document.documentElement.appendChild(e)});var Rn=new mo({canvas:nn,antialias:(window.devicePixelRatio||1)<1.75,powerPreference:"high-performance"});Rn.debug.checkShaderErrors=!1;var pf=new hs,mw=new Bs(-1,1,1,-1,0,1);pf.add(new Bt(new Ni(2,2),new tn({color:16777215,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:id,blendEquation:Ri,blendSrc:rd,blendDst:Cc,blendEquationAlpha:Ri,blendSrcAlpha:Cc,blendDstAlpha:sd})));pf.children[0].frustumCulled=!1;var S0=null,Aa=null;function Ko(){if(Aa===null&&(Aa=_n),Rn.render(ti,Ln),Aa){let n=Rn.autoClear;Rn.autoClear=!1,Rn.render(pf,mw),Rn.autoClear=n}S0=Aa}var bd=0;async function E0(){let n=++bd;if(Ie)try{await Ie.retexture(()=>n===bd)}catch{}if(n!==bd)return;let e=document.documentElement;e.classList.add("neg-switch"),Rf(),Aa=_n;try{Ko()}catch{}requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.remove("neg-switch")))}var $o=Math.min(window.devicePixelRatio||1,2),Eg=Math.min($o,$o>=2?1.25:1),Cr=$o,Jc=0,Gd=0,T0=0;Rn.setPixelRatio(Cr);function Tg(n,e){Cr=n,Rn.setPixelRatio(Cr),Rn.setSize(zt,Ut,!1),Jc=Gd=0,T0=e;try{Ko()}catch{}}function gw(n,e){n-T0<1500||(e>30?(Gd=0,++Jc>24&&Cr>Eg&&Tg(Math.max(Eg,Math.round((Cr-.25)*4)/4),n)):e<19&&(Jc=Math.max(0,Jc-1),++Gd>240&&Cr<$o&&Tg(Math.min($o,Cr+.25),n)))}var Ag=".t.webp",mf=n=>n&&!df&&!yw()&&!/^(https?:|data:|blob:)/.test(n)&&/^media\/.+\.(jpe?g|png|webp)$/i.test(n)&&!n.endsWith(Ag)?n+Ag:n;function yw(){return!!(window.HC_PREVIEW||/[?&]preview\b/.test(location.search))}document.addEventListener("error",n=>{let e=n.target;e&&e.tagName==="IMG"&&e.dataset.full&&!e.dataset.fell&&(e.dataset.fell="1",e.src=e.dataset.full)},!0);var Pr=(n,e="")=>{let t=mf(n);return`<img src="${xe(bt(t))}"${t!==n?` data-full="${xe(bt(n))}"`:""} ${e}>`};Rn.setClearColor(16777215,1);var ti=new hs;ti.add(new _c(16777215,14211288,2.2));var A0=new wa(16777215,1.2);A0.position.set(300,800,500);ti.add(A0);var Ln=new on(60,1,1,6e4),C0=new fs({color:oe.lineColor,linewidth:oe.lineThickness}),Wd=new fs({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),R0=new fs({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),Kc=new fs({color:oe.locatorColor,linewidth:1.3}),gf=[C0,Wd,R0,Kc],L0=new bo;L0.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:bt(n));var Ia=new Map;function Md(n){return Ia.has(n)||Ia.set(n,new Promise((e,t)=>{let i=new Image;i.decoding="async",/^https?:/.test(bt(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=bt(n)})),Ia.get(n)}function Yi(n,e=!1){if(!n)return Promise.reject(new Error("no image"));if(df&&!/^(data:|blob:|https?:)/.test(bt(n)))return Promise.reject(new Error("local"));let t=e?n:mf(n);if(t===n)return Md(n);let i="tn:"+n;return Ia.has(i)||Ia.set(i,Md(t).catch(()=>Md(n))),Ia.get(i)}function yf(n){return n.colorSpace=jt,n.anisotropy=Math.min(8,Rn.capabilities.getMaxAnisotropy()),n}var $d=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=yf(new _a(n)),t=new Ni(1,1),i=new hs;return[Zn,gn,Xn].forEach(s=>i.add(new Bt(t,new tn({map:e,side:s})))),i.add(new Bt(t,new tn({color:1118481}))),i.add(new go(new va({map:e,transparent:!0}))),i})(),zt=0,Ut=0,_n=!1,rh=()=>_n,Ir=0,Cg=0,qo=()=>ve.settings.negative==="auto";function xh(){if(!qo())return Ir=0,!!ve.settings.negative;let n=hg();return Ir=n.next,!n.day}function vf(){if(St||ve.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!qo()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function P0(n){n!==_n&&(_n=n,E0())}function xf(){if(clearTimeout(Cg),!qo())return;Cg=setTimeout(()=>{if(Date.now()>=Ir-1e3){let e=xh(),t=vf();P0(t??e)}xf()},Math.min(Math.max(Ir-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&Ir&&Date.now()>=Ir){let n=xh(),e=vf();P0(e??n),xf()}});var I0=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},oi=()=>{let n=ve.settings.accent||"#ffcc00";return rh()?I0(n):n},_h='Georgia, Gelasio, "Times New Roman", serif',Qt='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',N0=400,D0=_h,U0=!1,O0=1,vi=n=>`${N0} ${n}px ${_h}`,Gi=n=>`${U0?"italic ":""}400 ${Math.round(n*O0*10)/10}px ${D0}`,_f=1,Qe=n=>Math.round(n*_f),vw=700,bh=()=>{let n=zt||window.innerWidth,e=Ut||window.innerHeight;return n<vw||Math.min(n,e)<500},xs=bh;function sr(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...ve?_d(ve.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Rg=0,k0=[];function xw(){Mt&&(Tf(),Ef()),clearTimeout(Rg),Rg=setTimeout(async()=>{try{await Promise.all(_d(ve.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}ve.settings.logo||Jd(),Ie&&!Ie.loading&&Ie.retexture()},150)}function B0(){let n=ve.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=_g(n);e.textContent!==t&&(e.textContent=t);let i=bg(n);document.querySelectorAll("link[data-hc-font]").forEach(a=>{i.includes(a.href)||a.remove()}),i.forEach(a=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(a)}"]`)){let o=document.createElement("link");o.rel="stylesheet",o.href=a,o.dataset.hcFont="",k0.push(new Promise(l=>{o.onload=()=>{l(),xw()},o.onerror=l})),document.head.appendChild(o)}});let s=Qn(n,"card"),r=Qn(n,"subtitle");N0=s.weight||400,D0=r.css,U0=!!r.italic,O0=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,_h=s.css,Qt=Qn(n,"cardsm").css,_f=Math.max(.5,Math.min(2,(+Qn(n,"card").scale||100)/100))}function Jt(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function Hn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),yf(new _a(s))}function Wi(n,e,t,i=2){return Hn(n,e,s=>{let r=_n;_n=!1;try{t(s)}finally{_n=r}if(!r)return;let a=s.canvas;try{let o=s.getImageData(0,0,a.width,a.height),l=o.data;for(let c=0;c<l.length;c+=4)l[c]=255-l[c],l[c+1]=255-l[c+1],l[c+2]=255-l[c+2];s.putImageData(o,0,0)}catch{s.save(),s.setTransform(1,0,0,1,0,0),s.globalCompositeOperation="difference",s.fillStyle="#fff",s.fillRect(0,0,a.width,a.height),s.restore()}},i)}function $i(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,l=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-l)/2,o,l,t,i,s,r),rh()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Na=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function F0(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function Fa(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Qo=n=>Dt.some(e=>e.def.id===n.section),_w=(n,e)=>Dt.findIndex(t=>t.def.id===n.section)-Dt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),ah=n=>ve.posts.filter(e=>e.published&&e!==n&&Qo(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(_w),Xo=n=>{let e=Co(ve,n).filter(Qo);return e.length?e:ah(n)},bw=["core","artists","specialists","team","people"],Oo=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.section==="studio"||(n.tags||[]).includes("partners"))&&(n.tags||[]).length>0&&!(n.tags||[]).some(e=>bw.includes(e)),z0=n=>vg(ve,n).filter(Qo),Zs=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&Dr(e.src)==="image")||{}).src||"",Lg=new Map,qd=n=>ah(n).filter(Zs);async function Mh(n,e=Xo(n)){let t=e.filter(Zs);if(!t.length)return null;let i=t.find(r=>r.id===Lg.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,a)=>r[0]-a[0]).map(r=>r[1]);for(let r of s){let a=await Yi(Zs(r)).catch(()=>null);if(a)return Lg.set(n.id,r.id),{im:a,project:r}}return null}function wh(n,e,t,i,s){$i(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function H0(n,e){let t=he(n.title).trim(),i=he(n.subtitle).trim();if(!t&&!i)return null;let s=xs(),r=s?15:Math.max(9,Math.min(13.5,e*.053)),a=s?11:Math.max(7.5,r*.74),o=Math.round(r*(s?.55:.75)),l=e-2*o,c=document.createElement("canvas").getContext("2d"),h=(f,S)=>{c.font=S;let b=f;if(c.measureText(b).width<=l)return[b];for(;b.length>4&&c.measureText(b+"\u2026").width>l;)b=b.slice(0,-1);return[b.trim()+"\u2026"]};c.font=vi(r);let u=s?t?h(t,vi(r)):[]:t?Jt(c,t,l).slice(0,2):[];c.font=Gi(a);let d=s?t?[]:h(i,Gi(a)):i?Jt(c,i,l).slice(0,2):[],p=Math.round(r*1.2),g=Math.round(a*1.25),v=Math.ceil(o+u.length*p+(d.length?3+d.length*g:0)+o-2);return{tex:Wi(e,v,f=>{f.fillStyle="rgba(0,0,0,.62)",f.fillRect(0,0,e,v),f.textBaseline="top";let S=o;f.fillStyle="#fff",f.font=vi(r),u.forEach(b=>{f.fillText(b,o,S),S+=p}),S+=3,f.font=Gi(a),d.forEach(b=>{f.fillText(b,o,S),S+=g})},3),bh:v,w:e}}async function Mw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Yi(n.thumbBack).catch(()=>null):null,r=i?null:await Mh(n);await sr();let a=(c,h=!1)=>{if(i){$i(c,i,0,0,e,t);return}r?wh(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=xs(),d=u?14:16,p=u?[Qe(31),Qe(34),2]:[Qe(24),28,3],g=u?[Qe(20),Qe(23),1]:[Qe(13),16,2],v=u?Qe(15):10,m=u?Qe(13):9,f=u?26:20;c.fillStyle=oi(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=vi(p[0]);let S=Jt(c,he(n.title),e-2*d).slice(0,p[2]),b=u?22:30;S.forEach((L,C)=>c.fillText(L,d,b+C*p[1])),c.font=Gi(g[0]),Jt(c,he(n.subtitle),e-2*d).slice(0,u&&S.length<2?2:g[2]).forEach((L,C)=>c.fillText(L,d,b+8+S.length*p[1]+C*g[1]));let I=r?Wg(r.project,r.project.media[0]&&r.project.media[0].credit):Wg(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${v}px ${Qt}`,c.fillText([n.date,he(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(I?f+v+6:v+12)),I){c.font=`${m}px ${Qt}`;let L=I;for(;c.measureText(L).width>e-2*d&&L.length>4;)L=L.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(L,d,t-f/2)}c.globalAlpha=1},o=(r?Wi:Hn)(e,t,a,2),l=s?Hn(e,t,c=>$i(c,s,0,0,e,t),2):r?Wi(e,t,Fa(e,c=>a(c,!0)),2):Hn(e,t,F0(a),1.5);return[o,l,i?H0(n,e):null]}async function ww(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Yi(n.thumbBack).catch(()=>null):null,r=i||Oo(n)?null:await Mh(n,qd(n));await sr();let a=(l,c=!1)=>{if(Oo(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=xs()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${Qt}`;let v=Jt(l,he(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((m,f)=>l.fillText(m,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),rh()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,p=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-p)/2,d,p),rh()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){$i(l,i,0,0,e,t);return}r?wh(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=Gi(Math.round(t*.42*_f)),l.textAlign="center",l.textBaseline="middle",l.fillText(Na(he(n.title)),e/2,t*.45),l.fillStyle=oi(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},o=s?Hn(e,t,l=>$i(l,s,0,0,e,t),3):r?Wi(e,t,Fa(e,l=>a(l,!0)),2):Hn(e,t,F0(a),2);return[(r?Wi:Hn)(e,t,a,3),o,i||r||Oo(n)?H0(n,e):null]}async function Sw(n,e,t){let i=await Mh(n);if(i)return Ew(n,e,t,i);let s=n.thumb?await Yi(n.thumb).catch(()=>null):null;await sr();let r=he(n.title).trim(),a=xs(),o=Qe(a?30:21),l=a?Qe(32):22,c=a?2:3,h=s?72:18,u=e-h-14,d=Hn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?$i(g,s,13,12.75,53,53):(g.fillStyle=oi(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=vi(o),g.textBaseline="top",Jt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?12:20)+m*l))}),p=Hn(e,t,Fa(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=vi(o),g.textBaseline="top",Jt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?9:17)+m*l))}));return[d,p]}async function Ew(n,e,t,i){await sr();let s=he(n.title).trim(),r=e-32,a=xs(),o=Qe(a?30:21),l=a?Qe(32):22,c=h=>u=>{wh(u,i,e,t,h?.2:a?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=oi(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=vi(o),u.textBaseline="top",Jt(u,s,r).slice(0,a?2:3).forEach((d,p)=>u.fillText(d,18,20+p*l)),u.globalAlpha=1};return[Wi(e,t,c(!1),2),Wi(e,t,Fa(e,c(!0)),2)]}async function Tw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null;await sr();let r=Hn(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),$i(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=oi(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${Qe(12)}px ${_h}`,a.textAlign="center",a.textBaseline="top",a.fillText(he(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var Aw={image:Mw,portrait:ww,text:Sw,place:Tw};async function Cw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=i?{im:i}:await Mh(n);await sr();let r=he(n.title).trim(),a=(he(n.subtitle).trim()||Er(he(n.body)).join(" ")).replace(/\s+/g," ").trim(),o=t<110,l=xs(),c=s&&!l?Math.round(o?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,p,g,v]=l?o?[28,31,0,1]:[36,40,0,1]:o?[15,18,9.5,12]:[17,20,10.5,13.5],m=(L,C)=>{L.globalAlpha=C,L.textBaseline="top";let N=e-h-12;L.fillStyle=oi(),L.fillRect(h,o?9:13,14,2),L.fillStyle="#fff",L.font=vi(Qe(d));let H=o?16:22;Jt(L,r,N).slice(0,l?3:2).forEach(M=>{L.fillText(M,h,H),H+=Qe(p)}),L.globalAlpha=1},f=L=>{L.fillStyle="#111",L.fillRect(0,0,e,t),s&&($i(L,s.im,0,0,e,t),L.fillStyle="rgba(0,0,0,.18)",L.fillRect(0,0,e,t)),m(L,.38)},S=L=>{let C=L.createLinearGradient(0,0,0,t);C.addColorStop(0,"rgba(0,0,0,.7)"),C.addColorStop(1,"rgba(0,0,0,.3)"),L.fillStyle=C,L.fillRect(0,0,e,t),m(L,1)},b=L=>{L.fillStyle="#111",L.fillRect(0,0,e,t),s&&($i(L,s.im,0,0,e,t),L.fillStyle="rgba(0,0,0,.22)",L.fillRect(0,0,e,t));let C=L.createLinearGradient(0,t*.3,0,t);C.addColorStop(0,"rgba(0,0,0,0)"),C.addColorStop(1,"rgba(0,0,0,.82)"),L.fillStyle=C,L.fillRect(0,t*.3,e,t*.7);let N=Math.round(e*.07),H=e-2*N,M=Xo(n).length;L.textBaseline="top",L.fillStyle="#fff",M&&(L.font=`600 ${Qe(11)}px ${Qt}`,L.fillText(`${M} ${_e("nProjects")}`.toUpperCase(),N,N));let w=he(n.subtitle).trim();L.font=`${Qe(11.5)}px ${Qt}`;let F=w?Jt(L,w,H).slice(0,2):[],ie=t-N-F.length*Qe(14);F.forEach((k,G)=>L.fillText(k,N,ie+G*Qe(14))),L.font=Gi(Qe(26));let ce=Jt(L,r,H).slice(0,2);ie-=(F.length?Qe(6):0)+ce.length*Qe(25),ce.forEach((k,G)=>L.fillText(k,N,ie+G*Qe(25)))};return[(s?Wi:Hn)(e,t,(L=>C=>{if(l&&!L){b(C);return}C.fillStyle="#111",C.fillRect(0,0,e,t),s&&l&&!L&&wh(C,s,e,t,.6),s&&!l&&$i(C,s.im,e-c,0,c,t),C.textBaseline="top",C.fillStyle=oi(),C.fillRect(h,o?9:13,14,2),C.fillStyle="#fff",C.font=vi(Qe(d));let N=Jt(C,r,u).slice(0,l?3:2),H=o?16:22;N.forEach(F=>{C.fillText(F,h,H),H+=Qe(p)}),H+=o?2:5,C.font=Gi(Qe(g));let M=l?0:Math.max(0,Math.floor((t-H-8)/Qe(v))),w=Jt(C,a,u);if(w.length>M&&(w=w.slice(0,M),M)){let F=w[M-1];for(;F&&C.measureText(F+"\u2026").width>u;)F=F.replace(/\s*\S+$/,"");w[M-1]=F+"\u2026"}w.forEach(F=>{C.fillText(F,h,H),H+=Qe(v)}),C.globalAlpha=1})(!1),2),(s?Wi:Hn)(e,t,Fa(e,f),2),null,(s?Wi:Hn)(e,t,Fa(e,S),2)]}function zc(n,e){return sr().then(()=>e==="place"?Hn(380,300,t=>{let r=ay(Sr(he(n.body))),a=(c,h)=>{t.font=h;let u=c;for(;u&&t.measureText(u).width>320;)u=u.slice(0,-2).trim()+"\u2026";return u};t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle=oi(),t.fillRect(30,24,16,2);let o=he(n.title).trim();o&&!/[.!?]$/.test(o)&&(o+="."),t.fillStyle="#fff",t.font=vi(Qe(40));let l=36;if(Jt(t,o,320).slice(0,1).forEach(c=>{t.fillText(c,30,l),l+=Qe(44)}),t.font=Gi(Qe(17)),Jt(t,he(n.subtitle),320).slice(0,2).forEach(c=>{t.fillText(c,30,l),l+=Qe(21)}),l=Math.max(l+16,150),!r.ok){t.font=`13px ${Qt}`,Er(he(n.body)).slice(0,5).forEach(c=>{t.fillText(a(c,`13px ${Qt}`),30,l),l+=19});return}r.mail[0]&&(t.fillStyle=oi(),t.fillText(a(r.mail[0],`600 16px ${Qt}`),30,l),l+=24),t.fillStyle="#fff",r.tel[0]&&(t.fillText(a(r.tel[0],`15px ${Qt}`),30,l),l+=26),t.fillStyle="rgba(255,255,255,.62)",(r.addr[0]||"").split(/\s+[.·•|]\s+/).slice(0,3).forEach(c=>{l<282&&(t.fillText(a(c,`12.5px ${Qt}`),30,l),l+=17)})},1.5):xs()?Hn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=vi(Qe(25));let i=Jt(t,he(n.title)+".",172).slice(0,2);i.forEach((d,p)=>t.fillText(d,14,12+p*Qe(27))),t.font=`${Qe(13)}px ${Qt}`;let s=ah(n).map(d=>he(d.title).trim()).filter(Boolean),r=s.length?Jt(t,s.join("  \xB7  "),172).slice(0,2):[],a=he(n.place)?168:188,o=a-r.length*16-16,l=18+i.length*Qe(27);t.font=Gi(Qe(17));let c=(r.length?o-6:a)-Qe(20),h=Jt(t,he(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=Qe(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,p)=>t.fillText(d,14,18+i.length*Qe(27)+p*Qe(20))),r.length&&(t.font=`600 ${Qe(11)}px ${Qt}`,t.fillText(_e("together").toUpperCase(),14,o),t.font=`${Qe(13)}px ${Qt}`,r.forEach((d,p)=>t.fillText(d,14,o+16+p*16))),he(n.place)&&(t.font=`600 ${Qe(13)}px ${Qt}`,t.fillText(he(n.place).toUpperCase(),14,176))},2.5):Hn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=vi(Qe(20));let i=Jt(t,he(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${Qt}`;let r=ah(n).map(u=>he(u.title).trim()).filter(Boolean),a=r.length?Jt(t,r.join("  \xB7  "),166).slice(0,3):[],o=(he(n.place)?174:188)-a.length*13-13;t.font=Gi(Qe(15));let l=(a.length?o-4:168)-18,c=[];he(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>Jt(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${Qt}`,Er(he(n.body)).join(" ").split(/\s+/).length>1&&Jt(t,Er(he(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((a.length?o-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),a.length&&(t.font=`600 8px ${Qt}`,t.fillText(_e("together").toUpperCase(),19,o),t.font=`10px ${Qt}`,a.forEach((u,d)=>t.fillText(u,19,o+13+d*13))),he(n.place)&&(t.font=`600 11px ${Qt}`,t.fillText(he(n.place).toUpperCase(),19,180))}))}function Rw(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${Qt}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${Qt}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let l=new go(new va({map:yf(new _a(s)),transparent:!0,depthTest:!1}));l.center.set(.5,0);let c=20;return l.scale.set(c*a/o,c,1),l.renderOrder=5,l}var zi=document.createElement("div");zi.id="net-tip";zi.className="ui";zi.hidden=!0;document.body.appendChild(zi);function V0(n,e,t){zi.innerHTML=`<b>${xe(n.city||"")}</b>${n.titles.map(s=>`<span>${xe(s)}</span>`).join("")}`,zi.hidden=!1;let i=zi.getBoundingClientRect();zi.style.left=Math.min(e+14,zt-i.width-10)+"px",zi.style.top=Math.max(10,t-i.height-12)+"px"}function Sh(){zi.hidden=!0}function Lw(n){n.updateMatrixWorld(!0);let e=[],t=new U,i=n.matrixWorld.clone().invert();if(n.traverse(h=>{if(!h.isMesh||!h.geometry||!h.geometry.attributes.position)return;let u=h.geometry;u.computeBoundingBox();let d=u.boundingBox.getSize(new U);if(Math.min(d.x,d.y,d.z)<1e-6*Math.max(d.x,d.y,d.z,1e-9))return;let p=u.attributes.position,g=u.index,v=g?g.count:p.count,m=new Map,f=Math.max(d.x,d.y,d.z)/2e3;for(let b=0;b<v;b++){let I=g?g.getX(b):b,L=Math.round(p.getX(I)/f)+","+Math.round(p.getY(I)/f)+","+Math.round(p.getZ(I)/f),C=m.get(L);C||m.set(L,C={j:I,n:0}),C.n++}let S=new at().multiplyMatrices(i,h.matrixWorld);m.forEach(b=>{t.fromBufferAttribute(p,b.j).applyMatrix4(S),e.push({p:t.clone(),n:b.n})})}),!e.length)return null;let s=Math.max(...e.map(h=>h.n));if(s<8)return null;let r=new yn;e.forEach(h=>r.expandByPoint(h.p));let a=r.getSize(new U).length()*.09,o=[];e.filter(h=>h.n>=s*.8).forEach(h=>{let u=o.find(d=>d.c.distanceTo(h.p)<a);u||o.push(u={s:new U,w:0,c:h.p.clone()}),u.s.addScaledVector(h.p,h.n),u.w+=h.n,u.c.copy(u.s).divideScalar(u.w)});let l=Math.max(...o.map(h=>h.w)),c=o.filter(h=>h.w>=l*.3).map(h=>h.c);return c.length?c:null}var Xd=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Sn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=ve.models.find(h=>h.id===this.def.model)||ve.models[0];if(!t)return;let i=await cw(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new Sn;o.add(a),a.traverse(h=>{if(!h.isMesh)return;let u=d=>{let p=d.map||d.emissiveMap||null;return p?new tn({map:p}):t.untextured==="white"?new vr({color:15921906}):t.untextured==="black"?new vr({color:2236962}):new tn({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){o.updateMatrixWorld(!0);let h=new yn().setFromObject(o),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;o.scale.setScalar(d),o.updateMatrixWorld(!0);let p=new yn().setFromObject(o),g=p.getCenter(new U);o.position.set(-g.x,-p.min.y,-g.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let h=new yn().setFromObject(o);h.max.y-h.min.y>oe.object3DMaxHeight&&o.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),o.scale.multiplyScalar(l)}let c=new Sn;c.rotation.y=(t.rotationY||0)*Vi,c.add(o),this.container.add(c);try{this.anchors=Lw(this.container)}catch{this.anchors=null}}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Vd(this.p.x,0,this.p.z))}};function G0(n,e){let t=new Vs;t.setPositions(n);let i=new Ea(t,e);return i.computeLineDistances(),i}var Yd=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Sn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Ni(this.width,this.height);if(this.setBand(i),s){let h=new Bt(r,new tn({map:s,side:gn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let a=new Bt(r,new tn({map:e,side:Zn})),o=new Bt(r,new tn({map:t,side:gn}));a.userData={post:this,face:"front"},o.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=G0([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Wd),this.group.add(a,o,this.frame),this.meshes.push(a,o),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...$s(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Vi,t.rotation.x=-e.rotX*Vi,t.rotation.z=e.rotZ*Vi,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&hn(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=R0,Go(.8,()=>{this.frame&&(this.frame.material=Wd)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),hn(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){Cn(this.thumb);let i=_s(),s={x:-i*Math.sin(V.degreeCamera),z:-i*Math.cos(V.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o)||1;return hn(this.thumb,t,{x:s.x+a*e/l,y:r.y,z:s.z+o*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/l,z:o/l}}}moveBack(e=0){Cn(this.thumb);let t=this.p2;hn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){hn(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>hn(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),Cn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Bt(new Ni(t,s),new tn({map:e.tex,transparent:!0,depthWrite:!1,side:Zn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&hn(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,a=r+t*e.bh;i.setY(0,a),i.setY(1,a),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),Cn(this.thumb),this.bhi&&Cn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!gf.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function wd(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Vi;i===0&&(i=2*Math.PI);let s=(i-V.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),V.selected=e,V.cameraY=t.p2.y,V.degreeCamera+=s,t.selectIt(),!0}function Sd(n,e,t){V.degreeCamera%=2*Math.PI,V.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(V.selected=e,V.degreeCamera=Math.PI,i.ready&&(V.cameraY=i.p2.y,i.selectIt(),t(i)))}var Ed=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||Ba(r.thumb))return;let o=r.thumb,l=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+l)*vn(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*vn(2*i))}),oh={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Vi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>wd(n,e),move:(n,e,t,i)=>Ed(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Sd(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>Ed(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,a=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},o=t,l;t+1>s?(o=2*Math.round(i/2)-t-1,l=Math.pow(-1,o)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,d=t+1>s?-1:1,p=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(a(o)),y:u*Math.sin(a(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+p,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{wd(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*vn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Ws(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Eh(n.def);return{x:i[0]+s[0],y:.8*(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Sd(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Ba(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*vn(2*oe.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Vi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>wd(n,e),move:(n,e,t,i)=>Ed(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Sd(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Ba(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}}},Pw=["fan","arc","map"],Pg=n=>bh()&&Pw.includes(n.layout),bf=()=>er.zoom*er.focus*Math.min(1,zt/900);function W0(){let n=r=>{let a=document.getElementById(r);if(!a||a.hidden)return null;let o=a.getBoundingClientRect();return o.width&&o.height?o:null},t={l:12,t:12,r:zt-12,b:Ut-12},i=["slogan","logo","reel-btn","lang-sq","about-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Ut>=zt?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs"),n("reel-btn"),n("lang-sq"),n("about-btn")].filter(Boolean).forEach(r=>{r.left<zt/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>zt/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=zt-12),t.b-t.t<120&&(t.t=12,t.b=Ut-12),t}function Ig(n){let e=W0(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,a=n.h*n.k+oe.planeFrameDistance,o=s?1.5*r+102.5:r,l=s?Math.max(a,130):a,c=Math.round(Math.min(o,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let v=Math.ceil(u/g),m=g*o+(g-1)*c,f=v*l+(v-1)*c,S=Math.min(t/m,i/f);(!h||S>h.sc+1e-9)&&(h={cols:g,rows:v,gw:m,gh:f,sc:S})}let d=n.container.position.y-n.section.container.position.y,p=s?140:40;return{...h,sc:h.sc*.94,uw:o,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-zt/2,fy:(e.t+e.b)/2-Ut/2,zg:200,gy:p+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var Iw=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},Td=2*Math.PI,Mf=n=>n+(((Math.PI-n)%Td+Td+Math.PI)%Td-Math.PI);function Ng(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd&&n.gridLines!==!1?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>Iw(e,i),focus(e,t){let i=e.postViews[t];if(!i||(V.selected=t,V.degreeCamera=Mf(V.degreeCamera),V.cameraY=za(),!i.ready))return;i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70);let s=n.orig||n;s===oh.fan?i.turnAround("x",720):s===oh.arc&&i.turnAround("y",360)},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}function Nw(n,e){let t=Object.create(n),i=[],s=new Map,r=()=>{let a=e.container.position.y-e.section.container.position.y;return e.section.anchors.map(o=>[-o.x,o.y-a,o.z])};return t.orig=n,t.gridLines=!1,t.addedLines=!n.lineEnd,t.lineStart=n.lineStart||((a,o)=>[o.x,o.y-a.height/2,o.z]),t.lineEnd=function(a,o,l){if(i[l]==null){let c=r(),h=[0,1,2].map(v=>c.reduce((m,f)=>m+f[v],0)/c.length),u=v=>{let m=[v[0]-h[0],v[1]-h[1],v[2]-h[2]],f=Math.hypot(...m)||1;return m.map(S=>S/f)},d=u([a.x,a.y,a.z]),p=c.map((v,m)=>{let f=u(v);return[m,f[0]*d[0]+f[1]*d[1]+f[2]*d[2]]}).sort((v,m)=>m[1]-v[1]),g=p.find(([v,m])=>!s.has(v)&&m>p[0][1]-.6);i[l]=(g||p[0])[0],s.set(i[l],l)}return r()[i[l]]},t}var Dg=new U,Ug=new U,jd=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=oh[this.def.layout]||oh.carousel,e.anchors&&(this.def.layout==="carousel"||this.def.layout==="arc"&&this.def.skills)&&(this.base=this.L=Nw(this.base,this)),this.card=this.def.card,this.posts=V.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?Cw:Aw[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?Ao.text.size:Ao.image.size:Ao[this.card].size,this.k=zw(this.def),this.container=new Sn,this.container.position.copy(e.container.position),ti.add(this.container),this.postViews=this.posts.map((t,i)=>new Yd(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.trail=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),Pg(this.def)&&(this.grid=Ig(this),this.L=this.gridL=Ng(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Dt.map(f=>f.def.id)),t=new Map,i=(f,S,b)=>{if(!vd(f))return;let I=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),L=t.get(I);L||t.set(I,L={loc:f,city:f.city||"",titles:[],base:!1}),S&&!L.titles.includes(S)&&L.titles.push(S),b&&(L.base=!0)};if(yd(ve,this.def.id).forEach(f=>i(f.location,he(f.title),!0)),ve.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(S=>i(S,he(f.title)))}),!t.size)return;Kc.color.set(oi());let s=50,r=new Sn,a=[...t.values()],o=a.filter(f=>f.base),l=new pc(1,14,10),c={on:new tn({color:oi()}),base:new tn({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:ys+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},a.forEach(f=>{f.xz=Ws(f.loc)}),a.forEach(f=>{f.from=f.base?null:o.length?o.map(S=>[S,Math.hypot(Ws(S.loc)[0]-f.xz[0],Ws(S.loc)[1]-f.xz[1])]).sort((S,b)=>S[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(Ws(f.from.loc)[0]-f.xz[0],Ws(f.from.loc)[1]-f.xz[1]):0}),a.sort((f,S)=>S.base-f.base||f.d-S.d);let h=70,u=null,d=-1;a.forEach(f=>{let S=a.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);S.length>d&&(d=S.length,u=S)});let p=u.reduce((f,S)=>f+S.xz[0],0)/u.length,g=u.reduce((f,S)=>f+S.xz[1],0)/u.length,v=new Kt;v.position.set(...$s(p,s,g)),r.add(v),this.net.focus=v;let m=[];a.forEach((f,S)=>{let[b,I]=f.xz,L=f.base?0:.15+S*.07,C=new Bt(l,f.base?c.base:c.on);C.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),C.position.set(...$s(b,s,I)),r.add(C),C.userData={netNode:f},this.net.hits.push(C);let N=null,H=0;if(f.from){let[F,ie]=Ws(f.from.loc),ce=s+18+f.d*.32,k=2*ce-s,G=(F+b)/2,z=(ie+I)/2;H=Math.max(12,Math.min(48,Math.round(f.d/6)));let ne=ee=>{let Q=1-ee;return $s(Q*Q*F+2*Q*ee*G+ee*ee*b,Q*Q*s+2*Q*ee*k+ee*ee*s,Q*Q*ie+2*Q*ee*z+ee*ee*I)},X=[];for(let ee=0;ee<H;ee++)X.push(...ne(ee/H),...ne((ee+1)/H));let $=new Vs;$.setPositions(X),N=new Ea($,Kc),N.computeLineDistances(),$.instanceCount=0,r.add(N)}let M=null,w=1/0;if(f.city){let F=Rw(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),ie=F.scale.x;for(let ce of m){let k=Math.max(Math.abs(ce[0]-b)/((ce[3]+ie)/2+6),Math.abs(ce[1]-I)/24);k<ce[2]&&(w=Math.min(w,k))}w>.06?(M=F,M.position.set(...$s(b,s+9,I)),r.add(M),m.push([b,I,w,ie])):(F.material.map.dispose(),F.material.dispose())}this.net.items.push({dot:C,arc:N,segs:H,label:M,thr:w,delay:L,base:f.base,ds:C.scale.x,ls:M?M.scale.clone():null,x:b,z:I})}),this.container.add(r)}async openPosts(){this.loading=!0,this.posts.forEach(e=>[e.thumb,e.thumbBack].forEach(t=>{t&&Yi(t).catch(()=>{})}));for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=ys+hw;for(;ys<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),this.trail.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,hn(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:o}),hn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,hn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&((i.addedLines?this.trail:this.following).add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...$s(...i),...$s(...s)],a=this.lines[t];a?(a.geometry.setPositions(r),a.visible=!0):(a=this.lines[t]=G0(r,C0),this.container.add(a))}async openInfo(e,t,i){let s=await zc(this.posts[t],"place");if(!this.alive)return;let r=new Bt(new Ni(165,130),new tn({map:s,side:Xn}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),hn(a.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Go(i,()=>{r.visible=!0})}async openPost3D(){let e=V.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Bt(new Ni(90,90),new tn({side:Xn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await zc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),Go(oe.tween,()=>{!V.postOpen||V.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,Cn(i),hn(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[V.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(Cn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Pg(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?Ig(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=Ng(this.base)):this.base,this.L.lineEnd||this.lines.forEach(l=>{l&&(l.visible=!1)}),r)return!0;let a=oe.tween*1.2,o=V.postOpen&&Nh()==="focus3d"?V.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===o)return;let u=this.following.has(l);Cn(l.thumb),this.following.add(l),hn(l.thumb,a,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(Cn(d.p),hn(d.p,a,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=tl(),r=bf(),a=2*e.width+3,o=Math.max(90,r*Math.max(a/(i.aw*.92),e.height/(i.ah*.85))),l=_s()+er.focus,c=o/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;Cn(e.thumb),hn(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-o,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;Cn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(V.degreeCamera/Vi)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=V.selected,s=this.postViews[V.selected]&&this.postViews[V.selected].ready?t(this.postViews[V.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),V.selected=i}goNext(){return V.selected+1>=this.n?0:V.selected+1}goPrev(){return V.selected-1<=-1?this.n-1:V.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/ws),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*vn(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(ys-this.net.start-s.delay)/.9)),a=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(a*s.segs));let o=s.base||r>=1;s.dot.visible=o,s.label&&(s.label.visible=o&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.trail.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...$s(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Vi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Dg.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Ug.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Dg).add(Ug)}}async retexture(e=()=>!0){let t=(a,o)=>{let l=a.material.map;return a.material.map=o,a.material.needsUpdate=!0,l},i=[],s=()=>i.forEach(a=>(a.all||[]).forEach(o=>o&&o.dispose()));for(let a=0;a<this.n;a++){let o=this.postViews[a];if(!o.ready)continue;let l;try{l=await this.tex(this.posts[a],this.w,this.h)}catch{continue}let c=this.infos[a],h=null;if(c)try{h=await zc(this.posts[a],"place")}catch{}if(i.push({i:a,pv2:o,tex:l,inf:c,it:h,all:[l[0],l[1],l[2]&&l[2].tex,l[3],h]}),!this.alive||!e())return s(),!1}let r=null;if(this.focusInfo&&this.focusInfo.mesh.material.map&&V.postOpen)try{r=await zc(this.posts[V.selected],"person")}catch{}if(!this.alive||!e())return s(),r&&r.dispose(),!1;if(this.net&&(Kc.color.set(oi()),this.net.mats.on.color.set(oi())),i.forEach(({pv2:a,tex:o,inf:l,it:c})=>{let h=a.band?a.band.k:0;if(a.setBand(o[2]||null),a.band&&h&&(a.band.k=h,a.hover(Ca===a)),new Set([t(a.meshes[0],o[0]),t(a.meshes[1],o[1])]).forEach(u=>u&&u.dispose()),a.bhi&&o[3]){let u=t(a.bhi.mesh,o[3]);u&&u.dispose()}else o[3]&&o[3].dispose();if(l&&c){let u=t(l.mesh,c);u&&u.dispose()}}),r&&this.focusInfo){let a=t(this.focusInfo.mesh,r);a&&a.dispose()}return!0}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(Cn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Sh(),ti.remove(this.container)}},Tr=[],Ie=null,Ar=oe.cameraEaseSpeed,ji=!1,Yn=!1,Js=0,Ks=0,Qc=0,eh=0,Ss=!1,bn=!1,Es=()=>Tr[V.currentSection];function Dw(){let n=oe.cameraHeight;V.cameraY=V.cameraY+n/7<=3*n?V.cameraY+n/7:n*3}function Uw(){let n=oe.cameraHeight;V.cameraY=V.cameraY-n/7>=n/7?V.cameraY-n/7:n/7}var Ow={map:58},Eh=(n=(Es()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||Ow[n.layout]||100)/100)),li=()=>Ie&&Ie.L.grid&&Ie.grid&&Ie.section===Es()?Ie:null,kw=n=>bf()/n.sc*Math.min(1,oe.cameraDistanceProportion/ws);function Th(n){let e=n.grid,t=kw(e),i=t/bf();return{d:Math.max(20,t-er.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var _s=()=>{let n=li();return n?Th(n).d:oe.cameraDistance*Eh()},Ah=()=>{let n=li();return n?Th(n).ty:oe.cameraTargetHeight*(((Es()||{}).def||{}).layout==="map"?Eh()*.62:1)},Og=()=>{let n=li();return n?Th(n).ty:oe.cameraHeight*(((Es()||{}).def||{}).layout==="map"?Eh()*1.6:1)},Hc=new U;function Bw(){return!nr()||li()||oe.cameraDistanceProportion>=ws?0:Math.min(1,(1-oe.cameraDistanceProportion/ws)*1.25)}function Fw(){let n=Ie&&Ie.net&&Ie.net.focus;return n?(n.getWorldPosition(Hc),{x:Hc.x,y:Hc.y,z:-Hc.z}):null}function el(){let n=Es(),e=Bw(),t=e?Fw():null,i=Ah(),s=li();return s?{x:n.p.x-Th(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var za=()=>{if(!nr()||li())return Og();let n=Math.min(1,oe.cameraDistanceProportion/ws);return el().ty+(Og()-Ah())*Math.pow(n,.55)},zw=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),tl=()=>{let n=el();return{d:_s(),x:n.x,z:n.z,ty:n.ty}},ei=null;function $0(n){if(!n||!Ie||!Ie.relayout())return;Cn(yt),Cn(zn),ei=n,li()&&(V.degreeCamera=Mf(V.degreeCamera)),V.cameraY=za(),Yn=!0,Ar=oe.cameraEaseSpeed;let e=V.postOpen&&Nh()==="focus3d"&&!qe.open&&Ie.postViews[V.selected];e&&e.ready&&(Ie.L.grid?Ie.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var Hw=0;function Vw(){if(++Hw%20||!Ss||V.postOpen||ji||!bn)return;let n=li();if(!n)return;let e=W0();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&$0(ei||tl())}function Gw(){if(!ei)return;let n=tl(),e=vn(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-ei[i];Math.abs(s)>.05?(ei[i]+=s*e,t=!1):ei[i]=n[i]}Ba(zn)||(zn.x=ei.x,zn.y=ei.ty,zn.z=ei.z),!ji&&!Yn&&!Ba(yt)&&Zd(),t&&(ei=null)}function Zd(){let n=ei||tl();yt.x=n.x+n.d*Math.sin(V.actualDeg),yt.z=n.z+n.d*Math.cos(V.actualDeg)}function Ch(){Tr.forEach((n,e)=>{e===V.currentSection?n.container.parent||ti.add(n.container):n.container.parent&&ti.remove(n.container)}),ji=!1,Yn=!1,nn.classList.remove("dragging"),Ca=null,Da=null,Do=null,Ie&&Ie.destroy(),ei=null,Ie=new jd(Es()),ko(V.selected),V.actualDeg=V.degreeCamera,Ww()}function Ww(){let n=el();V.cameraY=za(),fw(_s()*Math.sin(V.degreeCamera)+n.x,V.cameraY,_s()*Math.cos(V.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function ko(n){V.selected=n,Ie&&Ie.focus(n)}function Ad(n){!Ie||!Ie.n||(Yn=!0,Ie.checkPostSelected(),Ar=oe.cameraKeyboardSpeed,ko(n==="NEXT"?Ie.goNext():Ie.goPrev()))}var Hi=()=>zt>700&&Ut>520;function Rh(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Ut<680?1e3-Ut:320)*t)}function q0(){if(Yn=!1,Rh(),!Ss)return;let n=el();if(V.postOpen&&Nh()==="focus3d"&&!qe.open&&Ie&&Ie.postViews[V.selected]){let t=Ie.postViews[V.selected];Ie.L.grid?Ie.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=nr()||li();pw(n.x+_s()*Math.sin(V.actualDeg),e?V.cameraY:yt.y,n.z+_s()*Math.cos(V.actualDeg),oe.cameraSpeed/2),e&&ff(n.x,n.ty,n.z,oe.cameraSpeed/2)}function $w(){if(!bn){Math.abs(yt.y-V.cameraY)>.007&&!Ba(yt)&&(yt.y-=(yt.y-V.cameraY)*vn(oe.cameraEaseSpeed));return}if(ji){Ar=oe.cameraEaseSpeed;let n=V.degreeCamera;V.degreeCamera+=(Js-Qc)/150,V.actualDeg-=(V.actualDeg-n)*vn(Ar),Zd(),V.cameraY+=(Ks-eh)*2;let e=oe.cameraHeight,t=nr()?el().ty+12:e/3;V.cameraY<t?V.cameraY=t:V.cameraY>e*4&&(V.cameraY=4*e),yt.y-=(yt.y-V.cameraY)*vn(Ar),oe.animationMode&&Ie&&Ie.movePosts((Qc-Js)/Math.max(Wo,.25),(eh-Ks)/Math.max(Wo,.25),Ar),Qc=Js,eh=Ks}else Yn?(Math.abs(V.actualDeg-V.degreeCamera)<=.007&&(Yn=!1),V.actualDeg-=(V.actualDeg-V.degreeCamera)*vn(oe.cameraEaseSpeed),Zd(),yt.y-=(yt.y-V.cameraY)*vn(Ar),oe.animationMode&&Ie&&Ie.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-V.cameraY)>.007&&(yt.y-=(yt.y-V.cameraY)*vn(oe.cameraEaseSpeed))}function qw(){yt.zoom=6;let e=Ie&&Ie.postViews[0]&&Ie.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,zn.y=e+100,ff(zn.x,Ah(),zn.z,1),bn=!1,hn(yt,1,{zoom:er.zoom},{ease:"expoOut"}),setTimeout(()=>{bn=!0},1*1e3+50)}var Cd=new U,Rd=new U,Ro=new U,Lo=1,Po=1,Xw=1.45;function Yw(){Cd.copy(Vd(yt.x,yt.y,yt.z)),Rd.copy(Vd(zn.x,zn.y,zn.z)),Ro.subVectors(Rd,Cd),Ro.lengthSq()<1e-6&&Ro.set(0,0,-1),Ro.normalize();let n=nr()&&!li()?Math.min(1,oe.cameraDistanceProportion/ws):1;Lo+=Math.abs(n-Lo)<.001?n-Lo:(n-Lo)*vn(oe.cameraEaseSpeed),Ln.position.copy(Cd).addScaledVector(Ro,-er.focus*Lo),Ln.lookAt(Rd);let e=zt<700&&Ut>zt&&!li()&&!nr()?Xw:1;Po+=Math.abs(e-Po)<.001?e-Po:(e-Po)*vn(oe.cameraEaseSpeed);let t=Math.min(1,zt/900*Po),i=2*Math.atan(Ut/2/(yt.zoom*er.focus*t))/Vi;Math.abs(Ln.fov-i)>1e-4&&(Ln.fov=i,Ln.updateProjectionMatrix())}function X0(){if(zt=window.innerWidth,Ut=window.innerHeight,Rn.setSize(zt,Ut,!1),Ln.aspect=zt/Ut,Ln.updateProjectionMatrix(),gf.forEach(n=>n.resolution.set(zt,Ut)),Ss)try{Ko()}catch{}}var kn=document.getElementById("menu"),cn=document.getElementById("slogan"),Bn=document.getElementById("langs"),Lh=[];function jw(){kn.innerHTML="",Lh=Dt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=he(n.def.name),i.addEventListener("click",()=>{e!==V.currentSection&&bn&&nl(e)}),t.appendChild(i),kn.appendChild(t),i}),kn.style.setProperty("--n",Dt.length),wf()}function wf(){Lh.forEach((n,e)=>n.setAttribute("aria-current",String(e===V.currentSection)))}function Zw(){Lh.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),kn.hidden=!1,Bn.hidden=!1,Nr(),setTimeout(()=>kn.classList.add("ready"),(Dt.length+1)*200)}var Jw=1.44,kg={col:362,gutter:160,side:79,top:34,bottom:20},Bg={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Bi(){let n=ve&&ve.settings&&ve.settings.fiche||{},e={};for(let t in kg){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?kg[t]:Math.max(Bg[t][0],Math.min(Bg[t][1],Math.round(+i)))}return e}function Io(n){let e=Bi(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(zt-2*oe.margin)/(qe.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function Sf(){let n=Ut<=420;document.body.classList.toggle("post-short",n&&V.postOpen);let e=cn.offsetTop+cn.offsetHeight+(n?1:2)*oe.margin,t=qe.height+12,i=n?24:(kn.offsetHeight||90)+70,s=(Ut-e-i)/t,r=(Ut-e-56)/t,a=zt>700&&!n?14/(+Qn(ve.settings,"body").size||14):0,o=Math.max(n?.4:.5,Math.min(Jw,Math.max(s,Math.min(a,r))));qe.scale=o,en.style.top=e+"px",en.style.transform=o!==1?`scale(${o.toFixed(3)})`:"",en.style.width=o!==1?Math.ceil((zt-oe.margin)/o)+"px":"",en.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Ut-(e+t*o)<kn.offsetHeight+60)}var Fg=()=>{let n=Bn.getBoundingClientRect();return n.height?n.top:Ut-(Hi()?44:48)};function Nr(){if(V.postOpen||document.body.classList.remove("post-cramped","post-short"),V.postOpen&&qe.open&&qe.height>100){let n=cn.offsetTop+cn.offsetHeight+qe.height*(qe.scale||1)+2*oe.margin+30;n=Math.min(n,Fg()-kn.offsetHeight-22),kn.style.left=oe.margin+"px",kn.style.top=n+"px"}else{let n=Bn.hidden?Ut-30:Fg();if(!Hi()&&!bs.hidden){let e=bs.getBoundingClientRect();e.height&&e.left<zt/2&&(n=Math.min(n,e.top))}kn.style.left=(Hi()?26:oe.margin)+"px",kn.style.top=Math.round(Math.min(Ut-(kn.offsetHeight||86)-(Hi()?100:56),n-(kn.offsetHeight||86)-24))+"px"}if(document.body.classList.toggle("post-open-wide",Hi()&&!!V.postOpen),Tf(),Ef(),!(V.postOpen&&qe.open&&qe.height>100)){let n=Math.max(0,...["reel-btn","about-btn","lang-sq"].map(e=>document.getElementById(e)).filter(e=>e&&!e.hidden&&e.offsetHeight).map(e=>e.offsetTop+e.offsetHeight));n&&kn.offsetTop<n+18&&(kn.style.top=n+18+"px")}}function Ef(){if(!de||!de.btn)return;let n=de.btn;n.style.top=Math.round(cn.offsetTop+cn.offsetHeight+(Hi()?26:16))+"px",n.style.left=cn.offsetLeft+2+"px",n.style.right="auto",Jo()}function Tf(){bs.style.top=bs.style.left="",Kd.style.maxHeight=Math.max(140,Ut-200)+"px",document.body.classList.toggle("cats-up",!Hi()&&zt<560)}var zg=(n,e=!1)=>Mg(n,ve.settings,e);function Jd(){let n=ve.settings,e=n.accent||"#ffcc00",t=n.logo?bt(n.logo):zg(_n?"#ffffff":e,_n),i=document.getElementById("home-logo");i&&(i.src=n.logo?t:zg("#ffffff",!1),i.classList.toggle("raw",!n.logo));let s=document.getElementById("logo");s&&(s.style.backgroundImage=n.logo?`url("${t}")`:"",s.classList.toggle("img",!!n.logo)),Qw(n.logo?t:Kw)}var Kw="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#fff" stroke="#c4c4c4" stroke-width="2.5"/></svg>');function Qw(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var th="",lh=document.querySelector('meta[name="description"]'),Hg=lh?lh.content:"",Af=document.title;function Cf(n){if(!(St||!ve)){document.title=n?`${he(n.title).trim()} \xB7 ${ve.settings.name||"Hand Coded"}`:Af,lh&&(lh.content=n&&(Er(he(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||he(n.subtitle))||Hg);try{let e=new URL(location.href),t=window.HC_ROUTE||{};if(t.pages&&location.protocol!=="file:"){let i=v0;e.searchParams.delete("p"),e.searchParams.delete("lang"),e.pathname=i.pathname+(n&&md(ve,n)?`${xn}/${encodeURIComponent(n.id)}/`:t.p||e.pathname!==i.pathname?`${xn}/`:""),n&&!md(ve,n)&&e.searchParams.set("p",n.id)}else n?e.searchParams.set("p",n.id):e.searchParams.delete("p");e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&rr("?p="+n.id,document.title)}}function eS(){let n=String((ve.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||St||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{th||rr("",Af)}),document.head.appendChild(e)}function rr(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:((window.HC_ROUTE||{}).pages?v0.pathname:location.pathname.replace(/index\.html$/,""))+n,title:e,event:t})}catch{}}var Vc=document.createElement("canvas").getContext("2d");function tr(){let n=innerWidth<=700||innerHeight<=520?10.5:13,e=null;["#slogan","#home-slogan"].forEach(a=>{let o=document.querySelector(a+" > .wm"),l=document.querySelector(a+" > .tls");if(!o||!l)return;let c=[...l.children];if(c.length){l.style.fontSize=l.style.lineHeight=l.style.marginTop="",o.style.removeProperty("font-size"),o.style.removeProperty("line-height");for(let h=0;h<4;h++){let u=(M,w)=>`${M.fontStyle==="italic"?"italic ":""}${M.fontWeight} ${w}px ${M.fontFamily}`,d=getComputedStyle(o),p=parseFloat(d.fontSize);if(!(p>0))return;Vc.font=u(d,p);let g=Vc.measureText(o.textContent);if(!(g.actualBoundingBoxAscent>0)||!(g.fontBoundingBoxAscent>0))return;let v=parseFloat(d.lineHeight)||p*1.2,m=g.actualBoundingBoxAscent,f=(v-g.fontBoundingBoxAscent-g.fontBoundingBoxDescent)/2+g.fontBoundingBoxAscent,S=getComputedStyle(l);Vc.font=u(S,100);let b=Vc.measureText(c[0].textContent),I=1.15,L=(b.actualBoundingBoxAscent||72)/100,C=m/(L+(c.length-1)*I),N=C*I;if(h<3&&C<n-.05){let M=(n+.02)/C;o.style.setProperty("font-size",(p*M).toFixed(2)+"px","important"),o.style.setProperty("line-height",(v*M).toFixed(2)+"px","important");continue}let H=(N-(b.fontBoundingBoxAscent+b.fontBoundingBoxDescent)*C/100)/2+b.fontBoundingBoxAscent*C/100;l.style.fontSize=C.toFixed(2)+"px",l.style.lineHeight=N.toFixed(2)+"px",l.style.marginTop=(f-m-(H-L*C)).toFixed(2)+"px",a==="#slogan"&&(e=f-m/2);break}}});let t=document.getElementById("logo"),i=document.getElementById("slogan"),s=i&&i.querySelector(":scope > .wm");t&&(t.style.top=""),t&&s&&e!==null&&/fixed|absolute/.test(getComputedStyle(t).position)&&t.offsetHeight&&(t.style.top=(i.offsetTop+s.offsetTop+e-t.offsetHeight/2).toFixed(1)+"px");let r=document.getElementById("slogan")?document.getElementById("slogan").offsetHeight:0;if(r!==tr.h){tr.h=r;try{Mt&&(Tf(),Ef(),Jo()),qe.open&&Sf()}catch{}}}tr.wait=()=>{document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>requestAnimationFrame(tr))};document.fonts&&document.fonts.addEventListener&&document.fonts.addEventListener("loadingdone",()=>tr());window.addEventListener("resize",()=>tr());function Rf(){let n=ve.settings;B0(),gh(),rl(),document.documentElement.lang=xn,document.documentElement.classList.toggle("neg",_n),V.postOpen||(document.title=Af||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[xn]||n.taglines.en)||[],t=e.length?`<b class="wm">${xe(e[0])}</b><span class="tls">${e.slice(1).map(o=>`<span>${xe(o)}</span>`).join("")}</span>`:xe(n.name);if(cn.innerHTML=e.length?`<b class="wm" role="link" tabindex="0" title="${xe(_e("homeLink"))}">${xe(e[0])}</b><span class="tls">${e.slice(1).map(o=>`<span>${xe(o)}</span>`).join("")}</span>`:t,document.getElementById("home-slogan").innerHTML=t,tr(),tr.wait(),Jd(),!n.logo&&document.fonts){let o=Qn(n,"logo"),l=`${o.italic?"italic ":""}${o.weight||400} 76px ${o.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{ve.settings.logo||Jd()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(o=>{let l=document.getElementById(o);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(_n)),l.title=_e(_n?"toPos":"toNeg"),l.setAttribute("aria-label",l.title)):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.removeAttribute("aria-label"),l.removeAttribute("title")))}),Pn.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),ir.classList.contains("wait")||Wf(he(n.home.enter)||_e("enter")),yS(),wS(),ni(),document.querySelectorAll("[data-i18n]").forEach(o=>{o.textContent=_e(o.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",_e("keys")),Bo.setAttribute("aria-label",_e("prev")),ch.setAttribute("aria-label",_e("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=_e("category"));let r=n.langs&&n.langs.length?n.langs:ai;tS(r);let a=document.getElementById("lang-sq");a||(a=document.createElement("div"),a.id="lang-sq",a.className="ui",document.body.appendChild(a),document.addEventListener("pointerdown",o=>{o.target.closest("#lang-sq")||a.classList.remove("open")})),[document.getElementById("home-langs"),a].forEach(o=>{if(o.innerHTML="",o.classList.add("hlg"),o.classList.remove("open"),o.hidden=r.length<2,r.length<2)return;let l=document.createElement("button");l.type="button",l.className="cur",l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label",_e("lang")+" : "+xn.toUpperCase()),l.innerHTML=`<b class="ic">${xn.toUpperCase()}</b>`,l.addEventListener("click",()=>{let h=o.classList.toggle("open");l.setAttribute("aria-expanded",String(h))});let c=document.createElement("span");c.className="opts",r.filter(h=>h!==xn).forEach(h=>{let u=document.createElement("button");u.type="button",u.textContent=h.toUpperCase(),u.lang=h,u.setAttribute("aria-label",_e("lang")+" "+h.toUpperCase()),u.addEventListener("click",()=>Lf(h)),c.appendChild(u)}),o.append(l,c)}),Jo(),document.documentElement.style.setProperty("--accent",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-raw",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",I0(ve.settings.accent||"#ffcc00")),ZS()}function tS(n){if(Bn.innerHTML="",Bn.classList.remove("open"),n.length<2)return;let e=document.createElement("button");e.type="button",e.className="lg-open",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-label",_e("lang")+" : "+xn.toUpperCase()),e.innerHTML=`<i class="tri"></i><span>${xn.toUpperCase()}</span>`;let t=document.createElement("ul");t.className="lg-list",n.filter(i=>i!==xn).forEach(i=>{let s=document.createElement("li"),r=document.createElement("button");r.type="button",r.textContent=i.toUpperCase(),r.lang=i,r.setAttribute("aria-label",_e("lang")+" "+i.toUpperCase()),r.addEventListener("click",()=>{Bn.classList.remove("open"),Lf(i)}),s.appendChild(r),t.appendChild(s)}),e.addEventListener("click",()=>{let i=Bn.classList.toggle("open");e.setAttribute("aria-expanded",String(i))}),Bn.append(t,e)}document.addEventListener("pointerdown",n=>{if(Bn.classList.contains("open")&&!Bn.contains(n.target)){Bn.classList.remove("open");let e=Bn.querySelector(".lg-open");e&&e.setAttribute("aria-expanded","false")}});Bn.addEventListener("keydown",n=>{if(n.code==="Escape"&&Bn.classList.contains("open")){n.stopPropagation(),Bn.classList.remove("open");let e=Bn.querySelector(".lg-open");e&&(e.setAttribute("aria-expanded","false"),e.focus())}});function Lf(n){if(n!==xn){xn=n;try{localStorage.setItem("hc-lang",n)}catch{}if(document.documentElement.lang=n,Rf(),Ss){Lh.forEach((i,s)=>{i.textContent=he(Dt[s].def.name)}),Ph();let e=V.postOpen,t=V.selected;Ai(),V.selected=t,Ch(),e&&Go(.6,()=>jo(t))}V.postOpen||Cf(null)}}var Yo=document.getElementById("cats"),bs=document.getElementById("cat-box"),Kd=document.getElementById("cat-list"),Y0=document.getElementById("cat-name"),Qd=document.getElementById("cat-open"),Bo=document.getElementById("pg-prev"),ch=document.getElementById("pg-next");function Ph(){let n=V.data,e=n.categoryList;bs.hidden=e.length<=1,Kd.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${xe(he(t.label))} <span class="n">${n.countOf(t.id)}</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{hh(),cS(t.id)}),i.appendChild(s),Kd.appendChild(i)}),Y0.innerHTML=`<span class="t">${xe(n.currentCatName)}</span> <span class="n">${n.countOf(n.category)}</span>`,j0(),hh(),iS()}var Gc=document.getElementById("pg-num");function j0(){let n=V.data;Bo.disabled=!n.hasNewer(),ch.disabled=!n.hasOlder(),Bo.hidden=ch.hidden=!n.hasNewer()&&!n.hasOlder(),Gc&&(Gc.hidden=Bo.hidden,Gc.textContent=`${n.page}/${n.pages}`,Gc.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function hh(){clearTimeout(Pf),bs.classList.remove("open"),Qd.setAttribute("aria-expanded","false")}var qi=document.createElement("button");qi.id="ov-btn";qi.type="button";qi.hidden=!0;qi.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 1h8v8H1zM10.5 1H15v3.5h-4.5zM10.5 5.5H15V9h-4.5zM1 10.5h3.5V15H1zM5.5 10.5H9V15H5.5zM10.5 10.5H15V15h-4.5z" fill="currentColor"/></svg><span></span>';bs.appendChild(qi);var Rt=null,nS="",Z0=()=>!!(V.section&&V.section.def.card==="image"&&!V.section.def.skills&&V.data&&V.data.all.length>=8);function iS(){qi.hidden=!Z0(),qi.querySelector("span").textContent=_e("overview"),qi.setAttribute("aria-label",_e("overview"))}qi.addEventListener("click",n=>{n.stopPropagation(),sS()});function Vg(){if(!Rt)return;let n=Rt.querySelector(".mos"),e=getComputedStyle(n).gridTemplateColumns.split(" ").length,t=[...n.children];[...n.children].forEach(d=>{d.className="t "+d.dataset.k,d.style.gridColumn=""});let i=d=>d.classList.contains("xl")?e<6?e*2:8:d.classList.contains("l")?4:d.classList.contains("w")?2:1,s=(e-t.reduce((d,p)=>d+i(p),0)%e)%e;for(let d=t.length-1;d>=0&&s>0;d--)t[d].dataset.k||(t[d].classList.add("w"),s--);let r=n.getBoundingClientRect(),a=r.width/e;if(!t.length||!a)return;let o=d=>{let p=d.getBoundingClientRect();return{t:d,c:Math.round((p.left-r.left)/a),n:Math.round(p.width/a),b:Math.round(p.bottom)}},l=t.map(o),c=Math.max(...l.map(d=>d.b)),h=l.filter(d=>d.b>=c-2).sort((d,p)=>d.c-p.c),u=e-h.reduce((d,p)=>d+p.n,0);for(let d=h.length-1,p=0;u>0;p++){let g=h[h.length-1-p%h.length];g.n++,u--,d--}h.forEach(d=>{d.t.style.gridColumn="span "+d.n})}function Gg(n,e=!0){if(nS=n,!Rt)return;Rt.querySelectorAll(".chips button").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.cat===n)));let t=Rt.querySelector(".mos");t.classList.toggle("sel",!!n);let i=null;if(t.querySelectorAll(".t").forEach(s=>{let r=!!n&&s.dataset.tags.split(" ").includes(n);s.classList.toggle("hit",r),s.classList.toggle("dim",!!n&&!r),n&&!r?(s.setAttribute("tabindex","-1"),s.setAttribute("aria-disabled","true")):(s.removeAttribute("tabindex"),s.removeAttribute("aria-disabled")),r&&!i&&(i=s)}),e&&i){let s=i.getBoundingClientRect();(s.top>innerHeight*.8||s.bottom<0)&&Rt.scrollTo({top:Rt.scrollTop+s.top-140,behavior:"smooth"})}}function sS(){if(!Z0()||!bn)return;hh();let n=V.data,e=V.section.def,t=n.all,i=e.defaultTag||"featured",s=(e.tags||[]).some(l=>l.id==="advertising")?"advertising":"",r=!0,a=t.map(l=>{let c=(l.tags||[]).includes(i),h=c&&r?"xl":c?"l":s&&(l.tags||[]).includes(s)?"w":"";c&&(r=!1);let u=l.ovSize==="s"?"":/^(xl|l|w)$/.test(l.ovSize||"")?l.ovSize:h,d=l.thumb?u==="xl"?`<img src="${xe(bt(l.thumb))}" alt="" loading="lazy" draggable="false">`:Pr(l.thumb,'alt="" loading="lazy" draggable="false"'):"";return`<a class="t ${u}" data-k="${u}" data-ov="${xe(l.id)}" data-tags="${xe((l.tags||[]).join(" "))}" href="?p=${encodeURIComponent(l.id)}&amp;lang=${xn}">${d}<em>${xe(l.date||"")}</em><span class="tx"><b>${xe(he(l.title))}</b><i>${xe(he(l.subtitle))}</i></span></a>`}).join(""),o=(n.categoryList.some(l=>l.id==="")?n.categoryList:[{id:"",label:Object.fromEntries(ai.map(l=>[l,(wr[l]||wr.en).all]))},...n.categoryList]).map(l=>`<button type="button" data-cat="${xe(l.id)}" aria-pressed="false">${xe(he(l.label))}<span>${n.countOf(l.id)}</span></button>`).join("");Rt||(Rt=document.createElement("section"),Rt.id="hc-ov",Rt.className="ui",Rt.setAttribute("role","dialog"),Rt.setAttribute("aria-modal","true"),Rt.hidden=!0,document.body.appendChild(Rt),Rt.addEventListener("click",l=>{let c=l.target.closest("[data-ov]");if(c){if(c.classList.contains("dim")){l.preventDefault();return}if(l.metaKey||l.ctrlKey||l.shiftKey)return;l.preventDefault();let u=c.dataset.ov;Ld(),il(u);return}let h=l.target.closest("[data-cat]");if(h){Gg(h.dataset.cat);return}l.target.closest(".x")&&Ld()}),window.addEventListener("keydown",l=>{!Rt||Rt.hidden||(l.code==="Escape"&&(l.preventDefault(),Ld()),l.code!=="Tab"&&l.code!=="Enter"&&l.code!=="Space"&&l.stopImmediatePropagation())},!0),window.addEventListener("resize",Vg)),Rt.setAttribute("aria-label",_e("overview")),Rt.innerHTML=`<div class="ov-in"><div class="bar"><h2>${xe(_e("overview"))}</h2><span class="n">${t.length} ${xe(_e("ov_n"))}</span><button type="button" class="x" aria-label="${xe(_e("close"))}"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button><div class="chips">${o}</div></div><div class="mos">${a}</div></div>`,Rt.hidden=!1,Rt.scrollTop=0,document.documentElement.classList.add("ov-open"),requestAnimationFrame(()=>{Rt.classList.add("on")}),Vg(),Gg("",!1),setTimeout(()=>{let l=Rt.querySelector(".x");l&&l.focus({preventScroll:!0})},50),rr("#overview",_e("overview"),!0)}function Ld(){!Rt||Rt.hidden||(Rt.classList.remove("on"),document.documentElement.classList.remove("ov-open"),setTimeout(()=>{Rt.classList.contains("on")||(Rt.hidden=!0)},350),qi.focus({preventScroll:!0}))}var Pf=0,J0=-1e9;bs.addEventListener("pointerenter",()=>clearTimeout(Pf));Qd.addEventListener("click",()=>{clearTimeout(Pf);let n=bs.classList.toggle("open");Qd.setAttribute("aria-expanded",String(n))});Bo.addEventListener("click",()=>{bn&&hy("newer")});ch.addEventListener("click",()=>{bn&&hy("older")});var ar=document.getElementById("kb"),If=document.getElementById("kb-toggle"),K0=null;function ef(){ar.classList.add("open"),If.setAttribute("aria-expanded","true")}function uh(){ar.classList.remove("open"),If.setAttribute("aria-expanded","false")}If.addEventListener("click",()=>{clearTimeout(K0),ar.classList.contains("open")?uh():ef()});ar.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>dy({code:n.dataset.k,preventDefault(){}})));function ps(n){let e=ar.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function Q0(){ar.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var Nf=document.getElementById("whiteboard"),en=document.getElementById("post2d"),ms=document.getElementById("strip");function Wg(n,e){if(!n||ve.settings.signImages===!1)return"";let t=[he(n.title).trim(),(n.author||ve.settings.name||"").trim()].filter(Boolean);return e&&t.push(_e("photo")+" "+e.trim()),t.join(" \xB7 ")}var rS=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Ha=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Va=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]{6,}))?/i.exec(n||"");if(!e)return null;let t=e[2]||(/[?&]h=([0-9a-f]{6,})/i.exec(n)||[])[1];return t?e[1]+"/"+t:e[1]},Ih=(n,e)=>{let[t,i]=String(n).split("/");return`https://player.vimeo.com/video/${t}?${i?"h="+i+"&":""}${e}`},Pd=new Map,ey=n=>(Pd.has(n)||Pd.set(n,fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent("https://vimeo.com/"+n)}&width=1280`).then(e=>e.ok?e.json():null).then(e=>e&&e.thumbnail_url||"").catch(()=>"")),Pd.get(n)),ty=(n,e)=>{let t=(n&&n.media||[]).filter(i=>i&&/youtu\.?be|vimeo\.com/.test(i.src||""));return!t.length||t[0].src===e},Dr=n=>Ha(n)?"youtube":Va(n)?"vimeo":rS(n)?"video":"image",Fo={to:"maya@hand-coded.net"},$g={fr:{title:"Restons en contact.",intro:"Nos nouvelles, quelques fois par an : projets et coulisses. Un projet en t\xEAte ? Dites-nous en plus.",email:"Votre e-mail",who:"Vous \xEAtes",whoO:["Une marque","Une agence","Un(e) artiste","Une institution ou un festival","Autre"],what:"Un projet en t\xEAte ? (facultatif)",whatO:["Une installation","Un \xE9v\xE9nement ou une tourn\xE9e","Un outil ou un logiciel","Du conseil","Autre chose"],when:"Pour quand",whenO:["Moins de 3 mois","3 \xE0 6 mois","Plus tard","Je ne sais pas encore"],msg:"En quelques mots (facultatif)",send:"S\u2019inscrire",sending:"Envoi\u2026",ok:"Merci, vous \xEAtes inscrit(e) ! Et si vous nous avez parl\xE9 d\u2019un projet, on vous r\xE9pond tr\xE8s vite.",err:"L\u2019envoi n\u2019a pas march\xE9. \xC9crivez-nous directement \xE0 ",bad:"Il manque une adresse e-mail valide.",note:"Quelques e-mails par an. D\xE9sinscription en un clic."},en:{title:"Let\u2019s keep in touch.",intro:"Our news, a few times a year: projects and behind the scenes. A project in mind? Tell us more.",email:"Your email",who:"You are",whoO:["A brand","An agency","An artist","An institution or a festival","Other"],what:"A project in mind? (optional)",whatO:["An installation","An event or a tour","A tool or software","Consulting","Something else"],when:"When",whenO:["Within 3 months","3 to 6 months","Later","Not sure yet"],msg:"In a few words (optional)",send:"Sign up",sending:"Sending\u2026",ok:"Thank you, you\u2019re signed up! And if you told us about a project, we\u2019ll get back to you very soon.",err:"Sending failed. Write to us directly at ",bad:"Please enter a valid email address.",note:"A few emails a year. Unsubscribe in one click."},ca:{title:"Mantinguem el contacte.",intro:"Les nostres novetats, unes quantes vegades l\u2019any: projectes i bastidors. Teniu un projecte al cap? Expliqueu-nos-en m\xE9s.",email:"El vostre correu",who:"Sou",whoO:["Una marca","Una ag\xE8ncia","Un/a artista","Una instituci\xF3 o un festival","Altres"],what:"Un projecte al cap? (opcional)",whatO:["Una instal\xB7laci\xF3","Un esdeveniment o una gira","Una eina o un programari","Assessorament","Una altra cosa"],when:"Per a quan",whenO:["Menys de 3 mesos","De 3 a 6 mesos","M\xE9s endavant","Encara no ho s\xE9"],msg:"En poques paraules (opcional)",send:"Subscriure\u2019s",sending:"Enviant\u2026",ok:"Gr\xE0cies, ja us heu subscrit! I si ens heu parlat d\u2019un projecte, us responem molt aviat.",err:"L\u2019enviament no ha funcionat. Escriviu-nos directament a ",bad:"Falta una adre\xE7a de correu v\xE0lida.",note:"Uns quants correus l\u2019any. Baixa amb un clic."},es:{title:"Sigamos en contacto.",intro:"Nuestras novedades, unas pocas veces al a\xF1o: proyectos y bastidores. \xBFUn proyecto en mente? Cu\xE9ntanos m\xE1s.",email:"Tu correo",who:"Eres",whoO:["Una marca","Una agencia","Un/a artista","Una instituci\xF3n o un festival","Otro"],what:"\xBFUn proyecto en mente? (opcional)",whatO:["Una instalaci\xF3n","Un evento o una gira","Una herramienta o un software","Asesor\xEDa","Otra cosa"],when:"Para cu\xE1ndo",whenO:["Menos de 3 meses","De 3 a 6 meses","M\xE1s adelante","A\xFAn no lo s\xE9"],msg:"En pocas palabras (opcional)",send:"Suscribirme",sending:"Enviando\u2026",ok:"\xA1Gracias, ya te has suscrito! Y si nos has hablado de un proyecto, te respondemos muy pronto.",err:"El env\xEDo no ha funcionado. Escr\xEDbenos directamente a ",bad:"Falta una direcci\xF3n de correo v\xE1lida.",note:"Unos pocos correos al a\xF1o. Baja con un clic."}},ny=()=>$g[xn]||$g.en,aS=0;function iy(n){let e=ny(),t=xe,i="cf"+ ++aS,s=(r,a,o)=>`<fieldset class="cf-q"><legend>${t(a)}</legend><div class="cf-chips">${o.map((l,c)=>`<label class="cf-chip"><input type="radio" name="${i}-${r}" value="${t(l)}"${c===-1?" checked":""}><span>${t(l)}</span></label>`).join("")}</div></fieldset>`;return`<form class="cform-f cf-${n}" novalidate><div class="cf-col"><h2 class="${n==="pv"?"pv-ttl":"ttl"}">${t(e.title)}</h2><p class="cf-intro">${t(e.intro)}</p><label class="cf-q cf-mail"><span>${t(e.email)}</span><input type="email" name="email" autocomplete="email" required spellcheck="false"></label>`+s("who",e.who,e.whoO)+s("when",e.when,e.whenO)+'</div><div class="cf-col">'+s("what",e.what,e.whatO)+`<label class="cf-q cf-msg"><span>${t(e.msg)}</span><textarea name="message" rows="${n==="pv"?3:2}"></textarea></label><input type="text" name="_honey" class="cf-hp" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="cf-end"><button type="submit" class="cf-send">${t(e.send)}</button><span class="cf-note">${t(e.note)}</span></div><p class="cf-st" role="status" aria-live="polite"></p></div></form>`}function sy(n){let e=n.querySelector(".cform-f");if(!e||e.dataset.bound)return;e.dataset.bound="1";let t=e.querySelector(".cf-st"),i=e.querySelector(".cf-send"),s=r=>{let a=e.querySelector(`input[name$="-${r}"]:checked`);return a?a.value:""};e.addEventListener("submit",async r=>{r.preventDefault();let a=ny(),o=e.email.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)){t.textContent=a.bad,t.className="cf-st bad",e.email.focus();return}if(e._honey.value)return;i.disabled=!0,i.textContent=a.sending,t.textContent="",t.className="cf-st";let l=!!(s("what")||s("when")||e.message.value.trim()),c={email:o,Newsletter:"oui","Vous \xEAtes":s("who"),Projet:s("what"),"Pour quand":s("when"),Message:e.message.value.trim(),Langue:xn,Page:location.href,_subject:"Hand Coded \xB7 "+(l?"newsletter + projet":"inscription newsletter")+(s("who")?" ("+s("who")+")":""),_template:"table",_captcha:"false"},h=!1,u="";if(location.protocol==="file:")u="page ouverte depuis le disque : l\u2019envoi ne marche que sur le site en ligne";else try{let d=await fetch("https://formsubmit.co/ajax/"+Fo.to,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)}),p=await d.json().catch(()=>({}));h=d.ok&&String(p.success)!=="false",h||(u=p.message||"HTTP "+d.status)}catch(d){u=d&&d.message||"r\xE9seau"}h||console.warn("[contact] envoi refus\xE9 :",u),i.disabled=!1,i.textContent=a.send,h?(e.reset(),t.textContent=a.ok,t.className="cf-st ok",rr("contact-form","Formulaire de contact envoy\xE9",!0)):(t.innerHTML=xe(a.err)+`<a href="mailto:${xe(Fo.to)}">${xe(Fo.to)}</a>`+(u?`<small class="cf-why">${xe(u)}</small>`:""),t.className="cf-st bad")})}var oS=[[/instagram\.com/i,"IG","Instagram"],[/vimeo\.com/i,"Vi","Vimeo"],[/facebook\.com/i,"Fb","Facebook"],[/linkedin\.com/i,"in","LinkedIn"],[/youtube\.com|youtu\.be/i,"YT","YouTube"],[/tiktok\.com/i,"TT","TikTok"],[/(?:^|\/\/|\.)(?:x|twitter)\.com/i,"X","X"],[/behance\.net/i,"Be","Behance"]];function ry(n){let e=document.createElement("div");return e.innerHTML=n,e.querySelectorAll("p").forEach(t=>{let i=[...t.querySelectorAll("a[href]")];if(!i.length)return;let s=i.map(a=>oS.find(([o,,l])=>o.test(a.getAttribute("href"))&&a.textContent.trim().toLowerCase()===l.toLowerCase()));s.some(a=>!a)||[...t.childNodes].filter(a=>a.nodeType===3).map(a=>a.textContent).join("").replace(/[\s·•|,\/-]/g,"")||(t.className="socs",t.innerHTML=i.map((a,o)=>`<a class="soc" href="${xe(a.getAttribute("href"))}" target="_blank" rel="noopener" aria-label="${s[o][2]}" title="${s[o][2]}">${s[o][1]}</a>`).join(""))}),e.innerHTML}function ay(n){let e=document.createElement("div");e.innerHTML=ry(n||"");let t=[...e.children],i={lead:"",mail:[],tel:[],addr:[],socs:"",note:[],rest:[]};return t.forEach((s,r)=>{let a=s.textContent.replace(/\s+/g," ").trim();if(!a&&!s.classList.contains("socs"))return;let o=[...s.querySelectorAll("a[href]")];if(s.classList.contains("socs"))i.socs=s.innerHTML;else if(o.some(l=>/^mailto:/i.test(l.getAttribute("href"))))o.filter(l=>/^mailto:/i.test(l.getAttribute("href"))).forEach(l=>i.mail.push(l.getAttribute("href").replace(/^mailto:/i,"").split("?")[0]));else if(/^\+?[\d\s().\-]{8,}$/.test(a))i.tel.push(a);else if(r===0&&!o.length&&s.querySelector("b, strong")&&s.querySelector("b, strong").textContent.trim()===a)i.lead=s.querySelector("b, strong").innerHTML;else if(r===0&&!o.length&&s.firstElementChild&&/^(B|STRONG)$/.test(s.firstElementChild.tagName)&&s.textContent.trim().startsWith(s.firstElementChild.textContent.trim())){let l=s.firstElementChild;i.lead=l.innerHTML,l.remove(),i.sub=s.innerHTML.replace(/^\s*(<br\s*\/?>\s*)+/i,"").trim()}else o.length?i.note.push(s.innerHTML):/\d/.test(a)&&a.length<120?i.addr.push(a):i.rest.push(s.outerHTML)}),i.ok=!!(i.mail.length||i.tel.length||i.addr.length),i}function oy(n){let e=ay(n),t=xe;if(!e.ok)return ry(n||"");let i=(a,o)=>`<div class="cr"><dt>${t(_e(a))}</dt><dd>${o}</dd></div>`,s=a=>`<a href="tel:${t(a.replace(/[^\d+]/g,""))}">${t(a)}</a>`,r=a=>{let[o,...l]=a.split(/\s+[.·•|]\s+/);return t(o)+(l.length?"<br>"+t(l.join(" \xB7 ")):"")};return(e.lead?`<p class="lead">${e.lead}</p>`:"")+(e.sub?`<p class="csub">${e.sub}</p>`:"")+'<dl class="crows">'+(e.mail.length?i("c_write",e.mail.map(a=>`<a class="mail" href="mailto:${t(a)}">${t(a)}</a>`).join("<br>")):"")+(e.tel.length?i("c_call",e.tel.map(s).join("<br>")):"")+(e.addr.length?i("c_addr",e.addr.map(r).join("<br>")):"")+(e.socs?i("c_follow",`<span class="socs">${e.socs}</span>`):"")+"</dl>"+e.rest.join("")+(e.note.length?`<div class="cnote">${e.note.map(a=>`<p>${a}</p>`).join("")}</div>`:"")}var Wc=56,qe={open:!1,height:0,panels:[],x:0,finalpos:0,over:0,ov:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=355,en.classList.remove("closing"),en.hidden=!1,Sf(),this.geomKey=JSON.stringify(Io("project"));{let i=Bi();ms.style.setProperty("--ft",i.top+"px"),ms.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!1),this.addContact(n),Fo.to&&this.addForm()}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(V.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,this.over=0,this.ov=0,this.tx=0,ms.style.transform="translateX(0px)"},addRelations(n){let e=Xo(n);if(!e.length)return;let t=Co(ve,n).length>0,i=Bi(),s=this.panels[this.panels.length-1],r=V.section.def.skills&&s&&s.classList.contains("txt"),a=r?Math.max(12,i.gutter-i.side):i.side,o=Math.max(200,Math.min(300,i.col))+a+i.side,l=`<h2 class="ttl" style="left:${a}px;right:${i.side}px;top:${i.top}px">${xe(_e(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${a}px;bottom:${i.bottom}px">${e.length}</span>`;if(!t){this.addIndex(e,i);return}r||this.addPanel("relh",o,l),e.forEach(c=>{let h=Zs(c),u=[c.date,he(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${xe(c.id)}" aria-label="${xe(he(c.title))}">`+(h?Pr(h,'alt="" draggable="false"'):"")+`<span class="mono"${h?" hidden":""}>${xe(Na(he(c.title)))}</span><span class="cap"><span class="t">${xe(he(c.title).trim())}</span>${u?`<span class="m">${xe(u)}</span>`:""}</span></button>`),p=d.querySelector("img");p&&p.addEventListener("error",()=>{p.remove(),d.querySelector(".mono").hidden=!1})})},addIndex(n,e){let t=e.top,i=355-e.bottom,s=66,r=58,a=252,o=30,l=e.side,c=Math.max(1,Math.floor((i-t-r)/s)),h=Math.max(1,Math.floor((i-t)/s)),u=[],d=0;for(;d<n.length;){let m=(u.length?h:c)*2;u.push(n.slice(d,d+m)),d+=m}let p=xe,g=m=>String(m).padStart(2,"0"),v=0;u.forEach((m,f)=>{let S=f?h:c,b=m.length>S?2:1,I=f?"":`<h2 class="ttl" style="left:${l}px;top:${t}px">${p(_e("together"))}.<span class="n">${n.length}</span></h2>`,L=m.map(N=>{let H=Zs(N),M=[N.date,he(N.place)].filter(Boolean).join(" | ");return v++,`<button type="button" class="go" data-go="${p(N.id)}" aria-label="${p(he(N.title))}"><span class="no">${g(v)}</span><span class="th">${H?Pr(H,'alt="" draggable="false" loading="lazy"'):""}<span class="mono"${H?" hidden":""}>${p(Na(he(N.title)))}</span></span><span class="cap"><span class="t">${p(he(N.title).trim())}</span>${M?`<span class="m">${p(M)}</span>`:""}</span></button>`}).join("");this.addPanel("idx",l*2+b*a+(b-1)*o,I+`<div class="list" style="left:${l}px;top:${f?t:t+r}px;grid-template-columns:repeat(${b},${a}px);grid-template-rows:repeat(${Math.min(S,m.length)},${s}px);column-gap:${o}px">${L}</div>`).querySelectorAll("img").forEach(N=>N.addEventListener("error",()=>{let H=N.nextElementSibling;N.remove(),H&&(H.hidden=!1)}))})},addLogos(n){let e=Bi(),t=n.logos.length,i=e.top,s=355-e.bottom,r=34,a=e.side,o=96,l=50,c=Math.max(1,Math.floor((s-i-r)/l)),h=Math.max(1,Math.min(t,Math.ceil(t/c))),u=Math.ceil(t/h),d=Math.min(l,Math.floor((s-i-r)/u)),p=n.logos.map(m=>`<span class="lg"><img data-src="${xe(m)}" alt="" draggable="false"></span>`).concat(Array(u*h-t).fill('<span class="lg"></span>')).join(""),g=Math.round(i+r+Math.max(0,(s-i-r-u*d)/2));this.addPanel("logos",a*2+h*o,`<h3 class="lbl" style="left:${a}px;top:${i}px">${xe(_e("partners"))}</h3><div class="grid" style="left:${a}px;top:${g}px;grid-template-columns:repeat(${h},${o-1}px);grid-auto-rows:${d-1}px">${p}</div>`).querySelectorAll("img[data-src]").forEach(m=>ly(m.dataset.src).then(f=>{m.src=f.src,m.classList.toggle("raw",!!f.raw)}))},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(_e("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${xe(t)}</span><a href="${xe(e)}" target="_blank" rel="noopener"><span class="host">${xe(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,ms.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=l=>Dr(l.src)==="image";if(n.filter(e).length<3){n.forEach(l=>this.addMedia(l.src,355,l.credit,!0,l.caption));return}let t=["mat","big2","bleed","collage","trio","bleed","duo","grid","offset","bleed","inset","bleed"],i={duo:2,big2:3,collage:3,trio:3,grid:4},s=String(this.post&&this.post.id||""),r=0;for(let l of s)r=r*31+l.charCodeAt(0)>>>0;let a=r%t.length;t[a]==="bleed"&&a++;let o=0;for(;o<n.length;){let l=n[o];if(!e(l)){this.addMedia(l.src,355,l.credit,!0,l.caption),o++;continue}let c=t[a++%t.length],h=i[c]||1,u=n.slice(o,o+h);if(h>1&&!(u.length===h&&u.every(e))){this.addMedia(l.src,355,l.credit,!0,l.caption),o++;continue}c==="mat"?this.addMat(l):c==="grid"?this.addGrid(u):c==="duo"?this.addDuo(u):c==="big2"?this.addBig2(u):c==="collage"?this.addCollage(u):c==="trio"?this.addTrio(u):c==="offset"?this.addOffset(l):c==="inset"?this.addInset(l):this.addMedia(l.src,355,l.credit,!0,l.caption),o+=h}},addFit(n,e,t,i=""){let s=e.map(()=>1.5),r=this.addPanel("media comp "+n,400,e.map(h=>`<img src="${xe(bt(h.src))}" alt="" draggable="false" decoding="async">`).join("")+(i?`<p class="mcap2">${xe(i)}</p>`:"")),a=[...r.querySelectorAll("img")],o=r.querySelector(".mcap2"),l=h=>Math.round(h)+"px",c=h=>{let u=t(s);a.forEach((d,p)=>{let[g,v,m,f]=u.boxes[p];Object.assign(d.style,{left:l(g),top:l(v),width:l(m),height:l(f)})}),o&&(u.cap?Object.assign(o.style,{left:l(u.cap[0]),top:l(u.cap[1]),width:l(u.cap[2]),display:""}):o.style.display="none"),r.style.width=l(u.w),h&&this.layout()};return a.forEach((h,u)=>{let d=()=>{h.naturalWidth&&(s[u]=h.naturalWidth/h.naturalHeight,c(!0))};h.addEventListener("load",d),h.addEventListener("error",()=>{h.style.visibility="hidden"}),h.complete&&d()}),c(!1),r},capOf(n){let e=n.find(t=>t.caption&&he(t.caption).trim());return e?he(e.caption).trim():""},addDuo(n){this.addFit("wht duo",n,s=>{let r=263*s[0],a=263*s[1];return{w:2*46+r+16+a,boxes:[[46,46,r,263],[46+r+16,46,a,263]]}})},addBig2(n){let e=Math.max(16,Math.min(34,Bi().top)),t=8,i=355-2*e;this.addFit("big2",n,s=>{let r=i*s[0],a=(i-t)/(1/s[1]+1/s[2]),o=a/s[1];return{w:2*e+r+t+a,boxes:[[e,e,r,i],[e+r+t,e,a,o],[e+r+t,e+o+t,a,i-t-o]]}})},addCollage(n){let e=(t,i,s)=>i/t>s?[s*t,s]:[i,i/t];this.addFit("wht collage",n,t=>{let[i,s]=e(t[0],210,263),r=46+i+26,[a,o]=e(t[1],230,160),l=30+o+20,[c,h]=e(t[2],150,315-l);return{w:Math.max(r+a,r+c+120)+46,boxes:[[46,46,i,s],[r,30,a,o],[r,l,c,h]],cap:[r+c+16,l+2,96]}},this.capOf(n))},addTrio(n){this.addFit("trio",n,i=>{let s=230,r=i[0]+i[1]+i[2];s*r>1100&&(s=1100/r);let a=(355-s)/2,o=34,l=i.map(c=>{let h=[o,a,s*c,s];return o+=s*c+10,h});return{w:o-10+34,boxes:l}})},addGrid(n){let e=Math.max(16,Math.min(34,Bi().top)),t=8,i=355-2*e;this.addFit("grid4",n,s=>{let r=s[0]+s[1],a=s[2]+s[3],o=t+(i-t)/(1/r+1/a),l=(o-t)/r,c=(o-t)/a,h=e+l+t;return{w:o+2*e,boxes:[[e,e,l*s[0],l],[e+l*s[0]+t,e,l*s[1],l],[e,h,c*s[2],c],[e+c*s[2]+t,h,c*s[3],c]]}})},addOffset(n){let i=n.caption?he(n.caption).trim():"";this.addFit("wht offset",[n],s=>{let r=Math.min(170*s[0],300),a=r/s[0];return{w:Math.max(360,46+r+170),boxes:[[46,309-a,r,a]],cap:[46+r+24,46,130]}},i)},addInset(n){let e=n.caption?he(n.caption).trim():"";this.addFit("inset",[n],t=>{let s=Math.min(200*t[0],360),r=s/t[0],a=(355-r)/2-(e?10:0);return{w:s+140,boxes:[[70,a,s,r]],cap:[70,a+r+10,s]}},e)},addMat(n){let t=n.caption?he(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${xe(bt(n.src))}" alt="" draggable="false" decoding="async" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${xe(t)}</p>`:"")),r=s.querySelector("img"),a=()=>{if(!r.naturalWidth)return;let o=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=o+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=o+"px"),this.layout()};r.addEventListener("load",a),r.complete&&a(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(o=>o!==s),this.layout()})},addMedia(n,e=355,t="",i=!0,s=null){let r=Dr(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let a=r==="video",o=this.addPanel("media",e,""),l=document.createElement(a?"video":"img");if(l.draggable=!1,l.style.height=e+"px",a){Object.assign(l,{src:bt(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",_e("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),o.querySelector(".in").appendChild(u)}else l.src=bt(n),l.alt="";let c=()=>{let u=Math.round(a?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(o.style.width=u+"px",this.layout())};l.addEventListener(a?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(o)||this.panels.length<2||(o.remove(),this.panels=this.panels.filter(u=>u!==o),this.layout())}),o.querySelector(".in").prepend(l);let h=s?he(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",p=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${xe(d)}</b> `:"")+xe(p),o.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?Ha(n):Va(n),l=document.createElement("div");l.className="cover";let c=e==="vimeo"&&o&&!ty(this.post,n),h=this.post&&this.post.thumb?bt(this.post.thumb):"",u=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:c?"":h;if(u||c){let p=document.createElement("img");p.alt="",p.draggable=!1,p.onerror=()=>p.remove(),u?p.src=u:ey(o).then(g=>{g||h?p.src=g||h:p.remove()}),l.appendChild(p)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let d=document.createElement("button");d.type="button",d.className="play",d.setAttribute("aria-label",_e("play")),d.addEventListener("click",()=>{let p=document.createElement("iframe");p.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:Ih(o,"autoplay=1&title=0&byline=0&portrait=0"),p.allow="autoplay; fullscreen; picture-in-picture",p.allowFullscreen=!0,p.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(p)}),l.appendChild(d),a.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=Io(e),a=Bi(),o=355-a.bottom;e==="project"&&V.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(L,C)=>r?[L===0?a.side:Math.floor(a.gutter/2),L===C-1?a.side:Math.ceil(a.gutter/2)]:[i,t-i-s],c=he(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=he(n.subtitle),u=V.section.def,d=n.tags.filter(L=>L!=="featured").map(L=>u.tags.find(C=>C.id===L)).filter(Boolean).map(L=>he(L.label)),p=d.length?`${xe(_e("postedIn"))} <span>${d.map(xe).join(", ")}</span>`:"",g=xe([n.date,he(n.place)].filter(Boolean).join(" | ")),v=Sr(he(n.body)),m=document.createElement("div");m.className="txt",m.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(m),m.innerHTML=`<h2 class="ttl" style="position:static">${xe(c)}</h2>${h?`<p class="stl" style="position:static">${xe(h)}</p>`:""}`;let f=m.firstChild.offsetHeight,S=h?m.lastChild.offsetHeight+6:0,b=e==="project"?z0(n):[],I="";if(b.length){let L=(Dt.find(C=>C.def.id===b[0].section)||{}).def;I=`${xe((L?he(L.name):_e("skills")).trim())} ${b.map((C,N)=>`<span class="it"><button type="button" class="go" data-go="${xe(C.id)}">${xe(he(C.title).trim())}</button>${N<b.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let L=`<div class="fecha">${g}</div>${p?`<div class="posted">${p}</div>`:""}${I?`<div class="posted skl-tags">${I}</div>`:""}`;m.innerHTML=`<div class="meta" style="position:static">${L}</div>`;let C=m.firstChild.offsetHeight,N=o-13,H=N-C,M=V.section.def.skills?Xo(n).length:0,w="",F=0;M&&(w=`<span class="lbl">${xe(_e(Co(ve,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${M}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,m.innerHTML=`<div class="relp" style="position:static">${w}</div>`,F=m.firstChild.offsetHeight);let ie=F?H-F-18:H,ce=a.top+f+6,k=a.top+f+S+20,G=Nd(v,s,[o-k,o-a.top],m);m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]}</div>`;let z=G.length===1?k:a.top;if(G[G.length-1]&&z+m.firstChild.offsetHeight>ie-12){let X=Nd(G.pop(),s,F?[o-z,ie-12-a.top]:[ie-12-z,ie-12-a.top],m);G.push(...X),F&&X.length===1&&G.push("")}let ne=0;if(F){z=G.length===1?k:a.top,m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]||""}</div>`;let X=z+(G[G.length-1]?m.firstChild.offsetHeight:0)+18;ne=G[G.length-1]?Math.min(ie,Math.max(Math.round((a.top+o)/2)-10,X)):a.top+4}G.forEach((X,$)=>{let ee=$===G.length-1,[Q,ue]=l($,G.length);this.addPanel("txt",Q+s+ue,($===0?`<h2 class="ttl" style="left:${Q}px;top:${a.top}px;width:${s}px">${xe(c)}</h2>${h?`<p class="stl" style="left:${Q}px;top:${ce}px;width:${s}px">${xe(h)}</p>`:""}`:"")+`<div class="body" style="left:${Q}px;top:${$===0?k:a.top}px;width:${s}px">${X}</div>`+(ee&&F?`<div class="relp" style="left:${Q}px;top:${ne}px;width:${s}px">${w}</div>`:"")+(ee?`<div class="meta" style="left:${Q}px;top:${H}px;width:${s}px">${L}</div>`:""))})}else{let L=13+f+4,C=13+f+S+10,N=C+20,H=N+18+20;Nd(v,s,[355-H-14,327],m).forEach((w,F)=>{this.addPanel("txt",t,(F===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${xe(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${L}px;width:${s}px">${xe(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${C}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${N}px;width:${s}px">${p}</div>`:"")+`<div class="body" style="left:${i}px;top:${F===0?H:14}px;width:${s}px">${w}</div>`)})}m.remove()},addTeam(n){let e=n.team.map(C=>ve.posts.find(N=>N.id===C)).filter(Boolean),t=Bi(),i=t.top,s=355-t.bottom,r=t.side,a=Math.max(24,Math.min(36,t.gutter)),o=C=>String(C+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${xe(_e("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((C,N)=>`<li data-i="${N}"><b>${o(N)}</b><span><span class="nm">${xe(he(C.title).trim())}</span>${he(C.subtitle).trim()?`<i>${xe(he(C.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${xe(_e("with"))}</i> ${xe(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let p=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],v=r+p+a,m=v,f=i,S=0,b=0,I=v;e.forEach((C,N)=>{let H=g[N%g.length]*(e.length>12?.8:1),M=16;f+H+M>s&&f>i+1&&(m+=S+16,b++,f=i+(b%2?34:0),S=0);let w=Qo(C)&&C.published!==!1,F=document.createElement(w?"button":"div");F.className="face"+(w?" go":""),w&&(F.type="button",F.dataset.go=C.id),F.dataset.i=N,Object.assign(F.style,{left:m+"px",top:f+"px",width:H+"px",height:H+"px"});let ie=!C.thumb&&(qd(C).find(k=>k!==n)||qd(C)[0]),ce=ie?` style="background:linear-gradient(var(--veil),var(--veil)),url('${xe(bt(Zs(ie))).replace(/'/g,"%27")}') center/cover"`:"";F.innerHTML=(C.thumb?Pr(C.thumb,'alt="" draggable="false"'):`<span class="mono"${ce}>${xe(Na(he(C.title)))}</span>`)+`<b class="n">${o(N)}</b>`,F.setAttribute("aria-label",he(C.title)),c.appendChild(F),S=Math.max(S,H),f+=H+M,I=Math.max(I,m+H)}),l.style.width=Math.ceil((e.length?I:r+p)+r)+"px";let L=(C,N)=>c.querySelectorAll(`[data-i="${C}"]`).forEach(H=>H.classList.toggle("on",N));c.querySelectorAll("[data-i]").forEach(C=>{["pointerenter","focus"].forEach(N=>C.addEventListener(N,()=>L(C.dataset.i,!0))),["pointerleave","blur"].forEach(N=>C.addEventListener(N,()=>L(C.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(C=>{let N=c.querySelector(`.face.go[data-i="${C.dataset.i}"]`);N&&(C.classList.add("go"),C.dataset.go=N.dataset.go)})},addForm(){let n=Bi(),{x:e,colW:t}=Io("project"),i=n.gutter||40;this.addPanel("txt contact cform",e+t*2+i+e,`<div class="cbox" style="left:${e}px;top:${n.top}px;bottom:${n.bottom}px;width:${t*2+i}px;--cf-gap:${i}px">${iy("pnl")}</div>`),sy(ms.lastElementChild)},addContact(n){let e=Bi(),{width:t,x:i,colW:s}=Io("project"),r=xe,a=(n.link||"").replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""),o=he(n.title).trim();o&&!/[.!?]$/.test(o)&&(o+=".");let l=he(n.subtitle).trim();this.addPanel("txt contact",t,`<div class="cbox" style="left:${i}px;top:${e.top}px;bottom:${e.bottom}px;width:${s}px"><h2 class="ttl">${r(o)}</h2>${l?`<p class="stl">${r(l)}</p>`:""}<div class="body">${oy(Sr(he(n.body)))}${n.link?`<p class="site"><a href="${r(n.link)}" target="_blank" rel="noopener">${r(a)}</a></p>`:""}</div></div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return en.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){ms.querySelectorAll("video").forEach(n=>n.pause()),ms.innerHTML="",this.panels=[],en.hidden=!0,en.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},rubber(n){let e=Math.min(0,this.end),t=Wc,i=s=>t*(1-1/(s/t*.55+1));return n>0?i(n):n<e?e-i(e-n):n},push(n){let e=Math.min(0,this.end),t=this.finalpos+n;if(t>0||t<e){let i=t>0?t:t-e,s=!this.over||Math.sign(i)===Math.sign(this.over);this.finalpos=Math.max(e,Math.min(0,t)),this.ov+=i*12*(s?Math.pow(Math.max(0,1-Math.abs(this.over)/Wc),2):1)}else this.finalpos=t},step(){if(!this.open)return;let n=Math.min(0,this.end);if(this.dragging){let t=(dh-this.xprev)*1.5/(this.scale||1);this.finalpos+=t,this.vel=this.vel*.6+t*.4,this.x-=(this.x-this.finalpos)*vn(oe.easing),this.xprev=dh}else if(Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*vn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<n&&(this.finalpos=n),this.over||this.ov){let t=Math.min(.1,Wo/_0),i=17,s=Math.exp(-i*t),r=this.over,a=this.ov,o=a+i*r;this.over=Math.max(-Wc,Math.min(Wc,(r+o*t)*s)),this.ov=(a-i*o*t)*s,Math.abs(this.over)<.2&&Math.abs(this.ov)<5&&(this.over=this.ov=0)}let e=Math.round(this.x+this.over);e!==this.tx&&(this.tx=e,ms.style.transform=`translateX(${e}px)`)}},Zt=document.createElement("div");Zt.id="postv";Zt.hidden=!0;Zt.setAttribute("role","dialog");Zt.setAttribute("aria-modal","true");document.body.appendChild(Zt);var lS=()=>bh(),Qs={open:!1,pushed:!1,keepHistory:!1,post:null,build(n,e){this.post=n,this.open=!0;let t=V.section.def,i=n.media.filter(h=>h&&h.src),s=xe,r=he(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let a=he(n.subtitle).trim(),o=[];o.push(`<div class="pv-bar"><span class="pv-sec">${s(he(t.name).trim())}</span><button type="button" class="pv-x" aria-label="${s(_e("close"))}"><span></span><span></span></button></div>`);let l=i[0]?i[0]:n.thumb?{src:n.thumb}:null;if(l&&o.push(this.media(l,"pv-hero"+(!i[0]&&Oo(n)?" pv-logo":""))),e==="place"){let h=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");o.push(`<div class="pv-txt"><h1 class="pv-ttl">${s(r)}</h1>${a?`<p class="pv-stl">${s(a)}</p>`:""}`+(n.link?`<p class="pv-site"><a href="${s(n.link)}" target="_blank" rel="noopener">${s(h)}</a></p>`:"")+`<div class="pv-body pv-contact">${oy(Sr(he(n.body)))}</div></div>`+(Fo.to?`<div class="pv-form">${iy("pv")}</div>`:""))}else{if(o.push(this.text(n,r,a,t)),t.skills&&o.push(this.relations(n)),e==="text"?i.slice(1).forEach(h=>o.push(this.media(h,"pv-full"))):o.push(this.gallery(i.slice(1))),t.skills||o.push(this.relations(n)),e!=="text"&&(n.team&&n.team.length||n.credits)&&o.push(this.team(n)),n.logos&&n.logos.length&&o.push(`<section class="pv-logos"><h2 class="pv-h">${s(_e("partners"))}</h2><div class="pv-lgrid">${n.logos.map(h=>`<span><img data-src="${s(h)}" alt=""></span>`).join("")}</div></section>`),n.link){let h=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,u=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");o.push(`<p class="pv-link"><span>${s(String(_e("visit")).replace(/\s*:\s*$/,""))}</span><a href="${s(h)}" target="_blank" rel="noopener">${s(u)} \u2197</a></p>`)}o.push(this.next(n))}Zt.innerHTML=`<div class="pv-page">${o.join("")}</div>`;let c=Zt.querySelector(".pv-form");if(c&&sy(c),this.wire(),Zt.hidden=!1,Zt.scrollTop=0,Zt.offsetWidth,Zt.classList.add("on"),document.body.classList.add("pv-open"),!this.pushed&&!St)try{history.pushState({hcv:1},"",location.href),this.pushed=!0}catch{}},text(n,e,t,i){let s=xe,r=Sr(he(n.body)),a=r.split(/(?=<h3[\s>])/i),o=/^\s*<h3/i.test(a[0])?"":a.shift(),l=a.map(p=>{let g=/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(p.trim());return g?`<details class="pv-fold"><summary>${g[1]}</summary><div class="pv-body">${g[2]}</div></details>`:p}).join(""),c=n.tags.filter(p=>p!=="featured").map(p=>i.tags.find(g=>g.id===p)).filter(Boolean).map(p=>he(p.label)),h=[n.date,he(n.place)].filter(Boolean).join(" | "),u=z0(n),d="";if(u.length){let p=(Dt.find(g=>g.def.id===u[0].section)||{}).def;d=`<p class="pv-meta"><span>${s((p?he(p.name):_e("skills")).trim())}</span> ${u.map(g=>`<button type="button" class="go" data-go="${s(g.id)}">${s(he(g.title).trim())}</button>`).join(", ")}</p>`}return`<div class="pv-txt"><h1 class="pv-ttl">${s(e)}</h1>${t?`<p class="pv-stl">${s(t)}</p>`:""}`+(h?`<p class="pv-date">${s(h)}</p>`:"")+`<div class="pv-body">${o||""}</div>`+(l?`<div class="pv-folds">${l}</div>`:"")+(c.length?`<p class="pv-meta"><span>${s(_e("postedIn"))}</span> ${c.map(s).join(", ")}</p>`:"")+d+"</div>"},media(n,e){let t=xe,i=Dr(n.src),s=n.caption?he(n.caption).trim():"",r=s?`<figcaption>${t(s)}</figcaption>`:"";if(i==="youtube"||i==="vimeo"){let a=i==="youtube"?Ha(n.src):Va(n.src),o=i==="vimeo"&&a&&!ty(this.post,n.src),l=i==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:o?"":this.post&&this.post.thumb?bt(this.post.thumb):"";return`<figure class="${e} pv-embed" data-kind="${i}" data-id="${t(a||"")}"><div class="pv-cover">${l?`<img src="${t(l)}" alt="">`:o?`<img data-vimeo="${t(a)}" alt="">`:""}<button type="button" class="play" aria-label="${t(_e("play"))}"></button><span class="brand">${i==="youtube"?"YouTube":"Vimeo"}</span></div>${r}</figure>`}return i==="video"?`<figure class="${e}"><video src="${t(bt(n.src)+(/#t=/.test(n.src)?"":"#t=0.1"))}" controls playsinline preload="metadata"></video>${r}</figure>`:`<figure class="${e}"><img src="${t(bt(n.src))}" alt="" loading="lazy" decoding="async">${r}</figure>`},gallery(n){let e=u=>Dr(u.src)==="image",t=[],i=xe,s=u=>`<div class="pv-row">${u.map(d=>`<img src="${i(bt(d.src))}" alt="" loading="lazy" decoding="async">`).join("")}</div>`,r=["full","mat","pair","full","quad","full","big2","mat","full","pair"],a={pair:2,quad:4,big2:3},o=String(this.post.id||""),l=0;for(let u of o)l=l*31+u.charCodeAt(0)>>>0;let c=l%r.length,h=0;for(;h<n.length;){let u=n[h];if(!e(u)){t.push(this.media(u,"pv-full")),h++;continue}let d=r[c++%r.length],p=a[d]||1,g=n.slice(h,h+p);if(p>1&&!(g.length===p&&g.every(e))){t.push(this.media(u,"pv-full")),h++;continue}let v=g.map(f=>f.caption?he(f.caption).trim():"").filter(Boolean)[0]||"",m=v?`<figcaption>${i(v)}</figcaption>`:"";d==="mat"?t.push(this.media(u,"pv-mat")):d==="pair"?t.push(`<figure class="pv-grid">${s(g)}${m}</figure>`):d==="quad"?t.push(`<figure class="pv-grid">${s(g.slice(0,2))}${s(g.slice(2))}${m}</figure>`):d==="big2"?t.push(`<figure class="pv-grid"><img class="pv-one" src="${i(bt(g[0].src))}" alt="" loading="lazy">${s(g.slice(1))}${m}</figure>`):t.push(this.media(u,"pv-full")),h+=p}return t.length?`<div class="pv-gal">${t.join("")}</div>`:""},relations(n){let e=Xo(n);if(!e.length)return"";let t=xe,i=Co(ve,n).length>0;return`<section class="pv-rel"><h2 class="pv-h">${t(_e(i?"skillProjects":"together"))} <span>${e.length}</span></h2><div class="pv-tiles">`+e.map(s=>{let r=Zs(s),a=[s.date,he(s.place)].filter(Boolean).join(" | ");return`<button type="button" class="go pv-tile" data-go="${t(s.id)}">${r?Pr(r,'alt="" loading="lazy"'):`<span class="mono">${t(Na(he(s.title)))}</span>`}<span class="t">${t(he(s.title).trim())}</span>${a?`<span class="m">${t(a)}</span>`:""}</button>`}).join("")+"</div></section>"},team(n){let e=xe,t=(n.team||[]).map(i=>ve.posts.find(s=>s.id===i)).filter(Boolean);return`<section class="pv-team"><h2 class="pv-h">${e(_e("who"))}</h2><div class="pv-faces">`+t.map(i=>{let s=Qo(i)&&i.published!==!1,r=s?"button":"div";return`<${r} ${s?`type="button" class="go pv-face" data-go="${e(i.id)}"`:'class="pv-face"'}>${i.thumb?Pr(i.thumb,'alt="" loading="lazy"'):`<span class="mono">${e(Na(he(i.title)))}</span>`}<span class="t">${e(he(i.title).trim())}</span>${he(i.subtitle).trim()?`<span class="m">${e(he(i.subtitle).trim())}</span>`:""}</${r}>`}).join("")+"</div>"+(n.credits?`<p class="pv-with"><i>${e(_e("with"))}</i> ${e(n.credits)}</p>`:"")+"</section>"},next(n){let e=V.data&&V.data.list||[],t=e.indexOf(n);if(e.length<2||t<0)return"";let i=e[(t+1)%e.length],s=Zs(i),r=xe;return`<button type="button" class="go pv-next" data-go="${r(i.id)}"><span class="l">${r(_e("nextProject"))} \u2192</span><span class="t">${r(he(i.title).trim())}</span>${s?Pr(s,'alt="" loading="lazy"'):""}</button>`},wire(){Zt.querySelector(".pv-x").addEventListener("click",()=>Ms()),Zt.querySelectorAll(".pv-row img").forEach(n=>{let e=()=>{n.naturalWidth&&(n.style.flexGrow=(n.naturalWidth/n.naturalHeight).toFixed(3))};n.addEventListener("load",e),n.complete&&e()}),Zt.querySelectorAll("img[data-vimeo]").forEach(n=>{let e=this.post&&this.post.thumb?bt(this.post.thumb):"";ey(n.dataset.vimeo).then(t=>{t||e?n.src=t||e:n.remove()})}),Zt.querySelectorAll("img").forEach(n=>n.addEventListener("error",()=>{let e=n.closest("figure.pv-full, figure.pv-mat");e&&!e.classList.contains("pv-hero")?e.remove():n.style.visibility="hidden"})),Zt.querySelectorAll(".pv-lgrid img[data-src]").forEach(n=>ly(n.dataset.src).then(e=>{n.src=e.src,n.classList.toggle("raw",!!e.raw)})),Zt.querySelectorAll(".pv-embed").forEach(n=>n.querySelector(".play").addEventListener("click",()=>{let e=n.dataset.kind,t=n.dataset.id,i=document.createElement("iframe");i.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&playsinline=1&rel=0`:Ih(t,"autoplay=1&title=0&byline=0&portrait=0"),i.allow="autoplay; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.title=e==="youtube"?"YouTube":"Vimeo",n.querySelector(".pv-cover").replaceWith(i)}))},close(){if(this.open){if(this.open=!1,Zt.querySelectorAll("video").forEach(n=>n.pause()),Zt.classList.remove("on"),document.body.classList.remove("pv-open"),setTimeout(()=>{this.open||(Zt.hidden=!0,Zt.innerHTML="")},420),this.keepHistory){this.keepHistory=!1;return}if(this.pushed){this.pushed=!1;try{history.back()}catch{}}}}};Zt.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Qs.keepHistory=!0,il(e.dataset.go),Qs.keepHistory=!1)});Zt.addEventListener("keydown",n=>{n.code==="Escape"&&Ms()});var Id=new Map;function ly(n){if(Id.has(n))return Id.get(n);let e=Yi(n).then(t=>{let i=Math.min(1,480/Math.max(t.naturalWidth,t.naturalHeight)),s=Math.max(1,Math.round(t.naturalWidth*i)),r=Math.max(1,Math.round(t.naturalHeight*i)),a=document.createElement("canvas");a.width=s,a.height=r;let o=a.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,s,r);let l;try{l=o.getImageData(0,0,s,r)}catch{return{src:bt(n),raw:!0}}let c=l.data,h=w=>(.2126*c[w]+.7152*c[w+1]+.0722*c[w+2])/255,u=0,d=0,p=0,g=w=>{u++,c[w+3]<40?d++:p+=h(w)};for(let w=0;w<s;w++)g(w*4),g(((r-1)*s+w)*4);for(let w=0;w<r;w++)g(w*s*4),g((w*s+s-1)*4);let v=d>u*.5,m=v?0:p/Math.max(1,u-d),f=0,S=0;if(v){for(let w=0;w<c.length;w+=16)c[w+3]>128&&(f+=h(w),S++);f=S?f/S:0}let b=v?f<.5?1:0:m,I=Math.max(.25,Math.max(b,1-b));for(let w=0;w<c.length;w+=4){let F=c[w+3]/255,ie=h(w),ce=(Math.max(c[w],c[w+1],c[w+2])-Math.min(c[w],c[w+1],c[w+2]))/255,k=Math.min(1,Math.max(Math.abs(ie-b),ce*.8)/I);k=k<.08?0:Math.min(1,(k-.08)*1.35),c[w]=c[w+1]=c[w+2]=255,c[w+3]=Math.round(255*k*F)}o.putImageData(l,0,0);let L=s,C=r,N=-1,H=-1;for(let w=0;w<r;w++)for(let F=0;F<s;F++)c[(w*s+F)*4+3]>24&&(F<L&&(L=F),F>N&&(N=F),w<C&&(C=w),w>H&&(H=w));if(N<L)return{src:a.toDataURL("image/png")};let M=document.createElement("canvas");return M.width=N-L+1,M.height=H-C+1,M.getContext("2d").drawImage(a,-L,-C),{src:M.toDataURL("image/png")}}).catch(()=>({src:bt(n),raw:!0}));return Id.set(n,e),e}function Nd(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){o=null,d.textContent.trim()&&a.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){o=null;return}d.nodeType===3&&!d.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,p=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,p&&s.appendChild(p)};for(let d of a){let p=d.cloneNode(!0);if(s.appendChild(p),s.offsetHeight<=h())continue;if(s.removeChild(p),d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}if(d.nodeName==="UL"||d.nodeName==="OL"){let f=+(d.getAttribute("start")||1),S=d.cloneNode(!1),b=0;s.appendChild(S);for(let I of[...d.children]){let L=I.cloneNode(!0);S.appendChild(L),b++,!(s.offsetHeight<=h())&&(S.children.length===1&&[...s.children].every(C=>C===S||C.nodeName==="H3")||(S.removeChild(L),u(),S=d.cloneNode(!1),d.nodeName==="OL"&&S.setAttribute("start",String(f+b-1)),s.appendChild(S),S.appendChild(L)))}continue}let g=[];(function f(S,b){S.childNodes.forEach(I=>{I.nodeType===3?I.textContent.split(/(\s+)/).forEach(L=>L&&g.push({w:L,path:b})):f(I,[...b,I])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let m=({w:f,path:S})=>{let b=v;for(let I of S){let L=b.lastChild;(!L||L.nodeType!==1||L.dataset.src!==I.outerHTML)&&(L=I.cloneNode(!1),L.dataset.src=I.outerHTML,b.appendChild(L)),b=L}b.appendChild(document.createTextNode(f))};for(let f of g)if(m(f),s.offsetHeight>h()){let S=function b(I){return I.lastChild&&I.lastChild.nodeType===1?b(I.lastChild):I}(v);S.removeChild(S.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&m(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var dh=0,gs=null;en.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe, input, textarea, select, label, button")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(gs={id:n.pointerId,x:n.clientX,y:n.clientY},dh=n.clientX)});en.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(gs||qe.dragging)){Ga();return}if(dh=n.clientX,!gs||n.pointerId!==gs.id||qe.dragging)return;let e=n.clientX-gs.x,t=n.clientY-gs.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){qe.dragging=!0,qe.xprev=gs.x,qe.finalpos=qe.x,qe.vel=0;try{en.setPointerCapture(n.pointerId)}catch{}en.classList.add("grabbing")}});en.addEventListener("click",n=>{qe.justDragged&&(n.preventDefault(),n.stopPropagation(),qe.justDragged=!1)},!0);en.addEventListener("wheel",n=>{if(n.preventDefault(),!qe.open||qe.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;qe.push(-e*t/(qe.scale||1))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var Ga=()=>{qe.dragging&&(qe.justDragged=!0,setTimeout(()=>{qe.justDragged=!1},0),qe.finalpos+=(qe.vel||0)*10),qe.vel=0,gs=null,qe.dragging=!1,en.classList.remove("grabbing")};en.addEventListener("pointerup",Ga);en.addEventListener("pointercancel",Ga);en.addEventListener("lostpointercapture",n=>{n.target===en&&Ga()});window.addEventListener("pointerup",()=>{(gs||qe.dragging)&&Ga()});Nf.addEventListener("pointerdown",()=>Ms());en.addEventListener("click",n=>{if(!qe.open||qe.justDragged||n.target.closest(".pnl, a, button, iframe, video, input"))return;let e=en.querySelectorAll("#strip .pnl");if(!e.length)return;let t=e[0].getBoundingClientRect(),i=e[e.length-1].getBoundingClientRect();(n.clientX>i.right+4||n.clientX<t.left-4)&&Ms()});function nl(n=-1,e=0){w0(),n===-1&&(n=V.currentSection||0),Ai(),n!==V.currentSection&&Of(),V.currentSection=n,V.resetData(),V.selected=e,Ch(),wf(),Ph();try{history.replaceState(null,"","#"+V.section.def.id)}catch{}rr("#"+V.section.def.id,he(V.section.def.name).trim())}function cy(){Ai(),V.selected=0,Ch(),j0()}function hy(n){(n==="newer"?V.data.newer():V.data.older())&&cy()}function cS(n){V.data.changeCategory(n),Y0.textContent=V.data.currentCatName,cy(),Ph()}function jo(n){Ai(),V.selected=n,No()}var qg=0;function il(n){let e=ve.posts.find(h=>h.id===n),t=e?Dt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!bn)return;w0(),Ai();let i=t!==V.currentSection;i&&Of(),V.currentSection=t,i&&V.resetData();let s=V.data,r=!s.list.includes(e);r&&s.changeCategory(s.categoryList.some(h=>h.id==="")?"":s.tagOf(e));let a=s.list.indexOf(e);if(a<0)return;let o=a<s.first||a>=s.last;if(o){let h=s.per;s.first=Math.floor(a/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!o&&Ie){jo(l);return}V.selected=l,Ch(),wf(),Ph();try{history.replaceState(null,"","#"+V.section.def.id)}catch{}rr("#"+V.section.def.id,he(V.section.def.name).trim());let c=++qg;Go(.5,()=>{c===qg&&V.data===s&&s.posts[l]===e&&jo(l)})}ms.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),il(e.dataset.go))});var hS=(n,e=V.section&&V.section.def)=>e?n&&e.open==="focus3d"&&((e.tags||[]).some(t=>t.page&&(n.tags||[]).includes(t.id))||!Oo(n))?"strip":e.open:"",Nh=()=>hS(V.data&&V.data.posts[V.selected]);function No(){if(!Ie||!V.data.posts[V.selected])return;let n=Nh();sl(null),kf(null),Ai(),V.postOpen=!0,(n==="strip"||n==="focus3d")&&lS()?(Qs.build(V.data.posts[V.selected],V.section.def.card),Yo.classList.add("hidden"),ji=!1,nn.classList.remove("dragging"),Yn=!0,ko(V.selected)):n==="strip"?(Nf.hidden=!1,qe.build(V.data.posts[V.selected],V.section.def.card),Yo.classList.add("hidden"),ji=!1,nn.classList.remove("dragging"),Yn=!0,ko(V.selected)):(Yn=!0,ko(V.selected),Ie.openPost3D()),Nr(),Cf(V.data.posts[V.selected])}function Ms(){V.postOpen&&(V.postOpen=!1,Qs.open?(Qs.close(),Yo.classList.remove("hidden")):qe.open?(qe.close(),Nf.hidden=!0,Yo.classList.remove("hidden")):Ie&&Ie.closePost3D(),Nr(),Cf(null))}function Ai(){V.postOpen&&Ms()}function uS(){b0(!oe.animationMode),Q0(),Ie&&Ie.resetPostPosition(),Yn=!0}var ws=oe.cameraDistanceProportion,nr=()=>((Es()||{}).def||{}).layout==="map",dS=()=>nr()?60:oe.cameraZoomMin;function Df(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),uy())}function Uf(){oe.cameraDistanceProportion>dS()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),uy())}function uy(){(nr()||li())&&(V.cameraY=za()),q0()}function Of(){oe.cameraDistanceProportion!==ws&&(oe.cameraDistanceProportion=ws,Rh())}var Xg=!1;function dy(n){if(!bn)return;Xg||(Xg=!0,ef(),K0=setTimeout(uh,6e3));let e=V.postOpen&&qe.open,t=V.postOpen&&!qe.open;switch(n.code){case"ArrowLeft":ps("ArrowLeft"),e?qe.action("LEFT"):(Ai(),Ad("PREVIOUS"),t&&No());break;case"ArrowRight":ps("ArrowRight"),e?qe.action("RIGHT"):(Ai(),Ad("NEXT"),t&&No());break;case"ArrowUp":ps("ArrowUp"),e||Dw();break;case"ArrowDown":ps("ArrowDown"),e||Uw();break;case"Tab":ps("Tab"),e?(Ms(),Ad("NEXT"),No()):nl((V.currentSection+1)%Dt.length);break;case"KeyK":ar.classList.contains("open")?uh():ef();break;case"KeyA":ps("KeyA"),uS();break;case"Equal":case"NumpadAdd":ps("Equal"),e||Uf();break;case"Minus":case"NumpadSubtract":ps("Minus"),e||Df();break;case"Space":ps("Space"),Ie&&Ie.checkPostSelected(),V.postOpen?Ms():No();break;case"Escape":Ai();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Mt||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||n.target.closest&&n.target.closest("input, textarea, select, [contenteditable]")||dy(n)});var Yg=new Tc,jg=new tt;function fh(n,e){if(!Ss||!Ie)return null;jg.set(n/zt*2-1,-(e/Ut)*2+1),Yg.setFromCamera(jg,Ln);let t=Yg.intersectObjects([...Es().blockers,...Ie.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:fS(n,e)||(t?t.object.userData:null)}var $c=new U;function fS(n,e){if(!Ie||!Ie.net)return null;let t=null,i=14;for(let s of Ie.net.hits){if(!s.visible)continue;s.getWorldPosition($c).project(Ln);let r=($c.x+1)/2*zt-n,a=(1-$c.y)/2*Ut-e,o=Math.hypot(r,a);o<i&&$c.z<1&&(i=o,t=s.userData)}return t}var Fn=null,Ei=null,tf=0,nf=0;nn.addEventListener("pointerdown",n=>{if(!bn||Fn!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Xi.size>0)return;Js=tf=n.clientX,Ks=nf=n.clientY;let e=fh(n.clientX,n.clientY);Ai(),Ei=e&&e.post?e:null,Ei&&Ei.face==="back"&&(Ei.post.view.focus(Ei.post.id_),Yn=!0),Fn=n.pointerId,nn.setPointerCapture(n.pointerId),nn.classList.add("dragging"),Qc=Js,eh=Ks,Yn=!1,ji=!0});function kr(n,e=!1){if(n.pointerId===Fn){if(Fn=null,nn.classList.remove("dragging"),ji&&(Yn=!0,ji=!1,li()&&(V.degreeCamera=Mf(V.degreeCamera),V.cameraY=za())),e){Ei=null;return}if(Ei&&Ei.face==="front"&&Math.hypot(n.clientX-tf,n.clientY-nf)<6){let t=fh(n.clientX,n.clientY);t&&t.post===Ei.post&&jo(t.post.id_)}else if(!Ei&&Math.hypot(n.clientX-tf,n.clientY-nf)<6){let t=fh(n.clientX,n.clientY);t&&t.netNode?V0(t.netNode,n.clientX,n.clientY):Sh()}Ei=null}}nn.addEventListener("pointerup",kr);nn.addEventListener("pointercancel",n=>kr(n,!0));nn.addEventListener("lostpointercapture",n=>{n.pointerId===Fn&&kr(n,!0)});window.addEventListener("pointerup",n=>{Fn!==null&&n.pointerId===Fn&&n.target!==nn&&kr(n,!0)});window.addEventListener("blur",()=>{Fn!==null&&kr({pointerId:Fn},!0),Ga()});var Dd=!1,Ca=null,Da=null,Do=null;function kf(n){Do!==n&&(Do&&Do.hoverBack(!1),Do=n,n&&n.hoverBack(!0))}var fy=()=>bh()&&bn&&Ie&&["carousel","spiral"].includes(Ie.def.layout);function Bf(){return V.postOpen||!Ie?null:Da&&Da.view===Ie?Da:fy()?(Ie.checkPostSelected(),Ie.postViews[V.selected]||null):null}var pS=0;function mS(){++pS%6===0&&fy()&&sl(Bf())}function sl(n){Ca!==n&&(Ca&&Ca.hover(!1),Ca=n,n&&n.hover(!0))}nn.addEventListener("pointerleave",()=>{Da=null,sl(Bf()),kf(null)});nn.addEventListener("pointermove",n=>{if(Fn!==null&&n.pointerId===Fn&&n.pointerType==="mouse"&&n.buttons===0){kr(n,!0);return}Fn!==null&&n.pointerId!==Fn||(Js=n.clientX,Ks=n.clientY,Fn===null&&n.pointerType==="mouse"&&!Dd&&(Dd=!0,requestAnimationFrame(()=>{Dd=!1;let e=fh(Js,Ks);nn.classList.toggle("hover",!!(e&&e.post)),Da=e&&e.post&&e.face==="front"&&!V.postOpen?e.post:null,sl(Bf()),kf(e&&e.post&&e.face==="back"&&e.post.bhi&&!V.postOpen?e.post:null),e&&e.netNode&&!V.postOpen?V0(e.netNode,Js,Ks):Sh()})))});var Zg=0,Xi=new Map,Ra=null,py=()=>{let[n,e]=[...Xi.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!Mt||qe.open||!Xi.size&&n.target!==nn||(Xi.set(n.pointerId,{x:n.clientX,y:n.clientY}),Xi.size===2&&(Fn!==null&&kr({pointerId:Fn},!0),Ra={last:py()}))});window.addEventListener("pointermove",n=>{if(!Xi.has(n.pointerId)||(Xi.set(n.pointerId,{x:n.clientX,y:n.clientY}),!Ra||Xi.size<2||!bn))return;let e=py(),t=e/Ra.last;t>1.15?(Uf(),Ra.last=e):t<1/1.15&&(Df(),Ra.last=e)});var gS=n=>{Xi.delete(n.pointerId),Xi.size<2&&(Ra=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,gS));nn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!bn||e-Zg<220||!n.deltaY||e-J0<1400||(Zg=e,n.deltaY<0?Uf():Df())},{passive:!1});window.addEventListener("resize",()=>{let n=xs(),e=Ss&&Ie?ei||tl():null;X0(),q0(),Nr(),$0(e),xs()!==n&&Ie&&Ie.retexture(),wy(),sf(),qe.open&&(Sf(),clearTimeout(qe.relayout),qe.relayout=setTimeout(()=>{qe.open&&qe.post&&JSON.stringify(Io("project"))!==qe.geomKey&&(qe.build(qe.post,V.section.def.card),Nr())},250))});function Jg(){if(ve.settings.negativeToggle!==!1){if(_n=!_n,qo()&&xh(),!St)try{localStorage.setItem("hc-neg",(_n?"1":"0")+(qo()?"@"+Ir:""))}catch{}E0()}}(()=>{let n=document.getElementById("logo");if(!n)return;let e=0,t=0,i=Math.atan2(.38,-1),s=i,r=2.3,a=i,o=2.3,l=()=>{let d=n.offsetWidth/2;if(!d)return;if(o>2.02){n.style.webkitMaskImage=n.style.maskImage="";return}let p=d+Math.cos(a)*o*d,g=d+Math.sin(a)*o*d,v=Math.max(0,Math.min(1,1-o/.28)),m=d-v*Math.max(2,d*.085);n.style.webkitMaskImage=n.style.maskImage=`radial-gradient(circle ${d}px at ${p.toFixed(2)}px ${g.toFixed(2)}px, transparent ${(m-.6).toFixed(2)}px, #000 ${(m+.6).toFixed(2)}px)`},c=d=>{a=s=i,o=r=d,l()},h=()=>{let d=n.getBoundingClientRect(),p=d.width/2;if(!p)return;let g=e-(d.left+p),v=t-(d.top+p),m=Math.hypot(g,v);m>.5&&(i=Math.atan2(v,g));let f=m/p,S=Math.max(0,Math.min(1,(5.5-f)/4.5)),b=S*S*(3-2*S);c(f<=1?.62*f:.62+1.68*(1-b))},u=!1;window.addEventListener("pointermove",d=>{d.pointerType!=="mouse"||!n.classList.contains("toggle")||(e=d.clientX,t=d.clientY,u||(u=!0,requestAnimationFrame(()=>{u=!1,h()})))},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>c(2.3)),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&(i=Math.atan2(.38,-1),c(.55))}),n.addEventListener("blur",()=>c(2.3))})();["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Jg),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Jg())}))});var de=null,Ff=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function yS(){let n=(ve.settings.showreel||"").trim();if(!de){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i class="tri"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),de={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>vy()),de.x.addEventListener("click",qc),i.querySelector(".scrim").addEventListener("click",qc),de.snd.addEventListener("click",()=>my(!de.muted)),window.addEventListener("keydown",s=>{if(de.open){if(s.code==="Escape")s.preventDefault(),qc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!de.player||s.source!==de.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==de.muted&&(de.muted=r.info.muted,Zo())})}de.btn.hidden=!n,de.btn.setAttribute("aria-label","Showreel"),de.x.setAttribute("aria-label",_e("close")),n!==de.src&&(de.open&&qc(!0),de.src=n,de.kind=n?Dr(n):"",de.vid.innerHTML="",de.player=null);let e=de.kind==="youtube"?`https://www.youtube.com/watch?v=${Ha(n)}`:de.kind==="vimeo"?`https://vimeo.com/${Va(n)}`:"";de.ext.hidden=!e,e&&(de.ext.href=e,de.ext.textContent=(de.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Zo()}function Zo(){de&&(de.snd.innerHTML=Ff(!de.muted)+`<span>${_e(de.muted?"soundOn":"soundOff")}</span>`,de.snd.setAttribute("aria-pressed",String(!de.muted)))}function ph(n,e=[]){let t=de.player;if(!(!t||!t.contentWindow)){if(de.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(de.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function my(n){de.muted=n,Zo(),de.kind==="video"?de.player&&(de.player.muted=n,n||(de.player.volume=1)):(ph(n?"mute":"unMute"),n||ph("setVolume",[100]))}function vS(){if(!(!de||!de.src||de.open)){if(de.open=!0,de.last=document.activeElement,de.player)de.kind==="video"?de.player.play().catch(()=>{}):ph("playVideo");else{let n=de.src,e=de.kind;if(e==="video"){let t=document.createElement("video");t.src=bt(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==de.muted&&(de.muted=t.muted,Zo())}),de.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Ha(n):Va(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:Ih(i,"autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"),t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),de.muted||my(!1)}),de.player=t}else{let t=document.createElement("img");t.src=bt(n),t.alt="",de.player=t}de.muted=!0,Zo(),de.vid.appendChild(de.player)}de.snd.hidden=!/^(youtube|vimeo|video)$/.test(de.kind),de.box.hidden=!1,de.btn.setAttribute("aria-expanded","true"),de.box.offsetWidth,de.box.classList.add("on"),setTimeout(()=>{de.open&&de.x.focus({preventScroll:!0})},60)}}function qc(n){!de||!de.open||(de.open=!1,de.btn.setAttribute("aria-expanded","false"),de.kind==="video"?de.player&&de.player.pause():ph("pauseVideo"),de.box.classList.remove("on"),clearTimeout(de.t),de.t=setTimeout(()=>{de.open||(de.box.hidden=!0)},n===!0?0:650),de.last&&de.last.focus&&n!==!0&&de.last.focus({preventScroll:!0}))}var y=null,La=["white","grey","accent","source"],gy=8;function xS(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},ve.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((a,o)=>a+o,0);for(let a=0;a<i.length;a++)if((r-=s[a])<0)return i[a];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(La,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function _S(){if(y)return;let n=document.getElementById("home-band");if(!n)return;let e=xS(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>sf()).observe(t),y={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,round:e.shape!=="square",color:La.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(gy,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},y.octx=y.off.getContext("2d",{willReadFrequently:!0}),y.gl=VS(t),y.gl&&(y.interval=1e3/60),y.raw=document.createElement("canvas"),y.rctx=y.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let o=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(o.crossOrigin="anonymous"),Object.assign(o,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:bt(s)}),o.setAttribute("playsinline",""),o.addEventListener("loadedmetadata",()=>{isFinite(o.duration)&&o.duration>2&&(o.currentTime=Math.random()*(o.duration-1)),o.play().catch(()=>{})},{once:!0}),y.video=o}else{let o=m=>m&&!/^(https?:|data:)/.test(m)&&/\.(jpe?g|png|webp)$/i.test(m),l=ve.sections.find(m=>m.visible&&m.card==="image"&&!m.skills)||{},c=l.defaultTag||"featured",h=m=>Math.max(0,...(String(m.date||"").match(/\d{4}/g)||[]).map(Number)),u=m=>(m.media||[]).map(f=>f&&f.src).filter(f=>o(f)&&f!==m.thumb),d=ve.posts.filter(m=>m.published!==!1&&m.section===l.id&&(u(m).length||o(m.thumb))).map(m=>({p:m,k:((m.tags||[]).includes(c)?1e4:0)+h(m)+Math.random()*.5})).sort((m,f)=>f.k-m.k).slice(0,10).map(m=>m.p),p=m=>/screen|capture|schema|sch[eé]ma|plan|diagram|logo|affiche|poster/i.test(m.split("/").pop()),g=m=>{let f=u(m),S=f.filter(b=>!p(b)).length?f.filter(b=>!p(b)):f;return S.length?S[Math.floor(Math.random()*S.length)]:m.thumb},v=[...new Set(d.map(g))].sort(()=>Math.random()-.5);y.pics=v.map(m=>{let f=new Image,S=mf(m);return f.decoding="async",S!==m&&(f.onerror=()=>{f.onerror=null,f.src=bt(m)}),f.src=bt(S),f})}if(bS(e.controls!==!1),al()&&Or()&&!/[?&]p=/.test(location.search)&&!ll.matches&&!(St&&St.start)&&!document.getElementById("hc-intro")){let o=performance.now(),l=()=>{!Mt&&!y.reelOn&&!y.cam&&!y.userReel&&!y.reelRefused&&Or()&&ol(!0)},c=setInterval(()=>{(Ur||performance.now()-o>6e3)&&(clearInterval(c),setTimeout(l,500))},150)}let r=document.getElementById("home-langs"),a=document.getElementById("home-ctl");r&&a?a.insertBefore(r,document.getElementById("home-about")):r&&document.getElementById("home").appendChild(r),sf()}var Ua={about:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 8.8v5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="10" cy="6.3" r="1.05" fill="currentColor"/></svg>',video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function bS(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(y&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    ${n?"":`<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${Ua.shot}<span></span></button>`}
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden><span class="lbl"></span><b class="ic">?</b></button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button><button type="button" id="home-snd" aria-pressed="false" hidden><b class="ic"></b></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${Ua.faders}</b><span class="lbl"></span></button>`:"")+`<button type="button" id="home-about" aria-expanded="false" hidden><b class="ic">${Ua.about}</b></button><figure id="home-pitch" hidden><img alt="" decoding="async"><figcaption><p></p></figcaption></figure>`;let a=document.getElementById("home-band"),o=a.querySelector(".lg");o?o.after(r):a.appendChild(r),n&&AS(e,i,r),DS(e),r.querySelector("#home-reel").addEventListener("click",()=>{y.reelOn?xi():vy()}),r.querySelector("#home-snd").addEventListener("click",()=>Hf(!y.sound));let l=r.querySelector("#home-about"),c=r.querySelector("#home-pitch"),h=u=>{if(u){mh(c),c.hidden=!1,c.offsetWidth;let d=r.getBoundingClientRect().top,p=window.innerHeight-20-d-c.offsetHeight;c.style.setProperty("--y",Math.max(-d+20,Math.min(l.offsetTop,p))+"px")}c.classList.toggle("on",u),l.classList.toggle("on",u),l.setAttribute("aria-expanded",String(u))};l.addEventListener("click",()=>Cy()),e.addEventListener("pointerdown",u=>{if(c.classList.contains("on")&&!u.target.closest("#home-about")&&h(!1),!u.target.closest("#home-langs")){let d=document.getElementById("home-langs");d&&d.classList.remove("open")}}),document.querySelectorAll("#hv-src button").forEach(u=>u.addEventListener("click",()=>{u.dataset.src==="cam"&&!y.cam?by():u.dataset.src==="video"&&y.cam&&Dh()})),document.getElementById("hv-shot").addEventListener("click",ES),document.getElementById("hv-words").addEventListener("keydown",u=>{u.stopPropagation(),u.key==="Enter"&&(u.preventDefault(),u.target.blur())}),s.querySelector("#story-btn").addEventListener("click",()=>yh()),gh(),rl()}function rl(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(y&&y.cam);document.querySelectorAll("#hv-src button").forEach(v=>{let m=v.dataset.src==="cam"===e;v.setAttribute("aria-pressed",String(m)),v.classList.toggle("on",m),v.textContent=_e(v.dataset.src==="cam"?"hv_cam":y&&y.video?"hv_video":"hv_slides")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",_e("hv_src"));let i=!!(y&&y.panel),s=document.getElementById("hv-words");s.hidden=!i&&!e,s.placeholder=_e("hv_words"),s.setAttribute("aria-label",_e("hv_words"));let r=document.getElementById("hv-shot");r.hidden=!i&&!e,r.setAttribute("aria-label",_e("hv_shot")),r.querySelector("span").textContent=_e(i?"hv_shot":"photo");let a=document.querySelector("#hv-panel .priv");a&&(a.textContent=_e("hv_private"));let o=n.querySelector("#story-btn");o.setAttribute("aria-label",_e("story")),o.querySelector(".lbl").textContent=_e("story");let l=document.getElementById("home-about"),c=document.getElementById("home-pitch"),h=zf();l&&(l.hidden=!h,mh(c,!1),l.setAttribute("aria-label",h));let u=document.querySelector("#hv-toggle .lbl");u&&(u.textContent=_e("params"));let d=document.getElementById("home-reel");d.hidden=!(ve.settings.showreel||"").trim();let p=!!(y&&y.reelOn);d.setAttribute("aria-pressed",String(p)),d.classList.toggle("on",p),d.setAttribute("aria-label",p?_e("stop")+" : Showreel":"Showreel"),d.querySelector("span").textContent=p?_e("stop"):"Showreel";let g=document.getElementById("home-snd");if(g&&!d._rwObs&&window.ResizeObserver&&(d._rwObs=new ResizeObserver(()=>{d.offsetWidth&&g.style.setProperty("--rw",d.offsetWidth+"px")}),d._rwObs.observe(d)),g){g.hidden=!p,p&&requestAnimationFrame(()=>g.style.setProperty("--rw",d.offsetWidth+"px"));let v=!!(y&&y.sound);g.querySelector(".ic").innerHTML=Ff(v),g.classList.toggle("on",v),g.setAttribute("aria-pressed",String(v)),g.setAttribute("aria-label",_e(v?"soundOff":"soundOn")),g.title=_e(v?"soundOff":"soundOn")}}var Kg=0,zf=()=>he((ve.settings.home||{}).sub||{}).replace(/\s*\n\s*/g," ").trim();function MS(){let n=ve.sections.find(s=>s.visible&&s.card==="image"&&!s.skills)||{},e=n.defaultTag,t=s=>s.published!==!1&&s.section===n.id&&s.thumb&&/\.(jpe?g|png|webp)$/i.test(s.thumb),i=ve.posts.filter(s=>t(s)&&(!e||(s.tags||[]).includes(e)));return(i.length?i:ve.posts.filter(t)).map(s=>bt(s.thumb))}function mh(n,e=!0){if(n.querySelector("p").textContent=zf(),!e)return;let t=MS(),i=n.querySelector("img");if(t.length){let s=t[Math.floor(Math.random()*t.length)];t.length>1&&s===n.dataset.last&&(s=t[(t.indexOf(s)+1)%t.length]),n.dataset.last=s,i.src=s,i.hidden=!1}else i.hidden=!0}var $t=null,ln=null;function wS(){if(!$t){$t=document.createElement("button"),$t.type="button",$t.id="about-btn",$t.className="ui",$t.setAttribute("aria-expanded","false"),$t.innerHTML=`<b class="ic">${Ua.about}</b>`,ln=document.createElement("figure"),ln.id="about-card",ln.className="ui",ln.hidden=!0,ln.innerHTML='<img alt="" decoding="async"><figcaption><p></p></figcaption>',document.body.append($t,ln);let e=t=>{t&&(mh(ln),ln.hidden=!1,Jo(),ln.offsetWidth),ln.classList.toggle("on",t),$t.classList.toggle("on",t),$t.setAttribute("aria-expanded",String(t))};$t.addEventListener("click",()=>Cy())}let n=zf();$t.hidden=!n,$t.setAttribute("aria-label",n),mh(ln,!1),Jo()}function Jo(){if(!$t)return;let n=de&&de.btn&&!de.btn.hidden?de.btn:null,e=document.getElementById("lang-sq"),t=e&&!e.hidden;if(!Hi()){let s=n?n.offsetTop:Math.round(cn.offsetTop+cn.offsetHeight+16),r=n?n.offsetLeft+n.offsetWidth+8:cn.offsetLeft+2;$t.style.top=s+"px",$t.style.left=r+"px",$t.hidden||(r+=$t.offsetWidth+8),t&&(e.style.top=s+"px",e.style.left=r+"px"),ln.hidden||(ln.style.left=cn.offsetLeft+2+"px",ln.style.top=s+$t.offsetHeight+8+"px");return}let i=n?n.offsetTop+n.offsetHeight+8:Math.round(cn.offsetTop+cn.offsetHeight+(Hi()?26:16));if(t&&(e.style.top=i+"px",e.style.left=cn.offsetLeft+2+"px",i+=$t.offsetHeight+8),$t.style.top=i+"px",$t.style.left=cn.offsetLeft+2+"px",!ln.hidden){let s=Hi(),r=cn.offsetLeft+2;if(s){let a=Math.max(16,Math.min(i,Ut-20-ln.offsetHeight));ln.style.left=r+$t.offsetWidth+12+"px",ln.style.top=a+"px"}else ln.style.left=r+"px",ln.style.top=i+$t.offsetHeight+8+"px"}}function Oa(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(Kg),t.textContent=n||"",t.hidden=!n,n&&e&&(Kg=setTimeout(()=>{t.hidden=!0},e)))}function SS(n,e,t,i){let s=document.querySelector("#home-band .hv-shade");(s?getComputedStyle(s).backgroundImage:"").split(/,\s*(?=linear-gradient\()/).forEach(a=>{let o=/^linear-gradient\((.*)\)$/.exec(a.trim());if(!o)return;let l=o[1],c=180,h=/^(-?[\d.]+)deg\s*,\s*/.exec(l),u=/^to (top|bottom|left|right)\s*,\s*/.exec(l);if(h?(c=(+h[1]%360+360)%360,l=l.slice(h[0].length)):u&&(c={top:0,right:90,bottom:180,left:270}[u[1]],l=l.slice(u[0].length)),c%90)return;let d=[...l.matchAll(/(rgba?\([^)]*\))\s*(-?[\d.]+)(px|%)?/g)];if(!d.length)return;let p=c%180?e:t,g={0:[0,t,0,0],90:[0,0,e,0],180:[0,0,0,t],270:[e,0,0,0]}[c],v=n.createLinearGradient(...g);d.forEach(m=>{let f=m[3]==="%"?+m[2]/100*p:+m[2]*i;v.addColorStop(Math.max(0,Math.min(1,f/p)),m[1])}),n.fillStyle=v,n.fillRect(0,0,e,t)})}async function ES(){if(!y||y.cam&&y.cam.video.readyState<2)return;let n=y.frozenAt;if(!n||!n.cols||!y.W)return;let e=Math.max(y.W,y.H),t=Math.min(3e3/e,Math.max(2,2e3/e)),i=Math.round(y.W*t),s=Math.round(y.H*t),r=document.createElement("canvas");r.width=i,r.height=s;let a=r.getContext("2d");a.fillStyle="#0b0b0b",a.fillRect(0,0,i,s);let o=document.getElementById("home-band");o.classList.remove("flash"),o.offsetWidth,o.classList.add("flash");let l={ctx:y.ctx,W:y.W,H:y.H,lo:y.lo,hi:y.hi};try{y.ctx=a,y.W=i,y.H=s,n.d?My(n.d,n.cols,n.rows,n.cell*t):af(n.cols,n.rows,Math.round(n.cell*t))}finally{y.ctx=l.ctx,y.W=l.W,y.H=l.H,y.lo=l.lo,y.hi=l.hi}SS(a,i,s,t);let c=ve.settings,h=Qn(c,"title"),u=Math.min(i,s)/1080,d=document.getElementById("hv-words"),p=(d?d.value:"").replace(/\s+/g," ").trim().toUpperCase(),g=y.cv.getBoundingClientRect(),v=B=>(B-g.left)*t,m=B=>(B-g.top)*t,f=(B,q)=>`${B.fontStyle==="italic"?"italic ":""}${B.fontWeight} ${q}px ${B.fontFamily}`,S=document.querySelector("#home-slogan > .wm"),b=[...document.querySelectorAll("#home-slogan .tls > span")],I=72*u,L=0,C=0;if(S){try{await document.fonts.load(f(getComputedStyle(S),96))}catch{}let B=se=>{let re=getComputedStyle(se),le=parseFloat(re.fontSize),Ce=parseFloat(re.lineHeight)||le*1.2,Fe=se.getBoundingClientRect();a.font=f(re,100);let ze=a.measureText(se.textContent),mt=(ze.fontBoundingBoxAscent||80)*le/100,Y=(ze.fontBoundingBoxDescent||20)*le/100,sn=Fe.top+(Ce-mt-Y)/2+mt;return a.font=f(re,le*t),a.fillStyle="#fff",a.textBaseline="alphabetic",a.fillText(se.textContent,v(Fe.left),m(sn)),{base:sn,asc:(ze.actualBoundingBoxAscent||70)*le/100,left:Fe.left}},q=B(S);b.forEach(B),I=v(q.left),C=q.asc*t,L=m(q.base)-C/2}let N=Math.max(C,40*u)*.55;a.fillStyle=c.accent||"#ffcc00",a.beginPath(),a.arc(i-I-N,L||70*u+N,N,0,Math.PI*2),a.fill();let H=Math.min(i-2*I,1300*u),M=Math.round(84*u),w=[],F=B=>`${h.italic?"italic ":""}${h.weight||600} ${B}px ${h.css}`;try{await document.fonts.load(F(80))}catch{}let ie=B=>{"letterSpacing"in a&&(a.letterSpacing=Math.round((+h.ls||-.02)*B)+"px")};for(;M>=36*u&&(a.font=F(M),ie(M),w=Jt(a,p,H),!(w.length<=4));M-=4);w=p?w.slice(0,4):[];let ce=Math.round(38*u),k=s-64*u-ce,G=Math.round(M*1.02),z=k-64*u-w.length*G;if(w.length){let B=a.createLinearGradient(0,z-160*u,0,s);B.addColorStop(0,"rgba(11,11,11,0)"),B.addColorStop(.35,"rgba(11,11,11,.75)"),B.addColorStop(1,"rgba(11,11,11,.9)"),a.fillStyle=B,a.fillRect(0,z-160*u,i,s-z+160*u),a.fillStyle=c.accent||"#ffcc00",a.fillRect(I,z-34*u,46*u,6*u)}a.textBaseline="top",a.fillStyle="#fff",a.font=F(M),ie(M),w.forEach((B,q)=>a.fillText(B,I-M*.03,z+q*G)),"letterSpacing"in a&&(a.letterSpacing="0px");let ne=Qn(c,"subtitle"),X=B=>`${ne.italic!==!1?"italic ":""}${ne.weight||400} ${B}px ${ne.css}`;try{await document.fonts.load(X(38))}catch{}a.font=X(ce),a.fillStyle="#fff",a.textBaseline="alphabetic",a.fillText("hand-coded.net",I,k+ce);let $=await new Promise(B=>r.toBlob(B,"image/jpeg",.92));if(!$)return;rr("photo-souvenir","Photo souvenir",!0);let ee="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",Q=typeof File=="function"?new File([$],ee,{type:"image/jpeg"}):null;if(Q&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[Q]}))try{await navigator.share({files:[Q],title:ve.settings.name||"Hand Coded"}),Oa(_e("hv_shotDone"),2500);return}catch(B){if(B&&B.name==="AbortError")return}let ue=document.createElement("a");ue.href=URL.createObjectURL($),ue.download=ee,document.body.appendChild(ue),ue.click(),setTimeout(()=>{URL.revokeObjectURL(ue.href),ue.remove()},2e3),Oa(_e("hv_shotDone"),2500)}function gh(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(ve.settings.home||{}).story||{},i=he(t.title||{}).trim(),s=Sr(he(t.body||{})),r=!t.off&&!!(i||Er(s).join("").trim());n.hidden=!r;let a=document.getElementById("hc-story");if(!r){a&&a.remove();return}a||(a=document.createElement("section"),a.id="hc-story",a.hidden=!0,e.appendChild(a)),a.setAttribute("aria-label",i||_e("story"));let o=(t.images||[]).filter(Boolean);a.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${xe(_e("close"))}">\xD7</button><h2>${xe(i||_e("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${xe(t.link)}" target="_blank" rel="noopener">${xe(he(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(o.length?`<div class="shots scroll-x">${o.map(l=>`<a href="${xe(bt(l))}" target="_blank" rel="noopener"><img src="${xe(bt(l))}" alt="" loading="lazy" draggable="false" onerror="this.parentNode.remove()"></a>`).join("")}</div>`:"")+"</div></div>",a.querySelector(".x").addEventListener("click",()=>yh(!1)),gh.out||(gh.out=!0,document.addEventListener("pointerdown",l=>{let c=document.getElementById("hc-story");c&&c.classList.contains("on")&&!l.target.closest("#hc-story, #story-btn")&&yh(!1)}))}var Qg=0;function yh(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(Qg),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),Qg=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),yh(!1))},!0);function sf(){if(!y)return;let n=y.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1),t=Math.max(1,Math.round(n.width)),i=Math.max(1,Math.round(n.height));if(!(n.width<2||n.height<2||t===y.W&&i===y.H&&e===y.dpr)&&(y.W=t,y.H=i,y.dpr=e,y.cv.width=y.W*e,y.cv.height=y.H*e,y.ctx.setTransform(e,0,0,e,0,0),y.gl&&(y.gl.c.width=y.W*e,y.gl.c.height=y.H*e,y.gl.dpr=e),y.reelOn)){let s=xy();if(y.rp&&y.rp.key!==s.kind+"|"+s.src){let r=!y.userReel;xi(),ol(r)}else Vf()}}var rf=[{p:"cell",min:3,max:40,step:1,get:()=>y.cell,set:n=>{y.cell=n},show:()=>Math.max(y.cell,y.floor)+"px"+(y.floor>y.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(y.fill*100),set:n=>{y.fill=n/100},show:()=>Math.round(y.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>y.gamma,set:n=>{y.gamma=n},show:()=>"\xD7"+y.gamma.toFixed(1)},{p:"delay",min:1,max:gy,step:1,get:()=>y.delay,set:n=>{y.delay=n},show:()=>of()+(of()<y.delay?"*":"")}],TS=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function AS(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span><button type="button" class="more" aria-expanded="false">+</button></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div><p class="priv"></p>`:"")+rf.map(c=>`<label class="rw"><span class="lb" data-k="${c.p}"></span><input type="range" data-p="${c.p}" min="${c.min}" max="${c.max}" step="${c.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${La.map(c=>`<button type="button" data-c="${c}"><i class="c-${c}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div><div class="pic"><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${Ua.shot}<span></span></button></div>`,t.appendChild(i);let s=document.getElementById("hv-toggle");y.panel=i,y.toggle=s;let r=0,a=c=>{clearTimeout(r),c?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(c)),s.classList.toggle("on",c),n.classList.toggle("hv-open",c),c&&ni()};y.setOpen=a,s.addEventListener("click",()=>{if(y.reelOn){xi(),a(!0);return}a(!i.classList.contains("open"))});let o=i.querySelector(".more");o.addEventListener("click",()=>{let c=!i.classList.contains("more-on");i.classList.toggle("more-on",c),o.setAttribute("aria-expanded",String(c)),o.textContent=c?"\u2212":"+"}),n.addEventListener("pointerdown",c=>{i.classList.contains("open")&&!c.target.closest("#hv-panel, #hv-toggle, #hv-src, #hv-consent")&&a(!1)}),i.querySelectorAll("input[data-p]").forEach(c=>{let h=rf.find(u=>u.p===c.dataset.p);c.addEventListener("input",()=>{h.set(+c.value),ni()})});let l=c=>{if(c==="color")y.color=La[(La.indexOf(y.color)+1)%La.length];else if(c==="invert")y.mode=y.mode==="light"?"dark":"light";else if(c==="sound"){Hf(!y.sound);return}else if(c==="cam"){if(!document.getElementById("hv-src"))return;y.cam?Dh():by()}ni()};i.querySelectorAll("[data-c]").forEach(c=>c.addEventListener("click",()=>{y.color=c.dataset.c,ni()})),i.querySelectorAll(".tgl").forEach(c=>c.addEventListener("click",()=>l(c.dataset.a))),window.addEventListener("keydown",c=>{if(Mt||c.ctrlKey||c.metaKey||c.altKey||de&&de.open||c.target&&c.target.id==="hv-words")return;if(c.code==="Escape"&&i.classList.contains("open")){a(!1),s.focus({preventScroll:!0});return}if(c.code==="Escape"&&y.reelOn){xi();return}let h={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[c.code];if(h){if(c.preventDefault(),h==="panel"){a(!i.classList.contains("open"));return}y.touched||(y.touched=!0,a(!0)),l(h)}}),ni()}function ni(){if(rl(),!y||!y.panel)return;let n=y.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=_e("hv_"+t.dataset.k)}),y.toggle.setAttribute("aria-label",_e("hv_panel")),y.toggle.title=_e("hv_panel")+" (K)",rf.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),TS(i),i.setAttribute("aria-label",_e("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===y.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",_e("hv_color")+" "+_e("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",y.mode==="dark"),n.classList.toggle("cam",!!y.cam),!y.cam&&n.classList.contains("more-on")&&n.querySelector(".more").click(),n.querySelector(".more").setAttribute("aria-label",_e("params")),yy()}function yy(){let n=y&&y.panel&&y.panel.querySelector(".stat");if(!n)return;let e=Math.max(y.cell,y.floor);n.textContent=`${Math.ceil(y.W/e)}\xD7${Math.ceil(y.H/e)} \xB7 ${Math.round(1e3/y.interval)} FPS`}var CS=()=>y&&!y.reelOn?y.video:null;function Hf(n){y.sound=n,y.reelOn&&y.rp?y.rp.mute(!n):y.video&&(y.video.muted=!n,n&&(y.video.volume=1),y.video.paused&&!y.frozen&&y.video.play().catch(()=>{})),ni(),js()}var al=()=>!!(de&&de.src&&/^(video|youtube|vimeo)$/.test(de.kind));function vy(){y&&al()?(Mt&&Uh(),ol()):vS()}function RS(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let s=document.createElement("video");Object.assign(s,{muted:!0,playsInline:!0,preload:"auto",src:bt(e)}),s.setAttribute("playsinline","");let r=()=>{i.t=s.currentTime,i.d=isFinite(s.duration)?s.duration:0,i.paused=s.paused,js()};["timeupdate","durationchange","play","pause"].forEach(a=>s.addEventListener(a,r)),s.addEventListener("loadedmetadata",()=>{s.videoWidth&&(i.ratio=s.videoWidth/s.videoHeight),Vf(),r()}),s.addEventListener("ended",()=>xi()),Object.assign(i,{el:s,play:()=>s.play().catch(()=>{}),pause:()=>s.pause(),mute:a=>{s.muted=a,a||(s.volume=1)},seek:a=>{s.currentTime=a}})}else{let s=document.createElement("iframe"),r=n==="youtube",a=r?Ha(e):Va(e),o=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";s.src=r?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${o}`:Ih(a,"autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0"),s.allow="autoplay; encrypted-media",s.tabIndex=-1,s.title="Showreel",s.referrerPolicy="strict-origin-when-cross-origin";let l=h=>{try{s.contentWindow.postMessage(JSON.stringify(h),"*")}catch{}},c=r?(h,u=[])=>l({event:"command",func:h,args:u}):(h,u)=>l(u===void 0?{method:h}:{method:h,value:u});s.addEventListener("load",()=>{if(!r)return;let h=0;clearInterval(i.hello),l({event:"listening",id:"hvreel",channel:"widget"}),i.hello=setInterval(()=>{if(i.heard||++h>60){clearInterval(i.hello);return}l({event:"listening",id:"hvreel",channel:"widget"})},250)}),i.showAt=r?3.2:.4,t.classList.add("wait"),Object.assign(i,{el:s,post:l,play:()=>{i.paused=!1,i.hold=!1,i.playAt=performance.now(),i.showAt=i.t+(r?2.6:.3),c(r?"playVideo":"play"),vh(),js()},pause:()=>{i.paused=!0,i.hold=!0,c(r?"pauseVideo":"pause"),vh(),js()},mute:h=>{r?(c(h?"mute":"unMute"),h||c("setVolume",[100])):(c("setMuted",h),h||c("setVolume",1))},seek:h=>{r?c("seekTo",[h,!0]):c("setCurrentTime",h),i.t=h,js()}})}return LS(i,t)}function vh(){let n=y&&y.rp;if(!n||n.kind==="video")return;let e=y.reelOn&&!n.paused&&(n.forced||n.t>=(n.showAt||0));e!==!!n.shown&&(n.shown=e,n.box.classList.toggle("wait",!e),y.video&&!Mt&&!y.frozen&&(e?y.video.pause():y.reelOn&&y.video.play().catch(()=>{})))}function LS(n,e){let t=document.createElement("div");return t.className="grid",e.append(n.el,t),n}window.addEventListener("message",n=>{let e=y&&y.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.heard||(e.heard=!0,clearInterval(e.hello),e.kind==="youtube"&&e.mute(!y.sound)),e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&y.reelOn){xi();return}i.playerState===1?(e.paused=!1,e.playingAt=performance.now()):i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),y.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d,e.t>0&&(e.playingAt=performance.now());else if(t.event==="play")e.paused=!1,e.playingAt=performance.now();else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&y.reelOn){xi();return}}js(),vh()}});var PS=()=>window.innerHeight>window.innerWidth*1.1;function xy(){let n=(ve&&ve.settings.showreelMobile||"").trim(),e=n?Dr(n):"";return n&&/^(video|youtube|vimeo)$/.test(e)&&PS()?{kind:e,src:n,vertical:!0}:{kind:de.kind,src:de.src,vertical:!1}}function Vf(){let n=y&&y.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=n.ratio,s=e,r=e/i;r<t&&(r=t,s=t*i),Object.assign(n.el.style,{width:Math.ceil(s)+"px",height:Math.ceil(r)+"px",left:Math.round((e-s)/2)+"px",top:Math.round((t-r)/2)+"px"});let a=document.getElementById("hv-turn");a||(a=document.createElement("p"),a.id="hv-turn",a.className="ui",a.setAttribute("aria-hidden","true"),document.getElementById("home-band").appendChild(a)),a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 13.5a8.5 8.5 0 0 0 6 6.6M2.2 16.6l1.3-3.2 3 1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>'+xe(_e("hv_turn"))+"</span>",Pn.classList.toggle("reel-crop",i/(e/t)>1.6)}function ol(n=!1){if(!y||!al())return!1;if(n||(y.userReel=!0),y.reelOn)return!0;y.setOpen&&y.setOpen(!1),y.cam&&Dh();let e=xy(),t=e.kind+"|"+e.src;if(!y.rp||y.rp.key!==t){y.rp&&(y.rp.pause(),y.rp.box.remove()),y.rp=RS(e.kind,e.src),y.rp.key=t,e.vertical&&(y.rp.ratio=9/16);let i=document.getElementById("home-band");i.insertBefore(y.rp.box,i.querySelector(".hv-shade")),y.sound&&e.kind==="video"&&y.rp.mute(!1),e.kind==="video"&&y.rp.play()}else y.rp.seek(0),y.rp.play(),y.rp.mute(!y.sound);return y.reelOn=!0,y.rp.box.hidden=!1,y.rp.playAt=performance.now(),IS(),y.rp.kind==="video"?y.video&&y.video.pause():(y.rp.shown=!0,vh()),Pn.classList.add("reel-on"),Vf(),js(),ni(),n||rr("showreel","Showreel",!0),!0}var Xc=0;function IS(){clearInterval(Xc),Xc=setInterval(()=>{let n=y&&y.rp;if(!n||!y.reelOn||n.kind==="video"||n.shown){clearInterval(Xc);return}if(!(n.hold||Mt)&&!((n.playingAt||0)>(n.playAt||0))&&!(performance.now()-(n.playAt||0)<(y.userReel?8e3:6e3))){if(clearInterval(Xc),!n.heard||!y.userReel){y.userReel||(y.reelRefused=!0),xi();return}n.showAt=0,n.forced=!0,n.shown=!0,n.box.classList.remove("wait"),y.video&&!y.frozen&&y.video.pause()}},500)}function xi(){!y||!y.reelOn||(y.reelOn=!1,y.rp.pause(),y.rp.box.hidden=!0,y.fresh=!0,y.rp.shown=!1,y.rp.kind!=="video"&&y.rp.box.classList.add("wait"),y.video&&!Mt&&!y.frozen&&(y.video.muted=!y.sound,y.video.play().catch(()=>{})),Pn.classList.remove("reel-on"),js(),ni())}var NS=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Ud=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),_y=()=>{let n=y&&y.rp;!n||!y.reelOn||(n.paused?n.play():n.pause())};function DS(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),y.reelBar=e,e.querySelector(".pp").addEventListener("click",_y),e.querySelector(".snd").addEventListener("click",()=>Hf(!y.sound)),e.querySelector(".x").addEventListener("click",xi);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=y.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=y.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function js(){let n=y&&y.reelBar;if(!n||(n.hidden=!y.reelOn,rl(),!y.reelOn))return;let e=y.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=NS(e.paused),s.setAttribute("aria-label",_e(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Ud(i)} / ${Ud(t)}`:Ud(i);let r=n.querySelector(".snd");r.innerHTML=Ff(y.sound),r.setAttribute("aria-label",_e(y.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(y.sound)),n.querySelector(".x").setAttribute("aria-label",_e("close"))}function US(){return new Promise(n=>{let e=document.getElementById("home-band"),t=document.getElementById("hv-consent");t&&t.remove(),t=document.createElement("div"),t.id="hv-consent",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`<p>${xe(_e("hv_consent"))}</p><div class="bt"><button type="button" class="ok">${Ua.shot}<span>${xe(_e("hv_camYes"))}</span></button><button type="button" class="no">${xe(_e("cancel"))}</button></div>`,e.appendChild(t),t.setAttribute("aria-label",_e("hv_cam"));let i=r=>{window.removeEventListener("keydown",s,!0),t.classList.remove("on"),setTimeout(()=>t.remove(),250),n(r)},s=r=>{r.code==="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),i(!1))};window.addEventListener("keydown",s,!0),t.querySelector(".ok").addEventListener("click",()=>i(!0)),t.querySelector(".no").addEventListener("click",()=>i(!1)),requestAnimationFrame(()=>{t.classList.add("on"),t.querySelector(".ok").focus({preventScroll:!0})})})}async function by(){if(Oa(""),!y.camOK){if(!await US()){ni();return}y.camOK=!0}try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),y.reelOn&&xi(),y.cam={stream:n,video:e},y.lo=0,y.hi=1,y.video&&y.video.pause(),y.panel||Oa(_e("hv_camNote"),6e3)}catch{Oa(_e("hv_camDenied"),4e3)}ni()}function Dh(){if(y&&y.cam){y.cam.stream.getTracks().forEach(e=>e.stop()),y.cam=null;let n=CS();n&&!Mt&&n.play().catch(()=>{}),Oa("")}y&&ni()}function OS(){y&&(xi(),Dh(),y.video&&y.video.pause())}function Yc(n,e,t,i=1,s=0,r=0,a=!1,o=!1){let l=y.rctx,c=y.raw.width,h=y.raw.height,u=(o?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,p=t*u;a&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-p)/2+r*h,d,p),a&&l.restore()}function kS(n){let e=y.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,y.raw.width,y.raw.height),y.cam&&y.cam.video.readyState>=2)return Yc(y.cam.video,y.cam.video.videoWidth,y.cam.video.videoHeight,1,0,0,!0),!0;if(y.video)return y.video.readyState<2?!1:(Yc(y.video,y.video.videoWidth,y.video.videoHeight),!0);let t=y.pics.filter(d=>d.complete&&d.naturalWidth);if(!t.length)return!1;let i=y.raw.width,s=y.raw.height,r=s>i*1.1,a=r?9:7,o=Math.max(0,n)/a,l=t.length,c=(Math.floor(o)%l+l)%l,h=o-Math.floor(o),u=(d,p,g,v)=>{if(e.globalAlpha=g,r){let f=Math.max(i/d.naturalWidth,s/d.naturalHeight)*1.04,S=Math.max(0,(d.naturalWidth*f-i)/2/i),b=Math.max(0,Math.min(1,p)),I=b*b*(3-2*b),L=v%2?1:-1;Yc(d,d.naturalWidth,d.naturalHeight,1.04,L*S*.7*(1-2*I),0)}else Yc(d,d.naturalWidth,d.naturalHeight,1.18-.12*p,Math.sin(p*2.2)*.06,Math.cos(p*1.7)*.05)};return u(t[c],h,1,c),h>.78&&l>1&&u(t[(c+1)%l],h-1,(h-.78)/.22,c+1),e.globalAlpha=1,!0}var BS=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function FS(n){if(y.pyr&&y.pyr.cell===n&&y.pyr.fill===y.fill&&y.pyr.round===y.round)return y.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=(y.round?Math.hypot(a+.5-s,r+.5-s)/1.12:Math.max(Math.abs(a+.5-s),Math.abs(r+.5-s)))/s,l=Math.max(0,Math.min(1,1-o/y.fill))*255,c=(r*n+a)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),y.pyr={cell:n,fill:y.fill,round:y.round,pat:y.ctx.createPattern(e,"repeat")},y.pyr.pat}function af(n,e,t){let i=y.ctx,s=y.W,r=y.H,a=Math.round((s-n*t)/2),o=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!BS){i.globalAlpha=.45,i.drawImage(y.off,a,o,n*t,e*t),i.globalAlpha=1;return}y.tmp||(y.tmp=document.createElement("canvas"),y.tctx=y.tmp.getContext("2d"));let l=y.tmp,c=y.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${y.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+y.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(y.off,a,o,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(a,o),c.fillStyle=FS(t),c.fillRect(-a,-o,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),y.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",y.color==="source"?i.drawImage(y.off,a,o,n*t,e*t):(i.fillStyle=y.color==="grey"?"#8d8d8d":ve.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var ll=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},of=()=>y.floor||y.interval>1e3/29?1:y.delay;function zS(n){if(!y||!y.W)return;let e=y.exit?n-y.exit:-1;if(e>e0){y.cleared||(y.cleared=!0,y.ctx.fillStyle="#0b0b0b",y.ctx.fillRect(0,0,y.W,y.H),n0());return}if(y.reelOn&&(!y.rp||y.rp.kind==="video"||y.rp.shown)||n-y.last<(e>=0?1e3/60:y.interval)-2)return;y.last=n;let t=performance.now(),i=ll.matches?0:(n-y.t0)/1e3,s=y.ctx,r=y.W,a=y.H;if(y.panel&&y.panel.classList.contains("open")&&n-(y.statAt||0)>500&&(y.statAt=n,yy()),Gf()||(s.fillStyle="#0b0b0b",s.fillRect(0,0,r,a)),y.intro&&n<y.intro){n0();return}let o=y.intro?n-y.intro:-1;if(o>HS&&(y.intro=0),y.frozen||e>=0&&y.frozenAt&&n-y.sampleAt<y.interval){let f=y.frozenAt;if(!f)return;y.tainted?e<e0/3&&af(f.cols,f.rows,f.cell):i0(f.d,f.cols,f.rows,f.cell,e,-1);return}let l=Math.max(y.cell,y.floor),c=Math.ceil(r/l),h=Math.ceil(a/l);if((y.off.width!==c||y.off.height!==h)&&(y.off.width=y.raw.width=c,y.off.height=y.raw.height=h,y.fresh=!0),!kS(i))return;let u=of();y.octx.globalAlpha=y.fresh||u<=1?1:1-Math.pow(1-1/u,y.interval/(1e3/30)),y.octx.drawImage(y.raw,0,0),y.octx.globalAlpha=1,y.fresh=!1;let d=null;if(!y.tainted)try{d=y.octx.getImageData(0,0,c,h).data}catch{y.tainted=!0}if(y.frozenAt={d,cols:c,rows:h,cell:l},y.sampleAt=n,y.tainted?(y.gl&&(y.gl.c.style.display="none",y.gl=null),af(c,h,l)):i0(d,c,h,l,e,o),e>=0)return;let p=performance.now()-t;y.cost=y.cost*.9+p*.1;let g=y.gl?[60,30,24,20]:[30,24,20],v=Math.round(1e3/y.interval),m=Math.max(0,g.indexOf(v));y.cost>(y.gl?9:14)&&++y.slow>15?(y.panel&&setTimeout(ni,0),y.slow=0,m<g.length-1?y.interval=1e3/g[m+1]:y.floor=Math.min(Math.max(y.cell+6,14),Math.max(y.floor,l)+2)):y.cost<4&&++y.fast>60&&(y.panel&&setTimeout(ni,0),y.fast=0,y.floor?y.floor=Math.max(0,y.floor-2):m>0&&(y.interval=1e3/g[m-1]))}var e0=420,HS=650,t0=(n,e)=>Math.pow(1-1/n,e*.06);function My(n,e,t,i,s=-1,r=-1){let a=y.ctx,o=e*t,l=y.lum&&y.lum.length===o?y.lum:y.lum=new Float32Array(o),c=1,h=0;for(let L=0,C=0;L<o;L++,C+=4){let N=(.2126*n[C]+.7152*n[C+1]+.0722*n[C+2])/255;l[L]=N,N<c&&(c=N),N>h&&(h=N)}y.lo+=(c-y.lo)*.15,y.hi+=(Math.max(h,y.lo+.15)-y.hi)*.15;let u=y.lo,d=1/(y.hi-u),p=y.mode==="dark",g=y.gamma,v=i*y.fill,m=(y.W-e*i)/2,f=(y.H-t*i)/2,S=y.color==="source",b=s>=0||r>=0,I=S?WS(a):a;I.fillStyle=S?"#fff":y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2",I.beginPath();for(let L=0,C=0;L<t;L++){let N=f+L*i+i/2;for(let H=0;H<e;H++,C++){let M=(l[C]-u)*d;M=M<0?0:M>1?1:M,p&&(M=1-M);let w=(g===1?M:Math.pow(M,g))*v;if(w<.6)continue;let F=m+H*i+i/2,ie=N;if(b){let ce=w/v;if(s>=0?w*=t0(2.4+4.6*ce,s):w*=1-t0(3+4*ce,r),w<.6)continue}if(y.round){let ce=Math.min(w*.56,i/2);I.moveTo(F+ce,ie),I.arc(F,ie,ce,0,6.2832)}else I.rect(F-w/2,ie-w/2,w,w)}}I.fill(),S&&(I.globalCompositeOperation="source-in",I.imageSmoothingEnabled=!1,I.drawImage(y.off,m,f,e*i,t*i),I.globalCompositeOperation="source-over",a.save(),a.setTransform(1,0,0,1,0,0),a.drawImage(I.canvas,0,0),a.restore())}function VS(n){try{let e=document.createElement("canvas");e.id="home-gl",e.setAttribute("aria-hidden","true");let t=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return null;let i=(c,h)=>{let u=t.createShader(c);if(t.shaderSource(u,h),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(u));return u},s=t.createProgram();if(t.attachShader(s,i(t.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}")),t.attachShader(s,i(t.FRAGMENT_SHADER,`precision highp float;
uniform sampler2D T;uniform vec2 grid,org,res;uniform float cell,maxs,lo,k,gam,dark,ex,intro,dpr,src,rnd;uniform vec3 col,bg;
void main(){
  vec2 p=vec2(gl_FragCoord.x,res.y-gl_FragCoord.y)/dpr-org;vec2 ci=floor(p/cell);
  if(ci.x<0.||ci.y<0.||ci.x>=grid.x||ci.y>=grid.y){gl_FragColor=vec4(bg,1.);return;}
  vec4 s=texture2D(T,(ci+.5)/grid);
  float l=clamp((dot(s.rgb,vec3(.2126,.7152,.0722))-lo)*k,0.,1.);if(dark>.5)l=1.-l;
  float sz=(gam==1.?l:pow(max(l,1e-4),gam))*maxs;
  if(sz<.6){gl_FragColor=vec4(bg,1.);return;}
  float w=sz/maxs;
  if(ex>=0.)sz*=pow(1.-1./(2.4+4.6*w),ex*.06);else if(intro>=0.)sz*=1.-pow(1.-1./(3.+4.*w),intro*.06);
  vec2 d=abs(p-(ci+.5)*cell);float h=sz*.5;
  float a=rnd>.5?clamp((min(h*1.12,cell*.5)-length(d))*dpr+.5,0.,1.):clamp((h-d.x)*dpr+.5,0.,1.)*clamp((h-d.y)*dpr+.5,0.,1.);if(sz<.6)a=0.;
  gl_FragColor=vec4(mix(bg,src>.5?s.rgb:col,a),1.);
}`)),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return null;t.useProgram(s);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let a=t.getAttribLocation(s,"a");t.enableVertexAttribArray(a),t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0);let o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]].forEach(([c,h])=>t.texParameteri(t.TEXTURE_2D,c,h)),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let l={};return["grid","org","res","cell","maxs","lo","k","gam","dark","ex","intro","dpr","src","rnd","col","bg"].forEach(c=>{l[c]=t.getUniformLocation(s,c)}),n.after(e),{c:e,gl:t,u:l,dpr:1,data:null}}catch{return null}}var Gf=()=>!!(y&&y.gl&&!y.gl.gl.isContextLost());function n0(){if(!Gf())return;let n=y.gl.gl;n.viewport(0,0,y.gl.c.width,y.gl.c.height),n.clearColor(11/255,11/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT)}var GS=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n||"").trim()),t=e?parseInt(e[1],16):15921906;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function i0(n,e,t,i,s=-1,r=-1){if(!Gf()){My(n,e,t,i,s,r);return}let a=y.gl,o=a.gl,l=a.u,c=e*t,h=1,u=0;for(let p=0,g=0;p<c;p++,g+=4){let v=(.2126*n[g]+.7152*n[g+1]+.0722*n[g+2])/255;v<h&&(h=v),v>u&&(u=v)}y.lo+=(h-y.lo)*.15,y.hi+=(Math.max(u,y.lo+.15)-y.hi)*.15,a.data!==n&&(a.data=n,o.texImage2D(o.TEXTURE_2D,0,o.RGBA,e,t,0,o.RGBA,o.UNSIGNED_BYTE,new Uint8Array(n.buffer,n.byteOffset,c*4))),o.viewport(0,0,a.c.width,a.c.height);let d=GS(y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2");o.uniform2f(l.grid,e,t),o.uniform2f(l.org,(y.W-e*i)/2,(y.H-t*i)/2),o.uniform2f(l.res,a.c.width,a.c.height),o.uniform1f(l.cell,i),o.uniform1f(l.maxs,i*y.fill),o.uniform1f(l.lo,y.lo),o.uniform1f(l.k,1/(y.hi-y.lo)),o.uniform1f(l.gam,y.gamma),o.uniform1f(l.dark,y.mode==="dark"?1:0),o.uniform1f(l.ex,s),o.uniform1f(l.intro,r),o.uniform1f(l.dpr,a.dpr),o.uniform1f(l.src,y.color==="source"?1:0),o.uniform1f(l.rnd,y.round?1:0),o.uniform3f(l.col,d[0],d[1],d[2]),o.uniform3f(l.bg,11/255,11/255,11/255),o.drawArrays(o.TRIANGLES,0,3)}function WS(n){let e=n.canvas;y.mask||(y.mask=document.createElement("canvas"),y.mctx=y.mask.getContext("2d")),(y.mask.width!==e.width||y.mask.height!==e.height)&&(y.mask.width=e.width,y.mask.height=e.height);let t=y.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var Pn=document.getElementById("home"),ir=document.getElementById("enter"),$S=ir.querySelector(".lbl"),Rr=document.getElementById("ticker"),s0=Rr.getContext("2d"),Fi=null,qs=0,ka=1;function Wf(n){$S.textContent=n,ir.setAttribute("aria-label",n)}var r0={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},qS=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[‘’]/g,"'").replace(/[“”«»]/g,'"').toUpperCase(),t=r0[e]||r0["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function XS(n){let e=i=>i.published&&ve.sections.some(s=>s.id===i.section&&s.visible),t=ve.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+ve.settings.founded||2012));case"auto:projects":return String(ve.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(ve.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var YS=()=>(ve.settings.home&&ve.settings.home.figures||[]).map(n=>({value:XS(n.value),label:he(n.label)})).filter(n=>n.value&&n.label),jS=()=>YS().map(n=>`${n.value} ${n.label}`);function ZS(){let n=he(ve.settings.home.sub||{}).replace(/\s*\n\s*/g," ").trim(),e=he(ve.settings.home.quotes||{}).split(/\n+/).map(s=>s.trim()).filter(Boolean),t=n?[n,...e]:[...jS(),...e,...ve.settings.home.ticker||[]].filter(Boolean),i=(t.length?t:[ve.settings.name]).map(s=>String(s).replace(/œ/g,"oe").replace(/Œ/g,"OE").replace(/æ/g,"ae").replace(/…/g,"...").replace(/·/g,".").toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Fi=JS(i)}function JS(n){let e=[];for(let t of n){let i=qS(t),s=t===" "?3:5;for(let r=0;r<s;r++){let a=0;for(let o=0;o<7;o++)i[o]&1<<4-r&&(a|=1<<o);e.push(a)}e.push(0)}return{w:e.length,cols:e}}var yi={pitch:3.2,rows:7,h:30},Ta=null,a0="";function o0(n,e){let t=ka,i=Math.ceil(yi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,yi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-yi.pitch*.1*t,a-yi.pitch*.1*t,yi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function wy(){ka=Math.min(window.devicePixelRatio||1,2),Rr.width=Math.round(window.innerWidth*ka),Rr.height=Math.round(yi.h*ka),Ta=null,Xs=null}var Uo=0,Xs=null;function KS(n){let e=ka,t=yi.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[Fi.w,i,e,n].join("|");if(Xs&&Xs.dots===Fi&&Xs.key===s)return Xs;(!Ta||a0!==n)&&(a0=n,Ta={on:o0(n,!0),off:o0(n,!1)});let r=i+Fi.w+i,a=document.createElement("canvas");a.width=Math.ceil(r*t*e),a.height=Math.round(yi.h*e);let o=a.getContext("2d"),l=(yi.h-yi.rows*t)/2,c=Ta.on.width/2;o.fillStyle="#000",o.fillRect(0,0,a.width,a.height);for(let h=0;h<r;h++){let u=h<i?0:Fi.cols[(h-i)%Fi.w],d=(h*t+t/2)*e-c;for(let p=0;p<yi.rows;p++)o.drawImage(u>>p&1?Ta.on:Ta.off,d,(l+p*t+t/2)*e-c)}return Xs={canvas:a,dots:Fi,key:s,shown:-1,lead:i}}function QS(n){let e=+(ve.settings.home||{}).tickerSpeed;Uo+=n*(e>0?Math.min(120,e):26);let t=KS(ve.settings.accent||"#ffcc00");Uo>=1&&(qs+=Math.floor(Uo),Uo%=1),qs>=t.lead+Fi.w&&(qs=t.lead+(qs-t.lead)%Fi.w),t.shown!==qs&&(t.shown=qs,s0.setTransform(1,0,0,1,0,0),s0.drawImage(t.canvas,qs*yi.pitch*ka,0,Rr.width,Rr.height,0,0,Rr.width,Rr.height))}var Mt=!1,Ur=!1,cl=!1,Or=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),lf=0,cf=0,Od=!1,eE=180;function $f(n=cl){if(!(Mt||Od)){if(!(n&&y&&y.W&&!Pn.hidden&&!ll.matches)){l0();return}Od=!0,Pn.classList.add("leaving"),y.setOpen&&y.setOpen(!1),y.reelOn&&xi(),tE(),y.exit=performance.now(),y.cleared=!1,y.intro=0,setTimeout(()=>{Od=!1,l0()},eE)}}function tE(){y&&(y.frozen=!0,y.video&&y.video.pause(),y.rp&&y.rp.pause(),y.cam&&(y.cam.stream.getTracks().forEach(n=>n.stop()),y.cam=null))}function l0(){if(!Mt){if(Mt=!0,clearTimeout(lf),J0=performance.now(),!St&&Or())try{history.pushState(null,"",location.pathname+location.search+"#"+(ve.sections.find(n=>n.id===ve.settings.startSection&&n.visible)||Dt[0].def).id)}catch{}sE(),qw(),Nr(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Pn.classList.add("out"),lf=setTimeout(()=>{Pn.hidden=!0,OS()},1250)})),cn.classList.add("on"),setTimeout(Zw,1500),ar.hidden=!1,Yo.classList.remove("hidden"),nn.focus({preventScroll:!0})}}function Uh(n=!0){if(Mt&&(Ai(),uh(),hh(),Sh(),sl(null),Of(),Mt=!1,cl=!1,clearTimeout(lf),cf=performance.now()+1300,ir.classList.remove("wait"),Wf(he(ve.settings.home.enter)||_e("enter")),Sy=performance.now(),y&&(y.exit=0,y.frozen=!1,y.cleared=!1,y.fresh=!0,y.intro=performance.now()+450),Pn.classList.remove("leaving"),Pn.hidden=!1,Pn.offsetWidth,Pn.classList.remove("out"),y&&y.video&&y.video.play().catch(()=>{}),n&&!St))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!St){if(Qs.open){Qs.pushed=!1,Ms();try{history.replaceState(null,"",location.pathname+location.search+"#"+V.section.def.id)}catch{}return}if(Qs.pushed=!1,Or())Uh(!1);else if(!Mt&&Ur)$f();else if(Mt&&Ss){let n=Dt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==V.currentSection&&bn&&nl(n)}}});cn.addEventListener("click",n=>{n.target.closest(".wm")&&Mt&&Uh()});cn.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&Mt&&(n.preventDefault(),Uh())});ir.addEventListener("click",()=>{cl=!0,Ur?$f():(Wf(_e("loading")),ir.classList.add("wait"))});var Sy=0,jc=0,c0=0,zo=null,Ey=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function qf(){if(Mt||cl||performance.now()-Sy<900||de&&de.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||ir.click()}Pn.addEventListener("wheel",n=>{if(Mt||Ey(n.target))return;let e=performance.now();e-c0>350&&(jc=0),c0=e,n.deltaY>0&&(jc+=n.deltaY*(n.deltaMode?30:1),jc>40&&(jc=0,qf()))},{passive:!0});Pn.addEventListener("touchstart",n=>{zo=n.touches.length===1&&!Ey(n.target)?n.touches[0].clientY:null},{passive:!0});Pn.addEventListener("touchmove",n=>{zo!==null&&n.touches.length===1&&zo-n.touches[0].clientY>46&&(zo=null,qf())},{passive:!0});Pn.addEventListener("touchend",()=>{zo=null},{passive:!0});window.addEventListener("keydown",n=>{if(Mt||n.ctrlKey||n.metaKey||n.altKey||de&&de.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&y&&y.reelOn){n.preventDefault(),_y();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),qf()}});var hf=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function nE(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return St&&St.tag&&(e=St.tag),hf(e||n)}function iE(n,e){let t=n.tags||[],i=t.find(s=>hf(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>hf(r)===e));return i?i.id:""}function sE(){try{Rn.compile($d,Ln,ti)}catch{}Rh();let n=St&&St.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Dt.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Dt.findIndex(a=>a.def.id===ve.settings.startSection)));let s=nE(t||(e&&i<0?e:""));if(s){let a=Dt.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Dt.keys()];for(let o of a){let l=iE(Dt[o].def,s);if(l){i=o,Dt[o].def.defaultTag=l;break}}}ws=oe.cameraDistanceProportion,V.currentSection=i,V.resetData();let r=Es();V.cameraY=za(),yt.x=_s()*Math.sin(V.degreeCamera)+r.p.x,yt.y=V.cameraY,yt.z=_s()*Math.cos(V.degreeCamera)+r.p.z,zn.x=r.p.x,zn.y=Ah(),zn.z=r.p.z,Ss=!0,nl(i,0),(zt<=700||Ut<=520)&&Nr()}var h0=performance.now(),u0=NaN,d0=0,uf=0,rE=(n=700)=>{uf=Math.max(uf,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>rE(),{passive:!0}));function aE(){let n=Ln.position,e=Ln.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+Ln.fov*7.3,i=1;return ti.traverseVisible(s=>{i+=1.13;let r=s.position,a=s.rotation,o=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+a.x*3.1+a.y*3.7+a.z*4.3+o.x*5.3+o.y*5.9+o.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function oE(){if(!Rn.compileAsync)return;let n=new Vs;n.setPositions([0,0,0,1,1,1]);let e=new hs;gf.forEach(s=>e.add(new Ea(n,s)));let t=()=>{if(Mt){n.dispose();return}let s=new Sn;[...$d.children,...e.children].forEach(r=>{let a=r.clone();a.frustumCulled=!1,s.add(a)}),ti.add(s);try{Rn.render(ti,Ln)}catch{}ti.remove(s);try{Ko()}catch{}n.dispose()},i=()=>Promise.all([$d,e,ti].map(s=>Rn.compileAsync(s,Ln,ti).catch(()=>{}))).then(()=>(window.requestIdleCallback||(s=>setTimeout(s,50)))(t,{timeout:800}));(window.requestIdleCallback||(s=>setTimeout(s,200)))(i,{timeout:1500})}var kd=0;function Ty(n){let e=Math.min(.25,Math.max(0,(n-h0)/1e3));if(h0=n,ys+=e,Wo=e*_0,!Mt&&Fi&&!vs.classList.contains("hc-late")&&QS(e),y&&!Pn.hidden&&zS(n),Ss&&(Mt||n<cf)){dw(),Vw(),Gw(),$w(),Ie&&Ie.update(),mS(),qe.step(),Yw();let t=Ti.length||n<uf||n<cf||ji||Yn||ei||n-d0>2e3,i=aE();(t||i!==u0||S0!==Aa)&&(Ko(),n-kd<100&&Mt&&!document.hidden&&gw(n,n-kd),kd=n,d0=n,u0=i)}requestAnimationFrame(Ty)}function Bd(n){console.error(n),sh(!0);let e=document.getElementById("load-error");e.textContent=_e("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function lE(){St||!/[?&]preview\b/.test(location.search)||window.parent===window||(St=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,a])=>{try{s.files[r]=URL.createObjectURL(a)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:x0},"*")}catch{}}))}var Ay=()=>{let n=he((ve.settings.home||{}).sub||{}).trim();if(/\n/.test(n))return n.split(/\n+/).map(i=>i.trim()).filter(Boolean);let e=[],t="";return n.split(/(?<=,)\s+/).forEach(i=>{t&&(t+" "+i).length>62?(e.push(t),t=i):t=t?t+" "+i:i}),t&&e.push(t),e};function cE(){let n=document.getElementById("hc-intro");if(!n)return;let e=n.querySelector(".ln"),t=Ay();if(!t.length){n.remove();return}e.querySelectorAll(".l").forEach(r=>r.getAnimations().forEach(a=>a.cancel())),e.innerHTML="",t.forEach(r=>{let a=document.createElement("span");a.className="l",a.textContent=r,e.appendChild(a)});let i=0,s=0;[...e.children].forEach((r,a)=>{r.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:i,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),a===t.length-1&&(s=i),i+=Math.max(650,Math.min(1700,120+16*t[a].length))}),window.HC_INTRO={t0:performance.now(),video:s,depart:i+150}}var Pa=null;function Cy(){if(Pa){Fd(Pa,!0);return}let n=Ay();if(!n.length)return;let e=!Mt,t=document.createElement("div");t.id="hc-say",t.className=e?"home":"world",t.setAttribute("role","status");let i=document.createElement("div");i.className="ln",t.appendChild(i);let s=document.querySelector("#home-band .sl span, #slogan span");if(s){let o=getComputedStyle(s);i.style.fontFamily=o.fontFamily,i.style.fontWeight=o.fontWeight,i.style.fontStyle=o.fontStyle}n.forEach(o=>{let l=document.createElement("span");l.className="l",l.textContent=o,i.appendChild(l)}),(e?document.getElementById("home"):document.body).appendChild(t),Pa=t;let r=0;[...i.children].forEach((o,l)=>{o.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:r,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),r+=Math.max(650,Math.min(1700,120+16*n[l].length))}),t.animate([{opacity:0},{opacity:1}],{duration:500,fill:"both"}),t._t=setTimeout(()=>Fd(t),r+900);let a=o=>{o.target.closest&&o.target.closest("#home-about, #about-btn")||Fd(t,!0)};setTimeout(()=>{Pa===t&&(t._away=a,window.addEventListener("pointerdown",a,!0),window.addEventListener("keydown",a,!0))},50)}function Fd(n,e=!1){if(n._gone)return;n._gone=!0,clearTimeout(n._t),Pa===n&&(Pa=null),n._away&&(window.removeEventListener("pointerdown",n._away,!0),window.removeEventListener("keydown",n._away,!0));let t=[...n.querySelectorAll(".l")],i=e?80:Ry,s=e?450:750,r=(t.length-1)*i;t.forEach((a,o)=>a.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:s,delay:o*i,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),n.animate([{opacity:0}],{duration:600,delay:r+s*.4,fill:"forwards"}),setTimeout(()=>n.remove(),r+s+50)}var Ho=!1,Vo=!1,Lr=!1,nh=!1,zd=0,f0=0,p0=!1,Ry=240;function ih(){if(Lr)return;Lr=!0;let n=document.getElementById("hc-intro");n&&n.classList.remove("hold"),hE()}function sh(n=!1,e=!1){let t=document.getElementById("hc-intro");if(!t||Ho)return;if(Ho=!0,window.HC_NOINTRO=!0,n||!t.animate){t.remove(),ih(),y0(!0);return}e&&(ih(),vs.classList.remove("hc-stage"));let i=[...t.querySelectorAll(".l")],s=e?80:Ry,r=e?450:750,a=(i.length-1)*s;i.forEach((o,l)=>o.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:r,delay:l*s,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),setTimeout(ih,a),setTimeout(()=>y0(),a+r+(e?0:500)),setTimeout(()=>t.remove(),a+r+1300)}function hE(){if(!(!y||Mt)){if(y.reelOn&&y.rp&&!y.userReel)Vo||(Vo=!0,y.rp.seek(0),y.rp.play());else if(!y.reelOn&&!y.userReel&&!y.reelRefused&&!y.cam&&al()&&Or()&&!ll.matches&&!(St&&St.start)){let n=setInterval(()=>{if(Mt||y.reelOn||y.cam){clearInterval(n);return}Ur&&(clearInterval(n),ol(!0),rl(),m0())},150);return}m0()}}function m0(){let n=document.getElementById("home-snd");n&&!n.hidden&&!y.sound&&(n.classList.remove("blink"),n.offsetWidth,n.classList.add("blink"),setTimeout(()=>n.classList.remove("blink"),1400))}var vs=document.documentElement,g0="cubic-bezier(.22,.61,.36,1)";function uE(){if(!vs.classList.contains("hc-stage"))return;let n=()=>{if(!vs.classList.contains("hc-stage"))return;let t=document.querySelector("#home-slogan .wm"),i=[...document.querySelectorAll("#home-slogan .tls > span")],s=[...document.querySelectorAll("#home-ctl > *")];vs.classList.remove("hc-stage");let r=(l,c,h=-24,u=900)=>l&&l.animate([{opacity:0,transform:`translateX(${h}px)`,filter:"blur(6px)"},{opacity:getComputedStyle(l).opacity,transform:"none",filter:"blur(0)"}],{duration:u,delay:c,easing:g0,fill:"backwards"});r(t,0,-30,1100),i.forEach((l,c)=>r(l,380+c*130,-18,800)),s.forEach((l,c)=>l.animate([{opacity:0,transform:"scale(.6)"},{opacity:getComputedStyle(l).opacity,transform:"none"}],{duration:520,delay:760+c*90,easing:"cubic-bezier(.34,1.4,.64,1)",fill:"backwards"}));let a=document.getElementById("enter");a&&a.animate([{opacity:0,transform:"translate(-50%, 10px)"},{opacity:1,transform:"translateX(-50%)"}],{duration:700,delay:900,easing:g0,fill:"backwards"}),setTimeout(()=>{nh=!0},1150+s.length*60);let o=Math.max(1100,380+Math.max(0,i.length-1)*130+800,760+Math.max(0,s.length-1)*90+520)+120;setTimeout(()=>{let l=document.getElementById("hc-intro");l&&!Lr&&l.classList.add("beat-on")},o)};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(t=>setTimeout(t,1200))]):Promise.resolve()).then(()=>requestAnimationFrame(n))}function y0(n=!1){vs.classList.contains("hc-late")&&(vs.classList.remove("hc-stage","hc-late"),qs=0,Uo=0,Xs&&(Xs.shown=-1),!n&&["#ticker","#home-dock"].forEach((e,t)=>{let i=document.querySelector(e);i&&i.animate([{opacity:0},{opacity:getComputedStyle(i).opacity}],{duration:1200,delay:t*220,easing:"ease",fill:"backwards"})}))}function dE(){if(!document.getElementById("hc-intro"))return;let e=!!y&&al()&&Or()&&!ll.matches&&!(St&&St.start),t=!1,i=!e,s=0,r=()=>sh(!1,!0);["pointerdown","keydown","wheel","touchmove"].forEach(o=>window.addEventListener(o,r,{once:!0,passive:!0,capture:!0}));let a=setInterval(()=>{if(Ho&&Lr){clearInterval(a);return}if(Mt){clearInterval(a),sh(!0);return}e&&Ur&&!t&&!y.reelOn&&!y.cam&&!y.reelRefused&&(t=ol(!0)),t&&!i&&y.rp&&y.rp.t>.05&&(y.rp.pause(),y.rp.seek(0),i=!0),t&&!y.reelOn&&(i=!0);let o=performance.now(),l=!y||!y.rp?0:y.rp.kind==="youtube"?2900:y.rp.kind==="vimeo"?500:0;!nh&&!vs.classList.contains("hc-stage")&&!vs.classList.contains("hc-late")&&(nh=!0),!Lr&&nh&&(zd||(zd=o),l&&i&&y.reelOn&&!Vo&&(Vo=!0,s=o,y.rp.seek(0),y.rp.play()),((e?!y.reelOn||i&&(!l||Vo&&(y.rp.shown||o>=s+l+4e3)):Ur)||o-zd>7e3)&&(ih(),f0=o+1e3)),Lr&&!p0&&!Ho&&o>=f0&&(p0=!0,window.HC_GO&&window.HC_GO());let c=window.HC_INTRO;c&&!Ho&&Lr&&o>=c.t0+c.depart+600&&sh()},60)}(async function(){try{await lE(),St?ve=Gs(structuredClone(St.content)):(ve=await Zc.load(),Zc.prepare&&await Zc.prepare(ve))}catch(o){Bd(o);return}_n=xh(),B0();{let o=vf();o!==null&&(_n=o)}xf();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=ve.settings.langs&&ve.settings.langs.length?ve.settings.langs:ai,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(o=>String(o).toLowerCase().slice(0,2)).find(o=>t.includes(o)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}let r=((window.HC_ROUTE||{}).lang||"").toLowerCase();if(xn=t.includes(s)?s:t.includes(r)?r:t.includes(e)?e:i||ve.settings.defaultLang||t[0],Dt=ve.sections.filter(o=>o.visible).map(o=>({def:o})),!Dt.length){Bd(new Error("aucune section visible"));return}if(!St)try{let o={"nouveau-contenu":"immersive","nouveau-contenu-4":"la-traversee-du-temps","nouveau-contenu-5":"valentin-ducros","nouveau-contenu-7":"laurent-delforge","fat-site-2008":"les-debuts","nokia-navigator":"les-debuts",lexus:"les-debuts","pubs-interactives":"les-debuts"},l=new URLSearchParams(location.search).get("p")||(window.HC_ROUTE||{}).p,c=l&&!ve.posts.some(u=>u.id===l)&&o[l]?o[l]:l,h=c&&ve.posts.find(u=>u.id===c&&u.published!==!1&&Dt.some(d=>d.def.id===u.section));h&&(th=h.id,history.replaceState(null,"",location.pathname+location.search+"#"+h.section))}catch{}eS(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&b0(!1),Q0(),Rf(),jw(),_S(),St&&cE(),dE(),uE(),X0(),Rh(),wy(),requestAnimationFrame(Ty),Tr=Dt.map((o,l)=>new Xd(o.def,l)),Dt.forEach((o,l)=>{o.object=Tr[l]}),Dt.forEach(o=>{o.container=o.object.container,o.p=o.object.p});let a=new Dc(L0);try{(await Promise.allSettled(Tr.map(l=>l.load(a)))).forEach((l,c)=>{l.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+Tr[c].def.id+" \xBB :",l.reason)}),Tr.forEach((l,c)=>l.place(c)),await Promise.race([Promise.all(k0).then(sr),new Promise(l=>setTimeout(l,3e3))]),Ur=!0,oE();{let l=document.getElementById("seo-page");l&&l.remove()}if((cl||!Or()||St&&St.start)&&$f(),th){let l=th,c=performance.now(),h=setInterval(()=>{(bn||performance.now()-c>8e3)&&(clearInterval(h),bn&&il(l))},120)}}catch(o){Bd(o)}})();window.__hc={P:V,STYLE:oe,cam:yt,camera:Ln,renderer:Rn,get hv(){return y&&{cell:y.cell,floor:y.floor,fps:Math.round(1e3/y.interval),cost:+y.cost.toFixed(1),tainted:y.tainted}},get input(){return bn},get homeGone(){return Mt},get content(){return ve},get postsView(){return Ie},getToSectionView:nl,openThatPost:jo,closePost:Ms,goToPost:il,setLang:Lf,enter:()=>ir.click()};})();
