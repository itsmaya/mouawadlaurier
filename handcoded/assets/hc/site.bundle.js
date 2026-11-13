/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var id="160";var Py=0,jf=1,Iy=2;var km=1,Ny=2,rs=3,Jn=0,gn=1,Xn=2;var Is=0,ca=1,Zf=2,Jf=3,Kf=4,sd=5,Li=100,Dy=101,Uy=102,Qf=103,ep=104,Cc=200,rd=201,Oy=202,ky=203,wu=204,Su=205,By=206,Fy=207,zy=208,ad=209,Hy=210,Vy=211,Gy=212,Wy=213,$y=214,qy=0,Xy=1,Yy=2,$l=3,jy=4,Zy=5,Jy=6,Ky=7,Rc=0,Qy=1,ev=2,Ns=0,tv=1,nv=2,iv=3,sv=4,rv=5,av=6,tp="attached",ov="detached",Bm=300,da=301,fa=302,Eu=303,Tu=304,Lc=306,Us=1e3,On=1001,Au=1002,wn=1003,np=1004;var Vh=1005;var $n=1006,lv=1007;var Os=1008;var Ds=1009,cv=1010,hv=1011,od=1012,Fm=1013,Ps=1014,os=1015,ho=1016,zm=1017,Hm=1018,mr=1020,uv=1021,fi=1023,dv=1024,fv=1025,gr=1026,pa=1027,pv=1028,Vm=1029,mv=1030,Gm=1031,Wm=1033,Gh=33776,Wh=33777,$h=33778,qh=33779,ip=35840,sp=35841,rp=35842,ap=35843,$m=36196,op=37492,lp=37496,cp=37808,hp=37809,up=37810,dp=37811,fp=37812,pp=37813,mp=37814,gp=37815,yp=37816,vp=37817,xp=37818,_p=37819,bp=37820,Mp=37821,Xh=36492,wp=36494,Sp=36495,gv=36283,Ep=36284,Tp=36285,Ap=36286;var ql=2300,Xl=2301,Yh=2302,Cp=2400,Rp=2401,Lp=2402,yv=2500;var qm=3e3,yr=3001,vv=3200,xv=3201,ld=0,_v=1,pi="",jt="srgb",cs="srgb-linear",cd="display-p3",Pc="display-p3-linear",Yl="linear",Gt="srgb",jl="rec709",Zl="p3";var Hr=7680;var Pp=519,bv=512,Mv=513,wv=514,Xm=515,Sv=516,Ev=517,Tv=518,Av=519,Cu=35044;var Ip="300 es",Ru=1035,ls=2e3,Jl=2001,ks=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=1234567,ao=Math.PI/180,ma=180/Math.PI;function wi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function Un(n,e,t){return Math.max(e,Math.min(t,n))}function hd(n,e){return(n%e+e)%e}function Cv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Rv(n,e,t){return n!==e?(t-n)/(e-n):0}function oo(n,e,t){return(1-t)*n+t*e}function Lv(n,e,t,i){return oo(n,e,1-Math.exp(-t*i))}function Pv(n,e=1){return e-Math.abs(hd(n,e*2)-e)}function Iv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Nv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Uv(n,e){return n+Math.random()*(e-n)}function Ov(n){return n*(.5-Math.random())}function kv(n){n!==void 0&&(Np=n);let e=Np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bv(n){return n*ao}function Fv(n){return n*ma}function Lu(n){return(n&n-1)===0&&n!==0}function zv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Hs={DEG2RAD:ao,RAD2DEG:ma,generateUUID:wi,clamp:Un,euclideanModulo:hd,mapLinear:Cv,inverseLerp:Rv,lerp:oo,damp:Lv,pingpong:Pv,smoothstep:Iv,smootherstep:Nv,randInt:Dv,randFloat:Uv,randFloatSpread:Ov,seededRandom:kv,degToRad:Bv,radToDeg:Fv,isPowerOfTwo:Lu,ceilPowerOfTwo:zv,floorPowerOfTwo:Kl,setQuaternionFromProperEuler:Hv,normalize:Nt,denormalize:Pi},it=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],M=s[1],b=s[4],P=s[7],I=s[2],C=s[5],N=s[8];return r[0]=o*v+a*M+l*I,r[3]=o*m+a*b+l*C,r[6]=o*f+a*P+l*N,r[1]=c*v+h*M+u*I,r[4]=c*m+h*b+u*C,r[7]=c*f+h*P+u*N,r[2]=d*v+p*M+g*I,r[5]=d*m+p*b+g*C,r[8]=d*f+p*P+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jh.makeScale(e,t)),this}rotate(e){return this.premultiply(jh.makeRotation(-e)),this}translate(e,t){return this.premultiply(jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jh=new gt;function Ym(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vv(){let n=uo("canvas");return n.style.display="block",n}var Dp={};function lo(n){n in Dp||(Dp[n]=!0,console.warn(n))}var Up=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Op=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gl={[cs]:{transfer:Yl,primaries:jl,toReference:n=>n,fromReference:n=>n},[jt]:{transfer:Gt,primaries:jl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pc]:{transfer:Yl,primaries:Zl,toReference:n=>n.applyMatrix3(Op),fromReference:n=>n.applyMatrix3(Up)},[cd]:{transfer:Gt,primaries:Zl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Op),fromReference:n=>n.applyMatrix3(Up).convertLinearToSRGB()}},Gv=new Set([cs,Pc]),Dt={enabled:!0,_workingColorSpace:cs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Gv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=gl[e].toReference,s=gl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return gl[n].primaries},getTransfer:function(n){return n===pi?Yl:gl[n].transfer}};function ha(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vr,Ql=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=uo("canvas")),Vr.width=e.width,Vr.height=e.height;let i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ha(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ha(t[i]/255)*255):t[i]=ha(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wv=0,ec=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jh(s[o].image)):r.push(Jh(s[o]))}else r=Jh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Jh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $v=0,Kn=class n extends ks{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=On,s=On,r=$n,o=Os,a=fi,l=Ds,c=n.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=wi(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yr?jt:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?yr:qm}set encoding(e){lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?jt:pi}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Bm;Kn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,P=(p+1)/2,I=(f+1)/2,C=(h+d)/4,N=(u+v)/4,z=(g+m)/4;return b>P&&b>I?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=N/i):P>I?P<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),i=C/s,r=z/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=N/r,s=z/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pu=class extends ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?jt:pi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Kn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hs=class extends Pu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},tc=class extends Kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Iu=class extends Kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*v,M=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let I=Math.sqrt(b),C=Math.atan2(I,f*M);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}let P=a*M;if(l=l*m+d*P,c=c*m+p*P,h=h*m+g*P,u=u*m+v*P,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kh.copy(this).projectOnVector(e),this.sub(Kh)}reflect(e){return this.sub(Kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kh=new U,kp=new Ii,yn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),vl.subVectors(this.max,Ka),Gr.subVectors(e.a,Ka),Wr.subVectors(e.b,Ka),$r.subVectors(e.c,Ka),Ts.subVectors(Wr,Gr),As.subVectors($r,Wr),lr.subVectors(Gr,$r);let t=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-lr.z,lr.y,Ts.z,0,-Ts.x,As.z,0,-As.x,lr.z,0,-lr.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-lr.y,lr.x,0];return!Qh(t,Gr,Wr,$r,vl)||(t=[1,0,0,0,1,0,0,0,1],!Qh(t,Gr,Wr,$r,vl))?!1:(xl.crossVectors(Ts,As),t=[xl.x,xl.y,xl.z],Qh(t,Gr,Wr,$r,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qi=[new U,new U,new U,new U,new U,new U,new U,new U],_i=new U,yl=new yn,Gr=new U,Wr=new U,$r=new U,Ts=new U,As=new U,lr=new U,Ka=new U,vl=new U,xl=new U,cr=new U;function Qh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cr.fromArray(n,r);let a=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qv=new yn,Qa=new U,eu=new U,mi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);let t=Qa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(eu)),this.expandByPoint(Qa.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},es=new U,tu=new U,_l=new U,Cs=new U,nu=new U,bl=new U,iu=new U,ga=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(tu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=Cs.dot(this.direction),l=-Cs.dot(_l),c=Cs.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tu).addScaledVector(_l,d),p}intersectSphere(e,t){es.subVectors(e.center,this.origin);let i=es.dot(this.direction),s=es.dot(es)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,i,s,r){nu.subVectors(t,e),bl.subVectors(i,e),iu.crossVectors(nu,bl);let o=this.direction.dot(iu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cs.subVectors(this.origin,e);let l=a*this.direction.dot(bl.crossVectors(Cs,bl));if(l<0)return null;let c=a*this.direction.dot(nu.cross(Cs));if(c<0||l+c>o)return null;let h=-a*Cs.dot(iu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,Yv)}lookAt(e,t,i){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Rs.crossVectors(i,ii),Rs.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Rs.crossVectors(i,ii)),Rs.normalize(),Ml.crossVectors(ii,Rs),s[0]=Rs.x,s[4]=Ml.x,s[8]=ii.x,s[1]=Rs.y,s[5]=Ml.y,s[9]=ii.y,s[2]=Rs.z,s[6]=Ml.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],M=i[3],b=i[7],P=i[11],I=i[15],C=s[0],N=s[4],z=s[8],w=s[12],S=s[1],F=s[5],ie=s[9],le=s[13],B=s[2],$=s[6],O=s[10],ee=s[14],j=s[3],W=s[7],Q=s[11],ne=s[15];return r[0]=o*C+a*S+l*B+c*j,r[4]=o*N+a*F+l*$+c*W,r[8]=o*z+a*ie+l*O+c*Q,r[12]=o*w+a*le+l*ee+c*ne,r[1]=h*C+u*S+d*B+p*j,r[5]=h*N+u*F+d*$+p*W,r[9]=h*z+u*ie+d*O+p*Q,r[13]=h*w+u*le+d*ee+p*ne,r[2]=g*C+v*S+m*B+f*j,r[6]=g*N+v*F+m*$+f*W,r[10]=g*z+v*ie+m*O+f*Q,r[14]=g*w+v*le+m*ee+f*ne,r[3]=M*C+b*S+P*B+I*j,r[7]=M*N+b*F+P*$+I*W,r[11]=M*z+b*ie+P*O+I*Q,r[15]=M*w+b*le+P*ee+I*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],M=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,b=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,P=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,I=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,C=t*M+i*b+s*P+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return e[0]=M*N,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*N,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*N,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*N,e[4]=b*N,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*N,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*N,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*N,e[8]=P*N,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*N,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*N,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*N,e[12]=I*N,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*N,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*N,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,M=l*c,b=l*h,P=l*u,I=i.x,C=i.y,N=i.z;return s[0]=(1-(v+f))*I,s[1]=(p+P)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(p-P)*C,s[5]=(1-(d+f))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+b)*N,s[9]=(m-M)*N,s[10]=(1-(d+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=qr.set(s[0],s[1],s[2]).length(),o=qr.set(s[4],s[5],s[6]).length(),a=qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);let c=1/r,h=1/o,u=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,t.setFromRotationMatrix(bi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ls){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===ls)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ls){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h,g,v;if(a===ls)g=(o+r)*u,v=-2*u;else if(a===Jl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},qr=new U,bi=new lt,Xv=new U(0,0,0),Yv=new U(1,1,1),Rs=new U,Ml=new U,ii=new U,Bp=new lt,Fp=new Ii,nc=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nc.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jv=0,zp=new U,Xr=new Ii,ts=new lt,wl=new U,eo=new U,Zv=new U,Jv=new Ii,Hp=new U(1,0,0),Vp=new U(0,1,0),Gp=new U(0,0,1),Kv={type:"added"},Qv={type:"removed"},Qt=class n extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new nc,i=new Ii,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new gt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,t){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wl.copy(e):wl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(eo,wl,this.up):ts.lookAt(wl,eo,this.up),this.quaternion.setFromRotationMatrix(ts),s&&(ts.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(ts),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(ts),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new U(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new U,ns=new U,su=new U,is=new U,Yr=new U,jr=new U,Wp=new U,ru=new U,au=new U,ou=new U,Sl=!1,pr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mi.subVectors(s,t),ns.subVectors(i,t),su.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(ns),l=Mi.dot(su),c=ns.dot(ns),h=ns.dot(su),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getUV(e,t,i,s,r,o,a,l){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,is.x),l.addScaledVector(o,is.y),l.addScaledVector(a,is.z),l)}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),ns.subVectors(e,t),Mi.cross(ns).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Mi.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Yr.subVectors(s,i),jr.subVectors(r,i),ru.subVectors(e,i);let l=Yr.dot(ru),c=jr.dot(ru);if(l<=0&&c<=0)return t.copy(i);au.subVectors(e,s);let h=Yr.dot(au),u=jr.dot(au);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Yr,o);ou.subVectors(e,r);let p=Yr.dot(ou),g=jr.dot(ou);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(jr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Wp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Wp,a);let f=1/(m+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(Yr,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},El={h:0,s:0,l:0};function lu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ut=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Dt.workingColorSpace){if(e=hd(e,1),t=Un(t,0,1),i=Un(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=lu(o,r,e+1/3),this.g=lu(o,r,e),this.b=lu(o,r,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=jm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Zh(e.r),this.g=Zh(e.g),this.b=Zh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Dt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Un(Dn.r*255,0,255))*65536+Math.round(Un(Dn.g*255,0,255))*256+Math.round(Un(Dn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Dn.copy(this),t);let i=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=jt){Dt.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,i=Dn.g,s=Dn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(El);let i=oo(Ls.h,El.h,t),s=oo(Ls.s,El.s,t),r=oo(Ls.l,El.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new ut;ut.NAMES=jm;var ex=0,Ni=class extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ca,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Su,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Su&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var rn=new U,Tl=new it,ri=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}};var ic=class extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sc=class extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ft=class extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}};var tx=0,di=new lt,cu=new Qt,Zr=new U,si=new yn,to=new yn,mn=new U,Qn=class n extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?sc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new gt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(si.min,to.min),si.expandByPoint(mn),mn.addVectors(si.max,to.max),si.expandByPoint(mn)):(si.expandByPoint(to.min),si.expandByPoint(to.max))}si.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mn.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),mn.add(Zr)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new U,h[S]=new U;let u=new U,d=new U,p=new U,g=new it,v=new it,m=new it,f=new U,M=new U;function b(S,F,ie){u.fromArray(s,S*3),d.fromArray(s,F*3),p.fromArray(s,ie*3),g.fromArray(o,S*2),v.fromArray(o,F*2),m.fromArray(o,ie*2),d.sub(u),p.sub(u),v.sub(g),m.sub(g);let le=1/(v.x*m.y-m.x*v.y);isFinite(le)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(le),M.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(le),c[S].add(f),c[F].add(f),c[ie].add(f),h[S].add(M),h[F].add(M),h[ie].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let S=0,F=P.length;S<F;++S){let ie=P[S],le=ie.start,B=ie.count;for(let $=le,O=le+B;$<O;$+=3)b(i[$+0],i[$+1],i[$+2])}let I=new U,C=new U,N=new U,z=new U;function w(S){N.fromArray(r,S*3),z.copy(N);let F=c[S];I.copy(F),I.sub(N.multiplyScalar(N.dot(F))).normalize(),C.crossVectors(z,F);let le=C.dot(h[S])<0?-1:1;l[S*4]=I.x,l[S*4+1]=I.y,l[S*4+2]=I.z,l[S*4+3]=le}for(let S=0,F=P.length;S<F;++S){let ie=P[S],le=ie.start,B=ie.count;for(let $=le,O=le+B;$<O;$+=3)w(i[$+0]),w(i[$+1]),w(i[$+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ri(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$p=new lt,hr=new ga,Al=new mi,qp=new U,Jr=new U,Kr=new U,Qr=new U,hu=new U,Cl=new U,Rl=new it,Ll=new it,Pl=new it,Xp=new U,Yp=new U,jp=new U,Il=new U,Nl=new U,Bt=class extends Qt{constructor(e=new Qn,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(hu.fromBufferAttribute(u,e),o?Cl.addScaledVector(hu,h):Cl.addScaledVector(hu.sub(t),h))}t.add(Cl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Al.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Al,qp)===null||hr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&($p.copy(r).invert(),hr.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let P=M,I=b;P<I;P+=3){let C=a.getX(P),N=a.getX(P+1),z=a.getX(P+2);s=Dl(this,f,e,i,c,h,u,C,N,z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=a.getX(m),b=a.getX(m+1),P=a.getX(m+2);s=Dl(this,o,e,i,c,h,u,M,b,P),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let P=M,I=b;P<I;P+=3){let C=P,N=P+1,z=P+2;s=Dl(this,f,e,i,c,h,u,C,N,z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=m,b=m+1,P=m+2;s=Dl(this,o,e,i,c,h,u,M,b,P),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function nx(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;Nl.copy(a),Nl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Nl);return c<t.near||c>t.far?null:{distance:c,point:Nl.clone(),object:n}}function Dl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Jr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,Qr);let h=nx(n,e,t,i,Jr,Kr,Qr,Il);if(h){s&&(Rl.fromBufferAttribute(s,a),Ll.fromBufferAttribute(s,l),Pl.fromBufferAttribute(s,c),h.uv=pr.getInterpolation(Il,Jr,Kr,Qr,Rl,Ll,Pl,new it)),r&&(Rl.fromBufferAttribute(r,a),Ll.fromBufferAttribute(r,l),Pl.fromBufferAttribute(r,c),h.uv1=pr.getInterpolation(Il,Jr,Kr,Qr,Rl,Ll,Pl,new it),h.uv2=h.uv1),o&&(Xp.fromBufferAttribute(o,a),Yp.fromBufferAttribute(o,l),jp.fromBufferAttribute(o,c),h.normal=pr.getInterpolation(Il,Jr,Kr,Qr,Xp,Yp,jp,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};pr.getNormal(Jr,Kr,Qr,u.normal),h.face=u}return h}var po=class n extends Qn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function g(v,m,f,M,b,P,I,C,N,z,w){let S=P/N,F=I/z,ie=P/2,le=I/2,B=C/2,$=N+1,O=z+1,ee=0,j=0,W=new U;for(let Q=0;Q<O;Q++){let ne=Q*F-le;for(let ue=0;ue<$;ue++){let V=ue*S-ie;W[v]=V*M,W[m]=ne*b,W[f]=B,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[f]=C>0?1:-1,h.push(W.x,W.y,W.z),u.push(ue/N),u.push(1-Q/z),ee+=1}}for(let Q=0;Q<z;Q++)for(let ne=0;ne<N;ne++){let ue=d+ne+$*Q,V=d+ne+$*(Q+1),X=d+(ne+1)+$*(Q+1),se=d+(ne+1)+$*Q;l.push(ue,V,se),l.push(V,X,se),j+=6}a.addGroup(p,j,w),p+=j,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ya(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wn(n){let e={};for(let t=0;t<n.length;t++){let i=ya(n[t]);for(let s in i)e[s]=i[s]}return e}function ix(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zm(n){return n.getRenderTarget()===null?n.outputColorSpace:Dt.workingColorSpace}var Ic={clone:ya,merge:Wn},sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sx,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},rc=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ls}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},an=class extends rc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ea=-90,ta=1,Nu=class extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(ea,ta,e,t);s.layers=this.layers,this.add(s);let r=new an(ea,ta,e,t);r.layers=this.layers,this.add(r);let o=new an(ea,ta,e,t);o.layers=this.layers,this.add(o);let a=new an(ea,ta,e,t);a.layers=this.layers,this.add(a);let l=new an(ea,ta,e,t);l.layers=this.layers,this.add(l);let c=new an(ea,ta,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ls)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ac=class extends Kn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:da,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Du=class extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yr?jt:pi),this.texture=new ac(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new po(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Is});r.uniforms.tEquirect.value=t;let o=new Bt(s,r),a=t.minFilter;return t.minFilter===Os&&(t.minFilter=$n),new Nu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},uu=new U,ax=new U,ox=new gt,as=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=uu.subVectors(i,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(uu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ox.getNormalMatrix(e),s=this.coplanarPoint(uu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ur=new mi,Ul=new U,mo=class{constructor(e=new as,t=new as,i=new as,s=new as,r=new as,o=new as){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ls){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],M=s[13],b=s[14],P=s[15];if(i[0].setComponents(l-r,d-c,m-p,P-f).normalize(),i[1].setComponents(l+r,d+c,m+p,P+f).normalize(),i[2].setComponents(l+o,d+h,m+g,P+M).normalize(),i[3].setComponents(l-o,d-h,m-g,P-M).normalize(),i[4].setComponents(l-a,d-u,m-v,P-b).normalize(),t===ls)i[5].setComponents(l+a,d+u,m+v,P+b).normalize();else if(t===Jl)i[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ul.x=s.normal.x>0?e.max.x:e.min.x,Ul.y=s.normal.y>0?e.max.y:e.min.y,Ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Di=class n extends Qn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let b=0;b<c;b++){let P=b*u-r;g.push(P,-M,0),v.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let b=M+c*f,P=M+c*(f+1),I=M+1+c*(f+1),C=M+1+c*f;p.push(b,P,C),p.push(P,I,C)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
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
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yx=`#ifdef USE_BATCHING
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
#endif`,vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ix=`#define PI 3.141592653589793
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
} // validated`,Nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`
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
}`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,Jx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
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
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
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
#endif`,l_=`struct PhysicalMaterial {
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
}`,c_=`
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
}`,gb=`#define DISTANCE
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
}`,yb=`#define DISTANCE
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`uniform float scale;
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
}`,bb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,Sb=`#define LAMBERT
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
}`,Eb=`#define LAMBERT
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
}`,Tb=`#define MATCAP
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
}`,Ab=`#define MATCAP
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
}`,Cb=`#define NORMAL
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
}`,Rb=`#define NORMAL
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
}`,Lb=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,Ib=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,Ub=`#define TOON
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
}`,Ob=`uniform float size;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Fb=`uniform vec3 color;
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
}`,zb=`uniform float rotation;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:cx,alphahash_pars_fragment:hx,alphamap_fragment:ux,alphamap_pars_fragment:dx,alphatest_fragment:fx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:yx,batching_vertex:vx,begin_vertex:xx,beginnormal_vertex:_x,bsdfs:bx,iridescence_fragment:Mx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:Ax,color_fragment:Cx,color_pars_fragment:Rx,color_pars_vertex:Lx,color_vertex:Px,common:Ix,cube_uv_reflection_fragment:Nx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Ox,emissivemap_fragment:kx,emissivemap_pars_fragment:Bx,colorspace_fragment:Fx,colorspace_pars_fragment:zx,envmap_fragment:Hx,envmap_common_pars_fragment:Vx,envmap_pars_fragment:Gx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:n_,envmap_vertex:$x,fog_vertex:qx,fog_pars_vertex:Xx,fog_fragment:Yx,fog_pars_fragment:jx,gradientmap_pars_fragment:Zx,lightmap_fragment:Jx,lightmap_pars_fragment:Kx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:e_,lights_pars_begin:t_,lights_toon_fragment:i_,lights_toon_pars_fragment:s_,lights_phong_fragment:r_,lights_phong_pars_fragment:a_,lights_physical_fragment:o_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:y_,map_particle_fragment:v_,map_particle_pars_fragment:x_,metalnessmap_fragment:__,metalnessmap_pars_fragment:b_,morphcolor_vertex:M_,morphnormal_vertex:w_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:T_,normal_fragment_maps:A_,normal_pars_fragment:C_,normal_pars_vertex:R_,normal_vertex:L_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:U_,opaque_fragment:O_,packing:k_,premultiplied_alpha_fragment:B_,project_vertex:F_,dithering_fragment:z_,dithering_pars_fragment:H_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:G_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:$_,shadowmap_vertex:q_,shadowmask_pars_fragment:X_,skinbase_vertex:Y_,skinning_pars_vertex:j_,skinning_vertex:Z_,skinnormal_vertex:J_,specularmap_fragment:K_,specularmap_pars_fragment:Q_,tonemapping_fragment:eb,tonemapping_pars_fragment:tb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:sb,uv_pars_vertex:rb,uv_vertex:ab,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:hb,backgroundCube_frag:ub,cube_vert:db,cube_frag:fb,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:gb,distanceRGBA_frag:yb,equirect_vert:vb,equirect_frag:xb,linedashed_vert:_b,linedashed_frag:bb,meshbasic_vert:Mb,meshbasic_frag:wb,meshlambert_vert:Sb,meshlambert_frag:Eb,meshmatcap_vert:Tb,meshmatcap_frag:Ab,meshnormal_vert:Cb,meshnormal_frag:Rb,meshphong_vert:Lb,meshphong_frag:Pb,meshphysical_vert:Ib,meshphysical_frag:Nb,meshtoon_vert:Db,meshtoon_frag:Ub,points_vert:Ob,points_frag:kb,shadow_vert:Bb,shadow_frag:Fb,sprite_vert:zb,sprite_frag:Hb},be={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},qn={basic:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Wn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Wn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Wn([be.points,be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Wn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Wn([be.common,be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Wn([be.sprite,be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Wn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Wn([be.lights,be.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};qn.physical={uniforms:Wn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ol={r:0,b:0,g:0};function Vb(n,e,t,i,s,r,o){let a=new ut(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let M=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,l):b&&b.isColor&&(v(b,1),M=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Lc)?(h===void 0&&(h=new Bt(new po(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ya(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(b.colorSpace)!==Gt,(u!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Bt(new Di(2,2),new Si({name:"BackgroundMaterial",uniforms:ya(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(b.colorSpace)!==Gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Ol,Zm(n)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function Gb(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(B,$,O,ee,j){let W=!1;if(o){let Q=v(ee,O,$);c!==Q&&(c=Q,p(c.object)),W=f(B,ee,O,j),W&&M(B,ee,O,j)}else{let Q=$.wireframe===!0;(c.geometry!==ee.id||c.program!==O.id||c.wireframe!==Q)&&(c.geometry=ee.id,c.program=O.id,c.wireframe=Q,W=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,z(B,$,O,ee),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(B){return i.isWebGL2?n.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return i.isWebGL2?n.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function v(B,$,O){let ee=O.wireframe===!0,j=a[B.id];j===void 0&&(j={},a[B.id]=j);let W=j[$.id];W===void 0&&(W={},j[$.id]=W);let Q=W[ee];return Q===void 0&&(Q=m(d()),W[ee]=Q),Q}function m(B){let $=[],O=[],ee=[];for(let j=0;j<s;j++)$[j]=0,O[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:O,attributeDivisors:ee,object:B,attributes:{},index:null}}function f(B,$,O,ee){let j=c.attributes,W=$.attributes,Q=0,ne=O.getAttributes();for(let ue in ne)if(ne[ue].location>=0){let X=j[ue],se=W[ue];if(se===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;Q++}return c.attributesNum!==Q||c.index!==ee}function M(B,$,O,ee){let j={},W=$.attributes,Q=0,ne=O.getAttributes();for(let ue in ne)if(ne[ue].location>=0){let X=W[ue];X===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(X=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(X=B.instanceColor));let se={};se.attribute=X,X&&X.data&&(se.data=X.data),j[ue]=se,Q++}c.attributes=j,c.attributesNum=Q,c.index=ee}function b(){let B=c.newAttributes;for(let $=0,O=B.length;$<O;$++)B[$]=0}function P(B){I(B,0)}function I(B,$){let O=c.newAttributes,ee=c.enabledAttributes,j=c.attributeDivisors;O[B]=1,ee[B]===0&&(n.enableVertexAttribArray(B),ee[B]=1),j[B]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,$),j[B]=$)}function C(){let B=c.newAttributes,$=c.enabledAttributes;for(let O=0,ee=$.length;O<ee;O++)$[O]!==B[O]&&(n.disableVertexAttribArray(O),$[O]=0)}function N(B,$,O,ee,j,W,Q){Q===!0?n.vertexAttribIPointer(B,$,O,j,W):n.vertexAttribPointer(B,$,O,ee,j,W)}function z(B,$,O,ee){if(i.isWebGL2===!1&&(B.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let j=ee.attributes,W=O.getAttributes(),Q=$.defaultAttributeValues;for(let ne in W){let ue=W[ne];if(ue.location>=0){let V=j[ne];if(V===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(V=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(V=B.instanceColor)),V!==void 0){let X=V.normalized,se=V.itemSize,re=t.get(V);if(re===void 0)continue;let ce=re.buffer,Ce=re.type,Be=re.bytesPerElement,ge=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||V.gpuType===Fm);if(V.isInterleavedBufferAttribute){let Ke=V.data,q=Ke.stride,Kt=V.offset;if(Ke.isInstancedInterleavedBuffer){for(let He=0;He<ue.locationSize;He++)I(ue.location+He,Ke.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let He=0;He<ue.locationSize;He++)P(ue.location+He);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let He=0;He<ue.locationSize;He++)N(ue.location+He,se/ue.locationSize,Ce,X,q*Be,(Kt+se/ue.locationSize*He)*Be,ge)}else{if(V.isInstancedBufferAttribute){for(let Ke=0;Ke<ue.locationSize;Ke++)I(ue.location+Ke,V.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ke=0;Ke<ue.locationSize;Ke++)P(ue.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Ke=0;Ke<ue.locationSize;Ke++)N(ue.location+Ke,se/ue.locationSize,Ce,X,se*Be,se/ue.locationSize*Ke*Be,ge)}}else if(Q!==void 0){let X=Q[ne];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(ue.location,X);break;case 3:n.vertexAttrib3fv(ue.location,X);break;case 4:n.vertexAttrib4fv(ue.location,X);break;default:n.vertexAttrib1fv(ue.location,X)}}}}C()}function w(){ie();for(let B in a){let $=a[B];for(let O in $){let ee=$[O];for(let j in ee)g(ee[j].object),delete ee[j];delete $[O]}delete a[B]}}function S(B){if(a[B.id]===void 0)return;let $=a[B.id];for(let O in $){let ee=$[O];for(let j in ee)g(ee[j].object),delete ee[j];delete $[O]}delete a[B.id]}function F(B){for(let $ in a){let O=a[$];if(O[B.id]===void 0)continue;let ee=O[B.id];for(let j in ee)g(ee[j].object),delete ee[j];delete O[B.id]}}function ie(){le(),h=!0,c!==l&&(c=l,p(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ie,resetDefaultState:le,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:P,disableUnusedAttributes:C}}function Wb(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function $b(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,P=o||e.has("OES_texture_float"),I=b&&P,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:P,floatVertexTextures:I,maxSamples:C}}function qb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new as,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,b=M*4,P=f.clippingState||null;l.value=P,P=h(g,d,b,p);for(let I=0;I!==b;++I)P[I]=t[I];f.clippingState=P,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,P=p;b!==v;++b,P+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(m,P),m[P+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Xb(n){let e=new WeakMap;function t(o,a){return a===Eu?o.mapping=da:a===Tu&&(o.mapping=fa),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Eu||a===Tu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Du(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Bs=class extends rc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oa=4,Zp=[.125,.215,.35,.446,.526,.582],fr=20,du=new Bs,Jp=new ut,fu=null,pu=0,mu=0,dr=(1+Math.sqrt(5))/2,na=1/dr,Kp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,dr,na),new U(0,dr,-na),new U(na,0,dr),new U(-na,0,dr),new U(dr,na,0),new U(-dr,na,0)],oc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ho,format:fi,colorSpace:cs,depthBuffer:!1},s=Qp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(r)),this._blurMaterial=jb(r,e,t)}return s}_compileMaterial(e){let t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,du)}_sceneToCubeUV(e,t,i,s){let a=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jp),h.toneMapping=Ns,h.autoClear=!1;let p=new tn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Bt(new po,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jp),v=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let b=this._cubeSize;kl(s,M*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===da||e.mapping===fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;kl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,du)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kp[(s-1)%Kp.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fr-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fr;m>fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let f=[],M=0;for(let N=0;N<fr;++N){let z=N/v,w=Math.exp(-z*z/2);f.push(w),N===0?M+=w:N<m&&(M+=2*w)}for(let N=0;N<f.length;N++)f[N]=f[N]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let P=this._sizeLods[s],I=3*P*(s>b-oa?s-b+oa:0),C=4*(this._cubeSize-P);kl(t,I,C,3*P,2*P),l.setRenderTarget(t),l.render(u,du)}};function Yb(n){let e=[],t=[],i=[],s=n,r=n-oa+1+Zp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-oa?l=Zp[o-n+oa-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,M=new Float32Array(v*g*p),b=new Float32Array(m*g*p),P=new Float32Array(f*g*p);for(let C=0;C<p;C++){let N=C%3*2/3-1,z=C>2?0:-1,w=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];M.set(w,v*g*C),b.set(d,m*g*C);let S=[C,C,C,C,C,C];P.set(S,f*g*C)}let I=new Qn;I.setAttribute("position",new ri(M,v)),I.setAttribute("uv",new ri(b,m)),I.setAttribute("faceIndex",new ri(P,f)),e.push(I),s>oa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qp(n,e,t){let i=new hs(n,e,t);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jb(n,e,t){let i=new Float32Array(fr),s=new U(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ud(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function em(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function tm(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function ud(){return`

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
	`}function Zb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Eu||l===Tu,h=l===da||l===fa;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new oc(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new oc(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Kb(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let M=p.array;v=p.version;for(let b=0,P=M.length;b<P;b+=3){let I=M[b+0],C=M[b+1],N=M[b+2];d.push(I,C,C,N,N,I)}}else if(g!==void 0){let M=g.array;v=g.version;for(let b=0,P=M.length/3-1;b<P;b+=3){let I=b+0,C=b+1,N=b+2;d.push(I,C,C,N,N,I)}}else return;let m=new(Ym(d)?sc:ic)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Qb(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let f=0;for(let M=0;M<v;M++)f+=g[M];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function e1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function t1(n,e){return n[0]-e[0]}function n1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function i1(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==g){let B=function(){ie.dispose(),r.delete(h),h.removeEventListener("dispose",B)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],z=0;M===!0&&(z=1),b===!0&&(z=2),P===!0&&(z=3);let w=h.attributes.position.count*z,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let F=new Float32Array(w*S*4*g),ie=new tc(F,w,S,g);ie.type=os,ie.needsUpdate=!0;let le=z*4;for(let $=0;$<g;$++){let O=I[$],ee=C[$],j=N[$],W=w*S*4*$;for(let Q=0;Q<O.count;Q++){let ne=Q*le;M===!0&&(o.fromBufferAttribute(O,Q),F[W+ne+0]=o.x,F[W+ne+1]=o.y,F[W+ne+2]=o.z,F[W+ne+3]=0),b===!0&&(o.fromBufferAttribute(ee,Q),F[W+ne+4]=o.x,F[W+ne+5]=o.y,F[W+ne+6]=o.z,F[W+ne+7]=0),P===!0&&(o.fromBufferAttribute(j,Q),F[W+ne+8]=o.x,F[W+ne+9]=o.y,F[W+ne+10]=o.z,F[W+ne+11]=j.itemSize===4?o.w:1)}}v={count:g,texture:ie,size:new it(w,S)},r.set(h,v),h.addEventListener("dispose",B)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<p;b++){let P=g[b];P[0]=b,P[1]=d[b]}g.sort(n1);for(let b=0;b<8;b++)b<p&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(t1);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let P=a[b],I=P[0],C=P[1];I!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+b)!==v[I]&&h.setAttribute("morphTarget"+b,v[I]),m&&h.getAttribute("morphNormal"+b)!==m[I]&&h.setAttribute("morphNormal"+b,m[I]),s[b]=C,f+=C):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function s1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var lc=class extends Kn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:gr,h!==gr&&h!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gr&&(i=Ps),i===void 0&&h===pa&&(i=mr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Km=new Kn,Qm=new lc(1,1);Qm.compareFunction=Xm;var eg=new tc,tg=new Iu,ng=new ac,nm=[],im=[],sm=new Float32Array(16),rm=new Float32Array(9),am=new Float32Array(4);function Sa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=nm[s];if(r===void 0&&(r=new Float32Array(s),nm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nc(n,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function c1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;am.set(i),n.uniformMatrix2fv(this.addr,!1,am),dn(t,i)}}function h1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;rm.set(i),n.uniformMatrix3fv(this.addr,!1,rm),dn(t,i)}}function u1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;sm.set(i),n.uniformMatrix4fv(this.addr,!1,sm),dn(t,i)}}function d1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function g1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function x1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function _1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Qm:Km;t.setTexture2D(e||r,s)}function b1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tg,s)}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ng,s)}function w1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||eg,s)}function S1(n){switch(n){case 5126:return r1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return h1;case 35676:return u1;case 5124:case 35670:return d1;case 35667:case 35671:return f1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return y1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return w1}}function E1(n,e){n.uniform1fv(this.addr,e)}function T1(n,e){let t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function A1(n,e){let t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function C1(n,e){let t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function R1(n,e){let t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function L1(n,e){let t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P1(n,e){let t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I1(n,e){n.uniform1iv(this.addr,e)}function N1(n,e){n.uniform2iv(this.addr,e)}function D1(n,e){n.uniform3iv(this.addr,e)}function U1(n,e){n.uniform4iv(this.addr,e)}function O1(n,e){n.uniform1uiv(this.addr,e)}function k1(n,e){n.uniform2uiv(this.addr,e)}function B1(n,e){n.uniform3uiv(this.addr,e)}function F1(n,e){n.uniform4uiv(this.addr,e)}function z1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Km,r[o])}function H1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tg,r[o])}function V1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ng,r[o])}function G1(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||eg,r[o])}function W1(n){switch(n){case 5126:return E1;case 35664:return T1;case 35665:return A1;case 35666:return C1;case 35674:return R1;case 35675:return L1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return N1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return O1;case 36294:return k1;case 36295:return B1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return G1}}var Uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=S1(t.type)}},Ou=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W1(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},gu=/(\w+)(\])?(\[|\.)?/g;function om(n,e){n.seq.push(e),n.map[e.id]=e}function $1(n,e,t){let i=n.name,s=i.length;for(gu.lastIndex=0;;){let r=gu.exec(i),o=gu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){om(t,c===void 0?new Uu(a,n,e):new Ou(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ku(a),om(t,u)),t=u}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function lm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var q1=37297,X1=0;function Y1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function j1(n){let e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(n),i;switch(e===t?i="":e===Zl&&t===jl?i="LinearDisplayP3ToLinearSRGB":e===jl&&t===Zl&&(i="LinearSRGBToLinearDisplayP3"),n){case cs:case Pc:return[i,"LinearTransferOETF"];case jt:case cd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Y1(n.getShaderSource(e),o)}else return s}function Z1(n,e){let t=j1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function J1(n,e){let t;switch(e){case tv:t="Linear";break;case nv:t="Reinhard";break;case iv:t="OptimizedCineon";break;case sv:t="ACESFilmic";break;case av:t="AgX";break;case rv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function K1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)}function Q1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(la).join(`
`)}function eM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function la(n){return n!==""}function hm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(n){return n.replace(nM,sM)}var iM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sM(n,e){let t=pt[e];if(t===void 0){let i=iM.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bu(t)}var rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(n){return n.replace(rM,aM)}function aM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case da:case fa:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function hM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Qy:e="ENVMAP_BLENDING_MIX";break;case ev:e="ENVMAP_BLENDING_ADD";break}return e}function uM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=oM(t),c=lM(t),h=cM(t),u=hM(t),d=uM(t),p=t.isWebGL2?"":K1(t),g=Q1(t),v=eM(r),m=s.createProgram(),f,M,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),M.length>0&&(M+=`
`)):(f=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),M=[p,fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ns?J1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Z1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=Bu(o),o=hm(o,t),o=um(o,t),a=Bu(a),a=hm(a,t),a=um(a,t),o=dm(o),a=dm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let P=b+f+o,I=b+M+a,C=lm(s,s.VERTEX_SHADER,P),N=lm(s,s.FRAGMENT_SHADER,I);s.attachShader(m,C),s.attachShader(m,N),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(ie){if(n.debug.checkShaderErrors){let le=s.getProgramInfoLog(m).trim(),B=s.getShaderInfoLog(C).trim(),$=s.getShaderInfoLog(N).trim(),O=!0,ee=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,C,N);else{let j=cm(s,C,"vertex"),W=cm(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+j+`
`+W)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(B===""||$==="")&&(ee=!1);ee&&(ie.diagnostics={runnable:O,programLog:le,vertexShader:{log:B,prefix:f},fragmentShader:{log:$,prefix:M}})}s.deleteShader(C),s.deleteShader(N),w=new ua(s,m),S=tM(s,m)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let S;this.getAttributes=function(){return S===void 0&&z(this),S};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,q1)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=N,this}var fM=0,Fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zu(e),t.set(e,i)),i}},zu=class{constructor(e){this.id=fM++,this.code=e,this.usedTimes=0}};function pM(n,e,t,i,s,r,o){let a=new fo,l=new Fu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function m(w,S,F,ie,le){let B=ie.fog,$=le.geometry,O=w.isMeshStandardMaterial?ie.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||O),j=ee&&ee.mapping===Lc?ee.image.height:null,W=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=Q!==void 0?Q.length:0,ue=0;$.morphAttributes.position!==void 0&&(ue=1),$.morphAttributes.normal!==void 0&&(ue=2),$.morphAttributes.color!==void 0&&(ue=3);let V,X,se,re;if(W){let fn=qn[W];V=fn.vertexShader,X=fn.fragmentShader}else V=w.vertexShader,X=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),re=l.getFragmentShaderID(w);let ce=n.getRenderTarget(),Ce=le.isInstancedMesh===!0,Be=le.isBatchedMesh===!0,ge=!!w.map,Ke=!!w.matcap,q=!!ee,Kt=!!w.aoMap,He=!!w.lightMap,tt=!!w.bumpMap,Ue=!!w.normalMap,Et=!!w.displacementMap,rt=!!w.emissiveMap,D=!!w.metalnessMap,T=!!w.roughnessMap,Z=w.anisotropy>0,ye=w.clearcoat>0,pe=w.iridescence>0,xe=w.sheen>0,Ve=w.transmission>0,Ae=Z&&!!w.anisotropyMap,De=ye&&!!w.clearcoatMap,je=ye&&!!w.clearcoatNormalMap,dt=ye&&!!w.clearcoatRoughnessMap,me=pe&&!!w.iridescenceMap,Tt=pe&&!!w.iridescenceThicknessMap,mt=xe&&!!w.sheenColorMap,nt=xe&&!!w.sheenRoughnessMap,$e=!!w.specularMap,Oe=!!w.specularColorMap,ct=!!w.specularIntensityMap,wt=Ve&&!!w.transmissionMap,Ht=Ve&&!!w.thicknessMap,ft=!!w.gradientMap,we=!!w.alphaMap,k=w.alphaTest>0,Ee=!!w.alphaHash,Te=!!w.extensions,Qe=!!$.attributes.uv1,Ye=!!$.attributes.uv2,Ct=!!$.attributes.uv3,Pt=Ns;return w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Pt=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:V,fragmentShader:X,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Be,instancing:Ce,instancingColor:Ce&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:cs,map:ge,matcap:Ke,envMap:q,envMapMode:q&&ee.mapping,envMapCubeUVHeight:j,aoMap:Kt,lightMap:He,bumpMap:tt,normalMap:Ue,displacementMap:d&&Et,emissiveMap:rt,normalMapObjectSpace:Ue&&w.normalMapType===_v,normalMapTangentSpace:Ue&&w.normalMapType===ld,metalnessMap:D,roughnessMap:T,anisotropy:Z,anisotropyMap:Ae,clearcoat:ye,clearcoatMap:De,clearcoatNormalMap:je,clearcoatRoughnessMap:dt,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:Tt,sheen:xe,sheenColorMap:mt,sheenRoughnessMap:nt,specularMap:$e,specularColorMap:Oe,specularIntensityMap:ct,transmission:Ve,transmissionMap:wt,thicknessMap:Ht,gradientMap:ft,opaque:w.transparent===!1&&w.blending===ca,alphaMap:we,alphaTest:k,alphaHash:Ee,combine:w.combine,mapUv:ge&&v(w.map.channel),aoMapUv:Kt&&v(w.aoMap.channel),lightMapUv:He&&v(w.lightMap.channel),bumpMapUv:tt&&v(w.bumpMap.channel),normalMapUv:Ue&&v(w.normalMap.channel),displacementMapUv:Et&&v(w.displacementMap.channel),emissiveMapUv:rt&&v(w.emissiveMap.channel),metalnessMapUv:D&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:Ae&&v(w.anisotropyMap.channel),clearcoatMapUv:De&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:nt&&v(w.sheenRoughnessMap.channel),specularMapUv:$e&&v(w.specularMap.channel),specularColorMapUv:Oe&&v(w.specularColorMap.channel),specularIntensityMapUv:ct&&v(w.specularIntensityMap.channel),transmissionMapUv:wt&&v(w.transmissionMap.channel),thicknessMapUv:Ht&&v(w.thicknessMap.channel),alphaMapUv:we&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ue||Z),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Qe,vertexUv2s:Ye,vertexUv3s:Ct,pointsUvs:le.isPoints===!0&&!!$.attributes.uv&&(ge||we),fog:!!B,useFog:w.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:le.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ge&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xn,flipSided:w.side===gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Te&&w.extensions.derivatives===!0,extensionFragDepth:Te&&w.extensions.fragDepth===!0,extensionDrawBuffers:Te&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)S.push(F),S.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(M(S,w),b(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function b(w,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function P(w){let S=g[w.type],F;if(S){let ie=qn[S];F=Ic.clone(ie.uniforms)}else F=w.uniforms;return F}function I(w,S){let F;for(let ie=0,le=c.length;ie<le;ie++){let B=c[ie];if(B.cacheKey===S){F=B,++F.usedTimes;break}}return F===void 0&&(F=new dM(n,S,w,r),c.push(F)),F}function C(w){if(--w.usedTimes===0){let S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function N(w){l.remove(w)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:P,acquireProgram:I,releaseProgram:C,releaseShaderCache:N,programs:c,dispose:z}}function mM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function gM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function a(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||gM),i.length>1&&i.sort(d||pm),s.length>1&&s.sort(d||pm)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function yM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new mm,n.set(i,[o])):s>=r.length?(o=new mm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ut};break;case"SpotLight":t={position:new U,direction:new U,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function xM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var _M=0;function bM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function MM(n,e){let t=new vM,i=xM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new lt,a=new lt;function l(h,u){let d=0,p=0,g=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let v=0,m=0,f=0,M=0,b=0,P=0,I=0,C=0,N=0,z=0,w=0;h.sort(bM);let S=u===!0?Math.PI:1;for(let ie=0,le=h.length;ie<le;ie++){let B=h[ie],$=B.color,O=B.intensity,ee=B.distance,j=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=$.r*O*S,p+=$.g*O*S,g+=$.b*O*S;else if(B.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(B.sh.coefficients[W],O);w++}else if(B.isDirectionalLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*S),B.castShadow){let Q=B.shadow,ne=i.get(B);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,s.directionalShadow[v]=ne,s.directionalShadowMap[v]=j,s.directionalShadowMatrix[v]=B.shadow.matrix,P++}s.directional[v]=W,v++}else if(B.isSpotLight){let W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy($).multiplyScalar(O*S),W.distance=ee,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,s.spot[f]=W;let Q=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,Q.updateMatrices(B),B.castShadow&&z++),s.spotLightMatrix[f]=Q.matrix,B.castShadow){let ne=i.get(B);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,s.spotShadow[f]=ne,s.spotShadowMap[f]=j,C++}f++}else if(B.isRectAreaLight){let W=t.get(B);W.color.copy($).multiplyScalar(O),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=W,M++}else if(B.isPointLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*S),W.distance=B.distance,W.decay=B.decay,B.castShadow){let Q=B.shadow,ne=i.get(B);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,s.pointShadow[m]=ne,s.pointShadowMap[m]=j,s.pointShadowMatrix[m]=B.shadow.matrix,I++}s.point[m]=W,m++}else if(B.isHemisphereLight){let W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(O*S),W.groundColor.copy(B.groundColor).multiplyScalar(O*S),s.hemi[b]=W,b++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==v||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==M||F.hemiLength!==b||F.numDirectionalShadows!==P||F.numPointShadows!==I||F.numSpotShadows!==C||F.numSpotMaps!==N||F.numLightProbes!==w)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+N-z,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=w,F.directionalLength=v,F.pointLength=m,F.spotLength=f,F.rectAreaLength=M,F.hemiLength=b,F.numDirectionalShadows=P,F.numPointShadows=I,F.numSpotShadows=C,F.numSpotMaps=N,F.numLightProbes=w,s.version=_M++)}function c(h,u){let d=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let M=0,b=h.length;M<b;M++){let P=h[M];if(P.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),d++}else if(P.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),g++}else if(P.isRectAreaLight){let I=s.rectArea[v];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(P.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(P.isPointLight){let I=s.point[p];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(f),p++}else if(P.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function gm(n,e){let t=new MM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function wM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new gm(n,e),t.set(r,[l])):o>=a.length?(l=new gm(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Hu=class extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vu=class extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
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
}`;function TM(n,e,t){let i=new mo,s=new it,r=new it,o=new _t,a=new Hu({depthPacking:xv}),l=new Vu,c={},h=t.maxTextureSize,u={[Jn]:gn,[gn]:Jn,[Xn]:Xn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:SM,fragmentShader:EM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Qn;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let f=this.type;this.render=function(C,N,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=n.getRenderTarget(),S=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(Is),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);let le=f!==rs&&this.type===rs,B=f===rs&&this.type!==rs;for(let $=0,O=C.length;$<O;$++){let ee=C[$],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let W=j.getFrameExtents();if(s.multiply(W),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,j.mapSize.y=r.y)),j.map===null||le===!0||B===!0){let ne=this.type!==rs?{minFilter:wn,magFilter:wn}:{};j.map!==null&&j.map.dispose(),j.map=new hs(s.x,s.y,ne),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let Q=j.getViewportCount();for(let ne=0;ne<Q;ne++){let ue=j.getViewport(ne);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),ie.viewport(o),j.updateMatrices(ee,ne),i=j.getFrustum(),P(N,z,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===rs&&M(j,z),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,S,F)};function M(C,N){let z=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new hs(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,z,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,z,p,v,null)}function b(C,N,z,w){let S=null,F=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)S=F;else if(S=z.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ie=S.uuid,le=N.uuid,B=c[ie];B===void 0&&(B={},c[ie]=B);let $=B[le];$===void 0&&($=S.clone(),B[le]=$,N.addEventListener("dispose",I)),S=$}if(S.visible=N.visible,S.wireframe=N.wireframe,w===rs?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:u[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let ie=n.properties.get(S);ie.light=z}return S}function P(C,N,z,w,S){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===rs)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let le=e.update(C),B=C.material;if(Array.isArray(B)){let $=le.groups;for(let O=0,ee=$.length;O<ee;O++){let j=$[O],W=B[j.materialIndex];if(W&&W.visible){let Q=b(C,W,w,S);C.onBeforeShadow(n,C,N,z,le,Q,j),n.renderBufferDirect(z,null,le,Q,C,j),C.onAfterShadow(n,C,N,z,le,Q,j)}}}else if(B.visible){let $=b(C,B,w,S);C.onBeforeShadow(n,C,N,z,le,$,null),n.renderBufferDirect(z,null,le,$,C,null),C.onAfterShadow(n,C,N,z,le,$,null)}}let ie=C.children;for(let le=0,B=ie.length;le<B;le++)P(ie[le],N,z,w,S)}function I(C){C.target.removeEventListener("dispose",I);for(let z in c){let w=c[z],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function AM(n,e,t){let i=t.isWebGL2;function s(){let k=!1,Ee=new _t,Te=null,Qe=new _t(0,0,0,0);return{setMask:function(Ye){Te!==Ye&&!k&&(n.colorMask(Ye,Ye,Ye,Ye),Te=Ye)},setLocked:function(Ye){k=Ye},setClear:function(Ye,Ct,Pt,At,fn){fn===!0&&(Ye*=At,Ct*=At,Pt*=At),Ee.set(Ye,Ct,Pt,At),Qe.equals(Ee)===!1&&(n.clearColor(Ye,Ct,Pt,At),Qe.copy(Ee))},reset:function(){k=!1,Te=null,Qe.set(-1,0,0,0)}}}function r(){let k=!1,Ee=null,Te=null,Qe=null;return{setTest:function(Ye){Ye?Be(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Ye){Ee!==Ye&&!k&&(n.depthMask(Ye),Ee=Ye)},setFunc:function(Ye){if(Te!==Ye){switch(Ye){case qy:n.depthFunc(n.NEVER);break;case Xy:n.depthFunc(n.ALWAYS);break;case Yy:n.depthFunc(n.LESS);break;case $l:n.depthFunc(n.LEQUAL);break;case jy:n.depthFunc(n.EQUAL);break;case Zy:n.depthFunc(n.GEQUAL);break;case Jy:n.depthFunc(n.GREATER);break;case Ky:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=Ye}},setLocked:function(Ye){k=Ye},setClear:function(Ye){Qe!==Ye&&(n.clearDepth(Ye),Qe=Ye)},reset:function(){k=!1,Ee=null,Te=null,Qe=null}}}function o(){let k=!1,Ee=null,Te=null,Qe=null,Ye=null,Ct=null,Pt=null,At=null,fn=null;return{setTest:function(It){k||(It?Be(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(It){Ee!==It&&!k&&(n.stencilMask(It),Ee=It)},setFunc:function(It,Mn,hi){(Te!==It||Qe!==Mn||Ye!==hi)&&(n.stencilFunc(It,Mn,hi),Te=It,Qe=Mn,Ye=hi)},setOp:function(It,Mn,hi){(Ct!==It||Pt!==Mn||At!==hi)&&(n.stencilOp(It,Mn,hi),Ct=It,Pt=Mn,At=hi)},setLocked:function(It){k=It},setClear:function(It){fn!==It&&(n.clearStencil(It),fn=It)},reset:function(){k=!1,Ee=null,Te=null,Qe=null,Ye=null,Ct=null,Pt=null,At=null,fn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,b=null,P=null,I=null,C=null,N=null,z=null,w=new ut(0,0,0),S=0,F=!1,ie=null,le=null,B=null,$=null,O=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,W=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=W>=2);let ne=null,ue={},V=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),se=new _t().fromArray(V),re=new _t().fromArray(X);function ce(k,Ee,Te,Qe){let Ye=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(k,Ct),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<Te;Pt++)i&&(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,Qe,0,n.RGBA,n.UNSIGNED_BYTE,Ye):n.texImage2D(Ee+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ye);return Ct}let Ce={};Ce[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(n.DEPTH_TEST),l.setFunc($l),rt(!1),D(jf),Be(n.CULL_FACE),Ue(Is);function Be(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function ge(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function Ke(k,Ee){return p[k]!==Ee?(n.bindFramebuffer(k,Ee),p[k]=Ee,i&&(k===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ee),k===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function q(k,Ee){let Te=v,Qe=!1;if(k)if(Te=g.get(Ee),Te===void 0&&(Te=[],g.set(Ee,Te)),k.isWebGLMultipleRenderTargets){let Ye=k.texture;if(Te.length!==Ye.length||Te[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,Pt=Ye.length;Ct<Pt;Ct++)Te[Ct]=n.COLOR_ATTACHMENT0+Ct;Te.length=Ye.length,Qe=!0}}else Te[0]!==n.COLOR_ATTACHMENT0&&(Te[0]=n.COLOR_ATTACHMENT0,Qe=!0);else Te[0]!==n.BACK&&(Te[0]=n.BACK,Qe=!0);Qe&&(t.isWebGL2?n.drawBuffers(Te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Te))}function Kt(k){return m!==k?(n.useProgram(k),m=k,!0):!1}let He={[Li]:n.FUNC_ADD,[Dy]:n.FUNC_SUBTRACT,[Uy]:n.FUNC_REVERSE_SUBTRACT};if(i)He[Qf]=n.MIN,He[ep]=n.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(He[Qf]=k.MIN_EXT,He[ep]=k.MAX_EXT)}let tt={[Cc]:n.ZERO,[rd]:n.ONE,[Oy]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[Hy]:n.SRC_ALPHA_SATURATE,[zy]:n.DST_COLOR,[By]:n.DST_ALPHA,[ky]:n.ONE_MINUS_SRC_COLOR,[Su]:n.ONE_MINUS_SRC_ALPHA,[ad]:n.ONE_MINUS_DST_COLOR,[Fy]:n.ONE_MINUS_DST_ALPHA,[Vy]:n.CONSTANT_COLOR,[Gy]:n.ONE_MINUS_CONSTANT_COLOR,[Wy]:n.CONSTANT_ALPHA,[$y]:n.ONE_MINUS_CONSTANT_ALPHA};function Ue(k,Ee,Te,Qe,Ye,Ct,Pt,At,fn,It){if(k===Is){f===!0&&(ge(n.BLEND),f=!1);return}if(f===!1&&(Be(n.BLEND),f=!0),k!==sd){if(k!==M||It!==F){if((b!==Li||C!==Li)&&(n.blendEquation(n.FUNC_ADD),b=Li,C=Li),It)switch(k){case ca:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFunc(n.ONE,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,I=null,N=null,z=null,w.set(0,0,0),S=0,M=k,F=It}return}Ye=Ye||Ee,Ct=Ct||Te,Pt=Pt||Qe,(Ee!==b||Ye!==C)&&(n.blendEquationSeparate(He[Ee],He[Ye]),b=Ee,C=Ye),(Te!==P||Qe!==I||Ct!==N||Pt!==z)&&(n.blendFuncSeparate(tt[Te],tt[Qe],tt[Ct],tt[Pt]),P=Te,I=Qe,N=Ct,z=Pt),(At.equals(w)===!1||fn!==S)&&(n.blendColor(At.r,At.g,At.b,fn),w.copy(At),S=fn),M=k,F=!1}function Et(k,Ee){k.side===Xn?ge(n.CULL_FACE):Be(n.CULL_FACE);let Te=k.side===gn;Ee&&(Te=!Te),rt(Te),k.blending===ca&&k.transparent===!1?Ue(Is):Ue(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);let Qe=k.stencilWrite;c.setTest(Qe),Qe&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Z(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){ie!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),ie=k)}function D(k){k!==Py?(Be(n.CULL_FACE),k!==le&&(k===jf?n.cullFace(n.BACK):k===Iy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),le=k}function T(k){k!==B&&(j&&n.lineWidth(k),B=k)}function Z(k,Ee,Te){k?(Be(n.POLYGON_OFFSET_FILL),($!==Ee||O!==Te)&&(n.polygonOffset(Ee,Te),$=Ee,O=Te)):ge(n.POLYGON_OFFSET_FILL)}function ye(k){k?Be(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function pe(k){k===void 0&&(k=n.TEXTURE0+ee-1),ne!==k&&(n.activeTexture(k),ne=k)}function xe(k,Ee,Te){Te===void 0&&(ne===null?Te=n.TEXTURE0+ee-1:Te=ne);let Qe=ue[Te];Qe===void 0&&(Qe={type:void 0,texture:void 0},ue[Te]=Qe),(Qe.type!==k||Qe.texture!==Ee)&&(ne!==Te&&(n.activeTexture(Te),ne=Te),n.bindTexture(k,Ee||Ce[k]),Qe.type=k,Qe.texture=Ee)}function Ve(){let k=ue[ne];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(k){se.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),se.copy(k))}function wt(k){re.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),re.copy(k))}function Ht(k,Ee){let Te=u.get(Ee);Te===void 0&&(Te=new WeakMap,u.set(Ee,Te));let Qe=Te.get(k);Qe===void 0&&(Qe=n.getUniformBlockIndex(Ee,k.name),Te.set(k,Qe))}function ft(k,Ee){let Qe=u.get(Ee).get(k);h.get(Ee)!==Qe&&(n.uniformBlockBinding(Ee,Qe,k.__bindingPointIndex),h.set(Ee,Qe))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ne=null,ue={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,b=null,P=null,I=null,C=null,N=null,z=null,w=new ut(0,0,0),S=0,F=!1,ie=null,le=null,B=null,$=null,O=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Be,disable:ge,bindFramebuffer:Ke,drawBuffers:q,useProgram:Kt,setBlending:Ue,setMaterial:Et,setFlipSided:rt,setCullFace:D,setLineWidth:T,setPolygonOffset:Z,setScissorTest:ye,activeTexture:pe,bindTexture:xe,unbindTexture:Ve,compressedTexImage2D:Ae,compressedTexImage3D:De,texImage2D:$e,texImage3D:Oe,updateUBOMapping:Ht,uniformBlockBinding:ft,texStorage2D:mt,texStorage3D:nt,texSubImage2D:je,texSubImage3D:dt,compressedTexSubImage2D:me,compressedTexSubImage3D:Tt,scissor:ct,viewport:wt,reset:we}}function CM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return p?new OffscreenCanvas(D,T):uo("canvas")}function v(D,T,Z,ye){let pe=1;if((D.width>ye||D.height>ye)&&(pe=ye/Math.max(D.width,D.height)),pe<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let xe=T?Kl:Math.floor,Ve=xe(pe*D.width),Ae=xe(pe*D.height);u===void 0&&(u=g(Ve,Ae));let De=Z?g(Ve,Ae):u;return De.width=Ve,De.height=Ae,De.getContext("2d").drawImage(D,0,0,Ve,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ve+"x"+Ae+")."),De}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return Lu(D.width)&&Lu(D.height)}function f(D){return a?!1:D.wrapS!==On||D.wrapT!==On||D.minFilter!==wn&&D.minFilter!==$n}function M(D,T){return D.generateMipmaps&&T&&D.minFilter!==wn&&D.minFilter!==$n}function b(D){n.generateMipmap(D)}function P(D,T,Z,ye,pe=!1){if(a===!1)return T;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let xe=T;if(T===n.RED&&(Z===n.FLOAT&&(xe=n.R32F),Z===n.HALF_FLOAT&&(xe=n.R16F),Z===n.UNSIGNED_BYTE&&(xe=n.R8)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(xe=n.R8UI),Z===n.UNSIGNED_SHORT&&(xe=n.R16UI),Z===n.UNSIGNED_INT&&(xe=n.R32UI),Z===n.BYTE&&(xe=n.R8I),Z===n.SHORT&&(xe=n.R16I),Z===n.INT&&(xe=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(xe=n.RG32F),Z===n.HALF_FLOAT&&(xe=n.RG16F),Z===n.UNSIGNED_BYTE&&(xe=n.RG8)),T===n.RGBA){let Ve=pe?Yl:Dt.getTransfer(ye);Z===n.FLOAT&&(xe=n.RGBA32F),Z===n.HALF_FLOAT&&(xe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(xe=Ve===Gt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)}return(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function I(D,T,Z){return M(D,Z)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function C(D){return D===wn||D===np||D===Vh?n.NEAREST:n.LINEAR}function N(D){let T=D.target;T.removeEventListener("dispose",N),w(T),T.isVideoTexture&&h.delete(T)}function z(D){let T=D.target;T.removeEventListener("dispose",z),F(T)}function w(D){let T=i.get(D);if(T.__webglInit===void 0)return;let Z=D.source,ye=d.get(Z);if(ye){let pe=ye[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&S(D),Object.keys(ye).length===0&&d.delete(Z)}i.remove(D)}function S(D){let T=i.get(D);n.deleteTexture(T.__webglTexture);let Z=D.source,ye=d.get(Z);delete ye[T.__cacheKey],o.memory.textures--}function F(D){let T=D.texture,Z=i.get(D),ye=i.get(T);if(ye.__webglTexture!==void 0&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Z.__webglFramebuffer[pe]))for(let xe=0;xe<Z.__webglFramebuffer[pe].length;xe++)n.deleteFramebuffer(Z.__webglFramebuffer[pe][xe]);else n.deleteFramebuffer(Z.__webglFramebuffer[pe]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[pe])}else{if(Array.isArray(Z.__webglFramebuffer))for(let pe=0;pe<Z.__webglFramebuffer.length;pe++)n.deleteFramebuffer(Z.__webglFramebuffer[pe]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let pe=0;pe<Z.__webglColorRenderbuffer.length;pe++)Z.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[pe]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let pe=0,xe=T.length;pe<xe;pe++){let Ve=i.get(T[pe]);Ve.__webglTexture&&(n.deleteTexture(Ve.__webglTexture),o.memory.textures--),i.remove(T[pe])}i.remove(T),i.remove(D)}let ie=0;function le(){ie=0}function B(){let D=ie;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),ie+=1,D}function $(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function O(D,T){let Z=i.get(D);if(D.isVideoTexture&&Et(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){let ye=D.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,D,T);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function ee(D,T){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){se(Z,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function j(D,T){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){se(Z,D,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function W(D,T){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){re(Z,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}let Q={[Us]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[Au]:n.MIRRORED_REPEAT},ne={[wn]:n.NEAREST,[np]:n.NEAREST_MIPMAP_NEAREST,[Vh]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[lv]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},ue={[bv]:n.NEVER,[Av]:n.ALWAYS,[Mv]:n.LESS,[Xm]:n.LEQUAL,[wv]:n.EQUAL,[Tv]:n.GEQUAL,[Sv]:n.GREATER,[Ev]:n.NOTEQUAL};function V(D,T,Z){if(Z?(n.texParameteri(D,n.TEXTURE_WRAP_S,Q[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Q[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Q[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ne[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ne[T.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==On||T.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,C(T.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==wn&&T.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ye=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===wn||T.minFilter!==Vh&&T.minFilter!==Os||T.type===os&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ho&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(D,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function X(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",N));let ye=T.source,pe=d.get(ye);pe===void 0&&(pe={},d.set(ye,pe));let xe=$(T);if(xe!==D.__cacheKey){pe[xe]===void 0&&(pe[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pe[xe].usedTimes++;let Ve=pe[D.__cacheKey];Ve!==void 0&&(pe[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&S(T)),D.__cacheKey=xe,D.__webglTexture=pe[xe].texture}return Z}function se(D,T,Z){let ye=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=n.TEXTURE_3D);let pe=X(D,T),xe=T.source;t.bindTexture(ye,D.__webglTexture,n.TEXTURE0+Z);let Ve=i.get(xe);if(xe.version!==Ve.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);let Ae=Dt.getPrimaries(Dt.workingColorSpace),De=T.colorSpace===pi?null:Dt.getPrimaries(T.colorSpace),je=T.colorSpace===pi||Ae===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let dt=f(T)&&m(T.image)===!1,me=v(T.image,dt,!1,s.maxTextureSize);me=rt(T,me);let Tt=m(me)||a,mt=r.convert(T.format,T.colorSpace),nt=r.convert(T.type),$e=P(T.internalFormat,mt,nt,T.colorSpace,T.isVideoTexture);V(ye,T,Tt);let Oe,ct=T.mipmaps,wt=a&&T.isVideoTexture!==!0&&$e!==$m,Ht=Ve.__version===void 0||pe===!0,ft=I(T,me,Tt);if(T.isDepthTexture)$e=n.DEPTH_COMPONENT,a?T.type===os?$e=n.DEPTH_COMPONENT32F:T.type===Ps?$e=n.DEPTH_COMPONENT24:T.type===mr?$e=n.DEPTH24_STENCIL8:$e=n.DEPTH_COMPONENT16:T.type===os&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===gr&&$e===n.DEPTH_COMPONENT&&T.type!==od&&T.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ps,nt=r.convert(T.type)),T.format===pa&&$e===n.DEPTH_COMPONENT&&($e=n.DEPTH_STENCIL,T.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=mr,nt=r.convert(T.type))),Ht&&(wt?t.texStorage2D(n.TEXTURE_2D,1,$e,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,$e,me.width,me.height,0,mt,nt,null));else if(T.isDataTexture)if(ct.length>0&&Tt){wt&&Ht&&t.texStorage2D(n.TEXTURE_2D,ft,$e,ct[0].width,ct[0].height);for(let we=0,k=ct.length;we<k;we++)Oe=ct[we],wt?t.texSubImage2D(n.TEXTURE_2D,we,0,0,Oe.width,Oe.height,mt,nt,Oe.data):t.texImage2D(n.TEXTURE_2D,we,$e,Oe.width,Oe.height,0,mt,nt,Oe.data);T.generateMipmaps=!1}else wt?(Ht&&t.texStorage2D(n.TEXTURE_2D,ft,$e,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,mt,nt,me.data)):t.texImage2D(n.TEXTURE_2D,0,$e,me.width,me.height,0,mt,nt,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){wt&&Ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,$e,ct[0].width,ct[0].height,me.depth);for(let we=0,k=ct.length;we<k;we++)Oe=ct[we],T.format!==fi?mt!==null?wt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Oe.width,Oe.height,me.depth,mt,Oe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,we,$e,Oe.width,Oe.height,me.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Oe.width,Oe.height,me.depth,mt,nt,Oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,we,$e,Oe.width,Oe.height,me.depth,0,mt,nt,Oe.data)}else{wt&&Ht&&t.texStorage2D(n.TEXTURE_2D,ft,$e,ct[0].width,ct[0].height);for(let we=0,k=ct.length;we<k;we++)Oe=ct[we],T.format!==fi?mt!==null?wt?t.compressedTexSubImage2D(n.TEXTURE_2D,we,0,0,Oe.width,Oe.height,mt,Oe.data):t.compressedTexImage2D(n.TEXTURE_2D,we,$e,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?t.texSubImage2D(n.TEXTURE_2D,we,0,0,Oe.width,Oe.height,mt,nt,Oe.data):t.texImage2D(n.TEXTURE_2D,we,$e,Oe.width,Oe.height,0,mt,nt,Oe.data)}else if(T.isDataArrayTexture)wt?(Ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,$e,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,mt,nt,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,me.width,me.height,me.depth,0,mt,nt,me.data);else if(T.isData3DTexture)wt?(Ht&&t.texStorage3D(n.TEXTURE_3D,ft,$e,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,mt,nt,me.data)):t.texImage3D(n.TEXTURE_3D,0,$e,me.width,me.height,me.depth,0,mt,nt,me.data);else if(T.isFramebufferTexture){if(Ht)if(wt)t.texStorage2D(n.TEXTURE_2D,ft,$e,me.width,me.height);else{let we=me.width,k=me.height;for(let Ee=0;Ee<ft;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,$e,we,k,0,mt,nt,null),we>>=1,k>>=1}}else if(ct.length>0&&Tt){wt&&Ht&&t.texStorage2D(n.TEXTURE_2D,ft,$e,ct[0].width,ct[0].height);for(let we=0,k=ct.length;we<k;we++)Oe=ct[we],wt?t.texSubImage2D(n.TEXTURE_2D,we,0,0,mt,nt,Oe):t.texImage2D(n.TEXTURE_2D,we,$e,mt,nt,Oe);T.generateMipmaps=!1}else wt?(Ht&&t.texStorage2D(n.TEXTURE_2D,ft,$e,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,nt,me)):t.texImage2D(n.TEXTURE_2D,0,$e,mt,nt,me);M(T,Tt)&&b(ye),Ve.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function re(D,T,Z){if(T.image.length!==6)return;let ye=X(D,T),pe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Z);let xe=i.get(pe);if(pe.version!==xe.__version||ye===!0){t.activeTexture(n.TEXTURE0+Z);let Ve=Dt.getPrimaries(Dt.workingColorSpace),Ae=T.colorSpace===pi?null:Dt.getPrimaries(T.colorSpace),De=T.colorSpace===pi||Ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let je=T.isCompressedTexture||T.image[0].isCompressedTexture,dt=T.image[0]&&T.image[0].isDataTexture,me=[];for(let we=0;we<6;we++)!je&&!dt?me[we]=v(T.image[we],!1,!0,s.maxCubemapSize):me[we]=dt?T.image[we].image:T.image[we],me[we]=rt(T,me[we]);let Tt=me[0],mt=m(Tt)||a,nt=r.convert(T.format,T.colorSpace),$e=r.convert(T.type),Oe=P(T.internalFormat,nt,$e,T.colorSpace),ct=a&&T.isVideoTexture!==!0,wt=xe.__version===void 0||ye===!0,Ht=I(T,Tt,mt);V(n.TEXTURE_CUBE_MAP,T,mt);let ft;if(je){ct&&wt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,Oe,Tt.width,Tt.height);for(let we=0;we<6;we++){ft=me[we].mipmaps;for(let k=0;k<ft.length;k++){let Ee=ft[k];T.format!==fi?nt!==null?ct?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k,0,0,Ee.width,Ee.height,nt,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k,0,0,Ee.width,Ee.height,nt,$e,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k,Oe,Ee.width,Ee.height,0,nt,$e,Ee.data)}}}else{ft=T.mipmaps,ct&&wt&&(ft.length>0&&Ht++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,Oe,me[0].width,me[0].height));for(let we=0;we<6;we++)if(dt){ct?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,me[we].width,me[we].height,nt,$e,me[we].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Oe,me[we].width,me[we].height,0,nt,$e,me[we].data);for(let k=0;k<ft.length;k++){let Te=ft[k].image[we].image;ct?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k+1,0,0,Te.width,Te.height,nt,$e,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k+1,Oe,Te.width,Te.height,0,nt,$e,Te.data)}}else{ct?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,nt,$e,me[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Oe,nt,$e,me[we]);for(let k=0;k<ft.length;k++){let Ee=ft[k];ct?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k+1,0,0,nt,$e,Ee.image[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,k+1,Oe,nt,$e,Ee.image[we])}}}M(T,mt)&&b(n.TEXTURE_CUBE_MAP),xe.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ce(D,T,Z,ye,pe,xe){let Ve=r.convert(Z.format,Z.colorSpace),Ae=r.convert(Z.type),De=P(Z.internalFormat,Ve,Ae,Z.colorSpace);if(!i.get(T).__hasExternalTextures){let dt=Math.max(1,T.width>>xe),me=Math.max(1,T.height>>xe);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,xe,De,dt,me,T.depth,0,Ve,Ae,null):t.texImage2D(pe,xe,De,dt,me,0,Ve,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ue(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,pe,i.get(Z).__webglTexture,0,tt(T)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ye,pe,i.get(Z).__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(D,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let ye=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Ue(T)){let pe=T.depthTexture;pe&&pe.isDepthTexture&&(pe.type===os?ye=n.DEPTH_COMPONENT32F:pe.type===Ps&&(ye=n.DEPTH_COMPONENT24));let xe=tt(T);Ue(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ye,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ye,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ye,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){let ye=tt(T);Z&&Ue(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,n.DEPTH24_STENCIL8,T.width,T.height):Ue(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{let ye=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let pe=0;pe<ye.length;pe++){let xe=ye[pe],Ve=r.convert(xe.format,xe.colorSpace),Ae=r.convert(xe.type),De=P(xe.internalFormat,Ve,Ae,xe.colorSpace),je=tt(T);Z&&Ue(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,De,T.width,T.height):Ue(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,De,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,De,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);let ye=i.get(T.depthTexture).__webglTexture,pe=tt(T);if(T.depthTexture.format===gr)Ue(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ye,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ye,0);else if(T.depthTexture.format===pa)Ue(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ye,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function ge(D){let T=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Be(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]=n.createRenderbuffer(),Ce(T.__webglDepthbuffer[ye],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Ce(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(D,T,Z){let ye=i.get(D);T!==void 0&&ce(ye.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ge(D)}function q(D){let T=D.texture,Z=i.get(D),ye=i.get(T);D.addEventListener("dispose",z),D.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture()),ye.__version=T.version,o.memory.textures++);let pe=D.isWebGLCubeRenderTarget===!0,xe=D.isWebGLMultipleRenderTargets===!0,Ve=m(D)||a;if(pe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let De=0;De<T.mipmaps.length;De++)Z.__webglFramebuffer[Ae][De]=n.createFramebuffer()}else Z.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(xe)if(s.drawBuffers){let Ae=D.texture;for(let De=0,je=Ae.length;De<je;De++){let dt=i.get(Ae[De]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&Ue(D)===!1){let Ae=xe?T:[T];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let De=0;De<Ae.length;De++){let je=Ae[De];Z.__webglColorRenderbuffer[De]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[De]);let dt=r.convert(je.format,je.colorSpace),me=r.convert(je.type),Tt=P(je.internalFormat,dt,me,je.colorSpace,D.isXRRenderTarget===!0),mt=tt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Tt,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Z.__webglColorRenderbuffer[De])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ye.__webglTexture),V(n.TEXTURE_CUBE_MAP,T,Ve);for(let Ae=0;Ae<6;Ae++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)ce(Z.__webglFramebuffer[Ae][De],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,De);else ce(Z.__webglFramebuffer[Ae],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);M(T,Ve)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){let Ae=D.texture;for(let De=0,je=Ae.length;De<je;De++){let dt=Ae[De],me=i.get(dt);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),V(n.TEXTURE_2D,dt,Ve),ce(Z.__webglFramebuffer,D,dt,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,0),M(dt,Ve)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?Ae=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,ye.__webglTexture),V(Ae,T,Ve),a&&T.mipmaps&&T.mipmaps.length>0)for(let De=0;De<T.mipmaps.length;De++)ce(Z.__webglFramebuffer[De],D,T,n.COLOR_ATTACHMENT0,Ae,De);else ce(Z.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,Ae,0);M(T,Ve)&&b(Ae),t.unbindTexture()}D.depthBuffer&&ge(D)}function Kt(D){let T=m(D)||a,Z=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ye=0,pe=Z.length;ye<pe;ye++){let xe=Z[ye];if(M(xe,T)){let Ve=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(xe).__webglTexture;t.bindTexture(Ve,Ae),b(Ve),t.unbindTexture()}}}function He(D){if(a&&D.samples>0&&Ue(D)===!1){let T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Z=D.width,ye=D.height,pe=n.COLOR_BUFFER_BIT,xe=[],Ve=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(D),De=D.isWebGLMultipleRenderTargets===!0;if(De)for(let je=0;je<T.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let je=0;je<T.length;je++){xe.push(n.COLOR_ATTACHMENT0+je),D.depthBuffer&&xe.push(Ve);let dt=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(dt===!1&&(D.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),De&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[je]),dt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ve])),De){let me=i.get(T[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,Z,ye,0,0,Z,ye,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),De)for(let je=0;je<T.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[je]);let dt=i.get(T[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,dt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function tt(D){return Math.min(s.maxSamples,D.samples)}function Ue(D){let T=i.get(D);return a&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Et(D){let T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function rt(D,T){let Z=D.colorSpace,ye=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Ru||Z!==cs&&Z!==pi&&(Dt.getTransfer(Z)===Gt?a===!1?e.has("EXT_sRGB")===!0&&ye===fi?(D.format=Ru,D.minFilter=$n,D.generateMipmaps=!1):T=Ql.sRGBToLinear(T):(ye!==fi||pe!==Ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}this.allocateTextureUnit=B,this.resetTextureUnits=le,this.setTexture2D=O,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Ke,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue}function RM(n,e,t){let i=t.isWebGL2;function s(r,o=pi){let a,l=Dt.getTransfer(o);if(r===Ds)return n.UNSIGNED_BYTE;if(r===zm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Hm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===cv)return n.BYTE;if(r===hv)return n.SHORT;if(r===od)return n.UNSIGNED_SHORT;if(r===Fm)return n.INT;if(r===Ps)return n.UNSIGNED_INT;if(r===os)return n.FLOAT;if(r===ho)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===uv)return n.ALPHA;if(r===fi)return n.RGBA;if(r===dv)return n.LUMINANCE;if(r===fv)return n.LUMINANCE_ALPHA;if(r===gr)return n.DEPTH_COMPONENT;if(r===pa)return n.DEPTH_STENCIL;if(r===Ru)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pv)return n.RED;if(r===Vm)return n.RED_INTEGER;if(r===mv)return n.RG;if(r===Gm)return n.RG_INTEGER;if(r===Wm)return n.RGBA_INTEGER;if(r===Gh||r===Wh||r===$h||r===qh)if(l===Gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$h)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===sp||r===rp||r===ap)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ip)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ap)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$m)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===op||r===lp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===op)return l===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===lp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cp||r===hp||r===up||r===dp||r===fp||r===pp||r===mp||r===gp||r===yp||r===vp||r===xp||r===_p||r===bp||r===Mp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===cp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===up)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_p)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mp)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xh||r===wp||r===Sp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Xh)return l===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gv||r===Ep||r===Tp||r===Ap)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Xh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ep)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ap)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Gu=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Sn=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},LM={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Wu=class extends ks{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,v=t.getContextAttributes(),m=null,f=null,M=[],b=[],P=new it,I=null,C=new an;C.layers.enable(1),C.viewport=new _t;let N=new an;N.layers.enable(2),N.viewport=new _t;let z=[C,N],w=new Gu;w.layers.enable(1),w.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=M[V];return X===void 0&&(X=new co,M[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=M[V];return X===void 0&&(X=new co,M[V]=X),X.getGripSpace()},this.getHand=function(V){let X=M[V];return X===void 0&&(X=new co,M[V]=X),X.getHandSpace()};function ie(V){let X=b.indexOf(V.inputSource);if(X===-1)return;let se=M[X];se!==void 0&&(se.update(V.inputSource,V.frame,c||o),se.dispatchEvent({type:V.type,data:V.inputSource}))}function le(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",B);for(let V=0;V<M.length;V++){let X=b[V];X!==null&&(b[V]=null,M[V].disconnect(X))}S=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",le),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new hs(p.framebufferWidth,p.framebufferHeight,{format:fi,type:Ds,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,se=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?pa:gr,se=v.stencil?mr:Ps);let ce={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new hs(d.textureWidth,d.textureHeight,{format:fi,type:Ds,depthTexture:new lc(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ce=e.properties.get(f);Ce.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(V){for(let X=0;X<V.removed.length;X++){let se=V.removed[X],re=b.indexOf(se);re>=0&&(b[re]=null,M[re].disconnect(se))}for(let X=0;X<V.added.length;X++){let se=V.added[X],re=b.indexOf(se);if(re===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=b.length){b.push(se),re=Ce;break}else if(b[Ce]===null){b[Ce]=se,re=Ce;break}if(re===-1)break}let ce=M[re];ce&&ce.connect(se)}}let $=new U,O=new U;function ee(V,X,se){$.setFromMatrixPosition(X.matrixWorld),O.setFromMatrixPosition(se.matrixWorld);let re=$.distanceTo(O),ce=X.projectionMatrix.elements,Ce=se.projectionMatrix.elements,Be=ce[14]/(ce[10]-1),ge=ce[14]/(ce[10]+1),Ke=(ce[9]+1)/ce[5],q=(ce[9]-1)/ce[5],Kt=(ce[8]-1)/ce[0],He=(Ce[8]+1)/Ce[0],tt=Be*Kt,Ue=Be*He,Et=re/(-Kt+He),rt=Et*-Kt;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(rt),V.translateZ(Et),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let D=Be+Et,T=ge+Et,Z=tt-rt,ye=Ue+(re-rt),pe=Ke*ge/T*D,xe=q*ge/T*D;V.projectionMatrix.makePerspective(Z,ye,pe,xe,D,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;w.near=N.near=C.near=V.near,w.far=N.far=C.far=V.far,(S!==w.near||F!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,F=w.far);let X=V.parent,se=w.cameras;j(w,X);for(let re=0;re<se.length;re++)j(se[re],X);se.length===2?ee(w,C,N):w.projectionMatrix.copy(C.projectionMatrix),W(V,w,X)};function W(V,X,se){se===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ma*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Q=null;function ne(V,X){if(h=X.getViewerPose(c||o),g=X,h!==null){let se=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;se.length!==w.cameras.length&&(w.cameras.length=0,re=!0);for(let ce=0;ce<se.length;ce++){let Ce=se[ce],Be=null;if(p!==null)Be=p.getViewport(Ce);else{let Ke=u.getViewSubImage(d,Ce);Be=Ke.viewport,ce===0&&(e.setRenderTargetTextures(f,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(f))}let ge=z[ce];ge===void 0&&(ge=new an,ge.layers.enable(ce),ge.viewport=new _t,z[ce]=ge),ge.matrix.fromArray(Ce.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ce.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Be.x,Be.y,Be.width,Be.height),ce===0&&(w.matrix.copy(ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),re===!0&&w.cameras.push(ge)}}for(let se=0;se<M.length;se++){let re=b[se],ce=M[se];re!==null&&ce!==void 0&&ce.update(re,X,c||o)}Q&&Q(V,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let ue=new Jm;ue.setAnimationLoop(ne),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}};function PM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,b,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,P)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function IM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,b){let P=b.program;i.uniformBlockBinding(M,P)}function c(M,b){let P=s[M.id];P===void 0&&(g(M),P=h(M),s[M.id]=P,M.addEventListener("dispose",m));let I=b.program;i.updateUBOMapping(M,I);let C=e.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){let b=u();M.__bindingPointIndex=b;let P=n.createBuffer(),I=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,P),P}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let b=s[M.id],P=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,N=P.length;C<N;C++){let z=Array.isArray(P[C])?P[C]:[P[C]];for(let w=0,S=z.length;w<S;w++){let F=z[w];if(p(F,C,w,I)===!0){let ie=F.__offset,le=Array.isArray(F.value)?F.value:[F.value],B=0;for(let $=0;$<le.length;$++){let O=le[$],ee=v(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,ie+B,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,B),B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,b,P,I){let C=M.value,N=b+"_"+P;if(I[N]===void 0)return typeof C=="number"||typeof C=="boolean"?I[N]=C:I[N]=C.clone(),!0;{let z=I[N];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return I[N]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function g(M){let b=M.uniforms,P=0,I=16;for(let N=0,z=b.length;N<z;N++){let w=Array.isArray(b[N])?b[N]:[b[N]];for(let S=0,F=w.length;S<F;S++){let ie=w[S],le=Array.isArray(ie.value)?ie.value:[ie.value];for(let B=0,$=le.length;B<$;B++){let O=le[B],ee=v(O),j=P%I;j!==0&&I-j<ee.boundary&&(P+=I-j),ie.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=P,P+=ee.storage}}}let C=P%I;return C>0&&(P+=I-C),M.__size=P,M.__cache={},this}function v(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let P=o.indexOf(b.__bindingPointIndex);o.splice(P,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var go=class{constructor(e={}){let{canvas:t=Vv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Ns,this.toneMappingExposure=1;let b=this,P=!1,I=0,C=0,N=null,z=-1,w=null,S=new _t,F=new _t,ie=null,le=new ut(0),B=0,$=t.width,O=t.height,ee=1,j=null,W=null,Q=new _t(0,0,$,O),ne=new _t(0,0,$,O),ue=!1,V=new mo,X=!1,se=!1,re=null,ce=new lt,Ce=new it,Be=new U,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return N===null?ee:1}let q=i;function Kt(L,G){for(let J=0;J<L.length;J++){let te=L[J],Y=t.getContext(te,G);if(Y!==null)return Y}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${id}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),q===null){let G=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&G.shift(),q=Kt(G,L),q===null)throw Kt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let He,tt,Ue,Et,rt,D,T,Z,ye,pe,xe,Ve,Ae,De,je,dt,me,Tt,mt,nt,$e,Oe,ct,wt;function Ht(){He=new Jb(q),tt=new $b(q,He,e),He.init(tt),Oe=new RM(q,He,tt),Ue=new AM(q,He,tt),Et=new e1(q),rt=new mM,D=new CM(q,He,Ue,rt,tt,Oe,Et),T=new Xb(b),Z=new Zb(b),ye=new lx(q,tt),ct=new Gb(q,He,ye,tt),pe=new Kb(q,ye,Et,ct),xe=new s1(q,pe,ye,Et),mt=new i1(q,tt,D),dt=new qb(rt),Ve=new pM(b,T,Z,He,tt,ct,dt),Ae=new PM(b,rt),De=new yM,je=new wM(He,tt),Tt=new Vb(b,T,Z,Ue,xe,d,l),me=new TM(b,xe,tt),wt=new IM(q,Et,tt,Ue),nt=new Wb(q,He,Et,tt),$e=new Qb(q,He,Et,tt),Et.programs=Ve.programs,b.capabilities=tt,b.extensions=He,b.properties=rt,b.renderLists=De,b.shadowMap=me,b.state=Ue,b.info=Et}Ht();let ft=new Wu(b,q);this.xr=ft,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let L=He.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=He.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(L){L!==void 0&&(ee=L,this.setSize($,O,!1))},this.getSize=function(L){return L.set($,O)},this.setSize=function(L,G,J=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=L,O=G,t.width=Math.floor(L*ee),t.height=Math.floor(G*ee),J===!0&&(t.style.width=L+"px",t.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set($*ee,O*ee).floor()},this.setDrawingBufferSize=function(L,G,J){$=L,O=G,ee=J,t.width=Math.floor(L*J),t.height=Math.floor(G*J),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(S)},this.getViewport=function(L){return L.copy(Q)},this.setViewport=function(L,G,J,te){L.isVector4?Q.set(L.x,L.y,L.z,L.w):Q.set(L,G,J,te),Ue.viewport(S.copy(Q).multiplyScalar(ee).floor())},this.getScissor=function(L){return L.copy(ne)},this.setScissor=function(L,G,J,te){L.isVector4?ne.set(L.x,L.y,L.z,L.w):ne.set(L,G,J,te),Ue.scissor(F.copy(ne).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(L){Ue.setScissorTest(ue=L)},this.setOpaqueSort=function(L){j=L},this.setTransparentSort=function(L){W=L},this.getClearColor=function(L){return L.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(L=!0,G=!0,J=!0){let te=0;if(L){let Y=!1;if(N!==null){let Le=N.texture.format;Y=Le===Wm||Le===Gm||Le===Vm}if(Y){let Le=N.texture.type,Pe=Le===Ds||Le===Ps||Le===od||Le===mr||Le===zm||Le===Hm,Ge=Tt.getClearColor(),Ze=Tt.getClearAlpha(),ht=Ge.r,at=Ge.g,ot=Ge.b;Pe?(p[0]=ht,p[1]=at,p[2]=ot,p[3]=Ze,q.clearBufferuiv(q.COLOR,0,p)):(g[0]=ht,g[1]=at,g[2]=ot,g[3]=Ze,q.clearBufferiv(q.COLOR,0,g))}else te|=q.COLOR_BUFFER_BIT}G&&(te|=q.DEPTH_BUFFER_BIT),J&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),De.dispose(),je.dispose(),rt.dispose(),T.dispose(),Z.dispose(),xe.dispose(),ct.dispose(),wt.dispose(),Ve.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",fn),ft.removeEventListener("sessionend",It),re&&(re.dispose(),re=null),Mn.stop()};function we(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let L=Et.autoReset,G=me.enabled,J=me.autoUpdate,te=me.needsUpdate,Y=me.type;Ht(),Et.autoReset=L,me.enabled=G,me.autoUpdate=J,me.needsUpdate=te,me.type=Y}function Ee(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Te(L){let G=L.target;G.removeEventListener("dispose",Te),Qe(G)}function Qe(L){Ye(L),rt.remove(L)}function Ye(L){let G=rt.get(L).programs;G!==void 0&&(G.forEach(function(J){Ve.releaseProgram(J)}),L.isShaderMaterial&&Ve.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,J,te,Y,Le){G===null&&(G=ge);let Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=Bh(L,G,J,te,Y);Ue.setMaterial(te,Pe);let Ze=J.index,ht=1;if(te.wireframe===!0){if(Ze=pe.getWireframeAttribute(J),Ze===void 0)return;ht=2}let at=J.drawRange,ot=J.attributes.position,qt=at.start*ht,Vn=(at.start+at.count)*ht;Le!==null&&(qt=Math.max(qt,Le.start*ht),Vn=Math.min(Vn,(Le.start+Le.count)*ht)),Ze!==null?(qt=Math.max(qt,0),Vn=Math.min(Vn,Ze.count)):ot!=null&&(qt=Math.max(qt,0),Vn=Math.min(Vn,ot.count));let sn=Vn-qt;if(sn<0||sn===1/0)return;ct.setup(Y,te,Ge,J,Ze);let ui,kt=nt;if(Ze!==null&&(ui=ye.get(Ze),kt=$e,kt.setIndex(ui)),Y.isMesh)te.wireframe===!0?(Ue.setLineWidth(te.wireframeLinewidth*Ke()),kt.setMode(q.LINES)):kt.setMode(q.TRIANGLES);else if(Y.isLine){let st=te.linewidth;st===void 0&&(st=1),Ue.setLineWidth(st*Ke()),Y.isLineSegments?kt.setMode(q.LINES):Y.isLineLoop?kt.setMode(q.LINE_LOOP):kt.setMode(q.LINE_STRIP)}else Y.isPoints?kt.setMode(q.POINTS):Y.isSprite&&kt.setMode(q.TRIANGLES);if(Y.isBatchedMesh)kt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)kt.renderInstances(qt,sn,Y.count);else if(J.isInstancedBufferGeometry){let st=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xa=Math.min(J.instanceCount,st);kt.renderInstances(qt,sn,Xa)}else kt.render(qt,sn)};function Ct(L,G,J){L.transparent===!0&&L.side===Xn&&L.forceSinglePass===!1?(L.side=gn,L.needsUpdate=!0,Fr(L,G,J),L.side=Jn,L.needsUpdate=!0,Fr(L,G,J),L.side=Xn):Fr(L,G,J)}this.compile=function(L,G,J=null){J===null&&(J=L),m=je.get(J),m.init(),M.push(m),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),L!==J&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(b._useLegacyLights);let te=new Set;return L.traverse(function(Y){let Le=Y.material;if(Le)if(Array.isArray(Le))for(let Pe=0;Pe<Le.length;Pe++){let Ge=Le[Pe];Ct(Ge,J,Y),te.add(Ge)}else Ct(Le,J,Y),te.add(Le)}),M.pop(),m=null,te},this.compileAsync=function(L,G,J=null){let te=this.compile(L,G,J);return new Promise(Y=>{function Le(){if(te.forEach(function(Pe){rt.get(Pe).currentProgram.isReady()&&te.delete(Pe)}),te.size===0){Y(L);return}setTimeout(Le,10)}He.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Pt=null;function At(L){Pt&&Pt(L)}function fn(){Mn.stop()}function It(){Mn.start()}let Mn=new Jm;Mn.setAnimationLoop(At),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(L){Pt=L,ft.setAnimationLoop(L),L===null?Mn.stop():Mn.start()},ft.addEventListener("sessionstart",fn),ft.addEventListener("sessionend",It),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(G),G=ft.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,G,N),m=je.get(L,M.length),m.init(),M.push(m),ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),V.setFromProjectionMatrix(ce),se=this.localClippingEnabled,X=dt.init(this.clippingPlanes,se),v=De.get(L,f.length),v.init(),f.push(v),hi(L,G,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(j,W),this.info.render.frame++,X===!0&&dt.beginShadows();let J=m.state.shadowsArray;if(me.render(J,L,G),X===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(v,L),m.setupLights(b._useLegacyLights),G.isArrayCamera){let te=G.cameras;for(let Y=0,Le=te.length;Y<Le;Y++){let Pe=te[Y];hl(v,L,Pe,Pe.viewport)}}else hl(v,L,G);N!==null&&(D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(b,L,G),ct.resetDefaultState(),z=-1,w=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function hi(L,G,J,te){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||V.intersectsSprite(L)){te&&Be.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ce);let Pe=xe.update(L),Ge=L.material;Ge.visible&&v.push(L,Pe,Ge,J,Be.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||V.intersectsObject(L))){let Pe=xe.update(L),Ge=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Be.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(L.matrixWorld).applyMatrix4(ce)),Array.isArray(Ge)){let Ze=Pe.groups;for(let ht=0,at=Ze.length;ht<at;ht++){let ot=Ze[ht],qt=Ge[ot.materialIndex];qt&&qt.visible&&v.push(L,Pe,qt,J,Be.z,ot)}}else Ge.visible&&v.push(L,Pe,Ge,J,Be.z,null)}}let Le=L.children;for(let Pe=0,Ge=Le.length;Pe<Ge;Pe++)hi(Le[Pe],G,J,te)}function hl(L,G,J,te){let Y=L.opaque,Le=L.transmissive,Pe=L.transparent;m.setupLightsView(J),X===!0&&dt.setGlobalState(b.clippingPlanes,J),Le.length>0&&kh(Y,Le,G,J),te&&Ue.viewport(S.copy(te)),Y.length>0&&Br(Y,G,J),Le.length>0&&Br(Le,G,J),Pe.length>0&&Br(Pe,G,J),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function kh(L,G,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Le=tt.isWebGL2;re===null&&(re=new hs(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?ho:Ds,minFilter:Os,samples:Le?4:0})),b.getDrawingBufferSize(Ce),Le?re.setSize(Ce.x,Ce.y):re.setSize(Kl(Ce.x),Kl(Ce.y));let Pe=b.getRenderTarget();b.setRenderTarget(re),b.getClearColor(le),B=b.getClearAlpha(),B<1&&b.setClearColor(16777215,.5),b.clear();let Ge=b.toneMapping;b.toneMapping=Ns,Br(L,J,te),D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re);let Ze=!1;for(let ht=0,at=G.length;ht<at;ht++){let ot=G[ht],qt=ot.object,Vn=ot.geometry,sn=ot.material,ui=ot.group;if(sn.side===Xn&&qt.layers.test(te.layers)){let kt=sn.side;sn.side=gn,sn.needsUpdate=!0,$a(qt,J,te,Vn,sn,ui),sn.side=kt,sn.needsUpdate=!0,Ze=!0}}Ze===!0&&(D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re)),b.setRenderTarget(Pe),b.setClearColor(le,B),b.toneMapping=Ge}function Br(L,G,J){let te=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Le=L.length;Y<Le;Y++){let Pe=L[Y],Ge=Pe.object,Ze=Pe.geometry,ht=te===null?Pe.material:te,at=Pe.group;Ge.layers.test(J.layers)&&$a(Ge,G,J,Ze,ht,at)}}function $a(L,G,J,te,Y,Le){L.onBeforeRender(b,G,J,te,Y,Le),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(b,G,J,te,L,Le),Y.transparent===!0&&Y.side===Xn&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,b.renderBufferDirect(J,G,te,Y,L,Le),Y.side=Jn,Y.needsUpdate=!0,b.renderBufferDirect(J,G,te,Y,L,Le),Y.side=Xn):b.renderBufferDirect(J,G,te,Y,L,Le),L.onAfterRender(b,G,J,te,Y,Le)}function Fr(L,G,J){G.isScene!==!0&&(G=ge);let te=rt.get(L),Y=m.state.lights,Le=m.state.shadowsArray,Pe=Y.state.version,Ge=Ve.getParameters(L,Y.state,Le,G,J),Ze=Ve.getProgramCacheKey(Ge),ht=te.programs;te.environment=L.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(L.isMeshStandardMaterial?Z:T).get(L.envMap||te.environment),ht===void 0&&(L.addEventListener("dispose",Te),ht=new Map,te.programs=ht);let at=ht.get(Ze);if(at!==void 0){if(te.currentProgram===at&&te.lightsStateVersion===Pe)return ul(L,Ge),at}else Ge.uniforms=Ve.getUniforms(L),L.onBuild(J,Ge,b),L.onBeforeCompile(Ge,b),at=Ve.acquireProgram(Ge,Ze),ht.set(Ze,at),te.uniforms=Ge.uniforms;let ot=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ot.clippingPlanes=dt.uniform),ul(L,Ge),te.needsLights=zh(L),te.lightsStateVersion=Pe,te.needsLights&&(ot.ambientLightColor.value=Y.state.ambient,ot.lightProbe.value=Y.state.probe,ot.directionalLights.value=Y.state.directional,ot.directionalLightShadows.value=Y.state.directionalShadow,ot.spotLights.value=Y.state.spot,ot.spotLightShadows.value=Y.state.spotShadow,ot.rectAreaLights.value=Y.state.rectArea,ot.ltc_1.value=Y.state.rectAreaLTC1,ot.ltc_2.value=Y.state.rectAreaLTC2,ot.pointLights.value=Y.state.point,ot.pointLightShadows.value=Y.state.pointShadow,ot.hemisphereLights.value=Y.state.hemi,ot.directionalShadowMap.value=Y.state.directionalShadowMap,ot.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ot.spotShadowMap.value=Y.state.spotShadowMap,ot.spotLightMatrix.value=Y.state.spotLightMatrix,ot.spotLightMap.value=Y.state.spotLightMap,ot.pointShadowMap.value=Y.state.pointShadowMap,ot.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=at,te.uniformsList=null,at}function qa(L){if(L.uniformsList===null){let G=L.currentProgram.getUniforms();L.uniformsList=ua.seqWithValue(G.seq,L.uniforms)}return L.uniformsList}function ul(L,G){let J=rt.get(L);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Bh(L,G,J,te,Y){G.isScene!==!0&&(G=ge),D.resetTextureUnits();let Le=G.fog,Pe=te.isMeshStandardMaterial?G.environment:null,Ge=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:cs,Ze=(te.isMeshStandardMaterial?Z:T).get(te.envMap||Pe),ht=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,at=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ot=!!J.morphAttributes.position,qt=!!J.morphAttributes.normal,Vn=!!J.morphAttributes.color,sn=Ns;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(sn=b.toneMapping);let ui=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,kt=ui!==void 0?ui.length:0,st=rt.get(te),Xa=m.state.lights;if(X===!0&&(se===!0||L!==w)){let In=L===w&&te.id===z;dt.setState(te,L,In)}let Vt=!1;te.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Xa.state.version||st.outputColorSpace!==Ge||Y.isBatchedMesh&&st.batching===!1||!Y.isBatchedMesh&&st.batching===!0||Y.isInstancedMesh&&st.instancing===!1||!Y.isInstancedMesh&&st.instancing===!0||Y.isSkinnedMesh&&st.skinning===!1||!Y.isSkinnedMesh&&st.skinning===!0||Y.isInstancedMesh&&st.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&st.instancingColor===!1&&Y.instanceColor!==null||st.envMap!==Ze||te.fog===!0&&st.fog!==Le||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==dt.numPlanes||st.numIntersection!==dt.numIntersection)||st.vertexAlphas!==ht||st.vertexTangents!==at||st.morphTargets!==ot||st.morphNormals!==qt||st.morphColors!==Vn||st.toneMapping!==sn||tt.isWebGL2===!0&&st.morphTargetsCount!==kt)&&(Vt=!0):(Vt=!0,st.__version=te.version);let Ji=st.currentProgram;Vt===!0&&(Ji=Fr(te,G,Y));let Ya=!1,or=!1,ja=!1,pn=Ji.getUniforms(),Ri=st.uniforms;if(Ue.useProgram(Ji.program)&&(Ya=!0,or=!0,ja=!0),te.id!==z&&(z=te.id,or=!0),Ya||w!==L){pn.setValue(q,"projectionMatrix",L.projectionMatrix),pn.setValue(q,"viewMatrix",L.matrixWorldInverse);let In=pn.map.cameraPosition;In!==void 0&&In.setValue(q,Be.setFromMatrixPosition(L.matrixWorld)),tt.logarithmicDepthBuffer&&pn.setValue(q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&pn.setValue(q,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,or=!0,ja=!0)}if(Y.isSkinnedMesh){pn.setOptional(q,Y,"bindMatrix"),pn.setOptional(q,Y,"bindMatrixInverse");let In=Y.skeleton;In&&(tt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),pn.setValue(q,"boneTexture",In.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(pn.setOptional(q,Y,"batchingTexture"),pn.setValue(q,"batchingTexture",Y._matricesTexture,D));let Xt=J.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0&&tt.isWebGL2===!0)&&mt.update(Y,J,Ji),(or||st.receiveShadow!==Y.receiveShadow)&&(st.receiveShadow=Y.receiveShadow,pn.setValue(q,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ri.envMap.value=Ze,Ri.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),or&&(pn.setValue(q,"toneMappingExposure",b.toneMappingExposure),st.needsLights&&Fh(Ri,ja),Le&&te.fog===!0&&Ae.refreshFogUniforms(Ri,Le),Ae.refreshMaterialUniforms(Ri,te,ee,O,re),ua.upload(q,qa(st),Ri,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ua.upload(q,qa(st),Ri,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&pn.setValue(q,"center",Y.center),pn.setValue(q,"modelViewMatrix",Y.modelViewMatrix),pn.setValue(q,"normalMatrix",Y.normalMatrix),pn.setValue(q,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let In=te.uniformsGroups;for(let Za=0,dl=In.length;Za<dl;Za++)if(tt.isWebGL2){let Ja=In[Za];wt.update(Ja,Ji),wt.bind(Ja,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function Fh(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function zh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,G,J){rt.get(L.texture).__webglTexture=G,rt.get(L.depthTexture).__webglTexture=J;let te=rt.get(L);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,G){let J=rt.get(L);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(L,G=0,J=0){N=L,I=G,C=J;let te=!0,Y=null,Le=!1,Pe=!1;if(L){let Ze=rt.get(L);Ze.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Ze.__webglFramebuffer===void 0?D.setupRenderTarget(L):Ze.__hasExternalTextures&&D.rebindTextures(L,rt.get(L.texture).__webglTexture,rt.get(L.depthTexture).__webglTexture);let ht=L.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Pe=!0);let at=rt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(at[G])?Y=at[G][J]:Y=at[G],Le=!0):tt.isWebGL2&&L.samples>0&&D.useMultisampledRTT(L)===!1?Y=rt.get(L).__webglMultisampledFramebuffer:Array.isArray(at)?Y=at[J]:Y=at,S.copy(L.viewport),F.copy(L.scissor),ie=L.scissorTest}else S.copy(Q).multiplyScalar(ee).floor(),F.copy(ne).multiplyScalar(ee).floor(),ie=ue;if(Ue.bindFramebuffer(q.FRAMEBUFFER,Y)&&tt.drawBuffers&&te&&Ue.drawBuffers(L,Y),Ue.viewport(S),Ue.scissor(F),Ue.setScissorTest(ie),Le){let Ze=rt.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ze.__webglTexture,J)}else if(Pe){let Ze=rt.get(L.texture),ht=G||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ze.__webglTexture,J||0,ht)}z=-1},this.readRenderTargetPixels=function(L,G,J,te,Y,Le,Pe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ge=Ge[Pe]),Ge){Ue.bindFramebuffer(q.FRAMEBUFFER,Ge);try{let Ze=L.texture,ht=Ze.format,at=Ze.type;if(ht!==fi&&Oe.convert(ht)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ot=at===ho&&(He.has("EXT_color_buffer_half_float")||tt.isWebGL2&&He.has("EXT_color_buffer_float"));if(at!==Ds&&Oe.convert(at)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===os&&(tt.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-te&&J>=0&&J<=L.height-Y&&q.readPixels(G,J,te,Y,Oe.convert(ht),Oe.convert(at),Le)}finally{let Ze=N!==null?rt.get(N).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(L,G,J=0){let te=Math.pow(2,-J),Y=Math.floor(G.image.width*te),Le=Math.floor(G.image.height*te);D.setTexture2D(G,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,L.x,L.y,Y,Le),Ue.unbindTexture()},this.copyTextureToTexture=function(L,G,J,te=0){let Y=G.image.width,Le=G.image.height,Pe=Oe.convert(J.format),Ge=Oe.convert(J.type);D.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,L.x,L.y,Y,Le,Pe,Ge,G.image.data):G.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,L.x,L.y,G.mipmaps[0].width,G.mipmaps[0].height,Pe,G.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,L.x,L.y,Pe,Ge,G.image),te===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(L,G,J,te,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=L.max.x-L.min.x+1,Pe=L.max.y-L.min.y+1,Ge=L.max.z-L.min.z+1,Ze=Oe.convert(te.format),ht=Oe.convert(te.type),at;if(te.isData3DTexture)D.setTexture3D(te,0),at=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)D.setTexture2DArray(te,0),at=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);let ot=q.getParameter(q.UNPACK_ROW_LENGTH),qt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Vn=q.getParameter(q.UNPACK_SKIP_PIXELS),sn=q.getParameter(q.UNPACK_SKIP_ROWS),ui=q.getParameter(q.UNPACK_SKIP_IMAGES),kt=J.isCompressedTexture?J.mipmaps[Y]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,kt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,kt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,L.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,L.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,L.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(at,Y,G.x,G.y,G.z,Le,Pe,Ge,Ze,ht,kt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(at,Y,G.x,G.y,G.z,Le,Pe,Ge,Ze,kt.data)):q.texSubImage3D(at,Y,G.x,G.y,G.z,Le,Pe,Ge,Ze,ht,kt),q.pixelStorei(q.UNPACK_ROW_LENGTH,ot),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,qt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Vn),q.pixelStorei(q.UNPACK_SKIP_ROWS,sn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ui),Y===0&&te.generateMipmaps&&q.generateMipmap(at),Ue.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?D.setTextureCube(L,0):L.isData3DTexture?D.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?D.setTexture2DArray(L,0):D.setTexture2D(L,0),Ue.unbindTexture()},this.resetState=function(){I=0,C=0,N=null,Ue.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===cd?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===Pc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?yr:qm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?jt:cs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},$u=class extends go{};$u.prototype.isWebGL1Renderer=!0;var us=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},cc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new U,gi=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ri(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},va=class extends Ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ia,no=new U,sa=new U,ra=new U,aa=new it,io=new it,ig=new lt,Bl=new U,so=new U,Fl=new U,ym=new it,yu=new it,vm=new it,yo=class extends Qt{constructor(e=new va){if(super(),this.isSprite=!0,this.type="Sprite",ia===void 0){ia=new Qn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cc(t,5);ia.setIndex([0,1,2,0,2,3]),ia.setAttribute("position",new gi(i,3,0,!1)),ia.setAttribute("uv",new gi(i,2,3,!1))}this.geometry=ia,this.material=e,this.center=new it(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sa.setFromMatrixScale(this.matrixWorld),ig.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ra.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sa.multiplyScalar(-ra.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;zl(Bl.set(-.5,-.5,0),ra,o,sa,s,r),zl(so.set(.5,-.5,0),ra,o,sa,s,r),zl(Fl.set(.5,.5,0),ra,o,sa,s,r),ym.set(0,0),yu.set(1,0),vm.set(1,1);let a=e.ray.intersectTriangle(Bl,so,Fl,!1,no);if(a===null&&(zl(so.set(-.5,.5,0),ra,o,sa,s,r),yu.set(0,1),a=e.ray.intersectTriangle(Bl,Fl,so,!1,no),a===null))return;let l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:pr.getInterpolation(no,Bl,so,Fl,ym,yu,vm,new it),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zl(n,e,t,i,s,r){aa.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(io.x=r*aa.x-s*aa.y,io.y=s*aa.x+r*aa.y):io.copy(aa),n.copy(e),n.x+=io.x,n.y+=io.y,n.applyMatrix4(ig)}var xm=new U,_m=new _t,bm=new _t,NM=new U,Mm=new lt,Hl=new U,vu=new mi,wm=new lt,xu=new ga,hc=class extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingBox.expandByPoint(Hl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Hl),this.boundingSphere.expandByPoint(Hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vu.copy(this.boundingSphere),vu.applyMatrix4(s),e.ray.intersectsSphere(vu)!==!1&&(wm.copy(s).invert(),xu.copy(e.ray).applyMatrix4(wm),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ov?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;_m.fromBufferAttribute(s.attributes.skinIndex,e),bm.fromBufferAttribute(s.attributes.skinWeight,e),xm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=bm.getComponent(r);if(o!==0){let a=_m.getComponent(r);Mm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(NM.copy(xm).applyMatrix4(Mm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},vo=class extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},uc=class extends Kn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wn,h=wn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sm=new lt,DM=new lt,dc=class n{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:DM;Sm.multiplyMatrices(a,t[r]),Sm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new uc(t,e,e,fi,os);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vo),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var xa=class extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Em=new U,Tm=new U,Am=new lt,_u=new ga,Vl=new mi,xo=class extends Qt{constructor(e=new Qn,t=new xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Em.fromBufferAttribute(t,s-1),Tm.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Em.distanceTo(Tm);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(s),Vl.radius+=r,e.ray.intersectsSphere(Vl)===!1)return;Am.copy(s).invert(),_u.copy(e.ray).applyMatrix4(Am);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let b=f,P=M-1;b<P;b+=p){let I=g.getX(b),C=g.getX(b+1);if(c.fromBufferAttribute(m,I),h.fromBufferAttribute(m,C),_u.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let b=f,P=M-1;b<P;b+=p){if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),_u.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Cm=new U,Rm=new U,fc=class extends xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cm.fromBufferAttribute(t,s),Rm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cm.distanceTo(Rm);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _a=class extends Kn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pc=class n extends Qn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let M=[],b=f/i,P=0;f===0&&o===0?P=.5/t:f===i&&l===Math.PI&&(P=-.5/t);for(let I=0;I<=t;I++){let C=I/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+P,1-b),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let b=h[f][M+1],P=h[f][M],I=h[f+1][M],C=h[f+1][M+1];(f!==0||o>0)&&p.push(b,P,C),(f!==i-1||l<Math.PI)&&p.push(P,I,C)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mc=class extends Qn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){let f=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,M),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ft(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var _o=class extends Ni{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vr=class extends Ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Gl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function UM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function OM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Pm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function sg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ba=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qu=class extends ba{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cp,endingEnd:Cp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rp:r=e,a=2*t-i;break;case Lp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rp:o=e,l=2*i-t;break;case Lp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,P=p*m-p*v;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+M*o[c+I]+b*o[l+I]+P*o[u+I];return r}},Xu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Yu=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gl(t,this.TimeBufferType),this.values=Gl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gl(e.times,Array),values:Gl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ql:t=this.InterpolantFactoryMethodDiscrete;break;case Xl:t=this.InterpolantFactoryMethodLinear;break;case Yh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ql;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&UM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Xl;var Fs=class extends yi{};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ql;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends yi{};gc.prototype.ValueTypeName="color";var Ma=class extends yi{};Ma.prototype.ValueTypeName="number";var ju=class extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ii.slerpFlat(r,0,o,c-a,o,c,l);return r}},ds=class extends yi{InterpolantFactoryMethodLinear(e){return new ju(this.times,this.values,this.getValueSize(),e)}};ds.prototype.ValueTypeName="quaternion";ds.prototype.DefaultInterpolation=Xl;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends yi{};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=ql;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends yi{};fs.prototype.ValueTypeName="vector";var bo=class{constructor(e,t=-1,i,s=yv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(BM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(yi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=OM(l);l=Pm(l,1,h),c=Pm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ma(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,g,v){if(p.length!==0){let m=[],f=[];sg(p,m,f,g),m.length!==0&&v.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(let v in p){let m=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){let b=d[g];m.push(b.time),f.push(b.morphTarget===v?1:0)}s.push(new Ma(".morphTargetInfluence["+v+"]",m,f))}l=p.length*o}else{let p=".bones["+t[u].name+"]";i(fs,p+".position",d,"pos",s),i(ds,p+".quaternion",d,"rot",s),i(fs,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function kM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return gc;case"quaternion":return ds;case"bool":case"boolean":return Fs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function BM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=kM(n.type);if(n.times===void 0){let t=[],i=[];sg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var yc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Mo=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},FM=new Mo,Ui=class{constructor(e){this.manager=e!==void 0?e:FM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var ss={},Zu=class extends Error{constructor(e,t){super(e),this.response=t}},wo=class extends Ui{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ss[e]!==void 0){ss[e].push({onLoad:t,onProgress:i,onError:s});return}ss[e]=[],ss[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ss[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){M();function M(){u.read().then(({done:b,value:P})=>{if(b)f.close();else{v+=P.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,N=h.length;C<N;C++){let z=h[C];z.onProgress&&z.onProgress(I)}f.enqueue(P),M()}})}}});return new Response(m)}else throw new Zu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{yc.add(e,c);let h=ss[e];delete ss[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=ss[e];if(h===void 0)throw this.manager.itemError(e),c;delete ss[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ju=class extends Ui{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=uo("img");function l(){h(),yc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var vc=class extends Ui{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new uc,a=new wo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:On,o.wrapT=c.wrapT!==void 0?c.wrapT:On,o.magFilter=c.magFilter!==void 0?c.magFilter:$n,o.minFilter=c.minFilter!==void 0?c.minFilter:$n,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Os),c.mipmapCount===1&&(o.minFilter=$n),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},xc=class extends Ui{constructor(e){super(e)}load(e,t,i,s){let r=new Kn,o=new Ju(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},xr=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},_c=class extends xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bu=new lt,Im=new U,Nm=new U,So=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),t.position.copy(Im),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ku=class extends So{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ma*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bc=class extends xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ku}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dm=new lt,ro=new U,Mu=new U,Qu=class extends So{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(ro),Mu.copy(i.position),Mu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mu),i.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),Dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}},Mc=class extends xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ed=class extends So{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wa=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new ed}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wc=class extends xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sc=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ec=class extends Qn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var dd="\\[\\]\\.:\\/",zM=new RegExp("["+dd+"]","g"),fd="[^"+dd+"]",HM="[^"+dd.replace("\\.","")+"]",VM=/((?:WC+[\/:])*)/.source.replace("WC",fd),GM=/(WCOD+)?/.source.replace("WCOD",HM),WM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fd),$M=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fd),qM=new RegExp("^"+VM+GM+WM+$M+"$"),XM=["material","materials","bones","map"],td=class{constructor(e,t,i){let s=i||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zM,"")}static parseTrackName(e){let t=qM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);XM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=td;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fE=new Float32Array(1);var _r=class extends cc{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Tc=class{constructor(e,t,i=0,s=1/0){this.ray=new ga(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return nd(e,this,i,t),i.sort(Um),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)nd(e[s],this,i,t);return i.sort(Um),i}};function Um(n,e){return n.distance-e.distance}function nd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)nd(s[r],e,t,!0)}}var Om=new U,Wl=new U,Ac=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Om.subVectors(e,this.start),Wl.subVectors(this.end,this.start);let i=Wl.dot(Wl),r=Wl.dot(Om)/i;return t&&(r=Un(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);var Eo=class extends vc{constructor(e){super(e)}parse(e){function t(O){switch(O.image_type){case d:case v:if(O.colormap_length>256||O.colormap_size!==24||O.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(O.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+O.image_type)}if(O.width<=0||O.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(O.pixel_size!==8&&O.pixel_size!==16&&O.pixel_size!==24&&O.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+O.pixel_size)}function i(O,ee,j,W,Q){let ne,ue,V=j.pixel_size>>3,X=j.width*j.height*V;if(ee&&(ue=Q.subarray(W,W+=j.colormap_length*(j.colormap_size>>3))),O){ne=new Uint8Array(X);let se,re,ce,Ce=0,Be=new Uint8Array(V);for(;Ce<X;)if(se=Q[W++],re=(se&127)+1,se&128){for(ce=0;ce<V;++ce)Be[ce]=Q[W++];for(ce=0;ce<re;++ce)ne.set(Be,Ce+ce*V);Ce+=V*re}else{for(re*=V,ce=0;ce<re;++ce)ne[Ce+ce]=Q[W++];Ce+=re}}else ne=Q.subarray(W,W+=ee?j.width*j.height:X);return{pixel_data:ne,palettes:ue}}function s(O,ee,j,W,Q,ne,ue,V,X){let se=X,re,ce=0,Ce,Be,ge=S.width;for(Be=ee;Be!==W;Be+=j)for(Ce=Q;Ce!==ue;Ce+=ne,ce++)re=V[ce],O[(Ce+ge*Be)*4+3]=255,O[(Ce+ge*Be)*4+2]=se[re*3+0],O[(Ce+ge*Be)*4+1]=se[re*3+1],O[(Ce+ge*Be)*4+0]=se[re*3+2];return O}function r(O,ee,j,W,Q,ne,ue,V){let X,se=0,re,ce,Ce=S.width;for(ce=ee;ce!==W;ce+=j)for(re=Q;re!==ue;re+=ne,se+=2)X=V[se+0]+(V[se+1]<<8),O[(re+Ce*ce)*4+0]=(X&31744)>>7,O[(re+Ce*ce)*4+1]=(X&992)>>2,O[(re+Ce*ce)*4+2]=(X&31)<<3,O[(re+Ce*ce)*4+3]=X&32768?0:255;return O}function o(O,ee,j,W,Q,ne,ue,V){let X=0,se,re,ce=S.width;for(re=ee;re!==W;re+=j)for(se=Q;se!==ue;se+=ne,X+=3)O[(se+ce*re)*4+3]=255,O[(se+ce*re)*4+2]=V[X+0],O[(se+ce*re)*4+1]=V[X+1],O[(se+ce*re)*4+0]=V[X+2];return O}function a(O,ee,j,W,Q,ne,ue,V){let X=0,se,re,ce=S.width;for(re=ee;re!==W;re+=j)for(se=Q;se!==ue;se+=ne,X+=4)O[(se+ce*re)*4+2]=V[X+0],O[(se+ce*re)*4+1]=V[X+1],O[(se+ce*re)*4+0]=V[X+2],O[(se+ce*re)*4+3]=V[X+3];return O}function l(O,ee,j,W,Q,ne,ue,V){let X,se=0,re,ce,Ce=S.width;for(ce=ee;ce!==W;ce+=j)for(re=Q;re!==ue;re+=ne,se++)X=V[se],O[(re+Ce*ce)*4+0]=X,O[(re+Ce*ce)*4+1]=X,O[(re+Ce*ce)*4+2]=X,O[(re+Ce*ce)*4+3]=255;return O}function c(O,ee,j,W,Q,ne,ue,V){let X=0,se,re,ce=S.width;for(re=ee;re!==W;re+=j)for(se=Q;se!==ue;se+=ne,X+=2)O[(se+ce*re)*4+0]=V[X+0],O[(se+ce*re)*4+1]=V[X+0],O[(se+ce*re)*4+2]=V[X+0],O[(se+ce*re)*4+3]=V[X+1];return O}function h(O,ee,j,W,Q){let ne,ue,V,X,se,re;switch((S.flags&M)>>b){default:case C:ne=0,V=1,se=ee,ue=0,X=1,re=j;break;case P:ne=0,V=1,se=ee,ue=j-1,X=-1,re=-1;break;case N:ne=ee-1,V=-1,se=-1,ue=0,X=1,re=j;break;case I:ne=ee-1,V=-1,se=-1,ue=j-1,X=-1,re=-1;break}if(le)switch(S.pixel_size){case 8:l(O,ue,X,re,ne,V,se,W);break;case 16:c(O,ue,X,re,ne,V,se,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(O,ue,X,re,ne,V,se,W,Q);break;case 16:r(O,ue,X,re,ne,V,se,W);break;case 24:o(O,ue,X,re,ne,V,se,W);break;case 32:a(O,ue,X,re,ne,V,se,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return O}let u=0,d=1,p=2,g=3,v=9,m=10,f=11,M=48,b=4,P=0,I=1,C=2,N=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let z=0,w=new Uint8Array(e),S={id_length:w[z++],colormap_type:w[z++],image_type:w[z++],colormap_index:w[z++]|w[z++]<<8,colormap_length:w[z++]|w[z++]<<8,colormap_size:w[z++],origin:[w[z++]|w[z++]<<8,w[z++]|w[z++]<<8],width:w[z++]|w[z++]<<8,height:w[z++]|w[z++]<<8,pixel_size:w[z++],flags:w[z++]};if(t(S),S.id_length+z>e.length)throw new Error("THREE.TGALoader: No data.");z+=S.id_length;let F=!1,ie=!1,le=!1;switch(S.image_type){case v:F=!0,ie=!0;break;case d:ie=!0;break;case m:F=!0;break;case p:break;case f:F=!0,le=!0;break;case g:le=!0;break}let B=new Uint8Array(S.width*S.height*4),$=i(F,ie,S,z,w);return h(B,S.width,S.height,$.pixel_data,$.palettes),{data:B,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:Os}}};var Dc=class extends Ui{load(e,t,i,s){let r=this,o=r.path===""?Sc.extractUrlBase(e):r.path,a=new wo(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,x){let A=[],E=_.childNodes;for(let R=0,K=E.length;R<K;R++){let ae=E[R];ae.nodeName===x&&A.push(ae)}return A}function s(_){if(_.length===0)return[];let x=_.trim().split(/\s+/),A=new Array(x.length);for(let E=0,R=x.length;E<R;E++)A[E]=x[E];return A}function r(_){if(_.length===0)return[];let x=_.trim().split(/\s+/),A=new Array(x.length);for(let E=0,R=x.length;E<R;E++)A[E]=parseFloat(x[E]);return A}function o(_){if(_.length===0)return[];let x=_.trim().split(/\s+/),A=new Array(x.length);for(let E=0,R=x.length;E<R;E++)A[E]=parseInt(x[E]);return A}function a(_){return _.substring(1)}function l(){return"three_default_"+Ry++}function c(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function p(_,x,A,E){let R=i(_,x)[0];if(R!==void 0){let K=i(R,A);for(let ae=0;ae<K.length;ae++)E(K[ae])}}function g(_,x){for(let A in _){let E=_[A];E.build=x(_[A])}}function v(_,x){return _.build!==void 0||(_.build=x(_)),_.build}function m(_){let x={sources:{},samplers:{},channels:{}},A=!1;for(let E=0,R=_.childNodes.length;E<R;E++){let K=_.childNodes[E];if(K.nodeType!==1)continue;let ae;switch(K.nodeName){case"source":ae=K.getAttribute("id"),x.sources[ae]=k(K);break;case"sampler":ae=K.getAttribute("id"),x.samplers[ae]=f(K);break;case"channel":ae=K.getAttribute("target"),x.channels[ae]=M(K);break;case"animation":m(K),A=!0;break;default:console.log(K)}}A===!1&&(Je.animations[_.getAttribute("id")||Hs.generateUUID()]=x)}function f(_){let x={inputs:{}};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let K=a(R.getAttribute("source")),ae=R.getAttribute("semantic");x.inputs[ae]=K;break}}return x}function M(_){let x={},E=_.getAttribute("target").split("/"),R=E.shift(),K=E.shift(),ae=K.indexOf("(")!==-1,Ie=K.indexOf(".")!==-1;if(Ie)E=K.split("."),K=E.shift(),x.member=E.shift();else if(ae){let Se=K.split("(");K=Se.shift();for(let Re=0;Re<Se.length;Re++)Se[Re]=parseInt(Se[Re].replace(/\)/,""));x.indices=Se}return x.id=R,x.sid=K,x.arraySyntax=ae,x.memberSyntax=Ie,x.sampler=a(_.getAttribute("source")),x}function b(_){let x=[],A=_.channels,E=_.samplers,R=_.sources;for(let K in A)if(A.hasOwnProperty(K)){let ae=A[K],Ie=E[ae.sampler],Se=Ie.inputs.INPUT,Re=Ie.inputs.OUTPUT,ze=R[Se],fe=R[Re],Fe=I(ae,ze,fe);S(Fe,x)}return x}function P(_){return v(Je.animations[_],b)}function I(_,x,A){let E=Je.nodes[_.id],R=st(E.id),K=E.transforms[_.sid],ae=E.matrix.clone().transpose(),Ie,Se,Re,ze,fe,Fe,ke={};switch(K){case"matrix":for(Re=0,ze=x.array.length;Re<ze;Re++)if(Ie=x.array[Re],Se=Re*A.stride,ke[Ie]===void 0&&(ke[Ie]={}),_.arraySyntax===!0){let Yt=A.array[Se],Rt=_.indices[0]+4*_.indices[1];ke[Ie][Rt]=Yt}else for(fe=0,Fe=A.stride;fe<Fe;fe++)ke[Ie][fe]=A.array[Se+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}let qe=C(ke,ae);return{name:R.uuid,keyframes:qe}}function C(_,x){let A=[];for(let R in _)A.push({time:parseFloat(R),value:_[R]});A.sort(E);for(let R=0;R<16;R++)F(A,R,x.elements[R]);return A;function E(R,K){return R.time-K.time}}let N=new U,z=new U,w=new Ii;function S(_,x){let A=_.keyframes,E=_.name,R=[],K=[],ae=[],Ie=[];for(let Se=0,Re=A.length;Se<Re;Se++){let ze=A[Se],fe=ze.time,Fe=ze.value;Pe.fromArray(Fe).transpose(),Pe.decompose(N,w,z),R.push(fe),K.push(N.x,N.y,N.z),ae.push(w.x,w.y,w.z,w.w),Ie.push(z.x,z.y,z.z)}return K.length>0&&x.push(new fs(E+".position",R,K)),ae.length>0&&x.push(new ds(E+".quaternion",R,ae)),Ie.length>0&&x.push(new fs(E+".scale",R,Ie)),x}function F(_,x,A){let E,R=!0,K,ae;for(K=0,ae=_.length;K<ae;K++)E=_[K],E.value[x]===void 0?E.value[x]=null:R=!1;if(R===!0)for(K=0,ae=_.length;K<ae;K++)E=_[K],E.value[x]=A;else ie(_,x)}function ie(_,x){let A,E;for(let R=0,K=_.length;R<K;R++){let ae=_[R];if(ae.value[x]===null){if(A=le(_,R,x),E=B(_,R,x),A===null){ae.value[x]=E.value[x];continue}if(E===null){ae.value[x]=A.value[x];continue}$(ae,A,E,x)}}}function le(_,x,A){for(;x>=0;){let E=_[x];if(E.value[A]!==null)return E;x--}return null}function B(_,x,A){for(;x<_.length;){let E=_[x];if(E.value[A]!==null)return E;x++}return null}function $(_,x,A,E){if(A.time-x.time===0){_.value[E]=x.value[E];return}_.value[E]=(_.time-x.time)*(A.value[E]-x.value[E])/(A.time-x.time)+x.value[E]}function O(_){let x={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_animation":x.animations.push(a(R.getAttribute("url")));break}}Je.clips[_.getAttribute("id")]=x}function ee(_){let x=[],A=_.name,E=_.end-_.start||-1,R=_.animations;for(let K=0,ae=R.length;K<ae;K++){let Ie=P(R[K]);for(let Se=0,Re=Ie.length;Se<Re;Se++)x.push(Ie[Se])}return new bo(A,E,x)}function j(_){return v(Je.clips[_],ee)}function W(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"skin":x.id=a(R.getAttribute("source")),x.skin=Q(R);break;case"morph":x.id=a(R.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[_.getAttribute("id")]=x}function Q(_){let x={sources:{}};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(R.textContent);break;case"source":let K=R.getAttribute("id");x.sources[K]=k(R);break;case"joints":x.joints=ne(R);break;case"vertex_weights":x.vertexWeights=ue(R);break}}return x}function ne(_){let x={inputs:{}};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let K=R.getAttribute("semantic"),ae=a(R.getAttribute("source"));x.inputs[K]=ae;break}}return x}function ue(_){let x={inputs:{}};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let K=R.getAttribute("semantic"),ae=a(R.getAttribute("source")),Ie=parseInt(R.getAttribute("offset"));x.inputs[K]={id:ae,offset:Ie};break;case"vcount":x.vcount=o(R.textContent);break;case"v":x.v=o(R.textContent);break}}return x}function V(_){let x={id:_.id},A=Je.geometries[x.id];return _.skin!==void 0&&(x.skin=X(_.skin),A.sources.skinIndices=x.skin.indices,A.sources.skinWeights=x.skin.weights),x}function X(_){let A={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=_.sources,R=_.vertexWeights,K=R.vcount,ae=R.v,Ie=R.inputs.JOINT.offset,Se=R.inputs.WEIGHT.offset,Re=_.sources[_.joints.inputs.JOINT],ze=_.sources[_.joints.inputs.INV_BIND_MATRIX],fe=E[R.inputs.WEIGHT.id].array,Fe=0,ke,qe,We;for(ke=0,We=K.length;ke<We;ke++){let Rt=K[ke],vt=[];for(qe=0;qe<Rt;qe++){let xt=ae[Fe+Ie],Ki=ae[Fe+Se],Zn=fe[Ki];vt.push({index:xt,weight:Zn}),Fe+=2}for(vt.sort(Yt),qe=0;qe<4;qe++){let xt=vt[qe];xt!==void 0?(A.indices.array.push(xt.index),A.weights.array.push(xt.weight)):(A.indices.array.push(0),A.weights.array.push(0))}}for(_.bindShapeMatrix?A.bindMatrix=new lt().fromArray(_.bindShapeMatrix).transpose():A.bindMatrix=new lt().identity(),ke=0,We=Re.array.length;ke<We;ke++){let Rt=Re.array[ke],vt=new lt().fromArray(ze.array,ke*ze.stride).transpose();A.joints.push({name:Rt,boneInverse:vt})}return A;function Yt(Rt,vt){return vt.weight-Rt.weight}}function se(_){return v(Je.controllers[_],V)}function re(_){let x={init_from:i(_,"init_from")[0].textContent};Je.images[_.getAttribute("id")]=x}function ce(_){return _.build!==void 0?_.build:_.init_from}function Ce(_){let x=Je.images[_];return x!==void 0?v(x,ce):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function Be(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"profile_COMMON":x.profile=ge(R);break}}Je.effects[_.getAttribute("id")]=x}function ge(_){let x={surfaces:{},samplers:{}};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"newparam":Ke(R,x);break;case"technique":x.technique=He(R);break;case"extra":x.extra=T(R);break}}return x}function Ke(_,x){let A=_.getAttribute("sid");for(let E=0,R=_.childNodes.length;E<R;E++){let K=_.childNodes[E];if(K.nodeType===1)switch(K.nodeName){case"surface":x.surfaces[A]=q(K);break;case"sampler2D":x.samplers[A]=Kt(K);break}}}function q(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"init_from":x.init_from=R.textContent;break}}return x}function Kt(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"source":x.source=R.textContent;break}}return x}function He(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=R.nodeName,x.parameters=tt(R);break;case"extra":x.extra=T(R);break}}return x}function tt(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[R.nodeName]=Ue(R);break;case"transparent":x[R.nodeName]={opaque:R.hasAttribute("opaque")?R.getAttribute("opaque"):"A_ONE",data:Ue(R)};break}}return x}function Ue(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":x[R.nodeName]=r(R.textContent);break;case"float":x[R.nodeName]=parseFloat(R.textContent);break;case"texture":x[R.nodeName]={id:R.getAttribute("texture"),extra:Et(R)};break}}return x}function Et(_){let x={technique:{}};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"extra":rt(R,x);break}}return x}function rt(_,x){for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":D(R,x);break}}}function D(_,x){for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[R.nodeName]=parseFloat(R.textContent);break;case"wrapU":case"wrapV":R.textContent.toUpperCase()==="TRUE"?x.technique[R.nodeName]=1:R.textContent.toUpperCase()==="FALSE"?x.technique[R.nodeName]=0:x.technique[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=ye(R);break}}}function T(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":x.technique=Z(R);break}}return x}function Z(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"double_sided":x[R.nodeName]=parseInt(R.textContent);break;case"bump":x[R.nodeName]=ye(R);break}}return x}function ye(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"texture":x[R.nodeName]={id:R.getAttribute("texture"),texcoord:R.getAttribute("texcoord"),extra:Et(R)};break}}return x}function pe(_){return _}function xe(_){return v(Je.effects[_],pe)}function Ve(_){let x={name:_.getAttribute("name")};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_effect":x.url=a(R.getAttribute("url"));break}}Je.materials[_.getAttribute("id")]=x}function Ae(_){let x,A=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(A=A.toLowerCase(),A){case"tga":x=Hh;break;default:x=Ja}return x}function De(_){let x=xe(_.url),A=x.profile.technique,E;switch(A.type){case"phong":case"blinn":E=new _o;break;case"lambert":E=new vr;break;default:E=new tn;break}E.name=_.name||"";function R(Se,Re=null){let ze=x.profile.samplers[Se.id],fe=null;if(ze!==void 0){let Fe=x.profile.surfaces[ze.source];fe=Ce(Fe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=Ce(Se.id);if(fe!==null){let Fe=Ae(fe);if(Fe!==void 0){let ke=Fe.load(fe),qe=Se.extra;if(qe!==void 0&&qe.technique!==void 0&&c(qe.technique)===!1){let We=qe.technique;ke.wrapS=We.wrapU?Us:On,ke.wrapT=We.wrapV?Us:On,ke.offset.set(We.offsetU||0,We.offsetV||0),ke.repeat.set(We.repeatU||1,We.repeatV||1)}else ke.wrapS=Us,ke.wrapT=Us;return Re!==null&&(ke.colorSpace=Re),ke}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Se.id),null}let K=A.parameters;for(let Se in K){let Re=K[Se];switch(Se){case"diffuse":Re.color&&E.color.fromArray(Re.color),Re.texture&&(E.map=R(Re.texture,jt));break;case"specular":Re.color&&E.specular&&E.specular.fromArray(Re.color),Re.texture&&(E.specularMap=R(Re.texture));break;case"bump":Re.texture&&(E.normalMap=R(Re.texture));break;case"ambient":Re.texture&&(E.lightMap=R(Re.texture,jt));break;case"shininess":Re.float&&E.shininess&&(E.shininess=Re.float);break;case"emission":Re.color&&E.emissive&&E.emissive.fromArray(Re.color),Re.texture&&(E.emissiveMap=R(Re.texture,jt));break}}E.color.convertSRGBToLinear(),E.specular&&E.specular.convertSRGBToLinear(),E.emissive&&E.emissive.convertSRGBToLinear();let ae=K.transparent,Ie=K.transparency;if(Ie===void 0&&ae&&(Ie={float:1}),ae===void 0&&Ie&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Ie)if(ae.data.texture)E.transparent=!0;else{let Se=ae.data.color;switch(ae.opaque){case"A_ONE":E.opacity=Se[3]*Ie.float;break;case"RGB_ZERO":E.opacity=1-Se[0]*Ie.float;break;case"A_ZERO":E.opacity=1-Se[3]*Ie.float;break;case"RGB_ONE":E.opacity=Se[0]*Ie.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}E.opacity<1&&(E.transparent=!0)}if(A.extra!==void 0&&A.extra.technique!==void 0){let Se=A.extra.technique;for(let Re in Se){let ze=Se[Re];switch(Re){case"double_sided":E.side=ze===1?Xn:Jn;break;case"bump":E.normalMap=R(ze.texture),E.normalScale=new it(1,1);break}}}return E}function je(_){return v(Je.materials[_],De)}function dt(_){let x={name:_.getAttribute("name")};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"optics":x.optics=me(R);break}}Je.cameras[_.getAttribute("id")]=x}function me(_){for(let x=0;x<_.childNodes.length;x++){let A=_.childNodes[x];switch(A.nodeName){case"technique_common":return Tt(A)}}return{}}function Tt(_){let x={};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];switch(E.nodeName){case"perspective":case"orthographic":x.technique=E.nodeName,x.parameters=mt(E);break}}return x}function mt(_){let x={};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[E.nodeName]=parseFloat(E.textContent);break}}return x}function nt(_){let x;switch(_.optics.technique){case"perspective":x=new an(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let A=_.optics.parameters.ymag,E=_.optics.parameters.xmag,R=_.optics.parameters.aspect_ratio;E=E===void 0?A*R:E,A=A===void 0?E/R:A,E*=.5,A*=.5,x=new Bs(-E,E,A,-A,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:x=new an;break}return x.name=_.name||"",x}function $e(_){let x=Je.cameras[_];return x!==void 0?v(x,nt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Oe(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique_common":x=ct(R);break}}Je.lights[_.getAttribute("id")]=x}function ct(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=R.nodeName,x.parameters=wt(R)}}return x}function wt(_){let x={};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":let K=r(R.textContent);x.color=new ut().fromArray(K).convertSRGBToLinear();break;case"falloff_angle":x.falloffAngle=parseFloat(R.textContent);break;case"quadratic_attenuation":let ae=parseFloat(R.textContent);x.distance=ae?Math.sqrt(1/ae):0;break}}return x}function Ht(_){let x;switch(_.technique){case"directional":x=new wa;break;case"point":x=new Mc;break;case"spot":x=new bc;break;case"ambient":x=new wc;break}return _.parameters.color&&x.color.copy(_.parameters.color),_.parameters.distance&&(x.distance=_.parameters.distance),x}function ft(_){let x=Je.lights[_];return x!==void 0?v(x,Ht):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function we(_){let x={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},A=i(_,"mesh")[0];if(A!==void 0){for(let E=0;E<A.childNodes.length;E++){let R=A.childNodes[E];if(R.nodeType!==1)continue;let K=R.getAttribute("id");switch(R.nodeName){case"source":x.sources[K]=k(R);break;case"vertices":x.vertices=Ee(R);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",R.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(Te(R));break;default:console.log(R)}}Je.geometries[_.getAttribute("id")]=x}}function k(_){let x={array:[],stride:3};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"float_array":x.array=r(E.textContent);break;case"Name_array":x.array=s(E.textContent);break;case"technique_common":let R=i(E,"accessor")[0];R!==void 0&&(x.stride=parseInt(R.getAttribute("stride")));break}}return x}function Ee(_){let x={};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];E.nodeType===1&&(x[E.getAttribute("semantic")]=a(E.getAttribute("source")))}return x}function Te(_){let x={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let A=0,E=_.childNodes.length;A<E;A++){let R=_.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":let K=a(R.getAttribute("source")),ae=R.getAttribute("semantic"),Ie=parseInt(R.getAttribute("offset")),Se=parseInt(R.getAttribute("set")),Re=Se>0?ae+Se:ae;x.inputs[Re]={id:K,offset:Ie},x.stride=Math.max(x.stride,Ie+1),ae==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(R.textContent);break;case"p":x.p=o(R.textContent);break}}return x}function Qe(_){let x={};for(let A=0;A<_.length;A++){let E=_[A];x[E.type]===void 0&&(x[E.type]=[]),x[E.type].push(E)}return x}function Ye(_){let x=0;for(let A=0,E=_.length;A<E;A++)_[A].hasUV===!0&&x++;x>0&&x<_.length&&(_.uvsNeedsFix=!0)}function Ct(_){let x={},A=_.sources,E=_.vertices,R=_.primitives;if(R.length===0)return{};let K=Qe(R);for(let ae in K){let Ie=K[ae];Ye(Ie),x[ae]=Pt(Ie,A,E)}return x}function Pt(_,x,A){let E={},R={array:[],stride:0},K={array:[],stride:0},ae={array:[],stride:0},Ie={array:[],stride:0},Se={array:[],stride:0},Re={array:[],stride:4},ze={array:[],stride:4},fe=new Qn,Fe=[],ke=0;for(let qe=0;qe<_.length;qe++){let We=_[qe],Yt=We.inputs,Rt=0;switch(We.type){case"lines":case"linestrips":Rt=We.count*2;break;case"triangles":Rt=We.count*3;break;case"polylist":for(let vt=0;vt<We.count;vt++){let xt=We.vcount[vt];switch(xt){case 3:Rt+=3;break;case 4:Rt+=6;break;default:Rt+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",We.type)}fe.addGroup(ke,Rt,qe),ke+=Rt,We.material&&Fe.push(We.material);for(let vt in Yt){let xt=Yt[vt];switch(vt){case"VERTEX":for(let Ki in A){let Zn=A[Ki];switch(Ki){case"POSITION":let zr=R.array.length;if(At(We,x[Zn],xt.offset,R.array),R.stride=x[Zn].stride,x.skinWeights&&x.skinIndices&&(At(We,x.skinIndices,xt.offset,Re.array),At(We,x.skinWeights,xt.offset,ze.array)),We.hasUV===!1&&_.uvsNeedsFix===!0){let Ly=(R.array.length-zr)/R.stride;for(let Yf=0;Yf<Ly;Yf++)ae.array.push(0,0)}break;case"NORMAL":At(We,x[Zn],xt.offset,K.array),K.stride=x[Zn].stride;break;case"COLOR":At(We,x[Zn],xt.offset,Se.array),Se.stride=x[Zn].stride;break;case"TEXCOORD":At(We,x[Zn],xt.offset,ae.array),ae.stride=x[Zn].stride;break;case"TEXCOORD1":At(We,x[Zn],xt.offset,Ie.array),ae.stride=x[Zn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ki)}}break;case"NORMAL":At(We,x[xt.id],xt.offset,K.array),K.stride=x[xt.id].stride;break;case"COLOR":At(We,x[xt.id],xt.offset,Se.array,!0),Se.stride=x[xt.id].stride;break;case"TEXCOORD":At(We,x[xt.id],xt.offset,ae.array),ae.stride=x[xt.id].stride;break;case"TEXCOORD1":At(We,x[xt.id],xt.offset,Ie.array),Ie.stride=x[xt.id].stride;break}}}return R.array.length>0&&fe.setAttribute("position",new Ft(R.array,R.stride)),K.array.length>0&&fe.setAttribute("normal",new Ft(K.array,K.stride)),Se.array.length>0&&fe.setAttribute("color",new Ft(Se.array,Se.stride)),ae.array.length>0&&fe.setAttribute("uv",new Ft(ae.array,ae.stride)),Ie.array.length>0&&fe.setAttribute("uv1",new Ft(Ie.array,Ie.stride)),Re.array.length>0&&fe.setAttribute("skinIndex",new Ft(Re.array,Re.stride)),ze.array.length>0&&fe.setAttribute("skinWeight",new Ft(ze.array,ze.stride)),E.data=fe,E.type=_[0].type,E.materialKeys=Fe,E}function At(_,x,A,E,R=!1){let K=_.p,ae=_.stride,Ie=_.vcount;function Se(fe){let Fe=K[fe+A]*ze,ke=Fe+ze;for(;Fe<ke;Fe++)E.push(Re[Fe]);if(R){let qe=E.length-ze-1;fl.setRGB(E[qe+0],E[qe+1],E[qe+2]).convertSRGBToLinear(),E[qe+0]=fl.r,E[qe+1]=fl.g,E[qe+2]=fl.b}}let Re=x.array,ze=x.stride;if(_.vcount!==void 0){let fe=0;for(let Fe=0,ke=Ie.length;Fe<ke;Fe++){let qe=Ie[Fe];if(qe===4){let We=fe+ae*0,Yt=fe+ae*1,Rt=fe+ae*2,vt=fe+ae*3;Se(We),Se(Yt),Se(vt),Se(Yt),Se(Rt),Se(vt)}else if(qe===3){let We=fe+ae*0,Yt=fe+ae*1,Rt=fe+ae*2;Se(We),Se(Yt),Se(Rt)}else if(qe>4)for(let We=1,Yt=qe-2;We<=Yt;We++){let Rt=fe+ae*0,vt=fe+ae*We,xt=fe+ae*(We+1);Se(Rt),Se(vt),Se(xt)}fe+=ae*qe}}else for(let fe=0,Fe=K.length;fe<Fe;fe+=ae)Se(fe)}function fn(_){return v(Je.geometries[_],Ct)}function It(_){let x={name:_.getAttribute("name")||"",joints:{},links:[]};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"technique_common":hl(E,x);break}}Je.kinematicsModels[_.getAttribute("id")]=x}function Mn(_){return _.build!==void 0?_.build:_}function hi(_){return v(Je.kinematicsModels[_],Mn)}function hl(_,x){for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"joint":x.joints[E.getAttribute("sid")]=kh(E);break;case"link":x.links.push($a(E));break}}}function kh(_){let x;for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":x=Br(E);break}}return x}function Br(_){let x={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=r(E.textContent);x.axis.fromArray(R);break;case"limits":let K=E.getElementsByTagName("max")[0],ae=E.getElementsByTagName("min")[0];x.limits.max=parseFloat(K.textContent),x.limits.min=parseFloat(ae.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function $a(_){let x={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":x.attachments.push(Fr(E));break;case"matrix":case"translate":case"rotate":x.transforms.push(qa(E));break}}return x}function Fr(_){let x={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"link":x.links.push($a(E));break;case"matrix":case"translate":case"rotate":x.transforms.push(qa(E));break}}return x}function qa(_){let x={type:_.nodeName},A=r(_.textContent);switch(x.type){case"matrix":x.obj=new lt,x.obj.fromArray(A).transpose();break;case"translate":x.obj=new U,x.obj.fromArray(A);break;case"rotate":x.obj=new U,x.obj.fromArray(A),x.angle=Hs.degToRad(A[3]);break}return x}function ul(_){let x={name:_.getAttribute("name")||"",rigidBodies:{}};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":x.rigidBodies[E.getAttribute("name")]={},Bh(E,x.rigidBodies[E.getAttribute("name")]);break}}Je.physicsModels[_.getAttribute("id")]=x}function Bh(_,x){for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"technique_common":Fh(E,x);break}}}function Fh(_,x){for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"inertia":x.inertia=r(E.textContent);break;case"mass":x.mass=r(E.textContent)[0];break}}}function zh(_){let x={bindJointAxis:[]};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":x.bindJointAxis.push(L(E));break}}Je.kinematicsScenes[a(_.getAttribute("url"))]=x}function L(_){let x={target:_.getAttribute("target").split("/").pop()};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=E.getElementsByTagName("param")[0];x.axis=R.textContent;let K=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=K.substring(0,K.length-1);break}}return x}function G(_){return _.build!==void 0?_.build:_}function J(_){return v(Je.kinematicsScenes[_],G)}function te(){let _=Object.keys(Je.kinematicsModels)[0],x=Object.keys(Je.kinematicsScenes)[0],A=Object.keys(Je.visualScenes)[0];if(_===void 0||x===void 0)return;let E=hi(_),R=J(x),K=Ya(A),ae=R.bindJointAxis,Ie={};for(let ze=0,fe=ae.length;ze<fe;ze++){let Fe=ae[ze],ke=Xt.querySelector('[sid="'+Fe.target+'"]');if(ke){let qe=ke.parentElement;Se(Fe.jointIndex,qe)}}function Se(ze,fe){let Fe=fe.getAttribute("name"),ke=E.joints[ze];K.traverse(function(qe){qe.name===Fe&&(Ie[ze]={object:qe,transforms:Y(fe),joint:ke,position:ke.zeroPosition})})}let Re=new lt;Xf={joints:E&&E.joints,getJointValue:function(ze){let fe=Ie[ze];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+ze+" doesn't exist.")},setJointValue:function(ze,fe){let Fe=Ie[ze];if(Fe){let ke=Fe.joint;if(fe>ke.limits.max||fe<ke.limits.min)console.warn("THREE.ColladaLoader: Joint "+ze+" value "+fe+" outside of limits (min: "+ke.limits.min+", max: "+ke.limits.max+").");else if(ke.static)console.warn("THREE.ColladaLoader: Joint "+ze+" is static.");else{let qe=Fe.object,We=ke.axis,Yt=Fe.transforms;Pe.identity();for(let Rt=0;Rt<Yt.length;Rt++){let vt=Yt[Rt];if(vt.sid&&vt.sid.indexOf(ze)!==-1)switch(ke.type){case"revolute":Pe.multiply(Re.makeRotationAxis(We,Hs.degToRad(fe)));break;case"prismatic":Pe.multiply(Re.makeTranslation(We.x*fe,We.y*fe,We.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+ke.type);break}else switch(vt.type){case"matrix":Pe.multiply(vt.obj);break;case"translate":Pe.multiply(Re.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":Pe.scale(vt.obj);break;case"rotate":Pe.multiply(Re.makeRotationAxis(vt.obj,vt.angle));break}}qe.matrix.copy(Pe),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),Ie[ze].position=fe}}else console.log("THREE.ColladaLoader: "+ze+" does not exist.")}}}function Y(_){let x=[],A=Xt.querySelector('[id="'+_.id+'"]');for(let E=0;E<A.childNodes.length;E++){let R=A.childNodes[E];if(R.nodeType!==1)continue;let K,ae;switch(R.nodeName){case"matrix":K=r(R.textContent);let Ie=new lt().fromArray(K).transpose();x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:Ie});break;case"translate":case"scale":K=r(R.textContent),ae=new U().fromArray(K),x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae});break;case"rotate":K=r(R.textContent),ae=new U().fromArray(K);let Se=Hs.degToRad(K[3]);x.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae,angle:Se});break}}return x}function Le(_){let x=_.getElementsByTagName("node");for(let A=0;A<x.length;A++){let E=x[A];E.hasAttribute("id")===!1&&E.setAttribute("id",l())}}let Pe=new lt,Ge=new U;function Ze(_){let x={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];if(E.nodeType!==1)continue;let R;switch(E.nodeName){case"node":x.nodes.push(E.getAttribute("id")),Ze(E);break;case"instance_camera":x.instanceCameras.push(a(E.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(ht(E));break;case"instance_light":x.instanceLights.push(a(E.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(ht(E));break;case"instance_node":x.instanceNodes.push(a(E.getAttribute("url")));break;case"matrix":R=r(E.textContent),x.matrix.multiply(Pe.fromArray(R).transpose()),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":R=r(E.textContent),Ge.fromArray(R),x.matrix.multiply(Pe.makeTranslation(Ge.x,Ge.y,Ge.z)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":R=r(E.textContent);let K=Hs.degToRad(R[3]);x.matrix.multiply(Pe.makeRotationAxis(Ge.fromArray(R),K)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":R=r(E.textContent),x.matrix.scale(Ge.fromArray(R)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return kt(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):Je.nodes[x.id]=x,x}function ht(_){let x={id:a(_.getAttribute("url")),materials:{},skeletons:[]};for(let A=0;A<_.childNodes.length;A++){let E=_.childNodes[A];switch(E.nodeName){case"bind_material":let R=E.getElementsByTagName("instance_material");for(let K=0;K<R.length;K++){let ae=R[K],Ie=ae.getAttribute("symbol"),Se=ae.getAttribute("target");x.materials[Ie]=a(Se)}break;case"skeleton":x.skeletons.push(a(E.textContent));break;default:break}}return x}function at(_,x){let A=[],E=[],R,K,ae;for(R=0;R<_.length;R++){let Re=_[R],ze;if(kt(Re))ze=st(Re),ot(ze,x,A);else if(Ji(Re)){let Fe=Je.visualScenes[Re].children;for(let ke=0;ke<Fe.length;ke++){let qe=Fe[ke];if(qe.type==="JOINT"){let We=st(qe.id);ot(We,x,A)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Re)}for(R=0;R<x.length;R++)for(K=0;K<A.length;K++)if(ae=A[K],ae.bone.name===x[R].name){E[R]=ae,ae.processed=!0;break}for(R=0;R<A.length;R++)ae=A[R],ae.processed===!1&&(E.push(ae),ae.processed=!0);let Ie=[],Se=[];for(R=0;R<E.length;R++)ae=E[R],Ie.push(ae.bone),Se.push(ae.boneInverse);return new dc(Ie,Se)}function ot(_,x,A){_.traverse(function(E){if(E.isBone===!0){let R;for(let K=0;K<x.length;K++){let ae=x[K];if(ae.name===E.name){R=ae.boneInverse;break}}R===void 0&&(R=new lt),A.push({bone:E,boneInverse:R,processed:!1})}})}function qt(_){let x=[],A=_.matrix,E=_.nodes,R=_.type,K=_.instanceCameras,ae=_.instanceControllers,Ie=_.instanceLights,Se=_.instanceGeometries,Re=_.instanceNodes;for(let fe=0,Fe=E.length;fe<Fe;fe++)x.push(st(E[fe]));for(let fe=0,Fe=K.length;fe<Fe;fe++){let ke=$e(K[fe]);ke!==null&&x.push(ke.clone())}for(let fe=0,Fe=ae.length;fe<Fe;fe++){let ke=ae[fe],qe=se(ke.id),We=fn(qe.id),Yt=ui(We,ke.materials),Rt=ke.skeletons,vt=qe.skin.joints,xt=at(Rt,vt);for(let Ki=0,Zn=Yt.length;Ki<Zn;Ki++){let zr=Yt[Ki];zr.isSkinnedMesh&&(zr.bind(xt,qe.skin.bindMatrix),zr.normalizeSkinWeights()),x.push(zr)}}for(let fe=0,Fe=Ie.length;fe<Fe;fe++){let ke=ft(Ie[fe]);ke!==null&&x.push(ke.clone())}for(let fe=0,Fe=Se.length;fe<Fe;fe++){let ke=Se[fe],qe=fn(ke.id),We=ui(qe,ke.materials);for(let Yt=0,Rt=We.length;Yt<Rt;Yt++)x.push(We[Yt])}for(let fe=0,Fe=Re.length;fe<Fe;fe++)x.push(st(Re[fe]).clone());let ze;if(E.length===0&&x.length===1)ze=x[0];else{ze=R==="JOINT"?new vo:new Sn;for(let fe=0;fe<x.length;fe++)ze.add(x[fe])}return ze.name=R==="JOINT"?_.sid:_.name,ze.matrix.copy(A),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze}let Vn=new tn({name:Ui.DEFAULT_MATERIAL_NAME,color:16711935});function sn(_,x){let A=[];for(let E=0,R=_.length;E<R;E++){let K=x[_[E]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[E]),A.push(Vn)):A.push(je(K))}return A}function ui(_,x){let A=[];for(let E in _){let R=_[E],K=sn(R.materialKeys,x);if(K.length===0&&(E==="lines"||E==="linestrips"?K.push(new xa):K.push(new _o)),E==="lines"||E==="linestrips")for(let Re=0,ze=K.length;Re<ze;Re++){let fe=K[Re];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){let Fe=new xa;Fe.color.copy(fe.color),Fe.opacity=fe.opacity,Fe.transparent=fe.transparent,K[Re]=Fe}}let ae=R.data.attributes.skinIndex!==void 0,Ie=K.length===1?K[0]:K,Se;switch(E){case"lines":Se=new fc(R.data,Ie);break;case"linestrips":Se=new xo(R.data,Ie);break;case"triangles":case"polylist":ae?Se=new hc(R.data,Ie):Se=new Bt(R.data,Ie);break}A.push(Se)}return A}function kt(_){return Je.nodes[_]!==void 0}function st(_){return v(Je.nodes[_],qt)}function Xa(_){let x={name:_.getAttribute("name"),children:[]};Le(_);let A=i(_,"node");for(let E=0;E<A.length;E++)x.children.push(Ze(A[E]));Je.visualScenes[_.getAttribute("id")]=x}function Vt(_){let x=new Sn;x.name=_.name;let A=_.children;for(let E=0;E<A.length;E++){let R=A[E];x.add(st(R.id))}return x}function Ji(_){return Je.visualScenes[_]!==void 0}function Ya(_){return v(Je.visualScenes[_],Vt)}function or(_){let x=i(_,"instance_visual_scene")[0];return Ya(a(x.getAttribute("url")))}function ja(){let _=Je.clips;if(c(_)===!0){if(c(Je.animations)===!1){let x=[];for(let A in Je.animations){let E=P(A);for(let R=0,K=E.length;R<K;R++)x.push(E[R])}pl.push(new bo("default",-1,x))}}else for(let x in _)pl.push(j(x))}function pn(_){let x="",A=[_];for(;A.length;){let E=A.shift();E.nodeType===Node.TEXT_NODE?x+=E.textContent:(x+=`
`,A.push.apply(A,E.childNodes))}return x.trim()}if(e.length===0)return{scene:new us};let Ri=new DOMParser().parseFromString(e,"application/xml"),Xt=i(Ri,"COLLADA")[0],In=Ri.getElementsByTagName("parsererror")[0];if(In!==void 0){let _=i(In,"div")[0],x;return _?x=_.textContent:x=pn(In),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}let Za=Xt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Za);let dl=h(i(Xt,"asset")[0]),Ja=new xc(this.manager);Ja.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Hh;Eo&&(Hh=new Eo(this.manager),Hh.setPath(this.resourcePath||t));let fl=new ut,pl=[],Xf={},Ry=0,Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(Xt,"library_animations","animation",m),p(Xt,"library_animation_clips","animation_clip",O),p(Xt,"library_controllers","controller",W),p(Xt,"library_images","image",re),p(Xt,"library_effects","effect",Be),p(Xt,"library_materials","material",Ve),p(Xt,"library_cameras","camera",dt),p(Xt,"library_lights","light",Oe),p(Xt,"library_geometries","geometry",we),p(Xt,"library_nodes","node",Ze),p(Xt,"library_visual_scenes","visual_scene",Xa),p(Xt,"library_kinematics_models","kinematics_model",It),p(Xt,"library_physics_models","physics_model",ul),p(Xt,"scene","instance_kinematics_scene",zh),g(Je.animations,b),g(Je.clips,ee),g(Je.controllers,V),g(Je.images,ce),g(Je.effects,pe),g(Je.materials,De),g(Je.cameras,nt),g(Je.lights,Ht),g(Je.geometries,Ct),g(Je.visualScenes,Vt),ja(),te();let ml=or(i(Xt,"scene")[0]);return ml.animations=pl,dl.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ml.rotation.set(-Math.PI/2,0,0)),ml.scale.multiplyScalar(dl.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),pl},kinematics:Xf,library:Je,scene:ml}}};var rg=new yn,Uc=new U,Vs=class extends Ec{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ft(e,3)),this.setAttribute("uv",new Ft(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new _r(t,6,1);return this.setAttribute("instanceStart",new gi(i,3,0)),this.setAttribute("instanceEnd",new gi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new _r(t,6,1);return this.setAttribute("instanceColorStart",new gi(i,3,0)),this.setAttribute("instanceColorEnd",new gi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new mc(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),rg.setFromBufferAttribute(t),this.boundingBox.union(rg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Uc.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Uc)),Uc.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Uc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new it(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qn.line={uniforms:Ic.merge([be.common,be.fog,be.line]),vertexShader:`
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
		`};var ps=class extends Si{constructor(e){super({type:"LineMaterial",uniforms:Ic.clone(qn.line.uniforms),vertexShader:qn.line.vertexShader,fragmentShader:qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var ag=new U,og=new U,En=new _t,Tn=new _t,Oi=new _t,pd=new U,md=new lt,An=new Ac,lg=new U,Oc=new yn,kc=new mi,ki=new _t,Bi,br;function cg(n,e,t){return ki.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),ki.multiplyScalar(1/ki.w),ki.x=br/t.width,ki.y=br/t.height,ki.applyMatrix4(n.projectionMatrixInverse),ki.multiplyScalar(1/ki.w),Math.abs(Math.max(ki.x,ki.y))}function jM(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){An.start.fromBufferAttribute(s,a),An.end.fromBufferAttribute(r,a),An.applyMatrix4(t);let c=new U,h=new U;Bi.distanceSqToSegment(An.start,An.end,h,c),h.distanceTo(c)<br*.5&&e.push({point:h,pointOnLine:c,distance:Bi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function ZM(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;Bi.at(1,Oi),Oi.w=1,Oi.applyMatrix4(e.matrixWorldInverse),Oi.applyMatrix4(i),Oi.multiplyScalar(1/Oi.w),Oi.x*=r.x/2,Oi.y*=r.y/2,Oi.z=0,pd.copy(Oi),md.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(En.fromBufferAttribute(l,d),Tn.fromBufferAttribute(c,d),En.w=1,Tn.w=1,En.applyMatrix4(md),Tn.applyMatrix4(md),En.z>u&&Tn.z>u)continue;if(En.z>u){let b=En.z-Tn.z,P=(En.z-u)/b;En.lerp(Tn,P)}else if(Tn.z>u){let b=Tn.z-En.z,P=(Tn.z-u)/b;Tn.lerp(En,P)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=r.x/2,En.y*=r.y/2,Tn.x*=r.x/2,Tn.y*=r.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let v=An.closestPointToPointParameter(pd,!0);An.at(v,lg);let m=Hs.lerp(En.z,Tn.z,v),f=m>=-1&&m<=1,M=pd.distanceTo(lg)<br*.5;if(f&&M){An.start.fromBufferAttribute(l,d),An.end.fromBufferAttribute(c,d),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let b=new U,P=new U;Bi.distanceSqToSegment(An.start,An.end,P,b),t.push({point:P,pointOnLine:b,distance:Bi.origin.distanceTo(P),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var Ea=class extends Bt{constructor(e=new Vs,t=new ps({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)ag.fromBufferAttribute(t,o),og.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+ag.distanceTo(og);let r=new _r(s,2,1);return e.setAttribute("instanceDistanceStart",new gi(r,1,0)),e.setAttribute("instanceDistanceEnd",new gi(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Bi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;br=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=br*.5;else{let u=Math.max(s.near,kc.distanceToPoint(Bi.origin));c=cg(s,u,l.resolution)}if(kc.radius+=c,Bi.intersectsSphere(kc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Oc.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=br*.5;else{let u=Math.max(s.near,Oc.distanceToPoint(Bi.origin));h=cg(s,u,l.resolution)}Oc.expandByScalar(h),Bi.intersectsBox(Oc)!==!1&&(i?jM(this,t):ZM(this,s,t))}};var JM="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",To=null;function KM(){if(To)return To;To=new Map;for(let n of JM.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,o]=i.split(" ");To.set(t?t+"/"+s:s,[+r,+o])}}return To}var Mr=Math.PI/180;function QM(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*Mr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*Mr,o=(23.439-36e-8*i)*Mr,a=Math.atan2(Math.cos(o)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(o)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*Mr+t*Mr-a,u=e*Mr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/Mr}function ew(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=KM().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function hg(n=Date.now(),e=ew()){if(e.lat==null){let r=new Date(n),o=r.getHours()+r.getMinutes()/60,a=o>=7&&o<20,l=new Date(n);return l.setHours(a?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:a,next:+l}}let t=r=>QM(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let o=r-s,a=r;for(;a-o>3e4;){let l=(o+a)/2;t(l)===i?o=l:a=l}return{day:i,next:Math.ceil(a)}}return{day:i,next:n+24*36e5}}var ug=(n,e)=>(n&&typeof n=="object"?n[e]||n.en||n.fr||Object.values(n).find(Boolean)||"":String(n||"")).trim();var tw={amp:"&",lt:"<",gt:">",quot:'"',"#39":"'",nbsp:" ",rsquo:"\u2019",lsquo:"\u2018",laquo:"\xAB",raquo:"\xBB"},dg=n=>String(n||"").replace(/<\/(p|li|h3)>|<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&(#?\w+);/g,(e,t)=>tw[t]??e).split(`
`).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean);var nw=["core","artists","specialists","team","people"];function gd(n,e){let t=(n.sections||[]).find(s=>s.id===e.section&&s.visible!==!1);if(!t||e.published===!1)return!1;let i=(e.tags||[]).some(s=>nw.includes(s));return t.card==="portrait"?i&&(dg(ug(e.body,"en")).join(" ")+dg(ug(e.body,"fr")).join(" ")).length>40:!0}var ai=["en","fr","ca","es"];var iw={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function yg(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of iw[e]||ai)if(n[t])return n[t];return""}var wr={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Website:",homeLink:"Home",partners:"Partners",skillProjects:"Projects",skills:"Expertise",who:"Team",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous",next:"Next",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",hv_words:"Type something",hv_turn:"Turn your phone to see the whole video",overview:"Overview",ov_n:"projects",nProjects:"projects",nextProject:"Next project",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Settings",hv_slides:"Slideshow",hv_private:"Camera: nothing is recorded.",hv_consent:"This video is just for you. Nothing is recorded, nothing is sent.",hv_camYes:"Turn on the camera",cancel:"Cancel",stop:"Stop",params:"Settings",hv_source:"Source",hv_cell:"Grid",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",hv_fmtBig:"Large format",hv_fmtRs:"Social (4:5)",story:"The story of this site",c_write:"Write",c_call:"Call",c_addr:"Address",c_follow:"Follow"},fr:{category:"Cat\xE9gorie",together:"Projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets",skills:"Savoir-faire",who:"L\u2019\xE9quipe",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Pr\xE9c\xE9dents",next:"Suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",hv_words:"Type something",hv_turn:"Tourne ton t\xE9l\xE9phone pour voir la vid\xE9o en entier",overview:"Vue d\u2019ensemble",ov_n:"r\xE9alisations",nProjects:"projets",nextProject:"Projet suivant",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"Param\xE8tres",hv_slides:"Diaporama",hv_private:"Cam\xE9ra : rien n\u2019est enregistr\xE9.",hv_consent:"Cette vid\xE9o est juste pour toi. Rien n\u2019est enregistr\xE9, rien n\u2019est envoy\xE9.",hv_camYes:"Allumer la cam\xE9ra",cancel:"Annuler",stop:"Arr\xEAter",params:"Param\xE8tres",hv_source:"Source",hv_cell:"Grille",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",hv_fmtBig:"Grand format",hv_fmtRs:"R\xE9seaux (4:5)",story:"L\u2019histoire de ce site",c_write:"\xC9crire",c_call:"Appeler",c_addr:"Adresse",c_follow:"Suivre"},ca:{category:"Categoria",together:"Projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Web:",homeLink:"Inici",partners:"Socis",skillProjects:"Projectes",skills:"Saber fer",who:"Equip",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",hv_words:"Type something",hv_turn:"Gira el m\xF2bil per veure el v\xEDdeo sencer",overview:"Visi\xF3 de conjunt",ov_n:"projectes",nProjects:"projectes",nextProject:"Projecte seg\xFCent",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Par\xE0metres",hv_slides:"Diapositives",hv_private:"C\xE0mera: no es grava res.",hv_consent:"Aquest v\xEDdeo \xE9s nom\xE9s per a tu. No es grava res, no s\u2019envia res.",hv_camYes:"Enc\xE9n la c\xE0mera",cancel:"Cancel\xB7la",stop:"Atura",params:"Par\xE0metres",hv_source:"Font",hv_cell:"Graella",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",hv_fmtBig:"Gran format",hv_fmtRs:"Xarxes (4:5)",story:"La hist\xF2ria d\u2019aquest web",c_write:"Escriu",c_call:"Truca",c_addr:"Adre\xE7a",c_follow:"Segueix"},es:{category:"Categor\xEDa",together:"Proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Web:",homeLink:"Inicio",partners:"Socios",skillProjects:"Proyectos",skills:"Saber hacer",who:"Equipo",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",hv_words:"Type something",hv_turn:"Gira el m\xF3vil para ver el v\xEDdeo entero",overview:"Vista general",ov_n:"proyectos",nProjects:"proyectos",nextProject:"Proyecto siguiente",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Par\xE1metros",hv_slides:"Diapositivas",hv_private:"C\xE1mara: no se graba nada.",hv_consent:"Este v\xEDdeo es solo para ti. No se graba nada, no se env\xEDa nada.",hv_camYes:"Encender la c\xE1mara",cancel:"Cancelar",stop:"Detener",params:"Par\xE1metros",hv_source:"Fuente",hv_cell:"Cuadr\xEDcula",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",hv_fmtBig:"Gran formato",hv_fmtRs:"Redes (4:5)",story:"La historia de esta web",c_write:"Escribe",c_call:"Llama",c_addr:"Direcci\xF3n",c_follow:"Sigue"}},sw={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Co={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function yd(){return Object.fromEntries(ai.map(n=>[n,""]))}function Gs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:ai.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||yd(),e.sub=e.sub||yd(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.intro&&typeof e.intro=="object"&&Object.entries(e.intro).forEach(([s,r])=>{String(r||"").trim()&&(e.sub[s]=r)}),delete e.intro,e.quotes=e.quotes&&typeof e.quotes=="object"?e.quotes:yd();let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(ai.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(ai.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=sw[s.layout]?s.layout:"carousel",s.card=Co[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(ai.map(o=>[o,s[r]||""]))),ai.forEach(o=>{s[r][o]==null&&(s[r][o]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(ai.map(o=>[o,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(xd):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function vd(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function vg(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function Ro(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function _e(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var rw=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Sr(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!rw.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Er(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var xd=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Ws(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function _d(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function fg(n){try{let e=await _d();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function pg(n,e){let t=await _d();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function mg(n){try{let e=await _d();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Bc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Gs(structuredClone(window.HC_CONTENT));if(window.HC_CONTENT_P&&!this.base){let t=await window.HC_CONTENT_P;if(window.HC_CONTENT_P=null,t)return Gs(t)}let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Gs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Fc=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await fg("demo:content:v6");if(e)return Gs(e);if(window.HC_CONTENT)return Gs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Gs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await mg("demo:file:"+i.path);continue}await pg("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await pg("demo:content:v6",e),"demo"}async reset(){await mg("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await fg("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},gg=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Ao=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body",".txt .folds .fb"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3",".txt .folds summary"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],aw=["font","size","lh","weight","italic","ls","upper"],xg=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function ow(n){let e=gg.find(i=>i.id===n);if(e)return e.css;let t=xg(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:gg[0].css}function ei(n,e){let t=Ao.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...aw,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=ow(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function _g(n){let e=[],t=[],i=[],s=[];for(let r of Ao){if(r.vars||!r.sel)continue;let o=ei(n,r.id),a=r.id;s.push(`--f-${a}: ${o.css}`,`--w-${a}: ${o.weight||400}`,`--st-${a}: ${o.italic?"italic":"normal"}`,`--tt-${a}: ${o.upper?"uppercase":"none"}`,`--ls-${a}: ${o.ls||0}em`),o.size&&s.push(`--s-${a}: ${o.size}px`,`--lh-${a}: ${o.lh?o.lh:+(o.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of Ao){let o=n&&n.typo&&n.typo[r.id]||{},a=ei(n,r.id),l=h=>o[h]!==void 0&&o[h]!==""&&o[h]!==null&&o[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${a.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${a.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(a.size*r.clamp[0])}px, ${(a.size/r.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?a.lh:+(r.lh*a.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${a.weight}`),l("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${a.ls}em`),l("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?a.lh:r.lh*a.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function bg(n){let e=new Map;for(let t of Ao){let i=ei(n,t.id),s=xg(i.font);if(!s)continue;new Set([+(i.weight||400),400,700,...t.id==="body"?[800]:[]]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function bd(n){let e=new Set;for(let t of Ao){let i=ei(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Mg(n,e,t=!1){let i=ei(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let a=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=a(l);let c=r.measureText(o).width;c>172&&(l=Math.floor(l*172/c),r.font=a(l));let h=r.measureText(o),u=(h.actualBoundingBoxAscent||l*.7)-(h.actualBoundingBoxDescent||0);if(r.fillText(o,120+((h.actualBoundingBoxLeft??h.width/2)-(h.actualBoundingBoxRight??h.width/2))/2,120+u/2-4),t){let d=r.getImageData(0,0,240,240),p=d.data;for(let g=0;g<p.length;g+=4)p[g]=255-p[g],p[g+1]=255-p[g+1],p[g+2]=255-p[g+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var wg=window.HC_BASE||"",Jc=window.HC_MODE==="demo"?new Fc(wg):new Bc(wg),Ys=window.HC_ASSETS||null,df=location.protocol==="file:",v0=(()=>{let n=document.querySelector("base"),e=n?document.baseURI:new URL("./",location.href).href;if(!df&&(window.HC_ROUTE||{}).pages)if(n)n.href=e;else{let t=document.createElement("base");t.href=e,document.head.prepend(t)}return new URL(e)})(),x0=20261102;window.HC_SITE_VERSION=x0;var St=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,bt=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return St&&St.files&&St.files[e]?St.files[e]:Ys&&Ys[e]&&Ys[e].startsWith("data:")?Ys[e]:Jc.url(e)};async function lw(n){if(Ys&&Ys[n]&&!Ys[n].startsWith("data:"))return Ys[n];let e=await fetch(bt(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var ve=null,xn="en",he=n=>yg(n,xn),Me=n=>(wr[xn]||wr.en)[n],_0=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},er={zoom:2,focus:300},cw=.08,Sg={};function b0(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=Sg[t]}):(e.forEach(t=>{Sg[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Hd=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=vd(ve,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(s=>s.tags)),t=this.section.tags.filter(s=>e.has(s.id)&&s.menu!==!1),i={id:"",label:Object.fromEntries(ai.map(s=>[s,(wr[s]||wr.en).all]))};return this.section.noAll&&t.length?t:[i,...t]}tagOf(e){let t=this.categoryList;return e.tags.find(i=>t.some(s=>s.id===i))||(t[0]?t[0].id:"")}changeCategory(e){let t=this.categoryList;t.some(i=>i.id===e)||(e=t.some(i=>i.id===this.defaultCategory)?this.defaultCategory:t[0]?t[0].id:""),this.category=e,this.list=e?this.all.filter(i=>i.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?he(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Ut[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Hd(this.section.def)}},Ut=[],yt={x:0,y:0,z:0,zoom:er.zoom},zn={x:0,y:0,z:0},vs=0,Ai=[],hw={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function hn(n,e,t,i={}){for(let r of Ai)if(r.obj===n)for(let o in t)delete r.props[o];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:vs+(i.delay||0),ease:hw[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return Ai.push(s),s}var Go=(n,e)=>hn({},n,{},{onComplete:e,ease:"linear"});function Cn(n){for(let e=Ai.length-1;e>=0;e--)Ai[e].obj===n&&Ai.splice(e,1)}function Fa(n){return Ai.some(e=>e.obj===n&&vs>=e.start)}function M0(n,e){if(!e&&vs<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(vs-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],o=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(o-r)):r+(o-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function uw(){for(let n of Ai.slice())if(M0(n,!1)){let e=Ai.indexOf(n);e>=0&&Ai.splice(e,1),n.onComplete&&n.onComplete()}}function w0(){Ai.splice(0).forEach(n=>M0(n,!0))}function dw(n,e,t,i,s,r,o){Cn(yt),hn(yt,o,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),ff(i,s,r,o)}function ff(n,e,t,i){Cn(zn),hn(zn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function fw(n,e,t,i){Cn(yt),hn(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var Wo=1,vn=n=>n<=1?1:1-Math.pow(1-1/n,Wo),Vi=Math.PI/180,Vd=(n,e,t)=>new U(n,e,-t),$s=(n,e,t)=>[-n,e,t],nn=document.getElementById("stage");nn&&nn.parentNode===document.body&&document.documentElement.insertBefore(nn,document.body);["home","hc-intro"].forEach(n=>{let e=document.getElementById(n);e&&e.parentNode===document.body&&document.documentElement.appendChild(e)});var Rn=new go({canvas:nn,antialias:(window.devicePixelRatio||1)<1.75,powerPreference:"high-performance"});Rn.debug.checkShaderErrors=!1;var pf=new us,pw=new Bs(-1,1,1,-1,0,1);pf.add(new Bt(new Di(2,2),new tn({color:16777215,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:sd,blendEquation:Li,blendSrc:ad,blendDst:Cc,blendEquationAlpha:Li,blendSrcAlpha:Cc,blendDstAlpha:rd})));pf.children[0].frustumCulled=!1;var S0=null,Ca=null;function Ko(){if(Ca===null&&(Ca=_n),Rn.render(ni,Ln),Ca){let n=Rn.autoClear;Rn.autoClear=!1,Rn.render(pf,pw),Rn.autoClear=n}S0=Ca}var Md=0;async function E0(){let n=++Md;if(Ne)try{await Ne.retexture(()=>n===Md)}catch{}if(n!==Md)return;let e=document.documentElement;e.classList.add("neg-switch"),Rf(),Ca=_n;try{Ko()}catch{}requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.remove("neg-switch")))}var $o=Math.min(window.devicePixelRatio||1,2),Eg=Math.min($o,$o>=2?1.25:1),Cr=$o,Kc=0,Gd=0,T0=0;Rn.setPixelRatio(Cr);function Tg(n,e){Cr=n,Rn.setPixelRatio(Cr),Rn.setSize(zt,Ot,!1),Kc=Gd=0,T0=e;try{Ko()}catch{}}function mw(n,e){n-T0<1500||(e>30?(Gd=0,++Kc>24&&Cr>Eg&&Tg(Math.max(Eg,Math.round((Cr-.25)*4)/4),n)):e<19&&(Kc=Math.max(0,Kc-1),++Gd>240&&Cr<$o&&Tg(Math.min($o,Cr+.25),n)))}var Ag=".t.webp",mf=n=>n&&!df&&!gw()&&!/^(https?:|data:|blob:)/.test(n)&&/^media\/.+\.(jpe?g|png|webp)$/i.test(n)&&!n.endsWith(Ag)?n+Ag:n;function gw(){return!!(window.HC_PREVIEW||/[?&]preview\b/.test(location.search))}document.addEventListener("error",n=>{let e=n.target;e&&e.tagName==="IMG"&&e.dataset.full&&!e.dataset.fell&&(e.dataset.fell="1",e.src=e.dataset.full)},!0);var Pr=(n,e="")=>{let t=mf(n);return`<img src="${_e(bt(t))}"${t!==n?` data-full="${_e(bt(n))}"`:""} ${e}>`};Rn.setClearColor(16777215,1);var ni=new us;ni.add(new _c(16777215,14211288,2.2));var A0=new wa(16777215,1.2);A0.position.set(300,800,500);ni.add(A0);var Ln=new an(60,1,1,6e4),C0=new ps({color:oe.lineColor,linewidth:oe.lineThickness}),Wd=new ps({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),R0=new ps({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),Qc=new ps({color:oe.locatorColor,linewidth:1.3}),gf=[C0,Wd,R0,Qc],L0=new Mo;L0.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:bt(n));var Na=new Map;function wd(n){return Na.has(n)||Na.set(n,new Promise((e,t)=>{let i=new Image;i.decoding="async",/^https?:/.test(bt(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=bt(n)})),Na.get(n)}function Yi(n,e=!1){if(!n)return Promise.reject(new Error("no image"));if(df&&!/^(data:|blob:|https?:)/.test(bt(n)))return Promise.reject(new Error("local"));let t=e?n:mf(n);if(t===n)return wd(n);let i="tn:"+n;return Na.has(i)||Na.set(i,wd(t).catch(()=>wd(n))),Na.get(i)}function yf(n){return n.colorSpace=jt,n.anisotropy=Math.min(8,Rn.capabilities.getMaxAnisotropy()),n}var $d=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=yf(new _a(n)),t=new Di(1,1),i=new us;return[Jn,gn,Xn].forEach(s=>i.add(new Bt(t,new tn({map:e,side:s})))),i.add(new Bt(t,new tn({color:1118481}))),i.add(new yo(new va({map:e,transparent:!0}))),i})(),zt=0,Ot=0,_n=!1,ah=()=>_n,Ir=0,Cg=0,qo=()=>ve.settings.negative==="auto";function _h(){if(!qo())return Ir=0,!!ve.settings.negative;let n=hg();return Ir=n.next,!n.day}function vf(){if(St||ve.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!qo()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function P0(n){n!==_n&&(_n=n,E0())}function xf(){if(clearTimeout(Cg),!qo())return;Cg=setTimeout(()=>{if(Date.now()>=Ir-1e3){let e=_h(),t=vf();P0(t??e)}xf()},Math.min(Math.max(Ir-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&Ir&&Date.now()>=Ir){let n=_h(),e=vf();P0(e??n),xf()}});var I0=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},oi=()=>{let n=ve.settings.accent||"#ffcc00";return ah()?I0(n):n},bh='Georgia, Gelasio, "Times New Roman", serif',on='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',N0=400,D0=bh,U0=!1,O0=1,li=n=>`${N0} ${n}px ${bh}`,Gi=n=>`${U0?"italic ":""}400 ${Math.round(n*O0*10)/10}px ${D0}`,_f=1,et=n=>Math.round(n*_f),yw=700,Mh=()=>{let n=zt||window.innerWidth,e=Ot||window.innerHeight;return n<yw||Math.min(n,e)<500},ji=Mh;function sr(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...ve?bd(ve.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Rg=0,k0=[];function vw(){Mt&&(Tf(),Ef()),clearTimeout(Rg),Rg=setTimeout(async()=>{try{await Promise.all(bd(ve.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}ve.settings.logo||Jd(),Ne&&!Ne.loading&&Ne.retexture()},150)}function B0(){let n=ve.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=_g(n);e.textContent!==t&&(e.textContent=t);let i=bg(n);document.querySelectorAll("link[data-hc-font]").forEach(o=>{i.includes(o.href)||o.remove()}),i.forEach(o=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(o)}"]`)){let a=document.createElement("link");a.rel="stylesheet",a.href=o,a.dataset.hcFont="",k0.push(new Promise(l=>{a.onload=()=>{l(),vw()},a.onerror=l})),document.head.appendChild(a)}});let s=ei(n,"card"),r=ei(n,"subtitle");N0=s.weight||400,D0=r.css,U0=!!r.italic,O0=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,bh=s.css,on=ei(n,"cardsm").css,_f=Math.max(.5,Math.min(2,(+ei(n,"card").scale||100)/100))}function Jt(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Hn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),yf(new _a(s))}function Wi(n,e,t,i=2){return Hn(n,e,s=>{let r=_n;_n=!1;try{t(s)}finally{_n=r}if(!r)return;let o=s.canvas;try{let a=s.getImageData(0,0,o.width,o.height),l=a.data;for(let c=0;c<l.length;c+=4)l[c]=255-l[c],l[c+1]=255-l[c+1],l[c+2]=255-l[c+2];s.putImageData(a,0,0)}catch{s.save(),s.setTransform(1,0,0,1,0,0),s.globalCompositeOperation="difference",s.fillStyle="#fff",s.fillRect(0,0,o.width,o.height),s.restore()}},i)}function $i(n,e,t,i,s,r){let o=Math.max(s/e.naturalWidth,r/e.naturalHeight),a=s/o,l=r/o;n.drawImage(e,(e.naturalWidth-a)/2,(e.naturalHeight-l)/2,a,l,t,i,s,r),ah()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Da=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function F0(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function za(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Qo=n=>Ut.some(e=>e.def.id===n.section),xw=(n,e)=>Ut.findIndex(t=>t.def.id===n.section)-Ut.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),oh=n=>ve.posts.filter(e=>e.published&&e!==n&&Qo(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(xw),Xo=n=>{let e=Ro(ve,n).filter(Qo);return e.length?e:oh(n)},_w=["core","artists","specialists","team","people"],Oo=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.section==="studio"||(n.tags||[]).includes("partners"))&&(n.tags||[]).length>0&&!(n.tags||[]).some(e=>_w.includes(e)),bw=n=>vg(ve,n).filter(Qo),Zs=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&Dr(e.src)==="image")||{}).src||"",Lg=new Map,qd=n=>oh(n).filter(Zs);async function wh(n,e=Xo(n)){let t=e.filter(Zs);if(!t.length)return null;let i=t.find(r=>r.id===Lg.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,o)=>r[0]-o[0]).map(r=>r[1]);for(let r of s){let o=await Yi(Zs(r)).catch(()=>null);if(o)return Lg.set(n.id,r.id),{im:o,project:r}}return null}function Sh(n,e,t,i,s){$i(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function z0(n,e){let t=he(n.title).trim(),i=he(n.subtitle).trim();if(!t&&!i)return null;let s=ji(),r=s?15:Math.max(9,Math.min(13.5,e*.053)),o=s?11:Math.max(7.5,r*.74),a=Math.round(r*(s?.55:.75)),l=e-2*a,c=document.createElement("canvas").getContext("2d"),h=(f,M)=>{c.font=M;let b=f;if(c.measureText(b).width<=l)return[b];for(;b.length>4&&c.measureText(b+"\u2026").width>l;)b=b.slice(0,-1);return[b.trim()+"\u2026"]};c.font=li(r);let u=s?t?h(t,li(r)):[]:t?Jt(c,t,l).slice(0,2):[];c.font=Gi(o);let d=s?t?[]:h(i,Gi(o)):i?Jt(c,i,l).slice(0,2):[],p=Math.round(r*1.2),g=Math.round(o*1.25),v=Math.ceil(a+u.length*p+(d.length?3+d.length*g:0)+a-2);return{tex:Wi(e,v,f=>{f.fillStyle="rgba(0,0,0,.62)",f.fillRect(0,0,e,v),f.textBaseline="top";let M=a;f.fillStyle="#fff",f.font=li(r),u.forEach(b=>{f.fillText(b,a,M),M+=p}),M+=3,f.font=Gi(o),d.forEach(b=>{f.fillText(b,a,M),M+=g})},3),bh:v,w:e}}async function Mw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Yi(n.thumbBack).catch(()=>null):null,r=i?null:await wh(n);await sr();let o=(c,h=!1)=>{if(i){$i(c,i,0,0,e,t);return}r?Sh(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=ji(),d=u?14:16,p=u?[et(31),et(34),2]:[et(24),28,3],g=u?[et(20),et(23),1]:[et(13),16,2],v=u?et(15):10,m=u?et(13):9,f=u?26:20;c.fillStyle=oi(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=li(p[0]);let M=Jt(c,he(n.title),e-2*d).slice(0,p[2]),b=u?22:30;M.forEach((I,C)=>c.fillText(I,d,b+C*p[1])),c.font=Gi(g[0]),Jt(c,he(n.subtitle),e-2*d).slice(0,u&&M.length<2?2:g[2]).forEach((I,C)=>c.fillText(I,d,b+8+M.length*p[1]+C*g[1]));let P=r?Wg(r.project,r.project.media[0]&&r.project.media[0].credit):Wg(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${v}px ${on}`,c.fillText([n.date,he(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(P?f+v+6:v+12)),P){c.font=`${m}px ${on}`;let I=P;for(;c.measureText(I).width>e-2*d&&I.length>4;)I=I.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(I,d,t-f/2)}c.globalAlpha=1},a=(r?Wi:Hn)(e,t,o,2),l=s?Hn(e,t,c=>$i(c,s,0,0,e,t),2):r?Wi(e,t,za(e,c=>o(c,!0)),2):Hn(e,t,F0(o),1.5);return[a,l,i?z0(n,e):null]}async function ww(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Yi(n.thumbBack).catch(()=>null):null,r=i||Oo(n)?null:await wh(n,qd(n));await sr();let o=(l,c=!1)=>{if(Oo(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=ji()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${on}`;let v=Jt(l,he(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((m,f)=>l.fillText(m,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),ah()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,p=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-p)/2,d,p),ah()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){$i(l,i,0,0,e,t);return}r?Sh(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=Gi(Math.round(t*.42*_f)),l.textAlign="center",l.textBaseline="middle",l.fillText(Da(he(n.title)),e/2,t*.45),l.fillStyle=oi(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},a=s?Hn(e,t,l=>$i(l,s,0,0,e,t),3):r?Wi(e,t,za(e,l=>o(l,!0)),2):Hn(e,t,F0(o),2);return[(r?Wi:Hn)(e,t,o,3),a,i||r||Oo(n)?z0(n,e):null]}async function Sw(n,e,t){let i=await wh(n);if(i)return Ew(n,e,t,i);let s=n.thumb?await Yi(n.thumb).catch(()=>null):null;await sr();let r=he(n.title).trim(),o=ji(),a=et(o?30:21),l=o?et(32):22,c=o?2:3,h=s?72:18,u=e-h-14,d=Hn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?$i(g,s,13,12.75,53,53):(g.fillStyle=oi(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=li(a),g.textBaseline="top",Jt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?12:20)+m*l))}),p=Hn(e,t,za(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=li(a),g.textBaseline="top",Jt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?9:17)+m*l))}));return[d,p]}async function Ew(n,e,t,i){await sr();let s=he(n.title).trim(),r=e-32,o=ji(),a=et(o?30:21),l=o?et(32):22,c=h=>u=>{Sh(u,i,e,t,h?.2:o?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=oi(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=li(a),u.textBaseline="top",Jt(u,s,r).slice(0,o?2:3).forEach((d,p)=>u.fillText(d,18,20+p*l)),u.globalAlpha=1};return[Wi(e,t,c(!1),2),Wi(e,t,za(e,c(!0)),2)]}async function Tw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null;await sr();let r=Hn(e,t,o=>{if(i){o.fillStyle="#fff",o.fillRect(0,0,e,t),$i(o,i,0,0,e,t);return}o.fillStyle="#fff",o.fillRect(0,0,e,t),o.fillStyle="#111",o.beginPath(),o.arc(e/2,t/2-8,34,0,Math.PI*2),o.fill(),o.fillStyle=oi(),o.beginPath(),o.arc(e/2,t/2-8,9,0,Math.PI*2),o.fill(),o.fillStyle="#333",o.font=`${et(12)}px ${bh}`,o.textAlign="center",o.textBaseline="top",o.fillText(he(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var Aw={image:Mw,portrait:ww,text:Sw,place:Tw};async function Cw(n,e,t){let i=n.thumb?await Yi(n.thumb).catch(()=>null):null,s=i?{im:i}:await wh(n);await sr();let r=he(n.title).trim(),o=(he(n.subtitle).trim()||Er(he(n.body)).join(" ")).replace(/\s+/g," ").trim(),a=t<110,l=ji(),c=s&&!l?Math.round(a?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,p,g,v]=l?a?[28,31,0,1]:[36,40,0,1]:a?[15,18,9.5,12]:[17,20,10.5,13.5],m=(I,C)=>{I.globalAlpha=C,I.textBaseline="top";let N=e-h-12;I.fillStyle=oi(),I.fillRect(h,a?9:13,14,2),I.fillStyle="#fff",I.font=li(et(d));let z=a?16:22;Jt(I,r,N).slice(0,l?3:2).forEach(w=>{I.fillText(w,h,z),z+=et(p)}),I.globalAlpha=1},f=I=>{I.fillStyle="#111",I.fillRect(0,0,e,t),s&&($i(I,s.im,0,0,e,t),I.fillStyle="rgba(0,0,0,.18)",I.fillRect(0,0,e,t)),m(I,.38)},M=I=>{let C=I.createLinearGradient(0,0,0,t);C.addColorStop(0,"rgba(0,0,0,.7)"),C.addColorStop(1,"rgba(0,0,0,.3)"),I.fillStyle=C,I.fillRect(0,0,e,t),m(I,1)},b=I=>{I.fillStyle="#111",I.fillRect(0,0,e,t),s&&($i(I,s.im,0,0,e,t),I.fillStyle="rgba(0,0,0,.22)",I.fillRect(0,0,e,t));let C=I.createLinearGradient(0,t*.3,0,t);C.addColorStop(0,"rgba(0,0,0,0)"),C.addColorStop(1,"rgba(0,0,0,.82)"),I.fillStyle=C,I.fillRect(0,t*.3,e,t*.7);let N=Math.round(e*.07),z=e-2*N,w=Xo(n).length;I.textBaseline="top",I.fillStyle="#fff";let S=[],F=t-N-S.length*et(14);S.forEach((le,B)=>I.fillText(le,N,F+B*et(14))),I.font=Gi(et(26));let ie=Jt(I,r,z).slice(0,2);F-=(S.length?et(6):0)+ie.length*et(25),ie.forEach((le,B)=>I.fillText(le,N,F+B*et(25)))};return[(s?Wi:Hn)(e,t,(I=>C=>{if(l&&!I){b(C);return}C.fillStyle="#111",C.fillRect(0,0,e,t),s&&l&&!I&&Sh(C,s,e,t,.6),s&&!l&&$i(C,s.im,e-c,0,c,t),C.textBaseline="top",C.fillStyle=oi(),C.fillRect(h,a?9:13,14,2),C.fillStyle="#fff",C.font=li(et(d));let N=Jt(C,r,u).slice(0,l?3:2),z=a?16:22;N.forEach(F=>{C.fillText(F,h,z),z+=et(p)}),z+=a?2:5,C.font=Gi(et(g));let w=l?0:Math.max(0,Math.floor((t-z-8)/et(v))),S=Jt(C,o,u);if(S.length>w&&(S=S.slice(0,w),w)){let F=S[w-1];for(;F&&C.measureText(F+"\u2026").width>u;)F=F.replace(/\s*\S+$/,"");S[w-1]=F+"\u2026"}S.forEach(F=>{C.fillText(F,h,z),z+=et(v)}),C.globalAlpha=1})(!1),2),(s?Wi:Hn)(e,t,za(e,f),2),null,(s?Wi:Hn)(e,t,za(e,M),2)]}function zc(n,e){return sr().then(()=>e==="place"?Hn(380,300,t=>{let r=ry(Sr(he(n.body))),o=(c,h)=>{t.font=h;let u=c;for(;u&&t.measureText(u).width>320;)u=u.slice(0,-2).trim()+"\u2026";return u};t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle=oi(),t.fillRect(30,24,16,2);let a=he(n.title).trim();if(a&&!/[.!?]$/.test(a)&&(a+="."),ji()){t.fillStyle="#fff",t.font=li(et(62));let c=44;Jt(t,a,320).slice(0,2).forEach(h=>{t.fillText(h,30,c),c+=et(66)});return}t.fillStyle="#fff",t.font=li(et(40));let l=36;if(Jt(t,a,320).slice(0,1).forEach(c=>{t.fillText(c,30,l),l+=et(44)}),t.font=Gi(et(17)),Jt(t,he(n.subtitle),320).slice(0,2).forEach(c=>{t.fillText(c,30,l),l+=et(21)}),l=Math.max(l+16,150),!r.ok){t.font=`13px ${on}`,Er(he(n.body)).slice(0,5).forEach(c=>{t.fillText(o(c,`13px ${on}`),30,l),l+=19});return}r.mail[0]&&(t.fillStyle=oi(),t.fillText(o(r.mail[0],`600 16px ${on}`),30,l),l+=24),t.fillStyle="#fff",r.tel[0]&&(t.fillText(o(r.tel[0],`15px ${on}`),30,l),l+=26),t.fillStyle="rgba(255,255,255,.62)",(r.addr[0]||"").split(/\s+[.·•|]\s+/).slice(0,3).forEach(c=>{l<282&&(t.fillText(o(c,`12.5px ${on}`),30,l),l+=17)})},1.5):ji()?Hn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=li(et(25));let i=Jt(t,he(n.title)+".",172).slice(0,2);i.forEach((d,p)=>t.fillText(d,14,12+p*et(27))),t.font=`${et(13)}px ${on}`;let s=oh(n).map(d=>he(d.title).trim()).filter(Boolean),r=s.length?Jt(t,s.join("  \xB7  "),172).slice(0,2):[],o=he(n.place)?168:188,a=o-r.length*16-16,l=18+i.length*et(27);t.font=Gi(et(17));let c=(r.length?a-6:o)-et(20),h=Jt(t,he(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=et(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,p)=>t.fillText(d,14,18+i.length*et(27)+p*et(20))),r.length&&(t.font=`600 ${et(11)}px ${on}`,t.fillText(Me("together").toUpperCase(),14,a),t.font=`${et(13)}px ${on}`,r.forEach((d,p)=>t.fillText(d,14,a+16+p*16))),he(n.place)&&(t.font=`600 ${et(13)}px ${on}`,t.fillText(he(n.place).toUpperCase(),14,176))},2.5):Hn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=li(et(20));let i=Jt(t,he(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${on}`;let r=oh(n).map(u=>he(u.title).trim()).filter(Boolean),o=r.length?Jt(t,r.join("  \xB7  "),166).slice(0,3):[],a=(he(n.place)?174:188)-o.length*13-13;t.font=Gi(et(15));let l=(o.length?a-4:168)-18,c=[];he(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>Jt(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${on}`,Er(he(n.body)).join(" ").split(/\s+/).length>1&&Jt(t,Er(he(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((o.length?a-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),o.length&&(t.font=`600 8px ${on}`,t.fillText(Me("together").toUpperCase(),19,a),t.font=`10px ${on}`,o.forEach((u,d)=>t.fillText(u,19,a+13+d*13))),he(n.place)&&(t.font=`600 11px ${on}`,t.fillText(he(n.place).toUpperCase(),19,180))}))}function Rw(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${on}`;let o=Math.ceil(r.measureText(n).width)+2*7,a=30;s.width=o*2,s.height=a*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,o,a),r.font=`${e?"bold ":""}20px ${on}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,a/2+1);let l=new yo(new va({map:yf(new _a(s)),transparent:!0,depthTest:!1}));l.center.set(.5,0);let c=20;return l.scale.set(c*o/a,c,1),l.renderOrder=5,l}var zi=document.createElement("div");zi.id="net-tip";zi.className="ui";zi.hidden=!0;document.body.appendChild(zi);function H0(n,e,t){zi.innerHTML=`<b>${_e(n.city||"")}</b>${n.titles.map(s=>`<span>${_e(s)}</span>`).join("")}`,zi.hidden=!1;let i=zi.getBoundingClientRect();zi.style.left=Math.min(e+14,zt-i.width-10)+"px",zi.style.top=Math.max(10,t-i.height-12)+"px"}function Eh(){zi.hidden=!0}function Lw(n){n.updateMatrixWorld(!0);let e=[],t=new U,i=n.matrixWorld.clone().invert();if(n.traverse(h=>{if(!h.isMesh||!h.geometry||!h.geometry.attributes.position)return;let u=h.geometry;u.computeBoundingBox();let d=u.boundingBox.getSize(new U);if(Math.min(d.x,d.y,d.z)<1e-6*Math.max(d.x,d.y,d.z,1e-9))return;let p=u.attributes.position,g=u.index,v=g?g.count:p.count,m=new Map,f=Math.max(d.x,d.y,d.z)/2e3;for(let b=0;b<v;b++){let P=g?g.getX(b):b,I=Math.round(p.getX(P)/f)+","+Math.round(p.getY(P)/f)+","+Math.round(p.getZ(P)/f),C=m.get(I);C||m.set(I,C={j:P,n:0}),C.n++}let M=new lt().multiplyMatrices(i,h.matrixWorld);m.forEach(b=>{t.fromBufferAttribute(p,b.j).applyMatrix4(M),e.push({p:t.clone(),n:b.n})})}),!e.length)return null;let s=Math.max(...e.map(h=>h.n));if(s<8)return null;let r=new yn;e.forEach(h=>r.expandByPoint(h.p));let o=r.getSize(new U).length()*.09,a=[];e.filter(h=>h.n>=s*.8).forEach(h=>{let u=a.find(d=>d.c.distanceTo(h.p)<o);u||a.push(u={s:new U,w:0,c:h.p.clone()}),u.s.addScaledVector(h.p,h.n),u.w+=h.n,u.c.copy(u.s).divideScalar(u.w)});let l=Math.max(...a.map(h=>h.w)),c=a.filter(h=>h.w>=l*.3).map(h=>h.c);return c.length?c:null}var Xd=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Sn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=ve.models.find(h=>h.id===this.def.model)||ve.models[0];if(!t)return;let i=await lw(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),o=e.parse(i,s).scene,a=new Sn;a.add(o),o.traverse(h=>{if(!h.isMesh)return;let u=d=>{let p=d.map||d.emissiveMap||null;return p?new tn({map:p}):t.untextured==="white"?new vr({color:15921906}):t.untextured==="black"?new vr({color:2236962}):new tn({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){a.updateMatrixWorld(!0);let h=new yn().setFromObject(a),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;a.scale.setScalar(d),a.updateMatrixWorld(!0);let p=new yn().setFromObject(a),g=p.getCenter(new U);a.position.set(-g.x,-p.min.y,-g.z)}else{o.scale.setScalar(100),a.updateMatrixWorld(!0);let h=new yn().setFromObject(a);h.max.y-h.min.y>oe.object3DMaxHeight&&a.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),a.scale.multiplyScalar(l)}let c=new Sn;c.rotation.y=(t.rotationY||0)*Vi,c.add(a),this.container.add(c);try{this.anchors=Lw(this.container)}catch{this.anchors=null}}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Vd(this.p.x,0,this.p.z))}};function V0(n,e){let t=new Vs;t.setPositions(n);let i=new Ea(t,e);return i.computeLineDistances(),i}var Yd=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Sn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Di(this.width,this.height);if(this.setBand(i),s){let h=new Bt(r,new tn({map:s,side:gn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let o=new Bt(r,new tn({map:e,side:Jn})),a=new Bt(r,new tn({map:t,side:gn}));o.userData={post:this,face:"front"},a.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=V0([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Wd),this.group.add(o,a,this.frame),this.meshes.push(o,a),this.ready=!0}setPosition(e,t,i,s,r=0,o=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:o})}apply(){let e=this.thumb,t=this.group;t.position.set(...$s(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Vi,t.rotation.x=-e.rotX*Vi,t.rotation.z=e.rotZ*Vi,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&hn(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=R0,Go(.8,()=>{this.frame&&(this.frame.material=Wd)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),hn(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){Cn(this.thumb);let i=_s(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;return hn(this.thumb,t,{x:s.x+o*e/l,y:r.y,z:s.z+a*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:o/l,z:a/l}}}moveBack(e=0){Cn(this.thumb);let t=this.p2;hn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){hn(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>hn(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),Cn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Bt(new Di(t,s),new tn({map:e.tex,transparent:!0,depthWrite:!1,side:Jn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&hn(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,o=r+t*e.bh;i.setY(0,o),i.setY(1,o),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),Cn(this.thumb),this.bhi&&Cn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!gf.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function Sd(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Vi;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function Ed(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var Td=(n,e,t,i,s="y")=>n.postViews.forEach((r,o)=>{if(!r.ready||Fa(r.thumb))return;let a=r.thumb,l=Math.pow(-1,o)*e*(Math.random()*2+1);a[s]-=(a[s]-r.p2[s]+l)*vn(2*i),s==="y"&&(a.rotX-=(a.rotX-r.p2.rotX-t)*vn(2*i))}),lh={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Vi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Sd(n,e),move:(n,e,t,i)=>Td(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=oe;if(n.core&&n.core.has(t)){let o=n.coreList.indexOf(t);return{x:((n.coreList.length-1)/2-o)*(e.width+46),y:i.planeDistance*n.coreY+e.height/2,z:i.planeDisOrder*1.8,rotY:180}}let s=n.slotOf?n.slotOf[t]:t,r=(n.arcAngle||n.angle)*(s+1);return{x:(i.planeDistance-Math.abs(r-Math.PI/2)*120+e.width+Math.pow(-1,s+1)*i.planeDisOrder/(Math.random()+1))*Math.cos(r),y:(i.planeDistance+e.height+Math.pow(-1,s+1)*i.planeDisOrder/(Math.random()+1))*Math.sin(r),z:Math.pow(-1,Math.round(Math.random()*5))*i.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Ed(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>Td(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,o=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},a=t,l;t+1>s?(a=2*Math.round(i/2)-t-1,l=Math.pow(-1,a)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(o(a)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(o(h)-Math.PI/2)*120,d=t+1>s?-1:1,p=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(o(a)),y:u*Math.sin(o(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+p,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{Sd(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*vn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Ws(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Th(n.def);return{x:i[0]+s[0],y:.8*(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Ed(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Fa(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*vn(2*oe.cameraEaseSpeed);let o=n.infos[i];o&&(o.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Vi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Sd(n,e),move:(n,e,t,i)=>Td(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,o=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*o+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Ed(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Fa(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}}},Pw=["fan","arc","map"],Pg=n=>Mh()&&Pw.includes(n.layout),bf=()=>er.zoom*er.focus*Math.min(1,zt/900);function G0(){let n=r=>{let o=document.getElementById(r);if(!o||o.hidden)return null;let a=o.getBoundingClientRect();return a.width&&a.height?a:null},t={l:12,t:12,r:zt-12,b:Ot-12},i=["slogan","logo","reel-btn","lang-sq","about-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Ot>=zt?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs"),n("reel-btn"),n("lang-sq"),n("about-btn")].filter(Boolean).forEach(r=>{r.left<zt/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>zt/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=zt-12),t.b-t.t<120&&(t.t=12,t.b=Ot-12),t}function Ig(n){let e=G0(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,o=n.h*n.k+oe.planeFrameDistance,a=s?1.5*r+102.5:r,l=s?Math.max(o,130):o,c=Math.round(Math.min(a,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let v=Math.ceil(u/g),m=g*a+(g-1)*c,f=v*l+(v-1)*c,M=Math.min(t/m,i/f);(!h||M>h.sc+1e-9)&&(h={cols:g,rows:v,gw:m,gh:f,sc:M})}let d=n.container.position.y-n.section.container.position.y,p=s?140:40;return{...h,sc:h.sc*.94,uw:a,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-zt/2,fy:(e.t+e.b)/2-Ot/2,zg:200,gy:p+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var Iw=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},Ad=2*Math.PI,Mf=n=>n+(((Math.PI-n)%Ad+Ad+Math.PI)%Ad-Math.PI);function Ng(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd&&n.gridLines!==!1?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>Iw(e,i),focus(e,t){let i=e.postViews[t];if(!i||(H.selected=t,H.degreeCamera=Mf(H.degreeCamera),H.cameraY=Ha(),!i.ready))return;i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70);let s=n.orig||n;s===lh.fan?i.turnAround("x",720):s===lh.arc&&i.turnAround("y",360)},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}function Nw(n,e){let t=Object.create(n),i=[],s=new Map,r=()=>{let o=e.container.position.y-e.section.container.position.y;return e.section.anchors.map(a=>[-a.x,a.y-o,a.z])};return t.orig=n,t.gridLines=!1,t.addedLines=!n.lineEnd,t.lineStart=n.lineStart||((o,a)=>[a.x,a.y-o.height/2,a.z]),t.lineEnd=function(o,a,l){if(i[l]==null){let c=r(),h=[0,1,2].map(v=>c.reduce((m,f)=>m+f[v],0)/c.length),u=v=>{let m=[v[0]-h[0],v[1]-h[1],v[2]-h[2]],f=Math.hypot(...m)||1;return m.map(M=>M/f)},d=u([o.x,o.y,o.z]),p=c.map((v,m)=>{let f=u(v);return[m,f[0]*d[0]+f[1]*d[1]+f[2]*d[2]]}).sort((v,m)=>m[1]-v[1]),g=p.find(([v,m])=>!s.has(v)&&m>p[0][1]-.6);i[l]=(g||p[0])[0],s.set(i[l],l)}return r()[i[l]]},t}var Dg=new U,Ug=new U,jd=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=lh[this.def.layout]||lh.carousel,e.anchors&&(this.def.layout==="carousel"||this.def.layout==="arc"&&this.def.skills)&&(this.base=this.L=Nw(this.base,this)),this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?Cw:Aw[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?Co.text.size:Co.image.size:Co[this.card].size,this.k=zw(this.def),this.container=new Sn,this.container.position.copy(e.container.position),ni.add(this.container),this.postViews=this.posts.map((i,s)=>new Yd(this,this.w*this.k,this.h*this.k,s)),this.lines=[],this.following=new Set,this.trail=new Set,this.infos=[],this.alive=!0;let t=this.posts.map((i,s)=>(i.tags||[]).includes("core")?s:-1).filter(i=>i>=0);if(this.def.layout==="arc"&&!this.def.skills&&t.length&&t.length<this.n&&t.length<=3){let i=this.posts.map((s,r)=>r).filter(s=>!t.includes(s));this.slotOf=[],i.forEach((s,r)=>{this.slotOf[s]=r}),this.core=new Set(t),this.coreList=t,this.arcAngle=Math.PI/(i.length+1),this.coreY=.62}this.L.preset.call(this.L,this),Pg(this.def)&&(this.grid=Ig(this),this.L=this.gridL=Ng(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Ut.map(f=>f.def.id)),t=new Map,i=(f,M,b)=>{if(!xd(f))return;let P=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),I=t.get(P);I||t.set(P,I={loc:f,city:f.city||"",titles:[],base:!1}),M&&!I.titles.includes(M)&&I.titles.push(M),b&&(I.base=!0)};if(vd(ve,this.def.id).forEach(f=>i(f.location,he(f.title),!0)),ve.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(M=>i(M,he(f.title)))}),!t.size)return;Qc.color.set(oi());let s=50,r=new Sn,o=[...t.values()],a=o.filter(f=>f.base),l=new pc(1,14,10),c={on:new tn({color:oi()}),base:new tn({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:vs+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},o.forEach(f=>{f.xz=Ws(f.loc)}),o.forEach(f=>{f.from=f.base?null:a.length?a.map(M=>[M,Math.hypot(Ws(M.loc)[0]-f.xz[0],Ws(M.loc)[1]-f.xz[1])]).sort((M,b)=>M[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(Ws(f.from.loc)[0]-f.xz[0],Ws(f.from.loc)[1]-f.xz[1]):0}),o.sort((f,M)=>M.base-f.base||f.d-M.d);let h=70,u=null,d=-1;o.forEach(f=>{let M=o.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);M.length>d&&(d=M.length,u=M)});let p=u.reduce((f,M)=>f+M.xz[0],0)/u.length,g=u.reduce((f,M)=>f+M.xz[1],0)/u.length,v=new Qt;v.position.set(...$s(p,s,g)),r.add(v),this.net.focus=v;let m=[];o.forEach((f,M)=>{let[b,P]=f.xz,I=f.base?0:.15+M*.07,C=new Bt(l,f.base?c.base:c.on);C.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),C.position.set(...$s(b,s,P)),r.add(C),C.userData={netNode:f},this.net.hits.push(C);let N=null,z=0;if(f.from){let[F,ie]=Ws(f.from.loc),le=s+18+f.d*.32,B=2*le-s,$=(F+b)/2,O=(ie+P)/2;z=Math.max(12,Math.min(48,Math.round(f.d/6)));let ee=Q=>{let ne=1-Q;return $s(ne*ne*F+2*ne*Q*$+Q*Q*b,ne*ne*s+2*ne*Q*B+Q*Q*s,ne*ne*ie+2*ne*Q*O+Q*Q*P)},j=[];for(let Q=0;Q<z;Q++)j.push(...ee(Q/z),...ee((Q+1)/z));let W=new Vs;W.setPositions(j),N=new Ea(W,Qc),N.computeLineDistances(),W.instanceCount=0,r.add(N)}let w=null,S=1/0;if(f.city){let F=Rw(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),ie=F.scale.x;for(let le of m){let B=Math.max(Math.abs(le[0]-b)/((le[3]+ie)/2+6),Math.abs(le[1]-P)/24);B<le[2]&&(S=Math.min(S,B))}S>.06?(w=F,w.position.set(...$s(b,s+9,P)),r.add(w),m.push([b,P,S,ie])):(F.material.map.dispose(),F.material.dispose())}this.net.items.push({dot:C,arc:N,segs:z,label:w,thr:S,delay:I,base:f.base,ds:C.scale.x,ls:w?w.scale.clone():null,x:b,z:P})}),this.container.add(r)}async openPosts(){this.loading=!0,this.posts.forEach(e=>[e.thumb,e.thumbBack].forEach(t=>{t&&Yi(t).catch(()=>{})}));for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=vs+cw;for(;vs<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,o,a=()=>{--o<=0&&(this.following.delete(e),this.trail.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(o=2,hn(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:a}),hn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:a})):(o=1,hn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:a})),e.apply(),this.container.add(e.group),i.lineEnd&&((i.addedLines?this.trail:this.following).add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...$s(...i),...$s(...s)],o=this.lines[t];o?(o.geometry.setPositions(r),o.visible=!0):(o=this.lines[t]=V0(r,C0),this.container.add(o))}async openInfo(e,t,i){let s=await zc(this.posts[t],"place");if(!this.alive)return;let r=new Bt(new Di(165,130),new tn({map:s,side:Xn}));r.userData={post:e,face:"front"},r.visible=!1;let o={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=o,e.meshes.push(r),this.container.add(r),hn(o.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Go(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Bt(new Di(90,90),new tn({side:Xn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await zc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),Go(oe.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,Cn(i),hn(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(Cn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Pg(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?Ig(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=Ng(this.base)):this.base,this.L.lineEnd||this.lines.forEach(l=>{l&&(l.visible=!1)}),r)return!0;let o=oe.tween*1.2,a=H.postOpen&&Dh()==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===a)return;let u=this.following.has(l);Cn(l.thumb),this.following.add(l),hn(l.thumb,o,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(Cn(d.p),hn(d.p,o,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=tl(),r=bf(),o=2*e.width+3,a=Math.max(90,r*Math.max(o/(i.aw*.92),e.height/(i.ah*.85))),l=_s()+er.focus,c=a/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;Cn(e.thumb),hn(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-a,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;Cn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/Vi)%360+360)%360,t=r=>{let o=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(o-e),360-Math.abs(o-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,o)=>{if(!r.ready)return;let a=t(r);a<s-.5&&(s=a,i=o)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/ws),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*vn(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(vs-this.net.start-s.delay)/.9)),o=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(o*s.segs));let a=s.base||r>=1;s.dot.visible=a,s.label&&(s.label.visible=a&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.trail.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...$s(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Vi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Dg.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Ug.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Dg).add(Ug)}}async retexture(e=()=>!0){let t=(o,a)=>{let l=o.material.map;return o.material.map=a,o.material.needsUpdate=!0,l},i=[],s=()=>i.forEach(o=>(o.all||[]).forEach(a=>a&&a.dispose()));for(let o=0;o<this.n;o++){let a=this.postViews[o];if(!a.ready)continue;let l;try{l=await this.tex(this.posts[o],this.w,this.h)}catch{continue}let c=this.infos[o],h=null;if(c)try{h=await zc(this.posts[o],"place")}catch{}if(i.push({i:o,pv2:a,tex:l,inf:c,it:h,all:[l[0],l[1],l[2]&&l[2].tex,l[3],h]}),!this.alive||!e())return s(),!1}let r=null;if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen)try{r=await zc(this.posts[H.selected],"person")}catch{}if(!this.alive||!e())return s(),r&&r.dispose(),!1;if(this.net&&(Qc.color.set(oi()),this.net.mats.on.color.set(oi())),i.forEach(({pv2:o,tex:a,inf:l,it:c})=>{let h=o.band?o.band.k:0;if(o.setBand(a[2]||null),o.band&&h&&(o.band.k=h,o.hover(Ra===o)),new Set([t(o.meshes[0],a[0]),t(o.meshes[1],a[1])]).forEach(u=>u&&u.dispose()),o.bhi&&a[3]){let u=t(o.bhi.mesh,a[3]);u&&u.dispose()}else a[3]&&a[3].dispose();if(l&&c){let u=t(l.mesh,c);u&&u.dispose()}}),r&&this.focusInfo){let o=t(this.focusInfo.mesh,r);o&&o.dispose()}return!0}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(Cn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Eh(),ni.remove(this.container)}},Tr=[],Ne=null,Ar=oe.cameraEaseSpeed,Zi=!1,jn=!1,Js=0,Ks=0,eh=0,th=0,Ss=!1,bn=!1,Es=()=>Tr[H.currentSection];function Dw(){let n=oe.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function Uw(){let n=oe.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var Ow={map:58},Th=(n=(Es()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||Ow[n.layout]||100)/100)),ci=()=>Ne&&Ne.L.grid&&Ne.grid&&Ne.section===Es()?Ne:null,kw=n=>bf()/n.sc*Math.min(1,oe.cameraDistanceProportion/ws);function Ah(n){let e=n.grid,t=kw(e),i=t/bf();return{d:Math.max(20,t-er.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var _s=()=>{let n=ci();return n?Ah(n).d:oe.cameraDistance*Th()},Ch=()=>{let n=ci();return n?Ah(n).ty:oe.cameraTargetHeight*(((Es()||{}).def||{}).layout==="map"?Th()*.62:1)},Og=()=>{let n=ci();return n?Ah(n).ty:oe.cameraHeight*(((Es()||{}).def||{}).layout==="map"?Th()*1.6:1)},Hc=new U;function Bw(){return!nr()||ci()||oe.cameraDistanceProportion>=ws?0:Math.min(1,(1-oe.cameraDistanceProportion/ws)*1.25)}function Fw(){let n=Ne&&Ne.net&&Ne.net.focus;return n?(n.getWorldPosition(Hc),{x:Hc.x,y:Hc.y,z:-Hc.z}):null}function el(){let n=Es(),e=Bw(),t=e?Fw():null,i=Ch(),s=ci();return s?{x:n.p.x-Ah(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var Ha=()=>{if(!nr()||ci())return Og();let n=Math.min(1,oe.cameraDistanceProportion/ws);return el().ty+(Og()-Ch())*Math.pow(n,.55)},zw=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),tl=()=>{let n=el();return{d:_s(),x:n.x,z:n.z,ty:n.ty}},ti=null;function W0(n){if(!n||!Ne||!Ne.relayout())return;Cn(yt),Cn(zn),ti=n,ci()&&(H.degreeCamera=Mf(H.degreeCamera)),H.cameraY=Ha(),jn=!0,Ar=oe.cameraEaseSpeed;let e=H.postOpen&&Dh()==="focus3d"&&!Xe.open&&Ne.postViews[H.selected];e&&e.ready&&(Ne.L.grid?Ne.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var Hw=0;function Vw(){if(++Hw%20||!Ss||H.postOpen||Zi||!bn)return;let n=ci();if(!n)return;let e=G0();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&W0(ti||tl())}function Gw(){if(!ti)return;let n=tl(),e=vn(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-ti[i];Math.abs(s)>.05?(ti[i]+=s*e,t=!1):ti[i]=n[i]}Fa(zn)||(zn.x=ti.x,zn.y=ti.ty,zn.z=ti.z),!Zi&&!jn&&!Fa(yt)&&Zd(),t&&(ti=null)}function Zd(){let n=ti||tl();yt.x=n.x+n.d*Math.sin(H.actualDeg),yt.z=n.z+n.d*Math.cos(H.actualDeg)}function Rh(){Tr.forEach((n,e)=>{e===H.currentSection?n.container.parent||ni.add(n.container):n.container.parent&&ni.remove(n.container)}),Zi=!1,jn=!1,nn.classList.remove("dragging"),Ra=null,Ua=null,Do=null,Ne&&Ne.destroy(),ti=null,Ne=new jd(Es()),ko(H.selected),H.actualDeg=H.degreeCamera,Ww()}function Ww(){let n=el();H.cameraY=Ha(),dw(_s()*Math.sin(H.degreeCamera)+n.x,H.cameraY,_s()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function ko(n){H.selected=n,Ne&&Ne.focus(n)}function Cd(n){!Ne||!Ne.n||(jn=!0,Ne.checkPostSelected(),Ar=oe.cameraKeyboardSpeed,ko(n==="NEXT"?Ne.goNext():Ne.goPrev()))}var Hi=()=>zt>700&&Ot>520;function Lh(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Ot<680?1e3-Ot:320)*t)}function $0(){if(jn=!1,Lh(),!Ss)return;let n=el();if(H.postOpen&&Dh()==="focus3d"&&!Xe.open&&Ne&&Ne.postViews[H.selected]){let t=Ne.postViews[H.selected];Ne.L.grid?Ne.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=nr()||ci();fw(n.x+_s()*Math.sin(H.actualDeg),e?H.cameraY:yt.y,n.z+_s()*Math.cos(H.actualDeg),oe.cameraSpeed/2),e&&ff(n.x,n.ty,n.z,oe.cameraSpeed/2)}function $w(){if(!bn){Math.abs(yt.y-H.cameraY)>.007&&!Fa(yt)&&(yt.y-=(yt.y-H.cameraY)*vn(oe.cameraEaseSpeed));return}if(Zi){Ar=oe.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(Js-eh)/150,H.actualDeg-=(H.actualDeg-n)*vn(Ar),Zd(),H.cameraY+=(Ks-th)*2;let e=oe.cameraHeight,t=nr()?el().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),yt.y-=(yt.y-H.cameraY)*vn(Ar),oe.animationMode&&Ne&&Ne.movePosts((eh-Js)/Math.max(Wo,.25),(th-Ks)/Math.max(Wo,.25),Ar),eh=Js,th=Ks}else jn?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&(jn=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*vn(oe.cameraEaseSpeed),Zd(),yt.y-=(yt.y-H.cameraY)*vn(Ar),oe.animationMode&&Ne&&Ne.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-H.cameraY)>.007&&(yt.y-=(yt.y-H.cameraY)*vn(oe.cameraEaseSpeed))}function qw(){yt.zoom=6;let e=Ne&&Ne.postViews[0]&&Ne.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,zn.y=e+100,ff(zn.x,Ch(),zn.z,1),bn=!1,hn(yt,1,{zoom:er.zoom},{ease:"expoOut"}),setTimeout(()=>{bn=!0},1*1e3+50)}var Rd=new U,Ld=new U,Lo=new U,Po=1,Io=1,Xw=1.45;function Yw(){Rd.copy(Vd(yt.x,yt.y,yt.z)),Ld.copy(Vd(zn.x,zn.y,zn.z)),Lo.subVectors(Ld,Rd),Lo.lengthSq()<1e-6&&Lo.set(0,0,-1),Lo.normalize();let n=nr()&&!ci()?Math.min(1,oe.cameraDistanceProportion/ws):1;Po+=Math.abs(n-Po)<.001?n-Po:(n-Po)*vn(oe.cameraEaseSpeed),Ln.position.copy(Rd).addScaledVector(Lo,-er.focus*Po),Ln.lookAt(Ld);let e=zt<700&&Ot>zt&&!ci()&&!nr()?Xw:1;Io+=Math.abs(e-Io)<.001?e-Io:(e-Io)*vn(oe.cameraEaseSpeed);let t=Math.min(1,zt/900*Io),i=2*Math.atan(Ot/2/(yt.zoom*er.focus*t))/Vi;Math.abs(Ln.fov-i)>1e-4&&(Ln.fov=i,Ln.updateProjectionMatrix())}function q0(){if(zt=window.innerWidth,Ot=window.innerHeight,Rn.setSize(zt,Ot,!1),Ln.aspect=zt/Ot,Ln.updateProjectionMatrix(),gf.forEach(n=>n.resolution.set(zt,Ot)),Ss)try{Ko()}catch{}}var kn=document.getElementById("menu"),cn=document.getElementById("slogan"),Bn=document.getElementById("langs"),Ph=[];function jw(){kn.innerHTML="",Ph=Ut.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=he(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&bn&&nl(e)}),t.appendChild(i),kn.appendChild(t),i}),kn.style.setProperty("--n",Ut.length),wf()}function wf(){Ph.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function Zw(){Ph.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),kn.hidden=!1,Bn.hidden=!1,Nr(),setTimeout(()=>kn.classList.add("ready"),(Ut.length+1)*200)}var Jw=1.44,kg={col:362,gutter:160,side:79,top:34,bottom:20},Bg={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Ei(){let n=ve&&ve.settings&&ve.settings.fiche||{},e={};for(let t in kg){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?kg[t]:Math.max(Bg[t][0],Math.min(Bg[t][1],Math.round(+i)))}return e}function Ta(n){let e=Ei(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(zt-2*oe.margin)/(Xe.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function Sf(){let n=Ot<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=cn.offsetTop+cn.offsetHeight+(n?1:2)*oe.margin,t=Xe.height+12,i=n?24:(kn.offsetHeight||90)+70,s=(Ot-e-i)/t,r=(Ot-e-56)/t,o=zt>700&&!n?14/(+ei(ve.settings,"body").size||14):0,a=Math.max(n?.4:.5,Math.min(Jw,Math.max(s,Math.min(o,r))));Xe.scale=a,en.style.top=e+"px",en.style.transform=a!==1?`scale(${a.toFixed(3)})`:"",en.style.width=a!==1?Math.ceil((zt-oe.margin)/a)+"px":"",en.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Ot-(e+t*a)<kn.offsetHeight+60)}var Fg=()=>{let n=Bn.getBoundingClientRect();return n.height?n.top:Ot-(Hi()?44:48)};function Nr(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&Xe.open&&Xe.height>100){let n=cn.offsetTop+cn.offsetHeight+Xe.height*(Xe.scale||1)+2*oe.margin+30;n=Math.min(n,Fg()-kn.offsetHeight-22),kn.style.left=oe.margin+"px",kn.style.top=n+"px"}else{let n=Bn.hidden?Ot-30:Fg();if(!Hi()&&!bs.hidden){let e=bs.getBoundingClientRect();e.height&&e.left<zt/2&&(n=Math.min(n,e.top))}kn.style.left=(Hi()?26:oe.margin)+"px",kn.style.top=Math.round(Math.min(Ot-(kn.offsetHeight||86)-(Hi()?100:56),n-(kn.offsetHeight||86)-24))+"px"}if(document.body.classList.toggle("post-open-wide",Hi()&&!!H.postOpen),Tf(),Ef(),!(H.postOpen&&Xe.open&&Xe.height>100)){let n=Math.max(0,...["reel-btn","about-btn","lang-sq"].map(e=>document.getElementById(e)).filter(e=>e&&!e.hidden&&e.offsetHeight).map(e=>e.offsetTop+e.offsetHeight));n&&kn.offsetTop<n+18&&(kn.style.top=n+18+"px")}}function Ef(){if(!de||!de.btn)return;let n=de.btn;n.style.top=Math.round(cn.offsetTop+cn.offsetHeight+(Hi()?26:16))+"px",n.style.left=cn.offsetLeft+2+"px",n.style.right="auto",Jo()}function Tf(){bs.style.top=bs.style.left="",Kd.style.maxHeight=Math.max(140,Ot-200)+"px",document.body.classList.toggle("cats-up",!Hi()&&zt<560)}var zg=(n,e=!1)=>Mg(n,ve.settings,e);function Jd(){let n=ve.settings,e=n.accent||"#ffcc00",t=n.logo?bt(n.logo):zg(_n?"#ffffff":e,_n),i=document.getElementById("home-logo");i&&(i.src=n.logo?t:zg("#ffffff",!1),i.classList.toggle("raw",!n.logo));let s=document.getElementById("logo");s&&(s.style.backgroundImage=n.logo?`url("${t}")`:"",s.classList.toggle("img",!!n.logo)),Qw(n.logo?t:Kw)}var Kw="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#fff" stroke="#c4c4c4" stroke-width="2.5"/></svg>');function Qw(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var nh="",ch=document.querySelector('meta[name="description"]'),Hg=ch?ch.content:"",Af=document.title;function Cf(n){if(!(St||!ve)){document.title=n?`${he(n.title).trim()} \xB7 ${ve.settings.name||"Hand Coded"}`:Af,ch&&(ch.content=n&&(Er(he(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||he(n.subtitle))||Hg);try{let e=new URL(location.href),t=window.HC_ROUTE||{};if(t.pages&&location.protocol!=="file:"){let i=v0;e.searchParams.delete("p"),e.searchParams.delete("lang"),e.pathname=i.pathname+(n&&gd(ve,n)?`${xn}/${encodeURIComponent(n.id)}/`:t.p||e.pathname!==i.pathname?`${xn}/`:""),n&&!gd(ve,n)&&e.searchParams.set("p",n.id)}else n?e.searchParams.set("p",n.id):e.searchParams.delete("p");e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&rr("?p="+n.id,document.title)}}function eS(){let n=String((ve.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||St||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{nh||rr("",Af)}),document.head.appendChild(e)}function rr(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:((window.HC_ROUTE||{}).pages?v0.pathname:location.pathname.replace(/index\.html$/,""))+n,title:e,event:t})}catch{}}var Vc=document.createElement("canvas").getContext("2d");function tr(){let n=innerWidth<=700||innerHeight<=520?10.5:13,e=null;["#slogan","#home-slogan"].forEach(o=>{let a=document.querySelector(o+" > .wm"),l=document.querySelector(o+" > .tls");if(!a||!l)return;let c=[...l.children];if(c.length){l.style.fontSize=l.style.lineHeight=l.style.marginTop="",a.style.removeProperty("font-size"),a.style.removeProperty("line-height");for(let h=0;h<4;h++){let u=(w,S)=>`${w.fontStyle==="italic"?"italic ":""}${w.fontWeight} ${S}px ${w.fontFamily}`,d=getComputedStyle(a),p=parseFloat(d.fontSize);if(!(p>0))return;Vc.font=u(d,p);let g=Vc.measureText(a.textContent);if(!(g.actualBoundingBoxAscent>0)||!(g.fontBoundingBoxAscent>0))return;let v=parseFloat(d.lineHeight)||p*1.2,m=g.actualBoundingBoxAscent,f=(v-g.fontBoundingBoxAscent-g.fontBoundingBoxDescent)/2+g.fontBoundingBoxAscent,M=getComputedStyle(l);Vc.font=u(M,100);let b=Vc.measureText(c[0].textContent),P=1.15,I=(b.actualBoundingBoxAscent||72)/100,C=m/(I+(c.length-1)*P),N=C*P;if(h<3&&C<n-.05){let w=(n+.02)/C;a.style.setProperty("font-size",(p*w).toFixed(2)+"px","important"),a.style.setProperty("line-height",(v*w).toFixed(2)+"px","important");continue}let z=(N-(b.fontBoundingBoxAscent+b.fontBoundingBoxDescent)*C/100)/2+b.fontBoundingBoxAscent*C/100;l.style.fontSize=C.toFixed(2)+"px",l.style.lineHeight=N.toFixed(2)+"px",l.style.marginTop=(f-m-(z-I*C)).toFixed(2)+"px",o==="#slogan"&&(e=f-m/2);break}}});let t=document.getElementById("logo"),i=document.getElementById("slogan"),s=i&&i.querySelector(":scope > .wm");t&&(t.style.top=""),t&&s&&e!==null&&/fixed|absolute/.test(getComputedStyle(t).position)&&t.offsetHeight&&(t.style.top=(i.offsetTop+s.offsetTop+e-t.offsetHeight/2).toFixed(1)+"px");let r=document.getElementById("slogan")?document.getElementById("slogan").offsetHeight:0;if(r!==tr.h){tr.h=r;try{Mt&&(Tf(),Ef(),Jo()),Xe.open&&Sf()}catch{}}}tr.wait=()=>{document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>requestAnimationFrame(tr))};document.fonts&&document.fonts.addEventListener&&document.fonts.addEventListener("loadingdone",()=>tr());window.addEventListener("resize",()=>tr());function Rf(){let n=ve.settings;B0(),yh(),rl(),document.documentElement.lang=xn,document.documentElement.classList.toggle("neg",_n),H.postOpen||(document.title=Af||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[xn]||n.taglines.en)||[],t=e.length?`<b class="wm">${_e(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${_e(a)}</span>`).join("")}</span>`:_e(n.name);if(cn.innerHTML=e.length?`<b class="wm" role="link" tabindex="0" title="${_e(Me("homeLink"))}">${_e(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${_e(a)}</span>`).join("")}</span>`:t,document.getElementById("home-slogan").innerHTML=t,tr(),tr.wait(),Jd(),!n.logo&&document.fonts){let a=ei(n,"logo"),l=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{ve.settings.logo||Jd()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(a=>{let l=document.getElementById(a);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(_n)),l.title=Me(_n?"toPos":"toNeg"),l.setAttribute("aria-label",l.title)):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.removeAttribute("aria-label"),l.removeAttribute("title")))}),Pn.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),ir.classList.contains("wait")||Wf(he(n.home.enter)||Me("enter")),yS(),wS(),Yn(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=Me(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Me("keys")),Bo.setAttribute("aria-label",Me("prev")),hh.setAttribute("aria-label",Me("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=Me("category"));let r=n.langs&&n.langs.length?n.langs:ai;tS(r);let o=document.getElementById("lang-sq");o||(o=document.createElement("div"),o.id="lang-sq",o.className="ui",document.body.appendChild(o),document.addEventListener("pointerdown",a=>{a.target.closest("#lang-sq")||o.classList.remove("open")})),[document.getElementById("home-langs"),o].forEach(a=>{if(a.innerHTML="",a.classList.add("hlg"),a.classList.remove("open"),a.hidden=r.length<2,r.length<2)return;let l=document.createElement("button");l.type="button",l.className="cur",l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label",Me("lang")+" : "+xn.toUpperCase()),l.innerHTML=`<b class="ic">${xn.toUpperCase()}</b>`,l.addEventListener("click",()=>{let h=a.classList.toggle("open");l.setAttribute("aria-expanded",String(h))});let c=document.createElement("span");c.className="opts",r.filter(h=>h!==xn).forEach(h=>{let u=document.createElement("button");u.type="button",u.textContent=h.toUpperCase(),u.lang=h,u.setAttribute("aria-label",Me("lang")+" "+h.toUpperCase()),u.addEventListener("click",()=>Lf(h)),c.appendChild(u)}),a.append(l,c)}),Jo(),document.documentElement.style.setProperty("--accent",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-raw",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",I0(ve.settings.accent||"#ffcc00")),ZS()}function tS(n){if(Bn.innerHTML="",Bn.classList.remove("open"),n.length<2)return;let e=document.createElement("button");e.type="button",e.className="lg-open",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-label",Me("lang")+" : "+xn.toUpperCase()),e.innerHTML=`<i class="tri"></i><span>${xn.toUpperCase()}</span>`;let t=document.createElement("ul");t.className="lg-list",n.filter(i=>i!==xn).forEach(i=>{let s=document.createElement("li"),r=document.createElement("button");r.type="button",r.textContent=i.toUpperCase(),r.lang=i,r.setAttribute("aria-label",Me("lang")+" "+i.toUpperCase()),r.addEventListener("click",()=>{Bn.classList.remove("open"),Lf(i)}),s.appendChild(r),t.appendChild(s)}),e.addEventListener("click",()=>{let i=Bn.classList.toggle("open");e.setAttribute("aria-expanded",String(i))}),Bn.append(t,e)}document.addEventListener("pointerdown",n=>{if(Bn.classList.contains("open")&&!Bn.contains(n.target)){Bn.classList.remove("open");let e=Bn.querySelector(".lg-open");e&&e.setAttribute("aria-expanded","false")}});Bn.addEventListener("keydown",n=>{if(n.code==="Escape"&&Bn.classList.contains("open")){n.stopPropagation(),Bn.classList.remove("open");let e=Bn.querySelector(".lg-open");e&&(e.setAttribute("aria-expanded","false"),e.focus())}});function Lf(n){if(n!==xn){xn=n;try{localStorage.setItem("hc-lang",n)}catch{}if(document.documentElement.lang=n,Rf(),Ss){Ph.forEach((i,s)=>{i.textContent=he(Ut[s].def.name)}),Ih();let e=H.postOpen,t=H.selected;Ci(),H.selected=t,Rh(),e&&Go(.6,()=>jo(t))}H.postOpen||Cf(null)}}var Yo=document.getElementById("cats"),bs=document.getElementById("cat-box"),Kd=document.getElementById("cat-list"),X0=document.getElementById("cat-name"),Qd=document.getElementById("cat-open"),Bo=document.getElementById("pg-prev"),hh=document.getElementById("pg-next");function Ih(){let n=H.data,e=n.categoryList;bs.hidden=e.length<=1,Kd.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${_e(he(t.label))} <span class="n">${n.countOf(t.id)}</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{uh(),cS(t.id)}),i.appendChild(s),Kd.appendChild(i)}),X0.innerHTML=`<span class="t">${_e(n.currentCatName)}</span> <span class="n">${n.countOf(n.category)}</span>`,Y0(),uh(),iS()}var Gc=document.getElementById("pg-num");function Y0(){let n=H.data;Bo.disabled=!n.hasNewer(),hh.disabled=!n.hasOlder(),Bo.hidden=hh.hidden=!n.hasNewer()&&!n.hasOlder(),Gc&&(Gc.hidden=Bo.hidden,Gc.textContent=`${n.page}/${n.pages}`,Gc.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function uh(){clearTimeout(Pf),bs.classList.remove("open"),Qd.setAttribute("aria-expanded","false")}var qi=document.createElement("button");qi.id="ov-btn";qi.type="button";qi.hidden=!0;qi.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 1h8v8H1zM10.5 1H15v3.5h-4.5zM10.5 5.5H15V9h-4.5zM1 10.5h3.5V15H1zM5.5 10.5H9V15H5.5zM10.5 10.5H15V15h-4.5z" fill="currentColor"/></svg><span></span>';bs.appendChild(qi);var Lt=null,nS="",j0=()=>!!(H.section&&H.section.def.card==="image"&&!H.section.def.skills&&H.data&&H.data.all.length>=8);function iS(){qi.hidden=!j0(),qi.querySelector("span").textContent=Me("overview"),qi.setAttribute("aria-label",Me("overview"))}qi.addEventListener("click",n=>{n.stopPropagation(),sS()});function Vg(){if(!Lt)return;let n=Lt.querySelector(".mos"),e=getComputedStyle(n).gridTemplateColumns.split(" ").length,t=[...n.children];[...n.children].forEach(d=>{d.className="t "+d.dataset.k,d.style.gridColumn=""});let i=d=>d.classList.contains("xl")?e<6?e*2:8:d.classList.contains("l")?4:d.classList.contains("w")?2:1,s=(e-t.reduce((d,p)=>d+i(p),0)%e)%e;for(let d=t.length-1;d>=0&&s>0;d--)t[d].dataset.k||(t[d].classList.add("w"),s--);let r=n.getBoundingClientRect(),o=r.width/e;if(!t.length||!o)return;let a=d=>{let p=d.getBoundingClientRect();return{t:d,c:Math.round((p.left-r.left)/o),n:Math.round(p.width/o),b:Math.round(p.bottom)}},l=t.map(a),c=Math.max(...l.map(d=>d.b)),h=l.filter(d=>d.b>=c-2).sort((d,p)=>d.c-p.c),u=e-h.reduce((d,p)=>d+p.n,0);for(let d=h.length-1,p=0;u>0;p++){let g=h[h.length-1-p%h.length];g.n++,u--,d--}h.forEach(d=>{d.t.style.gridColumn="span "+d.n})}function Gg(n,e=!0){if(nS=n,!Lt)return;Lt.querySelectorAll(".chips button").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.cat===n)));let t=Lt.querySelector(".mos");t.classList.toggle("sel",!!n);let i=null;if(t.querySelectorAll(".t").forEach(s=>{let r=!!n&&s.dataset.tags.split(" ").includes(n);s.classList.toggle("hit",r),s.classList.toggle("dim",!!n&&!r),n&&!r?(s.setAttribute("tabindex","-1"),s.setAttribute("aria-disabled","true")):(s.removeAttribute("tabindex"),s.removeAttribute("aria-disabled")),r&&!i&&(i=s)}),e&&i){let s=i.getBoundingClientRect();(s.top>innerHeight*.8||s.bottom<0)&&Lt.scrollTo({top:Lt.scrollTop+s.top-140,behavior:"smooth"})}}function sS(){if(!j0()||!bn)return;uh();let n=H.data,e=H.section.def,t=n.all,i=e.defaultTag||"featured",s=(e.tags||[]).some(l=>l.id==="advertising")?"advertising":"",r=!0,o=t.map(l=>{let c=(l.tags||[]).includes(i),h=c&&r?"xl":c?"l":s&&(l.tags||[]).includes(s)?"w":"";c&&(r=!1);let u=l.ovSize==="s"?"":/^(xl|l|w)$/.test(l.ovSize||"")?l.ovSize:h,d=l.thumb?u==="xl"?`<img src="${_e(bt(l.thumb))}" alt="" loading="lazy" draggable="false">`:Pr(l.thumb,'alt="" loading="lazy" draggable="false"'):"";return`<a class="t ${u}" data-k="${u}" data-ov="${_e(l.id)}" data-tags="${_e((l.tags||[]).join(" "))}" href="?p=${encodeURIComponent(l.id)}&amp;lang=${xn}">${d}<em>${_e(l.date||"")}</em><span class="tx"><b>${_e(he(l.title))}</b><i>${_e(he(l.subtitle))}</i></span></a>`}).join(""),a=(n.categoryList.some(l=>l.id==="")?n.categoryList:[{id:"",label:Object.fromEntries(ai.map(l=>[l,(wr[l]||wr.en).all]))},...n.categoryList]).map(l=>`<button type="button" data-cat="${_e(l.id)}" aria-pressed="false">${_e(he(l.label))}<span>${n.countOf(l.id)}</span></button>`).join("");Lt||(Lt=document.createElement("section"),Lt.id="hc-ov",Lt.className="ui",Lt.setAttribute("role","dialog"),Lt.setAttribute("aria-modal","true"),Lt.hidden=!0,document.body.appendChild(Lt),Lt.addEventListener("click",l=>{let c=l.target.closest("[data-ov]");if(c){if(c.classList.contains("dim")){l.preventDefault();return}if(l.metaKey||l.ctrlKey||l.shiftKey)return;l.preventDefault();let u=c.dataset.ov;Pd(),il(u);return}let h=l.target.closest("[data-cat]");if(h){Gg(h.dataset.cat);return}l.target.closest(".x")&&Pd()}),window.addEventListener("keydown",l=>{!Lt||Lt.hidden||(l.code==="Escape"&&(l.preventDefault(),Pd()),l.code!=="Tab"&&l.code!=="Enter"&&l.code!=="Space"&&l.stopImmediatePropagation())},!0),window.addEventListener("resize",Vg)),Lt.setAttribute("aria-label",Me("overview")),Lt.innerHTML=`<div class="ov-in"><div class="bar"><h2>${_e(Me("overview"))}</h2><span class="n">${t.length} ${_e(Me("ov_n"))}</span><button type="button" class="x" aria-label="${_e(Me("close"))}"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button><div class="chips">${a}</div></div><div class="mos">${o}</div></div>`,Lt.hidden=!1,Lt.scrollTop=0,document.documentElement.classList.add("ov-open"),requestAnimationFrame(()=>{Lt.classList.add("on")}),Vg(),Gg("",!1),setTimeout(()=>{let l=Lt.querySelector(".x");l&&l.focus({preventScroll:!0})},50),rr("#overview",Me("overview"),!0)}function Pd(){!Lt||Lt.hidden||(Lt.classList.remove("on"),document.documentElement.classList.remove("ov-open"),setTimeout(()=>{Lt.classList.contains("on")||(Lt.hidden=!0)},350),qi.focus({preventScroll:!0}))}var Pf=0,Z0=-1e9;bs.addEventListener("pointerenter",()=>clearTimeout(Pf));Qd.addEventListener("click",()=>{clearTimeout(Pf);let n=bs.classList.toggle("open");Qd.setAttribute("aria-expanded",String(n))});Bo.addEventListener("click",()=>{bn&&cy("newer")});hh.addEventListener("click",()=>{bn&&cy("older")});var ar=document.getElementById("kb"),If=document.getElementById("kb-toggle"),J0=null;function ef(){ar.classList.add("open"),If.setAttribute("aria-expanded","true")}function dh(){ar.classList.remove("open"),If.setAttribute("aria-expanded","false")}If.addEventListener("click",()=>{clearTimeout(J0),ar.classList.contains("open")?dh():ef()});ar.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>uy({code:n.dataset.k,preventDefault(){}})));function ms(n){let e=ar.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function K0(){ar.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var Nf=document.getElementById("whiteboard"),en=document.getElementById("post2d"),gs=document.getElementById("strip");function Wg(n,e){if(!n||ve.settings.signImages===!1)return"";let t=[he(n.title).trim(),(n.author||ve.settings.name||"").trim()].filter(Boolean);return e&&t.push(Me("photo")+" "+e.trim()),t.join(" \xB7 ")}var rS=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Va=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Ga=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]{6,}))?/i.exec(n||"");if(!e)return null;let t=e[2]||(/[?&]h=([0-9a-f]{6,})/i.exec(n)||[])[1];return t?e[1]+"/"+t:e[1]},Nh=(n,e)=>{let[t,i]=String(n).split("/");return`https://player.vimeo.com/video/${t}?${i?"h="+i+"&":""}${e}`},Id=new Map,Q0=n=>(Id.has(n)||Id.set(n,fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent("https://vimeo.com/"+n)}&width=1280`).then(e=>e.ok?e.json():null).then(e=>e&&e.thumbnail_url||"").catch(()=>"")),Id.get(n)),ey=(n,e)=>{let t=(n&&n.media||[]).filter(i=>i&&/youtu\.?be|vimeo\.com/.test(i.src||""));return!t.length||t[0].src===e},Dr=n=>Va(n)?"youtube":Ga(n)?"vimeo":rS(n)?"video":"image",Fo={to:"maya@hand-coded.net"},$g={fr:{title:"Restons en contact.",intro:"Nos nouvelles, quelques fois par an : projets et coulisses. Un projet en t\xEAte ? Dites-nous en plus.",email:"Votre e-mail",who:"Vous \xEAtes",whoO:["Une marque","Une agence","Un(e) artiste","Une institution ou un festival","Autre"],what:"Un projet en t\xEAte ? (facultatif)",whatO:["Une installation","Un \xE9v\xE9nement ou une tourn\xE9e","Un outil ou un logiciel","Du conseil","Autre chose"],when:"Pour quand",whenO:["Moins de 3 mois","3 \xE0 6 mois","Plus tard","Je ne sais pas encore"],msg:"En quelques mots (facultatif)",send:"S\u2019inscrire",sending:"Envoi\u2026",ok:"Merci, vous \xEAtes inscrit(e) ! Et si vous nous avez parl\xE9 d\u2019un projet, on vous r\xE9pond tr\xE8s vite.",err:"L\u2019envoi n\u2019a pas march\xE9. \xC9crivez-nous directement \xE0 ",bad:"Il manque une adresse e-mail valide.",note:"Quelques e-mails par an. D\xE9sinscription en un clic."},en:{title:"Let\u2019s keep in touch.",intro:"Our news, a few times a year: projects and behind the scenes. A project in mind? Tell us more.",email:"Your email",who:"You are",whoO:["A brand","An agency","An artist","An institution or a festival","Other"],what:"A project in mind? (optional)",whatO:["An installation","An event or a tour","A tool or software","Consulting","Something else"],when:"When",whenO:["Within 3 months","3 to 6 months","Later","Not sure yet"],msg:"In a few words (optional)",send:"Sign up",sending:"Sending\u2026",ok:"Thank you, you\u2019re signed up! And if you told us about a project, we\u2019ll get back to you very soon.",err:"Sending failed. Write to us directly at ",bad:"Please enter a valid email address.",note:"A few emails a year. Unsubscribe in one click."},ca:{title:"Mantinguem el contacte.",intro:"Les nostres novetats, unes quantes vegades l\u2019any: projectes i bastidors. Teniu un projecte al cap? Expliqueu-nos-en m\xE9s.",email:"El vostre correu",who:"Sou",whoO:["Una marca","Una ag\xE8ncia","Un/a artista","Una instituci\xF3 o un festival","Altres"],what:"Un projecte al cap? (opcional)",whatO:["Una instal\xB7laci\xF3","Un esdeveniment o una gira","Una eina o un programari","Assessorament","Una altra cosa"],when:"Per a quan",whenO:["Menys de 3 mesos","De 3 a 6 mesos","M\xE9s endavant","Encara no ho s\xE9"],msg:"En poques paraules (opcional)",send:"Subscriure\u2019s",sending:"Enviant\u2026",ok:"Gr\xE0cies, ja us heu subscrit! I si ens heu parlat d\u2019un projecte, us responem molt aviat.",err:"L\u2019enviament no ha funcionat. Escriviu-nos directament a ",bad:"Falta una adre\xE7a de correu v\xE0lida.",note:"Uns quants correus l\u2019any. Baixa amb un clic."},es:{title:"Sigamos en contacto.",intro:"Nuestras novedades, unas pocas veces al a\xF1o: proyectos y bastidores. \xBFUn proyecto en mente? Cu\xE9ntanos m\xE1s.",email:"Tu correo",who:"Eres",whoO:["Una marca","Una agencia","Un/a artista","Una instituci\xF3n o un festival","Otro"],what:"\xBFUn proyecto en mente? (opcional)",whatO:["Una instalaci\xF3n","Un evento o una gira","Una herramienta o un software","Asesor\xEDa","Otra cosa"],when:"Para cu\xE1ndo",whenO:["Menos de 3 meses","De 3 a 6 meses","M\xE1s adelante","A\xFAn no lo s\xE9"],msg:"En pocas palabras (opcional)",send:"Suscribirme",sending:"Enviando\u2026",ok:"\xA1Gracias, ya te has suscrito! Y si nos has hablado de un proyecto, te respondemos muy pronto.",err:"El env\xEDo no ha funcionado. Escr\xEDbenos directamente a ",bad:"Falta una direcci\xF3n de correo v\xE1lida.",note:"Unos pocos correos al a\xF1o. Baja con un clic."}},ty=()=>$g[xn]||$g.en,aS=0;function ny(n){let e=ty(),t=_e,i="cf"+ ++aS,s=(r,o,a)=>`<fieldset class="cf-q"><legend>${t(o)}</legend><div class="cf-chips">${a.map((l,c)=>`<label class="cf-chip"><input type="radio" name="${i}-${r}" value="${t(l)}"${c===-1?" checked":""}><span>${t(l)}</span></label>`).join("")}</div></fieldset>`;return`<form class="cform-f cf-${n}" novalidate><div class="cf-col"><h2 class="${n==="pv"?"pv-ttl":"ttl"}">${t(e.title)}</h2><p class="cf-intro">${t(e.intro)}</p><label class="cf-q cf-mail"><span>${t(e.email)}</span><input type="email" name="email" autocomplete="email" required spellcheck="false"></label>`+s("who",e.who,e.whoO)+s("when",e.when,e.whenO)+'</div><div class="cf-col">'+s("what",e.what,e.whatO)+`<label class="cf-q cf-msg"><span>${t(e.msg)}</span><textarea name="message" rows="${n==="pv"?3:2}"></textarea></label><input type="text" name="_honey" class="cf-hp" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="cf-end"><button type="submit" class="cf-send">${t(e.send)}</button><span class="cf-note">${t(e.note)}</span></div><p class="cf-st" role="status" aria-live="polite"></p></div></form>`}function iy(n){let e=n.querySelector(".cform-f");if(!e||e.dataset.bound)return;e.dataset.bound="1";let t=e.querySelector(".cf-st"),i=e.querySelector(".cf-send"),s=r=>{let o=e.querySelector(`input[name$="-${r}"]:checked`);return o?o.value:""};e.addEventListener("submit",async r=>{r.preventDefault();let o=ty(),a=e.email.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){t.textContent=o.bad,t.className="cf-st bad",e.email.focus();return}if(e._honey.value)return;i.disabled=!0,i.textContent=o.sending,t.textContent="",t.className="cf-st";let l=!!(s("what")||s("when")||e.message.value.trim()),c={email:a,Newsletter:"oui","Vous \xEAtes":s("who"),Projet:s("what"),"Pour quand":s("when"),Message:e.message.value.trim(),Langue:xn,Page:location.href,_subject:"Hand Coded \xB7 "+(l?"newsletter + projet":"inscription newsletter")+(s("who")?" ("+s("who")+")":""),_template:"table",_captcha:"false"},h=!1,u="";if(location.protocol==="file:")u="page ouverte depuis le disque : l\u2019envoi ne marche que sur le site en ligne";else try{let d=await fetch("https://formsubmit.co/ajax/"+Fo.to,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)}),p=await d.json().catch(()=>({}));h=d.ok&&String(p.success)!=="false",h||(u=p.message||"HTTP "+d.status)}catch(d){u=d&&d.message||"r\xE9seau"}h||console.warn("[contact] envoi refus\xE9 :",u),i.disabled=!1,i.textContent=o.send,h?(e.reset(),t.textContent=o.ok,t.className="cf-st ok",rr("contact-form","Formulaire de contact envoy\xE9",!0)):(t.innerHTML=_e(o.err)+`<a href="mailto:${_e(Fo.to)}">${_e(Fo.to)}</a>`+(u?`<small class="cf-why">${_e(u)}</small>`:""),t.className="cf-st bad")})}var oS=[[/instagram\.com/i,"IG","Instagram"],[/vimeo\.com/i,"Vi","Vimeo"],[/facebook\.com/i,"Fb","Facebook"],[/linkedin\.com/i,"in","LinkedIn"],[/youtube\.com|youtu\.be/i,"YT","YouTube"],[/tiktok\.com/i,"TT","TikTok"],[/(?:^|\/\/|\.)(?:x|twitter)\.com/i,"X","X"],[/behance\.net/i,"Be","Behance"]];function sy(n){let e=document.createElement("div");return e.innerHTML=n,e.querySelectorAll("p").forEach(t=>{let i=[...t.querySelectorAll("a[href]")];if(!i.length)return;let s=i.map(o=>oS.find(([a,,l])=>a.test(o.getAttribute("href"))&&o.textContent.trim().toLowerCase()===l.toLowerCase()));s.some(o=>!o)||[...t.childNodes].filter(o=>o.nodeType===3).map(o=>o.textContent).join("").replace(/[\s·•|,\/-]/g,"")||(t.className="socs",t.innerHTML=i.map((o,a)=>`<a class="soc" href="${_e(o.getAttribute("href"))}" target="_blank" rel="noopener" aria-label="${s[a][2]}" title="${s[a][2]}">${s[a][1]}</a>`).join(""))}),e.innerHTML}function ry(n){let e=document.createElement("div");e.innerHTML=sy(n||"");let t=[...e.children],i={lead:"",mail:[],tel:[],addr:[],socs:"",note:[],rest:[]};return t.forEach((s,r)=>{let o=s.textContent.replace(/\s+/g," ").trim();if(!o&&!s.classList.contains("socs"))return;let a=[...s.querySelectorAll("a[href]")];if(s.classList.contains("socs"))i.socs=s.innerHTML;else if(a.some(l=>/^mailto:/i.test(l.getAttribute("href"))))a.filter(l=>/^mailto:/i.test(l.getAttribute("href"))).forEach(l=>i.mail.push(l.getAttribute("href").replace(/^mailto:/i,"").split("?")[0]));else if(/^\+?[\d\s().\-]{8,}$/.test(o))i.tel.push(o);else if(r===0&&!a.length&&s.querySelector("b, strong")&&s.querySelector("b, strong").textContent.trim()===o)i.lead=s.querySelector("b, strong").innerHTML;else if(r===0&&!a.length&&s.firstElementChild&&/^(B|STRONG)$/.test(s.firstElementChild.tagName)&&s.textContent.trim().startsWith(s.firstElementChild.textContent.trim())){let l=s.firstElementChild;i.lead=l.innerHTML,l.remove(),i.sub=s.innerHTML.replace(/^\s*(<br\s*\/?>\s*)+/i,"").trim()}else a.length?i.note.push(s.innerHTML):/\d/.test(o)&&o.length<120?i.addr.push(o):i.rest.push(s.outerHTML)}),i.ok=!!(i.mail.length||i.tel.length||i.addr.length),i}function ay(n){let e=ry(n),t=_e;if(!e.ok)return sy(n||"");let i=(o,a)=>`<div class="cr"><dt>${t(Me(o))}</dt><dd>${a}</dd></div>`,s=o=>`<a href="tel:${t(o.replace(/[^\d+]/g,""))}">${t(o)}</a>`,r=o=>{let[a,...l]=o.split(/\s+[.·•|]\s+/);return t(a)+(l.length?"<br>"+t(l.join(" \xB7 ")):"")};return(e.lead?`<p class="lead">${e.lead}</p>`:"")+(e.sub?`<p class="csub">${e.sub}</p>`:"")+'<dl class="crows">'+(e.mail.length?i("c_write",e.mail.map(o=>`<a class="mail" href="mailto:${t(o)}">${t(o)}</a>`).join("<br>")):"")+(e.tel.length?i("c_call",e.tel.map(s).join("<br>")):"")+(e.addr.length?i("c_addr",e.addr.map(r).join("<br>")):"")+(e.socs?i("c_follow",`<span class="socs">${e.socs}</span>`):"")+"</dl>"+e.rest.join("")+(e.note.length?`<div class="cnote">${e.note.map(o=>`<p>${o}</p>`).join("")}</div>`:"")}var Wc=56,Xe={open:!1,height:0,panels:[],x:0,finalpos:0,over:0,ov:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.creditsHTML="",this.open=!0,this.height=355,en.classList.remove("closing"),en.hidden=!1,Sf(),this.geomKey=JSON.stringify(Ta("project"));{let i=Ei();gs.style.setProperty("--ft",i.top+"px"),gs.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!1),this.addContact(n),Fo.to&&this.addForm()}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(H.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}e!=="place"&&this.addCredits(),n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,this.over=0,this.ov=0,this.tx=0,gs.style.transform="translateX(0px)"},addCredits(){let n=this.creditsHTML;if(this.creditsHTML="",!n)return;let{width:e,x:t,colW:i,press:s}=Ta("project"),r=Ei(),o=355-r.bottom,a=document.createElement("div");a.className="txt",a.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${i}px`,document.body.appendChild(a);let l=$c(n,i,[o-r.top],a).filter(c=>c.trim());a.remove(),l.forEach((c,h)=>{let[u,d]=s?[h===0?r.side:Math.floor(r.gutter/2),h===l.length-1?r.side:Math.ceil(r.gutter/2)]:[t,e-t-i];this.addPanel("txt cred",u+i+d,`<div class="body" style="left:${u}px;top:${r.top}px;width:${i}px">${c}</div>`)})},addRelations(n){let e=Xo(n);if(!e.length)return;let t=Ro(ve,n).length>0,i=Ei(),s=this.panels[this.panels.length-1],r=H.section.def.skills&&s&&s.classList.contains("txt"),o=r?Math.max(12,i.gutter-i.side):i.side,a=Math.max(200,Math.min(300,i.col))+o+i.side,l=`<h2 class="ttl" style="left:${o}px;right:${i.side}px;top:${i.top}px">${_e(Me(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${o}px;bottom:${i.bottom}px">${e.length}</span>`;if(!t){this.addIndex(e,i);return}r||this.addPanel("relh",a,l),e.forEach(c=>{let h=Zs(c),u=[c.date,he(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${_e(c.id)}" aria-label="${_e(he(c.title))}">`+(h?Pr(h,'alt="" draggable="false"'):"")+`<span class="mono"${h?" hidden":""}>${_e(Da(he(c.title)))}</span><span class="cap"><span class="t">${_e(he(c.title).trim())}</span>${u?`<span class="m">${_e(u)}</span>`:""}</span></button>`),p=d.querySelector("img");p&&p.addEventListener("error",()=>{p.remove(),d.querySelector(".mono").hidden=!1})})},addIndex(n,e){let t=e.top,i=355-e.bottom,s=66,r=58,o=252,a=30,l=e.side,c=Math.max(1,Math.floor((i-t-r)/s)),h=Math.max(1,Math.floor((i-t)/s)),u=[],d=0;for(;d<n.length;){let m=(u.length?h:c)*2;u.push(n.slice(d,d+m)),d+=m}let p=_e,g=m=>String(m).padStart(2,"0"),v=0;u.forEach((m,f)=>{let M=f?h:c,b=m.length>M?2:1,P=f?"":`<h2 class="ttl" style="left:${l}px;top:${t}px">${p(Me("together"))}.<span class="n">${n.length}</span></h2>`,I=m.map(N=>{let z=Zs(N),w=[N.date,he(N.place)].filter(Boolean).join(" | ");return v++,`<button type="button" class="go" data-go="${p(N.id)}" aria-label="${p(he(N.title))}"><span class="no">${g(v)}</span><span class="th">${z?Pr(z,'alt="" draggable="false" loading="lazy"'):""}<span class="mono"${z?" hidden":""}>${p(Da(he(N.title)))}</span></span><span class="cap"><span class="t">${p(he(N.title).trim())}</span>${w?`<span class="m">${p(w)}</span>`:""}</span></button>`}).join("");this.addPanel("idx",l*2+b*o+(b-1)*a,P+`<div class="list" style="left:${l}px;top:${f?t:t+r}px;grid-template-columns:repeat(${b},${o}px);grid-template-rows:repeat(${Math.min(M,m.length)},${s}px);column-gap:${a}px">${I}</div>`).querySelectorAll("img").forEach(N=>N.addEventListener("error",()=>{let z=N.nextElementSibling;N.remove(),z&&(z.hidden=!1)}))})},addLogos(n){let e=Ei(),t=n.logos.length,i=e.top,s=355-e.bottom,r=34,o=e.side,a=96,l=50,c=Math.max(1,Math.floor((s-i-r)/l)),h=Math.max(1,Math.min(t,Math.ceil(t/c))),u=Math.ceil(t/h),d=Math.min(l,Math.floor((s-i-r)/u)),p=n.logos.map(m=>`<span class="lg"><img data-src="${_e(m)}" alt="" draggable="false"></span>`).concat(Array(u*h-t).fill('<span class="lg"></span>')).join(""),g=Math.round(i+r+Math.max(0,(s-i-r-u*d)/2));this.addPanel("logos",o*2+h*a,`<h3 class="lbl" style="left:${o}px;top:${i}px">${_e(Me("partners"))}</h3><div class="grid" style="left:${o}px;top:${g}px;grid-template-columns:repeat(${h},${a-1}px);grid-auto-rows:${d-1}px">${p}</div>`).querySelectorAll("img[data-src]").forEach(m=>oy(m.dataset.src).then(f=>{m.src=f.src,m.classList.toggle("raw",!!f.raw)}))},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Me("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${_e(t)}</span><a href="${_e(e)}" target="_blank" rel="noopener"><span class="host">${_e(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,gs.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=l=>Dr(l.src)==="image";if(n.filter(e).length<3){n.forEach(l=>this.addMedia(l.src,355,l.credit,!0,l.caption));return}let t=["mat","big2","bleed","collage","trio","bleed","duo","grid","offset","bleed","inset","bleed"],i={duo:2,big2:3,collage:3,trio:3,grid:4},s=String(this.post&&this.post.id||""),r=0;for(let l of s)r=r*31+l.charCodeAt(0)>>>0;let o=r%t.length;t[o]==="bleed"&&o++;let a=0;for(;a<n.length;){let l=n[a];if(!e(l)){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}let c=t[o++%t.length],h=i[c]||1,u=n.slice(a,a+h);if(h>1&&!(u.length===h&&u.every(e))){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}c==="mat"?this.addMat(l):c==="grid"?this.addGrid(u):c==="duo"?this.addDuo(u):c==="big2"?this.addBig2(u):c==="collage"?this.addCollage(u):c==="trio"?this.addTrio(u):c==="offset"?this.addOffset(l):c==="inset"?this.addInset(l):this.addMedia(l.src,355,l.credit,!0,l.caption),a+=h}},addFit(n,e,t,i=""){let s=e.map(()=>1.5),r=this.addPanel("media comp "+n,400,e.map(h=>`<img src="${_e(bt(h.src))}" alt="" draggable="false" decoding="async">`).join("")+(i?`<p class="mcap2">${_e(i)}</p>`:"")),o=[...r.querySelectorAll("img")],a=r.querySelector(".mcap2"),l=h=>Math.round(h)+"px",c=h=>{let u=t(s);o.forEach((d,p)=>{let[g,v,m,f]=u.boxes[p];Object.assign(d.style,{left:l(g),top:l(v),width:l(m),height:l(f)})}),a&&(u.cap?Object.assign(a.style,{left:l(u.cap[0]),top:l(u.cap[1]),width:l(u.cap[2]),display:""}):a.style.display="none"),r.style.width=l(u.w),h&&this.layout()};return o.forEach((h,u)=>{let d=()=>{h.naturalWidth&&(s[u]=h.naturalWidth/h.naturalHeight,c(!0))};h.addEventListener("load",d),h.addEventListener("error",()=>{h.style.visibility="hidden"}),h.complete&&d()}),c(!1),r},capOf(n){let e=n.find(t=>t.caption&&he(t.caption).trim());return e?he(e.caption).trim():""},addDuo(n){this.addFit("wht duo",n,s=>{let r=263*s[0],o=263*s[1];return{w:2*46+r+16+o,boxes:[[46,46,r,263],[46+r+16,46,o,263]]}})},addBig2(n){let e=Math.max(16,Math.min(34,Ei().top)),t=8,i=355-2*e;this.addFit("big2",n,s=>{let r=i*s[0],o=(i-t)/(1/s[1]+1/s[2]),a=o/s[1];return{w:2*e+r+t+o,boxes:[[e,e,r,i],[e+r+t,e,o,a],[e+r+t,e+a+t,o,i-t-a]]}})},addCollage(n){let e=(t,i,s)=>i/t>s?[s*t,s]:[i,i/t];this.addFit("wht collage",n,t=>{let[i,s]=e(t[0],210,263),r=46+i+26,[o,a]=e(t[1],230,160),l=30+a+20,[c,h]=e(t[2],150,315-l);return{w:Math.max(r+o,r+c+120)+46,boxes:[[46,46,i,s],[r,30,o,a],[r,l,c,h]],cap:[r+c+16,l+2,96]}},this.capOf(n))},addTrio(n){this.addFit("trio",n,i=>{let s=230,r=i[0]+i[1]+i[2];s*r>1100&&(s=1100/r);let o=(355-s)/2,a=34,l=i.map(c=>{let h=[a,o,s*c,s];return a+=s*c+10,h});return{w:a-10+34,boxes:l}})},addGrid(n){let e=Math.max(16,Math.min(34,Ei().top)),t=8,i=355-2*e;this.addFit("grid4",n,s=>{let r=s[0]+s[1],o=s[2]+s[3],a=t+(i-t)/(1/r+1/o),l=(a-t)/r,c=(a-t)/o,h=e+l+t;return{w:a+2*e,boxes:[[e,e,l*s[0],l],[e+l*s[0]+t,e,l*s[1],l],[e,h,c*s[2],c],[e+c*s[2]+t,h,c*s[3],c]]}})},addOffset(n){let i=n.caption?he(n.caption).trim():"";this.addFit("wht offset",[n],s=>{let r=Math.min(170*s[0],300),o=r/s[0];return{w:Math.max(360,46+r+170),boxes:[[46,309-o,r,o]],cap:[46+r+24,46,130]}},i)},addInset(n){let e=n.caption?he(n.caption).trim():"";this.addFit("inset",[n],t=>{let s=Math.min(200*t[0],360),r=s/t[0],o=(355-r)/2-(e?10:0);return{w:s+140,boxes:[[70,o,s,r]],cap:[70,o+r+10,s]}},e)},addMat(n){let t=n.caption?he(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${_e(bt(n.src))}" alt="" draggable="false" decoding="async" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${_e(t)}</p>`:"")),r=s.querySelector("img"),o=()=>{if(!r.naturalWidth)return;let a=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=a+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=a+"px"),this.layout()};r.addEventListener("load",o),r.complete&&o(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(a=>a!==s),this.layout()})},addMedia(n,e=355,t="",i=!0,s=null){let r=Dr(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t,s);return}let o=r==="video",a=this.addPanel("media",e,""),l=document.createElement(o?"video":"img");if(l.draggable=!1,l.style.height=e+"px",o){Object.assign(l,{src:bt(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",Me("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),a.querySelector(".in").appendChild(u)}else l.src=bt(n),l.alt="";let c=()=>{let u=Math.round(o?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(a.style.width=u+"px",this.layout())};l.addEventListener(o?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(u=>u!==a),this.layout())}),a.querySelector(".in").prepend(l);let h=s?he(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",p=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${_e(d)}</b> `:"")+_e(p),a.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i="",s=null){let r=Math.round(t*16/9),a=this.addPanel("media embed",r,"").querySelector(".in"),l=e==="youtube"?Va(n):Ga(n),c=document.createElement("div");c.className="cover";let h=e==="vimeo"&&l&&!ey(this.post,n),u=this.post&&this.post.thumb?bt(this.post.thumb):"",d=e==="youtube"&&l?`https://i.ytimg.com/vi/${l}/hqdefault.jpg`:h?"":u;if(d||h){let v=document.createElement("img");v.alt="",v.draggable=!1,v.onerror=()=>v.remove(),d?v.src=d:Q0(l).then(m=>{m||u?v.src=m||u:v.remove()}),c.appendChild(v)}c.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let p=document.createElement("button");p.type="button",p.className="play",p.setAttribute("aria-label",Me("play")),p.addEventListener("click",()=>{let v=document.createElement("iframe");v.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${l}?autoplay=1&playsinline=1&rel=0`:Nh(l,"autoplay=1&title=0&byline=0&portrait=0"),v.allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen; picture-in-picture; web-share",v.allowFullscreen=!0,v.title=e==="youtube"?"YouTube":"Vimeo",c.replaceWith(v)}),c.appendChild(p),a.appendChild(c);let g=s?he(s).trim():"";if(g){let v=document.createElement("div");v.className="mcap",v.textContent=g,a.appendChild(v)}},addText(n,e){let{width:t,x:i,colW:s,press:r}=Ta(e),o=Ei(),a=355-o.bottom;e==="project"&&H.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(C,N)=>r?[C===0?o.side:Math.floor(o.gutter/2),C===N-1?o.side:Math.ceil(o.gutter/2)]:[i,t-i-s],c=he(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=he(n.subtitle),u=H.section.def,d=n.tags.filter(C=>C!=="featured").map(C=>u.tags.find(N=>N.id===C)).filter(Boolean).map(C=>he(C.label)),p="",g=_e([n.date,he(n.place)].filter(Boolean).join(" | ")),v=Sr(he(n.body)).split(/(?=<h3[\s>])/i),m=/^\s*<h3/i.test(v[0]||"")?"":v.shift();this.creditsHTML=v.join("");let f=document.createElement("div");f.className="txt",f.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(f),f.innerHTML=`<h2 class="ttl" style="position:static">${_e(c)}</h2>${h?`<p class="stl" style="position:static">${_e(h)}</p>`:""}`;let M=f.firstChild.offsetHeight,b=h?f.lastChild.offsetHeight+6:0,P=[],I="";if(P.length){let C=(Ut.find(N=>N.def.id===P[0].section)||{}).def;I=`${_e((C?he(C.name):Me("skills")).trim())} ${P.map((N,z)=>`<span class="it"><button type="button" class="go" data-go="${_e(N.id)}">${_e(he(N.title).trim())}</button>${z<P.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let C=`<div class="fecha">${g}</div>${p?`<div class="posted">${p}</div>`:""}${I?`<div class="posted skl-tags">${I}</div>`:""}`;f.innerHTML=`<div class="meta" style="position:static">${C}</div>`;let N=f.firstChild.offsetHeight,z=a-13,w=z-N,S=H.section.def.skills?Xo(n).length:0,F="",ie=0;S&&(F=`<span class="lbl">${_e(Me(Ro(ve,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${S}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,f.innerHTML=`<div class="relp" style="position:static">${F}</div>`,ie=f.firstChild.offsetHeight);let le=ie?w-ie-18:w,B=o.top+M+6,$=o.top+M+b+20,O=$c(m,s,[a-$,a-o.top],f);f.innerHTML=`<div class="body" style="position:static">${O[O.length-1]}</div>`;let ee=O.length===1?$:o.top;if(O[O.length-1]&&ee+f.firstChild.offsetHeight>le-12){let W=$c(O.pop(),s,ie?[a-ee,le-12-o.top]:[le-12-ee,le-12-o.top],f);O.push(...W),ie&&W.length===1&&O.push("")}let j=0;if(ie){ee=O.length===1?$:o.top,f.innerHTML=`<div class="body" style="position:static">${O[O.length-1]||""}</div>`;let W=ee+(O[O.length-1]?f.firstChild.offsetHeight:0)+18;j=O[O.length-1]?Math.min(le,Math.max(Math.round((o.top+a)/2)-10,W)):o.top+4}O.forEach((W,Q)=>{let ne=Q===O.length-1,[ue,V]=l(Q,O.length);this.addPanel("txt",ue+s+V,(Q===0?`<h2 class="ttl" style="left:${ue}px;top:${o.top}px;width:${s}px">${_e(c)}</h2>${h?`<p class="stl" style="left:${ue}px;top:${B}px;width:${s}px">${_e(h)}</p>`:""}`:"")+`<div class="body" style="left:${ue}px;top:${Q===0?$:o.top}px;width:${s}px">${W}</div>`+(ne&&ie?`<div class="relp" style="left:${ue}px;top:${j}px;width:${s}px">${F}</div>`:"")+(ne?`<div class="meta" style="left:${ue}px;top:${w}px;width:${s}px">${C}</div>`:""))})}else{let C=13+M+4,N=13+M+b+10,z=N+20,w=z+18+20;$c(m,s,[355-w-14,327],f).forEach((F,ie)=>{this.addPanel("txt",t,(ie===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${_e(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${C}px;width:${s}px">${_e(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${N}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${z}px;width:${s}px">${p}</div>`:"")+`<div class="body" style="left:${i}px;top:${ie===0?w:14}px;width:${s}px">${F}</div>`)})}f.remove()},addTeam(n){let e=n.team.map(C=>ve.posts.find(N=>N.id===C)).filter(Boolean),t=Ei(),i=t.top,s=355-t.bottom,r=t.side,o=Math.max(24,Math.min(36,t.gutter)),a=C=>String(C+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${_e(Me("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((C,N)=>`<li data-i="${N}"><b>${a(N)}</b><span><span class="nm">${_e(he(C.title).trim())}</span>${he(C.subtitle).trim()?`<i>${_e(he(C.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${_e(Me("with"))}</i> ${_e(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let p=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],v=r+p+o,m=v,f=i,M=0,b=0,P=v;e.forEach((C,N)=>{let z=g[N%g.length]*(e.length>12?.8:1),w=16;f+z+w>s&&f>i+1&&(m+=M+16,b++,f=i+(b%2?34:0),M=0);let S=Qo(C)&&C.published!==!1,F=document.createElement(S?"button":"div");F.className="face"+(S?" go":""),S&&(F.type="button",F.dataset.go=C.id),F.dataset.i=N,Object.assign(F.style,{left:m+"px",top:f+"px",width:z+"px",height:z+"px"});let ie=!C.thumb&&(qd(C).find(B=>B!==n)||qd(C)[0]),le=ie?` style="background:linear-gradient(var(--veil),var(--veil)),url('${_e(bt(Zs(ie))).replace(/'/g,"%27")}') center/cover"`:"";F.innerHTML=(C.thumb?Pr(C.thumb,'alt="" draggable="false"'):`<span class="mono"${le}>${_e(Da(he(C.title)))}</span>`)+`<b class="n">${a(N)}</b>`,F.setAttribute("aria-label",he(C.title)),c.appendChild(F),M=Math.max(M,z),f+=z+w,P=Math.max(P,m+z)}),l.style.width=Math.ceil((e.length?P:r+p)+r)+"px";let I=(C,N)=>c.querySelectorAll(`[data-i="${C}"]`).forEach(z=>z.classList.toggle("on",N));c.querySelectorAll("[data-i]").forEach(C=>{["pointerenter","focus"].forEach(N=>C.addEventListener(N,()=>I(C.dataset.i,!0))),["pointerleave","blur"].forEach(N=>C.addEventListener(N,()=>I(C.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(C=>{let N=c.querySelector(`.face.go[data-i="${C.dataset.i}"]`);N&&(C.classList.add("go"),C.dataset.go=N.dataset.go)})},addForm(){let n=Ei(),{x:e,colW:t}=Ta("project"),i=n.gutter||40;this.addPanel("txt contact cform",e+t*2+i+e,`<div class="cbox" style="left:${e}px;top:${n.top}px;bottom:${n.bottom}px;width:${t*2+i}px;--cf-gap:${i}px">${ny("pnl")}</div>`),iy(gs.lastElementChild)},addContact(n){let e=Ei(),{width:t,x:i,colW:s}=Ta("project"),r=_e,o=(n.link||"").replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""),a=he(n.title).trim();a&&!/[.!?]$/.test(a)&&(a+=".");let l=he(n.subtitle).trim();this.addPanel("txt contact",t,`<div class="cbox" style="left:${i}px;top:${e.top}px;bottom:${e.bottom}px;width:${s}px"><h2 class="ttl">${r(a)}</h2>${l?`<p class="stl">${r(l)}</p>`:""}<div class="body">${ay(Sr(he(n.body)))}${n.link?`<p class="site"><a href="${r(n.link)}" target="_blank" rel="noopener">${r(o)}</a></p>`:""}</div></div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return en.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){gs.querySelectorAll("video").forEach(n=>n.pause()),gs.innerHTML="",this.panels=[],en.hidden=!0,en.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},rubber(n){let e=Math.min(0,this.end),t=Wc,i=s=>t*(1-1/(s/t*.55+1));return n>0?i(n):n<e?e-i(e-n):n},push(n){let e=Math.min(0,this.end),t=this.finalpos+n;if(t>0||t<e){let i=t>0?t:t-e,s=!this.over||Math.sign(i)===Math.sign(this.over);this.finalpos=Math.max(e,Math.min(0,t)),this.ov+=i*12*(s?Math.pow(Math.max(0,1-Math.abs(this.over)/Wc),2):1)}else this.finalpos=t},step(){if(!this.open)return;let n=Math.min(0,this.end);if(this.dragging){let t=(fh-this.xprev)*1.5/(this.scale||1);this.finalpos+=t,this.vel=this.vel*.6+t*.4,this.x-=(this.x-this.finalpos)*vn(oe.easing),this.xprev=fh}else if(Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*vn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<n&&(this.finalpos=n),this.over||this.ov){let t=Math.min(.1,Wo/_0),i=17,s=Math.exp(-i*t),r=this.over,o=this.ov,a=o+i*r;this.over=Math.max(-Wc,Math.min(Wc,(r+a*t)*s)),this.ov=(o-i*a*t)*s,Math.abs(this.over)<.2&&Math.abs(this.ov)<5&&(this.over=this.ov=0)}let e=Math.round(this.x+this.over);e!==this.tx&&(this.tx=e,gs.style.transform=`translateX(${e}px)`)}},Zt=document.createElement("div");Zt.id="postv";Zt.hidden=!0;Zt.setAttribute("role","dialog");Zt.setAttribute("aria-modal","true");document.body.appendChild(Zt);var lS=()=>Mh(),Qs={open:!1,pushed:!1,keepHistory:!1,post:null,build(n,e){this.post=n,this.open=!0;let t=H.section.def,i=n.media.filter(h=>h&&h.src),s=_e,r=he(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let o=he(n.subtitle).trim(),a=[];a.push(`<div class="pv-bar"><span class="pv-sec">${s(he(t.name).trim())}</span><button type="button" class="pv-x" aria-label="${s(Me("close"))}"><span></span><span></span></button></div>`);let l=i[0]?i[0]:n.thumb?{src:n.thumb}:null;if(l&&a.push(this.media(l,"pv-hero"+(!i[0]&&Oo(n)?" pv-logo":""))),e==="place"){let h=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");a.push(`<div class="pv-txt"><h1 class="pv-ttl">${s(r)}</h1>${o?`<p class="pv-stl">${s(o)}</p>`:""}`+(n.link?`<p class="pv-site"><a href="${s(n.link)}" target="_blank" rel="noopener">${s(h)}</a></p>`:"")+`<div class="pv-body pv-contact">${ay(Sr(he(n.body)))}</div></div>`+(Fo.to?`<div class="pv-form">${ny("pv")}</div>`:""))}else{if(a.push(this.text(n,r,o,t)),t.skills&&a.push(this.relations(n)),e==="text"?i.slice(1).forEach(h=>a.push(this.media(h,"pv-full"))):a.push(this.gallery(i.slice(1))),t.skills||a.push(this.relations(n)),e!=="text"&&(n.team&&n.team.length||n.credits)&&a.push(this.team(n)),n.logos&&n.logos.length&&a.push(`<section class="pv-logos"><h2 class="pv-h">${s(Me("partners"))}</h2><div class="pv-lgrid">${n.logos.map(h=>`<span><img data-src="${s(h)}" alt=""></span>`).join("")}</div></section>`),n.link){let h=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,u=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");a.push(`<p class="pv-link"><span>${s(String(Me("visit")).replace(/\s*:\s*$/,""))}</span><a href="${s(h)}" target="_blank" rel="noopener">${s(u)} \u2197</a></p>`)}a.push(this.next(n))}Zt.innerHTML=`<div class="pv-page">${a.join("")}</div>`;let c=Zt.querySelector(".pv-form");if(c&&iy(c),this.wire(),Zt.hidden=!1,Zt.scrollTop=0,Zt.offsetWidth,Zt.classList.add("on"),document.body.classList.add("pv-open"),!this.pushed&&!St)try{history.pushState({hcv:1},"",location.href),this.pushed=!0}catch{}},text(n,e,t,i){let s=_e,r=Sr(he(n.body)),o=r.split(/(?=<h3[\s>])/i),a=/^\s*<h3/i.test(o[0])?"":o.shift(),l=o.map(p=>{let g=/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(p.trim());return g?`<details class="pv-fold"><summary>${g[1]}</summary><div class="pv-body">${g[2]}</div></details>`:p}).join(""),c=n.tags.filter(p=>p!=="featured").map(p=>i.tags.find(g=>g.id===p)).filter(Boolean).map(p=>he(p.label)),h=[n.date,he(n.place)].filter(Boolean).join(" | "),u=bw(n),d="";if(u.length){let p=(Ut.find(g=>g.def.id===u[0].section)||{}).def;d=`<p class="pv-meta"><span>${s((p?he(p.name):Me("skills")).trim())}</span> ${u.map(g=>`<button type="button" class="go" data-go="${s(g.id)}">${s(he(g.title).trim())}</button>`).join(", ")}</p>`}return`<div class="pv-txt"><h1 class="pv-ttl">${s(e)}</h1>${t?`<p class="pv-stl">${s(t)}</p>`:""}`+(h?`<p class="pv-date">${s(h)}</p>`:"")+`<div class="pv-body">${a||""}</div>`+(l?`<div class="pv-folds">${l}</div>`:"")+"</div>"},media(n,e){let t=_e,i=Dr(n.src),s=n.caption?he(n.caption).trim():"",r=s?`<figcaption>${t(s)}</figcaption>`:"";if(i==="youtube"||i==="vimeo"){let o=i==="youtube"?Va(n.src):Ga(n.src),a=i==="vimeo"&&o&&!ey(this.post,n.src),l=i==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:a?"":this.post&&this.post.thumb?bt(this.post.thumb):"";return`<figure class="${e} pv-embed" data-kind="${i}" data-id="${t(o||"")}"><div class="pv-cover">${l?`<img src="${t(l)}" alt="">`:a?`<img data-vimeo="${t(o)}" alt="">`:""}<button type="button" class="play" aria-label="${t(Me("play"))}"></button><span class="brand">${i==="youtube"?"YouTube":"Vimeo"}</span></div>${r}</figure>`}return i==="video"?`<figure class="${e}"><video src="${t(bt(n.src)+(/#t=/.test(n.src)?"":"#t=0.1"))}" controls playsinline preload="metadata"></video>${r}</figure>`:`<figure class="${e}"><img src="${t(bt(n.src))}" alt="" loading="lazy" decoding="async">${r}</figure>`},gallery(n){let e=u=>Dr(u.src)==="image",t=[],i=_e,s=u=>`<div class="pv-row">${u.map(d=>`<img src="${i(bt(d.src))}" alt="" loading="lazy" decoding="async">`).join("")}</div>`,r=["full","mat","pair","full","quad","full","big2","mat","full","pair"],o={pair:2,quad:4,big2:3},a=String(this.post.id||""),l=0;for(let u of a)l=l*31+u.charCodeAt(0)>>>0;let c=l%r.length,h=0;for(;h<n.length;){let u=n[h];if(!e(u)){t.push(this.media(u,"pv-full")),h++;continue}let d=r[c++%r.length],p=o[d]||1,g=n.slice(h,h+p);if(p>1&&!(g.length===p&&g.every(e))){t.push(this.media(u,"pv-full")),h++;continue}let v=g.map(f=>f.caption?he(f.caption).trim():"").filter(Boolean)[0]||"",m=v?`<figcaption>${i(v)}</figcaption>`:"";d==="mat"?t.push(this.media(u,"pv-mat")):d==="pair"?t.push(`<figure class="pv-grid">${s(g)}${m}</figure>`):d==="quad"?t.push(`<figure class="pv-grid">${s(g.slice(0,2))}${s(g.slice(2))}${m}</figure>`):d==="big2"?t.push(`<figure class="pv-grid"><img class="pv-one" src="${i(bt(g[0].src))}" alt="" loading="lazy">${s(g.slice(1))}${m}</figure>`):t.push(this.media(u,"pv-full")),h+=p}return t.length?`<div class="pv-gal">${t.join("")}</div>`:""},relations(n){let e=Xo(n);if(!e.length)return"";let t=_e,i=Ro(ve,n).length>0;return`<section class="pv-rel"><h2 class="pv-h">${t(Me(i?"skillProjects":"together"))} <span>${e.length}</span></h2><div class="pv-tiles">`+e.map(s=>{let r=Zs(s),o=[s.date,he(s.place)].filter(Boolean).join(" | ");return`<button type="button" class="go pv-tile" data-go="${t(s.id)}">${r?Pr(r,'alt="" loading="lazy"'):`<span class="mono">${t(Da(he(s.title)))}</span>`}<span class="t">${t(he(s.title).trim())}</span>${o?`<span class="m">${t(o)}</span>`:""}</button>`}).join("")+"</div></section>"},team(n){let e=_e,t=(n.team||[]).map(i=>ve.posts.find(s=>s.id===i)).filter(Boolean);return`<section class="pv-team"><h2 class="pv-h">${e(Me("who"))}</h2><div class="pv-faces">`+t.map(i=>{let s=Qo(i)&&i.published!==!1,r=s?"button":"div";return`<${r} ${s?`type="button" class="go pv-face" data-go="${e(i.id)}"`:'class="pv-face"'}>${i.thumb?Pr(i.thumb,'alt="" loading="lazy"'):`<span class="mono">${e(Da(he(i.title)))}</span>`}<span class="t">${e(he(i.title).trim())}</span>${he(i.subtitle).trim()?`<span class="m">${e(he(i.subtitle).trim())}</span>`:""}</${r}>`}).join("")+"</div>"+(n.credits?`<p class="pv-with"><i>${e(Me("with"))}</i> ${e(n.credits)}</p>`:"")+"</section>"},next(n){let e=H.data&&H.data.list||[],t=e.indexOf(n);if(e.length<2||t<0)return"";let i=e[(t+1)%e.length],s=Zs(i),r=_e;return`<button type="button" class="go pv-next" data-go="${r(i.id)}"><span class="l">${r(Me("nextProject"))} \u2192</span><span class="t">${r(he(i.title).trim())}</span>${s?Pr(s,'alt="" loading="lazy"'):""}</button>`},wire(){Zt.querySelector(".pv-x").addEventListener("click",()=>Ms()),Zt.querySelectorAll(".pv-row img").forEach(n=>{let e=()=>{n.naturalWidth&&(n.style.flexGrow=(n.naturalWidth/n.naturalHeight).toFixed(3))};n.addEventListener("load",e),n.complete&&e()}),Zt.querySelectorAll("img[data-vimeo]").forEach(n=>{let e=this.post&&this.post.thumb?bt(this.post.thumb):"";Q0(n.dataset.vimeo).then(t=>{t||e?n.src=t||e:n.remove()})}),Zt.querySelectorAll("img").forEach(n=>n.addEventListener("error",()=>{let e=n.closest("figure.pv-full, figure.pv-mat");e&&!e.classList.contains("pv-hero")?e.remove():n.style.visibility="hidden"})),Zt.querySelectorAll(".pv-lgrid img[data-src]").forEach(n=>oy(n.dataset.src).then(e=>{n.src=e.src,n.classList.toggle("raw",!!e.raw)})),Zt.querySelectorAll(".pv-embed").forEach(n=>n.querySelector(".play").addEventListener("click",()=>{let e=n.dataset.kind,t=n.dataset.id,i=document.createElement("iframe");i.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&playsinline=1&rel=0`:Nh(t,"autoplay=1&title=0&byline=0&portrait=0"),i.allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen; picture-in-picture; web-share",i.allowFullscreen=!0,i.title=e==="youtube"?"YouTube":"Vimeo",n.querySelector(".pv-cover").replaceWith(i)}))},close(){if(this.open){if(this.open=!1,Zt.querySelectorAll("video").forEach(n=>n.pause()),Zt.classList.remove("on"),document.body.classList.remove("pv-open"),setTimeout(()=>{this.open||(Zt.hidden=!0,Zt.innerHTML="")},420),this.keepHistory){this.keepHistory=!1;return}if(this.pushed){this.pushed=!1;try{history.back()}catch{}}}}};Zt.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Qs.keepHistory=!0,il(e.dataset.go),Qs.keepHistory=!1)});Zt.addEventListener("keydown",n=>{n.code==="Escape"&&Ms()});var Nd=new Map;function oy(n){if(Nd.has(n))return Nd.get(n);let e=Yi(n).then(t=>{let i=Math.min(1,480/Math.max(t.naturalWidth,t.naturalHeight)),s=Math.max(1,Math.round(t.naturalWidth*i)),r=Math.max(1,Math.round(t.naturalHeight*i)),o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(t,0,0,s,r);let l;try{l=a.getImageData(0,0,s,r)}catch{return{src:bt(n),raw:!0}}let c=l.data,h=S=>(.2126*c[S]+.7152*c[S+1]+.0722*c[S+2])/255,u=0,d=0,p=0,g=S=>{u++,c[S+3]<40?d++:p+=h(S)};for(let S=0;S<s;S++)g(S*4),g(((r-1)*s+S)*4);for(let S=0;S<r;S++)g(S*s*4),g((S*s+s-1)*4);let v=d>u*.5,m=v?0:p/Math.max(1,u-d),f=0,M=0;if(v){for(let S=0;S<c.length;S+=16)c[S+3]>128&&(f+=h(S),M++);f=M?f/M:0}let b=v?f<.5?1:0:m,P=Math.max(.25,Math.max(b,1-b));for(let S=0;S<c.length;S+=4){let F=c[S+3]/255,ie=h(S),le=(Math.max(c[S],c[S+1],c[S+2])-Math.min(c[S],c[S+1],c[S+2]))/255,B=Math.min(1,Math.max(Math.abs(ie-b),le*.8)/P);B=B<.08?0:Math.min(1,(B-.08)*1.35),c[S]=c[S+1]=c[S+2]=255,c[S+3]=Math.round(255*B*F)}a.putImageData(l,0,0);let I=s,C=r,N=-1,z=-1;for(let S=0;S<r;S++)for(let F=0;F<s;F++)c[(S*s+F)*4+3]>24&&(F<I&&(I=F),F>N&&(N=F),S<C&&(C=S),S>z&&(z=S));if(N<I)return{src:o.toDataURL("image/png")};let w=document.createElement("canvas");return w.width=N-I+1,w.height=z-C+1,w.getContext("2d").drawImage(o,-I,-C),{src:w.toDataURL("image/png")}}).catch(()=>({src:bt(n),raw:!0}));return Nd.set(n,e),e}function $c(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let o=[],a=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){a=null,d.textContent.trim()&&o.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){a=null;return}d.nodeType===3&&!d.textContent.trim()&&!a||(a||(a=document.createElement("p"),o.push(a)),a.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,p=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,p&&s.appendChild(p)};for(let d of o){let p=d.cloneNode(!0);if(s.appendChild(p),s.offsetHeight<=h())continue;if(s.removeChild(p),d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}if(d.nodeName==="UL"||d.nodeName==="OL"){let f=+(d.getAttribute("start")||1),M=d.cloneNode(!1),b=0;s.appendChild(M);for(let P of[...d.children]){let I=P.cloneNode(!0);M.appendChild(I),b++,!(s.offsetHeight<=h())&&(M.children.length===1&&[...s.children].every(C=>C===M||C.nodeName==="H3")||(M.removeChild(I),u(),M=d.cloneNode(!1),d.nodeName==="OL"&&M.setAttribute("start",String(f+b-1)),s.appendChild(M),M.appendChild(I)))}continue}let g=[];(function f(M,b){M.childNodes.forEach(P=>{P.nodeType===3?P.textContent.split(/(\s+)/).forEach(I=>I&&g.push({w:I,path:b})):f(P,[...b,P])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let m=({w:f,path:M})=>{let b=v;for(let P of M){let I=b.lastChild;(!I||I.nodeType!==1||I.dataset.src!==P.outerHTML)&&(I=P.cloneNode(!1),I.dataset.src=P.outerHTML,b.appendChild(I)),b=I}b.appendChild(document.createTextNode(f))};for(let f of g)if(m(f),s.offsetHeight>h()){let M=function b(P){return P.lastChild&&P.lastChild.nodeType===1?b(P.lastChild):P}(v);M.removeChild(M.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&m(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var fh=0,ys=null;en.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe, input, textarea, select, label, button")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(ys={id:n.pointerId,x:n.clientX,y:n.clientY},fh=n.clientX)});en.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(ys||Xe.dragging)){Wa();return}if(fh=n.clientX,!ys||n.pointerId!==ys.id||Xe.dragging)return;let e=n.clientX-ys.x,t=n.clientY-ys.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Xe.dragging=!0,Xe.xprev=ys.x,Xe.finalpos=Xe.x,Xe.vel=0;try{en.setPointerCapture(n.pointerId)}catch{}en.classList.add("grabbing")}});en.addEventListener("click",n=>{Xe.justDragged&&(n.preventDefault(),n.stopPropagation(),Xe.justDragged=!1)},!0);en.addEventListener("wheel",n=>{let e=n.target.closest&&n.target.closest(".folds");if(e&&Math.abs(n.deltaY)>Math.abs(n.deltaX)&&e.scrollHeight>e.clientHeight+1&&(n.deltaY<0?e.scrollTop>0:e.scrollTop+e.clientHeight<e.scrollHeight-1)||(n.preventDefault(),!Xe.open||Xe.dragging))return;let t=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,i=n.deltaMode===1?16:1;Xe.push(-t*i/(Xe.scale||1))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var Wa=()=>{Xe.dragging&&(Xe.justDragged=!0,setTimeout(()=>{Xe.justDragged=!1},0),Xe.finalpos+=(Xe.vel||0)*10),Xe.vel=0,ys=null,Xe.dragging=!1,en.classList.remove("grabbing")};en.addEventListener("pointerup",Wa);en.addEventListener("pointercancel",Wa);en.addEventListener("lostpointercapture",n=>{n.target===en&&Wa()});window.addEventListener("pointerup",()=>{(ys||Xe.dragging)&&Wa()});Nf.addEventListener("pointerdown",()=>Ms());en.addEventListener("click",n=>{if(!Xe.open||Xe.justDragged||n.target.closest(".pnl, a, button, iframe, video, input"))return;let e=en.querySelectorAll("#strip .pnl");if(!e.length)return;let t=e[0].getBoundingClientRect(),i=e[e.length-1].getBoundingClientRect();(n.clientX>i.right+4||n.clientX<t.left-4)&&Ms()});function nl(n=-1,e=0){w0(),n===-1&&(n=H.currentSection||0),Ci(),n!==H.currentSection&&Of(),H.currentSection=n,H.resetData(),H.selected=e,Rh(),wf(),Ih();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}rr("#"+H.section.def.id,he(H.section.def.name).trim())}function ly(){Ci(),H.selected=0,Rh(),Y0()}function cy(n){(n==="newer"?H.data.newer():H.data.older())&&ly()}function cS(n){H.data.changeCategory(n),X0.textContent=H.data.currentCatName,ly(),Ih()}function jo(n){Ci(),H.selected=n,No()}var qg=0;function il(n){let e=ve.posts.find(h=>h.id===n),t=e?Ut.findIndex(h=>h.def.id===e.section):-1;if(t<0||!bn)return;w0(),Ci();let i=t!==H.currentSection;i&&Of(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory(s.categoryList.some(h=>h.id==="")?"":s.tagOf(e));let o=s.list.indexOf(e);if(o<0)return;let a=o<s.first||o>=s.last;if(a){let h=s.per;s.first=Math.floor(o/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!a&&Ne){jo(l);return}H.selected=l,Rh(),wf(),Ih();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}rr("#"+H.section.def.id,he(H.section.def.name).trim());let c=++qg;Go(.5,()=>{c===qg&&H.data===s&&s.posts[l]===e&&jo(l)})}gs.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),il(e.dataset.go))});var hS=(n,e=H.section&&H.section.def)=>e?n&&e.open==="focus3d"&&((e.tags||[]).some(t=>t.page&&(n.tags||[]).includes(t.id))||!Oo(n))?"strip":e.open:"",Dh=()=>hS(H.data&&H.data.posts[H.selected]);function No(){if(!Ne||!H.data.posts[H.selected])return;let n=Dh();sl(null),kf(null),Ci(),H.postOpen=!0,(n==="strip"||n==="focus3d")&&lS()?(Qs.build(H.data.posts[H.selected],H.section.def.card),Yo.classList.add("hidden"),Zi=!1,nn.classList.remove("dragging"),jn=!0,ko(H.selected)):n==="strip"?(Nf.hidden=!1,Xe.build(H.data.posts[H.selected],H.section.def.card),Yo.classList.add("hidden"),Zi=!1,nn.classList.remove("dragging"),jn=!0,ko(H.selected)):(jn=!0,ko(H.selected),Ne.openPost3D()),Nr(),Cf(H.data.posts[H.selected])}function Ms(){H.postOpen&&(H.postOpen=!1,Qs.open?(Qs.close(),Yo.classList.remove("hidden")):Xe.open?(Xe.close(),Nf.hidden=!0,Yo.classList.remove("hidden")):Ne&&Ne.closePost3D(),Nr(),Cf(null))}function Ci(){H.postOpen&&Ms()}function uS(){b0(!oe.animationMode),K0(),Ne&&Ne.resetPostPosition(),jn=!0}var ws=oe.cameraDistanceProportion,nr=()=>((Es()||{}).def||{}).layout==="map",dS=()=>nr()?60:oe.cameraZoomMin;function Df(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),hy())}function Uf(){oe.cameraDistanceProportion>dS()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),hy())}function hy(){(nr()||ci())&&(H.cameraY=Ha()),$0()}function Of(){oe.cameraDistanceProportion!==ws&&(oe.cameraDistanceProportion=ws,Lh())}var Xg=!1;function uy(n){if(!bn)return;Xg||(Xg=!0,ef(),J0=setTimeout(dh,6e3));let e=H.postOpen&&Xe.open,t=H.postOpen&&!Xe.open;switch(n.code){case"ArrowLeft":ms("ArrowLeft"),e?Xe.action("LEFT"):(Ci(),Cd("PREVIOUS"),t&&No());break;case"ArrowRight":ms("ArrowRight"),e?Xe.action("RIGHT"):(Ci(),Cd("NEXT"),t&&No());break;case"ArrowUp":ms("ArrowUp"),e||Dw();break;case"ArrowDown":ms("ArrowDown"),e||Uw();break;case"Tab":ms("Tab"),e?(Ms(),Cd("NEXT"),No()):nl((H.currentSection+1)%Ut.length);break;case"KeyK":ar.classList.contains("open")?dh():ef();break;case"KeyA":ms("KeyA"),uS();break;case"Equal":case"NumpadAdd":ms("Equal"),e||Uf();break;case"Minus":case"NumpadSubtract":ms("Minus"),e||Df();break;case"Space":ms("Space"),Ne&&Ne.checkPostSelected(),H.postOpen?Ms():No();break;case"Escape":Ci();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Mt||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||n.target.closest&&n.target.closest("input, textarea, select, [contenteditable]")||uy(n)});var Yg=new Tc,jg=new it;function ph(n,e){if(!Ss||!Ne)return null;jg.set(n/zt*2-1,-(e/Ot)*2+1),Yg.setFromCamera(jg,Ln);let t=Yg.intersectObjects([...Es().blockers,...Ne.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:fS(n,e)||(t?t.object.userData:null)}var qc=new U;function fS(n,e){if(!Ne||!Ne.net)return null;let t=null,i=14;for(let s of Ne.net.hits){if(!s.visible)continue;s.getWorldPosition(qc).project(Ln);let r=(qc.x+1)/2*zt-n,o=(1-qc.y)/2*Ot-e,a=Math.hypot(r,o);a<i&&qc.z<1&&(i=a,t=s.userData)}return t}var Fn=null,Ti=null,tf=0,nf=0;nn.addEventListener("pointerdown",n=>{if(!bn||Fn!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Xi.size>0)return;Js=tf=n.clientX,Ks=nf=n.clientY;let e=ph(n.clientX,n.clientY);Ci(),Ti=e&&e.post?e:null,Ti&&Ti.face==="back"&&(Ti.post.view.focus(Ti.post.id_),jn=!0),Fn=n.pointerId,nn.setPointerCapture(n.pointerId),nn.classList.add("dragging"),eh=Js,th=Ks,jn=!1,Zi=!0});function kr(n,e=!1){if(n.pointerId===Fn){if(Fn=null,nn.classList.remove("dragging"),Zi&&(jn=!0,Zi=!1,ci()&&(H.degreeCamera=Mf(H.degreeCamera),H.cameraY=Ha())),e){Ti=null;return}if(Ti&&Ti.face==="front"&&Math.hypot(n.clientX-tf,n.clientY-nf)<6){let t=ph(n.clientX,n.clientY);t&&t.post===Ti.post&&jo(t.post.id_)}else if(!Ti&&Math.hypot(n.clientX-tf,n.clientY-nf)<6){let t=ph(n.clientX,n.clientY);t&&t.netNode?H0(t.netNode,n.clientX,n.clientY):Eh()}Ti=null}}nn.addEventListener("pointerup",kr);nn.addEventListener("pointercancel",n=>kr(n,!0));nn.addEventListener("lostpointercapture",n=>{n.pointerId===Fn&&kr(n,!0)});window.addEventListener("pointerup",n=>{Fn!==null&&n.pointerId===Fn&&n.target!==nn&&kr(n,!0)});window.addEventListener("blur",()=>{Fn!==null&&kr({pointerId:Fn},!0),Wa()});var Dd=!1,Ra=null,Ua=null,Do=null;function kf(n){Do!==n&&(Do&&Do.hoverBack(!1),Do=n,n&&n.hoverBack(!0))}var dy=()=>Mh()&&bn&&Ne&&["carousel","spiral"].includes(Ne.def.layout);function Bf(){return H.postOpen||!Ne?null:Ua&&Ua.view===Ne?Ua:dy()?(Ne.checkPostSelected(),Ne.postViews[H.selected]||null):null}var pS=0;function mS(){++pS%6===0&&dy()&&sl(Bf())}function sl(n){Ra!==n&&(Ra&&Ra.hover(!1),Ra=n,n&&n.hover(!0))}nn.addEventListener("pointerleave",()=>{Ua=null,sl(Bf()),kf(null)});nn.addEventListener("pointermove",n=>{if(Fn!==null&&n.pointerId===Fn&&n.pointerType==="mouse"&&n.buttons===0){kr(n,!0);return}Fn!==null&&n.pointerId!==Fn||(Js=n.clientX,Ks=n.clientY,Fn===null&&n.pointerType==="mouse"&&!Dd&&(Dd=!0,requestAnimationFrame(()=>{Dd=!1;let e=ph(Js,Ks);nn.classList.toggle("hover",!!(e&&e.post)),Ua=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,sl(Bf()),kf(e&&e.post&&e.face==="back"&&e.post.bhi&&!H.postOpen?e.post:null),e&&e.netNode&&!H.postOpen?H0(e.netNode,Js,Ks):Eh()})))});var Zg=0,Xi=new Map,La=null,fy=()=>{let[n,e]=[...Xi.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!Mt||Xe.open||!Xi.size&&n.target!==nn||(Xi.set(n.pointerId,{x:n.clientX,y:n.clientY}),Xi.size===2&&(Fn!==null&&kr({pointerId:Fn},!0),La={last:fy()}))});window.addEventListener("pointermove",n=>{if(!Xi.has(n.pointerId)||(Xi.set(n.pointerId,{x:n.clientX,y:n.clientY}),!La||Xi.size<2||!bn))return;let e=fy(),t=e/La.last;t>1.15?(Uf(),La.last=e):t<1/1.15&&(Df(),La.last=e)});var gS=n=>{Xi.delete(n.pointerId),Xi.size<2&&(La=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,gS));nn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!bn||e-Zg<220||!n.deltaY||e-Z0<1400||(Zg=e,n.deltaY<0?Uf():Df())},{passive:!1});window.addEventListener("resize",()=>{let n=ji(),e=Ss&&Ne?ti||tl():null;q0(),$0(),Nr(),W0(e),ji()!==n&&Ne&&Ne.retexture(),My(),sf(),Xe.open&&(Sf(),clearTimeout(Xe.relayout),Xe.relayout=setTimeout(()=>{Xe.open&&Xe.post&&JSON.stringify(Ta("project"))!==Xe.geomKey&&(Xe.build(Xe.post,H.section.def.card),Nr())},250))});function Jg(){if(ve.settings.negativeToggle!==!1){if(_n=!_n,qo()&&_h(),!St)try{localStorage.setItem("hc-neg",(_n?"1":"0")+(qo()?"@"+Ir:""))}catch{}E0()}}(()=>{let n=document.getElementById("logo");if(!n)return;let e=0,t=0,i=Math.atan2(.38,-1),s=i,r=2.3,o=i,a=2.3,l=()=>{let d=n.offsetWidth/2;if(!d)return;if(a>2.02){n.style.webkitMaskImage=n.style.maskImage="";return}let p=d+Math.cos(o)*a*d,g=d+Math.sin(o)*a*d,v=Math.max(0,Math.min(1,1-a/.28)),m=d-v*Math.max(2,d*.085);n.style.webkitMaskImage=n.style.maskImage=`radial-gradient(circle ${d}px at ${p.toFixed(2)}px ${g.toFixed(2)}px, transparent ${(m-.6).toFixed(2)}px, #000 ${(m+.6).toFixed(2)}px)`},c=d=>{o=s=i,a=r=d,l()},h=()=>{let d=n.getBoundingClientRect(),p=d.width/2;if(!p)return;let g=e-(d.left+p),v=t-(d.top+p),m=Math.hypot(g,v);m>.5&&(i=Math.atan2(v,g));let f=m/p,M=Math.max(0,Math.min(1,(5.5-f)/4.5)),b=M*M*(3-2*M);c(f<=1?.62*f:.62+1.68*(1-b))},u=!1;window.addEventListener("pointermove",d=>{d.pointerType!=="mouse"||!n.classList.contains("toggle")||(e=d.clientX,t=d.clientY,u||(u=!0,requestAnimationFrame(()=>{u=!1,h()})))},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>c(2.3)),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&(i=Math.atan2(.38,-1),c(.55))}),n.addEventListener("blur",()=>c(2.3))})();["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Jg),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Jg())}))});var de=null,Ff=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function yS(){let n=(ve.settings.showreel||"").trim();if(!de){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i class="tri"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),de={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>yy()),de.x.addEventListener("click",Xc),i.querySelector(".scrim").addEventListener("click",Xc),de.snd.addEventListener("click",()=>py(!de.muted)),window.addEventListener("keydown",s=>{if(de.open){if(s.code==="Escape")s.preventDefault(),Xc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(o=>o.offsetParent);if(r.length){let o=r.indexOf(document.activeElement);s.shiftKey&&o<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&o===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!de.player||s.source!==de.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==de.muted&&(de.muted=r.info.muted,Zo())})}de.btn.hidden=!n,de.btn.setAttribute("aria-label","Showreel"),de.x.setAttribute("aria-label",Me("close")),n!==de.src&&(de.open&&Xc(!0),de.src=n,de.kind=n?Dr(n):"",de.vid.innerHTML="",de.player=null);let e=de.kind==="youtube"?`https://www.youtube.com/watch?v=${Va(n)}`:de.kind==="vimeo"?`https://vimeo.com/${Ga(n)}`:"";de.ext.hidden=!e,e&&(de.ext.href=e,de.ext.textContent=(de.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Zo()}function Zo(){de&&(de.snd.innerHTML=Ff(!de.muted)+`<span>${Me(de.muted?"soundOn":"soundOff")}</span>`,de.snd.setAttribute("aria-pressed",String(!de.muted)))}function mh(n,e=[]){let t=de.player;if(!(!t||!t.contentWindow)){if(de.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(de.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function py(n){de.muted=n,Zo(),de.kind==="video"?de.player&&(de.player.muted=n,n||(de.player.volume=1)):(mh(n?"mute":"unMute"),n||mh("setVolume",[100]))}function vS(){if(!(!de||!de.src||de.open)){if(de.open=!0,de.last=document.activeElement,de.player)de.kind==="video"?de.player.play().catch(()=>{}):mh("playVideo");else{let n=de.src,e=de.kind;if(e==="video"){let t=document.createElement("video");t.src=bt(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==de.muted&&(de.muted=t.muted,Zo())}),de.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Va(n):Ga(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:Nh(i,"autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"),t.allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen; picture-in-picture; web-share",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),de.muted||py(!1)}),de.player=t}else{let t=document.createElement("img");t.src=bt(n),t.alt="",de.player=t}de.muted=!0,Zo(),de.vid.appendChild(de.player)}de.snd.hidden=!/^(youtube|vimeo|video)$/.test(de.kind),de.box.hidden=!1,de.btn.setAttribute("aria-expanded","true"),de.box.offsetWidth,de.box.classList.add("on"),setTimeout(()=>{de.open&&de.x.focus({preventScroll:!0})},60)}}function Xc(n){!de||!de.open||(de.open=!1,de.btn.setAttribute("aria-expanded","false"),de.kind==="video"?de.player&&de.player.pause():mh("pauseVideo"),de.box.classList.remove("on"),clearTimeout(de.t),de.t=setTimeout(()=>{de.open||(de.box.hidden=!0)},n===!0?0:650),de.last&&de.last.focus&&n!==!0&&de.last.focus({preventScroll:!0}))}var y=null,Pa=["white","grey","accent","source"],my=8;function xS(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},ve.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((o,a)=>o+a,0);for(let o=0;o<i.length;o++)if((r-=s[o])<0)return i[o];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(Pa,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function _S(){if(y)return;let n=document.getElementById("home-band");if(!n)return;let e=xS(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>sf()).observe(t),y={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,round:e.shape!=="square",color:Pa.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(my,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},y.octx=y.off.getContext("2d",{willReadFrequently:!0}),y.gl=VS(t),y.gl&&(y.interval=1e3/60),y.raw=document.createElement("canvas"),y.rctx=y.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:bt(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),y.video=a}else{let a=m=>m&&!/^(https?:|data:)/.test(m)&&/\.(jpe?g|png|webp)$/i.test(m),l=ve.sections.find(m=>m.visible&&m.card==="image"&&!m.skills)||{},c=l.defaultTag||"featured",h=m=>Math.max(0,...(String(m.date||"").match(/\d{4}/g)||[]).map(Number)),u=m=>(m.media||[]).map(f=>f&&f.src).filter(f=>a(f)&&f!==m.thumb),d=ve.posts.filter(m=>m.published!==!1&&m.section===l.id&&(u(m).length||a(m.thumb))).map(m=>({p:m,k:((m.tags||[]).includes(c)?1e4:0)+h(m)+Math.random()*.5})).sort((m,f)=>f.k-m.k).slice(0,10).map(m=>m.p),p=m=>/screen|capture|schema|sch[eé]ma|plan|diagram|logo|affiche|poster/i.test(m.split("/").pop()),g=m=>{let f=u(m),M=f.filter(b=>!p(b)).length?f.filter(b=>!p(b)):f;return M.length?M[Math.floor(Math.random()*M.length)]:m.thumb},v=[...new Set(d.map(g))].sort(()=>Math.random()-.5);y.pics=v.map(m=>{let f=new Image,M=mf(m);return f.decoding="async",M!==m&&(f.onerror=()=>{f.onerror=null,f.src=bt(m)}),f.src=bt(M),f})}if(bS(e.controls!==!1),al()&&Or()&&!/[?&]p=/.test(location.search)&&!ll.matches&&!(St&&St.start)&&!document.getElementById("hc-intro")){let a=performance.now(),l=()=>{!Mt&&!y.reelOn&&!y.cam&&!y.userReel&&!y.reelRefused&&Or()&&ol(!0)},c=setInterval(()=>{(Ur||performance.now()-a>6e3)&&(clearInterval(c),setTimeout(l,500))},150)}let r=document.getElementById("home-langs"),o=document.getElementById("home-ctl");r&&o?o.insertBefore(r,document.getElementById("home-about")):r&&document.getElementById("home").appendChild(r),sf()}var Oa={about:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 8.8v5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="10" cy="6.3" r="1.05" fill="currentColor"/></svg>',video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function bS(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(y&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    ${n?"":`<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${Oa.shot}<span></span></button>`}
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden><span class="lbl"></span><b class="ic">?</b></button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button><button type="button" id="home-snd" aria-pressed="false" hidden><b class="ic"></b></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${Oa.faders}</b><span class="lbl"></span></button>`:"")+`<button type="button" id="home-about" aria-expanded="false" hidden><b class="ic">${Oa.about}</b></button><figure id="home-pitch" hidden><img alt="" decoding="async"><figcaption><p></p></figcaption></figure>`;let o=document.getElementById("home-band"),a=o.querySelector(".lg");a?a.after(r):o.appendChild(r),n&&AS(e,i,r),DS(e),r.querySelector("#home-reel").addEventListener("click",()=>{y.reelOn?xi():yy()}),r.querySelector("#home-snd").addEventListener("click",()=>Hf(!y.sound));let l=r.querySelector("#home-about"),c=r.querySelector("#home-pitch"),h=u=>{if(u){gh(c),c.hidden=!1,c.offsetWidth;let d=r.getBoundingClientRect().top,p=window.innerHeight-20-d-c.offsetHeight;c.style.setProperty("--y",Math.max(-d+20,Math.min(l.offsetTop,p))+"px")}c.classList.toggle("on",u),l.classList.toggle("on",u),l.setAttribute("aria-expanded",String(u))};l.addEventListener("click",()=>Ay()),e.addEventListener("pointerdown",u=>{if(c.classList.contains("on")&&!u.target.closest("#home-about")&&h(!1),!u.target.closest("#home-langs")){let d=document.getElementById("home-langs");d&&d.classList.remove("open")}}),document.querySelectorAll("#hv-src button").forEach(u=>u.addEventListener("click",()=>{u.dataset.src==="cam"&&!y.cam?_y():u.dataset.src==="video"&&y.cam&&Uh()})),document.getElementById("hv-shot").addEventListener("click",ES),document.getElementById("hv-words").addEventListener("keydown",u=>{u.stopPropagation(),u.key==="Enter"&&(u.preventDefault(),u.target.blur())}),s.querySelector("#story-btn").addEventListener("click",()=>vh()),yh(),rl()}function rl(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(y&&y.cam);document.querySelectorAll("#hv-src button").forEach(v=>{let m=v.dataset.src==="cam"===e;v.setAttribute("aria-pressed",String(m)),v.classList.toggle("on",m),v.textContent=Me(v.dataset.src==="cam"?"hv_cam":y&&y.video?"hv_video":"hv_slides")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",Me("hv_src"));let i=!!(y&&y.panel),s=document.getElementById("hv-words");s.hidden=!i&&!e,s.placeholder=Me("hv_words"),s.setAttribute("aria-label",Me("hv_words"));let r=document.getElementById("hv-shot");r.hidden=!i&&!e,r.setAttribute("aria-label",Me("hv_shot")),r.querySelector("span").textContent=Me(i?"hv_shot":"photo");let o=document.querySelector("#hv-panel .priv");o&&(o.textContent=Me("hv_private"));let a=n.querySelector("#story-btn");a.setAttribute("aria-label",Me("story")),a.querySelector(".lbl").textContent=Me("story");let l=document.getElementById("home-about"),c=document.getElementById("home-pitch"),h=zf();l&&(l.hidden=!h,gh(c,!1),l.setAttribute("aria-label",h));let u=document.querySelector("#hv-toggle .lbl");u&&(u.textContent=Me("params"));let d=document.getElementById("home-reel");d.hidden=!(ve.settings.showreel||"").trim();let p=!!(y&&y.reelOn);d.setAttribute("aria-pressed",String(p)),d.classList.toggle("on",p),d.setAttribute("aria-label",p?Me("stop")+" : Showreel":"Showreel"),d.querySelector("span").textContent=p?Me("stop"):"Showreel";let g=document.getElementById("home-snd");if(g&&!d._rwObs&&window.ResizeObserver&&(d._rwObs=new ResizeObserver(()=>{d.offsetWidth&&g.style.setProperty("--rw",d.offsetWidth+"px")}),d._rwObs.observe(d)),g){g.hidden=!p,p&&requestAnimationFrame(()=>g.style.setProperty("--rw",d.offsetWidth+"px"));let v=!!(y&&y.sound);g.querySelector(".ic").innerHTML=Ff(v),g.classList.toggle("on",v),g.setAttribute("aria-pressed",String(v)),g.setAttribute("aria-label",Me(v?"soundOff":"soundOn")),g.title=Me(v?"soundOff":"soundOn")}}var Kg=0,zf=()=>he((ve.settings.home||{}).sub||{}).replace(/\s*\n\s*/g," ").trim();function MS(){let n=ve.sections.find(s=>s.visible&&s.card==="image"&&!s.skills)||{},e=n.defaultTag,t=s=>s.published!==!1&&s.section===n.id&&s.thumb&&/\.(jpe?g|png|webp)$/i.test(s.thumb),i=ve.posts.filter(s=>t(s)&&(!e||(s.tags||[]).includes(e)));return(i.length?i:ve.posts.filter(t)).map(s=>bt(s.thumb))}function gh(n,e=!0){if(n.querySelector("p").textContent=zf(),!e)return;let t=MS(),i=n.querySelector("img");if(t.length){let s=t[Math.floor(Math.random()*t.length)];t.length>1&&s===n.dataset.last&&(s=t[(t.indexOf(s)+1)%t.length]),n.dataset.last=s,i.src=s,i.hidden=!1}else i.hidden=!0}var $t=null,ln=null;function wS(){if(!$t){$t=document.createElement("button"),$t.type="button",$t.id="about-btn",$t.className="ui",$t.setAttribute("aria-expanded","false"),$t.innerHTML=`<b class="ic">${Oa.about}</b>`,ln=document.createElement("figure"),ln.id="about-card",ln.className="ui",ln.hidden=!0,ln.innerHTML='<img alt="" decoding="async"><figcaption><p></p></figcaption>',document.body.append($t,ln);let e=t=>{t&&(gh(ln),ln.hidden=!1,Jo(),ln.offsetWidth),ln.classList.toggle("on",t),$t.classList.toggle("on",t),$t.setAttribute("aria-expanded",String(t))};$t.addEventListener("click",()=>Ay())}let n=zf();$t.hidden=!n,$t.setAttribute("aria-label",n),gh(ln,!1),Jo()}function Jo(){if(!$t)return;let n=de&&de.btn&&!de.btn.hidden?de.btn:null,e=document.getElementById("lang-sq"),t=e&&!e.hidden;if(!Hi()){let s=n?n.offsetTop:Math.round(cn.offsetTop+cn.offsetHeight+16),r=n?n.offsetLeft+n.offsetWidth+8:cn.offsetLeft+2;$t.style.top=s+"px",$t.style.left=r+"px",$t.hidden||(r+=$t.offsetWidth+8),t&&(e.style.top=s+"px",e.style.left=r+"px"),ln.hidden||(ln.style.left=cn.offsetLeft+2+"px",ln.style.top=s+$t.offsetHeight+8+"px");return}let i=n?n.offsetTop+n.offsetHeight+8:Math.round(cn.offsetTop+cn.offsetHeight+(Hi()?26:16));if(t&&(e.style.top=i+"px",e.style.left=cn.offsetLeft+2+"px",i+=$t.offsetHeight+8),$t.style.top=i+"px",$t.style.left=cn.offsetLeft+2+"px",!ln.hidden){let s=Hi(),r=cn.offsetLeft+2;if(s){let o=Math.max(16,Math.min(i,Ot-20-ln.offsetHeight));ln.style.left=r+$t.offsetWidth+12+"px",ln.style.top=o+"px"}else ln.style.left=r+"px",ln.style.top=i+$t.offsetHeight+8+"px"}}function ka(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(Kg),t.textContent=n||"",t.hidden=!n,n&&e&&(Kg=setTimeout(()=>{t.hidden=!0},e)))}function SS(n,e,t,i){let s=document.querySelector("#home-band .hv-shade");(s?getComputedStyle(s).backgroundImage:"").split(/,\s*(?=linear-gradient\()/).forEach(o=>{let a=/^linear-gradient\((.*)\)$/.exec(o.trim());if(!a)return;let l=a[1],c=180,h=/^(-?[\d.]+)deg\s*,\s*/.exec(l),u=/^to (top|bottom|left|right)\s*,\s*/.exec(l);if(h?(c=(+h[1]%360+360)%360,l=l.slice(h[0].length)):u&&(c={top:0,right:90,bottom:180,left:270}[u[1]],l=l.slice(u[0].length)),c%90)return;let d=[...l.matchAll(/(rgba?\([^)]*\))\s*(-?[\d.]+)(px|%)?/g)];if(!d.length)return;let p=c%180?e:t,g={0:[0,t,0,0],90:[0,0,e,0],180:[0,0,0,t],270:[e,0,0,0]}[c],v=n.createLinearGradient(...g);d.forEach(m=>{let f=m[3]==="%"?+m[2]/100*p:+m[2]*i;v.addColorStop(Math.max(0,Math.min(1,f/p)),m[1])}),n.fillStyle=v,n.fillRect(0,0,e,t)})}async function ES(){if(!y||y.cam&&y.cam.video.readyState<2)return;let n=y.frozenAt;if(!n||!n.cols||!y.W)return;let e=y.fmt==="rs",t,i,s,r=0,o=0;if(e){t=1080,i=1350;let ge=y.W,Ke=y.H;ge/Ke>t/i?ge=Ke*t/i:Ke=ge*i/t,s=t/ge,r=(y.W-ge)/2,o=(y.H-Ke)/2}else{let ge=Math.max(y.W,y.H);s=Math.min(3e3/ge,Math.max(2,2e3/ge)),t=Math.round(y.W*s),i=Math.round(y.H*s)}let a=y.W*s,l=y.H*s,c=document.createElement("canvas");c.width=t,c.height=i;let h=c.getContext("2d");h.fillStyle="#0b0b0b",h.fillRect(0,0,t,i);let u=document.getElementById("home-band");u.classList.remove("flash"),u.offsetWidth,u.classList.add("flash");let d={ctx:y.ctx,W:y.W,H:y.H,lo:y.lo,hi:y.hi};h.save(),h.translate(-r*s,-o*s);try{y.ctx=h,y.W=a,y.H=l,n.d?by(n.d,n.cols,n.rows,n.cell*s):af(n.cols,n.rows,Math.round(n.cell*s))}finally{y.ctx=d.ctx,y.W=d.W,y.H=d.H,y.lo=d.lo,y.hi=d.hi}SS(h,a,l,s),h.restore();let p=ve.settings,g=ei(p,"title"),v=Math.min(t,i)/1080,m=document.getElementById("hv-words"),f=(m?m.value:"").replace(/\s+/g," ").trim().toUpperCase(),M=document.querySelector("#home-slogan > .wm"),b=[...document.querySelectorAll("#home-slogan .tls > span")],P=y.cv.getBoundingClientRect(),I=M?M.getBoundingClientRect():P,C=e?72*v-(I.left-P.left-r)*s:0,N=e?60*v-(I.top-P.top-o)*s:0,z=ge=>(ge-P.left-r)*s+C,w=ge=>(ge-P.top-o)*s+N,S=(ge,Ke)=>`${ge.fontStyle==="italic"?"italic ":""}${ge.fontWeight} ${Ke}px ${ge.fontFamily}`,F=72*v,ie=0,le=0;if(M){try{await document.fonts.load(S(getComputedStyle(M),96))}catch{}let ge=q=>{let Kt=getComputedStyle(q),He=parseFloat(Kt.fontSize),tt=parseFloat(Kt.lineHeight)||He*1.2,Ue=q.getBoundingClientRect();h.font=S(Kt,100);let Et=h.measureText(q.textContent),rt=(Et.fontBoundingBoxAscent||80)*He/100,D=(Et.fontBoundingBoxDescent||20)*He/100,T=Ue.top+(tt-rt-D)/2+rt;return h.font=S(Kt,He*s),h.fillStyle="#fff",h.textBaseline="alphabetic",h.fillText(q.textContent,z(Ue.left),w(T)),{base:T,asc:(Et.actualBoundingBoxAscent||70)*He/100,left:Ue.left}},Ke=ge(M);b.forEach(ge),F=z(Ke.left),le=Ke.asc*s,ie=w(Ke.base)-le/2}let B=Math.max(le,40*v)*.55;h.fillStyle=p.accent||"#ffcc00",h.beginPath(),h.arc(t-F-B,ie||70*v+B,B,0,Math.PI*2),h.fill();let $=Math.min(t-2*F,1300*v),O=Math.round(84*v),ee=[],j=ge=>`${g.italic?"italic ":""}${g.weight||600} ${ge}px ${g.css}`;try{await document.fonts.load(j(80))}catch{}let W=ge=>{"letterSpacing"in h&&(h.letterSpacing=Math.round((+g.ls||-.02)*ge)+"px")};for(;O>=36*v&&(h.font=j(O),W(O),ee=Jt(h,f,$),!(ee.length<=4));O-=4);ee=f?ee.slice(0,4):[];let Q=Math.round(38*v),ne=i-64*v-Q,ue=Math.round(O*1.02),V=ne-64*v-ee.length*ue;if(ee.length){let ge=h.createLinearGradient(0,V-160*v,0,i);ge.addColorStop(0,"rgba(11,11,11,0)"),ge.addColorStop(.35,"rgba(11,11,11,.75)"),ge.addColorStop(1,"rgba(11,11,11,.9)"),h.fillStyle=ge,h.fillRect(0,V-160*v,t,i-V+160*v),h.fillStyle=p.accent||"#ffcc00",h.fillRect(F,V-34*v,46*v,6*v)}h.textBaseline="top",h.fillStyle="#fff",h.font=j(O),W(O),ee.forEach((ge,Ke)=>h.fillText(ge,F-O*.03,V+Ke*ue)),"letterSpacing"in h&&(h.letterSpacing="0px");let X=ei(p,"subtitle"),se=ge=>`${X.italic!==!1?"italic ":""}${X.weight||400} ${ge}px ${X.css}`;try{await document.fonts.load(se(38))}catch{}h.font=se(Q),h.fillStyle="#fff",h.textBaseline="alphabetic",h.fillText("hand-coded.net",F,ne+Q);let re=await new Promise(ge=>c.toBlob(ge,"image/jpeg",.92));if(!re)return;rr("photo-souvenir","Photo souvenir",!0);let ce="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",Ce=typeof File=="function"?new File([re],ce,{type:"image/jpeg"}):null;if(Ce&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[Ce]}))try{await navigator.share({files:[Ce],title:ve.settings.name||"Hand Coded"}),ka(Me("hv_shotDone"),2500);return}catch(ge){if(ge&&ge.name==="AbortError")return}let Be=document.createElement("a");Be.href=URL.createObjectURL(re),Be.download=ce,document.body.appendChild(Be),Be.click(),setTimeout(()=>{URL.revokeObjectURL(Be.href),Be.remove()},2e3),ka(Me("hv_shotDone"),2500)}function yh(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(ve.settings.home||{}).story||{},i=he(t.title||{}).trim(),s=Sr(he(t.body||{})),r=!t.off&&!!(i||Er(s).join("").trim());n.hidden=!r;let o=document.getElementById("hc-story");if(!r){o&&o.remove();return}o||(o=document.createElement("section"),o.id="hc-story",o.hidden=!0,e.appendChild(o)),o.setAttribute("aria-label",i||Me("story"));let a=(t.images||[]).filter(Boolean);o.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${_e(Me("close"))}">\xD7</button><h2>${_e(i||Me("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${_e(t.link)}" target="_blank" rel="noopener">${_e(he(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(a.length?`<div class="shots scroll-x">${a.map(l=>`<a href="${_e(bt(l))}" target="_blank" rel="noopener"><img src="${_e(bt(l))}" alt="" loading="lazy" draggable="false" onerror="this.parentNode.remove()"></a>`).join("")}</div>`:"")+"</div></div>",o.querySelector(".x").addEventListener("click",()=>vh(!1)),yh.out||(yh.out=!0,document.addEventListener("pointerdown",l=>{let c=document.getElementById("hc-story");c&&c.classList.contains("on")&&!l.target.closest("#hc-story, #story-btn")&&vh(!1)}))}var Qg=0;function vh(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(Qg),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),Qg=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),vh(!1))},!0);function sf(){if(!y)return;let n=y.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1),t=Math.max(1,Math.round(n.width)),i=Math.max(1,Math.round(n.height));if(!(n.width<2||n.height<2||t===y.W&&i===y.H&&e===y.dpr)&&(y.W=t,y.H=i,y.dpr=e,y.cv.width=y.W*e,y.cv.height=y.H*e,y.ctx.setTransform(e,0,0,e,0,0),y.gl&&(y.gl.c.width=y.W*e,y.gl.c.height=y.H*e,y.gl.dpr=e),y.reelOn)){let s=vy();if(y.rp&&y.rp.key!==s.kind+"|"+s.src){let r=!y.userReel;xi(),ol(r)}else Vf()}}var rf=[{p:"cell",min:3,max:40,step:1,get:()=>y.cell,set:n=>{y.cell=n},show:()=>Math.max(y.cell,y.floor)+"px"+(y.floor>y.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(y.fill*100),set:n=>{y.fill=n/100},show:()=>Math.round(y.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>y.gamma,set:n=>{y.gamma=n},show:()=>"\xD7"+y.gamma.toFixed(1)},{p:"delay",min:1,max:my,step:1,get:()=>y.delay,set:n=>{y.delay=n},show:()=>of()+(of()<y.delay?"*":"")}],TS=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function AS(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span><button type="button" class="more" aria-expanded="false">+</button></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div><p class="priv"></p>`:"")+rf.map(c=>`<label class="rw"><span class="lb" data-k="${c.p}"></span><input type="range" data-p="${c.p}" min="${c.min}" max="${c.max}" step="${c.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${Pa.map(c=>`<button type="button" data-c="${c}"><i class="c-${c}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div><div class="pic"><div class="seg fmt" role="group"><button type="button" data-fmt="big" data-k="fmtBig"></button><button type="button" data-fmt="rs" data-k="fmtRs"></button></div><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${Oa.shot}<span></span></button></div>`,t.appendChild(i);try{y.fmt=localStorage.getItem("hc-photo-fmt")==="rs"?"rs":"big"}catch{y.fmt="big"}i.querySelectorAll("[data-fmt]").forEach(c=>c.addEventListener("click",()=>{y.fmt=c.dataset.fmt;try{localStorage.setItem("hc-photo-fmt",y.fmt)}catch{}Yn()}));let s=document.getElementById("hv-toggle");y.panel=i,y.toggle=s;let r=0,o=c=>{clearTimeout(r),c?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(c)),s.classList.toggle("on",c),n.classList.toggle("hv-open",c),c&&Yn()};y.setOpen=o,s.addEventListener("click",()=>{if(y.reelOn){xi(),o(!0);return}o(!i.classList.contains("open"))});let a=i.querySelector(".more");a.addEventListener("click",()=>{let c=!i.classList.contains("more-on");i.classList.toggle("more-on",c),a.setAttribute("aria-expanded",String(c)),a.textContent=c?"\u2212":"+"}),n.addEventListener("pointerdown",c=>{i.classList.contains("open")&&!c.target.closest("#hv-panel, #hv-toggle, #hv-src, #hv-consent")&&o(!1)}),i.querySelectorAll("input[data-p]").forEach(c=>{let h=rf.find(u=>u.p===c.dataset.p);c.addEventListener("input",()=>{h.set(+c.value),Yn()})});let l=c=>{if(c==="color")y.color=Pa[(Pa.indexOf(y.color)+1)%Pa.length];else if(c==="invert")y.mode=y.mode==="light"?"dark":"light";else if(c==="sound"){Hf(!y.sound);return}else if(c==="cam"){if(!document.getElementById("hv-src"))return;y.cam?Uh():_y()}Yn()};i.querySelectorAll("[data-c]").forEach(c=>c.addEventListener("click",()=>{y.color=c.dataset.c,Yn()})),i.querySelectorAll(".tgl").forEach(c=>c.addEventListener("click",()=>l(c.dataset.a))),window.addEventListener("keydown",c=>{if(Mt||c.ctrlKey||c.metaKey||c.altKey||de&&de.open||c.target&&c.target.id==="hv-words")return;if(c.code==="Escape"&&i.classList.contains("open")){o(!1),s.focus({preventScroll:!0});return}if(c.code==="Escape"&&y.reelOn){xi();return}let h={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[c.code];if(h){if(c.preventDefault(),h==="panel"){o(!i.classList.contains("open"));return}y.touched||(y.touched=!0,o(!0)),l(h)}}),Yn()}function Yn(){if(rl(),!y||!y.panel)return;let n=y.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=Me("hv_"+t.dataset.k)}),y.toggle.setAttribute("aria-label",Me("hv_panel")),y.toggle.title=Me("hv_panel")+" (K)",rf.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),TS(i),i.setAttribute("aria-label",Me("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-fmt]").forEach(t=>{let i=t.dataset.fmt===(y.fmt||"big");t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i)}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===y.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",Me("hv_color")+" "+Me("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",y.mode==="dark"),n.classList.toggle("cam",!!y.cam),n.querySelector(".more").setAttribute("aria-label",Me("params")),gy()}function gy(){let n=y&&y.panel&&y.panel.querySelector(".stat");if(!n)return;let e=Math.max(y.cell,y.floor);n.textContent=`${Math.ceil(y.W/e)}\xD7${Math.ceil(y.H/e)} \xB7 ${Math.round(1e3/y.interval)} FPS`}var CS=()=>y&&!y.reelOn?y.video:null;function Hf(n){y.sound=n,y.reelOn&&y.rp?y.rp.mute(!n):y.video&&(y.video.muted=!n,n&&(y.video.volume=1),y.video.paused&&!y.frozen&&y.video.play().catch(()=>{})),Yn(),js()}var al=()=>!!(de&&de.src&&/^(video|youtube|vimeo)$/.test(de.kind));function yy(){y&&al()?(Mt&&Oh(),ol()):vS()}function RS(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let s=document.createElement("video");Object.assign(s,{muted:!0,playsInline:!0,preload:"auto",src:bt(e)}),s.setAttribute("playsinline","");let r=()=>{i.t=s.currentTime,i.d=isFinite(s.duration)?s.duration:0,i.paused=s.paused,js()};["timeupdate","durationchange","play","pause"].forEach(o=>s.addEventListener(o,r)),s.addEventListener("loadedmetadata",()=>{s.videoWidth&&(i.ratio=s.videoWidth/s.videoHeight),Vf(),r()}),s.addEventListener("ended",()=>xi()),Object.assign(i,{el:s,play:()=>s.play().catch(()=>{}),pause:()=>s.pause(),mute:o=>{s.muted=o,o||(s.volume=1)},seek:o=>{s.currentTime=o}})}else{let s=document.createElement("iframe"),r=n==="youtube",o=r?Va(e):Ga(e),a=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";s.src=r?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${a}`:Nh(o,"autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0"),s.allow="autoplay; encrypted-media",s.tabIndex=-1,s.title="Showreel",s.referrerPolicy="strict-origin-when-cross-origin";let l=h=>{try{s.contentWindow.postMessage(JSON.stringify(h),"*")}catch{}},c=r?(h,u=[])=>l({event:"command",func:h,args:u}):(h,u)=>l(u===void 0?{method:h}:{method:h,value:u});s.addEventListener("load",()=>{if(!r)return;let h=0;clearInterval(i.hello),l({event:"listening",id:"hvreel",channel:"widget"}),i.hello=setInterval(()=>{if(i.heard||++h>60){clearInterval(i.hello);return}l({event:"listening",id:"hvreel",channel:"widget"})},250)}),i.showAt=r?3.2:.4,t.classList.add("wait"),Object.assign(i,{el:s,post:l,play:()=>{i.paused=!1,i.hold=!1,i.playAt=performance.now(),i.showAt=i.t+(r?2.6:.3),c(r?"playVideo":"play"),xh(),js()},pause:()=>{i.paused=!0,i.hold=!0,c(r?"pauseVideo":"pause"),xh(),js()},mute:h=>{r?(c(h?"mute":"unMute"),h||c("setVolume",[100])):(c("setMuted",h),h||c("setVolume",1))},seek:h=>{r?c("seekTo",[h,!0]):c("setCurrentTime",h),i.t=h,js()}})}return LS(i,t)}function xh(){let n=y&&y.rp;if(!n||n.kind==="video")return;let e=y.reelOn&&!n.paused&&(n.forced||n.t>=(n.showAt||0));e!==!!n.shown&&(n.shown=e,n.box.classList.toggle("wait",!e),y.video&&!Mt&&!y.frozen&&(e?y.video.pause():y.reelOn&&y.video.play().catch(()=>{})))}function LS(n,e){let t=document.createElement("div");return t.className="grid",e.append(n.el,t),n}window.addEventListener("message",n=>{let e=y&&y.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.heard||(e.heard=!0,clearInterval(e.hello),e.kind==="youtube"&&e.mute(!y.sound)),e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&y.reelOn){xi();return}i.playerState===1?(e.paused=!1,e.playingAt=performance.now()):i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),y.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d,e.t>0&&(e.playingAt=performance.now());else if(t.event==="play")e.paused=!1,e.playingAt=performance.now();else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&y.reelOn){xi();return}}js(),xh()}});var PS=()=>window.innerHeight>window.innerWidth*1.1;function vy(){let n=(ve&&ve.settings.showreelMobile||"").trim(),e=n?Dr(n):"";return n&&/^(video|youtube|vimeo)$/.test(e)&&PS()?{kind:e,src:n,vertical:!0}:{kind:de.kind,src:de.src,vertical:!1}}function Vf(){let n=y&&y.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=n.ratio,s=e,r=e/i;r<t&&(r=t,s=t*i),Object.assign(n.el.style,{width:Math.ceil(s)+"px",height:Math.ceil(r)+"px",left:Math.round((e-s)/2)+"px",top:Math.round((t-r)/2)+"px"});let o=document.getElementById("hv-turn");o||(o=document.createElement("p"),o.id="hv-turn",o.className="ui",o.setAttribute("aria-hidden","true"),document.getElementById("home-band").appendChild(o)),o.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 13.5a8.5 8.5 0 0 0 6 6.6M2.2 16.6l1.3-3.2 3 1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>'+_e(Me("hv_turn"))+"</span>",Pn.classList.toggle("reel-crop",i/(e/t)>1.6)}function ol(n=!1){if(!y||!al())return!1;if(n||(y.userReel=!0),y.reelOn)return!0;y.setOpen&&y.setOpen(!1),y.cam&&Uh();let e=vy(),t=e.kind+"|"+e.src;if(!y.rp||y.rp.key!==t){y.rp&&(y.rp.pause(),y.rp.box.remove()),y.rp=RS(e.kind,e.src),y.rp.key=t,e.vertical&&(y.rp.ratio=9/16);let i=document.getElementById("home-band");i.insertBefore(y.rp.box,i.querySelector(".hv-shade")),y.sound&&e.kind==="video"&&y.rp.mute(!1),e.kind==="video"&&y.rp.play()}else y.rp.seek(0),y.rp.play(),y.rp.mute(!y.sound);return y.reelOn=!0,y.rp.box.hidden=!1,y.rp.playAt=performance.now(),IS(),y.rp.kind==="video"?y.video&&y.video.pause():(y.rp.shown=!0,xh()),Pn.classList.add("reel-on"),Vf(),js(),Yn(),n||rr("showreel","Showreel",!0),!0}var Yc=0;function IS(){clearInterval(Yc),Yc=setInterval(()=>{let n=y&&y.rp;if(!n||!y.reelOn||n.kind==="video"||n.shown){clearInterval(Yc);return}if(!(n.hold||Mt)&&!((n.playingAt||0)>(n.playAt||0))&&!(performance.now()-(n.playAt||0)<(y.userReel?8e3:6e3))){if(clearInterval(Yc),!n.heard||!y.userReel){y.userReel||(y.reelRefused=!0),xi();return}n.showAt=0,n.forced=!0,n.shown=!0,n.box.classList.remove("wait"),y.video&&!y.frozen&&y.video.pause()}},500)}function xi(){!y||!y.reelOn||(y.reelOn=!1,y.rp.pause(),y.rp.box.hidden=!0,y.fresh=!0,y.rp.shown=!1,y.rp.kind!=="video"&&y.rp.box.classList.add("wait"),y.video&&!Mt&&!y.frozen&&(y.video.muted=!y.sound,y.video.play().catch(()=>{})),Pn.classList.remove("reel-on"),js(),Yn())}var NS=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Ud=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),xy=()=>{let n=y&&y.rp;!n||!y.reelOn||(n.paused?n.play():n.pause())};function DS(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),y.reelBar=e,e.querySelector(".pp").addEventListener("click",xy),e.querySelector(".snd").addEventListener("click",()=>Hf(!y.sound)),e.querySelector(".x").addEventListener("click",xi);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=y.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=y.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function js(){let n=y&&y.reelBar;if(!n||(n.hidden=!y.reelOn,rl(),!y.reelOn))return;let e=y.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=NS(e.paused),s.setAttribute("aria-label",Me(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Ud(i)} / ${Ud(t)}`:Ud(i);let r=n.querySelector(".snd");r.innerHTML=Ff(y.sound),r.setAttribute("aria-label",Me(y.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(y.sound)),n.querySelector(".x").setAttribute("aria-label",Me("close"))}function US(){return new Promise(n=>{let e=document.getElementById("home-band"),t=document.getElementById("hv-consent");t&&t.remove(),t=document.createElement("div"),t.id="hv-consent",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`<p>${_e(Me("hv_consent"))}</p><div class="bt"><button type="button" class="ok">${Oa.shot}<span>${_e(Me("hv_camYes"))}</span></button><button type="button" class="no">${_e(Me("cancel"))}</button></div>`,e.appendChild(t),t.setAttribute("aria-label",Me("hv_cam"));let i=r=>{window.removeEventListener("keydown",s,!0),t.classList.remove("on"),setTimeout(()=>t.remove(),250),n(r)},s=r=>{r.code==="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),i(!1))};window.addEventListener("keydown",s,!0),t.querySelector(".ok").addEventListener("click",()=>i(!0)),t.querySelector(".no").addEventListener("click",()=>i(!1)),requestAnimationFrame(()=>{t.classList.add("on"),t.querySelector(".ok").focus({preventScroll:!0})})})}async function _y(){if(ka(""),!y.camOK){if(!await US()){Yn();return}y.camOK=!0}try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),y.reelOn&&xi(),y.cam={stream:n,video:e},y.lo=0,y.hi=1,y.video&&y.video.pause(),y.panel||ka(Me("hv_camNote"),6e3)}catch{ka(Me("hv_camDenied"),4e3)}Yn()}function Uh(){if(y&&y.cam){y.cam.stream.getTracks().forEach(e=>e.stop()),y.cam=null;let n=CS();n&&!Mt&&n.play().catch(()=>{}),ka("")}y&&Yn()}function OS(){y&&(xi(),Uh(),y.video&&y.video.pause())}function jc(n,e,t,i=1,s=0,r=0,o=!1,a=!1){let l=y.rctx,c=y.raw.width,h=y.raw.height,u=(a?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,p=t*u;o&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-p)/2+r*h,d,p),o&&l.restore()}function kS(n){let e=y.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,y.raw.width,y.raw.height),y.cam&&y.cam.video.readyState>=2)return jc(y.cam.video,y.cam.video.videoWidth,y.cam.video.videoHeight,1,0,0,!0),!0;if(y.video)return y.video.readyState<2?!1:(jc(y.video,y.video.videoWidth,y.video.videoHeight),!0);let t=y.pics.filter(d=>d.complete&&d.naturalWidth);if(!t.length)return!1;let i=y.raw.width,s=y.raw.height,r=s>i*1.1,o=r?9:7,a=Math.max(0,n)/o,l=t.length,c=(Math.floor(a)%l+l)%l,h=a-Math.floor(a),u=(d,p,g,v)=>{if(e.globalAlpha=g,r){let f=Math.max(i/d.naturalWidth,s/d.naturalHeight)*1.04,M=Math.max(0,(d.naturalWidth*f-i)/2/i),b=Math.max(0,Math.min(1,p)),P=b*b*(3-2*b),I=v%2?1:-1;jc(d,d.naturalWidth,d.naturalHeight,1.04,I*M*.7*(1-2*P),0)}else jc(d,d.naturalWidth,d.naturalHeight,1.18-.12*p,Math.sin(p*2.2)*.06,Math.cos(p*1.7)*.05)};return u(t[c],h,1,c),h>.78&&l>1&&u(t[(c+1)%l],h-1,(h-.78)/.22,c+1),e.globalAlpha=1,!0}var BS=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function FS(n){if(y.pyr&&y.pyr.cell===n&&y.pyr.fill===y.fill&&y.pyr.round===y.round)return y.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=(y.round?Math.hypot(o+.5-s,r+.5-s)/1.12:Math.max(Math.abs(o+.5-s),Math.abs(r+.5-s)))/s,l=Math.max(0,Math.min(1,1-a/y.fill))*255,c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),y.pyr={cell:n,fill:y.fill,round:y.round,pat:y.ctx.createPattern(e,"repeat")},y.pyr.pat}function af(n,e,t){let i=y.ctx,s=y.W,r=y.H,o=Math.round((s-n*t)/2),a=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!BS){i.globalAlpha=.45,i.drawImage(y.off,o,a,n*t,e*t),i.globalAlpha=1;return}y.tmp||(y.tmp=document.createElement("canvas"),y.tctx=y.tmp.getContext("2d"));let l=y.tmp,c=y.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${y.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+y.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(y.off,o,a,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(o,a),c.fillStyle=FS(t),c.fillRect(-o,-a,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),y.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",y.color==="source"?i.drawImage(y.off,o,a,n*t,e*t):(i.fillStyle=y.color==="grey"?"#8d8d8d":ve.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var ll=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},of=()=>y.floor||y.interval>1e3/29?1:y.delay;function zS(n){if(!y||!y.W)return;let e=y.exit?n-y.exit:-1;if(e>e0){y.cleared||(y.cleared=!0,y.ctx.fillStyle="#0b0b0b",y.ctx.fillRect(0,0,y.W,y.H),n0());return}if(y.reelOn&&(!y.rp||y.rp.kind==="video"||y.rp.shown)||n-y.last<(e>=0?1e3/60:y.interval)-2)return;y.last=n;let t=performance.now(),i=ll.matches?0:(n-y.t0)/1e3,s=y.ctx,r=y.W,o=y.H;if(y.panel&&y.panel.classList.contains("open")&&n-(y.statAt||0)>500&&(y.statAt=n,gy()),Gf()||(s.fillStyle="#0b0b0b",s.fillRect(0,0,r,o)),y.intro&&n<y.intro){n0();return}let a=y.intro?n-y.intro:-1;if(a>HS&&(y.intro=0),y.frozen||e>=0&&y.frozenAt&&n-y.sampleAt<y.interval){let f=y.frozenAt;if(!f)return;y.tainted?e<e0/3&&af(f.cols,f.rows,f.cell):i0(f.d,f.cols,f.rows,f.cell,e,-1);return}let l=Math.max(y.cell,y.floor),c=Math.ceil(r/l),h=Math.ceil(o/l);if((y.off.width!==c||y.off.height!==h)&&(y.off.width=y.raw.width=c,y.off.height=y.raw.height=h,y.fresh=!0),!kS(i))return;let u=of();y.octx.globalAlpha=y.fresh||u<=1?1:1-Math.pow(1-1/u,y.interval/(1e3/30)),y.octx.drawImage(y.raw,0,0),y.octx.globalAlpha=1,y.fresh=!1;let d=null;if(!y.tainted)try{d=y.octx.getImageData(0,0,c,h).data}catch{y.tainted=!0}if(y.frozenAt={d,cols:c,rows:h,cell:l},y.sampleAt=n,y.tainted?(y.gl&&(y.gl.c.style.display="none",y.gl=null),af(c,h,l)):i0(d,c,h,l,e,a),e>=0)return;let p=performance.now()-t;y.cost=y.cost*.9+p*.1;let g=y.gl?[60,30,24,20]:[30,24,20],v=Math.round(1e3/y.interval),m=Math.max(0,g.indexOf(v));y.cost>(y.gl?9:14)&&++y.slow>15?(y.panel&&setTimeout(Yn,0),y.slow=0,m<g.length-1?y.interval=1e3/g[m+1]:y.floor=Math.min(Math.max(y.cell+6,14),Math.max(y.floor,l)+2)):y.cost<4&&++y.fast>60&&(y.panel&&setTimeout(Yn,0),y.fast=0,y.floor?y.floor=Math.max(0,y.floor-2):m>0&&(y.interval=1e3/g[m-1]))}var e0=420,HS=650,t0=(n,e)=>Math.pow(1-1/n,e*.06);function by(n,e,t,i,s=-1,r=-1){let o=y.ctx,a=e*t,l=y.lum&&y.lum.length===a?y.lum:y.lum=new Float32Array(a),c=1,h=0;for(let I=0,C=0;I<a;I++,C+=4){let N=(.2126*n[C]+.7152*n[C+1]+.0722*n[C+2])/255;l[I]=N,N<c&&(c=N),N>h&&(h=N)}y.lo+=(c-y.lo)*.15,y.hi+=(Math.max(h,y.lo+.15)-y.hi)*.15;let u=y.lo,d=1/(y.hi-u),p=y.mode==="dark",g=y.gamma,v=i*y.fill,m=(y.W-e*i)/2,f=(y.H-t*i)/2,M=y.color==="source",b=s>=0||r>=0,P=M?WS(o):o;P.fillStyle=M?"#fff":y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2",P.beginPath();for(let I=0,C=0;I<t;I++){let N=f+I*i+i/2;for(let z=0;z<e;z++,C++){let w=(l[C]-u)*d;w=w<0?0:w>1?1:w,p&&(w=1-w);let S=(g===1?w:Math.pow(w,g))*v;if(S<.6)continue;let F=m+z*i+i/2,ie=N;if(b){let le=S/v;if(s>=0?S*=t0(2.4+4.6*le,s):S*=1-t0(3+4*le,r),S<.6)continue}if(y.round){let le=Math.min(S*.56,i/2);P.moveTo(F+le,ie),P.arc(F,ie,le,0,6.2832)}else P.rect(F-S/2,ie-S/2,S,S)}}P.fill(),M&&(P.globalCompositeOperation="source-in",P.imageSmoothingEnabled=!1,P.drawImage(y.off,m,f,e*i,t*i),P.globalCompositeOperation="source-over",o.save(),o.setTransform(1,0,0,1,0,0),o.drawImage(P.canvas,0,0),o.restore())}function VS(n){try{let e=document.createElement("canvas");e.id="home-gl",e.setAttribute("aria-hidden","true");let t=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return null;let i=(c,h)=>{let u=t.createShader(c);if(t.shaderSource(u,h),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(u));return u},s=t.createProgram();if(t.attachShader(s,i(t.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}")),t.attachShader(s,i(t.FRAGMENT_SHADER,`precision highp float;
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
}`)),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return null;t.useProgram(s);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let o=t.getAttribLocation(s,"a");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);let a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]].forEach(([c,h])=>t.texParameteri(t.TEXTURE_2D,c,h)),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let l={};return["grid","org","res","cell","maxs","lo","k","gam","dark","ex","intro","dpr","src","rnd","col","bg"].forEach(c=>{l[c]=t.getUniformLocation(s,c)}),n.after(e),{c:e,gl:t,u:l,dpr:1,data:null}}catch{return null}}var Gf=()=>!!(y&&y.gl&&!y.gl.gl.isContextLost());function n0(){if(!Gf())return;let n=y.gl.gl;n.viewport(0,0,y.gl.c.width,y.gl.c.height),n.clearColor(11/255,11/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT)}var GS=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n||"").trim()),t=e?parseInt(e[1],16):15921906;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function i0(n,e,t,i,s=-1,r=-1){if(!Gf()){by(n,e,t,i,s,r);return}let o=y.gl,a=o.gl,l=o.u,c=e*t,h=1,u=0;for(let p=0,g=0;p<c;p++,g+=4){let v=(.2126*n[g]+.7152*n[g+1]+.0722*n[g+2])/255;v<h&&(h=v),v>u&&(u=v)}y.lo+=(h-y.lo)*.15,y.hi+=(Math.max(u,y.lo+.15)-y.hi)*.15,o.data!==n&&(o.data=n,a.texImage2D(a.TEXTURE_2D,0,a.RGBA,e,t,0,a.RGBA,a.UNSIGNED_BYTE,new Uint8Array(n.buffer,n.byteOffset,c*4))),a.viewport(0,0,o.c.width,o.c.height);let d=GS(y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2");a.uniform2f(l.grid,e,t),a.uniform2f(l.org,(y.W-e*i)/2,(y.H-t*i)/2),a.uniform2f(l.res,o.c.width,o.c.height),a.uniform1f(l.cell,i),a.uniform1f(l.maxs,i*y.fill),a.uniform1f(l.lo,y.lo),a.uniform1f(l.k,1/(y.hi-y.lo)),a.uniform1f(l.gam,y.gamma),a.uniform1f(l.dark,y.mode==="dark"?1:0),a.uniform1f(l.ex,s),a.uniform1f(l.intro,r),a.uniform1f(l.dpr,o.dpr),a.uniform1f(l.src,y.color==="source"?1:0),a.uniform1f(l.rnd,y.round?1:0),a.uniform3f(l.col,d[0],d[1],d[2]),a.uniform3f(l.bg,11/255,11/255,11/255),a.drawArrays(a.TRIANGLES,0,3)}function WS(n){let e=n.canvas;y.mask||(y.mask=document.createElement("canvas"),y.mctx=y.mask.getContext("2d")),(y.mask.width!==e.width||y.mask.height!==e.height)&&(y.mask.width=e.width,y.mask.height=e.height);let t=y.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var Pn=document.getElementById("home"),ir=document.getElementById("enter"),$S=ir.querySelector(".lbl"),Rr=document.getElementById("ticker"),s0=Rr.getContext("2d"),Fi=null,qs=0,Ba=1;function Wf(n){$S.textContent=n,ir.setAttribute("aria-label",n)}var r0={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},qS=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[‘’]/g,"'").replace(/[“”«»]/g,'"').toUpperCase(),t=r0[e]||r0["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function XS(n){let e=i=>i.published&&ve.sections.some(s=>s.id===i.section&&s.visible),t=ve.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+ve.settings.founded||2012));case"auto:projects":return String(ve.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(ve.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var YS=()=>(ve.settings.home&&ve.settings.home.figures||[]).map(n=>({value:XS(n.value),label:he(n.label)})).filter(n=>n.value&&n.label),jS=()=>YS().map(n=>`${n.value} ${n.label}`);function ZS(){let n=he(ve.settings.home.sub||{}).replace(/\s*\n\s*/g," ").trim(),e=he(ve.settings.home.quotes||{}).split(/\n+/).map(s=>s.trim()).filter(Boolean),t=n?[n,...e]:[...jS(),...e,...ve.settings.home.ticker||[]].filter(Boolean),i=(t.length?t:[ve.settings.name]).map(s=>String(s).replace(/œ/g,"oe").replace(/Œ/g,"OE").replace(/æ/g,"ae").replace(/…/g,"...").replace(/·/g,".").toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Fi=JS(i)}function JS(n){let e=[];for(let t of n){let i=qS(t),s=t===" "?3:5;for(let r=0;r<s;r++){let o=0;for(let a=0;a<7;a++)i[a]&1<<4-r&&(o|=1<<a);e.push(o)}e.push(0)}return{w:e.length,cols:e}}var vi={pitch:3.2,rows:7,h:30},Aa=null,a0="";function o0(n,e){let t=Ba,i=Math.ceil(vi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=i/2;if(e){let a=r.createRadialGradient(o,o,0,o,o,o);a.addColorStop(0,n),a.addColorStop(.35,n),a.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=a,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(o,o,vi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(o-vi.pitch*.1*t,o-vi.pitch*.1*t,vi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function My(){Ba=Math.min(window.devicePixelRatio||1,2),Rr.width=Math.round(window.innerWidth*Ba),Rr.height=Math.round(vi.h*Ba),Aa=null,Xs=null}var Uo=0,Xs=null;function KS(n){let e=Ba,t=vi.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[Fi.w,i,e,n].join("|");if(Xs&&Xs.dots===Fi&&Xs.key===s)return Xs;(!Aa||a0!==n)&&(a0=n,Aa={on:o0(n,!0),off:o0(n,!1)});let r=i+Fi.w+i,o=document.createElement("canvas");o.width=Math.ceil(r*t*e),o.height=Math.round(vi.h*e);let a=o.getContext("2d"),l=(vi.h-vi.rows*t)/2,c=Aa.on.width/2;a.fillStyle="#000",a.fillRect(0,0,o.width,o.height);for(let h=0;h<r;h++){let u=h<i?0:Fi.cols[(h-i)%Fi.w],d=(h*t+t/2)*e-c;for(let p=0;p<vi.rows;p++)a.drawImage(u>>p&1?Aa.on:Aa.off,d,(l+p*t+t/2)*e-c)}return Xs={canvas:o,dots:Fi,key:s,shown:-1,lead:i}}function QS(n){let e=+(ve.settings.home||{}).tickerSpeed;Uo+=n*(e>0?Math.min(120,e):26);let t=KS(ve.settings.accent||"#ffcc00");Uo>=1&&(qs+=Math.floor(Uo),Uo%=1),qs>=t.lead+Fi.w&&(qs=t.lead+(qs-t.lead)%Fi.w),t.shown!==qs&&(t.shown=qs,s0.setTransform(1,0,0,1,0,0),s0.drawImage(t.canvas,qs*vi.pitch*Ba,0,Rr.width,Rr.height,0,0,Rr.width,Rr.height))}var Mt=!1,Ur=!1,cl=!1,Or=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),lf=0,cf=0,Od=!1,eE=180;function $f(n=cl){if(!(Mt||Od)){if(!(n&&y&&y.W&&!Pn.hidden&&!ll.matches)){l0();return}Od=!0,Pn.classList.add("leaving"),y.setOpen&&y.setOpen(!1),y.reelOn&&xi(),tE(),y.exit=performance.now(),y.cleared=!1,y.intro=0,setTimeout(()=>{Od=!1,l0()},eE)}}function tE(){y&&(y.frozen=!0,y.video&&y.video.pause(),y.rp&&y.rp.pause(),y.cam&&(y.cam.stream.getTracks().forEach(n=>n.stop()),y.cam=null))}function l0(){if(!Mt){if(Mt=!0,clearTimeout(lf),Z0=performance.now(),!St&&Or())try{history.pushState(null,"",location.pathname+location.search+"#"+(ve.sections.find(n=>n.id===ve.settings.startSection&&n.visible)||Ut[0].def).id)}catch{}sE(),qw(),Nr(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Pn.classList.add("out"),lf=setTimeout(()=>{Pn.hidden=!0,OS()},1250)})),cn.classList.add("on"),setTimeout(Zw,1500),ar.hidden=!1,Yo.classList.remove("hidden"),nn.focus({preventScroll:!0})}}function Oh(n=!0){if(Mt&&(Ci(),dh(),uh(),Eh(),sl(null),Of(),Mt=!1,cl=!1,clearTimeout(lf),cf=performance.now()+1300,ir.classList.remove("wait"),Wf(he(ve.settings.home.enter)||Me("enter")),wy=performance.now(),y&&(y.exit=0,y.frozen=!1,y.cleared=!1,y.fresh=!0,y.intro=performance.now()+450),Pn.classList.remove("leaving"),Pn.hidden=!1,Pn.offsetWidth,Pn.classList.remove("out"),y&&y.video&&y.video.play().catch(()=>{}),n&&!St))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!St){if(Qs.open){Qs.pushed=!1,Ms();try{history.replaceState(null,"",location.pathname+location.search+"#"+H.section.def.id)}catch{}return}if(Qs.pushed=!1,Or())Oh(!1);else if(!Mt&&Ur)$f();else if(Mt&&Ss){let n=Ut.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&bn&&nl(n)}}});cn.addEventListener("click",n=>{n.target.closest(".wm")&&Mt&&Oh()});cn.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&Mt&&(n.preventDefault(),Oh())});ir.addEventListener("click",()=>{cl=!0,Ur?$f():(Wf(Me("loading")),ir.classList.add("wait"))});var wy=0,Zc=0,c0=0,zo=null,Sy=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function qf(){if(Mt||cl||performance.now()-wy<900||de&&de.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||ir.click()}Pn.addEventListener("wheel",n=>{if(Mt||Sy(n.target))return;let e=performance.now();e-c0>350&&(Zc=0),c0=e,n.deltaY>0&&(Zc+=n.deltaY*(n.deltaMode?30:1),Zc>40&&(Zc=0,qf()))},{passive:!0});Pn.addEventListener("touchstart",n=>{zo=n.touches.length===1&&!Sy(n.target)?n.touches[0].clientY:null},{passive:!0});Pn.addEventListener("touchmove",n=>{zo!==null&&n.touches.length===1&&zo-n.touches[0].clientY>46&&(zo=null,qf())},{passive:!0});Pn.addEventListener("touchend",()=>{zo=null},{passive:!0});window.addEventListener("keydown",n=>{if(Mt||n.ctrlKey||n.metaKey||n.altKey||de&&de.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&y&&y.reelOn){n.preventDefault(),xy();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),qf()}});var hf=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function nE(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return St&&St.tag&&(e=St.tag),hf(e||n)}function iE(n,e){let t=n.tags||[],i=t.find(s=>hf(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>hf(r)===e));return i?i.id:""}function sE(){try{Rn.compile($d,Ln,ni)}catch{}Lh();let n=St&&St.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Ut.findIndex(o=>o.def.id===e);i<0&&(i=Math.max(0,Ut.findIndex(o=>o.def.id===ve.settings.startSection)));let s=nE(t||(e&&i<0?e:""));if(s){let o=Ut.findIndex(a=>a.def.id===e)>=0?[i]:[i,...Ut.keys()];for(let a of o){let l=iE(Ut[a].def,s);if(l){i=a,Ut[a].def.defaultTag=l;break}}}ws=oe.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=Es();H.cameraY=Ha(),yt.x=_s()*Math.sin(H.degreeCamera)+r.p.x,yt.y=H.cameraY,yt.z=_s()*Math.cos(H.degreeCamera)+r.p.z,zn.x=r.p.x,zn.y=Ch(),zn.z=r.p.z,Ss=!0,nl(i,0),(zt<=700||Ot<=520)&&Nr()}var h0=performance.now(),u0=NaN,d0=0,uf=0,rE=(n=700)=>{uf=Math.max(uf,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>rE(),{passive:!0}));function aE(){let n=Ln.position,e=Ln.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+Ln.fov*7.3,i=1;return ni.traverseVisible(s=>{i+=1.13;let r=s.position,o=s.rotation,a=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+o.x*3.1+o.y*3.7+o.z*4.3+a.x*5.3+a.y*5.9+a.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function oE(){if(!Rn.compileAsync)return;let n=new Vs;n.setPositions([0,0,0,1,1,1]);let e=new us;gf.forEach(s=>e.add(new Ea(n,s)));let t=()=>{if(Mt){n.dispose();return}let s=new Sn;[...$d.children,...e.children].forEach(r=>{let o=r.clone();o.frustumCulled=!1,s.add(o)}),ni.add(s);try{Rn.render(ni,Ln)}catch{}ni.remove(s);try{Ko()}catch{}n.dispose()},i=()=>Promise.all([$d,e,ni].map(s=>Rn.compileAsync(s,Ln,ni).catch(()=>{}))).then(()=>(window.requestIdleCallback||(s=>setTimeout(s,50)))(t,{timeout:800}));(window.requestIdleCallback||(s=>setTimeout(s,200)))(i,{timeout:1500})}var kd=0;function Ey(n){let e=Math.min(.25,Math.max(0,(n-h0)/1e3));if(h0=n,vs+=e,Wo=e*_0,!Mt&&Fi&&!xs.classList.contains("hc-late")&&QS(e),y&&!Pn.hidden&&zS(n),Ss&&(Mt||n<cf)){uw(),Vw(),Gw(),$w(),Ne&&Ne.update(),mS(),Xe.step(),Yw();let t=Ai.length||n<uf||n<cf||Zi||jn||ti||n-d0>2e3,i=aE();(t||i!==u0||S0!==Ca)&&(Ko(),n-kd<100&&Mt&&!document.hidden&&mw(n,n-kd),kd=n,d0=n,u0=i)}requestAnimationFrame(Ey)}function Bd(n){console.error(n),rh(!0);let e=document.getElementById("load-error");e.textContent=Me("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function lE(){St||!/[?&]preview\b/.test(location.search)||window.parent===window||(St=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,o])=>{try{s.files[r]=URL.createObjectURL(o)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:x0},"*")}catch{}}))}var Ty=()=>{let n=he((ve.settings.home||{}).sub||{}).trim();if(/\n/.test(n))return n.split(/\n+/).map(i=>i.trim()).filter(Boolean);let e=[],t="";return n.split(/(?<=,)\s+/).forEach(i=>{t&&(t+" "+i).length>62?(e.push(t),t=i):t=t?t+" "+i:i}),t&&e.push(t),e};function cE(){let n=document.getElementById("hc-intro");if(!n)return;let e=n.querySelector(".ln"),t=Ty();if(!t.length){n.remove();return}e.querySelectorAll(".l").forEach(a=>a.getAnimations().forEach(l=>l.cancel())),e.innerHTML="",t.forEach(a=>{let l=document.createElement("span");l.className="l",l.textContent=a,e.appendChild(l)});let i=0,s=0;[...e.children].forEach((a,l)=>{a.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:i,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),l===t.length-1&&(s=i),i+=Math.max(650,Math.min(1700,120+16*t[l].length))*(100/Math.max(25,Math.min(400,+(ve.settings.home||{}).introPace||100)))});let r=ve.settings.home||{},o=r.introHold==null||r.introHold===""?2:+r.introHold;window.HC_INTRO={t0:performance.now(),video:s,depart:i+150+Math.max(0,Math.min(15,o))*1e3}}var Ia=null;function Ay(){if(Ia){Fd(Ia,!0);return}let n=Ty();if(!n.length)return;let e=!Mt,t=document.createElement("div");t.id="hc-say",t.className=e?"home":"world",t.setAttribute("role","status");let i=document.createElement("div");i.className="ln",t.appendChild(i);let s=document.querySelector("#home-band .sl span, #slogan span");if(s){let a=getComputedStyle(s);i.style.fontFamily=a.fontFamily,i.style.fontWeight=a.fontWeight,i.style.fontStyle=a.fontStyle}n.forEach(a=>{let l=document.createElement("span");l.className="l",l.textContent=a,i.appendChild(l)}),(e?document.getElementById("home"):document.body).appendChild(t),Ia=t;let r=0;[...i.children].forEach((a,l)=>{a.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:r,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),r+=Math.max(650,Math.min(1700,120+16*n[l].length))}),t.animate([{opacity:0},{opacity:1}],{duration:500,fill:"both"}),t._t=setTimeout(()=>Fd(t),r+900);let o=a=>{a.target.closest&&a.target.closest("#home-about, #about-btn")||Fd(t,!0)};setTimeout(()=>{Ia===t&&(t._away=o,window.addEventListener("pointerdown",o,!0),window.addEventListener("keydown",o,!0))},50)}function Fd(n,e=!1){if(n._gone)return;n._gone=!0,clearTimeout(n._t),Ia===n&&(Ia=null),n._away&&(window.removeEventListener("pointerdown",n._away,!0),window.removeEventListener("keydown",n._away,!0));let t=[...n.querySelectorAll(".l")],i=e?80:Cy,s=e?450:750,r=(t.length-1)*i;t.forEach((o,a)=>o.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:s,delay:a*i,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),n.animate([{opacity:0}],{duration:600,delay:r+s*.4,fill:"forwards"}),setTimeout(()=>n.remove(),r+s+50)}var Ho=!1,Vo=!1,Lr=!1,ih=!1,zd=0,f0=0,p0=!1,Cy=240;function sh(){if(Lr)return;Lr=!0;let n=document.getElementById("hc-intro");n&&n.classList.remove("hold"),hE()}function rh(n=!1,e=!1){let t=document.getElementById("hc-intro");if(!t||Ho)return;if(Ho=!0,window.HC_NOINTRO=!0,n||!t.animate){t.remove(),sh(),y0(!0);return}e&&(sh(),xs.classList.remove("hc-stage"));let i=[...t.querySelectorAll(".l")],s=e?80:Cy,r=e?450:750,o=(i.length-1)*s;i.forEach((a,l)=>a.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:r,delay:l*s,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),setTimeout(sh,o),setTimeout(()=>y0(),o+r+(e?0:500)),setTimeout(()=>t.remove(),o+r+1300)}function hE(){if(!(!y||Mt)){if(y.reelOn&&y.rp&&!y.userReel)Vo||(Vo=!0,y.rp.seek(0),y.rp.play());else if(!y.reelOn&&!y.userReel&&!y.reelRefused&&!y.cam&&al()&&Or()&&!ll.matches&&!(St&&St.start)){let n=setInterval(()=>{if(Mt||y.reelOn||y.cam){clearInterval(n);return}Ur&&(clearInterval(n),ol(!0),rl(),m0())},150);return}m0()}}function m0(){let n=document.getElementById("home-snd");n&&!n.hidden&&!y.sound&&(n.classList.remove("blink"),n.offsetWidth,n.classList.add("blink"),setTimeout(()=>n.classList.remove("blink"),1400))}var xs=document.documentElement,g0="cubic-bezier(.22,.61,.36,1)";function uE(){if(!xs.classList.contains("hc-stage"))return;let n=()=>{if(!xs.classList.contains("hc-stage"))return;let t=document.querySelector("#home-slogan .wm"),i=[...document.querySelectorAll("#home-slogan .tls > span")],s=[...document.querySelectorAll("#home-ctl > *")];xs.classList.remove("hc-stage");let r=(l,c,h=-24,u=900)=>l&&l.animate([{opacity:0,transform:`translateX(${h}px)`,filter:"blur(6px)"},{opacity:getComputedStyle(l).opacity,transform:"none",filter:"blur(0)"}],{duration:u,delay:c,easing:g0,fill:"backwards"});r(t,0,-30,1100),i.forEach((l,c)=>r(l,380+c*130,-18,800)),s.forEach((l,c)=>l.animate([{opacity:0,transform:"scale(.6)"},{opacity:getComputedStyle(l).opacity,transform:"none"}],{duration:520,delay:760+c*90,easing:"cubic-bezier(.34,1.4,.64,1)",fill:"backwards"}));let o=document.getElementById("enter");o&&o.animate([{opacity:0,transform:"translate(-50%, 10px)"},{opacity:1,transform:"translateX(-50%)"}],{duration:700,delay:900,easing:g0,fill:"backwards"}),setTimeout(()=>{ih=!0},1150+s.length*60);let a=Math.max(1100,380+Math.max(0,i.length-1)*130+800,760+Math.max(0,s.length-1)*90+520)+120;setTimeout(()=>{let l=document.getElementById("hc-intro");l&&!Lr&&l.classList.add("beat-on")},a)};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(t=>setTimeout(t,1200))]):Promise.resolve()).then(()=>requestAnimationFrame(n))}function y0(n=!1){xs.classList.contains("hc-late")&&(xs.classList.remove("hc-stage","hc-late"),qs=0,Uo=0,Xs&&(Xs.shown=-1),!n&&["#ticker","#home-dock"].forEach((e,t)=>{let i=document.querySelector(e);i&&i.animate([{opacity:0},{opacity:getComputedStyle(i).opacity}],{duration:1200,delay:t*220,easing:"ease",fill:"backwards"})}))}function dE(){if(!document.getElementById("hc-intro"))return;let e=!!y&&al()&&Or()&&!ll.matches&&!(St&&St.start),t=!1,i=!e,s=0,r=()=>rh(!1,!0);["pointerdown","keydown","wheel","touchmove"].forEach(a=>window.addEventListener(a,r,{once:!0,passive:!0,capture:!0}));let o=setInterval(()=>{if(Ho&&Lr){clearInterval(o);return}if(Mt){clearInterval(o),rh(!0);return}e&&Ur&&!t&&!y.reelOn&&!y.cam&&!y.reelRefused&&(t=ol(!0)),t&&!i&&y.rp&&y.rp.t>.05&&(y.rp.pause(),y.rp.seek(0),i=!0),t&&!y.reelOn&&(i=!0);let a=performance.now(),l=!y||!y.rp?0:y.rp.kind==="youtube"?2900:y.rp.kind==="vimeo"?500:0;!ih&&!xs.classList.contains("hc-stage")&&!xs.classList.contains("hc-late")&&(ih=!0),!Lr&&ih&&(zd||(zd=a),l&&i&&y.reelOn&&!Vo&&(Vo=!0,s=a,y.rp.seek(0),y.rp.play()),((e?!y.reelOn||i&&(!l||Vo&&(y.rp.shown||a>=s+l+4e3)):Ur)||a-zd>7e3)&&(sh(),f0=a+1e3)),Lr&&!p0&&!Ho&&a>=f0&&(p0=!0,window.HC_GO&&window.HC_GO());let c=window.HC_INTRO;c&&!Ho&&Lr&&a>=c.t0+c.depart+600&&rh()},60)}(async function(){try{await lE(),St?ve=Gs(structuredClone(St.content)):(ve=await Jc.load(),Jc.prepare&&await Jc.prepare(ve))}catch(a){Bd(a);return}_n=_h(),B0();{let a=vf();a!==null&&(_n=a)}xf();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=ve.settings.langs&&ve.settings.langs.length?ve.settings.langs:ai,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}let r=((window.HC_ROUTE||{}).lang||"").toLowerCase();if(xn=t.includes(s)?s:t.includes(r)?r:t.includes(e)?e:i||ve.settings.defaultLang||t[0],Ut=ve.sections.filter(a=>a.visible).map(a=>({def:a})),!Ut.length){Bd(new Error("aucune section visible"));return}if(!St)try{let a={"nouveau-contenu":"immersive","nouveau-contenu-4":"la-traversee-du-temps","nouveau-contenu-5":"valentin-ducros","nouveau-contenu-7":"laurent-delforge","fat-site-2008":"les-debuts","nokia-navigator":"les-debuts",lexus:"les-debuts","pubs-interactives":"les-debuts"},l=new URLSearchParams(location.search).get("p")||(window.HC_ROUTE||{}).p,c=l&&!ve.posts.some(u=>u.id===l)&&a[l]?a[l]:l,h=c&&ve.posts.find(u=>u.id===c&&u.published!==!1&&Ut.some(d=>d.def.id===u.section));h&&(nh=h.id,history.replaceState(null,"",location.pathname+location.search+"#"+h.section))}catch{}eS(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&b0(!1),K0(),Rf(),jw(),_S(),St&&cE(),dE(),uE(),q0(),Lh(),My(),requestAnimationFrame(Ey),Tr=Ut.map((a,l)=>new Xd(a.def,l)),Ut.forEach((a,l)=>{a.object=Tr[l]}),Ut.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let o=new Dc(L0);try{(await Promise.allSettled(Tr.map(l=>l.load(o)))).forEach((l,c)=>{l.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+Tr[c].def.id+" \xBB :",l.reason)}),Tr.forEach((l,c)=>l.place(c)),await Promise.race([Promise.all(k0).then(sr),new Promise(l=>setTimeout(l,3e3))]),Ur=!0,oE();{let l=document.getElementById("seo-page");l&&l.remove()}if((cl||!Or()||St&&St.start)&&$f(),nh){let l=nh,c=performance.now(),h=setInterval(()=>{(bn||performance.now()-c>8e3)&&(clearInterval(h),bn&&il(l))},120)}}catch(a){Bd(a)}})();window.__hc={P:H,STYLE:oe,cam:yt,camera:Ln,renderer:Rn,get hv(){return y&&{cell:y.cell,floor:y.floor,fps:Math.round(1e3/y.interval),cost:+y.cost.toFixed(1),tainted:y.tainted}},get input(){return bn},get homeGone(){return Mt},get content(){return ve},get postsView(){return Ne},getToSectionView:nl,openThatPost:jo,closePost:Ms,goToPost:il,setLang:Lf,enter:()=>ir.click()};})();
