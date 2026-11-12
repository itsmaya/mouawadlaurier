/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var nd="160";var Ny=0,jf=1,Dy=2;var km=1,Uy=2,ss=3,Jn=0,yn=1,Xn=2;var Is=0,ca=1,Zf=2,Jf=3,Kf=4,id=5,Ri=100,Oy=101,ky=102,Qf=103,ep=104,Cc=200,sd=201,By=202,Fy=203,Mu=204,wu=205,zy=206,Hy=207,Vy=208,rd=209,Gy=210,Wy=211,$y=212,qy=213,Xy=214,Yy=0,jy=1,Zy=2,$l=3,Jy=4,Ky=5,Qy=6,ev=7,Rc=0,tv=1,nv=2,Ns=0,iv=1,sv=2,rv=3,av=4,ov=5,lv=6,tp="attached",cv="detached",Bm=300,da=301,fa=302,Su=303,Eu=304,Lc=306,Us=1e3,On=1001,Tu=1002,wn=1003,np=1004;var Hh=1005;var $n=1006,hv=1007;var Os=1008;var Ds=1009,uv=1010,dv=1011,ad=1012,Fm=1013,Ps=1014,as=1015,ho=1016,zm=1017,Hm=1018,mr=1020,fv=1021,di=1023,pv=1024,mv=1025,gr=1026,pa=1027,gv=1028,Vm=1029,yv=1030,Gm=1031,Wm=1033,Vh=33776,Gh=33777,Wh=33778,$h=33779,ip=35840,sp=35841,rp=35842,ap=35843,$m=36196,op=37492,lp=37496,cp=37808,hp=37809,up=37810,dp=37811,fp=37812,pp=37813,mp=37814,gp=37815,yp=37816,vp=37817,xp=37818,_p=37819,bp=37820,Mp=37821,qh=36492,wp=36494,Sp=36495,vv=36283,Ep=36284,Tp=36285,Ap=36286;var ql=2300,Xl=2301,Xh=2302,Cp=2400,Rp=2401,Lp=2402,xv=2500;var qm=3e3,yr=3001,_v=3200,bv=3201,od=0,Mv=1,fi="",Zt="srgb",ls="srgb-linear",ld="display-p3",Pc="display-p3-linear",Yl="linear",Wt="srgb",jl="rec709",Zl="p3";var Hr=7680;var Pp=519,wv=512,Sv=513,Ev=514,Xm=515,Tv=516,Av=517,Cv=518,Rv=519,Au=35044;var Ip="300 es",Cu=1035,os=2e3,Jl=2001,ks=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=1234567,ao=Math.PI/180,ma=180/Math.PI;function wi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function Un(n,e,t){return Math.max(e,Math.min(t,n))}function cd(n,e){return(n%e+e)%e}function Lv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Pv(n,e,t){return n!==e?(t-n)/(e-n):0}function oo(n,e,t){return(1-t)*n+t*e}function Iv(n,e,t,i){return oo(n,e,1-Math.exp(-t*i))}function Nv(n,e=1){return e-Math.abs(cd(n,e*2)-e)}function Dv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Uv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ov(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kv(n,e){return n+Math.random()*(e-n)}function Bv(n){return n*(.5-Math.random())}function Fv(n){n!==void 0&&(Np=n);let e=Np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zv(n){return n*ao}function Hv(n){return n*ma}function Ru(n){return(n&n-1)===0&&n!==0}function Vv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Hs={DEG2RAD:ao,RAD2DEG:ma,generateUUID:wi,clamp:Un,euclideanModulo:cd,mapLinear:Lv,inverseLerp:Pv,lerp:oo,damp:Iv,pingpong:Nv,smoothstep:Dv,smootherstep:Uv,randInt:Ov,randFloat:kv,randFloatSpread:Bv,seededRandom:Fv,degToRad:zv,radToDeg:Hv,isPowerOfTwo:Ru,ceilPowerOfTwo:Vv,floorPowerOfTwo:Kl,setQuaternionFromProperEuler:Gv,normalize:Nt,denormalize:Li},it=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],M=s[1],_=s[4],I=s[7],L=s[2],T=s[5],D=s[8];return r[0]=o*v+a*M+l*L,r[3]=o*m+a*_+l*T,r[6]=o*f+a*I+l*D,r[1]=c*v+h*M+u*L,r[4]=c*m+h*_+u*T,r[7]=c*f+h*I+u*D,r[2]=d*v+p*M+g*L,r[5]=d*m+p*_+g*T,r[8]=d*f+p*I+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yh.makeScale(e,t)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yh=new yt;function Ym(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wv(){let n=uo("canvas");return n.style.display="block",n}var Dp={};function lo(n){n in Dp||(Dp[n]=!0,console.warn(n))}var Up=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Op=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gl={[ls]:{transfer:Yl,primaries:jl,toReference:n=>n,fromReference:n=>n},[Zt]:{transfer:Wt,primaries:jl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pc]:{transfer:Yl,primaries:Zl,toReference:n=>n.applyMatrix3(Op),fromReference:n=>n.applyMatrix3(Up)},[ld]:{transfer:Wt,primaries:Zl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Op),fromReference:n=>n.applyMatrix3(Up).convertLinearToSRGB()}},$v=new Set([ls,Pc]),Dt={enabled:!0,_workingColorSpace:ls,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$v.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=gl[e].toReference,s=gl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return gl[n].primaries},getTransfer:function(n){return n===fi?Yl:gl[n].transfer}};function ha(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vr,Ql=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=uo("canvas")),Vr.width=e.width,Vr.height=e.height;let i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ha(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ha(t[i]/255)*255):t[i]=ha(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qv=0,ec=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zh(s[o].image)):r.push(Zh(s[o]))}else r=Zh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xv=0,Kn=class n extends ks{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=On,s=On,r=$n,o=Os,a=di,l=Ds,c=n.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=wi(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yr?Zt:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?yr:qm}set encoding(e){lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?Zt:fi}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Bm;Kn.DEFAULT_ANISOTROPY=1;var bt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,I=(p+1)/2,L=(f+1)/2,T=(h+d)/4,D=(u+v)/4,F=(g+m)/4;return _>I&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=D/i):I>L?I<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),i=T/s,r=F/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=D/r,s=F/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lu=class extends ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?Zt:fi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Kn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cs=class extends Lu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},tc=class extends Kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pu=class extends Kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*v,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let L=Math.sqrt(_),T=Math.atan2(L,f*M);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}let I=a*M;if(l=l*m+d*I,c=c*m+p*I,h=h*m+g*I,u=u*m+v*I,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jh=new U,kp=new Pi,vn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),vl.subVectors(this.max,Ka),Gr.subVectors(e.a,Ka),Wr.subVectors(e.b,Ka),$r.subVectors(e.c,Ka),Ts.subVectors(Wr,Gr),As.subVectors($r,Wr),lr.subVectors(Gr,$r);let t=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-lr.z,lr.y,Ts.z,0,-Ts.x,As.z,0,-As.x,lr.z,0,-lr.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-lr.y,lr.x,0];return!Kh(t,Gr,Wr,$r,vl)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,Gr,Wr,$r,vl))?!1:(xl.crossVectors(Ts,As),t=[xl.x,xl.y,xl.z],Kh(t,Gr,Wr,$r,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ki=[new U,new U,new U,new U,new U,new U,new U,new U],_i=new U,yl=new vn,Gr=new U,Wr=new U,$r=new U,Ts=new U,As=new U,lr=new U,Ka=new U,vl=new U,xl=new U,cr=new U;function Kh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cr.fromArray(n,r);let a=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yv=new vn,Qa=new U,Qh=new U,pi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Yv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);let t=Qa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(Qh)),this.expandByPoint(Qa.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new U,eu=new U,_l=new U,Cs=new U,tu=new U,bl=new U,nu=new U,ga=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){eu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(eu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=Cs.dot(this.direction),l=-Cs.dot(_l),c=Cs.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(eu).addScaledVector(_l,d),p}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);let i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,s,r){tu.subVectors(t,e),bl.subVectors(i,e),nu.crossVectors(tu,bl);let o=this.direction.dot(nu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cs.subVectors(this.origin,e);let l=a*this.direction.dot(bl.crossVectors(Cs,bl));if(l<0)return null;let c=a*this.direction.dot(tu.cross(Cs));if(c<0||l+c>o)return null;let h=-a*Cs.dot(nu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Zv)}lookAt(e,t,i){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Rs.crossVectors(i,ii),Rs.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Rs.crossVectors(i,ii)),Rs.normalize(),Ml.crossVectors(ii,Rs),s[0]=Rs.x,s[4]=Ml.x,s[8]=ii.x,s[1]=Rs.y,s[5]=Ml.y,s[9]=ii.y,s[2]=Rs.z,s[6]=Ml.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],M=i[3],_=i[7],I=i[11],L=i[15],T=s[0],D=s[4],F=s[8],w=s[12],S=s[1],B=s[5],ne=s[9],le=s[13],k=s[2],G=s[6],z=s[10],ie=s[14],Y=s[3],$=s[7],J=s[11],j=s[15];return r[0]=o*T+a*S+l*k+c*Y,r[4]=o*D+a*B+l*G+c*$,r[8]=o*F+a*ne+l*z+c*J,r[12]=o*w+a*le+l*ie+c*j,r[1]=h*T+u*S+d*k+p*Y,r[5]=h*D+u*B+d*G+p*$,r[9]=h*F+u*ne+d*z+p*J,r[13]=h*w+u*le+d*ie+p*j,r[2]=g*T+v*S+m*k+f*Y,r[6]=g*D+v*B+m*G+f*$,r[10]=g*F+v*ne+m*z+f*J,r[14]=g*w+v*le+m*ie+f*j,r[3]=M*T+_*S+I*k+L*Y,r[7]=M*D+_*B+I*G+L*$,r[11]=M*F+_*ne+I*z+L*J,r[15]=M*w+_*le+I*ie+L*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],M=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,I=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,L=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,T=t*M+i*_+s*I+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return e[0]=M*D,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*D,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*D,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*D,e[4]=_*D,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*D,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*D,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*D,e[8]=I*D,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*D,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*D,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*D,e[12]=L*D,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*D,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*D,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,M=l*c,_=l*h,I=l*u,L=i.x,T=i.y,D=i.z;return s[0]=(1-(v+f))*L,s[1]=(p+I)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(p-I)*T,s[5]=(1-(d+f))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+_)*D,s[9]=(m-M)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=qr.set(s[0],s[1],s[2]).length(),o=qr.set(s[4],s[5],s[6]).length(),a=qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);let c=1/r,h=1/o,u=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,t.setFromRotationMatrix(bi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=os){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===os)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=os){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h,g,v;if(a===os)g=(o+r)*u,v=-2*u;else if(a===Jl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},qr=new U,bi=new ot,jv=new U(0,0,0),Zv=new U(1,1,1),Rs=new U,Ml=new U,ii=new U,Bp=new ot,Fp=new Pi,nc=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nc.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jv=0,zp=new U,Xr=new Pi,es=new ot,wl=new U,eo=new U,Kv=new U,Qv=new Pi,Hp=new U(1,0,0),Vp=new U(0,1,0),Gp=new U(0,0,1),ex={type:"added"},tx={type:"removed"},Qt=class n extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new nc,i=new Pi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new yt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,t){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wl.copy(e):wl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(eo,wl,this.up):es.lookAt(wl,eo,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(es),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ex)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new U(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new U,ts=new U,iu=new U,ns=new U,Yr=new U,jr=new U,Wp=new U,su=new U,ru=new U,au=new U,Sl=!1,pr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mi.subVectors(s,t),ts.subVectors(i,t),iu.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(ts),l=Mi.dot(iu),c=ts.dot(ts),h=ts.dot(iu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getUV(e,t,i,s,r,o,a,l){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(o,ns.y),l.addScaledVector(a,ns.z),l)}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),ts.subVectors(e,t),Mi.cross(ts).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),Mi.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Yr.subVectors(s,i),jr.subVectors(r,i),su.subVectors(e,i);let l=Yr.dot(su),c=jr.dot(su);if(l<=0&&c<=0)return t.copy(i);ru.subVectors(e,s);let h=Yr.dot(ru),u=jr.dot(ru);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Yr,o);au.subVectors(e,r);let p=Yr.dot(au),g=jr.dot(au);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(jr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Wp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Wp,a);let f=1/(m+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(Yr,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},El={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ht=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Dt.workingColorSpace){if(e=cd(e,1),t=Un(t,0,1),i=Un(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ou(o,r,e+1/3),this.g=ou(o,r,e),this.b=ou(o,r,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let i=jm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=jh(e.r),this.g=jh(e.g),this.b=jh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Dt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Un(Dn.r*255,0,255))*65536+Math.round(Un(Dn.g*255,0,255))*256+Math.round(Un(Dn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Dn.copy(this),t);let i=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Zt){Dt.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,i=Dn.g,s=Dn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(El);let i=oo(Ls.h,El.h,t),s=oo(Ls.s,El.s,t),r=oo(Ls.l,El.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new ht;ht.NAMES=jm;var nx=0,Ii=class extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ca,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=wu,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mu&&(i.blendSrc=this.blendSrc),this.blendDst!==wu&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var an=new U,Tl=new it,ri=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),e}};var ic=class extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sc=class extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var zt=class extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ix=0,ui=new ot,lu=new Qt,Zr=new U,si=new vn,to=new vn,gn=new U,Qn=class n extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?sc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new yt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(si.min,to.min),si.expandByPoint(gn),gn.addVectors(si.max,to.max),si.expandByPoint(gn)):(si.expandByPoint(to.min),si.expandByPoint(to.max))}si.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),gn.add(Zr)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new U,h[S]=new U;let u=new U,d=new U,p=new U,g=new it,v=new it,m=new it,f=new U,M=new U;function _(S,B,ne){u.fromArray(s,S*3),d.fromArray(s,B*3),p.fromArray(s,ne*3),g.fromArray(o,S*2),v.fromArray(o,B*2),m.fromArray(o,ne*2),d.sub(u),p.sub(u),v.sub(g),m.sub(g);let le=1/(v.x*m.y-m.x*v.y);isFinite(le)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(le),M.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(le),c[S].add(f),c[B].add(f),c[ne].add(f),h[S].add(M),h[B].add(M),h[ne].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let S=0,B=I.length;S<B;++S){let ne=I[S],le=ne.start,k=ne.count;for(let G=le,z=le+k;G<z;G+=3)_(i[G+0],i[G+1],i[G+2])}let L=new U,T=new U,D=new U,F=new U;function w(S){D.fromArray(r,S*3),F.copy(D);let B=c[S];L.copy(B),L.sub(D.multiplyScalar(D.dot(B))).normalize(),T.crossVectors(F,B);let le=T.dot(h[S])<0?-1:1;l[S*4]=L.x,l[S*4+1]=L.y,l[S*4+2]=L.z,l[S*4+3]=le}for(let S=0,B=I.length;S<B;++S){let ne=I[S],le=ne.start,k=ne.count;for(let G=le,z=le+k;G<z;G+=3)w(i[G+0]),w(i[G+1]),w(i[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ri(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$p=new ot,hr=new ga,Al=new pi,qp=new U,Jr=new U,Kr=new U,Qr=new U,cu=new U,Cl=new U,Rl=new it,Ll=new it,Pl=new it,Xp=new U,Yp=new U,jp=new U,Il=new U,Nl=new U,Ft=class extends Qt{constructor(e=new Qn,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(cu.fromBufferAttribute(u,e),o?Cl.addScaledVector(cu,h):Cl.addScaledVector(cu.sub(t),h))}t.add(Cl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Al.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Al,qp)===null||hr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&($p.copy(r).invert(),hr.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let I=M,L=_;I<L;I+=3){let T=a.getX(I),D=a.getX(I+1),F=a.getX(I+2);s=Dl(this,f,e,i,c,h,u,T,D,F),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=a.getX(m),_=a.getX(m+1),I=a.getX(m+2);s=Dl(this,o,e,i,c,h,u,M,_,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let I=M,L=_;I<L;I+=3){let T=I,D=I+1,F=I+2;s=Dl(this,f,e,i,c,h,u,T,D,F),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=m,_=m+1,I=m+2;s=Dl(this,o,e,i,c,h,u,M,_,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function sx(n,e,t,i,s,r,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;Nl.copy(a),Nl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Nl);return c<t.near||c>t.far?null:{distance:c,point:Nl.clone(),object:n}}function Dl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Jr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,Qr);let h=sx(n,e,t,i,Jr,Kr,Qr,Il);if(h){s&&(Rl.fromBufferAttribute(s,a),Ll.fromBufferAttribute(s,l),Pl.fromBufferAttribute(s,c),h.uv=pr.getInterpolation(Il,Jr,Kr,Qr,Rl,Ll,Pl,new it)),r&&(Rl.fromBufferAttribute(r,a),Ll.fromBufferAttribute(r,l),Pl.fromBufferAttribute(r,c),h.uv1=pr.getInterpolation(Il,Jr,Kr,Qr,Rl,Ll,Pl,new it),h.uv2=h.uv1),o&&(Xp.fromBufferAttribute(o,a),Yp.fromBufferAttribute(o,l),jp.fromBufferAttribute(o,c),h.normal=pr.getInterpolation(Il,Jr,Kr,Qr,Xp,Yp,jp,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};pr.getNormal(Jr,Kr,Qr,u.normal),h.face=u}return h}var po=class n extends Qn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(v,m,f,M,_,I,L,T,D,F,w){let S=I/D,B=L/F,ne=I/2,le=L/2,k=T/2,G=D+1,z=F+1,ie=0,Y=0,$=new U;for(let J=0;J<z;J++){let j=J*B-le;for(let ue=0;ue<G;ue++){let V=ue*S-ne;$[v]=V*M,$[m]=j*_,$[f]=k,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(ue/D),u.push(1-J/F),ie+=1}}for(let J=0;J<F;J++)for(let j=0;j<D;j++){let ue=d+j+G*J,V=d+j+G*(J+1),X=d+(j+1)+G*(J+1),se=d+(j+1)+G*J;l.push(ue,V,se),l.push(V,X,se),Y+=6}a.addGroup(p,Y,w),p+=Y,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ya(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wn(n){let e={};for(let t=0;t<n.length;t++){let i=ya(n[t]);for(let s in i)e[s]=i[s]}return e}function rx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zm(n){return n.getRenderTarget()===null?n.outputColorSpace:Dt.workingColorSpace}var Ic={clone:ya,merge:Wn},ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},rc=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=os}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},on=class extends rc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ea=-90,ta=1,Iu=class extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ea,ta,e,t);s.layers=this.layers,this.add(s);let r=new on(ea,ta,e,t);r.layers=this.layers,this.add(r);let o=new on(ea,ta,e,t);o.layers=this.layers,this.add(o);let a=new on(ea,ta,e,t);a.layers=this.layers,this.add(a);let l=new on(ea,ta,e,t);l.layers=this.layers,this.add(l);let c=new on(ea,ta,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===os)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ac=class extends Kn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:da,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nu=class extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yr?Zt:fi),this.texture=new ac(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new po(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Is});r.uniforms.tEquirect.value=t;let o=new Ft(s,r),a=t.minFilter;return t.minFilter===Os&&(t.minFilter=$n),new Iu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},hu=new U,lx=new U,cx=new yt,rs=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hu.subVectors(i,t).cross(lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||cx.getNormalMatrix(e),s=this.coplanarPoint(hu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ur=new pi,Ul=new U,mo=class{constructor(e=new rs,t=new rs,i=new rs,s=new rs,r=new rs,o=new rs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=os){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],M=s[13],_=s[14],I=s[15];if(i[0].setComponents(l-r,d-c,m-p,I-f).normalize(),i[1].setComponents(l+r,d+c,m+p,I+f).normalize(),i[2].setComponents(l+o,d+h,m+g,I+M).normalize(),i[3].setComponents(l-o,d-h,m-g,I-M).normalize(),i[4].setComponents(l-a,d-u,m-v,I-_).normalize(),t===os)i[5].setComponents(l+a,d+u,m+v,I+_).normalize();else if(t===Jl)i[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ul.x=s.normal.x>0?e.max.x:e.min.x,Ul.y=s.normal.y>0?e.max.y:e.min.y,Ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Ni=class n extends Qn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let _=0;_<c;_++){let I=_*u-r;g.push(I,-M,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let _=M+c*f,I=M+c*(f+1),L=M+1+c*(f+1),T=M+1+c*f;p.push(_,I,T),p.push(I,L,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
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
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dx=`#define PI 3.141592653589793
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
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ox=`vec3 transformedNormal = objectNormal;
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
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`
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
}`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i_=`uniform bool receiveShadow;
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
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,r_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c_=`PhysicalMaterial material;
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
#endif`,h_=`struct PhysicalMaterial {
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
}`,u_=`
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
#endif`,d_=`#if defined( RE_IndirectDiffuse )
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
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,__=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b_=`#if defined( USE_POINTS_UV )
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
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
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
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
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
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
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
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j_=`float getShadowMask() {
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
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ub=`uniform sampler2D t2D;
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`#include <common>
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
}`,yb=`#if DEPTH_PACKING == 3200
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
}`,vb=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#define LAMBERT
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
}`,Ab=`#define LAMBERT
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
}`,Cb=`#define MATCAP
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
}`,Rb=`#define MATCAP
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
}`,Lb=`#define NORMAL
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
}`,Pb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Nb=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,Ub=`#define STANDARD
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
}`,Ob=`#define TOON
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
}`,kb=`#define TOON
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
}`,Bb=`uniform float size;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,Hb=`uniform vec3 color;
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
}`,Vb=`uniform float rotation;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ux,alphahash_pars_fragment:dx,alphamap_fragment:fx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:yx,aomap_pars_fragment:vx,batching_pars_vertex:xx,batching_vertex:_x,begin_vertex:bx,beginnormal_vertex:Mx,bsdfs:wx,iridescence_fragment:Sx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Rx,color_fragment:Lx,color_pars_fragment:Px,color_pars_vertex:Ix,color_vertex:Nx,common:Dx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Ox,displacementmap_pars_vertex:kx,displacementmap_vertex:Bx,emissivemap_fragment:Fx,emissivemap_pars_fragment:zx,colorspace_fragment:Hx,colorspace_pars_fragment:Vx,envmap_fragment:Gx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:$x,envmap_pars_vertex:qx,envmap_physical_pars_fragment:s_,envmap_vertex:Xx,fog_vertex:Yx,fog_pars_vertex:jx,fog_fragment:Zx,fog_pars_fragment:Jx,gradientmap_pars_fragment:Kx,lightmap_fragment:Qx,lightmap_pars_fragment:e_,lights_lambert_fragment:t_,lights_lambert_pars_fragment:n_,lights_pars_begin:i_,lights_toon_fragment:r_,lights_toon_pars_fragment:a_,lights_phong_fragment:o_,lights_phong_pars_fragment:l_,lights_physical_fragment:c_,lights_physical_pars_fragment:h_,lights_fragment_begin:u_,lights_fragment_maps:d_,lights_fragment_end:f_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:y_,map_fragment:v_,map_pars_fragment:x_,map_particle_fragment:__,map_particle_pars_fragment:b_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:w_,morphcolor_vertex:S_,morphnormal_vertex:E_,morphtarget_pars_vertex:T_,morphtarget_vertex:A_,normal_fragment_begin:C_,normal_fragment_maps:R_,normal_pars_fragment:L_,normal_pars_vertex:P_,normal_vertex:I_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:O_,iridescence_pars_fragment:k_,opaque_fragment:B_,packing:F_,premultiplied_alpha_fragment:z_,project_vertex:H_,dithering_fragment:V_,dithering_pars_fragment:G_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:q_,shadowmap_pars_vertex:X_,shadowmap_vertex:Y_,shadowmask_pars_fragment:j_,skinbase_vertex:Z_,skinning_pars_vertex:J_,skinning_vertex:K_,skinnormal_vertex:Q_,specularmap_fragment:eb,specularmap_pars_fragment:tb,tonemapping_fragment:nb,tonemapping_pars_fragment:ib,transmission_fragment:sb,transmission_pars_fragment:rb,uv_pars_fragment:ab,uv_pars_vertex:ob,uv_vertex:lb,worldpos_vertex:cb,background_vert:hb,background_frag:ub,backgroundCube_vert:db,backgroundCube_frag:fb,cube_vert:pb,cube_frag:mb,depth_vert:gb,depth_frag:yb,distanceRGBA_vert:vb,distanceRGBA_frag:xb,equirect_vert:_b,equirect_frag:bb,linedashed_vert:Mb,linedashed_frag:wb,meshbasic_vert:Sb,meshbasic_frag:Eb,meshlambert_vert:Tb,meshlambert_frag:Ab,meshmatcap_vert:Cb,meshmatcap_frag:Rb,meshnormal_vert:Lb,meshnormal_frag:Pb,meshphong_vert:Ib,meshphong_frag:Nb,meshphysical_vert:Db,meshphysical_frag:Ub,meshtoon_vert:Ob,meshtoon_frag:kb,points_vert:Bb,points_frag:Fb,shadow_vert:zb,shadow_frag:Hb,sprite_vert:Vb,sprite_frag:Gb},be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},qn={basic:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Wn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Wn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Wn([be.points,be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Wn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Wn([be.common,be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Wn([be.sprite,be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Wn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Wn([be.lights,be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};qn.physical={uniforms:Wn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ol={r:0,b:0,g:0};function Wb(n,e,t,i,s,r,o){let a=new ht(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let M=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),M=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Lc)?(h===void 0&&(h=new Ft(new po(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ya(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(_.colorSpace)!==Wt,(u!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ft(new Ni(2,2),new Si({name:"BackgroundMaterial",uniforms:ya(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(_.colorSpace)!==Wt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Ol,Zm(n)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function $b(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(k,G,z,ie,Y){let $=!1;if(o){let J=v(ie,z,G);c!==J&&(c=J,p(c.object)),$=f(k,ie,z,Y),$&&M(k,ie,z,Y)}else{let J=G.wireframe===!0;(c.geometry!==ie.id||c.program!==z.id||c.wireframe!==J)&&(c.geometry=ie.id,c.program=z.id,c.wireframe=J,$=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,F(k,G,z,ie),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function v(k,G,z){let ie=z.wireframe===!0,Y=a[k.id];Y===void 0&&(Y={},a[k.id]=Y);let $=Y[G.id];$===void 0&&($={},Y[G.id]=$);let J=$[ie];return J===void 0&&(J=m(d()),$[ie]=J),J}function m(k){let G=[],z=[],ie=[];for(let Y=0;Y<s;Y++)G[Y]=0,z[Y]=0,ie[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:ie,object:k,attributes:{},index:null}}function f(k,G,z,ie){let Y=c.attributes,$=G.attributes,J=0,j=z.getAttributes();for(let ue in j)if(j[ue].location>=0){let X=Y[ue],se=$[ue];if(se===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;J++}return c.attributesNum!==J||c.index!==ie}function M(k,G,z,ie){let Y={},$=G.attributes,J=0,j=z.getAttributes();for(let ue in j)if(j[ue].location>=0){let X=$[ue];X===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(X=k.instanceColor));let se={};se.attribute=X,X&&X.data&&(se.data=X.data),Y[ue]=se,J++}c.attributes=Y,c.attributesNum=J,c.index=ie}function _(){let k=c.newAttributes;for(let G=0,z=k.length;G<z;G++)k[G]=0}function I(k){L(k,0)}function L(k,G){let z=c.newAttributes,ie=c.enabledAttributes,Y=c.attributeDivisors;z[k]=1,ie[k]===0&&(n.enableVertexAttribArray(k),ie[k]=1),Y[k]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,G),Y[k]=G)}function T(){let k=c.newAttributes,G=c.enabledAttributes;for(let z=0,ie=G.length;z<ie;z++)G[z]!==k[z]&&(n.disableVertexAttribArray(z),G[z]=0)}function D(k,G,z,ie,Y,$,J){J===!0?n.vertexAttribIPointer(k,G,z,Y,$):n.vertexAttribPointer(k,G,z,ie,Y,$)}function F(k,G,z,ie){if(i.isWebGL2===!1&&(k.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Y=ie.attributes,$=z.getAttributes(),J=G.defaultAttributeValues;for(let j in $){let ue=$[j];if(ue.location>=0){let V=Y[j];if(V===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),V!==void 0){let X=V.normalized,se=V.itemSize,re=t.get(V);if(re===void 0)continue;let ce=re.buffer,Ce=re.type,ze=re.bytesPerElement,Ve=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||V.gpuType===Fm);if(V.isInterleavedBufferAttribute){let mt=V.data,q=mt.stride,et=V.offset;if(mt.isInstancedInterleavedBuffer){for(let ke=0;ke<ue.locationSize;ke++)L(ue.location+ke,mt.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ke=0;ke<ue.locationSize;ke++)I(ue.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let ke=0;ke<ue.locationSize;ke++)D(ue.location+ke,se/ue.locationSize,Ce,X,q*ze,(et+se/ue.locationSize*ke)*ze,Ve)}else{if(V.isInstancedBufferAttribute){for(let mt=0;mt<ue.locationSize;mt++)L(ue.location+mt,V.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let mt=0;mt<ue.locationSize;mt++)I(ue.location+mt);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let mt=0;mt<ue.locationSize;mt++)D(ue.location+mt,se/ue.locationSize,Ce,X,se*ze,se/ue.locationSize*mt*ze,Ve)}}else if(J!==void 0){let X=J[j];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(ue.location,X);break;case 3:n.vertexAttrib3fv(ue.location,X);break;case 4:n.vertexAttrib4fv(ue.location,X);break;default:n.vertexAttrib1fv(ue.location,X)}}}}T()}function w(){ne();for(let k in a){let G=a[k];for(let z in G){let ie=G[z];for(let Y in ie)g(ie[Y].object),delete ie[Y];delete G[z]}delete a[k]}}function S(k){if(a[k.id]===void 0)return;let G=a[k.id];for(let z in G){let ie=G[z];for(let Y in ie)g(ie[Y].object),delete ie[Y];delete G[z]}delete a[k.id]}function B(k){for(let G in a){let z=a[G];if(z[k.id]===void 0)continue;let ie=z[k.id];for(let Y in ie)g(ie[Y].object),delete ie[Y];delete z[k.id]}}function ne(){le(),h=!0,c!==l&&(c=l,p(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ne,resetDefaultState:le,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:I,disableUnusedAttributes:T}}function qb(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Xb(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,I=o||e.has("OES_texture_float"),L=_&&I,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:I,floatVertexTextures:L,maxSamples:T}}function Yb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new rs,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,_=M*4,I=f.clippingState||null;l.value=I,I=h(g,d,_,p);for(let L=0;L!==_;++L)I[L]=t[L];f.clippingState=I,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,I=p;_!==v;++_,I+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(m,I),m[I+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function jb(n){let e=new WeakMap;function t(o,a){return a===Su?o.mapping=da:a===Eu&&(o.mapping=fa),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Su||a===Eu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Nu(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Bs=class extends rc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oa=4,Zp=[.125,.215,.35,.446,.526,.582],fr=20,uu=new Bs,Jp=new ht,du=null,fu=0,pu=0,dr=(1+Math.sqrt(5))/2,na=1/dr,Kp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,dr,na),new U(0,dr,-na),new U(na,0,dr),new U(-na,0,dr),new U(dr,na,0),new U(-dr,na,0)],oc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,pu),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ho,format:di,colorSpace:ls,depthBuffer:!1},s=Qp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zb(r)),this._blurMaterial=Jb(r,e,t)}return s}_compileMaterial(e){let t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,i,s){let a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jp),h.toneMapping=Ns,h.autoClear=!1;let p=new nn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Ft(new po,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jp),v=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;kl(s,M*_,f>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===da||e.mapping===fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;kl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,uu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kp[(s-1)%Kp.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fr-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fr;m>fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let f=[],M=0;for(let D=0;D<fr;++D){let F=D/v,w=Math.exp(-F*F/2);f.push(w),D===0?M+=w:D<m&&(M+=2*w)}for(let D=0;D<f.length;D++)f[D]=f[D]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let I=this._sizeLods[s],L=3*I*(s>_-oa?s-_+oa:0),T=4*(this._cubeSize-I);kl(t,L,T,3*I,2*I),l.setRenderTarget(t),l.render(u,uu)}};function Zb(n){let e=[],t=[],i=[],s=n,r=n-oa+1+Zp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-oa?l=Zp[o-n+oa-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,M=new Float32Array(v*g*p),_=new Float32Array(m*g*p),I=new Float32Array(f*g*p);for(let T=0;T<p;T++){let D=T%3*2/3-1,F=T>2?0:-1,w=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];M.set(w,v*g*T),_.set(d,m*g*T);let S=[T,T,T,T,T,T];I.set(S,f*g*T)}let L=new Qn;L.setAttribute("position",new ri(M,v)),L.setAttribute("uv",new ri(_,m)),L.setAttribute("faceIndex",new ri(I,f)),e.push(L),s>oa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qp(n,e,t){let i=new cs(n,e,t);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Jb(n,e,t){let i=new Float32Array(fr),s=new U(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hd(),fragmentShader:`

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
	`}function Kb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Su||l===Eu,h=l===da||l===fa;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new oc(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new oc(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Qb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function e1(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let M=p.array;v=p.version;for(let _=0,I=M.length;_<I;_+=3){let L=M[_+0],T=M[_+1],D=M[_+2];d.push(L,T,T,D,D,L)}}else if(g!==void 0){let M=g.array;v=g.version;for(let _=0,I=M.length/3-1;_<I;_+=3){let L=_+0,T=_+1,D=_+2;d.push(L,T,T,D,D,L)}}else return;let m=new(Ym(d)?sc:ic)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function t1(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let f=0;for(let M=0;M<v;M++)f+=g[M];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function n1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function i1(n,e){return n[0]-e[0]}function s1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function r1(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==g){let k=function(){ne.dispose(),r.delete(h),h.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],F=0;M===!0&&(F=1),_===!0&&(F=2),I===!0&&(F=3);let w=h.attributes.position.count*F,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let B=new Float32Array(w*S*4*g),ne=new tc(B,w,S,g);ne.type=as,ne.needsUpdate=!0;let le=F*4;for(let G=0;G<g;G++){let z=L[G],ie=T[G],Y=D[G],$=w*S*4*G;for(let J=0;J<z.count;J++){let j=J*le;M===!0&&(o.fromBufferAttribute(z,J),B[$+j+0]=o.x,B[$+j+1]=o.y,B[$+j+2]=o.z,B[$+j+3]=0),_===!0&&(o.fromBufferAttribute(ie,J),B[$+j+4]=o.x,B[$+j+5]=o.y,B[$+j+6]=o.z,B[$+j+7]=0),I===!0&&(o.fromBufferAttribute(Y,J),B[$+j+8]=o.x,B[$+j+9]=o.y,B[$+j+10]=o.z,B[$+j+11]=Y.itemSize===4?o.w:1)}}v={count:g,texture:ne,size:new it(w,S)},r.set(h,v),h.addEventListener("dispose",k)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<p;_++){let I=g[_];I[0]=_,I[1]=d[_]}g.sort(s1);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(i1);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let I=a[_],L=I[0],T=I[1];L!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+_)!==v[L]&&h.setAttribute("morphTarget"+_,v[L]),m&&h.getAttribute("morphNormal"+_)!==m[L]&&h.setAttribute("morphNormal"+_,m[L]),s[_]=T,f+=T):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function a1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var lc=class extends Kn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:gr,h!==gr&&h!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gr&&(i=Ps),i===void 0&&h===pa&&(i=mr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Km=new Kn,Qm=new lc(1,1);Qm.compareFunction=Xm;var eg=new tc,tg=new Pu,ng=new ac,nm=[],im=[],sm=new Float32Array(16),rm=new Float32Array(9),am=new Float32Array(4);function Sa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=nm[s];if(r===void 0&&(r=new Float32Array(s),nm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nc(n,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function o1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function h1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function u1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;am.set(i),n.uniformMatrix2fv(this.addr,!1,am),dn(t,i)}}function d1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;rm.set(i),n.uniformMatrix3fv(this.addr,!1,rm),dn(t,i)}}function f1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;sm.set(i),n.uniformMatrix4fv(this.addr,!1,sm),dn(t,i)}}function p1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function v1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function x1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Qm:Km;t.setTexture2D(e||r,s)}function w1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tg,s)}function S1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ng,s)}function E1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||eg,s)}function T1(n){switch(n){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return h1;case 35674:return u1;case 35675:return d1;case 35676:return f1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return y1;case 5125:return v1;case 36294:return x1;case 36295:return _1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return E1}}function A1(n,e){n.uniform1fv(this.addr,e)}function C1(n,e){let t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function R1(n,e){let t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function L1(n,e){let t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function P1(n,e){let t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I1(n,e){let t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N1(n,e){let t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D1(n,e){n.uniform1iv(this.addr,e)}function U1(n,e){n.uniform2iv(this.addr,e)}function O1(n,e){n.uniform3iv(this.addr,e)}function k1(n,e){n.uniform4iv(this.addr,e)}function B1(n,e){n.uniform1uiv(this.addr,e)}function F1(n,e){n.uniform2uiv(this.addr,e)}function z1(n,e){n.uniform3uiv(this.addr,e)}function H1(n,e){n.uniform4uiv(this.addr,e)}function V1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Km,r[o])}function G1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tg,r[o])}function W1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ng,r[o])}function $1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||eg,r[o])}function q1(n){switch(n){case 5126:return A1;case 35664:return C1;case 35665:return R1;case 35666:return L1;case 35674:return P1;case 35675:return I1;case 35676:return N1;case 5124:case 35670:return D1;case 35667:case 35671:return U1;case 35668:case 35672:return O1;case 35669:case 35673:return k1;case 5125:return B1;case 36294:return F1;case 36295:return z1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return $1}}var Du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T1(t.type)}},Uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q1(t.type)}},Ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},mu=/(\w+)(\])?(\[|\.)?/g;function om(n,e){n.seq.push(e),n.map[e.id]=e}function X1(n,e,t){let i=n.name,s=i.length;for(mu.lastIndex=0;;){let r=mu.exec(i),o=mu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){om(t,c===void 0?new Du(a,n,e):new Uu(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ou(a),om(t,u)),t=u}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);X1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function lm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Y1=37297,j1=0;function Z1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function J1(n){let e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(n),i;switch(e===t?i="":e===Zl&&t===jl?i="LinearDisplayP3ToLinearSRGB":e===jl&&t===Zl&&(i="LinearSRGBToLinearDisplayP3"),n){case ls:case Pc:return[i,"LinearTransferOETF"];case Zt:case ld:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Z1(n.getShaderSource(e),o)}else return s}function K1(n,e){let t=J1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Q1(n,e){let t;switch(e){case iv:t="Linear";break;case sv:t="Reinhard";break;case rv:t="OptimizedCineon";break;case av:t="ACESFilmic";break;case lv:t="AgX";break;case ov:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)}function tM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(la).join(`
`)}function nM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function la(n){return n!==""}function hm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(n){return n.replace(sM,aM)}var rM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aM(n,e){let t=pt[e];if(t===void 0){let i=rM.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ku(t)}var oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(n){return n.replace(oM,lM)}function lM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ss&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case da:case fa:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function dM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case tv:e="ENVMAP_BLENDING_MIX";break;case nv:e="ENVMAP_BLENDING_ADD";break}return e}function fM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cM(t),c=hM(t),h=uM(t),u=dM(t),d=fM(t),p=t.isWebGL2?"":eM(t),g=tM(t),v=nM(r),m=s.createProgram(),f,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),M.length>0&&(M+=`
`)):(f=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),M=[p,fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ns?Q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,K1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=ku(o),o=hm(o,t),o=um(o,t),a=ku(a),a=hm(a,t),a=um(a,t),o=dm(o),a=dm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let I=_+f+o,L=_+M+a,T=lm(s,s.VERTEX_SHADER,I),D=lm(s,s.FRAGMENT_SHADER,L);s.attachShader(m,T),s.attachShader(m,D),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function F(ne){if(n.debug.checkShaderErrors){let le=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(T).trim(),G=s.getShaderInfoLog(D).trim(),z=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,D);else{let Y=cm(s,T,"vertex"),$=cm(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+Y+`
`+$)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(k===""||G==="")&&(ie=!1);ie&&(ne.diagnostics={runnable:z,programLog:le,vertexShader:{log:k,prefix:f},fragmentShader:{log:G,prefix:M}})}s.deleteShader(T),s.deleteShader(D),w=new ua(s,m),S=iM(s,m)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let S;this.getAttributes=function(){return S===void 0&&F(this),S};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,Y1)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=D,this}var mM=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fu(e),t.set(e,i)),i}},Fu=class{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}};function gM(n,e,t,i,s,r,o){let a=new fo,l=new Bu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function m(w,S,B,ne,le){let k=ne.fog,G=le.geometry,z=w.isMeshStandardMaterial?ne.environment:null,ie=(w.isMeshStandardMaterial?t:e).get(w.envMap||z),Y=ie&&ie.mapping===Lc?ie.image.height:null,$=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,j=J!==void 0?J.length:0,ue=0;G.morphAttributes.position!==void 0&&(ue=1),G.morphAttributes.normal!==void 0&&(ue=2),G.morphAttributes.color!==void 0&&(ue=3);let V,X,se,re;if($){let pn=qn[$];V=pn.vertexShader,X=pn.fragmentShader}else V=w.vertexShader,X=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),re=l.getFragmentShaderID(w);let ce=n.getRenderTarget(),Ce=le.isInstancedMesh===!0,ze=le.isBatchedMesh===!0,Ve=!!w.map,mt=!!w.matcap,q=!!ie,et=!!w.aoMap,ke=!!w.lightMap,tt=!!w.bumpMap,Oe=!!w.normalMap,kt=!!w.displacementMap,ut=!!w.emissiveMap,N=!!w.metalnessMap,C=!!w.roughnessMap,K=w.anisotropy>0,ge=w.clearcoat>0,pe=w.iridescence>0,ye=w.sheen>0,He=w.transmission>0,Te=K&&!!w.anisotropyMap,Ne=ge&&!!w.clearcoatMap,je=ge&&!!w.clearcoatNormalMap,dt=ge&&!!w.clearcoatRoughnessMap,me=pe&&!!w.iridescenceMap,Tt=pe&&!!w.iridescenceThicknessMap,gt=ye&&!!w.sheenColorMap,nt=ye&&!!w.sheenRoughnessMap,$e=!!w.specularMap,De=!!w.specularColorMap,lt=!!w.specularIntensityMap,St=He&&!!w.transmissionMap,Vt=He&&!!w.thicknessMap,ft=!!w.gradientMap,Me=!!w.alphaMap,O=w.alphaTest>0,Se=!!w.alphaHash,Ee=!!w.extensions,Ke=!!G.attributes.uv1,Ye=!!G.attributes.uv2,Ct=!!G.attributes.uv3,Pt=Ns;return w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Pt=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:V,fragmentShader:X,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ze,instancing:Ce,instancingColor:Ce&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ls,map:Ve,matcap:mt,envMap:q,envMapMode:q&&ie.mapping,envMapCubeUVHeight:Y,aoMap:et,lightMap:ke,bumpMap:tt,normalMap:Oe,displacementMap:d&&kt,emissiveMap:ut,normalMapObjectSpace:Oe&&w.normalMapType===Mv,normalMapTangentSpace:Oe&&w.normalMapType===od,metalnessMap:N,roughnessMap:C,anisotropy:K,anisotropyMap:Te,clearcoat:ge,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:dt,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:Tt,sheen:ye,sheenColorMap:gt,sheenRoughnessMap:nt,specularMap:$e,specularColorMap:De,specularIntensityMap:lt,transmission:He,transmissionMap:St,thicknessMap:Vt,gradientMap:ft,opaque:w.transparent===!1&&w.blending===ca,alphaMap:Me,alphaTest:O,alphaHash:Se,combine:w.combine,mapUv:Ve&&v(w.map.channel),aoMapUv:et&&v(w.aoMap.channel),lightMapUv:ke&&v(w.lightMap.channel),bumpMapUv:tt&&v(w.bumpMap.channel),normalMapUv:Oe&&v(w.normalMap.channel),displacementMapUv:kt&&v(w.displacementMap.channel),emissiveMapUv:ut&&v(w.emissiveMap.channel),metalnessMapUv:N&&v(w.metalnessMap.channel),roughnessMapUv:C&&v(w.roughnessMap.channel),anisotropyMapUv:Te&&v(w.anisotropyMap.channel),clearcoatMapUv:Ne&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:nt&&v(w.sheenRoughnessMap.channel),specularMapUv:$e&&v(w.specularMap.channel),specularColorMapUv:De&&v(w.specularColorMap.channel),specularIntensityMapUv:lt&&v(w.specularIntensityMap.channel),transmissionMapUv:St&&v(w.transmissionMap.channel),thicknessMapUv:Vt&&v(w.thicknessMap.channel),alphaMapUv:Me&&v(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Oe||K),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Ye,vertexUv3s:Ct,pointsUvs:le.isPoints===!0&&!!G.attributes.uv&&(Ve||Me),fog:!!k,useFog:w.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:le.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Wt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xn,flipSided:w.side===yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ee&&w.extensions.derivatives===!0,extensionFragDepth:Ee&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let B in w.defines)S.push(B),S.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(M(S,w),_(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function I(w){let S=g[w.type],B;if(S){let ne=qn[S];B=Ic.clone(ne.uniforms)}else B=w.uniforms;return B}function L(w,S){let B;for(let ne=0,le=c.length;ne<le;ne++){let k=c[ne];if(k.cacheKey===S){B=k,++B.usedTimes;break}}return B===void 0&&(B=new pM(n,S,w,r),c.push(B)),B}function T(w){if(--w.usedTimes===0){let S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:I,acquireProgram:L,releaseProgram:T,releaseShaderCache:D,programs:c,dispose:F}}function yM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function vM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function a(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||vM),i.length>1&&i.sort(d||pm),s.length>1&&s.sort(d||pm)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function xM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new mm,n.set(i,[o])):s>=r.length?(o=new mm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _M(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ht};break;case"SpotLight":t={position:new U,direction:new U,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function bM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var MM=0;function wM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SM(n,e){let t=new _M,i=bM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new ot,a=new ot;function l(h,u){let d=0,p=0,g=0;for(let ne=0;ne<9;ne++)s.probe[ne].set(0,0,0);let v=0,m=0,f=0,M=0,_=0,I=0,L=0,T=0,D=0,F=0,w=0;h.sort(wM);let S=u===!0?Math.PI:1;for(let ne=0,le=h.length;ne<le;ne++){let k=h[ne],G=k.color,z=k.intensity,ie=k.distance,Y=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=G.r*z*S,p+=G.g*z*S,g+=G.b*z*S;else if(k.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(k.sh.coefficients[$],z);w++}else if(k.isDirectionalLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*S),k.castShadow){let J=k.shadow,j=i.get(k);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.directionalShadow[v]=j,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=k.shadow.matrix,I++}s.directional[v]=$,v++}else if(k.isSpotLight){let $=t.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(G).multiplyScalar(z*S),$.distance=ie,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,s.spot[f]=$;let J=k.shadow;if(k.map&&(s.spotLightMap[D]=k.map,D++,J.updateMatrices(k),k.castShadow&&F++),s.spotLightMatrix[f]=J.matrix,k.castShadow){let j=i.get(k);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.spotShadow[f]=j,s.spotShadowMap[f]=Y,T++}f++}else if(k.isRectAreaLight){let $=t.get(k);$.color.copy(G).multiplyScalar(z),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=$,M++}else if(k.isPointLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*S),$.distance=k.distance,$.decay=k.decay,k.castShadow){let J=k.shadow,j=i.get(k);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=k.shadow.matrix,L++}s.point[m]=$,m++}else if(k.isHemisphereLight){let $=t.get(k);$.skyColor.copy(k.color).multiplyScalar(z*S),$.groundColor.copy(k.groundColor).multiplyScalar(z*S),s.hemi[_]=$,_++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==M||B.hemiLength!==_||B.numDirectionalShadows!==I||B.numPointShadows!==L||B.numSpotShadows!==T||B.numSpotMaps!==D||B.numLightProbes!==w)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=T+D-F,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=w,B.directionalLength=v,B.pointLength=m,B.spotLength=f,B.rectAreaLength=M,B.hemiLength=_,B.numDirectionalShadows=I,B.numPointShadows=L,B.numSpotShadows=T,B.numSpotMaps=D,B.numLightProbes=w,s.version=MM++)}function c(h,u){let d=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let I=h[M];if(I.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),d++}else if(I.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),g++}else if(I.isRectAreaLight){let L=s.rectArea[v];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(I.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),v++}else if(I.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(f),p++}else if(I.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function gm(n,e){let t=new SM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function EM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new gm(n,e),t.set(r,[l])):o>=a.length?(l=new gm(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var zu=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hu=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
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
}`;function CM(n,e,t){let i=new mo,s=new it,r=new it,o=new bt,a=new zu({depthPacking:bv}),l=new Hu,c={},h=t.maxTextureSize,u={[Jn]:yn,[yn]:Jn,[Xn]:Xn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:TM,fragmentShader:AM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qn;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let f=this.type;this.render=function(T,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=n.getRenderTarget(),S=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(Is),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);let le=f!==ss&&this.type===ss,k=f===ss&&this.type!==ss;for(let G=0,z=T.length;G<z;G++){let ie=T[G],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let $=Y.getFrameExtents();if(s.multiply($),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Y.mapSize.y=r.y)),Y.map===null||le===!0||k===!0){let j=this.type!==ss?{minFilter:wn,magFilter:wn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new cs(s.x,s.y,j),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let J=Y.getViewportCount();for(let j=0;j<J;j++){let ue=Y.getViewport(j);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),ne.viewport(o),Y.updateMatrices(ie,j),i=Y.getFrustum(),I(D,F,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===ss&&M(Y,F),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,S,B)};function M(T,D){let F=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new cs(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,F,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,F,p,v,null)}function _(T,D,F,w){let S=null,B=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)S=B;else if(S=F.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let ne=S.uuid,le=D.uuid,k=c[ne];k===void 0&&(k={},c[ne]=k);let G=k[le];G===void 0&&(G=S.clone(),k[le]=G,D.addEventListener("dispose",L)),S=G}if(S.visible=D.visible,S.wireframe=D.wireframe,w===ss?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:u[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let ne=n.properties.get(S);ne.light=F}return S}function I(T,D,F,w,S){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ss)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let le=e.update(T),k=T.material;if(Array.isArray(k)){let G=le.groups;for(let z=0,ie=G.length;z<ie;z++){let Y=G[z],$=k[Y.materialIndex];if($&&$.visible){let J=_(T,$,w,S);T.onBeforeShadow(n,T,D,F,le,J,Y),n.renderBufferDirect(F,null,le,J,T,Y),T.onAfterShadow(n,T,D,F,le,J,Y)}}}else if(k.visible){let G=_(T,k,w,S);T.onBeforeShadow(n,T,D,F,le,G,null),n.renderBufferDirect(F,null,le,G,T,null),T.onAfterShadow(n,T,D,F,le,G,null)}}let ne=T.children;for(let le=0,k=ne.length;le<k;le++)I(ne[le],D,F,w,S)}function L(T){T.target.removeEventListener("dispose",L);for(let F in c){let w=c[F],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function RM(n,e,t){let i=t.isWebGL2;function s(){let O=!1,Se=new bt,Ee=null,Ke=new bt(0,0,0,0);return{setMask:function(Ye){Ee!==Ye&&!O&&(n.colorMask(Ye,Ye,Ye,Ye),Ee=Ye)},setLocked:function(Ye){O=Ye},setClear:function(Ye,Ct,Pt,At,pn){pn===!0&&(Ye*=At,Ct*=At,Pt*=At),Se.set(Ye,Ct,Pt,At),Ke.equals(Se)===!1&&(n.clearColor(Ye,Ct,Pt,At),Ke.copy(Se))},reset:function(){O=!1,Ee=null,Ke.set(-1,0,0,0)}}}function r(){let O=!1,Se=null,Ee=null,Ke=null;return{setTest:function(Ye){Ye?ze(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(Ye){Se!==Ye&&!O&&(n.depthMask(Ye),Se=Ye)},setFunc:function(Ye){if(Ee!==Ye){switch(Ye){case Yy:n.depthFunc(n.NEVER);break;case jy:n.depthFunc(n.ALWAYS);break;case Zy:n.depthFunc(n.LESS);break;case $l:n.depthFunc(n.LEQUAL);break;case Jy:n.depthFunc(n.EQUAL);break;case Ky:n.depthFunc(n.GEQUAL);break;case Qy:n.depthFunc(n.GREATER);break;case ev:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Ye}},setLocked:function(Ye){O=Ye},setClear:function(Ye){Ke!==Ye&&(n.clearDepth(Ye),Ke=Ye)},reset:function(){O=!1,Se=null,Ee=null,Ke=null}}}function o(){let O=!1,Se=null,Ee=null,Ke=null,Ye=null,Ct=null,Pt=null,At=null,pn=null;return{setTest:function(It){O||(It?ze(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(It){Se!==It&&!O&&(n.stencilMask(It),Se=It)},setFunc:function(It,Mn,ci){(Ee!==It||Ke!==Mn||Ye!==ci)&&(n.stencilFunc(It,Mn,ci),Ee=It,Ke=Mn,Ye=ci)},setOp:function(It,Mn,ci){(Ct!==It||Pt!==Mn||At!==ci)&&(n.stencilOp(It,Mn,ci),Ct=It,Pt=Mn,At=ci)},setLocked:function(It){O=It},setClear:function(It){pn!==It&&(n.clearStencil(It),pn=It)},reset:function(){O=!1,Se=null,Ee=null,Ke=null,Ye=null,Ct=null,Pt=null,At=null,pn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,_=null,I=null,L=null,T=null,D=null,F=null,w=new ht(0,0,0),S=0,B=!1,ne=null,le=null,k=null,G=null,z=null,ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,$=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=$>=2);let j=null,ue={},V=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),se=new bt().fromArray(V),re=new bt().fromArray(X);function ce(O,Se,Ee,Ke){let Ye=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(O,Ct),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<Ee;Pt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,Ke,0,n.RGBA,n.UNSIGNED_BYTE,Ye):n.texImage2D(Se+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ye);return Ct}let Ce={};Ce[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ze(n.DEPTH_TEST),l.setFunc($l),ut(!1),N(jf),ze(n.CULL_FACE),Oe(Is);function ze(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Ve(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function mt(O,Se){return p[O]!==Se?(n.bindFramebuffer(O,Se),p[O]=Se,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Se),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function q(O,Se){let Ee=v,Ke=!1;if(O)if(Ee=g.get(Se),Ee===void 0&&(Ee=[],g.set(Se,Ee)),O.isWebGLMultipleRenderTargets){let Ye=O.texture;if(Ee.length!==Ye.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,Pt=Ye.length;Ct<Pt;Ct++)Ee[Ct]=n.COLOR_ATTACHMENT0+Ct;Ee.length=Ye.length,Ke=!0}}else Ee[0]!==n.COLOR_ATTACHMENT0&&(Ee[0]=n.COLOR_ATTACHMENT0,Ke=!0);else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ke=!0);Ke&&(t.isWebGL2?n.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function et(O){return m!==O?(n.useProgram(O),m=O,!0):!1}let ke={[Ri]:n.FUNC_ADD,[Oy]:n.FUNC_SUBTRACT,[ky]:n.FUNC_REVERSE_SUBTRACT};if(i)ke[Qf]=n.MIN,ke[ep]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(ke[Qf]=O.MIN_EXT,ke[ep]=O.MAX_EXT)}let tt={[Cc]:n.ZERO,[sd]:n.ONE,[By]:n.SRC_COLOR,[Mu]:n.SRC_ALPHA,[Gy]:n.SRC_ALPHA_SATURATE,[Vy]:n.DST_COLOR,[zy]:n.DST_ALPHA,[Fy]:n.ONE_MINUS_SRC_COLOR,[wu]:n.ONE_MINUS_SRC_ALPHA,[rd]:n.ONE_MINUS_DST_COLOR,[Hy]:n.ONE_MINUS_DST_ALPHA,[Wy]:n.CONSTANT_COLOR,[$y]:n.ONE_MINUS_CONSTANT_COLOR,[qy]:n.CONSTANT_ALPHA,[Xy]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(O,Se,Ee,Ke,Ye,Ct,Pt,At,pn,It){if(O===Is){f===!0&&(Ve(n.BLEND),f=!1);return}if(f===!1&&(ze(n.BLEND),f=!0),O!==id){if(O!==M||It!==B){if((_!==Ri||T!==Ri)&&(n.blendEquation(n.FUNC_ADD),_=Ri,T=Ri),It)switch(O){case ca:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFunc(n.ONE,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}I=null,L=null,D=null,F=null,w.set(0,0,0),S=0,M=O,B=It}return}Ye=Ye||Se,Ct=Ct||Ee,Pt=Pt||Ke,(Se!==_||Ye!==T)&&(n.blendEquationSeparate(ke[Se],ke[Ye]),_=Se,T=Ye),(Ee!==I||Ke!==L||Ct!==D||Pt!==F)&&(n.blendFuncSeparate(tt[Ee],tt[Ke],tt[Ct],tt[Pt]),I=Ee,L=Ke,D=Ct,F=Pt),(At.equals(w)===!1||pn!==S)&&(n.blendColor(At.r,At.g,At.b,pn),w.copy(At),S=pn),M=O,B=!1}function kt(O,Se){O.side===Xn?Ve(n.CULL_FACE):ze(n.CULL_FACE);let Ee=O.side===yn;Se&&(Ee=!Ee),ut(Ee),O.blending===ca&&O.transparent===!1?Oe(Is):Oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Ke=O.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),K(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ze(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){ne!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),ne=O)}function N(O){O!==Ny?(ze(n.CULL_FACE),O!==le&&(O===jf?n.cullFace(n.BACK):O===Dy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),le=O}function C(O){O!==k&&(Y&&n.lineWidth(O),k=O)}function K(O,Se,Ee){O?(ze(n.POLYGON_OFFSET_FILL),(G!==Se||z!==Ee)&&(n.polygonOffset(Se,Ee),G=Se,z=Ee)):Ve(n.POLYGON_OFFSET_FILL)}function ge(O){O?ze(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function pe(O){O===void 0&&(O=n.TEXTURE0+ie-1),j!==O&&(n.activeTexture(O),j=O)}function ye(O,Se,Ee){Ee===void 0&&(j===null?Ee=n.TEXTURE0+ie-1:Ee=j);let Ke=ue[Ee];Ke===void 0&&(Ke={type:void 0,texture:void 0},ue[Ee]=Ke),(Ke.type!==O||Ke.texture!==Se)&&(j!==Ee&&(n.activeTexture(Ee),j=Ee),n.bindTexture(O,Se||Ce[O]),Ke.type=O,Ke.texture=Se)}function He(){let O=ue[j];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function St(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Vt(O,Se){let Ee=u.get(Se);Ee===void 0&&(Ee=new WeakMap,u.set(Se,Ee));let Ke=Ee.get(O);Ke===void 0&&(Ke=n.getUniformBlockIndex(Se,O.name),Ee.set(O,Ke))}function ft(O,Se){let Ke=u.get(Se).get(O);h.get(Se)!==Ke&&(n.uniformBlockBinding(Se,Ke,O.__bindingPointIndex),h.set(Se,Ke))}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,ue={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,_=null,I=null,L=null,T=null,D=null,F=null,w=new ht(0,0,0),S=0,B=!1,ne=null,le=null,k=null,G=null,z=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ze,disable:Ve,bindFramebuffer:mt,drawBuffers:q,useProgram:et,setBlending:Oe,setMaterial:kt,setFlipSided:ut,setCullFace:N,setLineWidth:C,setPolygonOffset:K,setScissorTest:ge,activeTexture:pe,bindTexture:ye,unbindTexture:He,compressedTexImage2D:Te,compressedTexImage3D:Ne,texImage2D:$e,texImage3D:De,updateUBOMapping:Vt,uniformBlockBinding:ft,texStorage2D:gt,texStorage3D:nt,texSubImage2D:je,texSubImage3D:dt,compressedTexSubImage2D:me,compressedTexSubImage3D:Tt,scissor:lt,viewport:St,reset:Me}}function LM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,C){return p?new OffscreenCanvas(N,C):uo("canvas")}function v(N,C,K,ge){let pe=1;if((N.width>ge||N.height>ge)&&(pe=ge/Math.max(N.width,N.height)),pe<1||C===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let ye=C?Kl:Math.floor,He=ye(pe*N.width),Te=ye(pe*N.height);u===void 0&&(u=g(He,Te));let Ne=K?g(He,Te):u;return Ne.width=He,Ne.height=Te,Ne.getContext("2d").drawImage(N,0,0,He,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+He+"x"+Te+")."),Ne}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function m(N){return Ru(N.width)&&Ru(N.height)}function f(N){return a?!1:N.wrapS!==On||N.wrapT!==On||N.minFilter!==wn&&N.minFilter!==$n}function M(N,C){return N.generateMipmaps&&C&&N.minFilter!==wn&&N.minFilter!==$n}function _(N){n.generateMipmap(N)}function I(N,C,K,ge,pe=!1){if(a===!1)return C;if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye=C;if(C===n.RED&&(K===n.FLOAT&&(ye=n.R32F),K===n.HALF_FLOAT&&(ye=n.R16F),K===n.UNSIGNED_BYTE&&(ye=n.R8)),C===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ye=n.R8UI),K===n.UNSIGNED_SHORT&&(ye=n.R16UI),K===n.UNSIGNED_INT&&(ye=n.R32UI),K===n.BYTE&&(ye=n.R8I),K===n.SHORT&&(ye=n.R16I),K===n.INT&&(ye=n.R32I)),C===n.RG&&(K===n.FLOAT&&(ye=n.RG32F),K===n.HALF_FLOAT&&(ye=n.RG16F),K===n.UNSIGNED_BYTE&&(ye=n.RG8)),C===n.RGBA){let He=pe?Yl:Dt.getTransfer(ge);K===n.FLOAT&&(ye=n.RGBA32F),K===n.HALF_FLOAT&&(ye=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ye=He===Wt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function L(N,C,K){return M(N,K)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==$n?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function T(N){return N===wn||N===np||N===Hh?n.NEAREST:n.LINEAR}function D(N){let C=N.target;C.removeEventListener("dispose",D),w(C),C.isVideoTexture&&h.delete(C)}function F(N){let C=N.target;C.removeEventListener("dispose",F),B(C)}function w(N){let C=i.get(N);if(C.__webglInit===void 0)return;let K=N.source,ge=d.get(K);if(ge){let pe=ge[C.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&S(N),Object.keys(ge).length===0&&d.delete(K)}i.remove(N)}function S(N){let C=i.get(N);n.deleteTexture(C.__webglTexture);let K=N.source,ge=d.get(K);delete ge[C.__cacheKey],o.memory.textures--}function B(N){let C=N.texture,K=i.get(N),ge=i.get(C);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(K.__webglFramebuffer[pe]))for(let ye=0;ye<K.__webglFramebuffer[pe].length;ye++)n.deleteFramebuffer(K.__webglFramebuffer[pe][ye]);else n.deleteFramebuffer(K.__webglFramebuffer[pe]);K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer[pe])}else{if(Array.isArray(K.__webglFramebuffer))for(let pe=0;pe<K.__webglFramebuffer.length;pe++)n.deleteFramebuffer(K.__webglFramebuffer[pe]);else n.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&n.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let pe=0;pe<K.__webglColorRenderbuffer.length;pe++)K.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(K.__webglColorRenderbuffer[pe]);K.__webglDepthRenderbuffer&&n.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let pe=0,ye=C.length;pe<ye;pe++){let He=i.get(C[pe]);He.__webglTexture&&(n.deleteTexture(He.__webglTexture),o.memory.textures--),i.remove(C[pe])}i.remove(C),i.remove(N)}let ne=0;function le(){ne=0}function k(){let N=ne;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),ne+=1,N}function G(N){let C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function z(N,C){let K=i.get(N);if(N.isVideoTexture&&kt(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){let ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(K,N,C);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+C)}function ie(N,C){let K=i.get(N);if(N.version>0&&K.__version!==N.version){se(K,N,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+C)}function Y(N,C){let K=i.get(N);if(N.version>0&&K.__version!==N.version){se(K,N,C);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+C)}function $(N,C){let K=i.get(N);if(N.version>0&&K.__version!==N.version){re(K,N,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+C)}let J={[Us]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[Tu]:n.MIRRORED_REPEAT},j={[wn]:n.NEAREST,[np]:n.NEAREST_MIPMAP_NEAREST,[Hh]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[hv]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},ue={[wv]:n.NEVER,[Rv]:n.ALWAYS,[Sv]:n.LESS,[Xm]:n.LEQUAL,[Ev]:n.EQUAL,[Cv]:n.GEQUAL,[Tv]:n.GREATER,[Av]:n.NOTEQUAL};function V(N,C,K){if(K?(n.texParameteri(N,n.TEXTURE_WRAP_S,J[C.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,J[C.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,J[C.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,j[C.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,j[C.minFilter])):(n.texParameteri(N,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(N,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(C.wrapS!==On||C.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(N,n.TEXTURE_MAG_FILTER,T(C.magFilter)),n.texParameteri(N,n.TEXTURE_MIN_FILTER,T(C.minFilter)),C.minFilter!==wn&&C.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,ue[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===wn||C.minFilter!==Hh&&C.minFilter!==Os||C.type===as&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===ho&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(n.texParameterf(N,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function X(N,C){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",D));let ge=C.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let ye=G(C);if(ye!==N.__cacheKey){pe[ye]===void 0&&(pe[ye]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pe[ye].usedTimes++;let He=pe[N.__cacheKey];He!==void 0&&(pe[N.__cacheKey].usedTimes--,He.usedTimes===0&&S(C)),N.__cacheKey=ye,N.__webglTexture=pe[ye].texture}return K}function se(N,C,K){let ge=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ge=n.TEXTURE_3D);let pe=X(N,C),ye=C.source;t.bindTexture(ge,N.__webglTexture,n.TEXTURE0+K);let He=i.get(ye);if(ye.version!==He.__version||pe===!0){t.activeTexture(n.TEXTURE0+K);let Te=Dt.getPrimaries(Dt.workingColorSpace),Ne=C.colorSpace===fi?null:Dt.getPrimaries(C.colorSpace),je=C.colorSpace===fi||Te===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let dt=f(C)&&m(C.image)===!1,me=v(C.image,dt,!1,s.maxTextureSize);me=ut(C,me);let Tt=m(me)||a,gt=r.convert(C.format,C.colorSpace),nt=r.convert(C.type),$e=I(C.internalFormat,gt,nt,C.colorSpace,C.isVideoTexture);V(ge,C,Tt);let De,lt=C.mipmaps,St=a&&C.isVideoTexture!==!0&&$e!==$m,Vt=He.__version===void 0||pe===!0,ft=L(C,me,Tt);if(C.isDepthTexture)$e=n.DEPTH_COMPONENT,a?C.type===as?$e=n.DEPTH_COMPONENT32F:C.type===Ps?$e=n.DEPTH_COMPONENT24:C.type===mr?$e=n.DEPTH24_STENCIL8:$e=n.DEPTH_COMPONENT16:C.type===as&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===gr&&$e===n.DEPTH_COMPONENT&&C.type!==ad&&C.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Ps,nt=r.convert(C.type)),C.format===pa&&$e===n.DEPTH_COMPONENT&&($e=n.DEPTH_STENCIL,C.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=mr,nt=r.convert(C.type))),Vt&&(St?t.texStorage2D(n.TEXTURE_2D,1,$e,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,$e,me.width,me.height,0,gt,nt,null));else if(C.isDataTexture)if(lt.length>0&&Tt){St&&Vt&&t.texStorage2D(n.TEXTURE_2D,ft,$e,lt[0].width,lt[0].height);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],St?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,gt,nt,De.data):t.texImage2D(n.TEXTURE_2D,Me,$e,De.width,De.height,0,gt,nt,De.data);C.generateMipmaps=!1}else St?(Vt&&t.texStorage2D(n.TEXTURE_2D,ft,$e,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,gt,nt,me.data)):t.texImage2D(n.TEXTURE_2D,0,$e,me.width,me.height,0,gt,nt,me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){St&&Vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,$e,lt[0].width,lt[0].height,me.depth);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],C.format!==di?gt!==null?St?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,me.depth,gt,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,$e,De.width,De.height,me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,me.depth,gt,nt,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,$e,De.width,De.height,me.depth,0,gt,nt,De.data)}else{St&&Vt&&t.texStorage2D(n.TEXTURE_2D,ft,$e,lt[0].width,lt[0].height);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],C.format!==di?gt!==null?St?t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,gt,De.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,gt,nt,De.data):t.texImage2D(n.TEXTURE_2D,Me,$e,De.width,De.height,0,gt,nt,De.data)}else if(C.isDataArrayTexture)St?(Vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,$e,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,gt,nt,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,me.width,me.height,me.depth,0,gt,nt,me.data);else if(C.isData3DTexture)St?(Vt&&t.texStorage3D(n.TEXTURE_3D,ft,$e,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,gt,nt,me.data)):t.texImage3D(n.TEXTURE_3D,0,$e,me.width,me.height,me.depth,0,gt,nt,me.data);else if(C.isFramebufferTexture){if(Vt)if(St)t.texStorage2D(n.TEXTURE_2D,ft,$e,me.width,me.height);else{let Me=me.width,O=me.height;for(let Se=0;Se<ft;Se++)t.texImage2D(n.TEXTURE_2D,Se,$e,Me,O,0,gt,nt,null),Me>>=1,O>>=1}}else if(lt.length>0&&Tt){St&&Vt&&t.texStorage2D(n.TEXTURE_2D,ft,$e,lt[0].width,lt[0].height);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],St?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,gt,nt,De):t.texImage2D(n.TEXTURE_2D,Me,$e,gt,nt,De);C.generateMipmaps=!1}else St?(Vt&&t.texStorage2D(n.TEXTURE_2D,ft,$e,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,nt,me)):t.texImage2D(n.TEXTURE_2D,0,$e,gt,nt,me);M(C,Tt)&&_(ge),He.__version=ye.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function re(N,C,K){if(C.image.length!==6)return;let ge=X(N,C),pe=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+K);let ye=i.get(pe);if(pe.version!==ye.__version||ge===!0){t.activeTexture(n.TEXTURE0+K);let He=Dt.getPrimaries(Dt.workingColorSpace),Te=C.colorSpace===fi?null:Dt.getPrimaries(C.colorSpace),Ne=C.colorSpace===fi||He===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let je=C.isCompressedTexture||C.image[0].isCompressedTexture,dt=C.image[0]&&C.image[0].isDataTexture,me=[];for(let Me=0;Me<6;Me++)!je&&!dt?me[Me]=v(C.image[Me],!1,!0,s.maxCubemapSize):me[Me]=dt?C.image[Me].image:C.image[Me],me[Me]=ut(C,me[Me]);let Tt=me[0],gt=m(Tt)||a,nt=r.convert(C.format,C.colorSpace),$e=r.convert(C.type),De=I(C.internalFormat,nt,$e,C.colorSpace),lt=a&&C.isVideoTexture!==!0,St=ye.__version===void 0||ge===!0,Vt=L(C,Tt,gt);V(n.TEXTURE_CUBE_MAP,C,gt);let ft;if(je){lt&&St&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,De,Tt.width,Tt.height);for(let Me=0;Me<6;Me++){ft=me[Me].mipmaps;for(let O=0;O<ft.length;O++){let Se=ft[O];C.format!==di?nt!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,0,0,Se.width,Se.height,nt,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,0,0,Se.width,Se.height,nt,$e,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,De,Se.width,Se.height,0,nt,$e,Se.data)}}}else{ft=C.mipmaps,lt&&St&&(ft.length>0&&Vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,De,me[0].width,me[0].height));for(let Me=0;Me<6;Me++)if(dt){lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me[Me].width,me[Me].height,nt,$e,me[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,De,me[Me].width,me[Me].height,0,nt,$e,me[Me].data);for(let O=0;O<ft.length;O++){let Ee=ft[O].image[Me].image;lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,0,0,Ee.width,Ee.height,nt,$e,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,De,Ee.width,Ee.height,0,nt,$e,Ee.data)}}else{lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,nt,$e,me[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,De,nt,$e,me[Me]);for(let O=0;O<ft.length;O++){let Se=ft[O];lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,0,0,nt,$e,Se.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,De,nt,$e,Se.image[Me])}}}M(C,gt)&&_(n.TEXTURE_CUBE_MAP),ye.__version=pe.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function ce(N,C,K,ge,pe,ye){let He=r.convert(K.format,K.colorSpace),Te=r.convert(K.type),Ne=I(K.internalFormat,He,Te,K.colorSpace);if(!i.get(C).__hasExternalTextures){let dt=Math.max(1,C.width>>ye),me=Math.max(1,C.height>>ye);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ye,Ne,dt,me,C.depth,0,He,Te,null):t.texImage2D(pe,ye,Ne,dt,me,0,He,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Oe(C)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,i.get(K).__webglTexture,0,tt(C)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,i.get(K).__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(N,C,K){if(n.bindRenderbuffer(n.RENDERBUFFER,N),C.depthBuffer&&!C.stencilBuffer){let ge=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(K||Oe(C)){let pe=C.depthTexture;pe&&pe.isDepthTexture&&(pe.type===as?ge=n.DEPTH_COMPONENT32F:pe.type===Ps&&(ge=n.DEPTH_COMPONENT24));let ye=tt(C);Oe(C)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,C.width,C.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,C.width,C.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,C.width,C.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,N)}else if(C.depthBuffer&&C.stencilBuffer){let ge=tt(C);K&&Oe(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,C.width,C.height):Oe(C)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,N)}else{let ge=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pe=0;pe<ge.length;pe++){let ye=ge[pe],He=r.convert(ye.format,ye.colorSpace),Te=r.convert(ye.type),Ne=I(ye.internalFormat,He,Te,ye.colorSpace),je=tt(C);K&&Oe(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ne,C.width,C.height):Oe(C)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,Ne,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);let ge=i.get(C.depthTexture).__webglTexture,pe=tt(C);if(C.depthTexture.format===gr)Oe(C)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(C.depthTexture.format===pa)Oe(C)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ve(N){let C=i.get(N),K=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ze(C.__webglFramebuffer,N)}else if(K){C.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[ge]),C.__webglDepthbuffer[ge]=n.createRenderbuffer(),Ce(C.__webglDepthbuffer[ge],N,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),Ce(C.__webglDepthbuffer,N,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(N,C,K){let ge=i.get(N);C!==void 0&&ce(ge.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Ve(N)}function q(N){let C=N.texture,K=i.get(N),ge=i.get(C);N.addEventListener("dispose",F),N.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=C.version,o.memory.textures++);let pe=N.isWebGLCubeRenderTarget===!0,ye=N.isWebGLMultipleRenderTargets===!0,He=m(N)||a;if(pe){K.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(a&&C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[Te]=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)K.__webglFramebuffer[Te][Ne]=n.createFramebuffer()}else K.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(a&&C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let Te=0;Te<C.mipmaps.length;Te++)K.__webglFramebuffer[Te]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(ye)if(s.drawBuffers){let Te=N.texture;for(let Ne=0,je=Te.length;Ne<je;Ne++){let dt=i.get(Te[Ne]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&Oe(N)===!1){let Te=ye?C:[C];K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Te.length;Ne++){let je=Te[Ne];K.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[Ne]);let dt=r.convert(je.format,je.colorSpace),me=r.convert(je.type),Tt=I(je.internalFormat,dt,me,je.colorSpace,N.isXRRenderTarget===!0),gt=tt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,Tt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,K.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),V(n.TEXTURE_CUBE_MAP,C,He);for(let Te=0;Te<6;Te++)if(a&&C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)ce(K.__webglFramebuffer[Te][Ne],N,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ne);else ce(K.__webglFramebuffer[Te],N,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);M(C,He)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let Te=N.texture;for(let Ne=0,je=Te.length;Ne<je;Ne++){let dt=Te[Ne],me=i.get(dt);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),V(n.TEXTURE_2D,dt,He),ce(K.__webglFramebuffer,N,dt,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),M(dt,He)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Te=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,ge.__webglTexture),V(Te,C,He),a&&C.mipmaps&&C.mipmaps.length>0)for(let Ne=0;Ne<C.mipmaps.length;Ne++)ce(K.__webglFramebuffer[Ne],N,C,n.COLOR_ATTACHMENT0,Te,Ne);else ce(K.__webglFramebuffer,N,C,n.COLOR_ATTACHMENT0,Te,0);M(C,He)&&_(Te),t.unbindTexture()}N.depthBuffer&&Ve(N)}function et(N){let C=m(N)||a,K=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ge=0,pe=K.length;ge<pe;ge++){let ye=K[ge];if(M(ye,C)){let He=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ye).__webglTexture;t.bindTexture(He,Te),_(He),t.unbindTexture()}}}function ke(N){if(a&&N.samples>0&&Oe(N)===!1){let C=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],K=N.width,ge=N.height,pe=n.COLOR_BUFFER_BIT,ye=[],He=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(N),Ne=N.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<C.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let je=0;je<C.length;je++){ye.push(n.COLOR_ATTACHMENT0+je),N.depthBuffer&&ye.push(He);let dt=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(dt===!1&&(N.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[je]),dt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[He]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[He])),Ne){let me=i.get(C[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,K,ge,0,0,K,ge,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<C.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Te.__webglColorRenderbuffer[je]);let dt=i.get(C[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,dt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function tt(N){return Math.min(s.maxSamples,N.samples)}function Oe(N){let C=i.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function kt(N){let C=o.render.frame;h.get(N)!==C&&(h.set(N,C),N.update())}function ut(N,C){let K=N.colorSpace,ge=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Cu||K!==ls&&K!==fi&&(Dt.getTransfer(K)===Wt?a===!1?e.has("EXT_sRGB")===!0&&ge===di?(N.format=Cu,N.minFilter=$n,N.generateMipmaps=!1):C=Ql.sRGBToLinear(C):(ge!==di||pe!==Ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),C}this.allocateTextureUnit=k,this.resetTextureUnits=le,this.setTexture2D=z,this.setTexture2DArray=ie,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=mt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Oe}function PM(n,e,t){let i=t.isWebGL2;function s(r,o=fi){let a,l=Dt.getTransfer(o);if(r===Ds)return n.UNSIGNED_BYTE;if(r===zm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Hm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===uv)return n.BYTE;if(r===dv)return n.SHORT;if(r===ad)return n.UNSIGNED_SHORT;if(r===Fm)return n.INT;if(r===Ps)return n.UNSIGNED_INT;if(r===as)return n.FLOAT;if(r===ho)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fv)return n.ALPHA;if(r===di)return n.RGBA;if(r===pv)return n.LUMINANCE;if(r===mv)return n.LUMINANCE_ALPHA;if(r===gr)return n.DEPTH_COMPONENT;if(r===pa)return n.DEPTH_STENCIL;if(r===Cu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===gv)return n.RED;if(r===Vm)return n.RED_INTEGER;if(r===yv)return n.RG;if(r===Gm)return n.RG_INTEGER;if(r===Wm)return n.RGBA_INTEGER;if(r===Vh||r===Gh||r===Wh||r===$h)if(l===Wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$h)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===sp||r===rp||r===ap)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ip)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ap)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$m)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===op||r===lp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===op)return l===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===lp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cp||r===hp||r===up||r===dp||r===fp||r===pp||r===mp||r===gp||r===yp||r===vp||r===xp||r===_p||r===bp||r===Mp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===cp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===up)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_p)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mp)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qh||r===wp||r===Sp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===qh)return l===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vv||r===Ep||r===Tp||r===Ap)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===qh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ep)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ap)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Vu=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Sn=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},IM={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gu=class extends ks{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,v=t.getContextAttributes(),m=null,f=null,M=[],_=[],I=new it,L=null,T=new on;T.layers.enable(1),T.viewport=new bt;let D=new on;D.layers.enable(2),D.viewport=new bt;let F=[T,D],w=new Vu;w.layers.enable(1),w.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=M[V];return X===void 0&&(X=new co,M[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=M[V];return X===void 0&&(X=new co,M[V]=X),X.getGripSpace()},this.getHand=function(V){let X=M[V];return X===void 0&&(X=new co,M[V]=X),X.getHandSpace()};function ne(V){let X=_.indexOf(V.inputSource);if(X===-1)return;let se=M[X];se!==void 0&&(se.update(V.inputSource,V.frame,c||o),se.dispatchEvent({type:V.type,data:V.inputSource}))}function le(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",k);for(let V=0;V<M.length;V++){let X=_[V];X!==null&&(_[V]=null,M[V].disconnect(X))}S=null,B=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",le),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new cs(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ds,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,se=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?pa:gr,se=v.stencil?mr:Ps);let ce={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new cs(d.textureWidth,d.textureHeight,{format:di,type:Ds,depthTexture:new lc(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ce=e.properties.get(f);Ce.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(V){for(let X=0;X<V.removed.length;X++){let se=V.removed[X],re=_.indexOf(se);re>=0&&(_[re]=null,M[re].disconnect(se))}for(let X=0;X<V.added.length;X++){let se=V.added[X],re=_.indexOf(se);if(re===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=_.length){_.push(se),re=Ce;break}else if(_[Ce]===null){_[Ce]=se,re=Ce;break}if(re===-1)break}let ce=M[re];ce&&ce.connect(se)}}let G=new U,z=new U;function ie(V,X,se){G.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(se.matrixWorld);let re=G.distanceTo(z),ce=X.projectionMatrix.elements,Ce=se.projectionMatrix.elements,ze=ce[14]/(ce[10]-1),Ve=ce[14]/(ce[10]+1),mt=(ce[9]+1)/ce[5],q=(ce[9]-1)/ce[5],et=(ce[8]-1)/ce[0],ke=(Ce[8]+1)/Ce[0],tt=ze*et,Oe=ze*ke,kt=re/(-et+ke),ut=kt*-et;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ut),V.translateZ(kt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let N=ze+kt,C=Ve+kt,K=tt-ut,ge=Oe+(re-ut),pe=mt*Ve/C*N,ye=q*Ve/C*N;V.projectionMatrix.makePerspective(K,ge,pe,ye,N,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;w.near=D.near=T.near=V.near,w.far=D.far=T.far=V.far,(S!==w.near||B!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,B=w.far);let X=V.parent,se=w.cameras;Y(w,X);for(let re=0;re<se.length;re++)Y(se[re],X);se.length===2?ie(w,T,D):w.projectionMatrix.copy(T.projectionMatrix),$(V,w,X)};function $(V,X,se){se===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ma*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let J=null;function j(V,X){if(h=X.getViewerPose(c||o),g=X,h!==null){let se=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;se.length!==w.cameras.length&&(w.cameras.length=0,re=!0);for(let ce=0;ce<se.length;ce++){let Ce=se[ce],ze=null;if(p!==null)ze=p.getViewport(Ce);else{let mt=u.getViewSubImage(d,Ce);ze=mt.viewport,ce===0&&(e.setRenderTargetTextures(f,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(f))}let Ve=F[ce];Ve===void 0&&(Ve=new on,Ve.layers.enable(ce),Ve.viewport=new bt,F[ce]=Ve),Ve.matrix.fromArray(Ce.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ce.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ze.x,ze.y,ze.width,ze.height),ce===0&&(w.matrix.copy(Ve.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),re===!0&&w.cameras.push(Ve)}}for(let se=0;se<M.length;se++){let re=_[se],ce=M[se];re!==null&&ce!==void 0&&ce.update(re,X,c||o)}J&&J(V,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let ue=new Jm;ue.setAnimationLoop(j),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}};function NM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,_,I){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,I)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function DM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let I=_.program;i.uniformBlockBinding(M,I)}function c(M,_){let I=s[M.id];I===void 0&&(g(M),I=h(M),s[M.id]=I,M.addEventListener("dispose",m));let L=_.program;i.updateUBOMapping(M,L);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let _=u();M.__bindingPointIndex=_;let I=n.createBuffer(),L=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,I),I}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],I=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,D=I.length;T<D;T++){let F=Array.isArray(I[T])?I[T]:[I[T]];for(let w=0,S=F.length;w<S;w++){let B=F[w];if(p(B,T,w,L)===!0){let ne=B.__offset,le=Array.isArray(B.value)?B.value:[B.value],k=0;for(let G=0;G<le.length;G++){let z=le[G],ie=v(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,ne+k,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,k),k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ne,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,_,I,L){let T=M.value,D=_+"_"+I;if(L[D]===void 0)return typeof T=="number"||typeof T=="boolean"?L[D]=T:L[D]=T.clone(),!0;{let F=L[D];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return L[D]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(M){let _=M.uniforms,I=0,L=16;for(let D=0,F=_.length;D<F;D++){let w=Array.isArray(_[D])?_[D]:[_[D]];for(let S=0,B=w.length;S<B;S++){let ne=w[S],le=Array.isArray(ne.value)?ne.value:[ne.value];for(let k=0,G=le.length;k<G;k++){let z=le[k],ie=v(z),Y=I%L;Y!==0&&L-Y<ie.boundary&&(I+=L-Y),ne.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=I,I+=ie.storage}}}let T=I%L;return T>0&&(I+=L-T),M.__size=I,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let I=o.indexOf(_.__bindingPointIndex);o.splice(I,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var go=class{constructor(e={}){let{canvas:t=Wv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Ns,this.toneMappingExposure=1;let _=this,I=!1,L=0,T=0,D=null,F=-1,w=null,S=new bt,B=new bt,ne=null,le=new ht(0),k=0,G=t.width,z=t.height,ie=1,Y=null,$=null,J=new bt(0,0,G,z),j=new bt(0,0,G,z),ue=!1,V=new mo,X=!1,se=!1,re=null,ce=new ot,Ce=new it,ze=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return D===null?ie:1}let q=i;function et(P,W){for(let Q=0;Q<P.length;Q++){let te=P[Q],Z=t.getContext(te,W);if(Z!==null)return Z}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nd}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Se,!1),q===null){let W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),q=et(W,P),q===null)throw et(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ke,tt,Oe,kt,ut,N,C,K,ge,pe,ye,He,Te,Ne,je,dt,me,Tt,gt,nt,$e,De,lt,St;function Vt(){ke=new Qb(q),tt=new Xb(q,ke,e),ke.init(tt),De=new PM(q,ke,tt),Oe=new RM(q,ke,tt),kt=new n1(q),ut=new yM,N=new LM(q,ke,Oe,ut,tt,De,kt),C=new jb(_),K=new Kb(_),ge=new hx(q,tt),lt=new $b(q,ke,ge,tt),pe=new e1(q,ge,kt,lt),ye=new a1(q,pe,ge,kt),gt=new r1(q,tt,N),dt=new Yb(ut),He=new gM(_,C,K,ke,tt,lt,dt),Te=new NM(_,ut),Ne=new xM,je=new EM(ke,tt),Tt=new Wb(_,C,K,Oe,ye,d,l),me=new CM(_,ye,tt),St=new DM(q,kt,tt,Oe),nt=new qb(q,ke,kt,tt),$e=new t1(q,ke,kt,tt),kt.programs=He.programs,_.capabilities=tt,_.extensions=ke,_.properties=ut,_.renderLists=Ne,_.shadowMap=me,_.state=Oe,_.info=kt}Vt();let ft=new Gu(_,q);this.xr=ft,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let P=ke.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ke.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(G,z,!1))},this.getSize=function(P){return P.set(G,z)},this.setSize=function(P,W,Q=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,z=W,t.width=Math.floor(P*ie),t.height=Math.floor(W*ie),Q===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(G*ie,z*ie).floor()},this.setDrawingBufferSize=function(P,W,Q){G=P,z=W,ie=Q,t.width=Math.floor(P*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,W,Q,te){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,W,Q,te),Oe.viewport(S.copy(J).multiplyScalar(ie).floor())},this.getScissor=function(P){return P.copy(j)},this.setScissor=function(P,W,Q,te){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,W,Q,te),Oe.scissor(B.copy(j).multiplyScalar(ie).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(P){Oe.setScissorTest(ue=P)},this.setOpaqueSort=function(P){Y=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(P=!0,W=!0,Q=!0){let te=0;if(P){let Z=!1;if(D!==null){let Re=D.texture.format;Z=Re===Wm||Re===Gm||Re===Vm}if(Z){let Re=D.texture.type,Le=Re===Ds||Re===Ps||Re===ad||Re===mr||Re===zm||Re===Hm,Ge=Tt.getClearColor(),Ze=Tt.getClearAlpha(),ct=Ge.r,rt=Ge.g,at=Ge.b;Le?(p[0]=ct,p[1]=rt,p[2]=at,p[3]=Ze,q.clearBufferuiv(q.COLOR,0,p)):(g[0]=ct,g[1]=rt,g[2]=at,g[3]=Ze,q.clearBufferiv(q.COLOR,0,g))}else te|=q.COLOR_BUFFER_BIT}W&&(te|=q.DEPTH_BUFFER_BIT),Q&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ne.dispose(),je.dispose(),ut.dispose(),C.dispose(),K.dispose(),ye.dispose(),lt.dispose(),St.dispose(),He.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",pn),ft.removeEventListener("sessionend",It),re&&(re.dispose(),re=null),Mn.stop()};function Me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let P=kt.autoReset,W=me.enabled,Q=me.autoUpdate,te=me.needsUpdate,Z=me.type;Vt(),kt.autoReset=P,me.enabled=W,me.autoUpdate=Q,me.needsUpdate=te,me.type=Z}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ee(P){let W=P.target;W.removeEventListener("dispose",Ee),Ke(W)}function Ke(P){Ye(P),ut.remove(P)}function Ye(P){let W=ut.get(P).programs;W!==void 0&&(W.forEach(function(Q){He.releaseProgram(Q)}),P.isShaderMaterial&&He.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Q,te,Z,Re){W===null&&(W=Ve);let Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Ge=kh(P,W,Q,te,Z);Oe.setMaterial(te,Le);let Ze=Q.index,ct=1;if(te.wireframe===!0){if(Ze=pe.getWireframeAttribute(Q),Ze===void 0)return;ct=2}let rt=Q.drawRange,at=Q.attributes.position,Xt=rt.start*ct,Vn=(rt.start+rt.count)*ct;Re!==null&&(Xt=Math.max(Xt,Re.start*ct),Vn=Math.min(Vn,(Re.start+Re.count)*ct)),Ze!==null?(Xt=Math.max(Xt,0),Vn=Math.min(Vn,Ze.count)):at!=null&&(Xt=Math.max(Xt,0),Vn=Math.min(Vn,at.count));let rn=Vn-Xt;if(rn<0||rn===1/0)return;lt.setup(Z,te,Ge,Q,Ze);let hi,Bt=nt;if(Ze!==null&&(hi=ge.get(Ze),Bt=$e,Bt.setIndex(hi)),Z.isMesh)te.wireframe===!0?(Oe.setLineWidth(te.wireframeLinewidth*mt()),Bt.setMode(q.LINES)):Bt.setMode(q.TRIANGLES);else if(Z.isLine){let st=te.linewidth;st===void 0&&(st=1),Oe.setLineWidth(st*mt()),Z.isLineSegments?Bt.setMode(q.LINES):Z.isLineLoop?Bt.setMode(q.LINE_LOOP):Bt.setMode(q.LINE_STRIP)}else Z.isPoints?Bt.setMode(q.POINTS):Z.isSprite&&Bt.setMode(q.TRIANGLES);if(Z.isBatchedMesh)Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Bt.renderInstances(Xt,rn,Z.count);else if(Q.isInstancedBufferGeometry){let st=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Xa=Math.min(Q.instanceCount,st);Bt.renderInstances(Xt,rn,Xa)}else Bt.render(Xt,rn)};function Ct(P,W,Q){P.transparent===!0&&P.side===Xn&&P.forceSinglePass===!1?(P.side=yn,P.needsUpdate=!0,Fr(P,W,Q),P.side=Jn,P.needsUpdate=!0,Fr(P,W,Q),P.side=Xn):Fr(P,W,Q)}this.compile=function(P,W,Q=null){Q===null&&(Q=P),m=je.get(Q),m.init(),M.push(m),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),P!==Q&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(_._useLegacyLights);let te=new Set;return P.traverse(function(Z){let Re=Z.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ge=Re[Le];Ct(Ge,Q,Z),te.add(Ge)}else Ct(Re,Q,Z),te.add(Re)}),M.pop(),m=null,te},this.compileAsync=function(P,W,Q=null){let te=this.compile(P,W,Q);return new Promise(Z=>{function Re(){if(te.forEach(function(Le){ut.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){Z(P);return}setTimeout(Re,10)}ke.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Pt=null;function At(P){Pt&&Pt(P)}function pn(){Mn.stop()}function It(){Mn.start()}let Mn=new Jm;Mn.setAnimationLoop(At),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(P){Pt=P,ft.setAnimationLoop(P),P===null?Mn.stop():Mn.start()},ft.addEventListener("sessionstart",pn),ft.addEventListener("sessionend",It),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(W),W=ft.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,W,D),m=je.get(P,M.length),m.init(),M.push(m),ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V.setFromProjectionMatrix(ce),se=this.localClippingEnabled,X=dt.init(this.clippingPlanes,se),v=Ne.get(P,f.length),v.init(),f.push(v),ci(P,W,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,$),this.info.render.frame++,X===!0&&dt.beginShadows();let Q=m.state.shadowsArray;if(me.render(Q,P,W),X===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(v,P),m.setupLights(_._useLegacyLights),W.isArrayCamera){let te=W.cameras;for(let Z=0,Re=te.length;Z<Re;Z++){let Le=te[Z];hl(v,P,Le,Le.viewport)}}else hl(v,P,W);D!==null&&(N.updateMultisampleRenderTarget(D),N.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(_,P,W),lt.resetDefaultState(),F=-1,w=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ci(P,W,Q,te){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||V.intersectsSprite(P)){te&&ze.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ce);let Le=ye.update(P),Ge=P.material;Ge.visible&&v.push(P,Le,Ge,Q,ze.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||V.intersectsObject(P))){let Le=ye.update(P),Ge=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ze.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ze.copy(Le.boundingSphere.center)),ze.applyMatrix4(P.matrixWorld).applyMatrix4(ce)),Array.isArray(Ge)){let Ze=Le.groups;for(let ct=0,rt=Ze.length;ct<rt;ct++){let at=Ze[ct],Xt=Ge[at.materialIndex];Xt&&Xt.visible&&v.push(P,Le,Xt,Q,ze.z,at)}}else Ge.visible&&v.push(P,Le,Ge,Q,ze.z,null)}}let Re=P.children;for(let Le=0,Ge=Re.length;Le<Ge;Le++)ci(Re[Le],W,Q,te)}function hl(P,W,Q,te){let Z=P.opaque,Re=P.transmissive,Le=P.transparent;m.setupLightsView(Q),X===!0&&dt.setGlobalState(_.clippingPlanes,Q),Re.length>0&&Oh(Z,Re,W,Q),te&&Oe.viewport(S.copy(te)),Z.length>0&&Br(Z,W,Q),Re.length>0&&Br(Re,W,Q),Le.length>0&&Br(Le,W,Q),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Oh(P,W,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Re=tt.isWebGL2;re===null&&(re=new cs(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?ho:Ds,minFilter:Os,samples:Re?4:0})),_.getDrawingBufferSize(Ce),Re?re.setSize(Ce.x,Ce.y):re.setSize(Kl(Ce.x),Kl(Ce.y));let Le=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(le),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear();let Ge=_.toneMapping;_.toneMapping=Ns,Br(P,Q,te),N.updateMultisampleRenderTarget(re),N.updateRenderTargetMipmap(re);let Ze=!1;for(let ct=0,rt=W.length;ct<rt;ct++){let at=W[ct],Xt=at.object,Vn=at.geometry,rn=at.material,hi=at.group;if(rn.side===Xn&&Xt.layers.test(te.layers)){let Bt=rn.side;rn.side=yn,rn.needsUpdate=!0,$a(Xt,Q,te,Vn,rn,hi),rn.side=Bt,rn.needsUpdate=!0,Ze=!0}}Ze===!0&&(N.updateMultisampleRenderTarget(re),N.updateRenderTargetMipmap(re)),_.setRenderTarget(Le),_.setClearColor(le,k),_.toneMapping=Ge}function Br(P,W,Q){let te=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Re=P.length;Z<Re;Z++){let Le=P[Z],Ge=Le.object,Ze=Le.geometry,ct=te===null?Le.material:te,rt=Le.group;Ge.layers.test(Q.layers)&&$a(Ge,W,Q,Ze,ct,rt)}}function $a(P,W,Q,te,Z,Re){P.onBeforeRender(_,W,Q,te,Z,Re),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(_,W,Q,te,P,Re),Z.transparent===!0&&Z.side===Xn&&Z.forceSinglePass===!1?(Z.side=yn,Z.needsUpdate=!0,_.renderBufferDirect(Q,W,te,Z,P,Re),Z.side=Jn,Z.needsUpdate=!0,_.renderBufferDirect(Q,W,te,Z,P,Re),Z.side=Xn):_.renderBufferDirect(Q,W,te,Z,P,Re),P.onAfterRender(_,W,Q,te,Z,Re)}function Fr(P,W,Q){W.isScene!==!0&&(W=Ve);let te=ut.get(P),Z=m.state.lights,Re=m.state.shadowsArray,Le=Z.state.version,Ge=He.getParameters(P,Z.state,Re,W,Q),Ze=He.getProgramCacheKey(Ge),ct=te.programs;te.environment=P.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(P.isMeshStandardMaterial?K:C).get(P.envMap||te.environment),ct===void 0&&(P.addEventListener("dispose",Ee),ct=new Map,te.programs=ct);let rt=ct.get(Ze);if(rt!==void 0){if(te.currentProgram===rt&&te.lightsStateVersion===Le)return ul(P,Ge),rt}else Ge.uniforms=He.getUniforms(P),P.onBuild(Q,Ge,_),P.onBeforeCompile(Ge,_),rt=He.acquireProgram(Ge,Ze),ct.set(Ze,rt),te.uniforms=Ge.uniforms;let at=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(at.clippingPlanes=dt.uniform),ul(P,Ge),te.needsLights=Fh(P),te.lightsStateVersion=Le,te.needsLights&&(at.ambientLightColor.value=Z.state.ambient,at.lightProbe.value=Z.state.probe,at.directionalLights.value=Z.state.directional,at.directionalLightShadows.value=Z.state.directionalShadow,at.spotLights.value=Z.state.spot,at.spotLightShadows.value=Z.state.spotShadow,at.rectAreaLights.value=Z.state.rectArea,at.ltc_1.value=Z.state.rectAreaLTC1,at.ltc_2.value=Z.state.rectAreaLTC2,at.pointLights.value=Z.state.point,at.pointLightShadows.value=Z.state.pointShadow,at.hemisphereLights.value=Z.state.hemi,at.directionalShadowMap.value=Z.state.directionalShadowMap,at.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,at.spotShadowMap.value=Z.state.spotShadowMap,at.spotLightMatrix.value=Z.state.spotLightMatrix,at.spotLightMap.value=Z.state.spotLightMap,at.pointShadowMap.value=Z.state.pointShadowMap,at.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=rt,te.uniformsList=null,rt}function qa(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=ua.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function ul(P,W){let Q=ut.get(P);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function kh(P,W,Q,te,Z){W.isScene!==!0&&(W=Ve),N.resetTextureUnits();let Re=W.fog,Le=te.isMeshStandardMaterial?W.environment:null,Ge=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ls,Ze=(te.isMeshStandardMaterial?K:C).get(te.envMap||Le),ct=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,rt=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),at=!!Q.morphAttributes.position,Xt=!!Q.morphAttributes.normal,Vn=!!Q.morphAttributes.color,rn=Ns;te.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(rn=_.toneMapping);let hi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Bt=hi!==void 0?hi.length:0,st=ut.get(te),Xa=m.state.lights;if(X===!0&&(se===!0||P!==w)){let In=P===w&&te.id===F;dt.setState(te,P,In)}let Gt=!1;te.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Xa.state.version||st.outputColorSpace!==Ge||Z.isBatchedMesh&&st.batching===!1||!Z.isBatchedMesh&&st.batching===!0||Z.isInstancedMesh&&st.instancing===!1||!Z.isInstancedMesh&&st.instancing===!0||Z.isSkinnedMesh&&st.skinning===!1||!Z.isSkinnedMesh&&st.skinning===!0||Z.isInstancedMesh&&st.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&st.instancingColor===!1&&Z.instanceColor!==null||st.envMap!==Ze||te.fog===!0&&st.fog!==Re||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==dt.numPlanes||st.numIntersection!==dt.numIntersection)||st.vertexAlphas!==ct||st.vertexTangents!==rt||st.morphTargets!==at||st.morphNormals!==Xt||st.morphColors!==Vn||st.toneMapping!==rn||tt.isWebGL2===!0&&st.morphTargetsCount!==Bt)&&(Gt=!0):(Gt=!0,st.__version=te.version);let Zi=st.currentProgram;Gt===!0&&(Zi=Fr(te,W,Z));let Ya=!1,or=!1,ja=!1,mn=Zi.getUniforms(),Ci=st.uniforms;if(Oe.useProgram(Zi.program)&&(Ya=!0,or=!0,ja=!0),te.id!==F&&(F=te.id,or=!0),Ya||w!==P){mn.setValue(q,"projectionMatrix",P.projectionMatrix),mn.setValue(q,"viewMatrix",P.matrixWorldInverse);let In=mn.map.cameraPosition;In!==void 0&&In.setValue(q,ze.setFromMatrixPosition(P.matrixWorld)),tt.logarithmicDepthBuffer&&mn.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&mn.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,or=!0,ja=!0)}if(Z.isSkinnedMesh){mn.setOptional(q,Z,"bindMatrix"),mn.setOptional(q,Z,"bindMatrixInverse");let In=Z.skeleton;In&&(tt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),mn.setValue(q,"boneTexture",In.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(mn.setOptional(q,Z,"batchingTexture"),mn.setValue(q,"batchingTexture",Z._matricesTexture,N));let Yt=Q.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0&&tt.isWebGL2===!0)&&gt.update(Z,Q,Zi),(or||st.receiveShadow!==Z.receiveShadow)&&(st.receiveShadow=Z.receiveShadow,mn.setValue(q,"receiveShadow",Z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ci.envMap.value=Ze,Ci.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),or&&(mn.setValue(q,"toneMappingExposure",_.toneMappingExposure),st.needsLights&&Bh(Ci,ja),Re&&te.fog===!0&&Te.refreshFogUniforms(Ci,Re),Te.refreshMaterialUniforms(Ci,te,ie,z,re),ua.upload(q,qa(st),Ci,N)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ua.upload(q,qa(st),Ci,N),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&mn.setValue(q,"center",Z.center),mn.setValue(q,"modelViewMatrix",Z.modelViewMatrix),mn.setValue(q,"normalMatrix",Z.normalMatrix),mn.setValue(q,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let In=te.uniformsGroups;for(let Za=0,dl=In.length;Za<dl;Za++)if(tt.isWebGL2){let Ja=In[Za];St.update(Ja,Zi),St.bind(Ja,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Bh(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Fh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,W,Q){ut.get(P.texture).__webglTexture=W,ut.get(P.depthTexture).__webglTexture=Q;let te=ut.get(P);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let Q=ut.get(P);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Q=0){D=P,L=W,T=Q;let te=!0,Z=null,Re=!1,Le=!1;if(P){let Ze=ut.get(P);Ze.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Ze.__webglFramebuffer===void 0?N.setupRenderTarget(P):Ze.__hasExternalTextures&&N.rebindTextures(P,ut.get(P.texture).__webglTexture,ut.get(P.depthTexture).__webglTexture);let ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Le=!0);let rt=ut.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(rt[W])?Z=rt[W][Q]:Z=rt[W],Re=!0):tt.isWebGL2&&P.samples>0&&N.useMultisampledRTT(P)===!1?Z=ut.get(P).__webglMultisampledFramebuffer:Array.isArray(rt)?Z=rt[Q]:Z=rt,S.copy(P.viewport),B.copy(P.scissor),ne=P.scissorTest}else S.copy(J).multiplyScalar(ie).floor(),B.copy(j).multiplyScalar(ie).floor(),ne=ue;if(Oe.bindFramebuffer(q.FRAMEBUFFER,Z)&&tt.drawBuffers&&te&&Oe.drawBuffers(P,Z),Oe.viewport(S),Oe.scissor(B),Oe.setScissorTest(ne),Re){let Ze=ut.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ze.__webglTexture,Q)}else if(Le){let Ze=ut.get(P.texture),ct=W||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ze.__webglTexture,Q||0,ct)}F=-1},this.readRenderTargetPixels=function(P,W,Q,te,Z,Re,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ge=Ge[Le]),Ge){Oe.bindFramebuffer(q.FRAMEBUFFER,Ge);try{let Ze=P.texture,ct=Ze.format,rt=Ze.type;if(ct!==di&&De.convert(ct)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let at=rt===ho&&(ke.has("EXT_color_buffer_half_float")||tt.isWebGL2&&ke.has("EXT_color_buffer_float"));if(rt!==Ds&&De.convert(rt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===as&&(tt.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-te&&Q>=0&&Q<=P.height-Z&&q.readPixels(W,Q,te,Z,De.convert(ct),De.convert(rt),Re)}finally{let Ze=D!==null?ut.get(D).__webglFramebuffer:null;Oe.bindFramebuffer(q.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(P,W,Q=0){let te=Math.pow(2,-Q),Z=Math.floor(W.image.width*te),Re=Math.floor(W.image.height*te);N.setTexture2D(W,0),q.copyTexSubImage2D(q.TEXTURE_2D,Q,0,0,P.x,P.y,Z,Re),Oe.unbindTexture()},this.copyTextureToTexture=function(P,W,Q,te=0){let Z=W.image.width,Re=W.image.height,Le=De.convert(Q.format),Ge=De.convert(Q.type);N.setTexture2D(Q,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,P.x,P.y,Z,Re,Le,Ge,W.image.data):W.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Le,W.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,P.x,P.y,Le,Ge,W.image),te===0&&Q.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Q,te,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Re=P.max.x-P.min.x+1,Le=P.max.y-P.min.y+1,Ge=P.max.z-P.min.z+1,Ze=De.convert(te.format),ct=De.convert(te.type),rt;if(te.isData3DTexture)N.setTexture3D(te,0),rt=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)N.setTexture2DArray(te,0),rt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);let at=q.getParameter(q.UNPACK_ROW_LENGTH),Xt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Vn=q.getParameter(q.UNPACK_SKIP_PIXELS),rn=q.getParameter(q.UNPACK_SKIP_ROWS),hi=q.getParameter(q.UNPACK_SKIP_IMAGES),Bt=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Bt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Bt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,P.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,P.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,P.min.z),Q.isDataTexture||Q.isData3DTexture?q.texSubImage3D(rt,Z,W.x,W.y,W.z,Re,Le,Ge,Ze,ct,Bt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(rt,Z,W.x,W.y,W.z,Re,Le,Ge,Ze,Bt.data)):q.texSubImage3D(rt,Z,W.x,W.y,W.z,Re,Le,Ge,Ze,ct,Bt),q.pixelStorei(q.UNPACK_ROW_LENGTH,at),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Xt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Vn),q.pixelStorei(q.UNPACK_SKIP_ROWS,rn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,hi),Z===0&&te.generateMipmaps&&q.generateMipmap(rt),Oe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),Oe.unbindTexture()},this.resetState=function(){L=0,T=0,D=null,Oe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ld?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===Pc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?yr:qm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?Zt:ls}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Wu=class extends go{};Wu.prototype.isWebGL1Renderer=!0;var hs=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},cc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new U,mi=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ri(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},va=class extends Ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ia,no=new U,sa=new U,ra=new U,aa=new it,io=new it,ig=new ot,Bl=new U,so=new U,Fl=new U,ym=new it,gu=new it,vm=new it,yo=class extends Qt{constructor(e=new va){if(super(),this.isSprite=!0,this.type="Sprite",ia===void 0){ia=new Qn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cc(t,5);ia.setIndex([0,1,2,0,2,3]),ia.setAttribute("position",new mi(i,3,0,!1)),ia.setAttribute("uv",new mi(i,2,3,!1))}this.geometry=ia,this.material=e,this.center=new it(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sa.setFromMatrixScale(this.matrixWorld),ig.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ra.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sa.multiplyScalar(-ra.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;zl(Bl.set(-.5,-.5,0),ra,o,sa,s,r),zl(so.set(.5,-.5,0),ra,o,sa,s,r),zl(Fl.set(.5,.5,0),ra,o,sa,s,r),ym.set(0,0),gu.set(1,0),vm.set(1,1);let a=e.ray.intersectTriangle(Bl,so,Fl,!1,no);if(a===null&&(zl(so.set(-.5,.5,0),ra,o,sa,s,r),gu.set(0,1),a=e.ray.intersectTriangle(Bl,Fl,so,!1,no),a===null))return;let l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:pr.getInterpolation(no,Bl,so,Fl,ym,gu,vm,new it),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zl(n,e,t,i,s,r){aa.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(io.x=r*aa.x-s*aa.y,io.y=s*aa.x+r*aa.y):io.copy(aa),n.copy(e),n.x+=io.x,n.y+=io.y,n.applyMatrix4(ig)}var xm=new U,_m=new bt,bm=new bt,UM=new U,Mm=new ot,Hl=new U,yu=new pi,wm=new ot,vu=new ga,hc=class extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingBox.expandByPoint(Hl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingSphere.expandByPoint(Hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(s),e.ray.intersectsSphere(yu)!==!1&&(wm.copy(s).invert(),vu.copy(e.ray).applyMatrix4(wm),!(this.boundingBox!==null&&vu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;_m.fromBufferAttribute(s.attributes.skinIndex,e),bm.fromBufferAttribute(s.attributes.skinWeight,e),xm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=bm.getComponent(r);if(o!==0){let a=_m.getComponent(r);Mm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(UM.copy(xm).applyMatrix4(Mm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},vo=class extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},uc=class extends Kn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wn,h=wn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sm=new ot,OM=new ot,dc=class n{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:OM;Sm.multiplyMatrices(a,t[r]),Sm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new uc(t,e,e,di,as);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vo),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var xa=class extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Em=new U,Tm=new U,Am=new ot,xu=new ga,Vl=new pi,xo=class extends Qt{constructor(e=new Qn,t=new xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Em.fromBufferAttribute(t,s-1),Tm.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Em.distanceTo(Tm);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(s),Vl.radius+=r,e.ray.intersectsSphere(Vl)===!1)return;Am.copy(s).invert(),xu.copy(e.ray).applyMatrix4(Am);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let _=f,I=M-1;_<I;_+=p){let L=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(m,L),h.fromBufferAttribute(m,T),xu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let _=f,I=M-1;_<I;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),xu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Cm=new U,Rm=new U,fc=class extends xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cm.fromBufferAttribute(t,s),Rm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cm.distanceTo(Rm);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _a=class extends Kn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pc=class n extends Qn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let M=[],_=f/i,I=0;f===0&&o===0?I=.5/t:f===i&&l===Math.PI&&(I=-.5/t);for(let L=0;L<=t;L++){let T=L/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+I,1-_),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let _=h[f][M+1],I=h[f][M],L=h[f+1][M],T=h[f+1][M+1];(f!==0||o>0)&&p.push(_,I,T),(f!==i-1||l<Math.PI)&&p.push(I,L,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mc=class extends Qn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){let f=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,M),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new zt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var _o=class extends Ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vr=class extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Gl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function kM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function BM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Pm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function sg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ba=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$u=class extends ba{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cp,endingEnd:Cp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rp:r=e,a=2*t-i;break;case Lp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rp:o=e,l=2*i-t;break;case Lp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,I=p*m-p*v;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+M*o[c+L]+_*o[l+L]+I*o[u+L];return r}},qu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Xu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gl(t,this.TimeBufferType),this.values=Gl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gl(e.times,Array),values:Gl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $u(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ql:t=this.InterpolantFactoryMethodDiscrete;break;case Xl:t=this.InterpolantFactoryMethodLinear;break;case Xh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ql;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&kM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Xl;var Fs=class extends gi{};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ql;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends gi{};gc.prototype.ValueTypeName="color";var Ma=class extends gi{};Ma.prototype.ValueTypeName="number";var Yu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},us=class extends gi{InterpolantFactoryMethodLinear(e){return new Yu(this.times,this.values,this.getValueSize(),e)}};us.prototype.ValueTypeName="quaternion";us.prototype.DefaultInterpolation=Xl;us.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends gi{};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=ql;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends gi{};ds.prototype.ValueTypeName="vector";var bo=class{constructor(e,t=-1,i,s=xv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(zM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(gi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=BM(l);l=Pm(l,1,h),c=Pm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ma(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,g,v){if(p.length!==0){let m=[],f=[];sg(p,m,f,g),m.length!==0&&v.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(let v in p){let m=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){let _=d[g];m.push(_.time),f.push(_.morphTarget===v?1:0)}s.push(new Ma(".morphTargetInfluence["+v+"]",m,f))}l=p.length*o}else{let p=".bones["+t[u].name+"]";i(ds,p+".position",d,"pos",s),i(us,p+".quaternion",d,"rot",s),i(ds,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function FM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return gc;case"quaternion":return us;case"bool":case"boolean":return Fs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function zM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=FM(n.type);if(n.times===void 0){let t=[],i=[];sg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var yc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Mo=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},HM=new Mo,Di=class{constructor(e){this.manager=e!==void 0?e:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var is={},ju=class extends Error{constructor(e,t){super(e),this.response=t}},wo=class extends Di{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(is[e]!==void 0){is[e].push({onLoad:t,onProgress:i,onError:s});return}is[e]=[],is[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=is[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){M();function M(){u.read().then(({done:_,value:I})=>{if(_)f.close();else{v+=I.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let T=0,D=h.length;T<D;T++){let F=h[T];F.onProgress&&F.onProgress(L)}f.enqueue(I),M()}})}}});return new Response(m)}else throw new ju(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{yc.add(e,c);let h=is[e];delete is[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=is[e];if(h===void 0)throw this.manager.itemError(e),c;delete is[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Zu=class extends Di{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=uo("img");function l(){h(),yc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var vc=class extends Di{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new uc,a=new wo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:On,o.wrapT=c.wrapT!==void 0?c.wrapT:On,o.magFilter=c.magFilter!==void 0?c.magFilter:$n,o.minFilter=c.minFilter!==void 0?c.minFilter:$n,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Os),c.mipmapCount===1&&(o.minFilter=$n),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},xc=class extends Di{constructor(e){super(e)}load(e,t,i,s){let r=new Kn,o=new Zu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},xr=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},_c=class extends xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_u=new ot,Im=new U,Nm=new U,So=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),t.position.copy(Im),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ju=class extends So{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ma*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bc=class extends xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ju}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dm=new ot,ro=new U,bu=new U,Ku=class extends So{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(ro),bu.copy(i.position),bu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bu),i.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),Dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}},Mc=class extends xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qu=class extends So{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wa=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Qu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wc=class extends xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sc=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ec=class extends Qn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ud="\\[\\]\\.:\\/",VM=new RegExp("["+ud+"]","g"),dd="[^"+ud+"]",GM="[^"+ud.replace("\\.","")+"]",WM=/((?:WC+[\/:])*)/.source.replace("WC",dd),$M=/(WCOD+)?/.source.replace("WCOD",GM),qM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),XM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),YM=new RegExp("^"+WM+$M+qM+XM+"$"),jM=["material","materials","bones","map"],ed=class{constructor(e,t,i){let s=i||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},$t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VM,"")}static parseTrackName(e){let t=YM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=ed;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dE=new Float32Array(1);var _r=class extends cc{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Tc=class{constructor(e,t,i=0,s=1/0){this.ray=new ga(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return td(e,this,i,t),i.sort(Um),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)td(e[s],this,i,t);return i.sort(Um),i}};function Um(n,e){return n.distance-e.distance}function td(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)td(s[r],e,t,!0)}}var Om=new U,Wl=new U,Ac=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Om.subVectors(e,this.start),Wl.subVectors(this.end,this.start);let i=Wl.dot(Wl),r=Wl.dot(Om)/i;return t&&(r=Un(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);var Eo=class extends vc{constructor(e){super(e)}parse(e){function t(z){switch(z.image_type){case d:case v:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(z.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function i(z,ie,Y,$,J){let j,ue,V=Y.pixel_size>>3,X=Y.width*Y.height*V;if(ie&&(ue=J.subarray($,$+=Y.colormap_length*(Y.colormap_size>>3))),z){j=new Uint8Array(X);let se,re,ce,Ce=0,ze=new Uint8Array(V);for(;Ce<X;)if(se=J[$++],re=(se&127)+1,se&128){for(ce=0;ce<V;++ce)ze[ce]=J[$++];for(ce=0;ce<re;++ce)j.set(ze,Ce+ce*V);Ce+=V*re}else{for(re*=V,ce=0;ce<re;++ce)j[Ce+ce]=J[$++];Ce+=re}}else j=J.subarray($,$+=ie?Y.width*Y.height:X);return{pixel_data:j,palettes:ue}}function s(z,ie,Y,$,J,j,ue,V,X){let se=X,re,ce=0,Ce,ze,Ve=S.width;for(ze=ie;ze!==$;ze+=Y)for(Ce=J;Ce!==ue;Ce+=j,ce++)re=V[ce],z[(Ce+Ve*ze)*4+3]=255,z[(Ce+Ve*ze)*4+2]=se[re*3+0],z[(Ce+Ve*ze)*4+1]=se[re*3+1],z[(Ce+Ve*ze)*4+0]=se[re*3+2];return z}function r(z,ie,Y,$,J,j,ue,V){let X,se=0,re,ce,Ce=S.width;for(ce=ie;ce!==$;ce+=Y)for(re=J;re!==ue;re+=j,se+=2)X=V[se+0]+(V[se+1]<<8),z[(re+Ce*ce)*4+0]=(X&31744)>>7,z[(re+Ce*ce)*4+1]=(X&992)>>2,z[(re+Ce*ce)*4+2]=(X&31)<<3,z[(re+Ce*ce)*4+3]=X&32768?0:255;return z}function o(z,ie,Y,$,J,j,ue,V){let X=0,se,re,ce=S.width;for(re=ie;re!==$;re+=Y)for(se=J;se!==ue;se+=j,X+=3)z[(se+ce*re)*4+3]=255,z[(se+ce*re)*4+2]=V[X+0],z[(se+ce*re)*4+1]=V[X+1],z[(se+ce*re)*4+0]=V[X+2];return z}function a(z,ie,Y,$,J,j,ue,V){let X=0,se,re,ce=S.width;for(re=ie;re!==$;re+=Y)for(se=J;se!==ue;se+=j,X+=4)z[(se+ce*re)*4+2]=V[X+0],z[(se+ce*re)*4+1]=V[X+1],z[(se+ce*re)*4+0]=V[X+2],z[(se+ce*re)*4+3]=V[X+3];return z}function l(z,ie,Y,$,J,j,ue,V){let X,se=0,re,ce,Ce=S.width;for(ce=ie;ce!==$;ce+=Y)for(re=J;re!==ue;re+=j,se++)X=V[se],z[(re+Ce*ce)*4+0]=X,z[(re+Ce*ce)*4+1]=X,z[(re+Ce*ce)*4+2]=X,z[(re+Ce*ce)*4+3]=255;return z}function c(z,ie,Y,$,J,j,ue,V){let X=0,se,re,ce=S.width;for(re=ie;re!==$;re+=Y)for(se=J;se!==ue;se+=j,X+=2)z[(se+ce*re)*4+0]=V[X+0],z[(se+ce*re)*4+1]=V[X+0],z[(se+ce*re)*4+2]=V[X+0],z[(se+ce*re)*4+3]=V[X+1];return z}function h(z,ie,Y,$,J){let j,ue,V,X,se,re;switch((S.flags&M)>>_){default:case T:j=0,V=1,se=ie,ue=0,X=1,re=Y;break;case I:j=0,V=1,se=ie,ue=Y-1,X=-1,re=-1;break;case D:j=ie-1,V=-1,se=-1,ue=0,X=1,re=Y;break;case L:j=ie-1,V=-1,se=-1,ue=Y-1,X=-1,re=-1;break}if(le)switch(S.pixel_size){case 8:l(z,ue,X,re,j,V,se,$);break;case 16:c(z,ue,X,re,j,V,se,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(z,ue,X,re,j,V,se,$,J);break;case 16:r(z,ue,X,re,j,V,se,$);break;case 24:o(z,ue,X,re,j,V,se,$);break;case 32:a(z,ue,X,re,j,V,se,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return z}let u=0,d=1,p=2,g=3,v=9,m=10,f=11,M=48,_=4,I=0,L=1,T=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0,w=new Uint8Array(e),S={id_length:w[F++],colormap_type:w[F++],image_type:w[F++],colormap_index:w[F++]|w[F++]<<8,colormap_length:w[F++]|w[F++]<<8,colormap_size:w[F++],origin:[w[F++]|w[F++]<<8,w[F++]|w[F++]<<8],width:w[F++]|w[F++]<<8,height:w[F++]|w[F++]<<8,pixel_size:w[F++],flags:w[F++]};if(t(S),S.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=S.id_length;let B=!1,ne=!1,le=!1;switch(S.image_type){case v:B=!0,ne=!0;break;case d:ne=!0;break;case m:B=!0;break;case p:break;case f:B=!0,le=!0;break;case g:le=!0;break}let k=new Uint8Array(S.width*S.height*4),G=i(B,ne,S,F,w);return h(k,S.width,S.height,G.pixel_data,G.palettes),{data:k,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:Os}}};var Dc=class extends Di{load(e,t,i,s){let r=this,o=r.path===""?Sc.extractUrlBase(e):r.path,a=new wo(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(b,x){let A=[],E=b.childNodes;for(let R=0,ee=E.length;R<ee;R++){let ae=E[R];ae.nodeName===x&&A.push(ae)}return A}function s(b){if(b.length===0)return[];let x=b.trim().split(/\s+/),A=new Array(x.length);for(let E=0,R=x.length;E<R;E++)A[E]=x[E];return A}function r(b){if(b.length===0)return[];let x=b.trim().split(/\s+/),A=new Array(x.length);for(let E=0,R=x.length;E<R;E++)A[E]=parseFloat(x[E]);return A}function o(b){if(b.length===0)return[];let x=b.trim().split(/\s+/),A=new Array(x.length);for(let E=0,R=x.length;E<R;E++)A[E]=parseInt(x[E]);return A}function a(b){return b.substring(1)}function l(){return"three_default_"+Py++}function c(b){return Object.keys(b).length===0}function h(b){return{unit:u(i(b,"unit")[0]),upAxis:d(i(b,"up_axis")[0])}}function u(b){return b!==void 0&&b.hasAttribute("meter")===!0?parseFloat(b.getAttribute("meter")):1}function d(b){return b!==void 0?b.textContent:"Y_UP"}function p(b,x,A,E){let R=i(b,x)[0];if(R!==void 0){let ee=i(R,A);for(let ae=0;ae<ee.length;ae++)E(ee[ae])}}function g(b,x){for(let A in b){let E=b[A];E.build=x(b[A])}}function v(b,x){return b.build!==void 0||(b.build=x(b)),b.build}function m(b){let x={sources:{},samplers:{},channels:{}},A=!1;for(let E=0,R=b.childNodes.length;E<R;E++){let ee=b.childNodes[E];if(ee.nodeType!==1)continue;let ae;switch(ee.nodeName){case"source":ae=ee.getAttribute("id"),x.sources[ae]=O(ee);break;case"sampler":ae=ee.getAttribute("id"),x.samplers[ae]=f(ee);break;case"channel":ae=ee.getAttribute("target"),x.channels[ae]=M(ee);break;case"animation":m(ee),A=!0;break;default:console.log(ee)}}A===!1&&(Je.animations[b.getAttribute("id")||Hs.generateUUID()]=x)}function f(b){let x={inputs:{}};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let ee=a(R.getAttribute("source")),ae=R.getAttribute("semantic");x.inputs[ae]=ee;break}}return x}function M(b){let x={},E=b.getAttribute("target").split("/"),R=E.shift(),ee=E.shift(),ae=ee.indexOf("(")!==-1,Pe=ee.indexOf(".")!==-1;if(Pe)E=ee.split("."),ee=E.shift(),x.member=E.shift();else if(ae){let we=ee.split("(");ee=we.shift();for(let Ae=0;Ae<we.length;Ae++)we[Ae]=parseInt(we[Ae].replace(/\)/,""));x.indices=we}return x.id=R,x.sid=ee,x.arraySyntax=ae,x.memberSyntax=Pe,x.sampler=a(b.getAttribute("source")),x}function _(b){let x=[],A=b.channels,E=b.samplers,R=b.sources;for(let ee in A)if(A.hasOwnProperty(ee)){let ae=A[ee],Pe=E[ae.sampler],we=Pe.inputs.INPUT,Ae=Pe.inputs.OUTPUT,Fe=R[we],fe=R[Ae],Be=L(ae,Fe,fe);S(Be,x)}return x}function I(b){return v(Je.animations[b],_)}function L(b,x,A){let E=Je.nodes[b.id],R=st(E.id),ee=E.transforms[b.sid],ae=E.matrix.clone().transpose(),Pe,we,Ae,Fe,fe,Be,Ue={};switch(ee){case"matrix":for(Ae=0,Fe=x.array.length;Ae<Fe;Ae++)if(Pe=x.array[Ae],we=Ae*A.stride,Ue[Pe]===void 0&&(Ue[Pe]={}),b.arraySyntax===!0){let jt=A.array[we],Rt=b.indices[0]+4*b.indices[1];Ue[Pe][Rt]=jt}else for(fe=0,Be=A.stride;fe<Be;fe++)Ue[Pe][fe]=A.array[we+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ee);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ee);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ee);break}let qe=T(Ue,ae);return{name:R.uuid,keyframes:qe}}function T(b,x){let A=[];for(let R in b)A.push({time:parseFloat(R),value:b[R]});A.sort(E);for(let R=0;R<16;R++)B(A,R,x.elements[R]);return A;function E(R,ee){return R.time-ee.time}}let D=new U,F=new U,w=new Pi;function S(b,x){let A=b.keyframes,E=b.name,R=[],ee=[],ae=[],Pe=[];for(let we=0,Ae=A.length;we<Ae;we++){let Fe=A[we],fe=Fe.time,Be=Fe.value;Le.fromArray(Be).transpose(),Le.decompose(D,w,F),R.push(fe),ee.push(D.x,D.y,D.z),ae.push(w.x,w.y,w.z,w.w),Pe.push(F.x,F.y,F.z)}return ee.length>0&&x.push(new ds(E+".position",R,ee)),ae.length>0&&x.push(new us(E+".quaternion",R,ae)),Pe.length>0&&x.push(new ds(E+".scale",R,Pe)),x}function B(b,x,A){let E,R=!0,ee,ae;for(ee=0,ae=b.length;ee<ae;ee++)E=b[ee],E.value[x]===void 0?E.value[x]=null:R=!1;if(R===!0)for(ee=0,ae=b.length;ee<ae;ee++)E=b[ee],E.value[x]=A;else ne(b,x)}function ne(b,x){let A,E;for(let R=0,ee=b.length;R<ee;R++){let ae=b[R];if(ae.value[x]===null){if(A=le(b,R,x),E=k(b,R,x),A===null){ae.value[x]=E.value[x];continue}if(E===null){ae.value[x]=A.value[x];continue}G(ae,A,E,x)}}}function le(b,x,A){for(;x>=0;){let E=b[x];if(E.value[A]!==null)return E;x--}return null}function k(b,x,A){for(;x<b.length;){let E=b[x];if(E.value[A]!==null)return E;x++}return null}function G(b,x,A,E){if(A.time-x.time===0){b.value[E]=x.value[E];return}b.value[E]=(b.time-x.time)*(A.value[E]-x.value[E])/(A.time-x.time)+x.value[E]}function z(b){let x={name:b.getAttribute("id")||"default",start:parseFloat(b.getAttribute("start")||0),end:parseFloat(b.getAttribute("end")||0),animations:[]};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_animation":x.animations.push(a(R.getAttribute("url")));break}}Je.clips[b.getAttribute("id")]=x}function ie(b){let x=[],A=b.name,E=b.end-b.start||-1,R=b.animations;for(let ee=0,ae=R.length;ee<ae;ee++){let Pe=I(R[ee]);for(let we=0,Ae=Pe.length;we<Ae;we++)x.push(Pe[we])}return new bo(A,E,x)}function Y(b){return v(Je.clips[b],ie)}function $(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"skin":x.id=a(R.getAttribute("source")),x.skin=J(R);break;case"morph":x.id=a(R.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[b.getAttribute("id")]=x}function J(b){let x={sources:{}};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(R.textContent);break;case"source":let ee=R.getAttribute("id");x.sources[ee]=O(R);break;case"joints":x.joints=j(R);break;case"vertex_weights":x.vertexWeights=ue(R);break}}return x}function j(b){let x={inputs:{}};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let ee=R.getAttribute("semantic"),ae=a(R.getAttribute("source"));x.inputs[ee]=ae;break}}return x}function ue(b){let x={inputs:{}};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let ee=R.getAttribute("semantic"),ae=a(R.getAttribute("source")),Pe=parseInt(R.getAttribute("offset"));x.inputs[ee]={id:ae,offset:Pe};break;case"vcount":x.vcount=o(R.textContent);break;case"v":x.v=o(R.textContent);break}}return x}function V(b){let x={id:b.id},A=Je.geometries[x.id];return b.skin!==void 0&&(x.skin=X(b.skin),A.sources.skinIndices=x.skin.indices,A.sources.skinWeights=x.skin.weights),x}function X(b){let A={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=b.sources,R=b.vertexWeights,ee=R.vcount,ae=R.v,Pe=R.inputs.JOINT.offset,we=R.inputs.WEIGHT.offset,Ae=b.sources[b.joints.inputs.JOINT],Fe=b.sources[b.joints.inputs.INV_BIND_MATRIX],fe=E[R.inputs.WEIGHT.id].array,Be=0,Ue,qe,We;for(Ue=0,We=ee.length;Ue<We;Ue++){let Rt=ee[Ue],xt=[];for(qe=0;qe<Rt;qe++){let _t=ae[Be+Pe],Ji=ae[Be+we],Zn=fe[Ji];xt.push({index:_t,weight:Zn}),Be+=2}for(xt.sort(jt),qe=0;qe<4;qe++){let _t=xt[qe];_t!==void 0?(A.indices.array.push(_t.index),A.weights.array.push(_t.weight)):(A.indices.array.push(0),A.weights.array.push(0))}}for(b.bindShapeMatrix?A.bindMatrix=new ot().fromArray(b.bindShapeMatrix).transpose():A.bindMatrix=new ot().identity(),Ue=0,We=Ae.array.length;Ue<We;Ue++){let Rt=Ae.array[Ue],xt=new ot().fromArray(Fe.array,Ue*Fe.stride).transpose();A.joints.push({name:Rt,boneInverse:xt})}return A;function jt(Rt,xt){return xt.weight-Rt.weight}}function se(b){return v(Je.controllers[b],V)}function re(b){let x={init_from:i(b,"init_from")[0].textContent};Je.images[b.getAttribute("id")]=x}function ce(b){return b.build!==void 0?b.build:b.init_from}function Ce(b){let x=Je.images[b];return x!==void 0?v(x,ce):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",b),null)}function ze(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"profile_COMMON":x.profile=Ve(R);break}}Je.effects[b.getAttribute("id")]=x}function Ve(b){let x={surfaces:{},samplers:{}};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"newparam":mt(R,x);break;case"technique":x.technique=ke(R);break;case"extra":x.extra=C(R);break}}return x}function mt(b,x){let A=b.getAttribute("sid");for(let E=0,R=b.childNodes.length;E<R;E++){let ee=b.childNodes[E];if(ee.nodeType===1)switch(ee.nodeName){case"surface":x.surfaces[A]=q(ee);break;case"sampler2D":x.samplers[A]=et(ee);break}}}function q(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"init_from":x.init_from=R.textContent;break}}return x}function et(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"source":x.source=R.textContent;break}}return x}function ke(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=R.nodeName,x.parameters=tt(R);break;case"extra":x.extra=C(R);break}}return x}function tt(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[R.nodeName]=Oe(R);break;case"transparent":x[R.nodeName]={opaque:R.hasAttribute("opaque")?R.getAttribute("opaque"):"A_ONE",data:Oe(R)};break}}return x}function Oe(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":x[R.nodeName]=r(R.textContent);break;case"float":x[R.nodeName]=parseFloat(R.textContent);break;case"texture":x[R.nodeName]={id:R.getAttribute("texture"),extra:kt(R)};break}}return x}function kt(b){let x={technique:{}};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"extra":ut(R,x);break}}return x}function ut(b,x){for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":N(R,x);break}}}function N(b,x){for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[R.nodeName]=parseFloat(R.textContent);break;case"wrapU":case"wrapV":R.textContent.toUpperCase()==="TRUE"?x.technique[R.nodeName]=1:R.textContent.toUpperCase()==="FALSE"?x.technique[R.nodeName]=0:x.technique[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=ge(R);break}}}function C(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":x.technique=K(R);break}}return x}function K(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"double_sided":x[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=ge(R);break}}return x}function ge(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"texture":x[R.nodeName]={id:R.getAttribute("texture"),texcoord:R.getAttribute("texcoord"),extra:kt(R)};break}}return x}function pe(b){return b}function ye(b){return v(Je.effects[b],pe)}function He(b){let x={name:b.getAttribute("name")};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_effect":x.url=a(R.getAttribute("url"));break}}Je.materials[b.getAttribute("id")]=x}function Te(b){let x,A=b.slice((b.lastIndexOf(".")-1>>>0)+2);switch(A=A.toLowerCase(),A){case"tga":x=zh;break;default:x=Ja}return x}function Ne(b){let x=ye(b.url),A=x.profile.technique,E;switch(A.type){case"phong":case"blinn":E=new _o;break;case"lambert":E=new vr;break;default:E=new nn;break}E.name=b.name||"";function R(we,Ae=null){let Fe=x.profile.samplers[we.id],fe=null;if(Fe!==void 0){let Be=x.profile.surfaces[Fe.source];fe=Ce(Be.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=Ce(we.id);if(fe!==null){let Be=Te(fe);if(Be!==void 0){let Ue=Be.load(fe),qe=we.extra;if(qe!==void 0&&qe.technique!==void 0&&c(qe.technique)===!1){let We=qe.technique;Ue.wrapS=We.wrapU?Us:On,Ue.wrapT=We.wrapV?Us:On,Ue.offset.set(We.offsetU||0,We.offsetV||0),Ue.repeat.set(We.repeatU||1,We.repeatV||1)}else Ue.wrapS=Us,Ue.wrapT=Us;return Ae!==null&&(Ue.colorSpace=Ae),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",we.id),null}let ee=A.parameters;for(let we in ee){let Ae=ee[we];switch(we){case"diffuse":Ae.color&&E.color.fromArray(Ae.color),Ae.texture&&(E.map=R(Ae.texture,Zt));break;case"specular":Ae.color&&E.specular&&E.specular.fromArray(Ae.color),Ae.texture&&(E.specularMap=R(Ae.texture));break;case"bump":Ae.texture&&(E.normalMap=R(Ae.texture));break;case"ambient":Ae.texture&&(E.lightMap=R(Ae.texture,Zt));break;case"shininess":Ae.float&&E.shininess&&(E.shininess=Ae.float);break;case"emission":Ae.color&&E.emissive&&E.emissive.fromArray(Ae.color),Ae.texture&&(E.emissiveMap=R(Ae.texture,Zt));break}}E.color.convertSRGBToLinear(),E.specular&&E.specular.convertSRGBToLinear(),E.emissive&&E.emissive.convertSRGBToLinear();let ae=ee.transparent,Pe=ee.transparency;if(Pe===void 0&&ae&&(Pe={float:1}),ae===void 0&&Pe&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Pe)if(ae.data.texture)E.transparent=!0;else{let we=ae.data.color;switch(ae.opaque){case"A_ONE":E.opacity=we[3]*Pe.float;break;case"RGB_ZERO":E.opacity=1-we[0]*Pe.float;break;case"A_ZERO":E.opacity=1-we[3]*Pe.float;break;case"RGB_ONE":E.opacity=we[0]*Pe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}E.opacity<1&&(E.transparent=!0)}if(A.extra!==void 0&&A.extra.technique!==void 0){let we=A.extra.technique;for(let Ae in we){let Fe=we[Ae];switch(Ae){case"double_sided":E.side=Fe===1?Xn:Jn;break;case"bump":E.normalMap=R(Fe.texture),E.normalScale=new it(1,1);break}}}return E}function je(b){return v(Je.materials[b],Ne)}function dt(b){let x={name:b.getAttribute("name")};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"optics":x.optics=me(R);break}}Je.cameras[b.getAttribute("id")]=x}function me(b){for(let x=0;x<b.childNodes.length;x++){let A=b.childNodes[x];switch(A.nodeName){case"technique_common":return Tt(A)}}return{}}function Tt(b){let x={};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];switch(E.nodeName){case"perspective":case"orthographic":x.technique=E.nodeName,x.parameters=gt(E);break}}return x}function gt(b){let x={};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[E.nodeName]=parseFloat(E.textContent);break}}return x}function nt(b){let x;switch(b.optics.technique){case"perspective":x=new on(b.optics.parameters.yfov,b.optics.parameters.aspect_ratio,b.optics.parameters.znear,b.optics.parameters.zfar);break;case"orthographic":let A=b.optics.parameters.ymag,E=b.optics.parameters.xmag,R=b.optics.parameters.aspect_ratio;E=E===void 0?A*R:E,A=A===void 0?E/R:A,E*=.5,A*=.5,x=new Bs(-E,E,A,-A,b.optics.parameters.znear,b.optics.parameters.zfar);break;default:x=new on;break}return x.name=b.name||"",x}function $e(b){let x=Je.cameras[b];return x!==void 0?v(x,nt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",b),null)}function De(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique_common":x=lt(R);break}}Je.lights[b.getAttribute("id")]=x}function lt(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=R.nodeName,x.parameters=St(R)}}return x}function St(b){let x={};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":let ee=r(R.textContent);x.color=new ht().fromArray(ee).convertSRGBToLinear();break;case"falloff_angle":x.falloffAngle=parseFloat(R.textContent);break;case"quadratic_attenuation":let ae=parseFloat(R.textContent);x.distance=ae?Math.sqrt(1/ae):0;break}}return x}function Vt(b){let x;switch(b.technique){case"directional":x=new wa;break;case"point":x=new Mc;break;case"spot":x=new bc;break;case"ambient":x=new wc;break}return b.parameters.color&&x.color.copy(b.parameters.color),b.parameters.distance&&(x.distance=b.parameters.distance),x}function ft(b){let x=Je.lights[b];return x!==void 0?v(x,Vt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",b),null)}function Me(b){let x={name:b.getAttribute("name"),sources:{},vertices:{},primitives:[]},A=i(b,"mesh")[0];if(A!==void 0){for(let E=0;E<A.childNodes.length;E++){let R=A.childNodes[E];if(R.nodeType!==1)continue;let ee=R.getAttribute("id");switch(R.nodeName){case"source":x.sources[ee]=O(R);break;case"vertices":x.vertices=Se(R);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",R.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(Ee(R));break;default:console.log(R)}}Je.geometries[b.getAttribute("id")]=x}}function O(b){let x={array:[],stride:3};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"float_array":x.array=r(E.textContent);break;case"Name_array":x.array=s(E.textContent);break;case"technique_common":let R=i(E,"accessor")[0];R!==void 0&&(x.stride=parseInt(R.getAttribute("stride")));break}}return x}function Se(b){let x={};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];E.nodeType===1&&(x[E.getAttribute("semantic")]=a(E.getAttribute("source")))}return x}function Ee(b){let x={type:b.nodeName,material:b.getAttribute("material"),count:parseInt(b.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let A=0,E=b.childNodes.length;A<E;A++){let R=b.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let ee=a(R.getAttribute("source")),ae=R.getAttribute("semantic"),Pe=parseInt(R.getAttribute("offset")),we=parseInt(R.getAttribute("set")),Ae=we>0?ae+we:ae;x.inputs[Ae]={id:ee,offset:Pe},x.stride=Math.max(x.stride,Pe+1),ae==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(R.textContent);break;case"p":x.p=o(R.textContent);break}}return x}function Ke(b){let x={};for(let A=0;A<b.length;A++){let E=b[A];x[E.type]===void 0&&(x[E.type]=[]),x[E.type].push(E)}return x}function Ye(b){let x=0;for(let A=0,E=b.length;A<E;A++)b[A].hasUV===!0&&x++;x>0&&x<b.length&&(b.uvsNeedsFix=!0)}function Ct(b){let x={},A=b.sources,E=b.vertices,R=b.primitives;if(R.length===0)return{};let ee=Ke(R);for(let ae in ee){let Pe=ee[ae];Ye(Pe),x[ae]=Pt(Pe,A,E)}return x}function Pt(b,x,A){let E={},R={array:[],stride:0},ee={array:[],stride:0},ae={array:[],stride:0},Pe={array:[],stride:0},we={array:[],stride:0},Ae={array:[],stride:4},Fe={array:[],stride:4},fe=new Qn,Be=[],Ue=0;for(let qe=0;qe<b.length;qe++){let We=b[qe],jt=We.inputs,Rt=0;switch(We.type){case"lines":case"linestrips":Rt=We.count*2;break;case"triangles":Rt=We.count*3;break;case"polylist":for(let xt=0;xt<We.count;xt++){let _t=We.vcount[xt];switch(_t){case 3:Rt+=3;break;case 4:Rt+=6;break;default:Rt+=(_t-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",We.type)}fe.addGroup(Ue,Rt,qe),Ue+=Rt,We.material&&Be.push(We.material);for(let xt in jt){let _t=jt[xt];switch(xt){case"VERTEX":for(let Ji in A){let Zn=A[Ji];switch(Ji){case"POSITION":let zr=R.array.length;if(At(We,x[Zn],_t.offset,R.array),R.stride=x[Zn].stride,x.skinWeights&&x.skinIndices&&(At(We,x.skinIndices,_t.offset,Ae.array),At(We,x.skinWeights,_t.offset,Fe.array)),We.hasUV===!1&&b.uvsNeedsFix===!0){let Iy=(R.array.length-zr)/R.stride;for(let Yf=0;Yf<Iy;Yf++)ae.array.push(0,0)}break;case"NORMAL":At(We,x[Zn],_t.offset,ee.array),ee.stride=x[Zn].stride;break;case"COLOR":At(We,x[Zn],_t.offset,we.array),we.stride=x[Zn].stride;break;case"TEXCOORD":At(We,x[Zn],_t.offset,ae.array),ae.stride=x[Zn].stride;break;case"TEXCOORD1":At(We,x[Zn],_t.offset,Pe.array),ae.stride=x[Zn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ji)}}break;case"NORMAL":At(We,x[_t.id],_t.offset,ee.array),ee.stride=x[_t.id].stride;break;case"COLOR":At(We,x[_t.id],_t.offset,we.array,!0),we.stride=x[_t.id].stride;break;case"TEXCOORD":At(We,x[_t.id],_t.offset,ae.array),ae.stride=x[_t.id].stride;break;case"TEXCOORD1":At(We,x[_t.id],_t.offset,Pe.array),Pe.stride=x[_t.id].stride;break}}}return R.array.length>0&&fe.setAttribute("position",new zt(R.array,R.stride)),ee.array.length>0&&fe.setAttribute("normal",new zt(ee.array,ee.stride)),we.array.length>0&&fe.setAttribute("color",new zt(we.array,we.stride)),ae.array.length>0&&fe.setAttribute("uv",new zt(ae.array,ae.stride)),Pe.array.length>0&&fe.setAttribute("uv1",new zt(Pe.array,Pe.stride)),Ae.array.length>0&&fe.setAttribute("skinIndex",new zt(Ae.array,Ae.stride)),Fe.array.length>0&&fe.setAttribute("skinWeight",new zt(Fe.array,Fe.stride)),E.data=fe,E.type=b[0].type,E.materialKeys=Be,E}function At(b,x,A,E,R=!1){let ee=b.p,ae=b.stride,Pe=b.vcount;function we(fe){let Be=ee[fe+A]*Fe,Ue=Be+Fe;for(;Be<Ue;Be++)E.push(Ae[Be]);if(R){let qe=E.length-Fe-1;fl.setRGB(E[qe+0],E[qe+1],E[qe+2]).convertSRGBToLinear(),E[qe+0]=fl.r,E[qe+1]=fl.g,E[qe+2]=fl.b}}let Ae=x.array,Fe=x.stride;if(b.vcount!==void 0){let fe=0;for(let Be=0,Ue=Pe.length;Be<Ue;Be++){let qe=Pe[Be];if(qe===4){let We=fe+ae*0,jt=fe+ae*1,Rt=fe+ae*2,xt=fe+ae*3;we(We),we(jt),we(xt),we(jt),we(Rt),we(xt)}else if(qe===3){let We=fe+ae*0,jt=fe+ae*1,Rt=fe+ae*2;we(We),we(jt),we(Rt)}else if(qe>4)for(let We=1,jt=qe-2;We<=jt;We++){let Rt=fe+ae*0,xt=fe+ae*We,_t=fe+ae*(We+1);we(Rt),we(xt),we(_t)}fe+=ae*qe}}else for(let fe=0,Be=ee.length;fe<Be;fe+=ae)we(fe)}function pn(b){return v(Je.geometries[b],Ct)}function It(b){let x={name:b.getAttribute("name")||"",joints:{},links:[]};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"technique_common":hl(E,x);break}}Je.kinematicsModels[b.getAttribute("id")]=x}function Mn(b){return b.build!==void 0?b.build:b}function ci(b){return v(Je.kinematicsModels[b],Mn)}function hl(b,x){for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"joint":x.joints[E.getAttribute("sid")]=Oh(E);break;case"link":x.links.push($a(E));break}}}function Oh(b){let x;for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":x=Br(E);break}}return x}function Br(b){let x={sid:b.getAttribute("sid"),name:b.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:b.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=r(E.textContent);x.axis.fromArray(R);break;case"limits":let ee=E.getElementsByTagName("max")[0],ae=E.getElementsByTagName("min")[0];x.limits.max=parseFloat(ee.textContent),x.limits.min=parseFloat(ae.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function $a(b){let x={sid:b.getAttribute("sid"),name:b.getAttribute("name")||"",attachments:[],transforms:[]};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":x.attachments.push(Fr(E));break;case"matrix":case"translate":case"rotate":x.transforms.push(qa(E));break}}return x}function Fr(b){let x={joint:b.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"link":x.links.push($a(E));break;case"matrix":case"translate":case"rotate":x.transforms.push(qa(E));break}}return x}function qa(b){let x={type:b.nodeName},A=r(b.textContent);switch(x.type){case"matrix":x.obj=new ot,x.obj.fromArray(A).transpose();break;case"translate":x.obj=new U,x.obj.fromArray(A);break;case"rotate":x.obj=new U,x.obj.fromArray(A),x.angle=Hs.degToRad(A[3]);break}return x}function ul(b){let x={name:b.getAttribute("name")||"",rigidBodies:{}};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":x.rigidBodies[E.getAttribute("name")]={},kh(E,x.rigidBodies[E.getAttribute("name")]);break}}Je.physicsModels[b.getAttribute("id")]=x}function kh(b,x){for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"technique_common":Bh(E,x);break}}}function Bh(b,x){for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"inertia":x.inertia=r(E.textContent);break;case"mass":x.mass=r(E.textContent)[0];break}}}function Fh(b){let x={bindJointAxis:[]};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":x.bindJointAxis.push(P(E));break}}Je.kinematicsScenes[a(b.getAttribute("url"))]=x}function P(b){let x={target:b.getAttribute("target").split("/").pop()};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=E.getElementsByTagName("param")[0];x.axis=R.textContent;let ee=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=ee.substring(0,ee.length-1);break}}return x}function W(b){return b.build!==void 0?b.build:b}function Q(b){return v(Je.kinematicsScenes[b],W)}function te(){let b=Object.keys(Je.kinematicsModels)[0],x=Object.keys(Je.kinematicsScenes)[0],A=Object.keys(Je.visualScenes)[0];if(b===void 0||x===void 0)return;let E=ci(b),R=Q(x),ee=Ya(A),ae=R.bindJointAxis,Pe={};for(let Fe=0,fe=ae.length;Fe<fe;Fe++){let Be=ae[Fe],Ue=Yt.querySelector('[sid="'+Be.target+'"]');if(Ue){let qe=Ue.parentElement;we(Be.jointIndex,qe)}}function we(Fe,fe){let Be=fe.getAttribute("name"),Ue=E.joints[Fe];ee.traverse(function(qe){qe.name===Be&&(Pe[Fe]={object:qe,transforms:Z(fe),joint:Ue,position:Ue.zeroPosition})})}let Ae=new ot;Xf={joints:E&&E.joints,getJointValue:function(Fe){let fe=Pe[Fe];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,fe){let Be=Pe[Fe];if(Be){let Ue=Be.joint;if(fe>Ue.limits.max||fe<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+fe+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{let qe=Be.object,We=Ue.axis,jt=Be.transforms;Le.identity();for(let Rt=0;Rt<jt.length;Rt++){let xt=jt[Rt];if(xt.sid&&xt.sid.indexOf(Fe)!==-1)switch(Ue.type){case"revolute":Le.multiply(Ae.makeRotationAxis(We,Hs.degToRad(fe)));break;case"prismatic":Le.multiply(Ae.makeTranslation(We.x*fe,We.y*fe,We.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(xt.type){case"matrix":Le.multiply(xt.obj);break;case"translate":Le.multiply(Ae.makeTranslation(xt.obj.x,xt.obj.y,xt.obj.z));break;case"scale":Le.scale(xt.obj);break;case"rotate":Le.multiply(Ae.makeRotationAxis(xt.obj,xt.angle));break}}qe.matrix.copy(Le),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),Pe[Fe].position=fe}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function Z(b){let x=[],A=Yt.querySelector('[id="'+b.id+'"]');for(let E=0;E<A.childNodes.length;E++){let R=A.childNodes[E];if(R.nodeType!==1)continue;let ee,ae;switch(R.nodeName){case"matrix":ee=r(R.textContent);let Pe=new ot().fromArray(ee).transpose();x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:Pe});break;case"translate":case"scale":ee=r(R.textContent),ae=new U().fromArray(ee),x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae});break;case"rotate":ee=r(R.textContent),ae=new U().fromArray(ee);let we=Hs.degToRad(ee[3]);x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae,angle:we});break}}return x}function Re(b){let x=b.getElementsByTagName("node");for(let A=0;A<x.length;A++){let E=x[A];E.hasAttribute("id")===!1&&E.setAttribute("id",l())}}let Le=new ot,Ge=new U;function Ze(b){let x={name:b.getAttribute("name")||"",type:b.getAttribute("type"),id:b.getAttribute("id"),sid:b.getAttribute("sid"),matrix:new ot,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];if(E.nodeType!==1)continue;let R;switch(E.nodeName){case"node":x.nodes.push(E.getAttribute("id")),Ze(E);break;case"instance_camera":x.instanceCameras.push(a(E.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(ct(E));break;case"instance_light":x.instanceLights.push(a(E.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(ct(E));break;case"instance_node":x.instanceNodes.push(a(E.getAttribute("url")));break;case"matrix":R=r(E.textContent),x.matrix.multiply(Le.fromArray(R).transpose()),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":R=r(E.textContent),Ge.fromArray(R),x.matrix.multiply(Le.makeTranslation(Ge.x,Ge.y,Ge.z)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":R=r(E.textContent);let ee=Hs.degToRad(R[3]);x.matrix.multiply(Le.makeRotationAxis(Ge.fromArray(R),ee)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":R=r(E.textContent),x.matrix.scale(Ge.fromArray(R)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return Bt(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):Je.nodes[x.id]=x,x}function ct(b){let x={id:a(b.getAttribute("url")),materials:{},skeletons:[]};for(let A=0;A<b.childNodes.length;A++){let E=b.childNodes[A];switch(E.nodeName){case"bind_material":let R=E.getElementsByTagName("instance_material");for(let ee=0;ee<R.length;ee++){let ae=R[ee],Pe=ae.getAttribute("symbol"),we=ae.getAttribute("target");x.materials[Pe]=a(we)}break;case"skeleton":x.skeletons.push(a(E.textContent));break;default:break}}return x}function rt(b,x){let A=[],E=[],R,ee,ae;for(R=0;R<b.length;R++){let Ae=b[R],Fe;if(Bt(Ae))Fe=st(Ae),at(Fe,x,A);else if(Zi(Ae)){let Be=Je.visualScenes[Ae].children;for(let Ue=0;Ue<Be.length;Ue++){let qe=Be[Ue];if(qe.type==="JOINT"){let We=st(qe.id);at(We,x,A)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ae)}for(R=0;R<x.length;R++)for(ee=0;ee<A.length;ee++)if(ae=A[ee],ae.bone.name===x[R].name){E[R]=ae,ae.processed=!0;break}for(R=0;R<A.length;R++)ae=A[R],ae.processed===!1&&(E.push(ae),ae.processed=!0);let Pe=[],we=[];for(R=0;R<E.length;R++)ae=E[R],Pe.push(ae.bone),we.push(ae.boneInverse);return new dc(Pe,we)}function at(b,x,A){b.traverse(function(E){if(E.isBone===!0){let R;for(let ee=0;ee<x.length;ee++){let ae=x[ee];if(ae.name===E.name){R=ae.boneInverse;break}}R===void 0&&(R=new ot),A.push({bone:E,boneInverse:R,processed:!1})}})}function Xt(b){let x=[],A=b.matrix,E=b.nodes,R=b.type,ee=b.instanceCameras,ae=b.instanceControllers,Pe=b.instanceLights,we=b.instanceGeometries,Ae=b.instanceNodes;for(let fe=0,Be=E.length;fe<Be;fe++)x.push(st(E[fe]));for(let fe=0,Be=ee.length;fe<Be;fe++){let Ue=$e(ee[fe]);Ue!==null&&x.push(Ue.clone())}for(let fe=0,Be=ae.length;fe<Be;fe++){let Ue=ae[fe],qe=se(Ue.id),We=pn(qe.id),jt=hi(We,Ue.materials),Rt=Ue.skeletons,xt=qe.skin.joints,_t=rt(Rt,xt);for(let Ji=0,Zn=jt.length;Ji<Zn;Ji++){let zr=jt[Ji];zr.isSkinnedMesh&&(zr.bind(_t,qe.skin.bindMatrix),zr.normalizeSkinWeights()),x.push(zr)}}for(let fe=0,Be=Pe.length;fe<Be;fe++){let Ue=ft(Pe[fe]);Ue!==null&&x.push(Ue.clone())}for(let fe=0,Be=we.length;fe<Be;fe++){let Ue=we[fe],qe=pn(Ue.id),We=hi(qe,Ue.materials);for(let jt=0,Rt=We.length;jt<Rt;jt++)x.push(We[jt])}for(let fe=0,Be=Ae.length;fe<Be;fe++)x.push(st(Ae[fe]).clone());let Fe;if(E.length===0&&x.length===1)Fe=x[0];else{Fe=R==="JOINT"?new vo:new Sn;for(let fe=0;fe<x.length;fe++)Fe.add(x[fe])}return Fe.name=R==="JOINT"?b.sid:b.name,Fe.matrix.copy(A),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}let Vn=new nn({name:Di.DEFAULT_MATERIAL_NAME,color:16711935});function rn(b,x){let A=[];for(let E=0,R=b.length;E<R;E++){let ee=x[b[E]];ee===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",b[E]),A.push(Vn)):A.push(je(ee))}return A}function hi(b,x){let A=[];for(let E in b){let R=b[E],ee=rn(R.materialKeys,x);if(ee.length===0&&(E==="lines"||E==="linestrips"?ee.push(new xa):ee.push(new _o)),E==="lines"||E==="linestrips")for(let Ae=0,Fe=ee.length;Ae<Fe;Ae++){let fe=ee[Ae];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){let Be=new xa;Be.color.copy(fe.color),Be.opacity=fe.opacity,Be.transparent=fe.transparent,ee[Ae]=Be}}let ae=R.data.attributes.skinIndex!==void 0,Pe=ee.length===1?ee[0]:ee,we;switch(E){case"lines":we=new fc(R.data,Pe);break;case"linestrips":we=new xo(R.data,Pe);break;case"triangles":case"polylist":ae?we=new hc(R.data,Pe):we=new Ft(R.data,Pe);break}A.push(we)}return A}function Bt(b){return Je.nodes[b]!==void 0}function st(b){return v(Je.nodes[b],Xt)}function Xa(b){let x={name:b.getAttribute("name"),children:[]};Re(b);let A=i(b,"node");for(let E=0;E<A.length;E++)x.children.push(Ze(A[E]));Je.visualScenes[b.getAttribute("id")]=x}function Gt(b){let x=new Sn;x.name=b.name;let A=b.children;for(let E=0;E<A.length;E++){let R=A[E];x.add(st(R.id))}return x}function Zi(b){return Je.visualScenes[b]!==void 0}function Ya(b){return v(Je.visualScenes[b],Gt)}function or(b){let x=i(b,"instance_visual_scene")[0];return Ya(a(x.getAttribute("url")))}function ja(){let b=Je.clips;if(c(b)===!0){if(c(Je.animations)===!1){let x=[];for(let A in Je.animations){let E=I(A);for(let R=0,ee=E.length;R<ee;R++)x.push(E[R])}pl.push(new bo("default",-1,x))}}else for(let x in b)pl.push(Y(x))}function mn(b){let x="",A=[b];for(;A.length;){let E=A.shift();E.nodeType===Node.TEXT_NODE?x+=E.textContent:(x+=`
`,A.push.apply(A,E.childNodes))}return x.trim()}if(e.length===0)return{scene:new hs};let Ci=new DOMParser().parseFromString(e,"application/xml"),Yt=i(Ci,"COLLADA")[0],In=Ci.getElementsByTagName("parsererror")[0];if(In!==void 0){let b=i(In,"div")[0],x;return b?x=b.textContent:x=mn(In),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}let Za=Yt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Za);let dl=h(i(Yt,"asset")[0]),Ja=new xc(this.manager);Ja.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let zh;Eo&&(zh=new Eo(this.manager),zh.setPath(this.resourcePath||t));let fl=new ht,pl=[],Xf={},Py=0,Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(Yt,"library_animations","animation",m),p(Yt,"library_animation_clips","animation_clip",z),p(Yt,"library_controllers","controller",$),p(Yt,"library_images","image",re),p(Yt,"library_effects","effect",ze),p(Yt,"library_materials","material",He),p(Yt,"library_cameras","camera",dt),p(Yt,"library_lights","light",De),p(Yt,"library_geometries","geometry",Me),p(Yt,"library_nodes","node",Ze),p(Yt,"library_visual_scenes","visual_scene",Xa),p(Yt,"library_kinematics_models","kinematics_model",It),p(Yt,"library_physics_models","physics_model",ul),p(Yt,"scene","instance_kinematics_scene",Fh),g(Je.animations,_),g(Je.clips,ie),g(Je.controllers,V),g(Je.images,ce),g(Je.effects,pe),g(Je.materials,Ne),g(Je.cameras,nt),g(Je.lights,Vt),g(Je.geometries,Ct),g(Je.visualScenes,Gt),ja(),te();let ml=or(i(Yt,"scene")[0]);return ml.animations=pl,dl.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ml.rotation.set(-Math.PI/2,0,0)),ml.scale.multiplyScalar(dl.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),pl},kinematics:Xf,library:Je,scene:ml}}};var rg=new vn,Uc=new U,Vs=class extends Ec{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new zt(e,3)),this.setAttribute("uv",new zt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new _r(t,6,1);return this.setAttribute("instanceStart",new mi(i,3,0)),this.setAttribute("instanceEnd",new mi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new _r(t,6,1);return this.setAttribute("instanceColorStart",new mi(i,3,0)),this.setAttribute("instanceColorEnd",new mi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new mc(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),rg.setFromBufferAttribute(t),this.boundingBox.union(rg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Uc.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Uc)),Uc.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Uc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new it(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qn.line={uniforms:Ic.merge([be.common,be.fog,be.line]),vertexShader:`
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
		`};var fs=class extends Si{constructor(e){super({type:"LineMaterial",uniforms:Ic.clone(qn.line.uniforms),vertexShader:qn.line.vertexShader,fragmentShader:qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var ag=new U,og=new U,En=new bt,Tn=new bt,Ui=new bt,fd=new U,pd=new ot,An=new Ac,lg=new U,Oc=new vn,kc=new pi,Oi=new bt,ki,br;function cg(n,e,t){return Oi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Oi.multiplyScalar(1/Oi.w),Oi.x=br/t.width,Oi.y=br/t.height,Oi.applyMatrix4(n.projectionMatrixInverse),Oi.multiplyScalar(1/Oi.w),Math.abs(Math.max(Oi.x,Oi.y))}function JM(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){An.start.fromBufferAttribute(s,a),An.end.fromBufferAttribute(r,a),An.applyMatrix4(t);let c=new U,h=new U;ki.distanceSqToSegment(An.start,An.end,h,c),h.distanceTo(c)<br*.5&&e.push({point:h,pointOnLine:c,distance:ki.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function KM(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;ki.at(1,Ui),Ui.w=1,Ui.applyMatrix4(e.matrixWorldInverse),Ui.applyMatrix4(i),Ui.multiplyScalar(1/Ui.w),Ui.x*=r.x/2,Ui.y*=r.y/2,Ui.z=0,fd.copy(Ui),pd.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(En.fromBufferAttribute(l,d),Tn.fromBufferAttribute(c,d),En.w=1,Tn.w=1,En.applyMatrix4(pd),Tn.applyMatrix4(pd),En.z>u&&Tn.z>u)continue;if(En.z>u){let _=En.z-Tn.z,I=(En.z-u)/_;En.lerp(Tn,I)}else if(Tn.z>u){let _=Tn.z-En.z,I=(Tn.z-u)/_;Tn.lerp(En,I)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=r.x/2,En.y*=r.y/2,Tn.x*=r.x/2,Tn.y*=r.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let v=An.closestPointToPointParameter(fd,!0);An.at(v,lg);let m=Hs.lerp(En.z,Tn.z,v),f=m>=-1&&m<=1,M=fd.distanceTo(lg)<br*.5;if(f&&M){An.start.fromBufferAttribute(l,d),An.end.fromBufferAttribute(c,d),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let _=new U,I=new U;ki.distanceSqToSegment(An.start,An.end,I,_),t.push({point:I,pointOnLine:_,distance:ki.origin.distanceTo(I),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var Ea=class extends Ft{constructor(e=new Vs,t=new fs({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)ag.fromBufferAttribute(t,o),og.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+ag.distanceTo(og);let r=new _r(s,2,1);return e.setAttribute("instanceDistanceStart",new mi(r,1,0)),e.setAttribute("instanceDistanceEnd",new mi(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ki=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;br=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=br*.5;else{let u=Math.max(s.near,kc.distanceToPoint(ki.origin));c=cg(s,u,l.resolution)}if(kc.radius+=c,ki.intersectsSphere(kc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Oc.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=br*.5;else{let u=Math.max(s.near,Oc.distanceToPoint(ki.origin));h=cg(s,u,l.resolution)}Oc.expandByScalar(h),ki.intersectsBox(Oc)!==!1&&(i?JM(this,t):KM(this,s,t))}};var QM="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",To=null;function ew(){if(To)return To;To=new Map;for(let n of QM.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,o]=i.split(" ");To.set(t?t+"/"+s:s,[+r,+o])}}return To}var Mr=Math.PI/180;function tw(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*Mr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*Mr,o=(23.439-36e-8*i)*Mr,a=Math.atan2(Math.cos(o)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(o)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*Mr+t*Mr-a,u=e*Mr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/Mr}function nw(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=ew().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function hg(n=Date.now(),e=nw()){if(e.lat==null){let r=new Date(n),o=r.getHours()+r.getMinutes()/60,a=o>=7&&o<20,l=new Date(n);return l.setHours(a?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:a,next:+l}}let t=r=>tw(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let o=r-s,a=r;for(;a-o>3e4;){let l=(o+a)/2;t(l)===i?o=l:a=l}return{day:i,next:Math.ceil(a)}}return{day:i,next:n+24*36e5}}var ug=(n,e)=>(n&&typeof n=="object"?n[e]||n.en||n.fr||Object.values(n).find(Boolean)||"":String(n||"")).trim();var iw={amp:"&",lt:"<",gt:">",quot:'"',"#39":"'",nbsp:" ",rsquo:"\u2019",lsquo:"\u2018",laquo:"\xAB",raquo:"\xBB"},dg=n=>String(n||"").replace(/<\/(p|li|h3)>|<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&(#?\w+);/g,(e,t)=>iw[t]??e).split(`
`).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean);var sw=["core","artists","specialists","team","people"];function md(n,e){let t=(n.sections||[]).find(s=>s.id===e.section&&s.visible!==!1);if(!t||e.published===!1)return!1;let i=(e.tags||[]).some(s=>sw.includes(s));return t.card==="portrait"?i&&(dg(ug(e.body,"en")).join(" ")+dg(ug(e.body,"fr")).join(" ")).length>40:!0}var ai=["en","fr","ca","es"];var rw={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function yg(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of rw[e]||ai)if(n[t])return n[t];return""}var wr={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",hv_words:"Type something",hv_turn:"Turn your phone to see the whole video",overview:"Overview",ov_n:"projects",nProjects:"projects",nextProject:"Next project",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Settings",hv_slides:"Slideshow",hv_private:"Camera: nothing is recorded.",hv_consent:"This video is just for you. Nothing is recorded, nothing is sent.",hv_camYes:"Turn on the camera",cancel:"Cancel",stop:"Stop",params:"Settings",hv_source:"Source",hv_cell:"Grid",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site",c_write:"Write",c_call:"Call",c_addr:"Address",c_follow:"Follow"},fr:{category:"Cat\xE9gorie",together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",hv_words:"Type something",hv_turn:"Tourne ton t\xE9l\xE9phone pour voir la vid\xE9o en entier",overview:"Vue d\u2019ensemble",ov_n:"r\xE9alisations",nProjects:"projets",nextProject:"Projet suivant",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"Param\xE8tres",hv_slides:"Diaporama",hv_private:"Cam\xE9ra : rien n\u2019est enregistr\xE9.",hv_consent:"Cette vid\xE9o est juste pour toi. Rien n\u2019est enregistr\xE9, rien n\u2019est envoy\xE9.",hv_camYes:"Allumer la cam\xE9ra",cancel:"Annuler",stop:"Arr\xEAter",params:"Param\xE8tres",hv_source:"Source",hv_cell:"Grille",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site",c_write:"\xC9crire",c_call:"Appeler",c_addr:"Adresse",c_follow:"Suivre"},ca:{category:"Categoria",together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",hv_words:"Type something",hv_turn:"Gira el m\xF2bil per veure el v\xEDdeo sencer",overview:"Visi\xF3 de conjunt",ov_n:"projectes",nProjects:"projectes",nextProject:"Projecte seg\xFCent",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Par\xE0metres",hv_slides:"Diapositives",hv_private:"C\xE0mera: no es grava res.",hv_consent:"Aquest v\xEDdeo \xE9s nom\xE9s per a tu. No es grava res, no s\u2019envia res.",hv_camYes:"Enc\xE9n la c\xE0mera",cancel:"Cancel\xB7la",stop:"Atura",params:"Par\xE0metres",hv_source:"Font",hv_cell:"Graella",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web",c_write:"Escriu",c_call:"Truca",c_addr:"Adre\xE7a",c_follow:"Segueix"},es:{category:"Categor\xEDa",together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",hv_words:"Type something",hv_turn:"Gira el m\xF3vil para ver el v\xEDdeo entero",overview:"Vista general",ov_n:"proyectos",nProjects:"proyectos",nextProject:"Proyecto siguiente",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Par\xE1metros",hv_slides:"Diapositivas",hv_private:"C\xE1mara: no se graba nada.",hv_consent:"Este v\xEDdeo es solo para ti. No se graba nada, no se env\xEDa nada.",hv_camYes:"Encender la c\xE1mara",cancel:"Cancelar",stop:"Detener",params:"Par\xE1metros",hv_source:"Fuente",hv_cell:"Cuadr\xEDcula",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web",c_write:"Escribe",c_call:"Llama",c_addr:"Direcci\xF3n",c_follow:"Sigue"}},aw={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Co={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function gd(){return Object.fromEntries(ai.map(n=>[n,""]))}function Gs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:ai.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||gd(),e.sub=e.sub||gd(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.intro&&typeof e.intro=="object"&&Object.entries(e.intro).forEach(([s,r])=>{String(r||"").trim()&&(e.sub[s]=r)}),delete e.intro,e.quotes=e.quotes&&typeof e.quotes=="object"?e.quotes:gd();let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(ai.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(ai.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=aw[s.layout]?s.layout:"carousel",s.card=Co[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(ai.map(o=>[o,s[r]||""]))),ai.forEach(o=>{s[r][o]==null&&(s[r][o]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(ai.map(o=>[o,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(vd):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function yd(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function vg(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function Ro(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function xe(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var ow=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Sr(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!ow.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Er(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var vd=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Ws(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function xd(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function fg(n){try{let e=await xd();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function pg(n,e){let t=await xd();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function mg(n){try{let e=await xd();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Bc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Gs(structuredClone(window.HC_CONTENT));if(window.HC_CONTENT_P&&!this.base){let t=await window.HC_CONTENT_P;if(window.HC_CONTENT_P=null,t)return Gs(t)}let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Gs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Fc=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await fg("demo:content:v6");if(e)return Gs(e);if(window.HC_CONTENT)return Gs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Gs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await mg("demo:file:"+i.path);continue}await pg("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await pg("demo:content:v6",e),"demo"}async reset(){await mg("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await fg("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},gg=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Ao=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],lw=["font","size","lh","weight","italic","ls","upper"],xg=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function cw(n){let e=gg.find(i=>i.id===n);if(e)return e.css;let t=xg(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:gg[0].css}function Yn(n,e){let t=Ao.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...lw,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=cw(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function _g(n){let e=[],t=[],i=[],s=[];for(let r of Ao){if(r.vars||!r.sel)continue;let o=Yn(n,r.id),a=r.id;s.push(`--f-${a}: ${o.css}`,`--w-${a}: ${o.weight||400}`,`--st-${a}: ${o.italic?"italic":"normal"}`,`--tt-${a}: ${o.upper?"uppercase":"none"}`,`--ls-${a}: ${o.ls||0}em`),o.size&&s.push(`--s-${a}: ${o.size}px`,`--lh-${a}: ${o.lh?o.lh:+(o.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of Ao){let o=n&&n.typo&&n.typo[r.id]||{},a=Yn(n,r.id),l=h=>o[h]!==void 0&&o[h]!==""&&o[h]!==null&&o[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${a.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${a.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(a.size*r.clamp[0])}px, ${(a.size/r.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?a.lh:+(r.lh*a.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${a.weight}`),l("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${a.ls}em`),l("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?a.lh:r.lh*a.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function bg(n){let e=new Map;for(let t of Ao){let i=Yn(n,t.id),s=xg(i.font);if(!s)continue;new Set([+(i.weight||400),400,700,...t.id==="body"?[800]:[]]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function _d(n){let e=new Set;for(let t of Ao){let i=Yn(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Mg(n,e,t=!1){let i=Yn(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let a=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=a(l);let c=r.measureText(o).width;c>172&&(l=Math.floor(l*172/c),r.font=a(l));let h=r.measureText(o),u=(h.actualBoundingBoxAscent||l*.7)-(h.actualBoundingBoxDescent||0);if(r.fillText(o,120+((h.actualBoundingBoxLeft??h.width/2)-(h.actualBoundingBoxRight??h.width/2))/2,120+u/2-4),t){let d=r.getImageData(0,0,240,240),p=d.data;for(let g=0;g<p.length;g+=4)p[g]=255-p[g],p[g+1]=255-p[g+1],p[g+2]=255-p[g+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var wg=window.HC_BASE||"",Zc=window.HC_MODE==="demo"?new Fc(wg):new Bc(wg),Ys=window.HC_ASSETS||null,df=location.protocol==="file:",v0=(()=>{let n=document.querySelector("base"),e=n?document.baseURI:new URL("./",location.href).href;if(!df&&(window.HC_ROUTE||{}).pages)if(n)n.href=e;else{let t=document.createElement("base");t.href=e,document.head.prepend(t)}return new URL(e)})(),x0=20261102;window.HC_SITE_VERSION=x0;var Et=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,Mt=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Et&&Et.files&&Et.files[e]?Et.files[e]:Ys&&Ys[e]&&Ys[e].startsWith("data:")?Ys[e]:Zc.url(e)};async function hw(n){if(Ys&&Ys[n]&&!Ys[n].startsWith("data:"))return Ys[n];let e=await fetch(Mt(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var ve=null,fn="en",he=n=>yg(n,fn),_e=n=>(wr[fn]||wr.en)[n],_0=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},er={zoom:2,focus:300},uw=.08,Sg={};function b0(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=Sg[t]}):(e.forEach(t=>{Sg[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Hd=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=yd(ve,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(s=>s.tags)),t=this.section.tags.filter(s=>e.has(s.id)&&s.menu!==!1),i={id:"",label:Object.fromEntries(ai.map(s=>[s,(wr[s]||wr.en).all]))};return this.section.noAll&&t.length?t:[i,...t]}tagOf(e){let t=this.categoryList;return e.tags.find(i=>t.some(s=>s.id===i))||(t[0]?t[0].id:"")}changeCategory(e){let t=this.categoryList;t.some(i=>i.id===e)||(e=t.some(i=>i.id===this.defaultCategory)?this.defaultCategory:t[0]?t[0].id:""),this.category=e,this.list=e?this.all.filter(i=>i.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?he(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Ut[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Hd(this.section.def)}},Ut=[],vt={x:0,y:0,z:0,zoom:er.zoom},zn={x:0,y:0,z:0},ys=0,Ti=[],dw={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function hn(n,e,t,i={}){for(let r of Ti)if(r.obj===n)for(let o in t)delete r.props[o];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ys+(i.delay||0),ease:dw[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return Ti.push(s),s}var Wo=(n,e)=>hn({},n,{},{onComplete:e,ease:"linear"});function Cn(n){for(let e=Ti.length-1;e>=0;e--)Ti[e].obj===n&&Ti.splice(e,1)}function Ba(n){return Ti.some(e=>e.obj===n&&ys>=e.start)}function M0(n,e){if(!e&&ys<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ys-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],o=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(o-r)):r+(o-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function fw(){for(let n of Ti.slice())if(M0(n,!1)){let e=Ti.indexOf(n);e>=0&&Ti.splice(e,1),n.onComplete&&n.onComplete()}}function w0(){Ti.splice(0).forEach(n=>M0(n,!0))}function pw(n,e,t,i,s,r,o){Cn(vt),hn(vt,o,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-vt.x)/2,y:e+500,z:(t-vt.z)/2}}),ff(i,s,r,o)}function ff(n,e,t,i){Cn(zn),hn(zn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function mw(n,e,t,i){Cn(vt),hn(vt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var $o=1,xn=n=>n<=1?1:1-Math.pow(1-1/n,$o),Vi=Math.PI/180,Vd=(n,e,t)=>new U(n,e,-t),$s=(n,e,t)=>[-n,e,t],sn=document.getElementById("stage");sn&&sn.parentNode===document.body&&document.documentElement.insertBefore(sn,document.body);["home","hc-intro"].forEach(n=>{let e=document.getElementById(n);e&&e.parentNode===document.body&&document.documentElement.appendChild(e)});var Rn=new go({canvas:sn,antialias:(window.devicePixelRatio||1)<1.75,powerPreference:"high-performance"});Rn.debug.checkShaderErrors=!1;var pf=new hs,gw=new Bs(-1,1,1,-1,0,1);pf.add(new Ft(new Ni(2,2),new nn({color:16777215,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:id,blendEquation:Ri,blendSrc:rd,blendDst:Cc,blendEquationAlpha:Ri,blendSrcAlpha:Cc,blendDstAlpha:sd})));pf.children[0].frustumCulled=!1;var S0=null,Aa=null;function Qo(){if(Aa===null&&(Aa=_n),Rn.render(ti,Ln),Aa){let n=Rn.autoClear;Rn.autoClear=!1,Rn.render(pf,gw),Rn.autoClear=n}S0=Aa}var bd=0;async function E0(){let n=++bd;if(Ie)try{await Ie.retexture(()=>n===bd)}catch{}if(n!==bd)return;let e=document.documentElement;e.classList.add("neg-switch"),Rf(),Aa=_n;try{Qo()}catch{}requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.remove("neg-switch")))}var qo=Math.min(window.devicePixelRatio||1,2),Eg=Math.min(qo,qo>=2?1.25:1),Cr=qo,Jc=0,Gd=0,T0=0;Rn.setPixelRatio(Cr);function Tg(n,e){Cr=n,Rn.setPixelRatio(Cr),Rn.setSize(Ht,Ot,!1),Jc=Gd=0,T0=e;try{Qo()}catch{}}function yw(n,e){n-T0<1500||(e>30?(Gd=0,++Jc>24&&Cr>Eg&&Tg(Math.max(Eg,Math.round((Cr-.25)*4)/4),n)):e<19&&(Jc=Math.max(0,Jc-1),++Gd>240&&Cr<qo&&Tg(Math.min(qo,Cr+.25),n)))}var Ag=".t.webp",mf=n=>n&&!df&&!vw()&&!/^(https?:|data:|blob:)/.test(n)&&/^media\/.+\.(jpe?g|png|webp)$/i.test(n)&&!n.endsWith(Ag)?n+Ag:n;function vw(){return!!(window.HC_PREVIEW||/[?&]preview\b/.test(location.search))}document.addEventListener("error",n=>{let e=n.target;e&&e.tagName==="IMG"&&e.dataset.full&&!e.dataset.fell&&(e.dataset.fell="1",e.src=e.dataset.full)},!0);var Pr=(n,e="")=>{let t=mf(n);return`<img src="${xe(Mt(t))}"${t!==n?` data-full="${xe(Mt(n))}"`:""} ${e}>`};Rn.setClearColor(16777215,1);var ti=new hs;ti.add(new _c(16777215,14211288,2.2));var A0=new wa(16777215,1.2);A0.position.set(300,800,500);ti.add(A0);var Ln=new on(60,1,1,6e4),C0=new fs({color:oe.lineColor,linewidth:oe.lineThickness}),Wd=new fs({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),R0=new fs({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),Kc=new fs({color:oe.locatorColor,linewidth:1.3}),gf=[C0,Wd,R0,Kc],L0=new Mo;L0.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Mt(n));var Ia=new Map;function Md(n){return Ia.has(n)||Ia.set(n,new Promise((e,t)=>{let i=new Image;i.decoding="async",/^https?:/.test(Mt(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=Mt(n)})),Ia.get(n)}function Yi(n,e=!1){if(!n)return Promise.reject(new Error("no image"));if(df&&!/^(data:|blob:|https?:)/.test(Mt(n)))return Promise.reject(new Error("local"));let t=e?n:mf(n);if(t===n)return Md(n);let i="tn:"+n;return Ia.has(i)||Ia.set(i,Md(t).catch(()=>Md(n))),Ia.get(i)}function yf(n){return n.colorSpace=Zt,n.anisotropy=Math.min(8,Rn.capabilities.getMaxAnisotropy()),n}var $d=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=yf(new _a(n)),t=new Ni(1,1),i=new hs;return[Jn,yn,Xn].forEach(s=>i.add(new Ft(t,new nn({map:e,side:s})))),i.add(new Ft(t,new nn({color:1118481}))),i.add(new yo(new va({map:e,transparent:!0}))),i})(),Ht=0,Ot=0,_n=!1,rh=()=>_n,Ir=0,Cg=0,Xo=()=>ve.settings.negative==="auto";function xh(){if(!Xo())return Ir=0,!!ve.settings.negative;let n=hg();return Ir=n.next,!n.day}function vf(){if(Et||ve.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!Xo()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function P0(n){n!==_n&&(_n=n,E0())}function xf(){if(clearTimeout(Cg),!Xo())return;Cg=setTimeout(()=>{if(Date.now()>=Ir-1e3){let e=xh(),t=vf();P0(t??e)}xf()},Math.min(Math.max(Ir-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&Ir&&Date.now()>=Ir){let n=xh(),e=vf();P0(e??n),xf()}});var I0=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},oi=()=>{let n=ve.settings.accent||"#ffcc00";return rh()?I0(n):n},_h='Georgia, Gelasio, "Times New Roman", serif',en='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',N0=400,D0=_h,U0=!1,O0=1,vi=n=>`${N0} ${n}px ${_h}`,Gi=n=>`${U0?"italic ":""}400 ${Math.round(n*O0*10)/10}px ${D0}`,_f=1,Qe=n=>Math.round(n*_f),xw=700,bh=()=>{let n=Ht||window.innerWidth,e=Ot||window.innerHeight;return n<xw||Math.min(n,e)<500},xs=bh;function sr(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...ve?_d(ve.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Rg=0,k0=[];function _w(){wt&&(Tf(),Ef()),clearTimeout(Rg),Rg=setTimeout(async()=>{try{await Promise.all(_d(ve.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}ve.settings.logo||Jd(),Ie&&!Ie.loading&&Ie.retexture()},150)}function B0(){let n=ve.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=_g(n);e.textContent!==t&&(e.textContent=t);let i=bg(n);document.querySelectorAll("link[data-hc-font]").forEach(o=>{i.includes(o.href)||o.remove()}),i.forEach(o=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(o)}"]`)){let a=document.createElement("link");a.rel="stylesheet",a.href=o,a.dataset.hcFont="",k0.push(new Promise(l=>{a.onload=()=>{l(),_w()},a.onerror=l})),document.head.appendChild(a)}});let s=Yn(n,"card"),r=Yn(n,"subtitle");N0=s.weight||400,D0=r.css,U0=!!r.italic,O0=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,_h=s.css,en=Yn(n,"cardsm").css,_f=Math.max(.5,Math.min(2,(+Yn(n,"card").scale||100)/100))}function Kt(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Hn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),yf(new _a(s))}function Wi(n,e,t,i=2){return Hn(n,e,s=>{let r=_n;_n=!1;try{t(s)}finally{_n=r}if(!r)return;let o=s.canvas;try{let a=s.getImageData(0,0,o.width,o.height),l=a.data;for(let c=0;c<l.length;c+=4)l[c]=255-l[c],l[c+1]=255-l[c+1],l[c+2]=255-l[c+2];s.putImageData(a,0,0)}catch{s.save(),s.setTransform(1,0,0,1,0,0),s.globalCompositeOperation="difference",s.fillStyle="#fff",s.fillRect(0,0,o.width,o.height),s.restore()}},i)}function $i(n,e,t,i,s,r){let o=Math.max(s/e.naturalWidth,r/e.naturalHeight),a=s/o,l=r/o;n.drawImage(e,(e.naturalWidth-a)/2,(e.naturalHeight-l)/2,a,l,t,i,s,r),rh()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Na=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function F0(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function Fa(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var el=n=>Ut.some(e=>e.def.id===n.section),bw=(n,e)=>Ut.findIndex(t=>t.def.id===n.section)-Ut.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),ah=n=>ve.posts.filter(e=>e.published&&e!==n&&el(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(bw),Yo=n=>{let e=Ro(ve,n).filter(el);return e.length?e:ah(n)},Mw=["core","artists","specialists","team","people"],ko=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.section==="studio"||(n.tags||[]).includes("partners"))&&(n.tags||[]).length>0&&!(n.tags||[]).some(e=>Mw.includes(e)),z0=n=>vg(ve,n).filter(el),Zs=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&Dr(e.src)==="image")||{}).src||"",Lg=new Map,qd=n=>ah(n).filter(Zs);async function Mh(n,e=Yo(n)){let t=e.filter(Zs);if(!t.length)return null;let i=t.find(r=>r.id===Lg.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,o)=>r[0]-o[0]).map(r=>r[1]);for(let r of s){let o=await Yi(Zs(r)).catch(()=>null);if(o)return Lg.set(n.id,r.id),{im:o,project:r}}return null}function wh(n,e,t,i,s){$i(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function H0(n,e){let t=he(n.title).trim(),i=he(n.subtitle).trim();if(!t&&!i)return null;let s=xs(),r=s?15:Math.max(9,Math.min(13.5,e*.053)),o=s?11:Math.max(7.5,r*.74),a=Math.round(r*(s?.55:.75)),l=e-2*a,c=document.createElement("canvas").getContext("2d"),h=(f,M)=>{c.font=M;let _=f;if(c.measureText(_).width<=l)return[_];for(;_.length>4&&c.measureText(_+"\u2026").width>l;)_=_.slice(0,-1);return[_.trim()+"\u2026"]};c.font=vi(r);let u=s?t?h(t,vi(r)):[]:t?Kt(c,t,l).slice(0,2):[];c.font=Gi(o);let d=s?t?[]:h(i,Gi(o)):i?Kt(c,i,l).slice(0,2):[],p=Math.round(r*1.2),g=Math.round(o*1.25),v=Math.ceil(a+u.length*p+(d.length?3+d.length*g:0)+a-2);return{tex:Wi(e,v,f=>{f.fillStyle="rgba(0,0,0,.62)",f.fillRect(0,0,e,v),f.textBaseline="top";let M=a;f.fillStyle="#fff",f.font=vi(r),u.forEach(_=>{f.fillText(_,a,M),M+=p}),M+=3,f.font=Gi(o),d.forEach(_=>{f.fillText(_,a,M),M+=g})},3),bh:v,w:e}}async function ww(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Yi(n.thumbBack).catch(()=>null):null,r=i?null:await Mh(n);await sr();let o=(c,h=!1)=>{if(i){$i(c,i,0,0,e,t);return}r?wh(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=xs(),d=u?14:16,p=u?[Qe(31),Qe(34),2]:[Qe(24),28,3],g=u?[Qe(20),Qe(23),1]:[Qe(13),16,2],v=u?Qe(15):10,m=u?Qe(13):9,f=u?26:20;c.fillStyle=oi(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=vi(p[0]);let M=Kt(c,he(n.title),e-2*d).slice(0,p[2]),_=u?22:30;M.forEach((L,T)=>c.fillText(L,d,_+T*p[1])),c.font=Gi(g[0]),Kt(c,he(n.subtitle),e-2*d).slice(0,u&&M.length<2?2:g[2]).forEach((L,T)=>c.fillText(L,d,_+8+M.length*p[1]+T*g[1]));let I=r?Wg(r.project,r.project.media[0]&&r.project.media[0].credit):Wg(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${v}px ${en}`,c.fillText([n.date,he(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(I?f+v+6:v+12)),I){c.font=`${m}px ${en}`;let L=I;for(;c.measureText(L).width>e-2*d&&L.length>4;)L=L.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(L,d,t-f/2)}c.globalAlpha=1},a=(r?Wi:Hn)(e,t,o,2),l=s?Hn(e,t,c=>$i(c,s,0,0,e,t),2):r?Wi(e,t,Fa(e,c=>o(c,!0)),2):Hn(e,t,F0(o),1.5);return[a,l,i?H0(n,e):null]}async function Sw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Yi(n.thumbBack).catch(()=>null):null,r=i||ko(n)?null:await Mh(n,qd(n));await sr();let o=(l,c=!1)=>{if(ko(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=xs()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${en}`;let v=Kt(l,he(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((m,f)=>l.fillText(m,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),rh()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,p=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-p)/2,d,p),rh()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){$i(l,i,0,0,e,t);return}r?wh(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=Gi(Math.round(t*.42*_f)),l.textAlign="center",l.textBaseline="middle",l.fillText(Na(he(n.title)),e/2,t*.45),l.fillStyle=oi(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},a=s?Hn(e,t,l=>$i(l,s,0,0,e,t),3):r?Wi(e,t,Fa(e,l=>o(l,!0)),2):Hn(e,t,F0(o),2);return[(r?Wi:Hn)(e,t,o,3),a,i||r||ko(n)?H0(n,e):null]}async function Ew(n,e,t){let i=await Mh(n);if(i)return Tw(n,e,t,i);let s=n.thumb?await Yi(n.thumb).catch(()=>null):null;await sr();let r=he(n.title).trim(),o=xs(),a=Qe(o?30:21),l=o?Qe(32):22,c=o?2:3,h=s?72:18,u=e-h-14,d=Hn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?$i(g,s,13,12.75,53,53):(g.fillStyle=oi(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=vi(a),g.textBaseline="top",Kt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?12:20)+m*l))}),p=Hn(e,t,Fa(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=vi(a),g.textBaseline="top",Kt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?9:17)+m*l))}));return[d,p]}async function Tw(n,e,t,i){await sr();let s=he(n.title).trim(),r=e-32,o=xs(),a=Qe(o?30:21),l=o?Qe(32):22,c=h=>u=>{wh(u,i,e,t,h?.2:o?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=oi(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=vi(a),u.textBaseline="top",Kt(u,s,r).slice(0,o?2:3).forEach((d,p)=>u.fillText(d,18,20+p*l)),u.globalAlpha=1};return[Wi(e,t,c(!1),2),Wi(e,t,Fa(e,c(!0)),2)]}async function Aw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null;await sr();let r=Hn(e,t,o=>{if(i){o.fillStyle="#fff",o.fillRect(0,0,e,t),$i(o,i,0,0,e,t);return}o.fillStyle="#fff",o.fillRect(0,0,e,t),o.fillStyle="#111",o.beginPath(),o.arc(e/2,t/2-8,34,0,Math.PI*2),o.fill(),o.fillStyle=oi(),o.beginPath(),o.arc(e/2,t/2-8,9,0,Math.PI*2),o.fill(),o.fillStyle="#333",o.font=`${Qe(12)}px ${_h}`,o.textAlign="center",o.textBaseline="top",o.fillText(he(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var Cw={image:ww,portrait:Sw,text:Ew,place:Aw};async function Rw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=i?{im:i}:await Mh(n);await sr();let r=he(n.title).trim(),o=(he(n.subtitle).trim()||Er(he(n.body)).join(" ")).replace(/\s+/g," ").trim(),a=t<110,l=xs(),c=s&&!l?Math.round(a?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,p,g,v]=l?a?[28,31,0,1]:[36,40,0,1]:a?[15,18,9.5,12]:[17,20,10.5,13.5],m=(L,T)=>{L.globalAlpha=T,L.textBaseline="top";let D=e-h-12;L.fillStyle=oi(),L.fillRect(h,a?9:13,14,2),L.fillStyle="#fff",L.font=vi(Qe(d));let F=a?16:22;Kt(L,r,D).slice(0,l?3:2).forEach(w=>{L.fillText(w,h,F),F+=Qe(p)}),L.globalAlpha=1},f=L=>{L.fillStyle="#111",L.fillRect(0,0,e,t),s&&($i(L,s.im,0,0,e,t),L.fillStyle="rgba(0,0,0,.18)",L.fillRect(0,0,e,t)),m(L,.38)},M=L=>{let T=L.createLinearGradient(0,0,0,t);T.addColorStop(0,"rgba(0,0,0,.7)"),T.addColorStop(1,"rgba(0,0,0,.3)"),L.fillStyle=T,L.fillRect(0,0,e,t),m(L,1)},_=L=>{L.fillStyle="#111",L.fillRect(0,0,e,t),s&&($i(L,s.im,0,0,e,t),L.fillStyle="rgba(0,0,0,.22)",L.fillRect(0,0,e,t));let T=L.createLinearGradient(0,t*.3,0,t);T.addColorStop(0,"rgba(0,0,0,0)"),T.addColorStop(1,"rgba(0,0,0,.82)"),L.fillStyle=T,L.fillRect(0,t*.3,e,t*.7);let D=Math.round(e*.07),F=e-2*D,w=Yo(n).length;L.textBaseline="top",L.fillStyle="#fff",w&&(L.font=`600 ${Qe(11)}px ${en}`,L.fillText(`${w} ${_e("nProjects")}`.toUpperCase(),D,D));let S=he(n.subtitle).trim();L.font=`${Qe(11.5)}px ${en}`;let B=S?Kt(L,S,F).slice(0,2):[],ne=t-D-B.length*Qe(14);B.forEach((k,G)=>L.fillText(k,D,ne+G*Qe(14))),L.font=Gi(Qe(26));let le=Kt(L,r,F).slice(0,2);ne-=(B.length?Qe(6):0)+le.length*Qe(25),le.forEach((k,G)=>L.fillText(k,D,ne+G*Qe(25)))};return[(s?Wi:Hn)(e,t,(L=>T=>{if(l&&!L){_(T);return}T.fillStyle="#111",T.fillRect(0,0,e,t),s&&l&&!L&&wh(T,s,e,t,.6),s&&!l&&$i(T,s.im,e-c,0,c,t),T.textBaseline="top",T.fillStyle=oi(),T.fillRect(h,a?9:13,14,2),T.fillStyle="#fff",T.font=vi(Qe(d));let D=Kt(T,r,u).slice(0,l?3:2),F=a?16:22;D.forEach(B=>{T.fillText(B,h,F),F+=Qe(p)}),F+=a?2:5,T.font=Gi(Qe(g));let w=l?0:Math.max(0,Math.floor((t-F-8)/Qe(v))),S=Kt(T,o,u);if(S.length>w&&(S=S.slice(0,w),w)){let B=S[w-1];for(;B&&T.measureText(B+"\u2026").width>u;)B=B.replace(/\s*\S+$/,"");S[w-1]=B+"\u2026"}S.forEach(B=>{T.fillText(B,h,F),F+=Qe(v)}),T.globalAlpha=1})(!1),2),(s?Wi:Hn)(e,t,Fa(e,f),2),null,(s?Wi:Hn)(e,t,Fa(e,M),2)]}function zc(n,e){return sr().then(()=>e==="place"?Hn(380,300,t=>{let r=ay(Sr(he(n.body))),o=(c,h)=>{t.font=h;let u=c;for(;u&&t.measureText(u).width>320;)u=u.slice(0,-2).trim()+"\u2026";return u};t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle=oi(),t.fillRect(30,24,16,2);let a=he(n.title).trim();a&&!/[.!?]$/.test(a)&&(a+="."),t.fillStyle="#fff",t.font=vi(Qe(40));let l=36;if(Kt(t,a,320).slice(0,1).forEach(c=>{t.fillText(c,30,l),l+=Qe(44)}),t.font=Gi(Qe(17)),Kt(t,he(n.subtitle),320).slice(0,2).forEach(c=>{t.fillText(c,30,l),l+=Qe(21)}),l=Math.max(l+16,150),!r.ok){t.font=`13px ${en}`,Er(he(n.body)).slice(0,5).forEach(c=>{t.fillText(o(c,`13px ${en}`),30,l),l+=19});return}r.mail[0]&&(t.fillStyle=oi(),t.fillText(o(r.mail[0],`600 16px ${en}`),30,l),l+=24),t.fillStyle="#fff",r.tel[0]&&(t.fillText(o(r.tel[0],`15px ${en}`),30,l),l+=26),t.fillStyle="rgba(255,255,255,.62)",(r.addr[0]||"").split(/\s+[.·•|]\s+/).slice(0,3).forEach(c=>{l<282&&(t.fillText(o(c,`12.5px ${en}`),30,l),l+=17)})},1.5):xs()?Hn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=vi(Qe(25));let i=Kt(t,he(n.title)+".",172).slice(0,2);i.forEach((d,p)=>t.fillText(d,14,12+p*Qe(27))),t.font=`${Qe(13)}px ${en}`;let s=ah(n).map(d=>he(d.title).trim()).filter(Boolean),r=s.length?Kt(t,s.join("  \xB7  "),172).slice(0,2):[],o=he(n.place)?168:188,a=o-r.length*16-16,l=18+i.length*Qe(27);t.font=Gi(Qe(17));let c=(r.length?a-6:o)-Qe(20),h=Kt(t,he(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=Qe(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,p)=>t.fillText(d,14,18+i.length*Qe(27)+p*Qe(20))),r.length&&(t.font=`600 ${Qe(11)}px ${en}`,t.fillText(_e("together").toUpperCase(),14,a),t.font=`${Qe(13)}px ${en}`,r.forEach((d,p)=>t.fillText(d,14,a+16+p*16))),he(n.place)&&(t.font=`600 ${Qe(13)}px ${en}`,t.fillText(he(n.place).toUpperCase(),14,176))},2.5):Hn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=vi(Qe(20));let i=Kt(t,he(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${en}`;let r=ah(n).map(u=>he(u.title).trim()).filter(Boolean),o=r.length?Kt(t,r.join("  \xB7  "),166).slice(0,3):[],a=(he(n.place)?174:188)-o.length*13-13;t.font=Gi(Qe(15));let l=(o.length?a-4:168)-18,c=[];he(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>Kt(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${en}`,Er(he(n.body)).join(" ").split(/\s+/).length>1&&Kt(t,Er(he(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((o.length?a-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),o.length&&(t.font=`600 8px ${en}`,t.fillText(_e("together").toUpperCase(),19,a),t.font=`10px ${en}`,o.forEach((u,d)=>t.fillText(u,19,a+13+d*13))),he(n.place)&&(t.font=`600 11px ${en}`,t.fillText(he(n.place).toUpperCase(),19,180))}))}function Lw(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${en}`;let o=Math.ceil(r.measureText(n).width)+2*7,a=30;s.width=o*2,s.height=a*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,o,a),r.font=`${e?"bold ":""}20px ${en}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,a/2+1);let l=new yo(new va({map:yf(new _a(s)),transparent:!0,depthTest:!1}));l.center.set(.5,0);let c=20;return l.scale.set(c*o/a,c,1),l.renderOrder=5,l}var zi=document.createElement("div");zi.id="net-tip";zi.className="ui";zi.hidden=!0;document.body.appendChild(zi);function V0(n,e,t){zi.innerHTML=`<b>${xe(n.city||"")}</b>${n.titles.map(s=>`<span>${xe(s)}</span>`).join("")}`,zi.hidden=!1;let i=zi.getBoundingClientRect();zi.style.left=Math.min(e+14,Ht-i.width-10)+"px",zi.style.top=Math.max(10,t-i.height-12)+"px"}function Sh(){zi.hidden=!0}function Pw(n){n.updateMatrixWorld(!0);let e=[],t=new U,i=n.matrixWorld.clone().invert();if(n.traverse(h=>{if(!h.isMesh||!h.geometry||!h.geometry.attributes.position)return;let u=h.geometry;u.computeBoundingBox();let d=u.boundingBox.getSize(new U);if(Math.min(d.x,d.y,d.z)<1e-6*Math.max(d.x,d.y,d.z,1e-9))return;let p=u.attributes.position,g=u.index,v=g?g.count:p.count,m=new Map,f=Math.max(d.x,d.y,d.z)/2e3;for(let _=0;_<v;_++){let I=g?g.getX(_):_,L=Math.round(p.getX(I)/f)+","+Math.round(p.getY(I)/f)+","+Math.round(p.getZ(I)/f),T=m.get(L);T||m.set(L,T={j:I,n:0}),T.n++}let M=new ot().multiplyMatrices(i,h.matrixWorld);m.forEach(_=>{t.fromBufferAttribute(p,_.j).applyMatrix4(M),e.push({p:t.clone(),n:_.n})})}),!e.length)return null;let s=Math.max(...e.map(h=>h.n));if(s<8)return null;let r=new vn;e.forEach(h=>r.expandByPoint(h.p));let o=r.getSize(new U).length()*.09,a=[];e.filter(h=>h.n>=s*.8).forEach(h=>{let u=a.find(d=>d.c.distanceTo(h.p)<o);u||a.push(u={s:new U,w:0,c:h.p.clone()}),u.s.addScaledVector(h.p,h.n),u.w+=h.n,u.c.copy(u.s).divideScalar(u.w)});let l=Math.max(...a.map(h=>h.w)),c=a.filter(h=>h.w>=l*.3).map(h=>h.c);return c.length?c:null}var Xd=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Sn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=ve.models.find(h=>h.id===this.def.model)||ve.models[0];if(!t)return;let i=await hw(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),o=e.parse(i,s).scene,a=new Sn;a.add(o),o.traverse(h=>{if(!h.isMesh)return;let u=d=>{let p=d.map||d.emissiveMap||null;return p?new nn({map:p}):t.untextured==="white"?new vr({color:15921906}):t.untextured==="black"?new vr({color:2236962}):new nn({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){a.updateMatrixWorld(!0);let h=new vn().setFromObject(a),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;a.scale.setScalar(d),a.updateMatrixWorld(!0);let p=new vn().setFromObject(a),g=p.getCenter(new U);a.position.set(-g.x,-p.min.y,-g.z)}else{o.scale.setScalar(100),a.updateMatrixWorld(!0);let h=new vn().setFromObject(a);h.max.y-h.min.y>oe.object3DMaxHeight&&a.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),a.scale.multiplyScalar(l)}let c=new Sn;c.rotation.y=(t.rotationY||0)*Vi,c.add(a),this.container.add(c);try{this.anchors=Pw(this.container)}catch{this.anchors=null}}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Vd(this.p.x,0,this.p.z))}};function G0(n,e){let t=new Vs;t.setPositions(n);let i=new Ea(t,e);return i.computeLineDistances(),i}var Yd=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Sn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Ni(this.width,this.height);if(this.setBand(i),s){let h=new Ft(r,new nn({map:s,side:yn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let o=new Ft(r,new nn({map:e,side:Jn})),a=new Ft(r,new nn({map:t,side:yn}));o.userData={post:this,face:"front"},a.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=G0([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Wd),this.group.add(o,a,this.frame),this.meshes.push(o,a),this.ready=!0}setPosition(e,t,i,s,r=0,o=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:o})}apply(){let e=this.thumb,t=this.group;t.position.set(...$s(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Vi,t.rotation.x=-e.rotX*Vi,t.rotation.z=e.rotZ*Vi,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&hn(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=R0,Wo(.8,()=>{this.frame&&(this.frame.material=Wd)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),hn(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){Cn(this.thumb);let i=_s(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;return hn(this.thumb,t,{x:s.x+o*e/l,y:r.y,z:s.z+a*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:o/l,z:a/l}}}moveBack(e=0){Cn(this.thumb);let t=this.p2;hn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){hn(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>hn(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),Cn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Ft(new Ni(t,s),new nn({map:e.tex,transparent:!0,depthWrite:!1,side:Jn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&hn(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,o=r+t*e.bh;i.setY(0,o),i.setY(1,o),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),Cn(this.thumb),this.bhi&&Cn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!gf.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function wd(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Vi;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function Sd(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var Ed=(n,e,t,i,s="y")=>n.postViews.forEach((r,o)=>{if(!r.ready||Ba(r.thumb))return;let a=r.thumb,l=Math.pow(-1,o)*e*(Math.random()*2+1);a[s]-=(a[s]-r.p2[s]+l)*xn(2*i),s==="y"&&(a.rotX-=(a.rotX-r.p2.rotX-t)*xn(2*i))}),oh={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Vi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>wd(n,e),move:(n,e,t,i)=>Ed(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Sd(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>Ed(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,o=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},a=t,l;t+1>s?(a=2*Math.round(i/2)-t-1,l=Math.pow(-1,a)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(o(a)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(o(h)-Math.PI/2)*120,d=t+1>s?-1:1,p=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(o(a)),y:u*Math.sin(o(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+p,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{wd(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*xn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*xn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Ws(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Eh(n.def);return{x:i[0]+s[0],y:.8*(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Sd(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Ba(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*xn(2*oe.cameraEaseSpeed);let o=n.infos[i];o&&(o.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Vi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>wd(n,e),move:(n,e,t,i)=>Ed(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,o=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*o+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Sd(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Ba(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*xn(2*oe.cameraEaseSpeed)})}}},Iw=["fan","arc","map"],Pg=n=>bh()&&Iw.includes(n.layout),bf=()=>er.zoom*er.focus*Math.min(1,Ht/900);function W0(){let n=r=>{let o=document.getElementById(r);if(!o||o.hidden)return null;let a=o.getBoundingClientRect();return a.width&&a.height?a:null},t={l:12,t:12,r:Ht-12,b:Ot-12},i=["slogan","logo","reel-btn","lang-sq","about-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Ot>=Ht?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs"),n("reel-btn"),n("lang-sq"),n("about-btn")].filter(Boolean).forEach(r=>{r.left<Ht/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Ht/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Ht-12),t.b-t.t<120&&(t.t=12,t.b=Ot-12),t}function Ig(n){let e=W0(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,o=n.h*n.k+oe.planeFrameDistance,a=s?1.5*r+102.5:r,l=s?Math.max(o,130):o,c=Math.round(Math.min(a,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let v=Math.ceil(u/g),m=g*a+(g-1)*c,f=v*l+(v-1)*c,M=Math.min(t/m,i/f);(!h||M>h.sc+1e-9)&&(h={cols:g,rows:v,gw:m,gh:f,sc:M})}let d=n.container.position.y-n.section.container.position.y,p=s?140:40;return{...h,sc:h.sc*.94,uw:a,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Ht/2,fy:(e.t+e.b)/2-Ot/2,zg:200,gy:p+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var Nw=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},Td=2*Math.PI,Mf=n=>n+(((Math.PI-n)%Td+Td+Math.PI)%Td-Math.PI);function Ng(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd&&n.gridLines!==!1?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>Nw(e,i),focus(e,t){let i=e.postViews[t];if(!i||(H.selected=t,H.degreeCamera=Mf(H.degreeCamera),H.cameraY=za(),!i.ready))return;i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70);let s=n.orig||n;s===oh.fan?i.turnAround("x",720):s===oh.arc&&i.turnAround("y",360)},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}function Dw(n,e){let t=Object.create(n),i=[],s=new Map,r=()=>{let o=e.container.position.y-e.section.container.position.y;return e.section.anchors.map(a=>[-a.x,a.y-o,a.z])};return t.orig=n,t.gridLines=!1,t.addedLines=!n.lineEnd,t.lineStart=n.lineStart||((o,a)=>[a.x,a.y-o.height/2,a.z]),t.lineEnd=function(o,a,l){if(i[l]==null){let c=r(),h=[0,1,2].map(v=>c.reduce((m,f)=>m+f[v],0)/c.length),u=v=>{let m=[v[0]-h[0],v[1]-h[1],v[2]-h[2]],f=Math.hypot(...m)||1;return m.map(M=>M/f)},d=u([o.x,o.y,o.z]),p=c.map((v,m)=>{let f=u(v);return[m,f[0]*d[0]+f[1]*d[1]+f[2]*d[2]]}).sort((v,m)=>m[1]-v[1]),g=p.find(([v,m])=>!s.has(v)&&m>p[0][1]-.6);i[l]=(g||p[0])[0],s.set(i[l],l)}return r()[i[l]]},t}var Dg=new U,Ug=new U,jd=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=oh[this.def.layout]||oh.carousel,e.anchors&&(this.def.layout==="carousel"||this.def.layout==="arc"&&this.def.skills)&&(this.base=this.L=Dw(this.base,this)),this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?Rw:Cw[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?Co.text.size:Co.image.size:Co[this.card].size,this.k=Hw(this.def),this.container=new Sn,this.container.position.copy(e.container.position),ti.add(this.container),this.postViews=this.posts.map((t,i)=>new Yd(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.trail=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),Pg(this.def)&&(this.grid=Ig(this),this.L=this.gridL=Ng(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Ut.map(f=>f.def.id)),t=new Map,i=(f,M,_)=>{if(!vd(f))return;let I=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),L=t.get(I);L||t.set(I,L={loc:f,city:f.city||"",titles:[],base:!1}),M&&!L.titles.includes(M)&&L.titles.push(M),_&&(L.base=!0)};if(yd(ve,this.def.id).forEach(f=>i(f.location,he(f.title),!0)),ve.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(M=>i(M,he(f.title)))}),!t.size)return;Kc.color.set(oi());let s=50,r=new Sn,o=[...t.values()],a=o.filter(f=>f.base),l=new pc(1,14,10),c={on:new nn({color:oi()}),base:new nn({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:ys+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},o.forEach(f=>{f.xz=Ws(f.loc)}),o.forEach(f=>{f.from=f.base?null:a.length?a.map(M=>[M,Math.hypot(Ws(M.loc)[0]-f.xz[0],Ws(M.loc)[1]-f.xz[1])]).sort((M,_)=>M[1]-_[1])[0][0]:null,f.d=f.from?Math.hypot(Ws(f.from.loc)[0]-f.xz[0],Ws(f.from.loc)[1]-f.xz[1]):0}),o.sort((f,M)=>M.base-f.base||f.d-M.d);let h=70,u=null,d=-1;o.forEach(f=>{let M=o.filter(_=>Math.hypot(_.xz[0]-f.xz[0],_.xz[1]-f.xz[1])<h);M.length>d&&(d=M.length,u=M)});let p=u.reduce((f,M)=>f+M.xz[0],0)/u.length,g=u.reduce((f,M)=>f+M.xz[1],0)/u.length,v=new Qt;v.position.set(...$s(p,s,g)),r.add(v),this.net.focus=v;let m=[];o.forEach((f,M)=>{let[_,I]=f.xz,L=f.base?0:.15+M*.07,T=new Ft(l,f.base?c.base:c.on);T.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),T.position.set(...$s(_,s,I)),r.add(T),T.userData={netNode:f},this.net.hits.push(T);let D=null,F=0;if(f.from){let[B,ne]=Ws(f.from.loc),le=s+18+f.d*.32,k=2*le-s,G=(B+_)/2,z=(ne+I)/2;F=Math.max(12,Math.min(48,Math.round(f.d/6)));let ie=J=>{let j=1-J;return $s(j*j*B+2*j*J*G+J*J*_,j*j*s+2*j*J*k+J*J*s,j*j*ne+2*j*J*z+J*J*I)},Y=[];for(let J=0;J<F;J++)Y.push(...ie(J/F),...ie((J+1)/F));let $=new Vs;$.setPositions(Y),D=new Ea($,Kc),D.computeLineDistances(),$.instanceCount=0,r.add(D)}let w=null,S=1/0;if(f.city){let B=Lw(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),ne=B.scale.x;for(let le of m){let k=Math.max(Math.abs(le[0]-_)/((le[3]+ne)/2+6),Math.abs(le[1]-I)/24);k<le[2]&&(S=Math.min(S,k))}S>.06?(w=B,w.position.set(...$s(_,s+9,I)),r.add(w),m.push([_,I,S,ne])):(B.material.map.dispose(),B.material.dispose())}this.net.items.push({dot:T,arc:D,segs:F,label:w,thr:S,delay:L,base:f.base,ds:T.scale.x,ls:w?w.scale.clone():null,x:_,z:I})}),this.container.add(r)}async openPosts(){this.loading=!0,this.posts.forEach(e=>[e.thumb,e.thumbBack].forEach(t=>{t&&Yi(t).catch(()=>{})}));for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=ys+uw;for(;ys<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,o,a=()=>{--o<=0&&(this.following.delete(e),this.trail.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(o=2,hn(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:a}),hn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:a})):(o=1,hn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:a})),e.apply(),this.container.add(e.group),i.lineEnd&&((i.addedLines?this.trail:this.following).add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...$s(...i),...$s(...s)],o=this.lines[t];o?(o.geometry.setPositions(r),o.visible=!0):(o=this.lines[t]=G0(r,C0),this.container.add(o))}async openInfo(e,t,i){let s=await zc(this.posts[t],"place");if(!this.alive)return;let r=new Ft(new Ni(165,130),new nn({map:s,side:Xn}));r.userData={post:e,face:"front"},r.visible=!1;let o={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=o,e.meshes.push(r),this.container.add(r),hn(o.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Wo(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Ft(new Ni(90,90),new nn({side:Xn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await zc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),Wo(oe.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,Cn(i),hn(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(Cn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Pg(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?Ig(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=Ng(this.base)):this.base,this.L.lineEnd||this.lines.forEach(l=>{l&&(l.visible=!1)}),r)return!0;let o=oe.tween*1.2,a=H.postOpen&&Nh()==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===a)return;let u=this.following.has(l);Cn(l.thumb),this.following.add(l),hn(l.thumb,o,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(Cn(d.p),hn(d.p,o,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=nl(),r=bf(),o=2*e.width+3,a=Math.max(90,r*Math.max(o/(i.aw*.92),e.height/(i.ah*.85))),l=_s()+er.focus,c=a/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;Cn(e.thumb),hn(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-a,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;Cn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/Vi)%360+360)%360,t=r=>{let o=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(o-e),360-Math.abs(o-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,o)=>{if(!r.ready)return;let a=t(r);a<s-.5&&(s=a,i=o)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/ws),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*xn(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(ys-this.net.start-s.delay)/.9)),o=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(o*s.segs));let a=s.base||r>=1;s.dot.visible=a,s.label&&(s.label.visible=a&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.trail.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...$s(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Vi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Dg.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Ug.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Dg).add(Ug)}}async retexture(e=()=>!0){let t=(o,a)=>{let l=o.material.map;return o.material.map=a,o.material.needsUpdate=!0,l},i=[],s=()=>i.forEach(o=>(o.all||[]).forEach(a=>a&&a.dispose()));for(let o=0;o<this.n;o++){let a=this.postViews[o];if(!a.ready)continue;let l;try{l=await this.tex(this.posts[o],this.w,this.h)}catch{continue}let c=this.infos[o],h=null;if(c)try{h=await zc(this.posts[o],"place")}catch{}if(i.push({i:o,pv2:a,tex:l,inf:c,it:h,all:[l[0],l[1],l[2]&&l[2].tex,l[3],h]}),!this.alive||!e())return s(),!1}let r=null;if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen)try{r=await zc(this.posts[H.selected],"person")}catch{}if(!this.alive||!e())return s(),r&&r.dispose(),!1;if(this.net&&(Kc.color.set(oi()),this.net.mats.on.color.set(oi())),i.forEach(({pv2:o,tex:a,inf:l,it:c})=>{let h=o.band?o.band.k:0;if(o.setBand(a[2]||null),o.band&&h&&(o.band.k=h,o.hover(Ca===o)),new Set([t(o.meshes[0],a[0]),t(o.meshes[1],a[1])]).forEach(u=>u&&u.dispose()),o.bhi&&a[3]){let u=t(o.bhi.mesh,a[3]);u&&u.dispose()}else a[3]&&a[3].dispose();if(l&&c){let u=t(l.mesh,c);u&&u.dispose()}}),r&&this.focusInfo){let o=t(this.focusInfo.mesh,r);o&&o.dispose()}return!0}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(Cn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Sh(),ti.remove(this.container)}},Tr=[],Ie=null,Ar=oe.cameraEaseSpeed,ji=!1,jn=!1,Js=0,Ks=0,Qc=0,eh=0,Ss=!1,bn=!1,Es=()=>Tr[H.currentSection];function Uw(){let n=oe.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function Ow(){let n=oe.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var kw={map:58},Eh=(n=(Es()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||kw[n.layout]||100)/100)),li=()=>Ie&&Ie.L.grid&&Ie.grid&&Ie.section===Es()?Ie:null,Bw=n=>bf()/n.sc*Math.min(1,oe.cameraDistanceProportion/ws);function Th(n){let e=n.grid,t=Bw(e),i=t/bf();return{d:Math.max(20,t-er.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var _s=()=>{let n=li();return n?Th(n).d:oe.cameraDistance*Eh()},Ah=()=>{let n=li();return n?Th(n).ty:oe.cameraTargetHeight*(((Es()||{}).def||{}).layout==="map"?Eh()*.62:1)},Og=()=>{let n=li();return n?Th(n).ty:oe.cameraHeight*(((Es()||{}).def||{}).layout==="map"?Eh()*1.6:1)},Hc=new U;function Fw(){return!nr()||li()||oe.cameraDistanceProportion>=ws?0:Math.min(1,(1-oe.cameraDistanceProportion/ws)*1.25)}function zw(){let n=Ie&&Ie.net&&Ie.net.focus;return n?(n.getWorldPosition(Hc),{x:Hc.x,y:Hc.y,z:-Hc.z}):null}function tl(){let n=Es(),e=Fw(),t=e?zw():null,i=Ah(),s=li();return s?{x:n.p.x-Th(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var za=()=>{if(!nr()||li())return Og();let n=Math.min(1,oe.cameraDistanceProportion/ws);return tl().ty+(Og()-Ah())*Math.pow(n,.55)},Hw=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),nl=()=>{let n=tl();return{d:_s(),x:n.x,z:n.z,ty:n.ty}},ei=null;function $0(n){if(!n||!Ie||!Ie.relayout())return;Cn(vt),Cn(zn),ei=n,li()&&(H.degreeCamera=Mf(H.degreeCamera)),H.cameraY=za(),jn=!0,Ar=oe.cameraEaseSpeed;let e=H.postOpen&&Nh()==="focus3d"&&!Xe.open&&Ie.postViews[H.selected];e&&e.ready&&(Ie.L.grid?Ie.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var Vw=0;function Gw(){if(++Vw%20||!Ss||H.postOpen||ji||!bn)return;let n=li();if(!n)return;let e=W0();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&$0(ei||nl())}function Ww(){if(!ei)return;let n=nl(),e=xn(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-ei[i];Math.abs(s)>.05?(ei[i]+=s*e,t=!1):ei[i]=n[i]}Ba(zn)||(zn.x=ei.x,zn.y=ei.ty,zn.z=ei.z),!ji&&!jn&&!Ba(vt)&&Zd(),t&&(ei=null)}function Zd(){let n=ei||nl();vt.x=n.x+n.d*Math.sin(H.actualDeg),vt.z=n.z+n.d*Math.cos(H.actualDeg)}function Ch(){Tr.forEach((n,e)=>{e===H.currentSection?n.container.parent||ti.add(n.container):n.container.parent&&ti.remove(n.container)}),ji=!1,jn=!1,sn.classList.remove("dragging"),Ca=null,Da=null,Uo=null,Ie&&Ie.destroy(),ei=null,Ie=new jd(Es()),Bo(H.selected),H.actualDeg=H.degreeCamera,$w()}function $w(){let n=tl();H.cameraY=za(),pw(_s()*Math.sin(H.degreeCamera)+n.x,H.cameraY,_s()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function Bo(n){H.selected=n,Ie&&Ie.focus(n)}function Ad(n){!Ie||!Ie.n||(jn=!0,Ie.checkPostSelected(),Ar=oe.cameraKeyboardSpeed,Bo(n==="NEXT"?Ie.goNext():Ie.goPrev()))}var Hi=()=>Ht>700&&Ot>520;function Rh(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Ot<680?1e3-Ot:320)*t)}function q0(){if(jn=!1,Rh(),!Ss)return;let n=tl();if(H.postOpen&&Nh()==="focus3d"&&!Xe.open&&Ie&&Ie.postViews[H.selected]){let t=Ie.postViews[H.selected];Ie.L.grid?Ie.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=nr()||li();mw(n.x+_s()*Math.sin(H.actualDeg),e?H.cameraY:vt.y,n.z+_s()*Math.cos(H.actualDeg),oe.cameraSpeed/2),e&&ff(n.x,n.ty,n.z,oe.cameraSpeed/2)}function qw(){if(!bn){Math.abs(vt.y-H.cameraY)>.007&&!Ba(vt)&&(vt.y-=(vt.y-H.cameraY)*xn(oe.cameraEaseSpeed));return}if(ji){Ar=oe.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(Js-Qc)/150,H.actualDeg-=(H.actualDeg-n)*xn(Ar),Zd(),H.cameraY+=(Ks-eh)*2;let e=oe.cameraHeight,t=nr()?tl().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),vt.y-=(vt.y-H.cameraY)*xn(Ar),oe.animationMode&&Ie&&Ie.movePosts((Qc-Js)/Math.max($o,.25),(eh-Ks)/Math.max($o,.25),Ar),Qc=Js,eh=Ks}else jn?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&(jn=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*xn(oe.cameraEaseSpeed),Zd(),vt.y-=(vt.y-H.cameraY)*xn(Ar),oe.animationMode&&Ie&&Ie.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(vt.y-H.cameraY)>.007&&(vt.y-=(vt.y-H.cameraY)*xn(oe.cameraEaseSpeed))}function Xw(){vt.zoom=6;let e=Ie&&Ie.postViews[0]&&Ie.postViews[0].p2.y||oe.planeDistance;vt.y=e+100,zn.y=e+100,ff(zn.x,Ah(),zn.z,1),bn=!1,hn(vt,1,{zoom:er.zoom},{ease:"expoOut"}),setTimeout(()=>{bn=!0},1*1e3+50)}var Cd=new U,Rd=new U,Lo=new U,Po=1,Io=1,Yw=1.45;function jw(){Cd.copy(Vd(vt.x,vt.y,vt.z)),Rd.copy(Vd(zn.x,zn.y,zn.z)),Lo.subVectors(Rd,Cd),Lo.lengthSq()<1e-6&&Lo.set(0,0,-1),Lo.normalize();let n=nr()&&!li()?Math.min(1,oe.cameraDistanceProportion/ws):1;Po+=Math.abs(n-Po)<.001?n-Po:(n-Po)*xn(oe.cameraEaseSpeed),Ln.position.copy(Cd).addScaledVector(Lo,-er.focus*Po),Ln.lookAt(Rd);let e=Ht<700&&Ot>Ht&&!li()&&!nr()?Yw:1;Io+=Math.abs(e-Io)<.001?e-Io:(e-Io)*xn(oe.cameraEaseSpeed);let t=Math.min(1,Ht/900*Io),i=2*Math.atan(Ot/2/(vt.zoom*er.focus*t))/Vi;Math.abs(Ln.fov-i)>1e-4&&(Ln.fov=i,Ln.updateProjectionMatrix())}function X0(){if(Ht=window.innerWidth,Ot=window.innerHeight,Rn.setSize(Ht,Ot,!1),Ln.aspect=Ht/Ot,Ln.updateProjectionMatrix(),gf.forEach(n=>n.resolution.set(Ht,Ot)),Ss)try{Qo()}catch{}}var kn=document.getElementById("menu"),cn=document.getElementById("slogan"),Bn=document.getElementById("langs"),Lh=[];function Zw(){kn.innerHTML="",Lh=Ut.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=he(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&bn&&il(e)}),t.appendChild(i),kn.appendChild(t),i}),kn.style.setProperty("--n",Ut.length),wf()}function wf(){Lh.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function Jw(){Lh.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),kn.hidden=!1,Bn.hidden=!1,Nr(),setTimeout(()=>kn.classList.add("ready"),(Ut.length+1)*200)}var Kw=1.44,kg={col:362,gutter:160,side:79,top:34,bottom:20},Bg={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Bi(){let n=ve&&ve.settings&&ve.settings.fiche||{},e={};for(let t in kg){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?kg[t]:Math.max(Bg[t][0],Math.min(Bg[t][1],Math.round(+i)))}return e}function No(n){let e=Bi(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Ht-2*oe.margin)/(Xe.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function Sf(){let n=Ot<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=cn.offsetTop+cn.offsetHeight+(n?1:2)*oe.margin,t=Xe.height+12,i=n?24:(kn.offsetHeight||90)+70,s=(Ot-e-i)/t,r=(Ot-e-56)/t,o=Ht>700&&!n?14/(+Yn(ve.settings,"body").size||14):0,a=Math.max(n?.4:.5,Math.min(Kw,Math.max(s,Math.min(o,r))));Xe.scale=a,tn.style.top=e+"px",tn.style.transform=a!==1?`scale(${a.toFixed(3)})`:"",tn.style.width=a!==1?Math.ceil((Ht-oe.margin)/a)+"px":"",tn.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Ot-(e+t*a)<kn.offsetHeight+60)}var Fg=()=>{let n=Bn.getBoundingClientRect();return n.height?n.top:Ot-(Hi()?44:48)};function Nr(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&Xe.open&&Xe.height>100){let n=cn.offsetTop+cn.offsetHeight+Xe.height*(Xe.scale||1)+2*oe.margin+30;n=Math.min(n,Fg()-kn.offsetHeight-22),kn.style.left=oe.margin+"px",kn.style.top=n+"px"}else{let n=Bn.hidden?Ot-30:Fg();if(!Hi()&&!bs.hidden){let e=bs.getBoundingClientRect();e.height&&e.left<Ht/2&&(n=Math.min(n,e.top))}kn.style.left=(Hi()?26:oe.margin)+"px",kn.style.top=Math.round(Math.min(Ot-(kn.offsetHeight||86)-(Hi()?100:56),n-(kn.offsetHeight||86)-24))+"px"}if(document.body.classList.toggle("post-open-wide",Hi()&&!!H.postOpen),Tf(),Ef(),!(H.postOpen&&Xe.open&&Xe.height>100)){let n=Math.max(0,...["reel-btn","about-btn","lang-sq"].map(e=>document.getElementById(e)).filter(e=>e&&!e.hidden&&e.offsetHeight).map(e=>e.offsetTop+e.offsetHeight));n&&kn.offsetTop<n+18&&(kn.style.top=n+18+"px")}}function Ef(){if(!de||!de.btn)return;let n=de.btn;n.style.top=Math.round(cn.offsetTop+cn.offsetHeight+(Hi()?26:16))+"px",n.style.left=cn.offsetLeft+2+"px",n.style.right="auto",Ko()}function Tf(){bs.style.top=bs.style.left="",Kd.style.maxHeight=Math.max(140,Ot-200)+"px",document.body.classList.toggle("cats-up",!Hi()&&Ht<560)}var zg=(n,e=!1)=>Mg(n,ve.settings,e);function Jd(){let n=ve.settings,e=n.accent||"#ffcc00",t=n.logo?Mt(n.logo):zg(_n?"#ffffff":e,_n),i=document.getElementById("home-logo");i&&(i.src=n.logo?t:zg("#ffffff",!1),i.classList.toggle("raw",!n.logo));let s=document.getElementById("logo");s&&(s.style.backgroundImage=n.logo?`url("${t}")`:"",s.classList.toggle("img",!!n.logo)),eS(n.logo?t:Qw)}var Qw="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#fff" stroke="#c4c4c4" stroke-width="2.5"/></svg>');function eS(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var th="",lh=document.querySelector('meta[name="description"]'),Hg=lh?lh.content:"",Af=document.title;function Cf(n){if(!(Et||!ve)){document.title=n?`${he(n.title).trim()} \xB7 ${ve.settings.name||"Hand Coded"}`:Af,lh&&(lh.content=n&&(Er(he(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||he(n.subtitle))||Hg);try{let e=new URL(location.href),t=window.HC_ROUTE||{};if(t.pages&&location.protocol!=="file:"){let i=v0;e.searchParams.delete("p"),e.searchParams.delete("lang"),e.pathname=i.pathname+(n&&md(ve,n)?`${fn}/${encodeURIComponent(n.id)}/`:t.p||e.pathname!==i.pathname?`${fn}/`:""),n&&!md(ve,n)&&e.searchParams.set("p",n.id)}else n?e.searchParams.set("p",n.id):e.searchParams.delete("p");e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&rr("?p="+n.id,document.title)}}function tS(){let n=String((ve.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||Et||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{th||rr("",Af)}),document.head.appendChild(e)}function rr(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:((window.HC_ROUTE||{}).pages?v0.pathname:location.pathname.replace(/index\.html$/,""))+n,title:e,event:t})}catch{}}var Vc=document.createElement("canvas").getContext("2d");function tr(){let n=innerWidth<=700||innerHeight<=520?10.5:13,e=null;["#slogan","#home-slogan"].forEach(o=>{let a=document.querySelector(o+" > .wm"),l=document.querySelector(o+" > .tls");if(!a||!l)return;let c=[...l.children];if(c.length){l.style.fontSize=l.style.lineHeight=l.style.marginTop="",a.style.removeProperty("font-size"),a.style.removeProperty("line-height");for(let h=0;h<4;h++){let u=(w,S)=>`${w.fontStyle==="italic"?"italic ":""}${w.fontWeight} ${S}px ${w.fontFamily}`,d=getComputedStyle(a),p=parseFloat(d.fontSize);if(!(p>0))return;Vc.font=u(d,p);let g=Vc.measureText(a.textContent);if(!(g.actualBoundingBoxAscent>0)||!(g.fontBoundingBoxAscent>0))return;let v=parseFloat(d.lineHeight)||p*1.2,m=g.actualBoundingBoxAscent,f=(v-g.fontBoundingBoxAscent-g.fontBoundingBoxDescent)/2+g.fontBoundingBoxAscent,M=getComputedStyle(l);Vc.font=u(M,100);let _=Vc.measureText(c[0].textContent),I=1.15,L=(_.actualBoundingBoxAscent||72)/100,T=m/(L+(c.length-1)*I),D=T*I;if(h<3&&T<n-.05){let w=(n+.02)/T;a.style.setProperty("font-size",(p*w).toFixed(2)+"px","important"),a.style.setProperty("line-height",(v*w).toFixed(2)+"px","important");continue}let F=(D-(_.fontBoundingBoxAscent+_.fontBoundingBoxDescent)*T/100)/2+_.fontBoundingBoxAscent*T/100;l.style.fontSize=T.toFixed(2)+"px",l.style.lineHeight=D.toFixed(2)+"px",l.style.marginTop=(f-m-(F-L*T)).toFixed(2)+"px",o==="#slogan"&&(e=f-m/2);break}}});let t=document.getElementById("logo"),i=document.getElementById("slogan"),s=i&&i.querySelector(":scope > .wm");t&&(t.style.top=""),t&&s&&e!==null&&/fixed|absolute/.test(getComputedStyle(t).position)&&t.offsetHeight&&(t.style.top=(i.offsetTop+s.offsetTop+e-t.offsetHeight/2).toFixed(1)+"px");let r=document.getElementById("slogan")?document.getElementById("slogan").offsetHeight:0;if(r!==tr.h){tr.h=r;try{wt&&(Tf(),Ef(),Ko()),Xe.open&&Sf()}catch{}}}tr.wait=()=>{document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>requestAnimationFrame(tr))};document.fonts&&document.fonts.addEventListener&&document.fonts.addEventListener("loadingdone",()=>tr());window.addEventListener("resize",()=>tr());function Rf(){let n=ve.settings;B0(),gh(),al(),document.documentElement.lang=fn,document.documentElement.classList.toggle("neg",_n),H.postOpen||(document.title=Af||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[fn]||n.taglines.en)||[],t=e.length?`<b class="wm">${xe(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${xe(a)}</span>`).join("")}</span>`:xe(n.name);if(cn.innerHTML=e.length?`<b class="wm" role="link" tabindex="0" title="${xe(_e("homeLink"))}">${xe(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${xe(a)}</span>`).join("")}</span>`:t,document.getElementById("home-slogan").innerHTML=t,tr(),tr.wait(),Jd(),!n.logo&&document.fonts){let a=Yn(n,"logo"),l=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{ve.settings.logo||Jd()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(a=>{let l=document.getElementById(a);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(_n)),l.title=_e(_n?"toPos":"toNeg"),l.setAttribute("aria-label",l.title)):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.removeAttribute("aria-label"),l.removeAttribute("title")))}),Pn.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),ir.classList.contains("wait")||Wf(he(n.home.enter)||_e("enter")),vS(),SS(),ni(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=_e(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",_e("keys")),Fo.setAttribute("aria-label",_e("prev")),ch.setAttribute("aria-label",_e("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=_e("category"));let r=n.langs&&n.langs.length?n.langs:ai;nS(r);let o=document.getElementById("lang-sq");o||(o=document.createElement("div"),o.id="lang-sq",o.className="ui",document.body.appendChild(o),document.addEventListener("pointerdown",a=>{a.target.closest("#lang-sq")||o.classList.remove("open")})),[document.getElementById("home-langs"),o].forEach(a=>{if(a.innerHTML="",a.classList.add("hlg"),a.classList.remove("open"),a.hidden=r.length<2,r.length<2)return;let l=document.createElement("button");l.type="button",l.className="cur",l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label",_e("lang")+" : "+fn.toUpperCase()),l.innerHTML=`<b class="ic">${fn.toUpperCase()}</b>`,l.addEventListener("click",()=>{let h=a.classList.toggle("open");l.setAttribute("aria-expanded",String(h))});let c=document.createElement("span");c.className="opts",r.filter(h=>h!==fn).forEach(h=>{let u=document.createElement("button");u.type="button",u.textContent=h.toUpperCase(),u.lang=h,u.setAttribute("aria-label",_e("lang")+" "+h.toUpperCase()),u.addEventListener("click",()=>Lf(h)),c.appendChild(u)}),a.append(l,c)}),Ko(),document.documentElement.style.setProperty("--accent",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-raw",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",I0(ve.settings.accent||"#ffcc00")),jS()}function nS(n){if(Bn.innerHTML="",Bn.classList.remove("open"),n.length<2)return;let e=document.createElement("button");e.type="button",e.className="lg-open",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-label",_e("lang")+" : "+fn.toUpperCase()),e.innerHTML=`<i class="tri"></i><span>${fn.toUpperCase()}</span>`;let t=document.createElement("ul");t.className="lg-list",n.filter(i=>i!==fn).forEach(i=>{let s=document.createElement("li"),r=document.createElement("button");r.type="button",r.textContent=i.toUpperCase(),r.lang=i,r.setAttribute("aria-label",_e("lang")+" "+i.toUpperCase()),r.addEventListener("click",()=>{Bn.classList.remove("open"),Lf(i)}),s.appendChild(r),t.appendChild(s)}),e.addEventListener("click",()=>{let i=Bn.classList.toggle("open");e.setAttribute("aria-expanded",String(i))}),Bn.append(t,e)}document.addEventListener("pointerdown",n=>{if(Bn.classList.contains("open")&&!Bn.contains(n.target)){Bn.classList.remove("open");let e=Bn.querySelector(".lg-open");e&&e.setAttribute("aria-expanded","false")}});Bn.addEventListener("keydown",n=>{if(n.code==="Escape"&&Bn.classList.contains("open")){n.stopPropagation(),Bn.classList.remove("open");let e=Bn.querySelector(".lg-open");e&&(e.setAttribute("aria-expanded","false"),e.focus())}});function Lf(n){if(n!==fn){fn=n;try{localStorage.setItem("hc-lang",n)}catch{}if(document.documentElement.lang=n,Rf(),Ss){Lh.forEach((i,s)=>{i.textContent=he(Ut[s].def.name)}),Ph();let e=H.postOpen,t=H.selected;Ai(),H.selected=t,Ch(),e&&Wo(.6,()=>Zo(t))}H.postOpen||Cf(null)}}var jo=document.getElementById("cats"),bs=document.getElementById("cat-box"),Kd=document.getElementById("cat-list"),Y0=document.getElementById("cat-name"),Qd=document.getElementById("cat-open"),Fo=document.getElementById("pg-prev"),ch=document.getElementById("pg-next");function Ph(){let n=H.data,e=n.categoryList;bs.hidden=e.length<=1,Kd.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${xe(he(t.label))} <span class="n">${n.countOf(t.id)}</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{hh(),hS(t.id)}),i.appendChild(s),Kd.appendChild(i)}),Y0.innerHTML=`<span class="t">${xe(n.currentCatName)}</span> <span class="n">${n.countOf(n.category)}</span>`,j0(),hh(),sS()}var Gc=document.getElementById("pg-num");function j0(){let n=H.data;Fo.disabled=!n.hasNewer(),ch.disabled=!n.hasOlder(),Fo.hidden=ch.hidden=!n.hasNewer()&&!n.hasOlder(),Gc&&(Gc.hidden=Fo.hidden,Gc.textContent=`${n.page}/${n.pages}`,Gc.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function hh(){clearTimeout(Pf),bs.classList.remove("open"),Qd.setAttribute("aria-expanded","false")}var qi=document.createElement("button");qi.id="ov-btn";qi.type="button";qi.hidden=!0;qi.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 1h8v8H1zM10.5 1H15v3.5h-4.5zM10.5 5.5H15V9h-4.5zM1 10.5h3.5V15H1zM5.5 10.5H9V15H5.5zM10.5 10.5H15V15h-4.5z" fill="currentColor"/></svg><span></span>';bs.appendChild(qi);var Lt=null,iS="",Z0=()=>!!(H.section&&H.section.def.card==="image"&&!H.section.def.skills&&H.data&&H.data.all.length>=8);function sS(){qi.hidden=!Z0(),qi.querySelector("span").textContent=_e("overview"),qi.setAttribute("aria-label",_e("overview"))}qi.addEventListener("click",n=>{n.stopPropagation(),rS()});function Vg(){if(!Lt)return;let n=Lt.querySelector(".mos"),e=getComputedStyle(n).gridTemplateColumns.split(" ").length,t=[...n.children];[...n.children].forEach(d=>{d.className="t "+d.dataset.k,d.style.gridColumn=""});let i=d=>d.classList.contains("xl")?e<6?e*2:8:d.classList.contains("l")?4:d.classList.contains("w")?2:1,s=(e-t.reduce((d,p)=>d+i(p),0)%e)%e;for(let d=t.length-1;d>=0&&s>0;d--)t[d].dataset.k||(t[d].classList.add("w"),s--);let r=n.getBoundingClientRect(),o=r.width/e;if(!t.length||!o)return;let a=d=>{let p=d.getBoundingClientRect();return{t:d,c:Math.round((p.left-r.left)/o),n:Math.round(p.width/o),b:Math.round(p.bottom)}},l=t.map(a),c=Math.max(...l.map(d=>d.b)),h=l.filter(d=>d.b>=c-2).sort((d,p)=>d.c-p.c),u=e-h.reduce((d,p)=>d+p.n,0);for(let d=h.length-1,p=0;u>0;p++){let g=h[h.length-1-p%h.length];g.n++,u--,d--}h.forEach(d=>{d.t.style.gridColumn="span "+d.n})}function Gg(n,e=!0){if(iS=n,!Lt)return;Lt.querySelectorAll(".chips button").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.cat===n)));let t=Lt.querySelector(".mos");t.classList.toggle("sel",!!n);let i=null;if(t.querySelectorAll(".t").forEach(s=>{let r=!!n&&s.dataset.tags.split(" ").includes(n);s.classList.toggle("hit",r),s.classList.toggle("dim",!!n&&!r),n&&!r?(s.setAttribute("tabindex","-1"),s.setAttribute("aria-disabled","true")):(s.removeAttribute("tabindex"),s.removeAttribute("aria-disabled")),r&&!i&&(i=s)}),e&&i){let s=i.getBoundingClientRect();(s.top>innerHeight*.8||s.bottom<0)&&Lt.scrollTo({top:Lt.scrollTop+s.top-140,behavior:"smooth"})}}function rS(){if(!Z0()||!bn)return;hh();let n=H.data,e=H.section.def,t=n.all,i=e.defaultTag||"featured",s=(e.tags||[]).some(l=>l.id==="advertising")?"advertising":"",r=!0,o=t.map(l=>{let c=(l.tags||[]).includes(i),h=c&&r?"xl":c?"l":s&&(l.tags||[]).includes(s)?"w":"";c&&(r=!1);let u=l.ovSize==="s"?"":/^(xl|l|w)$/.test(l.ovSize||"")?l.ovSize:h,d=l.thumb?u==="xl"?`<img src="${xe(Mt(l.thumb))}" alt="" loading="lazy" draggable="false">`:Pr(l.thumb,'alt="" loading="lazy" draggable="false"'):"";return`<a class="t ${u}" data-k="${u}" data-ov="${xe(l.id)}" data-tags="${xe((l.tags||[]).join(" "))}" href="?p=${encodeURIComponent(l.id)}&amp;lang=${fn}">${d}<em>${xe(l.date||"")}</em><span class="tx"><b>${xe(he(l.title))}</b><i>${xe(he(l.subtitle))}</i></span></a>`}).join(""),a=(n.categoryList.some(l=>l.id==="")?n.categoryList:[{id:"",label:Object.fromEntries(ai.map(l=>[l,(wr[l]||wr.en).all]))},...n.categoryList]).map(l=>`<button type="button" data-cat="${xe(l.id)}" aria-pressed="false">${xe(he(l.label))}<span>${n.countOf(l.id)}</span></button>`).join("");Lt||(Lt=document.createElement("section"),Lt.id="hc-ov",Lt.className="ui",Lt.setAttribute("role","dialog"),Lt.setAttribute("aria-modal","true"),Lt.hidden=!0,document.body.appendChild(Lt),Lt.addEventListener("click",l=>{let c=l.target.closest("[data-ov]");if(c){if(c.classList.contains("dim")){l.preventDefault();return}if(l.metaKey||l.ctrlKey||l.shiftKey)return;l.preventDefault();let u=c.dataset.ov;Ld(),sl(u);return}let h=l.target.closest("[data-cat]");if(h){Gg(h.dataset.cat);return}l.target.closest(".x")&&Ld()}),window.addEventListener("keydown",l=>{!Lt||Lt.hidden||(l.code==="Escape"&&(l.preventDefault(),Ld()),l.code!=="Tab"&&l.code!=="Enter"&&l.code!=="Space"&&l.stopImmediatePropagation())},!0),window.addEventListener("resize",Vg)),Lt.setAttribute("aria-label",_e("overview")),Lt.innerHTML=`<div class="ov-in"><div class="bar"><h2>${xe(_e("overview"))}</h2><span class="n">${t.length} ${xe(_e("ov_n"))}</span><button type="button" class="x" aria-label="${xe(_e("close"))}"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button><div class="chips">${a}</div></div><div class="mos">${o}</div></div>`,Lt.hidden=!1,Lt.scrollTop=0,document.documentElement.classList.add("ov-open"),requestAnimationFrame(()=>{Lt.classList.add("on")}),Vg(),Gg("",!1),setTimeout(()=>{let l=Lt.querySelector(".x");l&&l.focus({preventScroll:!0})},50),rr("#overview",_e("overview"),!0)}function Ld(){!Lt||Lt.hidden||(Lt.classList.remove("on"),document.documentElement.classList.remove("ov-open"),setTimeout(()=>{Lt.classList.contains("on")||(Lt.hidden=!0)},350),qi.focus({preventScroll:!0}))}var Pf=0,J0=-1e9;bs.addEventListener("pointerenter",()=>clearTimeout(Pf));Qd.addEventListener("click",()=>{clearTimeout(Pf);let n=bs.classList.toggle("open");Qd.setAttribute("aria-expanded",String(n))});Fo.addEventListener("click",()=>{bn&&hy("newer")});ch.addEventListener("click",()=>{bn&&hy("older")});var ar=document.getElementById("kb"),If=document.getElementById("kb-toggle"),K0=null;function ef(){ar.classList.add("open"),If.setAttribute("aria-expanded","true")}function uh(){ar.classList.remove("open"),If.setAttribute("aria-expanded","false")}If.addEventListener("click",()=>{clearTimeout(K0),ar.classList.contains("open")?uh():ef()});ar.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>dy({code:n.dataset.k,preventDefault(){}})));function ps(n){let e=ar.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function Q0(){ar.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var Nf=document.getElementById("whiteboard"),tn=document.getElementById("post2d"),ms=document.getElementById("strip");function Wg(n,e){if(!n||ve.settings.signImages===!1)return"";let t=[he(n.title).trim(),(n.author||ve.settings.name||"").trim()].filter(Boolean);return e&&t.push(_e("photo")+" "+e.trim()),t.join(" \xB7 ")}var aS=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Ha=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Va=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]{6,}))?/i.exec(n||"");if(!e)return null;let t=e[2]||(/[?&]h=([0-9a-f]{6,})/i.exec(n)||[])[1];return t?e[1]+"/"+t:e[1]},Ih=(n,e)=>{let[t,i]=String(n).split("/");return`https://player.vimeo.com/video/${t}?${i?"h="+i+"&":""}${e}`},Pd=new Map,ey=n=>(Pd.has(n)||Pd.set(n,fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent("https://vimeo.com/"+n)}&width=1280`).then(e=>e.ok?e.json():null).then(e=>e&&e.thumbnail_url||"").catch(()=>"")),Pd.get(n)),ty=(n,e)=>{let t=(n&&n.media||[]).filter(i=>i&&/youtu\.?be|vimeo\.com/.test(i.src||""));return!t.length||t[0].src===e},Dr=n=>Ha(n)?"youtube":Va(n)?"vimeo":aS(n)?"video":"image",zo={to:"maya@hand-coded.net"},$g={fr:{title:"Restons en contact.",intro:"Nos nouvelles, quelques fois par an : projets et coulisses. Un projet en t\xEAte ? Dites-nous en plus.",email:"Votre e-mail",who:"Vous \xEAtes",whoO:["Une marque","Une agence","Un(e) artiste","Une institution ou un festival","Autre"],what:"Un projet en t\xEAte ? (facultatif)",whatO:["Une installation","Un \xE9v\xE9nement ou une tourn\xE9e","Un outil ou un logiciel","Du conseil","Autre chose"],when:"Pour quand",whenO:["Moins de 3 mois","3 \xE0 6 mois","Plus tard","Je ne sais pas encore"],msg:"En quelques mots (facultatif)",send:"S\u2019inscrire",sending:"Envoi\u2026",ok:"Merci, vous \xEAtes inscrit(e) ! Et si vous nous avez parl\xE9 d\u2019un projet, on vous r\xE9pond tr\xE8s vite.",err:"L\u2019envoi n\u2019a pas march\xE9. \xC9crivez-nous directement \xE0 ",bad:"Il manque une adresse e-mail valide.",note:"Quelques e-mails par an. D\xE9sinscription en un clic."},en:{title:"Let\u2019s keep in touch.",intro:"Our news, a few times a year: projects and behind the scenes. A project in mind? Tell us more.",email:"Your email",who:"You are",whoO:["A brand","An agency","An artist","An institution or a festival","Other"],what:"A project in mind? (optional)",whatO:["An installation","An event or a tour","A tool or software","Consulting","Something else"],when:"When",whenO:["Within 3 months","3 to 6 months","Later","Not sure yet"],msg:"In a few words (optional)",send:"Sign up",sending:"Sending\u2026",ok:"Thank you, you\u2019re signed up! And if you told us about a project, we\u2019ll get back to you very soon.",err:"Sending failed. Write to us directly at ",bad:"Please enter a valid email address.",note:"A few emails a year. Unsubscribe in one click."},ca:{title:"Mantinguem el contacte.",intro:"Les nostres novetats, unes quantes vegades l\u2019any: projectes i bastidors. Teniu un projecte al cap? Expliqueu-nos-en m\xE9s.",email:"El vostre correu",who:"Sou",whoO:["Una marca","Una ag\xE8ncia","Un/a artista","Una instituci\xF3 o un festival","Altres"],what:"Un projecte al cap? (opcional)",whatO:["Una instal\xB7laci\xF3","Un esdeveniment o una gira","Una eina o un programari","Assessorament","Una altra cosa"],when:"Per a quan",whenO:["Menys de 3 mesos","De 3 a 6 mesos","M\xE9s endavant","Encara no ho s\xE9"],msg:"En poques paraules (opcional)",send:"Subscriure\u2019s",sending:"Enviant\u2026",ok:"Gr\xE0cies, ja us heu subscrit! I si ens heu parlat d\u2019un projecte, us responem molt aviat.",err:"L\u2019enviament no ha funcionat. Escriviu-nos directament a ",bad:"Falta una adre\xE7a de correu v\xE0lida.",note:"Uns quants correus l\u2019any. Baixa amb un clic."},es:{title:"Sigamos en contacto.",intro:"Nuestras novedades, unas pocas veces al a\xF1o: proyectos y bastidores. \xBFUn proyecto en mente? Cu\xE9ntanos m\xE1s.",email:"Tu correo",who:"Eres",whoO:["Una marca","Una agencia","Un/a artista","Una instituci\xF3n o un festival","Otro"],what:"\xBFUn proyecto en mente? (opcional)",whatO:["Una instalaci\xF3n","Un evento o una gira","Una herramienta o un software","Asesor\xEDa","Otra cosa"],when:"Para cu\xE1ndo",whenO:["Menos de 3 meses","De 3 a 6 meses","M\xE1s adelante","A\xFAn no lo s\xE9"],msg:"En pocas palabras (opcional)",send:"Suscribirme",sending:"Enviando\u2026",ok:"\xA1Gracias, ya te has suscrito! Y si nos has hablado de un proyecto, te respondemos muy pronto.",err:"El env\xEDo no ha funcionado. Escr\xEDbenos directamente a ",bad:"Falta una direcci\xF3n de correo v\xE1lida.",note:"Unos pocos correos al a\xF1o. Baja con un clic."}},ny=()=>$g[fn]||$g.en,oS=0;function iy(n){let e=ny(),t=xe,i="cf"+ ++oS,s=(r,o,a)=>`<fieldset class="cf-q"><legend>${t(o)}</legend><div class="cf-chips">${a.map((l,c)=>`<label class="cf-chip"><input type="radio" name="${i}-${r}" value="${t(l)}"${c===-1?" checked":""}><span>${t(l)}</span></label>`).join("")}</div></fieldset>`;return`<form class="cform-f cf-${n}" novalidate><div class="cf-col"><h2 class="${n==="pv"?"pv-ttl":"ttl"}">${t(e.title)}</h2><p class="cf-intro">${t(e.intro)}</p><label class="cf-q cf-mail"><span>${t(e.email)}</span><input type="email" name="email" autocomplete="email" required spellcheck="false"></label>`+s("who",e.who,e.whoO)+s("when",e.when,e.whenO)+'</div><div class="cf-col">'+s("what",e.what,e.whatO)+`<label class="cf-q cf-msg"><span>${t(e.msg)}</span><textarea name="message" rows="${n==="pv"?3:2}"></textarea></label><input type="text" name="_honey" class="cf-hp" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="cf-end"><button type="submit" class="cf-send">${t(e.send)}</button><span class="cf-note">${t(e.note)}</span></div><p class="cf-st" role="status" aria-live="polite"></p></div></form>`}function sy(n){let e=n.querySelector(".cform-f");if(!e||e.dataset.bound)return;e.dataset.bound="1";let t=e.querySelector(".cf-st"),i=e.querySelector(".cf-send"),s=r=>{let o=e.querySelector(`input[name$="-${r}"]:checked`);return o?o.value:""};e.addEventListener("submit",async r=>{r.preventDefault();let o=ny(),a=e.email.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){t.textContent=o.bad,t.className="cf-st bad",e.email.focus();return}if(e._honey.value)return;i.disabled=!0,i.textContent=o.sending,t.textContent="",t.className="cf-st";let l=!!(s("what")||s("when")||e.message.value.trim()),c={email:a,Newsletter:"oui","Vous \xEAtes":s("who"),Projet:s("what"),"Pour quand":s("when"),Message:e.message.value.trim(),Langue:fn,Page:location.href,_subject:"Hand Coded \xB7 "+(l?"newsletter + projet":"inscription newsletter")+(s("who")?" ("+s("who")+")":""),_template:"table",_captcha:"false"},h=!1,u="";if(location.protocol==="file:")u="page ouverte depuis le disque : l\u2019envoi ne marche que sur le site en ligne";else try{let d=await fetch("https://formsubmit.co/ajax/"+zo.to,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)}),p=await d.json().catch(()=>({}));h=d.ok&&String(p.success)!=="false",h||(u=p.message||"HTTP "+d.status)}catch(d){u=d&&d.message||"r\xE9seau"}h||console.warn("[contact] envoi refus\xE9 :",u),i.disabled=!1,i.textContent=o.send,h?(e.reset(),t.textContent=o.ok,t.className="cf-st ok",rr("contact-form","Formulaire de contact envoy\xE9",!0)):(t.innerHTML=xe(o.err)+`<a href="mailto:${xe(zo.to)}">${xe(zo.to)}</a>`+(u?`<small class="cf-why">${xe(u)}</small>`:""),t.className="cf-st bad")})}var lS=[[/instagram\.com/i,"IG","Instagram"],[/vimeo\.com/i,"Vi","Vimeo"],[/facebook\.com/i,"Fb","Facebook"],[/linkedin\.com/i,"in","LinkedIn"],[/youtube\.com|youtu\.be/i,"YT","YouTube"],[/tiktok\.com/i,"TT","TikTok"],[/(?:^|\/\/|\.)(?:x|twitter)\.com/i,"X","X"],[/behance\.net/i,"Be","Behance"]];function ry(n){let e=document.createElement("div");return e.innerHTML=n,e.querySelectorAll("p").forEach(t=>{let i=[...t.querySelectorAll("a[href]")];if(!i.length)return;let s=i.map(o=>lS.find(([a,,l])=>a.test(o.getAttribute("href"))&&o.textContent.trim().toLowerCase()===l.toLowerCase()));s.some(o=>!o)||[...t.childNodes].filter(o=>o.nodeType===3).map(o=>o.textContent).join("").replace(/[\s·•|,\/-]/g,"")||(t.className="socs",t.innerHTML=i.map((o,a)=>`<a class="soc" href="${xe(o.getAttribute("href"))}" target="_blank" rel="noopener" aria-label="${s[a][2]}" title="${s[a][2]}">${s[a][1]}</a>`).join(""))}),e.innerHTML}function ay(n){let e=document.createElement("div");e.innerHTML=ry(n||"");let t=[...e.children],i={lead:"",mail:[],tel:[],addr:[],socs:"",note:[],rest:[]};return t.forEach((s,r)=>{let o=s.textContent.replace(/\s+/g," ").trim();if(!o&&!s.classList.contains("socs"))return;let a=[...s.querySelectorAll("a[href]")];if(s.classList.contains("socs"))i.socs=s.innerHTML;else if(a.some(l=>/^mailto:/i.test(l.getAttribute("href"))))a.filter(l=>/^mailto:/i.test(l.getAttribute("href"))).forEach(l=>i.mail.push(l.getAttribute("href").replace(/^mailto:/i,"").split("?")[0]));else if(/^\+?[\d\s().\-]{8,}$/.test(o))i.tel.push(o);else if(r===0&&!a.length&&s.querySelector("b, strong")&&s.querySelector("b, strong").textContent.trim()===o)i.lead=s.querySelector("b, strong").innerHTML;else if(r===0&&!a.length&&s.firstElementChild&&/^(B|STRONG)$/.test(s.firstElementChild.tagName)&&s.textContent.trim().startsWith(s.firstElementChild.textContent.trim())){let l=s.firstElementChild;i.lead=l.innerHTML,l.remove(),i.sub=s.innerHTML.replace(/^\s*(<br\s*\/?>\s*)+/i,"").trim()}else a.length?i.note.push(s.innerHTML):/\d/.test(o)&&o.length<120?i.addr.push(o):i.rest.push(s.outerHTML)}),i.ok=!!(i.mail.length||i.tel.length||i.addr.length),i}function oy(n){let e=ay(n),t=xe;if(!e.ok)return ry(n||"");let i=(o,a)=>`<div class="cr"><dt>${t(_e(o))}</dt><dd>${a}</dd></div>`,s=o=>`<a href="tel:${t(o.replace(/[^\d+]/g,""))}">${t(o)}</a>`,r=o=>{let[a,...l]=o.split(/\s+[.·•|]\s+/);return t(a)+(l.length?"<br>"+t(l.join(" \xB7 ")):"")};return(e.lead?`<p class="lead">${e.lead}</p>`:"")+(e.sub?`<p class="csub">${e.sub}</p>`:"")+'<dl class="crows">'+(e.mail.length?i("c_write",e.mail.map(o=>`<a class="mail" href="mailto:${t(o)}">${t(o)}</a>`).join("<br>")):"")+(e.tel.length?i("c_call",e.tel.map(s).join("<br>")):"")+(e.addr.length?i("c_addr",e.addr.map(r).join("<br>")):"")+(e.socs?i("c_follow",`<span class="socs">${e.socs}</span>`):"")+"</dl>"+e.rest.join("")+(e.note.length?`<div class="cnote">${e.note.map(o=>`<p>${o}</p>`).join("")}</div>`:"")}var Wc=56,Xe={open:!1,height:0,panels:[],x:0,finalpos:0,over:0,ov:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=355,tn.classList.remove("closing"),tn.hidden=!1,Sf(),this.geomKey=JSON.stringify(No("project"));{let i=Bi();ms.style.setProperty("--ft",i.top+"px"),ms.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!1),this.addContact(n),zo.to&&this.addForm()}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(H.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,this.over=0,this.ov=0,this.tx=0,ms.style.transform="translateX(0px)"},addRelations(n){let e=Yo(n);if(!e.length)return;let t=Ro(ve,n).length>0,i=Bi(),s=this.panels[this.panels.length-1],r=H.section.def.skills&&s&&s.classList.contains("txt"),o=r?Math.max(12,i.gutter-i.side):i.side,a=Math.max(200,Math.min(300,i.col))+o+i.side,l=`<h2 class="ttl" style="left:${o}px;right:${i.side}px;top:${i.top}px">${xe(_e(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${o}px;bottom:${i.bottom}px">${e.length}</span>`;if(!t){this.addIndex(e,i);return}r||this.addPanel("relh",a,l),e.forEach(c=>{let h=Zs(c),u=[c.date,he(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${xe(c.id)}" aria-label="${xe(he(c.title))}">`+(h?Pr(h,'alt="" draggable="false"'):"")+`<span class="mono"${h?" hidden":""}>${xe(Na(he(c.title)))}</span><span class="cap"><span class="t">${xe(he(c.title).trim())}</span>${u?`<span class="m">${xe(u)}</span>`:""}</span></button>`),p=d.querySelector("img");p&&p.addEventListener("error",()=>{p.remove(),d.querySelector(".mono").hidden=!1})})},addIndex(n,e){let t=e.top,i=355-e.bottom,s=66,r=58,o=252,a=30,l=e.side,c=Math.max(1,Math.floor((i-t-r)/s)),h=Math.max(1,Math.floor((i-t)/s)),u=[],d=0;for(;d<n.length;){let m=(u.length?h:c)*2;u.push(n.slice(d,d+m)),d+=m}let p=xe,g=m=>String(m).padStart(2,"0"),v=0;u.forEach((m,f)=>{let M=f?h:c,_=m.length>M?2:1,I=f?"":`<h2 class="ttl" style="left:${l}px;top:${t}px">${p(_e("together"))}.<span class="n">${n.length}</span></h2>`,L=m.map(D=>{let F=Zs(D),w=[D.date,he(D.place)].filter(Boolean).join(" | ");return v++,`<button type="button" class="go" data-go="${p(D.id)}" aria-label="${p(he(D.title))}"><span class="no">${g(v)}</span><span class="th">${F?Pr(F,'alt="" draggable="false" loading="lazy"'):""}<span class="mono"${F?" hidden":""}>${p(Na(he(D.title)))}</span></span><span class="cap"><span class="t">${p(he(D.title).trim())}</span>${w?`<span class="m">${p(w)}</span>`:""}</span></button>`}).join("");this.addPanel("idx",l*2+_*o+(_-1)*a,I+`<div class="list" style="left:${l}px;top:${f?t:t+r}px;grid-template-columns:repeat(${_},${o}px);grid-template-rows:repeat(${Math.min(M,m.length)},${s}px);column-gap:${a}px">${L}</div>`).querySelectorAll("img").forEach(D=>D.addEventListener("error",()=>{let F=D.nextElementSibling;D.remove(),F&&(F.hidden=!1)}))})},addLogos(n){let e=Bi(),t=n.logos.length,i=e.top,s=355-e.bottom,r=34,o=e.side,a=96,l=50,c=Math.max(1,Math.floor((s-i-r)/l)),h=Math.max(1,Math.min(t,Math.ceil(t/c))),u=Math.ceil(t/h),d=Math.min(l,Math.floor((s-i-r)/u)),p=n.logos.map(m=>`<span class="lg"><img data-src="${xe(m)}" alt="" draggable="false"></span>`).concat(Array(u*h-t).fill('<span class="lg"></span>')).join(""),g=Math.round(i+r+Math.max(0,(s-i-r-u*d)/2));this.addPanel("logos",o*2+h*a,`<h3 class="lbl" style="left:${o}px;top:${i}px">${xe(_e("partners"))}</h3><div class="grid" style="left:${o}px;top:${g}px;grid-template-columns:repeat(${h},${a-1}px);grid-auto-rows:${d-1}px">${p}</div>`).querySelectorAll("img[data-src]").forEach(m=>ly(m.dataset.src).then(f=>{m.src=f.src,m.classList.toggle("raw",!!f.raw)}))},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(_e("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${xe(t)}</span><a href="${xe(e)}" target="_blank" rel="noopener"><span class="host">${xe(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,ms.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=l=>Dr(l.src)==="image";if(n.filter(e).length<3){n.forEach(l=>this.addMedia(l.src,355,l.credit,!0,l.caption));return}let t=["mat","big2","bleed","collage","trio","bleed","duo","grid","offset","bleed","inset","bleed"],i={duo:2,big2:3,collage:3,trio:3,grid:4},s=String(this.post&&this.post.id||""),r=0;for(let l of s)r=r*31+l.charCodeAt(0)>>>0;let o=r%t.length;t[o]==="bleed"&&o++;let a=0;for(;a<n.length;){let l=n[a];if(!e(l)){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}let c=t[o++%t.length],h=i[c]||1,u=n.slice(a,a+h);if(h>1&&!(u.length===h&&u.every(e))){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}c==="mat"?this.addMat(l):c==="grid"?this.addGrid(u):c==="duo"?this.addDuo(u):c==="big2"?this.addBig2(u):c==="collage"?this.addCollage(u):c==="trio"?this.addTrio(u):c==="offset"?this.addOffset(l):c==="inset"?this.addInset(l):this.addMedia(l.src,355,l.credit,!0,l.caption),a+=h}},addFit(n,e,t,i=""){let s=e.map(()=>1.5),r=this.addPanel("media comp "+n,400,e.map(h=>`<img src="${xe(Mt(h.src))}" alt="" draggable="false" decoding="async">`).join("")+(i?`<p class="mcap2">${xe(i)}</p>`:"")),o=[...r.querySelectorAll("img")],a=r.querySelector(".mcap2"),l=h=>Math.round(h)+"px",c=h=>{let u=t(s);o.forEach((d,p)=>{let[g,v,m,f]=u.boxes[p];Object.assign(d.style,{left:l(g),top:l(v),width:l(m),height:l(f)})}),a&&(u.cap?Object.assign(a.style,{left:l(u.cap[0]),top:l(u.cap[1]),width:l(u.cap[2]),display:""}):a.style.display="none"),r.style.width=l(u.w),h&&this.layout()};return o.forEach((h,u)=>{let d=()=>{h.naturalWidth&&(s[u]=h.naturalWidth/h.naturalHeight,c(!0))};h.addEventListener("load",d),h.addEventListener("error",()=>{h.style.visibility="hidden"}),h.complete&&d()}),c(!1),r},capOf(n){let e=n.find(t=>t.caption&&he(t.caption).trim());return e?he(e.caption).trim():""},addDuo(n){this.addFit("wht duo",n,s=>{let r=263*s[0],o=263*s[1];return{w:2*46+r+16+o,boxes:[[46,46,r,263],[46+r+16,46,o,263]]}})},addBig2(n){let e=Math.max(16,Math.min(34,Bi().top)),t=8,i=355-2*e;this.addFit("big2",n,s=>{let r=i*s[0],o=(i-t)/(1/s[1]+1/s[2]),a=o/s[1];return{w:2*e+r+t+o,boxes:[[e,e,r,i],[e+r+t,e,o,a],[e+r+t,e+a+t,o,i-t-a]]}})},addCollage(n){let e=(t,i,s)=>i/t>s?[s*t,s]:[i,i/t];this.addFit("wht collage",n,t=>{let[i,s]=e(t[0],210,263),r=46+i+26,[o,a]=e(t[1],230,160),l=30+a+20,[c,h]=e(t[2],150,315-l);return{w:Math.max(r+o,r+c+120)+46,boxes:[[46,46,i,s],[r,30,o,a],[r,l,c,h]],cap:[r+c+16,l+2,96]}},this.capOf(n))},addTrio(n){this.addFit("trio",n,i=>{let s=230,r=i[0]+i[1]+i[2];s*r>1100&&(s=1100/r);let o=(355-s)/2,a=34,l=i.map(c=>{let h=[a,o,s*c,s];return a+=s*c+10,h});return{w:a-10+34,boxes:l}})},addGrid(n){let e=Math.max(16,Math.min(34,Bi().top)),t=8,i=355-2*e;this.addFit("grid4",n,s=>{let r=s[0]+s[1],o=s[2]+s[3],a=t+(i-t)/(1/r+1/o),l=(a-t)/r,c=(a-t)/o,h=e+l+t;return{w:a+2*e,boxes:[[e,e,l*s[0],l],[e+l*s[0]+t,e,l*s[1],l],[e,h,c*s[2],c],[e+c*s[2]+t,h,c*s[3],c]]}})},addOffset(n){let i=n.caption?he(n.caption).trim():"";this.addFit("wht offset",[n],s=>{let r=Math.min(170*s[0],300),o=r/s[0];return{w:Math.max(360,46+r+170),boxes:[[46,309-o,r,o]],cap:[46+r+24,46,130]}},i)},addInset(n){let e=n.caption?he(n.caption).trim():"";this.addFit("inset",[n],t=>{let s=Math.min(200*t[0],360),r=s/t[0],o=(355-r)/2-(e?10:0);return{w:s+140,boxes:[[70,o,s,r]],cap:[70,o+r+10,s]}},e)},addMat(n){let t=n.caption?he(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${xe(Mt(n.src))}" alt="" draggable="false" decoding="async" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${xe(t)}</p>`:"")),r=s.querySelector("img"),o=()=>{if(!r.naturalWidth)return;let a=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=a+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=a+"px"),this.layout()};r.addEventListener("load",o),r.complete&&o(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(a=>a!==s),this.layout()})},addMedia(n,e=355,t="",i=!0,s=null){let r=Dr(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let o=r==="video",a=this.addPanel("media",e,""),l=document.createElement(o?"video":"img");if(l.draggable=!1,l.style.height=e+"px",o){Object.assign(l,{src:Mt(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",_e("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),a.querySelector(".in").appendChild(u)}else l.src=Mt(n),l.alt="";let c=()=>{let u=Math.round(o?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(a.style.width=u+"px",this.layout())};l.addEventListener(o?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(u=>u!==a),this.layout())}),a.querySelector(".in").prepend(l);let h=s?he(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",p=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${xe(d)}</b> `:"")+xe(p),a.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),o=this.addPanel("media embed",s,"").querySelector(".in"),a=e==="youtube"?Ha(n):Va(n),l=document.createElement("div");l.className="cover";let c=e==="vimeo"&&a&&!ty(this.post,n),h=this.post&&this.post.thumb?Mt(this.post.thumb):"",u=e==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:c?"":h;if(u||c){let p=document.createElement("img");p.alt="",p.draggable=!1,p.onerror=()=>p.remove(),u?p.src=u:ey(a).then(g=>{g||h?p.src=g||h:p.remove()}),l.appendChild(p)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let d=document.createElement("button");d.type="button",d.className="play",d.setAttribute("aria-label",_e("play")),d.addEventListener("click",()=>{let p=document.createElement("iframe");p.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&playsinline=1&rel=0`:Ih(a,"autoplay=1&title=0&byline=0&portrait=0"),p.allow="autoplay; fullscreen; picture-in-picture",p.allowFullscreen=!0,p.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(p)}),l.appendChild(d),o.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=No(e),o=Bi(),a=355-o.bottom;e==="project"&&H.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(L,T)=>r?[L===0?o.side:Math.floor(o.gutter/2),L===T-1?o.side:Math.ceil(o.gutter/2)]:[i,t-i-s],c=he(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=he(n.subtitle),u=H.section.def,d=n.tags.filter(L=>L!=="featured").map(L=>u.tags.find(T=>T.id===L)).filter(Boolean).map(L=>he(L.label)),p=d.length?`${xe(_e("postedIn"))} <span>${d.map(xe).join(", ")}</span>`:"",g=xe([n.date,he(n.place)].filter(Boolean).join(" | ")),v=Sr(he(n.body)),m=document.createElement("div");m.className="txt",m.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(m),m.innerHTML=`<h2 class="ttl" style="position:static">${xe(c)}</h2>${h?`<p class="stl" style="position:static">${xe(h)}</p>`:""}`;let f=m.firstChild.offsetHeight,M=h?m.lastChild.offsetHeight+6:0,_=e==="project"?z0(n):[],I="";if(_.length){let L=(Ut.find(T=>T.def.id===_[0].section)||{}).def;I=`${xe((L?he(L.name):_e("skills")).trim())} ${_.map((T,D)=>`<span class="it"><button type="button" class="go" data-go="${xe(T.id)}">${xe(he(T.title).trim())}</button>${D<_.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let L=`<div class="fecha">${g}</div>${p?`<div class="posted">${p}</div>`:""}${I?`<div class="posted skl-tags">${I}</div>`:""}`;m.innerHTML=`<div class="meta" style="position:static">${L}</div>`;let T=m.firstChild.offsetHeight,D=a-13,F=D-T,w=H.section.def.skills?Yo(n).length:0,S="",B=0;w&&(S=`<span class="lbl">${xe(_e(Ro(ve,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${w}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,m.innerHTML=`<div class="relp" style="position:static">${S}</div>`,B=m.firstChild.offsetHeight);let ne=B?F-B-18:F,le=o.top+f+6,k=o.top+f+M+20,G=Nd(v,s,[a-k,a-o.top],m);m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]}</div>`;let z=G.length===1?k:o.top;if(G[G.length-1]&&z+m.firstChild.offsetHeight>ne-12){let Y=Nd(G.pop(),s,B?[a-z,ne-12-o.top]:[ne-12-z,ne-12-o.top],m);G.push(...Y),B&&Y.length===1&&G.push("")}let ie=0;if(B){z=G.length===1?k:o.top,m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]||""}</div>`;let Y=z+(G[G.length-1]?m.firstChild.offsetHeight:0)+18;ie=G[G.length-1]?Math.min(ne,Math.max(Math.round((o.top+a)/2)-10,Y)):o.top+4}G.forEach((Y,$)=>{let J=$===G.length-1,[j,ue]=l($,G.length);this.addPanel("txt",j+s+ue,($===0?`<h2 class="ttl" style="left:${j}px;top:${o.top}px;width:${s}px">${xe(c)}</h2>${h?`<p class="stl" style="left:${j}px;top:${le}px;width:${s}px">${xe(h)}</p>`:""}`:"")+`<div class="body" style="left:${j}px;top:${$===0?k:o.top}px;width:${s}px">${Y}</div>`+(J&&B?`<div class="relp" style="left:${j}px;top:${ie}px;width:${s}px">${S}</div>`:"")+(J?`<div class="meta" style="left:${j}px;top:${F}px;width:${s}px">${L}</div>`:""))})}else{let L=13+f+4,T=13+f+M+10,D=T+20,F=D+18+20;Nd(v,s,[355-F-14,327],m).forEach((S,B)=>{this.addPanel("txt",t,(B===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${xe(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${L}px;width:${s}px">${xe(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${T}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${D}px;width:${s}px">${p}</div>`:"")+`<div class="body" style="left:${i}px;top:${B===0?F:14}px;width:${s}px">${S}</div>`)})}m.remove()},addTeam(n){let e=n.team.map(T=>ve.posts.find(D=>D.id===T)).filter(Boolean),t=Bi(),i=t.top,s=355-t.bottom,r=t.side,o=Math.max(24,Math.min(36,t.gutter)),a=T=>String(T+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${xe(_e("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((T,D)=>`<li data-i="${D}"><b>${a(D)}</b><span><span class="nm">${xe(he(T.title).trim())}</span>${he(T.subtitle).trim()?`<i>${xe(he(T.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${xe(_e("with"))}</i> ${xe(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let p=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],v=r+p+o,m=v,f=i,M=0,_=0,I=v;e.forEach((T,D)=>{let F=g[D%g.length]*(e.length>12?.8:1),w=16;f+F+w>s&&f>i+1&&(m+=M+16,_++,f=i+(_%2?34:0),M=0);let S=el(T)&&T.published!==!1,B=document.createElement(S?"button":"div");B.className="face"+(S?" go":""),S&&(B.type="button",B.dataset.go=T.id),B.dataset.i=D,Object.assign(B.style,{left:m+"px",top:f+"px",width:F+"px",height:F+"px"});let ne=!T.thumb&&(qd(T).find(k=>k!==n)||qd(T)[0]),le=ne?` style="background:linear-gradient(var(--veil),var(--veil)),url('${xe(Mt(Zs(ne))).replace(/'/g,"%27")}') center/cover"`:"";B.innerHTML=(T.thumb?Pr(T.thumb,'alt="" draggable="false"'):`<span class="mono"${le}>${xe(Na(he(T.title)))}</span>`)+`<b class="n">${a(D)}</b>`,B.setAttribute("aria-label",he(T.title)),c.appendChild(B),M=Math.max(M,F),f+=F+w,I=Math.max(I,m+F)}),l.style.width=Math.ceil((e.length?I:r+p)+r)+"px";let L=(T,D)=>c.querySelectorAll(`[data-i="${T}"]`).forEach(F=>F.classList.toggle("on",D));c.querySelectorAll("[data-i]").forEach(T=>{["pointerenter","focus"].forEach(D=>T.addEventListener(D,()=>L(T.dataset.i,!0))),["pointerleave","blur"].forEach(D=>T.addEventListener(D,()=>L(T.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(T=>{let D=c.querySelector(`.face.go[data-i="${T.dataset.i}"]`);D&&(T.classList.add("go"),T.dataset.go=D.dataset.go)})},addForm(){let n=Bi(),{x:e,colW:t}=No("project"),i=n.gutter||40;this.addPanel("txt contact cform",e+t*2+i+e,`<div class="cbox" style="left:${e}px;top:${n.top}px;bottom:${n.bottom}px;width:${t*2+i}px;--cf-gap:${i}px">${iy("pnl")}</div>`),sy(ms.lastElementChild)},addContact(n){let e=Bi(),{width:t,x:i,colW:s}=No("project"),r=xe,o=(n.link||"").replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""),a=he(n.title).trim();a&&!/[.!?]$/.test(a)&&(a+=".");let l=he(n.subtitle).trim();this.addPanel("txt contact",t,`<div class="cbox" style="left:${i}px;top:${e.top}px;bottom:${e.bottom}px;width:${s}px"><h2 class="ttl">${r(a)}</h2>${l?`<p class="stl">${r(l)}</p>`:""}<div class="body">${oy(Sr(he(n.body)))}${n.link?`<p class="site"><a href="${r(n.link)}" target="_blank" rel="noopener">${r(o)}</a></p>`:""}</div></div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return tn.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){ms.querySelectorAll("video").forEach(n=>n.pause()),ms.innerHTML="",this.panels=[],tn.hidden=!0,tn.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},rubber(n){let e=Math.min(0,this.end),t=Wc,i=s=>t*(1-1/(s/t*.55+1));return n>0?i(n):n<e?e-i(e-n):n},push(n){let e=Math.min(0,this.end),t=this.finalpos+n;if(t>0||t<e){let i=t>0?t:t-e,s=!this.over||Math.sign(i)===Math.sign(this.over);this.finalpos=Math.max(e,Math.min(0,t)),this.ov+=i*12*(s?Math.pow(Math.max(0,1-Math.abs(this.over)/Wc),2):1)}else this.finalpos=t},step(){if(!this.open)return;let n=Math.min(0,this.end);if(this.dragging){let t=(dh-this.xprev)*1.5/(this.scale||1);this.finalpos+=t,this.vel=this.vel*.6+t*.4,this.x-=(this.x-this.finalpos)*xn(oe.easing),this.xprev=dh}else if(Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*xn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<n&&(this.finalpos=n),this.over||this.ov){let t=Math.min(.1,$o/_0),i=17,s=Math.exp(-i*t),r=this.over,o=this.ov,a=o+i*r;this.over=Math.max(-Wc,Math.min(Wc,(r+a*t)*s)),this.ov=(o-i*a*t)*s,Math.abs(this.over)<.2&&Math.abs(this.ov)<5&&(this.over=this.ov=0)}let e=Math.round(this.x+this.over);e!==this.tx&&(this.tx=e,ms.style.transform=`translateX(${e}px)`)}},Jt=document.createElement("div");Jt.id="postv";Jt.hidden=!0;Jt.setAttribute("role","dialog");Jt.setAttribute("aria-modal","true");document.body.appendChild(Jt);var cS=()=>bh(),Qs={open:!1,pushed:!1,keepHistory:!1,post:null,build(n,e){this.post=n,this.open=!0;let t=H.section.def,i=n.media.filter(h=>h&&h.src),s=xe,r=he(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let o=he(n.subtitle).trim(),a=[];a.push(`<div class="pv-bar"><span class="pv-sec">${s(he(t.name).trim())}</span><button type="button" class="pv-x" aria-label="${s(_e("close"))}"><span></span><span></span></button></div>`);let l=i[0]?i[0]:n.thumb?{src:n.thumb}:null;if(l&&a.push(this.media(l,"pv-hero"+(!i[0]&&ko(n)?" pv-logo":""))),e==="place"){let h=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");a.push(`<div class="pv-txt"><h1 class="pv-ttl">${s(r)}</h1>${o?`<p class="pv-stl">${s(o)}</p>`:""}`+(n.link?`<p class="pv-site"><a href="${s(n.link)}" target="_blank" rel="noopener">${s(h)}</a></p>`:"")+`<div class="pv-body pv-contact">${oy(Sr(he(n.body)))}</div></div>`+(zo.to?`<div class="pv-form">${iy("pv")}</div>`:""))}else{if(a.push(this.text(n,r,o,t)),t.skills&&a.push(this.relations(n)),e==="text"?i.slice(1).forEach(h=>a.push(this.media(h,"pv-full"))):a.push(this.gallery(i.slice(1))),t.skills||a.push(this.relations(n)),e!=="text"&&(n.team&&n.team.length||n.credits)&&a.push(this.team(n)),n.logos&&n.logos.length&&a.push(`<section class="pv-logos"><h2 class="pv-h">${s(_e("partners"))}</h2><div class="pv-lgrid">${n.logos.map(h=>`<span><img data-src="${s(h)}" alt=""></span>`).join("")}</div></section>`),n.link){let h=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,u=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");a.push(`<p class="pv-link"><span>${s(String(_e("visit")).replace(/\s*:\s*$/,""))}</span><a href="${s(h)}" target="_blank" rel="noopener">${s(u)} \u2197</a></p>`)}a.push(this.next(n))}Jt.innerHTML=`<div class="pv-page">${a.join("")}</div>`;let c=Jt.querySelector(".pv-form");if(c&&sy(c),this.wire(),Jt.hidden=!1,Jt.scrollTop=0,Jt.offsetWidth,Jt.classList.add("on"),document.body.classList.add("pv-open"),!this.pushed&&!Et)try{history.pushState({hcv:1},"",location.href),this.pushed=!0}catch{}},text(n,e,t,i){let s=xe,r=Sr(he(n.body)),o=r.split(/(?=<h3[\s>])/i),a=/^\s*<h3/i.test(o[0])?"":o.shift(),l=o.map(p=>{let g=/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(p.trim());return g?`<details class="pv-fold"><summary>${g[1]}</summary><div class="pv-body">${g[2]}</div></details>`:p}).join(""),c=n.tags.filter(p=>p!=="featured").map(p=>i.tags.find(g=>g.id===p)).filter(Boolean).map(p=>he(p.label)),h=[n.date,he(n.place)].filter(Boolean).join(" | "),u=z0(n),d="";if(u.length){let p=(Ut.find(g=>g.def.id===u[0].section)||{}).def;d=`<p class="pv-meta"><span>${s((p?he(p.name):_e("skills")).trim())}</span> ${u.map(g=>`<button type="button" class="go" data-go="${s(g.id)}">${s(he(g.title).trim())}</button>`).join(", ")}</p>`}return`<div class="pv-txt"><h1 class="pv-ttl">${s(e)}</h1>${t?`<p class="pv-stl">${s(t)}</p>`:""}`+(h?`<p class="pv-date">${s(h)}</p>`:"")+`<div class="pv-body">${a||""}</div>`+(l?`<div class="pv-folds">${l}</div>`:"")+(c.length?`<p class="pv-meta"><span>${s(_e("postedIn"))}</span> ${c.map(s).join(", ")}</p>`:"")+d+"</div>"},media(n,e){let t=xe,i=Dr(n.src),s=n.caption?he(n.caption).trim():"",r=s?`<figcaption>${t(s)}</figcaption>`:"";if(i==="youtube"||i==="vimeo"){let o=i==="youtube"?Ha(n.src):Va(n.src),a=i==="vimeo"&&o&&!ty(this.post,n.src),l=i==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:a?"":this.post&&this.post.thumb?Mt(this.post.thumb):"";return`<figure class="${e} pv-embed" data-kind="${i}" data-id="${t(o||"")}"><div class="pv-cover">${l?`<img src="${t(l)}" alt="">`:a?`<img data-vimeo="${t(o)}" alt="">`:""}<button type="button" class="play" aria-label="${t(_e("play"))}"></button><span class="brand">${i==="youtube"?"YouTube":"Vimeo"}</span></div>${r}</figure>`}return i==="video"?`<figure class="${e}"><video src="${t(Mt(n.src)+(/#t=/.test(n.src)?"":"#t=0.1"))}" controls playsinline preload="metadata"></video>${r}</figure>`:`<figure class="${e}"><img src="${t(Mt(n.src))}" alt="" loading="lazy" decoding="async">${r}</figure>`},gallery(n){let e=u=>Dr(u.src)==="image",t=[],i=xe,s=u=>`<div class="pv-row">${u.map(d=>`<img src="${i(Mt(d.src))}" alt="" loading="lazy" decoding="async">`).join("")}</div>`,r=["full","mat","pair","full","quad","full","big2","mat","full","pair"],o={pair:2,quad:4,big2:3},a=String(this.post.id||""),l=0;for(let u of a)l=l*31+u.charCodeAt(0)>>>0;let c=l%r.length,h=0;for(;h<n.length;){let u=n[h];if(!e(u)){t.push(this.media(u,"pv-full")),h++;continue}let d=r[c++%r.length],p=o[d]||1,g=n.slice(h,h+p);if(p>1&&!(g.length===p&&g.every(e))){t.push(this.media(u,"pv-full")),h++;continue}let v=g.map(f=>f.caption?he(f.caption).trim():"").filter(Boolean)[0]||"",m=v?`<figcaption>${i(v)}</figcaption>`:"";d==="mat"?t.push(this.media(u,"pv-mat")):d==="pair"?t.push(`<figure class="pv-grid">${s(g)}${m}</figure>`):d==="quad"?t.push(`<figure class="pv-grid">${s(g.slice(0,2))}${s(g.slice(2))}${m}</figure>`):d==="big2"?t.push(`<figure class="pv-grid"><img class="pv-one" src="${i(Mt(g[0].src))}" alt="" loading="lazy">${s(g.slice(1))}${m}</figure>`):t.push(this.media(u,"pv-full")),h+=p}return t.length?`<div class="pv-gal">${t.join("")}</div>`:""},relations(n){let e=Yo(n);if(!e.length)return"";let t=xe,i=Ro(ve,n).length>0;return`<section class="pv-rel"><h2 class="pv-h">${t(_e(i?"skillProjects":"together"))} <span>${e.length}</span></h2><div class="pv-tiles">`+e.map(s=>{let r=Zs(s),o=[s.date,he(s.place)].filter(Boolean).join(" | ");return`<button type="button" class="go pv-tile" data-go="${t(s.id)}">${r?Pr(r,'alt="" loading="lazy"'):`<span class="mono">${t(Na(he(s.title)))}</span>`}<span class="t">${t(he(s.title).trim())}</span>${o?`<span class="m">${t(o)}</span>`:""}</button>`}).join("")+"</div></section>"},team(n){let e=xe,t=(n.team||[]).map(i=>ve.posts.find(s=>s.id===i)).filter(Boolean);return`<section class="pv-team"><h2 class="pv-h">${e(_e("who"))}</h2><div class="pv-faces">`+t.map(i=>{let s=el(i)&&i.published!==!1,r=s?"button":"div";return`<${r} ${s?`type="button" class="go pv-face" data-go="${e(i.id)}"`:'class="pv-face"'}>${i.thumb?Pr(i.thumb,'alt="" loading="lazy"'):`<span class="mono">${e(Na(he(i.title)))}</span>`}<span class="t">${e(he(i.title).trim())}</span>${he(i.subtitle).trim()?`<span class="m">${e(he(i.subtitle).trim())}</span>`:""}</${r}>`}).join("")+"</div>"+(n.credits?`<p class="pv-with"><i>${e(_e("with"))}</i> ${e(n.credits)}</p>`:"")+"</section>"},next(n){let e=H.data&&H.data.list||[],t=e.indexOf(n);if(e.length<2||t<0)return"";let i=e[(t+1)%e.length],s=Zs(i),r=xe;return`<button type="button" class="go pv-next" data-go="${r(i.id)}"><span class="l">${r(_e("nextProject"))} \u2192</span><span class="t">${r(he(i.title).trim())}</span>${s?Pr(s,'alt="" loading="lazy"'):""}</button>`},wire(){Jt.querySelector(".pv-x").addEventListener("click",()=>Ms()),Jt.querySelectorAll(".pv-row img").forEach(n=>{let e=()=>{n.naturalWidth&&(n.style.flexGrow=(n.naturalWidth/n.naturalHeight).toFixed(3))};n.addEventListener("load",e),n.complete&&e()}),Jt.querySelectorAll("img[data-vimeo]").forEach(n=>{let e=this.post&&this.post.thumb?Mt(this.post.thumb):"";ey(n.dataset.vimeo).then(t=>{t||e?n.src=t||e:n.remove()})}),Jt.querySelectorAll("img").forEach(n=>n.addEventListener("error",()=>{let e=n.closest("figure.pv-full, figure.pv-mat");e&&!e.classList.contains("pv-hero")?e.remove():n.style.visibility="hidden"})),Jt.querySelectorAll(".pv-lgrid img[data-src]").forEach(n=>ly(n.dataset.src).then(e=>{n.src=e.src,n.classList.toggle("raw",!!e.raw)})),Jt.querySelectorAll(".pv-embed").forEach(n=>n.querySelector(".play").addEventListener("click",()=>{let e=n.dataset.kind,t=n.dataset.id,i=document.createElement("iframe");i.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&playsinline=1&rel=0`:Ih(t,"autoplay=1&title=0&byline=0&portrait=0"),i.allow="autoplay; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.title=e==="youtube"?"YouTube":"Vimeo",n.querySelector(".pv-cover").replaceWith(i)}))},close(){if(this.open){if(this.open=!1,Jt.querySelectorAll("video").forEach(n=>n.pause()),Jt.classList.remove("on"),document.body.classList.remove("pv-open"),setTimeout(()=>{this.open||(Jt.hidden=!0,Jt.innerHTML="")},420),this.keepHistory){this.keepHistory=!1;return}if(this.pushed){this.pushed=!1;try{history.back()}catch{}}}}};Jt.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Qs.keepHistory=!0,sl(e.dataset.go),Qs.keepHistory=!1)});Jt.addEventListener("keydown",n=>{n.code==="Escape"&&Ms()});var Id=new Map;function ly(n){if(Id.has(n))return Id.get(n);let e=Yi(n).then(t=>{let i=Math.min(1,480/Math.max(t.naturalWidth,t.naturalHeight)),s=Math.max(1,Math.round(t.naturalWidth*i)),r=Math.max(1,Math.round(t.naturalHeight*i)),o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(t,0,0,s,r);let l;try{l=a.getImageData(0,0,s,r)}catch{return{src:Mt(n),raw:!0}}let c=l.data,h=S=>(.2126*c[S]+.7152*c[S+1]+.0722*c[S+2])/255,u=0,d=0,p=0,g=S=>{u++,c[S+3]<40?d++:p+=h(S)};for(let S=0;S<s;S++)g(S*4),g(((r-1)*s+S)*4);for(let S=0;S<r;S++)g(S*s*4),g((S*s+s-1)*4);let v=d>u*.5,m=v?0:p/Math.max(1,u-d),f=0,M=0;if(v){for(let S=0;S<c.length;S+=16)c[S+3]>128&&(f+=h(S),M++);f=M?f/M:0}let _=v?f<.5?1:0:m,I=Math.max(.25,Math.max(_,1-_));for(let S=0;S<c.length;S+=4){let B=c[S+3]/255,ne=h(S),le=(Math.max(c[S],c[S+1],c[S+2])-Math.min(c[S],c[S+1],c[S+2]))/255,k=Math.min(1,Math.max(Math.abs(ne-_),le*.8)/I);k=k<.08?0:Math.min(1,(k-.08)*1.35),c[S]=c[S+1]=c[S+2]=255,c[S+3]=Math.round(255*k*B)}a.putImageData(l,0,0);let L=s,T=r,D=-1,F=-1;for(let S=0;S<r;S++)for(let B=0;B<s;B++)c[(S*s+B)*4+3]>24&&(B<L&&(L=B),B>D&&(D=B),S<T&&(T=S),S>F&&(F=S));if(D<L)return{src:o.toDataURL("image/png")};let w=document.createElement("canvas");return w.width=D-L+1,w.height=F-T+1,w.getContext("2d").drawImage(o,-L,-T),{src:w.toDataURL("image/png")}}).catch(()=>({src:Mt(n),raw:!0}));return Id.set(n,e),e}function Nd(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let o=[],a=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){a=null,d.textContent.trim()&&o.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){a=null;return}d.nodeType===3&&!d.textContent.trim()&&!a||(a||(a=document.createElement("p"),o.push(a)),a.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,p=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,p&&s.appendChild(p)};for(let d of o){let p=d.cloneNode(!0);if(s.appendChild(p),s.offsetHeight<=h())continue;if(s.removeChild(p),d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}if(d.nodeName==="UL"||d.nodeName==="OL"){let f=+(d.getAttribute("start")||1),M=d.cloneNode(!1),_=0;s.appendChild(M);for(let I of[...d.children]){let L=I.cloneNode(!0);M.appendChild(L),_++,!(s.offsetHeight<=h())&&(M.children.length===1&&[...s.children].every(T=>T===M||T.nodeName==="H3")||(M.removeChild(L),u(),M=d.cloneNode(!1),d.nodeName==="OL"&&M.setAttribute("start",String(f+_-1)),s.appendChild(M),M.appendChild(L)))}continue}let g=[];(function f(M,_){M.childNodes.forEach(I=>{I.nodeType===3?I.textContent.split(/(\s+)/).forEach(L=>L&&g.push({w:L,path:_})):f(I,[..._,I])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let m=({w:f,path:M})=>{let _=v;for(let I of M){let L=_.lastChild;(!L||L.nodeType!==1||L.dataset.src!==I.outerHTML)&&(L=I.cloneNode(!1),L.dataset.src=I.outerHTML,_.appendChild(L)),_=L}_.appendChild(document.createTextNode(f))};for(let f of g)if(m(f),s.offsetHeight>h()){let M=function _(I){return I.lastChild&&I.lastChild.nodeType===1?_(I.lastChild):I}(v);M.removeChild(M.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&m(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var dh=0,gs=null;tn.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe, input, textarea, select, label, button")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(gs={id:n.pointerId,x:n.clientX,y:n.clientY},dh=n.clientX)});tn.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(gs||Xe.dragging)){Ga();return}if(dh=n.clientX,!gs||n.pointerId!==gs.id||Xe.dragging)return;let e=n.clientX-gs.x,t=n.clientY-gs.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Xe.dragging=!0,Xe.xprev=gs.x,Xe.finalpos=Xe.x,Xe.vel=0;try{tn.setPointerCapture(n.pointerId)}catch{}tn.classList.add("grabbing")}});tn.addEventListener("click",n=>{Xe.justDragged&&(n.preventDefault(),n.stopPropagation(),Xe.justDragged=!1)},!0);tn.addEventListener("wheel",n=>{if(n.preventDefault(),!Xe.open||Xe.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;Xe.push(-e*t/(Xe.scale||1))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var Ga=()=>{Xe.dragging&&(Xe.justDragged=!0,setTimeout(()=>{Xe.justDragged=!1},0),Xe.finalpos+=(Xe.vel||0)*10),Xe.vel=0,gs=null,Xe.dragging=!1,tn.classList.remove("grabbing")};tn.addEventListener("pointerup",Ga);tn.addEventListener("pointercancel",Ga);tn.addEventListener("lostpointercapture",n=>{n.target===tn&&Ga()});window.addEventListener("pointerup",()=>{(gs||Xe.dragging)&&Ga()});Nf.addEventListener("pointerdown",()=>Ms());tn.addEventListener("click",n=>{if(!Xe.open||Xe.justDragged||n.target.closest(".pnl, a, button, iframe, video, input"))return;let e=tn.querySelectorAll("#strip .pnl");if(!e.length)return;let t=e[0].getBoundingClientRect(),i=e[e.length-1].getBoundingClientRect();(n.clientX>i.right+4||n.clientX<t.left-4)&&Ms()});function il(n=-1,e=0){w0(),n===-1&&(n=H.currentSection||0),Ai(),n!==H.currentSection&&Of(),H.currentSection=n,H.resetData(),H.selected=e,Ch(),wf(),Ph();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}rr("#"+H.section.def.id,he(H.section.def.name).trim())}function cy(){Ai(),H.selected=0,Ch(),j0()}function hy(n){(n==="newer"?H.data.newer():H.data.older())&&cy()}function hS(n){H.data.changeCategory(n),Y0.textContent=H.data.currentCatName,cy(),Ph()}function Zo(n){Ai(),H.selected=n,Do()}var qg=0;function sl(n){let e=ve.posts.find(h=>h.id===n),t=e?Ut.findIndex(h=>h.def.id===e.section):-1;if(t<0||!bn)return;w0(),Ai();let i=t!==H.currentSection;i&&Of(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory(s.categoryList.some(h=>h.id==="")?"":s.tagOf(e));let o=s.list.indexOf(e);if(o<0)return;let a=o<s.first||o>=s.last;if(a){let h=s.per;s.first=Math.floor(o/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!a&&Ie){Zo(l);return}H.selected=l,Ch(),wf(),Ph();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}rr("#"+H.section.def.id,he(H.section.def.name).trim());let c=++qg;Wo(.5,()=>{c===qg&&H.data===s&&s.posts[l]===e&&Zo(l)})}ms.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),sl(e.dataset.go))});var uS=(n,e=H.section&&H.section.def)=>e?n&&e.open==="focus3d"&&((e.tags||[]).some(t=>t.page&&(n.tags||[]).includes(t.id))||!ko(n))?"strip":e.open:"",Nh=()=>uS(H.data&&H.data.posts[H.selected]);function Do(){if(!Ie||!H.data.posts[H.selected])return;let n=Nh();rl(null),kf(null),Ai(),H.postOpen=!0,(n==="strip"||n==="focus3d")&&cS()?(Qs.build(H.data.posts[H.selected],H.section.def.card),jo.classList.add("hidden"),ji=!1,sn.classList.remove("dragging"),jn=!0,Bo(H.selected)):n==="strip"?(Nf.hidden=!1,Xe.build(H.data.posts[H.selected],H.section.def.card),jo.classList.add("hidden"),ji=!1,sn.classList.remove("dragging"),jn=!0,Bo(H.selected)):(jn=!0,Bo(H.selected),Ie.openPost3D()),Nr(),Cf(H.data.posts[H.selected])}function Ms(){H.postOpen&&(H.postOpen=!1,Qs.open?(Qs.close(),jo.classList.remove("hidden")):Xe.open?(Xe.close(),Nf.hidden=!0,jo.classList.remove("hidden")):Ie&&Ie.closePost3D(),Nr(),Cf(null))}function Ai(){H.postOpen&&Ms()}function dS(){b0(!oe.animationMode),Q0(),Ie&&Ie.resetPostPosition(),jn=!0}var ws=oe.cameraDistanceProportion,nr=()=>((Es()||{}).def||{}).layout==="map",fS=()=>nr()?60:oe.cameraZoomMin;function Df(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),uy())}function Uf(){oe.cameraDistanceProportion>fS()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),uy())}function uy(){(nr()||li())&&(H.cameraY=za()),q0()}function Of(){oe.cameraDistanceProportion!==ws&&(oe.cameraDistanceProportion=ws,Rh())}var Xg=!1;function dy(n){if(!bn)return;Xg||(Xg=!0,ef(),K0=setTimeout(uh,6e3));let e=H.postOpen&&Xe.open,t=H.postOpen&&!Xe.open;switch(n.code){case"ArrowLeft":ps("ArrowLeft"),e?Xe.action("LEFT"):(Ai(),Ad("PREVIOUS"),t&&Do());break;case"ArrowRight":ps("ArrowRight"),e?Xe.action("RIGHT"):(Ai(),Ad("NEXT"),t&&Do());break;case"ArrowUp":ps("ArrowUp"),e||Uw();break;case"ArrowDown":ps("ArrowDown"),e||Ow();break;case"Tab":ps("Tab"),e?(Ms(),Ad("NEXT"),Do()):il((H.currentSection+1)%Ut.length);break;case"KeyK":ar.classList.contains("open")?uh():ef();break;case"KeyA":ps("KeyA"),dS();break;case"Equal":case"NumpadAdd":ps("Equal"),e||Uf();break;case"Minus":case"NumpadSubtract":ps("Minus"),e||Df();break;case"Space":ps("Space"),Ie&&Ie.checkPostSelected(),H.postOpen?Ms():Do();break;case"Escape":Ai();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!wt||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||n.target.closest&&n.target.closest("input, textarea, select, [contenteditable]")||dy(n)});var Yg=new Tc,jg=new it;function fh(n,e){if(!Ss||!Ie)return null;jg.set(n/Ht*2-1,-(e/Ot)*2+1),Yg.setFromCamera(jg,Ln);let t=Yg.intersectObjects([...Es().blockers,...Ie.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:pS(n,e)||(t?t.object.userData:null)}var $c=new U;function pS(n,e){if(!Ie||!Ie.net)return null;let t=null,i=14;for(let s of Ie.net.hits){if(!s.visible)continue;s.getWorldPosition($c).project(Ln);let r=($c.x+1)/2*Ht-n,o=(1-$c.y)/2*Ot-e,a=Math.hypot(r,o);a<i&&$c.z<1&&(i=a,t=s.userData)}return t}var Fn=null,Ei=null,tf=0,nf=0;sn.addEventListener("pointerdown",n=>{if(!bn||Fn!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Xi.size>0)return;Js=tf=n.clientX,Ks=nf=n.clientY;let e=fh(n.clientX,n.clientY);Ai(),Ei=e&&e.post?e:null,Ei&&Ei.face==="back"&&(Ei.post.view.focus(Ei.post.id_),jn=!0),Fn=n.pointerId,sn.setPointerCapture(n.pointerId),sn.classList.add("dragging"),Qc=Js,eh=Ks,jn=!1,ji=!0});function kr(n,e=!1){if(n.pointerId===Fn){if(Fn=null,sn.classList.remove("dragging"),ji&&(jn=!0,ji=!1,li()&&(H.degreeCamera=Mf(H.degreeCamera),H.cameraY=za())),e){Ei=null;return}if(Ei&&Ei.face==="front"&&Math.hypot(n.clientX-tf,n.clientY-nf)<6){let t=fh(n.clientX,n.clientY);t&&t.post===Ei.post&&Zo(t.post.id_)}else if(!Ei&&Math.hypot(n.clientX-tf,n.clientY-nf)<6){let t=fh(n.clientX,n.clientY);t&&t.netNode?V0(t.netNode,n.clientX,n.clientY):Sh()}Ei=null}}sn.addEventListener("pointerup",kr);sn.addEventListener("pointercancel",n=>kr(n,!0));sn.addEventListener("lostpointercapture",n=>{n.pointerId===Fn&&kr(n,!0)});window.addEventListener("pointerup",n=>{Fn!==null&&n.pointerId===Fn&&n.target!==sn&&kr(n,!0)});window.addEventListener("blur",()=>{Fn!==null&&kr({pointerId:Fn},!0),Ga()});var Dd=!1,Ca=null,Da=null,Uo=null;function kf(n){Uo!==n&&(Uo&&Uo.hoverBack(!1),Uo=n,n&&n.hoverBack(!0))}var fy=()=>bh()&&bn&&Ie&&["carousel","spiral"].includes(Ie.def.layout);function Bf(){return H.postOpen||!Ie?null:Da&&Da.view===Ie?Da:fy()?(Ie.checkPostSelected(),Ie.postViews[H.selected]||null):null}var mS=0;function gS(){++mS%6===0&&fy()&&rl(Bf())}function rl(n){Ca!==n&&(Ca&&Ca.hover(!1),Ca=n,n&&n.hover(!0))}sn.addEventListener("pointerleave",()=>{Da=null,rl(Bf()),kf(null)});sn.addEventListener("pointermove",n=>{if(Fn!==null&&n.pointerId===Fn&&n.pointerType==="mouse"&&n.buttons===0){kr(n,!0);return}Fn!==null&&n.pointerId!==Fn||(Js=n.clientX,Ks=n.clientY,Fn===null&&n.pointerType==="mouse"&&!Dd&&(Dd=!0,requestAnimationFrame(()=>{Dd=!1;let e=fh(Js,Ks);sn.classList.toggle("hover",!!(e&&e.post)),Da=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,rl(Bf()),kf(e&&e.post&&e.face==="back"&&e.post.bhi&&!H.postOpen?e.post:null),e&&e.netNode&&!H.postOpen?V0(e.netNode,Js,Ks):Sh()})))});var Zg=0,Xi=new Map,Ra=null,py=()=>{let[n,e]=[...Xi.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!wt||Xe.open||!Xi.size&&n.target!==sn||(Xi.set(n.pointerId,{x:n.clientX,y:n.clientY}),Xi.size===2&&(Fn!==null&&kr({pointerId:Fn},!0),Ra={last:py()}))});window.addEventListener("pointermove",n=>{if(!Xi.has(n.pointerId)||(Xi.set(n.pointerId,{x:n.clientX,y:n.clientY}),!Ra||Xi.size<2||!bn))return;let e=py(),t=e/Ra.last;t>1.15?(Uf(),Ra.last=e):t<1/1.15&&(Df(),Ra.last=e)});var yS=n=>{Xi.delete(n.pointerId),Xi.size<2&&(Ra=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,yS));sn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!bn||e-Zg<220||!n.deltaY||e-J0<1400||(Zg=e,n.deltaY<0?Uf():Df())},{passive:!1});window.addEventListener("resize",()=>{let n=xs(),e=Ss&&Ie?ei||nl():null;X0(),q0(),Nr(),$0(e),xs()!==n&&Ie&&Ie.retexture(),Sy(),sf(),Xe.open&&(Sf(),clearTimeout(Xe.relayout),Xe.relayout=setTimeout(()=>{Xe.open&&Xe.post&&JSON.stringify(No("project"))!==Xe.geomKey&&(Xe.build(Xe.post,H.section.def.card),Nr())},250))});function Jg(){if(ve.settings.negativeToggle!==!1){if(_n=!_n,Xo()&&xh(),!Et)try{localStorage.setItem("hc-neg",(_n?"1":"0")+(Xo()?"@"+Ir:""))}catch{}E0()}}(()=>{let n=document.getElementById("logo");if(!n)return;let e=0,t=0,i=Math.atan2(.38,-1),s=i,r=2.3,o=i,a=2.3,l=()=>{let d=n.offsetWidth/2;if(!d)return;if(a>2.02){n.style.webkitMaskImage=n.style.maskImage="";return}let p=d+Math.cos(o)*a*d,g=d+Math.sin(o)*a*d,v=Math.max(0,Math.min(1,1-a/.28)),m=d-v*Math.max(2,d*.085);n.style.webkitMaskImage=n.style.maskImage=`radial-gradient(circle ${d}px at ${p.toFixed(2)}px ${g.toFixed(2)}px, transparent ${(m-.6).toFixed(2)}px, #000 ${(m+.6).toFixed(2)}px)`},c=d=>{o=s=i,a=r=d,l()},h=()=>{let d=n.getBoundingClientRect(),p=d.width/2;if(!p)return;let g=e-(d.left+p),v=t-(d.top+p),m=Math.hypot(g,v);m>.5&&(i=Math.atan2(v,g));let f=m/p,M=Math.max(0,Math.min(1,(5.5-f)/4.5)),_=M*M*(3-2*M);c(f<=1?.62*f:.62+1.68*(1-_))},u=!1;window.addEventListener("pointermove",d=>{d.pointerType!=="mouse"||!n.classList.contains("toggle")||(e=d.clientX,t=d.clientY,u||(u=!0,requestAnimationFrame(()=>{u=!1,h()})))},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>c(2.3)),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&(i=Math.atan2(.38,-1),c(.55))}),n.addEventListener("blur",()=>c(2.3))})();["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Jg),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Jg())}))});var de=null,Ff=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function vS(){let n=(ve.settings.showreel||"").trim();if(!de){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i class="tri"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),de={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>vy()),de.x.addEventListener("click",qc),i.querySelector(".scrim").addEventListener("click",qc),de.snd.addEventListener("click",()=>my(!de.muted)),window.addEventListener("keydown",s=>{if(de.open){if(s.code==="Escape")s.preventDefault(),qc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(o=>o.offsetParent);if(r.length){let o=r.indexOf(document.activeElement);s.shiftKey&&o<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&o===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!de.player||s.source!==de.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==de.muted&&(de.muted=r.info.muted,Jo())})}de.btn.hidden=!n,de.btn.setAttribute("aria-label","Showreel"),de.x.setAttribute("aria-label",_e("close")),n!==de.src&&(de.open&&qc(!0),de.src=n,de.kind=n?Dr(n):"",de.vid.innerHTML="",de.player=null);let e=de.kind==="youtube"?`https://www.youtube.com/watch?v=${Ha(n)}`:de.kind==="vimeo"?`https://vimeo.com/${Va(n)}`:"";de.ext.hidden=!e,e&&(de.ext.href=e,de.ext.textContent=(de.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Jo()}function Jo(){de&&(de.snd.innerHTML=Ff(!de.muted)+`<span>${_e(de.muted?"soundOn":"soundOff")}</span>`,de.snd.setAttribute("aria-pressed",String(!de.muted)))}function ph(n,e=[]){let t=de.player;if(!(!t||!t.contentWindow)){if(de.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(de.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function my(n){de.muted=n,Jo(),de.kind==="video"?de.player&&(de.player.muted=n,n||(de.player.volume=1)):(ph(n?"mute":"unMute"),n||ph("setVolume",[100]))}function xS(){if(!(!de||!de.src||de.open)){if(de.open=!0,de.last=document.activeElement,de.player)de.kind==="video"?de.player.play().catch(()=>{}):ph("playVideo");else{let n=de.src,e=de.kind;if(e==="video"){let t=document.createElement("video");t.src=Mt(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==de.muted&&(de.muted=t.muted,Jo())}),de.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Ha(n):Va(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:Ih(i,"autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"),t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),de.muted||my(!1)}),de.player=t}else{let t=document.createElement("img");t.src=Mt(n),t.alt="",de.player=t}de.muted=!0,Jo(),de.vid.appendChild(de.player)}de.snd.hidden=!/^(youtube|vimeo|video)$/.test(de.kind),de.box.hidden=!1,de.btn.setAttribute("aria-expanded","true"),de.box.offsetWidth,de.box.classList.add("on"),setTimeout(()=>{de.open&&de.x.focus({preventScroll:!0})},60)}}function qc(n){!de||!de.open||(de.open=!1,de.btn.setAttribute("aria-expanded","false"),de.kind==="video"?de.player&&de.player.pause():ph("pauseVideo"),de.box.classList.remove("on"),clearTimeout(de.t),de.t=setTimeout(()=>{de.open||(de.box.hidden=!0)},n===!0?0:650),de.last&&de.last.focus&&n!==!0&&de.last.focus({preventScroll:!0}))}var y=null,La=["white","grey","accent","source"],gy=8;function _S(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},ve.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((o,a)=>o+a,0);for(let o=0;o<i.length;o++)if((r-=s[o])<0)return i[o];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(La,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function bS(){if(y)return;let n=document.getElementById("home-band");if(!n)return;let e=_S(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>sf()).observe(t),y={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,round:e.shape!=="square",color:La.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(gy,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},y.octx=y.off.getContext("2d",{willReadFrequently:!0}),y.gl=HS(t),y.gl&&(y.interval=1e3/60),y.raw=document.createElement("canvas"),y.rctx=y.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:Mt(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),y.video=a}else{let a=m=>m&&!/^(https?:|data:)/.test(m)&&/\.(jpe?g|png|webp)$/i.test(m),l=ve.sections.find(m=>m.visible&&m.card==="image"&&!m.skills)||{},c=l.defaultTag||"featured",h=m=>Math.max(0,...(String(m.date||"").match(/\d{4}/g)||[]).map(Number)),u=m=>(m.media||[]).map(f=>f&&f.src).filter(f=>a(f)&&f!==m.thumb),d=ve.posts.filter(m=>m.published!==!1&&m.section===l.id&&(u(m).length||a(m.thumb))).map(m=>({p:m,k:((m.tags||[]).includes(c)?1e4:0)+h(m)+Math.random()*.5})).sort((m,f)=>f.k-m.k).slice(0,10).map(m=>m.p),p=m=>/screen|capture|schema|sch[eé]ma|plan|diagram|logo|affiche|poster/i.test(m.split("/").pop()),g=m=>{let f=u(m),M=f.filter(_=>!p(_)).length?f.filter(_=>!p(_)):f;return M.length?M[Math.floor(Math.random()*M.length)]:m.thumb},v=[...new Set(d.map(g))].sort(()=>Math.random()-.5);y.pics=v.map(m=>{let f=new Image,M=mf(m);return f.decoding="async",M!==m&&(f.onerror=()=>{f.onerror=null,f.src=Mt(m)}),f.src=Mt(M),f})}if(MS(e.controls!==!1),ol()&&Or()&&!/[?&]p=/.test(location.search)&&!Wa.matches&&!(Et&&Et.start)&&!document.getElementById("hc-intro")){let a=performance.now(),l=()=>{!wt&&!y.reelOn&&!y.cam&&!y.userReel&&!y.reelRefused&&Or()&&ll(!0)},c=setInterval(()=>{(Ur||performance.now()-a>6e3)&&(clearInterval(c),setTimeout(l,500))},150)}let r=document.getElementById("home-langs"),o=document.getElementById("home-ctl");r&&o?o.insertBefore(r,document.getElementById("home-about")):r&&document.getElementById("home").appendChild(r),sf()}var Ua={about:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 8.8v5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="10" cy="6.3" r="1.05" fill="currentColor"/></svg>',video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function MS(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(y&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    ${n?"":`<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${Ua.shot}<span></span></button>`}
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden><span class="lbl"></span><b class="ic">?</b></button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button><button type="button" id="home-snd" aria-pressed="false" hidden><b class="ic"></b></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${Ua.faders}</b><span class="lbl"></span></button>`:"")+`<button type="button" id="home-about" aria-expanded="false" hidden><b class="ic">${Ua.about}</b></button><figure id="home-pitch" hidden><img alt="" decoding="async"><figcaption><p></p></figcaption></figure>`;let o=document.getElementById("home-band"),a=o.querySelector(".lg");a?a.after(r):o.appendChild(r),n&&AS(e,i,r),DS(e),r.querySelector("#home-reel").addEventListener("click",()=>{y.reelOn?xi():vy()}),r.querySelector("#home-snd").addEventListener("click",()=>Hf(!y.sound));let l=r.querySelector("#home-about"),c=r.querySelector("#home-pitch"),h=u=>{if(u){mh(c),c.hidden=!1,c.offsetWidth;let d=r.getBoundingClientRect().top,p=window.innerHeight-20-d-c.offsetHeight;c.style.setProperty("--y",Math.max(-d+20,Math.min(l.offsetTop,p))+"px")}c.classList.toggle("on",u),l.classList.toggle("on",u),l.setAttribute("aria-expanded",String(u))};l.addEventListener("click",()=>Ry()),e.addEventListener("pointerdown",u=>{if(c.classList.contains("on")&&!u.target.closest("#home-about")&&h(!1),!u.target.closest("#home-langs")){let d=document.getElementById("home-langs");d&&d.classList.remove("open")}}),document.querySelectorAll("#hv-src button").forEach(u=>u.addEventListener("click",()=>{u.dataset.src==="cam"&&!y.cam?by():u.dataset.src==="video"&&y.cam&&Dh()})),document.getElementById("hv-shot").addEventListener("click",ES),document.getElementById("hv-words").addEventListener("keydown",u=>{u.stopPropagation(),u.key==="Enter"&&(u.preventDefault(),u.target.blur())}),s.querySelector("#story-btn").addEventListener("click",()=>yh()),gh(),al()}function al(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(y&&y.cam);document.querySelectorAll("#hv-src button").forEach(v=>{let m=v.dataset.src==="cam"===e;v.setAttribute("aria-pressed",String(m)),v.classList.toggle("on",m),v.textContent=_e(v.dataset.src==="cam"?"hv_cam":y&&y.video?"hv_video":"hv_slides")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",_e("hv_src"));let i=!!(y&&y.panel),s=document.getElementById("hv-words");s.hidden=!i&&!e,s.placeholder=_e("hv_words"),s.setAttribute("aria-label",_e("hv_words"));let r=document.getElementById("hv-shot");r.hidden=!i&&!e,r.setAttribute("aria-label",_e("hv_shot")),r.querySelector("span").textContent=_e(i?"hv_shot":"photo");let o=document.querySelector("#hv-panel .priv");o&&(o.textContent=_e("hv_private"));let a=n.querySelector("#story-btn");a.setAttribute("aria-label",_e("story")),a.querySelector(".lbl").textContent=_e("story");let l=document.getElementById("home-about"),c=document.getElementById("home-pitch"),h=zf();l&&(l.hidden=!h,mh(c,!1),l.setAttribute("aria-label",h));let u=document.querySelector("#hv-toggle .lbl");u&&(u.textContent=_e("params"));let d=document.getElementById("home-reel");d.hidden=!(ve.settings.showreel||"").trim();let p=!!(y&&y.reelOn);d.setAttribute("aria-pressed",String(p)),d.classList.toggle("on",p),d.setAttribute("aria-label",p?_e("stop")+" : Showreel":"Showreel"),d.querySelector("span").textContent=p?_e("stop"):"Showreel";let g=document.getElementById("home-snd");if(g&&!d._rwObs&&window.ResizeObserver&&(d._rwObs=new ResizeObserver(()=>{d.offsetWidth&&g.style.setProperty("--rw",d.offsetWidth+"px")}),d._rwObs.observe(d)),g){g.hidden=!p,p&&requestAnimationFrame(()=>g.style.setProperty("--rw",d.offsetWidth+"px"));let v=!!(y&&y.sound);g.querySelector(".ic").innerHTML=Ff(v),g.classList.toggle("on",v),g.setAttribute("aria-pressed",String(v)),g.setAttribute("aria-label",_e(v?"soundOff":"soundOn")),g.title=_e(v?"soundOff":"soundOn")}}var Kg=0,zf=()=>he((ve.settings.home||{}).sub||{}).replace(/\s*\n\s*/g," ").trim();function wS(){let n=ve.sections.find(s=>s.visible&&s.card==="image"&&!s.skills)||{},e=n.defaultTag,t=s=>s.published!==!1&&s.section===n.id&&s.thumb&&/\.(jpe?g|png|webp)$/i.test(s.thumb),i=ve.posts.filter(s=>t(s)&&(!e||(s.tags||[]).includes(e)));return(i.length?i:ve.posts.filter(t)).map(s=>Mt(s.thumb))}function mh(n,e=!0){if(n.querySelector("p").textContent=zf(),!e)return;let t=wS(),i=n.querySelector("img");if(t.length){let s=t[Math.floor(Math.random()*t.length)];t.length>1&&s===n.dataset.last&&(s=t[(t.indexOf(s)+1)%t.length]),n.dataset.last=s,i.src=s,i.hidden=!1}else i.hidden=!0}var qt=null,ln=null;function SS(){if(!qt){qt=document.createElement("button"),qt.type="button",qt.id="about-btn",qt.className="ui",qt.setAttribute("aria-expanded","false"),qt.innerHTML=`<b class="ic">${Ua.about}</b>`,ln=document.createElement("figure"),ln.id="about-card",ln.className="ui",ln.hidden=!0,ln.innerHTML='<img alt="" decoding="async"><figcaption><p></p></figcaption>',document.body.append(qt,ln);let e=t=>{t&&(mh(ln),ln.hidden=!1,Ko(),ln.offsetWidth),ln.classList.toggle("on",t),qt.classList.toggle("on",t),qt.setAttribute("aria-expanded",String(t))};qt.addEventListener("click",()=>Ry())}let n=zf();qt.hidden=!n,qt.setAttribute("aria-label",n),mh(ln,!1),Ko()}function Ko(){if(!qt)return;let n=de&&de.btn&&!de.btn.hidden?de.btn:null,e=document.getElementById("lang-sq"),t=e&&!e.hidden;if(!Hi()){let s=n?n.offsetTop:Math.round(cn.offsetTop+cn.offsetHeight+16),r=n?n.offsetLeft+n.offsetWidth+8:cn.offsetLeft+2;qt.style.top=s+"px",qt.style.left=r+"px",qt.hidden||(r+=qt.offsetWidth+8),t&&(e.style.top=s+"px",e.style.left=r+"px"),ln.hidden||(ln.style.left=cn.offsetLeft+2+"px",ln.style.top=s+qt.offsetHeight+8+"px");return}let i=n?n.offsetTop+n.offsetHeight+8:Math.round(cn.offsetTop+cn.offsetHeight+(Hi()?26:16));if(t&&(e.style.top=i+"px",e.style.left=cn.offsetLeft+2+"px",i+=qt.offsetHeight+8),qt.style.top=i+"px",qt.style.left=cn.offsetLeft+2+"px",!ln.hidden){let s=Hi(),r=cn.offsetLeft+2;if(s){let o=Math.max(16,Math.min(i,Ot-20-ln.offsetHeight));ln.style.left=r+qt.offsetWidth+12+"px",ln.style.top=o+"px"}else ln.style.left=r+"px",ln.style.top=i+qt.offsetHeight+8+"px"}}function Oa(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(Kg),t.textContent=n||"",t.hidden=!n,n&&e&&(Kg=setTimeout(()=>{t.hidden=!0},e)))}async function ES(){if(!y||y.cam&&y.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(y.cell,y.floor),o=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,y.W)))),a=Math.ceil(n/o),l=Math.ceil(e/o),c={ctx:y.ctx,W:y.W,H:y.H,ow:y.off.width,oh:y.off.height,lo:y.lo,hi:y.hi};try{if(y.ctx=i,y.W=n,y.H=e,y.off.width=y.raw.width=a,y.off.height=y.raw.height=l,!My(Wa.matches?0:(performance.now()-y.t0)/1e3))return;y.octx.globalAlpha=1,y.octx.drawImage(y.raw,0,0);let et=null;try{et=y.octx.getImageData(0,0,a,l).data}catch{}et?wy(et,a,l,o):af(a,l,o)}finally{y.ctx=c.ctx,y.W=c.W,y.H=c.H,y.off.width=y.raw.width=c.ow,y.off.height=y.raw.height=c.oh,y.lo=c.lo,y.hi=c.hi,y.fresh=!0}let h=i.createLinearGradient(0,0,0,230);h.addColorStop(0,"rgba(11,11,11,.9)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,230);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let d=document.getElementById("hv-words"),p=(d?d.value:"").replace(/\s+/g," ").trim().toUpperCase(),g=ve.settings,v=Yn(g,"title"),m=Yn(g,"sig2"),f=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),M=getComputedStyle(f),_=et=>`${M.fontStyle==="italic"?"italic ":""}${M.fontWeight} ${et}px ${M.fontFamily}`,I=et=>`${v.italic?"italic ":""}${v.weight||600} ${et}px ${v.css}`,L=et=>`${m.italic?"italic ":""}${m.weight||500} ${et}px ${m.css}`;try{await Promise.all([document.fonts.load(I(80)),document.fonts.load(L(30)),document.fonts.load(_(96))])}catch{}let T=72,D=70,F=34,w=g.taglines&&(g.taglines[fn]||g.taglines.en)||[],S=w[0]||(g.name||"Hand Coded")+".",B=w.slice(1),ne=96,le=30,k=et=>{i.font=_(et);let ke=i.measureText(S).actualBoundingBoxAscent||et*.7;i.font=L(100);let tt=(i.measureText(B[0]||"R").actualBoundingBoxAscent||72)/100,Oe=Math.max(1,B.length);return ke/((Oe-1)*1.18+tt)},G=()=>{le=k(ne),i.font=L(le);let et=B.length?Math.max(...B.map(ke=>i.measureText(ke).width))+ne*.24:0;return i.font=_(ne),i.measureText(S).width+et};for(;G()>n-2*T-2*F-40&&ne>48;)ne-=4;i.font=_(ne);let z=i.measureText(S).width,ie=D+ne*.78;i.fillStyle="#fff",i.textBaseline="alphabetic",i.fillText(S,T,ie),le=k(ne),i.font=L(le),i.textBaseline="alphabetic";let Y=le*1.18;B.forEach((et,ke)=>i.fillText(et,T+z+ne*.24,ie-(B.length-1-ke)*Y)),i.fillStyle=g.accent||"#ffcc00",i.beginPath(),i.arc(n-T-F,D+ne*.42,F,0,Math.PI*2),i.fill();let $=n-2*T,J=84,j=[],ue=et=>{"letterSpacing"in i&&(i.letterSpacing=Math.round((+v.ls||-.02)*et)+"px")};for(;J>=36&&(i.font=I(J),ue(J),j=Kt(i,p,$),!(j.length<=4));J-=4);j=p?j.slice(0,4):[];let V=30,X=e-64-V,se=Math.round(J*1.02),re=X-64-j.length*se;i.textBaseline="top",j.length&&(i.fillStyle=g.accent||"#ffcc00",i.fillRect(T,re-34,46,6)),i.fillStyle="#fff",i.font=I(J),ue(J),j.forEach((et,ke)=>i.fillText(et,T-J*.03,re+ke*se)),"letterSpacing"in i&&(i.letterSpacing="0px");let ce=Yn(g,"subtitle"),Ce=et=>`${ce.italic!==!1?"italic ":""}${ce.weight||400} ${et}px ${ce.css}`;try{await document.fonts.load(Ce(38))}catch{}i.font=Ce(38),i.fillStyle="#fff",i.textBaseline="alphabetic",i.fillText("hand-coded.net",T,X+V);let ze=await new Promise(et=>t.toBlob(et,"image/jpeg",.92));if(!ze)return;rr("photo-souvenir","Photo souvenir",!0);let Ve="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",mt=typeof File=="function"?new File([ze],Ve,{type:"image/jpeg"}):null;if(mt&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[mt]}))try{await navigator.share({files:[mt],title:ve.settings.name||"Hand Coded"}),Oa(_e("hv_shotDone"),2500);return}catch(et){if(et&&et.name==="AbortError")return}let q=document.createElement("a");q.href=URL.createObjectURL(ze),q.download=Ve,document.body.appendChild(q),q.click(),setTimeout(()=>{URL.revokeObjectURL(q.href),q.remove()},2e3),Oa(_e("hv_shotDone"),2500)}function gh(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(ve.settings.home||{}).story||{},i=he(t.title||{}).trim(),s=Sr(he(t.body||{})),r=!t.off&&!!(i||Er(s).join("").trim());n.hidden=!r;let o=document.getElementById("hc-story");if(!r){o&&o.remove();return}o||(o=document.createElement("section"),o.id="hc-story",o.hidden=!0,e.appendChild(o)),o.setAttribute("aria-label",i||_e("story"));let a=(t.images||[]).filter(Boolean);o.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${xe(_e("close"))}">\xD7</button><h2>${xe(i||_e("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${xe(t.link)}" target="_blank" rel="noopener">${xe(he(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(a.length?`<div class="shots scroll-x">${a.map(l=>`<a href="${xe(Mt(l))}" target="_blank" rel="noopener"><img src="${xe(Mt(l))}" alt="" loading="lazy" draggable="false" onerror="this.parentNode.remove()"></a>`).join("")}</div>`:"")+"</div></div>",o.querySelector(".x").addEventListener("click",()=>yh(!1)),gh.out||(gh.out=!0,document.addEventListener("pointerdown",l=>{let c=document.getElementById("hc-story");c&&c.classList.contains("on")&&!l.target.closest("#hc-story, #story-btn")&&yh(!1)}))}var Qg=0;function yh(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(Qg),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),Qg=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),yh(!1))},!0);function sf(){if(!y)return;let n=y.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1),t=Math.max(1,Math.round(n.width)),i=Math.max(1,Math.round(n.height));if(!(n.width<2||n.height<2||t===y.W&&i===y.H&&e===y.dpr)&&(y.W=t,y.H=i,y.dpr=e,y.cv.width=y.W*e,y.cv.height=y.H*e,y.ctx.setTransform(e,0,0,e,0,0),y.gl&&(y.gl.c.width=y.W*e,y.gl.c.height=y.H*e,y.gl.dpr=e),y.reelOn)){let s=xy();if(y.rp&&y.rp.key!==s.kind+"|"+s.src){let r=!y.userReel;xi(),ll(r)}else Vf()}}var rf=[{p:"cell",min:3,max:40,step:1,get:()=>y.cell,set:n=>{y.cell=n},show:()=>Math.max(y.cell,y.floor)+"px"+(y.floor>y.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(y.fill*100),set:n=>{y.fill=n/100},show:()=>Math.round(y.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>y.gamma,set:n=>{y.gamma=n},show:()=>"\xD7"+y.gamma.toFixed(1)},{p:"delay",min:1,max:gy,step:1,get:()=>y.delay,set:n=>{y.delay=n},show:()=>of()+(of()<y.delay?"*":"")}],TS=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function AS(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span><button type="button" class="more" aria-expanded="false">+</button></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div><p class="priv"></p>`:"")+rf.map(c=>`<label class="rw"><span class="lb" data-k="${c.p}"></span><input type="range" data-p="${c.p}" min="${c.min}" max="${c.max}" step="${c.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${La.map(c=>`<button type="button" data-c="${c}"><i class="c-${c}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div><div class="pic"><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${Ua.shot}<span></span></button></div>`,t.appendChild(i);let s=document.getElementById("hv-toggle");y.panel=i,y.toggle=s;let r=0,o=c=>{clearTimeout(r),c?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(c)),s.classList.toggle("on",c),n.classList.toggle("hv-open",c),c&&ni()};y.setOpen=o,s.addEventListener("click",()=>{if(y.reelOn){xi(),o(!0);return}o(!i.classList.contains("open"))});let a=i.querySelector(".more");a.addEventListener("click",()=>{let c=!i.classList.contains("more-on");i.classList.toggle("more-on",c),a.setAttribute("aria-expanded",String(c)),a.textContent=c?"\u2212":"+"}),n.addEventListener("pointerdown",c=>{i.classList.contains("open")&&!c.target.closest("#hv-panel, #hv-toggle, #hv-src, #hv-consent")&&o(!1)}),i.querySelectorAll("input[data-p]").forEach(c=>{let h=rf.find(u=>u.p===c.dataset.p);c.addEventListener("input",()=>{h.set(+c.value),ni()})});let l=c=>{if(c==="color")y.color=La[(La.indexOf(y.color)+1)%La.length];else if(c==="invert")y.mode=y.mode==="light"?"dark":"light";else if(c==="sound"){Hf(!y.sound);return}else if(c==="cam"){if(!document.getElementById("hv-src"))return;y.cam?Dh():by()}ni()};i.querySelectorAll("[data-c]").forEach(c=>c.addEventListener("click",()=>{y.color=c.dataset.c,ni()})),i.querySelectorAll(".tgl").forEach(c=>c.addEventListener("click",()=>l(c.dataset.a))),window.addEventListener("keydown",c=>{if(wt||c.ctrlKey||c.metaKey||c.altKey||de&&de.open||c.target&&c.target.id==="hv-words")return;if(c.code==="Escape"&&i.classList.contains("open")){o(!1),s.focus({preventScroll:!0});return}if(c.code==="Escape"&&y.reelOn){xi();return}let h={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[c.code];if(h){if(c.preventDefault(),h==="panel"){o(!i.classList.contains("open"));return}y.touched||(y.touched=!0,o(!0)),l(h)}}),ni()}function ni(){if(al(),!y||!y.panel)return;let n=y.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=_e("hv_"+t.dataset.k)}),y.toggle.setAttribute("aria-label",_e("hv_panel")),y.toggle.title=_e("hv_panel")+" (K)",rf.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),TS(i),i.setAttribute("aria-label",_e("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===y.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",_e("hv_color")+" "+_e("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",y.mode==="dark"),n.classList.toggle("cam",!!y.cam),!y.cam&&n.classList.contains("more-on")&&n.querySelector(".more").click(),n.querySelector(".more").setAttribute("aria-label",_e("params")),yy()}function yy(){let n=y&&y.panel&&y.panel.querySelector(".stat");if(!n)return;let e=Math.max(y.cell,y.floor);n.textContent=`${Math.ceil(y.W/e)}\xD7${Math.ceil(y.H/e)} \xB7 ${Math.round(1e3/y.interval)} FPS`}var CS=()=>y&&!y.reelOn?y.video:null;function Hf(n){y.sound=n,y.reelOn&&y.rp?y.rp.mute(!n):y.video&&(y.video.muted=!n,n&&(y.video.volume=1),y.video.paused&&!y.frozen&&y.video.play().catch(()=>{})),ni(),js()}var ol=()=>!!(de&&de.src&&/^(video|youtube|vimeo)$/.test(de.kind));function vy(){y&&ol()?(wt&&Uh(),ll()):xS()}function RS(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let s=document.createElement("video");Object.assign(s,{muted:!0,playsInline:!0,preload:"auto",src:Mt(e)}),s.setAttribute("playsinline","");let r=()=>{i.t=s.currentTime,i.d=isFinite(s.duration)?s.duration:0,i.paused=s.paused,js()};["timeupdate","durationchange","play","pause"].forEach(o=>s.addEventListener(o,r)),s.addEventListener("loadedmetadata",()=>{s.videoWidth&&(i.ratio=s.videoWidth/s.videoHeight),Vf(),r()}),s.addEventListener("ended",()=>xi()),Object.assign(i,{el:s,play:()=>s.play().catch(()=>{}),pause:()=>s.pause(),mute:o=>{s.muted=o,o||(s.volume=1)},seek:o=>{s.currentTime=o}})}else{let s=document.createElement("iframe"),r=n==="youtube",o=r?Ha(e):Va(e),a=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";s.src=r?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${a}`:Ih(o,"autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0"),s.allow="autoplay; encrypted-media",s.tabIndex=-1,s.title="Showreel",s.referrerPolicy="strict-origin-when-cross-origin";let l=h=>{try{s.contentWindow.postMessage(JSON.stringify(h),"*")}catch{}},c=r?(h,u=[])=>l({event:"command",func:h,args:u}):(h,u)=>l(u===void 0?{method:h}:{method:h,value:u});s.addEventListener("load",()=>{if(!r)return;let h=0;clearInterval(i.hello),l({event:"listening",id:"hvreel",channel:"widget"}),i.hello=setInterval(()=>{if(i.heard||++h>60){clearInterval(i.hello);return}l({event:"listening",id:"hvreel",channel:"widget"})},250)}),i.showAt=r?3.2:.4,t.classList.add("wait"),Object.assign(i,{el:s,post:l,play:()=>{i.paused=!1,i.hold=!1,i.playAt=performance.now(),i.showAt=i.t+(r?2.6:.3),c(r?"playVideo":"play"),vh(),js()},pause:()=>{i.paused=!0,i.hold=!0,c(r?"pauseVideo":"pause"),vh(),js()},mute:h=>{r?(c(h?"mute":"unMute"),h||c("setVolume",[100])):(c("setMuted",h),h||c("setVolume",1))},seek:h=>{r?c("seekTo",[h,!0]):c("setCurrentTime",h),i.t=h,js()}})}return LS(i,t)}function vh(){let n=y&&y.rp;if(!n||n.kind==="video")return;let e=y.reelOn&&!n.paused&&(n.forced||n.t>=(n.showAt||0));e!==!!n.shown&&(n.shown=e,n.box.classList.toggle("wait",!e),y.video&&!wt&&!y.frozen&&(e?y.video.pause():y.reelOn&&y.video.play().catch(()=>{})))}function LS(n,e){let t=document.createElement("div");return t.className="grid",e.append(n.el,t),n}window.addEventListener("message",n=>{let e=y&&y.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.heard||(e.heard=!0,clearInterval(e.hello),e.kind==="youtube"&&e.mute(!y.sound)),e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&y.reelOn){xi();return}i.playerState===1?(e.paused=!1,e.playingAt=performance.now()):i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),y.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d,e.t>0&&(e.playingAt=performance.now());else if(t.event==="play")e.paused=!1,e.playingAt=performance.now();else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&y.reelOn){xi();return}}js(),vh()}});var PS=()=>window.innerHeight>window.innerWidth*1.1;function xy(){let n=(ve&&ve.settings.showreelMobile||"").trim(),e=n?Dr(n):"";return n&&/^(video|youtube|vimeo)$/.test(e)&&PS()?{kind:e,src:n,vertical:!0}:{kind:de.kind,src:de.src,vertical:!1}}function Vf(){let n=y&&y.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=n.ratio,s=e,r=e/i;r<t&&(r=t,s=t*i),Object.assign(n.el.style,{width:Math.ceil(s)+"px",height:Math.ceil(r)+"px",left:Math.round((e-s)/2)+"px",top:Math.round((t-r)/2)+"px"});let o=document.getElementById("hv-turn");o||(o=document.createElement("p"),o.id="hv-turn",o.className="ui",o.setAttribute("aria-hidden","true"),document.getElementById("home-band").appendChild(o)),o.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 13.5a8.5 8.5 0 0 0 6 6.6M2.2 16.6l1.3-3.2 3 1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>'+xe(_e("hv_turn"))+"</span>",Pn.classList.toggle("reel-crop",i/(e/t)>1.6)}function ll(n=!1){if(!y||!ol())return!1;if(n||(y.userReel=!0),y.reelOn)return!0;y.setOpen&&y.setOpen(!1),y.cam&&Dh();let e=xy(),t=e.kind+"|"+e.src;if(!y.rp||y.rp.key!==t){y.rp&&(y.rp.pause(),y.rp.box.remove()),y.rp=RS(e.kind,e.src),y.rp.key=t,e.vertical&&(y.rp.ratio=9/16);let i=document.getElementById("home-band");i.insertBefore(y.rp.box,i.querySelector(".hv-shade")),y.sound&&e.kind==="video"&&y.rp.mute(!1),e.kind==="video"&&y.rp.play()}else y.rp.seek(0),y.rp.play(),y.rp.mute(!y.sound);return y.reelOn=!0,y.rp.box.hidden=!1,y.rp.playAt=performance.now(),IS(),y.rp.kind==="video"?y.video&&y.video.pause():(y.rp.shown=!0,vh()),Pn.classList.add("reel-on"),Vf(),js(),ni(),n||rr("showreel","Showreel",!0),!0}var Xc=0;function IS(){clearInterval(Xc),Xc=setInterval(()=>{let n=y&&y.rp;if(!n||!y.reelOn||n.kind==="video"||n.shown){clearInterval(Xc);return}if(!(n.hold||wt)&&!((n.playingAt||0)>(n.playAt||0))&&!(performance.now()-(n.playAt||0)<(y.userReel?8e3:6e3))){if(clearInterval(Xc),!n.heard||!y.userReel){y.userReel||(y.reelRefused=!0),xi();return}n.showAt=0,n.forced=!0,n.shown=!0,n.box.classList.remove("wait"),y.video&&!y.frozen&&y.video.pause()}},500)}function xi(){!y||!y.reelOn||(y.reelOn=!1,y.rp.pause(),y.rp.box.hidden=!0,y.fresh=!0,y.rp.shown=!1,y.rp.kind!=="video"&&y.rp.box.classList.add("wait"),y.video&&!wt&&!y.frozen&&(y.video.muted=!y.sound,y.video.play().catch(()=>{})),Pn.classList.remove("reel-on"),js(),ni())}var NS=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Ud=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),_y=()=>{let n=y&&y.rp;!n||!y.reelOn||(n.paused?n.play():n.pause())};function DS(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),y.reelBar=e,e.querySelector(".pp").addEventListener("click",_y),e.querySelector(".snd").addEventListener("click",()=>Hf(!y.sound)),e.querySelector(".x").addEventListener("click",xi);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=y.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=y.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function js(){let n=y&&y.reelBar;if(!n||(n.hidden=!y.reelOn,al(),!y.reelOn))return;let e=y.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=NS(e.paused),s.setAttribute("aria-label",_e(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Ud(i)} / ${Ud(t)}`:Ud(i);let r=n.querySelector(".snd");r.innerHTML=Ff(y.sound),r.setAttribute("aria-label",_e(y.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(y.sound)),n.querySelector(".x").setAttribute("aria-label",_e("close"))}function US(){return new Promise(n=>{let e=document.getElementById("home-band"),t=document.getElementById("hv-consent");t&&t.remove(),t=document.createElement("div"),t.id="hv-consent",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`<p>${xe(_e("hv_consent"))}</p><div class="bt"><button type="button" class="ok">${Ua.shot}<span>${xe(_e("hv_camYes"))}</span></button><button type="button" class="no">${xe(_e("cancel"))}</button></div>`,e.appendChild(t),t.setAttribute("aria-label",_e("hv_cam"));let i=r=>{window.removeEventListener("keydown",s,!0),t.classList.remove("on"),setTimeout(()=>t.remove(),250),n(r)},s=r=>{r.code==="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),i(!1))};window.addEventListener("keydown",s,!0),t.querySelector(".ok").addEventListener("click",()=>i(!0)),t.querySelector(".no").addEventListener("click",()=>i(!1)),requestAnimationFrame(()=>{t.classList.add("on"),t.querySelector(".ok").focus({preventScroll:!0})})})}async function by(){if(Oa(""),!y.camOK){if(!await US()){ni();return}y.camOK=!0}try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),y.reelOn&&xi(),y.cam={stream:n,video:e},y.lo=0,y.hi=1,y.video&&y.video.pause(),y.panel||Oa(_e("hv_camNote"),6e3)}catch{Oa(_e("hv_camDenied"),4e3)}ni()}function Dh(){if(y&&y.cam){y.cam.stream.getTracks().forEach(e=>e.stop()),y.cam=null;let n=CS();n&&!wt&&n.play().catch(()=>{}),Oa("")}y&&ni()}function OS(){y&&(xi(),Dh(),y.video&&y.video.pause())}function Yc(n,e,t,i=1,s=0,r=0,o=!1,a=!1){let l=y.rctx,c=y.raw.width,h=y.raw.height,u=(a?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,p=t*u;o&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-p)/2+r*h,d,p),o&&l.restore()}function My(n){let e=y.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,y.raw.width,y.raw.height),y.cam&&y.cam.video.readyState>=2)return Yc(y.cam.video,y.cam.video.videoWidth,y.cam.video.videoHeight,1,0,0,!0),!0;if(y.video)return y.video.readyState<2?!1:(Yc(y.video,y.video.videoWidth,y.video.videoHeight),!0);let t=y.pics.filter(d=>d.complete&&d.naturalWidth);if(!t.length)return!1;let i=y.raw.width,s=y.raw.height,r=s>i*1.1,o=r?9:7,a=Math.max(0,n)/o,l=t.length,c=(Math.floor(a)%l+l)%l,h=a-Math.floor(a),u=(d,p,g,v)=>{if(e.globalAlpha=g,r){let f=Math.max(i/d.naturalWidth,s/d.naturalHeight)*1.04,M=Math.max(0,(d.naturalWidth*f-i)/2/i),_=Math.max(0,Math.min(1,p)),I=_*_*(3-2*_),L=v%2?1:-1;Yc(d,d.naturalWidth,d.naturalHeight,1.04,L*M*.7*(1-2*I),0)}else Yc(d,d.naturalWidth,d.naturalHeight,1.18-.12*p,Math.sin(p*2.2)*.06,Math.cos(p*1.7)*.05)};return u(t[c],h,1,c),h>.78&&l>1&&u(t[(c+1)%l],h-1,(h-.78)/.22,c+1),e.globalAlpha=1,!0}var kS=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function BS(n){if(y.pyr&&y.pyr.cell===n&&y.pyr.fill===y.fill&&y.pyr.round===y.round)return y.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=(y.round?Math.hypot(o+.5-s,r+.5-s)/1.12:Math.max(Math.abs(o+.5-s),Math.abs(r+.5-s)))/s,l=Math.max(0,Math.min(1,1-a/y.fill))*255,c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),y.pyr={cell:n,fill:y.fill,round:y.round,pat:y.ctx.createPattern(e,"repeat")},y.pyr.pat}function af(n,e,t){let i=y.ctx,s=y.W,r=y.H,o=Math.round((s-n*t)/2),a=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!kS){i.globalAlpha=.45,i.drawImage(y.off,o,a,n*t,e*t),i.globalAlpha=1;return}y.tmp||(y.tmp=document.createElement("canvas"),y.tctx=y.tmp.getContext("2d"));let l=y.tmp,c=y.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${y.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+y.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(y.off,o,a,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(o,a),c.fillStyle=BS(t),c.fillRect(-o,-a,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),y.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",y.color==="source"?i.drawImage(y.off,o,a,n*t,e*t):(i.fillStyle=y.color==="grey"?"#8d8d8d":ve.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Wa=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},of=()=>y.floor||y.interval>1e3/29?1:y.delay;function FS(n){if(!y||!y.W)return;let e=y.exit?n-y.exit:-1;if(e>e0){y.cleared||(y.cleared=!0,y.ctx.fillStyle="#0b0b0b",y.ctx.fillRect(0,0,y.W,y.H),n0());return}if(y.reelOn&&(!y.rp||y.rp.kind==="video"||y.rp.shown)||n-y.last<(e>=0?1e3/60:y.interval)-2)return;y.last=n;let t=performance.now(),i=Wa.matches?0:(n-y.t0)/1e3,s=y.ctx,r=y.W,o=y.H;if(y.panel&&y.panel.classList.contains("open")&&n-(y.statAt||0)>500&&(y.statAt=n,yy()),Gf()||(s.fillStyle="#0b0b0b",s.fillRect(0,0,r,o)),y.intro&&n<y.intro){n0();return}let a=y.intro?n-y.intro:-1;if(a>zS&&(y.intro=0),y.frozen||e>=0&&y.frozenAt&&n-y.sampleAt<y.interval){let f=y.frozenAt;if(!f)return;y.tainted?e<e0/3&&af(f.cols,f.rows,f.cell):i0(f.d,f.cols,f.rows,f.cell,e,-1);return}let l=Math.max(y.cell,y.floor),c=Math.ceil(r/l),h=Math.ceil(o/l);if((y.off.width!==c||y.off.height!==h)&&(y.off.width=y.raw.width=c,y.off.height=y.raw.height=h,y.fresh=!0),!My(i))return;let u=of();y.octx.globalAlpha=y.fresh||u<=1?1:1-Math.pow(1-1/u,y.interval/(1e3/30)),y.octx.drawImage(y.raw,0,0),y.octx.globalAlpha=1,y.fresh=!1;let d=null;if(!y.tainted)try{d=y.octx.getImageData(0,0,c,h).data}catch{y.tainted=!0}if(y.frozenAt={d,cols:c,rows:h,cell:l},y.sampleAt=n,y.tainted?(y.gl&&(y.gl.c.style.display="none",y.gl=null),af(c,h,l)):i0(d,c,h,l,e,a),e>=0)return;let p=performance.now()-t;y.cost=y.cost*.9+p*.1;let g=y.gl?[60,30,24,20]:[30,24,20],v=Math.round(1e3/y.interval),m=Math.max(0,g.indexOf(v));y.cost>(y.gl?9:14)&&++y.slow>15?(y.panel&&setTimeout(ni,0),y.slow=0,m<g.length-1?y.interval=1e3/g[m+1]:y.floor=Math.min(Math.max(y.cell+6,14),Math.max(y.floor,l)+2)):y.cost<4&&++y.fast>60&&(y.panel&&setTimeout(ni,0),y.fast=0,y.floor?y.floor=Math.max(0,y.floor-2):m>0&&(y.interval=1e3/g[m-1]))}var e0=420,zS=650,t0=(n,e)=>Math.pow(1-1/n,e*.06);function wy(n,e,t,i,s=-1,r=-1){let o=y.ctx,a=e*t,l=y.lum&&y.lum.length===a?y.lum:y.lum=new Float32Array(a),c=1,h=0;for(let L=0,T=0;L<a;L++,T+=4){let D=(.2126*n[T]+.7152*n[T+1]+.0722*n[T+2])/255;l[L]=D,D<c&&(c=D),D>h&&(h=D)}y.lo+=(c-y.lo)*.15,y.hi+=(Math.max(h,y.lo+.15)-y.hi)*.15;let u=y.lo,d=1/(y.hi-u),p=y.mode==="dark",g=y.gamma,v=i*y.fill,m=(y.W-e*i)/2,f=(y.H-t*i)/2,M=y.color==="source",_=s>=0||r>=0,I=M?GS(o):o;I.fillStyle=M?"#fff":y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2",I.beginPath();for(let L=0,T=0;L<t;L++){let D=f+L*i+i/2;for(let F=0;F<e;F++,T++){let w=(l[T]-u)*d;w=w<0?0:w>1?1:w,p&&(w=1-w);let S=(g===1?w:Math.pow(w,g))*v;if(S<.6)continue;let B=m+F*i+i/2,ne=D;if(_){let le=S/v;if(s>=0?S*=t0(2.4+4.6*le,s):S*=1-t0(3+4*le,r),S<.6)continue}if(y.round){let le=Math.min(S*.56,i/2);I.moveTo(B+le,ne),I.arc(B,ne,le,0,6.2832)}else I.rect(B-S/2,ne-S/2,S,S)}}I.fill(),M&&(I.globalCompositeOperation="source-in",I.imageSmoothingEnabled=!1,I.drawImage(y.off,m,f,e*i,t*i),I.globalCompositeOperation="source-over",o.save(),o.setTransform(1,0,0,1,0,0),o.drawImage(I.canvas,0,0),o.restore())}function HS(n){try{let e=document.createElement("canvas");e.id="home-gl",e.setAttribute("aria-hidden","true");let t=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return null;let i=(c,h)=>{let u=t.createShader(c);if(t.shaderSource(u,h),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(u));return u},s=t.createProgram();if(t.attachShader(s,i(t.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}")),t.attachShader(s,i(t.FRAGMENT_SHADER,`precision highp float;
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
}`)),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return null;t.useProgram(s);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let o=t.getAttribLocation(s,"a");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);let a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]].forEach(([c,h])=>t.texParameteri(t.TEXTURE_2D,c,h)),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let l={};return["grid","org","res","cell","maxs","lo","k","gam","dark","ex","intro","dpr","src","rnd","col","bg"].forEach(c=>{l[c]=t.getUniformLocation(s,c)}),n.after(e),{c:e,gl:t,u:l,dpr:1,data:null}}catch{return null}}var Gf=()=>!!(y&&y.gl&&!y.gl.gl.isContextLost());function n0(){if(!Gf())return;let n=y.gl.gl;n.viewport(0,0,y.gl.c.width,y.gl.c.height),n.clearColor(11/255,11/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT)}var VS=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n||"").trim()),t=e?parseInt(e[1],16):15921906;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function i0(n,e,t,i,s=-1,r=-1){if(!Gf()){wy(n,e,t,i,s,r);return}let o=y.gl,a=o.gl,l=o.u,c=e*t,h=1,u=0;for(let p=0,g=0;p<c;p++,g+=4){let v=(.2126*n[g]+.7152*n[g+1]+.0722*n[g+2])/255;v<h&&(h=v),v>u&&(u=v)}y.lo+=(h-y.lo)*.15,y.hi+=(Math.max(u,y.lo+.15)-y.hi)*.15,o.data!==n&&(o.data=n,a.texImage2D(a.TEXTURE_2D,0,a.RGBA,e,t,0,a.RGBA,a.UNSIGNED_BYTE,new Uint8Array(n.buffer,n.byteOffset,c*4))),a.viewport(0,0,o.c.width,o.c.height);let d=VS(y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2");a.uniform2f(l.grid,e,t),a.uniform2f(l.org,(y.W-e*i)/2,(y.H-t*i)/2),a.uniform2f(l.res,o.c.width,o.c.height),a.uniform1f(l.cell,i),a.uniform1f(l.maxs,i*y.fill),a.uniform1f(l.lo,y.lo),a.uniform1f(l.k,1/(y.hi-y.lo)),a.uniform1f(l.gam,y.gamma),a.uniform1f(l.dark,y.mode==="dark"?1:0),a.uniform1f(l.ex,s),a.uniform1f(l.intro,r),a.uniform1f(l.dpr,o.dpr),a.uniform1f(l.src,y.color==="source"?1:0),a.uniform1f(l.rnd,y.round?1:0),a.uniform3f(l.col,d[0],d[1],d[2]),a.uniform3f(l.bg,11/255,11/255,11/255),a.drawArrays(a.TRIANGLES,0,3)}function GS(n){let e=n.canvas;y.mask||(y.mask=document.createElement("canvas"),y.mctx=y.mask.getContext("2d")),(y.mask.width!==e.width||y.mask.height!==e.height)&&(y.mask.width=e.width,y.mask.height=e.height);let t=y.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var Pn=document.getElementById("home"),ir=document.getElementById("enter"),WS=ir.querySelector(".lbl"),Rr=document.getElementById("ticker"),s0=Rr.getContext("2d"),Fi=null,qs=0,ka=1;function Wf(n){WS.textContent=n,ir.setAttribute("aria-label",n)}var r0={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},$S=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[‘’]/g,"'").replace(/[“”«»]/g,'"').toUpperCase(),t=r0[e]||r0["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function qS(n){let e=i=>i.published&&ve.sections.some(s=>s.id===i.section&&s.visible),t=ve.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+ve.settings.founded||2012));case"auto:projects":return String(ve.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(ve.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var XS=()=>(ve.settings.home&&ve.settings.home.figures||[]).map(n=>({value:qS(n.value),label:he(n.label)})).filter(n=>n.value&&n.label),YS=()=>XS().map(n=>`${n.value} ${n.label}`);function jS(){let n=he(ve.settings.home.sub||{}).replace(/\s*\n\s*/g," ").trim(),e=he(ve.settings.home.quotes||{}).split(/\n+/).map(s=>s.trim()).filter(Boolean),t=n?[n,...e]:[...YS(),...e,...ve.settings.home.ticker||[]].filter(Boolean),i=(t.length?t:[ve.settings.name]).map(s=>String(s).replace(/œ/g,"oe").replace(/Œ/g,"OE").replace(/æ/g,"ae").replace(/…/g,"...").replace(/·/g,".").toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Fi=ZS(i)}function ZS(n){let e=[];for(let t of n){let i=$S(t),s=t===" "?3:5;for(let r=0;r<s;r++){let o=0;for(let a=0;a<7;a++)i[a]&1<<4-r&&(o|=1<<a);e.push(o)}e.push(0)}return{w:e.length,cols:e}}var yi={pitch:3.2,rows:7,h:30},Ta=null,a0="";function o0(n,e){let t=ka,i=Math.ceil(yi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=i/2;if(e){let a=r.createRadialGradient(o,o,0,o,o,o);a.addColorStop(0,n),a.addColorStop(.35,n),a.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=a,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(o,o,yi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(o-yi.pitch*.1*t,o-yi.pitch*.1*t,yi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function Sy(){ka=Math.min(window.devicePixelRatio||1,2),Rr.width=Math.round(window.innerWidth*ka),Rr.height=Math.round(yi.h*ka),Ta=null,Xs=null}var Oo=0,Xs=null;function JS(n){let e=ka,t=yi.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[Fi.w,i,e,n].join("|");if(Xs&&Xs.dots===Fi&&Xs.key===s)return Xs;(!Ta||a0!==n)&&(a0=n,Ta={on:o0(n,!0),off:o0(n,!1)});let r=i+Fi.w+i,o=document.createElement("canvas");o.width=Math.ceil(r*t*e),o.height=Math.round(yi.h*e);let a=o.getContext("2d"),l=(yi.h-yi.rows*t)/2,c=Ta.on.width/2;a.fillStyle="#000",a.fillRect(0,0,o.width,o.height);for(let h=0;h<r;h++){let u=h<i?0:Fi.cols[(h-i)%Fi.w],d=(h*t+t/2)*e-c;for(let p=0;p<yi.rows;p++)a.drawImage(u>>p&1?Ta.on:Ta.off,d,(l+p*t+t/2)*e-c)}return Xs={canvas:o,dots:Fi,key:s,shown:-1,lead:i}}function KS(n){let e=+(ve.settings.home||{}).tickerSpeed;Oo+=n*(e>0?Math.min(120,e):26);let t=JS(ve.settings.accent||"#ffcc00");Oo>=1&&(qs+=Math.floor(Oo),Oo%=1),qs>=t.lead+Fi.w&&(qs=t.lead+(qs-t.lead)%Fi.w),t.shown!==qs&&(t.shown=qs,s0.setTransform(1,0,0,1,0,0),s0.drawImage(t.canvas,qs*yi.pitch*ka,0,Rr.width,Rr.height,0,0,Rr.width,Rr.height))}var wt=!1,Ur=!1,cl=!1,Or=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),lf=0,cf=0,Od=!1,QS=180;function $f(n=cl){if(!(wt||Od)){if(!(n&&y&&y.W&&!Pn.hidden&&!Wa.matches)){l0();return}Od=!0,Pn.classList.add("leaving"),y.setOpen&&y.setOpen(!1),y.reelOn&&xi(),eE(),y.exit=performance.now(),y.cleared=!1,y.intro=0,setTimeout(()=>{Od=!1,l0()},QS)}}function eE(){y&&(y.frozen=!0,y.video&&y.video.pause(),y.rp&&y.rp.pause(),y.cam&&(y.cam.stream.getTracks().forEach(n=>n.stop()),y.cam=null))}function l0(){if(!wt){if(wt=!0,clearTimeout(lf),J0=performance.now(),!Et&&Or())try{history.pushState(null,"",location.pathname+location.search+"#"+(ve.sections.find(n=>n.id===ve.settings.startSection&&n.visible)||Ut[0].def).id)}catch{}iE(),Xw(),Nr(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Pn.classList.add("out"),lf=setTimeout(()=>{Pn.hidden=!0,OS()},1250)})),cn.classList.add("on"),setTimeout(Jw,1500),ar.hidden=!1,jo.classList.remove("hidden"),sn.focus({preventScroll:!0})}}function Uh(n=!0){if(wt&&(Ai(),uh(),hh(),Sh(),rl(null),Of(),wt=!1,cl=!1,clearTimeout(lf),cf=performance.now()+1300,ir.classList.remove("wait"),Wf(he(ve.settings.home.enter)||_e("enter")),Ey=performance.now(),y&&(y.exit=0,y.frozen=!1,y.cleared=!1,y.fresh=!0,y.intro=performance.now()+450),Pn.classList.remove("leaving"),Pn.hidden=!1,Pn.offsetWidth,Pn.classList.remove("out"),y&&y.video&&y.video.play().catch(()=>{}),n&&!Et))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!Et){if(Qs.open){Qs.pushed=!1,Ms();try{history.replaceState(null,"",location.pathname+location.search+"#"+H.section.def.id)}catch{}return}if(Qs.pushed=!1,Or())Uh(!1);else if(!wt&&Ur)$f();else if(wt&&Ss){let n=Ut.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&bn&&il(n)}}});cn.addEventListener("click",n=>{n.target.closest(".wm")&&wt&&Uh()});cn.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&wt&&(n.preventDefault(),Uh())});ir.addEventListener("click",()=>{cl=!0,Ur?$f():(Wf(_e("loading")),ir.classList.add("wait"))});var Ey=0,jc=0,c0=0,Ho=null,Ty=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function qf(){if(wt||cl||performance.now()-Ey<900||de&&de.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||ir.click()}Pn.addEventListener("wheel",n=>{if(wt||Ty(n.target))return;let e=performance.now();e-c0>350&&(jc=0),c0=e,n.deltaY>0&&(jc+=n.deltaY*(n.deltaMode?30:1),jc>40&&(jc=0,qf()))},{passive:!0});Pn.addEventListener("touchstart",n=>{Ho=n.touches.length===1&&!Ty(n.target)?n.touches[0].clientY:null},{passive:!0});Pn.addEventListener("touchmove",n=>{Ho!==null&&n.touches.length===1&&Ho-n.touches[0].clientY>46&&(Ho=null,qf())},{passive:!0});Pn.addEventListener("touchend",()=>{Ho=null},{passive:!0});window.addEventListener("keydown",n=>{if(wt||n.ctrlKey||n.metaKey||n.altKey||de&&de.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&y&&y.reelOn){n.preventDefault(),_y();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),qf()}});var hf=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function tE(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Et&&Et.tag&&(e=Et.tag),hf(e||n)}function nE(n,e){let t=n.tags||[],i=t.find(s=>hf(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>hf(r)===e));return i?i.id:""}function iE(){try{Rn.compile($d,Ln,ti)}catch{}Rh();let n=Et&&Et.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Ut.findIndex(o=>o.def.id===e);i<0&&(i=Math.max(0,Ut.findIndex(o=>o.def.id===ve.settings.startSection)));let s=tE(t||(e&&i<0?e:""));if(s){let o=Ut.findIndex(a=>a.def.id===e)>=0?[i]:[i,...Ut.keys()];for(let a of o){let l=nE(Ut[a].def,s);if(l){i=a,Ut[a].def.defaultTag=l;break}}}ws=oe.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=Es();H.cameraY=za(),vt.x=_s()*Math.sin(H.degreeCamera)+r.p.x,vt.y=H.cameraY,vt.z=_s()*Math.cos(H.degreeCamera)+r.p.z,zn.x=r.p.x,zn.y=Ah(),zn.z=r.p.z,Ss=!0,il(i,0),(Ht<=700||Ot<=520)&&Nr()}var h0=performance.now(),u0=NaN,d0=0,uf=0,sE=(n=700)=>{uf=Math.max(uf,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>sE(),{passive:!0}));function rE(){let n=Ln.position,e=Ln.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+Ln.fov*7.3,i=1;return ti.traverseVisible(s=>{i+=1.13;let r=s.position,o=s.rotation,a=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+o.x*3.1+o.y*3.7+o.z*4.3+a.x*5.3+a.y*5.9+a.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function aE(){if(!Rn.compileAsync)return;let n=new Vs;n.setPositions([0,0,0,1,1,1]);let e=new hs;gf.forEach(s=>e.add(new Ea(n,s)));let t=()=>{if(wt){n.dispose();return}let s=new Sn;[...$d.children,...e.children].forEach(r=>{let o=r.clone();o.frustumCulled=!1,s.add(o)}),ti.add(s);try{Rn.render(ti,Ln)}catch{}ti.remove(s);try{Qo()}catch{}n.dispose()},i=()=>Promise.all([$d,e,ti].map(s=>Rn.compileAsync(s,Ln,ti).catch(()=>{}))).then(()=>(window.requestIdleCallback||(s=>setTimeout(s,50)))(t,{timeout:800}));(window.requestIdleCallback||(s=>setTimeout(s,200)))(i,{timeout:1500})}var kd=0;function Ay(n){let e=Math.min(.25,Math.max(0,(n-h0)/1e3));if(h0=n,ys+=e,$o=e*_0,!wt&&Fi&&!vs.classList.contains("hc-late")&&KS(e),y&&!Pn.hidden&&FS(n),Ss&&(wt||n<cf)){fw(),Gw(),Ww(),qw(),Ie&&Ie.update(),gS(),Xe.step(),jw();let t=Ti.length||n<uf||n<cf||ji||jn||ei||n-d0>2e3,i=rE();(t||i!==u0||S0!==Aa)&&(Qo(),n-kd<100&&wt&&!document.hidden&&yw(n,n-kd),kd=n,d0=n,u0=i)}requestAnimationFrame(Ay)}function Bd(n){console.error(n),sh(!0);let e=document.getElementById("load-error");e.textContent=_e("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function oE(){Et||!/[?&]preview\b/.test(location.search)||window.parent===window||(Et=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,o])=>{try{s.files[r]=URL.createObjectURL(o)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:x0},"*")}catch{}}))}var Cy=()=>{let n=he((ve.settings.home||{}).sub||{}).trim();if(/\n/.test(n))return n.split(/\n+/).map(i=>i.trim()).filter(Boolean);let e=[],t="";return n.split(/(?<=,)\s+/).forEach(i=>{t&&(t+" "+i).length>62?(e.push(t),t=i):t=t?t+" "+i:i}),t&&e.push(t),e};function lE(){let n=document.getElementById("hc-intro");if(!n)return;let e=n.querySelector(".ln"),t=Cy();if(!t.length){n.remove();return}e.querySelectorAll(".l").forEach(r=>r.getAnimations().forEach(o=>o.cancel())),e.innerHTML="",t.forEach(r=>{let o=document.createElement("span");o.className="l",o.textContent=r,e.appendChild(o)});let i=0,s=0;[...e.children].forEach((r,o)=>{r.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:i,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),o===t.length-1&&(s=i),i+=Math.max(650,Math.min(1700,120+16*t[o].length))}),window.HC_INTRO={t0:performance.now(),video:s,depart:i+150}}var Pa=null;function Ry(){if(Pa){Fd(Pa,!0);return}let n=Cy();if(!n.length)return;let e=!wt,t=document.createElement("div");t.id="hc-say",t.className=e?"home":"world",t.setAttribute("role","status");let i=document.createElement("div");i.className="ln",t.appendChild(i);let s=document.querySelector("#home-band .sl span, #slogan span");if(s){let a=getComputedStyle(s);i.style.fontFamily=a.fontFamily,i.style.fontWeight=a.fontWeight,i.style.fontStyle=a.fontStyle}n.forEach(a=>{let l=document.createElement("span");l.className="l",l.textContent=a,i.appendChild(l)}),(e?document.getElementById("home"):document.body).appendChild(t),Pa=t;let r=0;[...i.children].forEach((a,l)=>{a.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:r,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),r+=Math.max(650,Math.min(1700,120+16*n[l].length))}),t.animate([{opacity:0},{opacity:1}],{duration:500,fill:"both"}),t._t=setTimeout(()=>Fd(t),r+900);let o=a=>{a.target.closest&&a.target.closest("#home-about, #about-btn")||Fd(t,!0)};setTimeout(()=>{Pa===t&&(t._away=o,window.addEventListener("pointerdown",o,!0),window.addEventListener("keydown",o,!0))},50)}function Fd(n,e=!1){if(n._gone)return;n._gone=!0,clearTimeout(n._t),Pa===n&&(Pa=null),n._away&&(window.removeEventListener("pointerdown",n._away,!0),window.removeEventListener("keydown",n._away,!0));let t=[...n.querySelectorAll(".l")],i=e?80:Ly,s=e?450:750,r=(t.length-1)*i;t.forEach((o,a)=>o.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:s,delay:a*i,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),n.animate([{opacity:0}],{duration:600,delay:r+s*.4,fill:"forwards"}),setTimeout(()=>n.remove(),r+s+50)}var Vo=!1,Go=!1,Lr=!1,nh=!1,zd=0,f0=0,p0=!1,Ly=240;function ih(){if(Lr)return;Lr=!0;let n=document.getElementById("hc-intro");n&&n.classList.remove("hold"),cE()}function sh(n=!1,e=!1){let t=document.getElementById("hc-intro");if(!t||Vo)return;if(Vo=!0,window.HC_NOINTRO=!0,n||!t.animate){t.remove(),ih(),y0(!0);return}e&&(ih(),vs.classList.remove("hc-stage"));let i=[...t.querySelectorAll(".l")],s=e?80:Ly,r=e?450:750,o=(i.length-1)*s;i.forEach((a,l)=>a.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:r,delay:l*s,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),setTimeout(ih,o),setTimeout(()=>y0(),o+r+(e?0:500)),setTimeout(()=>t.remove(),o+r+1300)}function cE(){if(!(!y||wt)){if(y.reelOn&&y.rp&&!y.userReel)Go||(Go=!0,y.rp.seek(0),y.rp.play());else if(!y.reelOn&&!y.userReel&&!y.reelRefused&&!y.cam&&ol()&&Or()&&!Wa.matches&&!(Et&&Et.start)){let n=setInterval(()=>{if(wt||y.reelOn||y.cam){clearInterval(n);return}Ur&&(clearInterval(n),ll(!0),al(),m0())},150);return}m0()}}function m0(){let n=document.getElementById("home-snd");n&&!n.hidden&&!y.sound&&(n.classList.remove("blink"),n.offsetWidth,n.classList.add("blink"),setTimeout(()=>n.classList.remove("blink"),1400))}var vs=document.documentElement,g0="cubic-bezier(.22,.61,.36,1)";function hE(){if(!vs.classList.contains("hc-stage"))return;let n=()=>{if(!vs.classList.contains("hc-stage"))return;let t=document.querySelector("#home-slogan .wm"),i=[...document.querySelectorAll("#home-slogan .tls > span")],s=[...document.querySelectorAll("#home-ctl > *")];vs.classList.remove("hc-stage");let r=(l,c,h=-24,u=900)=>l&&l.animate([{opacity:0,transform:`translateX(${h}px)`,filter:"blur(6px)"},{opacity:getComputedStyle(l).opacity,transform:"none",filter:"blur(0)"}],{duration:u,delay:c,easing:g0,fill:"backwards"});r(t,0,-30,1100),i.forEach((l,c)=>r(l,380+c*130,-18,800)),s.forEach((l,c)=>l.animate([{opacity:0,transform:"scale(.6)"},{opacity:getComputedStyle(l).opacity,transform:"none"}],{duration:520,delay:760+c*90,easing:"cubic-bezier(.34,1.4,.64,1)",fill:"backwards"}));let o=document.getElementById("enter");o&&o.animate([{opacity:0,transform:"translate(-50%, 10px)"},{opacity:1,transform:"translateX(-50%)"}],{duration:700,delay:900,easing:g0,fill:"backwards"}),setTimeout(()=>{nh=!0},1150+s.length*60);let a=Math.max(1100,380+Math.max(0,i.length-1)*130+800,760+Math.max(0,s.length-1)*90+520)+120;setTimeout(()=>{let l=document.getElementById("hc-intro");l&&!Lr&&l.classList.add("beat-on")},a)};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(t=>setTimeout(t,1200))]):Promise.resolve()).then(()=>requestAnimationFrame(n))}function y0(n=!1){vs.classList.contains("hc-late")&&(vs.classList.remove("hc-stage","hc-late"),qs=0,Oo=0,Xs&&(Xs.shown=-1),!n&&["#ticker","#home-dock"].forEach((e,t)=>{let i=document.querySelector(e);i&&i.animate([{opacity:0},{opacity:getComputedStyle(i).opacity}],{duration:1200,delay:t*220,easing:"ease",fill:"backwards"})}))}function uE(){if(!document.getElementById("hc-intro"))return;let e=!!y&&ol()&&Or()&&!Wa.matches&&!(Et&&Et.start),t=!1,i=!e,s=0,r=()=>sh(!1,!0);["pointerdown","keydown","wheel","touchmove"].forEach(a=>window.addEventListener(a,r,{once:!0,passive:!0,capture:!0}));let o=setInterval(()=>{if(Vo&&Lr){clearInterval(o);return}if(wt){clearInterval(o),sh(!0);return}e&&Ur&&!t&&!y.reelOn&&!y.cam&&!y.reelRefused&&(t=ll(!0)),t&&!i&&y.rp&&y.rp.t>.05&&(y.rp.pause(),y.rp.seek(0),i=!0),t&&!y.reelOn&&(i=!0);let a=performance.now(),l=!y||!y.rp?0:y.rp.kind==="youtube"?2900:y.rp.kind==="vimeo"?500:0;!nh&&!vs.classList.contains("hc-stage")&&!vs.classList.contains("hc-late")&&(nh=!0),!Lr&&nh&&(zd||(zd=a),l&&i&&y.reelOn&&!Go&&(Go=!0,s=a,y.rp.seek(0),y.rp.play()),((e?!y.reelOn||i&&(!l||Go&&(y.rp.shown||a>=s+l+4e3)):Ur)||a-zd>7e3)&&(ih(),f0=a+1e3)),Lr&&!p0&&!Vo&&a>=f0&&(p0=!0,window.HC_GO&&window.HC_GO());let c=window.HC_INTRO;c&&!Vo&&Lr&&a>=c.t0+c.depart+600&&sh()},60)}(async function(){try{await oE(),Et?ve=Gs(structuredClone(Et.content)):(ve=await Zc.load(),Zc.prepare&&await Zc.prepare(ve))}catch(a){Bd(a);return}_n=xh(),B0();{let a=vf();a!==null&&(_n=a)}xf();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=ve.settings.langs&&ve.settings.langs.length?ve.settings.langs:ai,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}let r=((window.HC_ROUTE||{}).lang||"").toLowerCase();if(fn=t.includes(s)?s:t.includes(r)?r:t.includes(e)?e:i||ve.settings.defaultLang||t[0],Ut=ve.sections.filter(a=>a.visible).map(a=>({def:a})),!Ut.length){Bd(new Error("aucune section visible"));return}if(!Et)try{let a={"nouveau-contenu":"immersive","nouveau-contenu-4":"la-traversee-du-temps","nouveau-contenu-5":"valentin-ducros","nouveau-contenu-7":"laurent-delforge","fat-site-2008":"les-debuts","nokia-navigator":"les-debuts",lexus:"les-debuts","pubs-interactives":"les-debuts"},l=new URLSearchParams(location.search).get("p")||(window.HC_ROUTE||{}).p,c=l&&!ve.posts.some(u=>u.id===l)&&a[l]?a[l]:l,h=c&&ve.posts.find(u=>u.id===c&&u.published!==!1&&Ut.some(d=>d.def.id===u.section));h&&(th=h.id,history.replaceState(null,"",location.pathname+location.search+"#"+h.section))}catch{}tS(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&b0(!1),Q0(),Rf(),Zw(),bS(),Et&&lE(),uE(),hE(),X0(),Rh(),Sy(),requestAnimationFrame(Ay),Tr=Ut.map((a,l)=>new Xd(a.def,l)),Ut.forEach((a,l)=>{a.object=Tr[l]}),Ut.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let o=new Dc(L0);try{(await Promise.allSettled(Tr.map(l=>l.load(o)))).forEach((l,c)=>{l.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+Tr[c].def.id+" \xBB :",l.reason)}),Tr.forEach((l,c)=>l.place(c)),await Promise.race([Promise.all(k0).then(sr),new Promise(l=>setTimeout(l,3e3))]),Ur=!0,aE();{let l=document.getElementById("seo-page");l&&l.remove()}if((cl||!Or()||Et&&Et.start)&&$f(),th){let l=th,c=performance.now(),h=setInterval(()=>{(bn||performance.now()-c>8e3)&&(clearInterval(h),bn&&sl(l))},120)}}catch(a){Bd(a)}})();window.__hc={P:H,STYLE:oe,cam:vt,camera:Ln,renderer:Rn,get hv(){return y&&{cell:y.cell,floor:y.floor,fps:Math.round(1e3/y.interval),cost:+y.cost.toFixed(1),tainted:y.tainted}},get input(){return bn},get homeGone(){return wt},get content(){return ve},get postsView(){return Ie},getToSectionView:il,openThatPost:Zo,closePost:Ms,goToPost:sl,setLang:Lf,enter:()=>ir.click()};})();
